import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'alimentation-cardioprotectrice',
  sourceWikiPath: 'wiki/concepts/heart-healthy-eating-patterns.md',
  titleFr: 'Alimentation cardioprotectrice (modèle méditerranéen)',
  category: 'nutrition',
  asOf: '2026-11-24',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'alimentation-méditerranéenne',
    'régime-dash',
    'alimentation',
    'prévention-secondaire',
    'maladie-coronaire',
    'cordioprev',
    'aliments-ultra-transformés',
    'gourmet-hf',
    'food-hf',
    'café',
    'noix',
    'stérols-végétaux',
  ],
  aliases: [
    'Régime méditerranéen',
    'Régime DASH',
    'Alimentation pour le cœur',
    'Alimentation maladie coronaire',
    'Café et caféine',
    'Aliments ultra-transformés',
    'Fruits à coque',
    'Stérols végétaux',
    'Repas médicalisés livrés',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "La cardiomyopathie ischémique comporte deux volets : des artères coronaires rétrécies et un muscle cardiaque affaibli. Une alimentation de type méditerranéen (légumes, légumineuses, poisson, fruits à coque, huile d'olive vierge extra, peu d'aliments transformés) dispose des meilleures preuves globales pour protéger les artères coronaires : dans l'essai CORDIOPREV sur 7 ans, elle a réduit d'environ un quart les événements cardiovasculaires majeurs par rapport à un régime pauvre en graisses. En revanche, cet essai a exclu les FEVG ≤ 35 %, et aucun régime n'a encore prouvé une baisse des hospitalisations ou de la mortalité dans l'ICFER établie. Le café modéré paraît neutre ou favorable sur la fibrillation atriale hors ICFER, les noix aident le versant coronaire, les produits ultra-transformés sont associés à un pronostic cardiovasculaire moins favorable, et les stérols végétaux abaissent modestement le LDL sans preuve sur les événements.",
  sections: [
    {
      headingFr: 'Le modèle méditerranéen et l’essai CORDIOPREV',
      bodyMarkdownFr: `**CORDIOPREV (The Lancet, 2022) :**
- **Protocole :** 1 002 personnes atteintes de maladie coronaire avérée (âge moyen 60 ans, 82 % d'hommes), randomisées pendant 7 ans entre une alimentation méditerranéenne riche en huile d'olive vierge extra et un régime pauvre en graisses riche en glucides complexes.
- **Résultats :** les événements cardiovasculaires majeurs (infarctus, revascularisation, AVC, artériopathie périphérique, décès cardiovasculaire) sont survenus à un taux de **28,1 contre 37,7 pour 1 000 personnes-années** (HR ajusté d'environ **0,72 à 0,75**), soit environ 9 à 10 événements évités pour 1 000 personnes par an.
- **Délai d'action et sous-groupes :** les courbes ne se séparent qu'après environ 3 ans, ce qui en fait une stratégie de long terme. Le bénéfice était net chez les hommes, sans différence significative chez les 175 femmes incluses.
- **Limite majeure pour l'ICFER :** l'essai a **exclu l'insuffisance cardiaque NYHA III-IV et les FEVG ≤ 35 %**, et n'a pas rapporté les événements d'insuffisance cardiaque. L'appliquer à l'ICFER repose donc sur une extrapolation à partir de la maladie coronaire.
- **Autres réserves :** essai monocentrique, sans insu des participants, avec la participation de fondations de la filière oléicole parmi les financeurs.

**Données spécifiques dans l'insuffisance cardiaque :**
- **Prévention d'une nouvelle IC :** dans les essais regroupés (Khan 2021), le régime méditerranéen a été associé à moins de nouveaux cas d'IC (RR 0,45), mais avec une certitude faible. Une analyse secondaire de PREDIMED (citée par l'ESC 2026) n'a pas trouvé de différence d'incidence de l'IC entre régime méditerranéen et régime pauvre en graisses.
- **Traitement d'une ICFER établie :** aucun essai randomisé de régime méditerranéen n'a été conduit chez des patients déjà atteints d'ICFER.
- **Données observationnelles :** dans la cohorte Women's Health Initiative (3 215 femmes avec IC, FEVG inconnue), les scores méditerranéens les plus élevés étaient liés à une baisse de 15 % de la mortalité, à la limite de la significativité. Une méta-analyse de 2025 (3 études) retrouve une mortalité réduite de 12 % (OR 0,88 ; IC 95 % 0,78–0,99). Il s'agit d'associations mesurées autour du diagnostic, non d'essais interventionnels.`,
    },
    {
      headingFr: 'Régime DASH et essais de repas livrés après hospitalisation',
      bodyMarkdownFr: `Le modèle **DASH** (*Dietary Approaches to Stop Hypertension*) privilégie légumes, fruits, produits laitiers allégés, céréales complètes, fruits à coque et légumineuses, tout en limitant le sel, la viande rouge et les sucres ajoutés.

Les essais menés jusqu'ici dans l'insuffisance cardiaque restent petits, portent sur des FEVG mixtes et ne fournissent pas de résultat séparé pour l'ICFER :

| Essai | Population | Intervention | Résultats |
|---|---|---|---|
| **GOURMET-HF (2018)** | 66 patients après hospitalisation pour IC ; FEVG moyenne 39 % ; tous hypertendus | 4 semaines de repas DASH livrés à domicile (1 500 mg sodium/j) contre brochure | Pas de gain significatif sur le score principal de qualité de vie ; réhospitalisations IC à 30 jours : 3 contre 11 événements (p = 0,055, essai pilote) |
| **FOOD-HF (2026)** | 150 patients après hospitalisation pour IC ; FEVG médiane 35 % ; moitié en insécurité alimentaire | 90 jours de repas médicalisés pauvres en sodium ou produits frais contre conseils | Réhospitalisations IC ou urgences non réduites (23 % contre 18 %) ; qualité de vie améliorée |

**Données observationnelles :** dans la cohorte Women's Health Initiative, les scores DASH les plus élevés étaient associés à 16 % de mortalité en moins après une hospitalisation pour IC (HR 0,84). Une méta-analyse de 2025 associe le régime DASH à moins d'insuffisance cardiaque incidente (OR 0,83), mais sans diminution significative de la mortalité une fois l'IC installée (2 études).

**Point de vigilance sur le potassium :** le régime DASH est naturellement riche en potassium. Dans GOURMET-HF, la teneur en potassium des repas avait été réduite chez les patients ayant une fonction rénale diminuée, une kaliémie haute ou un diurétique épargneur de potassium ; un participant ayant reçu par erreur les repas standard a développé une hyperkaliémie. Si vous prenez un IEC, un ARA2, un ARNI ou un ARM, tout changement alimentaire majeur vers un régime très riche en potassium doit être validé avec votre équipe.

**Autres régimes :** la cartographie de Khan (2021) n'a identifié aucun essai randomisé dans l'insuffisance cardiaque pour le régime cétogène ou le jeûne intermittent. En outre, les régimes cétogènes exposent à un risque spécifique d'acidocétose sous iSGLT2.`,
    },
    {
      headingFr: 'Aliments du quotidien : café, ultra-transformés, noix et stérols végétaux',
      bodyMarkdownFr: `Aucun de ces quatre sujets n'a été spécifiquement testé chez des personnes déjà atteintes d'ICFER.

### Café
- **Rythme chez des adultes sains (essai CRAVE) :** chez 100 adultes sans cardiopathie, les jours avec café ont entraîné davantage d'extrasystoles ventriculaires (154 contre 102 par jour), sans modification des extrasystoles atriales, et 36 minutes de sommeil en moins. Les personnes atteintes d'IC ou de FA étaient exclues.
- **Après cardioversion pour FA (essai DECAF) :** chez 200 consommateurs de café atteints de FA persistante (FEVG moyenne 54 %), ceux qui ont maintenu environ **1 tasse par jour** ont eu **moins** de récidives de FA que ceux qui ont arrêté le café (**47 % contre 64 %** sur 6 mois). L'essai était en ouvert et n'a testé qu'environ 1 tasse par jour.
- **Nouvelle insuffisance cardiaque :** dans trois cohortes américaines sans cardiopathie initiale, chaque tasse quotidienne de café caféiné était associée à un risque légèrement moindre de développer une IC. Les auteurs soulignent qu'il s'agit d'une association et non d'une incitation à augmenter sa consommation.
- En résumé, un café modéré apparaît neutre à favorable dans ces populations, mais son effet dans l'ICFER établie ou en cas d'extrasystoles ventriculaires fréquentes n'est pas étudié.

### Aliments ultra-transformés
- Une revue parapluie publiée dans le *BMJ* en 2024 (environ 10 millions de participants, études observationnelles) associe une forte consommation à une hausse de **50 % de la mortalité cardiovasculaire**, avec une tendance constante mais une certitude GRADE très faible.
- **Étude MESA (*JACC: Advances*, 2026, texte intégral) :** chez 6 531 adultes américains de 45 à 84 ans sans maladie cardiaque suivis jusqu'à environ 20 ans, chaque portion quotidienne supplémentaire était liée à environ **5 % d'infarctus, d'AVC et de décès associés en plus (HR 1,05)**. Le cinquième le plus consommateur (environ 9 portions/j) avait un risque multiplié par **1,46** par rapport au cinquième le plus bas (environ 1 portion/j), même après ajustement sur la qualité globale du régime, la tension, le cholestérol, le diabète et le tour de taille ; les produits sucrés montraient le lien le plus net. L'alimentation n'ayant été évaluée qu'une fois par questionnaire, il s'agit d'une association, et cet article ne comporte **pas de critère d'insuffisance cardiaque**.
- Un résumé de congrès 2026 issu de la même cohorte MESA (vu uniquement par voie de presse) liait les ultra-transformés à l'IC à FEVG préservée mais pas à l'ICFER ; l'article complet MESA 2026 est une analyse distincte et ne confirme pas ce résultat.
- **Une analyse divergente (prépublication Lasker 2026, non évaluée par les pairs) :** sur des données américaines NHANES (jusqu'à 100 504 adultes), la plupart des liens s'affaiblissent ou disparaissent avec des méthodes statistiques plus strictes (aucun critère d'IC ; mortalité cardiovasculaire HR 1,01 non significatif ; seuls les boissons sucrées et les viandes transformées conservent une association). Cette analyse présente des limites méthodologiques (rappels alimentaires de 1 à 2 jours, incohérences internes) et constitue un contre-argument fragile.
- Les recommandations ESC 2026 associent également aliments transformés, sucres et graisses saturées à un risque accru d'insuffisance cardiaque.

### Fruits à coque (noix, amandes, noisettes)
- Dans **PREDIMED** (7 447 adultes à haut risque sans maladie cardiovasculaire), un régime méditerranéen enrichi en fruits à coque a réduit les événements cardiovasculaires majeurs de **28 %** par rapport à un régime pauvre en graisses (**3,4 % contre 4,4 %**).
- Dans une méta-analyse de 20 cohortes, environ **28 g par jour** étaient associés à **29 %** de maladie coronaire en moins.
- Ils sont denses en calories et les versions salées apportent du sodium : préférez les fruits à coque **nature, non salés**, en portion raisonnable.

### Stérols et stanols végétaux (margarines et yaourts enrichis)
- Environ **2 g par jour** abaissent le cholestérol LDL de **7 à 10 %** en complément d'une statine (un gain proche du doublement de la dose de statine).
- **Aucun essai clinique** n'a démontré qu'ils réduisent les infarctus ou les décès.
- L'European Atherosclerosis Society indique qu'ils peuvent être envisagés en complément chez les patients à haut risque qui n'atteignent pas leur cible de LDL.
- La mise à jour 2025 des recommandations européennes sur les lipides ne retient aucune indication pour les *compléments alimentaires* pour abaisser le LDL (Classe III), sans mention explicite des aliments enrichis en stérols dans le résumé consulté.`,
    },
    {
      headingFr: 'Recommandations générales et place de l’alcool',
      bodyMarkdownFr: `- **ESC 2026 — conseils d'hygiène de vie :** recommandation de **Classe I, niveau C** (accord d'experts), incluant le maintien d'un poids de santé, une alimentation équilibrée, la lutte contre la sédentarité, l'arrêt du tabac et l'éviction d'une consommation importante d'alcool.
- **ESC 2026 — profil alimentaire :** les régimes riches en légumes, fruits à coque, céréales complètes, poissons et acides gras insaturés sont associés à un risque moindre d'IC, tandis que les régimes riches en sucres, graisses saturées, céréales raffinées et aliments transformés sont liés à un risque plus élevé.
- **Les compléments ne remplacent pas l'alimentation :** les multivitamines et pilules antioxydantes n'ont montré aucun bénéfice cardiovasculaire dans les grandes méta-analyses (An 2022).
- **Alcool :** les recommandations ESC 2026 déconseillent formellement les consommations excessives (toxiques pour le myocarde) et qualifient les données sur les consommations faibles à modérées de mitigées. Les repères pratiques pour la vie quotidienne sont détaillés dans l'article consacré à la vie avec l'insuffisance cardiaque.`,
    },
  ],
  relatedArticleSlugs: [
    'nutrition-et-complements-insuffisance-cardiaque',
    'sel-et-liquides-insuffisance-cardiaque',
    'poids-obesite-et-denutrition',
    'cardiomyopathie-ischemique',
    'omega-3-huile-de-poisson',
    'cholesterol-et-prevention-secondaire',
    'interactions-complements-aliments-medicaments',
    'vivre-avec-insuffisance-cardiaque',
  ],
  sources: [
    {
      label: 'CORDIOPREV (The Lancet, 2022)',
      detail: '1 002 patients coronariens suivis 7 ans, régime méditerranéen contre régime pauvre en graisses, exclusion FEVG ≤ 35 %.',
    },
    {
      label: 'Essais GOURMET-HF (2018), FOOD-HF (2026), cohorte WHI et méta-analyse Arayici (2025)',
      detail: 'Repas DASH/pauvres en sel livrés après hospitalisation et données observationnelles sur les régimes DASH et méditerranéen.',
    },
    {
      label: 'CRAVE, DECAF, Lane 2024 (BMJ), MESA 2026 (JACC: Advances), Lasker 2026, PREDIMED et EAS / ESC',
      detail: 'Données sur le café, les aliments ultra-transformés, les fruits à coque et les stérols végétaux.',
    },
    {
      label: 'Recommandations ESC 2026 et cartographie Khan 2021 / An 2022',
      detail: 'Conseils d’hygiène de vie (Classe I, niveau C), alimentation équilibrée, alcool et absence de substitut par compléments.',
    },
  ],
  disclaimerType: 'medical',
};
