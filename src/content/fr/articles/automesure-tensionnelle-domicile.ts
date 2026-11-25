import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'automesure-tensionnelle-domicile',
  sourceWikiPath: 'wiki/concepts/home-blood-pressure-monitoring.md',
  titleFr: 'Automesure tensionnelle à domicile (règle des 3 et tensiomètre validé)',
  category: 'quotidien',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'automesure',
    'tension-artérielle',
    'règle-des-3',
    'sfhta',
    'stride-bp',
    'tensiomètre',
    'fibrillation-atriale',
    'hypotension',
    'hypotension-orthostatique',
  ],
  aliases: [
    'Automesure tensionnelle',
    'Règle des 3',
    'Tensiomètre brassard',
    'STRIDE BP',
    'Tension à domicile',
    'HBPM',
    'Mesure tensionnelle',
  ],
  linkedModules: ['core', 'atrialFibrillation'],
  plainSummaryFr:
    "Une série de mesures de tension artérielle à domicile aide votre équipe de cardiologie à adapter le rythme d'augmentation de vos traitements et à savoir si des vertiges proviennent d'une tension basse. La fiabilité des chiffres repose sur trois éléments : un tensiomètre automatique à brassard huméral (au bras) dont la référence exacte est validée sur STRIDE BP, une routine standardisée (repos assis 5 minutes, bras nu à hauteur du cœur, 2 à 3 mesures matin avant les comprimés et soir sur 3 à 7 jours, puis calcul de la moyenne) et une lecture globale intégrant vos symptômes plutôt qu'un chiffre isolé. En cas de fibrillation atriale ou d'extrasystoles fréquentes, réalisez 3 mesures par session et faites la moyenne. Lorsque la tension est basse, les brassards oscillométriques peuvent surestimer les valeurs (constat issu de patients en état de choc) : vos symptômes pèsent davantage que le chiffre seul. Les montres, bagues et dispositifs sans brassard ne sont pas recommandés pour mesurer la tension artérielle.",
  sections: [
    {
      headingFr: "Pourquoi mesurer sa tension à domicile dans l'insuffisance cardiaque ?",
      bodyMarkdownFr: `- **Aucun protocole spécifique à l'ICFER n'existe.** La seule source dédiée à l'insuffisance cardiaque (le portail patient de la Heart Failure Association de l'ESC) indique que l'automesure est raisonnable si votre équipe vous la conseille ou si vous souhaitez suivre vos chiffres. C'est votre médecin ou votre infirmière insuffisance cardiaque / IPA qui définit votre plage de référence, et **chaque mesure n'a pas besoin de s'y situer**. Des mesures répétées hors plage doivent amener à planifier un avis médical ; si mesurer souvent vous rend anxieux, évitez de multiplier les prises.
- **Évaluer une hypotension :** le consensus européen **HFA 2025** sur la pression artérielle basse dans l'ICFER (Skouri et al.) conseille de mesurer la tension allongé ou assis, puis **après 3 minutes debout** ; si cela n'explique pas les symptômes, une mesure ambulatoire sur 24 heures (MAPA) peut être envisagée. Les traitements de fond de l'insuffisance cardiaque ne sont réduits qu'en dessous de **80 mmHg de systolique** ou en cas de symptômes majeurs. Le guide britannique **NICE NG106** conseille de contrôler la tension avant et après chaque augmentation de dose. Pour les cibles et l'ordre d'ajustement, consultez l'article *Tension artérielle et insuffisance cardiaque*.
- **Repérer ce qui échappe au cabinet :** dans une cohorte citée par l'ESH (2021), une chute tensionnelle au lever (**hypotension orthostatique**) a été détectée chez **37,5 %** des participants par l'automesure à domicile contre **15 %** au cabinet médical ; l'insuffisance cardiaque fait partie des situations associées à ce phénomène.
- **Reproductibilité :** les séries à domicile sont plus reproductibles que les mesures isolées en consultation et reflètent mieux le retentissement cardiovasculaire (SFHTA 2011).`,
    },
    {
      headingFr: 'Choisir un tensiomètre fiable et un brassard adapté',
      bodyMarkdownFr: `| À privilégier | À éviter |
|---|---|
| Tensiomètre **automatique à brassard huméral** (au bras, oscillométrique) | Tensiomètres au poignet (uniquement si le brassard au bras est impossible) |
| Référence exacte listée comme validée sur **STRIDE BP** (stridebp.org), idéalement catégorie « preferred » | Appareils au doigt, bracelets, bagues ou « tension » sur montre connectée (sans brassard) |
| Taille de brassard correspondant à la circonférence mesurée à mi-bras | Brassard provenant d'un autre appareil, même de la même marque |
| Mémoire intégrée avec calcul de moyennes ou transmission vers un téléphone | Choix fondé uniquement sur le prix, les avis clients ou les meilleures ventes en ligne |

- **La grande majorité des appareils vendus en ligne ne sont pas validés.** Dans un audit de **972** appareils vendus sur internet (Picone 2020), seuls **5,5 %** étaient validés : **18,3 %** des brassards de bras, **8,0 %** des appareils au poignet et **0 %** des **532** bracelets connectés. Les appareils validés coûtaient plus cher (médiane de 101 dollars australiens contre 67). L'ESH estime que moins de **10 %** des plus de 4 000 modèles commercialisés dans le monde ont passé un protocole de validation clinique.
- **Comment vérifier avant d'acheter :** **STRIDE BP** est un registre international soutenu par l'ESH, l'ISH et la World Hypertension League. Recherchez la **référence exacte du modèle, suffixes inclus** : une modification de capteur, d'algorithme, de brassard ou de tubulure n'est pas couverte automatiquement. Les modèles « preferred » sont des brassards de bras validés au cours des 10 dernières années, dotés d'une mémoire ou d'une connexion smartphone. Depuis janvier 2024, toute nouvelle validation suit la norme universelle **AAMI/ESH/ISO (ISO 81060-2)**. Les appareils au poignet ne sont jamais classés « preferred » et les dispositifs sans brassard ne sont pas pris en compte. D'autres registres existent (BIHS au Royaume-Uni/Irlande, validatebp.org aux États-Unis, Hypertension Canada).
- **Situation en France :** il n'existe **pas de liste nationale française propre** (ANSM ou SFHTA). La traduction française par la **SFHTA** des recommandations ESH renvoie vers STRIDE BP et les registres internationaux reconnus.
- **Taille du brassard :** un brassard trop petit surestime la tension ; un brassard trop grand la sous-estime. Mesurez le tour de votre bras à mi-hauteur et vérifiez sur STRIDE BP la rubrique « validated cuff sizes » du modèle. Au-delà de **42 cm** de tour de bras, un brassard conique est préférable.
- **Limites du label « validé » :** la validation standard porte sur des adultes de la population générale ; elle ne garantit pas la précision en cas de **fibrillation atriale**, de très fort tour de bras, de grossesse ou chez l'enfant, sauf validation dédiée. Les fonctions additionnelles comme la **détection de fibrillation atriale** doivent être validées séparément.
- **Exemples de références listées sur STRIDE BP au 25 novembre 2026** (les cinq premiers modèles de bras par ordre alphabétique, donnés à titre purement illustratif et **sans valeur de recommandation**) : A&D UA-1020, UA-1100NFC, UA-1100NFC-W, UA-1200BLE, UA-611Plus. La liste évolue : vérifiez toujours en ligne avant un achat.`,
    },
    {
      headingFr: 'Protocole de mesure : règle des 3 (SFHTA) et repères ESH 2021',
      bodyMarkdownFr: `Les protocoles européen (ESH 2021) et français (SFHTA / relevé CNAM) convergent sur l'essentiel et ne diffèrent que par quelques détails :

| Étape | ESH 2021 (Europe) | SFHTA « règle des 3 » (France) |
|---|---|---|
| **Avant la mesure** | Ni tabac, ni caféine, ni repas, ni effort dans les **30 minutes** ; vessie vide (AHA) | Quelques minutes de repos (fiche CNAM : **5 minutes** assis) |
| **Position** | Assis **5 minutes**, dos appuyé, pieds à plat, bras nu posé à hauteur du cœur, sans parler | Assis au calme |
| **Nombre de mesures par session** | **2 mesures** espacées de **1 minute** | **3 mesures** espacées de quelques minutes (fiche CNAM : **2 minutes**) |
| **Moments de la journée** | Le matin **avant la prise des médicaments** et le soir | Le matin au petit-déjeuner **avant les médicaments** et le soir avant le coucher |
| **Durée de la série** | **7 jours** (minimum **3 jours**) avant la consultation | **3 jours consécutifs** |
| **Calcul** | Moyenne de l'ensemble des mesures (l'exclusion du 1er jour reste débattue) | Moyenne des **18 mesures** |
| **Seuil d'HTA à domicile** | **135/85 mmHg** | Inférieure à **135/85 mmHg** considérée normale |

- **Apprentissage et relevé :** un professionnel de santé (médecin, pharmacien, infirmière insuffisance cardiaque / IPA) devrait idéalement vous montrer la technique lors de la mise en place. Les relevés enregistrés en mémoire dans l'appareil ou transmis sur téléphone sont plus fiables que les carnets recopiés à la main.
- **Pose du brassard :** directement sur la peau nue (pas sur une manche épaisse), centre du brassard à hauteur du cœur, bord inférieur juste au-dessus du pli du coude.
- **Choix du bras :** le guide patient de l'AHA indique que l'un ou l'autre bras convient habituellement lorsque l'écart est faible ; demandez à votre médecin s'il existe une différence entre vos deux bras justifiant d'en privilégier un.
- **Entre deux consultations :** l'ESH préconise des séries espacées (une à deux fois par semaine ou par mois selon la stabilité) et **déconseille de mesurer quotidiennement** ou de modifier vos doses de votre propre initiative.
- **Vérification de l'appareil :** apportez votre tensiomètre en consultation pour le comparer à la mesure du cabinet, puis faites-le contrôler chaque année (AHA).
- **Prendre son pouls manuellement :** restez assis au calme au moins **10 minutes**, comptez les battements pendant **30 secondes** et multipliez par 2 (au repos, la fréquence habituelle se situe souvent entre 60 et 100 bpm, mais peut être plus basse sous bêtabloquant).

### Horaire des mesures par rapport aux médicaments de l'insuffisance cardiaque

- La mesure du matin **avant les comprimés** évalue l'effet minimal (en creux) du traitement et suit exactement les protocoles ESH et SFHTA.
- Si vous ressentez des **vertiges**, une mesure au moment du symptôme ou quelques heures après la prise permet de documenter le pic d'action des médicaments (ESH 2021).
- **Test debout :** le consensus HFA 2025 recommande une mesure couché ou assis puis **après 3 minutes debout**. Aucune version standardisée à domicile n'ayant été validée dans les sources consultées, demandez à votre équipe si elle souhaite que vous réalisiez ce test et selon quelles consignes.`,
    },
    {
      headingFr: "En cas de fibrillation atriale ou d'extrasystoles fréquentes",
      bodyMarkdownFr: `- **Systolique globalement fiable, diastolique moins précise :** l'ESH indique que les brassards automatiques mesurent raisonnablement bien la pression systolique en fibrillation atriale (écart moyen poolé d'environ **1 mmHg**), mais surestiment légèrement la diastolique (environ **2,1 mmHg**). Elle conseille d'envisager **3 mesures** par session et de les moyenner.
- **Divergence entre sociétés savantes sur la mesure manuelle :**
  - l'**ESH** préfère les appareils automatiques validés à la mesure manuelle (auscultatoire) lorsque la fréquence cardiaque est contrôlée ;
  - la **BIHS** (Royaume-Uni et Irlande) préfère la **mesure manuelle lorsque c'est possible**, les protocoles de validation standard excluant habituellement les patients en fibrillation atriale ;
  - l'**ESH** (3 mesures par session) et la **SFHTA** (répéter les mesures) s'accordent sur le fait de ne jamais se fier à une mesure automatique isolée en rythme irrégulier.
- **Situations d'incertitude :** lorsque la fréquence est rapide et mal contrôlée, ou lorsque l'arythmie est fréquente ou persistante, les mesures automatisées à domicile peuvent manquer de fiabilité et ne doivent pas fonder seules un diagnostic.
- **Le pictogramme « FA » ou « rythme irrégulier » est un indice de dépistage, pas un diagnostic :**
  - dans une méta-analyse de **16 études** (**10 158** personnes, Tang 2022), les tensiomètres munis d'un algorithme FA atteignaient en cabinet **96,2 %** de sensibilité et **94,0 %** de spécificité ;
  - dans la seule étude conduite **à domicile**, près de **la moitié des alertes étaient des faux positifs** (valeur prédictive positive de **51,9 %**). Une alerte répétée sur 2 mesures sur 2 ou 2 sur 3 était plus fiable ;
  - disposer d'une détection de FA **n'améliore pas la précision** de la tension mesurée (BIHS 2019).
- **Fréquence cardiaque affichée en FA :** les capteurs au poignet peuvent sous-estimer la fréquence cardiaque d'environ **10 bpm** en FA (déficit de pouls lorsque certains battements sont trop faibles pour atteindre le poignet, guide EHRA 2022). Aucune source consultée n'évaluait la précision exacte du pouls affiché par un brassard de bras en FA : demandez à votre équipe comment elle souhaite suivre votre fréquence cardiaque.`,
    },
    {
      headingFr: 'Lorsque la tension est basse, et limite des montres sans brassard',
      bodyMarkdownFr: `### Tension basse : prudence dans l'interprétation

- **Tendance possible à la surestimation :** dans une étude portant sur **30 patients** hospitalisés en état de choc (Meidert 2020), un brassard oscillométrique au bras affichait en moyenne **12 mmHg de plus** sur la systolique qu'un cathéter artériel invasif et manquait une pression moyenne dangereusement basse dans **64 %** des cas, les algorithmes étant calibrés surtout sur des personnes normotendues. Il s'agit toutefois d'une situation extrême de soins intensifs : l'ampleur de l'erreur ne peut pas être transposée telle quelle à un patient stable à domicile autour de 85–105 mmHg, et aucune étude dédiée dans cette zone en ICFER n'a été retrouvée.
- **Lecture pratique :**
  - ne partez pas du principe qu'une systolique affichée autour de 90 mmHg est « en réalité plus élevée » ;
  - vos **symptômes** (vertiges au lever, sensation de malaise, fatigue inhabituelle) pèsent plus lourd que le chiffre seul ;
  - répétez et moyennez vos mesures, et discutez d'une MAPA de 24 heures avec votre cardiologue si les symptômes restent inexpliqués ;
  - les seuils d'hypertension (**135/85 mmHg** à domicile ou **180/120 mmHg** des guides américains) concernent l'hypertension : dans l'ICFER, le consensus HFA 2025 ne discute une baisse des traitements qu'en dessous de **80 mmHg** de systolique ou devant des symptômes majeurs. Ne modifiez jamais vos doses seul.

### Montres, bagues et dispositifs sans brassard (« cuffless »)

- **Non recommandés pour la tension artérielle :** la prise de position **ESH 2022** déconseille les dispositifs sans brassard (montres, bracelets, capteurs digitaux, applications smartphone) pour diagnostiquer ou suivre la tension artérielle, les méthodes de validation classiques ne leur étant pas adaptées. **STRIDE BP** ne les référence pas.
- **Notifications d'hypertension Apple Watch** (autorisation américaine FDA en septembre 2025) : cette fonction **ne mesure pas la tension artérielle**. Elle analyse 30 jours de données du capteur optique de pouls pour signaler une suspicion d'hypertension, uniquement chez des personnes **sans diagnostic préalable d'hypertension**. Dans l'étude du fabricant, elle a manqué **59 %** des personnes hypertendues (sensibilité **41,2 %**, spécificité **92,3 %**). Sa disponibilité dans l'Union européenne n'était pas confirmée. Pour aller plus loin, consultez l'article *Montres connectées et capteurs dans l'insuffisance cardiaque*.

### Applicabilité des données à la cardiomyopathie ischémique à FEVG réduite

| Source de données | Population étudiée | Applicabilité | Limite principale |
|---|---|---|---|
| Protocoles ESH 2021, SFHTA, AHA | Adultes hypertendus ou à risque d'HTA | Non évaluable (FEVG et cause non rapportées) | Pas de patients IC ; seuils conçus pour l'HTA |
| Portail patient HFA | Personnes avec IC | Conseils pratiques, non une étude | Pas de protocole chiffré |
| ESH / BIHS en FA ; Tang 2022 | Adultes en FA, surtout en cabinet | Non évaluable (FEVG et cause non rapportées) | Pas d'analyse IC ; peu de données à domicile |
| Meidert 2020 | Patients en état de choc aux urgences | Non évaluable (fonction cardiaque non rapportée) | Pressions très basses, moniteur hospitalier |
| Picone 2020, STRIDE BP | Marché des appareils | Question technique (non populationnelle) | Marché australien ; registre évolutif |
| Consensus HFA 2025 (basse tension) | ICFER | Directe | Consensus d'experts, pas d'essai randomisé |

La quasi-totalité des études techniques ne précisant ni la FEVG ni la cause ischémique, ces repères doivent être lus comme des bonnes pratiques générales pour adultes, à personnaliser avec votre équipe de cardiologie.`,
    },
  ],
  relatedArticleSlugs: [
    'tension-arterielle-insuffisance-cardiaque',
    'guide-pratique-automesure-et-montres-connectees',
    'montres-connectees-et-capteurs-ic',
    'telesurveillance-insuffisance-cardiaque',
    'medicaments-effets-secondaires-suivi',
    'fibrillation-atriale-insuffisance-cardiaque',
    'maladies-associees',
    'vivre-avec-insuffisance-cardiaque',
    'questions-equipe-cardiologie',
  ],
  sources: [
    {
      label: 'ESH 2021 (HBPM Position Paper et traduction française SFHTA) & SFHTA 2011 (« règle des 3 » / fiche CNAM)',
      detail: 'Protocole 5 min de repos, 2 à 3 mesures matin avant comprimés et soir sur 3 à 7 jours, hypotension orthostatique, conduite en FA et renvoi vers STRIDE BP.',
    },
    {
      label: 'Registre STRIDE BP (consulté le 25 novembre 2026) & Picone et al. (2020)',
      detail: 'Norme universelle ISO 81060-2, statut « preferred », tailles de brassard validées et audit de 972 tensiomètres vendus en ligne (5,5 % validés).',
    },
    {
      label: 'Tang et al. (2022), BIHS (2019) & Guide pratique EHRA (2022)',
      detail: 'Méta-analyse de la détection de FA par tensiomètres (VPP 51,9 % à domicile), position BIHS sur la mesure manuelle en FA et déficit de pouls.',
    },
    {
      label: 'Meidert et al. (2020), Consensus HFA 2025 (Skouri et al.) & NICE NG106 (2025)',
      detail: 'Surestimation oscillométrique à basse tension en état de choc (+12 mmHg), seuil HFA (< 80 mmHg ou symptômes majeurs), test debout 3 min et contrôle à chaque titration.',
    },
    {
      label: 'Prise de position ESH sur les dispositifs sans brassard (2022), étude Apple Hypertension Notifications (2025), AHA & HeartFailureMatters',
      detail: 'Non-recommandation des dispositifs cuffless, limites des notifications d’hypertension Apple (sensibilité 41,2 %) et repères pratiques patients.',
    },
  ],
  disclaimerType: 'medical',
};
