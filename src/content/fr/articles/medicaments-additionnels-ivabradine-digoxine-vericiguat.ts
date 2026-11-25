import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'medicaments-additionnels-ivabradine-digoxine-vericiguat',
  sourceWikiPath: 'wiki/concepts/add-on-medicines-ivabradine-digoxin-vericiguat.md',
  titleFr: 'Médicaments additionnels : ivabradine, digoxine/digitoxine et vériciguat',
  category: 'traitements',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'hot',
  tags: [
    'traitements-additionnels',
    'ivabradine',
    'digoxine',
    'digitoxine',
    'vériciguat',
    'icfer',
    'shift',
    'digit-hf',
    'victor',
    'victoria',
  ],
  aliases: [
    'Ivabradine',
    'Procoralan',
    'Digoxine',
    'Digitoxine',
    'Digoxine Nativelle',
    'Digitaliques',
    'Vériciguat',
    'Verquvo',
    'Stimulateur sGC',
    'Omécamtiv mécarbil',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Les quatre médicaments de fond (IEC ou ARNI, bêtabloquant, ARM, iSGLT2) passent toujours en premier. Trois autres comprimés peuvent s'y ajouter dans des situations bien précises : l'ivabradine pour ralentir un cœur trop rapide en rythme sinusal malgré le bêtabloquant maximal toléré (bénéfice concentré à partir de 77 bpm dans SHIFT), la digoxine (ou sa cousine la digitoxine) pour renforcer et ralentir le rythme lorsque les symptômes persistent ou en cas de fibrillation atriale (en veillant aux taux sanguins bas), et le vériciguat après une décompensation récente (neutre seul chez les patients stables, modeste en analyse poolée). Aucun ne remplace le traitement de fond ; ce sont des décisions de spécialiste qui dépendent du rythme cardiaque, des bilans sanguins et de l'historique récent.",
  sections: [
    {
      headingFr: 'Leur place dans les recommandations (ESC 2026, NICE et États-Unis)',
      bodyMarkdownFr: `Les recommandations européennes **ESC 2026** classent ces molécules comme traitements « additionnels » dans l'ICFER, envisagés une fois le traitement de fond optimisé.

| Médicament | Patients concernés (ESC 2026) | Classe, niveau | Principal effet démontré |
|---|---|---|---|
| **Ivabradine (*Procoralan*)** | FEVG ≤ 35 %, rythme sinusal, fréquence cardiaque de repos > 70 bpm sous traitement maximal toléré | **IIa, B1** | Moins d'hospitalisations pour insuffisance cardiaque |
| **Digoxine ou digitoxine** | FEVG ≤ 40 % malgré un traitement de fond optimal | **IIa, B1** (rehaussée en 2026) | Moins d'hospitalisations pour IC ; baisse des décès ou hospitalisations dans DIGIT-HF |
| **Vériciguat (*Verquvo*)** | FEVG < 45 % malgré un traitement de fond optimal | **IIb, B1** | Moins de décès CV ou d'hospitalisations pour IC après une aggravation récente |
| Hydralazine + dinitrate d'isosorbide | Patients se déclarant noirs, FEVG ≤ 40 % | **IIa, B2** | (non détaillé dans cet article) |

*Repère de lecture :* **IIa** signifie « doit être envisagé » et **IIb** « peut être envisagé », tandis que les quatre piliers sont de **Classe I** (« recommandé »).

### Positions britannique (NICE) et américaine (AHA/ACC/HFSA)

- **NICE (Royaume-Uni) :** retient l'ivabradine (via l'évaluation **TA267**, 2012, révisée sans changement en 2018 : NYHA II-IV stable, rythme sinusal, fréquence de repos **≥ 75 bpm**, FEVG ≤ 35 %, en ajout à bêtabloquant + IEC + ARM ou si bêtabloquant impossible, après **4 semaines de stabilité** sous traitement optimisé, initiée par un spécialiste) et la digoxine en cas d'ICFER s'aggravant ou sévère malgré un traitement optimisé, sur avis spécialisé (**NICE NG106**). NICE n'a **aucune recommandation sur le vériciguat** (évaluation TA731 interrompue en 2021 faute de dossier déposé par le laboratoire, sans jugement sur le médicament) ; l'Écosse (SMC, 2021) ne le recommande pas et le Pays de Galles (AWMSG) l'exclut (refus de réévaluation en août 2025). L'évaluation NICE TA1182 (2026) concerne la finérénone dans les FEVG modérément réduites ou préservées, et non un add-on d'ICFER.
- **États-Unis (AHA/ACC/HFSA 2022, repris sans changement dans le parcours ACC 2024) :**

| Médicament | Classe américaine, niveau | Conditions américaines |
|---|---|---|
| Ivabradine | **2a, B-R** (« peut être bénéfique ») | NYHA II-III stable, FEVG ≤ 35 %, dose maximale tolérée de bêtabloquant, rythme sinusal, fréquence de repos ≥ 70 bpm |
| Digoxine | **2b, B-R** (« peut être envisagée ») | Toujours symptomatique malgré le traitement de fond, ou impossibilité de le prendre |
| Vériciguat | **2b, B-R** | Patients sélectionnés à haut risque après une aggravation récente, déjà sous traitement de fond |

Aucune mise à jour américaine n'ayant encore intégré DIGIT-HF ou VICTOR (prochaine recommandation attendue fin 2027), la classe américaine de la digoxine (**2b**) est désormais inférieure à celle de l'ESC (**IIa**).`,
    },
    {
      headingFr: 'Ivabradine (Procoralan)',
      bodyMarkdownFr: `### Mode d'action

L'ivabradine ralentit le stimulateur naturel du cœur (le nœud sinusal) sans abaisser la tension artérielle comme le fait un bêtabloquant. Elle n'agit qu'en **rythme sinusal** ; elle n'a aucune utilité en cas de fibrillation atriale.

### Les preuves : l'essai SHIFT (The Lancet, 2010)

- **Population :** **6 558** patients (**6 505 analysés**) atteints d'insuffisance cardiaque symptomatique, **FEVG ≤ 35 %** (moyenne **29 %**), rythme sinusal, fréquence de repos **≥ 70 bpm** sur deux ECG, et hospitalisés pour insuffisance cardiaque dans les 12 mois précédents. Les patients en fibrillation atriale étaient exclus ; **89 %** recevaient un bêtabloquant.
- **Résultat principal :** les décès cardiovasculaires ou hospitalisations pour insuffisance cardiaque ont diminué de **29 % à 24 %** (**HR 0,82** ; IC 0,75–0,90) sur une médiane d'environ **23 mois**, soit environ **26 patients** traités pendant un an pour prévenir un événement.
  - Le bénéfice reposait sur la baisse des **hospitalisations pour insuffisance cardiaque** (**HR 0,74**) et des décès par insuffisance cardiaque (**HR 0,74**).
  - La **mortalité n'était pas réduite significativement** : mortalité cardiovasculaire **HR 0,91** (IC 0,80–1,03), mortalité toutes causes **HR 0,90** (IC 0,80–1,02).
- **Cause ischémique vs non ischémique :** **68 %** des participants de SHIFT avaient une cause ischémique et **56 %** un antécédent d'infarctus, ce qui rend l'essai directement pertinent pour la cardiomyopathie ischémique.
  - Cause ischémique (**4 418 patients**) : **26,0 % contre 29,1 %** (**HR 0,87** ; IC 0,78–0,97).
  - Cause non ischémique (**2 087 patients**) : **21,3 % contre 27,9 %** (**HR 0,72** ; IC 0,60–0,85).
  - Le test vérifiant une différence réelle entre les deux groupes a manqué de peu la significativité (**p d'interaction = 0,059**). Le bénéfice demeurait significatif dans le groupe ischémique, quoique d'apparence plus modeste ; l'agence européenne (EMA) a qualifié l'effet de cohérent quelle que soit l'étiologie.

### Pourquoi certaines sources indiquent 70 bpm et d'autres 75 bpm ?

- Dans SHIFT, le bénéfice était proche de zéro jusqu'à environ 75 bpm et maximal à partir de **77 bpm**. En 2012, l'EMA a donc restreint l'AMM européenne aux patients à **≥ 75 bpm**.
- L'article princeps divisait la cohorte à la fréquence médiane de **77 bpm** : **HR 0,93** (IC 0,80–1,08, non significatif) en dessous de 77 bpm contre **HR 0,75** (IC 0,67–0,85) à 77 bpm ou plus. C'était le **seul sous-groupe** où la différence était statistiquement significative (**p d'interaction = 0,029**).
- Chez les **4 150 patients à ≥ 75 bpm**, la mortalité était également réduite : mortalité toutes causes **HR 0,83**, mortalité cardiovasculaire **HR 0,83**.
- L'ESC 2026 conserve le seuil d'inclusion de l'essai (**> 70 bpm**). Il existe donc un décalage entre l'AMM (**≥ 75 bpm**) et la recommandation (**> 70 bpm**).

### La question de la dose de bêtabloquant

- Parmi les participants de SHIFT recevant un bêtabloquant, seuls **26 %** atteignaient la dose cible et **56 %** au moins la moitié (**49 %** de l'ensemble de la cohorte). L'hypotension et la fatigue étaient les motifs les plus fréquents de dose incomplète.
- Dans l'analyse planifiée chez les patients recevant **au moins la moitié** de la dose cible, le critère principal n'était pas significativement réduit (**HR 0,90** ; IC 0,77–1,04), même si les hospitalisations pour IC l'étaient (**HR 0,81** ; IC 0,67–0,97) — ce groupe comptait moins d'événements, ce qui limitait la puissance statistique.
- Chez les patients déjà à la **pleine dose cible** de bêtabloquant, l'ivabradine n'a montré **aucun bénéfice net** (**HR 0,99** ; **0,97** chez ceux à ≥ 75 bpm).
- Les auteurs de SHIFT soutiennent que c'est l'ampleur de la baisse de fréquence cardiaque, plutôt que la dose de bêtabloquant, qui explique l'effet.
- **En pratique :** on monte d'abord le bêtabloquant aussi haut que toléré ; l'ivabradine s'envisage si la fréquence cardiaque reste élevée ensuite.

### Maladie coronaire sans insuffisance cardiaque

Deux grands essais dans la maladie coronaire (**BEAUTIFUL**, 10 917 patients avec FEVG < 40 %, et **SIGNIFY**, maladie coronaire stable avec FEVG > 40 %) n'ont **pas** démontré de bénéfice pronostique ; dans SIGNIFY, les patients souffrant d'angor symptomatique présentaient légèrement plus d'événements (**RR 1,18**). Dans l'angor, l'AMM précise que l'ivabradine est réservée au **soulagement symptomatique**.

### Effets secondaires, précautions et posologie

- **Éclairs lumineux dans une partie du champ visuel (phosphènes) :** habituellement légers et précoces (**3 % contre 1 %** sous placebo dans SHIFT ; **14,5 %** dans les données compilées du RCP), provoquant rarement un arrêt. Prudence lors de la conduite de nuit s'ils surviennent.
- **Ralentissement excessif du cœur (bradycardie) :** symptomatique chez **5 % contre 1 %**, asymptomatique chez **6 % contre 1 %** dans SHIFT ; environ **1 %** d'arrêts pour ce motif. La posologie est réduite en dessous de 50 bpm.
- **Fibrillation atriale (FA) :** légèrement plus fréquente (**9 % contre 8 %** dans l'article SHIFT ; **8,3 % contre 6,7 %** dans le rapport EMA). Si une FA apparaît, l'intérêt de poursuivre l'ivabradine est réévalué.
- **Tolérance globale :** un peu plus de patients ont interrompu le médicament à l'étude sous ivabradine (**21 % contre 19 %**), tandis que les événements indésirables graves étaient moins nombreux (**45 % contre 48 %**).
- **Contre-indications :** fréquence cardiaque de repos < 70 bpm avant initiation, pression artérielle < 90/50 mmHg, insuffisance cardiaque instable, infarctus aigu ou angor instable, grossesse, association avec le **vérapamil** ou le **diltiazem**.
- **Interactions :** inhibiteurs puissants du CYP3A4 contre-indiqués (certains antifongiques comme kétoconazole/itraconazole, clarithromycine, érythromycine, certains antiviraux VIH). **Le jus de pamplemousse double la concentration sanguine** d'ivabradine ; le millepertuis la divise par deux (voir *Interactions entre compléments, aliments et médicaments cardiaques*).
- **Posologie usuelle :** **5 mg deux fois par jour**, ajustée après 2 semaines par le médecin à **7,5 mg** ou **2,5 mg deux fois par jour** selon la fréquence cardiaque.
- **En France (HAS) :** service médical rendu jugé « important » dans l'insuffisance cardiaque (avis 2012, renouvelé en 2017), avec une ASMR IV uniquement en NYHA II-III avec fréquence ≥ 77 bpm et impossibilité d'utiliser un bêtabloquant (ASMR V dans les autres cas).`,
    },
    {
      headingFr: 'Digoxine et digitoxine (digitaliques)',
      bodyMarkdownFr: `### Mode d'action et élimination

Ces glucosides cardiaques (digitaliques) renforcent légèrement la contraction du muscle cardiaque et ralentissent la conduction électrique. Leur élimination diffère :
- **Digoxine :** éliminée majoritairement **inchangée dans les urines (50 à 70 %)**, de sorte que son taux augmente dès que la fonction rénale baisse. Sa demi-vie est de **1,5 à 2 jours**.
- **Digitoxine :** d'abord métabolisée dans le **foie** (système enzymatique **CYP3A**), puis environ **60 %** sont éliminés par les reins sous forme de métabolites et environ **40 %** par la bile. Elle dépend donc moins de la fonction rénale que la digoxine, mais n'est pas éliminée exclusivement par le foie ; sa demi-vie est beaucoup plus longue (**3 à 10 jours**). Qualifier la digitoxine d'« élimination hépatique pure » est donc une simplification *(la revue de synthèse cite son métabolisme CYP3A sans détailler ses interactions médicamenteuses)*.

### Preuves historiques : l'essai DIG (NEJM, 1997)

- **6 800 patients** avec **FEVG ≤ 45 %** en rythme sinusal, sous diurétiques et IEC (avant l'ère des bêtabloquants, ARM et iSGLT2).
- **Aucun effet sur la mortalité :** **34,8 % contre 35,1 %** de décès sur environ 3 ans.
- **Moins d'hospitalisations pour insuffisance cardiaque :** **26,8 % contre 34,7 %** (**RR 0,72**).
- **Selon la cause (environ 70 % de cause ischémique) :** baisse des décès ou hospitalisations pour IC dans les deux groupes — ischémique : **30,4 % contre 36,4 %** (**RR 0,79** ; IC 0,72–0,88) ; non ischémique : **31,1 % contre 41,5 %** (**RR 0,67** ; IC 0,58–0,77) ; différence entre groupes non significative (p d'interaction = **0,06**).

### L'importance du taux sanguin (Ahmed et al., 2006)

Une réanalyse de DIG selon la digoxinémie a montré :
- Concentration entre **0,5 et 0,9 ng/mL :** mortalité réduite de **23 %** par rapport au placebo (**HR 0,77**).
- Concentration **≥ 1,0 ng/mL :** aucun bénéfice de survie (**HR 1,06**), bien que les hospitalisations restent moindres.
- Une altération de la **fonction rénale** était le principal facteur prédictif d'un taux élevé, suivie des doses plus fortes, du sexe féminin et de la prise de diurétiques.
- *Limite :* les taux n'étaient pas randomisés ; des patients plus graves pouvaient simplement présenter des concentrations plus élevées.

### Nouvelles preuves (2025-2026)

- **DIGIT-HF (NEJM, 2025 — digitoxine) :** **1 240 patients** randomisés (**1 212 analysés**) avec FEVG ≤ 40 % (NYHA III-IV) ou ≤ 30 % (NYHA II), sous traitement moderne (96 % de bêtabloquant, 76 % d'ARM, 19 % d'iSGLT2 ; 64 % porteurs d'un DAI/CRT ; **27 %** en fibrillation atriale).
  - Décès ou première hospitalisation pour IC : **39,5 % contre 44,1 %** sur 3 ans (**HR 0,82** ; IC 0,69–0,98).
  - Pris séparément, ni les décès (**HR 0,86**) ni les hospitalisations (**HR 0,85**) n'atteignaient la significativité statistique.
  - Environ **22 patients** à traiter pendant 3 ans pour prévenir un événement.
  - **Posologie et dosage :** débutée à **0,07 mg/jour**, puis ajustée à **0,05 ou 0,1 mg/jour** après un dosage sanguin unique à **6 semaines** visant une concentration basse (**8 à 18 ng/mL**). Après ce contrôle, **58 %** ont conservé leur dose et **34 %** ont eu besoin d'une diminution (associée au sexe féminin, à un âge ≥ 75 ans, un DFGe < 50 et un IMC < 27 ; les auteurs d'une revue récente suggèrent seulement qu'un début à **0,05 mg/jour** « peut être raisonnable » dans ces situations, sans que cette règle ait été testée).
  - Événements indésirables graves : **4,7 % contre 2,8 %** (différence jugée non significative par la revue) ; arrêts pour effets secondaires : **9,1 % contre 10,2 %**.
  - *Limites :* recrutement inférieur aux prévisions (506 événements observés contre environ 734 prévus), nombreux arrêts du traitement à l'étude, cohorte exclusivement européenne et peu de femmes.
  - **Selon la cause et autres sous-groupes :** environ **52 %** avaient une cause ischémique. Le tableau de sous-groupes de la revue ne publie que les résultats significatifs : cause non ischémique (**34,0 % contre 42,2 %**, **HR 0,70** ; IC 0,53–0,93), sans chiffre publié pour la cause ischémique (effectifs réduits : cela ne prouve pas une inefficacité en cas d'ischémie). Le bénéfice était également significatif dans quelques groupes à plus haut risque : fréquence cardiaque ≥ 75 bpm (**HR 0,63**), pression artérielle systolique ≤ 120 mmHg (**HR 0,61**) et DFGe ≤ 60 (**HR 0,73**) — résultats issus de sous-groupes d'un seul essai.
- **DECISION (2026 — digoxine à faible dose) :** **1 001 patients** aux Pays-Bas avec FEVG < 50 %, cible de concentration **0,5 à 0,9 ng/mL**.
  - Critère principal non réduit de façon significative (rapport de taux **0,81** ; IC 0,61–1,07).
  - Dans une sous-étude de 6 semaines, **l'arrêt de la digoxine** a été suivi de davantage d'événements que l'arrêt du placebo (intervalle de confiance large).
- **Analyse poolée DIG + DIGIT-HF + DECISION (9 013 patients) :** décès CV ou premier événement d'aggravation d'IC **HR 0,85** (0,80–0,90), principalement grâce à la réduction des événements d'IC (**HR 0,75**), sans différence nette selon l'époque ou la molécule. Ces résultats proviennent d'une présentation de congrès et d'un communiqué ESC, pas encore d'un article publié revu par les pairs.
- Ces données expliquent le rehaussement par l'ESC 2026 de « digoxine ou digitoxine » en **Classe IIa, B1** pour les FEVG ≤ 40 % malgré un traitement de fond optimal.

### Digoxine, digitoxine et fibrillation atriale

La digoxine est également utilisée pour **ralentir la fréquence cardiaque en cas de fibrillation atriale (FA)**. Pour une FEVG ≤ 40 %, les recommandations ESC 2024 sur la FA recommandent un bêtabloquant et/ou la digoxine en contrôle de fréquence (**Classe I**). Voir *Maladies associées (reins, FA, valves, diabète)*.

**Digitoxine avec ou sans FA (DIGIT-HF, analyse post hoc, EHJ 2026) :** une analyse non planifiée à l'avance a comparé les **330 patients (27 %)** en FA au départ aux **882 patients** sans FA :
- **Critère principal (décès ou 1re hospitalisation pour IC) :** **HR 0,72** (IC 0,50–1,03) avec FA et **HR 0,86** (IC 0,69–1,06) sans FA (**p d'interaction = 0,40**, non significatif) ; l'estimation globale (**HR 0,82**) reste donc la meilleure référence pour les deux groupes.
- **Hospitalisations pour IC :** baisse identique dans les deux groupes (**HR 0,84** dans chacun).
- **Mortalité toutes causes :** **HR 0,55** (IC 0,35–0,85) avec FA contre **HR 1,01** (IC 0,78–1,30) sans FA (**p d'interaction = 0,01**). Il s'agit d'une simple **hypothèse à confirmer** (analyse post hoc parmi plusieurs tests, effectif FA modeste, type de FA non renseigné).
- **En rythme sinusal (882 patients sans FA, ~55 % d'origine ischémique) :** les estimations allaient vers moins d'hospitalisations pour IC (**HR 0,84** ; IC 0,65–1,07) et d'événements combinés (**HR 0,86**), sans significativité isolée ni effet sur la survie (**HR 1,01**). L'article ne publie ni résultats par étiologie ni tolérance selon la FA.

### Disponibilité en France : digoxine vs digitoxine

La digitoxine n'est plus commercialisée aux États-Unis mais reste disponible dans certains pays européens (l'Allemagne a conduit DIGIT-HF).
- **En France :** le produit historique à base de digitoxine (*Digitaline Nativelle* en gouttes) a cessé d'être commercialisé en **1993** (autorisation archivée en 2011). Aucune autre spécialité de digitoxine commercialisée n'a été retrouvée.
- **Au Royaume-Uni :** aucune digitoxine n'est répertoriée (contre 8 spécialités de digoxine).
- En France comme au Royaume-Uni, le digitalique disponible en pratique reste donc la **digoxine** (*Digoxine Nativelle*, *Hémigoxine*). Les résultats de DIGIT-HF ne peuvent pas être transposés mécaniquement à la digoxine, les deux molécules n'ayant jamais été comparées face à face.

### Sécurité : signes de surdosage en digoxine

- **Signes d'alerte :** nausées, vomissements, perte d'appétit, confusion, vertiges, **vision floue ou teintée de jaune**, pouls trop lent, rapide ou irrégulier. Ils nécessitent un avis médical rapide.
- **Facteurs augmentant le risque :** baisse du potassium ou du magnésium (notamment sous diurétiques), altération de la fonction rénale, âge avancé.
- **Interactions élevant la digoxinémie :** **amiodarone (*Cordarone*)**, vérapamil, clarithromycine/érythromycine ; d'autres médicaments cités incluent certains antifongiques, diurétiques, AINS, inhibiteurs de la pompe à protons (IPP) et millepertuis. La réglisse doit être limitée.
- **Dosage sanguin :** NICE déconseille un dosage systématique de routine ; un prélèvement réalisé **8 à 12 heures après la prise** permet de confirmer un soupçon de toxicité ou de vérifier l'observance, sachant qu'une toxicité peut survenir même dans la zone dite « normale ». En cas d'insuffisance rénale, un contrôle est nécessaire en laissant **8 à 10 jours** pour atteindre l'état d'équilibre.
- **Ne pas arrêter soi-même :** les guides patients déconseillent tout arrêt sans avis médical, et l'étude DECISION suggère qu'un arrêt peut s'accompagner d'une aggravation.`,
    },
    {
      headingFr: 'Vériciguat (Verquvo)',
      bodyMarkdownFr: `### Mode d'action

Le vériciguat stimule une enzyme (la guanylate cyclase soluble, sGC) qui détend les vaisseaux sanguins et pourrait protéger le muscle cardiaque par une voie distincte de celle des quatre piliers.

### Deux grands essais, deux populations distinctes

| Critère | **VICTORIA** (NEJM, 2020) | **VICTOR** (The Lancet, 2025) |
|---|---|---|
| Population | **5 050 patients** après une **aggravation récente** (hospitalisation pour IC < 6 mois ou diurétique IV ambulatoire < 3 mois), FEVG < 45 % | **6 105 patients ambulatoires stables** (pas d'hospitalisation pour IC depuis 6 mois), FEVG ≤ 40 % |
| Traitement de fond | 15 % d'ARNI, 3 % d'iSGLT2 | 56 % d'ARNI, 59 % d'iSGLT2, 78 % d'ARM |
| Décès CV ou 1re hospitalisation pour IC | **35,5 % contre 38,5 %** ; **HR 0,90** (0,82–0,98), significatif | **18,0 % contre 19,1 %** ; **HR 0,93** (0,83–1,04), **non significatif** |
| Décès cardiovasculaire | HR **0,93** (non significatif) | HR **0,83** (0,71–0,97), **nominal uniquement** |
| Mortalité toutes causes | Non significatif | HR **0,84** (0,74–0,97), **nominal uniquement** |

- **VICTORIA en termes absolus :** environ **24 patients** à traiter pendant 1 an pour éviter un événement du critère principal.
- **Sous-groupes de VICTORIA :** aucun bénéfice dans le quartile de NT-proBNP le plus élevé (**> 5 314 pg/mL**), et effet plus faible à FEVG ≥ 35 % (**HR 0,96**) qu'en dessous de 35 % (**HR 0,88**). Ce sont des sous-groupes d'un seul essai.
- **VICTOR :** le critère principal n'a pas été atteint. La baisse des décès (y compris les morts subites, **HR 0,75**) est un résultat secondaire sans test statistique formel, donc **générateur d'hypothèses** (bien que les investigateurs financés par le promoteur le jugent cliniquement pertinent).
- **VICTOR et traitement de fond (EJHF, 2026) :** une analyse dédiée a montré un effet (neutre) globalement inchangé que les patients prennent ou non chacun des quatre piliers, ainsi que selon un score global d'intensité du traitement (**p d'interaction = 0,717**). Quelques découpages par palier de dose semblaient plus favorables mais provenaient de comparaisons multiples non ajustées et ne doivent pas dicter l'ordre des médicaments : optimiser les quatre piliers prouvés reste la priorité.
- **Selon la cause :** la publication princeps et le RCP de VICTORIA ne présentaient pas de sous-groupe par étiologie ; une analyse ultérieure (53,6 % de cause ischémique) n'a pas mis en évidence de différence d'effet selon l'étiologie ou la présence d'un DAI, sans chiffres de critère principal par cause. Dans l'analyse de mortalité de VICTOR (où **64,6 %** avaient une cardiopathie ischémique), les décès cardiovasculaires affichaient un HR de **0,85** (0,70–1,03) en présence de cardiopathie ischémique et **0,79** (0,60–1,03) en son absence (mortalité toutes causes **0,86** contre **0,81**) ; aucun des deux sous-groupes n'est significatif isolément. *(La proportion ischémique citée pour VICTORIA varie selon la définition : 64,2 % de cardiopathie ischémique en antécédent dans l'article poolé, 53,6 % de cause ischémique dans l'analyse ultérieure et 58 % de maladie coronaire dans le RCP — il s'agit de définitions différentes et non d'une contradiction.)*
- **Analyse poolée VICTORIA + VICTOR sur données individuelles (11 155 patients, The Lancet 2025, texte intégral) :** environ **64 %** présentaient une cardiopathie ischémique et la FEVG moyenne était de **30 %**.
  - Décès CV ou 1re hospitalisation pour IC : **25,9 % contre 27,9 %**, **HR 0,91** (IC 0,85–0,98) ; environ **37 patients** à traiter pendant 1 an pour éviter un événement.
  - Ensemble des décès CV : **HR 0,89** (IC 0,80–0,98) ; mortalité toutes causes : **HR 0,90** (IC 0,82–0,99) ; 1re hospitalisation pour IC : **HR 0,92** (IC 0,84–1,00) ; environ **109 patients** à traiter pendant 1 an pour éviter un décès CV.
  - Aucune différence mesurable n'apparaissait entre les deux essais (**p d'interaction = 0,59** pour le critère principal), mais VICTORIA apporte le résultat positif tandis que VICTOR seul ne l'a pas atteint ; l'absence de différence statistique ne prouve pas un bénéfice identique chez les patients stables.
  - L'effet apparaissait plus net lorsque le **NT-proBNP était ≤ 6 000 pg/mL** (critère principal **HR 0,86**, décès CV **0,83**, hospitalisation pour IC **0,85** ; environ **29 patients** traités 1 an pour prévenir un événement principal), tranche correspondant à la plupart des patients ambulatoires stables.
  - Tolérance : hypotension symptomatique **11,8 % contre 9,8 %**, anémie **8,5 % contre 6,7 %** ; événements indésirables graves **27,7 % contre 29,2 %**.
  - *Limites :* analyse conçue et conduite par les laboratoires fabricants, toutes les valeurs p étant déclarées descriptives ; aucun résultat par étiologie ischémique n'est présenté dans l'article principal.
- **En dehors des essais randomisés (Chen et al., 2026) :** une petite cohorte observationnelle chinoise (**205 patients** sortant d'IC aiguë, FEVG ≤ 45 %, prescription au choix du médecin) a rapporté moins de réhospitalisations à 6 mois (**16 % contre 34 %**), mais elle n'était pas randomisée, son critère principal planifié n'était pas significatif, seuls **21 %** avaient une cause ischémique et aucun signal de bénéfice n'apparaissait dans ce petit sous-groupe de 43 patients (**HR 1,21** ; IC 0,35–4,23). Elle ne modifie pas les conclusions ci-dessus.
- **Hors insuffisance cardiaque (essai ViVA) :** un petit essai évaluant le vériciguat dans le spasme coronaire à fonction pompe normale (FEVG < 50 % exclue) n'a publié que son protocole ; résultats attendus fin 2026.

### AMM et remboursement

- **AMM européenne et américaine :** couvrent les adultes atteints d'ICFER **stabilisés après une décompensation récente** ayant nécessité un traitement intraveineux (États-Unis : FEVG < 45 %). Les patients stables comparables à VICTOR restent **hors AMM**.
- **France (HAS, février 2022) :** avis favorable au remboursement pour une FEVG ≤ 45 % après décompensation récente, avec un service médical rendu **« modéré »**, **aucune amélioration du service médical rendu (ASMR V)** par rapport à la prise en charge optimisée, et un taux de remboursement proposé de **30 %**. À la date de novembre 2026, la HAS ne recense aucune réévaluation après VICTOR, et la disponibilité effective en officine française n'était pas confirmée dans les sources.
- **Évolution de l'AMM européenne :** jusqu'en avril 2026, aucune extension d'indication n'a été enregistrée après VICTOR (modification d'octobre 2025 portant sur la dose de départ ; renouvellement quinquennal de routine en mars 2026).

### Points pratiques et sécurité

- **Posologie :** débuté à **5 mg une fois par jour au cours d'un repas**, doublé après environ 2 semaines à **10 mg** (début à **2,5 mg** en cas d'hypotension récente).
- **Seuil tensionnel :** ne pas initier si la pression artérielle systolique est **inférieure à 100 mmHg**.
- **Effets indésirables principaux :** **hypotension artérielle** (symptomatique **9,1 % contre 7,9 %** dans VICTORIA ; **11,3 % contre 9,2 %** dans VICTOR) et **anémie** plus fréquente.
- **Associations interdites ou déconseillées :** contre-indiqué avec le **riociguat** ; **non recommandé avec les inhibiteurs de la PDE-5** (sildénafil, tadalafil, etc., utilisés notamment pour les troubles de l'érection).
- **Dérivés nitrés :** chez les patients coronariens, le vériciguat n'a pas accentué significativement l'effet tensionnel des nitrés, mais l'expérience avec les nitrés d'action prolongée dans l'insuffisance cardiaque reste limitée et ils figurent parmi les facteurs augmentant le risque d'hypotension.
- **Grossesse :** à éviter impérativement (contre-indication avec encadré d'alerte aux États-Unis).
- **Reins :** aucun ajustement posologique jusqu'à un DFGe de **15 mL/min/1,73 m²** ; non recommandé sous 15 ou sous dialyse.`,
    },
    {
      headingFr: 'À l’horizon et repères pour une cardiomyopathie ischémique autour de 35 % de FEVG',
      bodyMarkdownFr: `### Molécules en cours d'évaluation

- **Omécamtiv mécarbil :** activateur direct de la myosine cardiaque renforçant la contraction, actuellement évalué dans l'essai **COMET-HF** (environ 1 800 patients à FEVG sévèrement réduite ; fin du critère principal attendue en **2027**). Ce médicament n'est pas autorisé à ce jour.
- **Finérénone (*Kerendia*) :** voir *Finérénone, nouveaux ARM et chélateurs de potassium*.

### Ce que cela signifie pour une cardiomyopathie ischémique avec FEVG autour de 35 %

- Les trois médicaments additionnels ont été étudiés dans des populations comportant une forte proportion de patients coronariens (**SHIFT** 68 % ischémiques, **DIG** ~70 %, **DIGIT-HF** 52 %, **VICTORIA et VICTOR** ~64 % avec cardiopathie ischémique, selon la définition retenue pour VICTORIA). Dans SHIFT et DIG, l'effet semblait un peu plus modeste mais toujours présent chez les patients ischémiques, et le test d'interaction manquait de peu la significativité (**p = 0,059** et **0,06**). Dans VICTOR, les chiffres de mortalité allaient dans le même sens dans les deux groupes ; DIGIT-HF n'a pas publié de chiffre pour le sous-groupe ischémique. Aucune de ces différences de sous-groupes n'est assez solide pour modifier la pratique.
- **La fréquence cardiaque est déterminante pour l'ivabradine :** dans SHIFT, le bénéfice net se concentrait à partir d'une fréquence de repos de **77 bpm** ; en dessous, l'effet était faible et non significatif.
- Les critères d'éligibilité étant très différents, tout patient à 35 % de FEVG n'est pas concerné :
  - **ivabradine :** uniquement en rythme sinusal avec fréquence de repos > 70 bpm (≥ 75 bpm selon l'AMM) une fois le bêtabloquant poussé au maximum toléré ;
  - **digoxine/digitoxine :** symptômes persistants malgré le traitement optimal, ou FA rapide ;
  - **vériciguat :** autorisé après un épisode récent d'aggravation.
- Ces discussions interviennent généralement **après** l'optimisation des quatre piliers au cours des premiers mois, jamais avant.`,
    },
  ],
  relatedArticleSlugs: [
    'medicaments-insuffisance-cardiaque',
    'traitements-additionnels-nouveaux',
    'finerenone-et-nouveaux-arm',
    'medicaments-effets-secondaires-suivi',
    'interactions-complements-aliments-medicaments',
    'maladies-associees',
    'essais-cliniques-cles',
    'recommandations-comparees-esc-us-nice',
    'questions-equipe-cardiologie',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 (IC), ESC 2024 (FA), NICE NG106 et TA267, AHA/ACC/HFSA 2022 et ACC 2024',
      detail: 'Classes de recommandation, critères d’éligibilité et suivi biologique',
    },
    {
      label: 'SHIFT (The Lancet, 2010, texte intégral), rapport EMA 2012, RCP Procoralan et notice FDA Corlanor',
      detail: 'Efficacité de l’ivabradine, interaction étiologique (p = 0,059), seuils 75 et 77 bpm, sous-groupes bêtabloquants, tolérance, BEAUTIFUL et SIGNIFY',
    },
    {
      label: 'DIG (NEJM, 1997), Ahmed et al. (2006), DIGIT-HF (NEJM, 2025 ; analyse FA EHJ, 2026), revue CCJM 2026 (texte intégral) et DECISION (ESC 2026)',
      detail: 'Résultats et pharmacocinétique de la digoxine et de la digitoxine, analyse post hoc selon la FA, sous-groupes, analyse poolée et disponibilité France/Royaume-Uni',
    },
    {
      label: 'VICTORIA (NEJM, 2020), VICTOR (The Lancet, 2025 ; EHJ, 2026 ; EJHF traitement de fond, 2026), analyse poolée IPD (The Lancet, 2025, texte intégral) et RCP EMA Verquvo',
      detail: 'Résultats comparés, analyse poolée sur données individuelles, NT-proBNP, NNT, tolérance, cohorte Chen 2026 et protocole ViVA',
    },
    {
      label: 'HAS, ANSM, EMA, SMC, AWMSG et NICE TA731',
      detail: 'Statut de remboursement et de commercialisation en France, en Europe et au Royaume-Uni (Procoralan, Digitaline Nativelle, Verquvo)',
    },
    {
      label: 'Beldhuis et al. (2022) et fiche patient NHS digoxine',
      detail: 'Adaptation rénale, signes de toxicité digitalique et interactions',
    },
  ],
  disclaimerType: 'medical',
};
