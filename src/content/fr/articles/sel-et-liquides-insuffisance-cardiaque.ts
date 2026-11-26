import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'sel-et-liquides-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/concepts/salt-and-fluid-in-heart-failure.md',
  titleFr: "Sel et apports hydriques dans l'insuffisance cardiaque",
  category: 'nutrition',
  readingTier: 'essential',
  asOf: '2026-11-25',
  confidence: 'high',
  volatility: 'warm',
  tags: [
    'sel',
    'sodium',
    'liquides',
    'restriction-hydrique',
    'sodium-hf',
    'fresh-up',
    'substituts-de-sel',
    'hyperkaliémie',
    'hyponatrémie',
    'sensibilité-au-sel',
    'autogestion',
  ],
  aliases: [
    'Restriction en sel',
    'Régime sans sel',
    'Restriction hydrique',
    'Limite de liquides',
    'Substituts de sel au potassium',
    'Hyponatrémie',
    'Sodium sanguin bas',
    'Natrémie basse',
    'SODIUM-HF',
    'FRESH-UP',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Les conseils sur le sel et les boissons dans l'insuffisance cardiaque se sont nettement assouplis. Si votre état est stable, il s'agit surtout d'éviter les excès de sel (repère européen jusqu'à environ 5 g par jour) et de boire selon votre soif, sauf limite prescrite par votre équipe. N'utilisez jamais de sel de régime au potassium sans accord médical, et gardez la pesée chaque matin comme filet de sécurité.",
  keyTakeawaysFr: [
    "Visez une consommation modérée de sel (repère européen jusqu'à environ 5 g par jour), en réduisant surtout les plats préparés, charcuteries et fromages salés.",
    "Buvez selon votre soif si votre insuffisance cardiaque est stable, sauf limite précise fixée par votre cardiologue ; adaptez en cas de canicule ou de gastro-entérite.",
    "Évitez les substituts de sel au potassium et les produits industriels « réduits en sel » enrichis en potassium, surtout sous ARNI, IEC, ARA2 ou ARM.",
    "Un sodium sanguin bas (inférieur à 135 mmol/L) traduit le plus souvent un excès d'eau plutôt qu'un manque de sel : n'ajoutez pas de sel sans avis médical.",
  ],
  sections: [
    {
      headingFr: 'Le sel au quotidien : éviter les excès sans extrême',
      depth: 'patient',
      bodyMarkdownFr: `Les régimes « sans sel strict » d'autrefois ne sont plus recommandés de façon systématique lorsque votre insuffisance cardiaque est chronique et stable. L'approche européenne actuelle repose sur le bon sens : **éviter les excès de sel, sans tomber dans une restriction extrême**.

- **Le repère européen :** un apport modéré, **jusqu'à environ 5 g de sel par jour** (soit environ une cuillère à café rase), est considéré comme acceptable chez les patients stables. Ce repère est à adapter avec votre cardiologue ou votre médecin traitant, en particulier si vous avez aussi une hypertension artérielle ou une maladie coronaire.
- **Pourquoi éviter les régimes ultra-stricts :** descendre très bas en sel est difficile à tenir dans la durée, coupe parfois l'appétit (au risque de manger trop peu de calories et de protéines), donne soif et bouche sèche, et peut stimuler les hormones de stress.
- **Où se cache vraiment le sel :** la majeure partie du sel quotidien ne vient pas de la salière posée sur la table, mais des **aliments transformés** : plats préparés, charcuteries, fromages, soupes industrielles, sauces et pain. Cuisiner maison avec des herbes aromatiques, des épices, de l'ail ou du citron et lire les étiquettes est beaucoup plus efficace et plus agréable que de tout manger fade.`,
    },
    {
      headingFr: 'Boire selon votre soif, sauf consigne particulière',
      depth: 'patient',
      bodyMarkdownFr: `Chez une personne dont l'insuffisance cardiaque est stable, **imposer systématiquement une limite fixe de 1,5 L par jour n'a pas montré de bénéfice** et augmente nettement l'inconfort lié à la soif.

- **En période stable :** vous pouvez généralement boire selon votre soif, ce qui correspond le plus souvent à **1,5 à 2,5 L par jour** selon votre gabarit et votre activité.
- **Quand une limite peut rester utile :** votre équipe peut maintenir un plafond précis (souvent 1,5 à 2,0 L/j) dans certaines situations particulières : insuffisance cardiaque avancée ou décompensation récente (hospitalisation dans les derniers mois), sodium sanguin très bas (hyponatrémie sévère inférieure à 130 mmol/L), fonction rénale très abaissée (DFGe inférieur à 30 mL/min/1,73 m²) ou habitude de boire de très grands volumes.
- **Si une limite vous est prescrite :** n'oubliez pas que **tous les liquides comptent** dans le total quotidien — eau, café, thé, tisanes, jus, lait, soupes, potages et eau nécessaire à certains laxatifs de lest (comme le psyllium).
- **Chaleur et jours de maladie :** en cas de **canicule**, de fièvre, de **vomissements** ou de **diarrhée**, vos besoins en eau augmentent. Discutez à l'avance avec votre équipe de la conduite à tenir dans ces situations (voir *Voyages, altitude, canicule et extrêmes climatiques dans l'IC* et *Chirurgie, soins dentaires et jours de maladie*).
- **Votre filet de sécurité :** gardez la **pesée quotidienne chaque matin** (après avoir uriné, avant le petit-déjeuner). Une prise de poids rapide supérieure à **2,0 kg en 3 jours** ou un essoufflement inhabituel doivent vous amener à contacter rapidement votre médecin traitant, votre cardiologue ou votre infirmière insuffisance cardiaque / IPA (et en cas de détresse aiguë, appelez le **15 (SAMU)**, le **112** ou le **114** par SMS).`,
    },
    {
      headingFr: 'Substituts de sel au potassium : un piège à éviter',
      depth: 'patient',
      bodyMarkdownFr: `Les sels dits « pauvres en sodium » ou « de régime » remplacent une partie du sodium par du **chlorure de potassium** (entre 10 % et 50 % selon les produits).

- **Pourquoi c'est risqué avec vos traitements :** plusieurs médicaments essentiels de l'insuffisance cardiaque — sacubitril/valsartan (*Entresto*), IEC, ARA2, spironolactone (*Aldactone*) et éplérénone (*Inspra*) — font déjà monter le taux de potassium dans le sang. Ajouter un substitut de sel au potassium expose à une **hyperkaliémie** (excès de potassium sanguin), potentiellement dangereuse pour le rythme cardiaque.
- **Attention aux produits industriels « réduits en sel » :** certains plats préparés, sauces ou viandes allégées en sodium remplacent eux aussi le sel par des additifs au potassium. Vérifiez la liste des ingrédients (« chlorure de potassium »).
- **La règle simple :** **n'utilisez jamais de substitut de sel au potassium sans l'accord de votre cardiologue**, et préférez les herbes, épices et aromates naturels pour relever vos plats.`,
    },
    {
      headingFr: 'Sodium sanguin bas (hyponatrémie) : que signifie ce résultat ?',
      depth: 'patient',
      bodyMarkdownFr: `Si votre prise de sang indique un sodium inférieur à **135 mmol/L**, il est naturel de penser qu'il faudrait manger plus salé. En réalité, dans l'insuffisance cardiaque, **un sodium sanguin bas signifie le plus souvent que l'organisme retient trop d'eau**, ce qui dilue le sodium dans le sang.

- **Ne rajoutez pas de sel de votre propre initiative :** votre équipe médicale distingue deux situations qui se prennent en charge différemment :
  - l'*hyponatrémie de dilution* (la plus fréquente), liée à une rétention d'eau sous l'effet des hormones de stress ; ajouter du sel risquerait d'aggraver la congestion ;
  - l'*hyponatrémie de déplétion* (plus rare), après des vomissements, une diarrhée, un régime sans sel très strict ou un diurétique thiazidique.
- **Un repère à interpréter globalement :** votre médecin analyse toujours la natrémie avec votre poids, vos œdèmes, votre bilan rénal et votre NT-proBNP, et vérifie les autres médicaments pouvant l'abaisser (notamment certains antidépresseurs). Ne modifiez jamais vos traitements de fond (IEC, bêtabloquants, ARM) sans avis médical.`,
    },
    {
      headingFr: 'Ce que montrent les essais cliniques et recommandations (SODIUM-HF, FRESH-UP)',
      depth: 'evidence',
      bodyMarkdownFr: `### Essai SODIUM-HF (*The Lancet*, 2022) sur le sel
- **Protocole :** 806 patients ambulatoires stables (majoritairement NYHA II, environ un quart NYHA III ; FEVG médiane de 36 %, sans seuil de FEVG à l'inclusion ; 45 à 47 % de maladie coronaire) recevant leur traitement habituel. Accompagnement diététique pour viser moins de 1 500 mg de sodium par jour (environ 3,8 g de sel) contre soins usuels.
- **Résultats à 12 mois :**
  - **Décès, hospitalisation cardiovasculaire ou passage aux urgences cardiovasculaires :** 15 % contre 17 % (HR 0,89, non significatif ; 0,99 après ajustement) ;
  - **Décès :** 6 % contre 4 % (HR 1,38, non significatif) ;
  - **Qualité de vie et symptômes :** petit gain de qualité de vie (score KCCQ +3,4 points) et probabilité plus élevée de s'améliorer d'une classe NYHA.
- **Nuances :** écart réel modeste (médiane 1 658 mg/j contre 2 073 mg/j de sodium, soit ~415 mg/j de différence) ; arrêt précoce à 806 patients sur 992 prévus (analyse intermédiaire, faisabilité, COVID-19) ; événements moins fréquents qu'attendu (17 % contre 25 %) ; tolérance (natrémie, kaliémie, hypotensions, chutes) non détaillée dans l'article principal ; davantage de retraits de consentement dans le groupe restrictif (24 contre 12).
- **Sel, tension et sensibilité au sel :** en population générale, réduire le sel diminue la mortalité totale chez les normotendus (RR 0,90) et cardiovasculaire chez les hypertendus (RR 0,67 ; certitude modérée). Une revue narrative de 2026 (**Bachlitzanaki 2026**) estime que près de la moitié des hypertendus et un quart des normotendus sont « sensibles au sel » (profil associé à l'ICFEP, sans test clinique courant et sans traiter l'ICFER) ; son affirmation d'un surrisque sous 1,5 g de sodium/j s'appuie sur le consensus HFA 2024 et une revue sur l'HTA, alors que SODIUM-HF n'a montré ni bénéfice net ni danger démontré.

### Essai FRESH-UP (*Nature Medicine*, 2025) sur les liquides
- **Protocole :** 504 patients ambulatoires stables (NYHA II–III ; environ moitié ICFER ; 44 % ischémiques ; traitement moderne). Limite fixe de **1 500 mL/j** pendant 3 mois contre apports libres selon la soif.
- **Résultats :**
  - **Qualité de vie :** score KCCQ 74,0 (apports libres) contre 72,2 (restriction), différence non significative (p = 0,06) ; sous-groupe ICFER +0,8 point (non significatif, sans interaction) ;
  - **Soif :** gêne nettement plus marquée sous restriction (p < 0,001) ;
  - **Sécurité à 6 mois :** événements rares et similaires — décès (1 contre 2), hospitalisations IC (4 contre 4), diurétiques IV (5 contre 7), insuffisance rénale aiguë (3 contre 4) ; poids, NT-proBNP et diurétiques comparables ;
  - **Apports réels :** médiane **1,76 L/j** (groupe libre, un tiers > 2 L/j) contre **1,48 L/j** (groupe restreint) ; seuls 56 % respectaient la limite sur les carnets contre 88 % qui pensaient y parvenir.
- **Populations exclues de FRESH-UP :** décompensation, hospitalisation IC, procédure coronaire ou implantation de dispositif dans les 3 mois précédents, hyponatrémie < 130 mmol/L, DFGe < 30 mL/min/1,73 m² ou apports hydriques très élevés.

### Synthèse des recommandations
- **Consensus HFA-ESC 2024 :** sel jusqu'à **5 g/j** acceptable dans l'IC chronique stable (éviter les restrictions extrêmes, un compte rendu évoquant < 0,5 à 1 g de sodium/j) ; liquides **1,5 à 2,5 L/j** (15 à 30 mL/kg) guidés par la soif, limite 1,5 à 2 L réservée à l'IC avancée, augmentation autorisée en cas de canicule, vomissements ou diarrhée.
- **ESC 2026 :** aucun seuil de sel en grammes dans le texte principal (éducation thérapeutique et autogestion **Classe I, niveau A** ; tableau détaillé en annexe Table S24 non consultée) ; « aucune preuve ne soutient la restriction hydrique dans l'IC chronique » (narratif, citant FRESH-UP et HFA 2024) ; en décompensation aiguë, apports inférieurs à la diurèse et au sodium urinaire ; hyponatrémie au cas par cas.
- **NICE NG106 (2025) :** pas de restriction systématique en sel ou liquides (1.9.10) ; restreindre en cas d'hyponatrémie de dilution ou réduire si apports excessifs ; substituts de sel au potassium déconseillés (1.9.11). Repère patient BHF : < 6 g de sel/j.
- **AHA/ACC/HFSA 2022 :** éviter l'excès de sodium dans l'IC symptomatique (**Classe 2a, niveau C-LD**) ; restriction hydrique évoquée uniquement dans l'IC avancée avec hyponatrémie (**Classe 2b, niveau C-LD**).

### Questions encore ouvertes
- Contenu précis de l'annexe ESC 2026 (Table S24), effets d'une réduction sodée sur plusieurs années (seule une analyse post-hoc de SODIUM-HF identifiée), et annexes non consultées de SODIUM-HF (sous-groupes FEVG/sécurité) et FRESH-UP (natrémie de suivi).`,
    },
    {
      headingFr: 'Données détaillées : hyponatrémie, réservoir veineux et substituts de sel',
      depth: 'evidence',
      bodyMarkdownFr: `### Hyponatrémie dans l'insuffisance cardiaque
- **Fréquence et mécanismes :** définie sous ~135 mmol/L (134 à 136 mmol/L selon les études), présente chez **18 à 27 %** des patients IC et jusqu'à **30 %** en hospitalisation (**Sato 2025** ; **Gawron 2026**). Distinction entre dilution (vasopressine) et déplétion (pertes digestives, régime très strict, thiazidiques). *(Point de méthode : le tableau récapitulatif de Sato 2025 inverse les indices urinaires par rapport à son texte ; Gawron 2026 provient d'une revue non cardiologique de faible visibilité, structurée avec aide d'IA et sans IC 95 %.)*
- **Pronostic (données observationnelles) :** dans **OPTIMIZE-HF** (**48 612 hospitalisations**), chaque baisse de 3 mmol/L sous 140 mmol/L s'associait à ~**19,5 %** de risque supplémentaire de décès hospitalier. Dans **ESCAPE** (IC systolique sévère), mortalité à 6 mois de **31 %** si natrémie basse persistante contre **16 %** si normale. Une baisse persistante ou aggravée pèse davantage qu'une baisse transitoire lors de la décongestion.
- **Traitements :** le **tolvaptan** a corrigé la natrémie et soulagé la dyspnée dans **EVEREST** sans réduire mortalité ni hospitalisations (signal *post hoc* éventuel uniquement si < 130 mmol/L). Une méta-analyse d'essais randomisés sur la restriction hydrique n'a pas modifié natrémie, réhospitalisations ni mortalité (**Sato 2025**). IEC et bêtabloquants sont associés à une meilleure natrémie ; les ARM peuvent l'abaisser tout en conservant leur bénéfice clinique (**Sato 2025**).
- **Antidépresseurs (Gheysens 2024) :** multiplient environ par 3 la probabilité d'hyponatrémie (taux le plus élevé sous IRSN, le plus bas sous mirtazapine ; effet combiné avec les diurétiques non testé).

### Rôle de réservoir des veines (piste de recherche)
Les veines abdominales stockent une réserve sanguine pouvant être mobilisée vers le cœur et les poumons lors d'une activation hormonale ou d'un effort, élevant les pressions de remplissage même sans apport liquidien supplémentaire. Une revue narrative de 2026 (**Lineham 2026**) discute ce mécanisme surtout dans l'ICFEP, où les essais ciblant les veines ont échoué ; il ne s'agit pas d'une cible thérapeutique établie dans l'ICFER.

### Substituts de sel au potassium : limites des essais
- **Revue Cochrane 2022 (26 essais en population générale) :** baisse de PA systolique d'environ 5 mmHg et probable réduction des décès CV et événements coronaires (certitude modérée, portée par **SSaSS** où près de 3/4 avaient un antécédent d'AVC).
- **Exclusions majeures :** aucun essai n'a inclus de patients atteints d'insuffisance cardiaque, et tous ont exclu les personnes à risque d'hyperkaliémie (MRC, diabète, épargneurs de potassium). L'absence apparente de surrisque d'hyperkaliémie (**RR 1,04**) reposait sur seulement **12 contre 10 événements** (91 % du poids issu d'une seule petite étude en maison de retraite à haut risque de biais), et SSaSS n'a pas dosé la kaliémie de façon répétée (+0,12 mmol/L en moyenne).
- **Notices et essais ICFER :** la notice du sacubitril/valsartan (*Entresto*) met explicitement en garde contre les substituts de sel au potassium au même titre que la spironolactone. Dans **PARADIGM-HF**, environ **1 patient sur 6** avait déjà un potassium > 5,5 mmol/L sans aucun apport potassique supplémentaire.`,
    },
  ],
  relatedArticleSlugs: [
    'maladie-renale-insuffisance-cardiaque',
    'escalade-et-resistance-aux-diuretiques',
    'nutrition-et-complements-insuffisance-cardiaque',
    'interactions-complements-aliments-medicaments',
    'alimentation-cardioprotectrice',
    'fibres-alimentaires-et-axe-intestin-coeur',
    'poids-obesite-et-denutrition',
    'vivre-avec-insuffisance-cardiaque',
    'voyages-canicule-et-climat-ic',
    'chirurgie-soins-dentaires-et-jours-de-maladie',
    'tabac-et-alcool-insuffisance-cardiaque',
    'depression-et-sante-emotionnelle',
    'tension-arterielle-insuffisance-cardiaque',
    'medicaments-effets-secondaires-suivi',
    'medicaments-insuffisance-cardiaque',
    'essais-cliniques-cles',
  ],
  sources: [
    {
      label: 'SODIUM-HF (The Lancet, 2022 — texte intégral)',
      detail: '806 patients, FEVG médiane 36 %, sodium < 1 500 mg/j contre soins usuels, résultats à 12 mois et limites.',
    },
    {
      label: 'FRESH-UP (Nature Medicine, 2025 — texte intégral et données étendues)',
      detail: '504 patients stables, limite fixe 1 500 mL/j contre apports libres, qualité de vie, soif et sécurité à 6 mois.',
    },
    {
      label: 'Consensus HFA-ESC 2024 et recommandations ESC 2026',
      detail: 'Repères européens sur le sel (≤ 5 g/j HFA 2024 ; aucun seuil chiffré dans le texte principal ESC 2026) et les liquides (1,5 à 2,5 L/j selon la soif, adaptation canicule et jours de maladie).',
    },
    {
      label: 'Revue Cochrane 2022 sur les substituts de sel (texte intégral), AHA/ACC/HFSA 2022, NICE NG106 (2025) et notice Entresto',
      detail: '26 essais en population générale, exclusions des sujets à risque, absence d’essai dans l’IC, mise en garde substituts potassiques et données PARADIGM-HF.',
    },
    {
      label: 'Gawron et al. (2026), Sato et al. (2025), Gheysens et al. (2024), Bachlitzanaki et al. (2026) et Lineham et al. (2026)',
      detail: 'Hyponatrémie dans l’IC (dilution vs déplétion, OPTIMIZE-HF, ESCAPE, EVEREST/tolvaptan), risque d’hyponatrémie sous antidépresseurs, sensibilité au sel et rôle de réservoir veineux dans l’ICFEP.',
    },
  ],
  disclaimerType: 'medical',
};
