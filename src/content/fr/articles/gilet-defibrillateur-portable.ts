import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'gilet-defibrillateur-portable',
  sourceWikiPath: 'wiki/concepts/wearable-defibrillator-vest.md',
  titleFr: 'Le gilet défibrillateur portable (LifeVest)',
  category: 'dispositifs',
  asOf: '2026-11-24',
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
    'La décision d’implanter un défibrillateur (DAI) n’est généralement prise qu’après environ 3 mois de traitement médicamenteux optimisé, car la FEVG s’améliore souvent entre-temps. Le gilet défibrillateur portable (LifeVest) se porte sous les vêtements durant cette période d’attente : ses électrodes surveillent en continu votre rythme cardiaque et délivrent un choc en cas de trouble du rythme grave. Il est temporaire (en général 2 à 3 mois), doit être porté jour et nuit sauf pour la toilette, et entraîne en France une interdiction de conduire pendant toute sa durée d’indication. Les troubles du rythme nécessitant un choc restent peu fréquents (environ 1 à 2 % des porteurs), mais le risque est maximal au début. Les preuves scientifiques sont nuancées : le seul essai randomisé (VEST) n’a pas atteint la significativité statistique sur son critère principal, alors que les registres sont rassurants.',
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

- La **Société allemande de cardiologie (DGK, 2019)** parle d’une **décision individuelle** : pertinente face à un risque élevé mais limité dans le temps, chez une personne qui serait candidate à un DAI après réévaluation, et **uniquement si le port continu est envisageable**, avec suivi à distance du temps de port.
- Les recommandations américaines de 2017 sur les arythmies ventriculaires (qui comportent un passage sur l’usage après revascularisation) n’ont pas été consultées dans le corpus source.`,
    },
    {
      headingFr: 'L’essai randomisé de référence : VEST (NEJM 2018)',
      bodyMarkdownFr: `- **Participants :** 2 302 personnes incluses dans les jours suivant un **infarctus du myocarde**, avec une **FEVG ≤ 35 %**, réparties par tirage au sort entre gilet plus médicaments ou médicaments seuls pendant **90 jours**.
- **Critère principal :** la mort subite rythmique est survenue chez **1,6 %** des patients avec le gilet contre **2,4 %** sans gilet : la différence n’est **pas statistiquement significative**. La mortalité toutes causes était de **3,1 % contre 4,9 %**, un résultat que les auteurs estiment probablement lié au hasard compte tenu des tests multiples.
- **Le problème majeur du port effectif :** la durée quotidienne de port a chuté rapidement. Environ un tiers des patients ne l’ont presque pas porté, **30 %** avaient arrêté au bout d’un mois et **80 %** avant le 90e jour. Sur les 48 décès survenus dans le groupe gilet, **seuls 12 se sont produits alors que le gilet était effectivement porté**.
- **Analyse per-protocole (2020) :** en ne comptabilisant que les périodes où le gilet était réellement porté, la mortalité toutes causes apparaissait réduite de **75 % (HR 0,25)** et la mort rythmique de **62 % (HR 0,38)**.
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
| **WEARIT-France** (2021, via HAS) | 1 157 patients, 82 % de cardiomyopathie ischémique avec FEVG < 30 % après infarctus ou revascularisation récente | 62 jours, **23,4 h/jour** | **1,6 %** | **0,6–0,7 %** | Non rapportée dans le résumé consulté |
| **HF-OPT** (EHJ 2024) | 1 300 patients avec ICFER nouvellement diagnostiquée | **22,4 h/jour** | 7 patients choqués sur 1 300 (24 TV/FV) | 9 patients | **FEVG > 35 %** chez **46 %** à J90, **68 %** à J180 et **77 %** à J360 |
| **PROLONG** (2017) | 156 patients, 29 % d’origine ischémique | 101 jours, **21,7 h/jour** | **7 %** (monocentrique) | Aucun | Indication de DAI passée de **58 %** à 3 mois à **38 %** plus tard |

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

