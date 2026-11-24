import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Check,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  Printer,
  Search,
  Sparkles,
  Users,
} from 'lucide-react';
import { QUESTIONS_CATALOG, normalizeFrenchText } from '../../content/fr';
import { getTodayIsoDate, upsertQuestionTracking, useActiveDb } from '../../db';
import type {
  EngineEvaluation,
  PatientProfile,
  QuestionInterlocutor,
  QuestionTracking,
} from '../../types';
import { Card, TriageBadge } from '../../ui';
import {
  INTERLOCUTOR_LABELS,
  INTERLOCUTOR_ORDER,
  QUESTION_STATUS_LABELS,
  buildPrioritizedQuestions,
  formatDateFr,
  type PlanTabId,
  type PrioritizedQuestionEntry,
} from './plan-helpers';

export interface ConsultationPrepTabProps {
  profile: PatientProfile;
  evaluation: EngineEvaluation;
  trackingList: QuestionTracking[];
  onSelectTab: (tab: PlanTabId) => void;
}

type QuestionTrackingPatch = Partial<Omit<QuestionTracking, 'questionId'>>;

interface QuestionCardItemProps {
  entry: PrioritizedQuestionEntry;
  onPatchTracking: (questionId: string, patch: QuestionTrackingPatch) => Promise<void>;
}

const QUESTION_STATUSES: readonly QuestionTracking['status'][] = [
  'open',
  'asked',
  'resolved',
  'not_applicable',
];

