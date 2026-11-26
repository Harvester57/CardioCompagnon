import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'traitements-additionnels-nouveaux',
  sourceWikiPath: 'wiki/topics/newer-and-add-on-treatments.md',
  titleFr: 'Au-delà des 4 piliers : traitements additionnels et récents',
  category: 'traitements',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'hot',
  tags: [
    'traitements-additionnels',
    'finérénone',
    'ivabradine',
    'digoxine',
    'vériciguat',
    'gilet-défibrillateur',
    'télésurveillance',
    'vue-d-ensemble',
  ],
  aliases: [
    'Traitements additionnels',
    'Traitements de seconde ligne',
    'Au-delà des quatre piliers',
    'Nouveaux traitements insuffisance cardiaque',
    'Options complémentaires ICFER',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Le socle du traitement reste les quatre piliers augmentés jusqu'aux doses maximales tolérées, accompagnés de diurétiques si besoin. Toutes les options présentées sur cette page s'ajoutent pour une raison précise : fréquence cardiaque restant rapide, symptômes persistants, hospitalisation récente, carence en fer sur le bilan sanguin ou protection transitoire durant les premiers mois à risque rythmique élevé. La plupart de ces questions se posent après l'optimisation du traitement de fond, généralement au bout des 3 premiers mois.",
  sections: [
    {
      headingFr: 'Panorama rapide des options (ESC 2026)',
      bodyMarkdownFr: `| Option | Indication principale | Classe ESC 2026 | Principales preuves | Bénéfice démontré |
|---|---|---|---|---|
| **Fer intraveineux** | Carence en fer sur le bilan sanguin | **I** (symptômes) ; **IIa** (hospitalisations) | 6 essais, 7 175 patients | Moins d'hospitalisations, amélioration des symptômes |
| **Ivabradine (*Procoralan*)** | Rythme sinusal avec fréquence cardiaque de repos > 70 bpm malgré le bêtabloquant maximal ; FEVG ≤ 35 % | **IIa** | SHIFT (6 558 patients) | Moins d'hospitalisations pour IC ; bénéfice concentré à ≥ 77 bpm (baisse des décès uniquement à ≥ 75 bpm en sous-groupe) ; effet plus modeste mais significatif en cause ischémique (**HR 0,87** ; différence non prouvée, p = 0,059) |
| **Digoxine ou digitoxine** | Symptômes persistants malgré un traitement optimal, FEVG ≤ 40 % ; aussi contrôle de la fréquence en FA | **IIa** (rehaussée en 2026) | DIG (6 800), DIGIT-HF (1 240), DECISION (1 001) | Moins d'hospitalisations pour IC ; décès ou hospitalisation réduits de **18 %** avec la digitoxine |
| **Vériciguat (*Verquvo*)** | Après une aggravation récente, FEVG < 45 % | **IIb** | VICTORIA (5 050), VICTOR (6 105), analyse poolée (11 155) | Bénéfice modeste après aggravation ; VICTOR seul neutre chez les patients stables ; les données poolées suggèrent environ **9 %** de décès CV ou d'hospitalisations pour IC en moins, sans différence entre essais |
| **Finérénone (*Kerendia*)** | IC avec FEVG ≥ 40 %, ou diabète de type 2 avec maladie rénale chronique | Non retenue pour l'ICFER à FEVG ~35 % (ARM stéroïdien désigné) | FINEARTS-HF (FEVG ≥ 40 %), FINE-HEART, ARTS-HF | Non prouvée sous 40 % : les grands essais portaient sur FEVG ≥ 40 % ou diabète avec MRC et excluaient l'ICFER symptomatique ; seules des données de phase 2 courtes existent en ICFER ; essai ICFER attendu vers 2028 |
| **Chélateurs de potassium** | Maintenir un ARM lorsque le potassium monte | Discutés ; pas de classe attribuée | DIAMOND (878, majoritairement ICFER ischémique) | Davantage de patients ont conservé une pleine dose d'ARM ; critère principal modifié en cours d'essai pour le potassium sanguin ; décès non réduits (**22 contre 16**, non significatif) |
| **Gilet défibrillateur portable (LifeVest)** | Protection temporaire les premiers mois avant la décision de DAI | **IIb** | VEST (**2 348**, après infarctus) + registres | Essai principal non significatif ; certitude jugée faible à très faible (revue autrichienne indépendante) ; doit être porté **> 20 h/jour** |
| **Télésurveillance à domicile** | Surtout après une hospitalisation récente ou avec NT-proBNP élevé | **IIb** | Méta-analyse de 92 études ; TIM-HF2 | Moins de décès et d'hospitalisations en données regroupées ; le bénéfice de TIM-HF2 (surtout moins de décès) provenait d'un service médicalisé **24 h/24 et 7 j/7** après hospitalisation récente |
| **Capteur de pression artérielle pulmonaire** | NYHA III avec hospitalisation pour IC dans l'année écoulée | **IIa** | CHAMPION, GUIDE-HF, MONITOR-HF | Moins d'hospitalisations ; pas d'effet prouvé sur la survie |`,
    },
    {
      headingFr: 'Médicaments additionnels : ce qui a évolué récemment',
      bodyMarkdownFr: `- **Ivabradine (*Procoralan*), digoxine (*Digoxine Nativelle*) / digitoxine et vériciguat (*Verquvo*)** répondent chacun à des critères d'entrée précis. Leurs résultats d'essais, effets secondaires et interactions sont détaillés dans *Médicaments additionnels : ivabradine, digoxine/digitoxine et vériciguat*.
- **Évolutions récentes (2025–2026) :**
  - **2025 :** l'essai **DIGIT-HF** a montré que la digitoxine réduisait les décès ou hospitalisations pour insuffisance cardiaque (HR **0,82**). L'essai **VICTOR** a montré que le vériciguat **n'atteignait pas** son critère principal chez des patients ambulatoires stables, même si la mortalité était plus basse en analyse secondaire nominale.
  - **2026 :** l'essai **DECISION** (digoxine à faible dose) n'a pas atteint son critère principal, mais une analyse poolée des trois essais de digitaliques était en faveur du traitement (HR **0,85**). L'ESC 2026 a rehaussé la digoxine ou la digitoxine en **Classe IIa**.
  - **Données poolées du vériciguat (2025) :** le regroupement de **VICTORIA** et **VICTOR** suggère un bénéfice modeste d'environ **9 %**, incluant la mortalité toutes causes (**HR 0,90**), sans différence mesurable entre les deux essais ; toutefois, VICTOR seul reste neutre et l'AMM ne couvre toujours que les patients stabilisés après une aggravation récente.
- **Finérénone (*Kerendia*) :** cet ARM non stéroïdien n'est pas encore démontré autour de 35 % de FEVG : ses grands essais ont porté sur des FEVG ≥ 40 % ou sur le diabète avec maladie rénale chronique en excluant l'ICFER symptomatique, et les seules données en ICFER sont de courtes études de phase 2 (**ARTS**, **ARTS-HF**). L'essai pronostique dédié à l'ICFER (**FINALITY-HF**) se poursuit jusqu'à environ 2028. Un chélateur de potassium (patiromer, **DIAMOND**) a aidé davantage de patients à conserver une pleine dose d'ARM, mais tout bénéfice de survie repose sur l'ARM lui-même. Voir *Finérénone, nouveaux ARM et chélateurs de potassium*.
- **Fer intraveineux :** traité dans *Carence en fer et fer intraveineux*.`,
    },
    {
      headingFr: 'Les premiers mois : le gilet défibrillateur portable (LifeVest)',
      bodyMarkdownFr: `- La décision d'implanter un défibrillateur automatique implantable (**DAI**) se prend après environ **3 mois** de traitement de fond optimisé (et au moins **40 jours** après un infarctus du myocarde), car la FEVG s'améliore fréquemment sous traitement.
- Dans un grand registre de patients nouvellement diagnostiqués en ICFER (**HF-OPT**), la FEVG dépassait **35 %** chez environ la moitié des patients à 3 mois et chez environ les deux tiers à 6 mois.
- Un **gilet défibrillateur portable (LifeVest)** peut couvrir cette période transitoire comme pont à court terme. Les preuves restent nuancées : une revue autrichienne indépendante évalue la certitude des preuves comme **faible à très faible**. La Société allemande de cardiologie (DGK) juge son usage dans les 40 premiers jours après un infarctus ou un stent (90 jours après pontage), avec FEVG ≤ 35 %, comme « plutôt non indiqué, pouvant être envisagé au cas par cas », tandis qu'en France la HAS (CNEDiMTS) admet son remboursement dans la cardiomyopathie ischémique avec FEVG ≤ 35 % selon les indications retenues (attention : la conduite automobile est interdite sous LifeVest en France). Le gilet ne protège que s'il est porté **plus de 20 heures par jour**. Voir *Le gilet défibrillateur portable (LifeVest)*.`,
    },
    {
      headingFr: 'Surveillance à distance depuis le domicile',
      bodyMarkdownFr: `- La télésurveillance à domicile, les capteurs implantés de pression artérielle pulmonaire et le télésuivi des prothèses implantées (DAI/CRT) sont trois outils distincts aux niveaux de preuve différents. Voir *Télésurveillance à domicile et suivi à distance des prothèses*.
- **En France :** la télésurveillance médicale de l'insuffisance cardiaque est remboursée dans le droit commun depuis **juillet 2023** pour les patients ayant eu une hospitalisation pour insuffisance cardiaque dans l'année précédente, ou présentant une insuffisance cardiaque NYHA II ou plus avec peptides natriurétiques élevés.
- **Ce que montrent les essais :** le bénéfice de **TIM-HF2** (moins de décès et moins de jours perdus par hospitalisations pour insuffisance cardiaque) provenait d'un service médicalisé **24 h/24 et 7 j/7** chez des patients hospitalisés pour IC dans l'année écoulée, sans baisse des jours perdus par hospitalisations cardiovasculaires globales. Le télésuivi d'un DAI ou d'un CRT permet surtout d'économiser des visites en consultation (**MORE-CARE**) plutôt que d'améliorer la survie.`,
    },
    {
      headingFr: 'Ce qui est effectivement disponible et remboursé en France et au Royaume-Uni',
      bodyMarkdownFr: `Une recommandation européenne n'implique pas automatiquement la disponibilité commerciale ou la prise en charge dans chaque pays. En **novembre 2026** :

| Option | France | Royaume-Uni |
|---|---|---|
| **Ivabradine (*Procoralan*)** | La HAS juge son service médical rendu (SMR) **« important »** dans l'insuffisance cardiaque (avis 2012 et 2017) | NICE TA267 : NYHA II–IV, fréquence cardiaque ≥ 75 bpm, FEVG ≤ 35 %, initiation par un spécialiste |
| **Digoxine** | Commercialisée (spécialités à base de digoxine ; statut exhaustif non réévalué dans la synthèse source) | 8 spécialités recensées dans le répertoire britannique (emc) |
| **Digitoxine** (molécule de DIGIT-HF) | **Aucun produit commercialisé retrouvé** (la spécialité historique *Digitaline Nativelle* a cessé d'être commercialisée en **1993**) | **Aucun produit répertorié** |
| **Vériciguat (*Verquvo*)** | Avis HAS de **février 2022** favorable au remboursement (FEVG ≤ 45 % après décompensation récente ; SMR modéré, **ASMR V** — pas d'amélioration du service médical rendu) ; aucune réévaluation après VICTOR | Pas de recommandation NICE (évaluation interrompue) ; non recommandé en Écosse (SMC) ; exclu au Pays de Galles (AWMSG) |
| **Gilet défibrillateur portable (LifeVest)** | **Remboursé** dans les indications listées, dont la cardiomyopathie ischémique avec FEVG ≤ 35 % | Non évalué dans cette synthèse |
| **Télésurveillance à domicile** | **Remboursée depuis juillet 2023** (60 % par l'Assurance Maladie, ou **100 % en ALD**) | Pas de recommandation NICE |
| **Capteur CardioMEMS** | **Non remboursé** (avis HAS/CNEDiMTS 2021 : service attendu « insuffisant ») | NICE 2026 : recommandé en pratique courante NHS |

**Position américaine (AHA/ACC/HFSA 2022) :** classe l'ivabradine en **2a**, et la digoxine comme le vériciguat en **2b**. Elle n'a pas encore été mise à jour après DIGIT-HF ou VICTOR, de sorte que la digoxine y reste moins bien classée qu'en Europe (IIa).`,
    },
    {
      headingFr: 'À l’horizon (état des connaissances en novembre 2026)',
      bodyMarkdownFr: `- **FINALITY-HF :** essai évaluant la finérénone dans l'ICFER chez des patients ne pouvant pas prendre ou ne tolérant pas la spironolactone ou l'éplérénone ; fin globale d'étude enregistrée pour **janvier 2028**.
- **COMET-HF :** essai évaluant l'omécamtiv mécarbil dans l'insuffisance cardiaque à FEVG sévèrement réduite ; fin du critère principal attendue en **2027**.
- **PROFID-EHRA :** essai visant à déterminer si le DAI conserve un bénéfice de survie chez les patients ayant eu un infarctus du myocarde et recevant les traitements modernes ; fin estimée en **novembre 2027** (voir *Dispositifs cardiaques implantés : DAI et CRT*).
- **Vérification des registres au 25 novembre 2026 :** **FINALITY-HF** recrute toujours bien que sa date estimée d'achèvement du *critère principal* (**août 2026**) soit dépassée ; **COMET-HF** recrute avec une fin du critère principal estimée à **septembre 2027** ; le calendrier de **PROFID-EHRA** est inchangé.
- **BalanceD-HF :** essai comparant le **balcinrénone associé à la dapagliflozine** à la dapagliflozine seule chez **4 005 patients** ayant une fonction rénale diminuée et un événement récent d'insuffisance cardiaque, sans ARM (sans limite de FEVG) ; fin du critère principal estimée en **avril 2027**.
- **Traitements évalués et neutres en 2026 :** l'association **hydralazine + dinitrate d'isosorbide** (**H-HeFT**) et la **metformine** (**Met-HeFT**) dans l'essai **DANHEART**, ainsi que plusieurs molécules de phase 2, n'ont pas démontré de bénéfice.
- **Les traitements par cellules souches ne constituent pas une option disponible :** aucune thérapie cellulaire pour l'insuffisance cardiaque n'est autorisée dans l'Union européenne (liste EMA des médicaments de thérapie innovante, juin 2026) ni approuvée aux États-Unis, et les essais les mieux contrôlés (**CONCERT-HF**, **DREAM-HF**, **CardiAMP-HF**) n'ont pas atteint leurs critères principaux. Le muscle cardiaque cultivé en laboratoire à partir de cellules iPS reste au stade d'essais précoces et ne bénéficie que d'une autorisation conditionnelle au Japon uniquement. Voir *Cellules souches et thérapies régénératives*.
- **Incrétines et agonistes du GLP-1 :** pour le sémaglutide, le tirzépatide et le rétatrutide (bénéfices artériels, absence de preuve spécifique dans l'ICFER à FEVG autour de 35 % et conditions de remboursement en France), voir *Médicaments GLP-1 et incrétines*.
- La liste complète des essais en cours et à venir, avec leur degré d'applicabilité à une cardiomyopathie ischémique autour de 35 % de FEVG, est rassemblée dans *Essais cliniques en cours et à suivre*.`,
    },
  ],
  relatedArticleSlugs: [
    'essais-cliniques-en-cours-et-a-suivre',
    'cellules-souches-et-therapies-regeneratives',
    'medicaments-glp1-et-incretines',
    'medicaments-insuffisance-cardiaque',
    'comprendre-le-diagnostic',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'finerenone-et-nouveaux-arm',
    'carence-martiale-et-fer-iv',
    'gilet-defibrillateur-portable',
    'telesurveillance-insuffisance-cardiaque',
    'dispositifs-cardiaques-dai-crt',
    'questions-equipe-cardiologie',
    'glossaire-cardiologie',
    'recommandations-comparees-esc-us-nice',
    'vivre-avec-insuffisance-cardiaque',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 sur l’insuffisance cardiaque',
      detail: 'Classes de recommandation des traitements additionnels, calendrier du DAI, gilet défibrillateur, ARM/finérénone et télésurveillance',
    },
    {
      label: 'Essais cliniques SHIFT, DIGIT-HF, DECISION, VICTORIA, VICTOR, analyse poolée VICTORIA + VICTOR',
      detail: 'Textes intégraux SHIFT et analyse poolée vériciguat (2025) ; données d’efficacité, sous-groupes et tolérance des médicaments additionnels',
    },
    {
      label: 'FINEARTS-HF, FINE-HEART, ARTS-HF et DIAMOND (textes intégraux)',
      detail: 'Populations finérénone, phase 2 ICFER, essai patiromer et registres FINALITY-HF / COMET-HF',
    },
    {
      label: 'Registres d’essais cliniques (état au 25 novembre 2026) et DANHEART (H-HeFT et Met-HeFT, ESC 2026)',
      detail: 'Statut actualisé de FINALITY-HF, COMET-HF, PROFID-EHRA et BalanceD-HF ; résultats neutres de l’hydralazine-dinitrate d’isosorbide et de la metformine',
    },
    {
      label: 'Liste EMA (CAT) des thérapies innovantes (juin 2026), CONCERT-HF (EJHF, 2021) et DREAM-HF (JACC, 2023)',
      detail: 'Absence de thérapie cellulaire cardiaque autorisée en Union européenne ; résultats neutres sur le critère principal des essais contrôlés',
    },
    {
      label: 'VEST, HF-OPT, revue autrichienne Goetz (2023), position DGK (2019), TIM-HF2, MORE-CARE, Scholte 2023, MONITOR-HF et méta-analyse fer IV 2025',
      detail: 'Données complètes sur le gilet défibrillateur, la récupération de la FEVG, la télésurveillance, le télésuivi des prothèses, les capteurs pulmonaires et le fer IV',
    },
    {
      label: 'HAS, ANSM et Assurance Maladie (France)',
      detail: 'Avis HAS sur Procoralan (2012, 2017), Verquvo (2022), LifeVest (2024), CardioMEMS (2021) ; référentiel télésurveillance IC (2023) ; dossier ANSM Digitaline Nativelle',
    },
    {
      label: 'NICE, SMC, AWMSG (Royaume-Uni) et AHA/ACC/HFSA 2022 / ACC 2024 (États-Unis)',
      detail: 'Évaluations NICE TA267, TA731, HTG730/HTG769, avis SMC/AWMSG et recommandations américaines comparées',
    },
  ],
  disclaimerType: 'medical',
};
