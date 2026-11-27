import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'poids-obesite-et-denutrition',
  sourceWikiPath: 'wiki/concepts/weight-obesity-and-malnutrition.md',
  titleFr: 'Poids, obésité et dénutrition (cachexie cardiaque)',
  category: 'nutrition',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'poids',
    'obésité',
    'paradoxe-obésité',
    'perte-de-poids',
    'dénutrition',
    'cachexie-cardiaque',
    'sarcopénie',
    'obésité-sarcopénique',
    'protéines',
    'effort',
    'glp-1',
    'régime-cétogène',
    'dépistage-dénutrition',
  ],
  aliases: [
    "Paradoxe de l'obésité",
    'Perte de poids',
    'Cachexie cardiaque',
    'Dénutrition',
    'Malnutrition',
    'Sarcopénie',
    'EFFORT',
    'MNA-SF',
    'CONUT',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Dans l'insuffisance cardiaque, le poids doit être surveillé dans les deux sens. L'excès de poids n'est pas protecteur malgré la notion médiatisée de « paradoxe de l'obésité », largement due aux limites de l'IMC : l'adiposité abdominale est au contraire associée à davantage d'hospitalisations. Une perte de poids progressive qui préserve le muscle (déficit calorique modéré, protéines suffisantes et exercice) est raisonnable, mais seuls quelques très petits essais randomisés (14 à 99 patients) l'ont testée dans l'ICFER, sans évaluer décès ni hospitalisations ; elle doit donc être planifiée avec votre équipe. Les traitements récents de l'obésité (sémaglutide, tirzépatide) ont prouvé un bénéfice cardiaque uniquement dans l'IC à FEVG préservée ; dans l'ICFER, leur sécurité reste débattue et le sémaglutide oral s'est révélé neutre dans le sous-groupe ICFER de l'essai SOUL. À l'opposé, perdre du poids sans le vouloir ou perdre l'appétit est un signal d'alerte : dans l'essai EFFORT (patients hospitalisés à risque, âge médian 79 ans, peu de FEVG réduites), un soutien nutritionnel adapté a réduit la mortalité à 30 jours de 14,8 % à 8,4 %. Pour dépister la dénutrition, un court questionnaire (MNA-SF) est plus fiable que le score CONUT, faussé par les statines.",
  sections: [
    {
      headingFr: 'Le « paradoxe de l’obésité » : pourquoi il est trompeur',
      bodyMarkdownFr: `- **L'observation initiale :** dans une méta-analyse regroupant 28 209 patients atteints d'insuffisance cardiaque, les personnes en surpoids ou obèses présentaient une mortalité plus basse que les personnes de poids normal ou faible (**Morris et Rider 2025**).
- **Pourquoi il ne s'agit probablement pas d'une vraie protection :**
  - Dans l'essai **PARADIGM-HF** (8 399 patients avec ICFER), l'avantage apparent de survie lié à un IMC plus élevé **disparaissait** après ajustement sur le **NT-proBNP**, marqueur de contrainte cardiaque (qui a lui-même tendance à être plus bas en cas d'obésité).
  - Dans ce même essai, un rapport taille/hanches élevé et d'autres indicateurs d'adiposité abdominale étaient associés à **davantage** d'hospitalisations pour insuffisance cardiaque.
  - Les explications les plus probables sont la causalité inverse (les patients les plus gravement malades maigrissent parce que l'insuffisance cardiaque dégrade les tissus corporels), le biais de sélection et la confusion par la sévérité de la maladie.
- **Confirmation par la déclaration d'experts HFA (ESC) 2025 :**
  - Si dans la grande analyse MAGGIC la mortalité la plus basse se situait entre 30 et 34,9 d'IMC, dans PARADIGM-HF (ICFER) l'IMC et le rapport tour de taille/taille étaient tous deux associés à davantage d'événements après ajustement, et dans ASIAN-HF un rapport tour de taille/taille ≥ 0,55 s'accompagnait de plus d'hospitalisations ou de décès.
  - L'IMC est un indicateur grossier dans l'IC : il inclut le poids de l'eau retenue et ne distingue pas la masse grasse de la masse musculaire. La HFA propose d'évaluer aussi le **tour de taille** (repères européens : **94 cm** chez l'homme, **80 cm** chez la femme) et le rapport tour de taille/taille.
  - Environ un quart des patients atteints d'ICFER présentent une obésité (registre SwedeHF). *Note méthodologique :* il s'agit d'une déclaration d'experts sans recommandations gradées, dont de nombreux auteurs ont des liens avec les fabricants de médicaments anti-obésité.`,
    },
    {
      headingFr: 'Perte de poids volontaire dans l’ICFER : preuves, GLP-1 et précautions',
      bodyMarkdownFr: `**Ce que montrent les données (Morris et Rider 2025 ; HFA 2025) :**
- **Mise à jour (correction du 25 novembre 2026) :** il avait été indiqué auparavant, d'après la revue Morris et Rider, qu'aucun essai randomisé n'avait testé la perte de poids volontaire dans l'ICFER obèse. La déclaration **HFA 2025** recense en réalité **quatre petits essais randomisés dans l'ICFER** : orlistat (21 patients, ~8,6 kg perdus, amélioration de la classe NYHA et de la marche), régime hyperprotéiné hypocalorique (14 patients diabétiques), exercice à domicile (99 patients, ~6 kg perdus, pas de différence sur la marche ni l'humeur) et programme d'hygiène de vie (20 patients, pas de différence). **Aucun n'avait la taille nécessaire pour mesurer les décès ou les hospitalisations** (critères intermédiaires uniquement). Un essai plus vaste (~830 patients ICFER obèses utilisant une application diététique et une balance connectée, **IDEAL-HF**) est en cours.
- **Programme diététique non contrôlé :** dans un petit groupe majoritairement ICFER, 6 mois de régime (perte moyenne de 4,4 kg) ont amélioré la FEVG et la classe NYHA, davantage lorsque la perte atteignait 3 kg ou plus.
- **Chirurgie bariatrique :** de petites séries rétrospectives ont rapporté des gains de FEVG de 5 à 12 %. La HFA 2025 rappelle qu'il n'existe **aucun essai randomisé dans l'IC établie** : les études observationnelles paraissent favorables, mais l'insuffisance cardiaque multiplie par environ **8** le risque de complications cardiaques peropératoires, et l'ICFER environ par **3** la mortalité hospitalière. La décision relève d'une évaluation multidisciplinaire au cas par cas.
- **Médicaments agonistes du GLP-1 :**
  - Dans l'ICFER, les essais spécifiques (LIVE et un essai de l'albiglutide) ont entraîné 2 à 4 kg de perte de poids sans amélioration fonctionnelle.
  - **Sécurité débattue dans l'ICFER (HFA 2025) :** dans **FIGHT** (ICFER récemment hospitalisée, FEVG moyenne 27 %), le liraglutide s'est accompagné d'une hausse numérique non significative des hospitalisations pour IC ; dans **LIVE**, les événements cardiaques graves ont été plus nombreux sous liraglutide (**12 contre 3 patients**, petits effectifs). Aucun de ces deux essais ne sélectionnait des patients obèses ni n'utilisait les doses amaigrissantes.
  - **Essai SELECT (sémaglutide) :** dans la population globale (obésité avec maladie cardiovasculaire, majoritairement sans IC), les événements d'IC ont baissé (**HR 0,82**). Toutefois, dans le **sous-groupe ICFER de SELECT** (1 347 patients, surtout NYHA II, aucun NYHA IV), les événements cardiaques majeurs ont diminué de 35 %, mais **les hospitalisations pour IC seules n'ont pas diminué (HR 1,08, non significatif)**, dans une population moins sévère que celle des essais IC habituels.
  - **Essais positifs dédiés à l'IC (STEP-HFpEF, SUMMIT) :** ils ont porté uniquement sur l'IC à **FEVG préservée** (dans SUMMIT, le tirzépatide a réduit le critère décès CV ou aggravation d'IC, **HR 0,62**).
  - Les agonistes du GLP-1 accélèrent la fréquence cardiaque d'environ **3 à 5 battements par minute** et entraînent davantage de perte musculaire que d'autres méthodes d'amaigrissement. La HFA appelle à des essais cliniques dédiés dans l'ICFER obèse.
  - **Mise à jour (25 novembre 2026 — essai SOUL) :** chez les **592 patients** atteints de diabète et d'ICFER inclus dans l'essai **SOUL**, le **sémaglutide par voie orale** n'a pas clairement modifié les événements d'insuffisance cardiaque ni les décès cardiovasculaires (**HR 0,98** ; IC 95 % 0,70–1,38), contrairement à ce qui était observé en FEVG préservée (**HR 0,59**). Aucun essai d'événements cliniques portant sur un agoniste du GLP-1 ou une molécule plus récente (y compris le rétatrutide) dans l'ICFER n'a été retrouvé sur ClinicalTrials.gov. Les détails complets (molécules de nouvelle génération, profil de sécurité et accès/remboursement en France) figurent dans la fiche dédiée aux **médicaments GLP-1 et incrétines**.

**Perdre du poids tout en protégeant le muscle (HFA 2025) :**
- La fonte musculaire touche environ **20 %** des personnes atteintes d'IC chronique (plus marquée dans l'ICFER), exposant à l'**obésité sarcopénique** ; la HFA suggère d'évaluer la fonction musculaire (force de préhension, test du lever de chaise).
- Un **déficit calorique modéré associé à des apports suffisants en protéines et à l'activité physique** (incluant un renforcement musculaire adapté en complément de l'endurance ; voir la fiche **musculation contre endurance en réadaptation cardiaque**) est préférable à toute approche isolée. Le repère souvent cité d'environ **1,2 g de protéines par kg et par jour** provient de l'essai **SECRET** (patients ≥ 60 ans atteints d'**ICFEP** obèse, et non d'ICFER) : c'est un point de repère raisonnable, non une cible validée spécifiquement dans l'ICFER.
- Les médicaments de fond de l'IC restent recommandés quel que soit l'IMC (les iSGLT2 induisent eux-mêmes environ 1,5 à 2 kg de baisse pondérale). Les anciens coupe-faim (sibutramine, fenfluramine, phentermine) sont jugés inadaptés dans l'insuffisance cardiaque.
- **Maintien à long terme (Rutters 2024, hors IC) :** fixation d'objectifs, autosuivi, résolution de problèmes, soutien social, contacts fréquents et plan de maintien aident à tenir, mais la perte nette durable moyenne n'est que de **1 à 3 kg** (reprise partiellement biologique), sans baisse démontrée de la mortalité.

**Ce que disent les recommandations :**
- **ESC 2026 :** sémaglutide ou tirzépatide recommandés uniquement lorsque la **FEVG est ≥ 45 % avec un IMC ≥ 30** (Classe IIa) — ne s'applique pas à une FEVG autour de 35 %.
- **ESC 2026 :** la chirurgie bariatrique peut être envisagée en cas d'IMC ≥ 35 lorsque les autres mesures ont échoué (Classe IIb).
- **HFSA (citée par HFA 2025) :** conseille une perte de poids de 5 à 10 % à partir d'un IMC ≥ 35, quelle que soit la FEVG.
- Les conseils d'hygiène de vie **ESC 2026 (Classe I)** incluent le maintien d'un poids de santé.

**Régimes cétogènes, draconiens et iSGLT2 :**
- Les régimes très hypocaloriques ou cétogènes figurent dans la notice de la dapagliflozine (*Forxiga*) parmi les déclencheurs d'acidocétose. La HFA 2025 souligne l'absence d'essai IC sur le régime cétogène ou le jeûne intermittent, et liste les risques d'acidocétose sous iSGLT2, d'hypoglycémie sous insuline, de troubles du sodium/potassium et d'élévation du LDL.
- **L'unique étude sur le régime cétogène dans l'IC ne lève pas cette alerte (Moseley 2025) :** dans une étude rétrospective américaine non contrôlée portant sur 125 patients IC avec obésité sévère (IMC moyen **45**) suivis environ 2 ans, la perte médiane a été de **11 kg** sans modification de la FEVG ni du LDL. Les hospitalisations IC ont diminué de moitié par rapport à l'année précédente (rapport de taux 0,5), mais le critère combiné hospitalisations/décès n'a pas clairement baissé et la diminution n'était pas statistiquement significative dans le sous-groupe à FEVG réduite (**0,6** ; IC 95 % 0,3–1,1). Il n'y avait **aucun groupe témoin**, deux tiers des dossiers ont été exclus faute d'un an de suivi, **seuls 2 patients sur 125 prenaient un iSGLT2**, les corps cétoniques n'étaient pas mesurés et l'acidocétose n'était pas rapportée. En outre, les doses d'IEC/ARA2/ARNI ont été réduites chez 39 % des patients à FEVG réduite. L'avertissement sur les régimes cétogènes sous iSGLT2 demeure donc entier.`,
    },
    {
      headingFr: 'Dénutrition et cachexie cardiaque : un risque grave mais traitable',
      bodyMarkdownFr: `**Sous-groupe insuffisance cardiaque de l'essai EFFORT (*JACC*, 2021, texte intégral) :** 645 patients hospitalisés atteints d'insuffisance cardiaque et identifiés comme étant à risque nutritionnel (8 hôpitaux suisses) ont été randomisés entre un soutien personnalisé guidé par un(e) diététicien(ne) et l'alimentation hospitalière standard.

- **Population :** âge médian d'environ **79 ans** ; 36 % hospitalisés pour IC aiguë (les autres pour une autre affection aiguë sur IC chronique) ; cause coronaire chez environ **57 %** ; FEVG consignée dans la moitié des dossiers seulement, et **seulement 66 patients** avaient une FEVG < 40 %.
- **Intervention :** objectifs caloriques, protéiques (**1,2 à 1,5 g/kg/j**) et en micronutriments définis sous 48 heures, presque exclusivement par alimentation enrichie, collations et compléments nutritionnels oraux (+257 kcal et +8 g de protéines/j ; sans restriction sodée protocolaire).

| Critère | Soutien nutritionnel | Alimentation hospitalière | Effet ajusté |
|---|---|---|---|
| **Décès à 30 jours (critère principal)** | 8,4 % | 14,8 % | OR 0,44 (IC 95 % 0,26–0,75) |
| **Événements CV majeurs à 30 jours** | 17,4 % | 26,9 % | OR 0,50 (IC 95 % 0,34–0,75) |
| **Décès à 180 jours** | 26,5 % | 31,5 % | HR 0,74 (IC 95 % 0,55–0,996) |
| **Réadmission non programmée à 30 jours** | 9,0 % | 8,3 % | Pas de différence |

- **Précisions clés du texte intégral :**
  - à 6 mois, l'écart était plus faible et significatif uniquement après ajustement statistique (HR non ajusté 0,81, non significatif) ;
  - le bénéfice était concentré chez les patients à haut risque nutritionnel (score de dépistage > 4) ;
  - un score de risque nutritionnel **> 4** (comparé à ≤ 4) était associé à une mortalité à 6 mois nettement plus élevée (**38,4 % contre 24,7 %** ; HR ajusté **1,65** ; IC 95 % 1,21–2,24) — il s'agit bien d'une comparaison entre deux groupes de risque et non d'une hausse par point ;
  - la qualité de vie et les capacités fonctionnelles se sont améliorées, mais ni les réadmissions ni la durée de séjour n'ont diminué ;
  - dans la cause ischémique, la mortalité à 30 jours était de **8 % contre 15 %** (OR 0,45) ; les lignes de sous-groupes par FEVG semblant mal étiquetées dans l'article, aucune conclusion spécifique à l'ICFER ne peut être tirée ; essai en ouvert et analyse en sous-groupe ; concerne les patients **hospitalisés et à risque**, pas les patients ambulatoires stables ou en surpoids.

**Autres essais plus petits (rapportés dans la littérature) :**
- **PICNIC** (120 patients hospitalisés dénutris) a montré des bénéfices très importants mais a été interrompu prématurément.
- Un essai ambulatoire de 2026 (**BOCADOS-IC**) n'a pas réduit les événements cliniques majeurs, tout en améliorant l'état nutritionnel, la masse musculaire et la qualité de vie.

**Quel outil pour dépister la dénutrition ? (Kinugasa 2022 ; Kitao 2025) :**
- Dans une étude japonaise chez 150 patients ambulatoires stables atteints d'IC (FEVG médiane 45 %, environ un tiers d'origine ischémique ; **Kinugasa 2022**), trois scores ont identifié des proportions très différentes : **MNA-SF** (50 %), **GNRI** (13 %, albumine et poids) et **CONUT** (54 %, albumine, lymphocytes et cholestérol).
- Le questionnaire **MNA-SF** (six questions sur l'appétit, la perte de poids, la mobilité, le stress, l'humeur et l'IMC) s'est révélé le meilleur dépistage global ; le GNRI repérait les patients déjà amaigris mais manquait les signes précoces.
- **Attention au score CONUT sous statine :** comme ce score attribue des points pour un cholestérol bas, un traitement par statine fait monter artificiellement le score chez des personnes bien nourries. Chez un patient coronarien sous statine, un CONUT « anormal » peut refléter le traitement hypolipémiant plutôt qu'une dénutrition. Aucun des trois scores n'a prédit décès ou réadmission à 1 an dans ce petit groupe peu sévère.
- Dans un registre japonais incluant exclusivement des patients âgés en **ICFEP** (FEVG médiane 64 % ; **Kitao 2025**), la dénutrition définie par CONUT diminuait de 76 % à la sortie d'hôpital à 57 % un an plus tard ; son amélioration était liée à un meilleur pronostic et son aggravation à un moins bon pronostic, mais le score variait avec l'anémie, l'inflammation, le NT-proBNP et les statines. Cette association en FEVG préservée ne se transpose pas directement à l'ICFER, mais souligne l'intérêt de réévaluer régulièrement l'état nutritionnel.

**Position ESC 2026 :** la dénutrition étant associée à un moins bon pronostic, l'évaluation nutritionnelle et les interventions diététiques « peuvent être utiles » (texte narratif, sans classe). La fragilité, la dénutrition, la cachexie et la sarcopénie sont signalées comme fréquentes et liées à une mortalité plus élevée dans l'IC avancée.

**Fonte musculaire, fragilité et cachexie en détail :** les définitions (sarcopénie EWGSOP2, cachexie d'Evans, critères HAS 2021 de dénutrition incluant un IMC < 22 et une sarcopénie confirmée à partir de 70 ans), les tests en consultation comme la force de préhension et le test des levers de chaise, leur fréquence dans l'ICFER ainsi que les données sur les protéines, le HMB et les compléments nutritionnels oraux sont approfondis dans la fiche *Sarcopénie, perte musculaire et fragilité*.`,
    },
    {
      headingFr: 'En pratique : relier nutrition et pesée quotidienne',
      bodyMarkdownFr: `- **En cas d'hospitalisation ou de perte de poids involontaire :** des apports suffisants en énergie et en protéines priment sur toute restriction. Un dépistage de la dénutrition reste utile même lorsque l'IMC est élevé (on peut être en surpoids et manquer de protéines ou de masse musculaire).
- **Lire les courbes de poids dans les deux sens :**
  - une **prise de poids rapide** sur quelques jours (par exemple 2,0 kg en 2 à 3 jours) traduit habituellement une rétention d'eau (congestion) ;
  - une **perte de poids lente et involontaire** sur plusieurs semaines ou mois, accompagnée d'une baisse d'appétit ou de force, évoque une dénutrition ou une fonte musculaire (cachexie / sarcopénie).

Ces deux situations méritent d'être signalées à votre cardiologue, votre médecin traitant ou votre infirmière insuffisance cardiaque.`,
    },
  ],
  relatedArticleSlugs: [
    'diabete-insuffisance-cardiaque',
    'medicaments-glp1-et-incretines',
    'sarcopenie-perte-musculaire-et-fragilite',
    'nutrition-et-complements-insuffisance-cardiaque',
    'alimentation-cardioprotectrice',
    'sel-et-liquides-insuffisance-cardiaque',
    'interactions-complements-aliments-medicaments',
    'vivre-avec-insuffisance-cardiaque',
    'readaptation-cardiaque-et-activite-physique',
    'musculation-vs-endurance-readaptation-cardiaque',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'examens-et-chiffres',
    'maladies-associees',
    'cafeine-boissons-energisantes-et-stimulants',
    'complements-energetiques-cardiaques',
    'tabac-et-alcool-insuffisance-cardiaque',
  ],
  sources: [
    {
      label: 'Essai SOUL — analyse insuffisance cardiaque selon la FEVG (JAMA Internal Medicine, 2026, texte intégral)',
      detail: '592 patients diabétiques avec ICFER sous sémaglutide oral (HR 0,98 ; IC 95 % 0,70–1,38) contre réduction des événements en FEVG préservée (HR 0,59).',
    },
    {
      label: 'Déclaration d’experts HFA (ESC) 2025 sur l’obésité dans l’IC et Morris & Rider (2025)',
      detail: 'Paradoxe de l’obésité (PARADIGM-HF, MAGGIC, ASIAN-HF), 4 petits essais randomisés dans l’ICFER, débat sur les GLP-1 (FIGHT, LIVE, SELECT ICFER, SUMMIT), préservation musculaire et risques de la chirurgie bariatrique.',
    },
    {
      label: 'EFFORT — sous-groupe insuffisance cardiaque (JACC, 2021, texte intégral)',
      detail: '645 patients hospitalisés à risque nutritionnel (âge médian 79 ans, 66 avec FEVG < 40 %), mortalité à 30 et 180 jours, score de risque > 4, notes sur PICNIC et BOCADOS-IC.',
    },
    {
      label: 'Moseley (2025), Kinugasa (2022), Kitao (2025) et Rutters (2024)',
      detail: 'Étude rétrospective régime cétogène dans l’IC obèse ; comparaison MNA-SF / GNRI / CONUT (biais statines) ; évolution nutritionnelle en ICFEP ; maintien à long terme des programmes d’hygiène de vie.',
    },
    {
      label: 'Recommandations ESC 2026 et notice dapagliflozine (Forxiga)',
      detail: 'GLP-1 uniquement si FEVG ≥ 45 % et IMC ≥ 30 (IIa), chirurgie bariatrique (IIb), évaluation nutritionnelle, et régimes cétogènes listés comme déclencheurs d’acidocétose.',
    },
  ],
  disclaimerType: 'medical',
};
