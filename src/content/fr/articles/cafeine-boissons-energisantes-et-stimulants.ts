import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'cafeine-boissons-energisantes-et-stimulants',
  sourceWikiPath: 'wiki/concepts/caffeine-energy-drinks-and-stimulants.md',
  titleFr: 'Caféine, boissons énergisantes, décongestionnants et stimulants',
  category: 'nutrition',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'caféine',
    'café',
    'boissons-énergisantes',
    'taurine',
    'stimulants',
    'brûleurs-de-graisse',
    'pré-entraînement',
    'synéphrine',
    'orange-amère',
    'éphédra',
    'dmaa',
    'yohimbine',
    'pseudoéphédrine',
    'phényléphrine',
    'décongestionnants',
    'méthylphénidate',
    'lisdexamfétamine',
    'stimulants-tdah',
    'arythmie',
    'qtc',
    'dai',
    'anses',
    'ansm',
    'ema',
  ],
  aliases: [
    'Boissons énergisantes',
    'Caféine et insuffisance cardiaque',
    'Café et arythmie',
    'Brûleurs de graisse',
    'Pré-entraînement',
    'Pre-workout',
    'Orange amère',
    'Synéphrine',
    'Éphédra',
    'DMAA',
    'Comprimés de caféine',
    'Stimulants',
    'Pseudoéphédrine',
    'Phényléphrine',
    'Médicaments rhume',
    'Décongestionnants',
    'Méthylphénidate',
    'Ritaline',
    'Lisdexamfétamine',
    'Xurta',
    'Stimulants TDAH',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Cinq familles très différentes de produits stimulants sont souvent confondues. Le café et le thé en quantité habituelle apparaissent neutres : dans le seul essai conduit dans l'ICFER (51 patients, 61 % porteurs d'un DAI), 500 mg de caféine sur une matinée n'ont pas augmenté les extrasystoles ventriculaires. À l'inverse, les boissons énergisantes ne sont pas du simple café fort : environ 1 litre allonge le QTc de 6 à 8 ms et élève la pression artérielle davantage que la même dose de caféine seule ; l'ANSES recommande de ne jamais les consommer avec de l'alcool ni pendant l'effort physique. Les brûleurs de graisse, produits de pré-entraînement et poudres de caféine sont à éviter (stimulants cumulés, substances interdites ou médicaments cachés fréquents). Les décongestionnants oraux contre le rhume (pseudoéphédrine, passée sur ordonnance Liste I en France depuis le 11 décembre 2024 pour risques vasculaires rares et parfois associée à de l'ibuprofène ; phényléphrine orale jugée inefficace par la FDA) sont également à éviter. Enfin, les stimulants prescrits pour le TDAH (méthylphénidate — Ritaline, lisdexamfétamine — Xurta) relèvent d'une réévaluation conjointe entre le spécialiste prescripteur et votre cardiologue : ne commencez ni n'arrêtez jamais un traitement prescrit de vous-même.",
  sections: [
    {
      headingFr: 'Verdict en un coup d’œil',
      bodyMarkdownFr: `| Produit | Verdict | Raison principale | Directitude des preuves |
|---|---|---|---|
| **Café ou thé en quantité habituelle** | **Neutre** | Pas d'extrasystoles supplémentaires avec 500 mg de caféine dans l'ICFER ; pas de signal de danger post-infarctus ; moins de récidives de FA avec le café poursuivi dans DECAF | Un petit essai randomisé ICFER ; cohortes et essais FA |
| **Boissons énergisantes (grandes quantités, ou toute prise avec alcool ou effort)** | **À éviter** | Hausse du QTc et de la tension au-delà de la seule caféine ; cas d'arrêts cardiaques avec ces cofacteurs ; avis ANSES | Essais chez volontaires sains, cas cliniques, avis ANSES |
| **Comprimés, poudres et « shots » de caféine** | **À éviter** | Erreurs de dosage faciles à l'échelle du gramme ; décès par fibrillation ventriculaire | Revue systématique des cas mortels |
| **Brûleurs de graisse et pré-entraînements (synéphrine + caféine, éphédra, DMAA, yohimbine, mélanges opaques)** | **À éviter** (mélanges inconnus : éviter tant que l'équipe ne les a pas vérifiés) | Déconseillés par l'ANSES et l'AHA en cas de cardiopathie ; médicaments non déclarés fréquents | Avis réglementaires, analyses de produits, cas cliniques |
| **Décongestionnants oraux rhume/sinus (pseudoéphédrine, phényléphrine)** | **À éviter** | Passés sur ordonnance (**Liste I**) en France depuis décembre 2024 (infarctus, AVC, PRES, RCVS) ; contre-indiqués en coronaropathie/rein sévères ; certains contiennent de l'ibuprofène ; phényléphrine orale inefficace (FDA) | Décisions et RCP officiels ANSM/EMA/BDPM/FDA ; déclaration AHA 2016 |
| **Stimulants prescrits pour le TDAH (méthylphénidate, lisdexamfétamine, amphétamines)** | **Avis conjoint spécialiste + cardiologue** (ne jamais initier ni arrêter seul) | Le RCP du méthylphénidate contre-indique explicitement IC, cardiomyopathie et infarctus ; celui de la lisdexamfétamine contre-indique les MCV symptomatiques ; cohortes nationales 2024–2026 montrant une hausse du risque CV (et d'IC au Danemark) | RCP officiels FR/UK ; déclaration AHA 2016 ; cohortes nationales population générale (aucun essai ICFER) |
| **Taurine seule en complément** | **Non étayée** (voir la fiche *Compléments énergétiques cardiaques*) | N'est pas l'ingrédient problématique des boissons énergisantes ; bénéfices reposant sur de petites études en partie rétractées | Petits essais anciens |

La mention **« à éviter »** concerne exclusivement les produits pris de votre propre initiative : elle ne constitue jamais un motif pour interrompre ou modifier un médicament prescrit sans avis médical.`,
    },
    {
      headingFr: 'Café et caféine dans l’insuffisance cardiaque : les preuves directes',
      bodyMarkdownFr: `- **Zuchinali (2016) — le seul essai randomisé dans l'ICFER :** **51 patients ambulatoires** (FEVG < 45 %, moyenne **29 %**, NYHA I–III, dont **61 % porteurs d'un DAI**) ont reçu en croisé 500 mg de caféine (répartis en cinq prises horaires avec café décaféiné) ou un placebo, puis l'autre bras une semaine plus tard :
  - extrasystoles ventriculaires : **185 sous caféine contre 239 sous placebo** (non significatif) ;
  - extrasystoles auriculaires : **6 contre 6** ;
  - aucune hausse des doublets, du bigéminisme ni des tachycardies ventriculaires non soutenues ; aucun changement des extrasystoles à l'effort, du temps d'exercice, du pic de VO₂ estimé ni de la fréquence cardiaque ;
  - les patients ayant les taux sanguins de caféine les plus élevés n'avaient pas davantage d'extrasystoles.
  - *Limites :* une seule matinée, 51 participants, critère rythmique intermédiaire (pas les chocs de DAI ni les événements cliniques) et proportion exacte de cause ischémique non indiquée dans le résumé.
- **Graboys (1989) :** chez 50 patients ayant présenté des arythmies ventriculaires graves (84 % atteints de maladie coronaire ou de cardiomyopathie), 200 mg de caféine avec effort horaire sur vélo n'ont pas augmenté les arythmies ventriculaires par rapport au décaféiné (étude ancienne, petite et antérieure aux DAI, mais concordante).
- **Après un infarctus (van Dongen 2017, cohorte néerlandaise Alpha Omega) :** chez **4 365 patients** suivis environ 7 ans, boire plus de 2 à 4 tasses de café par jour était associé à une mortalité cardiovasculaire plus basse que 0 à 2 tasses (**HR 0,69** ; IC 95 % 0,54–0,89), avec une association similaire pour le décaféiné (données observationnelles, FEVG non renseignée).
- **Rappel des essais hors ICFER :** dans **CRAVE** (adultes sains), le café augmentait les extrasystoles ventriculaires (154 contre 102/j) sans modifier les extrasystoles auriculaires ; dans **DECAF** (après cardioversion pour FA), poursuivre environ une tasse de café par jour s'accompagnait de moins de récidives de FA (voir la fiche *Alimentation cardioprotectrice*).
- **D'où vient le repère de 400 mg/j ?** L'avis **EFSA 2015** (jusqu'à 200 mg par prise et 400 mg/j) s'applique aux **adultes en bonne santé** : l'EFSA précise expressément ne pas avoir évalué les personnes atteintes d'une maladie ni les associations avec des médicaments. Ce n'est pas un plafond individuel pour l'ICFER : convenez de votre limite personnelle avec votre cardiologue.`,
    },
    {
      headingFr: 'Boissons énergisantes : pourquoi elles sont traitées à part',
      bodyMarkdownFr: `### Ce que contient une canette

Sur le marché français, l'**ANSES (2013)** a relevé **12 à 32 mg de caféine pour 100 mL** (moyenne pondérée des ventes : 30 mg/100 mL) ainsi que **250 à 410 mg de taurine pour 100 mL** : une canette de 250 mL équivaut en moyenne à environ deux expressos (soit environ 80 mg pour 250 mL et 160 mg pour 500 mL à 32 mg/100 mL). Le règlement européen **UE 1169/2011** impose la mention « Teneur élevée en caféine » au-delà de 150 mg/L en citant les enfants et les femmes enceintes ou allaitantes, mais sans mentionner les patients cardiaques.

### Essais chez des volontaires sains

- **Shah (2019, essai croisé, 34 adultes) :** environ **1 litre** de boisson énergisante (304 à 320 mg de caféine) a augmenté le pic d'intervalle **QTc** de 17,9 à 19,6 ms contre 11,9 ms sous placebo (écart supplémentaire de **6 à 8 ms**, inférieur au seuil d'alerte réglementaire d'environ 10 ms ; deux personnes ont dépassé +50 ms, aucune n'a atteint 500 ms) et la pression artérielle systolique de 14,4 à 15,9 mmHg contre 9,8 mmHg. Les auteurs conseillent aux personnes ayant un QT long congénital ou acquis ou une hypertension de rester vigilantes et de limiter leur consommation.
- **Fletcher (2017, 18 adultes) :** en comparant une boisson énergisante à la **même dose de 320 mg de caféine** diluée dans de l'eau gazeuse, l'écart sur le QTc atteignait environ **10 ms** à 2 heures, la pression systolique restait augmentée de **+4,7 contre +0,8 mmHg** à 6 heures et des palpitations ont été rapportées chez **4 participants sur 18 contre 0 sur 18**. L'effet dépasse donc celui de la caféine seule.
- **Cao (2021, revue de 19 essais) :** 8 essais ont observé un allongement du QTc (surtout au-delà de ~800 mL), sans arythmie cliniquement significative enregistrée en essai.

### Événements graves rapportés et avis de l'ANSES

- **Cas publiés (Cao 2021) :** 32 cas cliniques (majoritairement des hommes jeunes), dont 20 arythmies, 14 signes ECG d'ischémie et 3 décès après arythmie ventriculaire ; 10 impliquaient de l'alcool, des amphétamines ou une source supplémentaire de caféine, parfois jusqu'à une vingtaine de canettes.
- **Nutrivigilance française (ANSES 2013) :** sur 257 signalements (212 évaluables), **25 (12 %)** ont été jugés vraisemblablement ou très vraisemblablement imputables à la boisson, majoritairement cardiovasculaires. Sur 8 arrêts cardiaques, un seul a été jugé très vraisemblable (une adolescente de 16 ans après avoir dansé avec alcoolémie positive). L'ANSES conclut que les arrêts surviennent probablement sur un terrain rythmique méconnu, déclenchés par l'association boisson + effort, alcool, hypokaliémie ou certains médicaments.
- **Série Mayo Clinic (Martinez 2024) :** parmi 144 survivants d'arrêt cardiaque porteurs d'une canalopathie héréditaire, 7 (5 %) avaient fait leur arrêt peu après une boisson énergisante (causalité non établie ; risque absolu jugé très faible).
- **Recommandations de l'ANSES (2013) :** éviter pour tous les boissons énergisantes avec de l'**alcool** et pendant l'**activité physique** ; inviter les personnes souffrant de troubles du rythme à évaluer leur consommation de caféine avec un professionnel de santé et appeler à une vigilance particulière en cas de « certains troubles cardiovasculaires » (l'IC n'est pas nommée).
- **La taurine est-elle en cause ?** Probablement pas : dans de petits essais, la taurine tend plutôt à abaisser légèrement la tension et le pouls (note : la méta-analyse Tzang 2024 inclut un essai rétracté en avril 2026 ; voir la fiche *Compléments énergétiques cardiaques*). L'ANSES (2013) relevait des données fragmentaires d'un éventuel effet tensionnel additif avec la caféine, tandis que l'EFSA (2015) estimait que les autres ingrédients ne modifiaient pas la sécurité d'une dose de 200 mg de caféine chez l'adulte sain.`,
    },
    {
      headingFr: 'Brûleurs de graisse, produits de pré-entraînement et caféine concentrée',
      bodyMarkdownFr: `Ces produits vendus pour maigrir, « donner de l'énergie » ou stimuler les séances de sport cumulent souvent la caféine (café, guarana, extrait de thé vert — qui comporte en outre un risque hépatique propre) et d'autres stimulants :

- **Orange amère (*p*-synéphrine, ANSES 2014) :** l'ANSES n'a pu fixer aucune dose sûre. Elle **déconseille fortement** la *p*-synéphrine aux personnes traitées au long cours pour hypertension, maladie cardiaque ou dépression, et interdit son association à la caféine (tous les produits impliqués dans des signalements cardiovasculaires contenaient de la caféine ; la hausse tensionnelle est majorée à l'effort).
- **Éphédra (*ma huang*) et éphédrine :** interdit dans les compléments aux États-Unis (**FDA 2004**, qui documente un risque même à court terme dans l'IC et la maladie coronaire, avec aggravation de l'IC et arythmies majorées par la caféine et l'effort) et en France (**ANSES 2016**). L'**AHA 2016** conseille d'éviter tout produit apparenté à l'éphédra dans l'insuffisance cardiaque.
- **DMAA et analogues amphétaminiques :** le DMAA (méthylhexanamine, parfois étiqueté « extrait de géranium ») est illégal dans les compléments en France et aux États-Unis et lié à des poussées hypertensives, arythmies et infarctus (**ANSES 2016** ; **FDA/Cohen 2018**). Lors d'un contrôle en 2017 de 12 marques, années après l'interdiction, **9 contenaient encore un stimulant interdit** (dont un nouvel analogue, le DMBA) et 6 en contenaient deux ou plus.
- **Yohimbine :** citée par l'**AHA 2016** parmi les produits pouvant nuire dans l'IC en élevant la pression artérielle.
- **Médicaments cachés non déclarés (Tucker 2018) :** parmi **317 compléments minceur** épinglés par la FDA entre 2007 et 2016, **85 %** contenaient de la **sibutramine** (médicament amaigrissant retiré pour risque cardiovasculaire), certains des **diurétiques de l'anse**, du **propranolol**, de l'éphédrine ou du DMAA, et un quart renfermaient plus d'une substance cachée. Seuls 46 % ont fait l'objet d'un rappel.
- **Comprimés et poudres de caféine (Cappelletti 2018) :** dans 92 décès publiés liés à la caféine (hors boissons énergisantes), la cause était le plus souvent une arythmie ou fibrillation ventriculaire, impliquant surtout en accidentel des produits minceur ou des comprimés/poudres achetés en ligne.
- **Compléments pour sportifs (ANSES 2016) :** l'ANSES déconseille les compléments visant la prise de masse musculaire ou la perte de graisse en cas de maladie cardiaque ou de facteurs de risque cardiovasculaire, ainsi que les suppléments de caféine avant et pendant le sport.`,
    },
    {
      headingFr: 'Décongestionnants oraux contre le rhume (pseudoéphédrine et phényléphrine)',
      bodyMarkdownFr: `Les vasoconstricteurs décongestionnants (sympathomimétiques alpha- et bêta-adrénergiques) sont faciles à oublier car ils sont présentés contre le nez bouché plutôt que comme des stimulants.

### Pseudoéphédrine : avertissements européens (2024) et ordonnance obligatoire en France (décembre 2024)

- **Réévaluation européenne (EMA 2023–2024) :** à la suite de cas rares mais potentiellement mortels d'atteintes vasculaires cérébrales — syndrome d'encéphalopathie postérieure réversible (**PRES**) et syndrome de vasoconstriction cérébrale réversible (**RCVS**) — l'EMA (25 janvier 2024) et les décisions contraignantes de la Commission européenne (25 et 27 mars 2024) ont ajouté des contre-indications dans toute l'UE en cas d'**hypertension artérielle sévère ou non contrôlée** et de **maladie ou insuffisance rénale aiguë ou chronique sévère**, en plus des risques d'infarctus et d'AVC. Les signes d'alerte imposant l'arrêt immédiat et un avis urgent (15 / 112) sont : maux de tête brutaux « en coup de tonnerre », nausées, vomissements, confusion, convulsions ou troubles visuels.
- **Passage sur Liste I en France le 11 décembre 2024 (ANSM) :** jugeant les avertissements européens insuffisants après un rebond des ventes dès septembre 2024 — et rappelant que ces accidents graves peuvent survenir quelle que soit la dose ou la durée pour un simple rhume viral bénin de 7 à 10 jours — l'**ANSM** (décision du 9 décembre 2024) a placé tous les vasoconstricteurs oraux à base de pseudoéphédrine sur **Liste I** (ordonnance obligatoire depuis le 11 décembre 2024 ; les sprays vasoconstricteurs nasaux l'étaient déjà en France). Les spécialités françaises concernées incluent *Actifed Rhume*, *Actifed Rhume jour et nuit*, *Dolirhume*, *Dolirhumepro*, *Humex Rhume*, *Nurofen Rhume*, *Rhinadvil Rhume* et *Rhinadvilcaps*. Même sur ordonnance, **l'ANSM continue de déconseiller la pseudoéphédrine pour un rhume**, recommandant le lavage nasal au sérum physiologique et l'hydratation.
- **RCP français actualisés et piège de l'ibuprofène caché :** les RCP français (BDPM) d'*Actifed Rhume* (janvier 2026) et de *Dolirhume* (juin 2025) confirment le statut Liste I et contre-indiquent explicitement la **maladie coronaire sévère**, l'**hypertension sévère ou non contrôlée**, la **maladie ou insuffisance rénale aiguë ou chronique**, le risque d'AVC et l'association au **méthylphénidate**. Point critique : ***Nurofen Rhume* et *Rhinadvil* associent la pseudoéphédrine à l'ibuprofène**, un AINS non recommandé (Classe III) dans l'insuffisance cardiaque.

### Phényléphrine par voie orale

Le **7 novembre 2024**, la FDA américaine a proposé de retirer la **phényléphrine orale** de sa monographie des médicaments en vente libre pour **absence d'efficacité démontrée** lorsqu'elle est avalée (les sprays nasaux ne sont pas concernés). De son côté, la déclaration **AHA 2016** avertit que la phényléphrine comme la pseudoéphédrine peuvent déclencher ischémie, infarctus, AVC et arythmies, et les inscrit sur la liste des médicaments à éviter en cas de QT long congénital.`,
    },
    {
      headingFr: 'Stimulants prescrits pour le TDAH (méthylphénidate, lisdexamfétamine)',
      bodyMarkdownFr: `Contrairement aux brûleurs de graisse en vente libre, les médicaments du TDAH sont des **traitements prescrits** pour un trouble reconnu. **N'arrêtez et ne modifiez jamais un traitement prescrit sans avis médical** : dans l'insuffisance cardiaque, toute décision appartient conjointement au spécialiste prescripteur (psychiatre ou neurologue) et à votre cardiologue.

### Ce que disent les RCP officiels français (BDPM) et britanniques (eMC)

- **Méthylphénidate** (*Ritaline* 10 mg, BDPM sept. 2025 ; *Concerta XL*, eMC nov. 2025) : la rubrique 4.3 **contre-indique explicitement** l'utilisation en cas de troubles cardiovasculaires préexistants incluant l'**insuffisance cardiaque**, la **cardiomyopathie**, l'**infarctus du myocarde**, l'**angor**, l'hypertension sévère, l'artériopathie oblitérante, les cardiopathies congénitales hémodynamiquement significatives et les arythmies ou canalopathies menaçant le pronostic vital. Le RCP français contre-indique également l'association aux alpha-sympathomimétiques oraux ou nasaux (tels que la pseudoéphédrine).
- **Lisdexamfétamine** (*Xurta* 30 mg, BDPM août 2026 ; *Elvanse*, eMC oct. 2026) : la rubrique 4.3 contre-indique les **maladies cardiovasculaires symptomatiques**, l'artériosclérose avancée et l'hypertension modérée à sévère. La rubrique 4.4 indique que les stimulants ne doivent généralement pas être utilisés en cas d'**insuffisance cardiaque**, de **cardiomyopathie**, d'**infarctus récent**, de cardiopathie structurelle grave ou d'arythmie grave, signale un possible **allongement du QTc** et mentionne des cas rapportés de cardiomyopathie sous amphétamines au long cours. En France, le méthylphénidate et la lisdexamfétamine sont classés comme **stupéfiants**, nécessitant une initiation spécialisée et une surveillance régulière de la pression artérielle et du pouls.

### Ce que montrent les cohortes nationales récentes (2022–2026, population générale TDAH)

Aucune étude n'a testé ces médicaments dans l'ICFER établie ; les données suivantes portent sur des populations générales traitées pour un TDAH :

| Étude | Population et suivi | Résultat cardiovasculaire principal | Détail insuffisance cardiaque / arythmies |
|---|---|---|---|
| **Zhang 2024** (*JAMA Psychiatry*, Suède, texte intégral) | 278 027 personnes avec TDAH (6–64 ans) ; 10 388 cas CV ; médiane 4,1 ans | Usage cumulé associé à une hausse des MCV : 3–5 ans **AOR 1,27** (1,17–1,39) ; > 5 ans **AOR 1,23** (1,12–1,36), tirée par l'**hypertension** (> 5 ans AOR 1,80) et les **maladies artérielles** (3–5 ans AOR 1,65) pour méthylphénidate et lisdexamfétamine | **Pas de hausse significative** de l'IC (370 cas ; > 5 ans AOR 1,23 [0,76–1,99]), des arythmies (> 5 ans AOR 0,87) ni de la cardiopathie ischémique (> 5 ans AOR 1,06) |
| **Holt 2024** (*JACC*, Danemark, résumé seul) | 73 264 adultes nouveaux utilisateurs (âge médian 30–33 ans) ; risque standardisé à 10 ans | Dose plus élevée (≥ 1 DDD/j vs anciens utilisateurs) : risque CV composite **3,9 % contre 3,0 %** (**RR 1,3** [1,1–1,5]) ; AVC 2,1 % vs 1,7 % (RR 1,2) | Risque d'**insuffisance cardiaque à 10 ans plus élevé** : **1,2 % contre 0,7 %** (**RR 1,7** [1,3–2,2]) ; syndrome coronaire aigu inchangé (1,0 % vs 0,9 %) |
| **Berthod 2026** (France SNDS, texte intégral) | 212 216 nouveaux utilisateurs de méthylphénidate (< 43 ans, 19,5 % d'adultes) vs 636 648 non-utilisateurs ; ~4 ans ; **antécédents CV exclus** | Incidence 2,3 vs 0,7 MCV/1 000 personnes-années ; aHR 2,37, **HR calibré par contrôles négatifs 1,85** (1,55–2,22) ; adultes aHR **1,56** (1,38–1,77) ; en conservant les comorbidités CV aHR **2,47** | Événements les plus fréquents : hypertension (0,6/1 000 PA) et arythmies (0,2/1 000 PA) ; IC rare dans cette cohorte jeune (0,05/1 000 PA) |
| **Zhang 2022** (*JAMA Netw Open*, méta-analyse, texte intégral) | 19 études observationnelles, 3,93 millions de personnes ; médiane 1,5 an | MCV globales **RR 1,22** (0,88–1,68, ns ; I² = 93,2 %) | Arrêt cardiaque / tachyarythmies RR 1,60 (0,94–2,72, ns) ; MCV préexistante RR regroupé 1,31 (0,80–2,16, ns), **mais les deux études au long cours avec MCV préexistante montraient un surrisque (RR 2,01 et RR 3,07)** |

**Lecture d'ensemble :** les taux absolus restent faibles chez les jeunes adultes sans cardiopathie et les études observationnelles ne peuvent exclure des facteurs de confusion résiduels. Néanmoins, les trois cohortes nationales récentes convergent vers une hausse relative modeste à modérée de l'hypertension et des événements cardiovasculaires en cas d'exposition prolongée, la cohorte danoise relève un signal d'insuffisance cardiaque à 10 ans aux doses usuelles ou élevées, et **aucune étude n'existe dans l'ICFER ischémique établie**, où les RCP posent déjà des contre-indications ou mises en garde explicites.`,
    },
    {
      headingFr: 'Recommandations, spécificités de l’ICFER et points à aborder avec votre équipe',
      bodyMarkdownFr: `### Ce que disent les recommandations cardiaques

- **ESC 2026 :** les conseils d'autogestion mentionnent d'éviter la cocaïne et les amphétamines ; la caféine et les boissons énergisantes ne sont pas traitées dans le texte principal lu.
- **AHA 2016 (médicaments pouvant aggraver l'IC) :** les stimulants sympathomimétiques (amphétamines, méthylphénidate, pseudoéphédrine) peuvent provoquer ou aggraver une insuffisance cardiaque et sont généralement évités dans l'IC ; éviter les produits de type éphédra et les compléments interagissant avec les bêtabloquants, la digoxine, les antiarythmiques ou les anticoagulants ; recenser chaque complément. Aucune recommandation ne fixe de limite chiffrée de caféine pour l'IC.

### Pourquoi la vigilance est accrue dans l'ICFER ischémique (raisonnement clinique, non testé en essai)

- Un ventricule gauche cicatriciel et dilaté constitue un terrain prédisposant aux arythmies ventriculaires ; les déclencheurs cités par l'ANSES (effort physique en réadaptation, alcool, hypokaliémie ou hypomagnésémie sous diurétiques, médicaments allongeant le QT tels que l'amiodarone) sont fréquents dans la vie quotidienne avec une ICFER.
- Les stimulants et vasoconstricteurs élèvent la fréquence cardiaque et la pression artérielle, s'opposant directement aux effets recherchés des bêtabloquants et des bloqueurs du SRAA.
- Des diurétiques de l'anse cachés dans certains produits minceur peuvent perturber l'équilibre hydrique et la kaliémie en s'ajoutant à votre traitement prescrit.

### Divergences et limites des sources

- Le signal rassurant du café (incluant un essai dans l'ICFER) et le signal défavorable des boissons énergisantes doivent être gardés distincts.
- L'auteur senior de la revue Cao (2021) et des essais Shah (2019) et Fletcher (2017) est intervenu comme expert judiciaire dans des litiges sur les boissons énergisantes ; les agences (ANSES, série Mayo, Cao) soulignent toutes que les accidents graves restent rares et liés à des cofacteurs.
- Aucune donnée d'essai dans l'ICFER n'existe pour les boissons énergisantes, la synéphrine, le DMAA, la yohimbine, les décongestionnants oraux ni les stimulants du TDAH.

### Questions utiles à poser à votre cardiologue ou votre pharmacien

- Ma consommation habituelle de café ou de thé est-elle compatible avec mon suivi (DAI, antécédents rythmiques, traitements), et y a-t-il une limite quotidienne à respecter ?
- Que puis-je utiliser en sécurité contre un rhume ou un nez bouché à la place des décongestionnants oraux ou des comprimés combinés contenant de l'ibuprofène ?
- Si je prends ou dois évaluer un traitement du TDAH (méthylphénidate, lisdexamfétamine), comment coordonner mon cardiologue et le spécialiste prescripteur (y compris sur les options non stimulantes) ?
- En cas de palpitations ou de choc de DAI après une boisson énergisante, un décongestionnant ou un complément, signalez toujours à votre équipe le produit exact et la quantité consommée.`,
    },
  ],
  relatedArticleSlugs: [
    'alimentation-cardioprotectrice',
    'complements-energetiques-cardiaques',
    'interactions-complements-aliments-medicaments',
    'dispositifs-cardiaques-dai-crt',
    'readaptation-cardiaque-et-activite-physique',
    'poids-obesite-et-denutrition',
    'medicaments-glp1-et-incretines',
    'magnesium-insuffisance-cardiaque',
    'tableau-preuves-nutrition-complements',
    'nutrition-et-complements-insuffisance-cardiaque',
    'questions-equipe-cardiologie',
  ],
  sources: [
    {
      label: 'Zuchinali et al. (2016), Graboys et al. (1989) et van Dongen et al. (2017)',
      detail: 'Seul essai randomisé de caféine dans l’ICFER (51 patients, 500 mg, neutre sur les extrasystoles), essai sur arythmies ventriculaires et cohorte post-infarctus Alpha Omega.',
    },
    {
      label: 'Shah et al. (2019), Fletcher et al. (2017), Cao et al. (2021), Martinez et al. (2024) et Cappelletti et al. (2018)',
      detail: 'Essais boissons énergisantes (QTc et pression artérielle au-delà de la seule caféine), cas cliniques d’arythmies/arrêts cardiaques et revue des décès liés à la caféine concentrée.',
    },
    {
      label: 'Avis ANSES (2013, 2014, 2016), EFSA (2015), Règlement UE 1169/2011, FDA (2004, DMAA/Cohen 2018) et Tucker et al. (2018)',
      detail: 'Nutrivigilance boissons énergisantes, p-synéphrine/orange amère, compléments sportifs, interdictions éphédra/DMAA et prévalence des médicaments non déclarés (sibutramine, diurétiques).',
    },
    {
      label: 'Décisions ANSM (décembre 2024), EMA (2024), RCP BDPM (Actifed Rhume, Dolirhume) et FDA (novembre 2024)',
      detail: 'Passage en Liste I des vasoconstricteurs oraux à la pseudoéphédrine en France, contre-indications PRES/RCVS/coronaropathie/rein, piège ibuprofène et retrait OTC proposé pour la phényléphrine orale.',
    },
    {
      label: 'RCP BDPM (Ritaline, Xurta), UK eMC (Concerta XL, Elvanse), AHA (2016), ESC (2026) et cohortes TDAH (Zhang 2024, Holt 2024, Berthod 2026, Zhang 2022)',
      detail: 'Contre-indications et mises en garde cardiovasculaires officielles du méthylphénidate et de la lisdexamfétamine, et données des cohortes nationales suédoise, danoise et française (SNDS).',
    },
  ],
  disclaimerType: 'medical',
};
