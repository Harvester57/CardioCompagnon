import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'medicaments-glp1-et-incretines',
  sourceWikiPath: 'wiki/concepts/glp1-and-incretin-medicines.md',
  titleFr: 'Médicaments GLP-1 et incrétines (sémaglutide, tirzépatide, rétatrutide)',
  category: 'traitements',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'hot',
  tags: [
    'glp-1',
    'sémaglutide',
    'tirzépatide',
    'rétatrutide',
    'orforglipron',
    'cagrisema',
    'incrétines',
    'obésité',
    'diabète-type-2',
    'icfer',
    'prévention-cardiovasculaire',
  ],
  aliases: [
    'GLP-1',
    'Analogues du GLP-1',
    'Ozempic',
    'Wegovy',
    'Rybelsus',
    'Mounjaro',
    'Sémaglutide',
    'Tirzépatide',
    'Rétatrutide',
    'Orforglipron',
    'Foundayo',
    'CagriSema',
    'Incrétines',
    'Injections pour maigrir',
  ],
  linkedModules: ['core', 'diabetes'],
  plainSummaryFr:
    "Les médicaments de la famille des incrétines (agonistes du GLP-1 comme le sémaglutide — Ozempic, Wegovy, Rybelsus — et double agoniste tirzépatide — Mounjaro) imitent des hormones digestives qui réduisent l'appétit et la glycémie. Chez les personnes atteintes de diabète de type 2 ou d'obésité avec maladie artérielle établie, ils diminuent le risque d'infarctus, d'AVC et de décès cardiovasculaire d'environ un septième à un cinquième. En revanche, dans l'insuffisance cardiaque à fraction d'éjection réduite (ICFER, FEVG autour de 35 %), leur bénéfice n'est pas démontré : le bénéfice sur l'insuffisance cardiaque est établi dans la forme à FEVG préservée (ICFEP). Dans le meilleur essai randomisé disponible en ICFER (sous-groupe de 592 patients diabétiques de l'essai SOUL), le sémaglutide oral n'a montré ni bénéfice ni surrisque clair sur les événements d'insuffisance cardiaque (HR 0,98), tandis que des études plus petites soulèvent la question d'une accélération de la fréquence cardiaque et de troubles du rythme. Le rétatrutide (triple agoniste) n'est pas autorisé et ne dispose d'aucun résultat publié dans l'ICFER. Ces traitements peuvent se discuter avec vos équipes de cardiologie et de diabétologie ou d'obésité pour un diabète ou une obésité sévère, mais pas pour traiter l'insuffisance cardiaque à FEVG réduite ; leurs effets digestifs exposent à une déshydratation sous diurétiques et le poids revient le plus souvent à l'arrêt.",
  sections: [
    {
      headingFr: 'Quels sont ces médicaments et où en est leur autorisation ?',
      bodyMarkdownFr: `Les médicaments dits « incrétinomimétiques » agissent sur un ou plusieurs récepteurs hormonaux digestifs (GLP-1, GIP, glucagon) ou en association avec un analogue de l'amyline.

| Médicament (DCI et noms commerciaux) | Mécanisme d'action | Voie d'administration | Statut réglementaire (novembre 2026) |
|---|---|---|---|
| **Liraglutide** (*Victoza*, *Saxenda*), **dulaglutide** (*Trulicity*), **sémaglutide** (*Ozempic*, *Wegovy*, *Rybelsus*) | Agoniste du récepteur GLP-1 | Injection (hebdomadaire ou quotidienne) ; sémaglutide également en comprimé quotidien (*Rybelsus*) | Autorisés dans le diabète de type 2 ; sémaglutide 2,4 mg (*Wegovy*) autorisé dans l'obésité |
| **Tirzépatide** (*Mounjaro*) | Double agoniste GIP + GLP-1 | Injection hebdomadaire | Autorisé dans le diabète de type 2 et l'obésité |
| **Orforglipron** (*Foundayo*) | Agoniste GLP-1 non peptidique (petite molécule) | Comprimé quotidien | Approuvé par la FDA américaine pour la gestion du poids en avril 2026 (source presse spécialisée) |
| **CagriSema** | Analogue de l'amyline + sémaglutide | Injection hebdomadaire | Dossier déposé auprès de la FDA en décembre 2025 ; aucune décision retrouvée |
| **Rétatrutide** | Triple agoniste GIP + GLP-1 + glucagon | Injection hebdomadaire | Phase 3 ; dépôt auprès de la FDA envisagé début 2027 (presse spécialisée) |

Le statut d'approbation de l'**orforglipron** et du **CagriSema** repose sur la presse spécialisée et des communiqués d'entreprise, et non sur des documents réglementaires primaires. Aucune de ces deux molécules ne dispose encore de résultats publiés sur les événements cardiovasculaires majeurs ou l'insuffisance cardiaque.`,
    },
    {
      headingFr: 'Infarctus et AVC : le bénéfice le mieux démontré',
      bodyMarkdownFr: `- **Méta-analyse de 10 essais dans le diabète de type 2 (Hasebe 2025, 73 263 patients, incluant SOUL et FLOW ; 76,5 % avec maladie cardiovasculaire établie, 17,6 % avec antécédent d'insuffisance cardiaque) :** réduction des événements cardiovasculaires majeurs (**MACE** : décès cardiovasculaire, infarctus, AVC) de 14 % (**HR 0,86** ; IC 95 % 0,82–0,91), des décès cardiovasculaires (**HR 0,86**), des infarctus (**HR 0,87**), de la mortalité toutes causes (**HR 0,88**) et des hospitalisations pour insuffisance cardiaque (**HR 0,87**). Le bénéfice sur les MACE se maintenait chez les patients avec maladie cardiovasculaire établie (**HR 0,86**) et suivait la baisse de l'HbA1c plutôt que la perte de poids.
- **SOUL (*NEJM* 2025 / *JAMA Intern Med* 2026, sémaglutide oral 14 mg, 9 650 patients avec diabète de type 2 et maladie artérielle ou rénale) :** réduction des MACE (**HR 0,86** ; IC 95 % 0,77–0,96) sur un suivi médian d'environ 4 ans.
- **SELECT (sémaglutide 2,4 mg — *Wegovy*, obésité avec maladie cardiovasculaire établie, sans diabète) :** diminution des MACE d'environ 20 % (**HR 0,80**, chiffre repris par la HAS). Les détails figurent dans la fiche *Poids, obésité et dénutrition*.
- **SURPASS-CVOT (*NEJM* 2025, tirzépatide contre dulaglutide, 13 165 patients avec diabète de type 2 et maladie artérielle) :** le tirzépatide s'est montré **non inférieur, mais pas supérieur**, au dulaglutide (décès CV, infarctus ou AVC : **12,2 % contre 13,1 %** ; **HR 0,92**, IC 95 % 0,83–1,01). L'essai ne comportait pas de bras placebo (résumé consulté).

**Ce que cela implique en cas de cardiomyopathie ischémique :** votre maladie est une atteinte coronaire établie, si bien que la protection artérielle est pertinente sur le principe. Toutefois, seul **SOUL** a publié les résultats spécifiquement dans l'ICFER, et dans ce sous-groupe les MACE n'étaient pas clairement réduits (**HR 0,93** ; IC 95 % 0,66–1,31).`,
    },
    {
      headingFr: 'Insuffisance cardiaque : un résultat très différent selon la FEVG',
      bodyMarkdownFr: `Sur l'ensemble de **12 essais randomisés (95 023 participants, Raveendra 2026)**, les agonistes du GLP-1 réduisent les événements d'insuffisance cardiaque d'environ **12 %** (**RR 0,88**), ce qui correspond à un effet absolu modeste (environ **1 événement évité pour 238 patients traités**). Le bénéfice était plus net chez les personnes **sans** insuffisance cardiaque au départ, et cette analyse ne séparait pas FEVG réduite et FEVG préservée.

### Données disponibles en FEVG réduite (ICFER, autour de 35 %)

| Étude ou analyse | Population étudiée | Résultat en FEVG réduite (ICFER) | Limites et applicabilité |
|---|---|---|---|
| **SOUL — analyse IC** (*JAMA Intern Med* 2026) | **592 patients** diabétiques avec ICFER déclarée par l'investigateur (l'ensemble du groupe IC présentait ~88 % de maladie coronaire et 57 % d'antécédent d'infarctus, non détaillés pour l'ICFER seule) | Événements d'IC ou décès CV : **23,0 % contre 22,6 %**, **HR 0,98** (IC 95 % 0,70–1,38) ; en ICFEP : **HR 0,59** | **Partielle.** Sous-groupe randomisé ; FEVG déclarée et non mesurée systématiquement (seuls **325 patients** avaient une FEVG enregistrée < 40 %) ; diabète uniquement ; dose orale diabète ; financé par le fabricant |
| **Christophides 2026** (méta-analyse, *J Clin Med*) | 14 ECR (**15 180 patients**) avec IC établie, stratifiés par FEVG | Hospitalisations pour IC : **RR 1,38** (IC 95 % 1,03–1,85) en ICFER (sur **2 études seulement** : FIGHT avec liraglutide et analyse EXSCEL avec exénatide). Décès CV en ICFER < 65 ans : **RR 0,71** (IC 95 % 0,54–0,95, 2 analyses post-hoc EXSCEL et SELECT, exploratoire). Mortalité toutes causes inchangée. Bénéfice hospitalisations uniquement si FEVG > 40 % (**RR 0,67**) | **Partielle et fragile** : deux études par estimation, molécules plus anciennes, signaux divergents |
| **SELECT — sous-groupe ICFER** (déclaration HFA 2025) | **1 347 patients** avec obésité et ICFER légère | Baisse des MACE, mais **pas des hospitalisations pour IC** (**HR 1,08**) | **Partielle** (obésité, sans diabète, ICFER légère) |
| **Kassab 2026** (cohorte US TriNetX) | 1 275 paires appariées (FEVG moyenne **30 %**, 68 % coronaire, 88 % diabète) | Mortalité à 1 an **7,1 % contre 10,2 %** (**HR 0,54**), moins de décompensations, pas d'excès de TV/FV | **Observationnelle (faible)** : risque de biais de temps immortel, effet implausiblement fort, erreur de tableau ; qualifiée de génératrice d'hypothèses par les auteurs |
| **Karlström 2025** (registre suédois SwedeHF, *JACC HF*) | 808 utilisateurs de GLP-1 parmi 35 055 patients IC avec IMC > 25 (96 % diabétiques, 59 % ischémiques) | FEVG ≤ 40 % : décès CV à 2 ans **aHR 0,43** (IC 95 % 0,24–0,79) ; mortalité toutes causes appariée toutes FEVG non significative (**0,79** ; IC 95 % 0,59–1,06) | **Observationnelle (faible)** : traitement compté si délivré jusqu'à 12 mois après l'inclusion (biais de temps immortel) ; peu d'événements en FEVG ≤ 40 % |
| **Kokura 2026** (TriNetX, résumé) | 3 158 paires appariées ICFER + diabète de type 2 sous traitement standard complet | Mortalité sur 18 mois **10,5 % contre 14,4 %** (**HR 0,71** ; IC 95 % 0,62–0,83) ; hospitalisations inchangées (**HR 1,05**) | **Observationnelle** ; FEVG, part ischémique et règles temporelles absentes du résumé ; même plateforme que Kassab (chevauchement probable) |
| **Marques 2025** (dispositifs implantés, résumé) | 53 utilisateurs de GLP-1 contre 53 non-utilisateurs avec ICFER et DAI/CRT sur 1 an | Fréquence cardiaque **+7 battements/min** ; TV/FV **13 contre 2** (non significatif) ; événements ventriculaires non soutenus + chocs ou stimulation antitachycardique regroupés **33 contre 3** | **Population directe**, mais très petit effectif, observationnelle, résumé uniquement |

### Lire ces données avec recul

- **SOUL reste la meilleure donnée disponible en ICFER**, mais son intervalle de confiance (**0,70–1,38**) reste compatible avec un bénéfice modéré comme avec un risque modéré. Le test d'interaction entre types d'insuffisance cardiaque n'était pas significatif (**p = 0,14**), et l'analyse n'était pas ajustée pour les comparaisons multiples : SOUL ne *prouve* pas un effet différent dans l'ICFER, mais n'y détecte aucun bénéfice.
- **Les signaux contradictoires ne tranchent pas le débat :** le signal défavorable sur les hospitalisations (**RR 1,38**) repose sur deux études d'anciennes molécules (dont FIGHT chez des patients juste sortis d'hospitalisation), tandis que les signaux favorables (décès CV < 65 ans **RR 0,71** ; trois cohortes observationnelles) sont exploratoires ou exposés aux biais.
- **Pourquoi trois cohortes concordantes ne suffisent pas :** les patients qui reçoivent et poursuivent ces médicaments en vie réelle sont souvent plus jeunes et en meilleur état général, et deux études laissaient des patients « survivre jusqu'à » entrer dans le groupe traité (biais de temps immortel). Une baisse de 30 % à 60 % de la mortalité en 1 à 2 ans dépasse tout ce qu'ont montré les essais randomisés, ce qui signe un biais probable ; de plus, deux cohortes utilisent la même base américaine.
- **Le mécanisme de la fréquence cardiaque :** le résumé des caractéristiques du produit (RCP) européen de *Wegovy* rapporte une hausse moyenne de **3 battements/min**, avec une élévation d'au moins **10 battements/min** observée à un moment donné chez **67,0 %** des patients traités contre **50,1 %** sous placebo. Une accélération du pouls va à l'encontre de l'objectif recherché dans l'ICFER (ralentissement par bêtabloquants et, au besoin, ivabradine).
- **Aucun essai clinique d'événements durs en ICFER n'a été retrouvé** sur ClinicalTrials.gov au 25 novembre 2026 (les registres CTIS européen et OMS n'ayant pas été interrogés). Seuls deux petits essais évaluant la distance de marche ou la capacité d'effort ont été recensés (60 patients sous tirzépatide en Iran, fin mi-2027 ; 100 patients sous sémaglutide contre régime au Danemark, fin 2027). Le grand essai d'insuffisance cardiaque **MARITIME-HF** (MariTide, environ 5 000 patients) **exclut** les FEVG ≤ 40 %.`,
    },
    {
      headingFr: 'Rétatrutide et incrétines de nouvelle génération',
      bodyMarkdownFr: `Le **rétatrutide** stimule simultanément trois récepteurs hormonaux : GIP, GLP-1 et glucagon.

- **Phase 2 dans l'obésité (*NEJM* 2023, 338 adultes) :** perte de poids de **-24,2 %** à la dose de 12 mg à 48 semaines contre **-2,1 %** sous placebo. Sur enregistrement de 24 heures, la fréquence cardiaque a augmenté de **+9,2 battements/min** (IC 95 % 7,4–11,1) à 12 mg contre **+0,8** sous placebo à la 24e semaine, avant de revenir à **+6,7 battements/min** à la 36e semaine. Des effets indésirables rythmiques ont été rapportés chez **7 patients sur 62** à 12 mg (**11,3 %**). L'essai excluait une fréquence de repos supérieure à 100 bpm, la fibrillation atriale et d'autres tachyarythmies, ainsi que l'insuffisance cardiaque NYHA III–IV (texte intégral consulté via copie tierce).
- **Phase 2 dans le diabète de type 2 (*Lancet* 2023, 281 patients) :** à 36 semaines, variation du pouls de **+0,03 à +4,34 battements/min** sous rétatrutide contre **-3,16** sous placebo et **+1,76** sous dulaglutide (sans différence significative par rapport au dulaglutide), après une hausse précoce jusqu'à environ **+7 battements/min**.
- **Étude de laboratoire (Neumann 2026) :** sur des fragments de muscle atrial humain prélevés chez des patients coronariens sévères, le rétatrutide a augmenté la force de contraction via ses trois récepteurs, sans que cet effet ne soit bloqué par un bêtabloquant. Le muscle ventriculaire n'a pas été testé et les conséquences cliniques chez un patient vivant avec une ICFER sont inconnues.
- **TRIUMPH-1 (*NEJM* 2026, 2 339 adultes obèses sans diabète) :** perte de poids à 80 semaines de **-17,6 %**, **-23,7 %** et **-25,0 %** (doses 4, 9 et 12 mg) contre **-3,9 %** sous placebo. Selon le résumé de congrès du laboratoire, la pression artérielle systolique a baissé d'environ **12 mmHg** à 12 mg, et **11,3 %** des patients ont arrêté pour effets indésirables à 12 mg contre **4,9 %** sous placebo.
- **TRIUMPH-3 (résultats préliminaires non revus par les pairs ; 1 949 adultes avec IMC ≥ 35 et maladie cardiovasculaire établie) :** perte de poids de **-21,6 %** et **-22,6 %** contre **-3,2 %**. Les événements cardiaques ont été peu nombreux et **non concluants** : composite large incluant l'insuffisance cardiaque **HR 0,82** (IC 95 % 0,55–1,22), MACE classiques **HR 1,12** (IC 95 % 0,64–1,96) ; **13,5 %** d'arrêts pour effets indésirables à 12 mg. Ces chiffres proviennent de la presse spécialisée rapportant un communiqué d'entreprise non vérifiable directement. **Aucune donnée de fréquence cardiaque de phase 3** n'a été retrouvée dans une source fiable.
- **Critères d'inclusion cardiaques :** les fiches publiques de sept essais du rétatrutide ne précisent ni la FEVG, ni la fréquence cardiaque, ni le rythme. TRIUMPH-1 et -2 ne mentionnent pas d'exclusion cardiaque ; TRIUMPH-3 exclut seulement un infarctus, un AVC, un stent/pontage ou une hospitalisation pour IC dans les 90 jours précédents ; les essais diabète excluent les classes NYHA IV (ou III–IV). Comme les registres publics omettent fréquemment des exclusions présentes dans les protocoles complets, on ignore si des patients atteints d'ICFER ont effectivement participé.
- **Essai d'événements cliniques TRIUMPH-Outcomes** (environ 10 000 personnes avec IMC ≥ 27 et maladie artérielle ou rénale, résultats attendus en **2029**) : comptabilise les hospitalisations pour IC et n'exclut que la classe NYHA IV et l'IC décompensée aiguë, sans critère de FEVG, ce qui pourrait inclure une partie de patients en ICFER.

**Applicabilité à l'ICFER ischémique : extrapolée.** Aucun essai du rétatrutide n'a rapporté de résultats dans l'ICFER. La hausse de fréquence cardiaque observée au pic en phase 2 (+9,2 bpm sur enregistrement 24 h) n'est pas directement comparable à la moyenne de +3 bpm du RCP de *Wegovy* (méthodes de mesure différentes), mais rappelle qu'une perte de poids spectaculaire n'équivaut pas à un bénéfice cardiaque démontré à FEVG 35 %.

**Autres molécules en développement :** l'**orforglipron** (comprimé, environ 12 % de perte de poids à 72 semaines, essai cardiovasculaire **ATTAIN-Outcomes**) et **CagriSema** (environ 20 % à 68 semaines) n'ont pas encore de données cardiovasculaires ou d'insuffisance cardiaque. Des essais d'événements sont également enregistrés pour le **survodutide** (**SYNCHRONIZE-CVOT**) et **MariTide**.`,
    },
    {
      headingFr: 'Points de sécurité importants avec les traitements de l’insuffisance cardiaque',
      bodyMarkdownFr: `- **Déshydratation et fonction rénale :** le RCP européen de *Wegovy* prévient que nausées, vomissements et diarrhées peuvent provoquer une déshydratation susceptible, rarement, d'aggraver la fonction rénale. Si vous prenez un diurétique de l'anse, un inhibiteur du SGLT2 (iSGLT2), un ARNI et un ARM, convenez à l'avance avec votre cardiologue ou votre médecin traitant d'une conduite à tenir en cas de vomissements ou de diarrhées (« jours de maladie »). Ne modifiez pas vos traitements sans avis médical.
- **Insuffisance cardiaque sévère :** la classe **NYHA IV** n'a pas été étudiée et l'utilisation de *Wegovy* n'y est pas recommandée (RCP européen).
- **Fréquence cardiaque :** élévation du pouls décrite ci-dessus, à surveiller particulièrement dans l'ICFER.
- **Yeux et anesthésie :** le RCP signale un risque rare de neuropathie optique ischémique antérieure non artéritique (**NOIA-NA / NAION**, risque relatif environ doublé, soit environ **1 cas supplémentaire pour 10 000 personnes-années**) ainsi qu'un risque d'inhalation du contenu gastrique lors d'une **anesthésie générale ou d'une sédation profonde** (vidange gastrique ralentie — à signaler impérativement à l'anesthésiste avant tout examen ou intervention ; voir *Chirurgie, soins dentaires et règles des « jours de maladie »*).
- **Fonte musculaire (masse maigre) :** dans une méta-analyse en réseau de 22 essais (**Karakasis 2025**), environ **un quart** du poids perdu sous GLP-1 correspondait à de la masse maigre (moyenne **-0,86 kg**), le sémaglutide à forte dose et le tirzépatide figurant parmi les moins épargneurs pour le muscle. Or la fonte musculaire touche déjà environ **1 personne sur 5** atteinte d'insuffisance cardiaque chronique (déclaration HFA 2025).
- **Reprise de poids à l'arrêt :** dans **SURMOUNT-4**, les patients passés sous placebo après 36 semaines de tirzépatide ont repris **14,0 %** de leur poids corporel au cours de l'année suivante, alors que ceux qui poursuivaient le traitement ont encore perdu **5,5 %**. Dans l'extension de **STEP 1**, un an après l'arrêt du sémaglutide, environ **deux tiers** du poids perdu étaient revenus et la plupart des améliorations métaboliques s'étaient effacées.
- **Association aux iSGLT2 :** les iSGLT2 favorisent eux aussi la perte hydrique et, en cas d'apport alimentaire très réduit, exposent à un risque rare d'acidocétose. Consultez également la fiche *Interactions entre compléments, aliments et médicaments*.`,
    },
    {
      headingFr: 'Ce que disent les recommandations internationales (au 25 novembre 2026)',
      bodyMarkdownFr: `Les recommandations européennes (ESC) utilisent des classes et niveaux de preuve (I, IIa, IIb, III), tandis que l'American Diabetes Association (ADA) utilise des grades (A, B, C, E) qui ne correspondent pas à la même échelle.

| Recommandation | Contenu | Classe / grade | Population couverte |
|---|---|---|---|
| **ESC 2026** (insuffisance cardiaque) | Sémaglutide ou tirzépatide dans l'IC avec obésité | **Classe IIa, Niveau B1** | FEVG **≥ 45 %** et IMC **≥ 30** ; **ne couvre pas une FEVG à 35 %** |
| **ESC 2026** (insuffisance cardiaque) | Recommandation des GLP-1 dans l'ICFER | **Aucune** (texte silencieux) | — |
| **ADA 2026**, 10.40a et 10.40c | iSGLT2 ou GLP-1 à bénéfice CV prouvé pour réduire les événements cardiovasculaires | **Grade A** | Diabète de type 2 avec maladie artérielle établie (ou facteurs de risque multiples) ou MRC ; **sans mention de FEVG**, donc englobe formellement le diabète avec ICFER ischémique |
| **ADA 2026**, 10.40d | Association possible d'un iSGLT2 et d'un GLP-1 | **Grade B** | Même population |
| **ADA 2026**, 10.41a | iSGLT2 pour réduire l'aggravation de l'IC et les décès CV | **Grade A** | Diabète de type 2 avec IC de **toute FEVG** (aucun GLP-1 cité ici) |
| **ADA 2026**, 10.44c (nouveau) | iSGLT2 (A) ou GLP-1 « avec bénéfice de prévention de l'IC » (B) pour réduire les hospitalisations pour IC | **Grade A / B** | Diabète de type 2 avec **stade B** (asymptomatique, pouvant inclure une FEVG réduite) ou haut risque CV |
| **ADA 2026**, 10.44d et 10.44e (nouveau) | Tirzépatide (A) ou GLP-1 (B) pour les événements d'IC ; l'un ou l'autre pour les symptômes (A) | **Grade A / B** | Diabète de type 2, obésité et **ICFEP symptomatique** |
| **ADA 2026**, 10.44g | Traitements standards de l'IC post-infarctus et symptomatique (IEC/ARA2/ARNI, ARM, bêtabloquant, iSGLT2) | **Grade A** | Aucun GLP-1 listé |
| **Consensus ADA / IC 2022** | Les GLP-1 peuvent servir au contrôle glycémique, non pour améliorer l'IC | Consensus non gradé | Diabète avec insuffisance cardiaque |
| **Déclaration HFA 2025** (obésité et IC) | Sécurité dans l'ICFER jugée « débattue » ; appelle à des essais dédiés | Avis d'experts non gradé | Obésité avec insuffisance cardiaque |

- **Points d'accord :** toutes les sources réservent l'indication « insuffisance cardiaque » à la FEVG préservée ; aucune ne recommande un GLP-1 pour traiter une ICFER.
- **Divergence à connaître :** la recommandation artérielle de l'ADA (10.40, grade A) ne précise pas de seuil de FEVG et oriente donc *vers* un GLP-1 en cas de diabète de type 2 et de cardiomyopathie ischémique pour prévenir infarctus et AVC, tandis que les sociétés d'insuffisance cardiaque jugent la sécurité en ICFER débattue. Les objectifs diffèrent (événements artériels contre événements d'IC) et les recommandations ne les concilient pas explicitement.
- **Incohérence potentielle :** l'item ADA 10.44c mentionne la prévention des hospitalisations pour IC au **stade B** (qui peut inclure une FEVG réduite sans symptôme), alors que les seules données randomisées en ICFER (SOUL, FIGHT) ne montrent pas de bénéfice sur l'IC.
- **Limites de vérification :** les recommandations ESC 2023 (diabète et MCV), ESC 2024 (syndromes coronariens chroniques), ACC/AHA/HFSA, NICE et HAS n'ont pas été vérifiées sur ce point précis ; le texte ADA 2026 a été lu par extraits. L'application à votre situation relève de votre cardiologue.`,
    },
    {
      headingFr: 'Accès et remboursement en France (situation en novembre 2026)',
      bodyMarkdownFr: `- **Depuis le 15 juin 2026**, *Wegovy* (sémaglutide 2,4 mg) et *Mounjaro* (tirzépatide) sont remboursés à **65 %** par l'Assurance maladie dans l'obésité de l'adulte pour un **IMC initial ≥ 40 kg/m²**, ou **≥ 35 kg/m² associé à au moins l'une des 15 comorbidités listées** (notamment diabète de type 2, hypertension artérielle traitée, maladie rénale chronique jusqu'au stade 3, syndrome d'apnées du sommeil avec IAH ≥ 15), après échec d'une prise en charge nutritionnelle bien conduite.
- **La maladie coronaire et l'insuffisance cardiaque ne figurent pas sur cette liste de 15 comorbidités :** l'hypertension artérielle traitée est la seule pathologie cardiovasculaire retenue, bien que la HAS ait cité les maladies cardiovasculaires établies parmi ses populations prioritaires.
- **Circuit de prescription :** la première prescription est réservée aux structures spécialisées de niveau 2 ou 3 (centres spécialisés de l'obésité, SMR spécialisés, CHU, endocrinologues rattachés à un centre obésité) et, depuis une mise à jour du 12 juin 2026, aux médecins coordonnateurs du **« Parcours coordonné renforcé obésité complexe »**. **Tout médecin peut ensuite renouveler l'ordonnance.** Un formulaire d'éligibilité Assurance maladie (via AmeliPro) est exigé. En dehors de ces critères, la prescription reste possible mais **non remboursée**.
- **Règle d'arrêt HAS :** envisager l'arrêt si la perte de poids est inférieure à **5 % après 6 mois** ; réévaluation de *Wegovy* au-delà de **2 ans**.
- **Prix publics indicatifs :** *Wegovy* 2,4 mg à **195,10 €** la boîte ; *Mounjaro* 15 mg à **433,80 €** (les dosages inférieurs coûtent moins cher).
- ***Mounjaro* dans le diabète de type 2 (cadre distinct de l'obésité) :** remboursé à **65 %** depuis le **15 juin 2026** et prescriptible par tout médecin. Dans son avis du **6 mai 2026** (post-SURPASS-CVOT), la HAS a attribué un SMR modéré uniquement en association à la metformine, ou à la metformine plus sulfamide ou insuline basale, sans amélioration du service médical rendu par rapport au dulaglutide (**ASMR V**), en 2e ou 3e intention lorsque l'HbA1c dépasse l'objectif de plus de 1 % et l'IMC est ≥ 30. Une page d'information hospitalière (AP-HP) indique toutefois l'absence de condition d'IMC pour le remboursement diabète : ce point mérite confirmation auprès de votre médecin ou de votre CPAM.
- **Avis HAS dans l'obésité :** progrès thérapeutique mineur (**ASMR IV**) pour *Wegovy* et *Mounjaro* ; bénéfice cardiovasculaire de *Wegovy* dans SELECT qualifié de « modeste », tandis que l'évaluation cardiovasculaire complète de *Mounjaro* attend l'essai **SURMOUNT-MMO**.
- **Précision réglementaire (au 25 novembre 2026) :** les textes de référence sont les arrêtés du **10 juin 2026** (publiés au *Journal officiel* du 12 juin 2026), remplaçant ceux du 23 mai 2026. Les informations ci-dessus reposent sur Vidal, la HAS, l'AP-HP et *service-public.fr* (les arrêtés Légifrance n'ayant pas été consultés directement). Vérifiez toujours votre éligibilité actuelle avec le centre spécialisé obésité, votre médecin traitant ou votre CPAM (*ameli.fr*).`,
    },
    {
      headingFr: 'Synthèse pratique pour une ICFER ischémique (FEVG autour de 35 %)',
      bodyMarkdownFr: `| Question | Meilleure réponse actuelle | Niveau de confiance |
|---|---|---|
| Préviennent-ils les infarctus et AVC en cas de maladie coronaire ? | **Oui**, dans le diabète et dans l'obésité (environ 14 % à 20 % de MACE en moins) | **Élevé** (plusieurs grands ECR, non spécifiques à l'ICFER) |
| Réduisent-ils les événements d'insuffisance cardiaque à FEVG 35 % ? | **Non démontré** (SOUL sous-groupe ICFER : HR 0,98) | **Moyen** (un sous-groupe, diabète seul) |
| Sont-ils nocifs à FEVG 35 % ? | **Non prouvé** ; petits signaux d'alerte (2 essais anciens, hausse du pouls, étude sur DAI) et signaux exploratoires inverses laissent la question ouverte | **Faible** |
| Le rétatrutide est-il utile ou sûr avec un cœur affaibli ? | **Inconnu** ; aucun résultat publié dans l'ICFER | **Non évaluable** |
| Les bénéfices persistent-ils après l'arrêt ? | **Non** ; l'essentiel du poids revient en un an | **Élevé** |

Si vous vivez avec un diabète de type 2 ou une obésité sévère en plus d'une cardiomyopathie ischémique, parlez-en conjointement à votre cardiologue et à votre endocrinologue ou médecin traitant avant toute décision.`,
    },
  ],
  relatedArticleSlugs: [
    'diabete-insuffisance-cardiaque',
    'poids-obesite-et-denutrition',
    'maladies-associees',
    'essais-cliniques-cles',
    'essais-cliniques-en-cours-et-a-suivre',
    'traitements-additionnels-nouveaux',
    'questions-equipe-cardiologie',
    'dysfonction-vg-asymptomatique-stade-b',
    'cafeine-boissons-energisantes-et-stimulants',
    'chirurgie-soins-dentaires-et-jours-de-maladie',
    'interactions-complements-aliments-medicaments',
    'vivre-avec-insuffisance-cardiaque-en-france',
  ],
  sources: [
    {
      label: 'SOUL (Pop-Busui et al., JAMA Intern Med 2026 ; essai principal NEJM 2025)',
      detail: 'Sémaglutide oral 14 mg dans le diabète de type 2 : MACE (HR 0,86) et résultats d’insuffisance cardiaque stratifiés par FEVG (592 patients ICFER, HR 0,98).',
    },
    {
      label: 'Hasebe et al. (2025), Raveendra et al. (2026), Christophides et al. (2026) et SURPASS-CVOT (NEJM 2025)',
      detail: 'Méta-analyses de 10 essais diabète (73 263 patients), 12 essais IC (95 023 patients), 14 ECR stratifiés par FEVG et essai tirzépatide contre dulaglutide (13 165 patients).',
    },
    {
      label: 'Cohortes ICFER et dispositifs : Kassab 2026, Karlström 2025 (SwedeHF), Kokura 2026 et Marques 2025',
      detail: 'Données observationnelles de mortalité, biais de temps immortel et étude sur fréquence cardiaque et arythmies chez des patients porteurs de DAI/CRT.',
    },
    {
      label: 'Rétatrutide et nouvelles incrétines : Jastreboff (NEJM 2023), Rosenstock (Lancet 2023), Neumann (2026), TRIUMPH-1/-3 et ClinicalTrials.gov',
      detail: 'Perte pondérale, élévation de la fréquence cardiaque, données préliminaires TRIUMPH-3, essais d’événements (TRIUMPH-Outcomes, MARITIME-HF, ATTAIN-Outcomes) et statut orforglipron/CagriSema.',
    },
    {
      label: 'Sécurité et masse maigre : RCP européen Wegovy (EMA 2026), Karakasis 2025, SURMOUNT-4 (JAMA 2024), STEP 1 extension',
      detail: 'Déshydratation, classe NYHA IV, fréquence cardiaque, NOIA-NA, anesthésie, perte de masse maigre et reprise pondérale après arrêt.',
    },
    {
      label: 'Recommandations ESC 2026, ADA 2026 (section 10), HFA 2025 et remboursement France (HAS 2024–2026, Vidal, service-public.fr)',
      detail: 'Classes ESC IIa B1 en ICFEP obèse, grades ADA 10.40–10.44, arrêtés des 23 mai et 10 juin 2026 (remboursement à 65 % dès le 15 juin 2026, liste des 15 comorbidités, avis HAS).',
    },
  ],
  disclaimerType: 'medical',
};
