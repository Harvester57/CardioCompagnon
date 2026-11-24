import type { PatientState } from '../../types/domain';
import type { RuleOutput } from '../../types/rules';
import {
  createRuleOutput,
  daysBetween,
  getAdminItemStatus,
  getSortedEvents,
  getSortedLabs,
  isWithinLastDays,
} from '../helpers';

const TELESURVEILLANCE_NTPROBNP_THRESHOLD = 1000;

/**
 * Règles déterministes liées aux droits, parcours de soins et prévention en France.
 * 5 règles : FR_ALD_CHECK, FR_SMR_REHAB, FR_TELESURVEILLANCE, FR_SICK_LEAVE_2026, VACCINES_ANNUAL.
 */
export function evaluateFrenchRightsRules(state: PatientState): RuleOutput[] {
  const outputs: RuleOutput[] = [];
  const sortedEvents = getSortedEvents(state.events, state.referenceDate);
  const sortedLabs = getSortedLabs(state.labs, state.referenceDate);

  // 26. FR_ALD_CHECK : ald_5_13 absent ou status === 'todo'
  const aldStatus = getAdminItemStatus(state.adminProgress, 'ald_5_13');
  if (aldStatus === undefined || aldStatus === 'todo') {
    outputs.push(
      createRuleOutput({
        id: 'FR_ALD_CHECK',
        severity: 'action',
        category: 'france',
        titleFr: "Vérifier votre demande d'ALD 5 / ALD 13",
        explanationFr:
          "L'insuffisance cardiaque grave (ALD 5) et la maladie coronaire (ALD 13) permettent une exonération du ticket modérateur (prise en charge à 100 % du tarif de la Sécurité sociale) pour les soins en lien avec l'affection, ainsi que le maintien des droits associés.",
        suggestedActionFr:
          "Demandez à votre médecin traitant d'établir ou de vérifier le protocole de soins ALD 5 / ALD 13 sur votre espace Ameli.",
        evidenceGrade: 'Ameli / HAS 2025',
        sources: ['Assurance Maladie (ameli.fr)', 'HAS 2025'],
        articleSlug: 'vivre-avec-insuffisance-cardiaque-en-france',
        relatedQuestionIds: ['q_fr_ald'],
      }),
    );
  }

  // 27. FR_SMR_REHAB : smr_rehab absent ou status === 'todo'
  const smrStatus = getAdminItemStatus(state.adminProgress, 'smr_rehab');
  if (smrStatus === undefined || smrStatus === 'todo') {
    outputs.push(
      createRuleOutput({
        id: 'FR_SMR_REHAB',
        severity: 'action',
        category: 'france',
        titleFr: "Réadaptation cardiaque (SMR cardiovasculaire) recommandée",
        explanationFr:
          "La réadaptation cardiaque encadrée est une recommandation de Classe I (ESC 2026) pour améliorer la capacité d'effort et la qualité de vie. En France, le SMR cardiovasculaire (en hôpital de jour ou en séjour) bénéficie d'une prise en charge sans demande d'accord préalable (HAS 2024).",
        suggestedActionFr:
          "Demandez à votre cardiologue une prescription de réadaptation cardiaque (SMR cardiovasculaire) adaptée à votre rythme et à votre lieu de vie.",
        evidenceGrade: 'ESC 2026 Classe I / HAS 2024',
        sources: ['ESC 2026 Classe I', 'HAS 2024'],
        articleSlug: 'readaptation-cardiaque-et-activite-physique',
        relatedQuestionIds: ['q_fr_smr_rehab'],
      }),
    );
  }

  // 28. FR_TELESURVEILLANCE : Hospitalisation IC < 365 j ou (nyhaClass >= 2 et NT-proBNP élevé)
  const teleStatus = getAdminItemStatus(state.adminProgress, 'telesurveillance_ic');
  if (teleStatus !== 'done' && teleStatus !== 'not_applicable') {
    const hasRecentHfHosp = sortedEvents.some((ev) => {
      if (ev.type !== 'hf_hospitalisation') return false;
      const diff = daysBetween(ev.date, state.referenceDate);
      return diff >= 0 && diff < 365;
    });

    const ntProBnpLabs = sortedLabs.filter((lab) => typeof lab.ntProBnpPgMl === 'number');
    const latestNtProBnp = ntProBnpLabs[ntProBnpLabs.length - 1]?.ntProBnpPgMl;
    const hasNyhaAndHighBnp =
      state.profile.nyhaClass !== null &&
      state.profile.nyhaClass >= 2 &&
      latestNtProBnp !== undefined &&
      latestNtProBnp >= TELESURVEILLANCE_NTPROBNP_THRESHOLD;

    if (hasRecentHfHosp || hasNyhaAndHighBnp) {
      const criterionFr = hasRecentHfHosp
        ? "hospitalisation pour insuffisance cardiaque au cours des 12 derniers mois"
        : `stade NYHA ${state.profile.nyhaClass} associé à un NT-proBNP élevé (${latestNtProBnp} pg/mL)`;

      outputs.push(
        createRuleOutput({
          id: 'FR_TELESURVEILLANCE',
          severity: 'info',
          category: 'france',
          titleFr: "Éligibilité potentielle à la télésurveillance IC remboursée",
          explanationFr: `Votre profil (${criterionFr}) correspond aux critères usuels d'éligibilité à la télésurveillance médicale de l'insuffisance cardiaque prise en charge par l'Assurance Maladie en France (référentiel HAS).`,
          suggestedActionFr:
            "Demandez à votre cardiologue ou à votre infirmière insuffisance cardiaque / IPA si un programme de télésurveillance à domicile est proposé dans votre centre.",
          evidenceGrade: 'Référentiel HAS',
          sources: ['HAS — Référentiel télésurveillance insuffisance cardiaque', 'Assurance Maladie'],
          articleSlug: 'telesurveillance-insuffisance-cardiaque',
          relatedQuestionIds: ['q_fr_telesurveillance'],
        }),
      );
    }
  }

  // 29. FR_SICK_LEAVE_2026 : onExtendedSickLeave === true et ald_5_13 !== 'done'
  if (state.profile.onExtendedSickLeave === true && aldStatus !== 'done') {
    outputs.push(
      createRuleOutput({
        id: 'FR_SICK_LEAVE_2026',
        severity: 'warning',
        category: 'france',
        titleFr: "Arrêt de travail prolongé : vigilance réforme IJ octobre 2026 hors ALD",
        explanationFr:
          "Vous indiquez un arrêt de travail prolongé alors que la reconnaissance en ALD 5 / ALD 13 n'est pas enregistrée comme obtenue. Depuis la réforme du 15 octobre 2026, la durée maximale d'indemnisation par les indemnités journalières (IJ) est limitée à 1 an hors ALD, tandis que le plafond de 3 ans reste maintenu avec une ALD.",
        suggestedActionFr:
          "Vérifiez sans tarder l'avancement de votre protocole ALD avec votre médecin traitant, contactez votre CPAM pour confirmer vos droits aux IJ et anticipez une visite de pré-reprise avec votre médecin du travail.",
        evidenceGrade: 'Réforme IJ 15 oct. 2026',
        sources: ['Service-Public (fiche A19066)', 'Assurance Maladie (ameli.fr)'],
        articleSlug: 'vivre-avec-insuffisance-cardiaque-en-france',
        relatedQuestionIds: ['q_fr_sick_leave_work'],
      }),
    );
  }

  // 30. VACCINES_ANNUAL : Absence de vaccine_flu dans les 365 derniers jours ou aucun vaccine_pneumo
  const hasRecentFlu = sortedEvents.some(
    (ev) => ev.type === 'vaccine_flu' && isWithinLastDays(ev.date, state.referenceDate, 365),
  );
  const hasPneumo = sortedEvents.some((ev) => ev.type === 'vaccine_pneumo');

  if (!hasRecentFlu || !hasPneumo) {
    const missing: string[] = [];
    if (!hasRecentFlu) missing.push('vaccination antigrippale annuelle (≤ 12 mois)');
    if (!hasPneumo) missing.push('vaccination antipneumococcique');

    outputs.push(
      createRuleOutput({
        id: 'VACCINES_ANNUAL',
        severity: 'info',
        category: 'france',
        titleFr: "Vaccinations recommandées à vérifier (grippe / pneumocoque)",
        explanationFr: `Les infections respiratoires sont un facteur fréquent de décompensation cardiaque. Les recommandations ESC 2026 (Classe IIa) conseillent la vaccination contre la grippe chaque année et contre le pneumocoque. À vérifier dans votre suivi : ${missing.join(' et ')}.`,
        suggestedActionFr:
          "Faites le point sur votre calendrier vaccinal avec votre médecin traitant ou votre pharmacien (prise en charge spécifique en cas d'ALD ou d'insuffisance cardiaque).",
        evidenceGrade: 'ESC 2026 Classe IIa',
        sources: ['ESC 2026 Classe IIa', 'Calendrier vaccinal France'],
        articleSlug: 'vivre-avec-insuffisance-cardiaque',
        relatedQuestionIds: ['q_vaccines_prevention'],
      }),
    );
  }

  return outputs;
}
