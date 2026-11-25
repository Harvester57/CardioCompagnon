import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'fer-oral-haute-biodisponibilite',
  sourceWikiPath: 'wiki/theses/high-bioavailability-oral-iron-in-heart-failure.md',
  titleFr: 'Fer oral à haute biodisponibilité (Ferrochel, sucrosomial) et insuffisance cardiaque',
  category: 'traitements',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'thèse',
    'carence-martiale',
    'fer-oral',
    'bisglycinate-ferreux',
    'ferrochel',
    'fer-sucrosomial',
    'maltol-ferrique',
    'hepcidine',
    'icfer',
  ],
  aliases: [
    'Ferrochel',
    'Bisglycinate ferreux',
    'Bisglycinate de fer',
    'Fer sucrosomial',
    'Maltol ferrique',
    'Fer liposomal',
    'Fer héminique',
    'Lactoferrine',
    'Citrate ferrique',
    'Comprimés de fer mieux absorbés',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Verdict de l'enquête : preuves insuffisantes, plutôt en défaveur (confiance moyenne). Les comprimés de fer présentés comme « mieux absorbés » — comme le bisglycinate ferreux (Ferrochel), le fer sucrosomial ou le maltol ferrique — sont souvent présentés comme une réponse à l'échec du fer oral classique dans l'insuffisance cardiaque (essai IRONOUT-HF). À ce jour, cela n'a pas été démontré. Aucun essai clinique randomisé évalué par les pairs n'a testé Ferrochel ou une autre forme orale de nouvelle génération dans l'ICFER ; le seul essai contrôlé contre placebo rapporté jusqu'ici (PREFER-HF, dans l'insuffisance cardiaque à FEVG préservée, non encore publié) aurait manqué son critère principal de marche. L'obstacle principal dans l'insuffisance cardiaque est l'hepcidine, une hormone qui ferme la porte de sortie intestinale du fer (la ferroportine) : chez l'humain, les formes plus récentes semblent soumises au même contrôle et rechargent nettement moins les réserves que le fer intraveineux dans les maladies inflammatoires. Des patients ayant une hepcidine basse — ou traités par inhibiteur du SGLT2 — pourraient mieux absorber le fer oral ordinaire, mais cela n'a pas été comparé à un groupe témoin. Le fer intraveineux reste donc la seule voie appuyée par des essais dans l'ICFER ; toute décision sur le fer se prend avec votre cardiologue sur la base d'un bilan sanguin (ferritine et CST).",
  sections: [
    {
      headingFr: 'Question évaluée et rappel de l’échec du fer oral dans IRONOUT-HF',
      bodyMarkdownFr: `**Hypothèse testée :** le bisglycinate ferreux chélaté (*Ferrochel*) et les autres formes orales commercialisées comme plus biodisponibles (fer sucrosomial, maltol ferrique, fer héminique, fer liposomal, lactoferrine, citrate ferrique) échapperaient aux problèmes du fer oral documentés dans l'ICFER carencée en fer.

Dans l'essai **IRONOUT-HF** (*JAMA* 2017, **225 patients** atteints d'ICFER, **78 % d'origine ischémique**, FEVG médiane **25 %**), le complexe polysaccharidique de fer oral à forte dose (150 mg deux fois par jour pendant 16 semaines, soit environ **33,6 g** de fer) a mis en évidence quatre problèmes distincts :

1. **Réserves à peine rechargées :** coefficient de saturation de la transferrine (**CST**) **+3,3 points** et ferritine **+11,3 µg/L (ng/mL)** seulement par rapport au placebo.
2. **Blocage par l'hepcidine :** une hepcidine élevée au départ s'associait à des hausses plus faibles du CST (**r = -0,29**) et de la ferritine (**r = -0,30**).
3. **Aucun bénéfice fonctionnel :** aucune amélioration du pic de consommation d'oxygène (VO₂), de la distance de marche, du NT-proBNP ni de la qualité de vie (score KCCQ).
4. **Risque sans carence prouvée :** effets indésirables et surcharge en fer si pris sans bilan préalable.

**Point important sur la tolérance digestive :** dans IRONOUT-HF, les troubles digestifs n'étaient **pas** plus fréquents que sous placebo, car le complexe polysaccharidique avait justement été choisi comme forme bien tolérée. Une meilleure tolérance gastrique ne résout donc pas le problème d'efficacité dans l'insuffisance cardiaque.

### Comment les preuves sont pondérées (échelle de directeté)

1. Essais dans l'insuffisance cardiaque évaluant la forme considérée (preuves directes).
2. Autres maladies à hepcidine élevée : maladie rénale chronique (MRC), maladies inflammatoires chroniques de l'intestin (MICI), cancer (indirectes mais mécanistiquement pertinentes).
3. Carences non inflammatoires : grossesse, enfant (faibles pour cette question).
4. Études d'absorption chez le volontaire sain (très faibles).
5. Études *in vitro* ou animales (mécanistiques uniquement).

Une meilleure absorption démontrée uniquement aux niveaux 3 à 5 ne constitue pas une preuve d'efficacité dans l'ICFER, et l'absence d'essai dans l'insuffisance cardiaque n'est pas un argument en faveur.`,
    },
    {
      headingFr: 'État des preuves forme par forme',
      bodyMarkdownFr: `| Forme de fer oral | Données dans l'insuffisance cardiaque | Autres états à hepcidine élevée (MRC, MICI, cancer) | Voie d'absorption et hepcidine | Problèmes évités ? |
|---|---|---|---|---|
| **Bisglycinate ferreux** (*Ferrochel*) | **Aucun essai trouvé** | Deux tout petits essais en oncologie, sans avantage (**Fischer 2023**) | Absorption régulée par le statut martial comme les autres formes chez le volontaire sain (**Bovell-Benjamin 2000**) ; aucune étude humaine avec dosage d'hepcidine | Aucune preuve ; aucun indice de contournement de l'hepcidine |
| **Fer sucrosomial** | Étude non randomisée, **25 patients** ICFER (**Karavidas 2021**) ; bras **PREFER-HF** (ICFEP, critère principal rapporté comme manqué, non publié) ; **RISE-HF** en cours (financé par PharmaNutra) | Rectocolite : ferritine **+9 contre +137 µg/L** avec le fer IV (**Bertani 2021**) ; MICI : l'hepcidine a **augmenté chez 79 %** des patients (**Abbati 2019**) | Contournement allégué sur modèles *in vitro*/souris avec coauteurs du fabricant ; pyrophosphate ferrique faiblement lié à l'hepcidine chez des femmes saines (r = -0,30, p = 0,056, **Zimmermann 2009**) | Non prouvé ; les données humaines indiquent un traitement habituel par l'hepcidine |
| **Maltol ferrique** | Étude simple bras **ORION-HF** (41 patients, dont 16 avec FEVG < 50 %) : CST **14 % → 29 %**, ferritine **43 → 107 µg/L** | MICI : échec de non-infériorité contre le fer IV à 12 semaines (**AEGIS-H2H**) ; MICI active : réponse **37,5 %** (comme le fumarate), **0/8** réserves normalisées (**Koppelman 2026**) ; MRC : Hb **+0,5 g/dL** contre placebo (**AEGIS-CKD**) | Voie classique ; induit l'hepcidine comme le sulfate ferreux dans les MICI (**Pantopoulos 2024**) | Signal partiel de recharge chez des patients anémiques surtout en ICFEP ; aucune donnée contrôlée |
| **Sulfate de ferroglycine** (sel à base de glycine) | Bras **PREFER-HF** (ICFEP) : critère principal rapporté comme manqué ; plus d'effets digestifs que le fer sucrosomial | — | Chimie de sel ferreux ordinaire | Inconnu |
| **Polypeptide de fer héminique** | **Aucun essai trouvé** | Dialyse péritonéale : CST non supérieur au sulfate ferreux, ferritine plus basse pour un coût 7 fois supérieur (**Barraclough 2012**) ; nourrissons inflammatoires : pas de meilleure Hb ni ferritine, CST **+52 %**, hausse d'hepcidine dans les deux bras (**Bah 2025**) | Le fer libéré de l'hème sort toujours de la cellule intestinale via la ferroportine (**Pantopoulos 2024**) | Non |
| **Fer liposomal** | **Aucun essai trouvé** | MRC : recharge des réserves inférieure au fer IV (**Pisani 2015**) | Souvent confondu avec le fer sucrosomial ; contournement non vérifié | Inconnu |
| **Lactoferrine** | Aucun résultat (1 essai IC enregistré, non recruteur) | Grand essai en aveugle (**Huda 2026**, 555 femmes) : nettement inférieure au sulfate ferreux (**Hb -1,1 à -1,2 g/dL**) | Allégation de baisse d'IL-6/hepcidine issue de petites études non randomisées | Non |
| **Citrate ferrique** | **Aucun essai trouvé** | Hémodialyse (**Tomosugi 2023**, 268 patients) : l'absorption baisse quand l'hepcidine augmente (coefficient **-0,459**) | Totalement dépendant de la ferroportine chez la souris (**Hanudel 2022**) | Aucun signe d'échappement |`,
    },
    {
      headingFr: 'Arguments en faveur (et pourquoi ils restent limités)',
      bodyMarkdownFr: `- **Modéré (direct mais non contrôlé) — ORION-HF (maltol ferrique) :** sur 16 semaines chez 41 patients insuffisants cardiaques, le CST est passé de **14 % à 29 %**, la ferritine de **43 à 107 µg/L**, l'hémoglobine de **11,4 à 12,8 g/dL** et la marche de 6 minutes de **298 à 335 m**. Toutefois, l'étude n'avait **aucun groupe témoin**, seuls **16 patients sur 41** avaient une FEVG < 50 % (sans analyse séparée), tous étaient anémiques avec une ferritine initiale plus basse que dans IRONOUT-HF (43 contre 69 µg/L) et un âge moyen de 80 ans, le NT-proBNP n'a pas changé, le gain de KCCQ n'a pas atteint le seuil de significativité fixé par l'article, et l'étude était soutenue par le laboratoire Norgine.
- **Faible — Karavidas 2021 (fer sucrosomial) :** amélioration de la distance de marche et du KCCQ chez 25 patients ICFER par rapport à des témoins appariés, mais sans randomisation ni aveugle (cause de l'IC non précisée dans le résumé).
- **Faible (indirect) — hausse de l'hémoglobine dans la MRC et les MICI :** maltol ferrique **+0,5 g/dL** contre placebo dans la MRC de stade 3–4 (**AEGIS-CKD**) ; rattrapage de l'hémoglobine face au fer IV à 24–52 semaines dans les MICI (**AEGIS-H2H**).
- **Faible (direct, non contrôlé) — fer oral chez des patients sous iSGLT2 (Marques 2026) :** chez 42 patients insuffisants cardiaques anémiques (FEVG médiane 40 %) tous traités par iSGLT2, le fer oral (a priori des formes classiques) a relevé l'hémoglobine de **+1,05 g/dL** (IC 95 % 0,69–1,40) sur 3 à 4 mois (et **-0,28 g/dL** après arrêt). Sans groupe témoin sans iSGLT2, cela plaide pour un effet possible du fer oral ordinaire sous traitement moderne, et non pour un avantage des formes spéciales.
- **Faible (direct, mécanistique) — absorption d'un sel ordinaire dans l'IC stable (Cabrera 2020) :** lors d'un test d'absorption orale, 30 patients stables atteints d'IC chronique carencés en fer ont présenté une hausse du fer sanguin à 2 heures plus forte que des témoins non carencés (**83,8 contre 47,5 µg/dL**). Là encore, cela concerne un sel ordinaire et non les nouvelles formes.
- **Faible (indirect) :** CST plus élevé (+52 %) avec le fer héminique chez des nourrissons en contexte inflammatoire sans gain d'Hb ni de ferritine (**Bah 2025**) ; meilleure absorption de *Ferrochel* que le sulfate ferreux au sein d'un repas de maïs riche en phytates (**6,0 % contre 1,7 %**, **Bovell-Benjamin 2000**) et moins de troubles digestifs pendant la grossesse (**Fischer 2023**). Aucun de ces points ne résout le blocage par l'hepcidine.`,
    },
    {
      headingFr: 'Arguments en défaveur',
      bodyMarkdownFr: `- **Fort (direct) — l'hepcidine agit en aval de l'entrée dans la cellule intestinale :** dans IRONOUT-HF, plus l'hepcidine initiale était haute, moins la recharge fonctionnait. L'hepcidine bloque la **ferroportine** (la porte de sortie vers le sang) : toute forme dont le fer passe par la ferroportine rencontre le même verrou (**Pantopoulos 2024**).
- **Faible (isotopes chez le volontaire sain) — Ferrochel obéit au contrôle martial normal :** l'absorption du bisglycinate ferreux était fortement inversement corrélée à la ferritine sérique, faisant conclure aux auteurs qu'il est « régulé normalement par le statut en fer » ; dans l'eau, il n'était pas mieux absorbé que l'ascorbate ferreux (**Bovell-Benjamin 2000**). L'hepcidine étant le messager du statut martial, cela oriente vers le même blocage dans l'IC (inférence, hepcidine non dosée).
- **Modéré (indirect) — recharge des réserves environ 10 fois moindre que le fer IV en contexte inflammatoire :** à 12 semaines dans les MICI, la ferritine a augmenté d'environ **+14 contre +127 µg/L** entre maltol ferrique et fer IV, avec échec de non-infériorité (**AEGIS-H2H**), et de **+9 contre +137 µg/L** entre fer sucrosomial et fer IV dans la rectocolite en rémission (**Bertani 2021**). Or dans l'insuffisance cardiaque, la cible est la carence définie par la ferritine et le CST, même sans anémie : une hausse isolée de l'hémoglobine ne suffit pas.
- **Modéré (mécanistique) — aucune preuve humaine de contournement de l'hepcidine :** le citrate ferrique fonctionnait chez des souris à hepcidine élevée mais échouait totalement en l'absence de ferroportine (**Hanudel 2022**), montrant que des résultats chez la souris ne prouvent pas un contournement. Aucune étude humaine n'a mesuré l'absorption d'une forme non-sel en présence d'une hepcidine élevée mesurée.
- **Modéré (données humaines indirectes) — face à l'hepcidine chez l'humain, les formes récentes se comportent comme le fer ordinaire :**
  - fer sucrosomial dans les MICI : l'hepcidine a **augmenté chez 79 %** des patients en suivant la CRP (**Abbati 2019**) ;
  - citrate ferrique chez 268 patients hémodialysés : l'absorption diminuait avec l'hepcidine (**coefficient -0,459**), même sans inflammation manifeste (**Tomosugi 2023**) ;
  - MICI active : l'hepcidine de départ prédisait l'échec du fumarate ferreux (**AUC 0,86**) et le petit bras maltol ferrique, parti avec l'hepcidine la plus haute, n'a pas fait mieux (**37,5 %** de réponse, **0/8** réserves normalisées, **Koppelman 2026**) ;
  - fer héminique : hausse d'hepcidine dans les deux bras sans avantage sur l'Hb ou la ferritine (**Bah 2025**) et résultats inférieurs ou égaux au sulfate ferreux en dialyse péritonéale (**Barraclough 2012**).
- **Modéré (indirect) — la lactoferrine n'est pas une source efficace de fer :** nettement inférieure au sulfate ferreux dans le plus grand essai en aveugle (555 femmes, **Huda 2026**).
- **Modéré (recommandations) — aucun consensus ne valide le fer oral dans l'ICFER :** les recommandations **ESC 2026** préconisent le fer intraveineux et ne formulent aucune recommandation pour le fer oral. Le groupe de travail autrichien sur l'insuffisance cardiaque (**Messner 2025**) indique qu'aucune nouvelle forme orale ne dispose de preuves suffisantes et que la carence avec hepcidine élevée relève du fer intraveineux.
- **Faible (direct) — même chez les répondeurs biologiques d'IRONOUT-HF (24 %), aucun gain fonctionnel** n'a été observé sur le pic VO₂, le NT-proBNP ou le KCCQ (**Ambrosy 2019**). De plus, la méta-analyse de 17 ECR sur le bisglycinate (**Fischer 2023**) ne trouve qu'un gain modeste d'Hb de très faible certitude durant la grossesse, sans avantage significatif sur la ferritine, et les essais regroupés de fer oral dans l'IC (**Tan 2022**, formes anciennes) ne montrent pas de gain de marche.`,
    },
    {
      headingFr: 'Nuances importantes, piste des iSGLT2 et essais en attente',
      bodyMarkdownFr: `- **Tous les patients insuffisants cardiaques n'ont pas une hepcidine élevée :** dans IRONOUT-HF, les quartiles d'hepcidine allaient de **< 3,3** à **> 10,8 ng/mL**, et les patients à hepcidine basse absorbaient mieux le fer. Chez le sujet sain, l'absorption s'active surtout lorsque l'hepcidine descend sous environ **3 nmol/L** (**Galetti 2021**). Le vrai levier pourrait donc être le profil du patient plutôt que la marque du comprimé, mais l'hepcidine n'est pas dosée en routine et aucune stratégie guidée par l'hepcidine n'a été testée dans l'IC.
- **Les inhibiteurs du SGLT2 abaissent l'hepcidine :** l'empagliflozine (*Jardiance*) a réduit l'hepcidine d'environ **20 % à 40 %** chez 1 139 patients d'**EMPEROR**, y compris en cas de fonction rénale altérée (**Ferreira 2025**), tout comme la dapagliflozine (*Forxiga*) dans **DAPA-HF** (**Docherty 2022**). IRONOUT-HF s'est déroulé avant la généralisation des iSGLT2. Deux précautions demeurent : les iSGLT2 abaissent eux-mêmes la ferritine et le CST (rendant l'interprétation du bilan plus délicate), et dans EMPEROR la réponse de l'hémoglobine sous empagliflozine était moindre en cas de carence martiale initiale.
- **Le rythme de prise compte peut-être autant que la molécule :** deux prises par jour augmentent l'hepcidine sans majorer l'absorption ; une prise **un jour sur deux** améliore l'absorption du sulfate ferreux chez la femme saine (**Stoffel 2017**), mais aucune donnée n'existe dans l'IC ni avec les nouvelles formes.
- **Risque de surcharge en fer :** une forme qui contournerait réellement l'hepcidine contournerait aussi la principale barrière naturelle contre la surcharge en fer. Un dosage préalable de la ferritine et du CST reste indispensable avant toute supplémentation.
- **Forte implication industrielle et confusions de dénomination :** les études sur le maltol ferrique impliquent Shield/Norgine et celles sur le fer sucrosomial impliquent PharmaNutra (qui finance RISE-HF). Par ailleurs, « liposomal » et « sucrosomial » désignent des produits distincts mais sont fréquemment confondus dans les articles.
- **Essais en attente (registres cliniques) :**
  - **RISE-HF :** fer sucrosomial contre placebo, FEVG < 50 %, 60 patients, financé par PharmaNutra ; fin estimée mars 2026 mais aucun résultat publié (dernière mise à jour du registre : octobre 2025).
  - **PREFER-HF :** ICFEP uniquement, présenté en mai 2025, non publié ; des brèves de congrès non vérifiées rapportent un échec sur le test de marche de 6 minutes, un CST à +6,5 points et un HR exploratoire de 0,46 sur hospitalisations ou décès en regroupant les bras fer.
  - **VICTORID-HF :** fer sucrosomial contre fer IV ; statut inconnu, jamais indiqué en recrutement.
  - **Aucun essai de Ferrochel (bisglycinate ferreux) dans l'insuffisance cardiaque n'est enregistré.**`,
    },
    {
      headingFr: 'Verdict de la thèse et ce qui pourrait le faire évoluer',
      bodyMarkdownFr: `- **Verdict :** **Preuves insuffisantes, plutôt en défaveur** (confiance : **moyenne**).
- **Pourquoi :** aucun essai randomisé évalué par les pairs n'a testé Ferrochel ou une autre forme orale dite « à haute biodisponibilité » dans l'ICFER ; le seul essai contrôlé par placebo rapporté (PREFER-HF, en ICFEP, non publié) aurait manqué son critère principal ; les données humaines indirectes dans les maladies inflammatoires montrent que les formes récentes réagissent à l'hepcidine comme le fer ordinaire et rechargent bien moins les réserves que le fer intraveineux.
- **Ce qui ferait évoluer le verdict vers un soutien :** un essai randomisé contrôlé contre placebo ou fer IV dans l'ICFER montrant qu'une forme orale récente remonte le CST et la ferritine à un niveau proche du fer IV avec gain fonctionnel (**RISE-HF** est le candidat le plus proche), ou une étude isotopique humaine démontrant une absorption normale malgré une hepcidine élevée.
- **Ce qui renforcerait la réfutation :** des résultats neutres de RISE-HF, la publication confirmant l'échec de PREFER-HF, ou une étude isotopique stratifiée sur l'hepcidine prouvant que le bisglycinate est bloqué comme le sulfate ferreux (l'étude zurichoise FIA-AI, NCT07931937, ne testera que le sulfate ferreux).
- **En pratique pour vous :** les formes orales ne remplacent pas le fer intraveineux lorsqu'une carence martiale est documentée dans l'ICFER. Aucune analyse dédiée des interactions entre ces formes de fer et vos traitements de fond n'a été menée dans cette enquête : ne débutez aucun complément de fer sans bilan sanguin préalable ni avis de votre cardiologue ou de votre pharmacien.`,
    },
  ],
  relatedArticleSlugs: [
    'carence-martiale-et-fer-iv',
    'nutrition-et-complements-insuffisance-cardiaque',
    'musculation-vs-endurance-readaptation-cardiaque',
    'tableau-preuves-nutrition-complements',
    'questions-equipe-cardiologie',
    'interactions-complements-aliments-medicaments',
  ],
  sources: [
    {
      label: 'IRONOUT-HF (JAMA 2017, texte intégral) et Ambrosy et al. (2019)',
      detail: '225 patients ICFER (78 % ischémiques, FEVG médiane 25 %) : recharge martiale minime, blocage par l’hepcidine et absence de gain fonctionnel même chez les 24 % de répondeurs.',
    },
    {
      label: 'ORION-HF (EJHF 2025, texte intégral), Karavidas et al. (2021) et registres (RISE-HF, PREFER-HF, VICTORID-HF)',
      detail: 'Étude simple bras du maltol ferrique (41 patients), étude non randomisée du fer sucrosomial (25 patients) et statut des essais cliniques enregistrés.',
    },
    {
      label: 'Études dans les maladies inflammatoires : AEGIS-H2H, AEGIS-CKD (2021), Bertani 2021, Abbati 2019, Koppelman 2026 et Tomosugi 2023',
      detail: 'Recharge des réserves très inférieure au fer IV, réponse hepcidine sous fer sucrosomial (79 %), maltol ferrique et citrate ferrique.',
    },
    {
      label: 'Formes spécifiques et mécanismes : Bovell-Benjamin 2000, Fischer 2023, Pantopoulos 2024, Hanudel 2022, Bah 2025 et Huda 2026',
      detail: 'Régulation normale du bisglycinate ferreux (Ferrochel), dépendance à la ferroportine, fer héminique, lactoferrine inférieure au sulfate ferreux et méta-analyses.',
    },
    {
      label: 'Hepcidine, iSGLT2 et recommandations : Ferreira 2025 (EMPEROR), Docherty 2022 (DAPA-HF), Marques 2026, Cabrera 2020, Galetti 2021, Stoffel 2017, ESC 2026 et Messner 2025',
      detail: 'Baisse de l’hepcidine sous empagliflozine/dapagliflozine, absorption dans l’IC stable, prise un jour sur deux, recommandation fer IV ESC 2026 et prise de position autrichienne.',
    },
  ],
  disclaimerType: 'medical',
};
