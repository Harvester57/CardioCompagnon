import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'magnesium-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/concepts/magnesium-in-heart-failure.md',
  titleFr: 'Magnésium et insuffisance cardiaque : formes et supplémentation',
  category: 'nutrition',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'magnésium',
    'compléments',
    'micronutriments',
    'électrolytes',
    'carence',
    'biodisponibilité',
    'hypermagnésémie',
    'interactions',
    'insuffisance-cardiaque',
  ],
  aliases: [
    'Magnésium',
    'Mg',
    'Compléments de magnésium',
    'Formes de magnésium',
    'Citrate de magnésium',
    'Oxyde de magnésium',
    'Glycinate de magnésium',
    'Bisglycinate de magnésium',
    'Thréonate de magnésium',
    'Orotate de magnésium',
    'Magné B6',
    'Mag 2',
    'Hypomagnésémie',
    'Hypermagnésémie',
  ],
  linkedModules: ['core', 'ckd'],
  plainSummaryFr:
    "Le magnésium est un minéral essentiel au cœur et aux muscles, que les diurétiques (comme le furosémide — Lasilix) ou les médicaments anti-acide au long cours peuvent faire baisser. Toutefois, aucun complément de magnésium n'a démontré dans un essai randomisé solide qu'il améliore la survie, les hospitalisations ou la fonction cardiaque dans l'ICFER. Dans la vaste cohorte GALACTIC-HF (FEVG ≤ 35 %), un magnésium bas (17,6 % des patients) n'était pas associé à un moins bon pronostic, contrairement à un magnésium élevé. Dans une cohorte américaine de vétérans insuffisants cardiaques (observationnelle), débuter du magnésium oral était associé à légèrement moins d'événements lorsque le taux sanguin était bas (HR 0,91), mais à légèrement plus lorsque le taux était normal (HR 1,11) : cela plaide pour un dosage préalable plutôt qu'une prise « au cas où ». Les différentes formes (oxyde, citrate, bisglycinate, thréonate, etc.) diffèrent surtout par leur teneur par comprimé et leur tolérance digestive, sans preuve de supériorité cardiaque. Le principal risque est l'accumulation en cas d'insuffisance rénale, ainsi que certaines interactions médicamenteuses (antibiotiques, bisphosphonates, rosuvastatine avec les antiacides). Parlez toujours à votre équipe avant de prendre du magnésium.",
  sections: [
    {
      headingFr: 'Verdict en un coup d’œil',
      bodyMarkdownFr: `| Question | Réponse | Confiance |
|---|---|---|
| Le magnésium améliore-t-il l'insuffisance cardiaque ? | **Aucune preuve solide** (un seul minuscule essai ancien, MACH, jamais répliqué) | Faible |
| Un magnésium bas est-il fréquent dans l'ICFER ? | Oui, environ 1 patient ambulatoire sur 6 (17,6 %) dans GALACTIC-HF | Élevée (grande cohorte) |
| Un magnésium bas prédit-il un moins bon pronostic ? | Non dans GALACTIC-HF (taux non ajustés, résumé seul) ; lien faible dans les méta-analyses observationnelles | Moyenne-faible |
| Prendre du magnésium oral est-il associé à de meilleurs résultats ? | Uniquement lorsque le taux sanguin est bas (vétérans US : HR 0,91 ; HR 0,81 si très bas) ; avec un taux normal, lié à **davantage** d'événements (HR 1,11). Données observationnelles | Faible-moyenne |
| Un magnésium élevé prédit-il un moins bon pronostic ? | Oui, de façon constante (reflète probablement la fonction rénale et la sévérité) | Moyenne |
| Le magnésium fait-il baisser la tension artérielle ? | Légèrement (environ 3/2 mmHg), surtout en cas de carence ou d'hypertension | Moyenne |
| La forme chimique compte-t-elle ? | Pour la teneur par comprimé, la dissolution et les effets digestifs, oui ; pour les événements cardiaques, inconnu | Faible-moyenne |
| **Verdict de synthèse** | **Doser puis corriger une carence avérée avec votre équipe ; non étayé comme traitement cardiaque ni « au cas où » avec un taux normal** | — |

Le magnésium rejoint ainsi la thiamine et la vitamine D : on traite une carence documentée, pas l'insuffisance cardiaque elle-même. Les recommandations américaines (**AHA/ACC/HFSA 2022**) déconseillent les compléments dans l'ICFER sauf pour corriger une carence spécifique (**Classe 3 : Absence de bénéfice**).`,
    },
    {
      headingFr: 'Ce que montrent les études dans l’insuffisance cardiaque',
      bodyMarkdownFr: `### Pourquoi le magnésium est surveillé

- **Médicaments en cause :** les diurétiques de l'anse (furosémide — *Lasilix*, bumétanide — *Burinex*) et thiazidiques augmentent la perte urinaire de magnésium, et les **inhibiteurs de la pompe à protons (IPP)** pris plus d'un an peuvent aussi l'abaisser. À l'inverse, les diurétiques épargneurs de potassium tels que la spironolactone (*Aldactone*) réduisent cette perte (**NIH ODS**).
- **Conséquences d'une carence sévère :** troubles du rythme cardiaque, spasme coronaire, crampes, hypokaliémie ou hypocalcémie. Une hypomagnésémie (comme une hypokaliémie) accroît le risque de **toxicité à la digoxine**.
- **Limite du dosage sanguin :** moins de 1 % du magnésium corporel se trouve dans le sang, de sorte qu'une magnésémie normale n'exclut pas des réserves basses ; il n'existe toutefois pas de meilleur examen de routine (**NIH ODS**).

### Magnésémie et pronostic dans l'ICFER : GALACTIC-HF (2026) et Khraisat (2026)

Dans **GALACTIC-HF** (**Chimura 2026**, 6 147 patients ambulatoires avec **FEVG ≤ 35 %**) :

| Magnésémie initiale | Proportion | Aggravation IC ou décès CV (pour 100 patients-années) |
|---|---|---|
| **Basse (< 0,75 mmol/L)** | **17,6 %** | 21,5 |
| **Normale** | 71,7 % | 20,9 |
| **Élevée (> 0,95 mmol/L)** | 10,7 % | **34,9** |

- La mort subite et les arythmies ventriculaires **ne différaient pas** entre les groupes.
- Les auteurs concluent que ces résultats **ne justifient pas la correction systématique d'un magnésium bas** (limites : analyse observationnelle en résumé seul, sans taux ajustés ni sous-groupe ischémique ; l'hypermagnésémie reflète probablement une fonction rénale diminuée et une maladie plus sévère).
- **Khraisat (2026)** (méta-analyse de 12 études observationnelles, **648 602 patients IC**) retrouve le même profil : un magnésium élevé s'associait à la mortalité toutes causes (**RR 1,38** ; IC 95 % 1,32–1,44), au décès cardiovasculaire (RR 1,41) et aux hospitalisations IC (RR 1,30), alors qu'un magnésium bas n'avait qu'un lien faible avec la mortalité (RR 1,15 ; 1,01–1,31) et aucun lien avec les décès CV ni les hospitalisations IC.

### Supplémentation orale : cohortes américaines de vétérans (2025–2026)

- **Yin (2026, *European Heart Journal*) :** cohorte appariée par score de propension chez des vétérans américains atteints d'IC (financement public NHLBI, NIH ODS, VA). Chez les patients ayant une magnésémie **basse** (< 1,7 mg/dL, soit ~0,70 mmol/L), débuter du magnésium oral (médiane 420 mg/j) était associé à moins d'hospitalisations IC ou décès à 1 an : 20,1 % contre 21,7 % (**HR 0,91** ; IC 95 % 0,86–0,97 ; signal le plus net en dessous de 1,3 mg/dL avec **HR 0,81** ; nul à 1,6 mg/dL avec HR 0,99). En revanche, lorsque le taux initial était **normal**, la supplémentation était associée à **davantage d'événements** : 19,5 % contre 17,8 % (**HR 1,11** ; IC 95 % 1,02–1,21).
- **Cheng (2025, *Nutrients*) :** chez des vétérans nouvellement diagnostiqués IC, la prise de magnésium sans ordonnance était liée à un HR de 0,81 (0,77–0,86), ramené à HR 0,91 en excluant les décès précoces (signe probable de biais d'utilisateur en meilleure santé ; seuls 26 % avaient une FEVG connue ≤ 40 %, sans dose ni sel précisés).
- **Lecture conjointe avec GALACTIC-HF :** toutes ces données sont observationnelles (pas d'essai randomisé), mais le message pratique converge : **vérifier le taux sanguin avant toute supplémentation**, et ne pas prendre de magnésium sans carence.

### Essais randomisés et études mécanistiques

- **Seul essai oral sur la survie — MACH (orotate de magnésium) :** 79 patients en **classe NYHA IV** à Moscou, en double aveugle (6 000 mg/j de sel pendant 1 mois puis 3 000 mg/j pendant environ 1 an) : survie à 1 an **75,7 % contre 51,6 %** (p < 0,05) et amélioration des symptômes chez 38,5 % contre aggravation chez 56,3 % sous placebo. Son poids scientifique est très faible : effectif minuscule, monocentrique, publié sous forme de lettre, **jamais répliqué**, sans FEVG, ni cause, ni magnésémie initiale, ni dose de magnésium élémentaire, ni traitement de fond moderne décrits dans le résumé.
- **Petites études mécanistiques :**
  - **Bashir (1993, Royaume-Uni) :** essai croisé en double aveugle chez 21 patients atteints d'IC coronaire sous diurétiques de l'anse (fonction rénale normale), recevant du chlorure de magnésium gastrorésistant (15,8 mmol/j, soit ~380 mg/j élémentaire pendant 6 semaines) : magnésémie passée de 0,87 à 0,92 mmol/L, baisse des extrasystoles isolées (-23 %), des doublets (-52 %) et des salves de TV non soutenue (-24 %), sans mesure d'événements cliniques.
  - **Almoznino-Sarafian (2009, Israël) :** 32 patients en IC systolique à magnésémie normale (citrate 300 mg/j pendant 5 semaines contre témoins non traités, qualité très faible) : légère hausse d'un score de variabilité cardiaque (3,47 à 3,94), alors que la magnésémie augmentait aussi chez les témoins.
- **Essai enregistré :** un essai israélien de phase 3 (**NCT03840226**) a été enregistré avec de l'oxyde de magnésium (520 mg/j élémentaire sur 1 an chez ~320 patients NYHA II–IV sous diurétiques, critères marche et qualité de vie), mais son statut est inconnu (dernière mise à jour décembre 2023, aucun résultat publié).`,
    },
    {
      headingFr: 'Effet sur la tension artérielle',
      bodyMarkdownFr: `- **Argeros (2025) :** méta-analyse de 38 essais randomisés (2 709 adultes, médiane 365 mg/j de magnésium élémentaire pendant 4 à 24 semaines) montrant une baisse moyenne de **-2,81 mmHg** pour la systolique et **-2,05 mmHg** pour la diastolique, avec forte hétérogénéité. L'effet était plus marqué chez les hypertendus traités (-7,68 mmHg) et les personnes carencées (-5,97 mmHg), mais **absent lorsque la tension est normale**. Aucun essai ne portait sur l'IC ni sur des événements cardiovasculaires.
- **An (2022, *JACC*) :** baisse systolique estimée à -4,91 mmHg (certitude faible), sans aucune donnée sur les événements cliniques.
- **Dans l'ICFER :** la tension artérielle est souvent déjà basse sous les quatre traitements de fond ; rechercher un effet hypotenseur par un complément de magnésium n'est donc pas un objectif.`,
    },
    {
      headingFr: 'Les différentes formes de magnésium comparées',
      bodyMarkdownFr: `### Ce qui change concrètement d'une forme à l'autre

1. **La quantité de magnésium élémentaire par comprimé :** le poids du sel est souvent beaucoup plus élevé que le magnésium réellement apporté.
2. **La solubilité et l'absorption :** les sels plus solubles sont un peu mieux absorbés, mais les écarts restent modestes dans les études humaines (**NIH ODS** ; **Merschmann 2025**, 14 petites études chez des adultes sains, médiane ~14 participants).
3. **La tolérance digestive :** le magnésium non absorbé attire l'eau dans l'intestin ; le carbonate, le chlorure, le gluconate et l'oxyde sont les plus souvent associés à des diarrhées (**NIH ODS**).
4. **La dose compte plus que le sel :** plus la dose prise d'un coup est élevée, plus le pourcentage absorbé par l'intestin diminue.

### Comparaison des principales formes

| Forme | Magnésium élémentaire (approx.) | Preuves d'absorption chez l'humain | Remarques |
|---|---|---|---|
| **Oxyde** | ~60 % | **Généralement la plus faible** (~4 % d'absorption nette contre 9 à 11 % pour chlorure, lactate, aspartate dans une étude de 16 sujets ; **Merschmann 2025**) | Plus concentré par comprimé ; effet laxatif fréquent |
| **Hydroxyde / Carbonate** | ~42 % / ~29 % | Non différents du chlorure dans certaines comparaisons (**Merschmann 2025**) | Antiacides, effet laxatif / diarrhées fréquent |
| **Citrate** | ~16 % | **Légèrement supérieure à l'oxyde** dans plusieurs petits essais (excrétion urinaire 24 h : 7,2 contre 6,7 mmol ; **Merschmann 2025**) | Courant ; laxatif à forte dose |
| **Chlorure** | ~12 % | Meilleure que l'oxyde (**Merschmann 2025**) | Diarrhées rapportées |
| **Lactate** | ~10 % (notice *Magné B6*) | Meilleure que l'oxyde (**Merschmann 2025** ; **NIH ODS**) | Sel principal de *Magné B6* en France |
| **Aspartate** | Variable | Meilleure que l'oxyde (**Merschmann 2025** ; **NIH ODS**) | Absent de la liste UE Annexe II de 2020 |
| **Sulfate** | ~10 % | Moins biodisponible que citrate, lactate, chlorure (**NIH ODS**) | Utilisé par voie **IV à l'hôpital** (ex. torsades de pointes) |
| **Glycinate / bisglycinate** | ~14 % (souvent tamponné avec de l'oxyde) | **Aucun avantage net démontré :** absorption isotopique identique à l'oxyde chez 12 patients opérés de l'intestin (23,5 % contre 22,8 % ; **Schuette 1994**), pas de hausse plasmatique significative sur 40 sujets (**Pajuelo 2024**) | Mieux toléré sur le plan digestif que l'oxyde |
| **Malate** | ~15–16 % | **Aucune donnée humaine** (classements issus d'une étude chez le rat ; **Vormann 2026**) | Allégations énergie/fatigue non testées |
| **Taurate / acétyltaurate** | Variable | **Aucune donnée humaine** (données rongeurs uniquement ; **Vormann 2026**) | Allégations cardiaques non démontrées |
| **L-thréonate** | ~8 % | **Très minces :** autorisé dans l'UE en novembre 2025 (Règl. 2025/2225) sur un seul essai non publié du demandeur (51 sujets, sans comparaison à d'autres sels ; **EFSA 2024**) | Allégations cérébrales issues surtout du rat (**Vormann 2026**) |
| **Orotate** | Variable | **Aucune donnée d'absorption humaine** (**Vormann 2026**) | Forme de l'essai MACH (trop fragile) ; hors liste UE consultée |
| **Pidolate / Glycérophosphate** | ~8 % (*Mag 2*) / ~12,5 % | Pas de comparaison directe disponible | Courants dans les spécialités françaises |
| **Magnésium « marin »** | Selon le sel présent | Aucune spécifique | Pas une substance réglementaire distincte ; composition variable |
| **Formes microencapsulées / sucrosomiales** | Variable | **Uniquement financées par les fabricants :** l'oxyde microencapsulé (MAGSHAPE, 40 sujets) a élevé le Mg plasmatique de 10,3 % à 6 h contre l'oxyde simple, mais l'exposition totale (AUC) ne différait pas de l'oxyde, du citrate ou du bisglycinate (**Pajuelo 2024**) | Coût plus élevé sans preuve clinique |

Une fois dissous, le magnésium est absorbé sous forme d'ion minéral libre : aucune forme n'a démontré chez l'humain qu'elle ciblait spécifiquement le cœur ou le cerveau (**Vormann 2026**). Les formes dites « premium » coûtent plus cher sans bénéfice prouvé.

### Spécialités françaises combinant magnésium et vitamine B6 (*Magné B6*, *Mag 2*)

- ***Magné B6* (lactate de magnésium + pyridoxine) :** chaque comprimé apporte 470 mg de lactate de magnésium = **48 mg de magnésium élémentaire + 5 mg de vitamine B6**. La posologie adulte de la notice (6 à 8 comprimés/j) atteint 288 à 384 mg de magnésium et **30 à 40 mg/j de vitamine B6** — très au-dessus de la limite supérieure européenne de **12 mg/j** pour la B6 (risque de neuropathie au long cours ; voir la fiche *Vitamines B et insuffisance cardiaque*). Ce produit est vendu sans ordonnance, non remboursé, et son service médical rendu (SMR) a été jugé insuffisant par la HAS en 2008.
- ***Mag 2* ampoules (pidolate de magnésium) :** 122 mg de magnésium élémentaire par ampoule (sans vitamine B6).`,
    },
    {
      headingFr: 'Limites de sécurité, fonction rénale et interactions médicamenteuses',
      bodyMarkdownFr: `### Limites supérieures pour les compléments et médicaments (hors alimentation)

| Autorité | Limite supérieure quotidienne |
|---|---|
| **Union européenne (EFSA / SCF 2001, maintenue en 2025)** | **250 mg/j** chez l'adulte |
| **États-Unis (NIH ODS)** | **350 mg/j** dès 9 ans |

### Hypermagnésémie et reins : le point de vigilance principal

- Les reins éliminent l'excès de magnésium : **le risque d'accumulation (hypermagnésémie) augmente dès que la fonction rénale diminue**. En France, les notices de *Magné B6* et *Mag 2* contre-indiquent ces spécialités lorsque la clairance de la créatinine est **inférieure à 30 mL/min**.
- **Seuils biologiques et signes (Aal-Hamad 2023) :** une magnésémie normale se situe autour de **0,7 à 1,0 mmol/L**. Des symptômes non spécifiques apparaissent au-dessus de **2,2 mmol/L** ; disparition des réflexes et baisse de tension au-dessus de **3,5 mmol/L** ; anomalies ECG et paralysie au-dessus de **6,5 mmol/L** ; coma et arrêt cardiaque au-dessus de **8,7 mmol/L**.
- Dans une cohorte de 2 176 personnes prenant de l'oxyde de magnésium quotidiennement, l'hypermagnésémie était associée à l'insuffisance rénale chronique de stade 4, aux doses supérieures à **1 000 mg/j** et aux laxatifs stimulants (**Aal-Hamad 2023**).
- Les **IEC** et les **AINS** diminuent l'élimination rénale du magnésium (**Aal-Hamad 2023**). Par ailleurs, les **iSGLT2** (comme la dapagliflozine — *Forxiga* ou l'empagliflozine — *Jardiance*) élèvent légèrement la magnésémie (environ +0,07 mmol/L dans 25 essais chez des patients diabétiques).

### Interactions avec vos médicaments

| Médicament ou classe | Interaction décrite |
|---|---|
| **Diurétiques de l'anse et thiazidiques** | Augmentent la perte urinaire de magnésium |
| **IPP au long cours (> 1 an)** | Peuvent abaisser la magnésémie (parfois difficile à corriger par de simples compléments) |
| **Spironolactone (*Aldactone*) / épargneurs de potassium** | Réduisent la perte urinaire de magnésium |
| **IEC et AINS** | Réduisent l'excrétion rénale de magnésium |
| **Digoxine** | Une hypomagnésémie majore le risque de toxicité digitalique |
| **Rosuvastatine (*Crestor*) avec antiacides aluminium/magnésium** | La prise simultanée divise environ par deux l'exposition à la rosuvastatine (ratio AUC 0,52 ; ~0,8 à 2 h d'écart) : la notice américaine conseille de prendre la rosuvastatine **au moins 2 heures avant** l'antiacide (les compléments simples de magnésium n'ont pas été testés de la même manière) |
| **Antibiotiques (tétracyclines, fluoroquinolones)** | Le magnésium se lie à ces antibiotiques dans l'intestin : espacer les prises |
| **Bisphosphonates oraux (ostéoporose)** | Réduction d'absorption : espacer d'au moins **2 heures** |
| **Lévodopa seule (sans inhibiteur de la décarboxylase)** | Contre-indiquée avec *Magné B6* (en raison de la vitamine B6) |

Aucune interaction avec les antiacides ou le magnésium ne figure dans les notices européennes du sacubitril/valsartan (*Entresto*) ou de la dapagliflozine (*Forxiga*). En raison des liens entre magnésium, fonction rénale, digoxine et traitements du potassium, toute décision de dosage ou de supplémentation appartient à votre cardiologue, votre médecin traitant ou votre pharmacien.`,
    },
    {
      headingFr: 'Recommandations et repères pratiques',
      bodyMarkdownFr: `### Ce que disent les recommandations internationales

- **AHA/ACC/HFSA 2022 (IC) :** pas de compléments dans l'ICFER hors correction d'une carence spécifique (**Classe 3 : Absence de bénéfice**). Le bilan électrolytique de routine inclut le magnésium (Classe 1, C-EO), et le texte mentionne que le chélateur du potassium **patiromer** peut abaisser la magnésémie.
- **ESC 2022 (arythmies ventriculaires) :** l'hypomagnésémie et l'hypokaliémie favorisent les **torsades de pointes** ; le **magnésium intraveineux associé au potassium** est recommandé dans les torsades de pointes (**Classe I, niveau C**), même si la magnésémie est normale. Une hypomagnésémie et l'IC figurent parmi les facteurs de risque à vérifier avant d'introduire un médicament allongeant l'intervalle QT. Aucun objectif chiffré de magnésémie n'est fixé.
- **ESC IC 2021 / 2023 :** aucune mention du magnésium dans le texte (le texte ESC 2026 n'a pas pu être vérifié spécifiquement sur ce point). Les recommandations **ESC 2024 (fibrillation atriale)** précisent qu'il n'existe pas de preuve que le magnésium prévienne la FA après chirurgie.

### À retenir en pratique

- Le magnésium n'est **pas un traitement de l'insuffisance cardiaque**.
- Si vous prenez un diurétique de l'anse, un IPP depuis plus d'un an, de la digoxine, un médicament allongeant le QT, ou si vous avez des crampes ou des palpitations, demandez à votre médecin si un **dosage sanguin** est utile.
- **Ne débutez pas de magnésium « au cas où »** sans connaître votre taux sanguin ni votre fonction rénale (créatinine / DFGe).
- Si votre équipe décide de corriger une carence documentée, le choix de la forme dépend surtout de la tolérance digestive et de la dose par comprimé (évitez les surdosages en vitamine B6 cachés dans certains produits magnésium-B6 et respectez les espacements avec vos autres médicaments).`,
    },
  ],
  relatedArticleSlugs: [
    'nutrition-et-complements-insuffisance-cardiaque',
    'tableau-preuves-nutrition-complements',
    'interactions-complements-aliments-medicaments',
    'vitamines-b-insuffisance-cardiaque',
    'vitamine-d-insuffisance-cardiaque',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'medicaments-effets-secondaires-suivi',
    'tension-arterielle-insuffisance-cardiaque',
    'essais-cliniques-en-cours-et-a-suivre',
  ],
  sources: [
    {
      label: 'Chimura et al. (2026, GALACTIC-HF) et Khraisat et al. (2026)',
      detail: 'Magnésémie initiale et pronostic chez 6 147 patients ICFER (FEVG ≤ 35 %, 17,6 % de Mg bas, surrisque en cas de Mg élevé) ; méta-analyse de 12 études observationnelles (648 602 patients IC).',
    },
    {
      label: 'Yin et al. (2026, European Heart Journal) et Cheng et al. (2025, Nutrients)',
      detail: 'Cohortes observationnelles de vétérans américains atteints d’IC : supplémentation orale liée à HR 0,91 si magnésémie basse mais HR 1,11 si magnésémie normale.',
    },
    {
      label: 'Essai MACH (orotate de magnésium), Bashir (1993) et Almoznino-Sarafian (2009)',
      detail: 'Seul essai oral de survie dans l’IC (79 patients NYHA IV, non répliqué) et petites études mécanistiques sur les extrasystoles et la variabilité de fréquence cardiaque.',
    },
    {
      label: 'Argeros et al. (2025), Merschmann et al. (2025), Vormann (2026), Pajuelo (2024) et avis EFSA 2024 (L-thréonate)',
      detail: 'Méta-analyse tension artérielle (38 essais), revue de biodisponibilité humaine des sels de magnésium, limites des formes « premium » et évaluation réglementaire du L-thréonate.',
    },
    {
      label: 'NIH ODS, EFSA (limites supérieures), Aal-Hamad (2023), AHA/ACC/HFSA 2022 et ESC 2022 (arythmies ventriculaires)',
      detail: 'Limites 250 mg/j (UE) et 350 mg/j (É.-U.), seuils d’hypermagnésémie et insuffisance rénale, notices françaises (Magné B6, Mag 2), interactions (rosuvastatine, antibiotiques, bisphosphonates, digoxine) et recommandations.',
    },
  ],
  disclaimerType: 'medical',
};
