import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'glossaire-cardiologie',
  sourceWikiPath: 'wiki/references/glossary.md',
  titleFr: 'Glossaire médical de la cardiomyopathie ischémique',
  category: 'references',
  asOf: '2026-11-25',
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
    "Définitions en langage clair des termes médicaux, acronymes et abréviations rencontrés dans les comptes rendus de cardiologie, d'échocardiographie, d'IRM cardiaque et dans cette application. Lorsque deux sociétés savantes (par exemple ESC 2026, recommandations américaines ou Définition universelle 2026) retiennent des seuils ou des termes différents, les deux définitions sont précisées.",
  sections: [
    {
      headingFr: 'A – C',
      bodyMarkdownFr: `| Terme | Définition en clair |
|---|---|
| **Acide bempédoïque** | Comprimé quotidien réduisant le cholestérol LDL ; recommandé en Classe I (ESC) en cas d'intolérance aux statines, et possible en ajout à statine + ézétimibe. |
| **AERAS (convention)** | Convention française « s'Assurer et Emprunter avec un Risque Aggravé de Santé ». Aucun questionnaire de santé si la part assurée est ≤ 200 000 € par personne et si le prêt se termine avant 60 ans (loi Lemoine) ; au-delà, examen jusqu'à trois niveaux. Le droit à l'oubli ne couvre pas les pathologies cardiaques. |
| **Aggravation de l'insuffisance cardiaque (worsening heart failure)** | Définition universelle 2026 : détérioration progressive des symptômes, des signes cliniques ou de la qualité de vie chez une personne déjà diagnostiquée avec une insuffisance cardiaque (par exemple essoufflement ou œdèmes accrus, hausse du NT-proBNP, ou affaiblissement de la pompe à l'imagerie). Ne nécessite pas obligatoirement une consultation ou une hospitalisation, et exclut les aggravations principalement dues à un autre déclencheur (infarctus, infection, oubli de traitement). À distinguer de la *décompensation cardiaque*. |
| **Agoniste du GLP-1 / incrétine** | Médicaments imitant des hormones digestives pour réguler la glycémie et réduire l'appétit (sémaglutide / *Wegovy*, *Ozempic*, *Rybelsus* ; double agoniste GIP/GLP-1 tirzépatide / *Mounjaro* ; triple agoniste rétatrutide en phase 3). Bénéfice démontré sur les infarctus/AVC et dans l'HFpEF, mais non démontré sur l'ICFER (SOUL HR 0,98 ; sécurité rythmique et hausse de fréquence cardiaque à surveiller). |
| **AINS (anti-inflammatoires non stéroïdiens)** | Médicaments contre la douleur ou l'inflammation (ibuprofène, kétoprofène, diclofénac...) à éviter dans l'insuffisance cardiaque car ils favorisent la rétention hydrosodée, les poussées et l'insuffisance rénale. |
| **ALD (affection de longue durée)** | Statut français d'exonération du ticket modérateur (ALD 5 pour insuffisance cardiaque grave, ALD 13 pour maladie coronaire) : prise en charge à 100 % du tarif de l'Assurance Maladie pour les soins inscrits au *protocole de soins* (hors dépassements d'honoraires et franchises). |
| **Angiœdème** | Gonflement brutal et rare des lèvres, de la bouche, de la langue ou de la gorge sous IEC ou sacubitril/valsartan (*Entresto*) ; urgence médicale immédiate (appeler le 15 / SAMU ou le 112). |
| **Angioplastie coronaire (PCI)** | Intervention par voie endovasculaire (cathéter) pour rouvrir une artère coronaire rétrécie ou bouchée, le plus souvent avec pose d'un stent. |
| **Antiagrégant plaquettaire** | Médicament empêchant les plaquettes de s'agréger (aspirine à faible dose, clopidogrel, ticagrélor) ; utilisé au long cours dans la maladie coronaire et après pose de stent. |
| **Anticoagulant** | Médicament ralentissant la coagulation sanguine (AVK comme la warfarine ou la fluindione, ou AOD). Distinct de l'aspirine, qui est un antiagrégant plaquettaire. |
| **Anticipation (directives anticipées)** | Démarche consistant à discuter et consigner ses préférences de soins tant que l'état est stable ; recommandée dans l'insuffisance cardiaque avancée (ESC 2026, Classe I). |
| **AOD (anticoagulant oral direct / DOAC)** | Anticoagulant à dose fixe (apixaban, rivaroxaban, édoxaban, dabigatran) ne nécessitant pas de contrôle régulier de l'INR. |
| **ARM (antagoniste des récepteurs minéralocorticoïdes / MRA)** | L'un des quatre piliers du traitement de fond (spironolactone / *Aldactone*, éplérénone / *Inspra*). |
| **ARNI (sacubitril/valsartan — *Entresto*)** | Association faisant partie du pilier bloqueur du système rénine-angiotensine ; délai obligatoire d'au moins 36 heures après l'arrêt d'un IEC. |
| **ASV (servo-ventilation adaptative)** | Appareil ventilatoire nocturne adaptant sa pression cycle par cycle, utilisé dans l'apnée centrale. Dans SERVE-HF, il a augmenté la mortalité dans l'ICFER avec apnée principalement centrale ; déconseillé dans ce cas (ESC 2026, Classe III). |
| **Bêtabloquant** | Pilier du traitement de fond (bisoprolol / *Cardensiel*, carvédilol, nébivolol, métoprolol succinate) ; également traitement de première ligne de l'angor dans l'ICFER. |
| **CardioMEMS (capteur de pression artérielle pulmonaire)** | Petit capteur implanté dans une branche de l'artère pulmonaire permettant de détecter une élévation des pressions avant les symptômes de congestion. ESC 2026 : à envisager (Classe IIa) en NYHA III avec hospitalisation dans l'année ; réduit les hospitalisations sans effet démontré sur la survie. Non remboursé en France (avis HAS 2021). |
| **Cardiomyopathie dilatée (CMD / DCM)** | Ventricule gauche dilaté et affaibli **non expliqué uniquement** par une maladie coronaire ou une surcharge anormale telle qu'une hypertension artérielle ou une valvulopathie (ESC 2023). Les causes incluent des variants génétiques, une myocardite passée ou l'alcool. |
| **Cellules iPS (cellules souches pluripotentes induites)** | Cellules adultes (par exemple de peau ou de sang) reprogrammées en laboratoire en cellules souches pouvant être différenciées en cellules de muscle cardiaque. Utilisées à partir de donneurs dans les patchs et feuillets expérimentaux (BioVAT-HF, RiHEART, LAPiS) ; un traitement immunosuppresseur est alors nécessaire. |
| **Cellules stromales / précurseurs mésenchymateuses (CSM / CPM / MSC / MPC)** | Cellules de soutien prélevées dans la moelle osseuse (du patient lui-même ou d'un donneur) et testées comme traitement de l'insuffisance cardiaque ; le plus grand essai contrôlé contre procédure factice (DREAM-HF) a été négatif sur son critère principal. |
| **CHA₂DS₂-VA** | Score européen d'évaluation du risque d'AVC en cas de fibrillation atriale. L'insuffisance cardiaque compte 1 point ; une anticoagulation est recommandée à partir de 2 points. |
| **Chélateur de potassium** | Poudre orale (patiromer, cyclosilicate de zirconium sodique) éliminant le potassium par voie digestive afin de maintenir les ARM malgré une tendance à l'hyperkaliémie ; bénéfice clinique direct non démontré. |
| **Classe de recommandation (I, IIa, IIb, III)** | Force d'une recommandation : **I** = recommandé ; **IIa** = doit être envisagé ; **IIb** = peut être envisagé ; **III** = non recommandé (inutile ou délétère). |
| **Colchicine** | Anti-inflammatoire ancien utilisé dans la goutte ; à faible dose (0,5 mg/jour), doit être envisagé dans la maladie coronaire chronique (ESC 2024, Classe IIa) pour réduire infarctus et AVC (hors IC sévère et sous réserve de la fonction rénale). |
| **Collatérales / grade de Rentrop** | Vaisseaux naturels de suppléance contournant une artère coronaire occluse. Le grade de Rentrop (0 à 3) décrit le remplissage à la coronarographie ; le grade 3 (remplissage complet) est fréquent dans les CTO et suffit souvent au repos, mais rarement à l'effort. |
| **Créatinine / DFGe (eGFR)** | Marqueurs sanguins de la fonction rénale (DFGe en mL/min/1,73 m²). Une baisse initiale modérée du DFGe est souvent attendue lors de l'initiation ou de la titration des traitements de fond. |
| **CRT / CRT-P / CRT-D** | Thérapie de resynchronisation cardiaque : stimulateur spécialisé aidant des ventricules désynchronisés à se contracter ensemble ; le CRT-D intègre en plus un défibrillateur (DAI). |
| **CST (coefficient de saturation de la transferrine / TSAT)** | Pourcentage de saturation du transporteur du fer dans le sang ; un CST < 20 % est un marqueur clé de carence martiale dans l'insuffisance cardiaque. |
| **CTO (occlusion coronaire chronique)** | Artère coronaire totalement obstruée depuis au moins 3 mois, le territoire en aval étant habituellement irrigué par des vaisseaux collatéraux. |`,
    },
    {
      headingFr: 'D – H',
      bodyMarkdownFr: `| Terme | Définition en clair |
|---|---|
| **DAI (défibrillateur automatique implantable / ICD)** | Dispositif implanté protégeant contre la mort subite liée aux troubles du rythme ventriculaires graves ; il n'améliore pas les symptômes quotidiens. |
| **DAI sous-cutané (S-DAI / S-ICD)** | Défibrillateur placé sous la peau, sans sonde dans les veines ni dans le cœur. Dans PRAETORIAN, moins de complications de sonde, mais pas de fonction de stimulation (pacemaker) ni de CRT ; les patients nécessitant ultérieurement une stimulation ont le plus souvent été convertis vers un dispositif transveineux. |
| **Décompensation cardiaque** | Aggravation nécessitant une intensification du traitement ou un traitement de secours (par exemple augmentation ou ajout d'un diurétique), souvent à l'hôpital ; elle peut s'installer sur quelques jours à quelques semaines ou survenir brutalement (Définition universelle 2026). Le guide patient ESC utilise ce terme à la place d'« insuffisance cardiaque aiguë ». À comparer à *l'aggravation de l'insuffisance cardiaque*. |
| **Définition universelle de l'insuffisance cardiaque (2026)** | Consensus conjoint AHA/ACC/ESC/World Heart Federation sur la terminologie de l'insuffisance cardiaque (2021 ; seconde édition juin 2026). Ce n'est pas une recommandation de traitement : elle ne fixe pas de seuils chiffrés de FEVG ni de peptides natriurétiques et recense 18 groupes étiologiques, avec la cardiomyopathie ischémique en premier. |
| **Digoxine / digitoxine (digitaliques)** | Médicaments anciens renforçant la contraction et ralentissant le cœur. Option additionnelle si symptômes persistants à FEVG ≤ 40 % (ESC 2026, Classe IIa, relevée) ou contrôle de fréquence dans la FA. Un taux sanguin bas est essentiel ; signes de surdosage : nausées, confusion, vision jaunâtre. |
| **Diurétique de l'anse** | Médicament favorisant l'élimination du sel et de l'eau (furosémide / *Lasilix*, bumétanide / *Burinex*) pour soulager l'essoufflement et les œdèmes. |
| **Double pathologie (dual pathology)** | Présence simultanée d'une maladie coronaire et d'une seconde cause d'affaiblissement du muscle cardiaque (par exemple cicatrice d'infarctus associée à une fibrose médio-pariétale à l'IRM). |
| **Échocardiographie de contraste** | Échocardiographie transthoracique avec injection d'un produit de contraste mettant en évidence le contour interne du ventricule gauche ; détecte mieux les thrombus VG qu'une ETT standard. |
| **Échocardiographie de stress sous dobutamine (réserve de flux)** | Échocardiographie réalisée sous perfusion de dobutamine stimulant la contraction cardiaque. Dans le rétrécissement aortique à bas débit, elle distingue une sténose réellement sévère d'une sténose pseudo-sévère ; la « réserve de flux » correspond à une hausse ≥ 20 % du volume d'éjection. |
| **Échocardiographie transthoracique (ETT)** | Échographie du cœur à travers la paroi thoracique : évalue la pompe (FEVG), la relaxation, les tailles de cavités et les valves. Ses chiffres de FEVG ne doivent pas être fusionnés avec ceux de l'IRM cardiaque. |
| **EPOF** | Moyen mnémotechnique français des 4 signes d'alerte de décompensation cardiaque : **E**ssoufflement, **P**rise de poids rapide, **Œ**dèmes des jambes/chevilles, **F**atigue inhabituelle. |
| **Ézétimibe** | Comprimé réduisant le cholestérol LDL en freinant son absorption intestinale ; premier ajout habituel à une statine, souvent en association fixe. |
| **FEVG (fraction d'éjection du ventricule gauche / LVEF)** | Pourcentage du volume sanguin contenu dans le ventricule gauche éjecté à chaque battement. |
| **Fibrillation atriale (FA / AF)** | Trouble fréquent du rythme cardiaque où les oreillettes battent de façon irrégulière ; associée à l'insuffisance cardiaque, elle accroît le risque d'AVC. |
| **Fibrose médio-pariétale** | Bande de cicatrice dans la couche moyenne de la paroi cardiaque à l'IRM, typique d'une cardiomyopathie non ischémique plutôt que d'un infarctus ; associée à un surrisque de mort subite. |
| **Finérénone** | Nouvel ARM non stéroïdien. Efficacité démontrée pour une FEVG ≥ 40 % et dans le diabète de type 2 avec maladie rénale chronique ; résultats non encore disponibles pour la FEVG < 40 % (essai FINALITY-HF en cours). |
| **Gilet défibrillateur portable (LifeVest)** | Gilet porté sous les vêtements jour et nuit, capable de détecter et choquer un trouble du rythme grave pendant les premiers mois avant la décision de DAI ; peut être envisagé comme passerelle temporaire (ESC 2026, Classe IIb). Conduite automobile interdite en France pendant son indication. |
| **Groupe 1 / Groupe 2 (permis de conduire)** | Catégories européennes : groupe 1 (groupe léger) = voitures et motos ; groupe 2 (groupe lourd) = poids lourds et transport en commun. |
| **Heart Team (équipe médico-chirurgicale)** | Équipe multidisciplinaire discutant les choix de revascularisation ou d'intervention valvulaire ; l'ESC 2026 demande qu'elle comprenne un spécialiste de l'insuffisance cardiaque. |
| **Hepcidine / ferroportine** | L'hepcidine est une hormone souvent élevée dans l'insuffisance cardiaque qui ferme la ferroportine, porte de sortie du fer hors des cellules intestinales ; elle explique pourquoi le fer oral recharge mal les réserves par rapport au fer intraveineux. |
| **HFimpEF (insuffisance cardiaque à FEVG améliorée)** | Hausse de la FEVG d'au moins 10 points aboutissant au-dessus de 40 % (définition ESC 2026). La Définition universelle 2026 retient la même description mais précise que la FEVG seule ne suffit pas à la définir. |
| **HFmrEF** | Ancienne catégorie « FEVG modérément réduite » (41–49 %), **supprimée par l'ESC 2026** et non utilisée dans la Définition universelle 2026 ; encore présente dans les recommandations américaines, britanniques et les documents antérieurs. |
| **HFpEF (insuffisance cardiaque à FEVG préservée)** | Insuffisance cardiaque avec FEVG ≥ 50 % associée à des anomalies structurelles ou fonctionnelles du cœur. |
| **HIIT (entraînement fractionné à haute intensité)** | Protocole d'endurance alternant des intervalles d'effort soutenu et de récupération. Dans SMARTEX-HF (plus grand essai dans l'ICFER), le HIIT n'a pas fait mieux que l'endurance continue modérée sur le remodelage du ventricule gauche ou la capacité d'effort. |
| **Hyperkaliémie** | Taux élevé de potassium dans le sang. Les IEC, ARA2, ARNI et ARM peuvent l'augmenter, justifiant des bilans sanguins réguliers. |`,
    },
    {
      headingFr: 'I – O',
      bodyMarkdownFr: `| Terme | Définition en clair |
|---|---|
| **IAH (index d'apnées-hypopnées / AHI)** | Nombre de pauses respiratoires ou de respirations très superficielles par heure de sommeil mesuré lors d'un enregistrement nocturne. Un IAH ≥ 15/h est habituellement qualifié de modéré, > 30/h de sévère. |
| **ICFER (insuffisance cardiaque à FEVG réduite / HFrEF)** | Définition ESC 2026 : FEVG **< 50 %** avec symptômes ou signes. Recommandations américaines (2022), NICE et anciennes recommandations ESC : FEVG **≤ 40 %** (ou < 40 %). La Définition universelle 2026 ne fixe délibérément aucun seuil chiffré, notant simplement qu'une FEVG < 50 % a peu de chances d'être normale. |
| **IEC / ARA2 / ARNI** | Pilier bloqueur du système rénine-angiotensine : IEC (ramipril, périndopril, énalapril, lisinopril) ou ARNI (sacubitril/valsartan — *Entresto*) ; ARA2 (candésartan, valsartan, losartan) en alternative si intolérance (ESC 2026). |
| **Infarctus du myocarde (IDM / MI)** | Nécrose d'une zone du muscle cardiaque causée par l'occlusion brutale d'une artère coronaire. |
| **Inclisiran** | Injection abaissant le cholestérol LDL administrée deux fois par an après les doses d'initiation ; réduit le LDL d'environ moitié, mais les essais d'événements cliniques n'étaient pas encore publiés fin 2026. |
| **Inhibiteur de PCSK9 (anti-PCSK9)** | Traitement injectable (évolocumab, alirocumab) réduisant fortement le LDL ; recommandé (ESC Classe I) lorsque statine + ézétimibe ne suffisent pas à atteindre l'objectif. |
| **Insuffisance cardiaque « stable »** | Expression courante que la Définition universelle 2026 qualifie d'impropre, car un risque résiduel d'aggravation, d'hospitalisation ou de mort subite persiste toujours. |
| **Insuffisance mitrale secondaire** | Fuite de la valve mitrale provoquée par la dilatation du ventricule gauche qui écarte les feuillets valvulaires (forme ventriculaire). |
| **IPA / Infirmière insuffisance cardiaque** | Infirmière en pratique avancée ou infirmière spécialisée assurant le suivi rapproché, l'éducation thérapeutique, la titration encadrée et la télésurveillance. |
| **IRM cardiaque (CMR)** | Examen d'imagerie de haute précision mesurant les volumes, la FEVG et les zones de cicatrice (rehaussement tardif). En moyenne, mesure une FEVG inférieure d'environ 5,5 points à l'ETT dans la dysfonction ischémique. |
| **Ischémique** | Causé par un manque d'apport sanguin (maladie des artères coronaires, infarctus du myocarde). |
| **iSGLT2 (inhibiteur du SGLT2 / gliflozine)** | Dapagliflozine (*Forxiga*), empagliflozine (*Jardiance*) : pilier du traitement de fond, recommandé en Classe I quelle que soit la FEVG dans l'ESC 2026. |
| **Ivabradine (*Procoralan*)** | Comprimé ralentissant le rythme sinusal naturel du cœur. Option additionnelle pour FEVG ≤ 35 % en rythme sinusal avec fréquence > 70 bpm (≥ 75 bpm selon l'AMM européenne) malgré bêtabloquant maximal toléré (ESC 2026, Classe IIa). Peut provoquer des phosphènes (éclairs lumineux brefs). |
| **LDL cholestérol (LDL-C)** | Fraction athérogène du cholestérol. Objectif ESC après maladie coronaire : < 0,55 g/L (1,4 mmol/L) et réduction ≥ 50 % par rapport au taux initial (Classe I). |
| **LGE (rehaussement tardif au gadolinium)** | Sur l'IRM cardiaque après injection de gadolinium, la cicatrice fibreuse apparaît brillante ; le muscle sans LGE est considéré comme viable. |
| **Lp(a) — Lipoprotéine(a)** | Particule porteuse de cholestérol d'origine génétique associée au risque d'infarctus ; l'ESC recommande de la doser une fois dans la vie. Aucun traitement spécifique n'a encore prouvé de réduction d'événements cliniques. |
| **MIDCAB** | Pontage mini-invasif : greffe d'une artère mammaire interne gauche (AMIG) sur l'artère IVA par une petite incision latérale, sans ouvrir le sternum. |
| **Mort subite cardiaque (MSC / SCD)** | Décès inattendu d'origine cardiaque, le plus souvent provoqué par un trouble du rythme ventriculaire grave. |
| **Myocarde hibernant / viabilité** | Muscle cardiaque affaibli mais encore vivant, théoriquement capable de récupérer si la perfusion est rétablie. Dans REVIVED-BCIS2, la quantité de myocarde viable n'a pas prédit le bénéfice d'un stent. |
| **NT-proBNP / BNP** | Peptides natriurétiques dosés dans le sang pour le diagnostic de l'insuffisance cardiaque. Seuils d'exclusion ESC en ambulatoire : NT-proBNP < 125 pg/mL, BNP < 35 pg/mL. Le sacubitril/valsartan peut augmenter le BNP mais pas le NT-proBNP. L'ESC 2026 ne soutient pas le guidage systématique du traitement par NT-proBNP. |
| **NYHA (classes I à IV)** | Échelle d'évaluation des symptômes : **I** = aucune limitation ; **II** = gêne modérée à l'effort habituel, à l'aise au repos ; **III** = gêne marquée pour des efforts légers ; **IV** = symptômes possibles même au repos. |`,
    },
    {
      headingFr: 'P – Z',
      bodyMarkdownFr: `| Terme | Définition en clair |
|---|---|
| **Plan « jours de maladie » (sick day rules)** | Conduite à tenir personnalisée écrite par le médecin pour savoir quels médicaments suspendre temporairement ou adapter en cas de vomissements, diarrhée sévère ou fièvre avec déshydratation. |
| **Pontage aorto-coronarien (CABG)** | Intervention chirurgicale créant un nouveau trajet pour le sang afin de contourner une ou plusieurs artères coronaires rétrécies ou occluses. |
| **PPC (pression positive continue / CPAP)** | Appareil muni d'un masque insufflant de l'air sous pression constante pour maintenir les voies aériennes ouvertes la nuit ; traitement de référence du SAOS. En France, pris en charge sur entente préalable et sous condition d'observance régulière. |
| **PRADO insuffisance cardiaque** | Programme d'accompagnement de retour à domicile de l'Assurance Maladie après une hospitalisation pour insuffisance cardiaque (coordination médecin traitant, infirmière, cardiologue). |
| **Prévention primaire vs secondaire (DAI)** | Primaire : DAI implanté avant la survenue d'un trouble du rythme grave. Secondaire : DAI implanté après un arrêt cardiaque ou une arythmie ventriculaire grave. |
| **Prévention secondaire coronaire** | Ensemble des mesures visant à éviter un nouvel infarctus ou AVC en cas de maladie coronaire connue : baisse du LDL, antiagrégant plaquettaire, contrôle tensionnel, parfois colchicine. |
| **Procédure factice (sham)** | Intervention simulée (par exemple introduction d'un cathéter dans le cœur sans injection active) réalisée dans le groupe comparateur afin que ni les patients ni les évaluateurs ne sachent qui a reçu le traitement actif ; constitue l'évaluation la plus rigoureuse des thérapies cellulaires injectées. |
| **QRS / BBG (bloc de branche gauche)** | Paramètres de l'ECG utilisés pour décider d'une CRT : un BBG avec durée du QRS ≥ 150 ms est la principale indication de Classe I dans l'ESC 2026. |
| **Récupération (insuffisance cardiaque)** | Définition universelle 2026 : maintien durable dans le temps d'une structure cardiaque, d'une fonction, de biomarqueurs sanguins et de symptômes revenus à la normale sur un suivi prolongé. Critère plus strict que la rémission ; seule une minorité de patients l'atteint. |
| **Rémission** | ESC 2026 : terme employé pour une FEVG améliorée (le cœur va mieux mais reste vulnérable, donc le traitement se poursuit). La Définition universelle 2026 l'emploie plus strictement : FEVG revenue à la normale, symptômes minimes (NYHA I) et biomarqueurs stables, avec un risque persistant de rechute ; une hausse plus modeste est qualifiée d'« amélioration ». |
| **Rétrécissement aortique (sténose aortique) : léger / modéré / sévère** | Rétrécissement de la valve aortique. Selon le tableau ASE/EACVI : léger = surface > 1,5 cm² et gradient moyen < 20 mmHg ; modéré = 1,0–1,5 cm² et 20–40 mmHg ; sévère = < 1,0 cm² et ≥ 40 mmHg. |
| **Rétrécissement aortique bas débit, bas gradient** | Valve sévèrement rétrécie présentant un faible gradient de pression parce que le ventricule affaibli éjecte peu de sang. La forme « classique » associe surface ≤ 1,0 cm², gradient moyen < 40 mmHg, FEVG < 50 % et volume d'éjection indexé (SVi) ≤ 35 mL/m². |
| **Rétrécissement aortique pseudo-sévère** | Valve modérément rétrécie paraissant sévère à l'ETT parce que le ventricule gauche manque de force pour l'ouvrir complètement ; relève d'abord du traitement médical de l'insuffisance cardiaque plutôt que d'un remplacement valvulaire. |
| **RQTH** | Reconnaissance de la qualité de travailleur handicapé (délivrée par la MDPH en France), ouvrant droit aux aménagements de poste et aux aides au maintien dans l'emploi. |
| **SAOS / SACS (apnée obstructive / centrale du sommeil)** | SAOS (obstructive) : fermeture des voies aériennes malgré l'effort respiratoire. SACS (centrale) : pause temporaire de la commande respiratoire cérébrale, souvent en respiration de Cheyne-Stokes. Les deux sont fréquents dans l'insuffisance cardiaque. |
| **SMR cardiovasculaire (réadaptation cardiaque)** | Service de soins médicaux et de réadaptation spécialisé en cardiologie (en hospitalisation complète ou en hôpital de jour), dédié au réentraînement à l'effort, à l'éducation thérapeutique et à l'optimisation du traitement. |
| **Soins palliatifs / soins de support** | Accompagnement global des symptômes, du vécu émotionnel et des choix de soins, en parallèle des traitements habituels et à tout stade de l'insuffisance cardiaque (HFA 2020). |
| **Stades A / B / C / D de l'insuffisance cardiaque** | **A** : à risque ; **B** : « pré-insuffisance cardiaque » (anomalie structurelle telle qu'une FEVG basse sans **jamais** avoir eu de symptômes) ; **C** : symptômes actuels ou passés ; **D** : avancée. Contrairement à la classe NYHA, les stades ne reculent jamais (pas de retour de C vers B), même si la Définition universelle 2026 décrit amélioration, rémission et récupération au sein de l'IC symptomatique. Son texte mentionne également un « stade 0 » pour les personnes sans facteur de risque. |
| **Statine** | Comprimé hypolipémiant (rosuvastatine, atorvastatine...), première étape de la prévention secondaire coronaire. Débuter une statine *uniquement* pour l'insuffisance cardiaque n'a pas apporté de bénéfice dans CORONA et GISSI-HF. |
| **TAVI** | Remplacement de la valve aortique par cathéter (le plus souvent via l'artère fémorale) sans ouverture chirurgicale du thorax ; généralement privilégié à partir d'environ 70 ans lorsque l'anatomie s'y prête. |
| **TCC (thérapie cognitivo-comportementale / CBT)** | Psychothérapie structurée ayant démontré une amélioration des symptômes dépressifs dans un essai clinique dédié à l'insuffisance cardiaque. |
| **TEER (M-TEER / MitraClip)** | Réparation percutanée bord à bord de la valve mitrale par pose d'un clip via cathéter. |
| **Télésurveillance de l'insuffisance cardiaque** | Transmission depuis le domicile du poids, des symptômes et parfois de la tension à une équipe infirmière/médicale entre les consultations (non surveillée 24 h/24 en temps réel). ESC 2026 : Classe IIb ; remboursée en France depuis 2023 pour les patients éligibles. |
| **Temps partiel thérapeutique (mi-temps thérapeutique)** | Reprise progressive du travail prescrite par le médecin, avec indemnités journalières complétant le salaire réduit. Depuis 2019, ne nécessite plus d'arrêt de travail à temps plein préalable. |
| **Thérapie cellulaire (cellules souches) / MTI (ATMP)** | Traitement utilisant des cellules vivantes pour tenter de réparer le cœur. Dans l'Union européenne, les thérapies cellulaires, géniques et tissulaires sont des médicaments de thérapie innovante (MTI / ATMP) autorisés de façon centralisée ; en juin 2026, aucun n'est autorisé pour le cœur. Les injections payantes hors essai clinique enregistré ne constituent pas un traitement prouvé. |
| **Thrombus intraventriculaire gauche (thrombus VG)** | Caillot sanguin fixé sur la paroi interne du ventricule gauche, le plus souvent sur une zone peu mobile (fréquemment l'apex après un infarctus du territoire de l'IVA). |
| **Traitement de fond (les 4 piliers / FMT / GDMT)** | Socle thérapeutique associant quatre classes médicamenteuses (IEC ou ARNI, bêtabloquant, ARM, iSGLT2) dans l'ICFER. |
| **Vériciguat (*Verquvo*)** | Comprimé additionnel stimulant la voie de relaxation vasculaire (stimulateur de la guanylate cyclase soluble, sGC). Bénéfique après aggravation récente (VICTORIA) mais neutre sur le critère principal chez les patients stables (VICTOR) ; ESC 2026 Classe IIb. Contre-indiqué avec les inhibiteurs de la PDE5 (sildénafil, tadalafil...). |
| **Volume d'éjection indexé (SVi)** | Volume de sang éjecté à chaque battement rapporté à la surface corporelle ; un SVi ≤ 35 mL/m² définit le « bas débit » dans l'évaluation du rétrécissement aortique. |
| **VTDi / VTSi (volumes VG indexés / LVEDVi / LVESVi)** | Volumes télédiastolique (rempli) et télésystolique (après contraction) du ventricule gauche indexés à la surface corporelle (en mL/m²). Limite supérieure normale du VTDi à l'ETT : 74 mL/m² chez l'homme, 61 mL/m² chez la femme ; les normes IRM sont plus élevées. Le VTSi prédisait le pronostic dans REVIVED-BCIS2 là où la FEVG ne le faisait pas. |`,
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
    'fraction-dejection',
    'questions-equipe-cardiologie',
    'examens-et-chiffres',
    'medicaments-effets-secondaires-suivi',
    'traitements-additionnels-nouveaux',
    'stenose-aortique-fevg-reduite',
    'cholesterol-et-prevention-secondaire',
    'occlusion-coronaire-chronique-cto',
    'thrombus-vg-et-anticoagulants',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'musculation-vs-endurance-readaptation-cardiaque',
    'vivre-avec-insuffisance-cardiaque-en-france',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 (insuffisance cardiaque), Guide patient ESC 2026 et Définition universelle 2026 (AHA/ACC/ESC/WHF)',
      detail: 'Définitions ICFER/HFimpEF, catégories sans seuil fixe, rémission vs récupération, aggravation vs décompensation, stade 0, « IC stable », 4 piliers, classes de recommandation, NYHA, DAI/CRT, télésurveillance et apnée du sommeil',
    },
    {
      label: 'ASE/EACVI 2015, EACVI/ASE 2017, ESC/EACTS 2025, ESC 2023 (cardiomyopathies) et ESC 2024 (FA et SCC)',
      detail: 'Normes de volumes VG, rétrécissement aortique bas débit, CMD, double pathologie, score CHA₂DS₂-VA et prévention secondaire',
    },
    {
      label: 'Thérapies cellulaires, incrétines, fer et réadaptation (EMA liste MTI juin 2026, DREAM-HF, BioVAT-HF NEJM 2026, PMDA RiHEART 2026, SOUL 2026, IRONOUT-HF, SMARTEX-HF)',
      detail: 'Cellules iPS, CSM/CPM, MTI/ATMP, procédure factice (sham), agonistes du GLP-1/incrétines, hepcidine/ferroportine et HIIT',
    },
    {
      label: 'Essais et méta-analyses de référence (REVIVED-BCIS2, SERVE-HF, FINEARTS-HF, DIAMOND, PRAETORIAN, VEST, SHIFT)',
      detail: 'Discordance ETT/IRM, ASV, finérénone, chélateurs de potassium, S-DAI, LifeVest et ivabradine',
    },
    {
      label: 'Sources officielles françaises (service-public.fr, ameli.fr, HAS CNEDiMTS)',
      detail: 'ALD 5/13, AERAS, RQTH, SMR cardiovasculaire, temps partiel thérapeutique, PPC et LifeVest',
    },
  ],
  disclaimerType: 'medical',
};
