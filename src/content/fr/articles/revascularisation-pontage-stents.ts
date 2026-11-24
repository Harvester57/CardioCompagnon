import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'revascularisation-pontage-stents',
  sourceWikiPath: 'wiki/concepts/revascularisation-cabg-and-pci.md',
  titleFr: 'Revascularisation coronaire : pontage et stents',
  category: 'dispositifs',
  asOf: '2026-11-24',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'revascularisation',
    'pontage',
    'cabg',
    'angioplastie',
    'stents',
    'pci',
    'stich',
    'stiches',
    'revived-bcis2',
    'viabilité',
  ],
  aliases: [
    'Revascularisation',
    'Pontage aorto-coronarien',
    'Pontage coronarien',
    'CABG',
    'Angioplastie',
    'Stents',
    'PCI',
    'Viabilité myocardique',
    'Myocarde hibernant',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    'La revascularisation consiste à rétablir la circulation sanguine à travers des artères coronaires rétrécies ou obstruées, selon deux approches : le pontage aorto-coronarien (CABG), qui crée de nouveaux conduits contournant les obstacles, et l’angioplastie avec stents (PCI), qui ouvre le rétrécissement de l’intérieur de l’artère. Dans la cardiomyopathie ischémique avec cœur affaibli (FEVG ≤ 35 %), ces deux techniques ont des bilans scientifiques différents : le pontage a amélioré la survie à 10 ans dans un grand essai (STICH / STICHES), au prix d’un risque opératoire précoce réel ; les stents ajoutés à un traitement médical bien conduit n’ont pas réduit les décès ni les hospitalisations pour insuffisance cardiaque dans REVIVED-BCIS2, même en présence de muscle viable. Les deux techniques restent toutefois essentielles pour soulager une angine de poitrine (angor) persistante ou traiter un infarctus aigu.',
  sections: [
    {
      headingFr: 'Les deux essais clés : STICH / STICHES et REVIVED-BCIS2',
      bodyMarkdownFr: `| Critère | STICH / STICHES (pontage) | REVIVED-BCIS2 (stents) |
|---|---|---|
| Participants | 1 212 personnes, maladie coronaire accessible au pontage, **FEVG ≤ 35 %** | 700 personnes, maladie coronaire étendue accessible aux stents, **FEVG ≤ 35 %**, **viabilité myocardique prouvée par imagerie** |
| Comparaison | Pontage aorto-coronarien + médicaments vs médicaments seuls | Angioplastie (stents) + traitement optimal vs traitement optimal seul |
| Durée de suivi | Médiane **9,8 ans** | Médiane **41 mois** |
| Résultat principal | Mortalité toutes causes **58,9 % contre 66,1 %** (**HR 0,84**, IC 95 % : 0,73–0,97) | Décès ou hospitalisation pour IC **37,2 % contre 38,0 %** (**HR 0,99**, IC 95 % : 0,78–1,27) |
| Autres constats | Décès cardiovasculaire **40,5 % contre 49,3 %** ; décès ou hospitalisation CV **76,6 % contre 87,0 %** | Aucune différence de FEVG à 6 ou 12 mois ; gain précoce de qualité de vie avec stents disparu à 24 mois |
| Époque et âge | Inclusion 2002–2007 ; âge moyen ~60 ans | Publié en 2022 ; âge moyen ~70 ans |

**Comment lire les chiffres de STICH :** le gain de survie absolu était d’environ **7 points de pourcentage** sur une dizaine d’années. La majorité des patients sont décédés dans les *deux* groupes en 10 ans, ce qui reflète la gravité de la maladie à cette époque. Concrètement, le pontage a prolongé la vie d’une médiane d’environ **1,4 an**, et il fallait opérer environ **14 personnes** pour éviter un décès sur 10 ans.

**Attention aux comparaisons directes :** STICH et REVIVED-BCIS2 ne peuvent pas être mis en concurrence frontale, car ils diffèrent par l’époque, l’âge moyen, la qualité des médicaments de fond et l’anatomie coronaire, et aucun des deux n’a comparé directement le pontage aux stents.`,
    },
    {
      headingFr: 'Risque précoce et profil des patients bénéficiant le plus du pontage (STICH)',
      bodyMarkdownFr: `**Le risque initial est réel et le bénéfice n’apparaît qu’à moyen et long terme :**

- **30 premiers jours :** 22 patients sur 610 (**4 %**) dans le groupe pontage sont décédés, contre 7 sur 602 (**1 %**) sous médicaments seuls (risque environ trois fois supérieur).
- **Deux premières années :** la mortalité cumulée est restée plus élevée dans le groupe chirurgie pendant environ **2 ans** ; le bénéfice de survie ne s’est construit qu’ensuite.
- **À 5 ans (premier rapport STICH 2011) :** la différence de mortalité (**36 % contre 41 %**) n’était pas encore statistiquement nette ; elle l’est devenue à 10 ans.
- **Croisements de traitement (crossover) :** **17 %** des patients attribués aux médicaments seuls ont finalement eu un pontage (le plus souvent pour aggravation des symptômes, dans 40 % des cas), tandis que **91 %** du groupe chirurgie ont bien été opérés, ce qui atténue le contraste apparent.

**Résultats par tranche d’âge dans STICH (Petrie 2016) :**

| Tranche d’âge | Décès à 30 jours après l’opération | Nouvelle FA post-opératoire | Dégradation rénale | Recours à des médicaments de soutien cardiaque |
|---|---|---|---|---|
| 54 ans ou moins | **2 %** | 7 % | 1 % | 30 % |
| 55–60 ans | **4 %** | 16 % | 3 % | 35 % |
| 61–67 ans | **8 %** | 17 % | 9 % | 43 % |
| Plus de 67 ans | **5 %** | 26 % | 11 % | 48 % |

- La chirurgie a réduit les **décès cardiovasculaires** dans des proportions comparables quel que soit l’âge.
- La baisse de la **mortalité toutes causes** paraissait plus forte chez les plus jeunes (**HR 0,66** à 54 ans ou moins contre **0,82** au-delà de 67 ans), mais il ne s’agissait que d’une tendance.
- Le critère combiné associant décès et hospitalisation cardiovasculaire s’est davantage amélioré chez les plus jeunes.
- Très peu de participants avaient plus de 75 ans (**6 %**), laissant peu de données directes au grand âge.
- *Nuance de lecture :* les recommandations ESC 2024 sur les syndromes coronariens chroniques présentent l’avantage lié au jeune âge comme portant sur la mortalité globale, alors que dans l’article original de Petrie 2016 la différence statistiquement nette portait sur le critère combiné décès ou hospitalisation cardiovasculaire.

**Autres analyses de STICH :**

- **Les tests de viabilité n’ont pas permis d’identifier les répondeurs (Panza 2019) :** parmi 601 patients testés (81 % avec muscle viable), le bénéfice du pontage était similaire avec ou sans viabilité démontrée.
- **L’angor ne prédisait pas non plus le gain de survie (Jolicoeur 2015) :** le pontage améliorait la survie avec ou sans angine de poitrine, tout en soulageant plus souvent l’angor (**50 % contre 41 %**).
- **Atteinte tritronculaire (trois vaisseaux) :** bénéfice plus important qu’en cas d’atteinte mono- ou bitronculaire.`,
    },
    {
      headingFr: 'Risques, complications et détails de l’angioplastie dans REVIVED-BCIS2',
      bodyMarkdownFr: `- **Aucun sous-groupe n’a tiré bénéfice des stents :** sur l’ensemble des **18 sous-groupes** préspécifiés (âge, FEVG, étendue coronaire, diabète, symptômes, fibrillation atriale, tronc commun gauche, NT-proBNP, antécédent d’infarctus), tous les intervalles de confiance croisaient 1.
- **Infarctus du myocarde :** nombre total comparable (**10,7 % contre 10,8 %**). Les infarctus liés à la procédure ne sont survenus qu’avec les stents (14 sur 37), tandis que les infarctus spontanés étaient plus fréquents sans stents.
- **Saignements :** les saignements majeurs durant la première année étaient plus fréquents avec stents (**3,1 % contre 0,6 %**), en lien notamment avec une bithérapie antiagrégante plaquettaire plus répandue (**66 % contre 25 %** à 6 mois). À 2 ans, l’écart n’était plus significatif.
- **Moins de gestes non programmés :** une revascularisation non prévue a été nécessaire chez **2,9 %** des patients stentés contre **10,5 %** dans le groupe médical seul (1 contre 8 pontages et 9 contre 29 angioplasties).
- **Événements indésirables graves globaux :** identiques dans les deux bras (**29,4 % contre 29,5 %**).

**Déroulement et complications immédiates de la procédure (334 patients, 417 gestes — annexe de l’essai) :**

En médiane, **2 artères** ont été traitées par **3 stents** (97 % de stents actifs), avec succès sur au moins une sténose dans 98 % des cas.

| Complication procédurale | Part des procédures (nombre) |
|---|---|
| Assistance circulatoire mécanique | **3 %** (12) |
| Hypotension artérielle prolongée | **4 %** (18) |
| Tout saignement (dont majeur) | **4 %** (18), dont majeur environ **2 %** (8) |
| Complication au point de ponction nécessitant traitement | **6 %** (23) |
| Trouble du rythme grave nécessitant un choc électrique | **1 %** (4) |
| Arrêt cardiaque nécessitant une ventilation assistée | **1 %** (4) |
| Insuffisance rénale aiguë | environ **0,5 %** (2 ; 1 dialyse) |

L’annexe ne précise pas si l’assistance circulatoire était programmée ou posée en urgence, et ne détaille pas les décès per-procéduraux, AVC, perforations coronaires ou pontages en urgence. Notez que les deux chiffres de saignements mesurent deux réalités distinctes : ~2 % des gestes sur le moment contre 3,1 % des patients sur la première année.

**Autres précisions de l’annexe et de l’article publié :**

- **Revascularisation plus complète :** les patients dont au moins 80 % des lésions ont été traitées n’avaient pas d’avantage démontré (**HR 0,87** contre **1,02** en dessous de 80 % ; comparaison réalisée après randomisation, donc non causale).
- **Qualité de vie :** à 2 ans, les scores de limitation physique et de symptômes étaient identiques ; seul le sous-score KCCQ de qualité de vie gardait un léger écart en faveur des stents (**+4,2 points**, sans ajustement pour comparaisons multiples).
- **FEVG :** chez les survivants, la FEVG mesurée en laboratoire central d’ETT a augmenté de **31,8 % à 37,5 %** dans les **deux groupes** à 1 an (+6 points environ), soulignant l’effet du traitement médicamenteux.
- **Population :** 88 % d’hommes, 88 % de sujets blancs ; les patients ayant un **DFGe < 25 mL/min/1,73 m²** hors dialyse étaient exclus ; les iSGLT2 ne figurent pas dans les tableaux de traitements de fond de l’étude.
- **Thérapies de DAI :** chez les porteurs de DAI, les chocs ou stimulations appropriés à 2 ans étaient de **5,9 %** avec stents contre **14,0 %** sans (risque relatif **0,42**, IC 95 % : 0,17–1,06, non concluant), et une analyse dédiée n’a trouvé aucune baisse des arythmies graves (voir section Limites).`,
    },
    {
      headingFr: 'La question de la « viabilité myocardique »',
      bodyMarkdownFr: `L’hypothèse classique voulait que si une imagerie montre qu’un segment de muscle affaibli reste vivant (« myocarde hibernant »), rouvrir l’artère correspondante suffirait à le réveiller et à redresser la pompe cardiaque. Or **REVIVED-BCIS2 exigeait la preuve d’une viabilité** pour inclure les patients, sans qu’une amélioration de la FEVG ou du pronostic n’apparaisse sous stents.

À partir de ces résultats, les auteurs de REVIVED-BCIS2 proposent une séquence de prise en charge claire :

1. **traitement de fond médicamenteux** en priorité ;
2. **évaluation pour CRT ou DAI** selon l’évolution ;
3. **stents réservés principalement à l’angor** réfractaire ou aux syndromes coronariens aigus (infarctus).`,
    },
    {
      headingFr: 'Ce que recommandent les sociétés savantes (ESC, États-Unis, Royaume-Uni, Argentine)',
      bodyMarkdownFr: `### Recommandations ESC 2026 sur l’insuffisance cardiaque

- **Pour l’angine de poitrine :** revascularisation recommandée (**Classe I**) en cas d’angor persistant malgré le traitement de l’insuffisance cardiaque et les anti-angineux, quelle que soit la FEVG.
- **Pour la survie :** le **pontage aorto-coronarien (CABG)** doit être envisagé comme **stratégie privilégiée** si une revascularisation est décidée (**Classe IIa, niveau B1**) en cas de FEVG ≤ 35 % avec atteinte pluritronculaire accessible à la chirurgie.
- **Angioplastie (stents) :** décrite comme neutre sur le pronostic à long terme, sur la base de REVIVED-BCIS2.
- **Organisation :** le traitement médicamenteux doit être mis en place en premier, et toute décision est prise en **Heart Team** (réunion médico-chirurgicale) incluant un spécialiste de l’insuffisance cardiaque.
- **Divergence entre recommandations ESC :** les recommandations ESC 2024 sur les syndromes coronariens chroniques classent le pontage plus haut (**Classe I B**, ci-dessous) ; le groupe de travail IC 2026 attribue cet écart à des différences de populations cibles et de systèmes de cotation.
- **Imagerie coronaire :** coronarographie invasive recommandée en cas d’angor et de forte probabilité de sténoses chez un candidat à un geste ; coroscanner envisageable si la probabilité est plus faible.

### Recommandations ESC 2024 sur les syndromes coronariens chroniques (FEVG ≤ 35 %)

| Recommandation | Classe, niveau |
|---|---|
| Choisir entre revascularisation et traitement médical seul après discussion en **Heart Team** (anatomie, comorbidités, espérance de vie, préférences du patient) | **I C** |
| Pontage plutôt que traitement médical seul en atteinte pluritronculaire, si l’état permet la chirurgie, pour améliorer la survie à long terme | **I B** |
| Angioplastie (stents) comme alternative au pontage chez des patients sélectionnés à haut risque chirurgical ou inopérables | **IIb B** |
| Revascularisation pour soulager un angor persistant malgré les médicaments (quelle que soit la FEVG) | **I A** |
| Coronarographie dans l’IC avec FEVG ≤ 35 % et suspicion de maladie coronaire en vue d’un pontage | **I B** |
| Petite pompe d’assistance circulatoire pendant une angioplastie à haut risque dans un centre expérimenté | **IIb C** |
| DAI dans l’IC ischémique (NYHA II–III) avec FEVG ≤ 35 % après au moins 3 mois de traitement optimisé | **I A** |

Ce texte rappelle que le risque péri-opératoire est plus élevé à FEVG ≤ 35 % : dans une revue de 26 études observationnelles (FEVG moyenne ~25 %), environ **5 %** des patients sont décédés autour de la chirurgie de pontage.

### Autres repères internationaux et essais comparatifs en cours

- **États-Unis (AHA/ACC/HFSA 2022 et AHA/ACC 2023) :** le pontage associé aux médicaments est recommandé (**Classe 1, B-R**) chez des patients sélectionnés avec FEVG ≤ 35 % et atteinte du tronc commun ou pluritronculaire (bénéfice plus marqué à FEVG basse ou en atteinte tritronculaire, moindre au grand âge) ; les recommandations 2023 soulignent l’absence de bénéfice des stents dans REVIVED-BCIS2.
- **Royaume-Uni (NICE NG106) :** ne pas proposer de revascularisation systématique dans l’ICFER avec maladie coronaire (recommandation de 2018, antérieure à REVIVED-BCIS2 et non réexaminée lors de la mise à jour 2025).
- **Argentine (consensus SAC 2025) :** aligné sur le tableau ESC 2024 (Heart Team I C, pontage pluritronculaire I B, stents en alternative à haut risque chirurgical IIb B).
- **Essais comparant directement pontage et stents (en cours) :** aucun essai randomisé achevé n’a encore opposé CABG et PCI dans l’IC ischémique. Le consensus SAC 2025 cite deux essais en cours chez des patients avec dysfonction VG sévère et atteinte pluritronculaire : **STICH-SWEDEHEART** (Suède, ~470 patients, fin primaire attendue décembre 2028) et **STICH3C** (coordonné au Canada, 754 patients, fin de suivi attendue décembre 2029) — dates issues du consensus, non vérifiées sur les registres d’essais.`,
    },
    {
      headingFr: 'Cas particulier : une seule artère bouchée de longue date (CTO)',
      bodyMarkdownFr: `STICH et REVIVED-BCIS2 ont inclus des patients présentant une atteinte coronaire étendue, le plus souvent pluritronculaire. Une situation différente est celle d’une seule artère (souvent l’artère interventriculaire antérieure, IVA) complètement bouchée depuis des mois, dont le territoire est alimenté par des vaisseaux naturels de secours (**collatérales**). Les essais randomisés d’angioplastie de ces occlusions chroniques ont surtout inclus des patients avec angor et FEVG quasi normale : ils montrent un soulagement de l’angor, mais aucune baisse des décès ni des infarctus et aucun gain moyen de FEVG, sans essai randomisé dédié à FEVG ≤ 35 % ou sans angor. Voir l’article « Occlusion coronaire chronique (CTO) et collatérales ».`,
    },
    {
      headingFr: 'Limites des données disponibles',
      bodyMarkdownFr: `- **STICH date d’une autre ère thérapeutique :** son traitement de fond ne comportait ni ARNI ni iSGLT2, et peu de participants portaient un DAI. Les risques absolus dans les deux bras seraient probablement plus bas aujourd’hui.
- **Le bras « médicaments seuls » a nettement progressé :** en regroupant les données individuelles des deux essais (1 912 patients), les patients traités par médicaments seuls dans REVIVED-BCIS2 présentaient beaucoup moins de décès ou d’hospitalisations pour IC que ceux de STICH (**HR ajusté 0,60** ; analyse appariée par score de propension **HR 0,46**). Les comparaisons indirectes pontage vs stents issues de cette mise en commun restent strictement exploratoires.
- **Aucun effet des stents sur les troubles du rythme graves :** dans l’analyse rythmique de REVIVED-BCIS2, le critère décès ou mort subite récupérée était de **41,6 %** avec stents contre **40,2 %** sans (**HR 1,03**), avec un taux similaire de thérapies de DAI. Les auteurs déconseillent l’angioplastie dans le seul but de réduire le risque rythmique.
- **Périmètre ciblé de REVIVED-BCIS2 :** l’essai excluait les syndromes coronariens aigus récents et l’angor limitant, si bien que ses résultats ne s’appliquent pas à ces situations ; son design ouvert peut expliquer l’avantage transitoire de qualité de vie.
- **Qualité de lecture des sources :** les articles complets de STICH, STICHES, REVIVED-BCIS2 (et son annexe), ainsi que les sous-analyses d’âge, de viabilité et d’angor de STICH ont été exploités intégralement.`,
    },
  ],
  relatedArticleSlugs: [
    'comprendre-le-diagnostic',
    'cardiomyopathie-ischemique',
    'medicaments-insuffisance-cardiaque',
    'insuffisance-cardiaque-fevg-amelioree',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'examens-et-chiffres',
    'recommandations-comparees-esc-us-nice',
    'occlusion-coronaire-chronique-cto',
    'cholesterol-et-prevention-secondaire',
    'stenose-aortique-fevg-reduite',
    'gilet-defibrillateur-portable',
  ],
  sources: [
    {
      label: 'Essais STICH (2011), STICHES à 10 ans (2016) et sous-analyses (Petrie 2016, Panza 2019, Jolicoeur 2015)',
      detail: 'Survie à 10 ans après pontage, risque opératoire à 30 jours, impact de l’âge, de la viabilité et de l’angor',
    },
    {
      label: 'Essai REVIVED-BCIS2 (NEJM 2022, annexe supplémentaire et analyse rythmique Circulation 2023)',
      detail: 'Absence de bénéfice pronostique des stents malgré la viabilité, complications procédurales, sous-groupes et arythmies',
    },
    {
      label: 'Analyse poolée sur données individuelles REVIVED-BCIS2 / STICHES (2025)',
      detail: 'Amélioration du pronostic sous traitement médical moderne entre les deux époques',
    },
    {
      label: 'Recommandations ESC 2026 (insuffisance cardiaque, tableau 16) et ESC 2024 (syndromes coronariens chroniques, tableaux 22 et 24)',
      detail: 'Place du pontage, des stents, de la Heart Team et de la coronarographie à FEVG ≤ 35 %',
    },
    {
      label: 'Recommandations AHA/ACC/HFSA (2022), AHA/ACC (2023), NICE NG106 (2025) et consensus SAC (2025)',
      detail: 'Comparaisons internationales et essais en cours STICH-SWEDEHEART et STICH3C',
    },
  ],
  disclaimerType: 'medical',
};
