import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'thrombus-vg-et-anticoagulants',
  sourceWikiPath: 'wiki/concepts/lv-thrombus-and-blood-thinners.md',
  titleFr: 'Thrombus du ventricule gauche et anticoagulants',
  category: 'comorbidites',
  asOf: '2026-11-24',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'thrombus-vg',
    'caillot-cardiaque',
    'anticoagulants',
    'aod',
    'doac',
    'warfarine',
    'rivaroxaban',
    'apixaban',
    'irm-cardiaque',
    'ett-contraste',
    'rythme-sinusal',
    'prévention-avc',
  ],
  aliases: [
    'Thrombus VG',
    'Thrombus intraventriculaire gauche',
    'LV thrombus',
    'Caillot cardiaque',
    'Thrombus mural',
    'Anticoagulation',
    'AOD',
    'DOAC',
    'Warfarine',
    'AVK',
    'Rivaroxaban',
    'Apixaban',
  ],
  linkedModules: ['lvThrombusOrAneurysm'],
  plainSummaryFr:
    'Un thrombus intraventriculaire gauche (thrombus VG) est un caillot de sang accolé à la paroi interne du ventricule gauche. Il se forme surtout dans les zones qui se contractent très peu (en particulier la paroi antérieure et la pointe après un infarctus étendu de l’IVA lorsque la FEVG est basse) et expose à un risque d’AVC ou d’embolie artérielle. Une échocardiographie transthoracique (ETT) standard peut manquer des caillots de petite taille que l’ETT de contraste ou l’IRM cardiaque détectent. Lorsqu’un thrombus VG est confirmé, le traitement repose habituellement sur un anticoagulant oral (AVK comme la warfarine ou anticoagulant oral direct — AOD — tel que le rivaroxaban ou l’apixaban) pendant 3 à 6 mois avec contrôle d’imagerie. Attention : l’aspirine et le clopidogrel sont des antiagrégants plaquettaires, différents des anticoagulants, et leur association augmente le risque de saignement. En revanche, un cœur affaibli sans thrombus et sans fibrillation atriale (FA) ne justifie pas d’anticoagulation systématique selon les recommandations actuelles.',
  sections: [
    {
      headingFr: 'Deux situations distinctes à ne pas confondre',
      bodyMarkdownFr: `Les données scientifiques séparent nettement deux contextes :

- **Les premières semaines et premiers mois après un infarctus aigu du myocarde :** la quasi-totalité des études portant sur la fréquence, le dépistage et le traitement des thrombus VG proviennent de cette phase aiguë.
- **La cardiomyopathie ischémique chronique**, des années après un infarctus ancien, avec un ventricule dilaté et cicatriciel : les données directes y sont **très rares**. La prise de position américaine **AHA 2022** classe d’ailleurs l’anticoagulation après un infarctus ancien comme une question de recherche encore ouverte.

La **fibrillation atriale (FA)** constitue un motif d’anticoagulation distinct, régi par ses propres scores (voir l’article « Maladies associées (reins, FA, valves, diabète) »). Le présent article concerne les personnes en **rythme sinusal** (rythme normal).`,
    },
    {
      headingFr: 'Quelle est la fréquence d’un thrombus du ventricule gauche ?',
      bodyMarkdownFr: `**Après un infarctus aigu avec sus-décalage du segment ST (STEMI) traité par stent :**

| Population | Fréquence du thrombus VG | Source |
|---|---|---|
| Ensemble des STEMI | **5,6 % à 6,3 %** | Sacoransky 2024 ; Bulluck 2018 |
| STEMI antérieur (paroi avant) | **12,2 % à 12,7 %** | Bulluck 2018 ; Sacoransky 2024 |
| STEMI antérieur avec FEVG < 50 % | **19,2 %** (fourchette large : 7,7–30,8 %) | Bulluck 2018 |
| STEMI antérieur, bras témoin d’APERITIF (IRM à 1 mois) | **16,6 %** | APERITIF 2026 |

- Dans les études IRM regroupées par **Bulluck (2018)**, environ **96 %** des caillots survenaient après un infarctus **antérieur**.
- Les thrombus sont plus souvent mis en évidence lorsque l’imagerie est réalisée vers **2 semaines** plutôt que dans les tout premiers jours.
- Un **nouveau caillot** était découvert chez **3,2 %** supplémentaires sur une IRM de contrôle à 3–6 mois (donnée la plus proche de la phase chronique dans les études post-infarctus).
- **Facteurs favorisants :** localisation antérieure, FEVG basse, pointe (apex) immobile, infarctus étendu et atteinte microvasculaire importante.

**Dans la dysfonction systolique plus généralement (Weinsaft 2008) :** dans une série ancienne (2002–2004) de 784 patients consécutifs avec **FEVG < 50 %** (moyenne **32 %**) explorés par la méthode IRM la plus sensible, un thrombus était retrouvé chez **7 %** des patients, plus fréquemment lorsque la FEVG était plus basse, l’origine ischémique et la **cicatrice plus étendue**. Il s’agissait toutefois d’une population hétérogène adressée en IRM, dont la proportion exacte de maladies ischémiques anciennes n’était pas précisée dans le résumé lu : ce taux de 7 % ne représente pas une prévalence établie de la cardiomyopathie ischémique chronique.`,
    },
    {
      headingFr: 'Comment détecter un thrombus VG et pourquoi est-il important ?',
      bodyMarkdownFr: `### Performance des examens d’imagerie

L’**échocardiographie transthoracique (ETT)** standard sans produit de contraste est l’examen de première intention : lorsqu’elle voit un thrombus, elle se trompe rarement (spécificité d’environ **98 %**), mais elle en **manque beaucoup**. L’**IRM cardiaque avec rehaussement tardif (LGE)** constitue l’examen de référence.

| Examen | Part des thrombus prouvés par IRM détectés (sensibilité) | Source |
|---|---|---|
| ETT standard, tous STEMI | **29 %** | Bulluck 2018 |
| ETT standard, STEMI antérieur avec FEVG basse | **70 %** | Bulluck 2018 |
| ETT standard, études modernes poolées | **58 %** | Sacoransky 2024 |
| ETT avec produit de contraste | **64 %** (une étude citée par Bulluck) | Bulluck 2018 |
| IRM cardiaque avec injection (LGE) | **Examen de référence** | ESC 2023 (SCA) |

Dans l’étude **Weinsaft 2008**, l’IRM avec contraste détectait davantage de caillots (**7 %**) que la ciné-IRM standard (**4,7 %**), en particulier les petits caillots plats (« muraux »).

**Recommandations d’imagerie post-infarctus (ESC 2023 sur les syndromes coronariens aigus) :**

- L’**IRM cardiaque doit être envisagée** si l’ETT n’est pas concluante ou en cas de forte suspicion clinique de thrombus (**Classe IIa, niveau C**).
- L’**ETT de contraste peut être envisagée** après un infarctus antérieur si l’apex est mal visualisé (**Classe IIb, niveau C**).
- La prise de position **AHA 2022** propose également l’IRM lorsque l’ETT est équivoque ou la suspicion forte (par exemple après un AVC d’origine cardiaque suspectée). Aucune source consultée ne définit de protocole de dépistage périodique en cardiomyopathie ischémique chronique (voir l’article « Examens et chiffres : NT-proBNP, taille du VG et cicatrice IRM »).

### Risque embolique (Velangi 2019)

Dans une étude appariée portant sur 157 patients avec thrombus VG à l’IRM suivis sur une médiane de **3,3 ans** :

- Risque d’AVC, d’accident ischémique transitoire (AIT) ou d’embolie systémique : **3,7 % par an** avec thrombus contre **0,8 % par an** chez des témoins de même âge et même FEVG sans caillot — soit un risque environ **quatre fois plus élevé** (**HR 3,99**, IC 95 % : 1,54–10,35), malgré un traitement antithrombotique contemporain (non détaillé dans le résumé).
- Les thrombus visibles **uniquement à l’IRM** (non vus à l’ETT) comportaient un risque comparable à ceux vus sur les deux examens : un petit caillot n’est pas nécessairement anodin.`,
    },
    {
      headingFr: 'Prise en charge lorsqu’un thrombus VG est découvert',
      bodyMarkdownFr: `### Durée du traitement

- **ESC 2023 (SCA) :** une anticoagulation orale — antivitamine K telle que la **warfarine (*Coumadin*)** ou anticoagulant oral direct (**AOD**) — **doit être envisagée pendant 3 à 6 mois** en cas de thrombus VG confirmé (**Classe IIa, niveau C**), sans préférence imposée entre AVK et AOD. La durée précise dépend d’une **imagerie de contrôle** (ETT ou IRM), du risque hémorragique et du besoin concomitant d’antiagrégants plaquettaires.
- **Prise de position AHA 2022 (suggestions non gradées, lues via synthèse ACC) :** traitement anticoagulant oral **en règle générale pendant 3 mois** après un infarctus, les AOD constituant une alternative raisonnable à la warfarine. Si le thrombus persiste, changer de molécule est raisonnable ; devant un caillot ancien, plat ou calcifié, l’arrêt peut également se discuter. *(La mention AHA d’une durée de 3 à 6 mois avec arrêt possible si la FEVG dépasse 35 % concernait la cardiomyopathie non ischémique.)*
- Dans les études IRM de **Bulluck (2018)**, **88 %** des caillots avaient disparu au contrôle entre 3 et 6 mois.

### AVK (warfarine) ou AOD (rivaroxaban, apixaban) ?

L’ensemble des essais randomisés a été regroupé en 2025 (**Magdy 2025**) : **7 petits essais totalisant 554 patients** (âge moyen 54 ans), presque tous après infarctus récent, suivis environ 3 mois.

| Critère à ~3 mois | AOD | Warfarine | Résultat |
|---|---|---|---|
| Disparition du thrombus | **86 %** | **81 %** | Pas de différence nette (**RR 1,01**, IC 95 % : 0,93–1,10) |
| Saignement majeur ou cliniquement pertinent | **2,8 %** | **4,4 %** | Pas de différence nette (**RR 0,75**, IC 95 % : 0,26–2,19) |
| AVC ou embolie | **2,2 %** | **3,4 %** | Pas de différence nette (**RR 0,75**, IC 95 % : 0,12–4,25) |

- Ces essais étaient ouverts, reposaient surtout sur l’ETT standard et restaient **trop petits** pour trancher formellement sur les AVC ou les saignements.
- **RIVAWAR (2025)**, le plus grand essai du lot : 261 patients dans un seul centre au Pakistan, quasi tous à FEVG ≤ 35 %, recevant **rivaroxaban (*Xarelto*) 20 mg une fois par jour** ou warfarine pendant 12 semaines. Résolution plus rapide à 4 semaines sous rivaroxaban (**20 % contre 8 %**), puis identique à 12 semaines (**95,8 % contre 96,6 %**). Les AVC ischémiques étaient numériquement plus fréquents sous rivaroxaban (**3,5 % contre 1,1 %**, non significatif). Limites : étude monocentrique, ETT seule, petit groupe warfarine, suivi limité à 3 mois et taux de disparition jugés inhabituellement élevés par certains commentateurs.
- **NO-LVT** (79 patients, rivaroxaban 20 mg vs warfarine) figure dans la méta-analyse (article original non lu). Une comparaison indirecte entre **apixaban (*Eliquis*)** et rivaroxaban (73 % contre 89 % de résolution) reste purement exploratoire.
- **Attention aux doses :** le traitement d’un thrombus VG utilise une **dose anticoagulante pleine** (par exemple rivaroxaban 20 mg/j dans RIVAWAR). La faible dose « vasculaire » de **2,5 mg deux fois par jour** (utilisée dans COMMANDER-HF, COMPASS et APERITIF) **ne traite pas un caillot constitué**.

### Association avec l’aspirine ou le clopidogrel

- Les recommandations **ESC 2023** soulignent l’absence d’essai randomisé sur l’association anticoagulant + antiagrégants dans le thrombus VG : le schéma doit être **individualisé**.
- Après la pose d’un stent chez une personne nécessitant un anticoagulant, le texte ESC 2023 privilégie une **trithérapie courte** (anticoagulant + aspirine + **clopidogrel** — *Plavix*), habituellement limitée à environ **1 semaine**, suivie d’une bithérapie (anticoagulant + clopidogrel).
- Le coût hémorragique est notable : dans les études poolées (**Bulluck 2018**), le taux de saignement à 1–2 ans atteignait **8,8 %** sous trithérapie pour thrombus contre **0,5 %** sous double antiagrégation seule. Dans RIVAWAR, les deux bras recevaient aspirine + clopidogrel pendant 4 semaines puis clopidogrel seul.`,
    },
    {
      headingFr: 'Prévention post-infarctus antérieur et absence de bénéfice en rythme sinusal sans caillot',
      bodyMarkdownFr: `### Prévenir un caillot après un infarctus antérieur : l’essai français APERITIF (2026)

Dans l’essai français **APERITIF** (560 patients après STEMI antérieur), l’ajout préventif de **rivaroxaban à faible dose (2,5 mg deux fois par jour)** pendant 4 semaines à la double antiagrégation plaquettaire standard a donné :

- Thrombus à l’IRM à 1 mois : **13,7 % contre 16,6 %**, différence **non statistiquement significative**.
- Plus de saignements mineurs (**16,4 % contre 7,2 %**).
- Les auteurs précisent que la taille de l’essai ne permettait pas d’exclure un petit bénéfice : l’utilité préventive n’est donc pas démontrée. L’**AHA 2022** qualifie également les preuves d’anticoagulation préventive de faibles, à peser au cas par cas selon le risque hémorragique.

### Anticoagulation sans thrombus en rythme sinusal (ICFER)

Plusieurs grands essais ont testé l’anticoagulation systématique chez des patients en rythme sinusal ayant un cœur affaibli, sans montrer de bénéfice net global :

| Essai | Population | Comparaison | Résultat principal |
|---|---|---|---|
| **WARCEF (2012)** | 2 305 patients, FEVG ≤ 35 %, rythme sinusal ; ~**43 %** d’origine ischémique ; FEVG moyenne ~25 % | Warfarine vs aspirine 325 mg, suivi moyen 3,5 ans | Décès, AVC ou hémorragie cérébrale **identiques (HR 0,93)**. AVC ischémiques divisés par deux (**0,72 contre 1,36** pour 100 patients-années) mais saignements majeurs doublés (**1,78 contre 0,87**) |
| **COMMANDER-HF (2018)** | 5 022 patients, FEVG ≤ 40 %, **maladie coronaire**, rythme sinusal, après aggravation d’IC | Rivaroxaban 2,5 mg × 2/j vs placebo, médiane 21 mois | Décès, infarctus ou AVC **sans différence** (**25,0 % contre 26,2 %** ; **HR 0,94**) |
| **COMPASS — sous-groupe IC (2019)** | 5 902 patients avec maladie coronaire ou artériopathie stable et antécédent d’IC ; **FEVG < 30 % et NYHA III–IV exclus** ; 72 % des FEVG mesurées ≥ 40 % | Rivaroxaban 2,5 mg × 2/j + aspirine vs aspirine seule | Moins de décès CV, AVC ou infarctus sur l’ensemble du groupe IC (**5,5 % contre 7,9 %**) ; saignements majeurs **2,5 % contre 1,8 %** (HR 1,36 [0,88–2,09]). Chez les **721 patients à FEVG < 40 %**, résultat **non concluant (HR 0,88 [0,55–1,42])** |

- **Nuances :** WARCEF n’incluait pas de thrombus visibles, utilisait la warfarine et une dose d’aspirine plus élevée que la pratique européenne habituelle. COMMANDER-HF (lu en résumé) concernait des patients récemment décompensés. La stratégie « double voie » de COMPASS est une option de **prévention coronaire**, non un traitement de l’insuffisance cardiaque ni d’un caillot, et couvre à peine les FEVG autour de 35 %.`,
    },
    {
      headingFr: 'Synthèse des recommandations internationales et limites des preuves',
      bodyMarkdownFr: `| Situation | ESC (Europe) | États-Unis (AHA/ACC) | NICE NG106 (Royaume-Uni) |
|---|---|---|---|
| Cœur affaibli, rythme sinusal, sans thrombus ni autre indication | **Pas en routine :** le texte ESC 2026 (section 9.5) note l’absence de preuve en faveur d’une anticoagulation systématique sans FA (texte narratif, sans classe) | Anticoagulation sans indication spécifique : **Classe 3 : Absence de bénéfice (niveau B-R)** (AHA/ACC/HFSA 2022) | Envisager uniquement en cas d’embolie antérieure, d’**anévrisme du VG** ou de **thrombus intracardiaque** (recommandation 1.9.6) |
| Thrombus VG confirmé après infarctus | Anticoagulation **doit être envisagée 3–6 mois**, guidée par imagerie de contrôle (ESC 2023 SCA, **Classe IIa C**) | Traitement généralement conseillé, typiquement **~3 mois** (AHA 2022, non gradé) | Envisager une anticoagulation (1.9.6) |
| Fibrillation atriale (FA) | Règles dédiées (voir « Maladies associées ») | Règles dédiées | Suivre le guide NICE FA (1.9.5) |

- Les recommandations **ESC 2026** relèvent que le risque d’AVC dans l’insuffisance cardiaque paraît élevé même en rythme sinusal (environ **2,0 pour 100 patients-années** contre **2,87** en FA), sans pour autant qu’une anticoagulation systématique n’apporte de bénéfice net. Elles renvoient le sujet du thrombus VG aux recommandations SCA.
- La recommandation NICE 1.9.6 date de **2003** et a été reconduite telle quelle ; aucune source du corpus ne fournit de données directes sur l’anévrisme du VG isolé. La mise en garde AHA 2022 contre l’anticoagulation préventive dans la cardiomyopathie dilatée vise les formes non ischémiques.

### Limites des preuves

- **Données centrées sur le post-infarctus aigu :** la fréquence de formation de caillots des années plus tard dans un ventricule chronique, dilaté et cicatriciel reste mal connue.
- **Essais de traitement de petite taille :** environ 550 patients randomisés au total entre AOD et warfarine, suivis 3 mois, le plus souvent par ETT, ce qui est insuffisant pour trancher définitivement sur les AVC ou les hémorragies.
- **Niveau de preuve majoritairement C ou non gradé :** toutes les recommandations ESC sur le thrombus VG sont de niveau C (consensus d’experts) et le texte AHA est une prise de position scientifique.
- **Morphologie du caillot :** les sources consultées ne permettent pas de quantifier l’écart de risque entre un caillot mobile/protrusif et un caillot plat.
- **Sources lues en résumé :** COMMANDER-HF, Weinsaft, Velangi, APERITIF et Sacoransky n’ont été lus qu’en résumé, et la prise de position AHA 2022 via sa synthèse ACC.`,
    },
  ],
  relatedArticleSlugs: [
    'cardiomyopathie-ischemique',
    'examens-et-chiffres',
    'medicaments-insuffisance-cardiaque',
    'maladies-associees',
    'cholesterol-et-prevention-secondaire',
    'occlusion-coronaire-chronique-cto',
    'interactions-complements-aliments-medicaments',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'glossaire-cardiologie',
    'comprendre-le-diagnostic',
  ],
  sources: [
    {
      label: 'Méta-analyses Bulluck (2018) et Sacoransky (2024), cohortes Weinsaft (2008) et Velangi (2019)',
      detail: 'Incidence du thrombus VG en IRM post-STEMI, sensibilité de l’ETT, résolution, risque embolique multiplié par 4 et saignements sous trithérapie',
    },
    {
      label: 'Méta-analyse Magdy (2025) et essais RIVAWAR (2025) et NO-LVT',
      detail: 'Comparaison AOD (rivaroxaban, apixaban) versus warfarine sur 7 essais randomisés (554 patients)',
    },
    {
      label: 'Essai français APERITIF (2026)',
      detail: 'Prévention par rivaroxaban 2,5 mg deux fois par jour pendant 4 semaines après STEMI antérieur',
    },
    {
      label: 'Essais WARCEF (2012), COMMANDER-HF (2018) et sous-groupe IC de COMPASS (2019)',
      detail: 'Absence de bénéfice net d’une anticoagulation systématique en rythme sinusal sans thrombus',
    },
    {
      label: 'Recommandations ESC 2023 (SCA, tableau 14), ESC 2026 (IC, section 9.5), AHA 2022 (thrombus VG), AHA/ACC/HFSA 2022 et NICE NG106 (2025)',
      detail: 'Indications d’imagerie, durée d’anticoagulation de 3–6 mois, trithérapie courte et contre-indication à l’anticoagulation de routine sans FA ni caillot',
    },
  ],
  disclaimerType: 'medical',
};
