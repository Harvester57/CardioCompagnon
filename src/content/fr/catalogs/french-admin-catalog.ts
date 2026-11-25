import type { FrenchAdminCatalogItem } from '../../../types';

export const FRENCH_ADMIN_CATALOG: FrenchAdminCatalogItem[] = [
  {
    id: 'ald_5_13',
    titleFr: 'Demande d’ALD exonérante (ALD 5 insuffisance cardiaque / ALD 13 maladie coronarienne)',
    category: 'couverture',
    summaryFr:
      "L'ALD exonérante assure une prise en charge à 100 % du tarif de la Sécurité sociale pour les soins liés à votre insuffisance cardiaque (ALD 5, critères HAS juillet 2025 : symptômes + FEVG < 40 % en systolique, ou épisode congestif avec FEVG > 40 %) et/ou à votre maladie coronarienne (ALD 13, ischémie documentée), pour 10 ans renouvelables, y compris le suivi par un infirmier en pratique avancée (IPA, accès direct en structure coordonnée depuis le 22 janvier 2025). Elle maintient le plafond de 3 ans d'indemnités journalières après octobre 2026, mais laisse à charge les dépassements d'honoraires (vérifiez l'OPTAM), le forfait journalier (23 €/jour) et le FPU réduit (9,96 € en ALD) depuis le 1er mars 2026, ainsi que les participations et franchises plafonnées à 70 € + 70 € = 140 €/an depuis le 1er octobre 2026 (d'où l'intérêt de conserver une mutuelle ou de vérifier votre éligibilité à la C2S).",
    stepsFr: [
      'Demander à votre médecin traitant d’établir le protocole de soins en lien avec votre cardiologue (joindre comptes rendus d’ETT, d’IRM cardiaque ou de coronarographie) et vérifier son intégration dans Mon espace santé.',
      'Attendre la validation du médecin-conseil de votre CPAM, puis signer le protocole de soins et vérifier votre attestation de droits sur ameli.fr.',
      'Présenter votre protocole lors des consultations (y compris auprès d’un IPA en structure coordonnée) afin que les prescriptions liées à votre cardiopathie figurent dans la partie haute de l’ordonnance bizone.',
      'Conserver une mutuelle (ou demander la C2S selon vos revenus, qui exonère dépassements, forfait journalier 23 €/jour, FPU 9,96 € et franchises/participations), vérifier l’adhésion OPTAM sur annuairesante.ameli.fr et suivre votre compteur de franchises (rattrapage possible jusqu’à 5 ans en tiers payant) dans votre compte ameli.',
    ],
    officialLinks: [
      {
        label: 'ameli.fr — Qu’est-ce qu’une affection de longue durée (ALD) ?',
        url: 'https://www.ameli.fr/assure/droits-demarches/maladie-accident-hospitalisation/affection-longue-duree-ald/affection-longue-duree-maladie-chronique',
      },
      {
        label: 'service-public.fr — Prise en charge en ALD (fiche F34068)',
        url: 'https://www.service-public.fr/particuliers/vosdroits/F34068',
      },
      {
        label: 'service-public.fr — Complémentaire santé solidaire C2S (fiche F10027)',
        url: 'https://www.service-public.fr/particuliers/vosdroits/F10027',
      },
      {
        label: 'HAS — Actes et prestations ALD 5 (insuffisance cardiaque, 2025)',
        url: 'https://www.has-sante.fr/jcms/fc_2875171/fr/resultat-de-recherche?text=ALD+5+insuffisance+cardiaque',
      },
    ],
    asOf: '2026-11-25',
    articleSlug: 'vivre-avec-insuffisance-cardiaque-en-france',
  },
  {
    id: 'smr_rehab',
    titleFr: 'Réadaptation cardiaque en SMR cardiovasculaire et relais APA',
    category: 'parcours_soins',
    summaryFr:
      "La réadaptation cardiaque (ESC 2026 Classe I, GERS-P/SFC 2023 Classe I grade A) se déroule en service de SMR (ex-SSR) mention cardiovasculaire, en hospitalisation complète ou en hôpital de jour (au moins 20 séances combinant endurance aérobie, renforcement musculaire encadré, entraînement inspiratoire, ETP, suivi diététique et psychologique). Aucune entente préalable n'est nécessaire et les séances SMR sont prises en charge à 100 % par l'Assurance Maladie. En relais de ville, l'activité physique adaptée (APA / sport sur ordonnance) peut être prescrite par tout médecin ou un IPA (depuis avril 2025) et renouvelée une fois par un kinésithérapeute, mais n'est pas remboursée au niveau national pour l'IC même en ALD : appuyez-vous sur les 581 Maisons Sport-Santé, les forfaits prévention des mutuelles et les Clubs Cœur et Santé de la FFC.",
    stepsFr: [
      'Demander une prescription de réadaptation cardiaque en SMR à la sortie d’hospitalisation, ou directement à votre cardiologue de ville ou à votre médecin traitant.',
      'Choisir avec votre médecin le centre SMR cardiovasculaire adapté (hôpital de jour si vous habitez à proximité, ou séjour complet, recommandé d’emblée en classe NYHA IIIb selon le GERS-P) ; aucune entente préalable CPAM n’est requise.',
      'Suivre l’ensemble du programme SMR (endurance, renforcement musculaire encadré, ETP, optimisation des traitements et soutien psychologique).',
      'Organiser le relais d’activité physique après la sortie (au moins 3 séances/semaine selon la HAS 2022) : demander une ordonnance d’APA à votre médecin ou à un IPA, repérer une Maison Sport-Santé (sports.gouv.fr) ou un Club Cœur et Santé FFC, et vérifier le forfait sport-santé de votre mutuelle.',
    ],
    officialLinks: [
      {
        label: 'HAS — Orientation vers la réadaptation cardiaque (2024)',
        url: 'https://www.has-sante.fr/jcms/fc_2875171/fr/resultat-de-recherche?text=readaptation+cardiaque',
      },
      {
        label: 'sports.gouv.fr — Annuaire des 581 Maisons Sport-Santé',
        url: 'https://www.sports.gouv.fr/maisons-sport-sante',
      },
      {
        label: 'ameli.fr — Insuffisance cardiaque et prise en charge',
        url: 'https://www.ameli.fr/assure/sante/themes/insuffisance-cardiaque',
      },
    ],
    asOf: '2026-11-25',
    articleSlug: 'readaptation-cardiaque-et-activite-physique',
  },
  {
    id: 'prado_ic',
    titleFr: 'Programme PRADO de retour à domicile après hospitalisation',
    category: 'parcours_soins',
    summaryFr:
      "Proposé dans les hôpitaux participants après une hospitalisation pour décompensation cardiaque, PRADO coordonne votre retour à domicile pendant 2 mois (NYHA I-II) ou 6 mois (NYHA III-IV) : visites infirmières hebdomadaires (puis bimensuelles), rendez-vous rapide chez votre médecin traitant et suivi cardiologique au deuxième mois.",
    stepsFr: [
      'Vérifier avant votre sortie d’hospitalisation si le service participe au programme PRADO Insuffisance cardiaque.',
      'Rencontrer le conseiller de l’Assurance Maladie à l’hôpital pour désigner votre infirmier libéral et fixer les premiers rendez-vous.',
      'Consulter votre médecin traitant dans la première semaine suivant le retour à domicile, puis votre cardiologue au cours du deuxième mois.',
      'Utiliser le carnet de suivi remis à la sortie (poids, symptômes, bilans) lors de chaque passage infirmier et consultation.',
    ],
    officialLinks: [
      {
        label: 'ameli.fr — PRADO, le service de retour à domicile',
        url: 'https://www.ameli.fr/assure/droits-demarches/maladie-accident-hospitalisation/hospitalisation/prado-retour-domicile',
      },
    ],
    asOf: '2026-11-25',
    articleSlug: 'vivre-avec-insuffisance-cardiaque-en-france',
  },
  {
    id: 'telesurveillance_ic',
    titleFr: 'Télésurveillance médicale de l’insuffisance cardiaque',
    category: 'parcours_soins',
    summaryFr:
      "Remboursée en droit commun depuis le 1er juillet 2023 selon le référentiel HAS (60 %, ou 100 % en ALD exonérante, sans dépassement d'honoraires sur le forfait opérateur), la télésurveillance permet de transmettre votre poids quotidien et vos symptômes à une équipe de suivi. Elle s'adresse aux patients ayant eu une hospitalisation pour IC dans les 12 derniers mois ou en classe NYHA II ou plus avec BNP > 100 pg/mL ou NT-proBNP > 1 000 pg/mL. Elle ne remplace jamais les appels d'urgence.",
    stepsFr: [
      'Demander à votre cardiologue si vous remplissez les critères d’éligibilité HAS à la télésurveillance de l’insuffisance cardiaque.',
      'Donner votre consentement et recevoir la prescription médicale (initialement pour 6 mois renouvelables) pour une solution de télésurveillance référencée.',
      'Installer la balance connectée ou l’application dédiée et transmettre vos mesures selon le rythme convenu avec l’équipe infirmière (les alertes sont analysées au moins deux fois par semaine).',
      'Conserver les numéros d’urgence (15 / SAMU, 112, 114 par SMS) : les alertes de télésurveillance ne sont pas traitées en temps réel.',
    ],
    officialLinks: [
      {
        label: 'HAS — Référentiel de télésurveillance médicale dans l’insuffisance cardiaque',
        url: 'https://www.has-sante.fr/jcms/fc_2875171/fr/resultat-de-recherche?text=telesurveillance+insuffisance+cardiaque',
      },
      {
        label: 'ameli.fr — La télésurveillance médicale',
        url: 'https://www.ameli.fr/assure/remboursements/rembourse/telesurveillance-medicale',
      },
    ],
    asOf: '2026-11-25',
    articleSlug: 'telesurveillance-insuffisance-cardiaque',
  },
  {
    id: 'arret_travail_ij',
    titleFr: 'Arrêt de travail long et indemnités journalières (réforme d’octobre 2026)',
    category: 'travail',
    summaryFr:
      "Depuis le 15 octobre 2026 (décrets n° 2026-866 et 2026-867), la durée maximale d'indemnisation des arrêts longs hors ALD exonérante est réduite de 3 ans à 1 an. Les assurés reconnus en ALD exonérante (comme l'ALD 5 ou l'ALD 13) conservent toutefois le plafond maximal de 3 ans. Une reprise d'au moins 1 an est requise pour rouvrir une période complète.",
    stepsFr: [
      'Vérifier que votre ALD exonérante (ALD 5 ou ALD 13) est bien validée et active sur votre compte ameli, condition clé du maintien du plafond de 3 ans d’indemnités journalières.',
      'Transmettre vos avis d’arrêt de travail à votre CPAM et à votre employeur dans les 48 heures.',
      'Si votre arrêt était en cours au 15 octobre 2026 ou se prolonge au-delà de 6 mois, demander à votre CPAM confirmation écrite du régime transitoire et de vos droits restants.',
      'Solliciter le service social de l’Assurance Maladie dès 3 mois d’arrêt pour anticiper la reprise ou les aides financières complémentaires (prévoyance d’entreprise).',
    ],
    officialLinks: [
      {
        label: 'service-public.fr — Réforme de la durée d’indemnisation des arrêts longs (A19066)',
        url: 'https://www.service-public.fr/particuliers/actualites/A19066',
      },
      {
        label: 'Légifrance — Décret n° 2026-866 du 16 septembre 2026',
        url: 'https://www.legifrance.gouv.fr/search/all?tab_selection=all&query=2026-866',
      },
      {
        label: 'ameli.fr — Indemnités journalières en cas d’arrêt maladie',
        url: 'https://www.ameli.fr/assure/remboursements/indemnites-journalieres-maladie-maternite-paternite/arret-maladie-salarie',
      },
    ],
    asOf: '2026-11-25',
    articleSlug: 'vivre-avec-insuffisance-cardiaque-en-france',
  },
  {
    id: 'visite_pre_reprise',
    titleFr: 'Visite de pré-reprise et outils de maintien en emploi',
    category: 'travail',
    summaryFr:
      "Organisée avec le médecin du travail dès 30 jours d'arrêt (et systématique au-delà de 3 mois), la visite de pré-reprise prépare votre retour sans mettre fin à votre arrêt de travail. Elle permet d'envisager des aménagements de poste, un temps partiel thérapeutique, un essai encadré (jusqu'à 14 jours ouvrables) ou une convention CRPE (jusqu'à 18 mois).",
    stepsFr: [
      'Demander une visite de pré-reprise au service de prévention et de santé au travail (médecin du travail) dès 30 jours d’arrêt, ou via votre médecin traitant ou le médecin-conseil.',
      'Apporter vos derniers comptes rendus cardiologiques et décrire précisément les contraintes physiques ou horaires de votre poste.',
      'Discuter avec le médecin du travail des solutions mobilisables : aménagement de poste, télétravail, essai encadré, CRPE ou temps partiel thérapeutique.',
      'Vérifier avec votre employeur l’organisation de la visite de reprise obligatoire dans les 8 jours suivant votre retour effectif.',
    ],
    officialLinks: [
      {
        label: 'ameli.fr — Prévenir la désinsertion professionnelle et préparer la reprise',
        url: 'https://www.ameli.fr/assure/droits-demarches/maladie-accident-hospitalisation/arret-travail-maladie/preparer-reprise-travail',
      },
      {
        label: 'service-public.fr — Reprise du travail après un arrêt maladie (fiche F144)',
        url: 'https://www.service-public.fr/particuliers/vosdroits/F144',
      },
    ],
    asOf: '2026-11-25',
    articleSlug: 'vivre-avec-insuffisance-cardiaque-en-france',
  },
  {
    id: 'temps_partiel_therapeutique',
    titleFr: 'Temps partiel thérapeutique (« mi-temps thérapeutique »)',
    category: 'travail',
    summaryFr:
      "Le temps partiel thérapeutique permet une reprise progressive (20 % à 80 % pour les salariés, sans obligation d'arrêt à temps complet préalable depuis 2019 ; 50 % à 90 % à plein traitement dans la fonction publique). En 2026, les IJ salariées sont plafonnées à 42,97 € brut/jour (1,4 SMIC). À la suite du décret n° 2026-866, la durée maximale d'indemnisation est désormais liée aux nouvelles durées d'IJ (3 ans en ALD exonérante, 1 an hors ALD).",
    stepsFr: [
      'Demander une prescription de temps partiel thérapeutique à votre médecin traitant ou à votre cardiologue en précisant la quotité souhaitée.',
      'Solliciter l’accord de votre employeur sur l’aménagement des horaires et l’avis du médecin du travail lors de la visite de pré-reprise ou de reprise.',
      'Transmettre la prescription à votre CPAM (salariés/indépendants) ou à votre administration employeur (fonctionnaires, réponse sous 30 jours depuis le 1er août 2026).',
      'Faire confirmer par votre CPAM la durée maximale d’indemnisation applicable à votre situation depuis la réforme d’octobre 2026.',
    ],
    officialLinks: [
      {
        label: 'ameli.fr — Reprendre le travail à temps partiel thérapeutique',
        url: 'https://www.ameli.fr/assure/remboursements/indemnites-journalieres-maladie-maternite-paternite/temps-partiel-therapeutique',
      },
      {
        label: 'service-public.fr — Temps partiel thérapeutique dans le secteur privé (fiche F144)',
        url: 'https://www.service-public.fr/particuliers/vosdroits/F144',
      },
      {
        label: 'service-public.fr — Temps partiel thérapeutique d’un fonctionnaire (fiche F12788)',
        url: 'https://www.service-public.fr/particuliers/vosdroits/F12788',
      },
    ],
    asOf: '2026-11-25',
    articleSlug: 'vivre-avec-insuffisance-cardiaque-en-france',
  },
  {
    id: 'rqth_mdph',
    titleFr: 'Droits MDPH : RQTH, cartes CMI, AAH, PCH et soutien aux proches aidants (AJPA)',
    category: 'travail',
    summaryFr:
      "Le dossier MDPH (Cerfa 15692*01, évalué sur le retentissement fonctionnel) rassemble plusieurs droits essentiels : RQTH (aménagements de poste, préavis doublé, sans obligation d'en informer l'employeur ; équivalence automatique depuis le 1er janvier 2024 pour les titulaires d'une pension d'invalidité CPAM ou d'une CMI Invalidité), cartes CMI Stationnement / Priorité / Invalidité (attention : les anciennes cartes papier expirent le 31 décembre 2026), AAH déconjugalisée (jusqu'à 1 041,59 €/mois), PCH (demande avant 60 ans) et conditions ouvrant à vos proches le congé de proche aidant et l'AJPA (66,64 €/jour, 66 jours par personne aidée jusqu'à 4 personnes ; l'ALD 5 seule ne suffit pas).",
    stepsFr: [
      'Compléter le dossier unique MDPH (en ligne ou Cerfa 15692*01) avec le certificat médical détaillé de votre médecin ou cardiologue décrivant l’impact fonctionnel quotidien et professionnel (demander si besoin RQTH, CMI, AAH ou PCH en un seul dépôt).',
      'Vérifier si vous disposez déjà d’une équivalence RQTH automatique (pension d’invalidité CPAM ou CMI Invalidité, Loi pour le plein emploi) et penser à remplacer toute ancienne carte papier de stationnement ou d’invalidité avant le 31 décembre 2026.',
      'Déposer le dossier tôt (délai légal CDAPH jusqu’à 4 mois ; l’absence de réponse vaut rejet ; recours RAPO sous 2 mois) afin que vos proches puissent mobiliser le congé de proche aidant et l’AJPA (66,64 €/jour) sans préavis en cas de dégradation brutale.',
      'Décider librement, une fois la RQTH accordée, de la communiquer ou non à votre employeur ou au médecin du travail ; en cas de difficulté, solliciter une assistante sociale hospitalière ou Santé Info Droits (01 53 62 40 30).',
    ],
    officialLinks: [
      {
        label: 'service-public.fr — RQTH (fiche F1650)',
        url: 'https://www.service-public.fr/particuliers/vosdroits/F1650',
      },
      {
        label: 'service-public.fr — Carte mobilité inclusion CMI (fiche F34049)',
        url: 'https://www.service-public.fr/particuliers/vosdroits/F34049',
      },
      {
        label: 'service-public.fr — Allocation aux adultes handicapés AAH (fiche F12242)',
        url: 'https://www.service-public.fr/particuliers/vosdroits/F12242',
      },
      {
        label: 'service-public.fr — Congé de proche aidant et AJPA (fiche F16920)',
        url: 'https://www.service-public.fr/particuliers/vosdroits/F16920',
      },
    ],
    asOf: '2026-11-25',
    articleSlug: 'reseau-de-soins-et-aides-sociales-france',
  },
  {
    id: 'pension_invalidite',
    titleFr: 'Pension d’invalidité (Assurance Maladie)',
    category: 'travail',
    summaryFr:
      "Lorsque votre capacité de travail ou de gain est réduite d'au moins deux tiers du fait de votre état de santé, une pension d'invalidité peut compenser la perte de revenus : 30 % du salaire moyen des 10 meilleures années en catégorie 1 (activité réduite possible), 50 % en catégorie 2, et 50 % avec majoration pour tierce personne en catégorie 3. Elle reste provisoire et révisable.",
    stepsFr: [
      'Évaluer avec votre médecin traitant, votre cardiologue et le médecin-conseil de la CPAM si votre capacité de travail est durablement réduite d’au moins deux tiers.',
      'Déposer la demande auprès de votre CPAM (formulaire S4150) ou répondre à la proposition d’instruction initiée par le médecin-conseil avant la fin de vos IJ.',
      'Vérifier les conditions administratives d’affiliation et d’heures cotisées ainsi que l’articulation avec votre contrat de prévoyance d’entreprise.',
      'Déclarer régulièrement vos éventuels revenus d’activité afin d’éviter tout trop-perçu lors des révisions périodiques.',
    ],
    officialLinks: [
      {
        label: 'service-public.fr — Pension d’invalidité de la Sécurité sociale (fiche F672)',
        url: 'https://www.service-public.fr/particuliers/vosdroits/F672',
      },
      {
        label: 'ameli.fr — Comprendre la pension d’invalidité',
        url: 'https://www.ameli.fr/assure/droits-demarches/invalidite-handicap/invalidite',
      },
    ],
    asOf: '2026-11-25',
    articleSlug: 'vivre-avec-insuffisance-cardiaque-en-france',
  },
  {
    id: 'emprunt_aeras_lemoine',
    titleFr: 'Assurance emprunteur : Loi Lemoine et convention AERAS',
    category: 'emprunt',
    summaryFr:
      "Pour un prêt immobilier dont la part assurée est inférieure ou égale à 200 000 € par emprunteur et qui se termine avant 60 ans, aucun questionnaire de santé ne peut vous être demandé (Loi Lemoine). Au-delà, la convention AERAS encadre l'examen du dossier jusqu'à 420 000 € avant 71 ans ; attention, la grille de référence AERAS ne comprend aucune entrée pour l'insuffisance cardiaque ni la maladie coronarienne, et le droit à l'oubli ne s'applique pas aux cardiopathies.",
    stepsFr: [
      'Vérifier en premier lieu si votre projet immobilier remplit les deux conditions cumulatives d’exemption de questionnaire médical (≤ 200 000 € assurés par emprunteur et fin avant 60 ans).',
      'Si un questionnaire est requis, rassembler un dossier cardiologique clair (FEVG, stabilité, traitements, absence de décompensation récente) pour le médecin-conseil de l’assureur.',
      'Comparer plusieurs assureurs grâce à la délégation d’assurance et vérifier votre éligibilité à l’écrêtement des surprimes AERAS si vos revenus sont modestes.',
      'En cas de refus ou de surprime excessive, saisir la commission de médiation AERAS ou étudier une garantie alternative (nantissement d’assurance-vie, caution).',
    ],
    officialLinks: [
      {
        label: 'service-public.fr — Assurance emprunteur et convention AERAS (fiche F20520)',
        url: 'https://www.service-public.fr/particuliers/vosdroits/F20520',
      },
      {
        label: 'aeras-infos.fr — Site officiel de la convention AERAS et grille de référence',
        url: 'https://www.aeras-infos.fr/',
      },
    ],
    asOf: '2026-11-25',
    articleSlug: 'vivre-avec-insuffisance-cardiaque-en-france',
  },
  {
    id: 'permis_medecin_agree',
    titleFr: 'Permis de conduire : contrôle d’aptitude par un médecin agréé',
    category: 'conduite',
    summaryFr:
      "En France (arrêté du 28 mars 2022), l'aptitude médicale à la conduite après un DAI, un gilet LifeVest, un infarctus ou une insuffisance cardiaque NYHA III-IV relève exclusivement d'un médecin agréé (distinct de votre médecin traitant). Le port d'un gilet LifeVest interdit la conduite ; un DAI impose 4 semaines d'arrêt en prévention primaire (au moins 12 semaines en secondaire) en groupe 1 et entraîne une incompatibilité définitive en groupe 2.",
    stepsFr: [
      'Demander à votre cardiologue quels délais légaux d’interdiction de conduite s’appliquent à votre situation (infarctus, stent, pontage, DAI, LifeVest ou classe NYHA).',
      'Obtenir un compte rendu cardiologique récent précisant votre stabilité clinique, votre FEVG et, en cas de DAI, l’évaluation du risque syncopal.',
      'Prendre rendez-vous avec un médecin agréé pour le permis de conduire (liste disponible sur le site de votre préfecture ; il ne peut pas être votre médecin traitant).',
      'Effectuer la démarche de renouvellement sur le site de l’ANTS avec l’avis médical afin de recevoir votre titre à validité temporaire (6 mois à 5 ans) si requis.',
    ],
    officialLinks: [
      {
        label: 'Légifrance — Arrêté du 28 mars 2022 (affections médicales et permis de conduire)',
        url: 'https://www.legifrance.gouv.fr/search/all?tab_selection=all&query=arrete+28+mars+2022+permis+conduire+affections+medicales',
      },
      {
        label: 'service-public.fr — Contrôle médical pour le permis de conduire',
        url: 'https://www.service-public.fr/particuliers/vosdroits/F2686',
      },
    ],
    asOf: '2026-11-24',
    articleSlug: 'regles-conduite-automobile',
  },
  {
    id: 'vaccinations_ic',
    titleFr: 'Vaccinations recommandées dans l’insuffisance cardiaque (calendrier avril 2026)',
    category: 'prevention',
    summaryFr:
      "Les infections respiratoires sont un déclencheur majeur de décompensation cardiaque. Selon le calendrier vaccinal français d'avril 2026 et la HAS : vaccination antigrippale annuelle gratuite à tout âge (bon d'Assurance Maladie via « maladies des coronaires » ou « insuffisances cardiaques graves » ; vaccins Efluelda haute dose ou Fluad adjuvanté préférés dès 65 ans ; campagne 2026–2027 ouverte le 13 octobre 2026), rappel Covid-19 chaque automne, 1 dose pneumocoque dès 18 ans (Capvaxive PCV21 préféré par la HAS depuis juillet 2026, Prevenar 20 acceptable ; 65 % sur ordonnance), et à partir de 65 ans 1 dose VRS (Abrysvo ou Arexvy ; statut de remboursement seniors à vérifier en pharmacie fin 2026) ainsi que 2 doses contre le zona (Shingrix, remboursé à 65 %).",
    stepsFr: [
      'Faire le point sur votre carnet vaccinal avec votre médecin traitant, votre pharmacien ou votre infirmière IC / IPA (plusieurs vaccins peuvent être administrés le même jour sur deux sites différents).',
      'Réaliser chaque automne (campagne ouverte le 13 octobre 2026) la vaccination contre la grippe (gratuite avec le bon CPAM ; demander le bon au médecin, pharmacien ou infirmier si vous avez moins de 65 ans ; Efluelda ou Fluad privilégiés dès 65 ans) et le rappel Covid-19.',
      'Demander une ordonnance pour une dose unique de vaccin antipneumococcique conjugué (Capvaxive PCV21 préféré depuis juillet 2026, ou Prevenar 20 ; remboursé à 65 %, rattrapage possible après anciens vaccins PCV13/PPSV23).',
      'À partir de 65 ans, discuter du vaccin contre le VRS (en faisant confirmer les conditions exactes de remboursement en pharmacie ou auprès de votre CPAM fin 2026) et de Shingrix contre le zona (2 doses à 2 mois d’intervalle, remboursé à 65 %), puis enregistrer chaque vaccin dans Mon espace santé.',
    ],
    officialLinks: [
      {
        label: 'ameli.fr — Vaccination et campagne grippe / Covid-19',
        url: 'https://www.ameli.fr/assure/sante/themes/vaccination',
      },
      {
        label: 'sante.gouv.fr — Calendrier des vaccinations 2026',
        url: 'https://sante.gouv.fr/prevention-en-sante/preserver-sa-sante/vaccination/calendrier-vaccinal',
      },
      {
        label: 'HAS — Stratégie vaccinale pneumocoque (Capvaxive PCV21, juillet 2026)',
        url: 'https://www.has-sante.fr/jcms/fc_2875171/fr/resultat-de-recherche?text=Capvaxive+pneumocoque',
      },
    ],
    asOf: '2026-11-25',
    articleSlug: 'vaccinations-insuffisance-cardiaque',
  },
];
