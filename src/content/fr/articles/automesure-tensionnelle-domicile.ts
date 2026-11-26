import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'automesure-tensionnelle-domicile',
  sourceWikiPath: 'wiki/concepts/home-blood-pressure-monitoring.md',
  titleFr: 'Automesure tensionnelle à domicile (règle des 3 et tensiomètre validé)',
  category: 'quotidien',
  readingTier: 'essential',
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
    "Mesurer votre tension à domicile aide votre équipe à adapter vos traitements et à comprendre d'éventuels vertiges. Utilisez un tensiomètre automatique au bras validé sur STRIDE BP, au calme, matin avant vos comprimés et soir sur 3 à 7 jours. Vos symptômes pèsent toujours plus qu'un chiffre isolé, surtout si la tension est basse. Les montres et bracelets sans brassard ne sont pas recommandés.",
  keyTakeawaysFr: [
    'Choisissez un tensiomètre automatique au bras dont la référence exacte est validée sur stridebp.org, avec un brassard adapté à votre tour de bras.',
    'Appliquez la règle des 3 : repos assis 5 minutes, 3 mesures matin avant les comprimés et 3 le soir pendant 3 jours, puis notez la moyenne.',
    'En cas de fibrillation atriale ou de rythme irrégulier, faites toujours 3 mesures et calculez la moyenne, sans vous fier à un chiffre isolé.',
    'Si vous avez des vertiges ou une tension basse, notez vos symptômes et parlez-en à votre médecin : ne modifiez jamais vos doses seul.',
  ],
  sections: [
    {
      headingFr: 'Pourquoi mesurer votre tension à domicile ?',
      bodyMarkdownFr: `- **Aider à régler vos traitements :** une série de mesures réalisées chez vous reflète mieux votre tension habituelle qu'un chiffre isolé pris au cabinet médical. Elle aide votre cardiologue, votre médecin traitant ou votre infirmière en pratique avancée (IPA) à adapter le rythme d'augmentation de vos traitements.
- **Définir votre plage personnelle :** c'est votre équipe qui fixe vos repères habituels. **Chaque mesure n'a pas besoin de tomber dans la même zone** : ce qui compte, c'est la tendance globale sur plusieurs jours. Si mesurer trop souvent vous rend anxieux, espacez les séries entre deux consultations.
- **Comprendre des vertiges au lever :** l'automesure permet souvent de repérer une chute de tension en passant debout (**hypotension orthostatique**), plus fréquente dans l'insuffisance cardiaque et parfois invisible au cabinet.
- **Un repère pour discuter, pas pour changer vos doses seul :** dans l'insuffisance cardiaque, les traitements de fond ne sont généralement réévalués à la baisse qu'en cas de tension systolique inférieure à **80 mmHg** ou de symptômes gênants. Pour en savoir plus, consultez l'article *Tension artérielle et insuffisance cardiaque*.`,
    },
    {
      headingFr: 'Choisir un tensiomètre fiable et un brassard adapté',
      bodyMarkdownFr: `La grande majorité des appareils vendus en ligne ne sont pas validés cliniquement. Avant d'acheter, vérifiez toujours la **référence exacte du modèle** (lettres et chiffres compris) sur le registre international **STRIDE BP** (stridebp.org), utilisé comme référence en France par la Société française d'hypertension artérielle (SFHTA).

| À privilégier | À éviter |
|---|---|
| Tensiomètre **automatique à brassard au bras** (huméral) | Tensiomètres au poignet (uniquement si le brassard au bras est impossible) |
| Référence exacte validée sur **STRIDE BP** (idéalement catégorie « preferred ») | Appareils au doigt, bagues, bracelets ou « tension » sur montre connectée (sans brassard) |
| Taille de brassard adaptée à votre tour de bras mesuré à mi-hauteur | Brassard provenant d'un autre appareil, même de la même marque |
| Mémoire intégrée calculant les moyennes ou transmission vers un téléphone | Choix fondé uniquement sur le prix, les avis clients ou les meilleures ventes en ligne |

- **Mesurez votre tour de bras :** un brassard trop petit surestime la tension ; un brassard trop grand la sous-estime. Vérifiez sur STRIDE BP les tailles de brassard validées pour votre modèle. Au-delà de **42 cm** de tour de bras, privilégiez un brassard conique.
- **Pourquoi éviter les montres et bracelets sans brassard :** les sociétés savantes déconseillent ces dispositifs pour mesurer ou suivre la tension artérielle. Même les notifications d'hypertension de certaines montres ne mesurent pas la tension et ne sont pas conçues pour le suivi d'une insuffisance cardiaque.`,
    },
    {
      headingFr: 'Comment mesurer : la règle des 3 étape par étape',
      bodyMarkdownFr: `En France, la **règle des 3** (recommandée par la SFHTA et l'Assurance Maladie) est simple à suivre pendant les **3 jours** qui précèdent votre consultation (ou jusqu'à **7 jours** si votre équipe vous le demande) :

1. **Avant la mesure :** évitez café, tabac, repas et effort dans les **30 minutes** précédentes, et passez aux toilettes si besoin.
2. **Installez-vous au calme :** asseyez-vous **5 minutes**, dos appuyé, pieds à plat au sol, sans croiser les jambes et sans parler.
3. **Posez le brassard :** directement sur la **peau nue**, centre du brassard à hauteur du cœur, bord inférieur juste au-dessus du pli du coude, bras posé sur la table.
4. **Effectuez 3 mesures** espacées de **1 à 2 minutes** :
   - **le matin**, avant de prendre vos médicaments ;
   - **le soir**, avant le coucher.
5. **Relevez la moyenne :** privilégiez la mémoire de l'appareil ou l'application associée plutôt qu'un recopiage manuel. Le seuil d'hypertension à domicile est de **135/85 mmHg**, mais vos objectifs personnels dans l'insuffisance cardiaque peuvent être plus bas.

- **Quel bras choisir ?** L'un ou l'autre bras convient habituellement ; demandez à votre médecin s'il existe un écart entre vos deux bras justifiant d'en utiliser un en particulier.
- **À quelle fréquence ?** Entre deux consultations stables, une série espacée (par exemple une à deux fois par mois) suffit habituellement : inutile de mesurer tous les jours sans consigne médicale.
- **Contrôle annuel :** apportez votre tensiomètre une fois par an en consultation pour vérifier son bon fonctionnement face à l'appareil du cabinet.
- **En cas de vertiges après les médicaments :** mesurer votre tension au moment du symptôme (ou quelques heures après la prise) aide votre médecin à voir l'effet maximal du traitement. Demandez à votre équipe si elle souhaite également une mesure debout après **3 minutes**.
- **Prendre votre pouls à la main :** après **10 minutes** assis au calme, comptez vos battements pendant **30 secondes** et multipliez par 2 (sous bêtabloquant, un pouls au repos plus bas que 60 bpm est fréquent).`,
    },
    {
      headingFr: 'Rythme irrégulier et tension basse : les bons réflexes',
      bodyMarkdownFr: `### Si vous avez une fibrillation atriale ou des extrasystoles fréquentes

- **Ne vous fiez jamais à une mesure isolée :** faites **3 mesures** consécutives par session et calculez la moyenne. Lorsque le rythme est contrôlé, la tension systolique (le chiffre du haut) reste généralement fiable.
- **Le pictogramme « rythme irrégulier » ou « FA » est un simple indice :** à domicile, une alerte isolée correspond souvent à une fausse alerte. En revanche, une alerte répétée sur plusieurs mesures mérite d'être signalée à votre médecin pour un contrôle par électrocardiogramme (ECG).
- **Suivi du pouls :** si votre rythme est rapide ou très irrégulier, les valeurs affichées à domicile peuvent être moins précises. Demandez à votre équipe comment elle souhaite suivre votre fréquence cardiaque.

### Si votre tension est habituellement basse

- **Fiez-vous d'abord à ce que vous ressentez :** lorsque la tension est très basse, les brassards automatiques peuvent parfois afficher un chiffre légèrement surestimé. Ne partez jamais du principe qu'une tension affichée autour de **90 mmHg** est « en réalité plus élevée ».
- **Notez vos symptômes :** vertiges au lever, sensation de malaise, fatigue inhabituelle ou vue brouillée pèsent plus lourd que le chiffre seul.
- **Ne modifiez jamais vos comprimés seul :** répétez la mesure, notez le contexte et contactez votre médecin traitant, votre infirmière insuffisance cardiaque / IPA ou votre cardiologue. En cas de symptômes inexpliqués, une mesure ambulatoire sur 24 heures (MAPA) peut vous être proposée.
- **En cas de malaise grave, perte de connaissance ou douleur thoracique :** appelez immédiatement le **15 (SAMU)**, le **112** ou le **114** (par SMS).`,
    },
    {
      headingFr: 'Pour aller plus loin : études de validation, recommandations et limites',
      depth: 'evidence',
      bodyMarkdownFr: `### Protocoles et recommandations (ESH 2021, SFHTA, HFA 2025, NICE NG106)

| Paramètre | ESH 2021 (Europe) | SFHTA « règle des 3 » (France / fiche CNAM) |
|---|---|---|
| **Avant la mesure** | Ni tabac, ni caféine, ni repas, ni effort dans les **30 minutes** ; vessie vide (AHA) | Quelques minutes de repos (fiche CNAM : **5 minutes** assis) |
| **Nombre de mesures** | **2 mesures** espacées de **1 minute** | **3 mesures** espacées de quelques minutes (fiche CNAM : **2 minutes**) |
| **Durée de la série** | **7 jours** (minimum **3 jours**) avant consultation | **3 jours consécutifs** (moyenne des **18 mesures**) |
| **Seuil d'HTA à domicile** | **135/85 mmHg** | Inférieure à **135/85 mmHg** considérée normale |

- **Aucun protocole spécifique à l'ICFER n'existe :** le portail patient de la Heart Failure Association (ESC) indique que l'automesure est raisonnable si l'équipe la conseille. Le consensus **HFA 2025** sur l'hypotension dans l'ICFER (Skouri et al.) conseille une mesure couché ou assis puis **après 3 minutes debout**, et ne discute une baisse des traitements qu'en dessous de **80 mmHg** de systolique ou devant des symptômes majeurs. Le guide britannique **NICE NG106** conseille de contrôler la tension avant et après chaque augmentation de dose.
- **Hypotension orthostatique :** dans une cohorte citée par l'ESH (2021), une chute tensionnelle au lever a été détectée chez **37,5 %** des participants par l'automesure à domicile contre **15 %** au cabinet médical.

### Validation des appareils, fibrillation atriale et dispositifs sans brassard

- **Audit du marché (Picone 2020) :** sur **972** appareils vendus en ligne, seuls **5,5 %** étaient validés (**18,3 %** des brassards de bras, **8,0 %** des appareils au poignet, **0 %** des **532** bracelets connectés ; prix médian 101 dollars australiens contre 67). L'ESH estime que moins de **10 %** des plus de 4 000 modèles commercialisés dans le monde ont passé une validation clinique. Depuis janvier 2024, toute nouvelle validation suit la norme universelle **AAMI/ESH/ISO (ISO 81060-2)**.
- **Registres :** il n'existe pas de liste nationale française propre (ANSM ou SFHTA) ; la SFHTA renvoie vers **STRIDE BP** (autres registres : BIHS au Royaume-Uni/Irlande, validatebp.org aux États-Unis, Hypertension Canada). Exemples de modèles listés sur STRIDE BP au 25 novembre 2026 (ordre alphabétique, sans valeur de recommandation) : A&D UA-1020, UA-1100NFC, UA-1100NFC-W, UA-1200BLE, UA-611Plus. La validation standard porte sur la population générale et ne garantit pas automatiquement la précision en FA, très fort tour de bras, grossesse ou pédiatrie.
- **Fibrillation atriale :** l'ESH rapporte un écart moyen poolé d'environ **1 mmHg** en systolique et **+2,1 mmHg** en diastolique, et préfère les appareils automatiques validés (3 mesures) lorsque la fréquence est contrôlée ; la **BIHS** (Royaume-Uni/Irlande) préfère la mesure manuelle quand c'est possible. Dans la méta-analyse **Tang 2022** (16 études, **10 158** personnes), les algorithmes FA atteignaient en cabinet **96,2 %** de sensibilité et **94,0 %** de spécificité, mais à domicile la valeur prédictive positive n'était que de **51,9 %** (une alerte répétée sur 2/2 ou 2/3 mesures était plus fiable). La détection de FA n'améliore pas la précision tensionnelle (BIHS 2019). Les capteurs au poignet peuvent sous-estimer la fréquence cardiaque d'environ **10 bpm** en FA (EHRA 2022).
- **Tension basse (Meidert 2020) :** chez **30 patients** hospitalisés en état de choc, un brassard oscillométrique surestimait en moyenne la systolique de **12 mmHg** par rapport à un cathéter artériel et manquait une pression moyenne dangereusement basse dans **64 %** des cas. Cette situation extrême de soins intensifs ne peut pas être transposée telle quelle à un patient stable à domicile autour de 85–105 mmHg.
- **Dispositifs sans brassard :** la prise de position **ESH 2022** les déconseille et STRIDE BP ne les référence pas. Les notifications d'hypertension Apple Watch (FDA septembre 2025, réservées aux personnes sans diagnostic préalable d'HTA) ont montré une sensibilité de **41,2 %** (59 % de cas manqués) et une spécificité de **92,3 %** dans l'étude du fabricant, avec une disponibilité UE non confirmée.

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
