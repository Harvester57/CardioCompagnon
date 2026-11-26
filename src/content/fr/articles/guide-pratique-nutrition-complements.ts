import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'guide-pratique-nutrition-complements',
  sourceWikiPath: 'output/playbook-nutritional-interventions-and-supplements-2026-11-24.md',
  titleFr: 'Guide pratique : interventions nutritionnelles et compléments',
  category: 'nutrition',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'guide-pratique',
    'nutrition',
    'compléments',
    'fer-iv',
    'sel',
    'liquides',
    'potassium',
    'méditerranéen',
    'oméga-3',
    'coenzyme-q10',
    'décongestionnants',
    'stimulants',
    'interactions',
    'questions',
  ],
  aliases: [
    'Playbook nutrition',
    'Plan pratique alimentation',
    'Guide nutrition insuffisance cardiaque',
    'Exemple semaine méditerranéenne',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Actualisé le 25 novembre 2026 à partir de l'ensemble des 22 sources nutritionnelles et des cinq thèses achevées : dans la cardiomyopathie ischémique à FEVG réduite (autour de 35 %) avec ventricule gauche dilaté, l'alimentation et les compléments constituent un soutien utile mais secondaire face aux quatre piliers médicamenteux (environ 60 % de réduction modélisée des décès CV ou hospitalisations IC par rapport à l'ancienne bithérapie). Un seul traitement de type supplémentation dispose d'un fort appui des recommandations : le fer intraveineux en cas de carence prouvée par bilan sanguin (surtout si le CST est < 20 %). Quelques habitudes alimentaires sont à privilégier (alimentation méditerranéenne d'aliments entiers avec fibres et poisson gras, sel modéré, liquides selon la soif sauf limite prescrite, dépistage de toute perte de poids involontaire). Deux compléments relèvent du « possible, à discuter d'abord » (oméga-3 sur prescription 1 g/j et CoQ10), avec des précautions précisées par les thèses (risque FA et arrêt définitif EMA/ANSM/MHRA ; éviction en automédication sous warfarine/AVK). La plupart des autres vitamines et compléments énergétiques ne sont pas étayés hors carence testée, et plusieurs plantes, AINS, décongestionnants oraux (pseudoéphédrine Liste I), stimulants et produits industriels « réduits en sel » riches en additifs potassiques sont à éviter. Chaque étape de ce guide est formulée comme une question à valider avec votre cardiologue ou votre pharmacien.",
  sections: [
    {
      headingFr: '1. Quels compléments disposent de preuves dans l’ICFER ?',
      bodyMarkdownFr: `| Complément / produit | Preuves (au 25 novembre 2026) | Conclusion pratique |
|---|---|---|
| **Fer intraveineux** (si ferritine/CST bas, surtout **CST < 20 %**) | 6 ECR, 7 175 pts : ~20 % d'hospitalisations IC en moins (~30 % la 1re année), confirmé par **Mandal nov. 2026** (zéro COI, RR 0,78 en effet fixe ; intervalles aléatoires croisant 1), pas de gain survie. Seuls **7,2 %** sous iSGLT2 (23,6 % FAIR-HF2), zéro donnée stratifiée iSGLT2. **FCM (*Ferinject*)** : **51,9 %** d'hypophosphatémie modérée à sévère à J21 contre ~4–8 % sous **FDI (*Monofer*)** | **À aborder avec l'équipe** (ESC 2026 Classe I symptômes, IIa hospitalisations ; interroger sur CST < 20 % et choix FCM vs FDI) |
| **Fer oral** (dont Ferrochel, sucrosomial, maltol ferrique) | IRONOUT-HF : aucun bénéfice. Les formes « mieux absorbées » manquent d'essais contrôlés dans l'IC et subissent la régulation normale de l'hepcidine | Non étayé |
| **Oméga-3 sur prescription ~1 g/j** (contre poisson gras et OTC) | GISSI-HF (pré-moderne) : décès 27 % contre 29 % (NNT 56 sur 4 ans). Thèse FA faible dose **partiellement réfutée** : décalage poolé **+7 à +12 %** à ≤ 1 g/j (GISSI-HF 15,2 % vs 14,0 %), et **EMA/ANSM/MHRA** classent la FA en effet fréquent sur tous les esters éthyliques sur prescription avec **arrêt définitif si une FA survient**. Poisson gras sans excès de FA ; gélules OTC variables | Prescription 1 g/j : Possible, priorité faible (décision cardiologue). Poisson gras : **À aborder**. Gélules OTC : Non étayé |
| **Coenzyme Q10** | Zéro ECR achevé sur quadrithérapie moderne. Mortalité IC **NIHR HTA 2022 non significative (RR 0,68 ; 0,45–1,03)** ; pools anciens (Lei/Khan/An) contaminés par **KISEL-10** ; **CORONA** réfute la nocivité sous statines ; **CORAL, DANUTRIO-HF et SELEQT-HF** en cours (2028–2030) ; **risque de chute d'INR sous warfarine** | Possible, priorité faible ; **éviter en automédication sous warfarine/AVK** |
| **Vitamines B** (thiamine, folates + B12 + B6, B12, forte B6, NAD+ IV) | **Thiamine :** 7 ECR (He 2024) sans gain FEVG (doser si diurétiques de l'anse au long cours). **Homocystéine :** Cochrane 2017 neutre ; **NORVIT 2006** tendance nocive (**RR 1,22**) en triple association post-IDM. **B12 :** doser sous metformine/IPP. **Forte B6 :** neuropathie | Corriger une carence dosée uniquement ; **éviter** triple B post-IDM et forte B6 |
| **Vitamine D** | Aucun bénéfice CV ou IC (An 2022, EVITA) ; marche de 6 min raccourcie (-39 m) dans les essais IC. Plafond adulte **4 000 UI/j** ; précautions hypercalcémie avec **digoxine et thiazides** | Non étayé pour le cœur (traiter uniquement une carence prouvée) |
| **Magnésium (toute forme)** | Un minuscule essai orotate non répliqué (MACH) ; GALACTIC-HF Mg bas neutre, Mg élevé défavorable ; vétérans US Mg oral bénéfique si taux bas (**HR 0,91**) mais **défavorable si normal (HR 1,11, observationnel)**. Plafonds adultes sains (250 UE / 300 France DJM / 350 US mg/j) non applicables sans tenir compte du **DFG** | Doser d'abord avec l'équipe ; pas un traitement cardiaque ; prudence si reins fragiles |
| **Compléments énergétiques** (créatine, taurine, D-ribose, cétones) | **Créatine :** aucun gain d'effort à 6 mois et **abaisse faussement le DFG**. **Taurine :** zéro gain FEVG. **D-ribose :** petits essais fragiles, hypoglycémies. **Esters cétoniques :** gain hémodynamique court terme seulement (KETO-AHF en cours). **Sels de cétones :** charge sodée élevée (900 mg/dose) | Créatine, taurine, D-ribose, esters cétoniques : Non étayés hors essais. **Sels de cétones : À éviter** |
| **Fibres alimentaires, psyllium et probiotiques** | **25–29 g/j de fibres alimentaires** liés à ~30 % de décès coronaires en moins. **GutHeart** (probiotiques/rifaximine dans l'ICFER) neutre. **Psyllium :** ≥ 150 mL de liquide et espacement de la digoxine/warfarine | Fibres alimentaires : **À aborder**. Probiotiques pour l'IC : Non étayé. Psyllium : option laxative (vérifier horaire et liquides) |
| **Berbérine** | Inhibe **CYP3A4, CYP2D6, CYP2C9 et P-gp** ; interfère avec statines, bêtabloquants, warfarine, apixaban/rivaroxaban, ivabradine et digoxine ; **ANSES** déconseille de l'associer aux médicaments | **À éviter** sauf validation pharmacien/cardiologue |
| **Vitamine E, bêta-carotène, calcium + vitamine D** | Signaux de nocivité (hospitalisation IC RR 1,21, décès RR 1,10, AVC RR 1,17) | **À éviter** sauf prescription médicale |`,
    },
    {
      headingFr: '2. Ce que disent les recommandations récentes',
      bodyMarkdownFr: `- **ESC 2026 (Europe, remplace 2021/2023) :**
  - doser ferritine et CST au bilan initial ; fer IV dans l'ICFER symptomatique carencée (Classe I symptômes, IIa hospitalisations ; note que le seuil CST < 20 % a été proposé) ;
  - conseils d'hygiène de vie (Classe I C) et éducation thérapeutique / autogestion (Classe I A) ;
  - aucun objectif de sel en grammes dans le texte principal (réduire le sel jugé bénéfique ; tableau détaillé en supplément en ligne non consulté) ;
  - AINS et inhibiteurs de la COX-2 non recommandés (Classe III) ; aucune preuve pour la restriction hydrique dans l'IC chronique stable.
- **Consensus HFA-ESC 2024 :** sel normal jusqu'à environ 5 g/j acceptable (éviter la restriction très stricte) ; liquides environ 1,5 à 2,5 L/j guidés par la soif.
- **Recommandations néphrologiques sur le potassium (KDIGO 2024, KDOQI 2020, ASN 2025) :** rejettent l'interdiction prophylactique des fruits et légumes entiers lorsque la kaliémie est normale ; ciblent en priorité les **additifs potassiques des aliments transformés** et recommandent un suivi diététique individualisé en cas d'hyperkaliémie ou de baisse du DFG.
- **AHA 2022 et recommandations américaines AHA/ACC/HFSA 2022 :** fer IV raisonnable (2a) ; éviter l'excès de sodium (2a) sans chiffre en grammes ; restriction hydrique uniquement en IC avancée avec hyponatrémie (2b) ; oméga-3 envisageables en ajout (2b), éviter ≥ 4 g/j ; vitamines et compléments hors carence non recommandés (Classe 3 : Absence de bénéfice) ; CoQ10 non prouvée ; déclarer chaque complément à toute l'équipe.
- **NICE NG106 (Royaume-Uni, mise à jour 2025) et BHF :** ne pas restreindre systématiquement sel ni liquides (réduire si élevés ; BHF < 6 g/j) ; **éviter les substituts de sel au potassium** (1.9.11) ; surveiller l'état nutritionnel et le bilan martial (signale l'hypophosphatémie sous FCM).`,
    },
    {
      headingFr: '3. Habitudes alimentaires utiles et évolutions récentes (2022–2026)',
      bodyMarkdownFr: `### Habitudes alimentaires qui comptent vraiment
- **Alimentation méditerranéenne d'aliments entiers (et réalité sur le potassium) :** dans la maladie coronaire (CORDIOPREV), réduction d'environ 25 % des événements CV majeurs sur 7 ans (FEVG ≤ 35 % exclue ; recommandation faible en faveur de la HAS oct. 2026). Sous **ARNI/IEC + ARM + iSGLT2**, il n'est pas nécessaire de bannir par principe les légumes, légumineuses et fruits entiers si votre kaliémie est normale (iSGLT2 et ARNI réduisent les K⁺ > 6,0 mmol/L). En revanche, un régime libre riche en potassium n'est **pas démontré sûr jusqu'à DFG 30** (zéro ECR ICFER ; Kwon 2024 plafonnait à ≤ 2 000 mg/j ; Turban 2021 OR 2,50), l'absorption réelle en bilan est de **88 à 94 %**, les jus/smoothies/fruits secs délivrent des bolus rapides, et les **additifs potassiques cachés des produits « réduits en sel »** (jusqu'à 1 500 mg/100 g dans les viandes transformées) doivent être évités. Individualisez avec votre équipe si DFG 30–44, diabète ou kaliémie > 4,8–5,0 mmol/L.
- **Fibres alimentaires (25–29 g/j par les aliments entiers) :** associées à ~30 % de mortalité coronaire en moins en population générale et utiles contre la constipation (qui freine l'élimination colique du potassium).
- **Repas médicalisés livrés post-hospitalisation :** GOURMET-HF (66 pts, K⁺ réduit à 3 000 mg/j si ARM/MRC) et FOOD-HF (150 pts) améliorent la qualité de vie sans preuve claire sur les réadmissions.
- **Aliments du quotidien :** **café modéré** neutre (essai ICFER **Zuchinali 2016**, n = 51, FEVG 29 %, 61 % DAI : 500 mg de caféine sans excès d'extrasystoles [185 vs 239] ; DECAF moins de récidive de FA à ~1 tasse/j) ; **ultra-transformés** à limiter (sel et additifs potassiques cachés) ; **fruits à coque nature non salés** raisonnables ; **stérols végétaux (~2 g/j)** -7 à -10 % de LDL sans essai clinique d'événements.
- **Sel modéré, liquides selon la soif et vigilance pondérale :** éviter les extrêmes (SODIUM-HF, FRESH-UP) ; signaler toute perte de poids involontaire (EFFORT : mortalité à 30 j ramenée de 14,8 % à 8,4 %).

### Ce qui a changé récemment (2022–2026)
- **Sel et liquides :** FRESH-UP (2025) et HFA-ESC 2024 abandonnent les restrictions strictes systématiques chez les patients stables.
- **Fer intraveineux :** FAIR-HF2 (2025) et la revue indépendante **Mandal nov. 2026** confirment la baisse des hospitalisations (~20 %) sans gain de survie ; bénéfice centré sur **CST < 20 %** ; HEART-FID (**Nouhravesh 2025**) mesure **51,9 %** d'hypophosphatémies modérées à sévères à J21 sous FCM contre ~4–8 % sous FDI.
- **Oméga-3 et FA :** **EMA PRAC (2023), ANSM (2023) et MHRA (2024)** ajoutent la FA en effet indésirable fréquent sur tous les esters éthyliques sur prescription avec arrêt définitif si FA ; la sensibilité ASCEND-EHR de Gencer (1,075–1,08) réconcilie Abuknesha 2026 (1,07).
- **CoQ10 :** découverte de la contamination **KISEL-10** dans Lei/Khan/An, mortalité non significative dans **NIHR HTA 2022** (RR 0,68) et lancement de **CORAL, DANUTRIO-HF (N = 4 044) et SELEQT-HF**.
- **Décongestionnants du rhume :** l'**ANSM a classé tous les vasoconstricteurs oraux à base de pseudoéphédrine sur ordonnance (Liste I) le 11 décembre 2024** (certains contiennent de l'ibuprofène) ; la FDA propose de retirer la phényléphrine orale.`,
    },
    {
      headingFr: '4. Produits à risque ou incompatibles avec les médicaments cardiaques',
      bodyMarkdownFr: `Ce tableau concerne les **produits pris de votre propre initiative** (à l'exception des stimulants prescrits du TDAH, qui relèvent d'une réévaluation conjointe spécialiste + cardiologue). N'interrompez jamais un médicament prescrit sans avis médical, et consultez votre cardiologue ou votre pharmacien avant tout complément si vous prenez un anticoagulant, un antiagrégant, un médicament hyperkaliémiant ou de la digoxine.

| Produit | Interagit avec | Pourquoi (et règle de conduite) |
|---|---|---|
| **Substituts de sel au potassium, comprimés de K⁺ et additifs K⁺ cachés** (« réduit en sel ») | ARNI (*Entresto*), IEC, ARA2, ARM | Risque d'hyperkaliémie grave ; viandes « réduites en sel » +44 % de K⁺ en moyenne (jusqu'à 1 500 mg/100 g). **À éviter ; valider avec cardiologue/diététicien** |
| **AINS OTC** (ibuprofène, naproxène, diclofénac) et **décongestionnants oraux** (pseudoéphédrine, phényléphrine) | ARNI, diurétiques, coronaires, IC elle-même | AINS : IRA et rétention hydrosodée (ESC Classe III). **Pseudoéphédrine orale passée sur Liste I en France le 11 déc. 2024** (IDM, AVC, PRES/RCVS), et *Nurofen Rhume* / *Rhinadvil* contiennent de l'**ibuprofène** |
| **Régimes cétogènes ou draconiens, jeûnes prolongés** | iSGLT2 (dapagliflozine — *Forxiga*, empagliflozine — *Jardiance*) | Facteurs déclenchants d'acidocétose euglycémique inscrits sur la notice |
| **Boissons énergisantes** (grandes quantités, alcool ou effort) ; **brûle-graisses stimulants, pré-entraînements, gélules/poudres de caféine** | Rythme / QTc, bêtabloquants, DAI, pression artérielle | Allongement QTc et hausse PA supérieurs à la caféine seule (ANSES : jamais avec alcool ni effort) ; substances cachées fréquentes (sibutramine, diurétiques). **À éviter** |
| **Stimulants prescrits du TDAH** (méthylphénidate, lisdexamfétamine) | IC, cardiomyopathie, IDM, PA, QTc | **RCP FR BDPM et UK eMC** contre-indiquent ou mettent en garde en cas d'IC/cardiomyopathie/IDM ; surrisque CV/IC dans les cohortes nationales. **Ne jamais débuter ni arrêter seul : avis spécialiste + cardiologue** |
| **Huile de poisson forte dose (> 1–1,5 g/j ; ≥ 4 g/j) et gélules OTC** | Rythme (FA) ; antithrombotiques (saignements à 4 g/j) | Excès net de FA (OMEMI, RESPECT-EPA, REDUCE-IT +6,2 % si FA préalable) ; décalage +7–12 % dès ≤ 1 g/j (EMA/ANSM/MHRA arrêt définitif si FA) ; surveillance saignement sous aspirine/clopidogrel/warfarine |
| **Coenzyme Q10** (sous warfarine/AVK) | Warfarine (*Coumadine*), acénocoumarol (*Sintrom*), fluindione (*Previscan*) ; PA | Analogie vitamine K ; chutes d'INR rapportées ; exclue de CORAL et DANUTRIO-HF. **Éviter en automédication sous AVK — avis cardiologue/pharmacien** |
| **Triple association acide folique + B12 + B6 post-IDM ; vitamine B6 forte dose** | Risque post-infarctus ; nerfs périphériques | Signal défavorable NORVIT (RR 1,22) après IDM ; neuropathie sensitive sous forte B6 prolongée |
| **Vitamine D excessive (> 4 000 UI/j) ; calcium + vitamine D ; vitamine E ; bêta-carotène** | Digoxine, thiazides (vitamine D) ; risques IC/AVC/décès | L'hypercalcémie favorise la toxicité de la digoxine et les thiazides retiennent le calcium ; signaux de nocivité propres pour E, bêta-carotène et Ca+VitD |
| **Compléments de magnésium / antiacides Al-Mg** | Insuffisance rénale (**DFG < 30**) ; **rosuvastatine**, antibiotiques, bisphosphonates | Risque d'hypermagnésémie en MRC ; les antiacides Al/Mg divisent par deux l'absorption de la rosuvastatine (espacer ≥ 2 h) ; doser avant de supplémenter |
| **Créatine et sels de cétones (sels de BHB)** | Bilan rénal (DFG) ; apport sodé | La créatine élève la créatinine et **abaisse faussement le DFG calculé** ; sels de cétones ~900 mg de sodium/portion |
| **Psyllium / ispaghul** (laxatif fibreux) | Digoxine, warfarine ; limite hydrique | Peut retarder l'absorption de la digoxine/warfarine (espacer 30–60 min) ; nécessite ≥ 150 mL de liquide |
| **Berbérine** | Statines, métoprolol/carvédilol, warfarine, apixaban/rivaroxaban, ivabradine, digoxine | Inhibe CYP3A4, CYP2D6, CYP2C9 et P-gp ; **ANSES** déconseille de l'associer aux médicaments. **À éviter** |
| **Réglisse véritable** (bonbons, tisanes, plantes) | Diurétiques, digoxine, ARM, IC elle-même | Rétention hydrosodée et hypokaliémie (s'oppose aux ARM) ; déconseillée par l'EMA |
| **Millepertuis** | **Les 4 AOD** (dabigatran, rivaroxaban, apixaban, édoxaban), **éplérénone** (-30 % AUC), ivabradine, **atorvastatine**, simvastatine, ticagrélor, **clopidogrel**, digoxine, warfarine, antidépresseurs | Affaiblit les AOD, l'éplérénone, l'ivabradine et l'atorvastatine (pas d'alerte rosuvastatine), tout en **augmentant le risque hémorragique du clopidogrel**. **À éviter** |
| **Levure de riz rouge** | Statines prescrites | Lovastatine non déclarée (cumul de toxicité musculaire/hépatique) et citrinine |
| **Extrait concentré de thé vert** (gélules EGCG, brûle-graisses) | **Digoxine** (-31 à -33 % chez l'humain), lisinopril (-67 %), nadolol (-85 %), céliprolol (-98,6 %), statines (~-20 %) ; foie | Diminue l'exposition à la digoxine, aux IEC et statines ; hépatites graves rares (UE < 800 mg EGCG/j). **À éviter en complément** (le thé ordinaire diffère) |
| **Danshen** (sauge rouge) | Warfarine, **AOD**, dosages de digoxine | Saignements warfarine + Liao 2026 majorité AOD (aIRR ~4 ; Hsu 2022 neutre) ; fausse dosages digoxine ; induit CYP3A4/P-gp. **À éviter avec anticoagulants** |
| **Ginkgo, ail en gélules, vitamine E forte dose, ginseng, mélanges multi-plantes inconnus** | Aspirine, clopidogrel, ticagrélor, anticoagulants, digoxine | **Ginkgo :** EGb 761 + rivaroxaban neutre (financé fabricant), mais signaux de saignement sous clopidogrel/aspirine (UE : arrêt 3–4 j pré-op). **Ail :** arrêt 7 j pré-op. **Mélanges inconnus :** éviter jusqu'à vérification |
| **Jus de pamplemousse** | Simvastatine, atorvastatine (> 1,2 L/j), ivabradine | Augmente les concentrations sanguines (pas d'avertissement sur la rosuvastatine) |`,
    },
    {
      headingFr: '5. Neuf étapes concrètes à discuter avec votre équipe',
      bodyMarkdownFr: `1. **« Ma ferritine et mon CST ont-ils été dosés (mon CST est-il < 20 %) et, si du fer IV est indiqué, quelle spécialité (FCM ou FDI) et quel suivi du phosphore s'appliquent ? »** C'est la question nutritionnelle à plus forte valeur clinique.
2. **« Quel objectif de sel me conseillez-vous ? Ai-je besoin d'une limite fixe de liquides tant que je suis stable ? »** Attendez-vous à un conseil de modération pour le sel ; les boissons restent souvent guidées par la soif.
3. **« Compte tenu de ma dernière kaliémie et de mon DFG, puis-je suivre une alimentation méditerranéenne d'aliments entiers tout en évitant les substituts de sel au potassium et les produits industriels réduits en sel riches en additifs potassiques ? »**
4. **« Les oméga-3 sur prescription ou la CoQ10 ont-ils un intérêt avec mon ordonnance (y compris mon histoire rythmique et mes anticoagulants/antiagrégants) ? »** Apportez toutes vos boîtes, tisanes et produits sans ordonnance à votre cardiologue ou votre pharmacien.
5. **« Faut-il doser mon magnésium, ma vitamine B12, ma vitamine D ou ma thiamine (compte tenu de mes diurétiques de l'anse, IPP ou metformine) plutôt que prendre des comprimés par précaution ? »**
6. **« Quels médicaments contre la douleur ou le rhume sont sûrs pour moi à la place de l'ibuprofène ou de la pseudoéphédrine ? »**
7. **« Si je souhaite perdre du poids, comment procéder sans risque avec mes médicaments ? »** Évitez tout régime cétogène/draconien sous iSGLT2 ainsi que tous les brûle-graisses stimulants.
8. **« Puis-je consulter un(e) diététicien(ne) et bénéficier d'une réadaptation cardiaque (SMR cardiovasculaire) ? »**
9. **Signaler les variations de poids dans les deux sens :** prise de poids rapide (rétention d'eau) comme perte de poids lente et involontaire ou perte d'appétit (dénutrition / fonte musculaire).`,
    },
    {
      headingFr: '6. Exemple concret : une semaine d’alimentation méditerranéenne en pratique',
      bodyMarkdownFr: `| Composante | À quoi cela ressemble au quotidien | Pourquoi |
|---|---|---|
| **Base** | Légumes, légumineuses (lentilles, pois chiches, haricots) et céréales complètes (en visant ~25 à 29 g/j de fibres alimentaires) | Schéma CORDIOPREV / ESC 2026 / Reynolds 2019 |
| **Matières grasses** | Huile d'olive vierge extra et fruits à coque nature non salés plutôt que beurre et graisses transformées | Bras intervention CORDIOPREV ; bras noix PREDIMED |
| **Protéines** | Poisson gras ~2 fois/semaine, légumineuses, moins de charcuteries et viandes transformées | Modèle méditerranéen ; les oméga-3 du poisson gras ne montrent **aucun excès de FA** |
| **Sel et K⁺ caché** | Cuisiner maison, lire les étiquettes, relever avec herbes, épices et citron ; **aucun substitut de sel au KCl et vigilance sur les additifs K⁺ cachés des produits « réduits en sel »** | HFA 2024 ; notices Entresto/ARM ; Parpia 2018 |
| **K⁺ concentré** | Modérer jus de fruits/légumes, smoothies denses, fruits secs et concentré de tomate en cas de DFG 30–44, de diabète ou de kaliémie haute | Thèse 4 (sécurité potassium régime méditerranéen) |
| **Boissons** | Boire selon votre soif sauf limite prescrite ; compter soupes et potages si une limite est fixée | FRESH-UP ; BHF |
| **Ultra-transformés** | Réduire plats préparés, charcuteries et biscuits apéritifs industriels | Risque CV accru et sources majeures de sodium et d'additifs potassiques cachés |
| **Café et boissons** | Café/thé ordinaires modérés apparemment neutres (Zuchinali 2016) ; **éviter les boissons énergisantes** (surtout avec alcool ou effort) | Zuchinali 2016 ; DECAF ; ANSES 2013 |
| **Alcool** | Faible ; aucune consommation excessive (ESC 2026 : réduire est bénéfique ; ≤ 3 verres/semaine en cas de FA) | ESC 2026 ; ESC 2024 FA |

Les portions, l'apport calorique et les aliments riches en potassium s'adaptent individuellement avec votre médecin ou un(e) diététicien(ne), en particulier si votre DFG est entre 30 et 44, en cas de diabète, de kaliémie habituelle > 4,8–5,0 mmol/L ou en l'absence de diurétique de l'anse.`,
    },
    {
      headingFr: '7. Les cinq thèses nutritionnelles achevées (25 novembre 2026)',
      bodyMarkdownFr: `Les cinq questions ouvertes issues de la première version de ce guide ont toutes fait l'objet d'une enquête scientifique complète achevée le **25 novembre 2026** :

1. **Fer oral à haute biodisponibilité (Ferrochel, sucrosomial, maltol ferrique) — Verdict : Preuves insuffisantes, plutôt en défaveur (confiance moyenne).** Aucun essai randomisé évalué par les pairs n'a démontré de bénéfice dans l'ICFER ; en contexte inflammatoire humain, les nouvelles formes restent soumises à l'hepcidine et rechargent bien moins les réserves que le fer IV.
2. **Fer intraveineux sur quadrithérapie moderne incluant un iSGLT2 — Verdict : Partiellement étayée (confiance moyenne).** La réduction poolée d'environ 20 % des hospitalisations IC tient globalement (confirmée par la revue sans conflit d'intérêts Mandal nov. 2026), mais seuls ~7,2 % (519/7 175) prenaient un iSGLT2 (23,6 % dans FAIR-HF2) sans donnée stratifiée ; le bénéfice se concentre sur le **CST < 20 %**, et le **FCM** entraîne **51,9 %** d'hypophosphatémies modérées à sévères à J21 contre ~4–8 % sous **FDI**.
3. **Coenzyme Q10 et mortalité dans l'ICFER sous traitement moderne — Verdict : Preuves insuffisantes (confiance moyenne).** Zéro essai achevé sous ARNI/iSGLT2 ; mortalité **NIHR HTA 2022** non significative (RR 0,68 ; 0,45–1,03) ; pools anciens contaminés par **KISEL-10** ; **CORONA** réfute la nocivité sous statines ; **CORAL, DANUTRIO-HF (N = 4 044) et SELEQT-HF** en cours (2028–2030) ; éviter en automédication sous warfarine/AVK.
4. **Oméga-3 à faible dose (≤ 1 g/j) et risque de fibrillation atriale — Verdict : Partiellement réfutée (confiance moyenne).** L'excès massif siège au-dessus de 1–1,5 g/j (OMEMI, RESPECT-EPA, STRENGTH, REDUCE-IT), mais ≤ 1 g/j ne peut être déclaré sans risque : décalage poolé **+7 à +12 %** (Gencer ASCEND-EHR 1,075–1,08 ; Abuknesha 1,07), GISSI-HF en hausse numérique (15,2 % vs 14,0 %), et **EMA/ANSM/MHRA** imposent l'arrêt définitif si une FA survient. Le poisson gras ne montre aucun excès de FA.
5. **Régime méditerranéen riche en potassium sans restriction systématique à DFG ≥ 30 — Verdict : Partiellement étayée (confiance moyenne).** L'interdiction systématique des végétaux entiers ordinaires n'est pas étayée si la kaliémie est normale (tampon iSGLT2/ARNI sur les K⁺ > 6,0), mais un régime riche en K⁺ sans plafond n'est pas prouvé jusqu'à DFG 30 (zéro ECR ICFER ; Turban 2021 OR 2,50) ; éviter sels au KCl et additifs K⁺ cachés, et personnaliser si DFG 30–44, diabète ou K⁺ > 4,8–5,0.`,
    },
  ],
  relatedArticleSlugs: [
    'nutrition-et-complements-insuffisance-cardiaque',
    'tableau-preuves-nutrition-complements',
    'these-fer-iv-et-isglt2-quadritherapie',
    'these-coq10-mortalite-icfer-moderne',
    'these-omega3-faible-dose-risque-fa',
    'these-regime-mediterraneen-potassium-icfer',
    'fer-oral-haute-biodisponibilite',
    'carence-martiale-et-fer-iv',
    'sel-et-liquides-insuffisance-cardiaque',
    'alimentation-cardioprotectrice',
    'poids-obesite-et-denutrition',
    'omega-3-huile-de-poisson',
    'coenzyme-q10',
    'vitamine-d-insuffisance-cardiaque',
    'vitamines-b-insuffisance-cardiaque',
    'magnesium-insuffisance-cardiaque',
    'berberine-cholesterol-et-interactions',
    'cafeine-boissons-energisantes-et-stimulants',
    'complements-energetiques-cardiaques',
    'fibres-alimentaires-et-axe-intestin-coeur',
    'interactions-complements-aliments-medicaments',
    'questions-equipe-cardiologie',
    'readaptation-cardiaque-et-activite-physique',
  ],
  sources: [
    {
      label: 'Guide pratique nutrition et compléments (actualisation du 25 novembre 2026 — 22 fiches sources)',
      detail: 'Synthèse opérationnelle regroupant la fiche nutrition principale, les 14 fiches concepts (fer, sel/liquides, alimentation, poids, oméga-3, CoQ10, interactions, vitamines B, vitamine D, magnésium, berbérine, caféine/stimulants, compléments énergétiques, fibres/microbiote), le tableau des preuves et la liste de questions.',
    },
    {
      label: 'Cinq thèses nutritionnelles achevées le 25 novembre 2026',
      detail: 'Fer oral haute biodisponibilité, fer IV sur quadrithérapie + iSGLT2, CoQ10 et mortalité moderne, oméga-3 faible dose et FA, régime méditerranéen et sécurité potassium à DFG ≥ 30.',
    },
    {
      label: 'Recommandations ESC 2026, HFA-ESC 2024, KDIGO 2024, KDOQI 2020, ASN 2025, AHA/ACC/HFSA 2022, NICE NG106 (2025) et avis ANSM/EMA/EFSA/ANSES',
      detail: 'Repères cliniques, alertes réglementaires sur les esters éthyliques d’oméga-3, le millepertuis, la pseudoéphédrine orale (Liste I déc. 2024), les stimulants TDAH, la berbérine et les sels au KCl.',
    },
  ],
  disclaimerType: 'medical',
};
