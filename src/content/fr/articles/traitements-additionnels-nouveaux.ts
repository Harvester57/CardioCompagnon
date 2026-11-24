import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'traitements-additionnels-nouveaux',
  sourceWikiPath: 'wiki/topics/newer-and-add-on-treatments.md',
  titleFr: 'Au-delà des 4 piliers : traitements additionnels et récents',
  category: 'traitements',
  asOf: '2026-11-24',
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
| **Ivabradine (*Procoralan*)** | Rythme sinusal avec fréquence cardiaque de repos > 70 bpm malgré le bêtabloquant maximal ; FEVG ≤ 35 % | **IIa** | SHIFT (6 558 patients) | Moins d'hospitalisations pour IC ; baisse des décès uniquement à ≥ 75 bpm (sous-groupe) |
| **Digoxine ou digitoxine** | Symptômes persistants malgré un traitement optimal, FEVG ≤ 40 % ; aussi contrôle de la fréquence en FA | **IIa** (rehaussée en 2026) | DIG (6 800), DIGIT-HF (1 240), DECISION (1 001) | Moins d'hospitalisations pour IC ; décès ou hospitalisation réduits de 18 % avec la digitoxine |
| **Vériciguat (*Verquvo*)** | Après une aggravation récente, FEVG < 45 % | **IIb** | VICTORIA (5 050), VICTOR (6 105) | Bénéfice modeste après aggravation récente ; non démontré chez les patients stables |
| **Finérénone (*Kerendia*)** | IC avec FEVG ≥ 40 %, ou diabète de type 2 avec maladie rénale chronique | Non retenue pour l'ICFER à FEVG ~35 % (ARM stéroïdien désigné) | FINEARTS-HF (FEVG ≥ 40 %) | Non prouvée sous 40 % ; essai attendu vers 2028 |
| **Chélateurs de potassium** | Maintenir un ARM lorsque le potassium monte | Discutés ; pas de classe attribuée | DIAMOND (878) | Moins d'épisodes d'hyperkaliémie ; pas de preuve sur les décès ou hospitalisations |
| **Gilet défibrillateur portable (LifeVest)** | Protection temporaire les premiers mois avant la décision de DAI | **IIb** | VEST (2 302 après infarctus) + registres | Essai principal non significatif ; dépend fortement du port effectif |
| **Télésurveillance à domicile** | Surtout après une hospitalisation récente ou avec NT-proBNP élevé | **IIb** | Méta-analyse de 92 études ; TIM-HF2 | Moins de décès et d'hospitalisations en données regroupées |
| **Capteur de pression artérielle pulmonaire** | NYHA III avec hospitalisation pour IC dans l'année écoulée | **IIa** | CHAMPION, GUIDE-HF, MONITOR-HF | Moins d'hospitalisations ; pas d'effet prouvé sur la survie |`,
    },
    {
      headingFr: 'Médicaments additionnels : ce qui a évolué récemment',
      bodyMarkdownFr: `- **Ivabradine (*Procoralan*), digoxine (*Digoxine Nativelle*) / digitoxine et vériciguat (*Verquvo*)** répondent chacun à des critères d'entrée précis. Leurs résultats d'essais, effets secondaires et interactions sont détaillés dans *Médicaments additionnels : ivabradine, digoxine/digitoxine et vériciguat*.
- **Évolutions récentes (2025–2026) :**
  - **2025 :** l'essai **DIGIT-HF** a montré que la digitoxine réduisait les décès ou hospitalisations pour insuffisance cardiaque (HR **0,82**). L'essai **VICTOR** a montré que le vériciguat **n'atteignait pas** son critère principal chez des patients ambulatoires stables, même si la mortalité était plus basse en analyse secondaire nominale.
  - **2026 :** l'essai **DECISION** (digoxine à faible dose) n'a pas atteint son critère principal, mais une analyse poolée des trois essais de digitaliques était en faveur du traitement (HR **0,85**). L'ESC 2026 a rehaussé la digoxine ou la digitoxine en **Classe IIa**.
- **Finérénone (*Kerendia*) :** cet ARM non stéroïdien n'est pas encore démontré autour de 35 % de FEVG ; l'essai dédié à l'ICFER (**FINALITY-HF**) se poursuit jusqu'à environ 2028. Voir *Finérénone, nouveaux ARM et chélateurs de potassium*.
- **Fer intraveineux :** traité dans *Carence en fer et fer intraveineux*.`,
    },
    {
      headingFr: 'Les premiers mois : le gilet défibrillateur portable (LifeVest)',
      bodyMarkdownFr: `- La décision d'implanter un défibrillateur automatique implantable (**DAI**) se prend après environ **3 mois** de traitement de fond optimisé (et au moins **40 jours** après un infarctus du myocarde), car la FEVG s'améliore fréquemment sous traitement.
- Dans un grand registre de patients nouvellement diagnostiqués en ICFER (**HF-OPT**), la FEVG dépassait **35 %** chez environ la moitié des patients à 3 mois et chez environ les deux tiers à 6 mois.
- Un **gilet défibrillateur portable (LifeVest)** peut couvrir cette période transitoire. Les preuves sont nuancées (essai **VEST**) et l'efficacité dépend du port quasi continu. En France, la HAS (CNEDiMTS) admet son remboursement dans la cardiomyopathie ischémique avec FEVG ≤ 35 % selon les indications retenues (attention : la conduite automobile est interdite sous LifeVest en France). Voir *Le gilet défibrillateur portable (LifeVest)*.`,
    },
    {
      headingFr: 'Surveillance à distance depuis le domicile',
      bodyMarkdownFr: `- La télésurveillance à domicile, les capteurs implantés de pression artérielle pulmonaire et le télésuivi des prothèses implantées (DAI/CRT) sont trois outils distincts aux niveaux de preuve différents. Voir *Télésurveillance à domicile et suivi à distance des prothèses*.
- **En France :** la télésurveillance médicale de l'insuffisance cardiaque est remboursée dans le droit commun depuis **juillet 2023** pour les patients ayant eu une hospitalisation pour insuffisance cardiaque dans l'année précédente, ou présentant une insuffisance cardiaque NYHA II ou plus avec peptides natriurétiques élevés.`,
    },
    {
      headingFr: 'Ce qui est effectivement disponible et remboursé en France et au Royaume-Uni',
      bodyMarkdownFr: `Une recommandation européenne n'implique pas automatiquement la disponibilité commerciale ou la prise en charge dans chaque pays. À la date du **24 novembre 2026** :

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
      bodyMarkdownFr: `- **FINALITY-HF :** essai évaluant la finérénone dans l'ICFER chez des patients ne pouvant pas prendre ou ne tolérant pas la spironolactone ou l'éplérénone ; fin d'étude enregistrée pour **janvier 2028**.
- **COMET-HF :** essai évaluant l'omécamtiv mécarbil dans l'insuffisance cardiaque à FEVG sévèrement réduite ; fin du critère principal attendue en **2027**.
- **PROFID-EHRA :** essai visant à déterminer si le DAI conserve un bénéfice de survie chez les patients ayant eu un infarctus du myocarde et recevant les traitements modernes ; fin estimée en **novembre 2027** (voir *Dispositifs cardiaques implantés : DAI et CRT*).`,
    },
  ],
  relatedArticleSlugs: [
    'medicaments-insuffisance-cardiaque',
    'comprendre-le-diagnostic',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'finerenone-et-nouveaux-arm',
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
      label: 'Essais cliniques SHIFT, DIGIT-HF, DECISION, VICTORIA, VICTOR, FINEARTS-HF, DIAMOND',
      detail: 'Données d’efficacité et de tolérance des médicaments additionnels et chélateurs de potassium ; registres FINALITY-HF et COMET-HF',
    },
    {
      label: 'Essais et méta-analyses VEST, HF-OPT, Scholte 2023, MONITOR-HF et méta-analyse fer IV 2025',
      detail: 'Données sur le gilet défibrillateur, la récupération de la FEVG, la télésurveillance, les capteurs pulmonaires et le fer IV',
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
