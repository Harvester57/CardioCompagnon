import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'insuffisance-cardiaque-fevg-amelioree',
  sourceWikiPath: 'wiki/concepts/heart-failure-with-improved-ef.md',
  titleFr: 'Insuffisance cardiaque à FEVG améliorée (HFimpEF)',
  category: 'diagnostic',
  asOf: '2026-11-24',
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
    'Heart failure with improved EF',
  ],
  linkedModules: ['hfImpEf'],
  plainSummaryFr:
    "Sous traitement, certains cœurs retrouvent une meilleure contraction et la FEVG remonte : on parle d'insuffisance cardiaque à FEVG améliorée (HFimpEF). Dans la cardiomyopathie ischémique, une hausse modérée est plus réaliste qu'un retour complet à la normale, car une cicatrice d'infarctus ne redevient pas du muscle contractile. Lorsque la FEVG s'améliore, cela s'associe à une meilleure survie, mais le cœur reste fragile : les recommandations parlent de « rémission » plutôt que de guérison et conseillent de maintenir le traitement de fond.",
  sections: [
    {
      headingFr: 'Définitions',
      bodyMarkdownFr: `- **Définition universelle de 2021** (telle que résumée dans la revue HFimpEF) : une FEVG initiale **≤ 40 %**, suivie d'une hausse d'au moins **10 points** aboutissant à une seconde mesure **> 40 %**. Le terme « améliorée » (*improved*) a remplacé « récupérée » (*recovered*) car de nombreux patients rechutent.
- **Recommandations ESC 2026 :** une hausse absolue d'au moins **10 points** aboutissant à une FEVG **> 40 %**. Les recommandations qualifient cet état de **« rémission »**.
- **« Normalisation » :** notion plus stricte désignant un retour de la FEVG **au-dessus de 50 %**. Les études utilisant des seuils différents donnent des pourcentages qui ne sont pas directement comparables (analyse de normalisation STICH ; revue HFimpEF).`,
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

L'essai STICH a inclus des patients entre 2002 et 2007, avant l'arrivée du sacubitril/valsartan (*Entresto*) et des iSGLT2 : les taux de récupération sous quadrithérapie actuelle pourraient différer, possiblement à la hausse (analyse de normalisation STICH). Les registres de gilet défibrillateur portable (HF-OPT, WEARIT-II Europe, PROLONG) sont non contrôlés, en partie financés par le fabricant et antérieurs à l'usage généralisé des iSGLT2 ; ils divergent sur la fréquence d'une amélioration tardive au-delà de 3 mois dans les formes ischémiques (voir *Le gilet défibrillateur portable (LifeVest)*).`,
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
  - les auteurs mettent en garde contre l'extrapolation directe de ces résultats à la cardiomyopathie ischémique (où le risque de rechute à l'arrêt serait encore plus préoccupant).
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
  ],
  sources: [
    { label: 'Revue HFimpEF (récupération et rechute)', detail: 'Définitions universelles, fréquences, facteurs prédictifs, survie et rechutes' },
    { label: 'Analyse de normalisation de la FEVG dans STICH', detail: 'Taux de normalisation propres aux causes ischémiques et lien avec la mortalité' },
    { label: "Recommandations ESC 2026 sur l'insuffisance cardiaque", detail: 'Définition HFimpEF, concept de rémission, poursuite du traitement (Classe I) et citation de TRED-HF' },
    { label: 'REVIVED-BCIS2', detail: 'Gain moyen de FEVG dans les deux bras sous traitement médical' },
    { label: 'Essai TRED-HF', detail: 'Rechutes après retrait thérapeutique dans la CMD non ischémique récupérée' },
    { label: 'Cleveland Clinic — Ischemic Cardiomyopathy', detail: "Irréversibilité des lésions cicatricielles liées au manque prolongé d'oxygène" },
    { label: 'HF-OPT (EHJ 2024), WEARIT-II Europe (2020) et PROLONG (JAHA 2017)', detail: 'Évolution de la FEVG sur un an chez les porteurs de gilet défibrillateur portable' },
  ],
  disclaimerType: 'medical',
};
