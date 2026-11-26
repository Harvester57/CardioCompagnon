import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'dysfonction-vg-asymptomatique-stade-b',
  sourceWikiPath: 'wiki/concepts/asymptomatic-lv-dysfunction-stage-b.md',
  titleFr: 'Dysfonction ventriculaire asymptomatique (stade B)',
  category: 'diagnostic',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'stade-b',
    'pré-insuffisance-cardiaque',
    'dysfonction-vg-asymptomatique',
    'nyha-i',
    'stades',
    'solvd-prevention',
    'save-captopril',
    'capricorn',
    'dapa-mi',
    'iec',
    'bêtabloquant',
    'dépistage',
    'efx',
    'cpet',
    'niveau-de-preuve',
    'b1-b2',
  ],
  aliases: [
    'Stade B',
    'Stage B',
    'Pré-insuffisance cardiaque',
    'Pre-HF',
    'Dysfonction systolique VG asymptomatique',
    'ALVSD',
    'NYHA I',
    'SOLVD-Prevention',
    'SAVE captopril',
    'CAPRICORN',
    'REVERT',
    'DAPA-MI',
    'B1 vs B2',
  ],
  linkedModules: ['stageB'],
  plainSummaryFr:
    "Découvrir un ventricule gauche affaibli ou dilaté chez une personne qui n'a jamais eu d'essoufflement, d'œdèmes ni d'autres symptômes d'insuffisance cardiaque correspond au stade B (« pré-insuffisance cardiaque »). Si des symptômes ou signes ont déjà existé un jour, même totalement disparus aujourd'hui (NYHA I), on parle de stade C. L'épreuve d'effort cardiorespiratoire (EFX) révèle fréquemment une baisse du pic de VO2 ou une inefficacité ventilatoire chez des personnes classées NYHA I, montrant que l'absence apparente de gêne peut masquer une autolimitation. Au stade B, le traitement repose principalement sur les IEC (ou ARA2) et les bêtabloquants (ainsi que statines, contrôle tensionnel et, après infarctus dans certains cas, éplérénone ou DAI). Les classes plus récentes (ARNI et iSGLT2 hors diabète ou maladie rénale chronique) n'ont pas démontré de bénéfice sur les critères cliniques durs de mortalité ou décès/hospitalisation (PARADISE-MI, EMPACT-MI, DAPA-MI).",
  sections: [
    {
      headingFr: 'Stade de la maladie versus classe NYHA',
      bodyMarkdownFr: `Les recommandations ESC 2026 et le résumé américain AAFP 2023 distinguent clairement le **stade** (qui reflète l’histoire de la maladie) de la **classe NYHA** (qui décrit votre gêne à l’instant présent) :

| Notion | Ce qu’elle décrit | Exemple |
|---|---|---|
| **Stade A** | Personne à risque (hypertension, diabète, maladie coronaire) avec structure cardiaque normale | Hypertension traitée, ETT normale |
| **Stade B** (pré-IC) | Anomalie structurelle ou fonctionnelle du cœur, **sans symptôme ni signe d’IC actuel ou passé** | FEVG basse découverte lors d’une ETT de contrôle chez une personne n’ayant jamais eu de symptômes |
| **Stade C** | Anomalie cardiaque avec **symptômes ou signes d’IC actuels ou passés** | Essoufflement au diagnostic, aujourd’hui totalement disparu sous traitement |
| **Stade D** | Insuffisance cardiaque avancée | Voir *Insuffisance cardiaque avancée (stade D) et orientation* |
| **NYHA I–IV** | Limitation fonctionnelle **à l’instant présent** | NYHA I = aucune limitation dans les activités ordinaires |

- **Les stades n’évoluent que dans un sens.** Un patient en stade C devenu totalement asymptomatique reste en stade C. Les recommandations **ESC 2026** préconisent de **poursuivre** le traitement de fond aux doses maximales tolérées chez les personnes devenues asymptomatiques ou dont la FEVG s’est améliorée (**Classe I, C** ; concordance avec **AHA/ACC/HFSA 2022**, section 7.6.2, **Classe 1, B-R**).
- **La Deuxième définition universelle de 2026** (consensus AHA/ACC/ESC/WHF sur la terminologie, juin 2026) réaffirme ces quatre mêmes stades :
  - **Critères du stade B :** aucun symptôme ni signe actuel ou passé d’insuffisance cardiaque, associé à au moins un élément parmi : une anomalie structurelle (cavité dilatée, trouble de la cinétique pariétale, cicatrice à l’IRM cardiaque, épaississement de paroi ou valvulopathie), une anomalie fonctionnelle (baisse de la contraction gauche ou droite, pressions de remplissage élevées ou anomalie de relaxation), ou une élévation des peptides natriurétiques ou de la troponine. Elle ne fixe **aucun seuil chiffré** pour aucun de ces critères.
  - **Le stade C** recouvre des symptômes ou signes actuels **ou passés** dus à une anomalie cardiaque, en cohérence avec la formulation ESC.
  - **Aucun retour vers le stade B :** son schéma comporte des flèches à sens unique de B vers C. Au sein de l’IC symptomatique, elle distingue les trajectoires d’« amélioration », de « rémission » et de « récupération », et considère généralement le diagnostic d’IC symptomatique comme permanent (voir *Insuffisance cardiaque à FEVG améliorée (HFimpEF)*).
  - **Le « stade 0 »** est mentionné dans son texte pour les personnes sans facteur de risque, bien qu’absent du tableau des stades.
- **Seuils ESC 2026 :** la « dysfonction systolique VG asymptomatique » correspond à une FEVG **inférieure à 50 %** (en l’absence d’autre explication comme un cœur d’athlète, quels que soient l’âge et le sexe) sans symptôme ni signe ; l’ICFER correspond à une FEVG inférieure à 50 % **avec** symptômes ou signes (voir *La fraction d’éjection (FEVG)*).
- **« Sans symptôme » n’est pas toujours fiable :** certaines personnes réduisent imperceptiblement leurs efforts quotidiens. Dans la cohorte américaine **ARIC** (2 972 adultes âgés classés en pré-IC, 2026), la fatigue à l’effort était associée à un risque accru d’IC ultérieure (**HR 1,86**), les auteurs reconnaissant que certains participants avaient peut-être déjà une IC clinique.`,
    },
    {
      headingFr: 'Démasquer une limitation cachée par l’épreuve d’effort (EFX)',
      bodyMarkdownFr: `Demander simplement « êtes-vous essoufflé ? » en consultation est un filtre imprécis pour distinguer un vrai stade B d’un stade C léger ou autolimité :

- **Forte variabilité de la classe NYHA :** dans une étude britannique, deux cardiologues évaluant les mêmes 50 patients IC ne concordaient sur la classe NYHA que dans **54 %** des cas, et 99 % des publications IC ne précisaient pas la méthode d’attribution. Bien que 70 % des cardiologues interrogés demandent la distance de marche, la distance déclarée ne présentait quasiment **aucune corrélation** avec la capacité aérobie mesurée en EFX (\`rho = 0,04, p = 0,82\`). Une revue systématique de 38 études (2 645 patients) a de même montré une dispersion majeure du pic de VO2 chez les patients classés NYHA I (17 études, \`Q = 486,7, p < 0,0001\`).
- **Autolimitation inconsciente avant les symptômes :** chez 40 patients avec dysfonction VG asymptomatique comparés à 167 patients IC chroniques et 52 témoins sains (Mezzani 2000), le score d’activité physique habituelle était déjà nettement abaissé en stade asymptomatique (**2,2 contre 3,5**, \`p < 0,0001\`), en parallèle d’un pic de VO2 réduit (**20 contre 33,1 mL/kg/min**). Éviter les côtes, les escaliers ou la marche rapide maintient les symptômes silencieux alors que la réserve d’effort diminue déjà.
- **Un vrai stade B présente déjà une baisse du pic de VO2 en EFX :**
  - Dans une **sous-étude de SOLVD** (LeJemtel 1994, 40 patients totalement asymptomatiques sans traitement, FEVG 14–35 %, moyenne 29 %, comparés à 41 témoins sains du même âge), le pic de VO2 était **inférieur d’environ 26 %** (**22,1 contre 29,8 mL/kg/min**, \`p < 0,001\`) et la durée sur tapis plus courte (948 contre 1 239 s), à effort maximal identique (RER 1,14 contre 1,11) et essoufflement ressenti comparable.
  - Dans une cohorte néerlandaise post-infarctus (Nieuwland 1998, 56 hommes > 4 semaines après infarctus, FEVG 35–55 %, 76 % NYHA I), **72,5 % (29 sur 40)** des patients asymptomatiques NYHA I avaient un pic de VO2 abaissé pour l’âge (≤ 81 % théorique) et **15 % (6 sur 40)** une baisse sévère (≤ 62 %), contre 18 % et 0 % chez les témoins à FEVG normale.
  - Dans une cohorte italienne d’EFX de **585 patients** en dysfonction VG asymptomatique (FEVG ≤ 40 %, 98 % d’hommes ; Corra 2022), le pic de VO2 moyen était de **16 ± 4 mL/kg/min** (contre 14 ± 3 dans l’IC symptomatique), la pente VE/VCO2 de **30 ± 7** et 4 % présentaient une ventilation oscillatoire. Un décès cardiaque est survenu chez 5 % (contre 15 % dans l’IC symptomatique), les non-survivants ayant un pic de VO2 plus bas (**13 contre 16 mL/kg/min**, \`p < 0,001\`), bien que les paramètres ventilatoires aient perdu leur significativité indépendante en analyse multivariée.
- **Chevauchement massif entre NYHA I et NYHA II en consultation IC :** dans une étude brésilienne multicentrique en texte intégral portant sur **688 patients** IC ambulatoires classés NYHA I (42 %, n = 287) ou NYHA II (58 % ; 65 % avec FEVG < 40 %, 32 % ischémiques ; Zimerman 2023), les distributions de NYHA I et NYHA II se chevauchaient à **86 %** pour le pic de VO2 (% théorique) et à **89 %** pour la pente VE/VCO2 (**87 %** et **89 %** si FEVG < 40 %), donnant une capacité de discrimination proche du hasard (**AUC 0,55**). Parmi les patients classés NYHA I :
  - **63 %** avaient un pic de VO2 < 75 % théorique (**13,2 %** < 50 %) ;
  - **54 %** avaient une inefficacité ventilatoire (pente VE/VCO2 ≥ 36) ;
  - **26 %** relevaient des classes défavorables de Weber C ou D (pic de VO2 < 16 mL/kg/min) ;
  - **30 %** cumulaient **les trois marqueurs défavorables** (contre 31 % en NYHA II, \`p = 0,72\`), avec une mortalité à 5 ans identique entre NYHA I et II (\`p = 0,41\`).
  - Une cohorte élargie du même centre (Engster 2023, n = 834, FEVG médiane 32 %) a confirmé que **29 %** des patients NYHA I relevaient de Weber C ou D et que **36 %** avaient une discordance entre NYHA et Weber (dont 70 % en NYHA I–II avec Weber C–D), assortie d’un risque intermédiaire de mortalité.
- **Les cohortes « NYHA I » mêlent souvent stade B et stade C en rémission :** dans les cohortes brésiliennes, plus de la moitié prenaient déjà de la spironolactone (*Aldactone*) avec un NT-proBNP médian de 946 pg/mL. De même, dans la cohorte allemande **TransitionCHF (2026)** (1 005 patients NYHA I à FEVG ≤ 40 %, moyenne 36 %, sans diurétique de l’anse et marchant ≥ 80 % de la distance prédite au test de 6 minutes), les auteurs notent que la **majorité avaient un antécédent d’IC symptomatique** (stade C en rémission). Même dans ce groupe très sélectionné, le score physique SF-36 et le NT-proBNP de repos ne corrélaient que faiblement avec le pic de VO2 (\`r = 0,28\` et \`r = −0,29\`), et la FEVG de repos ne prédisait pas indépendamment le pic de VO2 (\`p = 0,056\`).
- **Condition physique et questionnaires structurés :** sur un suivi médian de 20 ans dans l’étude de **Framingham** (Davis 2026, 1 683 adultes, 468 stade B — *limite : forme estimée sous-maximale et majorité de stade B à FEVG préservée, seuls 2,6 % à FEVG < 50 %*), les 61 % d’adultes stade B dont la condition physique était sous la médiane avaient un risque d’IC clinique multiplié par **2,75** (**HR 2,75**, IC 95 % : 1,50–5,07 vs témoins en forme ; **HR 2,61** vs stade B en forme), contrairement aux stades B en bonne condition physique. Les questionnaires patients structurés tels que le **KCCQ-OS** détectent plus de deux fois plus souvent les évolutions de l’état de santé que la classe NYHA (CHAMP-HF : **75,1 % contre 34,9 %** sur 12 mois) et prédisent la mortalité là où la classe NYHA échoue.
- **Position des recommandations sur l’EFX :** l’**ESC 2026** évoque l’EFX dans son texte narratif pour confirmer une baisse de capacité d’effort et éclaircir une dyspnée inexpliquée (sections 5.2.2 et 5.3, pp. 25 et 27), ainsi que pour le bilan d’IC avancée/greffe (pic de VO2 < 12–14 mL/kg/min ou < 50 % théorique, tableau 16 p. 57), mais ne formule **aucune recommandation gradée** pour une EFX de routine au stade B (voir *EFX (VO2 max), strain (GLS), troponine chronique, Holter et imagerie d’ischémie*).`,
    },
    {
      headingFr: 'À quelle fréquence le stade B progresse-t-il ?',
      bodyMarkdownFr: `- **Étude de Framingham (Wang 2003) :** parmi 4 257 participants en population générale, une dysfonction VG asymptomatique (FEVG ≤ 50 %, sans antécédent d’IC) existait chez 6,0 % des hommes et 0,8 % des femmes. L’IC est apparue au taux de **5,8 contre 0,7 pour 100 personnes-années** (**HR ajusté 4,7**). Avec une FEVG **< 40 %**, le HR atteignait **7,8** ; entre 40 et 50 %, il était de **3,3**. La mortalité était également accrue (**HR 1,6**), avec une survie médiane de 7,1 ans.
- **Revue de 2020 (Sara 2020) :** sur 11 études regroupées (25 369 personnes), le risque relatif de progression vers une IC symptomatique était de **4,6**. Dans le comté d’Olmsted (États-Unis), le passage du stade B au stade C multipliait par neuf le risque de décès (**HR 9,6**).
- **Suivi à 12 ans de SOLVD (Jong 2003) :** l’écart restait marqué : environ 51 à 56 % des participants de l’essai de prévention (asymptomatiques) étaient décédés à 12 ans, contre environ 80 % dans l’essai de traitement (symptomatiques).
- *Précaution :* ces cohortes précèdent l’essentiel des traitements modernes. De plus, le risque de décès « presque quadruplé » attribué à Framingham dans la revue de 2020 ne correspond pas au HR de 1,6 de l’article original de Wang (2003).`,
    },
    {
      headingFr: 'Les essais cliniques sur lesquels repose le traitement du stade B',
      bodyMarkdownFr: `| Essai | Population | Traitement | Principaux résultats |
|---|---|---|---|
| **SOLVD-Prevention** (*NEJM* 1992) | 4 228 personnes, FEVG ≤ 35 %, **ne nécessitant pas de traitement d’IC** (majoritairement asymptomatiques) | Énalapril (*Renitec*) vs placebo, moyenne 37 mois | Mortalité non significativement réduite (−8 %, p = 0,30). **Décès ou apparition d’une IC : −29 %** ; décès ou hospitalisation IC : −20 % |
| **SOLVD suivi à 12 ans** (*Lancet* 2003) | Les deux essais SOLVD, 99,8 % suivis | Randomisation initiale | Essai Prevention : **50,9 % contre 56,4 %** de décès (p = 0,001). HR groupé : 0,90 ; gain médian de vie : 9,4 mois |
| **SAVE (captopril)** (*NEJM* 1992) | 2 231 personnes, 3 à 16 jours après infarctus, FEVG ≤ 40 %, sans IC patente | Captopril (*Lopril*) vs placebo, moyenne 42 mois | **Décès : 20 % contre 25 %** (−19 %) ; IC sévère −37 % ; hospitalisation IC −22 % ; récidive d’infarctus −25 % |
| **CAPRICORN** (*Lancet* 2001) | 1 959 personnes après infarctus, FEVG ≤ 40 % | Carvédilol (*Kredex*) vs placebo | Critère combiné principal non significatif (HR 0,92). **Décès : 12 % contre 15 %** (**HR 0,77**, IC 95 % : 0,60–0,98) |
| **REVERT** (*Circulation* 2007) | 149 personnes, NYHA I, FEVG < 40 %, VG modérément dilaté (FEVG moyenne 27 %) | Métoprolol succinate (*Selozok*) 200 mg ou 50 mg vs placebo, 12 mois | 200 mg : diminution du VG et FEVG +6 points ; 50 mg : FEVG +4 points. Données d’imagerie uniquement, pas d’événements cliniques |
| **Méta-analyse IPD Rossello** (*Lancet* 2025) | 1 885 patients post-infarctus, **FEVG 40–49 %**, sans antécédent ni signe d’IC (REBOOT, BETAMI, DANBLOCK, CAPITAL-RCT) | Bêtabloquant oral vs pas de bêtabloquant (médiane > 1 an) | Critère combiné décès, nouvel infarctus ou IC réduit : **HR 0,75** (IC 95 % : 0,58–0,97 ; p = 0,031 ; **32,6 contre 43,0** événements pour 1 000 personnes-années) |

**Attention aux homonymes :** l’essai SAVE sur le captopril (1992) est sans rapport avec l’essai SAVE (2016) consacré à la PPC dans l’apnée du sommeil (voir *Apnée du sommeil et insuffisance cardiaque*).

### Qu’en est-il des médicaments plus récents au stade B ?

- **Aucun essai dédié au stade B chronique** n’a évalué les ARNI (sacubitril/valsartan — *Entresto*), les iSGLT2 ni (en dehors du post-infarctus précoce) les ARM (Sara 2020 ; ESC 2026).
- Trois grands essais modernes **en phase aiguë post-infarctus** ont évalué ces classes chez des patients sans IC chronique établie (contexte distinct d’un stade B chronique stable) :
  - **PARADISE-MI** (5 661 patients) : le sacubitril/valsartan n’a pas fait significativement mieux que le ramipril (*Triatec*) sur les décès CV ou l’apparition d’une IC (**HR 0,90**, non significatif).
  - **EMPACT-MI** (6 522 patients, ~32 % de diabétiques) : l’empagliflozine (*Jardiance*) n’a pas réduit le critère principal combiné (première hospitalisation IC ou décès toutes causes : **HR 0,90**, non significatif), même si les premières hospitalisations IC étaient moins fréquentes (**HR 0,77**).
  - **DAPA-MI (2024) et sa sous-étude FEVG (2025) :** chez **4 017 patients** en Suède et au Royaume-Uni **sans diabète ni IC chronique préalable** (dysfonction systolique du VG ou infarctus avec onde Q ; financé par AstraZeneca), la faible fréquence des événements durs a conduit à modifier en cours d’essai le critère principal pour un *win ratio* cardiométabolique hiérarchique à 7 composantes, favorable à la **dapagliflozine (*Forxiga*)** (**win ratio 1,34**, IC 95 % : 1,20–1,50, \`p < 0,001\`), tiré par moins de nouveaux diabètes de type 2, la classe NYHA et une perte de poids ≥ 5 %. En revanche, le critère dur initial (**décès CV ou hospitalisation IC**) était **neutre** (**2,5 % contre 2,6 % ; HR 0,95**, IC 95 % : 0,64–1,40). Dans la sous-étude post hoc selon la FEVG de 2025 (n = 3 751 ; 77,7 % à FEVG < 50 %), le *win ratio* restait favorable sous 50 % (**1,38**, IC 95 % : 1,21–1,57) avec moins de nouveaux diabètes (HR 0,46) et de passages en NYHA II–IV (HR 0,83), mais tous les critères cliniques durs restaient neutres à FEVG < 50 % : décès CV ou hospitalisation IC **HR 1,12** (0,72–1,73), hospitalisation IC adjudiquée **HR 1,04** (0,61–1,80), mortalité toutes causes **HR 1,14** (0,68–1,92).
- **Méta-analyse 2026 des iSGLT2 post-infarctus chez les non-diabétiques :** en regroupant 5 essais en double aveugle (EMMY, DACAMI, DAPA-MI, EMI-STEMI et le sous-groupe non diabétique d’EMPACT-MI ; **n = 9 135** sans diabète ni IC chronique préalable), les iSGLT2 réduisaient les premières hospitalisations IC (**RR 0,74**, IC 95 % : 0,57–0,94, \`p = 0,02\`, \`I² = 0 %\`) avec une modeste hausse de +2,08 points de FEVG (dans la marge de variabilité de l’ETT), mais **ne réduisaient ni le critère combiné première hospitalisation IC ou décès toutes causes (RR 0,90 [0,75–1,07]) ni la mortalité toutes causes (RR 1,06 [0,84–1,33])**. Les auteurs concluent que les preuves actuelles ne suffisent pas à justifier un usage systématique chez les non-diabétiques après infarctus.
- **Silence des recommandations :** une recherche intégrale dans les 112 pages des recommandations **ESC 2026** ne trouve **aucune mention** de PARADISE-MI, EMPACT-MI ni DAPA-MI. Ni l’ESC 2026 ni les textes américains ne recommandent d’ARNI ni d’iSGLT2 chez les non-diabétiques en stade B (la section 14 de l’ESC 2026, *Lacunes des preuves*, p. 78, classe explicitement la prévention de l’IC par iSGLT2 et ARM hors diabète comme une question ouverte ; la recommandation américaine **CKM de juin 2026** élargit les iSGLT2 en pré-IC au **diabète ou à la maladie rénale chronique**, mais pas au stade B non diabétique sans maladie rénale).`,
    },
    {
      headingFr: 'Comment le stade B est dépisté',
      bodyMarkdownFr: `Par définition sans symptôme, le stade B n’est détecté que par des examens : un dosage sanguin (peptides natriurétiques) ou une échocardiographie (ETT).

### Dosages sanguins (peptides natriurétiques)

- **STOP-HF** (Irlande, 1 374 adultes à risque sans IC) : dosage du BNP avec ETT et suivi partagé médecin traitant–cardiologue dès 50 pg/mL. La survenue d’une dysfonction VG (avec ou sans IC) a baissé de **8,7 % à 5,3 %**. La baisse de l’IC isolée n’était pas statistiquement démontrée faute de puissance.
- **PONTIAC** (Autriche, 300 personnes ayant un diabète de type 2 sans cardiopathie connue et un NT-proBNP > 125 pg/mL) : consultations cardiologiques renforcées pour titrer IEC/ARA2 et bêtabloquants, réduisant les hospitalisations cardiaques ou décès à 2 ans (**HR 0,351**). Petit effectif avec large incertitude statistique (étude financée par l’industrie).
- **American Diabetes Association (ADA, 2022) :** conseille un dosage annuel de peptide natriurétique ou de troponine ultrasensible chez les adultes diabétiques (anormal si BNP ≥ 50 pg/mL ou NT-proBNP ≥ 125 pg/mL), sans ETT systématique en l’absence de symptômes.
- **Critiques (Herman et Kuo 2025) :** deux diabétologues estiment les preuves fragiles. Citant des données britanniques de soins primaires où seuls ~16 tests NT-proBNP positifs sur 100 correspondaient à une IC (contre ~99 sur 100 corrects parmi les négatifs), ils soulignent le risque élevé de faux positifs, l’absence de démonstration sur les événements d’IC propres dans STOP-HF et PONTIAC et un coût élevé par hospitalisation évitée.
- **Recommandations américaines (2022 et 2026) :** **AHA/ACC/HFSA 2022** (section 4.2, vérifié en texte intégral) classe le dépistage par peptides natriurétiques chez les sujets à risque en **Classe 2a, niveau B-R** (raisonnable). La recommandation **AHA/ACC/ADA/ASN CKM de juin 2026** (section 3.1) classe de même le dosage de biomarqueurs (BNP, NT-proBNP ou troponine ultrasensible) en **Classe 2a, niveau B-NR** lorsque le risque PREVENT-HF à 10 ans atteint ≥ 5 %.
- La Heart Failure Association de l’ESC (2023) propose des algorithmes NT-proBNP avec seuils d’exclusion et d’inclusion liés à l’âge.
- **La Deuxième définition universelle de 2026** cite STOP-HF et PONTIAC pour indiquer qu’un dépistage par peptides natriurétiques combiné aux facteurs de risque peut repérer des personnes asymptomatiques pouvant bénéficier d’un traitement, sans fixer **aucun seuil chiffré**.

### Échocardiographie (ETT)

- Chez 447 Australiens de 65 ans ou plus à risque sans cardiopathie connue (Yang et Marwick 2017), l’ETT détectait fréquemment un stade B : environ un tiers avaient une baisse du strain longitudinal global (GLS < 18 %) et 13 % une hypertrophie ventriculaire gauche (masse VG indexée > 115 g/m² homme, > 95 g/m² femme). Ces deux marqueurs prédisaient l’IC à ~14 mois, contrairement aux indices diastoliques, alors que l’ECG standard manquait la plupart des anomalies.

> **Pour votre situation :** ces bilans concernent la *découverte* d’un stade B chez une personne ignorant son atteinte cardiaque. Si votre dysfonction VG est déjà connue, l’enjeu est de clarifier avec votre cardiologue si votre histoire relève du stade B ou du stade C et quel traitement en découle.`,
    },
    {
      headingFr: 'Recommandations comparées, nouveaux niveaux ESC (B1/B2) et nuances',
      bodyMarkdownFr: `Le tableau ci-dessous rapproche les recommandations **ESC 2026** (section 4, tableaux 1 et 2, et sections 9.4 et 10.2, texte intégral), **AHA/ACC/HFSA 2022** (**section 6.1** sur la prise en charge du stade B — sans section 6.2) et **AHA/ACC/ADA/ASN CKM de juin 2026** (section 5.6.2, pré-IC au stade CKM 3). Au 25 novembre 2026, l’image du tableau américain section 6.1 étant inaccessible directement, toutes les classes (COR) américaines sont vérifiées via des articles en libre accès et la ligne DAI (\`1, B-R\`) via les extractions primaires ; les niveaux de preuve (LOE) des autres lignes de la section 6.1 proviennent de synthèses secondaires et sont marqués *(non vérifié)*.

| Intervention | ESC 2026 (section 4, tableaux 1–2, texte intégral) | États-Unis AHA/ACC/HFSA 2022 (sec. 6.1) + CKM 2026 (sec. 5.6.2) | Convergence |
|---|---|---|---|
| **IEC** | **Classe I, A** — stade B et **FEVG ≤ 40 %** (tableau 2, p. 21) | **Classe 1** — FEVG ≤ 40 % pour prévenir l’IC et réduire la mortalité *(LOE A non vérifié sur image)* | Forte convergence |
| **ARA2** (si intolérance aux IEC) | **Classe I, A** — combiné à la ligne IEC/ARA2 en stade B et **FEVG ≤ 40 %** | **Classe 1** — **infarctus récent**, FEVG ≤ 40 %, intolérance aux IEC *(LOE B-R non vérifié)* | Nuance de périmètre (infarctus récent aux États-Unis) |
| **Bêtabloquant** | **Classe I, B1** — stade B et **FEVG < 50 %** (CAPRICORN, SOLVD post hoc et Rossello 2025) | Deux lignes **Classe 1** à **FEVG ≤ 40 %** : (1) infarctus/SCA récent ou ancien *(LOE B-R non vérifié)* ; (2) FEVG ≤ 40 % plus largement *(LOE C-LD non vérifié)* | **Divergence de seuil FEVG** (ESC < 50 % vs US ≤ 40 %) |
| **Éplérénone (*Inspra*, ARM)** | **Classe I, B1** — post-infarctus, **FEVG ≤ 40 %** avec **signes d’IC ou diabète** (tableau 2, p. 21 ; EPHESUS ; *le texte p. 21 écrit « et diabète »*) | **Absente de la section 6.1** (silencieux au stade B) | **Divergence** |
| **Statine** | **Classe IIa, A** — personnes à haut risque cardiovasculaire ou avec athérosclérose avérée pour réduire le risque d’IC (tableau 1, p. 20) | **Classe 1** — infarctus ou SCA récent ou ancien pour prévenir l’IC symptomatique et les événements CV *(LOE A non vérifié)* | Écart de force (Classe 1 US vs IIa ESC pour la prévention IC) |
| **DAI préventif** | Absent du tableau 2 stade B (voir *Dispositifs cardiaques implantés : DAI et CRT*) | **Classe 1, LOE B-R** (**vérifié** texte intégral sec. 7.4.1) — ≥ 40 jours post-infarctus, **FEVG ≤ 30 %**, **NYHA I** sous traitement optimisé, survie > 1 an (MADIT-II) | **Divergence** (placé explicitement en stade B aux États-Unis) |
| **Pression artérielle et mode de vie** | PA systolique **< 130 mmHg** (**Classe I, A**) ; conseils de mode de vie sain pour tous les stades A/B (**Classe I, C**) (tableau 1) | Objectifs stade A reconduits (**Classe 1**) ; **CKM 2026 (sec. 5.6.2, texte intégral) :** contrôle intensif du mode de vie et des facteurs de risque (**Classe 1, B-R**) | Forte convergence |
| **iSGLT2** (et finérénone / GLP-1 RA) | **Classe I, A** si **diabète de type 2** à risque d’IC ou DT2 + MRC ; finérénone **I, A** (DT2 + MRC) ; GLP-1 RA **IIa, A** (DT2 + ≥ 1 facteur de risque CV) (tableau 1). **Aucune recommandation sans diabète** | 2022 : stade A **Classe 1** si DT2 + MCV/haut risque. **CKM 2026 (texte intégral) :** iSGLT2 en 1re intention en pré-IC avec **DT2 ou MRC** (**Classe 1, B-NR**) ; GLP-1 RA (**2a, B-NR**, RACU ≥ 100) et ARM non stéroïdien (**2a, B-NR**, RACU ≥ 30) si DT2 + MRC. **Rien sans DT2 ni MRC** | Accord large ; CKM 2026 ajoute la MRC non diabétique |
| **ARNI (sacubitril/valsartan)** | **Aucune recommandation stade B** (PARADISE-MI non cité) | **Aucune recommandation stade B** (2022 ni CKM 2026) | Convergence (silence) |
| **Éviter glitazones et vérapamil / diltiazem** | Texte narratif uniquement (hors tableau 2) : vérapamil (*Isoptine*), diltiazem (*Tildiem*) et moxonidine **contre-indiqués** dans l’ICFER (sec. 9.4, p. 64) ; glitazones et saxagliptine **contre-indiqués** dans l’IC (sec. 10.2, p. 66) | **Classe 3 : Danger** à **FEVG < 50 %** en section 6.1 *(LOE sec. 6.1 rapportés B-R et C-LD non vérifiés ; sec. 7.3.7 ICFER vérifiés \`3 : Danger, A\`)* | Accord sur le danger ; gradé explicitement à FEVG < 50 % aux États-Unis |

### Comprendre la nouvelle grille de preuve ESC 2026 (\`A\`, \`B1\`, \`B2\`, \`C\`)

Les recommandations ESC 2026 sont les premières à appliquer la grille méthodologique révisée 2024/2025 (tableau 2, p. 9 ; Juni 2025), qui scinde le niveau B thérapeutique/préventif en deux paliers :

- **Niveau A (concluant) :** habituellement **≥ 2 essais randomisés bien dimensionnés** sans biais majeur avec forte preuve contre le hasard (par ex. \`p < 0,005\` ; exceptionnellement un très grand essai ou un effet clinique évident si > 90 % du groupe de travail vote pour).
- **Niveau B1 (preuves randomisées suggestives) :** **≥ 1 essai randomisé bien dimensionné** sans biais majeur, ou méta-analyse de tels essais (\`p < 0,05\`). C’est pourquoi les **bêtabloquants** (CAPRICORN + méta-analyse IPD Rossello 2025) et l’**éplérénone** (essai unique bien dimensionné EPHESUS) portent **Classe I, B1**.
- **Niveau B2 (preuves limitées non randomisées ou petits ECR) :** **≥ 2 études non randomisées bien dimensionnées** à contrôle rigoureux des biais (\`p < 0,005\`), **ou** une **méta-analyse de petits essais sous-dimensionnés** (\`p < 0,05\`).
- **Niveau C (préliminaire) :** études non randomisées sans contrôle rigoureux des biais, petit essai isolé sous-dimensionné ou consensus d’experts.
- *Échelle diagnostique distincte :* pour les examens diagnostiques et modèles prédictifs (tableau 3, p. 9), l’ESC 2026 conserve une échelle **A / B / C** sans division B1/B2.

### Deux incohérences internes vérifiées dans ESC 2026 (section 4.2.1, p. 21) et limites

1. **Formulation sur l’éplérénone :** le texte de la section 4.2.1 (p. 21) écrit « FEVG ≤ 40 % **et** diabète » (omettant les signes d’IC), alors que le tableau 2 (p. 21), le tableau 5 (p. 11) et la diapositive officielle 9 écrivent « avec **signes d’IC ou diabète** » (en accord avec EPHESUS, dont les participants avec signes d’IC relevaient en fait du stade C plutôt que d’un stade B pur).
2. **Erreur de renvoi bibliographique pour les bêtabloquants :** le texte de la section 4.2.1 (p. 21) renvoie à la référence 121 (Kristensen *NEJM* 2025, méta-analyse post-infarctus à **FEVG normale**) pour le bénéfice à FEVG modérément réduite, alors que le tableau 2 cite correctement la référence 35 (Rossello *Lancet* 2025, FEVG 40–49 %, n = 1 885, HR 0,75).
- **Ancienneté des essais :** l’ESC 2026 rappelle que les essais fondateurs du stade B (SOLVD-Prevention, SAVE, TRACE, CAPRICORN) datent de 1992–2001, que CAPRICORN autorisait les diurétiques intraveineux pour IC aiguë (tous les patients n’étaient donc pas strictement asymptomatiques) et que la tranche **41–49 % en dehors du post-infarctus** reste peu étudiée.

### Pourquoi la distinction stade B / stade C est importante

- **Le stade C** (tout antécédent de symptôme d’IC) ouvre droit à la quadrithérapie complète : ARNI ou IEC, bêtabloquant, ARM et iSGLT2 (voir *Les médicaments de l’insuffisance cardiaque (4 piliers)*).
- **Le stade B** repose sur des preuves randomisées surtout pour les IEC (ou ARA2) et les bêtabloquants (plus éplérénone post-infarctus si diabète/signes d’IC, statines, contrôle tensionnel et iSGLT2 si diabète ou MRC) ; utiliser un ARNI ou un iSGLT2 hors diabète/MRC dans un stade B pur dépasse les preuves actuelles.
- Déterminer si vous relevez du stade B ou du stade C (y compris en cas de limitation masquée à l’effort ou d’anciens symptômes en rémission) dépend de l’ensemble de votre histoire médicale, et se discute directement avec votre cardiologue (voir *Questions à poser à l’équipe de cardiologie*).`,
    },
  ],
  relatedArticleSlugs: [
    'efx-strain-troponine-et-imagerie-cardiaque',
    'diabete-insuffisance-cardiaque',
    'medicaments-glp1-et-incretines',
    'comprendre-le-diagnostic',
    'medicaments-insuffisance-cardiaque',
    'fraction-dejection',
    'tension-arterielle-insuffisance-cardiaque',
    'dispositifs-cardiaques-dai-crt',
    'insuffisance-cardiaque-fevg-amelioree',
    'insuffisance-cardiaque-avancee-stade-d',
    'essais-cliniques-cles',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'confirmer-la-cause-dysfonction-vg',
    'cardiomyopathie-ischemique',
    'recommandations-comparees-esc-us-nice',
    'questions-equipe-cardiologie',
    'glossaire-cardiologie',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 (texte intégral, 112 pages : tableau 2 A/B1/B2/C, section 4 et tableaux 1–2)',
      detail: 'Nouvelle grille de preuve B1/B2, recommandations stade B, Rossello 2025, incohérences internes p. 21, absence de mention de PARADISE-MI/EMPACT-MI/DAPA-MI et périmètre EFX',
    },
    {
      label: 'AHA/ACC/HFSA 2022 (sec. 6.1, 4.2, 7.3.7, 7.4.1, 7.6.2) et AHA/ACC/ADA/ASN CKM (juin 2026, sec. 3.1 et 5.6.2)',
      detail: 'Crosswalk stade B américain, DAI préventif NYHA I ≤ 30 % (1, B-R), dépistage biomarqueurs (2a) et iSGLT2 en pré-IC avec DT2 ou MRC',
    },
    {
      label: 'SOLVD-Prevention (1992), Jong (2003), SAVE captopril (1992), CAPRICORN (2001), REVERT (2007) et Rossello IPD (Lancet 2025)',
      detail: 'Essais fondateurs d’IEC et de bêtabloquants au stade B et méta-analyse post-infarctus FEVG 40–49 %',
    },
    {
      label: 'PARADISE-MI (2021), EMPACT-MI (2024), DAPA-MI (2024), sous-étude FEVG DAPA-MI (2025) et méta-analyse iSGLT2 post-IDM (2026)',
      detail: 'Neutralité sur les critères cliniques durs des ARNI et iSGLT2 en post-infarctus chez les non-diabétiques',
    },
    {
      label: 'Zimerman (2023), Engster (2023), LeJemtel (1994), Nieuwland (1998), Mezzani (2000), Corra (2022), TransitionCHF (2026) et Framingham (Davis 2026)',
      detail: 'Chevauchement NYHA I/II en EFX (86–89 %), autolimitation inconsciente, mélange stade B / stade C en rémission et valeur prédictive de la condition physique',
    },
    {
      label: 'Wang (Framingham 2003), Sara (2020), ARIC (2026), STOP-HF (2013), PONTIAC (2013), ADA (2022), Herman & Kuo (2025) et Yang & Marwick (2017)',
      detail: 'Histoire naturelle du stade B, dépistage par peptides natriurétiques ou ETT/GLS et débat sur les faux positifs',
    },
    {
      label: 'Deuxième définition universelle de l’insuffisance cardiaque (2026, texte intégral)',
      detail: 'Consensus AHA/ACC/ESC/WHF : stades A–D, stade 0, trajectoires sans retour au stade B et absence de seuils chiffrés',
    },
  ],
  disclaimerType: 'medical',
};
