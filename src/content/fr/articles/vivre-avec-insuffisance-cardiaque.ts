import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'vivre-avec-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/topics/living-with-heart-failure.md',
  titleFr: 'Vivre au quotidien avec une insuffisance cardiaque',
  category: 'quotidien',
  asOf: '2026-11-24',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'auto-surveillance',
    'pesée-quotidienne',
    'sel',
    'liquides',
    'réadaptation-cardiaque',
    'vaccinations',
    'conduite',
    'santé-mentale',
    'suivi',
  ],
  aliases: [
    'Auto-surveillance',
    'Vie quotidienne',
    'Signes d’alerte',
    'Pesée quotidienne',
    'Repères quotidiens',
    'Self-care',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Les médicaments et les dispositifs font beaucoup, mais les habitudes du quotidien comptent tout autant pour repérer tôt une déstabilisation et préserver votre qualité de vie. Pesez-vous chaque matin, connaissez les signes d'alerte qui imposent d'appeler votre équipe, maintenez des apports en sel modérés (sans restriction hydrique systématique sauf consigne contraire), restez actif grâce à la réadaptation cardiaque, tenez vos rendez-vous et vaccinations à jour et prenez soin de votre moral. Ces repères sont généraux : votre équipe peut fixer des objectifs personnalisés.",
  sections: [
    {
      headingFr: "Connaître vos chiffres et les signes d'alerte",
      bodyMarkdownFr: `L'auto-surveillance régulière aide à détecter une rétention d'eau avant qu'elle ne nécessite une hospitalisation.

- **Pesée quotidienne :** pesez-vous chaque matin à heure fixe, idéalement au réveil, après avoir uriné et avant le petit-déjeuner. Les repères de la British Heart Foundation (BHF) recommandent de contacter rapidement votre médecin traitant, votre cardiologue ou votre infirmière insuffisance cardiaque / IPA en cas de :
  - prise de poids supérieure à **2,0 kg en 3 jours**, ou
  - apparition ou aggravation d'un gonflement des chevilles, des pieds ou des jambes, ou d'un essoufflement nouveau.
- **« Connaître vos chiffres » :** le guide patient ESC 2026 regroupe sous cette formule le suivi régulier du poids, de la tension artérielle et de la fréquence cardiaque.
- **Symptômes à surveiller :**
  - essoufflement, y compris au repos ou en position allongée ;
  - fatigue inhabituelle ou croissante ;
  - œdèmes des pieds, des chevilles ou des jambes ;
  - vertiges ou sensations de tête légère ;
  - palpitations, toux persistante, confusion, respiration sifflante ou perte d'appétit.
- **Aggravation rapide :** l'ESC qualifie d'insuffisance cardiaque « décompensée » une dégradation sur quelques heures ou quelques jours. Elle nécessite souvent une prise en charge urgente.
- **Qui appeler en France :**
  - **Symptômes nouveaux ou qui s'aggravent** (prise de poids rapide, essoufflement accru, œdèmes) : contactez rapidement votre médecin traitant, votre cardiologue ou votre infirmière insuffisance cardiaque / IPA ; en dehors des heures ouvrables, appelez le **15** (régulation médicale / permanence des soins).
  - **Symptômes graves ou détresse aiguë** (essoufflement majeur au repos, douleur thoracique, malaise, perte de connaissance) : appelez immédiatement le **15 (SAMU)**, le **112** (numéro d'urgence européen) ou le **114** (par SMS ou visiophonie pour les personnes sourdes ou malentendantes).`,
    },
    {
      headingFr: 'Sel, liquides, alcool et tabac',
      bodyMarkdownFr: `Les recommandations historiques très strictes sur le sel et les boissons ont été réévaluées par des essais cliniques récents.

| Thème | Repères publiés | Source |
|---|---|---|
| Sel | Moins de **6 g de sel par jour** (environ une cuillère à café rase). Éviter les sels de régime de substitution, souvent riches en potassium | BHF |
| Sel (repère américain) | Limiter entre 2 000 et 3 000 mg par jour ; alimentation de type méditerranéen | Cleveland Clinic |
| Liquides | Ne restreindre **que si votre équipe médicale vous le prescrit**. Le cas échéant, toutes les boissons et soupes comptent | BHF |
| Alcool | Limiter strictement (moins de 14 unités britanniques par semaine dans le guide BHF ; en France, repères de modération encore plus prudents). Une consommation excessive peut provoquer ou aggraver une insuffisance cardiaque | BHF |
| Tabac | Arrêter complètement ou éviter tout tabagisme | Cleveland Clinic ; Guide patient ESC |

*Précision méthodologique :* les deux chiffres de sel proviennent de systèmes de santé différents et la page de la Cleveland Clinic ne précise pas s'il s'agit de sel (NaCl) ou de sodium ; ils ne doivent pas être pris comme des cibles individuelles.

Deux grands essais cliniques ont testé les anciennes restrictions systématiques :

- **SODIUM-HF (2022) :** une restriction très stricte en sodium (moins de 1 500 mg de sodium par jour) n'a pas réduit la mortalité ni les hospitalisations, tout en améliorant légèrement la qualité de vie.
- **FRESH-UP (2025) :** chez des patients stables suivis en ambulatoire, une limite fixe à **1,5 L de liquides par jour** n'a apporté aucun bénéfice par rapport à une hydratation libre, tout en augmentant la sensation de soif.

Le **consensus HFA-ESC 2024** recommande désormais :

- **Sel :** éviter les excès (jusqu'à environ **5 g de sel par jour** est acceptable) et éviter les restrictions extrêmes.
- **Liquides :** boire normalement, en vous fiant à votre soif. Les restrictions hydriques strictes sont réservées aux situations décidées par votre équipe médicale.

La recommandation britannique **NICE NG106 (2025)** va dans le même sens : ne pas restreindre systématiquement le sel ni les liquides, évaluer les apports habituels, conseiller au cas par cas et éviter les substituts de sel contenant du potassium. Pour approfondir, consultez les articles dédiés sur le sel et les liquides ainsi que sur la nutrition.`,
    },
    {
      headingFr: 'Activité physique et réadaptation cardiaque',
      bodyMarkdownFr: `- **ESC 2026 :** la réadaptation cardiaque basée sur l'exercice est recommandée pour **tous les patients stables (Classe I)**.
- **Données des essais :** une revue Cochrane de 2024 regroupant 60 essais (8 728 participants) montre que la réadaptation réduit probablement les hospitalisations toutes causes confondues (**15,9 % contre 23,8 %** à un an) et améliore la qualité de vie, sans effet démontré sur la mortalité. Les programmes à domicile obtiennent des résultats comparables aux programmes en centre.
- **Bénéfices au quotidien :** l'activité physique adaptée améliore les symptômes, le moral, le niveau d'énergie et le sommeil. Demandez à votre cardiologue, votre médecin traitant ou votre infirmière insuffisance cardiaque / IPA quel niveau d'exercice vous convient et comment accéder à un centre de réadaptation cardiaque (SMR cardiovasculaire).
- **Gérer la fatigue (fractionnement des efforts) :**
  - répartissez vos activités dans la journée sans chercher à tout faire d'un coup ;
  - prévoyez des temps de repos autour des journées chargées ;
  - privilégiez des repas plus légers et éventuellement plus fractionnés ;
  - demandez à votre équipe de rechercher d'autres causes de fatigue (anémie, carence en fer, apnée du sommeil, trouble thyroïdien, dépression).`,
    },
    {
      headingFr: 'Programmes de soins, suivi et télésurveillance',
      bodyMarkdownFr: `- **Recommandations ESC 2026 (toutes en Classe I) :**
  - prise en charge dans un programme multidisciplinaire d'insuffisance cardiaque (niveau de preuve B1) ;
  - éducation thérapeutique avec soutien à l'auto-surveillance (niveau A) ;
  - accompagnement de l'observance médicamenteuse (niveau B2).
- **À éviter formellement :** les **AINS (anti-inflammatoires non stéroïdiens)** tels que l'ibuprofène, le kétoprofène ou le diclofénac sont déconseillés (**ESC 2026 Classe III**) car ils augmentent le risque de décompensation cardiaque et d'atteinte rénale.
- **Rythme du suivi :**
  - **Guide patient ESC 2026 :** consultation **au moins tous les 6 mois**, même lorsque votre état est stable, et visite **1 à 2 semaines après une sortie d'hospitalisation**.
  - **Recommandation ESC 2026 (Figure 22, insuffisance cardiaque stable) :**
    - insuffisance cardiaque symptomatique : tous les **6 à 12 mois** par l'équipe d'insuffisance cardiaque ou le médecin traitant (examen clinique, ECG, bilan sanguin, échocardiographie transthoracique si pertinent, contrôle du dispositif implanté si pertinent) ;
    - insuffisance cardiaque avancée : tous les **3 à 6 mois**, avec orientation vers un centre d'insuffisance cardiaque avancée et discussion d'anticipation des soins ;
    - une note précise que ces intervalles peuvent être raccourcis selon l'évolution.
  - *Note de lecture :* le repère « au moins tous les 6 mois » du guide patient est plus strict que la fourchette de 6 à 12 mois de la figure principale ; c'est votre équipe qui fixe votre calendrier réel.
  - **Repère NICE NG106 (Royaume-Uni) :** au moins tous les 6 mois en période stable, et de quelques jours à 2 semaines après tout changement clinique ou de traitement, avec un plan de soins écrit comportant un interlocuteur identifié (souvent une infirmière spécialisée).
- **Contenu habituel d'une visite de suivi (ESC 2026) :**
  - évaluation des symptômes et de la prise effective des médicaments ;
  - électrocardiogramme (ECG), notamment pour repérer un élargissement du QRS pouvant faire discuter une resynchronisation (CRT) ;
  - bilan sanguin : numération formule sanguine, ionogramme (sodium, potassium), bilan martial (ferritine, CST), fonction rénale (créatinine, DFGe), bilan hépatique et thyroïdien.
  - L'échocardiographie transthoracique (ETT) est réalisée en cas d'aggravation ou de réévaluation ciblée.
- **Télésurveillance à domicile :** la télésurveillance non invasive (transmission du poids et des symptômes à une équipe infirmière) « peut être envisagée » (**ESC 2026 Classe IIb**). Un capteur implanté de pression artérielle pulmonaire « doit être envisagé » (**Classe IIa**) chez les patients en classe NYHA III ayant été hospitalisés pour insuffisance cardiaque dans les 12 derniers mois. En **France**, la télésurveillance à domicile est remboursée depuis juillet 2023 après une hospitalisation récente pour insuffisance cardiaque, ou en cas de classe NYHA II ou plus avec NT-proBNP élevé. Attention : les données transmises ne sont pas surveillées en temps réel et ne remplacent jamais l'appel aux secours ou au médecin en cas d'urgence.`,
    },
    {
      headingFr: 'Vaccinations recommandées',
      bodyMarkdownFr: `Les infections respiratoires sont un facteur fréquent de décompensation cardiaque.

- La recommandation **ESC 2026** indique que la vaccination annuelle contre la **grippe** et la vaccination contre le **pneumocoque** « doivent être envisagées » (**Classe IIa**).
- Le guide patient ESC, la BHF et NICE NG106 recommandent également une vaccination antigrippale annuelle et une vaccination antipneumococcique.
- En France, le référentiel **HAS ALD 5 (2025)** cite parmi les actes pris en charge les vaccins contre la grippe, le pneumocoque, le **VRS** (virus respiratoire syncytial, après 65 ans) et la **Covid-19**. Vérifiez votre calendrier vaccinal avec votre médecin traitant ou votre pharmacien.`,
    },
    {
      headingFr: 'Conduite automobile, voyages, travail et vie intime',
      bodyMarkdownFr: `- **Conduite automobile :** en France, l'aptitude médicale relève de l'arrêté du 28 mars 2022 et d'un **médecin agréé** (distinct de votre médecin traitant). Une insuffisance cardiaque stabilisée (NYHA I–II) n'interdit pas la conduite d'une voiture particulière, tandis qu'une classe NYHA III non stabilisée, une classe NYHA IV, le port d'un gilet défibrillateur (LifeVest) ou l'implantation récente d'un DAI entraînent des restrictions précises (par exemple **4 semaines** après un DAI en prévention primaire en France). La conduite professionnelle (groupe 2 : poids lourds, bus, taxis, VTC, ambulances) est beaucoup plus encadrée et définitivement incompatible avec un DAI. Pour comparaison, au Royaume-Uni (standard DVLA 2025), les conducteurs de voiture en NYHA I–III stables peuvent conduire sans déclarer à la DVLA, avec 1 mois d'arrêt après un DAI préventif et 6 mois après un choc approprié. Tous les détails figurent dans l'article sur les règles de conduite.
- **Voyages :**
  - la majorité des personnes dont l'insuffisance cardiaque est stable peuvent voyager ;
  - gardez toujours vos médicaments dans votre **bagage à main**, accompagnés de vos ordonnances et d'une liste à jour des doses ;
  - évitez les séjours en altitude **au-dessus de 2 000 m** ;
  - déclarez votre pathologie cardiaque à votre assurance voyage et vérifiez les conditions de rapatriement.
- **Travail en France :** le temps partiel thérapeutique, la visite de pré-reprise avec le médecin du travail, la réforme des indemnités journalières au 15 octobre 2026 (plafond ramené à 1 an hors ALD exonérante, mais maintenu à **3 ans** en ALD exonérante comme l'ALD 5 ou l'ALD 13) et l'assurance emprunteur (Loi Lemoine et convention AERAS) sont détaillés dans l'article dédié aux démarches en France.
- **Vie sexuelle :** la plupart des patients peuvent avoir une vie sexuelle satisfaisante une fois leurs symptômes stabilisés. Un repère pratique couramment cité par la BHF consiste à pouvoir marcher environ 1,6 km (un mile) sur terrain plat en 20 minutes ou monter deux étages d'escaliers sans gêne importante. N'hésitez pas à en parler à votre cardiologue, notamment avant toute prise de traitement contre les troubles de l'érection (interaction dangereuse avec les dérivés nitrés).`,
    },
    {
      headingFr: 'Santé émotionnelle et anticipation',
      bodyMarkdownFr: `- **Émotions fréquentes :** l'anxiété, la tristesse et la peur sont très fréquentes après l'annonce du diagnostic ou une hospitalisation. Si ces ressentis persistent, parlez-en à votre médecin traitant ou à votre équipe de cardiologie.
- **Dépression :** elle touche environ **20 à 30 %** des personnes atteintes d'insuffisance cardiaque et est associée à davantage d'hospitalisations et à une mortalité plus élevée. La thérapie cognitivo-comportementale (TCC) et l'activité physique sont les approches les mieux étayées par les essais cliniques. En France, un soutien psychologique peut être organisé via votre centre de réadaptation cardiaque (SMR), l'hôpital, votre médecin traitant ou le dispositif **Mon soutien psy**.
- **Anticiper sereinement :** le guide patient ESC encourage l'anticipation des soins, et la recommandation ESC 2026 la place en **Classe I** dans l'insuffisance cardiaque avancée. L'ESC résume trois grands objectifs de traitement — **vivre plus longtemps**, **éviter les hospitalisations** et **se sentir mieux** — et vous invite à discuter de vos priorités avec vos proches et votre équipe.
- **Soins de support et soins palliatifs :** la Heart Failure Association (HFA) rappelle que ces soins ne se limitent pas à la fin de vie : ils apportent un soulagement des symptômes et un soutien global **en parallèle** des traitements habituels, à tout stade si nécessaire. En France, la désignation d'une **personne de confiance** et la rédaction de **directives anticipées** permettent de formaliser vos souhaits.`,
    },
  ],
  relatedArticleSlugs: [
    'comprendre-le-diagnostic',
    'medicaments-insuffisance-cardiaque',
    'dispositifs-cardiaques-dai-crt',
    'questions-equipe-cardiologie',
    'vivre-avec-insuffisance-cardiaque-en-france',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'sel-et-liquides-insuffisance-cardiaque',
    'nutrition-et-complements-insuffisance-cardiaque',
    'poids-obesite-et-denutrition',
    'readaptation-cardiaque-et-activite-physique',
    'depression-et-sante-emotionnelle',
    'soins-de-support-et-anticipation',
    'regles-conduite-automobile',
    'recommandations-comparees-esc-us-nice',
    'telesurveillance-insuffisance-cardiaque',
    'traitements-additionnels-nouveaux',
  ],
  sources: [
    {
      label: 'ESC 2026 — Recommandations Insuffisance Cardiaque',
      detail:
        'Réadaptation Classe I, programmes multidisciplinaires Classe I (B1/A/B2), AINS Classe III, vaccinations Classe IIa, rythme de suivi (Figure 22), télésurveillance Classe IIb et capteur de pression pulmonaire Classe IIa.',
    },
    {
      label: 'ESC 2026 — Guide patient insuffisance cardiaque',
      detail:
        'Repères « connaître vos chiffres », définition de la décompensation, fréquence de suivi, objectifs de soins, santé mentale et anticipation.',
    },
    {
      label: 'British Heart Foundation (BHF) — Understanding Heart Failure',
      detail:
        'Seuil de pesée (> 2 kg en 3 jours), symptômes d’alerte, repères sel/liquides/alcool, fatigue, voyages, vie sexuelle et soutien émotionnel.',
    },
    {
      label: 'Essais SODIUM-HF (2022), FRESH-UP (2025) et consensus HFA-ESC 2024',
      detail:
        'Réévaluation de la restriction stricte en sodium et en liquides ; repères modérés (~5 g de sel/j et hydratation selon la soif).',
    },
    {
      label: 'Revue Cochrane 2024 (réadaptation cardiaque)',
      detail:
        '60 essais randomisés : réduction des hospitalisations toutes causes (15,9 % vs 23,8 %) et amélioration de la qualité de vie ; équivalence domicile/centre.',
    },
    {
      label: 'NICE NG106 (2025) — Chronic Heart Failure',
      detail:
        'Suivi au moins semestriel, plan de soins écrit, vaccinations et absence de restriction systématique en sel ou en liquides.',
    },
    {
      label: 'HAS — Référentiel télésurveillance IC et ALD 5 (2025)',
      detail:
        'Conditions françaises de prise en charge de la télésurveillance (depuis juillet 2023) et liste des vaccinations recommandées.',
    },
    {
      label: 'Basile et al. (2023) & HFA Position Paper (2020)',
      detail:
        'Prévalence et prise en charge de la dépression (20 à 30 %) ; approche palliative intégrée à tout stade.',
    },
    {
      label: 'service-public.fr (A19066) et ameli.fr (maintien en emploi)',
      detail:
        'Réforme des indemnités journalières au 15 octobre 2026 (exception ALD exonérante à 3 ans) et outils de reprise du travail en France.',
    },
  ],
  disclaimerType: 'medical',
};
