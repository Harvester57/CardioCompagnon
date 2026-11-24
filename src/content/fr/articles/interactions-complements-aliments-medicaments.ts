import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'interactions-complements-aliments-medicaments',
  sourceWikiPath: 'wiki/concepts/supplement-and-food-drug-interactions.md',
  titleFr: 'Interactions entre compléments, aliments et médicaments cardiaques',
  category: 'nutrition',
  asOf: '2026-11-24',
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
  ],
  aliases: [
    'Produits à éviter',
    'Sécurité des compléments',
    'Interactions médicamenteuses',
    'Hyperkaliémie',
    'Acidocétose',
    'AINS',
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
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "« Naturel » ou « en vente libre » ne signifie pas sans danger avec des médicaments de l'insuffisance cardiaque. Les risques les mieux documentés concernent les substituts de sel au potassium et comprimés de potassium (hyperkaliémie sous ARNI/IEC/ARA2 et ARM), les anti-inflammatoires AINS (atteinte rénale et rétention d'eau), les régimes cétogènes ou jeûnes prolongés sous iSGLT2 (acidocétose), certaines vitamines à risque (vitamine E, bêta-carotène, calcium + vitamine D en automédication), les fortes doses d'huile de poisson (fibrillation atriale) et plusieurs plantes ou aliments courants (réglisse véritable, millepertuis, levure de riz rouge, pamplemousse avec certaines statines, ginseng, danshen, extrait concentré de thé vert, ginkgo et compléments d'ail). Cette page concerne les produits pris de votre propre initiative : n'arrêtez jamais un médicament prescrit (comme l'aspirine à faible dose) sans l'avis de votre médecin ou de votre pharmacien.",
  sections: [
    {
      headingFr: '1. Potassium : substituts de sel, comprimés et apports concentrés',
      bodyMarkdownFr: `**Qui est exposé :** toute personne prenant un **ARNI** (sacubitril/valsartan — Entresto), un **IEC**, un **ARA2**, et/ou un **ARM** (spironolactone — Aldactone, éplérénone — Inspra). Ces classes médicamenteuses réduisent l'élimination rénale du potassium.

**Ce que montrent les données :**
- **Notice des médicaments :** la notice du sacubitril/valsartan cite les compléments de potassium et les substituts de sel contenant du potassium au même titre que les diurétiques épargneurs de potassium parmi les causes d'hyperkaliémie ; elle mentionne aussi un régime très riche en potassium comme facteur de risque et demande un suivi régulier de la kaliémie.
- **Risque de base :** dans l'essai **PARADIGM-HF**, environ **16 %** des patients avaient déjà un potassium supérieur à 5,5 mmol/L sans aucun supplément potassique.
- **Revue Cochrane 2022 :** si les substituts de sel ont réduit la tension en population générale, tous les essais ont exclu les patients à risque d'hyperkaliémie et aucun n'a inclus de patients insuffisants cardiaques. La sécurité sur le potassium reposait sur seulement 12 contre 10 événements.
- **Ce qui n'est pas visé :** une consommation ordinaire et équilibrée de fruits et légumes. L'alerte concerne le potassium concentré (substituts de sel, comprimés) et les régimes extrêmes.`,
    },
    {
      headingFr: '2. Antalgiques anti-inflammatoires en vente libre (AINS)',
      bodyMarkdownFr: `**De quoi s'agit-il :** ibuprofène, kétoprofène, naproxène, diclofénac et inhibiteurs de la COX-2. Ils se cachent aussi dans certains médicaments combinés contre le rhume ou l'état grippal vendus sans ordonnance. (L'aspirine à faible dose prescrite pour les artères coronaires n'appartient pas à cette catégorie d'antalgiques.)

**Pourquoi ils posent problème :**
- **Recommandations ESC 2026 :** les AINS et inhibiteurs de la COX-2 sont **non recommandés** dans l'insuffisance cardiaque (**Classe III, niveau B2**), car ils augmentent le risque d'aggravation et d'hospitalisation pour insuffisance cardiaque, peuvent déclencher une décompensation et altérer la fonction rénale.
- **Avec le sacubitril/valsartan (Entresto) et les IEC/ARA2 :** ils peuvent dégrader la fonction rénale jusqu'à l'insuffisance rénale aiguë, en particulier chez les personnes âgées, sous diurétiques ou ayant déjà une atteinte rénale.
- **Mécanisme supplémentaire :** les AINS favorisent la rétention de sel et d'eau et réduisent l'efficacité des diurétiques de l'anse (furosémide — Lasilix, bumétanide — Burinex). Demandez toujours à votre médecin traitant ou votre pharmacien quels antalgiques vous sont autorisés.`,
    },
    {
      headingFr: '3. Régimes cétogènes, jeûnes prolongés et iSGLT2',
      bodyMarkdownFr: `**L'alerte officielle :** la notice de la dapagliflozine (Forxiga) cite parmi les facteurs déclenchants d'**acidocétose** :
- un régime cétogène ;
- une réduction importante des apports caloriques ;
- une infection ou maladie aiguë ;
- une intervention chirurgicale ;
- une déshydratation ;
- un abus d'alcool.

L'acidocétose sous iSGLT2 peut survenir avec une glycémie presque normale (« acidocétose euglycémique ») : une glycémie normale ne l'exclut donc pas. La notice recommande d'interrompre le médicament au moins **3 jours avant une chirurgie programmée ou un jeûne prolongé**, lorsque c'est possible et en accord avec le médecin.

**Mise en perspective :** dans les grands essais d'insuffisance cardiaque et de néphrologie de la dapagliflozine (DAPA-HF, DELIVER, DAPA-CKD), les acidocétoses sont survenues uniquement chez des personnes diabétiques. Chez une personne non diabétique ayant une alimentation normale et variée, le risque absolu est très faible, mais il augmente en cas de diabète, d'excès d'alcool, de maladie aiguë ou de chirurgie.

**Symptômes à connaître :** nausées, vomissements, douleurs abdominales, malaise général et essoufflement (qui peuvent être confondus avec une poussée d'insuffisance cardiaque).`,
    },
    {
      headingFr: '4. Compléments présentant des signaux d’effets délétères',
      bodyMarkdownFr: `| Produit | Constat principal | Source |
|---|---|---|
| **Vitamine E (forte dose)** | Davantage d'hospitalisations pour IC (RR 1,21, certitude modérée) ; déconseillée par l'USPSTF en prévention CV | Khan 2021 ; USPSTF 2022 |
| **Bêta-carotène** | Mortalité totale (RR 1,10) et cardiovasculaire (RR 1,12) plus élevées ; déconseillé par l'USPSTF | An 2022 ; USPSTF 2022 |
| **Calcium + vitamine D (automédication)** | Risque accru d'AVC (RR 1,17, certitude modérée) | Khan 2019 |
| **Oméga-3 à forte dose** | Risque de fibrillation atriale augmenté d'environ 49 % au-dessus de 1 g/j | Gencer 2021 |
| **Aubépine** | Preuves contradictoires ; risque possible d'aggravation de l'IC | AHA 2022 |
| **Muguet, actée bleue (blue cohosh)** | Produits toxiques ; interactions du muguet avec la digoxine, hypokaliémie et troubles du rythme | AHA 2022 |
| **Vitamine D seule** | Aucun bénéfice démontré ; interactions possibles avec digoxine, inhibiteurs calciques et diurétiques | AHA 2022 |`,
    },
    {
      headingFr: '5. Plantes médicinales et aliments à surveiller',
      bodyMarkdownFr: `### Réglisse véritable (glycyrrhizine)
- **Mécanisme :** la glycyrrhizine bloque l'enzyme rénale 11-bêta-HSD2, permettant au cortisol d'agir comme l'aldostérone : rétention d'eau et de sel, baisse du potassium (hypokaliémie) et élévation de la tension artérielle — exactement l'effet inverse d'un ARM (spironolactone, éplérénone).
- **Risques dans l'IC :** des cas d'insuffisance cardiaque aiguë et d'œdème pulmonaire sont décrits. La monographie européenne EMA 2026 déconseille la réglisse en cas de trouble cardiovasculaire, d'hypertension, de maladie rénale ou d'hypokaliémie, et demande de ne pas l'associer aux diurétiques, à la digoxine ou aux corticoïdes. L'hypokaliémie s'ajoute à celle des diurétiques de l'anse et a favorisé des cas de toxicité à la digoxine. Même de petites quantités ont été impliquées chez des patients cardiaques.
- **Seuils et sources cachées :** le comité scientifique européen fixe une limite de 100 mg/j de glycyrrhizine (environ 60 à 70 g de réglisse), en précisant qu'elle peut ne pas protéger les personnes sujettes aux troubles hydro-électrolytiques ; la FDA avertit que 57 g/j de réglisse noire pendant deux semaines peuvent déclencher un trouble du rythme après 40 ans. On en trouve dans les bonbons, tisanes « réglisse » ou digestives, certains chewing-gums sans sucre, sirops contre la toux et mélanges de plantes (dans l'UE, la mention « contient de la réglisse » est obligatoire ; les arômes d'anis n'en contiennent pas). Après l'arrêt, la récupération peut prendre des semaines à des mois.

### Millepertuis (*Hypericum perforatum*)
- **Mécanisme :** puissant inducteur d'enzymes et transporteurs hépatiques et intestinaux (CYP3A4 et glycoprotéine P), il accélère l'élimination de nombreux médicaments et réduit leur efficacité, selon une intensité variable en fonction de la teneur en hyperforine.
- **Médicaments cardiaques cités dans les sources officielles :**

| Médicament | Position des sources officielles |
|---|---|
| **Ivabradine (Procoralan)** | Notice : à éviter (comme le jus de pamplemousse) |
| **Apixaban (Eliquis)** | Notice : à éviter (diminue les concentrations d'apixaban) |
| **Digoxine, warfarine (Coumadine), simvastatine** | NIH : médicaments cardiaques dont l'effet peut être diminué |

- **Avec les antidépresseurs :** l'association expose à un syndrome sérotoninergique grave. Comme la baisse de moral est fréquente dans l'IC, le millepertuis est souvent acheté sans ordonnance : parlez toujours de votre moral à votre médecin plutôt que de débuter du millepertuis. D'autres médicaments cardiaques (autres AOD, ticagrélor, éplérénone, autres statines) n'étaient pas confirmés dans les sources lues, mais leur absence de cette liste ne garantit pas leur innocuité.

### Levure de riz rouge
- **Nature du produit :** son principe actif, la **monacoline K**, est chimiquement identique à la **lovastatine**. La teneur varie d'un facteur 60 selon les marques, et de nombreux produits contiennent une toxine rénale (citrinine).
- **Risques :** prise avec une statine prescrite, elle fait double emploi et cumule les effets indésirables musculaires, hépatiques et rénaux (l'EFSA rapporte un cas de rhabdomyolyse sévère avec la rosuvastatine). L'EFSA a relevé des effets graves dès **3 mg/j** ; depuis 2022, le règlement UE 2022/860 impose une limite inférieure à 3 mg/j et un avertissement contre l'association aux hypocholestérolémiants. En 2024 au Japon, des compléments contaminés par une toxine de moisissure (acide pubérulique) ont provoqué des atteintes rénales (6 dialyses sur 192 patients étudiés). L'essai chinois CCSPS reposait sur un extrait pharmaceutique standardisé sans statine associée et ne justifie jamais d'ajouter ni de substituer la levure de riz rouge à une statine prescrite.

### Jus de pamplemousse et statines / ivabradine
- Le pamplemousse bloque l'enzyme intestinale CYP3A4 et augmente les taux sanguins de certains médicaments :
  - **Simvastatine :** la notice conseille d'éviter le jus de pamplemousse (risque musculaire accru) ;
  - **Atorvastatine (Tahor) :** éviter les grandes quantités (> 1,2 L/j selon la notice) ;
  - **Rosuvastatine (Crestor) :** aucun avertissement pamplemousse sur la notice (voie CYP3A4 mineure) ;
  - **Ivabradine (Procoralan) :** jus de pamplemousse également déconseillé sur la notice.

### Ginseng
- Plusieurs plantes distinctes sont vendues sous ce nom : ginseng asiatique ou rouge de Corée (*Panax ginseng*), ginseng américain (*Panax quinquefolius*) et « ginseng sibérien » (éleuthérocoque).
- **Warfarine :** dans un essai chez 20 volontaires sains, le ginseng américain a réduit l'effet de la warfarine (pic INR -0,19), tandis que le ginseng asiatique/coréen n'a pas modifié significativement l'INR dans plusieurs petits essais (dont 25 patients porteurs de valves mécaniques). Un cas de saignement massif lors d'une chirurgie valvulaire a été rapporté. Aucune donnée humaine n'est disponible avec les AOD ou les antiagrégants.
- **Dosages de digoxine et autres effets :** le ginseng peut fausser certains dosages anciens de digoxine (résultats faussement hauts ou bas ; cas documenté avec l'éleuthérocoque). Les effets sur le CYP3A sont discordants, la tension artérielle globale est inchangée sur 17 essais, un petit essai a noté un bref allongement du QT (+15 ms), et la teneur en principes actifs varie jusqu'à un facteur 36. Aucun bénéfice n'est prouvé pour le ginseng seul dans l'IC.

### Danshen (racine de sauge rouge, *Salvia miltiorrhiza*)
- **Mécanisme et warfarine :** inhibe l'agrégation plaquettaire, interfère avec la coagulation et a augmenté les taux de warfarine chez l'animal. Une revue cite **3 cas de surdosage hémorragique grave** sous warfarine (plus un cas sur valve mécanique) et conseille d'éviter l'association. Aucune donnée humaine n'existe avec l'aspirine ou les AOD malgré des signaux in vitro sur COX-1, la thrombine et le facteur Xa.
- **Autres risques :** peut fausser certains dosages anciens de digoxine ; en prise répétée, induit le CYP3A4 et la P-gp (baisse jusqu'à 80 % du midazolam et 37 % de la fexofénadine chez des volontaires sains). Les contrôles chinois ont montré que 39,7 % des échantillons échouaient aux tests de qualité. Aucune preuve de bénéfice seul dans l'IC.

### Extrait concentré de thé vert (EGCG)
- **Un extrait concentré n'est pas une tasse de thé :** les gélules concentrées en catéchines (EGCG), souvent vendues pour maigrir, bloquent des transporteurs intestinaux d'absorption médicamenteuse. Le thé vert infusé classique est considéré comme généralement sûr par l'EFSA (tout en gardant une consommation régulière et modérée en cas de traitement par AVK).
- **Baisse des concentrations de médicaments cardiaques (petites études chez des volontaires sains) :**

| Médicament | Produit au thé vert | Effet mesuré |
|---|---|---|
| **Lisinopril (IEC)** | Une dose (~300 mg EGCG) | Exposition **-67 %** (les auteurs recommandent d'éviter les produits au thé vert pendant le traitement) |
| **Nadolol (bêtabloquant)** | Thé vert infusé pendant 2 semaines | Exposition **-85 %** |
| **Rosuvastatine** | 300 mg EGCG | Exposition **-19 %** après une dose (non significatif après 10 jours) |
| **Atorvastatine** | 300 à 600 mg d'extrait | Exposition environ **-22 à -24 %** (résumé uniquement) |

Les bêtabloquants utilisés dans l'IC (bisoprolol, carvédilol, nébivolol) et les ARNI n'ont pas été étudiés.
- **Toxicité hépatique et tension :** l'EFSA a identifié un risque d'atteinte hépatique dès **800 mg/j d'EGCG** sans pouvoir définir de dose totalement sûre ; le règlement UE 2022/2340 plafonne les compléments sous 800 mg/j et interdit la prise à jeun ou cumulée. Dans une revue américaine de 75 cas, des hépatites sont survenues entre 140 et 1 000 mg/j (et 3 patients sur 40 dans le registre américain ont nécessité une greffe hépatique). Le NIH signale aussi que ces extraits peuvent augmenter la pression artérielle, d'autant qu'ils contiennent souvent de la caféine ou d'autres stimulants.

### Note sur l’essai QUEST (Qiliqiangxin)
L'essai **QUEST** (3 110 patients chinois avec ICFER, ~74 % ischémiques, *Nature Medicine* 2024) a montré qu'une formule chinoise sur prescription associant 11 plantes (dont ginseng, danshen et aconit préparé) réduisait le critère composite décès CV ou hospitalisation IC (25,0 % contre 30,0 %, HR 0,78), sans baisse significative de la mortalité toutes causes. Peu de patients prenaient un iSGLT2 (< 10 %) et l'essai était financé par le fabricant : cela ne valide en aucun cas les gélules de ginseng ou de danshen achetées dans le commerce, et cette formule ne figure dans aucune recommandation européenne ou américaine.`,
    },
    {
      headingFr: '6. Risque de saignement avec l’aspirine, les antiagrégants ou les anticoagulants',
      bodyMarkdownFr: `De nombreux patients ayant une cardiopathie ischémique prennent de l'aspirine, parfois un second antiagrégant (clopidogrel — Plavix, ticagrélor — Brilique) ou un anticoagulant. Le niveau de preuve sur le surrisque hémorragique varie beaucoup d'un complément à l'autre :

| Produit | Ce que montrent les données | Position officielle | Solidité |
|---|---|---|---|
| **Huile de poisson (oméga-3)** | Grands essais : saignements 2,6 % contre 2,4 % (non significatif). EPA purifié 4 g/j : +0,6 saignement pour 100 personnes | Notice icosapent éthyl : plus de saignements avec aspirine, clopidogrel ou warfarine ; surveiller | Essais (bonne) |
| **Ginkgo biloba** | 18 essais : pas d'effet sur les tests de coagulation ; mais cas de saignements graves et étude chez des vétérans américains montrant plus de saignements sous warfarine (HR 1,38) | Monographie EMA : avis médical si anticoagulant ou antiagrégant ; **arrêt 3 à 4 jours avant chirurgie** ; prudence avec dabigatran | Mitigée |
| **Compléments d'ail** | Diminuent l'agrégation plaquettaire dans des essais ; petit essai sous warfarine rassurant | Monographie EMA : prudence avec anticoagulants/antiagrégants ; **éviter 7 jours avant chirurgie** | Modérée pour chirurgie ; faible ailleurs |
| **Vitamine E (forte dose)** | Deux grands essais de prévention : davantage d'AVC hémorragiques, dont un chez des patients majoritairement sous aspirine | NIH : fortes doses (> 400 UI/j) peuvent majorer les saignements sous antithrombotiques | Modérée |
| **Curcuma / curcumine** | Deux cas rapportés sous warfarine | Pas de mention hémorragique sur la page NIH, qui avertit en revanche d'un risque d'atteinte hépatique avec les formes à forte absorption | Faible |

**Points clés :**
- **L'ail culinaire** dans la cuisine quotidienne n'est pas concerné par ces avertissements, qui visent les gélules et extraits concentrés.
- **AOD et bithérapie antiagrégante :** aucune donnée clinique spécifique n'a été identifiée pour ces compléments associés à l'apixaban, au rivaroxaban, à l'édoxaban, au clopidogrel ou au ticagrélor.
- **Avant une chirurgie ou un examen invasif :** signalez toujours vos compléments à l'anesthésiste et au cardiologue (délais EMA : 3 à 4 jours pour le ginkgo, 7 jours pour les compléments d'ail).`,
    },
    {
      headingFr: '7. La règle d’or : tout déclarer à votre équipe',
      bodyMarkdownFr: `**Informez votre cardiologue, votre médecin traitant et votre pharmacien de chaque complément, plante, tisane ou médicament sans ordonnance que vous prenez ou souhaitez essayer.** Les compléments ne sont ni contrôlés ni garantis comme des médicaments.

Des zones d'ombre persistent dans la littérature (boissons énergisantes et stimulants « brûle-graisses », interactions avec les AOD récents ou les bêtabloquants de l'insuffisance cardiaque). En cas de doute, la prudence consiste à demander validation avant toute prise, et à ne jamais arrêter un traitement prescrit de vous-même.`,
    },
  ],
  relatedArticleSlugs: [
    'sel-et-liquides-insuffisance-cardiaque',
    'medicaments-insuffisance-cardiaque',
    'medicaments-effets-secondaires-suivi',
    'omega-3-huile-de-poisson',
    'coenzyme-q10',
    'poids-obesite-et-denutrition',
    'nutrition-et-complements-insuffisance-cardiaque',
    'tableau-preuves-nutrition-complements',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'finerenone-et-nouveaux-arm',
    'cholesterol-et-prevention-secondaire',
    'thrombus-vg-et-anticoagulants',
  ],
  sources: [
    {
      label: 'Notices réglementaires (sacubitril/valsartan — Entresto, dapagliflozine — Forxiga, ivabradine, apixaban, statines)',
      detail: 'Hyperkaliémie et AINS (PARADIGM-HF), acidocétose sous iSGLT2, contre-indications avec millepertuis et pamplemousse.',
    },
    {
      label: 'Recommandations ESC 2026 et déclaration AHA 2022',
      detail: 'AINS et COX-2 non recommandés (Classe III, niveau B2) ; plantes à risque et obligation d’information de l’équipe.',
    },
    {
      label: 'Monographies EMA, avis EFSA et règlements UE (2022/860, 2022/2340)',
      detail: 'Réglisse (EMA 2026), ginkgo et ail (délais préopératoires), levure de riz rouge (< 3 mg/j), extrait de thé vert (< 800 mg EGCG/j).',
    },
    {
      label: 'Revues et essais (Cochrane 2022, Khan 2021, An 2022, Gencer 2021, Javaid 2024, Deutch 2019, Nicolussi 2020, QUEST 2024)',
      detail: 'Données pharmacocinétiques et cliniques sur les substituts de sel, vitamines, ginseng, danshen, thé vert et risque hémorragique.',
    },
  ],
  disclaimerType: 'medical',
};
