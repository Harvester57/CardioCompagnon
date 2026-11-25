import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'chirurgie-soins-dentaires-et-jours-de-maladie',
  sourceWikiPath: 'wiki/concepts/surgery-dental-and-sick-day-rules.md',
  titleFr: 'Chirurgie, soins dentaires et règles des « jours de maladie »',
  category: 'traitements',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'périopératoire',
    'chirurgie-non-cardiaque',
    'anesthésie',
    'endoscopie',
    'soins-dentaires',
    'antibioprophylaxie-endocardite',
    'jours-de-maladie',
    'isglt2',
    'sraa',
    'glp-1',
    'antiplaquettaires',
    'aod',
    'dai-crt',
    'compléments',
    'france',
  ],
  aliases: [
    'Soins périopératoires',
    'Chirurgie et anesthésie',
    'Soins dentaires et antibiotiques',
    'Prophylaxie endocardite',
    'Règles des jours de maladie',
    'SADMANS',
    'Médicaments avant opération',
    'Coloscopie et anticoagulants',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Vivre avec une cardiomyopathie ischémique implique d'anticiper sereinement les situations médicales courantes : opération programmée (hanche, hernie), coloscopie, extraction dentaire ou gastro-entérite. Ne mettez jamais en pause vos médicaments cardiaques ni vos antiplaquettaires ou anticoagulants de votre propre initiative : chaque famille obéit à des règles différentes. Lors d'une chirurgie, les bêtabloquants sont habituellement poursuivis, les iSGLT2 (dapagliflozine, empagliflozine) sont généralement suspendus 3 à 4 jours avant par l'équipe d'anesthésie, et les IEC/ARA2 pris pour insuffisance cardiaque sont souvent maintenus. Pour les soins dentaires courants, une ICFER isolée, des stents coronaires ou un DAI/CRT ne justifient pas d'antibioprophylaxie (HAS octobre 2024, ESC 2023) et n'imposent presque jamais d'interrompre l'aspirine ou un AOD. Concernant les « jours de maladie » (vomissements, diarrhée, fièvre), les fiches génériques d'auto-arrêt manquent de preuves dans l'ICFER : la meilleure protection est un plan écrit personnalisé préparé à froid avec votre équipe de cardiologie. Informez systématiquement tout chirurgien, anesthésiste et dentiste de votre FEVG, de vos stents, de votre carte de porteur de DAI/CRT, de tous vos traitements (y compris les injections GLP-1) et de vos compléments alimentaires.",
  sections: [
    {
      headingFr: 'Chirurgie non cardiaque, anesthésie et endoscopie digestive',
      bodyMarkdownFr: `L'insuffisance cardiaque — en particulier à FEVG réduite (ICFER) ou symptomatique — augmente le risque de complications périopératoires (une revue citée par un consensus européen rapporte environ **+63 %** de mortalité opératoire et **+51 %** de réadmission à 30 jours). Une préparation coordonnée réduit les risques évitables.

### Évaluation préopératoire et délais après infarctus ou stent

- **Report d'une chirurgie programmée :** une insuffisance cardiaque décompensée, un syndrome coronaire aigu (SCA) ou une arythmie instable imposent de différer toute opération non urgente jusqu'à stabilisation et avis multidisciplinaire (AHA/ACC 2024, ESC 2022).
- **Niveau de risque de l'intervention :** l'ESC 2022 distingue un risque cardiovasculaire à 30 jours faible (< 1 % : cataracte, soins dentaires, sein), intermédiaire (1 à 5 % : hanche, rachis, chirurgie urologique ou gynécologique majeure) et élevé (> 5 % : chirurgie vasculaire majeure, chirurgie abdominale majeure) ; l'AHA/ACC 2024 simplifie en faible (< 1 %) contre élevé (≥ 1 %).
- **Examens avant l'opération :**
  - **Échocardiographie (ETT) :** indiquée en cas d'essoufflement nouveau, d'aggravation des symptômes ou de valvulopathie modérée à sévère sans ETT dans l'année — **non répétée en routine** si vous êtes cliniquement stable.
  - **Capacité d'effort et biomarqueurs :** ne pas pouvoir monter deux étages (< 4 METs) avant une chirurgie à risque élevé conduit à discuter un dosage préopératoire de **BNP / NT-proBNP** (privilégié par AHA/ACC 2024, repères bas autour de BNP < 92 ng/L ou NT-proBNP < 200–300 ng/L) ou de **troponine hypersensible** (privilégiée par ESC 2022), plus une surveillance de la troponine après l'intervention chez les patients à haut risque pour dépister une lésion myocardique silencieuse (MINS).
- **Délais recommandés après un infarctus ou un stent (chirurgie programmée) :**
  - Infarctus récent / SCA : différer d'au moins **60 jours**.
  - Angioplastie au ballon sans stent : **≥ 14 jours** ; stent nu (BMS) : **≥ 30 jours**.
  - Stent actif (DES) pour maladie coronaire stable : délai optimal **≥ 6 mois** ; pour une chirurgie urgente ou oncologique, l'AHA/ACC 2024 autorise **≥ 3 mois** et l'ESC 2022 dès **1 mois** après concertation médico-chirurgicale.
  - DES après SCA ou angioplastie complexe (tronc commun, bifurcation, CTO, stents longs) : envisager jusqu'à **12 mois**.
  - Dans les **30 jours** suivant tout stent, interrompre un antiplaquettaire expose à une thrombose de stent grave ; l'**ESC 2022 cite explicitement une FEVG < 40 %** comme facteur de haut risque de thrombose périopératoire.
- **Anesthésie et tension peropératoire :** éviter toute hypotension prolongée (maintien PAM ≥ 60–65 mmHg ou PAS ≥ 90 mmHg) importe davantage que le choix anesthésie générale vs locorégionale. En ICFER, un consensus européen (Abdin 2025) privilégie les gaz halogénés modernes (isoflurane, sévoflurane, desflurane), accepte le propofol sous surveillance tensionnelle étroite et l'étomidate en dose unique, recommande la prudence avec la dexmédétomidine et juge la **kétamine inadaptée** en maladie coronaire, arythmie ou IC sévère.

### Endoscopie digestive et coloscopie (BSG / ESGE 2021)

- **Aspirine :** poursuivie pour les fibroscopies/coloscopies diagnostiques (avec ou sans biopsies) et la quasi-totalité des gestes thérapeutiques, dont la polypectomie standard (rare exception : ampullectomie).
- **Endoscopie à faible risque hémorragique (diagnostique ± biopsie) :** poursuivre la DAPT et les AVK (si INR contrôlé < 7 jours dans la cible) ; pour les **AOD**, seule la **prise du matin** de l'examen est habituellement omise selon le protocole médical.
- **Endoscopie à haut risque (polypectomie, résection muqueuse, CPRE avec sphinctérotomie) :** sous DAPT après stent, poursuivre l'aspirine et **consulter le cardiologue interventionnel** avant toute pause de l'inhibiteur P2Y12 (7 jours si validée, reprise à 2–3 jours) ; sous **AOD**, dernière prise **3 jours avant** (**5 jours** pour le dabigatran si DFGe 30–50 mL/min), **sans relais par héparine**, reprise 2 à 3 jours après ; sous **GLP-1**, la préparation colique inclut déjà 24 h de liquides clairs, mais prévenez gastro-entérologue et anesthésiste à l'avance.`,
    },
    {
      headingFr: 'Protocoles périopératoires par classe de médicament et pour les DAI/CRT',
      bodyMarkdownFr: `Le tableau ci-dessous résume les protocoles publiés afin de préparer votre **consultation d'anesthésie** en France. **Appliquez toujours exclusivement les consignes écrites remises par votre anesthésiste, votre chirurgien et votre cardiologue.**

| Classe médicamenteuse | Conduite périopératoire publiée | Justification principale |
|---|---|---|
| **Bêtabloquants** (bisoprolol, carvédilol, nébivolol, métoprolol) | **Poursuite** sans interruption, y compris le matin de l'opération | Un arrêt brutal expose à une tachycardie rebond, une ischémie ou une arythmie. Ne jamais initier un bêtabloquant le jour même (débuter ≥ 8 j avant si nouvelle indication) |
| **IEC / ARA2** (ramipril, périndopril, candésartan, valsartan) | **ICFER :** généralement **raisonnable de poursuivre** (AHA/ACC 2024 modéré ; ESC 2022 admet la poursuite en IC stable). *Hypertension seule :* pause de 24 h parfois choisie | **STOP-or-NOT (*JAMA* 2024, 2 222 patients, 40 hôpitaux français)** et **SPACE (*EHJ* 2024)** ont montré qu'arrêter n'a réduit ni les complications (**22 % vs 22 %**) ni l'insuffisance rénale aiguë (**11 % vs 11 %**), tandis que l'arrêt doublait l'hypertension sévère dans SPACE (**12,4 % vs 5,3 %**). Si une pause est décidée en chirurgie à haut risque (ou protocole MRC KDIGO 48–72 h), un **plan de reprise écrite rapide** est indispensable |
| **ARNI** (sacubitril/valsartan *Entresto*) | **Individualisée** par l'anesthésiste et le cardiologue (aucun ECR chirurgical) | L'inhibition de la néprilysine peut amplifier l'hypotension vasodilatatrice sous anesthésie |
| **iSGLT2** (dapagliflozine *Forxiga*, empagliflozine *Jardiance*) | **Suspension médicale 3 à 4 jours avant** une chirurgie majeure programmée (3 j dapa/empa/cana ; 4 j ertugliflozine ; KDIGO 48–72 h) **même sans diabète** | Prévient l'**acidocétose euglycémique** (acidose à glycémie quasi normale) favorisée par le jeûne et le stress opératoire. Reprise uniquement une fois stable et réalimenté. Pour des gestes mineurs sans jeûne prolongé (cataracte, soin dentaire simple), l'équipe peut adapter le délai |
| **ARM & diurétiques de l'anse** | **Individualisés** selon volémie, rein et potassium (souvent omis le matin de l'intervention en cas de jeûne) | Équilibre entre hypovolémie/hyperkaliémie peropératoire et surcharge hydrique postopératoire |
| **GLP-1 / GIP-GLP-1** (*Ozempic*, *Wegovy*, *Mounjaro*) | **Approche stratifiée (consensus 5 sociétés, oct. 2024) :** maintien possible si stable sans troubles digestifs ; si risque accru : **diète liquide 24 h**, échographie gastrique (POCUS) ou intubation rapide. Certains hôpitaux gardent une pause d'1 semaine (ASA 2023) | Alertes **EMA PRAC (juil. 2024)** et **FDA (nov. 2024)** sur le risque d'**inhalation gastrique** par ralentissement de la vidange de l'estomac. Prudence renforcée si associé à un iSGLT2 |
| **Metformine** | Généralement suspendue avant chirurgie majeure, jeûne prolongé ou produit de contraste iodé (48–72 h KDIGO) puis reprise après contrôle rénal | Prévient la rare **acidose lactique** en cas d'IRA périopératoire |
| **Statines et clonidine** | **Poursuite** continue | Les statines réduisent les complications vasculaires ; l'arrêt brutal de clonidine cause un rebond hypertensif sévère |
| **Antiplaquettaires** | **Avec stent :** poursuivre l'**aspirine** dès que le risque hémorragique le permet ; pause P2Y12 uniquement après accord cardiologue + chirurgien (prasugrel **7 j**, clopidogrel **5 j**, ticagrélor **3 j** AHA / **5 j** GIHP-SFAR 2018) | Risque de thrombose de stent fatale (majoré si FEVG < 40 %) |
| **AOD** (apixaban, rivaroxaban, edoxaban, dabigatran) | Pause brève calibrée (24–72 h+ selon risque et DFGe). **AUCUN relais systématique par héparine (HBPM)** | Le relais héparine triple les saignements majeurs sans prévenir les AVC (RE-LY **6,5 % vs 1,8 %** ; protocole PAUSE) |
| **AVK** (warfarine, fluindione, acénocoumarol) | Pause ~5 jours avant chirurgie à haut risque (cible INR < 1,5). Pas de relais HBPM systématique en FA non valvulaire (BRIDGE) | Relais réservé aux très hauts risques thrombotiques (valve mécanique, caillot récent) |

*Limite importante des essais SRAA périopératoires :* l'insuffisance cardiaque chronique ne représentait que **6 %** de STOP-or-NOT (FEVG médiane 55–57 %), **< 10 %** de SPACE et était exclue de POISE-3 (7 490 patients, **13,9 % vs 14,0 %**). Toutefois, dans les cohortes réelles (~250 000 opérés US Veterans Affairs), **25 à 33 %** des IEC/ARA2 arrêtés n'étaient pas repris rapidement, ce qui s'accompagnait d'une surmortalité à 30 jours (**HR 3,44** pour les IEC), justifiant d'éviter les pauses non nécessaires et d'exiger une date de reprise écrite.

### DAI, CRT et bistouri électrique (règle de l'ombilic)

- Apportez votre **carte de porteur** en consultation d'anesthésie et vérifiez que le dernier contrôle du boîtier date de moins de **6 mois** (DAI/CRT) ou **12 mois** (pacemaker).
- **Chirurgie AU-DESSUS de l'ombilic** avec bistouri monopolaire : risque notable d'interférences électromagnétiques (chocs inappropriés ou inhibition de stimulation) -> l'équipe planifie soit une **reprogrammation préopératoire** (méthode préférée), soit un **aimant clinique fixé**, avec palettes de défibrillation prêtes et contrôle postopératoire.
- **Chirurgie EN DESSOUS de l'ombilic** (plaque de retour bien placée sur la cuisse) ou **bistouri bipolaire** : risque d'interférence minime.
- **Nuance essentielle sur l'aimant :** posé sur un **DAI ou CRT-D**, un aimant suspend les chocs mais ne bascule généralement **pas** la stimulation ni la CRT en mode asynchrone ; si vous êtes stimulodépendant ou dépendant d'une CRT, la reprogrammation formelle par l'équipe de rythmologie est préférable (pour les aimants de montres/téléphones au quotidien, voir *Dispositifs cardiaques implantés : DAI et CRT*).`,
    },
    {
      headingFr: 'Soins dentaires, antibioprophylaxie et antithrombotiques (HAS 2024 et SFCO)',
      bodyMarkdownFr: `Deux idées reçues persistent à tort : tous les patients cardiaques n'ont pas besoin d'antibiotiques avant le dentiste, et les antithrombotiques ne sont presque jamais arrêtés pour un détartrage ou une extraction simple.

### Qui a — ou n'a pas — besoin d'antibioprophylaxie de l'endocardite ?

- **PAS d'antibioprophylaxie de routine** pour une **ICFER ischémique isolée**, des **stents coronaires**, un **pacemaker**, un **DAI** ou une **CRT** (ESC 2023 Classe III / risque intermédiaire ; AHA 2021 ; **recommandation française HAS d'octobre 2024**, Annexes 1 et 2). La HAS précise qu'il n'existe **aucune contre-indication aux soins dentaires invasifs** chez les porteurs de DAI/CRT et recommande une hygiène bucco-dentaire rigoureuse plus un **bain de bouche antiseptique d'1 minute (chlorhexidine 0,12 % à 0,20 %)** avant tout geste (**Grade B**). *(Ne pas confondre avec l'antibioprophylaxie IV administrée au moment de l'implantation chirurgicale du boîtier, ESC Classe I A.)*
- **Conditions associées à HAUT RISQUE nécessitant une antibioprophylaxie** (avant extractions, chirurgie orale/implantaire/parodontale, détartrage sous-gingival ou soin endodontique) :
  1. Antécédent d'**endocardite infectieuse** (ESC **I B**, HAS **Grade A**).
  2. **Prothèse valvulaire cardiaque** (chirurgicale ou **TAVI**) ou matériel prothétique de réparation valvulaire comme un anneau (ESC **I C**, HAS **Grade A**).
  3. **Clip valvulaire percutané (MitraClip / TriClip)** : **HAS oct. 2024 Grade A (haut risque)** ; ESC 2023 **Classe IIa C**.
  4. **Assistance circulatoire (LVAD)** : nouvelle indication de haut risque (**ESC 2023 I C**, **HAS oct. 2024 Grade A**).
  5. Certaines cardiopathies congénitales cyanogènes non réparées ou avec matériel prothétique récent/fuite résiduelle (**I C / Grade A**).
  6. **Transplantation cardiaque :** divergence entre ESC 2023 (**IIb C**), AHA 2021 (uniquement si valvulopathie du greffon) et HAS oct. 2024 (non retenue en Grade A systématique si non compliquée).
- **Choix de l'antibiotique et alerte QT :**
  - Schéma standard : **amoxicilline 2 g** par voie orale 30 à 60 minutes avant le geste.
  - La **clindamycine a été supprimée** (ESC 2023, AHA 2021, HAS 2024) en raison du risque de colite à *Clostridioides difficile*.
  - En cas d'allergie à la pénicilline : la HAS (oct. 2024) propose l'**azithromycine 500 mg (Grade B)** mais émet une **alerte explicite contre son utilisation avec les médicaments allongeant le QT** (risque de torsades de pointes), en particulier si vous prenez de l'**amiodarone (*Cordarone*)**, du sotalol ou du citalopram/escitalopram. En France, la HAS cite la **pristinamycine 1 g** (hors AMM, Grade AE) ou la **céfazoline 1 g IV** (allergie non anaphylactique, Grade A) comme alternatives à discuter entre dentiste et cardiologue. Évitez la clarithromycine sous AOD ou en ICFER.

### Antithrombotiques, anesthésie locale et appareils dentaires (SFCO 2015)

- **N'interrompez pas vos traitements seul :**
  - **Monothérapie antiplaquettaire (aspirine ou clopidogrel) :** **poursuite pour toute chirurgie orale** quel que soit le risque hémorragique (Grade A pour les extractions).
  - **DAPT, AOD et AVK :** **poursuite** pour les soins à faible risque hémorragique (extractions simples ou d'un seul quadrant, implant unique, détartrage sous-gingival) avec hémostase locale (sutures, éponges, compresses/bains de bouche d'**acide tranexamique**). Programmer le rendez-vous au **creux** de l'AOD avant la prise suivante ; sous AVK, vérifier un **INR < 4,0 dans les 24 à 72 heures** (Grade A).
  - **Chirurgie orale à haut risque** (extractions multi-quadrants, greffe osseuse, comblement sinusien) : concertation obligatoire entre chirurgien-dentiste et cardiologue.
  - **Douleur dentaire :** **évitez les AINS** (ibuprofène, kétoprofène, diclofénac — Classe III en ICFER et Grade A contre-indiqués avec AVK) ; privilégiez le **paracétamol**.
- **Anesthésie locale avec adrénaline à faible dose :** une douleur mal contrôlée provoque une décharge d'adrénaline interne bien plus forte (> 10× le repos) que la petite dose locale. Une méta-analyse de 10 ECR chez des patients cardiovasculaires stables (Guimaraes 2021, n = 478) a montré un meilleur contrôle de la douleur, une **baisse de la PAS post-geste (SMD -0,95)**, **zéro décès/infarctus/AVC** et aucune hausse significative des arythmies *(certitude GRADE très faible, écart interne texte RR 1,24 vs tableau 2,16 ; essais ayant exclu infarctus récent et IC décompensée)*. Précautions usuelles : injection lente avec aspiration, plafond habituel autour de **36 à 40 µg d'adrénaline (~2 cartouches à 1:100 000)**, **éviction des fils rétracteurs imbibés d'adrénaline**, prudence avec un bêtabloquant non sélectif (*Kredex*) ou une arythmie instable.
- **Appareils dentaires et DAI/CRT :** fraises, radiographies, lampes à polymériser et détartreurs **piézoélectriques** sont sûrs ; tenir les détartreurs **magnétostrictifs** plus anciens à au moins **15 cm** du boîtier. Différer les soins non urgents de **4 à 6 semaines** après un infarctus aigu.`,
    },
    {
      headingFr: 'Concilier les règles des « jours de maladie » dans l’ICFER',
      bodyMarkdownFr: `Les cartes génériques d'arrêt des médicaments lors de vomissements ou diarrhées (« SADMANS ») suscitent une tension réelle entre néphrologues et cardiologues : les enjeux diffèrent profondément selon la classe de médicament.

| Classe médicamenteuse | Risque signalé en cas de vomissements, diarrhées ou jeûne | Pourquoi l'auto-arrêt générique pose problème en ICFER | Position pratique conciliée |
|---|---|---|---|
| **iSGLT2** (dapagliflozine, empagliflozine) | **Alerte réglementaire claire :** fièvre aiguë, vomissements/diarrhées, déshydratation et jeûne déclenchent la rare **acidocétose euglycémique** (RCP EMA/FDA, KDIGO) | Risque absolu concentré dans le **diabète** (~1/1 000 pa ; 3 cas DT2 dans DAPA-HF, 0 dans EMPEROR-Reduced) | **Demandez à votre équipe** si une pause médicale en cas de gastro-entérite sévère ou jeûne doit figurer dans votre plan écrit (surtout si diabète ou insuline). Ne pas arrêter seul pour un simple rhume |
| **Metformine** | **Alerte réglementaire :** déshydratation aiguë, sepsis ou IRA exposent à la rare **acidose lactique** | Souvent incluse dans les plans médicaux en cas de gastro-entérite sévère | Vérifier avec votre médecin traitant / diabétologue le seuil et le contrôle de reprise |
| **IEC / ARA2 / ARNI et ARM** | Déshydratation + blocage du SRAA peuvent accentuer une baisse de tension et de filtration glomérulaire | **Zéro essai clinique** montrant un bénéfice des cartes d'auto-arrêt (Watson 2022 : 74 documents, 2 IC). **NICE NG148** (oct. 2024) n'avalise pas les cartes d'auto-arrêt (1.6.4) tout en gardant la Rec clinicienne 1.2.14 pour diarrhée/vomissements/sepsis. **Clark 2019** alerte sur les arrêts pour rhume, erreurs de tri (Doerfler 2019 : 1 seul patient sans erreur ; Vicary 2020 : 45 % gardaient la fiche à 12 mois), décompensations et non-reprises | **Ne vous auto-arrêtez pas avec une carte d'internet.** Appelez tôt votre médecin traitant, infirmière IC/IPA ou cardiologue si vomissements/diarrhées > 24–48 h, baisse de tension ou vertiges, pour décider d'une pause brève encadrée et de sa reprise |
| **Diurétiques de l'anse** (furosémide, bumétanide) | Diarrhées/vomissements profus + diurétique exposent à l'hypovolémie et à l'IRA | Arrêter sans nécessité en IC congestionnée expose à une surcharge rapide | Guidé par le **poids quotidien, les apports et la tension** dans un **plan écrit personnalisé** |
| **GLP-1** (*Ozempic*, *Wegovy*, *Mounjaro*) | Troubles digestifs sévères pouvant causer déshydratation et baisse rénale | Injection hebdomadaire non réversible instantanément | Hydratation orale si tolérée ; contact médical précoce si intolérance digestive persistante |
| **Bêtabloquants, antiplaquettaires, anticoagulants, statines** | **NE SONT PAS des médicaments de pause « jours de maladie »** | Risque de tachycardie rebond, ischémie, thrombose de stent ou AVC | **Poursuivre** sauf instruction médicale d'urgence (hémorragie active, état de choc) |

### Trois réflexes concrets à préparer à froid

1. **Obtenez un plan écrit personnalisé d'une page** auprès de votre cardiologue lorsque vous allez bien : médicaments à ne jamais suspendre, médicaments concernés par un appel ou une pause encadrée, signes d'alerte et modalités de reprise (habituellement 24 à 48 h après retour d'une alimentation normale, avec bilan si besoin).
2. **Appelez tôt votre médecin traitant, infirmière IC/IPA ou cardiologue** en cas de vomissements ou diarrhées dépassant **24 à 48 heures**, d'impossibilité de garder les liquides, de chute rapide du poids ou de la tension, de vertiges au lever ou d'urines très diminuées.
3. **Appelez immédiatement le 15 (SAMU), le 112 ou le 114 (SMS)** en cas de douleur thoracique, d'essoufflement sévère, de malaise, de confusion, ou de signes d'acidocétose sous iSGLT2 (nausées, vomissements, douleurs abdominales, fatigue inhabituelle ou respiration rapide et profonde, **même si la glycémie capillaire paraît normale**).

*Pour l'audit complet comparant bloqueurs du SRAA/ARM et iSGLT2 selon la gravité et le diabète, voir* *Thèse : règles des « jours de maladie » — bloqueurs du SRAA/ARM contre iSGLT2 dans l'ICFER*.`,
    },
    {
      headingFr: 'Compléments alimentaires avant chirurgie, comparatif des recommandations et limites',
      bodyMarkdownFr: `### Bilan préopératoire des plantes et compléments (SPAQI 2021)

Entre **50 % et 70 %** des patients opérés ne mentionnent pas leurs compléments ou plantes s'ils ne sont pas interrogés directement. Apportez **tous vos flacons, gélules, tisanes et produits sans ordonnance** à votre consultation d'anesthésie au moins 2 semaines avant une chirurgie programmée :

| Produit / complément | Conduite périopératoire publiée | Fenêtre d'arrêt évoquée et mécanisme |
|---|---|---|
| **Ginkgo biloba** | Pause préopératoire selon protocole | **EMA :** 3–4 jours ; **SPAQI 2021 / ASA :** 1 à 2 semaines (14 j). Risque hémorragique additif avec aspirine/DAPT/AOD |
| **Ail en gélules / extraits concentrés** | Pause préopératoire selon protocole | **EMA :** 7 jours ; **SPAQI :** 14 jours (effet antiplaquettaire). *L'ail culinaire normal dans l'alimentation n'est pas concerné* |
| **Millepertuis** (*Hypericum perforatum*) | **À éviter** (arrêt ≥ 14 j préopératoire) | Puissant inducteur CYP3A4 et P-gp : abaisse les taux d'AOD, digoxine, ivabradine, statines et anesthésiques |
| **Ginseng, gingembre forte dose, danshen, curcuma forte dose** | Pause 1 à 2 semaines (14 j) ; danshen à éviter sous anticoagulants | Interactions plaquettes, INR (AVK), tension ou glycémie |
| **Vitamine E forte dose (> 400 UI/j)** | **À éviter** / arrêter avant chirurgie | Effet antiplaquettaire et signal défavorable en IC (HOPE-TOO) |
| **Huiles de poisson / oméga-3** | **À discuter avec l'équipe** | L'essai chirurgical **OPERA** n'a pas montré de surrisque hémorragique, mais certains centres demandent 7–14 j d'arrêt pour les compléments OTC *(ne pas interrompre l'icosapent éthyl sur ordonnance sans accord cardiologique)* |
| **Réglisse (glycyrrhizine) & substituts de sel au potassium** | **À éviter** | Réglisse : hypokaliémie et hypertension ; sels au potassium : hyperkaliémie avec SRAA/ARM |
| **AINS sans ordonnance** (ibuprofène, diclofénac, naproxène) | **À éviter (Classe III en ICFER)** | Rétention hydrosodée, IRA périopératoire et saignements |
| **Mélanges multi-plantes inconnus** (« cœur », « détox », « articulations ») | **À éviter jusqu'à vérification** | Composition non standardisée ; faire vérifier par l'anesthésiste, le pharmacien ou le cardiologue ≥ 2 semaines avant l'opération |

### Accords, divergences entre recommandations et limites d'accès

- **Points d'accord :** poursuivre les bêtabloquants chroniques ; suspendre médicalement les iSGLT2 3 à 4 jours avant une chirurgie majeure programmée ; éviter le relais héparine systématique pour les AOD ; ne jamais interrompre unilatéralement les antithrombotiques ; ne pas donner d'antibioprophylaxie dentaire de routine pour l'ICFER, les stents ou les DAI/CRT ; supprimer la clindamycine.
- **Points de divergence :** délai minimal après DES en maladie coronaire stable pour chirurgie urgente (**1 mois** ESC 2022 vs **3 mois** AHA/ACC 2024) ; fenêtre d'arrêt du ticagrélor (**3 j** AHA/ACC vs **5 j** GIHP/SFAR vs **7 j** BSG/ESGE endoscopie) ; IEC/ARA2 en chirurgie (**poursuite en ICFER** AHA/ACC 2024 vs **prudence 48–72 h MRC** KDIGO 2024) ; grade d'antibioprophylaxie pour MitraClip/transplantation ; fenêtres des plantes (EMA 3–7 j vs SPAQI 14 j).
- **Limites des preuves :** STOP-or-NOT et SPACE sont indirects pour l'ICFER (≤ 6–10 % d'IC, **zéro essai pour l'ARNI**), les consignes GLP-1 d'octobre 2024 reposent sur un consensus d'experts, et certains PDF éditeurs primaires (ESC 2022 NCS, AHA/ACC 2024 NCS, ASA 2020, SPAQI 2021, SFAR 2025) ont été vérifiés via des revues en libre accès et des résumés PubMed. Chaque décision relève impérativement de vos équipes de cardiologie, d'anesthésie, de chirurgie et d'odontologie.`,
    },
  ],
  relatedArticleSlugs: [
    'these-jours-de-maladie-sraa-vs-isglt2',
    'medicaments-effets-secondaires-suivi',
    'maladie-renale-insuffisance-cardiaque',
    'diabete-insuffisance-cardiaque',
    'medicaments-glp1-et-incretines',
    'antiplaquettaires-bitherapie-et-protection-gastrique',
    'dispositifs-cardiaques-dai-crt',
    'interactions-complements-aliments-medicaments',
    'recommandations-comparees-esc-us-nice',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'vivre-avec-insuffisance-cardiaque',
  ],
  sources: [
    {
      label: 'Essais périopératoires SRAA : STOP-or-NOT (JAMA, 2024), SPACE (EHJ, 2024) et POISE-3 (Ann Intern Med, 2023)',
      detail: 'Comparaison arrêt vs poursuite des IEC/ARA2 avant chirurgie non cardiaque et limites en ICFER.',
    },
    {
      label: 'Recommandations périopératoires : AHA/ACC 2024 NCS (revues CCJM Cohn/Keshock 2025), ESC 2022 NCS, Kindel et al. (oct. 2024, GLP-1), BSG/ESGE 2021 (endoscopie) et ASA 2020/HRS (DAI/CRT)',
      detail: 'Délais post-stent, gestion des classes médicamenteuses, endoscopie digestive, règle de l’ombilic et aimants.',
    },
    {
      label: 'Soins dentaires et endocardite : HAS France (octobre 2024, texte intégral), ESC 2023 IE, AHA 2021, SFCO/SFC/GIHP (2015), GIHP/SFAR (2018) et Guimaraes et al. (BMJ Open, 2021)',
      detail: 'Absence d’antibioprophylaxie pour ICFER/stents/DAI-CRT, alerte azithromycine-QT, maintien des antithrombotiques et anesthésie locale avec adrénaline.',
    },
    {
      label: 'Jours de maladie et réglementation : Watson (2022/2023), Clark (2019), NICE NG148 (mis à jour oct. 2024), KDIGO 2024, RCP EMA Forxiga/Jardiance/Wegovy et FDA Farxiga/metformine',
      detail: 'Débat sur les cartes génériques, risques d’acidocétose sous iSGLT2, déshydratation sous GLP-1 et plan écrit personnalisé.',
    },
    {
      label: 'Compléments préopératoires et médicaments aggravant l’IC : SPAQI (2021), monographies EMA (ginkgo, ail) et Abdin et al. (EJHF, 2025)',
      detail: 'Fenêtres d’arrêt des plantes, interactions hémorragiques/CYP et agents anesthésiques en ICFER.',
    },
  ],
  disclaimerType: 'medical',
};
