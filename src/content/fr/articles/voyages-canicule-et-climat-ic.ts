import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'voyages-canicule-et-climat-ic',
  sourceWikiPath: 'wiki/concepts/travel-heat-and-climate-in-hf.md',
  titleFr: "Voyages, altitude, canicule et extrêmes climatiques dans l'IC",
  category: 'quotidien',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'voyages',
    'avion',
    'altitude',
    'sécurité-aéroport',
    'canicule',
    'ansm',
    'sauna',
    'bains-froids',
    'dai',
    'chaleur',
    'ozone',
    'pollution-air',
    'fumée-incendies',
  ],
  aliases: [
    'Prendre l’avion insuffisance cardiaque',
    'Altitude et cœur',
    'Canicule et médicaments',
    'Fortes chaleurs ANSM',
    'Sauna insuffisance cardiaque',
    'Bains glacés cœur',
    'Portique aéroport DAI',
  ],
  linkedModules: ['core', 'device'],
  plainSummaryFr:
    "Une insuffisance cardiaque stabilisée (NYHA I–II) n'oblige généralement pas à renoncer aux voyages, mais l'avion, la montagne, la canicule et les bains extrêmes sollicitent chacun différemment un cœur affaibli et ses traitements. En avion (cabine pressurisée jusqu'à 2 438 m d'altitude équivalente), la plupart des patients stables peuvent voyager en gardant tous leurs médicaments et une ordonnance en DCI en bagage cabine ; aux contrôles d'aéroport avec un DAI ou une CRT, les études cliniques sur les scanners millimétriques et les raquettes n'ont montré aucune interférence, mais gardez votre carte de porteur et évitez qu'une raquette soit maintenue sur le boîtier. Pour la montagne, les recommandations divergent entre la BHF (éviter > 2 000 m) et le consensus européen Parati 2018 (jusqu'à 3 500 m en NYHA I–II stable avec montée lente ; 2 500 m en cas d'angor). Pendant une canicule, l'ANSM (2025–2026) rappelle de ne jamais arrêter seul ses médicaments, d'éviter les AINS et de préparer un plan estival avec son équipe. Enfin, aucun essai randomisé n'a évalué le sauna finlandais dans l'IC, tandis que les plongeons en eau glacée déclenchent un « conflit autonome » exposant à des arythmies dangereuses.",
  sections: [
    {
      headingFr: 'Voyager en avion et passer les contrôles avec un DAI ou une CRT',
      bodyMarkdownFr: `Les cabines d'avions de ligne sont réglementairement pressurisées à une altitude équivalente maximale de **2 438 m (8 000 pieds)** (généralement entre 1 800 et 2 438 m), ce qui correspond environ à respirer un air contenant **15 % d'oxygène** au niveau de la mer (BTS 2022).

- **Qui peut généralement prendre l'avion :** **NICE NG106 (1.9.12)**, la **British Cardiovascular Society (BCS 2010)** et **HeartFailureMatters** s'accordent à dire que le voyage aérien est possible pour **la majorité des personnes ayant une insuffisance cardiaque stable et contrôlée (NYHA I–II)**, en l'absence de décompensation récente, de syndrome coronaire aigu récent ou de chirurgie cardiaque récente.
- **Qui nécessite un avis préalable ou un report :**
  - **NYHA III** (essoufflement pour des efforts minimes), pathologie pulmonaire associée ou hypertension pulmonaire : consultez votre cardiologue avant de réserver ; un apport d'oxygène en vol organisé à l'avance avec la compagnie peut être discuté.
  - **NYHA IV** (symptômes au repos), **décompensation ou hospitalisation récente**, ou **infarctus, stent ou pontage très récent** : différer le vol jusqu'à stabilisation et accord de l'équipe.
- **Préparatifs pratiques indispensables :**
  - **Médicaments en bagage cabine** (jamais uniquement en soute, exposée aux pertes et aux températures extrêmes), conservés dans leurs **boîtes d'origine avec notices**, accompagnés d'une **ordonnance à jour rédigée en DCI (dénomination commune internationale)** et d'un bref résumé médical (idéalement en anglais pour l'étranger).
  - **Prévenir la phlébite et le gonflement des chevilles :** marchez dans l'allée dès que possible, faites des mouvements de chevilles et de mollets assis, hydratez-vous à l'eau, évitez l'alcool à bord (déshydratant et arythmogène), et demandez à votre médecin si des **bas de contention** sont adaptés pour les vols de plus de 4 heures.
  - **Décalage horaire et diurétiques :** convenez à l'avance avec votre médecin de l'adaptation des horaires de prise et du moment de prise du diurétique de l'anse le jour du vol.
  - **Assurance voyage et CEAM :** déclarez systématiquement votre cardiomyopathie ischémique, votre insuffisance cardiaque et tout DAI/CRT à votre assureur avant le départ. En Europe (UE/EEE/Suisse), emportez votre **Carte Européenne d'Assurance Maladie (CEAM)** (commandée sur ameli.fr), qui couvre les soins publics mais **jamais le rapatriement sanitaire**.

### Contrôles de sécurité aéroportuaires avec un DAI ou une CRT

Deux études cliniques dédiées apportent des données rassurantes sur les équipements modernes :

- **Raquettes détectrices manuelles (Jilek et al. 2011, n = 388 : 209 stimulateurs, 179 DAI) :** 30 secondes d'exposition continue (6,3 microteslas) directement au-dessus du boîtier n'ont provoqué **aucun** épisode d'inhibition de stimulation, de surdétection ni de reprogrammation.
- **Scanners corporels à ondes millimétriques (Blazek / Lennerz et al. 2021, n = 73 DAI sous-cutanés et stimulateurs sans sonde) :** **zéro** interférence électromagnétique (EMI), même à courte distance, sans altération des vecteurs de détection.

Les consignes pratiques restent néanmoins prudentes compte tenu de la diversité des matériels dans le monde : **portez votre carte d'identification de prothèse**, informez l'agent avant le contrôle, **traversez le portique d'un pas normal sans vous arrêter ni vous appuyer sur les montants**, et demandez à ce qu'une raquette magnétique ne soit **pas maintenue sur le boîtier** (ou demandez une palpation manuelle).`,
    },
    {
      headingFr: 'Séjours en altitude et vacances à la montagne',
      bodyMarkdownFr: `Au-delà d'environ 2 000 à 2 500 m, la baisse de pression barométrique diminue l'oxygénation sanguine (**hypoxie**), ce qui active le système sympathique (hausse de la fréquence cardiaque et de la tension), provoque une **vasoconstriction pulmonaire hypoxique** (hausse de pression dans les artères pulmonaires) et favorise la **respiration périodique nocturne** (apnées centrales).

Le **consensus européen conjoint de 2018** (ESC, ESH, ISMM — **Parati et al.**, texte intégral vérifié) formule des repères gradés couvrant à la fois l'insuffisance cardiaque et la maladie coronaire :

| Situation clinique (Parati 2018, Tableaux 1 & 2) | Plafond et effort conseillés | Classe / Niveau | Précautions clés |
|---|---|---|---|
| **IC stable NYHA I–II** | Jusqu'à **3 500 m** (effort léger à modéré) | **IIa, C** | Montée progressive (**≤ 300–500 m/jour au-dessus de 2 500 m**, **I, C**) ; éviter les téléphériques suivis d'un effort brutal |
| **IC stable NYHA III** | Jusqu'à **3 000 m** (effort léger uniquement) | **IIa, C** | Évaluation préalable des comorbidités (hypertension pulmonaire, anémie, apnée du sommeil : **I, C**) |
| **IC instable ou NYHA IV** | **Éviter la haute altitude (> 2 500 m)** | **I, C** | Attendre la stabilisation et l'accord cardiologique |
| **Choix du bêtabloquant en altitude** | Préférer un **bêta-1-sélectif** (ex. nébivolol, bisoprolol) au carvédilol si la tolérance en altitude pose problème | **I, B** | Essai HIGHCARE : le carvédilol réduisait davantage la ventilation à l'effort et la saturation que le nébivolol. *Ne changez jamais votre bêtabloquant sans votre cardiologue.* |
| **SCA récent ou pontage (CABG)** | Attendre **au moins 6 mois** avant la haute altitude (> 2 500 m) | **I, C** | Après angioplastie/stent non compliqué : attendre **6 à 12 mois** (**IIa, C**) |
| **Angor stable (CCS II–III)** | Maximum **2 500 m**, effort léger uniquement | **IIa, C** | **Angor CCS IV ou instable : éviter (> 2 500 m)** (**I, C**) |
| **Hypertension pulmonaire** | Envisager une oxygénothérapie au-dessus de **1 500–2 000 m** | Consensus | L'hypoxie majore directement la pression pulmonaire et la charge du cœur droit |

- **Divergence à connaître :** la brochure patient britannique **BHF** adopte une règle simple plus prudente (**« éviter les altitudes supérieures à 2 000 m »**), alors que **Parati 2018** autorise jusqu'à 3 500 m en NYHA I–II stable (et 2 500 m en cas d'angor CCS II–III) avec acclimatation lente. En cas de cardiomyopathie ischémique, les délais coronariens et les limites d'insuffisance cardiaque s'appliquent conjointement.
- **Prudence avec l'acétazolamide (mal aigu des montagnes) :** ce diurétique inhibiteur de l'anhydrase carbonique peut, en association aux diurétiques de l'anse ou thiazidiques, **aggraver la déshydratation et faire chuter potassium ou sodium** : ne le prenez jamais sans accord de votre cardiologue.`,
    },
    {
      headingFr: 'Canicule et extrêmes thermiques : recommandations ANSM (2025–2026)',
      bodyMarkdownFr: `La déclaration scientifique **AHA 2026** sur les températures non optimales confirme que les épisodes aigus de **chaleur extrême comme de froid extrême** augmentent les décompensations d'insuffisance cardiaque, les infarctus, les AVC, les arythmies et la mort subite.

Par forte chaleur, la dilatation des vaisseaux cutanés et la transpiration intense s'additionnent à la quadrithérapie et aux diurétiques, exposant à l'**hypotension orthostatique**, la **déshydratation**, l'**insuffisance rénale aiguë** et les troubles ioniques. Le dossier **ANSM « Fortes chaleurs / Canicule »** (mis à jour mai–juin 2026, texte intégral lu) identifie précisément les médicaments à surveiller :

| Classe signalée par l'ANSM (2026) | Mécanisme de risque en canicule | Conduite pratique ANSM / France (au 25 novembre 2026) |
|---|---|---|
| **Diurétiques de l'anse et thiazidiques** (furosémide — *Lasilix*, bumétanide, hydrochlorothiazide) | Accentuent la perte d'eau et d'électrolytes : déshydratation, hypotension, atteinte rénale | **Ne jamais arrêter seul.** Pesée quotidienne (une **baisse brutale de poids** peut alerter sur une déshydratation) ; demandez un plan canicule avant l'été |
| **iSGLT2 (*gliflozines* :** dapagliflozine — *Forxiga*, empagliflozine — *Jardiance*) | Explicitement listés par l'ANSM : la diurèse osmotique majore la déplétion volémique et le risque rénal | Discutez à l'avance d'un plan jours de maladie / fortes chaleurs avec votre équipe |
| **IEC, ARA2, ARNI (sacubitril/valsartan — *Entresto*)** | Altération de l'autorégulation rénale en cas de déshydratation : baisse aiguë du DFGe, hyperkaliémie, hypotension | Poursuivre sauf avis médical contraire ; surveiller les vertiges et contrôler le bilan rénal en cas de canicule prolongée ou de maladie aiguë |
| **Bêtabloquants et anti-angineux** | Les bêtabloquants limitent l'adaptation cardiaque et cutanée à la chaleur ; nitrés et vasodilatateurs accentuent l'hypotension | Rester au frais, se lever lentement, éviter tout effort aux heures chaudes |
| **Digoxine et antiarythmiques** | La déshydratation ou une baisse rénale peuvent élever la concentration sanguine jusqu'au surdosage ; la perte de potassium favorise les arythmies | Signaler rapidement nausées, troubles visuels, faiblesse ou palpitations |
| **Statines et metformine** | La déshydratation majore le risque musculaire (statines) et d'acidose lactique en cas d'atteinte rénale aiguë (metformine) | Maintenir une hydratation adaptée aux consignes médicales ; signaler douleurs musculaires intenses ou vomissements |
| **AINS (ibuprofène, kétoprofène) et aspirine > 500 mg/j** | **Directement néphrotoxiques** en cas de déshydratation (déjà Classe III dans l'ICFER) | **Aucune automédication par AINS** ; l'ANSM déconseille également le **paracétamol pour traiter un coup de chaleur** (inefficace sur l'hyperthermie et risque hépatique) |
| **Patchs transdermiques** (nitrés, nicotine) | Vasodilatation et sueur peuvent accélérer la libération du médicament ou décoller le patch | Vérifier l'adhésion, surveiller céphalées/vertiges et ne jamais exposer un patch à une source de chaleur |

### Règles pratiques ANSM en France

- **Ne jamais interrompre ni modifier seul vos médicaments chroniques** lors d'une canicule (risque de décompensation rebond).
- **Conservation des médicaments :** les médicaments à conserver en dessous de 25 °C ou 30 °C supportent quelques jours de canicule s'ils restent dans la **pièce la plus fraîche**, à l'abri du soleil. En voiture, utilisez une **pochette isotherme non réfrigérée** (ne laissez jamais vos boîtes dans le coffre ou la boîte à gants). Les produits conservés entre 2 et 8 °C (comme l'insuline) voyagent en pochette réfrigérée sans congélation.
- **Urgence absolue — coup de chaleur :** fièvre supérieure à **40 °C** associée à une confusion, somnolence, délire, convulsions ou perte de connaissance : appelez immédiatement le **15 (SAMU)**, le **112** ou le **114** (SMS).
- **Habitudes quotidiennes :** pesez-vous chaque matin (surveillez autant une prise rapide qu'une **perte rapide** de poids), rafraîchissez votre logement la nuit, évitez de sortir aux heures les plus chaudes et demandez avant juin à votre cardiologue comment adapter vos apports en boissons en cas de canicule.

### Jours combinant chaleur et pollution (ozone et fumées d'incendies)

- **Canicule et pics d'ozone vont souvent ensemble :** l'ensoleillement et les fortes chaleurs favorisent la formation d'ozone, si bien que les jours de canicule coïncident fréquemment avec des épisodes de pollution (ministère de la Transition écologique, mis à jour le 31 juillet 2026). L'ozone culmine **en milieu et fin d'après-midi**, aux mêmes heures que la chaleur maximale.
- **Conseils officiels français en cas de maladie cardiaque ou d'IC (santé.fr, 9 août 2024) :** évitez de sortir l'après-midi et évitez tout effort extérieur intense ; une activité douce en intérieur reste possible ; continuez d'aérer votre logement aux heures les moins polluées (et les plus fraîches) ; demandez à votre médecin si votre traitement nécessite un ajustement.
- **Vérifier avant d'organiser votre journée :** consultez l'**indice ATMO** de votre commune et les prévisions **Prév'Air** (jusqu'à 5 jours d'avance), en complément de la vigilance canicule de Météo-France.
- **Fumées d'incendies :** en Californie, une fumée dense a augmenté les passages aux urgences pour insuffisance cardiaque jusqu'à **+22 %** chez les 65 ans et plus, avec un pic **3 jours après** l'exposition : poursuivez donc la pesée quotidienne plusieurs jours après un épisode de fumée (voir *Pollution de l'air et bruit*).`,
    },
    {
      headingFr: 'Sauna, hammam et bains glacés (immersion en eau froide)',
      bodyMarkdownFr: `Les données scientifiques distinguent nettement la **chaleur sèche douce** des **saunas très chauds** et des **plongeons en eau glacée** :

- **Thérapie infrarouge sèche douce à 60 °C (thérapie Waon, Japon) :**
  - La revue systématique **Kallstrom et al. (2018)** a recensé **1 444** publications sur les saunas finlandais et infrarouges dans l'insuffisance cardiaque : **9 études** ont été retenues, dont **ZÉRO essai de sauna finlandais**. Seule la thérapie **Waon** médicalement supervisée (chaleur sèche infrarouge à **60 °C** pendant 15 minutes suivies de 30 minutes sous couverture chaude, 5 fois par semaine sur 2 à 4 semaines) a été testée, montrant des baisses à court terme du BNP et du rapport cardiothoracique sans chute tensionnelle, mais avec une certitude GRADE **modérée à insuffisante**.
  - Dans le plus grand essai randomisé multicentrique (**WAON-CHF**, Tei 2016 / Ichiki 2017, **149** patients hospitalisés en IC avancée sur 10 jours), **le critère principal (variation du BNP entre les groupes) n'a pas atteint la significativité statistique**, malgré des gains secondaires sur la classe NYHA et la marche de 6 minutes, sans événement grave.
- **Sauna finlandais traditionnel (80–100 °C) et hammam humide :**
  - **Aucun essai randomisé** n'établit leur sécurité ni leur bénéfice dans l'ICFER. La chaleur intense et l'humidité provoquent une vasodilatation périphérique majeure, une sudation abondante, une tachycardie et une chute du retour veineux, exposant à des **malaises, hypotensions, crises d'angor ou décompensations** (risque accru en cas de rétrécissement aortique, tension basse ou prise d'alcool).
  - Si vous êtes stable en NYHA I–II et envisagez une chaleur modérée, parlez-en d'abord à votre cardiologue, évitez les températures élevées, limitez la durée, réhydratez-vous, **n'associez jamais chaleur et alcool** et **ne passez jamais du sauna à un bain glacé**.
- **Bains glacés / immersion en eau froide (PRUDENCE MAXIMALE — DÉCONSEILLÉS) :**
  - Les travaux physiologiques de **Shattock & Tipton (2012)**, **Tipton et al. (2017)** et **Winter et al. (2018)** décrivent le phénomène de **« conflit autonome »** : l'immersion brutale en eau froide déclenche simultanément le **choc au froid sympathique** (décharge d'adrénaline, vasoconstriction intense, pic brutal de tension et de postcharge, tachycardie) et, surtout en cas d'immersion du visage ou d'apnée, le **réflexe d'immersion parasympathique** (bradycardie brutale).
  - Même chez des volontaires sains, ce conflit autonome génère de nombreuses extrasystoles et arythmies. Sur un **cœur ischémique cicatriciel à FEVG réduite (~35 %)**, cette double stimulation peut déclencher **tachycardie ou fibrillation ventriculaire, angor aigu, choc de DAI ou mort subite**. Les bains glacés et immersions froides post-sauna sont donc **déconseillés** dans l'ICFER ischémique sans feu vert explicite d'un spécialiste.

### Limites des preuves

- Hormis l'essai HIGHCARE sur le choix du bêtabloquant en altitude (niveau B), la quasi-totalité des recommandations sur l'avion et la montagne (Parati 2018, BCS 2010) reposent sur des **consensus d'experts (niveau C)** et de petites études physiologiques.
- Aucun essai randomisé ne fixe de règle universelle d'ajustement des diurétiques pendant une canicule, ni n'évalue le sauna finlandais dans l'ICFER sous quadrithérapie moderne : un plan personnalisé préparé avant l'été ou avant un voyage avec votre cardiologue reste essentiel.`,
    },
  ],
  relatedArticleSlugs: [
    'medicaments-effets-secondaires-suivi',
    'escalade-et-resistance-aux-diuretiques',
    'tension-arterielle-insuffisance-cardiaque',
    'dispositifs-cardiaques-dai-crt',
    'sel-et-liquides-insuffisance-cardiaque',
    'ventricule-droit-et-hypertension-pulmonaire',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'vivre-avec-insuffisance-cardiaque',
    'vivre-avec-insuffisance-cardiaque-en-france',
    'questions-equipe-cardiologie',
    'recommandations-comparees-esc-us-nice',
    'pollution-de-lair-et-bruit',
  ],
  sources: [
    {
      label: 'Consensus européen haute altitude Parati et al. (ESC / ESH / ISMM 2018, texte intégral) & BHF',
      detail: 'Plafonds d’altitude en IC et maladie coronaire (Tableaux 1 et 2), vitesse d’ascension, bêtabloquant bêta-1-sélectif (HIGHCARE), précaution acétazolamide et divergence avec le repère BHF (> 2 000 m).',
    },
    {
      label: 'BTS Clinical Statement (2022, texte intégral), BCS (2010), NICE NG106 (1.9.12), Jilek (2011) & Blazek / Lennerz (2021)',
      detail: 'Pressurisation cabine ≤ 2 438 m, aptitude au vol selon la classe NYHA et études cliniques sur les raquettes et scanners millimétriques avec DAI/CRT (0 EMI).',
    },
    {
      label: 'ANSM — Dossier Fortes chaleurs / Canicule (mises à jour mai–juin 2026, texte intégral) & Déclaration AHA (2026)',
      detail: 'Liste des médicaments à risque en canicule (diurétiques, iSGLT2, SRAA/ARNI, bêtabloquants, digoxine, patchs), conservation, interdiction des AINS/paracétamol en coup de chaleur et appel au 15.',
    },
    {
      label: 'Kallstrom (2018), WAON-CHF (Tei 2016 / Ichiki 2017), Shattock & Tipton (2012), Tipton (2017) & Winter (2018)',
      detail: 'Absence d’essai randomisé de sauna finlandais en IC, résultat neutre sur le BNP dans WAON-CHF et mécanisme arythmogène du « conflit autonome » en eau froide.',
    },
    {
      label: 'Indice ATMO / Prév’Air, santé.fr (août 2024), ministère de la Transition écologique (2026) & Wettstein (2018)',
      detail: 'Épisodes conjoints canicule-ozone, conseils officiels pour les personnes cardiaques vulnérables et hausse des passages aux urgences IC (+22 %) après fumées d’incendies.',
    },
  ],
  disclaimerType: 'medical',
};
