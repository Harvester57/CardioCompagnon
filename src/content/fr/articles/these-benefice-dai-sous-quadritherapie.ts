import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'these-benefice-dai-sous-quadritherapie',
  sourceWikiPath: 'wiki/theses/icd-benefit-on-four-pillar-therapy.md',
  titleFr: 'Thèse : bénéfice du DAI en prévention primaire sous quadrithérapie moderne',
  category: 'dispositifs',
  readingTier: 'reference',
  asOf: '2026-11-27',
  confidence: 'medium',
  volatility: 'hot',
  tags: [
    'thèse',
    'dai',
    'prévention-primaire',
    'mort-subite',
    'cardiomyopathie-ischémique',
    'icfer',
    'arni',
    'isglt2',
    'quadrithérapie',
    'risque-concurrent',
    'profid-ehra',
    'dilemma',
  ],
  aliases: [
    'DAI sous quadrithérapie',
    'Le DAI reste-t-il utile sous traitements modernes',
    'DAI à l’ère ARNI et iSGLT2',
    'Défibrillateur et quadrithérapie',
    'PROFID-EHRA',
    'DILEMMA',
  ],
  linkedModules: ['device'],
  plainSummaryFr:
    'Cette synthèse examine si un défibrillateur préventif (DAI) prolonge toujours la vie dans l’insuffisance cardiaque ischémique (FEVG ≤ 35 %) sous quadrithérapie moderne complète (ARNI, bêtabloquant, ARM et iSGLT2). Aucun essai randomisé n’a encore répondu directement à cette question : les preuves actuelles restent incomplètes mais penchent vers un bénéfice, et les recommandations ne changent pas en attendant PROFID-EHRA et DILEMMA.',
  sections: [
    {
      headingFr: 'Ce qu’il faut retenir en pratique',
      depth: 'patient',
      bodyMarkdownFr: `Les essais qui ont prouvé qu'un défibrillateur préventif (DAI) prolonge la vie après un infarctus avec FEVG ≤ 35 % datent de 20 à 25 ans, avant l'arrivée du sacubitril/valsartan (ARNI) et des inhibiteurs de SGLT2. Cette fiche vérifie si ce bénéfice reste établi aujourd'hui sous quadrithérapie complète.

- **Aucun essai randomisé n'a encore publié de résultats sous les quatre piliers :** deux grands essais sont en cours pour trancher — **PROFID-EHRA** (patients post-infarctus, fin primaire estimée fin 2027) et **DILEMMA**, conduit par les hôpitaux de Paris (**AP-HP**) chez les 70 ans et plus (fin estimée en 2030).
- **Les médicaments modernes réduisent la mort subite, mais ne la suppriment pas :** dans l'essai du sacubitril/valsartan, environ **3 personnes sur 100 par an** sans DAI décédaient encore de mort subite ; les iSGLT2 réduisent encore un peu ce risque, sans l'annuler.
- **Dans les essais récents, le DAI restait associé à moins de morts subites** y compris sous sacubitril/valsartan ou empagliflozine, mais les estimations sur la mortalité globale restent imprécises.
- **La cicatrice d'infarctus demeure :** les médicaments ne font pas disparaître le tissu cicatriciel à l'origine des tachycardies ventriculaires.
- **La FEVG s'améliore souvent sous traitement moderne :** dans une étude sous sacubitril/valsartan, près de deux tiers des patients dépassaient 35 % de FEVG au bout d'un an. C'est pourquoi il est essentiel d'optimiser le traitement au moins 3 mois et de recontrôler la FEVG avant de décider.
- **Conséquence clinique :** « preuves insuffisantes » signifie ici que le gain sous quadrithérapie complète n'est pas encore prouvé par un essai moderne, **et non** qu'il est absent. Les recommandations européennes (ESC 2026) et américaines restent inchangées ; la décision se prend au cas par cas avec votre cardiologue ou rythmologue.`,
    },
    {
      headingFr: 'Question examinée, échelle de preuves et arguments pour / contre',
      depth: 'evidence',
      bodyMarkdownFr: `**Affirmation évaluée :** le DAI en prévention primaire réduit toujours la **mortalité toutes causes** dans l'ICFER **ischémique** avec **FEVG ≤ 35 %** sous **quadrithérapie moderne** (ARNI ou IEC/ARA2, bêtabloquant, ARM, iSGLT2, incluant spécifiquement ARNI et iSGLT2).

**Critères de réfutation :** essai randomisé ou quasi-randomisé robuste sous traitement moderne montrant l'absence de réduction de mortalité globale, **ou** risque résiduel de mort subite si bas que le nombre de sujets à traiter (NNT) devient cliniquement négligeable.

### Échelle de directitude des preuves

1. **ECR DAI vs pas de DAI sous quadrithérapie en ICFER ischémique :** **aucun publié** (**PROFID-EHRA** NCT05665608 et **DILEMMA** NCT05373940 en cours de recrutement).
2. **ECR historiques en ICFER ischémique :** **MADIT-II**, **SCD-HeFT** (52 % ischémiques), méta-analyse **Shun-Shin** (forte validité interne, mais 0 % d'ARNI et 0 % d'iSGLT2).
3. **Comparaisons DAI vs non-DAI nichées dans des ECR modernes :** **PARADIGM-HF**, **EMPEROR-Reduced**, **VICTORIA** (médicaments modernes présents, mais statut DAI non randomisé).
4. **Registres et cohortes appariées :** **SwedeHF**, **EU-CERT-ICD**, **NCDR**, cohortes japonaises et dossiers électroniques US (majoritairement pré-ARNI/iSGLT2, exposés au biais du patient en meilleure santé).
5. **Preuves mécanistiques et modificateurs :** taux résiduels de mort subite, remodelage inverse sous ARNI, modèles de risques concurrents.

### Principaux arguments en faveur du maintien d'un bénéfice

- **Essais historiques ischémiques :** **MADIT-II** (1 232 patients, 100 % ischémiques, FEVG ≤ 30 % : **HR 0,69** à 20 mois ; **HR 0,66** à 8 ans) ; méta-analyse **Shun-Shin (2017)** (strate ischémique, DAI dédié hors post-IDM précoce : **HR 0,76**, IC 0,60–0,96) ; **SCD-HeFT** (**HR 0,77** vs placebo ; à 11 ans, sous-groupe ischémique **HR 0,81** [0,69–0,95] vs non ischémique **HR 0,97**).
- **Association persistante sur la mort subite sous ARNI et iSGLT2 :** dans **PARADIGM-HF** (**Rohde 2020**, résumé lu, 15 % porteurs de DAI), le DAI restait associé à environ **-56 %** de morts subites chez les ischémiques (p < 0,001), et le sacubitril/valsartan réduisait la mort subite avec (**HR 0,49**) comme sans DAI (**HR 0,81**). Dans **EMPEROR-Reduced** (**Aktas 2026**, 837 paires appariées, résumé/congrès), mort subite **HR 0,59** (0,26–1,3) sous empagliflozine et **0,31** (0,13–0,74) sous placebo (interaction p = 0,30) ; version congrès 2022 sous empagliflozine : mortalité toutes causes **8,5 vs 12,7** pour 100 patients-années (**HR 0,74**, IC 0,51–1,07, non significatif).
- **Risque résiduel non négligeable :** **3,3** morts subites pour 100 patients-années sans DAI dans PARADIGM-HF (**8,8 %** à 3 ans sous sacubitril/valsartan ; **Desai 2015**, **Shen 2017**, **ESC 2026**) et **3,3** pour 100 patients-années sous empagliflozine sans DAI (données congrès EMPEROR-Reduced). Dans **VICTORIA**, sans DAI : **4,8 contre 3,0** pour 100 patients-années en ischémique vs non ischémique, avec **aHR 0,61** (0,38–0,98) de mort subite sous DAI chez les ischémiques.
- **Registres et modèles de risque :** **SwedeHF** (ischémique **HR 0,78**, 0,63–0,98), **EU-CERT-ICD** (global **HR 0,73**, ischémique **0,79** [0,58–1,06]), cohortes US/Japon (**Yokoshiki 2026**, HR ~0,62–0,76) ; dans **Bilchick 2017** (87 914 DAI vs 10 932 témoins), l'interaction DAI × risque était plus forte en ischémique (**HR 0,776**) qu'en non ischémique (**0,871**).

### Principaux arguments contre / limites

- **Aucun ECR publié sous quadrithérapie**, et aucune estimation de mortalité totale dans une cohorte exposée aux ARNI ou iSGLT2 n'exclut l'absence d'effet (**EMPEROR-Reduced** HR 0,74 [0,51–1,07] ; **VICTORIA** neutre sur la mortalité totale).
- **Réduction du risque par les traitements modernes :** baisse historique de **6,5 à 3,3** morts subites/100 patients-années entre RALES et PARADIGM-HF (**Shen 2017**) ; réduction supplémentaire par l'ARNI (**HR 0,80**, Desai 2015) et les iSGLT2 (**DAPA-HF** HR 0,79, ischémique 0,76 ; méta-analyse réseau **Suresh 2025** RR 0,68 [0,49–0,93], certitude faible).
- **Risques concurrents et preuve de contraste :** **DANISH** (non ischémique) montre qu'une division par deux de la mort subite (**HR 0,50**) ne prolonge pas la vie (**HR 0,96** à 13 ans) lorsque les autres causes de décès dominent. Dans **Bilchick 2017**, le quart à plus faible risque n'avait aucun gain de survie significatif (**HR 0,92**, mortalité à 5 ans 16,7 % vs 18,0 %), et **Dhande 2022** note une baisse de mortalité par pilier supplémentaire (**HR 0,64** par classe).
- **Remodelage inverse sous ARNI :** dans **PROVE-HF** (**Felker 2021**, 661 patients à FEVG ≤ 35 %), **32 %** dépassaient 35 % à 6 mois et **62 %** à 12 mois (avec 5 morts subites sur l'année, toutes survenues dans le groupe amélioré : la récupération ne supprime pas le risque). Dans **DISCOVER-ARNI** (113 patients), **60 %** perdaient l'indication à 6 mois. Dans le registre US **Mignone 2024** (8,8 % sous 4 classes au départ, 17,2 % à 24 mois), **45,1 %** des non-porteurs dépassaient 35 % à 24 mois.
- **Complications et biais :** chocs inappropriés ~**1,0 %/an** (EU-CERT-ICD), complications de dispositif à 4 ans **9,8 %** (transveineux) vs **5,9 %** (sous-cutané) dans PRAETORIAN ; biais majeur de sélection des patients plus en forme dans tous les registres (qui ne montrent d'ailleurs pas de concentration du bénéfice dans l'origine ischémique : p d'interaction 0,17–0,83).`,
    },
    {
      headingFr: 'Applicabilité selon les traitements de fond et estimation du NNT',
      depth: 'evidence',
      bodyMarkdownFr: `### Tableau d'applicabilité (exposition réelle aux ARNI et iSGLT2)

| Source | Schéma | Part ischémique | Seuil FEVG | ARNI (%) | iSGLT2 (%) | Critère évalué pour le DAI | Applicabilité |
|---|---|---|---|---|---|---|---|
| **MADIT-II** | ECR | 100 % | ≤ 30 % | 0 % | 0 % | Mortalité totale (**HR 0,69**) | Partielle (anciens traitements, pas de 31–35 %) |
| **SCD-HeFT (11 ans)** | ECR | 52 % | ≤ 35 % | 0 % | 0 % | Mortalité ; ischémique **HR 0,81** | Partielle (sous-groupe) |
| **Shun-Shin (2017)** | Méta-analyse d'ECR | Strate ischémique | — | 0 % | 0 % | Mortalité ischémique **HR 0,76** | Partielle |
| **SwedeHF / EU-CERT-ICD** | Cohortes | 65–67 % | ≤ 35 % | Non rapporté | Non rapporté | Mortalité ischémique **HR 0,78–0,79** | Partielle (observationnel) |
| **PARADIGM-HF (Rohde 2020)** | Niché dans ECR | ~60 % | ≤ 35 % | ~50 % | 0 % | Mort subite seule (~-56 %) | Partielle (critère mort subite seul) |
| **EMPEROR-Reduced (Aktas 2026)** | Niché, apparié | ~52 % | ≤ 40 % | 14–26 % (2022) | 50–100 % | Mort subite **HR 0,59** ; mortalité totale **HR 0,74** (NS, congrès) | Partielle (donnée moderne la plus proche) |
| **VICTORIA (2025)** | Niché dans ECR | 54 % | < 45 % | Non rapporté | Non rapporté | Mort subite ischémique **aHR 0,61** ; mortalité totale neutre | Partielle |
| **PROFID-EHRA** | ECR en cours | 100 % (post-IDM) | ≤ 35 % | ≥ 3 mois traitement optimal | ≥ 3 mois traitement optimal | Mortalité toutes causes | **Directe dès publication** |
| **DILEMMA** | ECR en cours | Toutes causes | ≤ 35 % | « 4 classes » requises | « 4 classes » requises | Survie globale à 48 mois | **Directe pour ≥ 70 ans uniquement** |

*Lecture :* la case décisive (comparaison DAI vs non-DAI sur la mortalité globale dans une population largement traitée à la fois par ARNI **et** iSGLT2) est encore vide.

### Ordre de grandeur du NNT (calcul arithmétique de synthèse, non issu d'une source)

*Hypothèses : effet relatif du DAI sur la mort subite inchangé sous traitement moderne et taux constants dans le temps.*
- **Ère MADIT-II :** 19,8 % vs 14,2 % de décès sur ~20 mois → NNT toutes causes d'environ **18 sur 20 mois**.
- **Sous ARNI seul :** risque résiduel de mort subite sans DAI de **2,9 à 3,3** pour 100 patients-années ; avec une baisse relative de 41 à 56 %, cela correspond à **1,2 à 1,8** mort subite évitée pour 100 patients-années, soit un NNT sur la mort subite d'environ **11 à 17 sur 5 ans**.
- **Avec ajout d'un iSGLT2 :** en appliquant un risque relatif de 0,7 à 0,8, le risque résiduel se situe vers **2,0 à 2,6** pour 100 patients-années, soit un NNT sur la mort subite d'environ **14 à 25 sur 5 ans** (les données congrès EMPEROR-Reduced à 3,3/100 patients-années sous empagliflozine suggèrent plutôt la borne haute du risque).
- **Nuances :** le NNT sur la **mortalité toutes causes** est plus élevé (à cause des décès non rythmiques concurrents ; dans le quart le plus bas de Bilchick 2017, NNT ~77 sur 5 ans, NS). Néanmoins, un NNT de 14 à 25 sur 5 ans pour la mort subite reste cliniquement substantiel : le second critère de réfutation n'est **pas** atteint.`,
    },
    {
      headingFr: 'Recommandations comparées, essais en cours et conclusion de la synthèse',
      depth: 'evidence',
      bodyMarkdownFr: `### Recommandations internationales (au 27 novembre 2026)

| Recommandation | ICFER ischémique, FEVG ≤ 35 % | Classe / niveau | Condition de traitement de fond |
|---|---|---|---|
| **ESC 2026 (IC, Tableau 6)** | DAI en prévention primaire, NYHA II–III | **I, B1** | ≥ 3 mois de traitement de fond optimal ; > 40 j post-IDM ; survie > 1 an |
| **ESC 2022 (rythmologie)** | NYHA II–III (NYHA I, FEVG ≤ 30 % : **IIa B**) | **I, A** | ≥ 3 mois de traitement médical optimal |
| **AHA/ACC/HFSA 2022 (États-Unis)** | ≥ 40 j post-IDM, NYHA II–III (NYHA I ≤ 30 % : **1 B-R**) | **1, A** | Sous traitement médical optimal (pas de distinction selon l'étiologie) |
| **NICE TA314 (2014, Royaume-Uni)** | Critères DAI/CRT UK | Évaluation technologique | Antérieure aux ARNI et iSGLT2 (non relue dans cette synthèse) |

Aucune recommandation n'a supprimé ni abaissé l'indication du DAI chez les patients sous ARNI et iSGLT2 (le passage de A en 2022 à B1 en 2026 reflète la nouvelle échelle de preuve ESC et non un déclassement).

### Essais en cours à suivre (registre ClinicalTrials.gov au 27 novembre 2026)

- **PROFID-EHRA (NCT05665608) :** recrutement en cours (**3 595** patients prévus, post-IDM, FEVG ≤ 35 %, NYHA II–III, ≥ 3 mois traitement optimal), non-infériorité du traitement médical seul sur la mortalité globale ; fin primaire estimée **30 novembre 2027** (256 inclus en octobre 2025 : risque de retard).
- **DILEMMA (NCT05373940, AP-HP, France) :** recrutement en cours (**730** patients prévus, **≥ 70 ans**, FEVG ≤ 35 %, NYHA II–III, ≥ 3 mois des « quatre classes thérapeutiques »), non-infériorité sur la survie à 48 mois ; fin estimée **31 mai 2030**.
- **Essais adjacents :** **BRITISH** (NCT05568069, non ischémique avec cicatrice, 2 504 prévus, fév. 2029), **DUTCH-ICD** (NCT07415642, CMD non ischémique avec cicatrice IRM, 720 prévus, déc. 2032), **RESET-CRT** (NCT03494933, CRT-P vs CRT-D, **interrompu** en février 2023 faute de financement, 959 inclus, sans résultat randomisé publié).

### Conclusion de l'analyse

- **Statut :** **Preuves insuffisantes** (*Insufficient Evidence*), **confiance moyenne**, **avec une orientation des données disponibles en faveur du bénéfice**.
- **Ce qui ferait basculer vers « Confirmé » :** PROFID-EHRA démontrant l'infériorité de l'absence de DAI sur la mortalité globale, ou une émulation d'essai cible / publication complète (Aktas 2026) montrant un bénéfice de survie significatif sous forte exposition ARNI + iSGLT2.
- **Ce qui ferait basculer vers « Réfuté » :** PROFID-EHRA (ou DILEMMA chez les ≥ 70 ans) démontrant la non-infériorité du traitement médical seul sous quadrithérapie, ou des données prospectives montrant une mort subite résiduelle inférieure à ~1 pour 100 patients-années.
- **Transparence d'accès :** plusieurs études modernes clés (**Rohde 2020**, **Desai 2015**, **Aktas 2026**, **DISCOVER-ARNI**, **Dhande 2022**, **Ferreira Neves 2025**) ont été consultées au niveau du résumé ou de communications de congrès et restent provisoires.`,
    },
  ],
  relatedArticleSlugs: [
    'dispositifs-cardiaques-dai-crt',
    'arythmies-ventriculaires-et-antiarythmiques',
    'these-viabilite-et-survie-revascularisation',
    'iec-ara2-et-arni-sacubitril-valsartan',
    'betabloquants-insuffisance-cardiaque',
    'arm-steroidiens-spironolactone-eplerenone',
    'inhibiteurs-sglt2-insuffisance-cardiaque',
    'these-jours-de-maladie-sraa-vs-isglt2',
    'essais-cliniques-en-cours-et-a-suivre',
    'recommandations-comparees-esc-us-nice',
    'essais-cliniques-cles',
    'glossaire-cardiologie',
  ],
  sources: [
    {
      label: 'Essais historiques et méta-analyses : MADIT-II (2002, 8 ans 2010), SCD-HeFT (2005, 11 ans 2020), DINAMIT, IRIS, DANISH (2016, 13 ans 2025) et Shun-Shin (2017)',
      detail: 'Preuves randomisées d’époque pré-ARNI/iSGLT2 et contraste entre cardiomyopathie ischémique et non ischémique',
    },
    {
      label: 'Analyses modernes nichées dans les ECR : Rohde (2020) & Desai (2015) dans PARADIGM-HF, Aktas (2026) dans EMPEROR-Reduced, DAPA-HF arythmies (2021), VICTORIA (2025) et Suresh (2025)',
      detail: 'Risque résiduel de mort subite et effet du DAI sous ARNI et iSGLT2',
    },
    {
      label: 'Cohortes, remodelage inverse et risques concurrents : Shen (2017), SwedeHF (2019), EU-CERT-ICD (2020), Bilchick (2017), Felker / PROVE-HF (2021), DISCOVER-ARNI (2022), Mignone (2024) et Yokoshiki (2026)',
      detail: 'Déclin historique de la mort subite, récupération de FEVG > 35 % sous ARNI et biais de sélection des registres',
    },
    {
      label: 'Registres ClinicalTrials.gov (27 novembre 2026) et recommandations ESC 2026, ESC 2022, AHA/ACC/HFSA 2022',
      detail: 'Statut de PROFID-EHRA (NCT05665608), DILEMMA (NCT05373940, AP-HP), BRITISH, DUTCH-ICD, RESET-CRT et maintien des indications actuelles',
    },
  ],
  disclaimerType: 'medical',
};
