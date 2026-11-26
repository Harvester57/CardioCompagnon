import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'essais-cliniques-en-cours-et-a-suivre',
  sourceWikiPath: 'wiki/topics/trials-to-watch-ongoing-and-planned-research.md',
  titleFr: 'Essais cliniques en cours et recherche à suivre',
  category: 'references',
  readingTier: 'reference',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'hot',
  tags: [
    'essais-cliniques',
    'essais-en-cours',
    'recherche',
    'revascularisation',
    'dispositifs',
    'stenose-aortique',
    'cellules-souches',
    'complements',
    'organisation-des-soins',
    'stich3',
    'profid-ehra',
    'colt-hf',
    'cardiamp',
    'coral',
    'danutrio-hf',
    'disco',
    'ambu-vad',
  ],
  aliases: [
    'Essais en cours',
    'Recherche clinique cardiologie',
    'Futurs traitements insuffisance cardiaque',
    'Essais cliniques à venir',
    'Pipeline thérapeutique ICFER',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "De nombreuses études testent aujourd'hui de nouvelles approches pour un cœur affaibli après une maladie coronaire : chirurgie, stents, défibrillateurs, médicaments ou compléments. Cette fiche présente les essais les plus pertinents en cours et leurs horizons de résultats, tout en rappelant qu'une piste à l'étude n'est pas encore prouvée. Elle vous aide à faire le tri dans l'actualité médicale et à en parler avec votre cardiologue.",
  sections: [
    {
      headingFr: "Comment lire le niveau d'applicabilité et les dates des registres",
      bodyMarkdownFr: `Chaque essai présenté sur cette page est accompagné d'un repère indiquant à quel point les patients inclus correspondent à une **cardiomyopathie ischémique avec FEVG autour de 35 %** :

- **Direct :** inclut essentiellement cette population (cause ischémique, FEVG ≤ 40 %).
- **Partiel :** recouvre cette situation mais impose un critère supplémentaire (QRS large, hospitalisation récente, insuffisance rénale, symptômes sévères) ou mélange plusieurs causes.
- **Indirect :** cible une population différente (FEVG > 40 %, infarctus aigu récent, toute FEVG) ou ne précise pas la cause ni la FEVG.
- **Non applicable :** exclut les patients d'origine ischémique.

Tous les statuts et calendriers proviennent des registres publics d'essais cliniques (ClinicalTrials.gov et ISRCTN) consultés le **25 novembre 2026**, sauf mention d'une autre source. Les dates annoncées (« est. ») sont des estimations des promoteurs et glissent fréquemment. Les résultats d'essais ne sauraient justifier une modification de traitement sans l'avis de votre cardiologue.`,
    },
    {
      headingFr: 'La sélection prioritaire : les essais les plus directement pertinents',
      bodyMarkdownFr: `| Essai | Question testée | Applicabilité | Statut (25 nov. 2026) | Résultats attendus |
|---|---|---|---|---|
| **STICH3** (STICH3C, Canada, NCT05427370 ; STICH3-BCIS4, Royaume-Uni) | Pontage aorto-coronarien (CABG) vs stents (PCI) si FEVG ≤ 40 % avec atteinte pluritronculaire éligible aux deux gestes | Direct (si atteinte pluritronculaire) | En recrutement ; 754 patients estimés dans le bras canadien | Fin principale estimée : avril 2029 |
| **PROFID-EHRA** (NCT05665608) | Un DAI préventif reste-t-il nécessaire après un infarctus avec FEVG ≤ 35 % sous médicaments modernes ? | Direct | En recrutement ; 3 595 patients prévus | Fin principale estimée : 30 novembre 2027 |
| **COLT-HF** (NCT05873881) | Thiamine (vitamine B1) et, séparément, colchicine faible dose dans l'IC **ischémique** avec FEVG ≤ 45 % | Direct | En recrutement ; 2 500 patients estimés | Fin principale estimée : juin 2027 |
| **CardiAMP HF II** (NCT06258447) | Cellules autologues de moelle osseuse injectées dans le cœur vs procédure factice (sham), dysfonction VG ischémique, FEVG 20–40 % | Direct | En recrutement ; 250 patients estimés (fiche mise à jour fév. 2026) | Fin principale estimée : avril 2027 |
| **PCI-GULF** (NCT07349979) | Stents + médicaments vs médicaments seuls dans la cardiomyopathie ischémique, FEVG ≤ 40 %, après REVIVED-BCIS2 | Direct | Pas encore en recrutement ; 1 154 patients estimés | Fin estimée : janvier 2028 |
| **PROTECT IV** (NCT04763200) | Assistance par pompe cardiaque (Impella) lors d'une angioplastie complexe, FEVG ≤ 40 % | Partiel (uniquement si risque chirurgical élevé) | Actif, recrutement clos ; fin principale estimée (oct. 2026) dépassée, aucun résultat publié | Incertaine (2027 selon une source non vérifiée) |`,
    },
    {
      headingFr: 'Revascularisation coronaire (pontage, stents et CTO)',
      bodyMarkdownFr: `- **Pontage (CABG) vs stents (PCI) — STICH3 :** REVIVED-BCIS2 a montré que les stents ne faisaient pas mieux que le traitement médical seul, tandis que STICH a montré un bénéfice à long terme du pontage. STICH3 est le premier grand essai comparant directement les deux procédures dans la dysfonction VG ischémique (FEVG ≤ 40 %, atteinte tritronculaire ou IVA/tronc commun, accord de la Heart Team sur la faisabilité des deux options). Critère principal sur environ 5 ans : décès, AVC, infarctus, revascularisation urgente ou réhospitalisation pour insuffisance cardiaque. Le bras britannique (STICH3-BCIS4, Université de Leicester) a obtenu l'avis éthique en avril 2024, mais sa fiche de registre n'était pas accessible (effectif non vérifié).
- **Stents vs médicaments, nouvelle vague :** deux essais réexaminent la question de REVIVED-BCIS2 : **PCI-GULF** (Chine, 1 154 patients estimés, pas encore en recrutement ; angioplastie guidée par physiologie et imagerie endocoronaire, sans exigence de viabilité) et **IMPROVE-ICMP** (Corée, NCT06930092, 158 patients estimés, en recrutement ; limité aux patients présentant un myocarde viable à l'IRM). IMPROVE-ICMP évalue toutefois la FEVG à l'IRM à 6 mois (critère intermédiaire, et non la survie).
- **Assistance mécanique pendant l'angioplastie :** **CHIP-BCIS3** (Royaume-Uni, 300 patients, FEVG médiane 27 %, ACC 2026 / NEJM) a montré que le soutien systématique par pompe Impella n'améliorait **pas** le critère principal (win ratio 0,85 ; 0,63–1,15), avec une mortalité toutes causes de 47 vs 33 patients (HR 1,54 ; 0,99–2,41) et davantage de décès cardiovasculaires sous pompe (26,7 % vs 14,5 %, critère secondaire) ; la majorité des patients présentaient un tableau aigu. **PROTECT IV**, promu par le fabricant de la pompe, est plus vaste mais n'a pas encore publié ses résultats.
- **Occlusions coronaires chroniques (CTO) :** **ISCHEMIA-CTO** (NCT03563417, 1 560 patients estimés) est en cours de recrutement avec une fin principale estimée en novembre 2028. **Correction :** **SHINE-CTO** (NCT02784418), parfois mentionné comme essai attendu contre procédure factice, a été **retiré en 2021 pour des problèmes de financement liés à la pandémie et n'a inclus aucun patient**.`,
    },
    {
      headingFr: 'Dispositifs rythmologiques, ablation et imagerie diagnostique',
      bodyMarkdownFr: `### Rythme et défibrillation

- **PROFID-EHRA :** compare le traitement médical seul au traitement médical + DAI, au moins 3 mois après un infarctus avec FEVG ≤ 35 %, afin de vérifier si l'absence de DAI est « non inférieure » sur la survie.
- **Left vs Left** (NCT05650658, 2 136 patients estimés, fin principale estimée juin 2029) : compare la stimulation physiologique du système de conduction (faisceau de His ou branche gauche) à la resynchronisation biventriculaire (CRT) classique. **Applicabilité partielle :** ne concerne que les patients avec QRS large (≥ 130 ms) ou besoin élevé de stimulation.
- **PREVENT-VT** (NCT06543173, 62 patients estimés, 2030) : ablation précoce par cathéter des circuits cicatriciels de tachycardie ventriculaire (TV) après pose d'un DAI préventif dans la **cardiomyopathie ischémique avec FEVG ≤ 35 %** et marqueur de haut risque. **Applicabilité directe**, mais petite étude de faisabilité comptant les épisodes de TV. (Chez les patients ayant déjà présenté une TV après infarctus, **VANISH2** a rapporté moins d'événements composites avec une ablation de première intention, sans gain de survie.)

### Diagnostics et imagerie

- **Imagerie pour guider une revascularisation :** **IMPROVE-ICMP** (cité plus haut) est le seul essai en recrutement identifié qui utilise la viabilité myocardique à l'IRM pour sélectionner des patients atteints de cardiomyopathie ischémique avant de comparer stents et traitement médical.
- **Cicatrice IRM pour décider d'un DAI :** **CMR GUIDE** a désormais publié ses résultats, mais chez des patients avec FEVG **36–50 %** et non ≤ 35 %. Aucun essai en cours n'a été identifié pour utiliser la cicatrice IRM comme critère de DAI dans la cardiomyopathie **ischémique** à FEVG ≤ 35 % (les essais guidés par la cicatrice recrutent des causes non ischémiques). À FEVG ≤ 35 %, **PROFID-EHRA** demeure l'essai de référence.
- **Recherches sans résultat positif dans les registres (non exhaustif) :** aucun essai randomisé en recrutement de titration guidée par le NT-proBNP ni aucun nouvel essai de dépistage par IA-ECG ou IA-échographie dans l'ICFER n'a été retrouvé lors de l'extraction de registres réalisée pour cet article.`,
    },
    {
      headingFr: "Dispositifs d'insuffisance cardiaque, rétrécissement aortique modéré et nouveaux médicaments",
      bodyMarkdownFr: `### Dispositifs d'insuffisance cardiaque et rétrécissement aortique modéré

- **RELIEVE-HFrEF** (NCT07696975) : petit shunt interatrial entre les oreillettes vs procédure factice, FEVG ≤ 40 %, NYHA III. **Pas encore en recrutement** (début estimé juillet 2027). Fait suite à un sous-groupe générateur d'hypothèses de l'essai RELIEVE-HF où les patients ICFER avaient moins d'événements (17,5 % vs 32,7 %) tandis que ceux avec ICFEP évoluaient moins bien. Applicabilité partielle (patients plus symptomatiques).
- **CORCINCH-HF** (AccuCinch, NCT04331769) : implant par cathéter réduisant la taille d'un ventricule dilaté (FEVG 20–40 %). **Suspendu** dans l'attente de modifications du protocole (fiche de registre mise à jour en juin 2026).
- **PROACTIVE-HF-2** (capteur de pression pulmonaire Cordella, NCT05934487, 1 750 patients estimés, sept. 2028) : suivi guidé par pression artérielle pulmonaire en NYHA II–III après hospitalisation IC récente. Applicabilité partielle.
- **AIM HIGHer** (modulation de la contractilité cardiaque) : inclut uniquement des FEVG de 40 à 70 % (**indirect**).
- **EXPAND TAVR II (` + '`NCT05149755`' + `, Medtronic) :** recrutement clos (` + '`ACTIVE_NOT_RECRUITING`' + `, mis à jour sept. 2026), **650 patients estimés** ≥ 65 ans avec FEVG > 20 % et rétrécissement aortique modéré à risque, comparant TAVI auto-expansible (Evolut PRO+/FX) + traitement de fond vs traitement de fond seul ; critère principal à 2 ans (décès, hospitalisation/événement IC ou instabilité conduisant à un remplacement valvulaire), fin principale estimée **septembre 2027**. **Applicabilité partielle — limite clé en ICFER :** exige ` + '`Vmax ≥ 3,0 m/s`' + ` ou ` + '`gradient moyen ≥ 20 mmHg`' + `, **excluant les sténoses modérées bas gradient (< 20 mmHg)** fréquentes dans l'ICFER.
- **PROGRESS (` + '`NCT04889872`' + `, Edwards) :** la cohorte randomisée de 744 patients avec sténose aortique modérée **a été publiée dans le *NEJM* le 2 novembre 2026** (résumé vérifié : décès toutes causes ou événement IC à 2 ans **16,7 % vs 23,9 %**, **différence de risque -7,2 points** [IC 95 % -13,1 à -1,3 ; p = 0,02] ; mortalité totale 8,4 % vs 7,3 % ; événement IC 10,8 % vs 19,0 % ; FEVG majoritairement préservée — seulement 25 % de FEVG < 60 % selon la couverture secondaire ; aucun sous-groupe ICFER encore consultable). La fiche ClinicalTrials.gov reste ` + '`RECRUITING`' + ` (2 250 estimés, fin principale **juin 2029**) pour sa **phase d'accès continu** post-randomisation. **Applicabilité partielle / indirecte.**

### Nouveaux médicaments

- **Finérénone (*Kerendia*) :** **FINALITY-HF** (ICFER chez les patients ne pouvant prendre spironolactone ou éplérénone ; fin principale estimée d'août 2026 dépassée, toujours en recrutement), **REDEFINE-HF** et **CONFIRMATION-HF** (fin estimée novembre 2027 pour les deux).
- **BalanceD-HF** (NCT06307652, 4 005 patients inclus, fin principale estimée avril 2027) : balcinrénone (nouveau modulateur du récepteur minéralocorticoïde) + dapagliflozine vs dapagliflozine. **Applicabilité partielle :** requiert une fonction rénale diminuée (DFGe 20–60), un événement IC récent et l'absence d'ARM, sans limite de FEVG.
- **COMET-HF** (omécamtiv mécarbil, NCT06736574, 1 800 patients estimés, sept. 2027) : réservé aux FEVG sévèrement réduites (< 30 %).
- **Signaux précoces de phase 2 (non prêts pour la pratique) :** **LUMINARA** (agoniste oral de la relaxine AZD5462) a montré une diminution limite, non significative, du volume ventriculaire dans le groupe FEVG ≤ 35 % (-5,4 mL/m², p = 0,054). Un nouvel essai anti-miR-132 (NCT06979375) se poursuit après l'échec de **HF-REVERT**. **ARTEMIS** (ziltivékimab anti-inflammatoire, 8 350 patients, résultats attendus en 2027) inclut des infarctus aigus récents et non des cardiomyopathies chroniques.
- **Autres nouvelles classes (registres au 25 nov. 2026) :**
  - **CALIBRATE-HF** (NCT07750873, en recrutement, 525 patients estimés, sept. 2028) : inhibiteur oral de CaMKII (CRD-4730) dans les FEVG ≤ 40 %, NYHA II–III ; patients ischémiques admissibles. **Applicabilité partielle :** phase 2 sur critères d'imagerie et biologiques.
  - **GOAL-HF2** (NCT07584967, en recrutement, 400 patients estimés) : agoniste oral du récepteur de la ghréline (AC01) dans les FEVG ≤ 35 % chroniques. Applicabilité partielle ; critères intermédiaires de phase 2.
  - **Danicamtiv** (activateur de la myosine) : son essai principal (**KINSHIP-DCM**) **exclut** l'insuffisance cardiaque principalement liée à une maladie coronaire (**non applicable**).
  - **Istaroxime :** évalué uniquement en perfusion de 48 heures dans le choc cardiogénique débutant (**RESCUE HF-CS**), pas en traitement de fond.
  - **Anticorps activateurs du récepteur des peptides natriurétiques (NPR1) :** développement à l'arrêt — **XXB750** (Novartis) interrompu (hausse du NT-proBNP à la forte dose) et **REGN5381** (Regeneron) interrompu sur décision du promoteur.
- **Médicaments GLP-1 et nouvelles incrétines (registres au 25 nov. 2026) :**
  - **Aucun essai sur critères cliniques durs dans l'ICFER** n'a été retrouvé sur ClinicalTrials.gov pour un agoniste GLP-1, un double ou un triple agoniste (EU CTIS et WHO ICTRP non interrogés).
  - Deux petits essais évaluent uniquement la capacité fonctionnelle dans l'ICFER : tirzépatide vs placebo (NCT07738276, 60 patients, marche de 6 minutes, juin 2027) et sémaglutide vs régime alimentaire (NCT06423599, 100 patients, pic de VO2, déc. 2027). **Applicabilité partielle :** critères intermédiaires.
  - **TRIUMPH-Outcomes** (rétatrutide, NCT06383390, ~10 000 patients, 2029) : IMC ≥ 27 avec maladie artérielle ou rénale ; exclut seulement la classe NYHA IV et l'IC aiguë, sans critère de FEVG. **Applicabilité partielle** si des résultats spécifiques ICFER sont publiés.
  - **MARITIME-HF** (MariTide, ~5 056 patients) : impose une FEVG > 40 % (**non applicable**).`,
    },
    {
      headingFr: 'Thérapies cellulaires, tissulaires et géniques (phases précoces)',
      bodyMarkdownFr: `Ces approches demeurent **expérimentales**. Aucune n'est autorisée pour la cardiomyopathie ischémique dans l'Union européenne (liste EMA des médicaments de thérapie innovante, juin 2026), et le domaine cellulaire accumule un long historique d'essais neutres (**CONCERT-HF**, **DREAM-HF**).

- **Mesoblast (cellules de DREAM-HF) :** après l'essai négatif, le laboratoire a déposé aux États-Unis en 2026 un dossier pour une indication étroite — l'insuffisance cardiaque droite et les saignements digestifs chez les porteurs d'une assistance circulatoire mécanique (LVAD) — et non pour la cardiomyopathie ischémique en général (**applicabilité indirecte**).
- **CardiAMP HF II** (**applicabilité directe**) prolonge **CardiAMP-HF**, qui était neutre sur son critère principal (win ratio 1,01 ; p = 0,954). Le nouvel essai a remplacé un niveau de son critère hiérarchique principal par la qualité de vie, domaine où le premier essai affichait un signal post hoc ; le promoteur est le fabricant du procédé.
- **Muscle cardiaque cultivé en laboratoire (cellules iPS) :**
  - **BioVAT-HF** (Allemagne, NCT04396899, toujours en recrutement, NEJM 2026, bras unique) : suture de patchs de myocarde dérivés de cellules iPS de donneur sur le cœur de patients avec FEVG ≤ 35 %. Chez 12 patients avec suivi précoce, la FEVG a progressé de 3,9 points (p = 0,04 ; qualité de vie non significativement améliorée), au prix d'une immunosuppression obligatoire, d'effets indésirables chez tous les patients et de 3 décès parmi les 20 patients traités (vasoplégie, COVID-19, dissection aortique).
  - **LAPiS** (Japon, Heartseed HS-001) : injection de sphéroïdes myocardiques issus de cellules iPS chez 10 patients ischémiques lors d'un pontage programmé ; sans groupe témoin et avec un pontage simultané, l'effet propre des cellules ne peut être isolé.
- **Première autorisation conditionnelle mondiale (Japon uniquement — RiHEART) :** en février 2026, l'autorité japonaise (PMDA) a accordé à **RiHEART** (Cuorips — feuillets de myocarde dérivés de cellules iPS) une **autorisation conditionnelle limitée dans le temps (7 ans)** sur la base d'une étude non contrôlée de **8 patients** (seuls 2 ont atteint l'objectif de FEVG à l'ETT, non confirmé au scanner ; 7 sur 8 ont eu des effets indésirables liés aux 3 mois d'immunosuppression). Aucun dossier européen n'a été identifié.
- **Thérapie génique :** **MUSIC-HFrEF1** (SERCA2a) présente une fiche obsolète (2024). **GenePHIT** (AB-1002) **exclut** la cardiomyopathie ischémique.`,
    },
    {
      headingFr: 'Compléments alimentaires, fer intraveineux, nutrition et organisation des soins',
      bodyMarkdownFr: `### Compléments, fer IV et nutrition

Les essais en cours ne modifient pas les verdicts actuels sur les compléments alimentaires.

- **Thiamine — COLT-HF :** seul grand essai sur critères cliniques d'un complément conçu spécifiquement pour l'insuffisance cardiaque **ischémique** (FEVG ≤ 45 %). Le bras thiamine est mené en ouvert (sans placebo).
- **Coenzyme Q10 — trois grands essais européens vérifiés sur registres publics (25 nov. 2026) :**
  - **CORAL (Royaume-Uni, ` + '`ISRCTN26946710`' + `, NIHR HTA) :** essai de soins primaires chez **950** patients ciblés (1 025 dans le protocole *BMJ Open* nov. 2026) avec ICFER / dysfonction VG (NYHA ≥ II ; **exclut la warfarine**), testant l'ubiquinone pharmaceutique *Myoqinon* 100 mg × 3/jour (300 mg/j) vs placebo pendant 12 mois ; **critère principal : qualité de vie KCCQ à 12 mois** (non dimensionné pour la mortalité) ; recrutement fév. 2025 – nov. 2026, fin globale **mai 2028** (remplaçant les mentions obsolètes de janv. 2027). **Applicabilité directe pour la qualité de vie.**
  - **DANUTRIO-HF (Danemark, ` + '`NCT06694727`' + `, Herlev & Gentofte + Pharma Nord) :** **4 044 patients estimés**, essai randomisé de registre 2×2 quadruple aveugle (**exclut les AVK/warfarine** ; absence de comité indépendant de surveillance DMC notée au registre) évaluant **CoQ10 100 mg × 2/jour (200 mg/j)** et **sélénium 100 µg × 2/jour** dans l'IC toute FEVG sous bloqueur SRAA + bêtabloquant ; critère principal **1re hospitalisation IC ou décès CV** (~33 mois) ; fin principale estimée **décembre 2028** (fin étude juin 2029). **Applicabilité partielle à directe** (premier essai moderne de puissance adéquate sur critères cliniques durs pour la CoQ10, sans limite de FEVG).
  - **SELEQT-HF (Pays-Bas, ` + '`NCT07234422`' + `, NHI/UMCG + Pharma Nord) :** **1 100 patients estimés**, triple aveugle, évaluant l'**association sélénium 200 µg/j + CoQ10 200 mg/j** vs placebo dans l'IC toute FEVG NYHA II–IV avec NT-proBNP élevé ; fin principale estimée **décembre 2030**. **Applicabilité partielle / indirecte** (toute FEVG ; ne peut isoler l'effet propre de la CoQ10).
- **Fer intraveineux à l'ère des iSGLT2 :**
  - **COMBINED-HF (` + '`NCT06434025`' + `, Brésil) :** essai triple aveugle à 3 bras chez **99 patients ICFER (FEVG < 40 %) naïfs d'iSGLT2** carencés en fer comparant **carboxymaltose ferrique IV 1 000 mg + dapagliflozine 10 mg**, FCM + placebo ou double placebo ; critère principal **FEVG à l'IRM à 30 jours** (intermédiaire) ; statut **` + '`UNKNOWN`' + `** (date estimée mai 2026 dépassée, aucun résultat publié). **Population directe, critère intermédiaire.**
  - **INFERRCT (` + '`NCT05759078`' + `, Pologne) :** essai académique en double aveugle chez **1 000 patients dans les 4 semaines après infarctus aigu** ayant strictement un **CST < 20 %** et des critères de haut risque (FEVG ≤ 50 %, NT-proBNP élevé ou congestion), comparant **FCM IV 1 000 mg** (réévalué à 4–6 mois) vs placebo salin sur un win ratio hiérarchique jusqu'à 36 mois ; en recrutement, fin estimée **décembre 2026**. **Applicabilité partielle** (post-IDM aigu plutôt qu'ICFER chronique stable).
- **Sélénium — SIRI-HF (Suède / Norvège) :** 4 326 patients estimés, tout type d'IC, résultats attendus vers 2030 (**indirect**).
- **Boissons cétoniques :** domaine le plus actif avec 34 études enregistrées, toutes petites ou mécanistiques. L'essai croisé de Duke (` + '`NCT06195982`' + `, 25 patients) s'est terminé le 27 août 2026 sans résultat publié ; l'essai d'Aarhus sur 14 jours (*Circulation* 2024) a montré +0,3 L/min de débit cardiaque sans gain de capacité d'effort. **KETO-AHF (` + '`NCT06653725`' + `)** est le plus vaste (250 patients, 1,3-butanediol vs placebo 30 jours après hospitalisation IC, FEVG ≤ 35 %, win ratio composite, en recrutement, attendu **2028**).
- **Microbiote intestinal et autres compléments :** les capsules de transplantation fécale sont en phase 1–2 (surtout ICFEP) ; **GutHeart** (rifaximine ou levure probiotique dans l'ICFER) était neutre. **RESALT-CHF** (gélules de sel) ne recrute pas encore. Au 25 nov. 2026 sur ClinicalTrials.gov : aucun essai clinique ICFER en cours pour créatine, taurine, D-ribose (essai retiré sans patient), berbérine, oméga-3 ou L-carnitine. Pour le magnésium, un essai israélien de phase 3 (` + '`NCT03840226`' + `, ~320 patients IC sous diurétiques) reste de statut inconnu depuis décembre 2023 sans résultat publié.

### Organisation des soins, chirurgie et règles « jours de maladie »

- **Optimisation accélérée des médicaments :** **TIME-HF** (Inde, ESC 2026 ; communiqué uniquement) a rapporté qu'un suivi infirmier téléphonique augmentait le recours aux 4 piliers (37,3 % vs 22,1 %) et la survie sans hospitalisation (84,0 % vs 79,4 %). **PATRIOT-HF** (titration par pharmaciens, US VA) et des essais numériques (**VITAL-HF**, **ENGAGE-HF**) testent des schémas voisins.
- **Réadaptation basée sur le yoga — Yoga-CaRe HF (AHA 2026) :** 3 492 patients ICFER en Inde ; amélioration KCCQ/MLHFQ (+8,1 pts) et marche de 6 min (+25,5 m), sans baisse significative des événements cliniques (HR 0,90 ; 0,78–1,04). Données de congrès uniquement.
- **Pause péri-opératoire des iSGLT2 — DISCO (` + '`NCT07766109`' + `, CHU de Toulouse, France) :** essai de phase 4 en ouvert (**434 patients estimés**) chez des patients avec **FEVG < 50 %** sous dapagliflozine ou empagliflozine opérés de **chirurgie cardiaque**, comparant la poursuite jusqu'au matin de l'opération à une pause systématique de 3 jours (avec surveillance de la cétonémie capillaire dans les deux bras) sur les événements CV à 30 jours ; ` + '`NOT_YET_RECRUITING`' + `, estimé **décembre 2026 – mars 2029**. **Applicabilité partielle** (chirurgie cardiaque en France à FEVG < 50 %, et non jours de maladie à domicile).
- **Règles « jours de maladie » — PAUSE (` + '`NCT06433414`' + `, Université d'Alberta, Canada) :** essai pilote en grappes sur 16 pharmacies (**320 patients estimés**) comparant une application mobile à une fiche papier sur la faisabilité et l'adhésion à des scénarios simulés (` + '`NOT_YET_RECRUITING`' + `, **janvier–décembre 2027** ; non dimensionné pour IRA, acidocétose ou hospitalisations IC). **Applicabilité indirecte.**`,
    },
    {
      headingFr: 'Insuffisance cardiaque avancée : pompes cardiaques (LVAD), myosine et xénogreffes',
      bodyMarkdownFr: `Ces essais ne concernent que l'hypothèse d'une évolution vers une insuffisance cardiaque avancée (stade D).

| Essai | Question testée | Population | Statut (25 nov. 2026) |
|---|---|---|---|
| **AMBU-VAD** (` + '`NCT04768322`' + `, coordination française) | LVAD HeartMate 3 précoce vs traitement médical | 92 patients, FEVG ≤ 35 %, profils INTERMACS 4–6 | En recrutement ; fin attendue en **2029** |
| **TEAM-HF** (` + '`NCT06526195`' + `, Abbott) | LVAD plus précoce chez des patients ambulatoires | ~850 patients, FEVG ≤ 30 %, pression pulmonaire élevée | En recrutement ; fin principale attendue en **2029** |
| **COMET-HF** (` + '`NCT06736574`' + `) | Omécamtiv mécarbil vs placebo | ~1 800 patients, FEVG < 30 %, NT-proBNP élevé, événement IC récent | En recrutement ; fin principale estimée **2027–2028** |
| **EXPRESS** (United Therapeutics) | Premier essai prospectif de transplantation de cœur porcin génétiquement modifié | ≥ 50 ans, stade D sans autre option | Autorisé par la FDA en mai 2026 ; États-Unis uniquement |`,
    },
    {
      headingFr: 'Ce qui a échoué ou stagné en 2025–2026 et précautions de lecture',
      bodyMarkdownFr: `| Essai | Traitement évalué | Résultat | Applicabilité |
|---|---|---|---|
| **H-HeFT** (DANHEART, Eur Heart J 2026) | Hydralazine + dinitrate d'isosorbide, FEVG ≤ 40 % | Neutre : HR 0,90 (0,67–1,21) ; décès 19,4 % vs 24,2 % (ns) ; > 50 % d'arrêts | Direct (FEVG médiane 35 %, 52–56 % ischémiques) |
| **Met-HeFT** (DANHEART) | Metformine dans l'ICFER avec risque diabétique | Neutre : HR 1,10 (0,84–1,42) | Partiel |
| **CHIP-BCIS3** (ACC 2026 / NEJM) | Assistance Impella lors d'une angioplastie à haut risque | Neutre ; davantage de décès CV sous pompe (secondaire) ; mortalité totale 47 vs 33 (HR 1,54) | Partiel (FEVG ≤ 35 % ; surtout présentations aiguës) |
| **CardiAMP-HF** (ACC 2025) | Cellules de moelle osseuse dans l'ICFER ischémique | Neutre (win ratio 1,01) | Direct |
| **HF-REVERT** (2026) | Anti-miR-132 précocement après infarctus | Critère de remodelage non atteint | Partiel |
| **LUMINARA** (ESC 2026) | Agoniste oral de la relaxine (AZD5462) | Effet limite, non significatif (p = 0,054) | Indirect |
| **Cycle-1-REF** (HFSA 2026) | Inhibiteur oral de PDE9 | Pas d'effet net sur le NT-proBNP | Partiel |
| **NATRIX-BNP / XXB750** | Anticorps activateurs de NPR1 | Interrompus (absence de baisse ou hausse du NT-proBNP à forte dose) | Partiel |
| **SHINE-CTO** | Angioplastie de CTO contre procédure factice | Retiré en 2021, aucun patient inclus | — |

### Précautions de lecture

- **Décalage des registres :** Yoga-CaRe HF apparaît encore « en recrutement » après présentation de ses résultats ; PROTECT IV, FINALITY-HF et COMBINED-HF ont dépassé leurs dates estimées sans résultats publiés ; MUSIC-HFrEF1 n'a plus été mis à jour depuis 2024.
- **Données préliminaires :** plusieurs résultats 2026 reposent encore sur des présentations en congrès, des communiqués ou des résumés (Met-HeFT, Yoga-CaRe HF, LUMINARA, TIME-HF, résumé NEJM de PROGRESS) et peuvent évoluer lors de l'analyse complète.
- **Discussion médicale :** si vous vous demandez si un essai clinique académique ouvert en France (en CHU ou en centre expert d'insuffisance cardiaque) correspond à votre situation, parlez-en directement avec votre cardiologue.`,
    },
  ],
  relatedArticleSlugs: [
    'traitements-additionnels-nouveaux',
    'essais-cliniques-cles',
    'revascularisation-pontage-stents',
    'dispositifs-cardiaques-dai-crt',
    'stenose-aortique-fevg-reduite',
    'occlusion-coronaire-chronique-cto',
    'vitamines-b-insuffisance-cardiaque',
    'readaptation-cardiaque-et-activite-physique',
    'cellules-souches-et-therapies-regeneratives',
    'coenzyme-q10',
    'these-coq10-mortalite-icfer-moderne',
    'these-fer-iv-et-isglt2-quadritherapie',
    'these-jours-de-maladie-sraa-vs-isglt2',
    'finerenone-et-nouveaux-arm',
    'medicaments-glp1-et-incretines',
    'magnesium-insuffisance-cardiaque',
    'complements-energetiques-cardiaques',
    'fibres-alimentaires-et-axe-intestin-coeur',
    'telesurveillance-insuffisance-cardiaque',
    'tableau-preuves-nutrition-complements',
    'medicaments-insuffisance-cardiaque',
    'insuffisance-cardiaque-avancee-stade-d',
    'assistance-circulatoire-lvad',
    'inotropes-insuffisance-cardiaque-avancee',
  ],
  sources: [
    {
      label: 'Registres publics ClinicalTrials.gov et ISRCTN (25 novembre 2026)',
      detail: '47 essais en cardiomyopathie ischémique / ICFER ainsi que CORAL (ISRCTN26946710), DANUTRIO-HF (NCT06694727), SELEQT-HF (NCT07234422), COMBINED-HF (NCT06434025), INFERRCT (NCT05759078), EXPAND TAVR II (NCT05149755), PROGRESS (NCT04889872), DISCO (NCT07766109), PAUSE (NCT06433414), AMBU-VAD (NCT04768322), TEAM-HF (NCT06526195) et KETO-AHF (NCT06653725)',
    },
    {
      label: 'Résultats 2026 : PROGRESS (NEJM nov. 2026), H-HeFT (Eur Heart J 2026), Met-HeFT (ESC 2026), CHIP-BCIS3 (NEJM 2026), Yoga-CaRe HF (AHA 2026), LUMINARA (ESC 2026) et TIME-HF',
      detail: 'Texte intégral H-HeFT, résumés NEJM PROGRESS et CHIP-BCIS3, présentations de congrès et synthèses de résultats 2026',
    },
    {
      label: 'Thérapies cellulaires et IC avancée : BioVAT-HF (NEJM 2026), rapport PMDA RiHEART (fév. 2026), LAPiS, CardiAMP-HF, DREAM-HF, CONCERT-HF, liste EMA MTI (juin 2026) et EXPRESS (xénogreffe FDA mai 2026)',
      detail: 'Évaluation des patchs/sphéroïdes iPS, absence de MTI cardiaque autorisé dans l’UE et essais de LVAD/inotropes/xénogreffes',
    },
  ],
  disclaimerType: 'medical',
};
