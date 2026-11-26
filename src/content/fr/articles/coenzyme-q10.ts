import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'coenzyme-q10',
  sourceWikiPath: 'wiki/concepts/coenzyme-q10.md',
  titleFr: 'Coenzyme Q10 (CoQ10)',
  category: 'nutrition',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'coenzyme-q10',
    'ubiquinone',
    'ubiquinol',
    'compléments',
    'q-symbio',
    'coral',
    'danutrio-hf',
    'seleqt-hf',
    'insuffisance-cardiaque',
  ],
  aliases: ['CoQ10', 'Ubiquinone', 'Ubiquinol', 'Q-SYMBIO', 'CORAL', 'DANUTRIO-HF', 'SELEQT-HF'],
  linkedModules: ['core'],
  plainSummaryFr:
    "La coenzyme Q10 (CoQ10) est le complément alimentaire au sujet duquel les patients et leurs proches posent le plus de questions. L'analyse approfondie (voir la thèse dédiée sur la CoQ10) montre pourquoi aucune recommandation ne la conseille aujourd'hui : zéro essai achevé n'a testé la CoQ10 sur la mortalité ou les hospitalisations en complément de la quadrithérapie moderne (sacubitril/valsartan — Entresto — et iSGLT2). Son signal clinique provient presque entièrement d'un seul petit essai pré-moderne (Q-SYMBIO, 2014 : 420 patients sur 550 prévus recrutés en 8 ans, cofinancement et suivi opérationnel partiels par des fabricants, aucun gain échographique ni biologique, aucun sous-groupe ischémique dédié et quasiment aucun effet hors Europe). Plusieurs méta-analyses surestiment la certitude : l'évaluation publique britannique NIHR HTA (2022), restreinte aux vrais essais d'insuffisance cardiaque, trouve une mortalité non significative (RR 0,68 ; IC 95 % 0,45–1,03), tandis que des synthèses antérieures mélangeaient une étude de sujets âgés en bonne santé (KISEL-10) ou des essais ouverts. Trois grands essais européens modernes sont en cours (CORAL, DANUTRIO-HF et SELEQT-HF ; résultats attendus entre 2028 et 2030). Point de sécurité essentiel : ne débutez jamais la CoQ10 seul si vous prenez de la warfarine (Coumadine) ou un autre antivitamine K (risque de baisse de l'INR ; patients exclus de CORAL et DANUTRIO-HF).",
  sections: [
    {
      headingFr: 'L’essai principal : Q-SYMBIO (2014) et son sous-groupe européen (2019)',
      bodyMarkdownFr: `**Protocole :** 420 patients atteints d'insuffisance cardiaque chronique modérée à sévère (classe NYHA III à IV), randomisés entre **coenzyme Q10 (ubiquinone Pharma Nord) 100 mg trois fois par jour (300 mg/j)** et placebo pendant **2 ans** (106 semaines), dans 17 centres en Europe, en Asie et en Australie (recrutement 2003–2010).

**Qui a participé :**
- **Fraction d'éjection :** aucun seuil de FEVG n'était exigé. FEVG moyenne **31 %** (extrêmes 10 à 70 %), dont 7 % avec une FEVG ≥ 45 %.
- **Cause :** environ **70 %** de cardiopathie ischémique (68 % sous CoQ10, 72 % sous placebo), 27 % de cardiomyopathie dilatée et 3 % de valvulopathies.
- **Symptômes :** 87–88 % NYHA III, 9–10 % NYHA IV, 3–4 % NYHA II.
- **Traitement de fond pré-moderne :** IEC ou ARA2 90 %, bêtabloquant 72–76 %, ARM 34 %, digoxine ~45 %, **0 % de sacubitril/valsartan (ARNI) et 0 % d'iSGLT2** ; seuls 7 patients portaient une CRT (1,7 %) et 7 un DAI (1,7 %).

**Règles méthodologiques particulières :** les hospitalisations pour IC survenues dans les **30 premiers jours** n'étaient pas comptabilisées (période blanche), et les patients étaient censurés lors de l'implantation d'une CRT.

**Résultats à 16 semaines (co-critères à court terme) :** **échec complet** — aucune différence sur la classe NYHA, le test de marche de 6 minutes ou le NT-proBNP.

**Résultats à 2 ans :**

| Critère à 2 ans | CoQ10 (n = 202) | Placebo (n = 218) | Résultat |
|---|---|---|---|
| **Événements cardiovasculaires majeurs (MACE, critère principal)** | 30 (15 %) | 57 (26 %) | HR 0,50 (IC 95 % 0,32–0,80), p = 0,003 |
| **Mortalité cardiovasculaire (secondaire non ajusté)** | 18 (9 %) | 34 (16 %) | HR 0,51 (IC 95 % 0,28–0,92), p = 0,026 |
| **Mortalité toutes causes (secondaire non ajusté)** | 21 (10 %) | 39 (18 %) | HR 0,51 (IC 95 % 0,30–0,89), p = 0,018 |
| **Hospitalisations pour IC (secondaire non ajusté)** | 17 (8 %) | 31 (14 %) | HR 0,51 (IC 95 % 0,27–0,95), p = 0,033 |

*Définition des MACE :* hospitalisation non programmée pour aggravation d'IC, décès cardiovasculaire, assistance circulatoire mécanique (LVAD) ou transplantation urgente.

- **Petit nombre d'événements et marge fragile :** l'ensemble repose sur **87 MACE et 60 décès**. En réintégrant les 2 admissions précoces et en classant les 4 perdus de vue sous CoQ10 comme décédés, le HR des MACE remonte à **0,64** (IC 95 % **0,42–0,98**, p = 0,038).
- **Aucun effet sur l'échographie ni le NT-proBNP :** à 2 ans, les mesures échocardiographiques et le NT-proBNP ne différaient pas ; davantage de survivants sous CoQ10 ont amélioré leur classe NYHA (58 % contre 45 %, p = 0,028 ; effectifs mesurés ~148 contre 151).
- **Aucun sous-groupe ischémique propre :** le groupe « hors cardiomyopathie dilatée » (n = 303, majoritairement ischémique + valvulopathies) avait un **HR de 0,60** (0,34–1,05, non significatif), contre **0,28** dans la cardiomyopathie dilatée ; l'effet semblait aussi limité aux FEVG ≥ 30 % (HR 0,36) contre FEVG < 30 % (HR 0,83, p d'interaction = 0,065).

**Sous-groupe européen post hoc (Mortensen AL et al., *Cardiol J* 2019, texte intégral) :**
- Chez les **231 patients européens** (108 CoQ10 contre 123 placebo ; financé par l'International CoQ10 Association ; bêtabloquant 88 %, ARM 54 %, toujours **0 % d'ARNI/iSGLT2** et 3 % de DAI/CRT), les MACE étaient de **10 (9 %) contre 33 (27 %)** (HR 0,23), les décès de **9 % contre 20 %** (HR 0,37) et la FEVG montait de +6 points chez les survivants évalués.
- **Réserves majeures :** la pression systolique initiale était plus haute dans le bras CoQ10 (127 contre 121 mmHg, p = 0,03 — or une tension plus basse prédit un moins bon pronostic dans l'ICFER), aucun test d'interaction régionale n'est rapporté, et **en soustrayant l'Europe du total global, les 189 patients non européens n'ont pratiquement aucun effet (20 contre 24 MACE, soit 21 % contre 25 %)**. Le tableau 5 de l'article 2019 imprime en outre 56 % d'ARM pour la cohorte globale, en contradiction avec les 34 % du tableau 1 de 2014.`,
    },
    {
      headingFr: 'Autres essais pré-modernes et audit des méta-analyses',
      bodyMarkdownFr: `**Autres essais anciens :**
- **Morisco et al. (1993, n = 641, Italie, résumé) :** essai de 1 an (2 mg/kg/j) avant les bêtabloquants et les ARM : moins d'hospitalisations pour IC (**73 contre 118**, p < 0,001), sans différence significative de mortalité (5 % contre 6,5 %). Risque de biais incertain/élevé ; avec Q-SYMBIO, il constitue 100 % du pool « hospitalisations » de Cochrane 2021.
- **Khatta et al. (2000, n = 55 randomisés / 46 complets, États-Unis, résumé) :** 200 mg/j pendant 6 mois dans l'ICFER (FEVG < 40 %) ; malgré un doublement de la CoQ10 sanguine (0,95 à 2,2 µg/mL), **aucun changement** de la FEVG isotopique, du pic VO₂ ni de la durée d'effort.

**Analyses groupées — pourquoi elles paraissent plus solides qu'elles ne le sont :**

| Revue / méta-analyse | Essais inclus | Mortalité toutes causes (IC 95 %) | Hospitalisations IC (IC 95 %) | Constats de l'audit critique |
|---|---|---|---|---|
| **Cochrane 2021** (Al Saadi, CD008684, résumé) | 11 ECR (1 573 pts), tous à risque de biais incertain/élevé | **RR 0,58 (0,35–0,95)** — **1 seul essai** (Q-SYMBIO, n = 420) | **RR 0,62 (0,49–0,78)** — **2 essais** (Q-SYMBIO + Morisco 1993) | FEVG +1,77 % (très faible certitude). Les auteurs concluent qu'il n'y a **« aucune preuve convaincante pour soutenir ou réfuter »** la CoQ10 |
| **NIHR HTA 2022** (Claxton, Royaume-Uni, indépendant) | 26 ECR (2 250 pts, hors ICFEP seule) | **RR 0,68 (0,45–1,03)** — 7 essais, n = 1 371 (**non significatif**) | Non regroupé en chiffre principal | Évaluation publique excluant les études hors IC ; aucune interaction avec les statines ; déconseille l'adoption par le NHS avant un nouvel essai (à l'origine de CORAL) |
| **Lei & Liu 2017** -> repris par **Khan 2021** et **An 2022** | 14 ECR ; mortalité 7 essais (n = 1 827) | RR 0,69 (0,50–0,95) / 0,68 (0,49–0,94) | Non regroupé | **Pool contaminé :** Lei 2017 incluait **KISEL-10 (Alehagen 2015 : 443 personnes âgées suédoises saines sous CoQ10 + sélénium, sans IC)** et un essai pédiatrique (Kocharian 2009). **Khan 2021 confirme que la significativité disparaît sans Q-SYMBIO**, sans gain de FEVG (+1,24 %) ni de NYHA |
| **Xu et al. 2024** (texte intégral) | 32 ECR dans le texte (33 dans le résumé) | RR 0,64 (0,48–0,85) (effet fixe) | RR 0,50 (0,37–0,67) (3 essais) | **20 essais sur 32 ouverts sans placebo** (majoritairement 30 mg/j en Chine), seulement 3/32 avec secret d'attribution, doublon potentiel (Pei 2010 / Zhao 2015) |
| **Mohammed et al. 2026** (texte intégral) | 31 études sur **6 classes mitochondriales** | RR 0,62 (0,47–0,82) (classes mélangées) | RR 0,60 (0,42–0,85) | **Compte Q-SYMBIO deux fois** (2014 + 2019), inclut des enfants ; certitude GRADE faible |
| **Rahman et al. 2026** (**ICFEP uniquement**) | 3 ECR (264 pts, FEVG ≥ 50 %) | 2/101 contre 0/105 (très faible) | 1/19 contre 0/20 (très faible) | Preuves insuffisantes dans l'ICFEP |

Une revue antérieure (**Rosenfeldt 2003**, citée par Jafari 2018) estimait déjà qu'un essai correctement dimensionné sur la mortalité requerrait **au moins 4 000 patients**.`,
    },
    {
      headingFr: 'Statines, myalgies et comparaison ubiquinol contre ubiquinone',
      bodyMarkdownFr: `**Statines et déplétion en CoQ10 :**
- Les statines abaissent la CoQ10 circulante via la voie du mévalonate (**Banach 2015** : **-0,44 µmol/L**).
- **Dans l'ICFER ischémique, cette baisse n'est pas nocive (sous-étude CORONA, McMurray 2010, n = 1 191) :** un taux initial bas de CoQ10 accompagnait un âge plus élevé et une IC plus sévère mais **n'était pas un facteur pronostique indépendant** en analyse multivariée, et la baisse provoquée par la rosuvastatine (*Crestor*) **n'a pas aggravé les événements**, même chez les patients partant du taux le plus bas. Ni Q-SYMBIO ni NIHR HTA 2022 n'ont trouvé d'effet supérieur chez les utilisateurs de statines.
- **Douleurs musculaires sous statines :** dans le seul essai confirmant d'abord une myalgie vraie par croisement en aveugle (**Taylor 2015**, NIH, 600 mg/j d'ubiquinol), la CoQ10 sanguine a quadruplé sans diminuer la douleur (p = 0,53) ni affecter la baisse du LDL sous simvastatine. Deux méta-analyses (**Banach 2015** ; **Kennedy 2020**, poursuite de la statine RR 0,99) sont neutres (contre une méta-analyse non enregistrée très hétérogène, **Qu 2018**, I² = 89,6 %). La CoQ10 n'est donc pas démontrée contre les myalgies aux statines.

**Ubiquinol contre ubiquinone et qualité des compléments :**
- **La formulation lipidique compte plus que l'étiquette « ubiquinol » :** dans une étude croisée en double aveugle comparant 7 produits (**Lopez-Lluch 2019**, n = 14), l'absorption variait surtout selon les **lipides porteurs et la solubilisation des cristaux** (les deux produits les mieux absorbés étaient des capsules huileuses d'ubiquinone et d'ubiquinol). L'ubiquinol s'oxyde dans le tube digestif et les deux formes s'interconvertissent dans les entérocytes.
- **Forme testée dans les essais :** **zéro essai randomisé d'ubiquinol** n'a démontré de baisse de mortalité cardiovasculaire (**Fladerer 2023**). Q-SYMBIO, CORAL, DANUTRIO-HF et SELEQT-HF utilisent tous de l'**ubiquinone** de qualité pharmaceutique. Sur le marché libre (comprimés, gélules, gommes), la qualité, la dispersion et la teneur réelle varient fortement (**An 2022** ; **Wang 2026**), pour un coût élevé.`,
    },
    {
      headingFr: 'Tolérance, interactions médicamenteuses et recommandations',
      bodyMarkdownFr: `- **Tolérance générale :** comparable au placebo (Cochrane 2021 RR 0,70 ; Q-SYMBIO 13 % contre 19 %, non significatif), avec parfois de légers troubles digestifs, céphalées, vertiges ou éruptions cutanées.
- **Warfarine (*Coumadine*) et autres antivitamines K (acénocoumarol — *Sintrom*, fluindione — *Previscan*) — INTERACTION CLÉ :** par analogie structurale avec la vitamine K, des cas cliniques (**Spigset 1994** ; **Landbo et Almdal 1998**) rapportent des baisses importantes d'INR (risque de thrombose) réversibles à l'arrêt. Un petit essai croisé (**Engelsen 2002/2003**, 21 complets) a montré un INR stable, mais seulement à **100 mg/j pendant 4 semaines** (un tiers de la dose IC). **CORAL et DANUTRIO-HF excluent tous deux explicitement les patients sous warfarine ou AVK.** Ne débutez et n'arrêtez jamais la CoQ10 sans l'avis de votre cardiologue ou de votre pharmacien et contrôle rapproché de l'INR si vous prenez un AVK.
- **Pression artérielle :** les méta-analyses retrouvent une baisse modeste de la pression systolique (**Zhao 2022** : **-4,77 mmHg**, certitude GRADE modérée ; **An 2022** : **-3,55 mmHg**). L'AHA (2022/2023) met en garde contre un risque d'hypotension additive, à surveiller si votre tension est déjà basse sous quadrithérapie.
- **AOD, antiagrégants, potassium, statines, digoxine :** les anticoagulants oraux directs (apixaban, rivaroxaban, édoxaban, dabigatran) ne dépendent pas de la vitamine K et ne sont pas exclus de CORAL ni de DANUTRIO-HF (sans essai pharmacocinétique humain dédié). Aucun signal sur le potassium, la digoxine ou les statines n'est documenté. Signalez tout complément à votre équipe et à votre pharmacien.
- **Recommandations internationales :** **ESC 2026** et **NICE NG106** ne mentionnent pas la CoQ10 ; **AHA/ACC/HFSA 2022** classe les vitamines et compléments sans carence en **Classe 3 : Absence de bénéfice (niveau B-R)** ; la déclaration **AHA 2022/2023** juge la CoQ10 non prouvée.`,
    },
    {
      headingFr: 'Trois grands essais européens en cours (registres au 25 novembre 2026)',
      bodyMarkdownFr: `Les vérifications sur les registres primaires au 25 novembre 2026 confirment trois essais européens randomisés en cours (aucun résultat publié) :

| Essai (registre) | Population et effectif | Intervention | Critère principal | Calendrier (au 25 nov. 2026) | Ce qu'il clarifiera |
|---|---|---|---|---|---|
| **CORAL** (Royaume-Uni, *ISRCTN26946710*, NIHR HTA) | **ICFER / dysfonction systolique VG**, NYHA ≥ II ; 950 à 1 025 patients ; **exclut la warfarine** | *Myoqinon* (ubiquinone Pharma Nord) 100 mg × 3/j (300 mg/j) contre placebo pendant 12 mois | **Score de qualité de vie KCCQ à 12 mois** (mortalité et hospitalisations en secondaires à 12 mois et 5 ans) | Recrutement fév. 2025 – nov. 2026 ; fin globale **mai 2028** | Effet sur les **symptômes et la qualité de vie** (non dimensionné pour trancher la survie) |
| **DANUTRIO-HF** (Danemark, *NCT06694727*) | IC toutes FEVG sous inhibiteur du SRAA + bêtabloquant ; **N = 4 044 estimés** ; **exclut les AVK** | Factoriel 2×2 : **CoQ10 100 mg × 2/j (200 mg/j)** et/ou sélénium 100 µg × 2/j contre placebo | **1re hospitalisation pour IC ou décès cardiovasculaire** (~33 mois) | Recrutement depuis sept. 2025 ; fin primaire estimée **déc. 2028** | **Premier essai moderne de puissance adéquate** sur les événements cliniques de la CoQ10 seule |
| **SELEQT-HF** (Pays-Bas, *NCT07234422*) | IC chronique toutes FEVG, NYHA II–IV, NT-proBNP élevé ; **N = 1 100 estimés** | Association **sélénium 200 µg/j + CoQ10 200 mg/j** (*Bio-Quinon*) contre placebo | **Hospitalisations IC récurrentes, visites urgentes IC et décès CV** (~30 mois) | Recrutement depuis mai 2026 ; fin primaire estimée **déc. 2030** | Effet combiné CoQ10 + sélénium (sans isoler la CoQ10 seule) |

Dans l'attente de **CORAL** et surtout de **DANUTRIO-HF**, le verdict reste inchangé : **possible, priorité faible à discuter avec votre équipe de cardiologie — non prouvée pour la survie ou les hospitalisations sous traitement moderne, à éviter en automédication sous AVK, et jamais à la place des médicaments prescrits**.`,
    },
  ],
  relatedArticleSlugs: [
    'these-coq10-mortalite-icfer-moderne',
    'essais-cliniques-en-cours-et-a-suivre',
    'nutrition-et-complements-insuffisance-cardiaque',
    'omega-3-huile-de-poisson',
    'vitamine-d-insuffisance-cardiaque',
    'vitamines-b-insuffisance-cardiaque',
    'complements-energetiques-cardiaques',
    'tableau-preuves-nutrition-complements',
    'interactions-complements-aliments-medicaments',
    'cholesterol-et-prevention-secondaire',
    'medicaments-insuffisance-cardiaque',
  ],
  sources: [
    {
      label: 'Q-SYMBIO (Mortensen 2014, texte intégral), Q-SYMBIO Europe (Mortensen AL 2019, texte intégral) et éditorial Ezekowitz (2014)',
      detail: '420 patients (87 MACE, 0 % ARNI/iSGLT2, arrêt précoce, financement Pharma Nord), sous-groupe européen post hoc et quasi-nullité hors Europe.',
    },
    {
      label: 'NIHR HTA 2022 (Claxton et al.) et Cochrane 2021 (Al Saadi et al., CD008684)',
      detail: 'Mortalité non significative sur 7 essais ICFER (RR 0,68 ; 0,45–1,03) dans NIHR HTA ; 1 essai mortalité et 2 essais hospitalisations dans Cochrane.',
    },
    {
      label: 'Audit des méta-analyses : Lei & Liu 2017, Khan 2021, An 2022, Xu 2024, Mohammed 2026, Jafari 2018 et Rahman 2026',
      detail: 'Contamination KISEL-10 (sujets âgés sains), essais ouverts chinois, double comptage de Q-SYMBIO et données ICFEP.',
    },
    {
      label: 'Morisco (1993), Khatta (2000), CORONA (McMurray 2010), essais myalgies statines (Taylor 2015, Banach 2015, Kennedy 2020) et biodisponibilité (Lopez-Lluch 2019, Fladerer 2023)',
      detail: 'Essais pré-modernes, réfutation du rôle délétère de la déplétion en CoQ10 sous statines dans CORONA et comparaison ubiquinol vs ubiquinone.',
    },
    {
      label: 'Registres primaires au 25 nov. 2026 (CORAL ISRCTN26946710, DANUTRIO-HF NCT06694727, SELEQT-HF NCT07234422) et sécurité (Spigset 1994, Landbo 1998, Engelsen 2002, Zhao 2022, ESC 2026, AHA 2022)',
      detail: 'Essais européens en cours, exclusion de la warfarine/AVK, baisse de PAS et absence de recommandation internationale.',
    },
  ],
  disclaimerType: 'medical',
};
