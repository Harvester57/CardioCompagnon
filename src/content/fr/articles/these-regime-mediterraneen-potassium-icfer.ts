import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'these-regime-mediterraneen-potassium-icfer',
  sourceWikiPath: 'wiki/theses/mediterranean-diet-potassium-safety-hfref.md',
  titleFr: 'Thèse : régime méditerranéen et sécurité du potassium dans l’ICFER (DFG ≥ 30)',
  category: 'nutrition',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'thèse',
    'alimentation-méditerranéenne',
    'potassium',
    'hyperkaliémie',
    'icfer',
    'arni',
    'arm',
    'isglt2',
    'maladie-rénale-chronique',
    'additifs-alimentaires',
    'substituts-de-sel',
  ],
  aliases: [
    'Sécurité potassium régime méditerranéen ICFER',
    'Restriction potassique ARNI ARM iSGLT2',
    'Fruits et légumes potassium insuffisance cardiaque',
    'Additifs potassiques cachés',
    'Sel au potassium insuffisance cardiaque',
  ],
  linkedModules: ['core', 'ckd'],
  plainSummaryFr:
    "Verdict de l'enquête : partiellement étayée (confiance moyenne). De nombreux patients atteints de cardiomyopathie ischémique se demandent s'ils doivent automatiquement restreindre les fruits, légumes et légumineuses du régime méditerranéen parce qu'ils prennent un ARNI (sacubitril/valsartan — Entresto) ou un IEC associés à un ARM (spironolactone — Aldactone, éplérénone — Inspra). La réponse comporte deux volets bien distincts. D'une part, lorsque la kaliémie est normale et le DFG préservé (≥ 45–60 mL/min/1,73 m²), les recommandations rénales modernes (KDIGO 2024, KDOQI 2020, ASN 2025) ne soutiennent pas une interdiction préventive systématique des aliments végétaux méditerranéens entiers, d'autant que les inhibiteurs du SGLT2 et le sacubitril/valsartan réduisent nettement les hyperkaliémies sévères (> 6,0 mmol/L) par rapport aux anciens schémas IEC + ARM. D'autre part, affirmer qu'un régime riche en potassium est largement sûr sans restriction jusqu'à un DFG de 30 mL/min/1,73 m² va trop loin : zéro essai randomisé ne l'a testé dans l'ICFER sous quadrithérapie, une hyperkaliémie > 5,5 mmol/L survient encore chez environ 8,6 % à 16 % des patients sous empagliflozine ou sacubitril/valsartan, un essai contrôlé d'alimentation riche en potassium dans la MRC de stade 3 (Turban 2021) a augmenté la kaliémie (+0,21 mmol/L) et doublé le risque de dépassement de 5,5 mmol/L (OR 2,50), et les études de bilan (Picard 2026) montrent une absorption réelle de 88 à 94 % quelle que soit la source. La source du potassium est décisive : évitez les substituts de sel au chlorure de potassium (KCl) et les additifs potassiques cachés des produits industriels « réduits en sel », modérez les formes concentrées (jus, smoothies, fruits secs, concentré de tomate), et personnalisez avec votre équipe en cas de DFG 30–44, de diabète ou de kaliémie ≥ 4,8–5,0 mmol/L. Ne levez jamais seul une restriction prescrite.",
  sections: [
    {
      headingFr: 'Question évaluée et distinction indispensable des trois sources de potassium',
      bodyMarkdownFr: `**Hypothèse testée :** une alimentation méditerranéenne riche en potassium est-elle sûre sans restriction alimentaire potassique systématique chez des patients atteints d'ICFER stable traités par ARNI ou IEC, ARM et iSGLT2 avec un DFG ≥ 30 mL/min/1,73 m² ?

Une grande partie de la confusion disparaît lorsqu'on sépare strictement **trois catégories d'apports en potassium** plutôt que de les confondre sous un seul terme :

| Catégorie | Exemples concrets | Physiologie et risque sous ARNI/IEC + ARM + iSGLT2 | Position pratique |
|---|---|---|---|
| **1. Aliments méditerranéens végétaux entiers ordinaires** | Légumes frais ou cuits, légumineuses (lentilles, pois chiches), fruits entiers, noix non salées, céréales complètes, huile d'olive, poisson | Vidange gastrique et absorption plus progressives ; co-apports en **fibres** (transit et excrétion fécale de K⁺), **alcalins organiques** (entrée cellulaire du K⁺) et glucides. Absorption totale non négligeable (~88–94 % en bilan) | **À aborder avec l'équipe** comme base raisonnable si kaliémie normale et surveillée ; personnaliser avec un diététicien si K⁺ > 5,0, DFG 30–44 ou diabète (**KDIGO 2024**, **KDOQI 2020**, **Picard 2026**) |
| **2. Formes végétales concentrées en potassium** | Jus de fruits ou de légumes, smoothies denses, fruits secs (pruneaux, raisins, abricots), concentré/purée de tomate, grosses portions de pommes de terre ou chips | Matrice végétale rompue ou eau retirée délivrant un bolus rapide dans l'intestin grêle (récupération urinaire de **96,3 %** pour les jus comme pour les produits animaux dans **Naismith 2008** ; > 94 % pour les pommes de terre dans **Macdonald-Clarke 2016** ; jus exclus de **GoFreshRx**) | **Prudence sur les portions**, surtout si DFG 30–44, diabète, K⁺ initiale ≥ 4,8–5,0 mmol/L ou antécédent d'hyperkaliémie |
| **3. Sels de substitution au KCl, comprimés de K⁺ et additifs cachés** | Sels « pauvres en sodium » (25–75 % KCl), comprimés OTC de potassium, additifs potassiques (phosphates, lactates, sorbates) des viandes, sauces et plats industriels « à teneur réduite en sel » | Potassium inorganique concentré rapidement absorbé (le chlorure de KCl abaisse les bicarbonates et a provoqué **11 % d'hyperkaliémies** dans **Gritter 2022**). Les viandes industrielles « réduites en sel » contiennent en moyenne **+44 % de K⁺** (jusqu'à **1 500 mg/100 g** — **Parpia 2018**) | **À éviter** sans accord explicite du cardiologue ou du néphrologue (**notices Entresto / Inspra / Spironolactone**, **NICE NG106**, **ASN 2025**) |`,
    },
    {
      headingFr: 'Arguments en faveur de l’absence d’interdiction systématique des végétaux entiers',
      bodyMarkdownFr: `- **Effet tampon démontré des médicaments modernes de l'ICFER sur l'hyperkaliémie sévère :**
  - **EMPEROR-Pooled (Ferreira 2022, texte intégral, n = 9 583 patients IC) :** l'empagliflozine (*Jardiance*) a réduit l'hyperkaliémie rapportée ou l'instauration d'un chélateur de potassium (6,5 % contre 7,7 %, **HR 0,82**, p = 0,01), les K⁺ > 5,5 mmol/L (8,6 % contre 9,9 %, **HR 0,85**) et surtout les **hyperkaliémies sévères > 6,0 mmol/L (1,9 % contre 2,9 %, HR 0,62**, IC 95 % **0,48–0,81**, p < 0,001), sans majorer l'hypokaliémie et avec un effet conservé sous ARM et plus marqué lorsque le DFG est bas. Dans EMPEROR-Reduced (71 % d'ARM), les arrêts d'ARM ont diminué de **22 % (HR 0,78)**.
  - **Neuen 2022 (méta-analyse sur données individuelles, 6 essais, n = 49 875) :** les iSGLT2 abaissent l'hyperkaliémie grave (≥ 6,0 mmol/L) de **16 % (HR 0,84**, 0,76–0,93), de manière homogène quel que soit l'antécédent d'IC, le stade de MRC ou la prise d'ARM.
  - **PARADIGM-HF sous ARM (Desai 2017, n = 8 399 ICFER dont 4 671 sous ARM) :** l'hyperkaliémie sévère (> 6,0 mmol/L) était moins fréquente sous sacubitril/valsartan (*Entresto*) que sous énalapril chez les utilisateurs d'ARM (**2,2 contre 3,1 pour 100 patients-années** ; énalapril **HR 1,37**, p = 0,02 ; incluant les initiateurs d'ARM **HR 1,43**, p = 0,003).
- **Rejet des restrictions préventives systématiques par les recommandations rénales modernes :**
  - **KDIGO 2024 (MRC)** encourage une alimentation diversifiée à dominante végétale (PP 3.3.1) et réserve la restriction potassique aux patients MRC G3–G5 ayant un **antécédent d'hyperkaliémie**, en ciblant en priorité les sources très biodisponibles comme les aliments ultra-transformés avec un diététicien rénal (PP 3.11.5.1–2).
  - **KDOQI 2020 (6.4.1)** et **ASN 2025 (Biruete / Kovesdy)** déconseillent la restriction universelle lorsque la kaliémie est normale et priorisent la suppression des additifs chimiques cachés et la correction des causes non alimentaires (acidose, constipation). Le consensus européen **GUARDIAN-HK 2025** (soutenu par AstraZeneca) va dans le même sens afin de maintenir les inhibiteurs du SRAA et les ARM.
- **Essais indirects rassurants chez des patients sélectionnés à kaliémie normale :** **Goraya 2013–2021** (MRC stades 3–4 hypertendus non diabétiques sous IEC : fruits et légumes alcalinisants sur 1 à 5 ans sans hyperkaliémie), **Tyson 2016** (11 MRC modérées, DFG moyen 52, DASH 4 700 mg/j sur 2 sem. sans hyperkaliémie, mais ARM exclus et 9/11 sous diurétique), **GoFreshRx 2026** (176 hypertendus, DFG moyen 82, sans jus de fruits ni diabète ni K⁺ ≥ 5,0 : variation K⁺ **0,00 mmol/L**, p = 0,94), et **Kwon 2024** (46 MRC 3–4, DFG moyen 40, amélioration du CO₂ total et maintien du DFG, mais **potassium plafonné ≤ 2 000 mg/j**).
- **Faible corrélation observationnelle et risque de sur-restriction :** dans **Ramos 2021** (95 MRC non dialysés, DFG médian 23), aucune corrélation n'existait entre le K⁺ du journal alimentaire et la kaliémie (**r = 0,01**, p = 0,98), l'hyperkaliémie étant portée par le **diabète (OR 3,55)** et l'**acidose métabolique (OR 4,35)** ; même absence de lien dans **DIET-HD** (8 043 dialysés) et la méta-analyse corrigée **Morris 2022**. De plus, des régimes excessivement restrictifs privent de la protection coronaire (CORDIOPREV : -25 % d'événements CV majeurs), favorisent la constipation (qui réduit l'excrétion colique du K⁺) et exposent à l'hypokaliémie sous diurétiques (20,3 % à 1 an dans SwedeHF).`,
    },
    {
      headingFr: 'Arguments en défaveur : pourquoi « sûr sans restriction jusqu’à DFG 30 » va trop loin',
      bodyMarkdownFr: `- **Zéro essai randomisé d'un régime méditerranéen riche en potassium dans l'ICFER sous quadrithérapie :**
  - **CORDIOPREV** a exclu l'insuffisance cardiaque NYHA III–IV et toute **FEVG ≤ 35 %**.
  - **Kwon 2024** (seul essai méditerranéen dans la MRC 3–4) **plafonnait les repas livrés à ≤ 2 000 mg/j de potassium** (hausse réelle de +94 mg/j seulement à partir de 1 670 mg/j) sans renseigner l'IC ni les ARM : il teste un régime méditerranéen *pauvre en potassium*, pas un régime libre riche en potassium.
  - Une recherche en direct sur **ClinicalTrials.gov (25 novembre 2026)** confirme l'absence totale d'essai randomisé achevé ou en cours évaluant un régime méditerranéen riche en potassium dans l'ICFER sous quadrithérapie.
- **Contre-preuve expérimentale directe dans la MRC stade 3 — Turban 2021 (CKD-K, essai croisé en double aveugle, texte intégral, n = 29, DFG moyen 54,5) :** un régime de type DASH composé d'aliments entiers apportant **3 900 mg/j (100 mmol/j)** contre 1 600 mg/j a relevé la kaliémie moyenne de **+0,21 mmol/L** (4,4 contre 4,2, p = 0,003) et augmenté le risque d'un dosage **> 5,5 mmol/L (OR 2,50**, IC 95 % **1,04–6,00**, p = 0,04). **Deux participants sur 29 (6,9 %)** ont dû être retirés pour **hyperkaliémie confirmée (> 5,5 mmol/L)** : un patient **diabétique sous double blocage du SRAA (IEC + ARA2)** à **5,7 mmol/L** et un patient sous tacrolimus avec poussée de créatinine à **7,1 mmol/L**. Dans **GOURMET-HF** (66 patients post-hospitalisation IC), les investigateurs avaient abaissé le potassium des repas de **4 500 à 3 000 mg/j** en cas de MRC ou d'ARM, et le **seul patient ayant reçu par erreur les repas standard à 4 500 mg/j a développé une hyperkaliémie**.
- **Risque résiduel substantiel malgré les traitements modernes :** même sous **empagliflozine** dans EMPEROR-Pooled, **8,6 %** des patients ont dépassé **5,5 mmol/L** et **1,9 %** ont dépassé 6,0 mmol/L (un K⁺ initial > 5,0 étant plus fréquent en cas d'IC ischémique, FEVG ≤ 40 %, DFG bas, **diabète [57,6 % contre 47,7 %]**, ARNI et ARM). Dans **PARADIGM-HF**, environ **16 %** ont dépassé 5,5 mmol/L sous sacubitril/valsartan ; dans les sous-groupes MRC de RALES/EMPHASIS-HF, **25,6 %** sous spironolactone et **16,6 %** sous éplérénone. En vie réelle (SwedeHF / SCREAM **Trevisan 2018**), 10 à 11 % dépassent 5,5 mmol/L à 1 an et **47 %** des utilisateurs d'ARM arrêtent l'ARM après un premier épisode (associé à une hausse des événements CV/décès, HR 1,10). Dans **Gritter 2022** (MRC G3b–4, DFG moyen **31**, 83 % sous inhibiteur du SRAA), 40 mmol/j de KCl ont provoqué **11 % d'hyperkaliémies en 2 semaines** (moyenne 5,9 mmol/L), montrant à quel point la marge rénale se resserre près de **DFG 30**.
- **Réfutation de l'idée reçue d'une « biodisponibilité végétale limitée à 50–60 % » :** une revue de 26 études (**Picard 2026**) montre que la récupération urinaire sur 24 heures sous-estime l'absorption intestinale réelle et que les **études de bilan potassique mesurent une absorption de 88 à 94 % quelle que soit l'origine alimentaire**. De même, les pommes de terre dépassent **94 %** d'absorption (**Macdonald-Clarke 2016**), et **St-Jules (2022)** rappelle que l'absorption a lieu surtout dans l'**intestin grêle**, exposant à des **pics postprandiaux** non détectés par une prise de sang à jeun et que les chélateurs coliques ne bloquent pas complètement.
- **Notices réglementaires et crises aiguës par « second facteur déclenchant » :** la notice américaine actualisée de la **spironolactone (fév. 2026)** propose d'envisager **25 mg un jour sur deux entre DFG 30 et 50** et demande d'éviter les substituts de sel et aliments très riches en potassium ; **Entresto** et **Inspra** imposent des contrôles biologiques réguliers et bannissent les substituts au KCl. Les hyperkaliémies menaçantes surviennent typiquement lors d'un « second coup » : **déshydratation, gastro-entérite, poussée d'IC, AINS, dose de spironolactone à 50 mg/j ou sel de régime au KCl**.`,
    },
    {
      headingFr: 'Synthèse mécanistique, comparaison des recommandations et profils à haut risque',
      bodyMarkdownFr: `Trois mécanismes expliquent pourquoi les aliments méditerranéens entiers sont souvent bien tolérés à DFG ≥ 45–60 mais deviennent délicats à DFG 30–44 ou en cas de diabète :

1. **Vitesse d'absorption et densité plutôt que pourcentage total :** bien que 88 à 94 % du potassium soit finalement absorbé, les légumes et légumineuses entiers évitent les bolus rapides et massifs des sels au KCl, des jus concentrés et des additifs industriels (**+1 874 mg/j** sur un menu transformé type selon **Picard 2024** ; **23,3 %** des produits industriels américains « réduits en sel » et **63 %** des viandes réduites en sel au Canada contiennent des additifs au potassium).
2. **Co-facteurs alcalins, fibres et insuline — point de rupture dans le diabète :** le KCl inorganique acidifie le sang (chute de bicarbonates -0,8 mmol/L dans Gritter 2022), poussant le potassium hors des cellules, alors que les végétaux apportent des anions alcalinisants et des fibres. Mais en cas de **diabète** (déficit/résistance à l'insuline et hypoaldostéronisme hyporéninémique) ou d'**acidose métabolique**, cette mise en réserve cellulaire s'affaiblit fortement.
3. **Réserve rénale et diurétique de l'anse :** entre **DFG 30 et 44 mL/min/1,73 m²** — surtout en l'absence de furosémide (*Lasilix*) ou de bumétanide (*Burinex*) qui favorisent la fuite urinaire de potassium — la marge d'élimination se réduit nettement.

| Référentiel | Position sur le potassium alimentaire et les végétaux |
|---|---|
| **ESC 2026 (IC)** | Conseils d'alimentation équilibrée riche en végétaux, noix, poissons (Classe I C) ; **aucune restriction potassique systématique** mentionnée dans le texte principal |
| **HFA-ESC 2024 / AHA 2022** | Aucun plafond systématique sur le potassium des aliments entiers |
| **NICE NG106 (2025)** | **Éviter les substituts de sel au potassium** (1.9.11) ; surveillance biologique K⁺/créatinine (1.7.3–1.7.5) ; silencieux sur la restriction des végétaux entiers |
| **KDIGO 2024 / KDOQI 2020 / ASN 2025 (MRC)** | Encouragent l'alimentation végétale diversifiée ; **pas de restriction préventive** si kaliémie normale ; couper d'abord les **additifs potassiques cachés** des aliments transformés |
| **Notices FDA Entresto / Inspra / Spironolactone** | Interdisent les sels au KCl et compléments de K⁺ ; spironolactone met encore en garde de façon large contre les aliments très riches en K⁺ et signale la zone **DFG 30–50** |`,
    },
    {
      headingFr: 'Verdict, interactions globales et conduite pratique pour votre suivi',
      bodyMarkdownFr: `- **Verdict :** **Partiellement étayée** (confiance : **moyenne**), en deux volets distincts :
  1. *Étayé par les recommandations et la pharmacologie moderne :* chez un patient ICFER stable ayant une **kaliémie normale** et un **DFG ≥ 45–60 mL/min/1,73 m²** sous ARNI/IEC + ARM + iSGLT2, une interdiction préventive systématique des **aliments méditerranéens entiers ordinaires** n'est pas justifiée, à condition d'éviter les sels au KCl, les compléments de potassium et les additifs cachés des produits « réduits en sel », avec contrôles biologiques réguliers.
  2. *Non étayé — et partiellement réfuté — comme garantie générale jusqu'à DFG 30 :* en cas de **DFG 30–44**, de **diabète**, de **kaliémie habituelle ≥ 4,8–5,0 mmol/L**, d'**antécédent d'hyperkaliémie**, d'**absence de diurétique de l'anse** ou lors d'un **épisode de déshydratation, diarrhée ou vomissements**, un suivi biologique rapproché et un ajustement personnalisé avec votre cardiologue ou un(e) diététicien(ne) restent indispensables.
- **Autres points d'attention du régime méditerranéen avec votre ordonnance :**
  - **AVK (warfarine, fluindione, acénocoumarol) :** gardez des apports **réguliers** (non nuls) en légumes verts riches en vitamine K ; aucune contrainte sur la vitamine K avec les AOD (apixaban, rivaroxaban, édoxaban, dabigatran).
  - **Pamplemousse :** à éviter avec la simvastatine, l'atorvastatine à forte consommation et l'ivabradine (pas d'avertissement sur la rosuvastatine).
  - **Digoxine :** éviter les variations brusques de kaliémie dans un sens comme dans l'autre (surtout l'hypokaliémie).
- **Ce qui ferait évoluer ce verdict :** un essai randomisé dans l'ICFER sous quadrithérapie (stratifié sur DFG 30–44 contre ≥ 45 et diabète) testant un régime méditerranéen non plafonné (≥ 3,5–4,0 g/j de K⁺) sur les hyperkaliémies confirmées, les pics postprandiaux et le maintien de l'ARM.
- **Règle essentielle :** ne levez jamais de votre propre initiative une restriction potassique déjà fixée par votre cardiologue ou votre néphrologue ; discutez de votre projet alimentaire avec votre équipe sur la base de votre dernière kaliémie et de votre DFG.`,
    },
  ],
  relatedArticleSlugs: [
    'alimentation-cardioprotectrice',
    'maladie-renale-insuffisance-cardiaque',
    'interactions-complements-aliments-medicaments',
    'tableau-preuves-nutrition-complements',
    'nutrition-et-complements-insuffisance-cardiaque',
    'sel-et-liquides-insuffisance-cardiaque',
    'diabete-insuffisance-cardiaque',
    'questions-equipe-cardiologie',
  ],
  sources: [
    {
      label: 'EMPEROR-Pooled (Ferreira 2022, texte intégral), Neuen et al. (2022) et PARADIGM-HF ARM (Desai 2017)',
      detail: 'Réduction des hyperkaliémies sévères (> 6,0 mmol/L) et des arrêts d’ARM par les iSGLT2 et le sacubitril/valsartan, avec charge résiduelle de 8,6 % à 16 % > 5,5 mmol/L.',
    },
    {
      label: 'Turban et al. (CKD-K, 2021, texte intégral), Kwon et al. (MEDi-POB, 2024, texte intégral), Tyson (2016), GoFreshRx (2026), Goraya (2013–2021) et GOURMET-HF (2018)',
      detail: 'Essais contrôlés d’alimentation végétale riche en potassium dans la MRC/HTA (+0,21 mmol/L et OR 2,50 dans Turban 2021 ; plafond ≤ 2 000 mg/j dans Kwon 2024).',
    },
    {
      label: 'Picard et al. (2019–2026), Macdonald-Clarke (2016), Naismith & Braschi (2008), Parpia (2018), St-Jules (2022) et Gritter (2022)',
      detail: 'Absorption en bilan de 88–94 %, additifs potassiques dans les produits « réduits en sel » (+44 %, jusqu’à 1 500 mg/100 g), pics postprandiaux et 11 % d’HK sous KCl à DFG 31.',
    },
    {
      label: 'Cohortes et registres : Ramos (2021), Bernier-Jean (DIET-HD 2021), Morris (2022 corrigé), Trevisan (SCREAM 2018/2021) et Savarese (SwedeHF 2019)',
      detail: 'Absence de corrélation alimentaire simple, rôle du diabète et de l’acidose, et fréquence d’arrêt des ARM après hyperkaliémie.',
    },
    {
      label: 'Recommandations KDIGO 2024, KDOQI 2020, ASN 2025, GUARDIAN-HK 2025, ESC 2026, NICE NG106 (2025) et notices FDA Entresto/Inspra/Spironolactone',
      detail: 'Rejet des restrictions préventives de végétaux entiers si kaliémie normale, cible prioritaire sur les sels au KCl et additifs, et vigilance DFG 30–50 sous spironolactone.',
    },
  ],
  disclaimerType: 'medical',
};
