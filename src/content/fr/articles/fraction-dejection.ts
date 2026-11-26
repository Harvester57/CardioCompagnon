import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'fraction-dejection',
  sourceWikiPath: 'wiki/concepts/ejection-fraction.md',
  titleFr: "La fraction d'éjection (FEVG)",
  category: 'diagnostic',
  readingTier: 'essential',
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
    "La fraction d'éjection du ventricule gauche (FEVG) indique le pourcentage de sang que votre cœur éjecte à chaque battement : elle n'est jamais de 100 %, même dans un cœur sain. Une valeur à 35 % correspond à une FEVG réduite, mais ce chiffre est un repère à interpréter avec votre cardiologue, pas un verdict figé. Attention : les résultats d'une échographie (ETT) et d'une IRM cardiaque ne sont pas directement comparables.",
  keyTakeawaysFr: [
    "Une FEVG normale se situe généralement au-dessus de 50 %, mais une valeur plus basse ne signifie pas automatiquement des symptômes sévères.",
    "Comparez toujours deux mesures réalisées avec la même technique (ETT avec ETT, IRM avec IRM), car l'IRM donne souvent un chiffre inférieur de plusieurs points.",
    "Le seuil de 35 % après au moins 3 mois de traitement optimisé sert de repère pour discuter avec votre cardiologue d'un défibrillateur (DAI) ou d'une resynchronisation (CRT).",
    "La FEVG est utile pour suivre votre cœur, mais elle ne résume pas à elle seule votre santé : vos symptômes, votre tolérance à l'effort et la taille du cœur comptent tout autant.",
  ],
  sections: [
    {
      headingFr: 'Ce que mesure la FEVG',
      bodyMarkdownFr: `La FEVG correspond au pourcentage de sang contenu dans votre ventricule gauche qui est expulsé à chaque battement cardiaque. Trois repères simples aident à la lire sans inquiétude excessive :

- **Elle n'est jamais de 100 %.** Dans un cœur sain, la limite inférieure de la normale se situe autour de **52 % chez l'homme** et **53 % chez la femme** (en général entre 50 et 70 %).
- **Une FEVG inférieure à 50 %** ne signifie pas automatiquement que vos symptômes sont sévères ; certaines personnes se sentent bien au quotidien malgré un chiffre bas.
- **Une FEVG supérieure à 50 %** ne garantit pas non plus que le cœur fonctionne parfaitement (il existe des insuffisances cardiaques à FEVG préservée).

En pratique, une valeur de **35 %** correspond à une insuffisance cardiaque à **FEVG réduite** (ICFER) dans tous les documents médicaux. Si votre FEVG remonte sous traitement d'au moins **10 points** pour dépasser **40 %**, votre cardiologue peut parler de **FEVG améliorée** (voir *Insuffisance cardiaque à FEVG améliorée (HFimpEF)*).

La FEVG est mesurée le plus souvent par **échocardiographie transthoracique (ETT)**, et parfois par **IRM cardiaque**, qui fournit une image plus détaillée et montre également les zones cicatricielles.`,
    },
    {
      headingFr: 'Pourquoi 35 % est un repère important dans votre suivi',
      bodyMarkdownFr: `Le seuil de **35 %** sert de point de repère pour discuter d'un défibrillateur automatique implantable (DAI) préventif et, si votre électrocardiogramme (ECG) montre un décalage électrique (complexe QRS élargi), d'une thérapie de resynchronisation cardiaque (CRT).

Ce seuil s'apprécie **après au moins 3 mois de traitement médical optimisé**. C'est pourquoi votre cardiologue programme souvent un nouveau contrôle de la FEVG une fois vos médicaments de fond augmentés progressivement (voir *Dispositifs cardiaques implantés : DAI et CRT*).`,
    },
    {
      headingFr: 'Ne comparez pas une échographie (ETT) et une IRM',
      bodyMarkdownFr: `Deux comptes rendus indiquant par exemple **35 %** et **30 %** ne signifient pas forcément que votre cœur a faibli. L'échocardiographie (ETT) et l'IRM cardiaque ne mesurent pas la cavité exactement de la même manière :

- chez une même personne, **l'IRM donne souvent une FEVG inférieure de plusieurs points** à celle de l'ETT (environ **5,5 points** de moins en moyenne) ;
- autour de 35 %, il est fréquent qu'un examen se situe juste au-dessus et l'autre juste en dessous.

**En pratique :** comparez toujours deux examens réalisés avec la **même technique** (ETT avec ETT, IRM avec IRM), et discutez de l'évolution globale avec votre cardiologue.`,
    },
    {
      headingFr: 'Ce que la FEVG ne dit pas à elle seule',
      bodyMarkdownFr: `La FEVG est un indicateur précieux pour orienter votre traitement, mais elle a des limites importantes :

- **Elle décrit mieux un groupe qu'un individu.** Une FEVG basse augmente le risque moyen de trouble du rythme dans une grande population, mais elle prédit mal ce qui arrivera à une personne précise.
- **D'autres paramètres comptent tout autant.** Votre cardiologue regarde aussi vos symptômes au quotidien, votre tolérance à l'effort, la taille de votre ventricule gauche (dilatation), l'étendue éventuelle d'une cicatrice à l'IRM et votre réponse aux traitements.

Ces nuances expliquent pourquoi les décisions (notamment autour d'un dispositif implantable) se prennent toujours au cas par cas (voir *Dispositifs cardiaques implantés : DAI et CRT*).`,
    },
    {
      headingFr: "Comparaison des seuils (ESC, AHA, BHF) et données d'études",
      depth: 'evidence',
      bodyMarkdownFr: `### Pourquoi les catégories de FEVG varient selon les brochures

Les recommandations européennes ont évolué en 2026 ; des documents publiés à des dates ou dans des pays différents affichent donc des tranches distinctes :

| Référentiel | Réduite (ICFER / *HFrEF*) | Catégorie intermédiaire | Préservée (*HFpEF*) |
|---|---|---|---|
| **Recommandations ESC 2026** (en vigueur en Europe) | FEVG **< 50 %** + symptômes/signes | *Supprimée* | FEVG ≥ 50 % + anomalie objective |
| ESC 2021 / 2023 (remplacées) | ≤ 40 % | 41–49 % (« modérément réduite ») | ≥ 50 % |
| Livret BHF (Royaume-Uni, 2024) | < 40 % | 40–49 % | ≥ 50 % |
| Fiche patient AHA (États-Unis, 2025) | ≤ 40 % | 41–49 % | Normale : 50–70 % |
| Page Cleveland Clinic (États-Unis, 2026) | ≤ 39 % | 40–49 % | Normale : 50–70 % |

- **Suppression de la tranche intermédiaire (ESC 2026).** Le groupe de travail a retiré la catégorie « modérément réduite » car sa biologie et sa réponse aux traitements rejoignent celles de l'ICFER. Le livret patient ESC formule « ≤ 50 % » tandis que le texte complet indique « < 50 % » (nuance uniquement à exactement 50 %).
- **Divergences entre sites patients.** La page web de l'AHA cite une normale de 55–70 % contre 50–70 % sur sa fiche imprimable ; la Cleveland Clinic indique 52–72 % (homme) et 54–74 % (femme) et qualifie 30–40 % de « modérément anormale » ; *Heart Failure Matters* (ESC) affiche encore les trois anciennes tranches (< 40 % pour réduite).
- **Deuxième définition universelle de l'insuffisance cardiaque (juin 2026, AHA/ACC/ESC/WHF).** Consensus de terminologie distinct des recommandations ESC : elle distingue FEVG réduite, préservée et améliorée **sans fixer de frontière chiffrée** (ni pour la FEVG ni pour les peptides natriurétiques), jugeant les seuils fixes arbitraires. Elle rappelle que la limite inférieure normale est d'environ 53 % chez la femme et 52 % chez l'homme, et qu'une FEVG < 50 % est peu susceptible d'être normale. Pour la **FEVG améliorée (HFimpEF)**, l'ESC 2026 et la définition universelle 2021/2026 retiennent un gain absolu d'au moins 10 points permettant de dépasser 40 %, en précisant en 2026 que la FEVG seule ne suffit pas (distinction entre amélioration, rémission et récupération).

### Écarts de mesure ETT vs IRM et pouvoir prédictif

- **Sous-étude ETT vs IRM de REVIVED-BCIS2 (373 patients, lecture en aveugle par laboratoire central).** La FEVG moyenne était de **31,4 % en ETT** contre **25,8 % en IRM** (écart moyen d'environ **5,5 points**). Seules **7,5 %** des paires se situaient à moins de 5 points l'une de l'autre (limites d'agrément de **−24,4 à +13,2 points**). Un tiers des patients ayant une FEVG IRM < 35 % avaient une FEVG ETT ≥ 35 %, avec un taux d'implantation de DAI de 45 % contre 61 % en cas de concordance (les deux examens étant toutefois espacés d'environ 6 semaines en moyenne). Dans cette même sous-étude, le volume télésystolique du ventricule gauche prédisait l'évolution clinique, contrairement à la FEVG après ajustement.
- **Analyse poolée PROFID (140 204 patients post-infarctus).** Sans DAI, le taux de mort subite cardiaque à 3 ans était de **3,41 %** si la FEVG était ≤ 35 % contre **0,87 %** au-dessus de 35 %. En revanche, la FEVG seule discriminait mal le risque individuel (statistique C de **0,50 à 0,56**), et l'ajout d'autres variables ou de la cicatrice IRM n'a que légèrement amélioré cette prédiction.`,
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
