import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'gilet-defibrillateur-portable',
  sourceWikiPath: 'wiki/concepts/wearable-defibrillator-vest.md',
  titleFr: 'Le gilet défibrillateur portable (LifeVest)',
  category: 'dispositifs',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'gilet-défibrillateur',
    'lifevest',
    'wcd',
    'mort-subite',
    'dai',
    'récupération-fevg',
    'conduite-automobile',
    'dispositifs',
  ],
  aliases: [
    'Gilet défibrillateur portable',
    'LifeVest',
    'WCD',
    'Wearable cardioverter-defibrillator',
    'Défibrillateur portable',
    'Gilet défibrillateur',
    'Défibrillateur externe portable',
  ],
  linkedModules: ['lifeVest'],
  plainSummaryFr:
    'La décision d’implanter un défibrillateur (DAI) n’est généralement prise qu’après environ 3 mois de traitement médicamenteux optimisé, car la FEVG s’améliore souvent entre-temps. Le gilet défibrillateur portable (LifeVest) se porte sous les vêtements durant cette période d’attente : ses électrodes surveillent en continu votre rythme cardiaque et délivrent un choc en cas de trouble du rythme grave. Il est temporaire (en général 2 à 3 mois), doit être porté presque en permanence (plus de 20 h/jour, retiré uniquement pour la toilette), et entraîne en France une interdiction de conduire pendant toute sa durée d’indication. Les troubles du rythme nécessitant un choc restent peu fréquents (environ 1 à 2 % des porteurs), mais le risque est maximal au début. Les preuves scientifiques sont nuancées : le seul essai randomisé (VEST, niveau de certitude faible) n’a pas réduit significativement la mort subite (1,6 % contre 2,4 %), alors que les registres sont rassurants ; la HAS le rembourse en France dans la cardiomyopathie ischémique avec FEVG ≤ 35 %.',
  sections: [
    {
      headingFr: 'Comment fonctionne le gilet ?',
      bodyMarkdownFr: `Selon l’évaluation technique de la Haute Autorité de Santé (**HAS**, avis CNEDiMTS 2024) :

- Un boîtier moniteur et sa batterie (environ **640 g**) se portent à la ceinture ou en bandoulière ; le gilet textile et les électrodes pèsent environ **400 g**.
- S’il détecte un trouble du rythme ventriculaire dangereux, le dispositif **vibre, puis déclenche une sirène et un message vocal**. Si vous êtes conscient, vous maintenez les **boutons de réponse** enfoncés pour annuler le choc (une personne consciente ne fait habituellement pas un arrêt rythmique, ou le trouble s’arrête spontanément). Si personne n’appuie sur les boutons, un gel conducteur est libéré sur les électrodes et un choc électrique est délivré (jusqu’à **5 chocs** successifs).
- Le message vocal indique aux **témoins** de ne pas vous toucher pendant la séquence de choc et d’appeler les secours (**15 / SAMU** ou **112**).
- Le gilet **ne doit jamais être porté dans le bain ou sous la douche**. Deux batteries sont échangées et rechargées toutes les **24 heures**.
- Il enregistre le rythme cardiaque en continu et vous pouvez déclencher un enregistrement manuel en cas de symptôme ; les données sont transmises à l’équipe de cardiologie.`,
    },
    {
      headingFr: 'Ce que disent les recommandations européennes et internationales',
      bodyMarkdownFr: `| Situation | Position | Source |
|---|---|---|
| Relais temporaire dans l’insuffisance cardiaque (par exemple en attendant la réévaluation de la FEVG) | **Peut être envisagé (Classe IIb, C)** | ESC 2026 (insuffisance cardiaque) |
| Indication de DAI après une arythmie dangereuse, mais implantation temporairement impossible (par exemple infection) | **Doit être envisagé (Classe IIa, C)** | ESC 2022 (arythmies ventriculaires) |
| Patients sélectionnés tôt après un infarctus du myocarde | **Peut être envisagé (Classe IIb, B)** ; pas en routine | ESC 2022 (arythmies ventriculaires) |

- **Société allemande de cardiologie (DGK, 2019, texte intégral) :** elle classe chaque situation selon un code couleur (vert : recommandé ; jaune : doit ou peut être envisagé ; rouge : non recommandé), sans niveau de preuve chiffré :
  - **Vert (recommandé) :** après explantation d’un DAI (par exemple pour infection) jusqu’à la réimplantation ; indication de DAI avec obstacle temporaire à l’implantation ; sarcoïdose cardiaque le temps de confirmer le diagnostic ; cardiomyopathie du péripartum avec FEVG ≤ 35 % jusqu’à une FEVG > 45 %.
  - **Jaune (« plutôt non indiqué, peut être envisagé au cas par cas ») :** cardiomyopathie ischémique avec FEVG ≤ 35 % **dans les 40 jours suivant un infarctus du myocarde ou une angioplastie (stent), ou dans les 90 jours suivant un pontage** (le texte évoque environ 6 semaines après un infarctus et jusqu’à 90 jours après une revascularisation ; le tableau mentionne 40 jours pour l’angioplastie et le texte 90 jours). Exemples d’éléments pouvant amener à l’envisager : tachycardie ventriculaire non soutenue plus de 48 heures après l’infarctus, extrasystoles fréquentes, cicatrice étendue à l’IRM cardiaque ou syncope inexpliquée. La cardiomyopathie dilatée non ischémique avec FEVG ≤ 35 % pendant la mise en place des médicaments est également classée en jaune.
  - **Rouge (non indiqué) :** personnes inscrites ou en cours d’évaluation sur la **liste d’attente de transplantation cardiaque** (en raison de délais d’attente trop longs en Allemagne — position différente de l’ESC, des États-Unis et de la France), patients qui refuseraient un DAI ou n’y sont pas candidats, et personnes incapables d’utiliser le dispositif.
  - Cette gradation ne couvre que les **premières semaines** après un infarctus ou une revascularisation. Pour une dysfonction ventriculaire gauche ischémique chronique avec FEVG ≤ 35 % sous traitement optimisé, le document rappelle que les recommandations préconisent un DAI et ne soutient pas le gilet comme substitut au long cours.
  - **Temps de port exigé :** plus de **20 heures par jour**, vérifié à distance. Si cet objectif n’est pas atteint après au moins deux séances de réapprentissage, le gilet **doit être arrêté**.
  - **Réévaluation :** la prescription est limitée dans le temps et se conclut par une consultation cardiologique avec nouvelle évaluation du risque pour confirmer ou écarter le DAI (en cas de trouble du rythme dangereux sous gilet, l’implantation d’un DAI est généralement avancée ; la prolongation reste réservée à de rares cas incertains).
- Les recommandations américaines de 2017 sur les arythmies ventriculaires (qui comportent un passage sur l’usage après revascularisation) n’ont pas été consultées dans le corpus source.`,
    },
    {
      headingFr: 'L’essai randomisé de référence : VEST (NEJM 2018)',
      bodyMarkdownFr: `- **Participants :** patients inclus dans les jours suivant un **infarctus du myocarde**, avec une **FEVG ≤ 35 %** (moyenne **28 %**), répartis par tirage au sort en **2:1** entre gilet plus médicaments ou médicaments seuls pendant **90 jours**. Au total, **2 348** personnes ont été randomisées et **2 302** analysées (**46** exclues en raison d’irrégularités dans un centre).
- **Critère principal :** la mort subite rythmique est survenue chez **1,6 %** des patients avec le gilet contre **2,4 %** sans gilet (**RR 0,67**, IC 95 % : **0,37–1,21**, **p = 0,18**) : la différence n’est **pas statistiquement significative**. La mortalité toutes causes était de **3,1 % contre 4,9 %** (**p = 0,04**), un critère secondaire non corrigé pour les tests multiples, considéré par les auteurs comme probablement dû au hasard. Les réhospitalisations n’ont pas été réduites (**31,2 % contre 32,5 %**).
- **Niveau de certitude des preuves :** la revue systématique indépendante autrichienne (Goetz 2023) a évalué la certitude (GRADE) des résultats de mortalité de VEST comme **faible**, et a jugé avec une certitude **élevée** que le port effectif était insuffisant.
- **Le problème majeur du port effectif :** la durée moyenne de port était de **14 h/jour** (médiane **18 h/jour**). La proportion de patients du groupe gilet le portant un jour donné est tombée de **81 %** juste après la randomisation à **41 %** au jour 90. Environ un tiers des patients l’ont à peine porté ; **30 %** avaient arrêté définitivement en un mois et **43 %** en deux mois. Sur les **48** décès survenus dans le groupe gilet, **seuls 12 se sont produits alors que le gilet était effectivement porté**.
- **Analyse per-protocole (2020) :** en ne comptabilisant que les périodes où le gilet était réellement porté, la mortalité toutes causes apparaissait réduite de **75 %** (**HR 0,25**, IC 95 % : **0,13–0,48**) et la mort rythmique de **62 %** (**HR 0,38**, IC 95 % : **0,17–0,86**). Il s’agit d’une analyse post-hoc, jugée à risque de biais nettement plus élevé que le résultat principal par la revue autrichienne.
  - **Prudence d’interprétation :** cette même analyse montrait une baisse de **91 % des décès non subits (HR 0,09)**, ce qu’un défibrillateur ne peut pas expliquer biologiquement. Cela traduit un **biais d’observance (« healthy adherer bias »)** : les patients qui portent assidûment leur gilet sont globalement en meilleure santé ou plus investis dans l’ensemble de leurs soins.
  - La **HAS** a conclu que cette analyse ne renverse pas le résultat neutre de l’essai principal, mais confirme que **l’efficacité potentielle dépend strictement du port effectif**.
- **Financement :** le fabricant a cofinancé VEST puis en a assuré seul le financement à partir de 2011.`,
    },
    {
      headingFr: 'Les registres : FEVG basse nouvellement diagnostiquée et post-revascularisation',
      bodyMarkdownFr: `Ces registres ne comportent **pas de groupe témoin** et ne peuvent donc pas prouver que le gilet sauve des vies ; la plupart ont été financés par le fabricant. Ils décrivent néanmoins utilement le déroulement de la période d’attente :

| Registre | Population | Durée de port | Chocs appropriés | Chocs inappropriés | Évolution de la FEVG |
|---|---|---|---|---|---|
| **WEARIT-II Europe** (2020) | 781 patients : cardiomyopathie non ischémique récente, hospitalisation inaugurale pour IC, post-infarctus, post-angioplastie ou pontage | 75 jours, **20,3 h/jour** | **1,3 %** | **0,3 %** | 26,9 % à 36,3 % au total ; post-angioplastie/pontage : 25,7 % à 33,9 % |
| **WEARIT-France** (2021, via HAS et revue Goetz) | 1 157 patients (HAS) ou 1 164 (revue Goetz), 82 % de cardiomyopathie ischémique, FEVG moyenne **27 %**, majoritairement après infarctus ou revascularisation récente | Médiane 62 jours, **23,4 h/jour** | **1,6 %** | **0,6–0,7 %** | Non rapportée dans les synthèses consultées |
| **HF-OPT** (EHJ 2024) | 1 300 patients avec ICFER nouvellement diagnostiquée | **22,4 h/jour** | 7 patients choqués sur 1 300 (24 TV/FV) | 9 patients | **FEVG > 35 %** chez **46 %** à J90, **68 %** à J180 et **77 %** à J360 |
| **PROLONG** (2017) | 156 patients, 29 % d’origine ischémique | 101 jours, **21,7 h/jour** | **7 %** (monocentrique) | Aucun | Indication de DAI passée de **58 %** à 3 mois à **38 %** plus tard |

- **Synthèse des 11 registres et séries de cas (5 345 patients) :** la cardiomyopathie ischémique représentait **20 à 82 %** des effectifs selon les études. Le temps de port variait de **20 à 23,5 h/jour**, **1 à 4,8 %** des patients ont reçu au moins un choc approprié et **0 à 2 %** un choc inapproprié. Une seule petite étude comportait un groupe témoin, empêchant de démontrer un gain de survie. La revue autrichienne Goetz (2023) a évalué la certitude GRADE comme **très faible** pour la mortalité et **faible** pour le temps de port, les performances techniques et la sécurité. Six des 11 études étaient financées par le fabricant.
- **Comparabilité des temps de port :** les chiffres des registres ne sont pas directement comparables à ceux de VEST, car VEST comptabilisait chaque jour jusqu’au 90e jour (les jours après arrêt comptant pour 0 heure), tandis que les registres ne mesurent la durée que du premier au dernier jour de port.
- **Quand le risque baisse :** dans **HF-OPT**, la quasi-totalité des arythmies graves se sont produites au cours des **90 premiers jours**, et aucune n’est survenue chez les porteurs après J90. Dans **WEARIT-France**, **62 %** des événements ventriculaires ont eu lieu dès le premier mois.
- **Risque rythmique plus élevé dans l’origine ischémique :** dans **WEARIT-II Europe**, une TV ou FV est survenue chez **4,6 %** des patients après infarctus et **4,2 %** après angioplastie ou pontage, contre **2,4 %** dans les cardiomyopathies non ischémiques.
- **Éviter un DAI inutile :** dans **WEARIT-II Europe**, **61 %** des patients n’ont finalement pas reçu de DAI ; après revascularisation (stent ou pontage), la répartition était équilibrée (**47 %** implantés, **51 %** non implantés).
- **La FEVG continue-t-elle à s’améliorer après 3 mois en cas de cause ischémique ?** Les études divergent :
  - **HF-OPT** a constaté un passage au-dessus de 35 % **aussi fréquent dans les causes ischémiques que non ischémiques** à J90, J180 et J360, conduisant ses auteurs à suggérer d’attendre J180 avant de décider d’un DAI.
  - **PROLONG** a observé les récupérations tardives surtout dans les causes non ischémiques : sur environ 25 patients ischémiques encore à ≤ 35 % à 3 mois, seuls 4 environ se sont améliorés par la suite (effectifs très faibles).
  - Les recommandations européennes et la **HAS** maintiennent une réévaluation autour de **3 mois**. Par ailleurs, HF-OPT s’est déroulé avant la généralisation des iSGLT2 et avec un recours faible à l’ARNI : la cinétique de récupération sous les 4 piliers actuels peut différer.`,
    },
    {
      headingFr: 'Évaluations indépendantes et remboursement en France (HAS 2024)',
      bodyMarkdownFr: `**Évaluations indépendantes :**

- **Revue autrichienne d’évaluation des technologies de santé (Goetz 2023, texte intégral) :** mise à jour indépendante sans financement externe, recensant 1 essai randomisé (**VEST**) et 11 études observationnelles, sans les pooler en méta-analyse.
  - **Certitude (GRADE) :** **faible** pour les décès dans VEST ; **très faible** pour les décès dans les études observationnelles ; **faible** pour le temps de port, les performances du dispositif et la sécurité.
  - Chocs appropriés chez **1 à 4,8 %** des patients et chocs inappropriés chez **0 à 2 %** dans les études observationnelles.
  - **Fausses alarmes :** une série allemande de 102 patients (**Erath 2017**) a rapporté des fausses alarmes (vibration ou sirène déclenchée par interférence ECG) chez **58 patients (57 %)** — il s’agit d’une **étude isolée et non d’un taux poolé**.
  - Les auteurs concluent que le bénéfice clinique n’est pas démontré, que les données observationnelles souffrent de biais de sélection et que davantage de données comparatives sont nécessaires avant de poursuivre ou d’élargir l’usage ; ils retiennent surtout un rôle plausible en relais lorsqu’un DAI est indiqué mais ne peut pas encore être implanté ou a été explanté pour infection.
  - *Perspective éditoriale :* les auteurs écrivent dans une logique de payeur public et adoptent une position ouvertement critique envers le dispositif (qualifiant par exemple la médiatisation de VEST de « spin », ce qui relève de leur appréciation).
- **HAS (France, 2024) :** la CNEDiMTS a renouvelé le remboursement pour **5 ans** avec une amélioration du service attendu modérée (**ASA III**).

**Indications remboursées par l’Assurance Maladie en France (avis HAS 2024) :**

- Après explantation d’un DAI infecté, dans l’attente d’une réimplantation.
- En attente de transplantation cardiaque.
- **Après revascularisation avec FEVG < 35 %**, avec réévaluation de la FEVG et discussion de l’indication d’un DAI à la fin du **1er mois** et du **3e mois**.
- **Après un infarctus aigu du myocarde avec FEVG < 35 %** au-delà des 48 premières heures, avec réévaluation à 1 mois et à 3 mois.
- **Cardiomyopathie ischémique avec FEVG ≤ 35 %**, jusqu’à ce que l’indication d’un DAI soit clarifiée ou que la FEVG remonte au-dessus de 35 % (indication ajoutée en 2019).
- **Indications non prises en charge :** cardiomyopathie non ischémique nouvellement diagnostiquée (refusée en 2021), myocardite aiguë, cardiomyopathie du péripartum.

La HAS recommande qu’un **cardiologue rythmologue** donne un avis sur l’indication du DAI au fil de l’évolution de la FEVG. Le dispositif doit être livré sous **24 heures**, avec une assistance téléphonique **24 h/24 et 7 j/7** et une formation pratique lors de la remise.

La HAS précise également les situations où le gilet peut être inadapté : présence d’un DAI actif, morphologie empêchant un bon contact des électrodes, incapacité à comprendre ou actionner les boutons de réponse, ou prise de médicaments altérant cette capacité.`,
    },
    {
      headingFr: 'Vivre avec le gilet au quotidien (dont les règles de conduite en France)',
      bodyMarkdownFr: `- **Le porter en permanence :** hormis pour la toilette, tout bénéfice potentiel repose sur un port quasi continu (plus de **20 h/jour** selon la DGK).
- **Alarmes fréquentes, chocs rares :** la grande majorité des alarmes sont de fausses alertes (mouvements, contact imparfait d’une électrode) qu’on interrompt avec les boutons de réponse. Dans **VEST**, **72 %** des porteurs ont eu au moins une alarme, environ **10 %** ont eu plus de **100 alarmes**, et **4,5 %** ont utilisé les boutons de réponse pour interrompre un ou plusieurs chocs. Les chocs réels concernent environ **1 à 2 %** des personnes dans les grands registres (jusqu’à 5 à 7 % dans de petites séries), et les chocs inappropriés étaient de **0,6 %** dans VEST.
- **Peau :** démangeaisons et éruptions cutanées sont les effets indésirables les plus fréquents. Dans **VEST**, les éruptions cutanées ont touché **13,0 %** des porteurs contre **3,8 %** dans le groupe témoin, et les démangeaisons **14,5 % contre 3,1 %**.
- **Tout le monde n’y parvient pas :** la DGK estime que **10 à 15 %** des personnes pressenties pour un gilet ne peuvent pas l’utiliser correctement ; dans une série allemande, **7 %** l’ont rendu en quelques heures. Une formation initiale avant le démarrage, complétée par une seconde séance quelques semaines plus tard, est conseillée pour vous et votre entourage.
- **Sommeil et sentiment de sécurité :** dans un questionnaire français cité par la HAS, **88 %** des patients déclaraient que le gilet les avait amenés à prendre leur santé au sérieux, mais seule la moitié environ indiquait mieux dormir grâce à lui.
- **Entourage et témoins :** vos proches doivent connaître la signification des alarmes et **ne jamais intervenir ni retirer le gilet** pendant une séquence de choc. Les données de matériovigilance rapportent des décès attribués à une interférence de témoins.
- **Activité physique :** environ la moitié des utilisateurs français indiquaient que le gilet leur donnait confiance pour pratiquer une activité physique ou participer à une réadaptation cardiaque (SMR cardiovasculaire).
- **Conduite automobile sous LifeVest :**
  - **En France (Arrêté du 28 mars 2022, annexe § 1.2.6) : la conduite automobile est interdite tant que le gilet défibrillateur portable est indiqué**, jusqu’à la prise en charge définitive (implantation d’un DAI ou décision qu’aucun dispositif n’est nécessaire). Pour les conducteurs professionnels (groupe lourd), l’indication d’un gilet entraîne une **incompatibilité définitive**.
  - **À l’étranger :** aucune règle spécifique au gilet n’a été trouvée dans les référentiels britannique (DVLA, novembre 2025), européen rythmologique (EHRA 2009) ou allemand (DGK 2015 et 2023), ni dans une revue internationale de 2019 comparant les règles de conduite en Europe, au Royaume-Uni, en Allemagne, aux États-Unis et au Canada (Margulescu 2019), ni sur la conduite après un choc délivré par un gilet. Dans ces pays, ce sont les délais liés à la situation sous-jacente (infarctus, angioplastie, pontage, insuffisance cardiaque) qui s’appliquent. La règle écrite la plus proche après un choc est celle d’un choc approprié de DAI (environ 3 mois d’arrêt dans les avis EHRA et DGK, 6 mois ou plus au Royaume-Uni), mais son extension au gilet reste une extrapolation.
  - Les pages d’information du fabricant n’interdisent pas la conduite mais renvoient à l’avis médical, mettent en garde contre les bruits de route ou vibrations pouvant masquer une alarme, et rappellent d’appeler immédiatement un médecin après un choc (le gilet n’appelle pas les secours automatiquement). Consultez l’article « Permis de conduire, insuffisance cardiaque et défibrillateur (France et UE) » et vérifiez toujours votre situation avec votre cardiologue.
- **À la fin de la période de port :** la FEVG est remesurée (ETT ou IRM cardiaque). Selon le résultat et le bilan global, la suite consiste soit en l’implantation d’un DAI ou d’un CRT-D, soit en la poursuite du traitement médical seul sans dispositif.`,
    },
    {
      headingFr: 'En pratique dans la cardiomyopathie ischémique avec FEVG autour de 35 %',
      bodyMarkdownFr: `- Le gilet répond à un **risque précoce réel mais statistiquement modéré** pendant la phase de titration des médicaments : la majorité des porteurs n’auront jamais besoin de choc et beaucoup verront leur FEVG remonter.
- La preuve randomisée la plus solide (**VEST**) porte uniquement sur les suites immédiates d’un **infarctus du myocarde**, avec un critère principal non significatif. Pour une cardiomyopathie ischémique découverte sans infarctus récent, on ne dispose que de registres observationnels.
- Les recommandations laissent la décision au jugement clinique individuel (**Classe IIb**). La société allemande (DGK) le classe « plutôt non indiqué, peut être envisagé au cas par cas » dans les 40 jours suivant un infarctus ou un stent (90 jours après un pontage), et ne le soutient pas en phase chronique. La France adopte une position plus ouverte en remboursant le gilet dans la cardiomyopathie ischémique avec FEVG ≤ 35 %. La proposition dépend donc de l’appréciation du risque précoce par votre équipe, des critères de prise en charge, de votre capacité à le porter **plus de 20 heures par jour**, ainsi que de la contrainte d’interdiction de conduite en France.`,
    },
  ],
  relatedArticleSlugs: [
    'dispositifs-cardiaques-dai-crt',
    'insuffisance-cardiaque-fevg-amelioree',
    'traitements-additionnels-nouveaux',
    'telesurveillance-insuffisance-cardiaque',
    'montres-connectees-et-capteurs-ic',
    'revascularisation-pontage-stents',
    'regles-conduite-automobile',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'comprendre-le-diagnostic',
  ],
  sources: [
    {
      label: 'Essai VEST (NEJM 2018) et analyse per-protocole (Olgin, JCE 2020)',
      detail: 'Essai randomisé post-infarctus (2 348 randomisés, 2 302 analysés), durée de port, décès sans gilet et biais d’observance',
    },
    {
      label: 'Registres WEARIT-II Europe (2020), HF-OPT (EHJ 2024) et PROLONG (2017)',
      detail: 'Fréquence des chocs, récupération de la FEVG jusqu’à 1 an et proportion de DAI évités',
    },
    {
      label: 'Avis HAS / CNEDiMTS sur LifeVest (2024)',
      detail: 'Indications remboursées en France, caractéristiques techniques, registre WEARIT-France et matériovigilance',
    },
    {
      label: 'Recommandations ESC 2026 (insuffisance cardiaque) et ESC 2022 (arythmies ventriculaires)',
      detail: 'Recommandations de classe IIa et IIb pour le relais temporaire par gilet défibrillateur',
    },
    {
      label: 'Revue systématique indépendante Goetz (IJCHV 2023, texte intégral)',
      detail: 'Évaluation HTA autrichienne avec cotation GRADE par critère, détails de VEST et synthèse des 11 études observationnelles (5 345 patients)',
    },
    {
      label: 'Prise de position de la Société allemande de cardiologie — DGK (Deneke 2019, texte intégral)',
      detail: 'Gradation couleur par indication, fenêtres post-infarctus/angioplastie (40 j) et post-pontage (90 j), règle de port > 20 h/jour et réévaluation',
    },
    {
      label: 'Arrêté français du 28 mars 2022 (§ 1.2.6) et mémento DSR (2022)',
      detail: 'Interdiction de conduire en France pendant l’indication d’un gilet défibrillateur (groupe léger et groupe lourd)',
    },
    {
      label: 'Comparatifs internationaux conduite (DVLA 2025, EHRA 2009, DGK 2015/2023, revue Margulescu 2019, FAQ ZOLL LifeVest)',
      detail: 'Absence de règle spécifique au gilet hors de France et recommandations pratiques du fabricant',
    },
  ],
  disclaimerType: 'medical',
};
