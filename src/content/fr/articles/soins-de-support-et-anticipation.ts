import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'soins-de-support-et-anticipation',
  sourceWikiPath: 'wiki/concepts/palliative-care-and-advance-planning.md',
  titleFr: 'Soins de support, soins palliatifs et anticipation',
  category: 'quotidien',
  asOf: '2026-11-24',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'soins-palliatifs',
    'soins-de-support',
    'directives-anticipées',
    'personne-de-confiance',
    'désactivation-dai',
    'soulagement-symptômes',
    'aidants',
  ],
  aliases: [
    'Soins palliatifs',
    'Soins de support',
    'Anticipation des soins',
    'Directives anticipées',
    'Personne de confiance',
    'Désactivation du DAI',
    'Advance care planning',
  ],
  linkedModules: ['core', 'device'],
  plainSummaryFr:
    "Les « soins palliatifs » sont souvent confondus avec les seuls soins de fin de vie. Dans l'insuffisance cardiaque, il s'agit avant tout d'un soutien supplémentaire centré sur le soulagement des symptômes, le bien-être émotionnel et l'aide aux décisions, en parallèle de vos traitements habituels et à n'importe quel stade. Ils ne remplacent ni les médicaments ni les dispositifs ; dans un essai clinique, ils ont amélioré la qualité de vie et le moral sans raccourcir la survie. L'anticipation consiste à exprimer vos préférences pendant que vous allez bien — y compris concernant un éventuel DAI, la personne de confiance et les directives anticipées.",
  sections: [
    {
      headingFr: 'Ce que disent les recommandations',
      bodyMarkdownFr: `- **Pour qui :** selon le document de position de la Heart Failure Association (HFA 2020), toute personne atteinte d'insuffisance cardiaque devrait pouvoir bénéficier d'une réflexion sur les soins de support / palliatifs, quel que soit son stade, **en parallèle** du traitement de fond recommandé.
- **Anticipation des soins (Advance Care Planning) :**
  - à envisager chez tous les patients présentant une insuffisance cardiaque avancée (HFA 2020) ;
  - recommandée en **Classe I** dans l'insuffisance cardiaque avancée par l'**ESC 2026** ;
  - encouragée dès que possible par le guide patient ESC 2026.
- **Position NICE NG106 (Royaume-Uni, 2025) :** lorsque les symptômes s'aggravent malgré un traitement spécialisé optimal, il convient d'aborder les besoins de soins palliatifs et d'envisager une évaluation dédiée. NICE recommande de **ne pas** utiliser de scores pronostiques pour décider d'une orientation, et de ne pas prescrire d'oxygénothérapie au long cours à domicile pour l'insuffisance cardiaque seule. Les patients et leurs proches doivent avoir accès à des professionnels formés aux soins palliatifs au sein de l'équipe.
- **Position américaine (ACC 2024) :** les soins palliatifs font partie intégrante de la prise en charge tout au long de la maladie, avec des discussions régulières sur les objectifs de soins.
- **Avant assistance circulatoire ou greffe :** la HFA recommande une consultation de soins palliatifs systématique lors du bilan en vue d'une assistance ventriculaire (LVAD) ou d'une transplantation cardiaque.

### Deux niveaux de soins palliatifs

| Niveau | Intervenants | Champ d'action |
|---|---|---|
| **Approche palliative** | Tous les professionnels de l'insuffisance cardiaque | Soulagement des symptômes, alignement des soins sur vos préférences, soutien psychosocial, coordination |
| **Soins palliatifs spécialisés** | Équipes dédiées de soins palliatifs | Situations complexes ou réfractaires |

Les signaux pouvant motiver l'appel à une équipe spécialisée incluent : des symptômes difficiles à soulager, une détresse psychologique ou existentielle, des hospitalisations répétées, des chocs appropriés de DAI de plus en plus fréquents, une réflexion sur la désactivation ou le non-remplacement d'un DAI, un déclin fonctionnel, ou un désaccord entre le patient et ses proches sur les objectifs de soins. L'accès reste inégal en Europe : selon l'atlas HFA cité en 2020, seuls 10 pays européens sur 42 disposaient d'unités dédiées à l'insuffisance cardiaque avancée.`,
    },
    {
      headingFr: 'Ce que montrent les essais et la fréquence des symptômes',
      bodyMarkdownFr: `### Essai PAL-HF (2017)

Dans cet essai, **150 patients** atteints d'insuffisance cardiaque avancée ont été répartis entre soins habituels seuls ou soins habituels associés à une équipe interdisciplinaire de soins palliatifs, les traitements cardiologiques étant maintenus dans les deux groupes. À **6 mois** :

- qualité de vie cardiologique (score KCCQ) : **+9,5 points** (IC 95 % 0,9–18,1) ;
- qualité de vie palliative (score FACIT-Pal) : **+11,8 points** ;
- amélioration plus importante de la dépression, de l'anxiété et du bien-être spirituel ;
- **réhospitalisations et mortalité : aucune différence** (les soins palliatifs ne réduisent pas la survie).

*Nuances :* essai monocentrique, en ouvert, d'effectif modeste, reposant sur des critères rapportés par les patients avec des intervalles de confiance larges.

### Symptômes fréquents dans l'insuffisance cardiaque avancée (HFA 2020)

- essoufflement chez jusqu'à **90 %** des patients ;
- douleur chez **90 %** des patients en classe NYHA IV ;
- dépression ou anxiété chez **plus de 50 %** des patients ;
- fragilité chez environ **45 %** des personnes atteintes d'insuffisance cardiaque.

La HFA rappelle également que **près de la moitié** des patients insuffisants cardiaques présentent un certain degré de troubles cognitifs : c'est une raison supplémentaire d'engager les discussions d'anticipation suffisamment tôt.`,
    },
    {
      headingFr: 'Anticiper ses choix : directives anticipées et personne de confiance',
      bodyMarkdownFr: `Les discussions d'anticipation abordent habituellement vos priorités face aux situations suivantes :

- la réanimation cardio-pulmonaire ;
- l'assistance respiratoire (ventilation) ;
- la nutrition et l'hydratation artificielles ;
- la **gestion ou la désactivation d'un DAI**.

Le guide patient ESC résume trois objectifs de soins — **vivre plus longtemps**, **éviter les hospitalisations** et **se sentir mieux** — et vous invite à clarifier ce qui compte le plus pour vous avec vos proches et votre équipe. Selon la HFA, une anticipation documentée et partagée favorise moins de réhospitalisations subies, un meilleur accès aux soins de support et une plus grande probabilité de rester dans le lieu de vie souhaité. La BHF encourage aussi d'aborder calmement les aspects pratiques (organisation familiale, finances) tant que l'état de santé est stable.

### Outils juridiques en France

En France (Code de la santé publique, loi Claeys-Leonetti), deux démarches simples et révisables à tout moment permettent de faire respecter votre volonté :

- **Désigner une personne de confiance :** un proche (membre de la famille, ami ou médecin traitant) qui peut vous accompagner en consultation et qui sera consulté en priorité pour témoigner de vos souhaits si vous n'êtes plus en mesure de vous exprimer.
- **Rédiger des directives anticipées :** un document écrit, daté et signé (modèles officiels disponibles sur service-public.fr et has-sante.fr) précisant vos souhaits relatifs à la poursuite, la limitation ou l'arrêt de traitements, y compris la fonction choc d'un défibrillateur. Remettez-en une copie à votre médecin traitant, à votre cardiologue, à votre personne de confiance et enregistrez-les dans **Mon espace santé**.`,
    },
    {
      headingFr: 'Le défibrillateur (DAI) en fin de vie',
      bodyMarkdownFr: `La **fonction de choc électrique d'un DAI peut être suspendue temporairement par un aimant ou désactivée par simple reprogrammation externe**, sans intervention chirurgicale, le boîtier restant en place.

- **Quand en parler :** la HFA recommande d'aborder cette possibilité dès le consentement **avant l'implantation**, puis d'y revenir régulièrement.
- **En pratique :** des protocoles locaux devraient rendre la suspension par aimant et la reprogrammation accessibles partout, y compris à domicile ou en unité de soins palliatifs.
- **Cas d'un CRT-D :** seule la fonction défibrillation (chocs) doit être désactivée. Arrêter la stimulation de resynchronisation risquerait d'aggraver l'essoufflement et les symptômes.
- **Un sujet encore trop rarement abordé :** la HFA constate que la question est souvent évitée et que de nombreux patients décèdent avec un DAI toujours actif. Dans une enquête suédoise chez des porteurs de DAI âgés de 80 à 94 ans (BMC Geriatrics 2018), seuls **13 %** avaient discuté avec un médecin de la désactivation des chocs, **36 %** croyaient à tort qu'il s'agissait d'une euthanasie active, et **40 %** ne souhaitaient pas aborder le sujet. (Ces chiffres reflètent une population très âgée spécifique et ne se généralisent pas automatiquement à des patients plus jeunes.)
- **Avant un changement de boîtier :** la recommandation **ESC 2026** indique qu'une décision partagée réévaluant l'intérêt du remplacement doit être envisagée (**Classe IIa**). Le guide patient ESC insiste sur l'accompagnement des patients dans leurs décisions concernant la gestion du dispositif en fin de vie.`,
    },
    {
      headingFr: 'Adaptation des médicaments et soutien aux proches aidants',
      bodyMarkdownFr: `- **Médicaments en fin de vie (HFA 2020) :**
  - arrêt progressif des traitements de prévention au long cours n'apportant plus de bénéfice symptomatique (par exemple statines, antiagrégants) ;
  - réduction des bêtabloquants et des bloqueurs du système rénine-angiotensine en cas de baisse tensionnelle ou de congestion réfractaire ;
  - mise en place de prescriptions anticipées « si besoin » (antalgiques ou morphiniques contre l'essoufflement ou la douleur, diurétiques, antiémétiques) pour sécuriser le maintien à domicile.
- **Familles et aidants :** la HFA reconnaît les proches aidants comme des partenaires essentiels du parcours de soins. Leur propre épuisement doit être évalué et accompagné, y compris dans le suivi de deuil.`,
    },
  ],
  relatedArticleSlugs: [
    'vivre-avec-insuffisance-cardiaque',
    'dispositifs-cardiaques-dai-crt',
    'depression-et-sante-emotionnelle',
    'questions-equipe-cardiologie',
  ],
  sources: [
    {
      label: 'HFA-ESC Position Paper (2020) — Approche palliative dans l’insuffisance cardiaque',
      detail:
        'Deux niveaux de soins palliatifs, critères d’orientation, symptômes en IC avancée, désactivation du DAI (maintien de la stimulation CRT), déprescription et soutien aux aidants.',
    },
    {
      label: 'Essai PAL-HF (2017)',
      detail: '150 patients en IC avancée : amélioration KCCQ (+9,5 points), FACIT-Pal (+11,8 points), moral et anxiété sans effet sur la survie.',
    },
    {
      label: 'ESC 2026 — Recommandations et Guide patient Insuffisance Cardiaque',
      detail: 'Anticipation des soins Classe I en IC avancée, décision partagée Classe IIa avant changement de boîtier DAI, trois objectifs de traitement.',
    },
    {
      label: 'ACC 2024 Expert Consensus Decision Pathway & NICE NG106 (2025)',
      detail: 'Intégration continue des soins palliatifs, absence de recours aux scores pronostiques pour orienter et non-indication de l’oxygène longue durée pour l’IC seule.',
    },
    {
      label: 'BMC Geriatrics (2018) & British Heart Foundation (BHF)',
      detail: 'Enquête suédoise sur la perception de la désactivation du DAI (80–94 ans) et repères pratiques d’anticipation.',
    },
  ],
  disclaimerType: 'medical',
};
