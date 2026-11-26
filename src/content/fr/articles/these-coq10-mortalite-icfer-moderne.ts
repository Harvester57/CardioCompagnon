import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'these-coq10-mortalite-icfer-moderne',
  sourceWikiPath: 'wiki/theses/coq10-mortality-contemporary-hfref.md',
  titleFr: 'Thèse : CoQ10 et mortalité dans l’ICFER sous traitement moderne',
  category: 'nutrition',
  readingTier: 'reference',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'thèse',
    'coenzyme-q10',
    'ubiquinone',
    'ubiquinol',
    'q-symbio',
    'coral',
    'danutrio-hf',
    'seleqt-hf',
    'mortalité',
    'icfer',
    'compléments',
  ],
  aliases: [
    'Coenzyme Q10 mortalité ICFER',
    'La CoQ10 réduit-elle la mortalité',
    'CoQ10 et quadrithérapie moderne',
    'Audit Q-SYMBIO',
    'CORAL DANUTRIO-HF SELEQT-HF',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "La coenzyme Q10 est souvent présentée comme bénéfique pour le cœur, mais son effet sur la survie reste non démontré avec les traitements modernes de l'insuffisance cardiaque. Cette synthèse examine les limites des études anciennes et présente les grands essais européens en cours. Elle signale aussi les précautions importantes, notamment si vous prenez un anticoagulant antivitamine K, pour en parler avec votre cardiologue.",
  sections: [
    {
      headingFr: 'Hypothèse évaluée et arguments en faveur (volet historique)',
      bodyMarkdownFr: `**Hypothèse testée :** la supplémentation en coenzyme Q10 (CoQ10) réduit-elle la mortalité toutes causes ou les hospitalisations pour insuffisance cardiaque chez des patients atteints d'ICFER recevant le traitement de fond contemporain (ARNI ou IEC/ARA2, bêtabloquant, ARM et iSGLT2, plus DAI/CRT si indiqués) ?

Les arguments en faveur proviennent exclusivement d'essais antérieurs à la quadrithérapie moderne et de la plausibilité biologique :

- **Essai Q-SYMBIO (Mortensen et al., *JACC: Heart Failure* 2014, texte intégral) :** essai randomisé en double aveugle comparant **300 mg/j d'ubiquinone** (100 mg trois fois par jour, Pharma Nord) au placebo pendant **106 semaines** chez **420 patients** en classe NYHA III–IV (FEVG moyenne **31 %**, **68 à 72 %** d'origine ischémique, **0 % d'ARNI, 0 % d'iSGLT2**, 1,7 % de DAI et 1,7 % de CRT). Alors que les trois co-critères à 16 semaines (NYHA, marche de 6 min, NT-proBNP) ont tous échoué, les événements cardiovasculaires majeurs (MACE) à 2 ans ont diminué de **57 (26 %) à 30 (15 %)** (**HR 0,50**, IC 95 % **0,32–0,80**, p = 0,003), de même que les critères secondaires non ajustés : mortalité CV **9 % contre 16 %** (HR 0,51), mortalité toutes causes **10 % contre 18 %** (HR 0,51) et hospitalisations IC **8 % contre 14 %** (HR 0,51). Dans l'analyse de sensibilité pire cas (réintégrant 2 admissions précoces et classant les 4 perdus de vue sous CoQ10 comme décédés), le MACE restait tout juste significatif (**HR 0,64**, IC 95 % **0,42–0,98**, p = 0,038).
- **Sous-groupe européen post hoc de Q-SYMBIO (Mortensen AL et al., *Cardiol J* 2019, texte intégral) :** chez les **231 patients européens** (bêtabloquants 88 %, ARM 54 %, toujours 0 % d'ARNI/iSGLT2), les MACE étaient de **9 % contre 27 %** (HR 0,23), les décès totaux de **9 % contre 20 %** (HR 0,37) et la FEVG augmentait de +6 points chez les survivants mesurés.
- **Essai Morisco et al. (1993, Italie, résumé) :** chez **641 patients** NYHA III–IV traités avant l'ère des bêtabloquants et des ARM, la CoQ10 (2 mg/kg/j pendant 1 an) a réduit les patients hospitalisés pour IC (**22,9 % contre 36,6 %**, p < 0,001), sans diminution significative de la mortalité (5 % contre 6,5 %).
- **Revue Cochrane 2021 (Al Saadi et al., CD008684, résumé) :** sur 11 essais (1 573 patients), rapporte une mortalité toutes causes **RR 0,58 (0,35–0,95)** et des hospitalisations IC **RR 0,62 (0,49–0,78)** classées en certitude modérée — mais la mortalité repose sur **1 seul essai (Q-SYMBIO, n = 420)** et les hospitalisations sur **2 essais anciens (Q-SYMBIO + Morisco 1993)**, conduisant les auteurs Cochrane eux-mêmes à conclure qu'il n'existe **« aucune preuve convaincante pour soutenir ou réfuter »** la CoQ10.
- **Plausibilité mécanistique :** la CoQ10 est un transporteur d'électrons essentiel de la chaîne respiratoire mitochondriale (production d'ATP) et un antioxydant liposoluble dont les taux myocardiques diminuent dans l'insuffisance cardiaque sévère.`,
    },
    {
      headingFr: 'Arguments en défaveur et audit critique des essais et méta-analyses',
      bodyMarkdownFr: `- **Zéro essai achevé sur la quadrithérapie moderne :** l'interrogation directe des registres ClinicalTrials.gov et ISRCTN au 25 novembre 2026 confirme qu'aucun essai terminé n'a évalué la CoQ10 sur les décès ou hospitalisations en présence d'ARNI et d'iSGLT2, alors que les taux d'événements de base ont fortement chuté depuis les années 1990–2000.
- **Fragilité interne et divergence régionale de Q-SYMBIO :**
  - Recrutement très lent sur **8 ans** (2003–2010) dans 17 centres, clôturé prématurément à **420 patients sur 550 prévus** par le comité de pilotage (hors comité de sécurité) ; seulement **87 MACE et 60 décès** au total ;
  - Échec des 3 co-critères à 16 semaines, **aucune amélioration de l'échocardiographie ni du NT-proBNP à 2 ans**, période blanche inhabituelle de 30 jours sur les admissions et censure lors de l'implantation d'une CRT ;
  - Cofinancement partiel par **Pharma Nord, Kaneka et l'International CoQ10 Association**, avec suivi opérationnel assuré par un collaborateur de Pharma Nord (analyse réalisée par un statisticien indépendant) ;
  - **Aucun sous-groupe ischémique dédié** (« hors cardiomyopathie dilatée » : HR **0,60**, 0,34–1,05, non significatif ; FEVG < 30 % : HR **0,83**, 0,48–1,46, non significatif) ;
  - **Quasi-absence d'effet hors Europe :** en soustrayant le sous-groupe européen post hoc (10 contre 33 MACE sur 231 patients) du résultat global (30 contre 57 sur 420), les **189 patients non européens** ne montrent pratiquement aucune différence (**20 contre 24 MACE**, soit 21 % contre 25 %), sans aucun test d'interaction régionale publié ; de plus, la pression systolique initiale favorisait le bras CoQ10 en Europe (127 contre 121 mmHg, p = 0,03).
- **Essai physiologique neutre (Khatta et al., 2000, n = 55 ICFER, 46 complets) :** malgré un doublement du taux sanguin de CoQ10 sous 200 mg/j pendant 6 mois, **zéro gain** sur la FEVG isotopique, le pic VO₂ ou la durée d'effort.
- **Audit complet des méta-analyses — contaminations et biais majeurs :**

| Synthèse / méta-analyse | Essais inclus | Mortalité toutes causes (IC 95 %) | Constats de l'audit en texte intégral |
|---|---|---|---|
| **NIHR HTA 2022** (Claxton, Royaume-Uni, indépendant) | 26 ECR (2 250 pts, hors ICFEP pure) | **RR 0,68 (0,45–1,03)** (7 essais, n = 1 371) — **non significatif** | Évaluation publique indépendante excluant les essais hors IC ; juge les preuves insuffisantes pour le NHS et déclenche l'essai CORAL |
| **Cochrane 2021** (Al Saadi) | 11 ECR (1 573 pts, tous à risque de biais incertain/élevé) | **RR 0,58 (0,35–0,95)** (1 essai : Q-SYMBIO) | Hospitalisations **RR 0,62** sur 2 essais (Q-SYMBIO + Morisco 1993) ; conclut à l'absence de preuve convaincante |
| **Lei & Liu 2017** (repris par **Khan 2021** et **An 2022**) | 14 ECR (mortalité : 7 essais, n = 1 827) | RR 0,69 (0,50–0,95) / 0,68 (0,49–0,94) | **Pool contaminé :** inclut **KISEL-10 (Alehagen 2015, 443 personnes âgées suédoises saines sous CoQ10 + sélénium, sans IC)** et un essai pédiatrique (Kocharian 2009). **Khan 2021** confirme que la significativité disparaît sans Q-SYMBIO, sans gain de FEVG (+1,24 %) ni de NYHA |
| **Xu et al. 2024** | 32 ECR dans le texte (33 dans le résumé) | RR 0,64 (0,48–0,85) (modèle à effet fixe) | **20 essais sur 32 ouverts sans placebo** (majoritairement 30 mg/j en Chine), seulement 3/32 avec secret d'attribution, doublon potentiel (Pei 2010 / Zhao 2015) et erreurs de pays |
| **Mohammed et al. 2026** | 31 études sur 6 classes mitochondriales | RR 0,62 (0,47–0,82) (classes mélangées) | **Compte Q-SYMBIO deux fois** (2014 et sous-groupe 2019), inclut des enfants ; certitude GRADE faible |
| **Rahman et al. 2026** (ICFEP seule) | 3 ECR (264 pts, FEVG ≥ 50 %) | 2/101 contre 0/105 (certitude très faible) | Preuves insuffisantes également dans l'ICFEP |`,
    },
    {
      headingFr: 'Statines, baisse de la CoQ10 et marketing ubiquinol contre ubiquinone',
      bodyMarkdownFr: `Parce que la majorité des patients atteints de cardiomyopathie ischémique reçoivent une statine, la CoQ10 est souvent promue pour compenser la déplétion induite par les statines ou soulager les douleurs musculaires :

- **Les statines abaissent bien la CoQ10 circulante** via la voie commune du mévalonate (**Banach 2015** : **-0,44 µmol/L**).
- **Dans l'ICFER ischémique, cette baisse n'aggrave pas le pronostic (sous-étude CORONA, McMurray et al., *JACC* 2010, n = 1 191) :** chez 1 191 patients atteints d'insuffisance cardiaque systolique d'origine ischémique, un taux bas de CoQ10 reflétait un âge plus avancé et une IC plus sévère, mais **n'était pas un facteur pronostique indépendant** après ajustement multivarié, et la baisse de CoQ10 induite par la rosuvastatine (*Crestor*) **n'a pas aggravé les événements**, même dans le tertile initial le plus bas. Ni Q-SYMBIO ni la méta-régression NIHR HTA 2022 n'ont trouvé d'interaction avec la prise de statine.
- **Douleurs musculaires sous statines (SAMS) :** dans l'essai le plus rigoureux ayant d'abord confirmé une véritable myalgie aux statines par croisement en aveugle (**Taylor 2015**, 600 mg/j d'ubiquinol, financement NIH), le taux sanguin de CoQ10 a quadruplé sans réduire la douleur (p = 0,53) ni améliorer la force musculaire. Deux méta-analyses (**Banach 2015** ; **Kennedy 2020**, poursuite de la statine RR 0,99) sont neutres, face à une seule méta-analyse non enregistrée très hétérogène (**Qu 2018**, I² = 89,6 %) sur myalgies non confirmées.
- **Ubiquinol contre ubiquinone :** les allégations commerciales présentant l'ubiquinol (plus cher) comme universellement supérieur ne sont pas démontrées. Dans une étude pharmacocinétique croisée en double aveugle comparant 7 produits (**Lopez-Lluch 2019**, n = 14), l'absorption dépendait surtout de la **matrice lipidique et de la solubilisation des cristaux** plutôt que de la forme redox (l'ubiquinol s'oxyde dans le tube digestif et les deux formes s'interconvertissent dans la paroi intestinale). **Aucun essai randomisé d'ubiquinol n'a démontré de baisse de mortalité cardiovasculaire** (**Fladerer 2023**), et Q-SYMBIO, CORAL, DANUTRIO-HF et SELEQT-HF testent tous une **ubiquinone** de qualité pharmaceutique. Sur le marché libre, la qualité et la teneur réelle varient fortement (**Wang 2026**).`,
    },
    {
      headingFr: 'Tolérance, interactions critiques (AVK, tension) et recommandations',
      bodyMarkdownFr: `- **Tolérance générale :** comparable au placebo dans les essais (Cochrane 2021 RR 0,70 ; Q-SYMBIO 13 % contre 19 %, non significatif), avec parfois de légers troubles digestifs, céphalées, vertiges ou éruptions cutanées.
- **Antivitamines K (warfarine — *Coumadine*, acénocoumarol — *Sintrom*, fluindione — *Previscan*) — RISQUE CLINIQUE MODÉRÉ À ÉLEVÉ :** le noyau quinone de la CoQ10 ressemble chimiquement à la vitamine K. Des cas cliniques (**Spigset 1994** ; **Landbo et Almdal 1998**) documentent des chutes marquées de l'INR (risque de caillot) réversibles à l'arrêt. Un petit essai croisé (**Engelsen 2002/2003**, 21 complets) n'a pas observé de variation d'INR, mais n'a testé que **100 mg/j pendant 4 semaines** (un tiers de la dose IC). Fait décisif : **CORAL** et **DANUTRIO-HF excluent tous deux explicitement les patients sous warfarine ou AVK**. Si vous prenez un AVK, **ne débutez ni n'arrêtez jamais la CoQ10 sans accord de votre cardiologue ou de votre pharmacien et contrôle rapproché de l'INR**.
- **Pression artérielle :** les méta-analyses chez des patients cardiométaboliques montrent une baisse modeste de la pression systolique (**Zhao 2022** : **-4,77 mmHg**, certitude GRADE modérée ; **An 2022** : **-3,55 mmHg**). L'AHA (2022/2023) signale un risque d'hypotension additive, pertinent si votre tension est déjà basse sous quadrithérapie.
- **AOD, antiagrégants, potassium, statines, digoxine :** les anticoagulants oraux directs (apixaban, rivaroxaban, édoxaban, dabigatran) n'agissent pas sur la vitamine K et ne sont pas exclus de CORAL ni de DANUTRIO-HF (sans essai pharmacocinétique humain dédié). Aucun signal d'hyperkaliémie, de toxicité digitalique ou de diminution d'efficacité des statines n'est documenté (Taylor 2015 confirme l'absence d'impact sur le LDL sous simvastatine).
- **Recommandations internationales :** les recommandations **ESC 2026** ne mentionnent pas la CoQ10 (tout comme NICE NG106) ; les recommandations américaines **AHA/ACC/HFSA 2022** classent les vitamines et compléments hors carence avérée en **Classe 3 : Absence de bénéfice (niveau B-R)** ; la déclaration **AHA 2022/2023** juge les preuves insuffisantes et alerte sur les interactions.`,
    },
    {
      headingFr: 'Trois grands essais européens en cours et verdict final',
      bodyMarkdownFr: `Les vérifications en direct sur les registres officiels au 25 novembre 2026 montrent que trois grands essais européens randomisés sont actuellement en cours pour trancher la question à l'ère moderne :

| Essai (registre) | Population et effectif | Intervention | Critère principal | Calendrier (au 25 nov. 2026) | Question à laquelle il répondra |
|---|---|---|---|---|---|
| **CORAL** (Royaume-Uni, *ISRCTN26946710*, NIHR HTA) | ICFER / dysfonction systolique VG, NYHA ≥ II ; **950 à 1 025 patients** ; **exclut la warfarine** | *Myoqinon* (ubiquinone) 100 mg × 3/j (300 mg/j) contre placebo pendant 12 mois | **Qualité de vie KCCQ à 12 mois** (mortalité et hospitalisations en secondaires à 12 mois et 5 ans) | Recrutement fév. 2025 – nov. 2026 ; fin globale **mai 2028** | Effet sur les **symptômes et la qualité de vie** sous prise en charge moderne (non dimensionné pour la survie) |
| **DANUTRIO-HF** (Danemark, *NCT06694727*) | IC toutes FEVG sous inhibiteur du SRAA + bêtabloquant ; **N = 4 044 estimés** ; **exclut les AVK** | Factoriel 2×2 : **CoQ10 100 mg × 2/j (200 mg/j)** et/ou sélénium 100 µg × 2/j contre placebo | **1re hospitalisation pour IC ou décès cardiovasculaire** (~33 mois) | Recrutement depuis sept. 2025 ; fin primaire estimée **déc. 2028** | **Premier test moderne de puissance adéquate** sur les événements cliniques majeurs (réserves : pas de seuil FEVG, 200 mg/j, collaboration Pharma Nord) |
| **SELEQT-HF** (Pays-Bas, *NCT07234422*) | IC chronique toutes FEVG, NYHA II–IV, NT-proBNP élevé ; **N = 1 100 estimés** | Association **sélénium 200 µg/j + CoQ10 200 mg/j** (*Bio-Quinon*) contre placebo | **Hospitalisations IC récurrentes, visites urgentes IC et décès CV** (~30 mois) | Recrutement depuis mai 2026 ; fin primaire estimée **déc. 2030** | Effet combiné CoQ10 + sélénium (ne permet pas d'isoler la CoQ10 seule) |

- **Verdict :** **Preuves insuffisantes** (confiance : **moyenne**). L'insuffisance de preuve ne signifie pas une réfutation définitive : si **DANUTRIO-HF** démontre une réduction robuste des hospitalisations ou décès cardiovasculaires sous quadrithérapie moderne (corroborée par **CORAL** sur le score KCCQ), ce verdict évoluera vers un soutien ; des résultats neutres le feraient basculer vers une réfutation.
- **Place pratique actuelle :** « possible, priorité faible » à évoquer éventuellement avec votre cardiologue et votre pharmacien (et **à éviter en automédication sous AVK**), jamais à la place de votre traitement de fond.`,
    },
  ],
  relatedArticleSlugs: [
    'coenzyme-q10',
    'nutrition-et-complements-insuffisance-cardiaque',
    'tableau-preuves-nutrition-complements',
    'essais-cliniques-en-cours-et-a-suivre',
    'essais-cliniques-cles',
    'interactions-complements-aliments-medicaments',
    'cholesterol-et-prevention-secondaire',
    'fer-oral-haute-biodisponibilite',
    'recommandations-comparees-esc-us-nice',
  ],
  sources: [
    {
      label: 'Q-SYMBIO (Mortensen 2014, texte intégral), sous-groupe européen (Mortensen AL 2019, texte intégral) et éditorial Ezekowitz (2014)',
      detail: '420 patients (87 MACE, 0 % ARNI/iSGLT2, arrêt précoce à 8 ans, cofinancement Pharma Nord), quasi-nullité hors Europe et critique méthodologique.',
    },
    {
      label: 'NIHR HTA 2022 (Claxton et al.) et revue Cochrane 2021 (Al Saadi et al., CD008684)',
      detail: 'Mortalité ICFER non significative sur 7 essais (RR 0,68 ; 0,45–1,03) dans NIHR HTA ; mortalité fondée sur 1 essai et hospitalisations sur 2 essais dans Cochrane.',
    },
    {
      label: 'Audit en texte intégral des méta-analyses : Lei & Liu 2017, Khan 2021, An 2022, Xu 2024, Mohammed 2026 et Rahman 2026',
      detail: 'Contamination par KISEL-10 (sujets âgés sains sous sélénium + CoQ10), essais chinois non aveugles, double comptage de Q-SYMBIO et données ICFEP.',
    },
    {
      label: 'Essais pré-modernes (Morisco 1993, Khatta 2000), sous-étude CORONA (McMurray 2010) et essais myalgies sous statines (Taylor 2015, Banach 2015, Kennedy 2020)',
      detail: 'Hospitalisations pré-bêtabloquants, neutralité physiologique, absence de rôle pronostique indépendant de la CoQ10 dans CORONA et neutralité dans les myalgies confirmées.',
    },
    {
      label: 'Registres officiels au 25 nov. 2026 (CORAL ISRCTN26946710, DANUTRIO-HF NCT06694727, SELEQT-HF NCT07234422) et sécurité (Lopez-Lluch 2019, Fladerer 2023, Zhao 2022, Engelsen 2002)',
      detail: 'Essais européens en cours, biodisponibilité ubiquinone vs ubiquinol, baisse de PAS et exclusion des AVK.',
    },
  ],
  disclaimerType: 'medical',
};
