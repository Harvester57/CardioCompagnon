import type { GlossaryTerm } from '../../../types';

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'fevg',
    termFr: "FEVG (fraction d'éjection du ventricule gauche)",
    aliases: ['FEVG', 'LVEF', 'EF', "fraction d'éjection", 'fraction dejection'],
    shortDefinitionFr:
      'Pourcentage du sang contenu dans le ventricule gauche qui est éjecté à chaque battement. Toujours interpréter en distinguant ETT et IRM cardiaque.',
    articleSlug: 'fraction-dejection',
  },
  {
    id: 'icfer',
    termFr: 'ICFER (insuffisance cardiaque à FEVG réduite)',
    aliases: ['ICFER', 'HFrEF', 'FEVG réduite'],
    shortDefinitionFr:
      "Insuffisance cardiaque avec baisse de la contraction : FEVG < 50 % selon ESC 2026 (≤ 40 % aux États-Unis, NICE et anciennes ESC). La Définition universelle 2026 ne fixe délibérément aucun seuil chiffré, notant qu'une FEVG < 50 % a peu de chances d'être normale.",
    articleSlug: 'fraction-dejection',
  },
  {
    id: 'hfimpef',
    termFr: 'HFimpEF (insuffisance cardiaque à FEVG améliorée)',
    aliases: ['HFimpEF', 'FEVG améliorée', 'FEVG récupérée'],
    shortDefinitionFr:
      "Hausse de la FEVG d'au moins 10 points aboutissant au-dessus de 40 % (ESC 2026). La Définition universelle 2026 retient la même description mais précise que la FEVG seule ne suffit pas à la définir ; le traitement de fond doit être poursuivi.",
    articleSlug: 'insuffisance-cardiaque-fevg-amelioree',
  },
  {
    id: 'hfmref',
    termFr: 'HFmrEF (FEVG modérément réduite)',
    aliases: ['HFmrEF', 'FEVG modérément réduite'],
    shortDefinitionFr:
      'Ancienne catégorie 41–49 %, supprimée par les recommandations ESC 2026 (intégrée dans ICFER < 50 %) et non utilisée dans la Définition universelle 2026, mais encore employée aux États-Unis et par NICE.',
    articleSlug: 'fraction-dejection',
  },
  {
    id: 'hfpef',
    termFr: 'HFpEF (insuffisance cardiaque à FEVG préservée)',
    aliases: ['HFpEF', 'ICFEP', 'FEVG préservée'],
    shortDefinitionFr:
      'Insuffisance cardiaque avec FEVG ≥ 50 % associée à des anomalies structurelles ou de remplissage du cœur.',
    articleSlug: 'fraction-dejection',
  },
  {
    id: 'definition_universelle_ic',
    termFr: "Définition universelle de l'insuffisance cardiaque (2026)",
    aliases: ['Définition universelle', 'Universal Definition', 'AHA/ACC/ESC/WHF'],
    shortDefinitionFr:
      "Consensus conjoint AHA/ACC/ESC/WHF sur la terminologie de l'insuffisance cardiaque (2021 ; 2e édition juin 2026). Ce n'est pas une recommandation thérapeutique : elle ne fixe pas de seuils de FEVG ou de peptides natriurétiques et liste 18 groupes étiologiques, avec la cardiomyopathie ischémique en premier.",
    articleSlug: 'fraction-dejection',
  },
  {
    id: 'cardiomyopathie_ischemique',
    termFr: 'Cardiomyopathie ischémique',
    aliases: ['ischémique', 'ischaemic cardiomyopathy', 'CMI'],
    shortDefinitionFr:
      'Affaiblissement du muscle cardiaque causé par un manque d’apport sanguin lié à une maladie des artères coronaires ou à un ou plusieurs infarctus.',
    articleSlug: 'cardiomyopathie-ischemique',
  },
  {
    id: 'infarctus_myocarde',
    termFr: 'Infarctus du myocarde (IDM / MI)',
    aliases: ['IDM', 'MI', 'infarctus', 'crise cardiaque'],
    shortDefinitionFr:
      "Nécrose d'une zone du muscle cardiaque provoquée par l'occlusion brutale d'une artère coronaire.",
    articleSlug: 'cardiomyopathie-ischemique',
  },
  {
    id: 'stades_ic',
    termFr: "Stades A / B / C / D de l'insuffisance cardiaque",
    aliases: ['Stade 0', 'Stade A', 'Stade B', 'Stade C', 'Stade D', 'pré-insuffisance cardiaque'],
    shortDefinitionFr:
      "A : à risque ; B : anomalie structurelle (ex. FEVG basse) sans jamais avoir eu de symptômes ; C : symptômes actuels ou passés ; D : avancée. Les stades ne reculent jamais (pas de retour de C vers B), mais la Définition universelle 2026 décrit amélioration, rémission et récupération au sein de l'IC symptomatique et mentionne un « stade 0 » sans facteur de risque.",
    articleSlug: 'dysfonction-vg-asymptomatique-stade-b',
  },
  {
    id: 'nyha',
    termFr: 'NYHA (classes I à IV)',
    aliases: ['NYHA', 'NYHA I', 'NYHA II', 'NYHA III', 'NYHA IV'],
    shortDefinitionFr:
      'Échelle des symptômes : I = aucune gêne ; II = gêne légère à l’effort habituel ; III = gêne marquée pour des efforts faibles ; IV = symptômes possibles au repos.',
    articleSlug: 'comprendre-le-diagnostic',
  },
  {
    id: 'epof',
    termFr: 'EPOF (signes d’alerte)',
    aliases: ['EPOF', 'signes d’alerte', 'décompensation'],
    shortDefinitionFr:
      'Acronyme français des 4 signes de décompensation cardiaque : Essoufflement, Prise de poids rapide, Œdèmes des jambes, Fatigue inhabituelle.',
    articleSlug: 'vivre-avec-insuffisance-cardiaque',
  },
  {
    id: 'decompensation_cardiaque',
    termFr: 'Décompensation cardiaque',
    aliases: ['décompensation cardiaque', 'insuffisance cardiaque aiguë', 'decompensated HF'],
    shortDefinitionFr:
      "Aggravation nécessitant une intensification ou un traitement de secours (par exemple augmentation ou ajout de diurétique), souvent à l'hôpital ; elle peut s'installer sur des jours à des semaines ou brutalement (Définition universelle 2026). À distinguer de l'aggravation progressive.",
    articleSlug: 'vivre-avec-insuffisance-cardiaque',
  },
  {
    id: 'aggravation_ic',
    termFr: "Aggravation de l'insuffisance cardiaque (worsening heart failure)",
    aliases: ['worsening heart failure', 'aggravation IC', 'aggravation progressive'],
    shortDefinitionFr:
      "Définition universelle 2026 : détérioration progressive des symptômes, signes cliniques ou qualité de vie chez une personne déjà diagnostiquée (essoufflement, œdèmes, hausse du NT-proBNP ou baisse de pompe), sans nécessiter de visite hospitalière et hors déclencheur externe majeur (infarctus, infection, oubli de traitement).",
    articleSlug: 'vivre-avec-insuffisance-cardiaque',
  },
  {
    id: 'remission_ic',
    termFr: 'Rémission (insuffisance cardiaque)',
    aliases: ['rémission', 'remission'],
    shortDefinitionFr:
      "ESC 2026 : terme employé pour une FEVG améliorée (traitement à poursuivre). La Définition universelle 2026 l'emploie plus strictement : FEVG revenue à la normale, symptômes minimes (NYHA I) et biomarqueurs stables, avec risque résiduel de rechute ; une hausse moindre est appelée « amélioration ».",
    articleSlug: 'insuffisance-cardiaque-fevg-amelioree',
  },
  {
    id: 'recuperation_ic',
    termFr: 'Récupération (insuffisance cardiaque)',
    aliases: ['récupération', 'recovery', 'guérison IC'],
    shortDefinitionFr:
      'Définition universelle 2026 : maintien durable dans le temps de la structure cardiaque, de la fonction, des biomarqueurs sanguins et des symptômes à la normale sur un suivi prolongé. Critère plus strict que la rémission, atteint par une minorité de patients.',
    articleSlug: 'insuffisance-cardiaque-fevg-amelioree',
  },
  {
    id: 'ic_stable',
    termFr: 'Insuffisance cardiaque « stable »',
    aliases: ['IC stable', 'insuffisance cardiaque stable', 'stable heart failure'],
    shortDefinitionFr:
      "Expression courante que la Définition universelle 2026 qualifie d'impropre, car un risque résiduel d'aggravation, d'hospitalisation ou de mort subite persiste toujours.",
    articleSlug: 'comprendre-le-diagnostic',
  },
  {
    id: 'ett',
    termFr: 'ETT (échocardiographie transthoracique)',
    aliases: ['ETT', 'écho', 'échographie cardiaque', 'echocardiogram'],
    shortDefinitionFr:
      'Échographie du cœur réalisée sur le thorax, mesurant la FEVG, les volumes et les valves. Ses chiffres ne doivent pas être mélangés avec ceux de l’IRM.',
    articleSlug: 'fraction-dejection',
  },
  {
    id: 'irm_cardiaque',
    termFr: 'IRM cardiaque (CMR)',
    aliases: ['IRM', 'IRM cardiaque', 'CMR'],
    shortDefinitionFr:
      'Imagerie précise des volumes cardiaques et des cicatrices myocardiques. Donne en moyenne une FEVG inférieure d’environ 5,5 points à l’ETT dans la dysfonction ischémique.',
    articleSlug: 'examens-et-chiffres',
  },
  {
    id: 'lge',
    termFr: 'LGE (rehaussement tardif au gadolinium / cicatrice IRM)',
    aliases: ['LGE', 'rehaussement tardif', 'cicatrice IRM'],
    shortDefinitionFr:
      'Zone apparaissant brillante à l’IRM après injection de gadolinium, traduisant une cicatrice fibreuse ; le muscle sans LGE est considéré comme viable.',
    articleSlug: 'examens-et-chiffres',
  },
  {
    id: 'vtdi_vtsi',
    termFr: 'VTDi / VTSi / DTDVG (taille du ventricule gauche)',
    aliases: ['VTDi', 'VTSi', 'DTDVG', 'LVEDVi', 'LVESVi', 'LVEDD'],
    shortDefinitionFr:
      'Volumes télédiastolique et télésystolique du VG indexés à la surface corporelle (mL/m²) et diamètre télédiastolique (mm). Normes distinctes selon le sexe et entre ETT et IRM.',
    articleSlug: 'examens-et-chiffres',
  },
  {
    id: 'nt_probnp_bnp',
    termFr: 'NT-proBNP / BNP',
    aliases: ['NT-proBNP', 'BNP', 'peptides natriurétiques'],
    shortDefinitionFr:
      'Hormones dosées dans le sang (seuils d’exclusion ESC en ambulatoire : NT-proBNP < 125 pg/mL, BNP < 35 pg/mL). Le sacubitril/valsartan peut augmenter le BNP mais pas le NT-proBNP.',
    articleSlug: 'examens-et-chiffres',
  },
  {
    id: 'traitement_de_fond',
    termFr: 'Traitement de fond (les 4 piliers / GDMT / FMT)',
    aliases: ['4 piliers', 'GDMT', 'FMT', 'traitement de fond'],
    shortDefinitionFr:
      'Socle des 4 classes médicamenteuses recommandées en Classe I dans l’ICFER : IEC ou ARNI, bêtabloquant, ARM et iSGLT2.',
    articleSlug: 'medicaments-insuffisance-cardiaque',
  },
  {
    id: 'titration',
    termFr: 'Titration (augmentation progressive des doses)',
    aliases: ['titration', 'uptitration', 'dose cible'],
    shortDefinitionFr:
      'Augmentation par paliers (souvent toutes les 1 à 2 semaines selon l’ESC 2026) vers les doses cibles testées dans les essais cliniques, selon la tolérance.',
    articleSlug: 'medicaments-insuffisance-cardiaque',
  },
  {
    id: 'iec',
    termFr: "IEC (inhibiteur de l'enzyme de conversion)",
    aliases: ['IEC', 'ACE inhibitor', 'ramipril', 'périndopril', 'énalapril', 'lisinopril'],
    shortDefinitionFr:
      'Pilier du traitement de fond relâchant les vaisseaux et allégeant le travail du cœur (ramipril, périndopril, énalapril, lisinopril).',
    articleSlug: 'medicaments-insuffisance-cardiaque',
  },
  {
    id: 'ara2',
    termFr: "ARA2 (antagoniste des récepteurs de l'angiotensine II)",
    aliases: ['ARA2', 'ARB', 'candésartan', 'valsartan', 'losartan'],
    shortDefinitionFr:
      'Alternative de la même famille que les IEC en cas d’intolérance (toux sèche ou angio-œdème), par exemple candésartan, valsartan ou losartan.',
    articleSlug: 'medicaments-insuffisance-cardiaque',
  },
  {
    id: 'arni',
    termFr: 'ARNI (sacubitril/valsartan — Entresto)',
    aliases: ['ARNI', 'Entresto', 'sacubitril/valsartan', 'sacubitril'],
    shortDefinitionFr:
      'Association d’un bloqueur de la néprilysine et du valsartan. Impose un délai d’au moins 36 heures après la dernière prise d’un IEC (risque d’angio-œdème).',
    articleSlug: 'medicaments-insuffisance-cardiaque',
  },
  {
    id: 'betabloquant',
    termFr: 'Bêtabloquant',
    aliases: ['bêtabloquant', 'bisoprolol', 'Cardensiel', 'carvédilol', 'nébivolol', 'métoprolol'],
    shortDefinitionFr:
      'Pilier du traitement de fond ralentissant et protégeant le cœur (bisoprolol / Cardensiel, carvédilol, nébivolol, métoprolol succinate) ; aussi traitement de 1re ligne de l’angor.',
    articleSlug: 'medicaments-insuffisance-cardiaque',
  },
  {
    id: 'arm',
    termFr: 'ARM (antagoniste des récepteurs minéralocorticoïdes)',
    aliases: ['ARM', 'MRA', 'spironolactone', 'Aldactone', 'éplérénone', 'Inspra'],
    shortDefinitionFr:
      'Pilier du traitement de fond (spironolactone / Aldactone, éplérénone / Inspra) réduisant la fibrose et la mortalité ; nécessite un suivi du potassium et des reins.',
    articleSlug: 'medicaments-insuffisance-cardiaque',
  },
  {
    id: 'isglt2',
    termFr: 'iSGLT2 (inhibiteur du SGLT2 / gliflozine)',
    aliases: ['iSGLT2', 'SGLT2', 'gliflozine', 'dapagliflozine', 'Forxiga', 'empagliflozine', 'Jardiance'],
    shortDefinitionFr:
      'Pilier du traitement de fond (dapagliflozine / Forxiga, empagliflozine / Jardiance), recommandé en Classe I quelle que soit la FEVG, même sans diabète.',
    articleSlug: 'medicaments-insuffisance-cardiaque',
  },
  {
    id: 'diuretique_anse',
    termFr: "Diurétique de l'anse",
    aliases: ['diurétique', 'furosémide', 'Lasilix', 'bumétanide', 'Burinex'],
    shortDefinitionFr:
      'Médicament éliminant l’excès de sel et d’eau (furosémide / Lasilix, bumétanide / Burinex) pour soulager l’essoufflement et les œdèmes.',
    articleSlug: 'medicaments-insuffisance-cardiaque',
  },
  {
    id: 'cst',
    termFr: 'CST (coefficient de saturation de la transferrine)',
    aliases: ['CST', 'TSAT', 'transferrine', 'ferritine', 'carence martiale'],
    shortDefinitionFr:
      'Pourcentage de saturation du transporteur du fer sanguin ; un CST < 20 % est un marqueur clé de carence en fer pouvant justifier du fer intraveineux.',
    articleSlug: 'carence-martiale-et-fer-iv',
  },
  {
    id: 'dfge_creatinine',
    termFr: 'DFGe / Créatinine',
    aliases: ['DFGe', 'eGFR', 'créatinine', 'fonction rénale'],
    shortDefinitionFr:
      'Mesures sanguines de la fonction rénale (DFGe en mL/min/1,73 m²). Une baisse initiale modérée du DFGe est souvent attendue au début des traitements de fond.',
    articleSlug: 'medicaments-effets-secondaires-suivi',
  },
  {
    id: 'hyperkaliemie',
    termFr: 'Hyperkaliémie',
    aliases: ['hyperkaliémie', 'potassium élevé', 'kaliémie'],
    shortDefinitionFr:
      'Taux trop élevé de potassium dans le sang. Peut survenir sous IEC, ARA2, ARNI ou ARM, d’où les bilans sanguins réguliers et l’éviction des sels au potassium.',
    articleSlug: 'medicaments-effets-secondaires-suivi',
  },
  {
    id: 'angioedeme',
    termFr: 'Angio-œdème',
    aliases: ['angio-œdème', 'angiœdème', 'œdème de Quincke'],
    shortDefinitionFr:
      'Gonflement brutal et rare des lèvres, de la langue ou de la gorge sous IEC ou sacubitril/valsartan (Entresto). Urgence vitale : appeler immédiatement le 15 (SAMU) ou le 112.',
    articleSlug: 'medicaments-effets-secondaires-suivi',
  },
  {
    id: 'ains',
    termFr: 'AINS (anti-inflammatoires non stéroïdiens)',
    aliases: ['AINS', 'NSAID', 'ibuprofène', 'kétoprofène', 'diclofénac'],
    shortDefinitionFr:
      'Antalgiques/anti-inflammatoires (ibuprofène, kétoprofène, diclofénac...) à éviter absolument dans l’insuffisance cardiaque en raison du risque rénal et de décompensation.',
    articleSlug: 'interactions-complements-aliments-medicaments',
  },
  {
    id: 'plan_jours_maladie',
    termFr: 'Plan « jours de maladie »',
    aliases: ['jours de maladie', 'sick day rules', 'vomissements', 'diarrhée'],
    shortDefinitionFr:
      'Consignes écrites personnalisées par votre médecin pour adapter ou suspendre temporairement certains médicaments (ex. iSGLT2, diurétique) en cas de déshydratation aiguë.',
    articleSlug: 'medicaments-effets-secondaires-suivi',
  },
  {
    id: 'dai',
    termFr: 'DAI (défibrillateur automatique implantable)',
    aliases: ['DAI', 'ICD', 'défibrillateur'],
    shortDefinitionFr:
      'Prothèse implantée qui détecte et interrompt les arythmies ventriculaires graves pour prévenir la mort subite ; n’améliore pas les symptômes quotidiens.',
    articleSlug: 'dispositifs-cardiaques-dai-crt',
  },
  {
    id: 'mort_subite_cardiaque',
    termFr: 'Mort subite cardiaque (MSC / SCD)',
    aliases: ['MSC', 'SCD', 'mort subite', 'sudden cardiac death'],
    shortDefinitionFr:
      "Décès inattendu d'origine cardiaque, le plus souvent provoqué par un trouble du rythme ventriculaire grave.",
    articleSlug: 'dispositifs-cardiaques-dai-crt',
  },
  {
    id: 's_dai',
    termFr: 'DAI sous-cutané (S-DAI / S-ICD)',
    aliases: ['S-DAI', 'S-ICD', 'DAI sous-cutané'],
    shortDefinitionFr:
      'Défibrillateur placé sous la peau sans sonde intracardiaque : moins de complications de sonde (PRAETORIAN), mais impossible si une stimulation (pacemaker) ou une CRT est nécessaire.',
    articleSlug: 'dispositifs-cardiaques-dai-crt',
  },
  {
    id: 'crt',
    termFr: 'CRT / CRT-P / CRT-D (resynchronisation cardiaque)',
    aliases: ['CRT', 'CRT-P', 'CRT-D', 'resynchronisation'],
    shortDefinitionFr:
      'Stimulateur biventriculaire aidant des ventricules désynchronisés à battre ensemble. Le CRT-P stimule uniquement ; le CRT-D associe resynchronisation et défibrillateur.',
    articleSlug: 'dispositifs-cardiaques-dai-crt',
  },
  {
    id: 'qrs_bbg',
    termFr: 'QRS / BBG (bloc de branche gauche)',
    aliases: ['QRS', 'BBG', 'LBBB', 'bloc de branche gauche'],
    shortDefinitionFr:
      'Mesures de l’ECG reflétant la vitesse de conduction électrique dans les ventricules. Un BBG avec QRS ≥ 150 ms est l’indication principale (Classe I) de CRT.',
    articleSlug: 'dispositifs-cardiaques-dai-crt',
  },
  {
    id: 'prevention_primaire_secondaire_dai',
    termFr: 'Prévention primaire vs secondaire (DAI)',
    aliases: ['prévention primaire', 'prévention secondaire DAI'],
    shortDefinitionFr:
      'Primaire : DAI posé avant tout trouble du rythme grave en raison d’un risque élevé. Secondaire : DAI posé après un arrêt cardiaque ou une arythmie ventriculaire sévère.',
    articleSlug: 'dispositifs-cardiaques-dai-crt',
  },
  {
    id: 'lifevest',
    termFr: 'LifeVest (gilet défibrillateur portable)',
    aliases: ['LifeVest', 'gilet défibrillateur', 'WCD'],
    shortDefinitionFr:
      'Gilet porté jour et nuit sous les vêtements comme passerelle temporaire (ESC 2026 Classe IIb) avant décision de DAI. Conduite automobile interdite en France pendant son indication.',
    articleSlug: 'gilet-defibrillateur-portable',
  },
  {
    id: 'cabg',
    termFr: 'Pontage aorto-coronarien (CABG)',
    aliases: ['pontage', 'CABG', 'pontage aorto-coronarien'],
    shortDefinitionFr:
      'Chirurgie cardiaque créant un nouveau conduit vasculaire pour contourner une ou plusieurs artères coronaires rétrécies ou obstruées.',
    articleSlug: 'revascularisation-pontage-stents',
  },
  {
    id: 'pci',
    termFr: 'Angioplastie coronaire (PCI / stents)',
    aliases: ['angioplastie', 'PCI', 'stent', 'stents'],
    shortDefinitionFr:
      'Ouverture d’une artère coronaire de l’intérieur par cathéter et ballonnet, le plus souvent avec pose d’un ressort métallique (stent).',
    articleSlug: 'revascularisation-pontage-stents',
  },
  {
    id: 'midcab',
    termFr: 'MIDCAB (pontage mini-invasif)',
    aliases: ['MIDCAB', 'pontage mini-invasif'],
    shortDefinitionFr:
      'Greffe de l’artère mammaire interne gauche sur l’IVA par une petite incision thoracique latérale, sans ouvrir le sternum.',
    articleSlug: 'occlusion-coronaire-chronique-cto',
  },
  {
    id: 'heart_team',
    termFr: 'Heart Team (équipe médico-chirurgicale)',
    aliases: ['Heart Team', 'équipe médico-chirurgicale'],
    shortDefinitionFr:
      'Réunion multidisciplinaire (cardiologue, chirurgien, cardiologue interventionnel et spécialiste de l’IC selon l’ESC 2026) statuant sur la revascularisation ou les valves.',
    articleSlug: 'revascularisation-pontage-stents',
  },
  {
    id: 'cto',
    termFr: 'CTO (occlusion coronaire chronique)',
    aliases: ['CTO', 'occlusion coronaire chronique'],
    shortDefinitionFr:
      'Artère coronaire complètement bouchée depuis au moins 3 mois, le territoire en aval étant généralement nourri par des vaisseaux collatéraux.',
    articleSlug: 'occlusion-coronaire-chronique-cto',
  },
  {
    id: 'collaterales_rentrop',
    termFr: 'Collatérales / grade de Rentrop',
    aliases: ['collatérales', 'Rentrop', 'grade de Rentrop'],
    shortDefinitionFr:
      'Vaisseaux de suppléance naturels contournant une artère occluse. Le grade de Rentrop (0 à 3) évalue le remplissage ; le grade 3 suffit souvent au repos mais rarement à l’effort.',
    articleSlug: 'occlusion-coronaire-chronique-cto',
  },
  {
    id: 'myocarde_hibernant_viabilite',
    termFr: 'Myocarde hibernant / viabilité',
    aliases: ['viabilité', 'myocarde hibernant', 'hibernating myocardium'],
    shortDefinitionFr:
      'Muscle cardiaque affaibli mais vivant. Dans REVIVED-BCIS2, la quantité de myocarde viable n’a pas prédit le bénéfice d’une angioplastie par stent.',
    articleSlug: 'examens-et-chiffres',
  },
  {
    id: 'thrombus_vg',
    termFr: 'Thrombus intraventriculaire gauche (thrombus VG)',
    aliases: ['thrombus VG', 'LV thrombus', 'caillot ventriculaire'],
    shortDefinitionFr:
      'Caillot sanguin fixé sur une zone peu mobile de la paroi interne du ventricule gauche (souvent l’apex après infarctus antérieur), justifiant une anticoagulation.',
    articleSlug: 'thrombus-vg-et-anticoagulants',
  },
  {
    id: 'echo_contraste',
    termFr: 'Échocardiographie de contraste',
    aliases: ['écho de contraste', 'échocardiographie de contraste', 'contrast echo'],
    shortDefinitionFr:
      'ETT avec injection d’un produit de contraste délimitant précisément la paroi interne du VG ; détecte davantage de thrombus VG qu’une ETT standard.',
    articleSlug: 'thrombus-vg-et-anticoagulants',
  },
  {
    id: 'anticoagulant',
    termFr: 'Anticoagulant (AVK / AOD)',
    aliases: ['anticoagulant', 'AVK', 'warfarine', 'Coumadine', 'Préviscan'],
    shortDefinitionFr:
      'Médicament freinant la coagulation sanguine (AVK nécessitant l’INR, ou AOD à dose fixe). Distinct de l’aspirine, qui est un antiagrégant plaquettaire.',
    articleSlug: 'thrombus-vg-et-anticoagulants',
  },
  {
    id: 'aod',
    termFr: 'AOD (anticoagulant oral direct / DOAC)',
    aliases: ['AOD', 'DOAC', 'apixaban', 'Eliquis', 'rivaroxaban', 'Xarelto', 'dabigatran', 'édoxaban'],
    shortDefinitionFr:
      'Anticoagulant oral à dose fixe (apixaban, rivaroxaban, édoxaban, dabigatran) ne nécessitant pas de contrôle régulier de l’INR.',
    articleSlug: 'thrombus-vg-et-anticoagulants',
  },
  {
    id: 'antiagregant',
    termFr: 'Antiagrégant plaquettaire',
    aliases: ['antiagrégant', 'aspirine', 'Kardégic', 'clopidogrel', 'Plavix', 'ticagrélor'],
    shortDefinitionFr:
      'Médicament empêchant les plaquettes de s’agréger (aspirine faible dose, clopidogrel, ticagrélor), prescrit au long cours dans la maladie coronaire.',
    articleSlug: 'cholesterol-et-prevention-secondaire',
  },
  {
    id: 'prevention_secondaire_coronaire',
    termFr: 'Prévention secondaire coronaire',
    aliases: ['prévention secondaire', 'secondary prevention'],
    shortDefinitionFr:
      "Ensemble des traitements destinés à prévenir un nouvel infarctus ou AVC lorsque la maladie coronaire est connue : baisse du LDL, antiagrégant plaquettaire, contrôle tensionnel, parfois colchicine.",
    articleSlug: 'cholesterol-et-prevention-secondaire',
  },
  {
    id: 'ldl_cholesterol',
    termFr: 'Cholestérol LDL (LDL-C)',
    aliases: ['LDL', 'LDL-C', 'mauvais cholestérol'],
    shortDefinitionFr:
      'Fraction athérogène du cholestérol. Objectif ESC après maladie coronaire : < 0,55 g/L (1,4 mmol/L) et réduction ≥ 50 % par rapport au taux initial (Classe I).',
    articleSlug: 'cholesterol-et-prevention-secondaire',
  },
  {
    id: 'statine',
    termFr: 'Statine',
    aliases: ['statine', 'rosuvastatine', 'atorvastatine', 'simvastatine'],
    shortDefinitionFr:
      'Traitement de première ligne en prévention secondaire coronaire pour abaisser le LDL. Ne pas arrêter une statine prescrite pour les coronaires.',
    articleSlug: 'cholesterol-et-prevention-secondaire',
  },
  {
    id: 'ezetimibe',
    termFr: 'Ézétimibe',
    aliases: ['ézétimibe', 'Ezetrol'],
    shortDefinitionFr:
      'Comprimé réduisant l’absorption intestinale du cholestérol, habituellement ajouté en premier à une statine pour atteindre la cible LDL.',
    articleSlug: 'cholesterol-et-prevention-secondaire',
  },
  {
    id: 'pcsk9',
    termFr: 'Inhibiteur de PCSK9 (anti-PCSK9)',
    aliases: ['anti-PCSK9', 'PCSK9', 'évolocumab', 'Repatha', 'alirocumab', 'Praluent'],
    shortDefinitionFr:
      'Traitement injectable abaissant fortement le LDL (évolocumab, alirocumab), recommandé (ESC Classe I) si statine + ézétimibe ne suffisent pas.',
    articleSlug: 'cholesterol-et-prevention-secondaire',
  },
  {
    id: 'acide_bempedoique',
    termFr: 'Acide bempédoïque',
    aliases: ['acide bempédoïque', 'bempedoic acid', 'Nilemdo'],
    shortDefinitionFr:
      'Comprimé hypolipémiant quotidien recommandé (ESC Classe I) en cas d’intolérance aux statines, ou en ajout à statine + ézétimibe.',
    articleSlug: 'cholesterol-et-prevention-secondaire',
  },
  {
    id: 'inclisiran',
    termFr: 'Inclisiran',
    aliases: ['inclisiran', 'Leqvio'],
    shortDefinitionFr:
      'Injection bisannuelle réduisant le LDL d’environ 50 % ; les essais sur les événements cardiovasculaires n’étaient pas encore publiés fin 2026.',
    articleSlug: 'cholesterol-et-prevention-secondaire',
  },
  {
    id: 'lpa',
    termFr: 'Lp(a) (lipoprotéine(a))',
    aliases: ['Lp(a)', 'lipoprotéine(a)'],
    shortDefinitionFr:
      'Particule lipidique héréditaire associée au risque cardiovasculaire ; l’ESC recommande de la doser une fois dans la vie. Aucun traitement spécifique n’a encore prouvé de bénéfice clinique.',
    articleSlug: 'cholesterol-et-prevention-secondaire',
  },
  {
    id: 'colchicine',
    termFr: 'Colchicine',
    aliases: ['colchicine'],
    shortDefinitionFr:
      'Anti-inflammatoire à faible dose (0,5 mg/jour) à envisager dans la maladie coronaire chronique (ESC 2024 Classe IIa), sous réserve de la fonction rénale et hors IC sévère.',
    articleSlug: 'cholesterol-et-prevention-secondaire',
  },
  {
    id: 'retrecissement_aortique',
    termFr: 'Rétrécissement aortique (sténose aortique)',
    aliases: ['rétrécissement aortique', 'sténose aortique', 'RAo', 'AS'],
    shortDefinitionFr:
      'Rétrécissement de la valve aortique : léger (> 1,5 cm², gradient < 20 mmHg), modéré (1,0–1,5 cm², 20–40 mmHg), sévère (< 1,0 cm², ≥ 40 mmHg).',
    articleSlug: 'stenose-aortique-fevg-reduite',
  },
  {
    id: 'ra_bas_debit_bas_gradient',
    termFr: 'Rétrécissement aortique bas débit, bas gradient',
    aliases: ['bas débit bas gradient', 'low-flow low-gradient'],
    shortDefinitionFr:
      'Sténose aortique sévère avec gradient < 40 mmHg car le ventricule affaibli (FEVG < 50 %) éjecte peu de sang (surface ≤ 1,0 cm² et SVi ≤ 35 mL/m²).',
    articleSlug: 'stenose-aortique-fevg-reduite',
  },
  {
    id: 'ra_pseudo_severe',
    termFr: 'Rétrécissement aortique pseudo-sévère',
    aliases: ['pseudo-sévère', 'sténose pseudo-sévère'],
    shortDefinitionFr:
      'Valve modérément rétrécie paraissant sévère faute de force d’ouverture du VG ; relève d’abord du traitement médical de l’insuffisance cardiaque.',
    articleSlug: 'stenose-aortique-fevg-reduite',
  },
  {
    id: 'echo_dobutamine',
    termFr: 'Échocardiographie de stress sous dobutamine (réserve de flux)',
    aliases: ['écho dobutamine', 'dobutamine', 'réserve de flux'],
    shortDefinitionFr:
      'Échographie sous perfusion de dobutamine distinguant un rétrécissement aortique vraiment sévère d’une forme pseudo-sévère ; la réserve de flux correspond à une hausse ≥ 20 % du volume d’éjection.',
    articleSlug: 'stenose-aortique-fevg-reduite',
  },
  {
    id: 'svi',
    termFr: "SVi (volume d'éjection indexé)",
    aliases: ['SVi', 'VESi', 'stroke volume index'],
    shortDefinitionFr:
      'Volume de sang éjecté par battement rapporté à la surface corporelle ; un SVi ≤ 35 mL/m² définit le bas débit dans l’évaluation du rétrécissement aortique.',
    articleSlug: 'stenose-aortique-fevg-reduite',
  },
  {
    id: 'tavi',
    termFr: 'TAVI (remplacement valvulaire aortique percutané)',
    aliases: ['TAVI', 'TAVR'],
    shortDefinitionFr:
      'Remplacement de la valve aortique par cathéter (le plus souvent par l’artère fémorale) sans ouverture du sternum, privilégié généralement à partir d’environ 70 ans.',
    articleSlug: 'maladies-associees',
  },
  {
    id: 'im_secondaire',
    termFr: 'Insuffisance mitrale secondaire',
    aliases: ['insuffisance mitrale', 'fuite mitrale', 'IM secondaire'],
    shortDefinitionFr:
      'Fuite de la valve mitrale due à la dilatation du ventricule gauche qui écarte les feuillets ; s’améliore dans environ 40 % des cas après optimisation des médicaments.',
    articleSlug: 'maladies-associees',
  },
  {
    id: 'teer',
    termFr: 'TEER / M-TEER (clip mitral)',
    aliases: ['TEER', 'M-TEER', 'MitraClip', 'clip mitral'],
    shortDefinitionFr:
      'Réparation percutanée bord à bord de la valve mitrale par pose d’un clip via cathéter chez des patients sélectionnés restant symptomatiques sous traitement optimal.',
    articleSlug: 'maladies-associees',
  },
  {
    id: 'fa',
    termFr: 'Fibrillation atriale (FA)',
    aliases: ['FA', 'AF', 'fibrillation auriculaire', 'fibrillation atriale'],
    shortDefinitionFr:
      'Trouble du rythme fréquent rendant les battements irréguliers et augmentant le risque d’AVC lorsqu’elle s’associe à une insuffisance cardiaque.',
    articleSlug: 'maladies-associees',
  },
  {
    id: 'cha2ds2_va',
    termFr: 'Score CHA2DS2-VA',
    aliases: ['CHA2DS2-VA', 'CHA2DS2-VASc'],
    shortDefinitionFr:
      'Score européen estimant le risque d’AVC dans la fibrillation atriale. L’insuffisance cardiaque compte 1 point ; une anticoagulation est recommandée dès 2 points.',
    articleSlug: 'maladies-associees',
  },
  {
    id: 'saos_sacs',
    termFr: 'SAOS / SACS (apnée obstructive / centrale du sommeil)',
    aliases: ['SAOS', 'SACS', 'OSA', 'CSA', 'apnée du sommeil', 'Cheyne-Stokes'],
    shortDefinitionFr:
      'SAOS : fermeture nocturne des voies aériennes malgré l’effort respiratoire. SACS : pauses de la commande respiratoire cérébrale (souvent Cheyne-Stokes).',
    articleSlug: 'apnee-du-sommeil-insuffisance-cardiaque',
  },
  {
    id: 'iah',
    termFr: "IAH (index d'apnées-hypopnées)",
    aliases: ['IAH', 'AHI', 'index apnées-hypopnées'],
    shortDefinitionFr:
      'Nombre de pauses ou diminutions respiratoires par heure de sommeil : modéré à partir de 15/h, sévère au-dessus de 30/h.',
    articleSlug: 'apnee-du-sommeil-insuffisance-cardiaque',
  },
  {
    id: 'ppc_cpap',
    termFr: 'PPC (pression positive continue / CPAP)',
    aliases: ['PPC', 'CPAP', 'pression positive continue'],
    shortDefinitionFr:
      'Masque nocturne insufflant un flux d’air continu pour maintenir la gorge ouverte ; traitement de référence du SAOS, pris en charge en France sous condition d’observance.',
    articleSlug: 'apnee-du-sommeil-insuffisance-cardiaque',
  },
  {
    id: 'asv',
    termFr: 'ASV (servo-ventilation adaptative)',
    aliases: ['ASV', 'servo-ventilation adaptative'],
    shortDefinitionFr:
      'Appareil ventilatoire nocturne contre-indiqué dans l’ICFER avec apnée surtout centrale (ESC 2026 Classe III) en raison de la surmortalité observée dans SERVE-HF.',
    articleSlug: 'apnee-du-sommeil-insuffisance-cardiaque',
  },
  {
    id: 'ivabradine',
    termFr: 'Ivabradine (Procoralan)',
    aliases: ['ivabradine', 'Procoralan'],
    shortDefinitionFr:
      'Traitement additionnel ralentissant le rythme sinusal (FEVG ≤ 35 %, rythme sinusal, FC > 70 bpm ou ≥ 75 bpm selon l’AMM UE malgré bêtabloquant maximal ; ESC Classe IIa).',
    articleSlug: 'medicaments-additionnels-ivabradine-digoxine-vericiguat',
  },
  {
    id: 'digoxine_digitoxine',
    termFr: 'Digoxine / digitoxine (digitaliques)',
    aliases: ['digoxine', 'digitoxine', 'digitaliques'],
    shortDefinitionFr:
      'Option additionnelle si symptômes persistants à FEVG ≤ 40 % (ESC 2026 Classe IIa) ou pour ralentir la FA. Surveiller la fonction rénale et les signes de surdosage.',
    articleSlug: 'medicaments-additionnels-ivabradine-digoxine-vericiguat',
  },
  {
    id: 'vericiguat',
    termFr: 'Vériciguat (Verquvo)',
    aliases: ['vériciguat', 'Verquvo'],
    shortDefinitionFr:
      'Stimulateur de la guanylate cyclase soluble (ESC 2026 Classe IIb) indiqué après aggravation récente (VICTORIA). Contre-indiqué avec les inhibiteurs de la PDE5 (sildénafil...).',
    articleSlug: 'medicaments-additionnels-ivabradine-digoxine-vericiguat',
  },
  {
    id: 'finerenone',
    termFr: 'Finérénone',
    aliases: ['finérénone', 'Kerendia'],
    shortDefinitionFr:
      'ARM non stéroïdien démontré dans l’IC à FEVG ≥ 40 % et dans le diabète de type 2 avec maladie rénale ; essai FINALITY-HF encore en cours sous 40 %.',
    articleSlug: 'finerenone-et-nouveaux-arm',
  },
  {
    id: 'chelateur_potassium',
    termFr: 'Chélateur de potassium',
    aliases: ['chélateur de potassium', 'patiromer', 'Veltassa', 'Lokelma'],
    shortDefinitionFr:
      'Poudre orale éliminant le potassium par voie digestive afin de permettre la poursuite des ARM malgré une hyperkaliémie ; bénéfice direct sur la survie non démontré.',
    articleSlug: 'finerenone-et-nouveaux-arm',
  },
  {
    id: 'telesurveillance',
    termFr: 'Télésurveillance de l’insuffisance cardiaque',
    aliases: ['télésurveillance', 'telemonitoring'],
    shortDefinitionFr:
      'Transmission à domicile du poids et des symptômes à une équipe dédiée (non surveillée 24 h/24). ESC 2026 Classe IIb ; remboursée en France depuis 2023 pour les patients éligibles.',
    articleSlug: 'telesurveillance-insuffisance-cardiaque',
  },
  {
    id: 'cardiomems',
    termFr: 'CardioMEMS (capteur de pression artérielle pulmonaire)',
    aliases: ['CardioMEMS', 'capteur de pression pulmonaire'],
    shortDefinitionFr:
      'Capteur implanté dans l’artère pulmonaire détectant la congestion avant les symptômes (ESC Classe IIa en NYHA III avec hospitalisation récente). Non remboursé en France (HAS 2021).',
    articleSlug: 'telesurveillance-insuffisance-cardiaque',
  },
  {
    id: 'ald_5_13',
    termFr: 'ALD 5 / ALD 13 (affection de longue durée)',
    aliases: ['ALD', 'ALD 5', 'ALD 13', 'protocole de soins'],
    shortDefinitionFr:
      'Prise en charge à 100 % du tarif de l’Assurance Maladie pour les soins inscrits au protocole de soins (ALD 5 insuffisance cardiaque grave ; ALD 13 maladie coronaire), hors dépassements.',
    articleSlug: 'vivre-avec-insuffisance-cardiaque-en-france',
  },
  {
    id: 'smr_cardiovasculaire',
    termFr: 'SMR cardiovasculaire (réadaptation cardiaque)',
    aliases: ['SMR', 'réadaptation cardiaque', 'SSR cardiaque'],
    shortDefinitionFr:
      'Service de soins médicaux et de réadaptation cardiovasculaire (en hospitalisation ou hôpital de jour) combinant réentraînement à l’effort encadré et éducation thérapeutique.',
    articleSlug: 'readaptation-cardiaque-et-activite-physique',
  },
  {
    id: 'prado_ic',
    termFr: 'PRADO insuffisance cardiaque',
    aliases: ['PRADO', 'PRADO IC'],
    shortDefinitionFr:
      'Programme de retour à domicile de l’Assurance Maladie après une hospitalisation pour insuffisance cardiaque, coordonnant médecin traitant, infirmière et cardiologue.',
    articleSlug: 'vivre-avec-insuffisance-cardiaque-en-france',
  },
  {
    id: 'ipa_infirmiere_ic',
    termFr: 'IPA / Infirmière insuffisance cardiaque',
    aliases: ['IPA', 'infirmière IC', 'infirmière insuffisance cardiaque', 'infirmier en pratique avancée'],
    shortDefinitionFr:
      'Infirmier(ère) en pratique avancée (master d’État) ou spécialisé(e) assurant le suivi des cardiopathies stabilisées, les bilans, le renouvellement/adaptation d’ordonnances et la prescription d’APA, avec accès direct en structure coordonnée depuis janvier 2025 (100 % tarif sous ALD).',
    articleSlug: 'reseau-de-soins-et-aides-sociales-france',
  },
  {
    id: 'medecin_agree',
    termFr: 'Médecin agréé (permis de conduire)',
    aliases: ['médecin agréé', 'permis de conduire', 'commission médicale'],
    shortDefinitionFr:
      'Médecin habilité par la préfecture (obligatoirement distinct du médecin traitant) qui évalue l’aptitude médicale à la conduite selon l’arrêté du 28 mars 2022.',
    articleSlug: 'regles-conduite-automobile',
  },
  {
    id: 'groupe_1_2_permis',
    termFr: 'Permis Groupe 1 / Groupe 2',
    aliases: ['Groupe 1', 'Groupe 2', 'groupe léger', 'groupe lourd'],
    shortDefinitionFr:
      'Catégories européennes du permis : groupe 1 (léger) = voitures et motos ; groupe 2 (lourd) = poids lourds et transport en commun (exigences plus strictes, DAI incompatible).',
    articleSlug: 'regles-conduite-automobile',
  },
  {
    id: 'aeras_lemoine',
    termFr: 'Convention AERAS et loi Lemoine',
    aliases: ['AERAS', 'loi Lemoine', 'assurance emprunteur'],
    shortDefinitionFr:
      'Suppression du questionnaire de santé pour les prêts immobiliers ≤ 200 000 € par personne remboursés avant 60 ans ; au-delà, examen AERAS jusqu’à 3 niveaux (pas de droit à l’oubli cardiaque).',
    articleSlug: 'vivre-avec-insuffisance-cardiaque-en-france',
  },
  {
    id: 'temps_partiel_therapeutique',
    termFr: 'Temps partiel thérapeutique (TPT)',
    aliases: ['TPT', 'mi-temps thérapeutique', 'temps partiel thérapeutique'],
    shortDefinitionFr:
      'Reprise progressive du travail prescrite par le médecin avec complément par indemnités journalières ; ne nécessite plus d’arrêt à temps plein préalable depuis 2019.',
    articleSlug: 'vivre-avec-insuffisance-cardiaque-en-france',
  },
  {
    id: 'rqth',
    termFr: 'RQTH (reconnaissance de la qualité de travailleur handicapé)',
    aliases: ['RQTH', 'MDPH'],
    shortDefinitionFr:
      'Statut délivré par la MDPH ouvrant droit aux aménagements de poste et aux aides au maintien dans l’emploi, sans obligation de le déclarer à l’employeur si vous ne le souhaitez pas.',
    articleSlug: 'vivre-avec-insuffisance-cardiaque-en-france',
  },
  {
    id: 'cmd_double_pathologie',
    termFr: 'Cardiomyopathie dilatée (CMD) / Double pathologie',
    aliases: ['CMD', 'DCM', 'double pathologie', 'fibrose médio-pariétale'],
    shortDefinitionFr:
      'Dilatation et faiblesse du VG non expliquées uniquement par les coronaires (génétique, myocardite, alcool...). Peut coexister avec une coronaropathie (double pathologie) et présenter une fibrose médio-pariétale à l’IRM.',
    articleSlug: 'confirmer-la-cause-dysfonction-vg',
  },
  {
    id: 'soins_support_anticipation',
    termFr: 'Soins de support / soins palliatifs et directives anticipées',
    aliases: ['soins palliatifs', 'soins de support', 'directives anticipées', 'TCC', 'CBT'],
    shortDefinitionFr:
      'Accompagnement global des symptômes, du moral (incluant la TCC) et des choix futurs de soins, proposé en parallèle des traitements à tout stade de la maladie (HFA 2020).',
    articleSlug: 'soins-de-support-et-anticipation',
  },
  {
    id: 'classe_recommandation',
    termFr: 'Classe de recommandation (I, IIa, IIb, III)',
    aliases: ['Classe I', 'Classe IIa', 'Classe IIb', 'Classe III'],
    shortDefinitionFr:
      'Force d’une recommandation ESC : I = recommandé ; IIa = doit être envisagé ; IIb = peut être envisagé ; III = non recommandé ou délétère.',
    articleSlug: 'recommandations-comparees-esc-us-nice',
  },
  {
    id: 'cellules_ips',
    termFr: 'Cellules iPS (cellules souches pluripotentes induites)',
    aliases: ['cellules iPS', 'iPS', 'iPSC', 'patch cardiaque'],
    shortDefinitionFr:
      "Cellules adultes (peau ou sang) reprogrammées en laboratoire en cellules souches pouvant former des cellules de muscle cardiaque. Utilisées à partir de donneurs dans les patchs et feuillets expérimentaux (BioVAT-HF, RiHEART, LAPiS) ; un traitement immunosuppresseur est alors nécessaire.",
    articleSlug: 'cellules-souches-et-therapies-regeneratives',
  },
  {
    id: 'cellules_mesenchymateuses',
    termFr: 'Cellules stromales / précurseurs mésenchymateuses (CSM / CPM / MSC / MPC)',
    aliases: ['CSM', 'CPM', 'MSC', 'MPC', 'cellules mésenchymateuses'],
    shortDefinitionFr:
      "Cellules de soutien prélevées dans la moelle osseuse (du patient ou d'un donneur) testées comme traitement de l'insuffisance cardiaque ; le plus grand essai contrôlé contre procédure factice (DREAM-HF) a été négatif sur son critère principal.",
    articleSlug: 'cellules-souches-et-therapies-regeneratives',
  },
  {
    id: 'procedure_factice_sham',
    termFr: 'Procédure factice (sham)',
    aliases: ['sham', 'procédure factice', 'procédure simulée'],
    shortDefinitionFr:
      "Intervention simulée (par exemple introduction d'un cathéter sans injection active) dans le groupe témoin afin que ni les patients ni les évaluateurs ne sachent qui a été traité ; constitue le test le plus fiable des thérapies cellulaires injectées.",
    articleSlug: 'cellules-souches-et-therapies-regeneratives',
  },
  {
    id: 'therapie_cellulaire_mti_atmp',
    termFr: 'Thérapie cellulaire (cellules souches) / MTI (ATMP)',
    aliases: ['thérapie cellulaire', 'cellules souches', 'MTI', 'ATMP', 'médecine régénérative'],
    shortDefinitionFr:
      "Traitement utilisant des cellules vivantes pour tenter de réparer le cœur. Dans l'UE, les médicaments de thérapie innovante (MTI / ATMP) relèvent d'une autorisation centralisée ; en juin 2026, aucun n'est autorisé pour le cœur. Les injections payantes hors essai enregistré ne sont pas un traitement prouvé.",
    articleSlug: 'cellules-souches-et-therapies-regeneratives',
  },
  {
    id: 'agoniste_glp1_incretine',
    termFr: 'Agoniste du GLP-1 / incrétine (sémaglutide, tirzépatide, rétatrutide)',
    aliases: ['GLP-1', 'incrétine', 'sémaglutide', 'Wegovy', 'Ozempic', 'tirzépatide', 'Mounjaro', 'rétatrutide'],
    shortDefinitionFr:
      "Médicaments imitant des hormones digestives pour abaisser la glycémie et le poids. Bénéfice démontré sur les infarctus/AVC et l'HFpEF, mais non prouvé dans l'ICFER (SOUL HR 0,98 ; hausse modérée de fréquence cardiaque et déshydratation digestive à surveiller).",
    articleSlug: 'medicaments-glp1-et-incretines',
  },
  {
    id: 'hepcidine_ferroportine',
    termFr: 'Hepcidine / ferroportine',
    aliases: ['hepcidine', 'ferroportine', 'absorption du fer'],
    shortDefinitionFr:
      "L'hepcidine est une hormone souvent élevée dans l'insuffisance cardiaque qui ferme la ferroportine, porte de sortie du fer hors de l'intestin : elle explique pourquoi le fer oral recharge mal les réserves par rapport au fer intraveineux.",
    articleSlug: 'fer-oral-haute-biodisponibilite',
  },
  {
    id: 'hiit_readaptation',
    termFr: 'HIIT (entraînement fractionné à haute intensité)',
    aliases: ['HIIT', 'entraînement fractionné', 'interval training'],
    shortDefinitionFr:
      "Alternance d'intervalles d'effort soutenu et de récupération. Dans le plus grand essai dédié à l'ICFER (SMARTEX-HF), le HIIT n'a pas fait mieux que l'endurance continue modérée sur le remodelage du ventricule gauche ou la capacité d'effort.",
    articleSlug: 'musculation-vs-endurance-readaptation-cardiaque',
  },
  {
    id: 'anevrisme_vg',
    termFr: 'Anévrisme et pseudo-anévrisme du ventricule gauche',
    aliases: ['anévrisme VG', 'LV aneurysm', 'pseudo-anévrisme', 'faux anévrisme'],
    shortDefinitionFr:
      "L'anévrisme VG est une zone cicatricielle amincie qui se bombe vers l'extérieur après un infarctus (souvent à l'apex), augmentant le risque de thrombus VG ; le pseudo-anévrisme est une rupture contenue par le péricarde relevant habituellement d'une chirurgie rapide.",
    articleSlug: 'anevrisme-ventricule-gauche',
  },
  {
    id: 'akinesie_dyskinesie',
    termFr: 'Akinésie / dyskinésie',
    aliases: ['akinésie', 'dyskinésie', 'paroi akinétique'],
    shortDefinitionFr:
      "Sur une ETT ou une IRM cardiaque, segment myocardique qui ne se contracte plus (akinétique) ou qui se bombe vers l'extérieur lors de la systole (dyskinétique), généralement cicatriciel après un infarctus.",
    articleSlug: 'anevrisme-ventricule-gauche',
  },
  {
    id: 'tapse',
    termFr: 'TAPSE et PAPS / sPAP (ventricule droit et pression pulmonaire)',
    aliases: ['TAPSE', 'PAPS', 'sPAP', 'hypertension pulmonaire', 'ventricule droit'],
    shortDefinitionFr:
      "Mesures échocardiographiques évaluant la contraction du ventricule droit (TAPSE, en mm) et la pression artérielle pulmonaire systolique estimée (PAPS). Dans l'HTP liée au cœur gauche (groupe 2), on optimise d'abord le cœur gauche ; les médicaments de l'HTAP sont contre-indiqués (ESC/ERS 2022 Classe III).",
    articleSlug: 'ventricule-droit-et-hypertension-pulmonaire',
  },
  {
    id: 'lvad',
    termFr: 'LVAD (assistance circulatoire mécanique / HeartMate 3)',
    aliases: ['LVAD', 'assistance circulatoire', 'HeartMate 3', 'pompe cardiaque'],
    shortDefinitionFr:
      "Pompe mécanique implantée dans le ventricule gauche en cas d'insuffisance cardiaque avancée (stade D), en pont vers la greffe ou en thérapie définitive (survie à 5 ans de 58,4 % avec HeartMate 3 dans MOMENTUM 3). Requiert un anticoagulant AVK et une antibioprophylaxie dentaire.",
    articleSlug: 'assistance-circulatoire-lvad',
  },
  {
    id: 'intermacs',
    termFr: 'Profils INTERMACS (1 à 7) et repère « I NEED HELP »',
    aliases: ['INTERMACS', 'I NEED HELP', 'stade D', 'IC avancée'],
    shortDefinitionFr:
      "Échelle classant la gravité de l'insuffisance cardiaque avancée de 1 (choc critique) à 7 (NYHA III stable) pour guider le moment d'un bilan de LVAD ou de greffe ; « I NEED HELP » regroupe les signes cliniques déclenchant l'orientation précoce vers un centre expert.",
    articleSlug: 'insuffisance-cardiaque-avancee-stade-d',
  },
  {
    id: 'efx_cpet',
    termFr: 'EFX / CPET (pic de VO2, pente VE/VCO2, RER, classe de Weber)',
    aliases: ['EFX', 'CPET', 'VO2 max', 'pic de VO2', 'VE/VCO2', 'classe de Weber'],
    shortDefinitionFr:
      "Épreuve d'effort avec mesure des échanges gazeux : évalue objectivement l'aptitude cardiaque (pic de VO2 ≤ 12 mL/kg/min sous bêtabloquant ou ≤ 14 hors bêtabloquant dans le bilan d'IC avancée ; pente VE/VCO2 > 35 = haut risque ; RER ≥ 1,05–1,10 confirme un effort maximal) et calibre la réadaptation.",
    articleSlug: 'efx-strain-troponine-et-imagerie-cardiaque',
  },
  {
    id: 'gls',
    termFr: 'GLS (strain longitudinal global)',
    aliases: ['GLS', 'strain', 'strain longitudinal global'],
    shortDefinitionFr:
      "Mesure échocardiographique du raccourcissement longitudinal du myocarde (normal autour de -18 % à -22 % ; proche de 0 = plus faible). Détecte une atteinte subtile plus tôt que la FEVG, mais varie jusqu'à 3,7 points entre constructeurs : suivre sur le même appareil.",
    articleSlug: 'efx-strain-troponine-et-imagerie-cardiaque',
  },
  {
    id: 'troponine_chronique',
    termFr: 'Lésion myocardique chronique (troponine ultrasensible)',
    aliases: ['hs-cTn', 'hs-cTnT', 'hs-cTnI', 'troponine chronique', 'lésion myocardique chronique'],
    shortDefinitionFr:
      "Élévation modérée et stable de la troponine cardiaque ultrasensible (> 99e percentile sans cinétique aiguë ni ischémie), présente chez plus de la moitié des patients ICFER stables et distincte d'un infarctus aigu.",
    articleSlug: 'efx-strain-troponine-et-imagerie-cardiaque',
  },
  {
    id: 'holter_patch_ilr',
    termFr: 'Holter / patch ECG / moniteur cardiaque implantable (ILR)',
    aliases: ['Holter', 'patch ECG', 'ILR', 'moniteur implantable'],
    shortDefinitionFr:
      "Enregistreurs du rythme cardiaque choisis selon la fréquence des symptômes : Holter 24–48 h, patch sans fil 7–14 jours (intermittent) ou moniteur sous-cutané ILR (~3 ans pour syncope inexpliquée ; inutile si un DAI/CRT est déjà implanté).",
    articleSlug: 'efx-strain-troponine-et-imagerie-cardiaque',
  },
  {
    id: 'coroscanner_ccta',
    termFr: 'Coroscanner (CCTA)',
    aliases: ['coroscanner', 'CCTA', 'scanner coronaire'],
    shortDefinitionFr:
      "Scanner 3D injecté des artères coronaires utile surtout pour exclure une coronaropathie obstructive en cas de probabilité faible à modérée (ESC 2026 IIa C), limité par de fortes calcifications ou une FA rapide.",
    articleSlug: 'efx-strain-troponine-et-imagerie-cardiaque',
  },
  {
    id: 'tv_nsvt',
    termFr: 'TV / TVNS (tachycardie ventriculaire soutenue et non soutenue)',
    aliases: ['TV', 'VT', 'TVNS', 'NSVT', 'tachycardie ventriculaire'],
    shortDefinitionFr:
      "Rythme rapide naissant dans les ventricules (souvent autour d'une cicatrice d'infarctus). Non soutenue (TVNS) : ≥ 3 battements s'arrêtant en < 30 secondes ; soutenue (TV) : > 30 secondes ou nécessitant ATP, choc, médicament ou ablation.",
    articleSlug: 'arythmies-ventriculaires-et-antiarythmiques',
  },
  {
    id: 'esv_pvc_cm',
    termFr: 'ESV (extrasystoles ventriculaires) et cardiomyopathie induite (PVC-CM)',
    aliases: ['ESV', 'PVC', 'PVC-CM', 'extrasystoles ventriculaires', 'charge en ESV'],
    shortDefinitionFr:
      "Battements prématurés ventriculaires ; habituellement bénins en petit nombre, mais une charge quotidienne ≥ 10 % (souvent manquée sur un Holter de 24 h) peut affaiblir le VG ou perturber une CRT (ablation ESC 2022 Classe I C).",
    articleSlug: 'arythmies-ventriculaires-et-antiarythmiques',
  },
  {
    id: 'atp_orage_rythmique',
    termFr: 'ATP (stimulation antitachycardique) et orage rythmique',
    aliases: ['ATP', 'stimulation antitachycardique', 'orage rythmique', 'VT storm'],
    shortDefinitionFr:
      "L'ATP est une salve indolore du DAI interrompant une TV avant le choc (≥ 5 ATP en 6 mois = instabilité à évaluer). L'orage rythmique (≥ 3 épisodes de TV/FV en 24 h ou ≥ 2 chocs) est une urgence vitale : appeler immédiatement le 15 ou le 112.",
    articleSlug: 'arythmies-ventriculaires-et-antiarythmiques',
  },
  {
    id: 'amiodarone',
    termFr: 'Amiodarone (Cordarone)',
    aliases: ['amiodarone', 'Cordarone'],
    shortDefinitionFr:
      "Principal antiarythmique oral utilisable dans l'ICFER ischémique (contrairement aux classes IC et à la dronédarone, contre-indiqués). Sa longue demi-vie (20–100 jours) impose un suivi tous les 6 mois (TSH, foie), ECG, vigilance pulmonaire, protection solaire et contrôle des interactions.",
    articleSlug: 'arythmies-ventriculaires-et-antiarythmiques',
  },
  {
    id: 'resistance_diuretiques',
    termFr: 'Résistance aux diurétiques et blocage séquentiel du néphron',
    aliases: ['résistance aux diurétiques', 'blocage séquentiel', 'natriurèse', 'acétazolamide', 'métolazone'],
    shortDefinitionFr:
      "Persistance d'une congestion malgré de fortes doses de diurétique de l'anse (signe d'alerte d'IC avancée ESC 2026). Le blocage séquentiel associe temporairement un thiazidique ou de l'acétazolamide IV à l'hôpital, sous contrôle strict du potassium et des reins.",
    articleSlug: 'escalade-et-resistance-aux-diuretiques',
  },
  {
    id: 'angor_trinitrine',
    termFr: 'Angor, trinitrine (Natispray) et tolérance aux dérivés nitrés',
    aliases: ['angor', 'trinitrine', 'GTN', 'Natispray', 'tolérance nitrés', 'patch nitré'],
    shortDefinitionFr:
      "Douleur ou gêne thoracique d'ischémie soulagée par la trinitrine rapide (Natispray, strictement contre-indiquée avec les IPDE-5). Les patchs nitrés longue durée imposent une fenêtre libre de 8 à 12 heures/jour pour éviter la perte d'efficacité.",
    articleSlug: 'angor-et-medicaments-anti-angineux',
  },
  {
    id: 'ranolazine_nicorandil_trimetazidine',
    termFr: 'Ranolazine (Ranexa), nicorandil et trimétazidine (Vastarel)',
    aliases: ['ranolazine', 'Ranexa', 'nicorandil', 'trimétazidine', 'Vastarel'],
    shortDefinitionFr:
      "Anti-angineux additionnels à visée symptomatique sans bénéfice prouvé sur la survie : ranolazine sans effet tensionnel (non remboursée en France, augmente la digoxine), nicorandil à risque d'ulcérations (SMR insuffisant HAS 2026) et trimétazidine non remboursée.",
    articleSlug: 'angor-et-medicaments-anti-angineux',
  },
  {
    id: 'bitherapie_dapt_ipp',
    termFr: 'Bithérapie antiplaquettaire (DAPT) et protecteur gastrique (IPP)',
    aliases: ['DAPT', 'bithérapie antiplaquettaire', 'IPP', 'pantoprazole', 'oméprazole'],
    shortDefinitionFr:
      "Association d'aspirine et d'un inhibiteur de P2Y12 après stent ou infarctus (souvent 6 à 12 mois, ou 1–3 mois si haut risque hémorragique). Un IPP protège l'estomac (Classe I A ESC si haut risque) ; éviter oméprazole/ésoméprazole avec le clopidogrel (préférer le pantoprazole).",
    articleSlug: 'antiplaquettaires-bitherapie-et-protection-gastrique',
  },
  {
    id: 'acidocetose_euglycemique',
    termFr: 'Acidocétose euglycémique (eKA / euDKA)',
    aliases: ['acidocétose euglycémique', 'eKA', 'euDKA', 'acidocétose', 'corps cétoniques'],
    shortDefinitionFr:
      "Complication rare mais grave des iSGLT2 caractérisée par une accumulation d'acide et de cétones sanguines malgré une glycémie normale ou modérée (< 2,50 g/L), favorisée par une chirurgie, un jeûne, une gastro-entérite, un régime cétogène ou un excès d'alcool.",
    articleSlug: 'these-jours-de-maladie-sraa-vs-isglt2',
  },
  {
    id: 'mins_periop',
    termFr: 'MINS (lésion myocardique après chirurgie non cardiaque)',
    aliases: ['MINS', 'lésion myocardique post-opératoire', 'chirurgie non cardiaque'],
    shortDefinitionFr:
      "Élévation post-opératoire de la troponine révélant une souffrance myocardique souvent silencieuse autour d'une chirurgie non cardiaque, dépistée par biomarqueurs péri-opératoires chez les patients à risque (ESC 2022, AHA/ACC 2024).",
    articleSlug: 'chirurgie-soins-dentaires-et-jours-de-maladie',
  },
  {
    id: 'antibioprophylaxie_endocardite',
    termFr: "Antibioprophylaxie de l'endocardite infectieuse (soins dentaires)",
    aliases: ['antibioprophylaxie', 'endocardite', 'soins dentaires', 'amoxicilline dentaire'],
    shortDefinitionFr:
      "Prise unique d'antibiotique avant un soin dentaire invasif réservée aux hauts risques (prothèse/TAVI, MitraClip/TEER, LVAD, antécédent d'endocardite ; clindamycine retirée ; HAS oct. 2024). Non indiquée pour l'ICFER, les stents ou les DAI/CRT seuls.",
    articleSlug: 'chirurgie-soins-dentaires-et-jours-de-maladie',
  },
  {
    id: 'hypophosphatemie',
    termFr: 'Hypophosphatémie (fer intraveineux FCM vs FDI)',
    aliases: ['hypophosphatémie', 'phosphate', 'carboxymaltose ferrique', 'dérisomaltose ferrique', 'Ferinject', 'Monofer'],
    shortDefinitionFr:
      "Baisse du phosphate sanguin fréquente et transitoire sous carboxymaltose ferrique (FCM : 51,9 % modérée à sévère à J21 dans HEART-FID, vs ~4–8 % sous dérisomaltose ferrique / FDI), exposant rarement à une ostéomalacie en cas de cures répétées de FCM.",
    articleSlug: 'these-fer-iv-et-isglt2-quadritherapie',
  },
  {
    id: 'berberine',
    termFr: 'Berbérine',
    aliases: ['berbérine', 'berberine'],
    shortDefinitionFr:
      "Alcaloïde végétal vendu en complément pour le cholestérol ou la glycémie, sans essai clinique sur événements cardiovasculaires dans l'ICFER et susceptible d'interagir avec les enzymes CYP/P-gp et plusieurs traitements cardiaques.",
    articleSlug: 'berberine-cholesterol-et-interactions',
  },
  {
    id: 'decongestionnants_oraux',
    termFr: 'Décongestionnants oraux (pseudoéphédrine, phényléphrine)',
    aliases: ['décongestionnants', 'pseudoéphédrine', 'phényléphrine', 'rhume'],
    shortDefinitionFr:
      "Vasoconstricteurs contre le nez bouché à éviter dans l'ICFER ischémique. Depuis le 11 décembre 2024, toute la pseudoéphédrine orale est sur ordonnance (Liste I) en France pour risques d'infarctus et d'AVC ; plusieurs spécialités contiennent aussi de l'ibuprofène.",
    articleSlug: 'cafeine-boissons-energisantes-et-stimulants',
  },
  {
    id: 'ndlvc_coronaropathie_fortuite',
    termFr: 'NDLVC et coronaropathie fortuite (bystander CAD)',
    aliases: ['NDLVC', 'bystander CAD', 'coronaropathie fortuite', 'cardiomyopathie non dilatée'],
    shortDefinitionFr:
      "La NDLVC (ESC 2023) désigne une cicatrice non ischémique ou hypokinésie du VG sans dilatation ; une coronaropathie fortuite coexiste avec une cardiomyopathie primitive sans en être la cause unique (~1 patient coronarien sur 6 adressé en IRM dans Bawaskar 2024).",
    articleSlug: 'confirmer-la-cause-dysfonction-vg',
  },
  {
    id: 'amylose_sarcoidose_cardiaque',
    termFr: 'Amylose cardiaque (scintigraphie osseuse) et sarcoïdose (TEP-FDG)',
    aliases: ['amylose cardiaque', 'ATTR', 'AL', 'scintigraphie osseuse', 'Perugini', 'sarcoïdose cardiaque', 'TEP-FDG'],
    shortDefinitionFr:
      "Causes infiltratives ou inflammatoires pouvant mimer ou accompagner une coronaropathie : l'amylose ATTR se confirme par scintigraphie osseuse (grade 2–3) uniquement après négativité des 3 tests monoclonaux (SPIE, UPIE, chaînes légères libres) ; la sarcoïdose utilise la TEP-18F-FDG après préparation diététique stricte.",
    articleSlug: 'confirmer-la-cause-dysfonction-vg',
  },
  {
    id: 'niveau_preuve_esc_2026',
    termFr: 'Niveau de preuve ESC 2026 (A, B1, B2, C) et score KCCQ',
    aliases: ['B1', 'B2', 'niveau de preuve', 'KCCQ', 'Kansas City'],
    shortDefinitionFr:
      "L'ESC 2026 divise le niveau B thérapeutique en B1 (essai randomisé puissant) et B2 (non randomisé ou petits essais). Le KCCQ (0 à 100) est le questionnaire de référence mesurant symptômes et qualité de vie dans l'IC, plus sensible que la classe NYHA.",
    articleSlug: 'dysfonction-vg-asymptomatique-stade-b',
  },
  {
    id: 'allopurinol_febuxostat_ase',
    termFr: 'Allopurinol / fébuxostat (goutte) et ASE (anémie hors fer)',
    aliases: ['allopurinol', 'fébuxostat', 'Adenuric', 'ASE', 'ESA', 'darbépoétine'],
    shortDefinitionFr:
      "Dans la goutte avec ICFER, l'allopurinol est la 1re ligne (le fébuxostat reste en 2e ligne après CARES) et l'hyperuricémie asymptomatique ne se traite pas. Pour l'anémie sans carence en fer, les injections d'ASE sont contre-indiquées (surrisque de thromboses et d'AVC dans RED-HF).",
    articleSlug: 'goutte-bpco-thyroide-et-autres-comorbidites',
  },
  {
    id: 'regle_des_3',
    termFr: 'Règle des 3 (automesure tensionnelle) et STRIDE BP',
    aliases: ['règle des 3', 'automesure', 'STRIDE BP', 'brassard oscillométrique'],
    shortDefinitionFr:
      "Protocole français SFHTA d'automesure : 3 mesures assises le matin avant les comprimés, 3 le soir, 3 jours de suite, avec un brassard huméral validé vérifiable sur stridebp.org (à adapter avec le cardiologue en cas de FA ou d'ICFER).",
    articleSlug: 'automesure-tensionnelle-domicile',
  },
  {
    id: 'ecg_monocanal_spo2',
    termFr: 'ECG monocanal et SpO2 (montres connectées)',
    aliases: ['ECG monocanal', 'single-lead ECG', 'SpO2', 'montre connectée'],
    shortDefinitionFr:
      "Tracé de 30 secondes d'une montre connectée utile pour dépister une FA mais non validé pour l'infarctus ou la TV (15–26 % inconclusifs en cardiologie), et mesure approximative de l'oxygène (SpO2). Tenir montres et téléphones à 15 cm d'un DAI (30 cm en charge).",
    articleSlug: 'montres-connectees-et-capteurs-ic',
  },
  {
    id: 'ipde5_met_nocebo',
    termFr: 'Inhibiteurs de la PDE-5 (Viagra, Cialis), MET et effet nocebo',
    aliases: ['IPDE-5', 'PDE-5', 'sildénafil', 'Viagra', 'tadalafil', 'Cialis', 'MET', 'nocebo'],
    shortDefinitionFr:
      "Un rapport sexuel équivaut à 3–5 METs (deux étages). L'effet nocebo explique une large part des troubles érectiles attribués aux bêtabloquants. Les IPDE-5 sont formellement interdits avec les dérivés nitrés ; dans l'UE, Cialis est contre-indiqué dès NYHA II alors que Viagra ne contre-indique que l'IC sévère.",
    articleSlug: 'vie-sexuelle-et-dysfonction-erectile-ic',
  },
  {
    id: 'conflit_autonome_waon',
    termFr: 'Conflit autonome (eau froide) et thérapie Waon',
    aliases: ['conflit autonome', 'eau froide', 'bain glacé', 'thérapie Waon', 'sauna'],
    shortDefinitionFr:
      "Le conflit autonome survient lors d'une immersion brutale en eau glacée (décharge d'adrénaline + réflexe vagal), exposant un cœur cicatriciel à des arythmies. La thérapie Waon japonaise (infrarouges doux à 60 °C) diffère des saunas à 80–100 °C et n'a pas atteint son critère principal dans WAON-CHF.",
    articleSlug: 'voyages-canicule-et-climat-ic',
  },
  {
    id: 'sevrage_tabac_france',
    termFr: 'Substituts nicotiniques, varénicline (Champix) et Tabac info service (39 89)',
    aliases: ['substituts nicotiniques', 'NRT', 'varénicline', 'Champix', 'Tabac info service', '39 89'],
    shortDefinitionFr:
      "En France, les substituts nicotiniques prescrits et la varénicline (Champix, revenue en juin 2025 en 2e intention, sans interaction CYP450) sont remboursés à 65 % sans plafond, avec accompagnement gratuit par tabacologue au 39 89 ; l'e-cigarette n'est pas recommandée par le HCSP.",
    articleSlug: 'tabac-et-alcool-insuffisance-cardiaque',
  },
  {
    id: 'directives_anticipees',
    termFr: 'Directives anticipées (Loi Claeys-Leonetti)',
    aliases: ['directives anticipées', 'Loi Claeys-Leonetti', 'désactivation DAI'],
    shortDefinitionFr:
      "Document écrit français de validité illimitée, opposable aux médecins et déposable dans Mon espace santé, précisant vos souhaits sur la poursuite, limitation ou arrêt des traitements — y compris la désactivation explicite des chocs d'un DAI tout en maintenant la stimulation.",
    articleSlug: 'soins-de-support-et-anticipation',
  },
  {
    id: 'personne_de_confiance',
    termFr: 'Personne de confiance',
    aliases: ['personne de confiance', 'CSP L.1111-6'],
    shortDefinitionFr:
      "Adulte unique désigné par écrit et cosignataire (déposable dans Mon espace santé) pouvant vous accompagner en consultation et dont le témoignage sur vos volontés prévaut sur tout autre témoignage familial si vous ne pouvez plus vous exprimer ; distincte de la personne à prévenir.",
    articleSlug: 'soins-de-support-et-anticipation',
  },
  {
    id: 'had_emsp_ppa_spcmd',
    termFr: 'HAD, EMSP / LISP / USP / MASP, PPA et SPCMD',
    aliases: ['HAD', 'EMSP', 'LISP', 'USP', 'MASP', 'PPA', 'SPCMD', 'hospitalisation à domicile'],
    shortDefinitionFr:
      "Dispositifs français d'accompagnement et de soins palliatifs : HAD (soins hospitaliers à domicile 100 % ALD sans forfait journalier), équipes mobiles (EMSP), lits/unités/maisons dédiés (LISP, USP, MASP), plan personnalisé d'accompagnement (PPA, loi 2026-404) et sédation profonde jusqu'au décès (SPCMD).",
    articleSlug: 'soins-de-support-et-anticipation',
  },
  {
    id: 'mon_espace_sante',
    termFr: 'Mon espace santé (DMP)',
    aliases: ['Mon espace santé', 'DMP', 'Dossier Médical Partagé', 'VSM'],
    shortDefinitionFr:
      "Carnet de santé numérique public regroupant comptes rendus (ETT, IRM, carte DAI), volet de synthèse médicale (VSM) et directives anticipées, consultable en urgence par le SAMU 15 et les hôpitaux sauf opposition.",
    articleSlug: 'reseau-de-soins-et-aides-sociales-france',
  },
  {
    id: 'apa_sport_ordonnance',
    termFr: 'APA (activité physique adaptée) et Maisons Sport-Santé',
    aliases: ['APA', 'sport sur ordonnance', 'Maisons Sport-Santé', 'Club Cœur et Santé'],
    shortDefinitionFr:
      "Activité physique encadrée prescrite par tout médecin ou IPA (renouvelable une fois par kinésithérapeute) via les Maisons Sport-Santé ou Clubs Cœur et Santé. Non remboursée par l'Assurance Maladie pour l'IC même en ALD (financement possible par mutuelle ou collectivités).",
    articleSlug: 'reseau-de-soins-et-aides-sociales-france',
  },
  {
    id: 'cmi',
    termFr: 'CMI (carte mobilité inclusion)',
    aliases: ['CMI', 'carte mobilité inclusion', 'carte stationnement', 'carte priorité'],
    shortDefinitionFr:
      "Carte délivrée par la MDPH avec trois mentions (Priorité, Stationnement, Invalidité ≥ 80 % ouvrant automatiquement les droits RQTH). Les anciennes cartes papier d'invalidité et de stationnement expirent le 31 décembre 2026.",
    articleSlug: 'reseau-de-soins-et-aides-sociales-france',
  },
  {
    id: 'aah_pch_ajpa',
    termFr: 'AAH, PCH et congé de proche aidant (AJPA)',
    aliases: ['AAH', 'PCH', 'AJPA', 'congé de proche aidant'],
    shortDefinitionFr:
      "Aides MDPH/CAF en France : AAH (allocation adultes handicapés, plafond 1 041,59 €/mois en 2026, déconjugalisée), PCH (aides humaines/techniques demandées avant 60 ans) et congé de proche aidant avec AJPA (66,64 €/jour en 2026, exigeant incapacité ≥ 80 %, APA ou invalidité cat. 3, et non l'ALD seule).",
    articleSlug: 'reseau-de-soins-et-aides-sociales-france',
  },
  {
    id: 'optam_c2s_franchises',
    termFr: 'OPTAM, Complémentaire santé solidaire (C2S) et franchises 2026',
    aliases: ['OPTAM', 'Secteur 1', 'Secteur 2', 'C2S', 'forfait journalier', 'FPU', 'franchises médicales'],
    shortDefinitionFr:
      "Même en ALD 100 %, restent à charge (hors C2S) les dépassements d'honoraires (plafonnés en Secteur 2 OPTAM), le forfait journalier (23 €/j), le FPU ALD (9,96 €) et jusqu'à 140 €/an de franchises/participations non remboursées par les mutuelles depuis octobre 2026 ; la C2S supprime tous ces frais sous condition de revenus.",
    articleSlug: 'reseau-de-soins-et-aides-sociales-france',
  },
];
