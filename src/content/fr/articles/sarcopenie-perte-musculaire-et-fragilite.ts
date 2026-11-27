import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'sarcopenie-perte-musculaire-et-fragilite',
  sourceWikiPath: 'wiki/concepts/muscle-loss-and-frailty.md',
  titleFr: 'Sarcopénie, perte musculaire, fragilité et cachexie cardiaque',
  category: 'comorbidites',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'sarcopenie',
    'fragilite',
    'cachexie',
    'cachexie-cardiaque',
    'fonte-musculaire',
    'obesite-sarcopenique',
    'denutrition',
    'force-prehension',
    'sppb',
    'vitesse-marche',
    'renforcement-musculaire',
    'proteines',
    'hmb',
    'cno',
    'creatine',
    'isglt2',
    'glp-1',
    'icfer',
  ],
  aliases: [
    'Sarcopénie',
    'Fragilité',
    'Cachexie cardiaque',
    'Fonte musculaire',
    'Obésité sarcopénique',
    'Dénutrition',
    'Force de préhension',
    'HMB',
    'Clinical Frailty Scale',
    'SPPB',
  ],
  linkedModules: ['core', 'ckd'],
  plainSummaryFr:
    "L'insuffisance cardiaque peut progressivement affaiblir les muscles autant que le cœur. Trois notions proches mais distinctes décrivent ce phénomène : la sarcopénie (perte de force puis de masse musculaire, repérée par un simple test de poignée ou cinq levers de chaise), la fragilité (réduction globale des réserves physiques, cognitives et sociales, distincte du seul âge) et la cachexie (perte de poids involontaire d'au moins 5 % en un an liée à la maladie, parfois masquée sur la balance par la rétention d'eau). Ces situations sont fréquentes dans l'ICFER — environ une personne sur cinq en suivi ambulatoire pour la sarcopénie et près d'une sur deux pour la fragilité — et s'associent à davantage d'hospitalisations. Les leviers les mieux étayés restent les traitements de fond optimisés (y compris les inhibiteurs SGLT2, très efficaces même chez les patients fragiles), une activité physique associant renforcement, équilibre et endurance, et des apports suffisants en protéines et en énergie adaptés à votre fonction rénale. Les compléments comme le HMB ou la créatine n'ont pas de preuve solide dans l'insuffisance cardiaque. En France, dès 70 ans, un IMC inférieur à 22 ou une sarcopénie confirmée peuvent contribuer au diagnostic de dénutrition selon la HAS.",
  keyTakeawaysFr: [
    "La perte musculaire peut exister même avec un poids stable ou un surpoids (obésité sarcopénique), et la rétention d'eau peut masquer un amaigrissement sur la balance.",
    "En consultation, la force musculaire se mesure simplement par un dynamomètre de poignée ou le temps nécessaire pour effectuer 5 levers de chaise (> 15 secondes = signal d'alerte).",
    "Pour préserver le muscle : traitements de fond de l'IC, exercice adapté (équilibre et renforcement) et apports protéiques suffisants validés avec votre équipe (attention si DFGe < 30 mL/min).",
    "Les compléments de HMB n'ont pas été testés dans l'IC, et la créatine n'est pas étayée et fausse l'interprétation du DFGe et du poids quotidien.",
  ],
  sections: [
    {
      headingFr: '1. Sarcopénie, fragilité et cachexie : comprendre les différences et les tests',
      depth: 'patient',
      bodyMarkdownFr: `Une même personne peut présenter un seul ou plusieurs de ces états, et la sarcopénie peut se cacher derrière un poids normal ou un surpoids (**obésité sarcopénique**).

### Trois définitions clés

- **Sarcopénie (consensus européen EWGSOP2, 2019) :** perte de **force musculaire** (sarcopénie probable), confirmée par une baisse de la **masse ou qualité musculaire** (sarcopénie confirmée), et jugée sévère si les performances physiques (marche, équilibre) sont également altérées. La force passe en premier car elle prédit mieux l'évolution que la seule masse.
- **Fragilité :** état dynamique de moindre réserve face au stress, évalué par le phénotype physique de Fried (perte de poids, épuisement, faible poignée, marche lente, faible activité), l'échelle clinique **Clinical Frailty Scale** (de 1 = très en forme à 9) ou le cadre en **4 domaines de la HFA/ESC** (clinique, physique, psycho-cognitif, social ; voir *Goutte, BPCO, thyroïde et autres comorbidités*).
- **Cachexie cardiaque (Evans 2008) :** perte de poids involontaire d'au moins **5 % en 12 mois** liée à la maladie chronique, accompagnée d'au moins trois signes parmi baisse de force, fatigue, perte d'appétit, baisse de masse maigre ou anomalies biologiques (inflammation, anémie, albumine basse). La HFA (2020) retient déjà une perte de poids involontaire hors œdèmes de plus de 5 % sur 3 à 12 mois comme signal d'alerte précoce.

### Les tests simples réalisés en consultation

| Test | Ce qu'il mesure | Repère EWGSOP2 (hommes / femmes) | Remarque pratique dans l'IC |
|---|---|---|---|
| **Dynamomètre de poignée** | Force musculaire | < 27 kg / < 16 kg | Rapide et fiable ; recommandé en suivi par la HAS dès 70 ans |
| **5 levers de chaise** | Force des jambes | > 15 secondes (tous) | Sans matériel ; utile aussi en cas d'obésité |
| **Vitesse de marche** | Performance / sévérité | ≤ 0,8 m/s | Mesurée sur quelques mètres |
| **SPPB** | Équilibre, marche, levers de chaise | ≤ 8 points | Critère principal de l'essai REHAB-HF |
| **Timed Up and Go** | Mobilité globale | ≥ 20 secondes | Se lever, marcher 3 m, revenir s'asseoir |
| **DXA ou impédancemétrie (BIA)** | Masse musculaire | DXA : < 20 kg / < 15 kg (ou < 7,0 / < 5,5 kg/m²) | Attention : l'eau retenue dans les jambes fausse la BIA et peut surestimer la masse maigre |
| **Questionnaire MNA-SF** | Dépistage de la dénutrition | Score en 6 questions | Plus fiable que le score CONUT, qui est faussé par les statines (voir *Poids, obésité et dénutrition*) |`,
    },
    {
      headingFr: '2. Ce qui aide concrètement : exercice, protéines, médicaments et compléments',
      depth: 'patient',
      bodyMarkdownFr: `### Activité physique : endurance, renforcement et équilibre

- L'endurance aérobie reste la base, complétée par un **renforcement musculaire** adapté (charges permettant 10 à 15 répétitions selon l'ESC 2020 ; 2 à 3 fois par semaine selon GERS-P/SFC 2023). Chez les personnes très déconditionnées ou fragiles, commencer par **l'équilibre, la mobilité et la force avant l'endurance** est logique (AHA 2023 ; REHAB-HF).
- En France, la HAS 2022 mentionne la « musculation » comme contre-indiquée sans la définir précisément : faites toujours valider les charges et exercices par votre équipe de réadaptation cardiaque (voir *Musculation contre endurance en réadaptation cardiaque*).

### Protéines et apports énergétiques

Les repères gériatriques internationaux (**PROT-AGE 2013**, **ESPEN 2014**) proposent **1,0 à 1,2 g de protéines/kg/j** après 65 ans, et **1,2 à 1,5 g/kg/j** en cas de maladie chronique, d'hospitalisation ou de dénutrition (à calculer sur le **poids sec**, hors surcharge en eau).

- **Exception rénale importante :** en cas de maladie rénale chronique sévère (**DFGe < 30 mL/min** non dialysé), des apports protéiques plus bas peuvent être nécessaires ; faites fixer votre cible avec votre médecin et un(e) diététicien(ne).
- Lors d'une hospitalisation ou d'une perte de poids involontaire, un soutien nutritionnel précoce prime sur toute restriction (voir l'essai EFFORT dans *Poids, obésité et dénutrition*).

### Effet des médicaments de l'IC et verdict sur les compléments

- **Inhibiteurs SGLT2 (dapagliflozine — *Forxiga*) :** dans DAPA-HF, le bénéfice clinique se maintenait quel que soit le niveau de fragilité, avec le **gain absolu le plus important chez les patients les plus fragiles**, sans excès d'effets indésirables graves.
- **Agonistes du GLP-1 :** ils entraînent une perte de masse maigre plus marquée que d'autres méthodes d'amaigrissement et n'ont de bénéfice IC démontré qu'en FEVG préservée (voir *Médicaments GLP-1 et incrétines*).
- **Verdict sur les compléments (synthèse des preuves, non une prescription) :**

| Produit | Verdict | Points de sécurité à vérifier avec votre équipe ou pharmacien |
|---|---|---|
| **Soutien diététique et CNO en cas de dénutrition** | **À discuter** | Volume liquidien (si restriction hydrique), teneur en sucre (diabète), potassium et sodium (ARM, ARNI, reins) |
| **Apport protéique alimentaire adapté (1,0 à 1,5 g/kg/j)** | **À discuter avec un(e) diététicien(ne)** | Adapter en cas de DFGe < 30 mL/min hors dialyse |
| **HMB** | **Possible, aucune preuve dans l'IC** | Aucun essai dédié dans l'IC ; composition variable selon les produits |
| **Créatine** | **Non étayée dans l'IC** | Fait artificiellement monter la créatinine (fausse baisse du DFGe) et retient de l'eau (brouille la pesée quotidienne) |
| **Testostérone / anabolisants** | **À éviter hors prescription spécialisée** | Œdèmes, hausse tensionnelle, hématocrite et interaction AVK (voir *Hormones, testostérone et ménopause*) |
| **Vitamine D** | **Corriger une carence avérée uniquement** | Utile pour les os et les muscles en cas de carence, pas un traitement cardiaque (voir *Vitamine D*) |`,
    },
    {
      headingFr: '3. Repères pratiques en France : critères HAS de dénutrition, CNO et APA',
      depth: 'patient',
      bodyMarkdownFr: `### Critères français de diagnostic de la dénutrition (HAS / FFN 2019 et 2021)

Le diagnostic associe **au moins 1 critère phénotypique** et **au moins 1 critère étiologique** (une maladie chronique évolutive comme l'insuffisance cardiaque peut constituer le critère étiologique) :

| Critère | Adultes de 18 à 69 ans | À partir de 70 ans |
|---|---|---|
| **Perte de poids** | ≥ 5 % en 1 mois, ou ≥ 10 % en 6 mois, ou ≥ 10 % par rapport au poids habituel | Identique |
| **IMC** | < 18,5 kg/m² | **< 22 kg/m²** |
| **Muscle** | Baisse mesurée de masse et/ou de fonction musculaire | **Sarcopénie confirmée** (force et masse basses) |
| **Critère de sévérité** | IMC ≤ 17 ; perte ≥ 10 % en 1 mois ou ≥ 15 % en 6 mois ; albumine ≤ 30 g/L | IMC < 20 ; mêmes seuils de perte ; albumine < 30 g/L |

L'albumine sert à évaluer la **sévérité**, pas à poser seule le diagnostic. Un IMC normal ou élevé n'exclut pas une dénutrition. La HAS recommande une pesée à chaque consultation et, dès 70 ans, une surveillance de l'appétit, des apports et de la force musculaire.

### CNO et Activité Physique Adaptée (APA)

- **Compléments nutritionnels oraux (CNO) :** inscrits sur la LPPR, ils sont rapportés comme remboursés à 60 % chez l'adulte dénutri sur ordonnance précisant le produit et le nombre d'unités par jour, pour une durée limitée avec réévaluation *(modalités exactes à confirmer avec votre pharmacien, votre prescripteur ou votre CPAM)*.
- **Activité physique adaptée (APA, « sport sur ordonnance ») :** prescriptible par tout médecin en cas d'ALD (et par les IPA depuis avril 2025 ; renouvelable/adaptable une fois par un kinésithérapeute). Elle n'est **pas** remboursée de façon générale par l'Assurance Maladie, même en ALD, mais certaines ARS, collectivités et mutuelles la financent ; **581 Maisons Sport-Santé** orientent vers les structures locales. À ne pas confondre avec la **réadaptation cardiaque en SMR (phase II)**, qui est intégralement prise en charge (voir *Vivre avec une insuffisance cardiaque en France*).`,
    },
    {
      headingFr: '4. Données détaillées des études, comparatif et limites des preuves',
      depth: 'evidence',
      bodyMarkdownFr: `### Fréquence et pronostic dans l'ICFER

| Étude / méta-analyse | Population | Résultat principal | Applicabilité à l'ICFER ischémique (~35 %) |
|---|---|---|---|
| **Chen et coll. (2023)** (21 études observationnelles, 68 556 patients) | FEVG mixtes (11 études hospitalières : 66 954 patients ; 6 ambulatoires : 990) | Sarcopénie : **31 %** au global (**28 %** en ICFER, 18 % en ICFEP ; **39 %** hospitalisés, **20 %** ambulatoires). Mortalité toutes causes **HR 2,06 (1,52–2,80)**, hospitalisations **HR 1,52 (1,40–1,65)** ; mauvais pronostic en ICFER **HR 2,77 (1,29–5,95)** | **Partielle** (forte hétérogénéité I² 98 %, biais de publication possible) |
| **SICA-HF (von Haehling 2020 ; 268 patients ambulatoires, DXA, suivi moyen 67 mois)** | **ICFER n = 181, FEVG moyenne 31 %, 67 % ischémiques** | Fonte musculaire chez **21,5 %** des ICFER (9 % ICFEP) ; mortalité ajustée **HR 1,97 (1,05–3,71)** après ajustement (âge, NYHA, FEVG, rein, NT-proBNP, carence en fer) | **Directe** sur la population (observationnelle, association uniquement) |
| **Denfeld et coll. (2017)** (26 études, 6 896 patients) | FEVG mixtes | Fragilité chez **44,5 % (36,2–52,8 %)** : 39 % en ville, 49 % à l'hôpital, indépendamment de l'âge et de la classe NYHA | **Partielle** (FEVG et cause non stratifiées) |

### Interventions testées

- **REHAB-HF (349 patients âgés après hospitalisation IC, 97 % fragiles/pré-fragiles) :** gain global de **+1,5 point** au SPPB (+2,1 chez les fragiles vs +0,8 chez les pré-fragiles). **Nuance importante (Mentz 2021) :** chez les 164 patients avec **FEVG < 45 %**, le gain était plus modeste (**+1,1 point**) et plus incertain, avec un signal numérique non significatif de mortalité (rapport de taux 2,21 ; IC 95 % 0,78–6,25).
- **HF-ACTION (analyse post-hoc sur la fragilité, Pandey 2022) :** chez les patients ICFER fragiles (59 %), l'entraînement aérobie était associé à moins d'hospitalisations ou de décès (**HR 0,83**).
- **DAPA-HF (analyse post-hoc par fragilité, Butt 2022, résumé) :** réduction des aggravations d'IC ou décès CV dans chaque classe de fragilité, avec le plus grand bénéfice absolu chez les plus fragiles (**7,9** contre **3,5** événements évités pour 100 patients-années).
- **NOURISH (652 patients hospitalisés dénutris ≥ 65 ans pour IC, IDM, pneumonie ou BPCO, résumé) :** CNO hyperprotéiné avec **HMB** : critère principal à 90 jours (décès ou réadmission) **non significatif** (26,8 % vs 31,1 %) ; mortalité secondaire plus basse (4,8 % vs 9,7 %, liens industriels, FEVG non rapportée ; *applicabilité extrapolée*). En sarcopénie hors IC (6 petits essais), le HMB améliore légèrement la force de préhension sans effet sur la masse musculaire ni la vitesse de marche.
- **Créatine :** +1,4 kg de masse maigre (partiellement hydrique) chez les seniors sains (22 essais, 721 personnes), mais le seul essai randomisé de 6 mois dans l'IC (Carvalho 2012, 33 hommes) est **neutre** sur la capacité d'effort.

### Comparatif et limites des preuves

- Les seuils de sarcopénie, fragilité et cachexie proviennent de la gériatrie générale, sans seuils propres à l'IC ; la rétention hydrique fausse le poids, l'IMC et la bio-impédance.
- Les recommandations ESC 2026 soulignent la fréquence et la valeur pronostique de ces quatre états (en distinguant fragilité cardiaque potentiellement réversible et non cardiaque), mais le tableau de définitions S17 n'était pas accessible.
- Plusieurs sources ont été lues au niveau du résumé (PROT-AGE, ESPEN 2014, NOURISH, Butt 2022, méta-analyses HMB/créatine) et les conditions exactes de remboursement LPPR des CNO n'ont pas été vérifiées sur le texte réglementaire primaire.`,
    },
  ],
  relatedArticleSlugs: [
    'poids-obesite-et-denutrition',
    'readaptation-cardiaque-et-activite-physique',
    'musculation-vs-endurance-readaptation-cardiaque',
    'goutte-bpco-thyroide-et-autres-comorbidites',
    'vitamine-d-insuffisance-cardiaque',
    'carence-martiale-et-fer-iv',
    'medicaments-glp1-et-incretines',
    'complements-energetiques-cardiaques',
    'hormones-testosterone-et-menopause',
    'sante-cerebrale-et-cognition',
    'cancer-et-coeur-cardio-oncologie',
    'insuffisance-cardiaque-avancee-stade-d',
    'vivre-avec-insuffisance-cardiaque-en-france',
  ],
  sources: [
    { label: 'EWGSOP2 (2019), ESPEN/EASO (2022), Fried (2001), Clinical Frailty Scale (Rockwood 2020) et Evans (2008)', detail: 'Définitions et seuils de la sarcopénie, de l’obésité sarcopénique, de la fragilité et de la cachexie' },
    { label: 'Chen et al. (2023), Denfeld et al. (2017) et cohorte SICA-HF (von Haehling 2020, Fülster 2013)', detail: 'Prévalence et pronostic de la sarcopénie (21,5 % en ICFER ambulatoire, HR 1,97) et de la fragilité (~45 %)' },
    { label: 'REHAB-HF (NEJM 2021, Mentz 2021), HF-ACTION (Pandey 2022), EFFORT HF (JACC 2021) et DAPA-HF (Butt 2022)', detail: 'Réadaptation multidomaine, soutien nutritionnel hospitalier et bénéfice de la dapagliflozine selon la fragilité' },
    { label: 'PROT-AGE (2013), ESPEN (2014), NOURISH (2016), méta-analyses HMB/créatine et Carvalho (2012)', detail: 'Repères protéiques (1,0–1,5 g/kg/j, exception DFGe < 30), limites du HMB et neutralité de la créatine dans l’IC' },
    { label: 'HAS / FFN (2019, 2021 dénutrition), HAS (2022), GERS-P/SFC (2023), ESC (2026) et ameli.fr (APA / Maisons Sport-Santé)', detail: 'Critères français de dénutrition (IMC < 22 et sarcopénie confirmée dès 70 ans), CNO et parcours APA/SMR' },
  ],
  disclaimerType: 'medical',
};
