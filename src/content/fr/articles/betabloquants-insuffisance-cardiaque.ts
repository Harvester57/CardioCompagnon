import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'betabloquants-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/concepts/beta-blockers-in-hfref.md',
  titleFr: 'Bêtabloquants dans l’ICFER ischémique',
  category: 'traitements',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'bêtabloquant',
    'bisoprolol',
    'carvédilol',
    'métoprolol-succinate',
    'nébivolol',
    'icfer',
    'merit-hf',
    'cibis-ii',
    'copernicus',
    'seniors',
    'capricorn',
    'fibrillation-atriale',
    'fréquence-cardiaque',
    'titration',
  ],
  aliases: [
    'Bêtabloquants',
    'Bêtabloquant insuffisance cardiaque',
    'Bisoprolol',
    'Cardensiel',
    'Carvédilol',
    'Kredex',
    'Métoprolol succinate',
    'Selozok',
    'Nébivolol',
    'Temerit',
  ],
  linkedModules: ['core', 'atrialFibrillation', 'stageB'],
  plainSummaryFr:
    "Un bêtabloquant ralentit le cœur et le protège contre l'excès d'adrénaline qui fatigue un muscle cardiaque affaibli. Dans de grands essais menés majoritairement chez des patients atteints de maladie coronaire, trois molécules précises — bisoprolol (Cardensiel), carvédilol (Kredex) et métoprolol succinate à libération prolongée (Selozok) — ont nettement réduit la mortalité. Le nébivolol (Temerit) est également cité en Europe. Ils sont débutés à faible dose et augmentés lentement, et ne doivent jamais être arrêtés brutalement. Les études récentes qui questionnent les bêtabloquants après un infarctus concernent uniquement les cœurs dont la pompe est restée normale, pas une FEVG autour de 35 %.",
  sections: [
    {
      headingFr: 'Comment les bêtabloquants protègent un cœur affaibli',
      depth: 'patient',
      bodyMarkdownFr: `Lorsque le cœur pompe moins efficacement, l'organisme libère davantage d'adrénaline et de noradrénaline. À long terme, cette stimulation permanente épuise le muscle cardiaque et favorise les troubles du rythme.

- **Effet protecteur :** le bêtabloquant freine ces hormones de stress, ralentit les battements et abaisse légèrement la tension artérielle. Il réduit à la fois le risque de mort subite et celui d'aggravation de l'insuffisance cardiaque.
- **Amélioration progressive de la pompe :** au fil des mois, le ventricule gauche peut légèrement diminuer de taille et la FEVG gagner quelques points (en rythme sinusal, gain moyen d'environ 4 à 5 points dans les analyses poolées, souvent un peu moindre en cas de cicatrice ischémique, mais avec un bénéfice de survie jugé comparable).
- **Rôle contre l'angine de poitrine :** un cœur qui bat plus lentement consomme moins d'oxygène ; le bêtabloquant est donc aussi le médicament anti-angineux de première intention dans la cardiomyopathie ischémique.

### Tous les bêtabloquants ne se valent pas dans l'ICFER

Les recommandations ne traitent pas les bêtabloquants comme une classe interchangeable :

- **Les trois molécules ayant prouvé une baisse de la mortalité :** **bisoprolol (*Cardensiel*)**, **carvédilol (*Kredex*)** et **métoprolol succinate à libération prolongée (*Selozok*)**.
- **Nébivolol (*Temerit*, *Nebilox*) :** présent dans le tableau européen ESC 2026 (avec une note rappelant qu'il a réduit un critère combiné décès ou hospitalisation CV chez les 70 ans et plus, mais pas la mortalité seule) ; non retenu dans le tableau américain.
- **À ne pas confondre :** le **métoprolol tartrate** (forme à action courte) a donné de moins bons résultats que le carvédilol ; l'**aténolol** ne dispose d'aucun essai pronostique et ne doit pas être utilisé dans l'ICFER ; le bucindolol n'est pas utilisé.`,
    },
    {
      headingFr: 'Doses cibles, effets secondaires et précautions pratiques',
      depth: 'patient',
      bodyMarkdownFr: `### Doses de départ et doses cibles de référence

| Médicament (DCI et exemples en France) | Dose de départ | Dose cible | Dose moyenne atteinte dans les essais |
|---|---|---|---|
| **Bisoprolol (*Cardensiel*)** | 1,25 mg × 1/j | 10 mg × 1/j | 8,6 mg/j |
| **Carvédilol (*Kredex*)** | 3,125 mg × 2/j | 25 mg × 2/j (50 mg × 2/j si > 85 kg selon ESC) | 37 mg/j |
| **Métoprolol succinate (*Selozok*)** | 12,5–25 mg × 1/j | 200 mg × 1/j | 159 mg/j |
| **Nébivolol (*Temerit*)** (ESC uniquement) | 1,25 mg × 1/j | 10 mg × 1/j | Non listée |

Les doses sont augmentées progressivement (toutes les 1 à 2 semaines selon l'ESC 2026) jusqu'à la dose cible ou la dose maximale tolérée. Les recommandations ne fixent **aucun chiffre universel de fréquence cardiaque cible** pour la titration (un objectif pratique de 60 à 69 bpm en journée relève d'un avis d'experts et non d'un grade officiel).

### Tolérance et points de vigilance

- **Fatigue et essoufflement transitoires :** une baisse temporaire de l'énergie ou une légère rétention d'eau peuvent survenir lors de l'initiation ou d'une hausse de dose ; elles s'atténuent habituellement en quelques semaines. **N'arrêtez jamais un bêtabloquant brutalement** (risque de rebond cardiaque ou coronaire).
- **Pouls lent et électrocardiogramme :** un ECG est recommandé avant le début ; le traitement n'est pas initié en cas de fréquence cardiaque inférieure à 50 bpm ou de bloc cardiaque sans pacemaker.
- **Tension artérielle :** une tension un peu basse sans malaise important ne justifie généralement pas de réduire un traitement protecteur ; votre équipe réévalue d'abord les autres médicaments abaissant la tension ou les diurétiques.
- **BPCO et asthme :** une BPCO ne contre-indique pas un bêtabloquant cardiosélectif (bisoprolol, métoprolol succinate, nébivolol) ; en cas d'asthme, l'ESC 2026 recommande une introduction très progressive sous surveillance rapprochée.
- **Troubles de l'érection :** souvent influencés par l'appréhension (effet nocebo) et de nombreux autres facteurs ; parlez-en à votre cardiologue plutôt que d'arrêter le traitement.

### Pourquoi les articles de presse post-infarctus ne concernent pas une FEVG à 35 %

Plusieurs essais récents (**REDUCE-AMI**, **REBOOT**, **BETAMI-DANBLOCK**) ont montré que les bêtabloquants n'apportent pas de bénéfice clair après un infarctus lorsque la fonction de pompe reste normale (FEVG ≥ 50 %). **Aucun de ces essais n'a inclus de personnes ayant une FEVG inférieure à 40 % ou une insuffisance cardiaque.** Pour une FEVG autour de 35 %, le bêtabloquant demeure un pilier indispensable.`,
    },
    {
      headingFr: 'Essais pivots, fibrillation atriale et débat dose contre fréquence',
      depth: 'evidence',
      bodyMarkdownFr: `Les grands essais pivots datent de la fin des années 1990 et du début des années 2000 (sur fond d'IEC et diurétique, avant ARM systématique, ARNI et iSGLT2). La plupart des chiffres ci-dessous proviennent de résumés et synthèses secondaires (constats d'intégrité provisoires).

### Tableau des essais pivots

| Essai | Population (n, FEVG, part ischémique) | Résultat principal | Applicabilité et intégrité |
|---|---|---|---|
| **MERIT-HF** (Lancet, 1999) | 3 991 ; NYHA II–IV, FEVG ≤ 40 % (moy. 28 %) ; ~65–66 % ischémiques | Mortalité **RR 0,66** (IC 0,53–0,81) ; mort subite **RR 0,59** ; décès par IC **RR 0,51** ; 64 % à dose cible | Directe (fond ancien) ; arrêté tôt (1 an) ; sous-groupe US post hoc HR 1,05 (interaction p = 0,22) |
| **CIBIS-II** (Lancet, 1999) | 2 647 ; NYHA III–IV, FEVG ≤ 35 % ; 50 % ischémiques | Mortalité **11,8 % vs 17,3 %**, **HR 0,66** (IC 0,54–0,81) ; hospitalisation IC **HR 0,64** ; 43–48 % à dose cible | Directe pour FEVG (NYHA III–IV) ; arrêté tôt (1,3 an) |
| **COPERNICUS** (NEJM, 2001) | 2 289 ; IC sévère euvolémique, FEVG < 25 % (moy. ~20 %) ; ~67 % ischémiques | Mortalité réduite de **35 %** (IC 19–48 %) ; moins d'arrêts que sous placebo ; 65 % à dose cible | Partielle (FEVG très basse) ; arrêté tôt (10,4 mois) |
| **SENIORS** (EHJ, 2005) | 2 128 âgés ≥ 70 ans ; FEVG moy. 36 % ; 68 % maladie coronaire | Décès ou hospitalisation CV **HR 0,86** (IC 0,74–0,99) ; mortalité seule **HR 0,88** (IC 0,71–1,08, NS) | Partielle (critère combiné, âgés) |
| **CAPRICORN** (Lancet, 2001) | 1 959 ; J3–J21 post-IDM, FEVG ≤ 40 % (moy. ~33 %) ; **100 % ischémiques** | Critère composite **HR 0,92** (NS) ; mortalité **12 % vs 15 %**, **HR 0,77** (IC 0,60–0,98, p = 0,031 sous le seuil ajusté après changement de critère) | Partielle (post-IDM aigu ; formellement neutre sur le composite) |
| **COMET** (Lancet, 2003) | 3 029 ; FEVG < 35 % ; 53 % ischémiques | Carvédilol vs métoprolol **tartrate** 50 mg × 2/j : mortalité **34 % vs 40 %**, **HR 0,83** (IC 0,74–0,93) | Comparateur tartrate jugé sous-dosé ; financement promoteur |
| **BEST** (NEJM, 2001) | 2 708 ; NYHA III–IV, FEVG ≤ 35 % ; 59 % ischémiques | Bucindolol : mortalité **30 % vs 33 %** (p = 0,13, NS) | Molécule non utilisée |
| **Cleland 2018 IPD** (EHJ, texte intégral) | 18 637 patients (11 essais) ; 66 % ischémiques | Rythme sinusal, mortalité : FEVG 26–34 % **HR 0,75** (0,64–0,88) ; FEVG 35–39 % **HR 0,67** (0,50–0,90) | Directe en rythme sinusal (strates post hoc) |

### Fibrillation atriale : la nuance majeure

- Dans les données individuelles poolées de 10 essais (**Kotecha IPD**), les bêtabloquants ont réduit la mortalité en rythme sinusal (**HR 0,73**, IC 0,67–0,80), mais **pas en fibrillation atriale** (**HR 0,97**, IC 0,83–1,14 ; interaction **p = 0,002** ; confirme **Cleland 2018** à FEVG 26–34 % : **HR 0,98**).
- *Limite :* sous-groupe non randomisé défini sur un ECG de départ unique. Les recommandations maintiennent les bêtabloquants pour le **contrôle de fréquence** en FA avec ICFER (**ESC 2026 Classe I, C** ; **ESC 2024 FA Classe I, B**), tout en qualifiant leur effet pronostique d'incertain.

### Essais post-infarctus à FEVG préservée (extrapolés)

- **Kristensen 2026 IPD** (17 801 post-IDM, FEVG ≥ 50 %, incluant **REDUCE-AMI** HR 0,96 et **REBOOT** HR 1,04) : décès, infarctus ou IC **HR 0,97** (IC 0,87–1,07). Dans **BETAMI-DANBLOCK** (FEVG ≥ 40 %), **HR 0,85** porté par les récidives d'infarctus sans baisse des décès ; dans **ABYSS**, l'arrêt tardif n'était pas démontré aussi sûr que la poursuite (**HR 1,16**). À l'inverse, **Rossello 2025 IPD** (1 885 post-IDM à FEVG 40–49 % sans IC) retrouvait **HR 0,75** (IC 0,58–0,97).

### Débat « fréquence cardiaque contre dose cible »

Aucun essai randomisé n'a comparé une titration guidée par la fréquence cardiaque à une titration guidée par la dose cible. Une fréquence basse atteinte prédisait une meilleure survie aussi bien sous placebo que sous bêtabloquant (**Kotecha IPD**), tout comme une dose atteinte élevée (facteur de confusion). Les recommandations privilégient l'atteinte de la dose maximale tolérée avant d'envisager l'ivabradine (en rythme sinusal si FC ≥ 70 bpm).`,
    },
    {
      headingFr: 'Recommandations comparées et zones d’incertitude',
      depth: 'evidence',
      bodyMarkdownFr: `### Comparatif des recommandations (au 26 novembre 2026)

| Question | ESC 2026 | AHA/ACC/HFSA 2022 | NICE NG106 (2025) |
|---|---|---|---|
| **ICFER symptomatique** | **I, A** (patients stables) | **1, A** (bisoprolol, carvédilol ou métoprolol succinate) | Proposer (sans système de classes) |
| **Titration vers doses cibles** | **I, C** (toutes les 1–2 semaines) | **1, A** (cibles) ; **2a, C-EO** (toutes les 1–2 semaines) | Contrôler pouls et tolérance à chaque palier |
| **Nébivolol** | Tableau de doses (note : mortalité non démontrée) | Non listé | Non précisé |
| **Stade B / post-IDM FEVG réduite** | **I, B1** (FEVG < 50 %) | **1** (IDM/SCA avec FEVG ≤ 40 %) | Non précisé |
| **ICFER avec FA (contrôle de fréquence)** | **I, C** (pronostic jugé incertain) ; ESC 2024 FA **I, B** | Bénéfice non retrouvé en FA (texte) | Non précisé |

### Lacunes ouvertes

- Aucun essai de bêtabloquant n'a été conduit sur un fond moderne associant ARNI et iSGLT2.
- Aucun hazard ratio isolé avec test d'interaction n'a été retrouvé pour le sous-groupe ischémique dans **MERIT-HF**, **CIBIS-II**, **COPERNICUS** ou **Cleland 2018** (tableau supplémentaire non consulté), bien que les essais aient inclus 50 à 67 % de patients ischémiques.
- Aucun essai randomisé dédié n'a testé les bêtabloquants sur la survie en ICFER avec fibrillation atriale.`,
    },
  ],
  relatedArticleSlugs: [
    'these-benefice-dai-sous-quadritherapie',
    'medicaments-insuffisance-cardiaque',
    'iec-ara2-et-arni-sacubitril-valsartan',
    'arm-steroidiens-spironolactone-eplerenone',
    'inhibiteurs-sglt2-insuffisance-cardiaque',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'fibrillation-atriale-insuffisance-cardiaque',
    'angor-et-medicaments-anti-angineux',
    'goutte-bpco-thyroide-et-autres-comorbidites',
    'medicaments-effets-secondaires-suivi',
    'dysfonction-vg-asymptomatique-stade-b',
  ],
  sources: [
    {
      label: 'Essais pivots : MERIT-HF (1999), CIBIS-II (1999), COPERNICUS (2001), SENIORS (2005), CAPRICORN (2001), BEST (2001), COMET (2003), REVERT (2007)',
      detail: 'Résultats de mortalité, doses cibles, comparaisons entre molécules et changement de critère dans CAPRICORN (résumés et synthèses)',
    },
    {
      label: 'Analyses poolées individuelles : Cleland et al. (EHJ, 2018, texte intégral), Kotecha et al. (2014/2017) et McAlister (2009)',
      detail: 'Effet selon la tranche de FEVG, le rythme (sinusal vs fibrillation atriale), la fréquence cardiaque et la dose atteinte',
    },
    {
      label: 'Essais post-infarctus à FEVG préservée : REDUCE-AMI (2024), REBOOT (2025), BETAMI-DANBLOCK (2025), ABYSS (2024), Kristensen (2026) et Rossello (2025)',
      detail: 'Absence de bénéfice systématique à FEVG ≥ 50 % et exclusion systématique des FEVG < 40 %',
    },
    {
      label: 'Recommandations ESC 2026 (IC, Tableau 5 et 11, stade B), ESC 2024 (FA et SCC), AHA/ACC/HFSA 2022, NICE NG106 (2025), HFA Skouri (2025) et Volterrani (2024)',
      detail: 'Grades de recommandation, posologies, conduite en cas de BPCO, d’asthme ou de tension artérielle basse',
    },
  ],
  disclaimerType: 'medical',
};
