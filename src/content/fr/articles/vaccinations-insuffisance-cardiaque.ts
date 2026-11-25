import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'vaccinations-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/concepts/vaccinations-in-heart-failure.md',
  titleFr: 'Vaccinations et insuffisance cardiaque (calendrier français 2026)',
  category: 'quotidien',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'hot',
  tags: [
    'vaccinations',
    'grippe',
    'pneumocoque',
    'covid-19',
    'vrs',
    'zona',
    'calendrier-vaccinal',
    'capvaxive',
    'abrysvo',
    'shingrix',
    'iami',
    'ivve',
    'danflu-2',
  ],
  aliases: [
    'Vaccins',
    'Vaccin grippe',
    'Vaccin pneumocoque',
    'Vaccin VRS',
    'Vaccin zona',
    'Calendrier vaccinal 2026',
    'Capvaxive',
    'Prevenar 20',
    'Efluelda',
    'Abrysvo',
    'Arexvy',
    'Shingrix',
    'IAMI',
    'IVVE',
    'DANFLU-2',
    'NUDGE-FLU',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Les infections respiratoires sont l'un des déclencheurs les plus fréquents d'une décompensation d'insuffisance cardiaque. La vaccination annuelle contre la grippe dispose des preuves les plus solides : après un infarctus, elle a réduit la mortalité dans un essai contre placebo (IAMI) ; dans l'insuffisance cardiaque chronique (IVVE), elle a diminué les pneumonies et les hospitalisations toutes causes, et les décès pendant le pic grippal, sans réduire significativement le critère cardiovasculaire sur l'ensemble de l'année. Le vaccin antigrippal haute dose (Efluelda) est privilégié à partir de 65 ans car il évite davantage d'hospitalisations pour grippe, sans bénéfice cardiaque supplémentaire prouvé. En France (calendrier vaccinal 2026), les adultes atteints d'insuffisance cardiaque ischémique sont concernés à tout âge par la grippe annuelle, la Covid-19 chaque automne et une dose unique contre le pneumocoque (Capvaxive privilégié par la HAS depuis juillet 2026 ; Prevenar 20 acceptable), puis dès 65 ans par une dose contre le VRS et deux doses de Shingrix contre le zona. Plusieurs vaccins peuvent être administrés le même jour : faites le point avec votre médecin traitant, votre pharmacien ou votre cardiologue.",
  sections: [
    {
      headingFr: 'Pourquoi les vaccinations comptent dans l’insuffisance cardiaque',
      bodyMarkdownFr: `- **Un stress majeur pour le cœur :** une infection respiratoire provoque fièvre, accélération cardiaque, baisse d'oxygénation et inflammation, pouvant déclencher un infarctus ou une surcharge hydrique aiguë.
- **L'exemple du VRS :** dans un réseau hospitalier américain portant sur **6 248** adultes de 50 ans et plus hospitalisés pour infection à VRS (Woodruff 2024, étude observationnelle), **22,4 %** ont présenté un événement cardiaque aigu, le plus souvent une insuffisance cardiaque aiguë (**15,8 %**) ; ce taux atteignait **33 %** en cas de cardiopathie connue contre **8,5 %** sans cardiopathie, un antécédent d'IC constituant un facteur de risque.
- **Prévention cardiovasculaire :** les sociétés savantes de cardiologie (consensus ESC 2025, guide ACC 2026) intègrent désormais la vaccination dans la prévention cardiovasculaire globale et invitent les équipes à vérifier le statut vaccinal après un infarctus ou une hospitalisation pour insuffisance cardiaque.`,
    },
    {
      headingFr: 'Vaccin contre la grippe : ce que montrent les grands essais',
      bodyMarkdownFr: `### IAMI (2021) : après un infarctus du myocarde (contre placebo)

- **2 571** participants dans 30 centres de 8 pays, randomisés quelques jours après un infarctus (**99,7 %**) ou une angioplastie coronaire à haut risque (vaccin antigrippal contre placebo ; essai arrêté précocement à **58 %** de l'effectif prévu en raison de la pandémie de Covid-19).
- **Critère principal à 12 mois (décès, infarctus ou thrombose de stent) :** **5,3 % contre 7,2 %** (**HR 0,72**, IC 95 % : **0,52–0,99**).
- **Mortalité toutes causes :** **HR 0,59** (IC 95 % : **0,39–0,89**). Mortalité cardiovasculaire : **HR 0,59** (**0,39–0,90**). Les infarctus isolés n'ont pas diminué significativement (**HR 0,86**).
- **Applicabilité à une FEVG autour de 35 % :** limitée. À la sortie, **60,5 %** avaient une FEVG normale et seuls **2,2 %** une FEVG sévèrement réduite ; seuls environ **4 %** présentaient des signes d'insuffisance cardiaque à l'admission (Killip ≥ 2).
- **Point inattendu :** les hospitalisations pour insuffisance cardiaque étaient numériquement plus fréquentes dans le groupe vacciné (**2,3 % contre 1,3 %**, **HR 1,77**, IC 95 % : **0,96–3,27** — résultat exploratoire, non significatif et sur peu d'événements, montrant toutefois qu'IAMI ne démontre pas de réduction des hospitalisations pour IC).

### IVVE (2022) : dans l'insuffisance cardiaque chronique (contre placebo)

- **5 129** patients en classe **NYHA II–IV** dans 30 centres de 10 pays (Asie, Moyen-Orient, Afrique), vaccin antigrippal standard annuel contre sérum physiologique jusqu'à 3 saisons.
- **Population :** **29,8 %** d'origine ischémique (38,4 % hypertensive) ; **31,6 %** avec FEVG ≤ 30 % et **24,4 %** entre 31 et 39 % (soit environ **56 %** en dessous de 40 %) ; **69,5 %** en NYHA II. Traitement de fond moins intensif qu'en Europe : bêtabloquant 60 %, IEC/ARA2 72 %, ARM 48 %, aucun ARNI ni iSGLT2 listé.
- **Critères principaux neutres sur l'ensemble de l'année :** décès cardiovasculaire, infarctus ou AVC **14,8 % contre 16,0 %** (**HR 0,93**, **0,81–1,07**) ; second critère incluant les hospitalisations pour IC **HR 0,92** (**0,84–1,02**).
- **Sur l'ensemble du suivi, aucun critère cardiaque isolé significatif :** mortalité toutes causes **HR 0,90** (**0,79–1,03**), mortalité CV **HR 0,89** (**0,77–1,04**), **hospitalisations pour IC 9,6 % contre 10,8 %, HR 0,88** (**0,74–1,05**).
- **Moins de pneumonies et d'hospitalisations globales :** pneumonies **HR 0,58** (**0,42–0,80**) ; hospitalisations toutes causes **15,2 % contre 17,7 %**, **HR 0,84** (**0,74–0,97**).
- **Pendant le pic de saison grippale :** premier critère principal **7,5 % contre 9,3 %** (**HR 0,82**, **0,68–0,99**), mortalité toutes causes **HR 0,79** (**0,66–0,95**), mortalité CV **HR 0,77** (**0,63–0,94**), pneumonies **HR 0,51**. De manière inattendue, les hospitalisations pour IC diminuaient hors pic (**HR 0,76**) mais pas durant le pic (**HR 1,03**).
- **Étiologie ischémique vs non ischémique :** effets rapportés comme similaires en analyse post-hoc (chiffres détaillés en annexe non consultée ; aucun sous-groupe FEVG dans le texte principal).

### Méta-analyses et vaccin haute dose vs dose standard

- **Méta-analyses :** **Behrouzi (2022)** (6 essais, 9 001 patients, avant IVVE) retrouve un bénéfice concentré après un **syndrome coronaire aigu récent** (**RR 0,55** contre **1,00** sans SCA récent, interaction p = 0,02). **Modin (2023)** (6 essais incluant IVVE, 9 340 patients) retrouve moins d'événements CV (**HR 0,74**) et de décès toutes causes (**HR 0,72**), avec hétérogénéité modérée. **Ivars-Obermeier (2026)** (5 cohortes **observationnelles** d'IC aiguë) associe la vaccination à une baisse de mortalité à 1 an (**HR ajusté 0,89**, **0,83–0,96**), avec un risque possible de confusion résiduelle. (**Alotaibi 2026** comporte des incohérences méthodologiques et un probable double comptage d'IAMI.)

| Essai (haute dose vs standard) | Population | Résultat principal | Portée |
|---|---|---|---|
| **INVESTED** (JAMA 2021) | **5 260** patients après hospitalisation IC (**63 %**) ou infarctus (**37 %**) ; FEVG moyenne ~42 %, < 40 % chez ~42 % | Décès ou hospitalisation cardiopulmonaire **45 vs 42 / 100 patients-années**, **HR 1,06 (0,97–1,17)** : aucun avantage de la haute dose ; plus de réactions locales (**40,5 % vs 34,4 %**) | Essai le plus direct en IC (comparateur dose standard, sans placebo) |
| **DANFLU-2** (NEJM 2025) | **332 438** Danois de 65 ans et plus (pragmatique, registres) | Hospitalisation grippe ou pneumonie **0,68 % vs 0,73 %**, **Efficacité relative (rVE) 5,9 % (−2,1 à 13,4)**, non significatif ; hospitalisations grippe **rVE 43,6 %** ; décès identiques | Population générale 65+ |
| DANFLU-2 événements cardiaques (JAMA Cardiol 2025) | Même essai | **Hospitalisations IC 214 vs 266, rVE 19,5 % (3,3 à 33,1)**, NNV 3 197 ; aucun écart sur infarctus, AVC, FA ou décès CV | Exploratoire (critère principal neutre) |
| DANFLU-2 sous-groupe IC (Circ HF 2025) | **10 410** patients IC par codes registres (FEVG inconnue) | Hospitalisation IC **RR 0,82 (0,61–1,11)**, hospitalisation CV **RR 0,86 (0,72–1,02)**, grippe confirmée **RR 0,55 (0,29–1,02)** : intervalles chevauchant 1 | Sous-groupe sous-dimensionné, FEVG absente |
| DANFLU-2 athérosclérose (EHJ 2025) | **46 825** athérosclérose, **31 112** maladie coronaire | Hospitalisations grippe **rVE 45,7 %** ; événements cardiaques majeurs **rVE 0,3 %** (nul) | Maladie coronaire, FEVG inconnue |
| **FLUNITY-HD** (Lancet 2025) | **466 320** personnes (DANFLU-2 + GALFLU Espagne) | Hospitalisation grippe/pneumonie **0,56 % vs 0,62 %**, **rVE 8,8 % (1,7 à 15,5)** ; décès identiques | Pool préspécifié (financé par Sanofi) |

En synthèse, le vaccin haute dose réduit clairement davantage les hospitalisations pour **grippe** à partir de 65 ans, mais **n'a pas démontré de réduction supplémentaire des infarctus ou des décès**, et le signal sur les hospitalisations pour IC reste exploratoire (le signal de mortalité du petit essai de faisabilité DANFLU-1 n'a pas été reproduit dans DANFLU-2).

### Rappels vaccinaux : les essais NUDGE-FLU

- Dans **NUDGE-FLU** (**964 870** Danois de 65 ans et plus, Lancet 2023), seuls le courrier numérique mettant l'accent sur les **bénéfices cardiovasculaires potentiels** (**+0,89 point**, 81,00 % vs 80,12 %) et le courrier de relance (**+0,73 point**) ont augmenté la couverture.
- Chez les Danois atteints d'insuffisance cardiaque, la couverture globale était de **71,6 %**, mais tombait à **44,6 % chez les moins de 65 ans**. Dans **NUDGE-FLU-CHRONIC** (2026, **11 727** patients IC de moins de 65 ans), la couverture initiale de **46,9 %** a bondi de **+13,5 points** grâce aux courriers de rappel : les personnes plus jeunes atteintes d'IC sont celles qui passent le plus souvent à travers les campagnes.`,
    },
    {
      headingFr: 'Pneumocoque, Covid-19, VRS et zona : état des preuves',
      bodyMarkdownFr: `### Pneumocoque

- **Aucun essai sur critères cliniques dans l'IC** n'a été identifié. Le seul essai randomisé cardiovasculaire (**AUSPICE**, 2025, **4 725** Australiens de 55–60 ans sans cardiopathie, PPSV23 contre placebo sur ~7 ans) était neutre (**HR 0,90**, **0,63–1,28**). Une méta-analyse de 15 études **observationnelles** (**347 444** adultes, Jaiswal 2022) associait la vaccination à une baisse des décès toutes causes (**HR 0,76**) et des infarctus (**HR 0,73**), avec forte hétérogénéité et biais de publication probable.
- Les recommandations le conseillent pour éviter les pneumonies bactériennes qui déstabilisent le cœur (ESC 2026 **Classe IIa** ; NICE NG106). En France, les vaccins conjugués en **dose unique** ont remplacé l'ancien schéma en deux temps : depuis le **23 juillet 2026**, la **HAS** privilégie **Capvaxive** (VPC21, couverture sérotypique estimée à **84 %** contre **63 %** pour **Prevenar 20**), tout en laissant Prevenar 20 acceptable sans nécessité de rattrapage si vous l'avez déjà reçu.

### Covid-19

- **Sécurité dans l'IC :** chez **101 786** Danois insuffisants cardiaques (âge médian 74 ans, Sindet-Pedersen 2023), la mortalité à 90 jours après vaccin à ARNm était de **2,23 %** contre **2,56 %** dans un groupe historique non vacciné de 2019, l'aggravation d'IC de **1,10 % contre 1,08 %**, sans signal de myocardite ni de thrombose (comparateur historique : absence de signal de risque, non preuve d'efficacité).
- **Myocardite vaccinale :** concentrée chez les hommes jeunes (16–24 ans : ~**5,6** cas supplémentaires pour 100 000 après une 2e dose Pfizer et ~**18** après Moderna dans la cohorte nordique de 23 millions de personnes, Karlstad 2022). Chez les hommes de **40 ans et plus**, aucun excès mesurable après Pfizer (**0,05 / 100 000**) et environ **1,4 / 100 000** après deux doses Moderna. La myocardite après infection Covid-19 menait plus souvent à une insuffisance cardiaque (**11,0 %**) que la myocardite post-vaccinale (**4,5 %**), et le consensus ESC 2025 rappelle que le risque de myocardite est environ 6 fois plus élevé après l'infection qu'après le vaccin.

### Virus respiratoire syncytial (VRS)

- **Efficacité :** dans l'essai pivot d'Arexvy (Feldman 2024), l'efficacité contre les infections pulmonaires à VRS atteignait **92,1 %** chez les patients cardiopulmonaires (seuls 3,2 % avaient une IC). Dans **DAN-RSV** (2025, ~**131 000** Danois de 60 ans et plus, **Abrysvo** en ouvert, financé par Pfizer), les hospitalisations pour VRS ont chuté de **83,3 %** (3 vs 18 événements) et les hospitalisations cardiopulmonaires toutes causes de **9,9 %**, mais **sans effet sur les hospitalisations pour IC** (45 vs 43), infarctus, AVC ou FA. L'extension **DAN-RSV** en Espagne (**511 535** personnes dont **9 351** avec IC, 2026) a confirmé une protection contre les hospitalisations VRS semblable avec ou sans IC (interaction p = 0,60), toujours sans réduction nette des hospitalisations pour IC.
- **En vie réelle :** le réseau américain **IVY (2025)** sur 2 saisons retrouve une efficacité contre l'hospitalisation VRS de **56 %** (32–72 %) en cas de maladie cardiovasculaire (dont deux tiers d'IC) contre **80 %** sans maladie cardiovasculaire, avec une baisse entre la 1re saison (**69 %**) et la 2e saison (**48 %**). Le programme britannique (75–79 ans, 2024–2025) rapporte **75 %** d'efficacité.
- **Sécurité :** la FDA (janvier 2025) estime un surrisque très rare de syndrome de **Guillain-Barré** dans les 42 jours d'environ **9 cas par million** de doses d'Abrysvo et **7 par million** d'Arexvy chez les 65+ (environ **23 par million** d'Abrysvo en Angleterre, Stowe 2025). La FDA estime que les bénéfices l'emportent nettement ; la HAS mentionne cet effet indésirable très rare. Schéma en **1 dose unique** (aucun rappel recommandé à ce jour).

### Zona (Shingrix)

- **Shingrix** (vaccin non vivant, 2 doses) offre environ **79 %** d'efficacité contre le zona et encore **73 %** après 9 ans (HAS 2024). Le zona étant suivi d'une hausse transitoire du risque d'AVC et d'infarctus, des études observationnelles associent la vaccination à environ **16 %** (méta-analyse Williams 2025, financée par GSK) à **23 %** d'événements cardiovasculaires en moins : il s'agit d'associations, non d'une preuve causale.

### Applicabilité des essais à l'ICFER ischémique (FEVG ~35 %)

| Essai | Population (niveau de lecture) | Écart principal | Applicabilité | Scénario défavorable |
|---|---|---|---|---|
| **IAMI** | Post-infarctus ; FEVG normale 60,5 %, sévèrement réduite 2,2 % (texte intégral) | FEVG surtout normale ; pas d'IC chronique | **Indirecte** | Hospitalisations IC numériquement plus hautes (HR 1,77, NS) |
| **IVVE** | IC NYHA II–IV ; 56 % FEVG < 40 % ; 29,8 % ischémiques (texte intégral) | Régions, âge plus jeune, traitement sans ARNI/iSGLT2 | **Partielle** | Critère principal neutre ; pas de baisse des hospitalisations IC en pic |
| **INVESTED** | 63 % post-hospitalisation IC ; ~42 % FEVG < 40 % (texte intégral) | Comparateur dose standard (pas placebo) | **Partielle** | Haute dose non supérieure |
| **DAN-RSV / DANFLU-2 (sous-groupes IC)** | Codes registres IC ; FEVG inconnue (résumés) | FEVG et cause non mesurées | **Partielle** au mieux | Pas d'effet sur les hospitalisations IC / IC95 % incluant 1 |
| **AUSPICE** | 55–60 ans sans cardiopathie (résumé) | Aucune cardiopathie | **Extrapolée** | Neutre |`,
    },
    {
      headingFr: 'Calendrier vaccinal français 2026 et prise en charge pratique',
      bodyMarkdownFr: `Les recommandations internationales convergent sur le principe (ESC 2026 : grippe et pneumocoque **Classe IIa** ; consensus ESC 2025 ; NICE NG106 ; ACC 2026 : VRS dès 50 ans avec cardiopathie aux États-Unis). En **France**, le **calendrier vaccinal d'avril 2026** (inchangé pour les adultes de métropole dans sa mise à jour de juillet 2026) et les avis **HAS / Assurance Maladie** fixent le cadre suivant :

| Vaccin | Moins de 65 ans avec IC ischémique | 65 à 74 ans | 75 ans et plus |
|---|---|---|---|
| **Grippe** (annuel, automne) | **Oui**, au titre des « maladies des coronaires » (le libellé IC du calendrier vise les « insuffisances cardiaques graves ») | **Oui**, de préférence **Efluelda** (haute dose) ou **Fluad** (adjuvanté) ; dose standard possible | Identique à 65–74 ans |
| **Covid-19** (automne) | **Oui** (« pathologies cardiaques »), au moins 6 mois après la dernière dose ou infection | **Oui**, même délai | **Oui** ; dès **80 ans**, ajout d'une dose au printemps (délai possible ramené à 3 mois) |
| **Pneumocoque** (dose unique) | **Oui** : « insuffisance cardiaque » figure sur la liste des pathologies à risque dès 18 ans | **Oui** (tous les adultes ≥ 65 ans depuis l'avis HAS 2025) | **Oui** |
| **VRS** (dose unique) | Non recommandé | **Oui, en raison de l'insuffisance cardiaque** (dès 65 ans avec pathologie cardiaque ou respiratoire chronique) | **Oui**, pour tous |
| **Zona** (**Shingrix**, 2 doses) | Uniquement si immunodépression | **Oui**, pour tous dès 65 ans | **Oui** |

### Repères pratiques en France (au 25 novembre 2026)

- **Campagne grippe / Covid-19 2026–2027 :** lancée le **13 octobre 2026** (grippe jusqu'au 31 janvier 2027 selon les sources secondaires). Environ 21 millions de **bons de prise en charge** ont été envoyés (prise en charge à **100 %**, tenant lieu d'ordonnance). Si vous avez moins de 65 ans et n'avez pas reçu de bon, votre médecin traitant, votre pharmacien ou votre infirmier peut vous en éditer un. Médecins, pharmaciens, infirmiers et sages-femmes peuvent vacciner. Le vaccin Covid-19 de la campagne est **Comirnaty (XFG)**. Grippe et Covid-19 peuvent être injectés lors de la même séance dans deux bras différents.
- **Pneumocoque :** **Capvaxive** (VPC21) est privilégié par la HAS depuis le **23 juillet 2026** (non encore répercuté dans la mise à jour de juillet 2026 du calendrier, attendu dans l'édition 2027) ; **Prevenar 20** reste acceptable. Les deux sont remboursés à **65 %** sur ordonnance (complément habituel par la mutuelle ; vérification de la prise en charge à 100 % en ALD à confirmer auprès de votre médecin/CPAM). Si vous avez déjà reçu un ancien schéma (VPC13 ou VPP23 seul > 1 an : 1 dose de vaccin conjugué ; séquence complète VPC13 + VPP23 : 1 dose au moins 5 ans après le VPP23).
- **VRS :** **Abrysvo** ou **Arexvy** (1 dose en automne ; la HAS a aussi validé mResvia en octobre 2024). **Abrysvo** peut être co-administré avec la grippe et la Covid-19 sur des sites différents ; **Arexvy** avec la grippe uniquement. **Remboursement à vérifier au 25 novembre 2026 :** le calendrier 2026 indiquait encore l'absence de remboursement chez les seniors, alors qu'un avis favorable HAS (juin 2026) et une inscription à **65 %** pour Abrysvo au 31 août 2026 sont signalés de manière contradictoire selon les sources (certains sites mentionnant encore en novembre 2026 un reste à charge autour de 200 € chez les 65+). Confirmez systématiquement avec votre pharmacien ou votre CPAM avant l'injection.
- **Zona (Shingrix) :** 2 doses à 2 mois d'intervalle (délai souple de 2 à 6 mois sans recommencer en cas de retard ; attendre au moins 1 an après un zona ou un ancien vaccin Zostavax). Remboursé à **65 %** depuis le 14 décembre 2024.
- **ALD n° 5 :** le guide parcours de soins **HAS ALD 5 (2025)** cite les vaccins contre la grippe, le pneumocoque, le VRS (après 65 ans) et la Covid-19 dans les actes du parcours insuffisance cardiaque.

### Questions à préparer pour votre médecin ou pharmacien

- Quels vaccins sont à jour ou à prévoir cette année, et lesquels peuvent être faits le même jour ?
- Le vaccin antigrippal haute dose (*Efluelda*) est-il recommandé dans mon cas ?
- Ai-je déjà reçu un vaccin contre le pneumocoque (et lequel), ou dois-je recevoir une dose de *Capvaxive* ou *Prevenar 20* ?
- Suis-je éligible au vaccin contre le VRS, et quelles sont ses conditions actuelles de remboursement ?
- Un antécédent de syndrome de Guillain-Barré ou de réaction vaccinale forte modifie-t-il ces recommandations ?`,
    },
  ],
  relatedArticleSlugs: [
    'vivre-avec-insuffisance-cardiaque',
    'vivre-avec-insuffisance-cardiaque-en-france',
    'cholesterol-et-prevention-secondaire',
    'essais-cliniques-cles',
    'recommandations-comparees-esc-us-nice',
    'questions-equipe-cardiologie',
  ],
  sources: [
    {
      label: 'Essais antigrippaux : IAMI (2021), IVVE (2022, texte intégral), INVESTED (2021, texte intégral), DANFLU-2 (NEJM / JAMA Cardiol / Circ HF / EHJ 2025), FLUNITY-HD (Lancet 2025) & NUDGE-FLU (2023–2026)',
      detail: 'Preuves après infarctus et dans l’IC, comparaison haute dose vs dose standard et effet des rappels numériques (+13,5 points chez les moins de 65 ans avec IC).',
    },
    {
      label: 'Pneumocoque, Covid-19, VRS & Zona : AUSPICE (2025), Jaiswal (2022), Sindet-Pedersen (2023), Karlstad (2022), Woodruff (2024), DAN-RSV (2025–2026), IVY (2025), Stowe (2025), FDA (2025) & Williams (2025)',
      detail: 'Efficacité anti-infectieuse, sécurité cardiaque des vaccins ARNm, waning VRS en 2e saison et risque très rare de Guillain-Barré.',
    },
    {
      label: 'Ministère de la Santé (Calendrier vaccinal avril / juillet 2026), HAS (avis Capvaxive juillet 2026, VRS 2024–2026, Shingrix 2024, ALD 5 2025) & CNAM (campagne 2026–2027)',
      detail: 'Indications par âge en France, bons de prise en charge, co-administration et statut de remboursement au 25 novembre 2026.',
    },
    {
      label: 'Recommandations ESC 2026 (Classe IIa), Consensus ESC 2025, ACC 2026 & NICE NG106 (2025)',
      detail: 'Intégration de la vaccination dans la prévention cardiovasculaire secondaire.',
    },
  ],
  disclaimerType: 'medical',
};
