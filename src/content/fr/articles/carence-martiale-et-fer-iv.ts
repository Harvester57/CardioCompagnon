import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'carence-martiale-et-fer-iv',
  sourceWikiPath: 'wiki/concepts/iron-deficiency-and-iv-iron.md',
  titleFr: 'Carence en fer et fer intraveineux',
  category: 'traitements',
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
    "De nombreuses personnes atteintes d'insuffisance cardiaque manquent de fer, même lorsque leur numération sanguine (hémoglobine) est normale. Cette carence aggrave la fatigue et l'essoufflement. Elle se dépiste par une prise de sang (ferritine et coefficient de saturation de la transferrine, ou CST). Lorsqu'elle est confirmée, une perfusion de fer intraveineux en hôpital de jour améliore les symptômes et réduit les hospitalisations pour insuffisance cardiaque d'environ un cinquième à un quart, sans effet démontré sur la mortalité. En revanche, les comprimés de fer par voie orale ne reconstituent quasiment pas les réserves et ne sont pas efficaces dans l'ICFER. Le fer intraveineux est un traitement médical prescrit sur bilan biologique, et non un complément à acheter librement.",
  sections: [
    {
      headingFr: 'Comment définit-on la carence en fer ?',
      bodyMarkdownFr: `- **Définition historique (utilisée dans tous les grands essais cliniques) :** ferritine **< 100 µg/L (ng/mL)**, *ou* ferritine entre **100 et 299 µg/L** associée à un coefficient de saturation de la transferrine (**CST**) **< 20 %**.
- **Orientation discutée par l'ESC 2026 :** les recommandations européennes évoquent une définition reposant uniquement sur le **CST < 20 %**, jugée plus sensible et plus spécifique, en suggérant que les patients ayant un CST < 20 % tireraient le plus grand bénéfice. La formulation exacte du texte intégral indique qu'une telle définition « a été proposée » : il s'agit donc d'une proposition en discussion plutôt que d'une redéfinition formelle définitive. Si elle était adoptée, certains patients diagnostiqués sur la seule ferritine basse ne rempliraient plus le critère, tandis que d'autres ayant une ferritine « normale » mais un CST bas y deviendraient éligibles.
- **Dépistage systématique (ESC 2026) :** le dosage du CST et de la ferritine fait partie du bilan sanguin initial de toute insuffisance cardiaque (**Classe I, Niveau C**) ainsi que des bilans de suivi réguliers.
- **Critères NICE NG106 (Royaume-Uni, mise à jour 2025) :** retient une définition « ou » — **CST < 20 % ou ferritine < 100 µg/L** — lorsque l'hémoglobine est **< 15 g/dL (150 g/L)**.`,
    },
    {
      headingFr: 'Ce que démontre le fer intraveineux',
      bodyMarkdownFr: `Les spécialités évaluées dans les essais sont le **carboxymaltose ferrique (*Ferinject*)** et le **dérisomaltose ferrique (*Monofer*)**, administrés en perfusion intraveineuse. La méta-analyse de 2025 regroupe les six essais contrôlés contre placebo (**FAIR-HF**, **CONFIRM-HF**, **AFFIRM-AHF**, **IRONMAN**, **HEART-FID**, **FAIR-HF2**), totalisant **7 175 patients** avec une FEVG jusqu'à 50 % :

| Critère évalué | 12 premiers mois | Ensemble du suivi |
|---|---|---|
| Hospitalisations pour IC + décès CV | **-28 %** (**RR 0,72**) | **-19 %** (**RR 0,81**) |
| Hospitalisations pour IC seules | **-31 %** (**RR 0,69**) | **-22 %** (**RR 0,78**) |
| Mortalité cardiovasculaire | Non significatif (**HR 0,80**) | Non significatif (**HR 0,87**) |
| Mortalité toutes causes | Non significatif (**HR 0,82**) | Non significatif (**HR 0,92**) |

- Le bénéfice porte essentiellement sur la **réduction des hospitalisations**, particulièrement marquée durant la première année.
- **Tolérance rassurante :** pas davantage d'effets indésirables graves ni d'infections qu'avec le placebo.
- L'effet ne variait pas entre insuffisance cardiaque **ischémique et non ischémique**, ni selon la fonction rénale, le taux d'hémoglobine ou les valeurs martiales de départ.
- **Sexe :** les femmes semblaient bénéficier moins que les hommes (**RR 0,98 contre 0,76**) ; les auteurs indiquent que cela pourrait relever du hasard, même si FAIR-HF2 a retrouvé une tendance similaire.

### FAIR-HF2 (JAMA, 2025) : l'essai le plus proche de la cardiomyopathie ischémique

- **Population :** **1 105 patients** carencés en fer avec **FEVG ≤ 45 %** (dont quelques-uns entre 41 et 45 %) dans 70 centres européens ; âge moyen **70 ans**, majoritairement NYHA II-III ; **78 %** avaient une cardiomyopathie ischémique et **47 %** un antécédent d'infarctus du myocarde. Suivi médian de **16,6 mois**.
- **Schéma d'administration :** jusqu'à **2 000 mg** de carboxymaltose ferrique à l'initiation (en deux visites), puis **500 mg tous les 4 mois** sauf si les réserves en fer étaient déjà élevées ; le placebo était du sérum physiologique.
- **Trois critères principaux :**
  - Décès cardiovasculaire ou 1re hospitalisation pour IC : **141 contre 166 patients**, **HR 0,79** (IC 0,63–0,99), p = 0,04 ;
  - Total des hospitalisations pour IC : **264 contre 320**, **RR 0,80** (IC 0,60–1,06), non significatif ;
  - Décès CV ou 1re hospitalisation pour IC chez les patients avec CST < 20 % : **HR 0,79** (IC 0,61–1,02), non significatif.
- **Pourquoi HR 0,79 ne compte pas comme un succès formel :** avec trois critères principaux simultanés, la règle statistique préspécifiée (**Hochberg**) exigeait soit les trois à p ≤ 0,05, soit deux à p ≤ 0,025, soit un à p ≤ 0,0167. Aucune de ces conditions n'étant atteinte, l'essai est **formellement neutre**, même si l'ampleur de l'effet correspond aux essais antérieurs.
- **Modification du critère principal en cours d'essai :** le critère unique d'origine (total des hospitalisations IC + décès CV) a été remplacé par ces trois critères en **mars 2024**, alors que les données restaient en aveugle, en raison des perturbations liées au COVID-19 et d'incertitudes sur les doses réellement reçues. L'ancien critère, devenu exploratoire, affichait un **RR de 0,76** (IC 0,59–0,98). Environ un tiers des participants (**34 % contre 38 %**) ont arrêté le traitement précocement, réduisant la puissance statistique.
- **Mortalité :** mortalité toutes causes **HR 0,94** (IC 0,72–1,24) ; mortalité cardiovasculaire environ **HR 0,80** (IC 0,55–1,14) ; aucune n'est significative.
- **Tolérance :** événements indésirables graves **48,2 % contre 49,9 %**. L'article principal ne rapporte pas les effets spécifiques du fer tels que l'hypophosphatémie.
- **Sous-groupe ischémique :** estimation à **0,86** (IC 0,62–1,20) chez les patients ischémiques contre **0,57** (IC 0,35–0,94) chez les non ischémiques ; aucun test d'interaction n'est publié et les auteurs ne relèvent pas de différence significative entre sous-groupes (tout comme la méta-analyse poolée). Cela ne montre pas que le fer IV agirait moins bien en cas d'ischémie, mais n'apporte pas de certitude supplémentaire isolément.
- **Traitement de fond associé :** seuls **24 %** environ recevaient un iSGLT2 (**36 à 40 %** un ARNI, environ **70 %** un ARM), les iSGLT2 modifiant eux-mêmes les paramètres martiaux : l'ampleur exacte du bénéfice additionnel au-dessus des quatre piliers complets reste donc moins certaine.

### Pourquoi les essais individuels semblaient « presque positifs »

**AFFIRM-AHF**, **IRONMAN**, **HEART-FID** et **FAIR-HF2** ont chacun manqué de peu leur propre critère principal. Leur regroupement met en évidence une diminution statistiquement solide des hospitalisations, mais la méta-analyse a été menée par les investigateurs mêmes des essais et FAIR-HF2 a été cofinancé par le laboratoire fabricant. Certains experts continuent donc de débattre de l'ampleur exacte de l'effet.`,
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

Des formulations orales plus récentes sont commercialisées comme capables de contourner ces limites. À la date de **novembre 2026**, cela **n'est pas démontré dans l'insuffisance cardiaque** ; l'analyse complète des preuves figure dans *Fer oral à haute biodisponibilité dans l'insuffisance cardiaque* (verdict : preuves insuffisantes, plutôt défavorables).

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
    'fer-oral-haute-biodisponibilite',
    'vitamines-b-insuffisance-cardiaque',
    'nutrition-et-complements-insuffisance-cardiaque',
    'medicaments-insuffisance-cardiaque',
    'tableau-preuves-nutrition-complements',
    'questions-equipe-cardiologie',
    'essais-cliniques-cles',
    'maladies-associees',
  ],
  sources: [
    {
      label: 'Méta-analyse fer IV dans l’insuffisance cardiaque (2025)',
      detail: 'Regroupement de 6 essais (FAIR-HF, CONFIRM-HF, AFFIRM-AHF, IRONMAN, HEART-FID, FAIR-HF2 ; 7 175 patients), sous-groupes et tolérance',
    },
    {
      label: 'FAIR-HF2 (JAMA, 2025, texte intégral)',
      detail: 'Schéma posologique, règle de multiplicité de Hochberg, modification du critère principal en aveugle, tolérance, sous-groupe ischémique (78 %) et taux d’iSGLT2',
    },
    {
      label: 'IRONOUT-HF (JAMA, 2017, texte intégral)',
      detail: 'Population à 78 % ischémique (FEVG médiane 25 %), recharge martiale minimale, rôle de l’hepcidine et tolérance du fer oral',
    },
    {
      label: 'ORION-HF (EJHF, 2025, texte intégral), Karavidas et al. (2021) et registres d’essais (RISE-HF, PREFER-HF)',
      detail: 'Études sur le maltol ferrique et le fer sucrosomial dans l’insuffisance cardiaque et statut des essais contrôlés',
    },
    {
      label: 'AEGIS-H2H, Bertani et al. (2021), Bovell-Benjamin et al. (2000), Fischer et al. (2023), Pantopoulos (2024), Abbati (2019) et Tomosugi (2023)',
      detail: 'Comparaisons fer oral récent vs fer IV en MICI/MRC, absorption du bisglycinate ferreux (Ferrochel) et régulation par l’hepcidine',
    },
    {
      label: 'Docherty et al. (2022), Ferreira et al. (2025), Cabrera et al. (2020), Marques et al. (2026) et Stoffel et al. (2017)',
      detail: 'Modulation de l’hepcidine sous iSGLT2, tests d’absorption du fer dans l’IC et schéma un jour sur deux',
    },
    {
      label: 'Recommandations ESC 2026 sur l’insuffisance cardiaque',
      detail: 'Classes I/IIa pour le fer IV, bilan martial initial (Classe I C) et discussion du seuil CST < 20 %',
    },
    {
      label: 'NICE NG106 (2025), AHA/ACC/HFSA 2022 et Khan et al. (2021)',
      detail: 'Critères britanniques (1.4.5–1.4.7), note sur l’hypophosphatémie, recommandation américaine 2a B-R et contre-indication des ASE (Classe 3 : Danger)',
    },
  ],
  disclaimerType: 'medical',
};
