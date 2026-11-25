export const EXPECTED_ARTICLE_SLUGS = [
  // Lot 1 -- Diagnostic, Chiffres & Comorbidites (11)
  'comprendre-le-diagnostic',
  'cardiomyopathie-ischemique',
  'fraction-dejection',
  'examens-et-chiffres',
  'dysfonction-vg-asymptomatique-stade-b',
  'confirmer-la-cause-dysfonction-vg',
  'insuffisance-cardiaque-fevg-amelioree',
  'maladies-associees',
  'stenose-aortique-fevg-reduite',
  'tension-arterielle-insuffisance-cardiaque',
  'apnee-du-sommeil-insuffisance-cardiaque',

  // Lot 2 -- Traitements de Fond, Add-ons, Lipides & Fer IV (7)
  'medicaments-insuffisance-cardiaque',
  'medicaments-effets-secondaires-suivi',
  'traitements-additionnels-nouveaux',
  'medicaments-additionnels-ivabradine-digoxine-vericiguat',
  'finerenone-et-nouveaux-arm',
  'cholesterol-et-prevention-secondaire',
  'carence-martiale-et-fer-iv',

  // Lot 3 -- Dispositifs, Revascularisation, CTO & Thrombus (6)
  'dispositifs-cardiaques-dai-crt',
  'gilet-defibrillateur-portable',
  'telesurveillance-insuffisance-cardiaque',
  'revascularisation-pontage-stents',
  'occlusion-coronaire-chronique-cto',
  'thrombus-vg-et-anticoagulants',

  // Lot 4 -- Nutrition, Complements, Interactions & Playbook (10)
  'nutrition-et-complements-insuffisance-cardiaque',
  'guide-pratique-nutrition-complements',
  'tableau-preuves-nutrition-complements',
  'sel-et-liquides-insuffisance-cardiaque',
  'alimentation-cardioprotectrice',
  'poids-obesite-et-denutrition',
  'omega-3-huile-de-poisson',
  'coenzyme-q10',
  'vitamine-d-insuffisance-cardiaque',
  'interactions-complements-aliments-medicaments',

  // Lot 5 -- Vie Quotidienne, France, Readaptation & Conduite (6)
  'vivre-avec-insuffisance-cardiaque',
  'vivre-avec-insuffisance-cardiaque-en-france',
  'readaptation-cardiaque-et-activite-physique',
  'depression-et-sante-emotionnelle',
  'soins-de-support-et-anticipation',
  'regles-conduite-automobile',

  // Lot 6 -- Questions Equipe Medicale, Glossaire & References (4)
  'questions-equipe-cardiologie',
  'glossaire-cardiologie',
  'recommandations-comparees-esc-us-nice',
  'essais-cliniques-cles',
] as const;

export type ExpectedArticleSlug = (typeof EXPECTED_ARTICLE_SLUGS)[number];
