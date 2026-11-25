import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'medicaments-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/topics/heart-failure-medicines.md',
  titleFr: "Les médicaments de l'insuffisance cardiaque (4 piliers)",
  category: 'traitements',
  asOf: '2026-11-25',
  confidence: 'high',
  volatility: 'warm',
  tags: [
    'traitement-de-fond',
    'quatre-piliers',
    'arni',
    'iec',
    'bêtabloquant',
    'arm',
    'isglt2',
    'diurétiques',
    'titration',
  ],
  aliases: [
    'GDMT',
    'Traitement de fond',
    'Quatre piliers',
    'Quadrithérapie',
    'Médicaments ICFER',
    'Traitement médical optimal',
    'IEC',
    'ARNI',
    'Entresto',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Lorsque le cœur pompe moins efficacement (insuffisance cardiaque à FEVG réduite, ou ICFER), quatre grandes familles de médicaments ont chacune démontré qu'elles aident à vivre plus longtemps et à éviter les hospitalisations. Elles agissent de manière complémentaire : on les introduit généralement tôt, puis on augmente les doses palier par palier (titration) jusqu'à la dose cible ou la dose maximale tolérée. Dans les registres européens récents, la moitié à deux tiers des patients atteints d'ICFER reçoivent les quatre classes, mais seuls 1 à 3 % atteignent la dose cible complète des quatre. Des diurétiques sont ajoutés si nécessaire pour évacuer l'excès d'eau et soulager l'essoufflement ou les œdèmes. Ces traitements sont destinés à être poursuivis au long cours, même lorsque les symptômes disparaissent ou que la FEVG s'améliore.",
  sections: [
    {
      headingFr: 'Les quatre classes du traitement de fond',
      bodyMarkdownFr: `Les recommandations européennes ESC 2026 qualifient ces quatre classes de traitement de fond (*foundational medical therapy*). Toutes bénéficient d'une recommandation de **Classe I** dans l'insuffisance cardiaque à FEVG réduite (ICFER, *HFrEF*).

| Classe thérapeutique | Exemples cités (DCI et noms usuels en France) | Recommandation ESC 2026 |
|---|---|---|
| **IEC ou ARNI** | IEC : ramipril (*Triatec*), périndopril (*Coversyl*), énalapril (*Renitec*), lisinopril (*Zestril*) ; ARNI : sacubitril/valsartan (*Entresto*) | **Classe I (A)**. Passage d'un IEC ou ARA2 à l'ARNI : **Classe I (B1)**. ARA2 (ex. candésartan *Atacand*, valsartan *Tareg*) uniquement en cas d'intolérance aux IEC et à l'ARNI |
| **Bêtabloquant** | bisoprolol (*Cardensiel*), carvédilol (*Kredex*), nébivolol (*Temerit*), métoprolol succinate (*Selozok*) | **Classe I (A)** chez les patients symptomatiques stables. Également traitement de première intention de l'angor dans l'ICFER |
| **ARM** (antagoniste des récepteurs minéralocorticoïdes) | spironolactone (*Aldactone*), éplérénone (*Inspra*) | **Classe I (A)**, quelle que soit la FEVG |
| **iSGLT2** (inhibiteur du SGLT2 / gliflozine) | dapagliflozine (*Forxiga*), empagliflozine (*Jardiance*) | **Classe I (A)**, quelle que soit la FEVG |

Le mode d'action de chaque famille, ses effets secondaires et les bilans sanguins de suivi sont détaillés dans l'article *Médicaments : mode d'action, effets secondaires et bilans sanguins*.

**Comparaisons internationales :**
- Les recommandations américaines (ACC/AHA/HFSA 2022) placent l'ARNI en première intention devant les IEC.
- Les recommandations britanniques NICE NG106 (mises à jour en 2025) proposent d'introduire ensemble un IEC, un bêtabloquant, un ARM et un iSGLT2, puis d'envisager le remplacement de l'IEC par un ARNI si des symptômes persistent aux doses maximales tolérées des quatre classes. Elles ne fixent pas d'ordre imposé et précisent qu'il n'est pas nécessaire d'atteindre la dose cible d'un médicament avant d'introduire le suivant. Voir aussi *Recommandations européennes (ESC), américaines et britanniques comparées*.

### Titration (augmentation progressive des doses)

- Les recommandations ESC 2026 préconisent d'augmenter les doses **au moins toutes les 1 à 2 semaines** vers les doses cibles des essais cliniques (**Classe I**).
- Les traitements doivent être maintenus à la dose maximale tolérée **même si les symptômes disparaissent ou si la FEVG s'améliore** (**Classe I**).
- Le plein effet clinique peut nécessiter plusieurs semaines de mise en place.

### Après une hospitalisation : à quel rythme est-ce sûr ? (essai STRONG-HF)

- **Population :** **1 078 patients** à l'issue d'une hospitalisation pour insuffisance cardiaque aiguë dans 87 hôpitaux de 14 pays (**65 %** inclus en Russie et seulement **9 %** dans des pays européens). Aucun seuil de FEVG n'était exigé à l'entrée : FEVG moyenne **36 %**, **68 %** avec FEVG ≤ 40 %, et **48 %** d'origine ischémique (aucun résultat n'a été publié séparément selon l'étiologie).
- **Stratégie testée :** trois classes médicamenteuses (bêtabloquant ; IEC, ARA2 ou ARNI ; ARM) ; **les iSGLT2 ne faisaient pas partie du protocole**.
  - Au moins la moitié de la dose cible était instaurée avant la sortie, avec pour objectif les **doses complètes en 2 semaines**.
  - Des consultations de contrôle avec bilans sanguins (potassium, fonction rénale, NT-proBNP) étaient réalisées aux **semaines 1, 2, 3 et 6** (le groupe soins usuels n'était revu par l'équipe d'étude qu'au 90e jour).
  - **Règles de pause du protocole :** les IEC/ARA2/ARNI et ARM n'étaient pas augmentés si la pression artérielle systolique était **< 95 mmHg**, le potassium **> 5,0 mmol/L** ou le DFGe **< 30 mL/min/1,73 m²** ; le bêtabloquant n'était pas augmenté si le pouls était **< 55 bpm** ou la pression systolique **< 95 mmHg** ; en cas de hausse du NT-proBNP **> 10 %**, les médecins devaient envisager de suspendre la montée du bêtabloquant et d'augmenter le diurétique. *Ces règles appartiennent au protocole clinique de l'essai et ne constituent pas des cibles d'auto-ajustement personnel.*
  - Au 90e jour, les doses cibles complètes étaient atteintes bien plus souvent dans le bras intensif : bloqueur du SRAA **55 % contre 2 %**, bêtabloquant **49 % contre 4 %**, ARM **84 % contre 46 %**.
- **Résultat :** les décès ou réhospitalisations pour insuffisance cardiaque à 6 mois ont reculé de **23,3 % à 15,2 %** (**RR 0,66**). Le bénéfice provenait de la baisse des **réhospitalisations pour insuffisance cardiaque** (**9,5 % contre 17,1 %**). **La mortalité globale n'a pas baissé significativement** (**8,5 % contre 10,0 %**, p = 0,42), pas plus que la mortalité cardiovasculaire. La qualité de vie s'est un peu plus améliorée.
- **Sous-groupe FEVG ≤ 40 % :** le bénéfice absolu était numériquement moindre qu'au-delà de 40 % (**6,3 contre 12,5 points de pourcentage**), mais la différence entre les deux groupes n'était pas statistiquement significative.
- **Effets indésirables :** plus fréquents avec la stratégie rapide (**41 % contre 29 %** au 90e jour) : hypotension **5 % contre < 1 %**, hyperkaliémie **3 % contre 0 %**, altération rénale **3 % contre < 1 %**. En revanche, les événements indésirables graves (**16 % contre 17 %**) et fatals (**5 % contre 6 %**) n'ont pas augmenté.
- **Limites :** essai en ouvert, critère principal modifié en cours d'étude, arrêté précocement pour bénéfice (ce qui tend à surestimer l'effet) et financé par un fabricant de tests NT-proBNP. Il portait sur des patients juste sortis de l'hôpital et non sur des patients ambulatoires stables, mais démontre que les doses cibles peuvent être atteintes en quelques semaines moyennant une surveillance rapprochée.

### Effets secondaires et adhésion

Les sources dédiées aux patients soulignent qu'il ne faut **jamais interrompre un médicament soi-même** en raison d'un effet secondaire sans en parler d'abord à votre médecin traitant, votre cardiologue, votre infirmière insuffisance cardiaque (ou IPA) ou votre pharmacien. Les ajustements progressifs de dose font partie intégrante du parcours.

### Qui reçoit ces traitements, et à quelle dose ? (SwedeHF)

- **Cohorte :** registre suédois de **27 430 patients** atteints d'ICFER (FEVG < 40 %, insuffisance cardiaque évoluant depuis au moins 3 mois) entre 2000 et 2018 ; âge moyen **74 ans** ; **67 %** présentaient une cardiopathie ischémique enregistrée comme maladie associée (pas nécessairement comme cause première). Étude observationnelle : elle décrit les prescriptions réelles, pas l'efficacité des médicaments.
- **Une prescription qui diminue avec l'âge :**

| Classe médicamenteuse | Moins de 70 ans | 70 à 79 ans | 80 ans et plus |
|---|---|---|---|
| IEC / ARA2 ou ARNI | 95 % | 90 % | 80 % |
| Bêtabloquant | 95 % | 93 % | 88 % |
| ARM | 54 % | 47 % | 35 % |
| ARNI (comptabilisé à partir de 2016 seulement) | 25 % | 17 % | 7 % |

- **Des doses cibles rarement atteintes, même chez les patients traités :** IEC/ARA2 **44 %**, ARNI **42 %**, bêtabloquant **36 %**, ARM **16 %** au global, tombant respectivement à **30 %, 34 %, 25 % et 9 %** à partir de 80 ans. Les trois grandes classes ensemble concernaient **50 %** des moins de 70 ans contre **26 %** à 80 ans et plus.
- **Facteurs associés à une moindre utilisation :** âge avancé (même après ajustement sur la fonction rénale, la tension artérielle et d'autres facteurs), altération rénale, hypokaliémie et suivi en médecine de ville plutôt qu'en consultation hospitalière. L'orientation vers une clinique d'insuffisance cardiaque animée par des infirmières était associée à un recours plus élevé aux IEC/ARA2/ARNI. La cardiopathie ischémique était associée à un recours légèrement moindre aux IEC/ARA2/ARNI (**odds ratio 0,80**). Le registre ne consignait pas les raisons cliniques.
- **Limites :** données arrêtées en 2018 (avant la généralisation des iSGLT2 en insuffisance cardiaque ; données ARNI sur 2016–2018 uniquement). Un erratum publié en 2022 (*corrigendum*) a corrigé le tableau de l'article qui qualifiait à tort ces odds ratios de hazard ratios.

### Pratique réelle récente : un écart qui persiste (registres 2022–2024)

Des registres européens plus récents, conduits après l'arrivée des iSGLT2 en routine, montrent une progression de la quadrithérapie par rapport à SwedeHF, mais les doses cibles complètes des quatre classes restent rares. Observationnels, ils décrivent les prescriptions sans prouver l'efficacité.

- **Italie (OPTIPHARM-HF) :** **1 720 patients** atteints d'ICFER (FEVG moyenne **32 %**, **57 %** d'origine ischémique) suivis dans 32 centres experts d'insuffisance cardiaque.
  - À la première visite du registre : bêtabloquant **90 %**, IEC/ARA2/ARNI **80 %** (ARNI **61 %**), ARM **72 %**, iSGLT2 **69 %**. **Les quatre classes ensemble : 46,6 % ; les quatre à dose cible complète : 2,7 %.**
  - Une raison médicale documentée (contre-indication, effet indésirable ou intolérance) n'expliquait l'absence de traitement que chez **3 à 16 %** des patients selon la classe (hypotension, fonction rénale, hyperkaliémie, bradycardie et, pour les iSGLT2, infections urinaires ; pour beaucoup de patients non traités, la raison était « inconnue »).
  - Au cours de cette seule visite structurée, la quadrithérapie est passée de **46,6 % à 63,8 %**, et la quadrithérapie à dose cible de **2,7 % à 6,6 %**.
  - *Limites :* centres spécialisés uniquement (probablement au-dessus de la pratique courante), absence de données d'événements cliniques à ce stade, résultats non ventilés par étiologie.
- **Pays-Bas (TITRATE-HF) :** **3 367 patients** atteints d'ICFER (FEVG ≤ 40 %) dans 48 hôpitaux, suivis 1 an (environ **44 %** d'origine ischémique).
  - **Insuffisance cardiaque nouvellement diagnostiquée :** les quatre classes chez **47 %** à 6 semaines, **69,5 % à 6 mois** et **64,4 % à 12 mois** ; seuls **1,2 %** recevaient la dose cible complète des quatre classes à 12 mois, et **14 %** au moins la moitié de chaque dose cible.
  - **Insuffisance cardiaque ancienne (chronique ou récemment aggravée) :** quadrithérapie passée seulement de **44,6 % à 54,6 %**, avec **1,8 %** aux doses cibles complètes des quatre classes.
  - L'essentiel des instaurations avait lieu dans les 2 premiers mois, puis la titration stagnait largement.
  - **Pourquoi les doses restaient basses :** pour les ARA2, l'ARNI, les bêtabloquants et les ARM, le motif le plus fréquemment consigné était l'acceptation de la dose inférieure par le clinicien (environ la moitié des cas), devant les effets indésirables (environ un tiers). Pour les IEC, les effets indésirables arrivaient en tête (**43 % contre 39 %**).
  - **Réduire ou arrêter des traitements** durant les 6 premiers mois (IC chronique ou en aggravation) était associé à un risque accru de décès ou d'hospitalisation pour IC sur l'année (**HR ajusté 1,54**). Il s'agit d'une association : les traitements sont souvent réduits parce que l'état du patient se dégrade, ce qui ne prouve pas que la baisse en soit la cause.
  - *Limites :* analyses de prescription limitées aux patients vivants à 12 mois, événements non adjudiqués indépendamment, effet stimulant possible du registre lui-même. L'évolution de la FEVG dans ce registre (et la différence entre causes ischémique et non ischémique) est présentée dans *Insuffisance cardiaque à FEVG améliorée (HFimpEF)*.
- **L'effet d'éviction lié aux autres médicaments (REPORT-HF) :** **18 030 patients** sortant d'hospitalisation pour insuffisance cardiaque aiguë dans 44 pays entre 2014 et 2017 (environ la moitié avec FEVG < 40 %, avant l'usage courant des ARNI et iSGLT2).
  - En ne comptant que les médicaments **hors insuffisance cardiaque**, **39 %** en prenaient **5 à 9** et **9 %** en prenaient **10 ou plus**.
  - Plus ce nombre augmentait, moins les patients recevaient d'IEC/ARA2, bêtabloquants et ARM, et plus ils recevaient de médicaments pouvant aggraver l'insuffisance cardiaque (**57 %** chez ceux prenant 10 autres médicaments ou plus contre **6 %** chez ceux en prenant moins de 5).
  - Prendre 10 autres médicaments ou plus était associé à une mortalité à 1 an plus élevée après ajustement (**HR 1,16**), mais l'association devenait **non significative** une fois l'utilisation des médicaments de l'insuffisance cardiaque prise en compte (**HR 1,09**). Les auteurs interprètent cette association comme un effet d'éviction des traitements cardiaques essentiels, sans lien causal prouvé.
  - *Message pratique :* une révision régulière de l'ordonnance complète — automédication et compléments compris — avec l'équipe de cardiologie et le médecin traitant aide à protéger la place des piliers pronostiques.`,
    },
    {
      headingFr: 'Quelle est l’ampleur du bénéfice ?',
      bodyMarkdownFr: `Aucun essai clinique n'a randomisé directement la quadrithérapie complète face à l'ancienne bithérapie. L'estimation la plus citée provient d'une modélisation croisée d'essais cliniques (**Vaduganathan et al., *The Lancet* 2020**), combinant les résultats de **EMPHASIS-HF**, **PARADIGM-HF** et **DAPA-HF**.

En comparant une quadrithérapie complète (ARNI + bêtabloquant + ARM + iSGLT2) à l'ancien standard (IEC ou ARA2 + bêtabloquant) :

- **Décès cardiovasculaire ou première hospitalisation pour insuffisance cardiaque :** rapport de risque (HR) de **0,38**, soit une réduction relative d'environ **62 %**. Pris séparément : décès cardiovasculaire HR **0,50**, hospitalisation pour insuffisance cardiaque HR **0,32**, mortalité toutes causes HR **0,53**.
- **Effet absolu sur 3 ans :**
  - pour éviter un décès cardiovasculaire ou une hospitalisation pour insuffisance cardiaque, il faut traiter **4 à 6 patients** ;
  - pour éviter un décès, il faut traiter **8 à 16 patients**.
- **Années de vie supplémentaires projetées :**

| Âge | Années de vie supplémentaires projetées | Années supplémentaires sans décès CV ni hospitalisation pour IC |
|---|---|---|
| 55 ans | environ **6,3 ans** (17,7 contre 11,4 ans) | environ **8,3 ans** |
| 65 ans | environ **4,4 ans** | environ **6,3 ans** |
| 80 ans | environ **1,4 an** | environ **2,7 ans** |

**Limites importantes de cette estimation :**
- Il s'agit de **projections modélisées**, et non de résultats observés sur toute une vie.
- Le modèle suppose que les bénéfices se multiplient et perdurent à vie avec une observance parfaite.
- Les essais inclus portaient sur l'ICFER toutes causes confondues, et pas exclusivement sur la cardiomyopathie ischémique.
- Ces chiffres représentent des moyennes de population et non un pronostic individuel.`,
    },
    {
      headingFr: 'Les diurétiques (« médicaments pour éliminer l’eau »)',
      bodyMarkdownFr: `Les **diurétiques de l'anse** — principalement le furosémide (*Lasilix*) et le bumétanide (*Burinex*) — sont recommandés pour soulager les signes de congestion (essoufflement, œdèmes des chevilles ou des jambes), à une posologie ajustée à l'état hydrique (**Classe I** dans les recommandations ESC 2026).

Ce sont des traitements de **soulagement des symptômes** qui s'ajoutent aux quatre piliers sans les remplacer. La pesée quotidienne aide à repérer précocement une rétention d'eau (voir *Vivre au quotidien avec une insuffisance cardiaque*).

### Pendant combien de temps, et à quelle dose ?

Contrairement aux quatre piliers du traitement de fond, les diurétiques n'ont pas démontré d'allongement de la durée de vie : leur posologie a donc vocation à évoluer en fonction de votre état hydrique plutôt que de rester figée. Une revue narrative de 2026 (Athènes, **Paraskevaidis et al.**) résume cette approche :

- **Augmenter franchement en cas de congestion ; réduire une fois l'excès d'eau éliminé :** une rétention hydrique persistante à la sortie d'hospitalisation est associée à un moins bon pronostic, mais maintenir une dose élevée une fois la congestion disparue expose à une hypotension artérielle, une atteinte rénale, une baisse du sodium ou du potassium, des vertiges et des chutes.
- **Seule règle posologique proposée par la revue :** un schéma décisionnel indique que, chez un patient stable sans signe de surcharge hydrique, la dose de diurétique de l'anse ou thiazidique peut être **réduite jusqu'à 50 %**, sous réserve d'une surveillance quotidienne de la tension artérielle et de la volémie et d'un contrôle des symptômes, de la fonction rénale et des électrolytes toutes les **1 à 2 semaines**. Cette règle ne repose pas sur un essai clinique. Le même schéma qualifie par ailleurs l'ARM d'« alternative » au diurétique, une présentation peu adaptée à l'ICFER où l'ARM est un pilier de fond à part entière.
- **Des données d'arrêt complet encore limitées** (telles que rapportées par la revue) :
  - dans l'essai en double aveugle **ReBIC-1** (**188 patients** ambulatoires stables sous faible dose de furosémide ; FEVG médiane **32 %**, environ un tiers d'origine ischémique selon la revue de Luo 2025), l'arrêt n'a pas aggravé l'essoufflement et **75,3 %** des patients ayant arrêté sont restés sans furosémide contre **83,7 %** dans le groupe poursuivant le traitement ;
  - dans une étude plus ancienne, **29 patients sur 41 (71 %)** ont dû reprendre un diurétique dans les **12 semaines**, un risque associé à une **FEVG ≤ 27 %** et à une dose de furosémide **> 40 mg/jour** ;
  - ces études sont toutes antérieures à la généralisation des iSGLT2. Cela rejoint la revue systématique de 2025 présentée dans *Insuffisance cardiaque à FEVG améliorée (HFimpEF)* : les diurétiques de l'anse constituent la seule classe pour laquelle un arrêt encadré dispose d'un appui clinique.
- **Les traitements récents peuvent diminuer les besoins en diurétiques :** dans **PARADIGM-HF**, les réductions de dose de diurétique ont été plus fréquentes sous sacubitril/valsartan (*Entresto*) que sous énalapril, et dans **EMPEROR-Reduced**, l'empagliflozine (*Jardiance*) a réduit la nécessité d'intensifier les diurétiques. La revue y voit une incitation à réévaluer la posologie en consultation, et non un motif de baisse automatique.
- **Un plan écrit personnalisé** est recommandé lors de toute diminution de dose : fourchette de poids cible, signes de retour de la rétention hydrique (prise de poids accompagnée d'œdèmes ou d'essoufflement), signes de déshydratation excessive (vertiges, tension basse, hausse de la créatinine), dates des bilans sanguins et dose de reprise prévue.
- **Limites de cette revue :** revue narrative sans recherche systématique, ne citant ni les recommandations ESC ni les recommandations américaines sur l'insuffisance cardiaque, comportant plusieurs imprécisions de citation et sans tableaux posologiques médicament par médicament. Toute modification de dose relève exclusivement de votre équipe médicale.

### Quand le liquide s'accumule malgré le traitement

Le problème inverse — l'escalade des diurétiques lorsque la rétention d'eau revient — fait l'objet d'une fiche dédiée : *Escalade et résistance aux diurétiques dans l’insuffisance cardiaque*. En résumé : dans **TRANSFORM-HF**, le torasémide et le furosémide ont donné la même survie ; à l'hôpital, l'ajout d'acétazolamide intraveineux (**ADVOR**) ou d'hydrochlorothiazide (**CLOROTIC**) a accéléré la décongestion sans réduire les décès ni les réhospitalisations, et les thiazidiques ont fortement accru l'hypokaliémie et les variations de la créatinine. Les recommandations **ESC 2026** classent ces adjuvants en **Classe IIa (B1)** chez les patients hospitalisés déjà sous diurétique de l'anse et déconseillent l'usage chronique de thiazidiques chez les patients stables.

Pour les bilans sanguins associés, voir *Médicaments : mode d'action, effets secondaires et bilans sanguins* ; pour la baisse du sodium sanguin (hyponatrémie), voir *Sel et liquides dans l'insuffisance cardiaque*.`,
    },
    {
      headingFr: 'Médicaments additionnels pour des situations particulières',
      bodyMarkdownFr: `Les recommandations ESC 2026 listent plusieurs options complémentaires, envisagées en plus d'un traitement de fond déjà optimisé :

- **Ivabradine (*Procoralan*) :** FEVG ≤ 35 %, rythme sinusal et fréquence cardiaque de repos **> 70 battements/min** malgré le traitement maximal toléré (**Classe IIa**). L'autorisation européenne (AMM) retient le seuil de **≥ 75 battements/min**. Dans l'essai **SHIFT**, le bénéfice portait principalement sur la baisse des hospitalisations pour insuffisance cardiaque.
- **Digoxine (*Digoxine Nativelle*) ou digitoxine :** FEVG ≤ 40 % malgré un traitement optimal (**Classe IIa**, rehaussée en 2026). Dans **DIGIT-HF** (2025), la digitoxine a réduit les décès ou premières hospitalisations pour insuffisance cardiaque (HR **0,82**) ; le maintien de taux sanguins bas est essentiel.
- **Vériciguat (*Verquvo*) :** FEVG < 45 % malgré un traitement optimal (**Classe IIb**). Il a montré un bénéfice après une aggravation récente (**VICTORIA**). Chez les patients ambulatoires stables (**VICTOR**, *The Lancet* 2025), le critère principal n'a pas été réduit (HR **0,93**) ; la baisse des décès était un résultat secondaire nominal. L'AMM couvre les patients stabilisés après une décompensation récente.
  - Les preuves, effets secondaires et interactions de ces trois médicaments sont détaillés dans *Médicaments additionnels : ivabradine, digoxine/digitoxine et vériciguat*, et une vue d'ensemble figure dans *Au-delà des 4 piliers : traitements additionnels et récents*.
- **Finérénone (*Kerendia*) :** cet ARM non stéroïdien plus récent **ne remplace pas** la spironolactone ou l'éplérénone pour une FEVG autour de 35 %. Son essai dans l'insuffisance cardiaque (**FINEARTS-HF**) n'a inclus que des FEVG ≥ 40 %, et l'ESC 2026 désigne un ARM stéroïdien dans l'ICFER (voir *Finérénone, nouveaux ARM et chélateurs de potassium*).
- **Association hydralazine / dinitrate d'isosorbide :** patients se déclarant noirs avec FEVG ≤ 40 % (**Classe IIa**).
- **Position britannique (NICE NG106) :** mentionne l'ivabradine, l'association hydralazine + dérivé nitré (en cas d'intolérance aux IEC, ARNI et ARA2) et la digoxine (en cas d'ICFER sévère ou s'aggravant malgré un traitement optimisé), chacun sur avis spécialisé.
- **Fer intraveineux (carboxymaltose ferrique *Ferinject* ou dérisomaltose ferrique *Monofer*) :** dans l'ICFER symptomatique avec carence martiale :
  - améliore les symptômes et la qualité de vie (**Classe I**) et doit être envisagé pour réduire les hospitalisations pour insuffisance cardiaque (**Classe IIa**) ;
  - les recommandations ESC 2026 discutent une définition reposant sur un coefficient de saturation de la transferrine (CST) **< 20 %** ;
  - le fer doit être administré **par voie intraveineuse** : les comprimés de fer oral n'ont pas montré d'efficacité dans l'essai **IRONOUT-HF**. Voir *Carence en fer et fer intraveineux*.`,
    },
    {
      headingFr: 'Médicaments et maladie coronaire associée',
      bodyMarkdownFr: `Dans la cardiomyopathie ischémique, l'atteinte des artères coronaires et l'éventuel angor (angine de poitrine) sont traités en parallèle :

- **Angor :** les bêtabloquants constituent le traitement anti-angineux de première intention dans l'ICFER.
- **Médicaments à éviter :** les inhibiteurs calciques bradycardisants — **vérapamil (*Isoptine*)** et **diltiazem (*Tildiem*)** — doivent être évités dans l'ICFER. Les recommandations NICE ajoutent à la liste des médicaments à éviter les inhibiteurs calciques dihydropyridiniques à action courte.
- **Priorité thérapeutique :** les anti-angineux ne doivent pas se substituer au traitement de fond de l'insuffisance cardiaque.
- **Suite de l'escalade anti-angineuse :** après le bêtabloquant viennent l'ivabradine (rythme sinusal, fréquence > 70 bpm), un dérivé nitré longue durée (en France principalement en patch) ou la ranolazine (**ESC 2024 IIa B**), l'amlodipine ou la félodipine, puis le nicorandil ou la trimétazidine (**IIb B**), avec la trinitrine sublinguale (*Natispray*) pour les crises. Aucune de ces molécules n'améliore la survie, et les dérivés nitrés ne doivent jamais être associés aux médicaments de type sildénafil (IPDE-5). Les détails, la disponibilité en France et les règles d'urgence figurent dans *Angor et médicaments anti-angineux dans l’ICFER ischémique*.
- **Autres classes associées :** selon le profil individuel, une statine (et d'autres hypolipémiants), un antiagrégant plaquettaire (aspirine ou clopidogrel), un anticoagulant ou un antiarythmique peuvent être prescrits (voir *Cholestérol LDL, aspirine et prévention secondaire coronaire* et *Thrombus du ventricule gauche et anticoagulants*).

### Deux questions fréquentes liées au contexte

- **Dysfonction ventriculaire sans symptôme (stade B) :** les preuves des quatre piliers proviennent de patients ayant présenté des symptômes d'insuffisance cardiaque. Lorsque le ventricule gauche est affaibli sans qu'il n'y ait *jamais* eu de symptômes (stade B), les preuves issues des essais sont plus circonscrites : un IEC et un bêtabloquant, plus l'éplérénone après un infarctus du myocarde (ESC 2026). Voir *Dysfonction ventriculaire asymptomatique (stade B)*.
- **Tension artérielle :** aucune cible chiffrée de pression artérielle n'a été testée dans des essais dédiés à l'ICFER. Les quatre piliers sont prescrits pour leur effet protecteur direct sur le cœur et non pour traiter une hypertension, et certains antihypertenseurs sont à éviter dans l'ICFER. Voir *Tension artérielle et insuffisance cardiaque*.`,
    },
  ],
  relatedArticleSlugs: [
    'maladie-renale-insuffisance-cardiaque',
    'diabete-insuffisance-cardiaque',
    'fibrillation-atriale-insuffisance-cardiaque',
    'fuite-mitrale-secondaire',
    'escalade-et-resistance-aux-diuretiques',
    'angor-et-medicaments-anti-angineux',
    'these-fer-iv-et-isglt2-quadritherapie',
    'essais-cliniques-en-cours-et-a-suivre',
    'comprendre-le-diagnostic',
    'insuffisance-cardiaque-fevg-amelioree',
    'sel-et-liquides-insuffisance-cardiaque',
    'dispositifs-cardiaques-dai-crt',
    'revascularisation-pontage-stents',
    'vivre-avec-insuffisance-cardiaque',
    'essais-cliniques-cles',
    'interactions-complements-aliments-medicaments',
    'nutrition-et-complements-insuffisance-cardiaque',
    'medicaments-effets-secondaires-suivi',
    'carence-martiale-et-fer-iv',
    'maladies-associees',
    'recommandations-comparees-esc-us-nice',
    'traitements-additionnels-nouveaux',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'finerenone-et-nouveaux-arm',
    'stenose-aortique-fevg-reduite',
    'cholesterol-et-prevention-secondaire',
    'thrombus-vg-et-anticoagulants',
    'tension-arterielle-insuffisance-cardiaque',
    'dysfonction-vg-asymptomatique-stade-b',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 sur l’insuffisance cardiaque (y compris sections diurétiques et décongestion)',
      detail: 'Tableau 5, titration, traitements additionnels, fer IV, escalade diurétique (acétazolamide/hydrochlorothiazide IIa B1, escalade ambulatoire), anti-angineux, stade B et tension artérielle',
    },
    {
      label: 'Recommandations ESC 2024 sur les syndromes coronariens chroniques (section anti-angineux)',
      detail: 'Classes des traitements anti-angineux (Tableau 16) et précisions spécifiques à l’ICFER (section 5.1)',
    },
    {
      label: 'Guide patient ESC 2026 sur l’insuffisance cardiaque',
      detail: 'Présentation grand public des quatre classes de fond et des diurétiques',
    },
    {
      label: 'Vaduganathan et al. (The Lancet, 2020)',
      detail: 'Modélisation du bénéfice sur la vie entière de la quadrithérapie (EMPHASIS-HF, PARADIGM-HF, DAPA-HF)',
    },
    {
      label: 'STRONG-HF (The Lancet, 2022, texte intégral)',
      detail: 'Protocole de titration rapide post-hospitalisation, règles de pause, proportions FEVG/ischémie, composantes du résultat et tolérance',
    },
    {
      label: 'SwedeHF — Stolfo et al. (EJHF, 2022, texte intégral et corrigendum)',
      detail: 'Registre suédois de 27 430 patients ICFER : recours et doses cibles selon l’âge, ARNI, facteurs associés et erratum sur les odds ratios',
    },
    {
      label: 'OPTIPHARM-HF, TITRATE-HF et REPORT-HF (EJHF, 2025, textes intégraux)',
      detail: 'Registres récents en pratique réelle sur la quadrithérapie, les doses cibles, les freins à la titration et l’impact de la polymédication hors IC',
    },
    {
      label: 'Paraskevaidis et al. (revue narrative, 2026, texte intégral)',
      detail: 'Durée, réduction progressive et arrêt encadré des diurétiques de l’anse (ReBIC-1, PARADIGM-HF, EMPEROR-Reduced, plan écrit et limites méthodologiques)',
    },
    {
      label: 'Recommandations ACC/AHA/HFSA 2022 et NICE NG106 (2025)',
      detail: 'Positions américaine (ARNI en première intention) et britannique (associations, add-ons, inhibiteurs calciques à éviter)',
    },
    {
      label: 'Essais SHIFT, DIGIT-HF, VICTOR, VICTORIA, FINEARTS-HF et IRONOUT-HF',
      detail: 'Données cliniques sur l’ivabradine, la digitoxine, le vériciguat, la finérénone et le fer oral ; RCP EMA Verquvo et rapport EMA Procoralan',
    },
    {
      label: 'British Heart Foundation et Cleveland Clinic',
      detail: 'Information patient sur la poursuite des traitements, la titration et le délai d’action',
    },
  ],
  disclaimerType: 'medical',
};
