import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'coenzyme-q10',
  sourceWikiPath: 'wiki/concepts/coenzyme-q10.md',
  titleFr: 'Coenzyme Q10 (CoQ10)',
  category: 'nutrition',
  asOf: '2026-11-24',
  confidence: 'medium',
  volatility: 'warm',
  tags: ['coenzyme-q10', 'ubiquinone', 'ubiquinol', 'compléments', 'q-symbio', 'insuffisance-cardiaque'],
  aliases: ['CoQ10', 'Ubiquinone', 'Ubiquinol', 'Q-SYMBIO'],
  linkedModules: ['core'],
  plainSummaryFr:
    "La coenzyme Q10 (CoQ10) est le complément alimentaire au sujet duquel les patients et leurs proches posent le plus de questions. Son signal clinique est intrigant mais fragile (certitude faible) : un essai randomisé (Q-SYMBIO, 420 patients atteints d'insuffisance cardiaque modérée à sévère) a montré qu'une prise de 300 mg/j pendant 2 ans divisait par deux les événements cardiaques majeurs et réduisait la mortalité de 18 % à 10 %. Toutefois, cet essai était de petite taille, n'a jamais été répliqué en plus de 10 ans, et a été conduit avant les traitements modernes (sacubitril/valsartan, iSGLT2). Aucune recommandation internationale ne conseille la CoQ10. Généralement bien tolérée, elle peut toutefois interagir avec certains médicaments de la tension et anticoagulants : c'est un sujet à évoquer avec votre cardiologue, jamais un substitut au traitement prescrit.",
  sections: [
    {
      headingFr: 'L’essai principal : Q-SYMBIO (2014)',
      bodyMarkdownFr: `**Protocole :** 420 patients atteints d'insuffisance cardiaque chronique modérée à sévère (classe NYHA III à IV), randomisés entre **coenzyme Q10 100 mg trois fois par jour (300 mg/j)** et placebo pendant 2 ans, en plus du traitement standard de l'époque.

**Résultats à 16 semaines :** aucune amélioration significative des symptômes, de la distance de marche ni du NT-proBNP.

**Résultats à 2 ans :**

| Critère à 2 ans | CoQ10 | Placebo | Résultat |
|---|---|---|---|
| **Événements cardiovasculaires majeurs (MACE)** | 15 % | 26 % | HR 0,50 (IC 95 % 0,32–0,80) |
| **Mortalité cardiovasculaire** | 9 % | 16 % | p = 0,026 |
| **Mortalité toutes causes** | 10 % | 18 % | p = 0,018 |
| **Hospitalisations pour insuffisance cardiaque** | Plus basses | — | p = 0,033 |`,
    },
    {
      headingFr: 'Ce que montrent les analyses groupées',
      bodyMarkdownFr: `| Méta-analyse | Mortalité toutes causes | Certitude |
|---|---|---|
| **Cartographie des preuves Khan (2021)** (essais dans l'IC) | RR 0,69 (IC 95 % 0,50–0,96) | Faible |
| **An et al. (2022)** (884 essais de compléments, populations mixtes) | RR 0,68 (IC 95 % 0,49–0,94) | — |

Une méta-analyse de 2024 regroupant 33 essais (rapportée dans la synthèse mais non intégralement compilée) indique des chiffres du même ordre : mortalité RR 0,64 et hospitalisations pour insuffisance cardiaque RR 0,50. La plupart des essais inclus étaient petits et hétérogènes, et le signal sur la mortalité reste largement porté par Q-SYMBIO.`,
    },
    {
      headingFr: 'Pourquoi ce signal est qualifié de fragile',
      bodyMarkdownFr: `- **Un seul petit essai :** la majeure partie du signal sur les événements cliniques repose sur environ 420 patients, sans aucun grand essai de confirmation publié depuis plus de 10 ans. La FEVG n'était pas rapportée en détail dans la synthèse de référence.
- **Un effet lent :** aucun bénéfice précoce n'a été constaté à 16 semaines sur les symptômes ou les biomarqueurs ; l'écart n'est apparu qu'au terme de 2 ans.
- **Une autre époque thérapeutique :** Q-SYMBIO a été réalisé avant le sacubitril/valsartan (*Entresto*) et les inhibiteurs du SGLT2 (dapagliflozine — *Forxiga*, empagliflozine — *Jardiance*). L'existence d'un bénéfice additionnel en plus des quatre piliers actuels est inconnue.
- **Biais des petits essais :** les méta-analyses héritent des limites méthodologiques des petites études qu'elles agrègent.
- **Autres réserves signalées :** des limites complémentaires (recrutement incomplet et soutien industriel dans Q-SYMBIO) ont été évoquées dans la littérature sans avoir été vérifiées directement dans les documents sources compilés.
- **Absence dans les recommandations :** ni l'ESC 2026, ni les recommandations américaines AHA/ACC/HFSA 2022, ni NICE NG106 ne recommandent la CoQ10.`,
    },
    {
      headingFr: 'Tolérance, interactions et qualité des produits',
      bodyMarkdownFr: `- **Tolérance :** la CoQ10 a été globalement bien tolérée dans les essais cliniques.
- **Interactions médicamenteuses :** la déclaration scientifique AHA 2022 signale que la CoQ10 peut interagir avec les **médicaments antihypertenseurs** et les **anticoagulants** (en particulier les antivitamines K comme la warfarine — *Coumadine*, en raison d'une parenté structurale avec la vitamine K pouvant modifier l'INR). L'AHA juge les données prometteuses mais estime que de plus grands essais sont nécessaires avant toute recommandation.
- **Qualité variable :** les compléments de CoQ10 (ubiquinone ou ubiquinol) ne sont pas soumis à la même réglementation que les médicaments ; la teneur réelle et la biodisponibilité peuvent varier fortement d'une marque à l'autre.

Si vous envisagez d'essayer la CoQ10, parlez-en d'abord à votre cardiologue et à votre pharmacien afin de vérifier l'absence d'interaction avec votre ordonnance.`,
    },
  ],
  relatedArticleSlugs: [
    'nutrition-et-complements-insuffisance-cardiaque',
    'omega-3-huile-de-poisson',
    'tableau-preuves-nutrition-complements',
    'interactions-complements-aliments-medicaments',
    'medicaments-insuffisance-cardiaque',
  ],
  sources: [
    {
      label: 'Q-SYMBIO (Mortensen et al., JACC: Heart Failure, 2014)',
      detail: '420 patients NYHA III-IV, CoQ10 300 mg/j contre placebo pendant 2 ans, résultats à 16 semaines et 2 ans, et limites.',
    },
    {
      label: 'Khan et al. (2021) et An et al. (2022)',
      detail: 'Méta-analyses et cartographie des preuves dans l’insuffisance cardiaque et en prévention cardiovasculaire.',
    },
    {
      label: 'Déclaration scientifique AHA 2022 (médecines complémentaires dans l’IC)',
      detail: 'Tolérance, prudence sur les interactions avec antihypertenseurs et anticoagulants, absence de preuve suffisante.',
    },
  ],
  disclaimerType: 'medical',
};
