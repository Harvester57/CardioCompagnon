import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'arythmies-ventriculaires-et-antiarythmiques',
  sourceWikiPath: 'wiki/concepts/ventricular-arrhythmias-and-antiarrhythmics.md',
  titleFr: 'Arythmies ventriculaires, chocs de DAI et médicaments antiarythmiques',
  category: 'dispositifs',
  readingTier: 'deep_dive',
  asOf: '2026-11-27',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'arythmies-ventriculaires',
    'extrasystoles-ventriculaires',
    'esv',
    'tachycardie-ventriculaire',
    'orage-rythmique',
    'ablation-tv',
    'antiarythmiques',
    'amiodarone',
    'cordarone',
    'sotalol',
    'flécaïnide',
    'dronédarone',
    'vanish2',
    'cardiomyopathie-ischémique',
  ],
  aliases: [
    'Arythmies ventriculaires',
    'Extrasystoles ventriculaires',
    'ESV',
    'Cardiomyopathie induite par les ESV',
    'Tachycardie ventriculaire',
    'TV',
    'TVNS',
    'Orage rythmique',
    'Ablation par cathéter TV',
    'Antiarythmiques',
    'Amiodarone',
    'Cordarone',
    'Sotalol',
    'Sotalex',
    'Flécaïnide',
    'Flécaïne',
    'Dronédarone',
    'Multaq',
  ],
  linkedModules: ['core', 'device'],
  plainSummaryFr:
    "Après un infarctus du myocarde, la cicatrice fibreuse côtoie du muscle cardiaque vivant. Les signaux électriques circulent plus lentement dans cette zone bordière, ce qui peut déclencher des troubles du rythme issus des ventricules : extrasystoles ventriculaires (ESV), salves brèves (TV non soutenues), tachycardie ventriculaire soutenue (TV) ou orage rythmique. Des ESV rares sont le plus souvent sans conséquence, mais lorsqu'elles représentent 10 % ou plus des battements (surtout au-delà de 20 à 24 %), elles peuvent affaiblir davantage le cœur ou perturber une CRT. Un DAI tente d'abord d'interrompre une TV sans douleur par stimulation rapide (ATP) avant de délivrer un choc. Un choc isolé alors que vous vous sentez parfaitement bien impose de ne pas conduire et de contacter rapidement votre centre de rythmologie ; plusieurs chocs (orage rythmique) ou tout choc avec symptômes persistants constituent une urgence immédiate : appelez le 15 (SAMU), le 112 ou le 114 (SMS). Dans l'ICFER ischémique, les choix médicamenteux sont étroits : les bêtabloquants forment le socle, l'amiodarone (Cordarone) est le principal antiarythmique sûr mais exige un suivi régulier (thyroïde, foie, poumons, ECG, yeux, peau, interactions), tandis que la flécaïnide, la propafénone et la dronédarone sont contre-indiquées. L'ablation par cathéter réduit les récidives de TV et les chocs (VANISH, VANISH2) sans gain de survie prouvé en méta-analyse.",
  sections: [
    {
      headingFr: 'Extrasystoles ventriculaires (ESV) et cardiomyopathie induite par les ESV',
      bodyMarkdownFr: `Les **extrasystoles ventriculaires (ESV)** sont des battements prématurés nés dans les ventricules. Elles apparaissent sur 1 à 4 % des ECG standards de 10 secondes et chez **40 à 75 %** des adultes sur un Holter de 24–48 heures (près de la moitié des patients en IC NYHA II–III ont plus de 1 000 ESV/jour).

### ESV bénignes contre cardiomyopathie induite ou aggravée par les ESV

- **Seuils de charge en ESV :**
  - **≥ 10 % du total des battements** (environ ≥ 10 000 ESV/jour) : seuil à partir duquel les recommandations conseillent de suspecter une **cardiomyopathie induite par les ESV** devant une dysfonction VG inexpliquée (**ESC 2022 : Classe IIa C**).
  - **> 20 à 24 % :** risque nettement plus élevé d'affaiblir le ventricule (Baman et al., 174 patients : FEVG réduite à charge moyenne de **33 %** contre **13 %** à FEVG normale ; seuil > 24 % offrant sensibilité 79 %, spécificité 78 %, AUC 0,89 ; 10 % étant le seuil le plus bas lié à une faiblesse réversible).
  - **Facteurs aggravants :** QRS large de l'ESV (**> 150 ms**), origine ventriculaire gauche ou épicardique, distribution uniforme jour/nuit et **absence de symptômes** (charge élevée silencieuse > 30–60 mois multipliant le risque par 4 à 20).
- **Pourquoi la durée du Holter compte :** la charge en ESV fluctue d'un jour à l'autre. Un seul **Holter de 24 heures manque environ 47 %** des patients dépassant réellement 10 % par rapport à un enregistrement de 6 à 7 jours. En cas de résultat limite, un enregistrement prolongé ou les compteurs d'un DAI/pacemaker sont plus fiables.
- **Double pathologie (cicatrice ischémique + ESV) :** des ESV rares (< 5 %) et polymorphes sont souvent de simples témoins de la cicatrice, tandis qu'une charge **≥ 10 %** majoritairement d'une seule forme (**monomorphe**) peut aggraver un ventricule déjà fragilisé. L'**IRM cardiaque avec rehaussement tardif (LGE)** aide à faire la part des choses (**ESC 2022 IIa B** ; **HRS/EHRA 2019 IIa B-NR**) : en présence d'une cicatrice d'infarctus, la récupération de FEVG après ablation d'une très forte charge monomorphe est généralement **partielle**, mais parfois notable (Sarrazin 2009 : 12 patients post-infarctus à 22 % d'ESV passés de 38 % à 51 % de FEVG).
- **Interférence avec la CRT :** des ESV fréquentes empêchent la stimulation biventriculaire efficace ; l'ablation ou un antiarythmique adapté est conseillé (**ESC 2022 IIa C** ; **HRS/EHRA 2019 IIa C-LD**).

### Prise en charge des ESV dans l'ICFER ischémique

- Les **quatre piliers du traitement de fond** passent en premier (et restent poursuivis même si la FEVG s'améliore) ; les bêtabloquants réduisent la charge d'ESV d'environ **20 à 40 %**.
- L'**ablation par cathéter** est recommandée en cas de suspicion de cardiomyopathie induite par les ESV (**ESC 2022 Classe I C** ; **HRS/EHRA 2019 I B-NR**) et envisagée lorsque des ESV fréquentes aggravent une cardiopathie structurelle (**HRS IIa B-NR**). Le succès durable atteint **70 à 85 %** sur les foyers infundibulaires ou fasciculaires (récidive 30–40 % pour les muscles papillaires, foyers intramuraux ou sommet du VG), avec **1 à 2 %** de complications majeures dans les centres experts *(aucun essai randomisé n'a toutefois comparé l'ablation des ESV à la quadrithérapie moderne)*.
- **Ne jamais utiliser de classe IC (flécaïnide, propafénone) ni vérapamil/diltiazem** dans l'ICFER ischémique (**ESC Classe III**).`,
    },
    {
      headingFr: 'TV non soutenue, TV soutenue, ATP, chocs de DAI et orage rythmique',
      bodyMarkdownFr: `### Pourquoi une cicatrice d'infarctus provoque des tachycardies ventriculaires

Un infarctus guéri laisse des couloirs de myocarde survivant au sein de la fibrose. L'onde électrique y circule lentement et peut tourner en boucle (**réentrée sur cicatrice**), générant une **tachycardie ventriculaire (TV) monomorphe soutenue** (> 30 secondes ou nécessitant un arrêt thérapeutique). Des déclencheurs aigus — ischémie récidivante, poussée d'insuffisance cardiaque, hypokaliémie ou hypomagnésémie, fièvre/infection, hyperthyroïdie ou médicament pro-arythmique — s'ajoutent à une décharge d'adrénaline (**triangle de Coumel**).

- **Les stents ou pontages seuls ne guérissent pas une TV monomorphe sur cicatrice :** le consensus HRS/EHRA 2019 classe la revascularisation isolée en **Classe III : Absence de bénéfice (B-NR)** pour prévenir les récidives de TV monomorphe (en accord avec REVIVED-BCIS2) ; elle reste envisagée si une ischémie active est documentée (**IIa**).

### Origine ischémique contre non ischémique : un substrat électrique différent

La cause de l'affaiblissement cardiaque influence la naissance des troubles du rythme graves, ce qui explique en partie pourquoi les essais de DAI diffèrent selon l'étiologie :
- **Origine ischémique (cicatrice fixe d'infarctus) :** dans une étude IRM de référence (**McCrohon 2003**), 100 % des patients coronariens présentaient une cicatrice sous-endocardique ou transmurale, support des circuits de réentrée.
- **Origine non ischémique :** dans la même étude, **59 %** des cardiomyopathies dilatées (CMD) n'avaient aucune cicatrice et **28 %** présentaient des bandes de fibrose médio-pariétale. Dans la CMD non ischémique, cette fibrose médio-pariétale est associée à un fort surrisque de mort subite ou récupérée (**HR 4,61**, IC 95 % : 2,75–7,74 ; **Gulati 2013**, résumés lus), donnée à ne pas transposer à une origine ischémique.
- **Mortalité subite et succès de l'ablation :** dans l'essai **VICTORIA**, chez les patients sans DAI, le taux de mort subite était plus élevé en cas d'origine ischémique (**4,8 contre 3,0** pour 100 patients-années). L'**ESC 2022** note également que l'ablation par cathéter est plus efficace sur une cicatrice d'infarctus qu'en maladie non ischémique (succès à long terme 30 à 70 % toutes causes ; dans un registre, **57 %** sans TV à 1 an en maladie coronaire contre **40,5 %** hors maladie coronaire).
- **Conséquence pour le DAI :** les essais incluant des patients ischémiques (**MADIT-II**, moitié ischémique de **SCD-HeFT** à 11 ans **HR 0,81**, IC 0,69–0,95, vs placebo) montrent un gain de survie, contrairement à l'essai non ischémique **DANISH** même à 13 ans (voir *Dispositifs cardiaques implantés : DAI et CRT* et *Thèse : bénéfice du DAI en prévention primaire sous quadrithérapie moderne*).

- **TV non soutenue (TVNS, ≥ 3 battements > 100–120 bpm, < 30 s) :** aucun antiarythmique préventif en dehors des bêtabloquants n'est recommandé (**ESC 2022 Classe III A**). En cas de maladie coronaire avec **FEVG ≤ 40 %** malgré ≥ 3 mois de traitement optimal et TVNS (hors indication déjà posée de DAI), une exploration électrophysiologique est proposée ; si une TV soutenue est déclenchée, un DAI doit être envisagé (**ESC 2022 IIa B**).

### Stimulation indolore (ATP), choc de DAI et conduite à tenir

Les DAI modernes utilisent des délais de détection allongés (6 à 12 secondes ou 30 cycles) et une zone primaire **≥ 188 bpm** (**ESC 2022 I A**) pour éviter les chocs inutiles :
- **Stimulation antitachycardique (ATP) :** brève salve d'impulsions **indolores** pour interrompre une TV régulière avant de charger un choc (**ESC 2022 I A**, salve *burst* préférée **I B** ; impossible avec un DAI sous-cutané). Une sous-analyse de **PARTITA (2024)** a montré que **≥ 5 épisodes d'ATP en 6 mois** prédisaient un risque de **86 à 93 %** de chocs ultérieurs et **> 5 fois plus** d'hospitalisations pour IC : des ATP fréquents méritent donc une réévaluation rythmologique.
- **Choc du DAI :** décharge interne ressentie comme un coup brusque dans la poitrine si l'ATP échoue ou en cas de fibrillation ventriculaire. **Un DAI ne peut pas électrocuter un proche qui vous touche au moment du choc.**
- **Orage rythmique :** **≥ 3 épisodes distincts de TV/FV en 24 heures** (espacés d'au moins 5 minutes) nécessitant ATP ou choc, ou TV incessante. Il touche **4 à 7 %** des DAI en prévention primaire et **10 à 30 %** en prévention secondaire, s'associe à une mortalité multipliée par **2,5** (jusqu'à 14 % à 48 h) et s'auto-entretient par le stress adrénergique des chocs répétés.

L'**ESC 2022** demande que chaque centre remette un **plan écrit de conduite à tenir après choc** ; la télésurveillance à domicile n'est **jamais** un service d'urgence.

| Situation | Conduite à tenir (à confirmer avec votre plan écrit) | Pourquoi |
|---|---|---|
| **Un seul choc de DAI, et vous vous sentez parfaitement bien ensuite** (aucune douleur thoracique, essoufflement, malaise ni palpitations persistantes) | Asseyez-vous ou allongez-vous au calme, **ne conduisez pas**, et **contactez rapidement votre centre de rythmologie ou votre cardiologue** (le jour même ou le lendemain ouvré selon votre protocole) pour une interrogation du boîtier | Vérifier si le choc était approprié (TV/FV) ou inapproprié (FA rapide, anomalie de sonde) et adapter traitement ou programmation |
| **Deux chocs ou plus rapprochés (suspicion d'orage rythmique)**, **OU un seul choc avec symptômes persistants** (douleur thoracique, dyspnée importante, vertiges, syncope, malaise) | **Appelez immédiatement les secours : 15 (SAMU), 112 ou 114 (SMS).** Allongez-vous en sécurité ; ne conduisez jamais vous-même à l'hôpital | Urgence vitale hospitalière : interrogation/reprogrammation, correction des facteurs déclenchants (ischémie, IC aiguë, K⁺/Mg²⁺, thyroïde), **sédation (ESC I C)**, **bêtabloquant non sélectif (ex. propranolol) + amiodarone IV (I B)** et **ablation urgente si réfractaire (I B)** |

Tout choc de DAI déclenche également des **délais réglementaires d'interdiction de conduite** (voir *Permis de conduire, insuffisance cardiaque et défibrillateur*).`,
    },
    {
      headingFr: 'Ablation par cathéter contre antiarythmiques : recommandations et essais (VANISH, VANISH2)',
      bodyMarkdownFr: `### Comparatif des recommandations (au 25 novembre 2026)

- **Points d'accord (ESC 2022, HRS/EHRA 2019, AHA/ACC/HRS 2017) :** interdiction des antiarythmiques de classe IC après infarctus (**Classe III**) ; bêtabloquants en socle ; **ablation par cathéter en Classe I** en cas de TV monomorphe récidivante malgré l'amiodarone (**I B**), d'orage rythmique réfractaire (**I B**) ou de cardiomyopathie induite par les ESV (**I C / I B-NR**).
- **Points de divergence :** seuil diagnostique d'ESV (≥ 10 % ESC 2022 vs ~15 % résumés US 2017) ; l'ESC 2022 autorise l'ablation seule en centre expert comme alternative au DAI pour une TV monomorphe bien tolérée avec **FEVG ≥ 40 % (IIa C)**, alors que les textes US maintiennent le DAI par défaut.
- **Décalage chronologique important :** toutes ces recommandations ont été publiées **avant VANISH2 (2024–2025)** et **PARTITA (2022)**, si bien que leur classement **IIb** pour l'ablation en 1re intention ne reflète pas encore le plus grand essai randomisé face aux antiarythmiques.

### Principaux essais randomisés et méta-analyses (2016–2026)

- **VANISH (*NEJM* 2016 ; n = 259, 100 % post-infarctus, FEVG moyenne 31 %, 65 % déjà sous amiodarone) :** chez des patients en récidive malgré un antiarythmique, l'ablation a réduit le critère composite (décès, orage rythmique ou choc approprié) par rapport à l'escalade médicamenteuse : **59,1 % contre 68,5 %** (**HR 0,72**, IC 0,53–0,98 ; p = 0,04). **La mortalité était identique** (27,3 % contre 27,6 %, **HR 0,96**). Le bénéfice concernait surtout les patients déjà en échec d'**amiodarone**.
- **VANISH2 (*NEJM* fév. 2025 ; n = 416, 100 % post-infarctus, FEVG moyenne 34 %, naïfs de classe I/III, suivi médian 4,3 ans) :** comparait l'**ablation en 1re intention** (dans les 14 jours) au **sotalol ou à l'amiodarone** :
  - **Critère principal** (décès toutes causes, ou > J14 : orage rythmique, choc approprié ou TV soutenue traitée médicalement sous la zone de détection du DAI) : **50,7 % contre 60,6 %** (**HR 0,75**, IC 0,58–0,97 ; p = 0,03 ; NNT ~**10**).
  - **Décomposition essentielle :** la mortalité toutes causes ne différait pas (**22,2 % vs 25,4 %**, **HR 0,84**), la mortalité CV était numériquement un peu plus haute côté ablation (**14,3 % vs 11,7 %**, **HR 1,23**), l'orage rythmique quasi identique (**21,7 % vs 23,5 %**, **HR 0,95**) et les chocs appropriés à la limite de la significativité (**29,6 % vs 38,0 %**, **HR 0,75**, IC 0,53–1,04). Le gain venait surtout de la baisse des **TV lentes traitées sous le seuil de détection du DAI** (**4,4 % vs 16,4 %**, **HR 0,26**), les antiarythmiques ralentissant la fréquence des TV.
  - **Sous-étude préspécifiée (*JACC* janv. 2026) :** dans la **strate sotalol** (patients moins sévères, n = 199), l'ablation a nettement dominé (**46 % vs 59 %**, **HR 0,64**, p = 0,02). Dans la **strate amiodarone** (patients plus fragiles, n = 217), l'efficacité composite était comparable (**55 % vs 61 %**, **HR 0,86**, NS), mais l'amiodarone a entraîné **bien plus de toxicité d'organe** : décès non cardiaques triplés (**16,5 % vs 5,6 %**), insuffisance respiratoire doublée (**11,0 % vs 4,6 %**), pneumonies triplées (**11,9 % vs 3,7 %**), hospitalisations pour IC augmentées de moitié (**31,2 % vs 19,4 %**) et **4,6 % contre 0 %** de fibrose/infiltrats pulmonaires.
  - **Risque procédural précoce vs toxicité chronique :** dans les 30 jours suivant l'ablation, **1,0 %** de décès (2 patients) et **11,3 %** d'événements procéduraux non fatals, contre **0,5 %** de décès pulmonaire (1 patient) et **21,6 %** d'effets indésirables non fatals attribués aux médicaments.
- **Autres essais :** **PARTITA** (*Circ* 2022, n = 47 randomisés après un 1er choc : 4 % vs 42 % décès/IC, **HR 0,11**, mais effectif minuscule, arrêt précoce et fort déséquilibre initial diabète 41 % vs 19 %, MRC 27 % vs 14 %, BPCO 23 % vs 9,5 % -> purement générateur d'hypothèses) ; **BERLIN VT** (*Circ* 2020, n = 159, 100 % post-IDM, FEVG moyenne 41 % : ablation préventive avant DAI arrêtée pour **futilité**, **HR 1,09**, plaidant contre l'ablation préventive systématique) ; **PAUSE-SCD** (*Circ* 2022, n = 121 Asie de l'Est, seulement 35 % ischémiques et 35 % DVDA : **HR 0,58** tiré par les récidives TV sans gain sur mortalité **HR 1,40**).
- **Méta-analyses 2026 :** sur **13 ECR (n = 1 735, 94,4 % d'hommes ; Falconer, *EHJ Open* janv. 2026)**, l'ablation réduit clairement les **chocs appropriés (RR 0,67, NNT 10,8)**, les **orages rythmiques (RR 0,78, NNT 17,9)** et les **hospitalisations CV (RR 0,78)**, **sans réduction statistiquement significative de la mortalité toutes causes (RR 0,87, IC 0,70–1,08 ; IPD à 3 ans HR 0,79)** ni de la mortalité CV (**RR 0,89**). Façanha (*Europace* juin 2026, 3 ECR naïfs, n = 618) retrouve également une survie comparable (**HR 0,83**).`,
    },
    {
      headingFr: 'Sécurité des médicaments antiarythmiques dans l’ICFER ischémique',
      bodyMarkdownFr: `En présence d'une cicatrice d'infarctus et d'une FEVG réduite, la marge de sécurité est étroite : de nombreux antiarythmiques utilisés sur cœur sain sont **contre-indiqués**.

| Médicament / Classe | Rôle dans l'ICFER ischémique | Preuves et justification de sécurité |
|---|---|---|
| **Bêtabloquants** (bisoprolol, carvédilol, métoprolol succinate, nébivolol ; Classe II) | **Socle de 1re intention** | **Seule** classe antiarythmique prouvée pour réduire la mortalité totale dans l'ICFER. En orage rythmique aigu, bêtabloquant non sélectif (ex. propranolol) privilégié |
| **Amiodarone (*Cordarone*)** (Classe III, multicanal) | **Principal antiarythmique oral sûr et efficace** sur cœur malade | Autorisée en France dans la maladie coronaire avec altération de la fonction VG (RCP). Pas d'effet inotrope négatif ; faible risque de torsades (~1–1,5 %) ; dans **OPTIC**, a réduit les chocs vs bêtabloquant seul (**10,3 % vs 38,5 %**, **HR 0,27**) et vs sotalol (**HR 0,43**). Neutre sur la mortalité globale dans **SCD-HeFT** (**HR 1,06** vs placebo ; toujours aucun bénéfice à 11 ans, **HR 0,96** ; surmortalité en NYHA III, **HR 1,44**, résumé secondaire) et **EMIAT**. Limitée par sa **toxicité multi-organes cumulée** |
| **Sotalol (*Sotalex*)** (Classe III + bêtabloquant non sélectif) | **Option restreinte** (seulement si FEVG non sévèrement abaissée, rein correct et QT normal) | Inférieur à l'ablation dans VANISH2 (**HR 0,64**). **À éviter / grande prudence si FEVG sévère (< 20 % ou NYHA III–IV), DFGe < 30 mL/min (élimination rénale), hypokaliémie ou QT long** (risque de torsades ; surmortalité du d-sotalol dans SWORD) |
| **Mexilétine** (Classe Ib) | **Recours en appoint** de l'amiodarone si ablation impossible ou en échec | Efficacité modeste, marge étroite, effets digestifs et neurologiques (tremblements, vertiges) |
| **Flécaïnide (*Flécaïne*), propafénone (*Rythmol*)** (Classe IC) | **CONTRE-INDIQUÉS (Classe III : Danger)** | Ralentissent la conduction en bordure de cicatrice et favorisent la réentrée mortelle. Dans **CAST** (1 498 post-infarctus), les décès rythmiques ont environ **triplé** (**43 contre 16**, p = 0,0004) malgré la suppression des ESV au Holter |
| **Dronédarone (*Multaq*)** | **CONTRE-INDIQUÉE** en ICFER symptomatique ou sévère | Dans **ANDROMEDA** (627 patients hospitalisés), la mortalité précoce a **plus que doublé en 2 mois** (**8,1 % vs 3,8 %**, **HR 2,13**, p = 0,03), essai stoppé pour danger |
| **Vérapamil (*Isoptine*), diltiazem (*Tildiem*)** (Classe IV) | **CONTRE-INDIQUÉS** dans l'ICFER | Effet inotrope négatif aggravant la faiblesse systolique (**ESC Classe III**) |`,
    },
    {
      headingFr: 'Amiodarone (Cordarone) : calendrier de suivi, interactions et limites',
      bodyMarkdownFr: `L'amiodarone est fortement liposoluble et s'accumule dans les tissus (graisse, poumons, foie, thyroïde, cornée, peau). Sa demi-vie d'élimination est de **20 à 100 jours** (moyenne **50 à 60 jours**) et chaque comprimé de 200 mg libère environ **6 mg d'iode par jour** (~37 % d'iode). Deux conséquences pratiques en découlent :
1. Maintenir la **dose d'entretien minimale efficace** (généralement **100 à 200 mg/jour** en France après une charge de 600 mg/j sur 8–10 jours), la plupart des toxicités dépendant de la dose cumulée.
2. **Effets secondaires et interactions peuvent apparaître ou persister des mois après l'arrêt.** Les audits réels révèlent un suivi insuffisant (Lavon 2019 : seulement 59 % de TSH semestrielles et 55 % d'ECG annuels) : tenir un calendrier personnel protège efficacement.

### Calendrier structuré de surveillance de l'amiodarone (RCP français ANSM juin 2025 et revues)

| Organe / Système | Bilan initial | Suivi régulier | Signes d'alerte (contacter rapidement votre médecin) | Points clés (RCP français *Cordarone* 2025) |
|---|---|---|---|---|
| **Thyroïde** | **TSH** (+ T4L / T3L) | **Tous les 6 mois**, et pendant **plusieurs mois après arrêt** | Perte de poids inexpliquée, intolérance à la chaleur, nervosité, **retour d'arythmies ou d'angor** (hyperthyroïdie) ; ou prise de poids, frilosité, fatigue, pouls lent (hypothyroïdie) | Une T4 isolément élevée avec TSH normale n'impose pas l'arrêt. **Hypothyroïdie** (~7 % ; 4–30 % cohortes) : traitable par lévothyroxine sans arrêter forcément l'amiodarone. **Hyperthyroïdie / AIT** (1,4–6 %, possible des mois après arrêt, peut déclencher un orage rythmique) : **le RCP français impose l'arrêt** (antithyroïdiens en Type I ; corticoïdes généraux en Type II) |
| **Foie** | **ASAT, ALAT** (transaminases) | **Tous les 6 mois** (plus tôt pendant la charge) | Jaunisse, urines foncées, nausées, douleur sous les côtes droites | Élévation légère isolée fréquente (15–50 %). Élévation persistante **> 2× la normale** : réduction de dose ou arrêt à discuter ; hépatite aiguë : arrêt immédiat |
| **Poumons** | **Radiographie thoracique** et **EFR avec DLCO** (surtout si pathologie pulmonaire) | Recherche de symptômes à chaque consultation (radio annuelle débattue à ≤ 200 mg/j) | **Toute toux sèche nouvelle ou croissante, essoufflement d'effort inhabituel, fièvre modérée ou perte de poids** -> radiographie / scanner thoracique urgent | Pneumopathie interstitielle / **fibrose pulmonaire** (~1,6 % en ECR faible dose, jusqu'à 4,6 % dans VANISH2 ; létalité ~10 %). Un arrêt précoce (± corticoïdes) réverse souvent les symptômes en 3–4 semaines. **Prévenir l'anesthésiste avant toute chirurgie** (rare SDRA postopératoire sous oxygène à haut débit) |
| **Cœur, ECG et DAI** | **ECG 12 dérivations** + **K⁺, Mg²⁺** + contrôle des seuils du DAI | **ECG au moins 1 fois/an** (et après charge ou changement de dose) | Malaise, syncope, pouls très lent (< 40–50 bpm), nouvelles palpitations | Allongement modéré du QTc attendu (torsades rares ~1–1,5 % sauf QTc > 500 ms, hypokaliémie ou interactions). Arrêt en cas de BAV 2e/3e degré ou bloc sino-auriculaire. **Le RCP français conseille de vérifier les seuils de défibrillation/stimulation du DAI** avant et après initiation ou changement de dose |
| **Yeux** | Examen ophtalmologique si trouble visuel préexistant | **Sur symptômes** (non obligatoire en routine) | **Baisse de vision, flou visuel, amputations du champ visuel** -> fond d'œil urgent | Les **microdépôts cornéens** sont presque constants (≥ 10 %), réversibles (halos lumineux parfois) et **ne justifient pas l'arrêt**. La **neuropathie optique** est très rare (1–2 % sur 10 ans) mais impose l'arrêt en cas de suspicion |
| **Peau** | Conseils protection UV | Contrôle clinique | Coup de soleil douloureux après exposition brève ; éruption bulleuse/ulcérations buccales (urgence rare SJS/TEN/DRESS) | **Photosensibilité (25–75 %) :** éviter le soleil direct, vêtements couvrants et **écran haute protection à filtres minéraux (oxyde de zinc / dioxyde de titane)**, persistant après arrêt. Pigmentation gris-bleutée (4–9 %) s'estompant en 10 à 24 mois |
| **Nerfs, muscles et greffe** | Examen clinique | Examen clinique | Tremblements, fourmillements des pieds, faiblesse musculaire, instabilité | Neuropathie/myopathie à récupération lente. **Alerte transplantation cardiaque (RCP §4.4) :** l'amiodarone pré-greffe augmente le risque de **dysfonction primaire du greffon** -> relayer le plus tôt possible en cas d'inscription sur liste |

### Interactions médicamenteuses critiques (RCP français *Cordarone*)

L'amiodarone inhibe CYP2C9, CYP3A4, CYP2D6 et P-gp pendant des semaines à des mois après son arrêt :
- **Strictement contre-indiqués en France (torsades de pointes / bradycardie grave) :** **escitalopram (*Seroplex*), citalopram (*Seropram*)** *(point majeur en cas de dépression dans l'IC !)*, **sotalol**, **dronédarone**, quinidine, disopyramide, **dompéridone**, **moxifloxacine, lévofloxacine**, érythromycine IV, et schémas anti-hépatite C contenant du **sofosbuvir** (bradycardie sévère même des mois après l'arrêt).
- **AVK (warfarine, fluindione, acénocoumarol) :** hausse de l'INR en quelques semaines (souvent **-25 à -33 %** de dose) ; contrôle rapproché de l'INR à l'instauration et pendant des semaines après l'arrêt.
- **Digoxine :** diviser typiquement la dose par deux, surveiller l'ECG et la digoxinémie.
- **AOD (surtout dabigatran) :** exposition accrue possible ; vérifier la posologie et le risque hémorragique avec votre cardiologue.
- **Statines (simvastatine, atorvastatine) :** risque accru de toxicité musculaire (~6 % avec simvastatine dans SEARCH). **Le RCP français de *Cordarone* recommande de privilégier une statine non métabolisée par le CYP3A4 : rosuvastatine (*Crestor*) ou pravastatine.**
- **Bêtabloquants, diurétiques et jus de pamplemousse :** bêtabloquants couramment associés mais surveillance FC/ECG ; maintenir K⁺ et Mg²⁺ normaux sous diurétiques ; **éviter le jus de pamplemousse**.

### Limites des preuves

Aucun essai ni méta-analyse n'a prouvé de gain de survie de l'ablation de TV (il faudrait > 7 000 patients pour confirmer +2,5 % de survie absolue) ; tous les essais d'ablation étaient en ouvert sans procédure factice et comptaient **< 10 % de femmes** (~6 % dans VANISH2) ; les preuves d'ablation d'ESV restent observationnelles ; certains textes éditeurs (NEJM, JACC, AHA) ont été vérifiés via résumés PubMed, registres ClinicalTrials.gov et méta-analyses en libre accès 2025–2026.`,
    },
  ],
  relatedArticleSlugs: [
    'these-benefice-dai-sous-quadritherapie',
    'dispositifs-cardiaques-dai-crt',
    'fibrillation-atriale-insuffisance-cardiaque',
    'regles-conduite-automobile',
    'medicaments-effets-secondaires-suivi',
    'depression-et-sante-emotionnelle',
    'cholesterol-et-prevention-secondaire',
    'confirmer-la-cause-dysfonction-vg',
    'magnesium-insuffisance-cardiaque',
    'telesurveillance-insuffisance-cardiaque',
    'insuffisance-cardiaque-avancee-stade-d',
    'goutte-bpco-thyroide-et-autres-comorbidites',
    'essais-cliniques-cles',
    'recommandations-comparees-esc-us-nice',
    'questions-equipe-cardiologie',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2022 (arythmies ventriculaires et mort subite, texte intégral + supplément), spotlight Zeppenfeld (Europace, 2023) et consensus HRS/EHRA (2019/2020)',
      detail: 'Critères d’ablation des ESV et TV, programmation DAI, gestion de l’orage rythmique et contre-indications des classes IC.',
    },
    {
      label: 'Essais d’ablation de TV : VANISH (NEJM, 2016), VANISH2 (NEJM, 2025) + sous-étude JACC (2026), PARTITA, BERLIN VT, PAUSE-SCD et méta-analyses Falconer & Façanha (2026)',
      detail: 'Comparaison ablation vs sotalol/amiodarone, toxicité pulmonaire et non cardiaque de l’amiodarone, risques procéduraux et mortalité poolée.',
    },
    {
      label: 'Essais de sécurité antiarythmique : CAST (1991), ANDROMEDA (2008), OPTIC (2006) et Pacifico (1999)',
      detail: 'Surmortalité sous classe IC et dronédarone ; réduction des chocs sous amiodarone et limites du sotalol.',
    },
    {
      label: 'Revues ESV et orage rythmique : Huizar (JACC, 2019), Recio-Ibarz (JCM, 2026) et Negru (2025, textes intégraux)',
      detail: 'Seuils 10 % et 20–24 % d’ESV, intérêt de l’IRM LGE, Holter prolongé et prise en charge de l’orage rythmique.',
    },
    {
      label: 'Substrat ischémique vs non ischémique : McCrohon (2003), Gulati (2013), VICTORIA (2025), SCD-HeFT (2005 et 11 ans 2020) et DANISH (13 ans 2025)',
      detail: 'Profils de cicatrice IRM, taux de mort subite selon l’étiologie, résultats à long terme de l’amiodarone et comparaison des essais de DAI.',
    },
    {
      label: 'RCP français ANSM / BDPM Cordarone 200 mg (05/06/2025), Șorodoc (2024), Lavon (2019), Goldschlager (2007) et guide BHF DAI (2025)',
      detail: 'Calendrier de suivi multi-organes de l’amiodarone, interactions critiques en France (escitalopram, statines, AVK, greffe) et plan d’action post-choc.',
    },
  ],
  disclaimerType: 'medical',
};
