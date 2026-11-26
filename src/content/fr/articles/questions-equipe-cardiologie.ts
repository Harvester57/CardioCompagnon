import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'questions-equipe-cardiologie',
  sourceWikiPath: 'wiki/references/questions-for-the-cardiology-team.md',
  titleFr: "Questions à poser à l'équipe de cardiologie",
  category: 'references',
  readingTier: 'reference',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'questions',
    'consultation',
    'décision-partagée',
    'checklist',
    'cardiologue',
    'médecin-traitant',
    'ipa',
    'france',
  ],
  aliases: [
    'Questions à poser',
    'Préparer sa consultation',
    'Liste de questions cardiologue',
    'Décision partagée',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Cette liste rassemble des questions concrètes, classées par thème, pour vous aider à préparer vos rendez-vous avec votre cardiologue, votre médecin traitant ou votre infirmière. Elle couvre vos chiffres clés, vos traitements, vos examens, votre vie quotidienne et vos démarches en France. Piochez-y les quelques questions qui comptent le plus pour vous afin de faciliter une décision partagée en consultation.",
  sections: [
    {
      headingFr: 'Comment utiliser cette liste',
      bodyMarkdownFr:
        "Ces questions sont conçues pour préparer vos rendez-vous avec votre cardiologue, votre médecin traitant, votre infirmière en pratique avancée (IPA) ou infirmière insuffisance cardiaque, votre pharmacien ou votre médecin du travail. Ce sont **des questions, et non des prescriptions** : leur objectif est de clarifier votre situation personnelle et de favoriser une décision partagée. Les recommandations européennes (ESC) encouragent chaque patient à discuter de ses priorités personnelles avec ses proches et son équipe soignante. Sélectionnez les quelques questions qui comptent le plus pour votre prochaine visite.",
    },
    {
      headingFr: 'Comprendre vos chiffres et vos médicaments de fond',
      bodyMarkdownFr: `### Comprendre vos chiffres

- **Quel examen a mesuré ma FEVG : une échocardiographie transthoracique (ETT) ou une IRM cardiaque ? A-t-elle été mesurée avec la même méthode à chaque fois ?**
  - *Pourquoi c'est important :* chez les patients présentant une dysfonction ischémique du ventricule gauche, l'IRM cardiaque mesure en moyenne une FEVG inférieure d'environ 5,5 points à celle de l'ETT, et les deux examens peuvent se situer de part et d'autre du seuil de 35 % (sous-étude ETT vs IRM de REVIVED-BCIS2).
- **Quelle est la taille de mon ventricule gauche (volumes indexés VTDi / VTSi ou diamètre DTDVG) et évolue-t-elle ?**
  - *Pourquoi c'est important :* le volume télésystolique du VG prédisait l'évolution clinique dans REVIVED-BCIS2 là où la FEVG seule ne le faisait pas.
- **Dans quelle classe NYHA suis-je situé(e), et quelle proportion de mon muscle cardiaque est cicatricielle (LGE) à l'IRM ?**
- **Quel est mon taux de NT-proBNP (ou de BNP), comment a-t-il évolué, et lequel des deux mon laboratoire dose-t-il ?**
  - *Pourquoi c'est important :* le sacubitril/valsartan (*Entresto*) peut augmenter artificiellement le BNP, mais pas le NT-proBNP (ESC 2026).

### Médicaments de fond (les 4 piliers) et bilans sanguins

- **Est-ce que je prends bien les quatre classes de médicaments de fond (IEC ou ARNI, bêtabloquant, ARM, iSGLT2) ? Si l'une manque, pour quelle raison ?**
- **Mes doses sont-elles aux doses cibles, ou prévoit-on de les augmenter progressivement (titration) ? Selon quel calendrier, avec quels bilans et consultations à chaque palier, et quels résultats (tension, potassium, fonction rénale, pouls) conduiraient à différer une augmentation ?**
  - *Pourquoi c'est important :* l'ESC 2026 préconise d'augmenter les doses toutes les 1 à 2 semaines si toléré ; dans STRONG-HF, une titration rapide après sortie d'hospitalisation a réduit les réhospitalisations, tandis que dans SwedeHF seule une minorité atteignait les doses cibles.
- **Quand sont prévus mes prochains bilans de créatinine (DFGe) et de potassium, quelle hausse modérée de créatinine est attendue, et qui contacter avant toute modification ?**
  - *Pourquoi c'est important :* un contrôle est généralement proposé 1 à 2 semaines après chaque palier puis environ tous les 4 mois (Volterrani 2024) ; une légère hausse initiale de créatinine est souvent attendue (Clark 2019), et il ne faut jamais arrêter un traitement cardiaque seul.`,
    },
    {
      headingFr: 'Dispositifs implantables (DAI / CRT), traitements additionnels et télésurveillance',
      bodyMarkdownFr: `- **Quand ma FEVG sera-t-elle réévaluée après optimisation de mes médicaments (à 3 mois ou plus tard), et mon QRS / bloc de branche gauche (BBG) ouvre-t-il la discussion d'une CRT ?**
  - *Pourquoi c'est important :* le seuil de DAI repose sur une FEVG ≤ 35 % après ≥ 3 mois de traitement optimal et ≥ 40 jours après infarctus (ESC 2026), mais le registre HF-OPT montre que la FEVG peut continuer à s'améliorer jusqu'à 6 mois.
- **Si un DAI est proposé : quel est mon risque estimé sous médicaments modernes, un modèle sous-cutané (S-DAI) ou transveineux est-il préférable, l'essai en cours PROFID-EHRA change-t-il votre regard, et comment gérer la fonction de choc en fin de vie ?** (PROFID ; PRAETORIAN ; PROFID-EHRA ; guide patient ESC 2026)
- **Une fois mes quatre piliers optimisés, un traitement additionnel s'applique-t-il : ivabradine (*Procoralan*, si rythme sinusal et FC ≥ 77 bpm dans SHIFT), digoxine ou digitoxine (DIGIT-HF), vériciguat (*Verquvo*, après aggravation et NT-proBNP ≤ 6 000 pg/mL), finérénone (*Kerendia*, si FEVG ≥ 40 % ou DT2+MRC) ou chélateur de potassium (patiromer / *Veltassa*) ?**
- **Pendant la titration, le gilet défibrillateur portable (LifeVest) mérite-t-il d'être discuté (marqueurs de risque, port > 20 h/j, interdiction de conduite automobile en France pendant son indication) ?** (VEST ; HF-OPT ; HAS CNEDiMTS ; arrêté du 28 mars 2022)
- **Serais-je éligible à la télésurveillance IC à domicile (remboursée en France) ou au télésuivi d'un DAI/CRT ? Qui lit les alertes et dans quel délai ? Un capteur de pression pulmonaire (CardioMEMS, non remboursé en France selon HAS 2021) pourrait-il un jour me concerner ?**`,
    },
    {
      headingFr: 'Artères coronaires, angor, CTO, cholestérol, antiplaquettaires et IPP',
      bodyMarkdownFr: `### Revascularisation coronaire (pontage / stents) et CTO

- **Une Heart Team incluant un spécialiste de l'insuffisance cardiaque a-t-elle examiné mon anatomie coronaire ? L'objectif d'une intervention serait-il de soulager un angor ou d'améliorer la survie ?** (ESC 2026 ; STICHES ; REVIVED-BCIS2)
- **En cas d'artère bouchée de longue date (CTO) : le territoire est-il viable et ischémique, la réouverture aiderait-elle un essoufflement sans angor (ORBITA-CTO), quels sont les taux de complications de ce centre à FEVG basse (PROGRESS-CTO), et un pontage mini-invasif (MIDCAB) serait-il envisageable ?**

### Angor (douleur thoracique) et médicaments anti-angineux

- **Ma gêne thoracique ou mon essoufflement à l'effort est-il un angor, et comment reconnaître une aggravation ?** (CORONA ; PARADIGM-HF)
- **Que dois-je faire exactement pendant une crise avec ma trinitrine en spray (*Natispray*), et à partir de quel délai / nombre de bouffées dois-je appeler le 15 ou le 112 ?**
  - *Pourquoi c'est important :* le RCP autorise jusqu'à 3 pulvérisations espacées de 2–3 minutes en position assise, mais les règles d'appel d'urgence varient selon les fiches (ANSM, sante.fr, FFC) : un plan écrit personnel lève toute ambiguïté.
- **Mon bêtabloquant est-il à la dose visée (et ma FC assez basse) avant d'ajouter un autre anti-angineux ? Si un autre traitement est nécessaire, lequel convient à ma tension, mes reins et la disponibilité/remboursement en France ?**
  - *Pourquoi c'est important :* les dérivés nitrés oraux longue durée ne sont plus commercialisés en France (patchs uniquement, nécessitant une fenêtre libre de 8 à 12 heures/jour pour éviter l'échappement), la trimétazidine (*Vastarel*) n'est pas remboursée, la HAS a jugé le SMR du nicorandil insuffisant en 2026 et la ranolazine (*Ranexa*, commercialisée en 2025) n'est pas remboursée ; aucun n'a démontré de gain de survie.
- **Y a-t-il des interactions entre mes traitements et les dérivés nitrés ou la ranolazine (IPDE-5 comme sildénafil/tadalafil, riociguat, vériciguat, digoxine, sotalol, simvastatine, metformine) ? Si l'angor persiste malgré les médicaments, une revascularisation doit-elle être rediscutée (ESC 2026 Classe I) ?**

### Cholestérol, antiplaquettaires, bithérapie (DAPT) et protection gastrique (IPP)

- **Ai-je atteint les deux volets de mon objectif LDL (< 0,55 g/L [1,4 mmol/L] et baisse ≥ 50 %), ma Lp(a) doit-elle être dosée une fois, quelle intensité de statine retenir (haute intensité ESC vs modérée ACC/AHA 2026), certains de mes médicaments limitent-ils la dose de statine (amiodarone, ticagrélor, colchicine), et la colchicine 0,5 mg/jour est-elle adaptée à mes reins ?**
- **L'aspirine ou le clopidogrel (*Plavix*) est-il le meilleur choix au long cours dans mon cas, et mon insuffisance cardiaque change-t-elle ce choix ?**
  - *Pourquoi c'est important :* l'ESC 2024 classe les deux en Classe I A ; les essais coréens (HOST-EXAM à 10 ans, SMART-CHOICE 3) et méta-analyses (PANTHER, Giacoppo 2025) montrent moins d'infarctus sous clopidogrel sans différence de survie, mais aucun n'a isolé les patients avec FEVG basse.
- **Si je reçois un stent, combien de temps durerait la bithérapie antiplaquettaire (DAPT), et comment mon insuffisance cardiaque (qui accroît à la fois le risque ischémique et hémorragique) influence-t-elle cette durée ?** (ESC 2024 ; score DAPT ; Otsuka 2023)
- **Ai-je besoin d'un protecteur gastrique (IPP), lequel choisir (éviter oméprazole et ésoméprazole avec le clopidogrel ; le pantoprazole interagit moins), et faut-il contrôler mon magnésium ou ma vitamine B12 en cas de prise prolongée d'IPP avec des diurétiques ?** (EMA 2010 ; FDA/MHRA ; Lam 2013)`,
    },
    {
      headingFr: 'Valves, thrombus VG, anévrisme, diurétiques et insuffisance cardiaque avancée',
      bodyMarkdownFr: `### Rétrécissement aortique, thrombus VG et anévrisme VG

- **Quel est le degré de mon rétrécissement aortique (surface, indice de perméabilité, gradient moyen, volume d'éjection indexé SVi), à quelle fréquence le contrôler, et comment une Heart Team pèserait-elle chirurgie combinée (SAVR + pontage) contre TAVI + stent en préservant l'accès coronaire futur ?** (ESC/EACTS 2025)
- **Si mon rétrécissement aortique est modéré avec FEVG basse, les essais récents (TAVR UNLOAD, PROGRESS NEJM 2026, EXPAND TAVR II) justifient-ils une intervention précoce ou la surveillance échographique reste-t-elle la référence ?**
- **L'apex et la paroi antérieure ont-ils été vérifiés par ETT de contraste ou IRM à la recherche d'un thrombus VG ou d'un anévrisme VG ? En présence d'un anévrisme ou d'une akinésie apicale sans caillot, comment évaluez-vous la balance bénéfice/risque d'un anticoagulant (clause NICE 2003 vs absence de recommandation ESC/AHA) ?**
- **Si un caillot est trouvé, son aspect (mobile, saillant, plat/mural ou calcifié) change-t-il le traitement ou sa durée, comment l'associer à l'aspirine, et quel critère décide de l'arrêt ou de la poursuite après disparition (risque de récidive ~25 % dans Zhou 2023) ?**

### Diurétiques, rétention hydrosodée et insuffisance cardiaque avancée (stade D / cœur droit)

- **Quelle est ma fourchette de « poids sec », et pouvons-nous écrire un plan clair indiquant quoi faire si mon poids monte vite (> 2 kg en 3 jours) ou baisse trop vite avec vertiges ?**
  - *Pourquoi c'est important :* l'ESC 2026 privilégie une escalade ambulatoire encadrée par le clinicien plutôt qu'un auto-ajustement libre.
- **Si mon diurétique habituel agit moins bien, faut-il changer de diurétique de l'anse (furosémide vs bumétanide/torsémide — identiques dans TRANSFORM-HF), ajouter brièvement un second diurétique (thiazide, avec fort risque d'hypokaliémie et d'aggravation rénale dans CLOROTIC) ou organiser des perfusions IV en hôpital de jour, et sous quel délai contrôler potassium, sodium et créatinine ?**
- **Dans quel stade (A à D) situez-vous mon insuffisance cardiaque, quels signes d'alerte « I NEED HELP » (y compris une escalade diurétique ou la nécessité de baisser mes médicaments de fond) devraient conduire à impliquer un centre expert d'insuffisance cardiaque avancée (et lequel), et que montrent le TAPSE et la pression pulmonaire estimée (PAPS/sPAP) sur mon ETT ?**
- **Si la pression pulmonaire est élevée, est-elle entièrement expliquée par le cœur gauche ou un cathétérisme droit est-il utile ? Si une assistance (LVAD) ou une greffe était un jour évoquée, des soins de support pourraient-ils être associés en parallèle ?**`,
    },
    {
      headingFr: 'Arythmies ventriculaires, chocs de DAI, ablation et amiodarone',
      bodyMarkdownFr: `- **Quelle est ma charge quotidienne en extrasystoles ventriculaires (ESV, en % des battements), a-t-elle été mesurée sur plus de 24 heures, et des ESV fréquentes (≥ 10 %) pourraient-elles aggraver ma FEVG ou gêner ma CRT ?**
  - *Pourquoi c'est important :* un Holter de 24 h manque ~47 % des charges ≥ 10 % ; l'ablation est en Classe I C pour la cardiomyopathie induite par ESV (ESC 2022), alors que les antiarythmiques de classe IC (flécaïnide) sont contre-indiqués après infarctus (CAST).
- **Disposé-je d'un plan d'action écrit en cas de choc de DAI — précisant quand appeler le centre de rythmologie (un choc isolé en se sentant bien, sans conduire) versus appeler immédiatement le 15 / 112 (≥ 2 chocs = orage rythmique, ou choc mal toléré) — et combien de thérapies indolores par ATP mon boîtier a-t-il enregistrées ?**
  - *Pourquoi c'est important :* l'ESC 2022 impose un plan écrit remis par le centre (la télésurveillance n'est pas un service d'urgence) ; dans PARTITA, ≥ 5 ATP sur 6 mois prédisaient fortement des chocs et hospitalisations ultérieurs.
- **En cas de tachycardie ventriculaire (TV) soutenue ou de chocs, comment pesez-vous l'ablation par cathéter face à l'amiodarone ou au sotalol (risque procédural initial d'environ 1 % à 30 j vs toxicité d'organe au long cours de l'amiodarone dans VANISH2) ?**
- **Si je prends de l'amiodarone (*Cordarone*), qui assure le suivi semestriel de ma thyroïde (TSH) et de mon foie (ASAT/ALAT), mon ECG annuel, la vigilance pulmonaire, la protection solaire et la vérification des interactions médicamenteuses ?**
  - *Pourquoi c'est important :* sa demi-vie de 20 à 100 jours expose à des toxicités cumulatives ; le RCP français ANSM contre-indique citalopram/escitalopram, moxifloxacine et dompéridone, recommande de préférer rosuvastatine ou pravastatine à simvastatine/atorvastatine, et impose d'adapter warfarine et digoxine.`,
    },
    {
      headingFr: 'Chirurgie non cardiaque, soins dentaires et règles « jours de maladie »',
      bodyMarkdownFr: `- **Avant toute chirurgie non cardiaque ou coloscopie programmée : quels médicaments poursuivre (bêtabloquant, statine, aspirine, IEC/ARA2/ARNI), lesquels suspendre et combien de jours (iSGLT2 3–4 jours même sans diabète, GLP-1, metformine, inhibiteur P2Y12, AOD sans relais héparine), quand les reprendre exactement, et faut-il doser troponine ou NT-proBNP pour dépister une lésion myocardique silencieuse (MINS) ?** (STOP-or-NOT ; SPACE ; AHA/ACC 2024 NCS ; Kindel 2024 ; BSG/ESGE 2021)
- **Si je porte un DAI ou une CRT et dois être opéré(e) (surtout au-dessus de l'ombilic), l'équipe de rythmologie reprogrammera-t-elle formellement la prothèse avant usage d'un bistouri électrique monopolaire plutôt que de compter sur un simple aimant ?**
  - *Pourquoi c'est important :* un aimant suspend les chocs d'un DAI mais ne bascule généralement pas la stimulation antibradycardique/CRT en mode asynchrone chez les patients stimulodépendants (ASA 2020 / HRS).
- **Avant un détartrage ou une extraction dentaire : ai-je besoin d'une antibioprophylaxie (uniquement si prothèse valvulaire, TAVI, MitraClip/TEER, LVAD ou antécédent d'endocardite — et NON pour une ICFER, des stents ou un DAI/CRT seuls), et en cas d'allergie à la pénicilline sous médicament allongeant le QT (amiodarone), quelle alternative est sûre ?**
  - *Pourquoi c'est important :* la HAS (octobre 2024), l'ESC 2023 et l'AHA 2021 confirment l'absence de prophylaxie pour l'ICFER/stents/DAI seuls, recommandent un bain de bouche chlorhexidine 1 minute en France, ont retiré la clindamycine et mettent en garde contre l'azithromycine avec amiodarone ou sotalol.
- **Avant un soin ou une extraction dentaire, mon aspirine, mon clopidogrel ou mon anticoagulant doit-il être poursuivi avec des mesures d'hémostase locale (recommandations SFCO 2015), et quel antalgique utiliser à la place des AINS ?**
- **Quels compléments ou plantes (ginkgo, ail concentré, ginseng, danshen, millepertuis, vitamine E forte dose, huiles de poisson) dois-je arrêter 1 à 2 semaines avant une opération ?** (SPAQI 2021 ; monographies EMA)
- **Pouvons-nous établir par écrit un plan personnalisé « jours de maladie » tant que je vais bien — précisant quels traitements ne jamais arrêter (bêtabloquant, antiplaquettaires, anticoagulants), dans quel cas (vomissements, diarrhée sévère, fièvre, incapacité à manger/boire) vous appeler ou suspendre sous contrôle médical iSGLT2, metformine, diurétique ou bloqueur du SRAA/ARM, quels signes doivent faire suspecter une acidocétose euglycémique même à glycémie normale, et comment reprendre ensuite en sécurité ?**
  - *Pourquoi c'est important :* dans le seul essai randomisé (Fink 2022, MRC), les cartes génériques n'ont apporté aucun bénéfice rénal et ont entraîné des erreurs de médicaments dans 21 % des épisodes, et près de la moitié des SRAA/ARM arrêtés ne sont jamais repris ; à l'inverse, une gastro-entérite sévère multiplie par 23 le risque d'IRA dans l'IC et les RCP EMA demandent d'interrompre l'iSGLT2 en cas de maladie aiguë grave ou de pertes digestives (SMART-C ; NICE NG148).`,
    },
    {
      headingFr: 'Alimentation, poids, incrétines (GLP-1), fer et compléments',
      bodyMarkdownFr: `- **Ma ferritine et surtout mon coefficient de saturation de la transferrine (CST < 20 % plutôt qu'une ferritine basse isolée) ont-ils été vérifiés ? Si du fer IV est envisagé (notamment en perfusions répétées), quelle molécule (dérisomaltose ferrique vs carboxymaltose ferrique) et quel suivi du phosphate prévoyez-vous ?**
  - *Pourquoi c'est important :* les iSGLT2 et l'ARNI abaissent la ferritine par eux-mêmes ; le bénéfice sur les hospitalisations se concentre si **CST < 20 %** (IRONMAN ; Anker 2025 ; Mandal 2026) et le carboxymaltose ferrique a entraîné 51,9 % d'hypophosphatémie modérée à sévère à J21 dans HEART-FID (vs ~4–8 % sous dérisomaltose). Par ailleurs, aucun essai n'a validé le fer oral « haute biodisponibilité » (bisglycinate, sucrosomial) dans l'ICFER (IRONOUT-HF).
- **Quel apport en sel viser, et une restriction hydrique fixe est-elle nécessaire quand je suis stable ?** (SODIUM-HF ; FRESH-UP)
- **Sous ARNI/IEC, ARM et iSGLT2 (selon mon DFGe et ma kaliémie), puis-je consommer librement les légumes, légumineuses et fruits d'une alimentation méditerranéenne — tout en évitant les sels de régime au chlorure de potassium (KCl), les comprimés de potassium et les additifs potassiques cachés dans les aliments « réduits en sel » ?**
  - *Pourquoi c'est important :* les recommandations néphrologiques modernes rejettent la restriction systématique des végétaux frais si la kaliémie est normale et les iSGLT2/ARNI réduisent l'hyperkaliémie sévère, mais aucun ECR n'a testé un régime riche en potassium sans plafond dans l'ICFER jusqu'à DFGe 30 (hausse de kaliémie dans Turban 2021 en MRC stade 3) et les sels KCl / additifs apportent un potassium concentré à risque.
- **La coenzyme Q10 vaut-elle son coût en plus de ma quadrithérapie, ou vaut-il mieux attendre les essais en cours (CORAL, DANUTRIO-HF) — et pourrait-elle interférer avec la warfarine ou abaisser ma tension ?** (Q-SYMBIO ; NIHR HTA 2022 ; CORONA CoQ10)
- **Manger du poisson gras deux fois par semaine est-il préférable aux gélules d'oméga-3, compte tenu de l'avertissement sur la fibrillation atriale (EMA/ANSM/MHRA) et de mes antithrombotiques ?** (GISSI-HF FA ; VITAL Rhythm ; OMEMI ; REDUCE-IT)
- **Avant tout produit à base de plantes, extrait de thé ou complément (millepertuis, ginkgo, danshen, extrait concentré de thé vert, ginseng, réglisse, levure de riz rouge), peut-il diminuer ou amplifier l'effet de mon AOD, clopidogrel/ticagrélor, éplérénone, statine ou digoxine ?**
  - *Pourquoi c'est important :* le millepertuis est déconseillé/contre-indiqué sur les RCP avec les 4 AOD, l'éplérénone et l'atorvastatine ; le danshen et le ginkgo sont associés à des signaux hémorragiques ; l'extrait de thé vert a réduit l'exposition à la digoxine de 31–33 % chez l'homme.
- **Que puis-je prendre sans danger pour un rhume ou une douleur à la place des décongestionnants oraux (pseudoéphédrine passée sur ordonnance Liste I en France le 11 déc. 2024 ; certains combinés contiennent de l'ibuprofène) et des AINS ? Si je prends ou envisage un stimulant prescrit pour un TDAH (méthylphénidate, lisdexamfétamine), comment mon cardiologue et le spécialiste doivent-ils se coordonner ?**
- **Perte de poids, dénutrition et incrétines (GLP-1) :** puis-je perdre du poids sans perdre de muscle ni suivre de régime cétogène (risque d'acidocétose sous iSGLT2, Moseley 2025) ? Le sémaglutide (*Wegovy*, *Rybelsus*), le tirzépatide (*Mounjaro*) ou le rétatrutide (TRIUMPH) ont-ils une place dans mon ICFER (SOUL HR 0,98 ; hausse de FC +3 à +7 bpm ; surveillance des prothèses dans Marques 2025) ? Ai-je été dépisté(e) pour une dénutrition par MNA-SF plutôt que par le score CONUT faussé par les statines (Kinugasa 2022) ?
- **Vitamine D, vitamines B et magnésium :** doser avant de supplémenter (Kampka 2025 ; plafond sans suivi 4 000 UI/j, signal EVITA, surveillance calcium/digoxine, GRIO 2025 ; thiamine/B12 sous diurétique/metformine/IPP, ESPEN 2022, NORVIT ; magnésium contre-indiqué si ClCr < 30 mL/min et plafond UE de 12 mg/j de vitamine B6 dans les complexes comme *Magné B6*, GALACTIC-HF, Yin 2026) ; intérêt du Tai-Chi et avis diététique.`,
    },
    {
      headingFr: 'Stade B, confirmation de la cause et examens spécialisés',
      bodyMarkdownFr: `- **Suis-je en stade B (jamais de symptôme) ou en stade C (symptômes actuels ou passés), et cela modifie-t-il l'indication d'un ARNI ou d'un iSGLT2 sans diabète/MRC (ESC 2026 grille B1/B2 ; DAPA-MI ; US CKM 2026) ? Si je me sens en NYHA I ou stade B, une EFX (CPET) ou un questionnaire KCCQ aiderait-il à vérifier si je n'ai pas ralenti sans m'en rendre compte ?**
- **La faiblesse de mon cœur est-elle entièrement expliquée par mes coronaires, ou ma sténose coronaire pourrait-elle coexister avec une seconde cardiomyopathie (double pathologie, coronaropathie fortuite ou NDLVC — 1 patient sur 6 dans Bawaskar 2024) ?**
- **Où se situe la cicatrice sur l'IRM avec contraste (sous-endocardique, médio-pariétale, en anneau), une arythmie (FA ou ESV ≥ 10 %) pourrait-elle ajouter une faiblesse réversible, et des signes d'appel orientent-ils vers une amylose cardiaque (scintigraphie osseuse + 3 tests monoclonaux obligatoires) ou une sarcoïdose cardiaque (TEP-18F-FDG) ?**
- **Un test génétique et un dépistage en cascade de mes proches (ESC 2023 Classe I B/C) méritent-ils d'être discutés ?**
- **Avec la Définition universelle 2026 (sans seuil numérique fixe de FEVG), comment distinguer un essoufflement lié à l'ischémie coronaire d'une aggravation d'insuffisance cardiaque ?**
- **Examens spécialisés :**
  - Une **épreuve d'effort cardiorespiratoire (EFX / CPET)** (` + '`VO2 pic`' + `, pente ` + '`VE/VCO2`' + `, ` + '`RER`' + `) serait-elle utile pour calibrer ma réadaptation ou quantifier objectivement mon souffle ?
  - Mon ETT comporte-t-elle un **strain longitudinal global (GLS)**, et sera-t-il suivi sur la **même marque d'échographe** (variations inter-constructeurs jusqu'à 3,7 points) ?
  - Ma **troponine ultrasensible (` + '`hs-cTn`' + `)** de base en phase stable est-elle légèrement élevée de façon chronique et notée dans mon courrier pour éviter les malentendus aux urgences ?
  - Quelle durée d'enregistrement rythmique convient à la fréquence de mes symptômes (Holter 24–48 h, patch 7–14 jours, moniteur implantable ILR ou données de mon DAI/CRT) ?
  - Quelle décision clinique concrète changerait un examen coronaire ou de stress supplémentaire (coroscanner, IRM de stress, TEP, scintigraphie, écho de stress) compte tenu de mes reins et de mes dispositifs ?`,
    },
    {
      headingFr: 'Diabète, tension artérielle, sommeil et autres comorbidités',
      bodyMarkdownFr: `### Diabète, reins, FA et valve mitrale

- **En cas de diabète de type 2 : ai-je un iSGLT2, dois-je éviter certains traitements (pioglitazone, saxagliptine, alogliptine), comment concilier avis ESC 2023 et ADA sur les gliptines/GLP-1, quel objectif d'HbA1c (souvent 7–8 % en évitant les hypoglycémies) viser ?**
- **Sous metformine : mon DFGe est-il confortablement au-dessus de 30–45 mL/min, quand la suspendre avant un scanner injecté ou une chirurgie, et faut-il contrôler ma vitamine B12 ? Sous insuline ou sulfamide, comment limiter les hypoglycémies (dont les signes d'alerte peuvent être masqués par mon bêtabloquant) et la rétention hydrosodée ?**
- **Ma fonction rénale limite-t-elle mes doses, quel est mon score CHA₂DS₂-VA en cas de FA, et une fuite mitrale secondaire sera-t-elle réévaluée après 1 à 3 mois de traitement optimisé ?**

### Tension artérielle et apnée du sommeil

- **Visez-vous une cible précise de tension ou priorisez-vous les doses cibles des traitements de l'IC tant que je les tolère ? Que faire en cas de vertiges (baisse des autres hypotenseurs d'abord ; consensus HFA Skouri 2025) ou d'HTA (amlodipine/félodipine ; éviter vérapamil/diltiazem/moxonidine), et ma tension fausse-t-elle la mesure de ma valve aortique ?**
- **Pourrais-je avoir une apnée du sommeil même sans somnolence diurne, et un enregistrement nocturne permet-il de distinguer SAOS (PPC/CPAP) et SACS (où l'ASV est contre-indiquée en ESC Classe III, SERVE-HF) ?**

### Goutte, BPCO, thyroïde, anémie hors fer, AOMI et fragilité

- **En cas de goutte ou d'acide urique élevé :** quel est mon plan sûr en crise à la place des AINS (colchicine vérifiée selon DFGe ≥ 30 en France et sans macrolide/clarithromycine ; éviter *Colchimax* qui masque la diarrhée), et utiliser l'allopurinol en 1re intention (plutôt que le fébuxostat, CARES) sans traiter une hyperuricémie sans crise de goutte (EXACT-HF, ALL-HEART) ?
- **En cas de BPCO (ou d'asthme) :** puis-je conserver un bêtabloquant cardiosélectif (bisoprolol, métoprolol succinate, nébivolol ; BLOCK COPD ne concernait pas l'ICFER) et mes bronchodilatateurs inhalés (LAMA/LABA) sont-ils compatibles avec mon rythme ?
- **Thyroïde et anémie :** quand ma TSH a-t-elle été contrôlée (notamment sous amiodarone), et en cas d'hypothyroïdie, la lévothyroxine sera-t-elle débutée à faible dose très progressivement ? Si mon hémoglobine reste basse malgré un bilan martial normal, recherchons-nous saignement digestif, carence en B12/folates, cause rénale ou thyroïdienne plutôt que des injections d'ASE (contre-indiquées dans RED-HF) ?
- **Artères périphériques (AOMI) et fragilité :** mon EF ou ma classe NYHA rend-elle le schéma rivaroxaban 2,5 mg × 2/j + aspirine (COMPASS) approprié ou inadapté ? Un bilan de fragilité, d'équilibre et de mémoire permettrait-il d'adapter ma réadaptation (type REHAB-HF) et mon pilulier ?`,
    },
    {
      headingFr: 'Automesure, montres connectées, vaccinations et vie quotidienne',
      bodyMarkdownFr: `### Automesure tensionnelle et montres connectées

- **Souhaitez-vous que je mesure ma tension à domicile ? À quelle fréquence, par rapport aux comprimés (règle des 3 SFHTA / protocole ESH), quelle zone doit m'alerter, mon brassard est-il validé (registre STRIDE BP) et de bonne taille, et comment procéder en cas de FA ou d'extrasystoles ?**
- **Dois-je utiliser l'ECG ou les alertes de ma montre connectée (15–26 % de tracés inconclusifs en cardiologie ; risque d'anxiété) ? Si je porte un DAI, comment respecter les distances de sécurité face aux aimants (15 cm en usage courant, 30 cm en charge) et les restrictions européennes des applications ECG ?**

### Vaccinations, réadaptation, récupération, moral et soins de support

- **Quelles vaccinations sont à jour ou dues cette année (grippe annuelle gratuite en France quel que soit l'âge au titre des maladies coronaires/IC, pneumocoque, COVID-19, et dès 65 ans VRS et zona), faut-il un vaccin antigrippal haute dose, et lesquelles peuvent être administrées le même jour ?** (IAMI ; IVVE ; Calendrier vaccinal 2026)
- **Récupération (HFimpEF) et objectifs :** quelle amélioration de FEVG est réaliste, parlez-vous d'amélioration, rémission ou récupération, quels médicaments poursuivre à vie (ESC 2026 Classe I ; TRED-HF), et comment équilibrer mes objectifs de vie ?
- **Réadaptation et moral :** un programme en SMR (hôpital de jour ou domicile) est-il prescrit, quelle part donner au renforcement musculaire par rapport à l'endurance (GERS-P 2023 ; HAS 2022), et quel accompagnement (psychologue, TCC, activité physique) si mon moral fléchit ?
- **Soins de support et anticipation (France) :** une équipe mobile de soins palliatifs (*EMSP*) ou un plan personnalisé d'accompagnement (*PPA*, loi 2026-404) peut-il m'aider dès maintenant ? Comment rédiger mes **directives anticipées** (incluant une formulation explicite sur la désactivation des chocs d'un DAI tout en conservant la stimulation/CRT, à revoir avant tout changement de boîtier), désigner ma **personne de confiance** dans *Mon espace santé*, et connaître les ressources locales (*HAD* prise en charge à 100 % sous ALD sans forfait journalier, *LISP*, *USP*, *MASP*, *SPCMD*) ?

### Santé sexuelle, voyages, climat, tabac, alcool et conduite

- **Santé sexuelle :** mon état stable autorise-t-il les rapports (effort ~3–5 METs, sûr en NYHA I–II stable), que savoir avec un DAI (un choc pendant un rapport est rare et ne met pas le partenaire en danger), passer de la spironolactone à l'éplérénone aiderait-il une dysfonction érectile ou une gynécomastie sans arrêter mon bêtabloquant (NICE NG106), et si un IPDE-5 était discuté, le sildénafil (*Viagra*) correspond-il mieux aux RCP européens que le tadalafil (*Cialis*, contre-indiqué dès NYHA II dans l'UE), sachant l'interdiction absolue avec les dérivés nitrés, le nicorandil et le riociguat ?
- **Voyages, altitude, canicule et saunas :** puis-je prendre l'avion (cabine ≤ 2 438 m ; ordonnance en DCI et carte de prothèse en bagage cabine ; portiques d'aéroport sans interférence mesurée), quel plafond d'altitude et délai post-infarctus/pontage retenir (Parati 2018 jusqu'à 3 500 m ou 2 500 m si angor vs BHF > 2 000 m ; éviter l'acétazolamide avec mes diurétiques), quel plan écrit prévoir avant une canicule (recommandations ANSM 2025–2026 : ne jamais arrêter seul ses traitements, appeler le 15 en cas de coup de chaleur), et pourquoi éviter les saunas brûlants (80–100 °C) et surtout les bains d'eau glacée (conflit autonome et risque d'arythmie sur cicatrice) ?
- **Tabac et alcool :** pouvez-vous me prescrire des substituts nicotiniques ou de la varénicline (*Champix*, revenue en juin 2025 et remboursée à 65 % en 2e intention, sans interaction CYP450, contrairement au bupropion/*Zyban*), m'orienter vers *Tabac info service* (` + '`39 89`' + `) et vérifier l'impact du sevrage sur warfarine/insuline ? Quelle limite d'alcool personnelle (ou zéro) viser, sachant que l'ESC 2026 indique que réduire est toujours bénéfique et que l'ESC 2024 FA fixe un plafond ≤ 3 verres/semaine ?
- **Conduite automobile et essais cliniques :** quels délais légaux (arrêté du 28 mars 2022, avis médecin agréé, groupe 1 vs groupe 2) s'appliquent à mon permis ? Qu'en est-il des cliniques payantes de cellules souches (aucun MTI cardiaque autorisé en UE) et d'une éventuelle inclusion dans un essai académique enregistré (PROFID-EHRA, STICH3, COLT-HF) ?`,
    },
    {
      headingFr: 'Réseau de soins et démarches pratiques en France',
      bodyMarkdownFr: `- **Une demande d'ALD exonérante (ALD 5 insuffisance cardiaque grave ou ALD 13 maladie coronaire) a-t-elle été établie par mon médecin traitant dans mon protocole de soins ?**
- **Mon service de cardiologie, ma maison de santé ou ma CPTS travaille-t-il avec un(e) infirmier(ère) en pratique avancée (IPA) pour suivre mes bilans, symptômes et titrations entre les consultations spécialisées ?**
  - *Pourquoi c'est important :* l'IPA couvre les cardiopathies et coronaropathies stabilisées, peut prescrire des bilans, renouveler/adapter les ordonnances et prescrire une première APA, avec accès direct en structures coordonnées depuis janvier 2025 et prise en charge à 100 % du tarif sous ALD.
- **Mes derniers comptes rendus (ETT, IRM cardiaque, coronarographie/stents, carte de DAI/CRT et volet de synthèse médicale VSM) sont-ils bien déposés dans *Mon espace santé* (DMP) pour que le SAMU 15 ou un autre hôpital puisse les lire en urgence ?**
- **Pouvez-vous me prescrire une réadaptation cardiaque en SMR cardiovasculaire, puis une activité physique adaptée (APA) via une *Maison Sport-Santé* ou un *Club Cœur et Santé* de la FFC — et comment celle-ci est-elle financée ?**
  - *Pourquoi c'est important :* le SMR est pris en charge sans entente préalable, alors que l'APA en ville n'est **pas** remboursée par l'Assurance Maladie pour l'insuffisance cardiaque même en ALD (financement par forfaits prévention de mutuelles, aides ARS/communes ou cotisations associatives).
- **Mon cardiologue ou la clinique pratique-t-il en Secteur 1 ou en Secteur 2 OPTAM, puis-je obtenir un devis écrit avant un geste, et ma mutuelle ou la Complémentaire santé solidaire (C2S) couvre-t-elle les restes à charge non payés par l'ALD 100 % ?**
  - *Pourquoi c'est important :* même en ALD 100 %, restent à charge (hors C2S) les dépassements d'honoraires (hors OPTAM, la base Sécurité sociale baisse aussi), le forfait journalier hospitalier (23 €/jour), le forfait patient urgences ALD (9,96 € depuis mars 2026) et jusqu'à 70 € + 70 €/an de participations forfaitaires et franchises médicales non remboursées par les mutuelles (depuis octobre 2026).
- **Pour le travail et le quotidien : un temps partiel thérapeutique et une visite de pré-reprise avec le médecin du travail sont-ils pertinents ? Si essoufflement ou fatigue limitent la marche ou les gestes quotidiens, un dossier MDPH (*CMI*, *AAH* déconjugalisée, *PCH* avant 60 ans, *RQTH* — désormais automatique avec pension d'invalidité ou CMI Invalidité) ou un congé de proche aidant / *AJPA* (66,64 €/jour en 2026 si incapacité ≥ 80 %, APA ou invalidité catégorie 3, et non sur l'ALD seule) mérite-t-il d'être préparé ?** (Note : les anciennes cartes papier d'invalidité et de stationnement expirent le 31 décembre 2026.)`,
    },
  ],
  relatedArticleSlugs: [
    'comprendre-le-diagnostic',
    'glossaire-cardiologie',
    'cardiomyopathie-ischemique',
    'fraction-dejection',
    'examens-et-chiffres',
    'efx-strain-troponine-et-imagerie-cardiaque',
    'medicaments-insuffisance-cardiaque',
    'medicaments-effets-secondaires-suivi',
    'traitements-additionnels-nouveaux',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'finerenone-et-nouveaux-arm',
    'angor-et-medicaments-anti-angineux',
    'antiplaquettaires-bitherapie-et-protection-gastrique',
    'escalade-et-resistance-aux-diuretiques',
    'cholesterol-et-prevention-secondaire',
    'carence-martiale-et-fer-iv',
    'fer-oral-haute-biodisponibilite',
    'these-fer-iv-et-isglt2-quadritherapie',
    'medicaments-glp1-et-incretines',
    'cellules-souches-et-therapies-regeneratives',
    'dispositifs-cardiaques-dai-crt',
    'arythmies-ventriculaires-et-antiarythmiques',
    'gilet-defibrillateur-portable',
    'telesurveillance-insuffisance-cardiaque',
    'revascularisation-pontage-stents',
    'occlusion-coronaire-chronique-cto',
    'stenose-aortique-fevg-reduite',
    'thrombus-vg-et-anticoagulants',
    'anevrisme-ventricule-gauche',
    'insuffisance-cardiaque-fevg-amelioree',
    'insuffisance-cardiaque-avancee-stade-d',
    'ventricule-droit-et-hypertension-pulmonaire',
    'dysfonction-vg-asymptomatique-stade-b',
    'confirmer-la-cause-dysfonction-vg',
    'maladies-associees',
    'diabete-insuffisance-cardiaque',
    'goutte-bpco-thyroide-et-autres-comorbidites',
    'tension-arterielle-insuffisance-cardiaque',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'chirurgie-soins-dentaires-et-jours-de-maladie',
    'these-jours-de-maladie-sraa-vs-isglt2',
    'nutrition-et-complements-insuffisance-cardiaque',
    'sel-et-liquides-insuffisance-cardiaque',
    'these-regime-mediterraneen-potassium-icfer',
    'poids-obesite-et-denutrition',
    'omega-3-huile-de-poisson',
    'these-omega3-faible-dose-risque-fa',
    'coenzyme-q10',
    'these-coq10-mortalite-icfer-moderne',
    'vitamine-d-insuffisance-cardiaque',
    'vitamines-b-insuffisance-cardiaque',
    'magnesium-insuffisance-cardiaque',
    'cafeine-boissons-energisantes-et-stimulants',
    'interactions-complements-aliments-medicaments',
    'automesure-tensionnelle-domicile',
    'montres-connectees-et-capteurs-ic',
    'vaccinations-insuffisance-cardiaque',
    'vivre-avec-insuffisance-cardiaque',
    'vivre-avec-insuffisance-cardiaque-en-france',
    'reseau-de-soins-et-aides-sociales-france',
    'readaptation-cardiaque-et-activite-physique',
    'musculation-vs-endurance-readaptation-cardiaque',
    'vie-sexuelle-et-dysfonction-erectile-ic',
    'voyages-canicule-et-climat-ic',
    'tabac-et-alcool-insuffisance-cardiaque',
    'depression-et-sante-emotionnelle',
    'soins-de-support-et-anticipation',
    'regles-conduite-automobile',
    'essais-cliniques-en-cours-et-a-suivre',
  ],
  sources: [
    {
      label: 'Recommandations européennes ESC (IC 2026, ESC/EACTS 2025, FA et SCC 2024, Cardiomyopathies 2023, Diabète 2023, Endocardite 2023, AV/MSC 2022, NCS 2022) et Guide patient ESC 2026',
      detail: 'Titration, dispositifs, angor, antiplaquettaires, diurétiques, IC avancée, ablation de TV, péri-opératoire, diabète, stade B, étiologie et décision partagée',
    },
    {
      label: 'Essais cliniques et thèses 2025–2026 (VANISH2, TRANSFORM-HF, ADVOR, CLOROTIC, HOST-EXAM 10 ans, STOP-or-NOT, SPACE, Fink 2022, SMART-C, FAIR-HF2, HEART-FID phosphate, CORAL/DANUTRIO-HF, GISSI-HF FA, Turban 2021, PROGRESS NEJM 2026, DAPA-MI, IAMI, IVVE, CARES/FAST, RED-HF, REHAB-HF)',
      detail: 'Justification chiffrée des questions sur les arythmies, les diurétiques, les jours de maladie, le fer IV, le potassium alimentaire, la CoQ10, les oméga-3, les vaccins et les comorbidités',
    },
    {
      label: 'Sources réglementaires et institutionnelles françaises (HAS oct. 2024 dentaire, SFCO 2015, ANSM 2024–2026, Calendrier vaccinal 2026, service-public.fr, ameli.fr, CNSPFV 2026, Loi 2026-404, Arrêté du 28 mars 2022)',
      detail: 'IPA, Mon espace santé, SMR/APA, OPTAM/mutuelle/C2S, franchises 2026, MDPH/CMI/AAH/PCH/RQTH/AJPA, directives anticipées, HAD, SPCMD, canicule, pseudoéphédrine, tabac/Champix et conduite',
    },
  ],
  disclaimerType: 'medical',
};
