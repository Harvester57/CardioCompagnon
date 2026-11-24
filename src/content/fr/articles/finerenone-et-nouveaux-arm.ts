import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'finerenone-et-nouveaux-arm',
  sourceWikiPath: 'wiki/concepts/finerenone-and-newer-mras.md',
  titleFr: 'Finérénone, nouveaux ARM et chélateurs de potassium',
  category: 'traitements',
  asOf: '2026-11-24',
  confidence: 'medium-high',
  volatility: 'hot',
  tags: [
    'finérénone',
    'arm',
    'arm-non-stéroïdien',
    'hyperkaliémie',
    'chélateur-potassium',
    'patiromer',
    'finearts-hf',
    'finality-hf',
  ],
  aliases: [
    'Finérénone',
    'Kerendia',
    'ARM non stéroïdien',
    'nsMRA',
    'Chélateurs de potassium',
    'Patiromer',
    'Veltassa',
    'Cyclosilicate de zirconium sodique',
    'Lokelma',
    'FINEARTS-HF',
    'FINALITY-HF',
  ],
  linkedModules: ['ckd', 'diabetes'],
  plainSummaryFr:
    "Les antagonistes des récepteurs minéralocorticoïdes (ARM) forment l'un des quatre piliers du traitement de l'insuffisance cardiaque. Les deux molécules historiques — la spironolactone et l'éplérénone — ont démontré leur capacité à prolonger la vie et à éviter les hospitalisations dans l'ICFER. La finérénone est un ARM non stéroïdien plus récent, qui expose moins à l'hyperkaliémie et ne provoque pas de gonflement des seins, mais ses grands essais cliniques ont porté sur des FEVG d'au moins 40 % ou sur le diabète de type 2 avec maladie rénale chronique. Autour de 35 % de FEVG, elle n'a pas encore de preuve sur les événements cliniques (un essai est en cours jusqu'en 2028) : les recommandations ESC 2026 désignent donc toujours la spironolactone ou l'éplérénone en ICFER. Lorsque le potassium s'élève sous ARM, des chélateurs de potassium peuvent être discutés, même si leur bénéfice sur le pronostic reste incertain.",
  sections: [
    {
      headingFr: 'Où la finérénone a-t-elle été évaluée ?',
      bodyMarkdownFr: `| Essai | Population | Résultat | Applicable à une FEVG autour de 35 % ? |
|---|---|---|---|
| **FINEARTS-HF** (NEJM, 2024) | **6 001 patients** avec IC et **FEVG ≥ 40 %** | Total des aggravations d'IC + décès CV réduit de **16 %** (rapport de taux **0,84** ; IC 0,74–0,95). Décès CV seul non réduit (**HR 0,93**, non significatif) | **Non** (FEVG trop basse pour les critères de l'essai) |
| **FIDELIO-DKD**, **FIGARO-DKD** ; analyse poolée **FINE-HEART** (2024) | **18 991 patients** issus des essais rénaux et IC, majoritairement diabète de type 2 avec maladie rénale chronique (MRC) | Hospitalisations pour IC **HR 0,83** ; mortalité toutes causes **HR 0,91** ; décès CV **HR 0,89** (non significatif) | Uniquement en cas de diabète avec MRC ; aucun essai ICFER inclus dans le pool |
| **ARTS**, **ARTS-HF** (2013–2016) | Petites études de phase 2 dans l'ICFER ; 90 jours ; finérénone vs spironolactone ou éplérénone | Baisse du NT-proBNP comparable à l'éplérénone ; moins d'hyperkaliémies que la spironolactone (**5,3 % contre 12,7 %**) | Population directe, mais études trop petites et trop courtes pour juger la survie ou les hospitalisations |
| **FINALITY-HF** (en cours) | Environ **2 600 patients** avec ICFER ne pouvant pas prendre ou ne tolérant pas la spironolactone ou l'éplérénone | Pas encore de résultats ; fin d'étude enregistrée en **janvier 2028** | Directement applicable dès publication des résultats |
| **REDEFINE-HF**, **CONFIRMATION-HF** (en cours) | IC hospitalisée : FEVG ≥ 40 % (REDEFINE-HF) ; association précoce finérénone + empagliflozine sans seuil de FEVG listé (CONFIRMATION-HF) | Pas encore de résultats ; fin prévue vers **fin 2027** | Partiellement |`,
    },
    {
      headingFr: 'Ce que disent les recommandations et les autorisations (AMM)',
      bodyMarkdownFr: `- **ESC 2026 (insuffisance cardiaque) :** un ARM est recommandé en **Classe I, Niveau A** dans l'insuffisance cardiaque symptomatique quelle que soit la FEVG. Pour l'**ICFER** (désormais définie par une FEVG < 50 % dans l'ESC 2026), la recommandation précise un **ARM stéroïdien** — spironolactone (*Aldactone*) ou éplérénone (*Inspra*). Pour l'IC à FEVG préservée (HFpEF), l'un ou l'autre type est possible.
- **ESC 2026 (diabète et maladie rénale chronique) :** la finérénone (*Kerendia*) est recommandée en **Classe I, Niveau A** pour réduire le risque d'insuffisance cardiaque chez les patients atteints de **diabète de type 2 et de maladie rénale chronique**, quelle que soit la FEVG (reprise de la mise à jour 2023).
- **Autorisations de mise sur le marché (AMM) :** la FDA américaine a approuvé la finérénone dans l'insuffisance cardiaque avec **FEVG ≥ 40 %** en **juillet 2025** ; l'AMM européenne (EMA) mentionne également l'insuffisance cardiaque avec **FEVG ≥ 40 %**.
- **NICE (Royaume-Uni) :** la finérénone est retenue comme option dans l'insuffisance cardiaque à FEVG modérément réduite ou préservée (**NICE TA1182**, publiée le 5 août 2026), mais pas dans l'ICFER.
- **Recommandations américaines (AHA/ACC/HFSA 2022) :** antérieures à FINEARTS-HF, elles ne couvrent pas la finérénone dans l'insuffisance cardiaque.
- **Décalage de frontière à connaître :** l'ESC 2026 regroupe la tranche **40–49 %** dans l'ICFER et y désigne les ARM stéroïdiens, tandis que les AMM de la finérénone couvrent les **FEVG ≥ 40 %**. Cette distinction joue surtout si la FEVG s'améliore pour entrer dans cette zone.`,
    },
    {
      headingFr: 'Comment la finérénone se distingue de la spironolactone et de l’éplérénone',
      bodyMarkdownFr: `- **Potassium (kaliémie) :** tous les ARM peuvent élever le potassium. Dans **FINEARTS-HF**, une kaliémie **> 5,5 mmol/L** est survenue chez **14,3 %** des patients sous finérénone contre **6,9 %** sous placebo ; l'arrêt pour hyperkaliémie a concerné **1,7 % contre 0,6 %**. Les comparaisons indirectes suggèrent un risque d'hyperkaliémie moindre qu'avec la spironolactone, mais aucun essai pronostique direct face à face n'existe.
- **Effets hormonaux et mammaires :** la spironolactone peut provoquer un gonflement ou une sensibilité des seins (gynécomastie, y compris chez l'homme), des troubles de l'érection et une baisse de libido. La finérénone n'a pas ces effets anti-hormonaux. Dans l'ICFER, l'**éplérénone** reste l'alternative établie lorsque ces effets surviennent sous spironolactone.
- **Fonction rénale :** une petite baisse initiale du DFGe (environ **2 à 3 mL/min**) est attendue et n'était pas associée à un moins bon pronostic.
- **Association avec un iSGLT2 :** le bénéfice observé dans FINEARTS-HF se maintenait chez les patients recevant déjà un iSGLT2.
- **Coût (repère américain) :** environ **700 USD par mois** aux États-Unis, contre environ **10 USD** pour la spironolactone générique (les conditions tarifaires et de remboursement en France sont distinctes et encadrées par la HAS et l'Assurance Maladie).
- **Posologie (tableau ESC) :** **10 à 20 mg/j** si le DFGe est ≤ 60 mL/min/1,73 m² ; **20 à 40 mg/j** si le DFGe est > 60 mL/min/1,73 m².`,
    },
    {
      headingFr: 'Quand le potassium monte : les chélateurs de potassium',
      bodyMarkdownFr: `- Les **chélateurs de potassium** — **patiromer (*Veltassa*)** et **cyclosilicate de zirconium sodique ou ZS-9 (*Lokelma*)** — sont des poudres prises par voie orale qui captent le potassium dans le tube digestif pour l'éliminer dans les selles.
- **Essai DIAMOND (2022) :** chez **878 patients** atteints d'ICFER, le patiromer a abaissé la kaliémie, réduit les épisodes d'hyperkaliémie (**HR 0,63**) et limité les réductions de dose d'ARM (**HR 0,62**). L'essai n'avait toutefois **pas la puissance statistique pour démontrer une baisse des décès ou des hospitalisations**.
- **ESC 2026 :** les chélateurs de potassium peuvent être utilisés pour traiter ou prévenir l'hyperkaliémie afin de maintenir les ARM et autres bloqueurs du SRAA, mais les recommandations soulignent que leur **bénéfice sur les événements cliniques reste incertain** ; un essai (**REALIZE-K**) a par ailleurs montré un signal de davantage d'aggravations d'insuffisance cardiaque avec le cyclosilicate de zirconium sodique.
- **Recommandations américaines (AHA/ACC/HFSA 2022) :** chélateurs de potassium classés en **Classe 2b**.
- **Règle de sécurité ESC sur les ARM (repère clinicien) :** prudence avant d'initier un ARM si le DFGe est **< 25 mL/min/1,73 m²** ou si la kaliémie est **≥ 5,0 mmol/L** ; réduire ou suspendre si la kaliémie dépasse **5,5 mmol/L**.`,
    },
    {
      headingFr: 'Ce que cela signifie pour une cardiomyopathie ischémique autour de 35 % de FEVG',
      bodyMarkdownFr: `- À **35 % de FEVG**, la finérénone serait **hors AMM et non prouvée** sur les événements d'insuffisance cardiaque. À ce niveau de FEVG, les preuves de survie appartiennent aux ARM stéroïdiens : la **spironolactone** (essai **RALES**) et l'**éplérénone** (essais **EMPHASIS-HF**, et **EPHESUS** après un infarctus du myocarde).
- La finérénone est appuyée par les recommandations dans deux contextes précis : le **diabète de type 2 associé à une maladie rénale chronique** (pour réduire le risque d'insuffisance cardiaque) ou, selon son AMM, lorsque la **FEVG remonte à 40 % ou plus**.
- Pour les personnes ne pouvant pas prendre la spironolactone ou l'éplérénone, la situation pourra évoluer lors de la publication de **FINALITY-HF** (attendue vers 2027–2028).
- En présence d'effets hormonaux gênants sous spironolactone, le passage à l'**éplérénone** constitue l'option validée dans l'ICFER, à discuter avec votre cardiologue.`,
    },
  ],
  relatedArticleSlugs: [
    'medicaments-insuffisance-cardiaque',
    'traitements-additionnels-nouveaux',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'medicaments-effets-secondaires-suivi',
    'interactions-complements-aliments-medicaments',
    'maladies-associees',
    'essais-cliniques-cles',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 sur l’insuffisance cardiaque',
      detail: 'Définition de l’ICFER, formulation ARM stéroïdien vs finérénone, diabète avec MRC, posologies et chélateurs de potassium',
    },
    {
      label: 'FINEARTS-HF (NEJM, 2024), FINE-HEART (2024) et ARTS/ARTS-HF (2013–2016)',
      detail: 'Données cliniques de la finérénone à FEVG ≥ 40 %, en analyse poolée et en phase 2 ICFER',
    },
    {
      label: 'Registres d’essais cliniques (FINALITY-HF, REDEFINE-HF, CONFIRMATION-HF)',
      detail: 'Essais en cours sur la finérénone dans l’insuffisance cardiaque (échéances 2027–2028)',
    },
    {
      label: 'DIAMOND (2022) et REALIZE-K',
      detail: 'Données sur le patiromer et le cyclosilicate de zirconium sodique dans l’ICFER',
    },
    {
      label: 'Revue ACC 2026, NICE NG106 / TA1182 (2026) et AHA/ACC/HFSA 2022',
      detail: 'AMM FDA/EMA, évaluation NICE, comparaisons d’hyperkaliémie, coût et classe 2b des chélateurs aux États-Unis',
    },
    {
      label: 'Beldhuis et al. (2022), heartfailurematters.org et livret Guy’s and St Thomas’',
      detail: 'Effets secondaires hormonaux des ARM et suivi cardiorénal',
    },
  ],
  disclaimerType: 'medical',
};
