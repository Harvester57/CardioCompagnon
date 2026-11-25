import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'examens-et-chiffres',
  sourceWikiPath: 'wiki/concepts/tests-and-numbers.md',
  titleFr: 'Examens et chiffres : NT-proBNP, taille du VG et cicatrice IRM',
  category: 'diagnostic',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'nt-probnp',
    'bnp',
    'peptides-natriurétiques',
    'taille-vg',
    'ett',
    'irm-cardiaque',
    'cicatrice',
    'lge',
    'viabilité',
    'normes',
  ],
  aliases: [
    'NT-proBNP',
    'BNP',
    'Peptides natriurétiques',
    'Taille du VG',
    'DTDVG',
    'LVEDD',
    'VTDi',
    'VTSi',
    'LVEDVi',
    'LVESVi',
    'Ventricule gauche dilaté',
    'LGE',
    'Rehaussement tardif',
    'Viabilité',
    'Myocarde hibernant',
    'Cicatrice IRM',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Trois familles de chiffres reviennent fréquemment sur les comptes rendus : le NT-proBNP (ou BNP), marqueur sanguin d'étirement cardiaque dont les valeurs basses écartent généralement l'insuffisance cardiaque mais que de nombreux facteurs font varier ; la taille du ventricule gauche (diamètre et volumes indexés), dont les normes dépendent de l'examen utilisé (ETT ou IRM) ; et la cicatrice à l'IRM cardiaque (rehaussement tardif, LGE), dont l'étendue est liée au pronostic et aux chances d'amélioration de la FEVG. Ces repères généraux s'interprètent toujours avec votre équipe de cardiologie.",
  sections: [
    {
      headingFr: 'Les examens habituels',
      bodyMarkdownFr: `Les fiches patients de l'AHA et du site de l'ESC (*Heart Failure Matters*) distinguent les examens courants et ceux demandés dans des situations précises :

- **Examens habituels :** interrogatoire et examen clinique, ECG, prises de sang incluant les peptides natriurétiques, radiographie thoracique et échocardiographie transthoracique (ETT).
- **Selon les besoins :** IRM cardiaque, épreuve d'effort ou test de stress, scintigraphie ou ventriculographie isotopique (MUGA), scanner cardiaque et coronarographie.
- *Heart Failure Matters* précise qu'il est très rare qu'une même personne passe l'ensemble de ces examens.
- L'IRM cardiaque n'utilise pas de rayons X (aucune irradiation) et dure environ 30 à 45 minutes selon *Heart Failure Matters* (ou 30 à 90 minutes selon l'AHA).`,
    },
    {
      headingFr: 'NT-proBNP et BNP : seuils et facteurs de variation',
      bodyMarkdownFr: `**De quoi s'agit-il ?** Le BNP est une hormone produite par le cœur, en particulier par le ventricule gauche. Elle aide les reins à éliminer le sel et l'eau et dilate les vaisseaux sanguins. Certains laboratoires dosent le BNP, d'autres le NT-proBNP : **leurs échelles sont différentes**, il faut donc toujours comparer deux résultats du même dosage au fil du temps (Cleveland Clinic).

### Les seuils figurant dans les recommandations

| Usage | Valeur | Source |
|---|---|---|
| **Insuffisance cardiaque peu probable** (ambulatoire) | NT-proBNP **< 125 pg/mL** ; BNP **< 35 pg/mL** | ESC 2026 |
| **Insuffisance cardiaque probable** (ambulatoire, NT-proBNP, nouveauté 2026) | **≥ 125 pg/mL** avant 50 ans ; **≥ 250 pg/mL** entre 50 et 75 ans ; **≥ 500 pg/mL** après 75 ans | ESC 2026 |
| **Évaluation spécialisée plus rapide** | NT-proBNP **> 2 000 pg/mL** | ESC 2026 |
| Risque très élevé aux urgences | NT-proBNP **≥ 5 000 pg/mL** | HFA 2023 |
| **Seuils d'orientation au Royaume-Uni** (comparatif) | < **400 ng/L** : IC moins probable chez un patient non traité ; **400–2 000** : cardiologue et ETT sous 6 semaines ; **> 2 000** : sous 2 semaines | NICE NG106 |
| Insuffisance cardiaque peu probable en contexte aigu (revue 2019) | NT-proBNP < 300 pg/mL ; BNP < 100 pg/mL | Brunner-La Rocca 2019 |
| Seuil d'inclusion dans l'essai PARADIGM-HF | NT-proBNP ≥ 600 pg/mL (ou ≥ 400 pg/mL si hospitalisation dans l'année) | Brunner-La Rocca 2019 |

- Les seuils ajustés à l'âge servent au **diagnostic** initial : ce ne sont ni des cibles de traitement ni une échelle de gravité chez une personne déjà diagnostiquée (ESC 2026).
- Il n'existe pas de seuil unique de confirmation absolue : plus le taux est élevé, plus la probabilité d'insuffisance cardiaque augmente (ESC 2026).
- **Pourquoi les sources diffèrent :** une page patient américaine (Cleveland Clinic) cite un NT-proBNP « normal » inférieur à 125 (avant 75 ans) ou inférieur à 450 (après 75 ans), et évoque une insuffisance cardiaque possible au-dessus de 900. Aucune recommandation analysée ici n'utilise 450 ou 900.

### Ce qui fait monter ou baisser le résultat

| Fait monter le NT-proBNP / BNP | Fait baisser le résultat |
|---|---|
| Âge avancé, sexe féminin, fibrillation atriale (FA), insuffisance rénale, valvulopathie, épaississement du VG, infarctus, embolie pulmonaire ou hypertension pulmonaire, BPCO, apnée du sommeil, anémie sévère, infection grave, etc. | Obésité, ascendance africaine, et **médicaments de l'insuffisance cardiaque** (IEC/ARA2/ARNI, bêtabloquants, ARM, iSGLT2) |

Source : recommandations ESC 2026, tableau 9.

- **Sacubitril/valsartan (ARNI — *Entresto*) et BNP :** ce médicament bloque une enzyme qui dégrade les peptides natriurétiques. Il peut faire monter légèrement le **BNP**, mais n'augmente pas directement le **NT-proBNP** ; c'est pourquoi le NT-proBNP est préféré chez les patients prenant un ARNI (ESC 2026 ; Brunner-La Rocca 2019 ; consensus HFA 2019 et 2023).
- **Introduction de certains bêtabloquants :** des bêtabloquants non vasodilatateurs (comme le métoprolol) peuvent élever transitoirement les peptides natriurétiques pendant la titration (consensus HFA 2019).
- **Fonction rénale :** une baisse de la fonction rénale élève le NT-proBNP, mais l'ESC indique que les résultats ne doivent pas être écartés pour autant (ESC 2026).
- **Ajustements diagnostiques proposés :** le consensus HFA 2023 suggère de relever les seuils ambulatoires de 15 à 35 % en cas d'insuffisance rénale et de 50 % ou 100 % en cas de fibrillation atriale (selon la fréquence cardiaque), et de les abaisser de 25 à 40 % en cas d'obésité, tout en précisant que ces ajustements reposent davantage sur l'avis d'experts que sur des preuves solides.
- **Valeurs plus basses qu'attendu :** le NICE (NG106) rappelle que l'obésité, une origine africaine ou afro-caribéenne et les traitements de l'insuffisance cardiaque (diurétiques, IEC, ARNI, ARA2, bêtabloquants, ARM) peuvent abaisser les peptides natriurétiques.
- **Obésité en détail :** la prise de position **HFA 2025 sur l'obésité** explique que le tissu adipeux accélère l'élimination des peptides natriurétiques et que l'insulinorésistance diminue leur production ; un résultat apparemment normal est donc moins rassurant chez une personne en situation d'obésité, et la recherche clinique de rétention d'eau prend davantage d'importance. Ce texte rapporte un seuil d'exclusion **proposé** de NT-proBNP à **50 pg/mL** en ambulatoire pour un **IMC supérieur ou égal à 35 kg/m²**. Ce chiffre est issu de cohortes de recherche sur la FEVG préservée (*HFpEF*), constitue une proposition plutôt qu'un seuil de recommandation, et la numérotation des citations de ce paragraphe dans le document original paraît décalée. L'obésité et la fibrillation atriale agissent en sens opposé et peuvent donc en partie s'annuler (prise de position HFA 2025 sur l'obésité). Le consensus **ADA 2022** sur le diabète note lui aussi que l'obésité abaisse les peptides natriurétiques même lorsque le risque est élevé.
  - *Point de repère :* ces seuils d'exclusion servent au **diagnostic** de l'insuffisance cardiaque. Ils ne s'appliquent pas chez une personne déjà diagnostiquée, pour laquelle la tendance de ses propres résultats au fil du temps importe davantage.
- **Dépistage dans le diabète (sans objet une fois l'IC diagnostiquée) :** le consensus **ADA 2022** conseille un dosage au moins annuel de BNP, de NT-proBNP ou de troponine ultrasensible chez les adultes diabétiques, en considérant un NT-proBNP ≥ 125 pg/mL (ou un BNP ≥ 50 pg/mL) comme anormal. Il s'agit d'un avis d'experts s'appuyant sur des essais de dépistage de petite taille (voir *Maladies associées : rein, FA, valves, diabète*).
- **Valeur pronostique et pilotage du traitement :** des taux plus élevés sont associés à un risque plus grand dans l'insuffisance cardiaque chronique (Brunner-La Rocca 2019). En revanche, les recommandations ESC 2026 indiquent que les essais de traitement guidé par le BNP/NT-proBNP dans l'ICFER ont donné des résultats discordants, et que le dosage systématique pour ajuster les doses de diurétiques n'est pas étayé par les preuves actuelles. Le NICE n'envisage le suivi du NT-proBNP pour optimiser le traitement qu'en milieu spécialisé, chez les personnes de moins de 75 ans avec un DFGe supérieur à 60 mL/min/1,73 m².`,
    },
    {
      headingFr: 'Quelle variation entre deux dosages est significative ?',
      bodyMarkdownFr: `Aucune recommandation analysée (ESC, américaine ou NICE) ne fixe de règle chiffrée. Deux textes de consensus de la Heart Failure Association (HFA) de l'ESC proposent des repères non gradés, tandis que des études de variabilité biologique chez des patients **stables** apportent un autre éclairage :

| Étude | Population | Variation nécessaire pour dépasser la fluctuation normale |
|---|---|---|
| Meijers 2017 (texte intégral) | 83 patients IC stables | NT-proBNP : **baisse d'environ 40 %** ou **hausse d'environ 105 %** |
| Bruins 2004 | 43 patients stables, d'une semaine à l'autre | Environ 98 % (NT-proBNP) ; 113 % (BNP) |
| Wu 2003 | Patients stables | Environ 90 % (NT-proBNP) ; 130 % (BNP) |
| Schou 2007 | 20 patients | 23 % (NT-proBNP) ; 43 % (BNP) — petite étude aux valeurs atypiquement basses |

- **Hausses et baisses ne sont pas symétriques.** Les taux variant sur une échelle multiplicative, une baisse d'environ 40 % et une hausse d'environ 105 % étaient aussi « inhabituelles » l'une que l'autre dans Meijers 2017.
- **Le NT-proBNP fluctue moins que le BNP**, si bien que des variations plus modestes y sont plus informatives (Bruins 2004 ; Wu 2003).
- **L'heure du prélèvement joue légèrement :** dans une étude, les deux marqueurs augmentaient entre 8 h et 10 h du matin ; il est donc préférable de comparer des prélèvements réalisés à des horaires voisins (Bruins 2004).
- *Note de synthèse :* pris ensemble, ces travaux suggèrent qu'une variation inférieure à environ 40 % dans un sens ou dans l'autre peut relever de la fluctuation habituelle ; il s'agit d'une lecture des études de variabilité, et non d'une règle clinique validée.

**Ce que disent les consensus de la Heart Failure Association (HFA) :**

| Document | Énoncé | Appui cité |
|---|---|---|
| Consensus HFA 2019 | Une variation de **100 % ou plus** par rapport au niveau stable (« poids sec ») évoque un changement clinique, par exemple une aggravation chez un patient consultant pour symptômes | Études de variabilité, dont Meijers 2017 |
| Consensus HFA 2019 (autre section) | Une variation d'**au moins 50 %** est nécessaire avant d'être probablement significative | Aucune référence citée |
| Consensus HFA 2019 (autre section) | La variabilité normale peut aller **jusqu'au doublement** ; dans l'IC, une variation de 50 % semble refléter un changement réel des pressions intracardiaques | Études de variabilité et prise de position de 2012 |
| Consensus HFA 2023 | Dans l'IC traitée sans surcharge hydrique, une hausse de **plus de 25 %** au-dessus du niveau stable (« sec ») évoque une aggravation, mais un examen clinique complet reste indispensable | Consensus 2019 et deux autres publications |

- **Aucun de ces seuils n'est gradé**, les trois formulations de 2019 ne concordent pas pleinement entre elles, et aucun des deux textes ne définit un seuil de **baisse** significative ni un intervalle optimal entre dosages.
- **Quand le dosage aide vraiment :** le consensus HFA 2019 précise qu'il est inutile de répéter le dosage à chaque consultation. Il est surtout utile lorsque l'origine cardiaque de nouveaux symptômes est incertaine, à condition de disposer d'une valeur de référence en période stable. En cas d'aggravation, une hausse nette renforce l'hypothèse d'une décompensation cardiaque ; l'absence de variation oriente vers une autre cause. Le résultat s'interprète toujours avec les symptômes, le poids et la fonction rénale.
- *Point de vigilance :* le seuil de +25 % avancé en 2023 est nettement inférieur à la hausse d'environ +105 % mesurée comme variation normale par Meijers 2017. Les questions sur l'évolution de vos résultats relèvent de votre cardiologue.

### À quoi une baisse du NT-proBNP a été associée

- **PROVE-HF (794 patients débutant sacubitril/valsartan, 54 % de cause ischémique) :** le NT-proBNP médian a baissé de 816 à 455 pg/mL (environ −30 % à J14 et −37 % à 1 an). La FEVG est passée de 28,2 % à 37,8 % et le ventricule a diminué de taille. Des baisses plus fortes s'accompagnaient d'un meilleur remodelage, mais la corrélation restait modeste (environ 0,4) et les résultats n'étaient pas ventilés par cause ischémique.
- **Analyse GUIDE-IT (2019) :** les patients ayant atteint un NT-proBNP **≤ 1 000 pg/mL** dans les 90 jours ont eu nettement moins d'hospitalisations pour IC ou de décès cardiovasculaires (HR 0,26). Seuls 31 % y sont parvenus, et ils présentaient moins souvent une maladie ischémique (31 % contre 57 %). C'est une association, non la preuve qu'abaisser le chiffre améliore le pronostic.
- **Essai GUIDE-IT (2017) :** ajuster délibérément le traitement pour descendre sous 1 000 pg/mL n'a **pas** amélioré les événements cliniques par rapport à une prise en charge habituelle rigoureuse (HR 0,98) ; les taux ont baissé de manière comparable dans les deux groupes (−53 % contre −48 %).
- **Consensus HFA 2019 :** qualifie le traitement guidé par le NT-proBNP de controversé et ne valide pas de cible chiffrée. Sa méta-analyse de six essais dans l'ICFER montrait une baisse de la mortalité toutes causes (RR 0,80), mais les essais positifs visaient moins de 1 000 pg/mL et le bénéfice est moins probable lorsque le suivi usuel est déjà intensif.`,
    },
    {
      headingFr: 'Taille du ventricule gauche : quand parle-t-on de dilatation ?',
      bodyMarkdownFr: `La taille du ventricule gauche doit être exprimée en **volumes indexés à la surface corporelle (mL/m²)**. Estimer les volumes à partir d'un simple diamètre n'est plus recommandé, car la maladie déforme souvent la géométrie ventriculaire (ASE/EACVI 2015).

### Valeurs de référence en échocardiographie transthoracique (ETT 2D, adulte)

| Mesure | Homme : valeurs normales | Femme : valeurs normales |
|---|---|---|
| Diamètre télédiastolique (DTDVG / LVEDD) | 42–58 mm | 38–52 mm |
| Volume télédiastolique indexé (VTDi / LVEDVi) | 34–**74** mL/m² | 29–**61** mL/m² |
| Volume télésystolique indexé (VTSi / LVESVi) | 11–**31** mL/m² | 8–**24** mL/m² |

Toute valeur au-dessus de la limite supérieure est hors norme (ASE/EACVI 2015).

**Tranches de sévérité de la FEVG en ETT :** modérément anormale entre 30 et 40 %, sévèrement anormale en dessous de 30 % pour les deux sexes ; légèrement anormale entre 41 et 51 % chez l'homme et entre 41 et 53 % chez la femme (ASE/EACVI 2015). Les tranches léger/modéré/sévère pour la *taille* du VG ne sont que suggérées en annexe et n'ont pas fait consensus au sein du groupe rédacteur.

### Les valeurs de référence en IRM cardiaque sont plus élevées

| Mesure (IRM cardiaque) | Homme : valeurs normales | Femme : valeurs normales |
|---|---|---|
| Volume télédiastolique indexé (VTDi) | 50–108 mL/m² | 50–96 mL/m² |
| Volume télésystolique indexé (VTSi) | 11–47 mL/m² | 10–40 mL/m² |

La revue de référence (Kawel-Boehm 2020) propose des tableaux différents selon que les muscles papillaires à l'intérieur du ventricule sont inclus dans le volume sanguin ou dans la masse musculaire ; les chiffres ci-dessus proviennent du tableau 2, qui compte les muscles papillaires en **masse musculaire** (les écarts entre tableaux reflètent aussi des populations différentes ; un erratum de 2021 n'a modifié que les valeurs aortiques). Les limites supérieures diminuent avec l'âge et chaque centre peut utiliser ses propres bornes.

- **L'ETT mesure généralement des volumes plus petits que l'IRM** (ASE/EACVI 2015). Un ventricule jugé « dilaté » selon les normes ETT peut donc parfois entrer dans les bornes normales de l'IRM (mise en regard directe des deux référentiels).
- **La taille compte pour le pronostic :** dans REVIVED-BCIS2, le volume télésystolique du VG prédisait l'évolution alors que la FEVG ne la prédisait plus après ajustement.
- Les recommandations ESC 2026 désignent l'IRM cardiaque comme la **méthode de référence (gold standard)** pour mesurer les volumes ventriculaires gauches.`,
    },
    {
      headingFr: "Cicatrice (LGE) et viabilité à l'IRM cardiaque",
      bodyMarkdownFr: `**Les termes clés** (revue Ralota 2025) :

- **Sidération (stunning) :** muscle restant faible quelque temps après un manque de perfusion bref, même une fois le flux rétabli.
- **Hibernation :** muscle maintenu vivant par un débit sanguin chroniquement réduit, mais qui ne se contracte plus normalement.
- **Viabilité :** muscle affaibli susceptible de récupérer si son apport sanguin est restauré.
- **Rehaussement tardif au gadolinium (LGE) :** après injection d'un produit de contraste, le tissu cicatriciel apparaît brillant à l'IRM ; un muscle sans LGE est considéré comme viable.

**Cotation de la cicatrice.** Chaque segment de la paroi ventriculaire est classé selon la proportion d'épaisseur de paroi touchée par la cicatrice : 0 %, 1–25 %, 26–50 %, 51–75 % ou 76–100 % (REVIVED-BCIS2). Une règle classique veut que même une paroi amincie puisse récupérer si la cicatrice occupe **50 % ou moins** de l'épaisseur (Ralota 2025).

### Ce que montrent les essais cliniques

- **Analyse de viabilité REVIVED-BCIS2** (610 patients, FEVG ≤ 35 %, maladie coronaire étendue) :
  - L'**étendue du muscle viable n'a pas permis d'identifier qui bénéficiait des stents (angioplastie)**. Les stents n'ont pas modifié les événements globaux (36,3 % contre 36,2 %).
  - **Une cicatrice plus étendue prédisait un pronostic plus sombre :** chaque tranche supplémentaire de 10 % de ventricule cicatriciel augmentait le risque de décès ou d'hospitalisation pour IC (HR 1,18).
  - **Une cicatrice plus étendue prédisait une moindre récupération de la FEVG**, alors que la quantité de muscle viable ne prédisait pas cette récupération.
  - La FEVG médiane a progressé de 4,7 points à 6 mois ; chaque gain de 5 points était associé à moins d'événements ultérieurs.
- **Sous-étude de viabilité STICH (pontage aorto-coronarien) :** le bénéfice de survie du pontage ne dépendait pas de la viabilité ; la viabilité était associée à une amélioration de la FEVG avec ou sans chirurgie (Ralota 2025).
- **Position des recommandations (ESC 2026) :** les preuves manquent pour utiliser les tests de viabilité afin de sélectionner les patients candidats à une revascularisation. L'IRM avec LGE doit en revanche être envisagée pour distinguer une atteinte ischémique d'une atteinte non ischémique dans un cœur dilaté (voir *Revascularisation coronaire : pontage et stents*).

### Épaisseur de la cicatrice et probabilité de récupération segmentaire

L'étude historique de **Kim et al. (NEJM 2000)** a inclus 50 patients (FEVG moyenne 43 % ; NYHA IV exclus) ayant passé une IRM avant pontage ou angioplastie ; chez les 41 patients réexaminés environ 11 semaines après le geste, la récupération de chaque segment faible a été évaluée :

| Épaisseur de cicatrice dans la paroi | Tous segments faibles | Segments très affaiblis ou pire | Segments immobiles (akinétiques) |
|---|---|---|---|
| Aucune (0 %) | 256 sur 329 (**78 %**) | 128 sur 148 (86 %) | 12 sur 12 (100 %) |
| 1–25 % | 109 sur 183 (**60 %**) | 56 sur 86 (65 %) | 23 sur 28 (82 %) |
| 26–50 % | 46 sur 110 (**42 %**) | 29 sur 68 (43 %) | 9 sur 20 (45 %) |
| 51–75 % | 13 sur 124 (**10 %**) | 10 sur 103 (10 %) | 4 sur 54 (7 %) |
| 76–100 % | 1 sur 58 (**2 %**) | 0 sur 57 | 0 sur 46 |

- **La récupération diminuait progressivement d'une tranche à l'autre**, ce qui conduit les auteurs à déconseiller de se fier à un seuil binaire unique (Kim 2000).
- **Au seuil de 25 %**, 71 % des segments classés viables ont récupéré et 79 % de ceux classés non viables n'ont pas récupéré (88 % et 89 % pour les segments immobiles).
- **FEVG globale :** la FEVG moyenne est passée de 43 % à 47 %, et 44 % des patients ont gagné au moins 5 points. Le facteur prédictif du gain était la proportion du ventricule faible mais peu cicatriciel (≤ 25 % d'épaisseur, corrélation 0,70).
- **Synthèse groupée (Romero 2012, 24 études, 698 patients) :** l'imagerie de cicatrice (LGE) repérait très bien les segments susceptibles de récupérer (sensibilité 95 %), tandis que l'IRM de stress à la dobutamine confirmait mieux cette récupération (spécificité 91 %).
- **Segments ne signifient pas survie :** la récupération d'un segment après revascularisation ne garantit pas un allongement de la durée de vie, et REVIVED-BCIS2 a montré que la viabilité ne permettait pas de sélectionner les patients tirant bénéfice des stents.

**La localisation de la cicatrice renseigne aussi sur la cause.** Une cicatrice d'infarctus débute sous la paroi interne (sous-endocardique) et peut s'étendre à toute l'épaisseur dans le territoire d'une artère coronaire. Une cicatrice en plein milieu de la paroi (médio-murale) ou sur sa face externe (sous-épicardique) évoque une autre cause (cardiomyopathie non ischémique, myocardite ancienne). Dans l'étude de référence de McCrohon (2003), tous les patients atteints de maladie coronaire présentaient un profil sous-endocardique/transmural, tandis que 59 % des patients atteints de cardiomyopathie dilatée n'avaient aucune cicatrice (voir *Confirmer la cause de la dysfonction du ventricule gauche*).`,
    },
    {
      headingFr: 'Au-delà du bilan standard : EFX, strain (GLS), troponine, Holter et imagerie d’ischémie',
      bodyMarkdownFr: `Les courriers de cardiologie dans l'ICFER ischémique comportent fréquemment cinq examens plus spécialisés en complément de la FEVG, de la taille du VG et du NT-proBNP :

- l’**épreuve d’effort cardiorespiratoire (EFX / VO2 max et pente VE/VCO2)** pour calibrer la réadaptation cardiaque (SMR), démasquer une limitation cachée ou évaluer une insuffisance cardiaque avancée ;
- le **strain longitudinal global (\`GLS\`)** à l’échocardiographie (normale autour de −18 % à −22 %, valeur dépendante de la marque d’échographe) ;
- la **troponine cardiaque ultrasensible (\`hs-cTnT\` / \`hs-cTnI\`)**, souvent modérément élevée et stable dans l’ICFER chronique (lésion myocardique chronique, distincte d’un infarctus aigu) ;
- les **enregistreurs ambulatoires du rythme** (Holter 24–48 h, patchs ECG 7–14 jours et moniteur cardiaque implantable) quantifiant la FA silencieuse, les TV non soutenues et la **charge en extrasystoles ventriculaires (ESV)** ;
- l’**imagerie anatomique ou fonctionnelle d’ischémie coronaire** (coroscanner, IRM de perfusion sous stress, TEP cardiaque, scintigraphie SPECT et échocardiographie de stress).

Ces cinq examens sont détaillés dans *EFX (VO2 max), strain (GLS), troponine chronique, Holter et imagerie d’ischémie*.`,
    },
  ],
  relatedArticleSlugs: [
    'efx-strain-troponine-et-imagerie-cardiaque',
    'anevrisme-ventricule-gauche',
    'ventricule-droit-et-hypertension-pulmonaire',
    'maladie-renale-insuffisance-cardiaque',
    'fuite-mitrale-secondaire',
    'fraction-dejection',
    'cardiomyopathie-ischemique',
    'insuffisance-cardiaque-fevg-amelioree',
    'revascularisation-pontage-stents',
    'glossaire-cardiologie',
    'questions-equipe-cardiologie',
    'confirmer-la-cause-dysfonction-vg',
    'maladies-associees',
    'recommandations-comparees-esc-us-nice',
    'stenose-aortique-fevg-reduite',
    'occlusion-coronaire-chronique-cto',
    'thrombus-vg-et-anticoagulants',
    'telesurveillance-insuffisance-cardiaque',
    'poids-obesite-et-denutrition',
  ],
  sources: [
    { label: 'Recommandations ESC 2026 (peptides natriurétiques, imagerie et section 11.6.1)', detail: "Seuils d'exclusion et seuils liés à l'âge, tableau 9, effet des ARNI, viabilité, IRM comme référence et dosage guidé" },
    { label: 'Brunner-La Rocca et al. (2019)', detail: "Seuils aigus, mécanisme avec les ARNI et seuils d'inclusion dans PARADIGM-HF" },
    { label: 'Consensus HFA 2019 (Mueller) et HFA 2023 (Bayés-Genís)', detail: 'Algorithmes NT-proBNP, valeur stable (« sèche »), seuils de variation et ajustements proposés' },
    { label: 'Meijers (2017), Bruins (2004), Wu (2003) et Schou (2007)', detail: 'Variabilité biologique du NT-proBNP et du BNP chez les patients stables' },
    { label: 'PROVE-HF (2019), GUIDE-IT (2017) et analyse GUIDE-IT (2019)', detail: 'Évolution du NT-proBNP sous ARNI et essai randomisé du traitement guidé par NT-proBNP' },
    { label: 'ASE/EACVI (2015)', detail: 'Valeurs de référence en échocardiographie 2D et tranches de sévérité de la FEVG' },
    { label: 'Kawel-Boehm et al. (2020) et erratum (2021)', detail: 'Valeurs de référence en IRM cardiaque et conventions sur les muscles papillaires' },
    { label: 'REVIVED-BCIS2 (viabilité 2023 et ETT vs IRM) et Ralota (2025)', detail: 'Cotation du LGE, viabilité, pronostic et revue STICH / PARR-2' },
    { label: 'Kim et al. (NEJM 2000) et Romero et al. (2012)', detail: "Probabilité de récupération segmentaire selon l'épaisseur de cicatrice LGE et méta-analyse IRM" },
    { label: 'McCrohon et al. (2003)', detail: 'Répartition anatomique des cicatrices LGE selon la cause' },
    { label: 'NICE NG106 (2025), AHA, Cleveland Clinic et Heart Failure Matters', detail: "Seuils d'orientation britanniques et ressources patients sur les examens courants" },
    { label: "Prise de position HFA 2025 sur l'obésité et l'insuffisance cardiaque", detail: "Texte intégral : mécanismes des peptides natriurétiques abaissés dans l'obésité et seuil d'exclusion proposé à 50 pg/mL pour un IMC ≥ 35 kg/m²" },
    { label: 'Consensus ADA 2022 (diabète et insuffisance cardiaque)', detail: "Texte intégral : dépistage annuel par peptides natriurétiques dans le diabète et baisse des taux en cas d'obésité" },
  ],
  disclaimerType: 'medical',
};
