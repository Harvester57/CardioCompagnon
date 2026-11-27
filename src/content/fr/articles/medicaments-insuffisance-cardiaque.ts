import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'medicaments-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/topics/heart-failure-medicines.md',
  titleFr: "Les médicaments de l'insuffisance cardiaque (4 piliers)",
  category: 'traitements',
  readingTier: 'essential',
  asOf: '2026-11-26',
  confidence: 'high',
  volatility: 'warm',
  tags: [
    'traitement-de-fond',
    'quatre-piliers',
    'arni',
    'iec',
    'bêtabloquant',
    'arm',
    'isglt2',
    'diurétiques',
    'titration',
  ],
  aliases: [
    'GDMT',
    'Traitement de fond',
    'Quatre piliers',
    'Quadrithérapie',
    'Médicaments ICFER',
    'Traitement médical optimal',
    'IEC',
    'ARNI',
    'Entresto',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Lorsque votre cœur pompe moins efficacement, quatre familles de médicaments agissent ensemble pour le protéger et limiter les hospitalisations. Elles sont introduites tôt, puis augmentées par paliers selon votre tolérance. Des diurétiques peuvent s'y ajouter pour évacuer l'excès d'eau et soulager l'essoufflement. Ces traitements se poursuivent au long cours, même lorsque vous vous sentez mieux.",
  keyTakeawaysFr: [
    "Quatre familles de fond protègent votre cœur de façon complémentaire ; les diurétiques soulagent surtout l'essoufflement et les œdèmes.",
    "Les doses sont augmentées progressivement (titration) jusqu'à la dose cible ou la dose la mieux tolérée par votre organisme.",
    "Ne modifiez et n'arrêtez jamais un médicament vous-même, même si vos symptômes disparaissent ou si votre échographie s'améliore.",
    "En cas d'angine de poitrine associée, certains anti-angineux comme le vérapamil ou le diltiazem sont à éviter : faites vérifier toute nouvelle ordonnance.",
  ],
  sections: [
    {
      headingFr: 'Les quatre piliers du traitement de fond',
      depth: 'patient',
      bodyMarkdownFr: `Dans l'insuffisance cardiaque à FEVG réduite (ICFER), quatre grandes familles de médicaments forment le **traitement de fond**. Chacune protège le muscle cardiaque par un mécanisme différent, et leurs effets s'additionnent pour vous aider à vivre plus longtemps et à éviter les hospitalisations.

| Famille de médicaments | Exemples en France (DCI et noms usuels) | Rôle principal |
|---|---|---|
| **IEC ou ARNI** | IEC : ramipril (*Triatec*), périndopril (*Coversyl*), énalapril (*Renitec*), lisinopril (*Zestril*) ; ARNI : sacubitril/valsartan (*Entresto*). En cas d'intolérance aux deux : ARA2 comme le candésartan (*Atacand*) ou le valsartan (*Tareg*) | Relâche les vaisseaux sanguins et réduit le travail du cœur |
| **Bêtabloquant** | bisoprolol (*Cardensiel*), carvédilol (*Kredex*), nébivolol (*Temerit*), métoprolol succinate (*Selozok*) | Ralentit le cœur et le protège contre l'excès d'adrénaline ; soulage aussi l'angine de poitrine |
| **ARM** (antagoniste des récepteurs minéralocorticoïdes) | spironolactone (*Aldactone*), éplérénone (*Inspra*) | Freine une hormone qui favorise la fibrose cardiaque et la rétention d'eau et de sel |
| **iSGLT2** (gliflozine) | dapagliflozine (*Forxiga*), empagliflozine (*Jardiance*) | Protège le cœur et les reins, que vous soyez diabétique ou non |

Le mode d'action détaillé, les effets secondaires et les bilans sanguins de suivi de chaque famille sont expliqués dans *Médicaments : mode d'action, effets secondaires et bilans sanguins*. Chaque pilier dispose désormais aussi de sa propre fiche approfondie (essais pivots, doses cibles et suivi) : *IEC, ARA2 et ARNI (sacubitril/valsartan)*, *Bêtabloquants dans l'ICFER ischémique*, *ARM stéroïdiens : spironolactone et éplérénone* et *Inhibiteurs du SGLT2 dans l'ICFER ischémique*.

### Pourquoi les doses augmentent par paliers (titration)

Votre cardiologue ou votre médecin traitant débute généralement ces médicaments à faible dose, puis les augmente par paliers (souvent toutes les 1 à 2 semaines selon votre tension, votre pouls et vos prises de sang) jusqu'à la dose cible ou la dose maximale que vous tolérez bien. Il n'est pas nécessaire d'attendre d'avoir atteint la dose maximale d'un médicament avant d'introduire les autres. Le plein bénéfice peut prendre plusieurs semaines.

### Poursuivre le traitement et revoir régulièrement votre ordonnance

- **Ne stoppez jamais un médicament vous-même** en raison d'un effet secondaire : parlez-en d'abord à votre cardiologue, votre médecin traitant, votre infirmière insuffisance cardiaque (ou IPA) ou votre pharmacien.
- **Maintenez vos traitements au long cours** même si vos symptômes disparaissent ou si votre FEVG remonte à l'échographie.
- **Faites le point sur toute votre ordonnance :** prendre de nombreux autres médicaments (y compris sans ordonnance ou compléments) peut compliquer l'équilibre du traitement cardiaque. Une révision régulière avec votre équipe aide à préserver la place de vos quatre piliers.`,
    },
    {
      headingFr: 'Les diurétiques : soulager la rétention d’eau',
      depth: 'patient',
      bodyMarkdownFr: `Les **diurétiques de l'anse** — principalement le furosémide (*Lasilix*) et le bumétanide (*Burinex*) — aident les reins à éliminer l'excès d'eau et de sel. Ils soulagent l'essoufflement et les gonflements (œdèmes) des chevilles ou des jambes.

- **Un traitement de confort qui complète les quatre piliers :** contrairement aux quatre familles de fond, les diurétiques ne remplacent pas le traitement protecteur du cœur. Leur dose a vocation à évoluer selon votre état hydrique.
- **Un équilibre à ajuster avec votre équipe :** une dose insuffisante laisse s'installer la congestion, tandis qu'une dose trop forte une fois l'excès d'eau évacué peut provoquer une baisse de tension, des vertiges, une fatigue rénale ou une baisse du sodium et du potassium. Les traitements récents comme le sacubitril/valsartan (*Entresto*) ou les iSGLT2 permettent parfois à votre médecin de réduire la dose de diurétique.
- **La pesée quotidienne et le plan écrit :** vous peser chaque matin aide à repérer tôt une rétention d'eau (voir *Vivre au quotidien avec une insuffisance cardiaque*). Si votre cardiologue envisage de diminuer votre diurétique, demandez un **plan écrit personnalisé** précisant votre fourchette de poids cible, les signes de retour d'eau ou de déshydratation, les bilans sanguins prévus et la conduite à tenir. Toute modification de dose relève uniquement de votre équipe médicale.

Lorsque la rétention d'eau résiste ou revient malgré le traitement, d'autres ajustements médicaux existent (voir *Escalade et résistance aux diurétiques dans l’insuffisance cardiaque*).`,
    },
    {
      headingFr: 'Traitements additionnels et maladie coronaire associée',
      depth: 'patient',
      bodyMarkdownFr: `### Options complémentaires selon votre situation

Si vos symptômes persistent ou selon votre profil malgré un traitement de fond déjà optimisé, votre cardiologue peut discuter d'autres médicaments :

- **Ivabradine (*Procoralan*) :** peut ralentir un rythme cardiaque régulier qui reste trop rapide au repos malgré un bêtabloquant à la dose maximale tolérée.
- **Digoxine (*Digoxine Nativelle*) ou digitoxine :** peut être envisagée en complément sous surveillance attentive de la tolérance et des taux sanguins.
- **Vériciguat (*Verquvo*) :** peut être proposé après une aggravation récente de l'insuffisance cardiaque.
- **Fer intraveineux (carboxymaltose ferrique *Ferinject* ou dérisomaltose ferrique *Monofer*) :** en cas de carence en fer associée à une ICFER symptomatique, le fer par perfusion améliore les symptômes et la qualité de vie et réduit les hospitalisations. Les comprimés de fer par la bouche ne sont pas efficaces dans ce contexte (voir *Carence en fer et fer intraveineux*).
- **Finérénone (*Kerendia*) :** cet ARM plus récent ne remplace pas la spironolactone ou l'éplérénone lorsque la FEVG est réduite autour de 35 % (voir *Finérénone, nouveaux ARM et chélateurs de potassium*).
- **Association hydralazine / dinitrate d'isosorbide :** option envisagée dans certaines situations particulières ou en cas d'intolérance aux IEC, ARNI et ARA2.

Pour approfondir ces traitements, voir *Médicaments additionnels : ivabradine, digoxine/digitoxine et vériciguat* et *Au-delà des 4 piliers : traitements additionnels et récents*.

### Maladie des artères coronaires et angine de poitrine

Dans la cardiomyopathie ischémique, la maladie coronaire est traitée en parallèle :

- **Angine de poitrine (angor) :** le bêtabloquant reste le traitement de première intention. D'autres anti-angineux peuvent s'ajouter sur avis cardiologique (ivabradine, dérivé nitré longue durée souvent en patch en France, ranolazine, amlodipine ou félodipine, nicorandil ou trimétazidine), avec la trinitrine sublinguale (*Natispray*) pour les crises. **Attention :** les dérivés nitrés ne doivent jamais être associés aux médicaments contre les troubles de l'érection de type sildénafil (IPDE-5).
- **Médicaments à éviter :** le **vérapamil (*Isoptine*)** et le **diltiazem (*Tildiem*)** (inhibiteurs calciques bradycardisants), ainsi que les dihydropyridines à action courte, sont à éviter dans l'ICFER car ils affaiblissent la contraction cardiaque.
- **Prévention artérielle :** selon votre situation, une statine, un antiagrégant plaquettaire (aspirine ou clopidogrel) ou un anticoagulant peuvent être associés (voir *Cholestérol LDL, aspirine et prévention secondaire coronaire* et *Thrombus du ventricule gauche et anticoagulants*).

### Deux situations particulières

- **Cœur affaibli sans avoir jamais eu de symptômes (stade B) :** les preuves concernent surtout un IEC et un bêtabloquant, plus l'éplérénone après un infarctus (voir *Dysfonction ventriculaire asymptomatique (stade B)*).
- **Tension artérielle :** les quatre piliers sont prescrits pour protéger votre cœur et non uniquement pour faire baisser la tension. Certains antihypertenseurs courants sont d'ailleurs à éviter dans l'ICFER (voir *Tension artérielle et insuffisance cardiaque*).`,
    },
    {
      headingFr: 'Preuves cliniques : bénéfice modélisé, titration rapide et registres',
      depth: 'evidence',
      bodyMarkdownFr: `### Recommandations comparées (ESC 2026, ACC/AHA 2022, NICE NG106)

- **ESC 2026 :** les quatre classes du traitement de fond bénéficient d'une recommandation **Classe I (A)** dans l'ICFER (passage d'un IEC ou ARA2 à l'ARNI : **Classe I (B1)** ; ARA2 uniquement en cas d'intolérance aux IEC et à l'ARNI ; ARM et iSGLT2 : **Classe I (A)** quelle que soit la FEVG). Titration préconisée **au moins toutes les 1 à 2 semaines** (**Classe I**) et maintien à la dose maximale tolérée même si les symptômes disparaissent ou si la FEVG s'améliore (**Classe I**).
- **ACC/AHA/HFSA 2022 :** place l'ARNI en première intention devant les IEC.
- **NICE NG106 (mise à jour 2025) :** propose d'introduire ensemble IEC, bêtabloquant, ARM et iSGLT2 sans ordre imposé ni obligation d'atteindre la dose cible d'une classe avant d'introduire la suivante, puis d'envisager le remplacement de l'IEC par un ARNI si des symptômes persistent aux doses maximales tolérées. Mentionne aussi l'ivabradine, hydralazine + dérivé nitré (intolérance IEC/ARNI/ARA2) et la digoxine sur avis spécialisé, et ajoute les inhibiteurs calciques dihydropyridiniques à action courte aux traitements à éviter.

### Synthèse des essais pivots par pilier et limite commune

- **IEC, ARA2 et ARNI :** les IEC ont réduit la mortalité dans **SOLVD-Treatment** et, après infarctus avec dysfonction VG, dans **SAVE**, **AIRE** et **TRACE**. Dans **PARADIGM-HF** (60 % d'origine ischémique), le sacubitril/valsartan a fait mieux que l'énalapril (décès CV ou hospitalisation IC **HR 0,80**), sans différence nette selon la cause ; après un infarctus sans IC préalable (**PARADISE-MI**), il n'a pas surpassé le ramipril. Un délai minimal de **36 heures** après la dernière prise d'IEC est indispensable avant de débuter un ARNI (risque d'angiœdème).
- **Bêtabloquants :** **MERIT-HF**, **CIBIS-II** et **COPERNICUS** (majoritairement ischémiques) ont réduit les décès d'environ un tiers ; seuls le bisoprolol, le carvédilol et le métoprolol succinate disposent de cette preuve de mortalité, le nébivolol (**SENIORS**) ayant réduit un critère combiné. En fibrillation atriale, les données poolées ne montrent pas de bénéfice net sur la survie. Les essais récents post-infarctus à FEVG préservée (**REDUCE-AMI**, **REBOOT**) ne s'appliquent pas autour de 35 % de FEVG.
- **ARM stéroïdiens :** **RALES**, **EMPHASIS-HF** et, après infarctus, **EPHESUS** (100 % ischémique) ont réduit les décès ou hospitalisations IC ; le suivi du potassium et des reins est central, et la spironolactone peut provoquer une gynécomastie.
- **iSGLT2 :** **DAPA-HF** et **EMPEROR-Reduced** (environ moitié d'ischémiques) ont réduit d'environ un quart les décès CV ou événements IC, avec ou sans diabète, à dose fixe sans titration. Les essais post-infarctus sans IC établie (**EMPACT-MI**, **DAPA-MI**) ont été neutres sur les critères cliniques durs.
- **Limite commune aux quatre piliers :** chaque essai pivot a été mené sur le traitement de fond de son époque ; aucun essai n'a testé les bêtabloquants, les ARM ou les IEC en plus d'un ARNI et d'un iSGLT2. Les essais d'IC chronique mêlaient les causes (environ la moitié aux deux tiers d'ischémiques), tandis que les essais post-infarctus (**SAVE**, **AIRE**, **TRACE**, **CAPRICORN**, **EPHESUS**) incluaient des patients peu après un infarctus et non une cardiomyopathie ischémique ancienne. Lorsque le sous-groupe ischémique était publié (**PARADIGM-HF**, **EMPHASIS-HF**, **DAPA-HF**, **EMPEROR-Reduced**), le critère principal allait dans le même sens, mais pour les iSGLT2 les estimations sur les décès seuls dans le sous-groupe ischémique restaient proches de 1, et aucun chiffre de sous-groupe ischémique n'a été retrouvé pour les essais bêtabloquants ni pour **RALES**.

### Ampleur du bénéfice modélisée (Vaduganathan et al., *The Lancet* 2020)

Aucun essai clinique n'a randomisé directement la quadrithérapie complète face à l'ancienne bithérapie. Cette modélisation croisée combine **EMPHASIS-HF**, **PARADIGM-HF** et **DAPA-HF** (ARNI + bêtabloquant + ARM + iSGLT2 vs IEC/ARA2 + bêtabloquant) :

- **Décès cardiovasculaire ou première hospitalisation pour IC :** **HR 0,38** (réduction relative d'environ **62 %**). Séparément : décès CV **HR 0,50**, hospitalisation pour IC **HR 0,32**, mortalité toutes causes **HR 0,53**.
- **Effet absolu sur 3 ans :** NNT de **4 à 6** pour éviter un décès CV ou une hospitalisation pour IC, et de **8 à 16** pour éviter un décès.
- **Années de vie supplémentaires projetées :**

| Âge | Années de vie supplémentaires projetées | Années supplémentaires sans décès CV ni hospitalisation IC |
|---|---|---|
| 55 ans | environ **6,3 ans** (17,7 contre 11,4 ans) | environ **8,3 ans** |
| 65 ans | environ **4,4 ans** | environ **6,3 ans** |
| 80 ans | environ **1,4 an** | environ **2,7 ans** |

*Limites :* projections modélisées supposant un effet multiplicatif durable et une observance parfaite, issues d'essais d'ICFER toutes causes (non limités à l'étiologie ischémique) et représentant des moyennes de population.

### Titration rapide après hospitalisation : essai STRONG-HF (*The Lancet*, 2022)

- **Population :** **1 078 patients** après hospitalisation pour IC aiguë dans 87 hôpitaux de 14 pays (**65 %** en Russie, **9 %** en Europe) ; FEVG moyenne **36 %**, **68 %** avec FEVG ≤ 40 %, **48 %** d'origine ischémique (pas d'analyse publiée par étiologie).
- **Stratégie :** trois classes (bêtabloquant, IEC/ARA2/ARNI, ARM ; **iSGLT2 hors protocole**), au moins demi-dose avant sortie, objectif doses complètes en **2 semaines**, bilans et visites aux semaines 1, 2, 3 et 6 (soins usuels revus à J90).
- **Règles de pause du protocole clinicien :** pas de hausse d'IEC/ARA2/ARNI ou ARM si PAS **< 95 mmHg**, potassium **> 5,0 mmol/L** ou DFGe **< 30 mL/min/1,73 m²** ; pas de hausse de bêtabloquant si pouls **< 55 bpm** ou PAS **< 95 mmHg** ; si hausse du NT-proBNP **> 10 %**, envisager de suspendre la montée du bêtabloquant et d'augmenter le diurétique.
- **Résultats :** à J90, doses cibles atteintes bien plus souvent dans le bras intensif (bloqueur SRAA **55 % vs 2 %**, bêtabloquant **49 % vs 4 %**, ARM **84 % vs 46 %**). À 6 mois, décès ou réhospitalisations IC réduits de **23,3 % à 15,2 %** (**RR 0,66**), portés par les réhospitalisations (**9,5 % vs 17,1 %**) ; mortalité globale non significative (**8,5 % vs 10,0 %**, p = 0,42). Sous-groupe FEVG ≤ 40 % : bénéfice absolu numériquement moindre (**6,3 vs 12,5 points**, interaction non significative). Effets indésirables plus fréquents à J90 (**41 % vs 29 %** : hypotension **5 % vs < 1 %**, hyperkaliémie **3 % vs 0 %**, altération rénale **3 % vs < 1 %**), sans hausse des événements graves (**16 % vs 17 %**) ni fatals (**5 % vs 6 %**).
- **Limites :** essai en ouvert, critère principal modifié en cours d'étude, arrêté précocement pour bénéfice, financé par un fabricant de tests NT-proBNP, mené en post-hospitalisation et non en ambulatoire stable.

### Pratique réelle : registres SwedeHF, OPTIPHARM-HF, TITRATE-HF et REPORT-HF

- **SwedeHF (2000–2018, 27 430 patients ICFER, âge moyen 74 ans, 67 % avec cardiopathie ischémique associée) :**

| Classe médicamenteuse | Moins de 70 ans | 70 à 79 ans | 80 ans et plus |
|---|---|---|---|
| IEC / ARA2 ou ARNI | 95 % | 90 % | 80 % |
| Bêtabloquant | 95 % | 93 % | 88 % |
| ARM | 54 % | 47 % | 35 % |
| ARNI (à partir de 2016) | 25 % | 17 % | 7 % |

  Doses cibles globales : IEC/ARA2 **44 %**, ARNI **42 %**, bêtabloquant **36 %**, ARM **16 %** (tombant à **30 %, 34 %, 25 % et 9 %** dès 80 ans). Les trois classes ensemble : **50 %** (< 70 ans) vs **26 %** (≥ 80 ans). Moindre recours associé à l'âge, l'altération rénale, l'hypokaliémie, le suivi hors hôpital et la cardiopathie ischémique (**OR 0,80** pour IEC/ARA2/ARNI ; *corrigendum* 2022 corrigeant l'appellation erronée de HR). Données antérieures aux iSGLT2.
- **OPTIPHARM-HF (Italie, 1 720 patients ICFER, FEVG moyenne 32 %, 57 % ischémiques, 32 centres experts) :** à l'entrée, bêtabloquant **90 %**, IEC/ARA2/ARNI **80 %** (ARNI **61 %**), ARM **72 %**, iSGLT2 **69 %** ; **4 classes : 46,6 %**, **4 classes à dose cible : 2,7 %**. Raison médicale documentée seulement chez **3 à 16 %** des non-traités. Après une seule visite structurée : quadrithérapie passée à **63,8 %** et doses cibles complètes à **6,6 %**.
- **TITRATE-HF (Pays-Bas, 3 367 patients ICFER, 48 hôpitaux, ~44 % ischémiques) :** IC nouvellement diagnostiquée : 4 classes chez **47 %** à 6 semaines, **69,5 %** à 6 mois, **64,4 %** à 12 mois ; doses cibles complètes des 4 classes chez **1,2 %** (au moins demi-dose de chaque chez **14 %**). IC chronique/aggravée : 4 classes de **44,6 % à 54,6 %**, doses cibles **1,8 %**. Principal frein consigné : acceptation de la dose inférieure (~50 %) devant les effets indésirables (~33 % ; pour les IEC : **43 % vs 39 %**). Réduction/arrêt des traitements dans les 6 premiers mois associé à plus de décès/hospitalisations IC (**HR ajusté 1,54**, association observationnelle).
- **REPORT-HF (18 030 patients post-hospitalisation, 44 pays, 2014–2017) :** hors médicaments IC, **39 %** prenaient 5–9 médicaments et **9 %** ≥ 10 ; prise de médicaments pouvant aggraver l'IC : **57 %** (≥ 10) vs **6 %** (< 5). Mortalité à 1 an avec ≥ 10 autres médicaments : **HR 1,16**, devenant non significatif (**HR 1,09**) après ajustement sur les médicaments de l'IC (effet d'éviction suggéré).`,
    },
    {
      headingFr: 'Données détaillées sur les diurétiques, traitements additionnels et anti-angineux',
      depth: 'evidence',
      bodyMarkdownFr: `### Diurétiques : réduction, arrêt encadré et escalade

- **ESC 2026 :** diurétiques de l'anse recommandés (**Classe I**) pour soulager les signes de congestion. En cas d'escalade à l'hôpital sous diurétique de l'anse, ajout d'acétazolamide IV (**ADVOR**) ou d'hydrochlorothiazide (**CLOROTIC**) classé **Classe IIa (B1)** (décongestion plus rapide sans baisse des décès ni réhospitalisations ; forte hausse d'hypokaliémie et variations de créatinine sous thiazidiques ; usage chronique de thiazidiques déconseillé chez les patients stables). Dans **TRANSFORM-HF**, torasémide et furosémide ont donné la même survie.
- **Revue narrative Paraskevaidis et al. (2026) :** propose chez un patient stable sans surcharge hydrique une réduction jusqu'à **50 %** du diurétique de l'anse ou thiazidique avec surveillance quotidienne (tension, volémie) et bilan clinique/rénal/électrolytes toutes les **1 à 2 semaines** (règle non issue d'un essai ; le schéma qualifie à tort l'ARM d'alternative au diurétique). *Limites :* revue narrative sans recherche systématique, ne citant ni l'ESC ni les recommandations américaines, avec imprécisions de citation.
- **Données d'arrêt complet :** dans **ReBIC-1** (**188 patients** stables sous faible dose de furosémide, FEVG médiane **32 %**, ~1/3 ischémique), l'arrêt n'a pas aggravé la dyspnée et **75,3 %** sont restés sans furosémide contre **83,7 %** sous traitement. Dans une étude plus ancienne, **29/41 (71 %)** ont repris un diurétique dans les **12 semaines** (risque lié à **FEVG ≤ 27 %** et furosémide **> 40 mg/j**). Études antérieures aux iSGLT2. Dans **PARADIGM-HF** (sacubitril/valsartan vs énalapril) et **EMPEROR-Reduced** (empagliflozine), les besoins en diurétiques étaient moindres.

### Traitements additionnels (grades ESC 2026 et essais pivots)

- **Ivabradine (*Procoralan*) :** **Classe IIa** si FEVG ≤ 35 %, rythme sinusal et FC repos **> 70 bpm** malgré traitement maximal toléré (seuil AMM européenne : **≥ 75 bpm**). Essai **SHIFT** : bénéfice porté par la baisse des hospitalisations pour IC.
- **Digoxine / digitoxine :** **Classe IIa** (rehaussée en 2026) si FEVG ≤ 40 % malgré traitement optimal. Essai **DIGIT-HF** (2025) : réduction des décès ou premières hospitalisations pour IC (**HR 0,82**).
- **Vériciguat (*Verquvo*) :** **Classe IIb** si FEVG < 45 % malgré traitement optimal. Bénéfice après aggravation récente (**VICTORIA**, périmètre AMM) ; en ambulatoire stable (**VICTOR**, *The Lancet* 2025), critère principal non réduit (**HR 0,93** ; baisse des décès secondaire nominale).
- **Finérénone (*Kerendia*) :** essai **FINEARTS-HF** limité aux FEVG ≥ 40 % ; l'ESC 2026 retient un ARM stéroïdien dans l'ICFER.
- **Hydralazine / dinitrate d'isosorbide :** **Classe IIa** chez les patients se déclarant noirs avec FEVG ≤ 40 %.
- **Fer intraveineux :** améliore symptômes et qualité de vie (**Classe I**) et réduit les hospitalisations IC (**Classe IIa**) en cas de carence martiale (ESC 2026 discute un seuil CST **< 20 %**). Fer oral inefficace dans **IRONOUT-HF**.

### Anti-angineux dans l'ICFER ischémique (ESC 2024 SCC)

Après le bêtabloquant (première intention) : ivabradine (rythme sinusal, FC > 70 bpm), dérivé nitré longue durée ou ranolazine (**IIa B**), amlodipine ou félodipine, puis nicorandil ou trimétazidine (**IIb B**). Aucune de ces molécules n'améliore la survie.`,
    },
  ],
  relatedArticleSlugs: [
    'iec-ara2-et-arni-sacubitril-valsartan',
    'betabloquants-insuffisance-cardiaque',
    'arm-steroidiens-spironolactone-eplerenone',
    'inhibiteurs-sglt2-insuffisance-cardiaque',
    'maladie-renale-insuffisance-cardiaque',
    'diabete-insuffisance-cardiaque',
    'fibrillation-atriale-insuffisance-cardiaque',
    'fuite-mitrale-secondaire',
    'escalade-et-resistance-aux-diuretiques',
    'angor-et-medicaments-anti-angineux',
    'these-fer-iv-et-isglt2-quadritherapie',
    'essais-cliniques-en-cours-et-a-suivre',
    'comprendre-le-diagnostic',
    'insuffisance-cardiaque-fevg-amelioree',
    'sel-et-liquides-insuffisance-cardiaque',
    'dispositifs-cardiaques-dai-crt',
    'revascularisation-pontage-stents',
    'vivre-avec-insuffisance-cardiaque',
    'essais-cliniques-cles',
    'interactions-complements-aliments-medicaments',
    'nutrition-et-complements-insuffisance-cardiaque',
    'medicaments-effets-secondaires-suivi',
    'carence-martiale-et-fer-iv',
    'maladies-associees',
    'recommandations-comparees-esc-us-nice',
    'traitements-additionnels-nouveaux',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'finerenone-et-nouveaux-arm',
    'stenose-aortique-fevg-reduite',
    'cholesterol-et-prevention-secondaire',
    'thrombus-vg-et-anticoagulants',
    'tension-arterielle-insuffisance-cardiaque',
    'dysfonction-vg-asymptomatique-stade-b',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 sur l’insuffisance cardiaque (y compris sections diurétiques et décongestion)',
      detail: 'Tableau 5, titration, traitements additionnels, fer IV, escalade diurétique (acétazolamide/hydrochlorothiazide IIa B1, escalade ambulatoire), anti-angineux, stade B et tension artérielle',
    },
    {
      label: 'Recommandations ESC 2024 sur les syndromes coronariens chroniques (section anti-angineux)',
      detail: 'Classes des traitements anti-angineux (Tableau 16) et précisions spécifiques à l’ICFER (section 5.1)',
    },
    {
      label: 'Guide patient ESC 2026 sur l’insuffisance cardiaque',
      detail: 'Présentation grand public des quatre classes de fond et des diurétiques',
    },
    {
      label: 'Vaduganathan et al. (The Lancet, 2020)',
      detail: 'Modélisation du bénéfice sur la vie entière de la quadrithérapie (EMPHASIS-HF, PARADIGM-HF, DAPA-HF)',
    },
    {
      label: 'STRONG-HF (The Lancet, 2022, texte intégral)',
      detail: 'Protocole de titration rapide post-hospitalisation, règles de pause, proportions FEVG/ischémie, composantes du résultat et tolérance',
    },
    {
      label: 'SwedeHF — Stolfo et al. (EJHF, 2022, texte intégral et corrigendum)',
      detail: 'Registre suédois de 27 430 patients ICFER : recours et doses cibles selon l’âge, ARNI, facteurs associés et erratum sur les odds ratios',
    },
    {
      label: 'OPTIPHARM-HF, TITRATE-HF et REPORT-HF (EJHF, 2025, textes intégraux)',
      detail: 'Registres récents en pratique réelle sur la quadrithérapie, les doses cibles, les freins à la titration et l’impact de la polymédication hors IC',
    },
    {
      label: 'Paraskevaidis et al. (revue narrative, 2026, texte intégral)',
      detail: 'Durée, réduction progressive et arrêt encadré des diurétiques de l’anse (ReBIC-1, PARADIGM-HF, EMPEROR-Reduced, plan écrit et limites méthodologiques)',
    },
    {
      label: 'Recommandations ACC/AHA/HFSA 2022 et NICE NG106 (2025)',
      detail: 'Positions américaine (ARNI en première intention) et britannique (associations, add-ons, inhibiteurs calciques à éviter)',
    },
    {
      label: 'Essais SHIFT, DIGIT-HF, VICTOR, VICTORIA, FINEARTS-HF et IRONOUT-HF',
      detail: 'Données cliniques sur l’ivabradine, la digitoxine, le vériciguat, la finérénone et le fer oral ; RCP EMA Verquvo et rapport EMA Procoralan',
    },
    {
      label: 'British Heart Foundation et Cleveland Clinic',
      detail: 'Information patient sur la poursuite des traitements, la titration et le délai d’action',
    },
  ],
  disclaimerType: 'medical',
};
