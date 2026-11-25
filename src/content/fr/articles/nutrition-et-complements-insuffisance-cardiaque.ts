import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'nutrition-et-complements-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/topics/nutrition-and-supplements-in-heart-failure.md',
  titleFr: "Nutrition et compléments alimentaires dans l'insuffisance cardiaque",
  category: 'nutrition',
  asOf: '2026-11-25',
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
    'vitamine-d',
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
    "L'alimentation et les compléments alimentaires ne peuvent pas remplacer le traitement de fond. Les quatre piliers médicamenteux réduisent, d'après les modélisations, les décès cardiovasculaires ou les hospitalisations pour insuffisance cardiaque d'environ 60 % par rapport à l'ancienne bithérapie : aucun complément n'approche cet effet. Quatre sujets méritent toutefois d'être abordés avec votre équipe de cardiologie : un bilan martial (le fer intraveineux, en cas de carence, diminue les hospitalisations et améliore les symptômes, contrairement aux comprimés), une alimentation de type méditerranéen pour protéger les artères coronaires, une consommation modérée de sel sans restriction extrême (et des apports hydriques guidés par la soif sauf consigne contraire de l'équipe), et la surveillance de toute perte de poids involontaire. Les oméga-3 et la coenzyme Q10 relèvent du « possible, à discuter d'abord ». La plupart des vitamines (dont la vitamine D hors carence avérée) n'apportent aucun bénéfice cardiaque, et plusieurs produits en vente libre sont à éviter avec les médicaments de l'insuffisance cardiaque. Quinze textes intégraux supplémentaires analysés en novembre 2026 ne modifient aucun de ces verdicts.",
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
| **À aborder avec l'équipe** | Dépistage nutritionnel si le poids ou l'appétit baisse | Soutien nutritionnel chez des patients hospitalisés à risque (âge médian 79 ans ; peu de FEVG réduites) : mortalité à 30 jours réduite de 14,8 % à 8,4 %, sans baisse des réadmissions (EFFORT) |
| **Possible, priorité faible** | Oméga-3, environ 1 g/j de qualité pharmaceutique | Petite baisse de mortalité (NNT 56 sur 4 ans) avant les traitements modernes (GISSI-HF) ; risque de fibrillation atriale dépendant de la dose (dans GISSI-HF, FA 11,2 % contre 9,8 %, non significatif) |
| **Possible, priorité faible** | Coenzyme Q10 | Un petit essai (Q-SYMBIO, environ 70 % ischémique) a divisé par deux les événements majeurs ; arrêté précocement, financé en partie par l'industrie, jamais répliqué ; aucune recommandation officielle |
| **Non étayé** | Fer par voie orale (comprimés) | Aucun bénéfice dans l'essai IRONOUT-HF |
| **Non étayé** | Multivitamines, vitamines C et D, sélénium, antioxydants | Aucun bénéfice cardiovasculaire dans les grandes méta-analyses ; la vitamine D a raccourci la distance de marche dans les essais IC |
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
- **Très peu de preuves sur les critères cliniques majeurs.** La cartographie des preuves de Khan (2021 — 122 essais, 14 régimes et compléments) montre une quasi-absence de données solides sur les événements cliniques dans l'insuffisance cardiaque : le seul signal sur la mortalité (CoQ10) reposait sur un seul essai, la vitamine E était associée à davantage d'hospitalisations pour IC, et la majorité des autres « bénéfices » se limitaient à la FEVG ou à des marqueurs biologiques. Cette revue ne séparait pas FEVG réduite et préservée, et précède les grands essais de fer intraveineux.
- **Des essais anciens.** La plupart des essais sur les compléments sont antérieurs à l'arrivée du sacubitril/valsartan (*Entresto*) et des inhibiteurs du SGLT2 (dapagliflozine — *Forxiga*, empagliflozine — *Jardiance*). C'est le cas de Q-SYMBIO (CoQ10) et de GISSI-HF (oméga-3). Leur bénéfice éventuel en plus du traitement moderne reste inconnu.
- **Des produits peu réglementés.** Les compléments alimentaires ne sont pas soumis au même contrôle que les médicaments : la teneur réelle en principe actif peut s'écarter fortement de l'étiquette (An 2022).
- **Positions des recommandations.** L'AHA (déclaration scientifique 2022 sur les médecines complémentaires) recommande d'informer toute l'équipe soignante, y compris votre pharmacien, de chaque complément pris. Les recommandations américaines AHA/ACC/HFSA 2022 précisent que les vitamines, compléments nutritionnels et traitements hormonaux ne sont pas recommandés dans l'insuffisance cardiaque à FEVG réduite (ICFER), sauf pour corriger une carence avérée (Classe 3 : Absence de bénéfice). Elles classent les oméga-3 comme « pouvant être raisonnables » en traitement d'appoint en classe NYHA II à IV (Classe 2b).`,
    },
    {
      headingFr: 'Comment ces preuves s’appliquent à la cardiomyopathie ischémique',
      bodyMarkdownFr: `- **Fer intraveineux.** L'effet du fer intraveineux ne varie pas selon la cause de l'insuffisance cardiaque. Dans l'essai FAIR-HF2, 78 % des patients avaient une cause ischémique.
- **Alimentation.** Les preuves en faveur du régime méditerranéen proviennent de la **maladie coronaire** : l'essai CORDIOPREV a exclu les patients ayant une FEVG inférieure ou égale à 35 %. Il soutient ce modèle alimentaire pour protéger les artères coronaires, mais ne prouve pas un effet direct sur l'insuffisance cardiaque elle-même. Dans la méta-analyse en réseau du *BMJ* (2023), les programmes méditerranéens et pauvres en graisses, comparés à une intervention minimale chez des personnes atteintes de maladie cardiovasculaire, réduisaient tous deux les décès et infarctus, sans supériorité nette du méditerranéen sur le pauvre en graisses (les événements d'IC étaient trop rares pour être analysés). En France, l'annexe d'analyse des preuves de la **HAS (octobre 2026)** pour la recommandation risque cardiovasculaire repose sur CORDIOPREV seul et juge qu'il étaye une **recommandation faible en faveur** de ce modèle alimentaire, sans effet démontré sur la mortalité.
- **Sel et liquides.** La FEVG médiane de 36 % dans SODIUM-HF est proche de celle d'une ICFER, bien que la publication principale ne détaille pas la part exacte de FEVG réduite ni de cause ischémique. L'essai FRESH-UP a inclus toutes les FEVG, dont environ la moitié d'ICFER et 44 % de causes ischémiques.
- **Compléments :**
  - **CoQ10 :** l'essai Q-SYMBIO est plus proche de cette population qu'il n'y paraît au premier abord (FEVG moyenne 31 % et environ 70 % d'origine ischémique), mais il n'a publié aucun résultat séparé pour les patients ischémiques, et le bénéfice semblait plus marqué dans la cardiomyopathie dilatée et lorsque la FEVG était ≥ 30 %.
  - **Oméga-3 :** GISSI-HF a recruté une majorité de patients à FEVG réduite de causes mixtes. Dans la méta-analyse sur la fibrillation atriale (Abuknesha 2026), une personne coronarienne appartient au groupe « haut risque », celui où les doses supérieures à 1,5 g/j ont le plus augmenté le risque de FA.
- **Risques d'interactions.** Ils dépendent des médicaments effectivement prescrits :
  - les précautions sur le potassium concernent les ARNI (sacubitril/valsartan — *Entresto*), les IEC, les ARA2 et les ARM (spironolactone — *Aldactone*, éplérénone — *Inspra*) ;
  - l'alerte sur l'acidocétose concerne les iSGLT2 ;
  - la mise en garde contre les AINS s'applique à tous les traitements de l'insuffisance cardiaque : les recommandations ESC 2026 classent les AINS et inhibiteurs de la COX-2 comme **non recommandés** (Classe III, niveau B2).`,
    },
    {
      headingFr: 'Ce qu’ajoutent les 15 nouveaux textes intégraux (novembre 2026)',
      bodyMarkdownFr: `Quinze textes intégraux supplémentaires sur l'alimentation, l'obésité, la dénutrition et les compléments ont été analysés le 25 novembre 2026. **Aucun ne modifie les verdicts du tableau ci-dessus.** Il s'agit majoritairement de revues, d'enquêtes ou de petites études observationnelles, dont plusieurs ne concernent pas l'ICFER.

### Modèles alimentaires
- **Revue parapluie sur le régime méditerranéen (Hareer 2024) :** les AVC étaient régulièrement réduits, mais la baisse de mortalité chez les patients cardiaques repose sur très peu d'essais avec une certitude faible. La baisse de 70 % des événements d'IC (**RR 0,30**) provient de deux essais anciens chez des personnes majoritairement indemnes d'IC au départ. Il n'existe toujours aucun essai randomisé de modèle alimentaire dans l'ICFER établie.
- **Mécanismes et microbiote :** une revue narrative (**Schwingshackl 2026**) détaille les mécanismes possibles, surtout issus d'études cellulaires et animales, avec des chiffres cliniques repris de seconde main. Une revue sur les métabolites du microbiote intestinal tels que le TMAO (**Lai 2025**) repose essentiellement sur des travaux animaux et ne justifie aucun changement alimentaire particulier.
- **Repas médicalisés livrés et maintien des habitudes :** une étude qualitative (**Folta 2026**) montre que les repas pauvres en sel livrés sont souvent jugés fades et de petite portion au début et ne sont pas conçus pour faire maigrir (part de patients IC non précisée). Une revue hors IC (**Rutters 2024**) confirme que la fixation d'objectifs, l'autosuivi, le soutien et des contacts réguliers aident à maintenir les changements d'hygiène de vie.
- **Alcool et alimentation « antioxydante » (Qiu 2025) :** une enquête transversale américaine relie un score de balance oxydative plus élevé — surtout tiré par une moindre consommation d'alcool — à moins d'IC autodéclarée. Elle conforte le conseil de limiter l'alcool et n'apporte aucun appui aux compléments antioxydants.

### Poids, obésité et dénutrition
- **Déclaration d'experts HFA 2025 sur l'obésité** (position d'experts européenne non gradée) :
  - l'avantage apparent de survie d'un IMC élevé dans l'IC est probablement un artéfact de l'IMC ; les mesures du tour de taille sont préférables ;
  - le NT-proBNP est plus bas en cas d'obésité ;
  - la perte de poids doit protéger le muscle (déficit calorique modéré, protéines suffisantes et exercice) ;
  - la perte de poids volontaire dans l'ICFER n'a été testée que dans quatre très petits essais randomisés (orlistat, régime hyperprotéiné, exercice ; 14 à 99 patients chacun), aucun ne mesurant décès ni hospitalisations ;
  - le sémaglutide et le tirzépatide n'ont démontré de bénéfice IC que dans l'IC à FEVG préservée (ICFEP). Dans l'ICFER, les données restent incertaines et la sécurité est débattue (deux anciens essais du liraglutide ; dans le sous-groupe ICFER de **SELECT**, les hospitalisations IC n'ont pas diminué, **HR 1,08**, non significatif). Des essais dédiés dans l'ICFER sont nécessaires.
- **Régime cétogène (Moseley 2025) :** une étude rétrospective américaine non contrôlée chez 125 patients IC avec obésité sévère (IMC moyen ~45) a rapporté environ 11 kg de perte de poids, mais sans baisse significative des hospitalisations dans le groupe à FEVG réduite. Seuls **2 patients** prenaient un iSGLT2 et l'acidocétose n'était pas rapportée : la mise en garde contre les régimes cétogènes sous iSGLT2 reste pleinement maintenue.
- **Dépistage de la dénutrition :** chez 150 patients japonais ambulatoires avec IC (FEVG médiane 45 %, environ un tiers d'ischémiques ; **Kinugasa 2022**), un court questionnaire sur l'appétit et la perte de poids (**MNA-SF**) s'est révélé le meilleur outil ; le score biologique **CONUT** est faussé par les statines qui abaissent le cholestérol, et aucun score n'a prédit les événements à 1 an. Un registre japonais exclusivement en **ICFEP** (âge médian 82 ans ; **Kitao 2025**) relie l'amélioration du CONUT après la sortie à moins de décès ou réadmissions (**HR 0,40** ; IC 95 % 0,23–0,67), association non transposable à l'ICFER.

### Diabète associé à l'insuffisance cardiaque
- **Consensus ADA 2022** (consensus d'experts sans classes gradées, applicable uniquement en cas de diabète associé) : un iSGLT2 est attendu dans la prise en charge ; un agoniste du GLP-1, la metformine ou l'insuline sont privilégiés si un contrôle glycémique supplémentaire est nécessaire ; les gliptines (iDPP-4, la saxagliptine ayant augmenté les hospitalisations pour IC) et les glitazones sont à éviter ; la mortalité la plus basse dans l'IC est observée autour d'une HbA1c de **7 à 8 %** ; les recommandations alimentaires concordent (modèle DASH ou méditerranéen, éviction des substituts de sel au potassium sous traitements hyperkaliémiants).

### Compléments et thérapies complémentaires
- **Revue parapluie de médecine intégrative (Chua 2025) :**
  - *Mêmes données récapitulées :* ses résultats sur la vitamine E (hospitalisations IC **RR 1,21** ; IC 95 % 1,04–1,40), la vitamine D (distance de marche raccourcie d'environ 39 m) et la CoQ10 (mortalité portée par un seul essai) reprennent largement Khan 2021 et Q-SYMBIO sans apporter de confirmation indépendante ;
  - **Tai Chi :** moins d'hospitalisations (**RR 0,47** ; IC 95 % 0,25–0,88) dans trois petits essais sans problème de sécurité signalé — activité douce à discuter avec votre équipe (voir la fiche réadaptation cardiaque et activité physique) ;
  - **Phytothérapie chinoise :** majoritairement de petits essais chinois de faible qualité ; un produit sur prescription en Chine (*Qishen Yiqi*) présentait un signal de mortalité de certitude modérée, mais les effets indésirables et interactions sont mal documentés (toujours vérifier avec l'équipe et le pharmacien).
- **Vitamine D (Kampka 2025 ; Hung 2023) :** carence fréquente dans l'ICFER (56 à 83 %), mais aucun essai randomisé ne montre moins de décès ou d'hospitalisations ; la revue de 2025 conseille de corriger une carence avérée et non de supplémenter systématiquement. L'enquête transversale américaine NHANES (OR ajusté 1,48 sous 30 nmol/L) ne prouve pas la causalité et ne comporte ni données spécifiques IC ni données de traitement.
- **Vitamines B (Boitard 2025) :** étude chez la souris mâle (cocktail vitamines B + nicotinamide riboside dans un modèle non ischémique de surcharge de pression) ; aucune donnée humaine, aucune raison de prendre ces compléments.`,
    },
    {
      headingFr: 'Les points de divergence entre les sources',
      bodyMarkdownFr: `- **Oméga-3 et fibrillation atriale (FA) à faible dose.** La méta-analyse de Gencer (2021) a observé une légère hausse significative du risque de FA dès 1 g/j ou moins (HR 1,12). L'analyse de 2026 sur 35 essais (**Abuknesha 2026**), financée en partie par un organisme de l'industrie des oméga-3, a trouvé des estimations à faible dose allant dans le même sens (**OR 1,06–1,07**) mais non significatives, ainsi qu'une hausse significative de **14 %** toutes doses confondues. Les deux s'accordent sur une augmentation nette du risque à forte dose chez les patients cardiaques.
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
    'vitamine-d-insuffisance-cardiaque',
    'interactions-complements-aliments-medicaments',
    'carence-martiale-et-fer-iv',
    'medicaments-insuffisance-cardiaque',
    'maladies-associees',
    'readaptation-cardiaque-et-activite-physique',
    'vivre-avec-insuffisance-cardiaque',
    'questions-equipe-cardiologie',
    'essais-cliniques-cles',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026, consensus HFA-ESC 2024 et déclaration HFA 2025 sur l’obésité',
      detail: 'Fer IV (I/B1 symptômes, IIa/B1 hospitalisations), éducation thérapeutique (I/A), AINS (III/B2), sel/liquides (HFA 2024), obésité et GLP-1 dans l’IC (HFA 2025).',
    },
    {
      label: 'Recommandations AHA/ACC/HFSA 2022, déclaration AHA 2022 (CAM), consensus ADA 2022 et annexe HAS 2026',
      detail: 'Compléments hors carence (Classe 3), oméga-3 (Classe 2b), diabète et IC (ADA 2022), évaluation française du régime méditerranéen (HAS octobre 2026).',
    },
    {
      label: 'Essais cliniques et méta-analyses majeurs',
      detail: 'FAIR-HF2, IRONOUT-HF, SODIUM-HF, FRESH-UP, CORDIOPREV, EFFORT (texte intégral), GISSI-HF, Q-SYMBIO (texte intégral), Khan 2021, An 2022, Gencer 2021, Abuknesha 2026, BMJ 2023 NMA, Cochrane 2022.',
    },
    {
      label: 'Textes intégraux nutrition, obésité et compléments (novembre 2026)',
      detail: 'Hareer 2024, Schwingshackl 2026, Lai 2025, Folta 2026, Rutters 2024, Qiu 2025, Moseley 2025, Kinugasa 2022, Kitao 2025, Chua 2025, Kampka 2025, Hung 2023, Boitard 2025.',
    },
    {
      label: 'Notices réglementaires et monographies européennes (EMA / EFSA)',
      detail: 'Interactions potassium et AINS (sacubitril/valsartan), acidocétose sous iSGLT2 (dapagliflozine), réglisse, millepertuis, levure de riz rouge, danshen et extrait de thé vert.',
    },
  ],
  disclaimerType: 'medical',
};
