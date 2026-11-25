import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'coenzyme-q10',
  sourceWikiPath: 'wiki/concepts/coenzyme-q10.md',
  titleFr: 'Coenzyme Q10 (CoQ10)',
  category: 'nutrition',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: ['coenzyme-q10', 'ubiquinone', 'ubiquinol', 'compléments', 'q-symbio', 'insuffisance-cardiaque'],
  aliases: ['CoQ10', 'Ubiquinone', 'Ubiquinol', 'Q-SYMBIO'],
  linkedModules: ['core'],
  plainSummaryFr:
    "La coenzyme Q10 (CoQ10) est le complément alimentaire au sujet duquel les patients et leurs proches posent le plus de questions. Son signal clinique est intrigant mais fragile (certitude faible) : l'essai randomisé Q-SYMBIO (420 patients NYHA III–IV, FEVG moyenne 31 %, environ 70 % de cause ischémique) a montré qu'une prise de 300 mg/j pendant 2 ans divisait par deux les événements cardiaques majeurs (HR 0,50) et réduisait la mortalité de 18 % à 10 %, sans effet à 16 semaines ni amélioration de la fonction cardiaque ou du NT-proBNP à 2 ans. Toutefois, cet essai était de petite taille, a été interrompu prématurément à 420 patients sur 550 prévus, financé en partie par des fabricants de compléments, sans résultat séparé pour les patients ischémiques, jamais répliqué en plus de 10 ans, et conduit avant les traitements modernes (sacubitril/valsartan, iSGLT2). Aucune recommandation internationale ne conseille la CoQ10. Généralement bien tolérée, elle peut interagir avec certains antihypertenseurs et anticoagulants (warfarine) : c'est un sujet à évoquer avec votre cardiologue, jamais un substitut au traitement prescrit.",
  sections: [
    {
      headingFr: 'L’essai principal : Q-SYMBIO (2014, texte intégral)',
      bodyMarkdownFr: `**Protocole :** 420 patients atteints d'insuffisance cardiaque chronique modérée à sévère (classe NYHA III à IV), randomisés entre **coenzyme Q10 100 mg trois fois par jour (300 mg/j)** et placebo pendant 2 ans, dans 17 centres en Europe, en Asie et en Australie (recrutement de 2003 à 2010).

**Qui a participé :**
- **Fraction d'éjection :** aucun seuil de FEVG n'était exigé à l'inclusion. La FEVG moyenne était de **31 %**, mais s'étendait de 10 % à 70 %, avec 7 % de patients ayant une FEVG ≥ 45 %.
- **Cause :** environ **70 %** avaient une cardiopathie ischémique (68 % sous CoQ10, 72 % sous placebo) et 27 % une cardiomyopathie dilatée.
- **Symptômes :** 87–88 % en classe NYHA III, 9–10 % en NYHA IV, 3–4 % en NYHA II.
- **Traitement de fond :** conforme à son époque mais très éloigné des standards actuels (IEC ou ARA2 90 %, bêtabloquant 72–76 %, ARM 34 %, digoxine ~45 %, aucun sacubitril/valsartan ni iSGLT2, très peu de DAI ou de CRT).

**Règles méthodologiques particulières :** les hospitalisations pour IC survenues dans les **30 premiers jours** n'étaient pas comptabilisées, et les patients étaient censurés lors de l'implantation d'une resynchronisation (CRT). Ces règles, bien que prédéfinies, sont inhabituelles et peuvent influencer le résultat.

**Résultats à 16 semaines :** aucune amélioration des symptômes, de la distance de marche ni du NT-proBNP.

**Résultats à 2 ans :**

| Critère à 2 ans | CoQ10 | Placebo | Résultat |
|---|---|---|---|
| **Événements cardiovasculaires majeurs (MACE)** | 30 (15 %) | 57 (26 %) | HR 0,50 (IC 95 % 0,32–0,80) |
| **Mortalité cardiovasculaire** | 18 (9 %) | 34 (16 %) | HR 0,51 (IC 95 % 0,28–0,92) |
| **Mortalité toutes causes** | 21 (10 %) | 39 (18 %) | HR 0,51 (IC 95 % 0,30–0,89) |
| **Hospitalisations pour insuffisance cardiaque** | 17 (8 %) | 31 (14 %) | HR 0,51 (IC 95 % 0,27–0,95) |

*Définition des MACE :* hospitalisation non programmée pour aggravation d'insuffisance cardiaque, décès cardiovasculaire, assistance circulatoire mécanique (LVAD) ou transplantation urgente.

- **Un résultat reposant sur 87 événements :** en réintégrant les hospitalisations des 30 premiers jours et en classant défavorablement les 8 patients perdus de vue, l'effet se réduit à **HR 0,64** (IC 95 % 0,42–0,98) tout en restant significatif.
- **Aucun effet sur la pompe cardiaque ni le NT-proBNP :** à 2 ans, les mesures échocardiographiques et le NT-proBNP ne différaient pas entre les groupes. Davantage de patients sous CoQ10 se sont améliorés d'au moins une classe NYHA (58 % contre 45 %).
- **Sous-groupes (petits effectifs, aucune interaction significative rapportée) :** il n'y a eu **aucun résultat séparé pour les patients ischémiques**. Le groupe le plus proche (« hors cardiomyopathie dilatée », 303 patients, majoritairement ischémiques mais incluant aussi des valvulopathies) affichait un **HR de 0,60** (IC 95 % 0,34–1,05, non significatif). L'effet paraissait plus important dans la cardiomyopathie dilatée (HR 0,28) et pour une FEVG ≥ 30 % (HR 0,36 ; 0,15–0,88) que pour une FEVG < 30 % (HR 0,83 ; 0,48–1,46).`,
    },
    {
      headingFr: 'Ce que montrent les analyses groupées',
      bodyMarkdownFr: `| Méta-analyse | Mortalité toutes causes | Certitude |
|---|---|---|
| **Khan (2021, texte intégral)** (7 essais IC, 1 827 patients) | RR 0,69 (IC 95 % 0,50–0,96) | Faible |
| **An et al. (2022, texte intégral)** (ligne CoQ10 : 7 essais IC, 904 contre 923 patients) | RR 0,68 (IC 95 % 0,49–0,94) | Modérée (cotation par défaut), mais auteurs jugeant les données insuffisantes |

- **Probablement les mêmes essais comptés deux fois :** les deux synthèses regroupent 7 essais d'IC totalisant exactement **1 827 patients** (904 + 923), ce qui suggère la reprise du même jeu antérieur d'essais (Lei et Liu 2017) et non deux confirmations indépendantes.
- **Dépendance à Q-SYMBIO (Khan 2021) :** sans Q-SYMBIO, la baisse de mortalité n'est plus significative. Dans les essais regroupés, la CoQ10 n'a amélioré ni la FEVG (+1,24 point, non significatif) ni la classe NYHA, ce qui conduit les auteurs à envisager un signal de mortalité potentiellement factice.
- **Doses très différentes dans An 2022 :** la synthèse indique une dose médiane de 50 mg/j (33 à 100 mg/j) et une durée médiane de 3 mois — très en deçà des 300 mg/j pendant 2 ans de Q-SYMBIO (la liste détaillée des essais figurait dans un supplément non consulté).
- Une méta-analyse de 2024 regroupant 33 essais (rapportée mais non compilée intégralement) indique des chiffres voisins (mortalité RR 0,64 ; hospitalisations IC RR 0,50), sur des essais majoritairement petits et hétérogènes, le signal de mortalité restant largement porté par Q-SYMBIO.`,
    },
    {
      headingFr: 'Pourquoi ce signal est qualifié de fragile',
      bodyMarkdownFr: `- **Un seul petit essai :** la majeure partie du signal repose sur 420 patients, sans aucun essai de confirmation publié en plus de 10 ans.
- **Un effet tardif et sans marqueur biologique :** aucun effet précoce à 16 semaines, ni sur l'échographie ou le NT-proBNP à 2 ans.
- **Une autre époque thérapeutique :** réalisé avant le sacubitril/valsartan (*Entresto*) et les iSGLT2 (dapagliflozine — *Forxiga*, empagliflozine — *Jardiance*) : le bénéfice résiduel sur la quadrithérapie actuelle est inconnu.
- **Arrêt précoce :** 550 patients étaient prévus, mais l'étude a été clôturée à 420 en 2012 en raison d'un recrutement lent, sur décision du comité de pilotage et non du comité indépendant de sécurité.
- **Soutien de l'industrie des compléments :** Q-SYMBIO a été financé en partie par Pharma Nord, Kaneka et l'International Coenzyme Q10 Association, et un collaborateur de Pharma Nord assurait le suivi opérationnel de l'étude (les auteurs ont déclaré l'absence de conflit d'intérêts et l'analyse a été effectuée par un statisticien indépendant).
- **Incohérences internes dans la publication :** le HR principal est imprimé à 0,50 dans le texte et 0,52 dans la figure des sous-groupes ; les décès non cardiovasculaires ne concordent pas entre les tableaux ; des déséquilibres initiaux existaient entre les bras (plus de femmes et NT-proBNP plus bas sous placebo ; plus de valvulopathies et CoQ10 sanguine plus haute dans le groupe CoQ10) ; davantage de patients se sont retirés sous CoQ10 (22 contre 14), et l'observance par comptage de gélules n'est pas rapportée.
- **Scepticisme d'experts indépendants (éditorial Ezekowitz 2014) :** l'éditorial publié avec Q-SYMBIO a qualifié l'effet de « frappant », mais trop ample et trop fragile pour changer les pratiques, critiquant la communication présentant la CoQ10 comme un traitement standard « naturel et sûr » et demandant aux fabricants de financer un véritable essai de puissance suffisante.
- **Absence dans les recommandations :** ni l'ESC 2026, ni les recommandations américaines AHA/ACC/HFSA 2022, ni NICE NG106 ne recommandent la CoQ10.`,
    },
    {
      headingFr: 'Tolérance, interactions et qualité des produits',
      bodyMarkdownFr: `- **Tolérance :** la CoQ10 a été globalement bien tolérée dans les essais (dans Q-SYMBIO, effets indésirables chez 13 % contre 19 % sous placebo, non significatif, avec numériquement moins de troubles digestifs et d'AVC).
- **Interactions médicamenteuses :** Q-SYMBIO n'a pas étudié les interactions. La revue **Khan 2021** signale une interaction avec la **warfarine** (*Coumadine*), et la déclaration scientifique **AHA 2022** note que la CoQ10 peut interagir avec les **médicaments antihypertenseurs** et les **anticoagulants**. L'AHA juge les données prometteuses mais estime que de plus grands essais sont nécessaires avant toute recommandation.
- **« Naturel » ne prouve pas l'innocuité ni la qualité :** la CoQ10 du commerce est fabriquée industriellement (et coûtait environ 50 à 100 USD par mois aux doses de l'essai en 2014 — **Ezekowitz 2014**). Les compléments (ubiquinone ou ubiquinol) n'étant pas réglementés comme des médicaments, la teneur réelle peut s'écarter de l'étiquette (An 2022).

Si vous envisagez d'essayer la CoQ10, parlez-en d'abord à votre cardiologue et à votre pharmacien afin de vérifier l'absence d'interaction avec votre ordonnance.`,
    },
  ],
  relatedArticleSlugs: [
    'nutrition-et-complements-insuffisance-cardiaque',
    'omega-3-huile-de-poisson',
    'vitamine-d-insuffisance-cardiaque',
    'tableau-preuves-nutrition-complements',
    'interactions-complements-aliments-medicaments',
    'medicaments-insuffisance-cardiaque',
  ],
  sources: [
    {
      label: 'Q-SYMBIO (Mortensen et al., JACC: Heart Failure, 2014, texte intégral)',
      detail: '420 patients NYHA III–IV (FEVG moyenne 31 %, ~70 % ischémiques), CoQ10 300 mg/j contre placebo sur 2 ans, sous-groupes, règles d’événements, financement, arrêt précoce et limites.',
    },
    {
      label: 'Éditorial indépendant Ezekowitz (JACC: Heart Failure, 2014, texte intégral)',
      detail: 'Analyse critique de la fragilité de Q-SYMBIO, des coûts et de la nécessité d’un essai confirmatoire de puissance suffisante.',
    },
    {
      label: 'Khan et al. (2021, texte intégral) et An et al. (2022, texte intégral)',
      detail: 'Analyses groupées des 7 essais IC (1 827 patients), dépendance à Q-SYMBIO, absence d’effet sur la FEVG/NYHA, alerte warfarine.',
    },
    {
      label: 'Déclaration scientifique AHA 2022 (médecines complémentaires dans l’IC)',
      detail: 'Tolérance, prudence sur les interactions avec antihypertenseurs et anticoagulants, absence de preuve suffisante.',
    },
  ],
  disclaimerType: 'medical',
};
