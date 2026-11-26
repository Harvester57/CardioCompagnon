import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'apnee-du-sommeil-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/concepts/sleep-apnoea-in-heart-failure.md',
  titleFr: 'Apnée du sommeil et insuffisance cardiaque',
  category: 'comorbidites',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'apnée-du-sommeil',
    'saos',
    'sacs',
    'ppc',
    'cpap',
    'asv',
    'serve-hf',
    'advent-hf',
    'comorbidités',
    'dépistage',
    'stop-bang',
    'polygraphie',
    'polysomnographie',
  ],
  aliases: [
    'Apnée du sommeil',
    'Troubles respiratoires du sommeil',
    'SAOS',
    'SACS',
    'OSA',
    'CSA',
    'Respiration de Cheyne-Stokes',
    'CPAP',
    'PPC',
    'Servo-ventilation adaptative',
    'ASV',
    'SERVE-HF',
    'ADVENT-HF',
  ],
  linkedModules: ['sleepApnoea'],
  plainSummaryFr:
    "Plus d'un tiers des personnes atteintes d'insuffisance cardiaque présentent des apnées du sommeil, souvent sans ressentir de somnolence dans la journée. Il existe deux formes très différentes : l'apnée obstructive (SAOS, fermeture des voies aériennes) et l'apnée centrale (SACS, pauses du signal respiratoire cérébral, souvent liée au contrôle de l'insuffisance cardiaque). Un enregistrement du sommeil (polysomnographie) est indispensable pour les distinguer. La PPC (masque à pression positive continue) améliore le sommeil et la qualité de vie mais n'a pas démontré de baisse de la mortalité. Surtout, la servo-ventilation adaptative (ASV) a augmenté les décès dans l'ICFER avec SACS prédominant (SERVE-HF) et n'y est pas recommandée (ESC 2026 Classe III, A).",
  sections: [
    {
      headingFr: 'Fréquence et distinction entre apnée obstructive et apnée centrale',
      bodyMarkdownFr: `Dans l'apnée du sommeil, la respiration s'interrompt ou devient très superficielle de manière répétée pendant la nuit :

- **Apnée obstructive (SAOS) :** la gorge se ferme alors que le corps continue d'essayer de respirer.
- **Apnée centrale (SACS), souvent associée à une respiration de Cheyne-Stokes** (alternance de respirations croissantes puis décroissantes suivies d'une pause) : le cerveau interrompt brièvement la commande respiratoire. Cette forme reflète étroitement le degré de contrôle de l'insuffisance cardiaque.

**Quelques repères chiffrés :**

- **ESC 2026 :** les troubles respiratoires du sommeil concernent **plus d'un tiers** des personnes atteintes d'insuffisance cardiaque, et une proportion encore plus élevée lors d'une hospitalisation pour décompensation.
- **Revue Pec et Arzt (2025) :** les formes modérées à sévères touchent **un tiers à la moitié** des patients IC (le SAOS étant globalement plus fréquent que le SACS), et environ deux tiers des patients hospitalisés pour IC aiguë au seuil habituel d'un IAH ≥ 15/heure.
- **IAH (index d'apnées-hypopnées) :** nombre de pauses ou baisses respiratoires par heure de sommeil. Il est normal en dessous de 5/h, modéré entre 15 et 30/h et sévère au-delà de 30/h ; les essais dans l'IC incluaient généralement dès 15/h (SERVE-HF ; ADVENT-HF ; HAS 2014). Le décompte dépend toutefois de la définition retenue pour une hypopnée (respiration superficielle) : le tableau de la prise de position de l'AHA (2021) a dû être corrigé en 2022 pour préciser que sa règle alternative d'hypopnée correspond à une chute de débit aérien ≥ 30 % avec désaturation en oxygène de 4 %, et non 50 %. Une règle plus stricte compte moins d'événements et produit un IAH plus bas (AHA 2021 texte intégral ; erratum AHA 2022).
- **Dans l'ICFER, l'apnée centrale peut représenter la majorité des cas.** La prise de position de l'AHA cite une méta-analyse portant sur 2 570 patients en ICFER atteints d'apnée du sommeil modérée à sévère dans laquelle plus de 70 % présentaient une apnée majoritairement centrale, tout en relevant que d'autres études observaient des proportions à peu près équilibrées (AHA 2021 texte intégral). Dans DASAP-HF (FEVG ≤ 35 %), la moitié des cas sévères étaient majoritairement centraux (DASAP-HF texte intégral).
- **Optimiser d'abord le cœur en cas de SACS :** l'optimisation des médicaments de l'insuffisance cardiaque, et lorsqu'elles sont indiquées une resynchronisation (CRT) ou une réparation mitrale, peuvent réduire les apnées centrales (Pec et Arzt 2025 ; AASM 2025).`,
    },
    {
      headingFr: 'Dépistage et diagnostic',
      bodyMarkdownFr: `- **ESC 2026 :** lorsqu'un trouble respiratoire du sommeil est suspecté, une **polysomnographie** nocturne doit être réalisée pour déterminer si les apnées sont principalement centrales ou obstructives. L'ESC ne recommande aucun questionnaire de dépistage.
- **Recommandations américaines (2022, via Pec et Arzt 2025) :** conseillent une étude du sommeil formelle en cas de suspicion (classes numériques non vérifiées dans le texte original).
- **American Heart Association (2021, texte intégral) :** juge raisonnable une évaluation formelle du sommeil dans l'IC en classe NYHA II à IV en cas de suspicion ou de somnolence diurne marquée, afin de distinguer apnée obstructive et apnée centrale. Elle cite également l'angor nocturne, les arythmies nocturnes et les chocs appropriés de DAI comme indices incitant à rechercher une apnée du sommeil. Ce même document évalue mal les questionnaires en dépistage : STOP-Bang, Berlin et STOP détectent 77 à 89 % des cas mais n'écartent correctement que 32 à 34 % des personnes sans apnée, et le score d'Epworth ne repère que 42 % des cas ; il avertit que ces outils peuvent être moins fiables en cas d'insuffisance cardiaque ou de fibrillation atriale.

### Questionnaires, enregistrements à domicile et algorithmes de DAI

| Outil | Principe | Performance observée chez les patients cardiaques |
|---|---|---|
| **Échelle de somnolence d'Epworth** | Questionnaire sur la tendance à s'assoupir en journée | Ne corrélait **pas du tout** avec l'apnée du sommeil chez 85 patients cardiaques : un score élevé était aussi fréquent avec apnée (34 %) que sans apnée (32 %) |
| **STOP-Bang** | Court questionnaire oui/non | Détectait 97 % des cas mais signalait aussi 87 % des patients sans apnée (résultat positif peu discriminant) |
| **Questionnaire de Berlin** | Court questionnaire | Intermédiaire : détectait 73 % des cas et écartait correctement 42 % |
| **Polygraphie ventilatoire à domicile** (type 3 : débit, effort, oxygène) | Portée une nuit à la maison | Chez 84 patients IC stables : détectait 93 % des apnées modérées ou plus et écartait correctement 83 %, en repérant aussi le SACS et le Cheyne-Stokes. Environ 1 examen sur 10 échouait, et la sévérité des formes graves était sous-estimée |
| **Oxymétrie nocturne** (capteur au doigt seul) | Chutes d'oxygène par heure | Repère assez bien un trouble respiratoire, mais ne distingue pas de façon fiable SACS et SAOS |
| **Algorithme respiratoire de DAI** (ApneaScan, un fabricant) | Intégré à certains défibrillateurs | Chez 173 patients avec FEVG ≤ 35 % (moyenne 29 %, environ moitié de cause ischémique) : performance correcte pour repérer les formes sévères (AUC 0,77 ; 87 % détectés et 56 % écartés au seuil de 31 événements/h), mais surestimait l'IAH d'environ 11 événements/h par rapport au test du sommeil lors des 49 enregistrements simultanés. Comparé à une polygraphie à domicile (et non une polysomnographie en laboratoire) ; étude financée par le fabricant. Utilisable uniquement si un appareil compatible est déjà implanté ; aide au repérage, pas un diagnostic |

Sources : Reuter 2018 (texte intégral) ; Li 2021 ; AASM 2017 ; DASAP-HF 2018 (texte intégral).

- **AASM 2017 :** les questionnaires et scores prédictifs ne doivent **pas** servir à diagnostiquer une apnée sans enregistrement du sommeil. Les personnes atteintes d'une maladie cardiaque ou pulmonaire importante, dont l'insuffisance cardiaque, devraient passer une polysomnographie complète plutôt qu'un simple test à domicile (même si l'étude plus récente de Li 2021 a trouvé une concordance satisfaisante à domicile chez des patients IC stables).
- **Limites des études :** l'étude sur les questionnaires (Reuter 2018, texte intégral) provenait d'une consultation d'hypertension (88 % d'hypertendus), et non d'une clinique d'insuffisance cardiaque, avec une polygraphie à domicile comme référence. Seuls 16 participants avaient une FEVG < 45 % ; parmi eux, 12 présentaient des troubles respiratoires du sommeil, dont 9 majoritairement centraux — un type que ces questionnaires n'ont pas été conçus pour repérer. La maladie coronaire ou un antécédent d'infarctus constituait le facteur prédictif isolé le plus fort (odds ratio d'environ 7). Aucune étude évaluant la performance de ces questionnaires exclusivement dans l'insuffisance cardiaque n'a été retrouvée (Reuter 2018 ; DASAP-HF).
- **En pratique :** se sentir bien éveillé ou obtenir un score bas à un questionnaire n'élimine pas une apnée du sommeil dans l'insuffisance cardiaque. Parlez à votre médecin traitant ou à votre cardiologue des signes évocateurs : ronflements importants, pauses respiratoires constatées par l'entourage, réveils avec sensation d'étouffement, sommeil non réparateur, maux de tête matinaux ou levers fréquents la nuit pour uriner (HAS 2014).
- **Pourquoi l'absence de somnolence compte :** les essais de PPC ont exclu les personnes très somnolentes pour des raisons de sécurité, et beaucoup de patients insuffisants cardiaques rapportent peu de somnolence ; pourtant, le remboursement français exige toujours la présence de symptômes (voir ci-dessous) (SAVE ; HAS 2014).`,
    },
    {
      headingFr: 'Traitements et résultats des grands essais cliniques',
      bodyMarkdownFr: `| Essai | Population | Traitement | Résultat |
|---|---|---|---|
| **SERVE-HF** (NEJM 2015) | 1 325 patients, FEVG ≤ 45 %, apnées **majoritairement centrales** | ASV vs médicaments seuls, médiane 31 mois | Critère principal non amélioré (HR 1,13). **Surmortalité :** toutes causes HR 1,28 ; cardiovasculaire HR 1,34 |
| **ADVENT-HF** (Lancet Respir Med 2024) | 731 patients, FEVG ≤ 45 %, IAH ≥ 15/h, **majoritairement obstructives** (73 %) | ASV plus récente déclenchée sur le débit de pointe vs soins usuels, moyenne 3,6 ans | Neutre : HR 0,95 (critère combiné), 0,89 (décès) ; pas de signal de danger. Amélioration du sommeil et de la qualité de vie. Arrêt précoce (COVID-19, rappel d'appareil) |
| **SAVE (PPC)** (NEJM 2016) | 2 717 patients de 45 à 75 ans avec **maladie coronaire ou cérébrovasculaire** et SAOS modéré à sévère, peu somnolents. IC NYHA III–IV, Cheyne-Stokes et Epworth > 15 exclus ; seuls **1,8 %** avaient un antécédent d'IC ; aucune FEVG mesurée | PPC (CPAP) vs soins usuels, moyenne 3,7 ans | Pas moins d'événements cardiovasculaires (17,0 % contre 15,4 % ; HR 1,10). Hospitalisations pour IC : **17 contre 17**. Moins de ronflements et de somnolence, meilleure humeur et qualité de vie. Observance moyenne : 3,3 h/nuit ; seuls **42 %** atteignaient 4 h. Utilisateurs appariés ≥ 4 h : non significatif (HR 0,80 ; IC 95 % 0,60–1,07) |
| **Analyse poolée SAVE, ISAACC, RICCADSA** (JAMA 2023) | 4 186 patients atteints de maladie cardiovasculaire et SAOS ; les trois essais excluaient la respiration de Cheyne-Stokes | PPC vs absence de PPC | Résultat randomisé neutre (HR 1,01) ; hospitalisations pour IC non réduites (HR 0,91 ; IC 95 % 0,59–1,40 sur deux essais). Les périodes d'utilisation **≥ 4 h/jour** étaient **associées** à moins d'événements (HR 0,69), mais cela compare bons et faibles utilisateurs, et non PPC vs absence de PPC. Seuls **38,5 %** atteignaient 4 h/jour |

**Attention aux homonymes :** cet essai « SAVE » porte sur la PPC ; il est totalement distinct de l'essai SAVE (1992) sur le captopril après infarctus (voir *Dysfonction ventriculaire asymptomatique (stade B)*).

Les auteurs (Pec et Arzt 2025) évoquent plusieurs raisons à la neutralité des essais : durée de suivi courte, exclusion pour sécurité des patients très somnolents, faible temps d'utilisation nocturne et recours à l'IAH seul. Un essai antérieur de PPC dans le SACS (CANPAP) était globalement neutre, avec une meilleure survie sans transplantation dans un sous-groupe post hoc où la PPC ramenait l'IAH sous 15/h.

### Ce que les essais de PPC peuvent et ne peuvent pas dire pour l'ICFER

La lecture intégrale de SAVE et de l'analyse poolée de 2023 éclaire précisément leurs limites :

- **Les personnes ayant un cœur affaibli étaient à peine représentées.** SAVE a exclu l'insuffisance cardiaque « patente » (NYHA III–IV dans l'annexe) et n'a jamais mesuré la FEVG : son protocole ne comporte ni critère de FEVG ni échocardiographie. Seuls 1,8 % des participants avaient un antécédent d'insuffisance cardiaque, et la méta-analyse de 2023 n'indique pas combien de participants avaient une insuffisance cardiaque (SAVE texte intégral, annexe et protocole ; supplément JAMA 2023).
- **Seule l'apnée obstructive a été étudiée.** Les trois essais ont écarté la respiration de Cheyne-Stokes (apnée centrale), et l'analyse poolée a délibérément exclu les essais d'apnée centrale dans l'insuffisance cardiaque (CANPAP, SERVE-HF) (supplément JAMA 2023).
- **Le bénéfice « à partir de 4 heures » n'est pas prouvé comme étant causé par la PPC.** Dans SAVE, les utilisateurs appariés utilisant la PPC ≥ 4 h n'avaient pas significativement moins d'événements (HR 0,80 ; IC 95 % 0,60–1,07) ; seuls les AVC (HR 0,56 ; p = 0,05) et un critère cérébrovasculaire non planifié atteignaient le seuil statistique parmi de nombreuses comparaisons sans correction. Dans l'analyse poolée, les bons utilisateurs avaient moins d'événements (HR 0,69), mais ils fumaient aussi moins (21 % contre 31 %) et prenaient plus souvent un antiagrégant et un médicament contre le cholestérol, alors que le tabagisme n'était pas intégré dans le modèle d'ajustement (SAVE texte intégral ; JAMA 2023 texte intégral et supplément).
- **Le versant coronarien se recoupe en partie.** Environ la moitié des participants de SAVE présentaient une maladie coronarienne (infarctus antérieurs, stents, pontages), ce qui en fait le grand essai le plus proche sur la PPC pour prévenir de nouveaux événements cardiaques en cas d'artères coronaires malades (SAVE texte intégral).
- **Financements :** SAVE a été cofinancé par Philips Respironics (fournisseur des appareils) et le conseil national australien de la recherche ; l'analyse poolée de 2023 bénéficiait notamment d'un financement de ResMed (SAVE texte intégral ; JAMA 2023 texte intégral).
- **Lecture équilibrée :** dans le SAOS, la PPC est avant tout un traitement des symptômes (somnolence, humeur, qualité de vie). Elle n'a pas démontré de prévention des événements cardiaques, et ces essais n'apportent pas de réponse sur l'apnée centrale ni sur l'ajout de la PPC aux traitements modernes de l'ICFER.

### Positions comparées des sociétés savantes

| Organisation | Position |
|---|---|
| **ESC 2026** | ASV dans l'ICFER avec apnées **majoritairement centrales** : **non recommandée (Classe III, A)** en raison de la surmortalité. ASV dans l'ICFER avec apnées **majoritairement obstructives** : **peut être envisagée** pour améliorer le sommeil, la qualité de vie et les symptômes (**Classe IIb, C**). Pas de classe spécifique pour la PPC (le texte cite oxygène, PPC, ventilation à deux niveaux et ASV comme options dans le SAOS) |
| **États-Unis 2022** (via Pec et Arzt 2025) | Étude du sommeil si suspicion ; PPC raisonnable dans le SAOS pour le sommeil et la somnolence ; ASV nocive dans l'ICFER NYHA II–IV avec SACS |
| **AASM 2025** (société américaine du sommeil) | Dans le SACS lié à l'IC, suggère de manière conditionnelle PPC, ASV, oxygène à faible débit, acétazolamide et stimulation du nerf phrénique (certitude faible ou très faible). ASV dans l'ICFER uniquement en centre expert, avec décision partagée et objectif symptomatique (sa méta-analyse ne trouvait pas d'effet sur la mortalité) |
| **AHA 2021** (prise de position scientifique, et non recommandation) | Étude du sommeil raisonnable dans l'IC NYHA II–IV en cas de suspicion, pour distinguer SAOS et SACS. ASV uniquement chez les personnes **sans** IC systolique (FEVG ≥ 45 %), en citant SERVE-HF. PPC : aucun effet démontré sur la FEVG, les hospitalisations pour IC ou la survie ; le soutien cité (Classe IIb, recommandation américaine IC 2017) porte uniquement sur la qualité du sommeil et la somnolence |
| **ERS/ESRS 2025** (via revue) | ASV uniquement après optimisation de la cardiopathie et échec de la PPC ; dans le SACS avec FEVG 30–45 %, instauration réservée aux centres experts |

**Divergence sur l'ASV dans le SACS :** l'ESC 2026 la déconseille fermement (Classe III) sur la base de SERVE-HF, tandis que les sociétés du sommeil américaine et européenne la tolèrent en centre expert à la lumière d'ADVENT-HF. Toute discussion sur une ASV relève impérativement d'un centre associant cardiologues de l'insuffisance cardiaque et spécialistes du sommeil.

**Stimulation du nerf phrénique** (dispositif implanté stimulant le diaphragme) : repose surtout sur un essai de 151 patients montrant moins de somnolence, moins d'apnées centrales et une meilleure distance de marche, sans effet démontré sur la mortalité ni la FEVG (AASM 2025).`,
    },
    {
      headingFr: "En France : accès et remboursement de la PPC et de l'ASV",
      bodyMarkdownFr: `*État au 24 novembre 2026. Les critères de remboursement proviennent de l'arrêté de 2017 tel que reproduit par la Haute Autorité de santé (HAS) dans son rapport d'évaluation 2026 (le texte brut de Légifrance n'a pas été lu directement).*

**Réévaluation HAS 2025–2026 :** après son avis matériel de juillet 2025 et son avis sur les indications et l'observance du 3 mars 2026, la HAS a recommandé de **ne pas modifier pour l'instant les indications adultes** de la PPC dans l'attente de recommandations professionnelles actualisées. La liste des produits et prestations remboursables (LPPR) mise à jour au 19 novembre 2026 renvoie toujours à l'arrêté de 2017.

**Indications actuelles de remboursement de la PPC (SAOS uniquement) :** au moins **3 symptômes sur 6** (somnolence diurne, ronflement sévère, sensations d'étouffement nocturnes, fatigue diurne, levers nocturnes pour uriner, céphalées matinales) **et** l'une des situations suivantes (LPPR ; rapport HAS 2026) :

- un IAH **≥ 30/h** ;
- un IAH **15–30/h** à la polysomnographie avec une **somnolence diurne sévère** et/ou un risque accidentel ;
- un IAH **15–30/h** avec une **comorbidité cardiovasculaire ou respiratoire grave**, parmi lesquelles figurent explicitement l'**insuffisance cardiaque symptomatique à FEVG réduite ou préservée**, la maladie coronaire à haut risque, l'hypertension résistante, la fibrillation atriale récidivante, un antécédent d'AVC, une BPCO sévère ou un asthme mal contrôlé.

La formulation en vigueur nomme directement l'insuffisance cardiaque symptomatique (et non plus l'« insuffisance ventriculaire gauche sévère » de 2014). À noter que la page grand public d'ameli.fr (août 2026) emploie encore des formulations plus anciennes (« insuffisance cardiaque grave » et critère de micro-éveils).

**Prescription, entente préalable et observance (LPPR ; formulaire CNAM ; ameli.fr 2026) :**

- Un médecin formé au sommeil réalise la prescription initiale (4 mois, puis renouvellement annuel).
- Une demande d'accord préalable est requise au départ et aux renouvellements, **sauf** lors du renouvellement annuel si l'observance a atteint au moins **112 heures par période de 28 jours** (environ 4 heures par nuit) sur 10 des 12 dernières périodes et au moins 56 heures sur les deux autres.
- Le **médecin traitant** peut renouveler à partir de la 4e prescription sous la même condition (ameli.fr mentionne déjà « médecin traitant ou infirmière formée dès la 3e prescription », ce qui correspond à la proposition HAS 2026 et non encore au texte réglementaire).
- Le télésuivi est facultatif et soumis à votre consentement ; les durées d'utilisation sont transmises chaque mois au service médical de l'Assurance Maladie.

**Propositions HAS 2026 (non encore entrées en vigueur) :** renouvellement par le médecin traitant ou une infirmière formée dès la 3e prescription, accès du patient à ses propres données d'appareil, et règle d'arrêt proposée après jusqu'à 3 mois d'utilisation inférieure à 56 heures par 28 jours malgré accompagnement.

**Spécificités dans l'insuffisance cardiaque (rapport HAS 2026) :**

- L'insuffisance cardiaque permet de qualifier les formes **modérées** (IAH 15–30/h), mais la règle des 3 symptômes sur 6 reste exigée.
- Le Conseil national professionnel de cardiologie a indiqué à la HAS préférer une PPC à pression fixe dans l'insuffisance cardiaque et suggéré au moins 6 heures par nuit ; il s'agit d'une position d'acteurs, la HAS ayant maintenu le seuil de 112 heures sur 28 jours.

**Servo-ventilation adaptative (ASV) en France (avis CNEDiMTS HAS 2023) :**

- La HAS soutient la prise en charge de l'ASV dans le SACS prédominant **uniquement en dehors de l'insuffisance cardiaque systolique avec FEVG ≤ 45 %** (ou en cas d'apnées mixtes ou centrales émergentes après au moins 12 semaines de PPC).
- Une **ETT datant de moins d'un an** doit écarter une FEVG réduite avant toute prescription, en application du signal de surmortalité de SERVE-HF (l'avis écrit « ≤ 45 % » à un endroit et « < 45 % » à un autre ; l'appréciation d'une valeur limite appartient au prescripteur).

### Ce qui reste incertain

- Aucun essai clinique n'a démontré que traiter l'apnée du sommeil prolonge la vie dans l'ICFER : les bénéfices prouvés concernent le sommeil, la somnolence et la qualité de vie (ESC 2026 ; ADVENT-HF ; SAVE).
- Les sources analysées ne traitaient pas l'effet propre des iSGLT2, du sacubitril/valsartan ou de la perte de poids sur l'apnée du sommeil dans l'ICFER ; les essais de PPC se sont déroulés avant l'usage courant de ces traitements.
- Les médicaments par comprimés contre l'apnée obstructive en sont encore au stade des essais cliniques : un éditorial de 2023, repris dans une revue de presse grecque sur le sommeil, décrivait des résultats précoces et de plus grands essais en cours, et non un traitement établi.`,
    },
  ],
  relatedArticleSlugs: [
    'fibrillation-atriale-insuffisance-cardiaque',
    'glossaire-cardiologie',
    'maladies-associees',
    'tension-arterielle-insuffisance-cardiaque',
    'poids-obesite-et-denutrition',
    'dispositifs-cardiaques-dai-crt',
    'fuite-mitrale-secondaire',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'vivre-avec-insuffisance-cardiaque-en-france',
    'dysfonction-vg-asymptomatique-stade-b',
    'vivre-avec-insuffisance-cardiaque',
    'recommandations-comparees-esc-us-nice',
    'comprendre-le-diagnostic',
    'voyages-canicule-et-climat-ic',
  ],
  sources: [
    { label: 'Recommandations ESC 2026 — troubles respiratoires du sommeil', detail: "Prévalence, polysomnographie, contre-indication de l'ASV dans le SACS (Classe III, A) et Classe IIb dans le SAOS" },
    { label: 'SERVE-HF (NEJM 2015) et ADVENT-HF (Lancet Respir Med 2024)', detail: "Surmortalité de l'ASV dans le SACS avec FEVG ≤ 45 % et résultats neutres d'une ASV plus récente" },
    { label: 'SAVE PPC (NEJM 2016 — texte intégral, annexe et protocole)', detail: 'Éligibilité complète (1,8 % d\'antécédent d\'IC, aucune mesure de FEVG), hospitalisations pour IC (17 vs 17) et analyse appariée ≥ 4 h' },
    { label: 'Sánchez-de-la-Torre et al. (JAMA 2023 — texte intégral et supplément)', detail: 'Méta-analyse poolée SAVE/ISAACC/RICCADSA, exclusions (Cheyne-Stokes), hospitalisations IC et biais de l\'analyse d\'observance' },
    { label: 'Prise de position AHA 2021 (texte intégral) et erratum 2022', detail: "Section insuffisance cardiaque, précision des questionnaires, restriction de l'ASV et définition corrigée de l'hypopnée" },
    { label: 'AASM (2017 et 2025) et Pec & Arzt (2025)', detail: 'Diagnostics du sommeil, prise en charge du SACS et comparatif des recommandations' },
    { label: 'Reuter (2018 — texte intégral), Li (2021) et DASAP-HF (2018 — texte intégral)', detail: 'Questionnaires en clinique d\'hypertension, polygraphies à domicile et algorithme ApneaScan de DAI (financé par le fabricant)' },
    { label: 'HAS / CNEDiMTS (2014, 2023, 2026), LPPR, CNAM et ameli.fr (2026)', detail: "Indications françaises de la PPC, observance 112 h/28 j, propositions 2026 et exclusion de l'ASV si FEVG ≤ 45 %" },
    { label: 'Revue de presse grecque du sommeil (novembre 2023)', detail: 'Commentaire secondaire (faible niveau de preuve) sur les médicaments oraux à l\'étude dans le SAOS' },
  ],
  disclaimerType: 'medical',
};
