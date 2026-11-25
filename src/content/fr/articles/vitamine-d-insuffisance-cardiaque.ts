import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'vitamine-d-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/concepts/vitamin-d-in-heart-failure.md',
  titleFr: 'Vitamine D et insuffisance cardiaque',
  category: 'nutrition',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'vitamine-d',
    'cholécalciférol',
    'compléments',
    'micronutriments',
    'carence',
    'insuffisance-cardiaque',
    'sarcopénie',
    'hypercalcémie',
    'limite-supérieure',
    'digoxine',
    'thiazidiques',
    'inhibiteurs-calciques',
    'grio',
    'has',
    'ansm',
  ],
  aliases: [
    'Vitamine D',
    'Cholécalciférol',
    'Vitamine D3',
    '25-hydroxyvitamine D',
    '25(OH)D',
    'ZymaD',
    'Uvedose',
    'Surdosage vitamine D',
    'Hypercalcémie',
    'Limite supérieure vitamine D',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Un taux bas de vitamine D est très fréquent dans l'ICFER (56 % à 83 %), mais les essais randomisés n'ont pas démontré que la vitamine D réduit les décès ou les hospitalisations : les petits essais regroupés dans l'IC montrent même une distance de marche légèrement réduite (-39 m, certitude élevée), et l'essai EVITA (4 000 UI/j pendant 3 ans) n'a pas amélioré la survie tout en observant davantage d'implantations d'assistance circulatoire mécanique (HR 1,96). Corriger une carence avérée reste raisonnable pour les os et les muscles, mais prendre de la vitamine D « pour le cœur » n'est pas étayé. Côté sécurité, les agences européenne (EFSA), américaine (IOM) et britannique (NHS) fixent un plafond adulte sans supervision à 100 µg (4 000 UI) par jour toutes sources confondues ; un excès provoque une hypercalcémie (soif, urines abondantes, nausées, constipation, confusion, atteinte rénale et troubles du rythme). Les notices officielles mettent en garde avec la digoxine et les diurétiques thiazidiques. En France, le dosage n'est pas remboursé pour l'insuffisance cardiaque (HAS), et les experts français du GRIO (2025) privilégient désormais les prises quotidiennes plutôt que les fortes doses espacées.",
  sections: [
    {
      headingFr: 'Pourquoi la vitamine D est souvent évoquée dans l’insuffisance cardiaque',
      bodyMarkdownFr: `- **Une carence très fréquente :** une revue de 2025 (**Kampka 2025**) rapporte un taux bas de vitamine D chez **56 % à 83 %** des patients atteints d'insuffisance cardiaque à FEVG réduite (ICFER), avec une fréquence encore plus élevée lorsque la cause est ischémique.
- **Origine principale :** environ **90 %** de la vitamine D de l'organisme est synthétisée par la peau sous l'effet du soleil ; peu d'aliments en contiennent des quantités importantes.
- **Associations observationnelles :** chez les personnes atteintes d'ICFER, des taux sanguins plus bas vont de pair avec une distance de marche plus courte et un pic de consommation d'oxygène (VO₂) plus faible, sans lien constant avec la classe NYHA. Plusieurs cohortes associent un taux bas à une mortalité cardiovasculaire plus élevée.
- **Mécanismes supposés :** les effets sur les cellules cardiaques, le système rénine-angiotensine, l'inflammation ou la parathormone proviennent surtout d'études cellulaires et animales ; on ignore si un déficit favorise l'inflammation ou si l'inflammation abaisse la vitamine D (**Kampka 2025**).
- **Une enquête transversale ne vaut pas preuve :** une enquête américaine portant sur 9 825 adultes (**Hung 2023**, NHANES 2015–2018) a retrouvé chez les personnes ayant un taux très bas (< **30 nmol/L**, soit ~12 ng/mL) une probabilité plus élevée de déclarer une maladie cardiovasculaire après ajustement (**OR 1,48** ; IC 95 % 1,10–2,00). Toutefois, les pathologies étaient autodéclarées et regroupées, l'IC n'était pas analysée séparément et, avant ajustement, les personnes atteintes de maladie cardiaque étaient moins souvent carencées.`,
    },
    {
      headingFr: 'Ce que montrent les essais cliniques',
      bodyMarkdownFr: `### Chez les personnes atteintes d'insuffisance cardiaque

Les essais randomisés conduits dans l'IC sont de petite taille et hétérogènes (toutes FEVG confondues, sans analyse séparée pour l'ICFER ischémique) :

| Critère | Résultat (Khan 2021, texte intégral) | Certitude |
|---|---|---|
| **Distance de marche de 6 minutes** | **39 m plus courte** sous vitamine D (DM -39,43 m ; IC 95 % -76,00 à -2,86 ; 4 essais, 352 patients) | Élevée |
| **FEVG** | +4,33 points (IC 95 % 0,33 à 8,33 ; 6 essais, 738 patients), mais très forte divergence entre essais (I² = 90 %) | Modérée |
| **NT-proBNP** | Aucun effet clair | Très faible ou non cotée |
| **Événements majeurs (décès, hospitalisations)** | Aucune donnée randomisée concluante dans l'IC | — |

- **Désaccord entre méta-analyses :** une analyse de 10 essais (1 000 à 10 000 UI/j pendant 6 semaines à 12 mois) n'a trouvé aucun effet significatif sur le BNP ni sur la FEVG, et une revue de 4 essais n'a montré aucune différence sur la capacité d'effort, la qualité de vie ou la survie (**Chua 2025**, qui reprend largement Khan 2021 et ne constitue donc pas une confirmation indépendante). Une méta-analyse par doses n'a pas montré d'effet global sur la FEVG, la marche ou le NT-proBNP contre placebo, malgré un signal dose-réponse à 4 000 UI/j (**Kampka 2025**).
- **Essai EVITA (vérifié sur le résumé de l'essai) :** **400 patients** en insuffisance cardiaque avancée avec vitamine D basse (FEVG médiane ~27–28 %, un peu moins de la moitié d'origine ischémique ; **4 000 UI/j pendant 3 ans**) : mortalité **19,6 % contre 17,9 %** (**HR 1,09** ; IC 95 % 0,69–1,71 — aucun bénéfice de survie) et **davantage d'implantations d'assistance circulatoire mécanique sous vitamine D** (**15,4 % contre 9,0 %** ; **HR 1,96** ; IC 95 % 1,04–3,66). Les auteurs appellent à la prudence avec les doses modérément élevées au long cours.
- **Essai VINDICATE :** **223 patients ICFER** (FEVG ≤ 45 % ; 58 % d'origine ischémique parmi les 163 ayant terminé ; **4 000 UI/j pendant 1 an**) : aucune amélioration de la distance de marche de 6 minutes (critère principal), avec une hausse secondaire de la FEVG d'environ **+6 points**.
- **Petits essais sur critères intermédiaires :** certains essais locaux chez des patients carencés (par exemple 60 000 UI/semaine × 12 semaines en Inde du Nord) et une méta-analyse de 465 patients rapportent des améliorations échographiques ou du NT-proBNP, sans preuve sur la survie ou les hospitalisations (**Kampka 2025**).

### En population générale (hors insuffisance cardiaque)

- **VITAL-HF :** aucune différence sur les hospitalisations pour IC sur 5 ans contre placebo (**Kampka 2025**).
- **Méta-analyse de 21 essais (83 291 personnes, Barbarawi) :** aucune baisse des événements CV majeurs, des décès CV ni de la mortalité toutes causes (prévention générale, non spécifique de l'IC).
- **An et al. (2022, 63 essais) :** mortalité toutes causes inchangée (**RR 0,99** ; IC 95 % 0,95–1,04).
- **DO-HEALTH (2 157 adultes âgés sains, 2 000 UI/j × 3 ans) :** aucun effet sur le NT-proBNP, le cholestérol ni les événements CV majeurs (**Kampka 2025**).`,
    },
    {
      headingFr: 'Dépistage et correction d’une carence documentée',
      bodyMarkdownFr: `- **L'examen biologique** est le dosage de la 25-hydroxyvitamine D totale, notée **25(OH)D**.
- **Des seuils débattus :** l'Institute of Medicine américain (2010) retenait **20 ng/mL (50 nmol/L)** comme suffisant, contre plus de **30 ng/mL (75 nmol/L)** pour l'Endocrine Society (2011). En **2024**, l'Endocrine Society a indiqué qu'il n'existe pas de seuil optimal établi en prévention et déconseille le **dépistage systématique** hors pathologie affectant directement le métabolisme de la vitamine D (l'IC n'y étant pas nommée).
- **Positions des recommandations cardiaques :**
  - **AHA/ACC/HFSA 2022 (États-Unis) :** les vitamines et compléments ne sont **pas recommandés** dans l'ICFER **sauf pour corriger une carence spécifique** (**Classe 3 : Absence de bénéfice, niveau B-R**).
  - **ESC 2026 (Europe) :** aucune recommandation sur la vitamine D dans le texte principal.
  - **Déclaration AHA 2022 (médecines complémentaires) :** aucun bénéfice cardiaque démontré.
- **Muscle et fragilité :** environ un tiers des patients IC présentent une fonte musculaire (**sarcopénie**). Corriger une carence avérée en vitamine D (associée à un apport suffisant en protéines) peut soutenir la force musculaire et l'autonomie quotidienne (**Kampka 2025**), sans constituer un traitement direct du cœur.`,
    },
    {
      headingFr: 'Sécurité : plafond de 4 000 UI/j, hypercalcémie et fortes doses espacées',
      bodyMarkdownFr: `### Trois types de chiffres à ne pas confondre

| Type de chiffre | Signification | Repère | Source |
|---|---|---|---|
| **Limite supérieure d'apport (UL)** | Maximum au long cours chez un adulte sain **sans supervision médicale**, toutes sources confondues (aliments enrichis + compléments) | **100 µg = 4 000 UI/j** (adultes et 11–17 ans ; 50 µg de 1 à 10 ans) | EFSA 2023, IOM 2011, NHS |
| **Doses thérapeutiques** | Doses de correction d'une carence documentée, parfois supérieures au plafond UL, sous suivi médical | Définies par votre prescripteur | IOM 2011, NHS |
| **Taux sanguin 25(OH)D** | Résultat de la prise de sang | IOM : « motif de préoccupation » > **125 nmol/L (50 ng/mL)**. **HAS 2013** (citant l'Académie nationale de médecine) : pas de toxicité documentée < 250 nmol/L (100 ng/mL), mais absence d'études de sécurité au long cours > 150–200 nmol/L. Revue de toxicité : > **150 ng/mL (375 nmol/L)** caractéristique d'un surdosage | IOM 2011 ; HAS 2013 ; Marcinowska-Suchowierska 2018 |

- **Pourquoi 4 000 UI/j — et pourquoi ce n'est pas une garantie dans l'IC :** l'EFSA a observé une hypercalciurie persistante à 10 000 UI/j (250 µg/j) dans deux essais et divisé ce seuil par 2,5. Ce plafond vise des adultes en bonne santé non suivis ; or dans l'IC, l'essai **EVITA** à exactement 4 000 UI/j a montré davantage d'implantations d'assistance circulatoire.
- **Conversions utiles :** **1 µg = 40 UI** ; pour la prise de sang, **1 ng/mL = 2,5 nmol/L** (vérifiez toujours l'unité de votre laboratoire).

### Signes d'excès de vitamine D (hypercalcémie)

Un surdosage agit en élevant le **calcium sanguin (hypercalcémie)** et urinaire. Le RCP français de ***ZymaD*** liste les signes suivants :
- **Précoces ou fréquents :** soif inhabituelle, urines abondantes, déshydratation, perte d'appétit, amaigrissement, nausées, vomissements, constipation, douleurs abdominales, maux de tête, fatigue, faiblesse musculaire, douleurs osseuses, confusion.
- **Reins :** calculs calciques, dépôts de calcium rénaux (néphrocalcinose), insuffisance rénale.
- **Cœur et vaisseaux :** hypertension artérielle, calcifications vasculaires et, dans les formes sévères, **troubles du rythme cardiaque** (raccourcissement du QT à l'ECG ; coma voire décès en hypercalcémie extrême).

Plusieurs de ces signes (fatigue, soif, urines abondantes, constipation, confusion) recoupent ceux de l'insuffisance cardiaque ou des diurétiques : c'est la **calcémie sanguine**, et non les symptômes seuls, qui permet de vérifier. **Ne modifiez jamais vos médicaments cardiaques seul** et contactez votre équipe.

Dans 48 essais de 6 mois ou plus hors IC (**Malihi 2016**), la vitamine D augmentait l'hypercalcémie (**RR 1,54**) et l'hypercalciurie (**RR 1,64**), sans excès significatif de calculs rénaux. Dans les essais IC à 4 000 UI/j, l'hypercalcémie est restée peu fréquente (**EVITA** : 6,2 % contre 3,1 %, non significatif ; **VINDICATE** : 2 cas dont 1 préexistant, aucun taux > 193 nmol/L).

### Fortes doses espacées et risques de surdosage

- **Méga-doses espacées (hors IC) :** une dose annuelle unique de 500 000 UI par voie orale augmentait les chutes (**RR 1,15**, et **RR 1,31** dans les 3 premiers mois) et les fractures (**RR 1,26**) ; une injection de 300 000 UI chaque automne augmentait les fractures de hanche (**HR 1,49**). Dans 35 essais, 800 à 1 000 UI/j quotidiens réduisaient les chutes de 22 %, contre aucun effet pour les prises espacées.
- **Usage prolongé à 4 000–10 000 UI/j :** chez des adultes sains de 55 à 70 ans suivis 3 ans (400 vs 4 000 vs 10 000 UI/j), la perte de densité osseuse au poignet était plus importante aux fortes doses (-1,2 %, -2,4 % et -3,5 % — y compris à 4 000 UI/j), avec 0 %, 3 % et 9 % d'hypercalcémies légères et 17 %, 22 % et 31 % d'hypercalciuries.
- **Comment surviennent les surdosages :** surtout par **cumul de plusieurs sources** (médicaments, compléments, aliments enrichis ; avertissement du RCP *ZymaD*) ou par des gouttes de compléments alimentaires très concentrées (**alerte ANSM 2021** sur des gouttes dosées de **500 à 10 000 UI par goutte**, recommandant de privilégier les médicaments aux compléments alimentaires et de ne jamais cumuler plusieurs produits).`,
    },
    {
      headingFr: 'Interactions médicamenteuses et modalités de dosage en France',
      bodyMarkdownFr: `### Ce que disent les notices officielles (digoxine, diurétiques, inhibiteurs calciques)

| Médicament ou classe | Contenu des notices officielles | Mécanisme et niveau de preuve |
|---|---|---|
| **Digoxine** (et autres glycosides cardiaques) | France (*ZymaD*) : **surveillance rapprochée** (risque de troubles du rythme). Royaume-Uni (*Fultium-D3*) : avis médical obligatoire et **surveillance stricte avec ECG et calcémie** si besoin | La vitamine D peut élever la calcémie, et **l'hypercalcémie renforce l'effet cardiaque de la digoxine** |
| **Diurétiques thiazidiques** | Risque accru d'hypercalcémie ; contrôle régulier de la calcémie (*Fultium-D3*) | Les thiazidiques **diminuent l'élimination urinaire du calcium** |
| **Diurétiques de l'anse** (furosémide, bumétanide) | **Aucun avertissement d'interaction** dans les RCP (cités uniquement pour traiter une hypercalcémie sévère à l'hôpital) | Non concernés par le mécanisme thiazidique |
| **Inhibiteurs calciques** | **Absents** des RCP *ZymaD*, *Fultium-D3*, des notices américaines (vérapamil, diltiazem, amlodipine) et de la fiche NIH. Le tableau AHA limite sa précaution au **vérapamil et au diltiazem à fortes doses de vitamine D**, sans référence citée | Uniquement en cas d'hypercalcémie (pouvant atténuer le vérapamil) : source primaire limitée à **un seul cas de 1981** (calcium + vitamine D). **Non étayé pour l'amlodipine** |

- Le RCP britannique ajoute que la surveillance est particulièrement importante chez les personnes âgées sous digoxine ou diurétiques, que la calcémie doit être contrôlée en usage prolongé > 1 000 UI/j, et que la maladie rénale ou la sarcoïdose exigent prudence et contrôle calcémique (insuffisance rénale sévère contre-indiquée).
- **Sous digoxine ou thiazidique :** ne débutez aucun produit à la vitamine D (même en gouttes sans ordonnance) sans l'accord de votre cardiologue ou de votre pharmacien.
- **Calcium + vitamine D en automédication :** association distincte liée à un signal de surrisque d'AVC (**RR 1,17**, **Khan 2019**). Ne l'initiez pas seul ; si elle vous est prescrite pour les os, ne l'arrêtez pas sans avis médical. Les dérivés actifs (calcitriol, utilisés en insuffisance rénale) ont un profil de risque distinct.

### Remboursement du dosage en France et suivi (HAS, GRIO 2025)

En France, la **HAS (2013)** n'a pas retenu d'utilité clinique démontrée au dosage systématique de la vitamine D (y compris dans les maladies cardiovasculaires). Depuis 2014, le dosage n'est **remboursé que dans six situations** : suspicion de rachitisme, suspicion d'ostéomalacie, suivi de transplantation rénale, avant et après chirurgie bariatrique, personnes âgées faisant des chutes répétées, ou exigence explicite d'une notice médicamenteuse. **L'insuffisance cardiaque ne figure pas sur cette liste** (dosage noté « NR », non remboursé hors ces 6 cas).

Lorsque le médecin décide de traiter une carence, les modalités de contrôle diffèrent selon les sources :

| Source | Recontrôler la 25(OH)D ? | Contrôler la calcémie ? |
|---|---|---|
| **GRIO 2025** (experts français de l'ostéoporose ; remplace GRIO 2011) | **Après 3 à 6 mois d'entretien** (pour les personnes ostéoporotiques ou à risque ; cible 30–60 ng/mL, soit 75–150 nmol/L) | Mesurer **calcémie et phosphatémie** le même jour que la 25(OH)D |
| **NHS (NENC 2025 / NICE CKS)** | **Généralement inutile** | **Calcémie corrigée dans le mois** après la charge ou le début de l'entretien |
| **RCP *ZymaD* (France)** | — | Contrôler calcémie et calciurie lors de fortes doses répétées ; **arrêter si calcémie > 2,65 mmol/L (106 mg/L)** ou calciurie > 300 mg/24 h |

- **Évolution majeure du GRIO 2025 :** contrairement à 2011, le GRIO 2025 ne cite plus l'insuffisance cardiaque (il porte sur l'ostéoporose), rappelle que le dosage n'est ni recommandé ni remboursé en population générale, **privilégie la prise quotidienne** et déconseille les fortes doses espacées prolongées (≥ 60 000 UI/mois, associées à chutes et fractures ; abandon des ampoules de 100 000 UI en charge, plafond de 50 000 UI en recours ponctuel) ainsi que les compléments alimentaires de composition non vérifiée.
- **En pratique dans l'ICFER :** lors de vos bilans sanguins habituels (fonction rénale, potassium), vous pouvez demander à votre médecin s'il juge utile d'y ajouter une **calcémie** si vous prenez de la vitamine D, en particulier avec de la digoxine ou un diurétique thiazidique.`,
    },
    {
      headingFr: 'Autres vitamines : ce qu’ajoutent les études récentes',
      bodyMarkdownFr: `- **Vitamines du groupe B :** une étude chez la souris (**Boitard 2025**) a observé qu'un mélange de nicotinamide riboside, de folates et de vitamine B12 ralentissait l'affaiblissement cardiaque dans un modèle murin non ischémique. Ce n'est **pas une preuve chez l'être humain** ; les données cliniques humaines sont détaillées dans la fiche *Vitamines B et insuffisance cardiaque*.
- **Alimentation « antioxydante » :** une enquête transversale américaine (**Qiu 2025**, 7 022 adultes hypertendus) a associé un score de « balance oxydative » favorable à moins d'IC autodéclarée (OR 0,56), mais ce score était tiré par l'alcool et le poids sans étudier de compléments : cela ne valide pas les compléments antioxydants, qui ont échoué dans les essais randomisés (**An 2022**).`,
    },
    {
      headingFr: 'À retenir en pratique',
      bodyMarkdownFr: `- La vitamine D n'est **pas un traitement de l'insuffisance cardiaque** : aucun essai ne montre de baisse des décès ou des hospitalisations, et les essais IC regroupés ont montré une marche légèrement raccourcie.
- **Corriger une carence documentée est raisonnable** (os et muscles), sous conduite médicale.
- Le plafond adulte sans supervision est de **4 000 UI (100 µg) par jour toutes sources confondues** — et ce plafond pour adultes sains ne prouve pas l'innocuité dans l'IC (signal EVITA à 4 000 UI/j).
- Surveillez les **signes d'hypercalcémie** (soif, urines abondantes, nausées, constipation, fatigue, confusion), vérifiés par une calcémie sanguine, et privilégiez les médicaments dosés avec précision plutôt que des compléments concentrés cumulés.
- **Sous digoxine ou diurétique thiazidique**, demandez impérativement l'avis de votre cardiologue ou de votre pharmacien avant toute prise de vitamine D.`,
    },
  ],
  relatedArticleSlugs: [
    'magnesium-insuffisance-cardiaque',
    'vitamines-b-insuffisance-cardiaque',
    'nutrition-et-complements-insuffisance-cardiaque',
    'coenzyme-q10',
    'omega-3-huile-de-poisson',
    'tableau-preuves-nutrition-complements',
    'interactions-complements-aliments-medicaments',
    'medicaments-effets-secondaires-suivi',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'poids-obesite-et-denutrition',
  ],
  sources: [
    {
      label: 'Kampka et al. (2025), Chua et al. (2025), Khan et al. (2021), EVITA, VINDICATE et Malihi et al. (2016)',
      detail: 'Prévalence des carences dans l’ICFER, essais IC (marche -39 m, EVITA mortalité HR 1,09 et assistance mécanique HR 1,96 à 4 000 UI/j, VINDICATE) et risque d’hypercalcémie (RR 1,54).',
    },
    {
      label: 'EFSA (2023), US IOM (2011), NHS, RCP ZymaD (France), RCP Fultium-D3 (Royaume-Uni) et alerte ANSM (2021)',
      detail: 'Plafond adulte 4 000 UI (100 µg)/j, signes d’hypercalcémie et seuil d’arrêt 2,65 mmol/L, mises en garde digoxine et thiazidiques, et alertes sur les gouttes de compléments concentrées.',
    },
    {
      label: 'HAS (2013/2014), GRIO (2025), NHS NENC (2025) et vérification sur les inhibiteurs calciques',
      detail: 'Six indications remboursées du dosage 25(OH)D en France (IC exclue), position GRIO 2025 (prises quotidiennes préférées, recontrôle 3–6 mois, abandon des charges 100 000 UI) et limite de l’alerte AHA sur vérapamil/diltiazem.',
    },
    {
      label: 'An et al. (2022), Hung et al. (2023), Boitard et al. (2025), Qiu et al. (2025), AHA/ACC/HFSA 2022 et ESC 2026',
      detail: '63 essais vitamine D (RR 0,99), signal AVC calcium + vitamine D (Khan 2019), compléments non recommandés hors carence (Classe 3, B-R) et absence de mention dans ESC 2026.',
    },
  ],
  disclaimerType: 'medical',
};
