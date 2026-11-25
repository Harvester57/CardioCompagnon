import { useMemo, useState } from 'react';
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  CircleDashed,
  Clock,
  ExternalLink,
  Filter,
  ListChecks,
  MinusCircle,
  Save,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { FRENCH_ADMIN_CATALOG } from '../../content/fr';
import type { FrenchAdminCatalogItem, FrenchAdminProgress } from '../../types';
import { Card, DateInput, EvidenceBadge } from '../../ui';
import {
  ADMIN_CATEGORY_LABELS,
  ADMIN_CATEGORY_OPTIONS,
  ADMIN_STATUS_OPTIONS,
  computeAdminProgressStats,
  formatIsoDateFr,
  getAdminStatusMeta,
  type AdminCategoryFilter,
  type AdminStatus,
} from './france-helpers';

export interface AdminProgressPatch {
  status?: FrenchAdminProgress['status'];
  renewalDate?: string | null;
  notes?: string | null;
}

export interface AdminChecklistTabProps {
  adminProgress: readonly FrenchAdminProgress[];
  onPatchProgress: (
    itemId: FrenchAdminProgress['itemId'],
    patch: AdminProgressPatch,
  ) => Promise<void>;
}

interface AdminChecklistItemCardProps {
  item: FrenchAdminCatalogItem;
  progress: FrenchAdminProgress | undefined;
  onPatch: (
    itemId: FrenchAdminProgress['itemId'],
    patch: AdminProgressPatch,
  ) => Promise<void>;
}

function StatusIcon({ status }: { status: AdminStatus }) {
  switch (status) {
    case 'done':
      return <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />;
    case 'in_progress':
      return <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />;
    case 'not_applicable':
      return <MinusCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />;
    default:
      return <CircleDashed className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />;
  }
}

