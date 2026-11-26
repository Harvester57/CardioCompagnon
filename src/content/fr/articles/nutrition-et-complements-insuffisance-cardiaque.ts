import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'nutrition-et-complements-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/topics/nutrition-and-supplements-in-heart-failure.md',
  titleFr: "Nutrition et compléments alimentaires dans l'insuffisance cardiaque",
  category: 'nutrition',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'nutrition',
    'compléments',
    'alimentation',
    'carence-martiale',
    'sel',
    'liquides',
    'potassium',
    'coenzyme-q10',
    'oméga-3',
    'vitamine-d',
    'vitamines-b',
    'magnésium',
    'décongestionnants',
    'stimulants',
    'interactions',
    'synthèse',
  ],
  aliases: [
    'Alimentation et insuffisance cardiaque',
    'Compléments alimentaires insuffisance cardiaque',
    'Que manger',
    'Interventions nutritionnelles',
    'Quels compléments valent la peine',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "L'alimentation et les compléments alimentaires ne peuvent pas remplacer le traitement de fond : pris ensemble, les quatre piliers médicamenteux réduisent, d'après les modélisations, les décès cardiovasculaires ou les hospitalisations pour insuffisance cardiaque d'environ 60 % par rapport à l'ancienne bithérapie. Quatre sujets méritent toutefois d'être abordés avec votre équipe de cardiologie : un bilan martial (le fer intraveineux, surtout lorsque le CST est inférieur à 20 %, diminue les hospitalisations et améliore les symptômes, contrairement aux comprimés), une alimentation méditerranéenne d'aliments entiers avec fibres et poisson gras (sans interdiction systématique des végétaux entiers si votre kaliémie est normale, mais en évitant les substituts de sel au potassium et les additifs potassiques cachés), un sel modéré sans restriction extrême (et des liquides guidés par la soif sauf consigne contraire), ainsi que la surveillance de toute perte de poids involontaire. Les oméga-3 sur prescription (1 g/j) et la coenzyme Q10 relèvent du « possible, à discuter d'abord », les cinq thèses achevées en novembre 2026 précisant leurs limites et risques (règle EMA/ANSM/MHRA d'arrêt définitif des oméga-3 en cas de fibrillation atriale ; prudence warfarine/AVK avec la CoQ10). La plupart des autres vitamines, minéraux et compléments énergétiques ne sont pas étayés hors carence documentée, tandis que plusieurs plantes, AINS, décongestionnants oraux du rhume (pseudoéphédrine passée sur Liste I en France) et stimulants sont à éviter.",
  sections: [
    {
      headingFr: "L'essentiel en un coup d'œil",
      bodyMarkdownFr: `Cet article répond à la question : *« Quelles interventions nutritionnelles et quels compléments alimentaires méritent d'être envisagés dans une cardiomyopathie ischémique à FEVG réduite (autour de 35 %) ? »* Il synthétise les fiches thématiques détaillées et les **cinq thèses nutritionnelles achevées** en novembre 2026.

| Verdict | Élément | Pourquoi |
|---|---|---|
| **À aborder avec l'équipe** | Bilan martial ; fer intraveineux si carence (surtout **CST < 20 %**) | 6 essais (7 175 pts) : ~20 % d'hospitalisations IC en moins (~30 % la 1re année), confirmé par la méta-analyse indépendante sans conflit d'intérêts **Mandal nov. 2026** (RR 0,78 en effet fixe ; intervalles aléatoires croisant 1) ; ESC Classe I symptômes / IIa hospitalisations. Seuls **7,2 %** prenaient un iSGLT2 (23,6 % dans FAIR-HF2), zéro donnée stratifiée iSGLT2, et le **carboxymaltose ferrique (FCM)** provoque **51,9 %** d'hypophosphatémies modérées à sévères à J21 contre ~4–8 % avec le **dérisomaltose ferrique (FDI)** |
| **À aborder avec l'équipe** | Alimentation méditerranéenne d'aliments entiers (avec poisson gras ; vigilance K⁺ si DFG 30–44 ou diabète) | Essai coronaire sur 7 ans (CORDIOPREV) : ~25 % d'événements CV majeurs en moins (FEVG ≤ 35 % exclue). Pas de bannissement systématique des végétaux entiers si la kaliémie est normale (iSGLT2 et ARNI tamponnent les K⁺ > 6,0), mais un régime libre riche en K⁺ n'est pas prouvé jusqu'à DFG 30 (zéro ECR ICFER ; **Turban 2021** OR 2,50). Modérer jus/smoothies/fruits secs et **éviter les additifs K⁺ cachés** des produits « réduits en sel » |
| **À aborder avec l'équipe** | Aliments riches en fibres (céréales complètes, légumineuses, légumes) | **25 à 29 g/j** associés à ~30 % de décès coronaires en moins en population générale ; dans l'IC, données d'enquête (HR 0,68) ; privilégier les aliments plutôt que les compléments |
| **À aborder avec l'équipe** | Sel modéré (éviter les excès, éviter les extrêmes) | La restriction stricte (< 1 500 mg sodium/j, SODIUM-HF) n'a pas réduit décès ni hospitalisations ; limiter les excès reste utile pour la tension artérielle |
| **À aborder avec l'équipe** | Liquides guidés par la soif, sauf limite fixée par l'équipe | Une limite fixe de 1,5 L/j n'a apporté aucun bénéfice et a majoré la soif chez les patients stables (FRESH-UP) |
| **À aborder avec l'équipe** | Dépistage nutritionnel si le poids ou l'appétit baisse | Soutien nutritionnel chez des patients hospitalisés à risque (âge médian 79 ans ; peu de FEVG réduites) : mortalité à 30 jours réduite de 14,8 % à 8,4 %, sans baisse des réadmissions (EFFORT) |
| **Possible, priorité faible** | Oméga-3 sur prescription ~1 g/j (*Omacor*) (poisson gras : **À aborder** ; gélules OTC : Non étayé) | Petite baisse pré-moderne de mortalité dans GISSI-HF (NNT 56 sur 4 ans). Thèse FA à faible dose **partiellement réfutée** : décalage poolé **+7 à +12 %** à ≤ 1 g/j (GISSI-HF 15,2 % vs 14,0 %, strict 11,2 % vs 9,8 %), **EMA/ANSM/MHRA** classent la FA en effet fréquent pour tous les esters éthyliques sur prescription avec **arrêt définitif si une FA survient** ; excès net à 1,8–4 g/j (OMEMI, RESPECT-EPA, REDUCE-IT). Le poisson gras ne montre aucun excès de FA ; les gélules OTC sont souvent sous-dosées ou oxydées |
| **Possible, priorité faible** | Coenzyme Q10 (**éviter en automédication sous warfarine/AVK**) | **Preuves insuffisantes** sous quadrithérapie moderne : zéro essai achevé sous ARNI/iSGLT2 ; mortalité **NIHR HTA 2022** restreinte à l'IC **non significative (RR 0,68 ; 0,45–1,03)** ; Cochrane 2021 repose sur 1–2 essais anciens ; pools antérieurs (Lei/Khan/An) contaminés par **KISEL-10** (sujets âgés sains) ; **CORONA** réfute la nocivité de la déplétion sous statines ; **CORAL, DANUTRIO-HF et SELEQT-HF** en cours (2028–2030) |
| **Non étayé** | Fer oral (comprimés), dont formes « mieux absorbées » (Ferrochel, sucrosomial, maltol ferrique) | Aucun bénéfice dans IRONOUT-HF ; les formes récentes n'ont pas d'essai contrôlé probant dans l'IC et subissent la régulation normale par l'hepcidine |
| **Non étayé** | Multivitamines, vitamines C et D, sélénium, antioxydants | Aucun bénéfice CV dans les grandes méta-analyses ; la vitamine D a raccourci la marche de 6 min (-39 m) dans les essais IC (traiter une carence prouvée uniquement ; plafond adulte 4 000 UI/j ; vigilance digoxine/thiazides) |
| **Non étayé** | Thiamine (B1), L-carnitine (hors carence) ; acide folique, B12 et B6 « pour le cœur » | Thiamine : aucun gain de FEVG sur 7 ECR (He 2024 ; dosage à discuter sous diurétiques de l'anse au long cours) ; vitamines B homocystéine : pas moins d'infarctus ni de décès, signal défavorable de la triple association après infarctus |
| **Non étayé** | Compléments de magnésium, toute forme (hors carence avérée) | Un seul minuscule essai non répliqué sur l'orotate (MACH) ; GALACTIC-HF magnésium bas neutre et élevé défavorable ; vétérans US magnésium oral bénéfique si taux bas (**HR 0,91**) mais **défavorable si taux normal (HR 1,11, observationnel)** : doser d'abord. Les plafonds adultes sains (**250 mg UE / 300 mg DJM France / 350 mg US**) ne garantissent pas la sécurité dans l'ICFER — c'est le **DFG** qui prime |
| **Non étayé** | Créatine, taurine, D-ribose | Créatine sans gain d'effort à 6 mois et **abaisse faussement le DFG calculé** ; taurine sans gain de FEVG ; D-ribose sur très petits essais et fait baisser la glycémie |
| **Non étayé (recherche)** | Boissons aux esters cétoniques | Hausse modeste du débit cardiaque sur 14 j dans l'ICFER (y compris sous iSGLT2) sans gain symptomatique ni d'effort ; 1er essai clinique (KETO-AHF) en recrutement |
| **Non étayé** | Probiotiques ou modulation intestinale « pour le cœur » | Essai **GutHeart** (151 patients ICFER) : aucun effet sur FEVG, NT-proBNP ou TMAO |
| **Non étayé** | Ginseng | Aucun bénéfice prouvé seul ; effet imprévisible sur la warfarine ; signaux hémorragiques contradictoires ; interfère avec certains dosages de digoxine |
| **À éviter** | Berbérine | Inhibe CYP3A4, CYP2D6, CYP2C9 et P-gp ; interfère avec statines, bêtabloquants, warfarine, apixaban/rivaroxaban, ivabradine et digoxine ; l'**ANSES** déconseille de l'associer aux médicaments |
| **À éviter** | Sels de cétones (sels de BHB) ; boissons énergisantes en grande quantité, avec alcool ou à l'effort | Sels de cétones très riches en sodium (900 mg/portion sur une étiquette) ; boissons énergisantes allongent le QTc et élèvent la PA plus que la caféine seule ; ANSES déconseille avec alcool ou exercice |
| **À éviter** | Brûle-graisses stimulants et pré-entraînements (synéphrine + caféine, éphédra, DMAA, yohimbine) ; gélules/poudres de caféine | Déconseillés en cas de cardiopathie (ANSES, FDA, AHA) ; substances cachées fréquentes (sibutramine) ; décès par caféine liés surtout aux poudres/gélules. Le café ordinaire modéré est neutre (**Zuchinali 2016** dans l'ICFER) |
| **À éviter** | AINS en vente libre et **décongestionnants oraux du rhume** (pseudoéphédrine, phényléphrine) | AINS : insuffisance rénale aiguë et rétention hydrosodée (ESC Classe III). En France, la **pseudoéphédrine orale est passée sur ordonnance (Liste I) le 11 déc. 2024** (IDM, AVC, PRES/RCVS), et certaines marques (*Nurofen Rhume*, *Rhinadvil*) associent de l'**ibuprofène** ; la FDA propose de retirer la phényléphrine orale faute d'efficacité |
| **Avis spécialiste + cardiologue** | **Stimulants prescrits du TDAH** (méthylphénidate, lisdexamfétamine) | **Ne jamais débuter ni arrêter seul :** les **RCP français (BDPM) et britanniques (eMC)** contre-indiquent ou mettent en garde explicitement en cas d'IC, cardiomyopathie ou IDM, et les cohortes nationales 2024–2026 montrent un surrisque CV/IC à long terme (Danemark IC à 10 ans RR 1,7) |
| **À éviter** | Triple association acide folique + B12 + B6 en automédication après IDM ; vitamine B6 à forte dose | Tendance à davantage d'événements cardiaques dans NORVIT (RR 1,22) ; neuropathie sensitive avec la B6 prolongée à forte dose |
| **À éviter** | Substituts de sel au potassium, comprimés de K⁺ (hors prescription) et **additifs K⁺ cachés** des produits « réduits en sel » | Risque d'hyperkaliémie grave avec ARNI/IEC/ARA2 et ARM (les viandes industrielles réduites en sel contiennent en moyenne +44 % de K⁺, jusqu'à 1 500 mg/100 g) |
| **À éviter** | Vitamine E, bêta-carotène, calcium + vitamine D en automédication (hors prescription) | Signaux de nocivité (hospitalisations IC, décès, AVC) |
| **À éviter** | Régimes cétogènes, régimes draconiens et jeûnes prolongés sous iSGLT2 | Facteurs déclenchants d'acidocétose inscrits dans la notice (rares hors diabète) |
| **À éviter** | Réglisse véritable, millepertuis, levure de riz rouge | Réglisse : rétention d'eau et hypokaliémie. **Millepertuis** : nommé sur les notices UE/FR/UK des **4 AOD**, abaisse l'**éplérénone (-30 %)**, l'ivabradine et l'**atorvastatine**, et **majore le risque hémorragique sous clopidogrel**. Levure de riz rouge : statine cachée |
| **À éviter** | Danshen (sauge rouge), ginkgo avec antithrombotiques sauf accord et **extraits concentrés de thé vert** | **Danshen :** saignements sous warfarine + **Liao 2026** majorité AOD (aIRR ~4 ; Hsu 2022 99 % warfarine neutre). **Ginkgo :** essai financé EGb 761 + rivaroxaban neutre mais signaux en vie réelle sous clopidogrel/aspirine. **Extrait de thé vert :** réduit l'exposition humaine à la **digoxine (-31 à -33 %)**, au lisinopril (-67 %) et aux statines (~-20 %), rare hépatite grave (aucune donnée humaine sur bêtabloquants IC / ARNI / iSGLT2) |

**« À éviter » désigne les produits débutés de votre propre initiative, jamais vos médicaments prescrits.** Par exemple, l'aspirine à faible dose n'est pas un antalgique AINS, le calcium ou la vitamine D peuvent être prescrits pour l'os, et les stimulants prescrits du TDAH nécessitent une concertation entre spécialiste et cardiologue plutôt qu'un arrêt unilatéral. Compte tenu des marges de sécurité étroites des anticoagulants, antiagrégants, médicaments hyperkaliémiants et de la digoxine, **demandez l'avis de votre cardiologue ou de votre pharmacien** avant de débuter ou modifier tout complément.`,
    },
    {
      headingFr: 'Pourquoi les compléments alimentaires arrivent loin derrière les médicaments',
      bodyMarkdownFr: `- **Le traitement de fond d'abord :** pris ensemble, les quatre piliers médicamenteux (ARNI ou IEC/ARA2, bêtabloquant, ARM et iSGLT2) réduisent, selon les modélisations, les décès cardiovasculaires ou hospitalisations pour IC d'environ 60 % par rapport à l'ancienne bithérapie.
- **Très peu de preuves cliniques solides :** la cartographie de Khan (2021 — 122 essais) montrait une quasi-absence de preuves sur les événements cliniques : son unique signal sur la mortalité (CoQ10) reposait sur Q-SYMBIO et héritait de données hors IC (KISEL-10 via Lei et Liu 2017) ; la vitamine E augmentait les hospitalisations pour IC.
- **Essais antérieurs aux traitements modernes :** Q-SYMBIO (CoQ10) et GISSI-HF (oméga-3) ont été conduits avant le sacubitril/valsartan (*Entresto*) et les iSGLT2.
- **Produits non encadrés comme des médicaments :** audits montrant des écarts fréquents de composition, sous-dosage ou oxydation (huiles de poisson OTC, extraits de plantes).
- **Positions des recommandations :** l'AHA demande de déclarer chaque complément à toute l'équipe et au pharmacien ; les recommandations américaines AHA/ACC/HFSA 2022 classent les vitamines et compléments hors carence avérée en **Classe 3 : Absence de bénéfice** (et les oméga-3 en **Classe 2b** en NYHA II–IV).`,
    },
    {
      headingFr: 'Comment ces preuves s’appliquent à la cardiomyopathie ischémique',
      bodyMarkdownFr: `- **Fer intraveineux :** sur 6 essais (7 175 patients), le bénéfice sur les hospitalisations tient dans l'ICFER ischémique (**RR 0,74**, IC 0,56–0,92 ; FAIR-HF2 comptait 78 % d'ischémiques). Mais seuls **~7,2 % (519/7 175)** prenaient un iSGLT2 à l'inclusion (**23,6 %** dans FAIR-HF2), zéro analyse stratifiée par iSGLT2 n'existe, et le **CST < 20 %** devient le filtre décisif sous traitement moderne. Le **FCM (*Ferinject*)** entraîne **51,9 %** d'hypophosphatémies modérées à sévères à J21 dans HEART-FID contre ~4–8 % avec le **FDI (*Monofer*)**. Détails dans la thèse dédiée sur le fer IV sous iSGLT2.
- **Alimentation et sécurité potassium :** le modèle méditerranéen protège les coronaires (CORDIOPREV, excluant FEVG ≤ 35 % ; recommandation faible en faveur de la **HAS d'octobre 2026** ; programmes méditerranéen et pauvre en graisses efficaces dans le *BMJ* 2023). Sous ARNI/IEC + ARM + iSGLT2, les recommandations rénales rejettent l'interdiction systématique des végétaux entiers quand la kaliémie est normale (et iSGLT2/ARNI tamponnent les K⁺ > 6,0), mais un régime riche en potassium sans plafond reste non prouvé jusqu'à DFG 30 (Kwon 2024 plafonnait à ≤ 2 000 mg/j ; Turban 2021 OR 2,50), et les additifs potassiques cachés doivent être évités. Détails dans la thèse dédiée sur le régime méditerranéen et le potassium.
- **Sel et liquides :** SODIUM-HF (FEVG médiane 36 %) et FRESH-UP (~50 % ICFER, 44 % ischémiques) ne soutiennent ni restriction sodée extrême ni restriction hydrique systématique chez les patients stables.
- **CoQ10 :** Q-SYMBIO (FEVG moyenne 31 %, ~70 % ischémique) n'a pas de sous-groupe ischémique propre, est quasi nul hors Europe et précède la quadrithérapie ; la méta-analyse indépendante **NIHR HTA 2022** est non significative (**RR 0,68**), **CORONA** réfute la nocivité de la baisse de CoQ10 sous statines, et **CORAL / DANUTRIO-HF / SELEQT-HF** sont en cours. Éviter en automédication sous warfarine/AVK.
- **Oméga-3 :** GISSI-HF (taux de base de FA 3,7 %/an) montre un excès numérique de FA (+1,2 à +1,4 point), les essais coronariens à 1,8–4 g/j (OMEMI, RESPECT-EPA, REDUCE-IT) montrent un excès net, et **EMA/ANSM/MHRA** imposent l'arrêt définitif en cas de FA. Le poisson gras alimentaire ne montre aucun excès de FA.
- **Interactions ciblées selon l'ordonnance :** vigilance potassium avec ARNI/IEC/ARA2 + ARM ; acidocétose avec iSGLT2 ; éviction des AINS (ESC Classe III B2) et de la pseudoéphédrine orale (Liste I depuis déc. 2024) pour tout patient IC ; avis pharmacien/cardiologue pour millepertuis, danshen, ginkgo, extrait de thé vert et berbérine avec AOD, AVK, antiagrégants, éplérénone, digoxine ou statines.`,
    },
    {
      headingFr: 'Synthèse des textes intégraux et études complémentaires (novembre 2026)',
      bodyMarkdownFr: `Les synthèses détaillées des textes intégraux analysés en novembre 2026 confirment les verdicts du tableau ci-dessus :
- **Modèles alimentaires (Hareer 2024, Schwingshackl 2026, Lai 2025, Folta 2026, Rutters 2024, Qiu 2025) :** baisse constante des AVC sous modèle méditerranéen mais faible certitude sur la mortalité en prévention secondaire et absence d'essai dans l'ICFER ; données TMAO essentiellement animales ; repas livrés souvent jugés fades au début ; limitation de l'alcool confortée sans appui aux pilules antioxydantes.
- **Poids, obésité et dénutrition (HFA 2025, Moseley 2025, Kinugasa 2022, Kitao 2025) :** le « paradoxe de l'obésité » est en grande partie un artéfact de l'IMC ; la perte de poids doit protéger la masse musculaire ; sémaglutide et tirzépatide n'ont démontré de bénéfice IC que dans l'ICFEP (sous-groupe ICFER de SELECT HR 1,08 ns) ; mise en garde maintenue contre les régimes cétogènes sous iSGLT2 ; questionnaire **MNA-SF** préférable au score CONUT (faussé par les statines) pour dépister la dénutrition.
- **Diabète associé (ADA 2022) :** iSGLT2 attendu, GLP-1/metformine/insuline privilégiés, gliptines (saxagliptine) et glitazones à éviter, HbA1c optimale observée vers 7–8 % dans l'IC.
- **Vitamines et médecine intégrative (Chua 2025, Kampka 2025, He 2024, ESPEN 2022, Cochrane 2017, NORVIT 2006, Yu 2025) :** Tai Chi associé à moins d'hospitalisations dans 3 petits essais ; corriger une carence prouvée en vitamine D, B12 (sous metformine ou IPP) ou thiamine (sous diurétiques prolongés) plutôt que supplémenter à l'aveugle ; triple association folates + B12 + B6 à éviter en automédication post-infarctus ; NAD+ intraveineux purement hospitalier et expérimental.`,
    },
    {
      headingFr: 'Points de divergence entre les sources et préparation de vos questions',
      bodyMarkdownFr: `- **Oméga-3 et FA à faible dose (largement réconcilié) :** Gencer 2021 primaire (HR 1,12) et Abuknesha 2026 (OR 1,07 à ≤ 1,5 g/j, OR global 1,14) paraissaient diverger ; en intégrant les dossiers hospitaliers EHR d'ASCEND dans Gencer 2021, son estimation devient **HR 1,08 (effets aléatoires) / 1,075 (effets fixes)** — quasi identique en direction (+7–12 %), tandis que **EMA/ANSM/MHRA** classent la FA en effet fréquent pour tous les esters éthyliques sur prescription.
- **Ampleur de l'effet du fer IV sous traitement moderne :** chaque essai individuel a manqué de peu son critère principal ; la revue indépendante **Mandal 2026** confirme la baisse en effet fixe (RR 0,78) mais note des intervalles aléatoires croisant 1, une couverture iSGLT2 limitée à ~7,2 %, la concentration du bénéfice à **CST < 20 %** et le risque d'hypophosphatémie bien plus élevé sous FCM (51,9 %) que sous FDI (~4–8 %).
- **Plantes et saignements sous anticoagulants :** le danshen montre ~4 fois plus de saignements précoces dans une étude taïwanaise majoritairement sous AOD (**Liao 2026**) contre une cohorte neutre à 99 % warfarine (**Hsu 2022**) ; le ginkgo standardisé (EGb 761) n'a pas modifié le rivaroxaban chez des volontaires sains (étude financée **Hoerr 2022**), mais des données hospitalières (**Mai 2025**) relient encore le ginkgo aux saignements sous clopidogrel et aspirine.
- **Repères de sel :** jusqu'à ~5 g/j (HFA-ESC 2024), moins de 6 g/j (BHF), pas de chiffre en grammes dans le texte principal ESC 2026 (éducation et autogestion Classe I A) — vos objectifs personnels se valident avec votre cardiologue ou votre infirmière IC.

Pour préparer votre prochaine consultation, consultez la rubrique « Alimentation et compléments » de la fiche de questions pour l'équipe de cardiologie et le guide pratique associé, et apportez la liste complète (ou les boîtes) de tous vos compléments, tisanes et médicaments sans ordonnance.`,
    },
  ],
  relatedArticleSlugs: [
    'guide-pratique-nutrition-complements',
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
    'medicaments-insuffisance-cardiaque',
    'questions-equipe-cardiologie',
    'essais-cliniques-cles',
  ],
  sources: [
    {
      label: 'Cinq thèses nutritionnelles achevées (25 novembre 2026) et grands essais',
      detail: 'Fer IV sous iSGLT2 (FAIR-HF2, Anker 2025, Mandal nov. 2026, Nouhravesh 2025, Cleland 2024), fer oral haute biodisponibilité (IRONOUT-HF, ORION-HF), CoQ10 (Q-SYMBIO, NIHR HTA 2022, Cochrane 2021, CORONA, CORAL/DANUTRIO-HF/SELEQT-HF), oméga-3 et FA (GISSI-HF, VITAL, OMEMI, RESPECT-EPA, REDUCE-IT, Gencer 2021, Abuknesha 2026, EMA/ANSM/MHRA), régime méditerranéen et potassium (CORDIOPREV, EMPEROR-Pooled, PARADIGM-HF, Turban 2021, Kwon 2024, Picard 2026, Parpia 2018).',
    },
    {
      label: 'Sel, liquides, dénutrition, fibres, compléments énergétiques et berbérine',
      detail: 'SODIUM-HF, FRESH-UP, EFFORT IC, Reynolds 2019, GutHeart 2021, Carvalho 2012, McGurk 2022, EFSA 2018 (D-ribose), Berg-Hansen 2024 (esters cétoniques), Guo 2012 et ANSES 2019 (berbérine).',
    },
    {
      label: 'Audit interactions plantes, AOD, magnésium, décongestionnants et stimulants (novembre 2026)',
      detail: 'Notices EMA/FR BDPM/UK eMC/FDA du millepertuis (4 AOD, éplérénone, atorvastatine, clopidogrel), Liao 2026 / Hsu 2022 (danshen), Hoerr 2022 / Mai 2025 (ginkgo), Kim 2018 (thé vert et digoxine), limites magnésium UE/France/US, ANSM déc. 2024 pseudoéphédrine Liste I, RCP et cohortes stimulants TDAH (Zhang 2024, Holt 2024, Berthod 2026).',
    },
    {
      label: 'Recommandations internationales et françaises',
      detail: 'ESC 2026, HFA-ESC 2024, HFA 2025 (obésité), KDIGO 2024, KDOQI 2020, ASN 2025, HAS (annexe oct. 2026), AHA/ACC/HFSA 2022, AHA 2022 (CAM), ADA 2022, ESPEN 2022 et NICE NG106 (2025).',
    },
  ],
  disclaimerType: 'medical',
};
