import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'these-fer-iv-et-isglt2-quadritherapie',
  sourceWikiPath: 'wiki/theses/iv-iron-on-modern-gdmt-with-sglt2i.md',
  titleFr: 'Thèse : fer intraveineux, iSGLT2 et quadrithérapie moderne dans l’ICFER',
  category: 'traitements',
  readingTier: 'reference',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'thèse',
    'carence-martiale',
    'fer-intraveineux',
    'carboxymaltose-ferrique',
    'dérisomaltose-ferrique',
    'isglt2',
    'quadrithérapie',
    'cst',
    'hypophosphatémie',
    'icfer',
  ],
  aliases: [
    'Fer IV avec inhibiteur du SGLT2',
    'Fer intraveineux sur quadrithérapie',
    'Le fer IV reste-t-il efficace sous iSGLT2',
    'Carboxymaltose ferrique contre dérisomaltose ferrique',
    'Ferinject contre Monofer',
    'Hypophosphatémie fer intraveineux',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Cette synthèse examine si le fer intraveineux reste utile lorsque vous prenez déjà les quatre traitements modernes de l'insuffisance cardiaque, dont un inhibiteur du SGLT2. Les études montrent moins d'hospitalisations en cas de vraie carence en fer, mais peu de patients recevaient ces nouveaux traitements. Consultez cette fiche pour mieux comprendre votre bilan martial et les différences entre produits avec votre cardiologue.",
  sections: [
    {
      headingFr: 'Question évaluée et part réelle de la quadrithérapie dans les grands essais',
      bodyMarkdownFr: `**Hypothèse testée :** chez des patients atteints d'ICFER ischémique présentant une carence martiale et recevant déjà les quatre classes médicamenteuses de fond — ARNI (sacubitril/valsartan — *Entresto*) ou IEC/ARA2, bêtabloquant, antagoniste des récepteurs aux minéralocorticoïdes (ARM : spironolactone — *Aldactone*, éplérénone — *Inspra*) et inhibiteur du SGLT2 (dapagliflozine — *Forxiga*, empagliflozine — *Jardiance*) — le fer intraveineux continue-t-il de réduire les hospitalisations pour insuffisance cardiaque ?

Un résultat central de cette enquête est la faible proportion de patients réellement traités par quadrithérapie moderne dans l'ensemble des essais fondateurs :

| Essai (année) | Effectif | Critère FEVG (moy./méd.) | Cause ischémique | CST < 20 % | ARNI | ARM | iSGLT2 n (%) | Critère principal (statut formel) |
|---|---|---|---|---|---|---|---|---|
| **FAIR-HF** (2009) | 459 | ≤ 40–45 % (32 %) | 80 % | 69 % | 0 % (NR) | NR | 0 % (NR) | Symptômes / NYHA (positif ; pas un essai d'hospitalisations) |
| **CONFIRM-HF** (2015) | 301 | ≤ 45 % (37 %) | 83 % | 63 % | 0 % (NR) | NR | 0 % (NR) | Marche de 6 min (positif ; critère secondaire hosp. IC HR 0,39) |
| **AFFIRM-AHF** (2020) | 1 132 (1 108 mITT) | < 50 % (33 %) | 47 % (54,5 % élargi) | 83–84 % | 6,5 % | 66 % | ~0 % (NR) | Total hosp. IC + décès CV RR 0,79 (0,62–1,01), p = 0,059 (**formellement neutre** ; hosp. IC RR 0,74) |
| **IRONMAN** (2022) | 1 137 | ≤ 45 % (34–35 %) | 57 % | 74–76 % | 21 % | 56 % | **29 (2,6 %)** | Total hosp. IC + décès CV RR 0,82 (0,66–1,02), p = 0,070 (**formellement neutre** ; sensibilité COVID RR 0,76, p = 0,047) |
| **HEART-FID** (2023) | 3 065 | ≤ 40 % (32 %) | 60 % | **40,5 %** (43 % Tabl. 3) | 30 % | 56 % | **229 (7,5–7,7 %)** | Ratio hiérarchique de victoires 1,10 (IC 99 % 0,99–1,23), p = 0,02 pour alpha 0,01 (**formellement neutre**) |
| **FAIR-HF2** (2025) | 1 105 | ≤ 45 % (moy. 34 %, méd. 35 %) | **78 %** | 68 % | **38 %** | **70,5 %** | **261 (23,6 %)** | 3 co-critères : HR 0,79 (p = 0,04), RR 0,80 (p = 0,12), CST < 20 % HR 0,79 (p = 0,07) (**formellement neutre** selon Hochberg) |
| **Total regroupé** | **7 175** | **≤ 50 %** | **~62 %** | **~58 %** | **~22 %** | **~60 %** | **519 (~7,2 %)** | RR bayésien poolé 0,81 (0,63–0,97) suivi complet ; 0,72 (0,55–0,89) à 12 mois |

Même dans **FAIR-HF2**, essai le plus récent dont les inclusions se sont achevées en novembre 2023, **plus des trois quarts des participants (76,4 %) ne prenaient pas d'iSGLT2** et **62 % ne prenaient pas d'ARNI** (le chiffre d'environ 70 % correspondait aux ARM, et non aux iSGLT2). Aucun essai n'a rapporté la proportion exacte de patients recevant simultanément les quatre piliers, et **aucun n'a publié d'analyse des hospitalisations pour insuffisance cardiaque stratifiée selon la prise d'un iSGLT2**.`,
    },
    {
      headingFr: 'Arguments en faveur d’un bénéfice persistant sur les hospitalisations',
      bodyMarkdownFr: `- **Réduction reproductible d'environ 20 % des hospitalisations dans l'ICFER, confirmée par une revue indépendante sans lien industriel (novembre 2026) :**
  - Dans la méta-analyse regroupant les 6 grands essais (7 175 patients, données individuelles sur 5 essais ; **Anker et al., *Nature Medicine* 2025**), le fer IV réduit le total des hospitalisations IC et décès CV de **28 % à 12 mois** (RR bayésien **0,72**, IC 95 % 0,55–0,89 ; Knapp-Hartung **0,73**, 0,60–0,89) et de **19 % sur tout le suivi** (RR **0,81**, 0,63–0,97 ; Knapp-Hartung **0,81**, 0,67–0,98). Les hospitalisations récurrentes pour IC diminuent de **31 % à 12 mois** (RR **0,69**, 0,48–0,88) et de **22 % sur l'ensemble du suivi** (RR bayésien **0,78**, 0,55–0,98).
  - Surtout, une méta-analyse académique indépendante déclarant **zéro conflit d'intérêts industriel** (**Mandal et al., *Open Heart*, novembre 2026**, 18 cohortes indépendantes d'IC jusqu'en octobre 2026) confirme avec une **certitude GRADE modérée** la baisse du total des hospitalisations IC (3 essais, n = 3 350 ; effet fixe **RR 0,78**, IC 95 % **0,67–0,90** ; à 12 mois RR **0,71**, 0,58–0,86) et du risque d'au moins une hospitalisation IC (10 essais, n = 5 371 ; **RR 0,89**, 0,80–0,99, soit environ **25 admissions évitées pour 1 000 patients**), tout en notant que les intervalles à effets aléatoires croisent 1.
- **L'origine ischémique ne réduit pas l'efficacité globale :** dans **Anker 2025**, les patients ischémiques présentent un **RR de 0,74** (0,56–0,92) contre **0,90** (0,65–1,18) chez les non-ischémiques (interaction non significative). Dans la méta-analyse sur données individuelles de 3 essais de carboxymaltose ferrique (**Ponikowski 2023**, n = 4 501, 58 % ischémiques), la tendance était même favorable aux causes ischémiques (p d'interaction = 0,08).
- **FAIR-HF2 conserve un ordre de grandeur comparable malgré un traitement de fond plus moderne :** avec 78 % de causes ischémiques, 96 % d'IEC/ARA2/ARNI (38 % ARNI), 92 % de bêtabloquants, 70,5 % d'ARM et **23,6 % d'iSGLT2**, **FAIR-HF2** retrouve un HR de **0,79** (0,63–0,99 ; p nominal = 0,04) sur décès CV ou 1re hospitalisation IC, un RR de **0,80** (0,60–1,06) sur le total des hospitalisations IC et, en exploratoire à 12 mois, un HR de **0,71** et un RR d'hospitalisations IC de **0,65** (0,47–0,90), proches d'AFFIRM-AHF et d'IRONMAN.
- **La réponse érythropoïétique au fer IV n'est pas émoussée sous iSGLT2 (données biologiques sur très petits effectifs) :** dans le seul sous-groupe randomisé publié sous iSGLT2 (**Docherty 2024**, essai IRONMAN, **n = 29 sous iSGLT2**), le dérisomaltose ferrique a relevé l'hémoglobine à 4 semaines de **+1,0 g/dL** (IC 0,1 à 1,8) chez les patients sous iSGLT2 contre **+0,4 g/dL** (IC 0,3 à 0,6 selon le tableau 1) chez les non-utilisateurs (p d'interaction = 0,10 ; à 4 mois +1,0 contre +0,6 g/dL), avec **zéro cas de polyglobulie**. Une cohorte appariée de 120 patients ICFER (**Marques 2023**) retrouve une hausse plus marquée de l'hémoglobine (+0,57 g/dL) et de l'hématocrite (+1,64 %) après fer IV sous iSGLT2. Inversement, dans **EMPEROR** (**Ferreira 2025**, n = 1 139), une carence martiale initiale atténuait la hausse d'hémoglobine induite par l'empagliflozine (p de tendance = 0,04).
- **Consensus des recommandations 2025–2026 :** les recommandations **ESC 2026** maintiennent le fer intraveineux en **Classe IIa, Niveau B1** pour réduire les hospitalisations pour IC (et **Classe I, B1** pour les symptômes et la qualité de vie) en complément des quatre piliers ; **NICE NG106 (2025)** conseille de l'envisager dans l'ICFER (recommandation 1.4.6).`,
    },
    {
      headingFr: 'Arguments en défaveur et zones d’incertitude méthodologique',
      bodyMarkdownFr: `- **Aucune donnée randomisée directe d'événements cliniques sous quadrithérapie avec iSGLT2 :** seuls **519 patients sur 7 175 (~7,2 %)** prenaient un iSGLT2 à l'inclusion, et aucune analyse en sous-groupe des hospitalisations IC selon l'iSGLT2 ou la quadrithérapie n'a été publiée (Anker 2025, Ponikowski 2023, Mandal 2026). L'analyse d'IRONMAN par Docherty (2024) ne compte que 29 patients sous iSGLT2 et ne porte que sur l'hémoglobine.
- **Chaque grand essai d'événements pris séparément a manqué son critère principal formel :**
  - **AFFIRM-AHF** (p = 0,059), **IRONMAN** (p = 0,070 ; essai ouvert avec 17 % de passage au fer IV dans le groupe témoin ; sensibilité COVID p = 0,047), **HEART-FID** (p = 0,02 pour un seuil exigé de p < 0,01 ; ratio de victoires 1,10, IC 99 % 0,99–1,23) et **FAIR-HF2** (p = 0,04 pour un seuil de Hochberg ≤ 0,0167 après passage en aveugle de 1 à 3 critères principaux en mars 2024 et 34 % à 38 % d'arrêts précoces) sont tous **formellement neutres**.
  - Dans le **sous-groupe ischémique de FAIR-HF2 seul** (**Khan 2026**, n = 858, résumé), les estimations ponctuelles étaient atténuées et non significatives sur les trois critères principaux (décès CV ou 1re hosp. IC **HR 0,85** [0,66–1,10] ; total hosp. IC **0,87** [0,63–1,21] ; CST < 20 % **HR 0,84** [0,62–1,14] ; p d'interaction 0,17 à 0,35).
  - En modélisation fréquentiste conservatrice à effets aléatoires sur le suivi complet, l'intervalle de confiance des hospitalisations IC récurrentes croise 1 dans **Anker 2025** (Knapp-Hartung **RR 0,74**, 0,52–1,06, p = 0,081), **Ponikowski 2023** (avec IRONMAN : **RR 0,822**, 0,577–1,073) et **Mandal 2026**.
- **Baisse du risque de base sous traitement moderne :** le taux d'événements du groupe placebo a chuté de **72,5 pour 100 patients-années** dans AFFIRM-AHF (IC aiguë, 6,5 % d'ARNI, ~0 % d'iSGLT2) à **17,3** dans HEART-FID et **21,9** dans FAIR-HF2. Sous quadrithérapie complète, une même réduction relative de 15 à 20 % représente moins d'hospitalisations évitées en valeur absolue.
- **Essoufflement après la première année :** l'effet culmine la première année (RR 0,69–0,72) puis s'atténue aux années 2 et 3 (RR 0,78–0,81), même avec les perfusions d'entretien trimestrielles de FAIR-HF2 (500 mg tous les 4 mois).
- **Aucun bénéfice de survie démontré et signal de sexe non résolu :** les méta-analyses convergent sur l'absence de baisse significative de la mortalité toutes causes (HR 0,92–0,93) ou cardiovasculaire (HR 0,87). Une interaction selon le sexe favorisant les hommes apparaît dans Anker 2025 (hommes RR **0,76** contre femmes **0,98**, P bayésien = 0,025) et FAIR-HF2 (mortalité toutes causes chez les femmes HR 1,46 [0,78–2,76]), mais HEART-FID allait en sens inverse.
- **Signal observationnel fortement confondu :** une étude rétrospective de dossiers électroniques TriNetX (**Alruwaili 2025**, 16 660 patients en IC systolique sous iSGLT2 sélectionnés uniquement sur ferritine < 100 µg/L) a trouvé davantage de thromboembolies (HR 1,56), d'événements cardiovasculaires (HR 1,51), de décès (HR 1,55) et d'exacerbations IC (HR 1,41) chez les receveurs de fer IV. Ce type de base souffre d'un fort **biais d'indication** (les patients plus graves reçoivent du fer IV) et ne prouve pas une nocivité, mais motive un suivi rigoureux des événements thromboemboliques dans les futurs essais randomisés (2 contre 0 infarctus/AVC chez les 29 patients sous iSGLT2 d'IRONMAN).`,
    },
    {
      headingFr: 'Tension mécanistique (iSGLT2/ARNI) et rôle décisif du CST < 20 %',
      bodyMarkdownFr: `Les **inhibiteurs du SGLT2** (**Docherty 2022**, **Ferreira 2025**, **Packer 2022–2024**) et le **sacubitril/valsartan** (**Packer 2024**) modifient activement le métabolisme du fer :

1. **Effets biochimiques des iSGLT2 :** hausse de l'érythropoïétine et de l'érythroferrone (> 40 % dans EMPEROR), baisse de l'**hepcidine** d'environ **20 à 40 %**, diminution de la **ferritine** sérique (~32–33 %) et baisse modeste du CST (~7 % à 12 semaines, s'atténuant à 52 semaines), avec une hausse soutenue de l'hémoglobine de **+0,6 à +0,9 g/dL**.
2. **Double conséquence opposée sur le bénéfice du fer IV :**
   - *Effet réducteur (faux positifs de ferritine) :* selon l'hypothèse de réplétion cytosolique de Packer, les iSGLT2 et l'ARNI lèvent déjà le blocage inflammatoire du fer stocké, ce qui abaisse la ferritine sous 100 µg/L et augmente d'environ **70 %** le nombre de patients classés « carencés » selon les anciens critères (DAPA-HF), alors que le fer circulant utilisable (**CST ≥ 20 %**) reste suffisant.
   - *Effet révélateur (vrai épuisement des réserves) :* la stimulation de l'érythropoïèse consomme du fer réel. Lorsque le fer circulant est véritablement bas (**CST < 20 %**), les iSGLT2 ne peuvent pas fabriquer de fer : la réponse d'hémoglobine à l'empagliflozine s'émousse (EMPEROR, p = 0,04) et les utilisateurs d'iSGLT2 d'IRONMAN étaient surreprésentés dans les CST ≤ 10 % (p = 0,0043).
3. **Ce que montrent les sous-groupes CST dans les essais :**
   - **Dilution dans HEART-FID (Lewis, *JACC HF* déc. 2025, n = 2 951) :** **89,8 %** avaient une ferritine < 100 µg/L, mais **seulement 40,5 % avaient un CST < 20 %** (CST moyen 23,4–23,9 % contre ~15 % dans AFFIRM-AHF et IRONMAN). Seuls le CST < 20 % et le fer sérique < 13 µmol/L — et non la ferritine — prédisaient la capacité d'effort et le pronostic.
   - **Interactions poolées :** **Ponikowski 2023** (n = 4 501) montre une interaction significative selon le CST pour hospitalisations CV + décès CV (**p = 0,019**) et décès CV (**p = 0,035**), avec bénéfice concentré à **CST < 15 %** et absence de bénéfice (voire tendance défavorable sur le décès CV) à **CST ≥ 24 %**. **Marques 2024** (> 5 500 patients) retrouve **RR 0,81 (0,69–0,94)** si CST < 20 % contre **RR 0,98 (0,79–1,21)** si CST ≥ 20 % (**p d'interaction = 0,05**), et zéro interaction pour la ferritine (p = 0,96). Dans **IRONMAN (Cleland 2024)**, le profil **CST ≥ 20 % avec ferritine < 100 µg/L** affichait un **RR de 0,96** (0,60–1,52) et une mortalité numériquement plus élevée (HR 1,30 ; 1,56 en sensibilité COVID).
   - **Nuance après FAIR-HF2 :** dans **Anker 2025**, le test formel d'interaction s'atténue, mais l'estimation poolée reste concentrée dans le **CST < 20 %** (**RR 0,77**, 0,60–0,94) contre **RR 0,96** (0,72–1,26) pour un CST ≥ 20 %. Les sept principaux investigateurs des essais de fer IV (**Packer et al., *Circulation* 2024**) proposent ainsi de remplacer le critère ferritine par **CST < 20 %**.`,
    },
    {
      headingFr: 'Carboxymaltose ferrique contre dérisomaltose ferrique et profil de sécurité',
      bodyMarkdownFr: `En termes d'efficacité sur les hospitalisations IC, le **carboxymaltose ferrique (FCM — *Ferinject*)** et le **dérisomaltose ferrique (FDI — *Monofer*)** présentent des réductions relatives comparables (~18–22 %) et sont cités sans hiérarchie par l'ESC 2026 et NICE NG106 (aucun essai comparatif direct d'événements cliniques dans l'IC). Leur profil de tolérance diffère en revanche nettement sur le phosphore :

- **Hypophosphatémie — divergence majeure entre FCM et FDI :**
  - Dans la sous-étude prospective dédiée de **HEART-FID** (**Nouhravesh et al., *EJHF* mai 2025**, n = 133), **57,6 %** des patients ICFER traités par FCM ont présenté une baisse du phosphore sanguin et **51,9 %** ont développé une **hypophosphatémie modérée à sévère (< 0,8 mmol/L, dont 27,8 % sévère de grade 3 entre 0,30 et 0,59 mmol/L) au 21e jour**, accompagnée d'une baisse de la vitamine D active et d'une hausse de la PTH, avec normalisation aux jours 91 à 119 (les symptômes musculaires ou osseux et les perfusions répétées n'étaient pas suivis). Des compilations antérieures financées par le fabricant (Rosano 2023) n'avaient trouvé que 8,1 % car moins de 7 % des patients avaient eu un dosage dans les deux premières semaines.
  - Sur 42 essais (**Schaefer 2021**), le FCM entraînait une hypophosphatémie chez **47 % des patients contre 4 % avec le FDI** ; hors IC, les essais comparatifs directs PHOSPHARE-IDA et PHOSPHARE-IBD retrouvaient **51 à 75 % contre 8 %**, avec une récupération plus lente de la fatigue sous FCM.
  - Une **fonction rénale préservée (DFG > 60 contre ≤ 30 mL/min/1,73 m² : OR 12,23)** et les **perfusions répétées (OR 3,03)** multiplient le risque. L'agence britannique **MHRA** (alerte 2020, étendue à tous les génériques du FCM en septembre 2026) recense **36 cas mondiaux d'ostéomalacie hypophosphatémique (dont 53 % avec fractures)** après FCM répété contre **0 avec le FDI**, recommandant une surveillance du phosphore en cas d'administrations répétées ou prolongées de FCM.
- **Risque infectieux — rassurant dans l'IC mais de faible certitude :** tous contextes médicaux confondus (**Shah 2021**, texte corrigé 2022–2025, 64 ECR, n = 19 322), le fer IV s'accompagnait d'un léger excès d'infections (**RR 1,16**, 1,03–1,29, tiré par les MICI). Dans l'IC spécifiquement, **IRONMAN (Foley 2025)** a observé **moins** de premières hospitalisations pour infection sous FDI (**HR 0,76**, IC 95 % **0,59–0,98** selon le tableau 2), uniquement en cas de **CST < 20 %** (HR 0,70 contre 1,13). Toutefois, la revue indépendante **Mandal 2026** cote la sécurité infectieuse dans l'IC à une **certitude faible à très faible** (seuls 24 % des patients randomisés avaient des données exploitables au niveau individuel, et les comptages de FAIR-HF2 relevaient 165 épisodes infectieux sous FCM contre 118 sous placebo). Une **infection active** demeure une contre-indication universelle à la perfusion.`,
    },
    {
      headingFr: 'Verdict, essais en cours et points à discuter avec votre cardiologue',
      bodyMarkdownFr: `- **Verdict :** **Partiellement étayée** (confiance : **moyenne**).
- **Synthèse :** le bénéfice global d'environ 20 % sur les hospitalisations IC (et 30 % la première année) dans l'ICFER ischémique est reproduit dans les méta-analyses indépendantes, mais la preuve directe au-dessus de la quadrithérapie complète incluant un iSGLT2 manque encore (~7,2 % d'iSGLT2 à l'inclusion, aucune stratification publiée). En pratique, les données orientent l'indication vers une hypoferrémie vraie (**CST < 20 %**) plutôt qu'une ferritine < 100 µg/L isolée sous iSGLT2, en pesant le choix de la molécule (**FCM contre FDI**) et la surveillance du phosphore en cas de perfusions répétées chez un patient à fonction rénale préservée.
- **Études en cours à surveiller :**
  - **INFERRCT** (*NCT05759078*, Pologne, n = 1 000 patients après infarctus du myocarde avec **CST strictement < 20 %**, FCM contre placebo, fin estimée décembre 2026) : apportera des données majeures à l'ère moderne en contexte ischémique, mais en post-infarctus aigu plutôt qu'en ICFER chronique stable ;
  - **COMBINED-HF** (*NCT06434025*, Brésil, n = 99 patients ICFER naïfs d'iSGLT2, FCM + dapagliflozine, critère FEVG en IRM à 30 jours, statut non actualisé).
- **Ce qui ferait évoluer ce verdict :** une méta-analyse sur données individuelles des ~519 patients sous iSGLT2 de FAIR-HF2, HEART-FID et IRONMAN (ou un nouvel essai randomisé en double aveugle sur quadrithérapie moderne avec CST < 20 %) confirmant le maintien de la baisse des hospitalisations sans atténuation ni signal thromboembolique/infectieux ferait basculer vers un soutien plein ; un effet nul dans ces sous-groupes ferait évoluer vers une réfutation ou des preuves insuffisantes.
- **Pour votre suivi :** ne prenez pas de compléments de fer de votre propre initiative et discutez avec votre cardiologue de votre dernier **CST**, de votre **ferritine**, du choix entre carboxymaltose ferrique et dérisomaltose ferrique et, en cas de perfusions répétées de FCM, d'un éventuel contrôle de la phosphatémie.`,
    },
  ],
  relatedArticleSlugs: [
    'carence-martiale-et-fer-iv',
    'fer-oral-haute-biodisponibilite',
    'medicaments-insuffisance-cardiaque',
    'traitements-additionnels-nouveaux',
    'tableau-preuves-nutrition-complements',
    'nutrition-et-complements-insuffisance-cardiaque',
    'essais-cliniques-cles',
    'essais-cliniques-en-cours-et-a-suivre',
    'questions-equipe-cardiologie',
  ],
  sources: [
    {
      label: 'FAIR-HF2 (JAMA 2025, texte intégral), Anker et al. (EJHF & Nature Medicine 2025) et Khan et al. (2026)',
      detail: 'Tableau comparatif des 6 essais (7 175 patients, 519 [7,2 %] sous iSGLT2 dont 23,6 % dans FAIR-HF2), méta-analyse bayésienne/fréquentiste et sous-groupe ischémique (78 %).',
    },
    {
      label: 'Mandal et al. (Open Heart, novembre 2026, texte intégral), Foley et al. (IRONMAN 2025) et Shah et al. (2021, corrigé)',
      detail: 'Méta-analyse indépendante sans conflit d’intérêts (18 cohortes, certitude GRADE modérée sur les hospitalisations IC, faible/très faible sur les infections).',
    },
    {
      label: 'HEART-FID (Mentz 2023, Lewis 2025), IRONMAN (Cleland 2024, Docherty 2024) et Ponikowski et al. (EHJ 2023)',
      detail: 'Rôle déterminant du seuil CST < 20 % contre ferritine isolée < 100 µg/L, et réponse d’hémoglobine chez les 29 utilisateurs d’iSGLT2 d’IRONMAN.',
    },
    {
      label: 'Packer et al. (EJHF 2022 ; Circulation 2024), Docherty et al. (DAPA-HF 2022) et Ferreira et al. (EMPEROR 2025)',
      detail: 'Remodelage du fer et de l’hepcidine par les iSGLT2 et le sacubitril/valsartan, et consensus des investigateurs en faveur du critère CST < 20 %.',
    },
    {
      label: 'Nouhravesh et al. (HEART-FID phosphate, EJHF mai 2025), Schaefer (2021), PHOSPHARE et alertes MHRA (2020/2026)',
      detail: 'Hypophosphatémie à J21 sous FCM (51,9 % modérée à sévère) contre ~4–8 % sous FDI, facteur DFG > 60 et cas d’ostéomalacie hypophosphatémique.',
    },
    {
      label: 'Recommandations ESC 2026, NICE NG106 (2025), AHA/ACC/HFSA 2022 et registres (COMBINED-HF, INFERRCT)',
      detail: 'Classes ESC I B1 / IIa B1, critères NICE 1.4.5–1.4.6 et essais en cours à l’ère des iSGLT2.',
    },
  ],
  disclaimerType: 'medical',
};
