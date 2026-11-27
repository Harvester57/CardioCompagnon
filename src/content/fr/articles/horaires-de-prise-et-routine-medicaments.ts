import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'horaires-de-prise-et-routine-medicaments',
  sourceWikiPath: 'wiki/concepts/medicine-timing-and-daily-routine.md',
  titleFr: 'Horaires de prise et routine quotidienne des médicaments',
  category: 'traitements',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'chronothérapie',
    'prise-au-coucher',
    'time-trial',
    'bedmed',
    'hygia',
    'horaire-diurétique',
    'hypotension',
    'alimentation-médicaments',
    'statines',
    'observance',
  ],
  aliases: [
    'Quand prendre ses médicaments cardiaques',
    'Prise matin ou soir',
    'Chronothérapie',
    'Horaire diurétique',
    'Médicaments et repas',
    'Horaire statine',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Pour la plupart des médicaments cardiaques, le meilleur horaire est celui que vous retenez facilement chaque jour. De grands essais randomisés ont montré que prendre ses comprimés de tension le soir plutôt que le matin ne change ni les infarctus, ni les AVC, ni les décès. L'horaire reste toutefois utile pour votre confort et pour quelques médicaments précis : les diurétiques se prennent plutôt le matin pour préserver le sommeil, le rivaroxaban 15/20 mg doit être pris avec un repas, le carvédilol et la spironolactone sont mieux tolérés au repas, et si votre tension est basse, votre médecin peut proposer d'espacer les prises.",
  sections: [
    {
      headingFr: 'Diurétiques, repas, statines et tension basse : les repères pratiques',
      depth: 'patient',
      bodyMarkdownFr: `### Diurétiques de l'anse : préserver votre sommeil et vos sorties

- **Durée d'action :** le furosémide (*Lasilix*) et le bumétanide (*Burinex*) commencent à agir en **30 minutes à 1 heure** (pic vers 1 à 2 heures) et augmentent le volume d'urines pendant environ **4 à 6 heures**.
- **Prise matinale privilégiée :** prendre le diurétique le matin évite les réveils nocturnes. Si une deuxième prise est prescrite, la prendre suffisamment tôt dans l'après-midi limite la gêne nocturne.
- **S'adapter à une sortie :** les guides patients indiquent qu'il est généralement possible de décaler légèrement la prise du matin (par exemple juste après un rendez-vous matinal ou un trajet) afin que le pic d'action ait lieu près de toilettes. En revanche, **sauter complètement une prise** relève uniquement d'un plan écrit convenu avec votre équipe.
- **iSGLT2 :** dapagliflozine (*Forxiga*) et empagliflozine (*Jardiance*) peuvent être pris à tout moment, mais la prise le matin est courante en raison de leur léger effet diurétique.

### Avec ou sans repas ? (repères des notices)

| Médicament | Avec ou sans repas ? | Précision pratique |
|---|---|---|
| **Rivaroxaban 15 mg et 20 mg (*Xarelto*)** | **Obligatoirement avec un repas** | Indispensable pour une bonne absorption (+39 % d'exposition avec un repas ; seulement ~66 % à jeun pour le 20 mg) |
| **Carvédilol (*Kredex*)** | **Avec un repas** recommandé en IC | Ralentit l'absorption et diminue les vertiges au lever |
| **Spironolactone (*Aldactone*)** | **Avec un repas** recommandé | Une prise par jour |
| **Sacubitril/valsartan (*Entresto*)** | Indifférent | Deux prises par jour |
| **Dapagliflozine / Empagliflozine** | Indifférent | Une prise par jour |
| **Apixaban (*Eliquis*)** | Indifférent | Deux prises par jour |
| **Bisoprolol (*Cardensiel*)** | Peut être pris avec un repas | Habituellement le matin |

- **Fibres de psyllium / ispaghul (type *Spagulax*, *Fybogel*) :** à espacer d'au moins **30 à 60 minutes** des autres médicaments et à éviter juste avant le coucher (ralentissent notamment l'absorption de la digoxine et des AVK).

### Statines : matin ou soir ?

- **Statines à demi-vie courte** (simvastatine, pravastatine) : les notices recommandent une prise le **soir** (la synthèse du cholestérol culmine la nuit).
- **Statines à demi-vie longue** (atorvastatine *Tahor*, rosuvastatine *Crestor*) : efficaces à **n'importe quel moment de la journée**, avec ou sans repas.
- Dans tous les cas, évitez le jus de pamplemousse avec la simvastatine et l'atorvastatine, quel que soit l'horaire.

### Si votre tension artérielle est basse : espacer les prises avec votre équipe

Une tension un peu basse sans malaise important ne doit pas conduire à réduire seul des traitements protecteurs. Lorsque des étourdissements au lever gênent le quotidien, les recommandations européennes d'experts (HFA 2020 et 2025) proposent à l'équipe médicale :
1. De rechercher d'abord une cause passagère (déshydratation, fièvre, diarrhée) et de revoir les médicaments non cardiaques qui font baisser la tension (inhibiteurs calciques, alpha-bloquants pour la prostate, collyres bêtabloquants) puis le diurétique s'il n'y a pas de congestion.
2. D'**espacer les prises dans la journée** (ou de fractionner certaines prises) afin que les médicaments abaissant la tension ne culminent pas au même moment. Cette organisation se décide avec votre cardiologue ou votre médecin traitant.
3. Au quotidien, **s'asseoir une minute au bord du lit** avant de se lever aide à limiter les vertiges.`,
    },
    {
      headingFr: 'Matin ou soir : les essais TIME, BedMed et la controverse Hygia',
      depth: 'evidence',
      bodyMarkdownFr: `L'hypothèse de la « chronothérapie » suggérait qu'une prise au coucher protégerait mieux contre les événements cardiovasculaires matinaux. Trois grands essais randomisés récents ont tranché cette question dans l'hypertension (aucun essai n'ayant toutefois testé spécifiquement l'horaire des quatre piliers dans l'ICFER) :

| Essai | Population et durée | Résultat principal (soir / coucher vs matin) | Part d'insuffisance cardiaque |
|---|---|---|---|
| **TIME** (Mackenzie, *The Lancet* 2022, texte intégral) | 21 104 adultes britanniques hypertendus (âge moy. 65 ans, méd. 5,2 ans) | Décès vasculaire, IDM ou AVC : **3,4 % vs 3,7 %**, **HR 0,95** (IC 0,83–1,10, p = 0,53) ; mortalité globale **HR 1,04** | IC de base non rapportée ; antécédent d'IDM ~4,5 % ; hospitalisation/décès IC **HR 0,79** (0,59–1,07, NS, exploratoire) |
| **BedMed** (Garrison, *JAMA* 2025, texte intégral) | 3 357 patients canadiens en soins primaires (méd. 67 ans, 4,6 ans) | Décès ou passage hospitalier/urgences pour AVC, SCA ou IC : **2,3 vs 2,4 / 100 patients-années**, **HR ajusté 0,96** (IC 0,77–1,19) | IC de base **1,7–1,9 %** |
| **BedMed-Frail** (Garrison, *JAMA Netw Open* 2025) | 776 résidents en EHPAD (méd. 88 ans, 86 % troubles cognitifs) | Même critère composite : **29,4 vs 31,5 / 100 patients-années**, **HR ajusté 0,88** (IC 0,71–1,11) ; 92 % de décès | **33 % d'IC** ; hospitalisation IC **HR ajusté 1,26** (0,44–3,63, très peu d'événements) |

- **Tolérance et observance :** aucune augmentation des chutes, fractures de hanche, glaucomes ou déclins cognitifs avec la prise au coucher dans **TIME**, **BedMed** et **BedMed-Frail**. En revanche, dans **TIME**, les levers nocturnes pour uriner étaient plus fréquents le soir (**40,0 % vs 36,4 %**) et les participants dérogeaient plus souvent à l'horaire assigné le soir (**39,0 % vs 22,5 %**), 5,2 % ayant replacé leur diurétique le matin.
- **Pourquoi l'étude Hygia (Hermida, *EHJ* 2019) ne doit pas guider vos horaires :** cette étude espagnole (19 084 patients) avait annoncé une baisse spectaculaire de 45 % des événements CV (**HR ajusté 0,55**) et de 56 % des décès CV (**HR 0,44**) avec la prise au coucher. Elle a fait l'objet de **deux expressions de préoccupation éditoriales (avril et décembre 2020)**, de critiques méthodologiques majeures (randomisation contestée, déséquilibres initiaux, chute implausible de ~40 % de la mortalité non cardiovasculaire, aucun perdu de vue sur 19 084 patients, données sources non vérifiables par le comité d'éthique ESC) et d'un classement à **haut risque de biais** par la Société internationale d'hypertension (ISH 2022). Ses résultats n'ont pas été reproduits par **TIME** ni par **BedMed**.
- **Statines et observance (Marcum 2019, 5 099 nouveaux utilisateurs) :** la consigne « le soir » n'a amélioré ni l'observance (**OR 0,90**, IC 0,75–1,08) ni le taux de LDL par rapport à une consigne « quotidienne ».`,
    },
    {
      headingFr: 'Limites des preuves dans l’ICFER',
      depth: 'evidence',
      bodyMarkdownFr: `- Aucun essai randomisé n'a évalué l'impact de l'horaire de prise (matin contre soir) spécifiquement sur les quatre piliers de l'ICFER.
- Les recommandations d'espacement des prises en cas de pression artérielle basse (Cautela 2020, Skouri 2025) reposent sur un consensus d'experts et non sur des essais comparatifs ; aucune recommandation publiée ne fixe d'écart horaire précis entre un bêtabloquant et un ARNI.
- Pour le sacubitril/valsartan, la notice rappelle de ne pas initier sous **100 mmHg** de pression systolique et d'envisager un ajustement à **95 mmHg ou moins** (hypotension dans PARADIGM-HF : 17,6 % vs 11,9 % sous énalapril).
- Certains détails de notices (bisoprolol, statines, bumétanide) proviennent d'extraits de RCP britanniques ou européens sans vérification séparée des RCP français.`,
    },
  ],
  relatedArticleSlugs: [
    'observance-et-oubli-de-dose',
    'cannabis-cbd-et-substances-recreatives',
    'medicaments-effets-secondaires-suivi',
    'tension-arterielle-insuffisance-cardiaque',
    'automesure-tensionnelle-domicile',
    'escalade-et-resistance-aux-diuretiques',
    'interactions-complements-aliments-medicaments',
    'cholesterol-et-prevention-secondaire',
    'voyages-canicule-et-climat-ic',
    'medicaments-insuffisance-cardiaque',
  ],
  sources: [
    {
      label: 'Essais de chronothérapie : TIME (Mackenzie, The Lancet 2022), BedMed (Garrison, JAMA 2025) et BedMed-Frail (JAMA Netw Open 2025)',
      detail: 'Comparaison prise vespérale vs matinale sur les événements cardiovasculaires, les chutes, la cognition et l’observance',
    },
    {
      label: 'Hygia (Hermida, EHJ 2019), critiques (Guthrie 2020, Brunström 2021) et position ISH/ESH/WHL (2022)',
      detail: 'Expressions de préoccupation éditoriales, limites méthodologiques et avis contre la recommandation systématique au coucher',
    },
    {
      label: 'Consensus européens HFA sur l’hypotension en ICFER : Cautela et al. (EJHF, 2020) et Skouri et al. (2025, texte intégral)',
      detail: 'Seuils cliniques, ordre de révision des traitements et espacement pratique des prises dans la journée',
    },
    {
      label: 'Notices EMA / UK SmPC (Entresto, Forxiga, Jardiance, Xarelto, Eliquis, carvédilol, spironolactone, furosémide, pravastatine, Fybogel) et Marcum (2019)',
      detail: 'Effet des repas, durée d’action des diurétiques de l’anse, espacement du psyllium et horaires des statines',
    },
  ],
  disclaimerType: 'medical',
};
