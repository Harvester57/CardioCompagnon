import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'vivre-avec-insuffisance-cardiaque-en-france',
  sourceWikiPath: 'wiki/topics/living-with-heart-failure-in-france.md',
  titleFr: 'Vivre avec une insuffisance cardiaque en France : ALD, travail, emprunt et réadaptation',
  category: 'france',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'hot',
  tags: [
    'france',
    'ald',
    'ald-5',
    'ald-13',
    'arrêt-travail',
    'temps-partiel-thérapeutique',
    'aeras',
    'loi-lemoine',
    'assurance-emprunteur',
    'réadaptation-cardiaque',
    'smr',
    'prado',
    'invalidité',
    'rqth',
    'glp-1',
    'wegovy',
    'mounjaro',
  ],
  aliases: [
    'France',
    'ALD',
    'ALD 5',
    'ALD 13',
    'Affection de longue durée',
    'Mi-temps thérapeutique',
    'Temps partiel thérapeutique',
    'AERAS',
    'Loi Lemoine',
    'Assurance emprunteur',
    'RQTH',
    'Pension d’invalidité',
    'PRADO',
    'Réadaptation cardiaque',
    'SMR cardiovasculaire',
    'Wegovy remboursement France',
    'Mounjaro remboursement France',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Cet article rassemble les règles pratiques françaises applicables après un diagnostic d'insuffisance cardiaque ou de maladie coronarienne, vérifiées sur les pages officielles fin novembre 2026 : prise en charge à 100 % en ALD (ALD 5 et ALD 13), réforme des arrêts maladie au 15 octobre 2026 (maintien de 3 ans d'indemnités journalières en ALD exonérante contre 1 an hors ALD), reprise du travail et temps partiel thérapeutique, RQTH et invalidité, assurance emprunteur (Loi Lemoine et convention AERAS), accès à la réadaptation cardiaque (SMR et repères GERS-P/HAS), suivi post-hospitalisation PRADO et conditions françaises de remboursement des médicaments de l'obésité (Wegovy, Mounjaro depuis le 15 juin 2026). Les règles et montants évoluant régulièrement, vérifiez toujours votre situation individuelle auprès de votre CPAM, de service-public.fr ou d'un conseiller.",
  sections: [
    {
      headingFr: 'ALD (ALD 5 et ALD 13) : prise en charge à 100 % des soins liés',
      bodyMarkdownFr: `Une **affection de longue durée (ALD)** inscrite sur la liste officielle ouvre droit à la prise en charge des soins en rapport avec cette maladie à **100 % du tarif de la Sécurité sociale** (exonération du ticket modérateur).

- **Pathologies cardiovasculaires inscrites sur la liste :** « insuffisance cardiaque grave, troubles du rythme graves, cardiopathies valvulaires graves, cardiopathies congénitales graves » (**ALD 5**), « maladie coronaire » (**ALD 13**) et artériopathie chronique avec manifestations ischémiques.
- **Hypertension artérielle isolée :** elle ne figure plus sur la liste des ALD depuis 2011.
- **Fusion HAS de juillet 2025 :** la Haute Autorité de santé (HAS) a fusionné ses deux anciennes listes d'insuffisance cardiaque (fonction systolique altérée et préservée) en un seul guide **ALD 5** en juillet 2025 (décision 2025.0171/DC/SBP, remplaçant les deux listes de 2015).

### Critères d'admission en ALD 5 (reproduction HAS 2025 du texte réglementaire)

Même si les listes de soins ont été unifiées, les critères médicaux d'admission conservent **deux branches** :

| Branche | Critères requis | Durée initiale d'exonération |
|---|---|---|
| **5.1 : insuffisance cardiaque chronique symptomatique systolique** | Symptômes d'insuffisance cardiaque (au repos ou à l'effort, actuels ou passés) **et** preuve objective de dysfonction systolique au repos avec **FEVG inférieure à 40 %** | 10 ans, renouvelable |
| **5.2 : insuffisance cardiaque chronique symptomatique à fonction systolique préservée** | Symptômes attestés par un épisode congestif aigu (œdème aigu pulmonaire), **plus** un signe objectif au repos (ECG, radiographie, ETT ou BNP) avec FEVG supérieure à 40 %, **plus** réponse au traitement de l'insuffisance cardiaque | 10 ans, renouvelable |

- Pour la branche 5.1, le guide **n'impose ni classe NYHA particulière, ni seuil de BNP, ni hospitalisation préalable**. Le chiffre de « 35 % » présent dans le guide concerne la resynchronisation (CRT), pas l'admission en ALD.
- *Particularité rédactionnelle :* pris à la lettre, une FEVG exactement égale à 40 % ne rentre ni dans « inférieure à 40 % » ni dans « supérieure à 40 % ». Il s'agit d'un constat sur le texte reproduit par la HAS, non d'une interprétation officielle.
- **Soins et examens listés par le guide HAS 2025 :** ECG et ETT de repos pour tous ; bilan rénal et ionogramme au départ et dans le suivi ; peptides natriurétiques, IRM cardiaque, Holter, réadaptation cardiaque, télésurveillance et bilans génétiques selon indication ; traitements de fond de l'insuffisance cardiaque ; vaccins contre la grippe, le pneumocoque, le VRS (après 65 ans) et la Covid-19. La version 2025 a **supprimé les fréquences chiffrées de suivi**.
- **Maladie coronarienne (ALD 13) :** dans la numérotation HAS (« Maladie coronarienne », guide *Syndrome coronarien chronique* d'avril 2021), le critère est **toute ischémie myocardique objectivement documentée** (ECG, test d'effort, imagerie, Holter ou coronarographie), pour une première exonération de **10 ans**. La page grand public d'ameli emploie une formulation plus étroite (« maladie coronaire : infarctus du myocarde ») sans mentionner le numéro.
- *Vérification juridique :* les critères ci-dessus proviennent de la reproduction HAS de l'annexe à l'article **D.160-4** du Code de la sécurité sociale (le texte consolidé sur Légifrance n'ayant pas été lu directement). C'est le **médecin-conseil** de l'Assurance Maladie qui décide dans chaque cas individuel.

### Fonctionnement pratique et restes à charge

1. Votre **médecin traitant** rédige le **protocole de soins** en lien avec les spécialistes (cardiologue).
2. Le **médecin-conseil** de l'Assurance Maladie valide l'exonération ; vous signez le protocole et le présentez aux médecins consultés.
3. Les prescriptions liées à l'ALD figurent dans la partie supérieure de l'**ordonnance bizone** ; les autres soins relèvent de la partie inférieure, au taux habituel.
4. Le renouvellement s'effectue pour une durée identique ou jusqu'à 10 ans, sans limite de nombre de renouvellements.

**Ce qui reste à votre charge même en ALD :**
- les **dépassements d'honoraires** au-delà du tarif de la Sécurité sociale ;
- la **participation forfaitaire de 2 €** et la **franchise médicale** (plafonnées chacune à **70 € par an** et par personne selon ameli) ;
- le **forfait hospitalier** journalier ;
- les médicaments à service médical rendu faible remboursés à 15 % ;
- l'**activité physique adaptée (APA)** prescrite sur ordonnance n'est **pas remboursée** par l'Assurance Maladie.

Une complémentaire santé (mutuelle) peut couvrir une partie de ces frais. En cas de difficulté, vous pouvez solliciter la ligne **Santé Info Droits**.`,
    },
    {
      headingFr: 'Arrêt de travail et indemnités journalières (réforme du 15 octobre 2026)',
      bodyMarkdownFr: `- **Réforme d'octobre 2026 :** deux décrets du 16 septembre 2026 (**décrets n° 2026-866 et n° 2026-867**) ont réduit la durée maximale de versement des indemnités journalières (IJ) pour arrêt maladie long d'origine non professionnelle de **3 ans à 1 an**, à compter du **15 octobre 2026**.
- **Exception pour l'ALD exonérante (décret 2026-866) :** le texte distingue deux catégories :
  - **ALD exonérante** (dont font partie l'ALD 5 insuffisance cardiaque grave et l'ALD 13 maladie coronarienne selon service-public.fr) : la durée maximale reste fixée à **3 ans** ;
  - **Affections de longue durée non exonérantes** : la durée maximale passe à **1 an**.
  - Dans les deux situations, une **reprise de travail d'au moins 1 an** est nécessaire pour ouvrir à nouveau une période complète d'indemnisation.
  - Il est recommandé de vérifier votre statut exact (ALD exonérante validée) auprès de votre **CPAM**.
- **Arrêts concernés :** les arrêts prescrits à partir du **15 octobre 2026**, ainsi que les arrêts déjà en cours à cette date lorsqu'ils atteignent 6 mois à compter du 15 octobre 2026.
- **Dispositions transitoires (nuance de rédaction) :**
  - la fiche d'actualité service-public (A19066) indique que les assurés déjà en arrêt depuis plus de 6 mois au 15 octobre 2026 conservent l'ancienne règle des 3 ans ;
  - la clause transitoire du décret 2026-866 est rédigée différemment et vise les personnes déjà admises dans la procédure de longue maladie à cette date dont les soins ne sont pas pris en charge à 100 %.`,
    },
    {
      headingFr: 'Retour au travail, temps partiel thérapeutique, RQTH et invalidité',
      bodyMarkdownFr: `### Outils de maintien dans l'emploi (salariés du secteur privé)

- **Rendez-vous de liaison :** entretien facultatif et non médical avec l'employeur possible après plus de 30 jours d'arrêt.
- **Visite de pré-reprise :** consultation avec le **médecin du travail** pour préparer des aménagements de poste ; elle est systématique après plus de 3 mois d'arrêt et possible dès 30 jours. **Elle ne met pas fin à l'arrêt de travail.**
- **Visite de reprise :** organisée par l'employeur dans les 8 jours suivant le retour lorsqu'elle est requise ; le médecin du travail évalue l'aptitude et peut préconiser des adaptations.
- **Essai encadré :** période d'essai professionnelle encadrée pouvant aller jusqu'à **14 jours ouvrables** pendant l'arrêt de travail indemnisé.
- **CRPE (convention de rééducation professionnelle en entreprise) :** dispositif de reconversion interne pouvant durer jusqu'à **18 mois** pour les salariés exposés à un risque d'inaptitude.

### Temps partiel thérapeutique (souvent appelé « mi-temps thérapeutique »)

- Depuis la loi de financement de la Sécurité sociale pour 2019, les salariés **n'ont plus besoin d'un arrêt à temps complet préalable** pour en bénéficier.
- **Démarche :** prescription par le médecin traitant (ou le cardiologue), accord sur la quotité et les horaires avec le médecin du travail et l'employeur, puis décision du **médecin-conseil** de la CPAM sur l'indemnisation.
- **Quotité de travail :** la page ameli destinée aux assurés mentionne **20 % à 80 %** du temps de travail (la durée étant appréciée par le médecin-conseil) ; la page ameli destinée aux employeurs précise que la loi ne fixe pas de bornes strictes.
- **Montant des IJ en 2026 :** calculées comme des IJ maladie ordinaires à hauteur de **50 % du salaire journalier de base**, dans la limite d'un salaire plafonné à **1,4 SMIC** (**2 613,82 € par mois**), soit un plafond de **42,97 € brut par jour**.
- **Durée maximale d'indemnisation :**
  - *Avant la réforme d'octobre 2026 :* jusqu'à **4 ans** au maximum (1 an au-delà de la limite de 3 ans d'IJ maladie).
  - *Après la réforme d'octobre 2026 :* le décret 2026-866 a réécrit l'article **R.323-3** afin de rattacher ce plafond aux nouvelles durées d'IJ (3 ans en ALD exonérante, 1 an hors ALD), sans employer l'expression « temps partiel thérapeutique ». Au 24 novembre 2026, aucune page officielle grand public n'avait encore publié la nouvelle durée maximale chiffrée (la fiche service-public F144, mise à jour en juin 2026, mentionnait toujours 4 ans). Faites confirmer la limite applicable à votre dossier par votre CPAM.
- **Travailleurs indépendants :** le décret compagnon **2026-867** transpose la distinction 1 an / 3 ans aux indépendants et supprime la mention reliant une disposition spécifique à un arrêt à temps plein préalable (sans page officielle confirmant encore explicitement la portée pratique de cette suppression).
- **Fonctionnaires (au 1er août 2026) :** régime distinct reposant sur une autorisation de l'employeur public (et non des IJ CPAM) : **50 % à 90 %** du temps plein avec **plein traitement**, dans la limite d'**1 an au total**, renouvelable après 1 an de reprise à temps plein. Depuis le 1er août 2026, l'employeur doit répondre sous 30 jours et le renouvellement tous les 1 à 3 mois n'est plus exigé.

### RQTH et pension d'invalidité

- **RQTH (reconnaissance de la qualité de travailleur handicapé) :** demande déposée auprès de la **MDPH**. Elle ouvre accès aux aménagements de poste, aux aides dédiées et au doublement de la durée du préavis légal en cas de licenciement. **Vous n'êtes pas obligé d'en informer votre employeur.** Le délai d'instruction peut atteindre 4 mois ; l'absence de réponse vaut rejet.
- **Pension d'invalidité :** destinée aux assurés dont la capacité de travail ou de gain est réduite d'**au moins deux tiers**. La **catégorie 1** verse **30 %** du salaire annuel moyen des 10 meilleures années ; les **catégories 2 et 3** versent **50 %** (avec majoration pour tierce personne en catégorie 3). Elle est attribuée à titre provisoire et reste révisable.`,
    },
    {
      headingFr: 'Emprunt immobilier : Loi Lemoine et convention AERAS',
      bodyMarkdownFr: `- **Suppression du questionnaire de santé (Loi Lemoine) :** aucun questionnaire médical ne peut vous être demandé lorsque la part assurée cumulée de vos prêts immobiliers est **inférieure ou égale à 200 000 € par emprunteur** et que le remboursement s'achève **avant votre 60e anniversaire**.
- **Au-delà de ces seuils — convention AERAS :** le dossier suit jusqu'à trois niveaux d'examen (questionnaire standard, examen spécialisé par le médecin de l'assureur, puis 3e niveau pour les prêts jusqu'à **420 000 €** se terminant avant **71 ans**). Une surprime ou une exclusion de garantie peut être proposée ; un dispositif d'écrêtement plafonne la surprime pour les revenus modestes.
- **Grille de référence AERAS (édition septembre 2023) :** elle ne comporte **aucune entrée pour l'insuffisance cardiaque, la maladie coronarienne ou la cardiomyopathie**.
- **Droit à l'oubli :** il ne concerne que les anciens **cancers** et l'**hépatite C** ; il ne s'applique pas aux cardiopathies.
- **En cas de refus ou de conditions jugées excessives :** vous pouvez saisir la commission de médiation AERAS, faire jouer la délégation d'assurance auprès d'autres assureurs, ou étudier une garantie alternative (par exemple le nantissement d'un contrat d'assurance-vie).`,
    },
    {
      headingFr: 'Réadaptation cardiaque en SMR cardiovasculaire',
      bodyMarkdownFr: `- **Où elle se déroule :** dans un service de **SMR (soins médicaux et de réadaptation, ex-SSR)** titulaire de la mention cardiovasculaire, en hospitalisation complète ou en **hôpital de jour**. Les programmes ambulatoires légers de proximité et la téléréadaptation à domicile n'existent encore qu'à titre d'expérimentations « article 51 ».
- **Qui est éligible :** la HAS souligne que le niveau de preuve est le plus élevé pour les patients coronariens et insuffisants cardiaques, y compris porteurs d'un dispositif implanté (DAI, CRT), et estime qu'idéalement tout patient cardiovasculaire devrait se voir poser la question.
- **Modalités d'accès et prise en charge :** deux voies sont possibles — directement au décours d'une hospitalisation, ou sur **prescription directe de votre médecin traitant ou de votre cardiologue de ville**. Vous choisissez librement votre centre. **Aucune entente préalable n'est nécessaire et les séances sont prises en charge à 100 %** par l'Assurance Maladie.
- **Contenu du programme (HAS 2024) :** réentraînement physique progressif et supervisé, optimisation des traitements et des facteurs de risque, **éducation thérapeutique du patient (ETP)**, accompagnement psychologique, diététique et aide au sevrage tabagique, ainsi que **préparation à la reprise du travail**.
- **Bénéfices cités par la HAS :** baisse de **12 %** de la mortalité et de **20 à 30 %** des réhospitalisations dans l'insuffisance cardiaque (surtout à FEVG réduite, selon l'adhésion au programme).
- **Contenu précis de l'entraînement en France (Société Française de Cardiologie, GERS-P 2023) :** la réadaptation dans l'ICFER est recommandée en **Classe I, grade A**. Une épreuve d'effort cardiorespiratoire préalable est réalisée ; les patients en classe **NYHA IIIb** débutent en hospitalisation complète. L'endurance constitue le socle (**3 à 6 séances par semaine**, en continu au premier seuil ventilatoire ou en fractionné), complétée par un **renforcement musculaire** **2 à 3 fois par semaine** (environ **30 à 70 %** de la charge maximale 1RM pour les bras, **40 à 80 %** pour les jambes, en commençant par **10 à 15 répétitions**) ainsi qu'un entraînement des muscles inspiratoires. Le programme compte au moins **20 séances**, souvent davantage dans l'insuffisance cardiaque ; après la sortie, l'objectif d'entretien est d'environ **150 minutes** d'endurance modérée (ou **75 minutes** vigoureuse) par semaine plus 2 à 3 séances de renforcement.
- **Prescription d'activité physique en relais (HAS 2022) :** après la réadaptation, le médecin traitant ou le cardiologue prescrit au moins **3 séances par semaine de 30 à 60 minutes** associant endurance et **renforcement musculaire**. La HAS mentionne les efforts intenses, la plongée, le sport de compétition et « la musculation » parmi les contre-indications dans l'IC chronique sans définir le terme « musculation » : faites toujours préciser par votre équipe de réadaptation quelles charges vous sont autorisées (une fiche patient HAS de 2 pages reprend ces repères). Aucune recommandation française ni européenne ne place la musculation au-dessus de l'endurance (voir l'article « Musculation versus entraînement aérobie en réadaptation cardiaque »).
- **Un recours encore trop faible :** en France, après un infarctus du myocarde, seuls **10,8 % à 34,8 %** des patients accèdent à une réadaptation selon les régions. Le taux de « 10 % des patients insuffisants cardiaques » cité par la HAS provient d'un registre américain, aucune donnée consolidée française spécifique à l'insuffisance cardiaque n'ayant été recensée dans la note de cadrage.`,
    },
    {
      headingFr: 'Sortie d’hospitalisation (PRADO), télésurveillance et autres droits',
      bodyMarkdownFr: `### PRADO Insuffisance cardiaque

Mis en place par l'Assurance Maladie depuis 2013 avec la Société Française de Cardiologie (SFC), le programme **PRADO** organise le retour à domicile après une hospitalisation pour décompensation cardiaque (dans les établissements participants) :

- suivi de **2 mois** pour les classes NYHA I–II, et de **6 mois** pour les classes NYHA III–IV ;
- visites d'un infirmier libéral **chaque semaine pendant 2 mois**, puis tous les 15 jours pendant 4 mois pour les classes NYHA III–IV ;
- consultation chez votre **médecin traitant dans la première semaine** suivant la sortie, puis chez votre **cardiologue au cours du deuxième mois** ;
- remise d'un carnet de suivi à la sortie de l'hôpital.

### Médicaments de l'obésité (Wegovy, Mounjaro), télésurveillance, permis et apnée du sommeil

- **Médicaments de perte de poids (sémaglutide — *Wegovy*, tirzépatide — *Mounjaro*) :** remboursés à **65 % depuis le 15 juin 2026** uniquement pour un **IMC initial ≥ 40 kg/m²**, ou **≥ 35 kg/m²** associé à l'une des **15 pathologies listées** (telles que le diabète de type 2 ou l'hypertension artérielle traitée). Selon les informations publiées sur Vidal (les arrêtés du **10 juin 2026**, publiés au Journal officiel du **12 juin 2026**, n'ayant pas été lus directement), **la maladie coronarienne et l'insuffisance cardiaque ne figurent pas dans cette liste**. La primo-prescription doit émaner d'un service spécialisé de prise en charge de l'obésité, avec formulaire d'éligibilité Assurance Maladie (AmeliPro) ; tout médecin peut ensuite assurer le renouvellement. Le tirzépatide (*Mounjaro*) bénéficie séparément d'un remboursement dans le diabète de type 2 (avis HAS 2024 et 2026). Voir l'article « Médicaments GLP-1 et nouvelles incrétines ».
- **Télésurveillance à domicile :** remboursée en France depuis juillet 2023 selon le référentiel HAS (après hospitalisation récente pour insuffisance cardiaque, ou en classe NYHA II ou plus avec NT-proBNP élevé). Voir l'article dédié sur la télésurveillance.
- **Permis de conduire :** l'aptitude relève de l'arrêté du 28 mars 2022 et d'un **médecin agréé** ; voir l'article dédié sur les règles de conduite.
- **Apnée du sommeil (PPC) :** l'insuffisance cardiaque symptomatique fait partie des comorbidités reconnues ouvrant droit à la prise en charge d'une pression positive continue (PPC) dès une apnée modérée ; la HAS a réexaminé ces indications en 2026 et les a maintenues inchangées.

### Limites des sources vérifiées fin novembre 2026

Quelques éléments n'ont pas pu être vérifiés dans le texte consolidé sur Légifrance : le texte intégral consolidé de l'annexe à l'article D.160-4 et des articles R.323-1, R.323-3 et R.323-3-1 après la réforme d'octobre 2026, le plafond chiffré consolidé du temps partiel thérapeutique hors ALD exonérante, le décompte exact des jours de temps partiel thérapeutique sur le compteur d'IJ, ainsi que le texte intégral des arrêtés du 10 juin 2026 sur les médicaments de l'obésité. Vérifiez toujours votre cas précis auprès de votre CPAM ou de votre service social.`,
    },
  ],
  relatedArticleSlugs: [
    'glossaire-cardiologie',
    'vivre-avec-insuffisance-cardiaque',
    'readaptation-cardiaque-et-activite-physique',
    'musculation-vs-endurance-readaptation-cardiaque',
    'medicaments-glp1-et-incretines',
    'telesurveillance-insuffisance-cardiaque',
    'regles-conduite-automobile',
    'depression-et-sante-emotionnelle',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'questions-equipe-cardiologie',
    'comprendre-le-diagnostic',
  ],
  sources: [
    {
      label: 'ameli.fr — Définition, liste et prise en charge des ALD',
      detail:
        'Liste officielle des ALD exonérantes, retrait de l’hypertension isolée, frais restant à charge (dépassements, forfait hospitalier, franchises plafonnées à 70 €/an).',
    },
    {
      label: 'service-public.fr — Fiche F34068 (ALD)',
      detail:
        'Protocole de soins, rôle du médecin-conseil, ordonnance bizone, renouvellement et ligne Santé Info Droits.',
    },
    {
      label: 'HAS — Guide ALD 5 (juillet 2025, décision 2025.0171/DC/SBP) et ALD 13 (avril 2021)',
      detail:
        'Fusion des listes d’insuffisance cardiaque, critères médicaux des branches 5.1 et 5.2, soins remboursés, vaccinations et critères de l’ALD 13 (syndrome coronarien chronique).',
    },
    {
      label: 'Décrets n° 2026-866 et n° 2026-867 (16 septembre 2026) et service-public.fr A19066',
      detail:
        'Réforme des indemnités journalières au 15 octobre 2026 (1 an hors ALD exonérante vs 3 ans en ALD exonérante) et modification de l’article R.323-3 sur le temps partiel thérapeutique.',
    },
    {
      label: 'ameli.fr & service-public.fr (F144, F12788, F1650, F672)',
      detail:
        'Visite de pré-reprise, essai encadré, CRPE, temps partiel thérapeutique (salariés et fonctionnaires au 1er août 2026), RQTH et pension d’invalidité.',
    },
    {
      label: 'service-public.fr (F20520) et Grille de référence AERAS (septembre 2023)',
      detail:
        'Exemption de questionnaire médical (Loi Lemoine, ≤ 200 000 € avant 60 ans), niveaux AERAS, absence d’entrée cardiaque dans la grille et périmètre du droit à l’oubli.',
    },
    {
      label: 'HAS — Fiche orientation réadaptation cardiaque (2024), Note de cadrage SMR (2023), HAS activité physique IC (2022) et GERS-P / SFC (2023)',
      detail:
        'Accès direct sans entente préalable, prise en charge à 100 %, contenu multidisciplinaire, doses d’endurance et de renforcement musculaire, bénéfices cliniques et taux de recours en France.',
    },
    {
      label: 'ameli.fr — Programme PRADO Insuffisance cardiaque',
      detail:
        'Durée du suivi (2 ou 6 mois selon la classe NYHA), rythme des visites infirmières, consultations médecin traitant et cardiologue.',
    },
    {
      label: 'service-public.fr, Vidal (2026) et HAS Commission de la Transparence Mounjaro diabète de type 2 (2024, 2026)',
      detail:
        'Conditions de remboursement à 65 % de Wegovy et Mounjaro dans l’obésité depuis le 15 juin 2026 (IMC ≥ 40 ou ≥ 35 avec comorbidités listées, hors maladie coronarienne/IC) et prise en charge distincte dans le diabète de type 2.',
    },
    {
      label: 'HAS CNEDiMTS — Indications PPC (2014 et avis 2026)',
      detail:
        'Maintien des critères de remboursement de la PPC dans l’apnée du sommeil associée à une insuffisance cardiaque symptomatique.',
    },
  ],
  disclaimerType: 'legal_france',
};
