import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'questions-equipe-cardiologie',
  sourceWikiPath: 'wiki/references/questions-for-the-cardiology-team.md',
  titleFr: "Questions à poser à l'équipe de cardiologie",
  category: 'references',
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
  ],
  aliases: [
    'Questions à poser',
    'Préparer sa consultation',
    'Liste de questions cardiologue',
    'Décision partagée',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Une liste de questions pratiques à emporter en consultation, regroupées par thème : comprendre vos chiffres, vos médicaments, les dispositifs implantables, les gestes coronaires, la récupération, l'alimentation, la vie quotidienne et les démarches en France. Ce sont des questions pour éclairer votre situation et participer aux décisions, pas des recommandations à appliquer seul.",
  sections: [
    {
      headingFr: 'Comment utiliser cette liste',
      bodyMarkdownFr:
        "Ces questions sont conçues pour préparer vos rendez-vous avec votre cardiologue, votre médecin traitant, votre infirmière insuffisance cardiaque ou IPA, votre pharmacien ou votre médecin du travail. Ce sont **des questions, et non des prescriptions** : leur objectif est de clarifier votre situation personnelle et de favoriser une décision partagée. Les recommandations européennes (ESC) encouragent chaque patient à discuter de ses priorités personnelles avec ses proches et son équipe soignante. Sélectionnez les quelques questions qui comptent le plus pour votre prochaine visite.",
    },
    {
      headingFr: 'Comprendre vos chiffres',
      bodyMarkdownFr: `- **Quel examen a mesuré ma FEVG : une échocardiographie transthoracique (ETT) ou une IRM cardiaque ? A-t-elle été mesurée avec la même méthode à chaque fois ?**
  - *Pourquoi c'est important :* chez les patients présentant une dysfonction ischémique du ventricule gauche, l'IRM cardiaque mesure en moyenne une FEVG inférieure d'environ 5,5 points à celle de l'ETT, et les deux examens peuvent se situer de part et d'autre du seuil de 35 % (sous-étude ETT vs IRM de REVIVED-BCIS2).
- **Quelle est la taille de mon ventricule gauche (volumes indexés VTDi / VTSi ou diamètre DTDVG) et évolue-t-elle ?**
  - *Pourquoi c'est important :* le volume du ventricule gauche prédisait l'évolution clinique dans la sous-étude de REVIVED-BCIS2.
- **Dans quelle classe NYHA suis-je situé(e) ?**
- **Mon IRM cardiaque montre-t-elle une cicatrice (rehaussement tardif, LGE), et sur quelle étendue ?**`,
    },
    {
      headingFr: 'Médicaments de fond (les 4 piliers)',
      bodyMarkdownFr: `- **Est-ce que je prends bien les quatre classes de médicaments de fond (IEC ou ARNI, bêtabloquant, ARM, iSGLT2) ? Si l'une manque, pour quelle raison ?**
- **Mes doses sont-elles aux doses cibles, ou prévoit-on de les augmenter progressivement (titration) ? Selon quel calendrier, avec quels bilans sanguins et quelles consultations à chaque palier, et quels résultats (tension artérielle, potassium, fonction rénale, pouls) conduiraient à différer une augmentation ?**
  - *Pourquoi c'est important :* les recommandations ESC 2026 préconisent d'augmenter les doses par paliers toutes les 1 à 2 semaines lorsque c'est toléré. Dans STRONG-HF, atteindre les doses cibles dans les 2 semaines suivant une sortie d'hospitalisation, avec des visites aux semaines 1, 2, 3 et 6, a réduit les réhospitalisations pour insuffisance cardiaque ; cet essai appliquait toutefois ses propres règles de pause, qui ne constituent pas des cibles personnelles. Dans le registre suédois SwedeHF, seule une minorité de patients recevaient les doses cibles, et moins encore chez les personnes plus âgées.
- **Quels effets secondaires dois-je signaler, et qui dois-je contacter avant de modifier quoi que ce soit ?**
  - *Pourquoi c'est important :* il est conseillé de ne jamais arrêter un traitement cardiaque sans en parler d'abord à son équipe soignante.
- **Dois-je faire un bilan de carence en fer (ferritine et coefficient de saturation de la transferrine, CST) ?** (ESC 2026)`,
    },
    {
      headingFr: 'Dispositifs implantables (DAI et CRT)',
      bodyMarkdownFr: `- **Quand ma FEVG sera-t-elle réévaluée après optimisation de mes médicaments ?**
  - *Pourquoi c'est important :* la décision d'implanter un défibrillateur automatique implantable (DAI) repose sur une FEVG ≤ 35 % après au moins 3 mois de traitement de fond optimal, et au moins 40 jours après un infarctus du myocarde (ESC 2026).
- **Mon QRS est-il élargi sur l'ECG, ou ai-je un bloc de branche gauche (BBG) ? Une resynchronisation cardiaque (CRT) me concerne-t-elle ?** (ESC 2026)
- **Si un DAI est proposé :**
  - Quel est mon risque estimé avec et sans DAI, compte tenu des médicaments modernes ?
  - Quels sont les inconvénients et risques de complications ?
  - Comment la fonction de choc serait-elle gérée en fin de vie ?
  - *Pourquoi c'est important :* la FEVG seule prédit imparfaitement le risque individuel de mort subite (PROFID), et le guide patient ESC demande que vous soyez accompagné(e) pour comprendre l'objectif, les risques et la gestion en fin de vie du dispositif.
- **Quelles sont les règles de conduite automobile après une implantation ou après un choc en France ?**`,
    },
    {
      headingFr: 'Traitements additionnels, gilet défibrillateur (LifeVest) et télésurveillance',
      bodyMarkdownFr: `- **Une fois mes médicaments de fond à leurs doses finales, un traitement additionnel pourrait-il me concerner (ivabradine, digoxine ou digitoxine, vériciguat) ?**
  - *Pourquoi c'est important :* chacun a des critères précis : l'ivabradine (*Procoralan*) requiert un rythme sinusal et une fréquence cardiaque de repos > 70 bpm (≥ 75 bpm dans l'AMM européenne) malgré la dose maximale tolérée de bêtabloquant ; le vériciguat (*Verquvo*) est indiqué après une aggravation récente (ESC 2026 ; rapport EMA ; RCP Verquvo).
- **Quelle est ma fréquence cardiaque de repos sous ma dose actuelle de bêtabloquant ? Si elle reste à 77 bpm ou plus en rythme sinusal, l'ivabradine mérite-t-elle d'être envisagée, ou faut-il d'abord augmenter le bêtabloquant ?**
  - *Pourquoi c'est important :* dans l'essai SHIFT, le bénéfice de l'ivabradine était concentré chez les patients ayant une fréquence cardiaque ≥ 77 bpm, et n'était pas significatif chez ceux prenant déjà au moins la moitié de la dose cible de bêtabloquant.
- **Mon NT-proBNP est-il inférieur à 6 000 pg/mL, et le vériciguat ne serait-il pertinent qu'après un épisode d'aggravation (son indication d'AMM) ?**
  - *Pourquoi c'est important :* l'analyse groupée des essais VICTORIA et VICTOR suggère un bénéfice modeste, surtout visible pour un NT-proBNP jusqu'à 6 000 pg/mL ; l'essai VICTOR seul, chez des patients ambulatoires stables, était neutre.
- **Si la digoxine était un jour envisagée : comment ma fonction rénale et mon taux sanguin seraient-ils surveillés, quels signes d'alerte dois-je reconnaître, et la digitoxine (le médicament testé dans DIGIT-HF) est-elle disponible en France ?** (Ahmed 2006 ; DIGIT-HF ; fiche patient NHS)
- **La finérénone est-elle pertinente dans mon cas, ou la spironolactone (*Aldactone*) / l'éplérénone (*Inspra*) restent-elles l'ARM adapté à ma FEVG ? Si ma FEVG remonte à 40 % ou plus, la finérénone deviendrait-elle une option, en remplacement ou en ajout de mon ARM actuel ? Ai-je un diabète ou une maladie rénale qui la rendrait pertinente pour la protection rénale ?**
  - *Pourquoi c'est important :* la finérénone n'a démontré son efficacité qu'à partir d'une FEVG ≥ 40 % (FINEARTS-HF, qui incluait des patients dont la FEVG s'était améliorée à ≥ 40 %), ou dans le diabète de type 2 avec maladie rénale chronique dans des essais qui excluaient l'ICFER symptomatique. Dans l'ICFER, les seules données disponibles sont des études courtes de phase 2 (FINEARTS-HF ; FINE-HEART ; ARTS-HF ; ESC 2026).
- **Si mon potassium augmente sous spironolactone ou éplérénone, réduiriez-vous la dose ou ajouteriez-vous un chélateur de potassium tel que le patiromer (*Veltassa*) pour maintenir la pleine dose ?**
  - *Pourquoi c'est important :* dans l'essai DIAMOND (majoritairement des ICFER ischémiques), le patiromer a permis de maintenir davantage de patients à pleine dose d'ARM, mais l'essai a modifié son critère principal au profit de la kaliémie et n'a pas démontré de baisse de la mortalité (DIAMOND ; ESC 2026).
- **Pendant la titration des médicaments et avant la décision de DAI, le gilet défibrillateur portable (LifeVest) mérite-t-il d'être envisagé ?**
  - Si oui : combien de temps devrai-je le porter, que faire en cas d'alarme et que doivent savoir mes proches ?
  - Quels marqueurs de risque s'appliquent à mon cas (troubles du rythme rapides précoces, extrasystoles fréquentes, cicatrice à l'IRM, syncope), et suis-je encore dans la fenêtre précoce après mon infarctus ou mon intervention ? *Pourquoi c'est important :* la Société allemande de cardiologie (DGK) classe le gilet dans les 40 premiers jours après infarctus ou stent (90 jours après pontage) comme « plutôt non indiqué, peut être envisagé au cas par cas », tandis qu'en France il est remboursé dans la cardiomyopathie ischémique avec FEVG ≤ 35 % ; il doit être porté plus de 20 heures par jour (DGK ; avis CNEDiMTS HAS ; revue Goetz).
  - Puis-je conduire en le portant, et que se passe-t-il pour la conduite en cas de choc ? *Pourquoi c'est important :* en France, l'arrêté du 28 mars 2022 interdit la conduite automobile tant que le gilet défibrillateur est indiqué (contrairement au Royaume-Uni où le DVLA n'a pas de règle spécifique au gilet et juge selon la pathologie sous-jacente).
  - *Pourquoi c'est important :* le risque rythmique précoce est faible en valeur absolue mais maximal au cours des premiers mois ; le gilet n'est efficace que porté presque en permanence, et les preuves restent nuancées (VEST ; HF-OPT ; avis CNEDiMTS HAS).
- **Ma FEVG sera-t-elle recontrôlée à 3 mois ou plus tard ?**
  - *Pourquoi c'est important :* un registre (HF-OPT) suggère que la FEVG peut continuer à s'améliorer jusqu'à 6 mois, alors que les recommandations réévaluent généralement vers 3 mois (ESC 2026).
- **Serais-je éligible à la télésurveillance de l'insuffisance cardiaque à domicile sans hospitalisation récente, sur la base de ma classe NYHA et de mon NT-proBNP ? Qui analyse les alertes et peut-il adapter mes médicaments ? Qu'apporterait-elle en plus de ma pesée quotidienne ?**
  - *Pourquoi c'est important :* en France, elle est prise en charge par l'Assurance Maladie après une hospitalisation récente pour insuffisance cardiaque, ou en cas de classe NYHA ≥ II associée à un NT-proBNP élevé (référentiel HAS). L'essai positif TIM-HF2 reposait sur un centre médicalisé fonctionnant jour et nuit et n'incluait que des patients hospitalisés pour insuffisance cardiaque dans l'année écoulée.
- **Si un DAI ou une CRT est implanté(e), la télésurveillance de la prothèse sera-t-elle activée ? Qui lit les alertes et dans quel délai ? La marque du dispositif a-t-elle une importance (par exemple l'alerte HeartLogic n'existe que sur les appareils Boston Scientific) ? Les contrôles à distance peuvent-ils remplacer certaines visites à l'hôpital ?**
  - *Pourquoi c'est important :* le télésuivi des prothèses a surtout permis d'espacer les consultations dans l'essai MORE-CARE plutôt que d'améliorer la survie (consensus HRS 2023 ; MORE-CARE ; MANAGE-HF phase 1).
- **Un capteur implanté de pression de l'artère pulmonaire (CardioMEMS) pourrait-il être pertinent pour moi à un stade donné, sachant qu'il n'est pas remboursé en France et que les recommandations les plus fortes concernent les patients après une hospitalisation pour insuffisance cardiaque ?** (consensus HFA 2025 ; avis HAS CardioMEMS 2021)`,
    },
    {
      headingFr: 'Artères coronaires (pontage aorto-coronarien ou stents)',
      bodyMarkdownFr: `- **Une équipe multidisciplinaire (Heart Team), incluant un spécialiste de l'insuffisance cardiaque, a-t-elle examiné mon anatomie coronaire ?** (ESC 2026)
- **L'objectif d'une intervention serait-il de soulager un angor (douleur thoracique) ou d'améliorer la survie ?**
  - *Pourquoi c'est important :* le niveau de preuve est différent selon l'objectif visé (ESC 2026).
- **Si un pontage aorto-coronarien est discuté :**
  - Quel est mon risque opératoire personnel ?
  - Comment les résultats de l'étude STICH s'appliquent-ils à un patient traité avec les médicaments actuels ?
  - *Pourquoi c'est important :* STICHES a montré un bénéfice de survie à 10 ans, mais à une époque antérieure aux traitements de fond actuels.
- **Si une angioplastie avec stents est discutée : qu'en attend-on précisément dans mon cas ?**
  - *Pourquoi c'est important :* l'essai REVIVED-BCIS2 n'a pas montré de réduction des décès ni des hospitalisations pour insuffisance cardiaque avec les stents dans cette population.`,
    },
    {
      headingFr: 'Artère bouchée de longue date avec collatérales (CTO)',
      bodyMarkdownFr: `- **Le muscle cardiaque situé en aval de l'artère bouchée est-il encore vivant (viable), et manque-t-il de sang à l'effort (ischémie) sur un examen de stress ou une IRM ?**
  - *Pourquoi c'est important :* le consensus EAPCI/EACVI 2024 recommande d'évaluer l'ischémie et la viabilité dans le territoire occlus lorsque la FEVG est réduite ; la contractilité s'améliorait principalement dans les segments viables (Leite 2026).
- **Une Heart Team a-t-elle étudié ce dossier, et quelle recommandation s'applique à ma FEVG ?**
  - *Pourquoi c'est important :* les recommandations ESC 2024 sur les syndromes coronariens chroniques ne comportent pas de ligne spécifique pour la CTO, et leur recommandation de survie pour l'IVA proximale s'applique uniquement au-dessus de 35 % de FEVG.
- **Sans angor, qu'attendrait-on de la réouverture de cette artère ?**
  - *Pourquoi c'est important :* le bénéfice prouvé de la désobstruction d'une CTO concerne le soulagement des symptômes ; les essais randomisés n'ont pas montré de réduction des décès ni des infarctus (van Veelen 2021 ; ORBITA-CTO).
- **Si mon symptôme principal est l'essoufflement plutôt qu'une douleur thoracique, l'ouverture de l'artère est-elle susceptible de le soulager ?**
  - *Pourquoi c'est important :* dans l'essai ORBITA-CTO contrôlé contre procédure factice (sham), l'angor s'est amélioré mais l'essoufflement et l'état de santé général ne se sont pas clairement améliorés, et presque tous les participants avaient une FEVG normale.
- **Quels sont les taux de succès et de complications de ce centre pour une angioplastie de CTO, et quel est mon risque personnel avec une FEVG basse ?**
  - *Pourquoi c'est important :* dans un grand registre (PROGRESS-CTO), la mortalité hospitalière était de 1,1 % pour une FEVG ≤ 35 % contre 0,3 % pour une FEVG ≥ 50 %, et environ 1 patient sur 6 ayant une FEVG basse a nécessité une pompe d'assistance cardiaque temporaire durant la procédure.
- **Un pontage sur l'IVA (y compris par mini-thoracotomie, MIDCAB) serait-il une alternative pertinente ?**
  - *Pourquoi c'est important :* cette approche entraîne moins de réinterventions que le stent sur l'IVA isolée, mais les données ne sont pas spécifiques aux CTO ni aux FEVG basses (Gallingani 2025).`,
    },
    {
      headingFr: 'Cholestérol LDL, aspirine et prévention secondaire',
      bodyMarkdownFr: `- **Quel est mon objectif de cholestérol LDL, et ai-je atteint ses deux volets ?**
  - *Pourquoi c'est important :* après maladie coronaire, l'objectif ESC est un LDL inférieur à **0,55 g/L (1,4 mmol/L)** **et** une baisse d'au moins 50 % par rapport au taux initial (Classe I ; ESC/EAS 2019 ; ESC 2024).
- **Si l'objectif n'est pas atteint, quelle est l'étape suivante (augmentation de dose de statine, ajout d'ézétimibe, injection d'anti-PCSK9) ?**
  - *Pourquoi c'est important :* l'ESC définit une escalade par étapes, chacune associée à une classe de recommandation (ESC 2024 ; mise à jour ESC/EAS 2025).
- **Ma lipoprotéine(a) — Lp(a) — doit-elle être dosée une fois dans ma vie ?**
  - *Pourquoi c'est important :* l'ESC suggère un dosage unique car un taux élevé augmente le risque cardiovasculaire, même si aucun médicament abaissant la Lp(a) n'a encore démontré de réduction d'événements cliniques : dans Lp(a)HORIZON, le pélacarsen a réduit la Lp(a) de 78 % sans réduire les infarctus, AVC ou décès.
- **Ma statine est-elle prescrite pour mes artères coronaires, et dois-je la poursuivre ?**
  - *Pourquoi c'est important :* les essais dans l'insuffisance cardiaque évaluaient l'intérêt de *débuter* une statine pour l'insuffisance cardiaque seule, et non d'arrêter une statine déjà justifiée par une maladie coronaire : CORONA n'a inclus que des patients jugés ne pas en avoir besoin, et GISSI-HF a exclu les patients qui en prenaient déjà (CORONA ; GISSI-HF ; ESC/EAS 2019).
- **Quelle intensité de statine est adaptée à mon cas : la dose de haute intensité recommandée pour la maladie coronaire, ou la dose d'intensité modérée admise par les recommandations américaines dans l'insuffisance cardiaque ischémique ?**
  - *Pourquoi c'est important :* les recommandations américaines ACC/AHA 2026 préconisent une statine de haute intensité pour la maladie artérielle (COR 1) et indiquent séparément qu'une statine d'intensité modérée « peut être raisonnable » dans l'ICFER d'origine coronaire (COR 2b), sans préciser comment articuler les deux.
- **Certains de mes médicaments cardiaques limitent-ils la dose de ma statine ?**
  - *Pourquoi c'est important :* l'amiodarone, le diltiazem, le vérapamil, la dronédarone, la ranolazine et le ticagrélor plafonnent la dose de simvastatine (et de lovastatine) ; la colchicine impose une surveillance musculaire plus attentive quelle que soit la statine (ACC/AHA 2026).
- **Dois-je prendre de l'aspirine ou du clopidogrel au long cours, et que changerait la nécessité éventuelle d'un anticoagulant ?**
  - *Pourquoi c'est important :* l'ESC 2024 recommande de l'aspirine à faible dose (ou du clopidogrel) à vie dans la maladie coronaire, et un anticoagulant seul lorsqu'une anticoagulation au long cours est indiquée.
- **La colchicine à faible dose (0,5 mg/jour) est-elle appropriée dans mon cas, compte tenu de mes reins et de mes autres médicaments ?**
  - *Pourquoi c'est important :* l'ESC indique qu'elle doit être envisagée (Classe IIa), mais les essais ont exclu l'insuffisance cardiaque sévère et son résumé des caractéristiques mentionne des limites rénales et des interactions médicamenteuses.`,
    },
    {
      headingFr: 'Rétrécissement de la valve aortique (sténose aortique)',
      bodyMarkdownFr: `- **Quel est le degré de rétrécissement de ma valve aortique sur chaque paramètre (surface valvulaire, indice de perméabilité, gradient moyen), et mon débit est-il bas (volume d'éjection indexé, SVi) ?**
  - *Pourquoi c'est important :* avec un ventricule gauche affaibli, le gradient de pression sous-estime la sévérité de la sténose et les classifications diffèrent entre l'ESC et l'ACC/AHA ; les mesures doivent être interprétées ensemble (EACVI/ASE 2017 ; ACC/AHA 2020).
- **À quelle fréquence la valve doit-elle être contrôlée par ETT, compte tenu de ma FEVG ?**
  - *Pourquoi c'est important :* l'ESC suggère au moins un contrôle annuel pour un rétrécissement modéré ; les intervalles ACC/AHA ont été conçus pour un débit normal (ESC/EACTS 2025 ; ACC/AHA 2020).
- **Une variation de la surface valvulaire entre deux échocardiographies est-elle réelle ou dans la marge de variabilité de mesure ?**
  - *Pourquoi c'est important :* le diamètre de la chambre de chasse est élevé au carré dans le calcul et varie de 5 à 8 % d'une mesure à l'autre (EACVI/ASE 2017).
- **Si une chirurgie cardiaque était envisagée pour une autre raison (par exemple un pontage), la valve serait-elle traitée dans le même temps ?**
  - *Pourquoi c'est important :* les recommandations envisagent l'intervention sur une sténose modérée principalement à l'occasion d'une autre chirurgie cardiaque (ESC/EACTS 2025 ; ACC/AHA 2020).`,
    },
    {
      headingFr: 'Risque de caillot (thrombus VG) et anticoagulants',
      bodyMarkdownFr: `- **L'apex et la paroi antérieure du ventricule gauche ont-ils été vérifiés à la recherche d'un caillot (thrombus VG), et par quel examen (ETT simple, ETT de contraste ou IRM cardiaque) ?**
  - *Pourquoi c'est important :* une ETT sans contraste manque de nombreux caillots détectés par l'IRM cardiaque (Bulluck 2018 ; Sacoransky 2024).
- **Ai-je un anévrisme du ventricule gauche ou un autre élément qui modifierait la question d'un anticoagulant ?**
  - *Pourquoi c'est important :* en rythme sinusal, les recommandations (comme NICE NG106) n'envisagent une anticoagulation qu'après embolie, en présence d'un anévrisme VG ou d'un thrombus intracardiaque.
- **Si un caillot était découvert, comment l'anticoagulant s'articulerait-il avec mon aspirine, et quand un examen de contrôle serait-il programmé ?**
  - *Pourquoi c'est important :* l'ESC 2023 suggère 3 à 6 mois d'anticoagulation guidée par l'imagerie de contrôle, et l'association avec un antiagrégant augmente le risque hémorragique.
- **Un trouble du rythme comme une fibrillation atriale (FA) changerait-il mon besoin d'anticoagulant ?**
  - *Pourquoi c'est important :* la FA est une indication distincte d'anticoagulation ; sans FA ni thrombus, l'anticoagulation n'est pas systématique dans l'ICFER (ESC 2026 ; NICE NG106).`,
    },
    {
      headingFr: 'Récupération et perspectives',
      bodyMarkdownFr: `- **Quelle amélioration de ma FEVG est réaliste dans mon cas, et dans quel délai ?**
- **Si ma FEVG s'améliore (HFimpEF), qu'est-ce qui change et qu'est-ce qui reste identique ? Parleriez-vous d'amélioration, de rémission ou de récupération, et quel suivi ainsi que quels médicaments devraient être poursuivis dans chaque cas ?**
  - *Pourquoi c'est important :* les recommandations ESC 2026 préconisent de poursuivre les médicaments de fond même après amélioration de la FEVG (Classe I). L'ESC 2026 emploie le terme de « rémission » pour toute FEVG améliorée, alors que la Définition universelle 2026 le réserve aux cas où la FEVG est revenue à la normale (ESC 2026 ; Définition universelle 2026).
- **Quels sont les objectifs prioritaires de mon traitement : vivre plus longtemps, éviter les hospitalisations ou me sentir mieux au quotidien ? Comment trouver le bon équilibre ?** (guide patient ESC)`,
    },
    {
      headingFr: 'Vie quotidienne et suivi',
      bodyMarkdownFr: `- **Quelle prise de poids rapide doit m'amener à appeler, et quel numéro contacter (y compris le week-end ou en dehors des heures ouvrables) ?**
- **Ai-je besoin d'une limitation de mes apports en liquides, ou simplement d'une modération du sel ?**
- **Puis-je être orienté(e) vers une réadaptation cardiaque (SMR cardiovasculaire) ?**
  - *Pourquoi c'est important :* l'ESC 2026 place la réadaptation cardiaque en Classe I pour les patients stables.
- **Mes vaccinations (grippe, pneumocoque, COVID-19, VRS selon l'âge) sont-elles à jour ?**
- **À quelle fréquence serai-je suivi(e), et avec quels examens ?**
  - *Pourquoi c'est important :* le guide patient ESC évoque au moins tous les 6 mois en situation stable ; la figure 22 des recommandations ESC 2026 indique un suivi tous les 6 à 12 mois en cas d'insuffisance cardiaque symptomatique, ou plus rapproché si nécessaire.
- **Vers qui me tourner si je ressens une baisse de moral ou de l'anxiété ?**`,
    },
    {
      headingFr: 'Alimentation, poids, vitamine D et compléments',
      bodyMarkdownFr: `- **Ma ferritine et mon coefficient de saturation de la transferrine (CST) ont-ils été vérifiés ? En cas de carence, le fer intraveineux est-il une option ?**
  - *Pourquoi c'est important :* le fer intraveineux a réduit d'environ un cinquième les hospitalisations pour insuffisance cardiaque dans les essais regroupés, alors que le fer par voie orale n'a pas été efficace (méta-analyse fer IV 2025 ; IRONOUT-HF).
- **Quel apport en sel viser ? Une restriction hydrique stricte est-elle encore nécessaire quand je suis stable ?**
  - *Pourquoi c'est important :* la restriction sodée très stricte et la limitation systématique des liquides n'ont pas amélioré le pronostic dans les essais récents (SODIUM-HF ; FRESH-UP).
- **Puis-je utiliser un sel de régime « pauvre en sodium », ou contient-il du potassium incompatible avec mes médicaments ?**
  - *Pourquoi c'est important :* les sels de substitution riches en potassium figurent parmi les interactions signalées avec le sacubitril/valsartan (*Entresto*) et les autres bloqueurs du système rénine-angiotensine / ARM.
- **Je prends (ou j'envisage de prendre) [oméga-3 / coenzyme Q10 / vitamines / plantes]. Est-ce sûr avec mes médicaments ? Est-ce utile ?**
  - *Pourquoi c'est important :* l'AHA demande d'informer toute l'équipe soignante, y compris le pharmacien, de chaque complément alimentaire ou produit à base de plantes.
- **Quels antalgiques (médicaments contre la douleur) sont sûrs dans mon cas ?**
  - *Pourquoi c'est important :* les anti-inflammatoires non stéroïdiens (AINS) disponibles sans ordonnance peuvent nuire aux reins et provoquer une décompensation en association avec les traitements de l'insuffisance cardiaque.
- **Puis-je perdre du poids sans risque, et comment ? Y a-t-il des régimes à éviter avec mes médicaments ?**
  - *Pourquoi c'est important :* les régimes cétogènes et très hypocaloriques sont mentionnés comme facteurs déclenchants d'acidocétose sous inhibiteurs du SGLT2 (dapagliflozine / *Forxiga*, empagliflozine / *Jardiance*). La seule étude sur un régime cétogène dans l'insuffisance cardiaque avec obésité était une revue rétrospective de dossiers non contrôlée dans laquelle seuls 2 patients sur 125 prenaient un iSGLT2 et où les corps cétoniques n'ont jamais été mesurés, ce qui ne permet pas de démontrer la sécurité de l'association. La HFA 2025 recommande de perdre du poids en préservant la masse musculaire : suffisamment de protéines et d'exercice physique, et pas uniquement une restriction calorique (Moseley 2025 ; déclaration HFA 2025 sur l'obésité).
- **Mon poids doit-il être évalué uniquement par l'IMC, ou aussi par mon tour de taille ? En cas d'obésité, un médicament pour la perte de poids comme le sémaglutide ou le tirzépatide aiderait-il ou nuirait-il à mon cœur ?**
  - *Pourquoi c'est important :* la HFA suggère d'associer le rapport tour de taille / taille à l'IMC. Les bénéfices cardiaques de ces médicaments n'ont été démontrés que dans l'insuffisance cardiaque à FEVG préservée (SUMMIT : HR 0,62 pour décès cardiovasculaire ou aggravation d'IC). Dans l'ICFER, les données sont peu nombreuses et mitigées (dans l'essai LIVE, 12 événements cardiaques graves contre 3 sous liraglutide), et la HFA qualifie leur sécurité de « débattue » (déclaration HFA 2025).
- **Ai-je bénéficié d'un dépistage de la dénutrition ou de la perte musculaire ? Si un score a été utilisé, prenait-il en compte mon cholestérol ?**
  - *Pourquoi c'est important :* le score CONUT attribue des points à un cholestérol bas, si bien qu'une statine peut faire paraître dénutrie une personne bien alimentée, et chez les utilisateurs de statines il a manqué des patients mangeant moins. Un court questionnaire sur l'appétit et l'évolution du poids (MNA-SF) s'est révélé le plus performant dans une étude japonaise portant sur 150 patients ambulatoires ; aucun des scores ne prédisait le pronostic à 1 an (Kinugasa 2022).
- **Mon taux de vitamine D doit-il être dosé, plutôt que de prendre un complément « par précaution » ?**
  - *Pourquoi c'est important :* un taux bas de vitamine D est fréquent dans l'ICFER (cité entre 56 % et 83 %), mais les essais n'ont pas montré moins d'hospitalisations ni de décès avec une supplémentation systématique, et une cartographie des preuves a retrouvé une distance de marche inférieure d'environ 39 m sous supplémentation. Une revue de 2025 conseille de traiter une carence avérée et non de supplémenter tout le monde (Kampka 2025 ; Chua 2025).
- **On m'a proposé un produit à base de plantes médicinales ou du Tai-Chi. L'un ou l'autre en vaut-il la peine, et les plantes risquent-elles d'interagir avec mes médicaments ?**
  - *Pourquoi c'est important :* une revue parapluie (Chua 2025) a retrouvé un niveau de certitude modéré indiquant que le Tai-Chi réduisait les hospitalisations (RR 0,47 sur 3 petits essais), en cohérence avec les conseils de réadaptation. Les produits à base de plantes reposent surtout sur de petits essais chinois évaluant des bilans biologiques ou la marche ; certaines formules contiennent du ginseng ou du danshen (susceptibles d'interagir avec les anticoagulants) ou des substances cardiotoxiques telles que la racine d'aconit, et des préparations à base de *Pueraria* ont fait monter le potassium.
- **Serait-il utile de consulter un(e) diététicien(ne) et de bénéficier d'une réadaptation cardiaque ?**`,
    },
    {
      headingFr: "Résultats d'examens (biomarqueurs et imagerie)",
      bodyMarkdownFr: `- **Quel est mon taux de NT-proBNP (ou de BNP), et comment a-t-il évolué ? Lequel des deux mon laboratoire dose-t-il ?**
  - *Pourquoi c'est important :* les deux dosages ont des valeurs de référence différentes, de nombreux facteurs autres que l'insuffisance cardiaque les font varier, et le sacubitril/valsartan (*Entresto*) peut faire monter le BNP mais pas le NT-proBNP ; aucune source analysée ne fixe de seuil universel d'amplitude de variation significative (ESC 2026).
- **Quels sont les volumes de mon ventricule gauche indexés à ma surface corporelle (VTDi, VTSi), et ont-ils été mesurés par ETT ou par IRM cardiaque ?**
  - *Pourquoi c'est important :* l'ETT et l'IRM cardiaque n'ont pas les mêmes normes (ASE/EACVI 2015).
- **Quelle proportion de mon muscle cardiaque est cicatricielle à l'IRM ?**
  - *Pourquoi c'est important :* une cicatrice plus étendue prédisait un pronostic moins favorable et une moindre récupération de la FEVG dans REVIVED-BCIS2.`,
    },
    {
      headingFr: 'Bilans sanguins, effets secondaires et plan « jours de maladie »',
      bodyMarkdownFr: `- **Quand sont prévus mes prochains bilans de la fonction rénale (créatinine, DFGe) et du potassium, et qui analyse et ajuste le traitement en fonction des résultats ?**
  - *Pourquoi c'est important :* une revue européenne suggère un contrôle 1 à 2 semaines après chaque initiation ou augmentation de dose, puis environ tous les 4 mois (Volterrani 2024).
- **Si ma créatinine augmente légèrement, quelle hausse est attendue et quel seuil conduirait à modifier le traitement ?**
  - *Pourquoi c'est important :* une hausse initiale modérée est souvent attendue lors de la mise en route ou de la titration des médicaments de fond (Clark 2019).
- **Que dois-je faire de mes médicaments en cas de vomissements, de diarrhée importante ou de fièvre élevée (plan « jours de maladie ») ?**
  - *Pourquoi c'est important :* certains documents conseillent de suspendre temporairement l'iSGLT2 en cas de déshydratation aiguë, tandis que des consensus soulignent que les règles génériques manquent de preuves ; un plan personnalisé écrit par votre médecin lève toute ambiguïté.`,
    },
    {
      headingFr: 'Questions complémentaires sur les dispositifs',
      bodyMarkdownFr: `- **Si un DAI est recommandé, un modèle sous-cutané (S-DAI) ou transveineux est-il mieux adapté à mon cas ? Suis-je susceptible d'avoir besoin d'une stimulation (pacemaker) ou d'une CRT plus tard ?**
  - *Pourquoi c'est important :* dans PRAETORIAN, les deux types ont eu des résultats globaux comparables ; le S-DAI entraînait moins de complications liées aux sondes, mais il exclut les patients nécessitant une stimulation ou une CRT, et les chocs appropriés étaient plus fréquents.
- **L'essai PROFID-EHRA, actuellement en cours, modifie-t-il votre regard sur l'indication de DAI dans mon cas ?**
  - *Pourquoi c'est important :* il évalue l'apport du DAI en plus des traitements modernes ; ses résultats ne sont pas attendus avant fin 2027.`,
    },
    {
      headingFr: 'Activité physique, moral et anticipation',
      bodyMarkdownFr: `- **Un programme de réadaptation cardiaque à domicile ou en hôpital de jour est-il possible si un centre est difficile d'accès ?**
  - *Pourquoi c'est important :* les programmes à domicile et en centre obtiennent des résultats comparables dans la revue Cochrane 2024.
- **Mon moral peut-il être évalué ? Vers quel professionnel puis-je être orienté(e) ?**
  - *Pourquoi c'est important :* la dépression touche environ un quart des personnes vivant avec une insuffisance cardiaque ; la thérapie cognitivo-comportementale (TCC) et l'exercice physique disposent des meilleures preuves (Basile 2023).
- **Des soins de support ou soins palliatifs précoces peuvent-ils m'aider dès maintenant, en parallèle de mes traitements habituels ?**
  - *Pourquoi c'est important :* l'Association européenne d'insuffisance cardiaque (HFA 2020) indique qu'une approche de soins de support doit être envisagée à tout stade.
- **Si je porte un DAI, comment et quand aborderons-nous la possibilité de désactiver la fonction de choc plus tard ?**
  - *Pourquoi c'est important :* la HFA 2020 recommande d'aborder cette question avant l'implantation et de la réexaminer régulièrement.`,
    },
    {
      headingFr: 'Conduite automobile',
      bodyMarkdownFr: `- **Combien de temps ne dois-je pas conduire après une implantation de DAI ou après un choc en France ?**
  - *Pourquoi c'est important :* les délais varient selon les pays (d'une semaine à un mois après un DAI en prévention primaire selon les législations) ; en France, l'arrêté du 28 mars 2022 et l'avis d'un médecin agréé (distinct du médecin traitant) encadrent la reprise.
- **Je détiens un permis poids lourd ou transport en commun (groupe 2 / groupe lourd). Qu'implique ma FEVG ou un DAI ?**
  - *Pourquoi c'est important :* les règles minimales européennes (Directive UE 2016/1106) exigent une FEVG ≥ 35 % en NYHA I–II pour le groupe 2, et un DAI contre-indique définitivement le permis du groupe 2.`,
    },
    {
      headingFr: 'Maladies associées',
      bodyMarkdownFr: `- **Ma fonction rénale influence-t-elle le choix ou les doses de mes médicaments ?** (Beldhuis 2022)
- **Si j'ai une fibrillation atriale (FA), quel est mon score de risque d'AVC (CHA₂DS₂-VA), et dois-je prendre un anticoagulant ?**
  - *Pourquoi c'est important :* l'insuffisance cardiaque compte déjà pour 1 point dans le score européen CHA₂DS₂-VA (ESC 2024).
- **Ai-je une fuite de la valve mitrale (insuffisance mitrale secondaire) ? Quelle est sa sévérité, et sera-t-elle réévaluée après optimisation des médicaments ?**
  - *Pourquoi c'est important :* environ 40 % des insuffisances mitrales secondaires s'améliorent après 1 à 3 mois de traitement médical optimisé (ESC/EACTS 2025).
- **Si j'ai un diabète, mes médicaments antidiabétiques sont-ils bien adaptés à mon cœur, et quel objectif d'HbA1c dois-je viser ?**
  - *Pourquoi c'est important :* un consensus 2022 de l'American Diabetes Association (ADA) préconise un inhibiteur du SGLT2 chez toute personne atteinte de diabète et d'insuffisance cardiaque symptomatique, déconseille les inhibiteurs de la DPP-4 (la saxagliptine a augmenté les hospitalisations pour IC) et les glitazones, recommande la prudence avec les sulfamides hypoglycémiants et l'insuline, et précise que les agonistes du GLP-1 peuvent être utilisés mais pas dans le but d'améliorer l'insuffisance cardiaque. Un contrôle glycémique plus strict n'a pas réduit l'insuffisance cardiaque ; dans les données observationnelles, la mortalité dans l'insuffisance cardiaque était la plus basse pour une HbA1c autour de 7 à 8 % (consensus ADA 2022).`,
    },
    {
      headingFr: 'Tension artérielle',
      bodyMarkdownFr: `- **Visez-vous une fourchette précise de tension artérielle dans mon cas, ou l'objectif est-il avant tout d'atteindre les doses cibles des médicaments de l'insuffisance cardiaque ?**
  - *Pourquoi c'est important :* aucune cible tensionnelle stricte n'a été testée par essai randomisé dans l'ICFER établie ; le protocole de SPRINT avait exclu les FEVG < 35 %. Dans de vastes bases d'essais, une pression systolique restant à 120 mmHg ou moins s'associe à un pronostic moins favorable, mais cela reflète probablement un cœur plus affaibli plutôt qu'un effet nocif de la pression elle-même (ESC 2026 ; SPRINT ; Li 2025 ; Seidu 2024).
- **Si ma tension est trop élevée, quel médicament ajouter, et certains de mes autres traitements sont-ils déconseillés dans l'insuffisance cardiaque ?**
  - *Pourquoi c'est important :* l'ESC 2026 cite l'amlodipine ou la félodipine comme ajouts possibles, et contre-indique le vérapamil, le diltiazem et la moxonidine dans l'ICFER.
- **Si ma tension est basse, que faire en cas de vertiges ou d'étourdissements, et quel médicament ajusteriez-vous en premier ?**
  - *Pourquoi c'est important :* une tension basse sans symptôme est souvent acceptée afin de maintenir les doses des traitements protecteurs ; le consensus HFA 2025 (Skouri 2025) suggère de ne réduire les médicaments de l'insuffisance cardiaque qu'en dessous d'une systolique d'environ 80 mmHg ou en cas de symptômes marqués, et d'arrêter d'abord les autres médicaments abaissant la tension (Cautela 2020 ; Skouri 2025).
- **En présence d'un rétrécissement aortique, ma tension artérielle influence-t-elle l'évaluation échographique de la valve, et faudra-t-il la recontrôler une fois la tension équilibrée ?**
  - *Pourquoi c'est important :* la pression artérielle au moment de l'ETT peut fausser la cotation d'un rétrécissement aortique, en le faisant le plus souvent paraître moins sévère (Basile 2021).`,
    },
    {
      headingFr: 'Stade, cause de la dysfonction et examens complémentaires',
      bodyMarkdownFr: `- **Suis-je classé(e) en stade B (aucun symptôme jusqu'ici) ou en stade C (symptômes actuels ou passés), et cela modifie-t-il les médicaments recommandés ?**
  - *Pourquoi c'est important :* les preuves au stade B sont plus restreintes (IEC et bêtabloquant ; éplérénone après infarctus), alors que le stade C repose sur les quatre piliers. Les stades ne reculent jamais (ESC 2026).
- **L'affaiblissement de mon cœur est-il entièrement expliqué par la maladie coronaire et d'anciens infarctus, ou pourrait-il y avoir une seconde cause associée ?**
  - *Pourquoi c'est important :* lorsque la dysfonction semble disproportionnée par rapport aux lésions coronaires, l'équipe recherche une hypertension ancienne, une consommation d'alcool, une myocardite passée ou une cardiomyopathie génétique (Felker 2002 ; Jones 2024).
- **Une IRM cardiaque avec injection de gadolinium a-t-elle été réalisée ? Où se situe la cicatrice (sous-endocardique, médio-pariétale, épicardique), et cet aspect correspond-il à un infarctus ?**
  - *Pourquoi c'est important :* l'ESC 2026 recommande l'IRM cardiaque lorsque la cause est incertaine (Classe I) ; une fibrose médio-pariétale oriente vers une cause non ischémique et comporte un risque propre (McCrohon 2003 ; Gulati 2013).
- **Mes comptes rendus indiquent « FEVG réduite ». Avec la nouvelle définition internationale (2026), qui ne fixe pas de seuil chiffré de FEVG, cela change-t-il la manière dont mon insuffisance cardiaque est qualifiée ou traitée ?**
  - *Pourquoi c'est important :* la Définition universelle 2026 est un document de terminologie ; les seuils de traitement proviennent toujours des recommandations cliniques (l'ESC 2026 utilise une FEVG < 50 %).
- **Lorsque mon essoufflement augmente, comment distinguer une poussée de ma maladie coronaire (ischémie) d'une aggravation de mon insuffisance cardiaque, et quels examens utiliseriez-vous ?**
  - *Pourquoi c'est important :* la Définition universelle 2026 rappelle que l'ischémie myocardique peut mimer une insuffisance cardiaque : 10 % à 15 % des personnes atteintes d'un syndrome coronarien chronique ne présentent qu'un essoufflement.
- **Un test génétique ou un dépistage des proches au premier degré mériterait-il d'être discuté ?**
  - *Pourquoi c'est important :* la mise en évidence d'un variant de cardiomyopathie dilatée modifie l'évaluation du risque et justifie un dépistage familial lorsque la dysfonction est disproportionnée par rapport aux lésions coronaires (Jones 2024 ; ESC 2023).`,
    },
    {
      headingFr: 'Sommeil et apnée du sommeil',
      bodyMarkdownFr: `- **Pourrais-je souffrir d'apnée du sommeil ? Dois-je réaliser un enregistrement nocturne du sommeil (polygraphie ventilatoire ou polysomnographie) ?**
  - *Pourquoi c'est important :* plus d'un tiers des personnes vivant avec une insuffisance cardiaque présentent des troubles respiratoires du sommeil, souvent sans somnolence diurne marquée (ESC 2026).
- **Si j'ai une apnée du sommeil, est-elle surtout obstructive (SAOS) ou centrale (SACS), et quel appareil (le cas échéant) est adapté ?**
  - *Pourquoi c'est important :* la servo-ventilation adaptative (ASV) a augmenté la mortalité dans l'ICFER avec apnée principalement centrale (SERVE-HF) et est déconseillée dans cette indication (Classe III). La PPC (CPAP) améliore la somnolence et la qualité de vie sans preuve de réduction des événements cardiaques, et le plus grand essai sur la PPC (SAVE) a exclu les personnes ayant des symptômes d'insuffisance cardiaque modérés à sévères. Un faible score de somnolence ou un questionnaire normal n'élimine pas une apnée du sommeil, et seul un enregistrement du sommeil permet de distinguer une forme centrale d'une forme obstructive (SERVE-HF ; SAVE CPAP ; déclaration AHA 2021).`,
    },
    {
      headingFr: 'Démarches pratiques en France',
      bodyMarkdownFr: `- **Une demande d'ALD exonérante (ALD 5 insuffisance cardiaque grave ou ALD 13 maladie coronaire) a-t-elle été établie ?** (En France, le protocole de soins est généralement rédigé par votre médecin traitant.)
  - *Pourquoi c'est important :* l'ALD prend en charge à 100 % du tarif de l'Assurance Maladie les soins liés à l'affection inscrits au protocole de soins ; les dépassements d'honoraires et participations forfaitaires restent toutefois à charge ou couverts par la complémentaire santé (service-public.fr ; ameli.fr).
- **Pouvez-vous me prescrire une réadaptation cardiaque en SMR cardiovasculaire, et existe-t-il un programme en hôpital de jour près de chez moi ?**
  - *Pourquoi c'est important :* la réadaptation en SMR cardiovasculaire peut être prescrite par le cardiologue ou le médecin traitant, sans entente préalable, avec une prise en charge intégrale, mais reste sous-utilisée (fiche HAS 2024).
- **En vue de ma reprise professionnelle, un temps partiel thérapeutique et une visite de pré-reprise avec le médecin du travail sont-ils pertinents ?**
  - *Pourquoi c'est important :* ces dispositifs facilitent un retour progressif et adapté au travail (ameli.fr).`,
    },
  ],
  relatedArticleSlugs: [
    'comprendre-le-diagnostic',
    'glossaire-cardiologie',
    'cardiomyopathie-ischemique',
    'fraction-dejection',
    'examens-et-chiffres',
    'medicaments-insuffisance-cardiaque',
    'medicaments-effets-secondaires-suivi',
    'traitements-additionnels-nouveaux',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'finerenone-et-nouveaux-arm',
    'cholesterol-et-prevention-secondaire',
    'carence-martiale-et-fer-iv',
    'dispositifs-cardiaques-dai-crt',
    'gilet-defibrillateur-portable',
    'telesurveillance-insuffisance-cardiaque',
    'revascularisation-pontage-stents',
    'occlusion-coronaire-chronique-cto',
    'stenose-aortique-fevg-reduite',
    'thrombus-vg-et-anticoagulants',
    'insuffisance-cardiaque-fevg-amelioree',
    'dysfonction-vg-asymptomatique-stade-b',
    'confirmer-la-cause-dysfonction-vg',
    'maladies-associees',
    'tension-arterielle-insuffisance-cardiaque',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'nutrition-et-complements-insuffisance-cardiaque',
    'sel-et-liquides-insuffisance-cardiaque',
    'poids-obesite-et-denutrition',
    'vitamine-d-insuffisance-cardiaque',
    'interactions-complements-aliments-medicaments',
    'vivre-avec-insuffisance-cardiaque',
    'vivre-avec-insuffisance-cardiaque-en-france',
    'readaptation-cardiaque-et-activite-physique',
    'depression-et-sante-emotionnelle',
    'soins-de-support-et-anticipation',
    'regles-conduite-automobile',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 (insuffisance cardiaque), Guide patient ESC 2026 et Définition universelle 2026',
      detail: 'Titration des 4 piliers, critères DAI/CRT, Heart Team, réadaptation cardiaque, carence martiale, stade B, tension artérielle, apnée du sommeil, rémission vs récupération, ischémie mimant une IC et décision partagée',
    },
    {
      label: 'Titration, traitements additionnels, LifeVest et télésurveillance (STRONG-HF, SwedeHF, SHIFT, VICTORIA/VICTOR, DIGIT-HF, FINEARTS-HF, FINE-HEART, ARTS-HF, DIAMOND, VEST, HF-OPT, DGK, TIM-HF2, MORE-CARE, MANAGE-HF, HFA 2025)',
      detail: 'Calendrier de titration, seuils de fréquence cardiaque et NT-proBNP, finérénone, chélateurs de potassium, port du gilet > 20 h/j, télésurveillance et capteurs de pression pulmonaire',
    },
    {
      label: 'REVIVED-BCIS2, STICHES, ORBITA-CTO, PROGRESS-CTO, PROFID et PRAETORIAN',
      detail: 'Discordance ETT vs IRM cardiaque, volumes VG, viabilité, revascularisation coronaire, CTO (essoufflement vs angor et assistance circulatoire temporaire) et choix du DAI',
    },
    {
      label: 'ESC/EAS 2019 & 2025, ESC 2024 (SCC et FA), ACC/AHA 2026 (dyslipidémies), CORONA, GISSI-HF, Lp(a)HORIZON et ESC/EACTS 2025',
      detail: 'Cibles LDL < 0,55 g/L, intensité et interactions des statines, Lp(a), antiagrégants, colchicine, rétrécissement aortique, thrombus VG, fibrillation atriale et insuffisance mitrale secondaire',
    },
    {
      label: 'Nutrition, poids, vitamine D, diabète, tension artérielle et sommeil (SODIUM-HF, FRESH-UP, HFA 2025 obésité, Moseley 2025, Kinugasa 2022, Kampka 2025, Chua 2025, ADA 2022, Li 2025, Seidu 2024, Skouri 2025, SAVE, AHA 2021)',
      detail: 'Sel, liquides, fer IV, obésité et analogues GLP-1/GIP, dénutrition (CONUT vs MNA-SF), vitamine D, plantes médicinales et Tai-Chi, diabète/HbA1c, hypotension et apnée du sommeil',
    },
    {
      label: 'Référentiels français (HAS CNEDiMTS, ameli.fr, service-public.fr, Arrêté du 28 mars 2022)',
      detail: 'ALD 5/13, SMR cardiovasculaire, télésurveillance IC, avis HAS LifeVest et CardioMEMS, temps partiel thérapeutique et conduite automobile',
    },
  ],
  disclaimerType: 'medical',
};
