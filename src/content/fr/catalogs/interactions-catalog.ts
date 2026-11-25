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
      'Indiqué uniquement après bilan sanguin (ferritine et CST) et prescription cardiologique. Dans 6 essais randomisés (7 175 patients, dont FAIR-HF2 avec 78 % de causes ischémiques), baisse du critère hospitalisations IC + décès CV (RR 0,81) sans effet démontré sur la mortalité globale. À ne pas confondre avec le fer en comprimés.',
    affectedPillars: ['other'],
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
      'CORDIOPREV (87 contre 111 événements) ayant exclu les FEVG ≤ 35 %, ce modèle protège le versant coronaire mais n’est pas prouvé comme traitement direct de l’ICFER. Les synthèses (BMJ 2023 NMA ; revue parapluie Hareer 2024 ; HAS 2026) montrent moins d’AVC et d’événements coronaires sans preuve randomisée dans l’ICFER établie. Adaptez les apports très riches en potassium avec votre équipe ou un(e) diététicien(ne) sous IEC/ARA2/ARNI ou ARM ; la fixation d’objectifs et le suivi régulier aident à tenir dans la durée (Rutters 2024).',
    affectedPillars: ['raas_arni', 'mra', 'lipid_lowering'],
    evidenceGrade: 'ESC 2026 Classe I, niveau C (hygiène de vie) ; HAS octobre 2026 (faible, coronaire) ; CORDIOPREV',
    sources: ['CORDIOPREV (The Lancet 2022)', 'BMJ 2023 NMA', 'Hareer 2024', 'HAS octobre 2026', 'Rutters 2024', 'ESC 2026'],
    articleSlug: 'alimentation-cardioprotectrice',
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
      'Petit bénéfice de survie dans un ancien essai (GISSI-HF : 27 % contre 29 %, NNT 56 sur 4 ans) antérieur aux traitements modernes, mais compromis possible avec le risque de fibrillation atriale.',
    mechanismOrCaveatFr:
      'Dans GISSI-HF (870 mg d’EPA+DHA/j), la FA incidente était de 11,2 % contre 9,8 % (OR 1,16, non significatif). Les deux méta-analyses sur la FA pointent légèrement vers le haut aux faibles doses (Gencer 2021 : HR 1,12 ≤ 1 g/j ; Abuknesha 2026, 35 essais, financée en partie par l’industrie : OR 1,06–1,07 ≤ 1,5 g/j, non significatif, mais OR 1,14 significatif toutes doses confondues). Peu d’excès de saignements globalement (2,6 % contre 2,4 %), mais surveillance demandée avec aspirine, clopidogrel ou warfarine. Les gélules en vente libre ne sont pas équivalentes aux spécialités sur prescription.',
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
      'Signal clinique intrigant mais fragile : un petit essai (Q-SYMBIO, 420 patients, FEVG moyenne 31 %, ~70 % ischémiques) a divisé par deux les événements majeurs à 2 ans, mais a été arrêté précocement, financé en partie par l’industrie, jamais répliqué et précède les médicaments modernes.',
    mechanismOrCaveatFr:
      'Aucun résultat séparé pour les patients ischémiques ni effet sur la FEVG ou le NT-proBNP ; Khan 2021 et An 2022 semblent regrouper les mêmes 7 essais (1 827 patients) et le signal de mortalité disparaît sans Q-SYMBIO. Généralement bien tolérée (13 % contre 19 % d’effets indésirables dans Q-SYMBIO), aucune recommandation internationale ne la conseille. Interactions signalées avec la warfarine (Khan 2021) et les antihypertenseurs/anticoagulants (AHA 2022). Qualité et dosage variables entre compléments.',
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
    nameFr: 'Café et caféine (consommation modérée)',
    aliases: ['Café', 'Caféine', 'Expresso', 'Thé infusé classique'],
    verdict: 'possible',
    summaryFr:
      'Une consommation modérée de café (environ 1 à 2 tasses/j) apparaît neutre à favorable sur la fibrillation atriale hors ICFER, mais n’a pas été spécifiquement étudiée dans l’ICFER.',
    mechanismOrCaveatFr:
      'Dans DECAF (200 patients après cardioversion pour FA, FEVG moyenne 54 %), environ 1 tasse/j a été associée à moins de récidives de FA (47 % contre 64 %). Dans CRAVE (adultes sains), le café a augmenté les extrasystoles ventriculaires (154 contre 102/j) et raccourci le sommeil de 36 min. Signalez toute palpitation à votre cardiologue et évitez les boissons énergisantes fortement caféinées.',
    affectedPillars: ['beta_blocker', 'other'],
    evidenceGrade: 'Preuve indirecte (DECAF, CRAVE ; aucune donnée ICFER)',
    sources: ['DECAF', 'CRAVE', 'Stevens 2021'],
    articleSlug: 'alimentation-cardioprotectrice',
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
    id: 'vitamine-d-seule',
    nameFr: 'Vitamine D seule (en dehors d’une carence documentée)',
    aliases: ['Cholécalciférol', 'Vitamine D3', '25(OH)D', 'ZymaD', 'Uvedose', 'Complément vitamine D'],
    verdict: 'not_supported',
    summaryFr:
      'Carence très fréquente dans l’ICFER (56 à 83 %), mais aucun essai randomisé ne montre que la vitamine D réduit les décès ou hospitalisations ; dans les essais IC regroupés, la marche de 6 minutes était même raccourcie de 39 m.',
    mechanismOrCaveatFr:
      'Les grands essais en population générale (VITAL-HF, méta-analyse de 21 essais sur 83 291 personnes, DO-HEALTH, An 2022 sur 63 essais : décès RR 0,99) et EVITA (HR 1,09 rapporté) ne montrent aucun bénéfice cardiaque. Dans les essais IC (Khan 2021, repris par Chua 2025), marche de 6 min -39,4 m (certitude élevée) malgré une hausse très hétérogène de la FEVG (+4,33 points, I² = 90 %). L’enquête NHANES (Hung 2023) ne montre qu’une association transversale non causale. Corriger une carence avérée reste raisonnable pour les os et les muscles (Kampka 2025), mais pas « pour le cœur ». Précautions signalées par l’AHA 2022 avec digoxine, inhibiteurs calciques et diurétiques.',
    affectedPillars: ['addon_hf', 'loop_diuretic', 'other'],
    evidenceGrade: 'AHA/ACC/HFSA 2022 Classe 3 (Absence de bénéfice hors carence) ; Kampka 2025 ; Khan 2021',
    sources: ['Kampka 2025', 'Khan 2021 (texte intégral)', 'Chua 2025', 'Hung 2023', 'An 2022', 'AHA/ACC/HFSA 2022'],
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
    ],
    verdict: 'not_supported',
    summaryFr:
      'Aucun essai randomisé solide ne démontre de bénéfice cardiaque dans l’ICFER ; à ne pas débuter « au cas où » sans dosage sanguin ni vérification de la fonction rénale, avec espacement nécessaire vis-à-vis de certains médicaments.',
    mechanismOrCaveatFr:
      'Dans GALACTIC-HF (FEVG ≤ 35 %), un magnésium bas (17,6 %) ne prédisait pas de surrisque contrairement à un magnésium élevé (> 0,95 mmol/L). Chez les vétérans américains IC (Yin 2026, observationnel), le magnésium oral s’associait à moins d’événements si le taux était bas (HR 0,91) mais à davantage si le taux était normal (HR 1,11). Le seul essai oral de survie (MACH, 79 NYHA IV, orotate) est trop fragile et non répliqué. Limites supérieures : 250 mg/j (UE) et 350 mg/j (É.-U.). Risque d’hypermagnésémie si le DFGe diminue (contre-indiqué < 30 mL/min sur les notices françaises) ; les IEC et AINS freinent son élimination et les iSGLT2 l’élèvent légèrement. Espacer des tétracyclines, fluoroquinolones et bisphosphonates (≥ 2 h), prendre la rosuvastatine (Crestor) ≥ 2 h avant tout antiacide aluminium/magnésium, surveiller le lien magnésium-digoxine, et attention aux produits magnésium-B6 (Magné B6 apporte 30 à 40 mg/j de B6 à la dose maximale, au-dessus de la limite UE de 12 mg/j).',
    affectedPillars: ['loop_diuretic', 'raas_arni', 'mra', 'sglt2i', 'lipid_lowering', 'addon_hf', 'other'],
    evidenceGrade: 'AHA/ACC/HFSA 2022 Classe 3 (hors carence) ; GALACTIC-HF 2026 ; Yin 2026 ; EFSA 250 mg/j',
    sources: ['Chimura 2026 (GALACTIC-HF)', 'Yin 2026 (EHJ)', 'Argeros 2025', 'Aal-Hamad 2023', 'NIH ODS / EFSA', 'AHA/ACC/HFSA 2022'],
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
      'Les synthèses An 2022 (texte intégral), Khan 2019 et USPSTF 2022 concluent à l’absence de bénéfice cardiovasculaire (grade I USPSTF). Les recommandations AHA/ACC/HFSA 2022 déconseillent les vitamines et compléments en routine hors carence avérée (Classe 3 : Absence de bénéfice). L’enquête transversale Qiu 2025 (alimentation/alcool) ne valide pas les compléments antioxydants ; voir les fiches dédiées pour la thiamine, les complexes B9/B12/B6 et les précurseurs du NAD+.',
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
      'La méta-analyse He 2024 (7 petits essais en double aveugle, 274 patients) ne retrouve aucun gain significatif de FEVG sous thiamine (+1,65 point [-1,10 à +4,41], et -0,06 point après correction du biais de publication ; essai IRM Keith 2019 négatif), infirmant le signal antérieur de Khan 2021 (+3,59 points sur 4 essais). L’essai canadien COLT-HF (NCT05873881, ~2 500 patients IC coronaire, fin primaire estimée juin 2027) est en cours. ESPEN 2022 indique que la thiamine sanguine (diphosphate de thiamine) peut être dosée en cas de suspicion de carence sous diurétiques prolongés. Pour la L-carnitine (Khan 2021), pas d’effet significatif sur la mortalité (RR 0,58 ; IC 95 % 0,16–2,12).',
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
      'Aucun bénéfice démontré seul dans l’insuffisance cardiaque ; effet imprévisible sur la warfarine et risque d’interférence avec certains dosages sanguins de digoxine.',
    mechanismOrCaveatFr:
      'Le ginseng américain a réduit l’efficacité de la warfarine dans un essai (pic INR -0,19), alors que le ginseng asiatique s’est montré neutre dans de petites études ; un cas d’hémorragie grave peropératoire a été décrit. Peut fausser d’anciens dosages de digoxine (et élever la digoxinémie avec l’éleuthérocoque). La teneur en principes actifs varie jusqu’à 36 fois selon les marques.',
    affectedPillars: ['anticoagulant', 'addon_hf'],
    evidenceGrade: 'Certitude faible ; EMA (usage traditionnel fatigue uniquement)',
    sources: ['Yuan 2004', 'Lee 2010', 'Dasgupta', 'NCCIH', 'EMA'],
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
      'Malgré des signaux dans des essais conduits en Chine (QUEST pour Qiliqiangxin, HR 0,78 ; revue sur Qishen Yiqi dans Chua 2025, mortalité OR 0,43, produit sur prescription d’un seul fabricant), la revue parapluie Chua 2025 souligne la qualité souvent critiquement faible des études et la sous-déclaration des effets indésirables : hyperkaliémie rapportée avec Pueraria (risque cumulé sous ARNI/IEC/ARA2/ARM), hypotension avec Qishen Yiqi, présence de ginseng/danshen et d’ingrédients cardioactifs (aconit préparé, Periploca, venin de crapaud) dans certaines formules. Vérifiez systématiquement tout produit avec votre cardiologue et votre pharmacien.',
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
      'Aucun bénéfice prouvé dans l’insuffisance cardiaque ; prudence avec les anticoagulants (cas rares sous warfarine) et signal de toxicité hépatique pour les formes à forte absorption.',
    mechanismOrCaveatFr:
      'L’épice culinaire habituelle ne pose pas de problème particulier, mais les compléments concentrés (souvent associés à la pipérine pour augmenter l’absorption) font l’objet de deux cas rapportés d’interaction avec la warfarine et d’un avertissement du NIH concernant des atteintes hépatiques rares.',
    affectedPillars: ['anticoagulant', 'other'],
    evidenceGrade: 'Données faibles (cas cliniques et alerte NIH)',
    sources: ['NCCIH / NIH', 'Hatfield 2022'],
    articleSlug: 'interactions-complements-aliments-medicaments',
  },

  // =========================================================================
  // À ÉVITER EN AUTOMÉDICATION (avoid)
  // =========================================================================
  {
    id: 'substituts-sel-potassium',
    nameFr: 'Substituts de sel au potassium et comprimés de potassium',
    aliases: ['Sel de régime', 'Sel pauvre en sodium', 'Chlorure de potassium', 'Sel au potassium', 'LoSalt', 'Complément potassium'],
    verdict: 'avoid',
    summaryFr:
      'Peuvent provoquer une hyperkaliémie dangereuse (troubles du rythme cardiaque graves) chez toute personne prenant un ARNI, IEC, ARA2 ou ARM.',
    mechanismOrCaveatFr:
      'Les sels de régime contiennent 10 à 50 % de chlorure de potassium. Les essais Cochrane 2022 en population générale ont exclu les patients à risque et n’incluaient aucun patient insuffisant cardiaque. La notice du sacubitril/valsartan (Entresto) cite explicitement ces substituts comme cause d’hyperkaliémie (dans PARADIGM-HF, 16 % dépassaient déjà 5,5 mmol/L sans supplément). Ne jamais confondre avec un sel potassique prescrit par votre médecin en cas d’hypokaliémie.',
    affectedPillars: ['raas_arni', 'mra'],
    evidenceGrade: 'Notice Entresto ; NICE NG106 (1.9.11) ; Cochrane 2022 (exclusions)',
    sources: ['Notice sacubitril/valsartan (Entresto)', 'Cochrane 2022', 'NICE NG106', 'BHF'],
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
      'L’inhibition des prostaglandines rénales réduit la perfusion des reins (risque majeur d’insuffisance rénale aiguë avec l’association ARNI/IEC/ARA2 + diurétique) et favorise la rétention hydrosodée. Le consensus européen Abdin 2025 (EJHF) confirme un risque dépendant de la dose (notamment diclofénac, indométacine, piroxicam, et célécoxib à forte dose) et cite le paracétamol ou les AINS topiques en gel/crème comme alternatives à discuter avec le médecin ou le pharmacien. Attention aux médicaments combinés contre le rhume contenant de l’ibuprofène. L’aspirine à faible dose prescrite en prévention coronaire n’est pas concernée.',
    affectedPillars: ['raas_arni', 'mra', 'loop_diuretic', 'sglt2i', 'antiplatelet', 'anticoagulant'],
    evidenceGrade: 'ESC 2026 Classe III, niveau B2 ; AHA/ACC/HFSA 2022 Classe 3 (Danger) ; Abdin 2025',
    sources: ['ESC 2026', 'Abdin 2025 (EJHF)', 'AHA/ACC/HFSA 2022', 'Notice Entresto'],
    articleSlug: 'interactions-complements-aliments-medicaments',
  },
  {
    id: 'decongestionnants-pseudoephedrine',
    nameFr: 'Décongestionnants vasoconstricteurs (pseudoéphédrine, médicaments anti-rhume)',
    aliases: ['Pseudoéphédrine', 'Dolirhume', 'Actifed', 'Nurofen Rhume', 'Humex Rhume', 'Vasoconstricteurs nasaux'],
    verdict: 'avoid',
    summaryFr:
      'Les médicaments contre le rhume contenant des vasoconstricteurs (pseudoéphédrine) élèvent la tension artérielle, accélèrent le cœur et peuvent déclencher poussée hypertensive, troubles du rythme ou décompensation.',
    mechanismOrCaveatFr:
      'Ces sympathomimétiques stimulent les récepteurs adrénergiques, s’opposent directement à l’effet des bêtabloquants et augmentent la postcharge cardiaque. En France, les vasoconstricteurs oraux par pseudoéphédrine font l’objet d’alertes sanitaires strictes et sont contre-indiqués en cas de maladie cardiovasculaire grave ou d’hypertension non contrôlée. Privilégiez le lavage nasal au sérum physiologique et demandez conseil à votre pharmacien.',
    affectedPillars: ['beta_blocker', 'raas_arni', 'addon_hf'],
    evidenceGrade: 'Sécurité pharmacologique / contre-indication cardiovasculaire',
    sources: ['AHA 2016/2022', 'Alerte pharmacovigilance vasoconstricteurs'],
    articleSlug: 'interactions-complements-aliments-medicaments',
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
      'Diminue fortement l’efficacité de plusieurs médicaments cardiaques essentiels (anticoagulants, ivabradine, digoxine, statines) et expose à un syndrome sérotoninergique avec certains antidépresseurs.',
    mechanismOrCaveatFr:
      'Puissant inducteur du CYP3A4 et de la glycoprotéine P (variable selon le taux d’hyperforine). Les notices officielles imposent de l’éviter avec l’apixaban (Eliquis) et l’ivabradine (Procoralan) ; le NIH signale aussi une baisse d’efficacité de la warfarine, de la digoxine et de la simvastatine. Ne débutez jamais du millepertuis en cas de baisse de moral sans avis médical.',
    affectedPillars: ['anticoagulant', 'addon_hf', 'lipid_lowering', 'other'],
    evidenceGrade: 'Élevée pour les molécules citées (notices officielles)',
    sources: ['Notices Eliquis et Procoralan', 'NCCIH', 'Nicolussi 2020'],
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
    nameFr: 'Extrait concentré de thé vert (EGCG, gélules « brûle-graisses »)',
    aliases: ['Extrait de thé vert', 'EGCG', 'Catéchines concentrées', 'Brûle-graisses', 'Gélules thé vert'],
    verdict: 'avoid',
    summaryFr:
      'Peut réduire fortement l’absorption de certains médicaments cardiaques (IEC, bêtabloquant, statines) et expose à un risque rare mais imprévisible d’atteinte hépatique grave.',
    mechanismOrCaveatFr:
      'Bloque des transporteurs intestinaux : dans de petites études chez des volontaires sains, diminution de l’exposition au lisinopril (-67 %), au nadolol (-85 % même avec du thé infusé répété), à la rosuvastatine (-19 %) et à l’atorvastatine (-22 à -24 %). L’EFSA signale une toxicité hépatique dès 800 mg/j d’EGCG (plafond réglementaire UE 2022/2340), avec des cas graves rapportés dès 140 mg/j. Peut aussi augmenter la tension (caféine/stimulants associés). Distinct d’une consommation modérée de thé vert ordinaire.',
    affectedPillars: ['raas_arni', 'beta_blocker', 'lipid_lowering'],
    evidenceGrade: 'EFSA 2018 ; Règlement UE 2022/2340 ; études PK (Misaka, Kim)',
    sources: ['EFSA 2018', 'Règlement UE 2022/2340', 'Misaka 2014/2021', 'USP 2020', 'Hoofnagle 2021'],
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
      'Les AVK agissent en bloquant le cycle de la vitamine K. Un apport soudain élevé (complément de vitamine K1/K2, cure de thé vert ou changement alimentaire brutal) diminue l’INR et expose à un risque de caillot (thrombus), tandis qu’un arrêt brutal augmente le risque hémorragique. Il ne faut pas supprimer les légumes verts, mais garder une consommation régulière et éviter tout complément contenant de la vitamine K sans avis médical. (Non applicable aux AOD comme l’apixaban ou le rivaroxaban.)',
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
      'Associé à des cas de surdosage hémorragique grave sous warfarine, fausse certains dosages de digoxine et accélère l’élimination d’autres médicaments en prise régulière.',
    mechanismOrCaveatFr:
      'Inhibe l’agrégation plaquettaire, potentialise la warfarine (3 cas de surdosage majeur rapportés, plus un cas sur valve mécanique) et induit CYP3A4 et P-gp en usage répété. Qualité très aléatoire (39,7 % de non-conformité dans les contrôles chinois). L’essai QUEST concernait une formule hospitalière chinoise à 11 plantes et ne valide jamais le danshen acheté seul.',
    affectedPillars: ['anticoagulant', 'antiplatelet', 'addon_hf'],
    evidenceGrade: 'Cas cliniques graves et études pharmacocinétiques',
    sources: ['Chan 2001', 'Izzat 1998', 'Qiu 2010-2014', 'Dasgupta'],
    articleSlug: 'interactions-complements-aliments-medicaments',
  },
  {
    id: 'ginkgo-biloba',
    nameFr: 'Ginkgo biloba (avec anticoagulants ou antiagrégants)',
    aliases: ['Ginkgo', 'Ginkgo biloba', 'Tanakan', 'Complément mémoire'],
    verdict: 'avoid',
    summaryFr:
      'Risque accru de saignement rapporté avec la warfarine (HR 1,38 en observationnel) et cas d’hémorragies graves ; la monographie européenne demande un arrêt 3 à 4 jours avant toute chirurgie.',
    mechanismOrCaveatFr:
      'Bien que 18 petits essais n’aient pas montré d’effet sur les tests de coagulation en laboratoire, une vaste étude observationnelle américaine a retrouvé davantage de saignements sous warfarine et l’EMA recommande un avis médical en cas d’anticoagulant (prudence particulière avec le dabigatran) ou d’antiagrégant (aspirine, clopidogrel). Aucune donnée disponible avec apixaban, rivaroxaban ou ticagrélor.',
    affectedPillars: ['anticoagulant', 'antiplatelet'],
    evidenceGrade: 'Monographie EMA ; Stoddard 2015 (HR 1,38)',
    sources: ['Monographie EMA Ginkgo', 'Stoddard 2015', 'Kellermann et Kloft 2011', 'NCCIH'],
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
      'Cet avertissement vise uniquement les compléments et extraits concentrés (pas l’ail utilisé normalement en cuisine). Un petit essai d’extrait d’ail vieilli sous warfarine était rassurant, mais les données manquent avec les AOD et la bithérapie antiagrégante : par prudence, éviter sans accord de votre cardiologue.',
    affectedPillars: ['antiplatelet', 'anticoagulant'],
    evidenceGrade: 'Monographie EMA (prudence + arrêt 7 jours avant chirurgie)',
    sources: ['Monographie EMA Ail', 'Macan 2006', 'NCCIH'],
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
      'Dans Khan 2021 (texte intégral, repris par Chua 2025), la vitamine E s’associe à un surrisque d’hospitalisation pour IC (RR 1,21 ; IC 95 % 1,04–1,40 sur 2 grands essais, 17 956 patients) et, au-dessus de 400 UI/j, à un risque accru d’AVC hémorragique sous aspirine ou anticoagulants. Dans An 2022, le bêta-carotène augmente mortalité totale (RR 1,10), décès CV (RR 1,12) et AVC (RR 1,09 ; GRADE faible). L’USPSTF 2022 recommande contre ces deux compléments (Grade D).',
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
      'Dans NORVIT (3 749 patients après infarctus, B6 à 40 mg/j), la triple association B9 + B12 + B6 a tendu vers davantage de récidives coronaires ou AVC (RR 1,22 ; IC 95 % 1,00–1,50 ; p = 0,05) ; dans la néphropathie diabétique, de fortes doses combinées ont accéléré le déclin rénal (ESPEN 2022). L’acide folique au-delà de 1 mg/j peut masquer une carence en vitamine B12, et la vitamine B6 au long cours expose à une neuropathie sensitive (signes dès 100 mg/j ; limite supérieure européenne EFSA 12 mg/j, dépassée par certains produits magnésium-B6). À ne pas confondre avec la correction médicale d’une carence documentée en B12 (sous metformine ou IPP) ou en B1 (sous diurétiques de l’anse).',
    affectedPillars: ['antiplatelet', 'loop_diuretic', 'other'],
    evidenceGrade: 'Cochrane 2017 (qualité élevée, aucun bénéfice IDM/décès) ; NORVIT 2006 ; ESPEN 2022',
    sources: ['Cochrane 2017', 'NORVIT 2006', 'ESPEN 2022', 'AHA/ACC/HFSA 2022'],
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
      'Les recommandations ESC 2026 déconseillent formellement les consommations excessives (Classe I, niveau C dans les conseils d’hygiène de vie) et qualifient les données sur les consommations faibles à modérées de mitigées. Schwingshackl 2026 rappelle que les bénéfices prêtés au vin sont observationnels et que l’OMS considère l’abstinence comme le niveau le plus sûr ; Qiu 2025 confirme le poids défavorable de l’alcool. La notice de la dapagliflozine cite l’abus d’alcool parmi les déclencheurs d’acidocétose. Parlez ouvertement de votre consommation avec votre cardiologue.',
    affectedPillars: ['sglt2i', 'anticoagulant', 'antiplatelet', 'beta_blocker'],
    evidenceGrade: 'ESC 2026 (Classe I, niveau C) ; notice dapagliflozine',
    sources: ['ESC 2026', 'Schwingshackl 2026', 'Qiu 2025', 'Notice dapagliflozine (Forxiga)'],
    articleSlug: 'alimentation-cardioprotectrice',
  },
];
