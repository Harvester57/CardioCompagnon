import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'cardiomyopathie-ischemique',
  sourceWikiPath: 'wiki/concepts/ischaemic-cardiomyopathy.md',
  titleFr: 'La cardiomyopathie ischémique',
  category: 'diagnostic',
  readingTier: 'essential',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'stable',
  tags: [
    'cardiomyopathie-ischémique',
    'maladie-coronaire',
    'ventricule-gauche-dilaté',
    'icfer',
    'hfref',
    'symptômes',
  ],
  aliases: [
    'Ischaemic cardiomyopathy',
    'Ischemic cardiomyopathy',
    'ICM',
    'Insuffisance cardiaque ischémique',
    'Cardiomyopathie ischémique',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Dans une cardiomyopathie ischémique, des artères coronaires rétrécies ou un ancien infarctus ont affaibli une partie de votre muscle cardiaque. Votre ventricule gauche se contracte moins fort et a tendance à s'agrandir pour compenser. C'est la cause la plus fréquente d'insuffisance cardiaque à FEVG réduite : même si une cicatrice d'infarctus est définitive, les traitements modernes protègent efficacement le reste de votre cœur.",
  keyTakeawaysFr: [
    "« Ischémique » signifie un manque d'apport sanguin par les artères coronaires ; la cicatrice d'un infarctus est définitive, mais le reste du muscle répond aux traitements.",
    "Les symptômes varient beaucoup (essoufflement, fatigue, gonflement des jambes, ou aucun symptôme) : signalez tout changement inhabituel à votre équipe de soins.",
    "Un essoufflement nouveau peut venir de l'insuffisance cardiaque ou d'une artère coronaire rétrécie ; votre cardiologue peut évaluer les deux pistes.",
    "La taille de votre ventricule gauche et l'aspect de la cicatrice à l'IRM aident votre équipe à personnaliser votre suivi, les dispositifs éventuels et les gestes coronaires.",
  ],
  sections: [
    {
      headingFr: 'Ce qui se passe dans votre cœur',
      bodyMarkdownFr: `- **La cause.** « Ischémique » signifie un manque d'apport sanguin. Des artères coronaires rétrécies — et le plus souvent un ou plusieurs infarctus du myocarde — ont endommagé une zone du muscle cardiaque. C'est la cause la plus courante d'insuffisance cardiaque dans les pays occidentaux (environ la moitié des cas).
- **Un muscle affaibli et une cavité plus grande.** Lorsque le muscle se contracte moins fort, la principale cavité de pompage (le ventricule gauche) tend à s'étirer et à s'agrandir : on parle de **ventricule gauche dilaté**.
- **Ce qui peut récupérer et ce qui reste cicatriciel.**
  - Un muscle qui a manqué de sang brièvement peut récupérer une partie de sa force.
  - Un muscle qui a manqué d'oxygène de façon prolongée lors d'un infarctus se transforme en cicatrice définitive.
- **Le rôle de l'IRM cardiaque.** Cet examen permet de visualiser précisément une cicatrice. Si la paroi cicatricielle amincie bombe vers l'extérieur à chaque battement, on parle d'anévrisme du ventricule gauche (voir *Anévrisme du ventricule gauche (cicatrice bombante après infarctus)*). Les cardiologues évoquent parfois un myocarde « viable » ou « hibernant » pour désigner des zones encore vivantes mais affaiblies (voir *Revascularisation coronaire : pontage et stents*).`,
    },
    {
      headingFr: 'Les symptômes à connaître',
      bodyMarkdownFr: `Les symptômes varient beaucoup d'une personne à l'autre, et il est tout à fait possible de n'en ressentir aucun. Les signes les plus fréquents sont :

- un essoufflement à l'effort, au repos ou en position allongée ;
- une fatigue inhabituelle qui limite vos activités quotidiennes ;
- un gonflement des pieds, des chevilles ou des jambes (œdèmes) et une prise de poids rapide liée à la rétention d'eau ;
- une toux ou une gêne respiratoire liée à la congestion ;
- des palpitations ;
- des étourdissements ou des malaises (syncopes) ;
- plus rarement, une douleur thoracique (angor).

**L'essoufflement n'a pas toujours une seule origine.** Chez une personne ayant une maladie coronarienne, un nouvel essoufflement à l'effort peut traduire un manque d'oxygène du muscle cardiaque (ischémie) plutôt que l'insuffisance cardiaque elle-même : 10 à 15 % des personnes atteintes de maladie coronarienne chronique ressentent un essoufflement sans aucune douleur thoracique. Les deux phénomènes peuvent aussi coexister. Votre cardiologue évalue souvent les deux pistes en associant ECG, échocardiographie (ETT) et bilan coronaire.

Pour mesurer l'impact sur votre vie quotidienne, les médecins utilisent les classes **NYHA I à IV** (voir *Glossaire médical de la cardiomyopathie ischémique*).`,
    },
    {
      headingFr: 'Pourquoi la cause ischémique et la dilatation guident votre suivi',
      bodyMarkdownFr: `Connaître l'origine ischémique de votre insuffisance cardiaque aide votre équipe à adapter plusieurs choix :

- **Défibrillateur automatique implantable (DAI).** Lorsque la cause est ischémique et que la FEVG reste basse après optimisation des médicaments, l'indication d'un DAI préventif est plus fortement établie que dans d'autres causes (voir *Dispositifs cardiaques implantés : DAI et CRT*).
- **Gestes sur les artères coronaires.** Un pontage aorto-coronarien ou une angioplastie (stents) peuvent être discutés en réunion collégiale (**Heart Team**) associant cardiologue, chirurgien et spécialiste de l'insuffisance cardiaque.
- **Évolution de la FEVG et taille du ventricule.** Une origine ischémique et un antécédent d'infarctus rendent une forte remontée de la FEVG moins probable, même si des progrès restent possibles (voir *Insuffisance cardiaque à FEVG améliorée (HFimpEF)*). La taille du ventricule gauche (degré de dilatation) apporte des informations complémentaires au seul chiffre de FEVG (voir *La fraction d'éjection (FEVG)* et *Examens et chiffres*).
- **Vérifier s'il existe une seconde cause.** Si l'affaiblissement de votre cœur paraît disproportionné par rapport à l'atteinte de vos artères coronaires, votre équipe peut rechercher une autre cause associée (hypertension artérielle ancienne, alcool, ancienne myocardite ou cause familiale), notamment grâce à la répartition de la cicatrice à l'IRM cardiaque (voir *Confirmer la cause de la dysfonction du ventricule gauche*).`,
    },
    {
      headingFr: 'Perspectives et repères au quotidien',
      bodyMarkdownFr: `L'évolution dépend surtout de quatre éléments : l'étendue du muscle endommagé, la valeur de votre FEVG, l'importance de la maladie coronarienne et l'existence d'un antécédent d'infarctus.

Même si l'insuffisance cardiaque ne guérit généralement pas définitivement, les traitements modernes protègent efficacement le muscle restant et réduisent nettement les hospitalisations. Personne ne peut prédire l'espérance de vie d'une personne en particulier, et de nombreuses personnes mènent une vie pleine et active avec un suivi régulier.

Pour découvrir comment agissent les traitements de fond, consultez *Les médicaments de l'insuffisance cardiaque (4 piliers)*.`,
    },
    {
      headingFr: "Classification internationale, données d'essais et nuances pronostiques",
      depth: 'evidence',
      bodyMarkdownFr: `- **Classification internationale (2026).** La *Deuxième définition universelle de l'insuffisance cardiaque* (AHA/ACC/ESC/WHF, 2026) est un consensus de terminologie et non un guide thérapeutique. Elle juge l'opposition « ischémique / non ischémique » trop réductrice et répartit les causes en **18 groupes**, avec la **cardiomyopathie ischémique en première place** (cardiopathie ischémique, infarctus du myocarde, maladie coronarienne). Elle ne fixe aucun seuil coronaire précis et s'applique quelle que soit la FEVG. Elle indique que la cardiopathie ischémique est le principal facteur de risque dans plus de 50 % des cas d'IC dans les pays occidentaux et en Europe centrale et orientale (la Cleveland Clinic mentionne environ 60 % des IC systoliques, sans référence primaire).
- **Recommandations ESC 2026.** Elles attribuent une recommandation de **Classe I** pour le DAI préventif dans les causes ischémiques contre **Classe IIa** dans les causes non ischémiques, et demandent une décision en **Heart Team** pour la revascularisation.
- **Rôle pronostique de la dilatation.** Dans une sous-étude ETT vs IRM de **REVIVED-BCIS2** (cardiomyopathie ischémique avec FEVG ≤ 35 %), le **volume télésystolique indexé (VTSi)** du ventricule gauche prédisait le décès ou la mort subite récupérée, alors que la FEVG ne le prédisait plus après ajustement. Des volumes élevés sont aussi associés au risque de rechute après amélioration (revue HFimpEF).
- **La cause ischémique modifie-t-elle le pronostic sous traitement moderne ?** Dans une analyse post hoc de **PARADIGM-HF** (8 399 patients, dont 60 % de cause ischémique), les taux bruts étaient plus élevés dans le groupe ischémique (8,8 décès pour 100 patients-années contre 7,5 à 7,7 dans les autres groupes). Après ajustement sur l'âge, les comorbidités et le NT-proBNP, l'évolution était comparable quelle que soit la cause, et le sacubitril/valsartan (*Entresto*) apportait un bénéfice équivalent. Les travaux de **McCrohon (2003)** et **Jones (2024)** soulignent enfin l'intérêt de l'IRM cardiaque (LGE) lorsque la dysfonction semble disproportionnée par rapport aux lésions coronaires.`,
    },
  ],
  relatedArticleSlugs: [
    'comprendre-le-diagnostic',
    'fraction-dejection',
    'revascularisation-pontage-stents',
    'insuffisance-cardiaque-fevg-amelioree',
    'glossaire-cardiologie',
    'alimentation-cardioprotectrice',
    'examens-et-chiffres',
    'efx-strain-troponine-et-imagerie-cardiaque',
    'essais-cliniques-cles',
    'cholesterol-et-prevention-secondaire',
    'occlusion-coronaire-chronique-cto',
    'thrombus-vg-et-anticoagulants',
    'anevrisme-ventricule-gauche',
    'confirmer-la-cause-dysfonction-vg',
    'dysfonction-vg-asymptomatique-stade-b',
    'insuffisance-cardiaque-avancee-stade-d',
    'cellules-souches-et-therapies-regeneratives',
    'dispositifs-cardiaques-dai-crt',
    'medicaments-insuffisance-cardiaque',
  ],
  sources: [
    { label: 'Cleveland Clinic — Ischemic Cardiomyopathy', detail: 'Définition, mécanisme, symptômes, lésions réversibles vs irréversibles et facteurs pronostiques' },
    { label: 'Guide patient ESC 2026', detail: "Infarctus comme cause, cœur agrandi dans l'ICFER et cicatrice visible à l'IRM" },
    { label: "Recommandations ESC 2026 sur l'insuffisance cardiaque", detail: 'Classes de recommandation du DAI (ischémique vs non ischémique) et rôle de la Heart Team' },
    { label: 'British Heart Foundation (BHF)', detail: 'Causes, symptômes et cadrage du pronostic' },
    { label: 'REVIVED-BCIS2 — analyse ETT vs IRM', detail: 'Valeur pronostique du volume télésystolique indexé du ventricule gauche' },
    { label: 'Revue HFimpEF', detail: 'Origine ischémique et dilatation comme facteurs liés à une moindre amélioration ou à la rechute' },
    { label: "PARADIGM-HF selon l'étiologie", detail: 'Comparaison des événements bruts et ajustés entre causes ischémiques et non ischémiques' },
    { label: 'McCrohon et al. (2003)', detail: 'Répartition des cicatrices IRM (LGE) entre atteinte coronaire et non coronaire' },
    { label: 'Jones et al. (2024)', detail: 'Caractéristiques de cardiomyopathie dilatée chez des patients atteints de maladie coronaire' },
    { label: "Deuxième définition universelle de l'insuffisance cardiaque (2026)", detail: "Consensus AHA/ACC/ESC/WHF (texte intégral) : 18 groupes étiologiques avec la cardiomyopathie ischémique en tête, part coronaire de l'IC et ischémie mimant une IC" },
  ],
  disclaimerType: 'medical',
};
