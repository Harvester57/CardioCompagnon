import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'soins-de-support-et-anticipation',
  sourceWikiPath: 'wiki/concepts/palliative-care-and-advance-planning.md',
  titleFr: 'Soins de support, soins palliatifs et anticipation',
  category: 'quotidien',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'soins-palliatifs',
    'soins-de-support',
    'directives-anticipées',
    'personne-de-confiance',
    'loi-claeys-leonetti',
    'lois-2026',
    'emsp',
    'had',
    'usp',
    'masp',
    'désactivation-dai',
    'soulagement-symptômes',
    'aidants',
    'france',
  ],
  aliases: [
    'Soins palliatifs',
    'Soins d’accompagnement',
    'Soins de support',
    'Anticipation des soins',
    'Directives anticipées',
    'Personne de confiance',
    'Loi Claeys-Leonetti',
    'EMSP',
    'HAD',
    'LISP',
    'USP',
    'MASP',
    'Plan personnalisé d’accompagnement',
    'Sédation profonde et continue',
    'Désactivation du DAI',
    'Advance care planning',
  ],
  linkedModules: ['core', 'device'],
  plainSummaryFr:
    "Les « soins palliatifs et d'accompagnement » sont souvent confondus avec les seuls soins de fin de vie. Dans l'insuffisance cardiaque, il s'agit avant tout d'un soutien supplémentaire pour soulager les symptômes, accompagner le moral et les proches et clarifier vos décisions, en parallèle de votre traitement cardiologique complet et à n'importe quel stade. Ils ne remplacent ni les médicaments ni les dispositifs et ne raccourcissent pas la survie. D'après les essais et une revue parapluie de 2026 (Kim et al., 19 revues), ils réduisent les hospitalisations et améliorent modestement la qualité de vie, l'humeur et la formalisation des souhaits, avec des bénéfices plus nets chez les patients très symptomatiques (alors que deux essais ambulatoires par téléphone, CASA et ENABLE CHF-PC, sont restés neutres sur leur critère principal). En France, les directives anticipées opposables, la personne de confiance, l'HAD, les équipes mobiles (EMSP) et les lits dédiés (LISP, USP) reposent sur la loi Claeys-Leonetti (2016), élargie vers un accompagnement précoce par la loi n° 2026-404 du 26 mai 2026 ; mentionner explicitement votre DAI dans vos directives comble un manque majeur, car seulement 1 % des directives européennes l'évoquent.",
  sections: [
    {
      headingFr: 'Ce que disent les recommandations internationales',
      bodyMarkdownFr: `- **Pour qui :** selon le document de position de la Heart Failure Association (HFA 2020), toute personne vivant avec une insuffisance cardiaque devrait pouvoir bénéficier d'une approche de soins de support / palliatifs quel que soit son stade, **en parallèle** du traitement de fond recommandé.
- **Anticipation des soins (*Advance Care Planning*) :**
  - à envisager chez tout patient en insuffisance cardiaque avancée (HFA 2020) ;
  - recommandée en **Classe I** dans l'insuffisance cardiaque avancée par l'**ESC 2026**, conjointement avec une équipe intégrée de soins palliatifs ;
  - encouragée dès que possible par le guide patient ESC 2026.
- **Position britannique (NICE NG106, 2025) :** si les symptômes s'aggravent malgré un traitement spécialisé optimal, les besoins palliatifs doivent être discutés et évalués. NICE recommande de **ne pas** recourir à des scores pronostiques pour décider d'une orientation et de ne pas prescrire d'oxygénothérapie au long cours à domicile pour l'insuffisance cardiaque seule.
- **Position américaine (ACC 2024) :** les soins palliatifs font partie intégrante de la prise en charge tout au long de la maladie, avec des discussions régulières sur les objectifs de soins.
- **Avant assistance circulatoire ou greffe :** la HFA recommande une consultation systématique de soins palliatifs lors du bilan d'une assistance ventriculaire (LVAD) ou d'une transplantation cardiaque.

### Deux niveaux de soins palliatifs

| Niveau | Intervenants | Champ d'action |
|---|---|---|
| **Approche palliative (primaire)** | Tous les professionnels de l'insuffisance cardiaque et des soins primaires | Soulagement des symptômes, alignement des soins sur vos préférences, soutien psychosocial, coordination |
| **Soins palliatifs spécialisés** | Équipes dédiées (en France : **EMSP**, **USP**, **HAD** à compétence palliative) | Symptômes complexes, détresse réfractaire, décisions éthiques ou d'objectifs de soins délicates |

Les signaux pouvant justifier l'appel à une équipe spécialisée incluent : symptômes difficiles à soulager, détresse psychologique ou existentielle, hospitalisations répétées, chocs appropriés de DAI de plus en plus fréquents, réflexion sur la désactivation ou le non-remplacement d'un DAI, déclin fonctionnel ou désaccord familial sur les objectifs de soins. L'accès reste hétérogène en Europe : l'atlas HFA cité en 2020 ne recensait des unités dédiées à l'IC avancée que dans **10 pays sur 42**.`,
    },
    {
      headingFr: 'Essais cliniques et synthèses (2017–2026) : des résultats nuancés',
      bodyMarkdownFr: `Trois grands essais randomisés américains et trois synthèses publiées entre 2020 et 2026 dessinent un tableau plus nuancé que PAL-HF seul : **les soins palliatifs apportent le bénéfice le plus net chez les patients les plus symptomatiques grâce à un suivi interdisciplinaire rapproché**, tandis que des programmes ambulatoires téléphoniques moins intensifs chez des patients ayant une meilleure qualité de vie initiale ont manqué leur critère principal.

### Les trois essais majeurs

- **PAL-HF (2017, Duke, monocentrique ; texte intégral et registre audités) :** **150 patients** hospitalisés ou récemment sortis en IC très avancée (**48,0 % ischémiques**, **54,7 % FEVG ≤ 40 %**, 45,3 % > 40 %, NT-proBNP moyen > 10 000 pg/mL, **29 % de mortalité à 6 mois**), randomisés entre soins usuels + équipe interdisciplinaire (infirmier spécialisé et médecin de soins palliatifs) et soins usuels seuls.
  - **Co-critères principaux à 6 mois :** KCCQ global **+9,49 points** (IC 95 % 0,94 à 18,05, p = 0,030) et FACIT-Pal **+11,77 points** (0,84 à 22,71, p = 0,035).
  - **Critères secondaires :** dépression (**HADS-D −1,94**, p = 0,020), bien-être spirituel (**FACIT-Sp +3,98**, p = 0,027), et anxiété non ajustée (HADS-A −1,83, p = 0,048) **devenant non significative après ajustement sur l'âge et le sexe (p = 0,063)**. Réhospitalisations IC (30,7 % vs 29,3 %) et mortalité à 6 mois (30,7 % vs 26,7 %) sans différence.
  - **Limites d'intégrité :** l'effectif prévu (200) a été **réduit à 150 en cours d'essai** par le DSMB en janvier 2015 après analyse intermédiaire (sans ajustement du seuil alpha rapporté) ; deux co-critères testés à alpha = 0,05 non corrigé ; **seulement ~54 %** des participants disposaient de questionnaires à 6 mois (29 % décédés, 12 % perdus/retraits) ; KCCQ initial déjà supérieur de 4,7 points dans le bras palliatif (36,1 vs 31,4) ; HADS débuté à la semaine 2 ; intervention délivrée par un seul binôme dans un centre unique.
- **CASA (2018, 3 réseaux du Colorado ; texte intégral audité) :** **314 patients ambulatoires** (317 randomisés, 3 exclusions) avec IC chronique symptomatique (KCCQ initial 48,6 vs 45,3 ; **45,2 % ischémiques** ; **44,1 % FEVG < 40 %**, 15,4 % 40–49 %, 40,5 % ≥ 50 % ; 61,8 % NYHA III–IV ; **47,5 % PHQ-9 ≥ 10**), suivis par téléphone (infirmier + travailleur social + revue hebdomadaire cardio/palliative).
  - **Critère principal (KCCQ à 6 mois) : formellement neutre** (+5,5 vs +2,9 ; écart **+2,6 points**, IC 95 % −1,3 à 6,6 ; p = 0,19 ; signal exploratoire ICFER d = 0,28 vs ICFEP −0,03 sans p d'interaction).
  - **Critères secondaires non corrigés :** amélioration de la dépression à 6 mois (PHQ-9 −1,4 pt, d = −0,29, p = 0,02) et 12 mois (d = −0,36, p = 0,006) ; fatigue améliorée à 6 mois (d = −0,30, p = 0,02) **mais non maintenue à 12 mois** (p = 0,16) ; anxiété neutre (p = 0,09) ; pas d'effet sur la douleur, la dyspnée, les hospitalisations (p = 0,61) ni la mortalité à 12 mois (10 vs 13, p = 0,52). Limites : critères d'inclusion assouplis en cours d'étude, 21 % de données manquantes, ~23 contacts téléphoniques sans contrôle d'attention.
- **ENABLE CHF-PC (2020, 2 centres américains ; abstract, résultats du registre NCT et article baseline 2025) :** **415 patients** ≥ 50 ans en classe NYHA III–IV (96,6 % NYHA III ; **FEVG moyenne 41,1 %**, **52,9 % < 50 %** ; part ischémique non publiée dans les sources consultées ; KCCQ initial **52,6**, relativement élevé), bénéficiant d'une consultation palliative en présentiel puis de 6 séances téléphoniques hebdomadaires et d'un suivi mensuel.
  - **Critères principaux à 16 semaines : formellement neutres sur toute la ligne** — KCCQ (+1,6, d = 0,07), FACIT-Pal-14 (+1,2, d = 0,12), HADS anxiété (d = −0,02) et dépression (d = −0,09).
  - **Critère secondaire :** amélioration cliniquement pertinente de l'intensité et du retentissement de la **douleur** (PROMIS), sans différence sur les jours d'hospitalisation (1,51 vs 1,29), les urgences (0,17 vs 0,19) ou les décès (8/208 vs 12/207). *Limites :* effet plafond probable lié au bon état de départ, données manquantes élevées, texte intégral primaire inaccessible (résultat douleur à considérer comme provisoire).

### Données agrégées (revues 2020–2026)

- **Revue parapluie Kim et al. (2026, *Heart Failure Reviews*, texte intégral) :** synthétise **19 revues systématiques** (11 méta-analyses, **104 études primaires**) selon une grille GRADE modifiée :
  - **Certitude modérée :** **réduction des hospitalisations** (8 revues sur 10 positives ; **OR 0,56 à 0,67**), **baisse de l'anxiété** (3 revues) et **absence d'effet sur la mortalité** (8 revues sur 9 neutres).
  - **Certitude faible :** gains modestes de **qualité de vie** (14/17 revues positives ; ex. Sebastian 2024 KCCQ **+3,56 points**, Li 2024 SMD 0,30), gains modestes sur la **dépression** (8/10 positives), meilleure **formalisation des directives anticipées** (3/4 positives), sans modification des orientations en hospice.
  - **Certitude très faible / non concluante :** **charge symptomatique globale** (3/5 méta-analyses neutres) et **fardeau des aidants** (évalué dans 1 seule revue et 6 interventions sur 81).
- **Sahlollbey et al. (2020, *Eur J Heart Fail*) :** 10 essais (921 patients, avant ENABLE CHF-PC) montrant moins d'hospitalisations aiguës (**OR 0,56**, IC 95 % 0,33–0,94), un gain modeste de qualité de vie (SMD 0,25) et de symptômes (SMD −0,29), sans impact sur la survie.
- **Yang et al. (2026, *BMJ Support Palliat Care*) :** 20 essais (2 165 patients), moins de réhospitalisations (**RR 0,70**, 4 essais) et mortalité neutre (RR 1,29), mais les tailles d'effet très élevées avancées pour la qualité de vie, l'humeur ou la FEVG (+4,41 %) sont fortement fragilisées par une **hétérogénéité extrême (I² = 95–97 %)** et un risque élevé de biais ; Kim 2026 et Sahlollbey 2020 restent les repères les plus fiables.

### Applicabilité à l'ICFER ischémique stable (FEVG ~35 %) et fréquence des symptômes

| Étude | Population par rapport à l'ICFER ischémique (FEVG ~35 %) | Applicabilité | Principales limites |
|---|---|---|---|
| **PAL-HF 2017** | 150 IC avancée hospitalisée ; 48 % ischémique ; 55 % FEVG ≤ 40 % ; 29 % mortalité à 6 mois ; pré-iSGLT2 | **Indirecte** (stade D très sévère) | Effectif réduit 200 → 150 après regard intermédiaire, ~46 % manquants à 6 mois, écart KCCQ initial 4,7 pts |
| **CASA 2018** | 314 ambulatoires ; 45 % ischémique ; 44 % FEVG < 40 % ; 62 % NYHA III–IV ; pré-iSGLT2 | **Partielle** (FEVG mixte) | Critère principal KCCQ **neutre** (+2,6, p = 0,19), 21 % manquants, pas de contrôle d'attention |
| **ENABLE CHF-PC 2020** | 415 NYHA III–IV (97 % III) ; FEVG moyenne 41,1 % ; part ischémique inconnue ; KCCQ initial 52,6 | **Partielle** | Critères principaux QoL et humeur **neutres** (effet plafond), texte intégral primaire bloqué |
| **Revue parapluie Kim 2026** | 19 revues / 104 études ; FEVG et contextes variés ; pas de sous-groupe ICFER ischémique | **Partielle** | Essais primaires ouverts, attritions élevées, certitude faible à modérée |

*Scénario prudent :* chez un patient ambulatoire stable en ICFER ischémique (FEVG ~35 %) sous quadrithérapie moderne, un accompagnement téléphonique isolé peut n'apporter qu'un gain limité sur le score KCCQ si les symptômes sont déjà contrôlés ; en revanche, aucun signal d'effet délétère sur la survie n'existe, et l'intervention d'une équipe spécialisée devient clairement précieuse dès que symptômes, douleurs, détresse ou hospitalisations s'accumulent.

Dans l'insuffisance cardiaque avancée (HFA 2020), les symptômes restent très fréquents : essoufflement jusqu'à **90 %**, douleur chez **90 %** des patients en classe NYHA IV, dépression ou anxiété chez **plus de 50 %**, fragilité chez environ **45 %** et troubles cognitifs chez **près de la moitié** — raison supplémentaire d'engager les discussions d'anticipation tôt.`,
    },
    {
      headingFr: 'Cadre juridique et structures de soins palliatifs en France (lois 2016 et 2026)',
      bodyMarkdownFr: `*Point de situation vérifié au 25 novembre 2026* à partir de service-public.gouv.fr, has-sante.fr et du CNSPFV (parlons-fin-de-vie.fr) ; les textes consolidés sur Légifrance n'ont pas été consultés directement et plusieurs dispositions de 2026 attendent leurs décrets d'application. En cas de question individuelle, rapprochez-vous de votre équipe médicale, de votre CPAM, de **Santé Info Droits (01 53 62 40 30)** ou d'un conseiller juridique.

### Les trois lois structurantes en France

1. **Loi Claeys-Leonetti (Loi n° 2016-87 du 2 février 2016) :** demeure le socle des droits en fin de vie — **directives anticipées opposables**, **personne de confiance** prioritaire, interdiction de l'**obstination déraisonnable** et droit à la **sédation profonde et continue maintenue jusqu'au décès (SPCMD)**.
2. **Loi n° 2026-404 du 26 mai 2026 (Loi Vidal — égal accès à l'accompagnement et aux soins palliatifs) :** réécrit l'article **L.1110-10** du Code de la santé publique (selon la reproduction du CNSPFV) afin d'ancrer les **soins d'accompagnement et soins palliatifs de façon précoce, active et continue** tout au long du parcours, en parallèle des traitements curatifs — et non réservés à la phase terminale. Elle crée le **plan personnalisé d'accompagnement (PPA)** (modèle national HAS en cours d'élaboration fin novembre 2026), les **maisons d'accompagnement et de soins palliatifs (MASP)**, des rappels périodiques de l'Assurance Maladie dès 18 ans et l'inscription dans **Mon espace santé**.
3. **Loi n° 2026-794 du 18 août 2026 (droit à l'aide à mourir, CSP art. L.1111-12-2) :** instaure un droit distinct et strictement encadré (cinq critères cumulatifs incluant une affection grave et incurable en phase avancée ou terminale et une souffrance réfractaire ou insupportable ; la souffrance psychologique seule n'ouvre pas ce droit ; principe d'auto-administration ; information et accès garantis aux soins palliatifs). Deux repères essentiels au 25 novembre 2026 :
   - **Impossible à demander dans les directives anticipées :** le discernement libre et éclairé devant être vérifié au moment de la demande et le jour de l'acte, une demande d'aide à mourir ne peut juridiquement figurer dans des directives anticipées.
   - **Application en attente de décrets :** bien que promulguée en août 2026, son entrée en vigueur concrète reste suspendue aux décrets et arrêtés ministériels d'application.

### Directives anticipées, personne de confiance et sédation profonde

- **Directives anticipées (CSP art. L.1111-11 à L.1111-12, R.1111-17 à R.1111-20 ; arrêté du 3 août 2016) :** elles **s'imposent au médecin** si vous n'êtes plus en état d'exprimer votre volonté (tant que vous pouvez vous exprimer, votre parole prime toujours). Deux exceptions étroites existent : une **urgence vitale** le temps d'une évaluation complète, ou des directives jugées **manifestement inappropriées** à la situation médicale après une **procédure collégiale** avec un médecin indépendant, consignée au dossier avec information de la personne de confiance ou des proches. Validité **illimitée**, modifiables ou révocables à tout moment ; modèles officiels facultatifs (**Modèle A** en cas de maladie grave, **Modèle B** en bonne santé) ou papier libre daté et signé (deux témoins si incapacité physique d'écrire). Enregistrez-les dans **Mon espace santé** et remettez-en copie à votre médecin traitant, votre cardiologue et votre personne de confiance (**ne les envoyez pas à la HAS**, qui ne les conserve pas).
  - *Divergence de sources à vérifier en cas de tutelle :* service-public.gouv.fr (F32010, vérifié le 28 mai 2026) indique qu'un majeur capable sous tutelle rédige seul ses directives sans autorisation du juge, tandis que le CNSPFV indique encore qu'une autorisation du juge ou du conseil de famille est requise. Vérifiez auprès de Santé Info Droits ou d'un juriste si une mesure de tutelle s'applique.
- **Personne de confiance (CSP art. L.1111-6) :** **une seule** personne majeure consentante de votre choix (conjoint, parent, ami ou médecin traitant), désignée par écrit et **co-signée**, valable sans limite de durée sauf mention contraire, distincte de la *personne à prévenir*. Elle peut vous accompagner aux consultations ; son témoignage **prévaut sur tout autre avis familial** si vous ne pouvez plus vous exprimer, et elle peut demander une procédure collégiale, mais elle **n'accède pas directement à votre dossier médical** sans procuration écrite. Sous tutelle, les deux sources s'accordent sur la nécessité d'une autorisation du juge ou du conseil de famille.
- **Refus d'obstination déraisonnable et SPCMD :** la loi interdit de poursuivre des traitements inutiles, disproportionnés ou n'ayant d'autre effet que le maintien artificiel de la vie — incluant expressément la **nutrition et l'hydratation artificielles**. Distincte d'une sédation symptomatique réversible et distincte de l'euthanasie, la **sédation profonde et continue maintenue jusqu'au décès (SPCMD)** s'applique dans trois situations encadrées (souffrance réfractaire avec pronostic engagé à court terme ; arrêt d'un traitement vital décidé par le patient entraînant un décès rapide et une souffrance insupportable ; arrêt d'un traitement disproportionné chez un patient hors d'état de s'exprimer sauf opposition dans ses directives), avec **procédure collégiale obligatoire**, analgésie systématique et disponibilité médico-infirmière 24 h/24. Le **midazolam** est accessible en pharmacie de ville depuis **2022**, permettant la SPCMD à domicile ou en EHPAD avec l'appui d'une EMSP.

### Structures pratiques de soins palliatifs en France

| Structure | Rôle | Organisation et prise en charge |
|---|---|---|
| **EMSP** (*Équipe mobile de soins palliatifs*) | Équipe pluridisciplinaire de conseil (médecins, infirmiers, psychologues) sans lits propres | Intervient dans les services hospitaliers (dont cardiologie), en EHPAD ou à domicile à la demande des soignants, du patient ou des proches |
| **HAD** (*Hospitalisation à domicile*) | Soins de niveau hospitalier au domicile ou en EHPAD, y compris soins palliatifs complexes | Prescription médicale + accord du médecin traitant + faisabilité ; astreinte infirmière 24 h/24 ; **prise en charge à 100 % en ALD** (80 % régime général, 90 % Alsace-Moselle) avec dispense d'avance de frais et **sans forfait journalier** |
| **LISP** (*Lit identifié de soins palliatifs*) | Lits labellisés au sein d'un service hospitalier classique (cardiologie, gériatrie...) | Permet de rester suivi par l'équipe qui vous connaît déjà tout en bénéficiant d'une expertise palliative |
| **USP** (*Unité de soins palliatifs*) | Service hospitalier 100 % dédié aux situations palliatives complexes (séjour temporaire de répit ou prolongé) | Prescription collégiale avec accord du patient/proches ; **100 % Assurance Maladie** hors forfait journalier hospitalier (souvent couvert par la mutuelle) |
| **MASP** (*Maisons d'accompagnement et de soins palliatifs*) | Nouvelles structures médico-sociales intermédiaires entre domicile et hôpital (Loi 2026-404) | Déploiement progressif pour les personnes ne pouvant rester seules à domicile sans relever d'une USP |
| **Coordination & aides** | **DAC** (*Dispositif d'Appui à la Coordination*, depuis 2022), appui territorial, **FNASS** (fournitures non remboursées), **AJAP** | Sollicitez votre médecin traitant, l'assistante sociale ou l'équipe de cardiologie pour activer ces relais |`,
    },
    {
      headingFr: 'Le défibrillateur (DAI / CRT-D) en fin de vie',
      bodyMarkdownFr: `La **fonction de choc électrique (thérapie antitachycardique) d'un DAI peut être suspendue temporairement à l'aide d'un aimant clinique ou désactivée par reprogrammation externe indolore et réversible**, sans chirurgie, le boîtier restant en place.

- **Quand aborder le sujet :** dès le consentement **avant l'implantation**, lors de toute aggravation clinique, et systématiquement **avant un changement de boîtier** (recommandation **ESC 2026 Classe IIa** ; le consensus **EHRA/ESC/HRS 2025** rappelle un risque médian de complication majeure d'environ **4 %** lors d'un remplacement et note que jusqu'à **15 %** des patients informés envisagent le non-remplacement).
- **Préserver la stimulation (CRT-D ou pacemaker) :** seule la **fonction choc** est habituellement désactivée. Arrêter la resynchronisation (CRT) ou la stimulation antibradycardique risquerait d'aggraver rapidement l'essoufflement ; en cas de changement de boîtier avec sondes intégrées DF-4 lorsqu'une stimulation CRT reste utile, un remplacement par un générateur CRT-D avec chocs désactivés peut être discuté.
- **Un décalage massif dans la pratique européenne et internationale (2020–2026) :**
  - **Méta-analyse 2020 (Gonzalez-Jaramillo, 14 études, 2 745 porteurs) :** seuls **28 %** des DAI étaient reprogrammés en fin de vie (20 % avant 2010 contre 40 % après 2010) ; **7 à 27 %** des patients recevaient des chocs dans leurs derniers mois ou jours ; bien que **53 %** disposent de directives anticipées, **seulement 1 % (IC 95 % 1–3 %) mentionnaient le DAI**.
  - **Enquête européenne prospective EHRA 2023 (1 809 patients dans 10 pays, dont France, Pologne et Allemagne en tête) :** seuls **25,4 %** avaient été informés avant l'implantation de la possibilité de désactivation (49,2 % à 5 ans), alors que **94,0 %** estimaient que tous les patients devraient en être informés et **92,2 %** souhaitaient participer à la décision.
  - **Cohorte 2026 sur 18 ans (1 606 porteurs de DAI/CRT-D décédés entre 2006 et 2022) :** la désactivation a progressé de 5,2 %/an jusqu'en 2014 puis a **plafonné entre 2015 et 2022** (42 % globalement, 59 % en 2022) ; **33 %** ont eu lieu le **dernier jour de vie** ; **11 %** ont subi un changement de boîtier dans leur dernière année ; et les patients atteints de **cardiomyopathie ischémique décédaient plus souvent avec des chocs encore actifs** que les autres (**70 % contre 64 %**, p = 0,005).
  - **Enquête suédoise chez les 80–94 ans (BMC Geriatrics 2018) :** seuls **13 %** avaient parlé de désactivation avec un médecin, **36 %** la confondaient à tort avec une euthanasie active, et **40 %** ne souhaitaient pas aborder la question.
- **En France :** désactiver les chocs d'un DAI **n'est pas une euthanasie** ; cela s'inscrit dans le cadre de la **loi Claeys-Leonetti** (refus de traitement, refus d'obstination déraisonnable, directives anticipées et procédure collégiale, avec reprogrammation par rythmologue en référence et pose d'un aimant clinique en urgence palliative ou à domicile tout en maintenant la stimulation). Aucun protocole public conjoint SFC/SFAP dédié n'ayant été identifié en ligne fin novembre 2026, les centres français s'appuient sur les recommandations européennes dans le cadre légal français. **Nommer explicitement votre DAI ou CRT-D dans vos directives anticipées** (en distinguant chocs et stimulation) évite le silence observé dans 99 % des documents.`,
    },
    {
      headingFr: 'Adaptation des médicaments et soutien aux proches aidants',
      bodyMarkdownFr: `- **Objectifs de soins (guide patient ESC 2026) :** clarifier régulièrement avec votre équipe et vos proches la priorité que vous accordez à **vivre plus longtemps**, **éviter les hospitalisations** et **vous sentir mieux**, ainsi que le lieu de soins souhaité.
- **Médicaments en fin de vie (HFA 2020) :**
  - arrêt progressif des traitements préventifs au long cours n'apportant plus de confort symptomatique (par exemple statines, antiagrégants) ;
  - allègement des bêtabloquants et bloqueurs du SRAA en cas d'hypotension ou de congestion réfractaire ;
  - prescriptions anticipées « si besoin » (morphiniques contre la dyspnée ou la douleur, diurétiques, antiémétiques) pour sécuriser le maintien à domicile.
- **Proches et aidants :** la HFA considère les aidants comme des partenaires essentiels dont l'épuisement doit être évalué, avec un suivi de deuil. Dans la revue parapluie Kim 2026, le soutien aux aidants ne figurait toutefois que dans **6 interventions sur 81** (certitude très faible). En France, la **loi n° 2026-404** inscrit explicitement l'accompagnement psychologique, social et de deuil des proches dans la définition légale des soins d'accompagnement et palliatifs, en complément du **congé de solidarité familiale**, de l'**AJAP** et du congé de proche aidant / AJPA (voir l'article « Réseau de soins en France »).`,
    },
  ],
  relatedArticleSlugs: [
    'vivre-avec-insuffisance-cardiaque',
    'vivre-avec-insuffisance-cardiaque-en-france',
    'reseau-de-soins-et-aides-sociales-france',
    'dispositifs-cardiaques-dai-crt',
    'depression-et-sante-emotionnelle',
    'insuffisance-cardiaque-avancee-stade-d',
    'assistance-circulatoire-lvad',
    'transplantation-cardiaque-france',
    'inotropes-insuffisance-cardiaque-avancee',
    'questions-equipe-cardiologie',
    'essais-cliniques-cles',
    'recommandations-comparees-esc-us-nice',
    'glossaire-cardiologie',
  ],
  sources: [
    {
      label: 'HFA-ESC Position Paper (2020) & ESC 2026 (Recommandations et Guide patient IC)',
      detail:
        'Deux niveaux de soins palliatifs, anticipation Classe I et équipe palliative intégrée en IC avancée, décision partagée Classe IIa avant changement de boîtier DAI, déprescription et aidants.',
    },
    {
      label: 'Essais PAL-HF (2017, texte intégral), CASA (2018, texte intégral) & ENABLE CHF-PC (2020)',
      detail:
        'Résultats complets, audits d’intégrité des registres (NCT01589601, NCT01739686, NCT02505425), neutralité primaire de CASA et ENABLE CHF-PC, et applicabilité à l’ICFER ischémique.',
    },
    {
      label: 'Revue parapluie Kim et al. (2026, Heart Failure Reviews), Sahlollbey (2020) & Yang (2026)',
      detail:
        '19 revues systématiques (104 études) : baisse des hospitalisations (OR 0,56–0,67, certitude modérée), gains modestes QoL/humeur/ACP, absence d’effet sur la mortalité et limites méthodologiques de Yang 2026.',
    },
    {
      label: 'Données européennes sur la désactivation du DAI (Gonzalez-Jaramillo 2020, EHRA 2023, EHRA/ESC/HRS 2025, cohorte 18 ans 2026, BMC Geriatrics 2018)',
      detail:
        'Taux de désactivation (28 % en méta-analyse ; 1 % des directives mentionnant le DAI), attente d’information des patients (94 %), plateau 2015–2022 et excès de chocs actifs dans la cardiomyopathie ischémique.',
    },
    {
      label: 'service-public.gouv.fr (F32010, F32748, F732), HAS (guides directives et SPCMD) & CNSPFV (2026)',
      detail:
        'Loi Claeys-Leonetti (2016), Loi n° 2026-404 (26 mai 2026 : accompagnement précoce, PPA, MASP), Loi n° 2026-794 (18 août 2026, décrets en attente, exclue des directives anticipées), EMSP/HAD/LISP/USP et midazolam en ville.',
    },
    {
      label: 'ACC 2024 Expert Consensus Decision Pathway, NICE NG106 (2025) & British Heart Foundation',
      detail:
        'Intégration continue des soins palliatifs, non-recours aux scores pronostiques pour orienter et non-indication de l’oxygène au long cours pour l’IC seule.',
    },
  ],
  disclaimerType: 'medical',
};
