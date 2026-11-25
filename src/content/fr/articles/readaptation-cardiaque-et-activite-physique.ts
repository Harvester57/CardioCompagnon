import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'readaptation-cardiaque-et-activite-physique',
  sourceWikiPath: 'wiki/concepts/cardiac-rehabilitation-and-exercise.md',
  titleFr: 'Réadaptation cardiaque (SMR) et activité physique',
  category: 'quotidien',
  asOf: '2026-11-25',
  confidence: 'high',
  volatility: 'warm',
  tags: [
    'réadaptation-cardiaque',
    'smr',
    'activité-physique',
    'qualité-de-vie',
    'hospitalisations',
    'hf-action',
    'cochrane',
    'tai-chi',
    'yoga',
  ],
  aliases: [
    'Réadaptation cardiaque',
    'SMR cardiovasculaire',
    'Réentraînement à l’effort',
    'Activité physique',
    'Exercice physique',
    'ExCR',
    'Tai Chi',
    'Yoga',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "La réadaptation cardiaque basée sur l'exercice physique est un programme encadré, proposé en centre (SMR cardiovasculaire) ou à domicile, seul ou accompagné d'éducation thérapeutique. Dans les recommandations ESC 2026, elle est indiquée pour tous les patients stables (Classe I). Les données montrent qu'elle réduit les hospitalisations et améliore la qualité de vie ainsi que l'humeur, sans effet démontré sur la longévité — ces bénéfices étant plus modestes dans les essais les mieux conduits. Elle apparaît sûre dans l'insuffisance cardiaque stable à FEVG réduite, fonctionne de façon comparable en cas de cause ischémique ou non, et les programmes à domicile semblent aussi efficaces que ceux en centre. Le Tai Chi constitue une option douce étudiée dans de petits essais, sans que l'on sache s'il apporte un bénéfice en plus d'une réadaptation standard. Demandez à votre cardiologue ou à votre médecin traitant quel programme vous convient.",
  sections: [
    {
      headingFr: 'Ce que disent les recommandations',
      bodyMarkdownFr: `- **ESC 2026 :** la réadaptation cardiaque basée sur l'exercice est une recommandation de **Classe I pour tous les patients stables**.
- **NICE NG106 (Royaume-Uni, 2025) :** recommande de proposer un programme personnalisé basé sur l'exercice, après évaluation de sa faisabilité, dans un lieu accessible (domicile, structure de proximité ou hôpital), intégrant une dimension psychologique et éducative ainsi que des repères sur le soutien professionnel disponible.
- **Adaptation selon le stade de la maladie (HFA 2020) :**
  - **Insuffisance cardiaque chronique relativement stable (NYHA I–III) :** réadaptation cardiaque basée sur l'exercice recommandée.
  - **Pendant une phase aiguë ou une décompensation :** la tolérance à l'effort est très réduite ; l'entraînement est suspendu jusqu'à stabilisation.
  - **En phase terminale :** la kinésithérapie se concentre sur l'équilibre et la mobilisation passive des membres.`,
    },
    {
      headingFr: 'Les résultats de la revue Cochrane 2024',
      bodyMarkdownFr: `La synthèse la plus complète rassemble **60 essais randomisés totalisant 8 728 participants** (majoritairement en ICFER), comparant la réadaptation cardiaque basée sur l'exercice à l'absence de programme d'exercice, avec un suivi médian de **6 mois**.

| Critère (jusqu'à 12 mois) | Résultat | Niveau de certitude |
|---|---|---|
| **Hospitalisation toutes causes** | Probablement réduite : **15,9 % contre 23,8 %** (RR **0,69** ; IC 95 % : **0,56–0,86**) | Modéré |
| **Hospitalisation pour insuffisance cardiaque** | **26/457 contre 36/454** patients (environ **5,7 % contre 7,9 %** ; RR **0,82** ; IC 95 % : **0,49–1,35**) : pas de réduction clairement établie | Modéré |
| **Mortalité toutes causes** | **5,0 % contre 5,8 %** (RR **0,93** ; IC 95 % : **0,71–1,21**) : pas de différence claire | Faible |
| **Qualité de vie** (score Minnesota, plus bas = mieux) | Amélioration de **7,39 points** (IC 95 % : **4,47–10,30**) ; un gain d'au moins 5 points est cliniquement pertinent | Modéré |

- **Corrections issues du texte intégral :** le résumé de la revue indiquait par erreur un intervalle de 4,77–10,30 pour la qualité de vie alors que le tableau et le forest plot donnent **4,47–10,30** (retenu ici). De même, le taux témoin de 6,4 % pour les hospitalisations pour IC provenait d'une coquille sur le dénominateur (554 au lieu de 454), le taux exact du forest plot étant d'environ **7,9 %**, sans changement du RR (0,82). Même si le tableau de synthèse indique « réduit probablement », l'intervalle de confiance inclut l'absence d'effet.
- **Au-delà de 12 mois** (moins d'essais, dominés par HF-ACTION) : mortalité **RR 0,87** (IC 95 % : **0,72–1,04**) et hospitalisation toutes causes **RR 0,84** (IC 95 % : **0,70–1,01**), aucun des deux résultats n'étant clairement significatif.
- **Bénéfices plus faibles dans les essais les mieux conduits :** lorsqu'on limite l'analyse aux essais à faible risque de biais (randomisation et dissimulation d'allocation rigoureuses), les gains diminuent nettement :
  - qualité de vie : **+3,3 points** (IC 95 % : **−1,6 à 8,2**), sous le seuil clinique de 5 points et non significatif ;
  - hospitalisation toutes causes la première année : **RR 0,78** (IC 95 % : **0,58–1,04**), non significatif ;
  - mortalité la première année : **RR 1,26** (IC 95 % : **0,86–1,85**), imprécis et non significatif.
  - Le risque de biais était le seul facteur prédisant de façon constante l'ampleur de l'effet. Les deux grands essais bien conduits (**HF-ACTION** et **TELEREH-HF**, environ **40 %** des participants) étaient proches de la neutralité pour les décès et les hospitalisations, et des indices de biais de petites études ou de publication existaient. La revue n'a pas rapporté les effets indésirables séparément et sa recherche bibliographique s'arrête en **décembre 2021**.
- **Même efficacité dans l'insuffisance cardiaque ischémique ?** Les essais incluaient majoritairement des patients en ICFER (FEVG moyenne d'environ **21 à 37 %** lorsqu'elle était renseignée), avec une part variable de causes ischémiques. La revue Cochrane n'a pas testé l'effet selon la FEVG ou l'étiologie, mais **HF-ACTION** n'a trouvé aucune différence entre causes ischémiques et non ischémiques, et l'analyse sur données individuelles **ExTraMATCH II** (18 essais, **3 912 patients en ICFER**) n'a montré aucune différence selon la cause ischémique ou la FEVG.
- **Modalités du programme :** les bénéfices apparaissent comparables entre programmes à domicile et programmes en centre, quelles que soient la « dose » d'exercice, l'association ou non à une éducation globale, et l'ajout ou non de renforcement musculaire à l'endurance aérobie. Les auteurs soutiennent le développement des formats à domicile et accompagnés par le numérique.
- **Populations sous-représentées :** les personnes âgées et les femmes restent insuffisamment représentées dans ces essais.`,
    },
    {
      headingFr: 'L’essai HF-ACTION (2009) et l’effet sur le moral',
      bodyMarkdownFr: `**HF-ACTION** est le plus vaste essai randomisé individuel consacré à l'entraînement physique dans l'insuffisance cardiaque :

- **Population :** **2 331** patients ambulatoires stables avec **FEVG ≤ 35 %** et classe **NYHA II–IV**, aux États-Unis, au Canada et en France ; âge médian 59 ans, FEVG médiane **25 %**, dont **51 % d'origine ischémique** et environ **42 %** avec antécédent d'infarctus du myocarde. Environ **94 à 95 %** recevaient un bêtabloquant et un IEC ou ARA2 (aucun ARNI ni iSGLT2, non encore disponibles).
- **Protocole :** 36 séances supervisées en groupe (marche, tapis ou vélo, jusqu'à **30–35 minutes** à intensité modérée guidée par la fréquence cardiaque), suivies d'un programme à domicile visant **5 séances de 40 minutes par semaine**. Chaque participant passait d'abord un **test d'effort** afin de définir des fréquences cardiaques cibles sûres. Suivi médian de **30 mois**.
- **Adhésion décroissante :** la durée médiane d'exercice est passée à **95 minutes par semaine** entre les mois 4 et 6, **74 minutes** entre les mois 10 et 12, puis **50 minutes** en 3e année, sous l'objectif fixé. Seuls environ **30 %** des participants ont atteint la cible à un moment donné.
- **Critère principal (décès ou hospitalisation toutes causes) :** **65 % contre 68 %**, HR **0,93** (IC 95 % : **0,84–1,02**) — **non statistiquement significatif** en analyse brute. Mortalité toutes causes seule : **16 % contre 17 %**, HR **0,96** (IC 95 % : **0,79–1,17**).
- **Analyse ajustée préspécifiée** (ajustée sur la durée du test d'effort, la FEVG, le score de dépression et la fibrillation atriale) : HR **0,89** (IC 95 % : **0,81–0,99**), soit environ **11 %** de réduction sur le critère principal, et HR **0,85** (IC 95 % : **0,74–0,99**) sur le critère décès cardiovasculaire ou hospitalisation pour insuffisance cardiaque. Les auteurs qualifiaient l'effet d'« au mieux modeste ».
- **Capacité physique et symptômes :** gains modestes de capacité d'effort (**pic de VO2 en hausse d'environ 4 %**, inférieur aux 10 % espérés) et amélioration de la classe NYHA chez **30 % contre 25 %**.
- **Sécurité :** les événements graves (infarctus, angor instable, arythmie grave, AVC, aggravation de l'insuffisance cardiaque) étaient comparables ou légèrement moins fréquents avec l'exercice (**37,4 % contre 40,2 %**). Les décès pendant ou dans les 3 heures suivant un effort étaient identiques (**5 contre 5**), et les hospitalisations liées à une séance d'exercice étaient de **37 contre 22**. Les auteurs concluent que l'exercice structuré est sûr dans l'ICFER chronique stable.
- **Cause ischémique vs non ischémique :** l'effet était similaire chez les patients ischémiques (**HR 0,94**, IC 95 % : **0,82–1,08**) et non ischémiques (**HR 0,91**, IC 95 % : **0,78–1,05** ; aucune différence significative), de même qu'avec ou sans antécédent de revascularisation ou d'infarctus, et quelle que soit la FEVG au-dessus ou au-dessous de 25 %.
- **Nuances importantes :** le bénéfice statistiquement significatif repose sur l'analyse ajustée (préspécifiée mais secondaire), l'essai était ouvert, l'arrêt fréquent de l'exercice après la phase supervisée a probablement dilué l'effet, et l'étude s'est déroulée entre 2003 et 2007 avant l'arrivée des ARNI (sacubitril/valsartan) et des iSGLT2. Seuls des patients stables étaient inclus : ces données ne s'appliquent pas pendant une décompensation.

### Effet sur l'humeur et la dépression

Dans HF-ACTION, l'entraînement physique a également diminué les symptômes dépressifs à **3 mois** et à **12 mois**, y compris chez les patients présentant des symptômes sévères. Le bénéfice augmentait avec le temps d'activité hebdomadaire pour atteindre un plateau autour de **90 minutes par semaine** (données rapportées par la revue de Basile et al., 2023). La BHF souligne également les effets positifs de l'activité physique sur les symptômes, le moral, l'énergie et le sommeil.`,
    },
    {
      headingFr: 'Tai Chi, yoga et autres activités physiques douces',
      bodyMarkdownFr: `Une revue parapluie de 2025 consacrée à la médecine intégrative dans l'insuffisance cardiaque chronique (toutes FEVG et toutes causes ; **Chua et al., 2025**) a évalué les pratiques corps-esprit :

- **Tai Chi** (**15 essais**, **1 236 participants** ; séances de 15 à 60 minutes, 2 à 7 fois par semaine, pendant 3 à 12 mois, comparé aux soins usuels ou à la réadaptation cardiaque) : **moins d'hospitalisations**, **RR 0,47** (IC 95 % : **0,25–0,88**), avec une certitude **modérée** — ce résultat ne repose toutefois que sur **3 essais** totalisant **337 personnes**. La qualité de vie (**+8,5 points** au questionnaire Minnesota) et la distance au test de marche de 6 minutes (environ **+43 m**) s'amélioraient également, avec un niveau de certitude **faible**. La mortalité n'a pas pu être poolée (bien que le résumé et la carte de synthèse suggèrent le contraire). Aucun effet indésirable n'a été rapporté dans les deux essais qui les ont recherchés. Il s'agissait de la seule revue de qualité méthodologique modérée au sein de cette revue parapluie.
- **Données les plus proches de l'IC ischémique :** une méta-analyse en réseau de **15 essais** chez des patients présentant une maladie coronarienne et une insuffisance cardiaque (NYHA II–III) a montré que le Tai Chi associé à un exercice aérobie ou au Baduanjin obtenait de meilleurs classements que le Tai Chi seul pour la distance de marche, la qualité de vie et les marqueurs biologiques ; **2** effets indésirables mineurs (vertiges) ont été signalés.
- **Yoga** (**5 petits essais**, **206 personnes**) : augmentation du pic de consommation d'oxygène dans **2 essais** (59 personnes), sans effet clair sur la qualité de vie ni sur la distance de marche.
- **Ce qui reste inconnu :** on ne sait pas si le Tai Chi ou d'autres activités corps-esprit apportent un bénéfice supplémentaire **en plus** d'une réadaptation cardiaque standard. La plupart des essais étaient de petite taille et provenaient majoritairement de Chine.
- **En pratique dans l'ICFER ischémique :** le Tai Chi est une activité douce et à faible risque dont vous pouvez discuter avec votre équipe pour rester actif, mais il **ne remplace pas** un programme structuré de réadaptation cardiaque (SMR), qui repose sur les preuves les plus solides.`,
    },
    {
      headingFr: 'Repères pratiques en France et précautions',
      bodyMarkdownFr: `- **Accès en France (SMR cardiovasculaire) :** la réadaptation cardiaque s'effectue en service de **SMR (soins médicaux et de réadaptation, ex-SSR)** mention cardiovasculaire, en hospitalisation complète ou en **hôpital de jour**. Elle peut être prescrite directement par votre **médecin traitant** ou votre **cardiologue de ville**, comme à la sortie d'une hospitalisation. **Aucune demande d'accord préalable n'est requise et la prise en charge est assurée à 100 % par l'Assurance Maladie.** Malgré son intérêt reconnu, la HAS constate que le recours reste insuffisant en France.
- **Demander un avis avant de démarrer :** échangez avec votre cardiologue, votre médecin traitant ou votre infirmière insuffisance cardiaque / IPA pour définir le niveau d'effort adapté à votre situation et vérifier l'existence d'un centre SMR proche de chez vous.
- **Gérer la fatigue au quotidien :** fractionnez vos efforts, planifiez des moments de repos autour des journées exigeantes et demandez à votre équipe de rechercher d'autres causes possibles de fatigue.
- **Surveiller une perte de poids involontaire :** la HFA souligne qu'une perte de poids non intentionnelle (hors fonte d'œdèmes) supérieure à **5 % en 3 à 12 mois** constitue un signal précoce de fonte musculaire (cachexie). La fragilité touche environ **45 %** des personnes atteintes d'insuffisance cardiaque.`,
    },
  ],
  relatedArticleSlugs: [
    'vivre-avec-insuffisance-cardiaque',
    'depression-et-sante-emotionnelle',
    'poids-obesite-et-denutrition',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'vivre-avec-insuffisance-cardiaque-en-france',
    'tableau-preuves-nutrition-complements',
  ],
  sources: [
    {
      label: 'ESC 2026 — Recommandations Insuffisance Cardiaque',
      detail: 'Réadaptation cardiaque basée sur l’exercice recommandée en Classe I chez tous les patients stables.',
    },
    {
      label: 'Revue Cochrane 2024 (texte intégral — réadaptation cardiaque et insuffisance cardiaque)',
      detail:
        '60 essais (8 728 participants) : chiffres corrigés du forest plot, analyses limitées aux essais à faible risque de biais, résultats au-delà de 12 mois, comparaison centre vs domicile et données ExTraMATCH II selon l’étiologie et la FEVG.',
    },
    {
      label: 'Essai HF-ACTION (JAMA 2009, texte intégral)',
      detail:
        '2 331 patients stables en ICFER (51 % ischémiques) : protocole d’entraînement, adhésion jusqu’à 3 ans, tableau de sécurité, analyse ischémique vs non ischémique et résultats bruts/ajustés.',
    },
    {
      label: 'Chua et al. (2025) — Revue parapluie de médecine intégrative dans l’IC chronique (texte intégral)',
      detail: 'Tai Chi (hospitalisations RR 0,47 sur 3 essais, qualité de vie, marche 6 min), exercices chinois traditionnels et yoga.',
    },
    {
      label: 'HFA-ESC Position Paper (2020)',
      detail: 'Adaptation de l’exercice selon le stade de la maladie, fragilité (45 %) et signal d’alerte de perte de poids (> 5 %).',
    },
    {
      label: 'Basile et al. (2023)',
      detail: 'Effet de l’entraînement physique sur les symptômes dépressifs dans HF-ACTION (plateau autour de 90 min/semaine).',
    },
    {
      label: 'NICE NG106 (2025) & British Heart Foundation (BHF)',
      detail: 'Recommandation d’un programme personnalisé accessible ; conseils de fractionnement de l’effort.',
    },
    {
      label: 'HAS — Note de cadrage SMR cardiovasculaire (2023) & Fiche orientation (2024)',
      detail: 'Accès en SMR en France (hospitalisation complète ou de jour), prescription par la ville ou l’hôpital, remboursement à 100 % et faible taux de recours.',
    },
  ],
  disclaimerType: 'medical',
};
