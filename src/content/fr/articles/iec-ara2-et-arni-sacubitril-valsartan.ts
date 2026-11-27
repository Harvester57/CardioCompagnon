import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'iec-ara2-et-arni-sacubitril-valsartan',
  sourceWikiPath: 'wiki/concepts/ace-inhibitors-arbs-and-arni.md',
  titleFr: 'IEC, ARA2 et ARNI (sacubitril/valsartan)',
  category: 'traitements',
  readingTier: 'deep_dive',
  asOf: '2026-11-27',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'iec',
    'ara2',
    'arni',
    'sacubitril-valsartan',
    'énalapril',
    'ramipril',
    'candésartan',
    'valsartan',
    'paradigm-hf',
    'solvd',
    'post-infarctus',
    'angiœdème',
    'titration',
    'traitement-de-fond',
  ],
  aliases: [
    'IEC',
    'Inhibiteurs de l’enzyme de conversion',
    'ARA2',
    'Sartans',
    'ARNI',
    'Sacubitril/valsartan',
    'Entresto',
    'Bloqueurs du SRAA',
    'Ramipril',
    'Énalapril',
  ],
  linkedModules: ['core', 'ckd', 'stageB'],
  plainSummaryFr:
    "Les IEC (ramipril, énalapril…), les ARA2 (candésartan, valsartan) et l'ARNI sacubitril/valsartan (Entresto) forment le premier pilier du traitement de l'insuffisance cardiaque à FEVG réduite. Ils calment un système hormonal qui resserre les vaisseaux et fatigue le cœur. Dans de grands essais incluant majoritairement des personnes atteintes de maladie coronaire, ils ont aidé à vivre plus longtemps et à éviter les hospitalisations. Les doses augmentent progressivement sous surveillance de la tension, des reins et du potassium. Un IEC et un ARNI ne doivent jamais être associés : un intervalle libre d'au moins 36 heures est indispensable.",
  sections: [
    {
      headingFr: 'Comment agit cette famille de médicaments',
      depth: 'patient',
      bodyMarkdownFr: `Les trois sous-familles agissent sur le **système rénine-angiotensine**, un ensemble d'hormones qui resserre les vaisseaux sanguins, retient le sel et pousse un cœur affaibli à se dilater davantage :

- **Les IEC** (inhibiteurs de l'enzyme de conversion : ramipril *Triatec*, énalapril *Renitec*, lisinopril *Zestril*, périndopril *Coversyl*, captopril, trandolapril) empêchent l'organisme de fabriquer l'angiotensine II. Les vaisseaux se relâchent et le travail du cœur diminue.
- **Les ARA2** (antagonistes des récepteurs de l'angiotensine II : candésartan *Atacand*, valsartan *Tareg*, losartan *Cozaar*) bloquent le récepteur sur lequel agit cette hormone. Ils provoquent beaucoup moins de toux sèche et d'angiœdème que les IEC car ils ne freinent pas la dégradation de la bradykinine ; ils servent d'option de repli si ni un IEC ni un ARNI ne sont tolérés.
- **L'ARNI** (sacubitril/valsartan, *Entresto*) associe un ARA2 (valsartan) au sacubitril, qui bloque une enzyme appelée néprilysine. Cela renforce des hormones naturelles (peptides natriurétiques) aidant l'organisme à éliminer le sel et l'eau.

**Pourquoi ne jamais associer un IEC et un ARNI :** l'enzyme de conversion et la néprilysine éliminent toutes deux la bradykinine. Bloquer les deux en même temps augmente nettement le risque de gonflement brutal du visage ou de la gorge (**angiœdème**). Lors du passage d'un IEC à l'ARNI, un délai d'au moins **36 heures** après la dernière prise d'IEC est impératif (ce délai n'est pas nécessaire après un ARA2).`,
    },
    {
      headingFr: 'Doses cibles, titration et suivi pratique',
      depth: 'patient',
      bodyMarkdownFr: `Les médicaments sont instaurés à faible dose puis augmentés par paliers (**titration**) — en principe au moins toutes les **1 à 2 semaines** selon l'ESC 2026 (ou doublement toutes les **2 à 4 semaines** pour l'ARNI selon la tolérance) — jusqu'à la dose cible ou la dose maximale bien tolérée. Il n'existe pas d'ordre imposé entre les quatre piliers, et il n'est pas nécessaire d'atteindre la dose maximale d'un pilier avant d'introduire les suivants.

### Doses de départ et doses cibles de référence

| Médicament (DCI et exemples en France) | ESC 2026 : départ -> cible | États-Unis (AHA 2022) : départ -> cible |
|---|---|---|
| **Sacubitril/valsartan (*Entresto*)** | 49/51 mg × 2/j (option 24/26 mg) -> 97/103 mg × 2/j | 24/26–49/51 mg × 2/j -> 97/103 mg × 2/j |
| **Énalapril (*Renitec*)** | 2,5 mg × 2/j -> 10–20 mg × 2/j | 2,5 mg × 2/j -> 10–20 mg × 2/j |
| **Ramipril (*Triatec*)** | 1,25–2,5 mg × 2/j -> 5 mg × 2/j | 1,25 mg/j -> 10 mg/j |
| **Lisinopril (*Zestril*)** | 2,5–5 mg/j -> 20–35 mg/j | 2,5–5 mg/j -> 20–40 mg/j |
| **Captopril** | 6,25 mg × 3/j -> 50 mg × 3/j | Identique |
| **Trandolapril** | 0,5 mg/j -> 4 mg/j | Non listé dans la source lue |
| **Candésartan (*Atacand*)** | 4 mg/j -> 32 mg/j | 4–8 mg/j -> 32 mg/j |
| **Valsartan (*Tareg*)** | 40 mg × 2/j -> 160 mg × 2/j | 20–40 mg × 2/j -> 160 mg × 2/j |
| **Losartan (*Cozaar*)** | (12,5) 25–50 mg/j -> 150 mg/j | 25–50 mg/j -> 150 mg/j |

La dose de départ réduite de sacubitril/valsartan (24/26 mg × 2/j) est prévue en cas d'antécédent d'hypotension symptomatique, d'absence de traitement préalable par IEC/ARA2 ou de DFGe entre 30 et 60 mL/min/1,73 m². Les recommandations ESC 2026 préconisent de **ne jamais arrêter brutalement** un IEC ou un ARNI et de maintenir le traitement à la dose maximale tolérée même si votre FEVG s'améliore.

### Effets secondaires et surveillance

- **Tension artérielle :** des étourdissements ou une tension plus basse sont plus fréquents au début sous ARNI, mais le bénéfice du traitement reste présent quelle que soit la tension de départ, et l'arrêt définitif pour hypotension reste rare. L'ESC 2026 recommande la prudence si la pression systolique est inférieure à **100 mmHg**.
- **Reins (créatinine et DFGe) :** une petite hausse initiale de la créatinine est souvent attendue et transitoire. Les prises de sang sont faites avant le début, **1 à 2 semaines** après chaque palier, puis tous les **3 à 6 mois** (environ tous les 4 mois).
- **Potassium :** surveillé aux mêmes bilans ; votre médecin vérifie l'absence d'autres facteurs (substituts de sel riches en potassium, AINS).
- **Toux sèche :** typique des IEC, nettement moins fréquente sous ARA2 ou ARNI.
- **Angiœdème (gonflement des lèvres, de la langue ou de la gorge) :** rare mais constitue une **urgence vitale (appelez le 15 SAMU, le 112 ou le 114 par SMS)**. Il survient plus souvent durant les 3 premiers mois, environ 4 fois plus souvent chez les personnes noires et environ 50 % plus souvent chez les femmes.
- **Grossesse :** IEC, ARA2 et ARNI sont **déconseillés pendant la grossesse**.`,
    },
    {
      headingFr: 'Essais pivots, données ischémiques et post-infarctus',
      depth: 'evidence',
      bodyMarkdownFr: `La plupart des essais historiques ont été conduits avant la généralisation des iSGLT2 et reposent pour les détails ci-dessous sur des résumés et synthèses secondaires (textes intégraux NEJM/Lancet non accessibles ; constats d'intégrité provisoires).

### Essais pivots dans l'insuffisance cardiaque chronique

| Essai | Population (n, FEVG, part ischémique) | Traitement de fond de l'époque | Résultat principal | Applicabilité ICFER ischémique |
|---|---|---|---|---|
| **CONSENSUS** (1987) | 253, NYHA IV ; FEVG non mesurée ; ~72 % coronariens | 1985–1986 ; bêtabloquant ~4 %, spironolactone ~50 % | Mortalité à 6 mois : **26 % vs 44 %** (-40 %, p = 0,002) ; arrêt précoce sans règle formelle | Indirecte |
| **SOLVD-Treatment** (1991) | 2 569 symptomatiques ; FEVG ≤ 35 % (moy. 25 %) ; ~71 % ischémiques | 1986–1991 ; bêtabloquant ~7,5 % | Mortalité **35,2 % vs 39,7 %** (-16 %, p = 0,0036) ; décès ou hospitalisation IC -26 % | Partielle (fond ancien) |
| **SOLVD-Prevention** (1992) | 4 228 sans traitement IC ; FEVG ≤ 35 % (moy. 28 %) ; ~83 % ischémiques | Bêtabloquant 24 % | Mortalité non significative en cours d'essai (-8 %, p = 0,30) ; décès ou IC -29 % ; gain de survie observationnel à 12 ans | Partielle (stade B) |
| **CHARM-Alternative** (2003) | 2 028 intolérants aux IEC (toux 72 %) ; FEVG ≤ 40 % (moy. 30 %) ; ~68 % ischémiques | Bêtabloquant 55 %, spironolactone 24 % | Décès CV ou hospitalisation IC **33 % vs 40 %** (**HR 0,77**, IC 0,67–0,89 ; HR ajusté 0,70) | Partielle (repli ARA2) |
| **Val-HeFT** (2001) | 5 010 ; FEVG < 40 % (moy. 27 %) ; ~57 % ischémiques | IEC 93 %, bêtabloquant ~35 % | Mortalité inchangée (**RR 1,02**) ; morbidité/mortalité -13 % (hospitalisations) | Partielle (ARA2 sur IEC, abandonné) |
| **PARADIGM-HF** (2014) | 8 399 analysés ; NYHA II–IV, FEVG ≤ 35 % ; **60 % ischémiques** | Bêtabloquant 93 %, ARM 52 % ; sans iSGLT2 ; phase de pré-inclusion active | Décès CV ou hospitalisation IC **21,8 % vs 26,5 %** (**HR 0,80**, IC 0,73–0,87) ; mortalité **17,0 % vs 19,8 %** (**HR 0,84**) ; arrêt précoce | Partielle (la plus proche ; pré-iSGLT2) |
| **PARADIGM-HF par étiologie** (2019, post hoc) | 5 036 ischémiques vs 3 363 non ischémiques | Identique | Bénéfice de l'ARNI identique quelle que soit la cause (p d'interaction = 0,11 ; décès CV p = 0,55) | Directe (sous-groupe post hoc) |
| **PIONEER-HF** (2019) | 881 stabilisés à l'hôpital ; FEVG ≤ 40 % ; 34 % IC de novo | États-Unis 2015–2018 | Baisse du NT-proBNP plus forte sous ARNI (ratio **0,71**, IC 0,63–0,81) ; événements cliniques exploratoires | Partielle (critère biologique) |

**Points d'intégrité :** **PARADIGM-HF** a été arrêté précocement à 27 mois pour bénéfice (risque de surestimation) ; environ **1 patient sur 5** a quitté la phase de pré-inclusion avant randomisation (l'origine ischémique prédisait cet abandon) ; l'énalapril était dosé à 10 mg × 2/j (cible SOLVD, mais moitié de la dose maximale) ; données gérées par le promoteur. Dans **PARADIGM-HF**, l'hypotension symptomatique a touché **14,0 % vs 9,2 %** (arrêt ~1 %), la créatinine ≥ 221 µmol/L (25 mg/L) **3,3 % vs 4,5 %**, le potassium > 6,0 mmol/L **4,3 % vs 5,6 %**, la toux **11,3 % vs 14,3 %**, et l'angiœdème **0,45 % vs 0,24 %** (sans atteinte respiratoire ; chez les participants noirs **2,3 % vs 0,5 %** ; méta-analyse 2024 : angiœdème sévère **1,5 % vs 0 %** chez les patients noirs, sans différence d'efficacité). Le signal négatif de triple blocage dans **Val-HeFT** (post hoc) n'a pas été reproduit dans **CHARM-Added**.

### Essais précoces après infarctus du myocarde (100 % ischémiques)

| Essai | Population | Résultat | Applicabilité ICFER chronique |
|---|---|---|---|
| **SAVE** (captopril, 1992) | 2 231, J3–J16, FEVG ≤ 40 % (moy. 31 %), sans IC patente | Mortalité **20 % vs 25 %** (-19 %, p = 0,019) ; IC sévère -37 % ; récidive d'infarctus -25 % | Partielle (post-IDM aigu) |
| **AIRE** (ramipril, 1993) | ~2 006, J2–J10, IC clinique | Mortalité **17 % vs 23 %** (-27 %, IC 11–40 %) ; maintien à 5 ans | Partielle |
| **TRACE** (trandolapril, 1995) | 1 749, J3–J7, index cinétique ≤ 1,2 (~FEVG ≤ 35 %) | Mortalité **34,7 % vs 42,3 %** (**RR 0,78**, IC 0,67–0,91) | Partielle |
| **VALIANT** (valsartan vs captopril, 2003) | 14 703, signes d'IC et/ou FEVG ≤ 35–40 % | Valsartan équivalent au captopril sur la mortalité ; l'association des deux ajoute des effets indésirables sans gain | Partielle |
| **PARADISE-MI** (ARNI vs ramipril, 2021) | 5 661, J0,5–J7, FEVG ≤ 40 % et/ou congestion (moy. 37 %), sans IC chronique préalable | Critère principal **neutre** : décès CV ou IC **11,9 % vs 13,2 %** (**HR 0,90**, IC 0,78–1,04, p = 0,17) | Partielle (IDM aigu, non ICFER établie) |`,
    },
    {
      headingFr: 'Recommandations comparées, seuils cliniciens et limites',
      depth: 'evidence',
      bodyMarkdownFr: `### Comparatif des recommandations (au 26 novembre 2026)

| Question | ESC 2026 | AHA/ACC/HFSA 2022 | NICE NG106 (2025) |
|---|---|---|---|
| **Première intention en ICFER symptomatique** | IEC **ou** ARNI : **I, A** | ARNI : **1, A** ; IEC si ARNI non faisable : **1, A** | Proposer un IEC avec les 3 autres piliers |
| **Relais IEC/ARA2 -> ARNI** | Si toujours symptomatique : **I, B1** | NYHA II–III sous IEC/ARA2 toléré : **1, B-R** | Envisager si symptômes persistants aux doses max tolérées (facteur coût) |
| **Place des ARA2** | Uniquement si IEC et ARNI non tolérés : **I, A** (aucun ARA2 n'a réduit la mortalité toutes causes seule) | Si IEC non toléré et ARNI non faisable : **1, A** | Envisager après angiœdème sous IEC ; sinon proposer ARNI |
| **Délai 36 h IEC -> ARNI** | Exigé (texte) | **3 : Danger, B-R** | Au moins 36 h (texte) |
| **Antécédent d'angiœdème** | Pas de grade formel retrouvé | ARNI ou IEC : **3 : Danger, C-LD** | ARA2 envisageable après angiœdème sous IEC |
| **Stade B (asymptomatique, FEVG ≤ 40 %)** | IEC (ARA2 si intolérance) : **I, A** ; pas d'ARNI | IEC : **1, A** ; pas d'ARNI | Non détaillé |

### Repères cliniciens de surveillance biologique

- **Créatinine :** l'ESC 2026 accepte une hausse **< 50 %** tant que le DFGe reste **> 15 mL/min/1,73 m²** ; le consensus britannique (Clark 2019) propose de poursuivre sous +30 %, réévaluer entre +30 et +50 %, et suspendre temporairement au-delà de +50 % (NICE : suivre les protocoles locaux au-delà de +50 %).
- **Potassium :** ESC 2026 appelle à la prudence au-dessus de **5,2 mmol/L** et à une réduction/pause temporaire au-dessus de **5,5–6,0 mmol/L**.

### Limites et zones d'incertitude

- Aucun essai randomisé n'a comparé ARNI et IEC sur un traitement de fond incluant déjà un iSGLT2.
- Aucun hazard ratio isolé avec intervalle de confiance n'est publié pour le seul sous-groupe ischémique (dans **PARADIGM-HF**, l'estimation figure uniquement sur un graphique).
- Une méta-analyse critique (Rindone 2024, résumé) suggère que l'avantage de l'ARNI pourrait diminuer face à un IEC à dose maximale.`,
    },
  ],
  relatedArticleSlugs: [
    'these-benefice-dai-sous-quadritherapie',
    'medicaments-insuffisance-cardiaque',
    'betabloquants-insuffisance-cardiaque',
    'arm-steroidiens-spironolactone-eplerenone',
    'inhibiteurs-sglt2-insuffisance-cardiaque',
    'medicaments-effets-secondaires-suivi',
    'maladie-renale-insuffisance-cardiaque',
    'tension-arterielle-insuffisance-cardiaque',
    'dysfonction-vg-asymptomatique-stade-b',
    'chirurgie-soins-dentaires-et-jours-de-maladie',
    'essais-cliniques-cles',
    'recommandations-comparees-esc-us-nice',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 (sections 6.1.4, Tableau 5, Tableau 11, stade B), AHA/ACC/HFSA 2022 et NICE NG106 (2025)',
      detail: 'Grades de recommandation IEC/ARA2/ARNI, doses cibles (dont reproduction Newman 2024), délai de 36 h et seuils biologiques',
    },
    {
      label: 'Essais IEC et ARA2 : CONSENSUS (1987), SOLVD-Treatment (1991), SOLVD-Prevention (1992/2003), SAVE, AIRE, TRACE, VALIANT, Val-HeFT, CHARM-Alternative',
      detail: 'Résultats de mortalité et d’hospitalisation, part ischémique et suivi post-infarctus (résumés et synthèses secondaires)',
    },
    {
      label: 'Essais ARNI : PARADIGM-HF (2014, analyses par étiologie 2019 et par PAS Böhm 2017), PIONEER-HF (2019), PARADISE-MI (2021)',
      detail: 'Comparaison sacubitril/valsartan vs énalapril ou ramipril, sous-groupe ischémique, tolérance tensionnelle et angiœdème',
    },
    {
      label: 'Synthèses de sécurité et d’implémentation : Volterrani (2024), Clark (2019), OCTAVE et méta-analyses ARNI (Evbayekha 2025, Rindone 2024)',
      detail: 'Incidence de l’angiœdème selon l’origine ethnique, calendrier des bilans sanguins et critiques de dose comparatrice',
    },
  ],
  disclaimerType: 'medical',
};
