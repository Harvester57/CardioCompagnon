import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'cholesterol-et-prevention-secondaire',
  sourceWikiPath: 'wiki/concepts/cholesterol-and-secondary-prevention.md',
  titleFr: 'Cholestérol LDL, aspirine et prévention secondaire coronaire',
  category: 'traitements',
  readingTier: 'essential',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'prévention-secondaire',
    'cholestérol-ldl',
    'statines',
    'ézétimibe',
    'anti-pcsk9',
    'acide-bempédoïque',
    'inclisiran',
    'lipoprotéine-a',
    'aspirine',
    'antiagrégants',
    'colchicine',
    'maladie-coronaire',
    'icfer',
  ],
  aliases: [
    'Cholestérol LDL',
    'Objectif LDL',
    'Statine',
    'Rosuvastatine',
    'Atorvastatine',
    'Ézétimibe',
    'Inhibiteur PCSK9',
    'Évolocumab',
    'Alirocumab',
    'Inclisiran',
    'Acide bempédoïque',
    'Lipoprotéine(a)',
    'Lp(a)',
    'Aspirine',
    'Clopidogrel',
    'Colchicine',
    'Prévention secondaire',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Dans la cardiomyopathie ischémique, vos traitements protègent à la fois la pompe cardiaque et vos artères coronaires contre un nouvel infarctus ou un AVC. Cette prévention secondaire associe généralement un traitement abaissant le cholestérol LDL (objectif européen inférieur à 0,55 g/L) et un antiagrégant comme l'aspirine à faible dose. N'arrêtez jamais ces médicaments sans l'avis de votre cardiologue.",
  keyTakeawaysFr: [
    "En cas de maladie coronaire avérée, la cible européenne de cholestérol LDL est inférieure à 0,55 g/L (1,4 mmol/L) avec une baisse d'au moins 50 %.",
    "Ne vous fiez pas aux « valeurs normales » du laboratoire destinées à la population générale : votre objectif personnel est fixé par votre cardiologue.",
    "Si la statine seule ne suffit pas ou est mal tolérée, l'ézétimibe ou des traitements injectables peuvent être ajoutés par étapes.",
    "L'aspirine à faible dose (75 à 100 mg/j) n'est pas un anti-inflammatoire contre-indiqué ; ne l'arrêtez jamais sans avis médical.",
  ],
  sections: [
    {
      headingFr: 'Protéger vos artères : l’objectif de cholestérol LDL',
      depth: 'patient',
      bodyMarkdownFr: `La cardiomyopathie ischémique résulte d'une maladie des artères coronaires (artères du cœur rétrécies ou bouchées, souvent après un infarctus). Vos traitements poursuivent donc deux objectifs complémentaires : les quatre piliers protègent le muscle cardiaque (voir *Les médicaments de l'insuffisance cardiaque (4 piliers)*), tandis que la **prévention secondaire** protège vos artères contre un nouvel infarctus ou un AVC.

### Quel est l'objectif de cholestérol LDL en France ?

Pour les personnes ayant une maladie coronaire avérée (très haut risque cardiovasculaire), les recommandations européennes fixent **deux conditions ensemble** :
1. Un cholestérol LDL **inférieur à 0,55 g/L** (soit **< 1,4 mmol/L**).
2. Une **baisse d'au moins 50 %** par rapport à votre taux initial sans traitement.

Si un nouvel événement vasculaire survient dans les 2 ans malgré un traitement maximal toléré, votre cardiologue peut parfois viser un seuil encore plus bas (**< 0,40 g/L**, soit **< 1,0 mmol/L**).

### Bien lire votre prise de sang en France

- **Attention aux « valeurs normales » imprimées par le laboratoire :** elles correspondent souvent à la population générale (par exemple LDL < 1,30 g/L) et ne reflètent pas votre objectif après un infarctus, un stent ou un pontage.
- **Unités :** en France, le LDL est généralement exprimé en **g/L** (0,55 g/L = 1,4 mmol/L).
- **Quand recontrôler ?** Un bilan lipidique est habituellement réalisé **2 à 3 mois** après le début ou une modification de traitement (parfois plus tôt, vers 4 à 6 semaines, après un infarctus récent), sous alimentation habituelle.

### Et la lipoprotéine(a), ou Lp(a) ?

La **lipoprotéine(a)** est une particule héréditaire porteuse de cholestérol qui majore le risque d'infarctus. Comme son taux est fixé génétiquement, **un seul dosage au cours de la vie suffit**. Un taux élevé incite à être encore plus attentif aux autres facteurs de risque (dont le LDL) et peut motiver un dépistage des proches au premier degré. À ce jour, aucun médicament ciblant spécifiquement la Lp(a) n'a encore démontré de réduction des événements cardiaques : discutez avec votre cardiologue de l'intérêt de ce dosage dans votre cas.`,
    },
    {
      headingFr: 'Les médicaments contre le cholestérol, étape par étape',
      depth: 'patient',
      bodyMarkdownFr: `Si votre taux de LDL reste au-dessus de l'objectif, votre cardiologue procède habituellement par paliers successifs :

| Palier / médicament | Prise et rôle | Points pratiques |
|---|---|---|
| **1. Statine** (ex. rosuvastatine *Crestor*, atorvastatine *Tahor*) | Comprimé quotidien ; diminue la fabrication de cholestérol par le foie | Traitement de première intention en maladie coronaire, prescrit jusqu'à la dose maximale tolérée |
| **2. Ézétimibe (*Ezetrol*)** | Comprimé quotidien ; limite l'absorption intestinale du cholestérol | Ajouté si la statine seule ne suffit pas ou en association avec une statine plus modérée en cas de douleurs musculaires |
| **3. Anticorps anti-PCSK9** (évolocumab *Repatha*, alirocumab *Praluent*) | Injection sous-cutanée toutes les 2 semaines ou chaque mois | Abaisse le LDL d'environ moitié supplémentaire ; réactions locales légères parfois au point d'injection |
| **Acide bempédoïque** (*Nilemdo*, ou *Nustendi* avec ézétimibe) | Comprimé quotidien | Option en cas d'intolérance avérée aux statines ou en complément ultérieur |
| **Inclisiran (*Leqvio*)** | Injection 2 fois par an | Abaisse fortement le LDL ; les résultats scientifiques complets sur la prévention des infarctus sont encore attendus |

### Statines et insuffisance cardiaque : pourquoi ne pas les arrêter seul

Vous entendrez peut-être dire que les statines ne sont pas recommandées « pour l'insuffisance cardiaque ». Cette règle concerne uniquement le fait de **débuter** une statine chez une personne qui a une insuffisance cardiaque **sans** maladie coronaire ni autre indication. Lorsque vous avez une maladie des artères coronaires (infarctus, stents, pontage), la statine reste prescrite pour protéger vos artères. Des taux de LDL très bas sous traitement sont bien tolérés et ne sont pas un motif pour réduire la dose : seul votre cardiologue arbitre la poursuite ou l'adaptation du traitement.`,
    },
    {
      headingFr: 'Aspirine, clopidogrel et colchicine à faible dose',
      depth: 'patient',
      bodyMarkdownFr: `### Antiagrégants plaquettaires (aspirine, clopidogrel)

L'**aspirine à faible dose** (*Kardégic*, *Aspégic* 75 à 100 mg/jour) et le **clopidogrel** (*Plavix* 75 mg/jour) empêchent les plaquettes de former un caillot dans les artères coronaires. Ils sont différents des **anticoagulants** (apixaban, rivaroxaban, warfarine, etc.), prescrits contre les caillots intracardiaques ou la fibrillation atriale.

- **Au long cours après infarctus, stent ou pontage :** l'aspirine à faible dose (ou le clopidogrel comme alternative) est poursuivie durablement. Après la pose d'un stent, une association des deux (bithérapie) est généralement prescrite quelques mois avant de revenir à un seul antiagrégant.
- **Si vous devez aussi prendre un anticoagulant :** pour limiter le risque de saignement, votre cardiologue arrête généralement l'aspirine à moyen ou long terme pour ne garder que l'anticoagulant seul (voir *Thrombus du ventricule gauche et anticoagulants*).
- **Point rassurant :** l'aspirine à faible dose (75 à 100 mg/jour) **ne fait pas partie** des anti-inflammatoires antalgiques (AINS comme l'ibuprofène) déconseillés dans l'insuffisance cardiaque. Pour plus de détails sur la bithérapie et la protection de l'estomac, voir *Antiplaquettaires, bithérapie (DAPT) et protection gastrique par IPP*.

### La colchicine à faible dose

La **colchicine** à faible dose (**0,5 mg/jour**) est un anti-inflammatoire ancien parfois proposé en complément dans la maladie coronaire pour calmer l'inflammation des plaques d'athérome. Elle peut provoquer des troubles digestifs passagers et présente des précautions importantes :
- à éviter en cas d'insuffisance rénale ou hépatique sévère ;
- nombreuses interactions médicamenteuses (certains antibiotiques, antifongiques, ciclosporine, diltiazem, vérapamil) et **jus de pamplemousse à éviter** ;
- surveillance musculaire renforcée lorsqu'elle est associée à une statine.

Seul votre cardiologue peut déterminer si ce traitement est adapté à votre situation.`,
    },
    {
      headingFr: 'Effets secondaires, alimentation et compléments',
      depth: 'patient',
      bodyMarkdownFr: `- **Douleurs musculaires sous statines :** des crampes ou douleurs musculaires surviennent chez environ 5 % des patients, mais les statines restent globalement bien tolérées. Si vous ressentez une gêne musculaire inhabituelle, parlez-en à votre médecin (un changement de molécule, une baisse de dose ou l'association à l'ézétimibe résolvent souvent le problème). La **coenzyme Q10** n'a pas démontré d'efficacité pour prévenir ou soulager ces douleurs.
- **Bilans sanguins :** en l'absence de symptômes musculaires importants ou de signe d'atteinte hépatique, doser systématiquement les enzymes musculaires (CK) ou le foie n'est pas nécessaire.
- **Interactions avec d'autres médicaments cardiaques :** certains médicaments comme l'amiodarone (*Cordarone*) limitent la dose maximale de simvastatine (en France, la rosuvastatine ou la pravastatine sont alors souvent privilégiées).
- **Jus de pamplemousse :** augmente le taux de simvastatine et d'atorvastatine ; la rosuvastatine n'est pas concernée.
- **Levure de riz rouge :** agit comme une statine non dosée et **ne doit pas** être associée à vos médicaments contre le cholestérol.
- **Compléments alimentaires et huiles de poisson :** les compléments en vente libre ne sont pas recommandés pour faire baisser le LDL ou les triglycérides (les huiles de poisson sans ordonnance peuvent même augmenter le LDL et sont associées à la fibrillation atriale). Seul un oméga-3 sur ordonnance à forte dose, l'**icosapent éthyl (*Vazkepa*)**, peut être discuté par votre cardiologue si vos triglycérides à jeun restent élevés (**1,35 à 4,99 g/L**, soit **1,52 à 5,63 mmol/L**) sous statine (voir *Acides gras oméga-3 (huiles de poisson)*).`,
    },
    {
      headingFr: 'Preuves cliniques et recommandations comparées sur les lipides et la Lp(a)',
      depth: 'evidence',
      bodyMarkdownFr: `### Cibles LDL et convergence Europe / États-Unis

| Situation clinique | Cible en g/L (France) | mmol/L | mg/dL | Condition supplémentaire | Recommandation |
|---|---|---|---|---|---|
| Très haut risque, dont maladie coronaire avérée (Europe) | **< 0,55 g/L** | < 1,4 | < 55 | **Et** baisse ≥ 50 % | ESC/EAS 2019 & 2025 ; ESC 2024 SCC : **I A** |
| Récidive vasculaire dans les 2 ans malgré statine max (Europe) | **< 0,40 g/L** | < 1,0 | < 40 | — | ESC/EAS 2019 & ESC 2024 SCC : **IIb B** |
| Haut risque (Europe) | **< 0,70 g/L** | < 1,8 | < 70 | Baisse ≥ 50 % | ESC/EAS 2019 : **I A** |
| Maladie athéroscléreuse hors très haut risque (États-Unis) | **< 0,70 g/L** (non-HDL < 1,00) | < 1,8 | < 70 | **Et** baisse ≥ 50 % (option < 0,55 : **2a B-R**) | ACC/AHA 2026 : **COR 1, LOE A** |
| Très haut risque ou MRC stade 3+ avec maladie artérielle (États-Unis) | **< 0,55 g/L** (non-HDL < 0,85) | < 1,4 | < 55 | **Et** baisse ≥ 50 % | ACC/AHA 2026 : **COR 1, LOE A** (MRC : **1 B-R**) |

- **ACC/AHA 2026 (avril 2026, *Circulation*/*JACC*) :** supprime la limite d'âge supérieure en prévention secondaire ; inclut l'antécédent d'IC parmi les **7 conditions de haut risque** (avec pontage/stent, âge ≥ 65 ans, diabète, HTA, tabagisme, LDL ≥ 1,00 g/L malgré statine max + ézétimibe ; la MRC stade 3+ relève d'une recommandation distincte). En très haut risque hors cible : ajout d'ézétimibe **et/ou** anti-PCSK9 (**COR 1, LOE A** ; *coquille 2a dans le Tableau 1, Classe 1 confirmée dans le texte*) ; acide bempédoïque et inclisiran en seconde intention (**COR 2a, LOE B-R**). Contrôle lipidique à **4 à 12 semaines** puis tous les **6 à 12 mois** (**COR 1, LOE A**).
- **ESC 2024 SCC / ESC/EAS 2025 :** statine haute intensité pour tout SCC (**I A**), ajout ézétimibe (**I B**), ajout anti-PCSK9 (**I A**), acide bempédoïque si intolérance statines (**I B** ; ajout à statine ± ézétimibe **IIa C**), non-statines prouvées en cas d'intolérance statines (**I A**), icosapent éthyl 2 g × 2/j si triglycérides 1,35–4,99 g/L (**IIa B**), compléments non prouvés déconseillés (**III B** ; ACC/AHA 2026 **COR 3, LOE B-R**). ACC/AHA 2026 déconseille aussi CK systématiques (**COR 3 A**), bilan hépatique systématique (**COR 3 B-NR**) et CoQ10 (**COR 3 B-R**).

### Essais sur l'ézétimibe, les anti-PCSK9, l'acide bempédoïque et l'inclisiran

- **IMPROVE-IT (*NEJM* 2015, 18 144 patients post-SCA, suivi ~6 ans) :** simvastatine + ézétimibe vs simvastatine seule (LDL **0,537 vs 0,695 g/L**). Événements à 7 ans : **32,7 % vs 34,7 %** (**HR 0,936**), portés par moins d'infarctus (**HR 0,87**) et d'AVC ischémiques (**HR 0,79**) ; mortalité CV (**HR 1,00**) et totale (**HR 0,99**) inchangées. *Limites :* comparateur statine modérée ; seulement ~**4 %** d'antécédent d'IC, FEVG non rapportée.
- **RACING (3 780 patients coréens, 3 ans, en ouvert) :** rosuvastatine 10 mg + ézétimibe non inférieure à rosuvastatine 20 mg (**9,1 % vs 9,9 %**), plus souvent LDL < 0,70 g/L (**72 % vs 58 %**), moins d'arrêts/baisses de dose (**4,8 % vs 8,2 %**). **Méta-analyse Kelly et al. (2024, 13 essais, 8 592 patients) :** LDL < 0,70 g/L plus fréquent (**OR 1,76**, IC 1,26–2,45), aucune différence nette sur les événements (**OR 0,54**, IC 0,14–2,11) ni sur les arrêts.
- **FOURIER (27 564 patients, suivi médian 2,2 ans ; excluait NYHA III-IV et FEVG < 30 %) :** évolocumab **-59 %** de LDL (médiane **0,92 à 0,30 g/L**), critère principal **9,8 % vs 11,3 %** (**HR 0,85**), infarctus/AVC/décès CV **5,9 % vs 7,4 %**. Analyse par LDL atteint (*The Lancet* 2017, **25 982 patients**) : bénéfice continu jusqu'à **< 0,08 g/L (0,2 mmol/L)** ; sous **0,20 g/L** vs ≥ 1,00 g/L : **HR ajusté 0,76** (IC 0,64–0,90) et **HR 0,69** (IC 0,56–0,85), sans excès d'effets indésirables graves, de diabète ni de troubles cognitifs (analyse non randomisée, 2 ans).
- **ODYSSEY OUTCOMES — analyse post hoc selon antécédent d'IC (*EHJ* 2022, 18 924 patients, 2 815 [15 %] avec antécédent d'IC, FEVG non recueillie, NYHA III-IV et FEVG < 25 % exclus) :** réduction des événements sans antécédent d'IC (**HR 0,78**), mais **aucune réduction** avec antécédent d'IC (**HR 1,17**, IC 0,97–1,40 ; infarctus non fatals **HR 1,30**, IC 1,02–1,64 ; mortalité **HR 0,99** ; hospitalisations IC **HR 1,22**, IC 0,90–1,66). Sous-groupe IC probablement coronaire : **HR 1,13** (IC 0,90–1,41) et hospitalisations IC **HR 1,38** (IC 0,96–1,99). Analyse post hoc sans FEVG, non assimilable à l'ICFER.
- **Acide bempédoïque :** baisse du LDL ~**-23 %** seul, **-18 %** sur statine, **-38 %** avec ézétimibe (**CLEAR Outcomes**). **Inclisiran :** ~**-50 %** (**ORION-10/11** : -52 % et -50 %) ; **ORION-4** repose en novembre 2026 sur un seul communiqué de presse sans publication. Réactions au point d'injection : évolocumab **2,1 % vs 1,6 %**, alirocumab **3,8 % vs 2,1 %**.

### Statines dans l'insuffisance cardiaque (CORONA, GISSI-HF, PEARL)

- **CORONA (*NEJM* 2007, 5 011 patients ≥ 60 ans, IC ischémique, FEVG moyenne 31 %, rosuvastatine 10 mg vs placebo, 33 mois) :** LDL **-45 %** (1,37 à 0,76 g/L), critère principal neutre (**HR 0,92**, IC 0,83–1,02), mortalité totale **HR 0,95** (0,86–1,05), moins d'hospitalisations CV (**2 193 vs 2 564**) et IC (**1 109 vs 1 299**) en cumul ; analyses secondaires : -15 à -20 % d'hospitalisations IC répétées et **HR 0,65** dans le tertile NT-proBNP le plus bas. Aucun excès musculaire, hépatique ou rénal.
- **GISSI-HF (*The Lancet* 2008, 4 574 patients IC toutes causes, 40 % ischémiques, rosuvastatine 10 mg, 3,9 ans, excluant les patients déjà sous statine) :** LDL **-32 %**, mortalité **HR 1,00**, décès/hospitalisation CV **HR 1,01**, sous-groupe ischémique **HR 1,03** (0,92–1,16). **PEARL** (574 patients japonais, pitavastatine) : neutre.
- **Position réglementaire :** ESC/EAS 2019 déconseille d'initier un hypolipémiant dans l'IC **sans autre indication** (**III A**) ; ACC/AHA 2026 : idem (**COR 3 A**), mais en ICFER coronaire avec espérance de vie 3–5 ans sans statine, une statine modérée « peut être raisonnable » (**COR 2b B-R**, données poolées ~-19 % d'infarctus) ; arrêt envisageable uniquement si espérance de vie **< 1 an** (**COR 2b B-R** ; étude observationnelle italienne : arrêt associé à **HR 1,24**, IC 1,07–1,43 d'hospitalisations IC).
- **Plafonds d'interactions statines (ACC/AHA 2026, Tableau 27 — simvastatine/lovastatine uniquement) :** amiodarone (simvastatine max 20 mg), diltiazem/vérapamil/dronédarone (max 10 mg), ticagrélor (max 40 mg), ranolazine (max 20 mg si aucune alternative), gemfibrozil à éviter.

### Lipoprotéine(a) : seuils et essai Lp(a)HORIZON (*NEJM*, 2026)

- **Dépistage :** au moins une fois chez tout adulte (**IIa C** ESC/EAS 2019 ; **COR 1, LOE B-NR** ACC/AHA 2026 + dépistage des apparentés au 1er degré).
- **Seuils :** ESC/EAS 2025 **> 50 mg/dL (105 nmol/L)** (**IIa B**, hausse dès 30 mg/dL) ; ESC/EAS 2019 **> 180 mg/dL (430 nmol/L)** très haut risque héréditaire ; ACC/AHA 2026 **≥ 125 nmol/L (50 mg/dL)** (anti-PCSK9 recommandé si maladie artérielle et LDL hors cible sous statine, **COR 1, LOE B-R**, baisse de Lp(a) de **15 à 30 %**).
- **Lp(a)HORIZON (*NEJM* 2026, 8 350 patients, Lp(a) ≥ 70 mg/dL, LDL médian 0,65 g/L, suivi 4,7 ans) :** malgré **-78 %** de Lp(a) sous pélacarsen, **aucune réduction** des événements majeurs (**12,3 % vs 12,1 %**, **HR 1,02**, IC 95 % 0,90–1,15) ; plus d'arrêts (**20,6 % vs 7,5 %**) et **19 anaphylaxies probables (0,5 %)**. Programme arrêté ; essais en cours avec **olpasiran** (*OCEAN(a)-Outcomes*, mars 2028), **lépodisiran** et **muvalapline**.`,
    },
    {
      headingFr: 'Preuves cliniques sur les antiagrégants et la colchicine',
      depth: 'evidence',
      bodyMarkdownFr: `### Antiagrégants plaquettaires (ESC 2024 SCC)

| Situation | Recommandation ESC 2024 | Classe |
|---|---|---|
| Après infarctus ou stent (après DAPT) | Aspirine 75–100 mg/j à vie | **I A** |
| Même situation | Clopidogrel 75 mg/j en alternative sûre et efficace | **I A** |
| Après pontage aorto-coronarien | Aspirine 75–100 mg/j à vie | **I A** |
| Sténose coronaire significative sans infarctus/geste | Aspirine 75–100 mg/j à vie | **I B** |
| Après stent, sans besoin d'anticoagulant | DAPT aspirine + clopidogrel jusqu'à **6 mois** (**1–3 mois** si haut risque hémorragique) | **I A** |
| Haut risque thrombotique sans haut risque hémorragique | Second antithrombotique au long cours à envisager | **IIa A** |

- **Association avec un anticoagulant :** anticoagulant seul au long cours (AOD préféré à la warfarine). Après stent non compliqué : arrêt précoce de l'aspirine (~1 semaine), anticoagulant + clopidogrel jusqu'à 6 mois (jusqu'à 12 mois si haut risque thrombotique), puis anticoagulant seul. Détails essais (**HOST-EXAM**, **SMART-CHOICE 3**, **PANTHER**), ACC/AHA 2023 et IPP dans *Antiplaquettaires, bithérapie (DAPT) et protection gastrique par IPP*.

### Colchicine à faible dose (0,5 mg/j)

- **Recommandations :** ESC 2024 SCC **Classe IIa, Niveau A** ; consensus argentin SAC 2025 **IIa A** (éviter sous **30 mL/min** de clairance rénale ; *coquille « 5 mg/j » dans le tableau SAC, la dose des essais est bien 0,5 mg/j*).
- **Méta-analyse de 6 essais (21 800 patients ; *EHJ* 2025) :** **HR 0,75** sur les événements majeurs, aucun effet sur la mortalité CV ou totale ; forte hétérogénéité (**I² = 77 %**).
- **Essais pivots :** **LoDoCo2** (SCC stable : **6,8 % vs 9,6 %**, **HR 0,69**, douleurs musculaires **21,2 % vs 18,5 %**) ; **COLCOT** (4 745 patients post-infarctus : **5,5 % vs 7,1 %**, **HR 0,77**, pneumonies **0,9 % vs 0,4 %**) ; **CLEAR SYNERGY** (*NEJM* 2025, 7 062 patients post-infarctus : **9,1 % vs 9,3 %**, **HR 0,99**, neutre).
- **Revue Cochrane 2025 (12 essais) :** moins d'infarctus (**RR 0,74**) et d'AVC (**RR 0,67**), mortalité inchangée, plus de troubles digestifs (**RR 1,68**).
- **Particularités ICFER et sécurité :** l'IC sévère était exclue de COLCOT et LoDoCo2 ; CLEAR SYNERGY incluait FEVG ≤ 45 % mais était neutre ; aucun essai n'a analysé de critères d'IC. Contre-indications (notice US) : inhibiteurs puissants CYP3A4/P-gp (clarithromycine, kétoconazole, itraconazole, ritonavir, ciclosporine), clairance **< 15 mL/min**, insuffisance hépatique sévère, troubles hématologiques préexistants.`,
    },
  ],
  relatedArticleSlugs: [
    'diabete-insuffisance-cardiaque',
    'vaccinations-insuffisance-cardiaque',
    'antiplaquettaires-bitherapie-et-protection-gastrique',
    'cardiomyopathie-ischemique',
    'medicaments-insuffisance-cardiaque',
    'occlusion-coronaire-chronique-cto',
    'thrombus-vg-et-anticoagulants',
    'medicaments-effets-secondaires-suivi',
    'interactions-complements-aliments-medicaments',
    'omega-3-huile-de-poisson',
    'alimentation-cardioprotectrice',
    'berberine-cholesterol-et-interactions',
    'coenzyme-q10',
    'these-coq10-mortalite-icfer-moderne',
    'goutte-bpco-thyroide-et-autres-comorbidites',
    'tabac-et-alcool-insuffisance-cardiaque',
    'arythmies-ventriculaires-et-antiarythmiques',
    'recommandations-comparees-esc-us-nice',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'glossaire-cardiologie',
    'revascularisation-pontage-stents',
    'maladies-associees',
    'comprendre-le-diagnostic',
  ],
  sources: [
    {
      label: 'Recommandations ESC/EAS 2019, mise à jour ESC/EAS 2025 et ESC 2024 (SCC)',
      detail: 'Cibles LDL (I A), escalade thérapeutique, acide bempédoïque, inclisiran, Lp(a), icosapent éthyl, aspirine/clopidogrel, colchicine (IIa A) et règle III A dans l’IC isolée',
    },
    {
      label: 'Recommandations ACC/AHA 2026 sur les dyslipidémies (Circulation et JACC, avril 2026, texte intégral)',
      detail: 'Cibles LDL/non-HDL, 7 conditions de très haut risque (hors MRC), grades des add-ons, recommandations ICFER et arrêt (< 1 an), bilans CK/foie, Tableau 27 des interactions statines, dépistage familial Lp(a) et compléments',
    },
    {
      label: 'Fédération Française de Cardiologie (brochure Cholestérol) et consensus SAC 2025',
      detail: 'Unités françaises en g/L, tolérance des statines, calendrier des bilans et synthèse sur la colchicine',
    },
    {
      label: 'CORONA (NEJM, 2007), GISSI-HF (The Lancet, 2008), IMPROVE-IT (NEJM, 2015), FOURIER LDL atteint (The Lancet, 2017) et ODYSSEY IC + annexe (EHJ, 2022) — textes intégraux',
      detail: 'Données complètes des statines dans l’IC, ézétimibe, LDL très bas, antécédent d’IC et sous-groupe ischémique probable ; méta-analyse Kelly 2024 et essai RACING',
    },
    {
      label: 'Lp(a)HORIZON (NEJM, 2026, texte intégral) et pipeline ORION-4 / OCEAN(a)-Outcomes',
      detail: 'Résultats du pélacarsen et état des essais en cours sur la Lp(a) et l’inclisiran',
    },
    {
      label: 'Méta-analyse colchicine (EHJ, 2025), LoDoCo2, COLCOT, CLEAR SYNERGY (2025) et Cochrane 2025',
      detail: 'Efficacité coronaire, tolérance digestive et interactions de la colchicine',
    },
  ],
  disclaimerType: 'medical',
};
