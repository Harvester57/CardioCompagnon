import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  CheckCircle2,
  FileUp,
  Lock,
  Settings,
  ShieldAlert,
  Sparkles,
  X,
} from 'lucide-react';
import { getTodayIsoDate, useActiveDb, useAppSettings } from '../../db';
import { AI_PRIVACY_REMINDER_FR, extractReportWithAi } from '../../services';
import type {
  ExtractionProposal,
  ImagingExam,
  LabResult,
  Medication,
  MedicationPillar,
} from '../../types';
import {
  LGE_PATTERN_LABELS,
  LV_THROMBUS_LABELS,
  MITRAL_REGURGITATION_LABELS,
  parseFrenchDecimal,
} from './constants';

export interface AiImportModalProps {
  open: boolean;
  onClose: () => void;
  onSaved?: (kind: ExtractionProposal['kind']) => void;
}

interface EditableFields {
  [key: string]: string | boolean;
}

const LAB_REVIEW_FIELDS: { key: string; label: string; placeholder: string }[] = [
  { key: 'date', label: 'Date (AAAA-MM-JJ)', placeholder: '2026-11-24' },
  { key: 'ntProBnpPgMl', label: 'NT-proBNP (pg/mL)', placeholder: 'ex. 610' },
  { key: 'bnpPgMl', label: 'BNP (pg/mL)', placeholder: 'ex. 120' },
  { key: 'creatinineUmolL', label: 'Créatinine (µmol/L)', placeholder: 'ex. 98' },
  { key: 'egfrMlMin', label: 'DFGe (mL/min/1,73 m²)', placeholder: 'ex. 68' },
  { key: 'potassiumMmolL', label: 'Potassium K+ (mmol/L)', placeholder: 'ex. 4,6' },
  { key: 'sodiumMmolL', label: 'Sodium Na+ (mmol/L)', placeholder: 'ex. 140' },
  { key: 'ferritinUgL', label: 'Ferritine (µg/L)', placeholder: 'ex. 85' },
  { key: 'tsatPercent', label: 'CST (%)', placeholder: 'ex. 20' },
  { key: 'ldlGL', label: 'LDL-c (g/L)', placeholder: 'ex. 0,52' },
  { key: 'lpaValue', label: 'Lp(a)', placeholder: 'ex. 45' },
  { key: 'lpaUnit', label: 'Unité Lp(a) (nmol/L ou mg/dL)', placeholder: 'nmol/L' },
  { key: 'haemoglobinGDl', label: 'Hémoglobine (g/dL)', placeholder: 'ex. 13,5' },
  { key: 'hba1cPercent', label: 'HbA1c (%)', placeholder: 'ex. 5,8' },
  { key: 'tshMiuL', label: 'TSH (mUI/L)', placeholder: 'ex. 1,9' },
  { key: 'digoxinNgMl', label: 'Digoxinémie (ng/mL)', placeholder: 'ex. 0,7' },
  { key: 'notes', label: 'Notes', placeholder: '' },
];

const IMAGING_NUMERIC_REVIEW_FIELDS: { key: string; label: string; placeholder: string }[] = [
  { key: 'date', label: 'Date (AAAA-MM-JJ)', placeholder: '2026-11-24' },
  { key: 'lvefPercent', label: 'FEVG (%)', placeholder: 'ex. 35' },
  { key: 'lveddMm', label: 'DTDVG (mm)', placeholder: 'ex. 58' },
  { key: 'lvedviMlM2', label: 'VTDi (mL/m²)', placeholder: 'ex. 82' },
  { key: 'lvesviMlM2', label: 'VTSi (mL/m²)', placeholder: 'ex. 54' },
  { key: 'lgeScarPercent', label: 'Cicatrice LGE (%)', placeholder: 'ex. 18' },
  { key: 'aorticValveAreaCm2', label: 'Surface aortique (cm²)', placeholder: 'ex. 1,2' },
  { key: 'aorticMeanGradientMmHg', label: 'Gradient aortique moyen (mmHg)', placeholder: 'ex. 28' },
  { key: 'strokeVolumeIndexMlM2', label: 'SVi (mL/m²)', placeholder: 'ex. 32' },
  { key: 'notes', label: 'Notes', placeholder: '' },
];

