import type { DrivingAssessmentInput, DrivingAssessmentResult } from '../types/rules';

const LEGAL_BASIS_STANDARD =
  "Arrêté du 28 mars 2022 (annexe affections cardiovasculaires) et Directive UE 2016/1106";

const LEGAL_BASIS_LIFEVEST =
  "Arrêté du 28 mars 2022 (§ 1.2.6 gilet défibrillateur portable) et Directive UE 2016/1106";

const APPROVED_DOCTOR_STEP =
  "Solliciter l'avis d'un médecin agréé pour le contrôle médical de l'aptitude à la conduite (obligatoirement distinct de votre médecin traitant ; liste disponible auprès de votre préfecture ou sur l'ANTS).";

const CARDIOLOGIST_OPINION_STEP =
  "Demander à votre cardiologue un compte-rendu précisant la stabilité clinique, la classe NYHA, la dernière FEVG et, le cas échéant, l'état du dispositif.";

const FINAL_WORD_STEP =
  "Cette évaluation est indicative et ne remplace pas la décision réglementaire du médecin agréé ni celle du préfet.";

function isIcdDevice(device: DrivingAssessmentInput['device']): boolean {
  return device === 'icd_primary' || device === 'icd_secondary' || device === 'crt_d';
}

interface WaitReason {
  weeks: number;
  labelFr: string;
}

/**
 * Évalue l'aptitude indicative à la conduite en France selon l'Arrêté du 28 mars 2022
 * et la Directive UE 2016/1106. Fonction 100 % pure et déterministe.
 */
