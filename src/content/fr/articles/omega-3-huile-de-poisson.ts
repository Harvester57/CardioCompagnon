import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'omega-3-huile-de-poisson',
  sourceWikiPath: 'wiki/concepts/omega-3-fish-oil.md',
  titleFr: 'Acides gras oméga-3 (huiles de poisson)',
  category: 'nutrition',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'oméga-3',
    'huile-de-poisson',
    'epa',
    'dha',
    'gissi-hf',
    'fibrillation-atriale',
    'saignement',
    'ema-prac',
    'ansm',
    'compléments',
  ],
  aliases: [
    'Huile de poisson',
    'Oméga-3',
    'AGPI n-3',
    'EPA',
    'DHA',
    'Icosapent éthyl',
    'Omacor',
    'Vazkepa',
    'GISSI-HF',
  ],
  linkedModules: ['core', 'atrialFibrillation'],
  plainSummaryFr:
    "Les acides gras oméga-3 disposent des données d'essais les plus fournies parmi les compléments étudiés dans l'insuffisance cardiaque, mais le bénéfice est modeste et s'accompagne d'un risque de fibrillation atriale (FA) qui augmente avec la dose. Dans le grand essai GISSI-HF (6 975 patients, majoritairement ICFER), une capsule sur prescription de 1 g/j (~850–882 mg d'EPA + DHA) a légèrement réduit la mortalité (27 % contre 29 %, NNT 56 sur 4 ans), mais avant l'arrivée des traitements modernes (sacubitril/valsartan, iSGLT2). Au-dessus de 1 à 1,5 g/j (1,8 à 4 g/j), le risque de FA augmente nettement. Même à 1 g/j ou moins, une enquête dédiée conclut que le risque ne peut pas être déclaré nul : les analyses groupées convergent vers un léger décalage de +7 % à +12 % à la limite de la significativité (et GISSI-HF affiche +1,2 à +1,4 point absolu dans l'ICFER). En 2023–2024, les agences EMA, ANSM et MHRA ont ajouté la FA comme effet indésirable fréquent pour tous les esters éthyliques d'acides oméga-3 sur prescription (Omacor et génériques), avec arrêt définitif si une FA survient. À l'inverse, manger du poisson gras ne montre aucun excès de FA, et les gélules en vente libre ne sont ni équivalentes ni testées sur les événements cardiaques. Toute capsule se discute avec votre cardiologue ou votre pharmacien.",
  sections: [
    {
      headingFr: 'L’essai de référence dans l’insuffisance cardiaque : GISSI-HF',
      bodyMarkdownFr: `- **Population :** 6 975 patients italiens atteints d'insuffisance cardiaque chronique (NYHA II à IV), dont environ **90 % avec une FEVG ≤ 40 %** (en pratique un essai d'ICFER).
- **Traitement testé :** une spécialité sur prescription dosée à **1 g/j** d'esters éthyliques d'acides oméga-3 (environ **850 à 882 mg d'EPA + DHA**) contre placebo d'huile d'olive, suivie sur une médiane de **3,9 ans**.
- **Résultats principaux :**
  - **Mortalité toutes causes :** 27 % contre 29 % (**HR ajusté 0,91**, p = 0,041) ;
  - **Décès ou hospitalisation cardiovasculaire :** 57 % contre 59 % (**HR ajusté 0,92**) ;
  - **Nombre de sujets à traiter (NNT) :** environ **56 personnes pendant ~4 ans** pour éviter un décès ;
  - **Tolérance digestive :** troubles gastro-intestinaux dans 3 % des cas dans chaque bras.
- **Fibrillation atriale dans GISSI-HF (analyses post hoc, non adjudiquées) :**
  - Chez les **5 835 patients** sans FA sur l'ECG initial (**Aleksova 2013**) : **15,2 % (444) contre 14,0 % (408)**, **HR non ajusté 1,10** (IC 95 % **0,96–1,25**, p = 0,19), avec une incidence annuelle élevée d'environ **3,7 %/an** (cinq fois supérieure aux essais de prévention primaire) ;
  - En excluant aussi tout antécédent de FA (**n = 4 991**, ligne investigateurs dans **Abuknesha 2026**) : **11,2 % (278/2 492) contre 9,8 % (244/2 499)**, **OR 1,16** (IC 95 % **0,97–1,39**, +1,4 point absolu, non significatif).
- **Limites clés :** le gain de survie reposait sur l'ajustement statistique (comparaison brute non significative, p = 0,12) ; le traitement de fond précédait le sacubitril/valsartan (*Entresto*), les iSGLT2 et les dispositifs modernes, rendant le bénéfice résiduel actuel incertain et probablement plus faible.`,
    },
    {
      headingFr: 'Données sur la maladie coronaire',
      bodyMarkdownFr: `Dans des populations cardiovasculaires mixtes (méta-analyse **An 2022**, texte intégral ; dose médiane **1,8 g/j**, certitude modérée déclassée pour imprécision), les oméga-3 étaient associés à de modestes réductions coronaires : infarctus du myocarde **RR 0,85** (0,78–0,92 ; 12 essais), événements coronaires **RR 0,86** (0,80–0,93), décès CV **RR 0,93** (0,88–0,97), mais **aucune baisse de la mortalité totale** (**RR 0,97** ; 0,93–1,00) ni des **AVC** (**RR 1,06**).

Cependant, les grands essais modernes à faible ou moyenne dose ajoutés aux statines et à l'angioplastie ont été **neutres** sur les événements cardiovasculaires : **OMEGA** (3 851 patients post-infarctus, 1 g/j : mort subite 1,5 % contre 1,5 %, mortalité totale 4,6 % contre 3,7 %, p = 0,18), **ASCEND** (15 480 diabétiques, 840 mg/j : RR 0,97), **Risk and Prevention** (12 505 patients à risque sans infarctus, 1 g/j : HR 0,97), **ORIGIN** (12 536 patients, 1 g/j : décès CV HR 0,98), **OMEMI** (1 014 post-infarctus âgés, 1,8 g/j : HR 1,08) et **STRENGTH** (13 078 patients, 4 g/j d'acides carboxyliques EPA+DHA : HR 0,99, arrêté pour futilité).

À l'opposé, l'EPA purifié à forte dose (**icosapent éthyl — *Vazkepa* 4 g/j**) dans **REDUCE-IT** (8 179 patients sous statine avec triglycérides 1,35–4,99 g/L, 71 % prévention secondaire, 18 % d'IC) a réduit les événements majeurs de 25 % (**17,2 % contre 22,0 %**, HR 0,75 ; débat connu sur le placebo à l'huile minérale), tandis que **RESPECT-EPA** (2 506 coronariens japonais, 1,8 g/j EPA pur, ouvert) a manqué de peu son critère principal (**HR 0,79**, p = 0,055). La mention « arythmie RR 0,79 » d'An 2022, non définie dans l'article, ne contredit pas le signal sur la fibrillation atriale détaillé ci-dessous.`,
    },
    {
      headingFr: 'La courbe dose-réponse de la fibrillation atriale (FA)',
      bodyMarkdownFr: `Une thèse dédiée (*Thèse : oméga-3 à faible dose et risque de fibrillation atriale*) évalue si une dose **≤ 1 g/j** évite le risque de FA dans la maladie coronaire ou l'ICFER : **verdict partiellement réfuté (confiance moyenne)**.

| Palier de dose | Essais clés | Résultat FA (oméga-3 contre témoin) | Contexte clinique |
|---|---|---|---|
| **≤ 1 g/j** (~840–882 mg EPA+DHA) | **VITAL Rhythm** (25 119, sans MCV), **ASCEND** (15 480, diabète sans ASCVD), **GISSI-HF** (ICFER), **RP** (12 505), **GISSI-P** (5 663) | VITAL **HR 1,09** (0,96–1,24 ; sous traitement 1,13) ; ASCEND EHR **RR 1,02** (autodéclaré 1,23) ; GISSI-HF **HR 1,10** (15,2 % vs 14,0 %) / strict **OR 1,16** (11,2 % vs 9,8 %) ; RP **HR 1,22** ; GISSI-P **OR 0,87** | Aucun essai significatif isolément ; VITAL Rhythm excluait toute MCV/IC et ne peut exclure jusqu'à +24 % de risque |
| **1,8 g/j** (intermédiaire) | **OMEMI** (1 014 post-IDM âgés, EPA+DHA) ; **RESPECT-EPA** (2 506 coronariens, EPA pur) | OMEMI FA clinique **7,2 % vs 4,0 %** (HR 1,84, p = 0,06) et FA + micro-FA **11,9 % vs 6,5 %** (**HR 1,90 [1,16–3,11], p = 0,011**, médié à 65 % par la hausse d'EPA sérique) ; RESPECT-EPA **3,1 % vs 1,6 %** (**p = 0,017**, OR 1,97) | Quasi-doublement de la FA chez les coronariens bien au-dessous de 4 g/j, aussi bien avec EPA+DHA qu'avec EPA pur |
| **4 g/j** (forte dose) | **STRENGTH** (13 078, EPA+DHA) ; **REDUCE-IT** (8 179, EPA pur) | STRENGTH **2,2 % vs 1,3 %** (**HR 1,69 [1,29–2,21], p < 0,001**) ; REDUCE-IT hosp. FA **3,1 % vs 2,1 %** (**HR 1,50 [1,14–1,98], p = 0,004** ; TEAE 5,3 % vs 3,9 %). Si **FA préalable** : **12,5 % vs 6,3 % (+6,2 points absolus, p = 0,007)** | Excès net quelle que soit la composition ; un antécédent de FA amplifie fortement le risque d'hospitalisation |

### Réconciliation des méta-analyses (Gencer 2021, Jia 2021, Lombardi 2021, Abuknesha 2026)

- **Gencer 2021 (*Circulation*, NIH/académique, 7 ECR, 81 210 personnes) :** globalement **HR 1,25 (1,07–1,46)**, **HR 1,49** au-dessus de 1 g/j et **HR 1,12 (1,03–1,22, p = 0,024)** à ≤ 1 g/j, avec une pente linéaire de **+11 % par +1 g/j**. **Nuance décisive en texte intégral :** lorsque Gencer remplace les 301 cas autodéclarés d'ASCEND par les **1 177 cas issus des dossiers hospitaliers EHR (Parish 2020, RR 1,02)**, son estimation à ≤ 1 g/j devient **HR 1,08 (0,99–1,17, p = 0,077)** en effets aléatoires (Knapp-Hartung) tout en restant à la limite de la significativité en effets fixes (**HR 1,075 [1,003–1,153], p = 0,042**, I² = 0 %) avec une pente de **+10 % par +1 g/j**.
- **Jia 2021** (8 ECR, 83 112 personnes, académique) trouve indépendamment **RR 1,12 (1,04–1,21, p = 0,004)** à ≤ 1 g/j et **RR 1,51** au-dessus de 1 g/j, sans hausse des AVC (**RR 1,04**). **Lombardi 2021** (AHA/NIH) rapporte **IRR 1,37** (et **1,29** avec VITAL).
- **Abuknesha 2026** (35 essais, 114 592 personnes, cofinancée par GOED avec liens FARI/CardioTabs/OmegaQuant) rapporte un **OR global de 1,14 (1,04–1,25)** dans la figure 2 (omis du résumé), **OR 1,43 (1,14–1,79 ; +0,8 % absolu)** chez les patients à haut risque > 1,5 g/j, et **OR 1,07 (0,99–1,16)** chez les patients à haut risque ≤ 1,5 g/j. Deux réserves d'intégrité sont relevées : 128 témoins comptés deux fois entre strates, et une ligne **ORIGIN** (288/6 281 contre 259/6 255, 11,47 % du poids) correspondant à l'entier près aux *décès par arythmie* d'ORIGIN (*NEJM* 2012).
- **Convergence réelle :** après prise en compte d'ASCEND-EHR, Gencer (1,075–1,08) et Abuknesha haut risque (1,07) convergent vers un **léger décalage haussier d'environ +7 % à +12 %** situé à la limite exacte de la significativité.
- **Mécanismes proposés :** des études cellulaires (**Romero 2019**) impliquent les canaux mécanosensibles **PIEZO1** (ralentissement par le DHA, accélération par l'EPA), mais comme l'EPA pur sans DHA augmente aussi la FA (REDUCE-IT, RESPECT-EPA) et que l'EPA sérique médie 65 % du signal d'OMEMI, **Marcus et Link (*Circulation* 2024)** concluent que le mécanisme pro-arythmique humain reste inconnu.`,
    },
    {
      headingFr: 'Quatre produits distincts, positions réglementaires (EMA / ANSM / MHRA) et saignements',
      bodyMarkdownFr: `| Exposition | Qualité et encadrement | Données sur la fibrillation atriale |
|---|---|---|
| **Esters éthyliques EPA+DHA sur prescription** (*Omacor 1 000 mg*, génériques) | Contrôle pharmaceutique ; RCP européen/français mentionnant la FA comme effet indésirable fréquent | Testés dans GISSI-HF, VITAL, ASCEND, RP, OMEMI ; léger signal limite à ≤ 1 g/j, excès net > 1 g/j |
| **EPA purifié sur prescription** (*Vazkepa*, icosapent éthyl) | Spécialité pharmaceutique ; FA/flutter listés comme effet fréquent dès l'AMM européenne 2021 (5,8 % vs 4,5 %) | Excès net à 1,8 g/j (RESPECT-EPA) et 4 g/j (REDUCE-IT, surtout +6,2 % en cas de FA préalable) |
| **Gélules d'huile de poisson en vente libre (OTC)** | Complément alimentaire ; audits montrant sous-dosage fréquent (3/32 conformes à l'étiquette, 83 % oxydés au-delà des normes dans **Albert 2015** ; jusqu'à 36 % de graisses saturées dans **Mason 2017**) | **Non testées dans les grands essais CV.** La cohorte UK Biobank **Chen 2024** (HR 1,13) n'ajustait l'âge qu'en binaire (**< 65 contre ≥ 65 ans**) ; l'ajustement continu sur l'âge ramène l'association à **HR 1,00 (0,97–1,02)** (**O'Keefe 2025**, prépublication). L'AHA (2019) déconseille de les substituer aux médicaments |
| **Poisson gras alimentaire** (saumon, maquereau, sardines ; ~2 portions/sem.) | Matrice alimentaire complète (~250–700 mg/j d'EPA+DHA en moyenne) | **Aucun excès de FA :** méta-analyse FORCE sur 17 cohortes (**Qian 2023**, n = 54 799, 13,3 ans) : EPA **HR 1,00**, DHA **HR 0,90**, EPA+DHA **HR 0,93** |

### Positions réglementaires et recommandations

- **EMA PRAC (septembre 2023), ANSM France (novembre 2023) et UK MHRA (janvier 2024) :** ont ajouté la **fibrillation atriale comme effet indésirable fréquent** (jusqu'à 1 patient sur 10 ; incidence poolée 3,9 %) dans les notices de **tous les médicaments à base d'esters éthyliques d'acides oméga-3** (*Omacor 1 000 mg* et génériques), en précisant que le risque est dose-dépendant et **maximal à 4 g/j**, et que **le traitement doit être arrêté définitivement si une FA survient**. Cette évaluation ne porte ni sur le poisson alimentaire ni sur les compléments OTC non réglementés.
- **ESC 2026 et NICE NG106 :** ne mentionnent ni ne recommandent les compléments d'oméga-3 dans l'insuffisance cardiaque chronique.
- **AHA/ACC/HFSA 2022 (États-Unis) :** recommandation faible (**Classe 2b, niveau B-R**) en NYHA II–IV d'après GISSI-HF ; la déclaration **AHA 2022** conseille d'éviter les doses **≥ 4 g/j** dans l'IC.
- **Enjeu dans l'ICFER ischémique :** une nouvelle FA aggrave volontiers la tolérance hémodynamique, rend l'ivabradine inefficace et déclenche une anticoagulation orale (score CHA₂DS₂-VA déjà ≥ 2).

### Risque hémorragique (y compris sous aspirine ou anticoagulants)

- **Vue d'ensemble (Javaid 2024, ~120 643 personnes, financé par le fabricant de l'icosapent éthyl) :** saignements globaux **2,6 % contre 2,4 %** (RR 1,09, non significatif ; aucun saignement fatal).
- **EPA purifié à 4 g/j (icosapent éthyl) :** légère augmentation (**RR 1,50**, +0,6 saignement pour 100 traités, NNH 166) ; dans REDUCE-IT (79 % sous antiagrégant), saignements graves **2,7 % contre 2,1 %**, et **7,3 % contre 6,0 %** chez les patients avec FA préalable (dont 77,8 % sous anticoagulants).
- **Antithrombotiques :** les notices demandent une surveillance des saignements avec l'aspirine, le clopidogrel ou la warfarine. **Aucune donnée d'essai dédiée** n'existe en association aux AOD (apixaban, rivaroxaban, édoxaban, dabigatran) ni à une bithérapie antiplaquettaire : vérifiez toujours avec votre cardiologue ou votre pharmacien.

### Quelle place en pratique ?

- **Poisson gras dans l'alimentation (~2 portions/semaine) :** raisonnable et à aborder, sans excès de FA observé.
- **Oméga-3 sur prescription à ~1 g/j :** piste **possible mais de priorité faible**, décision exclusivement médicale (bénéfice moderne incertain, signal FA limite à +7–12 %, arrêt définitif imposé si une FA survient).
- **Fortes doses (> 1 à 1,5 g/j ; surtout 4 g/j) :** ne pas débuter en automédication ; toute prescription pour hypertriglycéridémie relève d'une évaluation individuelle en cardiologie.
- **Gélules en vente libre :** non étayées comme substitut.`,
    },
  ],
  relatedArticleSlugs: [
    'these-omega3-faible-dose-risque-fa',
    'fibrillation-atriale-insuffisance-cardiaque',
    'nutrition-et-complements-insuffisance-cardiaque',
    'coenzyme-q10',
    'vitamine-d-insuffisance-cardiaque',
    'interactions-complements-aliments-medicaments',
    'tableau-preuves-nutrition-complements',
    'alimentation-cardioprotectrice',
    'cholesterol-et-prevention-secondaire',
    'maladies-associees',
  ],
  sources: [
    {
      label: 'GISSI-HF (2008), Aleksova et al. (2013), VITAL Rhythm (Albert 2021), ASCEND (Bowman 2018 ; Parish 2020), RP (2013) et OMEGA (2010)',
      detail: 'Essai ICFER (6 975 patients), analyse FA post hoc GISSI-HF (15,2 % vs 14,0 % / strict 11,2 % vs 9,8 %) et essais à faible dose.',
    },
    {
      label: 'OMEMI (Kalstad 2021 ; Myhre 2023), RESPECT-EPA (2024), STRENGTH (2020) et REDUCE-IT (Bhatt 2019 ; Olshansky 2023)',
      detail: 'Excès de FA à 1,8 g/j et 4 g/j, médiation EPA et amplification en cas de FA préalable (+6,2 points).',
    },
    {
      label: 'Gencer et al. (2021, texte intégral), Jia (2021), Lombardi (2021) et Abuknesha et al. (2026, texte intégral)',
      detail: 'Réconciliation entre Gencer sensibilité ASCEND-EHR (1,075–1,08) et Abuknesha (1,07), et audit critique (ORIGIN, doublons de témoins).',
    },
    {
      label: 'EMA PRAC (sept. 2023), ANSM (nov. 2023), UK MHRA (janv. 2024), ESC 2026 et AHA/ACC/HFSA 2022',
      detail: 'Classement de la FA en effet indésirable fréquent et règle d’arrêt définitif pour tous les esters éthyliques sur prescription.',
    },
    {
      label: 'Qian (FORCE 2023), Chen (2024), O’Keefe (2025), Albert (2015), Mason (2017), Romero (2019), Marcus & Link (2024), An (2022) et Javaid (2024)',
      detail: 'Poisson gras sans excès de FA, biais d’âge UK Biobank, qualité des gélules OTC, mécanismes PIEZO1 et méta-analyse hémorragique.',
    },
  ],
  disclaimerType: 'medical',
};
