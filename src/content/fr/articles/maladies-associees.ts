import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'maladies-associees',
  sourceWikiPath: 'wiki/topics/coexisting-conditions.md',
  titleFr: 'Maladies associées (reins, FA, valves, diabète)',
  category: 'comorbidites',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'comorbidités',
    'maladie-rénale-chronique',
    'fibrillation-atriale',
    'valvulopathie',
    'insuffisance-mitrale',
    'rétrécissement-aortique',
    'diabète',
    'hypertension',
    'multimorbidité',
    'apnée-du-sommeil',
    'goutte',
    'bpco',
    'thyroïde',
    'anémie',
    'aomi',
    'fragilité',
    'troubles-cognitifs',
  ],
  aliases: [
    'Comorbidités',
    'Multimorbidité',
    'Maladie rénale et insuffisance cardiaque',
    'Fibrillation atriale et insuffisance cardiaque',
    'FA',
    'Insuffisance mitrale',
    'Fuite mitrale',
    'Rétrécissement aortique',
    'TEER',
    'MitraClip',
    'TAVI',
    'Goutte',
    'BPCO',
    'Thyroïde',
  ],
  linkedModules: ['ckd', 'atrialFibrillation', 'diabetes'],
  plainSummaryFr:
    "L'insuffisance cardiaque survient rarement seule : dans une grande analyse portant sur 15 066 patients atteints d'ICFER, 94 % présentaient au moins une autre maladie chronique (hypertension, maladie coronaire, maladie rénale, diabète, fibrillation atriale, fuite valvulaire, goutte, BPCO, troubles thyroïdiens, anémie, artériopathie des membres inférieurs, fragilité ou troubles cognitifs). La maladie rénale chronique pèse le plus sur la mortalité à l'échelle d'une population et guide les doses et bilans ; la fibrillation atriale et l'IC s'entretiennent mutuellement et majorent le risque d'AVC ; une fuite mitrale secondaire se traite d'abord par les médicaments avant d'envisager un clip chez certains patients. Chaque grande affection dispose désormais de sa fiche complète dédiée (reins, FA, fuite mitrale, rétrécissement aortique, diabète, tension artérielle, apnée du sommeil, et goutte/BPCO/thyroïde/anémie/AOMI/fragilité/cognition) : cette page rassemble l'essentiel et vous y renvoie.",
  sections: [
    {
      headingFr: 'Quelle est la fréquence des maladies associées ?',
      bodyMarkdownFr: `Dans une analyse groupée de **15 066 patients** atteints d'ICFER issus de deux grands essais (PARADIGM-HF et ATMOSPHERE ; Dewan 2023) :

- **94 %** présentaient au moins l'une des dix comorbidités les plus courantes, et **79 %** en avaient au moins deux.

| Maladie associée | Fréquence | Associée à un risque de décès plus élevé (ajusté) ? |
|---|---|---|
| Hypertension artérielle | 66,6 % | Non (HR 0,95) |
| Maladie coronarienne | 47,5 % | Non (HR 0,96) |
| Maladie rénale chronique (DFGe < 60 mL/min/1,73 m²) | 31,8 % | **Oui**, HR 1,31 |
| Diabète | 31,5 % | **Oui**, HR 1,29 |
| Obésité | 30,1 % | Risque plus bas (HR 0,91), dit « paradoxe de l'obésité » |
| Fibrillation atriale (FA) | 23,5 % | **Oui**, HR 1,11 |
| Anémie | 21,9 % | **Oui**, HR 1,36 |
| Artériopathie oblitérante des membres inférieurs (AOMI) | 5,5 % | **Oui**, HR 1,39 |

- **La maladie rénale chronique expliquait la plus grande part des décès** à l'échelle de la population (environ 9 %), car elle combine fréquence élevée et surrisque (Dewan 2023).
- **L'association de la FA avec une insuffisance rénale ou une maladie coronaire** comportait un risque supérieur à celui de chacune isolément (Dewan 2023).
- **Limites :** il s'agit de patients inclus dans des essais cliniques qui excluaient les formes les plus graves (par exemple DFGe < 30 mL/min/1,73 m²) ; la charge réelle en pratique courante est probablement plus lourde. De plus, ces associations ne prouvent pas à elles seules que traiter chaque affection réduit la mortalité.

Les recommandations américaines (ACC 2022) couvrent également la carence en fer, l'anémie, l'hypertension, les troubles du sommeil, le diabète, la FA et la maladie coronaire. Pour le fer, consultez *Carence en fer et fer intraveineux* ; pour le poids, *Poids, obésité et dénutrition (cachexie cardiaque)*.`,
    },
    {
      headingFr: 'Maladie rénale chronique et fibrillation atriale',
      bodyMarkdownFr: `### Maladie rénale chronique

**Fiche complète :** *Maladie rénale chronique et insuffisance cardiaque* (baisse précoce du DFGe, protection rénale par iSGLT2 dans EMPA-KIDNEY, déclin du DFGe comme signal d'alerte, hyperkaliémie récidivante et limites sous DFGe 30). En bref :

- **Moins de traitements alors que le risque est plus élevé :** dans un registre, seuls environ 15 % des patients avec un DFGe entre 30 et 44 mL/min/1,73 m² et 5 % sous 30 recevaient trois classes validées (Beldhuis 2022).
- **Les traitements restent efficaces :** le bénéfice persiste dans l'insuffisance rénale modérée (jusqu'au stade 3B) pour les ARM, iSGLT2, ARNI et bêtabloquants. Sous 30 mL/min/1,73 m², les preuves se raréfient et aucune donnée d'événements cliniques n'existe sous dialyse (Beldhuis 2022).
- **Une baisse initiale modérée du DFGe est souvent attendue** à l'introduction de ces médicaments, et les iSGLT2 ralentissent le déclin rénal à long terme (voir *Médicaments : mode d'action, effets secondaires et bilans sanguins*).
- **Potassium :** le potassium monte plus souvent sous ARM en cas de maladie rénale (25,6 % contre 8,5 % > 5,5 mmol/L sous spironolactone — *Aldactone* — dans RALES) ; les iSGLT2 n'élèvent pas le potassium. Les chélateurs de potassium aident à maintenir un ARM sans preuve démontrée de gain sur les événements cardiaques (DIAMOND ; ESC 2026).
- **Diabète de type 2 avec maladie rénale :** ESC 2026 recommande la **finérénone** (*Kerendia*, **Classe I, A**) pour réduire le risque d'IC quelle que soit la FEVG ; les essais rénaux (FIDELIO-DKD, FIGARO-DKD) excluaient toutefois l'ICFER symptomatique (indication distincte de l'ARM d'ICFER sous 40 % de FEVG ; FINE-HEART ; voir *Finérénone, nouveaux ARM et chélateurs de potassium*).
- **Digoxine :** éliminée par les reins, elle impose des dosages sanguins (digoxinémie) quand le DFGe baisse (Ahmed 2006 ; Beldhuis 2022).

### Fibrillation atriale (FA)

**Fiche complète :** *Fibrillation atriale et insuffisance cardiaque* (score CHA₂DS₂-VA détaillé, cibles de fréquence, digoxine/digitoxine, stratégie « ablate and pace » avec CRT dans APAF-CRT, contrôle précoce du rythme EAST-AFNET 4 et essais d'ablation CASTLE-AF, RAFT-AF, CASTLE-HTx avec leurs parts ischémiques). En bref :

- **Association et risque :** dans Framingham (30 ans), 57 % des nouvelles IC avaient une FA et 37 % des nouvelles FA avaient une IC. En cas de FA, l'IC double le risque d'AVC et élève d'environ 25 % la mortalité ; FA + ICFER porte la mortalité la plus élevée (ESC 2024).
- **Prévention des AVC (score CHA₂DS₂-VA, ESC 2024) :** le sexe féminin ne compte plus ; l'IC (symptomatique toute FEVG **ou** FEVG ≤ 40 % asymptomatique) vaut 1 point ; la maladie vasculaire (incluant coronaropathie, infarctus, stents ou pontage) vaut 1 point ; HTA, diabète et âge 65–74 ans valent 1 point chacun. Anticoagulation recommandée dès **2 points (Classe I, C)**, à envisager à **1 point (Classe IIa, C)**, avec préférence pour les **AOD** plutôt que les AVK (**Classe I, A** ; moitié moins d'hémorragies intracrâniennes ; aspirine non substitutive). *Repère :* une cardiomyopathie ischémique avec FEVG ≤ 40 % atteint déjà 2 points.
- **Approche « AF-CARE » et médicaments :** prise en charge globale des comorbidités en premier. À FEVG ≤ 40 % : bêtabloquants et/ou digoxine pour la fréquence (**Classe I, B** — sans baisse démontrée de mortalité sous bêtabloquants dans une analyse groupée en FA ; ivabradine inefficace en FA), **diltiazem et vérapamil contre-indiqués**, **amiodarone** (*Cordarone*) comme principal antiarythmique (**Classe I, A**).
- **Ablation par cathéter :** recommandée si la FA est probablement la cause de la faiblesse cardiaque (**Classe I, B**) et à envisager chez des patients ICFER sélectionnés (**Classe IIa, B**). Une méta-analyse 2024 d'essais d'ICFER (Oraii 2024) montre moins de décès (**RR 0,63**) et d'événements d'IC (**RR 0,59**), mais les sources lues ne séparent pas les résultats selon l'origine ischémique, qui prédit une récupération moindre de FEVG (EHRA/HRS 2024). CASTLE-HTx (8 % contre 30 %) portait sur une IC terminale (FEVG 25–29 %, monocentrique, ouvert, arrêté précocement).`,
    },
    {
      headingFr: 'Valvulopathies : fuite mitrale, fuite tricuspide et rétrécissement aortique',
      bodyMarkdownFr: `### Fuite mitrale secondaire (insuffisance mitrale fonctionnelle)

**Fiche complète :** *Fuite mitrale secondaire (insuffisance mitrale fonctionnelle)* (quantification ETT, médicaments et CRT d'abord dont PRIME, essais du clip et débat proportionnée/disproportionnée, clip vs chirurgie dans MATTERHORN, essais chirurgicaux CTSN et critères ESC/EACTS 2025). En bref :

- **Fréquence et priorité aux médicaments :** une fuite mitrale secondaire « ventriculaire » sévère touche environ **25 %** des personnes avec FEVG réduite. L'optimisation des quatre piliers (et la CRT si indiquée) précède toujours tout geste valvulaire et améliore environ **40 %** des fuites après 1 à 3 mois (ESC/EACTS 2025).
- **Clip percutané (TEER, ex. *MitraClip*) :** dans COAPT, le clip a réduit les hospitalisations (HR 0,53) et les décès (HR 0,72) à 5 ans ; dans **RESHAPE-HF2** (2024), il a réduit les hospitalisations IC ou décès CV (ratio de taux **0,64**) pour des fuites plus modestes ; MITRA-FR était neutre. L'analyse groupée citée par ESC/EACTS 2025 retrouve moins de réhospitalisations à 24 mois (HR 0,63) sans différence de mortalité. Environ **60 à 65 %** des participants étaient ischémiques (COAPT 61 %, RESHAPE-HF2 65 %), mais COAPT excluait les coronaropathies à revasculariser. En chirurgie pour IM ischémique sévère (CTSN), la plastie par anneau a récidivé chez **58,8 %** contre **3,8 %** après remplacement.
- **Parcours ESC/EACTS 2025 :** optimiser les médicaments et envisager la CRT, réévaluer la fuite, puis décision en **Heart Team** ; le clip est classé **Classe I, A** chez les patients sélectionnés sans coronaropathie à traiter (les patients très fragiles ou à espérance de vie limitée restent souvent sous traitement médical seul).

### Fuite tricuspide

Selon **ESC/EACTS 2025**, la Heart Team évalue la cause, le ventricule droit, la pression pulmonaire et le risque opératoire (**Classe I, C**). Un **traitement par cathéter** (clip ou remplacement tricuspide) doit être envisagé en cas de fuite sévère symptomatique malgré les médicaments chez les patients à haut risque chirurgical (**Classe IIa, A**), avec un bénéfice démontré principalement sur la **qualité de vie**. Une dysfonction sévère du ventricule gauche ou droit ou une hypertension pulmonaire élevée contre-indique habituellement la chirurgie (voir *Ventricule droit et hypertension pulmonaire*).

### Rétrécissement aortique (sténose aortique) avec cœur affaibli

- Un ventricule affaibli peut masquer le gradient de pression d'une sténose serrée ou empêcher une valve modérément atteinte de s'ouvrir pleinement (« pseudo-sévère ») (ESC/EACTS 2025).
- **Critères « bas débit, bas gradient » :** gradient moyen < 40 mmHg, surface valvulaire ≤ 1,0 cm², volume d'éjection indexé ≤ 35 mL/m² et FEVG < 50 %. Examens clés : échocardiographie de stress à la dobutamine (réserve de débit ≥ 20 %) et score calcique valvulaire au scanner (> 2 000 UA chez l'homme, > 1 200 UA chez la femme).
- **Traitement :** remplacement valvulaire dès confirmation d'une sténose vraie sévère (TAVI privilégié à partir de 70 ans si anatomie adaptée ; chirurgie avant 70 ans à faible risque chirurgical, sur décision de la Heart Team) ; traitement médical d'IC en cas de sténose pseudo-sévère.

**Fiche complète :** *Rétrécissement aortique avec FEVG réduite* (classification à bas débit, progression, surveillance ETT, coronaropathie associée et essais d'intervention précoce).`,
    },
    {
      headingFr: 'Diabète, hypertension artérielle et apnée du sommeil',
      bodyMarkdownFr: `### Hypertension artérielle et diabète

Ces deux affections sont très fréquentes dans l'ICFER (66,6 % et 31,5 % dans Dewan 2023) ; le diabète était indépendamment associé à la mortalité, contrairement à l'hypertension après ajustement.

- **Tension artérielle dans l'ICFER (ESC 2026) :** aucune cible tensionnelle n'a été testée par essai randomisé dans l'IC établie, les quatre piliers assurant généralement le contrôle tensionnel. L'amlodipine (*Amlor*) ou la félodipine peuvent être ajoutées ; vérapamil, diltiazem et moxonidine sont contre-indiqués, et les alphabloquants ne sont pas utilisés pour l'HTA. En prévention et au stade B, la cible systolique est **< 130 mmHg (Classe I, A)** (voir *Tension artérielle et insuffisance cardiaque*).
- **Diabète dans l'ICFER :** les **iSGLT2** protègent le cœur de manière identique avec ou sans diabète (DAPA-HF p = 0,80 ; EMPEROR-Reduced p = 0,57). Pour le contrôle glycémique additionnel, ESC 2023 considère metformine, agonistes GLP-1, sitagliptine, linagliptine et insulines basales comme neutres sur l'IC, tandis que l'ADA 2022 déconseille les gliptines en tant que classe ; la pioglitazone et la saxagliptine sont à éviter ; les cibles d'HbA1c excessivement basses ne sont pas recherchées (mortalité observationnelle minimale autour de 7–8 %). **Fiche complète :** *Diabète et insuffisance cardiaque*.
- **Repères complémentaires du consensus ADA 2022 / ADA 2026 :** jusqu'à 22 % des personnes diabétiques ont une IC (risque x2 à x4) et une maladie coronaire doit être recherchée ; l'ADA 2026 recommande un agoniste GLP-1 prouvé en cas de maladie artérielle établie (**grade A**) mais pas pour traiter une FEVG réduite (SOUL : HR 0,98 chez 592 patients diabétiques ICFER sous sémaglutide oral ; voir *Médicaments GLP-1 et incrétines*) ; éviter sels de régime au potassium, compléments de potassium et AINS, et réserver les restrictions strictes en sel/liquides aux surcharges manifestes (voir *Sel et apports hydriques dans l'insuffisance cardiaque*). Pour la **chirurgie bariatrique**, les sources divergent (ADA 2022 plus ouverte sur données observationnelles vs HFA 2025 soulignant une mortalité intrahospitalière ~3 fois supérieure en ICFER et ESC 2026 Classe IIb dès IMC ≥ 35). Le dépistage annuel par NT-proBNP vise à détecter une IC méconnue et ne s'applique pas une fois le diagnostic posé.

### Apnée du sommeil

Selon **ESC 2026**, les troubles respiratoires du sommeil touchent plus d'un tiers des patients insuffisants cardiaques et justifient une étude du sommeil pour distinguer apnée obstructive (SAOS) et centrale (SACS). La servo-ventilation adaptative (ASV) est **non recommandée** dans l'ICFER avec apnée majoritairement centrale (**Classe III, A**) en raison de la surmortalité dans SERVE-HF. **Fiche complète :** *Apnée du sommeil et insuffisance cardiaque*.`,
    },
    {
      headingFr: 'Goutte, BPCO, thyroïde, anémie non ferriprive, AOMI, fragilité et cognition',
      bodyMarkdownFr: `**Fiche complète :** *Goutte, BPCO, thyroïde, anémie non ferriprive, AOMI, fragilité et cognition*. En bref :

- **Goutte et hyperuricémie :** les diurétiques de l'anse et thiazidiques élèvent l'acide urique, tandis que les **iSGLT2** l'abaissent et ont réduit de **32 %** les événements de goutte dans EMPEROR-Reduced (**HR 0,68**) et divisé par deux les nouveaux traitements hypo-uricémiants dans DAPA-HF. Les AINS étant contre-indiqués et les corticoïdes oraux exposant à la rétention hydrique, les crises aiguës reposent sur une infiltration articulaire ou une **colchicine** à faible dose rigoureusement contrôlée (contre-indiquée sous 30 mL/min de DFGe en France ; interactions CYP3A4/P-gp avec statines, amiodarone et clarithromycine). En traitement de fond, l'**allopurinol** (*Zyloric*) reste privilégié devant le **fébuxostat** (*Adenuric* ; signal de décès CV HR 1,34 dans CARES ayant maintenu l'avertissement encadré FDA ; essai FAST rassurant mais excluant l'IC sévère), et l'hyperuricémie asymptomatique n'est **pas** traitée (EXACT-HF et ALL-HEART neutres).
- **BPCO et asthme :** les **bêtabloquants cardiosélectifs** (bisoprolol — *Cardensiel*, métoprolol succinate — *Selozok*, nébivolol — *Temerit*) ne sont **pas** contre-indiqués dans la BPCO (méta-analyse Cochrane Salpeter ; GOLD ; BLOCK COPD excluait l'ICFER et n'écarte que la prescription hors indication cardiaque), alors que l'asthme requiert une prudence spécialisée. Les bronchodilatateurs inhalés de fond (LAMA/LABA) ont une sécurité cardiovasculaire rassurante (SUMMIT, TIOSPIR).
- **Thyroïde et amiodarone :** hypo- et hyperthyroïdie déstabilisent l'IC ou déclenchent la FA, justifiant un dosage régulier de la TSH ; la lévothyroxine (*Levothyrox*) est instaurée à faible dose et augmentée lentement en cas de maladie coronaire. L'**amiodarone** (*Cordarone*) provoque fréquemment une hypothyroïdie (habituellement traitée par lévothyroxine en poursuivant l'amiodarone) ou une hyperthyroïdie (types 1 et 2 pris en charge conjointement par cardiologue et endocrinologue selon ETA 2018 ; voir *Arythmies ventriculaires et antiarythmiques*).
- **Anémie non ferriprive :** dans **RED-HF** (2 278 patients ICFER, ~71 % coronariens), la darbépoétine alfa (*Aranesp*) n'a apporté **aucun bénéfice (HR 1,01)** et a augmenté les thromboembolies (**13,5 % contre 10,0 %**) et les AVC (Classe III / Danger). Une hémoglobine basse impose de rechercher carence en fer, saignement digestif occulte, déficit en vitamine B12/folates, maladie rénale et trouble thyroïdien.
- **AOMI, fragilité et cognition :** l'**AOMI** affichait le risque de mortalité ajusté le plus élevé dans Dewan 2023 (**HR 1,39**) ; le rivaroxaban vasculaire 2,5 mg deux fois par jour + aspirine comporte la limite de **COMPASS** (FEVG < 30 % et NYHA III–IV exclus ; sous-groupe FEVG < 40 % HR 0,88 [0,55–1,42]). La **fragilité** couvre quatre domaines HFA (clinique, physique-fonctionnel, psycho-cognitif, social) et répond particulièrement bien à la réadaptation multidomaine (**REHAB-HF**, +2,1 points SPPB chez les patients fragiles). Les **troubles cognitifs** concernent environ **43 %** des patients IC (Cannon 2017, OR 1,67), rendant piluliers, plans écrits et soutien familial ou infirmier très utiles.`,
    },
  ],
  relatedArticleSlugs: [
    'maladie-renale-insuffisance-cardiaque',
    'fibrillation-atriale-insuffisance-cardiaque',
    'fuite-mitrale-secondaire',
    'diabete-insuffisance-cardiaque',
    'goutte-bpco-thyroide-et-autres-comorbidites',
    'stenose-aortique-fevg-reduite',
    'tension-arterielle-insuffisance-cardiaque',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'ventricule-droit-et-hypertension-pulmonaire',
    'carence-martiale-et-fer-iv',
    'poids-obesite-et-denutrition',
    'arythmies-ventriculaires-et-antiarythmiques',
    'tabac-et-alcool-insuffisance-cardiaque',
    'comprendre-le-diagnostic',
    'medicaments-insuffisance-cardiaque',
    'medicaments-effets-secondaires-suivi',
    'finerenone-et-nouveaux-arm',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'medicaments-glp1-et-incretines',
    'thrombus-vg-et-anticoagulants',
    'cholesterol-et-prevention-secondaire',
    'nutrition-et-complements-insuffisance-cardiaque',
    'sel-et-liquides-insuffisance-cardiaque',
    'automesure-tensionnelle-domicile',
    'montres-connectees-et-capteurs-ic',
    'examens-et-chiffres',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
  ],
  sources: [
    { label: 'Dewan et al. (2023)', detail: "Prévalence et mortalité ajustée des 10 grandes comorbidités chez 15 066 patients d'ICFER (PARADIGM-HF, ATMOSPHERE)" },
    { label: 'Beldhuis et al. (2022), DIAMOND, Ahmed (2006), ESC 2026 et FINE-HEART (Nat Med 2024)', detail: 'Maladie rénale chronique, hyperkaliémie, finérénone dans le DT2 avec MRC et digoxine' },
    { label: 'ESC 2024 FA, CASTLE-HTx (2023), Oraii (2024) et consensus EHRA/HRS (2024)', detail: 'Score CHA₂DS₂-VA, AOD, contrôle fréquence/rythme et ablation dans l’ICFER' },
    { label: 'ESC/EACTS 2025 valvulopathies, COAPT, RESHAPE-HF2, Lancellotti (2024) et CTSN', detail: 'Fuite mitrale secondaire, fuite tricuspide et rétrécissement aortique bas débit' },
    { label: 'ESC 2023 diabète, Petrie (2020), Anker (2021), ADA 2022/2026, SOUL (2026) et HFA 2025 obésité', detail: 'iSGLT2 avec ou sans diabète, classes d’antidiabétiques, GLP-1, potassium et chirurgie bariatrique' },
    { label: 'ESC 2026 (tension artérielle et sommeil) et ACC/AHA/HFSA 2022', detail: 'Pression artérielle dans l’ICFER, dépistage du sommeil et contre-indication de l’ASV dans le SACS' },
    { label: 'CARES, FAST, EXACT-HF, ALL-HEART, EMPEROR/DAPA acide urique, RCP FDA/ANSM, RED-HF, BLOCK COPD, SUMMIT, TIOSPIR, Kannan (2018), ETA (2018), COMPASS, REHAB-HF et Cannon (2017)', detail: 'Synthèse des six comorbidités additionnelles : goutte, BPCO, thyroïde, anémie non ferriprive, AOMI, fragilité et cognition' },
  ],
  disclaimerType: 'medical',
};
