import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'antiplaquettaires-bitherapie-et-protection-gastrique',
  sourceWikiPath: 'wiki/concepts/antiplatelets-dapt-and-stomach-protection.md',
  titleFr: 'Antiplaquettaires, bithérapie (DAPT) et protection gastrique par IPP',
  category: 'traitements',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'antiplaquettaires',
    'aspirine',
    'clopidogrel',
    'dapt',
    'bithérapie',
    'désescalade',
    'ipp',
    'protection-gastrique',
    'saignement-digestif',
    'interactions',
    'hypomagnésémie',
    'vitamine-b12',
    'icfer',
  ],
  aliases: [
    'Antiplaquettaires',
    'Aspirine vs clopidogrel',
    'Clopidogrel',
    'Plavix',
    'Kardégic',
    'DAPT',
    'Bithérapie antiplaquettaire',
    'Désescalade',
    'HOST-EXAM',
    'PANTHER',
    'SMART-CHOICE 3',
    'IPP',
    'Inhibiteur de la pompe à protons',
    'Oméprazole',
    'Ésoméprazole',
    'Pantoprazole',
    'Inipomp',
    'Inexium',
    'Protection gastrique',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Les antiplaquettaires — aspirine à faible dose (Kardégic), clopidogrel (Plavix), ticagrélor (Brilique) ou prasugrel (Efient) — empêchent les plaquettes de s'agréger dans les artères coronaires. Ils diffèrent des anticoagulants (apixaban, rivaroxaban, warfarine), utilisés contre les caillots cardiaques ou la fibrillation atriale. Au long cours, un seul antiplaquettaire est la règle : les recommandations européennes ESC 2024 placent désormais l'aspirine et le clopidogrel à égalité (Classe I A), après des essais surtout sud-coréens montrant un peu moins d'infarctus sous clopidogrel sans écart sur la survie (mais sans sous-groupe dédié à l'insuffisance cardiaque). Après la pose d'un stent, une bithérapie (DAPT) protège le stent 6 mois par défaut en maladie stable (1 à 3 mois si le risque de saignement est élevé) et 12 mois après un infarctus. Un inhibiteur de la pompe à protons (IPP) protège l'estomac lorsque le risque hémorragique digestif est élevé, en particulier sous bithérapie (ESC I A). Avec le clopidogrel, les agences déconseillent l'oméprazole (Mopral) et l'ésoméprazole (Inexium) et privilégient le pantoprazole (Inipomp). Au long cours, les IPP peuvent abaisser le magnésium et la vitamine B12. N'interrompez jamais un antiplaquettaire sans l'accord de votre cardiologue, surtout dans les mois suivant un stent.",
  sections: [
    {
      headingFr: 'Vue d’ensemble et choix au long cours : aspirine ou clopidogrel ?',
      bodyMarkdownFr: `| Question | Réponse courte | Solidité des preuves |
|---|---|---|
| **Aspirine ou clopidogrel à vie ?** | Les deux sont acceptés en Europe (**ESC 2024 : I A** chacun). Les essais récents favorisent le clopidogrel pour réduire les infarctus, sans différence de survie | Modérée : essais en ouvert, surtout en Asie de l'Est, aucune donnée ICFER |
| **Combien de temps deux antiplaquettaires après un stent ?** | Maladie stable : **6 mois** par défaut (**1 à 3 mois** si risque hémorragique élevé) ; **12 mois** après syndrome coronaire aigu (SCA) | Solide en population générale ; aucune règle spécifique à l'ICFER |
| **L'insuffisance cardiaque modifie-t-elle la durée de DAPT ?** | Aucune réponse issue d'essais randomisés. L'IC majore à la fois le risque thrombotique (score DAPT) et le risque hémorragique (cohortes) | Faible, indirecte |
| **Qui a besoin d'un IPP ?** | Patients à risque hémorragique digestif élevé, surtout sous DAPT ou association antiplaquettaire + anticoagulant | Solide (**ESC I A** sous traitement combiné) |
| **Quel IPP avec le clopidogrel ?** | Éviter **oméprazole** et **ésoméprazole** (RCP UE, UK, US, HAS) ; **pantoprazole** privilégié | Réglementaire (effet biologique) ; les essais randomisés poolés ne montrent pas de hausse d'événements cardiaques sous IPP |
| **Effets des IPP au long cours ?** | Hypomagnésémie, carence en vitamine B12, légère hausse possible des infections digestives | Études observationnelles + 1 essai randomisé de 3 ans |

### Ce que disent les recommandations (au 25 novembre 2026)

| Recommandation | Contenu | Classe / niveau |
|---|---|---|
| **ESC 2024 (SCC)** | Aspirine **75 à 100 mg/j** à vie après infarctus ou stent, après la DAPT | **I A** |
| **ESC 2024 (SCC)** | Clopidogrel **75 mg/j** comme alternative sûre et efficace à l'aspirine | **I A** |
| **ESC 2024 (SCC)** | Aspirine en cas de rétrécissement coronaire significatif sans infarctus ni geste | **I B** |
| **ESC 2024 (SCC)** | Ticagrélor seul après DAPT par ticagrélor en cas de haut risque thrombotique | **IIb C** |
| **ACC/AHA 2023 (CCD, États-Unis)** | Aspirine faible dose 75–100 mg (**1 A**) ; clopidogrel jugé « raisonnable » (classe exacte non vérifiée, possiblement 2b) | **1 A** / plus prudent sur le clopidogrel |
| **HAS 2012 (France)** | Aspirine 75–160 mg seule (**Grade A**) ; clopidogrel en cas d'allergie à l'aspirine (**Grade B**) | Antérieur aux essais récents |

- L'**ESC 2024** a fait évoluer la pratique en plaçant le clopidogrel au même rang que l'aspirine au long cours, alors que les textes américain (2023) et français (HAS 2012) restent centrés sur l'aspirine.
- Les recommandations **ESC 2026 sur l'insuffisance cardiaque** ne définissent pas de règles antiplaquettaires propres pour la maladie coronaire et renvoient aux recommandations coronaires (leur seule phrase déconseillant un antiplaquettaire en plus d'un anticoagulant concerne les assistances circulatoires LVAD).

### Les essais cliniques comparant clopidogrel (ou inhibiteur P2Y12) et aspirine

| Étude | Population | Résultat principal | Données IC / FEVG ? |
|---|---|---|---|
| **CAPRIE** (1996) | 19 185 patients (AVC, infarctus ou artériopathie) ; clopidogrel vs aspirine 325 mg | Événements **5,32 % vs 5,83 %/an** (-8,7 % relatif, limite) ; saignements digestifs sévères **0,52 % vs 0,72 %** | Non |
| **HOST-EXAM** (2021) | 5 438 patients coréens stables après DAPT ; clopidogrel vs aspirine 100 mg, ouvert | Composite à 2 ans **5,7 % vs 7,7 %** (**HR 0,73**) ; décès **1,9 % vs 1,3 %** (NS) | Non |
| **HOST-EXAM Extended** (2023) | Même cohorte, suivi médian 5,8 ans | Composite **HR 0,74** ; saignements **HR 0,74** ; décès **HR 1,04** | Non |
| **HOST-EXAM 10 ans** (2026) | Même cohorte, suivi médian **10,5 ans** | Composite **25,4 % vs 28,5 %** (**HR 0,86**) ; mortalité similaire | Non |
| **SMART-CHOICE 3** (2025) | 5 506 patients coréens à haut risque, ouvert | Décès, infarctus ou AVC **4,4 % vs 6,6 %** (**HR 0,71**), tiré par les infarctus (**1,0 % vs 2,2 %**) ; saignements égaux | Non |
| **PANTHER** (2023) | Méta-analyse sur données individuelles (7 ECR, 24 325 patients : 62 % clopidogrel, 38 % ticagrélor) | Décès CV / infarctus / AVC **HR 0,88** ; infarctus **HR 0,77** ; saignements majeurs similaires | Non visible |
| **Giacoppo (BMJ, 2025)** | Méta-analyse individuelle (5 ECR post-stent, 16 117 patients) | MACCE **7,7 % vs 10,0 %** (**HR 0,77** ; NNT ~**46**) ; décès **8,1 % vs 8,2 %** | Non |

- **Tendance convergente :** environ **20 à 30 % d'infarctus et d'AVC en moins** sous clopidogrel ou autre inhibiteur P2Y12, saignements identiques ou légèrement moindres, et **aucune différence sur la mortalité**.
- **Motifs de prudence :** essais principaux en **ouvert** et majoritairement conduits en **Corée du Sud** (avec un critère composite incluant les réhospitalisations pour douleur thoracique) ; activation du clopidogrel dépendante de l'enzyme hépatique **CYP2C19** (environ **2 %** des personnes d'origine européenne, **4 %** d'origine africaine et **14 %** d'origine chinoise sont métaboliseurs lents ; dans **TAILOR-PCI**, le génotypage a manqué la significativité avec **HR 0,66**, p = 0,06).
- **Applicabilité à l'ICFER ischémique (FEVG ~35 %) : indirecte.** Aucun sous-groupe IC ou FEVG n'a été publié : seuls **4,1 % (224/5 438)** avaient un antécédent d'IC dans HOST-EXAM, et les FEVG moyennes connues étaient autour de **55 à 60 %** (SMART-CHOICE 3, PANTHER).`,
    },
    {
      headingFr: 'Bithérapie (DAPT) après un stent : durées et particularités dans l’ICFER',
      bodyMarkdownFr: `La **bithérapie antiplaquettaire (DAPT)** associe l'aspirine à un inhibiteur P2Y12 (clopidogrel *Plavix*, ticagrélor *Brilique* ou prasugrel *Efient*) afin d'empêcher la thrombose d'un stent récent, au prix d'un surrisque hémorragique.

| Situation | ESC (Europe) | États-Unis | France (HAS) |
|---|---|---|---|
| **Maladie stable, stent, sans anticoagulant** | Aspirine + clopidogrel **6 mois** (**I A**) | **6 mois** (1 A ; une source mentionne 2a) | Jusqu'à 12 mois ; cite les paliers européens 6 / 3 / 1 mois |
| **Risque hémorragique élevé** | Arrêt à **1 à 3 mois**, puis monothérapie (**I A**) | Monothérapie P2Y12 après 1–3 mois raisonnable (**2a**) | **3 mois** (risque élevé), **1 mois** (très élevé) |
| **Après syndrome coronaire aigu (SCA)** | **12 mois** avec ticagrélor ou prasugrel par défaut ; monothérapie après 3–6 mois (**IIa**) ou 1 mois si haut risque hémorragique (**IIb**) | Au moins **12 mois** (1) ; ticagrélor seul dès 1 mois (**1 A**) | **1 an** (texte HAS 2012) |
| **Désescalade vers le clopidogrel** | Pas dans les 30 premiers jours ; ensuite **IIb** | Après le 1er mois (**2b**) ; non dans les 30 jours (**3 : Danger**) | — |
| **Anticoagulant associé (ex. FA)** | Trithérapie **1 à 4 semaines**, puis anticoagulant + clopidogrel jusqu'à 6 (ou 12) mois, puis anticoagulant seul | Schéma similaire | — |

- **Arrêter l'aspirine trop tôt après un infarctus comporte un risque :** dans **NEO-MINDSET** (Brésil, 3 410 patients après SCA), une monothérapie P2Y12 puissante dès le 1er jour a entraîné davantage d'événements ischémiques (**7,0 % contre 5,5 %**, surtout dans les 30 premiers jours) malgré moins de saignements.
- **Avis HAS Commission de la transparence (2023) :** en France, la bithérapie ne doit pas dépasser **12 mois** quelle que soit l'indication.

### Ce que change l'insuffisance cardiaque à FEVG réduite

- **Aucune preuve directe par essai randomisé :** une recherche ciblée n'a retrouvé aucun sous-groupe IC ou FEVG dans les grands essais de DAPT courte ou monothérapie P2Y12 (TWILIGHT, GLOBAL LEADERS, STOPDAPT-2/3, SMART-CHOICE, TICO, MASTER DAPT, HOST-IDEA, ULTIMATE-DAPT, T-PASS), où la FEVG moyenne se situait autour de **55 %**.
- **Un double tranchant clinique :**
  - Dans le **score DAPT**, « insuffisance cardiaque ou FEVG < 30 % » ajoute **+2 points** (l'un des critères les plus lourds en faveur d'une prolongation au-delà de 12 mois ; une FEVG à 35 % sans IC clinique ne remplit pas strictement ce critère).
  - À l'inverse, l'insuffisance cardiaque prédit aussi les saignements : dans une cohorte japonaise de **7 160 patients** post-angioplastie (**Otsuka 2023**), l'IC était associée à plus de saignements graves (**HR 1,53** après ajustement sur la FEVG) et, si BNP > 100 pg/mL, à davantage d'événements cardiaques. Dans **VALIANT** (post-infarctus avec dysfonction VG ou IC), la DAPT **triplait** les hémorragies digestives graves (**HR 3,18**), et la survenue d'une hémorragie digestive était liée à une mortalité accrue (**HR 2,54**).
- L'insuffisance cardiaque ne figure pas seule dans les critères de haut risque hémorragique **ARC-HBR**, mais s'accompagne souvent de maladie rénale chronique, d'anémie ou d'anticoagulants. La durée de votre DAPT reste donc une décision strictement individuelle prise par votre cardiologue interventionnel.`,
    },
    {
      headingFr: 'Risque de saignement et indications d’un IPP pour protéger l’estomac',
      bodyMarkdownFr: `### Balance bénéfice / risque hémorragique des antiplaquettaires

- Chez les patients ayant une maladie artérielle avérée, l'aspirine à faible dose réduit les événements vasculaires majeurs d'environ **1,5 % par an** (de **8,19 % à 6,69 %**, méta-analyse **ATT 2009**), pour un excès de saignements majeurs environ dix fois moindre.
- Le risque de saignement augmente avec l'âge (doublant environ par décennie), le sexe masculin, le diabète, le tabagisme, la tension artérielle, l'ajout d'un second antiplaquettaire et la prise concomitante d'**antidépresseurs ISRS ou IRSN** (voir *Santé émotionnelle, anxiété et dépression*).

### Qui relève d'une protection gastrique par inhibiteur de la pompe à protons (IPP) ?

| Source | Recommandation | Grade |
|---|---|---|
| **ESC 2024 (SCC)** | IPP chez les patients à risque hémorragique digestif accru pendant toute **association d'antithrombotiques** | **I A** (extrait) |
| **ESC 2024 (SCC)** | IPP « doit être envisagé » sous **monothérapie** selon le risque digestif | **IIa** inféré (niveau non vérifié) |
| **ESC 2023 (SCA)** | IPP sous DAPT en cas de risque hémorragique digestif élevé | **I** |
| **ACC/AHA 2023 (CCD) / 2025 (SCA)** | IPP sous DAPT (2a B-R) ; IPP à haut risque digestif sous DAPT et/ou anticoagulant (**Classe 1** en 2025) | **2a / 1** |
| **HAS 2012 & ANSM / HAS 2020 (France)** | IPP systématique après hémorragie digestive ; justifié avec un AINS chez > 65 ans, antécédent d'ulcère, ou association antiplaquettaire / anticoagulant / corticoïde | Recommandations françaises |

- **Facteurs de risque digestifs retenus (ESC 2023, consensus US) :** antécédent d'ulcère ou de saignement digestif, anticoagulant associé, AINS ou corticoïdes au long cours, ou au moins deux facteurs parmi : âge **≥ 65 ans**, dyspepsie, reflux gastro-œsophagien, infection à *Helicobacter pylori*, consommation importante d'alcool. Le consensus **Maastricht VI (2022)** conseille de dépister et traiter *H. pylori* chez les patients à haut risque sous aspirine au long cours.
- **Contexte français :** environ **16 millions** de personnes ont reçu un IPP en 2015 (ANSM 2018) ; la HAS (2020) juge plus de la moitié des prescriptions injustifiées et encourage la déprescription lorsque l'indication manque, mais confirme que la **protection sous antiplaquettaire chez un patient à risque** fait partie des indications légitimes.
- **Efficacité démontrée :** dans **COGENT** (~3 800 patients sous aspirine + clopidogrel), l'oméprazole a réduit les événements digestifs de **2,9 % à 1,1 %** à 6 mois (**HR 0,34**) sans différence significative sur les événements cardiaques (4,9 % vs 5,7 %, essai arrêté précocement). Dans **COMPASS** (17 598 patients sous rivaroxaban et/ou aspirine), le **pantoprazole** a réduit de moitié les saignements sur lésions gastroduodénales (**HR 0,52**), sans différence significative sur le critère digestif haut global (**HR 0,88**).`,
    },
    {
      headingFr: 'Interaction clopidogrel et IPP (oméprazole / ésoméprazole vs pantoprazole)',
      bodyMarkdownFr: `Le **clopidogrel (*Plavix*)** est une prodrogue que l'enzyme hépatique **CYP2C19** doit transformer en métabolite actif. L'**oméprazole (*Mopral*)** et l'**ésoméprazole (*Inexium*)** inhibent cette enzyme.

| IPP (80 mg, volontaires sains — RCP UE clopidogrel §4.5) | Baisse du métabolite actif du clopidogrel | Baisse de l'inhibition plaquettaire |
|---|---|---|
| **Oméprazole** | **-45 %** (dose de charge), **-40 %** (entretien) | **-39 %**, **-21 %** |
| **Pantoprazole (*Inipomp*)** | **-20 %**, **-14 %** | **-15 %**, **-11 %** |

- **Espacer les prises de 12 heures ne supprime pas l'interaction** (RCP UE, MHRA 2014, Angiolillo 2011).
- **Position des autorités (EMA 2010, MHRA 2014, FDA, HAS 2012) :** l'association du clopidogrel avec l'**oméprazole** ou l'**ésoméprazole** est déconseillée ; il n'existe pas de motif solide d'étendre cette restriction au **pantoprazole**, au lansoprazole ou au rabéprazole. Le RCP européen indique explicitement que le clopidogrel peut être associé au **pantoprazole**.
- **Attention à l'automédication :** l'oméprazole en vente libre sans ordonnance en pharmacie expose à la même interaction ; signalez toujours votre traitement par clopidogrel au pharmacien.
- **Impact clinique réel :** dans les méta-analyses limitées aux **essais randomisés** (**Guo 2021**, 6 ECR), l'ajout d'un IPP à une DAPT à base de clopidogrel n'a pas augmenté les événements cardiaques (MACE **RR 0,89**, infarctus **RR 0,93**, décès **RR 0,79**, tous non significatifs) tout en réduisant les hémorragies digestives d'environ **60 % (RR 0,37)**. De même, en combinant essais randomisés et études appariées (**Cardoso 2015**), mortalité (**OR 0,91**) et infarctus (**OR 1,05**) ne différaient pas tandis que les saignements chutaient (**OR 0,24**). L'excès de 20 à 40 % observé dans les études observationnelles — y compris avec le pantoprazole qui interagit peu — reflète surtout le profil plus fragile des patients recevant un IPP. Par précaution, les RCP maintiennent le choix préférentiel du **pantoprazole** avec le clopidogrel.
- *Rappel :* cette interaction concerne le **clopidogrel**, et non l'aspirine.`,
    },
    {
      headingFr: 'IPP au long cours (magnésium, vitamine B12), applicabilité et limites',
      bodyMarkdownFr: `### Effets à surveiller lors d'un traitement prolongé par IPP

- **Hypomagnésémie (magnésium sanguin bas) :** la FDA (2011) et la MHRA (2012) rapportent des cas survenant surtout après **plus d'un an** de traitement, parfois sévères (crampes, convulsions, arythmies ventriculaires) ; dans environ un quart des cas FDA, les compléments seuls n'ont pas suffi et l'arrêt de l'IPP a été nécessaire. **Les deux agences conseillent d'envisager un dosage du magnésium avant et pendant un traitement prolongé, en particulier en cas de prise associée de diurétiques ou de digoxine.** Une méta-analyse de 16 études observationnelles (**Srinutta 2019**) a retrouvé un magnésium bas chez **19,4 %** des utilisateurs d'IPP contre **13,5 %** des non-utilisateurs (**OR ajusté 1,71** ; causalité non prouvée, pas de sous-groupe diurétiques). Voir *Magnésium et insuffisance cardiaque*.
- **Carence en vitamine B12 :** une prise d'IPP pendant **2 ans ou plus** est associée à davantage de carences en vitamine B12 (**OR 1,65**, et **OR 1,95** au-delà de 1,5 comprimé/jour dans **Lam 2013**, 26 000 cas ; méta-analyse 2023 : **OR 1,42**). Voir *Vitamines B et insuffisance cardiaque*.
- **Données randomisées rassurantes (COMPASS, 3 ans) :** sous pantoprazole, aucun excès de pneumonie, fracture, maladie rénale, démence, cancer ou décès n'a été constaté ; seules les **infections digestives** étaient légèrement plus fréquentes (**1,4 % contre 1,0 %**). COMPASS n'a toutefois mesuré ni le magnésium ni la vitamine B12.
- **Déprescription encadrée :** les recommandations gastro-entérologiques (AGA 2022) et la HAS (2020) encouragent la réévaluation et l'arrêt des IPP sans indication persistante, mais **déconseillent d'arrêter l'IPP chez les patients à haut risque d'hémorragie digestive haute**. Ne suspendez pas votre IPP de votre propre chef si vous prenez des antiplaquettaires ou des anticoagulants.

### Applicabilité à l'ICFER ischémique et zones d'incertitude

| Source de preuves | Applicabilité à l'ICFER (FEVG ~35 %) | Raison principale |
|---|---|---|
| HOST-EXAM, SMART-CHOICE 3, PANTHER, Giacoppo BMJ 2025 | **Indirecte** | Pas de sous-groupe IC/FEVG ; ~4 % d'antécédent IC (HOST-EXAM), FEVG ~55–60 % ailleurs |
| Essais de DAPT courte | **Indirecte** | FEVG moyenne ~55 %, aucun sous-groupe IC identifié |
| Score DAPT & Otsuka 2023 | **Partielle** | Incluent l'IC/FEVG basse, mais score limité à > 12 mois ; cohorte rétrospective japonaise |
| VALIANT (saignements digestifs) | **Partielle à directe** | Post-IDM avec dysfonction VG/IC ; période ancienne sans données IPP |
| COGENT, COMPASS IPP & méta-analyses IPP + clopidogrel | **Partielle** | Populations coronariennes ; COMPASS excluait FEVG < 30 % et NYHA III–IV |
| Données magnésium / B12 sous IPP | **Indirecte** | Populations générales, données observationnelles |

Plusieurs données primaires restent incomplètes (tableaux détaillés ESC 2024 pour les IPP en monothérapie, classe exacte US 2023 du clopidogrel, suppléments verrouillés des essais coréens, estimation combinée IPP + diurétique de l'anse sur le magnésium). Discutez de votre schéma antiplaquettaire et de votre protection gastrique avec votre cardiologue lors du suivi.`,
    },
  ],
  relatedArticleSlugs: [
    'cholesterol-et-prevention-secondaire',
    'thrombus-vg-et-anticoagulants',
    'revascularisation-pontage-stents',
    'occlusion-coronaire-chronique-cto',
    'magnesium-insuffisance-cardiaque',
    'vitamines-b-insuffisance-cardiaque',
    'interactions-complements-aliments-medicaments',
    'medicaments-effets-secondaires-suivi',
    'depression-et-sante-emotionnelle',
    'chirurgie-soins-dentaires-et-jours-de-maladie',
    'goutte-bpco-thyroide-et-autres-comorbidites',
    'recommandations-comparees-esc-us-nice',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2024 (SCC), ESC 2023 (SCA), ACC/AHA 2023 (CCD) et 2025 (SCA), HAS 2012 et HAS CT 2023',
      detail: 'Monothérapie aspirine ou clopidogrel (I A), durées de DAPT après stent, plafonnement à 12 mois en France et indications des IPP.',
    },
    {
      label: 'Essais et méta-analyses de monothérapie : CAPRIE, HOST-EXAM (2, 5,8 et 10 ans), SMART-CHOICE 3 (2025), PANTHER (2023), Giacoppo (BMJ 2025), TAILOR-PCI, NEO-MINDSET',
      detail: 'Comparaison clopidogrel/P2Y12 vs aspirine, génétique CYP2C19, limites en ICFER et risque de l’arrêt trop précoce de l’aspirine après SCA.',
    },
    {
      label: 'Risque hémorragique et scores : ATT (2009), score DAPT (Yeh 2016), Otsuka (2023), VALIANT (Moukarbel 2009), ARC-HBR (2019), Maastricht VI (2022)',
      detail: 'Balance bénéfice/saignement, triplement des hémorragies digestives sous DAPT en post-IDM/IC et dépistage d’H. pylori.',
    },
    {
      label: 'Protection gastrique et interaction clopidogrel-IPP : COGENT (2010), COMPASS pantoprazole (2019), RCP UE clopidogrel, EMA (2010), MHRA (2014), Angiolillo (2011), Guo (2021), Cardoso (2015)',
      detail: 'Efficacité des IPP, inhibition CYP2C19 par oméprazole/ésoméprazole vs pantoprazole et comparaison essais randomisés vs études observationnelles.',
    },
    {
      label: 'Tolérance au long cours et bon usage des IPP : FDA (2011), MHRA (2012), Srinutta (2019), Lam (2013), ANSM (2018), HAS (2020) et AGA (2022)',
      detail: 'Hypomagnésémie, carence en vitamine B12, tolérance à 3 ans dans COMPASS et critères de déprescription.',
    },
  ],
  disclaimerType: 'medical',
};
