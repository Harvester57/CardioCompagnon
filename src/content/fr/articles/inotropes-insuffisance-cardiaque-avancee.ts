import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'inotropes-insuffisance-cardiaque-avancee',
  sourceWikiPath: 'wiki/concepts/inotropes-in-advanced-heart-failure.md',
  titleFr: 'Inotropes dans l’insuffisance cardiaque avancée (dobutamine, milrinone, lévosimendan, omécamtiv)',
  category: 'traitements',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'inotropes',
    'levosimendan',
    'milrinone',
    'dobutamine',
    'omecamtiv-mecarbil',
    'insuffisance-cardiaque-avancee',
    'soins-palliatifs',
  ],
  aliases: [
    'Inotropes',
    'Médicaments inotropes',
    'Lévosimendan',
    'Simdax',
    'Zimino',
    'Milrinone',
    'Corotrope',
    'Dobutamine',
    'Omécamtiv mécarbil',
    'Activateur de la myosine cardiaque',
    'Inotropes à domicile',
    'Lévosimendan intermittent',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    'Les inotropes sont des médicaments, le plus souvent administrés en perfusion intraveineuse, qui augmentent temporairement la force de contraction d’un cœur très affaibli. Ils servent en situation aiguë à stabiliser une personne dont la tension et les organes souffrent, ou en relais vers une transplantation cardiaque ou une assistance circulatoire (LVAD). Utilisés au long cours, les inotropes classiques ont toutefois augmenté la mortalité, raison pour laquelle ils ne font pas partie du traitement habituel de l’insuffisance cardiaque. Des cures répétées de lévosimendan en hôpital de jour ont donné des résultats mitigés et ne sont pas autorisées pour cet usage en France (où la HAS a jugé son bénéfice insuffisant en août 2026). Ces traitements sont très éloignés de la situation d’une personne stable à FEVG autour de 35 % sous traitement oral standard.',
  sections: [
    {
      headingFr: 'Les principaux médicaments inotropes et apparentés',
      bodyMarkdownFr: `| Médicament | Voie d’administration | Usage décrit dans l’insuffisance cardiaque avancée |
|---|---|---|
| **Dobutamine** | Intraveineuse (IV) | Pont vers une thérapie avancée ; perfusion palliative à domicile |
| **Milrinone (*Corotrope*)** | Intraveineuse (forme orale délétère dans l’essai PROMISE) | Pont vers une thérapie avancée ; perfusion palliative à domicile |
| **Lévosimendan (*Zimino*, *Simdax* et génériques)** | Intraveineuse (IV) | Traitement hospitalier de décompensation aiguë ; cures ambulatoires répétées (« pulsées ») étudiées ; non commercialisé aux États-Unis |
| **Omécamtiv mécarbil** | Comprimé (activateur de la myosine cardiaque) | Expérimental ; autorisé dans aucun pays |`,
    },
    {
      headingFr: 'Ce que disent les recommandations',
      bodyMarkdownFr: `- **ESC 2026 :** les inotropes intraveineux continus dans l’ICFER avancée avec bas débit et hypoperfusion d’organe sont proposés **en pont** vers une décision thérapeutique, une transplantation ou un LVAD (**Classe IIa, niveau C**). Ils peuvent aussi aider à évaluer la réversibilité d’une atteinte d’organe, ou être envisagés en **soins palliatifs** pour soulager les symptômes lorsqu’aucune autre option n’est possible. Parce qu’ils peuvent déclencher une ischémie myocardique et des arythmies rapides, la dose minimale efficace pendant la durée la plus courte possible est préconisée. L’ESC 2026 ne comporte **aucune recommandation en faveur d’inotropes ambulatoires intermittents (cures répétées)**.
- **Un drapeau rouge d’orientation :** recevoir un inotrope (actuellement ou par le passé) correspond à la lettre **« I »** de la grille « I NEED HELP » et doit amener à impliquer un centre d’insuffisance cardiaque avancée (voir l’article « Insuffisance cardiaque avancée (stade D) et quand orienter vers un centre expert »).
- **ISHLT 2023 :** les personnes dépendantes des inotropes doivent être envisagées pour une assistance circulatoire durable (LVAD) (**Classe IIa, niveau B**).
- **Repère américain** (tel que rapporté par une revue de 2025, non vérifié dans le texte original du guide) : inotropes en pont en **Classe IIa** ; inotropes à domicile à visée palliative en **Classe IIb**.`,
    },
    {
      headingFr: 'Pourquoi les inotropes au long cours ne sont pas courants : PROMISE et soins palliatifs',
      bodyMarkdownFr: `### La leçon historique de l’essai PROMISE (1991)

Dans l’essai **PROMISE**, la **milrinone par voie orale** administrée au long cours à **1 088 patients** atteints d’insuffisance cardiaque sévère a augmenté la mortalité toutes causes de **28 %** (IC 95 % : 1–61 %) et la mortalité cardiovasculaire de **34 %** (chiffres rapportés par la revue Manca 2025). Ce résultat explique pourquoi les inotropes classiques ne sont jamais prescrits comme traitement de fond chronique.

### Inotropes continus palliatifs à domicile

Des séries observationnelles non contrôlées rapportent environ **32 à 50 %** de patients vivants à 1 an sous perfusion continue à domicile de dobutamine ou de milrinone (par exemple **32 %** dans une série française sous dobutamine, **47,6 %** dans une série américaine sous milrinone). Les complications liées au cathéter veineux central sont fréquentes : environ **30 %** d’hospitalisations pour infection de voie veineuse dans une cohorte américaine et **26 %** d’événements liés au cathéter dans une série française. Il n’existe aucun essai randomisé dans cette indication. L’objectif est alors le confort et le maintien à domicile, en articulation étroite avec l’équipe de soins palliatifs (voir l’article « Soins de support, soins palliatifs et anticipation »).`,
    },
    {
      headingFr: 'Le lévosimendan en cures répétées et son statut en France',
      bodyMarkdownFr: `### LION-HEART (2018)

Cet essai pilote espagnol (financé par le laboratoire Orion) a randomisé **69 patients ambulatoires** en ICFER avancée (FEVG moyenne 25–27 %, environ 61 % d’origine ischémique, environ 95 % en classe NYHA III) selon un ratio 2:1 entre **lévosimendan** (perfusion de 6 heures toutes les 2 semaines, 6 cycles) et placebo :

| Critère | Résultat |
|---|---|
| Évolution du NT-proBNP (critère principal) | Plus bas sous lévosimendan (**p = 0,003**) |
| Hospitalisations pour insuffisance cardiaque | **HR 0,25** (IC 95 % : 0,11–0,56) ; **HR 0,40** en tenant compte du décès comme risque compétitif |
| Mortalité | 31 % contre 38 % (**non significatif**) |
| Qualité de vie | Moins de déclin significatif (21 % contre 63 %), uniquement dans l’analyse sans imputation des données manquantes |

### Ce que montre l’ensemble des essais

Une méta-analyse publiée en **2024** (Silvetti et al.) regroupant 9 petits essais randomisés (**680 patients**) suggère une mortalité réduite avec le lévosimendan répété (**RR 0,62**, IC 95 % : 0,42–0,90 ; **12,5 % contre 21,4 %**). Toutefois, l’auteur correspondant travaille pour le fabricant (Orion), les comparateurs étaient hétérogènes et 3 essais étaient menés en ouvert. Surtout, les essais individuels de plus grande taille ont été **neutres** sur leur critère principal :
- **LevoRep** (120 patients) : pas d’amélioration de la distance de marche ni de la qualité de vie ;
- **LAICA** (97 patients, moins de la moitié de l’effectif prévu) : **33 % contre 44 %** (p = 0,29) ;
- **LeoDOR** (145 patients, écourté par la pandémie de COVID-19) : résultat neutre, avec numériquement plus de décès sous lévosimendan à la semaine 26 (**13/93 contre 5/52**).

Un autre essai ambulatoire, **LEIA-HF**, a été interrompu faute de recrutement suffisant (**62 patients inclus sur 350 prévus**), sans résultat publié.

### Statut réglementaire en France (avis HAS d’août 2026)

En France, le **lévosimendan (*Zimino* et génériques)** n’est autorisé que pour le **traitement hospitalier de courte durée** de la décompensation aiguë d’une insuffisance cardiaque chronique sévère. Le résumé des caractéristiques du produit précise que l’expérience des administrations répétées est limitée : les cures ambulatoires programmées relèvent donc d’un usage **hors autorisation de mise sur le marché (hors AMM)**.

Le **26 août 2026**, à l’issue d’une réévaluation, la **Haute Autorité de santé (HAS)** a attribué au lévosimendan un service médical rendu **« insuffisant »**, assorti d’un **avis défavorable au remboursement** (il était auparavant classé « faible »).`,
    },
    {
      headingFr: 'L’omécamtiv mécarbil : un mécanisme différent, encore expérimental',
      bodyMarkdownFr: `L’**omécamtiv mécarbil** est un comprimé qui renforce directement la contraction du muscle cardiaque (activateur de la myosine cardiaque) sans augmenter le calcium intracellulaire. Il n’est **autorisé dans aucun pays**.

- **GALACTIC-HF (2021) :** bénéfice global modeste sur les événements d’insuffisance cardiaque ou les décès cardiovasculaires (**HR 0,92**, IC 95 % : 0,86–0,99).
- **Sous-groupe « insuffisance cardiaque sévère »** (NYHA III–IV, **FEVG ≤ 30 %** et hospitalisation récente ; 27 % des participants, Felker et al., 2022) : **HR 0,80** (IC 95 % : 0,71–0,90) contre **0,99** chez les autres patients (p d’interaction = 0,005), sans effet défavorable sur la pression artérielle, la fonction rénale ou le potassium. La mortalité cardiovasculaire seule n’était pas significativement réduite (**HR 0,88**, IC 95 % : 0,75–1,03).
- **Analyse selon la FEVG** (synthèse secondaire uniquement) : **HR 0,84** pour une **FEVG ≤ 28 %**, contre **1,04** au-dessus.
- **Décisions réglementaires :** le comité consultatif de la **FDA** américaine a voté contre son autorisation (**8 voix contre 3**) en décembre 2022, et la demande d’autorisation européenne (EMA) ciblant les FEVG < 30 % a été retirée en **mai 2024**.
- **Essai COMET-HF (en cours) :** recrute environ **1 800 patients** avec une **FEVG < 30 %**, un NT-proBNP élevé et un événement récent d’insuffisance cardiaque ; la fin primaire est estimée pour **2027–2028** (voir l’article « Essais cliniques en cours et recherche à suivre »).`,
    },
    {
      headingFr: 'Application à une cardiomyopathie ischémique à FEVG autour de 35 % et limites des preuves',
      bodyMarkdownFr: `| Preuve | Population incluse | Applicabilité à une FEVG ~35 % |
|---|---|---|
| **LION-HEART** | ICFER avancée, FEVG ~26 %, ~61 % ischémiques | **Indirecte :** patients beaucoup plus malades (part ischémique comparable) |
| **Méta-analyse lévosimendan (2024)** | IC avancée, causes mixtes | **Indirecte** |
| **Sous-groupe sévère GALACTIC-HF** | FEVG ≤ 30 %, hospitalisation récente | **Indirecte :** signal de bénéfice limité aux FEVG plus basses ; une FEVG ~35 % tombe dans la zone sans bénéfice clair |
| **COMET-HF (en cours)** | FEVG < 30 % | **Ne couvrirait pas** une FEVG autour de 35 % |

- Aucun de ces médicaments n’est utilisé dans une ICFER stable bien équilibrée par le traitement de fond oral. Le message utile à retenir est qu’un **besoin d’inotropes signale une forme avancée** et justifie l’implication d’un centre expert.
- **Point de prudence :** les anciens inotropes ont augmenté la mortalité au long cours, et l’essai LeoDOR a compté numériquement plus de décès sous lévosimendan.

### Limites des preuves

- Les essais sur le lévosimendan répété sont de petite taille, plusieurs ont été interrompus précocement ou sous-recrutés, et une grande partie de la littérature favorable est liée au fabricant.
- Les résultats détaillés de PROMISE et les classes américaines ont été repris à travers la revue de 2025 (Manca et al.).
- Les chiffres du sous-groupe de GALACTIC-HF reposent sur le résumé scientifique et des synthèses secondaires ; une analyse de sous-groupe doit être confirmée de façon prospective (objectif de COMET-HF).
- Les documents complémentaires de l’ESC 2026 consacrés aux inotropes palliatifs n’étaient pas accessibles.`,
    },
  ],
  relatedArticleSlugs: [
    'insuffisance-cardiaque-avancee-stade-d',
    'assistance-circulatoire-lvad',
    'transplantation-cardiaque-france',
    'soins-de-support-et-anticipation',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'essais-cliniques-cles',
    'essais-cliniques-en-cours-et-a-suivre',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 sur l’insuffisance cardiaque (section 8)',
      detail: 'Place des inotropes intraveineux continus en pont (Classe IIa, C) et absence de recommandation pour les cures intermittentes (texte intégral)',
    },
    {
      label: 'Essai LION-HEART (2018) et méta-analyse Silvetti (2024)',
      detail: 'Essai pilote financé par Orion et synthèse de 9 petits essais (dont LevoRep, LAICA et LeoDOR) sur le lévosimendan répété',
    },
    {
      label: 'Revue Manca (2025) sur les inotropes à domicile',
      detail: 'Synthèse de l’essai PROMISE, séries observationnelles palliatives (France et États-Unis) et complications de cathéters (texte intégral)',
    },
    {
      label: 'Analyse de sous-groupe GALACTIC-HF (Felker et al., 2022)',
      detail: 'Résultats de l’omécamtiv mécarbil dans l’insuffisance cardiaque sévère à FEVG ≤ 30 %',
    },
    {
      label: 'Documents réglementaires et registres d’essais (2026 : HAS, RCP France, FDA, EMA, ClinicalTrials)',
      detail: 'Avis HAS du 26 août 2026 (SMR insuffisant pour le lévosimendan), retrait EMA et vote FDA pour l’omécamtiv, statut de COMET-HF et LEIA-HF',
    },
    {
      label: 'Recommandations ISHLT 2023 sur l’assistance circulatoire mécanique',
      detail: 'Indication de LVAD durable chez les patients dépendants des inotropes (Classe IIa, B)',
    },
  ],
  disclaimerType: 'medical',
};
