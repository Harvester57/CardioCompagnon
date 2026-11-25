import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'berberine-cholesterol-et-interactions',
  sourceWikiPath: 'wiki/concepts/berberine.md',
  titleFr: 'Berbérine : promesses sur le cholestérol et interactions médicamenteuses',
  category: 'nutrition',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'berbérine',
    'compléments',
    'interactions',
    'cyp3a4',
    'cyp2d6',
    'cyp2c9',
    'glycoprotéine-p',
    'statines',
    'anticoagulants',
    'digoxine',
    'cholestérol-ldl',
    'anses',
  ],
  aliases: [
    'Berbérine',
    'Berberis',
    'Épine-vinette',
    'Hydraste du Canada',
    'Alcaloïde d’hydraste',
    'Ozempic naturel',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "La berbérine est un alcaloïde végétal jaune issu de plantes comme l'épine-vinette ou l'hydraste du Canada, vendu en complément alimentaire pour la glycémie, le poids et le cholestérol (parfois présenté à tort comme une alternative « naturelle » aux traitements injectables modernes). Si elle abaisse modestement le cholestérol LDL d'environ 0,19 g/L (0,5 mmol/L) dans des essais courts, aucune étude n'a démontré de baisse des infarctus, des AVC ou des décès, ni d'intérêt en complément d'une statine prescrite. Le seul essai dans l'insuffisance cardiaque remonte à 2003 (petite étude chinoise jamais répliquée, antérieure aux traitements actuels). Le problème majeur dans la cardiomyopathie ischémique est que la berbérine freine plusieurs enzymes hépatiques (CYP3A4, CYP2D6, CYP2C9) et la glycoprotéine P qui éliminent de nombreux médicaments cardiaques, au risque d'augmenter leurs concentrations sanguines. En France, l'ANSES déconseille d'associer les compléments de berbérine à des médicaments. Verdict : à éviter en automédication sauf validation préalable de votre cardiologue ou de votre pharmacien.",
  sections: [
    {
      headingFr: 'La berbérine protège-t-elle le cœur ?',
      bodyMarkdownFr: `### Effet sur le cholestérol

Une méta-analyse publiée en 2025 (**Liu 2025**) a regroupé **12 essais contrôlés contre placebo** totalisant **889 participants** (principalement en Chine, au Mexique et en Inde, recevant 300 à 1 500 mg/j pendant 12 à 20 semaines) :

- **Cholestérol LDL :** baisse moyenne d'environ **0,19 g/L (0,5 mmol/L)** ;
- **Cholestérol total :** baisse d'environ **0,17 g/L (0,45 mmol/L)** ;
- **Triglycérides :** baisse d'environ **0,33 g/L (0,37 mmol/L)** ;
- **Cholestérol HDL et pression artérielle :** aucun changement significatif.

**Limites importantes :** les essais étaient très hétérogènes (**I² = 89 %**) et l'effet sur le LDL-c n'était plus statistiquement significatif dans les études d'une durée de 16 semaines ou plus. Aucun essai n'a évalué les infarctus, les AVC ou la mortalité, et aucun n'a testé la berbérine en ajout d'une statine aux posologies recommandées après un infarctus.

Une étude chinoise de 2008 (**Kong 2008**, 63 participants suivis environ 2 mois) a rapporté une baisse plus forte du LDL-c (-31,8 %) en associant simvastatine et berbérine qu'avec chaque produit seul. Toutefois, aucun dosage sanguin de la simvastatine n'a été réalisé : il est donc impossible de savoir quelle part de cet effet provenait simplement d'une augmentation des taux sanguins de simvastatine due à l'interaction enzymatique.

### Données dans l'insuffisance cardiaque

Un seul essai randomisé chinois (**Zeng 2003**, 156 patients atteints de cardiomyopathie ischémique ou dilatée idiopathique avec extrasystoles fréquentes) a ajouté 1,2 à 2,0 g/j de berbérine au traitement de l'époque : la FEVG, la capacité d'effort et les symptômes se sont davantage améliorés qu'avec le placebo à 8 semaines, avec 7 décès contre 13 sur environ 2 ans.

Cet essai a un poids scientifique très faible : effectif limité, monocentrique, aveugle imprécis, comparaison de mortalité reposant sur **20 événements seulement**, **jamais répliqué depuis plus de 20 ans**, et antérieur aux traitements modernes (ARNI, ARM généralisés et iSGLT2). La plupart des affirmations en ligne selon lesquelles la berbérine « aide dans l'insuffisance cardiaque » renvoient à cette unique publication.

Une vérification du registre **ClinicalTrials.gov** réalisée le 25 novembre 2026 n'a retrouvé aucun essai enregistré sur la berbérine dans l'insuffisance cardiaque (les registres chinois n'ont pas été interrogés).`,
    },
    {
      headingFr: 'Interactions médicamenteuses : le principal sujet de vigilance',
      bodyMarkdownFr: `### Ce qui a été mesuré chez l'être humain

- **Inhibition d'enzymes hépatiques (Guo 2012) :** chez 17 hommes sains en Chine, la prise de 300 mg de berbérine trois fois par jour pendant 2 semaines a augmenté d'environ **40 %** l'exposition (AUC) au midazolam (sonde du **CYP3A4**), multiplié par environ **9** le ratio sonde du **CYP2D6** et **doublé** celui du **CYP2C9** (CYP2C19 et CYP1A2 inchangés). *(Ces chiffres proviennent de résumés de l'article et n'ont pas été vérifiés sur le texte intégral.)*
- **Élévation de la ciclosporine (Wu 2005) :** chez 52 patients transplantés rénaux, l'ajout de berbérine a augmenté les concentrations résiduelles de ciclosporine de **88,9 %** par rapport à l'état initial, contre 64,5 % chez les témoins ; chez 6 patients étudiés de façon détaillée, l'exposition a grimpé de **34,5 %**. Or la ciclosporine est éliminée par le **CYP3A4** et la **glycoprotéine P**, exactement comme l'apixaban, le rivaroxaban et la digoxine. La base du Memorial Sloan Kettering (**MSKCC**) signale également un cas pédiatrique de toxicité au tacrolimus après ajout de berbérine.

### Ce que cela implique pour vos médicaments cardiaques

Le tableau ci-dessous repose sur des **inférences pharmacologiques** à partir des données enzymatiques et de transport : aucun de ces médicaments cardiaques n'a fait l'objet d'une étude directe de dosage avec la berbérine.

| Médicament ou classe | Mécanisme suspecté | Niveau de preuve | Effet possible |
|---|---|---|---|
| **Métoprolol, carvédilol** | Éliminés en partie par le CYP2D6 | Inféré de la sonde CYP2D6 | Pouls plus lent, baisse de tension |
| **Warfarine (*Coumadine*)** | Éliminée par le CYP2C9 | Inféré ; aucune étude sur l'INR | Hausse de l'INR, risque hémorragique |
| **Apixaban (*Eliquis*), rivaroxaban (*Xarelto*)** | CYP3A4 et glycoprotéine P | Inféré des données CYP3A4 et ciclosporine | Hausse des taux sanguins, saignements (surtout avec antiagrégants) |
| **Digoxine** | Glycoprotéine P ; citée par l'ANSES | Mécanisme et avis réglementaire ; pas d'étude humaine | Hausse des concentrations (marge de sécurité étroite) |
| **Simvastatine, atorvastatine (*Tahor*)** | CYP3A4 ; citées par l'ANSES | Essai d'association sans dosages sanguins ; données de laboratoire | Hausse des taux de statine, effets indésirables musculaires |
| **Rosuvastatine (*Crestor*), pravastatine** | Voie CYP3A4 non prépondérante | Non testé | Risque probablement moindre, inconnu |
| **Ivabradine (*Procoralan*)** | CYP3A4 | Inféré | Ralentissement excessif de la fréquence cardiaque |
| **Antidiabétiques** | Effet hypoglycémiant additif | Baisse glycémique d'environ 0,5 mmol/L dans les essais ; ANSES | Hypoglycémie |
| **Traitements abaissant la tension (ARNI, IEC, ARM, iSGLT2)** | Effet hypotenseur additif signalé par l'ANSES | Avis réglementaire | Vertiges, hypotension |

**Règle impérative :** si vous prenez un **anticoagulant** (warfarine, apixaban, rivaroxaban, édoxaban) ou de la **digoxine**, toute prise de berbérine doit être préalablement évaluée par votre pharmacien ou votre cardiologue.`,
    },
    {
      headingFr: 'Position de l’ANSES en France et qualité des compléments',
      bodyMarkdownFr: `### Avis de l'autorité sanitaire française (ANSES 2019)

En 2019, l'Agence nationale de sécurité sanitaire de l'alimentation, de l'environnement et du travail (**ANSES**) a évalué les compléments alimentaires contenant de la berbérine. D'après les synthèses disponibles et la presse médicale française (le rapport officiel intégral n'ayant pas pu être lu directement) :

- l'ANSES estime que la berbérine exerce des **effets pharmacologiques dès 400 mg/j**, alors que les produits commercialisés apportent couramment **500 à 1 500 mg/j** ;
- elle cite parmi les risques les troubles digestifs, l'**hypoglycémie** et l'**hypotension** ;
- elle mentionne des interactions avec la **digoxine**, les **statines**, la ciclosporine, le losartan, la metformine et le midazolam, et **déconseille d'associer les compléments de berbérine aux médicaments** ;
- selon la presse médicale, elle déconseille également son usage aux personnes diabétiques ou ayant des antécédents cardiaques ou hépatiques (formulation exacte non vérifiée sur le document source).

Aucune allégation de santé n'est autorisée pour la berbérine dans l'Union européenne.

### Qualité et variabilité des produits

Une analyse américaine de **15 compléments de berbérine** (**Funk 2018**, chiffres issus de résumés) a montré que la teneur réelle était en moyenne de **75 %** de la dose annoncée sur l'étiquette (extrêmes de **33 % à 100 %**), avec 9 produits sur 15 hors des normes attendues d'un médicament. Changer de marque peut ainsi modifier jusqu'à trois fois la dose ingérée et rendre imprévisible toute interaction médicamenteuse.`,
    },
    {
      headingFr: 'Synthèse et repères pratiques',
      bodyMarkdownFr: `- **Verdict :** **à éviter en automédication**, sauf examen et accord préalables de votre cardiologue ou de votre pharmacien.
- **Recommandations internationales :** la berbérine ne figure dans aucune recommandation sur l'insuffisance cardiaque (ESC, AHA/ACC/HFSA ou NICE). Les traitements hypolipémiants validés après un infarctus reposent sur les statines, l'ézétimibe et, si besoin, les inhibiteurs de PCSK9.
- **Niveau de certitude :** faible pour un éventuel bénéfice clinique cardiaque (baisse modeste du LDL-c sans preuve sur les événements), modéré pour l'inhibition des enzymes hépatiques d'élimination des médicaments.
- **En pratique :** n'ajoutez pas et ne substituez jamais la berbérine à une statine ou à un traitement antidiabétique prescrit, et signalez toute prise en cours à votre équipe soignante.`,
    },
  ],
  relatedArticleSlugs: [
    'interactions-complements-aliments-medicaments',
    'cholesterol-et-prevention-secondaire',
    'thrombus-vg-et-anticoagulants',
    'complements-energetiques-cardiaques',
    'tableau-preuves-nutrition-complements',
    'nutrition-et-complements-insuffisance-cardiaque',
    'fibres-alimentaires-et-axe-intestin-coeur',
  ],
  sources: [
    {
      label: 'Guo et al. (2012), Wu et al. (2005) et Memorial Sloan Kettering (MSKCC 2025)',
      detail: 'Inhibition humaine des CYP3A4, CYP2D6 et CYP2C9 (chiffres de résumés), élévation de la ciclosporine chez des transplantés rénaux et base d’interactions MSKCC.',
    },
    {
      label: 'Liu et al. (2025) et Kong et al. (2008)',
      detail: 'Méta-analyse de 12 essais randomisés (889 participants, LDL-c -0,19 g/L / -0,5 mmol/L, I² = 89 %, aucun événement clinique) et essai simvastatine + berbérine sans dosages sanguins.',
    },
    {
      label: 'Zeng et al. (2003) et registre ClinicalTrials.gov (vérification du 25 novembre 2026)',
      detail: 'Petit essai chinois monocentrique dans l’IC (156 patients, jamais répliqué, antérieur aux traitements modernes) et absence d’essai IC enregistré sur ClinicalTrials.gov.',
    },
    {
      label: 'Avis ANSES (2019) et Funk et al. (2018)',
      detail: 'Avis français déconseillant l’association berbérine-médicaments (synthèses et presse médicale) et variabilité de teneur réelle des compléments (33 à 100 % de l’étiquette).',
    },
  ],
  disclaimerType: 'medical',
};
