import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'complements-energetiques-cardiaques',
  sourceWikiPath: 'wiki/concepts/heart-energy-supplements.md',
  titleFr: 'Compléments énergétiques cardiaques : créatine, taurine, D-ribose et cétones',
  category: 'nutrition',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'compléments',
    'créatine',
    'taurine',
    'd-ribose',
    'esters-de-cétones',
    '3-hydroxybutyrate',
    'boissons-énergisantes',
    'énergétique-myocardique',
    'isglt2',
    'acidocétose',
    'dfge',
    'hypoglycémie',
  ],
  aliases: [
    'Créatine',
    'Taurine',
    'D-ribose',
    'Ribose',
    'Esters de cétones',
    'Boissons cétoniques',
    'Cétones exogènes',
    '3-hydroxybutyrate',
    'BHB',
    'Sels de cétones',
    'Thérapie métabolique',
    'Énergie cardiaque',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Dans l'insuffisance cardiaque, les réserves énergétiques du muscle cardiaque sont abaissées, ce qui a alimenté le marché des compléments dits « métaboliques » (créatine, taurine, D-ribose et boissons cétoniques). Aucun de ces produits n'a démontré à ce jour de bénéfice sur la survie ou les hospitalisations dans l'ICFER. La créatine orale n'a pas amélioré la capacité d'effort dans le seul essai contrôlé de 6 mois et fausse les bilans rénaux en élevant la créatinine (abaissant artificiellement le DFGe calculé). La taurine est autorisée au Japon en appoint, mais une revue systématique indépendante de 2022 n'a trouvé aucun effet sur la pompe cardiaque et la méta-analyse positive de 2024 inclut un essai rétracté en avril 2026. Le D-ribose repose sur des essais minuscules, souvent liés aux fabricants, et peut provoquer des hypoglycémies. Les esters de cétones sont la piste de recherche la plus avancée (hausse modeste du débit cardiaque sur 14 jours dans l'ICFER, sans gain de symptômes ni d'effort à ce stade), mais restent expérimentaux, tandis que les sels de cétones (riches en sodium) et les grandes quantités de boissons énergisantes sont à éviter.",
  sections: [
    {
      headingFr: 'Vue d’ensemble : les quatre familles comparées',
      bodyMarkdownFr: `Le muscle cardiaque consomme en permanence une grande quantité d'énergie. Dans une petite étude de 1997 portant sur la cardiomyopathie dilatée non ischémique (résumée par **Balestrino 2021**), un rapport énergétique cardiaque abaissé en imagerie était associé à une moins bonne survie. C'est ce constat qui a suscité l'intérêt pour les compléments « énergétiques » :

| Produit | Meilleures preuves disponibles | Résultat principal | Vigilance majeure | Verdict |
|---|---|---|---|---|
| **Créatine** | Cochrane 2011 ; essai Carvalho 2012 (33 hommes, 6 mois) | Aucun gain sur le pic de VO₂ ni la marche de 6 min ; pas de gain de FEVG par voie orale | Abaisse artificiellement le **DFGe** ; prise de poids hydrique | **Non étayée** |
| **Taurine** | Revue systématique McGurk 2022 (11 petites études) | Aucun effet sur la FEVG ni le volume d'éjection systolique | Boissons énergisantes : allongent le QTc et élèvent la PA (caféine) | **Non étayée** (grandes quantités de boissons énergisantes : **à éviter**) |
| **D-ribose** | Essai Pierce 2022 (ICFEP) ; Omran 2003 (15 patients) | Gains symptomatiques dans l'ICFEP dans un essai très critiquable ; minuscules variations échographiques en IC ischémique | **Abaisse la glycémie** (hypoglycémie) | **Non étayé** |
| **Esters de cétones (boissons)** | Essai Berg-Hansen 2024 (24 patients ICFER, 14 jours) | Débit cardiaque +0,3 L/min, FEVG +2 points ; pas encore de gain symptomatique ni d'effort | Produits de recherche ; baisse brève du pH ; association aux **iSGLT2** | **Non étayés hors essais cliniques** |
| **Sels de cétones (sels de BHB)** | Aucun essai dans l'IC | — | **Charge en sodium** élevée | **À éviter** |

Une vérification du registre **ClinicalTrials.gov** (25 novembre 2026) n'a trouvé **aucun essai clinique sur la mortalité ou les hospitalisations** en critère principal pour la créatine, la taurine ou le D-ribose. Seules les cétones font l'objet d'un essai enregistré intégrant des événements cliniques dans un critère composite (**KETO-AHF**, NCT06653725, dans l'insuffisance cardiaque aiguë).`,
    },
    {
      headingFr: 'Créatine : bilan d’effort neutre et piège sur la créatinine et le DFGe',
      bodyMarkdownFr: `### Principe et limites biologiques

Stockée sous forme de phosphocréatine, la créatine sert de réserve énergétique rapide aux muscles et au cœur. Si le myocarde défaillant en contient moins, il possède aussi moins de transporteurs de créatine : la créatine avalée n'atteint donc pas aisément les cellules cardiaques. Chez la souris, forcer une surcharge cardiaque en créatine a même provoqué une insuffisance cardiaque (données issues de **Balestrino 2021**, revue dont l'auteur commercialise des produits à la créatine).

### Ce que montrent les essais

- **Revue Cochrane (Horjus 2011) :** 6 essais dans l'IC (1 226 patients), mais l'essentiel provenait d'un essai hospitalier de créatine phosphate **intraveineuse**. Seuls environ **37 patients** avaient reçu de la créatine orale, sans modification de la FEVG ; les auteurs concluaient à des données non concluantes.
- **Carvalho (2012) — le plus long essai oral contrôlé :** 33 hommes atteints d'IC (FEVG moyenne ~33 %, surtout maladie de Chagas ou hypertension, **15 % ischémiques**) recevant **5 g/j** ou un placebo pendant **6 mois** :
  - pic de VO₂ : différence **+0,3 mL/kg/min** (IC 95 % -3,5 à +4,1 ; p = 0,87) ;
  - test de marche de 6 minutes : différence **+25 m** (-19 à +70 ; p = 0,26).
- **Pilote espagnol (López-Clemente 2025) :** chez 43 patients ICFER après réadaptation cardiaque, un gain de 49 m au test de marche et un léger gain KCCQ ont été rapportés, sans changement de FEVG ni de NT-proBNP ; cette étude **n'avait pas de groupe témoin** et n'est connue que par un résumé de co-auteur.
- Le signal le plus reproductible dans les essais courts plus anciens concerne la force et l'endurance des **muscles squelettiques**, et non la pompe cardiaque.

### Deux précautions pratiques majeures dans l'ICFER

- **Fausse baisse du DFGe :** la créatine se transforme naturellement en créatinine, ce qui élève la créatininémie et **abaisse le DFGe calculé sans lésion réelle du rein** (phénomène observé puis réversible à l'arrêt dans le pilote 2025). Comme vos posologies d'ARNI, d'IEC, d'ARM et d'iSGLT2 reposent sur le suivi rénal, **prévenez systématiquement votre cardiologue ou votre médecin traitant** avant une prise de sang si vous prenez de la créatine, afin d'éviter un ajustement thérapeutique injustifié.
- **Prise de poids hydrique :** la créatine retient de l'eau dans les muscles (raison pour laquelle Carvalho n'avait inclus que des hommes), ce qui peut perturber l'interprétation de votre **pesée quotidienne**.`,
    },
    {
      headingFr: 'Taurine : autorisée au Japon, mais données très fragiles',
      bodyMarkdownFr: `### Statut réglementaire

Au Japon, la taurine est un médicament d'appoint sur ordonnance dans l'insuffisance cardiaque congestive lorsque le traitement cardiotonique et diurétique habituel est insuffisant (notice japonaise révisée en 2023). Elle **n'est pas autorisée comme médicament** dans l'Union européenne, au Royaume-Uni ni aux États-Unis (**PMDA / EFSA**).

### Ce que montrent les études

- **Revue systématique McGurk (2022, financement public BHF / Wellcome) :** 11 petites études (4 à 48 patients chacune, médiane 6 semaines, majorité d'étiologies ischémiques avec FEVG < 50 %). **Aucun effet regroupé** sur la FEVG ni le volume d'éjection systolique. La qualité était moyenne ou faible, et 7 études sur 11 provenaient de deux équipes avec des données dupliquées.
- **Méta-analyse Tzang (2024, 20 essais, 808 participants, pathologies mixtes) :** a rapporté une hausse de FEVG de +5,4 points et une baisse de classe NYHA de -0,4 dans le sous-groupe IC. Cependant, l'hétérogénéité était élevée, plusieurs affirmations du texte contredisaient les tableaux, et **l'un des essais IC inclus (Ahmadian 2017, *J Diet Suppl*) a été rétracté en avril 2026** (pour des motifs non publiés), sans que les résultats n'aient été recalculés sans cet essai.
- **Essais individuels :** minuscules et très courts — Azuma (Japon, années 1980, antérieur aux traitements modernes) et Beyranvand 2011 (Iran, 29 patients, FEVG moyenne 29 %, 2 semaines, critères d'effort et symptômes).

### Sécurité et distinction avec les boissons énergisantes

Aux quantités présentes dans l'alimentation et les boissons, la taurine seule présente une marge de sécurité large (**EFSA**). Les **boissons énergisantes** constituent un sujet tout autre : chez des adultes jeunes sains (**Shah 2019**), environ 1 litre (~300 mg de caféine + taurine) a allongé le QTc de 6 à 8 ms et élevé la pression systolique de 5 à 6 mmHg de plus que le placebo, et l'**ANSES (2013)** attribue les palpitations et troubles du rythme surtout à la caféine associée à des cofacteurs (effort, alcool, hypokaliémie, cardiopathie sous-jacente). Dans une ICFER ischémique, il convient d'éviter les grandes quantités de boissons énergisantes (voir la fiche *Caféine, boissons énergisantes, décongestionnants et stimulants*).`,
    },
    {
      headingFr: 'D-ribose : essais minuscules et risque d’hypoglycémie',
      bodyMarkdownFr: `Le D-ribose est un sucre utilisé par l'organisme pour régénérer l'ATP.

### Des preuves cliniques très insuffisantes

- **Omran (2003) :** seul essai dans l'insuffisance cardiaque ischémique (15 patients, croisé sur 3 semaines), rapportant de petites modifications échographiques du remplissage et une amélioration d'un score de qualité de vie ; deux co-auteurs étaient liés à des fabricants de ribose.
- **Bayram (2015) :** pilote financé par l'industrie dans l'ICFEP (11 patients) sans bénéfice significatif et avec dégradation d'un paramètre d'efficacité ventilatoire.
- **Pliml (1992) :** chez 20 hommes angoreux sans IC, 60 g/j pendant 3 jours ont retardé les modifications électriques sur tapis roulant, mais sans allonger le délai avant la douleur d'angor.
- **Pierce (2022) :** plus grand essai (financement NIH), mais uniquement dans l'**ICFEP** (FEVG ≥ 50 %, 153 patients, 12 semaines), rapportant de forts gains de KCCQ, BNP et une hausse surprenante de 8 points de FEVG ; l'essai a cependant été arrêté précocement, multipliait les critères principaux et n'a publié aucune donnée sur la glycémie ni les effets indésirables.
- **Aucun essai dans l'ICFER :** le seul essai enregistré a été retiré sans recruter de patients. Même un panel d'experts favorable aux nutraceutiques (**ILEP 2020**) a jugé les données rares, petites et courtes.

### Sécurité (avis EFSA 2018)

Dans son évaluation de 2018 (« nouvel aliment »), l'**EFSA** a constaté que des doses uniques de D-ribose **abaissaient la glycémie dans les 1 à 3 heures** (jusqu'à **2,6 mmol/L** après 10 g dans une étude) et a limité la dose jugée sûre à **36 mg/kg/j** (environ **2,5 g/j** pour 70 kg). Les compléments proposés jusqu'à 10 g/j n'ont pas été démontrés sûrs, alors que les essais dans l'IC employaient **15 g/j**. Une hausse de l'acide urique a aussi été observée. **Pour toute personne diabétique sous insuline ou sulfamide hypoglycémiant, le risque d'hypoglycémie est la préoccupation majeure.** (Des études animales ont aussi relié de fortes doses à la glycation des protéines et à des troubles mnésiques, sans données humaines.)`,
    },
    {
      headingFr: 'Esters de cétones et sels de cétones : piste de recherche et précautions',
      bodyMarkdownFr: `Les corps cétoniques constituent un carburant alternatif utilisable par le myocarde. Il faut distinguer les **esters de cétones** (boissons augmentant la cétonémie en moins d'une heure) des **sels de cétones (sels de BHB)**, dans lesquels la cétone est liée à du sodium, du calcium ou du magnésium.

### Ce que montrent les études cliniques

- **Nielsen (2019, perfusion intraveineuse) :** une perfusion de 3 heures de 3-hydroxybutyrate chez 16 patients ICFER a augmenté le débit cardiaque d'environ **2 L/min (+40 %)**, surtout par vasodilatation, mais à une concentration sanguine (3,3 mmol/L) très supérieure à celle atteinte par voie orale. La perfusion apportait du sodium et utilisait un clamp insulinique ainsi que du potassium, si bien que la baisse de kaliémie observée ne peut être attribuée aux cétones seules. Il s'agit d'une expérience de laboratoire, non d'un traitement.
- **Berg-Hansen (2024) — essai oral de référence dans l'ICFER :** essai croisé danois en double aveugle testant **14 jours** d'ester de cétone bu quatre fois par jour contre une boisson isocalorique chez **24 patients ICFER** analysés (FEVG moyenne 33 %, **58 % ischémiques**, **58 % sous iSGLT2**, **personnes diabétiques exclues**) :
  - débit cardiaque au repos **+0,3 L/min** (0,1 à 0,5) ; pression capillaire pulmonaire **-2 mmHg** ; FEVG **+2 points** ; NT-proBNP réduit d'environ **18 %** (gain de débit plus marqué chez les ischémiques en sous-groupe exploratoire sur 24 patients) ;
  - **aucune amélioration** de la capacité d'effort maximale ni du score global de qualité de vie KCCQ ;
  - davantage d'effets indésirables (fatigue, maux de tête, douleurs abdominales, baisse d'appétit) ;
  - baisse brève de l'acidité sanguine (pH) après chaque dose, normalisée en 4 heures, sans acidocétose rapportée.
- **Selvaraj (2025, dose unique) :** chez 20 patients ICFER avec ou sans iSGLT2 (chiffres issus du résumé et du registre), une dose unique a entraîné une légère baisse transitoire du pH veineux (~7,28–7,30 à 1 heure), sans acidocétose.
- **Synthèse et essais en cours :** une méta-analyse de 2026 (4 petits essais, 94 patients) a regroupé études IV et orales, ce qui gonfle artificiellement l'effet apparent. L'essai **KETO-AHF (NCT06653725)** évalue actuellement un précurseur cétonique (1,3-butanediol) pendant 30 jours après une hospitalisation pour IC (FEVG ≤ 35 %, 250 patients) sur un critère composite (*win-ratio* incluant décès, événements IC, marche et NT-proBNP ; résultats non attendus avant **2028**). Un essai d'effort dans l'ICFER (Duke) s'est achevé en août 2026 sans résultats publiés à ce jour.

### Précautions essentielles

- **iSGLT2 et acidocétose :** la notice des iSGLT2 (*Forxiga*, *Jardiance*) cite les régimes cétogènes et le jeûne parmi les déclencheurs d'acidocétose. Bien que les essais courts d'esters de cétones sous iSGLT2 n'aient montré qu'une acidose légère et transitoire, **aucune donnée à long terme n'existe et les personnes diabétiques étaient exclues** de l'essai de 14 jours : cette association relève uniquement d'un essai clinique ou d'un avis spécialisé.
- **Sels de cétones (sels de BHB) à éviter :** une étiquette de produit mentionnait **900 mg de sodium par portion** (produit retiré depuis), ce qui va à l'encontre de la maîtrise des apports en sel dans l'insuffisance cardiaque.
- **Potassium :** les données actuelles ne permettent pas de conclure sur un éventuel effet des boissons cétoniques orales sur la kaliémie.`,
    },
    {
      headingFr: 'Position des recommandations et points pratiques',
      bodyMarkdownFr: `- **Aucune recommandation internationale** (ESC, AHA/ACC/HFSA ou NICE) ne préconise la créatine, la taurine, le D-ribose ou les boissons cétoniques dans l'insuffisance cardiaque.
- **Niveau de certitude :** faible pour l'ensemble des allégations de bénéfice clinique.
- **Verdict pratique :**
  - créatine, taurine, D-ribose et esters de cétones : **non étayés en dehors d'essais cliniques** ;
  - sels de cétones (sels de BHB) et grandes quantités de boissons énergisantes : **à éviter**.
- Parlez systématiquement à votre cardiologue ou à votre pharmacien avant d'envisager l'un de ces produits, en particulier si vous prenez un iSGLT2, un traitement antidiabétique ou si votre fonction rénale est suivie régulièrement.`,
    },
  ],
  relatedArticleSlugs: [
    'cafeine-boissons-energisantes-et-stimulants',
    'coenzyme-q10',
    'vitamines-b-insuffisance-cardiaque',
    'interactions-complements-aliments-medicaments',
    'medicaments-effets-secondaires-suivi',
    'poids-obesite-et-denutrition',
    'berberine-cholesterol-et-interactions',
    'tableau-preuves-nutrition-complements',
    'essais-cliniques-en-cours-et-a-suivre',
    'nutrition-et-complements-insuffisance-cardiaque',
  ],
  sources: [
    {
      label: 'Horjus et al. (Cochrane 2011), Carvalho et al. (2012), López-Clemente et al. (2025) et Balestrino (2021)',
      detail: 'Évaluation de la créatine orale et IV dans l’IC (essai de 6 mois neutre sur VO₂ et marche, artefact sur la créatinine/DFGe et rétention hydrique).',
    },
    {
      label: 'McGurk et al. (2022), Tzang et al. (2024), statut PMDA/EFSA, Shah et al. (2019) et ANSES (2013)',
      detail: 'Revue systématique neutre sur la taurine, note de rétractation d’avril 2026 dans Tzang 2024, licence japonaise et effets QTc/tension des boissons énergisantes.',
    },
    {
      label: 'Pierce et al. (2022), Omran et al. (2003), Pliml et al. (1992), avis EFSA (2018) et ILEP (2020)',
      detail: 'Essais limités sur le D-ribose (aucun dans l’ICFER) et sécurité EFSA (hypoglycémie, seuil de 36 mg/kg/j soit ~2,5 g/j).',
    },
    {
      label: 'Berg-Hansen et al. (2024), Nielsen et al. (2019), Selvaraj et al. (2025), KETO-AHF (NCT06653725) et notice dapagliflozine (Forxiga)',
      detail: 'Essais courts d’esters de cétones dans l’ICFER (avec et sans iSGLT2), pH transitoire, charge en sodium des sels de BHB et suivi des essais cliniques en cours.',
    },
  ],
  disclaimerType: 'medical',
};
