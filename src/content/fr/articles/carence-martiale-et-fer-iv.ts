import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'carence-martiale-et-fer-iv',
  sourceWikiPath: 'wiki/concepts/iron-deficiency-and-iv-iron.md',
  titleFr: 'Carence en fer et fer intraveineux',
  category: 'traitements',
  asOf: '2026-11-24',
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
    "De nombreuses personnes atteintes d'insuffisance cardiaque manquent de fer, même lorsque leur numération sanguine (hémoglobine) est normale. Cette carence aggrave la fatigue et l'essoufflement. Elle se dépiste par une prise de sang (ferritine et coefficient de saturation de la transferrine, ou CST). Lorsqu'elle est confirmée, une perfusion de fer intraveineux en hôpital de jour améliore les symptômes et réduit les hospitalisations pour insuffisance cardiaque d'environ un cinquième à un quart, sans effet démontré sur la mortalité. En revanche, les comprimés de fer par voie orale ne sont pas efficaces dans l'ICFER. Le fer intraveineux est un traitement médical prescrit sur bilan biologique, et non un complément à acheter librement.",
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

### FAIR-HF2 (2025) : l'essai le plus proche de la cardiomyopathie ischémique

- **1 105 patients** carencés en fer avec FEVG ≤ 45 %, dont **78 % d'ICFER ischémique**.
- Les perfusions répétées de carboxymaltose ferrique ont réduit le décès CV ou la première hospitalisation pour IC d'environ **21 %** (**HR 0,79** ; IC 0,63–0,99 ; p = 0,04). L'essai testant simultanément trois critères principaux, ce résultat a manqué de peu le seuil formel de significativité corrigé pour la multiplicité.
- Seuls **24 %** des participants recevaient un iSGLT2 (classe qui modifie elle-même les paramètres du fer) : l'ampleur exacte du bénéfice additionnel au-dessus des quatre piliers complets reste donc moins certaine.

### Pourquoi les essais individuels semblaient « presque positifs »

**AFFIRM-AHF**, **IRONMAN**, **HEART-FID** et **FAIR-HF2** ont chacun manqué de peu leur propre critère principal. Leur regroupement met en évidence une diminution statistiquement solide des hospitalisations, mais la méta-analyse a été menée par les investigateurs mêmes des essais et FAIR-HF2 a été cofinancé par le laboratoire fabricant. Certains experts continuent donc de débattre de l'ampleur exacte de l'effet.`,
    },
    {
      headingFr: 'Fer par voie orale : pourquoi les comprimés ne suffisent pas',
      bodyMarkdownFr: `Dans l'essai **IRONOUT-HF**, **225 patients** atteints d'ICFER avec carence en fer ont reçu soit un complexe polysaccharidique de fer oral à forte dose (**150 mg deux fois par jour**), soit un placebo pendant **16 semaines**.

- Aucune amélioration n'a été observée sur la capacité à l'effort, la distance de marche, le NT-proBNP ou la qualité de vie.
- L'explication probable est que l'inflammation chronique liée à l'insuffisance cardiaque bloque l'absorption intestinale du fer.
- Prendre des comprimés de fer sans carence documentée expose par ailleurs à des troubles digestifs et à un risque de surcharge en fer.`,
    },
    {
      headingFr: 'Ce que disent les recommandations internationales',
      bodyMarkdownFr: `- **ESC 2026 :** fer intraveineux dans l'ICFER symptomatique avec carence martiale pour améliorer les symptômes et la qualité de vie (**Classe I, Niveau B1**), et à envisager pour réduire les hospitalisations pour insuffisance cardiaque (**Classe IIa, Niveau B1**).
- **NICE NG106 (Royaume-Uni, mise à jour 2025) :**
  - vérifier le bilan martial et l'anémie par CST, ferritine et hémoglobine dans l'ICFER (recommandation 1.4.5) ;
  - envisager du fer intraveineux (fer saccharose *Venofer*, carboxymaltose ferrique *Ferinject* ou dérisomaltose ferrique *Monofer*) dans l'ICFER lorsque l'hémoglobine est **< 15 g/dL (150 g/L)** et le **CST < 20 %** ou la **ferritine < 100 µg/L** (1.4.6) ;
  - si une anémie ferriprive est découverte, ne pas supposer automatiquement que l'insuffisance cardiaque en est la cause et rechercher d'autres origines, notamment digestives (1.4.7).
  - L'argumentaire de NICE souligne un risque significatif d'**hypophosphatémie** (baisse du phosphore sanguin) avec le carboxymaltose ferrique, qui peut être surveillée et corrigée.
- **Recommandations américaines (AHA/ACC/HFSA 2022) :** dans l'ICFER avec carence en fer, avec ou sans anémie, le fer IV est jugé raisonnable pour améliorer le statut fonctionnel et la qualité de vie (**Classe 2a, Niveau B-R**). En revanche, les agents stimulant l'érythropoïèse prescrits pour l'anémie sont classés **nocifs** (**Classe 3 : Danger**).
- Une cartographie des preuves de 2021 (Khan et al.) évaluait l'effet du fer sur la FEVG avec une certitude modérée, mais la FEVG reste un critère intermédiaire ; les données sur les hospitalisations sont venues des essais ultérieurs. Voir aussi *Tableau des niveaux de preuve : nutrition et compléments*.`,
    },
  ],
  relatedArticleSlugs: [
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
      label: 'FAIR-HF2 (JAMA, 2025)',
      detail: 'Essai à majorité ischémique (78 %), multiplicité des critères principaux, taux d’iSGLT2 et analyse par sexe',
    },
    {
      label: 'IRONOUT-HF (2017)',
      detail: 'Essai randomisé démontrant l’inefficacité du fer oral dans l’ICFER',
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
