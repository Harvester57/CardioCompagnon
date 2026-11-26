import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'occlusion-coronaire-chronique-cto',
  sourceWikiPath: 'wiki/concepts/chronic-total-occlusion.md',
  titleFr: 'Occlusion coronaire chronique (CTO) et collatérales',
  category: 'dispositifs',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'cto',
    'occlusion-coronaire-chronique',
    'collatérales',
    'rentrop',
    'iva',
    'lad',
    'midcab',
    'viabilité',
    'ischémie',
    'revascularisation',
    'icfer',
  ],
  aliases: [
    'CTO',
    'Occlusion coronaire chronique',
    'Artère bouchée',
    'IVA occluse',
    'LAD occluse',
    'Collatérales',
    'Circulation collatérale',
    'Grade de Rentrop',
    'Angioplastie CTO',
    'CTO PCI',
    'MIDCAB',
    'Pontage mammaire IVA',
  ],
  linkedModules: ['cto'],
  plainSummaryFr:
    'Une occlusion coronaire chronique (CTO) désigne une artère du cœur totalement bouchée depuis au moins 3 mois. Pour compenser, le cœur développe souvent de petits vaisseaux de secours appelés collatérales, qui proviennent des artères voisines et maintiennent en vie le muscle situé en aval. Ces collatérales suffisent en général au repos, mais rarement à l’effort. Dans les essais randomisés, rouvrir une CTO par angioplastie (stent) soulage l’angine de poitrine chez les personnes qui en souffrent (y compris contre procédure factice dans ORBITA-CTO), mais l’essoufflement ne s’est pas clairement amélioré, la mortalité et les infarctus n’ont pas diminué et la FEVG n’a pas augmenté en moyenne. Les textes intégraux confirment que ces essais n’ont inclus quasiment aucun patient avec FEVG ≤ 35 % (médiane 55 % dans ORBITA-CTO, exclusion dans ISCHEMIA, aucun bénéfice dans le sous-groupe EXPLORE ≤ 40 %). Toute décision repose sur des examens d’ischémie et de viabilité ainsi que sur une concertation en Heart Team.',
  sections: [
    {
      headingFr: 'Qu’est-ce qu’une occlusion coronaire chronique (CTO) ?',
      bodyMarkdownFr: `- **Définition :** artère coronaire totalement obstruée (flux nul, grade **TIMI 0**) depuis **3 mois ou plus**.
- **Fréquence :** environ un quart des patients passant une coronarographie en présentent une selon les recommandations américaines (ACC/AHA/SCAI 2021) ; un registre canadien rapportait environ **18 %** des sténoses significatives (méthode de comptage différente).
- **Rôle clé de l’IVA (artère interventriculaire antérieure, LAD en anglais) :** elle irrigue la paroi antérieure du ventricule gauche, la principale cavité de pompage. Son occlusion pèse donc particulièrement sur la fonction ventriculaire et sert d’exemple principal dans cet article.
- **Différence avec un infarctus aigu :** une CTO est une occlusion ancienne et stabilisée. Il est déconseillé de tenter de rouvrir une CTO au cours d’un infarctus aigu concernant une autre artère (consensus EAPCI/EACVI 2024).`,
    },
    {
      headingFr: 'Circulation collatérale et grade de Rentrop',
      bodyMarkdownFr: `**Ce que sont les collatérales :** de fins vaisseaux reliant une artère saine au territoire situé derrière l’occlusion (par exemple depuis la coronaire droite vers l’IVA). La plupart des CTO disposent de plusieurs trajets, les deux ou trois principaux assurant l’essentiel du débit. Elles mettent plusieurs semaines à se développer et sont présentes dans environ **90 %** des CTO.

**Le grade de Rentrop (0 à 3)** décrit, lors de la coronarographie, le degré de remplissage de l’artère bouchée *par* les collatérales (le grade 3 correspond au meilleur remplissage). Un autre score (**grade CC**, de CC0 à CC3) qualifie le calibre des canaux collatéraux eux-mêmes.

- **Un grade Rentrop 3 est habituel, pas exceptionnel :** environ **85 %** des CTO atteignent ce grade.
- Ce grade décrit le remplissage visuel de l’artère réceptrice, non la capacité maximale de débit à l’effort.

**Ce que font les collatérales — et leurs limites :**

- **Au repos :** elles peuvent éviter un infarctus constitué dans ce territoire et parfois maintenir une contraction musculaire.
- **À l’effort :** leur réserve est très limitée. Même avec des collatérales bien visibles, la pression sanguine mesurée en aval d’une CTO reste très basse : la **FFR moyenne en aval est de 0,29** (alors que le seuil habituel de sténose significative se situe à 0,75–0,80), et le consensus EAPCI/EACVI 2024 note qu’elle reste presque toujours inférieure à **0,52**.
- **Plus de 90 %** des patients ayant une occlusion bien collatéralisée deviennent ischémiques (en manque d’oxygène) à l’effort ; un réseau riche ne garantit à lui seul ni la viabilité du muscle ni l’absence d’ischémie.
- Chez environ **40 %** des patients, le débit dans le territoire collatéralisé diminue même au stress maximal (**« vol coronaire »**).
- **Régression après réouverture :** une fois l’artère rouverte, les collatérales régressent en quelques minutes à quelques mois ; seuls **18 %** environ conservent des collatérales bien recrutables au suivi. Le territoire dépend alors de la perméabilité du stent, et une occlusion ultérieure du stent expose à un syndrome coronarien aigu.

Comme la mesure invasive de pression (FFR) en aval d’une CTO est presque toujours anormale, le consensus EAPCI/EACVI 2024 recommande plutôt des **tests non invasifs d’ischémie** (imagerie de stress), en particulier lorsque les symptômes sont atypiques ou dominés par l’essoufflement.`,
    },
    {
      headingFr: 'Pourquoi la question diffère lorsque le ventricule est affaibli et dilaté',
      bodyMarkdownFr: `Lorsque la pompe est normale et qu’il existe de l’angor, l’objectif principal est le confort symptomatique. Dans la cardiomyopathie ischémique, les questions s’élargissent :

- **Le muscle en aval est-il vivant (viable) ou cicatriciel ?** Seul un muscle vivant mais sous-perfusé peut récupérer une contractilité après restauration du flux. Dans la méta-analyse de **Leite (2026, texte intégral et supplément)**, la contraction s’améliorait dans les segments dysfonctionnels *viables* (**+16,7 %**) et moins dans les segments non viables cicatriciels (**+6,5 %**, non significatif), bien que la comparaison cicatricielle ne repose que sur **23 segments**.
- **Existe-t-il une ischémie inductible à l’effort ?** Le consensus EAPCI/EACVI 2024 précise que la réouverture ne doit être envisagée que si le territoire est à la fois **viable et ischémique** aux examens.
- **La revascularisation aide-t-elle globalement un cœur affaibli ?** À FEVG ≤ 35 % dans la maladie coronaire étendue, **STICH** a montré un gain de survie avec le pontage alors que **REVIVED-BCIS2** était neutre avec les stents malgré la viabilité — aucun de ces deux essais ne portait spécifiquement sur une CTO isolée (voir l’article « Revascularisation coronaire : pontage et stents »).`,
    },
    {
      headingFr: 'Ce que montrent les essais cliniques sur l’angioplastie de CTO',
      bodyMarkdownFr: `Les essais randomisés ont comparé la réouverture de la CTO par stent au traitement médical seul (ou, dans **ORBITA-CTO**, à une procédure factice). **EXPLORE**, **REVASC**, l’analyse CTO d’**ISCHEMIA**, **ORBITA-CTO**, ainsi que les méta-analyses avant/après (**Megaly 2018**, **Leite 2026**) ont désormais été exploités en texte intégral ; **DECISION-CTO** et **EuroCTO** restent connus par résumés ou synthèses secondaires.

| Essai / analyse | Population | Résultat | Limite / nuance |
|---|---|---|---|
| **Méta-analyse de 5 essais randomisés (van Veelen 2021)** | 1 790 patients (**EXPLORE**, **EuroCTO**, **REVASC**, **IMPACTOR-CTO**, **DECISION-CTO**) ; FEVG moyenne ~**53 %** | **Pas de baisse de la mortalité** (à 1 an RR 1,70 [0,50–5,80] ; jusqu’à 4 ans RR 1,14 [0,38–3,40]), décès cardiaque, infarctus ou MACE (1 an RR 0,69 ; 4 ans RR 0,85, non significatifs). **Pas de gain de FEVG** (variation +0,28 % [-0,70 à 1,27] ; FEVG à ~5 mois +2,07 % [-1,12 à 5,25]). Moins d’angor résiduel à 1 an (**20,8 % contre 27,3 %**, RR 0,65 [0,50–0,84], sur 2 essais). Moins de réinterventions sur la CTO à 1 an (RR 0,28), non significatif à long terme | Texte intégral. Résultat angor issu de 2 essais ; pas d’effet significatif sur les sous-scores SAQ. FEVG majoritairement normale ; aucun sous-groupe FEVG basse |
| **DECISION-CTO (2019)** | Patients avec CTO, angioplastie CTO vs abstention | Décès, infarctus, AVC ou revascularisation à ~4 ans : **22,3 % contre 22,4 %** (**HR 1,03**). Qualité de vie améliorée de façon identique | Résumé seul. Arrêt précoce, manque de puissance ; ~**20 %** de croisement vers stent sous 3 jours ; effectifs par bras incohérents avec le total déclaré |
| **EuroCTO** | Patients avec angor et CTO | Moins d’angor et meilleure qualité de vie avec stent ; absence d’angor à 1 an **71,6 % contre 57,8 %** ; pas de différence de décès CV ou d’infarctus à 3 ans | Chiffres rapportés par le consensus EAPCI/EACVI 2024 et les recommandations US 2021 |
| **EXPLORE (2016, texte intégral et suivi 10 ans)** | **304** patients quelques jours après un STEMI (CTO PCI ~5 jours après le stent d’urgence), avec CTO sur une *autre* artère ; FEVG moyenne ~**41 %** avant randomisation | FEVG à l’IRM à 4 mois : **44,1 % contre 44,8 %** (p = 0,60) ; taille du VG inchangée. Événements majeurs **5,4 % contre 2,6 %** (NS) ; décès cardiaques **4 contre 0** (p = 0,056). **À 10 ans :** pas moins de MACE (**HR 1,10**) ni de décès ; mortalité CV plus élevée avec stent (HR ~2) en analyse non préspécifiée ; moins d’essoufflement (**17 % contre 35 %**) | Succès technique de **73 %** (laboratoire central). Sous-groupe **CTO de l’IVA** (69 patients) : FEVG **47,2 % contre 40,4 %** (non préspécifié, exploratoire ; les CTO hors IVA faisaient légèrement moins bien). **Les 84 patients partis à FEVG ≤ 40 % n’ont montré aucun bénéfice** (-2,0 points, IC 95 % : -7,0 à 3,0). Aucune sélection sur viabilité/ischémie |
| **REVASC (2018, texte intégral)** | **205** patients stables dans un centre allemand ; FEVG < 25 % exclue ; FEVG médiane **55–60 %** ; majorité de CTO coronaire droite et atteinte pluritronculaire | Pas de différence d’épaississement pariétal à 6 mois (**4,1 % contre 6,0 %**, p = 0,57) ni de variation de FEVG (**+0,9 contre +0,7 point**) ; taille du VG inchangée. Événements majeurs à 12 mois **5,9 % contre 16,3 %**, tirés par les réinterventions (surtout traitement ultérieur de la CTO dans le bras témoin), sans réduction des décès ni des infarctus | Aucune sélection sur viabilité/ischémie ; pas d’interaction avec une **FEVG ≤ 50 %** (63 patients). Seul le sous-groupe SYNTAX bas favorisait l’angioplastie |
| **ISCHEMIA — analyse CTO (2025, texte intégral)** | **1 470** participants avec au moins une CTO au coroscanner ; **FEVG < 35 % exclue** (médiane **60 %**) | Stratégie invasive randomisée : pas de baisse des décès CV ou infarctus (4 ans **11,7 % contre 13,9 %** ; différence à 5 ans **-3,5 %**, IC 95 % : -7,8 à +0,8 %) : plus d’infarctus procéduraux, moins d’infarctus spontanés. Meilleurs scores d’angor et de dyspnée. **Événements d’insuffisance cardiaque plus fréquents avec la stratégie invasive (2,5 % contre 0,6 %)** | Sous-groupe comparant des stratégies globales : seuls **353 sur 752** patients du bras invasif ont eu leur CTO rouverte. La « probabilité > 90 % » vient d’une analyse **modélisée non randomisée**, et l’éditorial (Ali 2025) note un gain randomisé d’angor (**2,9 points**) sous le seuil usuel de 5 points |
| **ORBITA-CTO (2026, pré-épreuve intégrale)** | **50** patients avec angor sur CTO monotronculaire avec ischémie et viabilité prouvées ; FEVG médiane **55 %**, **aucun < 35 %** | Premier essai **contrôlé contre procédure factice (placebo)** : nette amélioration de l’angor (**OR 4,38**, IC 95 % : 1,57–12,69), ~**31 jours sans angor en plus** sur 6 mois ; qualité de vie SAQ **+18 points**. **Essoufflement (NYHA, échelle de dyspnée) et état général (EQ-5D) non clairement améliorés** | Très petit effectif ; 2 centres experts britanniques ; symptômes uniquement, pas de critère de fonction VG. **1 perforation** ayant nécessité drainage sur 25 procédures |
| **Analyse poolée QoL EuroCTO + DECISION-CTO (2026)** | 518 patients avec CTO unique sans autre sténose significative | Meilleure qualité de vie (variation SAQ **19,5 contre 11,3**) et moins d’angor à 12 mois ; décès cardiaque ou infarctus **5,1 % contre 2,7 %** (NS) | Analyse post-hoc en synthèse secondaire ; bénéfice maximal chez les plus symptomatiques ; contraste avec le résultat SAQ neutre de 2021 |
| **Études sélectionnées par viabilité/ischémie (Leite 2026, texte intégral)** | 21 études (3 randomisées, 18 observationnelles) ; un seul essai exigeait viabilité/ischémie à l’inclusion ; FEVG initiale non rapportée | Après angioplastie *réussie*, FEVG **+3,97 points** (IC 95 % : 1,51–6,42), mais issue de seulement **3 études IRM observationnelles (133 patients)**. Contraction améliorée dans les segments viables (+16,7 %) ; comparaison avec les segments cicatriciels sur 23 segments seulement ; taille du VG inchangée | Données majoritairement avant/après sans groupe témoin : causalité non démontrée |

**En synthèse :**

- **Symptômes :** le bénéfice le mieux établi est le soulagement de l’**angor** chez les patients qui en présentent, désormais confirmé contre placebo (**ORBITA-CTO**). L’essoufflement ne s’y est toutefois pas clairement amélioré, point important lorsque la dyspnée prédomine sur la douleur thoracique.
- **Décès et infarctus :** aucune réduction randomisée. Les registres associant réouverture réussie et meilleure survie ne constituent que des hypothèses.
- **Fonction de pompe :** aucun gain moyen de FEVG dans les essais randomisés ; les signaux favorables proviennent d’études sans groupe témoin ou d’un sous-groupe. L’excès d’événements d’insuffisance cardiaque observé dans le bras invasif d’ISCHEMIA CTO reste inexpliqué et issu d’un sous-groupe.

### Ce que disent les éditoriaux et les essais encore attendus (au 25 novembre 2026)

- **Éditorial Ali (2025) sur ISCHEMIA CTO :** tenter d’ouvrir une CTO n’a été ni plus sûr ni plus efficace que les médicaments sur les décès CV ou infarctus ; le gain randomisé d’angor était faible ; le coroscanner a pu classer certaines quasi-occlusions en CTO ; les taux d’ouverture (~50 % par stent, ~66 % par pontage) étaient très inférieurs aux ~90 % des essais CTO dédiés ; le pontage reste une voie raisonnable en atteinte pluritronculaire symptomatique.
- **Éditorial Jaber (2018) sur REVASC :** REVASC et EXPLORE ne prouvent pas que la fonction VG ne peut jamais s’améliorer (FEVG surtout normale, absence de sélection par viabilité/ischémie, autres stents associés). L’essai qui manque encore inclurait des patients avec **FEVG basse et viabilité documentée ou ischémie étendue** sur une CTO majeure (IVA, ou coronaire droite + circonflexe). Dans l’attente, l’auteur limite l’angioplastie de CTO aux symptômes persistants en territoire viable après traitement des autres lésions.
- **Essais attendus et correction du 25 novembre 2026 :** l’essai **ISCHEMIA-CTO (NCT03563417)** est en cours de recrutement (**1 560** patients estimés, fin primaire estimée **novembre 2028** au registre ; résultats attendus vers 2032 selon l’éditorial). **Correction importante :** l’éditorial citait aussi **SHINE-CTO** comme essai contre placebo encore attendu, mais sa fiche de registre (**NCT02784418**) montre qu’il a été **retiré pour raisons de financement pendant la pandémie avec 0 patient inclus** (dernière mise à jour juin 2021) : aucun résultat de SHINE-CTO ne verra donc le jour (voir l’article « Essais cliniques en cours et à suivre »).

### Rouvrir une CTO peut-il renforcer l’ensemble du ventricule ?

Cette question se pose lorsque tout le ventricule gauche est affaibli (dysfonction globale) alors qu’une seule artère est bouchée. **Aucune étude n’a sélectionné spécifiquement ce cas** ; les données ci-dessous sont donc indirectes :

- **L’amélioration reste locale :** dans la sous-étude IRM d’**EXPLORE** (180 patients), l’ouverture de la CTO n’a modifié ni la FEVG globale (**+4,6 contre +3,8 points**, p = 0,52) ni la taille du VG, mais a amélioré l’épaississement des **segments affaiblis et viables du territoire de la CTO** (**17 % contre 11 %**, p = 0,02). Dans le texte intégral d’**EXPLORE**, le sous-groupe le plus proche d’un cœur affaibli (**FEVG ≤ 40 %**, 84 patients) ne montrait **aucun gain de FEVG ni de taille ventriculaire** (**-2,0 points**, IC 95 % : -7,0 à 3,0).
- **REVASC (205 patients stables) :** aucun gain d’épaississement régional (**4,1 % contre 6,0 %**) ni de FEVG (**+0,9 contre +0,7 point**), sans différence chez les 63 patients avec FEVG ≤ 50 %. Le sous-groupe peu atteint par ailleurs (score SYNTAX ≤ 13, 71 patients) montrait plus d’amélioration régionale (~+15 points, intervalle large), mais les 20 patients réellement monotronculaires n’en montraient aucune.
- **Les parois hors du territoire CTO ne changent pas (Everaars 2021) :** dans une cohorte néerlandaise IRM de 150 patients (67 % monotronculaires, sans groupe témoin), la FEVG globale a gagné 1,4 point sans modification du strain global, et les 710 segments distants n’ont pas bougé (strain circonférentiel **18,7 % contre 18,9 %**). Toutefois, ces segments distants étaient sains au départ et les cardiomyopathies non ischémiques associées étaient exclues : on ne sait donc pas si des parois distantes déjà affaiblies récupèrent.
- **Collatérales et récupération :** dans la sous-étude IRM d’EXPLORE, les segments faibles du territoire CTO ont mieux récupéré en présence de bonnes collatérales (Rentrop 2–3 : **16 % contre 11 %**, p = 0,04), **que la CTO ait été rouverte ou non**.
- **Études observationnelles à FEVG basse (sans groupe témoin) :**
  - **Cardona 2016** (32 patients, FEVG ≤ 40 %, viabilité/ischémie, IRM à 6 mois après succès) : FEVG passée de ~**31 % à 38 %** avec réduction du volume télésystolique, mais la plupart étaient pluritronculaires et environ un tiers ont eu d’autres artères stentées en parallèle.
  - **Sammour 2025** (142 tentatives, ETT, monocentrique) : après succès, FEVG **+3,6 points** au total et **+7,6 points** chez les 50 patients partis en dessous de 50 % (sans groupe témoin ni test de viabilité).
  - **Megaly 2018 (texte intégral, 34 études observationnelles, ~2 800 patients) :** gain moyen de **+3,8 points** de FEVG après succès (+5,0 dans les études partant sous 50 % contre +2,6 au-dessus), mais **seules 2 études sur 34** avaient une FEVG moyenne initiale < 40 %, le volume télédiastolique ne changeait pas et les échecs (70 patients) étaient trop rares pour comparer.
  - Sans groupe témoin, ces séries ne distinguent pas l’effet propre de la CTO de celui des autres stents ou de la titration du traitement de fond.
- **Une seule artère peut-elle expliquer un cœur globalement faible ?** Selon l’éditorial de REVASC (avis d’expert), une CTO isolée de la coronaire droite ou d’une circonflexe non dominante explique rarement à elle seule une FEVG basse, alors qu’une CTO de l’IVA (ou coronaire droite + circonflexe) irrigue un territoire suffisamment vaste pour le rendre plausible. Voir aussi l’article « Confirmer la cause de la dysfonction du ventricule gauche ».`,
    },
    {
      headingFr: 'Examens avant décision et options pour une IVA occluse isolée',
      bodyMarkdownFr: `### Bilan pré-décisionnel

Le consensus **EAPCI/EACVI 2024** (branches interventionnelle, imagerie et chirurgicale de l’ESC) préconise :

- **En cas de dysfonction ventriculaire gauche :** rechercher une **ischémie inductible et une viabilité** dans le territoire de la CTO.
- **Chez les personnes sans symptôme** ayant une dysfonction VG : ces tests peuvent apporter une information pronostique et être envisagés au suivi dans des cas sélectionnés.
- **IRM cardiaque** privilégiée pour la viabilité lorsqu’elle est disponible ; **TEP (PET)** préférée à la scintigraphie (SPECT) pour la perfusion.
- Des seuils indicatifs d’ischémie significative (par exemple > 10 % du myocarde en SPECT) et de viabilité (cicatrice IRM occupant moins d’un quart à la moitié de l’épaisseur de la paroi) sont mentionnés dans un tableau du consensus (non revérifié intégralement).
- Le **EuroCTO Club (2019)** rappelle une règle pratique : un territoire qui se contracte encore est présumé viable ; un territoire immobile nécessite une preuve d’imagerie de viabilité.
- Les recommandations **ESC 2024** sur les syndromes coronariens chroniques ne donnent **pas de recommandation gradée** sur les tests de viabilité, jugeant leur rôle dans l’ICFER ischémique encore débattu (voir l’article « Examens et chiffres : NT-proBNP, taille du VG et cicatrice IRM »).

### Les trois options face à une occlusion isolée de l’IVA

Le choix appartient à la **Heart Team** selon les symptômes, l’anatomie, les examens et vos préférences :

1. **Traitement médical seul :** de nombreuses personnes vivent normalement sous traitement protecteur des coronaires et traitement de fond de l’insuffisance cardiaque (les 4 piliers), qui permet à lui seul une récupération de la FEVG chez une proportion notable de patients.
2. **Angioplastie de CTO (stents) :** taux de succès technique supérieur à **80–90 %** en centres experts (dans **PROGRESS-CTO**, texte intégral, succès technique comparable à **86 %** à FEVG ≤ 35 % contre **87 %** à FEVG normale). Elle doit être programmée séparément (et non faite « à chaud » lors d’une coronarographie diagnostique) ; elle dure au moins **1 à 2 heures**, souvent avec double abord vasculaire (poignet et/ou aine).
3. **Pontage par artère mammaire interne gauche (AMIG / LIMA) sur l’IVA :** la technique **MIDCAB** (pontage mini-invasif sans ouvrir le sternum, par petite incision thoracique gauche) est parfois utilisée. Le consensus EAPCI/EACVI 2024 note une meilleure survie sans événement à long terme avec un greffon LIMA-IVA au prix d’un geste initial plus lourd. Une méta-analyse de 2025 (**Gallingani 2025**, ~2 170 patients avec sténose isolée de l’IVA, 4 essais + études ajustées, résumé lu) retrouvait nettement moins de réinterventions après MIDCAB qu’après stent (**HR 0,35**), moins d’événements majeurs (**HR 0,59**) et une survie à la limite de la significativité (**HR 0,76**, IC 95 % : 0,58–1,00), sans avantage significatif face aux stents actifs seuls ; cette analyse ne portait **ni sur des CTO ni sur des FEVG basses** et ne comparait pas la chirurgie aux médicaments seuls. Les recommandations US 2021 classent le pontage LIMA-IVA **Classe 2a** pour la survie uniquement en atteinte **pluritronculaire** avec FEVG 35–50 %.

**L’argument du « double péril » (double jeopardy) :** certains cardiologues soulignent que si l’artère donneuse des collatérales (par exemple la coronaire droite alimentant une IVA bouchée) se bouche brutalement plus tard, l’infarctus toucherait deux territoires à la fois. La revue qui décrit ce raisonnement (Cilia 2024) le qualifie elle-même d’indication **moins certaine**, sans preuve randomisée qu’une réouverture préventive évite ce scénario.`,
    },
    {
      headingFr: 'Risques de l’angioplastie de CTO (registres PROGRESS-CTO et OPEN-CTO)',
      bodyMarkdownFr: `L’angioplastie d’une CTO est plus complexe qu’une pose de stent habituelle : le consensus EAPCI/EACVI 2024 estime les complications **plus fréquentes et plus graves (environ 1 à 3 %)** que dans l’angioplastie coronaire stable classique.

| Source (registre) | Événement mesuré | Taux |
|---|---|---|
| **OPEN-CTO** (via recommandations US) | Décès à 30 jours | **1,3 %** |
| **OPEN-CTO** (via recommandations US et Cilia 2024) | Perforation coronaire nécessitant traitement | **4,8 %** |
| **OPEN-CTO** (via Cilia 2024) | Décès hospitalier / infarctus / pontage en urgence | **0,9 % / 2,6 % / 0,7 %** |
| **PROGRESS-CTO** (10 487 gestes, 2012–2022) | Événement cardiaque majeur hospitalier / décès / infarctus | **2,05 % / 0,45 % / 0,63 %** |
| **PROGRESS-CTO** | Épanchement autour du cœur nécessitant un drainage (péricardiocentèse) | 83 cas : **1,1 %** sans antécédent de pontage, ~**0,8 %** au total |
| **EuroCTO Club** (centres experts) | Tamponnade / décès | **1,3 % / 0,4 %** |

**Impact d’une FEVG basse (PROGRESS-CTO, Simsek 2022, texte intégral et supplément — 7 827 procédures dont 1 239 à FEVG ≤ 35 %, moyenne 27 %) :**

- La **mortalité hospitalière** était de **1,1 %** à **FEVG ≤ 35 %**, contre **0,4 %** à FEVG 36–49 % et **0,3 %** à FEVG ≥ 50 %. Les événements majeurs globaux à l’hôpital ne différaient pas significativement (**2,7 %**, **2,1 %**, **1,9 %**).
- Après ajustement sur l’âge et la technique de franchissement, **chaque baisse de 10 points de FEVG augmentait d’environ 38 %** la cote de décès hospitalier.
- Environ **1 patient sur 6** à FEVG basse a eu besoin d’une pompe cardiaque temporaire durant la procédure (**1 sur 8** planifiée à l’avance). Plusieurs décès hospitaliers ont fait suite à une perforation, une tamponnade ou un saignement.
- Le suivi n’était disponible que pour **35 %** des patients (médiane **55 jours**) : décès de **4,9 %**, **3,2 %** et **1,4 %** selon la tranche de FEVG, pour des taux similaires de nouveaux infarctus et de réinterventions. En l’absence de groupe témoin sous médicaments seuls, cette surmortalité reflète en partie des patients plus fragiles et non uniquement la procédure.
- Dans les scores de risque **PROGRESS-CTO** (article intégral), une **FEVG ≤ 45 %** doublait environ la cote de décès hospitalier (**odds ratio 2,13**), tout en gardant un risque absolu faible (scores de la majorité des patients autour de **0,1 à 0,5 %**).

**Autres facteurs prédictifs de complications dans PROGRESS-CTO :**

- **Âge ≥ 65 ans** et **calcification importante** du segment occlus augmentent les événements majeurs, les décès et les perforations à drainer.
- **Technique de franchissement :** la voie antérograde simple est la plus sûre ; la dissection-réentrée double environ le risque d’événement majeur et la **voie rétrograde** (en passant à rebours par les collatérales) le **triple presque** — les auteurs déconseillent la voie rétrograde en première intention lorsqu’une autre approche est possible.
- Un **moignon proximal plat** (« blunt stump ») accroît les événements majeurs et les infarctus procéduraux ; les **femmes** présentaient davantage d’événements majeurs et de perforations nécessitant drainage ; la longueur de l’occlusion n’était pas un prédicteur indépendant.
- Ces scores n’ont été validés qu’en interne dans le registre. S’ajoutent les risques classiques d’atteinte rénale liée au produit de contraste, d’hématome au point de ponction et d’irradiation prolongée. Enfin, ces chiffres proviennent de centres à haut volume et peuvent différer ailleurs.`,
    },
    {
      headingFr: 'Ce que disent les recommandations et limites des preuves',
      bodyMarkdownFr: `**Aucune recommandation officielle ne comporte de ligne dédiée à une CTO sans angor ni à une CTO avec FEVG réduite.**

- **ESC 2024 (syndromes coronariens chroniques) :** pas de ligne spécifique CTO ; le texte note que l’angioplastie de CTO améliore l’angor et la qualité de vie sans réduire décès ni infarctus. Pour une atteinte de l’IVA proximale (1 ou 2 vaisseaux), la revascularisation pour le pronostic (**Classe I B**) ne concerne que les **FEVG > 35 %** ; en cas de symptômes persistants sous traitement, pontage ou stent est **Classe I A**. À **FEVG ≤ 35 %**, choix en Heart Team (**Classe I C**) et pontage pour la survie (**Classe I B**) réservé à l’atteinte **pluritronculaire**. L’ancienne ligne 2018 sur l’atteinte mono- ou bitronculaire à FEVG ≤ 35 % (IIa C) n’a pas été reconduite en 2024 : une CTO isolée de l’IVA sans angor autour de 35 % se situe donc **entre les cases des tableaux**. (Une recommandation ESC 2018 de classe IIa B pour angor réfractaire ou large zone ischémique est citée de seconde main sans confirmation de maintien.)
- **États-Unis (ACC/AHA/SCAI 2021 et AHA/ACC 2023) :** seule ligne CTO en 2021 : bénéfice symptomatique jugé **incertain (Classe 2b, B-R)** en cas d’angor réfractaire et d’anatomie adaptée après traitement des autres lésions ; aucune ligne CTO en 2023. Pontage recommandé en pluritronculaire / tronc commun à FEVG ≤ 35 % (**Classe 1, B-R**).
- **Argentine (consensus SAC 2025) :** pas de recommandation spécifique CTO ; même synthèse des essais que ci-dessus.
- **Consensus EAPCI/EACVI 2024 (non gradé) :** les symptômes résistants au traitement doivent rester le **motif principal** ; les données actuelles ne soutiennent pas l’angioplastie de CTO pour améliorer le pronostic et ne permettent pas de conclure fermement sur la FEVG ; tester ischémie et viabilité en cas de dysfonction VG et discuter en Heart Team (il cite comme cas envisageable une personne jeune avec CTO de l’IVA proximale et ischémie silencieuse importante + viabilité).
- **EuroCTO Club 2019 (groupe d’opérateurs, non société savante) :** propose la recanalisation chez les patients asymptomatiques dès **≥ 10 % d’ischémie du VG** — seuil **non repris** par les recommandations US 2021, ESC 2024 ni par le consensus EAPCI/EACVI 2024.

### Limites des preuves

- **Aucun essai randomisé de CTO à FEVG ≤ 35 % :** la FEVG moyenne des essais était d’environ **53 %** (ORBITA-CTO médiane 55 %, aucun < 35 % ; REVASC médiane 55–60 %, < 25 % exclu ; ISCHEMIA excluait < 35 % ; les 84 patients d’EXPLORE à ≤ 40 % n’ont montré aucun bénéfice).
- **Aucun essai randomisé de CTO chez des personnes sans angor :** ORBITA-CTO et les analyses de qualité de vie ont inclus des patients symptomatiques.
- **Essais de petite taille, arrêtés tôt ou marqués par des croisements** (DECISION-CTO, EXPLORE), et **signaux faibles sur la fonction VG** (un sous-groupe d’EXPLORE et des études sans groupe témoin).
- **Qualité de lecture et corrections d’erreurs de publication :** EXPLORE, REVASC, ISCHEMIA CTO, ORBITA-CTO (pré-épreuve, chiffres susceptibles d’ajustement mineur), Megaly 2018, Leite 2026 et les deux articles PROGRESS-CTO ont été lus en texte intégral (DECISION-CTO et Gallingani 2025 restent en résumé, EuroCTO en synthèse secondaire). Plusieurs coquilles internes aux publications (taux d’événements REVASC de 16,3 % imprimé à 18,2 %, variation de volume VG dans Leite de -9,4 mL imprimée à -99,44 mL, effectif de décès hospitaliers dans PROGRESS-CTO) ont été corrigées d’après les tableaux complets. Enfin, plusieurs auteurs de consensus sont des opérateurs CTO à haut volume.`,
    },
  ],
  relatedArticleSlugs: [
    'essais-cliniques-en-cours-et-a-suivre',
    'revascularisation-pontage-stents',
    'cardiomyopathie-ischemique',
    'examens-et-chiffres',
    'insuffisance-cardiaque-fevg-amelioree',
    'cholesterol-et-prevention-secondaire',
    'thrombus-vg-et-anticoagulants',
    'recommandations-comparees-esc-us-nice',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'glossaire-cardiologie',
    'comprendre-le-diagnostic',
    'confirmer-la-cause-dysfonction-vg',
  ],
  sources: [
    {
      label: 'Registre d’essais cliniques (état au 25 novembre 2026)',
      detail: 'Retrait confirmé de SHINE-CTO (NCT02784418, 0 patient) et statut de recrutement d’ISCHEMIA-CTO (NCT03563417)',
    },
    {
      label: 'Méta-analyse van Veelen (2021) et textes intégraux EXPLORE (2016, IRM 2017, 10 ans 2024), REVASC (2018), ISCHEMIA CTO (2025) et ORBITA-CTO (2026, pré-épreuve)',
      detail: 'Résultats randomisés sur l’angor, la dyspnée, les événements cliniques, la FEVG, les sous-groupes à FEVG réduite et la récupération segmentaire',
    },
    {
      label: 'Éditoriaux Ali (2025) sur ISCHEMIA CTO et Jaber (2018) sur REVASC',
      detail: 'Mise en perspective clinique des limites des essais actuels et définition de l’essai manquant à FEVG basse avec viabilité',
    },
    {
      label: 'Revue physiologique Werner (2014) et études IRM/ETT (Everaars 2021, Cardona 2016, Sammour 2025, Megaly 2018 texte intégral, Leite 2026 texte intégral et supplément)',
      detail: 'Circulation collatérale, grade de Rentrop, FFR en aval d’une CTO, vol coronaire et récupération globale vs locale',
    },
    {
      label: 'Registres PROGRESS-CTO (scores de complications 2022 texte intégral ; FEVG basse Simsek 2022 texte intégral et supplément) et OPEN-CTO',
      detail: 'Taux de succès technique (86 % à FEVG ≤ 35 %), mortalité hospitalière selon la FEVG, recours aux pompes d’assistance et prédicteurs de complications',
    },
    {
      label: 'Méta-analyse Gallingani (2025) et revue Cilia (2024)',
      detail: 'MIDCAB versus stent sur l’IVA isolée et discussion du concept de double péril',
    },
    {
      label: 'Consensus EAPCI/EACVI (2024), EuroCTO Club (2019), ESC 2024 (SCC), ACC/AHA/SCAI (2021), AHA/ACC (2023) et SAC (2025)',
      detail: 'Recommandations internationales, indications de tests d’ischémie/viabilité et zones grises à FEVG ≤ 35 %',
    },
  ],
  disclaimerType: 'medical',
};