function AdminChecklistItemCard({ item, progress, onPatch }: AdminChecklistItemCardProps) {
  const currentStatus: AdminStatus = progress?.status ?? 'todo';
  const currentRenewalDate = progress?.renewalDate ?? '';
  const persistedNotes = progress?.notes ?? '';

  const [draftNotes, setDraftNotes] = useState<string | null>(null);
  const [savedFeedback, setSavedFeedback] = useState(false);

  const displayedNotes = draftNotes ?? persistedNotes;
  const hasUnsavedNotes = draftNotes !== null && draftNotes !== persistedNotes;
  const statusMeta = getAdminStatusMeta(currentStatus);

  const statusSelectId = `admin-status-${item.id}`;
  const renewalInputId = `admin-renewal-${item.id}`;
  const notesTextareaId = `admin-notes-${item.id}`;

  async function persistPatch(patch: AdminProgressPatch) {
    await onPatch(item.id, patch);
    setSavedFeedback(true);
  }

  async function handleStatusChange(nextStatus: AdminStatus) {
    setSavedFeedback(false);
    await persistPatch({ status: nextStatus });
  }

  async function handleRenewalChange(nextDate: string) {
    setSavedFeedback(false);
    await persistPatch({ renewalDate: nextDate ? nextDate : null });
  }

  async function handleSaveNotes() {
    const valueToSave = (draftNotes ?? persistedNotes).trim();
    setDraftNotes(null);
    await persistPatch({ notes: valueToSave ? valueToSave : null });
  }

  return (
    <Card
      tone={currentStatus === 'done' ? 'stable' : 'default'}
      className="space-y-4"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1 space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-2 py-0.5 text-xs font-medium text-[var(--text-secondary)]">
              {ADMIN_CATEGORY_LABELS[item.category]}
            </span>
            <span
              className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusMeta.badgeClasses}`}
            >
              <StatusIcon status={currentStatus} />
              <span>{statusMeta.labelFr}</span>
            </span>
            <EvidenceBadge asOf={formatIsoDateFr(item.asOf)} />
          </div>

          <h3 className="text-base font-semibold leading-snug text-[var(--text-primary)]">
            {item.titleFr}
          </h3>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{item.summaryFr}</p>

      {/* Controles interactifs persistes dans Dexie */}
      <div className="grid grid-cols-1 gap-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-3.5 md:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor={statusSelectId}
            className="block text-xs font-semibold text-[var(--text-primary)]"
          >
            Statut de la démarche
          </label>
          <select
            id={statusSelectId}
            aria-label={`Statut — ${item.titleFr}`}
            value={currentStatus}
            onChange={(event) => {
              void handleStatusChange(event.target.value as AdminStatus);
            }}
            className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm font-medium text-[var(--text-primary)]"
          >
            {ADMIN_STATUS_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.labelFr}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-[var(--color-primary)]" aria-hidden="true" />
            <label
              htmlFor={renewalInputId}
              className="text-xs font-semibold text-[var(--text-primary)]"
            >
              Date de renouvellement (optionnelle)
            </label>
          </div>
          <div className="flex items-center gap-2">
            <DateInput
              id={renewalInputId}
              aria-label={`Date de renouvellement — ${item.titleFr}`}
              value={currentRenewalDate}
              onChange={(iso) => {
                void handleRenewalChange(iso);
              }}
              className="touch-target w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] tabular-nums"
            />
            {currentRenewalDate && (
              <button
                type="button"
                onClick={() => {
                  void handleRenewalChange('');
                }}
                aria-label={`Effacer la date de renouvellement pour ${item.titleFr}`}
                className="touch-target inline-flex shrink-0 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] px-2.5 text-[var(--text-secondary)] hover:bg-[var(--bg-app)] hover:text-[var(--text-primary)]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        <div className="space-y-1.5 md:col-span-2">
          <div className="flex items-center justify-between gap-2">
            <label
              htmlFor={notesTextareaId}
              className="block text-xs font-semibold text-[var(--text-primary)]"
            >
              Notes personnelles
            </label>
            {savedFeedback && !hasUnsavedNotes && (
              <span className="text-xs font-medium text-[var(--status-stable-text)]">
                Enregistré localement
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
            <textarea
              id={notesTextareaId}
              rows={2}
              aria-label={`Notes personnelles — ${item.titleFr}`}
              placeholder="Date d'envoi du dossier, interlocuteur CPAM, date de rendez-vous..."
              value={displayedNotes}
              onChange={(event) => {
                setSavedFeedback(false);
                setDraftNotes(event.target.value);
              }}
              onBlur={() => {
                if (draftNotes !== null && draftNotes !== persistedNotes) {
                  void handleSaveNotes();
                }
              }}
              className="w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]"
            />
            {hasUnsavedNotes && (
              <button
                type="button"
                onClick={() => {
                  void handleSaveNotes();
                }}
                className="touch-target inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-[var(--color-primary)] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                <Save className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Enregistrer</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Etapes concretes */}
      <div className="space-y-2">
        <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
          <ListChecks className="h-3.5 w-3.5 text-[var(--color-primary)]" aria-hidden="true" />
          <span>Étapes concrètes</span>
        </h4>
        <ol className="list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-[var(--text-primary)]">
          {item.stepsFr.map((step, index) => (
            <li key={`${item.id}-step-${index}`}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Liens officiels + article bibliotheque */}
      <div className="flex flex-col gap-3 border-t border-[var(--border-subtle)] pt-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
            Liens officiels
          </p>
          <ul className="space-y-1">
            {item.officialLinks.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] underline-offset-2 hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Link
          to={`/library?article=${item.articleSlug}`}
          className="touch-target inline-flex shrink-0 items-center gap-1.5 self-start rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3.5 py-2 text-xs font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary-soft)] sm:self-end"
        >
          <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>Lire l&apos;article dans la bibliothèque</span>
        </Link>
      </div>
    </Card>
  );
}

export function AdminChecklistTab({
  adminProgress,
  onPatchProgress,
}: AdminChecklistTabProps) {
  const [selectedCategory, setSelectedCategory] = useState<AdminCategoryFilter>('all');

  const progressById = useMemo(
    () => new Map(adminProgress.map((entry) => [entry.itemId, entry])),
    [adminProgress],
  );

  const stats = useMemo(
    () => computeAdminProgressStats(FRENCH_ADMIN_CATALOG, adminProgress),
    [adminProgress],
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<AdminCategoryFilter, number> = {
      all: FRENCH_ADMIN_CATALOG.length,
      couverture: 0,
      parcours_soins: 0,
      travail: 0,
      emprunt: 0,
      conduite: 0,
      prevention: 0,
    };
    for (const item of FRENCH_ADMIN_CATALOG) {
      counts[item.category] += 1;
    }
    return counts;
  }, []);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return FRENCH_ADMIN_CATALOG;
    }
    return FRENCH_ADMIN_CATALOG.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-5">
      {/* Barre de progression globale */}
      <Card
        title="Progression de vos démarches en France"
        subtitle="Suivez vos droits, votre parcours de soins et vos échéances de renouvellement."
      >
        <div className="space-y-3">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="text-sm font-medium text-[var(--text-primary)]">
              Démarches effectuées
            </span>
            <span className="text-sm font-semibold text-[var(--color-primary)] tabular-nums">
              {stats.done} / {stats.applicableTotal} ({stats.completionPercent} %)
            </span>
          </div>

          <div
            role="progressbar"
            aria-label="Progression globale des démarches administratives en France"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={stats.completionPercent}
            className="h-3 w-full overflow-hidden rounded-full bg-[var(--bg-subtle)] border border-[var(--border-subtle)]"
          >
            <div
              className="h-full rounded-full bg-[var(--color-accent)] transition-all duration-300"
              style={{ width: `${stats.completionPercent}%` }}
            />
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            <div className="rounded-xl border border-[var(--status-stable-border)] bg-[var(--status-stable-bg)] px-3 py-2">
              <p className="text-xs font-medium text-[var(--status-stable-text)]">Obtenu</p>
              <p className="text-lg font-bold text-[var(--status-stable-text)] tabular-nums">
                {stats.done}
              </p>
            </div>
            <div className="rounded-xl border border-[var(--status-warning-border)] bg-[var(--status-warning-bg)] px-3 py-2">
              <p className="text-xs font-medium text-[var(--status-warning-text)]">En cours</p>
              <p className="text-lg font-bold text-[var(--status-warning-text)] tabular-nums">
                {stats.inProgress}
              </p>
            </div>
            <div className="rounded-xl border border-[var(--status-info-border)] bg-[var(--status-info-bg)] px-3 py-2">
              <p className="text-xs font-medium text-[var(--status-info-text)]">À faire</p>
              <p className="text-lg font-bold text-[var(--status-info-text)] tabular-nums">
                {stats.todo}
              </p>
            </div>
            <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3 py-2">
              <p className="text-xs font-medium text-[var(--text-secondary)]">Non concerné</p>
              <p className="text-lg font-bold text-[var(--text-secondary)] tabular-nums">
                {stats.notApplicable}
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Filtres par categorie */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
          <Filter className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Filtrer par catégorie</span>
        </div>
        <div
          role="group"
          aria-label="Filtrer les démarches par catégorie"
          className="flex flex-wrap gap-2"
        >
          {ADMIN_CATEGORY_OPTIONS.map((option) => {
            const isSelected = selectedCategory === option.value;
            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedCategory(option.value)}
                className={`touch-target inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-sm font-medium transition-colors ${
                  isSelected
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
                }`}
              >
                <span>{option.labelFr}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-xs tabular-nums ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-[var(--bg-subtle)] text-[var(--text-secondary)]'
                  }`}
                >
                  {categoryCounts[option.value]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Liste des 12 demarches */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <AdminChecklistItemCard
            key={item.id}
            item={item}
            progress={progressById.get(item.id)}
            onPatch={onPatchProgress}
          />
        ))}
      </div>
    </div>
  );
}
