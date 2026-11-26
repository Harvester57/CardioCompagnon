import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'tableau-preuves-nutrition-complements',
  sourceWikiPath: 'wiki/references/nutrition-and-supplement-evidence-table.md',
  titleFr: 'Tableau des niveaux de preuve : nutrition et compléments',
  category: 'nutrition',
  readingTier: 'reference',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'tableau-preuves',
    'compléments',
    'nutrition',
    'recommandations',
    'esc-2026',
    'aha',
    'nice',
    'fer-iv',
    'fer-oral',
    'oméga-3',
    'coenzyme-q10',
    'potassium',
    'vitamine-d',
    'vitamines-b',
    'magnésium',
    'berbérine',
    'décongestionnants',
    'stimulants',
  ],
  aliases: [
    'Tableau des compléments',
    'Preuves des compléments alimentaires',
    'Comparaison recommandations nutrition',
    'Niveaux de preuve nutrition',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Ce tableau de référence classe les aliments, compléments alimentaires, plantes et produits en vente libre selon la solidité des preuves dans l'insuffisance cardiaque. Il compare aussi les positions des grandes recommandations internationales et signale les interactions ou risques connus. Consultez-le pour vérifier le niveau de preuve d'un produit et en discuter avec votre cardiologue ou votre pharmacien avant toute prise.",
  sections: [
    {
      headingFr: "Comment lire la colonne « Applicabilité »",
      bodyMarkdownFr: `Ce document accompagne l'article de synthèse sur la nutrition et les compléments dans l'insuffisance cardiaque. La colonne **Applicabilité** indique dans quelle mesure les preuves correspondent directement à une **cardiomyopathie ischémique avec FEVG réduite autour de 35 %** :

- **Directe / surtout directe** : l'essai a inclus majoritairement des patients atteints d'ICFER d'origine ischémique.
- **Partiellement directe** : ICFER ou FEVG majoritairement réduite, mais causes mixtes.
- **Indirecte** : FEVG non précisée, toutes FEVG confondues ou autres populations cardiovasculaires.`,
    },
    {
      headingFr: 'Compléments alimentaires, plantes, décongestionnants et stimulants',
      bodyMarkdownFr: `| Élément | Preuve principale | Chiffre clé | Certitude | Applicabilité | Verdict |
|---|---|---|---|---|---|
| **Fer intraveineux (si carence)** | 6 ECR, 7 175 pts (Anker 2025 ; FAIR-HF2 78 % ischémique) ; revue indépendante zéro COI **Mandal nov. 2026** (18 cohortes) ; HEART-FID phosphate (**Nouhravesh 2025**) ; IRONMAN (**Cleland 2024**) | Hospitalisations IC + décès CV **RR 0,81** (0,72 à 1 an) ; zéro COI total HFH **RR 0,78** (effets aléatoires croisant 1) ; pas d'effet survie. **Seulement 7,2 % (519/7 175)** sous iSGLT2 (23,6 % FAIR-HF2), zéro donnée stratifiée iSGLT2. Bénéfice concentré si **CST < 20 %** (ferritine < 100 isolée + CST ≥ 20 % : RR 0,96–0,98). **FCM** : **51,9 %** d'hypophosphatémie modérée à sévère à J21 (27,8 % sévère) contre ~4–8 % sous **FDI** | Modérée à élevée globalement ; certitude directe faible sous iSGLT2 | Surtout directe globalement (78 % ischémique dans FAIR-HF2) ; partielle sur quadrithérapie | **À aborder avec l'équipe** (surtout si CST < 20 % ; voir thèse fer IV) |
| **Fer oral** | IRONOUT-HF, 225 patients | Aucun changement du pic de VO₂ ni des symptômes | Modérée | Partiellement directe (ICFER, 78 % ischémique) | Non étayé |
| **Fer oral « mieux absorbé » (Ferrochel / bisglycinate, sucrosomial, maltol ferrique)** | Aucun ECR ICFER publié ; ORION-HF (mono-bras, 41 pts, 16 FEVG < 50 %) ; Karavidas 2021 (non randomisé, 25 pts) | Hausses non contrôlées du CST/ferritine ou de la marche ; en MICI, recharge très inférieure au fer IV ; aucun contournement démontré de l'hepcidine | Faible | Indirecte à partiellement directe | Non étayé (voir thèse fer oral) |
| **Oméga-3, ≤ 1 g/j (prescription contre OTC et poisson gras)** | GISSI-HF (6 975 pts ; Aleksova 2013 FA) ; Gencer 2021 (sensibilité ASCEND-EHR) ; Jia 2021 ; Abuknesha 2026 (35 essais) ; **EMA PRAC 2023 / ANSM 2023 / MHRA 2024** ; Qian 2023 FORCE ; Albert 2015 | GISSI-HF pré-moderne décès 27 % contre 29 % (HR ajusté 0,91). **Thèse FA faible dose partiellement réfutée :** décalage poolé **+7 à +12 %** (Gencer primaire HR 1,12 ; ASCEND-EHR RE 1,08 / FE 1,075 ; Jia RR 1,12 ; Abuknesha HR-LD ≤ 1,5 g OR 1,07) ; GISSI-HF FA **15,2 % vs 14,0 %** (strict 11,2 % vs 9,8 %). **EMA/ANSM/MHRA :** FA classée **effet fréquent** sur tous les esters éthyliques sur prescription, **arrêt définitif si une FA survient**. Poisson gras sans excès de FA ; gélules OTC souvent sous-dosées/oxydées | Modérée pour le signal FA et la mortalité pré-moderne ; faible sur quadrithérapie | Partiellement directe (GISSI-HF 90 % FEVG ≤ 40 %, pré-ARNI/iSGLT2) | Prescription 1 g/j : Possible, priorité faible (décision cardiologue). Poisson gras : **À aborder**. OTC : Non étayé (voir thèse oméga-3 FA) |
| **Oméga-3, dose intermédiaire et forte (1,8 à 4 g/j)** | OMEMI (1,8 g/j post-IDM) ; RESPECT-EPA (1,8 g/j CAD) ; STRENGTH et REDUCE-IT (4 g/j) ; Gencer 2021 ; Abuknesha 2026 | OMEMI FA + micro-FA **HR 1,90** ; RESPECT-EPA **3,1 % vs 1,6 %** ; STRENGTH **HR 1,69** ; REDUCE-IT hosp. FA **HR 1,50** (**+6,2 % absolus si FA préalable**) ; Gencer > 1 g/j **HR 1,49** ; Abuknesha > 1,5 g/j haut risque **OR 1,43** | Modérée à élevée | Partielle (coronaire / post-IDM ; sans découpage ICFER) | **À éviter en automédication ; éviter ≥ 4 g/j dans l'IC (AHA)** ; prescription 4 g/j à peser en cardiologie |
| **Coenzyme Q10** | Q-SYMBIO (420 pts) ; Cochrane 2021 (11 ECR) ; **NIHR HTA 2022 (Claxton, 26 ECR)** ; audit Lei 2017 / Khan 2021 / An 2022 / Xu 2024 / Mohammed 2026 ; **CORONA (McMurray 2010, n = 1 191)** ; CORAL / DANUTRIO-HF / SELEQT-HF en cours | Zéro ECR achevé sur quadrithérapie moderne. Mortalité IC **NIHR HTA 2022 non significative (RR 0,68 ; 0,45–1,03)** ; Cochrane 2021 repose sur 1 essai (mortalité) et 2 essais (hospitalisations : Q-SYMBIO + Morisco 1993) ; pool Lei/Khan/An **contaminé par KISEL-10** (sujets âgés sains) ; CORONA réfute le risque de la baisse sous statines ; ubiquinol sans essai de mortalité ; **risque de chute d'INR sous warfarine** (exclus de CORAL et DANUTRIO-HF) | Faible (preuves insuffisantes sous traitement moderne) | Surtout directe dans Q-SYMBIO (~70 % ischémique, FEVG 31 %), mais pré-moderne et fragile | Possible, priorité faible ; **éviter en automédication sous warfarine/AVK** (voir thèse CoQ10) |
| **Vitamine E (automédication)** | Cartographie Khan 2021 (2 essais, 17 956 pts) ; repris par Chua 2025 | Hospitalisation pour IC : **RR 1,21 (1,04–1,40)** | Modérée | Indirecte | **À éviter** |
| **Bêta-carotène** | An 2022 ; USPSTF | Décès toutes causes RR 1,10 ; décès CV RR 1,12 ; AVC RR 1,09 ; USPSTF grade D | Faible (GRADE An 2022) | Indirecte | **À éviter** |
| **Calcium + vitamine D** | Khan 2019 | AVC : RR 1,17 | Modérée | Indirecte | **À éviter sauf prescription** |
| **Vitamine D seule** | An 2022 (63 essais) ; Khan 2021 ; Chua 2025 ; Kampka 2025 ; EVITA ; notices *ZymaD* / *Fultium-D3* | Aucun effet CV (décès RR 0,99) ; marche de 6 min raccourcie de **39 m** dans les essais IC (certitude élevée) ; EVITA décès HR 1,09, hypercalcémie 6,2 % vs 3,1 %. Plafond adulte **4 000 UI/j** ; précautions **digoxine et thiazides** | Modérée | Indirecte (essais IC toutes FEVG) | Non étayé (traiter uniquement une carence) |
| **Thiamine (vitamine B1)** | Méta-analyse He 2024 (7 ECR, 274 pts) ; Khan 2021 ; ESPEN 2022 | FEVG +1,65 point (-1,10 à 4,41, ns), ~0 après correction biais de publication ; pas d'effet marche/NT-proBNP/NYHA. ESPEN : dosage possible sous diurétiques prolongés | Faible | Indirecte (essais IC toutes FEVG) | Uniquement si carence (dosage à discuter sous diurétiques de l'anse) |
| **Acide folique + B12 ± B6 (homocystéine)** | Cochrane 2017 (15 ECR, 71 422 pts) ; NORVIT 2006 (3 749 pts post-IDM) | Aucun effet IDM (RR 1,02) ou décès (RR 1,01), haute qualité ; AVC RR 0,90. Après IDM, tendance défavorable avec la triple association (**RR 1,22 ; 1,00–1,50**) | Élevée (Cochrane) | Indirecte (populations coronariennes) | Non étayé ; **à éviter en triple association en automédication post-IDM** |
| **Vitamine B12 (correction de carence)** | ESPEN 2022 | Metformine et IPP/anti-H2 sont des facteurs de risque ; dépistage holo-TC + AMM ou B12 sérique | Faible (consensus) | Indirecte | Doser et traiter si carence avérée |
| **Vitamine B6, forte dose** | NORVIT 2006 ; ESPEN 2022 | Aucun bénéfice ; neuropathie sensitive en cas de fortes doses prolongées | Modérée | Indirecte | **À éviter à forte dose** |
| **NAD+ intraveineux (dérivé B3, hôpital)** | ECR Yu 2025 (180 pts, 100 % ischémiques, FEVG ≤ 45 %) | FEVG à 1 mois 45,4 % contre 42,4 % (p = 0,024) ; événements cliniques ns ; monocentrique, industrie | Faible | Population directe, critère intermédiaire | Expérimental ; ne vaut pas preuve pour la B3 orale ni les « boosters de NAD » |
| **L-carnitine** | Khan 2021 | FEVG +0,49 point (intermédiaire) ; décès RR 0,58 (0,16–2,12), ns | Faible | Indirecte | Non étayé |
| **Vitamine C, sélénium, multivitamines** | An 2022 ; Khan 2019 ; USPSTF | Aucun bénéfice sur décès, décès CV, IDM ou AVC | Modérée | Indirecte | Non étayé |
| **Magnésium (toute forme)** | An 2022 ; Argeros 2025 ; MACH ; Chimura 2026 (GALACTIC-HF) ; Yin 2026 vétérans ; BfR 2021 / *Arrêté 9 mai 2006* / NIH ODS | PA ~-2,8/-2,0 mmHg ; essai MACH minuscule non répliqué ; GALACTIC-HF Mg bas neutre, Mg élevé défavorable ; vétérans US Mg oral bénéfique si taux bas (**HR 0,91**) mais **défavorable si normal (HR 1,11, observationnel)**. Plafonds adultes sains (**250 mg UE UL / 300 mg DJM France compléments / 350 mg US UL**) ne garantissent pas la sécurité dans l'ICFER : c'est le **DFG** qui prime | Faible | Mixte | Doser et corriger une carence avec l'équipe ; prudence si insuffisance rénale |
| **Aubépine** | AHA 2022 | Résultats contradictoires ; peut aggraver l'IC | Faible | Directe | Non étayé |
| **Muguet, actée bleue** | AHA 2022 | Toxiques | Faible (experts) | Directe | **À éviter** |
| **Réglisse (glycyrrhizine)** | Monographie EMA 2026 ; Deutch 2019 | Rétention hydrosodée, hypokaliémie, HTA ; cas d'IC aiguë ; éviter avec diurétiques/digoxine | Modérée | Directe | **À éviter** |
| **Millepertuis** | Notices officielles EMA, FR BDPM, UK eMC et US FDA ; NCCIH ; Nicolussi 2020 | Nommé sur les notices UE/FR/UK des **4 AOD** (éviter dabigatran et rivaroxaban [-24 % AUC] ; prudence/déconseillé apixaban ; prudence édoxaban), baisse **éplérénone -30 %** (déconseillé), affaiblit ivabradine et **atorvastatine** (pas d'alerte rosuvastatine), inducteur CYP3A pour **ticagrélor**, et **augmente le métabolite actif / risque hémorragique du clopidogrel** ; risque sérotoninergique | Élevée (notices officielles) | Directe | **À éviter** ; signaler toute prise au pharmacien/cardiologue |
| **Levure de riz rouge** | EFSA 2018/2025 ; UE 2022/860 ; NCCIH | Lovastatine non déclarée ; effets graves dès 3 mg/j ; cumul avec une statine prescrite ; citrinine | Modérée | Indirecte | **À éviter avec une statine prescrite** |
| **Ginkgo (saignement)** | Monographie EMA ; Kellermann 2011 ; Stoddard 2015 ; Hoerr 2022 ; Mai 2025 | **Signaux contradictoires séparés :** 18 essais labo neutres ; vétérans warfarine HR 1,38 ; **EGb 761** standardisé sans effet sur rivaroxaban chez 41 volontaires (**financé fabricant**, Hoerr 2022), mais données hospitalières (**Mai 2025**) liant le ginkgo aux saignements sous **clopidogrel (OR 1,10)** et **aspirine (OR 1,12)**. UE : arrêt **3–4 j avant chirurgie** | Faible à modérée (discordant) | Indirecte | **À éviter avec antithrombotiques sans accord** |
| **Compléments d'ail (saignement)** | Monographie EMA ; Macan 2006 ; Grzesk 2021 | Effet antiagrégant ; petit essai warfarine rassurant ; **zéro essai humain AOD/P2Y12** | Faible à modérée | Indirecte | Prudence avec antithrombotiques ; UE : éviter 7 j avant chirurgie |
| **Huile de poisson (saignement)** | Javaid 2024 ; notices *Vazkepa* / *Lovaza* ; REDUCE-IT | Pas de hausse globale (2,6 % vs 2,4 %) ; +0,6 pour 100 à 4 g/j EPA pur (7,3 % vs 6,0 % si FA préalable) ; pas de données ECR AOD/DAPT ; notices : surveiller avec aspirine, clopidogrel ou warfarine | Modérée (financé industrie) | Partiellement directe | À signaler à l'équipe, surtout à forte dose ou sous antithrombotiques |
| **Jus de pamplemousse** | Notices simvastatine, atorvastatine, rosuvastatine et ivabradine | Augmente simvastatine, atorvastatine (> 1,2 L/j) et ivabradine ; absent de la notice rosuvastatine | Élevée (notices) | Dépend du médicament | Vérifier selon la statine / l'ivabradine |
| **Ginseng (asiatique, américain, sibérien)** | Yuan 2004 ; Lee 2010 ; Dasgupta ; Tsai 2017 ; Hsu 2022 ; EMA | Ginseng américain diminue la warfarine ; signaux hémorragiques réels contradictoires (Tsai 2017 antiagrégants aOR 3,27 vs Hsu 2022 warfarine aHR 0,76) ; fausse d'anciens dosages de digoxine ; teneur variable × 36 | Faible (discordant) | Indirecte | Non étayé ; informer l'équipe, surtout sous warfarine, antiagrégants ou digoxine |
| **Danshen (sauge rouge)** | Chan 2001 ; Izzat 1998 ; Qiu 2010–2014 ; **Liao 2026** (majorité AOD) ; Hsu 2022 (99 % warfarine) | **Signaux contradictoires séparés :** surdosages warfarine ; **Liao 2026** (majorité AOD) montre **~4× plus de saignements précoces J1–28 (aIRR 3,98 ; digestif 3,79 ; HIC 3,59)** sans saignement majeur hospitalisé, contre **Hsu 2022** (99 % warfarine) neutre (aHR 0,948). Fausse dosages digoxine ; induit CYP3A4/P-gp | Faible à modérée (discordant) | Indirecte | **À éviter avec les anticoagulants** ; non étayé |
| **Extrait concentré de thé vert (EGCG)** | **Kim 2018 (digoxine, texte intégral)** ; Misaka 2014/2021 ; Kim 2017 ; Sonoda 2021 ; Zeng 2022 (rat) ; EFSA 2018 ; UE 2022/2340 | Abaisse chez l'humain l'exposition à la **digoxine (-31 à -33 %)**, au lisinopril (-67 %), au nadolol (-85 %), au céliprolol (-98,6 %) et aux statines (~-20 %) ; rares hépatites graves (plafond UE < 800 mg EGCG/j). **Lacune humaine vérifiée** pour bêtabloquants IC (bisoprolol : **rat uniquement**), ARNI et iSGLT2 | Modérée (foie et PK digoxine) ; faible (autres) | Indirecte (volontaires sains ; rat pour bisoprolol) | **À éviter en complément** (surtout sous digoxine/IEC/statines) ; le thé infusé ordinaire est différent |
| **Qiliqiangxin et pilules Qishen Yiqi** | QUEST (3 110 pts, *Nat Med* 2024) ; Chua 2025 | QUEST : décès CV ou hosp. IC HR 0,78 (mortalité totale ns, < 10 % iSGLT2) ; Qishen Yiqi : décès OR 0,43 (fabricant unique, revues de qualité très faible) | Modérée (limites industrielles) | Partiellement directe | Spécialités chinoises sur prescription, absentes des recommandations ESC, US et NICE |
| **Créatine** | Cochrane 2011 ; Carvalho 2012 (33 hommes, 6 mois) ; López-Clemente 2025 | Pic VO₂ +0,3 mL/kg/min (ns), marche +25 m (ns), aucun gain FEVG ; **abaisse faussement le DFG calculé** sans lésion rénale | Faible | Partiellement directe (pré-moderne) | Non étayé ; informer le médecin avant un bilan rénal |
| **Taurine** | McGurk 2022 ; Tzang 2024 (inclut une rétractation 2026) ; PMDA | Aucun gain poolé sur la FEVG ou le volume d'éjection (McGurk) | Très faible | Partiellement directe (très petits essais) | Non étayé |
| **Boissons énergisantes (caféine + taurine)** | Shah 2019 et Fletcher 2017 (ECR croisés) ; Cao 2021 ; ANSES 2013 ; EFSA 2015 | QTc +6 à +8 ms et PAS +5 à +6 mmHg contre placebo (~1 L), et plus que la caféine seule ; ANSES déconseille avec alcool ou effort | Modérée (adultes sains) | Indirecte (cardiopathies exclues) | **À éviter** en grande quantité, et toujours avec alcool ou autour de l'effort |
| **Brûle-graisses stimulants et pré-entraînements** | ANSES 2014/2016 ; FDA 2004 ; AHA 2016 ; Cohen 2018 ; Tucker 2018 | Synéphrine + caféine déconseillée en cas de cardiopathie (ANSES) ; 85 % des amaigrissants épinglés par la FDA cachaient de la sibutramine | Faible (réglementaire et analyses labo) | Indirecte (agences nomment l'IC) | **À éviter** ; éviter tout mélange non identifié |
| **Gélules, poudres et « shots » de caféine** | Cappelletti 2018 (92 décès) | Décès surtout par fibrillation ventriculaire, majoritairement liés aux poudres, gélules OTC et produits minceur | Faible (séries de cas) | Indirecte | **À éviter** |
| **Décongestionnants oraux du rhume (pseudoéphédrine, phényléphrine)** | EMA 2024 (PRES/RCVS) ; **ANSM déc. 2024 Liste I** ; RCP BDPM ; FDA nov. 2024 ; AHA 2016 | **Passage sur ordonnance (Liste I) en France le 11 déc. 2024** de tous les vasoconstricteurs oraux à base de pseudoéphédrine (IDM, AVC, PRES/RCVS), toujours déconseillés pour le rhume ; *Nurofen Rhume* et *Rhinadvil* associent de l'**ibuprofène** (AINS). FDA : retrait proposé de la phényléphrine orale pour **inefficacité** | Élevée (décisions officielles et RCP) | Directe pour contre-indications et risque AINS | **À éviter** (lavages au sérum physiologique ; demander au pharmacien) |
| **Stimulants prescrits du TDAH (méthylphénidate, lisdexamfétamine)** | **RCP FR BDPM** (*Ritaline*, *Xurta*) et **UK eMC** (*Concerta XL*, *Elvanse*) ; Zhang 2024 (Suède) ; Holt 2024 (Danemark) ; Berthod 2026 (France SNDS) | **Le RCP du méthylphénidate contre-indique explicitement IC, cardiomyopathie et IDM** ; lisdexamfétamine contre-indique les MCV symptomatiques et met en garde sur IC/QTc. Cohortes nationales : surrisque CV (Suède AOR 1,23–1,27 ; France HR 1,85 ; **Danemark IC à 10 ans RR 1,7** à ≥ 1 DDD/j) | Élevée (RCP) ; modérée à faible (cohortes) | Directe (RCP) ; indirecte (cohortes) | **Avis spécialiste + cardiologue** (ne jamais débuter ni arrêter seul un traitement prescrit) |
| **D-ribose** | Omran 2003 ; Pierce 2022 (ICFEP) ; EFSA 2018 | Très petits essais fragiles ; abaisse la glycémie (jusqu'à 2,6 mmol/L après 10 g) ; limite sûre EFSA 36 mg/kg/j | Très faible | Indirecte | Non étayé ; prudence avec insuline/sulfamides |
| **Esters cétoniques (boissons)** | Berg-Hansen 2024 (24 pts ICFER, 14 j) ; Nielsen 2019 ; Selvaraj 2025 | Débit cardiaque +0,3 L/min, FEVG +2 pts, NT-proBNP -18 % ; aucun gain effort/KCCQ ; diabète exclu | Faible (critère intermédiaire, court) | Directe (58 % ischémique, 58 % iSGLT2) | Non étayé hors essais (KETO-AHF en recrutement) |
| **Sels de cétones (sels de BHB)** | Base de données NIH | 900 mg de sodium par dose sur une étiquette | Faible | Indirecte | **À éviter** (charge sodée) |
| **Berbérine** | Liu 2025 ; Zeng 2003 ; Guo 2012 ; ANSES 2019 | Inhibe CYP3A4 (+40 %), CYP2D6, CYP2C9 et P-gp ; élève la ciclosporine ; l'**ANSES** déconseille toute association aux médicaments | Faible (bénéfice) ; modérée (CYP) | Indirecte | **À éviter** sauf validation pharmacien/cardiologue |
| **Probiotiques / modulation intestinale** | ECR **GutHeart** (151 pts ICFER, 3 mois) | FEVG 29,6 % et 30,3 % vs 31,5 % soins usuels (ns) ; aucun effet NT-proBNP/CRP/TMAO | Modérée | Directe (ICFER, ~55 % ischémique) | Non étayé |
| **Psyllium / ispaghul (laxatif fibreux)** | RCP UK (*Fybogel*) | Peut retarder l'absorption de la digoxine et de la warfarine ; nécessite ≥ 150 mL de liquide par prise | Élevée (RCP) | Directe (interaction) | Option laxative à voir avec l'équipe ; espacer de digoxine/warfarine |

**Notes de lecture :** « antioxydant » recouvre des molécules distinctes (vitamines C/E et bêta-carotène neutres ou nocives dans An 2022 ; éditorial Gormaz-Carrasco 2022). Les études récentes **Qiu 2025** (NHANES, alimentation et alcool) et **Boitard 2025** (souris) ne modifient aucun verdict, et la revue parapluie **Chua 2025** (11/21 revues de qualité critiquement faible) reprend largement Khan 2021 et Q-SYMBIO sans les confirmer indépendamment.`,
    },
    {
      headingFr: 'Alimentation et mode de vie',
      bodyMarkdownFr: `| Élément | Preuve principale | Chiffre clé | Applicabilité | Verdict |
|---|---|---|---|---|
| **Sodium strict (< 1 500 mg/j)** | SODIUM-HF, 806 patients | Critère composite HR 0,89 (ns) ; qualité de vie +3,4 points | Partiellement directe (FEVG médiane 36 %, mixte) | Non prouvé ; éviter les extrêmes |
| **Sel modéré (≤ environ 5 g/j)** | HFA-ESC 2024 ; données sel et tension | Décès CV RR 0,67 dans l'HTA (population générale) | Indirecte pour l'IC | **À aborder avec l'équipe** |
| **Limite hydrique fixe de 1,5 L/j** | FRESH-UP, 504 patients | KCCQ +2,2 en faveur de l'apport libre (ns) ; plus de soif avec restriction | Partiellement directe (~50 % ICFER, 44 % ischémique ; stables) | Uniquement si fixée par l'équipe |
| **Substituts de sel au potassium et additifs K⁺ cachés** | Cochrane 2022 ; notices Entresto/ARM ; **Parpia 2018** ; **Picard 2024–2026** ; ASN 2025 | Essais substituts excluant IC/ARM/MRC ; viandes industrielles « réduites en sel » **+44 % de K⁺ en moyenne (jusqu'à 1 500 mg/100 g)** ; absorption en bilan **88–94 %** quelle que soit la source | Directe (notices et produits industriels) | **À éviter sous ARNI/IEC/ARA2 ou ARM** (voir thèse potassium méditerranéen) |
| **Alimentation méditerranéenne (aliments entiers et sécurité K⁺)** | CORDIOPREV (1 002 coronariens) ; EMPEROR-Pooled / PARADIGM-HF / Neuen 2022 ; **Kwon 2024** (MRC K⁺ ≤ 2 000 mg/j) ; **Turban 2021** (CKD-K 3,9 g/j) ; KDIGO 2024 / KDOQI 2020 / ASN 2025 | Événements coronaires ~25 % plus bas (FEVG ≤ 35 % exclue). Pas de restriction systématique des végétaux entiers si K⁺ normale (iSGLT2/ARNI réduisent K⁺ > 6,0), **mais non prouvé sans plafond jusqu'à DFG 30** (zéro ECR ICFER ; Turban 2021 K⁺ +0,21, HK > 5,5 **OR 2,50**). Modérer jus/smoothies/fruits secs ; individualiser si DFG 30–44, diabète ou K⁺ > 4,8–5,0 | Extrapolée (coronaire) ; indirecte (alimentation MRC) | **À aborder avec l'équipe** comme base d'aliments entiers si K⁺ normale et surveillée (voir thèse potassium) |
| **Méditerranéen / DASH après diagnostic d'IC** | Cohorte WHI (3 215 femmes IC) ; Arayici 2025 | DASH : décès HR 0,84 ; méditerranéen : décès OR 0,88 (3 études) | Indirecte (observationnel ; FEVG inconnue) | Favorable, mais ne vaut pas preuve |
| **Repas pauvres en sel livrés après hospitalisation** | GOURMET-HF (66 pts, K⁺ abaissé à 3 000 mg/j si ARM/MRC) ; FOOD-HF (150 pts) | GOURMET-HF : QoL ns, réadmissions 30 j 3 contre 11 (p = 0,055). FOOD-HF : événements IC 23 % vs 18 % (ns), QoL améliorée | Partiellement directe (FEVG moy. 39 % / méd. 35 %) | Non prouvé sur les réhospitalisations ; aide possible sur la QoL |
| **Café (modéré)** | **Zuchinali 2016** (51 pts ICFER, FEVG 29 %, 61 % DAI) ; DECAF (200 FA) ; CRAVE ; van Dongen 2017 post-IDM | 500 mg caféine : extrasystoles ventriculaires 185 vs 239 (ns), zéro arythmie d'effort (Zuchinali) ; récidive FA 47 % vs 64 % (~1 tasse/j, DECAF) ; post-IDM décès CV HR 0,69 (> 2–4 tasses/j) | Partiellement directe (1 petit essai aigu ICFER) | Neutre |
| **Aliments ultra-transformés** | Revue BMJ Lane 2024 ; MESA 2026 | Décès CV RR 1,50 (GRADE très faible) ; MESA HR 1,05/portion pour IDM/AVC | Indirecte | À limiter (association cohérente) |
| **Fruits à coque (noix, amandes)** | PREDIMED (7 447 pts) ; cohortes Aune 2016 | Événements CV majeurs HR 0,72 ; 28 g/j : maladie coronaire RR 0,71 | Indirecte (prévention primaire) | Raisonnable ; choisir non salés et surveiller calories |
| **Stérols / stanols végétaux (~2 g/j)** | EAS 2014 ; ESC/EAS 2019 | LDL abaissé de 7 à 10 % ; aucun essai clinique d'événements | Indirecte | Option d'appoint pour le LDL uniquement |
| **Soutien nutritionnel si risque de dénutrition** | EFFORT IC, 645 hospitalisés | Mortalité à 30 jours : 8,4 % contre 14,8 % | Indirecte (hospitalisés ; FEVG non précisée) | **À aborder si le poids baisse** |
| **Régimes cétogènes / draconiens** | Notice dapagliflozine (*Forxiga*) | Facteur déclenchant d'acidocétose inscrit dans la notice | Directe (notice) | **À éviter sous iSGLT2** |`,
    },
    {
      headingFr: 'Ce que disent les recommandations internationales côte à côte',
      bodyMarkdownFr: `| Thème | ESC 2026 (Europe) | Consensus HFA-ESC 2024 | États-Unis (AHA/ACC/HFSA 2022 ; déclaration AHA 2022) | Royaume-Uni (NICE NG106, 2025) | Repères patients BHF |
|---|---|---|---|---|---|
| **Fer** | CST + ferritine au bilan initial (I, C). Fer IV pour les symptômes (I, B1) ; pour réduire les hospitalisations (IIa, B1). Mention d'une proposition alternative CST < 20 % | — | ICFER avec carence martiale, avec ou sans anémie : fer IV raisonnable pour fonction et QoL (2a, B-R). ASE : nocifs (3 : Danger) | Doser CST, ferritine, Hb ; envisager fer IV si Hb < 150 g/L et CST < 20 % ou ferritine < 100 (1.4.5–1.4.6) ; **signale le risque d'hypophosphatémie sous FCM** | — |
| **Sel** | **Aucun objectif en grammes dans le texte principal.** Réduire le sel jugé bénéfique. Éducation et autogestion (I, A). Tableau détaillé en supplément en ligne (Table S24 non consulté) | Apport normal ; jusqu'à 5 g/j acceptables ; éviter la restriction très stricte | Éviter l'excès de sodium est raisonnable contre la congestion (2a, C-LD) ; sans chiffre | **Ne pas conseiller de restriction systématique** ; évaluer et réduire si élevé (1.9.10) | Moins de 6 g de sel/j |
| **Liquides** | « Aucune preuve ne soutient la restriction hydrique dans l'IC chronique » (FRESH-UP, HFA 2024) ; en décompensation, au cas par cas si hyponatrémie | 1,5 à 2,5 L guidés par la soif ; 1,5 à 2 L pour cas sélectionnés | Abordée uniquement dans l'IC avancée avec hyponatrémie (2b, C-LD) | **Ne pas restreindre systématiquement** ; restreindre si hyponatrémie de dilution (1.9.10) | Restreindre uniquement sur avis médical |
| **Substituts de sel et K⁺ alimentaire** | Silencieux sur la restriction du K⁺ des aliments entiers | Aucun plafond systématique de K⁺ alimentaire | Aucune restriction systématique des végétaux entiers (**KDIGO 2024 / KDOQI 2020 / ASN 2025** ciblent d'abord les additifs K⁺ si kaliémie normale) | **Éviter les substituts de sel contenant du potassium** (1.9.11) | Éviter (riches en potassium) |
| **Antalgiques AINS** | **Non recommandés (III, B2)** : risque d'aggravation et d'hospitalisation IC | — | Classés nocifs dans l'ICFER (3 : Danger, B-NR) | — | — |
| **Dénutrition** | Évaluation nutritionnelle et interventions diététiques « peuvent être utiles » | — | — | Le suivi doit inclure l'état nutritionnel (1.8.1) | — |
| **Oméga-3** | Non mentionnés dans le texte principal | — | NYHA II–IV : peuvent être raisonnables en ajout (2b, B-R). Déclaration AHA : éviter ≥ 4 g/j | Non mentionnés | — |
| **Autres compléments** | Non mentionnés dans le texte principal | — | ICFER : vitamines, compléments et hormones non recommandés hors carence (3 : Absence de bénéfice, B-R). AHA : CoQ10 non prouvée | Non mentionnés | — |
| **Poids / obésité** | Poids de santé (I, C) ; agonistes du GLP-1 uniquement si FEVG ≥ 45 % et IMC ≥ 30 | — | — | — | — |`,
    },
    {
      headingFr: 'Zones comblées et zones encore ouvertes de la littérature',
      bodyMarkdownFr: `**Comblées par les audits et les cinq thèses de novembre 2026 :**
- Millepertuis vérifié sur les notices officielles EMA/FR BDPM/UK eMC/US FDA pour les **4 AOD**, l'éplérénone, l'atorvastatine/rosuvastatine, le ticagrélor et le clopidogrel ;
- Danshen + AOD/warfarine (Liao 2026 contre Hsu 2022) et ginkgo + rivaroxaban/clopidogrel/aspirine (Hoerr 2022 ; Mai 2025) ;
- Extrait de thé vert (EGCG) + digoxine (Kim 2018 : -31 à -33 % chez l'humain) et confirmation de l'absence d'essais humains avec les bêtabloquants IC, ARNI et iSGLT2 ;
- Décongestionnants oraux (EMA 2024, ANSM déc. 2024 Liste I pseudoéphédrine + ibuprofène, FDA nov. 2024 phényléphrine) et stimulants prescrits du TDAH (RCP FR/UK et cohortes nationales) ;
- Plafonds magnésium UE (250 mg/j) / France DJM (300 mg/j) / US (350 mg/j) ;
- Cinq thèses approfondies achevées (fer oral, fer IV sous iSGLT2, CoQ10 moderne, oméga-3 faible dose et FA, régime méditerranéen et potassium à DFG ≥ 30).

**Zones demeurant réellement ouvertes :**
- Essais dédiés de pharmacocinétique ou de saignement chez l'humain associant **ail, curcuma, ginseng, huile de poisson ou ginkgo non standardisé** avec apixaban, édoxaban, dabigatran ou ticagrélor, et extrait de thé vert avec bêtabloquants IC, ARNI ou iSGLT2 ; texte intégral du guide pratique EHRA 2021 sur les AOD ;
- Essais de boissons énergisantes, brûle-graisses ou stimulants TDAH dans l'ICFER établie ou chez des porteurs de DAI ;
- Essai randomisé d'un régime méditerranéen non plafonné en potassium dans l'ICFER sous quadrithérapie ; suppléments en ligne de l'ESC 2026 (Tables S24 et S17) et textes intégraux Légifrance/ANSES non accessibles directement.`,
    },
  ],
  relatedArticleSlugs: [
    'these-fer-iv-et-isglt2-quadritherapie',
    'these-coq10-mortalite-icfer-moderne',
    'these-omega3-faible-dose-risque-fa',
    'these-regime-mediterraneen-potassium-icfer',
    'fer-oral-haute-biodisponibilite',
    'essais-cliniques-en-cours-et-a-suivre',
    'nutrition-et-complements-insuffisance-cardiaque',
    'guide-pratique-nutrition-complements',
    'carence-martiale-et-fer-iv',
    'interactions-complements-aliments-medicaments',
    'omega-3-huile-de-poisson',
    'coenzyme-q10',
    'vitamine-d-insuffisance-cardiaque',
    'vitamines-b-insuffisance-cardiaque',
    'magnesium-insuffisance-cardiaque',
    'berberine-cholesterol-et-interactions',
    'cafeine-boissons-energisantes-et-stimulants',
    'complements-energetiques-cardiaques',
    'fibres-alimentaires-et-axe-intestin-coeur',
    'sel-et-liquides-insuffisance-cardiaque',
    'alimentation-cardioprotectrice',
    'poids-obesite-et-denutrition',
    'readaptation-cardiaque-et-activite-physique',
    'essais-cliniques-cles',
    'recommandations-comparees-esc-us-nice',
  ],
  sources: [
    {
      label: 'Cinq thèses nutritionnelles (25 nov. 2026) : fer IV/oral, CoQ10, oméga-3/FA et potassium méditerranéen',
      detail: 'Anker 2025, Mandal nov. 2026, Nouhravesh 2025, Cleland 2024, IRONOUT-HF, ORION-HF, Q-SYMBIO, NIHR HTA 2022, Cochrane 2021, CORONA, GISSI-HF, Gencer 2021, Abuknesha 2026, EMA/ANSM/MHRA, CORDIOPREV, EMPEROR-Pooled, Turban 2021, Kwon 2024, Picard 2026 et Parpia 2018.',
    },
    {
      label: 'Vitamines B, vitamine D, magnésium, compléments énergétiques, berbérine et fibres',
      detail: 'He 2024, ESPEN 2022, Cochrane 2017, NORVIT 2006, Yu 2025, EVITA, Kampka 2025, Chimura 2026 (GALACTIC-HF), Yin 2026, Carvalho 2012, McGurk 2022, Berg-Hansen 2024, Guo 2012, ANSES 2019, GutHeart 2021 et Fybogel RCP.',
    },
    {
      label: 'Audit interactions AOD, plantes, décongestionnants et stimulants (novembre 2026)',
      detail: 'Notices EMA/BDPM/eMC/FDA (millepertuis, pseudoéphédrine Liste I déc. 2024, stimulants TDAH), Liao 2026, Hsu 2022, Hoerr 2022, Mai 2025, Kim 2018 (digoxine), Zuchinali 2016, Shah 2019, ANSES 2013/2014/2016, Zhang 2024, Holt 2024 et Berthod 2026.',
    },
    {
      label: 'Recommandations internationales et essais diététiques',
      detail: 'ESC 2026, HFA-ESC 2024, KDIGO 2024, KDOQI 2020, ASN 2025, AHA/ACC/HFSA 2022, NICE NG106 (2025), BHF, SODIUM-HF, FRESH-UP, EFFORT IC, GOURMET-HF, FOOD-HF et MESA 2026.',
    },
  ],
  disclaimerType: 'medical',
};
