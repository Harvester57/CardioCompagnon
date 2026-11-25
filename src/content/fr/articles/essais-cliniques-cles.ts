import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'essais-cliniques-cles',
  sourceWikiPath: 'wiki/references/key-trials.md',
  titleFr: 'Les grands essais cliniques de référence',
  category: 'references',
  asOf: '2026-11-25',
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
  ],
  aliases: [
    'Noms des essais cliniques',
    'Tableau des preuves',
    'Études de référence cardiologie',
    'Grands essais insuffisance cardiaque',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Répertoire synthétique de l'ensemble des grands essais cliniques et analyses cités dans les comptes rendus de cardiologie et dans cette application : qui a été étudié, ce qui a été comparé, le résultat principal et le degré d'applicabilité directe à une cardiomyopathie ischémique avec FEVG autour de 35 %.",
  sections: [
    {
      headingFr: 'Comment lire ces tableaux',
      bodyMarkdownFr:
        "Les noms d'essais cliniques reviennent fréquemment dans les courriers spécialisés et les recommandations. Chaque tableau indique la population étudiée, la comparaison testée, le résultat principal (avec les rapports de risque **HR**, risques relatifs **RR** ou odds ratios **OR** et la mention *ns* lorsque le résultat n'est pas statistiquement significatif) ainsi que son degré d'applicabilité à la **cardiomyopathie ischémique avec FEVG autour de 35 %**. « Direct » signifie que l'essai a inclus précisément cette population ; « Indirect » signale une population mixte ou différente.",
    },
    {
      headingFr: 'Revascularisation (pontage aorto-coronarien et stents)',
      bodyMarkdownFr: `| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **STICH / STICHES** (NEJM 2016) | 1 212 patients, maladie coronaire accessible au pontage, FEVG ≤ 35 % ; pontage + médicaments vs médicaments seuls ; ~10 ans | Mortalité toutes causes : 58,9 % vs 66,1 % (HR 0,84). Le pontage a amélioré la survie à long terme | Direct (époque antérieure) |
| **REVIVED-BCIS2** (NEJM 2022) | 700 patients, FEVG ≤ 35 %, atteinte coronaire étendue, myocarde viable ; angioplastie (stents) + traitement optimal vs traitement seul ; médiane 41 mois | Décès ou hospitalisation pour IC : 37,2 % vs 38,0 % (HR 0,99) ; pas de gain de FEVG. Complications rares (hémorragies majeures ~2 %) | Direct |
| Sous-étude REVIVED ETT vs IRM (2025) | 373 patients de REVIVED ayant eu les deux examens | FEVG moyenne 31,4 % (ETT) vs 25,8 % (IRM) ; un tiers des patients < 35 % à l'IRM étaient ≥ 35 % à l'ETT | Direct |
| Analyse normalisation FEVG STICH (2021) | Patients de STICH avec ETT de suivi | FEVG > 50 % chez ~2 % à 4 mois, ~5,5 % à 2 ans ; normalisation à 2 ans associée à une mortalité plus faible (HR 0,41) | Direct |
| Analyse arythmies REVIVED (Circulation 2023) | Les 700 patients de REVIVED | Décès ou mort subite avortée : 41,6 % (stents) vs 40,2 % (HR 1,03). Les stents n'ont pas réduit les arythmies graves | Direct |
| Données poolées REVIVED + STICHES (2025) | 1 912 patients des deux essais | Sous traitement médical seul, décès ou hospitalisation IC bien plus bas dans l'essai récent (HR ajusté 0,60). Comparaisons pontage vs stent uniquement exploratoires | Direct (observationnel entre époques) |
| STICH premier rapport (NEJM 2011) | Mêmes 1 212 patients, médiane 56 mois | Mortalité : 36 % vs 41 % (pas encore significatif). Mortalité à 30 jours : 4 % après chirurgie vs 1 % (HR 3,12) ; 17 % de passage du bras médical vers la chirurgie | Direct (époque antérieure) |
| STICH par âge (Petrie 2016) | Analyse par tranche d'âge dans STICH | Bénéfice sur la mortalité cardiovasculaire similaire à tous les âges ; FA post-opératoire, aggravation rénale et recours aux inotropes augmentaient avec l'âge | Direct (époque antérieure) |
| STICH viabilité et angor (Jolicoeur 2015 ; Panza 2019) | 601 patients avec test de viabilité ; ensemble des patients selon l'angor | Ni la viabilité ni la présence d'angor n'ont prédit le bénéfice du pontage | Direct (époque antérieure) |`,
    },
    {
      headingFr: 'Défibrillateurs (DAI), gilet portable et mort subite',
      bodyMarkdownFr: `| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **MADIT-II** | 1 232 patients, tous ischémiques, FEVG ≤ 30 % | Le DAI a réduit la mortalité toutes causes de 31 % | Direct (avant les traitements modernes) |
| **SCD-HeFT** | FEVG ≤ 35 %, causes ischémiques et non ischémiques (884 ischémiques) | Le DAI a réduit la mortalité toutes causes de 23 % vs amiodarone | Partiellement direct |
| DINAMIT, IRIS | DAI précoce après infarctus aigu (1 572 patients) | Aucun bénéfice de survie (HR 1,05). Explique le délai minimal ≥ 40 jours après infarctus | Direct (pour le délai) |
| Méta-analyse Shun-Shin (EHJ 2017) | 11 essais de DAI, 8 567 patients | Cause ischémique, DAI en procédure dédiée : mortalité HR 0,76 | Direct |
| **PROFID** analyse poolée (EHJ 2024) | 140 204 patients post-infarctus (observationnel) | Mort subite à 3 ans : 3,41 % (FEVG ≤ 35 %) vs 0,87 % (> 35 %) ; la FEVG prédit mal le risque individuel | Direct, mais non randomisé sur le DAI |
| MADIT-CRT | 1 820 patients, NYHA I–II | Le CRT-D a réduit décès ou événements IC de 34 % | Indirect |
| Analyse poolée Shen (NEJM 2017) | 40 195 patients ICFER sans DAI dans 12 essais, 62 % ischémiques | Mort subite annuelle passée de 6,5 à 3,3 pour 100 patients entre RALES et PARADIGM-HF | Partiellement direct (observationnel) |
| EU-CERT-ICD (EHJ 2020) | 2 247 patients européens, 65 % ischémiques, FEVG ≤ 35 % ; DAI vs sans DAI (observationnel) | Mortalité toutes causes -27 % avec DAI (HR 0,73) ; sous-groupe ischémique HR 0,79 (ns) | Partiellement direct (sans iSGLT2) |
| CMR GUIDE (JAMA 2026) | 353 patients, FEVG **36–50 %** avec cicatrice IRM ; DAI vs moniteur implantable | Critère principal : 7,8 % vs 9,2 % (ns) ; mort subite 1,7 % vs 5,8 % | Indirect (FEVG plus élevée) |
| **PROFID-EHRA** (en cours) | Post-infarctus, FEVG ≤ 35 %, traitement optimal ; DAI vs absence de DAI ; cible 3 595 patients | **Pas encore de résultats.** Fin estimée : novembre 2027 | Direct à sa publication |
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
| PARADIGM-HF | 8 399 patients ICFER ; sacubitril/valsartan (Entresto) vs énalapril | Base de la modélisation combinée ci-dessous. Risque résiduel de mort subite : 3,3 pour 100 patients-années sous traitement moderne | Indirect (causes mixtes) |
| DAPA-HF | 4 744 patients ICFER ; dapagliflozine (Forxiga) vs placebo | Base de la modélisation combinée | Indirect |
| EMPHASIS-HF | 2 737 patients ≥ 55 ans, symptômes légers, FEVG basse ; éplérénone (Inspra) | Base de la modélisation (bras placebo comme population de référence) | Indirect |
| Modélisation Vaduganathan (Lancet 2020) | Combinaison des trois essais ci-dessus | Quadrithérapie vs bithérapie : HR 0,38 pour décès CV ou hospitalisation IC ; 1,4 à 6,3 années de vie gagnées selon l'âge | Indirect, modélisé |
| PARADIGM-HF selon la cause (post hoc) | 8 399 patients, 60 % ischémiques | Taux bruts d'événements plus élevés dans la cause ischémique, similaires après ajustement. Bénéfice de l'ARNI identique quelle que soit la cause | Direct (sous-groupe ischémique) |
| STRONG-HF (Lancet 2022) | 1 078 patients à la sortie d'une IC aiguë ; FEVG moyenne 36 % (68 % ≤ 40 %), 48 % ischémiques ; 65 % inclus en Russie | Bêtabloquant, bloqueur du SRAA et ARM à pleine dose en 2 semaines (sans iSGLT2), visites à S1/S2/S3/S6 : décès ou réhospitalisation IC à 6 mois 15,2 % vs 23,3 %, porté par les réhospitalisations IC (9,5 % vs 17,1 %) ; mortalité non significativement réduite (8,5 % vs 10,0 %, p = 0,42) | Partiellement direct (après hospitalisation ; en ouvert, arrêté précocement) |
| VICTORIA (NEJM 2020) | 5 050 patients après aggravation récente, FEVG < 45 % ; vériciguat (Verquvo) vs placebo | Décès CV ou hospitalisation IC : 35,5 % vs 38,5 % (HR 0,90) ; décès CV non réduit ; pas de bénéfice à NT-proBNP très élevé | Partiellement direct (post-aggravation) |
| VICTOR (Lancet 2025) | 6 105 patients ambulatoires stables, FEVG ≤ 40 %, traitement moderne ; vériciguat vs placebo | Critère principal non réduit (HR 0,93, ns) ; décès CV HR 0,83 et mortalité totale HR 0,84 en critères secondaires nominaux. Décès CV si coronaropathie HR 0,85 (0,70–1,03), sans coronaropathie 0,79 | Partiellement direct |
| VICTORIA + VICTOR poolé (Lancet 2025) | 11 155 patients (données individuelles), FEVG moyenne 30 %, 64 % coronariens | Décès CV ou hospitalisation IC HR 0,91 (NNT 37/an) ; décès CV HR 0,89, mortalité totale HR 0,90 ; pas d'interaction selon l'essai ; effet plus net pour NT-proBNP ≤ 6 000 pg/mL (HR 0,86). Mené par le promoteur, valeurs p descriptives | Complémentaire uniquement (poolé) |
| VICTOR selon le traitement de fond (EJHF 2026) | 6 105 patients de VICTOR (64,6 % coronariens) | Effet neutre du vériciguat inchangé selon la présence ou l'intensité des traitements de fond (interaction intensité p = 0,717) | Partiellement direct (exploratoire) |
| SHIFT (Lancet 2010) | 6 558 patients (6 505 analysés), FEVG ≤ 35 %, rythme sinusal, FC ≥ 70 bpm, hospitalisation IC dans l'année ; ivabradine (Procoralan) vs placebo | Décès CV ou hospitalisation IC HR 0,82, porté par les hospitalisations ; décès CV (HR 0,91) et mortalité totale (HR 0,90) non significativement réduits. Bénéfice uniquement si FC ≥ 77 bpm (HR 0,75 vs 0,93 ; interaction p = 0,029) ; non significatif à ≥ 50 % de la dose cible de bêtabloquant (HR 0,90). Sous-groupe ischémique (68 %) : HR 0,87 vs 0,72 non ischémique (interaction p = 0,059) | Partiellement direct (sous-groupe ischémique fourni) |
| BEAUTIFUL, SIGNIFY | Coronaropathie sans IC (SIGNIFY) ou avec FEVG < 40 % (BEAUTIFUL) ; ivabradine | Aucun bénéfice pronostique ; léger surrisque dans l'angor symptomatique dans SIGNIFY | Indirect (explique l'absence d'effet pronostique dans l'angor) |
| DIG (NEJM 1997) | 6 800 patients, FEVG ≤ 45 %, rythme sinusal ; digoxine vs placebo (pré-bêtabloquants) | Mortalité inchangée (34,8 % vs 35,1 %) ; moins d'hospitalisations IC (RR 0,72). Digoxinémie basse (0,5–0,9 ng/mL) liée à une mortalité plus faible (post hoc). Décès ou hospitalisation IC selon la cause : RR 0,79 ischémique (~70 %) vs 0,67 non ischémique (interaction p = 0,06) | Partiellement direct (sous-groupe ischémique fourni) |
| **DIGIT-HF** (NEJM 2025) | 1 240 patients (1 212 analysés), FEVG ≤ 40 % NYHA III–IV ou ≤ 30 % NYHA II, traitement moderne, 27 % FA, ~52 % ischémiques ; digitoxine vs placebo | Décès ou première hospitalisation IC : 39,5 % vs 44,1 % (HR 0,82) ; aucun des deux composants isolé significatif. Sous-groupe non ischémique HR 0,70 ; pas de chiffre ischémique publié. Post hoc : décès HR 0,55 si FA vs 1,01 sans FA (interaction p = 0,01 ; interaction sur le critère principal p = 0,40) | Direct |
| DECISION (2026, communiqué) | 1 001 patients néerlandais, FEVG < 50 % ; digoxine faible dose | Critère principal non significatif (RR 0,81). Poolé avec DIG et DIGIT-HF (9 013 patients) : HR 0,85, surtout moins d'événements IC | Partiellement direct |
| FINEARTS-HF (NEJM 2024) | 6 001 patients, **FEVG ≥ 40 %** (moyenne ~52 %) ; les patients dont la FEVG s'était améliorée de < 40 % à ≥ 40 % pouvaient être inclus ; finérénone (Kerendia) vs placebo | Aggravations IC + décès CV réduits de 16 % (RR 0,84) ; décès CV non réduit ; même effet relatif dans le sous-groupe post hoc « IC sévère » (RR 0,85, ns isolément) | **Non applicable** sous 40 % de FEVG ; plus proche si la FEVG remonte à ≥ 40 % |
| FINE-HEART poolé (Nat Med 2024) | 18 991 patients de FIDELIO-DKD, FIGARO-DKD (excluant tous deux l'ICFER symptomatique) et FINEARTS-HF (FEVG ≥ 40 %) ; 63 % avaient un diabète avec maladie rénale sans IC | Critère principal (décès CV) non atteint : HR 0,89 (0,78–1,01). Hospitalisation IC HR 0,83 ; mortalité totale HR 0,91 (secondaire, sans correction de multiplicité) ; bénéfice rénal issu uniquement des essais MRC (rein dans FINEARTS-HF : HR 1,30, ns) | **Non applicable** : aucun patient avec ICFER symptomatique ; uniquement diabète + MRC ou FEVG ≥ 40 % |
| FINALITY-HF (en cours) | ~2 600 patients ICFER ne pouvant prendre spironolactone/éplérénone ; finérénone | **Pas encore de résultats** ; fin estimée janvier 2028 | Direct à sa publication |
| ARTS-HF (EHJ 2016) | Phase 2b, 1 066 patients hospitalisés pour ICFER en aggravation (FEVG moyenne 29 %) avec diabète de type 2 et/ou MRC ; 64 % avec coronaropathie associée ; cinq doses de finérénone vs éplérénone pendant 90 jours | Réponse NT-proBNP similaire à l'éplérénone ; hyperkaliémie similaire (4,3 % au total) ; composite exploratoire plus bas sous 10→20 mg (HR 0,56, nominal) | Population la plus proche, mais étude courte sur marqueur biologique ; aucune preuve sur critères cliniques |
| DIAMOND (EHJ 2022) | ICFER (FEVG moyenne 33,5 %, ~71 % ischémiques) avec hyperkaliémie sous bloqueurs du SRAA ; phase ouverte sous patiromer (Veltassa), puis 878 patients ayant atteint 50 mg d'ARM (84,6 % des 1 038 ayant terminé le run-in) randomisés pour poursuivre le patiromer ou passer au placebo | Kaliémie -0,10 mmol/L vs placebo ; moins de kaliémies > 5,5 mmol/L (HR 0,63) et de baisses d'ARM (HR 0,62). Critère principal modifié en cours d'essai (de décès CV/hospitalisation vers la kaliémie) ; décès 22 vs 16 (ns) | Direct pour maintenir un ARM ; pas de preuve sur événements cliniques |
| Registre TITRATE-HF (EJHF 2025) | 3 367 patients néerlandais avec ICFER (FEVG ≤ 40 %), 2022–2024, 44 % ischémiques | Nouveaux patients sous les 4 piliers : 69,5 % à 6 mois, mais seulement 1–2 % aux doses cibles des quatre. FEVG passée de 30 % à 45 % chez les nouveaux patients : +10 points si ischémique vs +15 si non ischémique ; > 40 % chez 48 % vs 66,5 %. Baisse ou arrêt de traitement associé à plus d'événements (HR ajusté 1,54) | Direct pour la mise en œuvre et la récupération de FEVG (observationnel) |
| Registre OPTIPHARM-HF (EJHF 2025) | 1 720 patients suivis en clinique d'ICFER en Italie, 57 % ischémiques | Passage de 46,6 % à 63,8 % sous les 4 piliers après une visite structurée ; doses cibles des quatre chez 2,7 % ; pas de données d'événements | Indirect (observationnel) |
| Registre SwedeHF (EJHF 2022) | 27 430 patients suédois ICFER (FEVG < 40 %), 2000–2018 ; 67 % avec coronaropathie | Prescription en baisse avec l'âge (ARM 54 % avant 70 ans vs 35 % à 80 ans et plus ; ARNI, compté depuis 2016, 25 % vs 7 %) ; doses cibles atteintes chez seulement 44 % (bloqueur SRAA), 36 % (bêtabloquant), 16 % (ARM) des patients traités | Indirect (observationnel) |`,
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
      headingFr: 'Nutrition, sel, liquides, fer et compléments',
      bodyMarkdownFr: `| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **SODIUM-HF** (Lancet 2022) | 806 patients ambulatoires stables, FEVG médiane 36 % (réduite et préservée ; cause non précisée) ; sodium < 1 500 mg/jour vs soins usuels ; 12 mois | Décès, hospitalisation CV ou passage aux urgences CV : 15 % vs 17 % (HR 0,89, ns) ; petit gain de qualité de vie | Partiellement direct (FEVG et causes mixtes) |
| **FRESH-UP** (Nat Med 2025) | 504 patients ambulatoires stables, toute FEVG (52 % ICFER, 44 % ischémiques) ; restriction 1,5 L/jour vs apports libres ; 3 mois | Qualité de vie comparable (KCCQ +2,2 en libre, ns) ; plus de soif sous restriction ; événements de sécurité rares à 6 mois | Partiellement direct (~moitié ICFER) |
| Méta-analyse fer IV (Nat Med 2025) | 6 essais randomisés, 7 175 patients carencés en fer, FEVG ≤ 50 % | Hospitalisations IC + décès CV : RR 0,81 ; pas d'effet sur la survie ; effet identique ischémique vs non ischémique | Partiellement direct (causes mixtes) |
| **FAIR-HF2** (JAMA 2025) | 1 105 patients carencés en fer, FEVG ≤ 45 %, 78 % ischémiques ; carboxymaltose ferrique IV répété | Décès CV / 1re hospitalisation IC : HR 0,79 (0,63–0,99), formellement neutre selon la règle de multiplicité de Hochberg ; critère principal modifié en aveugle ; événements indésirables graves 48 % vs 50 % | Majoritairement direct (78 % ischémique) |
| IRONOUT-HF (JAMA 2017) | 225 patients ICFER carencés en fer ; fer oral vs placebo | Aucune amélioration de la capacité d'effort ni des symptômes | Partiellement direct (ICFER, causes mixtes) |
| GISSI-HF oméga-3 (Lancet 2008) | 6 975 patients, ~90 % FEVG ≤ 40 % ; oméga-3 1 g/jour | Mortalité : 27 % vs 29 % (HR ajusté 0,91) ; époque antérieure aux traitements modernes | Partiellement direct (ère ancienne) |
| Q-SYMBIO (JACC HF 2014) | 420 patients, NYHA III–IV, FEVG moyenne 31 %, ~70 % ischémiques ; coenzyme Q10 300 mg/jour pendant 2 ans | Événements CV majeurs : 15 % vs 26 % (HR 0,50 ; 0,32–0,80) ; mortalité totale 10 % vs 18 % ; arrêté à 420 patients sur 550 prévus ; financement partiel par l'industrie des compléments ; jamais répliqué | Partiellement direct (ICFER surtout ischémique, mais petit et pré-traitements modernes) |
| QUEST (Nat Med 2024) | 3 110 patients chinois, FEVG ≤ 40 %, ~74 % ischémiques ; Qiliqiangxin (formule de 11 plantes incluant ginseng et danshen) vs placebo ; 18 mois ; financé par le fabricant | Décès CV ou hospitalisation IC : 25,0 % vs 30,0 % (HR 0,78) ; mortalité totale ns (HR 0,84) | Partiellement direct (< 10 % sous iSGLT2 ; formule sur prescription, non assimilable aux compléments isolés) |
| Revue parapluie Chua (Complement Ther Med 2025) | 22 revues sur acupuncture, Tai Chi et autres exercices corps-esprit, phytothérapie chinoise et compléments dans l'IC chronique toute FEVG ; majorité d'essais chinois | Certitude modérée uniquement pour la CoQ10 (mortalité RR 0,58, d'après Q-SYMBIO seul), le Tai Chi (hospitalisations RR 0,47, 3 essais) et les gélules Qishen Yiqi (mortalité OR 0,43, surtout essais d'un même fabricant). La vitamine E a augmenté les hospitalisations IC (RR 1,21) ; la vitamine D a réduit la distance de marche d'environ 39 m. 11 revues sur 21 de qualité critique très faible ; QUEST non inclus | Partiellement direct (quelques revues en IC coronarienne ; surtout critères intermédiaires) |
| CORDIOPREV (Lancet 2022) | 1 002 patients coronariens ; alimentation méditerranéenne vs pauvre en graisses ; 7 ans | Événements CV majeurs réduits d'environ 25 % ; excluait les FEVG ≤ 35 % | Indirect |
| Revue parapluie Hareer (Nutr Diet 2024) | 18 méta-analyses de 238 essais d'alimentation méditerranéenne (~198 000 personnes) ; aucune revue limitée à l'IC, aucune donnée de FEVG | Moins d'AVC dans chaque revue les rapportant (RR 0,58–0,65). En cas de cardiopathie existante vs soins usuels : mortalité RR 0,44 et décès CV RR 0,35, mais issus de très peu d'essais avec faible certitude. Sans cardiopathie, mortalité inchangée (HR 1,00). 15 revues sur 18 de qualité faible ou très faible | Indirect (maladie coronaire, pas ICFER) |
| EFFORT sous-groupe IC (JACC 2021) | 645 patients hospitalisés avec IC à risque nutritionnel, âge médian 79 ans, en ouvert ; FEVG connue chez la moitié, < 40 % chez seulement 66 patients ; ~57 % d'origine coronaire | Mortalité à 30 jours : 8,4 % vs 14,8 % (OR ajusté 0,44) ; mortalité à 180 jours HR 0,74 uniquement après ajustement ; réhospitalisations non réduites | Indirect (patients âgés hospitalisés ; majoritairement hors ICFER) |`,
    },
    {
      headingFr: 'Perte de poids et obésité',
      bodyMarkdownFr: `Aucun essai n'a encore évalué un médicament amaigrissant sur des critères cliniques durs chez des patients sélectionnés pour une obésité avec ICFER. Les résultats positifs concernent l'insuffisance cardiaque à FEVG préservée ; les données dans l'ICFER sont réduites et contrastées, et la prise de position 2025 de la HFA qualifie la sécurité dans l'ICFER de « débattue » en appelant à des essais dédiés. Les chiffres ci-dessous reprennent cette synthèse.

| Essai / Étude | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| STEP-HFpEF, STEP-HFpEF DM, SUMMIT | 529, 616 et 731 personnes avec obésité et **FEVG ≥ 45 %** ; sémaglutide (Wegovy) 2,4 mg/semaine ou tirzépatide (Mounjaro) vs placebo | Poids -13,3 % vs -2,6 % (STEP-HFpEF), avec amélioration des symptômes et de la distance de marche. SUMMIT : décès CV ou aggravation IC 9,9 % vs 15,3 % (HR 0,62 ; 0,41–0,95), surtout moins d'aggravations IC | **Non applicable** : FEVG préservée uniquement |
| FIGHT et LIVE (liraglutide) | Patients avec ICFER (FIGHT : hospitalisation récente, FEVG moyenne 27 %) ; non sélectionnés sur l'obésité ; doses antidiabétiques | FIGHT : numériquement plus d'hospitalisations IC (non significatif). LIVE : plus d'événements cardiaques graves, 12 (10 %) vs 3 (3 %), sur un faible nombre d'événements | Direct sur la FEVG, mais petits effectifs ; à l'origine de la question de sécurité dans l'ICFER |
| SELECT, sous-groupe ICFER | 1 347 personnes en surpoids ou obésité (IMC moyen 33,4) avec ICFER, sans diabète ; ~60 % NYHA II, NYHA IV exclu ; sémaglutide 2,4 mg vs placebo | Événements CV majeurs réduits de 35 % ; hospitalisations IC isolées non réduites (HR 1,08) | Partiellement direct (stade modéré, analyse en sous-groupe) |
| Revue de dossiers régime cétogène Moseley (J Card Fail Intersections 2025) | 125 patients avec IC et obésité sévère (IMC moyen 45) dans un centre américain, suivis ≥ 1 an ; le groupe « ICFER » (59 patients) incluait des FEVG modérément réduites ou améliorées et 6 porteurs d'assistance circulatoire ; sans groupe témoin | Poids médian -11,2 kg sur ~2 ans ; FEVG inchangée. Hospitalisations IC réduites par rapport à l'année précédente (rapport de taux 0,5), mais non significatif dans le groupe ICFER (0,6 ; 0,3–1,1). Seulement 2 patients sous iSGLT2 ; corps cétoniques et acidocétose non surveillés | Faible niveau de preuve (observationnel avant/après) ; ne permet pas d'écarter le risque d'acidocétose sous iSGLT2 |`,
    },
    {
      headingFr: 'Activité physique, moral et soins palliatifs',
      bodyMarkdownFr: `| Essai / Revue | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **Revue Cochrane** (2024) | 60 essais, 8 728 patients avec IC ; réadaptation par exercice vs absence | Hospitalisations toutes causes : 15,9 % vs 23,8 % (RR 0,69) ; pas d'effet net sur la mortalité ; meilleure qualité de vie | Indirect (FEVG et causes mixtes) |
| **HF-ACTION** (JAMA 2009) | 2 331 patients ambulatoires ICFER, 51 % ischémiques ; entraînement physique | Décès ou hospitalisation : HR 0,93 (ns) ; HR ajusté 0,89 | Partiellement direct (ère ancienne) |
| Essai TCC Freedland (JAMA IM 2015) | 158 patients IC avec dépression ; thérapie cognitivo-comportementale vs soins usuels renforcés | Rémission de la dépression : 46 % vs 19 % | Indirect |
| SADHART-CHF (JACC 2010) | 469 patients, FEVG ≤ 45 %, dépression majeure ; sertraline vs placebo | Amélioration similaire dans les deux bras (p = 0,89) | Partiellement direct |
| MOOD-HF (JAMA 2016) | 372 patients, FEVG < 45 % (moyenne ~35 %), environ deux tiers ischémiques, dépression majeure ; escitalopram vs placebo en plus d'un suivi infirmier d'IC | Aucune différence sur l'humeur ni sur décès/hospitalisations (HR 0,99 ; 0,76–1,27) ; arrêté pour futilité ; pas de différence dans le sous-groupe ischémique (interaction p = 0,97) | Majoritairement direct |
| PAL-HF (JACC 2017) | 150 patients avec IC avancée ; ajout de soins palliatifs | Qualité de vie +9,5 points KCCQ ; moral amélioré ; pas d'effet sur hospitalisations ou décès | Indirect |`,
    },
    {
      headingFr: 'Valves, rythme cardiaque et cicatrice IRM',
      bodyMarkdownFr: `| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| **COAPT** 5 ans (NEJM 2023) | 614 patients avec insuffisance mitrale secondaire symptomatique sous traitement maximal ; clip mitral (TEER) vs traitement médical | Hospitalisations IC : 33,1 % vs 57,2 % par an (HR 0,53) ; mortalité 57,3 % vs 67,2 % (HR 0,72) | Incertain : part ischémique non précisée dans le résumé lu ; les recommandations valvulaires parlent de patients sans coronaropathie pertinente |
| CASTLE-HTx (NEJM 2023) | 194 patients avec FA et IC terminale ; ablation vs médicaments | Décès, assistance circulatoire ou greffe urgente : 8 % vs 30 % (HR 0,24) | Indirect (61 % non ischémiques, stade terminal) |
| REVIVED-BCIS2 analyse viabilité (JAMA Cardiol 2023) | 610 patients de REVIVED avec test de viabilité | Le myocarde viable n'a pas prédit le bénéfice du stent ; une cicatrice plus étendue prédisait un pronostic moins bon (HR 1,18 par tranche de 10 % du VG) | Direct |`,
    },
    {
      headingFr: 'Occlusion coronaire chronique (CTO)',
      bodyMarkdownFr: `| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| Méta-analyse van Veelen (2021) | 5 essais randomisés, 1 790 patients, FEVG moyenne ~53 % ; angioplastie de CTO vs médicaments | Pas de réduction des décès (RR 1,14 jusqu'à ~4 ans), des événements majeurs ni de gain de FEVG ; moins d'angor à 1 an (RR 0,65, 2 essais) | Indirect (FEVG quasi normale, surtout angor) |
| DECISION-CTO (2019) | Patients avec CTO ; PCI vs pas de PCI ; arrêté prématurément | Critère composite : 22,3 % vs 22,4 % à ~4 ans ; ~20 % de croisement | Indirect (résumé seul) |
| EXPLORE (2016) | 304 patients après STEMI avec une seconde artère occluse (FEVG moyenne ~41 %) ; PCI précoce de CTO vs non | Pas de différence globale de FEVG (44,1 % vs 44,8 %) ; sous-groupe IVA favorable, mais aucun bénéfice dans le sous-groupe avec FEVG initiale ≤ 40 % (84 patients). Sous-étude IRM : récupération uniquement dans les segments affaiblis mais viables du territoire CTO. À 10 ans : pas moins d'événements majeurs (HR 1,10), plus de décès CV sous PCI en analyse non planifiée, moins d'essoufflement | Indirect (sous-groupe générateur d'hypothèses) |
| REVASC (2018) | 205 patients stables dans un centre, FEVG médiane 55–60 % (< 25 % exclus) ; PCI vs médicaments | Pas de gain de FEVG (+0,9 vs +0,7 point) ni d'épaississement pariétal ; bénéfice régional uniquement si peu d'autres lésions (SYNTAX ≤ 13), non retrouvé chez les 20 monotronculaires ; moins de réinterventions | Indirect (FEVG majoritairement normale) |
| ISCHEMIA analyse CTO (2025) | 1 470 patients d'ISCHEMIA porteurs d'une CTO, FEVG médiane 60 % ; stratégie invasive vs conservatrice | Pas de réduction des décès CV ni des infarctus (à 4 ans : 11,7 % vs 13,9 %) ; meilleurs scores d'angor et d'essoufflement ; plus d'événements d'IC avec la stratégie invasive (2,5 % vs 0,6 %) ; seulement 353 CTO sur 752 rouvertes | Indirect (FEVG < 35 % exclue) |
| ORBITA-CTO (2026) | 50 patients avec angor, ischémie et viabilité prouvées, FEVG médiane 55 % ; angioplastie de CTO vs procédure factice (sham) | Amélioration de l'angor (OR 4,38) ; pas d'amélioration nette de l'essoufflement ni de l'état général | Symptômes uniquement, petit effectif, FEVG normale (pré-publication) |`,
    },
    {
      headingFr: 'Cholestérol, colchicine et prévention secondaire',
      bodyMarkdownFr: `| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| CORONA (NEJM 2007) | 5 011 patients ≥ 60 ans avec IC systolique ischémique, FEVG ≤ 40 % (moyenne 31 %), NYHA II–IV, non jugés relever d'une statine ; rosuvastatine (Crestor) 10 mg vs placebo | LDL réduit de 45 % vs placebo, mais décès CV / IDM non fatal / AVC non fatal non réduits (HR 0,92 ; 0,83–1,02) ; mortalité HR 0,95. Moins d'hospitalisations CV et IC en nombre total (IC : 1 109 vs 1 299) ; délai avant première hospitalisation IC non significatif (HR 0,91) | Direct, mais testait *l'initiation* d'une statine pour l'IC seule, non son arrêt |
| GISSI-HF bras statine (Lancet 2008) | 4 574 patients avec IC toute cause, sans statine ; sans seuil de FEVG mais moyenne 33 % (~90 % ≤ 40 %), 40 % ischémiques ; rosuvastatine 10 mg vs placebo ; 3,9 ans | Mortalité : 29 % vs 28 % (HR 1,00) ; sous-groupe ischémique HR 1,03 (0,92–1,16) pour décès ou hospitalisation CV ; bien tolérée mais sans effet | Partiel (majoritairement ICFER, 40 % ischémique) |
| IMPROVE-IT (2015) | 18 144 patients post-SCA ; simvastatine + ézétimibe (Ezetrol) vs simvastatine | Événements à 7 ans : 32,7 % vs 34,7 % (HR 0,936), grâce à moins d'IDM et d'AVC ischémiques ; mortalité CV et totale inchangées | Indirect (4,1–4,6 % avaient un antécédent d'IC ; FEVG non rapportée) |
| RACING (2022) | 3 780 patients avec maladie artérielle ; rosuvastatine 10 mg + ézétimibe vs rosuvastatine 20 mg | Non inférieur (9,1 % vs 9,9 %) ; moins d'arrêts pour intolérance (4,8 % vs 8,2 %) ; plus de patients sous 0,70 g/L (< 1,8 mmol/L) | Indirect |
| FOURIER (2017) | 27 564 patients avec maladie artérielle sous statine ; évolocumab (Repatha) vs placebo (FEVG < 30 % et NYHA III–IV exclus) | Événements HR 0,85 ; un LDL atteint plus bas était associé à moins d'événements (< 0,19 g/L [< 0,5 mmol/L] : HR ajusté 0,76 [0,64–0,90] vs ≥ 1,00 g/L [≥ 2,6 mmol/L], non randomisé), sans signal de tolérance sur ~2 ans | Partiel (données d'IC non rapportées) |
| Méta-analyse Kelly (J Clin Lipidol 2024) | 13 essais, 8 592 patients avec maladie artérielle ; statine d'intensité modérée + ézétimibe vs statine forte intensité | Davantage de patients sous 0,70 g/L (< 1,8 mmol/L) de LDL (OR 1,76) ; pas de différence nette sur les événements cliniques (OR 0,54 ; 0,14–2,11 ; 3 essais, surtout RACING) | Indirect (aucune donnée d'IC ni de FEVG) |
| ODYSSEY OUTCOMES analyse antécédent IC (EHJ 2022) | 2 815 des 18 924 patients post-SCA avaient un antécédent d'IC (NYHA I–II ; FEVG jamais recueillie) ; alirocumab (Praluent) vs placebo | Pas de réduction des événements majeurs en cas d'antécédent d'IC (HR 1,17 ; 0,97–1,40) vs HR 0,78 sans antécédent ; plus d'IDM non fatals si antécédent d'IC (HR 1,30 ; 1,02–1,64) ; hospitalisations IC non réduites dans aucun groupe ; IC probablement ischémique : HR 1,13 | Incertain (post hoc ; « antécédent d'IC » diffère d'une ICFER confirmée) |
| Méta-analyse colchicine (EHJ 2025) | 6 essais, 21 800 patients coronariens | Événements majeurs HR 0,75, pas d'effet sur la mortalité, forte hétérogénéité ; CLEAR SYNERGY seul était neutre (HR 0,99) | Indirect (IC sévère exclue) |
| Lp(a)HORIZON (NEJM 2026) | 8 350 patients avec antécédent CV et Lp(a) ≥ 70 mg/dL ; pélacarsen mensuel vs placebo pendant 4,7 ans (médiane) | Lp(a) réduite de 78 % à 1 an, mais événements majeurs non réduits (12,3 % vs 12,1 % ; HR 1,02) ; plus d'arrêts pour effets indésirables (20,6 % vs 7,5 %) | Indirect (statut IC non rapporté ; texte intégral lu) |`,
    },
    {
      headingFr: 'Rétrécissement aortique',
      bodyMarkdownFr: `| Essai / Cohorte | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| TAVR UNLOAD (JACC 2025) | 178 patients avec FEVG 20–50 % (~2/3 ischémiques) et rétrécissement aortique modéré défini par la surface valvulaire ; TAVI précoce vs surveillance | Critère principal non atteint (win ratio 1,31, p = 0,14) ; mortalité identique (39,3 % dans chaque bras, médiane 23 mois) ; qualité de vie meilleure à 1 an (+12,8 vs +3,2) mais pas au suivi maximal ; 43 % du groupe surveillance ont ensuite eu un TAVI | Plus proche cliniquement, mais petit, sous-dimensionné et en ouvert (texte intégral lu) |
| PROGRESS (NEJM 2026) | 744 patients ≥ 65 ans avec sténose modérée et facteur de risque ; seulement 25 % avaient une FEVG < 60 % | Décès ou événement IC : 16,7 % vs 23,9 % (HR 0,67), porté par moins d'hospitalisations IC ; mortalité identique | Confiance limitée (couverture de presse uniquement, FEVG surtout préservée) |
| Cohorte Khan (JACC 2023) | 9 133 patients avec FEVG < 50 %, classés selon la surface valvulaire | Sténose modérée : décès ou hospitalisation IC 62,7 % vs 45,9 % sans sténose (HR apparié 1,24) | Observationnel ; peu de coronaropathies codées |`,
    },
    {
      headingFr: 'Caillots (thrombus VG) et anticoagulants',
      bodyMarkdownFr: `| Essai | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| WARCEF (NEJM 2012) | 2 305 patients avec FEVG ≤ 35 % en rythme sinusal (~43 % ischémiques) ; warfarine vs aspirine | Décès, AVC ou hémorragie cérébrale inchangé (HR 0,93) ; AVC ischémique divisé par deux (HR 0,52) mais hémorragies majeures doublées (1,78 vs 0,87 pour 100 patients-années) | Direct sur le rythme et la FEVG ; warfarine (non AOD) |
| COMMANDER-HF (NEJM 2018) | 5 022 patients avec FEVG ≤ 40 %, coronaropathie, rythme sinusal, après aggravation IC ; rivaroxaban 2,5 mg × 2/j vs placebo | Décès, IDM ou AVC : 25,0 % vs 26,2 % (HR 0,94, ns) | ICFER ischémique, mais récemment décompensée |
| COMPASS sous-groupe IC (2019) | Maladie coronaire ou artérielle périphérique stable avec IC (FEVG < 30 % exclue) ; rivaroxaban 2,5 mg × 2/j + aspirine vs aspirine | Événements : 5,5 % vs 7,9 % (HR 0,68) ; dans les 12 % avec FEVG < 40 %, HR 0,88 (0,55–1,42), non concluant | Indirect |
| RIVAWAR (2025) | 261 patients avec thrombus VG post-IDM ; rivaroxaban vs warfarine 12 semaines | Résolution du thrombus : 95,8 % vs 96,6 % (non inférieur) | Thrombus post-IDM récent uniquement ; monocentrique |
| APERITIF (JAMA Cardiol 2026) | 560 patients après STEMI antérieur ; 4 semaines de rivaroxaban faible dose + bithérapie antiagrégante vs bithérapie seule | Thrombus à l'IRM à 1 mois : 13,7 % vs 16,6 % (ns) ; plus de saignements mineurs | Infarctus antérieur aigu uniquement |`,
    },
    {
      headingFr: 'Dysfonction ventriculaire sans symptôme (stade B)',
      bodyMarkdownFr: `| Essai | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| SOLVD-Prevention (NEJM 1992) | 4 228 patients avec FEVG ≤ 35 % sans besoin de traitement d'IC ; énalapril vs placebo, 37 mois | Mortalité non significativement réduite ; décès ou apparition d'une IC réduits de 29 % | Stade B uniquement (tout antécédent de symptôme = stade C) |
| STOP-HF (JAMA 2013) | 1 374 adultes à risque sans IC ; dépistage par BNP ≥ 50 pg/mL avec ETT et soins partagés vs suivi usuel | Nouvelle dysfonction VG (avec ou sans IC) : 5,3 % vs 8,7 % ; IC seule non nettement réduite | Dépistage du stade B, non traitement d'une dysfonction connue |
| PONTIAC (JACC 2013) | 300 patients diabétiques de type 2 avec NT-proBNP > 125 sans cardiopathie connue ; titration cardiologique vs suivi usuel | Hospitalisation cardiaque ou décès réduits (HR 0,351) ; petit essai financé par l'industrie | Dépistage et traitement du stade B dans le diabète |
| SOLVD suivi 12 ans (Lancet 2003) | Les deux essais SOLVD, 99,8 % suivis | Essai Prevention : 50,9 % vs 56,4 % de décès ; gain médian de survie de 9,4 mois (poolé) | Idem SOLVD-Prevention |
| SAVE captopril (NEJM 1992) | 2 231 patients 3 à 16 jours après IDM, FEVG ≤ 40 %, sans IC patente | Mortalité : 20 % vs 25 % ; IC sévère réduite de 37 % | Stade B post-IDM (distinct de l'essai SAVE CPAP) |
| CAPRICORN (Lancet 2001) | 1 959 patients post-IDM, FEVG ≤ 40 % ; carvédilol vs placebo | Critère principal ns (HR 0,92) ; mortalité 12 % vs 15 % (HR 0,77) | Post-infarctus |
| REVERT (Circulation 2007) | 149 patients, NYHA I, FEVG < 40 % ; métoprolol succinate vs placebo, 12 mois | Dose 200 mg : VG plus petit, FEVG +6 points (critères d'imagerie uniquement) | Petit, pas de critères cliniques |
| PARADISE-MI (NEJM 2021) | 5 661 patients post-IDM ; sacubitril/valsartan vs ramipril | Non supérieur (HR 0,90, ns) | Post-IDM à risque, pas stade B chronique établi |
| EMPACT-MI (NEJM 2024) | 6 522 patients post-IDM ; empagliflozine vs placebo | Critère combiné non réduit (HR 0,90, ns) ; premières hospitalisations IC plus basses (HR 0,77) | Post-IDM aigu |`,
    },
    {
      headingFr: 'Apnée du sommeil',
      bodyMarkdownFr: `| Essai / Analyse | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| SERVE-HF (NEJM 2015) | 1 325 patients, FEVG ≤ 45 %, apnée surtout centrale (SACS) ; ASV vs traitement médical seul | Critère principal non amélioré ; surmortalité (mortalité totale HR 1,28 ; cardiovasculaire HR 1,34) | Direct pour ICFER avec SACS ; motif de la contre-indication ESC Classe III |
| ADVENT-HF (Lancet Respir Med 2024) | 731 patients, FEVG ≤ 45 %, 73 % d'apnée obstructive ; ASV nouvelle génération vs soins usuels | Neutre (composite HR 0,95 ; décès HR 0,89) ; aucun signal de danger ; arrêté tôt | Majoritairement SAOS ; appareil différent |
| SAVE PPC/CPAP (NEJM 2016) | 2 717 patients avec maladie coronaire ou cérébrovasculaire et SAOS ; PPC vs soins usuels | Pas moins d'événements cardiaques (HR 1,10) ; hospitalisations IC 17 vs 17 ; amélioration de la somnolence, de l'humeur et de la qualité de vie ; observance 3,3 h/nuit ; utilisateurs appariés ≥ 4 h non significatifs (HR 0,80) | Maladie coronaire, mais IC NYHA III–IV et respiration de Cheyne-Stokes exclues ; seulement 1,8 % avec antécédent d'IC ; FEVG non mesurée |
| Analyse poolée SAVE, ISAACC, RICCADSA (JAMA 2023) | 4 186 patients avec maladie cardiaque ou vasculaire et SAOS | Résultat randomisé neutre (HR 1,01) ; hospitalisations IC non réduites (HR 0,91 ; 0,59–1,4 ; SAVE et ISAACC uniquement) ; utilisation ≥ 4 h/jour associée à moins d'événements (HR 0,69, non randomisé ; les bons observants fumaient aussi moins) ; seuls 38,5 % atteignaient 4 h | Indirect ; les essais dédiés à l'IC (CANPAP, SERVE-HF) n'ont pas été poolés |`,
    },
    {
      headingFr: 'Tension artérielle et confirmation de la cause (IRM)',
      bodyMarkdownFr: `### Tension artérielle

| Essai | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| SPRINT (NEJM 2015) | 9 361 patients à haut risque ; cible systolique ~120 vs 140 mmHg | Moins d'événements cardiaques (HR 0,75) et de décès (HR 0,73) ; événements d'IC HR 0,62, décès cardiaques HR 0,57 ; plus d'hypotensions, syncopes et atteintes rénales | Le protocole du registre excluait les FEVG < 35 % et les IC symptomatiques récentes (non précisé dans l'article publié) ; aucune donnée de FEVG rapportée |
| RIAS (2015) | 100 patients avec rétrécissement aortique modéré ou sévère asymptomatique, FEVG > 50 % ; ramipril vs placebo | Masse du VG réduite de 8,4 g ; bonne tolérance | FEVG normale ; trop petit pour des critères cliniques |

### Confirmer la cause (études observationnelles IRM, non randomisées)

| Étude | Population et comparaison | Résultat principal | Applicabilité |
|---|---|---|---|
| McCrohon 2003 | 90 patients avec VG affaibli ; aspect de cicatrice IRM vs coronarographie | Les 27 patients coronariens avaient tous une cicatrice sous-endocardique ou transmurale ; dans la CMD non ischémique, 59 % n'avaient aucune cicatrice, 28 % une fibrose médio-pariétale, 13 % un aspect d'infarctus | Base de l'interprétation des cicatrices IRM |
| Gulati 2013 | 472 patients avec cardiomyopathie dilatée non ischémique | Fibrose médio-pariétale associée à la mortalité (HR ajusté 2,43) et à la mort subite (HR 4,61) | Non ischémique |
| Jones 2024 | 453 patients avec coronaropathie significative (FEVG moyenne 47 %) | 14 % présentaient une cicatrice non ischémique, sans prédiction indépendante d'événements | Double pathologie ; cohorte non spécifique de l'ICFER |`,
    },
  ],
  relatedArticleSlugs: [
    'comprendre-le-diagnostic',
    'revascularisation-pontage-stents',
    'dispositifs-cardiaques-dai-crt',
    'medicaments-insuffisance-cardiaque',
    'insuffisance-cardiaque-fevg-amelioree',
    'glossaire-cardiologie',
    'nutrition-et-complements-insuffisance-cardiaque',
    'tableau-preuves-nutrition-complements',
    'alimentation-cardioprotectrice',
    'poids-obesite-et-denutrition',
    'carence-martiale-et-fer-iv',
    'sel-et-liquides-insuffisance-cardiaque',
    'omega-3-huile-de-poisson',
    'coenzyme-q10',
    'vitamine-d-insuffisance-cardiaque',
    'readaptation-cardiaque-et-activite-physique',
    'depression-et-sante-emotionnelle',
    'maladies-associees',
    'cardiomyopathie-ischemique',
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
  ],
  sources: [
    {
      label: 'Essais de revascularisation et CTO (STICH/STICHES, REVIVED-BCIS2, van Veelen 2021, EXPLORE, REVASC, ISCHEMIA-CTO, ORBITA-CTO)',
      detail: 'Comparaison pontage, angioplastie et traitement médical optimal dans la dysfonction VG ischémique et la CTO (textes intégraux)',
    },
    {
      label: 'Essais DAI, CRT et gilet (MADIT-II, SCD-HeFT, DINAMIT/IRIS, Shun-Shin 2017, PROFID, EU-CERT-ICD, CMR GUIDE, PROFID-EHRA, VEST, Goetz 2023, WEARIT-II, HF-OPT, PRAETORIAN)',
      detail: 'Prévention de la mort subite, évolution du risque rythmique sous traitement moderne et revue systématique sur le gilet défibrillateur',
    },
    {
      label: 'Essais médicamenteux et registres (PARADIGM-HF, DAPA-HF, EMPHASIS-HF, Vaduganathan 2020, STRONG-HF, VICTORIA/VICTOR poolé et par traitement de fond, SHIFT, DIG, DIGIT-HF selon FA, DECISION, FINEARTS-HF, FINE-HEART, ARTS-HF, DIAMOND, TITRATE-HF, OPTIPHARM-HF, SwedeHF, TRED-HF)',
      detail: 'Quadrithérapie, titration rapide, traitements additionnels, nouveaux ARM, registres de pratique réelle et risque de rechute à l’arrêt (textes intégraux)',
    },
    {
      label: 'Essais télésurveillance, nutrition, obésité, réadaptation et comorbidités (Scholte 2023, TIM-HF2, MONITOR-HF, IN-TIME, MORE-CARE, MANAGE-HF, SODIUM-HF, FRESH-UP, FAIR-HF2, Q-SYMBIO, Chua 2025, Hareer 2024, EFFORT, HFA 2025 obésité, Moseley 2025, Cochrane 2024, HF-ACTION, MOOD-HF, COAPT, CASTLE-HTx, TAVR UNLOAD, WARCEF, COMMANDER-HF)',
      detail: 'Suivi à distance, fer IV, sel/liquides, revues parapluies nutrition/compléments, perte de poids, exercice, moral, valvulopathies et anticoagulation',
    },
    {
      label: 'Essais prévention secondaire, stade B, sommeil, TA et IRM (CORONA, GISSI-HF statine, IMPROVE-IT, RACING, FOURIER, Kelly 2024, ODYSSEY, Lp(a)HORIZON, SOLVD, SAVE, CAPRICORN, SERVE-HF, ADVENT-HF, SAVE CPAP, JAMA 2023 CPAP poolé, SPRINT, McCrohon, Gulati, Jones)',
      detail: 'Lipides, colchicine, dysfonction asymptomatique, apnée du sommeil, tension artérielle et caractérisation tissulaire IRM (textes intégraux)',
    },
  ],
  disclaimerType: 'medical',
};
