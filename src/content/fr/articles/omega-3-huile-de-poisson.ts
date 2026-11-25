import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'omega-3-huile-de-poisson',
  sourceWikiPath: 'wiki/concepts/omega-3-fish-oil.md',
  titleFr: 'Acides gras oméga-3 (huiles de poisson)',
  category: 'nutrition',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'oméga-3',
    'huile-de-poisson',
    'epa',
    'dha',
    'gissi-hf',
    'fibrillation-atriale',
    'saignement',
    'compléments',
  ],
  aliases: [
    'Huile de poisson',
    'Oméga-3',
    'AGPI n-3',
    'EPA',
    'DHA',
    'Icosapent éthyl',
    'GISSI-HF',
  ],
  linkedModules: ['core', 'atrialFibrillation'],
  plainSummaryFr:
    "Les acides gras oméga-3 disposent des meilleures preuves cliniques parmi les compléments étudiés dans l'insuffisance cardiaque, mais le bénéfice observé est modeste et s'accompagne d'un compromis important. Dans le grand essai GISSI-HF (6 975 patients, majoritairement ICFER), une capsule de qualité pharmaceutique dosée à 1 g/j (environ 870 mg d'EPA + DHA) a légèrement réduit la mortalité (27 % contre 29 %, NNT 56 sur 4 ans), avant l'arrivée des traitements modernes (ARNI, iSGLT2). En contrepartie, les doses élevées augmentent le risque de fibrillation atriale (FA), un trouble du rythme mal toléré lorsque le ventricule gauche est dilaté et affaibli : une méta-analyse de 35 essais trouve des odds de FA majorés de 14 % globalement et de 43 % au-dessus de 1,5 g/j chez les patients à haut risque ; dans GISSI-HF, la FA était légèrement plus fréquente (11,2 % contre 9,8 %), sans significativité statistique. Les saignements n'augmentent pas globalement dans les grands essais, sauf légèrement à 4 g/j d'EPA purifié. Les gélules en vente libre ne sont pas équivalentes au médicament testé, et manger du poisson dans le cadre d'une alimentation équilibrée est une démarche différente. Toute supplémentation se discute d'abord avec votre cardiologue.",
  sections: [
    {
      headingFr: 'L’essai de référence dans l’insuffisance cardiaque : GISSI-HF',
      bodyMarkdownFr: `- **Population :** 6 975 patients italiens atteints d'insuffisance cardiaque chronique (NYHA II à IV). Environ 90 % avaient une FEVG ≤ 40 %, ce qui en fait en pratique un essai d'ICFER.
- **Traitement testé :** une spécialité sur prescription dosée à **1 g/j** (environ **870 mg d'EPA + DHA**) contre placebo, suivie pendant environ 4 ans.
- **Résultats :**
  - **Mortalité toutes causes :** 27 % contre 29 % (HR ajusté **0,91**, p = 0,041) ;
  - **Décès ou hospitalisation cardiovasculaire :** 57 % contre 59 % (HR ajusté **0,92**) ;
  - **Nombre de sujets à traiter (NNT) :** il fallait traiter environ **56 personnes pendant environ 4 ans** pour éviter un décès ;
  - **Tolérance digestive :** troubles gastro-intestinaux dans 3 % des cas dans chaque groupe.
- **Limites clés :**
  - le bénéfice statistiquement significatif reposait sur l'analyse ajustée (la comparaison non ajustée n'était pas significative), et les auteurs eux-mêmes ont qualifié l'effet de petit ;
  - le traitement de fond de l'époque ne comportait ni sacubitril/valsartan (*Entresto*), ni iSGLT2, ni les dispositifs modernes : le bénéfice résiduel en plus de la quadrithérapie actuelle est inconnu et probablement plus faible.`,
    },
    {
      headingFr: 'Données sur la maladie coronaire',
      bodyMarkdownFr: `Dans des populations cardiovasculaires plus larges (méta-analyse **An 2022**, texte intégral ; dose médiane **1,8 g/j**), les compléments d'oméga-3 ont été associés à une légère baisse des événements coronaires :

- **Infarctus du myocarde :** RR **0,85** (IC 95 % 0,78–0,92 ; 12 essais) ;
- **Événements coronaires :** RR **0,86** (IC 95 % 0,80–0,93 ; 5 essais) ;
- **Mortalité cardiovasculaire :** RR **0,93** (IC 95 % 0,88–0,97 ; 17 essais) ;
- **Mortalité toutes causes :** pas de réduction démontrée (**RR 0,97** ; IC 95 % 0,93–1,00 ; 23 essais) ;
- **AVC :** pas de réduction (**RR 1,06** ; IC 95 % 0,96–1,18).

Les auteurs ont coté ces résultats à une certitude modérée (déclassée pour imprécision) ; ils proviennent de populations mixtes et non d'essais dédiés à l'ICFER. La même analyse affiche un risque plus bas d'« arythmie » (RR 0,79 ; 6 essais) sans définir ni discuter ce critère : il ne doit pas être interprété comme un démenti du signal sur la fibrillation atriale ci-dessous.`,
    },
    {
      headingFr: 'Le compromis majeur : le risque de fibrillation atriale (FA)',
      bodyMarkdownFr: `**Méta-analyse de Gencer (2021)** regroupant 7 essais d'événements cardiovasculaires (81 210 participants suivis environ 5 ans) : les oméga-3 ont augmenté le risque de fibrillation atriale de **25 %** dans l'ensemble, avec une hausse d'environ **11 % par gramme supplémentaire par jour**.

| Dose quotidienne | Risque de fibrillation atriale (Gencer 2021) |
|---|---|
| **≤ 1 g/j** | +12 % (HR 1,12) |
| **> 1 g/j** | +49 % (HR 1,49) |

**Méta-analyse d'Abuknesha (2026, texte intégral)** regroupant **35 essais (114 592 personnes, 0,6 à 4 g/j pendant 1 à 7 ans)**, incluant des données de FA non publiées de 15 essais :
- **Tous essais confondus :** les odds de FA étaient augmentés de **14 % (OR 1,14 ; IC 95 % 1,04–1,25)**, augmentation significative présente dans le graphique principal (*forest plot*) mais absente du résumé.
- **Stratification par risque cardiovasculaire et dose** (seuil fixé à 1,5 g/j ; comparaisons entre groupes *post hoc*) :

| Groupe (Abuknesha 2026) | Odds ratio de FA (IC 95 %) |
|---|---|
| **Haut risque CV, > 1,5 g/j** (12 essais) | **1,43 (1,14–1,79)** — environ 0,8 cas supplémentaire pour 100 personnes sur ~2 ans |
| **Haut risque CV, ≤ 1,5 g/j** (6 essais) | 1,07 (0,99–1,16), à la limite de la significativité |
| **Risque faible, forte dose** (12 petits essais, 19 cas de FA) | 1,03 (0,45–2,36) |
| **Risque faible, faible dose** (7 essais) | 1,06 (0,95–1,18) |

- **Résultat dans l'essai IC (GISSI-HF) :** seul essai d'insuffisance cardiaque inclus ; à sa dose de 870 mg d'EPA + DHA (capsule de 1 g/j), une nouvelle FA est survenue chez **11,2 % contre 9,8 %** (**OR 1,16** ; IC 95 % 0,97–1,39 : légèrement plus de FA, non significatif).
- **Financement et liens d'intérêts :** l'analyse a été soutenue en partie par GOED (association professionnelle de l'industrie des oméga-3), dont l'article indique qu'elle n'a pas joué de rôle dans le travail ; plusieurs auteurs principaux ont des liens institutionnels ou commerciaux déclarés avec le secteur des oméga-3.

**Points d'accord et de désaccord :**
- **Accord :** les fortes doses augmentent nettement le risque de fibrillation atriale chez les patients atteints de maladie cardiaque.
- **Aux faibles doses, question de significativité plus que de direction :** l'estimation de Gencer à ≤ 1 g/j (HR 1,12) et celles d'Abuknesha à faible dose (OR 1,06–1,07) pointent toutes légèrement vers le haut ; seule la première atteint la significativité statistique, avec des seuils de dose différents (1 g contre 1,5 g).

**Étude observationnelle avec fortes réserves (O'Keefe 2025, prépublication UK Biobank) :** une analyse par plusieurs des mêmes auteurs a associé des taux sanguins plus élevés d'oméga-3 à un peu moins de FA sur 12,7 ans (**HR 0,86** ; IC 95 % 0,82–0,90 ; 0,87 dans le résumé), et l'usage autodéclaré d'huile de poisson à une absence de lien après ajustement sur l'âge (HR 1,00). Il s'agit d'une **prépublication non évaluée par les pairs**, avec auteurs liés au secteur des oméga-3, dans une population quasi indemne d'IC (0,4 % d'IC) où les taux bruts de FA étaient initialement plus élevés dans le quintile supérieur (7,3 % contre 6,7 %) : elle ne l'emporte pas sur les essais randomisés.

**Positions des recommandations :**
- **Déclaration AHA 2022 :** éviter les doses d'oméga-3 de **4 g/j ou plus** dans l'insuffisance cardiaque en raison du risque de FA.
- **Recommandations américaines AHA/ACC/HFSA 2022 :** dans l'insuffisance cardiaque NYHA II à IV, les oméga-3 « peuvent être raisonnables » en traitement d'appoint pour réduire les décès et hospitalisations cardiovasculaires (recommandation faible : **Classe 2b, niveau B-R**).
- **Recommandations ESC 2026 :** les oméga-3 ne sont pas mentionnés dans le texte principal.

**Pourquoi la FA compte particulièrement ici :** sur un ventricule gauche dilaté et affaibli, la survenue d'une FA peut aggraver l'essoufflement, déclencher une décompensation et augmenter le risque d'AVC, imposant souvent l'ajout d'un anticoagulant en plus ou à la place de l'aspirine.`,
    },
    {
      headingFr: 'Risque hémorragique (y compris sous aspirine ou anticoagulants)',
      bodyMarkdownFr: `- **Vue d'ensemble (Javaid 2024) :** sur l'ensemble des grands essais cardiovasculaires d'oméga-3 (environ 120 000 personnes), les saignements toutes gravités confondues ont été de **2,6 % contre 2,4 %** sous placebo (différence non significative ; aucun saignement fatal rapporté).
- **EPA purifié à forte dose (icosapent éthyl — *Vazkepa* / *Vascepa*, 4 g/j) :** légère augmentation des saignements :
  - en analyse groupée : RR **1,50**, soit environ **0,6 saignement supplémentaire pour 100 personnes** (environ 1 saignement en plus pour 166 personnes traitées), avec un effet dose-dépendant ;
  - dans l'essai **REDUCE-IT** (où 79 % des participants prenaient un antiagrégant), les saignements graves ont été d'environ **2,7 % contre 2,1 %**.
- **Avec les traitements antithrombotiques :**
  - la notice de l'icosapent éthyl signale des saignements plus fréquents chez les patients recevant aussi de l'aspirine, du clopidogrel ou de la warfarine, et demande une surveillance clinique ;
  - la notice d'une spécialité d'EPA + DHA sur prescription indique que l'association aux anticoagulants n'a pas été étudiée de façon approfondie et recommande un suivi périodique ;
  - chez des volontaires sains, 4 g/j n'ont pas modifié l'effet d'une dose unique de warfarine ;
  - **donnée manquante :** aucune source compilée n'apporte de données sur les saignements liés aux oméga-3 associés aux anticoagulants oraux directs (apixaban, rivaroxaban, édoxaban, dabigatran) ni à une double antiagrégation plaquettaire.
- **Réserves :** la méta-analyse Javaid 2024 a été financée par le fabricant de l'icosapent éthyl, et les essais ont évalué des médicaments sur prescription, pas des compléments en vente libre. Bien que l'arrêt avant chirurgie soit souvent conseillé en pratique, cette revue n'a pas trouvé de preuve d'un excès de saignement périopératoire et aucun délai officiel d'arrêt n'a été identifié.`,
    },
    {
      headingFr: 'Quelle place en pratique ?',
      bodyMarkdownFr: `- Les oméga-3 peuvent être évoqués avec votre cardiologue comme un **petit complément éventuel**, jamais en remplacement des quatre piliers du traitement de fond.
- Si votre cardiologue envisage cette piste, les données de l'ICFER portent sur environ **1 g/j d'un produit de qualité pharmaceutique**, et non sur des gélules surdosées en vente libre.
- **Points non couverts par les sources compilées ici :** le bénéfice cardiovasculaire spécifique de l'icosapent éthyl à forte dose chez les patients coronariens hypertriglycéridémiques, et la comparaison directe entre la consommation de poisson gras et les capsules.`,
    },
  ],
  relatedArticleSlugs: [
    'nutrition-et-complements-insuffisance-cardiaque',
    'coenzyme-q10',
    'vitamine-d-insuffisance-cardiaque',
    'interactions-complements-aliments-medicaments',
    'tableau-preuves-nutrition-complements',
    'alimentation-cardioprotectrice',
    'cholesterol-et-prevention-secondaire',
    'maladies-associees',
  ],
  sources: [
    {
      label: 'GISSI-HF (2008)',
      detail: '6 975 patients avec IC chronique (90 % FEVG ≤ 40 %), oméga-3 1 g/j (870 mg EPA+DHA) contre placebo sur 4 ans.',
    },
    {
      label: 'Gencer et al. (2021), Abuknesha et al. (2026, texte intégral) et O’Keefe et al. (2025, prépublication)',
      detail: 'Méta-analyses sur le risque dose-dépendant de fibrillation atriale (35 essais, ligne GISSI-HF, liens d’intérêts) et analyse observationnelle UK Biobank.',
    },
    {
      label: 'An et al. (2022, texte intégral) et Javaid et al. (2024)',
      detail: 'Signaux coronaires complets (dose médiane 1,8 g/j) et méta-analyse du risque hémorragique (REDUCE-IT et notices icosapent éthyl / EPA+DHA).',
    },
    {
      label: 'Recommandations AHA/ACC/HFSA 2022 et déclaration AHA 2022',
      detail: 'Classe 2b (niveau B-R) en NYHA II–IV ; mise en garde contre les doses ≥ 4 g/j.',
    },
  ],
  disclaimerType: 'medical',
};
