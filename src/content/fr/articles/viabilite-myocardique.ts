import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'viabilite-myocardique',
  sourceWikiPath: 'wiki/concepts/myocardial-viability.md',
  titleFr: 'Viabilité myocardique : hibernation, cicatrice et tests de viabilité',
  category: 'diagnostic',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'viabilité',
    'hibernation',
    'sidération',
    'cicatrice',
    'lge',
    'irm-cardiaque',
    'échographie-dobutamine',
    'scintigraphie',
    'tep',
    'stich',
    'revived-bcis2',
  ],
  aliases: [
    'Viabilité myocardique',
    'Myocarde hibernant',
    'Hibernation myocardique',
    'Myocarde sidéré',
    'Test de viabilité',
    'Transmuralité cicatricielle',
    'Règle des 50 %',
    'Myocardial viability',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Après un infarctus ou un rétrécissement prolongé des artères coronaires, certaines zones du muscle cardiaque ne se contractent plus normalement : une partie est remplacée par une cicatrice définitive, tandis qu'une autre peut rester vivante mais « endormie » (myocarde viable ou hibernant). Les tests de viabilité — surtout l'IRM cardiaque avec contraste — mesurent cette distinction. Contrairement à l'hypothèse historique, les grands essais randomisés montrent que le test de viabilité ne permet pas à lui seul de choisir qui bénéficiera d'un pontage ou de stents ; en revanche, l'étendue de la cicatrice renseigne utilement votre cardiologue sur le pronostic et les chances de remontée de votre FEVG.",
  sections: [
    {
      headingFr: 'Décrypter les mots d’un compte rendu de viabilité',
      bodyMarkdownFr: `Les comptes rendus d'IRM cardiaque ou d'échographie de stress emploient un vocabulaire précis pour décrire les zones affaiblies du ventricule gauche :

- **Sidération (*stunning*) :** faiblesse transitoire du muscle après un manque d'apport sanguin bref mais non mortel, qui persiste quelque temps après le retour du flux avant de pouvoir récupérer.
- **Hibernation :** muscle encore vivant mais qui réduit volontairement sa contraction face à un apport sanguin chroniquement insuffisant (sidération et hibernation forment probablement un même continuum).
- **Viabilité :** muscle affaibli mais vivant, susceptible de retrouver tout ou partie de sa contraction.
- **Cicatrice (fibrose, nécrose) et rehaussement tardif (\`LGE\`) :** muscle remplacé par du tissu fibreux définitif. À l'IRM cardiaque après injection de gadolinium, la cicatrice apparaît brillante (\`LGE\`) ; le muscle sans rehaussement tardif est considéré comme viable.
- **Transmuralité :** proportion de l'épaisseur de la paroi occupée par la cicatrice, cotée par segment en cinq tranches : **0 %, 1–25 %, 26–50 %, 51–75 % et 76–100 %**.
- **Amincissement pariétal :** épaisseur de paroi en fin de diastole **≤ 5,5 mm** à l'IRM. Contrairement à une idée reçue, une paroi amincie n'est pas toujours entièrement cicatricielle : lorsqu'elle comporte peu de cicatrice (≤ 50 % de l'épaisseur), elle peut parfois se réépaissir et récupérer.
- **Segment dysfonctionnel :** zone qui se contracte faiblement (*hypokinétique*), plus du tout (*akinétique*) ou qui bombe vers l'extérieur (*dyskinétique*).`,
    },
    {
      headingFr: 'Comment chaque examen évalue la viabilité et ce que prédit la cicatrice',
      bodyMarkdownFr: `Quatre grandes techniques d'imagerie peuvent explorer la viabilité myocardique :

| Examen | Ce qu'il détecte | Repères habituels de viabilité | Points forts et limites |
|---|---|---|---|
| **IRM cardiaque avec LGE** | Profondeur de la cicatrice dans l'épaisseur de la paroi | Règle classique : cicatrice **≤ 50 %** de la paroi (seuil plus strict **≤ 25 %** dans REVIVED-BCIS2) | Technique privilégiée et méthode de référence pour les volumes VG ; sans rayons X |
| **IRM ou échographie sous faible dose de dobutamine** | Réserve contractile (le muscle s'épaissit-il sous stimulation légère ?) | Amélioration d'au moins 1 grade de contraction (2 grades si paroi dyskinétique/anévrismale) | Plus spécifique, mais moins sensible que le LGE seul |
| **Scintigraphie myocardique (\`SPECT\`)** | Captation d'un traceur par les cellules vivantes | Captation tardive ≥ 50 % du meilleur segment (ou ≥ 11 segments viables dans STICH) | Très disponible ; résolution spatiale inférieure à l'IRM |
| **TEP cardiaque (\`FDG-PET\`)** | Métabolisme du glucose dans un muscle mal perfusé | « Discordance » (*mismatch*) : perfusion réduite mais captation de glucose préservée = hibernation | Sensibilité élevée ; accès limité à certains centres spécialisés |

### Épaisseur de cicatrice à l'IRM et récupération d'un segment (Kim 2000)

Dans l'étude de référence (Kim et al., *NEJM* 2000 ; 50 patients coronariens, FEVG moyenne 43 %, 41 réexaminés ~11 semaines après revascularisation), la probabilité qu'un segment faible se contracte mieux diminuait progressivement avec la profondeur de la cicatrice :

- **0 % de cicatrice :** **78 %** des segments récupéraient (256/329) ;
- **1–25 % :** **60 %** (109/183) ;
- **26–50 % :** **42 %** (46/110) ;
- **51–75 % :** **10 %** (13/124) ;
- **76–100 % :** **2 %** (1/58).

Ces résultats expliquent la « règle des 50 % », mais rappellent qu'un seuil unique simplifie une réalité progressive et qu'une amélioration d'un segment isolé ne garantit pas à elle seule un gain de survie.

### Questions utiles à poser à votre cardiologue

- Qu'a montré mon IRM concernant la présence et l'étendue d'une cicatrice, et quelle part de la paroi reste viable ?
- Le résultat de viabilité sert-il à discuter d'une intervention sur les artères, ou surtout à préciser le pronostic et les chances d'amélioration de ma FEVG ?
- Ma FEVG a-t-elle été mesurée en échographie (ETT) ou en IRM, et dois-je comparer mes résultats uniquement entre examens de même nature ?`,
    },
    {
      headingFr: 'Les essais randomisés (STICH, REVIVED-BCIS2, PARR-2) et ce que la cicatrice apporte',
      depth: 'evidence',
      bodyMarkdownFr: `L'hypothèse historique de viabilité reposait sur la méta-analyse observationnelle d'**Allman 2002** (24 études des années 1990, 3 088 patients, résumé), où les médecins choisissaient qui opérer (fort biais de sélection). Les essais randomisés n'ont pas confirmé que la viabilité désigne qui tire un bénéfice de survie d'une revascularisation :

| Critère | Sous-étude viabilité STICH (pontage) | Analyse viabilité REVIVED-BCIS2 (stents) |
|---|---|---|
| **Stratégie testée** | Pontage (CABG) + médicaments vs médicaments seuls | Angioplastie par stents (PCI) + médicaments vs médicaments seuls |
| **Effectif et population** | 601/1 212 patients (sous-groupe non randomisé), 100 % ischémiques, FEVG ≤ 35 % | 610/700 patients (479 IRM, 131 écho dobutamine), 100 % ischémiques, FEVG ≤ 35 % |
| **Viabilité requise à l'entrée ?** | Non (81 % viables, 19 % [114 patients] non viables) | Oui (≥ 4 segments dysfonctionnels viables) ; analyse portant sur l'**étendue** |
| **Tests utilisés** | SPECT et/ou écho dobutamine (ni IRM ni TEP) | Majoritairement IRM (~70 %), écho de stress (~26 %) |
| **Suivi** | 5,1 ans puis 10,4 ans médians (inclusions 2002–2007, avant ARNI/iSGLT2, 2–3 % de DAI) | 3,4 ans médians (20–22 % de DAI à l'entrée ; ARNI/iSGLT2 peu ou pas utilisés) |
| **Interaction viabilité × traitement** | **Aucune :** p = 0,53 à 5 ans ; p = 0,34 à 10,4 ans (dans la sous-étude, le pontage réduisait la mortalité globale : HR ajusté 0,73 [0,60–0,90], indépendamment de la viabilité) | **Aucune** sur aucun critère, au seuil ≤ 25 % comme ≤ 50 % (décès ou hospitalisation IC : 36,3 % vs 36,2 %, HR 0,99 [0,76–1,29]) |
| **Lien viabilité/cicatrice et pronostic** | À 5 ans : association brute (HR 0,64) disparue après ajustement (p = 0,21) ; à 10 ans : HR 0,81 (0,63–1,03 ; p = 0,09) | Étendue viable non liée au pronostic (HR 0,98 par tranche de 10 %), mais **étendue non viable** (HR 1,07, p = 0,048) et **charge cicatricielle IRM** (**HR 1,18** [1,04–1,33] par tranche de 10 %) prédisaient décès ou hospitalisation IC |

- **Essai PARR-2 (FDG-PET, 430 patients, 2000–2006, résumés et rapport Ontario HTA 2010) :** formellement **neutre** à 1 an (30 % vs 36 %, HR 0,78 [0,58–1,10], p = 0,15 ; RR résumé 0,82, p = 0,16) et à 5 ans (53 % vs 57 %, HR 0,82 [0,62–1,07], p = 0,15). Les analyses favorables chez les patients ayant suivi l'avis TEP (HR 0,62 à 1 an, 0,73 à 5 ans), au centre expert d'Ottawa (**Ottawa-FIVE**, 111 patients, HR 0,34) ou au-delà de ~7 % de *mismatch* (D'Egidio 2009) sont post hoc et non randomisées, sur un critère dominé par les hospitalisations.
- **Ce que les résultats de cicatrice et d'ischémie apportent concrètement :**
  - **Charge cicatricielle et récupération de FEVG :** dans REVIVED-BCIS2, chaque tranche de 10 % supplémentaire de cicatrice réduisait les chances de gain de FEVG à 6 mois (**OR 0,69**), alors que la quantité de muscle viable ne la prédisait pas (OR 1,01). La complétude anatomique (HR 0,90) ou guidée par la viabilité (HR 0,95) de l'angioplastie n'améliorait pas non plus l'issue (**Ezad 2024**).
  - **Ischémie inductible :** dans STICH (**Panza 2013**, 399 patients), l'ischémie au test de stress ne modifiait pas l'effet du pontage (interactions p = 0,73–0,89).
  - **Parois amincies (Shah 2013, 1 055 patients) :** 18 % des zones ≤ 5,5 mm avaient une cicatrice limitée (≤ 50 %) et pouvaient s'épaissir (4,4 à 7,5 mm) après revascularisation (42 réexaminés, sans groupe médical témoin).
  - **Précision diagnostique segmentaire :** **Romero 2012** (24 études, 698 patients, résumé) rapporte une sensibilité de 95 % pour le LGE et une spécificité de 91 % pour l'IRM dobutamine ; l'analyse plus ancienne de **Schinkel 2007** (qualité AMSTAR faible 2/11 selon Ontario HTA 2010) situe la sensibilité de la TEP FDG à 92 % (spécificité 63 %) et la spécificité de l'IRM dobutamine à 82 %.
  - **Occlusions chroniques (CTO) :** la méta-analyse **Leite 2026** (majoritairement observationnelle, non restreinte à l'ICFER) montre un gain régional dans les segments viables (+16,7 % d'épaississement systolique), mais l'essai randomisé **REVASC** retrouvait une récupération comparable sous médicaments seuls. Le consensus européen **EAPCI/EACVI 2024** suggère toutefois d'évaluer ischémie et viabilité dans le territoire CTO lorsque la FEVG est réduite.`,
    },
    {
      headingFr: 'Recommandations internationales, limites et essais en cours',
      depth: 'evidence',
      bodyMarkdownFr: `| Référentiel | Position sur les tests de viabilité | Recommandations gradées associées |
|---|---|---|
| **ESC 2026 IC** (Europe) | Texte narratif non gradé : les preuves manquent pour sélectionner les patients à revasculariser par un test de viabilité | IRM avec contraste pour cause incertaine / cardiomyopathie suspectée : **Classe I, C** ; pontage privilégié par la Heart Team en atteinte pluritronculaire avec FEVG ≤ 35 % après traitement médical de fond : **IIa, B1** |
| **AHA/ACC/HFSA 2022** (États-Unis) | Note que la sous-étude STICH n'a pas lié viabilité et bénéfice à long terme du pontage | Bilan ischémique étiologique : **2a, B-NR** ; imagerie de stress pour guider la revascularisation : **2b, B-NR** (ischémie/stress, non spécifique à la viabilité) |
| **ACC/AHA/SCAI 2021** (revascularisation US) | Note l'absence de standardisation et de lien pronostique dans STICH | Pontage en atteinte pluritronculaire avec FEVG < 35 % : **1, B-R** |
| **Consensus EAPCI/EACVI 2024 (CTO)** | Évaluer ischémie et viabilité dans le territoire d'une CTO en cas de dysfonction VG (avis d'experts) | Consensus non gradé |

- **Limites et zones d'ombre :** STICH (2002–2007) et REVIVED-BCIS2 précèdent l'usage généralisé des ARNI et iSGLT2 ; les textes intégraux de PARR-2, Allman 2002, AHA 2020, Schinkel 2007 et Romero 2012 n'étaient pas accessibles (données issues de résumés ou de l'Ontario HTA).
- **Essai en cours :** **IMPROVE-ICMP** (\`NCT06930092\`, ~158 patients, fin estimée avril 2028) compare angioplastie guidée par physiologie/imagerie et traitement médical seul chez des patients avec FEVG IRM < 40 % et myocarde viable, sur un critère intermédiaire (FEVG IRM à 6 mois).

Pour l'analyse complète de la question « un test de viabilité sélectionne-t-il qui vit plus longtemps après pontage ou stents ? », consultez *Thèse : tests de viabilité myocardique et survie après revascularisation*.`,
    },
  ],
  relatedArticleSlugs: [
    'these-viabilite-et-survie-revascularisation',
    'revascularisation-pontage-stents',
    'examens-et-chiffres',
    'efx-strain-troponine-et-imagerie-cardiaque',
    'occlusion-coronaire-chronique-cto',
    'confirmer-la-cause-dysfonction-vg',
    'fraction-dejection',
    'cardiomyopathie-ischemique',
  ],
  sources: [
    {
      label: 'STICH (2011, STICHES 2016), sous-études viabilité (Bonow 2011, Panza 2019) et ischémie (Panza 2013)',
      detail: 'Absence d’interaction entre viabilité (SPECT/écho dobutamine) ou ischémie inductible et bénéfice de survie du pontage à 5 et 10,4 ans',
    },
    {
      label: 'REVIVED-BCIS2 (NEJM 2022), analyse de viabilité (2023), complétude (Ezad 2024) et ETT vs IRM',
      detail: 'Absence d’interaction viabilité × angioplastie, valeur pronostique de la charge cicatricielle IRM et prédiction de la récupération de FEVG',
    },
    {
      label: 'PARR-2 (Beanlands 2007, McArdle 2016), Ottawa-FIVE (2010) et Ontario HTA (2010)',
      detail: 'Stratégie guidée par TEP-FDG neutre à 1 et 5 ans, analyses d’observance post hoc et évaluation méthodologique de Schinkel 2007',
    },
    {
      label: 'Kim et al. (NEJM 2000), Shah et al. (JAMA 2013), Romero (2012), Allman (2002) et Ralota (2025)',
      detail: 'Tranches de transmuralité cicatricielle, récupération des parois amincies (≤ 5,5 mm) et comparatif des modalités d’imagerie',
    },
    {
      label: 'Recommandations ESC 2026 IC, AHA/ACC/HFSA 2022, ACC/AHA/SCAI 2021, EAPCI/EACVI 2024 (CTO) et Leite (2026)',
      detail: 'Position actuelle des sociétés savantes sur les tests de viabilité, l’IRM LGE et les occlusions coronaires chroniques',
    },
  ],
  disclaimerType: 'medical',
};
