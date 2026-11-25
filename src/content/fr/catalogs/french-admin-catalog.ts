import type { FrenchAdminCatalogItem } from '../../../types';

export const FRENCH_ADMIN_CATALOG: FrenchAdminCatalogItem[] = [
  {
    id: 'ald_5_13',
    titleFr: 'Demande d’ALD exonérante (ALD 5 insuffisance cardiaque / ALD 13 maladie coronarienne)',
    category: 'couverture',
    summaryFr:
      "L'ALD exonérante assure une prise en charge à 100 % du tarif de la Sécurité sociale pour les soins liés à votre insuffisance cardiaque (ALD 5, critères HAS juillet 2025 : symptômes + FEVG < 40 % en systolique, ou épisode congestif avec FEVG > 40 %) et/ou à votre maladie coronarienne (ALD 13, ischémie documentée), pour 10 ans renouvelables. Elle maintient également le plafond de 3 ans d'indemnités journalières après la réforme d'octobre 2026.",
    stepsFr: [
      'Demander à votre médecin traitant d’établir le protocole de soins en lien avec votre cardiologue (joindre comptes rendus d’ETT, d’IRM cardiaque ou de coronarographie).',
      'Attendre la validation du médecin-conseil de votre CPAM, puis signer le protocole de soins et vérifier votre attestation de droits sur ameli.fr.',
      'Présenter votre protocole de soins lors des consultations afin que les prescriptions liées à votre cardiopathie figurent dans la partie haute de l’ordonnance bizone.',
      'Anticiper le renouvellement avant l’échéance (10 ans) et vérifier auprès de votre mutuelle la couverture des frais non pris en charge (dépassements d’honoraires, forfait hospitalier).',
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
        label: 'HAS — Actes et prestations ALD 5 (insuffisance cardiaque, 2025)',
        url: 'https://www.has-sante.fr/jcms/fc_2875171/fr/resultat-de-recherche?text=ALD+5+insuffisance+cardiaque',
      },
    ],
    asOf: '2026-11-25',
    articleSlug: 'vivre-avec-insuffisance-cardiaque-en-france',
  },
  {
    id: 'smr_rehab',
    titleFr: 'Réadaptation cardiaque en SMR cardiovasculaire',
    category: 'parcours_soins',
    summaryFr:
      "La réadaptation cardiaque (ESC 2026 Classe I, GERS-P/SFC 2023 Classe I grade A) se déroule en service de SMR (ex-SSR) mention cardiovasculaire, en hospitalisation complète ou en hôpital de jour (au moins 20 séances combinant endurance aérobie, renforcement musculaire encadré et entraînement inspiratoire). Elle inclut aussi l'éducation thérapeutique (ETP), le suivi diététique et psychologique et la préparation à la reprise du travail. Aucune entente préalable n'est nécessaire et les séances sont prises en charge à 100 % par l'Assurance Maladie.",
    stepsFr: [
      'Demander une prescription de réadaptation cardiaque à la sortie d’hospitalisation, ou directement à votre cardiologue de ville ou à votre médecin traitant.',
      'Choisir avec votre médecin le centre SMR cardiovasculaire adapté (hôpital de jour si vous habitez à proximité, ou séjour complet, recommandé d’emblée en classe NYHA IIIb selon le GERS-P).',
      'Transmettre le dossier médical au centre SMR choisi (aucune demande d’accord préalable CPAM n’est requise).',
      'Suivre l’ensemble du programme (endurance, renforcement musculaire encadré, ETP, optimisation des traitements) puis organiser avec votre équipe le relais d’activité physique après la sortie (au moins 3 séances/semaine selon la HAS 2022, en validant les charges adaptées).',
    ],
    officialLinks: [
      {
        label: 'HAS — Orientation vers la réadaptation cardiaque (2024)',
        url: 'https://www.has-sante.fr/jcms/fc_2875171/fr/resultat-de-recherche?text=readaptation+cardiaque',
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
    titleFr: 'Reconnaissance de la qualité de travailleur handicapé (RQTH — MDPH)',
    category: 'travail',
    summaryFr:
      "Attribuée par la MDPH, la RQTH facilite les aménagements de poste, l'accès aux dispositifs de reconversion et double la durée du préavis légal en cas de licenciement. Vous n'avez aucune obligation d'en informer votre employeur si vous ne souhaitez pas la mobiliser immédiatement.",
    stepsFr: [
      'Retirer ou compléter en ligne le dossier de demande MDPH (formulaire Cerfa) et faire remplir le certificat médical détaillé par votre médecin traitant ou votre cardiologue.',
      'Joindre les justificatifs d’identité, de domicile et vos comptes rendus médicaux décrivant le retentissement sur votre activité professionnelle.',
      'Déposer le dossier complet à la MDPH de votre département (délai légal d’instruction jusqu’à 4 mois ; l’absence de réponse vaut rejet).',
      'Décider librement, une fois la RQTH accordée, de la communiquer ou non à votre employeur ou au médecin du travail pour activer des aménagements.',
    ],
    officialLinks: [
      {
        label: 'service-public.fr — Reconnaissance de la qualité de travailleur handicapé (fiche F1650)',
        url: 'https://www.service-public.fr/particuliers/vosdroits/F1650',
      },
    ],
    asOf: '2026-11-25',
    articleSlug: 'vivre-avec-insuffisance-cardiaque-en-france',
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
    titleFr: 'Vaccinations recommandées dans l’insuffisance cardiaque',
    category: 'prevention',
    summaryFr:
      "Les infections respiratoires favorisent les décompensations cardiaques. Les recommandations ESC 2026 (Classe IIa) et le guide HAS ALD 5 (2025) recommandent la vaccination annuelle contre la grippe, la vaccination contre le pneumocoque, ainsi que la vaccination contre la Covid-19 et contre le VRS (après 65 ans).",
    stepsFr: [
      'Faire le point sur votre carnet vaccinal avec votre médecin traitant, votre pharmacien ou votre infirmière insuffisance cardiaque / IPA.',
      'Réaliser la vaccination antigrippale chaque automne (prise en charge à 100 % avec le bon de l’Assurance Maladie en cas de pathologie cardiaque chronique).',
      'Vérifier la mise à jour de votre vaccination antipneumococcique et discuter des rappels Covid-19 ainsi que du vaccin contre le VRS si vous avez 65 ans ou plus.',
      'Noter chaque vaccination dans votre dossier médical partagé (Mon espace santé) et dans votre journal de suivi.',
    ],
    officialLinks: [
      {
        label: 'ameli.fr — Vaccination et prise en charge pour les personnes fragiles',
        url: 'https://www.ameli.fr/assure/sante/themes/vaccination',
      },
      {
        label: 'HAS — Guide ALD 5 insuffisance cardiaque (vaccinations listées, 2025)',
        url: 'https://www.has-sante.fr/jcms/fc_2875171/fr/resultat-de-recherche?text=ALD+5+insuffisance+cardiaque',
      },
    ],
    asOf: '2026-11-24',
    articleSlug: 'vivre-avec-insuffisance-cardiaque',
  },
];