- **Revue autrichienne d’évaluation des technologies de santé (Goetz 2023) :** 1 essai randomisé et 11 études observationnelles. Chocs appropriés chez **1 à 4,8 %** des patients et chocs inappropriés chez **0 à 2 %** ; une étude signalait des **fausses alarmes chez 57 %** des porteurs. L’évaluation a conclu que le bénéfice clinique n’est pas démontré et que les registres comportent un biais de sélection.
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
      bodyMarkdownFr: `- **Le porter en permanence :** hormis pour la toilette, tout bénéfice potentiel repose sur un port quasi continu.
- **Alarmes fréquentes, chocs rares :** la grande majorité des alarmes sont de fausses alertes (mouvements, contact imparfait d’une électrode) qu’on interrompt avec les boutons de réponse. Dans **VEST**, **72 %** des porteurs ont eu au moins une alarme. Les chocs réels concernent environ **1 à 2 %** des personnes dans les grands registres (jusqu’à 5 à 7 % dans de petites séries).
- **Peau :** démangeaisons et rougeurs cutanées sont les effets indésirables les plus fréquents.
- **Sommeil et sentiment de sécurité :** dans un questionnaire français cité par la HAS, **88 %** des patients déclaraient que le gilet les avait amenés à prendre leur santé au sérieux, mais seule la moitié environ indiquait mieux dormir grâce à lui.
- **Entourage et témoins :** vos proches doivent connaître la signification des alarmes et **ne jamais intervenir ni retirer le gilet** pendant une séquence de choc. Les données de matériovigilance rapportent des décès attribués à une interférence de témoins.
- **Activité physique :** environ la moitié des utilisateurs français indiquaient que le gilet leur donnait confiance pour pratiquer une activité physique ou participer à une réadaptation cardiaque (SMR cardiovasculaire).
- **Conduite automobile sous LifeVest :**
  - **En France (Arrêté du 28 mars 2022, annexe § 1.2.6) : la conduite automobile est interdite tant que le gilet défibrillateur portable est indiqué**, jusqu’à la prise en charge définitive (implantation d’un DAI ou décision qu’aucun dispositif n’est nécessaire). Pour les conducteurs professionnels (groupe lourd), l’indication d’un gilet entraîne une **incompatibilité définitive**.
  - **À l’étranger :** aucune règle spécifique au gilet n’a été trouvée dans les référentiels britannique (DVLA, novembre 2025), européen rythmologique (EHRA 2009) ou allemand (DGK 2015 et 2023), ni sur la conduite après un choc délivré par un gilet. Dans ces pays, ce sont les délais liés à la situation sous-jacente (infarctus, angioplastie, pontage, insuffisance cardiaque) qui s’appliquent. La règle écrite la plus proche après un choc est celle d’un choc approprié de DAI (environ 3 mois d’arrêt dans les avis EHRA et DGK, 6 mois ou plus au Royaume-Uni), mais son extension au gilet reste une extrapolation.
  - Les pages d’information du fabricant n’interdisent pas la conduite mais renvoient à l’avis médical, mettent en garde contre les bruits de route ou vibrations pouvant masquer une alarme, et rappellent d’appeler immédiatement un médecin après un choc (le gilet n’appelle pas les secours automatiquement). Consultez l’article « Permis de conduire, insuffisance cardiaque et défibrillateur (France et UE) » et vérifiez toujours votre situation avec votre cardiologue.
- **À la fin de la période de port :** la FEVG est remesurée (ETT ou IRM cardiaque). Selon le résultat et le bilan global, la suite consiste soit en l’implantation d’un DAI ou d’un CRT-D, soit en la poursuite du traitement médical seul sans dispositif.`,
    },
    {
      headingFr: 'En pratique dans la cardiomyopathie ischémique avec FEVG autour de 35 %',
      bodyMarkdownFr: `- Le gilet répond à un **risque précoce réel mais statistiquement modéré** pendant la phase de titration des médicaments : la majorité des porteurs n’auront jamais besoin de choc et beaucoup verront leur FEVG remonter.
- La preuve randomisée la plus solide (**VEST**) porte uniquement sur les suites immédiates d’un **infarctus du myocarde**, avec un critère principal non significatif. Pour une cardiomyopathie ischémique découverte sans infarctus récent, on ne dispose que de registres observationnels.
- Les recommandations laissent la décision au jugement clinique individuel (**Classe IIb**). La proposition dépend de l’appréciation du risque rythmique précoce par votre équipe de cardiologie, des critères de remboursement (favorablement couverts en France par la HAS) et de votre capacité à porter le gilet de manière continue, tout en tenant compte de la contrainte d’interdiction de conduite en France.`,
    },
  ],
  relatedArticleSlugs: [
    'dispositifs-cardiaques-dai-crt',
    'insuffisance-cardiaque-fevg-amelioree',
    'traitements-additionnels-nouveaux',
    'telesurveillance-insuffisance-cardiaque',
    'revascularisation-pontage-stents',
    'regles-conduite-automobile',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'comprendre-le-diagnostic',
  ],
  sources: [
    {
      label: 'Essai VEST (NEJM 2018) et analyse per-protocole (Olgin, JCE 2020)',
      detail: 'Essai randomisé post-infarctus, durée de port, décès sans gilet et discussion du biais d’observance',
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
      label: 'Revue systématique indépendante Goetz (2023) et prise de position DGK (2019)',
      detail: 'Évaluation HTA autrichienne des chocs, fausses alarmes et critères de décision individuelle',
    },
    {
      label: 'Arrêté français du 28 mars 2022 (§ 1.2.6) et mémento DSR (2022)',
      detail: 'Interdiction de conduire en France pendant l’indication d’un gilet défibrillateur (groupe léger et groupe lourd)',
    },
    {
      label: 'Comparatifs internationaux conduite (DVLA 2025, EHRA 2009, DGK 2015/2023, FAQ ZOLL LifeVest)',
      detail: 'Absence de règle spécifique au gilet hors de France et recommandations pratiques du fabricant',
    },
  ],
  disclaimerType: 'medical',
};
