import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'maladie-renale-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/concepts/kidney-disease-in-heart-failure.md',
  titleFr: 'Maladie rénale chronique et insuffisance cardiaque',
  category: 'comorbidites',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'maladie-rénale-chronique',
    'mrc',
    'dfge',
    'syndrome-cardio-rénal',
    'hyperkaliémie',
    'isglt2',
    'aggravation-fonction-rénale',
    'comorbidités',
    'kdigo',
  ],
  aliases: [
    'Maladie rénale et insuffisance cardiaque',
    'Insuffisance rénale',
    'MRC',
    'CKD',
    'Syndrome cardio-rénal',
    'DFGe',
    'eGFR',
    'Créatinine',
    'Hyperkaliémie',
    'Potassium élevé',
  ],
  linkedModules: ['ckd'],
  plainSummaryFr:
    "Le cœur et les reins dépendent étroitement l'un de l'autre : un cœur affaibli perfuse moins bien les reins, et des reins qui filtrent moins bien retiennent sel et eau, ce qui surcharge le cœur. La fonction rénale est estimée par la créatinine sanguine convertie en DFGe (en mL/min/1,73 m² : 60 ou plus est proche de la normale pour l'âge, en dessous de 30 correspond à une atteinte sévère). Environ un tiers des personnes atteintes d'ICFER ont un DFGe inférieur à 60, ce qui pèse le plus sur la mortalité parmi les maladies associées. Pourtant, les médicaments de l'insuffisance cardiaque restent efficaces jusqu'en maladie rénale modérée, et les iSGLT2 protègent aussi les reins (EMPA-KIDNEY HR 0,72 jusqu'à DFGe 20). Une légère baisse précoce du DFGe après l'instauration d'un traitement est souvent attendue et ne justifie pas à elle seule son arrêt ; KDIGO 2024 recommande d'évaluer plutôt que d'interrompre tant que la créatinine ne dépasse pas +30 %. L'objectif face à un potassium élevé est habituellement de le maîtriser (y compris par un chélateur si nécessaire) afin de conserver vos traitements cardiaques. À l'inverse, un déclin régulier du DFGe sur plusieurs mois peut annoncer une aggravation de l'insuffisance cardiaque.",
  sections: [
    {
      headingFr: 'Fréquence, impact et « double peine » thérapeutique',
      bodyMarkdownFr: `### Une maladie associée fréquente et déterminante

- Dans une analyse regroupant **15 066 patients** atteints d'ICFER issus d'essais cliniques, **31,8 %** présentaient une maladie rénale chronique (DFGe < 60 mL/min/1,73 m²). Elle était associée à une hausse du risque de décès (HR ajusté **1,31**) et, parce qu'elle cumule fréquence élevée et surrisque, expliquait la plus grande part des décès attribuables à une comorbidité à l'échelle de la population (environ **9 %**) (Dewan 2023).
- Parmi l'ensemble des maladies associées, la maladie rénale chronique porte le risque attribuable en population le plus élevé à la fois pour la mortalité et pour les hospitalisations pour insuffisance cardiaque (Beldhuis 2022).
- **Limite des essais :** la plupart des essais cliniques excluaient les atteintes rénales les plus sévères (généralement DFGe < 30 mL/min/1,73 m²). En pratique quotidienne, la fréquence et le poids de l'atteinte rénale sont donc probablement encore plus élevés (Dewan 2023 ; Beldhuis 2022).

### La « double peine » : plus de risque, moins de traitements

- Dans un registre cité par Beldhuis (2022), seuls environ **15 %** des patients ayant un DFGe entre 30 et 44 mL/min/1,73 m² et **5 %** de ceux sous 30 recevaient trois classes thérapeutiques validées.
- Une cohorte monocentrique hongroise (247 patients, FEVG médiane 25 %, 46 % d'origine ischémique) illustre le même gradient : la prescription d'une trithérapie à la sortie d'hôpital passait de **92 %** pour un DFGe ≥ 90 à **31 %** sous 30, tandis que la mortalité à 1 an grimpait de **14 % à 48 %**. Dans cette cohorte, le DFGe n'expliquait pas à lui seul l'absence de traitement, et la trithérapie à la sortie était associée à une mortalité plus faible. L'étude reste toutefois de petite taille (environ 30 patients sous DFGe 30) et observationnelle (Bánfi-Bacsárdi 2024).`,
    },
    {
      headingFr: 'Les médicaments restent-ils efficaces quand la fonction rénale baisse ?',
      bodyMarkdownFr: `Les données d'efficacité par stade de maladie rénale chronique montrent que le bénéfice cardiaque persiste largement dans l'insuffisance rénale modérée (stade 3B : DFGe **30–44 mL/min/1,73 m²** ; stade 4 : **15–29 mL/min/1,73 m²**) :

| Classe thérapeutique | Bénéfice selon le stade rénal | Source |
|---|---|---|
| **ARM** (spironolactone — *Aldactone*, éplérénone — *Inspra*) | Aucune perte de bénéfice lorsque le DFGe diminue ; très peu de données au stade 4 | Beldhuis 2022 |
| **iSGLT2** (dapagliflozine — *Forxiga*, empagliflozine — *Jardiance*) | Bénéfice démontré jusqu'au stade 3B ; EMPEROR-Reduced a également montré un bénéfice au stade 4 | Beldhuis 2022 |
| **ARNI** (sacubitril/valsartan — *Entresto*) | Bénéfice jusqu'au stade 3B | Beldhuis 2022 |
| **Bêtabloquants** | Bénéfice sur la mortalité jusqu'au stade 3B ; pas de bénéfice clairement établi au stade 4 | Beldhuis 2022 |
| **IEC** | Bénéfice net aux stades 1–2 ; au stade 4, pas de bénéfice clairement établi mais pas de danger identifié | Beldhuis 2022 |

Aucun médicament de l'insuffisance cardiaque ne dispose à ce jour de données d'essais cliniques d'événements chez les personnes sous dialyse (Beldhuis 2022).

### Les iSGLT2 protègent aussi les reins

- **EMPA-KIDNEY** (6 609 patients atteints de maladie rénale chronique, DFGe de 20 à 90 mL/min/1,73 m², moyenne 37 ; 35 % sous 30 ; 54 % sans diabète) : l'empagliflozine (*Jardiance*) a réduit la progression rénale ou les décès cardiovasculaires de **16,9 % à 13,1 %** (**HR 0,72**, IC 95 % 0,64–0,82), de manière cohérente quel que soit le niveau de DFGe et avec ou sans diabète. Le déclin annuel du DFGe au long cours a été ralenti de **1,37 mL/min/1,73 m² par an**. Il n'y a eu aucune augmentation des insuffisances rénales aiguës graves (3,2 % contre 4,1 %) ni des hyperkaliémies graves (2,8 % contre 3,3 %) (EMPA-KIDNEY).
- Dans EMPA-KIDNEY, le critère d'insuffisance cardiaque (hospitalisation pour IC ou décès cardiovasculaire : HR 0,84 ; IC 95 % 0,67–1,07) n'a pas atteint la significativité : les événements ont été moins nombreux qu'attendu, l'essai a été arrêté précocement pour efficacité rénale et n'était pas dimensionné pour ce critère (la proportion de patients ayant déjà une IC ne figurait pas dans le texte lu) (EMPA-KIDNEY).
- **DAPA-CKD selon le statut d'insuffisance cardiaque** (468 des 4 304 participants avaient une IC) : le bénéfice de la dapagliflozine (*Forxiga*) était comparable avec IC (**HR 0,58**) et sans IC (**HR 0,62**), avec un gain absolu plus important dans le groupe avec IC (la FEVG n'était pas précisée dans le résumé lu) (DAPA-CKD).
- **Recommandations KDIGO 2024** (société internationale de néphrologie) : recommandent un iSGLT2 chez l'adulte atteint de maladie rénale chronique et d'insuffisance cardiaque **quelle que soit l'albuminurie (1A)**, indiquent qu'il est raisonnable de le poursuivre en dessous d'un DFGe de 20 jusqu'à la dialyse, et rappellent que la baisse initiale du DFGe n'est généralement pas une raison d'arrêter le traitement (KDIGO 2024).

*Applicabilité :* EMPA-KIDNEY et DAPA-CKD étaient des essais rénaux incluant une majorité de patients sans insuffisance cardiaque ; pour l'ICFER, la preuve directe repose sur DAPA-HF et EMPEROR-Reduced (voir *Les médicaments de l'insuffisance cardiaque (4 piliers)*). Ces essais apportent néanmoins une réassurance précieuse sur la sécurité rénale lorsque le DFGe est bas.`,
    },
    {
      headingFr: 'Baisse précoce du DFGe, diurétiques à l’hôpital et tendance au fil des mois',
      bodyMarkdownFr: `### Quand la baisse initiale du DFGe est-elle attendue ?

Plusieurs traitements de fond (IEC, ARA2, ARNI, ARM, iSGLT2) diminuent la pression à l'intérieur des filtres rénaux (glomérules). Cet effet protecteur à long terme provoque souvent au début une baisse modérée et habituellement stable du DFGe qui ne traduit pas une destruction du rein (« pseudo-aggravation ») (Beldhuis 2022) :

- **KDIGO 2024 :** conseille de poursuivre un IEC ou un ARA2 tant que la créatinine sanguine n'augmente pas de **plus de 30 % dans les 4 semaines** suivant le début ou l'augmentation de dose, et de le maintenir même en dessous de 30 mL/min/1,73 m² de DFGe. Une variation du DFGe dépassant 20 % (ou 30 % après introduction d'un tel traitement) invite à **évaluer la situation** (déshydratation, hypotension, AINS associés), et non à interrompre automatiquement le médicament. Le texte de KDIGO ne mentionne pas explicitement le sacubitril/valsartan dans cette recommandation (KDIGO 2024).
- **Recommandations conjointes britanniques d'IC et de néphrologie (Clark 2019) :** proposent des repères dédiés à l'insuffisance cardiaque couvrant IEC, ARA2, sacubitril/valsartan et ARM :
  - hausse de créatinine **< 30 %** : poursuivre le traitement sauf baisse de tension artérielle symptomatique ;
  - hausse de **30 à 50 %** : envisager une diminution de dose ou une pause brève, puis une réintroduction ;
  - hausse **> 50 %** : suspension temporaire sous contrôle médical.
  Les auteurs soulignent que ces seuils sont « nécessairement arbitraires » (Clark 2019).
- Les deux référentiels convergent sur le repère des **30 %** (KDIGO comme signal d'évaluation, le texte britannique comme repère d'ajustement). La prise de position européenne HFA 2020 n'était pas accessible en texte intégral. Pour le calendrier précis des prises de sang (créatinine en µmol/L et mg/L, DFGe, potassium), consultez *Médicaments : mode d'action, effets secondaires et bilans sanguins*.

### Hausse de la créatinine sous diurétiques lors d'une hospitalisation

Lorsque l'on évacue un excès d'eau à l'hôpital par diurétiques, la créatinine sanguine s'élève fréquemment. Dans deux essais d'insuffisance cardiaque aiguë (RELAX-AHF-2 et PROTECT), une hausse de créatinine d'au moins **26,5 µmol/L** (soit **3 mg/L** ou 0,3 mg/dL) au 4e jour est survenue chez environ **17 à 19 %** des patients. Cette élévation n'était associée à **aucun surrisque lorsque les diurétiques agissaient efficacement** (mesuré par la perte de poids rapportée à la dose), mais s'accompagnait d'un pronostic moins favorable en cas de mauvaise réponse diurétique (Emmens 2022). Il s'agit d'une analyse post hoc en contexte aigu (les rapports de risque complets figuraient dans un supplément non consulté).

### Un DFGe qui décline mois après mois : un signal d'alerte

Dans une analyse portant sur **8 587 patients** issus de deux essais d'éplérénone (EPHESUS après infarctus et EMPHASIS-HF) ainsi que sur **2 048 patients** suivis en clinique à Barcelone (FEVG autour de 30 %, 47 à 62 % d'origine ischémique), le DFGe diminuait d'environ **4,8 mL/min/1,73 m² par an** durant l'année précédant un événement d'insuffisance cardiaque, contre environ **1,2 mL/min/1,73 m² par an** chez les patients sans événement (même profil dans la cohorte clinique : **5,8 contre 1,4**) (Kobayashi 2025).

Les auteurs invitent à observer la **trajectoire** du DFGe sur plusieurs bilans plutôt qu'à réagir à un chiffre isolé. Les essais excluaient toutefois les DFGe inférieurs à 30 mL/min/1,73 m² (Kobayashi 2025).`,
    },
    {
      headingFr: 'Potassium élevé (hyperkaliémie) et finérénone',
      bodyMarkdownFr: `### Maîtriser le potassium pour préserver les traitements de fond

- Les ARM font davantage monter le potassium lorsque les reins sont fragilisés : dans l'essai RALES, un potassium supérieur à 5,5 mmol/L est survenu chez **25,6 %** des patients sous spironolactone (*Aldactone*) contre **8,5 %** sous placebo. À l'inverse, les iSGLT2 n'élèvent pas le potassium (Beldhuis 2022).
- **L'hyperkaliémie récidivante est fréquente :** selon un consensus européen de 2025, environ **43 %** des patients atteints de maladie rénale chronique ou d'insuffisance cardiaque présentent un nouvel épisode dans les 6 à 8 mois. Après un épisode d'hyperkaliémie, les patients insuffisants cardiaques enregistraient environ **2,8 fois** plus d'hospitalisations et **3,4 fois** plus de décès que des patients appariés (Savarese 2025).
- Ce consensus souligne que réduire ou arrêter les médicaments de l'insuffisance cardiaque ne devrait **pas** être le choix par défaut : il préconise de corriger les facteurs réversibles et de recourir, parfois au long cours, à un **chélateur de potassium** (patiromer — *Veltassa* — ou cyclosilicate de zirconium sodique — *Lokelma*). Ce document ne fixe pas de seuils numériques et a été financé par un laboratoire commercialisant un chélateur (Savarese 2025).
- Dans l'essai **DIAMOND**, le patiromer a permis de maintenir un ARM chez davantage de patients atteints d'ICFER ; en revanche, la réduction des événements cardiovasculaires par les chélateurs reste non démontrée (DIAMOND ; ESC 2026).
- **Repères KDIGO 2024 :** les paliers de potassium définis pour la finérénone — instaurer à **≤ 4,8 mmol/L**, poursuivre entre **4,9 et 5,5 mmol/L**, suspendre **au-dessus de 5,5 mmol/L** — sont présentés comme prudents et applicables aux ARM classiques (KDIGO 2024). Ne modifiez jamais votre traitement seul : ces paliers servent de repères de dialogue avec votre cardiologue ou votre médecin traitant.
- **Alimentation :** avec ces traitements, les sels de régime à base de potassium et les compléments contenant du potassium sont à éviter (voir *Interactions entre compléments, aliments et médicaments cardiaques* et *Thèse : régime méditerranéen et sécurité du potassium dans l'ICFER*).

### Diabète de type 2 avec maladie rénale : place de la finérénone

Chez les personnes ayant un diabète de type 2 et une maladie rénale chronique, les recommandations **ESC 2026** recommandent la **finérénone** (*Kerendia*, **Classe I, niveau A**) pour réduire le risque d'insuffisance cardiaque. Les essais rénaux qui fondent cette recommandation (FIDELIO-DKD et FIGARO-DKD) avaient toutefois exclu les patients atteints d'ICFER symptomatique : il s'agit donc d'une indication rénale et diabétique, et non d'une démonstration d'efficacité comme ARM de l'ICFER lorsque la FEVG est inférieure à 40 % (ESC 2026 ; FINE-HEART ; voir *Finérénone, nouveaux ARM et chélateurs de potassium* et *Diabète et insuffisance cardiaque*).`,
    },
    {
      headingFr: 'Autres médicaments sensibles aux reins, chirurgie et limites des preuves',
      bodyMarkdownFr: `### Médicaments et examens à adapter selon votre DFGe

- **Digoxine** (*Digoxine Nativelle*, *Hemigoxine*) : éliminée par les reins, sa concentration sanguine s'élève dès que le DFGe diminue ; des dosages sanguins réguliers (digoxinémie) sont indispensables (Ahmed 2006 ; Beldhuis 2022).
- **Metformine** (*Glucophage*, *Stagid*, pour le diabète) : contre-indiquée sous **DFGe 30 mL/min/1,73 m²**, non instaurée entre 30 et 45, et réévaluée si le DFGe passe sous 45. La notice américaine mentionne l'insuffisance cardiaque aiguë parmi les facteurs de risque d'acidose lactique (RCP FDA metformine).
- **Avant une chirurgie programmée :** KDIGO 2024 conseille de suspendre les IEC/ARA2, les iSGLT2 et la metformine **48 à 72 heures** avant l'intervention, avec un **plan écrit de reprise** validé avec l'équipe chirurgicale et cardiologique (KDIGO 2024).
- **Produit de contraste iodé (coronarographie, scanner injecté) :** KDIGO 2024 recommande d'évaluer le risque d'insuffisance rénale aiguë à l'aide d'un score validé ; aucune source dédiée aux protocoles de néphroprotection n'a été incluse dans cette synthèse (KDIGO 2024).
- **Anti-inflammatoires non stéroïdiens (AINS : ibuprofène, kétoprofène, diclofénac) :** ils peuvent altérer brutalement la fonction rénale et déclencher une rétention hydrosodée ; ils sont à éviter dans l'ICFER.

### Limites des preuves et « jours de maladie »

- **Dialyse et DFGe < 30 mL/min/1,73 m² :** les essais randomisés évaluant les événements cliniques des traitements de l'insuffisance cardiaque y sont presque absents (Beldhuis 2022).
- **Seuils fondés sur l'avis d'experts :** aucun essai randomisé n'a comparé différents seuils de hausse de créatinine pour décider d'interrompre un traitement.
- **Plan « jours de maladie » :** les auteurs britanniques (Clark 2019) qualifient les consignes génériques d'arrêt systématique en cas de maladie de « bien intentionnées mais peu étayées », soulignant le risque d'interrompre des traitements vitaux pour une infection mineure sans jamais les reprendre ; ils proposent plutôt de les poursuivre sous surveillance si la créatinine augmente de moins de 30 %. La section lue de KDIGO 2024 ne comportait pas de liste formelle de « jours de maladie ». Pour l'évaluation complète distinguant bloqueurs du SRAA/ARM et iSGLT2 selon la gravité de l'épisode (y compris Fink 2022, NICE NG148 recommandation 1.2.14 d'octobre 2024, RCP de l'EMA et cohortes de non-reprise), consultez *Thèse : jours de maladie — bloqueurs du SRAA/ARM contre iSGLT2 dans l'ICFER* et *Chirurgie, soins dentaires et plan « jours de maladie »*.`,
    },
  ],
  relatedArticleSlugs: [
    'maladies-associees',
    'medicaments-effets-secondaires-suivi',
    'medicaments-insuffisance-cardiaque',
    'finerenone-et-nouveaux-arm',
    'diabete-insuffisance-cardiaque',
    'escalade-et-resistance-aux-diuretiques',
    'sel-et-liquides-insuffisance-cardiaque',
    'interactions-complements-aliments-medicaments',
    'chirurgie-soins-dentaires-et-jours-de-maladie',
    'these-jours-de-maladie-sraa-vs-isglt2',
    'these-regime-mediterraneen-potassium-icfer',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'examens-et-chiffres',
    'fibrillation-atriale-insuffisance-cardiaque',
    'transplantation-cardiaque-france',
    'goutte-bpco-thyroide-et-autres-comorbidites',
  ],
  sources: [
    { label: 'Beldhuis et al. (2022, texte intégral)', detail: "Médicaments de l'ICFER selon le stade rénal, « double peine » et risque d'hyperkaliémie" },
    { label: 'Dewan et al. (2023)', detail: "Prévalence (31,8 %) et risque attribuable de mortalité de la maladie rénale chronique dans l'ICFER" },
    { label: 'Recommandations KDIGO 2024 (résumé partiel)', detail: 'iSGLT2 (1A), poursuite sous DFGe 20, seuil +30 % de créatinine, paliers de potassium et pause préopératoire' },
    { label: 'EMPA-KIDNEY (NEJM 2023, texte intégral) et DAPA-CKD selon le statut IC (JACC HF 2021, résumé)', detail: 'Néphroprotection par empagliflozine (HR 0,72) jusqu’à DFGe 20 et bénéfice cohérent de la dapagliflozine avec ou sans IC' },
    { label: 'Kobayashi et al. (EHJ 2025, texte intégral)', detail: 'Trajectoires du DFGe dans l’année précédant un événement d’insuffisance cardiaque (EPHESUS, EMPHASIS-HF, cohorte de Barcelone)' },
    { label: 'Emmens et al. (EJHF 2022, lecture partielle)', detail: 'Élévation de créatinine et réponse diurétique dans RELAX-AHF-2 et PROTECT' },
    { label: 'Savarese et al. (2025, texte intégral, financé par l’industrie) et DIAMOND (2022)', detail: 'Consensus sur l’hyperkaliémie récidivante et maintien des ARM grâce aux chélateurs de potassium' },
    { label: 'Bánfi-Bacsárdi et al. (2024, texte intégral)', detail: 'Fonction rénale, prescription de trithérapie à la sortie et mortalité à 1 an' },
    { label: 'Clark et al. (2019)', detail: 'Recommandations britanniques néphrologie/IC sur les variations de créatinine, le potassium et les jours de maladie' },
    { label: 'ESC 2026 (ARM/finérénone), FINE-HEART (Nat Med 2024, texte intégral), Ahmed (2006) et RCP FDA metformine', detail: 'Indication rénale de la finérénone dans le DT2, digoxinémie et seuils rénaux de la metformine' },
  ],
  disclaimerType: 'medical',
};
