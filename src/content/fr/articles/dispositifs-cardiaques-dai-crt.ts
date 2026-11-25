import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'dispositifs-cardiaques-dai-crt',
  sourceWikiPath: 'wiki/concepts/heart-devices-icd-and-crt.md',
  titleFr: 'Dispositifs cardiaques implantés : DAI et CRT',
  category: 'dispositifs',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'hot',
  tags: [
    'dai',
    'icd',
    'crt',
    'crt-d',
    'crt-p',
    'mort-subite',
    'prévention-primaire',
    'dispositifs',
    'lifevest',
    'dai-sous-cutané',
    'qualité-de-vie',
  ],
  aliases: [
    'DAI',
    'Défibrillateur automatique implantable',
    'ICD',
    'CRT',
    'CRT-D',
    'CRT-P',
    'Resynchronisation cardiaque',
    'Stimulateur biventriculaire',
    'DAI sous-cutané',
    'S-ICD',
    'Gilet défibrillateur',
    'LifeVest',
  ],
  linkedModules: ['device'],
  plainSummaryFr:
    'Deux types de dispositifs implantés sont couramment discutés lorsque votre FEVG reste inférieure ou égale à 35 % malgré le traitement de fond : le DAI (défibrillateur automatique implantable), qui surveille le rythme cardiaque et délivre un choc en cas de trouble du rythme dangereux afin de prévenir la mort subite sans toutefois améliorer les symptômes du quotidien ; et la CRT (thérapie de resynchronisation cardiaque, un stimulateur spécial), qui aide les deux côtés du cœur à battre de façon coordonnée lorsque la conduction électrique est ralentie, ce qui peut améliorer les symptômes, réduire les hospitalisations et prolonger la vie. Un boîtier combinant les deux fonctions s’appelle un CRT-D. Les médicaments de l’insuffisance cardiaque sont poursuivis après toute implantation.',
  sections: [
    {
      headingFr: 'Quand un DAI est-il envisagé ? (Recommandations ESC 2026)',
      bodyMarkdownFr: `Un **DAI en prévention primaire** dans l’insuffisance cardiaque ischémique est recommandé (**ESC 2026, Classe I, niveau de preuve B1**) lorsque l’ensemble des conditions suivantes sont réunies :

1. symptômes de classe **NYHA II à III** ;
2. origine **ischémique**, avec une **FEVG ≤ 35 %** ;
3. **malgré au moins 3 mois de traitement de fond optimisé** ;
4. absence d’infarctus du myocarde au cours des **40 derniers jours** ;
5. espérance de vie supérieure à 1 an avec un bon statut fonctionnel.

Autres positions des recommandations ESC 2026 :

| Situation clinique | Position ESC 2026 |
|---|---|
| Mêmes critères mais origine *non ischémique* | Doit être envisagé (**Classe IIa**), recommandation plus nuancée |
| Dans les 40 jours suivant un infarctus du myocarde | **Non recommandé (Classe III)** |
| Classe NYHA IV avec symptômes réfractaires, non candidat à une CRT, une assistance circulatoire (VAD) ou une transplantation | **Non recommandé (Classe III)** |
| Après un trouble du rythme ventriculaire dangereux déjà survenu (« prévention secondaire ») | **Recommandé (Classe I)** |
| Gilet défibrillateur portable (LifeVest) en relais temporaire | Peut être envisagé (**Classe IIb**) |
| Avant le remplacement d’un boîtier de DAI en fin de pile | Une réévaluation en décision partagée doit être envisagée (**Classe IIa**) |

**Pourquoi attendre avant d’implanter ?**

- **Après un infarctus du myocarde :** dans les essais cliniques ayant implanté un DAI dès les premières semaines après un infarctus aigu (**DINAMIT**, **IRIS** ; 1 572 patients), aucun bénéfice sur la survie n’a été observé (HR 1,05).
- **Après l’instauration des médicaments :** les recommandations jugent raisonnable d’attendre environ **3 mois** pendant la titration du traitement de fond, car la FEVG peut s’améliorer. Elles reconnaissent néanmoins un risque résiduel de mort subite d’environ **2 à 4 % à 6 mois** durant cette phase d’attente.
- **Récupération fréquente de la FEVG après infarctus :** dans une étude portant sur 303 patients ayant une FEVG ≤ 40 % après angioplastie (stent) pour infarctus, la FEVG moyenne est passée de **32,4 %** immédiatement après le geste à **36,4 %** à 1 mois, puis **37,7 %** à 3 mois.
- **Origine du délai de « 3 mois après un geste coronaire » :** dans les recommandations rythmologiques ESC 2022, les 3 mois concernent bien le **traitement médicamenteux optimisé**. Le délai de 3 mois après stents ou pontage aorto-coronarien correspondait à un critère d’inclusion d’anciens essais comme **MADIT-II**, et non à une recommandation indépendante.`,
    },
    {
      headingFr: 'Ce que précisent les recommandations rythmologiques ESC 2022',
      bodyMarkdownFr: `Les recommandations ESC 2022 sur les troubles du rythme ventriculaires (arythmies ventriculaires et prévention de la mort subite) convergent avec les recommandations ESC 2026 sur l’insuffisance cardiaque et apportent des précisions importantes pour la maladie coronaire :

| Situation (maladie coronaire) | Position ESC 2022 | Classe, niveau |
|---|---|---|
| NYHA II–III, FEVG ≤ 35 % malgré au moins 3 mois de traitement optimisé | DAI recommandé | **I A** |
| Absence de symptôme (NYHA I), FEVG ≤ 30 % malgré au moins 3 mois de traitement optimisé | DAI doit être envisagé | **IIa B** |
| FEVG ≤ 40 % avec salves courtes de tachycardie ventriculaire (TV), si une exploration électrophysiologique déclenche une TV soutenue | DAI doit être envisagé | **IIa B** |
| Syncope inexpliquée après un ancien infarctus | Exploration électrophysiologique recommandée | **I C** |
| Espérance de vie avec bonne qualité de vie | DAI uniquement si supérieure à 1 an | **I C** |
| FEVG ≤ 40 % à la sortie d’hôpital après un infarctus | Réévaluer la FEVG 6 à 12 semaines plus tard avant de décider | **I C** |
| Personnes âgées ne semblant pas devoir tirer bénéfice du fait de l’âge et des comorbidités | Renoncer à un DAI préventif peut être envisagé | **IIb B** |
| TV répétées ou chocs malgré l’amiodarone (*Cordarone*) | Ablation par cathéter recommandée plutôt qu’une escalade médicamenteuse | **I B** |
| TV répétées ou chocs sous bêtabloquant | Ajouter l’amiodarone ou passer au sotalol (*Sotalex*) | **IIa B** |
| Programmation du DAI visant à éviter les chocs inutiles | Recommandée | **I A** |
| Télésurveillance de la prothèse pour réduire les chocs inappropriés | Recommandée | **I B** |

- **Pas de limite d’âge fixe :** dans le registre **EU-CERT-ICD**, les patients de 75 ans et plus ne montraient pas de bénéfice du DAI, mais les recommandations précisent que l’âge seul ne doit pas trancher ; ce sont l’état général et les maladies associées qui priment.
- **Cicatrice à l’IRM cardiaque (rehaussement tardif / LGE) :** il n’existe pas de recommandation pour guider la décision de DAI par l’IRM dans la maladie coronaire chronique ; l’ESC liste ce point comme une lacune des connaissances actuelles.
- **Ablation de tachycardie ventriculaire (TV) :** dans l’essai **VANISH** (259 patients avec antécédent d’infarctus, porteurs d’un DAI et présentant une TV malgré les médicaments), l’ablation a réduit le critère combiné associant décès, orage rythmique ou chocs (**59,1 % contre 68,5 %**), sans différence sur la mortalité. Le bénéfice n’a été observé que chez les patients déjà traités par amiodarone.`,
    },
    {
      headingFr: 'Quand la resynchronisation cardiaque (CRT) est-elle envisagée ? (ESC 2026)',
      bodyMarkdownFr: `L’indication d’une **CRT** (CRT-P pour stimulation seule ou CRT-D lorsqu’elle est associée à un défibrillateur) repose sur l’électrocardiogramme (ECG), en particulier la largeur du complexe **QRS** et la présence d’un **bloc de branche gauche (BBG)** :

- **Classe I :** insuffisance cardiaque à FEVG réduite (ICFER / HFrEF) symptomatique, **FEVG ≤ 35 %** malgré un traitement optimisé, en rythme sinusal, avec **BBG et QRS ≥ 150 ms**.
- **Classe IIa :** absence de BBG avec **QRS ≥ 150 ms**, ou **BBG avec QRS entre 130 et 149 ms**.
- **Non recommandée :** **QRS < 130 ms** en l’absence d’une autre indication de stimulation cardiaque.
- **Nouveauté ESC 2026 :** l’optimisation médicamenteuse et la préparation d’une CRT peuvent être menées en parallèle en cas de **BBG ≥ 150 ms**, avec un nouveau contrôle de la FEVG avant l’implantation (**Classe IIb**).

C’est la raison pour laquelle les ECG de suivi recherchent systématiquement un élargissement progressif du QRS.`,
    },
    {
      headingFr: 'Les preuves scientifiques en faveur du DAI',
      bodyMarkdownFr: `- **Méta-analyse de référence (Shun-Shin et al.) :** regroupement de 11 essais randomisés (8 567 patients).
  - Dans la cardiomyopathie ischémique, lorsque le DAI est implanté lors d’un geste dédié et à distance d’un infarctus aigu, la mortalité diminue d’environ un quart (**HR 0,76**, IC 95 % : 0,60–0,96).
  - Si l’on inclut l’essai **CABG-Patch** (où le DAI était posé au moment même d’un pontage aorto-coronarien), le résultat devient **HR 0,81**, non statistiquement significatif.
  - Les auteurs comparent l’ampleur de ce bénéfice relatif à celui de certains médicaments majeurs de l’insuffisance cardiaque.
- **Essais pivots cités par l’ESC 2026 :**
  - **SCD-HeFT :** le DAI a réduit la mortalité toutes causes de **23 %** par rapport à l’amiodarone ;
  - **MADIT-II :** le DAI a réduit la mortalité toutes causes de **31 %** (1 232 patients, tous atteints de maladie coronaire avec FEVG ≤ 30 %).`,
    },
    {
      headingFr: 'Le débat actuel : quel bénéfice supplémentaire avec les médicaments modernes ?',
      bodyMarkdownFr: `Les essais historiques du DAI ont été conduits avant l’arrivée de l’**ARNI** (sacubitril/valsartan — *Entresto*) et des **iSGLT2** (dapagliflozine — *Forxiga*, empagliflozine — *Jardiance*).

- **Baisse du risque de fond :** les recommandations ESC 2026 relèvent un taux résiduel de mort subite de **3,3 pour 100 patients-années** sous traitement moderne (essai **PARADIGM-HF**).
- **Bénéfice absolu plus modeste :** lorsque le risque de base baisse, le gain *absolu* apporté par un DAI sur une durée donnée diminue, même si sa réduction relative du risque reste identique.
- **La FEVG est un outil imprécis :** l’analyse **PROFID** (140 204 patients suivis après un infarctus) a montré que la FEVG prédit *quel individu précis* fera une mort subite à peine mieux que le hasard, et que les mesures de cicatrice à l’IRM apportent peu de discrimination supplémentaire. Les auteurs estiment que l’implantation systématique au seuil de FEVG ≤ 35 % mérite d’être réévaluée. Il s’agit toutefois d’une étude observationnelle, qui ne permet pas de conclure sur l’efficacité du DAI.
- **Un choc délivré n’équivaut pas toujours à une vie sauvée :** dans PROFID, **18,4 %** des patients porteurs d’un DAI avaient reçu une thérapie appropriée à 3 ans — un chiffre nettement supérieur au taux de mort subite chez des patients comparables sans DAI, ce qui montre que certains troubles du rythme traités par le boîtier se seraient arrêtés spontanément.
- **Variabilité de la mesure au seuil des 35 % :** une échocardiographie transthoracique (ETT) et une IRM cardiaque peuvent placer la même personne de part et d’autre de 35 % (voir l’article « La fraction d’éjection (FEVG) »).

### Données de l’ère des traitements modernes

- **Recul de la mort subite au fil des décennies (Shen 2017) :** sur 12 essais dans l’ICFER (40 195 patients sans DAI, 62 % d’origine ischémique), le taux annuel de mort subite est passé de **6,5 pour 100 patients** dans **RALES** (achevé en 1998) à **3,3** dans **PARADIGM-HF** (achevé en 2014). Sous sacubitril/valsartan, il était de **1,7 % à 6 mois** et de **8,8 % à 3 ans**. La baisse s’observe à tous les niveaux de FEVG, une FEVG plus basse restant associée à un risque plus élevé.
  - Après ajustement sur les caractéristiques des patients inclus, la tendance à la baisse n’était plus statistiquement significative (**HR 0,90**, p = 0,60) : l’analyse ne peut donc pas attribuer avec certitude toute cette diminution aux seuls médicaments.
  - Les auteurs soulignent que ce travail ne démontre pas l’inutilité du DAI et rappellent que la FEVG peut continuer à progresser **6 à 12 mois** après le début du traitement, rendant parfois un délai de 3 mois trop court.
- **Une cohorte européenne observe encore un bénéfice (EU-CERT-ICD, 2020) :** chez 2 247 patients (65 % ischémiques, forte utilisation de bêtabloquants et d’ARM, mais avant les iSGLT2), le DAI en prévention primaire était associé à une baisse de **27 %** de la mortalité toutes causes (**HR ajusté 0,73**).
  - Dans le sous-groupe ischémique seul, l’estimation était de **HR 0,79** (IC 95 % : 0,58–1,06) : plus incertaine, sans preuve de différence par rapport aux causes non ischémiques.
  - Le bénéfice paraissait moindre chez les 75 ans et plus, en cas de diabète et chez les femmes, mais ces sous-analyses manquaient de puissance statistique. Il s’agissait d’une étude observationnelle, non randomisée.
- **DAI guidé par la cicatrice IRM au-dessus de 35 % (CMR GUIDE, 2026) :** chez 353 patients ayant une **FEVG entre 36 et 50 %** et une cicatrice à l’IRM, le DAI n’a pas réduit significativement le critère principal (**7,8 % contre 9,2 %**), même si les morts subites étaient moins nombreuses (**1,7 % contre 5,8 %**). Cet essai ne concerne pas les FEVG ≤ 35 %, mais éclaire le cas d’une FEVG qui remonte au-dessus de 35 % sous traitement.
- **L’essai qui teste directement la question (PROFID-EHRA) :** il tire au sort des patients au moins 3 mois après un infarctus, avec FEVG ≤ 35 %, classe NYHA II–III et au moins 3 mois de traitement optimisé, entre traitement médical seul et traitement médical plus DAI, afin de vérifier si l’absence de DAI n’est pas inférieure pour la survie.
  - Statut : **recrutement en cours, sans résultat publié**. En octobre 2025, 256 patients avaient été inclus sur les 3 595 prévus, avec une fin estimée au **30 novembre 2027** (calendrier susceptible de glisser).`,
    },
    {
      headingFr: 'Le gilet défibrillateur portable (LifeVest) en bref',
      bodyMarkdownFr: `Un **gilet défibrillateur portable (LifeVest)** peut détecter et choquer un trouble du rythme grave pendant les premières semaines suivant un infarctus ou le diagnostic, période où l’implantation d’un DAI n’est pas recommandée. Les recommandations ESC 2026 indiquent qu’il **peut être envisagé** comme relais temporaire (**Classe IIb**). Les recommandations rythmologiques ESC 2022 précisent qu’il doit être envisagé lorsqu’un patient ayant besoin d’un DAI en prévention secondaire ne peut temporairement pas être implanté (**Classe IIa C**), et peut être envisagé chez certains patients sélectionnés tôt après un infarctus (**Classe IIb B**), mais pas de façon systématique.

- **Essai VEST (2018) :** 2 348 personnes randomisées (2 302 analysées) dans les jours suivant un infarctus avec FEVG ≤ 35 %, suivies 90 jours.
  - **Mort subite rythmique (critère principal) :** **1,6 %** avec le gilet contre **2,4 %** sans gilet (**non statistiquement significatif**).
  - Mortalité toutes causes : **3,1 % contre 4,9 %** (résultat considéré par les auteurs comme probablement dû au hasard après prise en compte des comparaisons multiples).
  - La durée de port a chuté rapidement (médiane **18 heures par jour**). Des chocs inappropriés sont survenus chez **0,6 %** des patients ; démangeaisons et irritations cutanées étaient plus fréquentes. Le fabricant a assuré seul le financement après 2011.
- **Au-delà de VEST :** la plupart des décès du groupe gilet sont survenus alors que le dispositif n’était pas porté, et l’analyse « per-protocole » est exposée au biais d’observance. Dans les registres (**WEARIT-II Europe**, **HF-OPT**), un choc approprié a été nécessaire chez environ **1 à 2 %** des porteurs sur 3 mois, le plus souvent précocement, et la FEVG s’est souvent suffisamment améliorée pour éviter un DAI. En France, la **HAS** rembourse le LifeVest dans la cardiomyopathie ischémique avec FEVG ≤ 35 %, ainsi qu’après revascularisation ou infarctus avec FEVG < 35 %. Retrouvez le dossier complet (dont l’interdiction de conduite en France) dans l’article « Le gilet défibrillateur portable (LifeVest) ».`,
    },
    {
      headingFr: 'DAI sous-cutané ou DAI transveineux ? (Essai PRAETORIAN)',
      bodyMarkdownFr: `L’essai **PRAETORIAN** a comparé deux architectures de défibrillateur : le **DAI sous-cutané (S-ICD)**, placé sous la peau sans sonde dans les vaisseaux sanguins, et le **DAI transveineux** classique, dont la sonde passe par une veine jusqu’au cœur.

L’étude a inclus 849 patients (environ 70 % d’origine ischémique, 80 % en prévention primaire), suivis pendant une durée médiane d’environ 4 ans :

| Critère à 4 ans | DAI sous-cutané | DAI transveineux |
|---|---|---|
| Complications liées au dispositif ou chocs inappropriés (critère principal) | **15,1 %** | **15,7 %** (non-infériorité démontrée) |
| Toute complication liée au dispositif | 5,9 % | 9,8 % (non significatif) |
| Complications liées à la sonde | **1,4 %** | **6,6 %** |
| Infection sanguine (bactériémie / endocardite) | **0 %** | **1,2 %** |
| Chocs inappropriés (nombre de patients) | 41 | 29 (non significatif) |
| Chocs appropriés (nombre de patients) | 83 | 57 (**HR 1,52**, significatif) |
| Décès | 83 | 68 (non significatif) |

- Les patients nécessitant une stimulation cardiaque (pacemaker) ou une **CRT** étaient exclus de cet essai : or ces besoins sont fréquents dans l’insuffisance cardiaque avec ventricule dilaté.
- Les passages du groupe sous-cutané vers un DAI transveineux étaient principalement liés à l’apparition d’un nouveau besoin de stimulation cardiaque.
- Les auteurs soulignent que ces données justifient une décision partagée avec votre cardiologue rythmologue sur le type de boîtier.`,
    },
    {
      headingFr: 'Vivre avec un dispositif implanté',
      bodyMarkdownFr: `- **Décision partagée :** le guide patient ESC rappelle que vous devez être accompagné pour comprendre l’objectif, les bénéfices, les limites et les risques du dispositif, ainsi que sa gestion en fin de vie.
- **Qualité de vie :** une revue de 15 études (**Tomzik 2015**) montre une qualité de vie globalement comparable avec ou sans DAI. Dans **SCD-HeFT**, aucun retentissement détectable n’a été observé sur 30 mois, sauf chez les personnes ayant reçu un choc au cours du mois précédent. Une baisse du bien-être psychologique s’observait surtout après **5 chocs ou plus** (voir l’article « Santé émotionnelle, anxiété et dépression »).
- **Anxiété et soutien psychologique :** les recommandations ESC 2022 préconisent de dépister et de prendre en charge la détresse psychologique chez les porteurs de DAI (**Classe I C**). Environ **1 personne sur 5** présente une anxiété ou une dépression, liée davantage à la peur des chocs qu’aux chocs eux-mêmes. Dans un registre suédois, **26 %** rapportaient de fortes inquiétudes liées au DAI ; une thérapie cognitivo-comportementale menée par une infirmière a réduit l’anxiété dans un petit essai.
- **Conduite à tenir après un choc :** chaque porteur de DAI doit disposer d’un **plan d’action écrit** remis par son centre de rythmologie précisant quand contacter le centre et quand appeler les urgences (**15 / SAMU**, **112**, ou **114** par SMS).
- **Désactivation des chocs en fin de vie :** les recommandations ESC 2022 (**Classe I C**), la prise de position HFA 2020 et les recommandations britanniques NICE NG106 insistent pour que la possibilité de désactiver la fonction choc soit abordée **avant l’implantation** puis réévaluée régulièrement (tous les 6 mois ou lors d’une évolution des objectifs de soins). Sur un **CRT-D**, seule la fonction défibrillation (choc) est désactivée, laissant la stimulation et la resynchronisation actives afin de préserver le confort ; la réactivation reste possible. Dans une étude portant sur 380 patients porteurs de DAI décédés entre 2007 et 2016, la désactivation était beaucoup plus fréquente lorsqu’elle avait été discutée au préalable, mais la majorité des boîtiers restaient actifs au moment du décès (voir l’article « Soins de support, soins palliatifs et anticipation »).
- **Télésurveillance de la prothèse :** les DAI et CRT peuvent transmettre leurs données automatiquement au centre de suivi. Les recommandations ESC 2022 la recommandent pour réduire les chocs inappropriés (**Classe I B**). Son impact direct sur les événements d’insuffisance cardiaque est moins établi, et elle **ne constitue jamais un service d’urgence** (voir l’article « Télésurveillance à domicile et suivi à distance des prothèses »).
- **Conduite automobile :** en France, l’implantation d’un DAI et la survenue d’un choc imposent des délais d’interdiction temporaire de conduite ainsi qu’une évaluation par un **médecin agréé** pour le permis de conduire (distinct de votre médecin traitant), selon l’arrêté du 28 mars 2022. Les durées varient selon le type de permis (véhicule léger ou poids lourd) et selon les pays (voir l’article « Permis de conduire, insuffisance cardiaque et défibrillateur (France et UE) »).
- **Stents et risque rythmique :** dans l’essai **REVIVED-BCIS2**, la pose de stents n’a pas réduit le risque de troubles du rythme graves ni les thérapies par DAI ; les auteurs déconseillent de pratiquer une angioplastie dans le seul but de réduire le risque arythmique.
- **Repères internationaux comparés :** les recommandations américaines **AHA/ACC/HFSA 2022** recommandent un DAI à FEVG ≤ 35 % en NYHA II–III au moins 40 jours après un infarctus, ou à FEVG ≤ 30 % en NYHA I (**Classe 1**). Au Royaume-Uni, le guide **NICE TA314** relie le choix entre DAI, CRT-P et CRT-D à la FEVG ≤ 35 %, la classe NYHA, la largeur du QRS et la présence d’un BBG (voir l’article « Recommandations européennes (ESC), américaines et britanniques comparées »).`,
    },
    {
      headingFr: 'Autres essais sur les dispositifs et l’ablation à suivre (au 25 novembre 2026)',
      bodyMarkdownFr: `- **Left vs Left (NCT05650658)** : essai en cours de recrutement (**2 136** patients estimés, fin primaire estimée en **juin 2029**) comparant la stimulation directe du système de conduction du cœur (faisceau de His ou branche gauche) à la **CRT biventriculaire** classique chez des patients avec **FEVG ≤ 50 %** et QRS large ou fort besoin de stimulation, avec stratification au seuil de 35 %. Pertinent uniquement lorsqu’une resynchronisation est envisagée.
- **PREVENT-VT (NCT06543173)** : petit essai de faisabilité en cours de recrutement (**62** patients estimés, fin prévue en **2030**) évaluant une ablation précoce par cathéter des circuits de tachycardie ventriculaire après implantation d’un DAI préventif dans la cardiomyopathie ischémique avec **FEVG ≤ 35 %** et marqueur de haut risque.
- **PROFID-EHRA** : fiche registre inchangée au **25 novembre 2026** (recrutement en cours, **3 595** patients prévus, fin primaire estimée au **30 novembre 2027**). Voir l’article « Essais cliniques en cours et à suivre ».`,
    },
  ],
  relatedArticleSlugs: [
    'essais-cliniques-en-cours-et-a-suivre',
    'comprendre-le-diagnostic',
    'vivre-avec-insuffisance-cardiaque',
    'fraction-dejection',
    'medicaments-insuffisance-cardiaque',
    'insuffisance-cardiaque-fevg-amelioree',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'soins-de-support-et-anticipation',
    'depression-et-sante-emotionnelle',
    'regles-conduite-automobile',
    'recommandations-comparees-esc-us-nice',
    'gilet-defibrillateur-portable',
    'telesurveillance-insuffisance-cardiaque',
    'dysfonction-vg-asymptomatique-stade-b',
    'confirmer-la-cause-dysfonction-vg',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'traitements-additionnels-nouveaux',
  ],
  sources: [
    {
      label: 'Registre d’essais cliniques (état au 25 novembre 2026)',
      detail: 'Statut de recrutement et calendriers estimés de PROFID-EHRA, Left vs Left (NCT05650658) et PREVENT-VT (NCT06543173)',
    },
    {
      label: 'Recommandations ESC 2026 sur l’insuffisance cardiaque',
      detail: 'Tableaux de recommandations DAI et CRT, délais, résultats des essais et risque résiduel de mort subite',
    },
    {
      label: 'Guide patient ESC 2026 sur l’insuffisance cardiaque',
      detail: 'Explication accessible des dispositifs, seuil de 35 % malgré le traitement optimal et décision partagée',
    },
    {
      label: 'Recommandations ESC 2022 sur les arythmies ventriculaires et la mort subite (texte intégral et supplément)',
      detail: 'Critères DAI en maladie coronaire, ablation de TV (VANISH), récupération de FEVG post-infarctus, suivi psychosocial et fin de vie',
    },
    {
      label: 'Méta-analyse Shun-Shin sur le DAI en prévention primaire',
      detail: 'Bénéfice sur la mortalité en cardiomyopathie ischémique et absence de bénéfice précoce post-infarctus (DINAMIT, IRIS)',
    },
    {
      label: 'Analyse poolée PROFID et protocole PROFID-EHRA (2026)',
      detail: 'Limites prédictives de la FEVG et de la cicatrice IRM ; protocole et état d’avancement de l’essai PROFID-EHRA',
    },
    {
      label: 'Shen et al. (2017) et cohorte EU-CERT-ICD (2020)',
      detail: 'Déclin historique de la mort subite dans l’ICFER et mortalité sous DAI à l’ère moderne',
    },
    {
      label: 'CMR GUIDE (2026)',
      detail: 'DAI guidé par la cicatrice IRM pour une FEVG entre 36 et 50 %',
    },
    {
      label: 'Essais PRAETORIAN (2020 et 2022)',
      detail: 'Comparaison DAI sous-cutané versus DAI transveineux à 4 ans et profil de complications',
    },
    {
      label: 'Essai VEST (2018), analyse per-protocole (2020), registres WEARIT-II Europe et HF-OPT, avis HAS CNEDiMTS (2024) et revue systématique Goetz (2023, texte intégral)',
      detail: 'Données cliniques (effectifs randomisés et analysés dans VEST), évaluation indépendante et indications remboursées en France pour le gilet défibrillateur portable',
    },
    {
      label: 'Revue Tomzik (2015), prise de position HFA (2020), NICE NG106 (2025) et consensus HRS (2023)',
      detail: 'Qualité de vie, désactivation en fin de vie et télésurveillance des prothèses',
    },
    {
      label: 'REVIVED-BCIS2 (analyse rythmique 2023 et discordance ETT/IRM), AHA/ACC/HFSA (2022) et NICE TA314',
      detail: 'Absence d’effet des stents sur les arythmies, variabilité au seuil de 35 % et critères internationaux comparés',
    },
  ],
  disclaimerType: 'medical',
};
