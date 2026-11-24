import { type FormEvent, useState } from 'react';
import {
  CheckCircle2,
  Eye,
  EyeOff,
  Save,
  ShieldAlert,
  Sparkles,
  Trash2,
} from 'lucide-react';
import { useAppSettings } from '../../db';
import { AI_PRIVACY_REMINDER_FR } from '../../services';
import type { AppSettings } from '../../types';
import { Card } from '../../ui';
import {
  AI_PROVIDERS,
  type AiProviderId,
  INPUT_CLASS,
  LABEL_CLASS,
  PRIMARY_BUTTON_CLASS,
  SECONDARY_BUTTON_CLASS,
} from './constants';

interface AiDraft {
  enabled: boolean;
  provider: AiProviderId;
  endpointUrl: string;
  modelName: string;
  apiKey: string;
}

function aiHelperToDraft(aiHelper: AppSettings['aiHelper']): AiDraft {
  return {
    enabled: Boolean(aiHelper.enabled),
    provider: aiHelper.provider,
    endpointUrl: aiHelper.endpointUrl ?? '',
    modelName: aiHelper.modelName ?? '',
    apiKey: aiHelper.apiKey ?? '',
  };
}

interface AiHelperFormProps {
  initialAiHelper: AppSettings['aiHelper'];
  updateSettings: (patch: Partial<Omit<AppSettings, 'id'>>) => Promise<void>;
  statusMessage: string | null;
  onStatusMessage: (message: string | null) => void;
}

export function AiHelperSection() {
  const { settings, isLoading, updateSettings } = useAppSettings();
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  return (
    <AiHelperForm
      key={isLoading ? 'loading' : 'ready'}
      initialAiHelper={settings.aiHelper}
      updateSettings={updateSettings}
      statusMessage={statusMessage}
      onStatusMessage={setStatusMessage}
    />
  );
}

