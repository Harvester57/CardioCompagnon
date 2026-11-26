import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'these-omega3-faible-dose-risque-fa',
  sourceWikiPath: 'wiki/theses/low-dose-omega3-af-risk-cad-hfref.md',
  titleFr: 'Thèse : oméga-3 à faible dose (≤ 1 g/j) et risque de fibrillation atriale',
  category: 'nutrition',
  readingTier: 'reference',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'thèse',
    'oméga-3',
    'huile-de-poisson',
    'fibrillation-atriale',
    'gissi-hf',
    'vital-rhythm',
    'dose-réponse',
    'maladie-coronaire',
    'icfer',
    'ema-prac',
    'ansm',
  ],
  aliases: [
    'Oméga-3 faible dose et fibrillation atriale',
    '1 g d’huile de poisson provoque-t-il une FA',
    'Dose-réponse oméga-3 FA',
    'Omacor et fibrillation atriale',
    'Alerte ANSM EMA oméga-3',
  ],
  linkedModules: ['core', 'atrialFibrillation'],
  plainSummaryFr:
    "Les fortes doses d'oméga-3 augmentent le risque de fibrillation atriale, mais qu'en est-il des gélules à 1 g par jour ou moins ? Cette synthèse analyse les études récentes et les alertes européennes et françaises sur ce risque. Elle rappelle aussi la différence entre les gélules et le poisson gras dans l'assiette. Consultez cette fiche pour en discuter avec votre cardiologue avant toute prise.",
  sections: [
    {
      headingFr: 'Question évaluée et cartographie dose-réponse des essais randomisés',
      bodyMarkdownFr: `**Hypothèse testée :** une supplémentation marine en oméga-3 à faible dose (**≤ 1 g/j**) n'augmente-t-elle pas le risque de fibrillation atriale (FA) chez les patients atteints de maladie coronaire ou d'ICFER ?

La comparaison des grands essais randomisés de **≤ 1 g/j** jusqu'à **4 g/j** montre un continuum dose-dépendant net au-delà de 1 g/j et une orientation légèrement haussière déjà perceptible à 1 g/j :

| Essai (année) | Population et proximité ICFER/coronaire | Dose et forme | Recueil de la FA | FA oméga-3 contre témoin | Effet (IC 95 %), p |
|---|---|---|---|---|---|
| **GISSI-HF** (Aleksova 2013 ; Abuknesha 2026) | 5 835 (4 991 sans antécédent de FA) IC chronique, ~90 % FEVG ≤ 40 %, pré-ARNI/iSGLT2 | 1 g/j (~850–882 mg EPA+DHA esters éthyliques) | ECG de visite + dossiers hospitaliers, non adjudiqué | **15,2 % contre 14,0 %** (444 vs 408) ; sous-groupe strict **11,2 % contre 9,8 %** | **HR 1,10 (0,96–1,25)**, p = 0,19 ; strict **OR 1,16 (0,97–1,39)** |
| **VITAL Rhythm** (Albert 2021) | 25 119 adultes ≥ 50 ans **sans MCV ni IC** (FEVG médiane 60 %) | 840 mg/j (460 EPA + 380 DHA) | **Critère principal** adjudiqué de façon centrale | **3,7 % contre 3,4 %** (7,2 vs 6,6 / 1 000 pa) | **HR 1,09 (0,96–1,24)**, p = 0,19 ; sous traitement **HR 1,13 (0,98–1,30)**, p = 0,09 |
| **ASCEND** (Bowman 2018 ; Parish 2020) | 15 480 diabétiques **sans athérosclérose** | 840 mg/j EPA+DHA | Principal : autodéclaré (301 cas). Parish 2020 : dossiers EHR (n = 15 374, 1 177 cas) | Principal : 2,1 % vs 1,7 %. EHR : **7,7 % contre 7,6 %** | Principal : **RR 1,23 (0,98–1,54)**. EHR : **RR 1,02 (0,91–1,15)** |
| **Risk and Prevention** (Roncaglioni 2013) | 12 505 patients à risque CV **sans antécédent d'infarctus** | 1 g/j esters éthyliques | Hospitalisations pour FA non adjudiquées | **1,8 % contre 1,5 %** | **HR 1,22 (0,93–1,61)**, p = 0,15 |
| **GISSI-Prevenzione** (ligne Abuknesha 2026) | 5 663 post-infarctus (années 1990) | ~860 mg/j esters éthyliques | Données investigateurs non publiées, non adjudiquées | **1,4 % contre 1,6 %** | **OR 0,87 (0,57–1,33)** |
| **OMEMI** (Kalstad 2021 ; Myhre 2023) | 1 014 post-infarctus âgés (70–82 ans ; 759 sans FA initiale) | **1,8 g/j** (930 EPA + 660 DHA) | Secondaire préspécifié adjudiqué + ECG de pouce 14 j | FA clinique **7,2 % contre 4,0 %** ; FA + micro-FA **11,9 % contre 6,5 %** | Clinique **HR 1,84 (0,98–3,45)**, p = 0,06 ; FA + micro-FA **HR 1,90 (1,16–3,11)**, p = 0,011 |
| **RESPECT-EPA** (Miyauchi 2024) | 2 506 coronariens stables japonais sous statine | **1,8 g/j** EPA pur (icosapent éthyl) | Essai ouvert PROBE ; événement indésirable FA | **3,1 % contre 1,6 %** | **p = 0,017** (OR Abuknesha **1,97 [1,15–3,38]**) |
| **STRENGTH** (Nicholls 2020) | 13 078 haut risque CV sous statine (46 % coronariens) | **4 g/j** acides carboxyliques EPA+DHA | Tertiaire préspécifié rapporté (adjudiqué ultérieur RR ~1,75) | **2,2 % contre 1,3 %** | **HR 1,69 (1,29–2,21)**, p < 0,001 |
| **REDUCE-IT** (Bhatt 2019 ; Olshansky 2023) | 8 179 haut risque sous statine (71 % prév. secondaire, 18 % IC, 9,2 % FA préalable) | **4 g/j** EPA pur (icosapent éthyl — *Vazkepa*) | Hospitalisation FA/flutter ≥ 24 h adjudiquée | Hosp. **3,1 % contre 2,1 %** (TEAE 5,3 % vs 3,9 %) ; **FA préalable : 12,5 % contre 6,3 %** | Hosp. **HR 1,50 (1,14–1,98)**, p = 0,004 ; **FA préalable HR 1,96, p = 0,007 (+6,2 points)** |`,
    },
    {
      headingFr: 'Réconciliation des méta-analyses : Gencer 2021, Jia 2021, Lombardi 2021 et Abuknesha 2026',
      bodyMarkdownFr: `Avant cette vérification en texte intégral, la littérature semblait opposer **Gencer 2021** (hausse significative à ≤ 1 g/j) et **Abuknesha 2026** (non significatif à ≤ 1,5 g/j). L'examen du texte intégral de Gencer 2021 résout largement ce paradoxe apparent :

| Méta-analyse | Financement / liens | Essais (N) | Strate faible dose | Résultat faible dose | Résultat forte dose | Global et pente dose-réponse |
|---|---|---|---|---|---|---|
| **Gencer 2021** (*Circulation*) — principal | NIH / académique, sans lien industrie oméga-3 | 7 ECR (81 210) | ≤ 1 g/j (VITAL, ASCEND principal, GISSI-HF, RP ; n = 58 939) | **HR 1,12 (1,03–1,22)**, **p = 0,024** (I² < 0,01 %) | > 1 g/j : **HR 1,49 (1,04–2,15)**, p = 0,042 | Global **HR 1,25 (1,07–1,46)** ; **HR 1,11 (1,06–1,15)** par +1 g/j (p = 0,001) |
| **Gencer 2021** — **sensibilité ASCEND-EHR** | Même étude | 7 ECR (81 210) | ≤ 1 g/j (en remplaçant ASCEND autodéclaré 1,23 par Parish 2020 EHR 1,02) | Effets aléatoires (Knapp-Hartung) : **HR 1,08 (0,99–1,17)**, **p = 0,077** (ns) ; effets fixes (I² = 0 %) : **HR 1,075 (1,003–1,153)**, **p = 0,042** | Inchangé : **HR 1,49 (1,04–2,15)** | Global **HR 1,20 (1,01–1,43)** ; **HR 1,10 (1,05–1,14)** par +1 g/j (p = 0,002) |
| **Jia 2021** (résumé) | Académique | 8 ECR (83 112) | ≤ 1 g/j (5 ECR, n = 61 096) | **RR 1,12 (1,04–1,21)**, **p = 0,004** | > 1 g/j (3 ECR) : **RR 1,51 (1,26–1,80)**, p < 0,001 | Global **RR 1,24 (1,11–1,38)** ; **AVC RR 1,04 (0,90–1,20)** |
| **Lombardi 2021** (texte intégral) | AHA / NIH académique | 5 ECR (+ sensibilité VITAL) | Non stratifié séparément | Note un « signal potentiel » même aux doses plus basses | Non stratifié | **IRR 1,37 (1,22–1,54)** ; avec VITAL **IRR 1,29 (1,13–1,48)** |
| **Abuknesha 2026** (texte intégral) | Cofinancé par GOED ; auteurs FARI avec liens CardioTabs / OmegaQuant | 35 ECR / 37 jeux (114 592) | ≤ 1,5 g/j : haut risque CV (6 ECR, moy. 823 mg/j) ; faible risque (7 ECR) | Haut risque **OR 1,07 (0,99–1,16)** (limite ns) ; faible risque **OR 1,06 (0,95–1,18)** | Haut risque > 1,5 g/j (12 ECR) : **OR 1,43 (1,14–1,79)** (+0,8 % abs.) | Tous essais **OR 1,14 (1,04–1,25)** (figure 2 uniquement, omis du résumé) |

- **Convergence réelle :** une fois substituées les données hospitalières EHR d'ASCEND dans Gencer 2021, son estimation à ≤ 1 g/j (**1,075 à 1,08**) coïncide quasiment avec celle d'Abuknesha 2026 à ≤ 1,5 g/j chez les patients à haut risque (**1,07 ; IC 95 % 0,99–1,16**). Le désaccord porte donc sur le franchissement du seuil p = 0,05, et non sur la direction de l'effet (+7 % à +12 %).
- **Points d'intégrité relevés dans l'audit :**
  - Dans **Abuknesha 2026** : l'OR global significatif (**1,14**) n'est pas mentionné dans le résumé ; les comparaisons entre strates sont *post hoc* ; **128 témoins** (essais MARINA et Lin) ont été comptés deux fois ; l'affirmation d'innocuité à forte dose chez les sujets à faible risque repose sur **19 cas de FA au total** ; et la ligne attribuée à l'essai **ORIGIN** (11,47 % du poids de la strate haut risque faible dose : **288/6 281 contre 259/6 255**) reproduit à l'entier près les effectifs de *décès par arythmie* publiés dans ORIGIN (*NEJM* 2012), anomalie non résolue sans l'annexe S1.
  - Dans l'étude observationnelle UK Biobank **Chen 2024** (qui avait rapporté un HR de 1,13 pour les capsules en vente libre chez les adultes sains), l'audit en texte intégral confirme que l'âge n'était ajusté que de façon binaire (**< 65 contre ≥ 65 ans** sur une tranche 40–69 ans) : un ajustement continu sur l'âge ramène l'association à **HR 1,00 (0,97–1,02)** (**O'Keefe 2025**, prépublication non évaluée par les pairs). Aucune étude observationnelle UK Biobank ne remplace les essais randomisés.`,
    },
    {
      headingFr: 'Pourquoi ≤ 1 g/j ne peut pas être déclaré sans risque dans la maladie coronaire et l’ICFER',
      bodyMarkdownFr: `- **Ce qui plaide pour un risque faible ou non prouvé isolément :** aucun essai à ≤ 1 g/j pris seul n'est significatif ; **VITAL Rhythm** (critère principal adjudiqué) est formellement neutre (HR 1,09, p = 0,19) mais excluait toute maladie cardiovasculaire et ses auteurs précisent qu'un **surrisque jusqu'à +24 % ne peut être exclu** (HR sous traitement 1,13, p = 0,09) ; l'analyse EHR d'ASCEND chez des diabétiques sans athérosclérose est quasi plate (RR 1,02).
- **Ce qui réfute l'assurance d'un « risque zéro » dans la maladie coronaire et l'ICFER :**
  1. **Dans le seul essai d'ICFER (GISSI-HF, 1 g/j), le taux de base de FA est 5 fois plus élevé que dans VITAL Rhythm (3,7 %/an contre 0,7 %/an) :** une hausse relative modeste (+10 à +16 %) se traduit numériquement par **+1,2 à +1,4 point absolu** sur ~4 ans (15,2 % contre 14,0 % ; ou 11,2 % contre 9,8 % sans antécédent de FA), sur des oreillettes déjà dilatées et étirées, sans que l'essai ait eu la puissance d'exclure cet excès.
  2. **Accélération marquée dès 1,8 g/j chez les coronariens :** dans **OMEMI** (post-infarctus âgé, 1,8 g/j EPA+DHA), le risque de FA clinique + micro-FA a presque doublé (**HR 1,90**, p = 0,011), tout comme dans **RESPECT-EPA** (coronariens stables, 1,8 g/j EPA pur : **3,1 % contre 1,6 %**, p = 0,017). Aucun seuil biologique de « risque nul » à 1,0 g/j n'est démontré.
  3. **Amplification majeure en cas de FA préalable :** dans **REDUCE-IT** (4 g/j), l'excès absolu d'hospitalisations pour FA a atteint **+6,2 points** (12,5 % contre 6,3 %, HR 1,96, p = 0,007) en cas d'antécédent de FA contre +0,6 point sans antécédent — point crucial dans l'ICFER ischémique, où une FA nouvelle aggrave volontiers les symptômes, rend l'ivabradine (*Procoralan*) inefficace et déclenche une anticoagulation orale au long cours (score CHA₂DS₂-VA déjà ≥ 2).
  4. **Position réglementaire ferme en Europe, en France et au Royaume-Uni :** à la suite de l'examen de plus de 80 000 participants d'essais (incidence poolée de FA de **3,9 %**), le comité **EMA PRAC (septembre 2023)**, l'**ANSM (novembre 2023)** et la **MHRA britannique (janvier 2024)** n'ont pas exempté les gélules de 1 g : la FA est désormais listée comme **effet indésirable fréquent** (jusqu'à 1 patient sur 10, maximal à 4 g/j) pour **tous les médicaments à base d'esters éthyliques d'acides oméga-3** (*Omacor 1 000 mg* et génériques), avec **obligation d'arrêt définitif si une FA survient**.
  5. **Érosion du bénéfice à l'ère moderne :** le petit bénéfice de mortalité de GISSI-HF (NNT 56 sur 3,9 ans, significatif uniquement après ajustement, p brut = 0,12) précède les ARNI, les iSGLT2 et les DAI/CRT modernes, et l'essai post-infarctus moderne **OMEGA** (1 g/j sur angioplastie et statines) s'est révélé totalement neutre.`,
    },
    {
      headingFr: 'Mécanismes, différence avec le poisson gras, qualité OTC et saignements',
      bodyMarkdownFr: `- **Mécanismes biologiques — encore non élucidés chez l'humain :** des travaux cellulaires biophysiques (**Romero 2019**) ont montré que l'incorporation d'oméga-3 dans les membranes diminue leur rigidité et modifie les canaux mécanosensibles **PIEZO1** (le DHA ralentit leur inactivation, prolongeant l'entrée de calcium, tandis que l'EPA l'accélère). Toutefois, les essais d'**EPA pur sans DHA** (**REDUCE-IT**, **RESPECT-EPA**) augmentent eux aussi la FA, et dans **OMEMI** (**Myhre 2023**) la hausse de l'**EPA sérique** expliquait **65 %** du signal de FA/micro-FA. Des effets sur les radeaux lipidiques, les canaux Na⁺/K⁺/Ca²⁺ ou le tonus vagal (en interaction potentielle avec les bêtabloquants) sont évoqués, mais **Marcus et Link (*Circulation* 2024)** concluent que le mécanisme pro-arythmique humain reste inconnu.
- **Manger du poisson gras est différent de prendre des gélules :** consommer du poisson gras deux fois par semaine (~250 à 700 mg/j d'EPA+DHA dans une matrice alimentaire complète) ne provoque pas de pic pharmacologique d'esters. Dans la méta-analyse sur données individuelles de 17 cohortes **FORCE** (**Qian 2023**, n = 54 799, suivi 13,3 ans, 7 720 cas de FA), les taux sanguins d'oméga-3 issus de l'alimentation habituelle ne montraient **aucun excès de FA** (EPA **HR 1,00** [0,95–1,05] ; DHA **HR 0,90** ; EPA+DHA **HR 0,93**).
- **Qualité problématique des gélules en vente libre (OTC) :** jamais testées dans un grand essai clinique cardiovasculaire ; des audits indépendants montrent un sous-dosage fréquent (seulement 3 produits sur 32 conformes à l'étiquette dans **Albert 2015**), une oxydation élevée (83 % au-dessus des limites de peroxydes) et jusqu'à 36 % de graisses saturées (**Mason 2017**). L'AHA (2019) déconseille de les substituer aux médicaments sur prescription.
- **Saignements et antithrombotiques :** globalement non majorés dans les essais (2,6 % contre 2,4 %, RR 1,09 ; **Javaid 2024**), mais légèrement augmentés à **4 g/j d'EPA pur** (RR **1,50**, +0,6 % absolu, NNH 166 ; dans REDUCE-IT, saignements graves 2,7 % contre 2,1 %, et **7,3 % contre 6,0 %** chez les patients avec FA préalable dont 77,8 % sous anticoagulants). Les notices demandent une surveillance avec l'aspirine, le clopidogrel ou la warfarine, et **aucun essai ne quantifie directement le risque hémorragique sous AOD (apixaban, rivaroxaban, édoxaban, dabigatran) ou bithérapie antiplaquettaire**.`,
    },
    {
      headingFr: 'Verdict pratique par catégorie et critères de révision',
      bodyMarkdownFr: `- **Verdict de la thèse :** **Partiellement réfutée** (confiance : **moyenne**).
- **Repères pratiques par type de produit (à discuter avec votre cardiologue ou votre pharmacien) :**
  - **Poisson gras alimentaire (~2 portions/semaine, modèle méditerranéen) :** **à aborder** — compatible avec la prévention cardiovasculaire, sans excès de FA observé dans les cohortes de biomarqueurs.
  - **Oméga-3 sur prescription à ~1 g/j (*Omacor* ou générique) :** **possible, priorité faible — décision exclusivement médicale.** Bénéfice pré-moderne modeste et non confirmé sur quadrithérapie actuelle, léger signal FA (+7 à +12 % poolé ; +1,2 à +1,4 point dans GISSI-HF), et arrêt définitif imposé par les notices européennes/françaises si une FA apparaît.
  - **Fortes doses (> 1 à 1,5 g/j, surtout ≥ 4 g/j) :** **ne pas débuter en automédication** (l'AHA conseille d'éviter ≥ 4 g/j dans l'IC). Toute prescription d'icosapent éthyl 4 g/j (*Vazkepa*) pour hypertriglycéridémie relève d'une balance bénéfice/risque individuelle en cardiologie, en particulier en cas de FA préalable ou de traitement antithrombotique.
  - **Gélules d'huile de poisson en vente libre :** **non étayées** et à ne pas substituer à un médicament.
- **Ce qui ferait évoluer ce verdict :** une méta-analyse sur données individuelles de tous les essais à faible dose avec FA adjudiquée ou vérifiée par dossiers hospitaliers (ASCEND, GISSI-HF, ORIGIN, RP, OMEGA) montrant un HR strictement centré sur 1,00 (borne supérieure ≤ 1,05) chez les coronariens et dans l'ICFER ferait basculer vers un soutien ; une démonstration statistiquement significative (HR ≥ 1,15, p < 0,01) dans ces sous-groupes confirmerait une réfutation complète.
- **Règle de prudence :** n'initiez, n'arrêtez ni ne modifiez aucun oméga-3 prescrit ni aucun anticoagulant ou antiagrégant sans l'avis de votre cardiologue ou de votre pharmacien.`,
    },
  ],
  relatedArticleSlugs: [
    'omega-3-huile-de-poisson',
    'fibrillation-atriale-insuffisance-cardiaque',
    'nutrition-et-complements-insuffisance-cardiaque',
    'tableau-preuves-nutrition-complements',
    'interactions-complements-aliments-medicaments',
    'alimentation-cardioprotectrice',
    'essais-cliniques-cles',
    'recommandations-comparees-esc-us-nice',
  ],
  sources: [
    {
      label: 'VITAL Rhythm (Albert 2021, texte intégral), GISSI-HF FA (Aleksova 2013), ASCEND (Bowman 2018 ; Parish 2020), RP (2013) et OMEGA (2010)',
      detail: 'Essais à faible dose (≤ 1 g/j), taux de base de FA 5 fois plus élevé dans GISSI-HF et substitution des données hospitalières EHR d’ASCEND.',
    },
    {
      label: 'OMEMI (Kalstad 2021 ; Myhre 2023), RESPECT-EPA (2024), STRENGTH (2020) et REDUCE-IT FA (Bhatt 2019 ; Olshansky 2023)',
      detail: 'Accélération de la FA dès 1,8 g/j chez les coronariens/post-IDM, médiation par l’EPA sérique et excès de +6,2 points en cas de FA préalable.',
    },
    {
      label: 'Gencer et al. (Circulation 2021, texte intégral), Jia (2021), Lombardi (2021) et Abuknesha et al. (2026, texte intégral)',
      detail: 'Réconciliation entre Gencer sensibilité ASCEND-EHR (1,075–1,08) et Abuknesha haut risque ≤ 1,5 g/j (1,07), pente dose-réponse et audit d’intégrité.',
    },
    {
      label: 'EMA PRAC (septembre 2023), ANSM (novembre 2023) et UK MHRA (janvier 2024)',
      detail: 'Ajout de la FA comme effet indésirable fréquent pour tous les esters éthyliques d’oméga-3 sur prescription et obligation d’arrêt définitif si une FA survient.',
    },
    {
      label: 'Mécanismes (Romero 2019, Huh & Jo 2023, Marcus & Link 2024), poisson gras (Qian 2023 FORCE), UK Biobank (Chen 2024, O’Keefe 2025), qualité OTC (Albert 2015, Mason 2017) et saignements (Javaid 2024)',
      detail: 'Canaux PIEZO1, absence d’excès de FA avec le poisson alimentaire, biais d’âge binaire de Chen 2024, oxydation/sous-dosage OTC et risque hémorragique à 4 g/j.',
    },
  ],
  disclaimerType: 'medical',
};
