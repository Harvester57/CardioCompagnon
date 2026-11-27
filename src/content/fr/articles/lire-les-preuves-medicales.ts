import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'lire-les-preuves-medicales',
  sourceWikiPath: 'wiki/references/reading-medical-evidence.md',
  titleFr: 'Comment lire les preuves médicales et les essais cliniques',
  category: 'references',
  readingTier: 'reference',
  asOf: '2026-11-26',
  confidence: 'high',
  volatility: 'stable',
  tags: [
    'methodologie',
    'lire-les-preuves',
    'risque-absolu',
    'risque-relatif',
    'nnt',
    'hazard-ratio',
    'intervalle-de-confiance',
    'criteres-composites',
    'win-ratio',
    'criteres-intermediaires',
    'sous-groupes',
    'biais',
    'grade',
    'classes-recommandations',
    'applicabilite',
    'education-therapeutique',
  ],
  aliases: [
    'Comment lire un essai clinique',
    'Lire les études médicales',
    'Comprendre les preuves scientifiques',
    'NNT et rapport de risque expliqués',
    'Interpréter une étude en cardiologie',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Les articles de cardiologie citent souvent des pourcentages, des noms d'essais cliniques ou des niveaux de recommandation difficiles à interpréter. Ce guide vous explique en langage clair comment mesurer l'ampleur réelle d'un effet, repérer les limites d'une étude et vérifier si un résultat s'applique à votre situation. Il vous aide à mieux comprendre vos lectures et à préparer vos questions avec votre équipe de cardiologie.",
  keyTakeawaysFr: [
    "Un pourcentage de réduction relatif ne suffit pas : demandez toujours les chiffres absolus (combien de personnes sur 100 ou sur 1 000, et sur quelle durée).",
    "L'intervalle de confiance renseigne sur la précision d'un résultat ; s'il inclut l'absence d'effet, une prudence s'impose quel que soit le titre d'un communiqué.",
    "La méthode compte autant que le chiffre : randomisation, double aveugle, arrêt précoce, changement de critère et test d'interaction en sous-groupe changent fortement la confiance.",
    "Une étude bien conduite peut ne pas s'appliquer directement à vous si la FEVG, la cause ischémique ou les traitements de fond de l'époque diffèrent des vôtres.",
  ],
  sections: [
    {
      headingFr: 'Six questions simples avant de vous fier à un résultat',
      bodyMarkdownFr: `Les fiches de cette bibliothèque citent fréquemment des résultats d'essais cliniques (« réduction de 20 % », « HR 0,84 », « Classe IIa, niveau B1 », « partiellement direct »). Six questions suffisent pour décrypter la majorité d'entre eux :

1. **Quelle est l'ampleur réelle en chiffres absolus ?** « 20 % d'hospitalisations en moins » peut représenter 2 personnes sur 100 ou 20 sur 1 000.
2. **Quelle est la marge d'incertitude ?** Regardez l'intervalle de confiance, pas seulement la valeur *p*.
3. **Qu'a-t-on réellement mesuré ?** Des décès, des hospitalisations, des symptômes ou un simple marqueur biologique ?
4. **Autre chose que le traitement pourrait-il expliquer le résultat ?** Randomisation, aveugle, arrêt précoce, financement et sous-groupes pèsent lourd.
5. **Cela s'applique-t-il à votre profil ?** Qui a été inclus, à quelle époque et avec quels autres médicaments ?
6. **Que disent les recommandations, et avec quelle force ?**

Ce guide sert à **lire** les preuves, non à décider seul : l'application à votre situation personnelle se discute toujours avec votre cardiologue.`,
    },
    {
      headingFr: '1. Comprendre les chiffres',
      bodyMarkdownFr: `### Risque relatif et risque absolu

Une variation **relative** compare deux groupes sous forme de ratio ; une variation **absolue** est la différence directe entre deux pourcentages. Passer de 4 % à 3 % représente une baisse relative de 25 %, mais une baisse absolue de 1 point de pourcentage (Manuel Cochrane, chap. 15). Les effets relatifs restent souvent stables d'un patient à l'autre, tandis que les effets absolus dépendent de votre risque de départ : un même traitement apporte un gain absolu plus important lorsque le risque initial est plus élevé (déclaration PATH 2020).

**Exemple concret (oméga-3 et fibrillation atriale) :** à environ 1 g/jour, les capsules d'oméga-3 étaient associées à une hausse relative d'environ 10 % de fibrillation atriale (FA) dans deux essais. Chez des adultes sains (VITAL Rhythm, taux de FA ~0,7 %/an), cela représentait environ **0,6 cas supplémentaire pour 1 000 personnes-années**. Dans l'insuffisance cardiaque (GISSI-HF, taux de FA ~3,7 %/an), la même hausse relative correspondait à 15,2 % vs 14,0 % sur ~4 ans, soit environ **12 à 14 cas supplémentaires pour 1 000 personnes** (aucune des deux différences n'étant significative isolément).

*Astuce :* retraduisez les pourcentages en « sur 1 000 personnes comme moi, pendant N années », plus faciles à apprécier intuitivement.

### Nombre de patients à traiter (NNT) et à nuire (NNH)

Le **NNT** indique combien de personnes doivent recevoir le traitement (plutôt que le comparateur) pour qu'**une personne supplémentaire** bénéficie du résultat, **sur une durée donnée** (100 divisé par la différence absolue en points). Le **NNH** applique la même logique aux effets indésirables. Un NNT est une moyenne statistique et n'a de sens qu'avec sa durée et le risque initial de la population étudiée.

| Exemple issu de la bibliothèque | Différence absolue | NNT ou NNH (durée) |
|---|---|---|
| **STICHES** : pontage + médicaments vs médicaments seuls, FEVG ≤ 35 % | Décès 58,9 % vs 66,1 % : 7,2 points | NNT d'environ 14 sur ~10 ans |
| **GISSI-HF** : oméga-3 1 g/jour dans l'IC chronique | Décès 27 % vs 29 % | NNT 56 sur 3,9 ans (avant traitements modernes) |
| **GISSI-HF** : même essai, nouvelle FA | 15,2 % vs 14,0 % (non significatif) | NNH d'environ 70 à 85 sur ~4 ans, si l'effet est réel |

On ne peut pas comparer directement des NNT issus d'essais de durées différentes.

### Rapport de risque instantané (Hazard Ratio, HR)

La plupart des essais d'insuffisance cardiaque publient un **HR** : il compare la vitesse de survenue d'un événement **à tout instant** du suivi entre le groupe traité et le groupe témoin. Un HR de 0,80 signifie un taux d'événements inférieur de 20 % tout au long du suivi (en supposant ce rapport relativement constant dans le temps).

Un HR n'est **pas** identique à un risque relatif en fin d'étude. Dans STICHES, un HR de 0,84 correspondait à 58,9 % vs 66,1 % de décès à 10 ans (soit -11 % en relatif et -7,2 points en absolu). De même, un **odds ratio (OR)** surestime l'effet lorsqu'on le lit comme un risque relatif pour des événements fréquents. Cherchez toujours les taux d'événements de chaque groupe.

### Intervalle de confiance (IC 95 %) et valeur *p*

L'**intervalle de confiance à 95 %** indique la plage de valeurs compatibles avec les données : étroit, il traduit une estimation précise ; large, une incertitude importante. S'il traverse **1** (pour un ratio comme HR, RR ou OR) ou **0** (pour une différence), l'hypothèse « aucun effet » reste compatible avec les données.

La **valeur *p*** mesure la probabilité d'observer un écart au moins aussi grand si le traitement n'avait aucun effet réel. Ce n'est ni la probabilité que le traitement marche, ni une mesure de la taille de l'effet : un très grand essai peut rendre un effet minime « significatif », et un petit essai peut manquer un effet réel.

- **Non significatif ne veut pas dire « aucun effet » :** dans VEST (gilet défibrillateur post-infarctus), la mort arythmique était de 1,6 % vs 2,4 % (RR 0,67 ; p = 0,18) — un chiffre plus bas, mais compatible avec le hasard.
- **Significatif ne veut pas dire « prouvé » :** dans Q-SYMBIO (coenzyme Q10), le HR de 0,50 (0,32–0,80) reposait sur seulement 87 événements ; en analyse du pire scénario, il passait à HR 0,64 (borne haute 0,98, tout juste sous 1).
- **Les seuils fixés à l'avance comptent :** FAIR-HF2 (fer IV) a obtenu p = 0,04 mais exigeait ≤ 0,0167 selon son plan statistique ; il est donc formellement neutre. HEART-FID exigeait p < 0,01.

### Critères composites et « win ratio »

Les essais d'insuffisance cardiaque regroupent souvent « **décès cardiovasculaire ou hospitalisation pour insuffisance cardiaque** » en un seul critère composite. Dans 114 essais cardiovasculaires, les composantes moins graves étaient plus fréquentes et montraient des effets plus forts (baisse relative de 8 % pour les décès contre 33 % pour les événements mineurs ; Ferreira-Gonzalez 2007). Demandez toujours **quelle composante** porte le résultat : dans SHIFT (ivabradine), le composite (HR 0,82) était porté par les hospitalisations, sans baisse significative des décès cardiovasculaires (HR 0,91) ; de même pour le fer IV.

Les essais récents utilisent parfois un **win ratio** (ratio de victoires hiérarchique : décès d'abord, puis hospitalisations, puis symptômes ou biomarqueurs). Ce n'est pas un risque relatif, il ignore les égalités et doit s'accompagner de la **différence de victoires** et du détail de chaque niveau : ainsi, dans EMPEROR-Preserved, la différence de victoires n'était que de 1,9 % avec 75,6 % d'égalités ; dans DAPA-MI, la perte de poids expliquait l'essentiel du gain plutôt que les décès ou hospitalisations (Pocock 2024). Dans HEART-FID, le win ratio (1,10 ; IC 99 % 0,99–1,23) était formellement neutre.

### Critères intermédiaires et risques concurrents

Un **critère intermédiaire** (FEVG, NT-proBNP, volume du ventricule, extrasystoles) ne garantit pas un bénéfice clinique : dans CAST, des médicaments supprimant les extrasystoles après infarctus ont augmenté la mortalité ; des inotropes augmentant la FEVG (milrinone, floséquinan) ont également accru les décès (Fleming, IOM 2011). La FEVG et le NT-proBNP sont précieux pour votre suivi, mais un traitement qui n'améliore que ces marqueurs n'a pas encore prouvé qu'il prolonge ou améliore la vie.

Enfin, en présence de **risques concurrents** (décéder d'une autre cause empêche la survenue de l'événement étudié), la méthode statistique classique de Kaplan-Meier surestime le risque spécifique : sur 16 237 patients ontariens avec IC, elle estimait la mortalité cardiovasculaire à 5 ans à 43,0 % contre 36,8 % avec la méthode adaptée (Austin, Lee, Fine 2016). La **mortalité toutes causes** reste le critère impossible à tromper ainsi.`,
    },
    {
      headingFr: '2. Méthode et biais : ce qui peut fausser un résultat',
      bodyMarkdownFr: `### Essai randomisé vs étude observationnelle

Dans un **essai contrôlé randomisé (ECR)**, le tirage au sort répartit les traitements afin que les groupes soient comparables. Dans une **étude observationnelle**, les médecins ou les patients choisissent, ce qui introduit des biais majeurs :

- **Biais d'indication :** les patients les plus malades reçoivent plus souvent un traitement, ce qui peut le faire paraître nocif. Une analyse de dossiers électroniques (TriNetX) associant fer IV et iSGLT2 a trouvé un HR de 1,41–1,56 pour les événements graves, sans pouvoir prouver une causalité.
- **Effet « bon observant » (*healthy adherer*) :** les personnes qui prennent rigoureusement un traitement ont souvent une meilleure hygiène de vie globale. Dans les essais, prendre fidèlement un **placebo** est associé à une mortalité presque réduite de moitié (OR 0,56 ; Simpson 2006). C'est pourquoi les études observationnelles sur les compléments alimentaires paraissent souvent positives avant d'échouer en essai randomisé.

### Double aveugle, arrêt précoce et changement de critère

- **Aveugle :** dans un essai **en ouvert** (où patient et médecin connaissent le traitement), les scores de symptômes, les décisions d'hospitalisation et les croisements peuvent être influencés. Le schéma PROBE garde au moins un comité d'adjudication en aveugle (comme dans IRONMAN, où 17 % du groupe témoin a tout de même reçu du fer IV).
- **Arrêt précoce et petits effectifs :** les essais arrêtés tôt pour bénéfice surestiment l'effet d'environ 29 % en moyenne, surtout sous 500 événements (Bassler 2010). Q-SYMBIO s'est arrêté à 420 patients sur 550 prévus (87 événements), d'où son statut générateur d'hypothèses.
- **Changement de critère et critères secondaires :** le critère principal doit être enregistré avant l'analyse (CONSORT 2025). FAIR-HF2 a modifié son critère principal en aveugle et reste formellement neutre. Un critère **secondaire** positif après un critère principal neutre est un indice, non une preuve (comme la mortalité CV dans VICTOR).

### Sous-groupes, non-infériorité, financement et méta-analyses

- **Sous-groupes (outil ICEMAN) :** deux résultats différents entre sous-groupes ne prouvent pas une différence réelle sans **test d'interaction** crédible, hypothèse préspécifiée et nombre limité de tests (Schandelmaier 2020). Dans FAIR-HF2, ischémique (HR 0,85) vs non ischémique (HR 0,61) donnait un p d'interaction de 0,17–0,35 : aucune différence démontrée. Q-SYMBIO Europe est une analyse post hoc sans test d'interaction, laissant le reste du monde quasi nul (20 vs 24 événements).
- **Non-infériorité :** vise à montrer qu'une option plus simple ou mieux tolérée n'est « pas inacceptablement moins bonne » (ex. PRAETORIAN pour le défibrillateur sous-cutané : 15,1 % vs 15,7 %). « Non inférieur » ne signifie pas supérieur.
- **Financement, communiqués et prépublications :** les études financées par l'industrie rapportent plus souvent des conclusions favorables (RR 1,34 ; Cochrane 2017) : c'est une raison de lire les chiffres eux-mêmes, pas de rejeter automatiquement l'étude. Les communiqués de presse exagèrent fréquemment (Sumner 2014), et les congrès ou prépublications ne sont pas encore évalués par les pairs.
- **Méta-analyses :** leur fiabilité dépend des études incluses. Un regroupement souvent cité sur la CoQ10 mêlait des seniors suédois en bonne santé (KISEL-10) et une étude pédiatrique ; limité à l'ICFER, l'effet sur la mortalité n'était plus significatif (RR 0,68 ; 0,45–1,03) et disparaissait sans Q-SYMBIO.`,
    },
    {
      headingFr: '3. Classes et niveaux de preuve des recommandations',
      bodyMarkdownFr: `Les recommandations distinguent deux notions : la **force** de la recommandation (classe) et la **qualité des preuves** (niveau). Une recommandation de Classe I peut reposer sur un niveau C (consensus d'experts), comme les conseils d'hygiène de vie au stade B dans l'ESC 2026.

| Force / Qualité | ESC (Europe ; IC 2026) | ACC/AHA (États-Unis ; IC 2022) |
|---|---|---|
| **Recommandation forte** | **Classe I** : recommandé | **COR 1** : fort |
| **Modérée** | **Classe IIa** : doit être envisagé | **COR 2a** : modéré |
| **Faible** | **Classe IIb** : peut être envisagé | **COR 2b** : faible |
| **Déconseillé / nocif** | **Classe III** : non recommandé | **COR 3 : No Benefit** ou **3 : Harm** |
| **Meilleure preuve** | **Niveau A** : concluant (≥ 2 ECR de puissance adéquate) | **LOE A** : plusieurs ECR de haute qualité |
| **Preuve intermédiaire** | **Niveau B1** : ≥ 1 ECR de puissance adéquate ; **B2** : études non randomisées contrôlées ou méta-analyse de petits ECR | **LOE B-R** : randomisé ; **LOE B-NR** : non randomisé |
| **Preuve limitée** | **Niveau C** : données préliminaires, petit essai ou consensus d'experts | **LOE C-LD** : données limitées ; **C-EO** : avis d'experts |

L'ESC 2026 est la première recommandation européenne d'insuffisance cardiaque à diviser le niveau B en **B1** et **B2** (les textes antérieurs et tableaux diagnostiques gardent A/B/C). **GRADE** est une troisième échelle (certitude élevée, modérée, faible ou très faible) utilisée notamment par Cochrane : ne la confondez pas avec les niveaux ESC. Enfin, le silence d'une recommandation (« non mentionné ») n'équivaut pas à une contre-indication (Classe III).`,
    },
    {
      headingFr: "4. Ce résultat s'applique-t-il à votre situation ?",
      bodyMarkdownFr: `Un essai rigoureux peut ne pas répondre directement à votre cas (validité externe, Rothwell 2005). Les repères de cette bibliothèque concernent en priorité une **cardiomyopathie ischémique avec FEVG autour de 35 % sous quadrithérapie moderne**. Six points permettent d'évaluer la proximité d'un essai :

| Point de vérification | Pourquoi cela compte | Exemple dans la bibliothèque |
|---|---|---|
| **Population et seuil de FEVG** | Les essais à FEVG > 40 % ou préservée ne se transposent pas toujours | ORBITA-CTO (FEVG médiane 55 %) : jugé extrapolé pour une FEVG à 35 % |
| **Part ischémique** | Certains effets varient selon la cause (ex. DAI) | MADIT-II (100 % ischémique) vs SCD-HeFT (mixte, partiellement direct) |
| **Époque et traitement de fond** | Les essais anciens précèdent ARNI et iSGLT2 ; les taux d'événements ont chuté | Pool REVIVED + STICHES : risque sous médicaments seuls nettement plus bas dans l'essai récent (HR ajusté 0,60) |
| **Gravité et contexte** | Hôpital aigu vs ambulatoire stable ; classe NYHA | AFFIRM-AHF incluait des patients à la sortie d'une décompensation aiguë |
| **Critère étudié** | Marqueur biologique vs décès ou hospitalisation | Voir section 1 |
| **Critères d'inclusion vs vie réelle** | Seul environ 1 patient sur 3 du registre suédois SwedeHF remplissait tous les critères de DAPA-HF (35 %) ou EMPEROR-Reduced (31 %), bien que ~80 % relèvent de l'indication | Registre SwedeHF (Thorvaldsen 2022) |

Ne pas remplir tous les critères d'un essai ne signifie pas qu'un traitement est inefficace, mais que la preuve est moins directe. Par défaut, si la maladie et sa sévérité sont proches, on s'attend à une réponse comparable sauf raison précise de penser le contraire.

### Étiquettes d'applicabilité et verdicts des enquêtes

- **Direct :** la population correspond étroitement à l'ICFER ischémique autour de 35 % de FEVG.
- **Partiellement direct (ou Partiel) :** chevauchement réel, mais un élément clé diffère (souvent le traitement de fond ou une cause mixte).
- **Indirect :** population différente, reliée par un mécanisme ou un groupe plus large.
- **Extrapolé :** aucun patient comparable inclus, ou FEVG non mesurée.

Les analyses thématiques (thèses) confrontent les preuves **pour** et **contre**, vérifient l'intégrité des essais (changements de critère, arrêt précoce, sous-groupes, financement) et aboutissent à un verdict gradué (**Étayé**, **Partiellement étayé**, **Mitigé**, **Preuves insuffisantes**, **Partiellement contredit**, **Contredit**) accompagné d'un niveau de confiance. « Preuves insuffisantes » signifie que la question n'a pas encore été testée assez solidement, et non que le traitement est réfuté.`,
    },
    {
      headingFr: '5. Trois exemples commentés',
      bodyMarkdownFr: `### Coenzyme Q10 et survie : preuves insuffisantes (confiance moyenne)

- **Chiffres :** le HR principal de 0,50 repose sur 87 événements ; en analyse du pire scénario, la borne haute atteint 0,98.
- **Méthode :** arrêt précoce à 420/550 patients pour recrutement lent, cofinancement par des fabricants, échec des co-critères à 16 semaines, aucun changement de FEVG ni de NT-proBNP.
- **Méta-analyse :** le gain de mortalité dépendait d'un essai chez des seniors sains (KISEL-10) et de Q-SYMBIO seul ; restreint à l'ICFER, RR 0,68 (0,45–1,03).
- **Applicabilité :** 0 % sous ARNI ou iSGLT2, sans sous-groupe ischémique (partiel). Non classé « contredit » car de grands essais modernes (CORAL, DANUTRIO-HF, SELEQT-HF) sont en cours.

### Fer intraveineux sous traitement moderne : partiellement étayé (confiance moyenne)

- **Chiffres :** environ 20 % d'hospitalisations IC en moins sur 6 essais (7 175 patients) ; une méta-analyse indépendante retrouve 25 personnes de moins pour 1 000 avec au moins une hospitalisation IC (RR 0,89 ; 0,80–0,99), sans gain de survie prouvé.
- **Méthode :** chaque grand essai a manqué son propre seuil principal formel (changement de critère en aveugle dans FAIR-HF2, essai ouvert avec croisements dans IRONMAN, win ratio 1,10 dans HEART-FID).
- **Sous-groupes et applicabilité :** aucune différence crédible entre cause ischémique et non ischémique ; le bénéfice se concentre si le coefficient de saturation de la transferrine (CST) est < 20 %. Seuls ~7 % des patients prenaient un iSGLT2 (direct sur FEVG/cause, partiel sur quadrithérapie moderne).

### Oméga-3 à faible dose et fibrillation atriale : sécurité partiellement contredite (confiance moyenne)

- **Chiffres :** aucun essai isolé à faible dose n'était significatif, mais les estimations poolées se situent de façon cohérente entre HR 1,07 et 1,12 dans la même direction. De petits effets constants d'un essai à l'autre comptent même sans significativité individuelle.
- **Risque absolu et autorités :** faible hausse absolue chez l'adulte sain, plus marquée dans l'IC où la FA est fréquente ; les agences européenne, française (ANSM) et britannique mentionnent la FA comme effet indésirable fréquent des oméga-3 sur ordonnance.
- **Applicabilité :** le seul essai d'IC (GISSI-HF) est antérieur aux traitements modernes et à moitié non ischémique (partiel).`,
    },
    {
      headingFr: 'Liste de contrôle rapide face à une nouvelle étude',
      bodyMarkdownFr: `Avant de tirer une conclusion d'un article de presse ou d'un résumé scientifique, vérifiez ces huit points :

1. Quels sont les taux d'événements dans chaque groupe, et sur quelle durée ?
2. Quel est l'intervalle de confiance ? Inclut-il l'absence d'effet ?
3. Quel critère a été mesuré (décès, hospitalisation, symptômes ou marqueur) et quelle part d'un critère composite porte le résultat ?
4. L'étude était-elle randomisée, en double aveugle, menée à son terme et fidèle à son critère initial ?
5. S'agit-il de l'essai entier ou d'un sous-groupe, et existe-t-il un test d'interaction ?
6. Qui l'a financée, et s'agit-il d'un communiqué de presse, d'une prépublication, d'un résumé ou d'un article complet relu par les pairs ?
7. Qui a été inclus (FEVG, cause ischémique, époque, traitements de fond) ?
8. Que disent les recommandations ESC et ACC/AHA, et avec quelle classe et quel niveau de preuve ?`,
    },
  ],
  relatedArticleSlugs: [
    'essais-cliniques-cles',
    'recommandations-comparees-esc-us-nice',
    'glossaire-cardiologie',
    'questions-equipe-cardiologie',
    'tableau-preuves-nutrition-complements',
    'these-coq10-mortalite-icfer-moderne',
    'these-fer-iv-et-isglt2-quadritherapie',
    'these-omega3-faible-dose-risque-fa',
    'fraction-dejection',
    'examens-et-chiffres',
  ],
  sources: [
    {
      label: 'Manuel Cochrane (chap. 6 et 15), GRADE (Balshem 2011 ; Guyatt 2011) et CONSORT 2025 (Hopewell 2025)',
      detail: 'Interprétation des risques absolus et relatifs, NNT, HR, intervalles de confiance, certitude GRADE et transparence des protocoles',
    },
    {
      label: 'Méthodologie cardiovasculaire : Pocock 2024 (win ratio), Ferreira-Gonzalez 2007 (composites), Austin/Lee/Fine 2016 (risques concurrents), Fleming/IOM 2011 (critères intermédiaires)',
      detail: 'Limites des critères composites, du win ratio, des marqueurs de substitution et des estimations en présence de risques concurrents',
    },
    {
      label: 'Biais et validité externe : Bassler 2010, ICEMAN 2020 (Schandelmaier), Lundh 2017 (Cochrane), Sumner 2014, Simpson 2006, Rothwell 2005, PATH 2020, SwedeHF 2022, PRECIS-2',
      detail: 'Arrêt précoce, crédibilité des sous-groupes, financement, effet bon observant, communiqués de presse et transposabilité en vie réelle',
    },
    {
      label: 'Grilles de recommandations ESC 2026 (niveaux A/B1/B2/C) et AHA/ACC/HFSA 2022',
      detail: 'Correspondance des classes de recommandation et niveaux de preuve en cardiologie européenne et américaine',
    },
  ],
  disclaimerType: 'medical',
};
