import type { PatientState } from '../../types/domain';
import type { RuleOutput } from '../../types/rules';
import { createRuleOutput, getLatestLvef, getSortedEvents, isWithinLastDays } from '../helpers';

function isIcdDevice(device: PatientState['profile']['modules']['device']): boolean {
  return device === 'icd_primary' || device === 'icd_secondary' || device === 'crt_d';
}

/**
 * Règles déterministes de conduite automobile en France (Arrêté du 28 mars 2022 + Directive UE 2016/1106).
 * 2 règles : FR_DRIVING_LIFEVEST, FR_DRIVING_ICD_OR_NYHA.
 */
export function evaluateDrivingRules(state: PatientState): RuleOutput[] {
  const outputs: RuleOutput[] = [];
  const { drivingGroup, nyhaClass, modules } = state.profile;
  const latestLvef = getLatestLvef(state.imaging, state.referenceDate);
  const sortedEvents = getSortedEvents(state.events, state.referenceDate);

  // 31. FR_DRIVING_LIFEVEST : modules.lifeVest === true
  if (modules.lifeVest) {
    const group2Extra =
      drivingGroup === 'group2'
        ? " Pour la conduite professionnelle (groupe 2), l'indication du gilet entraîne une incompatibilité permanente."
        : '';

    outputs.push(
      createRuleOutput({
        id: 'FR_DRIVING_LIFEVEST',
        severity: 'warning',
        category: 'france',
        titleFr: "Conduite interdite en France pendant le port du gilet LifeVest",
        explanationFr: `Selon l'Arrêté du 28 mars 2022 (§ 1.2.6), la conduite automobile est interdite en France pendant toute la durée d'indication d'un gilet défibrillateur portable (LifeVest), jusqu'à la décision thérapeutique définitive (implantation d'un DAI ou arrêt de l'indication).${group2Extra}`,
        suggestedActionFr:
          "Ne conduisez pas tant que le gilet LifeVest est indiqué. À l'issue de cette période, faites le point avec votre cardiologue puis sollicitez un médecin agréé (distinct de votre médecin traitant).",
        evidenceGrade: 'Arrêté du 28 mars 2022 (§ 1.2.6)',
        sources: ['Arrêté du 28 mars 2022 (§ 1.2.6)', 'Directive UE 2016/1106'],
        articleSlug: 'gilet-defibrillateur-portable',
        relatedQuestionIds: ['q_driving_rules'],
      }),
    );
  }

  // 32. FR_DRIVING_ICD_OR_NYHA : drivingGroup !== 'none' et (device !== 'none' ou nyhaClass >= 3 ou drivingGroup === 'group2')
  const hasDevice = modules.device !== 'none';
  const hasHighNyha = nyhaClass !== null && nyhaClass >= 3;
  const isGroup2 = drivingGroup === 'group2';

  if (drivingGroup !== 'none' && (hasDevice || hasHighNyha || isGroup2)) {
    const hasIcd = isIcdDevice(modules.device);
    const hasLowLvefForGroup2 = isGroup2 && latestLvef !== undefined && latestLvef.value < 35;
    const hasRecentShock = sortedEvents.some(
      (ev) =>
        (ev.type === 'icd_shock_appropriate' || ev.type === 'icd_shock_inappropriate') &&
        isWithinLastDays(ev.date, state.referenceDate, 84),
    );

    const isWarning =
      hasHighNyha ||
      (isGroup2 && hasIcd) ||
      hasLowLvefForGroup2 ||
      hasRecentShock;

    const highlights: string[] = [];
    if (isGroup2) {
      highlights.push(
        "en groupe 2 (poids lourds, bus, taxi, VTC, ambulance) : incompatibilité permanente en cas de DAI/CRT-D ou de NYHA III–IV, et seuil minimal de FEVG ≥ 35 % exigé",
      );
    }
    if (hasIcd && !isGroup2) {
      highlights.push(
        "en groupe 1 avec DAI/CRT-D : délai minimal de 4 semaines en prévention primaire et d'au moins 12 semaines en prévention secondaire (et suspension après choc)",
      );
    }
    if (hasHighNyha) {
      highlights.push(
        nyhaClass === 4
          ? "stade NYHA IV : conduite incompatible tant que cet état persiste"
          : "stade NYHA III : conduite incompatible tant que les symptômes ne sont pas stabilisés",
      );
    }

    outputs.push(
      createRuleOutput({
        id: 'FR_DRIVING_ICD_OR_NYHA',
        severity: isWarning ? 'warning' : 'action',
        category: 'france',
        titleFr: "Règles françaises du permis de conduire à vérifier",
        explanationFr: `Votre profil de conducteur (${isGroup2 ? 'groupe 2 / professionnel' : 'groupe 1 / véhicule léger'}) relève de dispositions spécifiques de l'Arrêté du 28 mars 2022 : ${highlights.length > 0 ? highlights.join(' ; ') : 'suivi médical et avis réglementaire requis pour les dispositifs implantés'}.`,
        suggestedActionFr:
          "Utilisez le calculateur « Permis de conduire » dans l'onglet Vie en France et sollicitez l'avis de votre cardiologue puis d'un médecin agréé (distinct de votre médecin traitant).",
        evidenceGrade: 'Arrêté du 28 mars 2022',
        sources: ['Arrêté du 28 mars 2022', 'Directive UE 2016/1106'],
        articleSlug: 'regles-conduite-automobile',
        relatedQuestionIds: ['q_driving_rules'],
      }),
    );
  }

  return outputs;
}
