import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'sel-et-liquides-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/concepts/salt-and-fluid-in-heart-failure.md',
  titleFr: "Sel et apports hydriques dans l'insuffisance cardiaque",
  category: 'nutrition',
  asOf: '2026-11-24',
  confidence: 'high',
  volatility: 'warm',
  tags: [
    'sel',
    'sodium',
    'liquides',
    'restriction-hydrique',
    'sodium-hf',
    'fresh-up',
    'substituts-de-sel',
    'hyperkaliémie',
    'autogestion',
  ],
  aliases: [
    'Restriction en sel',
    'Régime sans sel',
    'Restriction hydrique',
    'Limite de liquides',
    'Substituts de sel au potassium',
    'SODIUM-HF',
    'FRESH-UP',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Les conseils sur le sel et les boissons dans l'insuffisance cardiaque se sont nettement assouplis. Deux grands essais récents ont évalué les anciennes restrictions strictes : réduire très fortement le sel (SODIUM-HF) n'a pas diminué les décès ni les hospitalisations, même si la qualité de vie s'est légèrement améliorée ; imposer une limite fixe de 1,5 L de liquides par jour (FRESH-UP) n'a apporté aucun bénéfice mesurable chez les patients stables tout en augmentant nettement la soif. L'approche européenne actuelle est d'éviter les excès de sel sans tomber dans les extrêmes (repère HFA 2024 jusqu'à environ 5 g de sel par jour), de boire selon votre soif sauf limite prescrite par votre équipe, de ne jamais remplacer le sel par un substitut au potassium sans accord médical, et de garder la pesée quotidienne comme filet de sécurité.",
  sections: [
    {
      headingFr: 'Le sel (sodium) : ce que montrent les essais',
      bodyMarkdownFr: `**L'essai SODIUM-HF (The Lancet, 2022)** a inclus 806 patients ambulatoires stables (majoritairement NYHA II, environ un quart NYHA III ; FEVG médiane de 36 %, sans seuil de FEVG à l'inclusion) recevant leur traitement habituel. Un groupe a été accompagné par des diététiciens, médecins ou infirmiers, à l'aide de six menus quotidiens types, pour viser moins de 1 500 mg de sodium par jour (environ 3,8 g de sel). L'autre groupe a reçu les soins usuels, comprenant déjà des conseils généraux de réduction du sel. Après 12 mois :

- **Décès, hospitalisation cardiovasculaire ou passage aux urgences cardiovasculaires** : 15 % contre 17 % (HR 0,89, non significatif ; 0,99 après ajustement) ;
- **Décès** : 6 % contre 4 % (HR 1,38, non significatif) ;
- **Qualité de vie et symptômes** : petit gain de qualité de vie (score KCCQ +3,4 points) et probabilité plus élevée de s'améliorer d'une classe NYHA.

**Nuances importantes de SODIUM-HF :**
- **L'écart réel d'apport est resté modeste.** Selon les carnets alimentaires, le groupe pauvre en sel consommait une médiane de 1 658 mg de sodium par jour à 12 mois (au-dessus de la cible de 1 500 mg), contre 2 073 mg dans le groupe soins usuels, soit un écart d'environ 415 mg/j.
- **L'essai s'est arrêté précocement** à 806 patients sur les 992 prévus, pour trois raisons conjointes : analyse intermédiaire des 500 premiers patients, faisabilité et impact de la pandémie de COVID-19. Les événements ont aussi été moins fréquents qu'attendu (17 % contre 25 % anticipés). Avec un an de suivi, un petit bénéfice ou un petit risque ne peut pas être formellement exclu.
- **La tolérance a été peu détaillée** : aucun critère prédéfini d'effets indésirables n'était prévu, et la natrémie, la kaliémie, les hypotensions ou les chutes en cours de suivi ne figurent pas dans l'article principal. Davantage de participants ont retiré leur consentement dans le groupe restrictif (24 contre 12).
- **Applicabilité :** la FEVG médiane de 36 % est proche de l'ICFER, mais l'article ne précise pas la proportion exacte de FEVG réduite ni de cause ischémique (45 à 47 % avaient une maladie coronaire).

**Sel et tension artérielle : une question distincte.** En population générale, réduire le sel diminue la mortalité totale chez les personnes normotendues (RR 0,90) et la mortalité cardiovasculaire chez les personnes hypertendues (RR 0,67), avec une certitude modérée. Si vous avez aussi une maladie coronaire et une hypertension, éviter les apports excessifs en sel reste pleinement justifié.`,
    },
    {
      headingFr: 'Ce que disent aujourd’hui les recommandations sur le sel',
      bodyMarkdownFr: `- **Consensus HFA-ESC 2024 (Europe) :** apport normal en sodium dans l'insuffisance cardiaque chronique stable, avec **jusqu'à 5 g de sel par jour acceptables**. Une restriction très stricte doit être évitée car elle peut être délétère (un compte rendu évoque un seuil « trop strict » en dessous d'environ 0,5 à 1 g de *sodium* par jour, à vérifier sur le texte intégral). Des régimes trop stricts sont difficiles à tenir, peuvent réduire les apports caloriques et nutritionnels, provoquer soif et bouche sèche, et activer les hormones de stress (rénine, système sympathique).
- **Où se cache le sel :** la majeure partie provient des **aliments transformés** (plats préparés, pain, fromages, charcuteries, soupes industrielles). Lire les étiquettes et cuisiner maison est bien plus efficace que de retirer uniquement la salière de la table.
- **Recommandations ESC 2026 :** vérifiées sur le texte intégral, elles ne donnent **aucun objectif de sel en grammes** dans le texte principal pour l'insuffisance cardiaque chronique. La section hypertension indique que réduire le sel est « bénéfique dans tous les cas » (texte narratif sans classe, renvoyant aux recommandations HTA 2024). L'éducation thérapeutique et l'autogestion sont recommandées en **Classe I, niveau A** pour réduire les hospitalisations et la mortalité. Le tableau détaillé d'autosoins figure en annexe en ligne (Table S24, non consultée). En pratique, le repère HFA 2024 (≤ 5 g/j) reste le chiffre européen le plus précis.
- **NICE NG106 (Royaume-Uni) :** ne pas recommander systématiquement une restriction en sel ou en liquides ; évaluer les apports, les réduire s'ils sont élevés et réévaluer régulièrement (recommandation 1.9.10). Les guides patients britanniques (BHF) indiquent moins de 6 g de sel par jour.
- **AHA/ACC/HFSA 2022 (États-Unis) :** dans l'insuffisance cardiaque symptomatique, éviter un excès de sodium est « raisonnable » pour limiter la congestion (Classe 2a, niveau C-LD), sans chiffre en grammes.`,
    },
    {
      headingFr: 'Les apports hydriques : l’essai FRESH-UP et ses limites',
      bodyMarkdownFr: `**L'essai FRESH-UP (Nature Medicine, 2025)** a inclus 504 patients ambulatoires stables (NYHA II à III ; environ la moitié atteints d'ICFER ; 44 % d'origine ischémique ; la plupart sous traitement de fond moderne). Pendant 3 mois, un groupe avait pour consigne de limiter ses boissons à **1 500 mL/j**, tandis que l'autre buvait librement selon sa soif. Plus de la moitié des participants suivaient déjà une restriction hydrique avant l'essai.

- **Qualité de vie :** au moins aussi bonne avec des apports libres (score KCCQ 74,0 contre 72,2 ; différence non significative, p = 0,06). Les scores de symptômes favorisaient les apports libres (sans correction pour tests multiples).
- **Sensation de soif :** la gêne liée à la soif était nettement plus marquée sous restriction (p < 0,001).
- **Sécurité à 6 mois :** les événements ont été rares et similaires entre les deux groupes : décès (1 contre 2), hospitalisations pour IC (4 contre 4), recours aux diurétiques intraveineux (5 contre 7) et insuffisance rénale aiguë (3 contre 4). Le poids, le NT-proBNP et les ajustements de diurétiques ne différaient pas.
- **Apports réels :** en pratique, « boire librement » représentait une médiane d'environ **1,76 L/j**, contre **1,48 L/j** dans le groupe restreint (un tiers du groupe libre buvait plus de 2 L/j). D'après les carnets, seuls 56 % des patients du groupe restreint respectaient effectivement la limite, alors que 88 % pensaient y parvenir.
- **Sous-groupe ICFER :** l'écart de qualité de vie était plus faible (+0,8 point, non significatif), sans interaction statistique avec les autres groupes. La natrémie et la fonction rénale de suivi (hors insuffisance rénale aiguë) ne figurent pas dans l'article principal ni ses données étendues.

**Ce qu'il faut en retenir :**
- **Patients ambulatoires stables :** une restriction hydrique systématique n'apporte pas de bénéfice démontré.
- **Situations non couvertes par FRESH-UP :** patients congestifs ou récemment décompensés (hospitalisation pour IC, procédure coronaire ou implantation de dispositif dans les 3 mois précédents), hyponatrémie sévère (sodium sanguin < 130 mmol/L), DFGe < 30 mL/min/1,73 m² ou apports hydriques très élevés. Dans ces cas, votre équipe peut maintenir une limite précise.
- **Repères des recommandations :**
  - **HFA-ESC 2024 :** apport normal d'environ **1,5 à 2,5 L/j** (15 à 30 mL/kg), guidé par la soif ; limite de 1,5 à 2 L réservée à des patients sélectionnés (IC avancée), et augmentation autorisée en cas de fortes chaleurs, vomissements ou diarrhée.
  - **ESC 2026 :** « Aucune preuve ne soutient la restriction hydrique dans l'IC chronique » (narratif, citant FRESH-UP et HFA 2024). En décompensation aiguë, les apports doivent rester inférieurs à la diurèse ; en cas d'hyponatrémie, la décision se prend au cas par cas.
  - **NICE NG106 :** pas de restriction systématique ; restreindre en cas d'hyponatrémie de dilution ou réduire en cas d'apports excessifs (1.9.10).
  - **AHA/ACC/HFSA 2022 :** restriction hydrique évoquée uniquement dans l'IC avancée avec hyponatrémie, avec un bénéfice jugé incertain (Classe 2b, niveau C-LD).
  - Si votre cardiologue vous prescrit une limite de liquides, pensez que toutes les boissons, les soupes et les potages comptent dans le total quotidien.`,
    },
    {
      headingFr: 'Substituts de sel au potassium : un danger spécifique',
      bodyMarkdownFr: `Les sels dits « pauvres en sodium » ou « de régime » remplacent une partie du chlorure de sodium par du **chlorure de potassium**.

- **En population générale :** dans la revue Cochrane 2022 (26 essais), ces substituts ont abaissé la pression artérielle systolique d'environ 5 mmHg et ont probablement réduit les décès cardiovasculaires et les événements coronaires non fatals (certitude modérée), principalement grâce à un grand essai (SSaSS) où près des trois quarts des participants avaient un antécédent d'AVC.
- **Une réassurance très fragile sur le potassium :** l'absence d'excès d'hyperkaliémie dans la revue Cochrane (RR 1,04) repose sur seulement **12 contre 10 événements**, dont 91 % du poids statistique provient d'une seule petite étude en maison de retraite à haut risque de biais. Le plus grand essai n'a pas mesuré la kaliémie de façon répétée. La kaliémie moyenne augmentait de 0,12 mmol/L.
- **Le piège majeur :** tous ces essais ont **exclu** les personnes exposées au risque d'hyperkaliémie (maladie rénale chronique, diabète, médicaments épargneurs de potassium). **Aucun essai n'a inclus de patients atteints d'insuffisance cardiaque.** Environ 23 % des participants de SSaSS prenaient un IEC ou un ARA2, sans analyse séparée disponible. Les auteurs soulignent que ces résultats peuvent ne pas s'appliquer aux personnes à risque d'hyperkaliémie. Par ailleurs, la revue ne précise pas si les ARM (spironolactone, éplérénone) ou le sacubitril/valsartan entraient dans les critères d'exclusion.
- **Des produits très variables :** la part de potassium variait d'environ 10 % à 50 % selon les produits.
- **Notice des médicaments et recommandations :** la notice du sacubitril/valsartan (Entresto) cite explicitement les compléments de potassium et les substituts de sel contenant du potassium au même titre que la spironolactone comme facteurs d'élévation de la kaliémie. Dans l'essai PARADIGM-HF, environ 1 patient sur 6 présentait déjà un potassium supérieur à 5,5 mmol/L sans aucun apport potassique supplémentaire. Les recommandations NICE NG106 (1.9.11) et les guides patients déconseillent formellement les substituts de sel contenant du potassium.`,
    },
    {
      headingFr: 'Questions encore ouvertes',
      bodyMarkdownFr: `- Le contenu précis de l'annexe en ligne de l'ESC 2026 (Table S24) consacrée à l'autogestion du sel et des liquides, le texte principal ne comportant pas de seuil en grammes.
- L'effet éventuel d'une réduction du sodium sur plusieurs années sur les décès et hospitalisations (seule une analyse post-hoc de SODIUM-HF a été identifiée).
- Les annexes en ligne de SODIUM-HF (sous-groupe selon la FEVG et données détaillées de sécurité) et de FRESH-UP (natrémie de suivi), non consultées.`,
    },
  ],
  relatedArticleSlugs: [
    'nutrition-et-complements-insuffisance-cardiaque',
    'interactions-complements-aliments-medicaments',
    'alimentation-cardioprotectrice',
    'poids-obesite-et-denutrition',
    'vivre-avec-insuffisance-cardiaque',
    'tension-arterielle-insuffisance-cardiaque',
    'essais-cliniques-cles',
  ],
  sources: [
    {
      label: 'SODIUM-HF (The Lancet, 2022 — texte intégral)',
      detail: '806 patients, FEVG médiane 36 %, sodium < 1 500 mg/j contre soins usuels, résultats à 12 mois et limites.',
    },
    {
      label: 'FRESH-UP (Nature Medicine, 2025 — texte intégral et données étendues)',
      detail: '504 patients stables, limite fixe 1 500 mL/j contre apports libres, qualité de vie, soif et sécurité à 6 mois.',
    },
    {
      label: 'Consensus HFA-ESC 2024 et recommandations ESC 2026',
      detail: 'Repères européens sur le sel (≤ 5 g/j HFA 2024 ; aucun seuil chiffré dans le texte principal ESC 2026) et les liquides (1,5 à 2,5 L/j selon la soif).',
    },
    {
      label: 'Revue Cochrane 2022 sur les substituts de sel (texte intégral)',
      detail: '26 essais en population générale, exclusions des sujets à risque, absence d’essai dans l’insuffisance cardiaque et limites des données de kaliémie.',
    },
    {
      label: 'AHA/ACC/HFSA 2022, NICE NG106 (2025) et notice sacubitril/valsartan (Entresto)',
      detail: 'Positions américaines et britanniques ; mise en garde contre les substituts de sel potassiques et données PARADIGM-HF.',
    },
  ],
  disclaimerType: 'medical',
};
