import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'confirmer-la-cause-dysfonction-vg',
  sourceWikiPath: 'wiki/concepts/confirming-the-cause-of-lv-dysfunction.md',
  titleFr: 'Confirmer la cause de la dysfonction du ventricule gauche',
  category: 'diagnostic',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'étiologie',
    'irm-cardiaque',
    'lge',
    'rehaussement-tardif',
    'cardiomyopathie-dilatée',
    'ndlvc',
    'double-pathologie',
    'coronaropathie-spectatrice',
    'cardiopathie-hypertensive',
    'génétique',
    'fibrose-médiomurale',
    'cardiomyopathie-rythmique',
    'amylose-cardiaque',
    'sarcoïdose-cardiaque',
    'scintigraphie-osseuse',
    'tep-fdg',
  ],
  aliases: [
    'Étiologie',
    "Cause de l'insuffisance cardiaque",
    'Ischémique vs non ischémique',
    'Dysfonction VG disproportionnée',
    'Double pathologie',
    'Coronaropathie spectatrice',
    'Bystander CAD',
    'Profil LGE',
    'Fibrose médio-murale',
    'Définition de Felker',
    'Cardiomyopathie dilatée',
    'CMD',
    'NDLVC',
    'Cardiomyopathie non dilatée du VG',
    'Cardiopathie hypertensive',
    'Test génétique cardiomyopathie',
    'Cardiomyopathie rythmique',
    'Cardiomyopathie induite par les ESV',
    'Amylose cardiaque',
    'Sarcoïdose cardiaque',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Qualifier un cœur affaibli d'« ischémique » repose habituellement sur la coronarographie et un antécédent d'infarctus. Mais lorsque la faiblesse paraît plus globale ou plus marquée que ne l'expliquent les lésions coronaires — ou lorsque certains indices cliniques interpellent —, votre équipe recherche une seconde cause : cardiomyopathie héréditaire, trouble du rythme rapide ou irrégulier, extrasystoles ventriculaires fréquentes, hypertension ancienne, alcool, myocardite passée, valvulopathie ou maladie infiltrative (amylose ou sarcoïdose cardiaque). Dans le plus vaste registre IRM de patients ayant une coronaropathie obstructive, environ 1 patient sur 6 présentait une cardiomyopathie non ischémique ou mixte, non suspectée avant l'IRM dans la moitié des cas. L'IRM cardiaque avec contraste, le suivi prolongé du rythme et des bilans ciblés peuvent modifier profondément les traitements, les seuils de DAI, la revascularisation et le dépistage familial.",
  sections: [
    {
      headingFr: 'Comment définit-on une cause « ischémique » ?',
      bodyMarkdownFr: `- **La définition de recherche (Felker 2002) :** chez 1 921 patients atteints d’IC symptomatique avec FEVG ≤ 40 %, cinq méthodes de classification ont été comparées. Les personnes ayant une **atteinte monotronculaire sans antécédent d’infarctus ni de revascularisation** évoluaient comme les patients non ischémiques et étaient mieux classées dans le groupe non ischémique. Une atteinte coronaire plus étendue prédisait indépendamment une survie plus courte.
- **Précision sur le tronc commun et l’IVA proximale (Briceno 2016) :** une revue ultérieure précise que l’exception monotronculaire **exclut le tronc commun gauche et l’artère interventriculaire antérieure (IVA) proximale**, qui continuent de compter pour une origine ischémique (le détail des vaisseaux ne figurait pas dans le résumé de Felker consulté).
- **Aucun seuil universel de « disproportion » :** juger si la faiblesse du VG est hors de proportion avec l’anatomie coronaire reste une synthèse clinique croisant coronarographie, IRM, histoire rythmique et bilans associés (Briceno 2016). Certains registres de recherche utilisent des résidus statistiques comparant la FEVG à l’étendue de la cicatrice IRM (Bawaskar 2024).
- **Mécanismes ischémiques intriqués :** myocarde sidéré, myocarde hibernant et cicatrice peuvent coexister dans un même cœur (Briceno 2016 ; voir *Occlusion coronaire chronique (CTO) et collatérales*).
- **Définitions des recommandations ESC 2023 sur les cardiomyopathies (texte intégral) :**
  - **Clause explicite de coexistence (section 3.1) :** l’ESC 2023 précise directement qu’une **cardiomyopathie peut coexister avec une maladie ischémique, valvulaire ou hypertensive, et que trouver l’une n’exclut pas l’autre**.
  - **Cardiomyopathie dilatée (CMD, sections 3.2.2 et 7.2.1.1) :** dilatation du VG (en ETT adulte : DTDVG > 58 mm chez l’homme / > 52 mm chez la femme, ou VTDi ≥ 75 / ≥ 62 mL/m²) avec dysfonction systolique (FEVG < 50 %) **qui ne s’explique pas uniquement** par des conditions de charge anormales (hypertension, valvulopathie, cardiopathie congénitale) ou une maladie coronaire.
  - **Cardiomyopathie ventriculaire gauche non dilatée (NDLVC, sections 3.2.3 et 7.3.1.1) :** nouvelle catégorie remplaçant la « cardiomyopathie hypokinétique non dilatée », définie par une **cicatrice non ischémique ou un remplacement adipeux du VG** sans dilatation (avec ou sans trouble de cinétique), **ou** par une hypokinésie globale isolée du VG (FEVG < 50 %) sans cicatrice, non expliquée uniquement par les conditions de charge ou la coronaropathie.`,
    },
    {
      headingFr: 'Ce que montre l’IRM cardiaque (LGE et cartographie tissulaire)',
      bodyMarkdownFr: `Après injection de gadolinium, le tissu cicatriciel ou infiltré retient le produit de contraste et apparaît brillant : c’est le **rehaussement tardif (LGE)**. Associé aux cartographies **T1/T2** (œdème, volume extracellulaire [ECV]) et **T2*** (surcharge en fer), son profil oriente vers la cause (McCrohon 2003 ; ESC 2023) :

| Aspect à l’IRM cardiaque | Position dans la paroi / indice tissulaire | Cause généralement évoquée |
|---|---|---|
| **Sous-endocardique ou transmural**, dans un territoire coronaire | Débute à la couche interne et peut traverser toute l’épaisseur | Cicatrice d’infarctus (ischémique) |
| **Strie médio-murale**, souvent dans le septum | Milieu de l’épaisseur de la paroi | Non ischémique : CMD, laminopathie (*LMNA*), parfois cardiopathie hypertensive |
| **Sous-épicardique**, en plages ou **en anneau** | Couche externe de la paroi | Myocardite ancienne ; un aspect **en anneau** dans la NDLVC/CMD oriente vers ***DSP*, *FLNC* (tronquant), *DES* ou *PLN*** ; sous-épicardique latéral vers une dystrophinopathie |
| **Multifocal en plages, septum basal / sous-épicardique / médio-mural** (± « signe du crochet » vers le VD, T2 élevé) | Septum basal, paroi latérale, points d’insertion du VD | **Sarcoïdose cardiaque** (peut parfois aussi imiter une cicatrice d’infarctus) |
| **Diffus sous-endocardique ou transmural**, non coronaire, **annulation anormale du gadolinium** et **ECV ≥ 40 %** | Ensemble de la paroi interne / transmural + T1 natif élevé | **Amylose cardiaque** (AL ou ATTR) |
| **LGE postérolatéral + T1 natif bas** | Paroi inférolatérale basale | Maladie de Fabry (une surcharge en fer donne un **T2* court**) |
| **Absence de LGE** | Aucune cicatrice de remplacement visible | Fréquent dans la CMD et la cardiomyopathie rythmique réversible ; n’exclut pas à lui seul une maladie coronaire (myocarde hibernant) ni une sarcoïdose active précoce |

- **Étude fondatrice (McCrohon 2003, résumé) :** chez 90 patients avec VG affaibli, **les 27 patients** atteints de maladie coronaire significative avaient tous un LGE sous-endocardique ou transmural. Parmi les 63 patients ayant une CMD à coronaires saines, 59 % n’avaient aucun LGE, 28 % avaient une strie médio-murale et **13 % présentaient une cicatrice de type infarctus**, montrant que la coronarographie seule peut mal classer 13 % des patients.
- **Précautions pratiques (ESC 2023) :** les agents macrocycliques/linéaires récents au gadolinium peuvent être utilisés en sécurité lorsque le **DFGe dépasse 30 mL/min/1,73 m²** ; en cas d’insuffisance rénale sévère, la cartographie **T1 native sans injection** fournit déjà des indices précieux pour l’amylose ou la maladie de Fabry. Avec des protocoles modernes, l’IRM est réalisable chez les porteurs de stimulateurs ou de DAI IRM-compatibles et la plupart des non-compatibles (les artéfacts rendent toutefois environ 1 examen sur 5 ininterprétable).
- **Recommandations :** **ESC 2023 Cardiomyopathies** recommande une IRM avec contraste dès l’évaluation initiale (**Classe I, niveau B**) et des IRM de suivi (**Classe IIa, C**), notamment pour suivre la réponse au traitement dans l’amylose, la sarcoïdose, les cardiomyopathies inflammatoires, la maladie de Fabry et la surcharge en fer (**Classe IIa, C**). **ESC 2026 IC** recommande l’IRM avec contraste lorsque la cause reste incertaine ou qu’une cardiomyopathie est suspectée (**Classe I, C**) (voir *Examens et chiffres*).`,
    },
    {
      headingFr: 'Coronaropathie « spectatrice » et double pathologie',
      bodyMarkdownFr: `Découvrir une artère coronaire rétrécie à la coronarographie ne prouve pas qu’elle explique la faiblesse du cœur. Deux situations existent : une **coronaropathie spectatrice** (sténose obstructive coexistant avec une cardiomyopathie non ischémique primaire, \`CAD+NICM\`) et une **double cardiomyopathie** (lésions ischémique et non ischémique réunies, \`CAD+dualCM\`) (Bawaskar 2024 ; ESC 2023).

| Cohorte | Population et effectif | Atteinte non ischémique / mixte | Devenir par rapport à une forme purement ischémique |
|---|---|---|---|
| **Bawaskar 2024** (Minnesota, 4 hôpitaux, *Circulation*, texte intégral) | 3 023 patients consécutifs avec coronaropathie obstructive (≥ 70 % ou tronc commun ≥ 50 %) adressés en IRM (FEVG médiane 46 % ; 1 709 à FEVG < 50 %) | **16,9 %** (512/3 023) : \`CAD+NICM\` (9,3 %) ou \`CAD+dualCM\` (7,7 %) ; **17,8 %** (305/1 709) si FEVG < 50 %. **51 % non suspectées avant l’IRM** (38 % NICM, 67 % dualCM). Validé à **30/30 (100 %)** sur cœurs explantés de greffe | Médiane 4,8 ans : \`CAD+NICM/dualCM\` combiné avait plus de décès ou hospitalisations pour IC (**HR ajusté 1,23**, IC 95 % : 1,06–1,43), décès (**HR 1,21**) et hospitalisations IC (**HR 1,37**) ; décès CV non significatif (HR 1,15). Détail : **\`CAD+NICM\` portait le surrisque (HR 1,35 [1,11–1,63])** ; **\`CAD+dualCM\` ne différait pas de \`CAD+ICM\` (HR 1,10 [0,90–1,36])** |
| **Jones 2024** (Londres + UK Biobank, *EJHF*, texte intégral) | 453 coronariens (FEVG moyenne 47 %) + 31 957 coronariens UK Biobank | **14 %** (63/453) avaient un LGE non ischémique (73 % strie médio-murale, 59 % septale), avec FEVG plus basse (38 % vs 48 %) et VG plus dilaté (VTDi 131 vs 103 mL/m²) | Sur 6,4 ans, le LGE non ischémique ne prédisait **pas** indépendamment décès/MACE (septal univarié HR 1,56, non significatif après ajustement). Dans UK Biobank, les coronariens porteurs de variants rares de CMD (surtout *TTN* tronquants) avaient plus d’IC (**HR 1,94**), de FA (**HR 2,18**) et de décès/MACE (**HR 1,67**), sans différence isolée de survie (HR 1,19) |
| **Sokolska 2025** (Wroclaw, Pologne, *Biomedicines*, texte intégral) | 131 patients à FEVG ≤ 50 % adressés en IRM pour cause d’IC **inconnue** (75 coronariens avec LGE) | Chez les coronariens : **20 %** purement ischémique, **33 %** non ischémique, **12 %** mixte, **35 %** sans LGE — profil proche des non-coronariens | Étude transversale monocentrique sans suivi clinique, comportant quelques incohérences internes |

- **Réconcilier Bawaskar 2024 et Jones 2024 :** dans les deux études, environ **1 coronarien adressé en IRM sur 6 à 7** présente des signes myocardiques non ischémiques, et *l’ajout* d’une cicatrice non ischémique à une cicatrice d’infarctus (\`CAD+dualCM\` dans Bawaskar, HR 1,10 NS ; LGE non ischémique dans Jones, NS ajusté) n’aggravait pas indépendamment la survie par rapport à une forme ischémique pure. Ce qui assombrissait le pronostic dans Bawaskar 2024 était la **coronaropathie spectatrice sur cardiomyopathie non ischémique primaire (\`CAD+NICM\`, HR 1,35)**, non suspectée avant l’IRM dans la moitié des cas et recouvrant des causes spécifiques (CMH, cardiomyopathie rythmique, amylose, CMD génétique, sarcoïdose, Fabry).
- **Conséquence sur la revascularisation :** Bawaskar 2024 rappelle que lors du dépistage de l’essai **REVIVED-BCIS2**, **326 patients sur 2 695 (12,1 %)** ont été exclus parce que l’IRM révélait une cardiomyopathie non ischémique malgré une atteinte coronaire étendue — alors que 30 % des participants inclus n’avaient jamais eu d’IRM. Dilater une artère spectatrice ne traite pas une maladie intrinsèque du muscle cardiaque.
- **Vulnérabilité génétique :** au vu des résultats d’UK Biobank (risque d’IC et de FA doublé en présence d’un variant *TTN* ou de CMD chez des coronariens), Jones 2024 suggère qu’un **test génétique peut être envisagé** lorsque la dysfonction systolique du VG paraît disproportionnée par rapport aux lésions coronaires.`,
    },
    {
      headingFr: 'Une seule artère occluse, mais un ventricule globalement affaibli',
      bodyMarkdownFr: `Il arrive que le seul résultat coronaire soit **une artère occluse de longue date reprise par des collatérales** (occlusion coronaire chronique, CTO), alors que **toutes les parois** du VG se contractent faiblement. **Aucune étude n’a ciblé précisément cette situation.** Les indices disponibles sont indirects :

- **Classification de recherche :** selon Felker (2002), une atteinte monotronculaire sans antécédent d’infarctus ni de revascularisation est assimilée au groupe non ischémique, hors tronc commun gauche et IVA proximale (Briceno 2016).
- **Territoire d’effet d’une CTO :**
  - Dans les essais randomisés avec IRM (sous-étude IRM d’EXPLORE ; REVASC), rouvrir une CTO n’a pas augmenté la FEVG globale en moyenne : le gain restait confiné aux segments faibles mais viables **du territoire de l’artère occluse**.
  - Dans une cohorte majoritairement monotronculaire (Everaars 2021), les parois à distance n’ont pas changé après réouverture.
- **Cicatrice hors territoire :** à l’IRM, un LGE médio-mural ou sous-épicardique en dehors du territoire de la CTO oriente vers une seconde cause, observée chez environ 1 coronarien adressé en IRM sur 6 à 7 (McCrohon 2003 ; Jones 2024 ; Bawaskar 2024).
- **Zone d’ombre :** Everaars (2021) **excluait les patients atteints d’une cardiomyopathie non ischémique associée** ; on ignore donc si des parois distantes déjà affaiblies récupèrent après réouverture d’une CTO isolée.
- **Exception non contrôlée (Cardona 2016) :** chez 32 patients avec FEVG ≤ 40 % et viabilité dans le territoire CTO, la FEVG globale est passée d’environ 31 % à 38 % après réouverture, mais la plupart étaient pluritronculaires, environ un tiers ont reçu d’autres stents et il n’y avait pas de groupe témoin (voir *Occlusion coronaire chronique (CTO) et collatérales*).

Évaluer si une faiblesse globale est disproportionnée par rapport à une artère occluse reste donc une synthèse médicale croisant coronarographie, IRM, enregistrement du rythme, signes d’alerte cliniques et, si besoin, génétique (Briceno 2016 ; ESC 2023).`,
    },
    {
      headingFr: 'Cardiomyopathie induite par les troubles du rythme (FA, tachycardies et ESV)',
      bodyMarkdownFr: `Les troubles du rythme peuvent affaiblir le ventricule gauche à eux seuls (**cardiomyopathie rythmique pure**, *AiCM*) ou **aggraver un cœur déjà ischémique ou structurellement atteint** (forme « surajoutée »). Dans le registre coronarien du Minnesota (3 023 patients), **46 patients** avaient une cardiomyopathie liée à une tachyarythmie (33 tachyarythmies atriales — 26 FA, 5 flutters, 2 tachycardies atriales — et 13 extrasystoles ventriculaires fréquentes) (Bawaskar 2024 ; Shoureshi 2024).

### Trois profils à reconnaître

- **Cardiomyopathie induite par une tachycardie (\`T-CM\`) :** fréquence cardiaque moyenne persistante ou fréquente **> 100 bpm** (FA ou flutter rapide, tachycardie supraventriculaire ou atriale incessante, TV persistante). Une forme surajoutée doit être évoquée **même lorsqu’une atteinte ischémique, infiltrative ou toxique est déjà connue** (Shoureshi 2024).
- **Cardiomyopathie induite par la fibrillation atriale (\`AF-CM\`) :** baisse de FEVG liée à une FA paroxystique, persistante ou permanente **même lorsque la fréquence cardiaque est bien contrôlée**, par irrégularité des cycles et perte de la contraction atriale (Shoureshi 2024).
- **Cardiomyopathie induite par les extrasystoles ventriculaires (\`PVC-CM\`) :** évoquée typiquement dès une **charge en ESV ≥ 10 %** (beaucoup plus probable au-delà de **16–24 %**, bien que des récupérations aient été décrites dès 6–8 %). Une forme surajoutée correspond à une **chute de FEVG ≥ 10 points** attribuable aux ESV sur une cardiomyopathie préexistante. Autres indices : **QRS d’ESV large (> 157 ms)**, origine épicardique, intervalles de couplage variables et caractère souvent asymptomatique ou prolongé (Shoureshi 2024).

### Limites du Holter 24 h, apport de l’IRM et prise en charge

- **Un Holter de 24 heures est souvent trop court :** la charge en ESV fluctue beaucoup d’un jour à l’autre ; un enregistrement de 24 h ne repère que **53 %** des patients ayant > 10 % d’ESV (**en manquant 47 %**). Une surveillance ambulatoire d’**au moins 6 jours** est idéale pour les ESV, et d’**au moins 2 semaines** en cas de suspicion de \`T-CM\` (Shoureshi 2024).
- **Évaluer la réversibilité à l’IRM (LGE) :**
  - Dans la **\`AF-CM\`** (\`CAMERA-MRI\`), l’**absence de cicatrice ou un LGE < 10 %** prédisait la récupération de la FEVG après ablation par cathéter (dans les essais d’ablation de FA chez des patients IC, la FEVG a gagné 8 à 18 points chez 60 à 70 % des patients ablatés).
  - Dans la **\`PVC-CM\`**, l’IRM est importante dès une charge en ESV ≥ 5 % avec FEVG réduite ; une **masse cicatricielle < 9 g** et le succès de l’ablation prédisaient fortement la récupération.
  - **En présence d’une cicatrice d’infarctus :** une normalisation complète est moins probable car la cicatrice reste fixe, **mais supprimer une arythmie à forte charge peut néanmoins permettre une amélioration partielle notable** (souvent +10 à +15 points de FEVG après ablation d’ESV, même sur forme surajoutée) (Shoureshi 2024).
- **Traitement et recommandations :**
  - **FA :** les recommandations **ESC 2024 sur la FA** préconisent l’**ablation par cathéter (Classe I, niveau B)** lorsqu’une cardiomyopathie rythmique est hautement probable, et indiquent qu’une **cardioversion électrique diagnostique** doit être envisagée (**Classe IIa, C**) en cas de FA persistante pour vérifier si le retour en rythme sinusal améliore la FEVG (voir *Fibrillation atriale et insuffisance cardiaque*).
  - **ESV :** la suppression par ablation ou antiarythmique est proposée lorsque les ESV contribuent à la dysfonction VG (Shoureshi 2024 mentionne des seuils > 15 % ; tableaux primaires ESC 2022 VA non vérifiés directement en PDF). Point de sécurité majeur : les **antiarythmiques de classe IC (flécaïnide — *Flécaïne*, propafénone — *Rythmol*) sont à éviter après un infarctus ou en cas de coronaropathie/cardiopathie structurelle** (surmortalité démontrée dans l’essai \`CAST\`), orientant vers l’ablation par cathéter ou l’**amiodarone (*Cordarone*)** en complément des traitements de fond de l’IC (Shoureshi 2024 ; ESC 2024 FA).
- **Récupération et risque de rechute :** le diagnostic définitif est rétrospectif — la FEVG s’améliore habituellement en **4 à 12 semaines** dans la \`T-CM\` (confirmé sous 6 mois) et en **2 à 12 semaines** dans la \`PVC-CM\`, souvent précédée d’une chute nette du NT-proBNP dès la première semaine. Comme une fibrose microscopique peut persister, **une récidive du trouble du rythme entraîne un déclin plus rapide et au moins aussi sévère**, et une mort subite reste décrite dans 8 à 12 % des cas de \`T-CM\`, justifiant le maintien du suivi et du traitement de fond (Shoureshi 2024 ; ESC 2026 IC).`,
    },
    {
      headingFr: 'Deux imitateurs à forts enjeux : amylose cardiaque et sarcoïdose cardiaque',
      bodyMarkdownFr: `L’**amylose cardiaque** et la **sarcoïdose cardiaque** peuvent toutes deux imiter de près une maladie coronaire — et coexister avec elle (dans Bawaskar 2024, 30 coronariens présentaient une amylose cardiaque [23 ATTR, 3 AL] et 4 une sarcoïdose cardiaque). Les méconnaître modifie radicalement le pronostic et les choix de traitement.

### Amylose cardiaque (ATTR et AL)

Plus de **98 %** des amyloses cardiaques sont dues soit à des chaînes légères d’immunoglobulines monoclonales (**amylose AL**, urgence hématologique dont la survie médiane sans traitement avec IC n’est que de **6 mois**), soit à la transthyrétine (**ATTR** : forme sauvage liée à l’âge **ATTRwt**, survie médiane 57 mois, ou héréditaire **ATTRv**) (Garcia-Pavia 2021 ; ESC 2023).

- **Chevauchement fréquent avec la maladie coronaire :** l’ATTRwt touchant surtout les sujets âgés, une **coronaropathie obstructive coexiste chez environ 1 patient sur 4**. Dans une cohorte de Calgary de 133 patients ATTR (87 % sauvage, âge moyen 78 ans), **30 patients (22,6 % au total ; 24 % des ATTRwt ; 42 % des patients testés)** avaient une coronaropathie obstructive prouvée, et **77 % (23/30)** portaient ce diagnostic des années avant la découverte de l’amylose. À l’inverse, **82 %** des bilans coronaires déclenchés lors du diagnostic d’ATTR revenaient négatifs, l’amylose causant elle-même douleurs thoraciques (atteinte microvasculaire), troponine chroniquement élevée et **pseudo-ondes Q d’infarctus** à l’ECG (Hassan 2023 ; Garcia-Pavia 2021).
- **Signes d’alerte (ESC 2021 et ESC 2023 figure 21) :** évoquer une amylose devant une **épaisseur pariétale du VG ≥ 12 mm** associée à au moins un indice — notamment âge ≥ 65 ans avec IC ou rétrécissement aortique (prévalence ATTR de 7 à 19 % dans ces groupes), **syndrome du canal carpien bilatéral**, **canal lombaire étroit**, **rupture du tendon du biceps**, neuropathie périphérique ou autonome, **baisse spontanée de la tension chez un ancien hypertendu** (ou mauvaise tolérance des bêtabloquants/IEC), **microvoltage QRS** par rapport à l’épaisseur des parois, pseudo-ondes Q, bloc auriculo-ventriculaire (BAV), troponine chroniquement élevée, aspect d’**épargne apicale** en strain échographique, ou **LGE diffus avec annulation anormale du gadolinium et ECV ≥ 40 %** à l’IRM. Une protéinurie, une macroglossie ou des ecchymoses spontanées orientent d’urgence vers une amylose AL.
- **Le bilan non invasif obligatoire en deux volets (ESC 2023 Classe I, niveau B pour la scintigraphie) :**
  1. **Scintigraphie osseuse au 99mTc-DPD, 99mTc-PYP ou 99mTc-HMDP avec tomoscintigraphie (SPECT)** (la SPECT est indispensable pour prouver que la fixation est bien myocardique et non dans le sang cavitaire).
  2. **Les trois examens de recherche monoclonale simultanément :** électrophorèse des protéines sériques avec immunofixation (**SPIE**), immunofixation urinaire (**UPIE**) et **dosage des chaînes légères libres sériques (rapport kappa/lambda)** (sensibilité combinée de **99 %** pour l’AL ; une électrophorèse simple sans immunofixation ne suffit pas ; en cas de DFGe ≤ 45 mL/min/1,73 m² avec SPIE/UPIE normales, un rapport Freelite jusqu’à 2,0 [3,1 sous dialyse] peut être normal, sinon avis hématologique).
- **Interprétation combinée :**
  - **Fixation de grade 2 ou 3 de Perugini + TOUS les tests monoclonaux négatifs** confirme une **amylose ATTR sans biopsie** (spécificité proche de 100 %) ; un **test génétique *TTR*** reste ensuite nécessaire même chez les personnes âgées (10 % des femmes de 70 ans et plus porteuses d’ATTR ont une forme héréditaire ATTRv) pour orienter le dépistage familial.
  - **Toute anomalie monoclonale (même avec grade 2–3) ou une fixation de grade 1** interdit le diagnostic non invasif d’ATTR (l’amylose AL peut aussi fixer, ou une ATTR peut coexister avec une gammapathie MGUS) : une **preuve histologique avec typage** (souvent biopsie endomyocardique) et un avis hématologique urgent s’imposent.
  - **Piège coronarien :** un **infarctus récent (< 4 semaines)** est une cause connue de faux positif à la scintigraphie osseuse, et de rares variants ATTRv (Phe84Leu, Ser97Tyr) peuvent donner des faux négatifs (Garcia-Pavia 2021 ; ESC 2023).
- **Conséquences thérapeutiques :** en dehors des diurétiques, les traitements classiques de l’ICFER (surtout bêtabloquants et vasodilatateurs) sont souvent mal tolérés ; le DAI préventif n’a pas démontré de bénéfice de survie ; l’AL exige une chimiothérapie/greffe hématologique urgente, tandis que l’ATTR bénéficie de traitements spécifiques stabilisateurs (**tafamidis — *Vyndaqel***) ou silenceurs de la TTR (Garcia-Pavia 2021 ; ESC 2023 ; Hassan 2023).

### Sarcoïdose cardiaque

La sarcoïdose cardiaque est une cardiomyopathie inflammatoire granulomateuse qui touche cliniquement **5 à 10 %** des personnes atteintes de sarcoïdose systémique (20 à 30 % de façon infraclinique), typiquement entre **40 et 60 ans**. Point capital : **jusqu’à 25 % des cas sont isolés au cœur**, sans atteinte pulmonaire ni systémique connue (Imazio 2026).

- **Signes d’alerte et imitation d’une coronaropathie :**
  - **BAV de haut degré inexpliqué avant 60 ans** (bloc complet dans 23 à 30 % des cas, jusqu’à 44 % dans les séries biopsiées ; bloc de branche droit ou fasciculaire fréquent).
  - **Tachycardie ventriculaire soutenue ou ESV fréquentes (30 à 32 %)**, y compris à FEVG préservée.
  - **Faux airs de maladie coronaire :** anomalies segmentaires de la contraction (citées par ESC 2023 tableau 9 comme indice de coronaropathie *ou* de sarcoïdose), **amincissement du septum interventriculaire basal**, **anévrismes ventriculaires (~5 à 10 %)**, ondes Q, douleurs thoraciques par vascularite/dysfonction microvasculaire et **défauts de perfusion ne correspondant pas aux plaques coronaires spectatrices** (ESC 2023 ; Imazio 2026 ; Galafton 2025).
- **Imagerie complémentaire (cicatrice versus inflammation active) :**
  - **IRM avec LGE :** sensibilité élevée (**~95 %**) pour la fibrose/les granulomes, typiquement en plages médio-murales ou sous-épicardiques du **septum basal et des parois latérales** (souvent étendues au VD : « signe du crochet »). Un LGE étendu (≥ 5–6 segments ou ≥ 10 % de la masse du VG) signe un haut risque rythmique (ESC 2023 ; Imazio 2026).
  - **TEP au 18F-FDG (ESC 2023 Classe IIa, niveau C) :** détecte l’**inflammation myocardique active** (sensibilité 80–90 % ; spécificité proche de 100 % si des ganglions extracardiaques actifs coexistent, offrant une cible de biopsie beaucoup plus rentable qu’une biopsie endomyocardique à l’aveugle [sensibilité ~20–30 %, ~50 % si guidée]). Une préparation stricte (régime riche en lipides et pauvre en glucides ≥ 24 h + jeûne ≥ 12 h, souvent avec héparine) est indispensable pour éteindre la captation normale du cœur. Limite ESC 2023 : une TEP négative n’exclut pas une sarcoïdose fibreuse *inactive*, et une fixation cardiaque isolée se voit aussi dans certaines NDLVC (*DSP*) ou DAVD (ESC 2023 ; Imazio 2026 ; Galafton 2025).
  - **Une IRM sans LGE n’écarte pas totalement une forme active :** dans une cohorte prospective d’Ottawa (Kadoya 2026, 46 patients naïfs de traitement avec sarcoïdose cardiaque cliniquement manifeste et TEP positive), **4 patients sur 46 (8,7 %, IC 95 % : 2,4–20,8 %) n’avaient aucun LGE** — tous présentaient un BAV avancé avec FEVG préservée.
- **Critères diagnostiques :** WASOG (2014) et HRS (2014) demandent une preuve histologique (cardiaque ou extracardiaque) et l’exclusion d’autres causes dont la coronaropathie ; les critères japonais (JCS 2016) permettent un diagnostic clinique de forme isolée ; la **prise de position AHA 2024** situe le diagnostic sur un **continuum de probabilité à 6 niveaux** (certain, hautement probable, probable, possible, faible probabilité, improbable) (Cheng 2024 ; Imazio 2026).
- **Conséquences thérapeutiques :** une inflammation active symptomatique est traitée en première intention par **corticoïdes** (souvent associés à un épargneur cortisonique tel que le **méthotrexate**, l’azathioprine ou le mycophénolate ; ~50 % de rechutes, suivi par TEP à 3–6 mois et IRM sériée **ESC 2023 IIa, C**), en parallèle des traitements de l’IC. La mort subite représentant 25 à 65 % des décès, les consensus préconisent des **seuils de DAI plus bas** (y compris FEVG 36–49 % avec LGE, fixation TEP, atteinte VD ou syncope, et choix d’un DAI plutôt que d’un stimulateur simple dès qu’une stimulation pour BAV est nécessaire) (Cheng 2024 ; Imazio 2026 ; ESC 2023).`,
    },
    {
      headingFr: 'Les autres causes recherchées',
      bodyMarkdownFr: `Le tableau 20 des recommandations **ESC 2023** répertorie les causes non génétiques de CMD et souligne que **trouver un facteur déclenchant acquis n’exclut pas un variant génétique sous-jacent** : **10 à 15 %** des cardiomyopathies alcooliques, post-chimiothérapie ou du péri-partum portent également un variant génétique rare causal.

| Cause possible | Indices évocateurs | Source |
|---|---|---|
| **Hypertension artérielle** | Hypertension ancienne. Une revue de 2023 note qu’un cœur hypertensif concentrique « s’épuise » rarement vers une forme dilatée sans autre agression (comme un infarctus), même si un remodelage excentrique existe. Un LGE mineur est présent dans jusqu’à 50 % des cas, sans profil spécifique (souvent médio-mural dans les formes évoluées mal contrôlées) | Ismail 2023 |
| **Alcool** | Consommation importante ; jusqu’à 32 % des CMD dans une revue ; amélioration nette possible à l’arrêt ; 10 à 15 % portent aussi un variant génétique de CMD | Orphanou 2022 ; ESC 2023 |
| **Myocardite / infection ancienne** | LGE sous-épicardique ou médio-mural (± œdème T2) ; jusqu’à 30 % des myocardites évoluent vers une CMD | Orphanou 2022 ; ESC 2023 |
| **Cardiomyopathie héréditaire (génétique)** | Arbre généalogique sur 3–4 générations, troubles conductifs, LGE médio-mural (*LMNA*) ou en anneau (*DSP/FLNC/PLN*). Un variant rare causal est trouvé dans **jusqu’à 40 %** des CMD contemporaines (et **> 20 %** des formes sporadiques), surtout des troncatures de *TTN* | ESC 2023 ; Orphanou 2022 |
| **Valvulopathie** | Surcharge de pression ou de volume liée à une valve rétrécie ou fuyante (« conditions de charge anormales ») | ESC 2023 |
| **Toxiques, médicaments, endocrinopathies, carences, fer** | Anthracyclines, inhibiteurs de tyrosine kinase, immunothérapie, cocaïne/amphétamines/stéroïdes anabolisants, clozapine/lithium, troubles thyroïdiens ou surrénaliens, carences en vitamine B1 (thiamine) ou sélénium, hémochromatose (T2* court à l’IRM, ferritine/CSAT élevés) | ESC 2023 (tableaux 8 et 20) |

Pour le rétrécissement aortique associé, voir *Rétrécissement aortique avec FEVG réduite* ; pour la pression artérielle, *Tension artérielle et insuffisance cardiaque* ; pour l’alcool, *Tabac et alcool dans l’insuffisance cardiaque*.`,
    },
    {
      headingFr: 'Recommandations comparées, impact clinique et limites des preuves',
      bodyMarkdownFr: `### Recommandations internationales côte à côte (au 25 novembre 2026)

Les cases issues de sections non vérifiées directement en texte intégral sont signalées par *(non vérifié)*. Le choix du bilan adapté à votre situation appartient toujours à votre cardiologue.

| Question diagnostique / étiologique | ESC 2023 Cardiomyopathies (texte intégral) | ESC 2026 IC / ESC 2024 FA (texte intégral) | AHA/ACC/HFSA 2022 IC (États-Unis) | NICE NG106 (Royaume-Uni, 2018/2025) |
|---|---|---|---|---|
| **IRM avec contraste pour la cause** | **I B** au bilan initial (tableau 5) ; **IIa C** suivi et réponse thérapeutique (amylose, sarcoïdose, inflammation) | **ESC 2026 IC :** **I C** si cardiomyopathie suspectée ou cause incertaine ; « doit être envisagée » dans la CMD | Section 4.4 IRM non extraite *(non vérifié)* | Envisager l’IRM si échographie de mauvaise qualité (1.2.10) ; pas de règle de caractérisation tissulaire en routine |
| **Exclure une coronaropathie** | Imagerie par scanner pour écarter une coronaropathie : **IIa C** (tableau 6) | **ESC 2026 IC :** coronarographie **I C** (angor + forte prob.), **IIa C** (ICFER + forte prob.) ; coroscanner **IIa C** (prob. faible–modérée) | Rechercher une cause ischémique : **COR 2a, B-NR** (section 4.4, vérifié) | Évaluer la cause et les facteurs corrigibles (1.2.14) |
| **Génétique et dépistage familial** | Cas index **I B** ; conseil pré/post-test et équipe multidisciplinaire **I B** ; dépistage en cascade adulte **I B** ; fin de suivi des apparentés non porteurs à cœur normal **I C** ; pas de test sans variant familial P/LP chez apparenté sain **III C** (tableaux 8 et 14) | Non abordé dans les extraits ESC 2026 IC | Section 4.5 génétique non extraite *(non vérifié)* | Silencieux sur la génétique |
| **Cardiomyopathie rythmique (FA / ESV)** | Cite les tachyarythmies comme cause directe de CMD (section 7.2.2, non gradé) | **ESC 2024 FA :** ablation **I B** si forte probabilité ; cardioversion diagnostique **IIa C** (tableau 19) | Classes ESC 2022 VA sur ESV et section arythmies US 2022 *(non vérifié)* | Renvoie au guide NICE FA |
| **Bilan d’amylose cardiaque** | **Scintigraphie 99mTc-DPD/PYP/HMDP : I B** (tableau 6) + SPIE/UPIE/FLC obligatoires + génétique *TTR* | Non abordé dans les extraits ESC 2026 IC | Section 7.7.1 non extraite *(non vérifié)* | Non couvert |
| **Bilan de sarcoïdose cardiaque** | **TEP-18F-FDG : IIa C** (tableau 6) ; IRM sériée **IIa C** ; biopsie si incertitude **IIa C** (tableau 7) | Non abordé dans les extraits ESC 2026 IC | **AHA 2024** (résumé, non gradé) : continuum à 6 niveaux ; corticoïdes en 1re intention si active | Non couvert |
| **DAI préventif (effet de la cause)** | CMD / NDLVC FEVG ≤ 35 % > 3 mois TMO : **IIa A** ; génotype à haut risque + FEVG > 35 % + facteurs de risque : **IIa C** ; seul ou LGE/syncope à FEVG > 35 % : **IIb C** (tableaux 24 et 26) | **ESC 2026 IC :** ischémique FEVG ≤ 35 % NYHA II–III **I B1** ; non ischémique **IIa B1** | Ischémique (≥ 40 j post-IDM) et non ischémique FEVG ≤ 35 %, NYHA II–III : **COR 1, A** ; génétique arythmogène à haut risque FEVG ≤ 45 % : **COR 2a, B-NR** (vérifié) | NICE TA314 ne sépare pas ischémique et non ischémique |

- **Points d’accord et divergences :** les textes européens soutiennent fortement l’IRM avec contraste précoce (Classe I) et le dépistage génétique ciblé. En revanche, l’ESC grade le DAI préventif plus bas dans les formes non ischémiques (IIa) qu’ischémiques (I), alors que les recommandations américaines 2022 classent les deux en Classe 1 (A). *(Note interne ESC : le texte 2023 citait l’ancienne recommandation IC 2021, désormais remplacée par ESC 2026, et privilégiait une décision partagée pour le gène *LMNA* plutôt que le seuil de 10 % à 5 ans d’ESC 2022 VA.)*

### Pourquoi la cause change concrètement votre suivi

- **Seuils de DAI selon la cause et le génotype :** dans **ESC 2023**, une CMD/NDLVC avec **génotype à haut risque** (***LMNA*, *FLNC*-tronquant, *TMEM43*, *PLN*, *DSP*, *RBM20*** ; taux annuels de mort subite de 3 à 10 %) peut faire discuter un DAI **même avec une FEVG > 35 %** (**IIa C** avec facteurs de risque tels que LGE, TVNS, FEVG < 45 % ou score de risque génétique élevé ; **IIb C** sans ceux-ci). Sans gène à haut risque, un LGE ou une syncope à FEVG > 35 % relève de la **Classe IIb, C**. Le DAI est également discuté plus tôt dans la sarcoïdose cardiaque, mais pas en prévention primaire dans l’amylose (voir *Dispositifs cardiaques implantés : DAI et CRT*).
- **Risque propre de la fibrose médio-murale en CMD pure :** chez 472 patients avec CMD non ischémique suivis 5,3 ans (Gulati 2013), elle prédisait la mortalité globale (**HR ajusté 2,43**, IC 95 % : 1,50–3,92) et la mort subite ou récupérée (**HR ajusté 4,61**, IC 95 % : 2,75–7,74), confirmant Assomull 2006 (HR 5,2). Ce surrisque indépendant ne se retrouvait toutefois pas dans les cohortes de double cicatrice coronarienne (Jones 2024 ; Bawaskar 2024).
- **Test génétique et dépistage familial :** recommandés chez le cas index (**I B**) avec conseil génétique (**I B**) et dépistage en cascade des apparentés adultes (**I B**). Les apparentés non porteurs d’une mutation familiale connue à cœur normal peuvent arrêter le suivi systématique (**I C**) ; en l’absence de mutation identifiée, un dépistage initial (**I C**) puis périodique (**IIa C**, par exemple annuel à l’adolescence puis tous les 2 à 3 ans à l’âge adulte selon Orphanou 2022) est proposé.
- **Traitements ciblés, revascularisation et chances de récupération :** une cause rythmique ou toxique (alcool) offre des perspectives de récupération importantes ; environ **40 %** des CMD non ischémiques traitées présentent un remodelage inverse notable, plus souvent qu’en présence d’une cicatrice transmurale d’infarctus (Orphanou 2022 ; Shoureshi 2024 ; voir *Insuffisance cardiaque à FEVG améliorée (HFimpEF)* et *Revascularisation coronaire : pontage et stents*).

### Limites des connaissances actuelles

- **CTO unique et faiblesse globale :** aucune étude dédiée n’existe ; les cohortes disponibles excluaient les cardiomyopathies non ischémiques associées (EXPLORE ; Everaars 2021).
- **Biais de recrutement en IRM :** les taux de 16,9 % (Bawaskar 2024), 14 % (Jones 2024) et 33 % (Sokolska 2025) proviennent de patients adressés en IRM clinique et non de l’ensemble des coronariens en population générale (même si 51 % des cas de Bawaskar n’étaient pas suspectés avant l’examen).
- **Sources lues en résumé ou partiellement :** Felker (2002), McCrohon (2003), Assomull (2006), Gulati (2013), AHA 2024 sarcoïdose (Cheng 2024) et Kadoya (2026) ont été lus en résumé ; Ismail (2023) et Orphanou (2022) en extraction partielle.
- **Essais manquants :** aucun essai randomisé achevé n’établit encore le meilleur schéma immunosuppresseur dans la sarcoïdose cardiaque (essais \`CHASM-CS-RCT\` et \`REPAIR-CS\` en cours) ni ne compare directement ablation et antiarythmiques dans la cardiomyopathie aux ESV (Imazio 2026 ; Shoureshi 2024). Certains tableaux primaires américains (sections 4.4, 4.5 et 7.7.1) et ESC 2022 VA n’ont pas pu être vérifiés directement en PDF.`,
    },
  ],
  relatedArticleSlugs: [
    'cardiomyopathie-ischemique',
    'examens-et-chiffres',
    'efx-strain-troponine-et-imagerie-cardiaque',
    'occlusion-coronaire-chronique-cto',
    'dispositifs-cardiaques-dai-crt',
    'fibrillation-atriale-insuffisance-cardiaque',
    'arythmies-ventriculaires-et-antiarythmiques',
    'tension-arterielle-insuffisance-cardiaque',
    'stenose-aortique-fevg-reduite',
    'dysfonction-vg-asymptomatique-stade-b',
    'tabac-et-alcool-insuffisance-cardiaque',
    'revascularisation-pontage-stents',
    'insuffisance-cardiaque-fevg-amelioree',
    'recommandations-comparees-esc-us-nice',
    'questions-equipe-cardiologie',
    'essais-cliniques-cles',
    'glossaire-cardiologie',
    'comprendre-le-diagnostic',
    'maladies-associees',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2023 sur les cardiomyopathies (texte intégral, 124 pages)',
      detail: 'Coexistence avec la maladie coronaire, définitions CMD/NDLVC, IRM (I B), scintigraphie amylose (I B), TEP-FDG sarcoïdose (IIa C), génétique et DAI par génotype à haut risque',
    },
    {
      label: 'Bawaskar et al. (Circulation 2024, texte intégral) et Jones et al. (EJHF 2024)',
      detail: 'Registre IRM de 3 023 coronariens (16,9 % NICM/double pathologie, 51 % non suspectés) et variants génétiques de CMD dans UK Biobank',
    },
    {
      label: 'Felker (2002), Briceno & Perera (2016), McCrohon (2003), Gulati (2013), Assomull (2006) et Sokolska (2025)',
      detail: 'Définition étiologique ischémique, profils LGE et pronostic de la fibrose médio-murale',
    },
    {
      label: 'Shoureshi & Huizar (JACC 2024) et ESC 2024 sur la fibrillation atriale',
      detail: 'Cardiomyopathies induites par tachycardies, FA ou ESV (charge ≥ 10 %), limites du Holter 24 h, ablation (I B) et éviction des classe IC',
    },
    {
      label: 'Garcia-Pavia (ESC 2021) et Hassan et al. (2023)',
      detail: 'Drapeaux rouges d’amylose cardiaque, bilan scintigraphique + monoclonal obligatoire et coexistence coronarienne dans l’ATTR',
    },
    {
      label: 'Imazio (2026), Cheng (AHA 2024), Kadoya (2026) et Galafton (2025)',
      detail: 'Sarcoïdose cardiaque isolée, IRM LGE, TEP-18F-FDG, formes actives sans LGE (8,7 %), corticoïdes et seuils de DAI',
    },
    {
      label: 'Ismail (2023), Orphanou (2022), EXPLORE (2017), REVASC (2018), Everaars (2021) et Cardona (2016)',
      detail: 'Autres causes acquises/génétiques de CMD et effet d’une réouverture de CTO sur les parois à distance',
    },
    {
      label: 'Recommandations ESC 2026 IC, AHA/ACC/HFSA 2022 et NICE NG106 (2025)',
      detail: 'Imagerie diagnostique, comparaisons internationales des indications d’IRM et de DAI préventif',
    },
  ],
  disclaimerType: 'medical',
};
