import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'alimentation-cardioprotectrice',
  sourceWikiPath: 'wiki/concepts/heart-healthy-eating-patterns.md',
  titleFr: 'Alimentation cardioprotectrice (modèle méditerranéen)',
  category: 'nutrition',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'alimentation-méditerranéenne',
    'régime-dash',
    'alimentation',
    'potassium',
    'hyperkaliémie',
    'prévention-secondaire',
    'maladie-coronaire',
    'cordioprev',
    'aliments-ultra-transformés',
    'gourmet-hf',
    'food-hf',
    'café',
    'noix',
    'stérols-végétaux',
  ],
  aliases: [
    'Régime méditerranéen',
    'Régime DASH',
    'Alimentation pour le cœur',
    'Alimentation maladie coronaire',
    'Potassium régime méditerranéen',
    'Café et caféine',
    'Aliments ultra-transformés',
    'Fruits à coque',
    'Stérols végétaux',
    'Repas médicalisés livrés',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "La cardiomyopathie ischémique comporte deux volets : des artères coronaires rétrécies et un muscle cardiaque affaibli. Une alimentation de type méditerranéen (légumes, légumineuses, poisson, fruits à coque, huile d'olive vierge extra, peu d'aliments transformés) dispose des meilleures preuves globales pour protéger les artères coronaires : dans l'essai CORDIOPREV sur 7 ans, elle a réduit d'environ un quart les événements cardiovasculaires majeurs par rapport à un régime pauvre en graisses (87 contre 111 événements), sans effet démontré sur la mortalité. La Haute Autorité de Santé (HAS, octobre 2026) retient une recommandation faible en faveur de ce modèle dans la maladie coronaire. En revanche, aucun régime n'est prouvé pour réduire les hospitalisations ou la mortalité dans l'ICFER établie. Sur le plan du potassium sous ARNI/IEC, ARM et iSGLT2, il n'existe pas lieu d'interdire systématiquement les légumes et fruits entiers lorsque la kaliémie est normale, mais un régime libre très riche en potassium n'est pas démontré sûr jusqu'à un DFG de 30 (évitez surtout les sels au potassium et les additifs cachés des produits industriels « réduits en sel »). Le café modéré paraît neutre ou favorable (y compris dans un petit essai aigu dans l'ICFER à 500 mg de caféine sans surcroît d'extrasystoles), les noix aident le versant coronaire, les ultra-transformés sont liés à un risque cardiovasculaire plus élevé et les stérols végétaux abaissent modestement le LDL sans preuve sur les événements.",
  sections: [
    {
      headingFr: 'Le modèle méditerranéen : CORDIOPREV, HAS et méta-analyses',
      bodyMarkdownFr: `### CORDIOPREV (*The Lancet*, 2022)
- **Protocole :** 1 002 personnes atteintes de maladie coronaire avérée (âge moyen 60 ans, 82 % d'hommes), randomisées pendant 7 ans entre une alimentation méditerranéenne riche en huile d'olive vierge extra et un régime pauvre en graisses riche en glucides complexes.
- **Résultats :** les événements cardiovasculaires majeurs (infarctus, revascularisation, AVC, artériopathie périphérique, décès cardiovasculaire) sont survenus à un taux de **28,1 contre 37,7 pour 1 000 personnes-années** (HR ajusté d'environ **0,72 à 0,75**), soit **87 personnes** sous régime méditerranéen contre **111** sous régime pauvre en graisses (198 événements au total ; p log-rank = 0,039 — **Temporelli 2023**), correspondant à environ 9 à 10 événements évités pour 1 000 personnes par an.
- **Délai d'action et sous-groupes :** les courbes ne se séparent qu'après environ 3 ans, ce qui en fait une stratégie de long terme. Le bénéfice était net chez les hommes, sans différence significative chez les 175 femmes incluses.
- **Limite majeure pour l'ICFER :** l'essai a **exclu l'insuffisance cardiaque NYHA III–IV et les FEVG ≤ 35 %**, et n'a pas rapporté les événements d'insuffisance cardiaque. L'appliquer à l'ICFER repose donc sur une extrapolation à partir de la maladie coronaire.
- **Autres réserves :** essai monocentrique, sans insu des participants, avec la participation de fondations de la filière oléicole parmi les financeurs.

### Évaluation de la Haute Autorité de Santé (HAS, annexe d'octobre 2026)
L'annexe d'analyse des preuves de la HAS pour sa recommandation d'octobre 2026 sur le risque cardiovasculaire global (soins primaires) a examiné l'intérêt d'un régime méditerranéen par rapport à un régime pauvre en graisses chez les patients coronariens :
- **Un seul essai retenu :** CORDIOPREV (502 contre 500 participants), sans aucune donnée d'insuffisance cardiaque ni de FEVG.
- **Événements cardiovasculaires (définition large) :** risque relatif **0,73** (IC 95 % 0,55–0,97), soit environ **59 événements évités pour 1 000 personnes sur 7 ans** (1 événement évité pour 17 patients).
- **Mortalité :** toutes causes **0,73** (0,46–1,17) et cardiovasculaire **0,54** (0,25–1,13), toutes deux non concluantes.
- **Verdict :** la HAS juge que ces données étayent une **recommandation faible en faveur** du régime méditerranéen (la certitude a été notée élevée en ne pénalisant pas l'imprécision, ce qui reste généreux pour un seul essai monocentrique). Juste après un infarctus, aucun essai exploitable n'a été retenu (les essais THIS DIET et Singh ayant été exclus pour haut risque de biais). Ce document porte uniquement sur le versant coronaire, pas sur l'ICFER.

### Analyses groupées des programmes diététiques (sans données IC ni FEVG)
- **Méta-analyse en réseau *BMJ* 2023 (Karam) :** 40 essais, 35 548 participants (dont 31 essais chez des patients atteints de maladie cardiovasculaire, suivi médian 3 ans), comparant un *programme* structuré à une intervention minimale :
  - **Programmes méditerranéens :** moins de décès (**OR 0,72** ; IC 95 % 0,56–0,92), de décès cardiovasculaires (**0,55**), d'AVC (**0,65**) et d'infarctus non fatals (**0,48**), certitude modérée (environ 36 décès évités pour 1 000 personnes à haut risque sur 5 ans).
  - **Programmes pauvres en graisses :** moins de décès (**0,84**) et d'infarctus non fatals (**0,77**).
  - Le modèle méditerranéen n'était **pas nettement supérieur au pauvre en graisses**, sauf éventuellement pour les AVC (CORDIOPREV, publié ultérieurement, n'était pas inclus). Les régimes très pauvres en graisses, modifiés en lipides, Ornish ou Pritikin ont montré peu ou pas de bénéfice.
  - *Réserves :* ces programmes associaient souvent exercice, accompagnement comportemental, sevrage tabagique ou médicaments ; 27 essais sur 40 présentaient un haut risque de biais ; les événements d'IC étaient trop rares pour être analysés.
- **Méta-analyse en réseau Bonekamp (2024) :** 17 essais chez 6 331 patients atteints de MCV (presque tous coronariens). Aucun modèle alimentaire n'a produit de variation nette du poids, de la pression artérielle systolique ni du cholestérol LDL à 6 ou 12 mois (intervalles de confiance très larges, jusqu'à ~40 kg pour le poids). Les médicaments restent l'outil principal pour atteindre les cibles de cholestérol et de tension.
- **Revue parapluie Hareer (2024) :** 18 méta-analyses (238 essais, environ 198 000 participants, recherche jusqu'à novembre 2022), aucune revue restreinte à l'IC ni rapportant la FEVG :
  - *Patients déjà atteints de maladie cardiaque (prévention secondaire) contre soins usuels :* moins de décès (**RR 0,44** ; 0,21–0,92) et de décès cardiovasculaires (**RR 0,35** ; 0,15–0,82), mais ces chiffres reposent sur un ou deux essais anciens avec une **certitude faible** (plus basse que dans le *BMJ* 2023).
  - *Personnes sans maladie cardiaque (prévention primaire) :* mortalité inchangée (**HR 1,00** ; 0,80–1,23 ; essentiellement PREDIMED).
  - *AVC :* réduits de façon constante dans les quatre revues les rapportant (**RR 0,58 à 0,65**).
  - *Facteurs de risque :* PAS plus basse d'environ 1 à 3 mmHg, cholestérol LDL plus bas d'environ 0,03 à 0,10 g/L (0,07 à 0,25 mmol/L), poids plus bas d'environ 1,7 kg.
  - *Limites :* 15 revues sur 18 étaient de qualité faible ou critiquement faible, 44 % des critères n'avaient pas de cotation de certitude, plusieurs grands chiffres de prévention secondaire incluent un essai faisant l'objet d'une note de réserve éditoriale (*expression of concern*), et les résultats complets de CORDIOPREV sont parus trop tard pour y figurer.
- **Revue narrative Temporelli (2023) :** présente CORDIOPREV comme l'argument principal en prévention secondaire tout en rappelant la fragilité des essais antérieurs (essai indo-méditerranéen largement discrédité ; PREDIMED rétracté puis republié en 2018) ; ne traite pas de l'insuffisance cardiaque.

### Données spécifiques dans l'insuffisance cardiaque et mécanismes proposés
- **Prévention d'une nouvelle IC :** dans les essais regroupés (**Khan 2021**, texte intégral), le régime méditerranéen était lié à moins de nouveaux cas d'IC (**RR 0,45** ; IC 95 % 0,26–0,79, certitude faible), mais ce résultat dépend de l'essai de Singh à l'intégrité contestée : sans cet essai, il n'y a plus de bénéfice significatif (117 événements d'IC au total). Dans **Hareer 2024**, une méta-analyse de 2016 rapporte une baisse de 70 % des événements d'IC (**RR 0,30** ; 0,17–0,56), mais à partir de seulement deux essais anciens (~1 600 personnes majoritairement sans IC au départ) et sans cotation de certitude. La revue narrative **Schwingshackl 2026** reprend ce RR de 0,45 ainsi qu'un résultat observationnel (OR 0,77 ; 0,63–0,93) sans préciser qu'ils concernent l'apparition d'une nouvelle IC. Une analyse secondaire de PREDIMED (citée par l'ESC 2026) n'a trouvé aucune différence d'incidence de l'IC entre régime méditerranéen et régime pauvre en graisses.
- **Traitement d'une ICFER établie :** aucun essai randomisé de régime méditerranéen n'a été conduit chez des patients déjà atteints d'ICFER.
- **Données observationnelles :** dans la cohorte Women's Health Initiative (3 215 femmes avec IC, FEVG inconnue), les scores méditerranéens les plus élevés étaient liés à une baisse de 15 % de la mortalité, à la limite de la significativité. Une méta-analyse de 2025 (3 études) retrouve une mortalité réduite de 12 % (**OR 0,88** ; IC 95 % 0,78–0,99).
- **Mécanismes (Schwingshackl 2026 ; Lai 2025 ; Lopez de Coca 2025) :** effets proposés via les graisses insaturées, fibres et polyphénols (principalement cellulaires/animaux ; sous-étude CORDIOPREV sur marqueurs endothéliaux). Les données sur le TMAO issu du microbiote (Lai 2025) sont essentiellement animales et ne justifient pas de règle diététique supplémentaire. De même, l'enquête espagnole sur l'indice inflammatoire alimentaire (Lopez de Coca 2025, 304 adultes sans données IC) n'indique nullement qu'un régime permettrait de diminuer les traitements de fond de l'ICFER.`,
    },
    {
      headingFr: 'Potassium alimentaire sous traitements modernes de l’ICFER (ARNI, ARM et iSGLT2)',
      bodyMarkdownFr: `Parce qu'une alimentation méditerranéenne privilégie légumes, légumineuses, fruits et noix, les patients traités par sacubitril/valsartan (*Entresto*) ou IEC associés à un ARM (spironolactone — *Aldactone*, éplérénone — *Inspra*) se demandent souvent s'ils doivent restreindre systématiquement les végétaux. Cette question fait l'objet d'une enquête dédiée : *Thèse : régime méditerranéen et sécurité du potassium dans l'ICFER (DFG ≥ 30)* (**verdict : partiellement étayée, confiance moyenne**).

- **Pas d'interdiction préventive systématique des végétaux entiers ordinaires lorsque la kaliémie est normale :** les recommandations néphrologiques internationales (**KDIGO 2024**, **KDOQI 2020**, **ASN 2025**) déconseillent de bannir systématiquement fruits et légumes entiers quand le potassium sanguin est dans la norme, et ciblent d'abord les additifs potassiques des produits transformés. De plus, les traitements modernes de l'ICFER réduisent l'hyperkaliémie sévère (> 6,0 mmol/L) par rapport aux anciens schémas IEC + ARM : l'empagliflozine (*Jardiance*) a abaissé les K⁺ > 6,0 mmol/L dans **EMPEROR-Pooled** (1,9 % contre 2,9 %, **HR 0,62**), les iSGLT2 réduisent l'hyperkaliémie grave sur 6 essais (**HR 0,84**, **Neuen 2022**), et le sacubitril/valsartan provoque moins d'hyperkaliémies sévères que l'énalapril sous ARM dans **PARADIGM-HF** (**2,2 contre 3,1 pour 100 patients-années**, **Desai 2017**).
- **Pourquoi affirmer qu'un régime riche en potassium est toujours sûr jusqu'à DFG 30 n'est PAS démontré :**
  - **Zéro essai randomisé** n'a testé un régime méditerranéen libre riche en potassium dans l'ICFER sous ARNI/IEC + ARM + iSGLT2 (**Kwon 2024** dans la MRC 3–4 plafonnait le potassium des repas livrés à **≤ 2 000 mg/j**).
  - Un risque résiduel réel d'hyperkaliémie > 5,5 mmol/L persiste malgré les traitements modernes (**8,6 %** sous empagliflozine, environ **16 %** dans PARADIGM-HF).
  - Un essai contrôlé d'alimentation végétale riche en potassium (**3,9 g/j** contre 1,6 g/j) dans la MRC de stade 3 (**Turban 2021**, texte intégral) a relevé la kaliémie moyenne de **+0,21 mmol/L** et plus que doublé les odds d'un dépassement de 5,5 mmol/L (**OR 2,50**, p = 0,04), avec hyperkaliémie confirmée chez un patient diabétique sous double blocage du SRAA.
  - Une revue de 2026 des études de bilan potassique (**Picard 2026**) contredit la règle souvent répétée d'une « biodisponibilité végétale de 50 à 60 % » : l'absorption réelle mesurée en bilan atteint **88 à 94 %** toutes sources confondues.
- **Distinguer la source du potassium et votre profil de risque :**
  - **À éviter :** les **substituts de sel au chlorure de potassium (KCl)**, les comprimés de potassium et les **additifs potassiques cachés** dans les viandes, sauces et plats préparés « à teneur réduite en sel » (**Parpia 2018** a mesuré en moyenne **+44 % de potassium** dans les viandes réduites en sel, jusqu'à **1 500 mg/100 g**).
  - **Prudence sur les portions :** les formes végétales concentrées (jus de fruits ou légumes, smoothies denses, fruits secs, concentré de tomate) qui délivrent un bolus rapide.
  - **À individualiser avec votre cardiologue ou un(e) diététicien(ne)** — sans jamais lever seul une restriction déjà prescrite — en cas de **DFG entre 30 et 44 mL/min/1,73 m²**, de **diabète**, de **kaliémie de base > 4,8–5,0 mmol/L**, d'**absence de diurétique de l'anse ou thiazidique**, ou en cas de déshydratation, vomissements ou diarrhée.`,
    },
    {
      headingFr: 'Régime DASH et essais de repas livrés après hospitalisation',
      bodyMarkdownFr: `Le modèle **DASH** (*Dietary Approaches to Stop Hypertension*) privilégie légumes, fruits, produits laitiers allégés, céréales complètes, fruits à coque et légumineuses, tout en limitant le sel, la viande rouge et les sucres ajoutés.

Les essais menés jusqu'ici dans l'insuffisance cardiaque restent petits, portent sur des FEVG mixtes et ne fournissent pas de résultat séparé pour l'ICFER :

| Essai | Population | Intervention | Résultats |
|---|---|---|---|
| **GOURMET-HF (2018)** | 66 patients après hospitalisation pour IC ; FEVG moyenne 39 % ; tous hypertendus | 4 semaines de repas DASH livrés à domicile (1 500 mg sodium/j) contre brochure | Pas de gain significatif sur le score principal de qualité de vie ; réhospitalisations IC à 30 jours : 3 contre 11 événements (p = 0,055, essai pilote) |
| **FOOD-HF (2026)** | 150 patients après hospitalisation pour IC ; FEVG médiane 35 % ; moitié en insécurité alimentaire | 90 jours de repas médicalisés pauvres en sodium ou produits frais contre conseils | Réhospitalisations IC ou urgences non réduites (23 % contre 18 %) ; qualité de vie améliorée |

- **Vivre avec des repas médicalisés livrés (Folta 2026) :** une étude qualitative américaine auprès de 28 adultes à faibles revenus (programme de 6 mois à ~1 340 kcal/j, plats principaux plafonnés à 500 mg de sodium ; sans mesure de critères cliniques ni mention du nombre de patients IC) a montré que presque tous ont jugé les plats **fades et les portions petites au début**. Ceux qui ont poursuivi s'y sont adaptés (notamment grâce aux herbes et épices sans sel) ; plusieurs départs précoces étaient liés à l'espoir de perdre du poids, ce pour quoi ces repas ne sont pas conçus. Les participants ont acquis des repères durables (portions, lecture du sel), mais le coût des aliments sains est resté le principal obstacle ensuite.
- **Données observationnelles :** dans la cohorte Women's Health Initiative, les scores DASH les plus élevés étaient associés à 16 % de mortalité en moins après une hospitalisation pour IC (HR 0,84). Une méta-analyse de 2025 associe le régime DASH à moins d'insuffisance cardiaque incidente (OR 0,83), mais sans diminution significative de la mortalité une fois l'IC installée (2 études).
- **Point de vigilance sur le potassium dans DASH :** dans GOURMET-HF, la teneur en potassium des repas avait été abaissée de 4 500 à 3 000 mg/j chez les patients ayant une fonction rénale diminuée, une kaliémie haute ou un diurétique épargneur de potassium ; le seul participant ayant reçu par erreur les repas standard a développé une hyperkaliémie.
- **Autres régimes :** la cartographie de Khan (2021) n'a identifié aucun essai randomisé dans l'insuffisance cardiaque pour le régime cétogène ou le jeûne intermittent. Les régimes cétogènes exposent par ailleurs à un risque d'acidocétose sous iSGLT2.`,
    },
    {
      headingFr: 'Aliments du quotidien : café, ultra-transformés, noix et stérols végétaux',
      bodyMarkdownFr: `Hormis un petit essai aigu sur la caféine dans l'ICFER, ces sujets proviennent majoritairement de populations hors insuffisance cardiaque établie.

### Café
- **Rythme chez des adultes sains (essai CRAVE) :** chez 100 adultes sans cardiopathie, les jours avec café ont entraîné davantage d'extrasystoles ventriculaires (154 contre 102 par jour), sans modification des extrasystoles atriales, et 36 minutes de sommeil en moins. Les personnes atteintes d'IC ou de FA étaient exclues.
- **Après cardioversion pour FA (essai DECAF) :** chez 200 consommateurs de café atteints de FA persistante (FEVG moyenne 54 %), ceux qui ont maintenu environ **1 tasse par jour** ont eu **moins** de récidives de FA que ceux qui ont arrêté le café (**47 % contre 64 %** sur 6 mois ; essai en ouvert).
- **Nouvelle insuffisance cardiaque :** dans trois cohortes américaines sans cardiopathie initiale, chaque tasse quotidienne de café caféiné était associée à un risque légèrement moindre de développer une IC (association, non preuve causale).
- **Dans l'ICFER établie (essai Zuchinali 2016) :** un petit essai croisé randomisé chez **51 patients ICFER** (FEVG moyenne **29 %**, **61 % porteurs d'un DAI**) a montré qu'une dose de **500 mg de caféine sur 5 heures** n'a pas augmenté les extrasystoles ventriculaires (**185 contre 239** sous placebo, non significatif) ni les arythmies à l'effort. La consommation à long terme dans l'ICFER n'a pas été étudiée. Les **boissons énergisantes** et stimulants concentrés relèvent d'un risque tout autre (voir la fiche consacrée à la caféine et aux stimulants).

### Aliments ultra-transformés
- Une revue parapluie publiée dans le *BMJ* en 2024 (environ 10 millions de participants, études observationnelles) associe une forte consommation à une hausse de **50 % de la mortalité cardiovasculaire**, avec une tendance constante mais une certitude GRADE très faible.
- **Étude MESA (*JACC: Advances*, 2026, texte intégral) :** chez 6 531 adultes américains de 45 à 84 ans sans maladie cardiaque suivis jusqu'à environ 20 ans, chaque portion quotidienne supplémentaire était liée à environ **5 % d'infarctus, d'AVC et de décès associés en plus (HR 1,05)**. Le cinquième le plus consommateur (environ 9 portions/j) avait un risque multiplié par **1,46** par rapport au cinquième le plus bas (environ 1 portion/j) ; les produits sucrés montraient le lien le plus net (aucun critère d'IC dans l'article complet).
- **Analyse divergente (prépublication Lasker 2026, non évaluée par les pairs) :** sur NHANES, la plupart des liens s'affaiblissent sous méthodes plus strictes (seuls boissons sucrées et viandes transformées conservent un lien ; mortalité CV HR 1,01 ns), avec limites méthodologiques (rappels de 1–2 jours).
- Les recommandations ESC 2026 associent également aliments transformés, sucres et graisses saturées à un risque accru d'insuffisance cardiaque — et ces produits concentrent aussi sel et additifs potassiques cachés.

### Fruits à coque (noix, amandes, noisettes)
- Dans **PREDIMED** (7 447 adultes à haut risque sans maladie cardiovasculaire), un régime méditerranéen enrichi en fruits à coque a réduit les événements cardiovasculaires majeurs de **28 %** par rapport à un régime pauvre en graisses (**3,4 % contre 4,4 %**).
- Dans une méta-analyse de 20 cohortes, environ **28 g par jour** étaient associés à **29 %** de maladie coronaire en moins. Préférez les versions **nature, non salées**, en portion adaptée aux objectifs de poids.

### Stérols et stanols végétaux (margarines et yaourts enrichis)
- Environ **2 g par jour** abaissent le cholestérol LDL de **7 à 10 %** en complément d'une statine, mais **aucun essai clinique** n'a démontré de baisse des infarctus ou des décès.
- L'European Atherosclerosis Society indique qu'ils peuvent être envisagés en complément chez les patients à haut risque qui n'atteignent pas leur cible de LDL ; la mise à jour européenne 2025 sur les lipides ne retient aucune indication pour les *compléments alimentaires* pour baisser le LDL (Classe III).`,
    },
    {
      headingFr: 'Tenir dans la durée, recommandations générales et place de l’alcool',
      bodyMarkdownFr: `**Maintenir les changements (Rutters 2024, *Nature Medicine*, hors IC) :** fixer des objectifs concrets, anticiper les obstacles, pratiquer l'autosuivi, s'appuyer sur le soutien familial ou des pairs et maintenir des contacts réguliers avec un professionnel aident à pérenniser les habitudes ; associer alimentation et activité physique agit davantage que chaque levier isolé. Les fluctuations pondérales sont fréquentes et en partie biologiques ; dans l'ICFER, où la perte involontaire de poids et de muscle constitue un signal d'alerte, tout projet pondéral doit être convenu avec votre équipe.

**Recommandations générales :**
- **ESC 2026 — conseils d'hygiène de vie :** **Classe I, niveau C**, incluant poids de santé, alimentation équilibrée riche en légumes, noix, céréales complètes, poissons et acides gras insaturés, lutte contre la sédentarité, arrêt du tabac et éviction de l'alcool excessif.
- **HAS (France, annexe octobre 2026) :** recommandation faible en faveur du régime méditerranéen dans la maladie coronaire (fondée sur CORDIOPREV seul, sans traiter l'IC).
- **Les compléments ne remplacent pas l'alimentation :** multivitamines et pilules antioxydantes n'ont montré aucun bénéfice cardiovasculaire (**An 2022**).

**Alcool :**
- **ESC 2026** déconseille formellement les consommations excessives (toxiques pour le myocarde) et juge mitigées les données sur les consommations faibles à modérées ;
- **Vin et modèle méditerranéen (Schwingshackl 2026) :** les bénéfices prêtés au vin sont purement observationnels, l'OMS rappelle que la quantité d'alcool la plus favorable pour la santé est zéro, et les teneurs en resvératrol du vin sont très inférieures aux doses pharmacologiques ;
- **Enquête NHANES (Qiu 2025, 7 022 adultes hypertendus) :** un score de balance oxydative plus élevé — tiré en premier lieu par une moindre consommation d'alcool — allait de pair avec moins d'IC autodéclarée (OR 0,56), confortant la limitation de l'alcool sans appuyer les compléments antioxydants.`,
    },
  ],
  relatedArticleSlugs: [
    'these-regime-mediterraneen-potassium-icfer',
    'cafeine-boissons-energisantes-et-stimulants',
    'fibres-alimentaires-et-axe-intestin-coeur',
    'these-omega3-faible-dose-risque-fa',
    'nutrition-et-complements-insuffisance-cardiaque',
    'sel-et-liquides-insuffisance-cardiaque',
    'poids-obesite-et-denutrition',
    'cardiomyopathie-ischemique',
    'omega-3-huile-de-poisson',
    'cholesterol-et-prevention-secondaire',
    'interactions-complements-aliments-medicaments',
    'vivre-avec-insuffisance-cardiaque',
  ],
  sources: [
    {
      label: 'CORDIOPREV (The Lancet, 2022), annexe HAS (octobre 2026) et Temporelli (2023)',
      detail: '1 002 patients coronariens suivis 7 ans (87 vs 111 événements, exclusion FEVG ≤ 35 %), évaluation GRADE française (recommandation faible en faveur) et mise en perspective.',
    },
    {
      label: 'Sécurité du potassium : EMPEROR-Pooled (Ferreira 2022), Neuen (2022), PARADIGM-HF (Desai 2017), Turban (2021), Kwon (2024), Picard (2026), Parpia (2018), KDIGO 2024, KDOQI 2020 et ASN 2025',
      detail: 'Effet tampon des iSGLT2 et de l’ARNI, essai contrôlé CKD-K (OR 2,50), absorption en bilan 88–94 %, additifs potassiques cachés (+44 %) et notices MRA.',
    },
    {
      label: 'Méta-analyses et revues 2023–2026 sur le régime méditerranéen',
      detail: 'Karam et al. (BMJ 2023 NMA, 40 essais), Bonekamp et al. (2024, 17 essais), Hareer et al. (2024, 18 méta-analyses), Schwingshackl et al. (2026), Lai et al. (2025).',
    },
    {
      label: 'Essais DASH/repas livrés, café dans l’ICFER et aliments du quotidien',
      detail: 'GOURMET-HF (2018), FOOD-HF (2026), Folta (2026), Rutters (2024), Qiu (2025), Lopez de Coca (2025), Zuchinali (2016, 51 patients ICFER), CRAVE, DECAF, Lane (2024), MESA (2026), Lasker (2026), PREDIMED et ESC 2026.',
    },
  ],
  disclaimerType: 'medical',
};
