import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'depression-et-sante-emotionnelle',
  sourceWikiPath: 'wiki/concepts/depression-and-emotional-health.md',
  titleFr: 'Santé émotionnelle, anxiété et dépression',
  category: 'quotidien',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'dépression',
    'anxiété',
    'santé-mentale',
    'tcc',
    'soins-collaboratifs',
    'antidépresseurs',
    'qtc',
    'hyponatrémie',
    'dépistage',
    'chocs-dai',
    'tspt',
    'mon-soutien-psy',
    'france',
  ],
  aliases: [
    'Dépression et insuffisance cardiaque',
    'Anxiété',
    'Moral',
    'Santé mentale',
    'TCC',
    'Soins collaboratifs',
    'TSPT après infarctus',
    'Sécurité des antidépresseurs',
    'Mon soutien psy',
    '3114',
    'Psychologie',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Ressentir de l'anxiété, de la tristesse ou de la peur après un diagnostic d'insuffisance cardiaque est très fréquent. Chez environ une personne sur quatre ou cinq (20 à 30 %), cela évolue vers une dépression, associée à davantage d'hospitalisations et à un pronostic moins favorable. Les psychothérapies structurées (TCC, revue Cochrane 2024), l'exercice physique et les soins collaboratifs coordonnés par infirmier (Hopeful Heart dans l'ICFER) améliorent modestement l'humeur, mais n'ont pas démontré de réduction des réhospitalisations ni des décès. Deux grands essais d'antidépresseurs ISRS (sertraline, escitalopram) n'ont pas montré de supériorité sur le placebo accompagné d'un soutien infirmier ; lorsqu'un antidépresseur est nécessaire (surtout dans les dépressions sévères), le consensus ESC 2025 privilégie les ISRS, déconseille les tricycliques et les IMAO, appelle à la prudence avec les IRSN et rappelle l'incompatibilité du citalopram/escitalopram avec l'amiodarone ou le sotalol ainsi que le risque d'hyponatrémie. Chez les porteurs de DAI, environ 23 % présentent une anxiété et 12 % un stress post-traumatique, nettement accrus après des chocs. En France, Mon soutien psy rembourse 12 séances de psychologue par an à 60 % sans ordonnance (troubles légers à modérés), les CMP et psychiatres prennent en charge les formes sévères, et le 3114 répond gratuitement 24 h/24 en cas de crise suicidaire.",
  sections: [
    {
      headingFr: 'Quelle fréquence, pourquoi cela compte et comment repérer les symptômes',
      bodyMarkdownFr: `- **Fréquence globale :** la dépression touche environ **20 à 30 %** des personnes vivant avec une insuffisance cardiaque, avec des taux comparables quelles que soient la FEVG et la cause. Le risque est plus élevé chez les femmes, les adultes plus âgés, les patients présentant des symptômes plus marqués, une origine ischémique ou un antécédent d'hospitalisation (revue de Basile et al., 2023).
- **Formes avancées :** la Heart Failure Association (HFA 2020) rapporte une dépression ou une anxiété chez **plus de 50 %** des patients atteints d'insuffisance cardiaque avancée, et chez **40 à 70 %** des patients hospitalisés en classe NYHA III–IV.
- **Impact pronostique :** dans les études synthétisées en 2023, la dépression est associée à une mortalité plus élevée à 3 mois et à 1 an (odds ratios d'environ **2,2 à 2,5**) et à davantage de réhospitalisations pour insuffisance cardiaque, indépendamment de la classe NYHA, de l'âge, de la FEVG et de la cause. Il s'agit d'associations statistiques (non d'une preuve causale directe), mais elles soulignent l'importance d'une prise en charge dédiée.
- **Repérage en deux temps :** un questionnaire rapide à deux questions (**PHQ-2**, seuil ≥ 3) suivi si besoin du **PHQ-9** aide à signaler les symptômes, mais seul un entretien clinique permet de poser un diagnostic. Comme il est difficile de distinguer une tristesse d'adaptation après l'annonce ou une hospitalisation d'un véritable épisode dépressif, les auteurs suggèrent au moins un dépistage après les **6 premiers mois**.
- **Le dépistage seul ne suffit pas :** dans l'essai **CODIACS-QoL** (1 500 patients après syndrome coronarien aigu, résumé au niveau de l'abstract), le simple dépistage avec notification au médecin n'a pas amélioré la qualité de vie ni les jours sans dépression, même dans le bras offrant un accès facilité au traitement.`,
    },
    {
      headingFr: 'Psychothérapies, exercice et soins collaboratifs : données des essais (2015–2026)',
      bodyMarkdownFr: `### Essais historiques et comparatifs de référence

| Approche | Essai clinique | Effet sur le moral | Effet sur le pronostic cardiaque |
|---|---|---|---|
| **TCC (thérapie cognitivo-comportementale)** | Freedland 2015 (158 patients, en plus de soins usuels renforcés avec éducation infirmière) | Scores dépressifs plus bas à 6 mois ; **rémission de 46 % contre 19 %** sur une échelle et **51 % contre 20 %** sur une autre | Moins d'hospitalisations en analyse exploratoire uniquement ; pas de changement de l'auto-soin ni de la capacité physique |
| **Entraînement physique** | HF-ACTION (2 331 patients) | Réduction des symptômes dépressifs à 3 et 12 mois | Voir l'article sur la réadaptation cardiaque |
| **Équipe de soins palliatifs / de support** | PAL-HF 2017 (150 patients en IC avancée ; 48 % ischémiques, 55 % FEVG ≤ 40 %, 29 % de mortalité à 6 mois) | Amélioration de la dépression (**HADS-D −1,94**, p = 0,02) ; l'anxiété (**−1,83** non ajustée) **devient non significative après ajustement âge/sexe** (p = 0,063). *Limites :* monocentrique, ouvert, effectif réduit de 200 à 150 en cours d'essai, HADS mesuré à partir de la semaine 2, ~46 % de données manquantes à 6 mois | Aucun effet sur les réhospitalisations ni la mortalité |
| **Sertraline** (antidépresseur ISRS) | SADHART-CHF 2010 (469 patients avec dépression majeure) | Amélioration dans les deux groupes ; **pas de différence avec le placebo** (soutien infirmier dans les deux bras) | Pas de différence sur l'état cardiovasculaire |
| **Escitalopram** (*Seroplex*, ISRS) | MOOD-HF 2016 (372 patients en ICFER, FEVG < 45 % à l'inclusion, moyenne **~35 %**, ~**deux tiers d'origine ischémique**, dépression majeure) | Amélioration d'environ **9 points** sur l'échelle MADRS dans les deux bras ; **pas de différence avec le placebo** (écart de **0,9 point**, non significatif) | Décès ou hospitalisations comparables : **63 % contre 64 %** sur ~18 mois (**HR 0,99**) ; essai **arrêté prématurément** faute de bénéfice émergent |

### Synthèses récentes sur les psychothérapies et la TCC en ligne

- **Revue Cochrane 2024 :** 21 essais randomisés, **2 591 participants** (16 essais coronariens, 5 dans l'insuffisance cardiaque). Les interventions psychologiques améliorent la dépression (effet faible à modéré, **SMD −0,36**) et l'anxiété (**SMD −0,57**), avec une **certitude modérée**, sans effet démontré sur la mortalité (**RR 0,81**, IC 95 % 0,39–1,69) ni sur les événements cardiaques majeurs. Les résultats varient sensiblement d'un essai à l'autre et aucune modalité unique ne domine clairement.
- **Méta-analyse TCC dans l'IC (Jeyanantham 2017) :** 5 essais (FEVG moyenne ~31–40 %) retrouvant un léger bénéfice sur l'humeur maintenu au moins 3 mois, sans réduction des hospitalisations (**RR 0,99**) ni des décès (**RR 1,05**).
- **TCC en ligne guidée par infirmier :** un pilote suédois de 50 patients insuffisants cardiaques (**Lundgren 2016**) n'a pas montré de différence nette face à un forum de discussion en ligne, et seuls **24 %** ont terminé les 7 modules. Un essai ultérieur plus large chez 144 patients atteints de pathologies cardiovasculaires mixtes (**Johansson 2019**) a en revanche observé un bénéfice sur l'humeur (**d = 0,62**). Dans l'insuffisance cardiaque, la TCC en ligne reste moins solidement étayée que la TCC en face à face ou par téléphone.

### Soins collaboratifs coordonnés par infirmier et activation comportementale

Dans les soins collaboratifs mixtes (*blended collaborative care*), un infirmier coordinateur suit par téléphone à la fois l'insuffisance cardiaque et l'humeur, avec revue hebdomadaire par un psychiatre et un cardiologue :

- **Hopeful Heart (2021) :** **629 patients** déprimés hospitalisés pour ICFER (FEVG moyenne **~28 %**, environ la moitié ayant un antécédent d'infarctus). Par rapport aux soins usuels, les soins collaboratifs ont amélioré la qualité de vie mentale (taille d'effet **0,34**) et l'humeur (**0,47**). Par rapport à un suivi infirmier cardiologique seul, le gain sur l'humeur était plus modeste (**0,24**) et la qualité de vie mentale ne différait pas. Aucune différence à 12 mois sur les réhospitalisations, la fonction physique ou les décès.
- **CASA (2018, texte intégral) :** **314 patients ambulatoires** (317 randomisés, 3 exclusions) avec IC chronique symptomatique et qualité de vie altérée (**45,2 % d'origine ischémique** ; parmi 299 avec FEVG connue, **44,1 % < 40 %** [26,8 % < 30 % et 17,4 % entre 30 et 39 %], 15,4 % entre 40 et 49 % et 40,5 % ≥ 50 % ; **61,8 % NYHA III–IV** ; **47,5 % avec PHQ-9 ≥ 10**, médiane 9 [IQR 5–14], 23 % de trouble dépressif et 29 % sous antidépresseur), suivis par un infirmier et un travailleur social avec revue hebdomadaire cardiologique et palliative :
  - **Critère principal (score KCCQ global à 6 mois) : formellement neutre** (+5,5 vs +2,9 ; différence **+2,6 points**, IC 95 % −1,3 à 6,6 ; p = 0,19 ; signal exploratoire ICFER d = 0,28 vs ICFEP −0,03 sans test d'interaction publié).
  - **Critères secondaires non corrigés :** légère amélioration des symptômes dépressifs à 6 mois (**PHQ-9 −1,4 point**, d = −0,29, p = 0,02) et 12 mois (d = −0,36, p = 0,006) ; amélioration de la fatigue à 6 mois (d = −0,30, p = 0,02) **non maintenue à 12 mois** (p = 0,16) ; anxiété neutre à 6 mois (p = 0,09) ; aucune différence sur la dyspnée, la douleur, les hospitalisations (p = 0,61) ni la mortalité à 12 mois (10 vs 13 décès, p = 0,52).
- **TEACH (2025) :** **457 patients** coronariens en détresse psychologique (dont 39 % avec IC et 14 % avec FEVG < 40 %). Les soins d'équipe ont atteint leur critère principal binaire de réponse sur la qualité de vie HeartQoL (**19 % vs 10 %**, **OR 2,21**, p = 0,005 ; NNT = 11) et réduit les scores HADS dépression (**−1,31**) et anxiété (**−1,18**), mais les événements cardiaques et décès n'ont pas été rapportés.
- **Activation comportementale (IsHak 2024) :** cette thérapie structurée encourage la reprise progressive d'activités porteuses de sens. Chez **416 patients** insuffisants cardiaques de toute FEVG (36 % avec antécédent d'infarctus, sans groupe soins usuels), comparée à un suivi infirmier d'antidépresseurs : les scores dépressifs ont chuté de près de moitié dans les deux groupes (sans différence à 6 mois) ; la qualité de vie physique SF-12 était légèrement supérieure (**+2,1 points**) ; aucune différence principale sur le KCCQ, les réhospitalisations ni la mortalité (le gain KCCQ cité par le consensus ESC 2025 provient d'une analyse ultérieure limitée aux patients ayant suivi l'essentiel du programme) ; moins de passages aux urgences et de jours d'hospitalisation en analyse secondaire.

### Limites méthodologiques (audit des textes intégraux et registres)

Tous les essais comportementaux sont menés en ouvert et reposent sur des questionnaires auto-rapportés. La confrontation des textes intégraux aux registres d'essais invite à la prudence :

| Essai (registre) | Verdict sur le critère principal | Principales limites méthodologiques |
|---|---|---|
| **TEACH 2025** (DRKS00020824) | **Formellement positif** (réponse binaire HeartQoL 19 % vs 10 %, p = 0,005) | Taux de réponse bien inférieurs aux hypothèses de puissance (50 % vs 35 %) ; pas de bras contrôle d'attention (13 appels en moyenne vs lettre) ; déséquilibres initiaux (angor CCS III–IV 16 % vs 8 %, anxiété HADS 8,4 vs 9,3) ; le gain du « score de risque médical » provient **uniquement de l'inactivité physique auto-déclarée** (tension, LDL, HbA1c et cotinine inchangés, 58 % de LDL manquants à 12 mois) ; pas de sous-groupe IC/FEVG ; redevances HADS allemande perçues par l'investigateur principal |
| **CASA 2018** (NCT01739686) | **Formellement neutre** (KCCQ +2,6, p = 0,19) | Gains dépression/fatigue issus de critères secondaires non corrigés ; critères d'inclusion assouplis en cours de recrutement ; 21 % de questionnaires manquants à 6 mois ; pas de contrôle d'attention (~23 contacts téléphoniques) ; déséquilibres initiaux favorables au bras CASA (CRT-D 15,3 % vs 7,0 %, bêtabloquants 90,4 % vs 79,0 %, moindre dyspnée) |
| **ICD-FORUM 2019** (NCT01589913) | **Formellement neutre** (composite à 6 semaines p = 0,50 ; à 1 an p = 0,29) | Effectif cible ramené de 200 à 119 ; recrutement décalé (médiane 1,4 an après implantation au lieu d'avant implantation) ; **abandons presque doubles dans le bras intervention (30,5 % vs 16,9 %)** ; la baisse HADS dépression à 1 an (−2,98, p = 0,004) se situe à la limite de Bonferroni (14 tests) et **l'anxiété (p = 0,03) ne résiste pas à la correction** |
| **Lundgren 2016** (NCT01681771) | **Formellement neutre** (PHQ-9 entre bras p = 0,21, d = 0,26) | **Arrêté prématurément** à 50 patients sur 104 prévus (120 au registre, puissance 16 %) ; forts déséquilibres de sévérité (NYHA III–IV 20 % vs 56 %, diurétiques 56 % vs 80 %) ; seuls 24 % ont fini les 7 modules ; les conclusions optimistes reposent sur une comparaison avant-après intra-groupe non randomisée |

*Adéquation à l'ICFER ischémique :* **principalement directe** pour Hopeful Heart ; **partielle** pour Cochrane, la méta-analyse TCC, CASA (44,1 % FEVG < 40 %, 45,2 % ischémique, avant l'ère des iSGLT2) et TEACH (39 % IC, 14 % FEVG < 40 %) ; **indirecte** pour les essais de TCC en ligne.`,
    },
    {
      headingFr: 'Antidépresseurs et sécurité cardiaque : MOOD-HF et consensus ESC 2025',
      bodyMarkdownFr: `### Ce qu'enseignent SADHART-CHF et le texte intégral de MOOD-HF

- Dans SADHART-CHF et MOOD-HF, le moral s'est amélioré dans **les deux bras** : un suivi infirmier structuré aide réellement, mais la sertraline et l'escitalopram n'ont pas ajouté de gain mesurable par rapport au placebo dans ces populations majoritairement atteintes de dépression légère à modérée.
- **Compléments du texte intégral et du supplément de MOOD-HF :**
  - **Sous-groupe ischémique :** environ deux tiers des participants avaient une origine ischémique, sans différence de réponse par rapport aux causes non ischémiques (**73 événements sur 116** contre **80 sur 123** sous placebo ; **p d'interaction = 0,97**).
  - **Critères cardiaques secondaires :** sous escitalopram, le NT-proBNP a moins diminué et le ventricule gauche ne s'est pas remodelé favorablement (résultats secondaires non concluants).
  - **Tolérance et QTc :** fréquence globale d'effets indésirables graves similaire, et **aggravation de la dépression moins fréquente** sous escitalopram (**5 % contre 11 %**). L'intervalle **QTc** tendait à s'allonger davantage (hausse maximale moyenne **25 ms contre 15 ms**, non significative ; hausse > **100 ms** chez **8 % contre 2 %**).
  - **Patients exclus :** toute personne ayant un **QTc ≥ 500 ms** ou prenant un médicament prolongeant le QT — notamment un antiarythmique de classe IA ou III comme l'amiodarone (*Cordarone*) ou le sotalol (*Sotalex*) — était exclue.
  - **Dépression sévère et sorties d'étude :** une analyse exploratoire suggérait un pronostic moins favorable sous escitalopram en cas de dépression sévère (**MADRS > 25 : HR 1,67**), signal non confirmé qui justifie un avis spécialisé. Les 11 % contre 5 % d'arrêts à 6 semaines correspondaient aux sorties d'étude plutôt qu'à l'arrêt du comprimé lui-même.

### Choix des antidépresseurs selon le consensus ESC 2025

Aucun essai dédié dans l'insuffisance cardiaque n'a été identifié pour la mirtazapine, les IRSN ou les tricycliques. Le **consensus ESC 2025 sur la santé mentale et les maladies cardiovasculaires** préconise une décision partagée entre cardiologue et spécialiste de santé mentale, en réservant les antidépresseurs surtout aux dépressions **sévères** :

| Classe (exemples) | Repères du consensus ESC 2025 et des données de sécurité dans l'IC |
|---|---|
| **ISRS** (sertraline — *Zoloft*, citalopram — *Seropram*, escitalopram — *Seroplex*) | Groupe privilégié sur le plan hémodynamique (moins d'hypotension orthostatique, de tachycardie ou de troubles conductifs). Certains peuvent allonger le QTc et accroissent le risque hémorragique sous antithrombotiques. Sertraline, citalopram et escitalopram présentent moins d'interactions enzymatiques hépatiques que fluoxétine, fluvoxamine ou paroxétine |
| **IRSN** (venlafaxine — *Effexor*, duloxétine — *Cymbalta*) | **Prudence :** données limitées et contradictoires dans l'IC ; peuvent élever ou abaisser la tension artérielle ; taux le plus élevé d'hyponatrémie parmi les classes d'antidépresseurs (**7,4 %**, contre **5,6 %** sous ISRS ; méta-analyse Gheysens 2024) |
| **Mirtazapine** (*Norset*) | N'a pas allongé le QTc chez des volontaires sains ; risque le plus faible d'hyponatrémie (**1,0 %**, soit environ **40 %** de risque en moins par rapport aux ISRS) ; peut provoquer prise de poids et hypotension orthostatique |
| **Tricycliques** (amitriptyline — *Laroxyl* et apparentés) et **IMAO** | **À éviter dans l'insuffisance cardiaque :** hypotension orthostatique, aggravation de l'IC, arythmies ventriculaires et allongement plus marqué du QTc |
| **Trazodone** | Pas d'allongement du QTc chez des volontaires sains ; faible taux d'hyponatrémie (2 études seulement) |
| **Bupropion** (*Zyban*) | Parfois utilisé dans le sevrage tabagique coronarien, mais données rythmiques incohérentes et interactions notables en ICFER |

### Points de vigilance pratiques avec les traitements de l'insuffisance cardiaque

- **Amiodarone, sotalol et allongement du QT (France — RCP et ANSM) :**
  - Les résumés des caractéristiques du produit (RCP) français de **Seroplex** (escitalopram, révisé le 15 janvier 2026) et **Seropram** (citalopram, révisé le 22 mai 2025), comme l'alerte britannique MHRA (2011), **contre-indiquent** ces deux molécules en cas de QT long et en association avec d'autres médicaments prolongeant le QT (dont les antiarythmiques de classe IA et III). Une lettre de l'**ANSM (2022)** aux prescripteurs a rappelé cette interdiction en citant expressément l'**amiodarone** et le **sotalol**.
  - **Plafonds de doses :** escitalopram limité à **20 mg/jour** (**10 mg/jour** au-delà de 65 ans, en cas d'insuffisance hépatique ou chez les métaboliseurs lents CYP2C19) ; citalopram limité à **40 mg/jour** (**20 mg/jour** au-delà de 65 ans).
  - Un **ECG préalable** est à envisager en cas de cardiopathie, avec correction préalable d'une hypokaliémie ou d'une hypomagnésémie, prudence en cas de bradycardie, d'infarctus récent ou d'IC décompensée, et arrêt avec ECG si des symptômes rythmiques surviennent. *Différence UK/France :* la MHRA fixe des seuils chiffrés (réduire/arrêter à 480–500 ms, arrêter > 500 ms), tandis que les RCP français ne donnent pas de seuil en millisecondes.
- **Métoprolol :** les RCP français indiquent que le citalopram et l'escitalopram doublent approximativement les concentrations sanguines de métoprolol, avec risque de bradycardie ou de baisse tensionnelle.
- **Sodium sanguin (hyponatrémie) :** dans la méta-analyse **Gheysens 2024**, les antidépresseurs triplent environ le risque d'hyponatrémie (**OR 3,16**), en particulier après 60 ans. Les diurétiques abaissent aussi le sodium ; bien que l'association n'ait pas été testée directement dans cette méta-analyse, demander un **contrôle de la natrémie** après initiation d'un antidépresseur est une précaution pertinente.
- **Risque hémorragique :** les ISRS et IRSN majorent le risque de saignement avec l'aspirine, les autres antiplaquettaires, les anticoagulants et les AINS (voir l'article sur les antiplaquettaires et la protection gastrique).
- **Antidépresseurs et survie :** les études de registres observent une mortalité plus élevée chez les patients insuffisants cardiaques sous antidépresseur, mais dans une cohorte de **1 006 patients** avec FEVG ≤ 35 % (**O'Connor 2008**, abstract), le sur-risque suivait la **dépression** (**HR 1,34**) plutôt que la prise d'ISRS (**HR 1,10**, non significatif) une fois les deux analysés ensemble. Ce biais d'indication (les patients les plus fragiles sont plus souvent traités) empêche de conclure à un effet nocif du médicament.
- **Règle de sécurité essentielle :** n'arrêtez et ne modifiez jamais vous-même un antidépresseur prescrit ; toute adaptation appartient au médecin prescripteur en lien avec votre cardiologue.`,
    },
    {
      headingFr: 'Vivre avec un défibrillateur (DAI) ou après un infarctus : chocs, anxiété et TSPT',
      bodyMarkdownFr: `- **Qualité de vie globale avec un DAI :** une revue de 15 études (**Tomzik 2015**) montre une qualité de vie globale généralement **comparable** à celle des patients sans DAI. Dans SCD-HeFT, le DAI n'a pas altéré la qualité de vie sur 30 mois, **sauf en cas de choc au cours du mois précédent**, et une baisse du bien-être psychologique n'était observée dans deux essais qu'à partir de **5 chocs ou plus**. Chez les porteurs très âgés (enquête suédoise 80–94 ans, BMC Geriatrics 2018), l'anxiété était nettement plus fréquente après choc (**24 % contre 10 %**).
- **Prévalence consolidée (Ghezzi 2023 — 109 études, 39 954 porteurs de DAI) :**
  - **anxiété cliniquement significative chez environ 23 %** (pic autour de **30 %** la première année) ;
  - **dépression chez 15 %** ;
  - **trouble de stress post-traumatique (TSPT) chez environ 12 %** ;
  - la survenue de chocs **quadruple environ le risque d'anxiété (OR 3,92)** et presque double celui de dépression (**OR 1,87**) ;
  - aucune différence entre DAI en prévention primaire et secondaire ; anxiété plus souvent rapportée chez les femmes ; certitude jugée faible (études majoritairement observationnelles).
- **Stress post-traumatique après un infarctus (Edmondson 2012 — 24 études) :** des symptômes de TSPT apparaissent chez environ **12 %** des patients après un syndrome coronarien aigu (**4 %** par entretien clinique contre **16 %** par questionnaire), avec une association à un risque environ **doublé** de nouveaux événements cardiaques ou de décès (résultat reposant sur 3 études seulement).
- **Programmes en ligne testés chez les porteurs de DAI :**
  - **ICD-FORUM (Allemagne, 118 patients) :** programme de TCC en ligne sur 6 semaines **formellement neutre** sur son critère principal composite à 6 semaines (p = 0,50) et 1 an (p = 0,29), avec abandon presque doublé dans le bras intervention (30,5 % vs 16,9 % ; voir tableau d'intégrité ci-dessus) ;
  - **WEBCARE (Pays-Bas, 289 patients) :** programme de résolution de problèmes en ligne sans bénéfice démontré ;
  - une revue 2025 des traitements du TSPT après événement médical juge les preuves encore préliminaires.
- Si la peur des chocs ou des alertes (y compris sur montre connectée) vous pèse, parlez-en à votre centre de rythmologie et à votre médecin traitant.`,
    },
    {
      headingFr: 'Où trouver du soutien en France (et numéros d’urgence)',
      bodyMarkdownFr: `### En cas d'urgence psychologique

- **Les idées suicidaires constituent une urgence.**
- Appelez le **3114** (numéro national de prévention du suicide), **gratuit, confidentiel, accessible 24 h/24 et 7 j/7**, assuré par des infirmiers et psychologues formés — pour vous-même ou pour un proche. En cas de danger imminent, appelez le **15 (SAMU)**, le **112** ou le **114** (par SMS).

### Parcours remboursés en France (vérifiés au 25 novembre 2026)

Les tarifs et règles pouvant évoluer, vérifiez toujours votre situation auprès de l'Assurance Maladie (ameli.fr) ou de votre CPAM :

- **Mon soutien psy (séances de psychologue) :**
  - jusqu'à **12 séances par année civile** avec un psychologue conventionné (1 séance d'évaluation + jusqu'à 11 séances de suivi) ;
  - tarif conventionné de **50 € par séance**, remboursé à **60 %** (**30 €**) par l'Assurance Maladie, le reste étant généralement pris en charge par votre mutuelle ;
  - **aucune ordonnance médicale nécessaire :** vous pouvez prendre rendez-vous directement via l'annuaire officiel **monsoutienpsy.ameli.fr** ou passer par votre médecin ;
  - **Indications et exclusions :** réservé à l'anxiété ou la dépression **légère à modérée** ; il **exclut** le risque suicidaire, les formes sévères, les personnes déjà suivies en psychiatrie et les titulaires d'une **ALD psychiatrique** (ameli.fr ne mentionnant qu'une ALD psychiatrique, une ALD cardiaque 5 ou 13 ne paraît pas constituer une exclusion — lecture de la page à faire confirmer si besoin) ;
  - *Évolution prévue :* la loi du **30 décembre 2025** prévoit l'extension du **tiers payant** (sans avance de frais) à toutes les séances Mon soutien psy, dans l'attente de son décret d'application (non publié lors de la vérification du 3 juillet 2026).
- **Psychiatre :** à partir de **26 ans**, passer par votre **médecin traitant** préserve le remboursement normal (consultation secteur 1 à **55 €**, dont **36,50 €** remboursés ; hors parcours coordonné, le tarif peut atteindre **61 €** avec seulement **13 €** remboursés). Les jeunes de **16 à 25 ans** disposent d'un accès direct.
- **CMP (centre médico-psychologique) :** structures publiques réunissant psychiatres et psychologues, avec consultations prises en charge par l'Assurance Maladie — voie privilégiée (avec le médecin traitant et le psychiatre) en cas de **dépression sévère**.
- **Réadaptation cardiaque (SMR cardiovasculaire) et associations :** l'accompagnement psychologique fait partie intégrante des programmes de SMR (pris en charge à 100 %), et les groupes de parole d'associations vérifiées (AVEC, APODEC, ASPIC — voir l'article « Réseau de soins en France ») aident à rompre l'isolement.

*Repère comparatif (Royaume-Uni) :* la British Heart Foundation (BHF) oriente vers *NHS Talking Therapies* (auto-inscription en Angleterre), la ligne infirmière *BHF Heart Helpline* et sa communauté en ligne.`,
    },
  ],
  relatedArticleSlugs: [
    'vivre-avec-insuffisance-cardiaque',
    'readaptation-cardiaque-et-activite-physique',
    'soins-de-support-et-anticipation',
    'dispositifs-cardiaques-dai-crt',
    'arythmies-ventriculaires-et-antiarythmiques',
    'antiplaquettaires-bitherapie-et-protection-gastrique',
    'sel-et-liquides-insuffisance-cardiaque',
    'montres-connectees-et-capteurs-ic',
    'essais-cliniques-cles',
    'medicaments-effets-secondaires-suivi',
    'vivre-avec-insuffisance-cardiaque-en-france',
    'reseau-de-soins-et-aides-sociales-france',
  ],
  sources: [
    {
      label: 'Basile et al. (2023) & HFA-ESC Position Paper (2020)',
      detail:
        'Prévalence de la dépression dans l’IC (20–30 %, > 50 % en IC avancée), association pronostique (OR 2,2–2,5), dépistage PHQ-2/PHQ-9 et approches non médicamenteuses.',
    },
    {
      label: 'Revue Cochrane (Ski et al., 2024), Jeyanantham (2017), Freedland (2015) & Lundgren (2016) / Johansson (2019)',
      detail:
        'Psychothérapies et TCC (21 essais Cochrane, 2 591 participants : dépression SMD −0,36, anxiété SMD −0,57, mortalité RR 0,81 ; limites de la TCC en ligne dans l’IC).',
    },
    {
      label: 'Essais Hopeful Heart (2021), CASA (2018, texte intégral), TEACH (2025), IsHak (2024) & PAL-HF (2017, texte intégral)',
      detail:
        'Soins collaboratifs coordonnés par infirmier, activation comportementale et audit d’intégrité des registres (DRKS00020824, NCT01739686, NCT01589913, NCT01681771, NCT01589601).',
    },
    {
      label: 'Essais SADHART-CHF (2010), MOOD-HF (JAMA 2016, texte intégral et supplément) & O’Connor (2008)',
      detail:
        'Sertraline et escitalopram vs placebo + soutien infirmier ; sous-groupe ischémique (p interaction 0,97), exclusions QT/classe IA-III, QTc et confusion par indication.',
    },
    {
      label: 'Consensus ESC 2025 (santé mentale et MCV), Gheysens (2024), RCP ANSM Seroplex (2026) / Seropram (2025), ANSM (2022) & MHRA (2011)',
      detail:
        'Choix des antidépresseurs dans l’IC, contre-indication citalopram/escitalopram + amiodarone/sotalol, plafonds de doses, interaction métoprolol, risque d’hyponatrémie (OR 3,16) et saignements.',
    },
    {
      label: 'Ghezzi (2023), Edmondson (2012), Tomzik (2015), BMC Geriatrics (2018) & ICD-FORUM (2019) / WEBCARE',
      detail:
        'Anxiété (23 %), dépression (15 %) et TSPT (12 %) chez les porteurs de DAI (OR 3,92 après chocs), TSPT post-SCA et neutralité des programmes en ligne dédiés.',
    },
    {
      label: 'service-public.gouv.fr (F34917), ameli.fr (Mon soutien psy, sept. 2026) & sante.fr (3114)',
      detail:
        'Conditions 2026 de Mon soutien psy (12 séances, 50 €, 60 %, sans ordonnance), parcours psychiatre, CMP et numéro national 3114.',
    },
  ],
  disclaimerType: 'medical',
};
