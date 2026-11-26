import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'escalade-et-resistance-aux-diuretiques',
  sourceWikiPath: 'wiki/concepts/diuretic-escalation-and-resistance.md',
  titleFr: 'Escalade et résistance aux diurétiques dans l’insuffisance cardiaque',
  category: 'traitements',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'diurétiques-de-lanse',
    'résistance-aux-diurétiques',
    'décongestion',
    'torasémide',
    'furosémide',
    'acétazolamide',
    'thiazidique',
    'métolazone',
    'transform-hf',
    'advor',
    'clorotic',
  ],
  aliases: [
    'Résistance aux diurétiques',
    'Escalade diurétique',
    'Blocage séquentiel du néphron',
    'Association de diurétiques',
    'Torasémide vs furosémide',
    'Bumétanide',
    'Burinex',
    'Lasilix',
    'Métolazone',
    'Acétazolamide',
    'Plan diurétique de secours',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Les diurétiques (« médicaments pour éliminer l'eau ») aident vos reins à évacuer le sel et l'eau en excès. Parfois, la dose habituelle ne suffit plus et la rétention d'eau revient : le poids augmente, les chevilles gonflent, le souffle raccourcit. Les équipes médicales procèdent alors par paliers : augmenter la dose, administrer le diurétique par voie intraveineuse (ou utiliser une molécule mieux absorbée), puis ajouter temporairement un second diurétique agissant sur un autre segment du rein (« blocage séquentiel du néphron »). Les grands essais récents montrent que ces stratégies évacuent le liquide plus vite à l'hôpital, mais aucune n'a encore démontré de baisse de la mortalité ou des réhospitalisations, et les associations plus puissantes provoquent davantage de baisse du potassium et de variations rénales nécessitant des bilans rapprochés. Par ailleurs, remplacer le furosémide (Lasilix) par le torasémide n'a pas modifié la survie dans TRANSFORM-HF. La quasi-totalité des preuves provient de patients hospitalisés : cet article explique la démarche médicale et ne constitue pas un guide d'auto-adaptation.",
  sections: [
    {
      headingFr: 'Synthèse rapide et mécanismes de la résistance aux diurétiques',
      bodyMarkdownFr: `Cet article aborde le versant opposé à la réduction ou à l'arrêt encadré des diurétiques, présenté dans *Les médicaments de l'insuffisance cardiaque (4 piliers)*.

| Question | Ce que montrent les preuves | Applicabilité à une ICFER ischémique stable (FEVG ~35 %) |
|---|---|---|
| **Torasémide au lieu du furosémide ?** | Mortalité identique (**TRANSFORM-HF**, HR 1,02), y compris en ICFER ; qualité de vie identique. ESC 2026 : aucune preuve de supériorité d'un diurétique de l'anse | **Partielle** : patients sortant d'hospitalisation, 32 % ischémiques, ~8 % sous iSGLT2 |
| **Ajouter de l'acétazolamide IV à l'hôpital ?** | Plus de patients décongestionnés à J3 (**42 % vs 31 %**) ; décès/réhospitalisation inchangés (**HR 1,07**, données issues du résumé). Par voie orale sous iSGLT2 (**ORION-A**) : aucun effet ajouté | **Indirecte** : patients hospitalisés uniquement ; ADVOR excluait les iSGLT2 |
| **Ajouter un thiazidique (HCTZ, métolazone) à l'hôpital ?** | Perte de poids supérieure (**-2,3 vs -1,5 kg** à 72 h), pas d'amélioration de la dyspnée ; hypokaliémie et hausse de créatinine plus que doublées ; survie inchangée (**CLOROTIC**) | **Indirecte** : hospitalisés, âge médian 83 ans, majorité à FEVG préservée |
| **Guider les doses par le sodium urinaire ?** | Plus de sel éliminé au début ; pas moins de décès ni de réhospitalisations (PUSH-AHF) | **Indirecte** : patients hospitalisés |
| **Escalade ambulatoire plutôt qu'hospitalisation ?** | Données observationnelles rassurantes ; les deux petits essais randomisés n'ont montré aucune différence | **Indirecte**, faible certitude |
| **Plan « de secours » d'auto-ajustement par le patient ?** | Plan écrit conseillé par une revue ; ESC 2026 ne décrit que l'escalade pilotée par le clinicien ; aucun essai pronostique trouvé | **Non évaluable** |

### Pourquoi la dose habituelle peut moins agir (Ellison & Felker, NEJM 2017)

Les diurétiques de l'anse — **furosémide (*Lasilix*)**, **bumétanide (*Burinex*)**, **torasémide** — ont un effet « seuil » et un plafond : sous un certain taux sanguin, ils agissent très peu. Plusieurs mécanismes expliquent une perte de réponse :
- **Absorption digestive :** le furosémide oral a une biodisponibilité imprévisible (environ **50 %** en moyenne, de **10 à 90 %**), encore ralentie par l'œdème de la paroi intestinale ; le bumétanide et le torasémide sont absorbés à plus de **90 %**.
- **Action courte et rebond :** chaque prise agit quelques heures, puis le rein retient le sodium (« rétention sodée post-diurétique »), d'autant plus que les apports en sel sont élevés.
- **Freinage (« braking ») :** à mesure que le liquide diminue, les hormones de rétention sodée s'activent et réduisent l'effet de chaque dose.
- **Adaptation du rein :** au long cours, la partie distale du tubule rénal s'hypertrophie et réabsorbe davantage de sel — d'où l'intérêt ponctuel d'un thiazidique qui bloque ce segment.
- **Facteurs associés :** baisse des protéines sanguines, maladie rénale chronique et **anti-inflammatoires non stéroïdiens (AINS)**, qui bloquent l'action des diurétiques de l'anse.

La **résistance aux diurétiques** se caractérise par la persistance de la congestion avec un sodium urinaire bas malgré des doses maximales recommandées ; l'**ESC 2026** la classe parmi les signaux d'alerte d'insuffisance cardiaque avancée (voir *Insuffisance cardiaque avancée (stade D) et quand orienter*).

- **Équivalences approximatives (moyennes de population, Ellison 2017) :** **furosémide 40 mg ≈ bumétanide 1 mg ≈ torasémide 20 mg**. Le furosémide IV est environ deux fois plus puissant par milligramme que par voie orale à fonction rénale normale. Demi-vies dans l'IC : torasémide ~**6 h**, furosémide **2,7 h**, bumétanide **1,3 h**. *(Dans TRANSFORM-HF, le guide proposait un ratio plus large de 1:2 à 1:4 et l'analyse par FEVG a suggéré qu'un ratio 1:2 pouvait surdoser le torasémide.)*`,
    },
    {
      headingFr: 'Choix du diurétique de l’anse : l’essai TRANSFORM-HF',
      bodyMarkdownFr: `Parce que le torasémide est mieux absorbé et agit plus longtemps que le furosémide, de petites études anciennes avaient suggéré un avantage clinique. L'essai **TRANSFORM-HF** (*JAMA*, 2023) l'a vérifié à grande échelle :

- **Protocole :** **2 859 patients** hospitalisés pour insuffisance cardiaque dans 60 hôpitaux américains, randomisés en ouvert avant la sortie entre une stratégie **torasémide** et une stratégie **furosémide**, posologie choisie par les médecins.
- **Résultat principal :** sur un suivi médian de **17,4 mois**, la mortalité toutes causes était strictement identique : **26,1 % contre 26,2 %** (**HR 1,02**, IC 95 % 0,89–1,18). Les décès ou hospitalisations à 12 mois (**HR 0,92**, IC 0,83–1,02) et les hospitalisations totales (ratio **0,94**) ne différaient pas non plus.
- **Sous-groupe ICFER (FEVG ≤ 40 %, 69,7 % des patients avec FEVG connue ; Kapelios 2024) :** mortalité à 12 mois **HR 1,02** (0,82–1,28), décès ou hospitalisation **HR 0,94** (0,82–1,07), sans interaction selon la FEVG. La qualité de vie (score KCCQ) s'est améliorée de façon identique.
- **Limites :** recrutement arrêté à environ la moitié des 6 000 patients prévus (le nombre de décès requis ayant été atteint), croisements à la sortie (7,0 % depuis le torasémide, 3,8 % depuis le furosémide), 9,5 % sans diurétique à 6 mois et seulement ~6 à 8 % sous iSGLT2. Une analyse post hoc en risques compétitifs a suggéré un peu moins d'hospitalisations sous torasémide (**HR 0,88**, IC 0,78–0,99), mais elle n'était pas planifiée et reste purement exploratoire.
- **Conclusion pratique :** l'essai est formellement **neutre**, et l'**ESC 2026** indique qu'il n'existe aucune preuve qu'un diurétique de l'anse soit supérieur à un autre. Les différences d'absorption restent un critère pharmacologique pour le clinicien, non un bénéfice pronostique démontré.`,
    },
    {
      headingFr: 'L’escalade à l’hôpital : recommandations ESC 2026 et grands essais',
      bodyMarkdownFr: `### Recommandations ESC 2026 sur la décongestion (sections 6.1.3.1, 7.5.3–7.5.4 et Figure 15)

| Recommandation (ESC 2026, résumée) | Classe | Niveau | Contexte |
|---|---|---|---|
| Ajustement dynamique et individualisé de la dose de diurétique de l'anse selon la volémie | **I** | **A** | IC chronique |
| « L'usage chronique de diurétiques thiazidiques chez les patients stables doit être évité » | *(texte narratif)* | — | IC chronique |
| Diurétiques de l'anse **IV** chez tous les patients hospitalisés en surcharge hydrique | **I** | **A** | Hôpital |
| Ajout court d'**acétazolamide IV** ou d'**hydrochlorothiazide oral** chez les patients hospitalisés en surcharge déjà sous diurétique de l'anse | **IIa** | **B1** | Hôpital (révisée) |
| Traitement diurétique **guidé par le sodium urinaire** les premiers jours | **IIb** | **B1** | Hôpital (nouvelle) |
| Ultrafiltration en cas de surcharge réfractaire | **IIb** | **C** | IC avancée |

L'algorithme hospitalier (Figure 15) évalue la réponse à **2 heures** (sodium urinaire sur échantillon **≥ 70 mmol/L**) ou à **6 heures** (diurèse **≥ 100 mL/h**). Si la réponse est insuffisante, la dose IV est doublée ou un second diurétique (acétazolamide 500 mg IV/j ou hydrochlorothiazide 25–100 mg selon la fonction rénale, l'acétazolamide pouvant être privilégié en MRC plus avancée) est ajouté, avec contrôle de la créatinine et des électrolytes au moins toutes les **24 heures**. Le texte rappelle que de petites hausses transitoires de créatinine pendant la déplétion ne sont pas associées à un mauvais pronostic si la décongestion est obtenue, que ni le guidage par natriurèse ni les diurétiques adjuvants n'ont démontré de baisse de la mortalité ou des réhospitalisations, et que les **iSGLT2** (initiés à l'hôpital dès stabilisation, **Classe I B1**) et les ARM facilitent la décongestion.

### Acétazolamide (ADVOR et ORION-A)

- **ADVOR (NEJM, 2022 ; 519 patients dans 30 hôpitaux belges, double aveugle) :** acétazolamide **500 mg IV/jour** ajouté au diurétique de l'anse IV. **Décongestion complète à J3 : 42,2 % contre 30,5 %** (**RR 1,46**, IC 1,17–1,82) ; séjour raccourci d'environ 1 jour (**8,8 contre 9,9 jours**). **Décès ou réhospitalisation pour IC à 3 mois : 29,7 % contre 27,8 % (HR 1,07, IC 0,78–1,48)** — critère secondaire sans bénéfice. FEVG moyenne 43 %, 45 % ischémiques ; **les patients sous iSGLT2 étaient exclus**. Une hausse de créatinine ≥ 0,3 mg/dL (~27 µmol/L) était plus fréquente (**40,5 % contre 18,9 %**) sans différence rénale à 3 mois *(chiffres issus du résumé et des articles compagnons, provisoires)*.
- **ORION-A (JCM, 2025 ; 416 patients, ouvert) :** acétazolamide **oral** (250 mg × 3/j pendant 3 jours) dans une population où ~**75 % prenaient un iSGLT2**. **Décongestion à 72 h identique (39,6 % contre 39,7 %)**, sans gain sur la mortalité ou la durée de séjour (avec plusieurs incohérences internes relevées dans l'article).

### Ajout d'un thiazidique (CLOROTIC, 3T et sécurité de la métolazone)

- **CLOROTIC (EHJ, 2023 ; 230 patients en Espagne, double aveugle, arrêté tôt pour recrutement lent) :** hydrochlorothiazide oral (25–100 mg selon rein) contre placebo sur furosémide IV. **Perte de poids à 72 h supérieure (-2,3 contre -1,5 kg**, écart ajusté -1,14 kg), mais **aucune amélioration de la dyspnée** (autre co-critère principal). Effets indésirables marqués : **aggravation rénale 46,5 % contre 17,2 %**, **potassium ≤ 3,5 mmol/L : 44,7 % contre 19,0 %** (un ARM déjà présent réduisait de moitié le risque d'hypokaliémie en analyse post hoc, **OR 0,42**). Aucune différence de décès ou réhospitalisations à 90 jours. Âge médian **83 ans**, FEVG médiane **~55 %**.
- **3T (JACC HF, 2020 ; 60 patients résistants, FEVG moyenne 30 %) :** perte de poids à 48 h comparable entre métolazone orale (**4,6 kg**), chlorothiazide IV (**5,8 kg**) et tolvaptan (**4,1 kg** ; essai sous-dimensionné, financé par le fabricant du tolvaptan). Hyponatrémie surtout sous chlorothiazide (**45 %**) ; deux arrêts pour hypotension sous métolazone.
- **Métolazone en vie réelle (Brisco-Bacik, 2018 ; 13 898 hospitalisations) :** association initiale avec la mortalité (**HR ajusté ~1,2**) qui disparaissait après ajustement sur l'hyponatrémie (**28,0 % vs 12,3 %**), l'hypokaliémie (**15,7 % vs 6,6 %**) et la baisse rénale, soulignant l'importance de surveiller les électrolytes. Les fortes doses de diurétique de l'anse seules n'étaient pas associées à la mortalité après ajustement.
- **Guidage par le sodium urinaire (PUSH-AHF, via Paraskevaidis 2026) :** augmente l'élimination précoce de sel et d'eau sans surcroît rénal, sans réduire décès ni réhospitalisations à 180 jours (**ESC 2026 : IIb B1**).`,
    },
    {
      headingFr: 'Escalade en ambulatoire et plans d’action écrits',
      bodyMarkdownFr: `### Escalade encadrée hors hospitalisation

- **Position ESC 2026 (section 7.5.4, descriptive et non gradée) :** chez un patient ambulatoire dont l'état se congestionne, l'équipe peut envisager soit une **intensification orale** (instauration ou hausse du diurétique de l'anse, ou ajout **temporaire** d'un diurétique d'une autre classe, comme la métolazone 2,5 à 5 mg en IC avancée ou DFGe < 30 avec suivi biologique étroit), soit des **perfusions IV en hôpital de jour** (séances de 3 à 6 heures), voire de nouvelles formes sous-cutanées. Des épisodes répétés imposent une évaluation rapide en filière d'insuffisance cardiaque avancée.
- **Protocole d'hôpital de jour (Girerd et al., EJHF 2022) :** décrit des perfusions IV de 3 heures (souvent 2 à 3 séances la première semaine, parfois précédées d'un thiazidique oral), un contrôle médical idéalement dans les **48 à 72 heures** puis hebdomadaire sur un mois — basé sur des séries observationnelles, les auteurs soulignant le manque d'essais randomisés.
- **Ambulatoire contre hospitalisation (Bahar 2025) :** une méta-analyse de 29 études (9 730 patients) suggérait moins d'événements à 30 jours en ambulatoire, mais reposait surtout sur des études observationnelles incluant des patients moins graves ; les **2 petits essais randomisés (118 patients)** n'ont montré aucune différence.

### Plans écrits de « secours » : ce qui est établi et ce qui ne l'est pas

De nombreuses équipes d'insuffisance cardiaque remettent un **plan d'action écrit** en cas de reprise de liquide :
- une **fourchette de poids sec cible** et un seuil d'alerte (dans ce guide, une prise de poids de **plus de 2,0 kg en 3 jours** est le signal pour contacter votre équipe ; voir *Vivre au quotidien avec une insuffisance cardiaque*) ;
- les **signes de surcharge hydrique** (gonflement, essoufflement, prise de poids) et les **signes de déshydratation excessive** (vertiges, tension basse, créatinine en hausse) ;
- **qui appeler**, quand réaliser les bilans sanguins et quelle conduite suivre.

**Ce que la recherche n'a pas retrouvé :** aucun essai randomisé sur événements cliniques n'a validé l'auto-ajustement autonome des diurétiques par le patient, et la section 7.5.4 de l'**ESC 2026** ne décrit qu'une escalade pilotée par le clinicien. Toute adaptation de dose et tout protocole écrit doivent donc être **établis et validés par votre cardiologue ou votre équipe d'insuffisance cardiaque**, compte tenu des effets rapides sur le potassium, le sodium et la créatinine.`,
    },
    {
      headingFr: 'Questions fréquentes, applicabilité et limites des preuves',
      bodyMarkdownFr: `### Questions souvent posées en consultation

- **« Le torasémide serait-il meilleur que mon furosémide ? »** Dans le plus grand essai randomisé (TRANSFORM-HF), la survie et la qualité de vie étaient identiques. Des raisons pratiques (absorption intestinale, durée d'action) peuvent néanmoins guider votre cardiologue.
- **« Pourquoi un deuxième diurétique n'est-il prescrit que pour quelques jours ? »** L'ESC 2026 déconseille l'usage chronique de thiazidiques chez les patients stables, en raison du risque marqué d'hypokaliémie, d'hyponatrémie et de variation rénale observé dans CLOROTIC et les cohortes de métolazone.
- **« Pourquoi des prises de sang si rapprochées après un changement de dose ? »** Parce que les associations diurétiques modifient le potassium, le sodium et la créatinine en quelques jours.

### Synthèse de l'applicabilité et de l'intégrité des essais

| Essai / étude | Population étudiée | Applicabilité à l'ICFER ischémique stable (~35 %) | Limites méthodologiques |
|---|---|---|---|
| **TRANSFORM-HF** (+ analyse FEVG) | 2 859 post-hospitalisation ; 70 % FEVG ≤ 40 % ; 27–32 % ischémiques ; ~6–8 % iSGLT2 | **Partielle** | Ouvert, arrêté à ~50 % de l'effectif prévu, croisements ; formellement neutre ; signal hospitalisations post hoc |
| **ADVOR** | 519 hospitalisés ; FEVG moyenne 43 % ; 45 % ischémiques ; iSGLT2 exclus | **Indirecte** (hospitalisés) | Double aveugle ; positif sur critère intermédiaire uniquement ; texte intégral NEJM non lu (chiffres provisoires) |
| **ORION-A** | 416 hospitalisés ; FEVG médiane 40 % ; ~75 % iSGLT2 | **Indirecte** | Ouvert, critère intermédiaire, incohérences internes dans l'article |
| **CLOROTIC** | 230 hospitalisés ; âge médian 83 ans ; FEVG ~55 % | **Indirecte** | Double aveugle ; 1 co-critère atteint (poids), 1 non atteint (dyspnée) ; arrêté tôt ; déséquilibres entre bras |
| **3T** | 60 hospitalisés résistants ; FEVG moyenne 30 % | **Indirecte** | Très petit effectif sous-dimensionné ; financé par le fabricant du tolvaptan |
| **Brisco-Bacik 2018 & Bahar 2025** | Cohortes / méta-analyses majoritairement observationnelles | **Indirecte** | Biais de sélection et de confusion par indication |

Des essais évaluant l'escalade diurétique sous quadrithérapie moderne complète (incluant un iSGLT2), ainsi que des essais randomisés d'escalade ambulatoire encadrée, restent nécessaires.`,
    },
  ],
  relatedArticleSlugs: [
    'insuffisance-cardiaque-avancee-stade-d',
    'medicaments-insuffisance-cardiaque',
    'sel-et-liquides-insuffisance-cardiaque',
    'medicaments-effets-secondaires-suivi',
    'maladie-renale-insuffisance-cardiaque',
    'telesurveillance-insuffisance-cardiaque',
    'vivre-avec-insuffisance-cardiaque',
    'voyages-canicule-et-climat-ic',
    'goutte-bpco-thyroide-et-autres-comorbidites',
    'essais-cliniques-cles',
    'recommandations-comparees-esc-us-nice',
    'questions-equipe-cardiologie',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 (sections diurétiques 6.1.3.1, 7.5.3–7.5.4 et Figure 15) et NICE NG106 (2025)',
      detail: 'Ajustement dynamique (I A), acétazolamide/hydrochlorothiazide à l’hôpital (IIa B1), natriurèse (IIb B1), éviction des thiazidiques chroniques et escalade ambulatoire.',
    },
    {
      label: 'Ellison & Felker (NEJM, 2017, texte intégral) et Paraskevaidis et al. (2026, texte intégral)',
      detail: 'Pharmacologie des diurétiques de l’anse, équivalences posologiques, mécanismes de résistance, PUSH-AHF et plans écrits.',
    },
    {
      label: 'TRANSFORM-HF (JAMA, 2023) et analyse par FEVG (Kapelios, Circ HF 2024, textes intégraux)',
      detail: 'Comparaison torasémide vs furosémide sur la mortalité, les hospitalisations et la qualité de vie (KCCQ) dans l’ICFER.',
    },
    {
      label: 'ADVOR (NEJM, 2022), ORION-A (JCM, 2025), CLOROTIC (EHJ, 2023) et 3T (JACC HF, 2020)',
      detail: 'Blocage séquentiel du néphron par acétazolamide IV/oral, hydrochlorothiazide et métolazone : décongestion et effets électrolytiques/rénaux.',
    },
    {
      label: 'Brisco-Bacik et al. (JAHA, 2018), Girerd et al. (EJHF, 2022) et Bahar et al. (2025, textes intégraux)',
      detail: 'Sécurité de la métolazone en vie réelle, protocoles d’hôpital de jour pour diurétiques IV et méta-analyse ambulatoire vs hospitalisation.',
    },
  ],
  disclaimerType: 'medical',
};
