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
    'renforcement-musculaire',
    'musculation',
    'endurance',
    'hiit',
    'fragilité',
    'rehab-hf',
    'smartex-hf',
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
    'Renforcement musculaire',
    'Musculation',
    'HIIT',
    'Entraînement fractionné',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "La réadaptation cardiaque basée sur l'exercice physique est un programme encadré, proposé en centre (SMR cardiovasculaire) ou à domicile, seul ou accompagné d'éducation thérapeutique. Dans les recommandations ESC 2026, elle est indiquée pour tous les patients stables (Classe I). Les données montrent qu'elle réduit les hospitalisations et améliore la qualité de vie ainsi que l'humeur, sans effet démontré sur la longévité — ces bénéfices étant plus modestes dans les essais les mieux conduits. Elle apparaît sûre dans l'insuffisance cardiaque stable à FEVG réduite, fonctionne de façon comparable en cas de cause ischémique ou non, et les programmes à domicile semblent aussi efficaces que ceux en centre. L'endurance aérobie reste la base, complétée par le renforcement musculaire (qui est sûr mais non supérieur à l'aérobie). Le Tai Chi et la réadaptation basée sur le yoga constituent des options douces complémentaires. Demandez à votre cardiologue ou à votre médecin traitant quel programme vous convient.",
  sections: [
    {
      headingFr: 'Ce que disent les recommandations',
      bodyMarkdownFr: `- **ESC 2026 :** la réadaptation cardiaque basée sur l'exercice est une recommandation de **Classe I pour tous les patients stables** : entraînement personnalisé au sein d'un programme multidisciplinaire de réadaptation (**Classe I, niveau B1**), activité physique au long cours hors réadaptation (**Classe I, niveau B2**), et réadaptation après une décompensation dès que cela est sûr (**Classe IIa, niveau B1**).
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
      headingFr: 'Endurance aérobie ou renforcement musculaire (musculation) ?',
      bodyMarkdownFr: `**En bref :** le renforcement musculaire (poids, machines, élastiques) est sûr dans l'insuffisance cardiaque stable et développe la forme physique ainsi que la force, mais il n'est **pas meilleur** que l'entraînement aérobie (marche, vélo). Les recommandations font de l'endurance aérobie le socle et y ajoutent le renforcement musculaire — qui peut toutefois servir de point de départ chez les personnes trop fragiles ou déconditionnées pour l'endurance.

- **Recommandations internationales :** l'**ESC 2020** (cardiologie du sport) précise que le renforcement musculaire complète mais ne remplace pas l'aérobie, avec des charges permettant **10 à 15 répétitions**. L'**AHA 2023** le recommande lorsque l'aérobie est impossible, en première étape chez les patients déconditionnés, et en association à l'aérobie dans les autres cas. L'**ESC 2026** place entraînement aérobie, renforcement musculaire et entraînement des muscles inspiratoires côte à côte dans une prescription personnalisée, sans en classer un au-dessus des autres.
- **Recommandations françaises (GERS-P / SFC 2023 et HAS 2022) :** le **GERS-P / SFC 2023** fait de l'endurance la base (**3 à 6 séances par semaine**, en continu ou fractionné) et ajoute du renforcement **2 à 3 fois par semaine** à **30–70 %** du maximum pour les bras et **40–80 %** pour les jambes. La **HAS 2022** recommande d'associer endurance et **« renforcement musculaire »**, tout en mentionnant les activités intenses et **« la musculation »** comme contre-indiquées dans l'insuffisance cardiaque sans définir ce terme : demandez toujours à votre équipe de réadaptation quelles charges conviennent à votre cœur.
- **Capacité d'effort (pic de VO2) :** le renforcement seul augmente le pic de VO2 d'environ **+2,6 mL/kg/min** face à l'absence d'entraînement (**Fisher 2022**, **Santos 2018**), un gain proche de l'aérobie. En comparaison directe, aucune modalité ne l'emporte (**Feiereisen 2007** dans l'IC ; **Hollings 2017** dans la maladie coronarienne).
- **Pompe cardiaque (FEVG) et volumes :** les gains de FEVG sont observés de façon constante avec l'entraînement aérobie (environ **+3,8 points**, et **+6,3 points** sur 6 mois ou plus ; **Tucker 2019**), et deux revues retrouvent une réduction des volumes du VG (**Haykowsky 2007**, **Santos 2018**). Avec le renforcement seul ou combiné, aucun gain de FEVG n'est démontré (sans que le faible nombre d'essais permette de l'exclure ; une méta-analyse en réseau de faible certitude, **Shi 2026**, classe toutefois le renforcement premier).
- **Associer les deux (entraînement combiné) :** ajouter du renforcement à l'endurance améliore la forme physique, la distance de marche de 6 minutes (**+48 m**) et la force du haut du corps (**+8,3 kg**) dans des essais majoritairement en ICFER (**Terada 2026**), sans modifier la qualité de vie ni la fonction cardiaque.
- **Essais cliniques et fragilité :** **HF-ACTION**, le seul grand essai sur les hospitalisations et la survie, a testé l'entraînement aérobie ; dans une analyse post-hoc de ses patients fragiles (**59 %**), l'entraînement aérobie était associé à moins d'hospitalisations ou de décès (**HR 0,83**). Chez les adultes âgés après une hospitalisation pour IC (**REHAB-HF**), travailler d'abord la force, l'équilibre et la mobilité puis l'endurance a amélioré la fonction physique, surtout chez les plus fragiles, mais avec un gain plus petit et moins certain en cas de FEVG réduite.
- **Entraînement fractionné à haute intensité (HIIT) :** dans le plus grand essai (**SMARTEX-HF**, **59 %** d'origine ischémique), le HIIT n'a pas fait mieux que l'endurance modérée continue sur la taille du VG, la FEVG ou le pic de VO2, et les gains ont disparu à 1 an après la fin de la supervision. Des méta-analyses d'essais plus petits (**Yang 2024**, **Chen 2025**) suggèrent un modeste avantage de capacité d'effort, surtout avec des intervalles **4 × 4 minutes**.
- Retrouvez l'analyse complète pour/contre dans l'article « Musculation versus entraînement aérobie en réadaptation cardiaque » (verdict : **thèse contredite**, confiance moyenne).`,
    },
    {
      headingFr: 'Tai Chi, yoga et autres activités physiques douces',
      bodyMarkdownFr: `Une revue parapluie de 2025 consacrée à la médecine intégrative dans l'insuffisance cardiaque chronique (toutes FEVG et toutes causes ; **Chua et al., 2025**) a évalué les pratiques corps-esprit :

- **Tai Chi** (**15 essais**, **1 236 participants** ; séances de 15 à 60 minutes, 2 à 7 fois par semaine, pendant 3 à 12 mois, comparé aux soins usuels ou à la réadaptation cardiaque) : **moins d'hospitalisations**, **RR 0,47** (IC 95 % : **0,25–0,88**), avec une certitude **modérée** — ce résultat ne repose toutefois que sur **3 essais** totalisant **337 personnes**. La qualité de vie (**+8,5 points** au questionnaire Minnesota) et la distance au test de marche de 6 minutes (environ **+43 m**) s'amélioraient également, avec un niveau de certitude **faible**. La mortalité n'a pas pu être poolée (bien que le résumé et la carte de synthèse suggèrent le contraire). Aucun effet indésirable n'a été rapporté dans les deux essais qui les ont recherchés. Il s'agissait de la seule revue de qualité méthodologique modérée au sein de cette revue parapluie.
- **Données les plus proches de l'IC ischémique :** une méta-analyse en réseau de **15 essais** chez des patients présentant une maladie coronarienne et une insuffisance cardiaque (NYHA II–III) a montré que le Tai Chi associé à un exercice aérobie ou au Baduanjin obtenait de meilleurs classements que le Tai Chi seul pour la distance de marche, la qualité de vie et les marqueurs biologiques ; **2** effets indésirables mineurs (vertiges) ont été signalés.
- **Yoga** (**5 petits essais**, **206 personnes**) : augmentation du pic de consommation d'oxygène dans **2 essais** (59 personnes), sans effet clair sur la qualité de vie ni sur la distance de marche.
- **Ce qui reste inconnu :** on ne sait pas si le Tai Chi ou d'autres activités corps-esprit apportent un bénéfice supplémentaire **en plus** d'une réadaptation cardiaque standard. La plupart des essais étaient de petite taille et provenaient majoritairement de Chine.
- **En pratique dans l'ICFER ischémique :** le Tai Chi est une activité douce et à faible risque dont vous pouvez discuter avec votre équipe pour rester actif, mais il **ne remplace pas** un programme structuré de réadaptation cardiaque (SMR), qui repose sur les preuves les plus solides.

### Nouveauté 2026 : le grand essai Yoga-CaRe HF

- **Yoga-CaRe HF** (congrès AHA, novembre 2026) a randomisé **3 492 personnes** atteintes d'ICFER dans 16 centres en Inde (âge médian **57 ans**, **27 %** de femmes) entre **20 séances** supervisées de réadaptation basée sur le yoga sur 3 mois puis séances d'entretien, ou prise en charge standard renforcée.
- La qualité de vie s'est améliorée de **8,1 points** au questionnaire Minnesota (MLHFQ) à 3 mois (**p < 0,001**), et la distance de marche de 6 minutes a augmenté de **25,5 m**.
- Le critère combiné décès, hospitalisation ou AVC n'a pas diminué de façon significative (**21,0 % contre 22,8 %**, **HR 0,90**, IC 95 % : **0,78–1,04**, suivi médian de **15 mois**).
- *Limites :* données présentées en congrès, non encore publiées après relecture par les pairs ; population plus jeune que la moyenne, seuil exact de FEVG et proportion d'origine ischémique non communiqués. L'essai confirme l'intérêt d'une réadaptation structurée en partie à domicile pour les symptômes et la capacité fonctionnelle, mais pas pour la survie.`,
    },
    {
      headingFr: 'Repères pratiques en France et précautions',
      bodyMarkdownFr: `- **Accès en France (SMR cardiovasculaire et relais APA) :** la réadaptation cardiaque s'effectue en service de **SMR (soins médicaux et de réadaptation, ex-SSR)** mention cardiovasculaire, en hospitalisation complète ou en **hôpital de jour**. Elle peut être prescrite directement par votre **médecin traitant** ou votre **cardiologue de ville**, comme à la sortie d'une hospitalisation. **Aucune demande d'accord préalable n'est requise et la prise en charge est assurée à 100 % par l'Assurance Maladie.** Malgré son intérêt reconnu, la HAS constate que le recours reste insuffisant en France. À l'issue du programme SMR, la poursuite de l'activité au long cours peut s'appuyer sur une prescription d'**Activité Physique Adaptée (APA)** et sur les **Maisons Sport-Santé** (voir *Réseau de soins et aides sociales en France*), et les centres SMR proposent aussi un accompagnement au sevrage tabagique (voir *Tabac et alcool dans l'insuffisance cardiaque*).
- **Évaluation initiale et avis médical avant de démarrer :** comme dans l'essai HF-ACTION, un bilan d'effort préalable — idéalement une **épreuve d'effort cardiorespiratoire (EFX / CPET)** lorsque disponible (voir *EFX, strain, troponine et imagerie cardiaque*) — aide à fixer des zones de fréquence cardiaque et d'intensité sûres. Échangez avec votre cardiologue, votre médecin traitant ou votre infirmière insuffisance cardiaque / IPA pour définir le niveau d'effort adapté à votre situation et vérifier l'existence d'un centre SMR proche de chez vous.
- **Gérer la fatigue au quotidien :** fractionnez vos efforts, planifiez des moments de repos autour des journées exigeantes et demandez à votre équipe de rechercher d'autres causes possibles de fatigue.
- **Surveiller une perte de poids involontaire :** la HFA souligne qu'une perte de poids non intentionnelle (hors fonte d'œdèmes) supérieure à **5 % en 3 à 12 mois** constitue un signal précoce de fonte musculaire (cachexie). La fragilité touche environ **45 %** des personnes atteintes d'insuffisance cardiaque.`,
    },
  ],
  relatedArticleSlugs: [
    'musculation-vs-endurance-readaptation-cardiaque',
    'efx-strain-troponine-et-imagerie-cardiaque',
    'reseau-de-soins-et-aides-sociales-france',
    'tabac-et-alcool-insuffisance-cardiaque',
    'goutte-bpco-thyroide-et-autres-comorbidites',
    'anevrisme-ventricule-gauche',
    'cafeine-boissons-energisantes-et-stimulants',
    'essais-cliniques-en-cours-et-a-suivre',
    'vivre-avec-insuffisance-cardiaque',
    'depression-et-sante-emotionnelle',
    'poids-obesite-et-denutrition',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'vivre-avec-insuffisance-cardiaque-en-france',
    'tableau-preuves-nutrition-complements',
    'recommandations-comparees-esc-us-nice',
  ],
  sources: [
    {
      label: 'ESC 2026 — Recommandations Insuffisance Cardiaque (section exercice, tableau 24)',
      detail: 'Réadaptation cardiaque personnalisée en Classe I (B1), exercice au long cours Classe I (B2), post-décompensation Classe IIa (B1) et prescription FITT.',
    },
    {
      label: 'Recommandations ESC 2020 (cardiologie du sport), AHA 2023, GERS-P/SFC 2023 et HAS 2022',
      detail: 'Place complémentaire du renforcement musculaire, charges (10–15 répétitions ; 30–70 % bras, 40–80 % jambes) et repères français de prescription d’activité physique.',
    },
    {
      label: 'Revue Cochrane 2024 (texte intégral — réadaptation cardiaque et insuffisance cardiaque)',
      detail:
        '60 essais (8 728 participants) : chiffres corrigés du forest plot, analyses limitées aux essais à faible risque de biais, résultats au-delà de 12 mois, comparaison centre vs domicile et données ExTraMATCH II selon l’étiologie et la FEVG.',
    },
    {
      label: 'Essai HF-ACTION (JAMA 2009, texte intégral) et analyse fragilité (Pandey 2022)',
      detail:
        '2 331 patients stables en ICFER (51 % ischémiques) : protocole d’entraînement, adhésion jusqu’à 3 ans, tableau de sécurité, analyse ischémique vs non ischémique, résultats bruts/ajustés et sous-groupe fragile.',
    },
    {
      label: 'Méta-analyses et essais sur les modalités d’entraînement (Tucker 2019, Haykowsky 2007, Santos 2018, Fisher 2022, Feiereisen 2007, Hollings 2017, Terada 2026, Shi 2026)',
      detail: 'Effets comparés de l’aérobie, du renforcement musculaire et de l’entraînement combiné sur le pic de VO2, la FEVG, les volumes du VG et la force.',
    },
    {
      label: 'REHAB-HF (NEJM 2021 et par FEVG Mentz 2021), SMARTEX-HF (Circulation 2017), Yang (2024) et Chen (2025)',
      detail: 'Réadaptation multidomaine des patients âgés fragiles et comparaison HIIT versus entraînement modéré continu dans l’ICFER.',
    },
    {
      label: 'Chua et al. (2025) — Revue parapluie de médecine intégrative (texte intégral) et Yoga-CaRe HF (AHA 2026)',
      detail: 'Tai Chi (hospitalisations RR 0,47 sur 3 essais), exercices chinois traditionnels et grand essai randomisé Yoga-CaRe HF chez 3 492 patients ICFER.',
    },
    {
      label: 'HFA-ESC Position Paper (2020), Basile et al. (2023), NICE NG106 (2025) et BHF',
      detail: 'Adaptation selon le stade, fragilité (45 %), dépression (plateau à 90 min/semaine) et fractionnement de l’effort.',
    },
    {
      label: 'HAS — Note de cadrage SMR cardiovasculaire (2023) & Fiche orientation (2024)',
      detail: 'Accès en SMR en France (hospitalisation complète ou de jour), prescription par la ville ou l’hôpital, remboursement à 100 % et faible taux de recours.',
    },
  ],
  disclaimerType: 'medical',
};