function proposalToEditableFields(proposal: ExtractionProposal): EditableFields {
  const result: EditableFields = {};
  for (const [key, value] of Object.entries(proposal.extractedFields)) {
    if (typeof value === 'boolean') {
      result[key] = value;
    } else if (typeof value === 'number') {
      result[key] = String(value).replace('.', ',');
    } else if (typeof value === 'string') {
      result[key] = value;
    }
  }
  if (!result.date || String(result.date).trim() === '') {
    result.date = getTodayIsoDate();
  }
  if (proposal.kind === 'imaging' && result.modality !== 'ett' && result.modality !== 'irm') {
    result.modality = 'ett';
  }
  return result;
}

function readAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Format de fichier non pris en charge.'));
      }
    };
    reader.onerror = () => reject(new Error('Impossible de lire ce fichier.'));
    reader.readAsDataURL(file);
  });
}

export function AiImportModal({ open, onClose, onSaved }: AiImportModalProps) {
  const db = useActiveDb();
  const { settings } = useAppSettings();

  const [privacyConfirmed, setPrivacyConfirmed] = useState(false);
  const [reportText, setReportText] = useState('');
  const [fileBase64, setFileBase64] = useState<string | undefined>(undefined);
  const [fileMimeType, setFileMimeType] = useState<string | undefined>(undefined);
  const [fileName, setFileName] = useState<string | undefined>(undefined);

  const [analyzing, setAnalyzing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [proposal, setProposal] = useState<ExtractionProposal | null>(null);
  const [editedFields, setEditedFields] = useState<EditableFields>({});
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  function resetProposal() {
    setProposal(null);
    setEditedFields({});
    setErrorMessage(null);
    setSavedSuccess(null);
  }

  async function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    setErrorMessage(null);
    const file = event.target.files?.[0];
    if (!file) {
      setFileBase64(undefined);
      setFileMimeType(undefined);
      setFileName(undefined);
      return;
    }

    try {
      const dataUrl = await readAsDataUrl(file);
      const commaIndex = dataUrl.indexOf(',');
      const pureBase64 = commaIndex >= 0 ? dataUrl.slice(commaIndex + 1) : dataUrl;
      setFileBase64(pureBase64);
      setFileMimeType(file.type || 'application/pdf');
      setFileName(file.name);
    } catch {
      setErrorMessage('Impossible de lire le fichier sélectionné.');
    }
  }

  async function handleExtract(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);
    setSavedSuccess(null);

    if (!privacyConfirmed) {
      setErrorMessage(
        "Veuillez confirmer que les informations personnelles identifiantes ont été retirées avant l'envoi.",
      );
      return;
    }

    if (!reportText.trim() && !fileBase64) {
      setErrorMessage(
        'Veuillez coller le texte de votre compte-rendu ou sélectionner un fichier (PDF / image).',
      );
      return;
    }

    setAnalyzing(true);
    try {
      const extracted = await extractReportWithAi(settings.aiHelper, {
        text: reportText.trim() || undefined,
        fileBase64,
        mimeType: fileMimeType,
      });
      setProposal(extracted);
      setEditedFields(proposalToEditableFields(extracted));
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Une erreur est survenue lors de l'extraction assistée par IA.";
      setErrorMessage(message);
    } finally {
      setAnalyzing(false);
    }
  }

  function readStr(key: string): string {
    const val = editedFields[key];
    return typeof val === 'string' ? val : '';
  }

  function readNum(key: string): number | undefined {
    return parseFrenchDecimal(readStr(key));
  }

  async function handleSaveProposal(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!proposal) return;
    setErrorMessage(null);
    setSaving(true);

    try {
      const dateStr = readStr('date').trim() || getTodayIsoDate();

      if (proposal.kind === 'lab') {
        const lpaValue = readNum('lpaValue');
        const rawLpaUnit = readStr('lpaUnit').trim();
        const lpaUnit: LabResult['lpaUnit'] =
          rawLpaUnit === 'mg/dL' ? 'mg/dL' : lpaValue !== undefined ? 'nmol/L' : undefined;

        const labRecord: Omit<LabResult, 'id'> = {
          date: dateStr,
          ntProBnpPgMl: readNum('ntProBnpPgMl'),
          bnpPgMl: readNum('bnpPgMl'),
          creatinineUmolL: readNum('creatinineUmolL'),
          egfrMlMin: readNum('egfrMlMin'),
          potassiumMmolL: readNum('potassiumMmolL'),
          sodiumMmolL: readNum('sodiumMmolL'),
          ferritinUgL: readNum('ferritinUgL'),
          tsatPercent: readNum('tsatPercent'),
          ldlGL: readNum('ldlGL'),
          lpaValue,
          lpaUnit,
          haemoglobinGDl: readNum('haemoglobinGDl'),
          hba1cPercent: readNum('hba1cPercent'),
          tshMiuL: readNum('tshMiuL'),
          digoxinNgMl: readNum('digoxinNgMl'),
          notes: readStr('notes').trim() || undefined,
        };
        await db.labs.add(labRecord);
        setSavedSuccess('Bilan biologique vérifié et enregistré dans votre dossier local.');
      } else if (proposal.kind === 'imaging') {
        const modality: 'ett' | 'irm' = readStr('modality') === 'irm' ? 'irm' : 'ett';
        const lgePatternRaw = readStr('lgePattern');
        const mrRaw = readStr('mitralRegurgitation');
        const thrombusRaw = readStr('lvThrombus');

        const imagingRecord: Omit<ImagingExam, 'id'> = {
          date: dateStr,
          modality,
          lvefPercent: readNum('lvefPercent'),
          lveddMm: readNum('lveddMm'),
          lvedviMlM2: readNum('lvedviMlM2'),
          lvesviMlM2: readNum('lvesviMlM2'),
          lgeScarPresent:
            modality === 'irm' ? Boolean(editedFields.lgeScarPresent) : undefined,
          lgeScarPercent: modality === 'irm' ? readNum('lgeScarPercent') : undefined,
          lgePattern:
            modality === 'irm' && lgePatternRaw in LGE_PATTERN_LABELS
              ? (lgePatternRaw as ImagingExam['lgePattern'])
              : undefined,
          aorticValveAreaCm2: readNum('aorticValveAreaCm2'),
          aorticMeanGradientMmHg: readNum('aorticMeanGradientMmHg'),
          strokeVolumeIndexMlM2: readNum('strokeVolumeIndexMlM2'),
          mitralRegurgitation:
            mrRaw in MITRAL_REGURGITATION_LABELS
              ? (mrRaw as ImagingExam['mitralRegurgitation'])
              : undefined,
          lvThrombus:
            thrombusRaw in LV_THROMBUS_LABELS
              ? (thrombusRaw as ImagingExam['lvThrombus'])
              : undefined,
          notes: readStr('notes').trim() || undefined,
        };
        await db.imaging.add(imagingRecord);
        setSavedSuccess("Examen d'imagerie vérifié et enregistré dans votre dossier local.");
      } else {
        const medRecord: Omit<Medication, 'id'> = {
          pillar: (readStr('pillar') as MedicationPillar) || 'other',
          innName: readStr('innName').trim() || 'Médicament à préciser',
          frenchBrand: readStr('frenchBrand').trim() || undefined,
          doseLabel: readStr('doseLabel').trim() || 'Dose à préciser',
          status: 'active',
          startedAt: readStr('startedAt').trim() || undefined,
          sideEffectsNote: readStr('notes').trim() || undefined,
        };
        await db.medications.add(medRecord);
        setSavedSuccess('Traitement vérifié et ajouté dans votre onglet Traitements.');
      }

      const savedKind = proposal.kind;
      setProposal(null);
      setEditedFields({});
      setReportText('');
      setFileBase64(undefined);
      setFileMimeType(undefined);
      setFileName(undefined);
      onSaved?.(savedKind);
    } catch {
      setErrorMessage("Impossible d'enregistrer les valeurs validées dans la base locale.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ai-import-title"
    >
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-card)] p-5 shadow-xl">
        <div className="mb-4 flex items-start justify-between gap-3 border-b border-[var(--border-subtle)] pb-3">
          <div className="flex items-start gap-2.5">
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
            <div>
              <h2 id="ai-import-title" className="text-base font-semibold text-[var(--text-primary)]">
                Import assisté par IA (clé API personnelle, optionnel)
              </h2>
              <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
                Aide à la transcription de comptes-rendus (biologie, ETT, IRM) avec validation
                humaine obligatoire avant tout enregistrement.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer la fenêtre d'import assisté par IA"
            className="touch-target rounded-lg p-1.5 text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {!settings.aiHelper.enabled ? (
          <div className="space-y-4">
            <div className="rounded-xl border border-[var(--status-info-border)] bg-[var(--status-info-bg)] p-4 text-sm leading-relaxed text-[var(--status-info-text)]">
              <div className="mb-2 flex items-center gap-2 font-semibold text-[var(--text-primary)]">
                <Lock className="h-4 w-4 text-[var(--color-primary)]" aria-hidden="true" />
                <span>Option désactivée par défaut pour protéger votre vie privée</span>
              </div>
              <p className="m-0">
                Par défaut, aucune donnée de santé ne quitte votre appareil. Toutes les alertes,
                calculs d&apos;objectifs et courbes fonctionnent à 100 % hors ligne sans IA. Si vous
                souhaitez activer l&apos;import assisté avec votre propre clé API (Gemini, Mistral,
                fournisseur compatible OpenAI ou Ollama en local), vous pouvez le configurer dans
                les Paramètres.
              </p>
            </div>

            <div className="flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="touch-target rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-4 py-2 text-sm font-medium text-[var(--text-primary)]"
              >
                Fermer
              </button>
              <Link
                to="/settings"
                onClick={onClose}
                className="touch-target inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-primary-hover)]"
              >
                <Settings className="h-4 w-4" aria-hidden="true" />
                <span>Activer dans Paramètres</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {savedSuccess && (
              <div
                role="status"
                className="flex items-center gap-2 rounded-xl border border-[var(--status-stable-border)] bg-[var(--status-stable-bg)] px-3.5 py-2.5 text-sm text-[var(--status-stable-text)]"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{savedSuccess}</span>
              </div>
            )}

            {errorMessage && (
              <div
                role="alert"
                className="flex items-center gap-2 rounded-xl border border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] px-3.5 py-2.5 text-sm text-[var(--status-urgent-text)]"
              >
                <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{errorMessage}</span>
              </div>
            )}

            {!proposal ? (
              <form onSubmit={(e) => void handleExtract(e)} className="space-y-4">
                {/* Bandeau de consentement vie privée */}
                <div className="rounded-xl border border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] p-3.5 text-xs leading-relaxed text-[var(--status-warning-text)]">
                  <div className="mb-1.5 flex items-center gap-1.5 font-semibold">
                    <ShieldAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Garde-fou vie privée avant envoi ({settings.aiHelper.provider})</span>
                  </div>
                  <p className="m-0">{AI_PRIVACY_REMINDER_FR}</p>
                  <div className="mt-2.5 flex items-start gap-2">
                    <input
                      id="ai-privacy-consent"
                      type="checkbox"
                      checked={privacyConfirmed}
                      onChange={(e) => setPrivacyConfirmed(e.target.checked)}
                      className="mt-0.5 h-4 w-4 accent-[var(--color-primary)]"
                    />
                    <label htmlFor="ai-privacy-consent" className="font-medium text-[var(--text-primary)]">
                      Je confirme avoir retiré mon nom, mon prénom, mon adresse et mon numéro de
                      sécurité sociale (NIR) du document ci-dessous.
                    </label>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="ai-report-text"
                    className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                  >
                    Coller le texte anonymisé du compte-rendu (biologie, ETT, IRM)
                  </label>
                  <textarea
                    id="ai-report-text"
                    rows={5}
                    value={reportText}
                    onChange={(e) => setReportText(e.target.value)}
                    placeholder="Collez ici les chiffres de votre prise de sang ou de votre compte-rendu d'imagerie sans données nominatives..."
                    className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="ai-report-file"
                    className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                  >
                    Ou joindre un fichier anonymisé (PDF ou image)
                  </label>
                  <div className="flex flex-wrap items-center gap-2">
                    <input
                      id="ai-report-file"
                      type="file"
                      accept=".pdf,image/png,image/jpeg,image/webp"
                      onChange={(e) => void handleFileChange(e)}
                      className="block w-full max-w-sm text-xs text-[var(--text-secondary)] file:mr-3 file:rounded-lg file:border file:border-[var(--border-strong)] file:bg-[var(--bg-subtle)] file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-[var(--text-primary)]"
                    />
                    {fileName && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary-soft)] px-2.5 py-1 text-xs font-medium text-[var(--color-primary)]">
                        <FileUp className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{fileName}</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap justify-end gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="touch-target rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-4 py-2 text-sm font-medium text-[var(--text-primary)]"
                  >
                    Fermer
                  </button>
                  <button
                    type="submit"
                    disabled={analyzing}
                    className="touch-target inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-primary-hover)] disabled:opacity-60"
                  >
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                    <span>{analyzing ? 'Analyse en cours...' : 'Analyser le compte-rendu'}</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Formulaire de verification humaine champ par champ */
              <form onSubmit={(e) => void handleSaveProposal(e)} className="space-y-4">
                <div className="rounded-xl border border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] p-3.5 text-xs text-[var(--status-warning-text)]">
                  <p className="mb-1.5 font-semibold">
                    Vérification humaine obligatoire — Type détecté :{' '}
                    {proposal.kind === 'lab'
                      ? 'Bilan biologique'
                      : proposal.kind === 'imaging'
                        ? 'Imagerie cardiaque (ETT / IRM)'
                        : 'Médicament / ordonnance'}
                  </p>
                  <ul className="m-0 list-disc space-y-1 pl-4">
                    {proposal.warningsFr.map((warning, idx) => (
                      <li key={idx}>{warning}</li>
                    ))}
                  </ul>
                  {proposal.rawModelNote && (
                    <p className="mt-2 mb-0 italic text-[var(--text-secondary)]">
                      Note du modèle : {proposal.rawModelNote}
                    </p>
                  )}
                </div>

                {proposal.kind === 'lab' && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {LAB_REVIEW_FIELDS.map((field) => (
                      <div key={field.key} className={field.key === 'notes' ? 'sm:col-span-2' : ''}>
                        <label
                          htmlFor={`ai-field-${field.key}`}
                          className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                        >
                          {field.label}
                        </label>
                        <input
                          id={`ai-field-${field.key}`}
                          type={field.key === 'date' ? 'date' : 'text'}
                          placeholder={field.placeholder}
                          value={readStr(field.key)}
                          onChange={(e) =>
                            setEditedFields((prev) => ({ ...prev, [field.key]: e.target.value }))
                          }
                          className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {proposal.kind === 'imaging' && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="ai-field-modality"
                        className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                      >
                        Modalité (ETT ou IRM)
                      </label>
                      <select
                        id="ai-field-modality"
                        value={readStr('modality') || 'ett'}
                        onChange={(e) =>
                          setEditedFields((prev) => ({ ...prev, modality: e.target.value }))
                        }
                        className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)]"
                      >
                        <option value="ett">ETT (échocardiographie)</option>
                        <option value="irm">IRM cardiaque</option>
                      </select>
                    </div>

                    {IMAGING_NUMERIC_REVIEW_FIELDS.map((field) => (
                      <div key={field.key} className={field.key === 'notes' ? 'sm:col-span-2' : ''}>
                        <label
                          htmlFor={`ai-field-${field.key}`}
                          className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                        >
                          {field.label}
                        </label>
                        <input
                          id={`ai-field-${field.key}`}
                          type={field.key === 'date' ? 'date' : 'text'}
                          placeholder={field.placeholder}
                          value={readStr(field.key)}
                          onChange={(e) =>
                            setEditedFields((prev) => ({ ...prev, [field.key]: e.target.value }))
                          }
                          className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
                        />
                      </div>
                    ))}

                    <div className="flex items-center gap-2 sm:col-span-2">
                      <input
                        id="ai-field-lgeScarPresent"
                        type="checkbox"
                        checked={Boolean(editedFields.lgeScarPresent)}
                        onChange={(e) =>
                          setEditedFields((prev) => ({
                            ...prev,
                            lgeScarPresent: e.target.checked,
                          }))
                        }
                        className="h-4 w-4 accent-[var(--color-primary)]"
                      />
                      <label
                        htmlFor="ai-field-lgeScarPresent"
                        className="text-xs font-semibold text-[var(--text-primary)]"
                      >
                        Cicatrice myocardique (LGE) présente (IRM)
                      </label>
                    </div>
                  </div>
                )}

                {proposal.kind === 'medication' && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { key: 'innName', label: 'DCI (nom de molécule)' },
                      { key: 'frenchBrand', label: 'Nom commercial' },
                      { key: 'doseLabel', label: 'Posologie' },
                      { key: 'startedAt', label: 'Date de début (AAAA-MM-JJ)' },
                    ].map((field) => (
                      <div key={field.key}>
                        <label
                          htmlFor={`ai-field-${field.key}`}
                          className="mb-1 block text-xs font-semibold text-[var(--text-primary)]"
                        >
                          {field.label}
                        </label>
                        <input
                          id={`ai-field-${field.key}`}
                          type="text"
                          value={readStr(field.key)}
                          onChange={(e) =>
                            setEditedFields((prev) => ({ ...prev, [field.key]: e.target.value }))
                          }
                          className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)]"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-end gap-2 border-t border-[var(--border-subtle)] pt-3">
                  <button
                    type="button"
                    onClick={resetProposal}
                    className="touch-target rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-4 py-2 text-sm font-medium text-[var(--text-primary)]"
                  >
                    Rejeter / Recommencer
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="touch-target inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-primary-hover)] disabled:opacity-60"
                  >
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    <span>
                      {saving ? 'Enregistrement...' : 'Valider et enregistrer dans mon dossier'}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
