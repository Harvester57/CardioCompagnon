import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'glossaire-cardiologie',
  sourceWikiPath: 'wiki/references/glossary.md',
  titleFr: 'Glossaire médical de la cardiomyopathie ischémique',
  category: 'references',
  readingTier: 'reference',
  asOf: '2026-11-27',
  confidence: 'high',
  volatility: 'stable',
  tags: [
    'glossaire',
    'abréviations',
    'terminologie',
    'lexique',
    'acronymes',
  ],
  aliases: [
    'Lexique cardiologie',
    'Abréviations médicales',
    'Définitions des termes',
    'Acronymes insuffisance cardiaque',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Ce glossaire traduit en langage clair plus de 175 termes médicaux, abréviations et sigles administratifs français utilisés en cardiologie. Il couvre vos comptes rendus d'échographie, d'IRM cardiaque, de rythmologie ainsi que vos démarches de soins. Gardez cette référence sous la main pour décrypter un courrier médical ou préparer plus sereinement votre prochaine consultation avec votre cardiologue.",
  sections: [
    {
      headingFr: 'A – C',
      bodyMarkdownFr: `| Terme | Définition en clair |
|---|---|
| **AAH (allocation aux adultes handicapés)** | Revenu de solidarité français attribué sur décision MDPH sous conditions de ressources (taux d'incapacité ≥ 80 %, ou 50–79 % avec restriction substantielle et durable d'accès à l'emploi) ; plafond 1 041,59 €/mois en 2026, déconjugalisée depuis octobre 2023. |
| **Acide bempédoïque (*Nilemdo*)** | Comprimé quotidien réduisant le cholestérol LDL ; recommandé en Classe I (ESC) en cas d'intolérance aux statines, et envisageable en ajout à statine + ézétimibe. |
| **Acidocétose euglycémique (eKA / euDKA)** | Accumulation grave de corps cétoniques et d'acide dans le sang sous inhibiteur du SGLT2 malgré une glycémie normale ou peu élevée (< 13,9 mmol/L soit 2,50 g/L), déclenchée par une maladie aiguë grave, des vomissements/diarrhées, un jeûne, un régime cétogène, un excès d'alcool ou une chirurgie ; beaucoup plus rare sans diabète, mais facilement méconnue. |
| **AERAS (convention)** | Convention française « s'Assurer et Emprunter avec un Risque Aggravé de Santé ». Aucun questionnaire de santé si la part assurée est ≤ 200 000 € par personne et si le prêt se termine avant 60 ans (loi Lemoine) ; au-delà, examen jusqu'à trois niveaux. Le droit à l'oubli ne couvre pas les pathologies cardiaques. |
| **Aggravation de l'insuffisance cardiaque (worsening heart failure)** | Définition universelle 2026 : détérioration progressive des symptômes, des signes cliniques ou de la qualité de vie chez une personne déjà diagnostiquée (essoufflement ou œdèmes accrus, hausse du NT-proBNP, affaiblissement de la pompe). Ne nécessite pas de visite hospitalière et exclut un déclencheur externe majeur (infarctus, infection, oubli de traitement). À comparer à la *décompensation cardiaque*. |
| **Agoniste du GLP-1 / incrétine** | Médicaments imitant des hormones digestives (sémaglutide / *Wegovy*, *Ozempic*, *Rybelsus* ; double agoniste tirzépatide / *Mounjaro* ; triple agoniste rétatrutide en phase 3). Bénéfice prouvé sur infarctus/AVC et dans l'HFpEF, mais non prouvé dans l'ICFER (SOUL HR 0,98 ; hausse de fréquence cardiaque et déshydratation digestive à surveiller). |
| **AINS (anti-inflammatoires non stéroïdiens)** | Antalgiques/anti-inflammatoires (ibuprofène, kétoprofène, diclofénac...) à éviter dans l'insuffisance cardiaque car ils favorisent la rétention hydrosodée, les décompensations et l'insuffisance rénale. |
| **AJPA et congé de proche aidant** | Congé familial français non refusable par l'employeur (sans préavis en cas de dégradation médicale brutale) et allocation journalière du proche aidant (66,64 €/jour en 2026, max 66 jours par personne aidée, jusqu'à 4 personnes) ; requiert un taux d'incapacité ≥ 80 %, l'APA ou une invalidité de 3e catégorie (l'ALD seule n'ouvre pas ce droit). |
| **Akinésie / dyskinésie** | Sur une ETT ou une IRM : zone de la paroi cardiaque qui ne se contracte plus (akinétique) ou qui se bombe vers l'extérieur lors de la contraction (dyskinétique), généralement une cicatrice après infarctus. |
| **ALD (affection de longue durée)** | Statut français (ALD 5 insuffisance cardiaque grave ; ALD 13 maladie coronaire) : soins liés à la maladie inscrits au *protocole de soins* pris en charge à 100 % du tarif de l'Assurance Maladie. Les dépassements d'honoraires, forfaits et franchises restent à charge ou couverts par la mutuelle/C2S. |
| **Allopurinol / fébuxostat (*Adenuric*)** | Médicaments oraux hypo-uricémiants de fond de la goutte récidivante (non indiqués pour une hyperuricémie asymptomatique, échec dans EXACT-HF et ALL-HEART). L'allopurinol est la 1re ligne dans l'ICFER ; le fébuxostat reste en 2e ligne en raison du signal de décès CV dans CARES et du *Boxed Warning* FDA (malgré l'essai européen FAST neutre). |
| **Amiodarone (*Cordarone*)** | Principal antiarythmique oral sûr sur le plan myocardique dans l'ICFER ischémique (contrairement aux classes IC et à la dronédarone, contre-indiqués) ; sa demi-vie de 20 à 100 jours impose un suivi structuré tous les 6 mois (thyroïde, foie), un ECG, une vigilance pulmonaire, une protection solaire et un contrôle strict des interactions médicamenteuses. |
| **Amylose cardiaque (ATTR / AL)** | Cardiomyopathie infiltrative par dépôts de protéines amyloïdes : chaînes légères monoclonales (**AL**, urgence hématologique) ou transthyrétine (**ATTR**, liée à l'âge ou héréditaire). Coexiste avec une coronaropathie obstructive chez environ 1 patient ATTR âgé sur 4 et modifie la tolérance aux traitements et les choix de DAI. |
| **Anévrisme du ventricule gauche (anévrisme VG)** | Zone amincie et cicatricielle du ventricule gauche qui se dilate vers l'extérieur, souvent sur la paroi antérieure et l'apex après un infarctus de l'IVA ; accroît le risque de thrombus VG. |
| **Angio-œdème** | Gonflement brutal et rare des lèvres, de la bouche, de la langue ou de la gorge sous IEC ou sacubitril/valsartan (*Entresto*) ; urgence médicale immédiate (appeler le 15 / SAMU ou le 112). Délai obligatoire d'au moins **36 heures** entre le dernier IEC et la première prise d'ARNI (pas de délai après un ARA2) ; risque environ 4 fois plus élevé chez les personnes noires. |
| **Angioplastie coronaire (PCI)** | Ouverture d'une artère coronaire rétrécie ou bouchée par cathéter, le plus souvent avec pose d'un stent. |
| **Angor (angine de poitrine)** | Douleur, oppression ou serrement thoracique, souvent à l'effort, lorsque le muscle cardiaque manque de sang oxygéné. Dans l'ICFER, le bêtabloquant est le premier anti-angineux ; les autres soulagent les symptômes sans prolonger la survie. |
| **Antiagrégant plaquettaire** | Médicament empêchant les plaquettes de s'agréger (aspirine à faible dose, clopidogrel, ticagrélor) ; prescrit au long cours dans la maladie coronaire et après pose de stent. |
| **Antibioprophylaxie de l'endocardite infectieuse (EI)** | Prise unique d'antibiotique (amoxicilline 2 g ; clindamycine retirée) avant certains soins dentaires invasifs, réservée **uniquement** aux cardiopathies à haut risque (prothèse/TAVI, MitraClip/TEER, LVAD, antécédent d'EI, certaines cardiopathies congénitales) — **pas** pour l'ICFER ischémique, les stents coronaires ou les DAI/CRT seuls. |
| **Anticoagulant** | Médicament ralentissant la coagulation sanguine (AVK comme warfarine ou fluindione, ou AOD). Distinct de l'aspirine, qui est un antiagrégant plaquettaire. |
| **Anticipation des soins (advance care planning)** | Démarche consistant à discuter et consigner ses préférences de soins tant que l'état est stable (incluant en France *directives anticipées*, *personne de confiance* et désactivation des chocs de DAI) ; recommandée dans l'IC avancée (ESC 2026, Classe I). |
| **AOD (anticoagulant oral direct / DOAC)** | Anticoagulant oral à dose fixe (apixaban, rivaroxaban, édoxaban, dabigatran) ne nécessitant pas de contrôle régulier de l'INR. |
| **APA (activité physique adaptée) et Maisons Sport-Santé** | Exercice encadré prescrit sur ordonnance (*sport sur ordonnance*, prescriptible par tout médecin ou IPA, renouvelable une fois par un kinésithérapeute) avec l'appui de 581 *Maisons Sport-Santé* ; **non** remboursée par l'Assurance Maladie pour l'IC même en ALD (à ne pas confondre avec l'allocation personnalisée d'autonomie départementale après 60 ans). |
| **ARM (antagoniste des récepteurs minéralocorticoïdes / MRA)** | Pilier du traitement de fond. Les **ARM stéroïdiens** (spironolactone / *Aldactone*, éplérénone / *Inspra*) disposent des preuves cliniques dans l'ICFER (ESC 2026 Classe I A ; US 2022 Classe 1 A) ; la finérénone est un ARM non stéroïdien plus récent. |
| **ARNI (sacubitril/valsartan — *Entresto*)** | Association faisant partie du pilier bloqueur du système rénine-angiotensine ; délai obligatoire d'au moins 36 heures après l'arrêt d'un IEC (pas de délai après un ARA2). |
| **ASE (agent stimulant l'érythropoïèse / ESA)** | Injection stimulant la production de globules rouges (ex. darbépoétine alfa) ; inefficace dans l'ICFER et associée à plus de thromboses et d'AVC dans RED-HF, donc contre-indiquée pour l'anémie de l'IC (AHA/ACC Classe 3 : Harm). |
| **ASV (servo-ventilation adaptative)** | Appareil ventilatoire nocturne adaptant sa pression cycle par cycle. Dans SERVE-HF, il a augmenté la mortalité dans l'ICFER avec apnée principalement centrale ; déconseillé dans ce cas (ESC 2026, Classe III). |
| **ATP (stimulation antitachycardique / anti-tachycardia pacing)** | Salve rapide et indolore d'impulsions délivrée par un DAI transveineux pour interrompre une tachycardie ventriculaire régulière avant de délivrer un choc (absente des DAI sous-cutanés) ; ≥ 5 épisodes d'ATP en 6 mois signalent une instabilité rythmique à réévaluer. |
| **Baisse initiale du DFGe (eGFR dip)** | Petite diminution attendue du DFGe (environ 3 à 4 points) dans les premières semaines après l'initiation d'un inhibiteur du SGLT2 ; dans DAPA-HF, elle n'était pas associée à un moins bon pronostic. Les RCP européens déconseillent d'initier sous DFGe 25 (dapagliflozine) ou 20 (empagliflozine) sans fixer de seuil d'arrêt. |
| **BBG (bloc de branche gauche) / durée du QRS** | Paramètres de l'ECG utilisés pour décider d'une CRT : un BBG avec durée du QRS ≥ 150 ms constitue la principale indication de Classe I dans l'ESC 2026. |
| **Bêtabloquant** | Pilier du traitement de fond et traitement de première ligne de l'angor dans l'ICFER. Seuls bisoprolol (*Cardensiel*), carvédilol et métoprolol succinate ont démontré une réduction de la mortalité dans l'ICFER ; le nébivolol figure dans le tableau de doses ESC mais pas dans les recommandations américaines. |
| **Blocage séquentiel du néphron** | Ajout temporaire d'un second diurétique agissant sur un autre segment du rein (thiazidique/métolazone oral ou acétazolamide IV à l'hôpital) au diurétique de l'anse ; accélère la décongestion hospitalière sans preuve de gain de survie et double hypokaliémie et dégradation rénale avec les thiazidiques. |
| **Brassard oscillométrique (automesure)** | Fonctionnement des tensiomètres automatiques, qui déduisent la pression artérielle des oscillations de la paroi artérielle dans le brassard plutôt que par auscultation ; moins fiable en fibrillation atriale et peut surestimer les tensions très basses. |
| **C2S (Complémentaire santé solidaire)** | Complémentaire santé publique française sous condition de ressources (gratuite ou 8 à 30 €/mois) ; contrairement à l'ALD seule, la C2S interdit les dépassements d'honoraires et supprime forfait journalier (23 €/j), FPU, participations (2 €) et franchises (1 €/4 €). |
| **CardioMEMS (capteur de pression artérielle pulmonaire)** | Capteur implanté dans une branche de l'artère pulmonaire détectant la congestion avant les symptômes. ESC 2026 : Classe IIa en NYHA III avec hospitalisation IC dans l'année ; réduit les hospitalisations sans effet démontré sur la survie. Non remboursé en France (HAS 2021). |
| **Cardiomyopathie dilatée (CMD / DCM)** | Ventricule gauche dilaté et affaibli **non expliqué uniquement** par une maladie coronaire ou une surcharge (HTA, valvulopathie ; ESC 2023). Causes : génétique, myocardite ancienne, alcool, etc. |
| **Cardiomyopathie induite par les arythmies (AiCM)** | Faiblesse réversible du VG causée ou aggravée (« surajoutée ») par une fréquence cardiaque durablement rapide (> 100 bpm), une fibrillation atriale (même ralentie) ou des extrasystoles ventriculaires fréquentes (PVC-CM, typiquement ≥ 10 %). |
| **Cellules iPS (cellules souches pluripotentes induites)** | Cellules adultes (peau ou sang) reprogrammées en laboratoire pour produire des cellules de muscle cardiaque. Utilisées à partir de donneurs dans les patchs et feuillets expérimentaux (BioVAT-HF, RiHEART, LAPiS), imposant un traitement immunosuppresseur. |
| **Cellules stromales / précurseurs mésenchymateuses (CSM / CPM / MSC / MPC)** | Cellules de soutien prélevées dans la moelle osseuse (autologues ou de donneur) testées dans l'IC ; le plus grand essai contre procédure factice (DREAM-HF) a été négatif sur son critère principal. |
| **CHA₂DS₂-VA** | Score européen d'évaluation du risque d'AVC dans la fibrillation atriale. L'insuffisance cardiaque compte 1 point ; une anticoagulation est recommandée dès 2 points. |
| **Chélateur de potassium** | Poudre orale (patiromer / *Veltassa*, cyclosilicate de zirconium sodique / *Lokelma*) éliminant le potassium par voie digestive afin de maintenir les ARM malgré une hyperkaliémie ; bénéfice clinique direct non démontré. |
| **Cholestérol LDL (LDL-C)** | Fraction athérogène du cholestérol. Objectif ESC après maladie coronaire : < 0,55 g/L (1,4 mmol/L) et réduction ≥ 50 % par rapport au taux initial (Classe I). |
| **Classe de recommandation (I, IIa, IIb, III)** | Force d'une recommandation : **I** = recommandé ; **IIa** = doit être envisagé ; **IIb** = peut être envisagé ; **III** = non recommandé (inutile ou délétère). |
| **CMI (carte mobilité inclusion)** | Carte MDPH française comportant trois mentions (*Priorité*, *Stationnement*, *Invalidité* ≥ 80 %) ; les anciennes cartes papier d'invalidité et de stationnement expirent le 31 décembre 2026. |
| **Colchicine** | Anti-inflammatoire utilisé à faible dose (0,5 mg/jour, ESC 2024 Classe IIa) dans la maladie coronaire chronique et en 1re intention orale des crises de goutte dans l'ICFER (à la place des AINS) ; marge thérapeutique étroite imposant de vérifier le DFGe (contre-indiquée < 30 mL/min en France) et les interactions CYP3A4/P-gp (clarithromycine, amiodarone, statines). |
| **Collatérales / grade de Rentrop** | Vaisseaux naturels de suppléance contournant une artère occluse. Le grade de Rentrop (0 à 3) évalue le remplissage ; le grade 3 (remplissage complet) suffit souvent au repos mais rarement à l'effort. |
| **Conflit autonome (immersion en eau froide)** | Activation simultanée de la réponse sympathique au choc thermique froid (adrénaline, vasoconstriction, tachycardie) et du réflexe parasympathique de plongée (bradycardie) lors d'une immersion brutale en eau glacée, exposant les cœurs cicatriciels à des arythmies graves. |
| **Coronaropathie fortuite / « spectatrice » (bystander CAD)** | Maladie coronaire obstructive présente en parallèle d'une cardiomyopathie primitive non ischémique indépendante sans être la cause principale de la faiblesse cardiaque ; observée chez 9,3 % des patients coronariens adressés en IRM dans Bawaskar 2024 (16,9 % en incluant la double pathologie). |
| **Coroscanner (CCTA)** | Scanner 3D non invasif des artères coronaires avec injection de produit de contraste iodé ; utile surtout pour exclure une coronaropathie obstructive en cas de probabilité faible à modérée (ESC 2026 IIa C), limité par de fortes calcifications ou une FA rapide irrégulière. |
| **Créatinine / DFGe (eGFR)** | Marqueurs sanguins de la fonction rénale (DFGe en mL/min/1,73 m²). Une baisse initiale modérée du DFGe est souvent attendue lors de l'initiation ou de la titration des traitements de fond. |
| **CRT / CRT-P / CRT-D** | Thérapie de resynchronisation cardiaque : stimulateur spécialisé aidant des ventricules désynchronisés à se contracter ensemble ; le CRT-D intègre en plus un défibrillateur (DAI). |
| **CST (coefficient de saturation de la transferrine / TSAT)** | Pourcentage de saturation du transporteur du fer sanguin ; un **CST < 20 %** identifie une vraie carence circulante où se concentre la baisse des hospitalisations sous fer IV, tandis que les iSGLT2 et l'ARNI peuvent abaisser la ferritine < 100 µg/L avec un CST ≥ 20 %. |
| **CTO (occlusion coronaire chronique)** | Artère coronaire totalement obstruée depuis au moins 3 mois, le territoire en aval étant habituellement irrigué par des collatérales. |`,
    },
    {
      headingFr: 'D – H',
      bodyMarkdownFr: `| Terme | Définition en clair |
|---|---|
| **DAI (défibrillateur automatique implantable / ICD)** | Dispositif implanté protégeant contre la mort subite liée aux troubles du rythme ventriculaires graves ; n'améliore pas les symptômes quotidiens. |
| **DAI sous-cutané (S-DAI / S-ICD)** | Défibrillateur placé sous la peau sans sonde intraveineuse. Dans PRAETORIAN, moins de complications de sonde, mais pas de stimulation (pacemaker), pas d'ATP ni de CRT. |
| **DANISH** | Essai de 2016 sur le DAI préventif chez 1 116 patients en ICFER **non ischémique** (FEVG ≤ 35 %) : mort subite divisée par deux (HR 0,50) sans baisse significative de la mortalité globale (HR 0,87 ; HR 0,96 à 13 ans). Principale raison pour laquelle l'ESC classe le DAI non ischémique un cran plus bas (IIa) que l'ischémique (I). |
| **Décompensation cardiaque** | Aggravation nécessitant une intensification ou un traitement de secours (par exemple hausse ou ajout de diurétique), souvent à l'hôpital ; peut s'installer sur des jours/semaines ou brutalement (Définition universelle 2026). À comparer à *l'aggravation de l'insuffisance cardiaque*. |
| **Décongestionnants oraux (pseudoéphédrine, phényléphrine)** | Vasoconstricteurs oraux contre le rhume à éviter dans l'ICFER ischémique ; la France a placé toute la pseudoéphédrine orale sur ordonnance (` + '`Liste I`' + `) le 11 décembre 2024 pour risques d'infarctus, d'AVC et de complications vasculaires cérébrales (PRES/RCVS), et plusieurs spécialités contiennent aussi de l'ibuprofène. |
| **Définition universelle de l'insuffisance cardiaque (2026)** | Consensus conjoint AHA/ACC/ESC/WHF sur la terminologie (2021 ; 2e édition juin 2026). Ce n'est pas une recommandation thérapeutique : elle ne fixe pas de seuils numériques de FEVG ni de peptides natriurétiques et recense 18 groupes étiologiques, avec la cardiomyopathie ischémique en premier. |
| **Digoxine / digitoxine (digitaliques)** | Option additionnelle si symptômes persistants à FEVG ≤ 40 % (ESC 2026, Classe IIa, relevée) ou contrôle de fréquence dans la FA. Un taux sanguin bas est essentiel ; signes de surdosage : nausées, confusion, vision jaunâtre. |
| **Directives anticipées** | Document écrit opposable en France (*Loi Claeys-Leonetti*, validité illimitée, déposables dans *Mon espace santé*) exprimant vos volontés sur la poursuite, limitation ou arrêt des traitements (y compris la désactivation explicite des chocs d'un DAI ; ne permet pas de demander une aide active à mourir). |
| **Diurétique (de l'anse)** | Médicament éliminant l'excès de sel et d'eau (furosémide / *Lasilix*, bumétanide / *Burinex*) pour soulager la congestion (essoufflement, œdèmes). |
| **Double pathologie (dual pathology)** | Coexistence d'une maladie coronaire et d'une seconde cause d'affaiblissement myocardique (par exemple cicatrice d'infarctus associée à une fibrose médio-pariétale à l'IRM, distincte de la *coronaropathie fortuite*) ; ensemble retrouvées chez ~1 patient sur 6 dans Bawaskar 2024. |
| **ECG monocanal (single-lead ECG)** | Tracé cardiaque de 30 secondes enregistré par une montre connectée ou une carte (équivalent à une seule dérivation, type D1). Peut repérer une fibrillation atriale ; non validé pour diagnostiquer un infarctus ou une TV. |
| **Échocardiographie de contraste** | ETT avec injection d'un produit de contraste soulignant la paroi interne du VG ; détecte davantage de thrombus VG qu'une ETT standard. |
| **Échocardiographie de stress sous dobutamine (réserve de flux)** | ETT sous perfusion de dobutamine distinguant dans le rétrécissement aortique à bas débit une sténose vraiment serrée d'une sténose pseudo-sévère ; la réserve de flux correspond à une hausse ≥ 20 % du volume d'éjection. |
| **Échocardiographie transthoracique (ETT)** | Échographie du cœur à travers le thorax évaluant contraction (FEVG), relaxation, cavités et valves. Ses chiffres de FEVG ne doivent pas être fusionnés avec ceux de l'IRM cardiaque. |
| **Effet nocebo** | Apparition d'un effet indésirable largement liée au fait de s'y attendre ; dans un essai classique sur bêtabloquant, la dysfonction érectile est passée de 3,1 % en aveugle à 31,2 % chez les patients prévenus à l'avance. |
| **EFX (CPET) / pic de VO2 / pente VE/VCO2 / RER / classe de Weber** | Épreuve d'effort cardiorespiratoire avec mesure des échanges gazeux : mesure le **pic de VO2** (classes de Weber A–D ; ` + '`≤ 12 mL/kg/min`' + ` sous bêtabloquant ou ` + '`≤ 14`' + ` hors bêtabloquant contribue au bilan d'IC avancée), la **pente VE/VCO2** (efficacité ventilatoire ; ` + '`> 35`' + ` = haut risque même sur effort sous-maximal) et le **RER** (` + '`≥ 1,05–1,10`' + ` confirme un effort maximal). |
| **EMSP / LISP / USP / MASP** | Structures françaises de soins palliatifs : *équipe mobile de soins palliatifs* (avis transversal à l'hôpital/domicile), *lits identifiés* (en service de cardiologie/médecine), *unité de soins palliatifs* (service dédié) et *maisons d'accompagnement et de soins palliatifs* (unités intermédiaires créées par la loi 2026-404). |
| **EPOF** | Moyen mnémotechnique français des 4 signes d'alerte de décompensation cardiaque : **E**ssoufflement, **P**rise de poids rapide, **Œ**dèmes des jambes/chevilles, **F**atigue inhabituelle. |
| **ESV (extrasystoles ventriculaires / PVC) / charge en ESV / PVC-CM** | Battements prématurés issus des ventricules. Habituellement bénins en faible nombre, mais une **charge quotidienne ≥ 10 %** (surtout > 20–24 %, souvent manquée sur un seul Holter 24 h) peut provoquer ou aggraver une dysfonction VG ou perturber la stimulation CRT. |
| **Ézétimibe (*Ezetrol*)** | Comprimé réduisant le cholestérol LDL en limitant son absorption intestinale ; premier ajout habituel à une statine, souvent en comprimé combiné. |
| **FEVG (fraction d'éjection du ventricule gauche / LVEF)** | Pourcentage du volume sanguin contenu dans le ventricule gauche éjecté à chaque battement. |
| **Fibrillation atriale (FA / AF)** | Trouble fréquent du rythme cardiaque où les oreillettes battent de manière irrégulière ; associée à l'insuffisance cardiaque, elle augmente le risque d'AVC. |
| **Fibrose médio-pariétale** | Bande de cicatrice dans la couche moyenne de la paroi cardiaque à l'IRM, caractéristique d'une cardiomyopathie non ischémique plutôt que d'un infarctus ; liée à un surrisque de mort subite. |
| **Finérénone (*Kerendia*)** | ARM non stéroïdien démontré dans l'IC à FEVG ≥ 40 % et dans le diabète de type 2 avec maladie rénale chronique ; non encore prouvé sur critères cliniques sous 40 % (essai FINALITY-HF en cours). |
| **Forfait journalier / FPU / franchises médicales** | Frais français **non** couverts intégralement par l'ALD 100 % (vérifiés nov. 2026) : 23 €/jour d'hospitalisation, forfait patient urgences de 23 € (9,96 € en ALD ; 0 € en pension d'invalidité), et participations forfaitaires (2 €) + franchises médicales (1 €/4 €) non remboursables par les mutuelles (chacune plafonnée à 70 €/an, soit 140 € cumulés depuis octobre 2026). |
| **Gilet défibrillateur portable (LifeVest)** | Gilet porté sous les vêtements jour et nuit, détectant et choquant un trouble du rythme grave pendant les premiers mois avant décision de DAI (ESC 2026, Classe IIb). Conduite automobile interdite en France pendant son indication. |
| **GLS (strain longitudinal global)** | Mesure échocardiographique (*speckle tracking*) du raccourcissement longitudinal des fibres internes (normal autour de -18 % à -22 % ; plus proche de 0 = plus faible). Détecte une dysfonction subtile et le risque de rechute en HFimpEF plus tôt que la FEVG, mais varie jusqu'à 3,7 points entre constructeurs : le suivi doit rester sur le même appareil. |
| **Groupe 1 / Groupe 2 (permis de conduire)** | Catégories européennes : groupe 1 (léger) = voitures et motos ; groupe 2 (lourd) = poids lourds et transport en commun. |
| **Gynécomastie** | Gonflement ou sensibilité mammaire chez l'homme. Effet indésirable connu de la spironolactone (environ 1 homme sur 10 dans RALES) ; beaucoup plus rare avec l'éplérénone, plus sélective sur le récepteur minéralocorticoïde. |
| **HAD (hospitalisation à domicile)** | Soins de statut hospitalier délivrés au domicile en France (astreinte infirmière 24 h/24, matériel, pharmacie), pris en charge à **100 % sous ALD** et exonérés du forfait journalier hospitalier. |
| **Heart Team (équipe médico-chirurgicale)** | Réunion multidisciplinaire statuant sur revascularisation ou valves ; l'ESC 2026 demande qu'elle comprenne un spécialiste de l'insuffisance cardiaque. |
| **Hepcidine / ferroportine** | L'hepcidine est une hormone souvent élevée dans l'IC qui ferme la ferroportine (porte de sortie intestinale du fer), expliquant la faible efficacité du fer oral par rapport au fer intraveineux. |
| **HFimpEF (insuffisance cardiaque à FEVG améliorée)** | Hausse de la FEVG d'au moins 10 points aboutissant au-dessus de 40 % (ESC 2026). La Définition universelle 2026 reprend cette description en précisant que la FEVG seule ne suffit pas à la définir. Moins fréquente en cause ischémique : dans deux cohortes récentes, 26–48 % des patients ischémiques nouvellement diagnostiqués contre 51–70 % des non ischémiques ont atteint les seuils usuels. |
| **HFmrEF** | Ancienne catégorie « FEVG modérément réduite » (41–49 %), **supprimée par l'ESC 2026** et non utilisée dans la Définition universelle 2026 ; encore présente dans les recommandations US/NICE et d'anciens documents. |
| **HFpEF (insuffisance cardiaque à FEVG préservée)** | Insuffisance cardiaque avec FEVG ≥ 50 % associée à des anomalies structurelles ou de remplissage. |
| **HIIT (entraînement fractionné à haute intensité)** | Alternance d'intervalles d'effort soutenu et de récupération. Dans SMARTEX-HF, le HIIT n'a pas surpassé l'endurance continue modérée sur le remodelage VG ni sur la capacité d'effort. |
| **Holter / patch ECG / moniteur cardiaque implantable (ILR)** | Enregistreurs rythmiques ambulatoires adaptés à la fréquence des symptômes : Holter filaire 24–48 h (symptômes quotidiens, 1er décompte d'ESV), patch sans fil 7–14 jours (FA ou ESV intermittentes) et moniteur sous-cutané ILR ~3 ans (syncope inexpliquée ; inutile en présence d'un DAI/CRT). |
| **Hyperkaliémie** | Taux élevé de potassium dans le sang, favorisé par IEC, ARA2, ARNI et ARM, justifiant des contrôles biologiques réguliers. Sous ARM, un potassium > 5,5 mmol/L était 1,4 à 3 fois plus fréquent que sous placebo ; les recommandations US 2022 demandent d'arrêter l'ARM si le potassium ne peut rester < 5,5. |
| **Hypophosphatémie (fer intraveineux)** | Baisse du phosphate sanguin fréquente et transitoire sous **carboxymaltose ferrique (FCM)** (51,9 % modérée à sévère à J21 dans HEART-FID, contre ~4–8 % sous **dérisomaltose ferrique, FDI**), avec de rares ostéomalacies/fractures après cures répétées de FCM. |`,
    },
    {
      headingFr: 'I – O',
      bodyMarkdownFr: `| Terme | Définition en clair |
|---|---|
| **IAH (index d'apnées-hypopnées / AHI)** | Nombre de pauses ou diminutions respiratoires par heure de sommeil : modéré à partir de 15/h, sévère au-dessus de 30/h. |
| **ICFER (insuffisance cardiaque à FEVG réduite / HFrEF)** | Définition ESC 2026 : FEVG **< 50 %** avec symptômes ou signes. Recommandations américaines (2022), NICE et anciennes ESC : FEVG **≤ 40 %**. La Définition universelle 2026 ne fixe délibérément aucun seuil chiffré. |
| **IEC / ARA2 / ARNI** | Pilier bloqueur du système rénine-angiotensine : IEC ou ARNI (sacubitril/valsartan — *Entresto*, ESC 2026 Classe I A ; relais vers ARNI si symptômes persistants Classe I B1 ; les recommandations US 2022 placent l'ARNI en 1re intention) ; ARA2 en alternative si intolérance. |
| **Inclisiran (*Leqvio*)** | Injection semestrielle abaissant le LDL d'environ 50 % ; les essais d'événements cliniques n'étaient pas encore publiés fin 2026. |
| **Infarctus du myocarde (IDM / MI)** | Nécrose d'une zone du muscle cardiaque due à l'occlusion brutale d'une artère coronaire. |
| **Inhibiteur de PCSK9 (anti-PCSK9)** | Traitement injectable (évolocumab / *Repatha*, alirocumab / *Praluent*) abaissant fortement le LDL (ESC Classe I si statine + ézétimibe insuffisants). |
| **Inhibiteurs de la PDE-5 (sildénafil, tadalafil)** | Comprimés de la dysfonction érectile (*Viagra*, *Cialis*). Strictement contre-indiqués avec dérivés nitrés, nicorandil et riociguat (déconseillés avec vériciguat) ; dans l'UE, *Cialis* contre-indique l'IC NYHA ≥ II dans les 6 derniers mois tandis que *Viagra* ne contre-indique que l'IC sévère (prudence avec *Entresto*). |
| **Insuffisance cardiaque « stable »** | Expression courante qualifiée d'impropre par la Définition universelle 2026, car un risque résiduel d'aggravation, d'hospitalisation ou de mort subite persiste toujours. |
| **Insuffisance mitrale secondaire** | Fuite de la valve mitrale provoquée par la dilatation du VG écartant les feuillets valvulaires. |
| **IPA (infirmier en pratique avancée)** | Infirmier diplômé d'État de niveau master en France assurant le suivi des cardiopathies et coronaropathies stabilisées : peut prescrire des bilans, renouveler/adapter les ordonnances et prescrire une première APA, avec accès direct en structures coordonnées depuis janvier 2025. |
| **IRM cardiaque (CMR)** | Imagerie précise des volumes, de la FEVG et des cicatrices (LGE). Mesure en moyenne une FEVG inférieure d'environ 5,5 points à l'ETT dans la dysfonction ischémique. |
| **Ischémique** | Causé par un manque d'apport sanguin (maladie coronaire, infarctus du myocarde). |
| **iSGLT2 (inhibiteur du SGLT2 / gliflozine)** | Dapagliflozine (*Forxiga*), empagliflozine (*Jardiance*) : pilier du traitement de fond (ESC 2026 Classe I A quelle que soit la FEVG ; US 2022 COR 1 A dans l'ICFER), même bénéfice avec ou sans diabète ; dose fixe de 10 mg une fois par jour. |
| **Ivabradine (*Procoralan*)** | Comprimé ralentissant le nœud sinusal. Option additionnelle pour FEVG ≤ 35 % en rythme sinusal avec FC > 70 bpm (≥ 75 bpm dans l'AMM UE) malgré bêtabloquant maximal (ESC 2026, Classe IIa). Peut provoquer des éclairs lumineux brefs (phosphènes). |
| **KCCQ (Kansas City Cardiomyopathy Questionnaire)** | Questionnaire standardisé coté de 0 à 100 mesurant les symptômes et la qualité de vie dans l'IC (plus élevé = meilleur) ; détecte les changements d'état plus de deux fois plus sensiblement que la classe NYHA. |
| **Lésion myocardique chronique (troponine ultrasensible)** | Élévation légère et persistante de la troponine cardiaque ultrasensible (> 99e percentile, stable sur dosages répétés sans cinétique aiguë ni signe d'ischémie), présente chez plus de la moitié des patients ICFER stables (médiane hs-cTnT ~18 ng/L) et distincte d'un infarctus aigu. |
| **LGE (rehaussement tardif au gadolinium)** | Sur l'IRM cardiaque après contraste, la cicatrice fibreuse apparaît brillante ; le muscle sans LGE est considéré comme viable. La part de l'épaisseur de la paroi qui apparaît brillante définit la *transmuralité de la cicatrice*. |
| **Lp(a) — Lipoprotéine(a)** | Particule lipidique héréditaire liée au risque d'infarctus ; l'ESC recommande un dosage unique dans la vie. Aucun médicament l'abaissant n'a encore prouvé de réduction d'événements cliniques. |
| **MADIT-II** | Essai de 2002 sur le DAI préventif chez 1 232 patients après infarctus (> 1 mois) avec FEVG ≤ 30 % (100 % ischémiques) : mortalité 14,2 % vs 19,8 % (HR 0,69), maintenue à 8 ans (HR 0,66). Arrêté précocement ; antérieur aux ARNI et iSGLT2 ; socle de la règle US Classe 1 en NYHA I avec FEVG ≤ 30 %. |
| **MAGGIC (score MAGGIC)** | Score de risque dans l'IC (2013) construit sur 39 372 patients (30 études) à partir de 13 paramètres courants (âge, FEVG, NYHA, créatinine, diabète, tension, IMC...) pour estimer le risque de décès à 1 et 3 ans ; n'intègre ni l'étiologie, ni le NT-proBNP, ni les traitements modernes (estimation de groupe, non prédiction individuelle). |
| **MET (équivalent métabolique)** | Unité d'intensité d'effort physique (1 MET = dépense d'oxygène au repos) ; monter deux étages d'escaliers ou avoir un rapport sexuel avec un partenaire habituel représente environ 3 à 5 METs. |
| **MIDCAB** | Pontage mini-invasif : greffe de l'artère mammaire interne gauche sur l'IVA par une petite incision thoracique latérale, sans ouvrir le sternum. |
| **MINS (lésion myocardique après chirurgie non cardiaque)** | Élévation post-opératoire de troponine traduisant une souffrance myocardique péri-opératoire, souvent silencieuse sans douleur thoracique ; ESC 2022 et AHA/ACC 2024 recourent aux biomarqueurs péri-opératoires chez les patients à haut risque. |
| **Mon espace santé (DMP)** | Carnet de santé numérique public français (*Dossier Médical Partagé*, profil médical, *directives anticipées*), consultable en urgence par les hôpitaux et le SAMU 15 sauf opposition ; le patient ne peut initier une nouvelle conversation de messagerie sécurisée avec un médecin avant que celui-ci ne l'ouvre. |
| **Mort subite cardiaque (MSC / SCD)** | Décès inattendu d'origine cardiaque, le plus souvent par trouble du rythme ventriculaire grave. |
| **Myocarde hibernant / viabilité** | Hibernation : muscle recevant chroniquement trop peu de sang qui reste vivant en réduisant sa contraction. Viabilité : muscle affaibli mais vivant (hibernant ou sidéré, par opposition à la cicatrice) pouvant récupérer sa fonction si le flux sanguin revient. Dans STICH (pontage) et REVIVED-BCIS2 (stents), la viabilité n'a pas modifié le bénéfice de la revascularisation, et l'ESC 2026 note l'absence de preuve pour sélectionner les patients par la viabilité. |
| **Myocarde sidéré (stunned myocardium)** | Muscle cardiaque dont la contraction reste temporairement affaiblie après un épisode bref et non mortel d'ischémie, même après le retour du flux sanguin ; forme un continuum avec l'hibernation et compte comme muscle viable. |
| **NDLVC (cardiomyopathie ventriculaire gauche non dilatée)** | Catégorie ESC 2023 définie par une cicatrice non ischémique ou un remplacement graisseux du VG sans dilatation, ou par une hypokinésie globale isolée (FEVG < 50 %) sans cicatrice, non expliqués uniquement par les coronaires ou la surcharge. |
| **Nicorandil** | Comprimé anti-angineux de 2e ligne (génériques d'*Adancor*/*Ikorel*). Peut provoquer des ulcérations buccales, digestives, cutanées ou oculaires même tardives ; service médical rendu jugé insuffisant par la HAS en 2026. |
| **Niveau de preuve ESC 2026 (A, B1, B2, C)** | Nouvelle grille thérapeutique ESC 2026 : **A** = concluant (≥ 2 ECR puissants) ; **B1** = randomisé suggestif (≥ 1 ECR puissant ou méta-analyse) ; **B2** = études non randomisées contrôlées ou méta-analyse de petits ECR ; **C** = préliminaire/consensus. Les tableaux diagnostiques gardent A/B/C sans B1/B2. |
| **NT-proBNP / BNP** | Peptides natriurétiques sanguins d'aide au diagnostic (exclusion ambulatoire ESC : NT-proBNP < 125 pg/mL, BNP < 35 pg/mL). Le sacubitril/valsartan peut augmenter le BNP mais pas le NT-proBNP ; le guidage systématique du traitement par NT-proBNP n'est pas soutenu par l'ESC 2026. |
| **NYHA (classes I à IV)** | Échelle des symptômes : **I** = aucune limitation ; **II** = gêne modérée à l'effort habituel ; **III** = gêne marquée pour des efforts faibles ; **IV** = symptômes possibles au repos. |
| **OPTAM / Secteur 1 et Secteur 2** | Secteurs tarifaires en France : Secteur 1 applique les tarifs Sécurité sociale ; Secteur 2 autorise des dépassements d'honoraires (non couverts par l'ALD), plafonnés et mieux remboursés par les mutuelles si le médecin adhère à l'**OPTAM** (hors OPTAM, la base de remboursement Sécurité sociale est réduite). |
| **Orage rythmique (orage de TV / electrical storm)** | Au moins trois épisodes distincts de TV/FV soutenue en 24 heures (espacés d'au moins 5 minutes) nécessitant ATP ou choc de DAI, ou TV incessante ; urgence vitale (appeler le 15 / 112) multipliant la mortalité par ~2,5. |`,
    },
    {
      headingFr: 'P – Z',
      bodyMarkdownFr: `| Terme | Définition en clair |
|---|---|
| **PCH (prestation de compensation du handicap)** | Allocation départementale MDPH finançant aides humaines, techniques ou aménagement du logement pour des difficultés sévères du quotidien ; demande généralement avant 60 ans, sans plafond de revenus d'éligibilité. |
| **Personne de confiance** | Adulte unique désigné par écrit et cosignataire en France (*CSP L.1111-6*, déposable dans *Mon espace santé*) qui peut accompagner en consultation et dont le témoignage sur vos volontés prévaut sur tout autre témoignage familial si vous ne pouvez vous exprimer ; distincte de la *personne à prévenir*. |
| **Plan « jours de maladie » (sick-day rules / SADMANS)** | Pause temporaire de certains médicaments lors d'une maladie aiguë déshydratante ; les cartes génériques d'auto-arrêt manquent de preuve dans l'ICFER et comportent des risques élevés d'erreurs et de non-reprise, d'où la préférence pour un plan écrit personnalisé distinguant iSGLT2 et SRAA/ARM. |
| **Pontage aorto-coronarien (CABG)** | Chirurgie créant un nouveau conduit vasculaire pour contourner une ou plusieurs artères coronaires rétrécies ou obstruées. |
| **PPA (plan personnalisé d'accompagnement)** | Dispositif français précoce de coordination des soins d'accompagnement créé par la loi 2026-404 (mai 2026) pour anticiper besoins médicaux, psychologiques, sociaux, HAD et directives anticipées (modèle national HAS attendu fin 2026). |
| **PPC (pression positive continue / CPAP)** | Appareil à masque maintenant les voies aériennes ouvertes la nuit ; traitement de référence du SAOS, pris en charge en France sous condition d'observance. |
| **PRADO insuffisance cardiaque** | Programme d'accompagnement de retour à domicile de l'Assurance Maladie après une hospitalisation pour insuffisance cardiaque. |
| **Prévention primaire vs secondaire (DAI)** | Primaire : DAI posé avant tout trouble du rythme grave (recommandé dans l'ICFER ischémique avec FEVG ≤ 35 %, NYHA II–III, ≥ 3 mois de traitement optimal et > 40 jours post-infarctus : ESC 2026 I B1, US 2022 1 A ; cause non ischémique : ESC 2026 IIa B1). Secondaire : DAI posé après arrêt cardiaque ou arythmie ventriculaire grave. |
| **Prévention secondaire coronaire** | Mesures évitant un nouvel infarctus ou AVC en cas de coronaropathie : baisse du LDL, antiagrégant plaquettaire, contrôle tensionnel, parfois colchicine. |
| **Procédure factice (sham)** | Intervention simulée dans le groupe témoin (ex. cathéter sans injection active) permettant un véritable double aveugle ; évaluation la plus rigoureuse des thérapies cellulaires injectées. |
| **Pseudo-anévrisme (faux anévrisme VG)** | Rupture contenue de la paroi cardiaque retenue uniquement par le péricarde ; contrairement au vrai anévrisme, expose à une rupture brutale et relève généralement de la chirurgie. |
| **Ranolazine (*Ranexa*)** | Comprimé anti-angineux additionnel sans effet sur la tension ni sur la fréquence cardiaque. Contre-indiqué en insuffisance rénale ou hépatique sévère et avec le sotalol ; augmente le taux de digoxine. |
| **Récupération (insuffisance cardiaque)** | Définition universelle 2026 : maintien durable d'une structure, d'une fonction, de biomarqueurs et de symptômes normaux sur un suivi prolongé ; critère plus strict que la rémission. |
| **Rémission** | ESC 2026 : terme employé pour une FEVG améliorée (traitement à poursuivre). Définition universelle 2026 : sens plus strict (FEVG revenue à la normale, NYHA I et biomarqueurs stables, risque résiduel de rechute ; une hausse moindre est appelée « amélioration »). |
| **Remodelage / remodelage inverse** | Remodelage : dilatation et modification de forme du ventricule gauche après une lésion telle qu'un infarctus. Remodelage inverse : rétrécissement du ventricule et remontée de la FEVG sous traitement (moins fréquent en cause ischémique que non ischémique, le plus souvent au cours de la 1re année). |
| **Résistance aux diurétiques** | Échec de décongestion (avec faible natriurèse) malgré des doses élevées ou maximales de diurétique de l'anse (œdème digestif, rebond sodé, adaptation tubulaire) ; l'ESC 2026 en fait un signe d'alerte pour avis en centre expert IC avancée. |
| **Rétrécissement aortique (sténose aortique) : léger / modéré / sévère** | Rétrécissement de la valve aortique (ASE/EACVI) : léger = surface > 1,5 cm², gradient < 20 mmHg ; modéré = 1,0–1,5 cm², 20–40 mmHg ; sévère = < 1,0 cm², ≥ 40 mmHg. |
| **Rétrécissement aortique bas débit, bas gradient** | Sténose sévère à gradient < 40 mmHg car le VG affaibli éjecte peu de sang (forme classique : surface ≤ 1,0 cm², gradient < 40 mmHg, FEVG < 50 %, SVi ≤ 35 mL/m²). |
| **Rétrécissement aortique pseudo-sévère** | Valve modérément rétrécie paraissant sévère faute de force d'ouverture du VG ; relève d'abord du traitement médical de l'IC. |
| **RQTH** | Reconnaissance de la qualité de travailleur handicapé (MDPH), ouvrant droit aux aménagements de poste ; depuis janvier 2024 (*Loi plein emploi*), les titulaires d'une pension d'invalidité CPAM ou d'une CMI *Invalidité* bénéficient automatiquement des droits emploi de la RQTH. |
| **SAOS / SACS (apnée obstructive / centrale du sommeil)** | SAOS : fermeture des voies aériennes malgré l'effort respiratoire. SACS : pause temporaire de la commande cérébrale (souvent respiration de Cheyne-Stokes). |
| **Sarcoïdose cardiaque et TEP-18F-FDG** | Maladie inflammatoire granulomateuse (jusqu'à 25 % isolée au cœur) causant blocs de conduction, arythmies ventriculaires ou anomalies mimant un infarctus ; la **TEP-18F-FDG** (ESC 2023 IIa C, après régime strict pauvre en glucides/riche en lipides + jeûne) détecte l'inflammation active en complément de l'IRM. |
| **SCD-HeFT** | Essai de 2005 chez 2 521 patients (NYHA II–III, FEVG ≤ 35 %, 52 % ischémiques) : un DAI en mode choc seul a réduit la mortalité face au placebo (22 % vs 29 %, HR 0,77), contrairement à l'amiodarone (HR 1,06) ; à 11 ans, bénéfice maintenu dans le sous-groupe ischémique (HR 0,81) mais non net dans le non ischémique (HR 0,97). |
| **Scintigraphie osseuse (99mTc-DPD / PYP / HMDP ; grade de Perugini)** | Examen nucléaire diagnostiquant l'amylose cardiaque ATTR sans biopsie (ESC 2023 Classe I B). Une fixation myocardique de grade 2–3 ne confirme l'ATTR **que si** les trois tests de protéine monoclonale (SPIE, UPIE, chaînes légères libres) sont négatifs ; un infarctus récent (< 4 sem.) peut donner un faux positif. |
| **SCORE2-HF** | Modèle européen 2026 estimant le risque à 10 ou 30 ans de *développer* une insuffisance cardiaque chez l'adulte de plus de 40 ans sans maladie cardiovasculaire. Score de prévention qui ne s'applique pas aux personnes ayant déjà une insuffisance cardiaque. |
| **Seattle Heart Failure Model (SHFM)** | Calculateur de risque (2006) estimant la survie à 1–3 ans dans l'IC à partir de données cliniques, biologiques, médicamenteuses et de dispositifs (incluant l'étiologie ischémique) ; construit avant la généralisation des bêtabloquants et avant les ARNI/iSGLT2, avec tendance à sous-estimer le risque dans certaines cohortes récentes. |
| **SMR cardiovasculaire (réadaptation cardiaque)** | Service de soins médicaux et de réadaptation cardiovasculaire (hospitalisation ou hôpital de jour) délivrant réentraînement à l'effort encadré et éducation thérapeutique. |
| **Soins palliatifs / soins de support** | Accompagnement global des symptômes, du vécu émotionnel et des choix de soins en parallèle du traitement cardiologique complet, à tout stade (HFA ; élargi aux *soins d'accompagnement* précoces par la loi française 2026-404). |
| **SPCMD (sédation profonde et continue maintenue jusqu'au décès)** | Sédation profonde jusqu'au décès encadrée en France par la *Loi Claeys-Leonetti* (procédure collégiale obligatoire, antalgie et arrêt des hydratations/nutritions artificielles dans trois situations strictes de fin de vie ou d'arrêt de traitements ; distincte de l'euthanasie). |
| **SpO2 (saturation pulsée en oxygène)** | Pourcentage d'oxygène mesuré par lumière à travers la peau (oxymètre). Les mesures des montres connectées restent approximatives et souvent ininterprétables. |
| **Stades A / B / C / D de l'insuffisance cardiaque** | **A** : à risque ; **B** : pré-IC (anomalie structurelle telle qu'une FEVG basse sans **jamais** de symptômes) ; **C** : symptômes actuels ou passés ; **D** : avancée. Les stades ne reculent jamais (pas de retour de C vers B), mais la Définition universelle 2026 décrit amélioration, rémission, récupération et un « stade 0 ». |
| **Statine** | Hypolipémiant de 1re intention en prévention secondaire coronaire (rosuvastatine, atorvastatine...). Débuter une statine *pour l'IC seule* n'a pas apporté de bénéfice dans CORONA et GISSI-HF. |
| **STRIDE BP** | Registre international indépendant (stridebp.org) listant les tensiomètres cliniquement validés ; recommandé par l'ESH et la SFHTA française. |
| **Substituts nicotiniques (NRT)** | Patchs et formes rapides (gommes, pastilles, sprays) ; remboursés à 65 % en France sur ordonnance sans plafond annuel (jusqu'à 100 % possible en ALD 5/13), sans excès d'événements CV dans EAGLES. |
| **Tabac info service (39 89)** | Service public français gratuit d'accompagnement au sevrage tabagique par téléphone, web et application avec des tabacologues. |
| **TAVI** | Remplacement valvulaire aortique par cathéter (voie fémorale) ; l'ESC/EACTS 2025 recommande le TAVI dès ≥ 70 ans (Classe I A) et la chirurgie (SAVR) avant 70 ans à bas risque (I B), avec décision en Heart Team tenant compte des coronaires et de l'accès coronaire à vie. |
| **TCC (thérapie cognitivo-comportementale / CBT)** | Psychothérapie structurée ayant démontré une amélioration de la dépression dans un essai dédié à l'IC. |
| **TEER (M-TEER / MitraClip)** | Réparation percutanée bord à bord de la valve mitrale par clip via cathéter. |
| **Télésurveillance de l'insuffisance cardiaque** | Transmission à domicile du poids et des symptômes à une équipe dédiée (non surveillée 24 h/24 en temps réel). ESC 2026 : Classe IIb ; remboursée en France depuis 2023. |
| **Temps partiel thérapeutique (mi-temps thérapeutique)** | Reprise progressive du travail prescrite par le médecin avec complément d'indemnités journalières ; ne requiert plus d'arrêt à temps plein préalable depuis 2019. |
| **Thérapie cellulaire (cellules souches) / MTI (ATMP)** | Traitement par cellules vivantes. Dans l'UE, les médicaments de thérapie innovante (MTI / ATMP) relèvent d'une autorisation centralisée ; en juin 2026, aucun n'est autorisé pour le cœur. Les injections payantes hors essai enregistré ne sont pas prouvées. |
| **Thérapie Waon** | Thérapie thermique sèche japonaise encadrée par infrarouges à 60 °C (15 min de chaleur + 30 min sous couverture), distincte des saunas finlandais à 80–100 °C ; son plus grand essai IC (WAON-CHF) a manqué son critère principal BNP. |
| **Thrombus intraventriculaire gauche (thrombus VG)** | Caillot sanguin fixé sur la paroi interne du VG, le plus souvent sur une zone peu mobile (apex après infarctus antérieur). |
| **Thrombus mobile / saillant (protruding)** | Caillot cardiaque bougeant avec le flux sanguin ou faisant saillie dans la cavité ; associé aux embolies dans d'anciennes études ETT, non confirmé comme facteur indépendant dans la grande cohorte moderne RED VELVT. |
| **Thrombus mural (plat / laminé)** | Caillot étalé à plat contre la paroi. Non démontré inoffensif : sa forme peut évoluer et la déclaration AHA 2022 suggère de traiter un caillot mural récent comme un caillot mobile. |
| **Tolérance (échappement) aux dérivés nitrés** | Perte d'efficacité d'un dérivé nitré longue durée en administration continue ; prévenue par une fenêtre libre quotidienne de 8 à 12 heures (ex. retrait du patch la nuit). |
| **Traitement de fond (les 4 piliers / FMT / GDMT)** | Socle thérapeutique associant quatre classes médicamenteuses (IEC ou ARNI, bêtabloquant, ARM, iSGLT2) dans l'ICFER. |
| **Transmuralité de la cicatrice / « règle des 50 % »** | Part de l'épaisseur de la paroi cardiaque occupée par la cicatrice à l'IRM LGE (0 %, 1–25 %, 26–50 %, 51–75 %, 76–100 %). Dans Kim 2000, 78 % des segments sans cicatrice récupéraient contre 2 % si > 75 % d'épaisseur (« règle des 50 % ») ; les essais n'ont toutefois pas prouvé que choisir une revascularisation sur la viabilité améliore le pronostic. |
| **Trimétazidine (*Vastarel*)** | Comprimé anti-angineux à visée métabolique. Contre-indiqué en cas de maladie de Parkinson, troubles moteurs ou insuffisance rénale sévère ; non remboursé en France. |
| **Trinitrine (GTN / *Natispray*)** | Dérivé nitré d'action rapide en spray ou comprimé sublingual pour les crises d'angor. Abaisse la tension artérielle ; strictement contre-indiqué avec les inhibiteurs de la PDE-5. |
| **TV (tachycardie ventriculaire / VT)** | Rythme rapide et organisé naissant dans les ventricules (souvent en réentrée autour d'une cicatrice d'infarctus) ; une **TV soutenue** dure > 30 secondes ou nécessite une interruption (ATP, choc, médicament ou ablation). |
| **TVNS (tachycardie ventriculaire non soutenue / NSVT)** | Salve d'au moins trois battements ventriculaires consécutifs à > 100–120 bpm s'arrêtant spontanément en moins de 30 secondes ; ne se traite pas par antiarythmiques préventifs (hors bêtabloquants) mais intervient dans l'évaluation rythmologique à FEVG ≤ 40 %. |
| **Varénicline (*Champix*)** | Médicament oral de sevrage tabagique le plus efficace en monothérapie (sans interaction CYP450 avec les médicaments cardiaques) ; revenue en pharmacie en France le 16 juin 2025, remboursée à 65 % en 2e intention (score Fagerström ≥ 7, incluant les maladies cardiovasculaires). |
| **Vériciguat (*Verquvo*)** | Stimulateur de la guanylate cyclase soluble (ESC 2026 Classe IIb) bénéfique après aggravation récente (VICTORIA) mais neutre sur le critère principal chez les patients stables (VICTOR). Contre-indiqué avec les inhibiteurs de la PDE-5. |
| **Volume d'éjection indexé (SVi)** | Volume sanguin éjecté par battement rapporté à la surface corporelle ; un SVi ≤ 35 mL/m² définit le « bas débit » dans le rétrécissement aortique. |
| **Volume télésystolique du VG (VTS / VTSi / LVESVi)** | Volume de sang restant dans le ventricule gauche après sa contraction (plus il est grand, plus le VG est dilaté). Prédisait le pronostic dans REVIVED-BCIS2 là où la FEVG ne le faisait pas. |
| **VTDi / VTSi (volumes VG indexés / LVEDVi / LVESVi)** | Volumes télédiastolique et télésystolique du VG indexés à la surface corporelle (mL/m²). Limite supérieure normale du VTDi à l'ETT : 74 mL/m² (hommes), 61 mL/m² (femmes) ; normes IRM plus élevées. Des volumes plus grands prédisent moins de récupération de la FEVG, et dans REVIVED-BCIS2 le VTSi prédisait le pronostic là où la FEVG seule ne le faisait pas. |`,
    },
  ],
  relatedArticleSlugs: [
    'comprendre-le-diagnostic',
    'essais-cliniques-cles',
    'essais-cliniques-en-cours-et-a-suivre',
    'cardiomyopathie-ischemique',
    'cellules-souches-et-therapies-regeneratives',
    'medicaments-glp1-et-incretines',
    'fer-oral-haute-biodisponibilite',
    'these-fer-iv-et-isglt2-quadritherapie',
    'fraction-dejection',
    'questions-equipe-cardiologie',
    'examens-et-chiffres',
    'efx-strain-troponine-et-imagerie-cardiaque',
    'viabilite-myocardique',
    'these-viabilite-et-survie-revascularisation',
    'confirmer-la-cause-dysfonction-vg',
    'dysfonction-vg-asymptomatique-stade-b',
    'iec-ara2-et-arni-sacubitril-valsartan',
    'betabloquants-insuffisance-cardiaque',
    'arm-steroidiens-spironolactone-eplerenone',
    'inhibiteurs-sglt2-insuffisance-cardiaque',
    'medicaments-effets-secondaires-suivi',
    'dispositifs-cardiaques-dai-crt',
    'these-benefice-dai-sous-quadritherapie',
    'escalade-et-resistance-aux-diuretiques',
    'angor-et-medicaments-anti-angineux',
    'arythmies-ventriculaires-et-antiarythmiques',
    'chirurgie-soins-dentaires-et-jours-de-maladie',
    'these-jours-de-maladie-sraa-vs-isglt2',
    'traitements-additionnels-nouveaux',
    'stenose-aortique-fevg-reduite',
    'cholesterol-et-prevention-secondaire',
    'occlusion-coronaire-chronique-cto',
    'thrombus-vg-et-anticoagulants',
    'anevrisme-ventricule-gauche',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'goutte-bpco-thyroide-et-autres-comorbidites',
    'vie-sexuelle-et-dysfonction-erectile-ic',
    'voyages-canicule-et-climat-ic',
    'tabac-et-alcool-insuffisance-cardiaque',
    'soins-de-support-et-anticipation',
    'musculation-vs-endurance-readaptation-cardiaque',
    'vivre-avec-insuffisance-cardiaque-en-france',
    'reseau-de-soins-et-aides-sociales-france',
  ],
  sources: [
    {
      label: 'Recommandations ESC (IC 2026 avec grille A/B1/B2/C, ESC/EACTS 2025, FA et SCC 2024, Cardiomyopathies 2023, Endocardite 2023, AV/MSC 2022), Guide patient ESC 2026 et Définition universelle 2026',
      detail: 'Catégories de FEVG, NDLVC, amylose/sarcoïdose, arythmies ventriculaires, résistance aux diurétiques, MINS, EFX/GLS/troponine chronique et antibioprophylaxie',
    },
    {
      label: 'Essais cliniques, pharmacovigilance et thèses (MADIT-II, SCD-HeFT, DANISH, RALES, EPHESUS, DAPA-HF, Kim 2000, STICH, REVIVED-BCIS2, MAGGIC, SHFM, SCORE2-HF, HEART-FID phosphate, IRONMAN, RED-HF, CARES/FAST, RED VELVT, SMARTEX-HF, DREAM-HF, BioVAT-HF, EMA/ANSM/FDA)',
      detail: 'DAI préventif ischémique vs non ischémique, 4 piliers (délai 36 h, baisse initiale du DFGe, gynécomastie), viabilité/transmuralité, scores pronostiques, hypophosphatémie sous fer IV, CST < 20 %, acidocétose euglycémique et thérapies cellulaires',
    },
    {
      label: 'Sources officielles françaises (service-public.fr, ameli.fr, HAS oct. 2024, CNSPFV 2026, Loi 2026-404, ANSM RCP Cordarone 2025)',
      detail: 'ALD, IPA, Mon espace santé, APA/Maisons Sport-Santé, CMI, AAH, PCH, RQTH/Loi plein emploi, AJPA, OPTAM, C2S, franchises 2026, directives anticipées, personne de confiance, EMSP/HAD/PPA/SPCMD et Tabac info service',
    },
  ],
  disclaimerType: 'medical',
};
