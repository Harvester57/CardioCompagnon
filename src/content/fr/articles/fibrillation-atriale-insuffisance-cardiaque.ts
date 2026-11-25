import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'fibrillation-atriale-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/concepts/atrial-fibrillation-in-heart-failure.md',
  titleFr: 'Fibrillation atriale et insuffisance cardiaque',
  category: 'comorbidites',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'fibrillation-atriale',
    'fa',
    'ablation-par-cathéter',
    'contrôle-fréquence',
    'contrôle-rythme',
    'anticoagulation',
    'cha2ds2-va',
    'castle-af',
    'digoxine',
    'crt',
    'comorbidités',
  ],
  aliases: [
    'Fibrillation atriale',
    'Fibrillation auriculaire',
    'FA',
    'AF',
    'Rythme irrégulier',
    'Ablation de FA',
    'Isolation des veines pulmonaires',
    'CHA2DS2-VA',
    'Ablate and pace',
    'CASTLE-AF',
    'APAF-CRT',
  ],
  linkedModules: ['atrialFibrillation'],
  plainSummaryFr:
    "Dans la fibrillation atriale (FA), les cavités supérieures du cœur (les oreillettes) tremblotent au lieu de se contracter régulièrement, rendant le pouls irrégulier et souvent rapide. Un cœur affaibli et dilaté étire les oreillettes et favorise la FA, qui peut à son tour déstabiliser l'insuffisance cardiaque. La FA augmente le risque d'accident vasculaire cérébral (AVC) : avec une cardiomyopathie ischémique et une FEVG ≤ 40 %, le score européen CHA₂DS₂-VA atteint déjà 2 points, ce qui conduit habituellement à proposer un anticoagulant oral (de préférence un anticoagulant oral direct, AOD) en cas de FA. Deux grandes stratégies existent et se complètent souvent : ralentir la fréquence cardiaque (bêtabloquants et/ou digoxine ; diltiazem et vérapamil sont contre-indiqués) ou tenter de restaurer un rythme normal (amiodarone ou ablation par cathéter). L'ablation a réduit la mortalité (RR 0,63) et les événements d'IC (RR 0,59) dans une méta-analyse d'essais d'ICFER, mais chez des patients sélectionnés, souvent non ischémiques, et la présence de cicatrice coronaire prédit une récupération moindre de la FEVG. Dans la FA permanente à QRS fin résistante aux médicaments, l'ablation du nœud auriculo-ventriculaire associée à une CRT a réduit la mortalité dans APAF-CRT.",
  sections: [
    {
      headingFr: 'Fréquence et interaction entre fibrillation atriale et ICFER',
      bodyMarkdownFr: `- **Une coexistence très fréquente :** sur 30 ans de suivi dans l'étude de Framingham, **57 %** des personnes développant une insuffisance cardiaque présentaient une FA, et **37 %** de celles développant une FA avaient une insuffisance cardiaque (recommandations ESC 2024 sur la FA).
- **Dans les essais d'ICFER (Dewan 2023, 15 066 patients) :** **23,5 %** présentaient une FA, associée à un risque modérément accru de décès (**HR ajusté 1,11**). L'association de la FA avec une maladie rénale chronique ou une maladie coronarienne comportait un surrisque supérieur à celui de chaque affection isolément (Dewan 2023).
- **Surrisque d'AVC et de décès :** chez les patients atteints de FA, la présence d'une insuffisance cardiaque double approximativement le taux d'AVC et augmente la mortalité d'environ **25 %**. Parmi toutes les combinaisons FA/IC, l'association FA + ICFER porte la mortalité la plus élevée (ESC 2024).
- **Nuance d'ajustement (DIGIT-HF) :** dans l'analyse de DIGIT-HF selon le statut de FA, les patients en FA étaient plus âgés et plus atteints ; une fois ces différences prises en compte, la FA elle-même ne prédisait plus d'issue plus défavorable (**HR 0,99**) (DIGIT-HF selon le statut FA).`,
    },
    {
      headingFr: 'Prévention des AVC : score CHA₂DS₂-VA et anticoagulants',
      bodyMarkdownFr: `Les recommandations **ESC 2024** utilisent le score **CHA₂DS₂-VA** (le sexe féminin ne compte plus comme point) :

| Critère | Points |
|---|---|
| **C** — Insuffisance cardiaque chronique (symptômes quelle que soit la FEVG, **ou** FEVG ≤ 40 % sans symptôme) | 1 |
| **H** — Hypertension artérielle | 1 |
| **A** — Âge ≥ 75 ans | 2 |
| **D** — Diabète | 1 |
| **S** — Antécédent d'AVC, d'AIT ou de thromboembolie | 2 |
| **V** — Maladie vasculaire (incluant infarctus du myocarde, angor, stents ou pontage coronaire) | 1 |
| **A** — Âge de 65 à 74 ans | 1 |

- **Seuils ESC 2024 :** à partir de **2 points**, l'anticoagulation est recommandée (**Classe I, C**) ; à **1 point**, elle doit être envisagée (**Classe IIa, C**).
- **Choix de l'anticoagulant :** les **anticoagulants oraux directs (AOD)** — apixaban (*Eliquis*), rivaroxaban (*Xarelto*), édoxaban (*Lixiana*), dabigatran (*Pradaxa*) — sont privilégiés par rapport aux antivitamines K / warfarine (*Coumadine*) (**Classe I, A**), avec une efficacité au moins égale et moitié moins d'hémorragies intracrâniennes. L'aspirine n'est **pas** une alternative pour prévenir l'AVC lié à la FA (**Classe III, A**). Le caractère intermittent (paroxystique) ou permanent de la FA ne doit pas décider de l'anticoagulation (**Classe III, B**) (ESC 2024).
- *Repère pratique :* d'après ces définitions, une cardiomyopathie ischémique avec FEVG ≤ 40 % atteint déjà au moins **2 points** (insuffisance cardiaque + maladie vasculaire). Pour les caillots intraventriculaires et les anticoagulants avec ou sans FA, voir *Thrombus du ventricule gauche et anticoagulants*.

### Traiter l'insuffisance cardiaque fait partie du traitement de la FA

- Les traitements de fond de l'insuffisance cardiaque sont recommandés en cas de FA avec FEVG altérée pour réduire les symptômes, les hospitalisations et les récidives de FA (**Classe I, B**). Les **iSGLT2** sont recommandés en cas d'IC avec FA quelle que soit la FEVG (**Classe I, A**), et les diurétiques en cas de congestion (**Classe I, C**) (ESC 2024).
- Le parcours européen **« AF-CARE »** place en premier la prise en charge des comorbidités et des facteurs de risque (pression artérielle, apnée du sommeil, poids, alcool, diabète) (ESC 2024).`,
    },
    {
      headingFr: 'Contrôle de la fréquence cardiaque et stratégie « ablate and pace »',
      bodyMarkdownFr: `- **Médicaments recommandés lorsque la FEVG est ≤ 40 % :** les **bêtabloquants** et/ou la **digoxine** (*Digoxine Nativelle*, *Hemigoxine*) (**Classe I, B**). Le **diltiazem** (*Tildiem*) et le **vérapamil** (*Isoptine*) sont **contre-indiqués** à ce niveau de FEVG. L'aténolol ne doit pas être utilisé dans l'ICFER (ESC 2024).
- **Objectif de fréquence :** une cible initiale souple de fréquence cardiaque de repos **inférieure à 110 battements par minute** est raisonnable en premier lieu (**Classe IIa, B**), avec un contrôle plus strict si des symptômes persistent ou si l'on suspecte que la FA contribue à affaiblir le muscle cardiaque (ESC 2024).
- **Bêtabloquants en cas de FA :** l'ESC 2024 souligne que le bénéfice de survie observé dans l'ICFER en rythme sinusal « peut ne pas être présent » en cas de FA (une analyse groupée n'a pas retrouvé de réduction de mortalité). Ils demeurent néanmoins un outil central du contrôle de fréquence (ESC 2024).
- **Essai RATE-AF** (160 patients, âge moyen 76 ans, FA permanente et essoufflement ; FEVG non précisée) : la digoxine à faible dose et le bisoprolol (*Cardensiel*) ont procuré la même qualité de vie à 6 mois et des fréquences cardiaques proches (environ 75–77 bpm). La digoxine s'accompagnait de moins d'effets indésirables (**25 % contre 64 %**) et d'une meilleure amélioration symptomatique sur une échelle. *Applicabilité indirecte :* cet essai ne démontre pas que la digoxine puisse remplacer un bêtabloquant dans l'ICFER, où ce dernier reste un pilier de fond (RATE-AF).
- **Digitoxine dans DIGIT-HF** (ICFER, FEVG médiane 30 %, environ la moitié de cause ischémique) : parmi les 27 % de participants en FA, la digitoxine était associée à moins de décès que le placebo (**HR 0,55**), mais il s'agissait d'une analyse post hoc et le critère principal ne différait pas selon la présence de FA (p d'interaction = 0,40) (DIGIT-HF selon le statut FA ; voir *Médicaments additionnels : ivabradine, digoxine/digitoxine et vériciguat*).
- L'**ivabradine** (*Procoralan*) est inefficace en cas de fibrillation atriale.

### Quand le contrôle de la fréquence échoue : « ablate and pace »

- Dans l'essai **APAF-CRT** (133 patients en FA permanente, QRS fin et au moins une hospitalisation pour IC), l'ablation du nœud auriculo-ventriculaire (jonction électrique entre oreillettes et ventricules) couplée à l'implantation d'un stimulateur de resynchronisation (**CRT**) a réduit la mortalité de **29 % à 11 %** par rapport aux médicaments ralentisseurs (**HR 0,26**, IC 95 % 0,10–0,65), avec un bénéfice similaire que la FEVG soit ≤ 35 % ou > 35 %. Cet essai était toutefois de petite taille, ouvert et arrêté précocement pour bénéfice (APAF-CRT).
- **ESC 2024 :** l'ablation du nœud auriculo-ventriculaire associée à une CRT doit être envisagée dans la FA permanente très symptomatique avec au moins une hospitalisation pour IC (**Classe IIa, B**). Cette stratégie rend la personne définitivement dépendante du stimulateur cardiaque (voir *Dispositifs cardiaques implantés : DAI et CRT*).`,
    },
    {
      headingFr: 'Contrôle du rythme : antiarythmiques, prise en charge précoce et ablation',
      bodyMarkdownFr: `### Médicaments antiarythmiques

- L'**amiodarone** (*Cordarone*) est le principal traitement médicamenteux pour maintenir un rythme sinusal dans l'ICFER (**Classe I, A**), au prix d'une surveillance régulière de la thyroïde, du foie, des poumons et des yeux. La **flécaïnide** (*Flécaïne*) et la **propafénone** (*Rythmol*) ne doivent pas être utilisées en cas de cœur affaibli ou de maladie coronaire ; les indications de la dronédarone (*Multaq*) excluent l'ICFER (ESC 2024).

### Contrôle précoce du rythme

- Dans la sous-analyse insuffisance cardiaque d'**EAST-AFNET 4** (798 patients ayant une IC et une FA diagnostiquée depuis moins d'un an), une stratégie précoce de contrôle du rythme (le plus souvent par médicaments) a diminué le critère combiné décès cardiovasculaire, AVC ou hospitalisation pour IC ou syndrome coronaire aigu (**5,7 contre 7,9 pour 100 patients-années**, **HR 0,74**, IC 95 % 0,56–0,97), sans surcroît de risque. Seuls **17 %** avaient toutefois une FEVG < 40 % (*applicabilité partielle*) (EAST-AFNET 4 IC).
- **ESC 2024 :** le contrôle du rythme dans les 12 mois suivant le diagnostic de FA doit être envisagé chez des patients sélectionnés (**Classe IIa, B**).

### Ablation par cathéter (isolation des veines pulmonaires)

L'ablation consiste à délivrer de la chaleur ou du froid par un cathéter monté dans l'oreillette gauche afin de bloquer les foyers électriques qui déclenchent la FA.

| Essai | Population | Résultat | Part ischémique |
|---|---|---|---|
| **CASTLE-AF** (NEJM 2018) | 363 patients, FEVG ≤ 35 %, NYHA II–IV, tous porteurs d'un DAI ou CRT-D | Décès ou hospitalisation IC : **28,5 % contre 44,6 % (HR 0,62)** | 46 % (tableau consensus) |
| **RAFT-AF** (Circulation 2022) | 411 patients, FEVG mixte (moyenne ~41 %) | Décès ou événements IC : 23,4 % contre 32,5 % (HR 0,71 ; 0,49–1,03), non significatif ; arrêt précoce pour futilité | 31 % |
| **CASTLE-HTx** (NEJM 2023) | 194 patients, IC terminale évaluée pour greffe, FEVG moyenne 25–29 %, monocentrique, ouvert | Décès, assistance circulatoire ou greffe urgente : **8 % contre 30 % (HR 0,24)** ; décès 6 % contre 20 % ; arrêt précoce | 39 % (61 % non ischémiques) |
| **AMICA** | FEVG moyenne ~26 % | Aucune différence sur le gain de FEVG (+8,8 contre +7,3 points) | 50 % |

Sources : CASTLE-AF ; RAFT-AF ; CASTLE-HTx ; consensus EHRA/HRS 2024.

- **Méta-analyse (Oraii 2024, 12 essais randomisés, 2 465 patients) :** dans l'ICFER, l'ablation a réduit la mortalité toutes causes (**RR 0,63**, IC 95 % 0,47–0,86), les événements d'IC (**RR 0,59**, IC 95 % 0,48–0,72) et la mortalité cardiovasculaire (**RR 0,49**), tout en augmentant la FEVG d'environ **6,5 points**. Aucun bénéfice net n'a été observé dans l'ICFEP (Oraii 2024).
- **Recommandations ESC 2024 :** l'ablation est recommandée lorsque la FA est probablement la cause de la faiblesse ventriculaire (cardiomyopathie rythmique, **Classe I, B**) et doit être envisagée chez des patients sélectionnés atteints d'ICFER afin de réduire les hospitalisations et prolonger la survie (**Classe IIa, B**). Les complications graves surviennent dans environ **3 à 7 %** des cas dans les études récentes, avec une mortalité à 30 jours inférieure à 0,1 % (ESC 2024).`,
    },
    {
      headingFr: 'Applicabilité à la cardiomyopathie ischémique et limites des preuves',
      bodyMarkdownFr: `### Que disent les données lorsque la cause est ischémique ?

- **Aucune des sources lues ne détaille séparément la mortalité ou les hospitalisations selon la cause ischémique ou non ischémique** (CASTLE-AF et RAFT-AF ont été consultés sous forme de résumés uniquement, ce qui n'exclut pas une analyse en sous-groupe dans leurs articles intégraux) (Oraii 2024 ; EHRA/HRS 2024 ; CASTLE-AF ; RAFT-AF).
- Les données disponibles selon l'étiologie portent sur la **récupération de la FEVG**, et sont moins favorables dans la cardiomyopathie ischémique :
  - le consensus **EHRA/HRS 2024** classe l'origine non ischémique et l'absence de cicatrice à l'IRM cardiaque parmi les prédicteurs de récupération de la FEVG, et la cause ischémique comme prédicteur de non-récupération ;
  - dans **AMICA** (moitié de patients ischémiques, FEVG très basse), l'ablation n'a pas fait mieux que les médicaments sur la FEVG ;
  - une méta-analyse présentée en congrès (**Landra 2026**, 913 patients avec FEVG ≤ 35 %, majoritairement observationnelle et non publiée en revue à comité de lecture) a observé un passage au-dessus de 35 % chez 72 % des patients après ablation, mais la cause ischémique diminuait sensiblement cette probabilité (Landra 2026).
- **CASTLE-AF**, principal essai positif autour de ce niveau de FEVG, incluait 46 % de patients ischémiques ; tous portaient un défibrillateur et l'essai était financé par le fabricant de matériel (CASTLE-AF).
- *Niveau d'applicabilité :* **partiel** pour une ICFER ischémique autour de 35 % de FEVG. Les essais ont recruté des patients très sélectionnés, en ouvert, avec plusieurs arrêts précoces ; le bénéfice peut être plus limité lorsque la faiblesse ventriculaire provient avant tout d'une cicatrice d'infarctus plutôt que de la FA elle-même.
- *Repère pratique :* lorsque la FA pourrait contribuer à la dysfonction (cardiomyopathie rythmique), l'intérêt du contrôle du rythme est le plus fort. Une **IRM cardiaque** précisant l'étendue de la cicatrice aide votre équipe à évaluer cette part (voir *Confirmer la cause de la dysfonction du ventricule gauche*).

### Limites des preuves

- Les résultats complets d'ablation stratifiés par cause ischémique vs non ischémique dans les textes intégraux de CASTLE-AF et RAFT-AF n'ont pas été vérifiés dans ce corpus.
- Les recommandations américaines ACC/AHA 2023 sur la FA, la FA dite « subclinique » détectée par prothèse, la stimulation du système de conduction et l'impact de la FA sur le pourcentage de stimulation CRT n'ont pas été couverts dans cette fiche. En cas de palpitations prolongées, malaise, essoufflement brutal ou douleur thoracique, contactez rapidement votre médecin ou appelez le **15 (SAMU)**, le **112** ou le **114** (SMS).`,
    },
  ],
  relatedArticleSlugs: [
    'maladies-associees',
    'thrombus-vg-et-anticoagulants',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'dispositifs-cardiaques-dai-crt',
    'maladie-renale-insuffisance-cardiaque',
    'confirmer-la-cause-dysfonction-vg',
    'automesure-tensionnelle-domicile',
    'regles-conduite-automobile',
    'omega-3-huile-de-poisson',
    'these-omega3-faible-dose-risque-fa',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'essais-cliniques-cles',
    'fuite-mitrale-secondaire',
    'medicaments-insuffisance-cardiaque',
    'efx-strain-troponine-et-imagerie-cardiaque',
    'goutte-bpco-thyroide-et-autres-comorbidites',
    'arythmies-ventriculaires-et-antiarythmiques',
  ],
  sources: [
    { label: 'Recommandations ESC 2024 sur la fibrillation atriale (texte intégral des sections ICFER)', detail: 'Score CHA₂DS₂-VA, AOD, contrôle de fréquence/rythme, ablation (Classes I B et IIa B) et approche AF-CARE' },
    { label: 'Dewan et al. (2023)', detail: "Prévalence de la FA (23,5 %) et mortalité ajustée (HR 1,11) dans 15 066 patients d'ICFER" },
    { label: 'Oraii et al. (JAMA Cardiology 2024, texte intégral)', detail: "Méta-analyse de 12 essais randomisés d'ablation (2 465 patients) selon la FEVG (ICFER vs ICFEP)" },
    { label: 'CASTLE-AF (NEJM 2018, résumé), RAFT-AF (Circulation 2022, résumé) et CASTLE-HTx (NEJM 2023, résumé)', detail: "Essais randomisés d'ablation par cathéter dans l'ICFER et l'IC terminale" },
    { label: 'Consensus EHRA/HRS 2024 sur l’ablation dans l’IC (lecture partielle) et Landra (2026, résumé de congrès)', detail: 'Parts ischémiques des essais, AMICA et prédicteurs de récupération de la FEVG' },
    { label: 'EAST-AFNET 4 (sous-analyse IC, Circulation 2021)', detail: 'Contrôle précoce du rythme chez 798 patients insuffisants cardiaques (17 % avec FEVG < 40 %)' },
    { label: 'RATE-AF (JAMA 2020, résumé) et DIGIT-HF selon le statut FA (EHJ 2026, texte intégral)', detail: 'Digoxine vs bisoprolol dans la FA permanente et digitoxine selon la présence de FA' },
    { label: 'APAF-CRT (EHJ 2021, résumé)', detail: 'Ablation du nœud auriculo-ventriculaire + CRT dans la FA permanente à QRS fin (HR 0,26 sur la mortalité)' },
  ],
  disclaimerType: 'medical',
};
