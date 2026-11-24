import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'questions-equipe-cardiologie',
  sourceWikiPath: 'wiki/references/questions-for-the-cardiology-team.md',
  titleFr: "Questions à poser à l'équipe de cardiologie",
  category: 'references',
  asOf: '2026-11-24',
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
    "Une liste de questions pratiques à emporter en consultation, regroupées par thème : comprendre vos chiffres, vos médicaments, les dispositifs implantables, les gestes coronaires, la récupération, la vie quotidienne et les démarches en France. Ce sont des questions pour éclairer votre situation et participer aux décisions, pas des recommandations à appliquer seul.",
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
- **Mes doses sont-elles aux doses cibles, ou prévoit-on de les augmenter progressivement (titration) ? Selon quel calendrier ?**
  - *Pourquoi c'est important :* les recommandations ESC 2026 préconisent d'augmenter les doses par paliers toutes les 1 à 2 semaines lorsque c'est toléré.
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
  - *Pourquoi c'est important :* chacun a des critères précis : l'ivabradine (Procoralan) requiert un rythme sinusal et une fréquence cardiaque de repos > 70 bpm (≥ 75 bpm dans l'AMM européenne) malgré la dose maximale tolérée de bêtabloquant ; le vériciguat (Verquvo) est indiqué après une aggravation récente (ESC 2026 ; rapport EMA ; RCP Verquvo).
- **Si je prends de la digoxine : mon taux sanguin et ma fonction rénale seront-ils contrôlés, et quels signes d'alerte dois-je surveiller ?** (ex. nausées, confusion, troubles visuels)
- **La finérénone est-elle pertinente dans mon cas, ou la spironolactone (Aldactone) / l'éplérénone (Inspra) restent-elles l'ARM adapté à ma FEVG ?**
  - *Pourquoi c'est important :* la finérénone n'est démontrée qu'à partir d'une FEVG ≥ 40 % ou dans le diabète de type 2 avec maladie rénale chronique (FINEARTS-HF ; ESC 2026).
- **Si mon potassium augmente sous ARM, un chélateur de potassium (patiromer ou cyclosilicate de zirconium sodique) permettrait-il de poursuivre l'ARM ?** (DIAMOND ; ESC 2026)
- **Pendant la titration des médicaments et avant la décision de DAI, le gilet défibrillateur portable (LifeVest) mérite-t-il d'être envisagé ?**
  - Si oui : combien de temps devrai-je le porter, que faire en cas d'alarme et que doivent savoir mes proches ?
  - Puis-je conduire en le portant, et que se passe-t-il pour la conduite en cas de choc ? *Pourquoi c'est important :* en France, l'arrêté du 28 mars 2022 interdit la conduite automobile tant que le gilet défibrillateur est indiqué (contrairement au Royaume-Uni où le DVLA n'a pas de règle spécifique au gilet et juge selon la pathologie sous-jacente).
  - *Pourquoi c'est important :* le risque rythmique précoce est faible en valeur absolue mais maximal au cours des premiers mois ; le gilet n'est efficace que porté presque en permanence, et les preuves restent nuancées (VEST ; HF-OPT ; avis CNEDiMTS HAS).
- **Ma FEVG sera-t-elle recontrôlée à 3 mois ou plus tard ?**
  - *Pourquoi c'est important :* un registre (HF-OPT) suggère que la FEVG peut continuer à s'améliorer jusqu'à 6 mois, alors que les recommandations réévaluent généralement vers 3 mois (ESC 2026).
- **Suis-je éligible à la télésurveillance de l'insuffisance cardiaque à domicile, et qu'apporterait-elle en plus de ma pesée quotidienne ?**
  - *Pourquoi c'est important :* en France, elle est prise en charge par l'Assurance Maladie après une hospitalisation récente pour insuffisance cardiaque, ou en cas de classe NYHA ≥ II associée à un NT-proBNP élevé (référentiel HAS).
- **Si un DAI ou une CRT est implanté(e), la télésurveillance de la prothèse sera-t-elle activée ? Qui lit les alertes et dans quel délai ?** (consensus HRS 2023)`,
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
  - *Pourquoi c'est important :* le consensus EAPCI/EACVI 2024 recommande d'évaluer l'ischémie et la viabilité dans le territoire occlus lorsque la FEVG est réduite ; la contractilité ne s'améliore que dans les segments viables (Leite 2025).
- **Une Heart Team a-t-elle étudié ce dossier, et quelle recommandation s'applique à ma FEVG ?**
  - *Pourquoi c'est important :* les recommandations ESC 2024 sur les syndromes coronariens chroniques ne comportent pas de ligne spécifique pour la CTO, et leur recommandation de survie pour l'IVA proximale s'applique uniquement au-dessus de 35 % de FEVG.
- **Sans angor, qu'attendrait-on de la réouverture de cette artère ?**
  - *Pourquoi c'est important :* le bénéfice prouvé de la désobstruction d'une CTO concerne le soulagement des symptômes ; les essais randomisés n'ont pas montré de réduction des décès ni des infarctus (van Veelen 2021 ; ORBITA-CTO).
- **Quels sont les taux de succès et de complications de ce centre pour une angioplastie de CTO, et quel est mon risque personnel avec une FEVG basse ?**
  - *Pourquoi c'est important :* dans un grand registre (PROGRESS-CTO), la mortalité hospitalière était de 1,1 % pour une FEVG ≤ 35 % contre 0,3 % pour une FEVG ≥ 50 %.
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
  - *Pourquoi c'est important :* les essais dans l'insuffisance cardiaque (CORONA, GISSI-HF) évaluaient l'intérêt de *débuter* une statine pour l'insuffisance cardiaque seule, et non d'arrêter une statine déjà justifiée par une maladie coronaire.
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
- **Si ma FEVG s'améliore (HFimpEF), qu'est-ce qui change et qu'est-ce qui reste identique ?**
  - *Pourquoi c'est important :* les recommandations ESC 2026 préconisent de poursuivre les médicaments de fond même après amélioration de la FEVG (Classe I).
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
      headingFr: 'Alimentation, sel, liquides et compléments',
      bodyMarkdownFr: `- **Ma ferritine et mon coefficient de saturation de la transferrine (CST) ont-ils été vérifiés ? En cas de carence, le fer intraveineux est-il une option ?**
  - *Pourquoi c'est important :* le fer intraveineux a réduit d'environ un cinquième les hospitalisations pour insuffisance cardiaque dans les essais regroupés, alors que le fer par voie orale n'a pas été efficace (méta-analyse fer IV 2025 ; IRONOUT-HF).
- **Quel apport en sel viser ? Une restriction hydrique stricte est-elle encore nécessaire quand je suis stable ?**
  - *Pourquoi c'est important :* la restriction sodée très stricte et la limitation systématique des liquides n'ont pas amélioré le pronostic dans les essais récents (SODIUM-HF ; FRESH-UP).
- **Puis-je utiliser un sel de régime « pauvre en sodium », ou contient-il du potassium incompatible avec mes médicaments ?**
  - *Pourquoi c'est important :* les sels de substitution riches en potassium figurent parmi les interactions signalées avec le sacubitril/valsartan (Entresto) et les autres bloqueurs du système rénine-angiotensine / ARM.
- **Je prends (ou j'envisage de prendre) [oméga-3 / coenzyme Q10 / vitamines / plantes]. Est-ce sûr avec mes médicaments ? Est-ce utile ?**
  - *Pourquoi c'est important :* l'AHA demande d'informer toute l'équipe soignante, y compris le pharmacien, de chaque complément alimentaire ou produit à base de plantes.
- **Quels antalgiques (médicaments contre la douleur) sont sûrs dans mon cas ?**
  - *Pourquoi c'est important :* les anti-inflammatoires non stéroïdiens (AINS) disponibles sans ordonnance peuvent nuire aux reins et provoquer une décompensation en association avec les traitements de l'insuffisance cardiaque.
- **Puis-je perdre du poids sans risque, et comment ? Y a-t-il des régimes à éviter avec mes médicaments ?**
  - *Pourquoi c'est important :* les régimes cétogènes et très hypocaloriques sont mentionnés comme facteurs déclenchants d'acidocétose sous inhibiteurs du SGLT2 (dapagliflozine, empagliflozine).
- **Serait-il utile de consulter un(e) diététicien(ne) et de bénéficier d'une réadaptation cardiaque ?**`,
    },
    {
      headingFr: "Résultats d'examens (biomarqueurs et imagerie)",
      bodyMarkdownFr: `- **Quel est mon taux de NT-proBNP (ou de BNP), et comment a-t-il évolué ? Lequel des deux mon laboratoire dose-t-il ?**
  - *Pourquoi c'est important :* les deux dosages ont des valeurs de référence différentes, de nombreux facteurs autres que l'insuffisance cardiaque les font varier, et le sacubitril/valsartan (Entresto) peut faire monter le BNP mais pas le NT-proBNP (ESC 2026).
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
- **Si j'ai une fibrillation atriale (FA), quel est mon score de risque d'AVC (CHA2DS2-VA), et dois-je prendre un anticoagulant ?**
  - *Pourquoi c'est important :* l'insuffisance cardiaque compte déjà pour 1 point dans le score européen CHA2DS2-VA (ESC 2024).
- **Ai-je une fuite de la valve mitrale (insuffisance mitrale secondaire) ? Quelle est sa sévérité, et sera-t-elle réévaluée après optimisation des médicaments ?**
  - *Pourquoi c'est important :* environ 40 % des insuffisances mitrales secondaires s'améliorent après 1 à 3 mois de traitement médical optimisé (ESC/EACTS 2025).`,
    },
    {
      headingFr: 'Tension artérielle',
      bodyMarkdownFr: `- **Visez-vous une fourchette précise de tension artérielle dans mon cas, ou l'objectif est-il avant tout d'atteindre les doses cibles des médicaments de l'insuffisance cardiaque ?**
  - *Pourquoi c'est important :* aucune cible tensionnelle stricte n'a été testée par essai randomisé dans l'ICFER établie ; l'essai SPRINT avait exclu les FEVG < 35 % (ESC 2026 ; SPRINT).
- **Si ma tension est trop élevée, quel médicament ajouter, et certains de mes autres traitements sont-ils déconseillés dans l'insuffisance cardiaque ?**
  - *Pourquoi c'est important :* l'ESC 2026 cite l'amlodipine ou la félodipine comme ajouts possibles, et contre-indique le vérapamil, le diltiazem et la moxonidine dans l'ICFER.
- **Si ma tension est basse, que faire en cas de vertiges ou d'étourdissements, et quel médicament ajusteriez-vous en premier ?**
  - *Pourquoi c'est important :* une tension basse sans symptôme est souvent acceptée afin de maintenir les doses des traitements protecteurs ; des consensus précisent l'ordre préférentiel d'ajustement (Cautela 2020 ; Skouri 2025).
- **En présence d'un rétrécissement aortique, ma tension artérielle influence-t-elle l'évaluation échographique de la valve, et faudra-t-il la recontrôler une fois la tension équilibrée ?**
  - *Pourquoi c'est important :* une hypertension artérielle peut faire paraître un rétrécissement aortique moins sévère à l'ETT (Basile 2021).`,
    },
    {
      headingFr: 'Stade, cause de la dysfonction et examens complémentaires',
      bodyMarkdownFr: `- **Suis-je classé(e) en stade B (aucun symptôme jusqu'ici) ou en stade C (symptômes actuels ou passés), et cela modifie-t-il les médicaments recommandés ?**
  - *Pourquoi c'est important :* les preuves au stade B sont plus restreintes (IEC et bêtabloquant ; éplérénone après infarctus), alors que le stade C repose sur les quatre piliers. Les stades ne reculent jamais (ESC 2026).
- **L'affaiblissement de mon cœur est-il entièrement expliqué par la maladie coronaire et d'anciens infarctus, ou pourrait-il y avoir une seconde cause associée ?**
  - *Pourquoi c'est important :* lorsque la dysfonction semble disproportionnée par rapport aux lésions coronaires, l'équipe recherche une hypertension ancienne, une consommation d'alcool, une myocardite passée ou une cardiomyopathie génétique (Felker 2002 ; Jones 2024).
- **Une IRM cardiaque avec injection de gadolinium a-t-elle été réalisée ? Où se situe la cicatrice (sous-endocardique, médio-pariétale, épicardique), et cet aspect correspond-il à un infarctus ?**
  - *Pourquoi c'est important :* l'ESC 2026 recommande l'IRM cardiaque lorsque la cause est incertaine (Classe I) ; une fibrose médio-pariétale oriente vers une cause non ischémique et comporte un risque propre (McCrohon 2003 ; Gulati 2013).
- **Un test génétique ou un dépistage des proches au premier degré mériterait-il d'être discuté ?**
  - *Pourquoi c'est important :* la mise en évidence d'un variant de cardiomyopathie dilatée modifie l'évaluation du risque et justifie un dépistage familial (Jones 2024 ; ESC 2023).`,
    },
    {
      headingFr: 'Sommeil et apnée du sommeil',
      bodyMarkdownFr: `- **Pourrais-je souffrir d'apnée du sommeil ? Dois-je réaliser un enregistrement nocturne du sommeil (polygraphie ventilatoire ou polysomnographie) ?**
  - *Pourquoi c'est important :* plus d'un tiers des personnes vivant avec une insuffisance cardiaque présentent des troubles respiratoires du sommeil, souvent sans somnolence diurne marquée (ESC 2026).
- **Si j'ai une apnée du sommeil, est-elle surtout obstructive (SAOS) ou centrale (SACS), et quel appareil (le cas échéant) est adapté ?**
  - *Pourquoi c'est important :* la servo-ventilation adaptative (ASV) a augmenté la mortalité dans l'ICFER avec apnée principalement centrale (SERVE-HF) et est déconseillée dans cette indication (Classe III). La PPC (CPAP) améliore la somnolence et la qualité de vie dans le SAOS, sans preuve de réduction des événements cardiaques (SAVE CPAP).`,
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
    'fraction-dejection',
    'examens-et-chiffres',
    'medicaments-insuffisance-cardiaque',
    'medicaments-effets-secondaires-suivi',
    'traitements-additionnels-nouveaux',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
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
    'vivre-avec-insuffisance-cardiaque',
    'vivre-avec-insuffisance-cardiaque-en-france',
    'readaptation-cardiaque-et-activite-physique',
    'soins-de-support-et-anticipation',
    'regles-conduite-automobile',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 (insuffisance cardiaque) et Guide patient ESC 2026',
      detail: 'Titration des 4 piliers, critères DAI/CRT, Heart Team, réadaptation cardiaque, carence martiale, stade B, tension artérielle, apnée du sommeil et décision partagée',
    },
    {
      label: 'REVIVED-BCIS2, STICHES et PROFID',
      detail: 'Discordance ETT vs IRM cardiaque, volumes VG, viabilité, revascularisation coronaire et limites de la FEVG pour prédire la mort subite',
    },
    {
      label: 'ESC/EAS 2019 & 2025, ESC 2024 (SCC et FA), ESC/EACTS 2025 (valvulopathies)',
      detail: 'Cibles LDL < 0,55 g/L, Lp(a), antiagrégants, colchicine, rétrécissement aortique, thrombus VG, fibrillation atriale et insuffisance mitrale secondaire',
    },
    {
      label: 'Essais nutrition, fer et add-ons (SODIUM-HF, FRESH-UP, FAIR-HF2, IRONOUT-HF, FINEARTS-HF, DIAMOND, VEST, HF-OPT, PRAETORIAN)',
      detail: 'Sel, liquides, fer IV, finérénone, chélateurs de potassium, LifeVest et choix du type de DAI',
    },
    {
      label: 'Référentiels français (HAS, ameli.fr, service-public.fr, Arrêté du 28 mars 2022)',
      detail: 'ALD 5/13, SMR cardiovasculaire, télésurveillance IC, temps partiel thérapeutique, LifeVest et conduite automobile',
    },
  ],
  disclaimerType: 'medical',
};
