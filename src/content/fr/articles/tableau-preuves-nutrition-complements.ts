import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'tableau-preuves-nutrition-complements',
  sourceWikiPath: 'wiki/references/nutrition-and-supplement-evidence-table.md',
  titleFr: 'Tableau des niveaux de preuve : nutrition et compléments',
  category: 'nutrition',
  asOf: '2026-11-24',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'tableau-preuves',
    'compléments',
    'nutrition',
    'recommandations',
    'esc-2026',
    'aha',
    'nice',
    'fer-iv',
    'oméga-3',
    'coenzyme-q10',
  ],
  aliases: [
    'Tableau des compléments',
    'Preuves des compléments alimentaires',
    'Comparaison recommandations nutrition',
    'Niveaux de preuve nutrition',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Ce tableau de référence classe chaque intervention alimentaire et chaque complément alimentaire selon la solidité des preuves dans l'insuffisance cardiaque à FEVG réduite (ICFER), avec l'essai de référence, les chiffres clés, l'applicabilité à la cardiomyopathie ischémique (FEVG autour de 35 %) et le verdict pratique. Il met ensuite côte à côte les positions des recommandations ESC 2026, du consensus HFA-ESC 2024, des sociétés américaines (AHA/ACC/HFSA 2022) et britanniques (NICE NG106 et BHF), et recense de manière transparente les zones encore incomplètes de la littérature.",
  sections: [
    {
      headingFr: "Comment lire la colonne « Applicabilité »",
      bodyMarkdownFr: `Ce document accompagne l'article de synthèse sur la nutrition et les compléments dans l'insuffisance cardiaque. La colonne **Applicabilité** indique dans quelle mesure les preuves correspondent directement à une **cardiomyopathie ischémique avec FEVG réduite autour de 35 %** :

- **Directe / surtout directe** : l'essai a inclus majoritairement des patients atteints d'ICFER d'origine ischémique.
- **Partiellement directe** : ICFER ou FEVG majoritairement réduite, mais causes mixtes.
- **Indirecte** : FEVG non précisée, toutes FEVG confondues ou autres populations cardiovasculaires.`,
    },
    {
      headingFr: 'Compléments alimentaires et plantes',
      bodyMarkdownFr: `| Élément | Preuve principale | Chiffre clé | Certitude | Applicabilité | Verdict |
|---|---|---|---|---|---|
| **Fer intraveineux (si carence)** | 6 essais randomisés, 7 175 patients ; FAIR-HF2 | Hospitalisations IC + décès CV : RR 0,81 ; pas d'effet sur la survie globale | Élevée | Surtout directe (78 % ischémique dans FAIR-HF2 ; pas de différence selon la cause) | **À aborder avec l'équipe** |
| **Fer oral** | IRONOUT-HF, 225 patients | Aucun changement du pic de VO₂ ni des symptômes | Modérée | Partiellement directe (ICFER, causes mixtes) | Non étayé |
| **Oméga-3, 1 g/j** | GISSI-HF, 6 975 patients | Décès 27 % contre 29 %, HR ajusté 0,91 | Modérée (avant traitements modernes) | Partiellement directe (90 % FEVG ≤ 40 %, causes mixtes) | Possible, priorité faible |
| **Oméga-3, forte dose** | Gencer 2021, 81 210 patients | Risque de FA : HR 1,49 au-dessus de 1 g/j | Modérée | Indirecte | **À éviter ≥ 4 g/j (AHA)** |
| **Coenzyme Q10** | Q-SYMBIO, 420 patients ; méta-analyses | MACE HR 0,50 ; mortalité groupée RR environ 0,69 | Faible | Indirecte (FEVG non rapportée ; avant traitements modernes) | Possible, priorité faible |
| **Vitamine E (automédication)** | Cartographie Khan 2021 | Hospitalisation pour IC : RR 1,21 | Modérée | Partiellement directe (populations IC) | **À éviter** |
| **Bêta-carotène** | An 2022 ; USPSTF | Décès CV : RR 1,12 ; grade D | Modérée | Indirecte | **À éviter** |
| **Calcium + vitamine D** | Khan 2019 | AVC : RR 1,17 | Modérée | Indirecte | **À éviter sauf prescription** |
| **Vitamine D seule** | An 2022 ; AHA 2022 ; EVITA (rapporté) | Aucun effet CV ; EVITA décès HR 1,09 | Modérée | Partiellement directe | Non étayé (corriger une carence uniquement) |
| **Thiamine (vitamine B1)** | Khan 2021 ; méta-analyse 2024 (rapportée) | Gain de FEVG non confirmé (+1,65 %, non significatif) | Faible | Directe | Uniquement si carence avérée |
| **L-carnitine** | Khan 2021 | Critère intermédiaire (FEVG) uniquement | Faible | Directe | Non étayé |
| **Multivitamines, antioxydants, vitamine C, sélénium** | An 2022 ; Khan 2019 ; USPSTF | Aucun bénéfice CV ; grade I | Modérée | Indirecte | Non étayé |
| **Aubépine** | AHA 2022 | Résultats contradictoires ; peut aggraver l'IC | Faible | Directe | Non étayé |
| **Muguet, actée bleue** | AHA 2022 | Toxiques | Faible (experts) | Directe | **À éviter** |
| **Réglisse (glycyrrhizine)** | Monographie EMA 2026 ; revue Deutch 2019 | Rétention hydrosodée, hypokaliémie, HTA ; cas d'IC aiguë ; ne pas associer aux diurétiques ni à la digoxine | Modérée (mécanisme, régulateur, cas) | Directe | **À éviter** |
| **Millepertuis** | Notices US ivabradine et apixaban ; NCCIH ; Nicolussi 2020 | Diminue les concentrations de plusieurs médicaments cardiaques ; effets sérotoninergiques avec certains antidépresseurs | Élevée pour les molécules citées | Directe | **À éviter sans accord médical** |
| **Levure de riz rouge** | EFSA 2018/2025 ; Règlement UE 2022/860 ; NCCIH | Lovastatine non déclarée ; effets graves dès 3 mg/j ; cumul avec une statine prescrite ; contamination à la citrinine | Modérée | Indirecte | **À éviter avec une statine prescrite** |
| **Ginkgo (saignement)** | Monographie EMA ; Kellermann et Kloft 2011 ; Stoddard 2015 | Pas d'effet biologique dans 18 essais ; cas graves ; plus de saignements sous warfarine en observationnel (HR 1,38) | Faible à modérée (discordant) | Indirecte | **À éviter avec antithrombotiques sans accord** ; UE : arrêt 3–4 j avant chirurgie |
| **Compléments d'ail (saignement)** | Monographie EMA ; Macan 2006 | Effet antiagrégant ; petit essai sous warfarine rassurant | Faible à modérée | Indirecte | Prudence avec antithrombotiques ; UE : éviter 7 j avant chirurgie |
| **Huile de poisson (saignement)** | Javaid 2024 ; notice icosapent éthyl | Pas de hausse globale ; +0,6 pour 100 à 4 g/j d'EPA ; notice : surveiller avec aspirine, clopidogrel ou warfarine | Modérée (méta-analyse financée par l'industrie) | Partiellement directe (79 % sous antiagrégant dans REDUCE-IT) | À signaler à l'équipe, surtout à forte dose |
| **Jus de pamplemousse** | Notices simvastatine et atorvastatine ; FDA | Augmente les taux de simvastatine et d'atorvastatine ; pas d'avertissement sur la notice de la rosuvastatine | Élevée (notices) | Dépend de la statine | Vérifier selon la statine prescrite |
| **Ginseng (asiatique, américain, sibérien)** | Essai Yuan 2004 ; Lee 2010 ; études Dasgupta ; NCCIH ; EMA | Ginseng américain réduit l'effet de la warfarine (pic INR -0,19) ; ginseng coréen neutre ; fausse d'anciens dosages de digoxine ; teneur variable d'un facteur 36 | Faible (petites études discordantes) | Indirecte (volontaires sains, warfarine) | Non étayé ; informer l'équipe, surtout sous warfarine ou digoxine |
| **Danshen (sauge rouge)** | Revue Chan 2001 ; Izzat 1998 ; Qiu 2010-2014 | Surdosage majeur et saignements sous warfarine (3 cas) ; fausse d'anciens dosages de digoxine ; induit CYP3A4 et P-gp | Faible (cas et petites études PK) | Indirecte | **À éviter avec les anticoagulants** ; non étayé |
| **Extrait concentré de thé vert (EGCG)** | Misaka 2014/2021 ; Kim 2017 ; EFSA 2018 ; UE 2022/2340 ; USP 2020 | Exposition au lisinopril -67 %, au nadolol -85 % (thé infusé), aux statines environ -20 % ; hépatites graves rares ; plafond UE < 800 mg EGCG/j | Modérée pour le foie ; faible pour les interactions | Indirecte (volontaires sains) | **À éviter en complément** ; le thé ordinaire est différent |
| **Qiliqiangxin (formule chinoise à 11 plantes incluant ginseng et danshen)** | QUEST, 3 110 patients (Nature Medicine 2024) | Décès CV ou hospitalisation IC : 25,0 % contre 30,0 %, HR 0,78 ; mortalité totale non significative | Modérée (un seul essai financé par le fabricant) | Partiellement directe (ICFER, environ 74 % ischémique ; Chine ; < 10 % sous iSGLT2) | Formule sur prescription, pas un complément ; absente des recommandations ESC, US et NICE |`,
    },
    {
      headingFr: 'Alimentation et mode de vie',
      bodyMarkdownFr: `| Élément | Preuve principale | Chiffre clé | Applicabilité | Verdict |
|---|---|---|---|---|
| **Sodium strict (< 1 500 mg/j)** | SODIUM-HF, 806 patients | Critère composite HR 0,89 (non significatif) ; qualité de vie +3,4 points | Partiellement directe (FEVG médiane 36 %, FEVG et causes mixtes) | Non prouvé ; éviter les extrêmes |
| **Sel modéré (≤ environ 5 g/j)** | HFA-ESC 2024 ; données sel et tension | Décès CV RR 0,67 dans l'hypertension (populations générales) | Indirecte pour l'IC | **À aborder avec l'équipe** |
| **Limite hydrique fixe de 1,5 L/j** | FRESH-UP, 504 patients | KCCQ +2,2 en faveur de l'apport libre (non significatif) ; plus de soif avec restriction | Partiellement directe (environ moitié ICFER, 44 % ischémique ; patients stables) | Uniquement si fixée par l'équipe |
| **Substituts de sel au potassium** | Cochrane 2022 ; notice sacubitril/valsartan | PAS -4,8 mmHg en population générale ; patients à risque exclus ; sécurité kaliémie fondée sur 12 contre 10 événements | Non testé dans l'IC (aucun essai IC) | **À éviter avec IEC/ARA2/ARNI ou ARM** |
| **Alimentation méditerranéenne** | CORDIOPREV, 1 002 patients | Événements CV majeurs environ 25 % plus bas | Indirecte (FEVG ≤ 35 % exclue) | **À aborder avec l'équipe** |
| **Méditerranéen / DASH après diagnostic d'IC** | Cohorte WHI (3 215 femmes avec IC) ; méta-analyse Arayici 2025 | DASH : décès HR 0,84 (WHI) ; méditerranéen : décès OR 0,88 (3 études) | Indirecte (observationnel ; FEVG inconnue) | Favorable, mais ne vaut pas preuve |
| **Repas pauvres en sel livrés après hospitalisation** | GOURMET-HF (66 patients, DASH 4 sem.) ; FOOD-HF (150 patients, 90 j) | GOURMET-HF : QoL ns, réadmissions 30 j 3 contre 11 (p = 0,055). FOOD-HF : événements IC 23 % contre 18 % (ns), QoL améliorée | Partiellement directe (FEVG moyenne 39 % / médiane 35 % ; mixte) | Non prouvé sur les réhospitalisations ; aide possible sur la qualité de vie |
| **Café (modéré)** | DECAF (200 patients FA) ; CRAVE (100 adultes sains) ; cohortes Stevens 2021 | Récidive de FA 47 % contre 64 % avec environ 1 tasse/j (DECAF) ; plus d'extrasystoles ventriculaires chez les adultes sains (CRAVE) ; moins de nouvelles IC en cohorte | Indirecte (aucune donnée ICFER) | Neutre ; non étudié dans l'ICFER |
| **Aliments ultra-transformés** | Revue parapluie BMJ Lane 2024 (observationnel) | Décès CV RR 1,50, certitude GRADE très faible | Indirecte | À limiter (association cohérente) |
| **Fruits à coque (noix, amandes)** | PREDIMED (7 447 adultes sans MCV) ; cohortes Aune 2016 | Événements CV majeurs HR 0,72 ; 28 g/j : maladie coronaire RR 0,71 | Indirecte (prévention primaire) | Raisonnable ; surveiller sel et calories |
| **Stérols / stanols végétaux (environ 2 g/j)** | EAS 2014 ; ESC/EAS 2019 | LDL abaissé de 7 à 10 % ; aucun essai clinique d'événements | Indirecte | Option d'appoint pour le LDL uniquement |
| **Soutien nutritionnel si risque de dénutrition** | EFFORT IC, 645 patients hospitalisés | Mortalité à 30 jours : 8,4 % contre 14,8 % | Indirecte (patients hospitalisés ; FEVG non précisée) | **À aborder si le poids baisse** |
| **Régimes cétogènes / draconiens** | Notice dapagliflozine (Forxiga) | Facteur déclenchant d'acidocétose inscrit dans la notice | Directe (notice du médicament) | **À éviter sous iSGLT2** |`,
    },
    {
      headingFr: 'Ce que disent les recommandations internationales côte à côte',
      bodyMarkdownFr: `| Thème | ESC 2026 (Europe) | Consensus HFA-ESC 2024 | États-Unis (AHA/ACC/HFSA 2022 ; déclaration AHA 2022) | Royaume-Uni (NICE NG106) | Repères patients BHF (Royaume-Uni) |
|---|---|---|---|---|---|
| **Fer** | CST + ferritine au bilan initial (I, C). Fer IV pour les symptômes (I, B1) ; pour réduire les hospitalisations (IIa, B1). Mention d'une définition alternative proposée : CST < 20 % | — | ICFER avec carence martiale, avec ou sans anémie : fer IV raisonnable pour la fonction et la qualité de vie (2a, B-R). Agents stimulant l'érythropoïèse : délétères (3 : Nocif) | Doser CST, ferritine, hémoglobine ; envisager le fer IV si Hb < 150 g/L et CST < 20 % ou ferritine < 100 (1.4.5–1.4.6) | — |
| **Sel** | **Aucun objectif en grammes dans le texte principal.** Réduire le sel jugé « bénéfique dans tous les cas » (section HTA, narratif). Éducation et autogestion (I, A). Conseils détaillés en supplément en ligne (Table S24, non consulté) | Apport normal ; jusqu'à 5 g de sel/j acceptables ; éviter la restriction très stricte | Éviter l'excès de sodium est raisonnable pour réduire la congestion (2a, C-LD) ; sans chiffre | **Ne pas conseiller de restriction systématique** ; évaluer les apports et réduire s'ils sont élevés (1.9.10) | Moins de 6 g de sel/j |
| **Liquides** | « Aucune preuve ne soutient la restriction hydrique dans l'IC chronique » (narratif, citant FRESH-UP et HFA 2024) ; en décompensation, apports inférieurs à la diurèse ; restriction au cas par cas si hyponatrémie | 1,5 à 2,5 L guidés par la soif ; 1,5 à 2 L réservés à des patients sélectionnés | Abordée uniquement dans l'IC avancée avec hyponatrémie : bénéfice incertain (2b, C-LD) | **Ne pas restreindre systématiquement** ; restreindre en cas d'hyponatrémie de dilution ; réduire si apports élevés (1.9.10) | Restreindre uniquement sur avis médical |
| **Substituts de sel** | Non mentionnés dans le texte principal | — | — | **Éviter les substituts de sel contenant du potassium** (1.9.11) | Éviter (souvent riches en potassium) |
| **Antalgiques AINS** | **Non recommandés (III, B2)** : risque d'aggravation et d'hospitalisation pour IC | — | Classés nocifs dans l'ICFER (3 : Nocif, B-NR) | — | — |
| **Dénutrition** | L'évaluation nutritionnelle et les interventions diététiques « peuvent être utiles » (narratif) | — | — | Le suivi doit inclure l'état nutritionnel (1.8.1) | — |
| **Oméga-3** | Non mentionnés dans le texte principal | — | NYHA II–IV : peuvent être raisonnables en ajout pour réduire décès et hospitalisations CV (2b, B-R). Déclaration AHA : éviter ≥ 4 g/j | Non mentionnés | — |
| **Autres compléments** | Non mentionnés dans le texte principal | — | ICFER : vitamines, compléments et hormones non recommandés hors carence avérée (3 : Absence de bénéfice, B-R). Déclaration AHA : CoQ10 non prouvée | Non mentionnés | — |
| **Poids / obésité** | Poids de santé (I, C) ; agonistes du GLP-1 uniquement si FEVG ≥ 45 % et IMC ≥ 30 | — | — | — | — |

*Note méthodologique :* les entrées américaines proviennent du texte intégral AHA/ACC/HFSA 2022 (sections 7.1.2, 7.3.6, 7.3.7, 8.2 et 10.1), avec classes (1, 2a, 2b, 3) et niveaux de preuve. Les entrées NICE NG106 proviennent du texte intégral mis à jour en 2025 avec les numéros de recommandation d'origine.`,
    },
    {
      headingFr: 'Zones encore incomplètes de la littérature compilée',
      bodyMarkdownFr: `Par souci de transparence, plusieurs points identifiés lors de la recherche ne disposent pas encore de données complètes vérifiées dans ce référentiel :

- **Plantes et interactions :** les tableaux originaux de la déclaration AHA 2016 pour le ginseng, le danshen et le thé vert (seul le communiqué a été consulté) ; les interactions de l'extrait de thé vert avec les bêtabloquants de l'IC, les ARNI et les iSGLT2 ; les interactions du ginseng ou du danshen avec les anticoagulants oraux directs (AOD) et les antiagrégants ; la confirmation pour le millepertuis avec le rivaroxaban, l'édoxaban, le ticagrélor, l'éplérénone et certaines autres statines.
- **Risque hémorragique :** les données cliniques associant huile de poisson, ginkgo, ail, vitamine E ou curcuma avec l'apixaban, le rivaroxaban, l'édoxaban, le clopidogrel ou le ticagrélor.
- **Stimulants :** boissons énergisantes et produits « brûle-graisses » contenant de la caféine ou d'autres stimulants (teneur en caféine et effets rythmiques des associations).
- **Essais diététiques :** essais dans l'IC à FEVG préservée (DASH-DHF), analyses sur l'IC dans PREDIMED, rôle des fibres, classe formelle ESC/EAS pour les stérols végétaux, et article complet pour le résumé MESA reliant ultra-transformés et insuffisance cardiaque (l'article complet MESA 2026 porte sur l'infarctus et l'AVC, pas sur l'IC).
- **Compléments expérimentaux :** esters cétoniques (petites études mécanistiques dans l'ICFER uniquement), D-ribose et essais pilotes multi-micronutriments.
- **Suppléments de recommandations :** annexe en ligne de l'ESC 2026 (Table S24 sur l'autogestion et Table S17 sur les définitions de la cachexie) et tableau diététique ESC 2024 sur le syndrome coronaire chronique.`,
    },
  ],
  relatedArticleSlugs: [
    'nutrition-et-complements-insuffisance-cardiaque',
    'guide-pratique-nutrition-complements',
    'carence-martiale-et-fer-iv',
    'interactions-complements-aliments-medicaments',
    'omega-3-huile-de-poisson',
    'coenzyme-q10',
    'sel-et-liquides-insuffisance-cardiaque',
    'alimentation-cardioprotectrice',
    'poids-obesite-et-denutrition',
    'essais-cliniques-cles',
    'recommandations-comparees-esc-us-nice',
  ],
  sources: [
    {
      label: 'Essais cliniques et méta-analyses sur les compléments',
      detail: 'Méta-analyse fer IV 2025, FAIR-HF2, IRONOUT-HF, GISSI-HF, Gencer 2021, Q-SYMBIO, Khan 2021, An 2022, Khan 2019, USPSTF 2022, QUEST (Nature Medicine 2024).',
    },
    {
      label: 'Essais et cohortes nutritionnels',
      detail: 'SODIUM-HF, FRESH-UP, Cochrane 2022 (substituts de sel), CORDIOPREV, EFFORT IC, GOURMET-HF, FOOD-HF, DECAF, CRAVE, Lane 2024, MESA 2026, PREDIMED.',
    },
    {
      label: 'Recommandations internationales',
      detail: 'ESC 2026, consensus HFA-ESC 2024, AHA/ACC/HFSA 2022, déclaration AHA 2022 (CAM), NICE NG106 (mise à jour 2025) et guide BHF.',
    },
    {
      label: 'Autorités réglementaires et sécurité des plantes',
      detail: 'EMA (réglisse, ginkgo, ail, ginseng), EFSA et règlements UE (2022/860 levure de riz rouge, 2022/2340 thé vert EGCG), FDA et notices médicaments.',
    },
  ],
  disclaimerType: 'medical',
};
