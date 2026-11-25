import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'insuffisance-cardiaque-fevg-amelioree',
  sourceWikiPath: 'wiki/concepts/heart-failure-with-improved-ef.md',
  titleFr: 'Insuffisance cardiaque à FEVG améliorée (HFimpEF)',
  category: 'diagnostic',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'hfimpef',
    'récupération-fevg',
    'remodelage-inverse',
    'rechute',
    'pronostic',
    'rémission',
  ],
  aliases: [
    'HFimpEF',
    'HFrecEF',
    'Récupération FEVG',
    'Remodelage inverse',
    'FEVG améliorée',
    'Rémission',
    'Récupération IC',
    'Heart failure with improved EF',
  ],
  linkedModules: ['hfImpEf'],
  plainSummaryFr:
    "Sous traitement, certains cœurs retrouvent une meilleure contraction et la FEVG remonte : on parle d'insuffisance cardiaque à FEVG améliorée (HFimpEF). Dans la cardiomyopathie ischémique, une hausse modérée est plus réaliste qu'un retour complet à la normale, car une cicatrice d'infarctus ne redevient pas du muscle contractile. L'amélioration s'associe à une meilleure survie, mais le risque de rechute reste élevé : l'ESC 2026 parle de « rémission », la Deuxième définition universelle de 2026 distingue amélioration, rémission (FEVG normale et symptômes minimes) et récupération durable (rare), et toutes deux conseillent de poursuivre le traitement de fond.",
  sections: [
    {
      headingFr: 'Définitions',
      bodyMarkdownFr: `- **Définition universelle de 2021** (telle que résumée dans la revue HFimpEF) : une FEVG initiale **≤ 40 %**, suivie d'une hausse d'au moins **10 points** aboutissant à une seconde mesure **> 40 %**. Le terme « améliorée » (*improved*) a remplacé « récupérée » (*recovered*) car de nombreux patients rechutent.
- **Recommandations ESC 2026 :** une hausse absolue d'au moins **10 points** aboutissant à une FEVG **> 40 %**. Les recommandations qualifient cet état de **« rémission »**.
- **« Normalisation » :** notion plus stricte désignant un retour de la FEVG **au-dessus de 50 %**. Les études utilisant des seuils différents donnent des pourcentages qui ne sont pas directement comparables (analyse de normalisation STICH ; revue HFimpEF).
- **Deuxième définition universelle de 2026** (consensus AHA/ACC/ESC/WHF sur la terminologie, et non recommandation thérapeutique) : elle reprend la description d'une FEVG améliorée comme une FEVG antérieurement réduite qui augmente d'au moins 10 points pour dépasser 40 %, mais précise qu'une définition fondée sur la seule FEVG ne **suffit pas**, car les mesures varient et une cicatrice, des biomarqueurs élevés ou des symptômes persistent souvent. Elle décrit trois états distincts (Définition universelle 2026) :
  - **Amélioration :** la FEVG progresse, mais des anomalies structurelles ou cliniques subsistent.
  - **Rémission :** la FEVG est revenue à la normale, les symptômes sont minimes (classe NYHA I) et les marqueurs sanguins sont stables, mais une rechute demeure possible ; ce n'est pas une guérison définitive.
  - **Récupération :** la structure cardiaque, la fonction, les marqueurs sanguins et les symptômes restent normaux sur un suivi prolongé ; seule une minorité de personnes y parviennent.
- **Un même mot, deux sens différents.** L'ESC 2026 emploie « rémission » pour toute FEVG améliorée (hausse d'au moins 10 points au-dessus de 40 %). La Deuxième définition universelle réserve « rémission » à une FEVG redevenue normale avec symptômes minimes ; une hausse plus limitée y est appelée « amélioration ». Un compte rendu de cardiologie peut recourir à l'une ou l'autre terminologie (ESC 2026 ; Définition universelle 2026).`,
    },
    {
      headingFr: "À quelle fréquence la FEVG s'améliore-t-elle ?",
      bodyMarkdownFr: `| Population | Critère observé | Fréquence | Source |
|---|---|---|---|
| Toutes causes d'ICFER sous traitement recommandé | Amélioration (définitions variables) | Environ 10–40 % (une méta-analyse : ~23 %) | Revue HFimpEF |
| **Ischémique, FEVG ≤ 35 % (STICH)** | Gain ≥ 10 points à 24 mois | ~18 % (cité en seconde main) | Revue HFimpEF |
| **Ischémique, FEVG ≤ 35 % (STICH)** | Normalisation complète (> 50 %) à 4 mois | 18 sur 885 (~2 %) | Analyse de normalisation STICH |
| **Ischémique, FEVG ≤ 35 % (STICH)** | Normalisation complète (> 50 %) à 2 ans | 35 sur 634 (~5,5 %) | Analyse de normalisation STICH |
| Survivants de REVIVED-BCIS2 | Évolution de la FEVG dans les deux bras (stents et médicaments seuls) | Hausse d'environ 6 points | REVIVED-BCIS2 (commentaire des auteurs) |
| ICFER nouvellement diagnostiquée portant un gilet LifeVest (HF-OPT, 2024 ; causes ischémiques et non ischémiques) | FEVG > 35 % | 46 % à 90 jours, 68 % à 180 jours, 77 % à 360 jours ; franchissement des 35 % similaire entre ischémique et non ischémique, récupération complète plus fréquente si non ischémique | HF-OPT |
| Porteurs de gilet après angioplastie ou pontage (WEARIT-II Europe) | FEVG moyenne | 25,7 % puis 33,9 % vers 75 jours puis 35,8 % à 1 an | WEARIT-II Europe |
| FEVG toujours ≤ 35 % à 3 mois (PROLONG, monocentrique) | Passage tardif au-dessus de 35 % | 33 % globalement, mais seulement environ 4 sur ~25 patients ischémiques | PROLONG |
| **ICFER nouvellement diagnostiquée, registre néerlandais 2022–2024 (TITRATE-HF), cause ischémique** | FEVG médiane sur environ 1 an | 30 % → 40 % (gain médian 10 points) ; > 40 % chez 48 % ; passage de ≤ 35 % à > 35 % chez 61 % ; baisse de FEVG chez 12 % | TITRATE-HF |
| Même registre, cause non ischémique | FEVG médiane sur environ 1 an | 29 % → 45 % (gain médian 15 points) ; > 40 % chez 66,5 % ; passage de ≤ 35 % à > 35 % chez 72 % ; baisse de FEVG chez 6 % | TITRATE-HF |
| Même registre, ICFER ancienne (chronique ou récemment aggravée), toutes causes | FEVG médiane sur environ 1 an | 32 % → 35 % seulement | TITRATE-HF |

L'essai STICH a inclus des patients entre 2002 et 2007, avant l'arrivée du sacubitril/valsartan (*Entresto*) et des iSGLT2 : les taux de récupération sous quadrithérapie actuelle pourraient différer, possiblement à la hausse (analyse de normalisation STICH). Les registres de gilet défibrillateur portable (HF-OPT, WEARIT-II Europe, PROLONG) sont non contrôlés, en partie financés par le fabricant et antérieurs à l'usage généralisé des iSGLT2 ; ils divergent sur la fréquence d'une amélioration tardive au-delà de 3 mois dans les formes ischémiques (voir *Le gilet défibrillateur portable (LifeVest)*).

**Un éclairage récent en vie réelle selon la cause (TITRATE-HF).** Ce registre néerlandais a suivi **3 367 personnes** ayant une FEVG ≤ 40 % traitées avec les quatre classes médicamenteuses actuelles ; c'est l'une des rares études rapportant l'évolution de la FEVG séparément pour la cardiomyopathie ischémique (Malgie 2025, TITRATE-HF) :

- **Ensemble des patients nouvellement diagnostiqués ayant eu un examen de contrôle (752) :** la FEVG médiane est passée de 30 % à 45 %, et 60 % ont dépassé 40 %.
- **Cause ischémique (256) versus non ischémique (496) :** le gain typique était de 10 points contre 15 points ; 48 % contre 66,5 % ont dépassé 40 % ; parmi ceux débutant à 35 % ou moins, 61 % contre 72 % sont passés au-dessus de 35 %. La FEVG a diminué chez environ 1 patient ischémique sur 8 (12 %) contre 1 patient non ischémique sur 18 (6 %).
- **L'ICFER ancienne** s'est nettement moins améliorée : médiane passant seulement de 32 % à 35 %.
- **Un traitement plus précoce et plus complet allait de pair avec davantage de récupération.** Être sous les quatre piliers dès 6 semaines, un âge plus jeune, le sexe féminin, une cause non ischémique, un QRS plus fin et une FEVG initiale plus basse prédisaient un gain plus marqué. À 6 mois, recevoir au moins la moitié de la dose cible d'un inhibiteur du système rénine-angiotensine (IEC, ARA2 ou ARNI) ou d'un bêtabloquant, ou recevoir la quadrithérapie, s'associait à davantage de passages au-dessus de 40 %. Il s'agit toutefois d'associations : les patients tolérant mieux les traitements peuvent aussi être en meilleure santé globale.
- **Limites :** étude observationnelle ; seuls les patients en vie à 12 mois ayant eu une échographie de contrôle de routine (environ 56 % des nouveaux cas) étaient analysés ; une partie des gains peut refléter une CRT, une chirurgie ou un geste valvulaire.
- **Une divergence à retenir :** HF-OPT (ci-dessus) retrouvait un franchissement des 35 % similaire entre formes ischémiques et non ischémiques, alors que TITRATE-HF le retrouvait moins souvent en cas d'origine ischémique (61 % contre 72 %). Leurs protocoles diffèrent (porteurs de gilet versus registre général), si bien qu'aucune ne clôt le sujet.

Pour une personne atteinte de cardiomyopathie ischémique avec une FEVG autour de 35 %, ces données suggèrent qu'un gain de plusieurs points est fréquent sous traitement moderne, tandis que dépasser 40 % se produit chez environ la moitié des patients nouvellement diagnostiqués et moins souvent lorsque la maladie est ancienne. Ce sont des chiffres de groupe, et non un pronostic individuel.`,
    },
    {
      headingFr: 'Qui a le plus de chances de voir sa FEVG remonter ?',
      bodyMarkdownFr: `La revue HFimpEF recense les facteurs associés à une amélioration plus marquée :

- un âge plus jeune et le sexe féminin ;
- une cause **non** ischémique, sans antécédent d'infarctus ni de maladie coronaire ;
- une insuffisance cardiaque plus récente et un traitement de fond intensif ;
- peu ou pas de cicatrice à l'IRM cardiaque, des marqueurs sanguins moins élevés et de meilleurs indices de déformation myocardique (*strain*).

Si vous avez une cardiomyopathie ischémique avec un antécédent d'infarctus, plusieurs de ces facteurs orientent vers une hausse moyenne plus modeste. Il s'agit toutefois de tendances statistiques sur des groupes, jamais d'une prédiction individuelle. Les grands volumes ventriculaires gauches figurent dans la revue parmi les facteurs associés à la *rechute* après amélioration (ci-dessous) ; les notes de la revue ne les classaient pas parmi les prédicteurs initiaux d'amélioration.`,
    },
    {
      headingFr: "L'amélioration change-t-elle le pronostic ?",
      bodyMarkdownFr: `Plusieurs études associent une hausse de la FEVG à une meilleure survie :

- **STICH (patients ischémiques) :**
  - un gain ≥ 10 points à 24 mois était associé à une mortalité plus faible (HR 0,61) (revue HFimpEF) ;
  - une normalisation (> 50 %) à 2 ans était associée à une mortalité plus faible (HR 0,41) (analyse STICH) ;
  - en revanche, une normalisation précoce à 4 mois ne l'était pas (HR 0,93) : sur 11 patients normalisés à 4 mois et réévalués à 2 ans, seuls 3 étaient restés au-dessus de 50 % (analyse STICH).
- **Cohortes toutes causes confondues (revue HFimpEF) :**
  - dans une cohorte d'Emory, la mortalité ajustée à 3 ans était de 4,8 % en cas de HFimpEF contre 16,3 % en cas d'ICFER persistante ;
  - une méta-analyse de 9 études observationnelles a retrouvé une mortalité plus basse en cas de HFimpEF que d'ICFER (HR 0,44).

**Nuance essentielle :** ce sont des associations observationnelles. Des patients globalement en meilleure santé peuvent à la fois mieux récupérer et vivre plus longtemps, sans que la remontée de la FEVG soit nécessairement la cause directe du meilleur pronostic. Le risque reste par ailleurs supérieur à celui des personnes sans insuffisance cardiaque (revue HFimpEF).`,
    },
    {
      headingFr: 'Risque de rechute et pourquoi le traitement doit continuer',
      bodyMarkdownFr: `- **Les rechutes sont fréquentes.** Les études rapportent des taux de rechute de **28 à 80 %** même chez des patients qui poursuivent leur traitement. Dans une cohorte de patients non ischémiques ayant retrouvé une FEVG ≥ 50 %, la moitié étaient redescendus sous 50 % en 3,5 ans (revue HFimpEF).
- **Facteurs augmentant le risque de rechute :** maladie coronaire ou antécédent d'infarctus, fibrillation atriale (FA), volumes ventriculaires gauches plus élevés et NT-proBNP plus élevé au moment de la récupération. La poursuite des inhibiteurs du système rénine-angiotensine (IEC/ARA2/ARNI) avait un effet protecteur (revue HFimpEF).
- **Arrêt des médicaments (essai TRED-HF) :** cet essai pilote (51 patients) a évalué l'arrêt progressif du traitement chez des personnes ayant une cardiomyopathie dilatée **non ischémique** dont la FEVG était remontée à ≥ 50 % (TRED-HF ; ESC 2026) :
  - parmi ceux ayant arrêté les médicaments, **44 % ont rechuté dans les 6 mois**, contre aucun parmi ceux qui les ont poursuivis ; sur l'ensemble des deux phases, **40 %** ont rechuté ;
  - les rechutes étaient surtout détectées à l'imagerie et sur les prises de sang, et survenaient quelques semaines après l'arrêt du dernier médicament ;
  - les auteurs mettent en garde contre l'extrapolation directe de ces résultats à la cardiomyopathie ischémique (où le risque de rechute à l'arrêt serait encore plus préoccupant) ;
  - une revue systématique de 2025 cite un suivi plus prolongé de TRED-HF montrant **65 %** de rechutes au total ; ce chiffre provient d'une échéance plus tardive et d'un mode de décompte différent, sans contredire les 44 % et 40 % ci-dessus (non revérifié dans l'article de suivi original) (Luo 2025).
- **Ce que montrent les données plus larges sur l'arrêt des traitements (revue systématique de 2025, Luo et al.) :** cette revue n'a recensé que 7 petites études (552 patients au total), trop hétérogènes pour être regroupées en méta-analyse :
  - **Diurétiques de l'anse :** c'est la seule classe pour laquelle l'arrêt était étayé, par un essai en double aveugle de 188 patients (ReBIC-1) et une étude de 26 patients. Il s'agissait de patients stables en ICFER (FEVG d'environ 30 à 36 %, dont environ un tiers de cause ischémique dans ReBIC-1), et non de patients à FEVG améliorée. La nécessité de conserver un diurétique dépend de l'état de rétention hydrique et appartient à votre cardiologue.
  - **Ne conserver qu'un bêtabloquant (carvédilol) :** un essai pilote de 60 patients (CATHEDRAL-HF, environ 57 à 60 % de cause ischémique) n'a pas mis en évidence de différence significative après arrêt des autres médicaments, mais cet effectif est trop limité pour démontrer l'innocuité de cette stratégie.
  - **Arrêter ou diminuer les autres traitements semblait défavorable :** réduire le sacubitril/valsartan (*Entresto*) ou le remplacer par un IEC/ARA2 (77 patients) s'est accompagné d'une baisse de la FEVG et de davantage de décès ou d'hospitalisations ; arrêter la spironolactone (70 patients) a entraîné plus de rechutes ; tout arrêter (TRED-HF) a provoqué des rechutes fréquentes. Aucune étude n'a évalué l'arrêt isolé d'un IEC/ARA2 ou d'un bêtabloquant, et aucune donnée n'existe sur l'arrêt des iSGLT2.
  - **La cardiomyopathie ischémique est très peu étudiée :** TRED-HF et l'étude sur la spironolactone n'ont inclus que des cardiomyopathies dilatées non ischémiques, et aucune étude n'a rapporté les résultats des patients ischémiques séparément. Un registre post-infarctus exclu de la revue associait aussi l'arrêt des inhibiteurs du système rénine-angiotensine à un pronostic plus défavorable.
  - Les auteurs déconseillent d'arrêter les inhibiteurs du système rénine-angiotensine, les ARM ou les associations de médicaments tant que de grands essais n'existent pas, et décrivent une FEVG normalisée comme une rémission plutôt qu'une guérison.
- **La Deuxième définition universelle de 2026** souligne qu'une meilleure FEVG ne signifie pas que la maladie a disparu : les personnes ayant une FEVG améliorée peuvent présenter une nouvelle dysfonction ventriculaire gauche et ont besoin d'une poursuite des traitements recommandés ainsi que d'un suivi au long cours. Une fois une insuffisance cardiaque symptomatique diagnostiquée, ce diagnostic est généralement considéré comme permanent, même en cas d'amélioration (Définition universelle 2026).
- **Recommandations ESC 2026 :**
  - **poursuivre les médicaments de fond** à la dose maximale tolérée même si les symptômes disparaissent ou si la FEVG s'améliore (**Classe I**) ;
  - un allègement progressif ne peut être envisagé que chez des patients très sélectionnés dont la taille cardiaque, la fonction et les biomarqueurs se sont entièrement normalisés après traitement d'une cause réversible (**Classe IIb**).

N'interrompez jamais ni ne réduisez vous-même vos médicaments parce que votre FEVG s'est améliorée : toute discussion d'ajustement appartient exclusivement à votre cardiologue.`,
    },
  ],
  relatedArticleSlugs: [
    'comprendre-le-diagnostic',
    'essais-cliniques-cles',
    'fraction-dejection',
    'medicaments-insuffisance-cardiaque',
    'cardiomyopathie-ischemique',
    'revascularisation-pontage-stents',
    'dispositifs-cardiaques-dai-crt',
    'examens-et-chiffres',
    'gilet-defibrillateur-portable',
    'occlusion-coronaire-chronique-cto',
    'dysfonction-vg-asymptomatique-stade-b',
    'cellules-souches-et-therapies-regeneratives',
  ],
  sources: [
    { label: 'Revue HFimpEF (récupération et rechute)', detail: 'Définitions universelles, fréquences, facteurs prédictifs, survie et rechutes' },
    { label: 'Analyse de normalisation de la FEVG dans STICH', detail: 'Taux de normalisation propres aux causes ischémiques et lien avec la mortalité' },
    { label: "Recommandations ESC 2026 sur l'insuffisance cardiaque", detail: 'Définition HFimpEF, concept de rémission, poursuite du traitement (Classe I) et citation de TRED-HF' },
    { label: 'REVIVED-BCIS2', detail: 'Gain moyen de FEVG dans les deux bras sous traitement médical' },
    { label: 'Essai TRED-HF', detail: 'Rechutes après retrait thérapeutique dans la CMD non ischémique récupérée' },
    { label: 'Cleveland Clinic — Ischemic Cardiomyopathy', detail: "Irréversibilité des lésions cicatricielles liées au manque prolongé d'oxygène" },
    { label: 'HF-OPT (EHJ 2024), WEARIT-II Europe (2020) et PROLONG (JAHA 2017)', detail: 'Évolution de la FEVG sur un an chez les porteurs de gilet défibrillateur portable' },
    { label: 'Registre TITRATE-HF (Malgie et al., EJHF 2025)', detail: 'Texte intégral : registre néerlandais (3 367 patients) détaillant la récupération de FEVG à 1 an selon la cause ischémique vs non ischémique et IC récente vs chronique' },
    { label: 'Revue systématique sur le retrait thérapeutique (Luo et al., EJHF 2025)', detail: 'Texte intégral : 7 petites études (552 patients) sur la réduction ou l\'arrêt des médicaments après amélioration (ReBIC-1, CATHEDRAL-HF, suivi long terme de TRED-HF)' },
    { label: "Deuxième définition universelle de l'insuffisance cardiaque (2026)", detail: "Consensus AHA/ACC/ESC/WHF (texte intégral) : distinction amélioration / rémission / récupération et permanence du diagnostic" },
  ],
  disclaimerType: 'medical',
};
