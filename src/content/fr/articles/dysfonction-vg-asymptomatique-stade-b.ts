import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'dysfonction-vg-asymptomatique-stade-b',
  sourceWikiPath: 'wiki/concepts/asymptomatic-lv-dysfunction-stage-b.md',
  titleFr: 'Dysfonction ventriculaire asymptomatique (stade B)',
  category: 'diagnostic',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'stade-b',
    'pré-insuffisance-cardiaque',
    'dysfonction-vg-asymptomatique',
    'nyha-i',
    'stades',
    'solvd-prevention',
    'save-captopril',
    'capricorn',
    'iec',
    'bêtabloquant',
    'dépistage',
  ],
  aliases: [
    'Stade B',
    'Stage B',
    'Pré-insuffisance cardiaque',
    'Pre-HF',
    'Dysfonction systolique VG asymptomatique',
    'ALVSD',
    'NYHA I',
    'SOLVD-Prevention',
    'SAVE captopril',
    'CAPRICORN',
    'REVERT',
  ],
  linkedModules: ['stageB'],
  plainSummaryFr:
    "Découvrir un ventricule gauche affaibli ou dilaté chez une personne qui n'a jamais eu d'essoufflement, d'œdèmes ni d'autres symptômes d'insuffisance cardiaque correspond au stade B (« pré-insuffisance cardiaque »). Si des symptômes sont déjà apparus un jour, même s'ils ont disparu aujourd'hui (NYHA I), on parle de stade C. Sans traitement, le stade B multiplie nettement le risque d'évoluer vers une insuffisance cardiaque symptomatique. En stade B avec FEVG ≤ 40 %, les recommandations ESC 2026 préconisent IEC (Classe I, A) et bêtabloquants (Classe I, B) ; les classes plus récentes (ARNI, iSGLT2, ARM hors post-infarctus) n'ont pas été démontrées dans ce stade.",
  sections: [
    {
      headingFr: 'Stade de la maladie versus classe NYHA',
      bodyMarkdownFr: `Les recommandations ESC 2026 et le résumé américain AAFP 2023 distinguent clairement le **stade** (qui reflète l'histoire de la maladie) de la **classe NYHA** (qui décrit votre gêne actuelle) :

| Notion | Ce qu'elle décrit | Exemple |
|---|---|---|
| **Stade A** | Personne à risque (hypertension, diabète, maladie coronaire) avec structure cardiaque normale | Hypertension traitée, ETT normale |
| **Stade B** (pré-IC) | Anomalie structurelle ou fonctionnelle du cœur, **sans symptôme ni signe d'IC actuel ou passé** | FEVG basse découverte lors d'une ETT de contrôle chez une personne n'ayant jamais eu de symptômes |
| **Stade C** | Anomalie cardiaque avec **symptômes ou signes d'IC actuels ou passés** | Essoufflement au diagnostic, aujourd'hui totalement disparu sous traitement |
| **Stade D** | Insuffisance cardiaque avancée | Symptômes sévères persistants malgré traitement optimal |
| **NYHA I–IV** | Limitation fonctionnelle **à l'instant présent** | NYHA I = aucune limitation dans les activités ordinaires |

- **Les stades n'évoluent que dans un sens.** Un patient en stade C devenu totalement asymptomatique reste en stade C, et les recommandations ESC 2026 préconisent de **poursuivre** le traitement de fond complet chez les personnes devenues asymptomatiques ou dont la FEVG s'est améliorée (**Classe I, C**).
- **La Deuxième définition universelle de 2026** (consensus AHA/ACC/ESC/WHF sur la terminologie, juin 2026) réaffirme ces quatre mêmes stades (Définition universelle 2026) :
  - **Critères du stade B :** aucun symptôme ni signe actuel ou passé d'insuffisance cardiaque, associé à au moins l'un des éléments suivants : une anomalie structurelle (par exemple une cavité dilatée, un trouble de la cinétique pariétale, une cicatrice à l'IRM cardiaque, un épaississement de paroi ou une valvulopathie), une anomalie fonctionnelle (baisse de la contraction ventriculaire gauche ou droite, pressions de remplissage élevées ou anomalie de relaxation), ou une élévation des peptides natriurétiques ou de la troponine. Elle ne fixe **aucun seuil chiffré** pour aucun de ces critères.
  - **Le stade C** recouvre des symptômes ou signes actuels **ou passés** dus à une anomalie cardiaque, en cohérence avec la formulation ESC ci-dessus.
  - **Aucun retour vers le stade B.** Son schéma comporte des flèches à sens unique de B vers C. Au sein de l'insuffisance cardiaque symptomatique, elle ajoute les trajectoires d'« amélioration », de « rémission » et de « récupération », et indique qu'un diagnostic d'insuffisance cardiaque symptomatique est généralement considéré comme permanent (voir *Insuffisance cardiaque à FEVG améliorée (HFimpEF)*).
  - **Le « stade 0 »** est mentionné dans son texte pour les personnes sans facteur de risque, bien qu'il ne figure pas dans le tableau des stades.
- **Seuils ESC 2026 :** la « dysfonction systolique VG asymptomatique » correspond à une FEVG **inférieure à 50 %** sans symptôme ni signe ; l'ICFER correspond à une FEVG inférieure à 50 % **avec** symptômes ou signes (voir *La fraction d'éjection (FEVG)*).
- **« Sans symptôme » n'est pas toujours fiable.** Certaines personnes réduisent inconsciemment leurs efforts pour éviter d'être gênées. Dans la cohorte américaine **ARIC** (2 972 adultes âgés classés en pré-IC, publiée en 2026), la fatigue à l'effort était associée à un risque accru d'insuffisance cardiaque ultérieure (HR 1,86), et les auteurs reconnaissaient que certains participants avaient peut-être déjà une IC clinique. L'intérêt d'une évaluation objective de la capacité d'effort (comme une épreuve d'effort cardiorespiratoire) n'était pas abordé par les sources consultées.`,
    },
    {
      headingFr: 'À quelle fréquence le stade B progresse-t-il ?',
      bodyMarkdownFr: `- **Étude de Framingham (Wang 2003) :** parmi 4 257 participants en population générale, une dysfonction VG asymptomatique (FEVG ≤ 50 %, sans antécédent d'IC) a été retrouvée chez 6,0 % des hommes et 0,8 % des femmes. Une insuffisance cardiaque est survenue au taux de **5,8 contre 0,7 pour 100 personnes-années** (HR ajusté 4,7). Avec une FEVG **< 40 %**, le HR atteignait **7,8** ; entre 40 et 50 %, il était de 3,3. La mortalité était aussi plus élevée (HR 1,6), avec une survie médiane de 7,1 ans.
- **Revue de 2020 (Sara 2020) :** en regroupant 11 études (25 369 personnes), le risque relatif de progression vers une IC symptomatique était de 4,6. Dans le comté d'Olmsted (États-Unis), le passage du stade B au stade C multipliait par neuf le risque de décès (HR 9,6).
- **Suivi à 12 ans de SOLVD (Jong 2003) :** l'écart entre patients asymptomatiques et symptomatiques restait marqué : environ 51 à 56 % des participants de l'essai de prévention (asymptomatiques) étaient décédés à 12 ans, contre environ 80 % dans l'essai de traitement (symptomatiques).
- *Précaution :* ces cohortes précèdent pour l'essentiel les traitements modernes. En outre, le chiffre de mortalité « presque quadruplé » attribué à Framingham dans la revue de 2020 ne correspond pas au HR de 1,6 de l'article original de Wang (2003).`,
    },
    {
      headingFr: 'Les essais cliniques sur lesquels repose le traitement du stade B',
      bodyMarkdownFr: `| Essai | Population | Traitement | Principaux résultats |
|---|---|---|---|
| **SOLVD-Prevention** (NEJM 1992) | 4 228 personnes, FEVG ≤ 35 %, **ne nécessitant pas de traitement d'IC** (majoritairement asymptomatiques) | Énalapril vs placebo, moyenne 37 mois | Mortalité non significativement réduite (−8 %, p = 0,30). **Décès ou apparition d'une IC : −29 %** ; décès ou hospitalisation pour IC : −20 % |
| **SOLVD suivi à 12 ans** (Lancet 2003) | Les deux essais SOLVD, 99,8 % suivis | Randomisation initiale | Essai Prevention : 50,9 % contre 56,4 % de décès (p = 0,001). HR groupé de mortalité : 0,90 ; gain médian de vie : 9,4 mois |
| **SAVE (captopril)** (NEJM 1992) | 2 231 personnes, 3 à 16 jours après infarctus, FEVG ≤ 40 %, sans IC patente | Captopril vs placebo, moyenne 42 mois | **Décès : 20 % contre 25 %** (−19 %) ; IC sévère −37 % ; hospitalisation pour IC −22 % ; récidive d'infarctus −25 % |
| **CAPRICORN** (Lancet 2001) | 1 959 personnes après infarctus, FEVG ≤ 40 % | Carvédilol vs placebo | Critère combiné principal non significatif (HR 0,92). **Décès : 12 % contre 15 %** (HR 0,77) |
| **REVERT** (Circulation 2007) | 149 personnes, NYHA I, FEVG < 40 %, VG modérément dilaté (FEVG moyenne 27 %) | Métoprolol succinate 200 mg ou 50 mg vs placebo, 12 mois | 200 mg : diminution du VG et FEVG +6 points ; 50 mg : FEVG +4 points. Données d'imagerie uniquement, pas d'événements cliniques |

**Attention aux homonymes :** l'essai SAVE sur le captopril (1992) n'a aucun lien avec l'essai SAVE (2016) consacré à la PPC dans l'apnée du sommeil (voir *Apnée du sommeil et insuffisance cardiaque*).

### Qu'en est-il des médicaments plus récents au stade B ?

- **Aucun essai dédié au stade B** n'a évalué les ARNI (sacubitril/valsartan — *Entresto*), les iSGLT2 ni (en dehors du post-infarctus) les ARM (Sara 2020 ; ESC 2026).
- Deux grands essais récents les ont testés précocement après un infarctus, le plus souvent chez des patients à risque plutôt qu'en stade B établi :
  - **PARADISE-MI** (5 661 patients) : le sacubitril/valsartan n'a pas fait mieux que le ramipril (HR 0,90, non significatif).
  - **EMPACT-MI** (6 522 patients) : l'empagliflozine (*Jardiance*) n'a pas réduit le critère combiné principal (HR 0,90, non significatif), même si les premières hospitalisations pour IC étaient moins fréquentes (HR 0,77).
- Les recommandations ESC 2026 ne formulent **aucune** recommandation en stade B pour les ARNI ou les iSGLT2, hormis les iSGLT2 chez les patients ayant un diabète de type 2.`,
    },
    {
      headingFr: 'Comment le stade B est dépisté',
      bodyMarkdownFr: `Par définition sans symptôme, le stade B n'est détecté que par des examens : un dosage sanguin (peptides natriurétiques) ou une échocardiographie (ETT).

### Dosages sanguins (peptides natriurétiques)

- **STOP-HF** (Irlande, 1 374 adultes à risque sans IC) : dosage du BNP, avec ETT et suivi partagé médecin traitant–cardiologue dès 50 pg/mL ou plus. La survenue d'une dysfonction VG (avec ou sans IC) a baissé de 8,7 % à 5,3 %. La réduction de l'insuffisance cardiaque isolée n'était pas statistiquement démontrée, faute de taille suffisante.
- **PONTIAC** (Autriche, 300 personnes ayant un diabète de type 2 sans cardiopathie connue et un NT-proBNP > 125 pg/mL) : des consultations cardiologiques renforcées pour augmenter les doses d'IEC/ARA2 et de bêtabloquants ont réduit les hospitalisations cardiaques ou décès à 2 ans (HR 0,351). L'effectif était petit, avec une large incertitude statistique (étude financée par l'industrie).
- **American Diabetes Association (ADA, 2022) :** recommande un dosage annuel de peptide natriurétique ou de troponine ultrasensible chez les adultes diabétiques, en considérant comme anormaux un BNP ≥ 50 pg/mL ou un NT-proBNP ≥ 125 pg/mL, sans proposer d'ETT systématique en l'absence de symptômes.
- **Critiques (Herman et Kuo 2025) :** deux diabétologues jugent les preuves fragiles. Citant des données britanniques de soins primaires où seuls environ 16 tests NT-proBNP positifs sur 100 correspondaient à une IC (contre environ 99 sur 100 corrects parmi les négatifs), ils soulignent que le dépistage générerait surtout des faux positifs, que STOP-HF et PONTIAC n'ont pas démontré de baisse des événements d'IC proprement dits et que le coût par hospitalisation évitée serait élevé.
- **Recommandation américaine 2022 :** selon les notes de STOP-HF, le dépistage par peptides natriurétiques chez les sujets à risque y est classé **Classe 2a** (raisonnable) — point non revérifié dans le texte intégral américain.
- La Heart Failure Association de l'ESC (2023) fournit des algorithmes NT-proBNP avec seuils d'exclusion et seuils d'inclusion liés à l'âge.
- **La Deuxième définition universelle de 2026** cite STOP-HF et PONTIAC pour souligner qu'un dépistage par peptides natriurétiques combiné à d'autres facteurs de risque peut repérer des personnes sans symptôme susceptibles de tirer bénéfice d'un traitement. Elle ne fixe **aucune** valeur seuil de peptides natriurétiques pour le diagnostic, le stade B ou le dépistage (Définition universelle 2026).

### Échocardiographie (ETT)

- Chez 447 Australiens de 65 ans ou plus présentant des facteurs de risque sans maladie cardiaque connue (Yang et Marwick 2017), l'ETT a fréquemment décelé des anomalies de stade B : environ un tiers avaient une baisse du strain longitudinal global (GLS) et 13 % une hypertrophie ventriculaire gauche.
- Les seuils utilisés étaient une masse VG indexée > 115 g/m² chez l'homme (> 95 g/m² chez la femme) et un GLS < 18 %. L'épaississement pariétal et le strain anormal prédisaient l'apparition d'une IC sur environ 14 mois, contrairement aux indices diastoliques. L'ECG standard manquait la plupart de ces anomalies.

> **Pour votre situation :** ces études concernent la *découverte* d'un stade B chez une personne ignorant son atteinte cardiaque. Si votre dysfonction VG est déjà connue, l'enjeu n'est plus de la dépister, mais de clarifier avec votre cardiologue si votre histoire relève du stade B ou du stade C et quel traitement en découle.`,
    },
    {
      headingFr: 'Ce que recommandent les sociétés savantes au stade B',
      bodyMarkdownFr: `| Recommandation | ESC 2026 | États-Unis (ACC/AHA 2022) |
|---|---|---|
| IEC (ARA2 si intolérance), FEVG ≤ 40 % | **Classe I, A** | Classe 1 |
| Bêtabloquant | **Classe I, B** (FEVG < 50 %) | Classe 1 (FEVG ≤ 40 %) |
| Éplérénone (*Inspra*) après infarctus, FEVG ≤ 40 %, avec diabète ou signes d'IC | Classe I, B | Non vérifié |
| Pression artérielle systolique < 130 mmHg | **Classe I, A** | Non vérifié |
| iSGLT2 | Uniquement en cas de diabète de type 2 à risque d'IC | Non vérifié |
| DAI préventif, FEVG ≤ 30 %, plus de 40 jours après infarctus | Voir *Dispositifs cardiaques implantés : DAI et CRT* | Classe 1 |
| Éviter les inhibiteurs calciques type diltiazem/vérapamil et les glitazones (FEVG ≤ 50 %) | — | Déconseillé |

- L'ESC 2026 mentionne le sous-niveau « B1 » pour les lignes bêtabloquant et éplérénone (la définition exacte de ce nouveau sous-niveau n'a pas été consultée). Pour l'éplérénone, le tableau ESC indique « signes d'IC **ou** diabète » alors que le texte écrit « **et** ».
- Les recommandations ESC 2026 rappellent elles-mêmes que les essais du stade B datent des années 1990, que les participants de CAPRICORN n'étaient pas tous strictement asymptomatiques et que la tranche de FEVG **41–49 % reste peu étudiée**.
- Les classes américaines 2022 proviennent du diaporama AHA et du résumé AAFP (les niveaux de preuve exacts n'ont pas été vérifiés dans le texte intégral).

### Pourquoi la distinction stade B / stade C est importante

- **Le stade C** (tout antécédent de symptôme d'insuffisance cardiaque) ouvre droit à la quadrithérapie complète (ARNI ou IEC, bêtabloquant, ARM, iSGLT2) (voir *Les médicaments de l'insuffisance cardiaque (4 piliers)*).
- **Le stade B** repose sur des preuves établies pour les IEC et les bêtabloquants ; y utiliser les classes plus récentes va au-delà des essais cliniques disponibles.
- Déterminer si vous relevez du stade B ou du stade C dépend de l'ensemble de votre histoire médicale, et non uniquement de votre ressenti du jour : c'est une question à aborder directement avec votre cardiologue (voir *Questions à poser à l'équipe de cardiologie*).`,
    },
  ],
  relatedArticleSlugs: [
    'medicaments-glp1-et-incretines',
    'comprendre-le-diagnostic',
    'medicaments-insuffisance-cardiaque',
    'fraction-dejection',
    'tension-arterielle-insuffisance-cardiaque',
    'dispositifs-cardiaques-dai-crt',
    'insuffisance-cardiaque-fevg-amelioree',
    'essais-cliniques-cles',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'confirmer-la-cause-dysfonction-vg',
    'cardiomyopathie-ischemique',
    'recommandations-comparees-esc-us-nice',
    'questions-equipe-cardiologie',
  ],
  sources: [
    { label: 'Recommandations ESC 2026 — section stade B', detail: 'Définitions des stades, tableau de recommandations 2 et poursuite du traitement (Classe I, C)' },
    { label: 'SOLVD-Prevention (NEJM 1992) et Jong et al. (Lancet 2003)', detail: 'Énalapril dans la dysfonction VG asymptomatique et suivi à 12 ans' },
    { label: 'SAVE captopril (NEJM 1992) et CAPRICORN (Lancet 2001)', detail: 'IEC et bêtabloquant après infarctus avec FEVG ≤ 40 %' },
    { label: 'REVERT (Circulation 2007)', detail: 'Métoprolol succinate et remodelage ventriculaire en NYHA I' },
    { label: 'Wang et al. (2003, Framingham) et Sara et al. (2020)', detail: 'Histoire naturelle et risque de progression de la dysfonction VG asymptomatique' },
    { label: 'ARIC (JAHA 2026)', detail: "Fatigue à l'effort et risque d'insuffisance cardiaque en pré-IC" },
    { label: 'PARADISE-MI (NEJM 2021) et EMPACT-MI (NEJM 2024)', detail: 'Sacubitril/valsartan et empagliflozine précocement après infarctus' },
    { label: 'STOP-HF (2013), PONTIAC (2013), ADA (2022) et Herman & Kuo (2025)', detail: 'Dépistage par peptides natriurétiques et débat critique sur les faux positifs' },
    { label: 'Yang & Marwick (2017) et algorithmes HFA 2023', detail: 'Marqueurs échocardiographiques (GLS, masse VG) et algorithmes NT-proBNP' },
    { label: 'Diaporama AHA 2022 et résumé AAFP 2023', detail: 'Définitions et classes américaines pour le stade B' },
    { label: "Deuxième définition universelle de l'insuffisance cardiaque (2026)", detail: "Consensus AHA/ACC/ESC/WHF (texte intégral) : critères des stades A à D, stade 0, trajectoires sans retour au stade B et absence de seuils chiffrés" },
  ],
  disclaimerType: 'medical',
};
