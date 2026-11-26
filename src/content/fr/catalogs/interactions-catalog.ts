import type { InteractionItem } from '../../../types';

export const INTERACTIONS_CATALOG: InteractionItem[] = [
  // =========================================================================
  // À ABORDER AVEC L'ÉQUIPE (worth_raising)
  // =========================================================================
  {
    id: 'fer-intraveineux',
    nameFr: 'Fer intraveineux (si carence martiale confirmée)',
    aliases: ['Fer IV', 'Carboxymaltose ferrique', 'Ferinject', 'Dérisomaltose ferrique', 'Ferritine', 'CST'],
    verdict: 'worth_raising',
    summaryFr:
      'Seule supplémentation disposant de preuves solides dans l’ICFER : réduit les hospitalisations pour insuffisance cardiaque d’environ 20 à 30 % et améliore les symptômes lorsque la ferritine ou le CST sont bas.',
    mechanismOrCaveatFr:
      'Indiqué uniquement après bilan sanguin (ferritine et CST) et prescription cardiologique. Les grands essais montrent une réduction des hospitalisations pour insuffisance cardiaque sans gain démontré sur la survie globale. Reste pertinent avec les iSGLT2 modernes (qui mobilisent le fer et peuvent révéler une carence) et ne doit pas être confondu avec le fer en comprimés.',
    affectedPillars: ['sglt2i', 'other'],
    evidenceGrade: 'ESC 2026 Classe I (symptômes, B1) ; Classe IIa (hospitalisations, B1)',
    sources: ['Méta-analyse fer IV 2025', 'FAIR-HF2 (JAMA 2025)', 'ESC 2026', 'AHA/ACC/HFSA 2022 (2a)'],
    articleSlug: 'carence-martiale-et-fer-iv',
  },
  {
    id: 'alimentation-mediterraneenne',
    nameFr: 'Alimentation de type méditerranéen',
    aliases: ['Régime méditerranéen', 'Huile d’olive vierge extra', 'Légumineuses', 'Poisson gras', 'Noix non salées'],
    verdict: 'worth_raising',
    summaryFr:
      'Modèle alimentaire de référence pour protéger les artères coronaires : réduit d’environ 25 % les événements cardiovasculaires majeurs sur 7 ans dans la maladie coronaire (CORDIOPREV), avec une recommandation faible en faveur de la HAS (octobre 2026).',
    mechanismOrCaveatFr:
      'CORDIOPREV (87 contre 111 événements) ayant exclu les FEVG ≤ 35 %, ce modèle protège le versant coronaire sans être prouvé comme traitement direct de l’ICFER. Côté potassium sous ARNI/IEC/ARA2 et ARM : l’absorption globale du potassium alimentaire est d’environ 88 à 94 % (Picard 2026), mais les aliments entiers évitent les bolus rapides des substituts de sel au KCl et des additifs potassiques cachés (présents dans 23,3 % des produits industriels « réduits en sodium ») tout en apportant fibres et alcalinisants. Gardez des portions mesurées sur les charges concentrées (jus de fruits, smoothies, fruits secs, concentré de tomate) si le DFGe est entre 30 et 44 ou si la kaliémie approche 4,8–5,0 mmol/L.',
    affectedPillars: ['raas_arni', 'mra', 'lipid_lowering'],
    evidenceGrade: 'ESC 2026 Classe I, niveau C (hygiène de vie) ; HAS octobre 2026 (faible, coronaire) ; CORDIOPREV',
    sources: ['CORDIOPREV (The Lancet 2022)', 'BMJ 2023 NMA', 'Hareer 2024', 'HAS octobre 2026', 'Picard 2024–2026', 'ESC 2026'],
    articleSlug: 'alimentation-cardioprotectrice',
  },
  {
    id: 'fibres-alimentaires-psyllium',
    nameFr: 'Alimentation riche en fibres (et précautions pour les compléments de psyllium / ispaghul)',
    aliases: ['Fibres alimentaires', 'Fibres', 'Psyllium', 'Ispaghul', 'Spagulax', 'Transilane', 'Fybogel', 'Constipation'],
    verdict: 'worth_raising',
    summaryFr:
      'Une alimentation riche en fibres (25 à 29 g/j via végétaux et céréales complètes) s’associe à moins de décès coronaires en population générale ; les sachets de psyllium sont un laxatif à espacer de la digoxine et de la warfarine.',
    mechanismOrCaveatFr:
      'En population générale, une alimentation riche en fibres s’associe à un moindre risque cardiovasculaire ; dans l’insuffisance cardiaque, les données restent surtout observationnelles. Les sachets d’ispaghul/psyllium peuvent retarder l’absorption de la digoxine et de la warfarine (espacer d’au moins 30 à 60 minutes) et demandent au moins 150 mL d’eau par sachet : vérifiez horaires et choix du laxatif avec votre pharmacien.',
    affectedPillars: ['addon_hf', 'anticoagulant', 'other'],
    evidenceGrade: 'Reynolds 2019 (population générale) ; notice ispaghul (Fybogel SmPC)',
    sources: ['Reynolds 2019 (The Lancet)', 'Wang 2025 (NHANES)', 'Notice ispaghul (Fybogel SmPC)'],
    articleSlug: 'fibres-alimentaires-et-axe-intestin-coeur',
  },
  {
    id: 'soutien-nutritionnel-denutrition',
    nameFr: 'Soutien nutritionnel en cas de perte de poids involontaire',
    aliases: ['Dénutrition', 'Cachexie cardiaque', 'Compléments nutritionnels oraux', 'CNO', 'Protéines', 'EFFORT', 'MNA-SF'],
    verdict: 'worth_raising',
    summaryFr:
      'En cas de perte de poids involontaire, de baisse d’appétit ou d’hospitalisation, un dépistage (questionnaire MNA-SF) et un soutien nutritionnel adapté priment sur toute restriction et réduisent la mortalité à court terme chez les patients hospitalisés à risque.',
    mechanismOrCaveatFr:
      'Dans le sous-groupe IC de l’essai EFFORT (645 patients hospitalisés à risque, âge médian 79 ans, seulement 66 avec FEVG < 40 %), un soutien diététique ciblant énergie et 1,2 à 1,5 g/kg/j de protéines a réduit la mortalité à 30 jours de 14,8 % à 8,4 % (OR ajusté 0,44), sans baisse des réadmissions. En ambulatoire, le questionnaire MNA-SF est plus fiable que le score CONUT, qui est faussé par les statines (Kinugasa 2022). À discuter avec votre équipe, y compris en cas d’IMC élevé (obésité sarcopénique ; HFA 2025).',
    affectedPillars: ['other'],
    evidenceGrade: 'EFFORT IC (JACC 2021) ; HFA 2025 ; ESC 2026 (narratif) ; NICE NG106 (1.8.1)',
    sources: ['EFFORT HF (JACC 2021, texte intégral)', 'Kinugasa 2022', 'HFA 2025', 'ESC 2026', 'NICE NG106'],
    articleSlug: 'poids-obesite-et-denutrition',
  },

  // =========================================================================
  // POSSIBLE, À DISCUTER D'ABORD (possible)
  // =========================================================================
  {
    id: 'omega-3-faible-dose',
    nameFr: 'Oméga-3 à faible dose (environ 1 g/j qualité pharmaceutique)',
    aliases: ['Huile de poisson 1 g', 'EPA + DHA', 'AGPI n-3', 'Omacor', 'GISSI-HF'],
    verdict: 'possible',
    summaryFr:
      'Petit bénéfice de survie dans un ancien essai (GISSI-HF : 27 % contre 29 %, NNT 56 sur 4 ans) antérieur aux traitements modernes, mais incertitude persistante sur un léger surrisque de fibrillation atriale.',
    mechanismOrCaveatFr:
      'Dans GISSI-HF (870 mg d’EPA+DHA/j), la FA incidente était de 11,2 % contre 9,8 % (OR 1,16, non significatif). Les méta-analyses montrent une tendance discrète à la hausse même aux faibles doses (Gencer 2021 : HR 1,12 ≤ 1 g/j ; Abuknesha 2026, 35 essais : OR 1,06–1,07 ≤ 1,5 g/j non significatif, mais OR 1,14 significatif toutes doses confondues). Peu d’excès de saignements globalement (2,6 % contre 2,4 %), mais surveillance demandée avec aspirine, clopidogrel ou warfarine (absence de données dédiées AOD). Les gélules en vente libre ne sont pas équivalentes aux spécialités sur prescription.',
    affectedPillars: ['antiplatelet', 'anticoagulant'],
    evidenceGrade: 'AHA/ACC/HFSA 2022 Classe 2b (B-R) ; absent d’ESC 2026',
    sources: ['GISSI-HF (2008)', 'Gencer 2021', 'Abuknesha 2026', 'Javaid 2024', 'AHA/ACC/HFSA 2022'],
    articleSlug: 'omega-3-huile-de-poisson',
  },
  {
    id: 'coenzyme-q10',
    nameFr: 'Coenzyme Q10 (CoQ10 / ubiquinone / ubiquinol)',
    aliases: ['CoQ10', 'Ubiquinone', 'Ubiquinol', 'Q-SYMBIO'],
    verdict: 'possible',
    summaryFr:
      'Signal clinique intrigant mais fragile : un petit essai (Q-SYMBIO, 420 patients, FEVG moyenne 31 %, ~70 % ischémiques) a réduit les événements majeurs à 2 ans, mais a été arrêté précocement, financé en partie par l’industrie, jamais répliqué et précède les ARNI et iSGLT2.',
    mechanismOrCaveatFr:
      'Aucun résultat séparé pour les patients ischémiques ni effet sur la FEVG ou le NT-proBNP ; le signal de mortalité disparaît dans les méta-analyses (Khan 2021, An 2022) dès qu’on retire Q-SYMBIO, et aucune preuve n’existe en ajout de la quadrithérapie moderne. Généralement bien tolérée, mais aucune recommandation internationale ne la conseille. Interactions signalées avec la warfarine (peut en diminuer l’effet) et les antihypertenseurs/anticoagulants (AHA 2022) ; qualité variable entre compléments.',
    affectedPillars: ['anticoagulant', 'raas_arni', 'beta_blocker'],
    evidenceGrade: 'Certitude faible (Q-SYMBIO, Khan 2021, Ezekowitz 2014) ; aucune recommandation',
    sources: ['Q-SYMBIO (2014, texte intégral)', 'Ezekowitz 2014', 'Khan 2021', 'An 2022', 'AHA 2022 CAM statement'],
    articleSlug: 'coenzyme-q10',
  },
  {
    id: 'sterols-stanols-vegetaux',
    nameFr: 'Aliments enrichis en stérols / stanols végétaux (environ 2 g/j)',
    aliases: ['Phytostérols', 'Stanols', 'Margarines anticholestérol', 'Yaourts aux stérols'],
    verdict: 'possible',
    summaryFr:
      'Peuvent abaisser le cholestérol LDL de 7 à 10 % en complément d’une statine, mais aucun essai clinique n’a prouvé qu’ils réduisent les infarctus ou la mortalité.',
    mechanismOrCaveatFr:
      'Réduisent l’absorption intestinale du cholestérol. Option secondaire possible si l’objectif LDL n’est pas atteint (avis EAS), alors que la mise à jour européenne lipides 2025 ne retient pas les compléments alimentaires pour abaisser le LDL (Classe III). À discuter avec votre cardiologue.',
    affectedPillars: ['lipid_lowering'],
    evidenceGrade: 'EAS 2014 / ESC-EAS 2019 (LDL seul, sans critère clinique)',
    sources: ['EAS 2014', 'ESC/EAS 2019 et 2025'],
    articleSlug: 'alimentation-cardioprotectrice',
  },
  {
    id: 'cafe-cafeine',
    nameFr: 'Café et thé infusé classique (consommation habituelle modérée)',
    aliases: ['Café', 'Caféine', 'Expresso', 'Thé infusé classique'],
    verdict: 'possible',
    summaryFr:
      'Apparaît globalement neutre : dans le seul essai randomisé conduit dans l’ICFER (Zuchinali 2016, 51 patients dont 61 % avec un DAI), 500 mg de caféine sur une matinée n’ont pas augmenté les extrasystoles ventriculaires.',
    mechanismOrCaveatFr:
      'Les études disponibles ne montrent pas d’augmentation des troubles du rythme graves avec un café modéré (1 à 2 tasses par jour), même avec une FEVG réduite. Le repère européen de 400 mg/j ne concerne toutefois que les adultes en bonne santé : convenez de votre limite personnelle avec votre cardiologue et ne confondez pas café ordinaire et boissons énergisantes.',
    affectedPillars: ['beta_blocker', 'other'],
    evidenceGrade: 'Un petit essai randomisé ICFER (Zuchinali 2016) ; cohortes et essais FA (DECAF)',
    sources: ['Zuchinali 2016', 'Graboys 1989', 'van Dongen 2017', 'DECAF', 'CRAVE', 'EFSA 2015'],
    articleSlug: 'cafeine-boissons-energisantes-et-stimulants',
  },

  // =========================================================================
  // NON ÉTAYÉ (not_supported)
  // =========================================================================
  {
    id: 'fer-oral',
    nameFr: 'Fer par voie orale (comprimés / gélules)',
    aliases: ['Sulfate ferreux', 'Tardyferon', 'Fumafer', 'Fer en comprimés', 'Supplément fer oral'],
    verdict: 'not_supported',
    summaryFr:
      'Inefficace pour corriger la carence martiale fonctionnelle et améliorer les capacités d’effort dans l’insuffisance cardiaque (essai IRONOUT-HF).',
    mechanismOrCaveatFr:
      'Dans l’ICFER, l’inflammation chronique élève l’hepcidine et bloque l’absorption intestinale du fer oral. Dans IRONOUT-HF (225 patients), le fer oral à forte dose n’a amélioré ni le pic de VO₂, ni la distance de marche, ni les symptômes, tout en provoquant des troubles digestifs. En cas de carence, le fer intraveineux est la voie recommandée.',
    affectedPillars: ['other'],
    evidenceGrade: 'IRONOUT-HF (négatif) ; non recommandé dans l’ICFER',
    sources: ['IRONOUT-HF (JAMA 2017)', 'ESC 2026'],
    articleSlug: 'carence-martiale-et-fer-iv',
  },
  {
    id: 'fer-oral-haute-biodisponibilite',
    nameFr: 'Fer oral « haute biodisponibilité » (bisglycinate / Ferrochel, sucrosomial, maltol ferrique)',
    aliases: [
      'Ferrochel',
      'Bisglycinate de fer',
      'Fer sucrosomial',
      'Maltol ferrique',
      'Fer liposomal',
      'Fer héminique',
      'Lactoferrine',
    ],
    verdict: 'not_supported',
    summaryFr:
      'Preuves insuffisantes (tendance défavorable) dans l’ICFER : aucun essai randomisé publié ne démontre que ces nouvelles formes orales contournent le blocage par l’hepcidine ni ne remplacent le fer intraveineux.',
    mechanismOrCaveatFr:
      'Aucun essai randomisé dans l’ICFER n’a testé le bisglycinate ferreux (Ferrochel) ; les quelques études sur le maltol ferrique ou le fer sucrosomial étaient petites et majoritairement sans groupe placebo, et le seul essai contrôlé rapporté (PREFER-HF dans l’ICFEP, non publié) n’aurait pas atteint son critère principal. Dans les maladies inflammatoires (MICI, MRC), ces formes restent soumises à l’hepcidine et rechargent beaucoup moins les réserves que le fer IV. Le fer intraveineux demeure la seule voie étayée dans l’ICFER.',
    affectedPillars: ['sglt2i', 'other'],
    evidenceGrade: 'Preuves insuffisantes (tendance défavorable) ; fer IV seule voie validée (ESC 2026)',
    sources: ['IRONOUT-HF (2017)', 'ORION-HF (2025)', 'Pantopoulos 2024', 'ESC 2026'],
    articleSlug: 'fer-oral-haute-biodisponibilite',
  },
  {
    id: 'creatine-taurine-d-ribose-cetones',
    nameFr: 'Compléments « énergie cardiaque » : créatine, taurine, D-ribose et boissons cétoniques',
    aliases: [
      'Créatine',
      'Taurine',
      'D-ribose',
      'Ribose',
      'Esters de cétones',
      'Sels de cétones',
      'BHB',
      '3-hydroxybutyrate',
      'DFGe créatine',
    ],
    verdict: 'not_supported',
    summaryFr:
      'Aucun bénéfice démontré sur la mortalité ou les hospitalisations dans l’ICFER ; chaque famille comporte des pièges pratiques (faux DFGe bas sous créatine, hypoglycémie sous D-ribose, charge en sodium des sels de cétones à éviter).',
    mechanismOrCaveatFr:
      'Créatine : neutre sur le pic de VO₂ et la marche à 6 mois (Carvalho 2012), élève artificiellement la créatinine (fausse baisse du DFGe pouvant induire des baisses inutiles d’ARNI/ARM/iSGLT2) et ajoute du poids hydrique. Taurine : revue systématique McGurk 2022 neutre et méta-analyse Tzang 2024 incluant un essai rétracté en avril 2026. D-ribose : aucun essai ICFER, abaisse la glycémie (plafond EFSA ~2,5 g/j vs 15 g/j dans les essais ; vigilance sous insuline/sulfamides). Esters de cétones : piste de recherche (+0,3 L/min de débit sur 14 jours, Berg-Hansen 2024, diabétiques exclus, baisse transitoire du pH sous iSGLT2) ; sels de cétones (BHB) riches en sodium à éviter.',
    affectedPillars: ['raas_arni', 'mra', 'sglt2i', 'other'],
    evidenceGrade: 'Carvalho 2012 ; McGurk 2022 ; EFSA 2018 ; Berg-Hansen 2024 (recherche uniquement)',
    sources: ['Cochrane 2011', 'Carvalho 2012', 'López-Clemente 2025', 'McGurk 2022', 'EFSA 2018', 'Berg-Hansen 2024'],
    articleSlug: 'complements-energetiques-cardiaques',
  },
  {
    id: 'probiotiques-microbiote',
    nameFr: 'Probiotiques et traitements ciblant le microbiote / TMAO pour le cœur',
    aliases: ['Probiotiques', 'Saccharomyces boulardii', 'Rifaximine', 'TMAO', 'Microbiote intestinal', 'GutHeart'],
    verdict: 'not_supported',
    summaryFr:
      'Aucun bénéfice démontré sur la fonction cardiaque dans l’ICFER : dans l’essai GutHeart (151 patients), ni la levure probiotique ni l’antibiotique intestinal n’ont amélioré la FEVG ou le NT-proBNP.',
    mechanismOrCaveatFr:
      'Bien qu’un TMAO élevé s’associe à un moins bon pronostic dans l’IC (Li 2022, RR 1,35), il dépend largement de l’élimination rénale et reste un marqueur de risque plutôt qu’une cible prouvée. Dans GutHeart (Awoyemi 2021, FEVG moyenne ~30 %, 53–59 % ischémiques), 3 mois de rifaximine ou de Saccharomyces boulardii n’ont modifié ni la FEVG (29,6 % et 30,3 % vs 31,5 %), ni le NT-proBNP, ni le TMAO.',
    affectedPillars: ['other'],
    evidenceGrade: 'Essai GutHeart (Awoyemi 2021, neutre) ; certitude modérée d’absence d’effet sur la FEVG',
    sources: ['GutHeart (Awoyemi 2021)', 'Li 2022 (TMAO)', 'Lai 2025'],
    articleSlug: 'fibres-alimentaires-et-axe-intestin-coeur',
  },
  {
    id: 'vitamine-d-seule',
    nameFr: 'Vitamine D seule (en dehors d’une carence documentée)',
    aliases: ['Cholécalciférol', 'Vitamine D3', '25(OH)D', 'ZymaD', 'Uvedose', 'Complément vitamine D'],
    verdict: 'not_supported',
    summaryFr:
      'Aucun bénéfice démontré sur la mortalité ou les hospitalisations IC (EVITA à 4 000 UI/j : davantage d’assistances circulatoires, HR 1,96 ; marche de 6 min -39 m dans les essais IC) ; corriger une carence avérée se discute pour les os et muscles, sous plafond de 4 000 UI/j et vigilance digoxine/thiazidiques.',
    mechanismOrCaveatFr:
      'Plafond adulte sans supervision : 4 000 UI (100 µg)/j toutes sources confondues (EFSA/IOM/NHS, fixé pour adultes sains, pas de preuve de sécurité dans l’IC). Un excès provoque une hypercalcémie (arrêt > 2,65 mmol/L sur RCP ZymaD) qui renforce la toxicité de la digoxine (ECG et calcémie recommandés sur RCP ZymaD/Fultium-D3) et s’additionne aux diurétiques thiazidiques ; la précaution AHA sur les inhibiteurs calciques se limite au vérapamil/diltiazem à fortes doses (un seul cas de 1981, non étayé pour l’amlodipine). En France, le dosage n’est pas remboursé pour l’IC (HAS) et le GRIO 2025 préfère les prises quotidiennes aux méga-doses espacées.',
    affectedPillars: ['addon_hf', 'loop_diuretic', 'other'],
    evidenceGrade: 'AHA/ACC/HFSA 2022 Classe 3 (hors carence) ; EVITA ; EFSA 4 000 UI/j ; RCP ZymaD ; GRIO 2025',
    sources: ['Kampka 2025', 'Khan 2021', 'EVITA / VINDICATE / Malihi 2016', 'EFSA 2023', 'RCP ZymaD / Fultium-D3', 'GRIO 2025', 'HAS 2013'],
    articleSlug: 'vitamine-d-insuffisance-cardiaque',
  },
  {
    id: 'magnesium',
    nameFr: 'Magnésium en automédication (hors déficit biologique)',
    aliases: [
      'Magnésium marin',
      'Chlorure de magnésium',
      'Bisglycinate de magnésium',
      'Oxyde de magnésium',
      'Citrate de magnésium',
      'Thréonate de magnésium',
      'Orotate de magnésium',
      'Mag 2',
      'Magné B6',
      'Antiacide magnésium',
      'Maalox',
      'Laxatif au magnésium',
    ],
    verdict: 'not_supported',
    summaryFr:
      'Aucun essai randomisé solide ne démontre de bénéfice cardiaque dans l’ICFER ; doser avant de supplémenter (taux normal lié à HR 1,11 dans Yin 2026) et surveiller la fonction rénale ainsi que les IPP au long cours.',
    mechanismOrCaveatFr:
      'Dans GALACTIC-HF (FEVG ≤ 35 %), un magnésium élevé (> 0,95 mmol/L), non un taux bas (17,6 %), prédisait un surrisque. Les IPP pris > 1 an abaissent la magnésémie (OR 1,71 Srinutta 2019 ; alertes MHRA 2012/FDA 2011, vigilance avec digoxine et diurétiques). Plafond scientifique UE (EFSA/BfR 2021) : 250 mg/j (diarrhée dès 300 mg/j), alors que le plafond légal français des compléments (Arrêté du 9 mai 2006) est à 300 mg/j DJM (US 350 mg/j) — aucun ne protège des reins fragiles (contre-indiqué < 30 mL/min sur Magné B6/Mag 2 ; 3/15 hypermagnésémies sous MgO laxatif dans Terashima 2025). Espacer antibiotiques/bisphosphonates (≥ 2 h), prendre la rosuvastatine ≥ 2 h avant un antiacide Al/Mg, et éviter l’excès de B6 (30–40 mg/j dans Magné B6 vs limite UE 12 mg/j).',
    affectedPillars: ['loop_diuretic', 'raas_arni', 'mra', 'sglt2i', 'lipid_lowering', 'addon_hf', 'other'],
    evidenceGrade: 'AHA/ACC/HFSA 2022 Classe 3 (hors carence) ; GALACTIC-HF ; Yin 2026 ; EFSA/BfR 250 mg/j vs FR 300 mg/j',
    sources: [
      'Chimura 2026 (GALACTIC-HF)',
      'Yin 2026 (EHJ)',
      'Terashima 2025',
      'MHRA 2012 / Srinutta 2019',
      'BfR 2021 / EFSA / Arrêté 9 mai 2006',
      'Aal-Hamad 2023',
      'AHA/ACC/HFSA 2022',
    ],
    articleSlug: 'magnesium-insuffisance-cardiaque',
  },
  {
    id: 'multivitamines-antioxydants',
    nameFr: 'Multivitamines, vitamine C, sélénium, vitamines B et antioxydants',
    aliases: ['Multivitamines', 'Vitamine C', 'Sélénium', 'Antioxydants', 'Complexe vitaminé'],
    verdict: 'not_supported',
    summaryFr:
      'Aucun bénéfice cardiovasculaire démontré dans les grandes méta-analyses ; ces produits ne remplacent jamais une alimentation variée ni le traitement de fond.',
    mechanismOrCaveatFr:
      'Les grandes synthèses internationales concluent à l’absence de bénéfice cardiovasculaire des multivitamines en routine, et les recommandations déconseillent les compléments sans carence démontrée. Voir les fiches dédiées pour la thiamine, les vitamines B9/B12/B6 et les autres compléments.',
    affectedPillars: ['other'],
    evidenceGrade: 'AHA/ACC/HFSA 2022 Classe 3 (Absence de bénéfice, B-R) ; USPSTF Grade I',
    sources: ['An 2022 (texte intégral)', 'Khan 2019', 'USPSTF 2022', 'Qiu 2025', 'AHA/ACC/HFSA 2022'],
    articleSlug: 'tableau-preuves-nutrition-complements',
  },
  {
    id: 'thiamine-l-carnitine',
    nameFr: 'Thiamine (vitamine B1) et L-carnitine (hors carence avérée)',
    aliases: ['Vitamine B1', 'Thiamine', 'L-carnitine', 'Carnitine', 'COLT-HF'],
    verdict: 'not_supported',
    summaryFr:
      'Aucun bénéfice démontré sur la fonction cardiaque ou les événements dans les essais regroupés récents ; un dosage de thiamine peut toutefois être discuté sous diurétiques de l’anse au long cours.',
    mechanismOrCaveatFr:
      'Les essais récents ne confirment pas de gain démontré sur la FEVG sous thiamine en routine (un grand essai est encore en cours), et la L-carnitine n’a pas démontré de bénéfice sur la survie. En cas de traitement diurétique prolongé ou de suspicion de carence, un dosage sanguin de thiamine peut être discuté avec votre médecin.',
    affectedPillars: ['loop_diuretic', 'other'],
    evidenceGrade: 'He 2024 (négatif sur la FEVG) ; ESPEN 2022 (Grade 0) ; AHA/ACC/HFSA 2022 Classe 3 hors carence',
    sources: ['He 2024 (7 RCTs)', 'ESPEN 2022', 'Khan 2021 (texte intégral)', 'AHA/ACC/HFSA 2022'],
    articleSlug: 'vitamines-b-insuffisance-cardiaque',
  },
  {
    id: 'vitamine-b3-niacine-nad',
    nameFr: 'Vitamine B3, niacine et compléments « boosters de NAD+ » (nicotinamide riboside)',
    aliases: ['Vitamine B3', 'Niacine', 'Acide nicotinique', 'NAD+', 'Nicotinamide riboside', 'Booster NAD'],
    verdict: 'not_supported',
    summaryFr:
      'Approche expérimentale sans preuve clinique pour les comprimés oraux dans l’ICFER ; la niacine à forte dose n’est pas recommandée en ajout d’une statine (effets indésirables hépatiques et métaboliques).',
    mechanismOrCaveatFr:
      'L’essai chinois Yu 2025 (180 patients hospitalisés pour cardiomyopathie ischémique, dont trois quarts stentés durant le séjour) a testé une perfusion IV de NAD+ pendant 7 jours : gain modeste de FEVG (+2 points à 1 mois) sans bénéfice clinique significatif à 6 mois. Il n’apporte aucune preuve pour les comprimés de B3 ou le nicotinamide riboside (données humaines limitées à une petite étude de tolérance sans gain de FEVG ; Boitard 2025 est uniquement murin). Pour le cholestérol, ACC/AHA 2026 classe la niacine en dernier recours sans bénéfice CV prouvé (bouffées vasomotrices dès ~30 mg/j, hépatotoxicité vers 3 g/j, aggravation de l’insulinorésistance).',
    affectedPillars: ['lipid_lowering', 'other'],
    evidenceGrade: 'Expérimental (Yu 2025 IV monocentrique) ; ACC/AHA 2026 (niacine déconseillée en routine)',
    sources: ['Yu 2025 (essai NAD+ IV)', 'Boitard 2025', 'ACC/AHA 2026 (dyslipidémies)', 'ESPEN 2022'],
    articleSlug: 'vitamines-b-insuffisance-cardiaque',
  },
  {
    id: 'aubepine',
    nameFr: 'Aubépine (Crataegus)',
    aliases: ['Aubépine', 'Crataegus', 'Extrait d’aubépine', 'Tisane aubépine'],
    verdict: 'not_supported',
    summaryFr:
      'Preuves contradictoires dans l’insuffisance cardiaque, avec un signal préoccupant d’aggravation possible de l’IC selon l’AHA 2022.',
    mechanismOrCaveatFr:
      'Souvent commercialisée pour le « soutien cardiaque » ou les palpitations, l’aubépine n’a pas démontré de bénéfice fiable en plus des traitements modernes et la déclaration scientifique AHA 2022 indique qu’elle peut aggraver l’insuffisance cardiaque ou interagir avec les médicaments cardiaques (dont la digoxine et les vasodilatateurs).',
    affectedPillars: ['addon_hf', 'raas_arni', 'beta_blocker'],
    evidenceGrade: 'AHA 2022 CAM statement (non étayé / risque d’aggravation)',
    sources: ['AHA 2022 CAM statement'],
    articleSlug: 'interactions-complements-aliments-medicaments',
  },
  {
    id: 'ginseng',
    nameFr: 'Ginseng (asiatique, américain, sibérien / éleuthérocoque)',
    aliases: ['Panax ginseng', 'Ginseng rouge', 'Ginseng coréen', 'Ginseng américain', 'Éleuthérocoque', 'Ginseng sibérien'],
    verdict: 'not_supported',
    summaryFr:
      'Aucun bénéfice démontré seul dans l’insuffisance cardiaque ; signaux discordants sur les saignements (warfarine et antiagrégants) et risque d’interférence avec certains dosages sanguins de digoxine.',
    mechanismOrCaveatFr:
      'Le ginseng américain a réduit l’effet de la warfarine (pic INR -0,19) tandis que le ginseng asiatique était neutre sur l’INR ; en vie réelle à Taïwan, signal hémorragique instable avec aspirine/clopidogrel (Tsai 2017, aOR 3,27 vs 1,49 ns) mais taux inférieur dans une cohorte 99 % warfarine (Hsu 2022, aHR 0,762). Aucun essai PK humain avec les AOD ; cité par AHA 2016 parmi les produits potentiellement nocifs dans l’IC. Peut fausser d’anciens dosages de digoxine (et élever la digoxinémie avec l’éleuthérocoque). Teneur variant jusqu’à 36 fois selon les marques.',
    affectedPillars: ['anticoagulant', 'antiplatelet', 'addon_hf'],
    evidenceGrade: 'Certitude faible ; AHA 2016 ; EMA (usage traditionnel fatigue uniquement)',
    sources: ['Yuan 2004', 'Lee 2010', 'Tsai 2017', 'Hsu 2022', 'AHA 2016', 'NCCIH'],
    articleSlug: 'interactions-complements-aliments-medicaments',
  },
  {
    id: 'phytotherapie-chinoise-ic',
    nameFr: 'Formules de phytothérapie chinoise (Qiliqiangxin, Qishen Yiqi, Pueraria, Shexiangbaoxin)',
    aliases: ['Qiliqiangxin', 'Qishen Yiqi', 'Pueraria', 'Gegen', 'Shexiangbaoxin', 'Shenfu', 'Médecine chinoise'],
    verdict: 'not_supported',
    summaryFr:
      'Absentes des recommandations européennes, américaines et britanniques ; contrôle qualité variable et risques d’interactions (potassium, hypotension, ginseng, danshen, substances cardioactives).',
    mechanismOrCaveatFr:
      'Malgré quelques résultats publiés en Chine sur des produits sur ordonnance locaux, la qualité globale des études reste limitée et les effets indésirables sont souvent sous-déclarés : excès de potassium (Pueraria, risque cumulé avec vos traitements de fond), hypotension, interactions avec les anticoagulants (ginseng, danshen) ou ingrédients toxiques pour le cœur dans certaines formules. Vérifiez systématiquement tout produit avec votre cardiologue et votre pharmacien.',
    affectedPillars: ['raas_arni', 'mra', 'anticoagulant', 'addon_hf'],
    evidenceGrade: 'Chua 2025 (revues surtout de faible qualité) ; QUEST 2024 ; absent d’ESC/AHA/NICE',
    sources: ['Chua 2025 (revue parapluie)', 'QUEST (Nature Medicine 2024)'],
    articleSlug: 'interactions-complements-aliments-medicaments',
  },
  {
    id: 'curcuma-curcumine',
    nameFr: 'Curcuma / curcumine en compléments concentrés',
    aliases: ['Curcuma gélules', 'Curcumine', 'Pipérine + curcuma', 'Curcuma liposomal'],
    verdict: 'not_supported',
    summaryFr:
      'Aucun bénéfice prouvé dans l’insuffisance cardiaque ; prudence avec les anticoagulants (aucun essai valide avec les AOD) et signal de toxicité hépatique pour les formes à forte absorption.',
    mechanismOrCaveatFr:
      'L’épice culinaire habituelle ne pose pas de problème particulier, mais les compléments concentrés (souvent associés à la pipérine) font l’objet de deux cas rapportés sous warfarine, d’un signal mécanistique CYP/P-gp/antiplaquettaire (Grzesk 2021) et d’un avertissement du NIH sur des atteintes hépatiques rares. La petite étude Hu 2018 (Meriva) qui évaluait l’INR sous dabigatran n’est pas probante car l’INR n’est pas un test valide pour le dabigatran.',
    affectedPillars: ['anticoagulant', 'antiplatelet', 'other'],
    evidenceGrade: 'Données faibles (très faibles pour les AOD ; alerte hépatique NIH)',
    sources: ['NCCIH / NIH', 'Hatfield 2022', 'Grzesk 2021', 'Hu 2018'],
    articleSlug: 'interactions-complements-aliments-medicaments',
  },

  // =========================================================================
  // À ÉVITER EN AUTOMÉDICATION (avoid)
  // =========================================================================
  {
    id: 'substituts-sel-potassium',
    nameFr: 'Substituts de sel au potassium, comprimés de potassium et additifs potassiques cachés',
    aliases: ['Sel de régime', 'Sel pauvre en sodium', 'Chlorure de potassium', 'Sel au potassium', 'LoSalt', 'Complément potassium'],
    verdict: 'avoid',
    summaryFr:
      'Peuvent provoquer une hyperkaliémie dangereuse (troubles du rythme cardiaque graves) chez toute personne prenant un ARNI, IEC, ARA2 ou ARM.',
    mechanismOrCaveatFr:
      'Les sels de régime contiennent 10 à 50 % de chlorure de potassium, et des additifs potassiques se cachent aussi dans 23,3 % des produits industriels « réduits en sodium » (+44 % de potassium dans certaines viandes préparées, Parpia 2018 / Picard 2024–2025). Les essais Cochrane 2022 ont exclu les patients à risque et n’incluaient aucun patient IC. Les notices Entresto et ARM (Inspra, Spironolactone) mettent formellement en garde contre ces substituts (16 % de K+ > 5,5 mmol/L dans PARADIGM-HF sans supplément). Ne jamais confondre avec un sel potassique prescrit par votre médecin en cas d’hypokaliémie.',
    affectedPillars: ['raas_arni', 'mra'],
    evidenceGrade: 'Notices Entresto / Inspra / Spironolactone ; NICE NG106 (1.9.11) ; Cochrane 2022',
    sources: ['Notice sacubitril/valsartan (Entresto)', 'Notices FDA Inspra / Spironolactone', 'Cochrane 2022', 'Parpia 2018 / Picard 2024–2025', 'NICE NG106'],
    articleSlug: 'sel-et-liquides-insuffisance-cardiaque',
  },
  {
    id: 'ains-otc',
    nameFr: 'AINS en vente libre (ibuprofène, kétoprofène, naproxène, diclofénac)',
    aliases: ['Ibuprofène', 'Advil', 'Nurofen', 'Kétoprofène', 'Naproxène', 'Diclofénac', 'Voltarène', 'COX-2', 'Anti-inflammatoires'],
    verdict: 'avoid',
    summaryFr:
      'Formellement déconseillés dans l’insuffisance cardiaque : provoquent rétention d’eau et de sel, perte d’efficacité des diurétiques, décompensation et insuffisance rénale aiguë.',
    mechanismOrCaveatFr:
      'L’inhibition des prostaglandines rénales réduit la perfusion des reins (risque majeur d’insuffisance rénale aiguë avec l’association ARNI/IEC/ARA2 + diurétique) et favorise la rétention hydrosodée. Le consensus européen Abdin 2025 (EJHF) confirme un risque dépendant de la dose (notamment diclofénac, indométacine, piroxicam, et célécoxib à forte dose) et cite le paracétamol ou les AINS topiques en gel/crème comme alternatives à discuter avec le médecin ou le pharmacien. Attention aux spécialités anti-rhume associant ibuprofène et pseudoéphédrine (Nurofen Rhume, Rhinadvil). L’aspirine à faible dose prescrite en prévention coronaire n’est pas concernée.',
    affectedPillars: ['raas_arni', 'mra', 'loop_diuretic', 'sglt2i', 'antiplatelet', 'anticoagulant'],
    evidenceGrade: 'ESC 2026 Classe III, niveau B2 ; AHA/ACC/HFSA 2022 Classe 3 (Danger) ; Abdin 2025',
    sources: ['ESC 2026', 'Abdin 2025 (EJHF)', 'AHA/ACC/HFSA 2022', 'Notice Entresto'],
    articleSlug: 'interactions-complements-aliments-medicaments',
  },
  {
    id: 'decongestionnants-pseudoephedrine',
    nameFr: 'Décongestionnants oraux contre le rhume (pseudoéphédrine, phényléphrine)',
    aliases: ['Pseudoéphédrine', 'Phényléphrine', 'Dolirhume', 'Actifed', 'Nurofen Rhume', 'Humex Rhume', 'Rhinadvil', 'Vasoconstricteurs nasaux'],
    verdict: 'avoid',
    summaryFr:
      'Passés sur ordonnance (Liste I) en France depuis le 11 décembre 2024 pour risques rares d’infarctus, d’AVC et de spasmes vasculaires cérébraux (PRES/RCVS) ; certains associent en plus de l’ibuprofène, et la phényléphrine orale est jugée inefficace.',
    mechanismOrCaveatFr:
      'Sympathomimétiques vasoconstricteurs s’opposant aux bêtabloquants et augmentant la postcharge. À la suite de la revue EMA 2024 (PRES, RCVS), l’ANSM a classé tous les décongestionnants oraux à la pseudoéphédrine sur Liste I le 11 décembre 2024 tout en continuant à les déconseiller pour un rhume. Les RCP BDPM (Actifed Rhume, Dolirhume) contre-indiquent coronaropathie sévère, HTA sévère/non contrôlée, insuffisance rénale et association au méthylphénidate ; Nurofen Rhume et Rhinadvil contiennent en outre de l’ibuprofène (AINS Classe III). Aux États-Unis, la FDA a proposé en novembre 2024 le retrait OTC de la phényléphrine orale faute d’efficacité. Privilégiez le lavage nasal au sérum physiologique et l’avis de votre pharmacien.',
    affectedPillars: ['beta_blocker', 'raas_arni', 'addon_hf'],
    evidenceGrade: 'Décision ANSM 11 déc. 2024 (Liste I) ; EMA 2024 ; RCP BDPM ; FDA nov. 2024 ; AHA 2016',
    sources: ['ANSM (décembre 2024)', 'EMA PRAC/CHMP (2024)', 'RCP BDPM Actifed/Dolirhume', 'FDA (novembre 2024)', 'AHA 2016'],
    articleSlug: 'cafeine-boissons-energisantes-et-stimulants',
  },
  {
    id: 'boissons-energisantes-stimulants',
    nameFr: 'Boissons énergisantes, brûleurs de graisse, pré-entraînements et poudres de caféine',
    aliases: [
      'Boissons énergisantes',
      'Red Bull',
      'Monster',
      'Brûleurs de graisse',
      'Pre-workout',
      'Pré-entraînement',
      'Orange amère',
      'Synéphrine',
      'Éphédra',
      'DMAA',
      'Yohimbine',
      'Comprimés de caféine',
    ],
    verdict: 'avoid',
    summaryFr:
      'Les boissons énergisantes allongent le QTc et élèvent la tension au-delà de la seule caféine ; les brûleurs de graisse et pré-entraînements empilent des stimulants déconseillés par l’ANSES et l’AHA et contiennent fréquemment des médicaments cachés.',
    mechanismOrCaveatFr:
      'Environ 1 L de boisson énergisante allonge le QTc de 6 à 8 ms et élève la PA systolique de ~5 mmHg davantage que le placebo ou la même dose de caféine seule (Shah 2019, Fletcher 2017) ; l’ANSES (2013) recommande de ne jamais en boire avec de l’alcool ni pendant l’effort physique. L’ANSES (2014, 2016) et l’AHA (2016) déconseillent orange amère (p-synéphrine + caféine), éphédra, DMAA, yohimbine et compléments minceur/sportifs en cas de cardiopathie : 85 % des 317 produits minceur épinglés par la FDA contenaient de la sibutramine cachée, certains des diurétiques de l’anse ou du propranolol (Tucker 2018). Comprimés et poudres de caféine exposent à des erreurs de dose mortelles par fibrillation ventriculaire (Cappelletti 2018).',
    affectedPillars: ['beta_blocker', 'raas_arni', 'loop_diuretic', 'addon_hf', 'other'],
    evidenceGrade: 'Avis ANSES (2013, 2014, 2016) ; AHA 2016 ; Shah 2019 ; Fletcher 2017 ; Tucker 2018',
    sources: ['ANSES 2013, 2014 et 2016', 'Shah 2019', 'Fletcher 2017', 'AHA 2016', 'Tucker 2018', 'Cappelletti 2018'],
    articleSlug: 'cafeine-boissons-energisantes-et-stimulants',
  },
  {
    id: 'stimulants-tdah',
    nameFr: 'Stimulants prescrits pour le TDAH (méthylphénidate, lisdexamfétamine — avis spécialisé impératif)',
    aliases: ['Méthylphénidate', 'Ritaline', 'Concerta', 'Medikinet', 'Quasym', 'Lisdexamfétamine', 'Xurta', 'Elvanse', 'TDAH'],
    verdict: 'avoid',
    summaryFr:
      'Les RCP français et britanniques contre-indiquent ou déconseillent formellement ces stimulants dans l’insuffisance cardiaque, la cardiomyopathie et après un infarctus ; ne jamais initier ni arrêter un traitement prescrit sans réévaluation conjointe spécialiste + cardiologue.',
    mechanismOrCaveatFr:
      'Les RCP BDPM (Ritaline, sept. 2025) et UK eMC (Concerta XL) contre-indiquent explicitement le méthylphénidate en cas d’IC, cardiomyopathie, infarctus, angor ou arythmies graves (et l’association à la pseudoéphédrine) ; ceux de la lisdexamfétamine (Xurta, août 2026 ; Elvanse) contre-indiquent les MCV symptomatiques et mettent en garde dans l’IC/cardiomyopathie (possible allongement QTc). Les cohortes nationales 2024–2026 en population TDAH montrent une hausse du risque CV au long cours (Suède Zhang 2024 AOR 1,23–1,27 ; France SNDS Berthod 2026 HR calibré 1,85 ; Danemark Holt 2024 signal IC à 10 ans RR 1,7 à ≥ 1 DDD/j), sans essai dans l’ICFER. Toute conduite à tenir (maintien, arrêt, alternative non stimulante) relève uniquement d’une concertation psychiatre/neurologue + cardiologue.',
    affectedPillars: ['beta_blocker', 'raas_arni', 'addon_hf', 'other'],
    evidenceGrade: 'RCP officiels BDPM (Ritaline, Xurta) et eMC ; AHA 2016 ; cohortes Zhang 2024 / Holt 2024 / Berthod 2026',
    sources: ['RCP BDPM Ritaline et Xurta', 'UK eMC Concerta XL et Elvanse', 'Zhang 2024', 'Holt 2024', 'Berthod 2026', 'AHA 2016'],
    articleSlug: 'cafeine-boissons-energisantes-et-stimulants',
  },
  {
    id: 'berberine',
    nameFr: 'Berbérine (compléments cholestérol / glycémie)',
    aliases: ['Berbérine', 'Berberis', 'Épine-vinette', 'Hydraste du Canada', 'Ozempic naturel'],
    verdict: 'avoid',
    summaryFr:
      'Inhibe plusieurs enzymes hépatiques clés (CYP3A4, CYP2D6, CYP2C9) et la glycoprotéine P sans preuve clinique cardiaque moderne ; l’ANSES déconseille de l’associer à des médicaments.',
    mechanismOrCaveatFr:
      'Abaisse le LDL-c d’environ 0,19 g/L (0,5 mmol/L) dans des essais courts sans aucune donnée sur les infarctus ou la mortalité ni en ajout d’une statine (Liu 2025 ; seul essai IC Zeng 2003 non répliqué). Chez l’humain, augmente la sonde CYP3A4 (+40 %), multiplie par ~9 le ratio CYP2D6, double CYP2C9 (Guo 2012, résumés) et élève la ciclosporine (Wu 2005), rendant plausibles des interactions avec métoprolol/carvédilol, warfarine, apixaban/rivaroxaban, digoxine, simvastatine/atorvastatine et ivabradine. Teneur réelle très variable (33 à 100 %, Funk 2018). Avis préalable du pharmacien ou du cardiologue obligatoire, surtout sous anticoagulant ou digoxine.',
    affectedPillars: ['anticoagulant', 'beta_blocker', 'lipid_lowering', 'addon_hf', 'raas_arni'],
    evidenceGrade: 'Avis ANSES 2019 ; Guo 2012 ; Wu 2005 ; Liu 2025 (aucune donnée d’événement clinique)',
    sources: ['Avis ANSES 2019', 'Guo 2012', 'Wu 2005', 'Liu 2025', 'Funk 2018', 'MSKCC 2025'],
    articleSlug: 'berberine-cholesterol-et-interactions',
  },
  {
    id: 'reglisse-glycyrrhizine',
    nameFr: 'Réglisse véritable (glycyrrhizine : bonbons, tisanes, sirops, plantes)',
    aliases: ['Réglisse', 'Glycyrrhizine', 'Antésite', 'Tisane réglisse', 'Racine de réglisse', 'Bonbons réglisse'],
    verdict: 'avoid',
    summaryFr:
      'Provoque rétention d’eau et de sel, hypertension artérielle et baisse du potassium, à l’opposé direct du traitement de l’insuffisance cardiaque, avec des cas documentés d’œdème pulmonaire.',
    mechanismOrCaveatFr:
      'La glycyrrhizine inhibe l’enzyme rénale 11-bêta-HSD2, donnant au cortisol un effet proche de l’aldostérone (antagoniste des ARM). L’hypokaliémie s’additionne à celle des diurétiques de l’anse et favorise troubles du rythme et toxicité de la digoxine. La monographie EMA 2026 la déconseille formellement en cas de maladie cardiovasculaire. Les effets peuvent mettre des semaines à régresser après arrêt. Vérifiez la mention européenne « contient de la réglisse ».',
    affectedPillars: ['mra', 'loop_diuretic', 'raas_arni', 'addon_hf'],
    evidenceGrade: 'Monographie EMA 2026 ; revue Deutch 2019 ; alerte FDA',
    sources: ['EMA 2026', 'Deutch 2019', 'NCCIH', 'FDA 2011'],
    articleSlug: 'interactions-complements-aliments-medicaments',
  },
  {
    id: 'millepertuis',
    nameFr: 'Millepertuis (Hypericum perforatum)',
    aliases: ['Millepertuis', 'Hypericum', 'St John’s wort', 'Plante antidépressive'],
    verdict: 'avoid',
    summaryFr:
      'Nommément cité sur les RCP européens, français et britanniques pour les quatre AOD, l’éplérénone, l’ivabradine et l’atorvastatine (perte d’efficacité), tandis qu’il agit en sens inverse sur le clopidogrel en majorant le risque hémorragique.',
    mechanismOrCaveatFr:
      'Puissant inducteur des CYP3A4, CYP2C9, CYP2C19 et de la P-gp (selon la teneur en hyperforine). RCP EMA : éviter avec dabigatran (Pradaxa) et rivaroxaban (Xarelto ; AUC -24 % dans Scholz 2021) ; prudence / non recommandé avec apixaban (Eliquis ; éviter sur notice US) ; prudence avec édoxaban (Lixiana). RCP BDPM/eMC : baisse de 30 % de l’AUC d’éplérénone (Inspra, non recommandé), baisse de l’atorvastatine (Tahor, LDL +0,13 g/L dans Andren 2007 ; aucun avertissement sur la rosuvastatine) et avertissement de classe sur le ticagrélor (Brilique). À l’inverse, sur le clopidogrel (Plavix), l’induction CYP2C19 augmente le métabolite actif et le risque de saignement (déconseillé par l’EMA). Affaiblit aussi ivabradine, digoxine, warfarine et simvastatine, et expose au syndrome sérotoninergique avec les antidépresseurs.',
    affectedPillars: ['anticoagulant', 'antiplatelet', 'mra', 'addon_hf', 'lipid_lowering', 'other'],
    evidenceGrade: 'Élevée (vérification directe des RCP EMA, FR BDPM, UK eMC et FDA)',
    sources: ['RCP EMA (Pradaxa, Xarelto, Eliquis, Lixiana, Brilique, Plavix)', 'RCP BDPM (Inspra, Tahor)', 'Notices Corlanor/Eliquis', 'Scholz 2021 / Andren 2007 / Lau 2011', 'NCCIH'],
    articleSlug: 'interactions-complements-aliments-medicaments',
  },
  {
    id: 'pamplemousse',
    nameFr: 'Pamplemousse et jus de pamplemousse (avec certaines statines et ivabradine)',
    aliases: ['Jus de pamplemousse', 'Pomelo', 'Pamplemousse rose'],
    verdict: 'avoid',
    summaryFr:
      'Augmente les concentrations sanguines de la simvastatine, de l’atorvastatine et de l’ivabradine, majorant les risques d’effets indésirables musculaires ou rythmiques.',
    mechanismOrCaveatFr:
      'Inhibe l’enzyme intestinale CYP3A4. À éviter sous simvastatine (notice) et sous ivabradine (Procoralan) ; éviter les grandes quantités (> 1,2 L/j) sous atorvastatine (Tahor). La rosuvastatine (Crestor) ne dépend pas significativement du CYP3A4 et ne porte pas cette mise en garde sur sa notice : vérifiez toujours votre molécule exacte.',
    affectedPillars: ['lipid_lowering', 'addon_hf'],
    evidenceGrade: 'Élevée (notices simvastatine, atorvastatine, ivabradine ; FDA)',
    sources: ['Notices simvastatine, atorvastatine, rosuvastatine et ivabradine', 'FDA'],
    articleSlug: 'interactions-complements-aliments-medicaments',
  },
  {
    id: 'levure-de-riz-rouge',
    nameFr: 'Levure de riz rouge (monacoline K)',
    aliases: ['Levure de riz rouge', 'Monacoline K', 'Beni-koji', 'Complément cholestérol'],
    verdict: 'avoid',
    summaryFr:
      'Contient de la lovastatine à dose non maîtrisée : fait double emploi avec une statine prescrite, cumule les risques musculaires et rénaux et expose à des contaminations toxiques.',
    mechanismOrCaveatFr:
      'La teneur en monacoline K varie d’un facteur 60 entre produits. L’EFSA a documenté des effets indésirables graves dès 3 mg/j (dont rhabdomyolyse en association avec la rosuvastatine) et le règlement UE 2022/860 interdit le cumul avec un hypocholestérolémiant. Risque supplémentaire de toxines fongiques (citrinine ; crise japonaise 2024 à l’acide pubérulique avec insuffisance rénale). Ne jamais substituer ni ajouter à votre statine.',
    affectedPillars: ['lipid_lowering'],
    evidenceGrade: 'EFSA 2018/2025 ; Règlement UE 2022/860 ; ESC lipides 2025 (Classe III)',
    sources: ['EFSA 2018 et 2025', 'Règlement UE 2022/860', 'Shinzawa 2025', 'NCCIH'],
    articleSlug: 'interactions-complements-aliments-medicaments',
  },
  {
    id: 'regimes-cetogenes-jeune-isglt2',
    nameFr: 'Régimes cétogènes, régimes très hypocaloriques et jeûnes prolongés sous iSGLT2',
    aliases: ['Régime cétogène', 'Keto', 'Jeûne prolongé', 'Régime draconien', 'Acidocétose'],
    verdict: 'avoid',
    summaryFr:
      'Facteurs déclenchants officiels d’acidocétose (parfois à glycémie normale) chez les patients traités par inhibiteur du SGLT2 (dapagliflozine — Forxiga, empagliflozine — Jardiance).',
    mechanismOrCaveatFr:
      'La notice de la dapagliflozine cite explicitement régime cétogène, restriction calorique sévère, déshydratation, chirurgie et abus d’alcool comme déclencheurs d’acidocétose euglycémique (nausées, vomissements, douleurs abdominales, essoufflement). La déclaration HFA 2025 rappelle aussi les risques d’hypoglycémie sous insuline, de troubles électrolytiques et de hausse du LDL ; la revue rétrospective non contrôlée Moseley 2025 (125 patients IC obèses, dont seulement 2 sous iSGLT2 et sans mesure de cétones) n’apporte aucune réassurance. Envisagez toute perte de poids de façon progressive et encadrée.',
    affectedPillars: ['sglt2i'],
    evidenceGrade: 'Directe (notice dapagliflozine — Forxiga) ; HFA 2025',
    sources: ['Notice dapagliflozine (Forxiga)', 'HFA 2025', 'Moseley 2025', 'DAPA-HF', 'DELIVER'],
    articleSlug: 'interactions-complements-aliments-medicaments',
  },
  {
    id: 'omega-3-forte-dose',
    nameFr: 'Oméga-3 / huile de poisson à forte dose (> 1 à 1,5 g/j, surtout ≥ 4 g/j)',
    aliases: ['Huile de poisson forte dose', 'Oméga-3 4 g', 'EPA haute dose', 'Icosapent éthyl non prescrit'],
    verdict: 'avoid',
    summaryFr:
      'Les fortes doses d’oméga-3 augmentent nettement le risque de fibrillation atriale (+49 % au-dessus de 1 g/j ; +43 % au-dessus de 1,5 g/j chez les patients à haut risque) et majorent légèrement les saignements à 4 g/j.',
    mechanismOrCaveatFr:
      'L’ensemble des méta-analyses (Gencer 2021 : HR 1,49 au-dessus de 1 g/j ; Abuknesha 2026 sur 35 essais et 114 592 patients : OR 1,43 [1,14–1,79] au-dessus de 1,5 g/j chez les patients à haut risque, OR 1,14 globalement) confirme la hausse du risque de FA aux doses élevées. L’AHA 2022 recommande d’éviter ≥ 4 g/j dans l’insuffisance cardiaque. À 4 g/j d’EPA purifié, le risque hémorragique augmente aussi légèrement (+0,6 pour 100), notamment avec aspirine, clopidogrel ou warfarine.',
    affectedPillars: ['antiplatelet', 'anticoagulant', 'beta_blocker'],
    evidenceGrade: 'Gencer 2021 ; Abuknesha 2026 ; AHA 2022 (éviter ≥ 4 g/j) ; REDUCE-IT',
    sources: ['Gencer 2021', 'Abuknesha 2026 (texte intégral)', 'AHA 2022 CAM statement', 'Javaid 2024'],
    articleSlug: 'omega-3-huile-de-poisson',
  },
  {
    id: 'extrait-the-vert-egcg',
    nameFr: 'Extrait concentré de thé vert (EGCG, gélules « brûle-graisses ») — digoxine, IEC et statines',
    aliases: ['Extrait de thé vert', 'Thé vert et digoxine', 'EGCG', 'Catéchines concentrées', 'Brûle-graisses', 'Gélules thé vert'],
    verdict: 'avoid',
    summaryFr:
      'Réduit de 31 % à 33 % l’exposition humaine à la digoxine et abaisse nettement l’absorption du lisinopril et de certaines statines, tout en exposant à un risque rare mais imprévisible d’atteinte hépatique grave.',
    mechanismOrCaveatFr:
      'Bloque des transporteurs intestinaux : dans des études humaines chez volontaires sains, baisse de la digoxine (-31 % en prise unique et -33 % après 13 jours avec 300 mg de catéchines, Kim 2018), du lisinopril (-67 %), du nadolol (-85 %), du céliprolol (-98,6 %), de la rosuvastatine (-19 %) et de l’atorvastatine (-22 à -24 %). Aucune étude PK humaine n’existe pour les bêtabloquants de l’ICFER (données murines uniquement pour le bisoprolol, Zeng 2022), les ARNI ou les iSGLT2. Toxicité hépatique signalée dès 800 mg/j d’EGCG par l’EFSA (plafond UE 2022/2340 ; cas graves dès 140 mg/j) et hausse tensionnelle possible. Distinct d’une consommation modérée de thé vert infusé classique.',
    affectedPillars: ['addon_hf', 'raas_arni', 'beta_blocker', 'lipid_lowering'],
    evidenceGrade: 'Kim 2018 (digoxine humain) ; EFSA 2018 ; Règlement UE 2022/2340 ; études PK (Misaka, Kim)',
    sources: ['Kim 2018 (digoxine)', 'EFSA 2018', 'Règlement UE 2022/2340', 'Misaka 2014/2021', 'Kyriacou 2025 / Zeng 2022', 'Hoofnagle 2021'],
    articleSlug: 'interactions-complements-aliments-medicaments',
  },
  {
    id: 'vitamine-k-variations-avk',
    nameFr: 'Suppléments de vitamine K et variations brutales d’apports (thé vert, choux) sous AVK',
    aliases: ['Vitamine K', 'Vitamine K2', 'Ménaquinone', 'Choux et AVK', 'Thé vert et Coumadine', 'INR instable'],
    verdict: 'avoid',
    summaryFr:
      'Sous antivitamine K (warfarine — Coumadine, fluindione — Préviscan, acénocoumarol — Sintrom), les compléments contenant de la vitamine K ou les changements brusques de consommation déséquilibrent l’INR.',
    mechanismOrCaveatFr:
      'Les AVK agissent en bloquant le cycle de la vitamine K. Un apport soudain élevé (complément de vitamine K1/K2, cure de thé vert ou changement alimentaire brutal) diminue l’INR et expose à un risque de caillot (thrombus), tandis qu’un arrêt brutal augmente le risque hémorragique. Il ne faut pas supprimer les légumes verts, mais garder une consommation régulière et éviter tout complément contenant de la vitamine K sans avis médical. (Non applicable aux AOD comme l’apixaban ou le rivaroxaban ; pour le rivaroxaban 15–20 mg, la prise avec un repas est en revanche indispensable.)',
    affectedPillars: ['anticoagulant'],
    evidenceGrade: 'Mécanisme pharmacologique direct des AVK',
    sources: ['Suivi des antivitamines K', 'Interactions aliments-médicaments'],
    articleSlug: 'thrombus-vg-et-anticoagulants',
  },
  {
    id: 'danshen-sauge-rouge',
    nameFr: 'Danshen (racine de sauge rouge, Salvia miltiorrhiza)',
    aliases: ['Danshen', 'Sauge rouge', 'Salvia miltiorrhiza', 'Compound Danshen'],
    verdict: 'avoid',
    summaryFr:
      'Associé à des cas de surdosage hémorragique grave sous warfarine et à un signal de saignements précoces multipliés par ~4 sous AOD (Liao 2026), fausse certains dosages de digoxine et induit CYP3A4/P-gp.',
    mechanismOrCaveatFr:
      'Inhibe l’agrégation plaquettaire et potentialise la warfarine (3 cas de surdosage majeur + 1 cas sur valve mécanique). Dans une série autocontrôlée taïwanaise majoritairement sous AOD (Liao 2026, 146 patients), les saignements ont augmenté aux jours 1–14 (aIRR 3,98) et 15–28 (aIRR 3,99), y compris digestifs (3,79) et intracrâniens (3,59), sans saignement majeur hospitalisé et avec atténuation en analyse premier événement (digestif aIRR 2,02) ; une cohorte antérieure à 99 % sous warfarine (Hsu 2022) était neutre sur les saignements hospitalisés (aHR 0,948 ns). Qualité très aléatoire (39,7 % de non-conformité en Chine). À éviter avec tout anticoagulant ; l’essai QUEST (11 plantes) ne valide jamais le danshen seul.',
    affectedPillars: ['anticoagulant', 'antiplatelet', 'addon_hf'],
    evidenceGrade: 'Cas cliniques graves warfarine ; Liao 2026 (AOD, observationnel) ; études PK',
    sources: ['Liao 2026', 'Hsu 2022', 'Chan 2001', 'Izzat 1998', 'Qiu 2010–2014', 'Dasgupta'],
    articleSlug: 'interactions-complements-aliments-medicaments',
  },
  {
    id: 'ginkgo-biloba',
    nameFr: 'Ginkgo biloba (avec anticoagulants ou antiagrégants)',
    aliases: ['Ginkgo', 'Ginkgo biloba', 'EGb 761', 'Tanakan', 'Complément mémoire'],
    verdict: 'avoid',
    summaryFr:
      'Signaux hémorragiques rapportés avec la warfarine (HR 1,38), le clopidogrel (OR 1,10) et l’aspirine (OR 1,12), malgré un essai neutre financé par le fabricant sur EGb 761 + rivaroxaban ; arrêt EMA 3 à 4 jours avant chirurgie.',
    mechanismOrCaveatFr:
      'Bien que 18 petits essais n’aient pas modifié les tests de coagulation et que l’extrait standardisé EGb 761 (240 mg/j × 8 j) n’ait pas altéré une dose unique de rivaroxaban chez 41 volontaires sains (Hoerr 2022, financé par le fabricant), des études de vie réelle montrent un signal hémorragique sous warfarine (Stoddard 2015, HR 1,38) et avec clopidogrel/aspirine (Mai 2025, effectifs AOD et ticagrélor trop petits pour conclure). L’EMA demande un avis médical sous anticoagulant (prudence avec le dabigatran) ou antiagrégant, et un arrêt 3 à 4 jours avant chirurgie.',
    affectedPillars: ['anticoagulant', 'antiplatelet'],
    evidenceGrade: 'Monographie EMA ; Stoddard 2015 (HR 1,38) ; Hoerr 2022 vs Mai 2025 (discordants)',
    sources: ['Monographie EMA Ginkgo', 'Stoddard 2015', 'Hoerr 2022', 'Mai 2025', 'NCCIH'],
    articleSlug: 'interactions-complements-aliments-medicaments',
  },
  {
    id: 'ail-complements',
    nameFr: 'Compléments concentrés d’ail (gélules, extraits)',
    aliases: ['Ail en gélules', 'Extrait d’ail vieilli', 'Complément ail', 'Allium sativum'],
    verdict: 'avoid',
    summaryFr:
      'Effet antiagrégant plaquettaire pouvant s’ajouter à celui de l’aspirine, du clopidogrel ou des anticoagulants ; la monographie européenne recommande d’arrêter 7 jours avant une chirurgie.',
    mechanismOrCaveatFr:
      'Cet avertissement vise uniquement les compléments et extraits concentrés (pas l’ail utilisé normalement en cuisine). Un petit essai d’extrait d’ail vieilli sous warfarine était rassurant, mais aucun essai humain n’existe avec les AOD ni avec le clopidogrel ou le ticagrélor (signal mécanistique P-gp + antiplaquettaire, Grzesk 2021) : par prudence, éviter sans accord de votre cardiologue.',
    affectedPillars: ['antiplatelet', 'anticoagulant'],
    evidenceGrade: 'Monographie EMA (prudence + arrêt 7 jours avant chirurgie)',
    sources: ['Monographie EMA Ail', 'Macan 2006', 'Grzesk 2021', 'NCCIH'],
    articleSlug: 'interactions-complements-aliments-medicaments',
  },
  {
    id: 'vitamine-e-beta-carotene',
    nameFr: 'Vitamine E à forte dose et bêta-carotène (en automédication)',
    aliases: ['Vitamine E', 'Tocophérol', 'Bêta-carotène', 'Provitamine A'],
    verdict: 'avoid',
    summaryFr:
      'Signaux démontrés d’effets délétères cardiovasculaires : davantage d’hospitalisations pour insuffisance cardiaque sous vitamine E (RR 1,21) et hausse de la mortalité sous bêta-carotène (RR 1,10 à 1,12).',
    mechanismOrCaveatFr:
      'Les grands essais associent la vitamine E à haute dose à davantage d’hospitalisations pour insuffisance cardiaque et, au-dessus de 400 UI/j, à un surrisque de saignement sous aspirine ou anticoagulants. Le bêta-carotène en complément s’associe quant à lui à un surrisque cardiovasculaire et de mortalité : ces deux compléments sont déconseillés.',
    affectedPillars: ['antiplatelet', 'anticoagulant', 'other'],
    evidenceGrade: 'Certitude modérée pour la vitamine E (Khan 2021) ; USPSTF 2022 Grade D',
    sources: ['Khan 2021 (texte intégral)', 'Chua 2025', 'An 2022 (texte intégral)', 'USPSTF 2022', 'NIH ODS'],
    articleSlug: 'interactions-complements-aliments-medicaments',
  },
  {
    id: 'vitamines-b-complexe-homocysteine',
    nameFr: 'Complexes B « cœur / homocystéine » (acide folique + B12 + B6) et vitamine B6 à forte dose',
    aliases: [
      'Complexe B',
      'Vitamine B6',
      'Pyridoxine',
      'Acide folique',
      'Vitamine B9',
      'Vitamine B12',
      'Homocystéine',
    ],
    verdict: 'avoid',
    summaryFr:
      'Aucun bénéfice sur l’infarctus ou la mortalité dans 15 essais (Cochrane 2017, 71 422 personnes), tendance défavorable après infarctus pour la triple association B9 + B12 + B6 (NORVIT, RR 1,22), et risque de neuropathie sensitive avec la vitamine B6 à forte dose.',
    mechanismOrCaveatFr:
      'Après un infarctus, les complexes fortement dosés B9 + B12 + B6 n’ont pas protégé le cœur et ont même montré une tendance défavorable (ainsi qu’un déclin rénal plus rapide en cas de diabète avec atteinte rénale). L’acide folique au-delà de 1 mg/j peut masquer une carence en B12 et l’excès de B6 expose à des troubles nerveux (limite européenne : 12 mg/j, parfois dépassée par certains produits magnésium-B6). À ne pas confondre avec la correction médicale d’une carence documentée en B12 ou en B1.',
    affectedPillars: ['antiplatelet', 'loop_diuretic', 'other'],
    evidenceGrade: 'Cochrane 2017 (qualité élevée, aucun bénéfice IDM/décès) ; NORVIT 2006 ; ESPEN 2022',
    sources: ['Cochrane 2017', 'NORVIT 2006', 'ESPEN 2022', 'Lam 2013', 'AHA/ACC/HFSA 2022'],
    articleSlug: 'vitamines-b-insuffisance-cardiaque',
  },
  {
    id: 'calcium-vitamine-d-automedication',
    nameFr: 'Association calcium + vitamine D en automédication (hors prescription)',
    aliases: ['Calcium + vitamine D', 'Complément calcium', 'Calcium sans ordonnance', 'Calcium OTC'],
    verdict: 'avoid',
    summaryFr:
      'Associée à un surrisque d’accident vasculaire cérébral (RR 1,17) dans une grande synthèse de prévention cardiovasculaire ; ne pas débuter sans indication médicale précise.',
    mechanismOrCaveatFr:
      'Constat issu de la méta-analyse Khan 2019 (certitude modérée). Si du calcium et de la vitamine D vous ont été prescrits par votre médecin pour une ostéoporose ou une autre raison osseuse, ne les arrêtez pas sans son avis : discutez-en simplement lors d’une consultation.',
    affectedPillars: ['other'],
    evidenceGrade: 'Certitude modérée (Khan 2019)',
    sources: ['Khan 2019', 'An 2022'],
    articleSlug: 'vitamine-d-insuffisance-cardiaque',
  },
  {
    id: 'muguet-actee-bleue',
    nameFr: 'Muguet (Convallaria) et actée bleue (blue cohosh)',
    aliases: ['Muguet', 'Convallaria majalis', 'Actée bleue', 'Blue cohosh', 'Caulophyllum'],
    verdict: 'avoid',
    summaryFr:
      'Plantes directement cardiotoxiques à éviter formellement dans l’insuffisance cardiaque.',
    mechanismOrCaveatFr:
      'Le muguet contient des glycosides cardiaques de type digitalique exposant à une toxicité sévère (notamment en association avec la digoxine ou une hypokaliémie sous diurétiques) et à des troubles du rythme graves. L’actée bleue présente une toxicité cardiovasculaire et vasoconstrictrice signalée par l’AHA 2022.',
    affectedPillars: ['addon_hf', 'loop_diuretic', 'other'],
    evidenceGrade: 'AHA 2022 CAM statement (nocif)',
    sources: ['AHA 2022 CAM statement'],
    articleSlug: 'interactions-complements-aliments-medicaments',
  },
  {
    id: 'alcool-exces',
    nameFr: 'Consommation excessive d’alcool (et alcool fort sous iSGLT2 / anticoagulants)',
    aliases: ['Alcool', 'Vin', 'Spiritueux', 'Consommation excessive d’alcool', 'Binge drinking'],
    verdict: 'avoid',
    summaryFr:
      'Une consommation importante d’alcool est directement toxique pour le muscle cardiaque, favorise la fibrillation atriale, aggrave la tension et accroît les risques d’acidocétose sous iSGLT2 et d’hémorragie sous anticoagulants.',
    mechanismOrCaveatFr:
      'Les recommandations européennes déconseillent formellement les consommations excessives d’alcool, et les prétendus bénéfices du vin ne sont pas prouvés ; l’OMS considère l’abstinence comme le niveau le plus sûr. L’abus d’alcool peut aussi favoriser une acidocétose sous iSGLT2 (dapagliflozine). Parlez ouvertement de votre consommation avec votre cardiologue.',
    affectedPillars: ['sglt2i', 'anticoagulant', 'antiplatelet', 'beta_blocker'],
    evidenceGrade: 'ESC 2026 (Classe I, niveau C) ; notice dapagliflozine',
    sources: ['ESC 2026', 'Schwingshackl 2026', 'Qiu 2025', 'Notice dapagliflozine (Forxiga)'],
    articleSlug: 'alimentation-cardioprotectrice',
  },
];
