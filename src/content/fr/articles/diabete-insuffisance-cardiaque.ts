import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'diabete-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/concepts/diabetes-in-heart-failure.md',
  titleFr: 'Diabète et insuffisance cardiaque',
  category: 'comorbidites',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'diabète',
    'diabète-type-2',
    'esc-2023-diabète',
    'isglt2',
    'metformine',
    'glp1',
    'inhibiteurs-dpp4',
    'glitazones',
    'insuline',
    'sulfamides-hypoglycémiants',
    'hypoglycémie',
    'acidocétose',
    'hba1c',
    'comorbidités',
  ],
  aliases: [
    'Diabète et insuffisance cardiaque',
    'Diabète de type 2',
    'Antidiabétiques et insuffisance cardiaque',
    'HbA1c',
    'Acidocétose euglycémique',
    'Metformine',
    'Saxagliptine',
    'Pioglitazone',
    'Diabète',
  ],
  linkedModules: ['diabetes'],
  plainSummaryFr:
    "Entre un tiers et la moitié des personnes atteintes d'ICFER ont un diabète, qui aggrave le pronostic cardiovasculaire et rénal. Les inhibiteurs du SGLT2 (dapagliflozine — Forxiga, empagliflozine — Jardiance) sont avant tout des médicaments de l'insuffisance cardiaque : ils protègent le cœur tout autant avec ou sans diabète (DAPA-HF p d'interaction = 0,80 ; EMPEROR-Reduced p = 0,57) et reçoivent la Classe I, A dans les recommandations européennes (ESC 2023) comme américaines (AHA/ACC/HFSA 2022). Si d'autres antidiabétiques sont nécessaires, la vérification directe du tableau 22 d'ESC 2023 confirme la Classe IIa, A pour les agonistes GLP-1 et la sitagliptine/linagliptine (l'ADA 2022 déconseille toutefois toute la classe des gliptines, et les recommandations américaines classent la saxagliptine et l'alogliptine en Classe 3 : Danger), la Classe IIa, B pour les insulines basales (glargine, dégludec) et la metformine (en IC chronique stable uniquement), et la Classe III (non recommandés) pour la pioglitazone et la saxagliptine. La metformine apparaît neutre et sûre en ICFER stable (y compris dans les premiers résultats de Met-HeFT, HR 1,10), tandis que l'insuline et les sulfamides exposent aux hypoglycémies et sont liés à de moins bons résultats en cohortes observationnelles. Une cible glycémique excessivement stricte n'est pas recherchée. Enfin, l'acidocétose sous iSGLT2 est rare (~1 pour 1 000 personnes-années) mais peut survenir à glycémie presque normale, surtout lors d'une maladie aiguë, d'un jeûne ou d'une chirurgie.",
  sections: [
    {
      headingFr: 'Fréquence et bénéfice identique des iSGLT2 avec ou sans diabète',
      bodyMarkdownFr: `Cette fiche concerne la prise en charge du diabète lorsqu'une ICFER est déjà établie. Le dépistage de l'insuffisance cardiaque chez la personne diabétique sans IC connue est abordé dans *Dysfonction ventriculaire asymptomatique (stade B)*.

### Une association fréquente qui alourdit le risque

- Dans l'analyse groupée de **15 066 patients** d'essais d'ICFER, **31,5 %** avaient un diabète, associé à un risque accru de décès (**HR ajusté 1,29**) (Dewan 2023).
- Les recommandations **ESC 2023** rapportent environ **36 %** de diabète chez les patients suivis en ambulatoire pour IC chronique (jusqu'à **50 %** en IC aiguë), avec une mortalité cardiovasculaire **50 à 90 % plus élevée** lorsque les deux maladies coexistent (ESC 2023 texte intégral).
- Dans **EMPEROR-Reduced**, les patients diabétiques sous placebo subissaient environ **40 %** d'événements d'insuffisance cardiaque en plus (**24,6 contre 17,6 pour 100 patients-années**) et perdaient leur fonction rénale presque deux fois plus vite que les non-diabétiques (Anker 2021).
- Lorsqu'une insuffisance cardiaque est découverte chez une personne diabétique, une maladie coronarienne doit être recherchée (consensus ADA 2022).

### Les iSGLT2 : même protection cardiaque quel que soit le diabète

| Essai | Avec diabète | Sans diabète | Test d'interaction |
|---|---|---|---|
| **DAPA-HF** (4 744 patients, FEVG moyenne ~31 %, 45 % diabétiques) | **HR 0,75** (0,63–0,90) | **HR 0,73** (0,60–0,88) | p = 0,80 |
| **EMPEROR-Reduced** (3 730 patients, FEVG moyenne ~27 %, 50 % diabétiques) | **HR 0,72** (0,60–0,87) | **HR 0,78** (0,64–0,97) | p = 0,57 |

Sources : Petrie 2020 ; Anker 2021.

- Le bénéfice ne dépendait pas de l'HbA1c initiale, y compris chez les personnes sans diabète séparées au seuil de 5,7 % (Petrie 2020 ; Anker 2021).
- L'HbA1c n'a diminué que modestement (environ **0,26 point** dans DAPA-HF) et uniquement chez les personnes diabétiques ; ces médicaments n'abaissent pas la glycémie chez les non-diabétiques et ne provoquent pas d'hypoglycémie isolément.
- Dans EMPEROR-Reduced, le critère rénal combiné a diminué de moitié environ avec ou sans diabète (**HR 0,53** et **0,42**) (Anker 2021).
- *Applicabilité :* **directe** (essais d'ICFER comportant 61 à 64 % d'origine ischémique dans le groupe diabétique de DAPA-HF) (Petrie 2020).
- **Convergence des recommandations :** **ESC 2023** (tableaux 20 et 22) recommande la dapagliflozine (*Forxiga*), l'empagliflozine (*Jardiance*) ou la sotagliflozine dans l'ICFER avec diabète de type 2 (**Classe I, A**), aux côtés des ARNI/IEC, bêtabloquants et ARM (**tous Classe I, A**) ainsi qu'une titration rapide après hospitalisation (**Classe I, B**). **AHA/ACC/HFSA 2022** classe les iSGLT2 en **Classe 1, A** dans l'ICFER chronique symptomatique avec ou sans diabète (et **Classe 1, A** au stade A chez le diabétique avec MCV ou haut risque). **ADA 2022 et 2026** en font un traitement attendu (**Grade A**).`,
    },
    {
      headingFr: 'Autres antidiabétiques : recommandations ESC 2023 et comparatif américain',
      bodyMarkdownFr: `Toutes les classes et niveaux ESC 2023 ci-dessous ont été vérifiés directement dans le **tableau de recommandations 22** (p. 4094) et la section 7.5 du PDF publié (ESC 2023 texte intégral).

| Médicament antidiabétique | ESC 2023 (tableau 22) | Recommandations américaines (AHA/ACC/HFSA 2022 ; ADA 2022/2026) | Repères de sécurité clinique dans l'ICFER |
|---|---|---|---|
| **iSGLT2** (dapagliflozine, empagliflozine, sotagliflozine) | **Classe I, A** (ICFER) ; **I, A** (FEVG > 40 % : empa/dapa) | AHA 2022 **Classe 1, A** (ICFER) ; ADA 2026 **Grade A** | Réduisent hospitalisations IC et décès CV quelle que soit l'HbA1c |
| **Metformine** (*Glucophage*, *Stagid*) | **Classe IIa, B** (*note d : IC chronique et stable uniquement*) | ADA 2022 : sûre (observationnel) ; RCP US : éviter si DFGe < 30, ne pas débuter à 30–45 | Neutre dans les sous-groupes ICFER et dans les résultats préliminaires Met-HeFT ; pas d'excès d'acidose lactique si IC stable et DFGe > 30 |
| **Agonistes GLP-1** (lixisénatide, liraglutide — *Victoza*, sémaglutide — *Ozempic*/*Rybelsus*, exénatide LP, dulaglutide — *Trulicity*, efpéglénatide) | **Classe IIa, A** (neutres sur hospitalisations IC ; ne pas associer à un DPP-4) | ADA 2026 : **Grade A** en maladie athéromateuse, pas d'indication ICFER ; ADA 2022 : glycémie/poids/athérome, non pour traiter l'IC | *Tension interne dans ESC 2023 :* le tableau 22 donne IIa A toute IC confondue, alors que le §7.5.2 cite LIVE (plus d'événements cardiaques graves sous liraglutide dans l'ICFER : 10 % contre 3 %, p = 0,04) et FIGHT (HR 1,30, NS). SOUL (2026) montre HR 0,98 chez 592 diabétiques ICFER |
| **Sitagliptine** (*Januvia*), **linagliptine** (*Trajenta*) (inhibiteurs DPP-4) | **Classe IIa, A** (neutres dans TECOS, CARMELINA) | **ADA 2022 déconseille les gliptines en tant que classe** dans l'IC ; AHA 2022 muette sur ces deux molécules | Divergence nette ESC vs ADA. La **vildagliptine** (*Galvus*) n'a pas d'essai CVOT et a augmenté les volumes VG dans un petit essai (ESC §7.5.3) |
| **Alogliptine** (inhibiteur DPP-4) | Omise de la Classe IIa (tendance non significative d'IC dans EXAMINE, §7.5.3) | AHA 2022 **Classe 3 : Danger, B-R** (§7.3.7) ; ADA 2022 : éviter | Restriction américaine plus stricte que l'ESC |
| **Saxagliptine** (*Onglyza*, DPP-4) | **Classe III, B** (non recommandée) | AHA 2022 **Classe 3 : Danger, B-R** ; ADA 2022 : éviter | Augmentation des hospitalisations pour IC dans SAVOR-TIMI 53 (HR 1,27) |
| **Pioglitazone / glitazones** | **Classe III, A** (non recommandées) | AHA 2022 **Classe 3 : Danger, A** ; ADA 2022 : éviter | Rétention hydrosodée et poussées d'IC (~+0,4 %/an en absolu avec la pioglitazone) |
| **Insulines basales** (glargine — *Lantus*, dégludec — *Tresiba*) | **Classe IIa, B** (neutres dans ORIGIN, DEVOTE) | ADA 2022 : possibles si nécessaires ; surveiller rétention hydrique, poids et hypoglycémies | *Tension :* ESC §7.5.4 signale une association à un pronostic plus défavorable dans l'IC avancée ; risque accru en cohortes observationnelles |
| **Sulfamides hypoglycémiants** (ex. glimépiride — *Amarel*) | **Aucune ligne gradée** (§7.5.6 : données IC incohérentes) | ADA 2022 : uniquement si les options préférées sont indisponibles | Glimépiride neutre vs linagliptine dans CAROLINA mais 5 fois plus d'hypoglycémies et +1,54 kg ; surrisque d'IC/décès en cohortes observationnelles |

- **Principe de remplacement (ESC 2023, tableau 22) :** substituer un traitement antidiabétique sans bénéfice ni sécurité cardiovasculaire démontrés par un agent à bénéfice prouvé (iSGLT2 ou agoniste GLP-1 validé) est recommandé (**Classe I, C**).
- **Place des médicaments GLP-1 dans l'ICFER :** dans le sous-groupe de **592 patients** diabétiques avec ICFER de l'essai **SOUL**, le sémaglutide oral (*Rybelsus*) n'a pas modifié les événements d'insuffisance cardiaque (**HR 0,98**) (SOUL ; ADA 2026 ; voir *Médicaments GLP-1 et incrétines (sémaglutide, tirzépatide, rétatrutide)*).`,
    },
    {
      headingFr: 'Metformine, insuline et sulfamides : ce que montrent les études dans l’ICFER',
      bodyMarkdownFr: `### Metformine : sécurité observationnelle, neutralité dans l'ICFER et limites rénales

- **Revues d'études observationnelles :** dans **Crowley 2017** (texte intégral, 11 cohortes d'IC, 35 410 patients), la metformine était associée à une moindre mortalité toutes causes (**HR 0,78**, IC 95 % 0,71–0,87) et moins de réhospitalisations pour IC (4 études, 26 510 patients, **HR 0,87**, IC 95 % 0,78–0,97), avec une mortalité cardiovasculaire non significative (HR 0,77 ; 0,53–1,12). **Eurich 2013** (9 cohortes, ~34 000 patients) retrouvait une mortalité réduite (**0,80**, IC 95 % 0,74–0,87, surtout face aux sulfamides) et **aucun surrisque d'acidose lactique**. Crowley classe toutefois le niveau de preuve comme **faible** (biais d'indication et d'utilisateurs prévalents).
- **Données spécifiques à l'ICFER — neutralité plutôt que supériorité :** dans les études de Crowley 2017 stratifiées par FEVG, aucun écart significatif de mortalité n'est observé à FEVG 30–39 % (**HR 0,87** ; 0,67–1,13), < 30 % (**HR 0,87** ; 0,69–1,08) ou < 40 % (**HR 0,79** ; 0,36–1,71) ; même neutralité dans Eurich 2013 pour la FEVG réduite (**0,91** ; 0,72–1,14 ; p = 0,34). Dans **Khan 2022** (cohorte Medicare GWTG-HF, 5 852 patients hospitalisés pour IC), l'initiation de metformine réduisait le critère décès ou hospitalisation à 12 mois au global (**HR 0,81** ; 0,67–0,98), mais l'association était portée par les **FEVG > 40 %** (HR 0,68 ; 0,52–0,90 ; p d'interaction ≤ 0,04) et non par les FEVG ≤ 40 %.
- **Premier essai randomisé d'événements dans l'ICFER (DANHEART / Met-HeFT) :** cet essai danois en double aveugle (FEVG ≤ 40 % ; protocole lu en intégralité, résultats connus uniquement via le communiqué ESC 2026 Hot Line) a randomisé **940 patients** ayant un diabète, un prédiabète ou un risque diabétique (seuls ~10 % avaient un diabète de type 2 avéré) entre metformine et placebo sur 3,7 ans en moyenne. Le critère principal (décès, aggravation d'IC, infarctus ou AVC) était de **25,1 % contre 23,4 %** (**HR 1,10**, IC 95 % 0,84–1,42 ; p = 0,48) : **formellement neutre**. En somme, la metformine apparaît **sûre et neutre** dans l'ICFER chronique stable, sans effet modificateur propre de la maladie.
- **Seuils rénaux et acidose lactique :** ESC 2023 (§7.5.5) restreint la metformine à l'IC chronique stable avec **DFGe > 30 mL/min/1,73 m²** et note que les craintes d'acidose lactique ne se sont pas confirmées. Le RCP américain cite l'IC aiguë, les situations d'hypoxie, l'insuffisance rénale, l'âge ≥ 65 ans, les examens avec produit de contraste iodé et la chirurgie comme facteurs de risque : contre-indiquée sous DFGe 30, non instaurée entre 30 et 45, réévaluée sous 45, suspendue lors d'une injection de produit de contraste iodé en cas d'IC ou de DFGe 30–60 (contrôle du DFGe à 48 h) et pendant le jeûne opératoire. Environ **7 %** des utilisateurs développent un déficit en vitamine B12 (RCP FDA metformine).

### Insuline : neutre dans les essais généraux, pronostic plus lourd en cohortes d'IC

- **Essais d'insulines basales (excluant l'IC avancée NYHA III–IV) :** dans **ORIGIN** (12 537 patients à haut risque CV, médiane 6,2 ans), l'insuline glargine (*Lantus*) était neutre sur les premières hospitalisations et réhospitalisations pour IC. Dans **DEVOTE 14** (texte intégral, 7 637 patients DT2 à haut risque, 2,0 ans, double aveugle), les hospitalisations pour IC ne différaient pas entre **dégludec** (*Tresiba*) et **glargine U100** (**HR 0,88**, IC 95 % 0,72–1,08 ; p = 0,227), avec moins d'hypoglycémies sévères sous dégludec. Dans DEVOTE 14, un antécédent d'IC était le plus fort prédicteur de nouvelle hospitalisation (**HR 4,89** ; 3,90–6,14), et une hypoglycémie sévère précédait une hausse marquée des hospitalisations pour IC (**HR 2,2** au global ; **HR 11,1** dans les 7 jours).
- **Cohortes d'IC établie :** dans **Cosmi 2018** (24 012 patients issus de 4 essais + 103 857 patients en registre), la prescription d'insuline était associée à une mortalité plus élevée (essais **HR 1,27** [1,16–1,38] ; registre **OR 2,02** [1,87–2,19]) et à davantage d'hospitalisations pour IC (essais **HR 1,23** [1,13–1,33] ; registre **OR 1,42** [1,32–1,53]). Des associations similaires sont rapportées dans l'ICFEP (**Shen 2019**, aHR 1,41) et une petite cohorte IRM rétrospective d'ICFER (aHR **2,16** [1,08–4,59] après ajustement sur HbA1c, durée du diabète, NT-proBNP, DFGe et ARNI).
- **Comment interpréter cet écart :** aucun essai randomisé n'a comparé l'insuline à d'autres classes dans l'ICFER. Les personnes ayant besoin d'insuline ont généralement un diabète plus ancien, plus difficile à équilibrer et davantage de fragilité (biais d'indication), même si la rétention hydrosodée, la prise de poids et les hypoglycémies peuvent aussi jouer un rôle. Lorsqu'elle est indispensable, la glargine ou la dégludec disposent du profil le mieux étudié, sous surveillance attentive du poids et des glycémies.

### Sulfamides hypoglycémiants : poids des hypoglycémies et signaux observationnels

- **Essai CAROLINA (glimépiride contre linagliptine) :** chez 6 033 patients ayant un DT2 relativement récent et un risque CV élevé sur 6,3 ans (hors utilisateurs d'insuline et NYHA III–IV), le glimépiride (*Amarel*) n'a pas augmenté les événements cardiovasculaires majeurs ni les hospitalisations pour IC par rapport à la linagliptine (neutre sur l'IC dans CARMELINA). Mais à HbA1c identique, il a provoqué **cinq fois plus d'hypoglycémies** (**17,9 % contre 3,6 %** ; épisodes sévères : **72 contre 15 patients**, HR 0,21 [0,12–0,36] en faveur de la linagliptine) et **+1,54 kg** de poids.
- **Cohortes observationnelles :** dans **Roumie 2017** (131 972 vétérans américains appariés), débuter un sulfamide comportait plus d'hospitalisations pour IC ou de décès cardiovasculaires que la metformine (**aHR 1,32** [1,21–1,43] ; hospitalisations IC aHR 1,30 ; décès CV aHR 1,76), avec ou sans IC initiale. Dans **Richardson 2021** (49 490 patients DT2 à DFGe réduit), la metformine était associée à moins d'hospitalisations pour **ICFER** que les sulfamides (**HR 0,79** [0,67–0,93]). Dans **Khan 2022** (5 852 patients Medicare hospitalisés pour IC), un sulfamide nouvellement prescrit était associé à une mortalité à 12 mois nominalement supérieure (**HR 1,24** [1,00–1,52], p = 0,045) et davantage d'hospitalisations pour IC (**HR 1,22** [1,00–1,48], p = 0,050) quelle que soit la FEVG (y compris ≤ 40 %). Une petite méta-analyse en réseau de 2025 sur critères intermédiaires retrouvait également plus d'hypoglycémies sous glimépiride que sous sémaglutide, sans bénéfice sur le BNP.
- **En résumé :** ESC 2023 n'attribue pas de ligne gradée aux sulfamides et l'ADA 2022 les réserve aux situations où aucune option plus sûre n'est accessible.`,
    },
    {
      headingFr: 'Cible d’HbA1c, hypoglycémies et acidocétose sous iSGLT2',
      bodyMarkdownFr: `### Jusqu'où abaisser la glycémie ?

- **ESC 2023 (tableau 7, p. 4064) :** un contrôle glycémique strict (**HbA1c < 7 %**) réduit les complications microvasculaires (**Classe I, A**) ; **éviter les hypoglycémies** est recommandé en particulier en cas de maladie cardiovasculaire (**Classe I, B**) ; les objectifs d'HbA1c doivent être **individualisés** selon les comorbidités, l'ancienneté du diabète et l'espérance de vie (**Classe I, C** ; la figure 4 évoque **< 8,5 %** en cas d'espérance de vie limitée) ; un objectif plus strict visant la prévention coronarienne au long cours privilégie les molécules à bénéfice cardiovasculaire prouvé (**Classe IIa, B**).
- **Pas de prévention de l'IC par un contrôle trop strict :** les méta-analyses d'UKPDS, ADVANCE, ACCORD et VADT (27 049 patients) n'ont montré aucune baisse des cas d'insuffisance cardiaque, et **ACCORD** a enregistré une **surmortalité** sous contrôle intensif (HbA1c 6,5 % : **HR 1,22**, IC 95 % 1,01–1,46 ; p = 0,04). Dans l'insuffisance cardiaque, les données observationnelles dessinent une courbe en U avec une mortalité minimale autour de **7 à 8 % d'HbA1c** ; votre objectif reste défini au cas par cas avec votre médecin (ESC 2023 ; ADA 2022).
- **Hypoglycémie et bêtabloquants :** dans **Marx 2024** (analyse secondaire de CARMELINA et CAROLINA), l'hypoglycémie ne prédisait pas d'événement cardiovasculaire ultérieur dans CAROLINA (aHR 1,00 ; 0,76–1,32), tandis que CARMELINA montrait un lien bidirectionnel (hypoglycémie vers événements CV aHR 1,23 ; événements CV vers hypoglycémie aHR 1,39), suggérant qu'elle reflète souvent la fragilité (ESC 2023 §7.5.8). Éviter les hypoglycémies reste essentiel pour votre sécurité immédiate, d'autant que **les bêtabloquants peuvent masquer leurs signes habituels** (tremblements, accélération du cœur). Dans DAPA-HF, les hypoglycémies majeures ont été rares (8 patients diabétiques, 4 par bras ; environ un quart prenaient de l'insuline et un cinquième un sulfamide) (Petrie 2020).

### Acidocétose sous iSGLT2 (parfois à glycémie presque normale)

- **De quoi s'agit-il ?** D'une accumulation d'acides (corps cétoniques) dans le sang. Sous iSGLT2, elle peut survenir avec une glycémie inférieure à **2,50 g/L** (13,9 mmol/L, soit 250 mg/dL), ce qui peut retarder le diagnostic (**acidocétose « euglycémique »**) (Khunti 2022 ; RCP dapagliflozine).
- **Fréquence rare :** environ **1 cas pour 1 000 personnes-années** dans les essais du diabète de type 2. Dans les essais d'IC : **3 cas sur 2 368** sous dapagliflozine dans DAPA-HF (tous diabétiques) et **aucun** dans EMPEROR-Reduced ; dans DAPA-HF, DELIVER et DAPA-CKD, elle n'a été observée que chez des patients diabétiques (Khunti 2022 ; Petrie 2020 ; Anker 2021).
- **Facteurs déclenchants :** infection ou maladie aiguë, jeûne prolongé ou régime très pauvre en glucides (cétogène), intervention chirurgicale, alcoolisation importante, diminution rapide des doses d'insuline, ou diabète auto-immun méconnu. En cas de nausées, vomissements, douleurs abdominales, soif intense, respiration rapide ou confusion, consultez sans attendre ou appelez le **15 (SAMU)**, le **112** ou le **114** (SMS).
- **Pause avant une chirurgie :** les textes divergent sur la durée exacte — au moins **3 jours** sur le RCP américain, **1 jour** dans la recommandation périopératoire britannique citée par Khunti, **48 à 72 heures** selon KDIGO 2024 : c'est la consigne écrite de votre équipe chirurgicale, d'anesthésie et de cardiologie qui prime.
- **Jours de maladie :** Khunti et coll. (experts ayant des liens industriels) déconseillent l'arrêt systématique chez les patients stables malades et proposent plutôt une surveillance des cétones (avis d'experts). Aucun essai randomisé d'événements cliniques n'a évalué les consignes « jours de maladie » à domicile dans l'ICFER. Pour la synthèse complète (risque diabétique vs non diabétique, consignes EMA/FDA lors d'une maladie aiguë grave, vomissements/diarrhées ou jeûne, essais DARE-19, RECOVERY, ACTIV-4a), voir *Thèse : jours de maladie — bloqueurs du SRAA/ARM contre iSGLT2 dans l'ICFER* et *Chirurgie, soins dentaires et plan « jours de maladie »*.`,
    },
    {
      headingFr: 'Finérénone, alimentation, chirurgie bariatrique et limites des preuves',
      bodyMarkdownFr: `- **Finérénone en cas de diabète et de maladie rénale :** ESC 2026 recommande la finérénone (*Kerendia*, **Classe I, A**) dans le diabète de type 2 avec maladie rénale chronique pour réduire le risque d'insuffisance cardiaque ; les essais rénaux sur lesquels elle repose excluaient toutefois l'ICFER symptomatique (ESC 2026 ; FINE-HEART ; voir *Maladie rénale chronique et insuffisance cardiaque* et *Finérénone, nouveaux ARM et chélateurs de potassium*).
- **Alimentation, potassium et mode de vie :** parce que les ARNI, IEC et ARM élèvent la kaliémie et que le diabète augmente le risque d'hyperkaliémie, le consensus ADA 2022 conseille d'**éviter les sels de régime au potassium, les compléments de potassium et les AINS**, et d'adopter une alimentation de type méditerranéen ou DASH, l'arrêt du tabac, une consommation d'alcool limitée et une activité physique adaptée (voir *Alimentation cardioprotectrice (modèle méditerranéen)*).
- **Chirurgie bariatrique (de l'obésité) :** les sources divergent. Le consensus ADA 2022 indique qu'elle « devrait être envisagée » en cas d'obésité et d'IC sur la base de données observationnelles, alors que la prise de position **HFA 2025 sur l'obésité** se montre beaucoup plus prudente (aucun essai randomisé dans l'IC et mortalité intrahospitalière environ **trois fois supérieure** dans l'ICFER ; ESC 2026 la classe en IIb dès IMC ≥ 35) (voir *Poids, obésité et dénutrition (cachexie cardiaque)*).

### Limites des preuves

- Aucun essai randomisé n'a testé une cible précise d'HbA1c chez des personnes atteintes d'ICFER.
- Le premier essai randomisé d'événements de la metformine dans l'ICFER (**Met-HeFT / DANHEART**) repose pour l'instant uniquement sur le communiqué de presse ESC 2026 (article complet à comité de lecture non publié) et a recruté surtout des personnes sans diabète de type 2 établi (~10 % seulement) ; les études antérieures sont observationnelles (certitude faible).
- Aucun essai randomisé dédié n'a comparé l'insuline ou les sulfamides à d'autres antidiabétiques dans l'ICFER symptomatique (ORIGIN, DEVOTE et CAROLINA excluaient l'IC avancée NYHA III–IV ; Eurich 2013, Khan 2022, Cosmi 2018, Shen 2019 et Richardson 2021 ont été lus sous forme de résumés PubMed).
- Les recommandations ESC 2023 sur le diabète sont antérieures à SOUL (2026), FINEARTS-HF (2024) et aux recommandations ESC 2026 sur l'insuffisance cardiaque (qui ont élargi l'ICFER aux FEVG < 50 %).`,
    },
  ],
  relatedArticleSlugs: [
    'maladies-associees',
    'medicaments-insuffisance-cardiaque',
    'medicaments-glp1-et-incretines',
    'maladie-renale-insuffisance-cardiaque',
    'interactions-complements-aliments-medicaments',
    'medicaments-effets-secondaires-suivi',
    'dysfonction-vg-asymptomatique-stade-b',
    'poids-obesite-et-denutrition',
    'cholesterol-et-prevention-secondaire',
    'finerenone-et-nouveaux-arm',
    'chirurgie-soins-dentaires-et-jours-de-maladie',
    'these-jours-de-maladie-sraa-vs-isglt2',
    'tabac-et-alcool-insuffisance-cardiaque',
    'alimentation-cardioprotectrice',
    'recommandations-comparees-esc-us-nice',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
  ],
  sources: [
    { label: 'Recommandations ESC 2023 diabète et maladies cardiovasculaires (texte intégral EHJ)', detail: 'Vérification directe des tableaux 7, 8, 19–22 et des sections 7.2 à 7.5 sur tous les antidiabétiques dans l’ICFER' },
    { label: 'AHA/ACC/HFSA 2022 (correspondance officielle), ADA 2022 (texte intégral) et ADA Standards of Care 2026 (§10)', detail: 'iSGLT2 (Classe 1 A / Grade A), contre-indication glitazones/saxagliptine/alogliptine, cible HbA1c et conseils alimentaires' },
    { label: 'Petrie et al. (DAPA-HF, JAMA 2020, partiel) et Anker et al. (EMPEROR-Reduced, Circulation 2021, texte intégral)', detail: 'Efficacité identique des iSGLT2 avec ou sans diabète (p d’interaction 0,80 et 0,57) et protection rénale' },
    { label: 'Crowley (2017, texte intégral), Eurich (2013), Khan (2022) et DANHEART / Met-HeFT (protocole + communiqué ESC 2026)', detail: 'Sécurité et neutralité de la metformine dans l’ICFER (Met-HeFT HR 1,10) et limites observationnelles' },
    { label: 'DEVOTE 14 (texte intégral), ORIGIN, Cosmi (2018), Shen (2019) et cohorte IRM ICFER (2023)', detail: 'Insulines basales dans les essais généraux vs surrisque dans les cohortes d’IC et lien avec les hypoglycémies sévères' },
    { label: 'CAROLINA (Marx 2024, texte intégral), Roumie (2017, texte intégral) et Richardson (2021)', detail: 'Hypoglycémies (x5) et prise de poids sous glimépiride et surrisque observationnel d’IC sous sulfamides' },
    { label: 'SOUL (JAMA Intern Med 2026, texte intégral) et Dewan et al. (2023)', detail: 'Sémaglutide oral dans le sous-groupe ICFER diabétique (HR 0,98) et prévalence du diabète dans l’ICFER' },
    { label: 'Khunti (2022), RCP FDA metformine et dapagliflozine, KDIGO 2024 et Abdin (2025)', detail: 'Acidocétose euglycémique, pauses préopératoires, seuils rénaux de la metformine et médicaments aggravant l’IC' },
    { label: 'ESC 2026 (finérénone), FINE-HEART (Nat Med 2024, texte intégral) et prise de position HFA 2025 sur l’obésité', detail: 'Finérénone dans le DT2 avec MRC et risques de la chirurgie bariatrique dans l’ICFER' },
  ],
  disclaimerType: 'medical',
};
