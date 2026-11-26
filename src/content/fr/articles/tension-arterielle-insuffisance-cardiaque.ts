import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'tension-arterielle-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/concepts/blood-pressure-in-heart-failure.md',
  titleFr: 'Tension artérielle et insuffisance cardiaque',
  category: 'comorbidites',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'tension-artérielle',
    'hypertension',
    'cible-tensionnelle',
    'icfer',
    'rétrécissement-aortique',
    'inhibiteurs-calciques',
    'alphabloquants',
    'moxonidine',
    'hypotension',
    'sprint',
  ],
  aliases: [
    'Tension artérielle',
    'Pression artérielle',
    'Hypertension',
    'HTA',
    'Cible tensionnelle',
    'Antihypertenseurs',
    'Hypotension',
    'Amlodipine',
    'Moxonidine',
    'Doxazosine',
    'SPRINT',
    'RIAS',
  ],
  linkedModules: ['core', 'aorticStenosis'],
  plainSummaryFr:
    "L'hypertension artérielle accompagne très souvent l'insuffisance cardiaque, mais une fois le ventricule gauche affaibli, les quatre piliers du traitement de fond abaissent tous la pression artérielle et deviennent généralement le traitement tensionnel principal. Aucune cible chiffrée n'a été testée par essai randomisé dans l'ICFER établie (le registre de SPRINT excluait les FEVG < 35 %, et son bénéfice portait sur la prévention de nouvelles IC). Certains antihypertenseurs sont contre-indiqués ou à éviter (vérapamil, diltiazem, moxonidine, alphabloquants pour l'HTA), tandis que des chiffres bas sans symptômes sont habituellement acceptés afin de conserver les doses protectrices : le consensus européen HFA 2025 réserve la diminution des traitements de l'IC à une systolique < 80 mmHg ou à des symptômes majeurs, après avoir écarté les autres médicaments hypotenseurs et réévalué les diurétiques.",
  sections: [
    {
      headingFr: 'Existe-t-il une cible de tension artérielle ?',
      bodyMarkdownFr: `- **ICFER établie : aucune cible testée par essai clinique.** Les recommandations ESC 2026 indiquent que les objectifs tensionnels précis chez les patients hypertendus atteints d'insuffisance cardiaque **n'ont pas été évalués dans des essais randomisés**, et renvoient pour l'hypertension générale aux recommandations ESC 2024 sur l'hypertension.
- **Consensus des autres référentiels :** une revue de 2026 (Helmy 2026) ne retrouve pas de cible propre à l'IC dans les recommandations ESC 2021, américaines 2022, américaines HTA 2025 (< 130/80 mmHg pour les adultes en général) ni britanniques NICE.
- **Recommandations ESC 2024 sur l'hypertension (texte intégral) :**
  - Leur cible générale est une pression systolique de **120–129 mmHg si bien tolérée (Classe I, A)**, sinon « aussi basse que raisonnablement tolérable ». L'objectif diastolique de 70–79 mmHg est seulement **Classe IIb, C**. Des cibles plus souples sont admises à partir de 85 ans ou en cas d'hypotension orthostatique symptomatique, de fragilité ou d'espérance de vie limitée.
  - Dans le texte consacré à l'insuffisance cardiaque, elles étendent cette plage (120–129 / 70–79 mmHg) à l'**insuffisance cardiaque symptomatique** de tout type, en traitant à partir d'une mesure confirmée supérieure à 130/80 mmHg. Il s'agit toutefois de **texte narratif et non d'une recommandation gradée spécifique à l'ICFER**, et le document renvoie aux recommandations ESC sur l'IC.
  - Elles précisent que de nombreux patients ICFER sous traitement optimal ont une pression **inférieure à 120/70 mmHg** et qu'il ne faut **pas** diminuer leur traitement pour autant tant que cela ne provoque pas de symptômes.
  - Elles introduisent une catégorie « pression artérielle élevée » (120–139 systolique et/ou 70–89 diastolique) et considèrent toute cardiopathie établie, dont l'IC, comme un risque suffisant pour traiter dès 130/80 mmHg.
  - Un article pédagogique du Conseil de l'ESC (*CardioPractice* 2025, opinion d'auteurs) rappelle que dans les études observationnelles d'IC, une pression basse était associée à un pronostic moins bon, incitant à la prudence avant d'appliquer mécaniquement cette cible.
- **Pourquoi l'essai SPRINT ne tranche pas la question :** SPRINT (**9 361 personnes**) a montré que viser une systolique d'environ 120 mmHg plutôt que 140 mmHg réduisait les événements cardiaques (**HR 0,75**) et les décès (**HR 0,73**), mais plusieurs éléments du texte intégral limitent son extrapolation :
  - **Qui était exclu :** le registre de l'essai excluait les personnes ayant eu une IC symptomatique dans les 6 mois précédents ou une **FEVG < 35 %**. L'article publié lui-même n'imprime pas cette exclusion (il renvoie à une annexe) et ne rapporte aucune donnée de FEVG.
  - **D'où venait le bénéfice :** ce sont surtout les nouveaux épisodes d'insuffisance cardiaque aiguë qui ont reculé (**62 contre 100 événements, HR 0,62**), ainsi que la mortalité cardiovasculaire (**HR 0,57**). L'infarctus (**HR 0,83**) et l'AVC (**HR 0,89**) n'ont pas diminué significativement pris isolément. Il s'agit donc de *prévenir* l'insuffisance cardiaque chez des personnes hypertendues, et non de traiter une ICFER déjà établie.
  - **Le coût en effets indésirables :** le traitement intensif a entraîné davantage d'hypotensions graves, de syncopes, de troubles du sodium et du potassium et d'insuffisances rénales aiguës. Chez les personnes sans maladie rénale au départ, une baisse de la fonction rénale de **30 % ou plus** était environ **3,5 fois** plus fréquente (**HR 3,49**).
  - **Comment la pression était mesurée :** SPRINT utilisait la moyenne de **3 mesures automatisées assises après 5 minutes de repos** ; son « 120 » ne correspond pas à une mesure rapide isolée au cabinet. Les personnes présentant une pression systolique trop basse en position debout lors de la sélection n'étaient pas incluses.
- **Prévention et stade B : cible < 130 mmHg.** Les recommandations ESC 2026 recommandent un contrôle strict avec une **pression systolique < 130 mmHg** chez les personnes hypertendues ou en **stade B** (dysfonction VG asymptomatique) afin de réduire le risque d'insuffisance cardiaque (**Classe I, A** ; voir *Dysfonction ventriculaire asymptomatique (stade B)*).`,
    },
    {
      headingFr: 'Quels médicaments utiliser ou éviter ?',
      bodyMarkdownFr: `**En priorité, les quatre piliers de l'insuffisance cardiaque.** Dans l'ICFER, l'hypertension se traite d'abord avec le traitement de fond de l'IC, qui abaisse la tension ; une fois les quatre classes instaurées et titrées, une hypertension mal contrôlée devient rare (ESC 2026). À eux seuls, les iSGLT2 réduisent la systolique d'environ 2 mmHg (Helmy 2026 ; voir *Les médicaments de l'insuffisance cardiaque (4 piliers)*).

| Médicament | Place dans l'ICFER | Source |
|---|---|---|
| **Amlodipine (*Amlor*), félodipine** | **Peuvent être ajoutées** si la pression reste élevée, en l'absence de surcharge hydrique. Effet neutre sur la survie (PRAISE, V-HeFT III) ; peuvent causer des œdèmes des chevilles | ESC 2026 ; Abdin 2025 |
| **Hydralazine + dinitrate d'isosorbide** | Patients s'identifiant comme Noirs sous traitement complet (Classe IIa) ; personnes ne pouvant recevoir ARNI, IEC ni ARA2 (Classe IIb) | ESC 2026 |
| **Vérapamil, diltiazem** | **Contre-indiqués** (diminuent la force de contraction cardiaque) | ESC 2026 ; NICE NG106 |
| **Moxonidine** (antihypertenseur central) | **Contre-indiquée** : surmortalité dans un essai arrêté prématurément (5,5 % contre 3,4 %) | ESC 2026 ; Abdin 2025 |
| **Alphabloquants** (ex. doxazosine) | **Non recommandés pour l'hypertension** ; risque d'IC environ doublé dans le bras doxazosine d'ALLHAT. Une prescription pour la prostate peut être poursuivie si la tension le permet | ESC 2026 ; Abdin 2025 |
| **Minoxidil** | Non recommandé | Abdin 2025 |
| **Dihydropyridines à action brève** (ex. nifédipine immédiate) | À éviter | NICE NG106 |

Dans la section hypertension des recommandations ESC 2026, les mentions « contre-indiqué » et « non recommandé » figurent dans le texte narratif plutôt que dans des lignes de classe numérotées (les classes américaines n'ont pas pu être vérifiées dans le texte original).

**Ce qu'ajoutent les recommandations ESC 2024 sur l'hypertension :**

- Leur tableau 27 (maladies cardiaques) retient pour l'ICFER symptomatique les mêmes quatre piliers (IEC/ARA2 ou ARNI, bêtabloquant, ARM, iSGLT2) en **Classe I, A**.
- Elles indiquent (sans classe) que vérapamil et diltiazem ne doivent pas être utilisés dans l'IC ni associés à un bêtabloquant.
- **La moxonidine n'est pas mentionnée** dans le texte principal, et les alphabloquants n'y apparaissent pas comme mise en garde spécifique à l'IC (les annexes de contre-indications n'ont pas été lues) ; les mises en garde propres à l'ICFER ci-dessus s'appuient donc sur l'ESC 2026 IC et le consensus d'Abdin (2025). Pour l'hypertension résistante en général, elles proposent la spironolactone (*Aldactone*) en premier (IIa, B), puis d'autres ajouts (IIa, B) sans mention particulière pour l'IC dans ce tableau.

**Une hypertension difficile à contrôler** doit faire rechercher une cause secondaire, notamment un hyperaldostéronisme primaire, une sténose des artères rénales ou un **syndrome d'apnées obstructives du sommeil (SAOS)** (ESC 2026 ; voir *Apnée du sommeil et insuffisance cardiaque*). Les mesures hygiéno-diététiques (activité physique, poids, réduction du sel et de l'alcool, arrêt du tabac) restent utiles dans tous les cas.`,
    },
    {
      headingFr: 'Quand la tension artérielle est basse (hypotension)',
      bodyMarkdownFr: `- **Accepter des chiffres bas sans symptômes.** Les recommandations ESC 2026 soulignent qu'une hypotension asymptomatique doit être acceptée dans l'ICFER afin de maintenir les doses cibles des traitements de fond.
- **Fréquence :** l'hypotension concerne environ 10 à 15 % des patients ICFER. Dans PARADIGM-HF, une hypotension a été signalée chez 13,4 % des patients sous sacubitril/valsartan (*Entresto*), mais une systolique < 90 mmHg avec symptômes chez seulement **2,7 %** (Cautela 2020). Les grands essais excluaient toutefois les patients ayant une systolique < 95–100 mmHg à l'entrée (Helmy 2026).
- **Ordre pratique proposé par les experts en cas de symptômes** (Cautela 2020 — toujours géré par votre médecin ou cardiologue, jamais seul) :
  1. Avec une systolique ≥ 100 mmHg et sans symptôme, ne pas réduire les médicaments de l'IC.
  2. En cas de vertiges ou d'étourdissements, arrêter d'abord les antihypertenseurs n'apportant pas de bénéfice démontré dans l'IC (amlodipine, moxonidine, alphabloquants).
  3. Réduire ensuite le diurétique de l'anse s'il n'y a pas de surcharge hydrique.
  4. N'ajuster qu'en dernier recours les piliers de l'IC, au cas par cas, en touchant à l'ARM en dernier ; prendre l'avis d'un cardiologue spécialisé plutôt que d'arrêter des médicaments de Classe I.
- **Consensus HFA 2025 (Skouri et al., texte intégral — avis d'experts de la Heart Failure Association de l'ESC, sans recommandations gradées) :** rappelle que la baisse tensionnelle sous traitement de fond est généralement modérée et asymptomatique, et met en garde contre des réductions ou arrêts prématurés :
  - **Pas de définition unique de l'« hypotension » :** les repères courants sont une systolique < 90 mmHg au repos, une chute > 20 mmHg en systolique ou > 10 mmHg en diastolique au lever, ou environ 90–100 mmHg avec symptômes. Le document demande de toujours préciser les symptômes, car ce sont eux — et non le chiffre isolé — qui guident la décision.
  - **Quand agir sur les médicaments de l'IC :** uniquement si la systolique est **inférieure à 80 mmHg** ou si l'hypotension provoque des symptômes **majeurs**. Un bref étourdissement au lever ne justifie pas de diminuer le traitement de fond.
  - **Vérifier d'abord :** mesure allongée ou assise puis **après 3 minutes debout** ; si cela n'explique pas les symptômes, envisager une mesure ambulatoire de la pression artérielle sur 24 heures (MAPA).
  - **Automesure à domicile :** comment obtenir des séries fiables (tensiomètre automatique à brassard au bras validé sur STRIDE BP, 2 à 3 mesures matin avant les comprimés et soir, moyennées), pourquoi les brassards peuvent surestimer une tension très basse (constat issu de patients en état de choc) et ce qui change en cas de fibrillation atriale sont détaillés dans *Automesure tensionnelle à domicile (règle des 3 et tensiomètre validé)* et dans *Guide pratique : automesure tensionnelle et montres connectées*. Les montres connectées et capteurs sans brassard ne remplacent pas un tensiomètre validé (voir *Montres connectées et capteurs dans l'insuffisance cardiaque*).
  - **Écarter d'abord les autres causes :** antihypertenseurs sans bénéfice démontré dans l'IC (inhibiteurs calciques, alphabloquants, antihypertenseurs centraux), déshydratation lors d'une maladie aiguë, excès de diurétique, nouvel alphabloquant pour la prostate, et traitements prescrits par d'autres spécialistes (certains antidépresseurs, comprimés contre la dysfonction érectile, collyres bêtabloquants contre le glaucome). Chez un patient auparavant stable, une chute tensionnelle nouvelle doit aussi faire rechercher une valvulopathie ou une ischémie.
  - **Puis le diurétique :** en l'absence de surcharge hydrique, le réduire avec prudence.
  - **Quels médicaments abaissent le moins la tension :** les **iSGLT2** et les **ARM** abaissent à peine la pression artérielle et, chez les personnes ayant une pression basse au départ, elle tendait même à remonter légèrement. Dans DAPA-HF, le groupe le plus bas (95–110 mmHg) n'a baissé que de **1,5 mmHg** de plus que le placebo ; dans EMPHASIS-HF (éplérénone — *Inspra*), le groupe le plus bas a monté de **2,8 mmHg**. Ces deux classes sont instaurées en premier et arrêtées en dernier. Le sacubitril/valsartan (*Entresto*) abaisse le plus la pression et peut être débuté à 24/26 mg deux fois par jour, avec un IEC ou un ARA2 en solution de repli.
  - **Repères pratiques :** ne modifier qu'un médicament à la fois ; espacer les prises dans la journée afin que leurs pics ne coïncident pas ; préférer le bisoprolol ou le métoprolol au carvédilol ; l'ivabradine (en rythme sinusal) ou la digoxine (en FA) ralentissent la fréquence cardiaque sans abaisser la tension ; la réadaptation physique et les bas de contention peuvent aider.
  - **Si une réduction reste nécessaire :** diminuer d'abord le médicament le moins toléré et conserver l'iSGLT2 ainsi que, si possible, l'ARM. Interrompre des traitements comporte un risque propre : dans plusieurs registres et essais, l'arrêt d'un ARM ou d'un bloqueur du SRAA s'associait à davantage de décès et d'événements.
  - **Les dispositifs et gestes valvulaires peuvent relever la tension :** la CRT d'environ **5 %** en moyenne, et le traitement d'un rétrécissement aortique sévère (voir ci-dessous).
  - **Fréquence dans les essais :** dans PARADIGM-HF, **16,0 %** des patients ont eu une hypotension asymptomatique et **11,1 %** une hypotension symptomatique à un moment du suivi, avec maintien du bénéfice du sacubitril/valsartan dans les deux cas.
- **NICE NG106 :** conseille de contrôler la pression artérielle avant et après chaque augmentation de dose, les chutes liées à l'hypotension orthostatique étant une cause fréquente d'hospitalisation chez les patients âgés (voir *Médicaments : mode d'action, effets secondaires et bilans sanguins* pour les conseils d'horaires de prise).

### Une tension basse est-elle une cause de risque ou le reflet d'un cœur plus faible ?

Dans l'insuffisance cardiaque, les personnes ayant une pression basse évoluent en moyenne moins bien — à l'inverse de la population générale :

| Étude | Population | Constat principal |
|---|---|---|
| **Seidu 2024** (méta-analyse, texte intégral) | 43 études observationnelles, 120 643 patients IC, une mesure initiale chacun | Une pression systolique plus basse s'associait à plus de décès : risque relatif **1,14** sous 130 mmHg, **1,20** sous 120 mmHg, **1,48** sous 110 mmHg. Seul chiffre propre à l'ICFER : sous 110 mmHg, risque relatif **1,30** dans l'ICFER contre **2,45** dans l'ICFEP. Chaque hausse de 10 mmHg s'associait à environ **11 %** de décès en moins, sans baisse des décès cardiovasculaires ni des hospitalisations. Certitude faible à très faible ; nombreuses mesures réalisées à l'admission en IC aiguë |
| **Li 2025** (données individuelles poolées, texte intégral) | 8 essais anciens d'IC (années 1990–2010) ; mesures répétées analysées chez **16 034 patients ICFER** | Par rapport à une systolique récente de 120–140 mmHg, une pression **≤ 120 mmHg** s'associait à environ +70 % de décès cardiovasculaires ou hospitalisations pour IC (**HR 1,71**) ; **> 140 mmHg** n'entraînait pas de surrisque net (**HR 1,07**). En FEVG modérément réduite ou préservée (quasi tout issu de TOPCAT), pressions basses et hautes comportaient un risque. Dans la tranche FEVG **26–40 %**, le risque culminait aux pressions basses puis s'aplatissait |
| **STICH au sein de Li 2025** (annexe) | **2 136 patients** avec cardiomyopathie ischémique et FEVG ≤ 35 % | Même profil que le pool global : systolique **≤ 120 mmHg HR 1,72** ; **> 140 mmHg HR 1,15** (non significatif). La pression basse prédisait le risque dans chaque essai ICFER du pool |
| **DAPA-HF selon la pression** (Serenelli 2020) | 4 744 patients ICFER | Risque maximal sous 110 mmHg, mais la dapagliflozine (*Forxiga*) restait tout aussi efficace (**HR 0,76**). Baisse tensionnelle moyenne de ~2,5 mmHg seulement (~1,5 mmHg de plus que placebo sous 110 mmHg, où la pression a légèrement monté dans les deux bras) |
| **PARADIGM-HF selon la pression** (Böhm 2017) | 8 399 patients ICFER | Mortalité maximale sous 110 mmHg. Le bénéfice du sacubitril/valsartan sur l'énalapril était similaire à tous les niveaux (**HR 0,88** sous 110 mmHg), avec plus d'hypotensions symptomatiques sous 110 mmHg (**25,5 % contre 13,7 %**) |

- **Interprétation dominante :** une pression basse est surtout un *marqueur* d'un cœur qui pompe moins, plutôt que la cause directe du risque (lecture retenue par les auteurs de DAPA-HF ; ceux de PARADIGM-HF restent plus nuancés).
- **Conséquence clinique :** les médicaments gardant toute leur efficacité à basse pression, ces analyses renforcent le conseil de ne pas réduire les traitements de fond devant des chiffres bas sans symptômes.
- **Autres indices qu'il s'agit en partie d'un marqueur :** dans Li 2025, une mesure basse *récente* était un signal plus fort qu'une pression basse initiale (**HR 1,71 contre 1,31**), les patients à pression basse avaient une atteinte cardiaque plus sévère et recevaient plus de médicaments d'IC, et dans le registre suédois le surrisque d'une pression basse était atténué chez les patients sous traitement complet (annexe Li 2025 ; Skouri 2025).
- **Limites :** il s'agit d'analyses observationnelles ou post hoc ; aucun essai n'a testé l'intérêt de faire remonter la tension, et les associations ne prouvent pas de lien causal. Les essais regroupés dans Li 2025 précèdent le sacubitril/valsartan et les iSGLT2, peu de patients prenaient un ARM et seuls les traitements initiaux étaient ajustés, sans pouvoir séparer l'effet de la maladie de celui des médicaments. Li 2025 nomme ses groupes « tertiles », alors qu'il s'agit de tranches fixes de tailles très inégales (≤ 120, 120–140, > 140 mmHg).`,
    },
    {
      headingFr: 'Cas particulier du rétrécissement aortique (et incertitudes)',
      bodyMarkdownFr: `Un rétrécissement aortique ajoute un obstacle fixe à l'éjection. L'ancien enseignement déconseillait les vasodilatateurs par crainte d'une chute tensionnelle brutale ; les recommandations actuelles sont nettement plus nuancées (Basile 2021 ; ACC/AHA 2020).

**Ce que disent les recommandations :**

- **ACC/AHA 2020 :** traiter l'hypertension dans le rétrécissement aortique en **commençant à faible dose puis en titrant progressivement (Classe 1, B-NR)**. Les craintes d'une chute du débit cardiaque ne se sont pas confirmées, mais les **diurétiques peuvent réduire le volume d'éjection**, surtout si le ventricule est petit.
- **ESC/EACTS 2025 :** privilégie les **IEC ou ARA2**, augmentés prudemment pour éviter une hypotension symptomatique.
- **ESC 2024 hypertension :** en cas de valvulopathie sévère avec IC, mêmes seuil (> 130/80) et cible (120–129/70–79 si tolérée) ; dans les formes légères à modérées, évaluation préalable du risque cardiovasculaire global. Les IEC/ARA2 sont préférés aux inhibiteurs calciques type amlodipine, avec ajout d'un bêtabloquant si la pression reste > 140/90 (ligne combinée sténose et fuite aortiques : **Classe IIa, C**).
- **ESC 2026 IC :** les médicaments de l'IC **peuvent être utilisés avec prudence** dans le rétrécissement aortique sans retarder le geste valvulaire si la sténose est sévère et symptomatique (le texte n'aborde pas spécifiquement la sténose modérée). Après TAVI chez des patients avec IC, la dapagliflozine a réduit de 28 % à 1 an les décès ou aggravations d'IC (essai DapaTAVI).

**Données d'études :**

- **RIAS (2015)** (100 patients avec sténose modérée ou sévère asymptomatique, ~80 % modérée, **FEVG > 50 %**) : le ramipril a réduit la masse VG par rapport au placebo (écart de 8,4 g), a été bien toléré et n'a pas significativement abaissé la tension (effectif trop faible pour les événements cliniques).
- **Guan (2023) :** méta-analyse surtout observationnelle et à FEVG préservée montrant une mortalité plus faible sous IEC/ARA2 après remplacement valvulaire, sans différence sans remplacement.
- **Sacubitril/valsartan (ARNI) :** données très limitées, aucune étude propre au rétrécissement aortique (Basile 2021 ; Guan 2023).
- **Inhibiteurs calciques :** la revue de Basile (2021, texte intégral) les déconseille sur la base d'une seule étude rétrospective de **314 personnes** ayant une sténose modérée ou sévère *asymptomatique*, où leur prise s'associait à un taux de décès environ **sept fois supérieur** (sans HR, intervalle de confiance ni type précis de molécule rapportés). Cela entre en tension avec les recommandations IC autorisant l'amlodipine ou la félodipine et n'a pas été testé en essai randomisé.
- **Bêtabloquants dans le rétrécissement aortique :** la même revue les privilégie en ajout après un bloqueur du système rénine-angiotensine, en particulier lorsqu'existent une insuffisance cardiaque ou une maladie coronarienne.
- **Cible de 130–139 / 80–90 mmHg :** suggérée par Basile (2021) avec initiation à faible dose et titration programmée, à partir d'une analyse de l'essai **SEAS (Nielsen 2016)** chez des personnes ayant une sténose aortique **sans symptôme** (article SEAS non lu directement) ; ce n'est **pas** une cible d'ICFER.
- **L'association FEVG basse + rétrécissement aortique reste presque inexplorée :** la seule étude citée par la revue chez des patients au ventricule sévèrement affaibli porte sur **25 patients** traités par nitroprussiate intraveineux à l'hôpital, ce qui ne fournit aucun schéma tensionnel au long cours pour un rétrécissement aortique avec FEVG réduite.
- **Un rétrécissement aortique sévère peut lui-même abaisser la tension :** le consensus HFA 2025 (Skouri 2025) le cite parmi les causes d'hypotension dans l'ICFER. Après remplacement valvulaire par cathéter (TAVI), la pression systolique a augmenté chez **55 %** des patients à 30 jours dans PARTNER I et de **15 mmHg** en moyenne immédiatement après l'intervention dans une autre série de **105 patients** (aucune donnée spécifique à l'ICFER ni aux sténoses légères ou modérées).

**Effet de la tension sur la lecture de l'ETT :** une pression artérielle élevée fait habituellement **sous-estimer** la sévérité d'un rétrécissement aortique, même si la revue souligne qu'elle peut fausser le classement dans un sens ou dans l'autre selon les variations de débit. La pression doit donc être mesurée lors de chaque échocardiographie, et l'ACC/AHA recommande de l'équilibrer avant de classer une sténose suspectée à bas gradient. La charge combinée sur le ventricule (« impédance valvulo-artérielle ») additionne pression systolique et gradient valvulaire, divisés par le volume d'éjection indexé (aucun seuil n'est fourni dans la revue ; voir *Rétrécissement aortique avec FEVG réduite*).

### Ce qui reste incertain

- La valeur optimale exacte de pression artérielle dans l'ICFER établie (l'extension narrative ESC 2024 à 120–129 mmHg et l'absence de cible testée dans l'ESC 2026 reflètent toutes deux cette absence d'essai randomisé dédié).
- Le bénéfice ou le risque d'une baisse tensionnelle intensive lorsque coexistent ICFER et rétrécissement aortique modéré.
- Les classes exactes de recommandation des textes américains HTA/IC et les tableaux annexes de contre-indications de l'ESC 2024 HTA (non consultés).`,
    },
  ],
  relatedArticleSlugs: [
    'automesure-tensionnelle-domicile',
    'guide-pratique-automesure-et-montres-connectees',
    'montres-connectees-et-capteurs-ic',
    'angor-et-medicaments-anti-angineux',
    'magnesium-insuffisance-cardiaque',
    'maladies-associees',
    'medicaments-insuffisance-cardiaque',
    'medicaments-effets-secondaires-suivi',
    'stenose-aortique-fevg-reduite',
    'dysfonction-vg-asymptomatique-stade-b',
    'confirmer-la-cause-dysfonction-vg',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'sel-et-liquides-insuffisance-cardiaque',
    'vie-sexuelle-et-dysfonction-erectile-ic',
    'voyages-canicule-et-climat-ic',
    'questions-equipe-cardiologie',
    'recommandations-comparees-esc-us-nice',
    'essais-cliniques-cles',
    'comprendre-le-diagnostic',
  ],
  sources: [
    { label: 'Recommandations ESC 2026 (pression artérielle et stade B)', detail: "Absence de cible testée dans l'ICFER, traitements contre-indiqués, cible < 130 mmHg en stade B et prudence dans le RAo" },
    { label: "Recommandations ESC 2024 sur l'hypertension et ESC CardioPractice (2025)", detail: 'Cible générale 120–129 mmHg, tolérance sous 120/70 et sections cardiopathies/valves' },
    { label: 'SPRINT (NEJM 2015, texte intégral) et Helmy et al. (2026)', detail: "Exclusions du registre SPRINT (FEVG < 35 %, IC récente), composantes du résultat, méthode de mesure, effets rénaux et revue des cibles tensionnelles" },
    { label: 'Abdin (2025), Cautela (2020), Skouri / HFA (2025, texte intégral) et NICE NG106', detail: "Médicaments aggravant l'IC, définitions et seuils HFA de l'hypotension (< 80 mmHg ou symptômes majeurs), ordre d'ajustement et surveillance tensionnelle" },
    { label: 'Seidu (2024, texte intégral), Li (2025, texte intégral et annexe avec STICH), Serenelli (DAPA-HF 2020) et Böhm (PARADIGM-HF 2017)', detail: "Risque associé aux pressions basses (dont STICH en cardiomyopathie ischémique) et maintien du bénéfice des traitements de fond sous 110 mmHg" },
    { label: 'RIAS (2015), Basile (2021, texte intégral), Guan (2023), ACC/AHA 2020 et ESC/EACTS 2025', detail: "Hypertension artérielle associée au rétrécissement aortique, origine de la cible 130–139/80–90 (SEAS), limites en FEVG basse et effet sur la mesure ETT" },
  ],
  disclaimerType: 'medical',
};
