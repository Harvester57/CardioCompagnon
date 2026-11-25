import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'thrombus-vg-et-anticoagulants',
  sourceWikiPath: 'wiki/concepts/lv-thrombus-and-blood-thinners.md',
  titleFr: 'Thrombus du ventricule gauche et anticoagulants',
  category: 'comorbidites',
  asOf: '2026-11-25',
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
    'morphologie-thrombus',
    'anévrisme-vg',
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
    'Un thrombus intraventriculaire gauche (thrombus VG) est un caillot de sang accolé à la paroi interne du ventricule gauche. Il se forme surtout dans les zones qui se contractent très peu (en particulier la paroi antérieure et la pointe après un infarctus étendu de l’IVA lorsque la FEVG est basse) et multiplie par environ quatre le risque d’AVC ou d’embolie artérielle. Une échocardiographie transthoracique (ETT) standard manque souvent des caillots que l’ETT de contraste ou l’IRM cardiaque détectent. Les petites études anciennes associaient les caillots mobiles ou protrusifs aux embolies, mais les études modernes n’ont pas confirmé la forme comme facteur indépendant et les caillots plats ne sont pas démontrés anodins ; la disparition du caillot est un repère plus constant. Lorsqu’un thrombus VG est confirmé, le traitement repose sur un anticoagulant oral (AVK comme la warfarine ou AOD tel que le rivaroxaban ou l’apixaban) pendant 3 à 6 mois avec contrôle d’imagerie. L’aspirine et le clopidogrel sont des antiagrégants plaquettaires, différents des anticoagulants, et leur association accroît le risque de saignement. Sans thrombus ni fibrillation atriale, un cœur affaibli en rythme sinusal ne justifie pas d’anticoagulation systématique.',
  sections: [
    {
      headingFr: 'Deux situations distinctes à ne pas confondre',
      bodyMarkdownFr: `Les données scientifiques séparent nettement deux contextes :

- **Les premières semaines et premiers mois après un infarctus aigu du myocarde :** la quasi-totalité des études portant sur la fréquence, le dépistage et le traitement des thrombus VG proviennent de cette phase aiguë (Bulluck 2018 ; Sacoransky 2024 ; ESC 2023 SCA).
- **La cardiomyopathie ischémique chronique**, des années après un infarctus ancien, avec un ventricule dilaté et cicatriciel : les données directes y sont **très rares**. La prise de position américaine **AHA 2022** classe l’anticoagulation après un infarctus ancien comme une question de recherche encore ouverte. Les rares séries incluant de nombreux infarctus anciens sont petites et datent des années 1980 : les caillots découverts des mois ou des années après l’infarctus continuaient de provoquer des embolies, surtout chez des patients non anticoagulés (Stratton & Resnick 1987 ; Stratton 1988). Dans une cohorte française de Nancy de **105 patients** atteints d’ICFER (deux tiers d’origine ischémique) avec caillot, presque tous traités par antivitamine K, toutes les embolies symptomatiques sont survenues dans les **30 jours suivant le diagnostic** (Lemaître 2021).

La **fibrillation atriale (FA)** constitue un motif d’anticoagulation distinct, régi par ses propres scores (voir *Fibrillation atriale et insuffisance cardiaque* et *Maladies associées (reins, FA, valves, diabète)*). Le présent article concerne les personnes en **rythme sinusal** (rythme normal).`,
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

**Dans la dysfonction systolique plus généralement (Weinsaft 2008) :** dans une série de 2002–2004 portant sur 784 patients consécutifs avec **FEVG < 50 %** (moyenne **32 %**) explorés par la méthode IRM la plus sensible, un thrombus était retrouvé chez **7 %** des patients, plus fréquemment lorsque la FEVG était plus basse, l’origine ischémique et la **cicatrice plus étendue**. Il s’agissait toutefois d’une population hétérogène adressée en IRM, dont la part exacte de maladies ischémiques anciennes n’était pas précisée dans le résumé lu : ce chiffre de 7 % ne représente pas la prévalence en cardiomyopathie ischémique chronique.`,
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
- La prise de position **AHA 2022** propose également l’IRM lorsque l’ETT est équivoque ou la suspicion forte (par exemple après un AVC d’origine cardiaque suspectée). Aucune source consultée ne définit de protocole de dépistage périodique en cardiomyopathie ischémique chronique (voir *Examens et chiffres : NT-proBNP, taille du VG et cicatrice IRM*).

### Risque embolique (Velangi 2019)

Dans une étude appariée portant sur 157 patients avec thrombus VG à l’IRM suivis sur une médiane de **3,3 ans** :

- Risque d’AVC, d’accident ischémique transitoire (AIT) ou d’embolie systémique : **3,7 % par an** avec thrombus contre **0,8 % par an** chez des témoins de même âge et même FEVG sans caillot — soit un risque environ **quatre fois plus élevé** (**HR 3,99**, IC 95 % : 1,54–10,35).
- Ce surrisque est survenu malgré une prise en charge antithrombotique contemporaine : **89 %** des patients avec thrombus avaient été anticoagulés après la découverte (environ **90 %** sous warfarine), et seuls **18** ne l’étaient pas, effectif trop faible pour évaluer statistiquement l’effet du traitement.
- Les thrombus visibles **uniquement à l’IRM** (non vus à l’ETT) comportaient un risque comparable à ceux vus sur les deux examens : un petit caillot n’est pas nécessairement anodin.`,
    },
    {
      headingFr: 'La forme du caillot change-t-elle le risque ?',
      bodyMarkdownFr: `Les comptes rendus d’ETT ou d’IRM qualifient souvent un thrombus de **mobile** (des fragments bougent avec le flux sanguin), **protrusif** (faisant saillie dans la cavité, parfois pédiculé) ou **mural / plat** (plaqué contre la paroi). Les caillots anciens sont parfois décrits comme **organisés** ou **calcifiés**.

### Ce que montraient les anciennes études échographiques (1984–1999)

Plusieurs petites études, surtout après infarctus antérieur aigu, ont comparé les caractéristiques des caillots selon la survenue ou non d’une embolie :

| Étude | Population | Constat principal |
|---|---|---|
| **Visser 1985** | 119 patients avec caillot post-infarctus ; 26 embolies | Caillot mobile chez **58 %** avec embolie contre **3 %** sans ; protrusif **88 %** contre **18 %** |
| **Haugland 1984** | 60 patients avec caillot (dont 26 infarctus anciens) | Mobilité = marqueur le plus fort, protrusion en second ; taux d’embolies comparables après infarctus récent et ancien |
| **Stratton & Resnick 1987** | 85 patients avec caillot (**57 infarctus anciens**), suivi ~2 ans | Embolies **13 % contre 2 %** chez des témoins sans caillot ; protrusion et mobilité prédisaient chacune l’embolie |
| **Jugdutt 1989** | 115 patients avec caillot après premier infarctus | Mobilité **81 % contre 19 %** ; protrusion **non différente** (30 % vs 27 %) ; taille non différente |
| **Keren 1990** | 198 patients après infarctus aigu, 6 embolies | Seule la mobilité était liée aux embolies ultérieures |
| **Johannessen 1988** | 55 patients avec caillot après infarctus antérieur | Caillots protrusifs ou mobiles plus souvent emboligènes, mais l’**âge > 68 ans** était également prédictif ; taille et longueur ajoutaient une information |
| **Domenicucci 1999** | 222 patients après infarctus antérieur, suivi ~3 ans | Un caillot qui **changeait de forme** au fil du temps constituait le signal le plus fort, suivi de la protrusion puis de la mobilité |

Toutes vont dans le même sens, mais elles montrent une **association** plutôt qu’une prédiction fiable : elles étaient de petite taille, réalisées dans les années 1980 avec d’anciens échographes 2D sans ajustement multivarié, parfois sans certitude que l’imagerie ait précédé l’embolie (Visser 1985 ; Jugdutt 1989), et avec une utilisation inégale des anticoagulants (dans Jugdutt 1989, **26 %** des patients avec embolie étaient anticoagulés contre **63 %** sans embolie). La méta-analyse de **Vaitkus (1993)** portait sur la présence d’un caillot, non sur sa forme.

### Ce que montrent les études modernes (2020–2025)

- **RED VELVT (2020) :** chez **514 patients** porteurs d’un thrombus VG dans trois centres américains, ni la mobilité (**HR 1,52**, IC 95 % : 0,80–2,87) ni la protrusion (**HR 1,00**) ne prédisaient indépendamment un AVC ou une embolie ; un antécédent d’AVC le prédisait (**HR 2,07**). Toutefois, les caillots mobiles (16–20 %) ou protrusifs (5–10 %) étaient peu nombreux, laissant possible un manque de puissance.
- **Cohorte IRM allemande (Weberling 2024, 95 patients) :** ni la mobilité ni la protrusion ne corrélaient avec les embolies ou la mortalité (petite étude sans chiffres détaillés).
- **Petite étude ETT italienne (Sonaglioni 2021, 72 patients, âge moyen 77 ans) :** une mobilité du bord libre prédisait l’embolie (**HR 3,54**) via un indice Doppler tissulaire nouveau et non validé.
- **La disparition du caillot est un repère plus constant :** dans un registre prospectif italien de 154 patients (**Barbieri 2025**), la résolution du caillot était associée à moins d’embolies (**HR 0,36**) et moins de décès (**HR 0,36**), les caillots mobiles et plus petits disparaissant *plus* souvent. Dans une cohorte parisienne (**Lattuca 2020**), la régression du caillot était associée à une mortalité moindre (**HR 0,48**).

### Caillots plats, anciens ou calcifiés

Aucune étude identifiée ne fournit de données d’évolution clinique sur les caillots **calcifiés**. Les éléments les plus proches sont les suivants :

- Les caillots découverts longtemps après un infarctus continuaient d’emboliser (uniquement chez des personnes non anticoagulées) et **changeaient de forme (16 %) ou de mobilité (10 %)** sur les examens répétés (Stratton 1988).
- Dans une étude de 1990 utilisant une scintigraphie plaquettaire aujourd’hui abandonnée, les caillots captant activement les plaquettes embolisaient beaucoup plus (**21 % contre 3 %**) — mesurant l’activité biologique plutôt que la forme (Stratton & Ritchie 1990).
- La prise de position **AHA 2022 (texte intégral)** considère les caillots mobiles et protrusifs comme le principal facteur de risque embolique, mais souligne que les **caillots plats (muraux) ne sont pas assez bénins pour être ignorés** : jusqu’à **40 %** des embolies surviennent avec eux, et une cohorte IRM n’a trouvé aucune différence significative entre caillots plats et protrusifs. Elle suggère donc de traiter un caillot plat nouvellement découvert comme un caillot mobile. Pour un caillot plat qui **persiste** malgré un traitement adapté, surtout s’il est organisé ou calcifié, le risque est estimé probablement faible et l’arrêt est jugé « non déraisonnable » en décision partagée.

**En résumé :** un aspect mobile ou protrusif justifie une vigilance particulière, mais les études modernes n’ont pas confirmé son rôle prédictif indépendant, un caillot plat n’est pas démontré sans danger et l’aspect peut évoluer. Aucune recommandation gradée ne fonde sa décision sur la forme du caillot.`,
    },
    {
      headingFr: 'Prise en charge lorsqu’un thrombus VG est découvert',
      bodyMarkdownFr: `### Durée du traitement

- **ESC 2023 (SCA) :** une anticoagulation orale — antivitamine K telle que la **warfarine (*Coumadin*)** ou anticoagulant oral direct (**AOD**) — **doit être envisagée pendant 3 à 6 mois** en cas de thrombus VG confirmé (**Classe IIa, niveau C**), sans préférence imposée entre AVK et AOD. La durée précise dépend d’une **imagerie de contrôle** (ETT ou IRM), du risque hémorragique et du besoin concomitant d’antiagrégants plaquettaires.
- **Prise de position AHA 2022 (consensus non gradé, texte intégral) :**
  - Après un infarctus aigu : anticoagulation orale en règle générale pendant **3 mois**, avec contrôle d’imagerie à 3 mois (un examen redevenu normal pouvant rester faussement rassurant si le cœur demeure très affaibli). En cas de persistance, changer d’anticoagulant est raisonnable.
  - **Pour un caillot découvert longtemps après un infarctus ou en cardiomyopathie ischémique :** consensus pour **au moins 3 à 6 mois**, suivi d’une décision partagée sur une éventuelle poursuite indéfinie (selon les récidives, la récupération de la fonction cardiaque, le risque hémorragique et vos préférences), en l’absence de tout essai clinique dans cette situation.
  - La possibilité d’arrêter lorsque la FEVG dépasse 35 % est formulée uniquement pour les **cardiomyopathies non ischémiques**, non pour la cardiomyopathie ischémique.
  - **Arguments cités en faveur d’une poursuite :** infarctus antérieur avec apex restant immobile, caillot protrusif ou mobile, embolie suspectée, faible risque hémorragique, état prothrombotique ou récidive. **Arguments contre :** risque hémorragique élevé, antiagrégants associés, amélioration de la FEVG ou de la cinétique, ou caillot plat persistant (surtout organisé ou calcifié).
- Dans les études IRM de **Bulluck (2018)**, **88 %** des caillots avaient disparu au contrôle entre 3 et 6 mois.

### Après la disparition du caillot

- **Un examen normalisé n’offre pas une garantie absolue :** dans **RED VELVT (2020)**, **8,7 %** des patients dont le caillot avait disparu ont présenté un AVC ou une embolie dans les **30 jours** suivant l’imagerie rassurante.
- **Le caillot peut récidiver :** chez **115 patients** dont le caillot s’était résorbé, il est réapparu chez **24 %** après une médiane de **1,2 an** ; la présence d’un **anévrisme du VG** augmentait ce risque (**HR 2,59**), tandis que la poursuite de l’anticoagulation le réduisait (**HR 0,12** ; petite étude rétrospective, Zhou 2023).
- Dans la cohorte parisienne (**Lattuca 2020**), une anticoagulation de **plus de 3 mois** était associée à moins d’événements majeurs (**HR 0,42**), tout comme une FEVG ≥ 35 % (**HR 0,46** ; donnée observationnelle ne prouvant pas la causalité).
- L’impact d’un anévrisme sur la décision d’arrêt est détaillé dans *Anévrisme du ventricule gauche (cicatrice bombante après infarctus)*.

### AVK (warfarine) ou AOD (rivaroxaban, apixaban) ?

L’ensemble des essais randomisés a été regroupé en 2025 (**Magdy 2025**) : **7 petits essais totalisant 554 patients** (âge moyen 54 ans), presque tous après infarctus récent, suivis environ 3 mois.

| Critère à ~3 mois | AOD | Warfarine | Résultat |
|---|---|---|---|
| Disparition du thrombus | **86 %** | **81 %** | Pas de différence nette (**RR 1,01**, IC 95 % : 0,93–1,10) |
| Saignement majeur ou cliniquement pertinent | **2,8 %** | **4,4 %** | Pas de différence nette (**RR 0,75**, IC 95 % : 0,26–2,19) |
| AVC ou embolie | **2,2 %** | **3,4 %** | Pas de différence nette (**RR 0,75**, IC 95 % : 0,12–4,25) |

- La propre méta-analyse du groupe **AHA 2022** (21 études majoritairement observationnelles, **3 057 patients**) ne retrouvait pas non plus de différence entre AOD à pleine dose et warfarine sur les AVC/embolies (**OR 0,94**), la mortalité, la résolution ou les saignements.
- Les essais randomisés étaient ouverts, reposaient surtout sur l’ETT standard et restaient **trop petits** pour trancher formellement sur les AVC ou les saignements.
- **RIVAWAR (2025)**, le plus grand essai du lot : 261 patients dans un seul centre au Pakistan, quasi tous à FEVG ≤ 35 %, recevant **rivaroxaban (*Xarelto*) 20 mg une fois par jour** ou warfarine pendant 12 semaines. Résolution plus rapide à 4 semaines sous rivaroxaban (**20 % contre 8 %**), puis identique à 12 semaines (**95,8 % contre 96,6 %**). Les AVC ischémiques étaient numériquement plus fréquents sous rivaroxaban (**3,5 % contre 1,1 %**, non significatif). Limites : étude monocentrique, ETT seule, petit groupe warfarine, suivi limité à 3 mois et taux de disparition jugés inhabituellement élevés par certains commentateurs.
- **NO-LVT** (79 patients, rivaroxaban 20 mg vs warfarine) figure dans la méta-analyse (article original non lu). Une comparaison indirecte entre **apixaban (*Eliquis*)** et rivaroxaban (73 % contre 89 % de résolution) reste purement exploratoire.
- **Attention aux doses :** le traitement d’un thrombus VG utilise une **dose anticoagulante pleine** (par exemple rivaroxaban 20 mg/j dans RIVAWAR). La faible dose « vasculaire » de **2,5 mg deux fois par jour** (utilisée dans COMMANDER-HF, COMPASS et APERITIF) **ne traite pas un caillot constitué**.

### Association avec l’aspirine ou le clopidogrel

- Les recommandations **ESC 2023** soulignent l’absence d’essai randomisé sur l’association anticoagulant + antiagrégants dans le thrombus VG : le schéma doit être **individualisé**.
- Après la pose d’un stent chez une personne nécessitant un anticoagulant, le texte ESC 2023 privilégie une **trithérapie courte** (anticoagulant + aspirine + **clopidogrel** — *Plavix*), habituellement limitée à environ **1 semaine**, suivie d’une bithérapie (anticoagulant + clopidogrel). Le texte **AHA 2022** suggère de même **1 à 4 semaines** de trithérapie puis un anticoagulant (de préférence un AOD) associé à un inhibiteur P2Y12 (de préférence le clopidogrel), et rappelle que la double antiagrégation plaquettaire seule ne suffit ni à prévenir ni à traiter un caillot.
- Le coût hémorragique est notable : dans les études poolées (**Bulluck 2018**), le taux de saignement à 1–2 ans atteignait **8,8 %** sous trithérapie pour thrombus contre **0,5 %** sous double antiagrégation seule. Dans RIVAWAR, les deux bras recevaient aspirine + clopidogrel pendant 4 semaines puis clopidogrel seul (voir *Antiplaquettaires, bithérapie (DAPT) et protection gastrique*).`,
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
      bodyMarkdownFr: `| Situation | ESC (Europe) | États-Unis (AHA / ACC) | NICE NG106 (Royaume-Uni) |
|---|---|---|---|
| Cœur affaibli, rythme sinusal, sans thrombus ni autre indication | **Pas en routine :** le texte ESC 2026 (section 9.5) note l’absence de preuve en faveur d’une anticoagulation systématique sans FA (texte narratif, sans classe) | Anticoagulation sans indication spécifique : **Classe 3 : Absence de bénéfice (niveau B-R)** (AHA/ACC/HFSA 2022) | Envisager uniquement en cas d’embolie antérieure, d’**anévrisme du VG** ou de **thrombus intracardiaque** (recommandation 1.9.6) |
| Thrombus VG confirmé après infarctus | Anticoagulation **doit être envisagée 3–6 mois**, guidée par imagerie de contrôle (ESC 2023 SCA, **Classe IIa C**) | Traitement généralement conseillé, typiquement **~3 mois** (AHA 2022 non gradé ; repris en narratif par ACC/AHA 2025 SCA, section 9.4) | Envisager une anticoagulation (1.9.6) |
| Fibrillation atriale (FA) | Règles dédiées (voir *Fibrillation atriale et insuffisance cardiaque*) | Règles dédiées | Suivre le guide NICE FA (1.9.5) |

- Les recommandations **ESC 2026** relèvent que le risque d’AVC dans l’insuffisance cardiaque paraît élevé même en rythme sinusal (environ **2,0 pour 100 patients-années** contre **2,87** en FA), sans qu’une anticoagulation systématique n’apporte de bénéfice net. Elles renvoient le sujet du thrombus VG aux recommandations SCA.
- La recommandation **NICE 1.9.6** date de **2003** et a été reconduite telle quelle ; sa base initiale n’a pas été retrouvée, et les études indépendantes sur l’anévrisme du VG se contredisent (Lapeyre 1985 ; Lee 2015 ; Chen 2024 — voir *Anévrisme du ventricule gauche (cicatrice bombante après infarctus)*).
- Les recommandations américaines **ACC/AHA 2025 sur les SCA (section 9.4)** ont abandonné les classes de 2013 (caillot mural IIa C ; apex immobile IIb C) au profit d’un texte narratif renvoyant à l’AHA 2022 (environ 3 mois puis contrôle d’imagerie ; risque le plus élevé si infarctus IVA, FEVG < 30 % surtout avec anévrisme, et reperfusion tardive). La mise en garde AHA 2022 contre l’anticoagulation préventive dans la cardiomyopathie dilatée vise les formes non ischémiques.

### Limites des preuves

- **Données centrées sur le post-infarctus aigu :** la fréquence de formation de caillots des années plus tard dans un ventricule chronique, dilaté et cicatriciel reste mal connue ; les seules séries ciblant des infarctus anciens datent des années 1980 (Stratton & Resnick 1987 ; Stratton 1988).
- **Essais de traitement de petite taille :** environ 550 patients randomisés au total entre AOD et warfarine, suivis 3 mois, le plus souvent par ETT, ce qui reste insuffisant pour trancher formellement sur les AVC ou les saignements.
- **Niveau de preuve majoritairement C ou non gradé :** toutes les recommandations ESC sur le thrombus VG sont de niveau C (consensus d’experts) et le texte AHA 2022 est une prise de position scientifique.
- **Morphologie du caillot :** les petites études anciennes liaient mobilité/protrusion et embolie, mais la grande cohorte moderne RED VELVT (2020) n’a confirmé ni l’une ni l’autre en analyse indépendante, et aucune donnée d’évolution n’existe pour les caillots calcifiés.
- **Sources lues partiellement :** COMMANDER-HF, Weinsaft, APERITIF, Sacoransky et la plupart des études de morphologie et d’anévrisme ont été lus en résumé ; Velangi a bénéficié d’un complément texte intégral et la prise de position AHA 2022 a été lue en texte intégral.`,
    },
  ],
  relatedArticleSlugs: [
    'anevrisme-ventricule-gauche',
    'fibrillation-atriale-insuffisance-cardiaque',
    'antiplaquettaires-bitherapie-et-protection-gastrique',
    'cardiomyopathie-ischemique',
    'examens-et-chiffres',
    'medicaments-insuffisance-cardiaque',
    'maladies-associees',
    'cholesterol-et-prevention-secondaire',
    'occlusion-coronaire-chronique-cto',
    'interactions-complements-aliments-medicaments',
    'berberine-cholesterol-et-interactions',
    'assistance-circulatoire-lvad',
    'recommandations-comparees-esc-us-nice',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'glossaire-cardiologie',
    'comprendre-le-diagnostic',
  ],
  sources: [
    {
      label: 'Méta-analyses Bulluck (2018) et Sacoransky (2024), cohortes Weinsaft (2008), Velangi (2019) et Lemaître (2021)',
      detail: 'Incidence IRM du thrombus VG post-STEMI, sensibilité de l’ETT, risque embolique multiplié par 4, cohorte française ICFER et saignements sous trithérapie',
    },
    {
      label: 'Études de morphologie et récidive : Visser (1985), Haugland (1984), Stratton (1987/1988/1990), Jugdutt (1989), Domenicucci (1999), RED VELVT (2020), Lattuca (2020), Zhou (2023) et Barbieri (2025)',
      detail: 'Mobilité, protrusion, caillots plats/anciens, embolies après disparition (8,7 % à 30 j dans RED VELVT) et récidive à 24 % (anévrisme HR 2,59)',
    },
    {
      label: 'Méta-analyse Magdy (2025) et essais RIVAWAR (2025) et NO-LVT',
      detail: 'Comparaison AOD (rivaroxaban, apixaban) versus warfarine sur 7 essais randomisés (554 patients)',
    },
    {
      label: 'Essais APERITIF (2026), WARCEF (2012), COMMANDER-HF (2018) et sous-groupe IC de COMPASS (2019)',
      detail: 'Prévention post-STEMI antérieur et absence de bénéfice net d’une anticoagulation systématique en rythme sinusal sans thrombus',
    },
    {
      label: 'Recommandations ESC 2023 (SCA, tableau 14), ESC 2026 (IC, sec. 9.5), AHA 2022 (texte intégral), ACC/AHA 2025 (SCA, sec. 9.4), AHA/ACC/HFSA 2022 et NICE NG106 (2025)',
      detail: 'Imagerie, durée d’anticoagulation de 3–6 mois, critères de poursuite prolongée, trithérapie courte et contre-indication à l’anticoagulation de routine sans FA ni caillot',
    },
  ],
  disclaimerType: 'medical',
};
