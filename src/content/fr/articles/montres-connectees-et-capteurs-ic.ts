import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'montres-connectees-et-capteurs-ic',
  sourceWikiPath: 'wiki/concepts/smartwatches-and-wearables-in-heart-failure.md',
  titleFr: "Montres connectées et capteurs dans l'insuffisance cardiaque",
  category: 'dispositifs',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium',
  volatility: 'hot',
  tags: [
    'montre-connectée',
    'apple-watch',
    'withings',
    'ecg-monopiste',
    'fibrillation-atriale',
    'spo2',
    'faux-positifs',
    'anxiété',
    'dai',
    'aimants',
  ],
  aliases: [
    'Montre connectée',
    'Apple Watch',
    'Withings ScanWatch',
    'ECG montre',
    'KardiaMobile',
    'Capteurs connectés',
    'SpO2 poignet',
    'Mode aimant DAI',
    'Wearables',
  ],
  linkedModules: ['core', 'device', 'atrialFibrillation'],
  plainSummaryFr:
    "Une montre connectée peut être un bon enregistreur lorsque vous ressentez des palpitations : son ECG de 30 secondes produit un tracé PDF qu'un cardiologue parvient à lire dans environ 99 % des cas pour repérer une fibrillation atriale. En revanche, c'est un mauvais système d'alarme : elle ne détecte ni l'infarctus du myocarde, ni la tachycardie ventriculaire (le trouble du rythme dangereux dans la cardiomyopathie ischémique), ni la rétention d'eau, ni la tension artérielle. Chez les patients suivis en cardiologie, 15 à 26 % des ECG de montre reviennent « non concluants » (davantage en cas d'extrasystoles ou de fréquence basse sous bêtabloquant), et les extrasystoles déclenchent des faux positifs de FA. Si vous portez un DAI ou une CRT, maintenez montre et téléphone à au moins 15 cm du boîtier (30 cm en charge) et ne plaquez jamais le dos de la montre contre votre poitrine.",
  sections: [
    {
      headingFr: 'Ce que disent les recommandations',
      bodyMarkdownFr: `- **ESC 2026 :** les recommandations européennes sur l'insuffisance cardiaque ne prennent **aucune position** sur les montres connectées ou capteurs grand public.
- **Société européenne de rythmologie (EHRA 2022) :** une montre connectée peut faire suspecter une arythmie, mais **ne pose pas de diagnostic** :
  - le diagnostic de fibrillation atriale (FA) exige un ECG relu par un médecin ; les objets dotés d'un ECG sont préférés aux seuls capteurs optiques de pouls ;
  - le marquage CE ne garantit pas la précision d'un algorithme rythmique, et les fabricants peuvent modifier leurs algorithmes au fil des mises à jour ;
  - l'autosurveillance numérique peut accroître l'anxiété des patients et la charge de travail des équipes.
- **Portail patient HFA-ESC :** comme pour la tension à domicile, il est conseillé d'éviter les mesures trop fréquentes si elles génèrent de l'anxiété.`,
    },
    {
      headingFr: 'Ce qu’une montre peut — et ne peut pas — détecter',
      bodyMarkdownFr: `| Question | Fonction de la montre | Fiabilité dans l'ICFER ischémique |
|---|---|---|
| Suis-je en **fibrillation atriale** maintenant ? | Application ECG 30 s (Apple, Withings, Samsung, Fitbit ; carte KardiaMobile) | **Modérée.** Bonne en laboratoire ; chez les patients de cardiologie, **15 à 26 %** de tracés non concluants, spécificité autour de **70–80 %** |
| Mon pouls a-t-il été irrégulier en arrière-plan ? | Notifications de rythme irrégulier (capteur optique PPG) | **Indice de dépistage seulement.** Non prévu si une FA est déjà diagnostiquée ; surveillance non continue |
| S'agit-il d'une **tachycardie ventriculaire (TV)** ? | Non prévu ni homologué | **Non.** Le capteur optique ne distingue pas une arythmie ventriculaire d'un autre rythme |
| Suis-je en train de faire un **infarctus** ? | Non | **Non.** Exclus explicitement des notices ; appeler le **15 / 112 / 114** |
| Est-ce que je fais de la **rétention d'eau** / une décompensation ? | Aucune fonction grand public | **Non.** Se fier à la pesée quotidienne et aux symptômes |
| Quelle est ma **tension artérielle** ? | Estimations sans brassard ; alerte d'hypertension Apple | **Non.** Déconseillé par l'ESH ; l'alerte Apple ne mesure pas la tension |
| Quel est mon **taux d'oxygène (SpO2)** ? | Mesure ponctuelle au poignet | **Très approximatif.** Validé en laboratoire uniquement chez de jeunes adultes sains ; souvent illisible |
| Quelle est ma **fréquence cardiaque** ? | Capteur optique au poignet | **Correct au repos**, nettement moins fiable en mouvement ou en fibrillation atriale |

### L'application ECG (tracé monopiste de 30 secondes)

- **Principe :** vous posez un doigt sur la couronne ou la lunette pendant 30 secondes pour enregistrer un ECG monopiste (proche de la dérivation DI). L'application classe le tracé en rythme sinusal, FA ou résultat « non concluant ».
- **Études du fabricant :** la notice européenne d'Apple ECG 2.0 rapporte **98,5 %** de sensibilité pour la FA et **99,3 %** de spécificité pour le rythme sinusal, uniquement sur les tracés classables entre **50 et 150 bpm**. Lors de l'examen initial par la FDA américaine, environ **1 tracé sur 8** était non concluant.
- **En pratique chez de vrais patients de cardiologie :** la précision baisse et les tracés non concluants sont fréquents :
  - **Étude BASEL Wearable (Mannhart 2023)** — **201** patients consécutifs de cardiologie (**31 %** en FA ; anciennes versions logicielles) :

| Appareil | Sensibilité FA | Spécificité | Non concluant |
|---|---|---|---|
| Apple Watch 6 | 85 % | 75 % | 18 % |
| Samsung Galaxy Watch 3 | 85 % | 75 % | 17 % |
| Withings ScanWatch | 58 % | 75 % | 24 % |
| Fitbit Sense | 66 % | 79 % | 21 % |
| AliveCor KardiaMobile | 79 % | 69 % | 26 % |

  Un cardiologue relisant les mêmes tracés parvenait à identifier le rythme dans **99 %** des cas.
  - **Suite de l'étude BASEL (Isenegger 2024, 247 patients sur 26 mois avec mises à jour logicielles) :** les taux de résultats non concluants ont diminué (de **22 % à 14 %** sur ScanWatch et de **14 % à 6 %** sur Apple Watch), sans atteindre la significativité statistique.
  - **Étude de Bordeaux (Racine / Strik 2022, 734 patients avec anomalies ECG, chiffres rapportés par article de presse spécialisée) :** l'algorithme Apple classait correctement **78 %** des patients en FA et **81 %** des patients sans FA, avec environ **1 résultat sur 5** sans classement automatique. Les faux positifs de FA étaient plus fréquents en cas d'**extrasystoles (ESA / ESV)**, de dysfonction sinusale ou de bloc auriculo-ventriculaire ; la présence d'extrasystoles ventriculaires multipliait environ par **3** la probabilité d'un faux positif de FA.
- **Particularités dans l'ICFER ischémique :**
  - **Fréquence lente sous bêtabloquant :** l'application ECG d'Apple ne classe aucun tracé en dessous de **50 bpm** (plage 50–150 bpm pour ECG 2.0 ; 50–120 bpm sur la première version) ;
  - **Extrasystoles :** dans l'étude FDA initiale, les tracés comportant plus de **4 extrasystoles** n'étaient pas classables ;
  - **DAI ou stimulateur cardiaque :** la notice européenne d'Apple indique de **ne pas utiliser l'application ECG en présence d'un stimulateur cardiaque, d'un DAI ou d'un autre dispositif électronique implanté**.
- **Ce qui est réellement utile, c'est le PDF :** un cardiologue sait interpréter la quasi-totalité des tracés enregistrés au moment d'un symptôme, même lorsque la montre affiche « non concluant ».

### Notifications de rythme irrégulier (capteur optique PPG)

- **Fonctionnement :** la montre vérifie le pouls uniquement lorsque vous êtes immobile et n'alerte qu'après plusieurs détections irrégulières successives. **L'absence d'alerte n'exclut pas une FA.** Ce n'est pas un moniteur continu, et cette fonction n'est **pas destinée aux personnes ayant déjà une FA diagnostiquée**.
- **Performances :** la notice européenne actuelle d'Apple rapporte **88,6 %** de sensibilité et **99,3 %** de spécificité face à un patch ECG porté jusqu'à 13 jours. Dans l'**Apple Heart Study** (**419 297** participants, majoritairement jeunes, étude financée par Apple ; Perez 2019), **0,52 %** ont reçu une notification ; parmi ceux ayant renvoyé un patch ECG, **34 %** présentaient une FA (et **84 %** lorsque la notification survenait pendant le port du patch). Seuls **0,6 %** des participants déclaraient une insuffisance cardiaque.
- **Facteurs perturbant le capteur optique :** mouvements, peau froide ou mauvaise perfusion périphérique, tatouages sombres au poignet et température extérieure.
- **Fréquence cardiaque en FA :** les capteurs au poignet peuvent sous-estimer la fréquence jusqu'à environ **10 bpm** (déficit de pouls, EHRA 2022), ce qui compte lors de l'adaptation d'un bêtabloquant.

### Ce qu'aucune montre ne détecte, et limites de la SpO2 au poignet

- **Infarctus du myocarde :** les notices précisent explicitement que la montre ne détecte pas l'infarctus. En cas de douleur thoracique, appelez le **15 (SAMU)**, le **112** ou le **114**.
- **Tachycardie ventriculaire (TV) :** c'est le trouble du rythme responsable de mort subite dans la cardiomyopathie ischémique. Un capteur optique ne distingue pas une arythmie ventriculaire d'une autre, et l'ECG de montre n'est évalué que pour la FA. Un rythme rapide à complexes larges vu sur n'importe quel tracé impose un avis cardiologique immédiat et une confirmation par ECG 12 dérivations. La protection contre la TV repose sur le traitement de fond et, si indiqué, un DAI ou un gilet défibrillateur (voir *Dispositifs cardiaques implantables : DAI et CRT*).
- **Décompensation / rétention d'eau :** aucune fonction grand public validée ne repère l'accumulation de liquide ; la pesée matinale et les signes d'alerte restent la référence.
- **Tension artérielle :** l'ESH déconseille les dispositifs sans brassard, et les notifications d'hypertension Apple (autorisées aux États-Unis en septembre 2025, sans mesure tensionnelle directe) ont manqué **59 %** des hypertendus dans l'étude du fabricant et ne visent pas les personnes déjà diagnostiquées (voir *Automesure tensionnelle à domicile*).
- **Estimer la FEVG à partir d'un ECG de montre (recherche uniquement) :** un programme d'intelligence artificielle peut estimer si la FEVG est basse à partir d'un ECG monopiste de montre. Dans l'étude de la **Mayo Clinic sur Apple Watch (2022)**, 2 454 personnes ont transmis des ECG, mais seules 421 avaient une échocardiographie dans les 30 jours et seulement **16** présentaient une FEVG ≤ 40 % (**AUC 0,885**), un effectif bien trop faible pour juger de la précision réelle. Cette fonction n'est pas autorisée par la FDA sur montre (l'ECG Apple Watch n'est homologué que pour la FA) et une montre ne permet pas de suivre l'évolution de votre FEVG au fil du temps : l'**ETT** ou l'**IRM cardiaque** restent indispensables (voir *ECG-IA et détection numérique*).
- **Saturation en oxygène (SpO2) :** dans l'étude de laboratoire publiée par des salariés de Withings sur la **ScanWatch** (Kirszenblat 2021), l'erreur moyenne au poignet était d'environ **3 %** par rapport au sang artériel (dans les limites FDA de 3,5 % et ISO de 4 %), mais l'étude ne portait que sur **14 jeunes adultes sains de 23 à 39 ans** et **15 à 24 %** des mesures étaient écartées comme illisibles. Le projet de recommandation **FDA 2025** rappelle en outre des écarts de précision selon la pigmentation cutanée et précise que les fonctions « bien-être » grand public ne sont pas évaluées avant mise sur le marché. Dans l'insuffisance cardiaque, les mains froides, la faible perfusion et l'arythmie affaiblissent encore le signal : interprétez toujours un chiffre d'oxygène avec votre niveau d'essoufflement.`,
    },
    {
      headingFr: 'Sécurité avec un DAI, une CRT-D ou un stimulateur cardiaque',
      bodyMarkdownFr: `- **Mode aimant :** les aimants puissants présents dans certains smartphones et montres connectées peuvent basculer une prothèse implantée en **« mode aimant »**. Tant que l'aimant reste à proximité immédiate, un **DAI peut temporairement ne plus détecter ni traiter une arythmie rapide**. La FDA qualifie le risque de faible et n'avait connaissance d'aucun accident rapporté.
- **Distances de sécurité :** Apple et la FDA conseillent de garder téléphones et montres à **au moins 15 cm** du boîtier implanté, et Apple recommande **30 cm pendant la charge sans fil**. Ne portez pas votre téléphone dans une poche de chemise ou de veste située au-dessus du boîtier.
- **Essai sur banc (Wegner 2026) :** **8** montres connectées ont été testées sur **15** prothèses placées dans du tissu porcin :

| Position de la montre | Prothèse sous-cutanée |
|---|---|
| Portée normalement (cadran tourné vers l'implant) | **< 1 %** des tests ont déclenché le mode aimant |
| Dos de la montre posé sur l'implant (comme pour un ECG thoracique) | **30 %** |
| Montre sur son chargeur posée sur l'implant | **23 %** |

  Les prothèses placées sous le muscle étaient rarement affectées (**1 %**). La **Withings ScanWatch**, qui se recharge par broches et non par aimant, n'a jamais déclenché le mode aimant. Les stimulateurs cardiaques et les DAI Medtronic se sont montrés les plus sensibles.
- **En pratique :**
  - porter la montre au poignet comporte un risque très faible ;
  - ne posez jamais le dos de la montre contre votre poitrine ;
  - ne dormez pas avec un téléphone ou une montre en charge sur le thorax ;
  - demandez au centre de rythmologie les consignes propres à votre modèle ; en cas de doute, la télétransmission de la prothèse permet de vérifier son bon fonctionnement.
- **Balances connectées à impédancemétrie (masse grasse) :** les pages d'aide fabricant concernant leur utilisation avec un implant n'ont pas pu être vérifiées ; demandez toujours l'accord de votre centre de rythmologie avant d'utiliser la fonction impédancemétrie.`,
    },
    {
      headingFr: 'Fausses alertes, anxiété et usage apaisé au quotidien',
      bodyMarkdownFr: `- **Ce que montrent les données (Rosman 2024) :** en comparant **83** porteurs d'objets connectés atteints de FA à **83** patients appariés sans objet connecté (environ un tiers avaient une insuffisance cardiaque) :
  - davantage de **préoccupation centrée sur les symptômes** (**p = 0,03**) et d'inquiétude concernant le traitement de la FA ;
  - davantage de **recours aux soins liés à la FA sur 9 mois** (**4,05 contre 2,70** consultations et examens, avec deux fois plus d'ECG), **sans différence** sur les passages aux urgences ni les hospitalisations ;
  - plus de messages adressés via le portail patient ;
  - environ **1 utilisateur sur 5** éprouvait une peur intense lors des alertes de rythme irrégulier et contactait systématiquement son médecin, et environ **15 %** se sentaient systématiquement anxieux devant une alerte de fréquence haute ou basse ;
  - parallèlement, **64 %** déclaraient se sentir plus en sécurité grâce à la montre.
  - *Limite :* cette étude étant observationnelle, les personnes déjà anxieuses sont aussi plus susceptibles d'acheter une montre connectée.

### Utiliser une montre sans alimenter l'anxiété (synthèse pratique non testée par essai)

Ces étapes regroupent les conseils de l'EHRA, de la HFA, de Rosman (2024) et de l'étude BASEL (elles n'ont pas été testées ensemble dans un essai clinique) :

1. **Définissez l'objectif à l'avance avec votre équipe :** par exemple « enregistrer un ECG uniquement en cas de palpitations et apporter les PDF en consultation ».
2. **Enregistrez sur symptôme, pas à heure fixe :** les vérifications répétées sans symptôme entretiennent la focalisation anxieuse.
3. **Considérez « non concluant » ou « fréquence basse » comme attendus**, et non comme un signal de danger, en particulier sous bêtabloquant.
4. **Discutez de la désactivation** des alertes de fréquence haute/basse et des notifications de rythme irrégulier si elles vous angoissent. Les notifications de rythme irrégulier ne sont d'ailleurs pas prévues si une FA est déjà diagnostiquée ; en l'absence de FA connue, les couper fait toutefois renoncer à un dépistage d'arrière-plan modeste — parlez-en à votre cardiologue.
5. **Agissez selon vos symptômes et votre plan d'action, jamais selon la montre seule :**
   - douleur thoracique, malaise, perte de connaissance, palpitations prolongées avec vertiges ou choc de DAI : déclenchez la conduite d'urgence (**15 / 112 / 114**) ;
   - essoufflement, œdèmes ou prise de poids rapide : suivez votre plan d'action insuffisance cardiaque.
6. **Si vous portez un DAI ou une CRT avec télésurveillance :** demandez au centre de rythmologie ce que votre prothèse enregistre et transmet déjà en routine (voir *Télésurveillance à domicile et suivi à distance des prothèses*).

### Applicabilité des preuves à l'ICFER ischémique

| Étude ou source | Population | Applicabilité | Limite principale |
|---|---|---|---|
| Notices FDA / UE Apple, Apple Heart Study | Adultes surtout sains (**0,6 %** d'IC déclarée) | Non évaluable (FEVG et cause absentes) | Financement fabricant |
| Études BASEL (Mannhart, Isenegger) | Patients de cardiologie / rythmologie | Non évaluable (part d'IC, FEVG et cause non rapportées) | Résumés uniquement |
| Étude de Bordeaux (Racine / Strik) | Patients avec anomalies ECG | Au mieux indirecte (non vérifiée) | Chiffres issus d'un article de presse |
| Rosman 2024 | Patients en FA (**32 %** d'IC) | Non évaluable (FEVG et cause absentes) | Observationnel, un seul centre américain |
| ScanWatch SpO2 (Kirszenblat 2021) | **14** jeunes adultes sains | Extrapolée (aucun patient cardiaque) | Étude fabricant |
| Wegner 2026, FDA, Apple (aimants) | Tissu porcin + prothèses réelles ; avis réglementaires | Indirecte (mécanisme, pas de patients) | Pas de taux d'événements cliniques |`,
    },
  ],
  relatedArticleSlugs: [
    'automesure-tensionnelle-domicile',
    'guide-pratique-automesure-et-montres-connectees',
    'telesurveillance-insuffisance-cardiaque',
    'dispositifs-cardiaques-dai-crt',
    'gilet-defibrillateur-portable',
    'depression-et-sante-emotionnelle',
    'fibrillation-atriale-insuffisance-cardiaque',
    'tension-arterielle-insuffisance-cardiaque',
    'efx-strain-troponine-et-imagerie-cardiaque',
    'questions-equipe-cardiologie',
    'ecg-ia-et-detection-numerique',
  ],
  sources: [
    {
      label: 'FDA DEN180044, notices européennes Apple ECG / IRN et étude Apple Hypertension Notifications (2025)',
      detail: 'Plage 50–150 bpm, limites sur les extrasystoles, exclusion des prothèses implantées (UE), absence de détection d’infarctus/TV et validation fabricante.',
    },
    {
      label: 'Apple Heart Study (Perez et al., NEJM 2019) & Guide pratique EHRA (Svennberg et al., 2022)',
      detail: 'Dépistage de FA par capteur optique, rôle diagnostique réservé à l’ECG relu par un médecin et déficit de pouls en FA.',
    },
    {
      label: 'Études BASEL Wearable (Mannhart 2023, Isenegger 2024) & Étude de Bordeaux (Racine / Strik 2022)',
      detail: 'Taux de tracés non concluants (15–26 %), lecture cardiologue (99 %) et faux positifs de FA liés aux extrasystoles ventriculaires (OR ~3).',
    },
    {
      label: 'Rosman et al. (2024), Wegner et al. (2026), FDA (aimants et SpO2 2025) & Kirszenblat et al. (2021)',
      detail: 'Anxiété et recours aux soins chez les porteurs d’objets connectés, déclenchement du mode aimant sur banc (30 % dos sur implant, 23 % sur chargeur), distances 15/30 cm et limites de la SpO2.',
    },
    {
      label: 'ESC 2026 (section télésurveillance), prise de position ESH (2022) & HeartFailureMatters',
      detail: 'Absence de recommandation ESC sur les montres grand public, rejet des dispositifs tensionnels sans brassard et prévention de la surmédicalisation anxieuse.',
    },
    {
      label: 'Étude Mayo Clinic AI-ECG sur Apple Watch (2022)',
      detail: 'Détection expérimentale d’une FEVG ≤ 40 % sur ECG monopiste de montre (n = 16 cas confirmés par ETT ; AUC 0,885 ; usage recherche uniquement).',
    },
  ],
  disclaimerType: 'medical',
};
