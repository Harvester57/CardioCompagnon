import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'depression-et-sante-emotionnelle',
  sourceWikiPath: 'wiki/concepts/depression-and-emotional-health.md',
  titleFr: 'Santé émotionnelle, anxiété et dépression',
  category: 'quotidien',
  asOf: '2026-11-24',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'dépression',
    'anxiété',
    'santé-mentale',
    'tcc',
    'antidépresseurs',
    'dépistage',
    'chocs-dai',
  ],
  aliases: [
    'Dépression et insuffisance cardiaque',
    'Anxiété',
    'Moral',
    'Santé mentale',
    'TCC',
    'Psychologie',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Ressentir de l'anxiété, de la tristesse ou de la peur après un diagnostic d'insuffisance cardiaque est très fréquent. Chez environ une personne sur quatre ou cinq, cela évolue vers une dépression, qui mérite d'être repérée et accompagnée : elle est associée à plus d'hospitalisations et à un pronostic moins favorable. La thérapie cognitivo-comportementale (TCC) et l'activité physique sont les approches les mieux étayées par les essais cliniques ; deux grands essais d'antidépresseurs (sertraline et escitalopram) n'ont pas montré de supériorité sur le placebo, sans remettre en cause leur sécurité. Si une baisse de moral ou une anxiété persiste, parlez-en à votre médecin traitant ou à votre équipe de cardiologie.",
  sections: [
    {
      headingFr: 'Quelle fréquence et pourquoi cela compte',
      bodyMarkdownFr: `- **Fréquence globale :** la dépression touche environ **20 à 30 %** des personnes vivant avec une insuffisance cardiaque, avec une fréquence comparable quelles que soient la FEVG et la cause. Le risque est plus élevé chez les femmes, les adultes plus âgés, les patients présentant des symptômes plus marqués, une origine ischémique ou un antécédent d'hospitalisation.
- **Formes avancées :** la Heart Failure Association (HFA) rapporte une dépression ou une anxiété chez **plus de 50 %** des patients atteints d'insuffisance cardiaque avancée, et chez **40 à 70 %** des patients hospitalisés en classe NYHA III-IV.
- **Impact pronostique :** dans les études synthétisées par la revue de Basile et al. (2023), la dépression est associée à une mortalité plus élevée à 3 mois et à 1 an (odds ratios d'environ **2,2 à 2,5**) et à davantage de réhospitalisations pour insuffisance cardiaque, indépendamment de la classe NYHA, de l'âge, de la FEVG et de la cause. Il s'agit d'associations statistiques, qui ne prouvent pas à elles seules un lien causal direct, mais soulignent l'importance d'une prise en charge dédiée.`,
    },
    {
      headingFr: 'Comment la repérer',
      bodyMarkdownFr: `- **Questionnaires de dépistage :** la revue de 2023 suggère un repérage en deux temps, en commençant par un questionnaire court à deux questions (**PHQ-2**, seuil à 3 points ou plus), suivi si besoin du questionnaire complet **PHQ-9**. Ces outils servent à signaler des symptômes ; seul un entretien clinique permet de poser un diagnostic.
- **Distinguer réaction d'adaptation et dépression :** il est souvent difficile de différencier une tristesse normale liée à l'annonce ou à une hospitalisation récente d'un véritable épisode dépressif. Les auteurs suggèrent de réaliser au moins un dépistage après les **6 premiers mois** suivant le diagnostic ou l'hospitalisation.`,
    },
    {
      headingFr: 'Ce qui aide : les résultats des essais cliniques',
      bodyMarkdownFr: `| Approche | Essai clinique | Effet sur le moral | Effet sur le pronostic cardiaque |
|---|---|---|---|
| **TCC (thérapie cognitivo-comportementale)** | Freedland 2015 (158 patients, en complément de soins usuels renforcés avec éducation infirmière) | Scores de dépression plus bas à 6 mois ; **rémission de 46 % contre 19 %** sur une échelle et **51 % contre 20 %** sur une autre | Moins d'hospitalisations en analyse exploratoire uniquement ; pas de changement de l'auto-soin ni de la capacité physique |
| **Entraînement physique** | HF-ACTION (2 331 patients) | Diminution des symptômes dépressifs à 3 et 12 mois (rapporté dans la revue 2023) | Voir l'article sur la réadaptation cardiaque |
| **Équipe de soins palliatifs / de support** | PAL-HF 2017 (150 patients en IC avancée) | Amélioration plus marquée des scores de dépression et d'anxiété qu'avec les soins usuels | Aucun effet sur les réhospitalisations ni la mortalité |
| **Sertraline** (antidépresseur ISRS) | SADHART-CHF 2010 (469 patients avec dépression majeure) | Amélioration dans les deux groupes ; **pas de différence avec le placebo** (soutien infirmier dans les deux bras) | Pas de différence sur l'état cardiovasculaire |
| **Escitalopram** (antidépresseur ISRS) | MOOD-HF 2016 (372 patients) | Amélioration dans les deux groupes ; **pas de différence avec le placebo** | Pas de différence sur la mortalité ou les hospitalisations (HR 0,99) |

### Comment interpréter les essais d'antidépresseurs

- Dans SADHART-CHF et MOOD-HF, le moral s'est amélioré dans **les deux bras** : les patients allaient mieux avec un suivi structuré, mais le médicament n'a pas ajouté de bénéfice mesurable par rapport au placebo accompagné de soutien.
- **Sécurité — deux éclairages à mettre en perspective :**
  - Le document de position HFA 2020 décrit les **ISRS** (inhibiteurs sélectifs de la recapture de la sérotonine) comme globalement sûrs et assez bien tolérés dans l'insuffisance cardiaque, bien que les preuves d'efficacité restent limitées.
  - La revue de 2023 cite une méta-analyse observant une mortalité plus élevée chez les patients insuffisants cardiaques sous antidépresseurs ; ces données étant observationnelles (les patients les plus fragiles sont plus souvent traités), elles ne démontrent pas un effet nocif des médicaments.
- Les participants de MOOD-HF présentaient en moyenne une dépression légère à modérée : les résultats peuvent différer dans les dépressions sévères.
- **Règle de sécurité essentielle :** ces résultats ne doivent jamais conduire à arrêter soi-même un antidépresseur prescrit. Toute adaptation se décide avec le médecin prescripteur.
- **Autres leviers recommandés par la HFA :** communication ouverte avec l'équipe, réadaptation cardiaque, activité physique et psychothérapie structurée telle que la TCC.`,
    },
    {
      headingFr: 'Vivre avec un défibrillateur (DAI) : chocs et anxiété',
      bodyMarkdownFr: `- **Qualité de vie globale :** une revue de 15 études (Tomzik, 2015) montre que la qualité de vie globale des porteurs de DAI est généralement **comparable** à celle des patients sans DAI. Dans l'essai SCD-HeFT, le DAI n'a pas altéré la qualité de vie sur 30 mois, **sauf chez les patients ayant reçu un choc au cours du mois précédent**.
- **Chocs répétés :** dans deux essais, une baisse du bien-être psychologique n'était observée que chez les personnes ayant subi **5 chocs ou plus**. Les auteurs recommandent une vigilance particulière sur le plan physique et psychologique après des chocs multiples.
- **Patients très âgés (enquête suédoise, 80–94 ans) :** les symptômes anxieux étaient plus fréquents chez les porteurs ayant déjà reçu un choc (**24 % contre 10 %**).`,
    },
    {
      headingFr: 'Où trouver du soutien en France',
      bodyMarkdownFr: `N'attendez pas d'être en grande détresse pour demander de l'aide : la prise en charge psychologique fait partie intégrante du soin cardiologique.

- **Votre médecin traitant et votre cardiologue :** ils peuvent évaluer vos symptômes, écarter une cause organique de fatigue ou d'anxiété et vous orienter vers un suivi adapté.
- **Équipes de réadaptation cardiaque (SMR cardiovasculaire) et services hospitaliers :** les programmes de SMR intègrent un accompagnement psychologique pris en charge dans le parcours de soins.
- **Dispositif « Mon soutien psy » (Assurance Maladie) :** permet de bénéficier de séances remboursées avec un psychologue conventionné (renseignements sur ameli.fr).
- **Associations de patients et groupes de parole :** échanger avec d'autres personnes vivant avec une cardiopathie ou un DAI aide souvent à rompre l'isolement. En cas de détresse psychologique aiguë ou d'idées suicidaires, appelez le **3114** (numéro national gratuit, 24 h/24 et 7 j/7) ou le **15**.`,
    },
  ],
  relatedArticleSlugs: [
    'vivre-avec-insuffisance-cardiaque',
    'readaptation-cardiaque-et-activite-physique',
    'soins-de-support-et-anticipation',
    'dispositifs-cardiaques-dai-crt',
    'essais-cliniques-cles',
    'vivre-avec-insuffisance-cardiaque-en-france',
  ],
  sources: [
    {
      label: 'Basile et al. (2023) — Revue sur la dépression dans l’ICFER',
      detail: 'Prévalence (20 à 30 %), association avec mortalité et réhospitalisations, dépistage PHQ-2/PHQ-9 et synthèse des traitements.',
    },
    {
      label: 'Freedland et al. (2015) — Essai randomisé TCC dans l’insuffisance cardiaque',
      detail: '158 patients : taux de rémission à 6 mois (46 % vs 19 % et 51 % vs 20 %).',
    },
    {
      label: 'Essais SADHART-CHF (2010) et MOOD-HF (2016)',
      detail: 'Évaluation de la sertraline (469 patients) et de l’escitalopram (372 patients) contre placebo dans l’insuffisance cardiaque.',
    },
    {
      label: 'Essai PAL-HF (2017) & HF-ACTION (2009)',
      detail: 'Amélioration des scores de dépression et d’anxiété avec les soins palliatifs interdisciplinaires et l’entraînement physique.',
    },
    {
      label: 'HFA-ESC Position Paper (2020)',
      detail: 'Prévalence dans l’insuffisance cardiaque avancée, sécurité des ISRS et approches non médicamenteuses.',
    },
    {
      label: 'Tomzik et al. (2015) & BMC Geriatrics (2018)',
      detail: 'Qualité de vie avec un DAI, impact des chocs récents ou répétés (≥ 5 chocs) et anxiété chez les porteurs très âgés.',
    },
  ],
  disclaimerType: 'medical',
};
