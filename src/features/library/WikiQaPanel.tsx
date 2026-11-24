import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  ArrowRight,
  BookOpenCheck,
  Loader2,
  Lock,
  MessageSquareText,
  Send,
  Settings,
  ShieldAlert,
} from 'lucide-react';
import { findArticleSlugByTitle, getAllArticles } from '../../content/fr';
import { useAppSettings } from '../../db';
import { AI_PRIVACY_REMINDER_FR, askWikiWithAi } from '../../services';
import type { WikiQaResponse } from '../../types';
import { Card } from '../../ui';
import { AI_PROVIDER_LABELS_FR } from './libraryMeta';
import { SafeMarkdown } from './SafeMarkdown';

export interface WikiQaPanelProps {
  onOpenArticle: (slug: string) => void;
}

const SUGGESTED_QUESTIONS_FR = [
  'Quelle est la différence entre une FEVG mesurée à l’ETT et à l’IRM cardiaque ?',
  'Comment fonctionnent l’ALD 5 et la réforme des arrêts maladie d’octobre 2026 ?',
  'Quels compléments alimentaires faut-il éviter avec les traitements de l’insuffisance cardiaque ?',
];

export function WikiQaPanel({ onOpenArticle }: WikiQaPanelProps) {
  const { settings } = useAppSettings();
  const [questionFr, setQuestionFr] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorFr, setErrorFr] = useState<string | null>(null);
  const [response, setResponse] = useState<WikiQaResponse | null>(null);

  if (!settings.aiHelper.enabled) {
    return (
      <Card
        title="Questions sur la bibliothèque (assistant IA optionnel)"
        subtitle="Désactivé par défaut : fonctionnement 100 % hors ligne."
        icon={<Lock className="h-5 w-5" />}
      >
        <div className="space-y-4 text-sm leading-relaxed text-[var(--text-secondary)]">
          <p className="m-0">
            L&apos;assistant documentaire IA (BYOK — votre propre clé API) est{' '}
            <strong className="font-semibold text-[var(--text-primary)]">
              désactivé par défaut
            </strong>
            . Aucune question et aucune donnée ne quittent votre appareil.
          </p>
          <p className="m-0">
            Vous pouvez consulter intégralement les 43 fiches scientifiques, le glossaire médical et
            la recherche plein texte hors ligne sans jamais activer cette option. Si vous souhaitez
            obtenir une synthèse ancrée uniquement sur ces 43 fiches avec des citations cliquables,
            vous pouvez configurer un fournisseur (Gemini, Mistral, serveur compatible OpenAI ou
            Ollama local) dans les Paramètres.
          </p>
          <div className="pt-1">
            <Link
              to="/settings"
              className="touch-target inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              <Settings className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Configurer l&apos;assistant IA dans les Paramètres</span>
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  const providerLabel = AI_PROVIDER_LABELS_FR[settings.aiHelper.provider];
  const isLocalProvider = settings.aiHelper.provider === 'ollama';

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = questionFr.trim();
    if (!trimmed || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setErrorFr(null);

    try {
      const result = await askWikiWithAi(settings.aiHelper, trimmed, getAllArticles());
      setResponse(result);
    } catch (err) {
      const message =
        err instanceof Error && err.message
          ? err.message
          : 'Impossible de joindre le fournisseur IA configuré. Vérifiez vos paramètres ou utilisez la recherche hors ligne.';
      setErrorFr(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-4">
      <aside
        role="note"
        aria-label="Consentement et vie privée"
        className="flex items-start gap-3 rounded-2xl border border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] p-4 text-sm text-[var(--status-warning-text)]"
      >
        <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
        <div className="space-y-1.5 leading-relaxed">
          <p className="m-0 font-semibold text-[var(--text-primary)]">
            Consentement vie privée — ne transmettez aucune donnée identifiante
          </p>
          <p className="m-0">
            {AI_PRIVACY_REMINDER_FR} Ne saisissez ni votre nom, ni votre prénom, ni votre numéro
            de sécurité sociale (NIR).
          </p>
          <p className="m-0 text-xs">
            Fournisseur actif :{' '}
            <strong className="font-semibold text-[var(--text-primary)]">{providerLabel}</strong>
            {settings.aiHelper.modelName ? ` (${settings.aiHelper.modelName})` : ''}.{' '}
            {isLocalProvider
              ? 'Les requêtes sont adressées à votre instance locale.'
              : 'Seuls votre question et les extraits pertinents des 43 fiches locales sont transmis.'}{' '}
            <Link to="/settings" className="font-semibold text-[var(--color-primary)] underline">
              Modifier dans les Paramètres
            </Link>
          </p>
        </div>
      </aside>

      <Card
        title="Poser une question sur la bibliothèque scientifique"
        subtitle="Synthèse strictement limitée aux 43 fiches locales avec citations vérifiables."
        icon={<MessageSquareText className="h-5 w-5" />}
      >
        <form onSubmit={(event) => void handleSubmit(event)} className="space-y-4">
          <div>
            <label
              htmlFor="wiki-qa-question"
              className="mb-1.5 block text-sm font-medium text-[var(--text-primary)]"
            >
              Votre question en français
            </label>
            <textarea
              id="wiki-qa-question"
              rows={3}
              value={questionFr}
              onChange={(event) => setQuestionFr(event.target.value)}
              placeholder="Ex. : Pourquoi surveille-t-on la créatinine et le potassium après une hausse de dose ?"
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-app)] p-3 text-sm leading-relaxed text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]"
            />
          </div>

          <div className="space-y-1.5">
            <span className="block text-xs font-medium text-[var(--text-secondary)]">
              Exemples de questions documentaires :
            </span>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED_QUESTIONS_FR.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setQuestionFr(suggestion)}
                  className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3 py-1.5 text-left text-xs text-[var(--text-primary)] transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]/50"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              type="submit"
              disabled={isSubmitting || questionFr.trim().length === 0}
              className="touch-target inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 shrink-0 animate-spin" aria-hidden="true" />
                  <span>Analyse de la bibliothèque...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>Interroger la bibliothèque</span>
                </>
              )}
            </button>
          </div>
        </form>
      </Card>

      {errorFr && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-2xl border border-[var(--status-urgent-border)] bg-[var(--status-urgent-bg)] p-4 text-sm text-[var(--status-urgent-text)]"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <div className="space-y-1">
            <p className="m-0 font-semibold">La requête n&apos;a pas pu aboutir</p>
            <p className="m-0">{errorFr}</p>
          </div>
        </div>
      )}

      {response && (
        <Card
          title="Réponse documentaire"
          subtitle="Basée exclusivement sur les extraits de la bibliothèque locale."
          icon={<BookOpenCheck className="h-5 w-5" />}
        >
          <div className="space-y-4">
            <SafeMarkdown
              content={response.answerFr}
              baseHeadingLevel={3}
              resolveArticleHref={(label) => {
                const slug = findArticleSlugByTitle(label);
                return slug ? `/library?article=${slug}` : undefined;
              }}
            />

            {response.citedArticles.length > 0 && (
              <div className="border-t border-[var(--border-subtle)] pt-3">
                <h3 className="mb-2 text-sm font-semibold text-[var(--text-primary)]">
                  Fiches citées ({response.citedArticles.length})
                </h3>
                <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                  {response.citedArticles.map((cited) => (
                    <li key={cited.slug}>
                      <button
                        type="button"
                        onClick={() => onOpenArticle(cited.slug)}
                        className="touch-target inline-flex items-center gap-1.5 rounded-xl border border-[var(--status-action-border)] bg-[var(--status-action-bg)] px-3 py-2 text-left text-xs font-semibold text-[var(--status-action-text)] transition-colors hover:border-[var(--color-primary)]"
                      >
                        <span>{cited.titleFr}</span>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <aside
              role="note"
              aria-label="Avertissement assistant IA"
              className="rounded-xl border border-[var(--status-info-border)] bg-[var(--status-info-bg)] p-3.5 text-xs leading-relaxed text-[var(--status-info-text)]"
            >
              {response.disclaimerFr}
            </aside>
          </div>
        </Card>
      )}
    </div>
  );
}
