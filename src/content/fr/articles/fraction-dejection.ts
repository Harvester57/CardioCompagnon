import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'fraction-dejection',
  sourceWikiPath: 'wiki/concepts/ejection-fraction.md',
  titleFr: "La fraction d'éjection (FEVG)",
  category: 'diagnostic',
  asOf: '2026-11-25',
  confidence: 'high',
  volatility: 'warm',
  tags: [
    'fraction-d-éjection',
    'fevg',
    'lvef',
    'icfer',
    'hfref',
    'ett',
    'irm-cardiaque',
    'variabilité-mesure',
  ],
  aliases: [
    'FE',
    'FEVG',
    'LVEF',
    'EF',
    "Fraction d'éjection du ventricule gauche",
    'Ejection fraction',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "La fraction d'éjection du ventricule gauche (FEVG) est le pourcentage de sang contenu dans le ventricule gauche qui est expulsé à chaque battement. Elle n'est jamais de 100 %, même dans un cœur sain. Une FEVG à 35 % signifie qu'environ un tiers du sang est éjecté à chaque contraction : elle est clairement « réduite » selon toutes les recommandations actuelles. C'est un repère utile mais imparfait : les seuils ont évolué dans les recommandations ESC 2026, la Deuxième définition universelle de 2026 ne fixe aucune frontière chiffrée, et les mesures peuvent varier de plusieurs points entre une ETT et une IRM cardiaque.",
  sections: [
    {
      headingFr: 'Ce que mesure la FEVG',
      bodyMarkdownFr: `Le guide patient ESC définit la FEVG comme le pourcentage de sang éjecté par le ventricule gauche à chaque battement cardiaque. Il insiste sur trois points essentiels :

- une large plage de valeurs peut être normale selon les personnes ;
- une FEVG inférieure à 50 % ne signifie pas automatiquement une insuffisance cardiaque sévère ;
- une FEVG supérieure à 50 % ne garantit pas un fonctionnement cardiaque parfaitement normal.

Elle est le plus souvent mesurée par **échocardiographie transthoracique (ETT)**. L'**IRM cardiaque** fournit une image plus détaillée et peut aussi détecter des zones de cicatrice (guide patient ESC).`,
    },
    {
      headingFr: 'Les catégories de FEVG et pourquoi les sources divergent',
      bodyMarkdownFr: `Les catégories d'insuffisance cardiaque fondées sur la FEVG ont changé en 2026 ; des documents publiés à des dates différentes affichent donc des seuils différents.

| Référentiel | Réduite (ICFER / *HFrEF*) | Catégorie intermédiaire | Préservée (*HFpEF*) |
|---|---|---|---|
| **Recommandations ESC 2026** (en vigueur en Europe) | FEVG **< 50 %** + symptômes/signes | *Supprimée* | FEVG ≥ 50 % + anomalie objective |
| ESC 2021 / 2023 (remplacées) | ≤ 40 % | 41–49 % (« modérément réduite ») | ≥ 50 % |
| Livret BHF (Royaume-Uni, 2024) | < 40 % | 40–49 % | ≥ 50 % |
| Fiche patient AHA (États-Unis, 2025) | ≤ 40 % | 41–49 % | Normale : 50–70 % |
| Page Cleveland Clinic (États-Unis, 2026) | ≤ 39 % | 40–49 % | Normale : 50–70 % |

Sources : recommandations ESC 2026 ; guide patient ESC ; BHF ; page FEVG de l'AHA ; page FEVG de la Cleveland Clinic.

- **Les sites grand public ne concordent pas toujours entre eux** (AHA ; Cleveland Clinic ; Heart Failure Matters) :
  - La page web de l'AHA indique une normale de 55 à 70 %, alors que sa fiche imprimable indique 50 à 70 %.
  - Le tableau par sexe de la Cleveland Clinic situe la normale entre 52 et 72 % chez l'homme et entre 54 et 74 % chez la femme, et qualifie une valeur de 30 à 40 % de « modérément anormale ».
  - Le site patient de l'ESC (*Heart Failure Matters*) utilise encore les trois anciennes tranches, avec « moins de 40 % » comme FEVG réduite.
- **Pourquoi la catégorie intermédiaire a été supprimée.** Le groupe de travail ESC 2026 a retiré la catégorie « modérément réduite » parce qu'elle partage la même biologie et la même réponse aux traitements que l'ICFER (recommandations ESC 2026).
- **Nuance de formulation.** Le livret patient ESC formule le seuil comme « inférieure ou égale à 50 % », tandis que le texte complet des recommandations indique « < 50 % ». Cette différence ne joue qu'à exactement 50 %.
- **Une FEVG de 35 % relève de l'ICFER dans tous ces systèmes.** L'étiquette diagnostique reste identique ; seule change la façon dont les documents plus anciens découpent les tranches autour d'elle.

**Une définition internationale distincte, et non une recommandation thérapeutique.** En juin 2026, l'AHA, l'ACC, l'ESC et la Fédération mondiale du cœur (WHF) ont publié la *Deuxième définition universelle de l'insuffisance cardiaque*, un consensus sur la terminologie. Il s'agit d'un document différent des recommandations ESC 2026 du tableau ci-dessus, qui ne modifie ni les seuils de l'ESC ni aucun seuil thérapeutique (Définition universelle 2026) :

- **Trois groupes, sans frontière chiffrée.** Elle distingue l'insuffisance cardiaque à FEVG réduite, préservée ou améliorée. Elle s'abstient délibérément de fixer **tout chiffre** séparant FEVG réduite et FEVG préservée, qualifiant les anciens seuils fixes d'arbitraires en raison de la variabilité des mesures, des écarts entre examens d'imagerie et des questions non résolues liées au sexe, à l'âge et à l'origine ethnique.
- **Pas de groupe « modérément réduite ».** Elle ne conserve pas cette catégorie. Elle suggère avec prudence que les FEVG légèrement réduites pourraient être regroupées avec les FEVG réduites, et les valeurs plus élevées avec les FEVG préservées.
- **Les seuls chiffres de plage normale.** La limite inférieure de la FEVG normale est d'environ **53 % chez la femme et 52 % chez l'homme** (légèrement plus élevée chez les personnes d'origine asiatique), de sorte qu'une FEVG **inférieure à 50 %** a peu de chances d'être normale quels que soient le sexe, l'âge ou l'origine ethnique.
- **Aucun seuil de peptides natriurétiques** n'est fixé non plus. Des taux élevés confortent le diagnostic, mais le document n'établit pas de valeurs seuils.
- Une FEVG de 35 % se situe largement en dessous du niveau de 50 % qu'elle juge peu susceptible d'être normal. Comme le texte ne fixe pas de frontière chiffrée, qualifier 35 % de « réduite » selon ce document relève de l'interprétation plutôt que d'une règle explicite.

**FEVG améliorée (HFimpEF).** Une catégorie spécifique existe lorsque la FEVG remonte sous traitement :

- **ESC 2026 :** hausse absolue d'au moins 10 points, aboutissant à une valeur supérieure à 40 % (recommandations ESC 2026).
- **Définition universelle de 2021 :** valeur initiale inférieure ou égale à 40 %, puis gain d'au moins 10 points permettant de dépasser 40 % (revue HFimpEF).
- **Deuxième définition universelle de 2026 :** reprend cette description (hausse d'au moins 10 points permettant de dépasser 40 % après une FEVG réduite), mais précise qu'une définition fondée uniquement sur la FEVG ne suffit pas, car les mesures varient et une cicatrice, des marqueurs sanguins élevés ou des symptômes persistent souvent. Elle distingue également amélioration, rémission et récupération (Définition universelle 2026).

Pour en savoir plus, consultez *Insuffisance cardiaque à FEVG améliorée (HFimpEF)*.`,
    },
    {
      headingFr: 'Pourquoi 35 % est un chiffre clé',
      bodyMarkdownFr: `Le seuil de **35 %** sert de repère pour discuter un défibrillateur automatique implantable (DAI) préventif et, en présence d'un complexe QRS élargi à l'ECG, une thérapie de resynchronisation cardiaque (CRT). Les recommandations ESC 2026 appliquent ce seuil **après au moins 3 mois de traitement médical optimisé**. C'est l'une des raisons pour lesquelles votre cardiologue réévalue souvent la FEVG une fois les médicaments augmentés progressivement (recommandations ESC 2026 ; guide patient ESC ; voir *Dispositifs cardiaques implantés : DAI et CRT*).`,
    },
    {
      headingFr: "L'écart entre deux méthodes de mesure (ETT et IRM)",
      bodyMarkdownFr: `Les données les plus directes proviennent de l'essai **REVIVED-BCIS2**. Chez 373 patients présentant une dysfonction ventriculaire gauche ischémique, la FEVG a été mesurée à la fois par échocardiographie (ETT) et par IRM cardiaque, chacune étant interprétée en aveugle par un laboratoire central (analyse ETT vs IRM de REVIVED-BCIS2) :

- **Valeurs moyennes.** La FEVG moyenne était de **31,4 % en ETT et de 25,8 % en IRM**. L'IRM donnait en moyenne une valeur inférieure d'environ **5,5 points**.
- **Concordance.** Seules **7,5 %** des paires de mesures se situaient à moins de 5 points l'une de l'autre. Les limites d'agrément étaient très larges : de **−24,4 à +13,2 points**.
- **Autour du seuil de 35 %.** Un tiers des patients dont la FEVG en IRM était inférieure à 35 % avaient une FEVG en ETT supérieure ou égale à 35 %.
- **Conséquence sur les décisions.** Parmi ces patients aux résultats discordants, 45 % ont reçu un DAI, contre 61 % lorsque les deux examens s'accordaient sur une FEVG inférieure à 35 %.
- **Limite à garder à l'esprit.** Les deux examens étaient espacés d'environ six semaines en moyenne : une partie de l'écart peut donc refléter une évolution réelle du cœur.

**En pratique :** deux comptes rendus indiquant par exemple 35 % et 30 % ne signifient pas nécessairement que votre cœur a changé. Il faut toujours comparer deux examens réalisés avec la **même technique** (ETT avec ETT, IRM avec IRM).`,
    },
    {
      headingFr: "La FEVG prédit mieux le risque d'un groupe que celui d'un individu",
      bodyMarkdownFr: `L'analyse **PROFID** a regroupé les données de **140 204 personnes** après un infarctus du myocarde :

- **Risque à l'échelle d'un groupe.** La FEVG sépare bien les niveaux de risque moyen. Sans DAI, le taux de mort subite cardiaque à 3 ans était de **3,41 %** lorsque la FEVG était inférieure ou égale à 35 %, contre **0,87 %** au-dessus de 35 %.
- **Risque individuel.** La FEVG seule identifiait *quelle personne précise* ferait une mort subite à peine mieux que le hasard (statistique C de **0,50 à 0,56**). L'ajout de nombreuses autres variables ou de mesures de cicatrice en IRM n'a que légèrement amélioré cette prédiction.

De même, dans la sous-étude de REVIVED-BCIS2, le volume télésystolique du ventricule gauche (la taille du cœur restant après la contraction) prédisait l'évolution clinique, contrairement à la FEVG après ajustement.

Ces résultats alimentent le débat présenté dans *Dispositifs cardiaques implantés : DAI et CRT*.`,
    },
  ],
  relatedArticleSlugs: [
    'comprendre-le-diagnostic',
    'cardiomyopathie-ischemique',
    'insuffisance-cardiaque-fevg-amelioree',
    'dispositifs-cardiaques-dai-crt',
    'glossaire-cardiologie',
    'examens-et-chiffres',
    'recommandations-comparees-esc-us-nice',
    'stenose-aortique-fevg-reduite',
    'dysfonction-vg-asymptomatique-stade-b',
  ],
  sources: [
    { label: "Recommandations ESC 2026 sur l'insuffisance cardiaque", detail: "Nouvelle définition de l'ICFER (< 50 %), suppression de la tranche intermédiaire, définition HFimpEF et seuil de 35 % après au moins 3 mois de traitement" },
    { label: 'Guide patient ESC 2026', detail: 'Définition grand public, formulation « ≤ 50 % » et comparaison avec les anciennes catégories' },
    { label: 'British Heart Foundation (BHF, 2024)', detail: 'Tranches de FEVG utilisées dans les documents patients britanniques' },
    { label: 'REVIVED-BCIS2 — analyse ETT vs IRM', detail: 'Discordance de mesure entre échocardiographie et IRM autour du seuil de 35 %' },
    { label: 'Analyse poolée PROFID', detail: 'Pouvoir prédictif de la FEVG sur la mort subite après infarctus (140 204 patients)' },
    { label: 'Revue HFimpEF', detail: 'Définition universelle 2021 de la FEVG améliorée' },
    { label: "Deuxième définition universelle de l'insuffisance cardiaque (2026)", detail: "Consensus AHA/ACC/ESC/WHF (texte intégral) : groupes de FEVG sans frontière chiffrée, limites inférieures de la normale et nuances sur la FEVG améliorée" },
    { label: 'AHA — Ejection Fraction (2025)', detail: 'Fourchettes grand public américaines (site web et fiche)' },
    { label: 'Cleveland Clinic — Ejection Fraction (2026)', detail: 'Formule de la FEVG et plages de référence par sexe' },
    { label: 'Heart Failure Matters (ESC)', detail: "Site patient de l'ESC : examens, classes NYHA et anciennes tranches de FEVG" },
  ],
  disclaimerType: 'medical',
};
