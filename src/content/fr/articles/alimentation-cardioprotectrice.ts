import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'alimentation-cardioprotectrice',
  sourceWikiPath: 'wiki/concepts/heart-healthy-eating-patterns.md',
  titleFr: 'Alimentation cardioprotectrice (modèle méditerranéen)',
  category: 'nutrition',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'alimentation-méditerranéenne',
    'régime-dash',
    'alimentation',
    'prévention-secondaire',
    'maladie-coronaire',
    'cordioprev',
    'aliments-ultra-transformés',
    'gourmet-hf',
    'food-hf',
    'café',
    'noix',
    'stérols-végétaux',
  ],
  aliases: [
    'Régime méditerranéen',
    'Régime DASH',
    'Alimentation pour le cœur',
    'Alimentation maladie coronaire',
    'Café et caféine',
    'Aliments ultra-transformés',
    'Fruits à coque',
    'Stérols végétaux',
    'Repas médicalisés livrés',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "La cardiomyopathie ischémique comporte deux volets : des artères coronaires rétrécies et un muscle cardiaque affaibli. Une alimentation de type méditerranéen (légumes, légumineuses, poisson, fruits à coque, huile d'olive vierge extra, peu d'aliments transformés) dispose des meilleures preuves globales pour protéger les artères coronaires : dans l'essai CORDIOPREV sur 7 ans, elle a réduit d'environ un quart les événements cardiovasculaires majeurs par rapport à un régime pauvre en graisses (87 contre 111 événements), sans effet démontré sur la mortalité. Les analyses groupées (BMJ 2023) montrent que les programmes méditerranéens et pauvres en graisses réduisent tous deux décès et infarctus comparés à une intervention minimale ; la Haute Autorité de Santé (HAS, octobre 2026) retient une recommandation faible en faveur du régime méditerranéen dans la maladie coronaire ; et une revue parapluie de 2024 retrouve moins d'AVC de façon régulière, mais une certitude faible sur la mortalité. En revanche, aucun régime n'est prouvé pour réduire les hospitalisations ou la mortalité dans l'ICFER établie. Le café modéré paraît neutre ou favorable sur la fibrillation atriale hors ICFER, les noix aident le versant coronaire, les produits ultra-transformés sont associés à un pronostic cardiovasculaire moins favorable, et les stérols végétaux abaissent modestement le LDL sans preuve sur les événements.",
  sections: [
    {
      headingFr: 'Le modèle méditerranéen : CORDIOPREV, HAS et méta-analyses',
      bodyMarkdownFr: `### CORDIOPREV (*The Lancet*, 2022)
- **Protocole :** 1 002 personnes atteintes de maladie coronaire avérée (âge moyen 60 ans, 82 % d'hommes), randomisées pendant 7 ans entre une alimentation méditerranéenne riche en huile d'olive vierge extra et un régime pauvre en graisses riche en glucides complexes.
- **Résultats :** les événements cardiovasculaires majeurs (infarctus, revascularisation, AVC, artériopathie périphérique, décès cardiovasculaire) sont survenus à un taux de **28,1 contre 37,7 pour 1 000 personnes-années** (HR ajusté d'environ **0,72 à 0,75**), soit **87 personnes** sous régime méditerranéen contre **111** sous régime pauvre en graisses (198 événements au total ; p log-rank = 0,039 — **Temporelli 2023**), correspondant à environ 9 à 10 événements évités pour 1 000 personnes par an.
- **Délai d'action et sous-groupes :** les courbes ne se séparent qu'après environ 3 ans, ce qui en fait une stratégie de long terme. Le bénéfice était net chez les hommes, sans différence significative chez les 175 femmes incluses.
- **Limite majeure pour l'ICFER :** l'essai a **exclu l'insuffisance cardiaque NYHA III–IV et les FEVG ≤ 35 %**, et n'a pas rapporté les événements d'insuffisance cardiaque. L'appliquer à l'ICFER repose donc sur une extrapolation à partir de la maladie coronaire.
- **Autres réserves :** essai monocentrique, sans insu des participants, avec la participation de fondations de la filière oléicole parmi les financeurs.

### Évaluation de la Haute Autorité de Santé (HAS, annexe d'octobre 2026)
L'annexe d'analyse des preuves de la HAS pour sa recommandation d'octobre 2026 sur le risque cardiovasculaire global (soins primaires) a examiné l'intérêt d'un régime méditerranéen par rapport à un régime pauvre en graisses chez les patients coronariens :
- **Un seul essai retenu :** CORDIOPREV (502 contre 500 participants), sans aucune donnée d'insuffisance cardiaque ni de FEVG.
- **Événements cardiovasculaires (définition large) :** risque relatif **0,73** (IC 95 % 0,55–0,97), soit environ **59 événements évités pour 1 000 personnes sur 7 ans** (1 événement évité pour 17 patients).
- **Mortalité :** toutes causes **0,73** (0,46–1,17) et cardiovasculaire **0,54** (0,25–1,13), toutes deux non concluantes.
- **Verdict :** la HAS juge que ces données étayent une **recommandation faible en faveur** du régime méditerranéen (la certitude a été notée élevée en ne pénalisant pas l'imprécision, ce qui reste généreux pour un seul essai monocentrique). Juste après un infarctus, aucun essai exploitable n'a été retenu (les essais THIS DIET et Singh ayant été exclus pour haut risque de biais). Ce document porte uniquement sur le versant coronaire, pas sur l'ICFER.

### Analyses groupées des programmes diététiques (sans données IC ni FEVG)
- **Méta-analyse en réseau *BMJ* 2023 (Karam) :** 40 essais, 35 548 participants (dont 31 essais chez des patients atteints de maladie cardiovasculaire, suivi médian 3 ans), comparant un *programme* structuré à une intervention minimale :
  - **Programmes méditerranéens :** moins de décès (**OR 0,72** ; IC 95 % 0,56–0,92), de décès cardiovasculaires (**0,55**), d'AVC (**0,65**) et d'infarctus non fatals (**0,48**), certitude modérée (environ 36 décès évités pour 1 000 personnes à haut risque sur 5 ans).
  - **Programmes pauvres en graisses :** moins de décès (**0,84**) et d'infarctus non fatals (**0,77**).
  - Le modèle méditerranéen n'était **pas nettement supérieur au pauvre en graisses**, sauf éventuellement pour les AVC (CORDIOPREV, publié ultérieurement, n'était pas inclus). Les régimes très pauvres en graisses, modifiés en lipides, Ornish ou Pritikin ont montré peu ou pas de bénéfice.
  - *Réserves :* ces programmes associaient souvent exercice, accompagnement comportemental, sevrage tabagique ou médicaments ; 27 essais sur 40 présentaient un haut risque de biais ; les événements d'IC étaient trop rares pour être analysés.
- **Méta-analyse en réseau Bonekamp (2024) :** 17 essais chez 6 331 patients atteints de MCV (presque tous coronariens). Aucun modèle alimentaire n'a produit de variation nette du poids, de la pression artérielle systolique ni du cholestérol LDL à 6 ou 12 mois (intervalles de confiance très larges, jusqu'à ~40 kg pour le poids). Les médicaments restent l'outil principal pour atteindre les cibles de cholestérol et de tension.
- **Revue parapluie Hareer (2024) :** 18 méta-analyses (238 essais, environ 198 000 participants, recherche jusqu'à novembre 2022), aucune revue restreinte à l'IC ni rapportant la FEVG :
  - *Patients déjà atteints de maladie cardiaque (prévention secondaire) contre soins usuels :* moins de décès (**RR 0,44** ; 0,21–0,92) et de décès cardiovasculaires (**RR 0,35** ; 0,15–0,82), mais ces chiffres reposent sur un ou deux essais anciens avec une **certitude faible** (plus basse que dans le *BMJ* 2023).
  - *Personnes sans maladie cardiaque (prévention primaire) :* mortalité inchangée (**HR 1,00** ; 0,80–1,23 ; essentiellement PREDIMED).
  - *AVC :* réduits de façon constante dans les quatre revues les rapportant (**RR 0,58 à 0,65**).
  - *Facteurs de risque :* PAS plus basse d'environ 1 à 3 mmHg, cholestérol LDL plus bas d'environ 0,03 à 0,10 g/L (0,07 à 0,25 mmol/L), poids plus bas d'environ 1,7 kg.
  - *Limites :* 15 revues sur 18 étaient de qualité faible ou critiquement faible, 44 % des critères n'avaient pas de cotation de certitude, plusieurs grands chiffres de prévention secondaire incluent un essai faisant l'objet d'une note de réserve éditoriale (*expression of concern*), et les résultats complets de CORDIOPREV sont parus trop tard pour y figurer.
- **Revue narrative Temporelli (2023) :** présente CORDIOPREV comme l'argument principal en prévention secondaire tout en rappelant la fragilité des essais antérieurs (essai indo-méditerranéen largement discrédité ; PREDIMED rétracté puis republié en 2018) ; ne traite pas de l'insuffisance cardiaque.

### Données spécifiques dans l'insuffisance cardiaque
- **Prévention d'une nouvelle IC :** dans les essais regroupés (**Khan 2021**, texte intégral), le régime méditerranéen était lié à moins de nouveaux cas d'IC (**RR 0,45** ; IC 95 % 0,26–0,79, certitude faible), mais ce résultat dépend de l'essai de Singh à l'intégrité contestée : sans cet essai, il n'y a plus de bénéfice significatif (117 événements d'IC au total). Dans **Hareer 2024**, une méta-analyse de 2016 rapporte une baisse de 70 % des événements d'IC (**RR 0,30** ; 0,17–0,56), mais à partir de seulement deux essais anciens (~1 600 personnes majoritairement sans IC au départ) et sans cotation de certitude. La revue narrative **Schwingshackl 2026** reprend ce RR de 0,45 ainsi qu'un résultat observationnel (OR 0,77 ; 0,63–0,93) sans préciser qu'ils concernent l'apparition d'une nouvelle IC. Une analyse secondaire de PREDIMED (citée par l'ESC 2026) n'a trouvé aucune différence d'incidence de l'IC entre régime méditerranéen et régime pauvre en graisses.
- **Traitement d'une ICFER établie :** aucun essai randomisé de régime méditerranéen n'a été conduit chez des patients déjà atteints d'ICFER.
- **Données observationnelles :** dans la cohorte Women's Health Initiative (3 215 femmes avec IC, FEVG inconnue), les scores méditerranéens les plus élevés étaient liés à une baisse de 15 % de la mortalité, à la limite de la significativité. Une méta-analyse de 2025 (3 études) retrouve une mortalité réduite de 12 % (**OR 0,88** ; IC 95 % 0,78–0,99). Il s'agit d'associations mesurées autour du diagnostic, non d'essais interventionnels.

### Mécanismes proposés (non assimilables à des preuves cliniques)
- **Schwingshackl (2026, revue narrative) :** attribue surtout les effets au remplacement des graisses saturées par des acides gras insaturés (huile d'olive, noix, poisson), aux fibres et aux polyphénols (réduction des particules LDL, baisse de l'inflammation, protection de l'endothélium et moindre agrégation plaquettaire). Une sous-étude de CORDIOPREV chez 805 coronariens a observé de meilleurs marqueurs de réparation endothéliale et moins de stress oxydatif (marqueurs, pas événements). La majorité des données mécanistiques provient toutefois d'études cellulaires et animales ; deux chiffres cliniques repris du *BMJ* 2023 (0,55 et 0,48) y sont mal étiquetés ; la baisse modeste du LDL rapportée (-0,06 g/L, soit -0,15 mmol/L) reste mineure chez un patient déjà sous statine.
- **Microbiote intestinal et TMAO (Lai 2025) :** une revue mécanistique décrit comment des bactéries intestinales transforment la choline et la carnitine (viande, œufs) en TMAO. La quasi-totalité des preuves est animale ou cellulaire ; chez l'humain, il s'agit surtout d'associations dans l'insuffisance rénale (où le TMAO s'accumule faute d'élimination rénale), sans essai dans l'IC et avec plusieurs citations non concordantes. Cela ne justifie aucun changement alimentaire au-delà des grands modèles ci-dessus.
- **Scores alimentaires « anti-inflammatoires » (indice inflammatoire alimentaire, DII — Lopez de Coca 2025) :** le *Dietary Inflammatory Index* (DII) classe une alimentation d'un pôle fortement anti-inflammatoire à un pôle fortement pro-inflammatoire selon sa composition en nutriments. Dans une enquête espagnole portant sur **304 adultes de 50 ans et plus** (88 % de femmes, **sans aucune donnée sur l'insuffisance cardiaque**), un régime plus pro-inflammatoire était associé à l'utilisation de médicaments antihypertenseurs, dont des bêtabloquants et des ARA2, et une variante méditerranéenne dite « anti-inflammatoire » (AnMED : sans viande rouge, céréales raffinées, sucre ni alcool ; huile d'olive, poissons gras et blancs, curcuma) suivait le plus étroitement ce score. Ce score n'expliquait toutefois qu'environ **8 % de la variation**, l'analyse était pratiquement non ajustée et transversale (un diagnostic pouvant entraîner un changement d'habitudes alimentaires), et dans l'ICFER les bêtabloquants et les ARA2/IEC/ARNI sont prescrits pour protéger le cœur et non uniquement pour la tension : cette étude n'indique donc nullement qu'un régime permettrait de diminuer vos médicaments de l'insuffisance cardiaque. Par ailleurs, une alimentation plus riche en végétaux augmente les apports en potassium : sous IEC, ARA2, ARNI ou ARM, validez toujours ce type d'évolution avec votre cardiologue ou votre pharmacien.`,
    },
    {
      headingFr: 'Régime DASH et essais de repas livrés après hospitalisation',
      bodyMarkdownFr: `Le modèle **DASH** (*Dietary Approaches to Stop Hypertension*) privilégie légumes, fruits, produits laitiers allégés, céréales complètes, fruits à coque et légumineuses, tout en limitant le sel, la viande rouge et les sucres ajoutés.

Les essais menés jusqu'ici dans l'insuffisance cardiaque restent petits, portent sur des FEVG mixtes et ne fournissent pas de résultat séparé pour l'ICFER :

| Essai | Population | Intervention | Résultats |
|---|---|---|---|
| **GOURMET-HF (2018)** | 66 patients après hospitalisation pour IC ; FEVG moyenne 39 % ; tous hypertendus | 4 semaines de repas DASH livrés à domicile (1 500 mg sodium/j) contre brochure | Pas de gain significatif sur le score principal de qualité de vie ; réhospitalisations IC à 30 jours : 3 contre 11 événements (p = 0,055, essai pilote) |
| **FOOD-HF (2026)** | 150 patients après hospitalisation pour IC ; FEVG médiane 35 % ; moitié en insécurité alimentaire | 90 jours de repas médicalisés pauvres en sodium ou produits frais contre conseils | Réhospitalisations IC ou urgences non réduites (23 % contre 18 %) ; qualité de vie améliorée |

- **Vivre avec des repas médicalisés livrés (Folta 2026) :** une étude qualitative américaine auprès de 28 adultes à faibles revenus (programme de 6 mois à ~1 340 kcal/j, plats principaux plafonnés à 500 mg de sodium ; sans mesure de critères cliniques ni mention du nombre de patients IC) a montré que presque tous ont jugé les plats **fades et les portions petites au début**. Ceux qui ont poursuivi s'y sont adaptés (notamment grâce aux herbes et épices sans sel) ; plusieurs départs précoces étaient liés à l'espoir de perdre du poids, ce pour quoi ces repas ne sont pas conçus. Les participants ont acquis des repères durables (portions, lecture du sel), mais le coût des aliments sains est resté le principal obstacle ensuite. Financé aux États-Unis par Medicaid ou des associations, ce modèle ne préjuge pas de son existence en France.
- **Données observationnelles :** dans la cohorte Women's Health Initiative, les scores DASH les plus élevés étaient associés à 16 % de mortalité en moins après une hospitalisation pour IC (HR 0,84). Une méta-analyse de 2025 associe le régime DASH à moins d'insuffisance cardiaque incidente (OR 0,83), mais sans diminution significative de la mortalité une fois l'IC installée (2 études).
- **Point de vigilance sur le potassium :** le régime DASH est naturellement riche en potassium. Dans GOURMET-HF, la teneur en potassium des repas avait été réduite chez les patients ayant une fonction rénale diminuée, une kaliémie haute ou un diurétique épargneur de potassium ; un participant ayant reçu par erreur les repas standard a développé une hyperkaliémie. Si vous prenez un IEC, un ARA2, un ARNI ou un ARM, tout changement alimentaire majeur vers un régime très riche en potassium doit être validé avec votre équipe.
- **Autres régimes :** la cartographie de Khan (2021) n'a identifié aucun essai randomisé dans l'insuffisance cardiaque pour le régime cétogène ou le jeûne intermittent. En outre, les régimes cétogènes exposent à un risque spécifique d'acidocétose sous iSGLT2.`,
    },
    {
      headingFr: 'Aliments du quotidien : café, ultra-transformés, noix et stérols végétaux',
      bodyMarkdownFr: `Aucun de ces quatre sujets n'a été spécifiquement testé chez des personnes déjà atteintes d'ICFER.

### Café
- **Rythme chez des adultes sains (essai CRAVE) :** chez 100 adultes sans cardiopathie, les jours avec café ont entraîné davantage d'extrasystoles ventriculaires (154 contre 102 par jour), sans modification des extrasystoles atriales, et 36 minutes de sommeil en moins. Les personnes atteintes d'IC ou de FA étaient exclues.
- **Après cardioversion pour FA (essai DECAF) :** chez 200 consommateurs de café atteints de FA persistante (FEVG moyenne 54 %), ceux qui ont maintenu environ **1 tasse par jour** ont eu **moins** de récidives de FA que ceux qui ont arrêté le café (**47 % contre 64 %** sur 6 mois). L'essai était en ouvert et n'a testé qu'environ 1 tasse par jour.
- **Nouvelle insuffisance cardiaque :** dans trois cohortes américaines sans cardiopathie initiale, chaque tasse quotidienne de café caféiné était associée à un risque légèrement moindre de développer une IC. Les auteurs soulignent qu'il s'agit d'une association et non d'une incitation à augmenter sa consommation.
- En résumé, un café modéré apparaît neutre à favorable dans ces populations, mais son effet dans l'ICFER établie ou en cas d'extrasystoles ventriculaires fréquentes n'est pas étudié.

### Aliments ultra-transformés
- Une revue parapluie publiée dans le *BMJ* en 2024 (environ 10 millions de participants, études observationnelles) associe une forte consommation à une hausse de **50 % de la mortalité cardiovasculaire**, avec une tendance constante mais une certitude GRADE très faible.
- **Étude MESA (*JACC: Advances*, 2026, texte intégral) :** chez 6 531 adultes américains de 45 à 84 ans sans maladie cardiaque suivis jusqu'à environ 20 ans, chaque portion quotidienne supplémentaire était liée à environ **5 % d'infarctus, d'AVC et de décès associés en plus (HR 1,05)**. Le cinquième le plus consommateur (environ 9 portions/j) avait un risque multiplié par **1,46** par rapport au cinquième le plus bas (environ 1 portion/j), même après ajustement sur la qualité globale du régime, la tension, le cholestérol, le diabète et le tour de taille ; les produits sucrés montraient le lien le plus net. L'alimentation n'ayant été évaluée qu'une fois par questionnaire, il s'agit d'une association, et cet article ne comporte **pas de critère d'insuffisance cardiaque**.
- Un résumé de congrès 2026 issu de la même cohorte MESA (vu uniquement par voie de presse) liait les ultra-transformés à l'IC à FEVG préservée mais pas à l'ICFER ; l'article complet MESA 2026 est une analyse distincte et ne confirme pas ce résultat.
- **Une analyse divergente (prépublication Lasker 2026, non évaluée par les pairs) :** sur des données américaines NHANES (jusqu'à 100 504 adultes), la plupart des liens s'affaiblissent ou disparaissent avec des méthodes statistiques plus strictes (aucun critère d'IC ; mortalité cardiovasculaire HR 1,01 non significatif ; seuls les boissons sucrées et les viandes transformées conservent une association). Cette analyse présente des limites méthodologiques (rappels alimentaires de 1 à 2 jours, incohérences internes) et constitue un contre-argument fragile.
- Les recommandations ESC 2026 associent également aliments transformés, sucres et graisses saturées à un risque accru d'insuffisance cardiaque.

### Fruits à coque (noix, amandes, noisettes)
- Dans **PREDIMED** (7 447 adultes à haut risque sans maladie cardiovasculaire), un régime méditerranéen enrichi en fruits à coque a réduit les événements cardiovasculaires majeurs de **28 %** par rapport à un régime pauvre en graisses (**3,4 % contre 4,4 %**).
- Dans une méta-analyse de 20 cohortes, environ **28 g par jour** étaient associés à **29 %** de maladie coronaire en moins.
- Ils sont denses en calories et les versions salées apportent du sodium : préférez les fruits à coque **nature, non salés**, en portion raisonnable.

### Stérols et stanols végétaux (margarines et yaourts enrichis)
- Environ **2 g par jour** abaissent le cholestérol LDL de **7 à 10 %** en complément d'une statine (un gain proche du doublement de la dose de statine).
- **Aucun essai clinique** n'a démontré qu'ils réduisent les infarctus ou les décès.
- L'European Atherosclerosis Society indique qu'ils peuvent être envisagés en complément chez les patients à haut risque qui n'atteignent pas leur cible de LDL.
- La mise à jour 2025 des recommandations européennes sur les lipides ne retient aucune indication pour les *compléments alimentaires* pour abaisser le LDL (Classe III), sans mention explicite des aliments enrichis en stérols dans le résumé consulté.`,
    },
    {
      headingFr: 'Tenir dans la durée : ce qui aide à maintenir les changements',
      bodyMarkdownFr: `Une revue publiée dans *Nature Medicine* en 2024 (**Rutters 2024**) a analysé les programmes combinés d'hygiène de vie (alimentation, activité physique et accompagnement) chez des personnes à risque de diabète ou de maladie cardiovasculaire. Elle n'inclut **aucun patient insuffisant cardiaque** : il s'agit donc de repères généraux sur le maintien des habitudes, non de preuves spécifiques à l'ICFER.

- **Ce qui favorise l'adhésion :** fixer des objectifs concrets, anticiper et résoudre les obstacles, pratiquer l'autosuivi, s'appuyer sur le soutien de l'entourage ou de pairs, prévoir un plan de maintien à long terme et garder des contacts réguliers avec un professionnel de santé (l'accompagnement individuel ou en groupe obtient des résultats comparables).
- **Synergie :** associer alimentation et activité physique améliore davantage les facteurs de risque que chaque volet isolé.
- **Attendre des fluctuations :** après un programme intensif, la reprise partielle de poids est fréquente et en partie biologique — ce n'est pas un échec personnel. En pratique courante, les effets observés représentent environ la moitié au tiers de ceux des essais cliniques.
- **Critères cliniques :** ces programmes retardent clairement le diabète de type 2, mais les essais regroupés n'ont pas montré de baisse claire de la mortalité (**HR 0,93** ; IC 95 % 0,85–1,03) ni de la mortalité cardiovasculaire. Dans l'ICFER, où la perte involontaire de poids et de muscle constitue un risque majeur, tout objectif pondéral doit être convenu avec votre équipe de cardiologie.`,
    },
    {
      headingFr: 'Recommandations générales et place de l’alcool',
      bodyMarkdownFr: `- **ESC 2026 — conseils d'hygiène de vie :** recommandation de **Classe I, niveau C** (accord d'experts), incluant le maintien d'un poids de santé, une alimentation équilibrée, la lutte contre la sédentarité, l'arrêt du tabac et l'éviction d'une consommation importante d'alcool.
- **ESC 2026 — profil alimentaire :** les régimes riches en légumes, fruits à coque, céréales complètes, poissons et acides gras insaturés sont associés à un risque moindre d'IC, tandis que les régimes riches en sucres, graisses saturées, céréales raffinées et aliments transformés sont liés à un risque plus élevé.
- **HAS (France, annexe octobre 2026) :** pour la maladie coronaire, recommandation faible en faveur du régime méditerranéen par rapport au régime pauvre en graisses, fondée sur CORDIOPREV seul, sans effet démontré sur la mortalité et sans traiter l'IC.
- **Les compléments ne remplacent pas l'alimentation :** les multivitamines et pilules antioxydantes n'ont montré aucun bénéfice cardiovasculaire dans les grandes méta-analyses (An 2022).
- **Alcool :**
  - les recommandations **ESC 2026** déconseillent formellement les consommations excessives (toxiques pour le myocarde) et qualifient les données sur les consommations faibles à modérées de mitigées ;
  - **vin et régime méditerranéen (Schwingshackl 2026) :** si les scores méditerranéens historiques incluent un peu de vin, les bénéfices prêtés au vin sont purement observationnels, l'OMS rappelle que la quantité d'alcool la plus favorable pour la santé est zéro, et les quantités de resvératrol apportées par le vin sont bien trop faibles pour un effet médicamenteux ;
  - **enquête transversale américaine (Qiu 2025, NHANES, 7 022 adultes hypertendus) :** un score de « balance oxydative » plus élevé (plus de fibres et vitamines sur un rappel alimentaire d'un jour, davantage d'activité, poids moindre, moins d'alcool, absence de tabac) allait de pair avec moins d'IC autodéclarée (quartile supérieur contre inférieur **OR 0,56** ; IC 95 % 0,40–0,77), **l'alcool pesant le plus dans le score**. Cette enquête transversale, sans ajustement sur les médicaments et sur une IC autodéclarée de type inconnu, conforte le conseil de limiter l'alcool et ne fournit aucun appui aux compléments antioxydants.
  - Les repères pratiques pour la vie quotidienne sont détaillés dans la fiche consacrée à la vie avec l'insuffisance cardiaque.`,
    },
  ],
  relatedArticleSlugs: [
    'nutrition-et-complements-insuffisance-cardiaque',
    'sel-et-liquides-insuffisance-cardiaque',
    'poids-obesite-et-denutrition',
    'cardiomyopathie-ischemique',
    'omega-3-huile-de-poisson',
    'cholesterol-et-prevention-secondaire',
    'interactions-complements-aliments-medicaments',
    'vivre-avec-insuffisance-cardiaque',
  ],
  sources: [
    {
      label: 'CORDIOPREV (The Lancet, 2022), annexe HAS (octobre 2026) et Temporelli (2023)',
      detail: '1 002 patients coronariens suivis 7 ans (87 vs 111 événements, exclusion FEVG ≤ 35 %), évaluation GRADE française (recommandation faible en faveur) et mise en perspective des essais antérieurs.',
    },
    {
      label: 'Méta-analyses et revues 2023–2026 sur le régime méditerranéen',
      detail: 'Karam et al. (BMJ 2023 NMA, 40 essais), Bonekamp et al. (2024, 17 essais), Hareer et al. (2024, revue parapluie de 18 méta-analyses), Schwingshackl et al. (2026, mécanismes et alcool), Lai et al. (2025, microbiote et TMAO).',
    },
    {
      label: 'Essais DASH/repas livrés, adhésion et enquêtes nutritionnelles',
      detail: 'GOURMET-HF (2018), FOOD-HF (2026), Folta et al. (2026, étude qualitative repas livrés), Rutters et al. (Nature Medicine 2024, programmes combinés), Qiu et al. (2025, NHANES), Lopez de Coca et al. (2025, enquête espagnole sur l’indice inflammatoire alimentaire DII), cohorte WHI et Arayici (2025).',
    },
    {
      label: 'Aliments du quotidien et recommandations ESC 2026',
      detail: 'CRAVE, DECAF, Lane 2024 (BMJ), MESA 2026 (JACC: Advances), Lasker 2026, PREDIMED, EAS/ESC, ESC 2026 (hygiène de vie Classe I/C), Khan 2021 (texte intégral) et An 2022.',
    },
  ],
  disclaimerType: 'medical',
};
