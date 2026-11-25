import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'goutte-bpco-thyroide-et-autres-comorbidites',
  sourceWikiPath: 'wiki/concepts/gout-copd-thyroid-and-other-comorbidities.md',
  titleFr: 'Goutte, BPCO, thyroïde, anémie non ferriprive, AOMI, fragilité et cognition',
  category: 'comorbidites',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'comorbidités',
    'goutte',
    'hyperuricémie',
    'colchicine',
    'allopurinol',
    'fébuxostat',
    'bpco',
    'asthme',
    'thyroïde',
    'amiodarone',
    'anémie',
    'aomi',
    'fragilité',
    'troubles-cognitifs',
    'icfer',
  ],
  aliases: [
    'Goutte et insuffisance cardiaque',
    'Hyperuricémie',
    'Acide urique',
    'Colchicine',
    'Allopurinol',
    'Fébuxostat',
    'BPCO et insuffisance cardiaque',
    'Asthme et bêtabloquants',
    'Thyroïde et insuffisance cardiaque',
    'Amiodarone et thyroïde',
    'Anémie non ferriprive',
    'Darbépoétine alfa',
    'RED-HF',
    'AOMI',
    'Artériopathie des membres inférieurs',
    'Fragilité',
    'Troubles cognitifs',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Au-delà des reins, de la fibrillation atriale, des valves et du diabète, six autres affections fréquentes interagissent directement avec les médicaments et le quotidien dans l'ICFER ischémique. Pour la goutte, les diurétiques élèvent l'acide urique tandis que les iSGLT2 le font baisser et réduisent les crises d'environ 32 % ; les AINS sont contre-indiqués et les corticoïdes oraux retiennent l'eau, si bien que les crises reposent sur une infiltration articulaire ou une colchicine faible dose soigneusement vérifiée (contre-indiquée sous 30 mL/min de DFGe en France, vigilance avec statines, amiodarone et clarithromycine), l'allopurinol reste le traitement de fond de première intention (avertissement FDA sur le fébuxostat) et une uricémie élevée sans crise ne se traite pas. La BPCO ne contre-indique pas les bêtabloquants cardiosélectifs (bisoprolol, métoprolol succinate, nébivolol), tandis que l'asthme impose une prudence spécialisée ; les bronchodilatateurs inhalés de fond (LAMA/LABA) ont une sécurité cardiovasculaire rassurante. Un dosage de TSH est systématique car hypo- et hyperthyroïdie (ainsi que l'amiodarone) déstabilisent le cœur ; la lévothyroxine se débute à faible dose en cas de maladie coronaire. Dans l'anémie sans carence en fer, les agents stimulant l'érythropoïèse (darbépoétine alfa) ont échoué et augmenté thromboses et AVC (RED-HF, Classe III / Danger). Enfin, l'AOMI (avec une nuance importante sur le rivaroxaban à faible dose dans COMPASS), la fragilité (partiellement réversible par la réadaptation multidomaine REHAB-HF) et les troubles cognitifs (~43 % dans l'IC) orientent la prévention vasculaire et l'organisation pratique des soins.",
  sections: [
    {
      headingFr: '1. Goutte et hyperuricémie',
      bodyMarkdownFr: `### Pourquoi l'acide urique est souvent élevé dans l'ICFER — et l'aide des iSGLT2

Un taux sanguin élevé d'acide urique (**hyperuricémie**) est très fréquent dans l'ICFER : **53 %** des patients dans EMPEROR-Reduced (> 5,7 mg/dL, soit 57 mg/L chez la femme ; > 7,0 mg/dL, soit 70 mg/L chez l'homme) et **31,6 %** dans DAPA-HF (> 6,0 mg/dL chez la femme, > 7,0 mg/dL chez l'homme ; **10,3 %** avaient un antécédent de goutte) (analyses acide urique EMPEROR-Reduced / DAPA-HF).

Trois mécanismes s'additionnent : diminution de l'élimination rénale en cas de maladie rénale chronique, activation de la xanthine oxydase sous hypoxie et stress oxydatif, et surtout **diurétiques de l'anse et thiazidiques** (ainsi que la spironolactone), qui freinent l'excrétion tubulaire de l'acide urique. Dans les deux essais, l'usage de diurétiques de l'anse dépassait **91 à 93 %** dans le tertile d'acide urique le plus élevé (contre 72 à 76 % dans le plus bas).

Les **iSGLT2** (pilier de fond de l'ICFER) offrent un bénéfice collatéral en favorisant l'élimination urinaire de l'acide urique :

- **EMPEROR-Reduced (n = 3 676, texte intégral) :** l'empagliflozine (*Jardiance*) 10 mg/j a abaissé l'acide urique de **1,12 mg/dL** (environ 11,2 mg/L ou 67 µmol/L) contre placebo dès 4 semaines (effet identique en cause ischémique −1,11 vs non ischémique −1,13 mg/dL, p d'interaction = 0,827 ; plus marqué sans diabète, −1,25 vs −0,99 mg/dL) et a réduit de **32 %** les événements cliniques liés à l'hyperuricémie (crise de goutte, arthrite goutteuse ou instauration d'un traitement antigoutteux : **94 contre 135 patients ; HR 0,68, IC 95 % 0,52–0,89 ; p = 0,004**).
- **DAPA-HF (n = 3 119, 59,3 % d'origine ischémique, texte intégral) :** la dapagliflozine (*Forxiga*) 10 mg/j a réduit l'acide urique de **0,84 mg/dL** sur 52 semaines, augmenté la proportion sous 6,0 mg/dL (**72,7 % contre 51,2 %**) et **divisé par deux** les instaurations d'hypo-uricémiants (**2,1 % contre 4,4 %**, p < 0,001).
- Dans les deux essais, le bénéfice cardiaque des iSGLT2 était **indépendant** du taux initial d'acide urique. Leur effet hypo-uricémiant reste modeste (environ un tiers à la moitié de celui de l'allopurinol) et ne remplace pas un traitement de fond en cas de crises de goutte répétées.

### Traiter une crise aiguë de goutte en sécurité dans l'ICFER

| Option en crise aiguë | Profil de sécurité dans l'ICFER | Précautions pratiques |
|---|---|---|
| **AINS et inhibiteurs COX-2** (ibuprofène, kétoprofène, naproxène, diclofénac, célécoxib) | **Non recommandés / Danger** (ESC Classe III [résumé non vérifié] ; AHA/ACC/HFSA 2022 **COR 3 : Harm, B-NR** [texte intégral]) | Rétention hydrosodée, décompensation aiguë d'IC et insuffisance rénale aiguë (surtout avec IEC/ARNI, diurétiques et ARM) |
| **Corticoïdes par voie orale** (prednisone — *Cortancyl*, prednisolone — *Solupred*) | **Prudence** — retiennent sel et eau, élèvent la tension et la glycémie | Si aucune option plus sûre n'est utilisable (par exemple MRC sévère empêchant la colchicine), cure courte à dose faible/modérée avec pesée quotidienne et revue des diurétiques |
| **Infiltration articulaire de corticoïde** | **Option locale privilégiée** lorsque 1 ou 2 articulations accessibles sont atteintes | Soulagement local rapide avec rétention hydrique et risque d'interaction minimes |
| **Colchicine à faible dose** (*Colchicine Opocalcium*) | **Option orale privilégiée** si la fonction rénale et les autres médicaments le permettent | Marge thérapeutique très étroite : **vérification stricte du DFGe et des interactions CYP3A4 / P-gp obligatoire** |

### Colchicine : seuils rénaux (règle française plus stricte) et interactions

La colchicine a une marge de sécurité très étroite : son accumulation peut provoquer une **aplasie médullaire mortelle, une défaillance multiviscérale et une rhabdomyolyse**. Les schémas faibles doses sont aussi efficaces que les anciens schémas élevés avec beaucoup moins de toxicité (essai AGREE cité dans le RCP américain : 1,2 mg puis 0,6 mg 1 heure plus tard, soit 1,8 mg au total, donnant 38 % de réponse douloureuse à 24 h contre 33 % pour 4,8 mg et 16 % sous placebo) (RCP FDA/ANSM).

Avant toute prise (crise ou prévention), votre médecin et votre pharmacien vérifient systématiquement **les reins et l'ensemble de votre ordonnance** :

- **Fonction rénale (règle française plus stricte) :** le RCP américain (*Colcrys*) impose une surveillance étroite entre 30 et 80 mL/min et limite en cas de clairance < 30 mL/min les cures à une fois toutes les 2 semaines (prophylaxie 0,3 mg/j ; dialyse : 0,6 mg unique max toutes les 2 semaines). En **France (ANSM / RCP)**, la colchicine est **strictement contre-indiquée si le DFGe / clairance de la créatinine est inférieur à 30 mL/min** ou sous dialyse, avec réduction de dose en insuffisance rénale légère à modérée.
- **Clarithromycine (*Zeclar*) et inhibiteurs puissants CYP3A4 / P-gp :** **contre-indiqués** avec la colchicine en cas d'atteinte rénale ou hépatique aux États-Unis et **strictement contre-indiqués** avec les macrolides (sauf la spiramycine — *Rovamycine*) et la pristinamycine (*Pyostacine*) en France, des intoxications mortelles ayant été rapportées.
- **Amiodarone (*Cordarone*) :** inhibe à la fois P-gp et CYP3A4 et augmente les taux de colchicine ; prudence spécialisée, adaptation posologique ou alternative requise (notamment si le DFGe est abaissé).
- **Statines (atorvastatine — *Tahor*, simvastatine — *Zocor*, et autres statines) et fibrates :** l'association comporte un **risque additif de myopathie et de rhabdomyolyse** (y compris des décès dans le tableau 4 du RCP FDA), majoré par l'insuffisance rénale et l'âge ; signalez sans délai toute douleur, sensibilité ou faiblesse musculaire nouvelle.
- **Digoxine (*Digoxine Nativelle*) :** partage le transporteur P-gp (cas de rhabdomyolyse rapportés) ; surveillance rapprochée.
- **Signes précoces de surdosage (alerte spécifique ANSM) :** les premiers signes d'intoxication sont la **diarrhée, les nausées et les vomissements** ; ils imposent d'arrêter immédiatement la colchicine et de contacter sans délai un médecin (ou le **15 / 112 / 114** en cas de signes généraux). En France, l'ANSM avertit que la spécialité combinée contenant des antidiarrhéiques (*Colchimax* : poudre d'opium + tiémonium) peut **masquer cette diarrhée d'alerte** et retarder le diagnostic d'une intoxication grave.

*(La colchicine à très faible dose de 0,5 mg/j en prévention anti-inflammatoire coronarienne est abordée séparément dans Cholestérol LDL, aspirine et prévention secondaire coronaire.)*

### Traitement de fond de la goutte : allopurinol en première intention, nuance sur le fébuxostat et abstention sans crise

| Essai | Population et statut IC / FEVG | Comparaison et suivi | Résultat principal | Applicabilité à l'ICFER ischémique (~35 %) |
|---|---|---|---|---|
| **CARES** (NEJM 2018 ; résumé + RCP FDA §14.2) | 6 190 goutte + MCV établie (~18,5–20 % IC ; FEVG non rapportée) ; **56,6 % d'arrêt, 45,0 % perdus de vue** | Fébuxostat (*Adenuric*) 40–80 mg vs allopurinol (*Zyloric*) ; médiane 32 mois | MACE non inférieur : 10,8 % vs 10,4 % (**HR 1,03**, borne sup IC 98,5 % 1,23). **Décès CV plus élevé : HR 1,34 (1,03–1,73)** (mort subite 2,7 % vs 1,8 %) ; **décès toutes causes HR 1,22 (1,01–1,47)** | **Indirecte / partielle** (FEVG inconnue, très fort taux de perdus de vue ; signal de mort subite ayant conduit à l'avertissement encadré FDA) |
| **FAST** (Lancet 2020 ; résumé + synthèse MHRA) | 6 128 Européens ≥ 60 ans avec goutte sous allopurinol + ≥ 1 FDR CV (33,4 % MCV) ; **IC sévère et IDM/AVC < 6 mois exclus** ; ~6 % de retrait | Fébuxostat 80–120 mg vs allopurinol ; médiane 4,0 ans | MACE non inférieur : 1,72 vs 2,05/100 PA (**HR ajusté 0,85 ; 0,70–1,03**). Décès 7,2 % vs 8,6 % ; sous traitement décès CV **HR 0,91 (0,66–1,27)**, décès toutes causes **HR 0,75 (0,59–0,95)** | **Indirecte** (IC sévère exclue, seulement un tiers de MCV, pas de détail FEVG) |
| **EXACT-HF** (Circulation 2015 ; **texte intégral**) | 253 ICFER symptomatiques (**FEVG ≤ 40 %, médiane 25 %, 53 % ischémiques**, NYHA II–III 98 %), acide urique ≥ 9,5 mg/dL (23 % antécédent goutte sans traitement) | Allopurinol cible 600 mg/j vs placebo ; 24 semaines | Acide urique abaissé de −3,5 à −4,2 mg/dL, mais **aucun bénéfice clinique** : aggravés 45 % vs 46 %, améliorés 13 % vs 19 % (**p = 0,68**) ; aucun gain KCCQ, marche 6 min ni FEVG ; **éruption cutanée 10 % vs 2 % (p = 0,01)** ; hosp IC HR 0,67 (0,38–1,16, NS) | **Directe** sur la population (avant ère ARNI/iSGLT2 ; petit effectif et suivi 24 semaines) |
| **ALL-HEART** (Lancet 2022 ; résumé) | 5 721 Britanniques ≥ 60 ans avec **cardiopathie ischémique SANS goutte** ; **IC modérée à sévère (NYHA III–IV) exclue** | Allopurinol jusqu'à 600 mg/j vs soins usuels ; moyenne 4,8 ans | MACE neutre : 11,0 % vs 11,3 % (**HR 1,04 ; 0,89–1,21 ; p = 0,65**) ; décès toutes causes 10,1 % vs 10,6 % (**HR 1,02 ; 0,87–1,20**) | **Indirecte / partielle** (100 % ischémiques, mais IC sévère exclue et FEVG non rapportée) |

- **Pourquoi CARES et FAST ont divergé :** CARES incluait 100 % de maladies cardiovasculaires établies (~20 % d'IC) mais a perdu **45 %** des participants de vue (de nombreux décès étant survenus après l'arrêt du traitement). FAST avait un suivi européen bien plus complet (~6 % de retraits) et n'a pas montré de surmortalité, mais excluait l'IC sévère et ne comptait qu'un tiers de maladies cardiovasculaires établies.
- **Position réglementaire et clinique :** en raison de CARES, la **FDA américaine maintient sur le fébuxostat (*Uloric*, vérifié décembre 2025) un avertissement encadré (Boxed Warning) de décès cardiovasculaire**, le réservant en deuxième intention après échec ou intolérance de l'allopurinol titré. Les repères européens (ESC 2021 [remplacé] et ESC 2026 [résumé secondaire]) placent de même l'**allopurinol (*Zyloric*) en première intention** dans l'ICFER, le fébuxostat (*Adenuric*) restant une option de seconde ligne soigneusement pesée.
- **Ne pas traiter un chiffre isolé d'acide urique :** bien qu'une uricémie élevée marque un risque plus lourd, l'abaisser sans goutte clinique n'a amélioré ni les symptômes, ni la FEVG, ni les événements dans **EXACT-HF** et **ALL-HEART**, tout en exposant à des éruptions cutanées et à de rares hypersensibilités sévères. Ni l'ESC ni la FDA ne recommandent de traiter une hyperuricémie asymptomatique.`,
    },
    {
      headingFr: '2. BPCO et asthme',
      bodyMarkdownFr: `### Fréquence et sous-prescription des bêtabloquants

La bronchopneumopathie chronique obstructive (BPCO) et l'insuffisance cardiaque ischémique partagent le tabagisme et l'âge comme facteurs de risque, et provoquent toutes deux un essoufflement qui peut masquer l'autre maladie. Dans le **registre ESC Heart Failure Long-Term** (Canepa 2018), la BPCO concernait **19,3 %** des patients hospitalisés pour IC et **14,1 %** des patients ambulatoires chroniques, augmentant de façon indépendante les hospitalisations pour IC à 1 an (**aHR 1,37**, IC 95 % 1,17–1,60). Pourtant, la prescription de bêtabloquants restait nettement inférieure chez les patients ayant une BPCO (**81,6 % contre 89,8 %**, p < 0,001), et leur titration après la sortie d'hôpital progressait deux fois moins (+11,8 % contre +20,6 %).

### Bêtabloquants cardiosélectifs dans la BPCO ; prudence spécialisée dans l'asthme

- **La BPCO n'est PAS une contre-indication :** une méta-analyse Cochrane de 20 essais randomisés en aveugle (Salpeter et coll.) a démontré que les **bêtabloquants cardiosélectifs (bêta-1 sélectifs)** — en particulier **bisoprolol** (*Cardensiel*), **métoprolol succinate** (*Selozok*) et **nébivolol** (*Temerit*) — n'entraînaient **aucune baisse du VEMS**, aucune aggravation des symptômes respiratoires et **aucune atténuation de la réponse aux bronchodilatateurs bêta-2 inhalés**, y compris en cas d'obstruction sévère. Les recommandations ESC IC et **GOLD 2024/2025** confirment que les bêtabloquants bêta-1 sélectifs **doivent être utilisés** en cas d'indication cardiaque telle que l'ICFER ou un infarctus récent (en débutant à faible dose et en augmentant progressivement). Les bêtabloquants non sélectifs (comme le carvédilol — *Kredex*, qui bloque aussi les récepteurs bronchiques bêta-2) exposent davantage aux sifflements bronchiques : les molécules cardiosélectives sont généralement préférées en présence d'une BPCO.
- **La nuance BLOCK COPD (NEJM 2019, texte intégral) :** 532 patients ayant une BPCO modérée à sévère (VEMS moyen 41 %, 40 % sous oxygène à domicile) **mais AUCUNE indication cardiaque de bêtabloquant (FEVG < 40 % et infarctus récent explicitement exclus)** ont reçu du métoprolol ou un placebo. L'essai a été arrêté tôt : le délai avant la première exacerbation était inchangé (HR 1,05 ; 0,84–1,32), mais les **hospitalisations pour exacerbation sévère de BPCO ont presque doublé (HR 1,91 ; 1,29–2,83)**. *Applicabilité : population exclue pour l'ICFER* — BLOCK COPD montre seulement qu'il ne faut **pas** prescrire un bêtabloquant hors indication cardiaque pour prévenir les poussées de BPCO, sans remettre en cause son bénéfice vital démontré dans l'ICFER.
- **Asthme :** contrairement à la BPCO, l'asthme comporte une hyperréactivité bronchique réversible et un risque de bronchospasme aigu ; il constitue une **contre-indication relative nécessitant une prudence spécialisée**. Si un bêtabloquant est fortement indiqué dans l'ICFER chez une personne ayant un asthme bien équilibré, les recommandations préconisent une instauration à très faible dose d'une molécule hautement cardiosélective (bisoprolol, nébivolol ou métoprolol succinate) sous suivi conjoint cardiologue et pneumologue, en évitant les agents non sélectifs.

### Sécurité cardiaque des bronchodilatateurs inhalés (LAMA / LABA)

- **SUMMIT (Lancet 2016 ; n = 16 485) :** BPCO modérée avec MCV établie ou haut risque CV ; le **LABA** vilantérol (seul ou associé au corticoïde inhalé fluticasone furoate) n'a **pas** augmenté les événements cardiovasculaires (**HR 0,99** [0,80–1,22] seul ; **HR 0,93** [0,75–1,14] combiné) ni les effets indésirables cardiaques (17–18 % dans tous les bras).
- **TIOSPIR (NEJM 2013 ; n = 17 135) :** le **LAMA** tiotropium (*Spiriva*, Respimat 2,5/5 µg contre HandiHaler 18 µg) a montré une mortalité globale comparable (**HR 0,96** ; 0,84–1,09) et des taux similaires d'événements cardiovasculaires majeurs, y compris chez les patients cardiaques stables.
- **Prévenir les poussées respiratoires protège aussi le cœur :** limiter la distension pulmonaire et les exacerbations de BPCO réduit l'hypoxie, la tachycardie et l'inflammation qui précipitent les décompensations cardiaques (dans **IMPACT**, n = 10 355, la trithérapie CSI/LAMA/LABA a réduit la mortalité toutes causes par rapport à LAMA/LABA, **HR 0,72**, incluant les décès cardiovasculaires).
- *Précaution pratique :* ni SUMMIT ni TIOSPIR n'étaient des essais dédiés à l'ICFER (applicabilité indirecte/partielle). De fortes doses de **bêta-2 agonistes de courte durée d'action** (par exemple nébulisations répétées de salbutamol — *Ventoline*) ou le début d'un LAMA/LABA en pleine décompensation aiguë peuvent provoquer tremblements, tachycardie ou baisse du potassium et méritent un suivi du pouls et de la kaliémie.`,
    },
    {
      headingFr: '3. Maladies de la thyroïde et toxicité thyroïdienne de l’amiodarone',
      bodyMarkdownFr: `### Pourquoi la TSH est dosée systématiquement

Les recommandations **ESC 2026** (bilan initial et suivi régulier) comme **AHA/ACC/HFSA 2022** incluent le dosage de la **TSH**, car les hormones thyroïdiennes régulent directement la contractilité, la fréquence cardiaque, le tonus vasculaire et le rythme électrique :

- **L'hypothyroïdie** ralentit le pouls, élève les résistances vasculaires, altère la contraction et la relaxation, fait monter le cholestérol LDL et aggrave les symptômes d'IC.
- **L'hyperthyroïdie** accélère le cœur, accroît le travail cardiaque et le volume sanguin, aggrave l'angor/l'ischémie et favorise fortement la **fibrillation atriale**.

Dans l'étude **Penn Heart Failure Study** (Kannan 2018, texte intégral ; 1 365 patients en IC chronique, 85 % systolique, FEVG moyenne 34 %, 29 % d'origine ischémique, suivi médian 4,2 ans) :

- Une classe NYHA plus sévère s'accompagnait d'une TSH plus élevée, d'une T4 libre (T4L) plus élevée et d'une T3 totale plus basse (tous p < 0,001).
- La **fibrillation atriale** était indépendamment associée à une **T4L plus élevée** (p = 0,004 au global et p = 0,01 même dans la zone euthyroïdienne normale).
- L'**hypothyroïdie infraclinique** (TSH haute avec T4L normale) était liée à davantage de décès, LVAD ou transplantations (**HR 1,82**, IC 95 % 1,27–2,61), un risque porté par les **TSH ≥ 7,00 mUI/L (HR 3,25**, IC 95 % 1,96–5,39 ; p < 0,001), alors qu'une élévation modérée (**TSH 4,51–6,99 mUI/L**) n'était pas associée à un excès statistiquement significatif (**HR 1,26**, IC 95 % 0,78–2,06 ; p = 0,34). Des cohortes antérieures avaient également lié une **TSH > 10 mUI/L** ou **< 0,1 mUI/L** à la survenue d'insuffisance cardiaque.
- Le **syndrome de T3 basse** (TSH et T4L normales, T3 basse — présent chez 14,4 % des patients au global et 36,4 % sous amiodarone) affichait un **HR de 2,12 (1,65–2,72)** ; il agit comme marqueur de sévérité et ne constitue pas une indication établie de supplémentation en T3.

### Règle de prudence pour la lévothyroxine en cas de maladie coronaire

Lorsqu'une hypothyroïdie avérée (ou infraclinique sévère, typiquement TSH ≥ 10 mUI/L) est traitée chez une personne ayant une maladie coronarienne et une ICFER ischémique, la règle est de **démarrer à faible dose et d'augmenter lentement** la **lévothyroxine** (*Levothyrox*, *L-Thyroxin Henning*) sur plusieurs semaines avec contrôles biologiques. Une correction trop brutale accroît la fréquence cardiaque et la consommation d'oxygène du myocarde, pouvant déclencher **angor, ischémie ou arythmies**.

### Dysfonctions thyroïdiennes sous amiodarone (recommandations ETA 2018)

L'amiodarone (*Cordarone*) contient environ **37 % d'iode** en masse et perturbe fréquemment la thyroïde : dans la cohorte Penn HF, **seuls 42 % des patients sous amiodarone avaient un bilan thyroïdien normal** (contre 81 % sans amiodarone). Pour le calendrier complet de surveillance d'organes, voir *Arythmies ventriculaires et antiarythmiques*. Selon les recommandations de l'**Association Européenne de la Thyroïde (ETA 2018, Bartalena et coll.)** :

| Atteinte thyroïdienne sous amiodarone | Mécanisme | Prise en charge habituelle (ETA 2018) | Arrêter l'amiodarone ? |
|---|---|---|---|
| **Hypothyroïdie induite par l'amiodarone (HIA)** | L'excès d'iode bloque la synthèse hormonale (effet Wolff-Chaikoff) | **Lévothyroxine** en cas d'HIA avérée (démarrage lent en coronaropathie/ICFER) ; surveillance possible si forme infraclinique légère | **Généralement NON** — poursuivre si nécessaire pour le rythme |
| **Hyperthyroïdie de type 1 (AIT 1)** | Surproduction hormonale déclenchée par l'iode sur goitre nodulaire ou maladie de Basedow latente | **Antithyroïdiens de synthèse** (+/- perchlorate de sodium bref) ; traitement définitif ultérieur (chirurgie ou iode radioactif) une fois stabilisé | **Décision conjointe cardiologue + endocrinologue** (selon le risque rythmique ; demi-vie tissulaire très longue) |
| **Hyperthyroïdie de type 2 (AIT 2)** | Thyroïdite destructrice libérant les hormones stockées dans une glande saine | **Corticoïdes oraux** (avec surveillance rapprochée du poids et de la rétention hydrique dans l'ICFER) ; suivi sans ablation après retour en euthyroïdie | **Décision conjointe cardiologue + endocrinologue** |
| **Forme mixte / incertaine ou dégradation cardiaque rapide** | Mécanismes combinés ou instabilité aiguë | Antithyroïdiens + corticoïdes oraux ; **thyroïdectomie en urgence** envisagée si l'IC ou les arythmies s'aggravent rapidement | Prise en charge spécialisée conjointe urgente |`,
    },
    {
      headingFr: '4. Anémie non ferriprive : pourquoi les ASE ont échoué et quoi rechercher',
      bodyMarkdownFr: `L'anémie touche environ **1 patient sur 5** atteints d'ICFER (**21,9 %** dans Dewan 2023, associée de manière indépendante à la mortalité, **HR 1,36**). La carence en fer (souvent présente *sans* anémie) se traite par fer intraveineux et fait l'objet de la fiche *Carence en fer et fer intraveineux*.

### Pourquoi les agents stimulant l'érythropoïèse (ASE) sont contre-indiqués

L'essai **RED-HF** (Swedberg et coll., NEJM 2013 ; **N = 2 278**, **100 % ICFER avec FEVG ≤ 40 %**, **~71 % de maladie coronaire**, hémoglobine 9,0–12,0 g/dL, CST ≥ 15 %, médiane 28 mois) a testé la correction d'une anémie légère à modérée vers 13 g/dL par **darbépoétine alfa** (*Aranesp*) contre placebo :

- **Aucun bénéfice clinique :** décès ou hospitalisation pour IC chez **50,7 % (576/1 136)** sous darbépoétine alfa contre **49,5 % (565/1 142)** sous placebo (**HR 1,01**, IC 95 % 0,90–1,13 ; p = 0,87), sans gain de survie, d'hospitalisations ni de qualité de vie.
- **Surrisque thrombotique avéré :** les **événements thromboemboliques** ont significativement augmenté (**13,5 % [153] contre 10,0 % [114]**, p = 0,01), avec **3,7 % (42) contre 2,7 % (31)** d'AVC fatals ou non fatals (p = 0,23).
- **Risque d'AVC confirmé en cas de diabète et de maladie rénale (Bello 2015, texte intégral) :** parmi les 816 patients de RED-HF diabétiques avec MRC (DFGe 20–60), les AVC atteignaient **5,4 % contre 2,4 % (HR 2,07** ; 0,98–4,38). Regroupé avec l'essai TREAT (n = 4 854), la darbépoétine alfa a **presque doublé le risque d'AVC (HR 1,94, IC 95 % 1,43–2,63 ; p < 0,001)** sans effet sur la mortalité (HR 1,00).

**Applicabilité directe** à l'ICFER ischémique (FEVG ≤ 40 %) : les recommandations déconseillent formellement les ASE pour traiter l'anémie liée à l'insuffisance cardiaque (**ESC 2021 Classe III, B** [position maintenue en 2026] ; **AHA/ACC/HFSA 2022 COR 3 : Harm, B-R** [texte intégral]).

### Quel bilan devant une baisse d'hémoglobine ?

Une hémoglobine basse dans une ICFER ischémique conduit à rechercher systématiquement cinq grandes causes réversibles (ESC 2026) :

1. **Carence en fer** (ferritine et coefficient de saturation de la transferrine — bilan initial et de suivi de Classe I dans ESC 2026).
2. **Saignement digestif occulte** — essentiel dans la cardiomyopathie ischémique où la plupart des patients reçoivent aspirine, clopidogrel, bithérapie antiplaquettaire ou AOD (voir *Antiplaquettaires, bithérapie et protection gastrique*).
3. **Carence en vitamine B12 ou en folates** — fréquente sous inhibiteurs de la pompe à protons (IPP) au long cours ou sous metformine (voir *Vitamines B et insuffisance cardiaque*).
4. **Maladie rénale chronique** (hémodilution et déficit en érythropoïétine endogène ; les règles spécifiques des ASE en MRC sévère relèvent du néphrologue).
5. **Trouble thyroïdien**, état inflammatoire chronique ou cause hématologique.`,
    },
    {
      headingFr: '5. Artériopathie périphérique (AOMI), fragilité et troubles cognitifs',
      bodyMarkdownFr: `### Artériopathie des membres inférieurs (AOMI) et sténose carotidienne

Parce que la cardiomyopathie ischémique procède d'une athérosclérose généralisée, le rétrécissement des artères des jambes (**AOMI**) ou du cou (**sténose carotidienne**) est fréquemment associé. Dans Dewan (2023, 15 066 patients ICFER), l'AOMI était présente chez **5,5 %** des patients (10 à 17 % dans RED-HF, plus âgé et anémique) et portait le **rapport de risque ajusté de mortalité le plus élevé des dix comorbidités étudiées (HR 1,39)**. La mesure de l'index de pression systolique (IPS) et l'écho-Doppler des carotides sont réalisés selon les symptômes ou lors d'un bilan d'IC avancée / greffe après 50 ans ou en cas de maladie coronaire.

- **Prévention partagée :** arrêt du tabac, **LDL-c inférieur à 0,55 g/L** (1,4 mmol/L ou 55 mg/dL), contrôle tensionnel et marche supervisée protègent à la fois les artères coronaires et périphériques.
- **La nuance COMPASS sur le rivaroxaban à dose vasculaire :** les recommandations **ESC 2024 PAAD** (résumé secondaire) proposent d'envisager l'association **rivaroxaban (*Xarelto*) 2,5 mg deux fois par jour + aspirine 100 mg/j** (**Classe IIa, A** [non vérifié sur le tableau intégral]) dans l'AOMI symptomatique à haut risque ischémique et faible risque hémorragique (et IIa B après revascularisation des membres inférieurs). **Cependant**, la lecture intégrale de la sous-analyse IC de **COMPASS** révèle une limite décisive pour l'ICFER :
  - COMPASS a **exclu l'insuffisance cardiaque sévère (FEVG < 30 % et classe NYHA III–IV)** ;
  - seuls **12 % (721)** des patients IC de COMPASS avaient une FEVG < 40 %, et dans ce sous-groupe le rapport de risque des MACE croisait 1 (**HR 0,88**, IC 95 % 0,55–1,42, contre 0,68 au global ; saignements majeurs HR 1,36, 0,88–2,09) ;
  - dans **COMMANDER-HF** (ICFER ischémique récemment décompensée, FEVG ≤ 40 %), le rivaroxaban 2,5 mg deux fois par jour n'a **pas** réduit les décès, infarctus ou AVC.
  - *En pratique :* cette double voie antithrombotique peut se discuter avec le cardiologue et le médecin vasculaire dans une ICFER ischémique **stable** NYHA I–II (FEVG ≥ 30 %) avec AOMI symptomatique et faible risque hémorragique (en l'absence d'indication d'anticoagulation à pleine dose pour FA ou thrombus VG), mais elle n'est **pas** démontrée dans les formes sévères (FEVG < 30 %, NYHA III–IV) ou récemment décompensées.

### Fragilité : quatre domaines et réversibilité partielle

La fragilité ne se réduit pas à l'âge chronologique : c'est un état de vulnérabilité multidimensionnel qui augmente les hospitalisations et réduit la tolérance aux traitements et aux interventions. L'**Association européenne de l'insuffisance cardiaque (HFA / ESC, Vitale 2019)** définit la fragilité dans l'IC selon **quatre domaines** :

| Domaine HFA de fragilité | Éléments évalués par l'équipe |
|---|---|
| **Clinique** | Nombre de maladies associées, polymédication, hospitalisations répétées, perte de poids / dénutrition |
| **Physique et fonctionnel** | Vitesse de marche, lever de chaise / test *Timed Up and Go*, équilibre, force musculaire, autonomie quotidienne |
| **Psycho-cognitif** | Mémoire, fonctions exécutives, dépression, anxiété |
| **Social** | Isolement, présence d'un aidant, obstacles matériels ou financiers |

- **ESC 2026 (§8, texte intégral) :** invite à distinguer la **fragilité cardiaque** (liée au bas débit ou à la congestion, potentiellement réversible grâce aux traitements optimisés, à la réadaptation, voire à une assistance LVAD) de la fragilité non cardiaque, dont les formes sévères constituent une contre-indication relative au LVAD ou à la greffe.
- **La réadaptation adaptée bénéficie surtout aux plus fragiles (REHAB-HF, NEJM 2021 et Pandey 2023, texte intégral) :** chez 349 adultes âgés hospitalisés pour IC (**97 % fragiles ou pré-fragiles**, 47 % avec FEVG < 45 %), un programme multidomaine de 12 semaines restaurant d'abord **l'équilibre, la force et la mobilité avant l'endurance** a amélioré le score physique SPPB de **+1,5 point** et le test de marche de 6 minutes de **+34 m**, avec un **gain fonctionnel plus marqué chez les patients fragiles (+2,1 points) que pré-fragiles (+0,8 point ; p d'interaction = 0,03)** (sans modifier les décès/réhospitalisations à 6 mois) (voir *Réadaptation cardiaque (SMR) et activité physique*).

### Troubles cognitifs : un frein silencieux à l'autosurveillance

Dans la méta-analyse de référence de **Cannon et coll. (2017 ; 37 études, n = 8 411)** :

- la prévalence groupée des troubles cognitifs dans 26 cohortes d'IC (n = 4 176) atteignait **43 % (IC 95 % 30 %–55 %)** ;
- comparativement aux personnes sans IC, l'insuffisance cardiaque s'accompagnait d'un risque augmenté de **67 %** (**OR 1,67**, IC 95 % 1,15–2,42), avec un déclin plus rapide dans les études prospectives.

Même des difficultés discrètes de mémoire, d'attention ou d'organisation — souvent inapparentes lors d'une consultation rapide — compliquent concrètement le quotidien : titration des quatre piliers, repérage d'une prise de poids de 2 kg, calendrier des prises de sang, évitement des AINS ou d'antibiotiques interagissants. Des aides simples sont très efficaces : **schémas simplifiés en une prise lorsque c'est possible, pilulier hebdomadaire, plan d'action écrit, présence d'un proche en consultation, et suivi par infirmière IC ou parcours PRADO**.`,
    },
    {
      headingFr: '6. Comparatif des recommandations (au 2026-11-25) et limites des preuves',
      bodyMarkdownFr: `Les lignes fondées uniquement sur des résumés secondaires (lorsque les tableaux officiels n'étaient pas accessibles en texte intégral) sont signalées par la mention **[non vérifié]**.

| Question clinique | ESC 2026 IC (en vigueur) | ESC 2021 IC (remplacé) | AHA/ACC/HFSA 2022 (États-Unis) | Recommandations de spécialité | Divergences et repères |
|---|---|---|---|---|---|
| **AINS / inhibiteurs COX-2 dans l'IC** | Classe III (non recommandés) **[non vérifié]** | Classe III **[non vérifié]** | **COR 3 : Harm, B-NR** (§7.3.7) **[texte intégral]** | — | Accord complet : à éviter dans l'ICFER |
| **Goutte : 1re intention et fébuxostat** | Allopurinol en 1er choix ; colchicine pour crises **[non vérifié]** | Allopurinol préféré au fébuxostat (§13.10, citant CARES) **[non vérifié]** | Non gradé dans les sections lues | **RCP FDA Uloric (déc. 2025) :** Boxed Warning décès CV ; 2e ligne uniquement ; pas d'usage asymptomatique **[texte intégral]** | Tension réglementaire : la FDA maintient l'avertissement malgré l'essai européen FAST |
| **Bêtabloquants cardiosélectifs dans BPCO + ICFER** | Section BPCO tronquée dans la capture | BPCO **non** contre-indiquée ; bêta-1 sélectifs recommandés (§13.8) **[non vérifié]** | Bêtabloquants validés COR 1, A dans l'ICFER **[texte intégral]** | **GOLD 2024/2025 :** bêta-1 sélectifs recommandés pour l'IC ; **non** pour la BPCO seule (BLOCK COPD) **[non vérifié]** | Accord sur ICFER + BPCO ; prudence spécialisée dans l'asthme |
| **Dépistage thyroïdien (TSH) et amiodarone** | TSH initiale **[non vérifié]** ; bilan thyroïdien dans le suivi stable **[texte intégral]** | TSH initiale **[non vérifié]** | TSH initiale systématique **[non vérifié]** | **ETA 2018 :** maintenir l'amiodarone dans l'HIA + LT4 si avérée ; AIT 1 antithyroïdiens, AIT 2 corticoïdes **[résumé]** | Accord sur le dépistage ; prise en charge conjointe cardio-endocrino des AIT |
| **ASE dans l'anémie non ferriprive de l'IC** | NFS + ferritine/CST **I, C** **[texte intégral]** ; grade exact 2026 des ASE non lu **[non vérifié]** | **Classe III, B** (non recommandés sans autre indication) **[non vérifié]** | **COR 3 : Harm, B-R** (§10.1) **[texte intégral]** | — | Accord complet contre les ASE (RED-HF) |
| **AOMI : rivaroxaban 2,5 mg x 2 + aspirine** | Pas d'anticoagulation systématique en rythme sinusal pour l'IC seule **[texte intégral]** | — | Anticoagulation sans indication dédiée **3 : No Benefit, B-R** **[texte intégral]** | **ESC 2024 PAAD :** rivaroxaban 2,5 mg x 2 + aspirine **IIa, A** en AOMI symptomatique à haut risque **[non vérifié]** | Limite : COMPASS excluait FEVG < 30 % et NYHA III–IV ; sous-groupe FEVG < 40 % HR 0,88 (0,55–1,42) |
| **Évaluation de la fragilité** | Distinguer fragilité cardiaque vs non cardiaque (§8 **[texte intégral]**) ; dépistage global **[non vérifié]** | Dépistage et réadaptation (§13.4 ; réadaptation IIa **[non vérifié]**) | Évaluation globale des comorbidités **[non vérifié]** | **HFA 2019 :** cadre en 4 domaines **[résumé/synthèse]** | Accord sur le dépistage ; REHAB-HF étaye la réadaptation multidomaine |

### Limites des preuves

- **Accès partiel au texte intégral de certains articles et recommandations :** les PDF complets de CARES, FAST, ALL-HEART, de l'article principal RED-HF, de SUMMIT, TIOSPIR, ESC 2024 PAAD, GOLD 2024/2025 et des tableaux de comorbidités non cardiovasculaires ESC 2026 n'étaient pas accessibles en intégralité et sont signalés ci-dessus. Les seuils exacts de la colchicine en France doivent toujours être confirmés sur la base officielle BDPM ou avec votre pharmacien.
- **Écarts de populations :** CARES présentait 45 % de perdus de vue sans mention de la FEVG ; FAST, ALL-HEART et COMPASS excluaient l'IC sévère ; BLOCK COPD excluait l'ICFER (FEVG < 40 %) ; SUMMIT et TIOSPIR étaient des essais de BPCO et non d'ICFER.
- **Caractère observationnel :** Kannan (2018 ; 29 % d'ischémiques, TSH unique) et Cannon (2017 ; tests cognitifs hétérogènes, FEVG mixtes) montrent des associations fortes, sans prouver que traiter une hypothyroïdie infraclinique (TSH 7–10), une T3 basse ou un trouble cognitif réduit la mortalité. Il manque des essais randomisés de lévothyroxine dans l'hypothyroïdie infraclinique (TSH ≥ 7) et du fébuxostat spécifiquement dans l'ICFER.
- **Effet d'époque :** RED-HF (2006–2012) et EXACT-HF (2010–2013) précèdent l'arrivée des ARNI et des iSGLT2, même si le danger des ASE et l'absence de bénéfice du traitement de l'hyperuricémie asymptomatique restent solidement établis.`,
    },
  ],
  relatedArticleSlugs: [
    'maladies-associees',
    'arythmies-ventriculaires-et-antiarythmiques',
    'carence-martiale-et-fer-iv',
    'maladie-renale-insuffisance-cardiaque',
    'escalade-et-resistance-aux-diuretiques',
    'cholesterol-et-prevention-secondaire',
    'antiplaquettaires-bitherapie-et-protection-gastrique',
    'vitamines-b-insuffisance-cardiaque',
    'interactions-complements-aliments-medicaments',
    'fibrillation-atriale-insuffisance-cardiaque',
    'readaptation-cardiaque-et-activite-physique',
    'depression-et-sante-emotionnelle',
    'insuffisance-cardiaque-avancee-stade-d',
    'recommandations-comparees-esc-us-nice',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'glossaire-cardiologie',
  ],
  sources: [
    { label: 'CARES (NEJM 2018), FAST (Lancet 2020), EXACT-HF (Circulation 2015, texte intégral) et ALL-HEART (Lancet 2022)', detail: 'Sécurité cardiovasculaire fébuxostat vs allopurinol et neutralité du traitement de l’hyperuricémie asymptomatique' },
    { label: 'Analyses acide urique EMPEROR-Reduced et DAPA-HF (2022, textes intégraux)', detail: 'Prévalence de l’hyperuricémie et baisse des événements de goutte (−32 %, HR 0,68) sous iSGLT2' },
    { label: 'RCP FDA (Colcrys, Uloric déc. 2025) et résumés ANSM/RCP France colchicine', detail: 'Seuils rénaux (< 30 mL/min contre-indiqué en France), interactions CYP3A4/P-gp, alerte Colchimax et Boxed Warning fébuxostat' },
    { label: 'Canepa (2018), méta-analyse Cochrane Salpeter, BLOCK COPD (NEJM 2019, texte intégral), SUMMIT, TIOSPIR, IMPACT et GOLD 2024/2025', detail: 'Sécurité des bêtabloquants cardiosélectifs et des bronchodilatateurs inhalés dans la BPCO avec ICFER' },
    { label: 'Penn Heart Failure Study (Kannan 2018, texte intégral) et recommandations ETA 2018 (Bartalena, résumé)', detail: 'TSH, T4 libre, hypothyroïdie infraclinique (TSH ≥ 7), syndrome de T3 basse et gestion des dysthyroïdies sous amiodarone' },
    { label: 'RED-HF (NEJM 2013, résumé) et Bello et al. (2015, texte intégral)', detail: 'Absence de bénéfice (HR 1,01) et surrisque thromboembolique et d’AVC (HR 1,94 poolé) sous darbépoétine alfa' },
    { label: 'ESC 2024 PAAD, sous-groupe IC COMPASS (2019, texte intégral), HFA 2019 fragilité (Vitale), REHAB-HF (NEJM 2021, texte intégral) et Cannon (2017)', detail: 'AOMI (HR 1,39), limites COMPASS en FEVG < 30–40 %, fragilité en 4 domaines, réadaptation multidomaine et troubles cognitifs (43 %)' },
    { label: 'Dewan (2023), ESC 2026 IC (texte intégral bilan/IC avancée) et AHA/ACC/HFSA 2022 (texte intégral)', detail: 'Prévalence des comorbidités, contre-indication AINS/ASE et évaluation de la fragilité cardiaque' },
  ],
  disclaimerType: 'medical',
};
