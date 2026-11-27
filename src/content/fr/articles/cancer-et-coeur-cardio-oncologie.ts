import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'cancer-et-coeur-cardio-oncologie',
  sourceWikiPath: 'wiki/concepts/cancer-and-the-heart.md',
  titleFr: 'Cancer et cœur (cardio-oncologie) dans l’insuffisance cardiaque',
  category: 'comorbidites',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'cardio-oncologie',
    'cancer',
    'depistage-cancer',
    'hfa-icos',
    'ctrcd',
    'anthracyclines',
    'trastuzumab',
    'immunotherapie',
    'radiotherapie',
    'fluoropyrimidines',
    'hormonotherapie',
    'aod',
    'interactions-medicamenteuses',
    'chip',
    'france',
    'icfer',
  ],
  aliases: [
    'Cardio-oncologie',
    'Cancer et insuffisance cardiaque',
    'Dépistage du cancer',
    'Cardiotoxicité',
    'CTRCD',
    'HFA-ICOS',
    'Anthracyclines',
    'Myocardite immunothérapie',
    'IMPULSION',
  ],
  linkedModules: ['core', 'atrialFibrillation', 'lvThrombusOrAneurysm'],
  plainSummaryFr:
    "L'insuffisance cardiaque et le cancer se croisent souvent, en grande partie parce qu'ils partagent des facteurs communs (âge, tabac, diabète, surpoids, inflammation chronique) et parce que le suivi cardiaque multiplie les examens qui détectent davantage de cancers. Les médicaments de fond de l'insuffisance cardiaque évalués jusqu'ici (sartans, inhibiteurs SGLT2, spironolactone) n'ont pas démontré d'augmentation globale du risque de cancer. Si un cancer survient alors que vous avez déjà une insuffisance cardiaque à FEVG réduite, certains traitements anticancéreux peuvent solliciter le cœur : vous relevez alors d'une catégorie de risque élevé ou très élevé, ce qui ne signifie pas que le traitement du cancer est refusé, mais qu'il s'organise conjointement entre oncologue et cardiologue (idéalement en consultation de cardio-oncologie) avec bilan initial, surveillance rapprochée et maintien de vos traitements cardiaques. En France, les dépistages organisés (colorectal, sein, col de l'utérus) s'appliquent comme pour toute la population.",
  keyTakeawaysFr: [
    "Les médicaments de fond de l'insuffisance cardiaque évalués (ARA2, iSGLT2, spironolactone) n'ont pas montré de hausse globale du risque de cancer ; ne modifiez jamais votre traitement sans avis cardiologique.",
    "Avoir une insuffisance cardiaque place dans un groupe à risque élevé avant certains anticancéreux : cela déclenche une surveillance rapprochée en cardio-oncologie, pas un refus automatique de soins.",
    "Chaque nouveau médicament anticancéreux doit être vérifié par votre pharmacien ou votre équipe si vous prenez un anticoagulant (apixaban, rivaroxaban) ou un antiplaquettaire, en raison des interactions et des baisses de plaquettes.",
    "En France, vous bénéficiez des mêmes dépistages organisés gratuits (colorectal, sein, col de l'utérus) ; le dosage du PSA est une décision individuelle et le programme pilote IMPULSION concerne certains gros fumeurs ou anciens fumeurs.",
  ],
  sections: [
    {
      headingFr: '1. Lien entre insuffisance cardiaque, médicaments cardiaques et cancer',
      depth: 'patient',
      bodyMarkdownFr: `### Pourquoi l'insuffisance cardiaque et le cancer coexistent souvent

Les grandes études observationnelles constatent davantage de nouveaux diagnostics de cancer chez les personnes ayant une insuffisance cardiaque que dans la population générale (à l'exception du cancer de la prostate, qui n'est pas augmenté). Plusieurs explications coexistent :

- **Facteurs de risque partagés :** l'âge, le tabagisme, le diabète et l'obésité favorisent à la fois la maladie coronaire et plusieurs cancers (voir *Tabac et alcool* et *Poids, obésité et dénutrition*).
- **Inflammation chronique de bas grade :** un terrain inflammatoire prolongé pourrait favoriser les deux maladies (voir *Risque inflammatoire résiduel*).
- **Hématopoïèse clonale (CHIP) :** avec l'âge, certaines cellules souches sanguines acquièrent des mutations liées à la fois aux cancers du sang et à la maladie coronaire.
- **Biais de surveillance :** les personnes suivies pour une insuffisance cardiaque passent plus souvent des prises de sang et des examens d'imagerie, ce qui conduit à découvrir plus tôt ou plus souvent un cancer.

### Vos médicaments cardiaques augmentent-ils le risque de cancer ?

Les grandes synthèses d'essais disponibles sont globalement rassurantes :

- **ARA2 (sartans, dont le valsartan présent dans le sacubitril/valsartan — *Entresto*) :** une inquiétude initiale de 2010 n'a pas été confirmée par une méta-analyse ultérieure de 15 essais ni par la revue de la FDA portant sur 31 essais, qui n'ont retrouvé aucune hausse du risque de cancer.
- **Inhibiteurs SGLT2 (dapagliflozine — *Forxiga*, empagliflozine — *Jardiance*) :** résultats neutres dans les grands regroupements d'essais (majoritairement menés dans le diabète).
- **Spironolactone (*Aldactone*) :** résultat globalement neutre dans les études observationnelles, malgré quelques signaux isolés non confirmés.

Aucune source revue ne recommande d'arrêter un médicament de l'insuffisance cardiaque par crainte d'un risque de cancer. Toute question à ce sujet se discute avec votre cardiologue.`,
    },
    {
      headingFr: '2. Traitements anticancéreux pouvant solliciter le cœur et parcours cardio-oncologique',
      depth: 'patient',
      bodyMarkdownFr: `### Quels traitements demandent une vigilance cardiaque ?

On parle de **CTRCD** (*cancer therapy-related cardiac dysfunction*) lorsqu'un traitement anticancéreux entraîne une baisse de la FEVG, une baisse relative du *strain* longitudinal global (**GLS**) supérieure à 15 % à l'échocardiographie (ETT), ou une élévation de la troponine ou du NT-proBNP (voir *EFX, strain, troponine et imagerie cardiaque*).

| Famille de traitement (exemples) | Effet cardiaque principal | Surveillance habituelle décrite |
|---|---|---|
| **Anthracyclines** (doxorubicine, épirubicine) | Atteinte du muscle cardiaque, parfois tardive (risque croissant avec la dose cumulée) | ETT avec FEVG et GLS, troponine et NT-proBNP en cours de cure ; formes liposomales ou dexrazoxane discutés si haut risque |
| **Thérapies anti-HER2** (trastuzumab) | Affaiblissement du muscle cardiaque, souvent réversible | ETT avec FEVG et GLS tous les 3 mois (plus rapprochée si haut risque) |
| **Immunothérapies (inhibiteurs de points de contrôle)** (pembrolizumab, nivolumab, ipilimumab) | Myocardite (inflammation cardiaque), rare (~1 %) mais précoce et sérieuse | Interruption du traitement et corticoïdes à forte dose en urgence en cas de suspicion |
| **Fluoropyrimidines** (5-FU, capécitabine) | Spasme des artères coronaires et douleurs thoraciques | ETT initiale si cardiopathie connue ; arrêt en cas de symptômes |
| **Inhibiteurs du VEGF** (bévacizumab, sunitinib) | Hypertension artérielle, IC, événements artériels | Mesure tensionnelle à domicile et en consultation ; ECG si risque d'allongement du QT |
| **Radiothérapie thoracique** (sein, poumon, lymphome) | Maladie coronaire tardive (risque proportionnel à la dose cardiaque moyenne, persistant plus de 20 ans) | Planification limitant la dose au cœur ; suivi au long cours |
| **Hormonothérapie du cancer de la prostate (ADT)** | Risque cardiovasculaire accru sous agonistes de la GnRH, effets sur le QT | Contrôle strict des facteurs de risque ; ECG si QTc allongé |
| **Inhibiteurs de BTK** (ibrutinib) | Fibrillation atriale et saignements | Contrôle du pouls/rythme à chaque visite ; pause avant geste invasif ou si bithérapie antiplaquettaire nécessaire |

### Si un cancer est diagnostiqué : ce que prévoit le bilan HFA-ICOS (ESC 2022)

Selon les tables de risque **HFA-ICOS 2020** reprises par les recommandations **ESC 2022 de cardio-oncologie**, le seul fait d'avoir une **insuffisance cardiaque ou une cardiomyopathie préexistante** classe dans la catégorie **très haut risque** pour les anthracyclines, les anti-HER2, les inhibiteurs du VEGF, les traitements du myélome et les inhibiteurs RAF/MEK (et **haut risque** pour les inhibiteurs BCR-ABL et l'hormonothérapie prostatique).

Être classé à haut ou très haut risque **ne signifie pas que le traitement du cancer est automatiquement refusé**. Cela déclenche une organisation protectrice :

- **Orientation vers une consultation de cardio-oncologie** (ou un cardiologue expérimenté) pour une décision conjointe oncologue–cardiologue.
- **Maintien et optimisation de vos traitements de l'IC** (IEC/ARA2/ARNI, bêtabloquant, statine).
- **Bilan cardiaque initial** : ECG, ETT avec mesure de la FEVG et du **GLS** (idéalement sur le même appareil d'échographie pour comparer), dosage de la troponine et du NT-proBNP.
- **Suivi après traitement** : réévaluation à 3 et 12 mois, puis suivi échographique au long cours selon le niveau de risque.`,
    },
    {
      headingFr: '3. Anticoagulants, antiplaquettaires et dépistage du cancer en France',
      depth: 'patient',
      bodyMarkdownFr: `### Interactions entre anticoagulants, antiplaquettaires et traitements anticancéreux

Si vous prenez un anticoagulant oral direct (**apixaban** — *Eliquis*, **rivaroxaban** — *Xarelto*) ou un antiplaquettaire (aspirine, clopidogrel), **chaque nouveau médicament anticancéreux doit être vérifié par votre pharmacien ou votre équipe de cardiologie** :

- **Interactions enzymatiques (CYP3A4 et P-gp) :** certains anticancéreux augmentent les concentrations d'apixaban ou de rivaroxaban (risque hémorragique), tandis que d'autres les diminuent fortement (risque de caillot ; par exemple, un modèle informatique prévoit une baisse d'exposition sous enzalutamide).
- **Baisse des plaquettes sous chimiothérapie :** il n'existe pas de seuil unique « garanti sans risque » pour les anticoagulants oraux directs ; l'équipe surveille la numération formule sanguine, les reins et le foie, envisage une protection gastrique et adapte si besoin les antiplaquettaires selon des seuils précis (selon un résumé ACC des recommandations ESC 2022, pas d'aspirine sous 10 000/µL, pas de clopidogrel sous 30 000/µL, pas de prasugrel ni de ticagrélor sous 50 000/µL).
- **Hypertension sous anticancéreux :** le diltiazem et le vérapamil sont déconseillés (interactions et contre-indication dans l'ICFER).

### Dépistage du cancer et ressources en France (au 2026-11-26)

Aucune règle spécifique à l'insuffisance cardiaque ne modifie les programmes nationaux : les dispositifs généraux de l'Assurance Maladie s'appliquent, avec invitations disponibles dans votre compte **ameli**.

| Dépistage en France | Public concerné | Modalités | Prise en charge |
|---|---|---|---|
| **Cancer colorectal** | Femmes et hommes de 50 à 74 ans (risque moyen) | Test immunologique de recherche de sang dans les selles à domicile tous les 2 ans ; coloscopie si positif | 100 % sur invitation Assurance Maladie |
| **Cancer du sein** | Femmes de 50 à 74 ans | Mammographie + examen clinique tous les 2 ans avec double lecture | 100 % |
| **Cancer du col de l'utérus** | Femmes de 25 à 65 ans | Frottis entre 25 et 29 ans ; test HPV tous les 5 ans dès 30 ans | Pris en charge |
| **Cancer de la prostate (PSA)** | Pas de programme organisé | Décision individuelle partagée avec votre médecin (environ 70 % des PSA élevés ne sont pas un cancer, et près de la moitié des cancers détectés n'évolueraient pas vers une forme grave) | Remboursement usuel sur prescription |
| **Cancer du poumon (pilote IMPULSION)** | 50 à 74 ans, fumeur actif ou sevré depuis moins de 15 ans (~20 paquets-années), dans 5 régions (ARA, HdF, IdF, Pays de la Loire, PACA) | Scanner thoracique faible dose (deux examens à 1 an d'intervalle puis tous les 2 ans) + aide au sevrage tabagique ; exclusion en cas de comorbidités sévères empêchant diagnostic ou traitement | 100 % (renseignements au **34 33** ou sur depistage-cancer-poumon.fr) |

- Si une coloscopie est nécessaire après un test positif, anticipez la gestion de vos antiplaquettaires ou anticoagulants avec votre cardiologue et votre gastro-entérologue (voir *Chirurgie, soins dentaires et jours de maladie*).
- Pour **IMPULSION**, demandez au médecin investigateur si votre insuffisance cardiaque permet l'inclusion.
- En France, des **consultations dédiées de cardio-oncologie** existent dans plusieurs CHU (notamment Marseille, Lyon et d'autres centres universitaires), et la Société Française de Cardiologie dispose d'un groupe dédié depuis 2019.`,
    },
    {
      headingFr: '4. Données détaillées des études, comparatif et limites des preuves',
      depth: 'evidence',
      bodyMarkdownFr: `### Études d'incidence du cancer dans l'insuffisance cardiaque

| Étude | Population | Résultat principal | Accès source |
|---|---|---|---|
| **Banke 2016** (Danemark) | 9 307 patients ambulatoires en IC chronique (89 % FEVG < 45 %) | Ratio d'incidence **1,24 (1,15–1,33)** vs population générale ; hausse pour tous les grands types **sauf prostate** ; persiste au-delà de la 1re année | Résumé |
| **Hasin 2013** (États-Unis) | 596 paires IC / témoins suivies 7,7 ans | **HR ajusté 1,68 (1,13–2,50)** | Résumé |
| **Hasin 2016** (États-Unis) | 1 081 survivants d'un 1er infarctus | Survenue d'IC post-IDM : **HR 1,71 (1,07–2,73)** après ajustement | Résumé |
| **Camilli 2023** (méta-analyse) | 9 cohortes, 515 041 patients IC | **HR 1,45 (1,31–1,61)**, hétérogénéité très forte (I² 98 %) ; mortalité par cancer non significativement accrue | Texte intégral |
| **Jaiswal 2023** (méta-analyse) | 9 cohortes, 7,3 millions de personnes | **HR 1,43 (1,21–1,68)** (ajusté seul 1,35) ; poumon 1,89, colorectal 1,32, sein 1,28, hémopathies 1,63 ; **prostate 0,97** | Texte intégral |
| **Zheng 2022** (analyse poolée) | 8 cohortes, 384 504 patients IC | **HR 1,27 (0,99–1,62)**, **non significatif** (recours privilégié aux analyses avec délai de latence pour limiter le biais de surveillance) | Texte intégral |

Les trois méta-analyses réutilisent largement les mêmes cohortes et ne constituent donc pas des confirmations indépendantes.

### Médicaments cardiaques et risque de cancer

- **ARA2 :** Sipahi 2010 (5 essais, 61 590 patients : RR 1,08 [1,01–1,15]) démenti par ARB Trialists 2011 (15 essais, 138 769 patients : **OR 1,00 [0,95–1,04]**) et par la revue FDA 2011 (31 essais : aucune augmentation).
- **iSGLT2 :** 59 essais contre placebo (113 909 patients) : **RR 1,01 (0,94–1,08)** (signal rénal RR 1,39 de signification incertaine) ; 20 essais contre comparateur actif : RR 1,00.
- **Spironolactone :** 7 études observationnelles (4,5 millions de personnes) : pas de hausse substantielle (prostate RR 0,79, faible certitude) ; signaux discordants non confirmés dans une cohorte taïwanaise (cancer du rein à forte dose cumulée aHR 2,09) et une prépublication de 2025 non évaluée par les pairs.
- **CHIP (Jaiswal 2017, NEJM) :** associée à un doublement du risque coronaire (**HR 1,9 ; 1,4–2,7**).

### Chiffres clés de cardiotoxicité des traitements anticancéreux

- **Anthracyclines :** incidence d'IC d'environ 5 % à 400 mg/m², 16 % à 500 mg/m² et 26 % à 550 mg/m² de doxorubicine (≥ 250 mg/m² = seuil de risque accru).
- **Trastuzumab + anthracyclines :** cardiotoxicité ~27 %, IC symptomatique ~16 %, réversible dans ~80 % des cas (Abdin 2025) ; registre danois Banke 2019 : IC tardive HR 1,9.
- **Immunothérapie (Mahmood 2018) :** myocardite 1,14 %, délai médian 34 jours, événements cardiaques majeurs chez 16/35 cas (46 %).
- **Radiothérapie thoracique (Darby 2013) :** événements coronaires majeurs **+7,4 % par gray** de dose cardiaque moyenne, sans seuil minimal sûr.
- **Hormonothérapie prostatique (PRONOUNCE, 545 hommes athéroscléreux) :** dégarélix vs leuproréline, MACE 5,5 % vs 4,1 % (**HR 1,28 ; 0,59–2,79** ; arrêté prématurément, aucune différence démontrée).
- **Thrombose veineuse liée au cancer (ESC 2022 via résumé ACC) :** apixaban, édoxaban ou rivaroxaban recommandés (**Classe I, A**) ; HBPM si plaquettes > 50 000/µL (I, A).

### Limites des preuves

- **76 %** des 272 recommandations ESC 2022 de cardio-oncologie reposent sur un consensus d'experts (niveau C), et les tableaux de classes n'étaient pas lisibles directement (format image) dans la source consultée ; plusieurs grades proviennent donc de synthèses secondaires.
- Les essais de cardioprotection (IEC/ARA2, bêtabloquant, statine) ont surtout limité la baisse de FEVG plutôt que les événements cliniques majeurs, et incluaient rarement des patients ayant déjà une ICFER.
- Les études de cardiotoxicité (Darby, Mahmood, Banke 2019, PRONOUNCE) ont été lues au niveau du résumé ; le tableau détaillé EHRA 2021 des interactions anticancéreux/AOD n'a pas été lu en intégralité.`,
    },
  ],
  relatedArticleSlugs: [
    'efx-strain-troponine-et-imagerie-cardiaque',
    'confirmer-la-cause-dysfonction-vg',
    'medicaments-effets-secondaires-suivi',
    'antiplaquettaires-bitherapie-et-protection-gastrique',
    'thrombus-vg-et-anticoagulants',
    'fibrillation-atriale-insuffisance-cardiaque',
    'insuffisance-cardiaque-fevg-amelioree',
    'tabac-et-alcool-insuffisance-cardiaque',
    'poids-obesite-et-denutrition',
    'risque-inflammatoire-residuel',
    'hormones-testosterone-et-menopause',
    'sarcopenie-perte-musculaire-et-fragilite',
    'sante-cerebrale-et-cognition',
    'chirurgie-soins-dentaires-et-jours-de-maladie',
  ],
  sources: [
    { label: 'Banke (2016), Hasin (2013, 2016), Camilli (2023), Jaiswal (2023) et Zheng (2022)', detail: 'Études observationnelles et méta-analyses sur l’incidence du cancer dans l’insuffisance cardiaque' },
    { label: 'Recommandations ESC 2022 de cardio-oncologie (Lyon et al.) et consensus HFA-ICOS 2020', detail: 'Définition de la CTRCD, stratification du risque initial (très haut risque si IC préexistante) et suivi cardio-oncologique' },
    { label: 'Darby (2013), Mahmood (2018), Banke (2019), PRONOUNCE (2021) et consensus EJHF Abdin (2025)', detail: 'Cardiotoxicité des anthracyclines, anti-HER2, immunothérapies, radiothérapie thoracique et hormonothérapie prostatique' },
    { label: 'ARB Trialists (2011), revue FDA (2011), méta-analyses iSGLT2/spironolactone, Jaiswal (2017 CHIP), EHRA (2021) et Otsuka (2023)', detail: 'Sécurité oncologique des traitements de l’IC et interactions AOD / anticancéreux' },
    { label: 'ARS Île-de-France, service-public.fr (IMPULSION) et ameli.fr (PSA et dépistages organisés)', detail: 'Organisation et prise en charge des dépistages des cancers et consultations de cardio-oncologie en France' },
  ],
  disclaimerType: 'medical',
};
