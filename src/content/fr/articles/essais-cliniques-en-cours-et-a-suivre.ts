import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'essais-cliniques-en-cours-et-a-suivre',
  sourceWikiPath: 'wiki/topics/trials-to-watch-ongoing-and-planned-research.md',
  titleFr: 'Essais cliniques en cours et recherche à suivre',
  category: 'references',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'hot',
  tags: [
    'essais-cliniques',
    'essais-en-cours',
    'recherche',
    'revascularisation',
    'dispositifs',
    'cellules-souches',
    'complements',
    'organisation-des-soins',
    'stich3',
    'profid-ehra',
    'colt-hf',
    'cardiamp',
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
    "De nombreux essais cliniques évaluent de nouvelles approches pour un cœur affaibli par une maladie coronaire. La plupart nécessiteront encore deux à cinq ans avant de livrer leurs résultats, et la majorité des pistes innovantes échouent lorsqu'elles sont testées rigoureusement. Au 25 novembre 2026, les études les plus directement pertinentes pour une cardiomyopathie ischémique avec FEVG autour de 35 % comparent le pontage aux stents dans les atteintes pluritronculaires (STICH3, vers 2029), réévaluent le défibrillateur préventif sous traitement moderne (PROFID-EHRA, vers 2027–2028), testent la thiamine et la colchicine (COLT-HF, vers 2027) ainsi que la thérapie cellulaire autologue contre procédure factice (CardiAMP HF II, vers 2027). Un essai en cours ne prouve pas qu'un traitement fonctionne.",
  sections: [
    {
      headingFr: "Comment lire le niveau d'applicabilité et les dates des registres",
      bodyMarkdownFr: `Chaque essai présenté sur cette page est accompagné d'un repère indiquant à quel point les patients inclus correspondent à une **cardiomyopathie ischémique avec FEVG autour de 35 %** :

- **Direct :** inclut essentiellement cette population (cause ischémique, FEVG ≤ 40 %).
- **Partiel :** recouvre cette situation mais impose un critère supplémentaire (QRS large, hospitalisation récente, insuffisance rénale, symptômes sévères) ou mélange plusieurs causes.
- **Indirect :** cible une population différente (FEVG > 40 %, infarctus aigu récent, toute FEVG) ou ne précise pas la cause ni la FEVG.
- **Non applicable :** exclut les patients d'origine ischémique.

Tous les statuts et calendriers proviennent des registres publics d'essais cliniques consultés le **25 novembre 2026**, sauf mention d'une autre source. Les dates annoncées (« est. ») sont des estimations des promoteurs et glissent fréquemment. Les résultats d'essais ne sauraient justifier une modification de traitement sans l'avis de votre cardiologue.`,
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
- **PREVENT-VT** (NCT06543173, 62 patients estimés, 2030) : ablation précoce par cathéter des circuits cicatriciels de tachycardie ventriculaire (TV) après pose d'un DAI préventif dans la **cardiomyopathie ischémique avec FEVG ≤ 35 %** et marqueur de haut risque. **Applicabilité directe**, mais petite étude de faisabilité comptant les épisodes de TV. (Chez les patients ayant déjà présenté une TV après infarctus, l'essai VANISH2 a rapporté moins d'événements avec une ablation de première intention, d'après un résumé de recherche uniquement.)

### Diagnostics et imagerie

- **Imagerie pour guider une revascularisation :** **IMPROVE-ICMP** (cité plus haut) est le seul essai en recrutement identifié qui utilise la viabilité myocardique à l'IRM pour sélectionner des patients atteints de cardiomyopathie ischémique avant de comparer stents et traitement médical.
- **Cicatrice IRM pour décider d'un DAI :** **CMR GUIDE** a désormais publié ses résultats, mais chez des patients avec FEVG **36–50 %** et non ≤ 35 %. Aucun essai en cours n'a été identifié pour utiliser la cicatrice IRM comme critère de DAI dans la cardiomyopathie **ischémique** à FEVG ≤ 35 % (les essais guidés par la cicatrice recrutent des causes non ischémiques). À FEVG ≤ 35 %, **PROFID-EHRA** demeure l'essai de référence.
- **Recherches sans résultat positif dans les registres (non exhaustif) :** aucun essai randomisé en recrutement de titration guidée par le NT-proBNP ni aucun nouvel essai de dépistage par IA-ECG ou IA-échographie dans l'ICFER n'a été retrouvé lors de l'extraction de registres réalisée pour cet article.`,
    },
    {
      headingFr: "Dispositifs d'insuffisance cardiaque et nouveaux médicaments",
      bodyMarkdownFr: `### Dispositifs d'insuffisance cardiaque

- **RELIEVE-HFrEF** (NCT07696975) : petit shunt interatrial entre les oreillettes vs procédure factice, FEVG ≤ 40 %, NYHA III. **Pas encore en recrutement** (début estimé juillet 2027). Fait suite à un sous-groupe générateur d'hypothèses de l'essai RELIEVE-HF où les patients ICFER avaient moins d'événements (17,5 % vs 32,7 %) tandis que ceux avec ICFEP évoluaient moins bien. Applicabilité partielle (patients plus symptomatiques).
- **CORCINCH-HF** (AccuCinch, NCT04331769) : implant par cathéter réduisant la taille d'un ventricule dilaté (FEVG 20–40 %). **Suspendu** dans l'attente de modifications du protocole (fiche de registre mise à jour en juin 2026).
- **PROACTIVE-HF-2** (capteur de pression pulmonaire Cordella, NCT05934487, 1 750 patients estimés, sept. 2028) : suivi guidé par pression artérielle pulmonaire en NYHA II–III après hospitalisation IC récente. Applicabilité partielle.
- **AIM HIGHer** (modulation de la contractilité cardiaque) : inclut uniquement des FEVG de 40 à 70 % (**indirect**).

### Nouveaux médicaments

- **Finérénone (Kerendia) :** **FINALITY-HF** (ICFER chez les patients ne pouvant prendre spironolactone ou éplérénone ; fin principale estimée d'août 2026 dépassée, toujours en recrutement), **REDEFINE-HF** et **CONFIRMATION-HF** (fin estimée novembre 2027 pour les deux).
- **BalanceD-HF** (NCT06307652, 4 005 patients inclus, fin principale estimée avril 2027) : balcinrénone (nouveau modulateur du récepteur minéralocorticoïde) + dapagliflozine vs dapagliflozine. **Applicabilité partielle :** requiert une fonction rénale diminuée (DFGe 20–60), un événement IC récent et l'absence d'ARM, sans limite de FEVG.
- **COMET-HF** (omécamtiv mécarbil, NCT06736574, 1 800 patients estimés, sept. 2027) : réservé aux FEVG sévèrement réduites.
- **Signaux précoces de phase 2 (non prêts pour la pratique) :** **LUMINARA** (agoniste oral de la relaxine AZD5462) a montré une diminution limite, non significative, du volume ventriculaire dans le groupe FEVG ≤ 35 % (-5,4 mL/m², p = 0,054). Un nouvel essai anti-miR-132 (NCT06979375) se poursuit après l'échec de **HF-REVERT**. **ARTEMIS** (ziltivékimab anti-inflammatoire, 8 350 patients, résultats attendus en 2027) inclut des infarctus aigus récents et non des cardiomyopathies chroniques.
- **Autres nouvelles classes (registres au 25 nov. 2026) :**
  - **CALIBRATE-HF** (NCT07750873, en recrutement, 525 patients estimés, sept. 2028) : inhibiteur oral de CaMKII (CRD-4730) dans les FEVG ≤ 40 %, NYHA II–III ; patients ischémiques admissibles. **Applicabilité partielle :** phase 2 sur critères d'imagerie et biologiques, pas sur événements cliniques.
  - **GOAL-HF2** (NCT07584967, en recrutement, 400 patients estimés) : agoniste oral du récepteur de la ghréline (AC01) dans les FEVG ≤ 35 % chroniques. Applicabilité partielle ; critères intermédiaires de phase 2.
  - **Danicamtiv** (activateur de la myosine) : son essai principal (**KINSHIP-DCM**) **exclut** l'insuffisance cardiaque principalement liée à une maladie coronaire (**non applicable**).
  - **Istaroxime :** évalué uniquement en perfusion de 48 heures dans le choc cardiogénique débutant (**RESCUE HF-CS**), pas en traitement de fond.
  - **Anticorps activateurs du récepteur des peptides natriurétiques (NPR1) :** développement à l'arrêt — **XXB750** (Novartis) interrompu (hausse du NT-proBNP à la forte dose, avec signal de danger décrit dans la presse spécialisée) et **REGN5381** (Regeneron) interrompu sur décision du promoteur.
  - Aucun essai enregistré de siRNA ou d'oligonucléotide antisens ciblant directement le cœur dans l'ICFER n'a été retrouvé (recherche non exhaustive).
- **Médicaments GLP-1 et nouvelles incrétines (registres au 25 nov. 2026) :**
  - **Aucun essai sur critères cliniques durs dans l'ICFER** n'a été retrouvé sur ClinicalTrials.gov pour un agoniste GLP-1, un double ou un triple agoniste (EU CTIS et WHO ICTRP non interrogés).
  - Deux petits essais évaluent uniquement la capacité fonctionnelle dans l'ICFER : tirzépatide vs placebo (NCT07738276, 60 patients, marche de 6 minutes, juin 2027) et sémaglutide vs régime alimentaire (NCT06423599, 100 patients, pic de VO2, déc. 2027). **Applicabilité partielle :** critères intermédiaires.
  - **TRIUMPH-Outcomes** (rétatrutide, NCT06383390, ~10 000 patients, 2029) : IMC ≥ 27 avec maladie artérielle ou rénale ; hospitalisations IC intégrées au critère ; exclut seulement la classe NYHA IV et l'IC aiguë, sans critère de FEVG. **Applicabilité partielle** si des résultats spécifiques ICFER sont publiés.
  - **MARITIME-HF** (MariTide, ~5 056 patients) : impose une FEVG > 40 % (**non applicable**).`,
    },
    {
      headingFr: 'Thérapies cellulaires, tissulaires et géniques (phases précoces)',
      bodyMarkdownFr: `Ces approches demeurent **expérimentales**. Aucune n'est autorisée pour la cardiomyopathie ischémique dans l'Union européenne (liste EMA des médicaments de thérapie innovante, juin 2026), et le domaine cellulaire accumule un long historique d'essais neutres : **CONCERT-HF** (ICFER ischémique, 2021) n'a montré aucun changement de FEVG ni de cicatrice, et **DREAM-HF** (cellules de donneur vs procédure factice, 565 patients, 2023) s'est révélé négatif sur son critère principal.

- **Mesoblast (cellules de DREAM-HF) :** après cet essai négatif, le laboratoire a déposé aux États-Unis en 2026 un dossier pour une indication étroite — l'insuffisance cardiaque droite et les saignements digestifs chez les porteurs d'une assistance circulatoire mécanique (LVAD) — et non pour la cardiomyopathie ischémique en général. Aucune décision de la FDA n'a été retrouvée (**applicabilité indirecte**).
- **CardiAMP HF II** (**applicabilité directe**) prolonge **CardiAMP-HF**, qui était neutre sur son critère principal (win ratio 1,01 ; p = 0,954). Le nouvel essai a remplacé un niveau de son critère hiérarchique principal par la qualité de vie, domaine où le premier essai affichait un signal post hoc ; le promoteur est le fabricant du procédé. Un éventuel résultat positif devra donc être interprété avec rigueur.
- **Muscle cardiaque cultivé en laboratoire (cellules iPS) :**
  - **BioVAT-HF** (Allemagne, NCT04396899, toujours en recrutement, NEJM 2026, bras unique) : suture de patchs de myocarde dérivés de cellules iPS de donneur sur le cœur de patients avec FEVG ≤ 35 %. Chez 12 patients avec suivi précoce, la FEVG a progressé de 3,9 points (p = 0,04 ; qualité de vie non significativement améliorée), au prix d'une immunosuppression obligatoire, d'effets indésirables chez tous les patients et de 3 décès parmi les 20 patients traités (vasoplégie, COVID-19, dissection aortique), dans un essai cofinancé par le développeur.
  - **LAPiS** (Japon, Heartseed HS-001) : injection de sphéroïdes myocardiques issus de cellules iPS chez 10 patients ischémiques lors d'un pontage programmé. Le laboratoire rapporte une FEVG moyenne passant d'environ 23–25 % à 31 % à 52 semaines, mais en l'absence de groupe témoin et avec un pontage simultané, l'effet propre des cellules ne peut être isolé. Un dépôt réglementaire japonais était visé pour 2026 sans confirmation trouvée.
- **Première autorisation mondiale (Japon uniquement — RiHEART) :** en février 2026, l'autorité japonaise (PMDA) a accordé à **RiHEART** (Cuorips — feuillets de myocarde dérivés de cellules iPS appliqués sur le cœur par incision thoracique) une **autorisation conditionnelle limitée dans le temps (7 ans)** pour l'insuffisance cardiaque sévère sur cardiomyopathie ischémique (NYHA III–IV, FEVG ≤ 35 %) malgré traitement standard. Le dossier reposait sur une unique étude non contrôlée de **8 patients** : seuls 2 ont atteint l'objectif principal d'amélioration de la FEVG à l'ETT (non confirmé au scanner), aucun décès ni réaction attribuée aux feuillets n'a été relevé, mais 7 patients sur 8 ont présenté des effets indésirables potentiellement liés aux 3 mois d'immunosuppression. Chaque patient traité doit faire l'objet d'un suivi obligatoire ; aucun dossier ni essai européen n'a été identifié. Une autorisation conditionnelle signifie « jugé assez prometteur pour recueillir des preuves en vie réelle », et non un bénéfice démontré.
- **Thérapie génique :** **MUSIC-HFrEF1** (SERCA2a, ouvert à l'ICFER ischémique) présente une fiche de registre obsolète (non actualisée depuis 2024). **GenePHIT** (AB-1002) **exclut** la cardiomyopathie ischémique.`,
    },
    {
      headingFr: 'Compléments alimentaires, nutrition et organisation des soins',
      bodyMarkdownFr: `### Compléments et nutrition

Les essais en cours ne modifient pas les verdicts actuels sur les compléments alimentaires.

- **Thiamine — COLT-HF :** seul grand essai sur critères cliniques d'un complément conçu spécifiquement pour l'insuffisance cardiaque **ischémique** (FEVG ≤ 45 %). Le bras thiamine est mené en ouvert (sans placebo).
- **Coenzyme Q10 — CORAL (soins primaires, Royaume-Uni) :** environ 950 patients avec ICFER recevant 100 mg de CoQ10 trois fois par jour ou un placebo, avec la qualité de vie à 12 mois comme critère ; poursuite prévue jusqu'aux environs de janvier 2027 (site de l'étude ; fiche registre non lisible).
- **Sélénium — SIRI-HF (Suède / Norvège) :** 4 326 patients estimés, tout type d'insuffisance cardiaque, résultats attendus vers 2030 (**applicabilité indirecte** pour l'ICFER).
- **Autres pistes :** seules de petites études mécanistiques existent pour les boissons cétoniques (Duke, terminée sans résultats) et les gélules de sel (RESALT-CHF, pas encore en recrutement). Aucun essai enregistré sur critères cliniques n'a été trouvé pour les oméga-3, la créatine, la L-carnitine, le D-ribose ou la taurine dans l'ICFER. **Correction (25 nov. 2026) :** pour le magnésium, un essai israélien de phase 3 a été enregistré (NCT03840226 : oxyde de magnésium oral vs placebo pendant 1 an chez ~320 patients IC NYHA II–IV sous diurétiques ; critères : distance de marche et qualité de vie, hospitalisations IC en secondaire ; statut inconnu depuis décembre 2023, aucun résultat publié).

### Organisation des soins et réadaptation

- **Optimisation accélérée des médicaments :** **TIME-HF** (Inde, ESC 2026 ; communiqué de presse uniquement, sans fiche registre trouvée) a rapporté qu'un modèle coordonné par des infirmières avec appui téléphonique augmentait le recours aux quatre piliers (37,3 % vs 22,1 %) et la survie sans hospitalisation (84,0 % vs 79,4 %). **PATRIOT-HF** (US Veterans Affairs, titration conduite par des pharmaciens, pas encore en recrutement) et de petits essais de titration numérique (**VITAL-HF**, **ENGAGE-HF**) explorent des schémas voisins.
- **Réadaptation basée sur le yoga — Yoga-CaRe HF (AHA 2026) :** 3 492 patients avec ICFER en Inde ; amélioration de la qualité de vie (+8,1 points) et de la marche de 6 minutes (+25,5 m), sans baisse significative des décès, hospitalisations ou AVC (HR 0,90 ; 0,78–1,04 ; médiane 15 mois). Données de congrès uniquement.`,
    },
    {
      headingFr: 'Ce qui a échoué ou stagné en 2025–2026',
      bodyMarkdownFr: `| Essai | Traitement évalué | Résultat | Applicabilité |
|---|---|---|---|
| **H-HeFT** (DANHEART, Eur Heart J 2026) | Hydralazine + dinitrate d'isosorbide, FEVG ≤ 40 % | Neutre : HR 0,90 (0,67–1,21) ; décès 19,4 % vs 24,2 % (ns) ; plus de la moitié ont arrêté le médicament | Direct (FEVG médiane 35 %, 52–56 % ischémiques) |
| **Met-HeFT** (DANHEART) | Metformine dans l'ICFER avec risque diabétique | Neutre : HR 1,10 (0,84–1,42) | Partiel |
| **CHIP-BCIS3** (ACC 2026 / NEJM) | Assistance Impella lors d'une angioplastie à haut risque | Neutre ; davantage de décès CV sous pompe (secondaire) ; mortalité totale 47 vs 33 (HR 1,54 ; 0,99–2,41) | Partiel (FEVG ≤ 35 % avec atteinte coronaire étendue ; surtout présentations aiguës) |
| **CardiAMP-HF** (ACC 2025) | Cellules de moelle osseuse dans l'ICFER ischémique | Neutre (win ratio 1,01) | Direct |
| **HF-REVERT** (2026) | Anti-miR-132 précocement après infarctus | Critère de remodelage non atteint | Partiel |
| **LUMINARA** (ESC 2026) | Agoniste oral de la relaxine (AZD5462) | Effet limite, non significatif (p = 0,054) | Indirect |
| **Cycle-1-REF** (HFSA 2026) | Inhibiteur oral de PDE9 | Pas d'effet net sur le NT-proBNP | Partiel |
| **NATRIX-BNP** | Anticorps activateur de NPR1 (REGN5381) | Interrompu (« décision du promoteur ») ; pas de baisse du NT-proBNP | Partiel |
| **XXB750** (Novartis) | Anticorps activateur de NPR1 | Interrompu ; hausse du NT-proBNP à forte dose (ratio 1,515 vs 0,903 sous placebo, résultats de registre) | Partiel |
| **SHINE-CTO** | Angioplastie de CTO contre procédure factice | Retiré en 2021, aucun patient inclus | — |

**Enseignements transversaux :** les médicaments anciens repositionnés à faible coût (hydralazine-dérivé nitré, metformine) n'ont pas démontré de bénéfice supplémentaire sur les traitements de fond modernes ; les programmes cellulaires et géniques prolongent souvent des signaux secondaires ou en sous-groupe dans de nouveaux essais remodelés ; les essais de phase 2 sur marqueurs intermédiaires (NT-proBNP, volume du VG) sont fréquemment interrompus discrètement ; enfin, plusieurs programmes excluent d'emblée les patients ischémiques.`,
    },
    {
      headingFr: 'Précautions de lecture et limites',
      bodyMarkdownFr: `- **Décalage des registres :** les fiches publiques ne sont pas toujours actualisées rapidement. Yoga-CaRe HF apparaît encore « en recrutement » après présentation de ses résultats ; PROTECT IV et FINALITY-HF ont dépassé leurs dates estimées sans résultats publiés ; MUSIC-HFrEF1 n'a plus été mis à jour depuis 2024.
- **Données préliminaires de congrès :** plusieurs résultats 2026 reposent encore sur des présentations en congrès ou des communiqués de presse (Met-HeFT, Yoga-CaRe HF, LUMINARA, TIME-HF) et peuvent évoluer lors de la publication complète évaluée par les pairs. H-HeFT a en revanche été vérifié sur son texte intégral (Eur Heart J 2026) et CHIP-BCIS3 sur son résumé NEJM 2026.
- **Discussion avec votre équipe médicale :** si vous vous demandez si un essai clinique est ouvert en France (notamment en CHU ou en centre expert d'insuffisance cardiaque) et si une participation aurait un sens dans votre situation, parlez-en directement avec votre cardiologue.`,
    },
  ],
  relatedArticleSlugs: [
    'traitements-additionnels-nouveaux',
    'essais-cliniques-cles',
    'revascularisation-pontage-stents',
    'dispositifs-cardiaques-dai-crt',
    'occlusion-coronaire-chronique-cto',
    'vitamines-b-insuffisance-cardiaque',
    'readaptation-cardiaque-et-activite-physique',
    'cellules-souches-et-therapies-regeneratives',
    'coenzyme-q10',
    'finerenone-et-nouveaux-arm',
    'medicaments-glp1-et-incretines',
    'magnesium-insuffisance-cardiaque',
    'telesurveillance-insuffisance-cardiaque',
    'tableau-preuves-nutrition-complements',
    'medicaments-insuffisance-cardiaque',
  ],
  sources: [
    {
      label: 'Extraction des registres publics d’essais cliniques (ClinicalTrials.gov, 25 novembre 2026)',
      detail: 'Statut, effectifs, critères d’éligibilité et dates estimées de 47 essais en cardiomyopathie ischémique / ICFER, incluant STICH3, PROFID-EHRA, COLT-HF, CardiAMP HF II, PCI-GULF, PROTECT IV, ISCHEMIA-CTO, SHINE-CTO (retiré) et le pipeline GLP-1/incrétines',
    },
    {
      label: 'Essais publiés ou présentés en 2026 : H-HeFT (Eur Heart J 2026), Met-HeFT (ESC 2026), CHIP-BCIS3 (NEJM 2026), Yoga-CaRe HF (AHA 2026) et LUMINARA (ESC 2026)',
      detail: 'Texte intégral H-HeFT, résumé NEJM CHIP-BCIS3, présentations de congrès et synthèses de résultats 2026 (TIME-HF, HF-REVERT, Cycle-1-REF, RELIEVE-HF)',
    },
    {
      label: 'Thérapies cellulaires et réglementation : BioVAT-HF (NEJM 2026), rapport PMDA RiHEART (fév. 2026), LAPiS (Heartseed), CardiAMP-HF, DREAM-HF (JACC 2023), CONCERT-HF (EJHF 2021) et liste EMA des MTI (juin 2026)',
      detail: 'Évaluation des patchs et sphéroïdes dérivés de cellules iPS, autorisation conditionnelle japonaise de RiHEART et absence de thérapie cardiaque cellulaire autorisée dans l’UE',
    },
    {
      label: 'Protocole PROFID-EHRA (2026) et registres finérénone (FINALITY-HF, REDEFINE-HF, CONFIRMATION-HF)',
      detail: 'Schéma d’évaluation du DAI préventif sous traitement moderne et calendrier des essais de finérénone dans l’insuffisance cardiaque',
    },
  ],
  disclaimerType: 'medical',
};
