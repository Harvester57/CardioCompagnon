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
      "Les quatre piliers constituent le socle de Classe I des recommandations ESC 2026 dans l'ICFER ; chaque classe agit par une voie complémentaire.",
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
      "Un BBG avec QRS ≥ 150 ms chez un patient à FEVG ≤ 35 % est une indication de Classe I de resynchronisation (CRT), qui améliore à la fois les symptômes et la survie.",
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
      "En prévention secondaire coronaire, l'ESC recommande un LDL < 0,55 g/L (1,4 mmol/L) et une réduction ≥ 50 % par rapport au taux initial (Classe I), avec une escalade par étapes.",
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
      "L'ESC 2026 recommande de poursuivre le traitement de fond après amélioration (Classe I ; risque de rechute dans TRED-HF) et appelle « rémission » toute FEVG améliorée, alors que la Définition universelle 2026 réserve ce mot à une FEVG revenue à la normale.",
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
    topicFr: 'Poids, obésité et traitements',
    questionFr:
      "Mon poids doit-il être jugé sur l'IMC seul ou aussi sur le tour de taille ? En cas d'obésité, un traitement de perte de poids comme le sémaglutide ou le tirzépatide aiderait-il ou nuirait-il à mon cœur ?",
    whyItMattersFr:
      "La HFA 2025 propose d'ajouter le rapport tour de taille / taille à l'IMC. Les bénéfices cardiaques de ces molécules ne sont prouvés que dans l'IC à FEVG préservée (SUMMIT : HR 0,62) ; dans l'ICFER, les données sont limitées et mitigées (LIVE : 12 événements cardiaques graves contre 3 sous liraglutide) et leur sécurité reste débattue.",
    sources: ['Déclaration HFA obésité (2025)'],
    articleSlug: 'poids-obesite-et-denutrition',
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
    id: 'q_diet_herbs_taichi',
    interlocutor: 'pharmacist',
    topicFr: 'Plantes médicinales et Tai-Chi',
    questionFr:
      "On m'a proposé un produit à base de plantes médicinales ou du Tai-Chi : l'un ou l'autre est-il utile, et les plantes risquent-elles d'interagir avec mon ordonnance ?",
    whyItMattersFr:
      "Une revue parapluie (Chua 2025) retrouve un niveau de certitude modéré en faveur du Tai-Chi sur les hospitalisations (RR 0,47 sur 3 petits essais). Les produits à base de plantes reposent surtout sur de petits essais chinois et comportent des risques d'interactions ou de toxicité (ginseng, danshen avec anticoagulants, racine d'aconit cardiotoxique, Pueraria augmentant le potassium).",
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
      "L'ESC 2026 recommande l'IRM (Classe I) si la cause est incertaine ; une fibrose médio-pariétale oriente vers une cardiomyopathie non ischémique ou une double pathologie.",
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
];
