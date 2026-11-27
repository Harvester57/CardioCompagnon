import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'examens-et-chiffres',
  sourceWikiPath: 'wiki/concepts/tests-and-numbers.md',
  titleFr: 'Examens et chiffres : NT-proBNP, taille du VG et cicatrice IRM',
  category: 'diagnostic',
  readingTier: 'essential',
  asOf: '2026-11-26',
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
    "Sur vos comptes rendus de cardiologie, trois familles de chiffres reviennent souvent : le NT-proBNP (un marqueur sanguin), la taille de votre ventricule gauche et l'aspect d'une éventuelle cicatrice à l'IRM. Chacun obéit à des normes qui dépendent de l'examen réalisé et de votre situation personnelle. Cette page vous donne des repères simples pour mieux comprendre vos résultats et préparer vos questions à votre cardiologue.",
  keyTakeawaysFr: [
    "Comparez toujours le même dosage sanguin (NT-proBNP avec NT-proBNP) et privilégiez le NT-proBNP si vous prenez du sacubitril/valsartan (Entresto).",
    "Le NT-proBNP fluctue naturellement et varie avec l'âge, les reins, le poids ou la fibrillation atriale : c'est son évolution dans le temps avec vos symptômes qui compte.",
    "Les normes de taille du ventricule gauche sont plus élevées en IRM qu'en échographie (ETT) : comparez toujours deux examens réalisés avec la même technique.",
    "À l'IRM cardiaque, la localisation et l'étendue d'une cicatrice aident votre cardiologue à confirmer la cause et à estimer les chances de récupération de votre cœur.",
  ],
  sections: [
    {
      headingFr: 'Les examens habituels de votre suivi',
      bodyMarkdownFr: `Il est très rare qu'une même personne passe tous les examens existants. Votre cardiologue choisit ceux qui répondent à votre situation :

- **Examens courants :** interrogatoire, examen clinique, électrocardiogramme (ECG), prises de sang (dont les peptides natriurétiques), radiographie thoracique et échocardiographie transthoracique (ETT).
- **Examens demandés selon les besoins :** IRM cardiaque, épreuve d'effort ou test de stress, scintigraphie, scanner cardiaque et coronarographie.
- **À propos de l'IRM cardiaque :** elle n'utilise pas de rayons X (aucune irradiation) et dure en général entre 30 et 45 minutes (parfois jusqu'à 90 minutes selon le protocole).`,
    },
    {
      headingFr: 'NT-proBNP et BNP : comprendre ce marqueur sanguin',
      bodyMarkdownFr: `Le **BNP** est une hormone libérée par le cœur lorsque ses parois sont étirées. Certains laboratoires dosent le **BNP**, d'autres le **NT-proBNP** : leurs échelles étant différentes, il faut toujours comparer deux résultats du **même dosage** dans le temps.

### Repères utilisés au moment du diagnostic

- Un **NT-proBNP < 125 pg/mL** (ou **BNP < 35 pg/mL**) en consultation rend une insuffisance cardiaque peu probable.
- Pour évoquer le diagnostic en ambulatoire, les seuils de NT-proBNP tiennent compte de l'âge : **≥ 125 pg/mL** avant 50 ans, **≥ 250 pg/mL** entre 50 et 75 ans, et **≥ 500 pg/mL** après 75 ans. Au-delà de **2 000 pg/mL**, une évaluation spécialisée plus rapide est recommandée.
- **Important si vous êtes déjà diagnostiqué :** ces seuils servent au diagnostic initial. Ce ne sont ni une cible chiffrée à atteindre absolument, ni une note de gravité isolée. C'est surtout la tendance de vos résultats, lue avec vos symptômes et votre poids, qui aide votre cardiologue.

### Ce qui fait monter ou baisser le résultat

| Peut faire monter le NT-proBNP / BNP | Peut faire baisser le résultat |
|---|---|
| Âge avancé, sexe féminin, fibrillation atriale (FA), insuffisance rénale, valvulopathie, épaississement du ventricule gauche, infarctus, apnée du sommeil, BPCO, anémie sévère, infection grave | Obésité, ascendance africaine, et **médicaments de l'insuffisance cardiaque** (IEC, ARA2, ARNI, bêtabloquants, ARM, iSGLT2) |

### Trois points pratiques pour vos prises de sang

- **Si vous prenez du sacubitril/valsartan (*Entresto*) :** ce traitement peut faire monter légèrement le BNP sans que votre cœur aille moins bien. Votre équipe privilégie donc le dosage du **NT-proBNP**.
- **Des variations naturelles existent :** même lorsque tout est stable, le NT-proBNP peut fluctuer sensiblement d'une prise de sang à l'autre (parfois jusqu'à 40 % ou plus) et varier légèrement selon l'heure de la matinée. Il est donc inutile de le doser à chaque consultation ; il est surtout utile en cas de nouveau symptôme pour savoir si le cœur est en cause.
- **En cas d'obésité ou d'insuffisance rénale :** l'obésité abaisse le chiffre (un taux bas est donc moins rassurant à lui seul) et une baisse de la fonction rénale l'élève, sans que le résultat perde son intérêt pour votre cardiologue.`,
    },
    {
      headingFr: "Taille du ventricule gauche : ETT et IRM n'ont pas les mêmes normes",
      bodyMarkdownFr: `Pour savoir si votre ventricule gauche est dilaté, les cardiologues privilégient les **volumes indexés à votre surface corporelle (en mL/m²)** plutôt qu'un simple diamètre, car la forme du cœur peut se modifier après un infarctus.

### Valeurs de référence en échocardiographie transthoracique (ETT 2D, adulte)

| Mesure | Homme : valeurs normales | Femme : valeurs normales |
|---|---|---|
| Diamètre télédiastolique (DTDVG / LVEDD) | 42–58 mm | 38–52 mm |
| Volume télédiastolique indexé (VTDi / LVEDVi) | 34–**74** mL/m² | 29–**61** mL/m² |
| Volume télésystolique indexé (VTSi / LVESVi) | 11–**31** mL/m² | 8–**24** mL/m² |

### Valeurs de référence en IRM cardiaque (plus élevées qu'en ETT)

| Mesure (IRM cardiaque) | Homme : valeurs normales | Femme : valeurs normales |
|---|---|---|
| Volume télédiastolique indexé (VTDi) | 50–108 mL/m² | 50–96 mL/m² |
| Volume télésystolique indexé (VTSi) | 11–47 mL/m² | 10–40 mL/m² |

**À retenir :**

- **Ne comparez jamais un volume mesuré en ETT avec un volume mesuré en IRM.** L'ETT donne habituellement des volumes plus petits que l'IRM (qui est la méthode de référence pour les volumes). Un cœur jugé dilaté en ETT peut parfois rester dans les bornes normales de l'IRM.
- Les limites supérieures diminuent légèrement avec l'âge et peuvent varier selon les conventions du centre d'imagerie.
- La taille du ventricule gauche (en particulier son volume en fin de contraction, le VTSi) complète utilement le chiffre de FEVG pour suivre l'évolution de votre cœur.`,
    },
    {
      headingFr: "Cicatrice et viabilité à l'IRM cardiaque",
      bodyMarkdownFr: `Quatre termes reviennent souvent sur un compte rendu d'IRM cardiaque :

- **Sidération (*stunning*) :** zone de muscle qui reste faible quelque temps après un manque d'oxygène bref, avant de pouvoir récupérer.
- **Hibernation :** muscle encore vivant mais qui se contracte peu en raison d'un apport sanguin chroniquement réduit.
- **Viabilité :** muscle affaibli susceptible de récupérer sa contraction.
- **Rehaussement tardif au gadolinium (*LGE*) :** après injection d'un produit de contraste, le tissu cicatriciel apparaît plus clair à l'IRM ; une zone sans rehaussement tardif est considérée comme viable.

**Ce que regarde votre cardiologue sur ces images :**

- **L'épaisseur de la cicatrice dans la paroi.** Chaque segment du cœur est évalué de 0 % à 100 % d'épaisseur cicatricielle. Plus la cicatrice est fine (notamment en dessous de 25 à 50 % de l'épaisseur), plus le segment a de chances de récupérer. En revanche, une cicatrice qui traverse presque toute la paroi récupère rarement.
- **L'intérêt pratique pour les décisions.** Une cicatrice moins étendue est associée à de meilleures chances de voir la FEVG progresser sous traitement. En revanche, les recommandations actuelles rappellent qu'un test de viabilité ne suffit pas à lui seul à décider d'une pose de stents ou d'un pontage (voir *Viabilité myocardique : hibernation, cicatrice et tests de viabilité*, *Thèse : tests de viabilité myocardique et survie après revascularisation* et *Revascularisation coronaire : pontage et stents*).
- **La localisation de la cicatrice aide à confirmer la cause.** Une cicatrice d'infarctus débute sous la paroi interne du cœur (sous-endocardique) dans le territoire d'une artère coronaire. Une cicatrice située au milieu de la paroi ou sur sa face externe oriente plutôt vers une autre cause (cardiomyopathie non ischémique, ancienne myocardite — voir *Confirmer la cause de la dysfonction du ventricule gauche*).`,
    },
    {
      headingFr: 'Au-delà du bilan standard : cinq examens spécialisés',
      bodyMarkdownFr: `Votre compte rendu de cardiologie peut mentionner cinq examens plus spécialisés en complément de la FEVG, de la taille du ventricule gauche et du NT-proBNP :

- l'**épreuve d'effort cardiorespiratoire (EFX / VO2 max et pente VE/VCO2)** pour calibrer la réadaptation cardiaque (SMR), repérer une limitation cachée ou évaluer une insuffisance cardiaque avancée ;
- le **strain longitudinal global (\`GLS\`)** à l'échocardiographie (normale autour de −18 % à −22 %, valeur dépendante de la marque d'échographe) ;
- la **troponine cardiaque ultrasensible (\`hs-cTnT\` / \`hs-cTnI\`)**, souvent modérément élevée et stable dans l'insuffisance cardiaque chronique (à distinguer d'un infarctus aigu) ;
- les **enregistreurs ambulatoires du rythme** (Holter 24–48 h, patchs ECG 7–14 jours et moniteur cardiaque implantable) pour repérer une fibrillation atriale silencieuse, des tachycardies ventriculaires non soutenues ou quantifier des extrasystoles ventriculaires ;
- l'**imagerie d'ischémie coronaire** (coroscanner, IRM de perfusion sous stress, TEP cardiaque, scintigraphie SPECT et échocardiographie de stress).

Ces cinq examens sont détaillés dans *EFX (VO2 max), strain (GLS), troponine chronique, Holter et imagerie d’ischémie*.`,
    },
    {
      headingFr: "Données d'études et recommandations comparées : NT-proBNP",
      depth: 'evidence',
      bodyMarkdownFr: `### Comparatif des seuils selon les référentiels

| Usage | Valeur | Source |
|---|---|---|
| **IC peu probable** (ambulatoire) | NT-proBNP **< 125 pg/mL** ; BNP **< 35 pg/mL** | ESC 2026 |
| **IC probable** (ambulatoire, NT-proBNP, nouveauté 2026) | **≥ 125 pg/mL** (< 50 ans) ; **≥ 250 pg/mL** (50–75 ans) ; **≥ 500 pg/mL** (> 75 ans) | ESC 2026 |
| **Évaluation spécialisée rapide** | NT-proBNP **> 2 000 pg/mL** | ESC 2026 |
| Risque très élevé aux urgences | NT-proBNP **≥ 5 000 pg/mL** | HFA 2023 |
| **Orientation au Royaume-Uni** | < **400 ng/L** : IC moins probable ; **400–2 000** : bilan sous 6 semaines ; **> 2 000** : sous 2 semaines | NICE NG106 |
| IC peu probable en contexte aigu | NT-proBNP < 300 pg/mL ; BNP < 100 pg/mL | Brunner-La Rocca 2019 |
| Inclusion dans PARADIGM-HF | NT-proBNP ≥ 600 pg/mL (ou ≥ 400 si hospitalisation dans l'année) | Brunner-La Rocca 2019 |

- **Ajustements et contextes particuliers.** La page patient de la Cleveland Clinic cite 125 / 450 / 900 pg/mL (seuils non repris par l'ESC ou le NICE). Le consensus **HFA 2023** suggère (avis d'experts) de relever les seuils ambulatoires de 15 à 35 % en cas d'insuffisance rénale et de 50 à 100 % en cas de FA, et de les abaisser de 25 à 40 % en cas d'obésité. La prise de position **HFA 2025 sur l'obésité** rapporte un seuil d'exclusion proposé de **50 pg/mL** pour un **IMC ≥ 35 kg/m²** (issu de cohortes *HFpEF*, non gradé) et note que l'obésité et la FA agissent en sens opposé. Certains bêtabloquants non vasodilatateurs (métoprolol) peuvent élever transitoirement les peptides durant la titration (HFA 2019). Le consensus **ADA 2022** conseille un dépistage annuel dans le diabète (NT-proBNP ≥ 125 ou BNP ≥ 50 pg/mL), sans objet une fois l'IC diagnostiquée.

### Variabilité biologique et seuils de changement

| Étude | Population | Variation nécessaire pour dépasser la fluctuation normale |
|---|---|---|
| Meijers 2017 (texte intégral) | 83 patients IC stables | NT-proBNP : **baisse d'environ 40 %** ou **hausse d'environ 105 %** |
| Bruins 2004 | 43 patients stables (semaine à semaine) | ~98 % (NT-proBNP) ; ~113 % (BNP) ; hausse observée entre 8 h et 10 h |
| Wu 2003 | Patients stables | ~90 % (NT-proBNP) ; ~130 % (BNP) |
| Schou 2007 | 20 patients | 23 % (NT-proBNP) ; 43 % (BNP) — petite série aux valeurs atypiquement basses |

- **Consensus HFA non gradés.** Le **HFA 2019** mentionne selon les sections une variation ≥ 100 %, ≥ 50 %, ou jusqu'au doublement ; le **HFA 2023** évoque une hausse > 25 % au-dessus du niveau stable (« sec »), chiffre nettement inférieur à la fluctuation normale mesurée par Meijers 2017 (+105 %). Aucun texte ne définit de seuil validé de baisse ni de fréquence de dosage.
- **Traitement guidé par le NT-proBNP.** Dans **PROVE-HF** (794 patients sous sacubitril/valsartan, 54 % ischémiques), le NT-proBNP médian a baissé de 816 à 455 pg/mL (−30 % à J14, −37 % à 1 an) avec amélioration de la FEVG (28,2 % à 37,8 %, corrélation ~0,4). Dans **GUIDE-IT** (2017), ajuster le traitement pour viser < 1 000 pg/mL n'a **pas** amélioré les événements (HR 0,98 ; baisses −53 % vs −48 %), même si l'analyse secondaire (2019) montrait moins d'événements chez les 31 % ayant atteint ≤ 1 000 pg/mL à 90 jours (HR 0,26, association et non causalité). La méta-analyse du **HFA 2019** (6 essais ICFER) trouvait un RR de 0,80 sur la mortalité toutes causes mais qualifiait la stratégie de controversée. L'**ESC 2026** ne retient pas le dosage systématique pour ajuster les diurétiques ; le **NICE NG106** ne l'envisage qu'en milieu spécialisé chez les < 75 ans avec DFGe > 60 mL/min/1,73 m².`,
    },
    {
      headingFr: "Données d'études : taille du VG, cicatrice IRM et viabilité",
      depth: 'evidence',
      bodyMarkdownFr: `- **Normes d'imagerie.** Les bornes ETT 2D proviennent d'**ASE/EACVI 2015** (qui classe aussi la FEVG ETT comme légèrement anormale à 41–51 % chez l'homme et 41–53 % chez la femme, modérément anormale à 30–40 %, sévèrement anormale < 30 %, sans consensus pour des grades léger/modéré/sévère de dilatation). Les bornes IRM proviennent de **Kawel-Boehm 2020** (tableau 2, muscles papillaires inclus dans la masse musculaire ; un erratum de 2021 n'a touché que l'aorte). Dans **REVIVED-BCIS2**, le VTSi prédisait l'évolution alors que la FEVG ne la prédisait plus après ajustement. L'**ESC 2026** désigne l'IRM cardiaque comme méthode de référence (*gold standard*) pour les volumes.
- **Essais sur la viabilité.** Dans l'analyse de viabilité de **REVIVED-BCIS2** (610 patients, FEVG ≤ 35 %, maladie coronaire étendue), l'étendue du muscle viable n'a pas permis d'identifier les patients tirant bénéfice des stents (36,3 % vs 36,2 % d'événements). En revanche, chaque tranche supplémentaire de 10 % de cicatrice augmentait le risque de décès ou d'hospitalisation pour IC (HR 1,18) et prédisait une moindre récupération de la FEVG (FEVG médiane +4,7 points à 6 mois). Dans **STICH** (pontage), le bénéfice de survie ne dépendait pas non plus de la viabilité (revue **Ralota 2025**). L'**ESC 2026** indique que les preuves manquent pour sélectionner la revascularisation par test de viabilité, mais recommande d'envisager l'IRM avec LGE pour distinguer cause ischémique et non ischémique.
- **Épaisseur de cicatrice et récupération segmentaire — Kim et al. (*NEJM* 2000).** Sur 50 patients (FEVG moyenne 43 %, NYHA IV exclus ; 41 réexaminés à ~11 semaines après revascularisation), la récupération des segments faibles diminuait progressivement avec l'épaisseur de cicatrice : **78 %** (0 % de cicatrice), **60 %** (1–25 %), **42 %** (26–50 %), **10 %** (51–75 %) et **2 %** (76–100 %), déconseillant un seuil binaire unique. La FEVG moyenne est passée de 43 % à 47 % (44 % gagnant ≥ 5 points, corrélation 0,70 avec la part de myocarde faible mais peu cicatriciel ≤ 25 %).
- **Méta-analyse et localisation.** **Romero 2012** (24 études, 698 patients) a mesuré une sensibilité de 95 % pour le LGE et une spécificité de 91 % pour l'IRM de stress à la dobutamine pour prédire la récupération segmentaire (sans garantie de gain de survie). Dans **McCrohon 2003**, tous les patients coronariens présentaient un LGE sous-endocardique ou transmural, contre 59 % sans aucune cicatrice dans la cardiomyopathie dilatée non ischémique.`,
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
    'viabilite-myocardique',
    'these-viabilite-et-survie-revascularisation',
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
