import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'readaptation-cardiaque-et-activite-physique',
  sourceWikiPath: 'wiki/concepts/cardiac-rehabilitation-and-exercise.md',
  titleFr: 'Réadaptation cardiaque (SMR) et activité physique',
  category: 'quotidien',
  asOf: '2026-11-24',
  confidence: 'high',
  volatility: 'warm',
  tags: [
    'réadaptation-cardiaque',
    'smr',
    'activité-physique',
    'qualité-de-vie',
    'hospitalisations',
    'hf-action',
    'cochrane',
  ],
  aliases: [
    'Réadaptation cardiaque',
    'SMR cardiovasculaire',
    'Réentraînement à l’effort',
    'Activité physique',
    'Exercice physique',
    'ExCR',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "La réadaptation cardiaque basée sur l'exercice physique est un programme encadré, proposé en centre (SMR cardiovasculaire) ou à domicile, seul ou accompagné d'éducation thérapeutique. Dans les recommandations ESC 2026, elle est indiquée pour tous les patients stables (Classe I). Les données montrent qu'elle réduit les hospitalisations et améliore la qualité de vie ainsi que l'humeur, sans effet démontré sur la longévité, et qu'elle est sûre dans l'insuffisance cardiaque stable à FEVG réduite. Demandez à votre cardiologue ou à votre médecin traitant quel programme vous convient.",
  sections: [
    {
      headingFr: 'Ce que disent les recommandations',
      bodyMarkdownFr: `- **ESC 2026 :** la réadaptation cardiaque basée sur l'exercice est une recommandation de **Classe I pour tous les patients stables**.
- **NICE NG106 (Royaume-Uni, 2025) :** recommande de proposer un programme personnalisé basé sur l'exercice, après évaluation de sa faisabilité, dans un lieu accessible (domicile, structure de proximité ou hôpital), intégrant une dimension psychologique et éducative ainsi que des repères sur le soutien professionnel disponible.
- **Adaptation selon le stade de la maladie (HFA 2020) :**
  - **Insuffisance cardiaque chronique relativement stable (NYHA I–III) :** réadaptation cardiaque basée sur l'exercice recommandée.
  - **Pendant une phase aiguë ou une décompensation :** la tolérance à l'effort est très réduite ; l'entraînement est suspendu jusqu'à stabilisation.
  - **En phase terminale :** la kinésithérapie se concentre sur l'équilibre et la mobilisation passive des membres.`,
    },
    {
      headingFr: 'Les résultats de la revue Cochrane 2024',
      bodyMarkdownFr: `La synthèse la plus complète rassemble **60 essais randomisés totalisant 8 728 participants**, comparant la réadaptation cardiaque basée sur l'exercice à l'absence de programme d'exercice, avec un suivi médian de **6 mois**.

| Critère (jusqu'à 12 mois) | Résultat | Niveau de certitude |
|---|---|---|
| **Hospitalisation toutes causes** | Probablement réduite : **15,9 % contre 23,8 %** (RR 0,69 ; IC 95 % 0,56–0,86) | Modéré |
| **Hospitalisation pour insuffisance cardiaque** | **5,6 % contre 6,4 %** (RR 0,82 ; IC 95 % 0,49–1,35) : pas de réduction démontrée | Modéré |
| **Mortalité toutes causes** | **5,0 % contre 5,8 %** (RR 0,93 ; IC 95 % 0,71–1,21) : pas de différence claire | Faible |
| **Qualité de vie** (score Minnesota, plus bas = mieux) | Amélioration de **7,39 points** (IC 95 % 4,77–10,30) ; un gain d'au moins 5 points est cliniquement pertinent | Modéré |

- **Modalités du programme :** les bénéfices apparaissent comparables entre programmes à domicile et programmes en centre, quelles que soient la « dose » d'exercice, l'association ou non à une éducation globale, et l'ajout ou non de renforcement musculaire à l'endurance aérobie. Les auteurs soutiennent le développement des formats à domicile et accompagnés par le numérique.
- **Populations sous-représentées :** les personnes âgées et les femmes restent insuffisamment représentées dans ces essais.`,
    },
    {
      headingFr: 'L’essai HF-ACTION (2009) et l’effet sur le moral',
      bodyMarkdownFr: `**HF-ACTION** est le plus vaste essai randomisé individuel consacré à l'entraînement physique dans l'insuffisance cardiaque :

- **Population :** 2 331 patients ambulatoires stables avec FEVG réduite ; âge médian 59 ans, FEVG médiane **25 %**, dont **51 % d'origine ischémique**.
- **Protocole :** 36 séances supervisées en groupe suivies d'un programme à domicile, avec un suivi médian de **30 mois**.
- **Adhésion décroissante :** la durée médiane d'exercice est passée à **95 minutes par semaine** entre les mois 4 et 6, puis à **74 minutes par semaine** entre les mois 10 et 12, sous l'objectif fixé par le protocole.
- **Critère principal (décès ou hospitalisation toutes causes) :** 65 % contre 68 %, HR **0,93** (IC 95 % 0,84–1,02) — **non statistiquement significatif** en analyse brute.
- **Analyse ajustée préspécifiée :** HR **0,89** (IC 95 % 0,81–0,99) sur le critère principal, et HR **0,85** (IC 95 % 0,74–0,99) sur le critère décès cardiovasculaire ou hospitalisation pour insuffisance cardiaque.
- **Sécurité :** les événements indésirables étaient similaires dans les deux groupes, confirmant que l'exercice structuré est sûr chez les patients stables atteints d'insuffisance cardiaque à FEVG réduite (ICFER).
- **Nuances importantes :** le bénéfice statistiquement significatif repose sur l'analyse ajustée, et l'essai s'est déroulé entre 2003 et 2007, avant l'arrivée des ARNI (sacubitril/valsartan) et des iSGLT2. Seuls des patients stables étaient inclus : il ne s'applique pas pendant une décompensation.

### Effet sur l'humeur et la dépression

Dans HF-ACTION, l'entraînement physique a également diminué les symptômes dépressifs à **3 mois** et à **12 mois**, y compris chez les patients présentant des symptômes sévères. Le bénéfice augmentait avec le temps d'activité hebdomadaire pour atteindre un plateau autour de **90 minutes par semaine** (données rapportées par la revue de Basile et al., 2023). La BHF souligne également les effets positifs de l'activité physique sur les symptômes, le moral, l'énergie et le sommeil.`,
    },
    {
      headingFr: 'Repères pratiques en France et précautions',
      bodyMarkdownFr: `- **Accès en France (SMR cardiovasculaire) :** la réadaptation cardiaque s'effectue en service de **SMR (soins médicaux et de réadaptation, ex-SSR)** mention cardiovasculaire, en hospitalisation complète ou en **hôpital de jour**. Elle peut être prescrite directement par votre **médecin traitant** ou votre **cardiologue de ville**, comme à la sortie d'une hospitalisation. **Aucune demande d'accord préalable n'est requise et la prise en charge est assurée à 100 % par l'Assurance Maladie.** Malgré son intérêt reconnu, la HAS constate que le recours reste insuffisant en France.
- **Demander un avis avant de démarrer :** échangez avec votre cardiologue, votre médecin traitant ou votre infirmière insuffisance cardiaque / IPA pour définir le niveau d'effort adapté à votre situation et vérifier l'existence d'un centre SMR proche de chez vous.
- **Gérer la fatigue au quotidien :** fractionnez vos efforts, planifiez des moments de repos autour des journées exigeantes et demandez à votre équipe de rechercher d'autres causes possibles de fatigue.
- **Surveiller une perte de poids involontaire :** la HFA souligne qu'une perte de poids non intentionnelle (hors fonte d'œdèmes) supérieure à **5 % en 3 à 12 mois** constitue un signal précoce de fonte musculaire (cachexie). La fragilité touche environ **45 %** des personnes atteintes d'insuffisance cardiaque.`,
    },
  ],
  relatedArticleSlugs: [
    'vivre-avec-insuffisance-cardiaque',
    'depression-et-sante-emotionnelle',
    'poids-obesite-et-denutrition',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'vivre-avec-insuffisance-cardiaque-en-france',
  ],
  sources: [
    {
      label: 'ESC 2026 — Recommandations Insuffisance Cardiaque',
      detail: 'Réadaptation cardiaque basée sur l’exercice recommandée en Classe I chez tous les patients stables.',
    },
    {
      label: 'Revue Cochrane 2024 (réadaptation cardiaque et insuffisance cardiaque)',
      detail:
        '60 essais (8 728 participants) : effets sur les hospitalisations, la mortalité et la qualité de vie (score Minnesota) ; comparaison centre vs domicile.',
    },
    {
      label: 'Essai HF-ACTION (2009)',
      detail:
        '2 331 patients stables en ICFER (51 % ischémiques) : sécurité, adhésion, résultats bruts et ajustés sur 30 mois.',
    },
    {
      label: 'HFA-ESC Position Paper (2020)',
      detail: 'Adaptation de l’exercice selon le stade de la maladie, fragilité (45 %) et signal d’alerte de perte de poids (> 5 %).',
    },
    {
      label: 'Basile et al. (2023)',
      detail: 'Effet de l’entraînement physique sur les symptômes dépressifs dans HF-ACTION (plateau autour de 90 min/semaine).',
    },
    {
      label: 'NICE NG106 (2025) & British Heart Foundation (BHF)',
      detail: 'Recommandation d’un programme personnalisé accessible ; conseils de fractionnement de l’effort.',
    },
    {
      label: 'HAS — Note de cadrage SMR cardiovasculaire (2023) & Fiche orientation (2024)',
      detail: 'Accès en SMR en France (hospitalisation complète ou de jour), prescription par la ville ou l’hôpital, remboursement à 100 % et faible taux de recours.',
    },
  ],
  disclaimerType: 'medical',
};
