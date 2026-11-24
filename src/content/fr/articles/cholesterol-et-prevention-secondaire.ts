import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'cholesterol-et-prevention-secondaire',
  sourceWikiPath: 'wiki/concepts/cholesterol-and-secondary-prevention.md',
  titleFr: 'Cholestérol LDL, aspirine et prévention secondaire coronaire',
  category: 'traitements',
  asOf: '2026-11-24',
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
    "La cardiomyopathie ischémique trouve son origine dans la maladie des artères coronaires (artères du cœur rétrécies ou bouchées, souvent après un infarctus). Votre prise en charge poursuit donc deux objectifs en parallèle : les médicaments d'insuffisance cardiaque protègent la pompe, tandis que les traitements de « prévention secondaire » protègent les artères contre un nouvel infarctus ou un AVC (hypolipémiants pour abaisser le cholestérol LDL, antiagrégant plaquettaire comme l'aspirine à faible dose, et parfois colchicine à faible dose). En Europe, pour une maladie coronaire avérée, l'objectif de LDL est inférieur à 0,55 g/L (1,4 mmol/L ; 55 mg/dL) associé à une baisse d'au moins 50 % par rapport au taux sans traitement. Les essais ayant testé l'initiation d'une statine uniquement pour l'insuffisance cardiaque ont été neutres, mais cela ne remet pas en cause une statine prescrite pour les artères coronaires : ne stoppez jamais ces médicaments sans l'avis de votre cardiologue.",
  sections: [
    {
      headingFr: 'Pourquoi le traitement des artères reste essentiel malgré l’insuffisance cardiaque',
      bodyMarkdownFr: `- Les recommandations européennes **ESC 2024 sur les syndromes coronariens chroniques (SCC)** concernent les personnes présentant une maladie coronaire installée, y compris après un infarctus. Leurs recommandations sur les lipides, les antiagrégants et la colchicine s'appliquent en complément de celles de l'insuffisance cardiaque.
- Elles recommandent une **statine de haute intensité pour tous les patients atteints de SCC** (**Classe I, Niveau A**), tout en rappelant les quatre piliers du traitement de fond en cas d'ICFER associée.
- La **Fédération Française de Cardiologie (FFC)** souligne qu'un traitement hypolipémiant est prescrit « presque systématiquement » après un infarctus du myocarde, un AVC, une artériopathie des membres inférieurs, une pose de stent ou un pontage.
- Pour le volet dédié à la pompe cardiaque, voir *Les médicaments de l'insuffisance cardiaque (4 piliers)*.`,
    },
    {
      headingFr: 'Les objectifs de cholestérol LDL',
      bodyMarkdownFr: `### L'objectif européen (ESC/EAS)

Pour les patients à **très haut risque cardiovasculaire**, catégorie qui inclut la majorité des personnes atteintes de maladie coronaire documentée, l'objectif comporte **deux conditions cumulatives** (ESC/EAS 2019, inchangé dans la mise à jour ciblée ESC/EAS 2025, repris par ESC 2024 SCC) :
1. Un cholestérol LDL **inférieur à 0,55 g/L** (**< 1,4 mmol/L** ; **< 55 mg/dL**) ; **et**
2. Une **baisse d'au moins 50 %** par rapport au taux de départ sans traitement.

Cette recommandation est de **Classe I, Niveau A** (le plus haut degré de recommandation).

### Repères d'unités (France vs publications internationales)

En France, les laboratoires expriment habituellement le cholestérol LDL en **g/L**. Pour convertir des mg/dL en g/L, on divise par 100 : ainsi, **55 mg/dL = 0,55 g/L** (environ **1,4 mmol/L**).

| Situation clinique | Objectif en g/L (France) | Équivalent mmol/L | Équivalent mg/dL | Condition supplémentaire | Source et classe |
|---|---|---|---|---|---|
| **Très haut risque**, incluant maladie coronaire avérée (Europe) | **< 0,55 g/L** | < 1,4 mmol/L | < 55 mg/dL | **Et** baisse ≥ 50 % vs valeur initiale | ESC/EAS 2019 & 2025 ; ESC 2024 SCC : **I A** |
| Récidive d'événement vasculaire dans les 2 ans malgré la statine maximale tolérée (Europe) | **< 0,40 g/L** | < 1,0 mmol/L | < 40 mg/dL | — | ESC/EAS 2019 & ESC 2024 SCC : « peut être envisagé », **IIb B** |
| Haut risque (Europe, pour comparaison) | **< 0,70 g/L** | < 1,8 mmol/L | < 70 mg/dL | Baisse ≥ 50 % | ESC/EAS 2019 : **I A** |
| **États-Unis :** maladie athéroscléreuse clinique, hors très haut risque | **< 0,70 g/L** (non-HDL < 1,00 g/L) | < 1,8 mmol/L | < 70 mg/dL (non-HDL < 100) | **Et** baisse ≥ 50 % ; objectif optionnel < 0,55 g/L jugé raisonnable (2a B-R) | ACC/AHA 2026 : **COR 1, LOE A** |
| **États-Unis :** très haut risque, ou maladie rénale chronique stade 3+ avec maladie artérielle | **< 0,55 g/L** (non-HDL < 0,85 g/L) | < 1,4 mmol/L | < 55 mg/dL (non-HDL < 85) | **Et** baisse ≥ 50 % | ACC/AHA 2026 : **COR 1, LOE A** (MRC : COR 1, LOE B-R) |

### Points clés à retenir sur ces cibles

- **Convergence Europe / États-Unis :** les recommandations américaines **ACC/AHA 2026** (publiées dans *Circulation* en avril 2026, remplaçant celles de 2018) réintroduisent des cibles chiffrées de LDL et de non-HDL, suppriment la limite d'âge supérieure en prévention secondaire et exigent désormais elles aussi une **baisse d'au moins 50 %** en plus du seuil numérique.
  - Leur définition du « très haut risque » correspond à au moins 2 événements majeurs (syndrome coronaire dans l'année, infarctus antérieur, AVC ischémique, artériopathie symptomatique) ou 1 événement majeur plus au moins 2 facteurs de haut risque.
  - **Un antécédent d'insuffisance cardiaque** figure parmi ces facteurs de haut risque, au même titre qu'un pontage ou un stent antérieur, un âge ≥ 65 ans, un diabète, une hypertension artérielle, une maladie rénale chronique ou le tabagisme. Les recommandations américaines relèvent donc que la majorité des personnes ayant une maladie artérielle avérée relèvent du très haut risque, alignant ainsi les cibles américaine et européenne à **< 0,55 g/L (1,4 mmol/L)**. L'application individuelle revient au cardiologue.
- **Attention aux « valeurs normales » du laboratoire :** sur un compte rendu d'analyse français, les valeurs dites « idéales » pour la population générale (par exemple LDL < **1,30 g/L**) peuvent prêter à confusion. En présence d'une maladie coronaire, la cible rappelée par la FFC est bien **< 0,55 g/L**.
- **Délai de contrôle sanguin :** la FFC indique qu'un bilan lipidique est habituellement recontrôlé **2 à 3 mois** après l'initiation ou un changement de dose (sous alimentation habituelle, à distance d'une maladie aiguë ou d'un événement cardiaque récent). La mise à jour ESC/EAS 2025 évoque un contrôle à **4 à 6 semaines** dans le contexte d'un syndrome coronaire aigu. Les recommandations ACC/AHA 2026 préconisent un contrôle à **4 à 12 semaines**, puis tous les **6 à 12 mois** (COR 1, LOE A), le prélèvement à jeun n'étant généralement pas indispensable.`,
    },
    {
      headingFr: 'L’escalade thérapeutique par paliers',
      bodyMarkdownFr: `Les recommandations européennes décrivent une stratégie par étapes, chaque palier étant ajouté si l'objectif de LDL n'est pas atteint au palier précédent :
1. **Statine de haute intensité**, jusqu'à la dose maximale tolérée.
2. **Ajout de l'ézétimibe (*Ezetrol*).**
3. **Ajout d'un inhibiteur de PCSK9.**

L'acide bempédoïque intervient en cas d'intolérance aux statines ou en complément ultérieur.

| Médicament | Prise et mécanisme | Baisse du LDL rapportée dans les sources | Principales preuves cliniques | Classe ESC |
|---|---|---|---|---|
| **Statine** (ex. rosuvastatine *Crestor*, atorvastatine *Tahor*) | Comprimé quotidien ; réduit la synthèse hépatique de cholestérol | Rosuvastatine 10 mg : **-45 %** dans CORONA | Essais dédiés à l'IC : **CORONA**, **GISSI-HF** (voir section suivante) | Statine haute intensité pour tout SCC : **I A** |
| **Ézétimibe (*Ezetrol*)** | Comprimé quotidien ; réduit l'absorption intestinale du cholestérol | Dans IMPROVE-IT : LDL moyen **0,537 g/L** (1,4 mmol/L ; 53,7 mg/dL) avec l'association vs **0,695 g/L** (1,8 mmol/L ; 69,5 mg/dL) sous statine seule | **IMPROVE-IT** : -6 % d'événements après SCA. **RACING** : statine modérée + ézétimibe non inférieure à statine forte dose | Ajout si objectif non atteint : **I B** |
| **Anticorps anti-PCSK9** (évolocumab *Repatha*, alirocumab *Praluent*) | Injection sous-cutanée toutes les 2 semaines ou mensuelle ; augmente l'épuration hépatique du LDL | **-59 %** dans FOURIER (médiane passée de 0,92 à 0,30 g/L ; 92 à 30 mg/dL) ; environ **-50 %** selon la FFC | **FOURIER** : -15 % d'événements. **ODYSSEY OUTCOMES** : -15 % après SCA | Ajout si objectif non atteint sous statine + ézétimibe : **I A** |
| **Acide bempédoïque (*Nilemdo*, ou *Nustendi* avec ézétimibe)** | Comprimé quotidien | Environ **-23 %** seul, **-18 %** ajouté à une statine, **-38 %** associé à l'ézétimibe | Essai **CLEAR Outcomes** (intolérance aux statines) cité par l'ESC | Intolérance aux statines : **I B**. Ajout à statine (± ézétimibe) : **IIa C** |
| **Inclisiran (*Leqvio*)** | Injection 2 fois par an ; réduit la synthèse hépatique de PCSK9 | Environ **-50 %** (ORION-10/11 : **-52 %** et **-50 %**) | Essai pronostique **ORION-4** : seul un communiqué du laboratoire annonçant l'atteinte du critère principal existe (novembre 2026), sans publication scientifique | Aucune recommandation ESC fondée sur les événements ; non listé dans l'ESC 2025 parmi les non-statines à bénéfice CV prouvé |

**Position américaine (ACC/AHA 2026) :** statine de haute intensité en premier (atorvastatine **40 à 80 mg** ou rosuvastatine **20 à 40 mg**). En cas de très haut risque hors cible, l'ajout d'ézétimibe **et/ou** d'un anticorps anti-PCSK9 est recommandé (**COR 1, LOE A**), sans imposer l'ézétimibe avant l'anti-PCSK9. L'acide bempédoïque est jugé raisonnable en complément (**COR 2a, LOE B-R**), tout comme l'inclisiran en seconde intention si les anticorps anti-PCSK9 ne sont pas tolérés ou accessibles ou en cas de forte préférence pour des injections espacées (**COR 2a, LOE B-R**), en attendant la publication des essais pronostiques. Hors très haut risque, ézétimibe, anti-PCSK9 ou acide bempédoïque sont **COR 2a, LOE B-R**. Des taux de LDL très bas ne constituent pas un motif de réduction du traitement.

### Associer une statine et l'ézétimibe

- **IMPROVE-IT** (**18 144 patients** dans les 10 jours suivant un syndrome coronaire aigu, suivi d'environ 6 ans) : simvastatine + ézétimibe vs simvastatine seule.
  - Événements majeurs à 7 ans : **32,7 % contre 34,7 %** (**HR 0,936**), soit 2 patients de moins touchés pour 100 traités.
  - Effets musculaires, biliaires, hépatiques et cancers similaires entre les deux groupes.
  - *Limites :* le comparateur était une statine d'intensité modérée et non une forte dose moderne ; le statut d'insuffisance cardiaque n'était pas détaillé dans le résumé.
- **RACING** (**3 780 patients** coréens atteints de maladie athéroscléreuse, 3 ans) : rosuvastatine **10 mg + ézétimibe** vs rosuvastatine **20 mg seule**.
  - Événements : **9,1 % contre 9,9 %** (combinaison non inférieure).
  - Davantage de patients sous le seuil de 0,70 g/L (70 mg/dL) à 3 ans : **72 % contre 58 %**.
  - Moins d'arrêts ou de réductions de dose pour effets secondaires : **4,8 % contre 8,2 %**.
  - *Limites :* essai en ouvert, mené dans un seul pays, sans détail sur l'insuffisance cardiaque, financé par Hanmi Pharmaceutical.

### « Plus bas c'est mieux » et tolérance des LDL très bas

- **FOURIER** (**27 564 patients** atteints de maladie athéroscléreuse sous statine, suivi médian **2,2 ans**) : l'évolocumab a réduit le critère principal de **11,3 % à 9,8 %** (**HR 0,85**), et le critère infarctus/AVC/décès CV de **7,4 % à 5,9 %**.
- Dans une analyse préspécifiée portant sur **25 982 patients** de FOURIER, les taux de LDL les plus bas s'accompagnaient de moins d'événements, jusqu'en dessous de **0,08 g/L (0,2 mmol/L)** ; un patient sur dix descendait sous **0,20 g/L (0,5 mmol/L)**. Les taux très bas n'étaient associés à **aucun excès d'effets indésirables graves** ni d'aucun des dix événements de tolérance préspécifiés (pas de différence non plus sur le diabète incident ni sur la mémoire et la cognition).
- *Limites :* analyse observationnelle selon le LDL atteint (non randomisée) et durée limitée à environ 2 ans.`,
    },
    {
      headingFr: 'Statines et insuffisance cardiaque : comment concilier les deux messages ?',
      bodyMarkdownFr: `Dans l'insuffisance cardiaque, la situation repose sur quatre faits complémentaires qu'il faut lire ensemble.

### 1. Introduire une statine pour l'insuffisance cardiaque n'a pas réduit le critère principal

| Essai | Population | Résultat |
|---|---|---|
| **CORONA** (NEJM, 2007) | **5 011 patients** de 60 ans et plus, IC systolique **ischémique**, NYHA II-IV ; rosuvastatine 10 mg vs placebo ; ~33 mois | LDL réduit de **45 %**. Décès CV, infarctus ou AVC : **HR 0,92** (0,83–1,02), **non significatif**. Mortalité toutes causes inchangée (**HR 0,95**). **Moins d'hospitalisations cardiovasculaires** (**2 193 contre 2 564**). Pas d'excès d'effets musculaires |
| **GISSI-HF** bras statine (The Lancet, 2008) | **4 574 patients** en Italie, IC toutes causes et toutes FEVG, NYHA II-IV ; rosuvastatine 10 mg vs placebo ; 3,9 ans | Mortalité **29 % contre 28 %** (**HR 1,00**). Décès ou hospitalisation CV **57 % contre 56 %** (**HR 1,01**). Bonne tolérance mais **aucun effet pronostique** |

Deux analyses secondaires ultérieures de CORONA apportent des nuances sans renverser le résultat principal : en comptabilisant les **hospitalisations répétées** pour insuffisance cardiaque, la rosuvastatine était associée à environ **15 à 20 %** d'admissions en moins ; et chez les patients ayant le **NT-proBNP le plus bas** (insuffisance cardiaque moins avancée), elle était associée à moins d'infarctus, d'AVC et de morts subites (**HR 0,65**, résultat de sous-groupe).

### 2. L'Europe déconseille de débuter un hypolipémiant pour la seule insuffisance cardiaque

Les recommandations **ESC/EAS 2019** précisent que l'initiation d'un traitement hypolipémiant n'est **pas recommandée** dans l'insuffisance cardiaque **en l'absence d'autre indication** (**Classe III, Niveau A**), en s'appuyant sur CORONA, GISSI-HF et une méta-analyse de 24 essais.

### 3. La maladie coronaire est une indication à part entière, et aucun essai n'a testé l'arrêt

- La restriction ESC/EAS concerne le fait de **débuter** un traitement **sans autre indication**. Aucune recommandation ne dit d'arrêter une statine chez une personne déjà traitée ou atteinte de maladie coronaire.
- Les recommandations **ESC 2024 SCC** préconisent une statine chez tout coronarien (**I A**).
- Ni CORONA ni GISSI-HF n'ont évalué l'**arrêt** d'une statine prise pour maladie coronaire. Le cardiologue arbitre au cas par cas selon l'équilibre entre protection artérielle et stade de l'insuffisance cardiaque.

### 4. Position américaine (ACC/AHA 2026)

- Débuter un hypolipémiant pour une ICFER **sans** maladie artérielle ni autre indication : **non recommandé** (**COR 3 : Absence de bénéfice, LOE A**).
- Dans l'ICFER **d'origine coronaire**, avec une espérance de vie raisonnable (3 à 5 ans) et sans statine déjà en cours, débuter une statine d'**intensité modérée** « peut être raisonnable » pour réduire les infarctus et AVC (**COR 2b, LOE B-R**), les données poolées CORONA + GISSI-HF suggérant environ **19 %** d'infarctus en moins (faible différence absolue).
- Comme en Europe, aucun arrêt systématique n'est recommandé chez les patients déjà traités ; chez les sujets âgés, toute réflexion tient compte de la fragilité, des autres médicaments et de l'espérance de vie, et non de l'âge seul.

### Nouveaux hypolipémiants et insuffisance cardiaque

- **ODYSSEY OUTCOMES, analyse selon l'antécédent d'insuffisance cardiaque (EHJ, 2022) :** parmi **18 924 patients** après un SCA recevant alirocumab ou placebo, **2 815 (15 %)** avaient un antécédent d'insuffisance cardiaque.
  - **Sans antécédent d'IC :** réduction d'environ un cinquième des événements majeurs (**HR 0,78**).
  - **Avec antécédent d'IC :** aucune réduction (**HR 1,17** ; IC 0,97–1,40), avec une différence statistiquement nette entre les deux groupes, malgré une baisse similaire du LDL et sans réduction des hospitalisations pour IC dans aucun groupe.
  - *Limites majeures :* analyse **post hoc** (simple piste), et ni la définition exacte de l'antécédent d'IC ni la FEVG des patients n'étaient disponibles dans la source ; ce résultat ne doit **pas être assimilé à l'ICFER**.
- **FOURIER** excluait les patients en **NYHA III-IV** ou avec dernière **FEVG < 30 %** (un patient à 35 % de FEVG peu symptomatique pouvait donc y être inclus, sans résultat séparé disponible).
- Les résumés d'**IMPROVE-IT** et **RACING** ne rapportent pas le statut d'insuffisance cardiaque.`,
    },
    {
      headingFr: 'La lipoprotéine(a), ou Lp(a)',
      bodyMarkdownFr: `**Définition :** particule héréditaire porteuse de cholestérol liée au risque d'infarctus du myocarde. Son taux étant déterminé génétiquement, **un seul dosage au cours de la vie suffit**.

### Dépistage

- **Europe :** doser la Lp(a) **au moins une fois dans la vie d'un adulte** (**IIa C** dans ESC/EAS 2019 ; confirmé par ESC 2024 SCC), notamment pour dépister les élévations héréditaires majeures **> 180 mg/dL (> 430 nmol/L)**, dont le risque rejoint celui d'une hypercholestérolémie familiale.
- **États-Unis (ACC/AHA 2026) :** dosage au moins une fois chez tout adulte (**COR 1, LOE B-NR**), sans obligation d'être à jeun.

### Seuils (cités dans les unités exactes de chaque source, la conversion entre mg/dL et nmol/L n'étant pas fiable)

| Source | Seuil | Signification |
|---|---|---|
| **ESC/EAS 2025** | **> 50 mg/dL (105 nmol/L)** | Facteur majorant le risque (**IIa B**). Le risque commence à croître légèrement vers **30 mg/dL (62 nmol/L)** |
| **ESC/EAS 2019** | **> 180 mg/dL (430 nmol/L)** | Taux héréditaire très élevé |
| **ACC/AHA 2026** | **≥ 125 nmol/L (50 mg/dL)** | Facteur majorant le risque (~×1,4 ; ~×2 à 250 nmol/L ; ×4 à 430 nmol/L). En cas de maladie artérielle, Lp(a) élevée et LDL non à l'objectif sous statine, l'ajout d'un anticorps anti-PCSK9 est recommandé (**COR 1, LOE B-R**) : les statines n'abaissent pas la Lp(a), tandis que les anti-PCSK9 la diminuent d'environ **15 à 30 %** |

### Traitements spécifiques de la Lp(a) : état des preuves en 2026

- La mise à jour ESC/EAS 2025 rappelait qu'**abaisser la Lp(a) n'avait pas encore démontré de réduction des événements**.
- **Lp(a)HORIZON (NEJM, 2026) :** injections mensuelles de **pélacarsen** vs placebo chez **8 350 patients** ayant un antécédent d'infarctus, d'AVC ischémique ou d'artériopathie périphérique avec Lp(a) ≥ **70 mg/dL**, déjà bien traités (LDL médian **0,65 g/L**, soit **1,67 mmol/L**), suivis sur une médiane de **4,7 ans**.
  - Malgré une chute de **78 %** de la Lp(a) à 1 an, les événements cardiovasculaires majeurs **n'ont pas diminué** : **12,3 % contre 12,1 %** (**HR 1,02** ; IC 95 % 0,90–1,15), sans effet sur les décès ni sur aucun événement isolé.
  - Plus d'arrêts pour effets indésirables (**20,6 % contre 7,5 %**), surtout syndromes grippaux et réactions au site d'injection ; **19 patients (0,5 %)** ont présenté une anaphylaxie probable, aucune fatale.
  - Ni l'insuffisance cardiaque ni la FEVG n'étaient rapportées dans l'article. Selon une dépêche d'actualité, le laboratoire a depuis arrêté le programme.
- D'autres molécules ciblant la Lp(a) restent en cours d'essais pronostiques : **olpasiran** (*OCEAN(a)-Outcomes*, fin principale estimée en **mars 2028**), **lépodisiran** et **muvalapline**. L'alirocumab abaissait aussi la Lp(a) dans ODYSSEY OUTCOMES. Discutez avec votre cardiologue de ce qu'un dosage de Lp(a) changerait concrètement dans votre prise en charge.`,
    },
    {
      headingFr: 'Aspirine et autres antiagrégants plaquettaires au long cours',
      bodyMarkdownFr: `L'aspirine (*Kardégic*, *Aspégic* faible dose) et le clopidogrel (*Plavix*) sont des **antiagrégants plaquettaires** qui empêchent les plaquettes de s'agréger dans les artères coronaires. Ils diffèrent des **anticoagulants** (apixaban, rivaroxaban, warfarine, etc.), prescrits contre les caillots intracardiaques ou la fibrillation atriale.

### Recommandations ESC 2024 (syndromes coronariens chroniques)

| Situation | Recommandation | Classe |
|---|---|---|
| Après un infarctus ou un stent, une fois la bithérapie terminée | **Aspirine 75 à 100 mg/j, à vie** | **I A** |
| Même situation | **Clopidogrel 75 mg/j** comme alternative sûre et efficace à l'aspirine | **I A** |
| Après pontage aorto-coronarien | **Aspirine 75 à 100 mg/j, à vie** | **I A** |
| Rétrécissement coronaire significatif sans antécédent d'infarctus ni de geste | **Aspirine 75 à 100 mg/j, à vie** | **I B** |
| Après pose de stent, sans besoin d'anticoagulant | Bithérapie **aspirine + clopidogrel** jusqu'à **6 mois** par défaut (**1 à 3 mois** si risque hémorragique élevé) | **I A** |
| Risque thrombotique élevé sans risque hémorragique élevé | Ajout au long cours d'un second antithrombotique à envisager | **IIa A** |

### Lorsqu'un anticoagulant au long cours est également nécessaire (ex. fibrillation atriale)

- Au long cours, l'ESC 2024 privilégie l'**anticoagulant seul**, avec une préférence pour un anticoagulant oral direct (**AOD**) plutôt que la warfarine.
- Après un stent non compliqué, l'aspirine est arrêtée précocement (vers **1 semaine**), suivie de l'association anticoagulant + clopidogrel jusqu'à **6 mois** (jusqu'à **12 mois** si risque thrombotique élevé), puis de l'anticoagulant seul. C'est pourquoi votre cardiologue peut arrêter l'aspirine lorsqu'un anticoagulant est instauré (voir *Thrombus du ventricule gauche et anticoagulants*).

*Précision importante :* l'**aspirine à faible dose** (75–100 mg/j) ne fait **pas** partie des anti-inflammatoires antalgiques (**AINS**) contre-indiqués dans l'insuffisance cardiaque. Certains compléments alimentaires peuvent toutefois majorer le risque de saignement avec l'aspirine (voir *Interactions entre compléments, aliments et médicaments cardiaques*).`,
    },
    {
      headingFr: 'La colchicine à faible dose',
      bodyMarkdownFr: `**Ce que c'est :** un anti-inflammatoire ancien prescrit ici à faible dose (**0,5 mg/jour**) pour freiner l'inflammation des plaques d'athérome dans les artères, et non le muscle cardiaque.

**Recommandations :** l'ESC 2024 SCC indique que la colchicine à faible dose **doit être envisagée** dans la maladie coronaire athéroscléreuse pour réduire les infarctus, AVC et revascularisations (**Classe IIa, Niveau A**), bien qu'un commentaire ait noté ce rehaussement sans grand nouvel essai positif. Le consensus argentin SAC 2025 retient la même classe (**IIa A**), conseille de la réserver aux patients à plus haut risque malgré un traitement complet, de vérifier les interactions (métabolisme **CYP3A4**) et de l'éviter sous **30 mL/min** de clairance rénale *(note : son tableau comporte une coquille imprimant « 5 mg/j », mais la dose des essais est bien **0,5 mg/j**)*.

### Preuves cliniques

- **Méta-analyse de 6 essais (21 800 patients ; EHJ, 2025) :** réduction d'environ un quart des événements cardiovasculaires majeurs (**HR 0,75** — infarctus, AVC ischémiques et revascularisations urgentes), mais **aucun effet** sur la mortalité cardiovasculaire ou toutes causes. *Limites :* forte hétérogénéité entre essais (**I² = 77 %**), attribution précise de certains essais (dont CONVINCE) non détaillée dans la synthèse, et présence parmi les auteurs de l'investigateur principal de COLCOT.
- **LoDoCo2** (maladie coronaire stable) : événements **6,8 % contre 9,6 %** (**HR 0,69**), sans baisse de la mortalité CV.
- **COLCOT** (**4 745 patients** après infarctus récent) : **5,5 % contre 7,1 %** (**HR 0,77**), pas de différence de mortalité ; pneumonies **0,9 % contre 0,4 %**.
- **CLEAR SYNERGY** (NEJM, 2025 ; **7 062 patients**, débutée tôt après un infarctus) : **aucun bénéfice**, **9,1 % contre 9,3 %** (**HR 0,99**).
- **Revue Cochrane 2025 (12 essais) :** moins d'infarctus (**RR 0,74**) et d'AVC (**RR 0,67**) avec certitude élevée, aucun changement de mortalité, et **davantage de troubles digestifs** (**RR 1,68**), le plus souvent légers et transitoires.

### Particularités dans l'insuffisance cardiaque

- L'**insuffisance cardiaque sévère était exclue** des deux principaux essais positifs (COLCOT et LoDoCo2), sans définition précise dans les sources consultées.
- CLEAR SYNERGY incluait des patients à FEVG ≤ 45 %, mais s'est révélé globalement neutre.
- Aucun essai n'a analysé de critères d'insuffisance cardiaque : l'effet dans l'ICFER reste **non testé**.

### Précautions de sécurité (issues de la notice américaine)

- **Contre-indications :** inhibiteurs puissants du CYP3A4 ou de la P-gp (clarithromycine, kétoconazole, itraconazole, ritonavir, ciclosporine), insuffisance rénale sévère (**clairance < 15 mL/min**), insuffisance hépatique sévère, troubles hématologiques préexistants.
- **Reins :** les taux sanguins doublent approximativement en cas d'atteinte rénale modérée à sévère.
- **Inhibiteurs modérés du CYP3A4** (diltiazem, vérapamil, érythromycine, fluconazole) : à éviter chez les personnes à risque d'accumulation.
- **Muscles :** l'association aux statines, fibrates ou à la digoxine accroît le risque musculaire (douleurs musculaires dans LoDoCo2 : **21,2 % contre 18,5 %** sous placebo).
- **Jus de pamplemousse :** à éviter. Seul votre cardiologue peut déterminer si la colchicine est adaptée à votre cas.`,
    },
    {
      headingFr: 'Effets secondaires, interactions alimentaires et limites des preuves',
      bodyMarkdownFr: `### Statines, ézétimibe et injections

- **Statines :** selon la FFC, des douleurs ou crampes musculaires surviennent chez environ **5 %** des patients ; les statines sont globalement bien tolérées. Dans CORONA et GISSI-HF, la rosuvastatine n'a pas entraîné d'excès d'effets musculaires. Dans RACING, une statine modérée + ézétimibe a causé moins d'arrêts ou de baisses de dose (**4,8 % contre 8,2 %**) qu'une forte dose de statine seule. En cas d'intolérance avérée aux statines, l'ESC/EAS 2025 recommande les non-statines à bénéfice prouvé (ézétimibe, anti-PCSK9, acide bempédoïque — **I A**).
- **Injections (anti-PCSK9 et inclisiran) :** réactions locales au point d'injection un peu plus fréquentes — évolocumab **2,1 % contre 1,6 %**, alirocumab **3,8 % contre 2,1 %**, et davantage d'événements locaux avec l'inclisiran dans ORION-10/11.

### Aliments et compléments alimentaires

- **Jus de pamplemousse :** augmente la concentration de simvastatine et d'atorvastatine ; le RCP de la rosuvastatine ne comporte pas de mise en garde sur le pamplemousse.
- **Levure de riz rouge :** agit de fait comme une statine non dosée ; la réglementation européenne impose un avertissement contre son association aux médicaments hypolipémiants.
- **Compléments et vitamines sans preuve :** l'ESC/EAS 2025 **déconseille** les compléments sans sécurité ni baisse démontrée du LDL pour réduire le risque cardiovasculaire (**Classe III, Niveau B**).
- **Oméga-3 (icosapent éthyl *Vazkepa*) :** l'ESC/EAS 2025 indique que l'icosapent éthyl à forte dose (**2 g deux fois par jour**) associé à une statine doit être envisagé chez les patients à haut risque ayant des triglycérides à jeun de **1,35 à 4,99 g/L (1,52 à 5,63 mmol/L)** (**IIa B**). Voir *Acides gras oméga-3 (huiles de poisson)* pour les aspects IC et fibrillation atriale, et *Alimentation cardioprotectrice (modèle méditerranéen)* pour les stérols végétaux.

### Limites des connaissances actuelles

- **Peu de preuves propres à l'ICFER pour les molécules récentes :** aucune donnée spécifique d'insuffisance cardiaque n'a été identifiée pour l'ézétimibe, l'acide bempédoïque ou l'inclisiran ; FOURIER excluait les FEVG < 30 % et NYHA III-IV ; l'analyse IC d'ODYSSEY OUTCOMES est post hoc sans FEVG renseignée.
- **Ancienneté des essais statines-IC :** CORONA et GISSI-HF datent d'avant la quadrithérapie actuelle et n'ont testé que la rosuvastatine 10 mg.
- **Colchicine :** non testée dans l'IC sévère, avec des résultats divergents entre essais.
- **Domaine en évolution rapide :** plusieurs sources ont été consultées par résumés (CORONA, GISSI-HF, IMPROVE-IT, RACING, FOURIER, ODYSSEY), tandis que le texte intégral a été vérifié pour ACC/AHA 2026 et Lp(a)HORIZON ; les essais pronostiques de l'inclisiran et des nouvelles molécules anti-Lp(a) sont attendus entre **2027 et 2028**.`,
    },
  ],
  relatedArticleSlugs: [
    'cardiomyopathie-ischemique',
    'medicaments-insuffisance-cardiaque',
    'occlusion-coronaire-chronique-cto',
    'thrombus-vg-et-anticoagulants',
    'medicaments-effets-secondaires-suivi',
    'interactions-complements-aliments-medicaments',
    'omega-3-huile-de-poisson',
    'alimentation-cardioprotectrice',
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
      label: 'Recommandations ACC/AHA 2026 sur les dyslipidémies (Circulation, avril 2026)',
      detail: 'Cibles LDL/non-HDL américaines, définition du très haut risque, grades des traitements additionnels, recommandations ICFER et Lp(a)',
    },
    {
      label: 'Fédération Française de Cardiologie (brochure Cholestérol) et consensus SAC 2025',
      detail: 'Unités françaises en g/L, tolérance des statines, calendrier des bilans et synthèse sur la colchicine',
    },
    {
      label: 'Essais CORONA (2007), GISSI-HF (2008), IMPROVE-IT, RACING, FOURIER et ODYSSEY OUTCOMES (2022)',
      detail: 'Données cliniques des statines dans l’IC, de l’ézétimibe et des anticorps anti-PCSK9',
    },
    {
      label: 'Lp(a)HORIZON (NEJM, 2026) et pipeline ORION-4 / OCEAN(a)-Outcomes',
      detail: 'Résultats du pélacarsen et état des essais en cours sur la Lp(a) et l’inclisiran',
    },
    {
      label: 'Méta-analyse colchicine (EHJ, 2025), LoDoCo2, COLCOT, CLEAR SYNERGY (2025) et Cochrane 2025',
      detail: 'Efficacité coronaire, tolérance digestive et interactions de la colchicine',
    },
  ],
  disclaimerType: 'medical',
};
