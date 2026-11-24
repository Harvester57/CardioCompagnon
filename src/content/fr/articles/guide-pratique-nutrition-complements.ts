import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'guide-pratique-nutrition-complements',
  sourceWikiPath: 'output/playbook-nutritional-interventions-and-supplements-2026-11-24.md',
  titleFr: 'Guide pratique : interventions nutritionnelles et compléments',
  category: 'nutrition',
  asOf: '2026-11-24',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'guide-pratique',
    'nutrition',
    'compléments',
    'fer-iv',
    'sel',
    'liquides',
    'méditerranéen',
    'interactions',
    'questions',
  ],
  aliases: [
    'Playbook nutrition',
    'Plan pratique alimentation',
    'Guide nutrition insuffisance cardiaque',
    'Exemple semaine méditerranéenne',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Dans la cardiomyopathie ischémique à FEVG réduite (autour de 35 %) avec ventricule gauche dilaté, l'alimentation et les compléments jouent un rôle d'accompagnement. Les quatre piliers médicamenteux assurent l'essentiel de la protection (environ 60 % de réduction modélisée des décès cardiovasculaires ou hospitalisations pour insuffisance cardiaque par rapport à l'ancienne bithérapie). Sur le plan nutritionnel, un seul traitement de type supplémentation dispose de preuves solides : le fer intraveineux en cas de carence prouvée par prise de sang. Quelques habitudes alimentaires simples méritent d'être adoptées, deux compléments relèvent du « possible, à discuter d'abord » (oméga-3 et CoQ10), et plusieurs produits courants sont à éviter avec vos médicaments. Chaque piste de ce guide est formulée pour être discutée avec votre équipe de cardiologie.",
  sections: [
    {
      headingFr: '1. Quels compléments disposent de preuves dans l’ICFER ?',
      bodyMarkdownFr: `| Complément | Niveau de preuve principal | Conclusion pratique |
|---|---|---|
| **Fer intraveineux** (si ferritine / CST bas) | 6 essais randomisés, 7 175 patients : hospitalisations pour IC + décès CV réduits d'environ 19 % sur le suivi (28 % la 1re année) ; pas d'effet sur la survie globale ; 78 % de causes ischémiques dans FAIR-HF2 | **À aborder avec l'équipe** : ESC 2026 Classe I pour les symptômes, Classe IIa pour réduire les hospitalisations |
| **Fer par voie orale (comprimés)** | IRONOUT-HF : aucun bénéfice | Non étayé |
| **Oméga-3, 1 g/j qualité pharmaceutique** | GISSI-HF : mortalité 27 % contre 29 %, environ 56 patients traités pendant 4 ans pour éviter 1 décès ; avant les traitements modernes | Possible, priorité faible |
| **Coenzyme Q10 (CoQ10)** | Q-SYMBIO (420 patients) : événements majeurs divisés par deux ; jamais répliqué ; avant les traitements modernes | Possible, priorité faible |
| **Thiamine, vitamine D, L-carnitine, multivitamines** | Signaux limités à la FEVG (critère intermédiaire) ou absence de bénéfice cardiovasculaire | Non étayé, sauf pour corriger une carence démontrée |
| **Vitamine E, bêta-carotène, calcium + vitamine D** | Signaux d'effets délétères | À éviter sauf prescription médicale |`,
    },
    {
      headingFr: '2. Ce que disent les recommandations récentes',
      bodyMarkdownFr: `- **ESC 2026 (Europe, remplace 2021/2023) :**
  - doser la ferritine et le CST (coefficient de saturation de la transferrine) au bilan initial ;
  - proposer du fer intraveineux en cas d'ICFER symptomatique avec carence martiale ;
  - conseils d'hygiène de vie : Classe I, niveau C (accord d'experts) ;
  - éducation thérapeutique et autogestion : Classe I, niveau A ;
  - aucun objectif de sel en grammes dans le texte principal (réduire le sel est jugé bénéfique ; le tableau détaillé d'autosoins figure en supplément en ligne non consulté) ;
  - antalgiques AINS et inhibiteurs de la COX-2 non recommandés (Classe III) ;
  - aucune preuve ne soutient la restriction hydrique systématique dans l'insuffisance cardiaque chronique stable.
- **Consensus HFA-ESC 2024 :**
  - consommation normale de sel, avec jusqu'à environ 5 g par jour acceptables ; éviter les restrictions très strictes ;
  - apports hydriques d'environ 1,5 à 2,5 L par jour, guidés par la soif.
- **Déclaration AHA 2022 (médecines complémentaires) :**
  - les oméga-3 disposent des données les plus fournies, mais il faut éviter des doses de 4 g/j ou plus ;
  - la CoQ10 n'a pas d'efficacité démontrée ;
  - signaler chaque complément à toute l'équipe soignante.
- **Recommandations américaines AHA/ACC/HFSA 2022 :**
  - fer IV raisonnable en cas d'ICFER avec carence martiale (Classe 2a) ;
  - éviter les excès de sodium est raisonnable (Classe 2a), sans chiffre en grammes ;
  - restriction hydrique abordée uniquement dans l'insuffisance cardiaque avancée avec hyponatrémie, avec un bénéfice incertain (Classe 2b) ;
  - oméga-3 pouvant être raisonnables en ajout (Classe 2b) ;
  - vitamines et compléments de routine non recommandés hors carence spécifique (Classe 3 : Absence de bénéfice).
- **NICE NG106 (Royaume-Uni) et repères BHF :**
  - ne pas restreindre systématiquement le sel ni les liquides ; réduire les apports s'ils sont excessifs (NICE 1.9.10 ; BHF indique moins de 6 g de sel/j) ;
  - éviter les substituts de sel contenant du potassium (NICE 1.9.11) ;
  - surveiller l'état nutritionnel et le statut martial.`,
    },
    {
      headingFr: '3. Quelles habitudes alimentaires aident vraiment ?',
      bodyMarkdownFr: `- **Alimentation de type méditerranéen.** Chez les patients atteints de maladie coronaire, elle a réduit d'environ un quart les événements cardiovasculaires majeurs sur 7 ans (CORDIOPREV). C'est une base très cohérente pour la composante coronaire de la cardiomyopathie ischémique. L'essai ayant exclu les FEVG ≤ 35 %, elle n'est pas prouvée comme traitement direct de l'insuffisance cardiaque. Dans les cohortes observationnelles de patients insuffisants cardiaques, les modèles méditerranéen et DASH sont associés à une mortalité moindre, sans preuve causale.
- **Repas pauvres en sel livrés après hospitalisation.** Deux petits essais à FEVG mixtes (GOURMET-HF, 66 patients ; FOOD-HF, 150 patients, FEVG médiane 35 %) ont amélioré la qualité de vie sans réduire clairement les réhospitalisations.
- **Aliments du quotidien (non étudiés spécifiquement dans l'ICFER) :**
  - **Café** : environ 1 tasse par jour a été associée à moins de récidives de fibrillation atriale après cardioversion (DECAF), mais à davantage d'extrasystoles ventriculaires chez des adultes sains (CRAVE) ;
  - **Aliments ultra-transformés** : associés à une hausse de 50 % de la mortalité cardiovasculaire dans des données observationnelles (certitude très faible) ;
  - **Fruits à coque (noix, amandes non salées)** : baisse des événements cardiovasculaires majeurs dans PREDIMED (prévention primaire) ;
  - **Produits enrichis en stérols végétaux** (environ 2 g/j) : baisse du LDL d'environ 7 à 10 %, sans essai sur les événements cliniques.
- **Sel modéré.** La restriction stricte (< 1 500 mg de sodium/j) n'a pas réduit décès ni hospitalisations (SODIUM-HF), mais limiter les excès aide la tension artérielle.
- **Poids.** Le « paradoxe de l'obésité » est en grande partie un artefact statistique. La perte de poids volontaire n'a pas fait l'objet d'un essai randomisé dans l'ICFER. En revanche, la perte de poids involontaire est un signal d'alerte : un soutien nutritionnel ciblé chez des patients hospitalisés à risque a réduit la mortalité à 30 jours de 14,8 % à 8,4 % (EFFORT).`,
    },
    {
      headingFr: '4. Ce qui a changé récemment (2022-2026)',
      bodyMarkdownFr: `- **Apports hydriques.** L'essai FRESH-UP (2025) a montré qu'une limite fixe de 1,5 L/j n'apporte aucun bénéfice et augmente la soif chez les patients ambulatoires stables.
- **Sel.** Les recommandations sont passées d'un régime « très pauvre en sel » à la règle « éviter les excès, éviter les extrêmes ».
- **Fer intraveineux.** FAIR-HF2 et la méta-analyse 2025 confirment la baisse des hospitalisations, sans gain démontré sur la survie globale. Les recommandations ESC 2026 mentionnent qu'une définition alternative de la carence martiale (CST < 20 %) a été proposée.
- **Oméga-3 et fibrillation atriale.** Une méta-analyse de 2026 financée par l'industrie conteste la hausse du risque de FA aux faibles doses observée dans Gencer (2021), tandis que le risque reste confirmé aux fortes doses.`,
    },
    {
      headingFr: '5. Produits à risque ou incompatibles avec les médicaments cardiaques',
      bodyMarkdownFr: `Ce tableau concerne les **produits pris de votre propre initiative** et ne doit jamais conduire à arrêter un traitement prescrit sans avis médical.

| Produit | Interagit avec | Pourquoi |
|---|---|---|
| Substituts de sel au potassium, comprimés de potassium | ARNI (sacubitril/valsartan — *Entresto*), IEC, ARA2, ARM | Risque d'hyperkaliémie dangereuse ; mentionné sur les notices |
| AINS en vente libre (ibuprofène, naproxène, diclofénac, kétoprofène) | ARNI, diurétiques, insuffisance cardiaque elle-même | Atteinte rénale aiguë, rétention d'eau et de sel |
| Régimes cétogènes ou très hypocaloriques, jeûnes prolongés | iSGLT2 (avertissement issu de la notice de la dapagliflozine — *Forxiga*) | Facteurs déclenchants d'acidocétose (rares hors diabète) |
| Huile de poisson à forte dose (> 1 à 1,5 g/j, surtout ≥ 4 g/j) | Rythme cardiaque (FA) | Risque de fibrillation atriale dépendant de la dose |
| Vitamine E, bêta-carotène, calcium + vitamine D (automédication) | Risque propre | Signaux d'effets délétères |
| Aubépine, muguet, actée bleue | Médicaments de l'IC, digoxine | Aggravation possible de l'IC ; toxicité cardiaque |
| Réglisse véritable (bonbons, tisanes, plantes) | Diurétiques, digoxine, antihypertenseurs, IC elle-même | Rétention d'eau et de sel, hypokaliémie ; déconseillée par l'EMA |
| Millepertuis | Ivabradine, apixaban (notices : à éviter) ; digoxine, warfarine, simvastatine ; antidépresseurs | Diminue les taux de médicaments ; syndrome sérotoninergique |
| Levure de riz rouge | Statine prescrite | Contient de la lovastatine à dose inconnue ; cumul des effets indésirables ; mise en garde UE |
| Ginseng (asiatique, américain, sibérien) | Warfarine ; dosages de digoxine | Diminution de l'effet de la warfarine dans un essai, neutre dans d'autres ; interférence avec certains tests de digoxine |
| Danshen (sauge rouge) | Warfarine et autres anticoagulants ; dosages de digoxine | Cas de surdosage hémorragique grave ; induction enzymatique en prise régulière |
| Extrait concentré de thé vert (gélules EGCG, « brûle-graisses ») | Lisinopril, nadolol, atorvastatine, rosuvastatine | Baisse des taux sanguins dans de petites études ; risque rare d'hépatite grave ; plafond UE < 800 mg EGCG/j |
| Jus de pamplemousse | Simvastatine, atorvastatine (absent de la notice rosuvastatine) ; ivabradine | Augmente les concentrations sanguines des médicaments |
| Ginkgo, compléments d'ail, vitamine E à forte dose | Aspirine, clopidogrel, anticoagulants | Risque hémorragique accru possible ; monographies UE : arrêt du ginkgo 3 à 4 jours et de l'ail 7 jours avant chirurgie |
| Huile de poisson (oméga-3) | Aspirine, clopidogrel, warfarine | Peu de saignements en plus globalement, léger excès à 4 g/j ; surveillance mentionnée sur les notices |`,
    },
    {
      headingFr: '6. Huit étapes concrètes à discuter avec votre équipe',
      bodyMarkdownFr: `1. **« Ma ferritine et mon CST ont-ils été dosés, et du fer intraveineux est-il indiqué s'ils sont bas ? »** C'est la question nutritionnelle à plus forte valeur clinique.
2. **« Quel objectif de sel me conseillez-vous ? Ai-je besoin d'une limite fixe de liquides tant que je suis stable ? »** Attendez-vous à un conseil de modération pour le sel ; les boissons restent souvent guidées par la soif sauf situation particulière.
3. **« Puis-je utiliser un substitut de sel ? »** Demandez toujours avant d'acheter : la majorité contiennent du potassium.
4. **« Les oméga-3 ou la CoQ10 ont-ils un intérêt avec mon traitement actuel ? »** Apportez la boîte et le dosage exacts, ainsi que toutes vos vitamines et tisanes.
5. **« Quels médicaments contre la douleur sont sûrs pour moi ? »** (En pratique, éviter les AINS sans avis médical.)
6. **« Si je souhaite perdre du poids, comment le faire sans risque avec mes médicaments ? »** Évitez tout régime cétogène ou draconien sans validation préalable.
7. **« Puis-je consulter un(e) diététicien(ne) et bénéficier d'une réadaptation cardiaque (SMR cardiovasculaire) ? »**
8. **Signaler les variations de poids dans les deux sens :** une prise de poids rapide en quelques jours évoque une rétention d'eau ; une perte de poids lente et involontaire ou une perte d'appétit peut traduire une fonte musculaire.`,
    },
    {
      headingFr: '7. Exemple concret : une semaine d’alimentation méditerranéenne en pratique',
      bodyMarkdownFr: `| Composante | À quoi cela ressemble au quotidien | Pourquoi |
|---|---|---|
| **Base** | Légumes, légumineuses (lentilles, pois chiches, haricots) et céréales complètes chaque jour | Schéma CORDIOPREV / récit ESC 2026 |
| **Matières grasses** | Huile d'olive vierge extra et fruits à coque non salés plutôt que beurre et graisses transformées | Bras intervention CORDIOPREV ; bras noix PREDIMED |
| **Protéines** | Poisson régulièrement, légumineuses, moins de charcuteries et viandes transformées | Modèle méditerranéen ; oméga-3 alimentaires plutôt que gélules |
| **Sel** | Cuisiner maison, lire les étiquettes, relever avec herbes, épices et citron ; pas de substitut de sel au potassium | Consensus HFA 2024 ; notice sacubitril/valsartan |
| **Boissons** | Boire selon votre soif sauf limite prescrite ; compter soupes et potages si une limite vous a été fixée | FRESH-UP ; repères d'éducation thérapeutique |
| **Produits transformés** | Réduire plats préparés, charcuteries et biscuits apéritifs industriels | Lien observationnel avec les événements CV ; source majeure de sel caché |
| **Café** | Consommation modérée apparemment neutre ; signaler d'éventuelles palpitations à l'équipe | DECAF, CRAVE (hors population ICFER) |
| **Alcool** | Faible ; éviter toute consommation importante, toxique pour le muscle cardiaque | ESC 2026 |

Les portions, l'apport calorique et les aliments riches en potassium doivent être adaptés individuellement avec votre médecin ou un(e) diététicien(ne), en particulier si vous prenez des médicaments qui augmentent la kaliémie.`,
    },
    {
      headingFr: 'Questions scientifiques encore ouvertes',
      bodyMarkdownFr: `Plusieurs questions restent activement débattues dans la littérature à la date du 24 novembre 2026 :

1. Chez des patients atteints d'ICFER ischémique carencés en fer et recevant déjà les quatre piliers (dont un iSGLT2), le fer intraveineux conserve-t-il la même ampleur de bénéfice sur les hospitalisations ? (Dans FAIR-HF2, seuls 24 % prenaient un iSGLT2.)
2. La coenzyme Q10 réduit-elle la mortalité de l'ICFER sous traitement moderne, au-delà du seul essai Q-SYMBIO ?
3. Les faibles doses d'oméga-3 (≤ 1 g/j) augmentent-elles réellement le risque de fibrillation atriale chez les patients coronariens (désaccord entre Gencer 2021 et l'analyse de 2026) ?`,
    },
  ],
  relatedArticleSlugs: [
    'nutrition-et-complements-insuffisance-cardiaque',
    'tableau-preuves-nutrition-complements',
    'sel-et-liquides-insuffisance-cardiaque',
    'alimentation-cardioprotectrice',
    'poids-obesite-et-denutrition',
    'omega-3-huile-de-poisson',
    'coenzyme-q10',
    'interactions-complements-aliments-medicaments',
    'carence-martiale-et-fer-iv',
    'questions-equipe-cardiologie',
    'readaptation-cardiaque-et-activite-physique',
  ],
  sources: [
    {
      label: 'Synthèse nutritionnelle de référence (24 novembre 2026)',
      detail: 'Compilation structurée des essais FAIR-HF2, IRONOUT-HF, SODIUM-HF, FRESH-UP, CORDIOPREV, EFFORT, GISSI-HF et Q-SYMBIO.',
    },
    {
      label: 'Recommandations ESC 2026, HFA-ESC 2024, AHA/ACC/HFSA 2022 et NICE NG106',
      detail: 'Comparaison des positions européennes, américaines et britanniques sur le fer IV, le sel, les liquides, les AINS et les compléments.',
    },
    {
      label: 'Notices réglementaires et évaluations EFSA / EMA',
      detail: 'Précautions relatives aux substituts de sel potassiques, aux régimes cétogènes sous iSGLT2 et aux interactions plantes-médicaments.',
    },
  ],
  disclaimerType: 'medical',
};