function AiHelperForm({
  initialAiHelper,
  updateSettings,
  statusMessage,
  onStatusMessage,
}: AiHelperFormProps) {
  const [draft, setDraft] = useState<AiDraft>(() => aiHelperToDraft(initialAiHelper));
  const [showApiKey, setShowApiKey] = useState(false);
  const [isToggling, setIsToggling] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const activeProviderMeta =
    AI_PROVIDERS.find((item) => item.id === draft.provider) ?? AI_PROVIDERS[0];

  async function persistAiHelper(
    nextDraft: AiDraft,
    messageFr: string,
    mode: 'toggle' | 'save',
  ) {
    setErrorMessage(null);
    onStatusMessage(null);
    if (mode === 'toggle') {
      setIsToggling(true);
    } else {
      setIsSaving(true);
    }
    try {
      await updateSettings({
        aiHelper: {
          enabled: nextDraft.enabled,
          provider: nextDraft.provider,
          endpointUrl: nextDraft.endpointUrl.trim() || undefined,
          modelName: nextDraft.modelName.trim() || undefined,
          apiKey: nextDraft.apiKey.trim() || undefined,
        },
      });
      onStatusMessage(messageFr);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Impossible d’enregistrer la configuration de l’assistant IA.',
      );
    } finally {
      if (mode === 'toggle') {
        setIsToggling(false);
      } else {
        setIsSaving(false);
      }
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const endpoint = draft.endpointUrl.trim();
    if (endpoint.length > 0) {
      try {
        const parsed = new URL(endpoint);
        if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
          setErrorMessage('L’adresse du serveur (URL) doit commencer par http:// ou https://.');
          return;
        }
      } catch {
        setErrorMessage('Veuillez saisir une URL valide (par exemple https://api.mistral.ai/v1).');
        return;
      }
    }

    await persistAiHelper(
      draft,
      draft.enabled
        ? 'Configuration de l’assistant IA optionnel enregistrée localement.'
        : 'Assistant IA désactivé et préférences enregistrées.',
      'save',
    );
  }

  async function handleToggleEnabled(checked: boolean) {
    const nextDraft = { ...draft, enabled: checked };
    setDraft(nextDraft);
    await persistAiHelper(
      nextDraft,
      checked
        ? 'Assistant IA optionnel activé. Vérifiez le fournisseur et vos paramètres ci-dessous.'
        : 'Assistant IA optionnel désactivé.',
      'toggle',
    );
  }

  async function handleClearApiKey() {
    const nextDraft = { ...draft, apiKey: '' };
    setDraft(nextDraft);
    await persistAiHelper(nextDraft, 'La clé API locale a été effacée.', 'save');
  }

  return (
    <Card
      title="Assistant IA optionnel (BYOK)"
      subtitle="Strictement désactivé par défaut. Jamais utilisé pour vos alertes, vos seuils ni votre plan de suivi (100 % déterministes et hors ligne)."
      icon={<Sparkles className="h-5 w-5" />}
    >
      <form onSubmit={(e) => void handleSubmit(e)} className="space-y-4" noValidate>
        <div
          role="note"
          aria-label="Avertissement vie privée assistant IA"
          className="flex items-start gap-3 rounded-xl border border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] p-3.5 text-sm text-[var(--status-warning-text)]"
        >
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <div className="space-y-1">
            <p className="m-0 font-semibold">Protection de votre vie privée (BYOK)</p>
            <p className="m-0 text-xs leading-relaxed">
              Ne transmettez jamais votre nom, votre prénom, votre adresse ni votre numéro de
              sécurité sociale (NIR) aux fournisseurs externes. {AI_PRIVACY_REMINDER_FR}
            </p>
            <p className="m-0 text-xs leading-relaxed">
              Votre clé API est stockée exclusivement sur cet appareil et n&apos;est jamais incluse
              dans les sauvegardes exportées.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/60 p-3.5">
          <input
            id="ai-helper-enabled"
            type="checkbox"
            aria-describedby="ai-helper-enabled-desc"
            checked={draft.enabled}
            disabled={isToggling || isSaving}
            onChange={(e) => void handleToggleEnabled(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[var(--color-primary)]"
          />
          <div className="text-sm">
            <label
              htmlFor="ai-helper-enabled"
              className="block cursor-pointer font-medium text-[var(--text-primary)]"
            >
              Activer l&apos;assistant IA optionnel (avec votre propre clé API ou serveur local)
            </label>
            <p
              id="ai-helper-enabled-desc"
              className="mt-0.5 text-xs text-[var(--text-secondary)]"
            >
              Permet uniquement la pré-saisie assistée de comptes-rendus (avec validation humaine
              obligatoire) et les questions documentaires ancrées sur la bibliothèque locale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="ai-provider" className={LABEL_CLASS}>
              Fournisseur IA
            </label>
            <select
              id="ai-provider"
              value={draft.provider}
              onChange={(e) =>
                setDraft((prev) => ({
                  ...prev,
                  provider: e.target.value as AiProviderId,
                }))
              }
              className={INPUT_CLASS}
            >
              {AI_PROVIDERS.map((provider) => (
                <option key={provider.id} value={provider.id}>
                  {provider.labelFr}
                </option>
              ))}
            </select>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              {activeProviderMeta.descriptionFr}
            </p>
          </div>

          <div>
            <label htmlFor="ai-endpoint-url" className={LABEL_CLASS}>
              URL endpoint (optionnelle)
            </label>
            <input
              id="ai-endpoint-url"
              type="url"
              value={draft.endpointUrl}
              onChange={(e) => setDraft((prev) => ({ ...prev, endpointUrl: e.target.value }))}
              placeholder={activeProviderMeta.defaultUrl}
              className={INPUT_CLASS}
            />
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              Par défaut : <code>{activeProviderMeta.defaultUrl}</code>
            </p>
          </div>

          <div>
            <label htmlFor="ai-model-name" className={LABEL_CLASS}>
              Nom du modèle (optionnel)
            </label>
            <input
              id="ai-model-name"
              type="text"
              value={draft.modelName}
              onChange={(e) => setDraft((prev) => ({ ...prev, modelName: e.target.value }))}
              placeholder={activeProviderMeta.defaultModel}
              className={INPUT_CLASS}
            />
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              Par défaut : <code>{activeProviderMeta.defaultModel}</code>
            </p>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="ai-api-key" className={LABEL_CLASS}>
              Clé API (stockée uniquement en local)
            </label>
            <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
              <input
                id="ai-api-key"
                type={showApiKey ? 'text' : 'password'}
                autoComplete="off"
                value={draft.apiKey}
                onChange={(e) => setDraft((prev) => ({ ...prev, apiKey: e.target.value }))}
                placeholder={
                  activeProviderMeta.requiresApiKey
                    ? 'Collez votre clé API personnelle'
                    : 'Non requise pour un serveur local Ollama'
                }
                className={INPUT_CLASS}
              />
              <button
                type="button"
                onClick={() => setShowApiKey((prev) => !prev)}
                aria-label={showApiKey ? 'Masquer la clé API' : 'Afficher la clé API'}
                className={SECONDARY_BUTTON_CLASS}
              >
                {showApiKey ? (
                  <EyeOff className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Eye className="h-4 w-4" aria-hidden="true" />
                )}
                <span>{showApiKey ? 'Masquer' : 'Afficher'}</span>
              </button>
              {draft.apiKey.length > 0 && (
                <button
                  type="button"
                  disabled={isSaving}
                  onClick={() => void handleClearApiKey()}
                  aria-label="Effacer la clé API"
                  className={SECONDARY_BUTTON_CLASS}
                >
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              Cette clé reste uniquement dans votre navigateur (IndexedDB local) et n&apos;est
              jamais exportée dans vos sauvegardes.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-4">
          <div className="min-w-0 flex-1">
            {errorMessage && (
              <p role="alert" className="text-sm font-medium text-[var(--status-urgent-text)]">
                {errorMessage}
              </p>
            )}
            {statusMessage && (
              <p
                role="status"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--status-stable-text)]"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{statusMessage}</span>
              </p>
            )}
          </div>

          <button type="submit" disabled={isSaving} className={PRIMARY_BUTTON_CLASS}>
            <Save className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{isSaving ? 'Enregistrement...' : 'Enregistrer la configuration IA'}</span>
          </button>
        </div>
      </form>
    </Card>
  );
}
