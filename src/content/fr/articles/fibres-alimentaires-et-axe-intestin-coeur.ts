import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'fibres-alimentaires-et-axe-intestin-coeur',
  sourceWikiPath: 'wiki/concepts/dietary-fibre-and-gut-heart-axis.md',
  titleFr: 'Fibres alimentaires, microbiote et axe intestin-cœur',
  category: 'nutrition',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'fibres-alimentaires',
    'fibres',
    'microbiote-intestinal',
    'axe-intestin-coeur',
    'tmao',
    'probiotiques',
    'saccharomyces-boulardii',
    'rifaximine',
    'gutheart',
    'psyllium',
    'ispaghul',
    'interactions',
    'nutrition',
  ],
  aliases: [
    'Fibres',
    'Fibres alimentaires',
    'Microbiote intestinal',
    'Axe intestin-cœur',
    'TMAO',
    'Probiotiques',
    'Psyllium',
    'Ispaghul',
    'Essai GutHeart',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Les fibres proviennent des aliments végétaux peu transformés (céréales complètes, légumineuses, légumes, fruits, noix) et sont en partie fermentées par les bactéries de l'intestin. L'hypothèse d'un « axe intestin-cœur » repose encore surtout sur des travaux de laboratoire, et trois réalités doivent être distinguées : une alimentation riche en fibres (environ 25 à 29 g/j) est solidement associée en population générale à une baisse d'environ 15 % de la mortalité globale et d'environ 30 % des décès coronaires (à aborder avec votre équipe dans le cadre d'une alimentation cardioprotectrice) ; en revanche, les probiotiques, antibiotiques ou autres produits ciblant le microbiote n'ont pas amélioré la fonction cardiaque dans le seul essai dédié à l'ICFER (GutHeart, 151 patients : non étayés pour le cœur) ; enfin, les compléments de fibres de type psyllium (ispaghul) sont des traitements de la constipation pouvant retarder l'absorption de la digoxine ou de la warfarine et nécessitant suffisamment de liquide (à discuter avec votre pharmacien ou votre équipe, surtout en cas de limite hydrique).",
  sections: [
    {
      headingFr: 'Fibres alimentaires et santé cardiovasculaire',
      bodyMarkdownFr: `### Population générale : les preuves les plus solides

Une série de méta-analyses commandée par l'OMS et publiée dans *The Lancet* (**Reynolds 2019**) a regroupé **185 études de cohorte** (environ 135 millions de personnes-années) et **58 essais cliniques**. En comparant les apports en fibres les plus élevés aux plus faibles :

| Critère | Risque relatif (IC 95 %) |
|---|---|
| **Mortalité toutes causes** | **0,85** (0,79–0,91) |
| **Décès par maladie coronaire** | **0,69** (0,60–0,81) |
| **Nouvelle maladie coronaire** | **0,76** (0,69–0,83) |
| **Accident vasculaire cérébral (AVC)** | **0,78** (0,69–0,88) |

- Le bénéfice observé était maximal autour de **25 à 29 g de fibres par jour**, avec une relation linéaire (-7 % de mortalité globale pour chaque tranche supplémentaire de 8 g/j).
- Dans les essais cliniques, une augmentation des fibres abaissait le poids, la pression artérielle et le cholestérol.
- **Limite :** les auteurs soulignent que ces résultats concernent la population générale et non des patients atteints d'une maladie chronique constituée ; aucune analyse spécifique sur l'insuffisance cardiaque n'y figure.

### Chez les personnes atteintes d'insuffisance cardiaque : preuves faibles

Dans une enquête américaine (**Wang 2025**, NHANES 1999–2018, 1 510 adultes déclarant une insuffisance cardiaque suivis environ 6 ans), le quart consommant au moins **19,1 g/j** de fibres présentait moins de décès que celui consommant moins de 8,8 g/j :

- **mortalité toutes causes :** **HR 0,68** (IC 95 % 0,51–0,90) ;
- **mortalité cardiovasculaire :** **HR 0,60** (IC 95 % 0,40–0,88) ;
- les groupes intermédiaires ne différaient pas.

**Limites majeures :** l'insuffisance cardiaque était autodéclarée, la FEVG et la cause étaient inconnues, l'apport en fibres provenait d'un seul rappel alimentaire de 24 heures, le mode de vie diffère fortement chez les personnes mangeant plus de fibres, et la section statistique comportait des incohérences. Il s'agit donc d'une **association observationnelle**, et non d'une preuve.

Aucun essai randomisé n'a évalué un régime ou un complément de fibres sur la mortalité ou les hospitalisations dans l'IC. La vérification de registre (25 novembre 2026) ne retrouve que de petits pilotes (fibres de gomme d'acacia chez 51 patients sur le NT-proBNP ; étude du butyrate dans l'ICFEP).`,
    },
    {
      headingFr: 'Axe intestin-cœur : TMAO, probiotiques et essai GutHeart',
      bodyMarkdownFr: `### Le TMAO est un marqueur de risque, pas une cible démontrée

Les bactéries intestinales transforment la choline et la carnitine (issues de la viande, des œufs et de certains compléments) en un composé converti en **TMAO** par le foie. Les travaux suggérant un effet délétère du TMAO sur le cœur et les reins sont principalement menés chez l'animal (**Lai 2025**).

Chez les personnes atteintes d'insuffisance cardiaque, une méta-analyse de 10 études (**Li 2022**) associe un TMAO élevé à davantage de décès (**RR 1,35** ; IC 95 % 1,28–1,42) et d'événements cardiaques majeurs (**RR 1,28** ; IC 95 % 1,17–1,39), en IC chronique comme aiguë. Plusieurs limites nuancent ce signal :

- le TMAO est éliminé par les reins, et **seules 5 études ont ajusté sur la fonction rénale** ;
- aucun seuil biologique consensuel n'existe ;
- l'effectif annoncé de 13 425 participants compte trois fois la même cohorte (environ 8 957 patients uniques) ;
- un biais de publication est possible.

Le TMAO se comporte ainsi comme un **marqueur de risque** (à l'image du NT-proBNP) : rien ne prouve qu'abaisser son taux améliore le pronostic.

### Cibler le microbiote n'a pas aidé dans l'ICFER : l'essai GutHeart

L'essai **GutHeart (Awoyemi 2021)** est le seul essai randomisé de taille adéquate ayant ciblé le microbiote dans l'ICFER stable : **151 patients** (FEVG < 40 %, moyenne ~30 %, **53 à 59 % de cause ischémique**, Norvège et Brésil) ont été répartis pendant 3 mois entre :

- l'antibiotique intestinal **rifaximine** ;
- la levure probiotique ***Saccharomyces boulardii*** ;
- les soins usuels seuls.

**Résultats à 3 mois :**

- **FEVG :** **29,6 %** sous rifaximine, **30,3 %** sous *S. boulardii* et **31,5 %** sous soins usuels (**aucune différence significative**) ;
- **NT-proBNP, CRP, TMAO et diversité du microbiote :** aucun changement ;
- **tolérance :** 3 patients sous rifaximine et 5 sous probiotique ont arrêté pour effets indésirables digestifs.

L'essai était ouvert, court, antérieur aux iSGLT2 et les participants avaient un microbiote initial moins altéré qu'attendu, mais il n'a pas confirmé le signal d'un petit pilote de 2015 (20 patients) avec la même levure. Un panel d'experts (ILEP 2020, avec liens industriels) n'avait formulé avant GutHeart qu'une hypothèse non cotée faute de données. Les essais de gélules de transplantation fécale dans l'IC en sont encore aux phases 1–2, principalement dans l'ICFEP.`,
    },
    {
      headingFr: 'Compléments de fibres (psyllium / ispaghul) : précautions pratiques',
      bodyMarkdownFr: `Les sachets d'ispaghul (psyllium — par exemple *Spagulax* ou *Transilane* en France) sont des laxatifs de lest contre la constipation, et non des traitements de l'insuffisance cardiaque. D'après la notice officielle britannique de référence (*Fybogel*) :

- le psyllium peut **retarder l'absorption des glycosides cardiaques (digoxine)** et des **anticoagulants coumariniques (warfarine — *Coumadine*)**, ainsi que des minéraux, de la vitamine B12, de la carbamazépine et du lithium ;
- il doit être pris **à distance d'au moins 30 à 60 minutes** des autres médicaments ;
- chaque sachet impose de boire **au moins 150 mL de liquide** pour éviter un risque d'obstruction de la gorge ou du tube digestif ;
- une surveillance médicale est nécessaire en cas de traitement par hormones thyroïdiennes ou antidiabétiques.

**Points clés pour votre quotidien :**
- Si votre cardiologue vous a prescrit une **limite quotidienne de liquides**, l'eau nécessaire à un laxatif de lest compte dans ce total : discutez avec votre équipe du laxatif le mieux adapté à votre situation (pour l'oxyde de magnésium utilisé comme laxatif et le risque d'hypermagnésémie en cas de fonction rénale diminuée, voir la fiche *Magnésium et insuffisance cardiaque*).
- **Si vous prenez de la digoxine ou de la warfarine, faites vérifier vos horaires de prise par votre pharmacien.**`,
    },
    {
      headingFr: 'Verdict et repères pratiques',
      bodyMarkdownFr: `- **Alimentation riche en fibres (légumes, fruits, légumineuses, céréales complètes, noix non salées) :** **à aborder avec votre équipe** dans le cadre d'une alimentation cardioprotectrice de type méditerranéen (certitude modérée en population générale, faible dans l'IC spécifiquement ; en cas de potassium sanguin élevé sous ARNI/IEC/ARA2 ou ARM, l'adaptation se fait avec votre équipe ou un(e) diététicien(ne)).
- **Probiotiques et traitements visant le microbiote pour le cœur :** **non étayés** (certitude modérée que les probiotiques testés ne modifient pas la FEVG).
- **Compléments de fibres (psyllium / ispaghul) :** option contre la constipation à valider avec votre médecin ou votre pharmacien, en respectant l'espacement des prises médicamenteuses et vos consignes hydriques.`,
    },
  ],
  relatedArticleSlugs: [
    'alimentation-cardioprotectrice',
    'sel-et-liquides-insuffisance-cardiaque',
    'interactions-complements-aliments-medicaments',
    'magnesium-insuffisance-cardiaque',
    'berberine-cholesterol-et-interactions',
    'tableau-preuves-nutrition-complements',
    'nutrition-et-complements-insuffisance-cardiaque',
  ],
  sources: [
    {
      label: 'Reynolds et al. (2019, The Lancet — méta-analyse commandée par l’OMS)',
      detail: '185 cohortes (~135 millions de personnes-années) et 58 essais en population générale : mortalité globale RR 0,85 et décès coronaires RR 0,69 (optimal à 25–29 g/j).',
    },
    {
      label: 'Wang et al. (2025, NHANES) et registre ClinicalTrials.gov (25 novembre 2026)',
      detail: 'Enquête observationnelle chez 1 510 adultes déclarant une IC (HR 0,68, limites méthodologiques) et absence d’essai clinique randomisé sur événements IC.',
    },
    {
      label: 'Essai GutHeart (Awoyemi et al., 2021), Li et al. (2022) et Lai et al. (2025)',
      detail: 'Rifaximine et Saccharomyces boulardii neutres sur la FEVG dans l’ICFER (151 patients), méta-analyse TMAO (marqueur confondu par le rein) et revue préclinique axe intestin-cœur.',
    },
    {
      label: 'Notice britannique ispaghul (Fybogel SmPC) et avis ILEP (2020)',
      detail: 'Interaction d’absorption avec digoxine et warfarine, espacement de 30 à 60 minutes et apport minimal de 150 mL d’eau par sachet.',
    },
  ],
  disclaimerType: 'medical',
};