function QuestionCardItem({ entry, onPatchTracking }: QuestionCardItemProps) {
  const { question, tracking, isRuleTriggered, isModuleMatched, triggeredByOutputs, matchedModuleLabels } =
    entry;

  const currentSelected = tracking?.selectedForNextVisit ?? false;
  const currentStatus: QuestionTracking['status'] = tracking?.status ?? 'open';
  const savedNote = tracking?.answerNote ?? '';
  const answeredAt = tracking?.answeredAt;

  const [draftNote, setDraftNote] = useState<string | null>(null);
  const [justSaved, setJustSaved] = useState(false);

  const displayedNote = draftNote ?? savedNote;
  const isDirty = draftNote !== null && draftNote.trim() !== savedNote;

  const handleToggleSelected = async () => {
    await onPatchTracking(question.id, {
      selectedForNextVisit: !currentSelected,
    });
  };

  const handleStatusChange = async (nextStatus: QuestionTracking['status']) => {
    const patch: QuestionTrackingPatch = { status: nextStatus };
    if ((nextStatus === 'asked' || nextStatus === 'resolved') && !tracking?.answeredAt) {
      patch.answeredAt = getTodayIsoDate();
    }
    await onPatchTracking(question.id, patch);
  };

  const handlePersistNote = async () => {
    if (draftNote === null) {
      return;
    }
    const trimmed = draftNote.trim();
    if (trimmed === savedNote) {
      setDraftNote(null);
      return;
    }
    const nextAnsweredAt = trimmed.length > 0 ? getTodayIsoDate() : undefined;
    await onPatchTracking(question.id, {
      answerNote: trimmed.length > 0 ? trimmed : undefined,
      answeredAt: nextAnsweredAt,
    });
    setDraftNote(null);
    setJustSaved(true);
    window.setTimeout(() => setJustSaved(false), 2000);
  };

  const selectId = `status-${question.id}`;
  const noteId = `note-${question.id}`;

  return (
    <Card
      tone={isRuleTriggered ? 'subtle' : 'default'}
      className={
        currentSelected ? 'ring-2 ring-[var(--color-primary)]/40' : undefined
      }
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-2.5 py-0.5 text-xs font-semibold text-[var(--color-primary)]">
          {INTERLOCUTOR_LABELS[question.interlocutor]}
        </span>
        <span className="text-xs font-medium text-[var(--text-secondary)]">
          {question.topicFr}
        </span>

        {isRuleTriggered && (
          <TriageBadge
            level={entry.highestRuleSeverity ?? 'action'}
            size="sm"
            label="Déclenchée par votre suivi"
          />
        )}

        {isModuleMatched && (
          <span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-accent)]">
            <Sparkles className="h-3 w-3 shrink-0" aria-hidden="true" />
            <span>Profil : {matchedModuleLabels.join(', ')}</span>
          </span>
        )}
      </div>

      {triggeredByOutputs.length > 0 && (
        <p className="mt-2 mb-0 text-xs text-[var(--text-secondary)]">
          Liée à : {triggeredByOutputs.map((out) => out.titleFr).join(' ; ')}
        </p>
      )}

      <h3 className="mt-2.5 text-base font-semibold leading-snug text-[var(--text-primary)]">
        {question.questionFr}
      </h3>

      <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-secondary)]">
        <strong className="font-medium text-[var(--text-primary)]">Pourquoi poser cette question :</strong>{' '}
        {question.whyItMattersFr}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-[var(--border-subtle)] pt-3">
        <button
          type="button"
          aria-pressed={currentSelected}
          onClick={() => void handleToggleSelected()}
          className={`touch-target inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-semibold transition-colors ${
            currentSelected
              ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
              : 'border-[var(--border-strong)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
          }`}
        >
          {currentSelected ? (
            <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
          ) : (
            <ClipboardCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
          )}
          <span>
            {currentSelected
              ? 'Sélectionnée pour la prochaine consultation'
              : 'Sélectionner pour la prochaine consultation'}
          </span>
        </button>

        <div className="flex items-center gap-2">
          <label htmlFor={selectId} className="text-xs font-medium text-[var(--text-secondary)]">
            Statut :
          </label>
          <select
            id={selectId}
            value={currentStatus}
            onChange={(e) =>
              void handleStatusChange(e.target.value as QuestionTracking['status'])
            }
            className="touch-target rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-1.5 text-sm text-[var(--text-primary)]"
          >
            {QUESTION_STATUSES.map((statusOption) => (
              <option key={statusOption} value={statusOption}>
                {QUESTION_STATUS_LABELS[statusOption]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-3 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label htmlFor={noteId} className="text-xs font-semibold text-[var(--text-primary)]">
            Notes et réponse de votre praticien
          </label>
          <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
            {answeredAt && (
              <span className="tabular-nums">Notée le {formatDateFr(answeredAt)}</span>
            )}
            {justSaved && (
              <span
                role="status"
                className="inline-flex items-center gap-1 font-medium text-[var(--status-stable-text)]"
              >
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
                Enregistré
              </span>
            )}
          </div>
        </div>

        <textarea
          id={noteId}
          rows={2}
          value={displayedNote}
          onChange={(e) => setDraftNote(e.target.value)}
          onBlur={() => void handlePersistNote()}
          placeholder="Notez ici la réponse obtenue, les prochaines étapes ou un chiffre communiqué lors de la consultation..."
          className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]"
        />

        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex flex-wrap items-center gap-2 text-[var(--text-secondary)]">
            <span>Sources : {question.sources.join(' · ')}</span>
            <Link
              to={`/library?article=${encodeURIComponent(question.articleSlug)}`}
              className="inline-flex items-center gap-1 font-semibold text-[var(--color-primary)] hover:underline"
            >
              <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>Article lié</span>
              <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
            </Link>
          </div>

          <button
            type="button"
            disabled={!isDirty}
            onClick={() => void handlePersistNote()}
            className={`touch-target inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
              isDirty
                ? 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]'
                : 'cursor-not-allowed border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-secondary)]'
            }`}
          >
            <Check className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>Enregistrer la note</span>
          </button>
        </div>
      </div>
    </Card>
  );
}

export function ConsultationPrepTab({
  profile,
  evaluation,
  trackingList,
  onSelectTab,
}: ConsultationPrepTabProps) {
  const db = useActiveDb();
  const [interlocutor, setInterlocutor] = useState<'all' | QuestionInterlocutor>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlySelected, setOnlySelected] = useState(false);
  const [onlyPrioritized, setOnlyPrioritized] = useState(false);

  const prioritizedEntries = useMemo(
    () =>
      buildPrioritizedQuestions(
        QUESTIONS_CATALOG,
        evaluation.outputs,
        evaluation.prioritizedQuestionIds,
        profile,
        trackingList,
      ),
    [evaluation.outputs, evaluation.prioritizedQuestionIds, profile, trackingList],
  );

  const countsByInterlocutor = useMemo(() => {
    const counts: Record<QuestionInterlocutor, number> = {
      cardiologist: 0,
      gp: 0,
      pharmacist: 0,
      occupational_doctor: 0,
    };
    for (const entry of prioritizedEntries) {
      counts[entry.question.interlocutor] += 1;
    }
    return counts;
  }, [prioritizedEntries]);

  const selectedCount = useMemo(
    () => prioritizedEntries.filter((e) => e.tracking?.selectedForNextVisit).length,
    [prioritizedEntries],
  );

  const autoHighlightedCount = useMemo(
    () => prioritizedEntries.filter((e) => e.isRuleTriggered || e.isModuleMatched).length,
    [prioritizedEntries],
  );

  const filteredEntries = useMemo(() => {
    const normalizedQuery = normalizeFrenchText(searchQuery);
    const tokens = normalizedQuery ? normalizedQuery.split(/\s+/).filter(Boolean) : [];

    return prioritizedEntries.filter((entry) => {
      if (interlocutor !== 'all' && entry.question.interlocutor !== interlocutor) {
        return false;
      }
      if (onlySelected && !entry.tracking?.selectedForNextVisit) {
        return false;
      }
      if (onlyPrioritized && !entry.isRuleTriggered && !entry.isModuleMatched) {
        return false;
      }
      if (tokens.length > 0) {
        const haystack = normalizeFrenchText(
          `${entry.question.questionFr} ${entry.question.whyItMattersFr} ${entry.question.topicFr} ${entry.question.sources.join(' ')} ${entry.tracking?.answerNote ?? ''}`,
        );
        return tokens.every((token) => haystack.includes(token));
      }
      return true;
    });
  }, [prioritizedEntries, interlocutor, onlySelected, onlyPrioritized, searchQuery]);

  const handlePatchTracking = useCallback(
    async (questionId: string, patch: QuestionTrackingPatch) => {
      await db.transaction('rw', db.questionTracking, async () => {
        const existing = await db.questionTracking.get(questionId);
        const next: QuestionTracking = {
          questionId,
          selectedForNextVisit: existing?.selectedForNextVisit ?? false,
          status: existing?.status ?? 'open',
          answerNote: existing?.answerNote,
          answeredAt: existing?.answeredAt,
          ...patch,
        };
        await upsertQuestionTracking(db, next);
      });
    },
    [db],
  );

  return (
    <div className="space-y-4">
      <Card
        title="Préparer votre prochaine consultation"
        subtitle="Les questions déclenchées par votre suivi ou vos modules actifs sont automatiquement placées en tête."
        icon={<Users className="h-5 w-5" />}
        headerAction={
          <button
            type="button"
            onClick={() => onSelectTab('synthese')}
            className="no-print touch-target inline-flex items-center gap-1.5 rounded-xl bg-[var(--color-primary)] px-3.5 py-2 text-xs font-semibold text-white hover:bg-[var(--color-primary-hover)]"
          >
            <Printer className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Imprimer en A4</span>
          </button>
        }
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3.5 py-2.5">
            <span className="block text-xs text-[var(--text-secondary)]">
              Sélectionnées pour la visite
            </span>
            <span className="text-xl font-bold text-[var(--color-primary)] tabular-nums">
              {selectedCount}
            </span>
          </div>
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3.5 py-2.5">
            <span className="block text-xs text-[var(--text-secondary)]">
              Mises en avant pour votre profil
            </span>
            <span className="text-xl font-bold text-[var(--color-accent)] tabular-nums">
              {autoHighlightedCount}
            </span>
          </div>
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3.5 py-2.5">
            <span className="block text-xs text-[var(--text-secondary)]">
              Questions dans le référentiel
            </span>
            <span className="text-xl font-bold text-[var(--text-primary)] tabular-nums">
              {QUESTIONS_CATALOG.length}
            </span>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <div className="relative">
            <label htmlFor="consult-question-search" className="sr-only">
              Rechercher une question
            </label>
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-secondary)]"
              aria-hidden="true"
            />
            <input
              id="consult-question-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher par thème, médicament, examen ou mot-clé (ex. FEVG, fer, permis, potassium)..."
              className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] py-2 pl-10 pr-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]"
            />
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filtrer par interlocuteur"
          >
            <button
              type="button"
              aria-pressed={interlocutor === 'all'}
              onClick={() => setInterlocutor('all')}
              className={`touch-target inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                interlocutor === 'all'
                  ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                  : 'border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:border-[var(--border-strong)]'
              }`}
            >
              <span>Tous</span>
              <span className="rounded-full bg-black/10 px-1.5 py-0.5 text-xs tabular-nums">
                {QUESTIONS_CATALOG.length}
              </span>
            </button>

            {INTERLOCUTOR_ORDER.map((roleKey) => {
              const active = interlocutor === roleKey;
              return (
                <button
                  key={roleKey}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setInterlocutor(roleKey)}
                  className={`touch-target inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  <span>{INTERLOCUTOR_LABELS[roleKey]}</span>
                  <span className="rounded-full bg-black/10 px-1.5 py-0.5 text-xs tabular-nums">
                    {countsByInterlocutor[roleKey]}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              aria-pressed={onlySelected}
              onClick={() => setOnlySelected((prev) => !prev)}
              className={`touch-target inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-colors ${
                onlySelected
                  ? 'border-[var(--color-primary)] bg-[var(--color-primary-soft)] text-[var(--color-primary)]'
                  : 'border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <ClipboardCheck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>Sélectionnées uniquement ({selectedCount})</span>
            </button>

            <button
              type="button"
              aria-pressed={onlyPrioritized}
              onClick={() => setOnlyPrioritized((prev) => !prev)}
              className={`touch-target inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-colors ${
                onlyPrioritized
                  ? 'border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-accent)]'
                  : 'border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>Mises en avant pour votre profil ({autoHighlightedCount})</span>
            </button>
          </div>
        </div>
      </Card>

      <p className="m-0 text-xs text-[var(--text-secondary)] tabular-nums">
        {filteredEntries.length} question{filteredEntries.length > 1 ? 's' : ''} affichée
        {filteredEntries.length > 1 ? 's' : ''}
      </p>

      {filteredEntries.length === 0 ? (
        <Card tone="subtle">
          <p className="m-0 text-sm text-[var(--text-secondary)]">
            Aucune question ne correspond à vos filtres actuels. Modifiez votre recherche ou
            réinitialisez les filtres.
          </p>
        </Card>
      ) : (
        <div className="space-y-3">
          {filteredEntries.map((entry) => (
            <QuestionCardItem
              key={entry.question.id}
              entry={entry}
              onPatchTracking={handlePatchTracking}
            />
          ))}
        </div>
      )}
    </div>
  );
}
