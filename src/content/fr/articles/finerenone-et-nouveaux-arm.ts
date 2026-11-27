import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'finerenone-et-nouveaux-arm',
  sourceWikiPath: 'wiki/concepts/finerenone-and-newer-mras.md',
  titleFr: 'Finérénone, nouveaux ARM et chélateurs de potassium',
  category: 'traitements',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium-high',
  volatility: 'hot',
  tags: [
    'finérénone',
    'arm',
    'arm-non-stéroïdien',
    'hyperkaliémie',
    'chélateur-potassium',
    'patiromer',
    'finearts-hf',
    'finality-hf',
  ],
  aliases: [
    'Finérénone',
    'Kerendia',
    'ARM non stéroïdien',
    'nsMRA',
    'Chélateurs de potassium',
    'Patiromer',
    'Veltassa',
    'Cyclosilicate de zirconium sodique',
    'Lokelma',
    'FINEARTS-HF',
    'FINALITY-HF',
  ],
  linkedModules: ['ckd', 'diabetes'],
  plainSummaryFr:
    "Les antagonistes des récepteurs minéralocorticoïdes (ARM) forment l'un des quatre piliers du traitement de l'insuffisance cardiaque. Les deux molécules historiques — la spironolactone et l'éplérénone — ont démontré leur capacité à prolonger la vie et à éviter les hospitalisations dans l'ICFER. La finérénone est un ARM non stéroïdien plus récent, sans effet de gonflement des seins ; elle élève néanmoins le potassium (environ deux fois plus souvent qu'un placebo), et un éventuel avantage sur ce point par rapport aux ARM anciens ne repose que sur de petites études courtes. Ses grands essais ont porté sur des FEVG d'au moins 40 % ou sur le diabète de type 2 avec maladie rénale chronique (en excluant l'ICFER symptomatique). Autour de 35 % de FEVG, elle n'est pas encore prouvée (essai FINALITY-HF attendu vers 2028) : l'ESC 2026 désigne donc toujours la spironolactone ou l'éplérénone en ICFER. Si le potassium monte sous ARM, un chélateur de potassium peut aider à maintenir le traitement, sans preuve directe de bénéfice sur la survie.",
  sections: [
    {
      headingFr: 'Où la finérénone a-t-elle été évaluée ?',
      bodyMarkdownFr: `| Essai | Population | Résultat | Applicable à une FEVG autour de 35 % ? |
|---|---|---|---|
| **FINEARTS-HF** (NEJM, 2024) | **6 001 patients** avec IC et **FEVG ≥ 40 %** (moyenne ~52 %). Les patients dont la FEVG avait été < 40 % puis s'était **améliorée** à ≥ 40 % pouvaient être inclus (leur effectif et leurs résultats séparés ne figurent pas dans les articles consultés) | Total des aggravations d'IC + décès CV réduit de **16 %** (rapport de taux **0,84** ; IC 0,74–0,95). Décès CV seul non réduit (**HR 0,93**, non significatif). Analyse post hoc chez les **15 %** présentant une IC « sévère » (symptômes marqués + hospitalisation récente, non une FEVG basse) : même effet relatif (**RR 0,85** ; IC 0,66–1,09, non significatif isolément) | **Non** (FEVG trop basse pour les critères de l'essai) ; plus proche si la FEVG remonte à ≥ 40 % |
| **FIDELIO-DKD**, **FIGARO-DKD** ; analyse poolée **FINE-HEART** (Nature Medicine, 2024) | **18 991 patients** : **63 %** avaient un diabète de type 2 avec MRC **sans IC**. Les deux essais rénaux **excluaient l'ICFER symptomatique** (FEVG non rapportée dans l'article poolé) ; l'essai IC inclus était FINEARTS-HF (FEVG ≥ 40 %) | Critère principal (décès CV) **non réduit significativement** (**HR 0,89** ; IC 0,78–1,01). Moins d'hospitalisations pour IC (**HR 0,83**) et mortalité toutes causes (**HR 0,91** ; IC 0,84–0,99, critère secondaire sans correction pour tests multiples). Le bénéfice rénal (**HR 0,80**) provenait des essais rénaux ; dans FINEARTS-HF seul, le critère rénal n'était pas réduit (**HR 1,30** ; IC 0,92–1,84) | **Non** : aucun patient avec ICFER symptomatique n'y participait. Pertinent uniquement pour le diabète de type 2 avec MRC ou une FEVG ≥ 40 % |
| **ARTS** (2013) | Phase 2, **392 patients** avec ICFER et MRC légère ou modérée (selon les sources) ; finérénone 5–10 mg vs spironolactone 25–50 mg | Hausses de potassium moindres qu'avec la spironolactone ; hyperkaliémie **5,3 % contre 12,7 %** | Population directe mais étude petite et courte (chiffres issus d'une note de résumé, non du texte intégral) |
| **ARTS-HF** (EHJ, 2016) | Phase 2b, **1 066 patients hospitalisés** pour ICFER en aggravation (FEVG moyenne **29 %**), tous atteints de diabète de type 2 et/ou de MRC (**64 %** avec cardiopathie ischémique listée comme comorbidité, et non comme cause déclarée de l'IC) ; 90 jours ; 5 doses de finérénone vs éplérénone | Baisse du NT-proBNP > 30 % comparable à l'éplérénone (**31–39 % contre 37 %**). Potassium ≥ 5,6 mmol/L chez **4,3 %** au total, similaire entre bras ; hausse moyenne un peu moindre sous finérénone. Moins de décès, hospitalisations CV ou visites urgentes pour IC sur une dose (10→20 mg ; **HR 0,56** ; IC 0,35–0,90), mais résultat exploratoire parmi 5 doses sans correction statistique et avec éplérénone souvent sous-dosée | Population la plus proche, mais étude de biomarqueur sur 90 jours ne pouvant pas démontrer de bénéfice sur la survie ou les hospitalisations |
| **FINALITY-HF** (en cours) | Environ **2 600 patients** avec ICFER ne pouvant pas prendre ou ne tolérant pas la spironolactone ou l'éplérénone | Pas encore de résultats ; fin d'étude enregistrée en **janvier 2028** | Directement applicable dès publication des résultats |
| **REDEFINE-HF**, **CONFIRMATION-HF** (en cours) | IC hospitalisée : FEVG ≥ 40 % (REDEFINE-HF) ; association précoce finérénone + empagliflozine sans seuil de FEVG listé (CONFIRMATION-HF) | Pas encore de résultats ; fin prévue vers **fin 2027** | Partiellement |

À ce jour, les seuls résultats randomisés de la finérénone dans l'ICFER proviennent de ces deux études de phase 2 (**ARTS** et **ARTS-HF**) ; aucun essai pronostique sous 40 % de FEVG n'a encore livré ses résultats. *(Un erratum d'auteur de FINE-HEART ne corrige que la ligne sur la fibrillation atriale incidente, sans changer aucune conclusion.)*

Une autre analyse exploratoire post hoc de **FINEARTS-HF** (FEVG ≥ 40 %, moyenne 53 %, **5 851 patients**) selon un indice estimé d'insulinorésistance (tour de taille, HbA1c, hypertension) a montré qu'une insulinorésistance plus marquée s'accompagnait de davantage d'événements d'IC, de décès et de nouveaux diabètes, mais que l'effet de la finérénone restait comparable dans les deux moitiés (**rapport de taux 0,85 contre 0,80** ; p d'interaction = 0,64) avec une tolérance identique. Ces données **ne constituent pas une preuve en ICFER**.`,
    },
    {
      headingFr: 'Ce que disent les recommandations et les autorisations (AMM)',
      bodyMarkdownFr: `- **ESC 2026 (insuffisance cardiaque) :** un ARM est recommandé en **Classe I, Niveau A** dans l'insuffisance cardiaque symptomatique quelle que soit la FEVG. Pour l'**ICFER** (désormais définie par une FEVG < 50 % dans l'ESC 2026), la recommandation précise un **ARM stéroïdien** — spironolactone (*Aldactone*) ou éplérénone (*Inspra*). Pour l'IC à FEVG préservée (HFpEF), l'un ou l'autre type est possible.
- **ESC 2026 (diabète et maladie rénale chronique) :** la finérénone (*Kerendia*) est recommandée en **Classe I, Niveau A** pour réduire le risque d'insuffisance cardiaque chez les patients atteints de **diabète de type 2 et de maladie rénale chronique**, quelle que soit la FEVG (reprise de la mise à jour 2023). Les essais rénaux qui fondent cette recommandation (**FIDELIO-DKD**, **FIGARO-DKD**) excluaient toutefois les personnes atteintes d'ICFER symptomatique.
- **Autorisations de mise sur le marché (AMM) :** la FDA américaine a approuvé la finérénone dans l'insuffisance cardiaque avec **FEVG ≥ 40 %** en **juillet 2025** ; l'AMM européenne (EMA) mentionne également l'insuffisance cardiaque avec **FEVG ≥ 40 %**.
- **NICE (Royaume-Uni) :** la finérénone est retenue comme option dans l'insuffisance cardiaque à FEVG modérément réduite ou préservée (**NICE TA1182**, publiée le 5 août 2026), mais pas dans l'ICFER.
- **Recommandations américaines (AHA/ACC/HFSA 2022) :** antérieures à FINEARTS-HF, elles ne couvrent pas la finérénone dans l'insuffisance cardiaque.
- **Décalage de frontière à connaître :** l'ESC 2026 regroupe la tranche **40–49 %** dans l'ICFER et y désigne les ARM stéroïdiens, tandis que les AMM de la finérénone couvrent les **FEVG ≥ 40 %**. Cette distinction joue surtout si la FEVG s'améliore pour entrer dans cette zone.`,
    },
    {
      headingFr: 'Comment la finérénone se distingue de la spironolactone et de l’éplérénone',
      bodyMarkdownFr: `- **Potassium (kaliémie) :** tous les ARM peuvent élever le potassium, y compris la finérénone.
  - *Contre placebo :* dans **FINEARTS-HF** (FEVG ≥ 40 %), une kaliémie **> 5,5 mmol/L** est survenue chez **14,3 %** des patients sous finérénone contre **6,9 %** sous placebo ; l'arrêt pour hyperkaliémie a concerné **1,7 % contre 0,6 %**. Dans les sous-groupes post hoc, le taux était de **13,8 % contre 6,5 %** sans IC sévère et **17,3 % contre 9,4 %** avec IC sévère. Sur les **18 991 patients** de **FINE-HEART** (majoritairement diabète avec MRC), une kaliémie > 5,5 mmol/L touchait **16,5 % contre 7,7 %**, > 6,0 mmol/L **3,3 % contre 1,4 %**, et une hospitalisation pour hyperkaliémie **0,8 % contre 0,2 %**, sans aucun décès lié au potassium.
  - *Contre les ARM anciens :* dans **ARTS-HF** (ICFER hospitalisée avec diabète et/ou MRC), une kaliémie ≥ 5,6 mmol/L était comparable entre finérénone et éplérénone (**4,3 %** au global), avec une hausse moyenne un peu plus faible sous finérénone (**+0,12 à +0,20 contre +0,26 mmol/L**). La plus petite étude **ARTS** avait observé moins d'hyperkaliémies qu'avec la spironolactone (**5,3 % contre 12,7 %**). Aucun essai pronostique direct face à face n'existe.
- **Effets hormonaux et mammaires :** la spironolactone peut provoquer un gonflement ou une sensibilité des seins (gynécomastie, y compris chez l'homme), des troubles de l'érection et une baisse de libido. La finérénone n'a pas ces effets anti-hormonaux : dans **FINE-HEART**, une gynécomastie était rapportée chez **0,2 %** des patients sous finérénone comme sous placebo. Dans l'ICFER, l'**éplérénone** reste l'alternative établie lorsque ces effets surviennent sous spironolactone.
- **Fonction rénale :** une petite baisse initiale du DFGe (environ **2 à 3 mL/min**) est attendue et n'était pas associée à un moins bon pronostic. Une protection rénale a été démontrée dans le diabète avec MRC (**FIDELIO-DKD**, **FIGARO-DKD**), mais pas dans l'insuffisance cardiaque : dans **FINEARTS-HF**, le critère rénal était numériquement plus fréquent sous finérénone (**HR 1,30** ; IC 0,92–1,84, non significatif).
- **Tension artérielle :** des mesures tensionnelles basses (pression artérielle systolique < 100 mmHg) étaient plus fréquentes sous finérénone (**11,1 % contre 7,0 %** dans **FINE-HEART**).
- **Association avec un iSGLT2 :** le bénéfice observé dans FINEARTS-HF se maintenait chez les patients recevant déjà un iSGLT2.
- **Coût (repère américain) :** environ **700 USD par mois** aux États-Unis, contre environ **10 USD** pour la spironolactone générique (les conditions tarifaires et de remboursement en France sont distinctes et encadrées par la HAS et l'Assurance Maladie).
- **Posologie (tableau ESC) :** **10 à 20 mg/j** si le DFGe est ≤ 60 mL/min/1,73 m² ; **20 à 40 mg/j** si le DFGe est > 60 mL/min/1,73 m².`,
    },
    {
      headingFr: 'Quand le potassium monte : les chélateurs de potassium',
      bodyMarkdownFr: `- Les **chélateurs de potassium** — **patiromer (*Veltassa*)** et **cyclosilicate de zirconium sodique ou ZS-9 (*Lokelma*)** — sont des poudres prises par voie orale qui captent le potassium dans le tube digestif pour l'éliminer dans les selles.
- **Essai DIAMOND (EHJ, 2022, texte intégral) :** principal essai d'un chélateur dans une population proche de la cardiomyopathie ischémique — **FEVG ≤ 40 %** (moyenne **33,5 %**), environ **71 %** d'insuffisance cardiaque ischémique, avec hyperkaliémie sous traitement ou réduction de dose antérieure pour hyperkaliémie (patients avec DFGe < 30 ou PAS < 90 mmHg exclus).
  - *Schéma en deux temps (sevrage randomisé) :* tous les participants ont d'abord reçu du patiromer jusqu'à 12 semaines pendant que leur ARM était monté à **50 mg** (spironolactone ou éplérénone) et leur IEC/ARA2/ARNI à au moins la moitié de la dose cible. **1 195** ont débuté cette phase, **1 038** l'ont terminée et **878** ont atteint les cibles (**84,6 %** des personnes ayant achevé la phase initiale, soit environ **73 %** de l'ensemble de départ — l'écart incluant des interruptions sans rapport avec la tolérance, dont 46 durant la 1re vague de COVID-19 et 98 à la clôture des inclusions). Les 878 patients ont ensuite été randomisés pour **poursuivre le patiromer ou passer au placebo**.
  - *Résultats sur environ 6 mois :* la kaliémie a légèrement moins augmenté sous patiromer (différence de **0,10 mmol/L**), moins de patients ont dépassé **5,5 mmol/L** (**13,9 % contre 19,4 %**, **HR 0,63**) et moins ont dû réduire ou arrêter leur ARM (**13,9 % contre 18,9 %**, **HR 0,62**). En contrepartie, l'**hypokaliémie** était plus fréquente sous patiromer (**15,0 % contre 10,7 %**), ce qui impose de poursuivre les bilans sanguins.
  - *Ce qui n'a pas été démontré :* conçu initialement pour évaluer les décès cardiovasculaires et les hospitalisations, DIAMOND a vu son critère principal **modifié durant le COVID-19** pour la variation du potassium sanguin. Les décès ont été peu nombreux et numériquement plus élevés sous patiromer (**22 contre 16** ; **HR 1,39** ; IC 0,73–2,66, non significatif ; hospitalisations pour IC **17 contre 20**). L'essai ne permet donc pas d'affirmer que le patiromer prolonge la vie ou réduit les hospitalisations.
- **ESC 2026 :** les chélateurs de potassium peuvent être utilisés pour traiter ou prévenir l'hyperkaliémie afin de maintenir les ARM et autres bloqueurs du SRAA, mais les recommandations soulignent que leur **bénéfice sur les événements cliniques reste incertain** ; un essai (**REALIZE-K**) a par ailleurs montré un signal de davantage d'aggravations d'insuffisance cardiaque avec le cyclosilicate de zirconium sodique.
- **Recommandations américaines (AHA/ACC/HFSA 2022) :** chélateurs de potassium classés en **Classe 2b**.
- **Règle de sécurité ESC sur les ARM (repère clinicien) :** prudence avant d'initier un ARM si le DFGe est **< 25 mL/min/1,73 m²** ou si la kaliémie est **≥ 5,0 mmol/L** ; réduire ou suspendre si la kaliémie dépasse **5,5 mmol/L**.`,
    },
    {
      headingFr: 'Ce que cela signifie pour une cardiomyopathie ischémique autour de 35 % de FEVG',
      bodyMarkdownFr: `- À **35 % de FEVG**, la finérénone serait **hors AMM et non prouvée** sur les événements d'insuffisance cardiaque. À ce niveau de FEVG, les preuves de survie appartiennent aux ARM stéroïdiens : la **spironolactone** (essai **RALES**) et l'**éplérénone** (essais **EMPHASIS-HF**, et **EPHESUS** après un infarctus du myocarde) — voir *ARM stéroïdiens : spironolactone et éplérénone*.
- La finérénone est appuyée par les recommandations dans deux contextes précis : le **diabète de type 2 associé à une maladie rénale chronique** (pour réduire le risque d'insuffisance cardiaque — sachant que les essais rénaux excluaient l'ICFER symptomatique) ou, selon son AMM, lorsque la **FEVG remonte à 40 % ou plus** (FINEARTS-HF a accepté les FEVG améliorées à ≥ 40 %, mais sans résultats publiés séparément pour ce sous-groupe dans les articles consultés).
- Si une hyperkaliémie empêche d'atteindre ou de maintenir une pleine dose de spironolactone ou d'éplérénone, **DIAMOND** (majoritairement ischémique, FEVG moyenne ~33 %) montre qu'un chélateur peut aider à conserver l'ARM ; tout bénéfice de survie repose sur l'ARM lui-même, et non sur une preuve issue de DIAMOND.
- Pour les personnes ne pouvant pas prendre la spironolactone ou l'éplérénone, la situation pourra évoluer lors de la publication de **FINALITY-HF** (attendue vers 2027–2028) ; le statut actualisé au 25 novembre 2026 de **FINALITY-HF** et de **BalanceD-HF** (balcinrénone + dapagliflozine) est détaillé dans *Essais cliniques en cours et à suivre*.
- En présence d'effets hormonaux gênants sous spironolactone, le passage à l'**éplérénone** constitue l'option validée dans l'ICFER, à discuter avec votre cardiologue.`,
    },
  ],
  relatedArticleSlugs: [
    'arm-steroidiens-spironolactone-eplerenone',
    'maladie-renale-insuffisance-cardiaque',
    'diabete-insuffisance-cardiaque',
    'essais-cliniques-en-cours-et-a-suivre',
    'medicaments-insuffisance-cardiaque',
    'traitements-additionnels-nouveaux',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'medicaments-effets-secondaires-suivi',
    'interactions-complements-aliments-medicaments',
    'maladies-associees',
    'essais-cliniques-cles',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 sur l’insuffisance cardiaque',
      detail: 'Définition de l’ICFER, formulation ARM stéroïdien vs finérénone, diabète avec MRC, posologies et chélateurs de potassium',
    },
    {
      label: 'FINEARTS-HF (NEJM, 2024 ; sous-analyses IC sévère et insulinorésistance EJHF, 2025, textes intégraux)',
      detail: 'Finérénone à FEVG ≥ 40 % (dont FEVG améliorée), taux d’hyperkaliémie par sous-groupe et analyse exploratoire sur l’insulinorésistance',
    },
    {
      label: 'FINE-HEART (Nature Medicine, 2024, texte intégral et erratum auteur) et ARTS / ARTS-HF (EHJ, 2016, texte intégral)',
      detail: 'Absence d’ICFER symptomatique dans FINE-HEART, résultats rénaux et tensionnels, et données de phase 2 sur 90 jours en ICFER',
    },
    {
      label: 'Registres d’essais cliniques (FINALITY-HF, REDEFINE-HF, CONFIRMATION-HF)',
      detail: 'Essais en cours sur la finérénone dans l’insuffisance cardiaque (échéances 2027–2028)',
    },
    {
      label: 'DIAMOND (EHJ, 2022, texte intégral) et REALIZE-K',
      detail: 'Schéma de sevrage randomisé du patiromer, modification du critère principal, hypokaliémie, décès et signal ZS-9',
    },
    {
      label: 'Revue ACC 2026, NICE NG106 / TA1182 (2026) et AHA/ACC/HFSA 2022',
      detail: 'AMM FDA/EMA, évaluation NICE, comparaisons d’hyperkaliémie, coût et classe 2b des chélateurs aux États-Unis',
    },
    {
      label: 'Beldhuis et al. (2022), heartfailurematters.org et livret Guy’s and St Thomas’',
      detail: 'Effets secondaires hormonaux des ARM et suivi cardiorénal',
    },
  ],
  disclaimerType: 'medical',
};
