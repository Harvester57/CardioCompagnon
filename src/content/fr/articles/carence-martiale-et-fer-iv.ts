import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'carence-martiale-et-fer-iv',
  sourceWikiPath: 'wiki/concepts/iron-deficiency-and-iv-iron.md',
  titleFr: 'Carence en fer et fer intraveineux',
  category: 'traitements',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'high',
  volatility: 'warm',
  tags: [
    'carence-martiale',
    'fer-intraveineux',
    'carboxymaltose-ferrique',
    'dérisomaltose-ferrique',
    'fer-oral',
    'ferritine',
    'cst',
    'hypophosphatémie',
    'icfer',
  ],
  aliases: [
    'Fer IV',
    'Perfusion de fer',
    'Carboxymaltose ferrique',
    'Ferinject',
    'Dérisomaltose ferrique',
    'Monofer',
    'Carence en fer insuffisance cardiaque',
    'CST',
    'TSAT',
    'Ferritine',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "De nombreuses personnes atteintes d'insuffisance cardiaque manquent de fer, même lorsque leur numération sanguine (hémoglobine) est normale. Cette carence aggrave la fatigue et l'essoufflement et se dépiste par une prise de sang (ferritine et coefficient de saturation de la transferrine, ou CST). Lorsqu'elle est confirmée — en particulier lorsque le CST est inférieur à 20 % — une perfusion de fer intraveineux en hôpital de jour améliore les symptômes et réduit les hospitalisations pour insuffisance cardiaque d'environ 20 % à 30 % (confirmé par une méta-analyse indépendante sans lien industriel de novembre 2026), sans effet démontré sur la mortalité. Toutefois, la preuve directe en ajout à la quadrithérapie moderne incluant un inhibiteur du SGLT2 reste limitée (7,2 % des participants sous iSGLT2 dans les grands essais ; 23,6 % dans FAIR-HF2), et le carboxymaltose ferrique (Ferinject) expose beaucoup plus souvent à une hypophosphatémie transitoire que le dérisomaltose ferrique (Monofer). Les comprimés de fer par voie orale ne reconstituent quasiment pas les réserves et ne sont pas efficaces dans l'ICFER. Le fer intraveineux est un traitement médical prescrit sur bilan biologique par votre équipe de cardiologie.",
  sections: [
    {
      headingFr: 'Comment définit-on la carence en fer ?',
      bodyMarkdownFr: `- **Définition historique (utilisée dans tous les grands essais cliniques) :** ferritine **< 100 µg/L (ng/mL)**, *ou* ferritine entre **100 et 299 µg/L** associée à un coefficient de saturation de la transferrine (**CST**) **< 20 %**.
- **Orientation discutée par l'ESC 2026 :** les recommandations européennes évoquent une définition reposant uniquement sur le **CST < 20 %**, jugée plus sensible et plus spécifique, en suggérant que les patients ayant un CST < 20 % tireraient le plus grand bénéfice. La formulation exacte du texte intégral indique qu'une telle définition « a été proposée » : il s'agit donc d'une proposition en discussion plutôt que d'une redéfinition formelle définitive. Si elle était adoptée, certains patients diagnostiqués sur la seule ferritine basse ne rempliraient plus le critère, tandis que d'autres ayant une ferritine « normale » mais un CST bas y deviendraient éligibles.
- **Dépistage systématique (ESC 2026) :** le dosage du CST et de la ferritine fait partie du bilan sanguin initial de toute insuffisance cardiaque (**Classe I, Niveau C**) ainsi que des bilans de suivi réguliers.
- **Critères NICE NG106 (Royaume-Uni, mise à jour 2025) :** retient une définition « ou » — **CST < 20 % ou ferritine < 100 µg/L** — lorsque l'hémoglobine est **< 15 g/dL (150 g/L)**.
- **Pourquoi la ferritine seule peut induire en erreur :** la ferritine augmente sous l'effet de l'inflammation, du surpoids, du diabète, d'une stéatose hépatique (« foie gras ») ou d'une maladie aiguë ; elle peut donc paraître normale ou élevée alors que le fer réellement utilisable manque. Une revue de 2025 (**Sato et al.**) plaide pour une définition fondée sur le CST ou le fer sérique : un **CST ≤ 19,8 %** ou un **fer sérique ≤ 13 µmol/L** correspondait le mieux aux réserves de fer de la moelle osseuse, et c'est un CST bas — et non une ferritine basse — qui prédisait la mortalité.
- **Ferritine élevée et troubles métaboliques :** dans une cohorte de **7 498 patients** chinois atteints d'insuffisance cardiaque à **FEVG préservée** (**Ni et al., 2025**), environ **30 %** présentaient une « hyperferritinémie métabolique » (ferritine élevée associée à un diabète, une obésité, une stéatose hépatique ou une insulinorésistance). Les grades les plus élevés étaient associés à davantage de décès ou d'hospitalisations pour insuffisance cardiaque (**grade 2/3 : HR 1,43**, IC 95 % **1,26–1,62** après ajustement complet), de manière comparable avec ou sans maladie coronaire. Cette étude est observationnelle, la ferritine était mesurée à l'admission, le fer sérique et le CST manquaient chez plus de la moitié des patients, et aucun patient en ICFER n'a été inclus. Sa portée ici est le principe général qu'une ferritine élevée ne prouve pas que les réserves de fer sont satisfaisantes et peut signaler un risque métabolique.`,
    },
    {
      headingFr: 'Ce que démontre le fer intraveineux',
      bodyMarkdownFr: `Les spécialités évaluées dans les essais sont le **carboxymaltose ferrique (*Ferinject*)** et le **dérisomaltose ferrique (*Monofer*)**, administrés en perfusion intraveineuse. La méta-analyse de 2025 (**Anker et al., *Nature Medicine* 2025**) regroupe les six essais contrôlés contre placebo (**FAIR-HF**, **CONFIRM-HF**, **AFFIRM-AHF**, **IRONMAN**, **HEART-FID**, **FAIR-HF2**), totalisant **7 175 patients** avec une FEVG jusqu'à 50 % :

| Critère évalué | 12 premiers mois | Ensemble du suivi |
|---|---|---|
| Hospitalisations pour IC + décès CV | **-28 %** (**RR 0,72**) | **-19 %** (**RR 0,81**) |
| Hospitalisations pour IC seules | **-31 %** (**RR 0,69**) | **-22 %** (**RR 0,78**) |
| Mortalité cardiovasculaire | Non significatif (**HR 0,80**) | Non significatif (**HR 0,87**) |
| Mortalité toutes causes | Non significatif (**HR 0,82**) | Non significatif (**HR 0,92**) |

- Le bénéfice porte essentiellement sur la **réduction des hospitalisations**, particulièrement marquée durant la première année.
- **Tolérance globale :** pas davantage d'événements indésirables graves qu'avec le placebo, mais une divergence majeure existe entre molécules sur l'hypophosphatémie (voir ci-dessous).
- L'effet global ne différait pas de façon significative entre insuffisance cardiaque **ischémique et non ischémique** (ischémique **RR 0,74**, IC 95 % 0,56–0,92), ni selon la fonction rénale ou le taux d'hémoglobine.
- **Sexe :** les femmes semblaient bénéficier moins que les hommes (**RR 0,98 contre 0,76**) ; les auteurs indiquent que cela pourrait relever du hasard, même si FAIR-HF2 a retrouvé une tendance similaire.

### FAIR-HF2 (JAMA, 2025) : l'essai le plus proche de la cardiomyopathie ischémique

- **Population :** **1 105 patients** carencés en fer avec **FEVG ≤ 45 %** (médiane 35 %, moyenne 34 %) dans 70 centres européens ; âge moyen **70 ans**, majoritairement NYHA II–III ; **78 %** avaient une cardiomyopathie ischémique et **47 %** un antécédent d'infarctus du myocarde. Suivi médian de **16,6 mois**.
- **Schéma d'administration :** jusqu'à **2 000 mg** de carboxymaltose ferrique à l'initiation (en deux visites), puis **500 mg tous les 4 mois** sauf si les réserves en fer étaient déjà élevées ; le placebo était du sérum physiologique.
- **Trois critères principaux :**
  - Décès cardiovasculaire ou 1re hospitalisation pour IC : **141 contre 166 patients**, **HR 0,79** (IC 0,63–0,99), p = 0,04 ;
  - Total des hospitalisations pour IC : **264 contre 320**, **RR 0,80** (IC 0,60–1,06), non significatif ;
  - Décès CV ou 1re hospitalisation pour IC chez les patients avec CST < 20 % : **HR 0,79** (IC 0,61–1,02), non significatif.
- **Pourquoi HR 0,79 ne compte pas comme un succès formel :** avec trois critères principaux simultanés, la règle statistique préspécifiée (**Hochberg**) exigeait soit les trois à p ≤ 0,05, soit deux à p ≤ 0,025, soit un à p ≤ 0,0167. Aucune de ces conditions n'étant atteinte, l'essai est **formellement neutre**, même si l'ampleur de l'effet correspond aux essais antérieurs.
- **Modification du critère principal en cours d'essai :** le critère unique d'origine (total des hospitalisations IC + décès CV) a été remplacé par ces trois critères en **mars 2024**, alors que les données restaient en aveugle, en raison des perturbations liées au COVID-19 et d'incertitudes sur les doses réellement reçues. L'ancien critère, devenu exploratoire, affichait un **RR de 0,76** (IC 0,59–0,98). Environ un tiers des participants (**34 % contre 38 %**) ont arrêté le traitement précocement, réduisant la puissance statistique.
- **Mortalité :** mortalité toutes causes **HR 0,94** (IC 0,72–1,24) ; mortalité cardiovasculaire environ **HR 0,80** (IC 0,55–1,14) ; aucune n'est significative.
- **Tolérance :** événements indésirables graves **48,2 % contre 49,9 %**. L'article principal ne rapporte pas l'hypophosphatémie.
- **Sous-groupe ischémique :** dans l'analyse dédiée (**Khan 2026**, n = 858), le critère décès CV ou 1re hospitalisation IC affichait un **HR de 0,85** (IC 0,66–1,10) chez les patients ischémiques contre **0,61** (IC 0,39–0,98) chez les non-ischémiques (p d'interaction = **0,26**, non significatif). La méta-analyse regroupée ne retrouvant pas de différence par cause, ces données ne montrent pas que le fer IV agirait moins bien en cas d'ischémie.
- **Traitement de fond associé :** **23,6 %** (261/1 105) prenaient un iSGLT2 (**38 %** un ARNI, **70,5 %** un ARM).

### Pourquoi les essais individuels semblaient « presque positifs »

**AFFIRM-AHF**, **IRONMAN**, **HEART-FID** et **FAIR-HF2** ont chacun manqué de peu leur propre critère principal. Leur regroupement met en évidence une diminution statistiquement solide des hospitalisations, mais la méta-analyse initiale a été menée par les investigateurs mêmes des essais et FAIR-HF2 a été cofinancé par le laboratoire fabricant.`,
    },
    {
      headingFr: 'Le fer IV reste-t-il efficace sous quadrithérapie moderne avec iSGLT2 ?',
      bodyMarkdownFr: `Une enquête approfondie dédiée figure dans la fiche *Thèse : fer intraveineux, iSGLT2 et quadrithérapie moderne dans l'ICFER* (**verdict : partiellement étayée, confiance moyenne**) :

- **Bénéfice global confirmé par une revue indépendante sans lien industriel (Mandal et al., *Open Heart*, novembre 2026) :** sur 18 cohortes indépendantes d'insuffisance cardiaque, cette revue sans conflit d'intérêts confirme avec une **certitude GRADE modérée** la baisse du total des hospitalisations pour IC (**RR 0,78**, IC 95 % **0,67–0,90** en modèle à effet fixe) et du risque d'au moins une hospitalisation (**RR 0,89**, 0,80–0,99, soit environ **25 admissions évitées pour 1 000 patients**), sans gain démontré sur la mortalité (**HR 0,93**, 0,84–1,03), tout en relevant que les intervalles à effets aléatoires croisent 1.
- **Lacune directe sous iSGLT2 et quadrithérapie complète :** sur l'ensemble des 6 grands essais (7 175 patients), seuls **519 patients (~7,2 %)** prenaient un inhibiteur du SGLT2 à l'inclusion : **23,6 %** (261/1 105) dans FAIR-HF2, **7,5 %** (229/3 065) dans HEART-FID, **2,6 %** (29/1 137) dans IRONMAN et quasiment aucun dans les essais plus anciens. **Aucun essai ni méta-analyse n'a publié les hospitalisations pour IC stratifiées par iSGLT2 ou quadrithérapie.** Le sous-groupe d'IRONMAN sous iSGLT2 (**Docherty 2024**) ne comporte que **29 utilisateurs d'iSGLT2** et n'analyse que l'hémoglobine (+1,0 contre +0,4 g/dL à 4 semaines, p d'interaction = 0,10 ; 2 contre 0 infarctus/AVC ; zéro polyglobulie ; aucune donnée d'hospitalisation).
- **Pourquoi le CST < 20 % est le filtre décisif sous traitement moderne :** les iSGLT2 (dapagliflozine — *Forxiga*, empagliflozine — *Jardiance*) et le sacubitril/valsartan (*Entresto*) abaissent eux-mêmes l'**hepcidine de 20 à 40 %** et la **ferritine d'environ 32 à 33 %** tout en stimulant la fabrication de globules rouges, augmentant de **70 %** les chances de remplir les anciens critères de carence martiale sous dapagliflozine dans DAPA-HF (**Docherty 2022** ; **Ferreira 2025** ; **Packer 2022/2024**). Une ferritine isolément < 100 µg/L avec un CST ≥ 20 % reflète donc souvent une mobilisation active du fer plutôt qu'un vrai déficit : dans **HEART-FID** (**Lewis 2025**), 89,8 % avaient une ferritine < 100 µg/L mais seulement **40,5 % avaient un CST < 20 %**, diluant l'effet. Les analyses sur données individuelles (**Ponikowski 2023**, p d'interaction = 0,019), **IRONMAN** (**Cleland 2024**), **Marques 2024** (CST < 20 % **RR 0,81** contre CST ≥ 20 % **RR 0,98**, p d'interaction = 0,05) et le consensus **Packer 2024** convergent sur **CST < 20 %** comme groupe répondeur, alors que la ferritine < 100 µg/L isolée avec CST ≥ 20 % montre un effet quasi nul (**RR 0,96–0,98**) et un signal de mortalité numériquement défavorable dans IRONMAN.
- **Divergence majeure de sécurité entre FCM (*Ferinject*) et FDI (*Monofer*) :**
  - **Hypophosphatémie :** dans la sous-étude prospective dédiée de **HEART-FID** (**Nouhravesh 2025**, n = 133), **51,9 %** des patients recevant du **carboxymaltose ferrique (FCM)** ont développé une **hypophosphatémie modérée à sévère** au 21e jour (dont **27,8 % sévère de grade 3**), régressive aux jours 91–119 après un cycle unique, contre environ **4 à 8 %** avec le **dérisomaltose ferrique (FDI)** dans les essais comparatifs et méta-analyses hors IC. Le risque culmine en cas de fonction rénale préservée (**DFG > 60**) et de **perfusions répétées**. L'agence britannique **MHRA (2020/2026)** recense **36 cas mondiaux d'ostéomalacie hypophosphatémique (53 % avec fractures)** sous FCM contre **0 sous FDI**.
  - **Infections :** dans IRONMAN (**Foley 2025**), le FDI s'associait à **moins** de premières hospitalisations infectieuses (**HR 0,76**, IC 95 % **0,59–0,98**, uniquement en cas de CST < 20 %). Toutefois, **Mandal 2026** cote la sécurité infectieuse dans l'IC à une certitude **faible à très faible**, les données standardisées manquant pour la plupart des participants et FAIR-HF2 ayant comptabilisé davantage d'épisodes infectieux sous FCM (165 contre 118). Une infection active contre-indique toute perfusion.
- **Essais en cours à l'ère des iSGLT2 :** **COMBINED-HF** (*NCT06434025*, Brésil, n = 99 ICFER naïfs d'iSGLT2, FCM + dapagliflozine, critère principal FEVG en IRM à 30 jours, statut non actualisé) et **INFERRCT** (*NCT05759078*, Pologne, n = 1 000 post-infarctus avec **CST < 20 %**, FCM contre placebo) n'ont pas encore publié leurs résultats.`,
    },
    {
      headingFr: 'Fer par voie orale : pourquoi les comprimés ne suffisent pas',
      bodyMarkdownFr: `Dans l'essai **IRONOUT-HF** (*JAMA*, 2017), **225 patients** atteints d'ICFER avec carence en fer ont reçu soit un complexe polysaccharidique de fer oral à forte dose (**150 mg deux fois par jour**), soit un placebo pendant **16 semaines**. La population était très proche de la cardiomyopathie ischémique : **FEVG médiane 25 %** et **78 % d'origine ischémique**.

- **Aucun bénéfice :** le pic de consommation d'oxygène à l'effort (VO₂) n'a pas différé (différence de **+21 mL/min**, IC -34 à +76), pas plus que la distance de marche, le NT-proBNP ou la qualité de vie (score KCCQ).
- **Des réserves à peine rechargées :** malgré environ **33,6 g** de fer oral pris sur 16 semaines (contre environ **2 g** administrés en perfusion dans l'essai FAIR-HF), le CST n'a augmenté que d'environ **3 points de pourcentage** et la ferritine d'environ **11 µg/L (ng/mL)** par rapport au placebo.
- **Explication biologique :** l'insuffisance cardiaque élève l'**hepcidine**, une hormone qui bloque l'absorption intestinale du fer ; les patients présentant l'hepcidine la plus élevée au départ absorbaient le moins de fer.
- **Tolérance :** effets indésirables et arrêts comparables au placebo (**14 % contre 15 %** d'arrêts), sans saignement digestif observé.
- **Limites :** essai court (16 semaines), petit effectif, centré sur la capacité d'effort plutôt que sur les hospitalisations ou la survie, et sans comparaison directe avec le fer intraveineux.

Prendre des comprimés de fer sans carence documentée expose par ailleurs à des effets secondaires et à un risque de surcharge en fer.

### Comprimés de fer « mieux absorbés » (Ferrochel, fer sucrosomial, maltol ferrique)

Des formulations orales plus récentes sont commercialisées comme capables de contourner ces limites. À la date de **novembre 2026**, cela **n'est pas démontré dans l'insuffisance cardiaque** ; l'analyse complète des preuves figure dans *Fer oral à haute biodisponibilité (Ferrochel, sucrosomial) et insuffisance cardiaque* (verdict : preuves insuffisantes, plutôt en défaveur).

- **Ferrochel (bisglycinate ferreux) :** aucun essai clinique dans l'insuffisance cardiaque et aucune preuve qu'il contourne l'hepcidine. Dans de petites études d'absorption chez des volontaires sains (Bovell-Benjamin 2000 ; méta-analyse Fischer 2023), son assimilation restait régulée par les réserves en fer de l'organisme comme le fer classique.
- **Maltol ferrique (*Feraccru*) :** a augmenté le CST de **14 % à 29 %** dans une petite étude sans groupe placebo (**ORION-HF**, 41 patients, dont seulement 16 avec une FEVG < 50 %, tous anémiés).
- **Fer sucrosomial :** a amélioré la distance de marche dans une étude non randomisée de **25 patients** en ICFER (Karavidas 2021). Un essai contrôlé contre placebo (**RISE-HF**, 60 patients) n'a pas encore publié ses résultats.
- Dans les maladies inflammatoires chroniques de l'intestin et la maladie rénale chronique (**AEGIS-H2H** ; Bertani 2021), ces comprimés ont élevé l'hémoglobine mais rechargé les réserves en fer **environ dix fois moins** que le fer intraveineux sur 12 semaines.
- Aucune forme n'a démontré chez l'humain qu'elle contourne l'hepcidine : testées chez des patients à hepcidine élevée, ces nouvelles formulations se sont comportées comme le fer ordinaire, et avec le fer sucrosomial l'hepcidine a augmenté chez la majorité des patients (Pantopoulos 2024 ; Abbati 2019 ; Tomosugi 2023).
- Le seul essai contrôlé contre placebo mené dans l'insuffisance cardiaque avec ces nouveaux comprimés (**PREFER-HF**, dans l'insuffisance cardiaque à FEVG préservée) aurait manqué son critère de distance de marche (résultats non encore publiés).
- Le profil du patient pourrait compter davantage que la formulation : certains patients insuffisants cardiaques carencés absorbent bien le fer ordinaire (Cabrera 2020), et les **iSGLT2** abaissent l'hepcidine d'environ **un cinquième à un tiers** (Docherty 2022 ; Ferreira 2025). Chez des patients tous traités par iSGLT2, des comprimés ordinaires ont élevé l'hémoglobine d'environ **1 g/dL**, mais sans groupe témoin (Marques 2026). La prise **un jour sur deux** stimule moins l'hepcidine qu'une prise biquotidienne (Stoffel 2017). Aucune de ces pistes n'a toutefois été testée rigoureusement dans un essai contrôlé d'insuffisance cardiaque.`,
    },
    {
      headingFr: 'Ce que disent les recommandations internationales',
      bodyMarkdownFr: `- **ESC 2026 :** fer intraveineux dans l'ICFER symptomatique avec carence martiale pour améliorer les symptômes et la qualité de vie (**Classe I, Niveau B1**), et à envisager pour réduire les hospitalisations pour insuffisance cardiaque (**Classe IIa, Niveau B1**).
- **NICE NG106 (Royaume-Uni, mise à jour 2025) :**
  - vérifier le bilan martial et l'anémie par CST, ferritine et hémoglobine dans l'ICFER (recommandation 1.4.5) ;
  - envisager du fer intraveineux (fer saccharose *Venofer*, carboxymaltose ferrique *Ferinject* ou dérisomaltose ferrique *Monofer*) dans l'ICFER lorsque l'hémoglobine est **< 15 g/dL (150 g/L)** et le **CST < 20 %** ou la **ferritine < 100 µg/L** (1.4.6) ;
  - si une anémie ferriprive est découverte, ne pas supposer automatiquement que l'insuffisance cardiaque en est la cause et rechercher d'autres origines, notamment digestives (1.4.7) ; en cas d'anémie, d'autres carences comme la vitamine B12 ou les folates peuvent également être recherchées (voir *Vitamines B et insuffisance cardiaque*).
  - L'argumentaire de NICE souligne un risque significatif d'**hypophosphatémie** (baisse du phosphore sanguin) avec le carboxymaltose ferrique, qui peut être surveillée et corrigée.
- **Recommandations américaines (AHA/ACC/HFSA 2022) :** dans l'ICFER avec carence en fer, avec ou sans anémie, le fer IV est jugé raisonnable pour améliorer le statut fonctionnel et la qualité de vie (**Classe 2a, Niveau B-R**). En revanche, les agents stimulant l'érythropoïèse prescrits pour l'anémie sont classés **nocifs** (**Classe 3 : Danger**).
- Une cartographie des preuves de 2021 (Khan et al.) évaluait l'effet du fer sur la FEVG avec une certitude modérée, mais la FEVG reste un critère intermédiaire ; les données sur les hospitalisations sont venues des essais ultérieurs. Voir aussi *Tableau des niveaux de preuve : nutrition et compléments*.`,
    },
  ],
  relatedArticleSlugs: [
    'these-fer-iv-et-isglt2-quadritherapie',
    'fer-oral-haute-biodisponibilite',
    'vitamines-b-insuffisance-cardiaque',
    'nutrition-et-complements-insuffisance-cardiaque',
    'medicaments-insuffisance-cardiaque',
    'tableau-preuves-nutrition-complements',
    'questions-equipe-cardiologie',
    'essais-cliniques-cles',
    'maladies-associees',
    'goutte-bpco-thyroide-et-autres-comorbidites',
  ],
  sources: [
    {
      label: 'Anker et al. (Nature Medicine & EJHF 2025), FAIR-HF2 (JAMA 2025, texte intégral) et Khan et al. (2026)',
      detail: '6 essais (7 175 patients, 23,6 % iSGLT2 dans FAIR-HF2, 7,2 % au total), règle de Hochberg, sous-groupe ischémique (78 %) et tolérance.',
    },
    {
      label: 'Mandal et al. (Open Heart nov. 2026, texte intégral), Foley et al. (IRONMAN 2025) et Nouhravesh et al. (HEART-FID phosphate, mai 2025)',
      detail: 'Méta-analyse indépendante sans lien industriel (18 cohortes), sécurité infectieuse (IRONMAN HR 0,76) et hypophosphatémie à J21 (51,9 % FCM contre ~4–8 % FDI ; alertes MHRA).',
    },
    {
      label: 'HEART-FID (Mentz 2023, Lewis 2025), IRONMAN (Cleland 2024, Docherty 2024), Ponikowski (2023) et Packer (2022/2024)',
      detail: 'Rôle décisif du CST < 20 % contre ferritine isolée < 100 µg/L, remodelage du fer par iSGLT2/ARNI et essais COMBINED-HF / INFERRCT.',
    },
    {
      label: 'IRONOUT-HF (JAMA 2017, texte intégral), ORION-HF (2025), Karavidas (2021), AEGIS-H2H, Bertani (2021), Bovell-Benjamin (2000), Fischer (2023) et Pantopoulos (2024)',
      detail: 'Échec du fer oral classique dans l’ICFER (78 % ischémique), formes orales récentes et blocage par l’hepcidine.',
    },
    {
      label: 'Docherty (DAPA-HF 2022), Ferreira (EMPEROR 2025), Cabrera (2020), Marques (2026), Stoffel (2017), Sato (2025) et Ni (2025)',
      detail: 'Modulation de l’hepcidine sous iSGLT2, limites de la ferritine seule et hyperferritinémie métabolique.',
    },
    {
      label: 'Recommandations ESC 2026, NICE NG106 (2025), AHA/ACC/HFSA 2022 et Khan et al. (2021)',
      detail: 'Classes ESC I/IIa, critères NICE 1.4.5–1.4.7 (note hypophosphatémie FCM), recommandation américaine 2a B-R et contre-indication des ASE.',
    },
  ],
  disclaimerType: 'medical',
};
