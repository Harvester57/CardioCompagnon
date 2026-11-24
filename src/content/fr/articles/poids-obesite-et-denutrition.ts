import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'poids-obesite-et-denutrition',
  sourceWikiPath: 'wiki/concepts/weight-obesity-and-malnutrition.md',
  titleFr: 'Poids, obésité et dénutrition (cachexie cardiaque)',
  category: 'nutrition',
  asOf: '2026-11-24',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'poids',
    'obésité',
    'paradoxe-obésité',
    'perte-de-poids',
    'dénutrition',
    'cachexie-cardiaque',
    'sarcopénie',
    'protéines',
    'effort',
    'glp-1',
  ],
  aliases: [
    "Paradoxe de l'obésité",
    'Perte de poids',
    'Cachexie cardiaque',
    'Dénutrition',
    'Malnutrition',
    'Sarcopénie',
    'EFFORT',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Dans l'insuffisance cardiaque, le poids doit être surveillé dans les deux sens. L'excès de poids n'est pas protecteur malgré la notion médiatisée de « paradoxe de l'obésité », qui relève surtout d'un biais statistique : la graisse abdominale est au contraire associée à davantage d'hospitalisations. Une perte de poids progressive, planifiée avec l'équipe pour préserver la masse musculaire, est raisonnable, mais aucun essai randomisé n'a testé la perte de poids volontaire dans l'ICFER, et les nouveaux traitements de l'obésité (sémaglutide, tirzépatide) ont surtout fait leurs preuves lorsque la FEVG est ≥ 45 %. À l'opposé, perdre du poids sans le vouloir ou perdre l'appétit est un signal d'alerte : dans l'essai EFFORT, un soutien nutritionnel adapté chez des patients hospitalisés à risque a réduit la mortalité à 30 jours de 14,8 % à 8,4 %.",
  sections: [
    {
      headingFr: 'Le « paradoxe de l’obésité » : pourquoi il est trompeur',
      bodyMarkdownFr: `- **L'observation initiale :** dans une méta-analyse regroupant 28 209 patients atteints d'insuffisance cardiaque, les personnes en surpoids ou obèses présentaient une mortalité plus basse que les personnes de poids normal ou faible.
- **Pourquoi il ne s'agit probablement pas d'une vraie protection (revue Morris et Rider, 2025) :**
  - Dans l'essai **PARADIGM-HF** (8 399 patients avec ICFER), l'avantage apparent de survie lié à un IMC plus élevé **disparaissait** après ajustement sur le **NT-proBNP**, marqueur de contrainte cardiaque.
  - Dans ce même essai, un rapport taille/hanches élevé et d'autres indicateurs d'adiposité abdominale étaient associés à **davantage** d'hospitalisations pour insuffisance cardiaque.
  - Les explications les plus probables sont la causalité inverse (les patients les plus gravement malades maigrissent parce que l'insuffisance cardiaque dégrade les tissus corporels), le biais de sélection et la confusion par la sévérité de la maladie.`,
    },
    {
      headingFr: 'Perte de poids volontaire dans l’ICFER : preuves et précautions',
      bodyMarkdownFr: `**Ce que montrent les données (Morris et Rider, 2025) :**
- **Aucun essai randomisé** n'a évalué une perte de poids intentionnelle chez des patients obèses atteints d'ICFER.
- **Programme diététique :** dans une petite étude non contrôlée comportant majoritairement des ICFER, 6 mois de régime (perte moyenne de 4,4 kg) ont amélioré la FEVG et la classe NYHA, davantage encore lorsque la perte atteignait 3 kg ou plus.
- **Chirurgie bariatrique :** de petites séries rétrospectives ont rapporté des gains de FEVG de 5 à 12 %.
- **Médicaments agonistes du GLP-1 :**
  - Dans l'ICFER, les essais spécifiques (LIVE et un essai de l'albiglutide) ont entraîné 2 à 4 kg de perte de poids sans amélioration fonctionnelle.
  - Le sémaglutide a réduit les événements d'insuffisance cardiaque dans **SELECT** (HR 0,82), sans différence apparente selon le type de FEVG.
  - Les grands essais positifs dédiés à l'insuffisance cardiaque (**STEP-HFpEF**, **SUMMIT**) ont porté sur l'insuffisance cardiaque à **FEVG préservée**.
- **Point de vigilance :** perdre du muscle en même temps que de la graisse (« obésité sarcopénique ») est un risque réel.

**Ce que disent les recommandations :**
- **ESC 2026 :** recommande le sémaglutide ou le tirzépatide uniquement lorsque la **FEVG est ≥ 45 % avec un IMC ≥ 30** (Classe IIa). Cette recommandation ne s'applique pas à une FEVG autour de 35 %.
- **ESC 2026 :** la chirurgie bariatrique peut être envisagée en cas d'IMC ≥ 35 lorsque les autres mesures ont échoué (Classe IIb).
- Des recommandations antérieures (citées de seconde main par la revue) réservaient les conseils formels d'amaigrissement à un IMC ≥ 35.
- Les conseils d'hygiène de vie **ESC 2026 (Classe I)** incluent le maintien d'un poids de santé.

**Régimes draconiens et iSGLT2 :** les régimes très hypocaloriques ou cétogènes figurent dans la notice de la dapagliflozine (Forxiga) parmi les facteurs déclenchants d'acidocétose. Ne débutez jamais de régime restrictif sévère sous iSGLT2 sans l'accord de votre cardiologue.`,
    },
    {
      headingFr: 'Dénutrition et cachexie cardiaque : un risque grave mais traitable',
      bodyMarkdownFr: `**Sous-groupe insuffisance cardiaque de l'essai EFFORT (*JACC*, 2021) :** 645 patients hospitalisés pour insuffisance cardiaque et identifiés comme étant à risque nutritionnel ont été randomisés entre un soutien personnalisé guidé par diététicien (objectifs caloriques, protéiques et en micronutriments) et l'alimentation hospitalière standard.

| Critère à 30 jours | Soutien nutritionnel | Alimentation hospitalière standard | Effet |
|---|---|---|---|
| **Mortalité** | 8,4 % | 14,8 % | OR 0,44 |
| **Événements cardiovasculaires majeurs** | 17,4 % | 26,9 % | OR 0,50 |

- Le bénéfice persistait à 6 mois et était le plus marqué chez les patients les plus dénutris.
- Chaque point supplémentaire sur le score de risque nutritionnel augmentait la mortalité à 6 mois (OR 1,65).
- Ce résultat concerne des patients **hospitalisés et à risque nutritionnel**, et non des patients ambulatoires stables ou en surpoids.

**Autres essais plus petits (rapportés dans la littérature) :**
- **PICNIC** (120 patients hospitalisés dénutris) a montré des bénéfices très importants mais a été interrompu prématurément.
- Un essai ambulatoire de 2026 (**BOCADOS-IC**) n'a pas réduit les événements cliniques majeurs, tout en améliorant l'état nutritionnel, la masse musculaire et la qualité de vie.

**Position ESC 2026 :** la dénutrition étant associée à un moins bon pronostic, l'évaluation nutritionnelle et les interventions diététiques « peuvent être utiles » (texte narratif, sans classe). La fragilité, la dénutrition, la cachexie et la sarcopénie sont signalées comme fréquentes et liées à une mortalité plus élevée dans l'IC avancée.`,
    },
    {
      headingFr: 'En pratique : relier nutrition et pesée quotidienne',
      bodyMarkdownFr: `- **En cas d'hospitalisation ou de perte de poids involontaire :** des apports suffisants en énergie et en protéines priment sur toute restriction. Un dépistage de la dénutrition reste utile même lorsque l'IMC est élevé (on peut être en surpoids et carencé en protéines ou en masse musculaire).
- **Lire les courbes de poids dans les deux sens :**
  - une **prise de poids rapide** sur quelques jours (par exemple 2 kg en 2 à 3 jours) traduit habituellement une rétention d'eau (congestion) ;
  - une **perte de poids lente et involontaire** sur plusieurs semaines ou mois, accompagnée d'une baisse d'appétit ou de force, évoque une dénutrition ou une fonte musculaire (cachexie / sarcopénie).

Ces deux situations méritent d'être signalées à votre cardiologue, votre médecin traitant ou votre infirmière insuffisance cardiaque.`,
    },
  ],
  relatedArticleSlugs: [
    'nutrition-et-complements-insuffisance-cardiaque',
    'alimentation-cardioprotectrice',
    'sel-et-liquides-insuffisance-cardiaque',
    'interactions-complements-aliments-medicaments',
    'vivre-avec-insuffisance-cardiaque',
    'readaptation-cardiaque-et-activite-physique',
    'apnee-du-sommeil-insuffisance-cardiaque',
  ],
  sources: [
    {
      label: 'Morris et Rider (2025)',
      detail: 'Revue sur le paradoxe de l’obésité (PARADIGM-HF), les preuves sur la perte de poids, la chirurgie bariatrique et les agonistes du GLP-1.',
    },
    {
      label: 'EFFORT — sous-groupe insuffisance cardiaque (JACC, 2021)',
      detail: '645 patients hospitalisés à risque nutritionnel, mortalité à 30 jours et 6 mois ; notes sur PICNIC et BOCADOS-IC.',
    },
    {
      label: 'Recommandations ESC 2026 sur l’insuffisance cardiaque',
      detail: 'Agonistes du GLP-1 uniquement si FEVG ≥ 45 % et IMC ≥ 30 (IIa), chirurgie bariatrique (IIb), évaluation nutritionnelle et cachexie.',
    },
    {
      label: 'Notice dapagliflozine (Forxiga)',
      detail: 'Régime cétogène et restriction calorique sévère listés comme facteurs déclenchants d’acidocétose.',
    },
  ],
  disclaimerType: 'medical',
};
