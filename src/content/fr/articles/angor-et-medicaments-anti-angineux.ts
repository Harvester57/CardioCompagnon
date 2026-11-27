import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'angor-et-medicaments-anti-angineux',
  sourceWikiPath: 'wiki/concepts/angina-and-anti-anginal-medicines.md',
  titleFr: 'Angor et médicaments anti-angineux dans l’ICFER ischémique',
  category: 'traitements',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'angor',
    'anti-angineux',
    'dérivés-nitrés',
    'trinitrine',
    'natispray',
    'ranolazine',
    'trimétazidine',
    'nicorandil',
    'ivabradine',
    'amlodipine',
    'ipde-5',
    'icfer',
  ],
  aliases: [
    'Angor',
    'Angine de poitrine',
    'Anti-angineux',
    'Trinitrine',
    'Natispray',
    'Patch nitré',
    'Nitriderm',
    'Tolérance aux nitrés',
    'Ranolazine',
    'Ranexa',
    'Trimétazidine',
    'Vastarel',
    'Nicorandil',
    'Adancor',
    'Ikorel',
    'Amlodipine',
    'Félodipine',
    'Réducteur du sinus coronaire',
    'Angor réfractaire',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "L'angor (angine de poitrine) correspond à une douleur ou une oppression thoracique — parfois ressentie dans le bras, la mâchoire, le dos ou sous forme d'essoufflement — lorsque le muscle cardiaque manque transitoirement de sang, le plus souvent à l'effort. Dans la cardiomyopathie ischémique, il est fréquent (près de la moitié des patients d'un grand essai). Le bêtabloquant que vous prenez déjà pour l'insuffisance cardiaque est aussi le premier médicament anti-angineux. En cas de crise, la trinitrine sublinguale (Natispray en France) soulage en quelques minutes et peut prévenir une douleur avant un effort déclenchant habituel. Si l'angor persiste, votre cardiologue peut ajouter d'autres molécules (ivabradine, patch nitré, ranolazine, amlodipine, puis nicorandil ou trimétazidine) : elles visent uniquement le confort symptomatique, aucune n'a démontré d'allongement de la survie, et elles ne doivent pas évincer les quatre piliers de l'insuffisance cardiaque. Le vérapamil et le diltiazem sont évités dans l'ICFER, et tout dérivé nitré (ou le nicorandil) est formellement contre-indiqué avec les médicaments de l'érection comme le sildénafil (Viagra) ou le tadalafil (Cialis). Convenez avec votre équipe d'un plan d'action écrit pour savoir quand appeler le 15 (SAMU), le 112 ou le 114 (SMS).",
  sections: [
    {
      headingFr: 'Fréquence et signification clinique de l’angor dans l’ICFER ischémique',
      bodyMarkdownFr: `- **Essai CORONA (Badar et al., 2014) :** parmi **4 878 patients** âgés de 60 ans et plus atteints d'insuffisance cardiaque ischémique à fraction d'éjection réduite (ICFER, FEVG moyenne **30 à 32 %**), **47 %** présentaient un angor au départ. Après ajustement, l'angor était associé à environ **2,4 fois plus** d'infarctus du myocarde ou d'angor instable et à **35 % de plus** d'hospitalisations pour insuffisance cardiaque, mais **sans surmortalité**.
- **Analyse de PARADIGM-HF (thèse Badar, 2019) :** parmi **5 594 patients** coronariens, **31 %** rapportaient un angor. Seul un angor **sévère (7 %)** était associé à davantage de décès (mortalité toutes causes **HR 1,48** ; mort subite **HR 1,86**), contrairement à un angor léger ou modéré. Le sacubitril/valsartan (*Entresto*) apportait un bénéfice comparable avec ou sans angor *(analyse issue d'une thèse médicale soutenue, non publiée en article revu par les pairs)*.
- **Essai STICH (Jolicoeur et al., 2015) :** la présence d'un angor ne permettait pas de prédire qui tirerait un gain de survie du pontage aorto-coronarien, mais la chirurgie soulageait plus souvent l'angor (voir *Revascularisation coronaire : pontage et stents*).
- **Applicabilité :** CORONA et PARADIGM-HF correspondent directement à la cardiomyopathie ischémique à FEVG réduite, mais avec des traitements de fond antérieurs à la généralisation des iSGLT2.`,
    },
    {
      headingFr: 'L’escalade anti-angineuse dans l’ICFER et comparaison des recommandations',
      bodyMarkdownFr: `Aucun essai clinique n'a comparé un ordre strict d'anti-angineux dans l'ICFER. Les recommandations européennes **ESC 2024 sur les syndromes coronariens chroniques (SCC)** soulignent que le choix doit être **personnalisé** selon la pression artérielle, la fréquence cardiaque, les comorbidités (dont l'insuffisance cardiaque) et les traitements associés (**Classe I, Niveau C**). En croisant les recommandations ESC 2024 SCC et **ESC 2026 sur l'insuffisance cardiaque** (section 9.2.1), la séquence usuelle pour une FEVG autour de 35 % est la suivante :

1. **Bêtabloquant** jusqu'à la dose cible ou maximale tolérée (également médicament de Classe I de l'insuffisance cardiaque), associé à un **dérivé nitré sublingual** en cas de crise (**I B**).
2. **Ivabradine (*Procoralan*)** en rythme sinusal si la fréquence cardiaque de repos reste **> 70 bpm** malgré le bêtabloquant, ou si le bêtabloquant ne peut pas être utilisé.
3. **Dérivé nitré d'action prolongée** ou **ranolazine (*Ranexa*)** (**IIa B**), ou encore **amlodipine (*Amlor*) / félodipine** (les seuls inhibiteurs calciques jugés acceptables dans l'ICFER).
4. **Nicorandil (*Adancor*, *Ikorel*)** ou **trimétazidine (*Vastarel*)** (**IIb B**).
5. **Revascularisation coronaire** si l'angor persiste malgré les traitements de l'insuffisance cardiaque et les anti-angineux (**ESC 2026 IC : Classe I C**, quelle que soit la FEVG).

*Repère historique :* les recommandations ESC 2016 (remplacées depuis) étaient les dernières à afficher un escalier spécifique à l'ICFER et déconseillaient (**Classe III C**, classes à vérifier sur le PDF source) d'associer deux molécules parmi ivabradine, ranolazine et nicorandil, ainsi que d'associer nicorandil et dérivé nitré.

### Comparatif international

| Médicament | ESC 2024 (SCC) | ESC 2026 (IC, section 9.2.1, texte non gradé sauf mention) | ACC/AHA 2023 (maladie coronaire chronique) | NICE CG126 (Royaume-Uni) |
|---|---|---|---|---|
| **Dérivé nitré d'action rapide (trinitrine)** | **I B** | Utiliser avec prudence (risque d'hypotension) | **1 B-NR** (comprimé ou spray) | À proposer |
| **Bêtabloquant** | **I B** (bêtabloquant et/ou inhibiteur calcique en 1re ligne) | 1re intention ; **Classe I** dans l'IC | **1 B-R** ; **1 A** si FEVG ≤ 40 % | 1re intention |
| **Ivabradine** | **IIa B** si FEVG < 40 % ; **III B** si FEVG > 40 % sans IC ; **III B** avec vérapamil/diltiazem | À envisager si FC > 70 bpm ; **IIa B1** pour les événements d'IC à FEVG ≤ 35 % | **3 : Danger** uniquement en fonction VG **normale** (SIGNIFY) | 2e intention, seulement avec un calcique dihydropyridinique |
| **Dérivé nitré longue durée** | **IIa B** ; fenêtre libre sans nitré **IIa B** | Non cité | **1 B-R** (option initiale) | 2e intention |
| **Ranolazine** | **IIa B** | Symptômes uniquement, aucun effet sur la survie | **1 B-R** | 2e intention |
| **Amlodipine / félodipine** | Bêtabloquant + dihydropyridine **IIa B** ; soulagent l'angor en ICFER avec prudence | Symptômes uniquement | Inhibiteur calcique **1 B-R** | Avec un bêtabloquant |
| **Nicorandil** | **IIb B** | Symptômes uniquement | Absent des recommandations angor | 2e intention |
| **Trimétazidine** | **IIb B** | « Peut améliorer la fonction VG et la capacité d'effort » | Non mentionnée | Non mentionnée |
| **Vérapamil / diltiazem** | **Contre-indiqués** en ICFER | Non recommandés | Ne pas utiliser en dysfonction VG significative | À éviter en ICFER (NICE NG106) |
| **Dérivé nitré + inhibiteur PDE-5** | **III B** | — | — | — |

- **En France (HAS, guide parcours ALD 13, 2021) :** trinitrine et bêtabloquants en première intention ; inhibiteurs calciques ou dérivés nitrés longue durée si les bêtabloquants sont contre-indiqués ou insuffisants ; nicorandil uniquement en deuxième intention.
- **Points de divergence :** la ranolazine est en Classe 1 aux États-Unis contre IIa en Europe ; les seuils de l'ivabradine varient selon les documents ESC (FEVG < 40 % dans ESC 2024 SCC, FEVG ≤ 35 % et FC > 70 bpm dans ESC 2026 IC), et la mise en garde américaine « Danger » ne s'applique qu'aux cœurs à fonction systolique normale ; dans l'ESC 2026 IC, seule la revascularisation pour angor persistant porte une classe formelle (**I C**).`,
    },
    {
      headingFr: 'Trinitrine sublinguale (Natispray), dérivés nitrés longue durée et tolérance',
      bodyMarkdownFr: `### Trinitrine sublinguale (*Natispray*)

- **Mode d'emploi selon le RCP français :** **1 pulvérisation sous la langue** (sans inhaler) ; si la douleur persiste, renouveler une ou deux fois à **2 à 3 minutes d'intervalle** (maximum 3 bouffées) ; s'asseoir et rester assis environ **10 minutes** après la deuxième bouffée. Une pulvérisation **2 à 3 minutes avant** un déclencheur prévisible (effort, froid, activité sexuelle) peut prévenir une crise. Le dosage faible (**0,15 mg**) est privilégié en première prescription, chez les personnes âgées ou en association avec d'autres médicaments abaissant la tension. Amorcer le flacon par **5 pressions** avant le premier usage (conservation 3 ans).
- **Quand appeler les secours : les sources diffèrent sur le chronométrage exact.**

| Source | Règle formulée |
|---|---|
| **ANSM** (avis de rappel *Natispray*, 2025) | Appeler le **15 (SAMU)** si la douleur dure **plus de 5 minutes malgré 2 pulvérisations espacées de 3 minutes**, ou s'aggrave |
| **sante.fr** (2026) | Appeler le **15 ou le 112** si la douleur persiste **5 minutes après la deuxième dose** |
| **NHS** (Royaume-Uni, 2026) | 1 à 2 bouffées ; renouveler après 5 minutes ; appeler les secours si la douleur persiste **5 minutes après la deuxième dose** ; ne pas conduire soi-même |
| **BHF** (Royaume-Uni, 2019) | S'asseoir d'abord ; appeler les secours en l'absence de soulagement **dans les minutes** suivant la deuxième dose ou si la douleur s'aggrave |
| **Notice *Natispray*** | Aucune règle chiffrée d'appel d'urgence mentionnée |
| **Fédération Française de Cardiologie (2023)** | Appeler le **15** si une oppression thoracique dure **au-delà d'environ 20 minutes** ; une douleur non soulagée en environ 1 minute par la trinitrine évoque un infarctus *(signes d'infarctus, non un protocole posologique)* |

Demandez à votre cardiologue un **plan écrit personnalisé** précisant votre seuil exact d'appel au **15 (SAMU)**, **112** ou **114 (SMS)**. Une douleur survenant au repos, pour un effort moindre que d'habitude, ou un besoin plus fréquent de trinitrine impose de contacter rapidement votre médecin.

- **Effets indésirables :** maux de tête, bouffées de chaleur, vertiges et baisse de la pression artérielle (s'allonger jambes surélevées en cas de malaise). L'ESC 2026 rappelle que les nitrés d'action rapide exposent à l'hypotension dans l'ICFER, où la tension est souvent déjà basse sous quadrithérapie.

### Dérivés nitrés d'action prolongée et phénomène de tolérance

- **Disponibilité en France :** la presse pharmaceutique rapporte le retrait du marché des formes orales prolongées (*Monicor LP*, *Langoran LP*, *Risordan 20 mg*) entre 2013 et 2021, laissant les **patchs transdermiques de trinitrine** (*Nitriderm TTS*, *Discotrine*, *Epinitril*, *Trinipatch*, etc.) comme principale option de longue durée (non vérifié pour chaque générique).
- **Fenêtre libre sans nitré (ESC 2024 : IIa B) :** en prise continue, l'efficacité s'épuise (**tolérance** par rétention hydrique, contre-régulation hormonale et stress oxydatif vasculaire, avec risque d'ischémie rebond à l'arrêt, Daiber & Münzel 2015). Le RCP français impose un **intervalle quotidien sans patch de 8 à 12 heures**, le plus souvent la nuit, précisé sur l'ordonnance ; les autres anti-angineux assurent la couverture pendant cette période.
- **Hydralazine :** une petite étude de 1995 (Gogia, 28 patients ICFER) a montré que l'hydralazine prévenait la tolérance à la trinitrine IV, ce qui constitue l'un des fondements de l'association hydralazine + dinitrate d'isosorbide (voir *Médicaments additionnels : ivabradine, digoxine/digitoxine et vériciguat*).
- **Données sur les événements cliniques (niveau de preuve faible) :** les nitrés soulagent les symptômes mais n'ont pas démontré d'amélioration de la survie seuls. Une cohorte chinoise monocentrique rétrospective de 2026 (Liu, 299 patients avec FEVG < 45 %, ère pré-iSGLT2, applicabilité partielle) a retrouvé une association entre nitrés à la sortie et mortalité (**HR ajusté 2,14**, IC 1,15–3,96), exposée au biais de confusion (patients plus sévères) sans preuve de causalité. Dans **NEAT-HFpEF** (2015, FEVG moyenne 63 %, indirecte), le mononitrate d'isosorbide a réduit l'activité quotidienne en FEVG préservée.
- **Contre-indications du RCP français du patch :** pression artérielle systolique **< 90 mmHg**, rétrécissement aortique ou mitral, anémie sévère, hypovolémie, et tout inhibiteur de la PDE-5.`,
    },
    {
      headingFr: 'Interaction critique : dérivés nitrés et médicaments de l’érection (IPDE-5)',
      bodyMarkdownFr: `- **Contre-indication absolue (ESC 2024 : Classe III B) :** toutes les formes de dérivés nitrés (*Natispray*, patchs) ainsi que le **nicorandil** sont formellement contre-indiqués avec les inhibiteurs de la phosphodiestérase de type 5 (**IPDE-5** : sildénafil *Viagra*, tadalafil *Cialis*, vardénafil, avanafil), en raison d'un risque de chute brutale et grave de la pression artérielle.
- **Délais de sécurité issus des études pharmacodynamiques :**
  - Après **sildénafil** : la trinitrine provoquait encore des baisses tensionnelles supplémentaires jusqu'à **8 heures** chez des hommes coronariens (contre 1 heure chez des volontaires sains, Oliver 2009), fondant le délai minimal usuel de **24 heures**.
  - Après **tadalafil** : l'interaction persistait à 24 heures et disparaissait à **48 heures** (Kloner 2003), fondant le délai minimal de **48 heures**.
- Un registre danois (Holt 2022) a observé une multiplication par 20 des co-prescriptions sans excès manifeste d'événements graves, mais des délivrances en pharmacie ne prouvent pas une prise simultanée, et les auteurs confirment que l'association reste **contre-indiquée**.
- **Riociguat (*Adempas*) et vériciguat (*Verquvo*) :** le riociguat est formellement contre-indiqué avec tout dérivé nitré ; le vériciguat appelle à la prudence avec les nitrés (nitrés rapides tolérés dans les essais, expérience limitée pour les formes prolongées) et est déconseillé avec les IPDE-5.
- Dans l'ICFER ischémique, la tension artérielle souvent déjà basse sous ARNI et diurétiques rend toute chute tensionnelle encore plus préoccupante (voir *Vie sexuelle et dysfonction érectile dans l'insuffisance cardiaque*).`,
    },
    {
      headingFr: 'Options de 2e et 3e intention et disponibilité en France',
      bodyMarkdownFr: `### Ivabradine (*Procoralan*) dans l'angor

L'ivabradine ralentit le cœur en rythme sinusal sans abaisser la tension (son rôle dans l'IC via SHIFT est détaillé dans *Médicaments additionnels : ivabradine, digoxine/digitoxine et vériciguat*).
- Dans **BEAUTIFUL** (coronariens avec FEVG < 40 %, moyenne ~32 %), l'essai global était neutre ; une analyse **post hoc** chez les **1 507 patients** souffrant d'angor limitant a suggéré moins d'hospitalisations pour infarctus (**HR 0,58**, IC 0,37–0,92) et un critère principal limite (**HR 0,76**, IC 0,58–1,00) : résultat purement générateur d'hypothèses (lu sur résumé).
- Dans **SIGNIFY** (FEVG normale sans IC), les patients angoreux présentaient **davantage** d'événements sous ivabradine, d'où une AMM strictement symptomatique dans l'angor. Association interdite avec vérapamil et diltiazem (**ESC 2024 III B**).

### Inhibiteurs calciques : lesquels sont autorisés ?

- **Amlodipine (*Amlor*) :** dans **PRAISE** (1 153 patients, FEVG < 30 %, NYHA IIIB–IV, ère pré-bêtabloquants), ni danger ni bénéfice dans le groupe ischémique (décès ou admission CV 39 % contre 42 %, p = 0,31) ; **PRAISE-2** (1 654 non ischémiques) était neutre (**HR 1,09**) avec davantage d'œdèmes.
- **Félodipine :** dans **V-HeFT III** (450 hommes sous énalapril), mortalité similaire (13,8 % contre 12,8 %), œdèmes comme effet principal.
- Ces essais des années 1990 (applicabilité partielle) fondent le statut **acceptable mais sans gain de survie** de l'amlodipine et de la félodipine. À l'inverse, le **vérapamil (*Isoptine*)** et le **diltiazem (*Tildiem*)** dépriment la contraction cardiaque et sont **contre-indiqués dans l'ICFER**.

### Ranolazine (*Ranexa*)

- **AMM européenne :** traitement d'appoint de l'angor stable insuffisamment contrôlé ou en cas d'intolérance aux traitements de 1re ligne (**375 mg à 750 mg deux fois par jour**).
- **Contre-indications :** clairance de la créatinine **< 30 mL/min**, insuffisance hépatique modérée ou sévère, inhibiteurs puissants du CYP3A4 (clarithromycine, itraconazole, jus de pamplemousse), antiarythmiques de classe Ia ou III **autres que l'amiodarone** (comme le sotalol).
- **Interactions en ICFER :** élévation des taux de **digoxine (×1,5)** nécessitant surveillance ; **simvastatine plafonnée à 20 mg** ; exposition à la **metformine** jusqu'à ×1,8 (plafond US 1 700 mg/j avec 1 000 mg × 2) ; léger allongement du QTc (~6 ms). Le RCP européen recommande une titration prudente en **NYHA III–IV** (exposition ×1,3).
- **Essais :** dans **RAID** (1 012 porteurs de DAI, 54 % ischémiques, FEVG ~31 %, évaluée comme antiarythmique), le critère principal TV/FV ou décès était **neutre** (**HR 0,84**, IC 0,67–1,05) avec baisse secondaire des récidives de TV/FV (**HR 0,70**) et ~50 % d'arrêts ; **RIVER-PCI** (2 604 patients, FEVG moyenne 55 %, NYHA III–IV exclus) n'a montré aucun bénéfice à 1 000 mg × 2 avec plus de signalements d'IC dans le RCP européen (2,2 % contre 1,0 %).
- **En France :** SMR important mais **ASMR V** (HAS, 2011). Selon Vidal, commercialisée en France en **septembre 2025**, **non remboursée** (statut ultérieur non vérifié).

### Trimétazidine (*Vastarel*)

- **Action et AMM (révision européenne 2012) :** agent métabolique sans baisse tensionnelle ni ralentissement du pouls ; en appoint uniquement (**35 mg × 2/j**, ou **1/j** si clairance 30–60 mL/min), avec réévaluation à 3 mois. **Contre-indiquée** en cas de maladie de Parkinson, tremblements, syndrome des jambes sans repos ou clairance **< 30 mL/min** (arrêt définitif si trouble moteur).
- **En France :** SMR jugé **insuffisant** par la HAS (2011) ; **non remboursée**.
- **Preuves en ICFER :** deux méta-analyses de petits essais anciens (Nassiri 2024 : 28 études, 2 552 patients, FEVG médiane 33 %, décès CV OR 0,33 et hospitalisations IC OR 0,42 ; Zhang 2012 : 16 petits ECR) souffrent d'un risque élevé de biais et d'absence de traitements modernes ; les auteurs de Nassiri 2024 ne recommandent pas un usage systématique. Dans **ATPCI** (6 007 patients post-stent, FEVG non rapportée), aucun effet sur les événements cardiaques (**HR 0,98**, IC 0,88–1,09). L'ESC 2026 l'évoque sans grade formel.

### Nicorandil (*Adancor*, *Ikorel*)

- **AMM (révision européenne 2015) :** 2e intention uniquement (**10 à 20 mg × 2/j**). **Contre-indiqué** en cas de choc ou d'hypotension sévère, dysfonction VG avec pressions de remplissage basses ou décompensation, œdème aigu pulmonaire, association aux IPDE-5 ou au riociguat ; **prudence en NYHA III–IV**.
- **Risque d'ulcérations sévères :** ulcères buccaux, digestifs, cutanés, génitaux ou oculaires pouvant apparaître des années après le début, résistant aux soins locaux et guérissant uniquement à l'arrêt définitif ; le risque digestif est majoré par l'aspirine et les AINS. Peut très rarement élever le potassium (attention avec IEC/ARNI/ARM).
- **En France :** en **juillet 2026**, la **HAS** a jugé le service médical rendu de toutes les spécialités à base de nicorandil **insuffisant**, avec un avis défavorable au remboursement (la base médicaments affichait encore 65 % lors de la consultation). Les données dans l'IC se limitent à une cohorte japonaise rétrospective (Yoshihisa 2017, 334 patients, FEVG ~44 %, HR 0,51, confusion probable).`,
    },
    {
      headingFr: '« Budget tensionnel », angor réfractaire et limites des preuves',
      bodyMarkdownFr: `### Protéger la place des quatre piliers

Les dérivés nitrés, le nicorandil et l'amlodipine abaissent la pression artérielle et entrent en concurrence avec les quatre piliers du traitement de fond (ARNI/IEC, bêtabloquant, ARM, iSGLT2), seuls prouvés pour prolonger la vie. Les recommandations **ESC 2026** affirment explicitement que l'introduction ou l'augmentation des anti-angineux **ne doit entraîner aucune réduction du traitement de fond** de l'insuffisance cardiaque. L'ivabradine, la ranolazine et la trimétazidine modifient peu la pression artérielle (voir *Tension artérielle et insuffisance cardiaque*).

### Angor malgré des artères ouvertes

Un angor peut persister après la pose de stents ou un pontage même lorsque les artères traitées sont bien ouvertes. En dehors d'un nouveau rétrécissement, deux mécanismes fréquents sont la **dysfonction microvasculaire** (petits vaisseaux) et le **spasme coronaire** :

- Environ **4 artères stentées sur 10** présentent une dysfonction microvasculaire après angioplastie, associée à davantage d'événements cardiovasculaires (méta-analyse Li 2025 ; l'angor lui-même n'y était pas poolé).
- Les recommandations **ESC 2024** préconisent des **tests invasifs de fonction coronaire** lorsque l'angor persiste sans sténose obstructive ou reste réfractaire (**Classe I B**), puis d'adapter le traitement aux résultats (**Classe IIa A**). Dans l'essai **CorMicA**, cette stratégie a amélioré le score d'angor de **13,6 points** à 1 an, sans modifier les événements cliniques (les patients atteints d'insuffisance cardiaque n'étaient pas inclus).
- Le spasme coronaire est habituellement traité par inhibiteurs calciques, mais le **vérapamil et le diltiazem restent à éviter dans l'ICFER** ; l'amlodipine, la félodipine ou les dérivés nitrés constituent alors les options utilisables.
- Une resténose de stent, une occlusion de pontage ou une nouvelle sténose doit toujours être écartée en priorité (voir *Angor microvasculaire et INOCA* et *Progression coronaire et imagerie de suivi*).

### Quand les médicaments ne suffisent plus (angor réfractaire)

- **Revascularisation (stent ou pontage) :** recommandée lorsque l'angor persiste malgré un traitement médical optimisé de l'insuffisance cardiaque et anti-angineux (**ESC 2026 IC : Classe I C**, relevée depuis IIa C, quelle que soit la FEVG ; **ESC 2024 SCC : Classe I A**).
- **Réducteur du sinus coronaire :** petit implant en treillis rétrécissant la veine principale du cœur. Classé en **ESC 2024 Classe IIb B** (seule option non médicamenteuse recommandée pour l'angor invalidant sur maladie obstructive réfractaire, en centre expérimenté — levant l'incertitude antérieure entre niveau B et A). Dans l'essai contrôlé par procédure factice **ORBITA-COSMIC** (51 patients, FEVG médiane **62 %**), le **critère principal** (flux sanguin à l'IRM de stress, modifié avant levée d'aveugle) **n'a pas été amélioré** ; les épisodes quotidiens d'angor (critère secondaire) étaient moins fréquents (**OR 1,40**) et 2 dispositifs sur 25 ont migré. Une FEVG **< 25 %**, des sondes droites/DAI ou une indication de CRT étaient des critères d'exclusion : pour une ICFER ischémique avec dispositif, les données sont **extrapolées**. L'essai pivot **COSIRA-II** exige une FEVG ≥ 30 %, exclut NYHA III–IV, et son recrutement était suspendu en novembre 2026.
- **Autres approches :** la contrepulsion externe n'a qu'un grade IIb américain ; les essais de stimulation médullaire restent petits et hétérogènes.

### Ce qu'il faut retenir et limites des preuves

- **Aucun anti-angineux n'a été évalué pour le soulagement de l'angor chez des patients atteints d'ICFER sous quadrithérapie contemporaine.**
- Les vérifications d'interactions sont essentielles : ranolazine (digoxine, sotalol, simvastatine), nicorandil (aspirine, potassium), nitrés ou nicorandil (IPDE-5, riociguat).
- Plusieurs analyses d'essais (RAID, RIVER-PCI, ATPCI, PRAISE, BEAUTIFUL, NEAT-HFpEF, Zhang) reposent sur des résumés, et les statuts français de remboursement (Ranexa septembre 2025, nicorandil juillet 2026) peuvent évoluer.`,
    },
  ],
  relatedArticleSlugs: [
    'angor-microvasculaire-et-inoca',
    'progression-coronaire-et-imagerie-de-suivi',
    'medicaments-insuffisance-cardiaque',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'revascularisation-pontage-stents',
    'occlusion-coronaire-chronique-cto',
    'tension-arterielle-insuffisance-cardiaque',
    'medicaments-effets-secondaires-suivi',
    'vie-sexuelle-et-dysfonction-erectile-ic',
    'recommandations-comparees-esc-us-nice',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2024 (SCC), ESC 2026 (IC, section 9.2), ACC/AHA 2023 (CCD), NICE CG126 et HAS APALD ALD 13 (2021)',
      detail: 'Escalade anti-angineuse, priorité des 4 piliers, revascularisation I C / I A, contre-indication vérapamil/diltiazem et nitrés + IPDE-5 (III B).',
    },
    {
      label: 'RCP et avis français ANSM / HAS / BDPM : Natispray, Nitriderm TTS, Ranexa, Vastarel, Nicorandil (HAS juillet 2026), Procoralan, Verquvo',
      detail: 'Posologies, règles d’urgence (ANSM 2025, sante.fr, NHS, BHF, FFC), fenêtre libre 8–12 h, interactions et remboursement en France.',
    },
    {
      label: 'Analyses d’angor dans l’ICFER : CORONA (Badar 2014), PARADIGM-HF (thèse Badar 2019) et STICH (Jolicoeur 2015)',
      detail: 'Prévalence de l’angor, risques d’infarctus et d’hospitalisation, impact pronostique de l’angor sévère et soulagement après pontage.',
    },
    {
      label: 'Pharmacologie et essais : Daiber & Münzel (2015), Gogia (1995), Oliver (2009), Kloner (2003), Holt (2022), PRAISE/PRAISE-2, V-HeFT III',
      detail: 'Tolérance aux nitrés, délais 24 h (sildénafil) et 48 h (tadalafil), neutralité pronostique de l’amlodipine et de la félodipine.',
    },
    {
      label: 'Essais et méta-analyses de 2e/3e intention : RAID (2018), RIVER-PCI (2016), Nassiri (2024), ATPCI (2020), BEAUTIFUL (2009), ORBITA-COSMIC (2024)',
      detail: 'Données cliniques et limites de la ranolazine, de la trimétazidine, de l’ivabradine, du nicorandil (MHRA 2016) et du réducteur du sinus coronaire.',
    },
    {
      label: 'ESC 2024 SCC (sections suivi et ANOCA/INOCA), CorMicA (1 an) et Li et al. (2025)',
      detail: 'Tests de fonction coronaire (I B), traitement adapté (IIa A), réducteur du sinus coronaire (IIb B) et dysfonction microvasculaire après stent.',
    },
  ],
  disclaimerType: 'medical',
};
