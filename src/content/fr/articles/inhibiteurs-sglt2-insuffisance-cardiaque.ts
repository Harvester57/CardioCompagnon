import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'inhibiteurs-sglt2-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/concepts/sglt2-inhibitors-in-hfref.md',
  titleFr: 'Inhibiteurs du SGLT2 dans l’ICFER ischémique',
  category: 'traitements',
  readingTier: 'deep_dive',
  asOf: '2026-11-27',
  confidence: 'high',
  volatility: 'warm',
  tags: [
    'isglt2',
    'dapagliflozine',
    'empagliflozine',
    'sotagliflozine',
    'dapa-hf',
    'emperor-reduced',
    'empulse',
    'empact-mi',
    'dapa-mi',
    'icfer',
    'dfge',
    'acidocétose',
    'traitement-de-fond',
  ],
  aliases: [
    'iSGLT2',
    'Gliflozines',
    'Dapagliflozine',
    'Forxiga',
    'Empagliflozine',
    'Jardiance',
    'Sotagliflozine',
    'DAPA-HF',
    'EMPEROR-Reduced',
    'Inhibiteurs SGLT2',
  ],
  linkedModules: ['core', 'diabetes', 'ckd'],
  plainSummaryFr:
    "Les inhibiteurs du SGLT2 — dapagliflozine (Forxiga) et empagliflozine (Jardiance) — sont d'anciens médicaments du diabète devenus l'un des quatre piliers du traitement de l'ICFER, que vous soyez diabétique ou non. Dans deux grands essais, environ 1 patient sur 20 a évité une aggravation d'insuffisance cardiaque ou un décès cardiovasculaire sur 16 à 18 mois, y compris en cas de cardiomyopathie ischémique. Ils se prennent à dose fixe (10 mg par jour, sans paliers). Une petite baisse initiale du DFGe est attendue. Les principaux points pratiques sont l'hygiène génitale et le plan de pause temporaire lors d'une maladie aiguë, d'un jeûne ou d'une chirurgie.",
  sections: [
    {
      headingFr: 'Rôle, posologie simple et protection avec ou sans diabète',
      depth: 'patient',
      bodyMarkdownFr: `Les inhibiteurs du SGLT2 (gliflozines) bloquent un transporteur de sucre et de sel dans les reins, favorisant une élimination modérée de glucose et d'eau dans les urines. Leur mécanisme exact de protection cardiaque reste débattu (effet diurétique doux, ralentissement du déclin rénal, meilleure mobilisation du fer et production de globules rouges).

- **Utiles avec ou sans diabète :** ils n'abaissent l'hémoglobine glyquée (HbA1c) que chez les personnes diabétiques, mais la protection cardiaque et rénale est strictement identique chez les personnes non diabétiques, sans provoquer d'hypoglycémie isolée (en cas de diabète traité par insuline ou sulfamide, votre médecin vérifie s'il faut adapter ces autres doses).
- **Une seule dose, sans titration :** la **dapagliflozine (*Forxiga*)** comme l'**empagliflozine (*Jardiance*)** se prennent à **10 mg une fois par jour**, à tout moment de la journée (souvent le matin pour limiter les levers nocturnes), avec ou sans repas.
- **Fonction rénale :** les notices européennes déconseillent d'initier la dapagliflozine sous un DFGe de **25 mL/min/1,73 m²** et l'empagliflozine sous **20 mL/min/1,73 m²**, sans fixer de seuil d'arrêt automatique une fois le traitement débuté. Une petite baisse initiale du DFGe (environ 2,5 à 4 mL/min/1,73 m² les premières semaines) est **attendue et transitoire** ; à long terme, ces médicaments ralentissent le vieillissement rénal et n'élèvent pas le potassium.`,
    },
    {
      headingFr: 'Effets secondaires, chirurgie et règles des « jours de maladie »',
      depth: 'patient',
      bodyMarkdownFr: `- **Mycoses génitales :** effet indésirable le plus typique (plus fréquent que sous placebo, mais le plus souvent bénin et ne justifiant presque jamais l'arrêt du traitement). Une toilette intime quotidienne douce et le maintien au sec aident à les prévenir. La gangrène de Fournier (infection génitale grave) est listée comme très rare ou rare : toute douleur, rougeur ou gonflement important de la zone génitale avec fièvre impose une consultation urgente.
- **Tension et hydratation :** une légère baisse de tension ou de volume hydrique peut survenir, surtout avec des diurétiques ; parlez-en à votre équipe si vous ressentez des vertiges.
- **Acidocétose (y compris à glycémie normale) :** complication rare, survenant surtout chez les personnes diabétiques, mais exceptionnellement décrite sans diabète lors d'un jeûne prolongé, d'une alimentation très pauvre en glucides, d'une gastro-entérite sévère ou d'une opération. Des nausées, vomissements, douleurs abdominales ou une respiration rapide imposent un avis médical rapide.
- **Pause encadrée lors d'une maladie aiguë ou d'une opération :** les notices européennes préconisent d'interrompre temporairement le comprimé lors d'une hospitalisation pour chirurgie majeure ou maladie aiguë grave, ainsi qu'en cas de pertes digestives (vomissements, diarrhée) jusqu'à récupération. Les recommandations péri-opératoires conseillent habituellement un arrêt **3 à 4 jours avant** une chirurgie programmée. Convenez d'un **plan écrit personnalisé** avec votre équipe (voir *Chirurgie, soins dentaires et règles des « jours de maladie »*).`,
    },
    {
      headingFr: 'Essais pivots, sous-groupe ischémique et essais post-infarctus',
      depth: 'evidence',
      bodyMarkdownFr: `### Essais principaux dans l'insuffisance cardiaque et après infarctus

| Essai | Population (n, FEVG, part ischémique) | Fond thérapeutique | Résultat principal | Applicabilité ICFER ischémique |
|---|---|---|---|---|
| **DAPA-HF** (dapagliflozine, NEJM 2019, texte intégral) | 4 744 ; FEVG ≤ 40 % (moy. 31 %), NYHA II–IV ; **56 % ischémiques** ; 42–45 % diabète ; DFGe ≥ 30 | IEC 56 %, ARA2 28 %, **ARNI 11 %**, BB 96 %, ARM 71 % ; 18,2 mois | Aggravation IC ou décès CV **16,3 % vs 21,2 %**, **HR 0,74** (0,65–0,85), NNT 21 ; décès CV **HR 0,82** et mortalité **HR 0,83** (nominaux hors hiérarchie) | Directe (partielle sur fond ARNI) |
| **EMPEROR-Reduced** (empagliflozine, NEJM 2020, texte intégral) | 3 730 ; FEVG ≤ 40 % (moy. 27 %) ; **52 % ischémiques** ; 50 % diabète ; DFGe ≥ 20 | **ARNI 19,5 %**, BB 95 %, ARM 71 % ; 16 mois | Décès CV ou hospitalisation IC **19,4 % vs 24,7 %**, **HR 0,75** (0,65–0,86), NNT 19 (hospitalisations **HR 0,69**) ; décès CV **HR 0,92** (0,75–1,12, NS) | Directe (axée FEVG ≤ 30 %) |
| **Zannad 2020** (Lancet, résumé) | 8 474 (pool DAPA-HF + EMPEROR-Reduced) | Identique | Mortalité toutes causes **HR 0,87** (0,77–0,98) ; décès CV **HR 0,86** (0,76–0,98) ; composite rénal **HR 0,62** | Directe (résumé seul, provisoire) |
| **EMPULSE** (Nat Med 2022, texte intégral) | 530 hospitalisés IC aiguë stabilisés (méd. J3), ~67 % FEVG ≤ 40 % | ARNI ~15 %, ARM 47–57 % ; 90 jours | Win ratio **1,36** (1,09–1,68 ; ~2/3 portés par le score symptomatique ; décès 4,2 % vs 8,3 %) | Partielle (initiation hospitalière) |
| **SOLOIST-WHF** (sotagliflozine, NEJM 2021) | 1 222 diabétiques type 2 post-hospitalisation IC, toute FEVG (méd. 35 %) | Arrêt précoce (financement), critère élargi | Total décès CV, hospitalisations et visites urgentes **HR 0,67** (0,52–0,85) ; mortalité NS | Partielle (diabète seul, SGLT1/2) |
| **DELIVER / EMPEROR-Preserved** (2021–2022) | 6 263 et 5 988 ; **FEVG > 40 %** (18 % FEVG améliorée dans DELIVER : HR 0,74) | Contraste | **HR 0,82** et **0,79** (événements IC ; décès CV NS). Pool 5 essais (21 947) : **HR 0,77**, homogène sur toute FEVG (p = 0,83) | Indirecte (utile si FEVG remonte > 40 %) |
| **EMPACT-MI** (NEJM 2024) | 6 522 post-IDM aigu sans IC préalable, FEVG < 45 % et/ou congestion ; **100 % ischémiques** | IEC/ARA2/ARNI 82 %, BB 86 %, ARM 47 % | 1re hospitalisation IC ou décès **8,2 % vs 9,1 %**, **HR 0,90** (0,76–1,06, p = 0,21, neutre) ; total hospitalisations IC **RR 0,67** (exploratoire) | Indirecte (IDM aigu avant IC) |
| **DAPA-MI** (NEJM Evid 2024) | 4 017 post-IDM sans diabète ni IC chronique (78 % FEVG < 50 %) | Critère modifié en win ratio cardiométabolique (1,34) | Critère dur décès CV ou hospitalisation IC **2,5 % vs 2,6 %**, **HR 0,95** (0,64–1,40, neutre ; FEVG < 50 % : HR 1,12) | Indirecte |

### Analyse détaillée : étiologie ischémique contre non ischémique

- **Sous-groupe ischémique (Butt 2021 ; Khan 2023, textes intégraux) :**
  - **DAPA-HF (2 674 ischémiques) :** critère principal **HR 0,77** (0,65–0,92, p d'interaction = 0,55) ; hospitalisation IC **HR 0,68** ; décès CV **HR 0,92** (0,74–1,14) ; mortalité toutes causes **HR 0,92** (0,76–1,12).
  - **EMPEROR-Reduced (1 929 ischémiques) :** critère principal **HR 0,82** (0,68–0,99, p d'interaction = 0,149) ; 1re hospitalisation IC **HR 0,76** (0,61–0,96) ; décès CV **HR 0,96** (0,74–1,25) ; mortalité toutes causes **HR 0,99** (0,79–1,24).
- **Sous-groupe non ischémique :** critère principal **HR 0,71** (DAPA-HF) et **0,67** (EMPEROR-Reduced) ; mortalité toutes causes **HR 0,70** et **0,82**.
- **Lecture prudente :** les tests d'interaction ne sont pas significatifs (aucune preuve que le médicament agisse moins bien en cause ischémique), mais les estimations de **mortalité isolée** dans le sous-groupe ischémique restent proches de 1 avec de larges intervalles de confiance, et aucun pool dédié aux seuls patients ischémiques sur la mortalité n'est publié. L'étiologie était déclarée par les investigateurs sans analyse par antécédent de pontage ou de stent.`,
    },
    {
      headingFr: 'Reins, sécurité chiffrée, recommandations et limites',
      depth: 'evidence',
      bodyMarkdownFr: `### Baisse initiale du DFGe et protection rénale à long terme

- Dans **DAPA-HF** (Adamson 2022), le DFGe a baissé en moyenne de **4,2 contre 1,1 mL/min/1,73 m²** à 2 semaines (baisse > 30 % chez 3,4 % vs 1,3 %). Une baisse > 10 % sous dapagliflozine n'était **pas** associée à un moins bon pronostic (**HR 0,73** contre **1,45** sous placebo, interaction p < 0,001).
- Pente rénale à long terme ralentie : **-1,09 vs -2,85 mL/min/an** dans DAPA-HF et **-0,55 vs -2,28 mL/min/an** dans EMPEROR-Reduced. Efficacité identique avec ou sans MRC (p d'interaction 0,54 et 0,63). Sur 13 essais (**SMART-C**), réduction de **23 %** des insuffisances rénales aiguës.

### Fréquence des effets indésirables dans les essais

- **Mycoses génitales :** dans les essais EMPEROR, **1,7 % vs 0,7 %** sans diabète et **2,3 % vs 0,8 %** avec diabète ; dans DAPA-HF, **0,3 %** d'arrêts et aucun cas grave.
- **Déplétion volémique / hypotension :** **7,5 % vs 6,8 %** (DAPA-HF) et **11,4 % vs 9,7 %** (EMPEROR).
- **Acidocétose :** 3 cas sous dapagliflozine dans DAPA-HF (tous diabétiques), aucun dans EMPEROR-Reduced. Dans **SMART-C** (13 essais), risque environ doublé en diabète (**RR 2,12**, ~1 cas supplémentaire pour 1 000 patients-années en MRC diabétique), contre seulement 1 événement pour ~30 000 patients-années sans diabète.

### Recommandations comparées (au 26 novembre 2026) et lacunes

- **ESC 2026 :** **Classe I, Niveau A** dans toute IC symptomatique quelle que soit la FEVG.
- **AHA/ACC/HFSA 2022 :** **COR 1, LOE A** dans l'ICFER chronique symptomatique avec ou sans diabète.
- **NICE NG106 (2025) :** proposer d'emblée avec IEC, bêtabloquant et ARM sans ordre imposé.
- **Lacunes :** faible proportion de patients déjà sous ARNI dans DAPA-HF (11 %) et EMPEROR-Reduced (19,5 %) ; aucun essai dédié exclusivement à la cardiomyopathie ischémique ; aucun essai randomisé évaluant la pause à domicile lors des « jours de maladie ».`,
    },
  ],
  relatedArticleSlugs: [
    'these-benefice-dai-sous-quadritherapie',
    'medicaments-insuffisance-cardiaque',
    'iec-ara2-et-arni-sacubitril-valsartan',
    'betabloquants-insuffisance-cardiaque',
    'arm-steroidiens-spironolactone-eplerenone',
    'diabete-insuffisance-cardiaque',
    'maladie-renale-insuffisance-cardiaque',
    'chirurgie-soins-dentaires-et-jours-de-maladie',
    'dysfonction-vg-asymptomatique-stade-b',
    'medicaments-effets-secondaires-suivi',
    'insuffisance-cardiaque-fevg-amelioree',
    'these-jours-de-maladie-sraa-vs-isglt2',
  ],
  sources: [
    {
      label: 'Essais pivots ICFER : DAPA-HF (NEJM, 2019), EMPEROR-Reduced (NEJM, 2020), Zannad (Lancet, 2020) et analyses par étiologie (Butt 2021, Khan 2023)',
      detail: 'Résultats principaux, sous-groupes ischémiques et diabétiques (Petrie 2020, Anker 2021) et données rénales (Adamson 2022, Jhund 2021, Zannad 2021)',
    },
    {
      label: 'Essais complémentaires : EMPULSE (2022), SOLOIST-WHF (2021), DELIVER / EMPEROR-Preserved / Vaduganathan (2022), EMPACT-MI (2024), DAPA-MI (2024)',
      detail: 'Initiation hospitalière, FEVG > 40 % dont FEVG améliorée, et résultats neutres sur critères durs en post-infarctus aigu sans IC préalable',
    },
    {
      label: 'Sécurité et réglementation : RCP EMA Forxiga (2025) et Jardiance (2026), SMART-C (2022), séries d’acidocétose non diabétique (2025–2026) et AHA/ACC 2024 péri-opératoire',
      detail: 'Seuils de DFGe à l’initiation, infections génitales, acidocétose euglycémique et suspension pré-opératoire',
    },
    {
      label: 'Recommandations ESC 2026 (Tableau 5), AHA/ACC/HFSA 2022 (section 7.3.4) et NICE NG106 (2025)',
      detail: 'Recommandation de première intention (Classe I, Niveau A) dans l’insuffisance cardiaque symptomatique',
    },
  ],
  disclaimerType: 'medical',
};