export function evaluateFrenchDrivingFitness(
  input: DrivingAssessmentInput,
): DrivingAssessmentResult {
  const hasIcd = isIcdDevice(input.device);

  // 1. Gilet défibrillateur portable (LifeVest) : règle française explicite (§ 1.2.6)
  if (input.hasLifeVest) {
    if (input.group === 'group2') {
      return {
        status: 'permanently_incompatible',
        headlineFr: "Conduite professionnelle (groupe 2) incompatible avec un gilet LifeVest",
        explanationFr:
          "En France, l'indication d'un gilet défibrillateur portable (LifeVest) entraîne une incompatibilité permanente avec la conduite du groupe 2 (poids lourds, transports en commun, taxi, VTC, ambulance, transport scolaire).",
        legalBasisFr: LEGAL_BASIS_LIFEVEST,
        nextStepsFr: [
          "Ne conduisez pas de véhicule du groupe 2 (ni du groupe 1) pendant toute la durée d'indication du gilet.",
          "Faites le point avec votre cardiologue sur la stratégie à l'issue de la période de réévaluation et avec votre médecin du travail pour votre situation professionnelle.",
          APPROVED_DOCTOR_STEP,
          FINAL_WORD_STEP,
        ],
      };
    }

    return {
      status: 'temporarily_incompatible',
      headlineFr: "Conduite interdite en France pendant le port du gilet LifeVest",
      explanationFr:
        "L'Arrêté du 28 mars 2022 interdit la conduite automobile en France pendant toute la durée d'indication d'un gilet défibrillateur portable (LifeVest), jusqu'à la décision thérapeutique définitive (implantation d'un DAI ou levée de l'indication après réévaluation de la FEVG).",
      legalBasisFr: LEGAL_BASIS_LIFEVEST,
      nextStepsFr: [
        "Suspendez complètement la conduite jusqu'à la décision définitive de votre équipe de cardiologie.",
        "Une fois le port terminé, les règles dépendront de la suite retenue (absence de dispositif ou implantation d'un DAI).",
        APPROVED_DOCTOR_STEP,
        FINAL_WORD_STEP,
      ],
    };
  }

  // 2. Insuffisance cardiaque NYHA IV (Groupe 1 et Groupe 2)
  if (input.nyhaClass === 4) {
    return {
      status: 'permanently_incompatible',
      headlineFr: "Conduite incompatible en stade NYHA IV",
      explanationFr:
        "Une insuffisance cardiaque symptomatique au repos (classe NYHA IV) constitue une incompatibilité permanente avec la conduite automobile (groupe 1 comme groupe 2) tant que cet état persiste.",
      legalBasisFr: LEGAL_BASIS_STANDARD,
      nextStepsFr: [
        "Ne conduisez pas tant que les symptômes restent au stade NYHA IV.",
        CARDIOLOGIST_OPINION_STEP,
        "En cas d'amélioration clinique durable sous traitement, un réexamen pourra être demandé auprès d'un médecin agréé.",
        APPROVED_DOCTOR_STEP,
        FINAL_WORD_STEP,
      ],
    };
  }

  // 3. Règles spécifiques d'incompatibilité en Groupe 2 (poids lourds / pro)
  if (input.group === 'group2') {
    if (hasIcd) {
      return {
        status: 'permanently_incompatible',
        headlineFr: "Conduite professionnelle (groupe 2) incompatible avec un DAI ou CRT-D",
        explanationFr:
          "En France et selon la Directive UE 2016/1106, l'indication ou l'implantation d'un défibrillateur automatique implantable (DAI en prévention primaire ou secondaire, ou CRT-D) entraîne une incompatibilité permanente avec le permis groupe 2 (poids lourds, bus, taxi, VTC, ambulance), sauf cas exceptionnel dûment motivé.",
        legalBasisFr: LEGAL_BASIS_STANDARD,
        nextStepsFr: [
          "Ne conduisez pas de véhicule relevant du groupe 2.",
          "Discutez rapidement d'un aménagement ou d'une reconversion professionnelle avec votre médecin du travail (visite de pré-reprise).",
          "Pour votre véhicule personnel (groupe 1), une compatibilité temporaire reste envisageable après le délai réglementaire et avis spécialisé.",
          APPROVED_DOCTOR_STEP,
          FINAL_WORD_STEP,
        ],
      };
    }

    if (input.nyhaClass === 3) {
      return {
        status: 'permanently_incompatible',
        headlineFr: "Conduite professionnelle (groupe 2) incompatible en stade NYHA III",
        explanationFr:
          "Pour le groupe 2, seuls les stades NYHA I et II sont compatibles avec la conduite (sous réserve d'une FEVG au moins égale à 35 %). Les stades NYHA III et IV sont incompatibles.",
        legalBasisFr: LEGAL_BASIS_STANDARD,
        nextStepsFr: [
          "Suspendez toute activité de conduite relevant du groupe 2.",
          CARDIOLOGIST_OPINION_STEP,
          "Anticipez une visite de pré-reprise avec votre médecin du travail.",
          APPROVED_DOCTOR_STEP,
          FINAL_WORD_STEP,
        ],
      };
    }

    if (typeof input.lvefPercent === 'number' && input.lvefPercent < 35) {
      return {
        status: 'temporarily_incompatible',
        headlineFr: "Conduite professionnelle (groupe 2) incompatible tant que la FEVG est inférieure à 35 %",
        explanationFr: `La réglementation française et européenne impose une FEVG d'au moins 35 % (et une classe NYHA I ou II) pour le groupe 2. Avec une FEVG renseignée à ${input.lvefPercent} %, la conduite professionnelle est incompatible tant que la fraction d'éjection reste inférieure à 35 %.`,
        legalBasisFr: LEGAL_BASIS_STANDARD,
        nextStepsFr: [
          "Suspendez la conduite des véhicules du groupe 2 jusqu'à réévaluation de la FEVG.",
          CARDIOLOGIST_OPINION_STEP,
          "Si la FEVG dépasse durablement 35 % après optimisation du traitement, une nouvelle évaluation par un médecin agréé pourra être envisagée.",
          APPROVED_DOCTOR_STEP,
          FINAL_WORD_STEP,
        ],
      };
    }
  }

  // 4. Collecte de tous les délais obligatoires de suspension (incompatibilité temporaire)
  const waitReasons: WaitReason[] = [];

  // 4a. Choc approprié récent (DAI / CRT-D)
  if (input.hadRecentShock === 'appropriate') {
    waitReasons.push({
      weeks: 12,
      labelFr:
        "après un choc approprié du défibrillateur : suspension d'au moins 12 semaines (repère européen EHRA / pratique cardiologique) et réévaluation rythmologique obligatoire du risque de syncope",
    });
  }

  // 4b. Délais post-implantation de DAI / CRT-D (Groupe 1 ; Groupe 2 déjà traité ci-dessus)
  if (input.group === 'group1') {
    if (input.device === 'icd_primary') {
      const days = input.daysSinceIcdImplant;
      if (days === undefined || days < 28) {
        waitReasons.push({
          weeks: 4,
          labelFr:
            "après implantation d'un DAI en prévention primaire : délai minimal de 4 semaines avant reprise (groupe 1)",
        });
      }
    } else if (input.device === 'icd_secondary') {
      const days = input.daysSinceIcdImplant;
      if (days === undefined || days < 84) {
        waitReasons.push({
          weeks: 12,
          labelFr:
            "après implantation d'un DAI en prévention secondaire : délai minimal d'au moins 12 semaines avant reprise (groupe 1)",
        });
      }
    } else if (input.device === 'crt_d') {
      const days = input.daysSinceIcdImplant;
      if (days === undefined || days < 28) {
        waitReasons.push({
          weeks: 4,
          labelFr:
            "après implantation d'un CRT-D (suivant les règles du DAI) : délai minimal de 4 semaines en prévention primaire (ou au moins 12 semaines en prévention secondaire)",
        });
      }
    }
  }

  // 4c. Délais post-IDM, angioplastie (stents) et pontage aorto-coronarien
  const miMinWeeks = input.group === 'group2' ? 12 : 4;
  if (typeof input.daysSinceMi === 'number' && input.daysSinceMi < miMinWeeks * 7) {
    waitReasons.push({
      weeks: miMinWeeks,
      labelFr:
        input.group === 'group2'
          ? "après un infarctus du myocarde : délai habituel jusqu'à 12 semaines (3 mois) et bilan cardiologique complet avant reprise en groupe 2"
          : "après un infarctus du myocarde avec atteinte myocardique significative : délai minimal de 4 semaines en groupe 1",
    });
  }

  const pciMinWeeks = input.group === 'group2' ? 6 : 4;
  if (
    typeof input.daysSincePlannedPci === 'number' &&
    input.daysSincePlannedPci < pciMinWeeks * 7
  ) {
    waitReasons.push({
      weeks: pciMinWeeks,
      labelFr:
        input.group === 'group2'
          ? "après une angioplastie coronaire programmée : délai minimal de 6 semaines et avis spécialisé en groupe 2"
          : "après une angioplastie coronaire programmée (stent) : délai de 4 semaines selon l'annexe française (groupe 1)",
    });
  }

  const cabgMinWeeks = input.group === 'group2' ? 12 : 4;
  if (typeof input.daysSinceCabg === 'number' && input.daysSinceCabg < cabgMinWeeks * 7) {
    waitReasons.push({
      weeks: cabgMinWeeks,
      labelFr:
        input.group === 'group2'
          ? "après un pontage aorto-coronarien : délai minimal de 12 semaines et cicatrisation complète en groupe 2"
          : "après un pontage aorto-coronarien : délai minimal de 4 semaines et récupération satisfaisante en groupe 1",
    });
  }

  // 4d. NYHA III en Groupe 1 : incompatible tant que non stabilisée / traitée efficacement
  if (input.group === 'group1' && input.nyhaClass === 3) {
    const maxWeeks = waitReasons.length > 0 ? Math.max(...waitReasons.map((r) => r.weeks)) : undefined;
    const waitDetail =
      waitReasons.length > 0
        ? ` De plus, des délais réglementaires restent en cours : ${waitReasons.map((r) => r.labelFr).join(' ; ')}.`
        : '';
    return {
      status: 'temporarily_incompatible',
      ...(maxWeeks !== undefined ? { minWaitWeeks: maxWeeks } : {}),
      headlineFr: "Conduite temporairement incompatible tant que le stade NYHA III n'est pas stabilisé",
      explanationFr: `En France (Arrêté du 28 mars 2022), une insuffisance cardiaque au stade NYHA III est incompatible avec la conduite tant qu'elle n'est pas traitée efficacement et stabilisée.${waitDetail}`,
      legalBasisFr: LEGAL_BASIS_STANDARD,
      nextStepsFr: [
        "Suspendez la conduite tant que l'essoufflement reste marqué aux efforts usuels (NYHA III).",
        CARDIOLOGIST_OPINION_STEP,
        APPROVED_DOCTOR_STEP,
        FINAL_WORD_STEP,
      ],
    };
  }

  // 4e. Si un ou plusieurs délais réglementaires sont encore en cours
  if (waitReasons.length > 0) {
    const maxWeeks = Math.max(...waitReasons.map((r) => r.weeks));
    const reasonsText = waitReasons.map((r) => r.labelFr).join(' ; ');
    return {
      status: 'temporarily_incompatible',
      minWaitWeeks: maxWeeks,
      headlineFr: `Suspension temporaire de conduite (délai minimal indicatif : ${maxWeeks} semaines)`,
      explanationFr: `Un ou plusieurs délais réglementaires s'appliquent actuellement : ${reasonsText}. À l'issue de cette période, la reprise nécessite une stabilisation clinique, l'avis du cardiologue et la validation par un médecin agréé.`,
      legalBasisFr: LEGAL_BASIS_STANDARD,
      nextStepsFr: [
        `Respectez une période sans conduite d'au moins ${maxWeeks} semaines au total par rapport à l'événement concerné.`,
        CARDIOLOGIST_OPINION_STEP,
        APPROVED_DOCTOR_STEP,
        FINAL_WORD_STEP,
      ],
    };
  }

  // 5. Choc inapproprié récent : avis spécialisé obligatoire après correction de la cause
  if (input.hadRecentShock === 'inappropriate') {
    return {
      status: 'specialist_assessment_required',
      headlineFr: "Avis spécialisé requis après un choc inapproprié du défibrillateur",
      explanationFr:
        "En cas de choc inapproprié, la conduite doit être suspendue jusqu'à l'identification et la correction de la cause (reprogrammation du dispositif, contrôle d'une arythmie atriale ou d'une sonde). La reprise dépend ensuite de l'avis de votre rythmologue/cardiologue puis de la validation par un médecin agréé.",
      legalBasisFr: LEGAL_BASIS_STANDARD,
      nextStepsFr: [
        "Ne reprenez pas le volant avant la vérification et la correction de la cause du choc par votre centre de rythmologie.",
        CARDIOLOGIST_OPINION_STEP,
        APPROVED_DOCTOR_STEP,
        FINAL_WORD_STEP,
      ],
    };
  }

  // 6. Groupe 2 sans valeur de FEVG renseignée : avis spécialisé requis pour confirmer FEVG >= 35 %
  if (input.group === 'group2' && typeof input.lvefPercent !== 'number') {
    return {
      status: 'specialist_assessment_required',
      headlineFr: "Avis cardiologique requis pour vérifier la FEVG en groupe 2",
      explanationFr:
        "Pour la conduite professionnelle (groupe 2), la réglementation exige une classe NYHA I ou II et une FEVG documentée d'au moins 35 %, validées par un avis spécialisé et un médecin agréé.",
      legalBasisFr: LEGAL_BASIS_STANDARD,
      nextStepsFr: [
        "Faites confirmer votre dernière FEVG (ETT ou IRM) par votre cardiologue.",
        CARDIOLOGIST_OPINION_STEP,
        APPROVED_DOCTOR_STEP,
        FINAL_WORD_STEP,
      ],
    };
  }

  // 7. Compatible après avis médical / médecin agréé
  if (input.group === 'group2') {
    return {
      status: 'compatible_after_clearance',
      headlineFr: "Conduite professionnelle (groupe 2) envisageable après avis spécialisé et médecin agréé",
      explanationFr: `Avec une classe NYHA ${input.nyhaClass}, une FEVG ≥ 35 % (${input.lvefPercent} %), sans DAI ni gilet LifeVest et hors délai post-événement, une compatibilité temporaire peut être délivrée en groupe 2 sous réserve d'un avis cardiologique favorable et d'un suivi périodique.`,
      legalBasisFr: LEGAL_BASIS_STANDARD,
      nextStepsFr: [
        CARDIOLOGIST_OPINION_STEP,
        APPROVED_DOCTOR_STEP,
        "Respectez la périodicité de renouvellement fixée sur l'avis médical (visite obligatoire pour le groupe 2).",
        FINAL_WORD_STEP,
      ],
    };
  }

  if (hasIcd) {
    return {
      status: 'compatible_after_clearance',
      headlineFr: "Conduite groupe 1 envisageable (compatibilité temporaire) après avis cardiologique et médecin agréé",
      explanationFr:
        "Le délai minimal post-implantation est dépassé et aucun choc récent n'est signalé. En France, le port d'un DAI ou CRT-D permet une compatibilité temporaire (de 6 mois à 5 ans) pour le groupe 1 si votre cardiologue estime le risque de syncope négligeable et après validation par un médecin agréé.",
      legalBasisFr: LEGAL_BASIS_STANDARD,
      nextStepsFr: [
        CARDIOLOGIST_OPINION_STEP,
        APPROVED_DOCTOR_STEP,
        "En cas de choc futur du dispositif, interrompez immédiatement la conduite et contactez votre centre de suivi.",
        FINAL_WORD_STEP,
      ],
    };
  }

  return {
    status: 'compatible_after_clearance',
    headlineFr: "Conduite catégorie légère (groupe 1) compatible si l'état clinique est stable",
    explanationFr: `Avec une insuffisance cardiaque stabilisée (NYHA ${input.nyhaClass}), sans DAI ni gilet LifeVest et hors délai post-événement, la conduite en groupe 1 est en principe compatible sous réserve d'un traitement efficace et d'absence de symptômes gênant la conduite. Pour toute affection cardiovasculaire listée par l'Arrêté du 28 mars 2022, il appartient au conducteur de solliciter l'avis d'un médecin agréé.`,
    legalBasisFr: LEGAL_BASIS_STANDARD,
    nextStepsFr: [
      CARDIOLOGIST_OPINION_STEP,
      APPROVED_DOCTOR_STEP,
      "Interrompez la conduite et consultez en cas de malaise, de vertiges importants ou d'aggravation des symptômes.",
      FINAL_WORD_STEP,
    ],
  };
}
