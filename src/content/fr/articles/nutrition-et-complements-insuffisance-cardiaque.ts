import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'nutrition-et-complements-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/topics/nutrition-and-supplements-in-heart-failure.md',
  titleFr: "Nutrition et compléments alimentaires dans l'insuffisance cardiaque",
  category: 'nutrition',
  asOf: '2026-11-24',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'nutrition',
    'compléments',
    'alimentation',
    'carence-martiale',
    'sel',
    'liquides',
    'coenzyme-q10',
    'oméga-3',
    'interactions',
    'synthèse',
  ],
  aliases: [
    'Alimentation et insuffisance cardiaque',
    'Compléments alimentaires insuffisance cardiaque',
    'Que manger',
    'Interventions nutritionnelles',
    'Quels compléments valent la peine',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "L'alimentation et les compléments alimentaires ne peuvent pas remplacer le traitement de fond. Les quatre piliers médicamenteux réduisent, d'après les modélisations, les décès cardiovasculaires ou les hospitalisations pour insuffisance cardiaque d'environ 60 % par rapport à l'ancienne bithérapie : aucun complément n'approche cet effet. Quatre sujets méritent toutefois d'être abordés avec votre équipe de cardiologie : un bilan martial (le fer intraveineux, en cas de carence, diminue les hospitalisations et améliore les symptômes, contrairement aux comprimés), une alimentation de type méditerranéen pour protéger les artères coronaires, une consommation modérée de sel sans restriction extrême (et des apports hydriques guidés par la soif sauf consigne contraire de l'équipe), et la surveillance de toute perte de poids involontaire. Les oméga-3 et la coenzyme Q10 relèvent du « possible, à discuter d'abord ». La plupart des vitamines n'apportent aucun bénéfice cardiaque, et plusieurs produits en vente libre sont à éviter avec les médicaments de l'insuffisance cardiaque.",
  sections: [
    {
      headingFr: "L'essentiel en un coup d'œil",
      bodyMarkdownFr: `Cet article répond à la question : *« Quelles interventions nutritionnelles et quels compléments alimentaires méritent d'être envisagés dans une cardiomyopathie ischémique à FEVG réduite (autour de 35 %) ? »* Il synthétise les articles détaillés consacrés à chaque thème.

| Verdict | Élément | Pourquoi |
|---|---|---|
| **À aborder avec l'équipe** | Bilan martial ; fer intraveineux si carence | 6 essais randomisés, 7 175 patients : environ 20 à 30 % d'hospitalisations pour insuffisance cardiaque en moins ; amélioration des symptômes ; ESC 2026 Classe I pour les symptômes |
| **À aborder avec l'équipe** | Alimentation de type méditerranéen | Essai sur 7 ans dans la maladie coronaire (CORDIOPREV) : environ 25 % d'événements cardiovasculaires majeurs en moins (mais FEVG ≤ 35 % exclue) |
| **À aborder avec l'équipe** | Sel modéré (éviter les excès, éviter les extrêmes) | La restriction stricte n'a pas réduit les décès ni les hospitalisations (SODIUM-HF) ; limiter les excès reste utile pour la tension artérielle |
| **À aborder avec l'équipe** | Liquides guidés par la soif, sauf limite fixée par l'équipe | Une limite fixe de 1,5 L/j n'a apporté aucun bénéfice et a majoré la soif chez les patients stables (FRESH-UP) |
| **À aborder avec l'équipe** | Dépistage nutritionnel si le poids ou l'appétit baisse | Un soutien nutritionnel chez les patients hospitalisés à risque a réduit la mortalité à 30 jours de 14,8 % à 8,4 % (EFFORT) |
| **Possible, priorité faible** | Oméga-3, environ 1 g/j de qualité pharmaceutique | Petite baisse de mortalité (NNT 56 sur 4 ans) avant les traitements modernes (GISSI-HF) ; risque de fibrillation atriale dépendant de la dose |
| **Possible, priorité faible** | Coenzyme Q10 | Un petit essai (Q-SYMBIO) a divisé par deux les événements majeurs ; jamais répliqué ; aucune recommandation officielle |
| **Non étayé** | Fer par voie orale (comprimés) | Aucun bénéfice dans l'essai IRONOUT-HF |
| **Non étayé** | Multivitamines, vitamines C et D, sélénium, antioxydants | Aucun bénéfice cardiovasculaire dans les grandes méta-analyses |
| **Non étayé** | Thiamine (vitamine B1), L-carnitine (hors carence avérée) | Signaux limités à la FEVG (critère intermédiaire), non confirmés par les analyses ultérieures |
| **Non étayé** | Ginseng | Aucun bénéfice prouvé seul ; effet imprévisible sur la warfarine ; peut fausser certains dosages de digoxine |
| **À éviter** | Substituts de sel au potassium et comprimés de potassium (hors prescription) | Augmentent la kaliémie avec les ARNI, IEC, ARA2 et ARM |
| **À éviter** | Antalgiques AINS en vente libre (ibuprofène, kétoprofène, naproxène, diclofénac) | Risque d'atteinte rénale et de rétention hydrosodée avec les médicaments de l'insuffisance cardiaque |
| **À éviter** | Vitamine E, bêta-carotène, calcium + vitamine D en automédication (hors prescription) | Signaux d'effets délétères |
| **À éviter** | Régimes cétogènes, régimes draconiens et jeûnes prolongés sous iSGLT2 | Facteurs déclenchants d'acidocétose inscrits dans la notice (rares hors diabète) |
| **À éviter** | Réglisse véritable, millepertuis, levure de riz rouge | Rétention d'eau et hypokaliémie ; baisse d'efficacité de médicaments cardiaques ; cumul caché avec une statine |
| **À éviter** | Danshen (sauge rouge) et extraits concentrés de thé vert en gélules | Surdosage hémorragique avec la warfarine ; baisse des taux d'un IEC, d'un bêtabloquant et de statines, et risque rare d'atteinte hépatique grave |

**« À éviter » désigne les produits débutés de votre propre initiative, pas vos médicaments prescrits.** Cette mise en garde concerne les produits achetés sans validation médicale. Elle ne constitue jamais une raison d'arrêter un traitement prescrit : par exemple, l'aspirine à faible dose n'est pas un antalgique AINS, et du calcium ou de la vitamine D peuvent vous avoir été prescrits pour un autre motif. Ne modifiez ni n'interrompez jamais un traitement prescrit sans en parler d'abord à votre cardiologue, votre médecin traitant, votre infirmière insuffisance cardiaque ou votre pharmacien.`,
    },
    {
      headingFr: 'Pourquoi les compléments alimentaires arrivent loin derrière les médicaments',
      bodyMarkdownFr: `- **Le traitement de fond d'abord.** Pris ensemble, les quatre piliers médicamenteux (ARNI ou IEC/ARA2, bêtabloquant, ARM et iSGLT2) réduisent, selon les modélisations publiées, le risque de décès cardiovasculaire ou d'hospitalisation pour insuffisance cardiaque d'environ 60 % par rapport à l'ancienne bithérapie.
- **Très peu de preuves sur les critères cliniques majeurs.** La cartographie des preuves de Khan (2021) montre qu'en dehors du fer intraveineux, quasiment aucun complément alimentaire ne dispose de preuves solides sur les hospitalisations ou la survie dans l'insuffisance cardiaque.
- **Des essais anciens.** La plupart des essais sur les compléments sont antérieurs à l'arrivée du sacubitril/valsartan (Entresto) et des inhibiteurs du SGLT2 (dapagliflozine — Forxiga, empagliflozine — Jardiance). C'est le cas de Q-SYMBIO (CoQ10) et de GISSI-HF (oméga-3). Leur bénéfice éventuel en plus du traitement moderne reste inconnu.
- **Des produits peu réglementés.** Les compléments alimentaires ne sont pas soumis au même contrôle que les médicaments : la teneur réelle en principe actif peut s'écarter fortement de l'étiquette.
- **Positions des recommandations.** L'AHA (déclaration scientifique 2022 sur les médecines complémentaires) recommande d'informer toute l'équipe soignante, y compris votre pharmacien, de chaque complément pris. Les recommandations américaines AHA/ACC/HFSA 2022 précisent que les vitamines, compléments nutritionnels et traitements hormonaux ne sont pas recommandés dans l'insuffisance cardiaque à FEVG réduite (ICFER), sauf pour corriger une carence avérée (Classe 3 : Absence de bénéfice). Elles classent les oméga-3 comme « pouvant être raisonnables » en traitement d'appoint en classe NYHA II à IV (Classe 2b).`,
    },
    {
      headingFr: 'Comment ces preuves s’appliquent à la cardiomyopathie ischémique',
      bodyMarkdownFr: `- **Fer intraveineux.** L'effet du fer intraveineux ne varie pas selon la cause de l'insuffisance cardiaque. Dans l'essai FAIR-HF2, 78 % des patients avaient une cause ischémique.
- **Alimentation.** Les preuves en faveur du régime méditerranéen proviennent de la **maladie coronaire** : l'essai CORDIOPREV a exclu les patients ayant une FEVG inférieure ou égale à 35 %. Il soutient ce modèle alimentaire pour protéger les artères coronaires, mais ne prouve pas un effet direct sur l'insuffisance cardiaque elle-même.
- **Sel et liquides.** La FEVG médiane de 36 % dans SODIUM-HF est proche de celle d'une ICFER, bien que la publication principale ne détaille pas la part exacte de FEVG réduite ni de cause ischémique. L'essai FRESH-UP a inclus toutes les FEVG, dont environ la moitié d'ICFER et 44 % de causes ischémiques.
- **Risques d'interactions.** Ils dépendent des médicaments effectivement prescrits :
  - les précautions sur le potassium concernent les ARNI (sacubitril/valsartan — Entresto), les IEC, les ARA2 et les ARM (spironolactone — Aldactone, éplérénone — Inspra) ;
  - l'alerte sur l'acidocétose concerne les iSGLT2 ;
  - la mise en garde contre les AINS s'applique à tous les traitements de l'insuffisance cardiaque : les recommandations ESC 2026 classent les AINS et inhibiteurs de la COX-2 comme **non recommandés** (Classe III, niveau B2).`,
    },
    {
      headingFr: 'Les points de divergence entre les sources',
      bodyMarkdownFr: `- **Oméga-3 et fibrillation atriale (FA) à faible dose.** La méta-analyse de Gencer (2021) a observé une légère hausse du risque de FA dès 1 g/j ou moins. Une méta-analyse de 2026 commanditée par un organisme de l'industrie des oméga-3 n'a pas retrouvé d'augmentation à faible dose. Les deux s'accordent en revanche sur une hausse du risque à forte dose.
- **Ampleur réelle de l'effet du fer intraveineux.** Chaque grand essai pris isolément a manqué de peu son critère principal. L'analyse groupée de 2025 est robuste pour la baisse des hospitalisations, mais ne montre pas de gain significatif sur la survie globale, et elle a été conduite par des investigateurs liés aux essais.
- **Seuils de sel.** Les chiffres diffèrent selon les organismes :
  - **HFA-ESC 2024** : jusqu'à environ 5 g de sel par jour acceptables ;
  - **ESC 2026** : aucun objectif en grammes dans le texte principal (la réduction du sel est jugée bénéfique et l'éducation thérapeutique / l'autogestion sont classées Classe I, niveau A ; le tableau détaillé d'autosoins figure en supplément en ligne non consulté) ;
  - **Repères britanniques (BHF)** : moins de 6 g de sel par jour ;
  - certaines recommandations américaines évoquent des seuils plus bas.

Aucun de ces repères généraux ne constitue un objectif personnalisé : vos cibles de sel et de liquides doivent être confirmées avec votre cardiologue ou votre infirmière insuffisance cardiaque.`,
    },
    {
      headingFr: 'Préparer vos questions pour la consultation',
      bodyMarkdownFr: `Pour transformer ces éléments en échanges concrets lors de votre prochaine visite (cardiologue, médecin traitant ou pharmacien), reportez-vous à la rubrique « Alimentation et compléments » de la fiche de questions pour l'équipe de cardiologie et au guide pratique associé. Apportez systématiquement la liste complète (ou les boîtes) de tous les compléments, tisanes ou produits sans ordonnance que vous prenez ou envisagez.`,
    },
  ],
  relatedArticleSlugs: [
    'guide-pratique-nutrition-complements',
    'tableau-preuves-nutrition-complements',
    'sel-et-liquides-insuffisance-cardiaque',
    'alimentation-cardioprotectrice',
    'poids-obesite-et-denutrition',
    'omega-3-huile-de-poisson',
    'coenzyme-q10',
    'interactions-complements-aliments-medicaments',
    'carence-martiale-et-fer-iv',
    'medicaments-insuffisance-cardiaque',
    'vivre-avec-insuffisance-cardiaque',
    'questions-equipe-cardiologie',
    'essais-cliniques-cles',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 sur l’insuffisance cardiaque',
      detail: 'Fer IV (I/B1 symptômes, IIa/B1 hospitalisations), éducation thérapeutique (I/A), AINS (III/B2), absence de seuil chiffré de sel dans le texte principal.',
    },
    {
      label: 'Consensus HFA-ESC 2024 sur le sodium et les apports hydriques',
      detail: 'Apports modérés en sel (jusqu’à 5 g/j), apports hydriques guidés par la soif (1,5 à 2,5 L/j).',
    },
    {
      label: 'Recommandations AHA/ACC/HFSA 2022 et déclaration AHA 2022 (CAM)',
      detail: 'Vitamines et compléments non recommandés hors carence (Classe 3), oméga-3 (Classe 2b), déclaration systématique des compléments à l’équipe.',
    },
    {
      label: 'Essais cliniques majeurs (FAIR-HF2, IRONOUT-HF, SODIUM-HF, FRESH-UP, CORDIOPREV, EFFORT, GISSI-HF, Q-SYMBIO)',
      detail: 'Essais randomisés et méta-analyses (Khan 2021, An 2022, Gencer 2021, Cochrane 2022, méta-analyse fer IV 2025).',
    },
    {
      label: 'Notices réglementaires et monographies européennes (EMA / EFSA)',
      detail: 'Interactions potassium et AINS (sacubitril/valsartan), acidocétose sous iSGLT2 (dapagliflozine), réglisse, millepertuis, levure de riz rouge, danshen et extrait de thé vert.',
    },
  ],
  disclaimerType: 'medical',
};
