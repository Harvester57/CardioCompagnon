import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'guide-pratique-automesure-et-montres-connectees',
  sourceWikiPath: 'output/playbook-home-bp-and-smartwatches-2026-11-25.md',
  titleFr: 'Guide pratique : automesure tensionnelle et montres connectées',
  category: 'quotidien',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'guide-pratique',
    'automesure',
    'règle-des-3',
    'stride-bp',
    'montre-connectée',
    'fibrillation-atriale',
    'hypotension',
    'dai',
    'anxiété',
  ],
  aliases: [
    'Playbook automesure',
    'Guide tensiomètre et montre',
    'Comment prendre sa tension',
    'Utiliser une Apple Watch avec un DAI',
    'Automesure et objets connectés',
  ],
  linkedModules: ['core', 'device', 'atrialFibrillation'],
  plainSummaryFr:
    "Ce guide rassemble les gestes concrets pour obtenir des mesures de tension artérielle fiables à domicile (y compris en cas de fibrillation atriale ou de tension basse) et pour utiliser une montre connectée sans alimenter l'anxiété. En bref : utilisez un tensiomètre automatique à brassard au bras validé sur STRIDE BP avec une routine fixe et une moyenne sur plusieurs jours ; évaluez une tension basse d'abord par vos symptômes ; servez-vous d'une montre connectée comme d'un enregistreur ECG au moment d'un symptôme et non comme d'une alarme ; enfin, définissez avec votre équipe de cardiologie avant de commencer quels chiffres ou tracés justifient un contact.",
  sections: [
    {
      headingFr: '1. Choisir un tensiomètre à brassard validé',
      bodyMarkdownFr: `1. **Brassard au bras, automatique, avec mémoire.** Évitez les appareils au poignet, au doigt, les bagues et les montres connectées pour mesurer votre tension.
2. **Vérifiez la référence exacte sur stridebp.org** avant d'acheter, suffixes compris, en privilégiant les modèles classés « preferred ». Dans un audit en ligne, seuls **5,5 %** des appareils en vente étaient validés, et **aucun** bracelet connecté ne l'était.
3. **Mesurez votre tour de bras à mi-hauteur** et vérifiez qu'il correspond à la plage de brassards validés de l'appareil. Un brassard trop étroit surestime la tension ; un brassard trop large la sous-estime.
4. **La France ne dispose pas de liste nationale propre :** la Société Française d'Hypertension Artérielle (SFHTA) renvoie vers **STRIDE BP**.
5. **Apportez votre appareil en consultation** au moins une fois pour le comparer à la mesure du cabinet.
6. **Gardez en tête la limite de la validation :** les tests sont menés chez des adultes de la population générale, pas spécifiquement en fibrillation atriale. Le symbole « détection de FA » correspond à une fonction distincte ayant sa propre précision.`,
    },
    {
      headingFr: '2. Prendre des mesures fiables à domicile',
      bodyMarkdownFr: `| Moment ou étape | Conduite pratique |
|---|---|
| **Avant la prise** | Ni café, ni tabac, ni repas, ni effort physique pendant **30 minutes** ; vessie vide |
| **Position** | Assis **5 minutes**, dos soutenu, pieds à plat au sol, bras nu posé à hauteur du cœur, sans parler |
| **Chaque session** | **2 mesures** espacées d'**1 minute** (protocole ESH) ou **3 mesures** espacées de **2 minutes** (règle des 3 SFHTA / CNAM) |
| **Horaires** | Le matin **avant la prise des comprimés**, et le soir |
| **Durée de la série** | **3 à 7 jours** avant la consultation, puis calcul de la moyenne de toutes les mesures |
| **Entre deux visites** | Uniquement à la fréquence demandée par votre équipe ; mesurer chaque jour est déconseillé |
| **En cas de vertiges** | Demandez à votre équipe la méthode souhaitée. Le repère HFA en cabinet consiste à mesurer couché ou assis puis **après 3 minutes debout** (aucune version validée à domicile n'a été retrouvée) |`,
    },
    {
      headingFr: '3. Fibrillation atriale, extrasystoles et tension basse',
      bodyMarkdownFr: `### En cas de fibrillation atriale ou d'extrasystoles nombreuses

- Réalisez **3 mesures** par session et retenez la **moyenne** (ESH ; la SFHTA conseille aussi de répéter les mesures). Ne prenez jamais de décision sur une mesure unique.
- **La systolique reste globalement fiable, la diastolique l'est moins.**
- **Mesure manuelle ou automatique :** l'ESH accepte les brassards automatiques validés lorsque la fréquence de la FA est contrôlée, tandis que la société britannique (BIHS) préfère une mesure manuelle lorsque c'est possible. Demandez à votre équipe la méthode qu'elle privilégie et si une MAPA de 24 heures serait utile.
- **Symbole « rythme irrégulier » :** c'est un indice, non un diagnostic ; à domicile, environ **la moitié** de ces alertes étaient des faux positifs.
- **Pouls en FA :** les capteurs au poignet peuvent sous-estimer la fréquence cardiaque ; vérifiez avec votre équipe comment elle souhaite suivre votre pouls.

### Quand la tension est habituellement basse

- **Surestimation possible par les brassards automatiques :** ce biais a été observé chez **30 patients** en état de choc sur moniteur hospitalier ; son ampleur chez un patient stable à domicile n'est pas connue. Ne supposez pas qu'un chiffre affiché autour de 90 mmHg est « en réalité plus haut ».
- **Vos symptômes comptent plus que le chiffre :** vertiges au lever, sensation d'évanouissement imminent, fatigue inhabituelle.
- **Votre plage est fixée par l'équipe d'insuffisance cardiaque :** le consensus européen HFA 2025 ne discute une baisse des médicaments de l'IC qu'en dessous de **80 mmHg** de systolique ou devant des symptômes majeurs. Ne modifiez jamais vos doses seul.
- **Les seuils d'hypertension ne s'appliquent pas :** les repères **135/85 mmHg** ou **180/120 mmHg** sont conçus pour l'hypertension artérielle.`,
    },
    {
      headingFr: '4. Montres connectées : ce à quoi se fier et usage sans anxiété',
      bodyMarkdownFr: `| Utile pour | Ne pas s'y fier pour |
|---|---|
| Enregistrer un ECG de 30 secondes **au moment d'un symptôme** (PDF pour votre cardiologue) | Une douleur thoracique ou un infarctus du myocarde |
| Suspecter une fibrillation atriale (à confirmer par un ECG relu par un médecin) | Une tachycardie ventriculaire (TV), un malaise ou un choc de DAI |
| Suivre des tendances générales d'activité et de fréquence au repos | Une rétention d'eau ou une aggravation de l'IC (se fier au poids quotidien et aux symptômes) |
| — | La tension artérielle (mesures sans brassard et notifications d'hypertension Apple) |
| — | Un taux d'oxygène (SpO2) servant de critère de décision |

- **Attendez-vous à voir « non concluant » régulièrement :** chez les patients de cardiologie, **15 à 26 %** des ECG de montre n'ont pas de verdict automatique, surtout en cas d'extrasystoles, de fréquence lente sous bêtabloquant (Apple ne classe pas sous **50 bpm**) ou de troubles de conduction. Un cardiologue parvient tout de même à lire environ **99 %** de ces tracés.
- **Faux positifs de FA avec extrasystoles ventriculaires :** probabilité environ **3 fois** supérieure dans une étude française (données issues d'un article de presse spécialisée).

### Cinq repères pour éviter l'anxiété des fausses alertes

1. **Définissez l'usage avec votre équipe avant de commencer :** par exemple « ECG uniquement en cas de palpitations ; PDF montrés à la prochaine visite ».
2. **Enregistrez sur symptôme, pas selon un emploi du temps fixe :** les contrôles répétés s'associent à davantage de préoccupation anxieuse.
3. **Considérez « non concluant » ou « fréquence basse » comme normaux** dans votre contexte.
4. **Discutez de la désactivation** des alertes de fréquence cardiaque et de rythme irrégulier si elles vous stressent. Ces alertes ne sont pas prévues en cas de FA déjà connue ; sans FA diagnostiquée, les couper retire un dépistage d'arrière-plan modeste.
5. **Réagissez à vos symptômes et à votre plan d'action, jamais à la montre seule.**

*(Synthèse pratique issue des sources, non évaluée comme programme dans un essai clinique. Dans une étude observationnelle, environ 1 utilisateur sur 5 trouvait les alertes effrayantes, tandis que 64 % se sentaient plus en sécurité avec la montre.)*`,
    },
    {
      headingFr: '5. Précautions avec un DAI ou une CRT-D, niveau de preuve et questions à poser',
      bodyMarkdownFr: `### Si vous portez (ou devez recevoir) un DAI ou une CRT-D

- Maintenez téléphones et montres connectées à au moins **15 cm** du boîtier implanté, et à **30 cm pendant la charge**.
- Ne plaquez jamais le **dos de la montre sur votre poitrine** : dans un essai sur banc, cela a déclenché le « mode aimant » dans **30 %** des tests (**23 %** lorsque la montre était posée sur son chargeur au-dessus du boîtier).
- Porter la montre normalement au poignet présente un risque très faible.
- La notice européenne d'Apple indique de **ne pas utiliser son application ECG avec un dispositif implanté**. Demandez à votre centre de rythmologie ce que la télésurveillance de votre prothèse enregistre déjà automatiquement (voir *Télésurveillance à domicile et suivi à distance des prothèses*).
- Demandez aussi l'avis du centre de rythmologie avant d'utiliser une balance connectée à impédancemétrie (mesure de masse grasse) et pour les consignes propres à votre modèle.

### Solidité des preuves pour l'ICFER ischémique

| Sujet | Niveau d'étayage pour l'ICFER ischémique |
|---|---|
| Choix du brassard et validation | Bon (direct pour le choix technique) |
| Protocole d'automesure à domicile | Consensus d'experts conçu pour l'HTA (indirect) |
| Précision tensionnelle en FA | Partiel (adultes en FA sans détail IC ; divergence entre sociétés) |
| Précision des brassards à tension basse | Indirect (patients en état de choc) |
| Précision des ECG de montre | Partiel (patients de cardiologie, FEVG non connue) |
| SpO2 au poignet | Extrapolé (**14** jeunes adultes sains, étude fabricant) |
| Anxiété et surconsommation de soins | Partiel (observationnel, un tiers d'IC) |
| Risque magnétique avec un DAI | Mécanisme démontré (banc d'essai, autorités), pas de taux d'événements cliniques |

*(Évaluations indicatives ; la plupart des sources techniques ne renseignant ni la FEVG ni la cause ischémique, elles restent « non évaluables » selon la grille stricte d'applicabilité aux essais.)*

### Cinq questions à apporter en consultation

- Quelle plage de tension à domicile doit m'amener à vous contacter ?
- Mon tensiomètre est-il validé et muni de la bonne taille de brassard ?
- Comment souhaitez-vous que je mesure ma tension et mon pouls si j'ai une fibrillation atriale ou des extrasystoles ?
- Est-il utile que j'utilise une montre connectée, et quelles alertes vaut-il mieux désactiver ?
- Quelles précautions s'appliquent à mon modèle de DAI ou de CRT avec mon téléphone, ma montre ou ma balance ?

### Questions ouvertes pour la recherche

1. Les brassards oscillométriques à domicile surestiment-ils significativement la systolique chez des patients ICFER stables sous 100 mmHg ?
2. Le taux de tracés ECG non concluants sur montre connectée est-il plus élevé dans l'ICFER sous bêtabloquant que chez les autres patients de cardiologie ?
3. Désactiver les alertes de rythme irrégulier réduit-il l'anxiété cardiaque dans l'IC sans augmenter les FA non diagnostiquées ?`,
    },
  ],
  relatedArticleSlugs: [
    'automesure-tensionnelle-domicile',
    'montres-connectees-et-capteurs-ic',
    'tension-arterielle-insuffisance-cardiaque',
    'telesurveillance-insuffisance-cardiaque',
    'dispositifs-cardiaques-dai-crt',
    'fibrillation-atriale-insuffisance-cardiaque',
    'questions-equipe-cardiologie',
    'vivre-avec-insuffisance-cardiaque',
  ],
  sources: [
    {
      label: 'Synthèse pratique Automesure tensionnelle et montres connectées (25 novembre 2026)',
      detail: 'Compilation opérationnelle issue des fiches automesure tensionnelle, montres connectées, tension artérielle en IC et questions à l’équipe de cardiologie.',
    },
    {
      label: 'ESH 2021/2022, SFHTA (« règle des 3 »), STRIDE BP, Consensus HFA 2025 & EHRA 2022',
      detail: 'Validation des tensiomètres, protocole à domicile, conduite en FA et hypotension, limites des capteurs sans brassard et des montres connectées.',
    },
    {
      label: 'Études BASEL Wearable (2023–2024), Rosman (2024), Wegner (2026) & notices FDA / UE',
      detail: 'Tracés non concluants, anxiété liée aux alertes et distances de sécurité magnétiques (15 cm / 30 cm) vis-à-vis des DAI et CRT.',
    },
  ],
  disclaimerType: 'medical',
};
