import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'vitamine-d-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/concepts/vitamin-d-in-heart-failure.md',
  titleFr: 'Vitamine D et insuffisance cardiaque',
  category: 'nutrition',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'vitamine-d',
    'cholécalciférol',
    'compléments',
    'micronutriments',
    'carence',
    'insuffisance-cardiaque',
    'sarcopénie',
  ],
  aliases: [
    'Vitamine D',
    'Cholécalciférol',
    'Vitamine D3',
    '25-hydroxyvitamine D',
    '25(OH)D',
    'ZymaD',
    'Uvedose',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "La vitamine D est l'un des compléments au sujet desquels les patients atteints d'insuffisance cardiaque posent le plus de questions. Un taux bas est très fréquent (56 % à 83 % dans l'ICFER) et s'accompagne souvent dans les études observationnelles d'une moins bonne forme physique et d'un pronostic moins favorable. Cela ne prouve toutefois pas que la carence en soit la cause : être malade, manger moins et sortir moins au soleil font baisser la vitamine D. Les essais randomisés n'ont pas démontré que les comprimés ou ampoules de vitamine D réduisent la mortalité ou les hospitalisations pour insuffisance cardiaque ; dans les essais regroupés chez des patients insuffisants cardiaques, la distance au test de marche de 6 minutes était même légèrement plus courte (-39 m, certitude élevée), et les grands essais en population générale (VITAL-HF, méta-analyse de 21 essais sur 83 291 personnes, DO-HEALTH) n'ont trouvé aucun bénéfice cardiovasculaire. Rechercher et corriger une carence avérée reste raisonnable pour les os et les muscles, mais prendre de la vitamine D « pour le cœur » n'est pas étayé et ne remplace jamais vos médicaments prescrits.",
  sections: [
    {
      headingFr: 'Pourquoi la vitamine D est souvent évoquée dans l’insuffisance cardiaque',
      bodyMarkdownFr: `- **Une carence très fréquente :** une revue de 2025 (Kampka et al.) rapporte un taux bas de vitamine D chez **56 % à 83 %** des patients atteints d'insuffisance cardiaque à FEVG réduite (ICFER), avec une fréquence encore plus élevée lorsque la cause est ischémique.
- **Origine principale :** environ **90 %** de la vitamine D de l'organisme est synthétisée par la peau sous l'effet du soleil ; peu d'aliments en contiennent des quantités importantes.
- **Associations observationnelles :** chez les personnes atteintes d'ICFER, des taux sanguins plus bas vont de pair avec une distance de marche plus courte et un pic de consommation d'oxygène (VO₂) plus faible, sans lien constant avec la classe NYHA. Plusieurs cohortes associent un taux bas à une mortalité cardiovasculaire plus élevée.
- **Mécanismes supposés :** la présence de récepteurs de la vitamine D dans les cellules cardiaques et des effets possibles sur le système rénine-angiotensine, l'inflammation ou la parathormone reposent surtout sur des études cellulaires et animales. Les auteurs de la revue de 2025 soulignent eux-mêmes qu'on ignore si un déficit en vitamine D favorise l'inflammation ou si c'est l'inflammation chronique qui abaisse la vitamine D.
- **Une enquête transversale ne vaut pas preuve :** une enquête américaine portant sur 9 825 adultes (**Hung 2023**, NHANES 2015–2018) a retrouvé chez les personnes ayant un taux très bas (inférieur à **30 nmol/L**, soit environ 12 ng/mL) une probabilité plus élevée de déclarer une maladie cardiovasculaire après ajustement (**OR 1,48** ; IC 95 % 1,10–2,00). Toutefois, les maladies cardiaques étaient autodéclarées et regroupées (insuffisance cardiaque, maladie coronaire, infarctus et AVC), l'insuffisance cardiaque n'était pas analysée séparément, et avant ajustement les personnes atteintes de maladie cardiaque étaient en fait *moins* souvent carencées. Une photographie instantanée ne peut pas établir ce qui est venu en premier, et la suggestion des auteurs de prescrire la vitamine D pour la santé cardiaque dépasse leurs données.`,
    },
    {
      headingFr: 'Ce que montrent les essais cliniques',
      bodyMarkdownFr: `### Chez les personnes atteintes d'insuffisance cardiaque

Les essais randomisés conduits dans l'insuffisance cardiaque sont de petite taille et hétérogènes (toutes FEVG confondues, sans analyse séparée pour l'ICFER ou la cause ischémique) :

| Critère | Résultat (Khan 2021, texte intégral) | Certitude |
|---|---|---|
| **Distance de marche de 6 minutes** | **39 m plus courte** sous vitamine D (DM -39,43 m ; IC 95 % -76,00 à -2,86 ; 4 essais, 352 patients) | Élevée |
| **FEVG** | +4,33 points (IC 95 % 0,33 à 8,33 ; 6 essais, 738 patients), mais très forte divergence entre essais (I² = 90 %) | Modérée |
| **NT-proBNP** | Aucun effet clair | Très faible ou non cotée |
| **Événements majeurs (décès, hospitalisations)** | Aucune donnée randomisée concluante dans l'IC | — |

- **Désaccord entre méta-analyses sur la FEVG :** une analyse de 10 essais (1 000 à 10 000 UI/j pendant 6 semaines à 12 mois) n'a trouvé aucun effet significatif sur le BNP ni sur la FEVG, et une revue de 4 essais n'a montré aucune différence sur la capacité d'effort, la qualité de vie ou la survie (**Chua 2025**). Une méta-analyse par doses n'a pas mis en évidence d'effet global sur la FEVG, la distance de marche ou le NT-proBNP contre placebo, même si une analyse dose-réponse a relié 4 000 UI/j à une FEVG plus élevée (**Kampka 2025**).
- **Petits essais chez des patients carencés :** par exemple, 60 000 UI une fois par semaine pendant 12 semaines chez des patients carencés en Inde du Nord (effectif non précisé dans la revue) ont abaissé le NT-proBNP et légèrement amélioré la FEVG et les dimensions ventriculaires ; une méta-analyse de 465 patients a rapporté une FEVG plus haute et un ventricule gauche moins dilaté, plus nettement en FEVG réduite (**Kampka 2025**). Il s'agit de mesures échographiques ou biologiques (critères intermédiaires), pas d'une preuve sur la survie ou les hospitalisations.
- **Essai EVITA :** chez 400 patients (4 000 UI/j pendant 3 ans), aucune amélioration de la survie n'aurait été observée (**mortalité HR 1,09** ; IC 95 % 0,69–1,71), avec davantage d'implantations d'assistance circulatoire mécanique dans le groupe vitamine D. Ces chiffres proviennent d'une synthèse secondaire et n'ont pas été vérifiés sur l'article original.
- **Revue parapluie de médecine intégrative (Chua 2025) :** elle aboutit aux mêmes conclusions (aucun bénéfice sur le BNP, la qualité de vie ou la survie, et distance de marche légèrement réduite avec certitude élevée), mais ses chiffres sur la vitamine D reprennent en grande partie l'analyse de Khan 2021 : il ne s'agit donc **pas d'une confirmation indépendante**.

### En population générale (hors insuffisance cardiaque)

- **VITAL-HF** (volet insuffisance cardiaque de l'essai de prévention VITAL) : aucune différence sur les hospitalisations pour insuffisance cardiaque sur 5 ans entre vitamine D et placebo (**Kampka 2025**).
- **Méta-analyse de 21 essais (83 291 personnes, Barbarawi) :** aucune baisse des événements cardiovasculaires majeurs, des décès cardiovasculaires ni de la mortalité toutes causes (présentée comme donnée d'IC dans la revue de 2025, alors qu'il s'agit d'une analyse de prévention générale).
- **An et al. (2022, 63 essais) :** la vitamine D n'a modifié ni la mortalité toutes causes (**RR 0,99** ; IC 95 % 0,95–1,04) ni les autres événements cardiovasculaires.
- **DO-HEALTH** (2 157 adultes âgés en bonne santé, 2 000 UI/j pendant 3 ans) : aucun effet sur le NT-proBNP, le cholestérol ni les événements cardiovasculaires majeurs (**Kampka 2025**).

Ces grands essais montrent que la vitamine D ne prévient pas les maladies cardiaques à risque habituel ; sans tester directement l'ICFER, ils vont dans le même sens que les petits essais d'insuffisance cardiaque.`,
    },
    {
      headingFr: 'Dépistage et correction d’une carence documentée',
      bodyMarkdownFr: `- **L'examen biologique** est le dosage sanguin de la 25-hydroxyvitamine D totale, notée **25(OH)D**.
- **Des seuils débattus :** l'Institute of Medicine américain (2010) considérait **20 ng/mL (50 nmol/L)** comme suffisant, tandis que l'Endocrine Society (2011) visait plus de **30 ng/mL (75 nmol/L)**. En **2024**, l'Endocrine Society a indiqué qu'il n'existe pas de seuil optimal établi pour prévenir les maladies et déconseille le **dépistage systématique** en l'absence de pathologie affectant directement le métabolisme de la vitamine D. L'insuffisance cardiaque n'y étant pas nommée comme telle, l'intérêt d'un dosage se discute au cas par cas avec votre médecin traitant ou votre cardiologue.
- **Traiter une carence avérée :** la revue de Kampka (2025) conclut que les patients réellement carencés doivent recevoir de la vitamine D, mais que supplémenter systématiquement toutes les personnes atteintes d'insuffisance cardiaque n'est pas justifié.
- **Positions des recommandations :**
  - **AHA/ACC/HFSA 2022 (États-Unis) :** les vitamines et compléments nutritionnels ne sont **pas recommandés** dans l'ICFER **sauf pour corriger une carence spécifique** (**Classe 3 : Absence de bénéfice, niveau B-R**).
  - **ESC 2026 (Europe) :** la recherche dans le texte intégral ne retrouve aucune recommandation portant sur la vitamine D.
  - **Déclaration AHA 2022 (médecines complémentaires) :** classe la vitamine D parmi les compléments sans bénéfice cardiaque démontré.
- **Muscle et fragilité :** environ un tiers des personnes atteintes d'insuffisance cardiaque présentent une fonte musculaire (**sarcopénie**). La vitamine D ne fabrique pas de muscle à elle seule, mais peut contribuer à la force musculaire, et son association à un apport suffisant en protéines peut soutenir l'autonomie quotidienne (**Kampka 2025**). C'est une raison de corriger une carence documentée, pas une preuve d'effet direct sur le cœur.`,
    },
    {
      headingFr: 'Doses, sécurité et interactions médicamenteuses',
      bodyMarkdownFr: `- **Des doses de recherche très variables :** les essais ont utilisé de 1 000 à 10 000 UI/j, ou 50 000 à 60 000 UI par semaine pendant 12 semaines. Ce sont des protocoles d'étude et **non des posologies recommandées**. Si une carence est confirmée, seul votre médecin détermine la forme et la dose adaptées (en France, par exemple cholécalciférol — *ZymaD*, *Uvedose*).
- **Plus n'est pas mieux :** des taux sanguins supérieurs à **50 ng/mL (environ 125 nmol/L)** ont été associés à une mortalité cardiovasculaire plus élevée dans une analyse citée par Kampka (2025), suggérant une relation en U. L'enquête NHANES (Hung 2023) n'a pas retrouvé de surrisque au-dessus de 125 nmol/L, mais aucune des deux études n'est un essai randomisé.
- **Interactions :** la déclaration AHA 2022 signale des précautions possibles avec la **digoxine**, les **inhibiteurs calciques** et les **diurétiques** (sans mécanisme détaillé dans le communiqué analysé). Consultez également la fiche sur les interactions entre compléments, aliments et médicaments.
- **Calcium + vitamine D :** il s'agit d'une association distincte, liée à un signal de surrisque d'AVC (**RR 1,17** dans An 2022 / Khan 2019). Ne la débutez pas en automédication ; si elle vous est prescrite pour les os, n'interrompez pas votre traitement sans avis médical.
- **Dérivés actifs de la vitamine D :** le calcitriol et les analogues actifs (prescrits notamment dans l'insuffisance rénale chronique) ont un profil d'efficacité et de risque différent de la vitamine D nutritionnelle ordinaire.
- **Limites des sources compilées :** les seuils maximaux de sécurité détaillés, les signes d'excès de calcium sanguin (hypercalcémie) et la fréquence optimale de contrôle biologique ne sont pas couverts de manière approfondie par les sources compilées ici ; posez la question à votre médecin ou à votre pharmacien.`,
    },
    {
      headingFr: 'Autres vitamines : ce qu’ajoutent les études récentes',
      bodyMarkdownFr: `- **Vitamines du groupe B :** une étude chez la souris de 2025 (**Boitard 2025**) a observé qu'un mélange de nicotinamide riboside, de folates et de vitamine B12 dans l'alimentation ralentissait l'affaiblissement cardiaque chez des souris mâles soumises à une surcharge de pression (modèle non ischémique). Il ne s'agit **pas d'une preuve chez l'être humain** : aucune donnée clinique n'existe et les auteurs précisent que cette combinaison n'a jamais été testée dans l'ICFER.
- **Alimentation « antioxydante » :** une enquête transversale américaine de 2025 portant sur 7 022 adultes hypertendus (**Qiu 2025**, NHANES) a associé un score plus favorable de « balance oxydative » (alimentation et mode de vie) à une moindre fréquence d'insuffisance cardiaque autodéclarée (quartile supérieur contre inférieur : **OR 0,56**). Le score était largement tiré par la consommation d'alcool et le poids, sans ajustement sur les médicaments et sans étude de compléments : cela ne justifie en rien les compléments antioxydants, qui ont échoué dans les essais randomisés (**An 2022**).`,
    },
    {
      headingFr: 'À retenir en pratique',
      bodyMarkdownFr: `- La vitamine D n'est **pas un traitement de l'insuffisance cardiaque** : aucun essai randomisé ne montre de baisse des décès ou des hospitalisations, et les essais regroupés dans l'IC ont montré une distance de marche légèrement raccourcie.
- **Corriger une carence avérée au bilan sanguin est raisonnable** (notamment pour les os et les muscles) et s'inscrit dans l'exception prévue par les recommandations américaines.
- Une supplémentation systématique à forte dose « pour le cœur » n'est pas étayée et des taux très élevés pourraient ne pas être sans risque.
- Informez systématiquement votre cardiologue, votre médecin traitant et votre pharmacien de tout produit contenant de la vitamine D, en particulier si vous prenez de la digoxine ou des diurétiques.`,
    },
  ],
  relatedArticleSlugs: [
    'nutrition-et-complements-insuffisance-cardiaque',
    'coenzyme-q10',
    'omega-3-huile-de-poisson',
    'tableau-preuves-nutrition-complements',
    'interactions-complements-aliments-medicaments',
    'poids-obesite-et-denutrition',
  ],
  sources: [
    {
      label: 'Kampka et al. (2025) — revue sur la vitamine D dans l’insuffisance cardiaque',
      detail: 'Revue narrative (non systématique) : prévalence des carences dans l’ICFER, débat sur les seuils (IOM, Endocrine Society 2024), VITAL-HF, Barbarawi, DO-HEALTH, petits essais IC et sarcopénie.',
    },
    {
      label: 'Chua et al. (2025) — revue parapluie de médecine intégrative dans l’IC chronique',
      detail: 'Résultats sur la vitamine D issus de trois revues (reprenant largement Khan 2021) et fourchettes de doses des essais.',
    },
    {
      label: 'Khan et al. (2021, texte intégral) et An et al. (2022, texte intégral)',
      detail: 'Résultats regroupés dans l’IC (marche de 6 minutes, FEVG, certitudes), EVITA rapporté, 63 essais vitamine D (RR 0,99) et signal AVC calcium + vitamine D (Khan 2019).',
    },
    {
      label: 'Hung et al. (2023, NHANES), Boitard et al. (2025) et Qiu et al. (2025, NHANES)',
      detail: 'Enquête transversale vitamine D et MCV autodéclarées ; étude animale sur vitamines B/nicotinamide riboside ; enquête transversale sur le score de balance oxydative.',
    },
    {
      label: 'Recommandations AHA/ACC/HFSA 2022, déclaration AHA 2022 (CAM) et ESC 2026',
      detail: 'Compléments non recommandés hors carence (Classe 3, B-R), précautions digoxine/inhibiteurs calciques/diurétiques, absence de mention dans le texte principal ESC 2026.',
    },
  ],
  disclaimerType: 'medical',
};
