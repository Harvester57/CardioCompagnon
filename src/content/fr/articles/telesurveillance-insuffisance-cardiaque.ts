import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'telesurveillance-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/concepts/remote-monitoring-in-heart-failure.md',
  titleFr: 'Télésurveillance à domicile et suivi à distance des prothèses',
  category: 'dispositifs',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'télésurveillance',
    'télémédecine',
    'cardiomems',
    'capteur-pression-pulmonaire',
    'dai',
    'crt',
    'heartlogic',
    'triagehf',
    'etapes',
    'has',
  ],
  aliases: [
    'Télésurveillance',
    'Télémédecine',
    'Telemonitoring',
    'Remote monitoring',
    'CardioMEMS',
    'Cordella',
    'Capteur de pression artérielle pulmonaire',
    'HeartLogic',
    'TriageHF',
    'Suivi à distance DAI',
    'ETAPES',
  ],
  linkedModules: ['core', 'device'],
  plainSummaryFr:
    'La télésurveillance permet à votre équipe de soins de suivre des indicateurs de votre état entre deux consultations. Elle regroupe trois dispositifs très différents : la télésurveillance non invasive à domicile (poids quotidien et questionnaire de symptômes, parfois tension artérielle et fréquence cardiaque, analysés par une équipe infirmière qui vous contacte en cas d’alerte) ; le capteur implanté dans l’artère pulmonaire (CardioMEMS), qui détecte une hausse de pression avant même que la rétention d’eau ne soit visible ; et le suivi à distance d’un DAI ou d’une CRT, qui transmet automatiquement l’état de la pile, des sondes, du rythme et parfois des scores d’alerte d’insuffisance cardiaque. Aucun de ces dispositifs ne remplace un appel aux secours en cas d’urgence (15 / SAMU, 112 ou 114) : les données ne sont pas surveillées en temps réel.',
  sections: [
    {
      headingFr: 'Ce que disent les recommandations',
      bodyMarkdownFr: `| Modalité | Recommandations ESC 2026 | Autres positions internationales et françaises |
|---|---|---|
| Télésurveillance non invasive à domicile | **Peut être envisagée (Classe IIb, B1)** pour réduire les hospitalisations pour IC | **France :** remboursée dans le droit commun (HAS, voir ci-dessous). **Royaume-Uni (NICE NG106) :** pas de recommandation spécifique |
| Capteur implanté de pression artérielle pulmonaire | **Doit être envisagé (Classe IIa, B1)** en classe **NYHA III** avec hospitalisation pour IC dans les 12 derniers mois (relevé depuis IIb en 2021) | **Consensus HFA 2025 :** CardioMEMS « est utile » dans l’IC symptomatique avec hospitalisation IC dans l’année, dans sa catégorie de force la plus élevée (voir section 2). **NICE (2026) :** CardioMEMS en routine NHS en NYHA III à risque d’hospitalisation. **France (HAS 2021) :** service attendu insuffisant, non remboursé |
| Suivi à distance DAI/CRT pour alertes d’insuffisance cardiaque | Pas de recommandation numérotée ; « peu de preuves » d’un bénéfice sur les événements cliniques | **HRS 2023 :** suivi des diagnostics IC des prothèses raisonnable (**Classe 2a**). **NICE (2024) :** HeartLogic et TriageHF retenus comme options |
| Suivi à distance d’un DAI pour réduire les chocs inappropriés | Non applicable | **ESC 2022 (rythmologie) : recommandé (Classe I, B)** |

- La classe **IIa** provient directement des recommandations ESC 2026 ; le consensus HFA 2025, rédigé antérieurement, ne citait que l’ancienne classe ESC 2021 (**IIb, B**).
- La formulation du guide patient ESC (« la télésurveillance peut être utilisée ») traduit en langage courant la recommandation de **Classe IIb**.
- Les recommandations ESC 2026 ne prennent pas position sur les **montres connectées grand public** ou capteurs personnels non médicaux. Ce que ces montres peuvent et ne peuvent pas détecter (dépistage de FA oui mais avec de nombreux tracés non concluants ; infarctus, tachycardie ventriculaire, surcharge hydrique et tension artérielle non), ainsi que les précautions vis-à-vis des aimants avec un DAI, sont détaillés dans *Montres connectées et capteurs dans l'insuffisance cardiaque*. La méthode pour recueillir des mesures fiables de tension artérielle à domicile, utiles en télésurveillance, figure dans *Automesure tensionnelle à domicile (règle des 3 et tensiomètre validé)*.`,
    },
    {
      headingFr: '1. Télésurveillance non invasive à domicile : les preuves cliniques',
      bodyMarkdownFr: `- **Méta-analyse de Scholte (EHJ 2023) :** 92 études, 36 549 patients.
  - La surveillance non invasive a réduit la mortalité (**OR 0,85**) et les premières hospitalisations pour insuffisance cardiaque (**OR 0,78**).
  - Une grande part de l’effet provenait du **suivi téléphonique structuré**.
  - Le bénéfice paraît plus marqué chez les personnes récemment hospitalisées que chez les patients stables en NYHA I–II (sans test formel de sous-groupe).
  - Environ 1 essai sur 5 présentait un risque élevé de biais, avec une hétérogénéité notable entre études.
- **TIM-HF2 (Lancet 2018, Allemagne, texte intégral) :** essai randomisé ouvert portant sur **1 571** patients randomisés (**1 538** analysés).
  - **Population :** classe NYHA II–III, **hospitalisation pour IC au cours des 12 derniers mois** et **FEVG ≤ 45 %** (ou plus élevée sous diurétiques oraux). La FEVG moyenne était de **41 %**, avec environ **41 %** d’origine ischémique (l’essai n’a pas publié d’analyse séparée pour les patients ischémiques).
  - **Principales exclusions :** dépression majeure (score **PHQ-9 > 9**), dialyse, toute hospitalisation dans les 7 derniers jours, assistance circulatoire (LVAD), pontage, stent ou CRT dans les 28 derniers jours, ou geste coronaire, valvulaire ou CRT programmé dans les 3 mois.
  - **Ce que faisaient les patients :** envoi quotidien du poids, de la tension artérielle, du rythme cardiaque, de la saturation en oxygène et d’une auto-évaluation de santé notée de 1 à 5 ; **97 %** transmettaient leurs données au moins **70 %** des jours.
  - **Rôle de l’équipe :** un centre dirigé par des médecins, ouvert **24 h/24 et 7 j/7**, stratifiait le risque (en intégrant un dosage biologique), appelait chaque mois et pouvait ajuster les médicaments (médiane de **3** modifications par patient), organiser une visite chez le médecin traitant ou décider une hospitalisation.
  - **Critère principal :** part de jours perdus pour hospitalisation cardiovasculaire non programmée ou décès de **4,88 % contre 6,64 %** (**ratio 0,80**, IC 95 % : **0,65–1,00** ; **p = 0,046**, significativité limite), soit environ **18 contre 24 jours par an**.
  - **Origine du bénéfice :** principalement **moins de décès**. Mortalité toutes causes : **7,86 contre 11,34 pour 100 patients-années** (**HR 0,70**, IC 95 % : **0,50–0,96**). La mortalité cardiovasculaire seule n’était pas significativement réduite (**HR 0,67**, **p = 0,056**).
  - **Jours d’hospitalisation :** les jours perdus pour hospitalisations **cardiovasculaires** seules n’étaient pas significativement diminués (**ratio 0,89**, **p = 0,21**). En revanche, les jours perdus pour hospitalisations liées à l’**insuffisance cardiaque** l’étaient : **3,8 contre 5,6 jours par an** (**ratio 0,80**, **p = 0,007**).
  - **Aucune différence significative** n’a été observée sur la qualité de vie ni sur le NT-proBNP par rapport au suivi usuel. Les patients ayant une **FEVG ≤ 45 %** présentaient un résultat au moins aussi favorable (**ratio 0,73**, IC 95 % : **0,56–0,97**), sans différence significative entre sous-groupes.
  - **Limites :** modèle très exigeant en ressources humaines, évalué dans un seul pays et conduit par l’équipe qui l’a développé ; davantage d’arrêts précoces dans le groupe télésurveillance (**37 contre 15**) ; réalisé entre 2013 et 2017, avant la généralisation des traitements modernes (**ARNI 6 %**, aucun **iSGLT2** listé).
- **Deux grands essais américains neutres montrent qu’un dispositif simple ne suffit pas à lui seul :**
  - **Tele-HF (NEJM 2010) :** 1 653 patients récemment hospitalisés déclarant symptômes et poids via un serveur vocal automatisé. Réhospitalisation ou décès à 6 mois : **52,3 % contre 51,5 %**, aucune différence. À la fin du suivi, seuls **55 %** utilisaient encore le système quotidiennement.
  - **BEAT-HF (JAMA Intern Med 2016) :** 1 437 patients (FEVG moyenne d’environ 43 %) avec capteurs à domicile et accompagnement téléphonique infirmier après la sortie d’hôpital. Réhospitalisation à 6 mois : **50,8 % contre 49,2 % (HR 1,03)** et aucune différence sur la mortalité.
  - *Point de lecture :* contrairement à TIM-HF2 qui s’appuyait sur un centre dédié continu, ces deux essais reposaient sur un dispositif moins intensif et une perte progressive d’adhésion (comme dans Tele-HF), facteurs vraisemblables de leurs résultats neutres (analyse transversale et non comparaison directe issue d’un essai).`,
    },
    {
      headingFr: 'En France : la télésurveillance de l’insuffisance cardiaque remboursée (HAS / Assurance Maladie)',
      bodyMarkdownFr: `À la suite de l’expérimentation **ETAPES**, la télésurveillance médicale de l’insuffisance cardiaque est entrée dans le **droit commun** (remboursement pérenne) le **1er juillet 2023**, sur la base du référentiel de la **HAS**.

**Critères d’éligibilité (une seule des deux conditions suffit) :**

1. une **hospitalisation pour insuffisance cardiaque au cours des 12 derniers mois**, **ou**
2. des symptômes de classe **NYHA II ou plus** associés à des peptides natriurétiques élevés (**BNP > 100 pg/mL** ou **NT-proBNP > 1 000 pg/mL**).

**Situations de non-éligibilité :** impossibilité d’utiliser le matériel (même avec l’aide d’un aidant), ou refus du partage de données ou du programme d’accompagnement thérapeutique.

**Organisation concrète :**

- **Pesée quotidienne** (balance à transmission automatique recommandée) et questionnaire régulier sur les symptômes ;
- **Analyse des alertes au moins deux fois par semaine**, triées par une équipe infirmière (infirmière insuffisance cardiaque / IPA) et suivies d’une décision médicale si nécessaire ;
- **Séances d’accompagnement thérapeutique au moins mensuelles** au début ;
- Prescription initiale pour **6 mois**, renouvelable après réévaluation ;
- Prescrite par un **cardiologue** (ou un médecin traitant titulaire d’un diplôme spécifique en insuffisance cardiaque).
- Vous devez être informé qu’un suivi habituel sans télésurveillance reste toujours possible.

**Tarifs et prise en charge en France (données rapportées sur 2023–2026) :**

- **Forfait opérateur (équipe soignante) :** **28 € par patient et par mois** en niveau 2 pour l’insuffisance cardiaque (contre 11 € en niveau 1). Un article de presse médicale de janvier 2024 mentionne une majoration possible jusqu’à **70 € par mois** en niveau 2 pour les situations les plus complexes (les conditions exactes et la date d’entrée en vigueur n’ont pas été vérifiées directement dans l’arrêté).
- **Forfait technique (fournisseur du dispositif médical numérique) :** rémunération distincte, révisée tous les 6 mois et dégressive selon le volume national de patients (ordre de grandeur d’environ **39 à 40 € par mois** en 2025–2026, non vérifié directement sur les arrêtés consolidés ni sur une éventuelle révision de septembre 2026).
- **Remboursement pour le patient :** l’Assurance Maladie prend en charge **60 %** du tarif, ou **100 %** en cas d’exonération du ticket modérateur (notamment en **ALD n° 5 ou n° 13**). **Aucun dépassement d’honoraires** n’est autorisé sur le forfait opérateur. La prise en charge cesse si le patient n’utilise pas le dispositif ou refuse la transmission des données.`,
    },
    {
      headingFr: '2. Capteur implanté de pression artérielle pulmonaire (CardioMEMS)',
      bodyMarkdownFr: `### Principe

Un capteur miniature est implanté dans une branche de l’artère pulmonaire lors d’un cathétérisme cardiaque droit et calibré au cours de l’examen. Vous (ou un proche) réalisez une mesure quotidienne à l’aide d’un boîtier externe ; l’équipe d’insuffisance cardiaque consulte les courbes environ 5 jours par semaine et ajuste les diurétiques de l’anse ou les autres médicaments pour maintenir la pression dans la zone cible : une hausse de quelques mmHg sur 2 à 3 jours déclenche une adaptation, et une pression durablement basse peut amener à réduire les diurétiques. Après l’implantation, une **bithérapie antiagrégante plaquettaire** (ou un anticoagulant) est nécessaire pendant **1 mois**, suivie d’aspirine ou d’un anticoagulant au long cours.

### Preuves cliniques

- **CHAMPION** (550 patients, tous en NYHA III avec hospitalisation pour IC dans l’année ; **78 %** avec FEVG < 40 %) : réduction des hospitalisations pour insuffisance cardiaque à 6 mois et sur l’ensemble du suivi.
- **GUIDE-HF** (1 000 patients, majoritairement NYHA III, **30 %** en NYHA II ; seulement **55 %** avaient eu une hospitalisation pour IC dans l’année) : critère principal global (décès ou événements IC) non significatif, bénéfice uniquement dans l’analyse préspécifiée pré-COVID-19, aucune différence de qualité de vie.
- **MONITOR-HF (Lancet 2023, Pays-Bas) :** 348 patients, FEVG médiane de **30 %**, environ la moitié d’origine ischémique.
  - Réduction de **44 %** du total des hospitalisations pour IC et visites urgentes (**HR 0,56**).
  - Amélioration de la qualité de vie (**+7 points** au score KCCQ) ; l’essai étant ouvert (sans placebo), cet effet subjectif peut être amplifié.
  - **Aucun effet sur la mortalité (HR 0,96).**
  - Signal possible d’un bénéfice moindre dans la cardiomyopathie ischémique que non ischémique, non retrouvé dans GUIDE-HF et possiblement dû au hasard.
- **Analyse poolée des essais (CHAMPION, GUIDE-HF, MONITOR-HF ; 1 898 patients) :** environ **30 %** d’hospitalisations pour IC en moins, de manière homogène selon l’étiologie et la FEVG, sans baisse significative de la mortalité. Une analyse sur données individuelles de **1 350** patients ICFER incluant également un autre capteur placé dans l’oreillette gauche (**LAPTOP-HF**, essai interrompu précocement pour complications liées à la procédure) suggérait moins de décès (**HR 0,75**, IC 95 % : **0,57–0,99**).
- **Cordella** (autre capteur pulmonaire) : données limitées à une étude simple bras sans comparateur ; NICE estime que des études supplémentaires sont nécessaires.

### Indications, contre-indications, sécurité et statut en France

- **ESC 2026 :** classe **NYHA III** avec hospitalisation pour IC dans les 12 derniers mois (**Classe IIa, B1**).
- **Consensus HFA 2025 (texte intégral) — conseil formellement gradé :** le texte ne grade qu’une seule recommandation (Figure 1), indiquant que CardioMEMS **« est utile »** chez les patients présentant une insuffisance cardiaque symptomatique à risque modéré à élevé, attesté par une **hospitalisation pour IC au cours de l’année écoulée**, dans sa **catégorie de force la plus élevée** (« conseil clinique fondé sur des preuves publiées robustes », essais randomisés).
- **Consensus HFA 2025 — formulations plus larges non gradées ailleurs dans le document :**
  - *Tableau de sélection :* NYHA II–III **et** soit un événement d’aggravation d’IC (hospitalisation ou visite non programmée) dans les 12 derniers mois, **soit** des peptides natriurétiques élevés : à **FEVG ≤ 40 %**, **NT-proBNP ≥ 1 000 pg/mL** (ou BNP ≥ 250) ; à **FEVG > 40 %**, **NT-proBNP ≥ 700 pg/mL** (ou BNP ≥ 175). Ces seuils sont **abaissés de 4 % pour chaque unité d’IMC au-dessus de 25 kg/m²**.
  - *Profil du « candidat idéal » :* classe NYHA III privilégiée par rapport à NYHA II (les preuves en NYHA II restent à consolider), traitement médical et dispositifs déjà optimisés, hospitalisation IC dans l’année et/ou congestion avérée, bonne observance, **sans** insuffisance cardiaque terminale ni maladie pulmonaire primitive sévère.
  - *Conclusions du texte :* elles emploient une formulation plus prudente (« peut être approprié » en NYHA II–III avec événement IC et/ou peptides élevés), qui ne correspond pas au conseil formellement gradé.
  - *Arguments complémentaires :* traitement conforme déjà en place, état congestif difficile à évaluer cliniquement, éloignement du centre ; l’optimisation médicamenteuse et l’évaluation pour DAI ou CRT doivent précéder l’implantation.
- **Situations non adaptées (liste du consensus HFA 2025 issue du manuel CardioMEMS) :**
  - impossibilité de prendre deux antiagrégants plaquettaires ou un anticoagulant pendant 1 mois après l’implantation, allergie à l’aspirine ou au clopidogrel, trouble de la coagulation ;
  - infection active, antécédents de caillots répétés (embolie pulmonaire ou thrombose veineuse profonde), événement cardiovasculaire majeur dans les 2 derniers mois ;
  - impossibilité de supporter un cathétérisme cardiaque droit, cardiopathie congénitale ou prothèse valvulaire mécanique sur le cœur droit ;
  - **DFGe < 25 mL/min** sans réponse aux diurétiques, ou dialyse ;
  - implantation d’une **CRT dans les 3 derniers mois** ;
  - **IMC > 35 kg/m²** ou tour de poitrine **> 165 cm** ;
  - la classe **NYHA IV** n’est pas couverte (dans un ancien essai de capteur de pression, **COMPASS-HF**, les patients NYHA IV n’avaient pas tiré bénéfice).
- **Sécurité et adhésion :** absence de complication liée au dispositif ou au système chez **98 à 99 %** des patients dans les essais ; adhésion quotidienne de **76 à 86 %** dans les registres. Les signalements dans la base d’effets indésirables de la FDA américaine ont fortement augmenté après 2017, concernant surtout des mesures inexactes ayant nécessité un nouveau lecteur externe ; le panel HFA souligne que ces déclarations manquent de précision pour établir un lien ferme et que des données de sécurité à long terme en vie réelle restent nécessaires.
- **Disponibilité au Royaume-Uni et en France :** le **NICE (2026)** recommande CardioMEMS en routine dans le NHS en NYHA III. En **France**, en avril 2021, la CNEDiMTS de la **HAS** lui a attribué un service attendu **« insuffisant »**, si bien qu’il n’est **pas remboursé**. Les motifs retenus étaient les biais possibles de CHAMPION, l’absence d’effet sur la mortalité, l’absence de comparaison avec la pesée quotidienne associée au dosage du BNP et le manque de données de sécurité à long terme (le comité économique estimait le coût à environ **156 000 € par année de vie ajustée sur la qualité**). Aucun avis plus récent ni dispositif d’accès précoce n’a été identifié, bien que MONITOR-HF et GUIDE-HF aient été publiés après 2021.`,
    },
    {
      headingFr: '3. Suivi à distance d’un DAI ou d’une CRT',
      bodyMarkdownFr: `### Organisation (Consensus HRS 2023)

- Le boîtier transmet ses informations automatiquement selon un calendrier programmé ou dès qu’une alerte survient : état de la pile et des sondes, épisodes rythmiques, **tout choc délivré**, pourcentage de stimulation CRT, niveau d’activité et, sur certains modèles, scores multiparamétriques de congestion et d’insuffisance cardiaque (par exemple **HeartLogic**, **TriageHF**).
- **Mise en place :** idéalement avant la sortie d’hôpital ou dans les **2 semaines** suivant l’implantation (un éditorial accompagnant le consensus note qu’environ la moitié des prothèses compatibles ne sont jamais activées).
- **Consultations en présentiel :** avec une connexion fiable et sans alerte, un contrôle en centre tous les **24 mois** est jugé raisonnable.
- **Gestion des alertes :** les alertes urgentes sont généralement lues sous **1 jour ouvré** ; la plupart des centres ne surveillent pas 24 h/24. Vous devez donc disposer de votre propre conduite à tenir en cas d’urgence (**15 / SAMU**, **112**, **114**). Les données de votre prothèse vous appartiennent et vous pouvez en demander copie.

### Preuves cliniques

- **Sécurité du dispositif et chocs :** la télésurveillance détecte plus tôt les problèmes de sonde, de pile et les arythmies. Dans l’essai **ECOST**, elle a réduit de **74 %** les chocs inappropriés liés aux arythmies atriales rapides, justifiant la recommandation **ESC 2022 Classe I B**.
- **Impact sur l’insuffisance cardiaque : résultats contrastés.** Une analyse poolée de **TRUST**, **ECOST** et **IN-TIME** suggérait une meilleure survie, mais les principaux essais chez des patients avec une FEVG de 25 à 30 % donnent un tableau nuancé :

| Essai | Population | Résultat principal |
|---|---|---|
| **IN-TIME** (Lancet 2014, texte intégral) | 664 porteurs d’un nouveau DAI double chambre ou CRT-D Biotronik, NYHA II–III, FEVG ≤ 35 % (moyenne **26 %**), environ **69 %** de maladie coronaire ; transmissions quotidiennes automatiques filtrées par une équipe centrale | Moins de patients avec score clinique global aggravé (**18,9 % contre 27,2 %** ; **OR 0,63**), **principalement par baisse des décès** : mortalité à 1 an **3,4 % contre 8,7 %** (**HR 0,36**, IC 95 % : **0,17–0,74**), critère secondaire reposant sur **37 décès** au total. **Aucune réduction des hospitalisations pour IC** (44 contre 47) ni des consultations. Essai ouvert, financé par le fabricant qui a participé à l’analyse. |
| **REM-HF** (EHJ 2017, Royaume-Uni) | 1 650 porteurs de DAI/CRT, FEVG moyenne **30 %**, 68 % de maladie coronaire, transmissions hebdomadaires | **Aucun effet** sur les décès ou hospitalisations cardiovasculaires sur 2,8 ans (**HR 1,01**). |
| **MORE-CARE** (EJHF 2017, texte intégral) | Nouveaux porteurs de CRT-D Medtronic, tous NYHA III–IV avant implantation, FEVG moyenne **27 %**, 44 % ischémiques ; alertes congestion (OptiVol), FA et dispositif. 917 randomisés, 52 exclus après coup et **865 analysés** (per-protocole, non en intention de traiter). Arrêt précoce à mi-effectif | **Aucun effet** sur les décès ou hospitalisations cardiovasculaires ou liées au dispositif (**29,7 % contre 28,7 %** ; **HR 1,02**, IC 95 % : **0,80–1,30**) sur 2 ans ; décès 40 contre 34 ; hospitalisations IC 111 contre 103. Recours aux soins cardiovasculaires réduit de **38 %** (**IRR 0,62**), surtout par remplacement d’environ la moitié des visites programmées (hausse des visites non programmées). Aucun surrisque de sécurité. Financé par le fabricant. |
| **MANAGE-HF phase 1** (J Card Fail 2022, texte intégral) | **191 analysés** (200 inclus) avec DAI ou CRT-D Boston Scientific et alertes **HeartLogic**, NYHA II–III avec événement IC récent ou peptides élevés ; FEVG moyenne **26 %**, 47 % ischémiques (« FEVG < 35 % » figure seulement dans le résumé, pas dans les critères d’inclusion). Bras unique | Traitement intensifié dans **74 %** des alertes, mais **89 % des changements concernaient les diurétiques** (traitements de fond rarement augmentés). **5** effets indésirables graves liés aux ajustements sur alerte (0,015/patient-année). Baisse du NT-proBNP (médiane de **1 316 à 743 pg/mL**). Pas de groupe témoin, donc aucune preuve sur les hospitalisations ou décès ; financé et analysé par le fabricant. |

- **Pourquoi IN-TIME se distingue :** son suivi repérait surtout les troubles du rythme (en particulier la fibrillation atriale), les chutes du pourcentage de stimulation CRT et les anomalies de sonde ou de détection, et les appels mettaient en évidence des oublis de traitement ; il ne s’agissait pas d’un capteur de congestion. Les auteurs n’ont pas pu préciser le mécanisme dominant faute d’enregistrement complet des interventions cliniques. Une analyse post-hoc montrait un effet plus net sur le **score clinique global** en cas d’antécédent de fibrillation atriale, mais l’article ne fournit **aucune** ventilation des décès selon la fibrillation atriale et ne démontre donc pas que le gain de survie lui soit réservé.
- Les auteurs de **MORE-CARE** relèvent que la mortalité à 1 an du groupe témoin d’IN-TIME était **1,8 fois** supérieure à celle de MORE-CARE (**8,7 % contre 4,8 %**), suggérant des populations différentes ; ni REM-HF ni MORE-CARE n’ont reproduit le signal de survie d’IN-TIME.
- **Méta-analyse Veres (2025, 16 essais, 11 232 patients) :** baisse globale de la mortalité (**HR 0,83**, IC 95 % : **0,72–0,96**), mais **aucune baisse des hospitalisations pour IC (OR 0,95)**. Le chiffre de mortalité ne regroupe toutefois que 7 essais et inclut **TIM-HF2**, qui n’était pas basé sur une prothèse implantée.
- La méta-analyse **Scholte (2023)** n’a trouvé **aucun effet global** du suivi par prothèse sur les décès ou les hospitalisations pour IC, et l’**ESC 2026** souligne le faible niveau de preuve sur les événements d’insuffisance cardiaque.
- En 2024, le **NICE** a estimé que **HeartLogic** et **TriageHF** réduisent les hospitalisations par rapport au suivi standard de prothèse seul et les accepte au sein d’équipes spécialisées ; il déconseille en revanche **CorVue**, fondé sur la seule impédance intrathoracique et générateur de nombreuses fausses alertes.`,
    },
    {
      headingFr: 'Ce que cela signifie pour vous si votre FEVG tourne autour de 35 %',
      bodyMarkdownFr: `- **La télésurveillance à domicile** aide surtout après une hospitalisation récente ou lorsque l’équilibre est fragile. L’essai le plus solide (**TIM-HF2**) n’a inclus que des patients hospitalisés pour IC dans l’année (en excluant la dépression majeure) : il ne prouve donc pas un bénéfice chez une personne stable jamais hospitalisée récemment. Son effet provenait d’une équipe médicale très réactive, pas des seuls appareils à domicile. En France, le remboursement dépend d’une hospitalisation pour IC dans les 12 derniers mois ou d’un stade NYHA II ou plus avec NT-proBNP > 1 000 pg/mL (ou BNP > 100 pg/mL), et les résultats de TIM-HF2 ne garantissent pas automatiquement la même ampleur d’effet dans tout programme français, qui dépend de son intensité.
- **Un capteur de pression pulmonaire** s’adresse à des patients symptomatiques en NYHA III avec hospitalisations récentes, non à une situation stable avec peu de symptômes. Le conseil le plus fort du consensus HFA 2025 vise les patients hospitalisés pour IC dans l’année ; à FEVG autour de 35 %, la voie biologique retient un NT-proBNP ≥ 1 000 pg/mL (abaissé si IMC > 25 kg/m²), avec des preuves plus limitées en NYHA II. Un DAI ou une CRT existant n’exclut pas un capteur (attendre 3 mois après une CRT), mais le dispositif n’est pas remboursé en France.
- **Si un DAI ou une CRT est implanté**, la télésurveillance de la prothèse est la norme de soins et réduit nettement les chocs inappropriés. Dans **MORE-CARE**, elle a remplacé en sécurité environ la moitié des visites programmées en centre (limitant les déplacements), sans réduire les décès ni les hospitalisations pour IC ; le signal de survie d’**IN-TIME** n’a pas été reproduit. Les alertes dédiées comme **HeartLogic** conduisent surtout à ajuster les diurétiques (voir *Escalade et résistance aux diurétiques* pour comprendre ces adaptations ; **MANAGE-HF phase 1** était sans groupe témoin ; le NICE considère que HeartLogic et TriageHF réduisent les hospitalisations par rapport au suivi standard de prothèse).
- Avec ou sans programme connecté, la **pesée quotidienne à domicile** reste le repère fondamental d’autosurveillance (voir l’article « Vivre au quotidien avec une insuffisance cardiaque »). Pour suivre l’avancement des essais en cours sur les capteurs de pression pulmonaire (comme **PROACTIVE-HF-2**) et les outils numériques de titration, consultez l’article « Essais cliniques en cours et à suivre ».`,
    },
  ],
  relatedArticleSlugs: [
    'automesure-tensionnelle-domicile',
    'montres-connectees-et-capteurs-ic',
    'guide-pratique-automesure-et-montres-connectees',
    'escalade-et-resistance-aux-diuretiques',
    'essais-cliniques-en-cours-et-a-suivre',
    'vivre-avec-insuffisance-cardiaque',
    'dispositifs-cardiaques-dai-crt',
    'gilet-defibrillateur-portable',
    'arythmies-ventriculaires-et-antiarythmiques',
    'ventricule-droit-et-hypertension-pulmonaire',
    'efx-strain-troponine-et-imagerie-cardiaque',
    'traitements-additionnels-nouveaux',
    'examens-et-chiffres',
    'recommandations-comparees-esc-us-nice',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'vivre-avec-insuffisance-cardiaque-en-france',
    'reseau-de-soins-et-aides-sociales-france',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 (section télésurveillance, tableau 25) et guide patient ESC 2026',
      detail: 'Classes de recommandation IIb (domicile), IIa (capteur pulmonaire) et position sur les prothèses',
    },
    {
      label: 'Méta-analyse Scholte (EHJ 2023) et essais TIM-HF2 (Lancet 2018, texte intégral), Tele-HF (2010), BEAT-HF (2016)',
      detail: 'Preuves positives et neutres de la télésurveillance non invasive ; exclusions, intervention 24 h/24 et détail mortalité vs hospitalisations dans TIM-HF2',
    },
    {
      label: 'Référentiel HAS de télésurveillance IC, Ameli, Santé.fr, Vidal et Le Quotidien du Médecin (2023–2026)',
      detail: 'Passage au droit commun au 1er juillet 2023, critères d’éligibilité, forfaits mensuels et prise en charge en France',
    },
    {
      label: 'Consensus HFA 2025 (texte intégral), essai MONITOR-HF (Lancet 2023), NICE HTG730/HTG769 et avis HAS CardioMEMS (2021)',
      detail: 'Conseil gradé Figure 1, seuils NT-proBNP ajustés selon l’IMC, contre-indications complètes, sécurité FDA et non-remboursement en France',
    },
    {
      label: 'Consensus HRS 2023, ESC 2022 (rythmologie), IN-TIME, MORE-CARE et MANAGE-HF phase 1 (textes intégraux), REM-HF et méta-analyse Veres (2025)',
      detail: 'Suivi à distance des DAI/CRT, réduction des chocs inappropriés (ECOST), mortalité vs hospitalisations, remplacement de visites programmées et ajustements diurétiques sous HeartLogic',
    },
  ],
  disclaimerType: 'medical',
};
