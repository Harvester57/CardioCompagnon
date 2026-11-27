import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'risque-inflammatoire-residuel',
  sourceWikiPath: 'wiki/concepts/residual-inflammatory-risk.md',
  titleFr: 'Risque inflammatoire résiduel : hsCRP, IL-6 et essais anti-inflammatoires',
  category: 'traitements',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium',
  volatility: 'hot',
  tags: [
    'risque-inflammatoire-résiduel',
    'inflammation',
    'hscrp',
    'crp-ultrasensible',
    'il-6',
    'canakinumab',
    'cantos',
    'méthotrexate',
    'cirt',
    'ziltivekimab',
    'zeus',
    'colchicine',
    'prévention-secondaire',
    'icfer',
  ],
  aliases: [
    'Risque inflammatoire résiduel',
    'Inflammation et maladie cardiaque',
    'hsCRP',
    'CRP ultrasensible',
    'Interleukine-6',
    'IL-6',
    'Canakinumab',
    'CANTOS',
    'CIRT',
    'Méthotrexate cardiaque',
    'Ziltivekimab',
    'Essai ZEUS',
    'Essai HERMES',
    'Essai ARTEMIS',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Les artères coronaires rétrécies ne sont pas uniquement un problème de cholestérol : les plaques d'athérome sont aussi inflammatoires. Une prise de sang simple, la CRP ultrasensible (hsCRP), mesure ce niveau d'inflammation dans le sang ; lorsqu'elle reste élevée malgré un cholestérol LDL bien contrôlé, on parle de risque inflammatoire résiduel, associé à davantage d'événements cardiaques. À ce jour, un seul anti-inflammatoire figure dans les recommandations coronaires (la colchicine à faible dose), mais sans données démontrées dans l'insuffisance cardiaque à FEVG réduite. En 2026, le grand essai ZEUS avec le ziltivekimab a fortement abaissé la hsCRP sans réduire les infarctus, les AVC ni les décès, et son essai dans l'insuffisance cardiaque (HERMES) a été arrêté pour futilité.",
  sections: [
    {
      headingFr: 'Comprendre la hsCRP, l’IL-6 et le risque inflammatoire résiduel',
      depth: 'patient',
      bodyMarkdownFr: `### Qu'est-ce que la hsCRP et l'interleukine-6 (IL-6) ?

- **CRP ultrasensible (hsCRP) :** la protéine C-réactive (CRP) est fabriquée par le foie en réponse à une inflammation. Le dosage « ultrasensible » détecte des taux bas qui reflètent l'inflammation vasculaire ; les grands essais cardiovasculaires retiennent habituellement un seuil **supérieur ou égal à 2 mg/L** comme élevé.
- **IL-6 et IL-1 bêta :** ce sont des messagers chimiques situés en amont dans la même cascade inflammatoire (l'IL-1 bêta stimule l'IL-6, qui incite le foie à produire la CRP). Les médicaments étudiés bloquent différentes étapes de cette chaîne.
- **Un marqueur non spécifique :** la hsCRP s'élève lors de n'importe quelle infection ou blessure ; un dosage isolé pendant un épisode infectieux ne reflète pas l'état de vos artères. De plus, **l'insuffisance cardiaque elle-même** s'accompagne souvent d'une élévation de la hsCRP et de l'IL-6, indépendamment des artères coronaires.

### La hsCRP est-elle un marqueur de risque après un infarctus ?

Oui, en tant que **marqueur de risque** : dans l'essai **CANTOS**, les personnes hospitalisées par la suite pour insuffisance cardiaque avaient une hsCRP initiale plus élevée (médiane **5,7 contre 4,2 mg/L**).

- Aux États-Unis, une prise de position scientifique de l'**ACC (2025)** (et non une recommandation gradée, rédigée *avant* les résultats de ZEUS) estime que la hsCRP prédit les événements futurs au moins aussi bien que le LDL, y compris sous statine, et encourage un dosage large.
- En Europe, **aucune recommandation** consultée ne demande de doser la hsCRP en routine pour guider le traitement dans la maladie coronaire chronique ; l'**ESC 2024** évoque la colchicine à faible dose sans exiger de hsCRP élevée.

Demandez à votre cardiologue si ce dosage a un intérêt dans votre situation personnelle.`,
    },
    {
      headingFr: 'Ce que cela signifie concrètement dans l’ICFER ischémique',
      depth: 'patient',
      bodyMarkdownFr: `- **Aucun traitement anti-inflammatoire ciblé n'a été testé spécifiquement dans l'ICFER ischémique :** tous les grands essais ont soit exclu les cœurs très affaiblis, soit omis de recueillir la FEVG, soit inclus uniquement des FEVG supérieures à 40 % (HERMES).
- **La hsCRP reste un signal d'alerte, pas encore une cible thérapeutique autonome :** faire baisser la hsCRP avec un anticorps ne suffit pas à protéger le cœur.
- **Ce qui réduit à la fois l'inflammation et le risque prouvé :** les mesures déjà au cœur de votre prise en charge — arrêt du tabac, cholestérol LDL à la cible sous statine, contrôle de la tension artérielle, activité physique adaptée, équilibre du poids et du diabète, et vos quatre piliers de l'insuffisance cardiaque.
- **Attention au risque infectieux :** les biothérapies bloquant l'IL-1 bêta ou l'IL-6 augmentent les infections graves, alors que les personnes vivant avec une insuffisance cardiaque tolèrent mal les infections (voir *Vaccinations recommandées dans l'insuffisance cardiaque*).`,
    },
    {
      headingFr: 'Les grands essais cliniques anti-inflammatoires (CANTOS, CIRT, ZEUS, HERMES, ARTEMIS)',
      depth: 'evidence',
      bodyMarkdownFr: `| Essai | Molécule et cible | Population | Résultat principal | Applicabilité à l'ICFER ischémique |
|---|---|---|---|---|
| **CANTOS** — essai principal (*NEJM* 2017 ; synthèse ACC lue) | Canakinumab 50, 150 ou 300 mg tous les 3 mois (anti-IL-1 bêta) | 10 061 patients après infarctus avec hsCRP ≥ 2 mg/L ; suivi médian 3,7 ans | Décès CV, infarctus ou AVC : **3,86** (150 mg) contre **4,50** pour 100 patients-années sous placebo (**significatif uniquement à 150 mg**, p = 0,02). Infections fatales / sepsis : **0,31 contre 0,18** pour 100 patients-années | **Partielle** : population ischémique, FEVG non rapportée |
| **CANTOS** — analyse IC (*Circulation* 2019 ; résumé lu) | Canakinumab (anti-IL-1 bêta) | Mêmes 10 061 patients (22 % avec antécédent d'IC ; FEVG non précisée) | Hospitalisations pour IC : 50 mg **HR 1,04** (0,79–1,36) ; 150 mg **HR 0,86** (0,65–1,13) ; 300 mg **HR 0,76** (0,57–1,01) ; tendance de dose p = 0,025, **aucune dose significative isolément** | **Partielle** : post-infarctus, FEVG inconnue |
| **CIRT** (*NEJM* 2019 ; synthèse ACC lue) | Méthotrexate faible dose (15–20 mg/semaine) | 4 786 patients avec ancien infarctus (61 %) ou atteinte pluritronculaire + diabète/syndrome métabolique ; hsCRP médiane **1,5 mg/L** | Événements **3,4 contre 3,4** pour 100 patients-années (**HR 1,01**, IC 95 % : 0,82–1,25). **Aucune baisse de l'IL-6 ni de la hsCRP.** Hospitalisations IC 0,95 % vs 1,06 %. Plus d'infections (**62,4 % vs 56,0 %**) | **Partielle** : coronariens, FEVG non rapportée |
| **ZEUS** (*NEJM* 2026, AHA 2026 ; comptes rendus de congrès lus) | Ziltivekimab 15 mg/mois (anti-IL-6) | 6 376 patients avec maladie artérielle, maladie rénale chronique et hsCRP ≥ 2 mg/L ; **42 % avaient une IC** (type et FEVG non publiés) ; suivi médian 33 mois | Infarctus, AVC ou décès CV : **17,6 % contre 17,7 %** (**HR 0,99**, IC 95 % : 0,88–1,11). Décès CV **HR 0,99** ; mortalité totale **HR 0,99**. Baisse de la hsCRP de **64 %** et de l'IL-6 de **76 %** vs placebo. Infections graves **20,4 % contre 17,9 %** | **Partielle à indirecte** : forte proportion d'IC, mais population néphrologique et FEVG inconnue |
| **HERMES** (registre et presse spécialisée) | Ziltivekimab | 4 874 patients avec IC et **FEVG > 40 %**, hsCRP ≥ 2 mg/L | **Arrêté pour futilité en septembre 2026** après ZEUS ; données d'efficacité non publiées | **Indirecte** : l'ICFER était exclue |
| **ATHENA** (registre et presse spécialisée) | Ziltivekimab | 673 patients avec IC et inflammation | Arrêt rapporté parallèlement à HERMES (statut registre non encore actualisé lors de la lecture) | Non évaluable (critères de FEVG non lus) |
| **ARTEMIS** (registre NCT06118281, mis à jour le 24 nov. 2026) | Ziltivekimab débuté quelques jours après un infarctus aigu | 8 350 patients (effectif réel) avec infarctus aigu + facteur de risque ; sans seuil de hsCRP ni de FEVG ; NYHA IV et choc exclus | **Pas encore de résultats.** Fin primaire estimée **janvier 2027**, résultats annoncés au **1er semestre 2027** ; plusieurs critères secondaires portent sur l'IC | **Indirecte** : phase aiguë d'infarctus, non cardiomyopathie chronique |

### Lecture critique des résultats

- **CANTOS :** le signal sur les hospitalisations pour IC repose sur une analyse secondaire et une tendance de dose sans aucune dose individuellement significative (générateur d'hypothèses). Le canakinumab n'est **pas commercialisé** en cardiologie en raison du surrisque d'infections fatales et du coût.
- **CIRT :** les participants avaient peu d'inflammation initiale (hsCRP médiane 1,5 mg/L) et le méthotrexate n'a pas abaissé les marqueurs inflammatoires.
- **ZEUS :** c'est le fait marquant de 2026 — malgré une baisse franche de la hsCRP (-64 %) et de l'IL-6 (-76 %), aucun bénéfice clinique n'a été observé, au prix d'une hausse des infections graves. Le sous-groupe IC et les hospitalisations pour IC n'étaient pas disponibles dans les comptes rendus lus. L'arrêt d'HERMES laisse **ARTEMIS (2027)** comme seul grand essai restant, en post-infarctus aigu uniquement.
- **Enseignement commun :** abaisser la hsCRP ne suffit pas en soi ; la voie biologique ciblée et le profil des patients semblent déterminants.`,
    },
    {
      headingFr: 'Place de la colchicine et limites des preuves disponibles',
      depth: 'evidence',
      bodyMarkdownFr: `### La colchicine à faible dose (0,5 mg/jour)

La **colchicine** reste le seul anti-inflammatoire inscrit dans les recommandations coronaires européennes (**ESC 2024 SCC : Classe IIa, Niveau A**). Les essais détaillés (**LoDoCo2**, **COLCOT**, l'essai neutre **CLEAR SYNERGY**), les troubles digestifs et les interactions sont présentés dans *Cholestérol LDL, aspirine et prévention secondaire coronaire*. Points clés pour l'ICFER :
- l'insuffisance cardiaque sévère était exclue des deux essais positifs (**COLCOT** et **LoDoCo2**) ;
- **CLEAR SYNERGY** (débuté tôt après un infarctus, incluant des patients à FEVG ≤ 45 %) a été **neutre** (**HR 0,99**) ;
- aucun essai n'a analysé de critères spécifiques d'insuffisance cardiaque : l'effet dans l'ICFER reste **non testé**.

### Limites des sources

- Les résultats de CANTOS, CIRT, ZEUS, HERMES, ATHENA et de la prise de position ACC 2025 proviennent de résumés, de synthèses ACC, de comptes rendus de congrès (trois sources concordantes pour ZEUS) et des registres cliniques ; les textes intégraux éditeurs n'étaient pas accessibles.
- Les résultats détaillés du sous-groupe insuffisance cardiaque de **ZEUS** ne sont pas encore connus (légère variation d'effectif entre publication 6 376 et registre 6 385).
- Domaine évolutif : la publication intégrale de **ZEUS** et les résultats d'**ARTEMIS (2027)** pourront faire évoluer cette synthèse.`,
    },
  ],
  relatedArticleSlugs: [
    'cholesterol-et-prevention-secondaire',
    'progression-coronaire-et-imagerie-de-suivi',
    'angor-microvasculaire-et-inoca',
    'arteres-carotides-et-aomi',
    'cardiomyopathie-ischemique',
    'sante-bucco-dentaire-et-gencives',
    'vaccinations-insuffisance-cardiaque',
    'goutte-bpco-thyroide-et-autres-comorbidites',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
  ],
  sources: [
    {
      label: 'CANTOS (Ridker et al., NEJM 2017 ; Everett et al., Circulation 2019) et CIRT (Ridker et al., NEJM 2019)',
      detail: 'Essais du canakinumab (anti-IL-1 bêta, synthèse ACC et résumé IC) et du méthotrexate à faible dose (synthèse ACC) après infarctus du myocarde',
    },
    {
      label: 'ZEUS (AHA 2026 / NEJM 2026), HERMES, ATHENA et registre ARTEMIS (NCT06118281, 24 novembre 2026)',
      detail: 'Résultat neutre du ziltivekimab (anti-IL-6) dans ZEUS, arrêt pour futilité d’HERMES (FEVG > 40 %) et calendrier d’ARTEMIS en post-infarctus aigu',
    },
    {
      label: 'Prise de position scientifique ACC (2025), recommandations ESC 2024 (SCC) et méta-analyse colchicine (EHJ 2025 / Cochrane 2025)',
      detail: 'Place du dosage de la hsCRP, recommandation IIa A de la colchicine et absence de données dans l’ICFER',
    },
  ],
  disclaimerType: 'medical',
};
