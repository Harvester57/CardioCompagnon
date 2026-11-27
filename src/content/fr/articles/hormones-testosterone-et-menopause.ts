import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'hormones-testosterone-et-menopause',
  sourceWikiPath: 'wiki/concepts/hormones-testosterone-and-menopause.md',
  titleFr: 'Hormones, testostérone, ménopause et différences entre femmes et hommes',
  category: 'comorbidites',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'testosterone',
    'hypogonadisme',
    'traverse',
    'menopause',
    'traitement-hormonal-menopause',
    'thm',
    'femmes',
    'differences-sexe',
    'crt',
    'posologie',
    'france',
    'icfer',
  ],
  aliases: [
    'Testostérone',
    'Hypogonadisme',
    'TRAVERSE',
    'Ménopause',
    'Traitement hormonal de la ménopause',
    'THM',
    'THS',
    'Différences femmes hommes insuffisance cardiaque',
  ],
  linkedModules: ['core', 'atrialFibrillation', 'device', 'lvThrombusOrAneurysm'],
  plainSummaryFr:
    "Les hormones évoluent avec l'âge et avec l'insuffisance cardiaque, ce qui soulève trois questions fréquentes. Chez l'homme, une testostérone basse est courante dans l'ICFER et accompagne souvent fatigue et faiblesse musculaire, mais elle reflète souvent la sévérité de la maladie plutôt que sa cause ; aucun essai n'a prouvé que la testostérone protège le cœur, et un grand essai de sécurité a observé davantage de fibrillation atriale, d'atteintes rénales et d'embolies pulmonaires, tandis que les notices françaises mettent en garde contre les œdèmes et l'élévation de l'INR sous antivitamines K. Chez la femme, le traitement hormonal de la ménopause (THM) vise les symptômes et ne protège pas le cœur : les recommandations européennes déconseillent de le débuter après un infarctus ou en cas de maladie coronaire établie, et lorsqu'il est discuté au cas par cas, la voie cutanée (patch ou gel) expose à un risque moindre de caillot que les comprimés. Enfin, les femmes restent sous-représentées dans les essais cardiaques ; des données suggèrent des réponses particulières sur certaines doses et sur la resynchronisation (CRT), à aborder avec votre cardiologue sans jamais modifier seul(e) votre traitement.",
  keyTakeawaysFr: [
    "La testostérone n'est pas un traitement de l'insuffisance cardiaque ; en cas de symptômes évocateurs, le diagnostic exige deux dosages à jeun le matin en période stable, et toute décision associe endocrinologue et cardiologue.",
    "La testostérone peut favoriser la rétention d'eau, élever la tension et l'hématocrite, augmenter le risque de fibrillation atriale et renforcer l'effet des antivitamines K (warfarine, fluindione).",
    "Le traitement hormonal de la ménopause (THM) ne protège pas contre les accidents cardiaques et est déconseillé après un événement cardiovasculaire ; en cas de bouffées de chaleur sévères, demandez un avis conjoint gynécologue–cardiologue.",
    "Signalez systématiquement tout produit hormonal (y compris gel ou patch) à votre cardiologue et à votre pharmacien, et ne réduisez jamais vos doses cardiaques sans avis médical.",
  ],
  sections: [
    {
      headingFr: '1. Testostérone chez l’homme : diagnostic, prudence cardiaque et remboursement en France',
      depth: 'patient',
      bodyMarkdownFr: `### Une baisse fréquente, souvent reflet de la maladie

L'insuffisance cardiaque chronique s'accompagne volontiers d'une baisse des hormones anabolisantes (testostérone totale et libre, DHEAS, IGF-1). Bien que des taux bas s'associent à une fatigue plus marquée et à un moins bon pronostic dans les études observationnelles, cela ne prouve pas que prescrire de la testostérone améliore la survie : les personnes les plus fragiles ont naturellement des taux hormonaux plus bas.

### Comment diagnostiquer une vraie carence (Endocrine Society 2018)

- Le diagnostic repose sur l'association de **symptômes cliniques** (fatigue marquée, baisse de libido, perte musculaire) **et** de taux **constamment bas**.
- Un dépistage systématique sans symptôme n'est pas recommandé.
- Il faut **deux dosages de testostérone totale à jeun, tôt le matin**, en période clinique stable (une hospitalisation ou une maladie aiguë abaissent temporairement le taux), complétés par LH et FSH pour préciser l'origine.

### Pourquoi les cardiologues restent prudents

Les recommandations internationales déconseillent la testostérone en cas d'**insuffisance cardiaque non contrôlée**, d'infarctus ou d'AVC récent (< 6 mois), de thrombophilie ou d'hématocrite élevé :

| Point de vigilance | Ce qu'indiquent les sources | Enjeu dans l'ICFER |
|---|---|---|
| **Rétention d'eau et œdèmes** | Les notices françaises (*Androgel*, *Androtardyl*) avertissent qu'en cas de cardiopathie sévère ou **ischémique**, la testostérone peut provoquer un **œdème sévère avec ou sans insuffisance cardiaque congestive** (imposant un arrêt immédiat) | Prise de poids rapide et décompensation |
| **Épaississement du sang (polyglobulie)** | Surveillance régulière de l'hémoglobine et de l'hématocrite obligatoire (arrêt dans TRAVERSE si hématocrite > 54 %) | Risque accru de caillot et d'AVC |
| **Tension artérielle** | Avertissement de classe de la FDA (février 2025) ; hausse systolique moyenne d'environ 6 mmHg dans une méta-analyse ICFER | Augmente le travail du ventricule gauche |
| **Fibrillation atriale, arythmies, rein et embolie pulmonaire** | Signaux significatifs observés dans l'essai TRAVERSE | Facteurs fréquents de déstabilisation dans l'ICFER |
| **Anticoagulants antivitamines K (warfarine — *Coumadine*, fluindione — *Previscan*)** | Notices françaises : la testostérone peut **augmenter l'effet des anticoagulants oraux** et élever l'INR | Contrôle rapproché de l'INR et revue par le pharmacien/cardiologue |

### Pratique et remboursement en France (au 2026-11-26)

La prescription initiale de testostérone en France est réservée aux spécialistes (endocrinologue, urologue, gynécologue ou andrologue), avec renouvellement possible par tout médecin :

- ***Androtardyl* (injection d'énanthate de testostérone) :** remboursé à **65 %**.
- ***Pantestone* :** remboursé (modalités à confirmer avec votre pharmacien).
- **Gels (*Androgel*, *Fortigel*) et *Nebido* :** **non remboursés** (prix libre ; commercialisation de *Fortigel* incertaine). Vérifiez toujours le statut actuel auprès de votre pharmacien ou sur la Base de données publique des médicaments.

*(Pour la thyroïde, voir Goutte, BPCO, thyroïde et autres comorbidités ; pour la dysfonction érectile et les comprimés type IPDE-5, voir Vie sexuelle et dysfonction érectile.)*`,
    },
    {
      headingFr: '2. Ménopause et traitement hormonal (THM) en cas de maladie coronaire',
      depth: 'patient',
      bodyMarkdownFr: `### Le THM ne protège pas le cœur

Le traitement hormonal de la ménopause (**THM**) est un traitement des symptômes climatériques (bouffées de chaleur, sueurs nocturnes), et **non** un traitement de prévention cardiovasculaire.

- Chez les femmes ayant déjà une **maladie coronaire**, l'essai de référence **HERS** n'a montré aucune réduction des accidents cardiaques, avec davantage d'événements la première année et un quasi-triplement des thromboses veineuses.
- L'hypothèse dite du « bon moment » (bénéfice éventuel avant 60 ans ou dans les 10 ans suivant la ménopause) concerne des **femmes en bonne santé vasculaire**, pas des femmes ayant déjà une maladie coronaire ou une insuffisance cardiaque.
- **Consensus européen mené par l'ESC (Maas 2021) :** le THM est **déconseillé chez les femmes à haut risque cardiovasculaire ou après un événement cardiovasculaire**. En France, les recommandations **CNGOF/GEMVi 2021** listent également les antécédents artériels ischémiques (infarctus, AVC) parmi les contre-indications (d'après des synthèses secondaires).

### Voie cutanée contre comprimés, anticoagulants et discussion conjointe

- **Voie d'administration :** si un THM est malgré tout discuté dans une situation particulière, les comprimés oraux augmentent le risque de caillot veineux, alors que l'**œstradiol transdermique** (patch ou gel, associé à la progestérone micronisée ou à la dydrogestérone si un progestatif est nécessaire) présente le risque thromboembolique le plus faible (consensus ESC et CNGOF/GEMVi).
- **Déjà sous THM au moment du diagnostic cardiaque, ou symptômes sévères :** demandez un **avis conjoint entre votre gynécologue et votre cardiologue** avant de démarrer ou d'arrêter. Des options non hormonales contre les bouffées de chaleur et des traitements locaux vaginaux à faible dose existent pour les symptômes urogénitaux (leur sécurité spécifique dans l'ICFER n'a toutefois pas été évaluée dans cette revue).
- **Sous anticoagulant :** signalez tout produit hormonal à votre cardiologue et à votre pharmacien (les œstrogènes peuvent notamment modifier l'INR sous antivitamine K ; sous AOD, les saignements utérins anormaux doivent être signalés).`,
    },
    {
      headingFr: '3. Différences entre femmes et hommes dans l’ICFER ischémique',
      depth: 'patient',
      bodyMarkdownFr: `Les femmes restent sous-représentées dans la plupart des grands essais de cardiomyopathie ischémique et de dispositifs cardiaques (environ **20 %** des participants dans les essais de resynchronisation CRT), car l'insuffisance cardiaque à FEVG préservée est plus fréquente chez la femme âgée. Trois observations méritent d'être connues pour enrichir le dialogue avec votre cardiologue :

- **Doses des médicaments de fond :** dans une étude observationnelle européenne (BIOSTAT-CHF), les femmes atteignaient leur meilleur profil de risque dès **50 %** de la dose cible d'IEC/ARA2 et de bêtabloquant (avec des concentrations sanguines parfois jusqu'à 2,5 fois plus élevées à dose égale), alors que les hommes tiraient un bénéfice croissant jusqu'à 100 % de la dose cible. **Attention :** cette étude étant observationnelle, les recommandations conservent les mêmes cibles pour tous et **ne justifient pas de baisser une dose de votre propre initiative** ; c'est en revanche un élément utile à évoquer si des effets indésirables freinent l'augmentation de dose.
- **Resynchronisation cardiaque (CRT) :** dans une analyse poolée de la FDA, les femmes ayant un bloc de branche gauche (BBG) et un QRS modérément élargi (130 à 149 ms) tiraient un bénéfice plus net de la CRT-D que les hommes (au-delà de 150 ms, les deux sexes bénéficiaient nettement ; voir *Dispositifs cardiaques : DAI et CRT*).
- **Réadaptation cardiaque :** dans l'essai REHAB-HF (52 % de femmes âgées hospitalisées pour IC), les femmes ont obtenu un gain fonctionnel particulièrement marqué lors de la réadaptation multidomaine.`,
    },
    {
      headingFr: '4. Données détaillées des essais, réglementation et limites des preuves',
      depth: 'evidence',
      bodyMarkdownFr: `### Testostérone : essais dans l'ICFER et essai TRAVERSE

- **Jankowska et coll. (2006 ; 208 hommes en IC chronique, FEVG médiane 33 %, résumé) :** survie à 3 ans de 83 % sans déficit anabolique, 74 % avec un déficit, 55 % avec deux et 27 % avec trois axes déficitaires (association observationnelle).
- **Méta-analyse Tao et coll. (2020 ; 8 essais randomisés, 332 patients ICFER, FEVG 24–35 %, majorité ischémique, texte intégral) :** gain d'exercice **non significatif** (DMS 0,36 ; −0,02 à 0,74) ; aucun effet sur le pic VO2, la FEVG, le BNP, la classe NYHA ni la qualité de vie ; décès ou hospitalisation IC **RR 1,02 (0,51–2,03)** ; **pression artérielle systolique +5,7 mmHg**. (La méta-analyse antérieure Toma 2012, 4 essais / 198 patients, s'appuyait fortement sur un essai exclusivement féminin et un essai à doses supraphysiologiques.)
- **TRAVERSE (NEJM 2023 ; 5 246 hommes de 45–80 ans avec hypogonadisme confirmé < 300 ng/dL, ~55 % MCV établie, 69 % diabète ; NYHA III–IV exclus, FEVG non rapportée) :** gel de testostérone vs placebo :
  - MACE (infarctus, AVC ou décès CV) : 7,0 % vs 7,3 % (**HR 0,96 ; IC 95 % 0,78–1,17**, non-infériorité atteinte).
  - Effets indésirables significativement plus fréquents (issus de deux synthèses secondaires concordantes) : **fibrillation atriale** 3,5 % vs 2,4 % (p = 0,02), **insuffisance rénale aiguë** 2,3 % vs 1,5 % (p = 0,04), **arythmies non fatales nécessitant traitement** 5,2 % vs 3,0 % (p = 0,001), et **embolie pulmonaire** 0,9 % vs 0,5 %.
  - *Limite méthodologique majeure :* durée moyenne de traitement de ~22 mois pour ~33 mois de suivi (fort taux d'arrêt qui atténue les différences dans un essai de non-infériorité). *Applicabilité : indirecte* pour l'ICFER.
- **Divergence réglementaire États-Unis / France :** en février 2025, la **FDA** américaine a retiré l'avertissement encadré cardiovasculaire des produits à base de testostérone et ajouté un avertissement de classe sur la tension artérielle (une demande supplémentaire du HHS en juin 2026 est citée par la presse spécialisée, non vérifiée). Ces décisions américaines ne modifient pas les RCP français (ANSM/BDPM), qui maintiennent les mises en garde sur les œdèmes/IC, l'hématocrite et l'INR.

### Traitement hormonal de la ménopause et différences liées au sexe

- **HERS (JAMA 1998 ; 2 763 femmes avec maladie coronaire établie, âge moyen 67 ans, CEE + MPA oral, 4,1 ans) :** événements coronaires **RH 0,99 (0,80–1,22)**, surrisque en année 1, **thrombose veineuse presque triplée (RH 2,89 ; 1,50–5,58)**. *Applicabilité : partielle* (maladie coronaire, mais FEVG/IC non rapportées).
- **WHI (Manson 2013 ; 27 347 femmes en prévention primaire) :** maladies coronaires HR 1,18 (combiné) et 0,94 (œstrogène seul), AVC +35 à 37 %, thromboses accrues. **ELITE** et **KEEPS** portaient sur des femmes en bonne santé avec critères artériels intermédiaires.
- **Voie d'administration (Vinogradova 2019 ; > 80 000 cas britanniques de MTEV, observationnel) :** THM oral **OR ajusté 1,58 (1,52–1,64)** contre THM transdermique **OR 0,93 (0,87–1,01)**.
- **Santema et coll. (2019 ; BIOSTAT-CHF, 402 femmes et 1 308 hommes avec FEVG < 40 %) :** baisse de risque d'environ 30 % chez les femmes dès 50 % de la dose cible d'IEC/ARA2/bêtabloquant sans gain supplémentaire au-delà (observationnel).
- **Zusterzeel et coll. (2014 ; analyse poolée FDA, 4 076 patients) :** en BBG avec QRS 130–149 ms, CRT-D chez les femmes **HR 0,24 (0,11–0,53)** contre **HR 0,85** (NS) chez les hommes.

### Limites des preuves

- Aucun essai clinique n'a évalué les événements cardiovasculaires majeurs sous testostérone ou sous THM (en particulier transdermique) chez des patients atteints d'ICFER.
- Le texte intégral NEJM de TRAVERSE, ainsi que les textes complets NAMS 2022 et CNGOF 2021, n'étaient pas accessibles ; les taux exacts d'hospitalisation pour IC dans TRAVERSE n'ont pas pu être vérifiés.
- Les signaux sur les doses (Santema) et la CRT (Zusterzeel) proviennent respectivement d'une cohorte observationnelle et d'analyses en sous-groupes.`,
    },
  ],
  relatedArticleSlugs: [
    'vie-sexuelle-et-dysfonction-erectile-ic',
    'goutte-bpco-thyroide-et-autres-comorbidites',
    'sarcopenie-perte-musculaire-et-fragilite',
    'sante-cerebrale-et-cognition',
    'cancer-et-coeur-cardio-oncologie',
    'dispositifs-cardiaques-dai-crt',
    'fibrillation-atriale-insuffisance-cardiaque',
    'thrombus-vg-et-anticoagulants',
    'medicaments-effets-secondaires-suivi',
    'questions-equipe-cardiologie',
    'glossaire-cardiologie',
  ],
  sources: [
    { label: 'Jankowska (2006), Caminiti (2009), Iellamo (2010), Toma (2012) et Tao et al. (2020, texte intégral)', detail: 'Déficit anabolique et méta-analyse des 8 essais randomisés de testostérone dans l’ICFER (332 patients)' },
    { label: 'Essai TRAVERSE (NEJM 2023, résumé et synthèses concordantes), Endocrine Society (2018), FDA (fév. 2025) et RCP français ANSM/BDPM', detail: 'Sécurité cardiovasculaire de la testostérone, signaux FA/rein/embolie, mises en garde œdèmes et INR, et remboursement en France' },
    { label: 'HERS (JAMA 1998), WHI (Manson 2013), ELITE (2016), KEEPS (2014), Vinogradova (2019) et Martinelli (2016)', detail: 'Essais du THM en maladie coronaire, risque thromboembolique oral vs transdermique et anticoagulation' },
    { label: 'Consensus ESC (Maas, EHJ 2021), The Menopause Society (2022) et CNGOF/GEMVi (2021)', detail: 'Position sur le THM après événement cardiovasculaire et préférence pour l’œstradiol transdermique' },
    { label: 'Santema et al. (2019, BIOSTAT-CHF), Zusterzeel et al. (2014, FDA) et REHAB-HF (analyse par sexe)', detail: 'Différences femmes/hommes sur les doses d’IEC/ARA2/bêtabloquants, la CRT et la réadaptation' },
  ],
  disclaimerType: 'medical',
};
