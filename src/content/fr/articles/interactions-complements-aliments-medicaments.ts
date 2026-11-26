import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'interactions-complements-aliments-medicaments',
  sourceWikiPath: 'wiki/concepts/supplement-and-food-drug-interactions.md',
  titleFr: 'Interactions entre compléments, aliments et médicaments cardiaques',
  category: 'nutrition',
  readingTier: 'essential',
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
    "Un produit « naturel » ou en vente libre peut interagir sérieusement avec vos médicaments cardiaques. Les principaux risques concernent les sels au potassium, les anti-inflammatoires, les décongestionnants, le régime cétogène sous iSGLT2, la réglisse, le millepertuis et la levure de riz rouge. Demandez toujours l'avis de votre pharmacien ou de votre cardiologue avant toute prise, sans jamais arrêter un traitement prescrit.",
  keyTakeawaysFr: [
    "Évitez les anti-inflammatoires (ibuprofène, kétoprofène, diclofénac) et les médicaments combinés contre le rhume ; demandez à votre médecin ou pharmacien un antalgique adapté.",
    "Ne prenez pas de substituts de sel au potassium ni de comprimés de potassium sans accord médical sous ARNI, IEC, ARA2 ou ARM.",
    "Sous iSGLT2, évitez le régime cétogène et les jeûnes prolongés ; connaissez les signes d'acidocétose (nausées, vomissements, douleurs abdominales, essoufflement).",
    "Évitez la réglisse véritable, le millepertuis, la levure de riz rouge (avec une statine), les extraits concentrés de thé vert, la berbérine et les boissons énergisantes.",
    "Signalez tout complément à votre équipe avant une prise de sang (la créatine fausse le DFGe) ou une chirurgie, surtout sous anticoagulant ou antiagrégant.",
  ],
  sections: [
    {
      headingFr: 'Les quatre pièges les plus fréquents en automédication',
      depth: 'patient',
      bodyMarkdownFr: `Cette page concerne les produits pris de votre propre initiative : **n'arrêtez jamais un médicament prescrit sans l'avis de votre équipe**.

- **1. Anti-inflammatoires (AINS) et médicaments contre le rhume :** évitez l'ibuprofène, le kétoprofène, le naproxène et le diclofénac (l'aspirine à faible dose prescrite pour vos artères coronaires est un cas à part). Les AINS favorisent la rétention d'eau, freinent l'action des diurétiques et peuvent fragiliser les reins, surtout avec le sacubitril/valsartan (*Entresto*), les IEC ou les ARA2. Méfiez-vous aussi des médicaments combinés contre le rhume (en France, *Nurofen Rhume* et *Rhinadvil* associent ibuprofène et pseudoéphédrine ; depuis le **11 décembre 2024**, les décongestionnants oraux à la pseudoéphédrine sont sur ordonnance et restent déconseillés). Demandez à votre médecin ou pharmacien les alternatives autorisées (comme le paracétamol ou un gel local).
- **2. Sels au potassium et additifs cachés :** sous ARNI (*Entresto*), IEC, ARA2 ou ARM (spironolactone — *Aldactone*, éplérénone — *Inspra*), évitez les **substituts de sel au potassium**, les comprimés de potassium et les plats industriels « réduits en sodium » contenant du chlorure de potassium. Les fruits et légumes entiers ordinaires ne sont généralement pas interdits si votre kaliémie est normale, mais restez prudent sur les formes concentrées (jus, smoothies denses, fruits secs) si votre fonction rénale est abaissée (DFGe 30 à 44 mL/min/1,73 m²), en cas de diabète ou de potassium supérieur à 4,8–5,0 mmol/L.
- **3. Régime cétogène et jeûne prolongé sous iSGLT2 :** sous dapagliflozine (*Forxiga*) ou empagliflozine (*Jardiance*), un régime très pauvre en glucides, un jeûne prolongé, une déshydratation, une infection aiguë ou une chirurgie peuvent favoriser une **acidocétose** — parfois avec une glycémie presque normale. Connaissez les signes d'alerte : **nausées, vomissements, douleurs abdominales, malaise général et essoufflement**. Discutez avec votre médecin d'une pause d'au moins **3 jours avant une chirurgie programmée**.
- **4. Vitamines et compléments sans bénéfice voire risqués :** évitez en automédication la **vitamine E à forte dose**, le **bêta-carotène**, l'association **calcium + vitamine D**, les fortes doses d'**oméga-3** (> 1 g/j, risque de fibrillation atriale), les **complexes B « cœur »** après infarctus, la **vitamine B6 à forte dose** (limite européenne 12 mg/j) et les excès de **vitamine D** (plafond adulte 4 000 UI/j, prudence avec la digoxine et les thiazides). Si vous prenez des diurétiques, de la metformine ou un IPP au long cours, demandez à votre médecin si un bilan (vitamines B1, B12, magnésium) est utile plutôt que de prendre un complément seul.`,
    },
    {
      headingFr: 'Plantes, boissons et compléments à éviter ou faire vérifier',
      depth: 'patient',
      bodyMarkdownFr: `- **Réglisse véritable (bonbons, tisanes digestives, sirops, chewing-gums) :** elle retient le sel et l'eau, fait monter la tension et baisser le potassium — exactement l'effet inverse d'un ARM. Elle peut déclencher une poussée d'insuffisance cardiaque ou un trouble du rythme (les arômes d'anis sans réglisse ne sont pas concernés).
- **Millepertuis (*Hypericum perforatum*) :** il accélère l'élimination de nombreux médicaments cardiaques et réduit leur efficacité — notamment les **anticoagulants directs (AOD)**, l'**éplérénone (*Inspra*)**, l'**ivabradine (*Procoralan*)**, l'**atorvastatine (*Tahor*)**, la **digoxine** et la **warfarine** — et peut à l'inverse majorer le risque de saignement sous **clopidogrel (*Plavix*)**. Il expose aussi à une interaction grave avec les antidépresseurs. En cas de baisse de moral, parlez-en à votre médecin plutôt que d'en prendre.
- **Levure de riz rouge :** elle contient une statine naturelle (monacoline K) en dose très variable. Ne l'associez jamais à une statine prescrite (risque musculaire, hépatique et rénal) et ne la substituez jamais à votre traitement.
- **Jus de pamplemousse :** à éviter avec la **simvastatine** et l'**ivabradine (*Procoralan*)**, et à limiter en grande quantité avec l'**atorvastatine (*Tahor*)** (pas d'avertissement avec la **rosuvastatine — *Crestor***).
- **Extrait concentré de thé vert (gélules minceur / EGCG) :** différent d'une tasse de thé vert infusé classique, il diminue l'absorption de plusieurs médicaments (digoxine, lisinopril, statines) et expose à une toxicité hépatique à forte dose. Demandez l'avis de votre pharmacien ou cardiologue avant toute prise.
- **Ginseng, danshen (sauge rouge) et formules de phytothérapie chinoise :** qualité très variable, substances parfois directement actives sur le cœur et risque hémorragique sous anticoagulants (évitez le **danshen** avec tout anticoagulant). Évitez également l'**aubépine**, le **muguet** et l'**actée bleue**.
- **Berbérine :** déconseillée avec les médicaments par l'ANSES en France (interactions enzymatiques plausibles avec anticoagulants, digoxine, bêtabloquants et statines).
- **Boissons énergisantes et brûleurs de graisse :** peuvent élever tension et rythme cardiaque et contenir des substances cachées ; déconseillés en cas de cardiopathie.
- **Psyllium (ispaghul) et créatine :** espacez le **psyllium** de **30 à 60 minutes** de vos autres médicaments (surtout digoxine et warfarine) et comptez les **150 mL d'eau** par sachet si vous avez une limite hydrique. Signalez toute prise de **créatine** avant une prise de sang : elle fait artificiellement baisser le DFGe calculé sans abîmer le rein, ce qui pourrait fausser l'ajustement de vos traitements.`,
    },
    {
      headingFr: "Anticoagulants, antiagrégants et préparation d'une chirurgie",
      depth: 'patient',
      bodyMarkdownFr: `Si vous prenez de l'aspirine, du clopidogrel (*Plavix*), du ticagrélor (*Brilique*) ou un anticoagulant (AVK ou AOD), toute association avec une plante ou un complément mérite une vérification préalable, car les AOD ne disposent pas d'un contrôle sanguin courant comme l'INR.

- **Produits à surveiller pour le risque de saignement :** évitez le **danshen** et la **vitamine E à forte dose** ; demandez un avis avant toute gélule de **ginkgo biloba**, d'**ail concentré**, de **curcuma** ou d'**huile de poisson à forte dose**. L'**ail utilisé normalement en cuisine** ne pose pas ce problème.
- **Prise avec les repas sous rivaroxaban (*Xarelto*) :** les doses de **15 mg et 20 mg** doivent impérativement être prises **au cours d'un repas** pour être bien absorbées ; un jeûne prolongé expose à une protection insuffisante.
- **Avant une chirurgie ou un acte invasif :** signalez systématiquement tous vos compléments à l'anesthésiste et au chirurgien (les repères européens prévoient par exemple d'arrêter le **ginkgo 3 à 4 jours avant** et les **gélules d'ail 7 jours avant** ; voir *Chirurgie, soins dentaires et jours de maladie*).
- **La règle d'or :** apportez la liste complète de vos compléments, plantes, tisanes et médicaments sans ordonnance à votre cardiologue, votre médecin traitant et votre pharmacien, et en cas de doute, abstenez-vous tant que votre équipe n'a pas validé le produit.`,
    },
    {
      headingFr: 'Données détaillées : RCP officiels, millepertuis, plantes et compléments',
      depth: 'evidence',
      bodyMarkdownFr: `### Potassium, AINS, décongestionnants et iSGLT2
- **Potassium et notices :** RCP *Entresto* (substituts de sel et compléments cités avec la spironolactone), notices FDA *Inspra* (2025, contre-indication si ClCr ≤ 30 mL/min ou K+ > 5,5 mmol/L) et *Spironolactone* (02/2026, contrôle kaliémie à 1 semaine, 25 mg 1 j/2 envisageable entre 30 et 50 mL/min). **PARADIGM-HF** : ~16 % > 5,5 mmol/L sans supplément. **Cochrane 2022** : aucun patient IC inclus, 12 vs 10 événements d'hyperkaliémie. Additifs cachés : **Parpia 2018** (+44 % de K+, médiane 900 vs 325 mg/100 g, jusqu'à 1 500 mg/100 g) ; **Picard 2024/2025** (23,3 % des produits « réduits en sodium » contenaient des substituts potassiques contre 2,4 %, seuls 5,7 % l'affichaient) ; **Picard 2026** (absorption totale 88–94 % toutes sources).
- **AINS et décongestionnants :** **ESC 2026 Classe III, niveau B2** ; consensus **Abdin 2025 (*EJHF*)** (risque dose-dépendant, plus élevé avec diclofénac, indométacine, piroxicam ; célécoxib à forte dose ; alternatives paracétamol ou AINS topiques). Revue **EMA 2024** (PRES et RCVS) -> **ANSM** : pseudoéphédrine en **Liste I** (ordonnance obligatoire depuis le 11/12/2024), contre-indiquée dans les RCP français en cas de coronaropathie sévère, insuffisance rénale ou HTA sévère/non contrôlée. FDA (nov. 2024) : proposition de retrait OTC de la phényléphrine orale ; **AHA 2016** : risque ischémique et rythmique.
- **iSGLT2 et cétones :** RCP *Forxiga* (pause ≥ 3 j avant chirurgie ou jeûne). Dans **DAPA-HF, DELIVER, DAPA-CKD**, acidocétoses observées uniquement chez des diabétiques. Boissons d'esters de cétones (**Berg-Hansen 2024** 14 j, diabétiques exclus ; **Selvaraj 2025** dose unique) : baisse transitoire du pH sans acidocétose, pas de données au long cours ; sels de cétones riches en sodium.

### Vitamines et micronutriments à risque
| Produit | Constat principal | Source |
|---|---|---|
| **Vitamine E (forte dose)** | Davantage d'hospitalisations IC (**RR 1,21**, certitude modérée, 2 essais, 17 956 sujets non spécifiquement IC) ; déconseillée en prévention CV | Khan 2021 ; USPSTF 2022 |
| **Bêta-carotène** | Mortalité totale (**RR 1,10**) et CV (**RR 1,12**) accrues | An 2022 ; USPSTF 2022 |
| **Calcium + vitamine D (automédication)** | Risque accru d'AVC (**RR 1,17**, certitude modérée) | Khan 2019 |
| **Oméga-3 (> 1 g/j)** | Risque de FA augmenté d'environ **49 %** | Gencer 2021 |
| **Aubépine / muguet / actée bleue** | Aubépine : aggravation possible de l'IC ; muguet/actée bleue : toxicité, interactions digoxine, hypokaliémie, arythmies | AHA 2022 |
| **Vitamine D seule** | Pas de bénéfice cardiaque ; hypercalcémie majorant la **digoxine** (RCP *ZymaD*, *Fultium-D3*) ; thiazides augmentant la calcémie ; plafond 4 000 UI/j (100 µg/j). Précaution AHA sur les inhibiteurs calciques non référencée (unique cas 1981 vérapamil/diltiazem forte dose) | AHA 2022 ; RCP FR |
| **Acide folique + B12 + B6** | Post-infarctus : tendance à plus de récidives (**RR 1,22**, IC 95 % 1,00–1,50, p = 0,05) ; neutre sur 15 essais | NORVIT 2006 ; Cochrane 2017 |
| **Vitamine B6 forte dose** | Neuropathie sensitive dès ~100 mg/j prolongé (limite UE 12 mg/j) | ESPEN 2022 |

- **Déplétions médicamenteuses (ESPEN 2022) :** diurétiques de l'anse (thiamine B1, magnésium), metformine et IPP/anti-H2 (B12, magnésium) ; le magnésium s'accumule en cas d'insuffisance rénale et réduit l'absorption des tétracyclines, fluoroquinolones, bisphosphonates et rosuvastatine (antiacides).

### Millepertuis : vérification directe des RCP (CYP3A4, CYP2C9, CYP2C19, P-gp)
| Médicament | Nommé sur RCP ? | Position officielle et données humaines |
|---|---|---|
| **Dabigatran (*Pradaxa*)** | Oui (EMA) | Inducteur P-gp : **« utilisation concomitante doit être évitée »** |
| **Rivaroxaban (*Xarelto*)** | Oui (EMA, US) | **« Doit être évité sauf surveillance étroite des signes de thrombose »** (**Scholz 2021**, n = 12 : AUC **-24 %**, anti-Xa **-20 %**) |
| **Apixaban (*Eliquis*)** | Oui (EMA, US) | US : éviter ; EMA : prudence (FA/prévention) et **non recommandé** en aigu TVP/EP (baisse ~50 %) |
| **Édoxaban (*Lixiana*)** | Oui (EMA) ; Non (US) | EMA : **« doit être utilisé avec prudence »** |
| **Éplérénone (*Inspra*)** | Oui (FR BDPM 01/2025, UK eMC 01/2026, US) | Baisse de **30 % de l'AUC** ; inducteurs forts CYP3A4 **non recommandés** |
| **Ivabradine (*Procoralan*)** | Oui (US) | **À éviter** (comme le jus de pamplemousse) |
| **Atorvastatine (*Tahor*)** | Oui (FR BDPM 01/2025, UK eMC 08/2026) | Réductions variables (**Andren 2007**, n = 16 : LDL **0,90 à 1,03 g/L**, p = 0,004) |
| **Rosuvastatine (*Crestor*)** | Non (UK, US) | Faible substrat CYP ; aucun avertissement vérifié |
| **Simvastatine** | Non sur RCP UK/US vérifiés | Citée NIH NCCIH ; **Eggertsen 2007** (n = 24) confirme hausse du cholestérol |
| **Ticagrélor (*Brilique*)** | Avertissement de classe | Inducteurs puissants CYP3A **déconseillés / à éviter** (rifampicine -86 % AUC) |
| **Clopidogrel (*Plavix*)** | Avertissement de classe (**sens inverse**) | EMA : inducteurs forts CYP2C19 **augmentent** le métabolite actif et le risque de saignement — **déconseillé** (**Lau 2011**, n = 10 + 20) |
| **Digoxine, warfarine** | NIH NCCIH | Effet diminué (variable selon hyperforine, **Nicolussi 2020**) |

### Autres plantes, EGCG, phytothérapie chinoise et stimulants
- **Réglisse (glycyrrhizine) :** bloque 11-bêta-HSD2 ; monographie **EMA 2026** déconseillée en cas de cardiopathie/HTA/MRC/hypokaliémie et avec diurétiques/digoxine/corticoïdes ; limite UE 100 mg/j (~60–70 g réglisse), alerte FDA dès 57 g/j × 2 semaines après 40 ans.
- **Levure de riz rouge :** teneur en monacoline K variant d'un facteur 60, citrinine rénale, rhabdomyolyse sous rosuvastatine (EFSA), réactions graves dès 3 mg/j, règlement **UE 2022/860** (< 3 mg/j), contamination acide pubérulique au Japon en 2024 (6 dialyses / 192 patients) ; essai chinois CCSPS sur extrait pharmaceutique sans statine.
- **Extrait concentré de thé vert (EGCG) :** petites études humaines — **digoxine** **-31 à -33 %** (n = 15, **Kim 2018**), **lisinopril** **-67 %** (n = 10), **nadolol** **-85 %** (n = 10), **céliprolol** **-98,6 %** (n = 3), **rosuvastatine** **-19 %** aigu (n = 13), **atorvastatine** **-22 à -24 %** (n = 12). Lacune humaine vérifiée (**Kyriacou 2025**) : aucune étude PK humaine pour bisoprolol, métoprolol, carvédilol, nébivolol, ARNI ou iSGLT2 (**Zeng 2022** bisoprolol = rat uniquement, 100 mg/kg, p = 0,17). Toxicité hépatique EFSA dès **800 mg/j** (règlement **UE 2022/2340** < 800 mg/j ; 75 cas US, 3 greffes / 40).
- **Phytothérapie chinoise :** **QUEST (*Nature Medicine* 2024**, 3 110 patients chinois ICFER, ~74 % ischémiques, < 10 % sous iSGLT2, financé fabricant) : *Qiliqiangxin* sur prescription, décès CV ou hosp. IC 25,0 % vs 30,0 % (HR 0,78), mortalité globale ns ; ne valide pas les gélules du commerce. Revue parapluie **Chua 2025** : *Pueraria* (hyperkaliémie), *Qishen Yiqi* (hypotension, vertiges ; OR 0,43 sur 9 essais d'un seul fabricant), *Qili Qiangxin* et *Shexiangbaoxin* (substances cardioactives : aconit préparé, *Periploca*, venin de crapaud), injections *Shenfu/Shen Mai* (jusqu'à 21 % d'EI).
- **Berbérine :** **Guo 2012** (n = 17, inhibition CYP3A4 +40 %, CYP2D6 ×9, CYP2C9 ×2), **Wu 2005** (ciclosporine), **ANSES 2019** déconseille avec médicaments, teneur 33–100 % (**Funk 2018**).
- **Stimulants, psyllium, créatine :** boissons énergisantes (**Shah 2019** : QTc +6 à +8 ms, PAS +5 à +6 mmHg ; **ANSES 2013** : 25/212 signalements imputables) ; brûleurs de graisse (*p*-synéphrine, éphédra, DMAA, yohimbine, médicaments cachés **Tucker 2018**, **ANSES 2014/2016**, **AHA 2016**) ; psyllium (*Fybogel*/*Spagulax* : 30–60 min, 150 mL) ; créatine (**López-Clemente 2025** : hausse réversible de créatininémie / fausse baisse du DFGe).`,
    },
    {
      headingFr: 'Données détaillées : risque hémorragique sous antithrombotiques et lacunes',
      depth: 'evidence',
      bodyMarkdownFr: `| Produit | Ce que montrent les données | Position officielle | Solidité |
|---|---|---|---|
| **Huile de poisson (oméga-3)** | Grands essais (79 % sous antiagrégants dans **REDUCE-IT**) : saignements 2,6 % vs 2,4 % (ns) ; EPA purifié 4 g/j : +0,6 / 100. Pas d'essai AOD | Notice icosapent éthyl : surveiller avec aspirine, clopidogrel ou warfarine | Bonne (antiagrégants) ; indirecte AOD |
| **Ginkgo biloba** | 18 essais : coagulation inchangée ; cas hémorragiques ; cohorte vétérans US warfarine HR 1,38. **EGb 761** (240 mg/j × 8 j, n = 41, financé fabricant, **Hoerr 2022**) : PK et anti-FXa rivaroxaban inchangées (GMR 96,8–99,8 %). **Mai 2025** : lien faible clopidogrel (OR 1,10) et aspirine (OR 1,12), AOD (n = 18) et ticagrélor (n = 2) insuffisants. Cohortes taïwanaises neutres (**Chan 2011**, **Hsu 2022** aHR 0,919 ns) | EMA : avis médical si antithrombotique ; **arrêt 3 à 4 j avant chirurgie** ; prudence dabigatran | Mitigée (faible pour non standardisé et AOD/ticagrélor) |
| **Danshen (*Salvia miltiorrhiza*)** | Surdosages graves sous warfarine (3 cas + valve). **Liao 2026** (Taïwan, 146 patients, majorité AOD, 78,8 % antiagrégant, 92,5 % HAS-BLED ≥ 2) : saignements ×4 J1–14 (**aIRR 3,98**, 3,29–4,77) et J15–28 (**aIRR 3,99**), digestifs 3,79, intracrâniens 3,59 ; mais 0 saignement majeur hospitalisé et atténuation en premier événement (digestif J1–14 aIRR 2,02 [1,14–2,91]). **Hsu 2022** (99 % warfarine / 1 % AOD) : saignements hospitalisés neutres (aHR 0,948 ns). **Tsai 2017** (antiagrégants) : n = 7–11. Induction CYP3A4/P-gp (-80 % midazolam), 39,7 % non-conformité qualité | **Éviter avec tout anticoagulant** (avis cardiologue/pharmacien) | Faible-modérée (observationnelle, discordante) |
| **Ginseng** | Ginseng américain : pic INR warfarine −0,19 (n = 20) ; asiatique : INR neutre (n = 25 valves), 1 hémorragie chirurgicale. **Tsai 2017** (antiagrégants, n = 1 209) : aOR 3,27 [1,09–9,83] vs 1,49 ns selon fenêtre ; **Hsu 2022** (99 % warfarine) : aHR 0,762 [0,596–0,974]. Aucun essai PK AOD. Bref QT +15 ms, interférence anciens dosages digoxine, variabilité ×36 | **AHA 2016** : potentiellement nocif dans l'IC | Discordante / faible |
| **Compléments d'ail** | Diminuent l'agrégation plaquettaire ; petit essai ail vieilli sous warfarine rassurant ; aucun essai humain AOD ou P2Y12 (**Grzesk 2021**) | EMA : prudence antithrombotiques ; **éviter 7 j avant chirurgie** | Modérée (chirurgie) ; faible (AOD/P2Y12) |
| **Vitamine E (forte dose)** | 2 grands essais : davantage d'AVC hémorragiques (dont un majoritairement sous aspirine) | NIH : > 400 UI/j peut majorer les saignements | Modérée |
| **Curcuma / curcumine** | 2 cas sous warfarine ; signal mécanistique CYP/P-gp (**Grzesk 2021**). **Hu 2018** (*Meriva* + dabigatran) utilisait l'INR (non valide pour le dabigatran) | NIH : alerte atteinte hépatique avec formes à forte absorption | Faible (très faible AOD) |

- **Effet repas et décoctions :** biodisponibilité du **rivaroxaban** 15/20 mg réduite à **66 %** à jeun (+39 % d'AUC avec repas) ; 1 cas d'hémorragie fatale sous dabigatran après 3 jours de décoction gingembre-cannelle (**Grzesk 2021**).
- **Principales lacunes vérifiées :** absence d'essais PK ou hémorragiques humains dédiés pour ail, curcuma, ginseng, huile de poisson forte dose et ginkgo non standardisé avec apixaban, édoxaban, dabigatran ou ticagrélor ; absence d'études PK humaines EGCG avec bêtabloquants ICFER, ARNI ou iSGLT2 ; texte intégral **EHRA 2021** sur les AOD non consulté directement (concordant avec les 4 RCP EMA vérifiés).`,
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
