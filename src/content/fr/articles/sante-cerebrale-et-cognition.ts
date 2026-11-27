import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'sante-cerebrale-et-cognition',
  sourceWikiPath: 'wiki/concepts/brain-health-and-cognition.md',
  titleFr: 'Santé cérébrale et cognition dans l’insuffisance cardiaque',
  category: 'comorbidites',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'troubles-cognitifs',
    'sante-cerebrale',
    'memoire',
    'demence',
    'syndrome-confusionnel',
    'depistage',
    'moca',
    'mini-cog',
    'autosurveillance',
    'fibrillation-atriale',
    'anticoagulation',
    'sacubitril-valsartan',
    'pontage',
    'exercice',
    'icfer',
  ],
  aliases: [
    'Troubles cognitifs',
    'Troubles de la mémoire',
    'Brouillard cérébral',
    'Cognition et insuffisance cardiaque',
    'Consultation mémoire',
    'Syndrome confusionnel',
    'Délirium post-opératoire',
    'Mini-Cog',
    'MoCA',
    'MMSE',
  ],
  linkedModules: ['core', 'atrialFibrillation', 'sleepApnoea'],
  plainSummaryFr:
    "Les difficultés de mémoire, de concentration ou d'organisation concernent environ quatre personnes sur dix vivant avec une insuffisance cardiaque, souvent de façon discrète et inaperçue lors d'une consultation rapide. Plusieurs facteurs peuvent y contribuer : un débit sanguin cérébral diminué, une tension trop basse, une fibrillation atriale, des petits caillots silencieux, une baisse du sodium, une apnée du sommeil ou une dépression. Certains troubles s'améliorent une fois la surcharge en eau corrigée, et un test réalisé à distance d'une hospitalisation reflète mieux votre état habituel. Les tests courts (Mini-Cog, MoCA, MMSE) servent à repérer un besoin d'évaluation plus poussée, jamais à poser seuls un diagnostic de démence ; en France, votre médecin traitant peut vous orienter vers une consultation mémoire. Au quotidien, les aides pratiques — schéma de prise simplifié, pilulier hebdomadaire, plan d'action écrit et venue accompagnée en consultation — sont les mesures les plus utiles pour sécuriser votre suivi.",
  keyTakeawaysFr: [
    "Des difficultés de mémoire, d'attention ou d'organisation touchent environ 4 personnes sur 10 avec insuffisance cardiaque ; les signaler à votre équipe permet d'adapter votre suivi.",
    "Un test cognitif doit être réalisé au calme, à distance d'une décompensation ou d'une hospitalisation, et après recherche des causes réversibles (sodium bas, thyroïde, dépression, apnée du sommeil, médicaments sédatifs).",
    "Aucun médicament de l'insuffisance cardiaque n'a démontré d'amélioration cognitive, et le sacubitril/valsartan (Entresto) n'a pas montré d'effet délétère sur la cognition sur 3 ans dans un essai dédié.",
    "Un pilulier hebdomadaire, un plan d'action écrit et la présence d'un proche en consultation protègent efficacement votre observance et votre autonomie.",
  ],
  sections: [
    {
      headingFr: '1. Fréquence et mécanismes : pourquoi le cerveau peut être touché',
      depth: 'patient',
      bodyMarkdownFr: `Il est fréquent, avec une insuffisance cardiaque, de ressentir que la mémoire, la concentration ou la planification sont moins fluides qu'auparavant. Ces difficultés sont souvent légères, parfois mises sur le compte de la fatigue ou de l'âge, et passent fréquemment inaperçues lors d'une consultation courte.

Le cerveau a besoin d'un apport sanguin stable et régulier. Plusieurs mécanismes peuvent s'additionner — la plupart des connaissances proviennent d'études observationnelles qui décrivent des associations sans désigner une cause unique chez une personne donnée :

| Mécanisme | Ce qui se passe | Lien utile dans l'application |
|---|---|---|
| **Bas débit cardiaque / moindre perfusion cérébrale** | L'insuffisance cardiaque peut atténuer l'autorégulation du débit sanguin cérébral ; une FEVG basse et un débit réduit s'accompagnent de scores plus bas, surtout si la tension artérielle est également basse. | *Fraction d'éjection* |
| **Tension artérielle basse ou chute brutale** | Une pression systolique basse chez des patients âgés hospitalisés est associée à une cognition plus fragile. Toutefois, selon le consensus HFA 2025, une tension basse **bien tolérée** ne justifie pas à elle seule de réduire les traitements vitaux de l'IC ; votre équipe réévalue d'abord les antihypertenseurs non cardiaques et les diurétiques. | *Tension artérielle et insuffisance cardiaque* |
| **Fibrillation atriale (FA) et micro-caillots** | La FA réduit la régularité de la perfusion cérébrale et favorise de petits emboles ou micro-saignements ; l'IC favorise aussi des infarctus cérébraux silencieux. | *Fibrillation atriale et insuffisance cardiaque* |
| **Congestion veineuse** | Une pression veineuse élevée pourrait contribuer à des lésions de la substance blanche ; dans une petite étude, les fonctions cognitives se sont améliorées après décongestion. | *Escalade et résistance aux diurétiques* |
| **Baisse du sodium et autres déséquilibres biologiques** | L'hyponatrémie est liée aux chutes et aux troubles cognitifs ; le manque d'oxygène, l'anémie et l'insuffisance rénale peuvent aussi provoquer une confusion. | *Maladie rénale et insuffisance cardiaque* |
| **Dépression** | Lien bidirectionnel avec la cognition ; la dépression peut elle-même mimer des troubles de la mémoire. | *Dépression et santé émotionnelle* |
| **Apnée du sommeil et facteurs vasculaires** | L'apnée du sommeil, l'hypertension, le diabète, le tabac et l'âge augmentent la vulnérabilité cérébrale. | *Apnée du sommeil et insuffisance cardiaque* |
| **Nutrition et médicaments** | Carence en vitamine B1 (thiamine), carence en fer, albumine basse, ou médicaments sédatifs et anticholinergiques pouvant entraîner une confusion. | *Carence en fer et fer intraveineux* |

Dans la cardiomyopathie ischémique, la maladie athéroscléreuse touche souvent à la fois les artères du cœur et celles du cerveau (carotides et petits vaisseaux), rendant une composante vasculaire plausible, même si les études lues ne séparent pas les chiffres selon la cause ischémique ou non ischémique.`,
    },
    {
      headingFr: '2. Repérage, consultation mémoire en France et causes réversibles',
      depth: 'patient',
      bodyMarkdownFr: `### Pourquoi le repérage compte au quotidien

L'autosurveillance de l'insuffisance cardiaque est exigeante : titration progressive de quatre piliers médicamenteux, pesée quotidienne, repérage d'une prise de poids rapide, suivi des prises de sang. Même une gêne légère d'organisation ou d'attention peut fragiliser cet équilibre. Dans les recommandations ESC 2026 sur l'IC avancée, l'impossibilité de suivre le traitement (par exemple en cas de démence) est une contre-indication absolue à la transplantation cardiaque, et les troubles cognitifs figurent parmi les contre-indications relatives à une assistance LVAD. C'est aussi une raison pour aborder tôt vos souhaits de soins (voir *Soins de support et anticipation*).

### Les tests de repérage (Mini-Cog, MoCA, MMSE)

| Test | Durée | Ce qu'il explore | Précision dans l'IC |
|---|---|---|---|
| **Mini-Cog** | Quelques minutes | Rappel de 3 mots + dessin de l'horloge (score 0 à 5 ; positif si ≤ 2) | Peu influencé par le niveau d'études ; cotation de l'horloge en partie subjective. Cité par la HFSA 2024 lorsque des signes d'appel existent. |
| **MoCA** | 10 à 15 min | Fonctions exécutives, attention, mémoire | Au seuil usuel < 26 : bonne sensibilité (0,79) mais faible spécificité (0,40) dans l'IC ; au seuil < 25 : 0,64 / 0,66. Des seuils plus bas (22) sont discutés chez les patients cardiaques âgés. |
| **MMSE** | 10 à 15 min | Fonctionnement global ; moins sensible aux troubles exécutifs et légers | Meilleur seuil dans l'IC autour de < 28 (0,70 / 0,66) ; le seuil usuel < 24 manque davantage de cas. |

- **Un test court ne pose pas un diagnostic :** comparés à un bilan neuropsychologique complet, le MoCA et le MMSE classent mal environ **1 patient sur 3**. Un score abaissé signifie qu'il faut approfondir l'évaluation, pas qu'il s'agit d'une démence.
- **Le bon moment pour tester :** la **HAS (2018)** recommande d'évaluer la cognition **à distance de tout épisode aigu**, après avoir vérifié la vue, l'audition et la vigilance, et met en garde contre un surdiagnostic juste après une hospitalisation. Dans la petite étude CogImpair-HF (20 patients), les performances cognitives lors d'une décompensation s'amélioraient après environ deux semaines de traitement.
- **Rechercher d'abord les causes réversibles :** dépression, trouble thyroïdien, sodium bas, apnée du sommeil non traitée, médicaments sédatifs ou anticholinergiques.

### Le parcours en France

Votre **médecin traitant** est le premier interlocuteur : le bilan passe en revue vos traitements au long cours et recueille l'avis d'un proche. En cas de doute, il peut vous orienter vers une **consultation mémoire**, qui précise la cause et organise l'accompagnement adapté (ergothérapeute, orthophoniste, psychologue, équipes spécialisées à domicile, répit des aidants). La HAS cite plusieurs tests validés en français (MMSE, MoCA, GP-Cog, 6-CIT, MIS, test des 5 mots de Dubois, Codex) sans imposer un test unique en médecine générale.`,
    },
    {
      headingFr: '3. Syndrome confusionnel à l’hôpital et aides pratiques au quotidien',
      depth: 'patient',
      bodyMarkdownFr: `### Le syndrome confusionnel (délirium) à l'hôpital ou après chirurgie

Le syndrome confusionnel est une confusion d'apparition brutale et fluctuante déclenchée par une maladie aiguë, une opération, un manque d'oxygène, une baisse du sodium, une infection ou un médicament. Dans l'insuffisance cardiaque, il peut survenir lors d'une décompensation ou d'une chute rapide de tension.

- Après un **pontage coronarien**, environ **1 personne sur 5** présente un épisode de confusion durant la première semaine.
- Les troubles cognitifs sont nettement moins fréquents à 6 mois que dans les tout premiers jours, mais peuvent réapparaître à plus long terme sous l'effet combiné de l'âge et de la maladie vasculaire.
- **Comment vos proches peuvent aider :** signaler à l'équipe chirurgicale ou hospitalière toute difficulté de mémoire existante avant une intervention, et alerter rapidement si une confusion inhabituelle apparaît.

### Les aides pratiques qui font la différence

| Aide concrète | Pourquoi elle aide |
|---|---|
| **Schéma simplifié (moins de prises par jour si possible)** | Réduit le risque d'oubli à discuter avec votre cardiologue |
| **Pilulier hebdomadaire et rappels sur téléphone** | Soutient la mémoire au quotidien |
| **Plan d'action écrit** (poids, symptômes, numéros à appeler) | Évite de devoir tout retenir en situation de stress |
| **Venir accompagné(e) en consultation** | Deuxième paire d'oreilles ; le témoignage d'un proche fait partie du bilan mémoire en France |
| **Revue d'ordonnance avec votre pharmacien** | Repère les médicaments sédatifs ou anticholinergiques et simplifie les prises |
| **Reformuler les consignes avec vos propres mots** | Permet de vérifier que le plan est clair avant de quitter le cabinet |
| **Soutien et répit pour les aidants** | Les proches portent une part importante de l'organisation |`,
    },
    {
      headingFr: '4. Données scientifiques : traitements cardiaques, essais et recommandations',
      depth: 'evidence',
      bodyMarkdownFr: `### Épidémiologie

- **Cannon et coll. (2017 ; 26 cohortes d'IC, n = 4 176, résumé) :** prévalence groupée des troubles cognitifs de **43 % (IC 95 % 30 %–55 %)** ; surrisque par rapport aux personnes sans IC de **OR 1,67 (1,15–2,42)**, avec déclin plus rapide en prospectif (FEVG et tests hétérogènes).
- **Cohorte ambulatoire d'Oud et coll. (âge médian 79 ans, majorité NYHA I–II) :** 36 % avaient un score MoCA ≤ 22, non reconnu par les cliniciens dans **48 %** des cas.
- **Hawkins et coll. (2014 ; 106 patients ambulatoires en IC, majorité NYHA II–III, FEVG ≤ 40 %, texte intégral) :** lors d'une batterie neuropsychologique complète, **50 %** présentaient une atteinte dans au moins deux domaines.
- **Cardiovascular Health Study (4 864 participants, 496 IC incidentes) :** accélération du déclin cognitif après la survenue de l'IC. En hospitalisation pour IC aiguë, les troubles cognitifs constituent un marqueur indépendant de mortalité hospitalière.

### Effet des traitements cardiaques sur la cognition

- **Sacubitril/valsartan (*Entresto*) — essai PERSPECTIVE (2022, résumé de société savante) :** 592 patients ≥ 60 ans avec **FEVG > 40 %** (démence et MMSE < 24 exclus), comparant sacubitril/valsartan au valsartan sur 3 ans. **Aucune différence** sur le score cognitif global (écart −0,0180 ; p = 0,74) ; la charge amyloïde en TEP tendait même à être légèrement inférieure sous sacubitril/valsartan (−0,0292 ; p = 0,058, non significatif). *Applicabilité : extrapolée à l'ICFER* (aucun patient avec FEVG ≤ 40 % inclus ; article évalué par les pairs non consulté en texte intégral).
- **Aucun médicament d'IC n'a prouvé d'amélioration cognitive en essai randomisé.** De petites études observationnelles rapportent de meilleurs scores après décongestion, resynchronisation (CRT) ou transplantation.
- **Fibrillation atriale — anticoagulation et contrôle du rythme :** l'anticoagulation est prescrite pour prévenir l'AVC, non pour un effet cognitif supplémentaire.
  - **BRAIN-AF (*Nat Med* 2026 ; 1 235 patients, âge moyen 53 ans, faible risque d'AVC, IC exclue, FEVG moyenne 60 %, texte intégral) :** rivaroxaban 15 mg vs placebo n'a **pas** réduit le déclin cognitif, les AVC ni les AIT (21,3 % vs 20,2 % ; **HR 1,10 ; IC 95 % 0,86–1,40** ; arrêté pour futilité). *Applicabilité : extrapolée* (IC exclue, dose non standard) ; ne remet nullement en cause l'anticoagulation en cas de FA avec ICFER.
  - **GIRAF (200 patients ≥ 70 ans avec FA, 40–49 % d'IC chronique, FEVG non rapportée, texte intégral) :** aucune différence cognitive entre dabigatran et warfarine bien équilibrée sur 2 ans après correction pour tests multiples.
  - **Fong et coll. (2023 ; 342 624 patients en FA, méta-analyse observationnelle, texte intégral) :** AOD associés à un peu moins de démence (**HR 0,88 ; 0,80–0,98**), mais effet non significatif dans les études européennes (HR 0,96 ; 0,81–1,14) et chez les ≥ 75 ans.
  - **Guo et coll. (2024 ; 14 études, 193 830 patients, résumé) :** contrôle du rythme associé à moins de démence que le contrôle de fréquence (HR 0,74 ; 0,62–0,89) et ablation associée à HR 0,62 (0,56–0,68), avec un biais de sélection probable vers des patients en meilleur état général.
- **Revascularisation et procédures cardiaques :**
  - **Greaves et coll. (2019 ; 215 études, 91 829 pontages coronariens, âge moyen 65 ans, texte intégral) :** troubles cognitifs chez **19 %** avant l'opération, **43 %** dans les 4 premiers jours, **25 %** à 4 mois, **19 %** à 6 mois et **25 %** à 1 an (environ 38–39 % à 1–5 ans dans un plus petit nombre d'études). Délirium dans la première semaine : **18 %** (24 % avec un outil dédié). Absence de groupe témoin et de données de FEVG.
  - **Stavridis et coll. (2024 ; 10 études non randomisées, 12 015 patients, texte intégral) :** moins de délirium après TAVI qu'après chirurgie valvulaire (OR 0,35 ; 0,26–0,48), sans différence sur les AVC ni la mortalité à 30 jours.
- **Exercice et réadaptation (Peng et coll. 2023 ; 6 petites études en IC, FEVG moyenne 23–46 %, résumé) :** amélioration faible à modérée de la cognition globale (DMS 0,44 ; 0,01–0,87), avec forte hétérogénéité (*applicabilité partielle*).

### Comparatif des recommandations (au 2026-11-26)

| Question | ESC 2026 IC | NICE NG106 (2025) | Déclaration HFSA 2024 | HAS 2018 (France) |
|---|---|---|---|---|
| **Évaluer la cognition ?** | Non retrouvé dans les sections lues | Inclus dans le suivi minimal (1.8.1) **[texte intégral]** | Guetter les signes d'appel ; Mini-Cog si présents **[résumé]** | Pas de test unique recommandé en soins primaires ; diagnostic clinique **[texte intégral]** |
| **Quand tester ?** | Non retrouvé | Lors du suivi de routine | Non précisé dans le résumé | À distance d'un épisode aigu ; prudence après hospitalisation **[texte intégral]** |
| **Prise en charge et IC avancée** | Greffe : incapacité à suivre le traitement (ex. démence) = contre-indication absolue ; LVAD : troubles cognitifs = contre-indication relative (§8 **[texte intégral]**) | Revue des traitements lors du suivi | Traiter les causes, optimiser les traitements, adapter l'autosurveillance | Médecin traitant coordonnateur, consultation mémoire, soutien aux aidants |

### Limites des preuves

- La majorité des données de prévalence, de mécanismes et d'association (ablation, AOD) sont observationnelles et ne prouvent pas de lien causal.
- Aucun essai randomisé n'a évalué un critère cognitif spécifiquement dans l'ICFER ischémique (PERSPECTIVE excluait les FEVG ≤ 40 %, BRAIN-AF excluait l'IC, GIRAF ne rapportait pas la FEVG).
- Plusieurs sources ont été lues au niveau du résumé (HFSA 2024, Cannon 2017, Guo 2024, Peng 2023) ou d'un compte rendu de société savante (PERSPECTIVE). Les données sur les pontages n'ont pas de groupe témoin.`,
    },
  ],
  relatedArticleSlugs: [
    'goutte-bpco-thyroide-et-autres-comorbidites',
    'depression-et-sante-emotionnelle',
    'observance-et-oubli-de-dose',
    'horaires-de-prise-et-routine-medicaments',
    'fibrillation-atriale-insuffisance-cardiaque',
    'tension-arterielle-insuffisance-cardiaque',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'readaptation-cardiaque-et-activite-physique',
    'revascularisation-pontage-stents',
    'sarcopenie-perte-musculaire-et-fragilite',
    'isolement-social-et-lien-social',
    'soins-de-support-et-anticipation',
  ],
  sources: [
    { label: 'Cannon et al. (2017, résumé), Hawkins et al. (2014, texte intégral) et déclaration HFSA 2024 (résumé)', detail: 'Prévalence groupée des troubles cognitifs dans l’IC (43 %, OR 1,67) et performance des tests Mini-Cog, MoCA et MMSE' },
    { label: 'Ventoulis et al. (2021, texte intégral partiel), HFA 2025 (pression artérielle basse) et Sato et al. (2025)', detail: 'Mécanismes hémodynamiques, hyponatrémie, congestion et amélioration après décongestion' },
    { label: 'PERSPECTIVE (2022, résumé ACC), BRAIN-AF (Nat Med 2026), GIRAF, Fong et al. (2023) et Guo et al. (2024)', detail: 'Cognition sous sacubitril/valsartan (FEVG > 40 %), anticoagulation et contrôle du rythme dans la fibrillation atriale' },
    { label: 'Greaves et al. (2019), Stavridis et al. (2024) et Peng et al. (2023)', detail: 'Délirium et cognition après pontage coronarien ou TAVI, et effet de l’exercice physique' },
    { label: 'HAS (2018), NICE NG106 (2025), HFA (2020) et ESC 2026 IC (section 8)', detail: 'Repérage à distance d’un épisode aigu, parcours consultation mémoire en France et critères d’éligibilité aux thérapies avancées' },
  ],
  disclaimerType: 'medical',
};
