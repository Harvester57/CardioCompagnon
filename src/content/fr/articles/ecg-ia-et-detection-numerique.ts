import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'ecg-ia-et-detection-numerique',
  sourceWikiPath: 'wiki/concepts/ai-ecg-and-digital-detection.md',
  titleFr: 'ECG par intelligence artificielle et détection numérique d’une FEVG basse',
  category: 'diagnostic',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium',
  volatility: 'hot',
  tags: [
    'ecg-ia',
    'intelligence-artificielle',
    'dépistage',
    'fevg-basse',
    'santé-numérique',
    'échocardiographie',
    'stéthoscope-ia',
    'diagnostic',
  ],
  aliases: [
    'AI-ECG',
    'ECG-IA',
    'Intelligence artificielle ECG',
    'Stéthoscope IA',
    'Eko',
    'Anumana',
    'Échographie IA',
    'Us2.ai',
    'EchoNet',
    'Essai EAGLE',
    'TRICORDER',
  ],
  linkedModules: ['core', 'stageB'],
  plainSummaryFr:
    "Des logiciels d'intelligence artificielle (IA) savent désormais repérer des signes de faiblesse du cœur (FEVG basse) sur un simple électrocardiogramme, un stéthoscope numérique ou un ECG de montre. Leur rôle est le dépistage de personnes qui ignorent encore leur maladie, afin de déclencher une échocardiographie : si votre cardiomyopathie ischémique est déjà diagnostiquée, c'est toujours l'échographie (ETT) ou l'IRM qui guide votre suivi. Ces outils augmentent légèrement le nombre de diagnostics, mais n'ont pas encore prouvé de baisse des hospitalisations ou des décès et ne sont pas remboursés en France.",
  sections: [
    {
      headingFr: 'Ce que font ces outils et ce que cela change pour vous',
      bodyMarkdownFr: `Quatre grandes familles d'outils d'IA appliqués à la détection d'une FEVG basse se sont développées :

| Type d'outil | Signal analysé | Statut réglementaire (au 26 novembre 2026) |
|---|---|---|
| **ECG 12 dérivations par IA** (ex. Mayo Clinic / Anumana ECG-AI LEF) | ECG standard de 10 secondes à l'hôpital ou au cabinet | Autorisé FDA aux États-Unis (oct. 2023 ; mise à jour juil. 2025) |
| **ECG 1 dérivation par IA sur montre ou smartphone** | Tracé de 30 secondes d'une montre connectée | Recherche uniquement (étude Mayo sur Apple Watch) |
| **Stéthoscope numérique par IA** (ex. Eko Low EF) | Bruits du cœur + ECG 1 dérivation | Autorisé FDA (avril 2024) |
| **Échocardiographie assistée par IA** (ex. Us2.ai, EchoNet) | Images d'ETT ; mesure automatique de la FEVG | Autorisé FDA (Us2.ai 2021) et marquage CE (2022) |

### Ce que cela signifie si vous avez déjà une cardiomyopathie ischémique

- **L'ECG-IA n'est pas un outil de suivi :** une fois la dysfonction ventriculaire gauche connue, les décisions reposent sur l'échocardiographie (ETT), l'IRM cardiaque, vos symptômes et votre NT-proBNP. L'autorisation américaine d'Anumana exclut d'ailleurs explicitement l'usage en suivi et ne fonctionne pas sur un ECG stimulé par pacemaker ou CRT.
- **Une montre connectée ne mesure pas votre FEVG de façon fiable :** l'étude sur Apple Watch n'incluait que 16 personnes ayant réellement une FEVG basse. L'utilité validée des montres reste le repérage d'une fibrillation atriale (voir *Montres connectées et capteurs dans l'insuffisance cardiaque*).
- **Un intérêt potentiel pour vos proches ou les personnes à risque non encore dépistées :** un ECG-IA peut orienter plus tôt vers une échographie une personne qui n'en a jamais passé.
- **Situation en France :** aucune évaluation par la **HAS** ni aucun remboursement par l'Assurance Maladie n'ont été identifiés pour l'ECG-IA, les stéthoscopes IA ou les logiciels d'échographie IA à la date de cette mise à jour.`,
    },
    {
      headingFr: "Performances, essais cliniques (EAGLE, TRICORDER, EchoNet) et limites",
      depth: 'evidence',
      bodyMarkdownFr: `### Précision diagnostique et réalité des faux positifs

- **Modèle initial Mayo Clinic (Attia, *Nature Medicine* 2019, résumé) :** entraîné sur 44 959 patients et testé sur 52 870 autres pour détecter une **FEVG ≤ 35 %** — **AUC 0,93**, sensibilité **86,3 %**, spécificité **85,7 %**. Les patients à FEVG normale mais à ECG-IA positif avaient un risque multiplié par 4 de développer une FEVG basse par la suite (**HR 4,1**).
- **Versions commerciales (données FDA / communiqués) :** Anumana ECG-AI LEF cible une FEVG ≤ 40 % (y compris après infarctus ; sensibilité annoncée 84,5 %, spécificité 83,6 %) ; le stéthoscope Eko Low EF (\`FDA K233409\`) affiche une sensibilité de **74,7 %** et une spécificité de **77,5 %** pour une FEVG ≤ 40 %.
- **Étude montre connectée (Mayo 2022, résumé) :** 2 454 participants, mais seulement 421 avaient une ETT dans les 30 jours et **seulement 16** présentaient une FEVG ≤ 40 % (AUC 0,885) — effectif trop faible pour juger la précision réelle.
- **Impact pratique des faux positifs :** avec environ 86 % de spécificité, environ **14 personnes sur 100** à cœur normal déclenchent une alerte. Dans une population générale où la FEVG basse est rare, la majorité des alertes positives sont donc de fausses alertes nécessitant une échographie de confirmation (score F1 de 49,5 % à ~8 % de prévalence dans une revue secondaire).

### Essais randomisés d'impact clinique

| Essai | Contexte | Stratégie testée | Résultat principal |
|---|---|---|---|
| **EAGLE** (*Nature Medicine* 2021, résumé) | 22 641 adultes en soins primaires aux États-Unis | Médecins informés du résultat ECG-IA vs soins usuels | Nouveaux diagnostics de FEVG ≤ 50 % à 90 jours : **2,1 % vs 1,6 %** (**OR 1,32**), soit ~5 diagnostics supplémentaires pour 1 000 personnes ; ~80 % des patients positifs à l'IA n'avaient toujours pas de diagnostic à 90 jours |
| **Tsai** (*BMC Medicine* 2025, résumé) | 13 631 patients hospitalisés à Taïwan | ECG-IA faible FEVG | Diagnostics passés de **1,1 % à 1,5 %** (**HR 1,50**) sans augmentation globale du nombre d'échographies |
| **TRICORDER** (*The Lancet*, janvier 2026, résumé et presse) | 205 cabinets de médecine générale NHS (~1,55 million de patients) | Mise à disposition d'un stéthoscope IA | **Neutre :** nouveaux diagnostics d'IC **IRR 0,94** (IC 95 % : 0,86–1,02) ; seulement 12 725 examens enregistrés, avec faible adoption rapportée dans la presse médicale |
| **Lin** (*Nature Medicine* 2024, résumé) | 15 965 patients hospitalisés à Taïwan | Autre algorithme ECG-IA : alerte de **risque élevé de décès** (non spécifique à la FEVG) | Mortalité à 90 jours **3,6 % vs 4,3 %** (**HR 0,83**) — montre qu'une alerte ECG-IA peut influencer les soins, mais sur un objectif différent |

**Bilan des essais :** aucun essai randomisé n'a encore démontré que le dépistage par ECG-IA d'une FEVG basse réduit la mortalité ou les hospitalisations. L'essai **ELEGANT** (\`NCT06968533\`, Taïwan, fin estimée juin 2027) poursuit cette évaluation.

### Échocardiographie assistée par IA (EchoNet)

- **EchoNet RCT (He et al., *Nature* 2023, texte intégral) :** sur **3 495 échographies**, la première mesure de FEVG était réalisée au hasard par IA ou par un échographiste, puis vérifiée en aveugle par un cardiologue. Les cardiologues ont modifié la mesure de plus de 5 points dans **16,8 %** des lectures IA contre **27,2 %** des lectures humaines.
- Lors de relectures d'examens antérieurs par les cardiologues eux-mêmes, l'écart dépassait 5 points dans environ la moitié des cas — un rappel concret qu'une FEVG de 35 % et une FEVG de 40 % peuvent refléter la variabilité de mesure d'un même cœur (voir *La fraction d'éjection (FEVG)*). Des mesures plus reproductibles sont utiles près du seuil de 35 %, mais aucun essai ne montre encore un gain clinique direct.

### Limites

La plupart des données de précision et d'essais proviennent de résumés (l'article TRICORDER du *Lancet* était payant), et les performances obtenues dans de grands centres américains peuvent baisser dans d'autres populations ou sur d'autres appareils d'ECG.`,
    },
  ],
  relatedArticleSlugs: [
    'fraction-dejection',
    'montres-connectees-et-capteurs-ic',
    'telesurveillance-insuffisance-cardiaque',
    'dysfonction-vg-asymptomatique-stade-b',
    'examens-et-chiffres',
    'efx-strain-troponine-et-imagerie-cardiaque',
  ],
  sources: [
    {
      label: 'Attia et al. (Nature Medicine 2019) et étude Apple Watch Mayo Clinic (2022)',
      detail: 'Développement et validation de l’ECG-IA 12 dérivations (AUC 0,93) et étude préliminaire sur montre connectée (résumés)',
    },
    {
      label: 'Essais pragmatiques EAGLE (Nature Medicine 2021), Tsai (BMC Medicine 2025), Lin (Nature Medicine 2024) et ELEGANT (NCT06968533)',
      detail: 'Impact de l’ECG-IA sur le taux de diagnostic de FEVG basse en soins primaires et à l’hôpital (résumés et registre)',
    },
    {
      label: 'Essai TRICORDER (The Lancet, janvier 2026)',
      detail: 'Essai britannique sur stéthoscope IA en médecine générale : résultat neutre sur les nouveaux diagnostics d’insuffisance cardiaque',
    },
    {
      label: 'EchoNet RCT (He et al., Nature 2023, texte intégral) et autorisations FDA / recherche HAS (2026)',
      detail: 'Reproductibilité de la mesure de FEVG par IA en échocardiographie, autorisations Anumana/Eko/Us2.ai et absence de remboursement HAS identifié en France',
    },
  ],
  disclaimerType: 'medical',
};
