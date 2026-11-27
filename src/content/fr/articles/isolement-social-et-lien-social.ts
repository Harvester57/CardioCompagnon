import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'isolement-social-et-lien-social',
  sourceWikiPath: 'wiki/concepts/loneliness-and-social-connection.md',
  titleFr: 'Isolement social, solitude, aidants et lien social',
  category: 'quotidien',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'isolement-social',
    'solitude',
    'vivre-seul',
    'soutien-social',
    'aidants',
    'proche-aidant',
    'pairs',
    'suivi-téléphonique',
    'réhospitalisation',
    'clubs-coeur-et-sante',
    'france',
  ],
  aliases: [
    'Solitude et insuffisance cardiaque',
    'Isolement social',
    'Vivre seul avec une insuffisance cardiaque',
    'Soutien social',
    'Aidants familiaux',
    'Proche aidant',
    'Clubs Cœur et Santé',
    'Entraide entre pairs',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "L'entourage fait partie intégrante de la vie avec une insuffisance cardiaque. L'isolement social (avoir peu de contacts) et la solitude (se sentir seul) sont distincts, mais tous deux s'associent dans les grandes études à davantage de maladies cardiovasculaires et, chez les personnes déjà atteintes d'insuffisance cardiaque, à plus de réhospitalisations — en grande partie via la dépression, la sédentarité et les difficultés du suivi quotidien. Même si aucun essai n'a prouvé que réduire la solitude seule améliore le pronostic cardiaque, dire à votre équipe si vous vivez seul, associer un proche à votre suivi et vous appuyer sur la réadaptation en groupe ou un Club Cœur et Santé sont des repères simples et sûrs.",
  sections: [
    {
      headingFr: "Pourquoi l'entourage compte dans l'insuffisance cardiaque",
      depth: 'patient',
      bodyMarkdownFr: `- **Isolement social et solitude ne sont pas la même chose :** l'**isolement social** désigne le fait d'avoir peu de contacts ou de vivre seul ; la **solitude** est le fait de *se sentir* seul. On peut présenter l'un sans l'autre.
- **Un lien étroit avec le quotidien et le moral :** gérer une insuffisance cardiaque demande de se peser chaque matin, de repérer tôt un gonflement des chevilles ou un essoufflement, de prendre plusieurs médicaments à heure fixe et de se rendre aux consultations. Vivre seul prive d'un « second regard » au quotidien, et l'isolement s'accompagne très fréquemment de **symptômes dépressifs** (qui passaient de 14 % chez les moins isolés à 52 % chez les plus isolés dans une cohorte américaine).
- **Une bonne nouvelle pratique :** une grande part du lien entre isolement et santé cardiaque passe par des facteurs sur lesquels on peut agir — traiter une dépression, rester actif physiquement et organiser un suivi médical structuré.`,
    },
    {
      headingFr: 'Impliquer un proche aidant et utiliser les relais disponibles en France',
      depth: 'patient',
      bodyMarkdownFr: `### Associer un proche ou un aidant

- **Partagez les repères utiles :** transmettez votre plan écrit de poids et de diurétiques à la personne avec qui vous vivez ou que vous voyez le plus souvent, invitez-la aux consultations clés et assurez-vous qu'elle connaît les signes d'alerte et le numéro **15 (SAMU)** (ou **112** / **114**).
- **Prendre soin des aidants :** les recommandations européennes et américaines soulignent que les aidants portent une charge croissante et méritent eux aussi un soutien psychologique. En France, le **congé de proche aidant** et l'allocation **AJPA** existent pour les aidants de personnes ayant une insuffisance cardiaque sévère, sous réserve d'une reconnaissance officielle de handicap, d'APA ou d'invalidité (voir *Réseau de soins et aides sociales en France*).

### Relais collectifs et gratuits ou encadrés en France

- **Réadaptation cardiaque en groupe (SMR cardiovasculaire) :** associe activité physique encadrée et échanges quotidiens avec d'autres patients dans la même situation (voir *Réadaptation cardiaque (SMR) et activité physique*).
- **Clubs Cœur et Santé (Fédération Française de Cardiologie) :** réseau national de clubs locaux proposant une activité physique encadrée après la réadaptation et une vraie vie de groupe (vérifié au 25 novembre 2026).
- **Associations de patients :** des associations comme **AVEC** ou **ASPIC** (avec groupes de parole) permettent de partager son expérience (voir *Réseau de soins et aides sociales en France*).
- **En cas de baisse de moral associée :** parlez-en tôt à votre médecin traitant ; en France, **Mon soutien psy** rembourse des séances de psychologue sans ordonnance et le **3114** est accessible gratuitement 24 h/24 en cas de détresse (voir *Santé émotionnelle, anxiété et dépression*).`,
    },
    {
      headingFr: 'Ce que cela signifie avec une FEVG autour de 35 %',
      depth: 'patient',
      bodyMarkdownFr: `- **Si vous vivez seul, dites-le clairement à votre cardiologue et à votre médecin traitant :** cette information peut orienter l'organisation de votre suivi (passage infirmier, **PRADO**, appels téléphoniques structurés ou **télésurveillance**).
- **Ce qui a les preuves les plus solides :** les programmes structurés de **suivi téléphonique infirmier** ou de **télésurveillance** réduisent les hospitalisations parce qu'ils surveillent vos symptômes et permettent d'ajuster rapidement le traitement — non pas par la seule compagnie (voir *Télésurveillance à domicile et suivi à distance des prothèses*).
- **Activités de groupe :** réadaptation cardiaque, Clubs Cœur et Santé et associations sont des options sans risque qui soutiennent le moral et l'activité physique, même si aucun essai n'a démontré qu'ils réduisent à eux seuls les réhospitalisations.`,
    },
    {
      headingFr: 'Pour aller plus loin : études épidémiologiques, essais et limites',
      depth: 'evidence',
      bodyMarkdownFr: `### Isolement, solitude et maladie cardiovasculaire (population générale)

- **Valtorta et al. (*Heart*, 2016, 16 cohortes, 181 006 adultes, texte intégral) :** des relations sociales pauvres s'associent à **+29 % de maladie coronaire** (**RR 1,29**, IC 95 % **1,04–1,59**) et **+32 % d'AVC** (**RR 1,32**, 1,04–1,68), sans différence entre isolement et solitude.
- **UK Biobank (Hakulinen 2018, 479 054 adultes, résumé) :** pour un premier événement, l'essentiel du surrisque s'explique par les facteurs de risque classiques (infarctus **HR 1,07**, 0,99–1,16) ; en revanche, chez les personnes ayant **déjà fait un infarctus**, l'isolement social restait associé à la mortalité (**HR 1,25**, 1,03–1,51), contrairement à la solitude.
- **Déclaration AHA 2022 (Cené, lecture partielle) :** après un infarctus, l'isolement s'associe à une mortalité accrue (**HR 1,50**, 1,25–1,79), réduite de moitié mais toujours significative après ajustement — ampleur comparable à celle de la dépression et de l'anxiété.
- **Insuffisance cardiaque incidente — Liang et al. (*JACC Heart Failure*, 2023, UK Biobank, 464 773 adultes, 12 898 cas d'IC sur 12 ans, texte intégral) :**

| Exposition | HR totalement ajusté d'IC incidente (IC 95 %) |
|---|---|
| Modérément isolé | **1,09** (1,05–1,13) |
| Très isolé | **1,17** (1,11–1,23) |
| Sentiment de solitude | **1,19** (1,11–1,27) |
| **Vivre seul (item unique)** | **1,21** (1,16–1,26) |

Les nouveaux événements cardiaques et le diabète expliquaient respectivement ~40 % et ~25 % du lien avec l'isolement (FEVG non disponible ; dépression non incluse dans les variables d'ajustement listées).

### Chez les personnes déjà atteintes d'insuffisance cardiaque

| Étude | Population | Constat principal |
|---|---|---|
| **Manemann 2018** (cohorte Minnesota, texte intégral) | **1 681** patients IC (âge moyen 73 ans, FEVG non rapportée, suivi 8 mois) | **Isolement perçu élevé (6 %) :** mortalité **HR 3,74** (1,82–7,70), hospitalisations **HR 1,68** (1,18–2,39), urgences **HR 1,57** ; inchangé après ajustement sur la dépression (dépression de **14 %** à **52 %** selon l'isolement) |
| **Heidari Gorji 2019** (méta-analyse, résumé) | 13 études, **6 468** patients IC | ~**37 %** socialement isolés, **32 %** vivant seuls ; réhospitalisation IC **OR 1,55** (1,39–1,73) |
| **Chen 2024** (méta-analyse, texte intégral) | 7 études (FEVG mixte et ICFEP) | Vivre seul : **plus d'hospitalisations** à 1 an (**HR 1,14**, 1,04–1,26), **sans hausse claire des décès** (**HR 1,10**, 0,73–1,67) |

### Essais d'interventions et limites des preuves

- **Entraide par les pairs dans l'IC :** dans l'essai randomisé **Heisler (2013)** (appels hebdomadaires entre patients vs suivi infirmier), aucune réduction des réadmissions ni des décès (55 % de participation). Une méta-analyse de 3 essais (390 patients) est neutre sur la mortalité (**RR 1,16**, 0,61–2,21) et les réadmissions (**RR 0,93**, 0,74–1,17 ; faible certitude).
- **Suivi téléphonique structuré par infirmière (Cochrane 2015, 25 essais, 9 332 patients) :** **−13 % de décès** (**RR 0,87**, 0,77–0,98) et **−15 % d'hospitalisations IC** (**RR 0,85**, 0,77–0,93) — bénéfice lié à la surveillance clinique et aux ajustements thérapeutiques, non à la réduction de la solitude.
- **Interventions sur la solitude hors IC (Masi 2011, 50 études) :** baisse modeste de la solitude (taille d'effet **−0,20**), meilleure avec les approches cognitives ciblant les pensées sur les relations (**−0,60**) qu'avec la simple offre de contacts ; aucun critère cardiaque évalué.
- **Recommandations et aidants :** **ESC 2021** cite la solitude parmi les stresseurs psychosociaux à repérer (aucune recommandation gradée pour améliorer le pronostic cardiaque) ; **AHA 2020 (Kitko)** et le **consensus ESC 2025** soulignent la charge des aidants et la nécessité d'un soutien psychologique.
- **Limites :** données exclusivement observationnelles (biais de causalité inverse : la gravité de la maladie favorise l'isolement) ; **aucune estimation propre à l'ICFER** ; mesures hétérogènes entre études.`,
    },
  ],
  relatedArticleSlugs: [
    'depression-et-sante-emotionnelle',
    'reseau-de-soins-et-aides-sociales-france',
    'readaptation-cardiaque-et-activite-physique',
    'telesurveillance-insuffisance-cardiaque',
    'soins-de-support-et-anticipation',
    'vivre-avec-insuffisance-cardiaque',
    'pollution-de-lair-et-bruit',
    'sante-bucco-dentaire-et-gencives',
  ],
  sources: [
    {
      label: 'Valtorta (Heart 2016), Hakulinen (UK Biobank 2018), Liang (JACC HF 2023) & Déclaration AHA (Cené 2022)',
      detail: 'Liens entre isolement social, solitude, vie seul et incidence de maladie coronaire (+29 %), AVC (+32 %) et insuffisance cardiaque (+17 à +21 %).',
    },
    {
      label: 'Manemann (2018, Minnesota), Heidari Gorji (2019) & Chen (2024)',
      detail: 'Isolement perçu, vie seul, dépression (14 % à 52 %), réhospitalisations (OR 1,55) et mortalité chez les patients atteints d’insuffisance cardiaque.',
    },
    {
      label: 'Heisler (2013), Cochrane suivi téléphonique structuré (2015), Masi (2011), AHA Aidants (Kitko 2020) & ESC (2021, 2025)',
      detail: 'Neutralité de l’entraide par les pairs sur les réadmissions, bénéfice clinique du suivi téléphonique infirmier (RR 0,85) et soutien aux aidants.',
    },
    {
      label: 'Fédération Française de Cardiologie (Clubs Cœur et Santé), associations (AVEC, ASPIC) & service-public.fr (F16920)',
      detail: 'Activité physique en groupe post-réadaptation, groupes de parole et conditions du congé de proche aidant / AJPA en France.',
    },
  ],
  disclaimerType: 'medical',
};
