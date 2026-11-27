import type { QuestionCatalogItem } from '../../../types';

export const QUESTIONS_CATALOG: QuestionCatalogItem[] = [
  // --- Comprendre vos chiffres ---
  {
    id: 'q_numbers_echo_vs_mri',
    interlocutor: 'cardiologist',
    topicFr: 'Comprendre vos chiffres',
    questionFr:
      'Quel examen a mesuré ma FEVG : une échocardiographie transthoracique (ETT) ou une IRM cardiaque ? A-t-elle été mesurée avec la même méthode à chaque fois ?',
    whyItMattersFr:
      "Dans la dysfonction ischémique du ventricule gauche, l'IRM mesure en moyenne une FEVG inférieure d'environ 5,5 points à l'ETT, et les deux examens peuvent se situer de part et d'autre du seuil de 35 %.",
    sources: ['Sous-étude REVIVED-BCIS2 ETT vs IRM (2025)'],
    articleSlug: 'fraction-dejection',
    relevantModules: ['core'],
    triggeredByRules: ['ETT_VS_IRM_DISCORDANCE'],
  },
  {
    id: 'q_numbers_lv_size',
    interlocutor: 'cardiologist',
    topicFr: 'Comprendre vos chiffres',
    questionFr:
      'Quelle est la taille de mon ventricule gauche (VTDi, VTSi, DTDVG), et évolue-t-elle au fil des examens ?',
    whyItMattersFr:
      "Le volume télésystolique du ventricule gauche prédisait l'évolution clinique dans la sous-étude de REVIVED-BCIS2 là où la FEVG seule ne le faisait pas.",
    sources: ['Sous-étude REVIVED-BCIS2 ETT vs IRM (2025)'],
    articleSlug: 'examens-et-chiffres',
    relevantModules: ['core'],
  },
  {
    id: 'q_numbers_nyha_class',
    interlocutor: 'cardiologist',
    topicFr: 'Comprendre vos chiffres',
    questionFr: 'Dans quelle classe NYHA (I à IV) suis-je actuellement situé(e) ?',
    whyItMattersFr:
      "La classe NYHA résume l'impact de la maladie sur vos activités quotidiennes et intervient dans le choix des traitements, des dispositifs et de la conduite automobile.",
    sources: ['Guide patient ESC 2026'],
    articleSlug: 'comprendre-le-diagnostic',
    relevantModules: ['core'],
  },
  {
    id: 'q_numbers_mri_scar',
    interlocutor: 'cardiologist',
    topicFr: 'Comprendre vos chiffres',
    questionFr:
      'Mon IRM cardiaque montre-t-elle une cicatrice (rehaussement tardif, LGE), et quelle proportion du muscle cardiaque est concernée ?',
    whyItMattersFr:
      "Une cicatrice plus étendue à l'IRM prédisait un pronostic moins favorable et une moindre récupération de la FEVG dans REVIVED-BCIS2.",
    sources: ['REVIVED-BCIS2 analyse viabilité (2023)'],
    articleSlug: 'examens-et-chiffres',
    relevantModules: ['core'],
  },

  // --- Médicaments (les 4 piliers) ---
  {
    id: 'q_meds_four_pillars',
    interlocutor: 'cardiologist',
    topicFr: 'Médicaments de fond',
    questionFr:
      "Est-ce que je prends bien les quatre classes du traitement de fond (IEC ou ARNI, bêtabloquant, ARM, iSGLT2) ? Si l'une manque, pour quelle raison ?",
    whyItMattersFr:
      "Les quatre piliers forment le traitement de base fortement recommandé en Europe pour protéger votre cœur ; chaque famille agit par un mécanisme complémentaire.",
    sources: ['Recommandations ESC 2026 (insuffisance cardiaque)'],
    articleSlug: 'medicaments-insuffisance-cardiaque',
    relevantModules: ['core'],
    triggeredByRules: ['GDMT_MISSING_PILLAR'],
  },
  {
    id: 'q_meds_titration_schedule',
    interlocutor: 'cardiologist',
    topicFr: 'Médicaments de fond',
    questionFr:
      'Mes doses sont-elles aux doses cibles, ou prévoit-on de les augmenter progressivement (titration) ? Selon quel calendrier, avec quels bilans et consultations à chaque palier, et quels résultats (tension, potassium, fonction rénale, pouls) conduiraient à différer une hausse ?',
    whyItMattersFr:
      "L'ESC 2026 préconise une titration toutes les 1 à 2 semaines. Dans STRONG-HF, atteindre les doses cibles en 2 semaines après hospitalisation (visites S1, S2, S3 et S6) a réduit les réhospitalisations, avec des critères de pause propres à l'essai ; dans SwedeHF, seule une minorité atteignait les doses cibles, encore moins chez les plus âgés.",
    sources: ['Recommandations ESC 2026', 'STRONG-HF (2022)', 'SwedeHF (2022)'],
    articleSlug: 'medicaments-insuffisance-cardiaque',
    relevantModules: ['core'],
    triggeredByRules: ['GDMT_MISSING_PILLAR'],
  },
  {
    id: 'q_meds_side_effects_contact',
    interlocutor: 'gp',
    topicFr: 'Médicaments de fond',
    questionFr:
      'Quels effets secondaires dois-je signaler rapidement, et qui dois-je contacter avant toute modification de dose ?',
    whyItMattersFr:
      "Il ne faut jamais arrêter seul un traitement de l'insuffisance cardiaque ; savoir qui joindre évite les interruptions risquées.",
    sources: ['Guide patient ESC 2026', 'Recommandations ESC 2026'],
    articleSlug: 'medicaments-effets-secondaires-suivi',
    relevantModules: ['core'],
    triggeredByRules: ['ARNI_WASHOUT_INFO'],
  },
  {
    id: 'q_meds_iron_check',
    interlocutor: 'cardiologist',
    topicFr: 'Médicaments et carence en fer',
    questionFr:
      'Ma ferritine et mon coefficient de saturation de la transferrine (CST) ont-ils été vérifiés ? En cas de carence, le fer intraveineux est-il une option ?',
    whyItMattersFr:
      "Dans les essais regroupés, le fer intraveineux a réduit d'environ un cinquième les hospitalisations pour insuffisance cardiaque, alors que le fer par voie orale s'est révélé inefficace (IRONOUT-HF).",
    sources: ['ESC 2026', 'Méta-analyse fer IV (2025)', 'IRONOUT-HF (2017)'],
    articleSlug: 'carence-martiale-et-fer-iv',
    relevantModules: ['core'],
    triggeredByRules: ['IRON_DEFICIENCY_CHECK'],
  },
  {
    id: 'q_iron_high_bioavail_oral',
    interlocutor: 'cardiologist',
    topicFr: 'Carence en fer : fer oral « haute biodisponibilité »',
    questionFr:
      'On me propose un fer oral « mieux absorbé » (bisglycinate ferreux / Ferrochel, fer sucrosomial, maltol ferrique, fer héminique ou lactoferrine) à la place du fer intraveineux : est-ce une alternative démontrée dans mon ICFER ?',
    whyItMattersFr:
      "Aucun essai randomisé publié dans l'ICFER n'a validé le bisglycinate ferreux (Ferrochel) ou ces formes récentes ; en cas d'hepcidine élevée, le blocage de la ferroportine limite la recharge des réserves par voie orale. Le fer intraveineux reste la seule voie étayée par les essais et l'ESC 2026.",
    sources: ['IRONOUT-HF (2017)', 'ORION-HF (2025)', 'AEGIS-H2H (2021)', 'ESC 2026'],
    articleSlug: 'fer-oral-haute-biodisponibilite',
    relevantModules: ['core'],
    triggeredByRules: ['IRON_DEFICIENCY_CHECK'],
  },

  // --- Dispositifs (DAI / CRT) ---
  {
    id: 'q_devices_ef_reassessment',
    interlocutor: 'cardiologist',
    topicFr: 'Dispositifs implantables (DAI / CRT)',
    questionFr:
      'Quand ma FEVG sera-t-elle réévaluée après optimisation de mes médicaments (à 3 mois ou plus tard) ?',
    whyItMattersFr:
      "L'indication de DAI repose sur une FEVG ≤ 35 % après au moins 3 mois de traitement optimal et au moins 40 jours après un infarctus (ESC 2026), mais le registre HF-OPT montre que la FEVG peut continuer à s'améliorer jusqu'à 6 mois.",
    sources: ['ESC 2026', 'HF-OPT (2024)'],
    articleSlug: 'dispositifs-cardiaques-dai-crt',
    relevantModules: ['core', 'device'],
    triggeredByRules: ['ICD_REASSESSMENT_3M'],
  },
  {
    id: 'q_devices_qrs_crt',
    interlocutor: 'cardiologist',
    topicFr: 'Dispositifs implantables (DAI / CRT)',
    questionFr:
      "Mon QRS est-il élargi sur l'ECG ou ai-je un bloc de branche gauche (BBG) ? Une resynchronisation cardiaque (CRT) me concerne-t-elle ?",
    whyItMattersFr:
      "Un bloc de branche gauche avec un QRS élargi (≥ 150 ms) et une FEVG ≤ 35 % est une indication reconnue de resynchronisation cardiaque (CRT), qui aide à soulager les symptômes et à protéger le cœur.",
    sources: ['Recommandations ESC 2026 (insuffisance cardiaque)'],
    articleSlug: 'dispositifs-cardiaques-dai-crt',
    relevantModules: ['core', 'device'],
    triggeredByRules: ['CRT_QRS_DISCUSSION'],
  },
  {
    id: 'q_devices_icd_discussion',
    interlocutor: 'cardiologist',
    topicFr: 'Dispositifs implantables (DAI / CRT)',
    questionFr:
      "Si un DAI est proposé : quel est mon risque estimé avec et sans DAI sous médicaments modernes, quels sont les inconvénients, et comment gérerait-on la fonction de choc en fin de vie ?",
    whyItMattersFr:
      "La FEVG seule prédit imparfaitement le risque individuel de mort subite (PROFID), et le guide patient ESC demande un accompagnement partagé sur l'objectif, les risques et la désactivation ultérieure.",
    sources: ['PROFID (2024)', 'Guide patient ESC 2026'],
    articleSlug: 'dispositifs-cardiaques-dai-crt',
    relevantModules: ['core', 'device'],
    triggeredByRules: ['ICD_REASSESSMENT_3M'],
  },
  {
    id: 'q_devices_sicd_vs_tvicd',
    interlocutor: 'cardiologist',
    topicFr: 'Dispositifs implantables (DAI / CRT)',
    questionFr:
      'Si un DAI est retenu, un DAI sous-cutané (S-DAI) ou transveineux est-il préférable pour moi ? Risque-je de nécessiter une stimulation ou une CRT plus tard ?',
    whyItMattersFr:
      "Dans PRAETORIAN, les deux types étaient globalement comparables ; le S-DAI entraîne moins de complications de sonde, mais ne permet ni stimulation antibradycardique ni CRT.",
    sources: ['PRAETORIAN (2020, 2022)'],
    articleSlug: 'dispositifs-cardiaques-dai-crt',
    relevantModules: ['device'],
    triggeredByRules: ['ICD_REASSESSMENT_3M', 'CRT_QRS_DISCUSSION'],
  },
  {
    id: 'q_devices_profid_ehra',
    interlocutor: 'cardiologist',
    topicFr: 'Dispositifs implantables (DAI / CRT)',
    questionFr:
      "L'essai PROFID-EHRA en cours change-t-il votre regard sur le bénéfice attendu d'un DAI dans mon cas ?",
    whyItMattersFr:
      "PROFID-EHRA réévalue l'utilité du DAI en plus des traitements modernes après infarctus ; ses résultats ne sont pas attendus avant fin 2027.",
    sources: ['Protocole PROFID-EHRA (2026)'],
    articleSlug: 'dispositifs-cardiaques-dai-crt',
    relevantModules: ['device'],
  },
  {
    id: 'q_devices_driving_rules',
    interlocutor: 'cardiologist',
    topicFr: 'Conduite automobile',
    questionFr:
      "Quels sont les délais d'interdiction de conduite en France après l'implantation d'un DAI ou après un choc, et dois-je consulter un médecin agréé ?",
    whyItMattersFr:
      "En France, l'arrêté du 28 mars 2022 fixe les délais d'incompatibilité temporaire et l'évaluation auprès d'un médecin agréé (distinct du médecin traitant).",
    sources: ['Arrêté du 28 mars 2022', 'Margulescu (2019)'],
    articleSlug: 'regles-conduite-automobile',
    relevantModules: ['core', 'device'],
    triggeredByRules: ['FR_DRIVING_ICD_OR_NYHA'],
  },

  // --- Traitements additionnels, LifeVest et télésurveillance ---
  {
    id: 'q_addon_ivabradine_digoxin_vericiguat',
    interlocutor: 'cardiologist',
    topicFr: 'Traitements additionnels',
    questionFr:
      "Une fois mes quatre piliers à leurs doses maximales tolérées, un traitement additionnel (ivabradine, digoxine/digitoxine ou vériciguat) s'applique-t-il à ma situation ?",
    whyItMattersFr:
      "Chaque option obéit à des critères précis : l'ivabradine nécessite un rythme sinusal et une fréquence de repos > 70 bpm (≥ 75 bpm dans l'AMM UE) ; le vériciguat s'adresse aux aggravations récentes.",
    sources: ['ESC 2026', 'Rapport EMA Procoralan', 'RCP Verquvo'],
    articleSlug: 'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    relevantModules: ['core'],
    triggeredByRules: ['HR_IVABRADINE_DISCUSSION'],
  },
  {
    id: 'q_addon_ivabradine_hr_threshold',
    interlocutor: 'cardiologist',
    topicFr: 'Traitements additionnels',
    questionFr:
      "Quelle est ma fréquence cardiaque de repos sous ma dose actuelle de bêtabloquant ? Si elle reste à 77 bpm ou plus en rythme sinusal, l'ivabradine (Procoralan) mérite-t-elle d'être envisagée, ou faut-il d'abord augmenter le bêtabloquant ?",
    whyItMattersFr:
      "Dans l'essai SHIFT, le bénéfice de l'ivabradine était concentré chez les patients ayant une fréquence cardiaque ≥ 77 bpm, et n'était pas statistiquement significatif chez ceux prenant déjà au moins la moitié de la dose cible de bêtabloquant.",
    sources: ['SHIFT (2010)', 'ESC 2026'],
    articleSlug: 'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    relevantModules: ['core'],
    triggeredByRules: ['HR_IVABRADINE_DISCUSSION'],
  },
  {
    id: 'q_addon_vericiguat_ntprobnp',
    interlocutor: 'cardiologist',
    topicFr: 'Traitements additionnels',
    questionFr:
      "Mon NT-proBNP est-il inférieur à 6 000 pg/mL, et le vériciguat (Verquvo) ne serait-il pertinent qu'après un épisode d'aggravation (son indication d'AMM) ?",
    whyItMattersFr:
      "L'analyse groupée de VICTORIA et VICTOR suggère un bénéfice modeste, surtout net pour un NT-proBNP jusqu'à 6 000 pg/mL ; l'essai VICTOR seul chez des patients ambulatoires stables était neutre.",
    sources: ['Analyse groupée VICTORIA + VICTOR (2025)', 'RCP Verquvo'],
    articleSlug: 'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    relevantModules: ['core'],
  },
  {
    id: 'q_addon_digoxin_monitoring',
    interlocutor: 'cardiologist',
    topicFr: 'Traitements additionnels',
    questionFr:
      'Si la digoxine était envisagée : ma digoxinémie et ma fonction rénale seraient-elles surveillées, quels signes de surdosage dois-je reconnaître, et la digitoxine (testée dans DIGIT-HF) est-elle disponible en France ?',
    whyItMattersFr:
      'Maintenir une digoxinémie basse (0,5–0,9 ng/mL) limite la toxicité (nausées, confusion, troubles visuels) ; la digitoxine étudiée dans DIGIT-HF pose la question de sa disponibilité pratique en France.',
    sources: ['Ahmed (2006)', 'DIGIT-HF (2025)', 'ESC 2026'],
    articleSlug: 'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    relevantModules: ['core', 'atrialFibrillation'],
  },
  {
    id: 'q_addon_finerenone_vs_steroidal_mra',
    interlocutor: 'cardiologist',
    topicFr: 'Traitements additionnels',
    questionFr:
      "La finérénone est-elle pertinente dans mon cas, ou la spironolactone / l'éplérénone restent-elles l'ARM adapté à ma FEVG ? Si ma FEVG remonte à ≥ 40 %, deviendrait-elle une option (en remplacement ou en ajout), et un diabète ou une maladie rénale changerait-il la discussion ?",
    whyItMattersFr:
      "La finérénone est démontrée à partir d'une FEVG ≥ 40 % (FINEARTS-HF, qui incluait des FEVG améliorées à ≥ 40 %) ou dans le diabète de type 2 avec maladie rénale chronique dans des essais ayant exclu l'ICFER symptomatique ; dans l'ICFER, seules des études courtes de phase 2 (ARTS-HF) sont disponibles.",
    sources: ['FINEARTS-HF (2024)', 'FINE-HEART (2024)', 'ARTS-HF (2016)', 'ESC 2026'],
    articleSlug: 'finerenone-et-nouveaux-arm',
    relevantModules: ['ckd', 'diabetes', 'hfImpEf'],
  },
  {
    id: 'q_addon_potassium_binder',
    interlocutor: 'cardiologist',
    topicFr: 'Traitements additionnels',
    questionFr:
      "Si mon potassium augmente sous spironolactone ou éplérénone, réduiriez-vous la dose d'ARM ou ajouteriez-vous un chélateur de potassium (patiromer ou cyclosilicate de zirconium sodique) pour maintenir la pleine dose ?",
    whyItMattersFr:
      "Dans DIAMOND (majoritairement des ICFER ischémiques), le patiromer a permis de maintenir plus de patients à pleine dose d'ARM, mais l'essai a déplacé son critère principal vers la kaliémie et n'a pas démontré de baisse de la mortalité.",
    sources: ['DIAMOND (2022)', 'ESC 2026'],
    articleSlug: 'finerenone-et-nouveaux-arm',
    relevantModules: ['core', 'ckd'],
    triggeredByRules: ['POTASSIUM_ALERT'],
  },
  {
    id: 'q_addon_lifevest_indication',
    interlocutor: 'cardiologist',
    topicFr: 'Gilet défibrillateur portable (LifeVest)',
    questionFr:
      'Pendant la titration des médicaments et avant la décision de DAI, un gilet défibrillateur portable (LifeVest) mérite-t-il d’être envisagé ? Quels marqueurs de risque s’appliquent à moi, suis-je dans la fenêtre précoce (40 jours post-infarctus / stent ou 90 jours post-pontage), combien de temps le porter et que faire en cas d’alarme ?',
    whyItMattersFr:
      "La DGK le classe dans les 40–90 premiers jours comme « plutôt non indiqué, à discuter au cas par cas », tandis qu'en France il est remboursé en cardiomyopathie ischémique avec FEVG ≤ 35 % ; il doit être porté plus de 20 h/jour et les preuves restent nuancées (VEST, HF-OPT, avis HAS).",
    sources: ['VEST (2018)', 'HF-OPT (2024)', 'Avis HAS CNEDiMTS (2024)', 'Position DGK (2019)', 'Revue Goetz (2023)'],
    articleSlug: 'gilet-defibrillateur-portable',
    relevantModules: ['lifeVest'],
    triggeredByRules: ['ICD_REASSESSMENT_3M'],
  },
  {
    id: 'q_addon_lifevest_driving',
    interlocutor: 'cardiologist',
    topicFr: 'Gilet défibrillateur portable (LifeVest)',
    questionFr:
      "Puis-je conduire pendant que le gilet défibrillateur (LifeVest) est indiqué, et quelles sont les règles après un choc ?",
    whyItMattersFr:
      "En France, l'arrêté du 28 mars 2022 interdit la conduite automobile tant que le gilet défibrillateur est indiqué.",
    sources: ['Arrêté du 28 mars 2022', 'FAQ patient LifeVest'],
    articleSlug: 'regles-conduite-automobile',
    relevantModules: ['lifeVest'],
    triggeredByRules: ['FR_DRIVING_LIFEVEST'],
  },
  {
    id: 'q_addon_telemonitoring_france',
    interlocutor: 'cardiologist',
    topicFr: 'Télésurveillance',
    questionFr:
      "Serais-je éligible à la télésurveillance de l'insuffisance cardiaque à domicile sans hospitalisation récente (sur NYHA et NT-proBNP) ? Qui examine les alertes, peut-il adapter mes traitements, et qu'apporterait-elle en plus de ma pesée quotidienne ?",
    whyItMattersFr:
      "En France, elle est remboursée après hospitalisation récente pour IC ou en NYHA ≥ II avec NT-proBNP élevé (référentiel HAS). L'essai positif TIM-HF2 utilisait un centre médicalisé 24 h/24 et n'incluait que des patients hospitalisés dans l'année.",
    sources: ['Référentiel HAS télésurveillance IC', 'TIM-HF2 (2018)', 'ESC 2026'],
    articleSlug: 'telesurveillance-insuffisance-cardiaque',
    relevantModules: ['core'],
    triggeredByRules: ['FR_TELESURVEILLANCE'],
  },
  {
    id: 'q_addon_device_remote_monitoring',
    interlocutor: 'cardiologist',
    topicFr: 'Télésurveillance des prothèses',
    questionFr:
      "Si je reçois un DAI ou une CRT, le télésuivi de la prothèse sera-t-il activé ? Qui lit les alertes et dans quel délai ? La marque compte-t-elle (par exemple l'alerte HeartLogic propre à Boston Scientific), et le télésuivi peut-il remplacer certaines visites ?",
    whyItMattersFr:
      "Dans MORE-CARE, le télésuivi des prothèses a surtout réduit les visites en présentiel sans améliorer la survie ; connaître le circuit des alertes clarifie quand appeler le 15.",
    sources: ['Consensus HRS 2023', 'MORE-CARE', 'MANAGE-HF phase 1 (2022)'],
    articleSlug: 'telesurveillance-insuffisance-cardiaque',
    relevantModules: ['device'],
  },
  {
    id: 'q_addon_pa_pressure_sensor',
    interlocutor: 'cardiologist',
    topicFr: 'Télésurveillance',
    questionFr:
      "Un capteur implanté de pression de l'artère pulmonaire (CardioMEMS) pourrait-il être pertinent pour moi à un stade donné, sachant qu'il n'est pas remboursé en France et que les indications les plus fortes concernent l'après-hospitalisation pour IC ?",
    whyItMattersFr:
      "Le consensus HFA 2025 réserve les recommandations les plus fermes aux patients symptomatiques ayant été hospitalisés pour IC, et la CNEDiMTS de la HAS (2021) a estimé le service attendu insuffisant pour le remboursement en France.",
    sources: ['Consensus HFA pression artérielle pulmonaire (2025)', 'Avis HAS CardioMEMS (2021)'],
    articleSlug: 'telesurveillance-insuffisance-cardiaque',
    relevantModules: ['core'],
  },

  // --- Artères coronaires et CTO ---
  {
    id: 'q_coronary_heart_team',
    interlocutor: 'cardiologist',
    topicFr: 'Artères coronaires (pontage / stents)',
    questionFr:
      "Une Heart Team incluant un spécialiste de l'insuffisance cardiaque a-t-elle examiné mon anatomie coronaire ? L'objectif d'une intervention serait-il de soulager un angor ou d'améliorer la survie ?",
    whyItMattersFr:
      "Les recommandations ESC 2026 demandent une évaluation en Heart Team ; le niveau de preuve diffère selon que l'objectif est symptomatique ou pronostique.",
    sources: ['Recommandations ESC 2026 (insuffisance cardiaque)'],
    articleSlug: 'revascularisation-pontage-stents',
    relevantModules: ['core'],
  },
  {
    id: 'q_coronary_cabg_vs_pci',
    interlocutor: 'cardiologist',
    topicFr: 'Artères coronaires (pontage / stents)',
    questionFr:
      "Si un pontage est évoqué, quel est mon risque opératoire et comment STICH s'applique-t-il aujourd'hui ? Si des stents sont proposés, qu'en attend-on au vu de REVIVED-BCIS2 ?",
    whyItMattersFr:
      "STICHES a montré un bénéfice de survie du pontage à 10 ans dans une ère plus ancienne, tandis que REVIVED-BCIS2 n'a pas montré de réduction des décès ni des hospitalisations avec les stents.",
    sources: ['STICHES (2016)', 'REVIVED-BCIS2 (2022)'],
    articleSlug: 'revascularisation-pontage-stents',
    relevantModules: ['core'],
  },
  {
    id: 'q_cto_viability_ischaemia',
    interlocutor: 'cardiologist',
    topicFr: 'Occlusion coronaire chronique (CTO)',
    questionFr:
      "Le muscle cardiaque en aval de mon artère bouchée (CTO) est-il viable et ischémique à l'effort ? En l'absence d'angor, qu'attendrait-on de sa réouverture ?",
    whyItMattersFr:
      "Le consensus EAPCI/EACVI 2024 recommande d'évaluer viabilité et ischémie lorsque la FEVG est basse (la contractilité s'améliorait surtout dans les segments viables, Leite 2026) ; le bénéfice prouvé de l'angioplastie de CTO concerne le soulagement de l'angor (van Veelen 2021 ; ORBITA-CTO).",
    sources: ['Consensus EAPCI/EACVI (2024)', 'Leite (2026)', 'van Veelen (2021)', 'ORBITA-CTO (2026)'],
    articleSlug: 'occlusion-coronaire-chronique-cto',
    relevantModules: ['cto'],
  },
  {
    id: 'q_cto_breathlessness_vs_angina',
    interlocutor: 'cardiologist',
    topicFr: 'Occlusion coronaire chronique (CTO)',
    questionFr:
      "Si mon symptôme principal est l'essoufflement plutôt qu'une douleur thoracique (angor), l'ouverture de l'artère occluse (CTO) est-elle susceptible de le soulager ?",
    whyItMattersFr:
      "Dans l'essai ORBITA-CTO contrôlé contre procédure factice (sham), l'angor s'est amélioré mais l'essoufflement et l'état de santé général ne se sont pas clairement améliorés, et la quasi-totalité des participants avaient une FEVG normale.",
    sources: ['ORBITA-CTO (2026)'],
    articleSlug: 'occlusion-coronaire-chronique-cto',
    relevantModules: ['cto'],
  },
  {
    id: 'q_cto_centre_risk_and_midcab',
    interlocutor: 'cardiologist',
    topicFr: 'Occlusion coronaire chronique (CTO)',
    questionFr:
      'Quels sont les taux de succès et de complications de ce centre pour une angioplastie de CTO à FEVG basse, et un pontage ciblé (y compris mini-invasif MIDCAB) serait-il une option ?',
    whyItMattersFr:
      "Dans le registre PROGRESS-CTO, la mortalité hospitalière atteignait 1,1 % pour une FEVG ≤ 35 % contre 0,3 % pour une FEVG ≥ 50 %, et environ 1 patient sur 6 à FEVG basse a nécessité une pompe d'assistance cardiaque temporaire.",
    sources: ['PROGRESS-CTO (2022)', 'Gallingani (2025)', 'ESC 2024 SCC'],
    articleSlug: 'occlusion-coronaire-chronique-cto',
    relevantModules: ['cto'],
  },

  // --- Cholestérol et prévention secondaire ---
  {
    id: 'q_lipid_ldl_target',
    interlocutor: 'cardiologist',
    topicFr: 'Cholestérol et prévention secondaire',
    questionFr:
      "Quel est mon objectif de cholestérol LDL, ai-je atteint les deux critères (< 0,55 g/L et baisse ≥ 50 %), et quelle serait l'étape suivante si besoin (dose, ézétimibe, anti-PCSK9) ?",
    whyItMattersFr:
      "Après une atteinte coronaire, les recommandations européennes visent un cholestérol LDL inférieur à 0,55 g/L (1,4 mmol/L) et abaissé d'au moins 50 % par rapport au taux initial, avec une adaptation par étapes.",
    sources: ['ESC/EAS 2019', 'ESC 2024 SCC', 'Mise à jour ESC/EAS 2025'],
    articleSlug: 'cholesterol-et-prevention-secondaire',
    relevantModules: ['core'],
    triggeredByRules: ['LDL_TARGET_GAP'],
  },
  {
    id: 'q_lipid_lpa_once',
    interlocutor: 'cardiologist',
    topicFr: 'Cholestérol et prévention secondaire',
    questionFr: 'Ma lipoprotéine(a) — Lp(a) — doit-elle être dosée une fois dans ma vie ?',
    whyItMattersFr:
      "L'ESC suggère un dosage unique pour affiner le risque cardiovasculaire global, même si aucun médicament abaissant la Lp(a) n'a encore prouvé de réduction d'événements cliniques (Lp(a)HORIZON).",
    sources: ['ESC/EAS 2019 & 2025', 'Lp(a)HORIZON (2026)'],
    articleSlug: 'cholesterol-et-prevention-secondaire',
    relevantModules: ['core'],
    triggeredByRules: ['LPA_ONE_OFF'],
  },
  {
    id: 'q_lipid_statin_aspirin_colchicine',
    interlocutor: 'cardiologist',
    topicFr: 'Cholestérol et prévention secondaire',
    questionFr:
      "Dois-je poursuivre ma statine et mon antiagrégant (aspirine ou clopidogrel) au long cours pour mes coronaires, et la colchicine à faible dose (0,5 mg/j) est-elle adaptée compte tenu de mes reins ?",
    whyItMattersFr:
      "Les essais négatifs de statines dans l'IC ne remettent pas en cause une statine indiquée pour une coronaropathie : CORONA n'a inclus que des patients jugés ne pas en avoir besoin, et GISSI-HF a exclu ceux déjà sous statine ; la colchicine (Classe IIa ESC 2024) comporte des limites rénales et d'interactions.",
    sources: ['ESC 2024 SCC', 'CORONA (2007)', 'GISSI-HF (2008)', 'Méta-analyse colchicine (2025)'],
    articleSlug: 'cholesterol-et-prevention-secondaire',
    relevantModules: ['core'],
  },
  {
    id: 'q_lipid_statin_intensity',
    interlocutor: 'cardiologist',
    topicFr: 'Cholestérol et prévention secondaire',
    questionFr:
      "Quelle intensité de statine est adaptée à mon cas : la dose de haute intensité recommandée pour la maladie coronaire, ou la dose d'intensité modérée admise par les recommandations américaines dans l'ICFER ischémique ?",
    whyItMattersFr:
      "Les recommandations américaines ACC/AHA 2026 recommandent une statine de haute intensité dans la maladie artérielle (COR 1) tout en indiquant séparément qu'une intensité modérée « peut être raisonnable » dans l'ICFER d'origine coronaire (COR 2b), sans expliquer comment concilier les deux.",
    sources: ['Recommandations ACC/AHA dyslipidémies (2026)', 'ESC/EAS 2019 & 2025'],
    articleSlug: 'cholesterol-et-prevention-secondaire',
    relevantModules: ['core'],
    triggeredByRules: ['LDL_TARGET_GAP'],
  },
  {
    id: 'q_lipid_statin_interactions',
    interlocutor: 'pharmacist',
    topicFr: 'Cholestérol et prévention secondaire',
    questionFr:
      'Certains de mes médicaments cardiaques limitent-ils la dose maximale de ma statine ou imposent-ils une surveillance musculaire particulière ?',
    whyItMattersFr:
      "L'amiodarone, le diltiazem, le vérapamil, la dronédarone, la ranolazine et le ticagrélor plafonnent la dose de simvastatine (et de lovastatine) ; la colchicine appelle une surveillance musculaire plus attentive avec toute statine.",
    sources: ['Recommandations ACC/AHA dyslipidémies (2026)'],
    articleSlug: 'cholesterol-et-prevention-secondaire',
    relevantModules: ['core'],
  },

  // --- Valve aortique ---
  {
    id: 'q_as_grading_low_flow',
    interlocutor: 'cardiologist',
    topicFr: 'Rétrécissement aortique',
    questionFr:
      "Quel est le degré de rétrécissement de ma valve aortique (surface, indice de perméabilité, gradient moyen), mon débit est-il bas (SVi), et une variation de surface entre deux ETT est-elle significative ?",
    whyItMattersFr:
      "Avec un ventricule affaibli, le gradient peut sous-estimer la sévérité (sténose bas débit, bas gradient) et le calcul de surface varie de 5 à 8 % entre deux mesures.",
    sources: ['EACVI/ASE 2017', 'ACC/AHA 2020', 'ESC/EACTS 2025'],
    articleSlug: 'stenose-aortique-fevg-reduite',
    relevantModules: ['aorticStenosis'],
    triggeredByRules: ['AS_LOW_FLOW_CAVEAT'],
  },
  {
    id: 'q_as_rescan_and_surgery',
    interlocutor: 'cardiologist',
    topicFr: 'Rétrécissement aortique',
    questionFr:
      "À quelle fréquence la valve aortique doit-elle être contrôlée compte tenu de ma FEVG, et serait-elle traitée dans le même temps en cas d'autre chirurgie cardiaque ?",
    whyItMattersFr:
      "L'ESC/EACTS 2025 suggère un contrôle au moins annuel pour une sténose modérée, et une intervention associée est discutée surtout si une autre chirurgie cardiaque est prévue.",
    sources: ['ESC/EACTS 2025', 'ACC/AHA 2020'],
    articleSlug: 'stenose-aortique-fevg-reduite',
    relevantModules: ['aorticStenosis'],
    triggeredByRules: ['AS_LOW_FLOW_CAVEAT'],
  },

  // --- Thrombus VG et anticoagulants ---
  {
    id: 'q_thrombus_imaging_and_aneurysm',
    interlocutor: 'cardiologist',
    topicFr: 'Risque de caillot (thrombus VG)',
    questionFr:
      "L'apex et la paroi antérieure ont-ils été vérifiés à la recherche d'un thrombus VG (ETT simple, ETT de contraste ou IRM), et existe-t-il un anévrisme VG ?",
    whyItMattersFr:
      "Une ETT sans contraste manque de nombreux caillots détectés par l'IRM cardiaque ; en rythme sinusal, un thrombus ou un anévrisme change la discussion sur les anticoagulants.",
    sources: ['Bulluck (2018)', 'Sacoransky (2024)', 'NICE NG106'],
    articleSlug: 'thrombus-vg-et-anticoagulants',
    relevantModules: ['lvThrombusOrAneurysm'],
  },
  {
    id: 'q_thrombus_anticoag_and_af',
    interlocutor: 'cardiologist',
    topicFr: 'Risque de caillot (thrombus VG)',
    questionFr:
      "En cas de thrombus VG (ou si une fibrillation atriale apparaissait), comment l'anticoagulant s'articulerait-il avec l'aspirine et quand recontrôler par imagerie ?",
    whyItMattersFr:
      "L'ESC 2023 suggère 3 à 6 mois d'anticoagulation guidée par l'imagerie en cas de thrombus, et l'association avec un antiagrégant augmente le risque hémorragique.",
    sources: ['ESC 2023 SCA', 'ESC 2026 IC'],
    articleSlug: 'thrombus-vg-et-anticoagulants',
    relevantModules: ['lvThrombusOrAneurysm', 'atrialFibrillation'],
  },

  // --- Récupération et objectifs ---
  {
    id: 'q_recovery_continue_meds',
    interlocutor: 'cardiologist',
    topicFr: 'Récupération (HFimpEF)',
    questionFr:
      "Quelle amélioration de ma FEVG est réaliste, dans quel délai, parleriez-vous d'amélioration, de rémission ou de récupération, et quels traitements et examens de suivi doivent être poursuivis même si la FEVG remonte ?",
    whyItMattersFr:
      "Les recommandations européennes conseillent fortement de poursuivre le traitement de fond même après amélioration de la FEVG, car l'arrêt expose à un risque élevé de rechute.",
    sources: ['ESC 2026', 'Définition universelle de l’IC (2026)', 'TRED-HF (2019)'],
    articleSlug: 'insuffisance-cardiaque-fevg-amelioree',
    relevantModules: ['core', 'hfImpEf'],
    triggeredByRules: ['HFIMPEF_CONTINUE'],
  },
  {
    id: 'q_recovery_care_goals',
    interlocutor: 'cardiologist',
    topicFr: 'Objectifs de soins',
    questionFr:
      'Comment équilibrer mes priorités personnelles entre espérance de vie, prévention des hospitalisations et qualité de vie au quotidien ?',
    whyItMattersFr:
      'Le guide patient ESC encourage à exprimer explicitement vos objectifs personnels pour guider les choix thérapeutiques.',
    sources: ['Guide patient ESC 2026'],
    articleSlug: 'soins-de-support-et-anticipation',
    relevantModules: ['core'],
  },

  // --- Vie quotidienne ---
  {
    id: 'q_daily_weight_alert',
    interlocutor: 'gp',
    topicFr: 'Surveillance quotidienne (EPOF)',
    questionFr:
      "Quelle prise de poids rapide ou aggravation des signes EPOF doit m'amener à appeler, et quel numéro contacter (y compris le week-end) ?",
    whyItMattersFr:
      'Repérer tôt une rétention hydrosodée (prise de poids ≥ 2 kg en 2 à 3 jours, essoufflement, œdèmes, fatigue) permet souvent un ajustement rapide sans hospitalisation.',
    sources: ['Guide patient ESC 2026', 'ESC 2026'],
    articleSlug: 'vivre-avec-insuffisance-cardiaque',
    relevantModules: ['core'],
    triggeredByRules: ['WEIGHT_GAIN_3D', 'EPOF_RED_FLAG', 'EPOF_WORSENING'],
  },
  {
    id: 'q_daily_followup',
    interlocutor: 'gp',
    topicFr: 'Suivi médical',
    questionFr:
      'À quelle fréquence dois-je être suivi(e) en alternance entre mon médecin traitant et mon cardiologue, et avec quels examens ?',
    whyItMattersFr:
      'En phase stable, un suivi tous les 6 à 12 mois (au moins tous les 6 mois selon le guide patient ESC) est préconisé, ou plus rapproché après un changement de dose ou une poussée.',
    sources: ['ESC 2026 (Figure 22)', 'Guide patient ESC 2026'],
    articleSlug: 'vivre-avec-insuffisance-cardiaque',
    relevantModules: ['core'],
    triggeredByRules: ['EPOF_WORSENING'],
  },
  {
    id: 'q_daily_vaccinations',
    interlocutor: 'gp',
    topicFr: 'Prévention et vaccinations',
    questionFr:
      'Mes vaccinations recommandées dans l’insuffisance cardiaque (grippe annuelle, pneumocoque, COVID-19, VRS selon l’âge) sont-elles à jour ?',
    whyItMattersFr:
      "Les infections respiratoires sont une cause fréquente de décompensation cardiaque ; la prévention vaccinale protège contre les hospitalisations.",
    sources: ['ESC 2026', 'HAS / Calendrier vaccinal'],
    articleSlug: 'vivre-avec-insuffisance-cardiaque',
    relevantModules: ['core'],
    triggeredByRules: ['VACCINES_ANNUAL'],
  },

  // --- Alimentation, poids, vitamine D, compléments et pharmacien ---
  {
    id: 'q_diet_salt_and_fluid',
    interlocutor: 'cardiologist',
    topicFr: 'Sel et apports hydriques',
    questionFr:
      'Quel apport en sel dois-je viser, et ai-je réellement besoin d’une restriction hydrique stricte tant que je suis stable ?',
    whyItMattersFr:
      "Les essais récents (SODIUM-HF et FRESH-UP) n'ont pas démontré de bénéfice pronostique d'une restriction sodée extrême ni d'une restriction hydrique systématique chez les patients stables.",
    sources: ['SODIUM-HF (2022)', 'FRESH-UP (2025)'],
    articleSlug: 'sel-et-liquides-insuffisance-cardiaque',
    relevantModules: ['core'],
  },
  {
    id: 'q_diet_salt_substitute',
    interlocutor: 'pharmacist',
    topicFr: 'Sécurité des médicaments et alimentation',
    questionFr:
      'Puis-je utiliser un sel de régime « pauvre en sodium », ou contient-il du potassium risquant de faire monter ma kaliémie avec mes traitements ?',
    whyItMattersFr:
      "Les sels de substitution au chlorure de potassium peuvent provoquer une hyperkaliémie dangereuse en association avec les IEC, ARA2, ARNI (Entresto) et ARM.",
    sources: ['RCP Entresto', 'ESC 2026'],
    articleSlug: 'interactions-complements-aliments-medicaments',
    relevantModules: ['core', 'ckd'],
    triggeredByRules: ['POTASSIUM_ALERT'],
  },
  {
    id: 'q_diet_supplements_check',
    interlocutor: 'pharmacist',
    topicFr: 'Compléments alimentaires et plantes',
    questionFr:
      "Je prends (ou j'envisage de prendre) des compléments (oméga-3, coenzyme Q10, vitamines, plantes). Sont-ils sans interaction avec mon ordonnance complète ?",
    whyItMattersFr:
      "L'AHA recommande de déclarer chaque complément ou produit de phytothérapie au cardiologue, au médecin traitant et au pharmacien afin d'éviter les interactions médicamenteuses.",
    sources: ['Déclaration scientifique AHA (2022)'],
    articleSlug: 'interactions-complements-aliments-medicaments',
    relevantModules: ['core'],
  },
  {
    id: 'q_diet_safe_painkillers',
    interlocutor: 'pharmacist',
    topicFr: 'Automédication et antalgiques',
    questionFr:
      'Quels médicaments contre la douleur ou le rhume puis-je prendre sans danger avec mes traitements cardiaques ?',
    whyItMattersFr:
      "Les anti-inflammatoires non stéroïdiens (AINS comme l'ibuprofène ou le kétoprofène) et certains décongestionnants peuvent nuire aux reins et déclencher une décompensation cardiaque.",
    sources: ['RCP Entresto', 'ESC 2026'],
    articleSlug: 'interactions-complements-aliments-medicaments',
    relevantModules: ['core', 'ckd'],
    triggeredByRules: ['CONTRAINDICATED_DRUG'],
  },
  {
    id: 'q_pharma_arni_washout',
    interlocutor: 'pharmacist',
    topicFr: 'Sécurité des médicaments',
    questionFr:
      "En cas de passage d'un IEC au sacubitril/valsartan (Entresto), quel délai exact de 36 heures dois-je respecter entre la dernière prise d'IEC et la première prise d'Entresto ?",
    whyItMattersFr:
      "L'association simultanée ou trop rapprochée (< 36 h) d'un IEC et du sacubitril/valsartan expose à un risque grave d'angio-œdème.",
    sources: ['ESC 2026', 'AHA/ACC/HFSA 2022', 'RCP Entresto'],
    articleSlug: 'medicaments-effets-secondaires-suivi',
    relevantModules: ['core'],
    triggeredByRules: ['ARNI_WASHOUT_INFO'],
  },
  {
    id: 'q_diet_weight_loss',
    interlocutor: 'gp',
    topicFr: 'Poids et régimes',
    questionFr:
      'Est-il sûr pour moi de perdre du poids (ou dois-je surveiller une perte de poids involontaire), comment préserver ma masse musculaire, et quels régimes dois-je éviter avec mes médicaments ?',
    whyItMattersFr:
      "Les régimes cétogènes ou très hypocaloriques sont des facteurs d'acidocétose sous iSGLT2 (dans Moseley 2025, seuls 2 patients sur 125 prenaient un iSGLT2 sans mesure des cétones, ne prouvant aucune sécurité). La HFA 2025 conseille de perdre du poids en préservant le muscle (protéines suffisantes et exercice), et une perte involontaire doit faire rechercher une dénutrition.",
    sources: ['RCP dapagliflozine', 'Moseley (2025)', 'Déclaration HFA obésité (2025)'],
    articleSlug: 'poids-obesite-et-denutrition',
    relevantModules: ['core', 'diabetes'],
    triggeredByRules: ['UNPLANNED_WEIGHT_LOSS', 'SGLT2_KETO_REMINDER'],
  },
  {
    id: 'q_diet_bmi_waist_glp1',
    interlocutor: 'cardiologist',
    topicFr: 'Poids, obésité et traitements (GLP-1 / incrétines)',
    questionFr:
      "Mon poids doit-il être jugé sur l'IMC seul ou aussi sur le tour de taille ? En cas d'obésité, un traitement comme le sémaglutide (Wegovy, Ozempic, Rybelsus) ou le tirzépatide (Mounjaro) aiderait-il ou nuirait-il à mon cœur ?",
    whyItMattersFr:
      "Le rapport tour de taille / taille complète utilement l'IMC. Le bénéfice cardiaque des traitements GLP-1 est surtout démontré dans l'insuffisance cardiaque à FEVG préservée ; lorsque la FEVG est réduite, les données restent limitées et leur balance bénéfice/risque se discute au cas par cas.",
    sources: ['Déclaration HFA obésité (2025)', 'SOUL (JAMA Intern Med 2026)'],
    articleSlug: 'medicaments-glp1-et-incretines',
    relevantModules: ['core', 'diabetes'],
  },
  {
    id: 'q_glp1_hr_rhythm_device',
    interlocutor: 'cardiologist',
    topicFr: 'Incrétines (GLP-1) et rythme cardiaque',
    questionFr:
      "Si un médicament de type GLP-1 ou incrétine était instauré, comment ma fréquence cardiaque et mon rythme seraient-ils surveillés, et les données de mon dispositif implanté seraient-elles contrôlées ?",
    whyItMattersFr:
      "Le RCP de Wegovy (sémaglutide) rapporte une hausse moyenne de 3 bpm (et ≥ 10 bpm à un moment donné chez deux tiers des patients), et une petite étude observationnelle chez des patients avec ICFER porteurs de prothèse implantée (Marques 2025) a relevé +7 bpm et davantage d'événements ventriculaires non soutenus et de thérapies cumulés (33 contre 3 ; applicabilité partielle).",
    sources: ['RCP européen Wegovy (2026)', 'Marques (2025)'],
    articleSlug: 'medicaments-glp1-et-incretines',
    relevantModules: ['core', 'diabetes', 'device'],
  },
  {
    id: 'q_glp1_gi_sick_days',
    interlocutor: 'gp',
    topicFr: 'Incrétines (GLP-1) et déshydratation',
    questionFr:
      'Que dois-je faire de mon diurétique et de mes autres médicaments cardiaques les jours de vomissements ou de diarrhée (notamment sous traitement par GLP-1) ?',
    whyItMattersFr:
      "Le RCP de Wegovy avertit que les effets digestifs peuvent entraîner une déshydratation et, plus rarement, une altération de la fonction rénale ; les diurétiques et les iSGLT2 augmentent également les pertes hydriques.",
    sources: ['RCP européen Wegovy (2026)'],
    articleSlug: 'medicaments-glp1-et-incretines',
    relevantModules: ['core', 'diabetes', 'ckd'],
    triggeredByRules: ['SGLT2_KETO_REMINDER'],
  },
  {
    id: 'q_glp1_retatrutide_trials',
    interlocutor: 'cardiologist',
    topicFr: 'Nouvelles incrétines (rétatrutide) et essais',
    questionFr:
      "Y a-t-il lieu d'attendre des données dans l'insuffisance cardiaque avant d'envisager des molécules plus récentes comme le rétatrutide (retatrutide), et serais-je éligible à un essai clinique ?",
    whyItMattersFr:
      "Le rétatrutide a entraîné environ 25 % de perte de poids dans TRIUMPH-1, mais aucun résultat n'est disponible dans l'ICFER, les événements cardiaques de TRIUMPH-3 étaient non concluants, et aucun essai d'événements cliniques dédié à l'ICFER n'a été recensé sur ClinicalTrials.gov.",
    sources: ['Programme TRIUMPH (2026)', 'Registre ClinicalTrials.gov (novembre 2026)'],
    articleSlug: 'medicaments-glp1-et-incretines',
    relevantModules: ['core', 'diabetes'],
  },
  {
    id: 'q_diet_malnutrition_screening',
    interlocutor: 'gp',
    topicFr: 'Dénutrition et perte musculaire',
    questionFr:
      'Ai-je été dépisté(e) pour une dénutrition ou une perte musculaire ? Si un score a été calculé, tenait-il compte de mon taux de cholestérol ?',
    whyItMattersFr:
      "Le score CONUT attribue des points à un cholestérol bas : une statine peut ainsi classer à tort une personne bien alimentée comme dénutrie, tout en manquant des patients mangeant moins. Le court questionnaire MNA-SF (appétit et évolution du poids) s'est révélé le plus performant dans l'étude Kinugasa (150 patients ambulatoires).",
    sources: ['Kinugasa (2022)'],
    articleSlug: 'poids-obesite-et-denutrition',
    relevantModules: ['core'],
    triggeredByRules: ['UNPLANNED_WEIGHT_LOSS'],
  },
  {
    id: 'q_diet_vitamin_d',
    interlocutor: 'gp',
    topicFr: 'Vitamine D et compléments',
    questionFr:
      'Mon taux de vitamine D doit-il être dosé avant toute supplémentation, plutôt que de prendre un complément « par précaution » ?',
    whyItMattersFr:
      "Une vitamine D basse est fréquente dans l'ICFER (56–83 %), mais la supplémentation systématique n'a pas réduit les hospitalisations ni les décès dans les essais (et une synthèse a relevé une distance de marche inférieure d'environ 39 m). Une revue de 2025 conseille de corriger uniquement une carence avérée.",
    sources: ['Kampka (2025)', 'Chua (2025)'],
    articleSlug: 'vitamine-d-insuffisance-cardiaque',
    relevantModules: ['core'],
  },
  {
    id: 'q_diet_b_vitamins_thiamine_b12',
    interlocutor: 'gp',
    topicFr: 'Vitamines B (thiamine B1, B12, B6/B9)',
    questionFr:
      "Je prends un diurétique de l'anse (furosémide / Lasilix ou bumétanide / Burinex) au long cours, et/ou de la metformine ou un IPP : faut-il doser ma thiamine (vitamine B1) ou ma vitamine B12, et mon complexe de vitamines B vaut-il la peine d'être poursuivi ?",
    whyItMattersFr:
      "Les diurétiques de l'anse peuvent appauvrir en thiamine (ESPEN 2022 autorise son dosage en cas de diurétique prolongé) et metformine/IPP exposent au déficit en B12 ; mais la thiamine en comprimés n'a pas amélioré la FEVG sur 7 essais (He 2024) et le trio acide folique + B12 + B6 n'a pas prévenu les événements cardiaques, avec un possible signal défavorable post-infarctus (Cochrane 2017 ; NORVIT).",
    sources: ['ESPEN (2022)', 'He (2024)', 'Cochrane (2017)', 'NORVIT (2006)'],
    articleSlug: 'vitamines-b-insuffisance-cardiaque',
    relevantModules: ['core', 'diabetes'],
  },
  {
    id: 'q_diet_magnesium_testing_safety',
    interlocutor: 'pharmacist',
    topicFr: 'Magnésium, reins et interactions',
    questionFr:
      "Avec mon diurétique ou mon IPP au long cours, mon taux de magnésium doit-il être dosé avant tout complément, et une forme précise (ou un produit magnésium + vitamine B6 comme Magné B6) est-elle sûre avec mes reins et mes médicaments ?",
    whyItMattersFr:
      "Aucun essai solide ne montre de bénéfice à prendre du magnésium en routine si votre taux sanguin est normal. Il peut s'accumuler en cas d'insuffisance rénale (< 30 mL/min), interagir avec certains médicaments (comme la rosuvastatine) et certaines formules avec vitamine B6 dépassent la limite européenne de 12 mg/j.",
    sources: ['GALACTIC-HF (2026)', 'Yin (2026)', 'EFSA / NIH ODS'],
    articleSlug: 'magnesium-insuffisance-cardiaque',
    relevantModules: ['core', 'ckd'],
    triggeredByRules: ['CREATININE_JUMP'],
  },
  {
    id: 'q_diet_herbs_taichi',
    interlocutor: 'pharmacist',
    topicFr: 'Plantes médicinales et Tai-Chi',
    questionFr:
      "On m'a proposé un produit à base de plantes médicinales ou du Tai-Chi : l'un ou l'autre est-il utile, et les plantes risquent-elles d'interagir avec mon ordonnance ?",
    whyItMattersFr:
      "Des études préliminaires suggèrent un intérêt du Tai-Chi sur la qualité de vie et le suivi, mais les produits à base de plantes comportent des risques d'interactions ou de toxicité cardiaque (ginseng ou danshen avec anticoagulants, aconit toxique pour le cœur, plantes riches en potassium).",
    sources: ['Revue parapluie Chua (2025)', 'Déclaration scientifique AHA (2022)'],
    articleSlug: 'interactions-complements-aliments-medicaments',
    relevantModules: ['core'],
  },
  {
    id: 'q_diet_dietitian',
    interlocutor: 'gp',
    topicFr: 'Nutrition',
    questionFr:
      'Serait-il utile de consulter un(e) diététicien(ne) pour adapter mon alimentation au quotidien ?',
    whyItMattersFr:
      "Un accompagnement diététique personnalisé aide à concilier modération en sel, équilibre méditerranéen et prévention de la dénutrition.",
    sources: ['Guide pratique nutrition IC', 'EFFORT HF (2021)'],
    articleSlug: 'nutrition-et-complements-insuffisance-cardiaque',
    relevantModules: ['core'],
    triggeredByRules: ['UNPLANNED_WEIGHT_LOSS'],
  },

  // --- Examens biologiques et imagerie ---
  {
    id: 'q_tests_ntprobnp_vs_bnp',
    interlocutor: 'cardiologist',
    topicFr: "Résultats d'examens",
    questionFr:
      'Quel est mon taux de NT-proBNP (ou de BNP), comment évolue-t-il, et lequel des deux mon laboratoire dose-t-il ?',
    whyItMattersFr:
      "Les deux marqueurs ont des seuils différents et le sacubitril/valsartan (Entresto) peut faire monter artificiellement le BNP alors qu'il n'interfère pas avec le NT-proBNP.",
    sources: ['Recommandations ESC 2026 (peptides natriurétiques)'],
    articleSlug: 'examens-et-chiffres',
    relevantModules: ['core'],
    triggeredByRules: ['BNP_ON_ARNI_CAVEAT'],
  },
  {
    id: 'q_tests_lv_volumes_indexed',
    interlocutor: 'cardiologist',
    topicFr: "Résultats d'examens",
    questionFr:
      'Quels sont mes volumes ventriculaires gauches indexés (VTDi, VTSi), et ont-ils été mesurés par ETT ou par IRM cardiaque ?',
    whyItMattersFr:
      "Les valeurs normales des volumes indexés diffèrent selon le sexe et entre l'ETT et l'IRM cardiaque.",
    sources: ['ASE/EACVI (2015)'],
    articleSlug: 'examens-et-chiffres',
    relevantModules: ['core'],
    triggeredByRules: ['ETT_VS_IRM_DISCORDANCE'],
  },

  // --- Bilans sanguins et plan jours de maladie ---
  {
    id: 'q_labs_kidney_potassium_schedule',
    interlocutor: 'gp',
    topicFr: 'Bilans sanguins et surveillance',
    questionFr:
      'Quand dois-je faire mes prochains bilans de créatinine (DFGe) et de potassium, et qui ajuste le traitement au vu des résultats ?',
    whyItMattersFr:
      "Une revue européenne suggère un bilan 1 à 2 semaines après chaque initiation ou augmentation de dose d'IEC/ARNI/ARM, puis environ tous les 4 mois en phase stable.",
    sources: ['Volterrani (2024)'],
    articleSlug: 'medicaments-effets-secondaires-suivi',
    relevantModules: ['core', 'ckd'],
    triggeredByRules: ['POST_TITRATION_LABS', 'POTASSIUM_ALERT'],
  },
  {
    id: 'q_labs_creatinine_rise',
    interlocutor: 'cardiologist',
    topicFr: 'Bilans sanguins et surveillance',
    questionFr:
      'Si ma créatinine augmente modérément après une hausse de dose, quelle variation est attendue et quel seuil conduirait à modifier le traitement ?',
    whyItMattersFr:
      "Une hausse initiale modérée et transitoire de la créatinine est fréquente et attendue sous IEC/ARNI/iSGLT2 ; elle ne justifie pas forcément l'arrêt d'un médicament protecteur.",
    sources: ['Clark (2019)', 'Beldhuis (2022)'],
    articleSlug: 'medicaments-effets-secondaires-suivi',
    relevantModules: ['core', 'ckd'],
    triggeredByRules: ['CREATININE_JUMP'],
  },
  {
    id: 'q_labs_sick_day_plan',
    interlocutor: 'gp',
    topicFr: 'Plan « jours de maladie »',
    questionFr:
      'Que dois-je faire exactement de mes médicaments (iSGLT2, diurétique, IEC/ARNI, ARM) en cas de vomissements, diarrhée importante ou fièvre élevée ?',
    whyItMattersFr:
      "Les règles génériques manquent de consensus ; un plan écrit personnalisé par votre médecin précise quand suspendre temporairement l'iSGLT2 ou le diurétique et quand recontrôler.",
    sources: ['Clark (2019)', 'Fiche patient GSTT'],
    articleSlug: 'medicaments-effets-secondaires-suivi',
    relevantModules: ['core', 'diabetes', 'ckd'],
    triggeredByRules: ['SGLT2_KETO_REMINDER'],
  },

  // --- Exercice, moral et anticipation ---
  {
    id: 'q_rehab_home_based',
    interlocutor: 'cardiologist',
    topicFr: 'Réadaptation cardiaque',
    questionFr:
      "Un programme de réadaptation cardiaque en hôpital de jour ou à domicile est-il envisageable si un centre est difficile d'accès ?",
    whyItMattersFr:
      'Les programmes encadrés à domicile et en centre obtiennent des résultats comparables sur les hospitalisations et la qualité de vie dans la revue Cochrane 2024.',
    sources: ['Revue Cochrane (2024)', 'ESC 2026'],
    articleSlug: 'readaptation-cardiaque-et-activite-physique',
    relevantModules: ['core'],
    triggeredByRules: ['FR_SMR_REHAB'],
  },
  {
    id: 'q_rehab_resistance_vs_aerobic',
    interlocutor: 'cardiologist',
    topicFr: 'Réadaptation : renforcement musculaire et endurance',
    questionFr:
      "En réadaptation cardiaque, quelle place accorder au renforcement musculaire (poids, élastiques, appareils) par rapport à l'endurance (marche, vélo), et quelles charges sont sûres pour mon cœur ?",
    whyItMattersFr:
      "Le renforcement musculaire est sûr dans l'IC stable et améliore force et VO2 pic (+2,6 mL/kg/min), mais ne remplace pas l'endurance, seule modalité ayant un effet constant sur la FEVG et un essai d'événements cliniques (HF-ACTION). Les recommandations (ESC 2026, GERS-P 2023, HAS 2022) associent endurance et renforcement ; faites préciser les charges autorisées par l'équipe de réadaptation.",
    sources: ['ESC 2026', 'GERS-P/SFC (2023)', 'HAS (2022)', 'HF-ACTION (2009)', 'Terada (2026)', 'SMARTEX-HF (2017)'],
    articleSlug: 'musculation-vs-endurance-readaptation-cardiaque',
    relevantModules: ['core'],
    triggeredByRules: ['FR_SMR_REHAB'],
  },
  {
    id: 'q_mood_screening',
    interlocutor: 'gp',
    topicFr: 'Santé émotionnelle',
    questionFr:
      'Mon moral ou mon anxiété peuvent-ils être évalués, et vers quel accompagnement (psychologue, TCC, activité physique adaptée) puis-je être orienté(e) ?',
    whyItMattersFr:
      "La dépression touche environ un quart des personnes vivant avec une insuffisance cardiaque ; la thérapie cognitivo-comportementale (TCC) et l'exercice ont les meilleures preuves d'efficacité.",
    sources: ['Basile (2023)', 'Freedland (2015)'],
    articleSlug: 'depression-et-sante-emotionnelle',
    relevantModules: ['core'],
  },
  {
    id: 'q_palliative_supportive_care',
    interlocutor: 'cardiologist',
    topicFr: 'Soins de support et anticipation',
    questionFr:
      "Des soins de support peuvent-ils m'aider dès maintenant en parallèle de mes traitements habituels, et comment aborder mes directives anticipées ou la désactivation future d'un DAI ?",
    whyItMattersFr:
      "La HFA (2020) recommande d'envisager les soins de support à tout stade de l'insuffisance cardiaque et d'évoquer la gestion du DAI dès avant l'implantation puis régulièrement.",
    sources: ['Position HFA (2020)', 'ESC 2026'],
    articleSlug: 'soins-de-support-et-anticipation',
    relevantModules: ['core', 'device'],
  },

  // --- Conduite groupe 2 ---
  {
    id: 'q_driving_group2_lvef',
    interlocutor: 'occupational_doctor',
    topicFr: 'Conduite professionnelle (groupe 2)',
    questionFr:
      'Je détiens un permis poids lourd ou transport en commun (groupe 2) : quelles sont les conséquences de ma FEVG ou de mon dispositif sur mon aptitude ?',
    whyItMattersFr:
      'La directive UE 2016/1106 et l’arrêté français du 28 mars 2022 exigent une FEVG ≥ 35 % en NYHA I–II pour le groupe 2, et un DAI contre-indique définitivement ce groupe.',
    sources: ['Directive UE 2016/1106', 'Arrêté du 28 mars 2022'],
    articleSlug: 'regles-conduite-automobile',
    relevantModules: ['core', 'device'],
    triggeredByRules: ['FR_DRIVING_ICD_OR_NYHA'],
  },

  // --- Maladies associées ---
  {
    id: 'q_comorb_kidney_meds',
    interlocutor: 'cardiologist',
    topicFr: 'Maladies associées (reins)',
    questionFr:
      'Ma fonction rénale (DFGe) limite-t-elle le choix ou les doses de mes médicaments de fond ?',
    whyItMattersFr:
      "Les seuils de DFGe guident le maintien ou l'adaptation des IEC/ARNI, des ARM et des iSGLT2, qui restent protecteurs même en cas d'insuffisance rénale modérée.",
    sources: ['Beldhuis (2022)', 'ESC 2026'],
    articleSlug: 'maladies-associees',
    relevantModules: ['ckd'],
    triggeredByRules: ['CREATININE_JUMP'],
  },
  {
    id: 'q_comorb_af_stroke_score',
    interlocutor: 'cardiologist',
    topicFr: 'Maladies associées (fibrillation atriale)',
    questionFr:
      'Avec ma fibrillation atriale, quel est mon score CHA2DS2-VA et quel anticoagulant est le plus adapté ?',
    whyItMattersFr:
      "L'insuffisance cardiaque compte à elle seule 1 point sur le score européen CHA2DS2-VA ; une anticoagulation est recommandée dès 2 points.",
    sources: ['Recommandations ESC 2024 (fibrillation atriale)'],
    articleSlug: 'maladies-associees',
    relevantModules: ['atrialFibrillation'],
  },
  {
    id: 'q_comorb_mitral_regurgitation',
    interlocutor: 'cardiologist',
    topicFr: 'Maladies associées (valve mitrale)',
    questionFr:
      'Ai-je une fuite mitrale secondaire ? Quelle est sa sévérité, et sera-t-elle réévaluée après optimisation de mon traitement médical ?',
    whyItMattersFr:
      'Environ 40 % des insuffisances mitrales secondaires diminuent après 1 à 3 mois de traitement médical optimisé (ESC/EACTS 2025).',
    sources: ['Recommandations ESC/EACTS 2025 (valvulopathies)'],
    articleSlug: 'maladies-associees',
    relevantModules: ['core'],
  },
  {
    id: 'q_comorb_diabetes_meds_hba1c',
    interlocutor: 'cardiologist',
    topicFr: 'Maladies associées (diabète)',
    questionFr:
      "Si j'ai un diabète, mes antidiabétiques sont-ils bien adaptés à mon cœur, et quel objectif d'HbA1c dois-je viser ?",
    whyItMattersFr:
      "Le consensus ADA 2022 attend un iSGLT2 chez tout patient diabétique avec IC symptomatique, déconseille les inhibiteurs de la DPP-4 (saxagliptine associée à plus d'hospitalisations) et les glitazones, et appelle à la prudence avec sulfamides et insuline ; dans les données observationnelles, la mortalité dans l'IC était la plus basse autour de 7–8 % d'HbA1c.",
    sources: ['Consensus ADA insuffisance cardiaque et diabète (2022)'],
    articleSlug: 'maladies-associees',
    relevantModules: ['diabetes'],
  },

  // --- Tension artérielle ---
  {
    id: 'q_bp_target_range',
    interlocutor: 'cardiologist',
    topicFr: 'Tension artérielle',
    questionFr:
      "Visez-vous une cible précise de tension artérielle, ou la priorité est-elle d'atteindre les doses cibles des médicaments de l'insuffisance cardiaque tant que je les tolère ?",
    whyItMattersFr:
      "Aucune cible tensionnelle stricte n'a été testée par essai randomisé dans l'ICFER établie (SPRINT a exclu les FEVG < 35 %). Dans de grandes cohortes d'essais, une systolique restant ≤ 120 mmHg est associée à un pronostic moins bon, mais cela reflète probablement un cœur plus faible plutôt qu'un effet nocif de la pression elle-même.",
    sources: ['ESC 2026', 'SPRINT (2015)', 'Li (2025)', 'Seidu (2024)'],
    articleSlug: 'tension-arterielle-insuffisance-cardiaque',
    relevantModules: ['core'],
    triggeredByRules: ['LOW_BP_ASYMPTOMATIC'],
  },
  {
    id: 'q_bp_high_avoid_drugs',
    interlocutor: 'cardiologist',
    topicFr: 'Tension artérielle',
    questionFr:
      'Si ma tension reste élevée, quel antihypertenseur ajouter (amlodipine, félodipine), et tous mes autres médicaments sont-ils bien compatibles avec mon ICFER ?',
    whyItMattersFr:
      "L'ESC 2026 contre-indique le vérapamil, le diltiazem et la moxonidine dans l'ICFER et propose l'amlodipine ou la félodipine si un antihypertenseur additionnel est requis.",
    sources: ['Recommandations ESC 2026 (tension artérielle)'],
    articleSlug: 'tension-arterielle-insuffisance-cardiaque',
    relevantModules: ['core'],
    triggeredByRules: ['CONTRAINDICATED_DRUG'],
  },
  {
    id: 'q_bp_low_dizzy',
    interlocutor: 'cardiologist',
    topicFr: 'Tension artérielle',
    questionFr:
      "Que faire si ma tension est basse avec des vertiges ou étourdissements, et quel médicament ajusteriez-vous en premier ?",
    whyItMattersFr:
      "Une tension basse sans symptôme est souvent acceptée ; le consensus HFA 2025 (Skouri 2025) suggère de ne réduire les médicaments de l'IC qu'en dessous d'une systolique d'environ 80 mmHg ou de symptômes marqués, en arrêtant d'abord les autres traitements hypotenseurs.",
    sources: ['Cautela (2020)', 'Consensus HFA Skouri (2025)'],
    articleSlug: 'tension-arterielle-insuffisance-cardiaque',
    relevantModules: ['core'],
    triggeredByRules: ['LOW_BP_SYMPTOMATIC'],
  },
  {
    id: 'q_bp_aortic_stenosis',
    interlocutor: 'cardiologist',
    topicFr: 'Tension artérielle et valve aortique',
    questionFr:
      'Ma tension artérielle peut-elle fausser la mesure échographique de mon rétrécissement aortique, et faut-il le réévaluer une fois la tension équilibrée ?',
    whyItMattersFr:
      "Une hypertension artérielle peut masquer la sévérité d'un rétrécissement aortique à l'ETT.",
    sources: ['Basile (2021)'],
    articleSlug: 'tension-arterielle-insuffisance-cardiaque',
    relevantModules: ['aorticStenosis'],
    triggeredByRules: ['AS_LOW_FLOW_CAVEAT'],
  },

  // --- Stade, cause et génétique ---
  {
    id: 'q_stage_b_vs_c',
    interlocutor: 'cardiologist',
    topicFr: 'Stade de la maladie',
    questionFr:
      'Suis-je classé(e) en stade B (jamais eu de symptômes) ou en stade C (symptômes actuels ou passés), et cela modifie-t-il les traitements recommandés ?',
    whyItMattersFr:
      'Les preuves au stade B concernent surtout les IEC et bêtabloquants (et l’éplérénone post-infarctus), alors que le stade C repose sur les quatre piliers. Les stades ne reculent jamais.',
    sources: ['Recommandations ESC 2026 (stade B)'],
    articleSlug: 'dysfonction-vg-asymptomatique-stade-b',
    relevantModules: ['stageB'],
    triggeredByRules: ['STAGE_B_CONTEXT'],
  },
  {
    id: 'q_stage_universal_definition_ef',
    interlocutor: 'cardiologist',
    topicFr: 'Stade et définition de la maladie',
    questionFr:
      'Mes comptes rendus indiquent « FEVG réduite » : avec la nouvelle Définition universelle 2026 qui ne fixe plus de seuil chiffré de FEVG, cela change-t-il mon diagnostic ou mon traitement ?',
    whyItMattersFr:
      "La Définition universelle 2026 est un texte de terminologie ; les seuils qui orientent les traitements proviennent toujours des recommandations cliniques (l'ESC 2026 utilise une FEVG < 50 %).",
    sources: ['Définition universelle de l’IC (2026)', 'ESC 2026'],
    articleSlug: 'fraction-dejection',
    relevantModules: ['core'],
  },
  {
    id: 'q_cause_breathlessness_ischaemia_vs_hf',
    interlocutor: 'cardiologist',
    topicFr: 'Symptômes : ischémie ou insuffisance cardiaque',
    questionFr:
      "Lorsque mon essoufflement s'accentue, comment savoir s'il s'agit de ma maladie coronaire (ischémie) ou d'une aggravation de mon insuffisance cardiaque, et quels examens utiliseriez-vous ?",
    whyItMattersFr:
      "La Définition universelle 2026 souligne que l'ischémie coronaire peut mimer une insuffisance cardiaque : 10 % à 15 % des personnes atteintes d'un syndrome coronarien chronique ne présentent qu'un essoufflement.",
    sources: ['Définition universelle de l’IC (2026)'],
    articleSlug: 'cardiomyopathie-ischemique',
    relevantModules: ['core'],
    triggeredByRules: ['EPOF_WORSENING'],
  },
  {
    id: 'q_cause_dual_pathology_and_mri',
    interlocutor: 'cardiologist',
    topicFr: 'Confirmation de la cause',
    questionFr:
      "L'affaiblissement de mon cœur est-il entièrement expliqué par la maladie coronaire, ou l'IRM cardiaque (localisation de la cicatrice) suggère-t-elle une seconde cause associée ?",
    whyItMattersFr:
      "Les recommandations européennes conseillent une IRM cardiaque lorsque la cause reste incertaine : l'aspect de la cicatrice aide à distinguer une atteinte ischémique d'une autre maladie du muscle cardiaque.",
    sources: ['ESC 2026', 'McCrohon (2003)', 'Gulati (2013)', 'Jones (2024)'],
    articleSlug: 'confirmer-la-cause-dysfonction-vg',
    relevantModules: ['core'],
  },
  {
    id: 'q_cause_genetics_family',
    interlocutor: 'cardiologist',
    topicFr: 'Confirmation de la cause et génétique',
    questionFr:
      'Un test génétique ou un dépistage échographique de mes proches au premier degré mériterait-il d’être envisagé ?',
    whyItMattersFr:
      'Un variant génétique de cardiomyopathie dilatée modifie la stratification du risque et peut justifier un dépistage familial si la dysfonction paraît disproportionnée par rapport aux lésions coronaires.',
    sources: ['ESC 2023 (cardiomyopathies)', 'Jones (2024)'],
    articleSlug: 'confirmer-la-cause-dysfonction-vg',
    relevantModules: ['core'],
  },

  // --- Sommeil ---
  {
    id: 'q_sleep_study_screening',
    interlocutor: 'cardiologist',
    topicFr: 'Sommeil et apnée du sommeil',
    questionFr:
      "Pourrais-je avoir une apnée du sommeil, et un enregistrement nocturne (polygraphie ou polysomnographie) est-il indiqué même sans somnolence marquée ?",
    whyItMattersFr:
      "Plus d'un tiers des personnes vivant avec une insuffisance cardiaque ont des troubles respiratoires du sommeil, souvent sans somnolence diurne ; un score de somnolence bas ou un questionnaire normal n'élimine pas l'apnée du sommeil (AHA 2021).",
    sources: ['Recommandations ESC 2026 (sommeil)', 'Déclaration AHA apnée du sommeil (2021)'],
    articleSlug: 'apnee-du-sommeil-insuffisance-cardiaque',
    relevantModules: ['core', 'sleepApnoea'],
    triggeredByRules: ['CSA_ASV_CONTRAINDICATION'],
  },
  {
    id: 'q_sleep_osa_vs_csa',
    interlocutor: 'cardiologist',
    topicFr: 'Sommeil et apnée du sommeil',
    questionFr:
      "Mon apnée du sommeil est-elle surtout obstructive (SAOS) ou centrale (SACS), et quel appareil (PPC/CPAP vs évitement de l'ASV) est sûr avec ma FEVG ?",
    whyItMattersFr:
      "Dans SERVE-HF, la servo-ventilation adaptative (ASV) a augmenté la mortalité dans l'ICFER avec apnée surtout centrale et est contre-indiquée (ESC Classe III). La PPC améliore somnolence et qualité de vie sans preuve de réduction des événements cardiaques (SAVE a exclu les symptômes d'IC modérés à sévères), et seul un enregistrement du sommeil distingue SACS et SAOS.",
    sources: ['SERVE-HF (2015)', 'SAVE CPAP (2016)', 'Déclaration AHA (2021)', 'ESC 2026'],
    articleSlug: 'apnee-du-sommeil-insuffisance-cardiaque',
    relevantModules: ['sleepApnoea'],
    triggeredByRules: ['CSA_ASV_CONTRAINDICATION'],
  },

  // --- Thérapies cellulaires (cellules souches) et essais cliniques en cours ---
  {
    id: 'q_trials_stem_cells_clinics',
    interlocutor: 'cardiologist',
    topicFr: 'Thérapies cellulaires (cellules souches)',
    questionFr:
      "Des thérapies par cellules souches ou patchs de muscle cardiaque sont-elles autorisées en France ou en Europe pour une cardiomyopathie ischémique, et que penser des cliniques proposant des injections payantes ?",
    whyItMattersFr:
      "Aucun médicament de thérapie innovante (MTI / ATMP) n'est autorisé pour le cœur dans l'UE (liste EMA juin 2026) ni aux États-Unis (FDA). Les essais contrôlés contre procédure factice (DREAM-HF, CONCERT-HF, CardiAMP-HF) ont été neutres, les patchs iPS (BioVAT-HF, RiHEART) restent très précoces sous immunosuppresseurs, et les cliniques payantes hors essai enregistré exposent à des complications graves.",
    sources: ['Liste MTI EMA (juin 2026)', 'FDA', 'DREAM-HF (2023)', 'CONCERT-HF (2021)', 'BioVAT-HF (NEJM 2026)'],
    articleSlug: 'cellules-souches-et-therapies-regeneratives',
    relevantModules: ['core'],
  },
  {
    id: 'q_trials_ongoing_eligibility',
    interlocutor: 'cardiologist',
    topicFr: 'Essais cliniques en cours',
    questionFr:
      "Un essai clinique enregistré (par exemple PROFID-EHRA, STICH3, COLT-HF ou un protocole hospitalier dédié) correspond-il à ma situation, et comment vérifier son cadre officiel ?",
    whyItMattersFr:
      "Un essai en cours ne constitue pas une preuve d'efficacité, mais participer à un essai académique enregistré (euclinicaltrials.eu ou ClinicalTrials.gov, toujours gratuit pour le patient) peut être discuté avec votre équipe de cardiologie.",
    sources: ['Registres ClinicalTrials.gov et EU CTIS (novembre 2026)', 'Protocole PROFID-EHRA (2026)'],
    articleSlug: 'essais-cliniques-en-cours-et-a-suivre',
    relevantModules: ['core'],
  },

  // --- Démarches pratiques en France et travail ---
  {
    id: 'q_fr_ald_protocol',
    interlocutor: 'gp',
    topicFr: 'Démarches en France (ALD)',
    questionFr:
      "Une demande d'ALD exonérante (ALD 5 insuffisance cardiaque grave ou ALD 13 maladie coronaire) a-t-elle été établie dans mon protocole de soins ?",
    whyItMattersFr:
      "L'ALD assure la prise en charge à 100 % du tarif de l'Assurance Maladie pour les soins liés à l'affection (hors dépassements d'honoraires et franchises).",
    sources: ['service-public.fr (ALD)', 'ameli.fr (ALD exonérante)'],
    articleSlug: 'vivre-avec-insuffisance-cardiaque-en-france',
    relevantModules: ['core'],
    triggeredByRules: ['FR_ALD_CHECK'],
  },
  {
    id: 'q_fr_smr_rehab',
    interlocutor: 'cardiologist',
    topicFr: 'Démarches en France (réadaptation SMR)',
    questionFr:
      'Pouvez-vous me prescrire une réadaptation cardiaque en SMR cardiovasculaire, idéalement en hôpital de jour près de chez moi ?',
    whyItMattersFr:
      'En France, la réadaptation en SMR cardiovasculaire est prescrite sans entente préalable par le cardiologue ou le médecin traitant et prise en charge intégralement (fiche HAS 2024).',
    sources: ['HAS fiche orientation réadaptation cardiaque (2024)', 'ESC 2026'],
    articleSlug: 'vivre-avec-insuffisance-cardiaque-en-france',
    relevantModules: ['core'],
    triggeredByRules: ['FR_SMR_REHAB'],
  },
  {
    id: 'q_fr_tpt_pre_reprise',
    interlocutor: 'occupational_doctor',
    topicFr: 'Travail et reprise progressive',
    questionFr:
      'Avant de reprendre mon poste, puis-je organiser une visite de pré-reprise afin de préparer un temps partiel thérapeutique ou des aménagements de poste ?',
    whyItMattersFr:
      'La visite de pré-reprise (accessible dès un arrêt prolongé) et le temps partiel thérapeutique permettent un retour progressif sécurisé et adapté à votre tolérance à l’effort.',
    sources: ['ameli.fr (prévention de la désinsertion professionnelle et TPT)'],
    articleSlug: 'vivre-avec-insuffisance-cardiaque-en-france',
    relevantModules: ['core'],
    triggeredByRules: ['FR_SICK_LEAVE_2026'],
  },
  {
    id: 'q_fr_sick_leave_ij_rqth',
    interlocutor: 'occupational_doctor',
    topicFr: 'Arrêt prolongé et maintien dans l’emploi',
    questionFr:
      'En cas d’arrêt de travail prolongé, comment sécuriser la durée de mes indemnités journalières (règle ALD 3 ans vs 1 an) et une demande de RQTH auprès de la MDPH serait-elle utile ?',
    whyItMattersFr:
      "La reconnaissance en ALD conditionne l'indemnisation longue durée (réforme IJ) et la RQTH ouvre l'accès aux dispositifs d'aménagement et de maintien dans l'emploi.",
    sources: ['service-public.fr (RQTH)', 'ameli.fr (IJ et ALD)'],
    articleSlug: 'vivre-avec-insuffisance-cardiaque-en-france',
    relevantModules: ['core'],
    triggeredByRules: ['FR_SICK_LEAVE_2026', 'FR_ALD_CHECK'],
  },

  // --- Insuffisance cardiaque avancée (stade D) et cœur droit ---
  {
    id: 'q_adv_i_need_help_referral',
    interlocutor: 'cardiologist',
    topicFr: 'Insuffisance cardiaque avancée (stade D)',
    questionFr:
      'Quels signes d’alerte « I NEED HELP » (y compris la nécessité de réduire mes médicaments de fond pour tension basse ou reins) devraient conduire à impliquer un centre expert d’insuffisance cardiaque avancée, et quel centre serait référent ?',
    whyItMattersFr:
      "Les recommandations européennes préconisent une orientation précoce vers un centre expert dès qu'apparaissent des signes d'insuffisance cardiaque avancée ou une difficulté à tolérer les traitements de fond, afin d'ouvrir toutes les options à temps.",
    sources: ['ESC 2026 (Section 8)', 'HELP-HF (2023)', 'ISHLT 2023'],
    articleSlug: 'insuffisance-cardiaque-avancee-stade-d',
    relevantModules: ['core'],
    triggeredByRules: ['LOW_BP_SYMPTOMATIC'],
  },
  {
    id: 'q_adv_rv_tapse_paps',
    interlocutor: 'cardiologist',
    topicFr: 'Ventricule droit et pression pulmonaire',
    questionFr:
      'Que montrent le TAPSE et la pression artérielle pulmonaire estimée (PAPS / sPAP) sur mon échocardiographie, et si la pression pulmonaire est élevée, est-elle entièrement liée au cœur gauche ou un cathétérisme droit apporterait-il une information utile ?',
    whyItMattersFr:
      "Lorsque la pression pulmonaire monte à cause du cœur gauche, la priorité est d'optimiser le traitement de l'insuffisance cardiaque ; les médicaments spécifiques d'autres formes d'hypertension pulmonaire sont contre-indiqués et une atteinte du ventricule droit justifie un avis en centre expert.",
    sources: ['Recommandations ESC/ERS 2022 (HTP)', 'ESC 2026'],
    articleSlug: 'ventricule-droit-et-hypertension-pulmonaire',
    relevantModules: ['core'],
  },
  {
    id: 'q_adv_lvad_inotropes_palliative',
    interlocutor: 'cardiologist',
    topicFr: 'LVAD, greffe cardiaque et soins de support',
    questionFr:
      'Si une assistance circulatoire (LVAD), une greffe cardiaque ou des inotropes étaient un jour discutés dans mon parcours, comment les soins de support et l’anticipation seraient-ils associés en parallèle ?',
    whyItMattersFr:
      "Les recommandations européennes encouragent à intégrer tôt les soins de support et la discussion sur vos souhaits en parallèle des traitements de l'insuffisance cardiaque avancée, notamment lors d'une évaluation pour assistance circulatoire.",
    sources: ['ESC 2026 (Section 8)', 'ISHLT 2023 MCS', 'MOMENTUM 3 (2022)'],
    articleSlug: 'assistance-circulatoire-lvad',
    relevantModules: ['core'],
  },

  // --- Angor et médicaments anti-angineux ---
  {
    id: 'q_angina_gtn_plan',
    interlocutor: 'cardiologist',
    topicFr: 'Angor et conduite à tenir en crise',
    questionFr:
      'Ma gêne thoracique ou mon essoufflement à l’effort correspond-il à un angor ? Que dois-je faire exactement avec ma trinitrine en spray (Natispray), et après combien de bouffées ou de minutes dois-je appeler le 15 ou le 112 ?',
    whyItMattersFr:
      "Le RCP de Natispray autorise jusqu'à 3 pulvérisations espacées de 2 à 3 minutes en position assise, mais les délais d'appel d'urgence varient selon les fiches (ANSM, sante.fr, FFC) : un plan écrit personnel évite toute hésitation et rappelle l'interdiction absolue avec les inhibiteurs de la PDE-5.",
    sources: ['RCP Natispray', 'ESC 2024 SCC', 'ESC 2026 (Section 9.2)'],
    articleSlug: 'angor-et-medicaments-anti-angineux',
    relevantModules: ['core'],
  },
  {
    id: 'q_angina_second_line_france',
    interlocutor: 'cardiologist',
    topicFr: 'Médicaments anti-angineux en France',
    questionFr:
      'Si un anti-angineux supplémentaire est nécessaire en plus de mon bêtabloquant, lequel est le mieux adapté à ma tension, à mes reins et aux disponibilités/remboursements en France (patch nitré avec fenêtre libre de 8–12 h, ivabradine, ranolazine), ou faut-il rediscuter une revascularisation ?',
    whyItMattersFr:
      "En France, les dérivés nitrés longue durée existent uniquement en patchs (avec 8 à 12 h sans patch par jour), certaines options ne sont pas remboursées, et une revascularisation peut être envisagée si l'angor persiste malgré le traitement.",
    sources: ['ESC 2026 (Section 9.2)', 'HAS (nicorandil 2026)', 'RCP Nitriderm TTS / Ranexa'],
    articleSlug: 'angor-et-medicaments-anti-angineux',
    relevantModules: ['core'],
  },

  // --- Antiplaquettaires, bithérapie (DAPT) et protection gastrique (IPP) ---
  {
    id: 'q_apt_aspirin_vs_clopidogrel_dapt',
    interlocutor: 'cardiologist',
    topicFr: 'Antiplaquettaires et bithérapie (DAPT)',
    questionFr:
      'L’aspirine ou le clopidogrel (Plavix) est-il préférable au long cours dans mon cas, et en cas de stent, comment mon insuffisance cardiaque (qui augmente le risque thrombotique et hémorragique) oriente-t-elle la durée de bithérapie ?',
    whyItMattersFr:
      "Les recommandations européennes placent l'aspirine et le clopidogrel au même niveau en traitement au long cours ; après un stent en situation stable, la bithérapie dure généralement 6 mois (ou 1 à 3 mois si le risque de saignement est élevé).",
    sources: ['ESC 2024 SCC', 'HOST-EXAM 10 ans (2026)', 'PANTHER (2023)', 'Otsuka (2023)'],
    articleSlug: 'antiplaquettaires-bitherapie-et-protection-gastrique',
    relevantModules: ['core'],
  },
  {
    id: 'q_apt_ppi_choice_and_labs',
    interlocutor: 'pharmacist',
    topicFr: 'Protection gastrique (IPP) et interactions',
    questionFr:
      'Ai-je besoin d’un protecteur gastrique (IPP) avec mes antiplaquettaires, lequel éviter avec le clopidogrel, et faut-il surveiller mon magnésium ou ma vitamine B12 en cas de traitement prolongé associé à des diurétiques ?',
    whyItMattersFr:
      "Un protecteur gastrique (IPP) est recommandé en cas d'association de traitements fluidifiant le sang à risque digestif élevé ; le pantoprazole est généralement préféré avec le clopidogrel, et un suivi du magnésium et de la vitamine B12 peut être utile en cas de prise prolongée.",
    sources: ['ESC 2024 SCC', 'EMA (2010)', 'FDA/MHRA IPP', 'Lam (2013)'],
    articleSlug: 'antiplaquettaires-bitherapie-et-protection-gastrique',
    relevantModules: ['core'],
  },

  // --- Escalade et résistance aux diurétiques ---
  {
    id: 'q_diur_dry_weight_escalation',
    interlocutor: 'cardiologist',
    topicFr: 'Diurétiques et poids sec',
    questionFr:
      'Quelle est ma fourchette de « poids sec » ? Si la rétention d’eau résiste à mon diurétique habituel, privilégiez-vous une hausse de dose encadrée, un autre diurétique de l’anse, un ajout court de thiazide ou une perfusion en hôpital de jour, et quand contrôler ionogramme et créatinine ?',
    whyItMattersFr:
      "TRANSFORM-HF n'a montré aucune supériorité du torsémide sur le furosémide (mortalité ICFER HR 1,02) ; les ajouts hospitaliers (ADVOR, CLOROTIC) accélèrent la décongestion sans réduire la mortalité, et les thiazides doublent hypokaliémie et aggravation rénale (à éviter au long cours en phase stable selon l'ESC 2026).",
    sources: ['ESC 2026 (Diurétiques)', 'TRANSFORM-HF (2023)', 'ADVOR (2022)', 'CLOROTIC (2023)'],
    articleSlug: 'escalade-et-resistance-aux-diuretiques',
    relevantModules: ['core', 'ckd'],
    triggeredByRules: ['WEIGHT_GAIN_3D', 'EPOF_WORSENING'],
  },
  {
    id: 'q_diur_resistance_referral',
    interlocutor: 'cardiologist',
    topicFr: 'Résistance aux diurétiques',
    questionFr:
      'Si je dois augmenter de manière répétée mes diurétiques ou recourir à des perfusions IV de secours, cela justifie-t-il une évaluation en centre expert d’insuffisance cardiaque avancée ?',
    whyItMattersFr:
      "L'ESC 2026 range l'escalade répétée des diurétiques et la résistance aux diurétiques parmi les signes d'alerte indiquant de contacter rapidement un centre d'insuffisance cardiaque avancée.",
    sources: ['ESC 2026 (Diurétiques et Section 8)', 'Girerd (2022)'],
    articleSlug: 'escalade-et-resistance-aux-diuretiques',
    relevantModules: ['core'],
    triggeredByRules: ['EPOF_WORSENING'],
  },

  // --- Chirurgie non cardiaque, soins dentaires et règles « jours de maladie » ---
  {
    id: 'q_periop_meds_and_icd',
    interlocutor: 'cardiologist',
    topicFr: 'Chirurgie non cardiaque et endoscopie',
    questionFr:
      'Avant une chirurgie programmée ou une coloscopie, quels traitements poursuivre (bêtabloquant, statine, aspirine, IEC/ARA2/ARNI), lesquels suspendre et combien de jours (iSGLT2 3–4 jours même sans diabète, GLP-1, P2Y12, AOD sans relais héparine, compléments 1–2 semaines), et mon DAI/CRT sera-t-il reprogrammé avant bistouri électrique monopolaire ?',
    whyItMattersFr:
      "Les iSGLT2 sont suspendus 3–4 jours avant une chirurgie majeure pour éviter l'acidocétose euglycémique ; STOP-or-NOT et SPACE n'ont montré aucun bénéfice à interrompre systématiquement IEC/ARA2 ; un simple aimant désactive les chocs d'un DAI mais ne protège pas la stimulation antibradycardique/CRT en cas de dépendance.",
    sources: ['AHA/ACC 2024 NCS', 'ESC 2022 NCS', 'STOP-or-NOT (2024)', 'BSG/ESGE (2021)', 'ASA/HRS CIED'],
    articleSlug: 'chirurgie-soins-dentaires-et-jours-de-maladie',
    relevantModules: ['core', 'device'],
    triggeredByRules: ['SGLT2_KETO_REMINDER'],
  },
  {
    id: 'q_dental_prophylaxis_and_bleeding',
    interlocutor: 'gp',
    topicFr: 'Soins dentaires et antibioprophylaxie',
    questionFr:
      'Avant un soin ou une extraction dentaire, ai-je besoin d’antibiotiques préventifs (endocardite) ou seulement d’un bain de bouche antiseptique, mes antithrombotiques doivent-ils être poursuivis avec hémostase locale, et quel antalgique sûr remplacerait les AINS ?',
    whyItMattersFr:
      "Selon la HAS (octobre 2024) et l'ESC 2023, l'ICFER, les stents et les DAI/CRT seuls ne requièrent aucune antibioprophylaxie (réservée aux prothèses/TAVI, MitraClip, LVAD ou antécédent d'endocardite ; clindamycine retirée, prudence azithromycine avec amiodarone). La SFCO 2015 préconise le maintien de la monothérapie antiplaquettaire en chirurgie orale.",
    sources: ['HAS oct. 2024 (endocardite dentaire)', 'ESC 2023 EI', 'SFCO 2015'],
    articleSlug: 'chirurgie-soins-dentaires-et-jours-de-maladie',
    relevantModules: ['core', 'device'],
  },
  {
    id: 'q_thesis_sick_day_raasi_vs_sglt2i',
    interlocutor: 'gp',
    topicFr: 'Thèse : jours de maladie (SRAA/ARM vs iSGLT2)',
    questionFr:
      'Pouvons-nous rédiger un plan personnalisé « jours de maladie » distinguant quels comprimés ne jamais arrêter (bêtabloquant, antithrombotiques), quand suspendre temporairement l’iSGLT2 (acidocétose euglycémique même à glycémie normale) versus les bloqueurs du SRAA/ARM, et le protocole exact de reprise ?',
    whyItMattersFr:
      "Les cartes génériques d'auto-arrêt manquent de preuve dans l'ICFER : dans le seul essai randomisé (Fink 2022, MRC), 21 % des patients ont arrêté de mauvais médicaments et près de la moitié des SRAA/ARM stoppés ne sont jamais repris en vie réelle, tandis que les RCP EMA conseillent d'interrompre l'iSGLT2 en cas de maladie aiguë sévère ou de pertes digestives.",
    sources: ['Fink (2022)', 'SMART-C (2022)', 'NICE NG148 (2024)', 'RCP EMA Forxiga / Jardiance'],
    articleSlug: 'these-jours-de-maladie-sraa-vs-isglt2',
    relevantModules: ['core', 'diabetes', 'ckd'],
    triggeredByRules: ['SGLT2_KETO_REMINDER', 'CREATININE_JUMP'],
  },

  // --- Arythmies ventriculaires, chocs DAI, ablation et amiodarone ---
  {
    id: 'q_va_pvc_burden_and_holter',
    interlocutor: 'cardiologist',
    topicFr: 'Extrasystoles ventriculaires (ESV)',
    questionFr:
      'Quelle est ma charge quotidienne en extrasystoles ventriculaires (ESV), a-t-elle été enregistrée sur plus de 24 heures, et des ESV fréquentes (≥ 10 %) pourraient-elles aggraver ma FEVG ou perturber ma CRT ?',
    whyItMattersFr:
      "Un seul Holter de 24 h peut sous-estimer la fréquence réelle des extrasystoles ; lorsqu'elles affaiblissent le muscle cardiaque, une ablation est souvent envisagée, tandis que certains antiarythmiques (comme la flécaïnide) sont contre-indiqués après un infarctus.",
    sources: ['ESC 2022 (Arythmies ventriculaires)', 'Huizar (2019)', 'CAST (1991)'],
    articleSlug: 'arythmies-ventriculaires-et-antiarythmiques',
    relevantModules: ['core', 'device'],
  },
  {
    id: 'q_va_shock_plan_and_ablation',
    interlocutor: 'cardiologist',
    topicFr: 'Chocs de DAI et ablation de TV',
    questionFr:
      'Disposé-je d’un plan écrit en cas de choc de DAI (quand contacter le centre vs appeler le 15/112 dès 2 chocs ou symptômes), combien d’ATP mon boîtier a-t-il délivrés, et comment pesez-vous ablation par cathéter face à amiodarone ou sotalol en cas de TV ?',
    whyItMattersFr:
      "Disposer d'un plan écrit en cas de choc de défibrillateur est essentiel. En cas de récidives, l'ablation et l'amiodarone sont deux options aux profils d'effets secondaires différents (surveillance pulmonaire, thyroïdienne et hépatique sous amiodarone) à peser avec votre rythmologue.",
    sources: ['ESC 2022 AV/MSC', 'VANISH2 (NEJM 2025 / JACC 2026)', 'PARTITA (2022)', 'Falconer (2026)'],
    articleSlug: 'arythmies-ventriculaires-et-antiarythmiques',
    relevantModules: ['device'],
  },
  {
    id: 'q_va_amiodarone_monitoring',
    interlocutor: 'gp',
    topicFr: 'Surveillance sous amiodarone (Cordarone)',
    questionFr:
      'Si je prends de l’amiodarone (Cordarone), qui coordonne mes bilans semestriels de thyroïde (TSH) et de foie (transaminases), mon ECG annuel, la surveillance pulmonaire, la protection solaire et la vérification des interactions avec mes autres médicaments ?',
    whyItMattersFr:
      "La demi-vie de 20 à 100 jours de l'amiodarone expose à des toxicités d'organes persistantes ; le RCP français ANSM contre-indique citalopram/escitalopram, moxifloxacine et dompéridone, recommande rosuvastatine/pravastatine plutôt que simvastatine/atorvastatine et impose d'ajuster warfarine et digoxine.",
    sources: ['RCP ANSM Cordarone (2025)', 'Sorodoc (2024)', 'ESC 2022 AV/MSC'],
    articleSlug: 'arythmies-ventriculaires-et-antiarythmiques',
    relevantModules: ['core', 'atrialFibrillation', 'device'],
  },

  // --- Automesure tensionnelle et montres connectées ---
  {
    id: 'q_hbp_protocol_validated_cuff',
    interlocutor: 'gp',
    topicFr: 'Automesure tensionnelle à domicile',
    questionFr:
      'Souhaitez-vous que je mesure ma tension à domicile (selon la règle des 3), mon tensiomètre est-il validé (registre STRIDE BP) avec un brassard adapté, quelle zone doit m’amener à vous appeler, et comment mesurer en cas de fibrillation atriale ?',
    whyItMattersFr:
      "Dans un audit, seuls 5,5 % des tensiomètres vendus en ligne étaient validés ; les protocoles SFHTA/ESH (répéter 3 mesures, matin avant les comprimés et soir) doivent être adaptés à vos cibles d'IC et vérifiés en cas de FA.",
    sources: ['ESH 2021 HBPM', 'SFHTA (règle des 3)', 'Picone (2020)', 'STRIDE BP'],
    articleSlug: 'automesure-tensionnelle-domicile',
    relevantModules: ['core', 'atrialFibrillation'],
    triggeredByRules: ['LOW_BP_SYMPTOMATIC', 'LOW_BP_ASYMPTOMATIC'],
  },
  {
    id: 'q_wearables_ecg_and_icd_magnets',
    interlocutor: 'cardiologist',
    topicFr: 'Montres connectées et sécurité des prothèses',
    questionFr:
      'Dois-je utiliser l’ECG ou les alertes de ma montre connectée (et lesquelles désactiver), et avec un DAI, comment respecter les distances face aux aimants (15 cm en usage courant, 30 cm en charge) et les restrictions européennes des applications ECG ?',
    whyItMattersFr:
      "15 à 26 % des ECG de montres en cardiologie sont inconclusifs et les alertes peuvent majorer l'anxiété (Mannhart 2023 ; Rosman 2024) ; les aimants peuvent mettre un DAI en mode aimant et la notice UE d'Apple déconseille son application ECG avec un dispositif implanté.",
    sources: ['Mannhart (2023)', 'Rosman (2024)', 'Wegner (2026)', 'Notice FDA / UE Apple ECG'],
    articleSlug: 'montres-connectees-et-capteurs-ic',
    relevantModules: ['core', 'device', 'atrialFibrillation'],
  },

  // --- Vaccinations détaillées en France ---
  {
    id: 'q_vax_france_schedule_high_dose',
    interlocutor: 'gp',
    topicFr: 'Calendrier vaccinal 2026 en France',
    questionFr:
      'Quels vaccins sont recommandés cette année dans mon cas (grippe annuelle gratuite en France à tout âge en maladie coronaire/IC, dose standard ou haute dose, pneumocoque, COVID-19, et dès 65 ans VRS et zona), et lesquels peuvent être faits le même jour ?',
    whyItMattersFr:
      "Le vaccin antigrippal a réduit la mortalité après infarctus (IAMI) et les pneumonies/hospitalisations dans l'IC (IVVE), tandis que DAN-RSV a montré 83,3 % d'efficacité contre les hospitalisations VRS ; en France, le calendrier vaccinal 2026 ouvre la prise en charge grippe et pneumocoque dès le diagnostic.",
    sources: ['Calendrier vaccinal France 2026', 'IAMI (2021)', 'IVVE (2022)', 'DANFLU-2 (2025)', 'DAN-RSV (2026)'],
    articleSlug: 'vaccinations-insuffisance-cardiaque',
    relevantModules: ['core'],
    triggeredByRules: ['VACCINES_ANNUAL'],
  },

  // --- Santé sexuelle, voyages, canicule, tabac et alcool ---
  {
    id: 'q_life_sexual_health_pde5',
    interlocutor: 'cardiologist',
    topicFr: 'Santé sexuelle et dysfonction érectile',
    questionFr:
      'Mon état cardiaque autorise-t-il les rapports sexuels (y compris avec un DAI), passer de la spironolactone à l’éplérénone aiderait-il des troubles érectiles ou une gynécomastie sans arrêter mon bêtabloquant, et le sildénafil (Viagra) convient-il mieux que le tadalafil (Cialis) selon les RCP européens ?',
    whyItMattersFr:
      "Un rapport représente 3 à 5 METs (sûr en NYHA I–II stable) et NICE NG106 conseille de ne pas arrêter un bêtabloquant pour la seule dysfonction érectile. En Europe, Cialis contre-indique l'IC dès NYHA II alors que Viagra ne contre-indique que l'IC sévère ; tous sont strictement interdits avec les dérivés nitrés, nicorandil et riociguat.",
    sources: ['Princeton IV (2024)', 'NICE NG106', 'RCP EMA Viagra / Cialis'],
    articleSlug: 'vie-sexuelle-et-dysfonction-erectile-ic',
    relevantModules: ['core', 'device'],
  },
  {
    id: 'q_life_travel_altitude_heatwave',
    interlocutor: 'cardiologist',
    topicFr: 'Voyages, altitude, canicule et saunas',
    questionFr:
      'Puis-je prendre l’avion (ordonnance en DCI et carte DAI en cabine), quel plafond d’altitude me concerne en montagne, quel plan prévoir avant une canicule (recommandations ANSM), et dois-je éviter saunas brûlants et bains d’eau glacée ?',
    whyItMattersFr:
      "La plupart des IC stables NYHA I–II peuvent prendre l'avion ; les plafonds d'altitude divergent (Parati 2018 jusqu'à 3 000–3 500 m ou 2 500 m si angor vs BHF > 2 000 m). L'ANSM demande de ne jamais arrêter seul ses traitements pendant une canicule, et les bains glacés exposent à un conflit autonome arythmogène sur cicatrice.",
    sources: ['Parati (2018)', 'BTS 2022 / BCS 2010', 'ANSM canicule (2025–2026)', 'AHA (2026)'],
    articleSlug: 'voyages-canicule-et-climat-ic',
    relevantModules: ['core', 'device'],
  },
  {
    id: 'q_life_smoking_and_alcohol',
    interlocutor: 'gp',
    topicFr: 'Tabac et alcool',
    questionFr:
      'Pouvez-vous me prescrire des substituts nicotiniques ou de la varénicline (Champix) et m’orienter vers Tabac info service (39 89) ? Quelle limite personnelle d’alcool (ou zéro) me conseillez-vous compte tenu de mon cœur, d’un risque de FA et de mes traitements ?',
    whyItMattersFr:
      "Arrêter le tabac réduit la mortalité de 30 à 40 % dans l'ICFER (SOLVD) ; substituts nicotiniques et Champix (revenu en juin 2025, sans interaction CYP450) sont remboursés à 65 % en France, tandis que le HCSP et l'ESC 2024 déconseillent la e-cigarette. Pour l'alcool, réduire est toujours bénéfique (ESC 2026 ; ≤ 3 verres/semaine en cas de FA, ESC 2024).",
    sources: ['SOLVD', 'EAGLES', 'HCSP / ameli.fr (2025–2026)', 'ESC 2024 FA', 'ESC 2026'],
    articleSlug: 'tabac-et-alcool-insuffisance-cardiaque',
    relevantModules: ['core', 'atrialFibrillation'],
  },

  // --- Comorbidités étendues, diabète détaillé, cause et examens spécialisés ---
  {
    id: 'q_comorb_gout_copd_thyroid_anaemia',
    interlocutor: 'gp',
    topicFr: 'Goutte, BPCO, thyroïde, anémie et fragilité',
    questionFr:
      'En cas de crise de goutte (sans AINS), la colchicine est-elle compatible avec mon DFGe et mes traitements et l’allopurinol reste-t-il la 1re ligne ? En cas de BPCO, puis-je garder un bêtabloquant β1-sélectif ? Ma TSH et les causes non martiales d’une éventuelle anémie (sans injections d’ASE) sont-elles vérifiées ?',
    whyItMattersFr:
      "La colchicine est contre-indiquée sous DFGe 30 en France et avec les macrolides ; l'hyperuricémie sans goutte ne se traite pas (EXACT-HF, ALL-HEART). La BPCO ne contre-indique pas les bêtabloquants β1-sélectifs dans l'ICFER, la TSH doit être suivie régulièrement, et les ASE sont contre-indiqués dans l'ICFER (RED-HF : surrisque de thromboses et d'AVC).",
    sources: ['ANSM colchicine', 'EXACT-HF / ALL-HEART', 'CARES / FAST', 'RED-HF (2013)', 'ESC 2026'],
    articleSlug: 'goutte-bpco-thyroide-et-autres-comorbidites',
    relevantModules: ['core', 'ckd'],
    triggeredByRules: ['CONTRAINDICATED_DRUG'],
  },
  {
    id: 'q_comorb_diabetes_metformin_insulin',
    interlocutor: 'gp',
    topicFr: 'Diabète : metformine, insuline et sulfamides',
    questionFr:
      'Si je prends de la metformine, mon DFGe est-il bien au-dessus de 30–45 mL/min et quand la suspendre avant un scanner injecté ou une opération ? Si je prends insuline ou sulfamide, comment éviter les hypoglycémies dont les signes sont masqués par mon bêtabloquant ?',
    whyItMattersFr:
      "La metformine est admise dans l'IC chronique stable avec DFGe > 30 (ESC 2023 IIa B) mais doit être suspendue en cas d'injection de contraste iodé ou de jeûne opératoire ; les bêtabloquants peuvent masquer tremblements et palpitations lors d'une hypoglycémie.",
    sources: ['ESC 2023 (Diabète et MCV)', 'RCP Metformine', 'CAROLINA (2024)'],
    articleSlug: 'diabete-insuffisance-cardiaque',
    relevantModules: ['diabetes', 'ckd'],
  },
  {
    id: 'q_diag_cpet_gls_troponin',
    interlocutor: 'cardiologist',
    topicFr: 'Examens spécialisés (EFX, GLS, troponine, Holter)',
    questionFr:
      'Une épreuve d’effort cardiorespiratoire (EFX / CPET) serait-elle utile pour calibrer ma réadaptation ou quantifier mon souffle ? Mon GLS est-il suivi sur le même échographe, ma troponine chronique de base figure-t-elle dans mon courrier, et quelle durée de monitoring rythmique (Holter, patch, ILR) est adaptée ?',
    whyItMattersFr:
      "L'EFX mesure objectivement VO2 pic et pente VE/VCO2 ; le GLS varie jusqu'à 3,7 points entre constructeurs ; plus de la moitié des ICFER stables ont une troponine ultrasensible légèrement élevée en permanence (repère utile aux urgences) ; et un Holter 24 h manque souvent les arythmies intermittentes.",
    sources: ['ESC 2026', 'ASE/EACVI (2015)', 'Aimo (2018)', 'ISHLT / Kittleson (2025)'],
    articleSlug: 'efx-strain-troponine-et-imagerie-cardiaque',
    relevantModules: ['core', 'stageB', 'hfImpEf'],
  },
  {
    id: 'q_cause_amyloid_sarcoid_bystander',
    interlocutor: 'cardiologist',
    topicFr: 'Recherche d’une cause associée (amylose, sarcoïdose, NDLVC)',
    questionFr:
      'Existe-t-il des signes évoquant une coronaropathie fortuite associée à une autre cardiomyopathie (NDLVC, amylose cardiaque nécessitant scintigraphie osseuse et les 3 tests monoclonaux, ou sarcoïdose cardiaque relevant d’une TEP-18F-FDG) ?',
    whyItMattersFr:
      "Dans un grand registre IRM de coronaropathie obstructive (Bawaskar 2024), environ 1 patient sur 6 présentait une cardiomyopathie non ischémique ou double ; identifier une amylose ATTR (coexistant chez ~1 patient âgé sur 4) ou une sarcoïdose transforme la prise en charge et les seuils de DAI.",
    sources: ['ESC 2023 (Cardiomyopathies)', 'Bawaskar (2024)', 'Garcia-Pavia (2021)', 'Imazio (2026)'],
    articleSlug: 'confirmer-la-cause-dysfonction-vg',
    relevantModules: ['core'],
  },

  // --- Réseau de soins et aides sociales en France ---
  {
    id: 'q_fr_ipa_mon_espace_sante',
    interlocutor: 'gp',
    topicFr: 'Réseau de soins en France (IPA et Mon espace santé)',
    questionFr:
      'Puis-je être suivi(e) en lien avec un(e) infirmier(ère) en pratique avancée (IPA) entre les consultations spécialisées, et mes comptes rendus (ETT, IRM, carte DAI, VSM) sont-ils bien déposés dans Mon espace santé (DMP) pour le SAMU 15 ?',
    whyItMattersFr:
      "L'IPA assure le suivi des cardiopathies stabilisées (bilans, renouvellements, première prescription d'APA, accès direct en structure coordonnée depuis janvier 2025, 100 % tarif sous ALD), et le DMP est accessible en urgence au SAMU 15 et aux hôpitaux sauf opposition.",
    sources: ['service-public.fr (IPA A18019, Mon espace santé F36151)', 'ameli.fr (IPA 2026)'],
    articleSlug: 'reseau-de-soins-et-aides-sociales-france',
    relevantModules: ['core'],
  },
  {
    id: 'q_fr_optam_c2s_mdph_ajpa',
    interlocutor: 'gp',
    topicFr: 'Mutuelle, OPTAM, C2S et droits MDPH',
    questionFr:
      'Mon cardiologue ou la clinique est-il en Secteur 1 ou OPTAM (puis-je recevoir un devis), ma mutuelle ou la C2S couvre-t-elle les frais hors ALD 100 % (franchises/FPU 2026), et un dossier MDPH (CMI, AAH, PCH avant 60 ans) ou congé de proche aidant (AJPA) serait-il utile ?',
    whyItMattersFr:
      "Même en ALD 100 %, restent dus (hors C2S) dépassements d'honoraires, forfait journalier (23 €/j), FPU ALD (9,96 €) et franchises/participations non couvertes par les mutuelles (jusqu'à 140 €/an depuis oct. 2026). Les anciennes cartes papier MDPH expirent le 31 décembre 2026 et l'AJPA requiert incapacité ≥ 80 %, APA ou invalidité cat. 3.",
    sources: ['ameli.fr (OPTAM, C2S, franchises 2026)', 'service-public.fr (CMI, AAH, PCH, AJPA)'],
    articleSlug: 'reseau-de-soins-et-aides-sociales-france',
    relevantModules: ['core'],
    triggeredByRules: ['FR_ALD_CHECK'],
  },
  {
    id: 'q_fr_directives_personne_confiance_had',
    interlocutor: 'cardiologist',
    topicFr: 'Directives anticipées, personne de confiance et HAD',
    questionFr:
      'Comment rédiger et déposer dans Mon espace santé mes directives anticipées (incluant une mention explicite sur la désactivation des chocs de DAI) et ma personne de confiance, et quelles ressources locales (EMSP, PPA, HAD 100 % ALD) existent si mes besoins augmentent ?',
    whyItMattersFr:
      "En France (Loi Claeys-Leonetti et Loi 2026-404), les directives anticipées ont une validité illimitée et engagent le médecin, le témoignage de la personne de confiance cosignée prévaut, et l'HAD est couverte à 100 % sous ALD sans forfait journalier ; pourtant 99 % des directives omettent la question du DAI.",
    sources: ['service-public.fr (F32010 / F32748 / F732)', 'CNSPFV (2026)', 'ESC 2026'],
    articleSlug: 'soins-de-support-et-anticipation',
    relevantModules: ['core', 'device'],
  },

  // --- Nouvelles thèses (Fer IV + iSGLT2, Potassium méditerranéen, CoQ10, Oméga-3, Décongestionnants) ---
  {
    id: 'q_thesis_iv_iron_tsat_phosphate',
    interlocutor: 'cardiologist',
    topicFr: 'Thèse : fer IV sous quadrithérapie et iSGLT2',
    questionFr:
      'Pour décider d’un fer intraveineux sous mon iSGLT2 et mon ARNI, vérifiez-vous surtout un CST < 20 % plutôt qu’une ferritine basse isolée ? En cas de cures répétées, quelle molécule (dérisomaltose ferrique vs carboxymaltose ferrique) et quel contrôle du phosphate prévoyez-vous ?',
    whyItMattersFr:
      "Les iSGLT2 et l'ARNI abaissent la ferritine par eux-mêmes ; le bénéfice sur les hospitalisations se concentre si CST < 20 % (IRONMAN, Anker 2025, Mandal 2026), et le carboxymaltose ferrique a provoqué 51,9 % d'hypophosphatémie modérée à sévère à J21 dans HEART-FID contre ~4–8 % sous dérisomaltose.",
    sources: ['FAIR-HF2 (2025)', 'HEART-FID phosphate (2025)', 'IRONMAN (Cleland 2024)', 'Mandal (2026)'],
    articleSlug: 'these-fer-iv-et-isglt2-quadritherapie',
    relevantModules: ['core'],
    triggeredByRules: ['IRON_DEFICIENCY_CHECK'],
  },
  {
    id: 'q_thesis_med_diet_potassium',
    interlocutor: 'cardiologist',
    topicFr: 'Thèse : régime méditerranéen et potassium',
    questionFr:
      'Compte tenu de mon DFGe et de ma kaliémie sous ARNI/IEC, ARM et iSGLT2, puis-je consommer librement les légumes, légumineuses et fruits frais d’une alimentation méditerranéenne tout en évitant strictement les sels de régime au KCl et les additifs potassiques cachés ?',
    whyItMattersFr:
      "Les recommandations rénales évitent la restriction aveugle des végétaux frais si le potassium est normal et iSGLT2/ARNI réduisent l'hyperkaliémie sévère, mais aucun ECR n'a validé un apport potassique illimité jusqu'à DFGe 30 (hausse dans Turban 2021) et les sels KCl ou charcuteries « réduites en sel » apportent un potassium très concentré.",
    sources: ['Turban (2021)', 'Neuen (2022)', 'KDIGO / KDOQI', 'RCP Entresto / ARM'],
    articleSlug: 'these-regime-mediterraneen-potassium-icfer',
    relevantModules: ['core', 'ckd'],
    triggeredByRules: ['POTASSIUM_ALERT'],
  },
  {
    id: 'q_thesis_coq10_modern_gdmt',
    interlocutor: 'cardiologist',
    topicFr: 'Thèse : CoQ10 sous quadrithérapie moderne',
    questionFr:
      'La coenzyme Q10 mérite-t-elle son coût en plus de ma quadrithérapie ou vaut-il mieux attendre les résultats des essais en cours (CORAL, DANUTRIO-HF), et peut-elle interférer avec la warfarine ou abaisser ma tension ?',
    whyItMattersFr:
      "Aucune étude achevée n'a encore démontré de bénéfice de la CoQ10 en ajout aux traitements modernes de l'insuffisance cardiaque, et ce complément peut diminuer l'efficacité de certains anticoagulants (warfarine).",
    sources: ['NIHR HTA (2022)', 'Cochrane (2021)', 'Q-SYMBIO (2014)', 'CORONA CoQ10 (2010)'],
    articleSlug: 'these-coq10-mortalite-icfer-moderne',
    relevantModules: ['core'],
  },
  {
    id: 'q_thesis_omega3_af_vs_fish',
    interlocutor: 'cardiologist',
    topicFr: 'Thèse : oméga-3 à faible dose et risque de FA',
    questionFr:
      'Manger du poisson gras deux fois par semaine est-il préférable aux gélules d’oméga-3, au vu de l’avertissement réglementaire sur la fibrillation atriale et de mes traitements antithrombotiques ?',
    whyItMattersFr:
      "Le surrisque de FA est net au-dessus de 1–1,5 g/jour (OMEMI, STRENGTH, REDUCE-IT) mais ne peut être exclu même à ≤ 1 g/jour (GISSI-HF FA, VITAL Rhythm), l'EMA/ANSM a inscrit la FA comme effet indésirable fréquent des esters éthyliques d'oméga-3, et le poisson gras alimentaire ne montre pas ce surrisque.",
    sources: ['EMA/ANSM (2023–2024)', 'GISSI-HF FA (2013)', 'VITAL Rhythm (2021)', 'OMEMI (2021)'],
    articleSlug: 'these-omega3-faible-dose-risque-fa',
    relevantModules: ['core', 'atrialFibrillation'],
  },
  {
    id: 'q_intx_herbs_decongestants_adhd',
    interlocutor: 'pharmacist',
    topicFr: 'Rhume, décongestionnants, plantes et stimulants',
    questionFr:
      'Que puis-je utiliser sans danger contre un rhume à la place de la pseudoéphédrine ou des comprimés combinés avec ibuprofène, et un produit à base de plantes (millepertuis, ginkgo, danshen, extrait de thé vert) ou un stimulant prescrit pour un TDAH est-il compatible avec mon ordonnance cardiaque ?',
    whyItMattersFr:
      "Depuis le 11 décembre 2024, toute la pseudoéphédrine orale est sur ordonnance (Liste I) en France pour risques d'infarctus et d'AVC ; le millepertuis diminue l'efficacité des AOD, de l'éplérénone et de l'atorvastatine ; le thé vert concentré réduit la digoxine ; et les stimulants TDAH nécessitent une coordination cardio-spécialiste.",
    sources: ['ANSM pseudoéphédrine (déc. 2024)', 'RCP EMA millepertuis / TDAH', 'Études interactions AOD-plantes'],
    articleSlug: 'cafeine-boissons-energisantes-et-stimulants',
    relevantModules: ['core'],
    triggeredByRules: ['CONTRAINDICATED_DRUG'],
  },

  // --- Détail par pilier thérapeutique, viabilité, DAI moderne et scores pronostiques ---
  {
    id: 'q_pillar_raas_arni_switch',
    interlocutor: 'cardiologist',
    topicFr: 'IEC, ARA2 et sacubitril/valsartan (ARNI)',
    questionFr:
      'Suis-je sous IEC, ARA2 ou sacubitril/valsartan (Entresto), à quelle distance de la dose cible suis-je, et un passage au sacubitril/valsartan est-il envisagé dans mon cas ?',
    whyItMattersFr:
      "Dans l'essai PARADIGM-HF, le sacubitril/valsartan a davantage réduit les décès cardiovasculaires et les hospitalisations que l'énalapril ; les recommandations européennes le proposent si des symptômes persistent, avec un délai impératif d'au moins 36 heures après l'arrêt d'un IEC (sans délai après un ARA2) pour éviter le risque d'angio-œdème.",
    sources: ['PARADIGM-HF (2014)', 'Recommandations ESC 2026', 'AHA/ACC/HFSA 2022'],
    articleSlug: 'iec-ara2-et-arni-sacubitril-valsartan',
    relevantModules: ['core'],
    triggeredByRules: ['GDMT_MISSING_PILLAR', 'ARNI_WASHOUT_INFO'],
  },
  {
    id: 'q_pillar_bb_molecule_and_hr',
    interlocutor: 'cardiologist',
    topicFr: 'Bêtabloquant : molécule, dose et rythme',
    questionFr:
      'Quel bêtabloquant est-ce que je prends, pourquoi celui-là, visez-vous une dose cible, une fréquence cardiaque de repos ou les deux, et une fibrillation atriale modifie-t-elle ce que l’on en attend ?',
    whyItMattersFr:
      "Seuls le bisoprolol, le carvédilol et le métoprolol succinate ont démontré une réduction de la mortalité dans l'insuffisance cardiaque à FEVG réduite ; en fibrillation atriale, le bénéfice porte surtout sur le contrôle de la fréquence cardiaque, et le pouls est contrôlé après chaque palier.",
    sources: ['Recommandations ESC 2026', 'NICE NG106', 'Kotecha (2014)'],
    articleSlug: 'betabloquants-insuffisance-cardiaque',
    relevantModules: ['core', 'atrialFibrillation'],
    triggeredByRules: ['GDMT_MISSING_PILLAR'],
  },
  {
    id: 'q_pillar_mra_labs_and_switch',
    interlocutor: 'cardiologist',
    topicFr: 'ARM (spironolactone ou éplérénone) et bilans',
    questionFr:
      'Quand mes bilans de potassium et de fonction rénale sont-ils prévus après le début ou l’ajustement de ma spironolactone ou de mon éplérénone, qui agit sur les résultats, et quel taux modifierait la dose ?',
    whyItMattersFr:
      "Une hausse du potassium au-dessus de 5,5 mmol/L est plus fréquente sous spironolactone ou éplérénone ; des prises de sang régulières (environ 1 semaine, 1 mois, puis tous les quelques mois) permettent d'ajuster la dose en sécurité et d'éviter les hospitalisations pour hyperkaliémie.",
    sources: ['RALES (1999)', 'EPHESUS (2003)', 'EMPHASIS-HF (2011)', 'ESC 2026'],
    articleSlug: 'arm-steroidiens-spironolactone-eplerenone',
    relevantModules: ['core', 'ckd'],
    triggeredByRules: ['POST_TITRATION_LABS', 'POTASSIUM_ALERT'],
  },
  {
    id: 'q_pillar_sglt2_egfr_dip_and_thrush',
    interlocutor: 'gp',
    topicFr: 'Inhibiteur du SGLT2 : reins et effets indésirables',
    questionFr:
      'Si mon débit de filtration rénale (DFGe) baisse légèrement après le début de mon inhibiteur du SGLT2 (dapagliflozine ou empagliflozine), s’agit-il de la baisse initiale attendue ? Que faire en cas de mycose génitale et quels signes imposeraient un avis urgent ?',
    whyItMattersFr:
      "Une petite baisse initiale de 3 à 4 points du DFGe est attendue avec les inhibiteurs du SGLT2 et ne signifie pas une aggravation rénale. Les mycoses génitales bénignes sont l'effet indésirable le plus courant et se traitent facilement, tandis qu'une douleur, une rougeur intense ou une fièvre dans la zone génitale nécessitent un avis médical urgent.",
    sources: ['DAPA-HF (Adamson 2022)', 'EMPEROR-Reduced', 'RCP européens Forxiga / Jardiance'],
    articleSlug: 'inhibiteurs-sglt2-insuffisance-cardiaque',
    relevantModules: ['core', 'ckd', 'diabetes'],
    triggeredByRules: ['CREATININE_JUMP'],
  },
  {
    id: 'q_viability_purpose_and_scar',
    interlocutor: 'cardiologist',
    topicFr: 'Viabilité myocardique et cicatrice',
    questionFr:
      'Si un examen de viabilité myocardique (IRM cardiaque, échographie sous dobutamine, scintigraphie ou TEP) est proposé ou déjà réalisé, quelle décision doit-il éclairer : une revascularisation (pontage ou stent) ou l’évaluation du pronostic et des chances de remontée de ma FEVG ?',
    whyItMattersFr:
      "Dans les grands essais cliniques (STICH pour le pontage, REVIVED-BCIS2 pour les stents), la quantité de muscle viable n'a pas permis de prédire qui vivrait plus longtemps après une intervention, alors que l'étendue de la cicatrice à l'IRM aide à estimer le pronostic et la probabilité de récupération de la FEVG.",
    sources: ['STICH viabilité (Panza 2019)', 'REVIVED-BCIS2 viabilité (2023)', 'ESC 2026'],
    articleSlug: 'viabilite-myocardique',
    relevantModules: ['core'],
  },
  {
    id: 'q_thesis_viability_cabg_decision',
    interlocutor: 'cardiologist',
    topicFr: 'Thèse : viabilité et survie après pontage',
    questionFr:
      'Si un pontage aorto-coronarien est discuté, comment un résultat de viabilité plus élevé ou plus faible modifierait-il l’avis de la Heart Team, et un test d’ischémie d’effort changerait-il la décision ?',
    whyItMattersFr:
      "Dans l'essai STICH, le pontage a amélioré la survie à long terme quel que soit le degré de viabilité ou d'ischémie au test d'effort, même si les groupes ayant peu de muscle viable étaient de petite taille ; la décision repose donc sur l'ensemble du dossier en Heart Team.",
    sources: ['STICH viabilité (Panza 2019)', 'STICH ischémie', 'ESC 2026'],
    articleSlug: 'these-viabilite-et-survie-revascularisation',
    relevantModules: ['core'],
  },
  {
    id: 'q_thesis_icd_modern_gdmt_dilemma',
    interlocutor: 'cardiologist',
    topicFr: 'Thèse : DAI sous quadrithérapie moderne',
    questionFr:
      'Sous quadrithérapie moderne, comment évaluez-vous le bénéfice d’un DAI préventif dans mon cas (et en cas de cause mixte ischémique et non ischémique), et les essais en cours PROFID-EHRA ou DILEMMA (AP-HP, dès 70 ans) pourraient-ils me concerner ?',
    whyItMattersFr:
      "Les essais historiques du DAI (MADIT-II, SCD-HeFT) datent d'avant le sacubitril/valsartan et les inhibiteurs du SGLT2 ; le risque de mort subite a baissé sous traitements modernes sans disparaître, et le DAI reste recommandé en attendant les résultats de PROFID-EHRA (fin 2027) et DILEMMA (2030).",
    sources: ['MADIT-II (8 ans)', 'DANISH (13 ans)', 'Protocole PROFID-EHRA (2026)', 'DILEMMA (AP-HP)'],
    articleSlug: 'these-benefice-dai-sous-quadritherapie',
    relevantModules: ['core', 'device'],
    triggeredByRules: ['ICD_REASSESSMENT_3M'],
  },
  {
    id: 'q_prognosis_risk_scores_maggic',
    interlocutor: 'cardiologist',
    topicFr: 'Scores pronostiques (MAGGIC, Seattle)',
    questionFr:
      'Si un score pronostique (comme le score MAGGIC ou le Seattle Heart Failure Model) est utilisé dans mon dossier, que peut-il nous apprendre et quelles sont ses limites ?',
    whyItMattersFr:
      "Ces scores classent assez bien les groupes de patients entre risque plus faible et plus élevé, mais ils ont été construits avant l'arrivée du sacubitril/valsartan et des inhibiteurs du SGLT2 ; leurs pourcentages restent des moyennes statistiques et non une prédiction individuelle.",
    sources: ['MAGGIC (Pocock 2013)', 'Seattle Heart Failure Model (Levy 2006)', 'Codina (2021)'],
    articleSlug: 'cardiomyopathie-ischemique',
    relevantModules: ['core'],
  },
];
