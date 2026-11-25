import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'medicaments-effets-secondaires-suivi',
  sourceWikiPath: 'wiki/concepts/medicines-side-effects-and-monitoring.md',
  titleFr: "Médicaments : mode d'action, effets secondaires et bilans sanguins",
  category: 'traitements',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'traitement-de-fond',
    'effets-secondaires',
    'mécanismes',
    'suivi-biologique',
    'fonction-rénale',
    'potassium',
    'titration',
    'jours-de-maladie',
    'médicaments-à-éviter',
    'polymédication',
  ],
  aliases: [
    'Effets secondaires médicaments',
    'Bilans sanguins insuffisance cardiaque',
    'Créatinine et médicaments',
    'Potassium et médicaments',
    'Plan jours de maladie',
    'Titration',
    'DFGe',
    'Hyperkaliémie',
    'Médicaments aggravant l’insuffisance cardiaque',
    'Polymédication',
  ],
  linkedModules: ['core', 'ckd'],
  plainSummaryFr:
    "Chaque famille de médicaments de l'insuffisance cardiaque agit sur un levier différent : hormones qui resserrent les vaisseaux et retiennent le sel, adrénaline, ou élimination rénale. La plupart des effets secondaires sont modérés et s'atténuent avec le temps, mais quelques signaux imposent de contacter rapidement votre équipe ou les secours. Les bilans sanguins (reins et potassium) font partie intégrante du traitement, notamment 1 à 2 semaines après chaque initiation ou augmentation de dose : une petite hausse initiale de la créatinine est souvent attendue et ne signifie généralement pas que les reins s'abîment. Par ailleurs, certains autres médicaments (anti-inflammatoires courants, certains antidiabétiques, antiarythmiques ou anti-angineux) peuvent aggraver l'insuffisance cardiaque, d'où l'intérêt de passer régulièrement en revue l'ensemble de votre ordonnance. Ne modifiez ni n'arrêtez jamais un médicament sans avis médical ; les seuils biologiques présentés ici décrivent les repères utilisés par les médecins et non des consignes d'auto-ajustement.",
  sections: [
    {
      headingFr: 'Comment agit chaque classe de médicaments',
      bodyMarkdownFr: `Les indications et le niveau de bénéfice des traitements sont présentés dans *Les médicaments de l'insuffisance cardiaque (4 piliers)*. Voici, classe par classe, leur mécanisme d'action en termes simples.

| Classe | Exemples (DCI et noms usuels en France) | Mode d'action |
|---|---|---|
| **IEC** | ramipril (*Triatec*), lisinopril (*Zestril*), énalapril (*Renitec*), périndopril (*Coversyl*) | Bloque la fabrication d'angiotensine II, une hormone qui contracte les vaisseaux sanguins. Les vaisseaux se relâchent, la pression artérielle baisse et le travail du cœur diminue |
| **ARA2** | candésartan (*Atacand*), losartan (*Cozaar*), valsartan (*Tareg*) | Action proche d'un IEC, mais sans provoquer de toux sèche. Utilisé lorsque les IEC ne sont pas tolérés |
| **ARNI** | sacubitril/valsartan (*Entresto*) | Le valsartan bloque l'angiotensine II ; le sacubitril ralentit la dégradation des peptides natriurétiques, qui aident l'organisme à éliminer le sel et l'eau dans les urines |
| **Bêtabloquant** | bisoprolol (*Cardensiel*), carvédilol (*Kredex*), métoprolol succinate (*Selozok*), nébivolol (*Temerit*) | Un cœur affaibli déclenche une libération d'adrénaline et de noradrénaline qui le fatiguent à la longue. Le bêtabloquant ralentit le cœur et abaisse la tension pour le protéger |
| **ARM** | spironolactone (*Aldactone*), éplérénone (*Inspra*) | Bloque une hormone surrénalienne (aldostérone) qui aggrave l'insuffisance cardiaque et favorise la rétention d'eau et de sel par les reins. Diurétique faible |
| **iSGLT2** | dapagliflozine (*Forxiga*), empagliflozine (*Jardiance*) | Développés au départ contre le diabète en faisant passer du glucose dans les urines. Dans l'insuffisance cardiaque, ils protègent le cœur et les reins avec ou sans diabète, par des effets métaboliques et rénaux plus un léger effet diurétique |
| **Diurétique de l'anse** | furosémide (*Lasilix*), bumétanide (*Burinex*) | Augmente le volume d'urines produit par les reins pour évacuer l'excès de liquide dans les poumons et les chevilles. Soulage les symptômes |`,
    },
    {
      headingFr: 'Effets secondaires, classe par classe',
      bodyMarkdownFr: `| Classe | Effets fréquents ou attendus | Quand contacter l'équipe ou les secours |
|---|---|---|
| **IEC** | Toux sèche persistante ; vertiges ou étourdissements (surtout au lever rapide) ; modification occasionnelle du goût | **Gonflement des lèvres, de la bouche, de la langue ou de la gorge (angiœdème) : urgence vitale, appelez immédiatement le 15 (SAMU) ou le 112 (114 par SMS)** |
| **ARA2** | Variation de la fonction rénale ; hausse du potassium (pas de toux) | Surveiller selon le bilan biologique prescrit ; contacter l'équipe en cas de malaise ou d'effet gênant |
| **ARNI** | Étourdissements et hypotension artérielle au début, s'atténuant habituellement en **environ 14 jours** ; toux, maux de tête, nausées | **Angiœdème : urgence vitale (15 / SAMU ou 112)** |
| **Bêtabloquant** | Fatigue et moindre tolérance à l'effort au début (souvent transitoires) ; mains et pieds froids ; vertiges ; gêne respiratoire accrue chez les personnes souffrant d'asthme ou de bronchopathie ; troubles de l'érection ; peut masquer certains signes d'hypoglycémie chez les personnes diabétiques | **Ne jamais arrêter brutalement** : risque d'aggravation rapide des symptômes cardiaques |
| **ARM** | Hausse du potassium ; variation de la fonction rénale ; avec la spironolactone, gonflement ou sensibilité des seins (y compris chez l'homme) et troubles de l'érection | Signaler tout gonflement mammaire douloureux (un relais par éplérénone peut être discuté par le cardiologue) |
| **iSGLT2** | Urines plus fréquentes ; mycose génitale (une toilette quotidienne soigneuse est conseillée ; selon une revue européenne, une infection légère ou modérée n'impose pas forcément l'arrêt) ; dans les essais d'insuffisance cardiaque, les effets indésirables globaux étaient proches du placebo | **Alerte acidocétose** chez les personnes diabétiques lors d'une maladie aiguë sévère ou d'une déshydratation : contacter rapidement un médecin |
| **Diurétique de l'anse** | Envies d'uriner plus fréquentes (pendant jusqu'à environ **6 heures** après la prise), soif, vertiges, baisse du sodium et du potassium | Signes de déshydratation sévère (urines très rares ou très foncées, confusion) : contacter rapidement votre médecin traitant, votre cardiologue ou le **15 (SAMU)** en cas de gravité |

### Repères pratiques issus des guides patients

- Prendre la première dose d'un IEC le soir au coucher, et s'asseoir au bord du lit une minute avant de se lever, aide à limiter les sensations de vertige.
- Répartir les médicaments agissant sur la tension à différents moments de la journée (selon l'avis du médecin ou du pharmacien) peut aider à éviter une hypotension trop marquée sous ARNI.
- Prendre les diurétiques et les iSGLT2 le matin limite les réveils nocturnes pour uriner.
- Les effets secondaires des débuts s'estompent souvent : **ne modifiez pas et n'arrêtez pas vos doses vous-même** avant d'en avoir parlé à votre équipe.

### Médicaments additionnels

Les effets indésirables de l'ivabradine (éclairs lumineux dans la vision ou phosphènes, pouls lent, fibrillation atriale un peu plus fréquente ; éviter le pamplemousse), de la digoxine ou de la digitoxine (nausées, confusion, vision teintée de jaune ou pouls irrégulier pouvant signaler un surdosage ; élimination rénale pour la digoxine) et du vériciguat (hypotension, anémie ; ne pas associer aux traitements de type sildénafil) sont détaillés dans *Médicaments additionnels : ivabradine, digoxine/digitoxine et vériciguat*. La finérénone, un ARM plus récent sans les effets hormonaux et mammaires de la spironolactone, est présentée dans *Finérénone, nouveaux ARM et chélateurs de potassium*.`,
    },
    {
      headingFr: 'Comment les doses sont augmentées (titration)',
      bodyMarkdownFr: `Les traitements sont instaurés à faible dose puis augmentés par paliers progressifs (**titration**), avec une surveillance biologique et clinique plus rapprochée pendant cette période.

Exemples cités dans une revue européenne d'implémentation de 2024 (Volterrani et al., repères cliniciens) :
- **Sacubitril/valsartan (*Entresto*) :**
  - Dose initiale habituelle de **49/51 mg deux fois par jour**, ou **24/26 mg deux fois par jour** dans certaines situations (tension artérielle basse, fonction rénale diminuée, ou absence d'IEC/ARA2 récent). La dose est doublée toutes les **2 à 4 semaines** selon la tolérance (cible 97/103 mg deux fois par jour).
  - **Le passage d'un IEC à un ARNI impose un intervalle libre obligatoire de 36 heures** avant la première prise d'ARNI (risque d'angiœdème). Aucun délai de sevrage n'est décrit lors du passage depuis un ARA2.
- **Bêtabloquants :** les doses de départ et cibles sont progressives — par exemple, le bisoprolol (*Cardensiel*) passe de **1,25 mg à 10 mg une fois par jour**. L'objectif de fréquence cardiaque diurne moyenne mentionné est d'environ **60 à 69 battements par minute**.
- **iSGLT2 (dapagliflozine *Forxiga*, empagliflozine *Jardiance*) :** **10 mg une fois par jour**, sans titration. En règle générale, la dose de départ est directement la dose cible.

Le consensus américain (ACC 2024) privilégie l'introduction précoce à faible dose des quatre classes de fond, puis leur titration en environ **3 mois** lorsque cela est possible, plutôt que de monter une seule classe à pleine dose avant d'introduire les autres. Les recommandations britanniques NICE NG106 (2025) adoptent la même logique : il n'est pas nécessaire d'optimiser la dose d'un médicament avant d'introduire le suivant ; le rythme dépend des symptômes, de la fragilité, de la tension artérielle et de la fonction rénale.`,
    },
    {
      headingFr: 'Bilans sanguins : quand et pourquoi ?',
      bodyMarkdownFr: `- **Ce qui est contrôlé :** la fonction rénale (urée, créatinine, débit de filtration glomérulaire estimé ou **DFGe**) et le **potassium (kaliémie)**, ainsi que la tension artérielle et la fréquence cardiaque.
- **Calendrier pour un IEC ou un ARNI (revue européenne 2024) :** environ **1 à 2 semaines après le début** et **1 à 2 semaines après chaque augmentation de dose**, puis environ **tous les 4 mois** (plus souvent si les reins ou le potassium posent problème).
- **Calendrier NICE NG106 (Royaume-Uni, 2025) pour un IEC, ARNI, ARA2 ou ARM :**
  - avant la première prise ;
  - **1 à 2 semaines** après l'initiation et **1 à 2 semaines** après chaque augmentation de dose ;
  - **tous les 3 à 6 mois** une fois la dose maximale tolérée atteinte ;
  - à tout moment où la fonction rénale risque d'être perturbée.
- **Autres vérifications citées par NICE :** mesure de la pression artérielle avant et après chaque hausse de dose (les vertiges au lever sont une cause fréquente d'hospitalisation chez les personnes âgées) et **électrocardiogramme (ECG)** avant de débuter un bêtabloquant. Un bêtabloquant n'est pas initié si la fréquence cardiaque est inférieure à **50 battements/min** ou en présence de certains blocs cardiaques sans stimulateur (pacemaker).
- **En cas de maladie rénale chronique stable :** une revue cardiorénale (Beldhuis et al., 2022) propose des contrôles au départ, après chaque palier, à la dose maximale et après tout changement, puis **tous les 4 à 6 mois**.
- **Diurétiques :** les personnes prenant du furosémide au long cours bénéficient également de bilans sanguins réguliers (sodium, potassium, fonction rénale).

### Pourquoi une petite hausse de la créatinine est souvent attendue

Plusieurs médicaments du traitement de fond entraînent une baisse précoce et modérée du DFGe lors de leur introduction, parfois appelée **« pseudo-aggravation de la fonction rénale »** (*pseudo-worsening renal function*).

| Classe médicamenteuse | Baisse initiale typique du DFGe rapportée |
|---|---|
| IEC / ARA2 | environ **6,4 mL/min/1,73 m²** pendant la titration |
| ARM | environ **2,3 à 6,7 mL/min/1,73 m²** |
| iSGLT2 | environ **4 mL/min/1,73 m²** |
| ARNI | légère baisse initiale (chiffre non précisé dans la source) |

- Chez un patient cliniquement stable, cette baisse modérée ne doit pas, à elle seule, conduire à arrêter le médicament : la décision repose sur l'état clinique global et non sur le seul chiffre de créatinine.
- Le consensus américain (ACC 2024) confirme qu'une baisse modérée du DFGe isolée ne doit pas déclencher l'arrêt d'un pilier thérapeutique.
- À plus long terme, les **iSGLT2 ralentissent le déclin annuel** de la fonction rénale par rapport au placebo, et l'**ARNI** le ralentit modestement par rapport à l'énalapril.`,
    },
    {
      headingFr: 'Les seuils utilisés par les médecins',
      bodyMarkdownFr: `Les tableaux suivants présentent des repères décisionnels destinés aux **cliniciens**, issus d'un consensus britannique de 2019 (Clark et al.) et d'une revue européenne de 2024 (Volterrani et al.). Les auteurs britanniques qualifient eux-mêmes leurs seuils de « nécessairement arbitraires », reposant sur un niveau de preuve limité. Ils ne constituent en aucun cas des consignes d'auto-adaptation.

### Hausse de la créatinine après initiation ou titration d'un IEC, ARA2, ARNI ou ARM (consensus britannique 2019)

| Hausse de la créatinine | Conduite clinicienne décrite |
|---|---|
| **Moins de 30 %** | Poursuivre le traitement, sauf hypotension artérielle symptomatique |
| **De 30 % à 50 %** | Envisager une réduction de dose ou une pause temporaire, puis reprendre et retitrer |
| **Plus de 50 %** | Suspendre temporairement |

Ce même consensus indique qu'une baisse de la fonction rénale pouvant aller jusqu'à 30 % (ou légèrement au-delà) peut être acceptable pendant la phase d'optimisation.

### Potassium sanguin — kaliémie (tableau du consensus britannique 2019)

| Kaliémie (potassium sanguin) | Conduite clinicienne décrite |
|---|---|
| **5,5 à 5,9 mmol/L** | Renforcer la surveillance biologique ; l'arrêt des traitements n'est pas systématique si le patient va bien |
| **6,0 à 6,4 mmol/L** | Suspendre le ou les bloqueurs du système rénine-angiotensine-aldostérone (SRAA), recontrôler la prise de sang, reprendre à plus faible dose dès le retour sous **5,5 mmol/L** |
| **Plus de 6,5 mmol/L** | Prise en charge hospitalière |

*Nuance :* le texte principal du consensus britannique formule la tranche 5,5–5,9 mmol/L de façon légèrement plus prudente que son tableau (« envisager une suspension »).

### Position NICE NG106 (2025)

Si la créatinine augmente de **plus de 50 %** ou si le potassium dépasse **5,5 mmol/L**, les médecins appliquent les protocoles locaux plutôt que d'interrompre automatiquement le médicament.

### Seuils spécifiques aux ARM (revue européenne 2024)

- Potassium **> 5,5 mmol/L**, créatinine **> 221 µmol/L (25 mg/L, soit 2,5 mg/dL)** ou DFGe **< 30 mL/min/1,73 m²** : diviser la dose par deux et surveiller étroitement.
- Potassium **> 6,0 mmol/L**, créatinine **> 310 µmol/L (35 mg/L, soit 3,5 mg/dL)** ou DFGe **< 20 mL/min/1,73 m²** : suspendre le traitement.

### iSGLT2 et reins

Les iSGLT2 sont mentionnés comme ne devant pas être initiés en dessous d'un DFGe de **25 mL/min/1,73 m²** pour la dapagliflozine (*Forxiga*) ou de **20 mL/min/1,73 m²** pour l'empagliflozine (*Jardiance*). Ils n'élèvent pas le potassium.

### Facteurs fréquents d'élévation du potassium recherchés par le médecin

Lorsqu'une hyperkaliémie apparaît, les médecins passent en revue les autres sources possibles : compléments en potassium, diurétiques épargneurs de potassium, anti-inflammatoires non stéroïdiens (**AINS** tels que l'ibuprofène ou le kétoprofène), antibiotique triméthoprime et **substituts de sel riches en potassium** (voir *Interactions entre compléments, aliments et médicaments cardiaques*).`,
    },
    {
      headingFr: 'En cas de maladie passagère : des avis divergents sur le plan « jours de maladie »',
      bodyMarkdownFr: `Les sources médicales ne sont pas toutes d'accord sur la conduite à tenir pendant un épisode infectieux ou digestif bref (vomissements, diarrhée, fièvre, impossibilité de boire ou manger), souvent appelé **plan « jours de maladie »** (*sick day rules*).

| Position publiée | Source |
|---|---|
| **Mettre en pause l'iSGLT2** en cas de vomissements, diarrhée, fièvre ou incapacité à manger ou boire normalement ; reprendre une fois l'alimentation normale rétablie | Livret patient Guy's and St Thomas' (2026) |
| **Diurétiques :** demander l'avis de votre pharmacien ou de votre médecin, ou appliquer les consignes personnalisées déjà remises | Fiche patient NHS furosémide |
| **Les règles génériques « jours de maladie » sont jugées « bien intentionnées mais peu étayées »** pour les bloqueurs du SRAA (IEC, ARA2, ARNI, ARM). Aucune preuve ne montre que les arrêter pendant une maladie courte protège les reins ; les patients risquent de les arrêter pour des infections mineures ou de ne jamais les reprendre, ce qui peut nuire au cœur | Consensus britannique Clark et al. (2019) |

Le consensus britannique de 2019 est antérieur à la généralisation des iSGLT2 dans l'insuffisance cardiaque et n'aborde donc pas directement la question spécifique des iSGLT2. La meilleure démarche consiste à demander à votre cardiologue ou votre médecin traitant un **plan écrit personnalisé** pour savoir exactement quels médicaments suspendre — ou non — en cas de gastro-entérite ou de forte fièvre (voir *Questions à poser à l'équipe de cardiologie*).

Deux précisions complémentaires du consensus britannique de 2019 à destination des soignants :
- Arrêter par réflexe les bloqueurs du SRAA à l'hôpital à la suite d'une alerte informatique d'insuffisance rénale aiguë est qualifié de « dangereux » dans l'ICFER.
- Chez un patient toujours en surcharge hydrique (congestion), une baisse de la fonction rénale ne justifie pas à elle seule de réduire le diurétique.`,
    },
    {
      headingFr: 'Maladie rénale chronique et traitement de fond',
      bodyMarkdownFr: `Dans une revue dédiée à l'association ICFER et maladie rénale chronique (Beldhuis et al., 2022), le bénéfice de la plupart des médicaments de fond persiste jusqu'à une atteinte rénale modérée (**stade 3B**). Les preuves deviennent limitées sous un DFGe de **30 mL/min/1,73 m²** et absentes sous dialyse.

Les recommandations NICE NG106 (2025) suggèrent des doses initiales plus faibles et des paliers plus petits lorsque le DFGe est **≤ 45 mL/min/1,73 m²**, ainsi que l'avis d'un néphrologue en dessous de **30 mL/min/1,73 m²**. Voir *Maladies associées (reins, FA, valves, diabète)*.`,
    },
    {
      headingFr: 'Autres médicaments pouvant aggraver l’insuffisance cardiaque',
      bodyMarkdownFr: `Certains médicaments prescrits pour d'autres maladies, ou achetés sans ordonnance en pharmacie, peuvent aggraver l'insuffisance cardiaque : en favorisant la rétention d'eau et de sel, en affaiblissant la contraction cardiaque, en déclenchant des troubles du rythme ou, pour certains anticancéreux, en lésant le muscle cardiaque. Un consensus d'experts de l'*European Journal of Heart Failure* (**Abdin et al., 2025**) recense les principaux médicaments concernés — avec des mises en garde qui visent surtout l'ICFER — ainsi que des alternatives plus sûres.

| Motif de prescription | Médicaments signalés par le consensus | Mécanisme principal | Alternatives évoquées par le consensus |
|---|---|---|---|
| **Douleur, inflammation** | AINS (ex. ibuprofène, diclofénac) et inhibiteurs de la COX-2 (célécoxib), souvent vendus sans ordonnance | Rétention d'eau et de sel ; atténuent l'effet des diurétiques ; risque croissant avec la dose | Paracétamol ; gels ou crèmes d'AINS en application locale |
| **Angor, tension, fréquence cardiaque** | Vérapamil (*Isoptine*), diltiazem (*Tildiem*) | Affaiblissent la pompe et ralentissent le cœur | Amlodipine ou félodipine (peuvent provoquer des œdèmes des chevilles) |
| **Rythme cardiaque** | Antiarythmiques de classe I (flécaïnide, propafénone, disopyramide), dronédarone (*Multaq*), sotalol | Affaiblissent la contraction ou provoquent des arythmies ; la dronédarone a augmenté la mortalité dans un essai en ICFER symptomatique ; les classes I sont écartés en cas de cardiopathie structurelle **ou d'ischémie** | Amiodarone (*Cordarone*), sous surveillance |
| **Diabète** | Pioglitazone, rosiglitazone ; saxagliptine (*Onglyza*, hospitalisations pour IC augmentées d'environ **27 %** dans un grand essai) | Rétention hydrosodée | iSGLT2 ou metformine ; sitagliptine et linagliptine apparaissent neutres |
| **Tension artérielle, prostate** | Alpha-bloquants (doxazosine, également tamsulosine), moxonidine (*Physiotens*), minoxidil | Rétention hydrosodée ; la moxonidine a augmenté la mortalité dans un essai | Si un alpha-bloquant est indispensable pour la prostate, uniquement associé à un bêtabloquant (voir *Tension artérielle et insuffisance cardiaque*) |
| **Infections** | Itraconazole (qualifié de **contre-indiqué avec l'éplérénone** par le consensus) ; clarithromycine, érythromycine (prudence) ; cotrimoxazole (élève le potassium avec IEC, ARA2 ou ARM) | Diminution de la contractilité ; interactions | Fluconazole ; azithromycine |
| **Poumons (asthme / BPCO)** | Bêta-2-mimétiques par voie orale en comprimés ; recours fréquent aux inhalateurs de secours | Troubles du rythme | Dose inhalée minimale ; discuter d'autres classes d'inhalateurs si les traitements de secours sont fréquents |
| **Corticoïdes** | Corticoïdes de type prednisolone à forte dose ou au long cours (risque d'insuffisance cardiaque multiplié par **2 à 3,7**, croissant avec la dose) | Rétention hydrosodée | Dose minimale efficace ; les cures courtes semblaient sûres |
| **Nerfs, humeur, maladie de Parkinson** | Prégabaline (prudence) ; lithium (contre-indiqué dans l'ICFER) ; pramipexole, cabergoline (« prudence » dans le texte, « à éviter » dans l'ICFER dans le tableau récapitulatif) | Rétention hydrosodée ; effets sur le myocarde et le rythme | Duloxétine pour les douleurs neuropathiques ; valproate ou lamotrigine à la place du lithium ; ropinirole |
| **Traitements anticancéreux** | Anthracyclines, trastuzumab, inhibiteurs du VEGF et autres | Risque de cardiotoxicité (atteinte du muscle cardiaque) | Souvent sans équivalent : utilisés si indispensables avec suivi cardiologique dédié (cardio-oncologie) |

- **Chirurgie et anesthésie :** l'insuffisance cardiaque majore le risque opératoire ; le consensus détaille les agents anesthésiques adaptés à un cœur affaibli. Informer l'anesthésiste de votre FEVG et de vos traitements est un réflexe utile.
- **Antidépresseurs et plantes :** les antidépresseurs ne sont pas couverts par ce consensus (voir *Santé émotionnelle, anxiété et dépression* pour les essais cliniques) ; les plantes et produits en vente libre figurent dans *Interactions entre compléments, aliments et médicaments cardiaques*.
- **Solidité de cette liste :** il s'agit d'un **consensus d'experts** et non d'une recommandation issue d'une revue systématique ; une grande partie des données est ancienne, observationnelle ou extérieure à l'ICFER. Les mises en garde appuyées par des essais randomisés (**pioglitazone/rosiglitazone, saxagliptine, dronédarone, moxonidine, flécaïnide**) sont les plus robustes, et la mise en garde sur les AINS concorde avec l'ESC 2026.
- **Incohérences internes relevées dans l'article :** l'alogliptine est décrite comme neutre dans le texte mais « à éviter » dans les tableaux ; les macrolides sont « à éviter » dans le texte mais « prudence » dans les tableaux ; le disopyramide est classé en classe Ic alors qu'il relève habituellement de la classe Ia. Les tableaux citent également le **pergolide** comme option parkinsonienne plus sûre alors qu'il a été retiré dans plusieurs pays pour atteintes valvulaires cardiaques : cette ligne ne doit pas être retenue.
- **Aucune de ces informations ne justifie d'interrompre vous-même un traitement prescrit :** il s'agit de points à vérifier avec votre cardiologue, votre médecin traitant ou votre pharmacien.

### Prendre de nombreux médicaments à la fois (polymédication — REPORT-HF)

Le registre international **REPORT-HF** a suivi **18 030 patients** sortant d'une hospitalisation pour insuffisance cardiaque dans 44 pays entre 2014 et 2017 (environ la moitié avec FEVG < 40 %).

- **48 %** prenaient **5 médicaments ou plus autres que** leurs traitements de l'insuffisance cardiaque (**39 %** entre 5 et 9, et **9 %** au moins 10).
- Plus les patients prenaient d'autres médicaments, **moins souvent** ils recevaient les piliers de l'insuffisance cardiaque, et plus souvent ils recevaient des médicaments pouvant aggraver l'insuffisance cardiaque (**57 %** chez ceux prenant 10 autres médicaments ou plus contre **6 %** chez ceux en prenant moins de 5).
- La mortalité à 1 an s'élevait respectivement à **17,9 %**, **20,5 %** et **24,8 %** dans les trois groupes. Après ajustement sur l'âge et les maladies associées, prendre 10 médicaments ou plus restait associé à un surrisque de 16 % (**HR 1,16**), mais une fois le recours aux piliers de l'insuffisance cardiaque également pris en compte, l'association n'était **plus significative** (**HR 1,09**). Les auteurs suggèrent que le risque principal provient de l'éviction des traitements de fond de l'insuffisance cardiaque.
- Pris en groupe, les médicaments neurologiques et psychiatriques étaient associés à un risque plus élevé (**HR 1,23**). En revanche, recevoir un médicament de la liste « pouvant aggraver l'insuffisance cardiaque » n'était **pas** associé à une surmortalité globale (**HR 0,97**), et les antihypertenseurs listés étaient même associés à moins de décès (**HR 0,75**). Ce registre ne confirme donc pas à lui seul un effet délétère de la liste.
- **Limites :** étude observationnelle (ne distingue pas le médicament de la pathologie qu'il traite), antérieure aux ARNI et aux iSGLT2, sans enregistrement de l'automédication ni des compléments ; l'étiologie ischémique n'était pas analysée séparément (maladie coronaire présente chez **39 à 62 %** selon les groupes).
- **Message pratique :** réaliser régulièrement un bilan complet de votre ordonnance (y compris médicaments sans ordonnance et compléments alimentaires) avec votre médecin traitant, votre cardiologue ou votre pharmacien, non pas pour supprimer des comprimés par principe, mais pour vérifier que chacun reste utile et compatible avec votre traitement de fond.`,
    },
  ],
  relatedArticleSlugs: [
    'magnesium-insuffisance-cardiaque',
    'medicaments-insuffisance-cardiaque',
    'interactions-complements-aliments-medicaments',
    'maladies-associees',
    'questions-equipe-cardiologie',
    'glossaire-cardiologie',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'finerenone-et-nouveaux-arm',
    'cholesterol-et-prevention-secondaire',
    'tension-arterielle-insuffisance-cardiaque',
    'depression-et-sante-emotionnelle',
  ],
  sources: [
    {
      label: 'Livret patient Guy’s and St Thomas’ (2026) et site heartfailurematters.org',
      detail: 'Modes d’action vulgarisés, effets secondaires, conseils pratiques, angiœdème et conduite sur les iSGLT2 en cas de maladie aiguë',
    },
    {
      label: 'Fiche patient NHS sur le furosémide',
      detail: 'Effets indésirables des diurétiques de l’anse, signes de déshydratation et conduite en cas de maladie intercurrente',
    },
    {
      label: 'Volterrani et al. (revue européenne d’implémentation, 2024)',
      detail: 'Doses, délai de 36 h IEC vers ARNI, calendrier des bilans sanguins, seuils ARM et iSGLT2',
    },
    {
      label: 'Clark et al. (consensus britannique, 2019)',
      detail: 'Seuils cliniciens de créatinine et de potassium, analyse critique des règles « jours de maladie »',
    },
    {
      label: 'Beldhuis et al. (revue cardiorénale, 2022)',
      detail: 'Baisses initiales attendues du DFGe, bénéfice selon le stade rénal et suivi en cas de maladie rénale chronique',
    },
    {
      label: 'Parcours décisionnel ACC 2024 et recommandations NICE NG106 (2025)',
      detail: 'Introduction précoce à faible dose des quatre piliers, calendrier des bilans, ECG et mesure tensionnelle',
    },
    {
      label: 'RCP EMA Procoralan et Verquvo, fiche NHS digoxine, revue ACC 2026',
      detail: 'Effets secondaires des traitements additionnels et de la finérénone',
    },
    {
      label: 'Abdin et al. (consensus d’experts EJHF, 2025, texte intégral)',
      detail: 'Médicaments susceptibles de provoquer ou d’aggraver une insuffisance cardiaque, alternatives plus sûres et limites méthodologiques',
    },
    {
      label: 'REPORT-HF (EJHF, 2025, texte intégral)',
      detail: 'Polymédication hors insuffisance cardiaque après hospitalisation (18 030 patients), éviction des piliers et mortalité à 1 an',
    },
  ],
  disclaimerType: 'medical',
};
