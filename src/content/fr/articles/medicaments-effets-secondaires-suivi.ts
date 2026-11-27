import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'medicaments-effets-secondaires-suivi',
  sourceWikiPath: 'wiki/concepts/medicines-side-effects-and-monitoring.md',
  titleFr: "Médicaments : mode d'action, effets secondaires et bilans sanguins",
  category: 'traitements',
  readingTier: 'essential',
  asOf: '2026-11-26',
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
    "Chaque famille de médicaments cardiaques agit sur un levier précis pour protéger votre cœur. La plupart des effets secondaires sont modérés et s'atténuent avec le temps, mais certains signes rares imposent un avis rapide. Des bilans sanguins réguliers surveillent vos reins et votre potassium, surtout lors des ajustements de dose. Ne modifiez jamais votre traitement sans l'accord de votre équipe médicale.",
  keyTakeawaysFr: [
    "Les effets indésirables du début (vertiges, fatigue) s'atténuent souvent en quelques semaines : parlez-en à votre équipe avant tout changement.",
    "Un gonflement des lèvres, de la langue ou de la gorge sous IEC ou ARNI est une urgence : appelez immédiatement le 15 (SAMU), le 112 ou le 114 par SMS.",
    "Des prises de sang (reins et potassium) sont prévues 1 à 2 semaines après chaque hausse de dose ; une légère hausse de créatinine est souvent attendue.",
    "Évitez les anti-inflammatoires courants (ibuprofène, kétoprofène) sans avis médical et faites vérifier régulièrement toute votre ordonnance.",
  ],
  sections: [
    {
      headingFr: 'Comment agit chaque classe de médicaments',
      depth: 'patient',
      bodyMarkdownFr: `Les indications et le rôle global des traitements sont présentés dans *Les médicaments de l'insuffisance cardiaque (4 piliers)*. Voici comment agit chaque famille en termes simples.

| Classe | Exemples en France (DCI et noms usuels) | Mode d'action |
|---|---|---|
| **IEC** | ramipril (*Triatec*), lisinopril (*Zestril*), énalapril (*Renitec*), périndopril (*Coversyl*) | Bloque une hormone (angiotensine II) qui resserre les vaisseaux. Les vaisseaux se relâchent, la tension baisse et le travail du cœur diminue |
| **ARA2** | candésartan (*Atacand*), losartan (*Cozaar*), valsartan (*Tareg*) | Action proche d'un IEC, mais sans provoquer de toux sèche ; utilisé si les IEC ne sont pas tolérés |
| **ARNI** | sacubitril/valsartan (*Entresto*) | Associe le blocage de l'angiotensine II et le renforcement d'hormones naturelles qui aident à éliminer le sel et l'eau |
| **Bêtabloquant** | bisoprolol (*Cardensiel*), carvédilol (*Kredex*), métoprolol succinate (*Selozok*), nébivolol (*Temerit*) | Freine l'excès d'adrénaline qui fatigue un cœur affaibli, ralentit le pouls et abaisse la tension |
| **ARM** | spironolactone (*Aldactone*), éplérénone (*Inspra*) | Bloque l'aldostérone, une hormone qui favorise la rétention d'eau et de sel et rigidifie le cœur |
| **iSGLT2** | dapagliflozine (*Forxiga*), empagliflozine (*Jardiance*) | Protège le cœur et les reins, avec ou sans diabète, avec un léger effet d'élimination urinaire |
| **Diurétique de l'anse** | furosémide (*Lasilix*), bumétanide (*Burinex*) | Augmente le volume d'urines pour évacuer l'excès de liquide dans les poumons et les chevilles |`,
    },
    {
      headingFr: 'Effets secondaires et gestes pratiques au quotidien',
      depth: 'patient',
      bodyMarkdownFr: `| Classe | Effets fréquents ou attendus | Quand contacter votre équipe ou les secours |
|---|---|---|
| **IEC** | Toux sèche persistante ; vertiges au lever rapide ; légère modification du goût | **Gonflement des lèvres, de la bouche, de la langue ou de la gorge (angiœdème) : urgence vitale, appelez le 15 (SAMU), le 112 ou le 114 (SMS)** |
| **ARA2** | Variation de la fonction rénale ; hausse du potassium (pas de toux) | Suivre les bilans prescrits ; contacter votre médecin en cas de malaise ou de gêne |
| **ARNI** | Étourdissements et tension un peu basse au début (s'atténuent habituellement en environ 14 jours) ; toux, maux de tête, nausées | **Angiœdème : urgence vitale (15 / SAMU, 112 ou 114 par SMS)** |
| **Bêtabloquant** | Fatigue au début (souvent transitoire) ; mains et pieds froids ; vertiges ; gêne respiratoire si asthme/BPCO ; troubles de l'érection ; peut masquer certains signes d'hypoglycémie chez les personnes diabétiques | **Ne jamais arrêter brutalement** : risque d'aggravation rapide des symptômes cardiaques |
| **ARM** | Hausse du potassium ; variation rénale ; avec la spironolactone, sensibilité ou gonflement des seins (y compris chez l'homme) et troubles de l'érection | Signaler toute douleur ou gonflement mammaire (un relais par éplérénone peut être discuté par votre cardiologue) |
| **iSGLT2** | Urines plus fréquentes ; mycose génitale (une toilette quotidienne douce aide à la prévenir) | **Signes d'acidocétose** (nausées, douleurs abdominales, respiration rapide, surtout chez les personnes diabétiques lors d'une maladie aiguë ou d'un jeûne) : consulter rapidement un médecin |
| **Diurétique de l'anse** | Envies d'uriner plus fréquentes pendant environ 6 heures après la prise ; soif ; vertiges ; baisse du sodium ou du potassium | Signes de déshydratation sévère (urines très rares ou foncées, confusion, malaise) : contacter votre médecin traitant, votre cardiologue ou le **15 (SAMU)** en cas de gravité |

### Conseils pratiques issus des guides patients

- Prendre la première dose d'un IEC le soir au coucher, puis s'asseoir une minute au bord du lit avant de vous lever, aide à limiter les étourdissements.
- Si votre tension baisse sous ARNI, demandez à votre médecin ou à votre pharmacien s'il est utile d'espacer les médicaments qui agissent sur la tension dans la journée.
- Prendre les diurétiques et les iSGLT2 le matin limite les réveils nocturnes pour uriner.
- Les effets secondaires des premières semaines s'estompent souvent : **ne modifiez pas et n'arrêtez pas vos doses vous-même** avant d'en parler à votre équipe.
- **Ne stoppez jamais brutalement un bêtabloquant :** les notices du bisoprolol et du carvédilol imposent une diminution progressive, en particulier en cas de maladie coronaire. Les règles en cas d'oubli de dose pour chaque médicament sont détaillées dans *Observance et oubli de dose*.
- **Matin ou soir :** de grands essais sur les médicaments de la tension n'ont montré aucune différence sur les infarctus, les AVC ou les décès entre prise matinale et vespérale. Si votre tension est basse, les recommandations européennes suggèrent de répartir les prises dans la journée avec votre médecin (voir *Horaires de prise et routine quotidienne des médicaments*).

### Médicaments additionnels

Pour les effets secondaires de l'ivabradine (*Procoralan* : éclairs lumineux dans la vision, pouls lent, éviter le pamplemousse), de la digoxine (*Digoxine Nativelle*) ou digitoxine (nausées, confusion, vision teintée de jaune ou pouls irrégulier), du vériciguat (*Verquvo* : hypotension, anémie, ne pas associer aux traitements de type sildénafil) et de la finérénone (*Kerendia*), voir *Médicaments additionnels : ivabradine, digoxine/digitoxine et vériciguat* et *Finérénone, nouveaux ARM et chélateurs de potassium*.`,
    },
    {
      headingFr: 'Titration, bilans sanguins et jours de maladie',
      depth: 'patient',
      bodyMarkdownFr: `### Comment les doses sont augmentées

Les traitements de fond sont instaurés à faible dose puis augmentés par paliers (**titration**) :
- **Sacubitril/valsartan (*Entresto*) :** débuté le plus souvent à 49/51 mg ou 24/26 mg deux fois par jour, puis doublé toutes les 2 à 4 semaines selon la tolérance jusqu'à 97/103 mg deux fois par jour. **Règle de sécurité indispensable :** lors du passage d'un IEC à l'ARNI, un intervalle libre d'au moins **36 heures** est obligatoire avant la première prise d'ARNI (ce délai n'est pas nécessaire depuis un ARA2).
- **Bêtabloquants :** augmentés très progressivement (par exemple bisoprolol *Cardensiel* de 1,25 mg jusqu'à 10 mg par jour), avec vérification du pouls, de la tension et d'un électrocardiogramme (ECG) préalable.
- **iSGLT2 (dapagliflozine *Forxiga*, empagliflozine *Jardiance*) :** **10 mg une fois par jour**, sans paliers de titration.

### Bilans sanguins : quand et pourquoi ?

Les prises de sang vérifient principalement vos **reins** (créatinine en µmol/L et débit de filtration glomérulaire estimé, ou **DFGe**) et votre **potassium (kaliémie)**, ainsi que le sodium lorsque vous prenez un diurétique.
- Elles sont habituellement réalisées **avant le début** d'un IEC, ARA2, ARNI ou ARM, puis **1 à 2 semaines après chaque initiation ou augmentation de dose**, et ensuite **tous les 3 à 6 mois** une fois votre traitement stabilisé.
- **Une petite hausse initiale de la créatinine est souvent attendue :** lors de l'introduction d'un IEC, ARA2, ARNI, ARM ou iSGLT2, une légère baisse passagère du DFGe est fréquente et reflète l'adaptation de la pression dans les reins. Chez une personne qui se sent bien, elle ne justifie généralement pas d'arrêter le médicament ; à long terme, les iSGLT2 et l'ARNI protègent au contraire les reins.
- **Le potassium est surveillé dans les deux sens :** un potassium trop élevé (hyperkaliémie) comme trop bas (hypokaliémie) se corrige avec votre médecin. Une hausse modérée du potassium n'impose pas forcément l'arrêt d'un pilier protecteur : votre médecin vérifie d'abord les autres sources (anti-inflammatoires, compléments en potassium, **substituts de sel riches en potassium**) et peut adapter le traitement ou discuter des solutions dédiées.
- **En cas de maladie rénale chronique associée :** la plupart des piliers restent bénéfiques jusqu'à une atteinte rénale modérée, avec des paliers plus prudents et parfois un avis néphrologique (voir *Maladies associées (reins, FA, valves, diabète)*).

### En cas de gastro-entérite ou de forte fièvre (« jours de maladie »)

Les consignes d'arrêt temporaire pendant une maladie aiguë (vomissements, diarrhée, fièvre, impossibilité de boire) diffèrent selon les médicaments et font débat entre spécialistes. **Ne mettez pas vos traitements en pause seul avec une fiche trouvée sur internet :** demandez à froid à votre cardiologue ou à votre médecin traitant un **plan écrit personnalisé** (voir *Chirurgie, soins dentaires et règles des « jours de maladie »*).`,
    },
    {
      headingFr: 'Autres médicaments à vérifier avec votre médecin ou pharmacien',
      depth: 'patient',
      bodyMarkdownFr: `Certains médicaments prescrits pour d'autres problèmes — ou vendus sans ordonnance — peuvent retenir l'eau et le sel, affaiblir la contraction du cœur ou interagir avec vos traitements cardiaques. **N'arrêtez jamais vous-même un médicament déjà prescrit**, mais signalez-le à votre cardiologue, votre médecin traitant ou votre pharmacien.

| Situation | Médicaments à signaler ou à éviter dans l'ICFER | Alternatives souvent discutées par les médecins |
|---|---|---|
| **Douleur, inflammation** | Anti-inflammatoires non stéroïdiens (**AINS** : ibuprofène, kétoprofène, diclofénac, célécoxib), souvent en vente libre | Paracétamol ; gels ou crèmes locales sur avis médical |
| **Angor, tension** | Vérapamil (*Isoptine*), diltiazem (*Tildiem*) | Amlodipine ou félodipine (si besoin, sous surveillance d'éventuels œdèmes des chevilles) |
| **Rythme cardiaque** | Antiarythmiques de classe I (flécaïnide, propafénone, disopyramide), dronédarone (*Multaq*), sotalol | Amiodarone (*Cordarone*), sous surveillance cardiologique |
| **Diabète** | Pioglitazone, rosiglitazone, saxagliptine (*Onglyza*) | iSGLT2, metformine ; sitagliptine et linagliptine apparaissent neutres |
| **Tension, prostate** | Alpha-bloquants (doxazosine, tamsulosine), moxonidine (*Physiotens*), minoxidil | Si indispensable pour la prostate, discussion au cas par cas en association à un bêtabloquant |
| **Infections** | Itraconazole (contre-indiqué avec l'éplérénone) ; prudence avec clarithromycine, érythromycine ; cotrimoxazole (élève le potassium avec IEC/ARA2/ARM) | Fluconazole ; azithromycine (selon le contexte et le risque QT) |
| **Asthme / BPCO** | Bêta-2-mimétiques en comprimés ; recours très fréquent aux inhalateurs de secours | Dose inhalée minimale efficace et traitement de fond adapté |
| **Corticoïdes** | Corticoïdes type prednisolone à forte dose ou au long cours | Dose minimale efficace (les cures courtes sont généralement mieux tolérées) |
| **Anxiété, dépression, nerfs, Parkinson** | Antidépresseurs tricycliques et IMAO à éviter ; prudence avec venlafaxine, duloxétine, prégabaline, pramipexole, cabergoline ; lithium contre-indiqué ; **citalopram (*Seropram*) et escitalopram (*Seroplex*) contre-indiqués avec l'amiodarone ou le sotalol** (risque QT) | Choix personnalisé avec votre médecin et votre cardiologue (surveillance du sodium sanguin si diurétique associé) |
| **Traitements anticancéreux** | Anthracyclines, trastuzumab, inhibiteurs du VEGF et autres molécules potentiellement cardiotoxiques | Utilisés si indispensables avec suivi cardiologique dédié (cardio-oncologie) |

**Réflexe utile :** avant toute opération ou anesthésie, et au moins une fois par an, passez en revue **toute votre ordonnance** — médicaments sans ordonnance, compléments alimentaires, et produits à base de **cannabis ou de CBD** compris (le CBD peut élever les taux de digoxine et interférer avec certains anticoagulants) — avec votre médecin ou votre pharmacien. En France, les pharmaciens d'officine proposent un **bilan partagé de médication** (personnes de plus de 65 ans atteintes d'une maladie chronique prenant au moins 5 médicaments depuis 6 mois ou plus, pris en charge à 70 % par l'Assurance Maladie, avec synthèse transmise au médecin traitant). Pour les plantes et aliments, voir *Interactions entre compléments, aliments et médicaments cardiaques* et *Cannabis, CBD et substances récréatives*.`,
    },
    {
      headingFr: 'Repères cliniciens : seuils biologiques, maladie rénale et jours de maladie',
      depth: 'evidence',
      bodyMarkdownFr: `Les seuils ci-dessous sont des **repères décisionnels destinés aux cliniciens**, et non des consignes d'auto-adaptation pour les patients.

### Rythme de titration et calendrier biologique (Volterrani 2024, ACC 2024, NICE NG106 2025, Beldhuis 2022)

- **Titration :** ACC 2024 privilégie l'introduction précoce à faible dose des quatre classes puis leur titration en environ **3 mois** ; NICE NG106 (2025) ne requiert pas d'optimiser une classe avant d'introduire la suivante. Objectif de FC diurne moyenne sous bêtabloquant cité par Volterrani 2024 : **60 à 69 bpm** (NICE : ne pas initier si FC **< 50 bpm** ou bloc cardiaque sans pacemaker ; ECG préalable et mesure tensionnelle avant/après chaque palier).
- **Bilans sanguins :** Volterrani 2024 : **1 à 2 semaines** après initiation et chaque hausse, puis tous les **4 mois**. NICE NG106 : avant la 1re prise, **1 à 2 semaines** après initiation/hausse, puis tous les **3 à 6 mois**. Beldhuis 2022 (MRC stable) : départ, chaque palier, dose maximale, tout changement, puis tous les **4 à 6 mois**.
- **Baisses initiales attendues du DFGe (« pseudo-aggravation rénale », Beldhuis 2022) :**

| Classe médicamenteuse | Baisse initiale typique du DFGe |
|---|---|
| IEC / ARA2 | environ **6,4 mL/min/1,73 m²** pendant la titration |
| ARM | environ **2,3 à 6,7 mL/min/1,73 m²** |
| iSGLT2 | environ **4 mL/min/1,73 m²** |
| ARNI | légère baisse initiale (chiffre non précisé) |

### Seuils de créatinine et de potassium (Clark et al. 2019, NICE NG106 2025, Volterrani 2024)

Les auteurs britanniques (Clark et al. 2019) qualifient leurs seuils de « nécessairement arbitraires » (niveau de preuve limité) :

| Hausse de créatinine (IEC/ARA2/ARNI/ARM) | Conduite clinicienne décrite (Clark 2019) |
|---|---|
| **< 30 %** | Poursuivre sauf hypotension symptomatique |
| **30 % à 50 %** | Envisager réduction de dose ou pause temporaire, puis reprendre et retitrer |
| **> 50 %** | Suspendre temporairement |

| Kaliémie (potassium sanguin) | Conduite clinicienne décrite (Clark 2019) |
|---|---|
| **5,5 à 5,9 mmol/L** | Renforcer la surveillance ; arrêt non systématique si le patient va bien *(le texte principal nuance en évoquant « envisager une suspension »)* |
| **6,0 à 6,4 mmol/L** | Suspendre le(s) bloqueur(s) du SRAA, recontrôler, reprendre à plus faible dose dès retour **< 5,5 mmol/L** |
| **> 6,5 mmol/L** | Prise en charge hospitalière |

- **NICE NG106 (2025) :** au-delà de **+50 %** de créatinine ou potassium **> 5,5 mmol/L**, appliquer les protocoles locaux plutôt qu'un arrêt automatique.
- **Seuils spécifiques ARM (Volterrani 2024) :** diviser la dose par deux si potassium **> 5,5 mmol/L**, créatinine **> 221 µmol/L (25 mg/L)** ou DFGe **< 30 mL/min/1,73 m²** ; suspendre si potassium **> 6,0 mmol/L**, créatinine **> 310 µmol/L (35 mg/L)** ou DFGe **< 20 mL/min/1,73 m²**.
- **iSGLT2 et MRC :** non initiés sous DFGe **25 mL/min/1,73 m²** (dapagliflozine) ou **20 mL/min/1,73 m²** (empagliflozine) ; n'élèvent pas le potassium. Beldhuis 2022 : bénéfice des piliers conservé jusqu'au **stade 3B**, preuves limitées sous **30 mL/min/1,73 m²** et absentes sous dialyse. NICE NG106 : doses initiales plus faibles si DFGe **≤ 45** et avis néphrologique sous **30 mL/min/1,73 m²**.

### Maintien des traitements en cas d'hyperkaliémie (Sato et al. 2025, DIAMOND)

- **Relation en U :** zone cible suggérée **4,0 à 5,0 mmol/L** ; registre suédois : ~**1/4** hyperkaliémie et ~**1/5** hypokaliémie sur 1 an. Dans une cohorte, **47 %** des nouveaux utilisateurs d'ARM ont arrêté après un chiffre élevé ; dans un registre européen (**9 222 patients**), le lien hyperkaliémie-mortalité disparaissait après ajustement sur l'arrêt des bloqueurs du SRAA, alors que leur arrêt restait fortement associé au décès (données observationnelles).
- **Approche Sato 2025 :** maintenir jusqu'à **5,5 mmol/L**, reprendre/réaugmenter sous **5,0 mmol/L** ; contrôler les autres sources (AINS, triméthoprime, substituts de sel). *Limites :* revue narrative sans recherche systématique, liens d'intérêts de l'auteur principal et erreurs internes relevées.
- **Options médicamenteuses :** dans **PARADIGM-HF**, moins d'hyperkaliémies sévères sous sacubitril/valsartan que sous énalapril (**4,3 % vs 5,6 %**). Dans **DIAMOND** (**878 patients** ICFER, ~**71 %** ischémiques), le patiromer (*Veltassa*) a réduit les épisodes **> 5,5 mmol/L** (**HR 0,63**) et les baisses d'ARM (**HR 0,62**), mais le critère principal a été modifié en cours d'essai (décès **22 vs 16**, non significatif) : aucun essai ne prouve de gain de survie ou d'hospitalisations avec les chélateurs de potassium. Les ARM réduisent l'hypokaliémie (**EMPHASIS-HF**).

### Débat sur les « jours de maladie »

- **Livret Guy's & St Thomas' (2026) :** pause de l'iSGLT2 en cas de vomissements, diarrhée, fièvre ou incapacité à s'alimenter.
- **Fiche NHS furosémide :** avis médecin/pharmacien ou consignes personnalisées.
- **Consensus Clark 2019 (antérieur aux iSGLT2) :** règles génériques « bien intentionnées mais peu étayées » pour IEC/ARA2/ARNI/ARM ; arrêter par réflexe les bloqueurs du SRAA à l'hôpital sur alerte IRA est jugé dangereux, et en cas de congestion persistante, une baisse rénale seule ne justifie pas de réduire le diurétique.
- **Audit dédié (*Thèse : règles des « jours de maladie » — bloqueurs du SRAA/ARM contre iSGLT2 dans l’ICFER*) :** verdict **Partiellement étayée (confiance moyenne)** — pas d'auto-pause patient des bloqueurs du SRAA/ARM pour infection mineure ; pause brève encadrée par le médecin en cas de déshydratation sévère/sepsis/IRA avec reprise écrite ; pause temporaire encadrée des iSGLT2 en maladie aiguë grave, pertes digestives persistantes, jeûne prolongé ou chirurgie majeure pour prévenir l'acidocétose euglycémique (RCP EMA/FDA).`,
    },
    {
      headingFr: 'Données détaillées sur les médicaments aggravants et la polymédication',
      depth: 'evidence',
      bodyMarkdownFr: `### Consensus d'experts Abdin et al. (*EJHF*, 2025) et antidépresseurs

- **Solidité et limites :** consensus d'experts (non issu d'une revue systématique), reposant en partie sur des données anciennes, observationnelles ou hors ICFER. Les mises en garde les plus robustes (essais randomisés) concernent **pioglitazone/rosiglitazone**, **saxagliptine** (+**27 %** d'hospitalisations IC), **dronédarone** (surmortalité en ICFER symptomatique), **moxonidine** (surmortalité) et **flécaïnide** (écarté en cardiopathie structurelle ou ischémie), ainsi que les **AINS** (concordant avec ESC 2026) et les **corticoïdes** à forte dose ou au long cours (risque d'IC multiplié par **2 à 3,7**).
- **Incohérences internes relevées dans Abdin 2025 :** alogliptine neutre dans le texte mais « à éviter » dans les tableaux ; macrolides « à éviter » dans le texte mais « prudence » dans les tableaux ; disopyramide classé en Ic au lieu de Ia ; le **pergolide** cité à tort comme option parkinsonienne plus sûre alors qu'il a été retiré dans plusieurs pays pour valvulopathies (à ne pas retenir).
- **Antidépresseurs (hors Abdin 2025) :** consensus **ESC 2025 santé mentale** (éviter tricycliques et IMAO ; prudence venlafaxine/duloxétine) ; **MHRA 2011**, **RCP ANSM *Seroplex* 2026 / *Seropram* 2025** et **lettre ANSM 2022** (citalopram et escitalopram contre-indiqués avec les médicaments allongeant le QT comme amiodarone et sotalol ; ECG préalable suggéré) ; méta-analyse **Gheysens 2024** (les antidépresseurs triplent environ le risque d'hyponatrémie, surtout les IRSN et le moins avec la mirtazapine).

### Polymédication hors insuffisance cardiaque : registre REPORT-HF (*EJHF*, 2025)

- **Cohorte :** **18 030 patients** sortant d'hospitalisation pour IC dans 44 pays (2014–2017, ~50 % FEVG < 40 %, maladie coronaire chez **39 à 62 %** selon les groupes, avant ARNI/iSGLT2).
- **Prévalence :** **48 %** prenaient **≥ 5** médicaments hors IC (**39 %** entre 5 et 9 ; **9 %** ≥ 10). Plus ce nombre augmentait, moins les piliers de l'IC étaient prescrits et plus les patients recevaient des médicaments pouvant aggraver l'IC (**57 %** si ≥ 10 vs **6 %** si < 5).
- **Mortalité à 1 an :** **17,9 %**, **20,5 %** et **24,8 %** selon les trois groupes. Après ajustement âge/comorbidités, prendre ≥ 10 autres médicaments était associé à un surrisque (**HR 1,16**), qui devenait **non significatif** (**HR 1,09**) après ajustement sur l'utilisation des piliers de l'IC (effet d'éviction suggéré).
- **Analyses par groupe :** médicaments neurologiques/psychiatriques associés à un risque plus élevé (**HR 1,23**) ; recevoir un médicament de la liste « aggravant l'IC » n'était pas associé à une surmortalité globale (**HR 0,97**) et les antihypertenseurs listés étaient associés à moins de décès (**HR 0,75**).
- **Limites :** étude observationnelle (confusion par indication), antérieure aux ARNI/iSGLT2, sans recueil de l'automédication ni des compléments, et sans analyse séparée de l'étiologie ischémique.

### Données complémentaires sur l'arrêt des bêtabloquants et les horaires de prise

- **Arrêt brutal des bêtabloquants (Prins et al., 2015) :** dans une méta-analyse majoritairement observationnelle, l'arrêt d'un bêtabloquant lors d'une hospitalisation pour insuffisance cardiaque était associé à une mortalité à court terme plus élevée (**RR 1,61**).
- **Horaires de prise (TIME, BedMed, Skouri 2025) :** les essais randomisés **TIME** et **BedMed** n'ont montré aucune différence d'événements cardiovasculaires entre prise le matin et le soir ; en cas de pression artérielle basse dans l'ICFER, le consensus HFA (Skouri 2025) propose d'espacer les prises dans la journée.`,
    },
  ],
  relatedArticleSlugs: [
    'observance-et-oubli-de-dose',
    'horaires-de-prise-et-routine-medicaments',
    'cannabis-cbd-et-substances-recreatives',
    'sante-bucco-dentaire-et-gencives',
    'angor-et-medicaments-anti-angineux',
    'maladie-renale-insuffisance-cardiaque',
    'diabete-insuffisance-cardiaque',
    'antiplaquettaires-bitherapie-et-protection-gastrique',
    'escalade-et-resistance-aux-diuretiques',
    'magnesium-insuffisance-cardiaque',
    'sel-et-liquides-insuffisance-cardiaque',
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
    'complements-energetiques-cardiaques',
    'automesure-tensionnelle-domicile',
    'chirurgie-soins-dentaires-et-jours-de-maladie',
    'these-jours-de-maladie-sraa-vs-isglt2',
    'arythmies-ventriculaires-et-antiarythmiques',
    'vie-sexuelle-et-dysfonction-erectile-ic',
    'voyages-canicule-et-climat-ic',
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
    {
      label: 'Sato et al. (revue narrative sur les électrolytes, 2025, texte intégral)',
      detail: 'Relation en U du potassium, maintien des bloqueurs du SRAA et des ARM, registre européen (9 222 patients), hypokaliémie et limites méthodologiques',
    },
    {
      label: 'DIAMOND (European Heart Journal, 2022, texte intégral)',
      detail: 'Essai randomisé de sevrage du patiromer dans l’ICFER (878 patients, 71 % ischémiques), réduction des baisses d’ARM, changement de critère principal et mortalité',
    },
    {
      label: 'Consensus ESC 2025 (santé mentale et MCV), MHRA (2011), Gheysens (2024), RCP ANSM Seroplex (2026) / Seropram (2025) et lettre ANSM (2022)',
      detail: 'Choix des antidépresseurs en ICFER, contre-indication QT avec l’amiodarone et le sotalol, et risque d’hyponatrémie selon la classe',
    },
    {
      label: 'Prins et al. (2015), essais TIME / BedMed, consensus HFA Skouri (2025), Ameli BPM et RCP Epidyolex / alerte ANSM (2025)',
      detail: 'Arrêt des bêtabloquants, horaires de prise, espacement en cas de tension basse, bilan partagé de médication en pharmacie et interactions du CBD',
    },
  ],
  disclaimerType: 'medical',
};
