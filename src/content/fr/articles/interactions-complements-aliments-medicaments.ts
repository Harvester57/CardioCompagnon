import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'interactions-complements-aliments-medicaments',
  sourceWikiPath: 'wiki/concepts/supplement-and-food-drug-interactions.md',
  titleFr: 'Interactions entre compléments, aliments et médicaments cardiaques',
  category: 'nutrition',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'interactions',
    'hyperkaliémie',
    'substituts-de-sel',
    'potassium',
    'ains',
    'acidocétose',
    'régime-cétogène',
    'isglt2',
    'arni',
    'vitamine-e',
    'bêta-carotène',
    'plantes',
    'réglisse',
    'millepertuis',
    'levure-de-riz-rouge',
    'pamplemousse',
    'statines',
    'ginseng',
    'danshen',
    'extrait-thé-vert',
    'digoxine',
    'phytothérapie-chinoise',
    'vitamines-b',
    'vitamine-b6',
    'magnésium',
    'berbérine',
    'boissons-énergisantes',
    'psyllium',
    'créatine',
    'aod',
    'clopidogrel',
    'ticagrélor',
    'éplérénone',
    'décongestionnants',
    'pseudoéphédrine',
  ],
  aliases: [
    'Produits à éviter',
    'Sécurité des compléments',
    'Interactions médicamenteuses',
    'Hyperkaliémie',
    'Acidocétose',
    'AINS',
    'Décongestionnants',
    'Pseudoéphédrine',
    'Réglisse',
    'Millepertuis',
    'Levure de riz rouge',
    'Pamplemousse et statines',
    'Ginkgo',
    "Compléments d'ail",
    'Risque hémorragique',
    'Ginseng',
    'Danshen',
    'Sauge rouge',
    'Extrait de thé vert',
    'EGCG',
    'Qiliqiangxin',
    'Phytothérapie chinoise',
    'Qishen Yiqi',
    'Pueraria',
    'Berbérine',
    'Boissons énergisantes',
    'Psyllium et interactions',
    'Créatine et DFGe',
    'Vitamines B',
    'Vitamine B6',
    'Magnésium et interactions',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "« Naturel » ou « en vente libre » ne signifie pas sans danger avec des médicaments de l'insuffisance cardiaque. Les risques les mieux établis concernent les substituts de sel au potassium, comprimés de potassium et additifs potassiques cachés (hyperkaliémie sous ARNI/IEC/ARA2 et ARM), les anti-inflammatoires AINS et les décongestionnants oraux contre le rhume (pseudoéphédrine passée sur ordonnance Liste I en France depuis le 11 décembre 2024 et parfois associée à de l'ibuprofène), les régimes cétogènes ou jeûnes prolongés sous iSGLT2 (acidocétose), certaines vitamines à risque (vitamine E, bêta-carotène, calcium + vitamine D en automédication) et les fortes doses d'huile de poisson (fibrillation atriale). Côté plantes et compléments : la réglisse véritable retient l'eau et abaisse le potassium ; le millepertuis est nommément cité sur les RCP européens, français et britanniques pour les quatre AOD, l'éplérénone, l'ivabradine et l'atorvastatine (et peut à l'inverse majorer le risque hémorragique du clopidogrel) ; la levure de riz rouge fait double emploi avec les statines ; le danshen a causé des surdosages sous warfarine et un signal hémorragique précoce sous AOD ; l'extrait concentré de thé vert réduit l'exposition humaine à la digoxine (-31 à -33 %), au lisinopril et aux statines et expose à une atteinte hépatique ; la berbérine inhibe des enzymes hépatiques clés ; les boissons énergisantes, brûleurs de graisse, le psyllium et la créatine (fausse baisse du DFGe) appellent aussi une vigilance spécifique. Cette page concerne les produits pris de votre propre initiative : n'arrêtez jamais un médicament prescrit sans l'avis de votre équipe.",
  sections: [
    {
      headingFr: '1. Potassium : substituts de sel, comprimés et additifs cachés',
      bodyMarkdownFr: `**Qui est exposé :** toute personne prenant un **ARNI** (sacubitril/valsartan — *Entresto*), un **IEC**, un **ARA2**, et/ou un **ARM** (spironolactone — *Aldactone*, éplérénone — *Inspra*). Ces classes médicamenteuses réduisent l'élimination rénale du potassium.

**Ce que montrent les données et notices :**
- **Notices officielles :** la notice du sacubitril/valsartan (*Entresto*) cite les compléments de potassium et les substituts de sel contenant du potassium au même titre que les diurétiques épargneurs de potassium parmi les causes d'hyperkaliémie, mentionne un régime très riche en potassium comme facteur de risque et demande un suivi régulier de la kaliémie. Les notices américaines FDA actualisées des ARM (*Inspra* 2025 et *Spironolactone* 02/2026) imposent toutes deux un contrôle de la kaliémie dans la semaine suivant l'instauration ou une modification de dose et mettent en garde contre les compléments et substituts de sel potassiques : l'éplérénone contre-indique l'initiation si ClCr ≤ 30 mL/min ou K+ > 5,5 mmol/L (sans interdire en bloc fruits et légumes entiers), tandis que la spironolactone propose d'envisager 25 mg un jour sur deux entre 30 et 50 mL/min de DFGe et conseille d'éviter les aliments très riches en potassium, y compris les substituts de sel.
- **Risque de base :** dans l'essai **PARADIGM-HF**, environ **16 %** des patients avaient déjà une kaliémie supérieure à 5,5 mmol/L sans aucun supplément potassique.
- **Revue Cochrane 2022 :** si les substituts de sel ont réduit la tension en population générale, tous les essais ont exclu les patients à risque d'hyperkaliémie et aucun n'a inclus de patients insuffisants cardiaques. L'absence apparente de surrisque reposait sur seulement 12 contre 10 événements.
- **Le piège des additifs potassiques dans les produits « réduits en sodium » :** des analyses chimiques alimentaires montrent que des viandes préparées « réduites en sodium » contenaient **44 % de potassium en plus** (jusqu'à 1 500 mg/100 g ; médiane 900 contre 325 mg/100 g sans additif ; **Parpia 2018**, résumé seul) ; sur 239 089 produits industriels analysés aux États-Unis, **23,3 %** des produits portant une allégation « réduit en sodium » contenaient des substituts à base de potassium (contre 2,4 % sans allégation), alors que seuls 5,7 % des produits avec additifs indiquaient la teneur en potassium sur le tableau nutritionnel (**Picard 2024/2025**, résumés seuls).
- **Aliments méditerranéens entiers contre charges concentrées :** les études de bilan montrent environ **88 à 94 %** d'absorption totale du potassium quel que soit le groupe d'aliments (**Picard 2026**, résumé seul). Si les fruits et légumes entiers sont mieux tolérés que le chlorure de potassium (KCl) en substitut de sel ou en additif, ce n'est pas parce que la moitié resterait non absorbée, mais parce qu'ils évitent un pic d'absorption rapide et apportent conjointement fibres et effet alcalinisant. Une alimentation méditerranéenne normale n'est généralement pas restreinte de principe lorsque la kaliémie est normale et surveillée ; en revanche, **substituts de sel au KCl, comprimés de potassium et additifs cachés sont à éviter**, et les formes concentrées (**jus de fruits, smoothies, fruits secs, concentré de tomate**) appellent une vigilance sur les portions, surtout si le DFGe est entre 30 et 44 mL/min/1,73 m², en cas de diabète ou si la kaliémie atteint ou dépasse 4,8 à 5,0 mmol/L.`,
    },
    {
      headingFr: '2. Antalgiques anti-inflammatoires (AINS) et décongestionnants contre le rhume',
      bodyMarkdownFr: `**De quoi s'agit-il :** ibuprofène, kétoprofène, naproxène, diclofénac et inhibiteurs de la COX-2. Ils se cachent aussi dans plusieurs médicaments combinés contre le rhume. *(L'aspirine à faible dose prescrite pour les artères coronaires n'appartient pas à cette catégorie d'antalgiques.)*

**Pourquoi les AINS posent problème :**
- **Recommandations ESC 2026 :** les AINS et inhibiteurs de la COX-2 sont **non recommandés** dans l'insuffisance cardiaque (**Classe III, niveau B2**), car ils augmentent le risque d'aggravation et d'hospitalisation pour IC, peuvent déclencher une décompensation et altérer la fonction rénale.
- **Avec le sacubitril/valsartan (*Entresto*) et les IEC/ARA2 :** ils peuvent dégrader la fonction rénale jusqu'à l'insuffisance rénale aiguë, en particulier chez les personnes âgées, sous diurétiques ou ayant déjà une atteinte rénale. Ils favorisent la rétention de sel et d'eau et atténuent l'effet des diurétiques de l'anse (furosémide — *Lasilix*, bumétanide — *Burinex*).
- **Consensus européen Abdin (2025, *EJHF*) :** le risque augmente avec la dose, semblant le plus élevé avec le diclofénac, l'indométacine et le piroxicam dans une étude, et le célécoxib majorait aussi le risque à forte dose (données observationnelles). Les alternatives évoquées sont le **paracétamol** ou les **AINS en gel ou crème** appliqués localement. Demandez toujours à votre médecin traitant ou à votre pharmacien quels antalgiques vous sont autorisés.

**Médicaments combinés contre le rhume (double danger) :**
- En France, ***Nurofen Rhume*** et ***Rhinadvil Rhume / Rhinadvilcaps*** associent **ibuprofène** (AINS) et **pseudoéphédrine** (vasoconstricteur oral).
- À la suite de la revue européenne **EMA 2024** portant sur des atteintes vasculaires cérébrales rares mais graves (**PRES** et **RCVS**), l'**ANSM** a placé tous les décongestionnants oraux à la pseudoéphédrine sur **Liste I** (ordonnance obligatoire depuis le **11 décembre 2024**) et continue de les déconseiller pour un rhume. Les RCP français (BDPM) les contre-indiquent en cas de coronaropathie sévère, d'insuffisance rénale et d'hypertension sévère ou non contrôlée.
- La **phényléphrine orale** (encore vendue sans ordonnance aux États-Unis) a fait l'objet en novembre 2024 d'une proposition de retrait OTC par la FDA faute d'efficacité démontrée, tandis que l'**AHA 2016** avertit que pseudoéphédrine et phényléphrine peuvent déclencher ischémie et arythmies. Voir la fiche *Caféine, boissons énergisantes, décongestionnants et stimulants*.`,
    },
    {
      headingFr: '3. Régimes cétogènes, jeûnes prolongés, boissons cétoniques et iSGLT2',
      bodyMarkdownFr: `**L'alerte officielle :** la notice de la dapagliflozine (*Forxiga*) cite parmi les facteurs déclenchants d'**acidocétose** :
- un régime cétogène ;
- une réduction importante des apports caloriques ;
- une infection ou maladie aiguë ;
- une intervention chirurgicale ;
- une déshydratation ;
- un abus d'alcool.

L'acidocétose sous iSGLT2 peut survenir avec une glycémie presque normale (« acidocétose euglycémique ») : une glycémie normale ne l'exclut donc pas. La notice recommande d'interrompre le médicament au moins **3 jours avant une chirurgie programmée ou un jeûne prolongé**, lorsque c'est possible et en accord avec le médecin.

**Mise en perspective :** dans les grands essais d'IC et de néphrologie de la dapagliflozine (DAPA-HF, DELIVER, DAPA-CKD), les acidocétoses sont survenues uniquement chez des personnes diabétiques. Chez une personne non diabétique ayant une alimentation normale et variée, le risque absolu est très faible, mais il augmente en cas de diabète, d'excès d'alcool, de maladie aiguë ou de chirurgie.

**Symptômes à connaître :** nausées, vomissements, douleurs abdominales, malaise général et essoufflement (pouvant être confondus avec une poussée d'insuffisance cardiaque).

**Boissons cétoniques (esters et sels de cétones) :** les boissons d'esters de cétones élèvent la cétonémie sans régime restrictif. Dans deux courtes études chez des patients ICFER incluant des personnes sous iSGLT2 (**Berg-Hansen 2024** sur 14 jours ; **Selvaraj 2025** en dose unique), le pH sanguin a légèrement et brièvement baissé après chaque dose avant de revenir à la normale en quelques heures, sans acidocétose rapportée. Toutefois, les personnes diabétiques étaient exclues de l'essai de 14 jours, il n'existe aucune donnée au long cours et ces produits restent du domaine de la recherche ; les **sels de cétones** apportent de plus une charge importante en sodium (voir *Compléments énergétiques cardiaques*).`,
    },
    {
      headingFr: '4. Compléments présentant des signaux d’effets délétères ou d’interactions spécifiques',
      bodyMarkdownFr: `| Produit | Constat principal | Source |
|---|---|---|
| **Vitamine E (forte dose)** | Davantage d'hospitalisations pour IC (RR 1,21, certitude modérée, 2 grands essais totalisant 17 956 personnes dont les populations ne sont pas précisées, donc pas nécessairement des patients IC) ; déconseillée par l'USPSTF en prévention CV | Khan 2021 (texte intégral) ; USPSTF 2022 |
| **Bêta-carotène** | Mortalité totale (RR 1,10) et cardiovasculaire (RR 1,12) plus élevées ; déconseillé par l'USPSTF | An 2022 ; USPSTF 2022 |
| **Calcium + vitamine D (automédication)** | Risque accru d'AVC (RR 1,17, certitude modérée) | Khan 2019 |
| **Oméga-3 à forte dose** | Risque de fibrillation atriale augmenté d'environ 49 % au-dessus de 1 g/j | Gencer 2021 |
| **Aubépine** | Preuves contradictoires ; risque possible d'aggravation de l'IC | AHA 2022 |
| **Muguet, actée bleue (blue cohosh)** | Produits toxiques ; interactions du muguet avec la digoxine, hypokaliémie et troubles du rythme | AHA 2022 |
| **Vitamine D seule** | Aucun bénéfice cardiaque démontré. Un excès élève la calcémie : les RCP (*ZymaD*, *Fultium-D3*) indiquent que l'hypercalcémie majore l'effet cardiaque de la **digoxine** (surveillance rapprochée, ECG et calcémie) et que les **diurétiques thiazidiques** augmentent la calcémie en freinant son élimination urinaire. La précaution AHA sur les inhibiteurs calciques n'est pas référencée, se limite au vérapamil/diltiazem à fortes doses, est absente des RCP et du NIH et repose sur un unique cas de 1981. Plafond adulte sans supervision : **4 000 UI/j (100 µg/j)** toutes sources confondues | AHA 2022 ; RCP *ZymaD* et *Fultium-D3* ; revue CCB |
| **Acide folique + B12 + B6 ensemble (complexes B « cœur »)** | Après un infarctus, tendance à davantage de récidives d'infarctus, d'AVC ou de morts subites coronaires (RR 1,22 ; IC 95 % 1,00–1,50 ; p = 0,05) ; aucun bénéfice sur l'infarctus ou la mortalité dans 15 essais | NORVIT 2006 ; Cochrane 2017 |
| **Vitamine B6 à forte dose** | Atteinte des nerfs sensitifs (neuropathie) en cas de prise prolongée à forte dose (dès environ 100 mg/j ; limite supérieure européenne 12 mg/j) | ESPEN 2022 |

**Médicaments pouvant abaisser les vitamines B ou le magnésium :** les recommandations **ESPEN 2022** citent les **diurétiques de l'anse** au long cours comme cause de déplétion en thiamine (vitamine B1), ainsi que la **metformine** et les **antisécrétoires gastriques** (IPP, anti-H2) au long cours comme causes de carence en vitamine B12. Les diurétiques et les IPP prolongés peuvent également abaisser le **magnésium**, qui peut à l'inverse s'accumuler si la fonction rénale est diminuée et réduire l'absorption de certains médicaments (tétracyclines, fluoroquinolones, bisphosphonates et rosuvastatine avec les antiacides au magnésium ; voir les fiches *Vitamines B* et *Magnésium*). Ces situations justifient de demander à votre équipe si un bilan sanguin est pertinent, et non de débuter un complément seul.`,
    },
    {
      headingFr: '5. Plantes médicinales, boissons et compléments à surveiller',
      bodyMarkdownFr: `### Réglisse véritable (glycyrrhizine)
- **Mécanisme :** la glycyrrhizine bloque l'enzyme rénale 11-bêta-HSD2, permettant au cortisol d'agir comme l'aldostérone : rétention d'eau et de sel, baisse du potassium (hypokaliémie) et élévation de la tension artérielle — exactement l'effet inverse d'un ARM (spironolactone, éplérénone).
- **Risques dans l'IC :** des cas d'insuffisance cardiaque aiguë et d'œdème pulmonaire sont décrits. La monographie européenne **EMA 2026** déconseille la réglisse en cas de trouble cardiovasculaire, d'hypertension, de maladie rénale ou d'hypokaliémie, et demande de ne pas l'associer aux diurétiques, à la digoxine ou aux corticoïdes. L'hypokaliémie s'ajoute à celle des diurétiques de l'anse et a favorisé des cas de toxicité à la digoxine. Même de petites quantités ont été impliquées chez des patients cardiaques.
- **Seuils et sources cachées :** la limite européenne est de 100 mg/j de glycyrrhizine (environ 60 à 70 g de réglisse), sans garantir la sécurité des personnes sujettes aux troubles hydro-électrolytiques ; la FDA avertit que 57 g/j de réglisse noire pendant deux semaines peuvent déclencher un trouble du rythme après 40 ans. On en trouve dans les bonbons, tisanes « réglisse » ou digestives, certains chewing-gums sans sucre, sirops contre la toux et mélanges de plantes (mention obligatoire « contient de la réglisse » dans l'UE ; les arômes d'anis n'en contiennent pas). Après l'arrêt, la récupération peut prendre des semaines à des mois.

### Millepertuis (*Hypericum perforatum*)
- **Mécanisme :** puissant inducteur d'enzymes et transporteurs hépatiques et intestinaux (**CYP3A4, CYP2C9, CYP2C19 et glycoprotéine P**), il accélère l'élimination de la plupart des médicaments concernés et réduit leur efficacité — à l'exception de prodrogues comme le **clopidogrel**, où l'induction enzymatique peut pousser le métabolite actif *à la hausse*. L'intensité varie fortement selon la teneur en hyperforine des produits (**Nicolussi 2020**).
- **Vérification directe sur les RCP européens (EMA), français (BDPM), britanniques (eMC) et américains (FDA) :**

| Médicament | Millepertuis nommé sur le RCP ? | Position officielle et données humaines |
|---|---|---|
| **Dabigatran (*Pradaxa*)** | Oui (EMA) | RCP EMA : inducteur P-gp — **« l'utilisation concomitante doit être évitée »** (baisse attendue des taux de dabigatran) |
| **Rivaroxaban (*Xarelto*)** | Oui (EMA et É.-U.) | RCP EMA : **« doit être évité sauf surveillance étroite des signes de thrombose »**. Chez 12 volontaires sains (**Scholz 2021**, résumé seul), 2 semaines d'extrait contenant de l'hyperforine ont abaissé l'AUC du rivaroxaban de **24 %** (GMR 0,76) et l'effet anti-Xa de **20 %** (GMR 0,80) |
| **Apixaban (*Eliquis*)** | Oui (EMA et É.-U.) | Notice US : **éviter**. RCP EMA : **prudence** en FA/prévention MTEV et **non recommandé** en traitement aigu de TVP/EP (les inducteurs forts CYP3A4 + P-gp réduisent l'exposition d'environ 50 %) |
| **Édoxaban (*Lixiana*)** | Oui (EMA) ; Non (É.-U.) | RCP EMA : inducteur P-gp — **« doit être utilisé avec prudence »** (la notice américaine *Savaysa* ne nomme que la rifampicine) |
| **Éplérénone (*Inspra*)** | Oui (FR, UK, É.-U.) | FR BDPM (01/2025), UK eMC (01/2026) et É.-U. : baisse de **30 % de l'AUC de l'éplérénone** ; inducteurs forts du CYP3A4 **non recommandés** |
| **Ivabradine (*Procoralan*)** | Oui (É.-U.) | Notice : **à éviter** (comme le jus de pamplemousse) |
| **Atorvastatine (*Tahor*)** | Oui (FR et UK) ; Non (É.-U.) | FR BDPM (01/2025) et UK eMC (08/2026) : réductions plasmatiques variables. Chez 16 patients stables (**Andren 2007**, résumé seul), le LDL-c a augmenté de **0,90 à 1,03 g/L** (2,34 à 2,66 mmol/L ; p = 0,004) |
| **Rosuvastatine (*Crestor*)** | Non (UK et É.-U.) | Faible substrat CYP ; **aucun avertissement millepertuis** sur les RCP UK/US vérifiés |
| **Simvastatine** | Non sur les RCP UK/US vérifiés | Citée par le NIH NCCIH parmi les médicaments cardiaques affaiblis ; essai croisé sur 24 patients (**Eggertsen 2007**, résumé seul) confirmant la hausse du cholestérol (le RCP UK cite rifampicine -93 % sans nommer le millepertuis) |
| **Ticagrélor (*Brilique*)** | Non (avertissement de classe) | RCP EMA et É.-U. : inducteurs puissants du CYP3A **déconseillés / à éviter** (rifampicine -86 % d'AUC) ; millepertuis non nommé bien que puissant inducteur CYP3A4 |
| **Clopidogrel (*Plavix*)** | Non (avertissement de classe ; **sens inverse**) | RCP EMA : les inducteurs forts du CYP2C19 **augmentent** le métabolite actif et l'inhibition plaquettaire, **« ce qui pourrait notamment majorer le risque de saignement »** — **déconseillé**. Chez 10 volontaires peu répondeurs et 20 patients stentés (**Lau 2011**, résumé seul), l'inhibition plaquettaire a augmenté — ne jamais débuter soi-même vu la teneur variable en hyperforine et les risques hémorragiques/d'interactions |
| **Digoxine, warfarine (*Coumadine*)** | Citées par le NIH NCCIH | Effet pouvant être diminué (extraits pauvres en hyperforine moins actifs dans **Nicolussi 2020**) |

- **Avec les antidépresseurs :** risque de syndrome sérotoninergique grave. Parlez toujours d'une baisse de moral à votre médecin plutôt que de débuter du millepertuis, et **faites réévaluer toute prise en cours par votre pharmacien ou votre cardiologue**.

### Levure de riz rouge
- **Nature du produit :** la **monacoline K** est chimiquement identique à la **lovastatine**. La teneur varie d'un facteur 60 entre marques, et de nombreux produits contiennent une toxine rénale (citrinine).
- **Risques :** prise avec une statine prescrite, elle fait double emploi et cumule les toxicités musculaires, hépatiques et rénales (l'EFSA rapporte un cas de rhabdomyolyse sévère avec la rosuvastatine). L'EFSA a relevé des réactions graves dès **3 mg/j** ; le règlement **UE 2022/860** impose un plafond < 3 mg/j et un avertissement contre le cumul avec des hypocholestérolémiants. En 2024 au Japon, des lots contaminés par l'acide pubérulique ont provoqué des atteintes rénales (6 dialyses sur 192 patients étudiés). L'essai chinois CCSPS reposait sur un extrait pharmaceutique sans statine associée et ne justifie jamais d'ajouter ni de substituer la levure de riz rouge à une statine prescrite.

### Jus de pamplemousse et statines / ivabradine
- Bloque le CYP3A4 intestinal : **simvastatine** (à éviter selon la notice), **atorvastatine (*Tahor*)** (éviter les grandes quantités > 1,2 L/j), **rosuvastatine (*Crestor*)** (aucun avertissement pamplemousse sur la notice), **ivabradine (*Procoralan*)** (également déconseillé).

### Ginseng
- Regroupe plusieurs espèces distinctes : ginseng asiatique ou rouge de Corée (*Panax ginseng*), ginseng américain (*Panax quinquefolius*) et « ginseng sibérien » (éleuthérocoque).
- **Anticoagulants et antiagrégants (signaux discordants) :** le ginseng américain a réduit l'effet de la warfarine chez 20 volontaires sains (pic INR -0,19), alors que le ginseng asiatique n'a pas modifié l'INR dans de petits essais (dont 25 porteurs de valves mécaniques) ; un cas d'hémorragie massive lors d'une chirurgie valvulaire est décrit. Dans des bases de données taïwanaises en vie réelle, le ginseng asiatique prescrit sous antiagrégants (aspirine/clopidogrel, ticagrélor exclu ; **Tsai 2017**, 1 209 cas) montrait un signal hémorragique instable selon la fenêtre témoin (**aOR 3,27** [1,09–9,83] vs semaines 13–16 ; aOR 1,49 [0,38–5,88] ns vs semaines 6–9), tandis qu'une cohorte appariée sous anticoagulants (**99 % warfarine, 1 % AOD** ; **Hsu 2022**) trouvait moins de saignements hospitalisés (aHR 0,762 [0,596–0,974]). Aucun essai PK humain avec les AOD n'existe. L'**AHA 2016** classe le ginseng parmi les produits potentiellement nocifs dans l'IC.
- **Autres effets :** peut fausser certains dosages anciens de digoxine (cas documenté avec l'éleuthérocoque), tension artérielle inchangée sur 17 essais, bref allongement du QT (+15 ms) dans un petit essai, teneur variant d'un facteur 36 entre marques, aucun bénéfice prouvé seul dans l'IC.

### Danshen (racine de sauge rouge, *Salvia miltiorrhiza*)
- **Mécanisme et warfarine :** inhibe l'agrégation plaquettaire, interfère avec la coagulation et a élevé la warfarine chez l'animal ; 3 cas de surdosage hémorragique grave sous warfarine (plus un cas sur valve mécanique) conduisent à déconseiller l'association.
- **AOD et anticoagulants oraux (signaux en vie réelle discordants, présentés séparément) :**
  - **Liao (2026, série de cas autocontrôlée à Taïwan, majorité d'AOD, texte intégral) :** chez 146 patients co-prescrits *Salvia miltiorrhiza* et un anticoagulant oral (dabigatran 47,3 %, apixaban 22,6 %, rivaroxaban 21,2 %, édoxaban 17,8 %, warfarine 28,8 % ; 78,8 % sous antiagrégant ; 92,5 % HAS-BLED ≥ 2), tout saignement a été multiplié par environ 4 aux jours 1–14 (**aIRR 3,98** ; IC 95 % 3,29–4,77) et 15–28 (**aIRR 3,99** ; 3,23–4,79), incluant saignements digestifs (aIRR 3,79) et hémorragies intracrâniennes (aIRR 3,59 ; délai médian 16 jours), quel que soit l'anticoagulant. **Nuances :** zéro saignement majeur hospitalisé ou transfusé n'est survenu pendant l'exposition, et l'analyse de sensibilité limitée au premier événement atténuait le risque global au non-significatif (le risque digestif J1–14 restant élevé : aIRR 2,02 [1,14–2,91]).
  - **Hsu (2022, cohorte appariée, 99 % warfarine / 1 % AOD, texte intégral) :** saignements majeurs hospitalisés ou aux urgences neutres avec le danshen prescrit (**aHR 0,948** [0,851–1,056] ns), mais seuls 1 % des patients prenaient un AOD et les saignements ambulatoires ou produits sans ordonnance n'étaient pas capturés.
  - **Antiagrégants (Tsai 2017) :** seulement 7 à 11 exposés parmi 1 209 saignements (aOR 0,37 et 0,17, intervalles très larges ; ticagrélor exclu).
  - **Conduite à tenir :** en raison du signal hémorragique sous anticoagulants (et des effets in vitro sur COX-1, thrombine, facteur Xa, CYP3A4 et P-gp), **évitez le danshen avec tout anticoagulant et consultez votre pharmacien ou votre cardiologue**.
- **Autres risques :** interférence avec d'anciens dosages de digoxine, induction CYP3A4/P-gp en prise répétée (baisse jusqu'à 80 % du midazolam et 37 % de la fexofénadine), 39,7 % de non-conformité qualité en Chine, aucun bénéfice prouvé seul dans l'IC.

### Extrait concentré de thé vert (EGCG)
- **Un extrait concentré n'est pas une tasse de thé :** les gélules concentrées en catéchines (souvent vendues pour maigrir) bloquent des transporteurs intestinaux d'absorption médicamenteuse, alors que le thé vert infusé classique est considéré comme généralement sûr par l'EFSA (en gardant une consommation régulière sous AVK).
- **Baisse des concentrations de médicaments cardiaques (petites études humaines chez volontaires sains) :**

| Médicament | Produit au thé vert | Effet mesuré |
|---|---|---|
| **Digoxine** (médicament IC à marge étroite) | Gélule de 630 mg d'extrait (300 mg catéchines), prise unique et après 13 jours (n = 15, **Kim 2018**, texte intégral) | Exposition (AUClast) **-31 %** (GMR 0,69) en aigu et **-33 %** (GMR 0,67) après prétraitement ; Cmax -28 % / -26 % |
| **Lisinopril** (IEC) | Une dose (~300 mg EGCG, n = 10) | Exposition **-67 %** (les auteurs conseillent d'éviter les produits au thé vert) |
| **Nadolol** (bêtabloquant hors IC) | Thé vert infusé pendant 2 semaines (n = 10) | Exposition **-85 %** |
| **Céliprolol** (bêtabloquant hors IC) | Thé vert infusé pendant 3 jours (n = 3, résumé seul) | Exposition **-98,6 %** |
| **Rosuvastatine (*Crestor*)** | 300 mg EGCG (n = 13) | Exposition **-19 %** après une dose (non significatif après 10 jours) |
| **Atorvastatine (*Tahor*)** | 300 à 600 mg d'extrait (n = 12, résumé seul) | Exposition environ **-22 à -24 %** |

- **Ce qui n'a PAS été étudié chez l'être humain (lacune vérifiée) :** une revue pharmacologique de 2025 (**Kyriacou 2025**, résumé seul) confirme qu'il n'existe **aucune étude pharmacocinétique humaine** pour les bêtabloquants de l'ICFER (**bisoprolol, métoprolol, carvédilol, nébivolol**), le **sacubitril/valsartan (ARNI)** ou les **iSGLT2 (dapagliflozine, empagliflozine)**. L'unique étude portant sur le **bisoprolol** (**Zeng 2022**, texte intégral) est une **expérience chez le rat** (100 mg/kg d'EGCG par gavage abaissant la biodisponibilité de 92 % à 66 %, AUC non significative p = 0,17) : **données animales uniquement, non transposables telles quelles à l'humain**. L'extrait de thé vert réduisant déjà d'environ un tiers la digoxine humaine, **un avis du pharmacien ou du cardiologue est recommandé sous digoxine, IEC ou statine**.
- **Toxicité hépatique et tension :** l'EFSA relève un risque d'atteinte hépatique dès **800 mg/j d'EGCG** sans dose totalement sûre (plafond réglementaire **UE 2022/2340** < 800 mg/j, interdit à jeun ou en cumul) ; 75 cas américains documentés entre 140 et 1 000 mg/j (3 greffes hépatiques sur 40 patients du registre US). Peut aussi augmenter la tension (souvent associé à de la caféine ou d'autres stimulants).

### Formules de phytothérapie chinoise (QUEST et revue parapluie Chua 2025)
- **QUEST (*Nature Medicine* 2024) :** chez 3 110 patients chinois ICFER (~74 % ischémiques), la formule sur prescription *Qiliqiangxin* (11 plantes dont ginseng, danshen et racine d'aconit préparée) a réduit décès CV ou hospitalisation IC (25,0 % contre 30,0 %, HR 0,78) sans baisse significative de mortalité globale (< 10 % sous iSGLT2, essai financé par le fabricant) ; cela ne valide jamais les gélules de ginseng ou de danshen du commerce, et la formule est absente des recommandations ESC/AHA/NICE.
- **Revue parapluie Chua (2025) :** qualité souvent faible des essais chinois, contrôle qualité variable et sous-déclaration des effets indésirables :

| Produit | Signaux rapportés | Pourquoi cela compte avec vos traitements |
|---|---|---|
| **Préparations à base de *Pueraria* (Gegen)** | Hyperkaliémie citée parmi les réactions (effets indésirables globaux 6,5 % contre 12,6 %) | La kaliémie tend déjà à monter sous ARNI, IEC, ARA2 et ARM |
| **Pilules Qishen Yiqi** (astragale, danshen, notoginseng) | Hypotension, vertiges, céphalées, nausées | S'ajoute à l'effet hypotenseur des médicaments de l'IC (signal de mortalité OR 0,43 sur 9 essais chinois d'un seul fabricant) |
| **Gélules Qili Qiangxin** (ginseng, danshen, aconit préparé, *Periploca*) | Moins d'effets indésirables que le témoin dans les revues | Contient ginseng, danshen et substances cardioactives |
| **Pilule Shexiangbaoxin** (ginseng, venin de crapaud) | Effets indésirables non rapportés dans le résumé | Contient ginseng et substance cardioactive |
| **Injections de plantes** (Shenfu, Shen Mai) | Jusqu'à 21 % d'effets indésirables (foie/rein, hypotension, palpitations) | Perfusions hospitalières en Chine, indisponibles ailleurs |

La présence de substances cardioactives directes (aconit préparé, *Periploca*, venin de crapaud) impose de faire vérifier toute formule par votre cardiologue et votre pharmacien, surtout sous digoxine ou antiarythmiques.

### Berbérine
- Chez 17 hommes sains (**Guo 2012**, chiffres de résumés), la berbérine a inhibé les enzymes **CYP3A4** (+40 % sur la sonde), **CYP2D6** (ratio ×9) et **CYP2C9** (ratio doublé), et chez des transplantés rénaux (**Wu 2005**) elle a élevé les taux de ciclosporine (CYP3A4 + glycoprotéine P). Des interactions sont donc plausibles (bien que non mesurées directement) avec métoprolol, carvédilol, warfarine, apixaban, rivaroxaban, ivabradine, simvastatine, atorvastatine et digoxine. En France, l'**ANSES (2019)** déconseille d'associer les compléments de berbérine aux médicaments, et la teneur réelle varie de 33 % à 100 % de l'étiquette (**Funk 2018**). **Avis du pharmacien ou du cardiologue indispensable sous anticoagulant ou digoxine** (voir la fiche *Berbérine*).

### Boissons énergisantes, brûleurs de graisse et stimulants
- **Boissons énergisantes :** environ 1 litre (~300 mg de caféine + taurine) allonge le QTc de 6 à 8 ms et élève la PA systolique de 5 à 6 mmHg de plus que le placebo chez des adultes sains (**Shah 2019**). L'**ANSES (2013)** déconseille à tous d'en consommer avec de l'alcool ou pendant l'effort physique (25 signalements sur 212 jugés imputables, surtout cardiovasculaires).
- **Brûleurs de graisse et pré-entraînements :** orange amère (*p*-synéphrine) + caféine, éphédra, DMAA et yohimbine élèvent le pouls et la tension ; l'**ANSES (2014, 2016)** et l'**AHA (2016)** les déconseillent en cas de cardiopathie, et les produits minceur renferment fréquemment des médicaments cachés (sibutramine, diurétiques de l'anse, propranolol ; **Tucker 2018**). Les stimulants prescrits pour le TDAH (méthylphénidate, lisdexamfétamine) relèvent quant à eux d'une réévaluation conjointe spécialiste-cardiologue (voir la fiche *Caféine, boissons énergisantes, décongestionnants et stimulants*).

### Psyllium (ispaghul) et laxatifs de lest
- La notice de référence de l'ispaghul (*Fybogel* au Royaume-Uni ; en France spécialités équivalentes telles que *Spagulax*) indique qu'il peut retarder l'absorption de la **digoxine** et de la **warfarine**, impose un espacement de **30 à 60 minutes** avec les autres médicaments et au moins **150 mL de liquide** par sachet (à compter dans une éventuelle limite hydrique ; voir *Fibres alimentaires et axe intestin-cœur*).

### Créatine et bilans rénaux (DFGe)
- La créatine se transforme en créatinine, ce qui élève la créatininémie et **abaisse le DFGe calculé sans abîmer le rein** (effet réversible à l'arrêt observé dans le pilote ICFER **López-Clemente 2025**). Comme la fonction rénale et le potassium guident l'ajustement des ARNI, IEC, ARM et iSGLT2, prévenez toujours votre équipe avant une prise de sang pour éviter une modification de dose injustifiée (voir *Compléments énergétiques cardiaques*).`,
    },
    {
      headingFr: '6. Risque de saignement avec l’aspirine, les antiagrégants ou les anticoagulants',
      bodyMarkdownFr: `De nombreux patients atteints de cardiomyopathie ischémique prennent de l'aspirine, parfois un second antiagrégant (clopidogrel — *Plavix*, ticagrélor — *Brilique*) ou un anticoagulant (AVK ou AOD). Le niveau de preuve diffère beaucoup d'un produit à l'autre :

| Produit | Ce que montrent les données | Position officielle | Solidité |
|---|---|---|---|
| **Huile de poisson (oméga-3)** | Grands essais (79 % sous antiagrégants dans REDUCE-IT) : saignements 2,6 % contre 2,4 % (ns). EPA purifié 4 g/j : +0,6 saignement pour 100 personnes. Pas d'essai spécifique AOD | Notice icosapent éthyl : plus de saignements avec aspirine, clopidogrel ou warfarine ; surveiller | Bonne (antiagrégants/global) ; indirecte pour AOD |
| **Ginkgo biloba** | 18 essais : pas d'effet sur les tests de coagulation ; cas d'hémorragies graves ; cohorte vétérans US sous warfarine HR 1,38. **AOD / P2Y12 (discordants) :** l'extrait standardisé **EGb 761** (240 mg/j × 8 j) n'a pas modifié la pharmacocinétique ni l'activité anti-FXa d'une dose de **rivaroxaban** chez 41 adultes sains (GMR 96,8–99,8 %, 0 saignement ; **financé par le fabricant**, **Hoerr 2022**). En cohorte hospitalière vietnamienne (**Mai 2025**), lien faible avec **clopidogrel** (OR 1,10) et **aspirine** (OR 1,12), effectifs AOD (n = 18) et ticagrélor (n = 2) trop faibles pour conclure. Cohortes taïwanaises neutres (Chan 2011 aOR 1,5 ns ; Hsu 2022 99 % warfarine aHR 0,919 ns) | Monographie EMA : avis médical si anticoagulant ou antiagrégant ; **arrêt 3 à 4 jours avant chirurgie** ; prudence avec dabigatran | Mitigée (faible pour ginkgo non standardisé et AOD/ticagrélor) |
| **Danshen (*Salvia miltiorrhiza*)** | Cas de surdosage majeur sous warfarine. **AOD (discordants) :** **Liao 2026** (majorité d'AOD) retrouve une hausse ~×4 des saignements J1–28 (aIRR 3,98 ; digestif 3,79 ; intracrânien 3,59), sans saignement majeur hospitalisé et atténuée en analyse premier événement (digestif aIRR 2,02). **Hsu 2022** (99 % warfarine / 1 % AOD) : saignements hospitalisés neutres (aHR 0,948 ns). Antiagrégants (**Tsai 2017**) : effectif minuscule (n = 7–11) | Éviter avec les anticoagulants (avis cardiologue/pharmacien) | Faible-modérée (observationnelle, discordante) |
| **Compléments d'ail** | Diminuent l'agrégation plaquettaire dans des essais ; petit essai d'extrait d'ail vieilli sous warfarine rassurant. **Aucun essai humain AOD ou P2Y12** (signal mécanistique P-gp + antiplaquettaire, **Grzesk 2021**) | Monographie EMA : prudence avec anticoagulants/antiagrégants ; **éviter 7 jours avant chirurgie** | Modérée pour chirurgie ; faible pour AOD/P2Y12 |
| **Vitamine E (forte dose)** | Deux grands essais de prévention : davantage d'AVC hémorragiques, dont un chez des patients majoritairement sous aspirine | NIH : fortes doses (> 400 UI/j) peuvent majorer les saignements sous antithrombotiques | Modérée |
| **Curcuma / curcumine** | Deux cas rapportés sous warfarine ; signal mécanistique CYP/P-gp/antiplaquettaire avec AOD (**Grzesk 2021**). Une petite étude de 10 jours sur *Meriva* (**Hu 2018**, résumé seul) rapportait un INR inchangé sous dabigatran, mais **l'INR n'est pas un examen valide pour le dabigatran** | Pas de mention hémorragique sur la page NIH, qui avertit en revanche d'un risque d'atteinte hépatique avec les formes à forte absorption | Faible (très faible pour les AOD) |

**Points clés :**
- **L'ail culinaire** utilisé normalement en cuisine n'est pas visé par ces avertissements, qui concernent les gélules et extraits concentrés.
- **Prise alimentaire et jeûne sous AOD :** le **rivaroxaban (*Xarelto*)** à 15 mg ou 20 mg doit impérativement être pris **au cours d'un repas** (à jeun, sa biodisponibilité tombe à 66 % ; un repas augmente l'AUC du 20 mg de 39 %), si bien qu'un jeûne prolongé expose à une sous-anticoagulation. Des décoctions concentrées peuvent aussi déclencher un saignement grave (un cas d'hémorragie fatale sous dabigatran après 3 jours d'une décoction gingembre-cannelle ; **Grzesk 2021**).
- **AOD et bithérapie antiagrégante :** malgré des données récentes pour le danshen sous AOD (**Liao 2026**) et le ginkgo standardisé EGb 761 sous rivaroxaban (**Hoerr 2022**) ou clopidogrel (**Mai 2025**), **aucun essai clinique humain dédié avec AOD ou ticagrélor n'existe pour l'ail, le curcuma, le ginseng, l'huile de poisson ou le ginkgo non standardisé**. Les AOD ne disposant pas d'un contrôle biologique courant comme l'INR, tout complément associé à un anticoagulant ou un antiagrégant P2Y12 justifie un **avis du pharmacien ou du cardiologue**.
- **Avant une chirurgie ou un acte invasif :** signalez systématiquement vos compléments (délais EMA : **3 à 4 jours** pour le ginkgo, **7 jours** pour les compléments d'ail ; voir la fiche *Chirurgie, soins dentaires et jours de maladie*).`,
    },
    {
      headingFr: '7. La règle d’or et les zones d’ombre qui subsistent',
      bodyMarkdownFr: `**Informez votre cardiologue, votre médecin traitant et votre pharmacien de chaque complément, plante, tisane ou médicament sans ordonnance que vous prenez ou souhaitez essayer.** Les compléments alimentaires ne bénéficient ni des contrôles ni des garanties d'un médicament. Toute association touchant un **anticoagulant**, un **antiagrégant**, un **médicament hyperkaliémiant** ou la **digoxine** exige une validation préalable par votre pharmacien ou votre cardiologue.

**Principales lacunes vérifiées dans la littérature scientifique :**
- absence d'essais pharmacocinétiques ou hémorragiques humains dédiés pour l'**ail, le curcuma, le ginseng, l'huile de poisson à forte dose et le ginkgo non standardisé** avec l'apixaban, l'édoxaban, le dabigatran ou le ticagrélor ;
- absence d'études pharmacocinétiques humaines de l'**extrait de thé vert (EGCG)** avec les bêtabloquants de l'ICFER (données murines uniquement pour le bisoprolol), les ARNI ou les iSGLT2 ;
- le texte intégral du guide pratique européen **EHRA 2021 sur les AOD** n'a pas pu être consulté directement, mais ses mises en garde sur le millepertuis concordent avec les quatre RCP EMA vérifiés directement.

En cas de doute, évitez tout mélange de plantes ou produit non vérifié tant que votre équipe n'a pas donné son accord, et n'interrompez jamais un traitement prescrit de votre propre initiative.`,
    },
  ],
  relatedArticleSlugs: [
    'sel-et-liquides-insuffisance-cardiaque',
    'these-regime-mediterraneen-potassium-icfer',
    'medicaments-insuffisance-cardiaque',
    'medicaments-effets-secondaires-suivi',
    'antiplaquettaires-bitherapie-et-protection-gastrique',
    'chirurgie-soins-dentaires-et-jours-de-maladie',
    'omega-3-huile-de-poisson',
    'these-omega3-faible-dose-risque-fa',
    'coenzyme-q10',
    'these-coq10-mortalite-icfer-moderne',
    'vitamine-d-insuffisance-cardiaque',
    'vitamines-b-insuffisance-cardiaque',
    'magnesium-insuffisance-cardiaque',
    'berberine-cholesterol-et-interactions',
    'cafeine-boissons-energisantes-et-stimulants',
    'complements-energetiques-cardiaques',
    'fibres-alimentaires-et-axe-intestin-coeur',
    'poids-obesite-et-denutrition',
    'nutrition-et-complements-insuffisance-cardiaque',
    'tableau-preuves-nutrition-complements',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'finerenone-et-nouveaux-arm',
    'cholesterol-et-prevention-secondaire',
    'thrombus-vg-et-anticoagulants',
    'maladie-renale-insuffisance-cardiaque',
    'diabete-insuffisance-cardiaque',
  ],
  sources: [
    {
      label: 'RCP officiels EMA, FR BDPM, UK eMC et FDA (ARNI, ARM, iSGLT2, 4 AOD, antiagrégants, statines, ivabradine, vitamine D, ispaghul)',
      detail: 'Vérification directe des mentions millepertuis (Pradaxa, Xarelto, Eliquis, Lixiana, Inspra, Tahor, Brilique, Plavix), pamplemousse, potassium/AINS, acidocétose, hypercalcémie/digoxine/thiazides et psyllium.',
    },
    {
      label: 'Décisions ANSM (décembre 2024), EMA (2024, 2026), avis ANSES (2013–2019), EFSA et règlements UE (2022/860, 2022/2340)',
      detail: 'Pseudoéphédrine Liste I et ibuprofène caché, réglisse EMA 2026, levure de riz rouge (< 3 mg/j), EGCG (< 800 mg/j), berbérine, boissons énergisantes et stimulants minceur.',
    },
    {
      label: 'Recommandations ESC 2026, consensus européen Abdin (2025, EJHF), AHA (2016, 2022) et ESPEN (2022)',
      detail: 'AINS Classe III niveau B2, alternatives antalgiques, plantes et stimulants à risque, déplétions en B1/B12/magnésium et toxicité de la B6.',
    },
    {
      label: 'Études pharmacocinétiques et de vie réelle (Kim 2018, Liao 2026, Hsu 2022, Tsai 2017, Hoerr 2022, Mai 2025, Grzesk 2021, Zeng 2022)',
      detail: 'Thé vert + digoxine (-31 à -33 %), lacune humaine sur les bêtabloquants IC (bisoprolol rat seul), danshen/ginkgo/curcuma avec AOD et antiagrégants, et effet repas sur le rivaroxaban.',
    },
    {
      label: 'Synthèses et essais complémentaires (Cochrane 2022, Parpia 2018, Picard 2024–2026, Khan 2021, An 2022, Chua 2025, QUEST 2024, Guo 2012, Berg-Hansen 2024, López-Clemente 2025)',
      detail: 'Additifs potassiques cachés et biodisponibilité, substituts de sel, vitamines, phytothérapie chinoise, berbérine, boissons cétoniques et artefact créatine/DFGe.',
    },
  ],
  disclaimerType: 'medical',
};
