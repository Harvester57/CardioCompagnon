import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'essais-cliniques-cles',
  sourceWikiPath: 'wiki/references/key-trials.md',
  titleFr: 'Les grands essais cliniques de référence',
  category: 'references',
  readingTier: 'reference',
  asOf: '2026-11-27',
  confidence: 'high',
  volatility: 'warm',
  tags: [
    'essais-cliniques',
    'preuves',
    'stich',
    'revived-bcis2',
    'madit-ii',
    'scd-heft',
    'profid',
    'paradigm-hf',
    'dapa-hf',
    'tred-hf',
    'vest',
    'praetorian',
    'hf-action',
    'coapt',
    'cto',
    'statines',
    'colchicine',
    'stenose-aortique',
    'anticoagulation',
    'quest',
    'stade-b',
    'solvd',
    'serve-hf',
    'apnee-du-sommeil',
    'sprint',
    'irm-cardiaque',
    'obesite',
    'glp-1',
    'incretines',
    'cellules-souches',
    'vitamines-b',
    'musculation',
    'vanish2',
    'ablation-tv',
    'antiarythmiques',
    'peri-operatoire',
    'jours-de-maladie',
    'goutte',
    'anemie',
    'bpco',
    'soins-palliatifs',
    'fer-iv',
    'coq10',
    'omega-3',
    'dapa-mi',
    'vaccinations',
    'diuretiques',
    'antiplaquettaires',
    'lvad',
    'iec',
    'arni',
    'betabloquants',
    'arm',
    'isglt2',
    'merit-hf',
    'cibis-ii',
    'copernicus',
    'rales',
    'ephesus',
    'emphasis-hf',
    'emperor-reduced',
    'danish',
    'parr-2',
    'maggic',
    'remodelage-inverse',
  ],
  aliases: [
    'Noms des essais cliniques',
    'Tableau des preuves',
    'Études de référence cardiologie',
    'Grands essais insuffisance cardiaque',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Les courriers de cardiologie citent souvent des noms d'études scientifiques sans toujours les expliquer. Ce répertoire résume les grands essais cliniques qui fondent la prise en charge actuelle de la cardiomyopathie ischémique, en précisant ce qui a été testé et si les résultats s'appliquent à votre situation. Consultez-le pour décrypter un compte rendu ou préparer vos questions avec votre cardiologue.",
  sections: [
    {
      headingFr: 'Comment lire ces tableaux',
      bodyMarkdownFr:
        "Les noms d'essais cliniques reviennent fréquemment dans les courriers spécialisés et les recommandations. Chaque tableau indique la population étudiée, la comparaison testée, le résultat principal (avec les rapports de risque **HR**, risques relatifs **RR** ou odds ratios **OR** et la mention *ns* lorsque le résultat n'est pas statistiquement significatif) ainsi que son degré d'applicabilité à la **cardiomyopathie ischémique avec FEVG autour de 35 %**. « Direct » signifie que l'essai a inclus précisément cette population ; « Indirect » signale une population mixte ou différente. Ces synthèses informent vos échanges avec votre cardiologue mais ne constituent pas une prescription individuelle.",
    },
    {
      headingFr: 'Revascularisation (pontage aorto-coronarien et stents)',
      bodyMarkdownFr: `| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **CHIP-BCIS3** (NEJM 2026 ; dépêche et registre NCT05003817 consultés) | 300 patients britanniques, FEVG ≤ 35 % (ou ≤ 45 % avec IM sévère) et maladie coronaire étendue (FEVG médiane 27 %, 62,7 % de présentations aiguës) ; assistance par pompe Impella pendant l'angioplastie vs angioplastie standard | Neutre : win ratio 0,85 (0,63–1,15 ; p = 0,30). Décès toutes causes : 47 vs 33 patients, HR 1,54 (0,99–2,41) (résumé NEJM) ; décès cardiovasculaires 26,7 % vs 14,5 % (HR 1,91 ; 1,11–3,30 ; dépêches ; critère secondaire) | Partiel (majoritairement présentations aiguës) ; plaide contre l'assistance systématique par pompe |
| **STICH3** (en cours : STICH3C NCT05427370 ; STICH3-BCIS4) | FEVG ≤ 40 %, atteinte pluritronculaire, éligible aux deux gestes ; pontage (CABG) vs stents (PCI) | **Pas encore de résultats.** STICH3C en recrutement, 754 patients estimés, fin principale estimée avril 2029 (registre, 25 nov. 2026) | Direct à sa publication |
| **STICH / STICHES** (NEJM 2016) | 1 212 patients, maladie coronaire accessible au pontage, FEVG ≤ 35 % ; pontage + médicaments vs médicaments seuls ; ~10 ans | Mortalité toutes causes : 58,9 % vs 66,1 % (HR 0,84). Le pontage a amélioré la survie à long terme | Direct (époque antérieure) |
| **STICH hypothèse 2** (NEJM 2009 ; résumé consulté) | 1 000 patients avec cardiomyopathie ischémique et paroi antérieure akinétique ou dyskinétique ; pontage seul vs pontage + reconstruction ventriculaire chirurgicale (exérèse/exclusion de cicatrice) | Ventricule plus petit (VTSi -19 % vs -6 %) mais décès ou hospitalisation cardiaque 58 % vs 59 % (HR 0,99) sur ~4 ans | Direct sur la population ; question chirurgicale uniquement |
| **REVIVED-BCIS2** (NEJM 2022) | 700 patients, FEVG ≤ 35 %, atteinte coronaire étendue, myocarde viable ; angioplastie (stents) + traitement optimal vs traitement seul ; médiane 41 mois | Décès ou hospitalisation pour IC : 37,2 % vs 38,0 % (HR 0,99) ; pas de gain de FEVG. Complications rares (hémorragies majeures ~2 %) | Direct |
| Sous-étude REVIVED ETT vs IRM (2025) | 373 patients de REVIVED ayant eu les deux examens | FEVG moyenne 31,4 % (ETT) vs 25,8 % (IRM) ; un tiers des patients < 35 % à l'IRM étaient ≥ 35 % à l'ETT | Direct |
| Analyse normalisation FEVG STICH (2021) | Patients de STICH avec ETT de suivi | FEVG > 50 % chez ~2 % à 4 mois, ~5,5 % à 2 ans ; normalisation à 2 ans associée à une mortalité plus faible (HR 0,41) | Direct |
| Analyse arythmies REVIVED (Circulation 2023) | Les 700 patients de REVIVED | Décès ou mort subite avortée : 41,6 % (stents) vs 40,2 % (HR 1,03). Les stents n'ont pas réduit les arythmies graves | Direct |
| Données poolées REVIVED + STICHES (2025) | 1 912 patients des deux essais | Sous traitement médical seul, décès ou hospitalisation IC bien plus bas dans l'essai récent (HR ajusté 0,60). Comparaisons pontage vs stent uniquement exploratoires | Direct (observationnel entre époques) |
| STICH premier rapport (NEJM 2011) | Mêmes 1 212 patients, médiane 56 mois | Mortalité : 36 % vs 41 % (pas encore significatif). Mortalité à 30 jours : 4 % après chirurgie vs 1 % (HR 3,12) ; 17 % de passage du bras médical vers la chirurgie | Direct (époque antérieure) |
| STICH par âge (Petrie 2016) | Analyse par tranche d'âge dans STICH | Bénéfice sur la mortalité cardiovasculaire similaire à tous les âges ; FA post-opératoire, aggravation rénale et recours aux inotropes augmentaient avec l'âge | Direct (époque antérieure) |

### Tests de viabilité myocardique : l'imagerie désigne-t-elle qui bénéficie d'une revascularisation ?

| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| STICH viabilité (2011, 2019) et angor (2015) | 601 patients avec test de viabilité (TEMP/écho dobutamine, moitié non randomisée de STICH) ; ensemble des patients selon l'angor | La viabilité n'a pas modifié l'effet du pontage (interaction p = 0,53 à 5 ans, 0,34 à 10 ans) ; myocarde viable lié à une mortalité moindre avant ajustement uniquement (HR non ajusté 0,64 ; 0,48–0,86 ; p ajusté = 0,21). L'angor n'a pas prédit le bénéfice non plus | Partiel (époque antérieure) |
| STICH viabilité selon la taille du VG (Bonow 2015, JACC CV Imaging) | 601 patients de STICH avec viabilité, FEVG ≤ 35 %, VTSi médian 84 mL/m² ; pontage vs médicaments | Aucune interaction VTSi × viabilité × traitement sur la mortalité (p = 0,491) ; pontage HR 0,85 (petit VG) vs 0,87 (grand VG) chez les patients viables | Population directe, époque antérieure (2002–2007, peu de DAI, sans ARNI/iSGLT2) ; sous-groupe non randomisé |
| STICH ischémie inductible (JACC 2013) | 399 patients de STICH avec test d'effort/stress (64 % ischémiques) | Ischémie non liée à la mortalité (HR 1,08 ; 0,77–1,50) et sans influence sur l'effet du pontage (interaction p = 0,73–0,89) | Partiel (époque antérieure) |
| **PARR-2** (JACC 2007 ; 5 ans Circ CV Imaging 2016) | 430 patients avec FEVG < 35 % et coronaropathie envisagés pour revascularisation ou greffe ; prise en charge guidée par TEP-FDG vs soins usuels ; mené 2000–2006 (enregistrement rétrospectif oct. 2006) | Formellement neutre : décès cardiaque, IDM ou hospitalisation cardiaque à 1 an 30 % vs 36 % (HR 0,78 ; 0,58–1,1 ; RR résumé 0,82) ; à 5 ans HR 0,82 (0,62–1,07). Bénéfice uniquement en analyses post hoc non randomisées selon le suivi de la recommandation TEP (HR 0,62 à 1 an ; 0,73 à 5 ans) ; ~25 % n'ont pas suivi l'avis TEP | Partiel (époque antérieure ; résumé consulté) |
| Ottawa-FIVE (sous-étude PARR-2, J Nucl Med 2010) | 111 patients de PARR-2 dans un centre expert disposant d'une TEP-FDG sur place | Événements 19 % vs 41 % (HR ajusté 0,34 ; 0,16–0,72) contre HR 0,97 dans les autres centres ; post hoc, générateur d'hypothèses | Partiel (monocentrique, post hoc) |
| HEART (Cleland 2011, EJHF) | 138 patients inclus sur 800 prévus ; IC, FEVG < 35 %, myocarde viable requis ; coronarographie en vue de revascularisation vs stratégie conservatrice | Décès 38 % vs 37 % à 59 mois (médiane) ; arrêté précocement | Population directe, sous-dimensionné (résumé seul) |
| Analyse complétude REVIVED-BCIS2 (JACC 2024) | 670 / 619 patients de REVIVED ; complétude anatomique et guidée par la viabilité de l'angioplastie | Angioplastie complète non supérieure aux médicaments seuls (HR ajusté 0,90 anatomique ; 0,95 guidé par viabilité) ; aucun lien avec la récupération de FEVG ; complétude non randomisée | Direct à partiel (stents uniquement) |
| Liga 2023 (JAHA), revue d'ECR uniquement | HEART, PARR-2, STICH, REVIVED-BCIS2 (2 480 patients) | Aucune interaction viabilité/ischémie × traitement ; soins conformes au test de viabilité vs non conformes : décès OR 0,92 (0,75–1,14) | Direct ; comparaison d'observance non randomisée |
| Méta-analyse Allman (JACC 2002) | 24 études observationnelles de viabilité, 3 088 patients, FEVG moyenne 32 % | Avec viabilité : mortalité annuelle 3,2 % si revascularisé vs 16 % sous médicaments ; sans viabilité, pas de différence significative (7,7 % vs 6,2 %). Non randomisé (choix du médecin) ; non confirmé par les ECR ultérieurs | Partiel à indirect (observationnel, années 1990 ; résumé seul) |
| Ling 2013 (Circ CV Imaging), cohorte TEP | 648 patients consécutifs, FEVG moyenne 31 %, TEP Rb-82/FDG ; revascularisation précoce chez 199 | Interaction hibernation × revascularisation sur la mortalité, bénéfice surtout si hibernation > 10 % | Indirect (observationnel ; suivi débutant à J92, excluant les décès précoces ; résumé seul) |
| Gerber 2012 (JACC), cohorte IRM | 144 patients, FEVG 24 %, IRM avec rehaussement tardif ; 86 revascularisés vs 58 sous médicaments | Survie à 3 ans moins bonne si viable + médical seul (48 % vs 77 %) ; interaction p = 0,004 ; HR apparié 2,5 | Indirect (observationnel, petit effectif ; résumé seul) |
| Arjomandi Rad 2024 (Clin Cardiol), méta-analyse | 17 études surtout observationnelles, 2 317 patients pontés | Mortalité post-pontage plus basse en présence de viabilité (OR 0,42 ; 0,29–0,61) | Indirect (pronostique uniquement ; sans bras médical témoin) |

*Note :* l'analyse de viabilité de REVIVED-BCIS2 (JAMA Cardiol 2023) figure dans la section « Valves, fibrillation atriale et cicatrice IRM » ci-dessous.`,
    },
    {
      headingFr: 'Défibrillateurs (DAI), gilet portable et mort subite',
      bodyMarkdownFr: `| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **MADIT-I** (NEJM 1996) | 196 patients post-IDM, FEVG ≤ 35 %, TVNS + TV inductible à l'EEP ; 100 % ischémiques ; bêtabloquant 23 % ; DAI vs traitement conventionnel, 27 mois | Décès 15 vs 39 ; HR 0,46 (0,26–0,82). Résumé seul | Partiel (sous-groupe très sélectionné inductible ; traitements anciens) |
| **MADIT-II** (NEJM 2002) | 1 232 patients, IDM > 1 mois, FEVG ≤ 30 % (moyenne 23 %), 100 % ischémiques, NYHA I 37 % / II 35 % / III 24 % ; bêtabloquant 70 %, IEC 70 % ; DAI vs conventionnel (3:2), 20 mois | Décès 14,2 % vs 19,8 % ; HR 0,69 (0,51–0,93). Arrêté tôt par le comité de surveillance ; financé par l'industrie. Résumé seul | Partiel (cause concordante ; aucun patient à FEVG 31–35 % ; pré-ARNI/iSGLT2) |
| MADIT-II suivi 8 ans (Circulation 2010) | Mêmes 1 232 patients ; suivi médian 7,6 ans | Mortalité à 8 ans 49 % vs 62 % ; HR 0,66 (0,56–0,78) ; années 5–8 HR 0,74. Résumé seul | Partiel |
| **SCD-HeFT** (NEJM 2005) | 2 521 patients, NYHA II–III, FEVG ≤ 35 % (médiane 25 %), 52 % ischémiques ; bêtabloquant 69 % ; placebo vs amiodarone vs DAI choc seul, 45,5 mois | DAI vs **placebo** : 22 % vs 29 %, HR 0,77 (IC 97,5 % 0,62–0,96) ; amiodarone HR 1,06 (sans bénéfice). Pas de différence selon la cause à ce stade. Résumé seul | Partiel (moitié ischémique ; traitements anciens) |
| SCD-HeFT suivi 11 ans (JACC 2020) | Mêmes patients ; médiane 11 ans ; ~57 % de croisement vers DAI | Global HR 0,87 (0,76–0,98), atténué après 6 ans ; **ischémique HR 0,81 (0,69–0,95) vs non ischémique 0,97 (0,79–1,20)** ; NYHA II 0,76 vs III 1,06. Pas de test d'interaction étiologique dans le résumé (générateur d'hypothèses) | Partiel (sous-groupe ischémique) |
| DINAMIT (NEJM 2004), IRIS (NEJM 2009) | 674 (6–40 j post-IDM, FEVG ≤ 35 % + marqueurs autonomes) et 898 (5–31 j, FEVG ≤ 40 % + FC ≥ 90 ou TVNS) ; DAI vs aucun | Mortalité HR 1,08 et 1,04 (poolé 1,05). Mort arythmique/subite réduite (HR 0,42 ; 0,55) mais décès cardiaque non arythmique augmenté (HR 1,75 ; 1,92). Explique le délai minimal ≥ 40 jours après infarctus. Résumés seuls | Direct (pour le délai ≥ 40 jours) ; indirect en cardiomyopathie chronique |
| **DANISH** (NEJM 2016) | 1 116 ICFER non ischémiques, FEVG ≤ 35 %, NT-proBNP élevé ; 0 % ischémiques ; CRT 58 % ; bêtabloquant 92 % ; DAI vs soins usuels, 67,6 mois | Décès 21,6 % vs 23,4 %, HR 0,87 (0,68–1,12, ns) ; mort subite 4,3 % vs 8,2 %, HR 0,50 (0,31–0,82). Résumé seul | Extrapolé (aucun ischémique inclus ; point de contraste uniquement) |
| DANISH 9,5 ans (Circulation 2022) et 13,2 ans (JACC 2025) | Mêmes patients | 9,5 ans : HR 0,89 (0,74–1,08), ≤ 70 ans HR 0,78 (0,61–0,99). 13,2 ans : HR 0,96 (0,82–1,13) ; mort subite CV HR 0,54 (0,36–0,80), uniquement ≤ 70 ans (0,38) et non > 70 ans (1,27) ; interaction âge p = 0,89 mortalité totale, p = 0,01 mort subite | Extrapolé |
| Cohorte DAI SwedeHF (Schrage, Circulation 2019) | 1 305 paires appariées par propension sur 16 702 ICFER (observationnel) | Mortalité à 1 an HR 0,73 (0,60–0,90), à 5 ans HR 0,88 ; ischémique HR 0,78 (0,63–0,98), non ischémique 0,50 ; interaction p = 0,17 | Partiel (observationnel ; pré-iSGLT2) |
| Méta-analyse Shun-Shin (EHJ 2017) | 11 essais de DAI, 8 567 patients | Cause ischémique, DAI en procédure dédiée : mortalité HR 0,76 | Direct |
| **PROFID** analyse poolée (EHJ 2024) | 140 204 patients post-infarctus (observationnel) | Mort subite à 3 ans : 3,41 % (FEVG ≤ 35 %) vs 0,87 % (> 35 %) ; la FEVG prédit mal le risque individuel | Direct, mais non randomisé sur le DAI |
| MADIT-CRT | 1 820 patients, NYHA I–II | Le CRT-D a réduit décès ou événements IC de 34 % | Indirect |
| Analyse poolée Shen (NEJM 2017) | 40 195 patients ICFER sans DAI dans 12 essais, 62 % ischémiques | Mort subite annuelle passée de 6,5 à 3,3 pour 100 patients entre RALES et PARADIGM-HF | Partiellement direct (observationnel) |
| EU-CERT-ICD (EHJ 2020) | 2 247 patients européens, 65 % ischémiques, FEVG ≤ 35 % ; DAI vs sans DAI (observationnel) | Mortalité toutes causes -27 % avec DAI (HR 0,73) ; sous-groupe ischémique HR 0,79 (ns) | Partiellement direct (sans iSGLT2) |
| CMR GUIDE (JAMA 2026) | 353 patients, FEVG **36–50 %** avec cicatrice IRM ; DAI vs moniteur implantable | Critère principal : 7,8 % vs 9,2 % (ns) ; mort subite 1,7 % vs 5,8 % | Indirect (FEVG plus élevée) |
| **PROFID-EHRA** (en cours) | Post-infarctus, FEVG ≤ 35 %, traitement optimal ; DAI vs absence de DAI ; cible 3 595 patients | **Pas encore de résultats.** Fin estimée : novembre 2027 | Direct à sa publication |
| DAPA-HF analyse arythmies (Curtain, EHJ 2021) | 4 744 ICFER, ~56 % ischémiques, ~26 % DAI ; dapagliflozine vs placebo (post hoc) | Arythmie ventriculaire grave, arrêt cardiaque ou mort subite 5,9 % vs 7,4 %, HR 0,79 (0,63–0,99) ; ischémique HR 0,76 (0,57–1,00) ; interaction p = 0,60. Non adjudiqué | Partiel (effet médicamenteux, pas un essai de DAI) |
| PARADIGM-HF analyse DAI (Rohde, JACC HF 2020) et mode de décès (Desai, EHJ 2015) | 8 399 patients de PARADIGM-HF (85 % éligibles au DAI, 15 % implantés) ; ARNI vs énalapril (résumés seuls) | DAI associé à ~56 % de mort subite en moins chez les éligibles ischémiques (p < 0,001) et non ischémiques ; ARNI réduisait la mort subite chez les porteurs de DAI (HR 0,49) et les non-porteurs éligibles (HR 0,81). Mode de décès : mort subite HR 0,80 (0,68–0,94), défaillance de pompe HR 0,79 (0,64–0,98) | Partiel (~60 % ischémiques, pré-iSGLT2 ; DAI non randomisé) |
| EMPEROR-Reduced analyse DAI (Aktas, JACC HF 2026 ; résumé + congrès HRS 2022) | 837 porteurs de DAI vs 837 non-porteurs appariés dans EMPEROR-Reduced | Mort subite HR 0,59 (0,26–1,3) sous empagliflozine, 0,31 (0,13–0,74) sous placebo ; congrès 2022 (bras empagliflozine) : mortalité totale 8,5 vs 12,7/100 patients-années, HR 0,74 (0,51–1,07, ns) | Partiel (iSGLT2 ; ARNI minoritaire ; DAI non randomisé ; provisoire) |
| PROVE-HF éligibilité DAI (Felker, Circulation 2021 ; texte intégral) | 661 ICFER avec FEVG ≤ 35 % débutant sacubitril/valsartan, bras unique | FEVG > 35 % chez 32 % à 6 mois et 62 % à 12 mois ; 5 morts subites en un an | Partiel (cause non rapportée ; pas de témoin) |
| DISCOVER-ARNI (Pastore, EHJ Open 2022 ; résumé) | 113 patients éligibles au DAI non implantés débutant ARNI, 13 centres italiens | 60 % ne remplissaient plus les critères de DAI à 6 mois ; un GLS altéré prédisait la persistance | Indirect (petit registre, critère intermédiaire) |
| Bilchick SHFM/SPRM (JACC 2017 ; texte intégral) | 87 914 porteurs de DAI (NCDR) vs 10 932 témoins historiques sans DAI, FEVG ≤ 35 % | DAI HR 0,75 au total ; quart à plus faible bénéfice attendu HR 0,92 (ns), mortalité à 5 ans 16,7 % vs 18,0 % | Partiel (72 % ischémiques ; pré-ARNI/iSGLT2 ; biais de confusion) |
| Registre US egnite (Mignone, Heart Rhythm O2 2024 ; texte intégral) | 43 591 ICFER FEVG ≤ 35 % sans dispositif préalable, 2016–2023 | 4 piliers chez 8,8 % (17,2 % à 24 mois) ; 45,1 % des non-implantés avaient FEVG > 35 % à 24 mois ; survie brute à 2 ans sous 4 piliers 82,3 % (sans DAI) vs 83,7 % (avec DAI) | Indirect (non causal) |
| Méta-analyse en réseau iSGLT2 et arythmies (Suresh, J Clin Med 2025 ; texte intégral) | 11 ECR d'IC, 23 701 patients | Mort subite RR 0,68 (0,49–0,93) ; arythmies ventriculaires RR 1,02 | Partiel (critère secondaire non adjudiqué) |
| VEST (NEJM 2018) | 2 348 patients randomisés (2 302 analysés) quelques jours après infarctus, FEVG ≤ 35 % (moyenne 28 %) ; gilet portable (LifeVest) 90 jours vs absence | Mortalité arythmique : 1,6 % vs 2,4 % (RR 0,67, p = 0,18, ns ; certitude GRADE faible) ; mortalité toutes causes : 3,1 % vs 4,9 % (critère secondaire non corrigé, probablement dû au hasard). Port moyen 14 h/jour | Direct, post-IDM précoce uniquement |
| VEST per-protocol (JCE 2020) | Même essai, limité au temps de port effectif du gilet | Mortalité HR 0,25 (0,13–0,48), mortalité arythmique HR 0,38 (0,17–0,86) ; mais décès non subits HR 0,09 évoquant un biais d'observance. Part de porteurs quotidiens passée de 81 % à 41 % au 90e jour | Générateur d'hypothèses (post hoc, risque élevé de biais) |
| Revue WCD Goetz (IJC Heart Vasc 2023) | Évaluation autrichienne (HTA) : VEST plus 11 registres ou séries de gilet (5 345 patients, 20–82 % ischémiques) | Registres : port de 20–23,5 h/jour, 1–4,8 % de chocs appropriés et 0–2 % d'inappropriés ; aucun groupe témoin ; certitude GRADE très faible à faible ; bénéfice non démontré | Indirect (absence de groupe témoin) |
| WEARIT-II Europe (2020) | 781 porteurs de gilet : nouvelle cardiomyopathie, post-IDM, post-PCI/pontage | Chocs appropriés 1,3 %, inappropriés 0,3 % ; FEVG de 26,9 % à 36,3 % ; 61 % n'ont pas eu besoin de DAI | Partiellement direct (sans groupe témoin) |
| HF-OPT (EHJ 2024) | 1 300 porteurs de gilet avec ICFER nouvellement diagnostiquée | FEVG > 35 % chez 46 % à 90 jours, 68 % à 180 jours, 77 % à 360 jours (similaire ischémique / non ischémique) ; TV/FV 1,8 %, presque toutes dans les 90 premiers jours | Partiellement direct (sans témoin ; pré-iSGLT2) |
| PRAETORIAN (NEJM 2020) | 849 patients, ~70 % ischémiques ; S-DAI sous-cutané vs DAI transveineux | Complications ou chocs inappropriés : 15,1 % vs 15,7 % (non inférieur) ; moins de complications de sonde | Majoritairement direct |`,
    },
    {
      headingFr: 'Médicaments de fond et traitements additionnels',
      bodyMarkdownFr: `| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **H-HeFT** (DANHEART, Eur Heart J 2026 ; texte intégral consulté) | 592 patients danois avec ICFER (FEVG médiane 35 %, 52–56 % ischémiques, ~41 % sous iSGLT2) ; hydralazine + dinitrate d'isosorbide vs placebo, 3,7 ans | Neutre : HR 0,90 (0,67–1,21) sur le critère composite ; décès 19,4 % vs 24,2 % (HR 0,72 ; 0,51–1,02, ns) ; plus de la moitié ont arrêté le traitement, seulement 24 % ont atteint la dose cible (hypotension, étourdissements, céphalées) | Direct (population concordante ; âge médian 72 ans, 18 % de femmes) |
| **Met-HeFT** (DANHEART, ESC 2026 ; communiqué de presse consulté) | 940 patients avec ICFER et diabète, prédiabète ou risque diabétique ; metformine vs placebo | Neutre : HR 1,10 (0,84–1,42), p = 0,48 | Partiel |
| Modélisation Vaduganathan (Lancet 2020) | Combinaison entre essais de PARADIGM-HF, DAPA-HF et EMPHASIS-HF (bras placebo d'EMPHASIS-HF en référence ; chaque essai figure dans son tableau par pilier ci-dessous) | Quadrithérapie vs bithérapie : HR 0,38 pour décès CV ou hospitalisation IC ; 1,4 à 6,3 années de vie gagnées selon l'âge | Indirect, modélisé |
| STRONG-HF (Lancet 2022) | 1 078 patients à la sortie d'une IC aiguë ; FEVG moyenne 36 % (68 % ≤ 40 %), 48 % ischémiques ; 65 % inclus en Russie | Bêtabloquant, bloqueur du SRAA et ARM à pleine dose en 2 semaines (sans iSGLT2), visites à S1/S2/S3/S6 : décès ou réhospitalisation IC à 6 mois 15,2 % vs 23,3 %, porté par les réhospitalisations IC (9,5 % vs 17,1 %) ; mortalité non significativement réduite (8,5 % vs 10,0 %, p = 0,42) | Partiellement direct (après hospitalisation ; en ouvert, arrêté précocement) |
| VICTORIA (NEJM 2020) | 5 050 patients après aggravation récente, FEVG < 45 % ; vériciguat (*Verquvo*) vs placebo | Décès CV ou hospitalisation IC : 35,5 % vs 38,5 % (HR 0,90) ; décès CV non réduit ; pas de bénéfice à NT-proBNP très élevé | Partiellement direct (post-aggravation) |
| VICTOR (Lancet 2025) | 6 105 patients ambulatoires stables, FEVG ≤ 40 %, traitement moderne ; vériciguat vs placebo | Critère principal non réduit (HR 0,93, ns) ; décès CV HR 0,83 et mortalité totale HR 0,84 en critères secondaires nominaux. Décès CV si coronaropathie HR 0,85 (0,70–1,03), sans coronaropathie 0,79 | Partiellement direct |
| VICTORIA + VICTOR poolé (Lancet 2025) | 11 155 patients (données individuelles), FEVG moyenne 30 %, 64 % coronariens | Décès CV ou hospitalisation IC HR 0,91 (NNT 37/an) ; décès CV HR 0,89, mortalité totale HR 0,90 ; pas d'interaction selon l'essai ; effet plus net pour NT-proBNP ≤ 6 000 pg/mL (HR 0,86). Mené par le promoteur, valeurs p descriptives | Complémentaire uniquement (poolé) |
| VICTOR selon le traitement de fond (EJHF 2026) | 6 105 patients de VICTOR (64,6 % coronariens) | Effet neutre du vériciguat inchangé selon la présence ou l'intensité des traitements de fond (interaction intensité p = 0,717) | Partiellement direct (exploratoire) |
| SHIFT (Lancet 2010) | 6 558 patients (6 505 analysés), FEVG ≤ 35 %, rythme sinusal, FC ≥ 70 bpm, hospitalisation IC dans l'année ; ivabradine (*Procoralan*) vs placebo | Décès CV ou hospitalisation IC HR 0,82, porté par les hospitalisations ; décès CV (HR 0,91) et mortalité totale (HR 0,90) non significativement réduits. Bénéfice uniquement si FC ≥ 77 bpm (HR 0,75 vs 0,93 ; interaction p = 0,029) ; non significatif à ≥ 50 % de la dose cible de bêtabloquant (HR 0,90). Sous-groupe ischémique (68 %) : HR 0,87 vs 0,72 non ischémique (interaction p = 0,059) | Partiellement direct (sous-groupe ischémique fourni) |
| BEAUTIFUL, SIGNIFY | Coronaropathie sans IC (SIGNIFY) ou avec FEVG < 40 % (BEAUTIFUL) ; ivabradine | Aucun bénéfice pronostique ; léger surrisque dans l'angor symptomatique dans SIGNIFY | Indirect (explique l'absence d'effet pronostique dans l'angor) |
| DIG (NEJM 1997) | 6 800 patients, FEVG ≤ 45 %, rythme sinusal ; digoxine vs placebo (pré-bêtabloquants) | Mortalité inchangée (34,8 % vs 35,1 %) ; moins d'hospitalisations IC (RR 0,72). Digoxinémie basse (0,5–0,9 ng/mL) liée à une mortalité plus faible (post hoc). Décès ou hospitalisation IC selon la cause : RR 0,79 ischémique (~70 %) vs 0,67 non ischémique (interaction p = 0,06) | Partiellement direct (sous-groupe ischémique fourni) |
| **DIGIT-HF** (NEJM 2025) | 1 240 patients (1 212 analysés), FEVG ≤ 40 % NYHA III–IV ou ≤ 30 % NYHA II, traitement moderne, 27 % FA, ~52 % ischémiques ; digitoxine vs placebo | Décès ou première hospitalisation IC : 39,5 % vs 44,1 % (HR 0,82) ; aucun des deux composants isolé significatif. Sous-groupe non ischémique HR 0,70 ; pas de chiffre ischémique publié. Post hoc : décès HR 0,55 si FA vs 1,01 sans FA (interaction p = 0,01 ; interaction sur le critère principal p = 0,40) | Direct |
| DECISION (2026, communiqué) | 1 001 patients néerlandais, FEVG < 50 % ; digoxine faible dose | Critère principal non significatif (RR 0,81). Poolé avec DIG et DIGIT-HF (9 013 patients) : HR 0,85, surtout moins d'événements IC | Partiellement direct |
| FINEARTS-HF (NEJM 2024) | 6 001 patients, **FEVG ≥ 40 %** (moyenne ~52 %) ; les patients dont la FEVG s'était améliorée de < 40 % à ≥ 40 % pouvaient être inclus ; finérénone (*Kerendia*) vs placebo | Aggravations IC + décès CV réduits de 16 % (RR 0,84) ; décès CV non réduit ; même effet relatif dans le sous-groupe post hoc « IC sévère » (RR 0,85, ns isolément) | **Non applicable** sous 40 % de FEVG ; plus proche si la FEVG remonte à ≥ 40 % |
| FINE-HEART poolé (Nat Med 2024) | 18 991 patients de FIDELIO-DKD, FIGARO-DKD (excluant tous deux l'ICFER symptomatique) et FINEARTS-HF (FEVG ≥ 40 %) ; 63 % avaient un diabète avec maladie rénale sans IC | Critère principal (décès CV) non atteint : HR 0,89 (0,78–1,01). Hospitalisation IC HR 0,83 ; mortalité totale HR 0,91 (secondaire, sans correction de multiplicité) ; bénéfice rénal issu uniquement des essais MRC (rein dans FINEARTS-HF : HR 1,30, ns) | **Non applicable** : aucun patient avec ICFER symptomatique ; uniquement diabète + MRC ou FEVG ≥ 40 % |
| FINALITY-HF (en cours) | ~2 600 patients ICFER ne pouvant prendre spironolactone/éplérénone ; finérénone | **Pas encore de résultats** ; fin estimée janvier 2028 | Direct à sa publication |
| ARTS-HF (EHJ 2016) | Phase 2b, 1 066 patients hospitalisés pour ICFER en aggravation (FEVG moyenne 29 %) avec diabète de type 2 et/ou MRC ; 64 % avec coronaropathie associée ; cinq doses de finérénone vs éplérénone pendant 90 jours | Réponse NT-proBNP similaire à l'éplérénone ; hyperkaliémie similaire (4,3 % au total) ; composite exploratoire plus bas sous 10→20 mg (HR 0,56, nominal) | Population la plus proche, mais étude courte sur marqueur biologique ; aucune preuve sur critères cliniques |
| DIAMOND (EHJ 2022) | ICFER (FEVG moyenne 33,5 %, ~71 % ischémiques) avec hyperkaliémie sous bloqueurs du SRAA ; phase ouverte sous patiromer (*Veltassa*), puis 878 patients ayant atteint 50 mg d'ARM (84,6 % des 1 038 ayant terminé le run-in) randomisés pour poursuivre le patiromer ou passer au placebo | Kaliémie -0,10 mmol/L vs placebo ; moins de kaliémies > 5,5 mmol/L (HR 0,63) et de baisses d'ARM (HR 0,62). Critère principal modifié en cours d'essai (de décès CV/hospitalisation vers la kaliémie) ; décès 22 vs 16 (ns) | Direct pour maintenir un ARM ; pas de preuve sur événements cliniques |
| Registre TITRATE-HF (EJHF 2025) | 3 367 patients néerlandais avec ICFER (FEVG ≤ 40 %), 2022–2024, 44 % ischémiques | Nouveaux patients sous les 4 piliers : 69,5 % à 6 mois, mais seulement 1–2 % aux doses cibles des quatre. FEVG passée de 30 % à 45 % chez les nouveaux patients : +10 points si ischémique vs +15 si non ischémique ; > 40 % chez 48 % vs 66,5 %. Baisse ou arrêt de traitement associé à plus d'événements (HR ajusté 1,54) | Direct pour la mise en œuvre et la récupération de FEVG (observationnel) |
| Registre OPTIPHARM-HF (EJHF 2025) | 1 720 patients suivis en clinique d'ICFER en Italie, 57 % ischémiques | Passage de 46,6 % à 63,8 % sous les 4 piliers après une visite structurée ; doses cibles des quatre chez 2,7 % ; pas de données d'événements | Indirect (observationnel) |
| Registre SwedeHF (EJHF 2022) | 27 430 patients suédois ICFER (FEVG < 40 %), 2000–2018 ; 67 % avec coronaropathie | Prescription en baisse avec l'âge (ARM 54 % avant 70 ans vs 35 % à 80 ans et plus ; ARNI, compté depuis 2016, 25 % vs 7 %) ; doses cibles atteintes chez seulement 44 % (bloqueur SRAA), 36 % (bêtabloquant), 16 % (ARM) des patients traités | Indirect (observationnel) |

### IEC, ARA2 et ARNI (sacubitril/valsartan)

| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| CONSENSUS (NEJM 1987) | 253 patients NYHA IV (FEVG non mesurée ; ~72 % coronariens) ; énalapril vs placebo ; 4 % sous bêtabloquant | Mortalité à 6 mois 26 % vs 44 % (-40 %, p = 0,002), limitée aux décès par IC progressive ; arrêté tôt sans règle formelle. Résumé seul | Indirect (NYHA IV, pas de FEVG, pré-bêtabloquants) |
| SOLVD-Treatment (NEJM 1991) | 2 569 symptomatiques, FEVG ≤ 35 % (moyenne 25 %, ~71 % ischémiques) ; énalapril vs placebo, 41 mois ; bêtabloquant ~7,5 % | Mortalité 35,2 % vs 39,7 % (-16 %, p = 0,0036) ; décès ou hosp IC -26 %. Résumé seul | Partiel (pré-bêtabloquants ; sans détail étiologique) |
| CHARM-Alternative (Lancet 2003) | 2 028 intolérants aux IEC, FEVG ≤ 40 % (moyenne 30 %, ~68 % ischémiques) ; candésartan vs placebo ; 55 % sous bêtabloquant | Décès CV ou hosp IC 33 % vs 40 % (HR 0,77 ; 0,67–0,89) ; HR ajusté 0,70. CHARM-Added (en plus d'un IEC) : HR 0,85. Résumé seul | Partiel (ARA2 en recours ; pré-ARNI/iSGLT2) |
| Val-HeFT (NEJM 2001) | 5 010 patients, FEVG < 40 % avec VG dilaté (~57 % ischémiques) ; valsartan ajouté au traitement usuel (93 % sous IEC) | Mortalité inchangée (RR 1,02) ; décès ou morbidité -13 %, porté par les hosp IC ; signal post hoc défavorable avec IEC + bêtabloquant non répliqué | Partiel (association ARA2 + IEC non pratiquée) |
| AIRE (Lancet 1993) | ~2 006 patients 2–10 j post-IDM avec IC clinique (FEVG non mesurée) ; ramipril vs placebo, 15 mois | Mortalité 17 % vs 23 % (-27 %, IC 95 % 11–40 %) ; maintien à 5 ans (cohorte RU). Résumé seul | Partiel (post-IDM aigu, ère thrombolyse) |
| TRACE (NEJM 1995) | 1 749 patients 3–7 j post-IDM avec indice cinétique ≤ 1,2 (~FEVG ≤ 35 %) ; trandolapril vs placebo, 2–4 ans | Mortalité 34,7 % vs 42,3 % (RR 0,78 ; 0,67–0,91) ; moins d'IC sévères et de morts subites. Résumé seul | Partiel (post-IDM aigu) |
| VALIANT (NEJM 2003) | 14 703 patients post-IDM avec IC et/ou FEVG ≤ 35–40 % ; valsartan vs captopril vs les deux | Valsartan équivalent au captopril sur la mortalité (HR 1,00) ; association sans gain et plus d'effets indésirables. Résumé seul | Partiel (post-IDM aigu) |
| **PARADIGM-HF** (NEJM 2014) | 8 399 NYHA II–IV, FEVG ≤ 35 %, BNP élevé (60 % ischémiques) ; sacubitril/valsartan (*Entresto*) vs énalapril 10 mg × 2/j après phase de sélection ; bêtabloquant 93 %, ARM 52 % | Décès CV ou hosp IC 21,8 % vs 26,5 % (HR 0,80 ; 0,73–0,87) ; mortalité 17,0 % vs 19,8 % (HR 0,84) ; arrêté tôt ; 20 % d'échecs en phase de sélection (plus fréquents si ischémique). Risque résiduel de mort subite 3,3/100 patients-années | Partiel (population la plus proche ; 60 % ischémique, pré-iSGLT2) |
| PARADIGM-HF selon la cause (JACC HF 2019, post hoc) | 8 399 patients, 60 % ischémiques vs 40 % non ischémiques | Bénéfice de l'ARNI identique quelle que soit la cause (interaction p = 0,11 critère principal, 0,55 décès CV) ; taux bruts plus élevés si ischémique, similaires après ajustement | Direct (sous-groupe ischémique, post hoc) |
| PIONEER-HF (NEJM 2019) | 881 patients stabilisés à l'hôpital, FEVG ≤ 40 % (34 % IC inaugurale) ; ARNI vs énalapril, 8 semaines | NT-proBNP davantage abaissé (ratio 0,71 ; 0,63–0,81) ; événements cliniques moindres (exploratoire) ; tolérance rénale, kaliémique et tensionnelle comparable | Partiel (initiation hospitalière ; marqueur biologique) |
| Méta-analyses ARNI (Evbayekha 2025 ; Rindone 2024) | 14 ECR (n = 25 167) ARNI vs IEC/ARA2 ; réanalyse par équivalence de dose sur 12 ECR | FEVG ≤ 40 % : mortalité RR 0,88 (0,81–0,94) ; pas de différence lorsque le comparateur était à dose équivalente (réanalyse contradictoire). Résumés seuls | Indirect (populations mixtes ; sans sous-groupe ischémique) |

### Bêtabloquants

| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **MERIT-HF** (Lancet 1999) | 3 991 NYHA II–IV, FEVG ≤ 40 % (moyenne 28 %), ~65–66 % ischémiques ; métoprolol succinate (cible 200 mg) vs placebo sous IEC + diurétique | Mortalité totale RR 0,66 (0,53–0,81) ; mort subite RR 0,59 ; décès par IC RR 0,51. Arrêté tôt pour bénéfice (1 an). Résumé seul | Direct (ère pré-ARM/ARNI/iSGLT2) |
| **CIBIS-II** (Lancet 1999) | 2 647 NYHA III–IV, FEVG ≤ 35 %, 50 % ischémiques ; bisoprolol (cible 10 mg) vs placebo | Mortalité 11,8 % vs 17,3 %, HR 0,66 (0,54–0,81) ; mort subite HR 0,56 ; hosp IC HR 0,64. Arrêté tôt (1,3 an). Résumé seul | Direct (FEVG concordante ; NYHA III–IV) |
| **COPERNICUS** (NEJM 2001) | 2 289 patients euvolémiques sévères, FEVG < 25 % (moyenne ~20 %), ~67 % ischémiques ; carvédilol (cible 25 mg × 2/j) vs placebo | Mortalité réduite de 35 % (IC 95 % 19–48 %) ; décès ou hosp -24 %. Arrêté tôt (10,4 mois). Résumé seul | Partiel (plus sévères, FEVG plus basse) |
| SENIORS (EHJ 2005) | 2 128 patients ≥ 70 ans, hosp IC ou FEVG ≤ 35 % (moyenne 36 %), 68 % coronariens ; nébivolol (cible 10 mg) vs placebo | Décès ou hosp CV HR 0,86 (0,74–0,99) ; mortalité seule HR 0,88 (0,71–1,08, ns) ; interaction FEVG ≤ 35 % vs > 35 % p = 0,72. Résumé seul | Partiel (âgés, FEVG mixtes ; composite uniquement) |
| BEST (NEJM 2001) | 2 708 NYHA III–IV, FEVG ≤ 35 % (moyenne 23 %), 59 % ischémiques ; bucindolol vs placebo | Formellement neutre : décès 30 % vs 33 %, p ajusté = 0,13 ; décès CV HR 0,86. Résumé seul | Direct sur population ; bucindolol non utilisé |
| COMET (Lancet 2003) | 3 029 NYHA II–IV, FEVG < 35 %, 53 % ischémiques ; carvédilol 25 mg × 2/j vs métoprolol tartrate 50 mg × 2/j | Décès 34 % vs 40 %, HR 0,83 (0,74–0,93) ; décès ou hosp HR 0,94 (ns). Le tartrate était probablement sous-dosé. Résumé seul | Direct (montre que le tartrate n'est pas la forme de référence) |
| Cleland 2018 IPD bêtabloquants (EHJ ; texte intégral) | 18 637 patients de 11 ECR en double aveugle, 66 % ischémiques ; par tranche de FEVG et rythme | Rythme sinusal, mortalité : FEVG 26–34 % HR 0,75 (0,64–0,88), 35–39 % HR 0,67 (0,50–0,90), 40–49 % HR 0,59 (0,34–1,03), ≥ 50 % aucun effet. En FA : aucune tranche significative (strates post hoc) | Direct (rythme sinusal, FEVG 26–39 %) |
| Kotecha 2014 FA IPD (Lancet) et 2017 FC IPD (JACC) | 18 254 (10 ECR) selon rythme ; 14 313 sinusal / 3 065 FA (11 ECR) selon FC | Mortalité : sinusal HR 0,73 (0,67–0,80) ; FA HR 0,97 (0,83–1,14) ; interaction p = 0,002. Bénéfice en rythme sinusal indépendant de la FC initiale (interaction p = 0,35) ; FC atteinte pronostique même sous placebo | Partiel (si FA) / Indirect (observationnel intra-essai) |
| McAlister 2009 méta-régression (Ann Intern Med) | 23 ECR, 19 209 patients | Mortalité RR 0,76 ; chaque baisse de 5 bpm associée à ~18 % de mortalité en moins ; forte vs faible dose sans différence (p = 0,69). Résumé seul | Indirect (écologique entre essais) |
| REDUCE-AMI (2024), REBOOT (2025), BETAMI-DANBLOCK (2025), ABYSS (2024) et Kristensen 2026 IPD (NEJM) | Essais ouverts post-IDM à FEVG préservée (≥ 40 % ou ≥ 50 %) ; 17 801 patients poolés à FEVG ≥ 50 % dans Kristensen 2026 | Kristensen 2026 (FEVG ≥ 50 %) : décès, IDM ou IC 8,1 % vs 8,3 % (HR 0,97 ; 0,87–1,07). Dans ABYSS (arrêt vs poursuite à FEVG ≥ 40 %), l'arrêt n'était pas non inférieur (HR 1,16, porté par les hosp CV) | Extrapolé (aucun patient à FEVG < 40 %) |

### ARM stéroïdiens (spironolactone, éplérénone)

| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **RALES** (NEJM 1999) | 1 663 ICFER sévères (NYHA III–IV, FEVG ≤ 35 %, médiane 26 %, ~55 % ischémiques) ; spironolactone 25 mg vs placebo sous IEC + diurétique ; bêtabloquant ~10–15 % | Mortalité totale 35 % vs 46 %, RR 0,70 (0,60–0,82) ; hosp IC RR 0,65. **Arrêté tôt** pour bénéfice (24 mois). Gynécomastie/douleurs mammaires 10 % vs 1 % chez l'homme. Résumé seul | Partiel (symptômes sévères ; pré-bêtabloquants, pré-ARNI/iSGLT2) |
| **EPHESUS** (NEJM 2003) | 6 632 patients 3–14 j post-IDM, FEVG ≤ 40 % (moyenne 33 %) + signes d'IC ou diabète ; 100 % ischémiques ; éplérénone 25–50 mg vs placebo | Provisoire (résumé et RCP) : mortalité 14,4 % vs 16,7 %, RR 0,85 (0,75–0,96) ; décès CV ou hosp CV RR 0,87 ; mort subite RR 0,79. Sous-groupe post hoc : bénéfice concentré si initiation < 7 j (interaction p = 0,02) | Partiel (post-IDM aigu, non chronique) |
| **EMPHASIS-HF** (NEJM 2011 ; texte intégral) | 2 737 patients ≥ 55 ans, NYHA II, FEVG ≤ 30 % (ou 30–35 % si QRS > 130 ms ; moyenne 26 %), 69 % ischémiques ; éplérénone 25–50 mg vs placebo sous IEC/ARA2 (93–94 %) + bêtabloquant (87 %) | Décès CV ou hosp IC 18,3 % vs 25,9 %, HR 0,63 (0,54–0,74) ; mortalité totale HR 0,76 (0,62–0,93). **Arrêté tôt** (21 mois). Effet identique selon la cause (interaction p = 0,73). K+ > 5,5 mmol/L : 11,8 % vs 7,2 % ; troubles mammaires 0,7 % vs 1,0 % | Partiel (FEVG ~35 % à la limite d'inclusion ; pré-ARNI/iSGLT2) |
| TOPCAT (NEJM 2014) | 3 445 patients IC à FEVG ≥ 45 % ; spironolactone vs placebo | Formellement neutre : HR 0,89 (0,77–1,04) ; hosp IC HR 0,83. Écart régional post hoc (Amériques HR 0,82 vs Russie/Géorgie 1,10, interaction p = 0,12 ; canrénone indétectable chez 30 % des patients russes déclarés traités) | Extrapolé (ICFEP ; point de contraste uniquement) |
| Méta-analyse IPD Jhund (Lancet 2024 ; texte intégral) | Données individuelles RALES + EMPHASIS-HF (4 400 ICFER) et TOPCAT + FINEARTS-HF | ICFER : décès CV ou hosp IC HR 0,66 (0,59–0,73) ; mortalité totale HR 0,73 (0,65–0,83). Antécédent d'IDM vs non : 0,65 vs 0,66 (interaction p = 0,96). Hyperkaliémie OR 2,27 | Partiel (meilleure estimation poolée ICFER ; traitements de fond plus anciens) |

### Inhibiteurs SGLT2

| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **DAPA-HF** (NEJM 2019 ; texte intégral) | 4 744 ICFER, FEVG ≤ 40 % (moyenne 31 %), **56 % ischémiques**, 42 % diabétiques, ARNI 11 %, ARM 71 %, DFGe ≥ 30 ; dapagliflozine (*Forxiga*) 10 mg vs placebo, 18,2 mois | Aggravation IC ou décès CV 16,3 % vs 21,2 %, **HR 0,74 (0,65–0,85)**, NNT 21 ; décès CV HR 0,82 et mortalité totale HR 0,83 (nominaux hors hiérarchie). Sous-groupe ischémique HR 0,77 (0,65–0,92) vs non ischémique 0,71 (interaction p = 0,55 ; Butt 2021) | Direct (partiel sur l'ARNI en traitement de fond) |
| **EMPEROR-Reduced** (NEJM 2020 ; texte intégral) | 3 730 ICFER, FEVG ≤ 40 % (moyenne 27 %), **52 % ischémiques**, 50 % diabétiques, ARNI 19,5 %, DFGe ≥ 20 ; empagliflozine (*Jardiance*) 10 mg vs placebo, 16 mois | Décès CV ou hosp IC 19,4 % vs 24,7 %, **HR 0,75 (0,65–0,86)**, NNT 19, porté par les hosp IC (0,69) ; décès CV HR 0,92 (ns) ; pente DFGe +1,73/an. Ischémique HR 0,82 (0,68–0,99) vs non ischémique 0,67 (interaction p = 0,149 ; Khan 2023) | Direct (population concordante) |
| **Zannad 2020** méta-analyse (Lancet ; résumé) | DAPA-HF + EMPEROR-Reduced, n = 8 474 ; financé par Boehringer | Provisoire (résumé) : mortalité totale **HR 0,87 (0,77–0,98)** ; décès CV 0,86 (0,76–0,98) ; décès CV/1re hosp IC 0,74 ; composite rénal 0,62 | Direct (pool ICFER ; sans détail étiologique dans le résumé) |
| **EMPULSE** (Nat Med 2022 ; texte intégral) | 530 patients hospitalisés stabilisés en IC aiguë, toute FEVG (~67 % ≤ 40 %) ; empagliflozine 10 mg, 90 jours | Win ratio **1,36 (1,09–1,68)** (~2/3 des gains portés par le KCCQ) ; décès 4,2 % vs 8,3 % ; décès CV/événement IC HR 0,69 (ns) ; zéro acidocétose | Partiel (initiation hospitalière ; part ischémique inconnue) |
| **SOLOIST-WHF** (NEJM 2021 ; résumé + RCP FDA) | 1 222 diabétiques de type 2 après hospitalisation pour aggravation IC, toute FEVG (médiane 35 %) ; sotagliflozine, 9 mois | Décès CV + hosp IC + visites urgentes totaux **HR 0,67 (0,52–0,85)** ; décès CV HR 0,84 et mortalité totale 0,82 (ns). **Arrêté tôt** (perte de financement), critère élargi aux événements totaux | Partiel (diabète uniquement, toute FEVG) |
| **DELIVER / EMPEROR-Preserved** (NEJM 2022 / 2021) | 6 263 et 5 988 patients, FEVG > 40 % (18 % de FEVG améliorée dans DELIVER) | HR 0,82 (0,73–0,92) et 0,79 (0,69–0,90), portés par les événements IC ; décès CV ns. Sous-groupe FEVG améliorée de DELIVER HR 0,74 (interaction p = 0,43) | Indirect (FEVG > 40 %) |
| **Vaduganathan 2022** méta-analyse 5 essais (Lancet) | 21 947 patients, toutes FEVG | Décès CV/hosp IC HR 0,77 ; décès CV 0,87 ; mortalité totale 0,92 ; FEVG ≤ 40 % HR 0,75 ; diabète vs non 0,77 vs 0,77 | Partiel (toutes FEVG poolées ; cause non analysée) |`,
    },
    {
      headingFr: 'Pronostic, remodelage inverse et récupération de la FEVG',
      bodyMarkdownFr: `Il s'agit principalement de cohortes observationnelles, d'un essai à bras unique et d'une comparaison de scores de risque : aucune ne compare un traitement à un témoin, et tous les chiffres sont des moyennes de population.

| Étude / Cohorte | Population et suivi | Résultat principal | Applicabilité |
|---|---|---|---|
| SwedeHF ischémique vs non ischémique (Silverdal, ESC HF 2020) | 30 946 IC non valvulaires, registre suédois 2000–2012, 57 % ischémiques ; toutes tranches de FEVG | Mortalité ajustée ischémique vs non ischémique HR 1,16 (1,11–1,22) ; FEVG 30–39 % HR 1,20 (1,10–1,31) ; FEVG < 30 % HR 1,39 ; aucun écart à FEVG ≥ 50 % | Partiel (pré-ARNI/iSGLT2 ; sans ajustement NT-proBNP ; observationnel) |
| ICFER récente selon la cause (Silverdal, ESC HF 2023) | 364 nouveaux hospitalisés FEVG < 40 %, Göteborg 2016–2019 (114 ischémiques vs 203 non ischémiques), 28 semaines | Hausse FEVG ≥ 10 points : 35,6 % vs 70,0 % ; atteinte ≥ 40 % : 26,0 % vs 50,7 % ; OR ajusté d'amélioration si ischémique 0,35 (0,18–0,65) ; hosp IC 36,8 % vs 16,3 % | Partiel à direct (monocentrique rétrospectif, peu d'iSGLT2) |
| BIOSTAT-CHF / ASIAN-HF HFimpEF (Cao, EJHF 2024) | FEVG ≤ 40 %, Europe 2010–2015 (écho à 9 mois) et Asie 2012–2015 (1 an) ; pré-iSGLT2 | HFimpEF 18,4 % / 28,5 % ; coronaropathie OR 0,46 (0,31–0,70) pour l'amélioration ; VG moins dilaté, sexe féminin, absence de BBG prédictifs ; mortalité HFimpEF HR 0,52 et 0,40 | Partiel (post hoc, biais de survivant) |
| Registre Alberta récupération FEVG (Ghimire, EHJ 2019) | 3 124 patients FEVG ≤ 40 % avec 2 ETT espacées de ≥ 6 mois, 2008–2016 | 37,6 % améliorés de ≥ 10 points ; mortalité améliorée vs persistante HR ajusté 0,70 (0,62–0,79) | Indirect sur la cause (non rapportée ; résumé seul) |
| Trajectoires de FEVG (Lupon, JACC 2018) | 1 160 patients ambulatoires IC, Badalona, jusqu'à 15 ans | La FEVG progresse surtout la 1re année, se stabilise jusqu'à ~10 ans puis décline lentement ; gain à 1 an moindre en cause ischémique, plus grand en IC récente | Partiel (résumé seul) |
| **PROVE-HF** (JAMA 2019) | 794 ICFER débutant sacubitril/valsartan, 53,7 % ischémiques, bras unique, 12 mois | FEVG de 28,2 % à 37,8 % ; VTSi de 61,7 à 45,5 mL/m² ; NT-proBNP -30 % dès J14 | Partiel (causes mixtes non séparées ; pas de groupe témoin) |
| Kwon 2009 étendue de cicatrice (JACC Imaging) | 349 cardiomyopathies ischémiques, FEVG moyenne 24 %, IRM 2003–2006, 2,4 ans | Cicatrice > 30 % du myocarde : décès ou greffe RR 1,75 (1,02–3,03) | Partiel (100 % ischémique, plus sévère ; résumé seul) |
| Bello 2003 (Circulation) | 45 IC chroniques (28 ischémiques) sous bêtabloquants, IRM initiale et à 6 mois | Zones sans cicatrice améliorées à 56 % contre 3 % si cicatrice > 75 % ; myocarde viable dysfonctionnel prédictif de la baisse du VTSi | Partiel/indirect (très petit effectif ; résumé seul) |
| White 1987 (Circulation) | 605 hommes < 60 ans, 1–2 mois post-IDM, 78 mois | Le volume télésystolique était le meilleur prédicteur de survie (chi² 82,9 vs FEVG 46,6) ; la FEVG n'ajoutait rien une fois le VTS connu | Indirect (post-IDM années 1980, hommes seuls ; résumé seul) |
| Kramer 2010 (JACC) | 30 essais de mortalité (69 766) et 88 de remodelage (19 921) sur 25 traitements/dispositifs | Corrélation au niveau des essais entre OR de mortalité et gain de FEVG r = -0,51, variation de VTS r = 0,48 | Indirect (niveau essai ; résumé seul) |
| Codina 2021 comparaison des scores de risque (EJHF) | 1 166 patients ambulatoires IC, Badalona 2010–2018, 40,7 % ischémiques, FEVG moyenne 37,7 % | Indice C à 1 an de 0,80–0,83 pour SHFM, MAGGIC, PREDICT-HF et BCN-Bio-HF ; MAGGIC mieux calibré, SHFM/PREDICT-HF sous-estiment et BCN-Bio-HF surestime le risque | Partiel (pré-iSGLT2 ; biais de centre développeur) |`,
    },
    {
      headingFr: "Médicaments anti-angineux",
      bodyMarkdownFr: `| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **RAID** (2018) | 1 012 porteurs de DAI, 54 % ischémiques, FEVG moyenne ~31 % ; ranolazine (*Ranexa*) vs placebo comme antiarythmique | Formellement neutre : TV/FV ou décès HR 0,84 (0,67–1,05) ; TV/FV récidivantes plus basses en secondaire (HR 0,70) ; aucun excès de décès ; environ la moitié d'arrêts de traitement | Population **directe**, mais évalue l'arythmie et non l'angor ; notes de résumé |
| **RIVER-PCI** (2016) | 2 604 patients avec revascularisation incomplète après angioplastie ; FEVG moyenne 55 %, NYHA III–IV exclus ; ranolazine 1 000 mg × 2/jour | Aucune réduction des revascularisations ou hospitalisations (26,2 % vs 28,3 %), pas de bénéfice sur l'angor ; davantage d'arrêts pour effets indésirables | **Indirect** (FEVG quasi normale) |
| **ATPCI** (2020) | 6 007 patients après angioplastie ; trimétazidine (*Vastarel*) vs placebo, ~4 ans | Aucun effet sur les événements cardiaques (HR 0,98 ; 0,88–1,09) | **Non évaluable** pour l'ICFER (FEVG non rapportée) |
| **Méta-analyse trimétazidine** (Nassiri 2024) | 28 études majoritairement petites dans l'ICFER, 2 552 patients, FEVG médiane 33 % | Baisse des décès CV (OR 0,33) et des hospitalisations IC (OR 0,42) | **Partiel** : moitié des essais à haut risque de biais, peu de traitements modernes ; les auteurs ne recommandent pas l'usage systématique |
| **BEAUTIFUL, sous-groupe angor** (2009) | 1 507 coronariens avec FEVG < 40 % et angor limitant ; ivabradine (*Procoralan*) vs placebo | Moins d'hospitalisations pour infarctus (HR 0,58) ; critère principal limite (HR 0,76 ; 0,58–1,00) dans un essai parent neutre | Population **directe** ; sous-groupe post hoc, générateur d'hypothèses |
| **PRAISE** (1996) / **PRAISE-2** (2013) | Amlodipine (*Amlor*) dans FEVG < 30 %, NYHA IIIB–IV (PRAISE) et IC non ischémique (PRAISE-2) | Neutre : ni danger ni bénéfice | **Partiel** : étaye la sécurité d'emploi, traitements des années 1990 |
| **V-HeFT III** (1997) | 450 hommes avec IC sous énalapril ; félodipine vs placebo | Mortalité comparable (13,8 % vs 12,8 %) | **Partiel** |
| **NEAT-HFpEF** (2015) | 110 patients avec ICFEP (FEVG moyenne 63 %) ; mononitrate d'isosorbide | Moins d'activité quotidienne sous dérivé nitré, aucun gain de distance de marche ni de qualité de vie | **Indirect** (FEVG préservée) |
| **ORBITA-COSMIC** (2024) | 51 patients avec angor réfractaire ; réducteur du sinus coronaire vs procédure factice ; FEVG médiane 62 %, FEVG < 25 % et sondes DAI/CRT exclues | Critère principal (perfusion à l'IRM d'effort, modifié avant levée d'aveugle) non amélioré ; moins d'épisodes d'angor quotidiens en secondaire (OR 1,40) | **Extrapolé** pour l'ICFER ischémique avec dispositif |`,
    },
    {
      headingFr: "Diurétiques : escalade et choix du diurétique de l'anse",
      bodyMarkdownFr: `Tous les essais d'escalade diurétique ci-dessous ont inclus des patients **hospitalisés** ; aucun n'a réduit la mortalité ni les réhospitalisations.

| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **TRANSFORM-HF** (JAMA 2023 ; Kapelios Circ HF 2024 ; textes intégraux) | 2 859 patients américains après hospitalisation pour IC, ~70 % FEVG ≤ 40 %, 27–30 % ischémiques, ~6 % sous iSGLT2 ; stratégie torsémide vs furosémide (*Lasilix*) en ouvert | Neutre : décès 26,1 % vs 26,2 % (HR 1,02 ; 0,89–1,18). Sous-groupe ICFER : mortalité à 12 mois HR 1,02 (0,82–1,28) ; KCCQ identique. Arrêté vers la moitié de la taille prévue, croisements ; hospitalisations HR 0,88 uniquement en post hoc | Partiel |
| **ADVOR** (NEJM 2022 ; résumé et articles compagnons) | 519 patients belges hospitalisés sous diurétique de l'anse chronique, FEVG moyenne 43 %, 45 % ischémiques, iSGLT2 exclus ; acétazolamide IV vs placebo | Décongestion à J3 : 42,2 % vs 30,5 % (RR 1,46) ; décès ou réhospitalisation IC à 3 mois 29,7 % vs 27,8 % (HR 1,07 ; 0,78–1,48) | Indirect (patients hospitalisés) |
| **ORION-A** (J Clin Med 2025 ; texte intégral) | 416 patients hospitalisés (Russie/Kirghizistan), FEVG médiane 40 %, ~75 % sous iSGLT2 ; acétazolamide oral en ouvert | Neutre : décongestion à 72 h 39,6 % vs 39,7 % ; mortalité à 90 jours 1,4 % dans les deux bras | Indirect (patients hospitalisés) |
| **CLOROTIC** (Eur Heart J 2023 ; texte intégral) | 230 patients espagnols hospitalisés, âge médian 83 ans, FEVG médiane ~55 % ; hydrochlorothiazide vs placebo, double aveugle, arrêté précocement | Poids -2,3 vs -1,5 kg à 72 h ; essoufflement non amélioré ; aggravation rénale 46,5 % vs 17,2 %, potassium ≤ 3,5 mmol/L 44,7 % vs 19,0 % ; pronostic à 90 jours inchangé | Indirect |
| **3T** (JACC HF 2020 ; texte intégral) | 60 patients hospitalisés résistants aux diurétiques, FEVG moyenne 30 % ; métolazone vs chlorothiazide IV vs tolvaptan | Perte de poids à 48 h : 4,6 / 5,8 / 4,1 kg (ns) ; sous-dimensionné ; financé par le fabricant du tolvaptan | Indirect |
| Cohorte métolazone Brisco-Bacik (JAHA 2018) | 13 898 hospitalisations (3 hôpitaux Yale) ; pas de données de FEVG ; observationnel | Métolazone liée à la mortalité (HR ajusté ~1,2), lien disparaissant après prise en compte de l'hyponatrémie, de l'hypokaliémie et de la dégradation rénale | Indirect |
| Méta-analyse ambulatoire Bahar (ESC Heart Fail 2025) | 29 études ; seulement 5 comparant décongestion ambulatoire et hospitalière (2 petits ECR, 118 patients) | Mortalité et hospitalisations à 30 jours plus basses en ambulatoire dans les données observationnelles ; aucune différence dans les essais randomisés | Indirect |`,
    },
    {
      headingFr: 'Télésurveillance et suivi à distance',
      bodyMarkdownFr: `| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| Méta-analyse Scholte (EHJ 2023) | 92 études, 36 549 patients ; toutes formes de suivi à distance | Télésurveillance non invasive : décès OR 0,85, 1re hospitalisation IC OR 0,78. Suivi par prothèse (DAI/CRT) : pas d'effet net | Partiellement direct |
| TIM-HF2 (Lancet 2018) | 1 571 patients allemands (1 538 analysés), NYHA II–III, hospitalisation IC dans les 12 mois, FEVG ≤ 45 % (moyenne 41 %, ~41 % ischémiques) ; dépression majeure exclue ; centre médicalisé 24 h/24 | Jours perdus pour hospitalisation CV imprévue ou décès : 4,88 % vs 6,64 % (ratio 0,80, p = 0,046), porté surtout par les décès : mortalité toutes causes HR 0,70 (0,50–0,96). Jours d'hospitalisation CV non réduits significativement (0,89, p = 0,21) ; jours d'hospitalisation IC réduits (0,80, p = 0,007) | Partiellement direct (uniquement après hospitalisation IC récente) |
| MONITOR-HF (Lancet 2023) | 348 patients néerlandais NYHA III avec hospitalisation récente, FEVG médiane 30 % ; capteur CardioMEMS vs suivi usuel | Hospitalisations IC et visites urgentes -44 % ; qualité de vie +7 points (en ouvert) ; décès inchangés | Partiellement direct (effet possiblement moindre si ischémique) |
| CHAMPION, GUIDE-HF | 550 NYHA III, tous hospitalisés pour IC dans l'année (CHAMPION) ; 1 000 surtout NYHA II–III, 55 % avec hospitalisation récente (GUIDE-HF) ; capteur de pression pulmonaire | CHAMPION : moins d'hospitalisations IC. GUIDE-HF : critère principal neutre, positif uniquement en analyse pré-COVID ; pas de gain de qualité de vie | Partiellement direct |
| Tele-HF (NEJM 2010) | 1 653 patients américains après hospitalisation ; suivi automatisé par téléphone | Réhospitalisation ou décès : 52,3 % vs 51,5 % à 6 mois (pas de différence) ; utilisation quotidienne tombée à 55 % | Indirect (modèle peu intensif) |
| BEAT-HF (JAMA Intern Med 2016) | 1 437 patients US après sortie, FEVG moyenne ~43 % ; capteurs à domicile + appels infirmiers | Réhospitalisations : 50,8 % vs 49,2 % (HR 1,03) ; décès inchangés | Indirect |
| IN-TIME (Lancet 2014) | 664 porteurs d'un nouveau DAI/CRT-D Biotronik, NYHA II–III, FEVG ≤ 35 % (moyenne 26 %), ~69 % coronariens ; télésuivi quotidien | Score clinique aggravé : 18,9 % vs 27,2 % (OR 0,63), surtout les décès : mortalité à 1 an 3,4 % vs 8,7 % (HR 0,36 ; critère secondaire, 37 décès au total). Hospitalisations IC inchangées (44 vs 47). En ouvert, financé par le fabricant ; interaction FA post hoc pour le composite uniquement | Partiellement direct (porteurs de prothèse uniquement) |
| REM-HF (EHJ 2017) | 1 650 porteurs DAI/CRT au Royaume-Uni, FEVG moyenne 30 %, 68 % coronariens ; téléchargements hebdomadaires | Décès ou hospitalisation CV inchangé (HR 1,01) sur 2,8 ans | Direct (majoritairement ischémique, porteurs de prothèse) |
| MORE-CARE (EJHF 2017) | 865 analysés (per protocol) sur 917 randomisés avec nouveau CRT-D Medtronic, FEVG moyenne 27 %, 44 % ischémiques ; arrêté précocement | Décès ou hospitalisation CV/liée au dispositif : HR 1,02 (0,80–1,30) ; décès 40 vs 34 ; -38 % de recours aux soins CV (surtout moins de consultations programmées) ; financé par le fabricant | Partiellement direct (CRT-D uniquement) |
| MANAGE-HF phase 1 (J Card Fail 2022) | 191 porteurs d'un DAI/CRT-D Boston Scientific (algorithme HeartLogic), FEVG moyenne 26 %, 47 % ischémiques ; bras unique | Renforcement thérapeutique dans 74 % des épisodes d'alerte (89 % des changements concernaient les diurétiques) ; NT-proBNP passé de 1 316 à 743 pg/mL ; sans groupe témoin ; conduit par le fabricant | Indirect |
| Méta-analyse Veres (J Clin Med 2025) | 16 essais, 11 232 porteurs de prothèses | Mortalité toutes causes HR 0,83 (7 essais) ; hospitalisations IC inchangées (OR 0,95) | Partiellement direct (crédibilité modérée) |`,
    },
    {
      headingFr: 'Récupération et arrêt du traitement',
      bodyMarkdownFr: `| Essai | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **TRED-HF** (Lancet 2019) | 51 patients avec cardiomyopathie dilatée non ischémique à FEVG récupérée (≥ 50 %) ; arrêt progressif vs poursuite | 44 % de rechutes en 6 mois après arrêt contre 0 % sous poursuite (40 % au total). Base de la règle « continuer le traitement » | Indirect (non ischémique) |`,
    },
    {
      headingFr: 'Nutrition, sel, liquides, fer IV et compléments',
      bodyMarkdownFr: `| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **SODIUM-HF** (Lancet 2022) | 806 patients ambulatoires stables, FEVG médiane 36 % (réduite et préservée ; cause non précisée) ; sodium < 1 500 mg/jour vs soins usuels ; 12 mois | Décès, hospitalisation CV ou passage aux urgences CV : 15 % vs 17 % (HR 0,89, ns) ; petit gain de qualité de vie | Partiellement direct (FEVG et causes mixtes) |
| **FRESH-UP** (Nat Med 2025) | 504 patients ambulatoires stables, toute FEVG (52 % ICFER, 44 % ischémiques) ; restriction 1,5 L/jour vs apports libres ; 3 mois | Qualité de vie comparable (KCCQ +2,2 en libre, ns) ; plus de soif sous restriction ; événements de sécurité rares à 6 mois | Partiellement direct (~moitié ICFER) |
| **Méta-analyse fer IV — Anker 2025** (Nat Med 2025 ; texte intégral) | 6 ECR, 7 175 patients carencés en fer, FEVG ≤ 50 % (~62 % ischémiques, ~22 % ARNI, **seulement 519 [~7,2 %] sous iSGLT2**) | Hospitalisations IC totales + décès CV (bayésien) **RR 0,72 (0,55–0,89)** à 12 mois et **0,81 (0,63–0,97)** suivi complet ; hospitalisations IC récidivantes RR 0,69 (12 mois) / 0,78 (complet ; fréquentiste Knapp-Hartung RR 0,74 [0,52–1,06], ns) ; aucun gain de survie ; ischémique RR 0,74 vs non ischémique 0,90 ; **CST < 20 % RR 0,77 vs ≥ 20 % RR 0,96** ; signal selon le sexe (hommes 0,76 vs femmes 0,98). Pas de résultat clinique stratifié sur les iSGLT2 ; conflits d'intérêts des investigateurs | Partiel (~7 % sous iSGLT2 ; direct sur la part ischémique) |
| **Méta-analyse fer IV — Mandal 2026** (Open Heart nov. 2026 ; texte intégral) | Revue indépendante sans conflit d'intérêts de 18 cohortes IC jusqu'en oct. 2026 (n = 7 925) | Confirme une **certitude GRADE modérée** pour les hospitalisations IC totales premières et récidivantes (3 essais, n = 3 350, effet commun **RR 0,78 ; 0,67–0,90** ; à 12 mois RR 0,71) et ≥ 1 hospitalisation IC (10 essais, n = 5 371, **RR 0,89 ; 0,80–0,99**, -25/1 000), tandis que les intervalles à effets aléatoires croisaient 1 ; sécurité infectieuse de certitude faible/très faible (ajout de FAIR-HF2 : OR 1,00, I² = 77 %) | Partiel (~7 % sous iSGLT2) |
| **FAIR-HF2** (JAMA 2025 ; EJHF 2025 ; Khan 2026) | 1 105 patients carencés en fer, FEVG ≤ 45 % (médiane 35 %), **78 % ischémiques**, 38 % ARNI, 70,5 % ARM, **23,6 % (261) sous iSGLT2**, 68 % CST < 20 % ; carboxymaltose ferrique IV (*Ferinject*) répété vs placebo | **Formellement neutre** selon Hochberg sur 3 co-critères après changement en aveugle (mars 2024) : décès CV / 1re hosp IC **HR 0,79 (0,63–0,99 ; p nominal 0,04)**, total hosp IC **RR 0,80 (0,60–1,06 ; p = 0,12)**, CST < 20 % **HR 0,79 (p = 0,07)** ; exploratoire 12 mois hosp IC RR 0,65 ; sous-groupe ischémique (n = 858) HR 0,85 (P-int 0,26) ; 34 %/38 % d'arrêts ; cofinancé par CSL Vifor | Direct sur FEVG/cause ; partiel sur quadrithérapie + iSGLT2 (76,4 % sans iSGLT2) |
| **HEART-FID** (NEJM 2023 ; Lewis 2025 ; **sous-étude phosphate Nouhravesh EJHF mai 2025**) | 3 065 ICFER (FEVG ≤ 40 %, médiane 32 %, 60 % ischémiques, 30 % ARNI, **7,5–7,7 % sous iSGLT2**, **seulement 40,5 % CST < 20 %**) ; carboxymaltose ferrique IV vs placebo (American Regent) | **Formellement neutre** au seuil FDA alpha 0,01 : win ratio hiérarchique **1,10 (IC 99 % 0,99–1,23 ; p = 0,02)** ; dilué par ~60 % de ferritine isolée (CST ≥ 20 %). **Sous-étude phosphate à J21 (n = 133) :** **57,6 %** de baisse et **51,9 % d'hypophosphatémie modérée à sévère (< 0,8 mmol/L ; 27,8 % sévère grade 3)**, résolutive vers J91–119 | Partiel (FEVG/cause directes ; faible taux d'iSGLT2 ; dilué sur ferritine) |
| **IRONMAN** (Lancet 2022 ; Cleland 2024 ; Docherty 2024 ; Foley 2025) | 1 137 ICFER (FEVG ≤ 45 %, médiane 35 %, 57 % ischémiques, 21 % ARNI, **2,6 % [29] sous iSGLT2**, 74–76 % CST < 20 %) ; dérisomaltose ferrique IV (*Monofer*) en ouvert vs soins usuels (17 % de croisement) | Critère principal **formellement neutre** : hosp IC totales + décès CV **RR 0,82 (0,66–1,02 ; p = 0,070)** (sensibilité COVID préspécifiée RR 0,76, p = 0,047). Bénéfice concentré si **CST < 20 %** (RR 0,80 / COVID 0,67) vs CST ≥ 20 % + ferritine < 100 (**RR 0,96**, décès HR 1,30) ; sous-groupe post hoc iSGLT2 (n = 29, Hb seule) : +1,0 g/dL à 4 sem., zéro polyglobulie ; moins de premières hospitalisations infectieuses adjudiquées (HR 0,76 ; 0,59–0,98) | Partiel (en ouvert ; iSGLT2 très minoritaires) |
| **Ponikowski 2023 IPD** (EHJ 2023 ; texte intégral) | Méta-analyse sur données individuelles de 3 essais FCM (CONFIRM-HF, AFFIRM-AHF, HEART-FID ; n = 4 501, 58 % ischémiques ; Vifor) | Hosp CV totales + décès CV RR 0,86 (p = 0,029) ; hosp IC + décès CV RR 0,87 (0,75–1,01). **Interaction clé selon le CST :** hosp CV + décès CV **P-int = 0,019** et décès CV **P-int = 0,035** (bénéfice si CST < 15 %, nul/défavorable si CST ≥ 24 %) | Partiel (pré-iSGLT2) |
| IRONOUT-HF (JAMA 2017) | 225 patients ICFER carencés en fer ; fer oral vs placebo | Aucune amélioration de la capacité d'effort ni des symptômes | Partiellement direct (ICFER, causes mixtes) |
| **GISSI-HF oméga-3** (Lancet 2008 ; **sous-étude FA Aleksova EJHF 2013**) | 6 975 IC chroniques, ~90 % FEVG ≤ 40 %, ~50 % ischémiques ; oméga-3 1 g/jour vs placebo, 3,9 ans | Mortalité toutes causes 27 % vs 29 % (**HR ajusté 0,91, p = 0,041** ; non ajusté p = 0,12 ; NNT 56), pré-ARNI/iSGLT2. **Sous-étude FA post hoc non adjudiquée** (n = 5 835 sans FA sur ECG initial) : nouvelle FA **15,2 % vs 14,0 % (HR 1,10 ; 0,96–1,25 ; p = 0,19)** ; sans antécédent de FA (n = 4 991) : **11,2 % vs 9,8 % (OR 1,16 ; 0,97–1,39)** | Partiel (ICFER proche, ère ancienne, FA non adjudiquée) |
| **VITAL Rhythm** (JAMA 2021 ; texte intégral) | 25 119 adultes US ≥ 50 ans **sans MCV ni IC antérieure** (FEVG médiane 60 %) ; 840 mg/jour EPA+DHA vs placebo, 5,3 ans (NIH) | FA incidente adjudiquée formellement neutre : **3,7 % vs 3,4 % (HR 1,09 ; 0,96–1,24 ; p = 0,19** ; sous traitement HR 1,13, p = 0,09) ; les auteurs soulignent qu'un surrisque jusqu'à +24 % ne peut être exclu | Extrapolé (adultes sains ; taux annuel de FA 0,7 % vs 3,7 % dans GISSI-HF) |
| **OMEMI** (Circulation 2021 ; Myhre 2023) | 1 014 Norvégiens âgés post-infarctus (70–82 ans ; 759 sans FA) ; **1,8 g/jour** EPA+DHA vs placebo | FA clinique **7,2 % vs 4,0 % (HR 1,84 ; 0,98–3,45 ; p = 0,06)** ; FA clinique + micro-FA sur ECG pouce 14 j **11,9 % vs 6,5 % (HR 1,90 ; 1,16–3,11 ; p = 0,011)**, médiée à 65 % par la hausse sérique d'EPA | Partiel (100 % post-IDM ; dose 1,8 g/j ; FEVG non rapportée) |
| **RESPECT-EPA** (Circulation 2024) | 2 506 coronariens stables japonais sous statine (EPA/AA < 0,4) ; **1,8 g/jour** d'EPA pur vs soins usuels (ouvert) | Effet indésirable nouvelle FA **3,1 % vs 1,6 % (p = 0,017 ; OR 1,97 ; 1,15–3,38)** | Partiel (coronaropathie ; en ouvert ; FEVG non rapportée) |
| **STRENGTH / REDUCE-IT (FA)** (JAMA 2020 ; NEJM 2019 / Olshansky JACC 2023) | Haut risque CV sous statine : **STRENGTH** (n = 13 078, 4 g/j EPA+DHA, arrêté pour futilité) ; **REDUCE-IT** (n = 8 179, 18 % IC, 4 g/j EPA pur / icosapent éthyl) | **STRENGTH :** FA **2,2 % vs 1,3 % (HR 1,69 ; p < 0,001)**. **REDUCE-IT :** hospitalisation FA/flutter **3,1 % vs 2,1 % (HR 1,50 ; p = 0,004)** (événements 5,3 % vs 3,9 %) ; sous-groupe post hoc **antécédent de FA 12,5 % vs 6,3 % (HR 1,96)** ; hémorragies graves 2,7 % vs 2,1 % | Indirect (dose 4 g/j ; sans détail FEVG ICFER) |
| **Q-SYMBIO** (JACC HF 2014 ; **sous-groupe Europe Cardiol J 2019** ; textes intégraux) | 420 patients NYHA III–IV, FEVG moyenne 31 %, 68–72 % ischémiques, **0 % ARNI/iSGLT2**, 34 % ARM, 1,7 % DAI/CRT ; coenzyme Q10 300 mg/jour vs placebo, 106 sem. | Co-critères à 16 sem. (NYHA, marche 6 min, NT-proBNP) **tous neutres** ; MACE à 2 ans 15 % vs 26 % (30 vs 57 ; **HR 0,50 ; 0,32–0,80 ; p = 0,003** ; pire cas HR 0,64) ; mortalité secondaire non ajustée 10 % vs 18 % ; pas de gain FEVG/NT-proBNP ; arrêté à 420/550 après 8 ans, financement partiel Pharma Nord/Kaneka. **Post hoc Europe (n = 231, 2019) :** MACE HR 0,23, laissant le **hors-Europe (n = 189) quasi nul (20 vs 24 MACE)** sans test d'interaction | Partiel (pré-moderne, fragile, jamais répliqué) |
| **Cochrane 2021 / NIHR HTA 2022 (CoQ10)** (Al Saadi 2021 ; Claxton 2022) | Cochrane (11 ECR, n = 1 573) ; évaluation britannique indépendante **NIHR HTA** (26 ECR, n = 2 250, hors ICFEP isolée) | Cochrane : mortalité RR 0,58 issue d'**un seul essai (Q-SYMBIO)**, concluant à l'absence de preuve convaincante. **NIHR HTA 2022 :** mortalité ICFER sur 7 essais **non significative (RR 0,68 ; 0,45–1,03)** — contrairement aux méta-analyses biaisées mêlant KISEL-10 (seniors sains) | Partiel (pré-quadrithérapie) |
| **CORONA sous-étude CoQ10** (McMurray, JACC 2010) | 1 191 patients, **100 % IC systolique ischémique** (rosuvastatine vs placebo) | Une CoQ10 sérique basse ne prédisait **pas** indépendamment mortalité ni événements IC après ajustement, et sa baisse sous rosuvastatine n'aggravait pas le pronostic | Direct pour la déplétion sous statine ; indirect pour la supplémentation |
| **CORAL / DANUTRIO-HF / SELEQT-HF** (essais CoQ10 en cours ; registres 25 nov. 2026) | **CORAL** (RU, n = 950–1 025 ICFER, 300 mg/j) ; **DANUTRIO-HF** (Danemark, N = 4 044 IC, 2×2 CoQ10 200 mg/j + sélénium) ; **SELEQT-HF** (Pays-Bas, N = 1 100, CoQ10 + sélénium) | **Pas encore de résultats.** CORAL (KCCQ à 12 mois) fin mai 2028 ; DANUTRIO-HF (hosp IC/décès CV) fin estimée déc. 2028 ; SELEQT-HF déc. 2030. Warfarine exclue de CORAL et DANUTRIO-HF | En attente (premier test sous traitements modernes) |
| QUEST (Nat Med 2024) | 3 110 patients chinois, FEVG ≤ 40 %, ~74 % ischémiques ; Qiliqiangxin (formule de 11 plantes incluant ginseng et danshen) vs placebo ; 18 mois ; financé par le fabricant | Décès CV ou hospitalisation IC : 25,0 % vs 30,0 % (HR 0,78) ; mortalité totale ns (HR 0,84) | Partiellement direct (< 10 % sous iSGLT2 ; formule sur prescription, non assimilable aux compléments isolés) |
| Revue parapluie Chua (Complement Ther Med 2025) | 22 revues sur acupuncture, Tai Chi et autres exercices corps-esprit, phytothérapie chinoise et compléments dans l'IC chronique toute FEVG ; majorité d'essais chinois | Certitude modérée uniquement pour la CoQ10 (mortalité RR 0,58, d'après Q-SYMBIO seul), le Tai Chi (hospitalisations RR 0,47, 3 essais) et les gélules Qishen Yiqi (mortalité OR 0,43, surtout essais d'un même fabricant). La vitamine E a augmenté les hospitalisations IC (RR 1,21) ; la vitamine D a réduit la distance de marche d'environ 39 m. 11 revues sur 21 de qualité critique très faible ; QUEST non inclus | Partiellement direct (quelques revues en IC coronarienne ; surtout critères intermédiaires) |
| CORDIOPREV (Lancet 2022) | 1 002 patients coronariens ; alimentation méditerranéenne vs pauvre en graisses ; 7 ans | Événements CV majeurs réduits d'environ 25 % ; excluait les FEVG ≤ 35 % | Indirect |
| Revue parapluie Hareer (Nutr Diet 2024) | 18 méta-analyses de 238 essais d'alimentation méditerranéenne (~198 000 personnes) ; aucune revue limitée à l'IC, aucune donnée de FEVG | Moins d'AVC dans chaque revue les rapportant (RR 0,58–0,65). En cas de cardiopathie existante vs soins usuels : mortalité RR 0,44 et décès CV RR 0,35, mais issus de très peu d'essais avec faible certitude. Sans cardiopathie, mortalité inchangée (HR 1,00). 15 revues sur 18 de qualité faible ou très faible | Indirect (maladie coronaire, pas ICFER) |
| **NORVIT** (NEJM 2006) | 3 749 personnes dans les 7 jours suivant un infarctus ; acide folique + vitamine B12 + vitamine B6 (40 mg), acide folique + B12, B6 seule ou placebo ; médiane 40 mois | Homocystéine abaissée de 27 %, sans réduction des événements ; triple association RR 1,22 (1,00–1,50 ; p = 0,05) pour récidive d'infarctus, AVC ou mort subite coronaire | Partiellement direct (post-IDM ; FEVG non rapportée) |
| Revue Cochrane homocystéine (2017) | 15 essais randomisés, 71 422 personnes avec ou sans maladie CV ; vitamine B6, acide folique et/ou B12 vs placebo | Infarctus RR 1,02, mortalité RR 1,01 (preuves de haute qualité, aucun effet) ; AVC RR 0,90 | Indirect (aucune donnée d'IC ni de FEVG) |
| Méta-analyse thiamine He (Clin Cardiol 2024) | 7 petits essais randomisés en double aveugle, 274 patients avec IC chronique ; thiamine (vitamine B1) 100–500 mg/jour pendant 1 semaine à 6 mois | FEVG +1,65 point (-1,10 à 4,41, ns) ; aucun changement sur la marche, le NT-proBNP ou la classe NYHA ; statut en thiamine amélioré | Partiellement direct (IC toute cause ; part ischémique non rapportée) |
| Essai NAD+ intraveineux Yu (Am J Cardiovasc Drugs 2025) | 180 patients chinois hospitalisés, 100 % cardiomyopathie ischémique, FEVG ≤ 45 % (moyenne ~41 %) ; NAD+ IV 10 mg/jour vs placebo pendant 7 jours ; monocentrique, cofinancé par le fabricant | FEVG à 1 mois : 45,4 % vs 42,4 % (p = 0,024) ; MACCE à 6 mois 14,6 % vs 24,7 % et hospitalisations IC 13,5 % vs 23,6 % (tous deux ns) | Population directe, critère intermédiaire ; non transposable aux compléments oraux de vitamine B3 |
| EFFORT sous-groupe IC (JACC 2021) | 645 patients hospitalisés avec IC à risque nutritionnel, âge médian 79 ans, en ouvert ; FEVG connue chez la moitié, < 40 % chez seulement 66 patients ; ~57 % d'origine coronaire | Mortalité à 30 jours : 8,4 % vs 14,8 % (OR ajusté 0,44) ; mortalité à 180 jours HR 0,74 uniquement après ajustement ; réhospitalisations non réduites | Indirect (patients âgés hospitalisés ; majoritairement hors ICFER) |`,
    },
    {
      headingFr: 'Perte de poids, obésité et médicaments GLP-1 / incrétines',
      bodyMarkdownFr: `Aucun essai n'a encore évalué un médicament amaigrissant sur des critères cliniques durs chez des patients sélectionnés pour une obésité avec ICFER. Les résultats positifs concernent l'insuffisance cardiaque à FEVG préservée ; les données dans l'ICFER sont réduites et contrastées, et la prise de position 2025 de la HFA qualifie la sécurité dans l'ICFER de « débattue » en appelant à des essais dédiés.

| Essai / Étude | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| STEP-HFpEF, STEP-HFpEF DM, SUMMIT | 529, 616 et 731 personnes avec obésité et **FEVG ≥ 45 %** ; sémaglutide (*Wegovy*) 2,4 mg/semaine ou tirzépatide (*Mounjaro*) vs placebo | Poids -13,3 % vs -2,6 % (STEP-HFpEF), avec amélioration des symptômes et de la distance de marche. SUMMIT : décès CV ou aggravation IC 9,9 % vs 15,3 % (HR 0,62 ; 0,41–0,95), surtout moins d'aggravations IC | **Non applicable** : FEVG préservée uniquement |
| FIGHT et LIVE (liraglutide) | Patients avec ICFER (FIGHT : hospitalisation récente, FEVG moyenne 27 %) ; non sélectionnés sur l'obésité ; doses antidiabétiques | FIGHT : numériquement plus d'hospitalisations IC (non significatif). LIVE : plus d'événements cardiaques graves, 12 (10 %) vs 3 (3 %), sur un faible nombre d'événements | Direct sur la FEVG, mais petits effectifs ; à l'origine de la question de sécurité dans l'ICFER |
| SELECT, sous-groupe ICFER | 1 347 personnes en surpoids ou obésité (IMC moyen 33,4) avec ICFER, sans diabète ; ~60 % NYHA II, NYHA IV exclu ; sémaglutide 2,4 mg vs placebo | Événements CV majeurs réduits de 35 % ; hospitalisations IC isolées non réduites (HR 1,08) | Partiellement direct (stade modéré, analyse en sous-groupe) |
| Revue de dossiers régime cétogène Moseley (J Card Fail Intersections 2025) | 125 patients avec IC et obésité sévère (IMC moyen 45) dans un centre américain, suivis ≥ 1 an ; le groupe « ICFER » (59 patients) incluait des FEVG modérément réduites ou améliorées et 6 porteurs d'assistance circulatoire ; sans groupe témoin | Poids médian -11,2 kg sur ~2 ans ; FEVG inchangée. Hospitalisations IC réduites par rapport à l'année précédente (rapport de taux 0,5), mais non significatif dans le groupe ICFER (0,6 ; 0,3–1,1). Seulement 2 patients sous iSGLT2 ; corps cétoniques et acidocétose non surveillés | Faible niveau de preuve (observationnel avant/après) ; ne permet pas d'écarter le risque d'acidocétose sous iSGLT2 |
| **SOUL**, analyse IC (JAMA Intern Med 2026) | 9 650 patients avec diabète de type 2 et maladie artérielle ou rénale ; 592 avec ICFER déclarée par l'investigateur (~88 % de coronaropathie dans l'ensemble du groupe IC) ; sémaglutide oral (*Rybelsus*) 14 mg vs placebo | Essai global : MACE HR 0,86. ICFER : événements IC ou décès CV HR 0,98 (0,70–1,38), MACE HR 0,93 (0,66–1,31) ; FEVG préservée HR 0,59 ; interaction selon le sous-type p = 0,14 | **Partiel** (sous-groupe randomisé ; diabète uniquement ; FEVG non mesurée) |
| Méta-analyse Christophides (2026) | 14 essais randomisés, 15 180 patients avec IC établie, stratifiés par FEVG | Hospitalisations IC dans l'ICFER : RR 1,38 (1,03–1,85), issu uniquement de FIGHT et d'une analyse d'EXSCEL ; décès CV RR 0,71 (0,54–0,95) avant 65 ans d'après deux analyses post hoc (exploratoire) ; bénéfice au-dessus de 40 % de FEVG | Partiel ; données minces |
| Kassab (2026, cohorte TriNetX) | 1 275 paires appariées avec ICFER, FEVG moyenne 30 %, 68 % de coronaropathie | Mortalité à 1 an HR 0,54 sous agonistes du GLP-1 | Population partielle, observationnel et exposé aux biais |
| Karlström (2025, registre suédois SwedeHF) | 808 utilisateurs de GLP-1 parmi 35 055 patients IC avec IMC > 25 ; utilisateurs diabétiques à 96 %, 59 % ischémiques | FEVG ≤ 40 % : décès CV à 2 ans HR ajusté 0,43 (0,24–0,79) ; mortalité toutes causes appariée non significative | Population partielle ; biais de temps immortel intégré à la définition de l'exposition |
| Kokura (2026, TriNetX, résumé) | 3 158 paires appariées, ICFER + diabète de type 2 | Mortalité HR 0,71 (0,62–0,83) ; hospitalisations HR 1,05 | Population partielle, observationnel ; chevauchement probable avec Kassab |
| **SURPASS-CVOT** (NEJM 2025) | 13 165 patients avec diabète et maladie artérielle ; tirzépatide (*Mounjaro*) vs dulaglutide (*Trulicity*) | MACE HR 0,92 (0,83–1,01) : non inférieur, non supérieur. Chez les 20,3 % avec IC : décès CV ou événements IC HR 0,85 (0,70–1,03) ; FEVG non rapportée | Indirect |
| **TRIUMPH-3**, rétatrutide (résultats préliminaires, non évalués par les pairs) | 1 949 patients avec IMC ≥ 35 et maladie CV établie | Poids -21,6 % / -22,6 % vs -3,2 % ; MACE-5 HR 0,82 (0,55–1,22), MACE-3 HR 1,12 (0,64–1,96) : non concluant | Extrapolé (aucun résultat ICFER publié) |`,
    },
    {
      headingFr: 'Activité physique, santé émotionnelle et soins palliatifs',
      bodyMarkdownFr: `| Essai / Revue | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **Yoga-CaRe HF** (AHA 2026 ; diapositives et dépêches consultées) | 3 492 patients indiens avec ICFER (âge médian 57 ans) ; réadaptation basée sur le yoga vs soins usuels renforcés | Qualité de vie +8,1 points MLHFQ à 3 mois, marche de 6 minutes +25,5 m ; décès, hospitalisation ou AVC non significativement réduits (21,0 % vs 22,8 % ; HR 0,90 ; 0,78–1,04 ; médiane 15 mois). Données de congrès uniquement | Indirect (non vérifié) : patients plus jeunes ; seuil de FEVG et part ischémique non précisés |
| **Revue Cochrane exercice** (2024) | 60 essais, 8 728 patients avec IC ; réadaptation par exercice vs absence | Hospitalisations toutes causes : 15,9 % vs 23,8 % (RR 0,69) ; pas d'effet net sur la mortalité ; meilleure qualité de vie | Indirect (FEVG et causes mixtes) |
| **HF-ACTION** (JAMA 2009) | 2 331 patients ambulatoires ICFER, 51 % ischémiques ; entraînement physique | Décès ou hospitalisation : HR 0,93 (ns) ; HR ajusté 0,89 | Partiellement direct (ère ancienne) |
| Feiereisen (MSSE 2007 ; résumé) | 60 personnes avec IC chronique sévère ; renforcement musculaire vs endurance vs combiné vs témoin | Les trois modes ont amélioré le pic de VO2 par rapport au témoin ; aucun n'était supérieur | Non évaluable (FEVG et cause absentes du résumé) |
| Méta-analyse Tucker (2019 ; texte intégral) | Essais randomisés ICFER 2007–2017 | Endurance aérobie : FEVG +3,8 points (+6,3 points sur ≥ 6 mois) ; renforcement seul ou combiné : +1,9 point (-2,0 à 5,9, ns) | Partiel (ICFER, causes mixtes ; l'unique essai de renforcement seul était 100 % ischémique) |
| Méta-analyse Santos (2018 ; résumé) | 59 essais randomisés, IC systolique ; chaque modalité vs témoin | Pic de VO2 : renforcement +3,57, aérobie +2,63 (aucune différence entre modes) ; seule l'endurance aérobie a amélioré la FEVG | Partiel (caractéristiques non vérifiées) |
| Méta-analyse Hollings (2017 ; résumé) | 34 essais randomisés, 1 940 patients coronariens | Renforcement = endurance sur la capacité d'effort (DMS -0,13, ns) ; l'entraînement combiné a surpassé l'endurance pour la capacité d'effort et la force | Indirect (maladie coronaire, FEVG non rapportée) |
| Méta-analyse Terada (2026 ; résumé) | 15 essais randomisés, 526 personnes, 89 % d'ICFER ; combiné vs endurance seule | Capacité d'effort DMS 0,40, marche de 6 minutes +48 m, force du haut du corps +8,3 kg ; aucune différence sur la qualité de vie ou la fonction cardiaque | Partiel (cause non rapportée) |
| **SMARTEX-HF** (Circulation 2017 ; texte intégral) | 261 patients ICFER, FEVG médiane 29 %, 59 % ischémiques ; fractionné haute intensité (HIIT) vs continu modéré vs conseils, 12 semaines | HIIT non supérieur au continu modéré sur le diamètre VG (-1,2 mm, ns), la FEVG ou le pic de VO2 ; les deux ont surpassé les conseils sur le pic de VO2 ; gains perdus à 52 semaines ; patients avec événement indésirable grave : HIIT 39 %, modéré 25 %, conseils 34 % (p = 0,16) | Direct (sous-groupe ischémique : aucune interaction) |
| Lan 2020 / Munch 2018 / Jakovljevic 2010 (petits essais face-à-face) | 12 à 14 patients par bras ; IC à FEVG réduite, NYHA I–II | Musculation et endurance ont augmenté le pic de VO2 de manière similaire ; dans Jakovljevic (16 patients, quasi-randomisé, 19 % ischémiques), seule l'endurance a augmenté le débit cardiaque et le volume d'éjection ; dans Lan, taille du VG inchangée dans tous les bras | Partiel à indirect (cause rarement précisée) |
| **REHAB-HF** (NEJM 2021 ; texte intégral) | 349 adultes ≥ 60 ans hospitalisés pour IC, 97 % fragiles ou pré-fragiles ; réadaptation multidomaine vs contrôle attentionnel | Score SPPB +1,5, marche de 6 minutes +34 m, KCCQ +7 ; aucun changement sur réhospitalisations ou décès à 6 mois ; sous-groupe ICFER : SPPB +1,1, rapport de taux de décès 2,21 (0,78–6,25 ; interaction ICFER vs ICFEP p = 0,08 ; 18 décès ICFER au total) | Partiel (sous-groupe ICFER FEVG < 45 %, patients âgés) |
| Analyse fragilité HF-ACTION (Circulation 2022 ; post hoc) | 2 130 patients ICFER, 59 % fragiles | Entraînement aérobie : hospitalisation ou décès HR 0,83 chez les fragiles vs 1,04 chez les non-fragiles (interaction p = 0,04) | Direct (sous-groupe post hoc d'un essai neutre) |
| Essai TCC Freedland (JAMA IM 2015) | 158 patients IC avec dépression ; thérapie cognitivo-comportementale vs soins usuels renforcés | Rémission de la dépression : 46 % vs 19 % | Indirect |
| SADHART-CHF (JACC 2010) | 469 patients, FEVG ≤ 45 %, dépression majeure ; sertraline vs placebo | Amélioration similaire dans les deux bras (p = 0,89) | Partiellement direct |
| MOOD-HF (JAMA 2016) | 372 patients, FEVG < 45 % (moyenne ~35 %), environ deux tiers ischémiques, dépression majeure ; escitalopram vs placebo en plus d'un suivi infirmier d'IC | Aucune différence sur l'humeur ni sur décès/hospitalisations (HR 0,99 ; 0,76–1,27) ; arrêté pour futilité ; pas de différence dans le sous-groupe ischémique (interaction p = 0,97) | Majoritairement direct |
| **Hopeful Heart** (JAMA IM 2021) | 629 patients hospitalisés ICFER déprimés (FEVG moyenne ~28 %, antécédent d'IDM ~50 %) ; soins collaboratifs infirmiers téléphoniques IC + dépression (psychiatre/cardiologue) vs suivi infirmier IC seul vs soins usuels | Qualité de vie mentale meilleure que les soins usuels (+4,47 MCS, taille d'effet 0,34) mais non supérieure au suivi infirmier IC seul ; humeur meilleure que les deux ; aucune différence sur réhospitalisations ni décès | Majoritairement direct (FEVG concordante) |
| **PAL-HF** (JACC 2017 ; texte intégral + NCT01589601) | 150 patients hospitalisés ou sortant d'hospitalisation avec IC avancée (48,0 % ischémiques, 54,7 % FEVG ≤ 40 %, NT-proBNP moyen > 10 000, mortalité 6 mois 29 %) ; équipe palliative interdisciplinaire vs soins usuels | Co-critères à 6 mois : KCCQ **+9,49** (p = 0,030), FACIT-Pal **+11,77** (p = 0,035) ; dépression HADS-D -1,94 (p = 0,020), spirituel +3,98 ; anxiété non significative après ajustement âge/sexe (p = 0,063) ; réhospitalisations IC (30,7 % vs 29,3 %) et décès (30,7 % vs 26,7 %) inchangés. **Limites :** effectif réduit de 200 à 150 sans ajustement alpha, ~46 % de données manquantes à 6 mois, écart initial KCCQ de 4,7 pts, monocentrique, en ouvert | Indirect (stade D avancé, pré-iSGLT2) |
| **CASA** (JAMA IM 2018 ; texte intégral + NCT01739686) | 314 patients ambulatoires IC chronique symptomatique (45,2 % ischémiques, **44,1 % FEVG < 40 %**, 61,8 % NYHA III–IV) ; soins collaboratifs téléphoniques infirmière + assistante sociale vs soins usuels | **Critère principal neutre :** KCCQ à 6 mois **+2,6 (-1,3 à 6,6 ; p = 0,19)**. Secondaires non ajustés : PHQ-9 -1,4 à 6 mois et 12 mois ; fatigue améliorée à 6 mois (p = 0,02) mais **perdue à 12 mois (p = 0,16)** ; anxiété, hospitalisations (p = 0,61) et décès à 12 mois (10 vs 13) neutres. **Limites :** critères assouplis en cours d'essai, 21 % de manquants, pas de contrôle attentionnel (~23 appels) | Partiel (FEVG mixtes, pré-iSGLT2) |
| **ENABLE CHF-PC** (JAMA IM 2020) | 415 ambulatoires US ≥ 50 ans NYHA III–IV (96,6 % III, FEVG moyenne 41,1 %, 52,9 % < 50 %, bon KCCQ initial 52,6) ; 1 consultation palliative + coaching infirmier téléphonique vs soins usuels | **Critère principal neutre** à 16 sem. : KCCQ +1,6, FACIT-Pal-14 +1,2, HADS anxiété/dépression neutres ; douleur PROMIS améliorée en secondaire ; jours d'hospitalisation et décès inchangés ; effet plafond et données manquantes | Partiel (FEVG mixtes, cause inconnue) |
| **Revue parapluie Kim 2026** (Heart Fail Rev 2026 ; texte intégral) | 19 revues systématiques de bonne qualité (11 méta-analyses, 104 études) sur les soins palliatifs dans l'IC (FEVG mixtes) | Certitude GRADE **modérée** pour moins d'hospitalisations (OR 0,56–0,67), moins d'anxiété et absence d'effet sur la mortalité ; **certitude faible** pour un gain modeste de qualité de vie (KCCQ +3,56), de dépression et de rédaction des directives anticipées | Partiel (FEVG et contextes mixtes) |
| **TEACH** (Psychother Psychosom 2025 ; texte intégral) | 457 coronariens en détresse psychologique (61 % post-IDM, 39 % IC, 14 % FEVG < 40 %) ; soins collaboratifs en équipe vs soins usuels | Réponse binaire HeartQoL positive **19 % vs 10 % (OR 2,21 ; p = 0,005 ; NNT 11)** ; HADS dépression -1,31, anxiété -1,18 ; événements non rapportés. **Limites :** taux très inférieur aux 50 %/35 % anticipés, pas de contrôle attentionnel (13 appels en moyenne), paramètres objectifs PA/LDL/HbA1c inchangés (58 % LDL manquants), pas de sous-groupe IC/FEVG | Partiel |
| Revue Cochrane interventions psychologiques (2024) | 21 ECR, 2 591 patients coronariens ou IC | Dépression DMS -0,36, anxiété DMS -0,57 (certitude modérée) ; aucun effet sur la mortalité (RR 0,81 ; 0,39–1,69) | Partiel (pas d'estimation IC isolée) |
| **ICD-FORUM** (EHJ 2019 ; texte intégral) | 118 porteurs de DAI en détresse ; TCC en ligne 6 semaines + forum vs soins usuels | **Critère principal neutre** à 6 sem. (p = 0,50) et 1 an (p = 0,29). **Limites :** cible réduite de 200 à 119, abandons inégaux (**30,5 % vs 16,9 %**), HADS-D à 1 an (-2,98, p = 0,004) à la limite de Bonferroni ; l'essai néerlandais plus vaste WEBCARE (n = 289) était neutre | Partiel (FEVG/cause non rapportées) |
| Essai activation comportementale IsHak (JAMA Netw Open 2024) | 416 patients IC déprimés toute FEVG (36 % post-IDM) ; activation comportementale vs gestion infirmière des antidépresseurs | Dépression réduite de moitié dans les deux bras sans différence (PHQ-9 -0,07) ; SF-12 physique +2,13 ; KCCQ, réhospitalisations et décès identiques | Partiel (pas de bras soins usuels ; FEVG/cause inconnues) |`,
    },
    {
      headingFr: 'Valves, fibrillation atriale et cicatrice IRM',
      bodyMarkdownFr: `| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **COAPT** 5 ans (NEJM 2023) | 614 patients avec insuffisance mitrale secondaire symptomatique sous traitement maximal ; clip mitral (TEER) vs traitement médical | Hospitalisations IC : 33,1 % vs 57,2 % par an (HR 0,53) ; mortalité 57,3 % vs 67,2 % (HR 0,72) | Plutôt direct : ~61 % de cause ischémique et FEVG moyenne 31 % selon la revue Lancellotti 2024 (source secondaire ; la formulation des recommandations valvulaires « sans coronaropathie pertinente » reste à concilier avec ce taux) |
| **RESHAPE-HF2** (NEJM 2024) | 505 patients avec IM secondaire modérée à sévère (65 % ischémiques, FEVG médiane 31–32 %) ; clip mitral vs médicaments | Hospitalisations IC ou décès CV : ratio de taux 0,64 (sous-groupe ischémique RR 0,71, non significatif isolément) | Partiel à direct |
| **CTSN IM ischémique sévère** (NEJM 2016) | 251 patients avec IM ischémique sévère (100 % ischémiques) ; réparation chirurgicale vs remplacement valvulaire | Mortalité similaire (HR 0,79) ; récidive de fuite mitrale 58,8 % vs 3,8 % | Direct pour l'IM ischémique opérée |
| **CASTLE-AF** (NEJM 2018) | 363 patients avec FA, FEVG ≤ 35 %, tous porteurs de DAI ou CRT-D (46 % ischémiques) ; ablation vs médicaments | Décès ou hospitalisation IC : 28,5 % vs 44,6 % (HR 0,62) | Partiel (financé par le fabricant de dispositifs) |
| **RAFT-AF** (Circulation 2022) | 411 patients avec FA et IC (31 % ischémiques, FEVG moyenne ~41 %) ; ablation vs contrôle de fréquence | Décès ou événements IC HR 0,71 (0,49–1,03, ns) ; arrêté pour futilité | Partiel |
| **APAF-CRT** (EHJ 2021) | 133 patients avec FA permanente, QRS fin et hospitalisation IC antérieure ; ablation du nœud AV + CRT vs médicaments | Mortalité 11 % vs 29 % (HR 0,26) ; arrêté précocement | Partiel (bénéfice à FEVG ≤ 35 % et > 35 % ; part ischémique non rapportée) |
| CASTLE-HTx (NEJM 2023) | 194 patients avec FA et IC terminale ; ablation vs médicaments | Décès, assistance circulatoire ou greffe urgente : 8 % vs 30 % (HR 0,24) | Indirect (61 % non ischémiques, stade terminal) |
| REVIVED-BCIS2 analyse viabilité (JAMA Cardiol 2023) | 610 patients de REVIVED avec test de viabilité | Le myocarde viable n'a pas prédit le bénéfice du stent ; une cicatrice plus étendue prédisait un pronostic moins bon (HR 1,18 par tranche de 10 % du VG) | Direct |`,
    },
    {
      headingFr: 'Occlusion coronaire chronique (CTO)',
      bodyMarkdownFr: `| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **SHINE-CTO** (NCT02784418) | Essai prévu d'angioplastie de CTO contre procédure factice (sham) | **Retiré en 2021** (« problèmes de financement liés à la pandémie »), 0 patient inclus ; aucun résultat ne sera publié (registre, 25 nov. 2026) | Non applicable |
| **ISCHEMIA-CTO** (en cours, NCT03563417) | Angioplastie de CTO vs médicaments ; 1 560 patients estimés | **Pas encore de résultats.** En recrutement ; fin principale estimée novembre 2028 (registre, 25 nov. 2026) | Partiel (sans restriction de FEVG) |
| Méta-analyse van Veelen (2021) | 5 essais randomisés, 1 790 patients, FEVG moyenne ~53 % ; angioplastie de CTO vs médicaments | Pas de réduction des décès (RR 1,14 jusqu'à ~4 ans), des événements majeurs ni de gain de FEVG ; moins d'angor à 1 an (RR 0,65, 2 essais) | Indirect (FEVG quasi normale, surtout angor) |
| DECISION-CTO (2019) | Patients avec CTO ; PCI vs pas de PCI ; arrêté prématurément | Critère composite : 22,3 % vs 22,4 % à ~4 ans ; ~20 % de croisement | Indirect (résumé seul) |
| EXPLORE (2016) | 304 patients après STEMI avec une seconde artère occluse (FEVG moyenne ~41 %) ; PCI précoce de CTO vs non | Pas de différence globale de FEVG (44,1 % vs 44,8 %) ; sous-groupe IVA favorable, mais aucun bénéfice dans le sous-groupe avec FEVG initiale ≤ 40 % (84 patients). Sous-étude IRM : récupération uniquement dans les segments affaiblis mais viables du territoire CTO. À 10 ans : pas moins d'événements majeurs (HR 1,10), plus de décès CV sous PCI en analyse non planifiée, moins d'essoufflement | Indirect (sous-groupe générateur d'hypothèses) |
| REVASC (2018) | 205 patients stables dans un centre, FEVG médiane 55–60 % (< 25 % exclus) ; PCI vs médicaments | Pas de gain de FEVG (+0,9 vs +0,7 point) ni d'épaississement pariétal ; bénéfice régional uniquement si peu d'autres lésions (SYNTAX ≤ 13), non retrouvé chez les 20 monotronculaires ; moins de réinterventions | Indirect (FEVG majoritairement normale) |
| ISCHEMIA analyse CTO (2025) | 1 470 patients d'ISCHEMIA porteurs d'une CTO, FEVG médiane 60 % ; stratégie invasive vs conservatrice | Pas de réduction des décès CV ni des infarctus (à 4 ans : 11,7 % vs 13,9 %) ; meilleurs scores d'angor et d'essoufflement ; plus d'événements d'IC avec la stratégie invasive (2,5 % vs 0,6 %) ; seulement 353 CTO sur 752 rouvertes | Indirect (FEVG < 35 % exclue) |
| ORBITA-CTO (2026) | 50 patients avec angor, ischémie et viabilité prouvées, FEVG médiane 55 % ; angioplastie de CTO vs procédure factice (sham) | Amélioration de l'angor (OR 4,38) ; pas d'amélioration nette de l'essoufflement ni de l'état général | Symptômes uniquement, petit effectif, FEVG normale (pré-publication) |`,
    },
    {
      headingFr: 'Cholestérol, colchicine, antiplaquettaires et protection gastrique',
      bodyMarkdownFr: `### Lipides et colchicine

| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| CORONA (NEJM 2007) | 5 011 patients ≥ 60 ans avec IC systolique ischémique, FEVG ≤ 40 % (moyenne 31 %), NYHA II–IV, non jugés relever d'une statine ; rosuvastatine (*Crestor*) 10 mg vs placebo | LDL réduit de 45 % vs placebo, mais décès CV / IDM non fatal / AVC non fatal non réduits (HR 0,92 ; 0,83–1,02) ; mortalité HR 0,95. Moins d'hospitalisations CV et IC en nombre total (IC : 1 109 vs 1 299) ; délai avant première hospitalisation IC non significatif (HR 0,91) | Direct, mais testait *l'initiation* d'une statine pour l'IC seule, non son arrêt |
| GISSI-HF bras statine (Lancet 2008) | 4 574 patients avec IC toute cause, sans statine ; moyenne 33 % (~90 % ≤ 40 %), 40 % ischémiques ; rosuvastatine 10 mg vs placebo ; 3,9 ans | Mortalité : 29 % vs 28 % (HR 1,00) ; sous-groupe ischémique HR 1,03 (0,92–1,16) pour décès ou hospitalisation CV ; bien tolérée mais sans effet | Partiel (majoritairement ICFER, 40 % ischémique) |
| IMPROVE-IT (2015) | 18 144 patients post-SCA ; simvastatine + ézétimibe (*Ezetrol*) vs simvastatine | Événements à 7 ans : 32,7 % vs 34,7 % (HR 0,936), grâce à moins d'IDM et d'AVC ischémiques ; mortalité CV et totale inchangées | Indirect (4,1–4,6 % avaient un antécédent d'IC ; FEVG non rapportée) |
| RACING (2022) | 3 780 patients avec maladie artérielle ; rosuvastatine 10 mg + ézétimibe vs rosuvastatine 20 mg | Non inférieur (9,1 % vs 9,9 %) ; moins d'arrêts pour intolérance (4,8 % vs 8,2 %) ; plus de patients sous 0,70 g/L (< 1,8 mmol/L) | Indirect |
| FOURIER (2017) | 27 564 patients avec maladie artérielle sous statine ; évolocumab (*Repatha*) vs placebo (FEVG < 30 % et NYHA III–IV exclus) | Événements HR 0,85 ; un LDL atteint plus bas était associé à moins d'événements (< 0,19 g/L [< 0,5 mmol/L] : HR ajusté 0,76 vs ≥ 1,00 g/L [≥ 2,6 mmol/L], non randomisé), sans signal de tolérance sur ~2 ans | Partiel (données d'IC non rapportées) |
| Méta-analyse Kelly (J Clin Lipidol 2024) | 13 essais, 8 592 patients avec maladie artérielle ; statine d'intensité modérée + ézétimibe vs statine forte intensité | Davantage de patients sous 0,70 g/L (< 1,8 mmol/L) de LDL (OR 1,76) ; pas de différence nette sur les événements cliniques (OR 0,54 ; 0,14–2,11 ; 3 essais, surtout RACING) | Indirect (aucune donnée d'IC ni de FEVG) |
| ODYSSEY OUTCOMES analyse antécédent IC (EHJ 2022) | 2 815 des 18 924 patients post-SCA avaient un antécédent d'IC (NYHA I–II ; FEVG jamais recueillie) ; alirocumab (*Praluent*) vs placebo | Pas de réduction des événements majeurs en cas d'antécédent d'IC (HR 1,17 ; 0,97–1,40) vs HR 0,78 sans antécédent ; plus d'IDM non fatals si antécédent d'IC (HR 1,30 ; 1,02–1,64) ; hospitalisations IC non réduites | Incertain (post hoc ; « antécédent d'IC » diffère d'une ICFER confirmée) |
| Méta-analyse colchicine (EHJ 2025) | 6 essais, 21 800 patients coronariens | Événements majeurs HR 0,75, pas d'effet sur la mortalité, forte hétérogénéité ; CLEAR SYNERGY seul était neutre (HR 0,99) | Indirect (IC sévère exclue) |
| Lp(a)HORIZON (NEJM 2026) | 8 350 patients avec antécédent CV et Lp(a) ≥ 70 mg/dL ; pélacarsen mensuel vs placebo pendant 4,7 ans (médiane) | Lp(a) réduite de 78 % à 1 an, mais événements majeurs non réduits (12,3 % vs 12,1 % ; HR 1,02) ; plus d'arrêts pour effets indésirables (20,6 % vs 7,5 %) | Indirect (statut IC non rapporté ; texte intégral lu) |

### Antiplaquettaires et protection gastrique (IPP)

| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **HOST-EXAM** (Lancet 2021 ; étendu 2023 ; 10 ans 2026) | 5 438 patients coréens sans événement après bithérapie pour stent ; clopidogrel (*Plavix*) 75 mg vs aspirine 100 mg, en ouvert | Critère composite 5,7 % vs 7,7 % à 2 ans (HR 0,73) ; HR 0,86 à 10,5 ans ; mortalité identique | Indirect (FEVG et IC non rapportées) |
| **SMART-CHOICE 3** (Lancet 2025) | 5 506 patients coréens à haut risque post-stent ; clopidogrel vs aspirine, en ouvert, financé par le fabricant | Décès, infarctus ou AVC 4,4 % vs 6,6 % (HR 0,71), porté par moins d'infarctus ; hémorragies égales | Indirect (FEVG et IC non rapportées) |
| **PANTHER** (JACC 2023) et **Giacoppo** (BMJ 2025) | Méta-analyses individuelles de 7 et 5 ECR (24 325 et 16 117 patients) ; inhibiteur de P2Y12 vs aspirine | Bénéfice porté par la réduction des infarctus (HR 0,88 et 0,77) ; décès et hémorragies majeures identiques | Indirect (aucun sous-groupe IC) |
| **COGENT** (NEJM 2010) | ~3 800 patients sous aspirine + clopidogrel ; oméprazole vs placebo | Événements digestifs 1,1 % vs 2,9 % (HR 0,34) ; événements cardiaques non significativement différents ; arrêté précocement | Partiel |
| **COMPASS pantoprazole** (2019) | 17 598 patients avec maladie artérielle stable (FEVG < 30 % exclue) ; pantoprazole vs placebo pendant 3 ans | Aucun excès d'effets indésirables hormis des infections digestives (1,4 % vs 1,0 %) ; magnésium et vitamine B12 non mesurés | Partiel (FEVG < 30 % exclue) |`,
    },
    {
      headingFr: 'Rétrécissement aortique et caillots (thrombus VG)',
      bodyMarkdownFr: `### Rétrécissement aortique

| Essai / Cohorte | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| TAVR UNLOAD (JACC 2025) | 178 patients avec FEVG 20–50 % (~2/3 ischémiques) et rétrécissement aortique modéré défini par la surface valvulaire ; TAVI précoce vs surveillance | Critère principal non atteint (win ratio 1,31, p = 0,14) ; mortalité identique (39,3 % dans chaque bras, médiane 23 mois) ; qualité de vie meilleure à 1 an (+12,8 vs +3,2) mais pas au suivi maximal ; 43 % du groupe surveillance ont ensuite eu un TAVI | Plus proche cliniquement, mais petit, sous-dimensionné et en ouvert (texte intégral lu) |
| **PROGRESS** (NEJM nov. 2026 ; résumés NEJM et Am Heart J + NCT04889872) | 744 patients ≥ 65 ans (moyenne 78 ans, surface moyenne 1,2 cm², Vmax 3,3 m/s, exclut FEVG < 20 % ; Edwards) avec sténose modérée + facteur de risque ; TAVI expansible par ballonnet vs surveillance | Décès toutes causes ou événement IC à 2 ans : **16,7 % vs 23,9 % (différence -7,2 points, IC 95 % -13,1 à -1,3 ; p = 0,02)** ; **mortalité totale inchangée (8,4 % vs 7,3 %)**, porté par les événements IC (10,8 % vs 19,0 %). La couverture secondaire cite HR 0,67 et seulement **25 % de FEVG < 60 %** (sous-groupe ICFER non lu) | Indirect (FEVG majoritairement préservée ; confiance modérée) |
| **EXPAND TAVR II** (en cours, NCT05149755, vérifié 25 nov. 2026) | ~650 patients ≥ 65 ans, FEVG > 20 %, sténose modérée + facteur de risque ; TAVI auto-expansible + traitement de fond vs traitement de fond | Recrutement clos (statut ACTIVE_NOT_RECRUITING) ; fin principale **septembre 2027**. **Limite clé en ICFER :** exige Vmax ≥ 3,0 m/s ou **gradient moyen ≥ 20 mmHg**, excluant les sténoses modérées bas gradient (< 20 mmHg) fréquentes dans l'ICFER | Partiel / indirect à sa publication (exclut les bas gradients) |
| Cohorte Khan (JACC 2023) | 9 133 patients avec FEVG < 50 %, classés selon la surface valvulaire | Sténose modérée : décès ou hospitalisation IC 62,7 % vs 45,9 % sans sténose (HR apparié 1,24) | Observationnel ; peu de coronaropathies codées |

### Caillots (thrombus VG) et anticoagulants

| Essai / Cohorte | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| WARCEF (NEJM 2012) | 2 305 patients avec FEVG ≤ 35 % en rythme sinusal (~43 % ischémiques) ; warfarine vs aspirine | Décès, AVC ou hémorragie cérébrale inchangé (HR 0,93) ; AVC ischémique divisé par deux (HR 0,52) mais hémorragies majeures doublées (1,78 vs 0,87 pour 100 patients-années) | Direct sur le rythme et la FEVG ; warfarine (non AOD) |
| **RED VELVT** (JAMA Cardiol 2020, cohorte) | 514 patients avec thrombus VG à l'ETT (3 centres US, ~55–65 % de cardiomyopathie ischémique) | Mobilité (HR 1,52 ; 0,80–2,87) et protrusion (HR 1,00) du caillot non prédictives indépendamment d'AVC/embolie ; AOD vs warfarine HR 2,64 (non confirmé par les essais ultérieurs) | Partiel (causes mixtes, observationnel, sous-dimensionné sur la morphologie) |
| COMMANDER-HF (NEJM 2018) | 5 022 patients avec FEVG ≤ 40 %, coronaropathie, rythme sinusal, après aggravation IC ; rivaroxaban (*Xarelto*) 2,5 mg × 2/j vs placebo | Décès, IDM ou AVC : 25,0 % vs 26,2 % (HR 0,94, ns) | ICFER ischémique, mais récemment décompensée |
| COMPASS sous-groupe IC (2019) | Maladie coronaire ou artérielle périphérique stable avec IC (FEVG < 30 % exclue) ; rivaroxaban 2,5 mg × 2/j + aspirine vs aspirine | Événements : 5,5 % vs 7,9 % (HR 0,68) ; dans les 12 % avec FEVG < 40 %, HR 0,88 (0,55–1,42), non concluant | Indirect |
| RIVAWAR (2025) | 261 patients avec thrombus VG post-IDM ; rivaroxaban vs warfarine 12 semaines | Résolution du thrombus : 95,8 % vs 96,6 % (non inférieur) | Thrombus post-IDM récent uniquement ; monocentrique |
| APERITIF (JAMA Cardiol 2026) | 560 patients après STEMI antérieur ; 4 semaines de rivaroxaban faible dose + bithérapie antiagrégante vs bithérapie seule | Thrombus à l'IRM à 1 mois : 13,7 % vs 16,6 % (ns) ; plus de saignements mineurs | Infarctus antérieur aigu uniquement |`,
    },
    {
      headingFr: 'Dysfonction ventriculaire sans symptôme (stade B), sommeil, TA et IRM',
      bodyMarkdownFr: `### Stade B (pré-insuffisance cardiaque)

| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| SOLVD-Prevention (NEJM 1992) | 4 228 patients avec FEVG ≤ 35 % (moyenne 28 %) sans besoin de traitement d'IC, ~83 % ischémiques ; énalapril vs placebo, 37 mois | Formellement neutre sur la mortalité (-8 %, p = 0,30) ; décès ou apparition d'une IC réduits de 29 % | Partiel (stade B uniquement ; tout antécédent de symptôme = stade C ; traitements anciens) |
| STOP-HF (JAMA 2013) | 1 374 adultes à risque sans IC ; dépistage par BNP ≥ 50 pg/mL avec ETT et soins partagés vs suivi usuel | Nouvelle dysfonction VG (avec ou sans IC) : 5,3 % vs 8,7 % ; IC seule non nettement réduite | Dépistage du stade B, non traitement d'une dysfonction connue |
| PONTIAC (JACC 2013) | 300 patients diabétiques de type 2 avec NT-proBNP > 125 sans cardiopathie connue ; titration cardiologique vs suivi usuel | Hospitalisation cardiaque ou décès réduits (HR 0,351) ; petit essai financé par l'industrie | Dépistage et traitement du stade B dans le diabète |
| SOLVD suivi 12 ans (Lancet 2003) | Les deux essais SOLVD, 99,8 % suivis | Essai Prevention : 50,9 % vs 56,4 % de décès ; gain médian de survie de 9,4 mois (poolé) | Idem SOLVD-Prevention |
| SAVE captopril (NEJM 1992) | 2 231 patients 3 à 16 jours après IDM, FEVG ≤ 40 % (moyenne 31 %), sans IC patente ; captopril cible 50 mg × 3/j vs placebo | Mortalité : 20 % vs 25 % (-19 %, p = 0,019) ; IC sévère -37 % ; récidive d'IDM -25 % | Partiel (stade B post-IDM aigu ; distinct de SAVE PPC/CPAP) |
| CAPRICORN (Lancet 2001) | 1 959 patients post-IDM, FEVG ≤ 40 % (moyenne ~33 %), 100 % ischémiques ; carvédilol vs placebo | Formellement neutre : critère principal modifié en cours d'essai (HR 0,92, ns) ; mortalité 12 % vs 15 % (HR 0,77, p = 0,031, sous le seuil ajusté) | Partiel (post-IDM précoce) |
| REVERT (Circulation 2007) | 149 patients, NYHA I, FEVG < 40 % ; métoprolol succinate vs placebo, 12 mois | Dose 200 mg : VG plus petit, FEVG +6 points (critères d'imagerie uniquement) | Petit, pas de critères cliniques |
| PARADISE-MI (NEJM 2021) | 5 661 patients 0,5–7 j post-IDM, FEVG ≤ 40 % et/ou congestion (moyenne 37 %) ; sacubitril/valsartan vs ramipril | Formellement neutre (HR 0,90 ; 0,78–1,04) ; analyses d'événements totaux exploratoires ; hypotension 28,4 % vs 22,0 % | Partiel (post-IDM aigu, pas stade B chronique établi) |
| **EMPACT-MI** (NEJM 2024 ; texte intégral) | 6 522 patients post-IDM sans IC préalable, congestion et/ou FEVG < 45 % (moyenne 40 %, 25,6 % < 35 %), 32 % diabète ; empagliflozine vs placebo | Formellement neutre : 1re hosp IC ou décès **HR 0,90 (0,76–1,06)** ; décès non réduits (HR 0,96) ; 1re hosp IC HR 0,77 et hosp IC totales RR 0,67 (exploratoires) | Indirect (IDM aigu avant IC chronique) |
| **DAPA-MI** (NEJM Evid 2024 ; sous-étude FEVG 2025) | 4 017 patients post-IDM en Suède/RU **sans diabète ni IC chronique** (77,7 % FEVG < 50 % dans la sous-étude) ; dapagliflozine vs placebo (AstraZeneca) | Passage en cours d'essai à un win ratio cardiométabolique à 7 critères favorable (**1,34 ; 1,20–1,50** ; FEVG < 50 % **1,38**), porté par nouveau DT2, NYHA et poids ; **critère dur décès CV/hosp IC neutre (2,5 % vs 2,6 % ; HR 0,95 ; FEVG < 50 % HR 1,12, décès HR 1,14)**. Pool de 5 ECR post-IDM non diabétiques (n = 9 135, 2026) : 1re hosp IC RR 0,74, mais décès/hosp IC neutre (RR 0,90) et mortalité RR 1,06 | Post-IDM aigu sans diabète, pas stade B chronique stable |
| **Méta-analyse IPD Rossello 2025** (Lancet 2025 ; via ESC 2026) | 1 885 patients post-IDM avec **FEVG 40–49 %** sans IC (REBOOT, BETAMI, DANBLOCK, CAPITAL-RCT) ; bêtabloquant oral vs aucun | Décès, nouvel IDM ou IC réduits : **HR 0,75 (0,58–0,97 ; p = 0,031 ; 32,6 vs 43,0/1 000 patients-années)**. Fonde la Classe I B1 ESC 2026 au stade B jusqu'à FEVG < 50 % | Post-IDM FEVG 40–49 % (FEVG supérieure à ~35 %) |

### Apnée du sommeil, tension artérielle et IRM étiologique

| Essai / Étude | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| SERVE-HF (NEJM 2015) | 1 325 patients, FEVG ≤ 45 %, apnée surtout centrale (SACS) ; ASV vs traitement médical seul | Critère principal non amélioré ; surmortalité (mortalité totale HR 1,28 ; cardiovasculaire HR 1,34) | Direct pour ICFER avec SACS ; motif de la contre-indication ESC Classe III |
| ADVENT-HF (Lancet Respir Med 2024) | 731 patients, FEVG ≤ 45 %, 73 % d'apnée obstructive ; ASV nouvelle génération vs soins usuels | Neutre (composite HR 0,95 ; décès HR 0,89) ; aucun signal de danger ; arrêté tôt | Majoritairement SAOS ; appareil différent |
| SAVE PPC/CPAP (NEJM 2016) | 2 717 patients avec maladie coronaire ou cérébrovasculaire et SAOS ; PPC vs soins usuels | Pas moins d'événements cardiaques (HR 1,10) ; hospitalisations IC 17 vs 17 ; amélioration somnolence, humeur et qualité de vie ; observance 3,3 h/nuit ; ≥ 4 h appariés ns (HR 0,80) | Maladie coronaire, mais IC NYHA III–IV et Cheyne-Stokes exclues (1,8 % d'IC) |
| Poolé SAVE, ISAACC, RICCADSA (JAMA 2023) | 4 186 patients avec maladie cardiaque ou vasculaire et SAOS | Résultat randomisé neutre (HR 1,01) ; hosp IC ns (HR 0,91) ; ≥ 4 h/j lié à moins d'événements (HR 0,69, non randomisé) ; seuls 38,5 % atteignaient 4 h | Indirect (essais IC non poolés) |
| SPRINT (NEJM 2015) | 9 361 patients à haut risque ; cible systolique ~120 vs 140 mmHg | Moins d'événements cardiaques (HR 0,75), décès (HR 0,73) et événements IC (HR 0,62) ; plus d'hypotensions, syncopes et atteintes rénales | Le protocole excluait les FEVG < 35 % et l'IC symptomatique récente |
| RIAS (2015) | 100 patients avec rétrécissement aortique modéré ou sévère asymptomatique, FEVG > 50 % ; ramipril vs placebo | Masse du VG réduite de 8,4 g ; bonne tolérance | FEVG normale ; trop petit pour des critères cliniques |
| McCrohon 2003 / Gulati 2013 / Jones 2024 (observationnel IRM) | Caractérisation des cicatrices IRM (LGE) face à la coronarographie et pronostic de la fibrose médio-pariétale | Cicatrice sous-endocardique/transmurale dans 100 % des coronaropathies (McCrohon) ; fibrose médio-pariétale liée à mortalité HR 2,43 et MSC HR 4,61 en CMD (Gulati) ; 14 % de cicatrice non ischémique chez les coronariens (Jones) | Base d'interprétation des cicatrices IRM et de la double pathologie |`,
    },
    {
      headingFr: 'Vaccinations',
      bodyMarkdownFr: `| Essai | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **IAMI** (Circulation 2021 ; texte intégral) | 2 571 patients après infarctus (99,7 %) ou angioplastie à haut risque ; vaccin antigrippal vs placebo ; arrêté tôt (COVID) | Décès, IDM ou thrombose de stent : 5,3 % vs 7,2 % (HR 0,72 ; 0,52–0,99) ; mortalité totale HR 0,59 ; hospitalisations IC numériquement plus élevées (HR 1,77, ns, exploratoire) | Indirect (60,5 % FEVG normale, 2,2 % sévèrement réduite) |
| **IVVE** (Lancet Glob Health 2022 ; texte intégral) | 5 129 patients IC NYHA II–IV (Asie, Moyen-Orient, Afrique) ; vaccin antigrippal annuel vs sérum physiologique | Décès CV/IDM/AVC HR 0,93 (ns) ; décès HR 0,90 et hosp IC HR 0,88 sur toute la période (ns) ; pneumonies HR 0,58 ; hospitalisations toutes causes HR 0,84 ; décès en pic grippal HR 0,79 | Partiellement direct (56 % FEVG < 40 %, 29,8 % ischémiques ; sans iSGLT2) |
| **INVESTED** (JAMA 2021) | 5 260 patients après hospitalisation IC (63 %) ou IDM (FEVG moyenne ~42 %) ; vaccin grippe haute dose vs dose standard | Décès ou hospitalisation cardiorespiratoire HR 1,06 (0,97–1,17) : aucun bénéfice de la haute dose | Partiellement direct |
| **DANFLU-2** (NEJM 2025 ; analyse IC 2025) | 332 438 Danois ≥ 65 ans ; vaccin grippe haute dose vs standard ; essai pragmatique | Hosp grippe/pneumonie efficacité relative (rVE) 5,9 % (ns) ; hosp grippe rVE 43,6 % ; hosp IC rVE 19,5 % (exploratoire) ; décès inchangés. Sous-groupe IC (10 410) : hosp IC RR 0,82 (0,61–1,11) | Partiellement direct (IC par code registre, sans FEVG) |
| **FLUNITY-HD** (Lancet 2025) | 466 320 patients poolés (DANFLU-2 + GALFLU) | Hosp grippe/pneumonie rVE 8,8 % (1,7–15,5 %) ; décès inchangés | Indirect (critère d'âge) |
| **NUDGE-FLU** (Lancet 2023) et **NUDGE-FLU-CHRONIC** (Circ HF 2026) | 964 870 Danois ≥ 65 ans ; 11 727 patients < 65 ans avec IC ; courriers numériques d'incitation | Couverture vaccinale +0,89 point (≥ 65 ans) et +13,5 points chez les < 65 ans avec IC (à partir de 46,9 %) | Couverture vaccinale, non efficacité du vaccin |
| **AUSPICE** (JAMA Cardiol 2025) | 4 725 Australiens de 55–60 ans sans cardiopathie ; vaccin pneumococcique PPSV23 vs placebo | IDM ou AVC HR 0,90 (0,63–1,28), sous-dimensionné | Indirect (sans IC) |
| **DAN-RSV** (NEJM/JAMA 2025 ; analyse IC EJHF 2026) | ~131 000 Danois ≥ 60 ans (analyse étendue 511 535, dont 9 351 avec IC codée) ; vaccin VRS *Abrysvo* vs absence, ouvert, Pfizer | Hosp VRS efficacité 83,3 % ; hosp cardiorespiratoires 9,9 % ; hosp IC 45 vs 43 (aucun effet) ; protection VRS similaire avec ou sans IC | Partiellement direct (IC par code registre, sans FEVG) |`,
    },
    {
      headingFr: 'Insuffisance cardiaque avancée : pompes (LVAD), greffe et inotropes',
      bodyMarkdownFr: `| Essai / Registre | Population et comparaison | Résultat principal | Applicabilité à une ICFER ischémique à ~35 % |
|---|---|---|---|
| **MOMENTUM 3** (NEJM 2019 ; JAMA 2022 à 5 ans ; texte intégral) | 1 028 candidats LVAD (~85 % INTERMACS 1–3, 42–47 % ischémiques, ~61 % thérapie définitive) ; HeartMate 3 vs HeartMate II | Survie à 5 ans **58,4 % vs 43,7 % (HR 0,72 ; 0,58–0,89)** ; thromboses de pompe, AVC et hémorragies tous réduits sous HeartMate 3. Financé par Abbott ; suivi 5 ans observationnel | Indirect (patients beaucoup plus graves ; FEVG non rapportée) |
| **ARIES-HM3** (JAMA 2023) | 628 porteurs de HeartMate 3 sous warfarine ; aspirine vs placebo | Arrêt de l'aspirine non inférieur (74 % vs 68 % sans événement majeur hémorragique ou thrombotique à 12 mois) ; hémorragies non chirurgicales RR 0,66 ; aucune hausse d'AVC | Indirect (porteurs de LVAD uniquement) |
| **ROADMAP** (JACC HF 2017) | 200 patients IC avancée ambulatoires hors inotropes ; HeartMate II vs médicaments (non randomisé) | Survie avec gain de marche 30 % vs 12 % à 2 ans ; survie ITT 70 % vs 63 % (ns) ; effets indésirables 1,89 vs 0,83/patient-an ; bénéfice uniquement en INTERMACS 4 | Indirect (pompe obsolète ; non randomisé) |
| **AMBU-VAD** (NCT04768322, coordination française, en cours) | 92 patients, **FEVG ≤ 35 %**, INTERMACS 4–6 ; HeartMate 3 précoce vs médicaments | **Pas encore de résultats.** En recrutement ; fin attendue en 2029 | Le plus proche d'une applicabilité directe à sa publication |
| **LION-HEART** (EJHF 2018 ; texte intégral) | 69 patients ambulatoires, FEVG ~26 %, ~61 % ischémiques ; lévosimendan toutes les 2 semaines vs placebo | Baisse du NT-proBNP ; hospitalisations IC HR 0,25 (0,11–0,56) ; décès 31 % vs 38 % (ns). Petit essai pilote financé par Orion | Indirect (patients beaucoup plus sévères) |
| **Méta-analyse lévosimendan répété** (Silvetti 2024 ; texte intégral) | 9 petits ECR, 680 patients | Mortalité RR 0,62 (0,42–0,90) ; mais LevoRep, LAICA et LeoDOR étaient individuellement neutres ; auteur lié au fabricant | Indirect |
| **GALACTIC-HF, sous-groupe IC sévère** (Felker, JAMA Cardiol 2022) | 2 258 patients NYHA III–IV, FEVG ≤ 30 %, hospitalisation IC récente ; omécamtiv mécarbil vs placebo | HR 0,80 (0,71–0,90) vs 0,99 dans le reste (interaction p = 0,005) ; décès CV HR 0,88 (ns). Non autorisé (FDA 2023, retrait UE 2024) ; COMET-HF en cours | Indirect : une FEVG ~35 % se situe dans le groupe sans bénéfice |
| **Essai greffe cardiaque DCD** (Schroder, NEJM 2023) | 180 greffés ; donneurs après arrêt circulatoire (DCD) vs mort encéphalique | Survie ajustée à 6 mois 94 % vs 90 %, non inférieure. Financé par TransMedics, suivi court | Indirect |
| **Registre HELP-HF** (Circ HF 2023) | 1 149 patients ambulatoires italiens avec ≥ 1 critère « I NEED HELP », FEVG médiane 35 % | Chaque critère supplémentaire augmente décès ou hospitalisation IC : HR 1,19 (1,11–1,27) | Partiel (FEVG concordante ; causes non séparées) |
| **STICH SVR post hoc** (Michler 2013 ; texte intégral) | 555 des 1 000 patients de STICH hypothèse 2 avec examens appariés | Reconstruction supérieure au pontage seul uniquement si VTSi ≤ 70 mL/m² à 4 mois ; sous-groupe post hoc non randomisé | Population directe ; générateur d'hypothèses |`,
    },
    {
      headingFr: 'Arythmies ventriculaires et antiarythmiques',
      bodyMarkdownFr: `| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **VANISH** (NEJM 2016) | 259 patients, **100 % post-infarctus**, FEVG moyenne **31 %**, 100 % DAI, TV récidivante sous antiarythmique (65 % sous amiodarone) ; ablation par cathéter vs escalade médicamenteuse | Décès, orage rythmique ou choc approprié **59,1 % vs 68,5 % (HR 0,72 ; 0,53–0,98 ; p = 0,04)** ; **mortalité identique (27,3 % vs 27,6 % ; HR 0,96)** ; bénéfice surtout chez les patients en échec d'amiodarone. En ouvert, pré-ARNI/iSGLT2 | Direct (TV ischémique réfractaire aux antiarythmiques) |
| **VANISH2 + sous-étude JACC 2026** (NEJM 2025 ; JACC janv. 2026) | 416 patients, **100 % post-infarctus**, FEVG moyenne **34 %**, 92 % NYHA I–II, 94 % hommes, 100 % DAI, naïfs d'antiarythmique ; ablation de 1re ligne vs sotalol ou amiodarone, médiane 4,3 ans | Critère principal **50,7 % vs 60,6 % (HR 0,75 ; 0,58–0,97 ; p = 0,03 ; NNT ~10)** — **pas de gain de mortalité** (totale HR 0,84, CV HR 1,23, orage HR 0,95, chocs HR 0,75 ns), porté par les **TV traitées sous le seuil DAI (4,4 % vs 16,4 %, HR 0,26)** et la **strate sotalol (n = 199 : 46 % vs 59 %, HR 0,64, p = 0,02)**. **Strate amiodarone (n = 217) :** efficacité comparable (55 % vs 61 %, **HR 0,86, ns**), mais l'amiodarone entraînait nettement plus de **décès non cardiaques (16,5 % vs 5,6 %)**, pneumonies (11,9 % vs 3,7 %), insuffisances respiratoires (11,0 % vs 4,6 %), hosp IC (31,2 % vs 19,4 %) et fibroses pulmonaires (4,6 % vs 0 %). Mortalité à 30 j de l'ablation **1,0 %** ; en ouvert, 6 % de femmes | Direct (TV ischémique de 1re ligne avec DAI) |
| **PARTITA** (Circulation 2022) | Phase B **n = 47** randomisés (sur 517 ; 81 % ischémiques, FEVG moyenne 32 %) ; ablation immédiate après 1er choc approprié vs attente jusqu'à orage (pas d'amiodarone dans le groupe témoin) | Décès ou hospitalisation IC **4 % (1/23) vs 42 % (10/24) (HR 0,11 ; 0,01–0,85 ; p = 0,034)** ; décès 0 vs 8 (seuls 3 cardiaques confirmés) ; chocs 9 % vs 42 %. **Limites majeures :** très petit effectif (n = 47), arrêt précoce, forts déséquilibres initiaux en faveur de l'ablation (diabète 19 % vs 41 %, MRC 14 % vs 27 %, BPCO 9,5 % vs 23 %) | Partiel (générateur d'hypothèses pour la mortalité) |
| **BERLIN VT** (Circulation 2020) | 159 analysés (163 randomisés), **100 % post-infarctus**, FEVG **30–50 %** (moyenne 41 %) ; ablation préventive avant DAI vs attente du 3e choc | **Arrêté tôt pour futilité :** décès ou hospitalisation imprévue AV/IC **32,9 % vs 27,7 % (HR 1,09 ; 0,62–1,92 ; p = 0,77)** ; excès numérique de décès (7,9 % vs 2,4 %) et d'hosp IC (10,4 % vs 2,3 %) malgré moins de thérapies DAI secondaires (34,2 % vs 47,0 %). En ouvert, Biotronik | Partiel (exclut FEVG < 30 % ; plaide contre l'ablation prophylactique systématique) |
| **PAUSE-SCD** (Circulation 2022) | 121 patients en Asie de l'Est (**35 % ischémiques**, 35 % ARVC, 30 % non ischémiques, FEVG médiane 40 %, âge médian 55 ans) ; ablation au moment de la pose de DAI vs médical | Critère composite **49,3 % vs 65,5 % (HR 0,58 ; 0,35–0,96 ; p = 0,04)**, porté uniquement par récidives TV (HR 0,51) et chocs (10,0 % vs 24,6 %) — **aucun bénéfice sur hosp CV (HR 0,82) ni mortalité (HR 1,40)** ; 8,3 % de complications | Indirect / partiel (minorité d'ischémiques, forte part ARVC) |
| **Méta-analyses Falconer 2026 & Façanha 2026** (Eur Heart J Open janv. 2026 ; texte intégral) | 13 ECR d'ablation de TV (**n = 1 735, 94,4 % d'hommes**) ; pool ischémique naïf d'antiarythmique **Façanha 2026** (3 ECR, n = 618) | Réduction des chocs appropriés (**RR 0,67 ; NNT 10,8**), toute thérapie DAI (RR 0,74), orage rythmique (**RR 0,78 ; NNT 17,9**), récidive TV (RR 0,83) et hosp CV (RR 0,78), **sans réduction significative de la mortalité totale (RR 0,87 ; 0,70–1,08)** ni CV (RR 0,89) (GRADE faible à modéré ; ouvert, < 10 % femmes) | Direct à partiel (majoritairement ischémique, < 10 % femmes) |
| **OPTIC** (JAMA 2006) | Porteurs de DAI randomisés entre amiodarone + bêtabloquant, sotalol ou bêtabloquant seul | Amiodarone + bêtabloquant réduit les chocs DAI vs bêtabloquant seul (**10,3 % vs 38,5 %, HR 0,27**) et vs sotalol (**HR 0,43**) ; sotalol vs bêtabloquant limite (HR 0,61, p = 0,055 ; 23,5 % d'arrêts) | Partiel (pré-quadrithérapie et ancienne programmation DAI) |
| **CAST** (NEJM 1991) | 1 498 patients post-IDM avec ESV asymptomatiques ou peu symptomatiques ; classe IC (encaïnide ou flécaïnide) vs placebo | **Arrêté tôt pour danger :** **triplement des décès arythmiques (43 vs 16, p = 0,0004)** et des décès cardiaques non arythmiques (17 vs 5, p = 0,01) sur 10 mois malgré la suppression des ESV. Fonde l'interdiction Classe III des antiarythmiques de classe IC après infarctus ou en cardiopathie structurelle | Direct sur le mécanisme de danger post-IDM |
| **ANDROMEDA** (NEJM 2008) | 627 patients hospitalisés avec dysfonction VG sévère et IC symptomatique ; dronédarone (*Multaq*) vs placebo | **Arrêté tôt à 2 mois pour danger :** mortalité plus que doublée (**8,1 % vs 3,8 %, HR 2,13, p = 0,03**), surtout par aggravation d'IC. Fonde la contre-indication de la dronédarone dans l'ICFER symptomatique ou sévère | Direct sur le danger dans l'ICFER |`,
    },
    {
      headingFr: 'Médecine péri-opératoire et règles « jours de maladie »',
      bodyMarkdownFr: `| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **STOP-or-NOT** (JAMA 2024 ; texte intégral) | 2 222 patients dans 40 hôpitaux français (seulement **6 % d'IC chronique**, FEVG médiane 55–57 %, **0 % d'ARNI**) ; arrêt IEC/ARA2 48 h avant chirurgie vs poursuite | Décès ou complications majeures à 28 j **22 % vs 22 % (RR 1,02 ; 0,87–1,19)** et **IRA 11 % vs 11 %** ; plus d'hypotension per-opératoire sous poursuite (54 % vs 41 %, +3,7 min PAM < 60), aisément traitée ; reprise médiane à J1 | Indirect (6 % IC, FEVG préservée, 0 % ARNI) |
| **SPACE** (EHJ 2024 ; texte intégral) | 262 opérés non cardiaques au RU (**< 10 % IC**, 0 % ARNI) ; arrêt pharmacocinétique 24–48 h des IEC/ARA2 vs poursuite | Lésion myocardique à 48 h neutre (48,3 % vs 41,3 %) ; l'arrêt a **plus que doublé l'hypertension aiguë sévère** (> 180/100 : **12,4 % vs 5,3 %**) | Indirect (< 10 % IC, 0 % ARNI) |
| **POISE-3** (Ann Intern Med 2023) | 7 490 opérés non cardiaques (**IC significative exclue**) ; stratégie évitant l'hypotension (pause SRAA) vs évitant l'HTA (poursuite) | Événements vasculaires majeurs à 30 j **13,9 % vs 14,0 % (HR 0,99)** ; aucun avantage rénal | Indirect (IC exclue) |
| **Fink 2022** (Kidney Med 2022 ; texte intégral) | 315 vétérans US avec MRC stades 3–5 (80,6 % bloqueur SRAA, 0 % iSGLT2, IC/FEVG non rapportées ; NIDDK, sous-recruté sur 600 prévus) ; carte d'arrêt « jours de maladie » + appels hebdomadaires vs soins usuels, 6 mois | **Zéro bénéfice rénal** (DFGe -0,71 vs -0,72, p = 0,99 ; IRA biologique 2,9 % vs 2,9 %) ; tendance à davantage de consultations/urgences aiguës (**11,5 vs 8,4/100 pt-mois ; aPR 1,30 ; 0,96–1,76**) ; sur 33 épisodes réels, seulement **42,4 %** (14/33) correctement exécutés, **21,2 %** (7/33) ont arrêté des médicaments non concernés, tout en restant sûrs d'eux à 100 % | Indirect (MRC, IC/FEVG non rapportées ; direct sur le risque d'erreur en polymédication) |
| **SMART-C** (Lancet 2022 ; texte intégral) | 13 ECR iSGLT2 en double aveugle, **90 409 patients** (dont 8 474 ICFER de DAPA-HF et EMPEROR-Reduced ; 74 804 DT2, 15 605 non diabétiques) | **IRA réduites de 23 % au total (RR 0,77 ; 0,70–0,84)** — DT2 RR 0,79, non diabétiques **RR 0,66**. Acidocétose doublée chez les diabétiques (**RR 2,12 ; 1,49–3,04**, ~1 excès/1 000 patients-années) contre **1 seul événement sur ~30 000 patients-années non diabétiques**. (Essais hospitaliers respiratoires aigus **DARE-19 / RECOVERY / ACTIV-4a**, n = 6 096 : acidocétose 7/3 013 [0,23 %] vs 2/3 062 [0,07 %], zéro excès d'IRA sous surveillance hospitalière) | Direct pour les taux chroniques IRA/acidocétose ; indirect pour une gastro-entérite non surveillée à domicile |`,
    },
    {
      headingFr: 'Autres comorbidités (goutte, anémie, BPCO) et thérapies cellulaires',
      bodyMarkdownFr: `### Goutte, anémie et BPCO

| Essai | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **CARES** (NEJM 2018) | 6 190 patients avec goutte et MCV établie (~18,5–20 % d'antécédent IC, FEVG non rapportée) ; fébuxostat (*Adenuric*) 40–80 mg vs allopurinol, médiane 32 mois | MACE non inférieur (10,8 % vs 10,4 %, **HR 1,03**), mais **décès CV plus élevé (HR 1,34 ; 1,03–1,73 ; mort subite 2,7 % vs 1,8 %)** et **mortalité totale HR 1,22 (1,01–1,47)**. Pertes de suivi majeures (**56,6 % d'arrêts, 45,0 % perdus de vue**) ; à l'origine du *Boxed Warning* FDA | Indirect / partiel (FEVG inconnue, 45 % d'attrition) |
| **FAST** (Lancet 2020) | 6 128 Européens ≥ 60 ans avec goutte sous allopurinol + ≥ 1 facteur de risque CV (33,4 % MCV ; **IC sévère et IDM/AVC < 6 mois exclus** ; ~6 % de sorties) ; fébuxostat 80–120 mg vs allopurinol, médiane 4,0 ans | MACE non inférieur (**HR ajusté 0,85 ; 0,70–1,03**) ; décès CV sous traitement HR 0,91 (0,66–1,27), mortalité totale HR 0,75 (0,59–0,95) | Indirect (IC sévère exclue ; un tiers de MCV seulement) |
| **EXACT-HF** (Circulation 2015 ; texte intégral) | 253 ICFER symptomatiques (**FEVG ≤ 40 %, médiane 25 %, 53 % ischémiques**, 98 % NYHA II–III), acide urique ≥ 9,5 mg/dL sans traitement actif de goutte ; allopurinol 600 mg/j vs placebo, 24 sem. | Acide urique abaissé de 3,5 à 4,2 mg/dL, **zéro bénéfice clinique** (aggravés 45 % vs 46 %, p = 0,68 ; pas de gain KCCQ/marche/FEVG ; hosp IC HR 0,67 ns) ; **éruptions cutanées 10 % vs 2 % (p = 0,01)** | Direct sur la population (pré-ARNI/iSGLT2, petit et court) |
| **ALL-HEART** (Lancet 2022) | 5 721 patients britanniques ≥ 60 ans avec **coronaropathie sans goutte** (**NYHA III–IV exclus**, FEVG non rapportée) ; allopurinol jusqu'à 600 mg/j vs soins usuels, 4,8 ans | **Neutre :** MACE 11,0 % vs 11,3 % (**HR 1,04 ; 0,89–1,21 ; p = 0,65**) ; mortalité totale 10,1 % vs 10,6 % (HR 1,02). Plaide contre le traitement de l'hyperuricémie asymptomatique | Indirect / partiel (100 % coronaropathie, IC sévère exclue) |
| **RED-HF** (NEJM 2013 ; Bello 2015 texte intégral) | 2 278 **ICFER symptomatiques (FEVG ≤ 40 %, ~71 % coronariens)**, Hb 9,0–12,0 g/dL, CST ≥ 15 % ; darbépoétine alfa (ASE) vs placebo, médiane 28 mois | **Aucun bénéfice** (décès ou hosp IC **50,7 % vs 49,5 %, HR 1,01 ; p = 0,87**) et **surrisque thrombotique :** thromboembolies **13,5 % vs 10,0 % (p = 0,01)** ; AVC 3,7 % vs 2,7 % (poolé avec TREAT dans DT2+MRC, n = 4 854 : **AVC HR 1,94 ; p < 0,001**). Fonde la contre-indication Classe III / Harm des ASE dans l'IC | Direct (ICFER majoritairement ischémique, pré-ARNI/iSGLT2) |
| **BLOCK COPD** (NEJM 2019 ; texte intégral) | 532 patients avec BPCO modérée à sévère (VEMS moyen 41 %) et **AUCUNE indication cardiaque de bêtabloquant (FEVG < 40 % et IDM récent exclus)** ; métoprolol succinate vs placebo | Arrêté tôt : délai d'exacerbation globale neutre (HR 1,05), mais **hospitalisations pour exacerbation sévère presque doublées (HR 1,91 ; 1,29–2,83)** | Extrapolé / population exclue pour l'ICFER (prouve uniquement de ne pas prescrire de bêtabloquant pour une BPCO isolée) |

### Cellules souches et thérapies régénératives

Aucun de ces traitements n'est autorisé dans l'Union européenne (liste EMA des médicaments de thérapie innovante, juin 2026).

| Essai / Revue | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **DREAM-HF** (JACC 2023) | 565 patients randomisés (537 analysés), ICFER ischémique ou non, NYHA II–III ; cellules précurseurs mésenchymateuses de donneur vs procédure factice (sham) ; ~30 mois ; Mesoblast | **Négatif :** événements IC récurrents HR 1,17 (0,81–1,69), p = 0,41 ; critères secondaires également négatifs. Infarctus/AVC HR 0,42 et sous-groupe CRP purement exploratoires | Partiel (causes mixtes) |
| **CONCERT-HF** (Eur J Heart Fail 2021) | 125 patients avec ICFER ischémique, FEVG moyenne 28,6 %, cicatrice IRM ; cellules stromales autologues et/ou cellules c-kit vs placebo | Aucune différence sur la FEVG, les volumes du VG, la cicatrice, la marche de 6 minutes ou le pic de VO2. Suspendu en 2018 après des demandes de rétractation d'articles fondant l'hypothèse c-kit | Direct (phase II) |
| **CardiAMP-HF** (ACC 2025 ; dépêche spécialisée) | 115 patients analysés, ICFER ischémique, FEVG 20–40 % ; cellules autologues de moelle osseuse vs procédure factice / placebo | Neutre : win ratio 1,01, p = 0,954 ; l'essai de suivi CardiAMP HF II sélectionne un sous-groupe post hoc selon le NT-proBNP | Direct |
| Revue Cochrane cellules souches (2016) | 38 essais randomisés, 1 907 personnes avec cardiopathie ischémique chronique, IC ischémique ou angor réfractaire ; cellules autologues de moelle osseuse | Mortalité à long terme RR 0,42 (9 petits essais, 491 personnes) ; hospitalisations IC RR 0,63 (ns) ; aucun gain durable de FEVG à l'IRM ; preuves toutes de faible qualité | Partiel (population mixte, époque antérieure) |`,
    },
  ],
  relatedArticleSlugs: [
    'lire-les-preuves-medicales',
    'essais-cliniques-en-cours-et-a-suivre',
    'comprendre-le-diagnostic',
    'revascularisation-pontage-stents',
    'viabilite-myocardique',
    'these-viabilite-et-survie-revascularisation',
    'angor-et-medicaments-anti-angineux',
    'antiplaquettaires-bitherapie-et-protection-gastrique',
    'escalade-et-resistance-aux-diuretiques',
    'dispositifs-cardiaques-dai-crt',
    'these-benefice-dai-sous-quadritherapie',
    'arythmies-ventriculaires-et-antiarythmiques',
    'medicaments-insuffisance-cardiaque',
    'iec-ara2-et-arni-sacubitril-valsartan',
    'betabloquants-insuffisance-cardiaque',
    'arm-steroidiens-spironolactone-eplerenone',
    'inhibiteurs-sglt2-insuffisance-cardiaque',
    'insuffisance-cardiaque-fevg-amelioree',
    'glossaire-cardiologie',
    'nutrition-et-complements-insuffisance-cardiaque',
    'tableau-preuves-nutrition-complements',
    'alimentation-cardioprotectrice',
    'poids-obesite-et-denutrition',
    'medicaments-glp1-et-incretines',
    'carence-martiale-et-fer-iv',
    'these-fer-iv-et-isglt2-quadritherapie',
    'sel-et-liquides-insuffisance-cardiaque',
    'omega-3-huile-de-poisson',
    'these-omega3-faible-dose-risque-fa',
    'coenzyme-q10',
    'these-coq10-mortalite-icfer-moderne',
    'vitamine-d-insuffisance-cardiaque',
    'vitamines-b-insuffisance-cardiaque',
    'readaptation-cardiaque-et-activite-physique',
    'musculation-vs-endurance-readaptation-cardiaque',
    'depression-et-sante-emotionnelle',
    'soins-de-support-et-anticipation',
    'maladies-associees',
    'fibrillation-atriale-insuffisance-cardiaque',
    'fuite-mitrale-secondaire',
    'diabete-insuffisance-cardiaque',
    'goutte-bpco-thyroide-et-autres-comorbidites',
    'efx-strain-troponine-et-imagerie-cardiaque',
    'cardiomyopathie-ischemique',
    'anevrisme-ventricule-gauche',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'finerenone-et-nouveaux-arm',
    'gilet-defibrillateur-portable',
    'telesurveillance-insuffisance-cardiaque',
    'stenose-aortique-fevg-reduite',
    'cholesterol-et-prevention-secondaire',
    'occlusion-coronaire-chronique-cto',
    'thrombus-vg-et-anticoagulants',
    'dysfonction-vg-asymptomatique-stade-b',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'tension-arterielle-insuffisance-cardiaque',
    'confirmer-la-cause-dysfonction-vg',
    'cellules-souches-et-therapies-regeneratives',
    'vaccinations-insuffisance-cardiaque',
    'insuffisance-cardiaque-avancee-stade-d',
    'assistance-circulatoire-lvad',
    'transplantation-cardiaque-france',
    'inotropes-insuffisance-cardiaque-avancee',
    'chirurgie-soins-dentaires-et-jours-de-maladie',
    'these-jours-de-maladie-sraa-vs-isglt2',
  ],
  sources: [
    {
      label: 'Revascularisation, viabilité myocardique, CTO, angor et antiplaquettaires (STICH/STICHES, Bonow 2015, PARR-2, HEART, REVIVED-BCIS2 + complétude 2024, Liga 2023, Allman 2002, CHIP-BCIS3, STICH3, ISCHEMIA-CTO, ORBITA-CTO, RAID, HOST-EXAM 10 ans, SMART-CHOICE 3)',
      detail: 'Comparaison pontage, stents, tests de viabilité, assistance Impella, anti-angineux et stratégies antiplaquettaires/IPP',
    },
    {
      label: 'Quatre piliers, traitements additionnels, diurétiques et remodelage (CONSENSUS, SOLVD, CHARM, PARADIGM-HF, MERIT-HF, CIBIS-II, COPERNICUS, Cleland 2018, RALES, EPHESUS, EMPHASIS-HF, Jhund 2024, DAPA-HF, EMPEROR-Reduced, Zannad 2020, H-HeFT, STRONG-HF, VICTOR/DIGIT-HF, TRANSFORM-HF, Silverdal 2020/2023, PROVE-HF, Codina 2021)',
      detail: 'Essais pivots des 4 classes de fond, traitements additionnels, escalade diurétique, trajectoires de FEVG et scores de risque',
    },
    {
      label: 'Rythme, DAI sous quadrithérapie, ablation de TV et valves (MADIT-I/II 8 ans, SCD-HeFT 11 ans, DINAMIT/IRIS, DANISH 13 ans, SwedeHF, PROFID, Rohde 2020, Aktas 2026, PROVE-HF/egnite, VEST, PRAETORIAN, VANISH/VANISH2, COAPT, RESHAPE-HF2, CASTLE-AF, TAVR UNLOAD, PROGRESS NEJM 2026)',
      detail: 'Mort subite et bénéfice du DAI à l’ère moderne, gilet défibrillateur, ablation de TV vs antiarythmiques, IM secondaire, FA et rétrécissement aortique',
    },
    {
      label: 'Fer IV, compléments, nutrition, GLP-1 et stade B (Anker 2025, Mandal 2026, FAIR-HF2, HEART-FID + phosphate 2025, IRONMAN, Ponikowski 2023, GISSI-HF FA, VITAL Rhythm, OMEMI, Q-SYMBIO Europe, Cochrane 2021, NIHR HTA 2022, CORAL/DANUTRIO-HF, SOUL, SURPASS-CVOT, DAPA-MI, Rossello 2025)',
      detail: 'Fer IV à l’ère des iSGLT2, risque de FA des oméga-3, évaluation CoQ10, incrétines et essais post-IDM au stade B',
    },
    {
      label: 'Vaccinations, santé mentale, soins palliatifs, péri-opératoire et comorbidités (IAMI, IVVE, INVESTED, DANFLU-2, DAN-RSV, Hopeful Heart, PAL-HF, CASA, ENABLE CHF-PC, Kim 2026, TEACH, STOP-or-NOT, SPACE, Fink 2022, SMART-C, CARES, FAST, EXACT-HF, ALL-HEART, RED-HF, BLOCK COPD)',
      detail: 'Vaccins grippe/VRS/pneumocoque, soins collaboratifs et palliatifs, gestion péri-opératoire et jours de maladie, goutte, anémie et BPCO',
    },
  ],
  disclaimerType: 'medical',
};
