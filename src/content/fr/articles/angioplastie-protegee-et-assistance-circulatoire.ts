import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'angioplastie-protegee-et-assistance-circulatoire',
  sourceWikiPath: 'wiki/concepts/protected-pci-and-heart-pump-support.md',
  titleFr: 'Angioplastie protégée et assistance circulatoire temporaire (Impella, ballon)',
  category: 'dispositifs',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium',
  volatility: 'hot',
  tags: [
    'angioplastie-haut-risque',
    'angioplastie-protégée',
    'impella',
    'iabp',
    'assistance-circulatoire-mécanique',
    'chip',
    'choc-cardiogénique',
    'revascularisation',
    'icfer',
  ],
  aliases: [
    'Angioplastie protégée',
    'Protected PCI',
    'Angioplastie à haut risque',
    'CHIP',
    'Impella',
    'Ballon de contre-pulsion intra-aortique',
    'BCPIA',
    'IABP',
    'Pompe cardiaque pendant stent',
    'Assistance circulatoire mécanique',
  ],
  linkedModules: ['core', 'device'],
  plainSummaryFr:
    "Lorsque des stents doivent être posés chez une personne dont le cœur pompe faiblement (souvent FEVG ≤ 30 %) avec des lésions coronaires étendues, certaines équipes mettent en place une pompe temporaire pendant l'intervention — le plus souvent une pompe Impella dans le ventricule gauche ou un ballon dans l'aorte (BCPIA) — afin de soutenir la tension artérielle : c'est l'« angioplastie protégée ». À ce jour, aucun essai randomisé n'a prouvé que poser systématiquement une pompe avant le geste chez un patient qui n'est pas en état de choc rende l'angioplastie plus sûre ou améliore la survie : le plus récent essai indépendant (CHIP-BCIS3, 2026) a été neutre avec davantage de décès cardiovasculaires dans le groupe pompe. Ces dispositifs exposent par ailleurs à des saignements et à des complications vasculaires. Un grand essai industriel (PROTECT IV) est attendu en 2027.",
  sections: [
    {
      headingFr: 'Qu’est-ce qu’une angioplastie à haut risque et comment fonctionnent ces pompes ?',
      depth: 'patient',
      bodyMarkdownFr: `L'expression **angioplastie à haut risque** (ou **CHIP**, *Complex Higher-Risk Indicated Patients*) ne dispose pas d'une définition unique. Elle combine en général :
- un **cœur affaibli** (FEVG ≤ 40 % dans PROTECT IV ; moyenne ou médiane de **24 à 27 %** dans les essais achevés) ;
- une **atteinte coronaire étendue** (tronc commun gauche, dernière artère perméable ou atteinte tritronculaire diffuse) ;
- une **procédure techniquement complexe** (lésions longues ou très calcifiées, occlusion coronaire chronique, caillot volumineux).

| Dispositif | Principe de fonctionnement | Principaux risques |
|---|---|---|
| **Ballon de contre-pulsion intra-aortique (BCPIA / IABP)** | Ballon placé dans l'aorte qui se gonfle entre les battements pour augmenter la pression dans les coronaires et alléger légèrement le travail cardiaque | Complications de l'artère de la jambe, saignements ; soutien circulatoire modeste |
| **Pompe micro-axiale Impella** (modèle CP en angioplastie) | Petite pompe introduite par l'artère de la jambe à travers la valve aortique, qui aspire le sang du ventricule gauche vers l'aorte | Saignements majeurs, lésions de l'artère fémorale, destruction de globules rouges (hémolyse), rare perforation de la paroi cardiaque |

### Ce que cela signifie à une FEVG autour de 35 %

- À une **FEVG autour de 35 %**, la plupart des personnes se situent au-dessus du niveau de gravité étudié dans les essais terminés (FEVG moyenne/médiane 24–27 %). La question ne se pose que si une angioplastie complexe est réellement programmée.
- **La première question reste l'indication même des stents :** dans la cardiomyopathie ischémique stable, l'essai **REVIVED-BCIS2** a montré que les stents ne faisaient pas mieux que les médicaments seuls ; le pontage reste souvent discuté en priorité en Heart Team (voir *Revascularisation coronaire : pontage et stents* et *Occlusion coronaire chronique (CTO)*).
- **Questions utiles à poser si une pompe vous est proposée :** pourquoi est-elle jugée nécessaire dans votre cas précis, quel modèle, quelle voie d'abord et quel risque hémorragique, quelle expérience du centre, et quelle stratégie si la tension baisse sans pompe ? Les preuves actuelles ne soutiennent pas un recours systématique.`,
    },
    {
      headingFr: 'Les essais randomisés en angioplastie à haut risque (BCIS-1, PROTECT II, CHIP-BCIS3, PROTECT IV)',
      depth: 'evidence',
      bodyMarkdownFr: `| Essai | Population | Comparaison | Résultat principal |
|---|---|---|---|
| **BCIS-1** (Royaume-Uni, *JAMA* 2010 ; académique) | 301 patients, FEVG ≤ 30 % (moyenne 23,6 %), atteinte étendue | Ballon (BCPIA) planifié vs aucun (12 % de croisement) | Événements majeurs à la sortie **15,2 % vs 16,0 %** (p = 0,85, **neutre**). Moins de complications procédurales (1,3 % vs 10,7 %). Au suivi tardif (médiane 51 mois) : mortalité **27,8 % vs 38,7 %** (**HR 0,66**, p = 0,039), critère non prévu au départ (générateur d'hypothèses) |
| **PROTECT II** (*Circulation* 2012 ; financé par Abiomed) | 452 patients, FEVG moyenne 24 %, atteinte tritronculaire ou tronc commun non protégé | Impella 2,5 vs ballon (aucun bras sans pompe) | Événements majeurs à 30 jours **35,1 % vs 40,1 %**, **non significatif** (p rapporté entre 0,227 et 0,28) ; **arrêté tôt pour futilité**. Seule une analyse exploratoire *per-protocole* à 90 jours était positive (40,0 % vs 51,0 %, p = 0,023 — base fragile) |
| **CHIP-BCIS3** (Royaume-Uni, *NEJM* 2026 ; financé par le NIHR) | 300 patients, FEVG ≤ 35 % (ou ≤ 45 % avec fuite mitrale sévère), médiane ~27 %, atteinte étendue | Impella CP planifié vs angioplastie standard | **Win ratio 0,85** (IC 95 % : 0,63–1,15), **neutre**. Mortalité cardiovasculaire plus élevée sous Impella (**26,7 % vs 14,5 %**, **HR 1,91**) et mortalité totale **47 contre 33** patients (**HR 1,54**, IC 95 % : 0,99–2,41) — critères secondaires |

- **Précisions sur CHIP-BCIS3 :** la proportion de patients présentant un syndrome coronarien aigu variait entre **62,7 %** et **76 %** selon les comptes rendus (article intégral *NEJM* non lu) ; beaucoup n'étaient donc pas dans une situation purement élective. Une sous-étude hémodynamique (97 patients, EuroPCR 2026) a confirmé la décharge du ventricule par la pompe, mais avec des pertes de pression pulsée beaucoup plus fréquentes (**RR 7,83**) : le soutien hémodynamique ne garantit pas un meilleur devenir clinique.
- **Données poolées et registres :** une méta-analyse de 2026 (10 études, 7 875 patients, mêlant essais randomisés et observationnels ; résumé lu) ne retrouve aucun bénéfice de survie (mortalité **RR 1,17** global, **1,44** dans les ECR, **1,52** en pose planifiée) avec presque un doublement des saignements majeurs (**RR 1,92**). Des registres financés par le fabricant présentés au TCT 2026 (1 379 patients) rapportaient une mortalité précoce moindre (4,7 % vs ~8 %), mais des comparaisons indirectes non randomisées ne peuvent pas renverser un essai randomisé.
- **PROTECT IV (NCT04763200, attendu en 2027) :** **1 252 patients** (FEVG ≤ 40 %, maladie stable ou infarctus sans sus-décalage récent), Impella CP vs angioplastie avec ou sans ballon, critère composite sur **3 ans**, financé par Abiomed (Johnson & Johnson). Recrutement terminé (fin primaire estimée octobre 2026, résultats annoncés pour **2027**).`,
    },
    {
      headingFr: 'Choc cardiogénique : une situation différente (DanGer Shock, IABP-SHOCK II)',
      depth: 'evidence',
      bodyMarkdownFr: `Il est essentiel de ne pas confondre l'angioplastie programmée (hors choc) avec le **choc cardiogénique** au cours d'un infarctus aigu :
- **DanGer Shock (*NEJM* 2024) :** chez des patients en choc cardiogénique compliquant un infarctus avec sus-décalage du segment ST, la pompe **Impella CP a réduit la mortalité** à 180 jours (**45,8 % contre 58,5 %**, **HR 0,74** ; suivi à 10 ans : **52,5 % contre 68,8 %**, HR ~0,7), au prix d'une hausse nette des complications (critère de sécurité composite : **24,0 % contre 6,2 %**, incluant saignements sévères, ischémie de membre, hémolyse, dysfonction de dispositif ou aggravation de fuite aortique ; davantage de dialyses).
- **IABP-SHOCK II :** le ballon de contre-pulsion n'a pas réduit la mortalité dans le choc post-infarctus à 30 jours (**39,7 % vs 41,3 %**) ni à 6 ans (**66,3 % vs 67,0 %**).
- **Pourquoi ce bénéfice ne se transpose pas à l'angioplastie hors choc :** dans le choc, la défaillance circulatoire est immédiate et près d'un patient sur deux décède à 6 mois ; hors choc, la circulation est stable et la pompe est posée par précaution, de sorte que le même taux de complications pèse beaucoup plus lourd face à un bénéfice incertain.`,
    },
    {
      headingFr: 'Recommandations internationales, FDA et avis de la HAS en France',
      depth: 'evidence',
      bodyMarkdownFr: `| Instance | Position (au 26 novembre 2026) |
|---|---|
| **Consensus clinique EAPCI** (*EuroIntervention*, janvier 2025, avec le groupe chirurgie ESC) | L'assistance par pompe ne doit **pas** être systématique en angioplastie à haut risque. La **Heart Team** décide au préalable du besoin, du dispositif et du moment ; si un soutien est retenu, une pompe micro-axiale (type Impella) est préférée au ballon *(rédigé avant CHIP-BCIS3)* |
| **ESC 2023 (SCA) et ESC 2024 (SCC)** | En SCA, soutien de courte durée envisageable en choc réfractaire (**IIb C**), ballon systématique non recommandé (**III B**). En SCC (ESC 2024), aucune recommandation vérifiée sur le soutien planifié en angioplastie élective |
| **Recommandations US 2025 (SCA)** | Pompe micro-axiale raisonnable (**2a**) dans certains chocs post-infarctus ; ballon systématique non recommandé (**3**). Ne traite pas l'angioplastie élective |
| **FDA (États-Unis)** | Impella approuvé le 23 mars 2015 (P140003) pour jusqu'à 6 heures de soutien en angioplastie à haut risque stable. Rappel d'étiquetage de **Classe I en 2024** après 129 incidents graves dont **49 décès** par perforation de la paroi cardiaque |
| **France (HAS — CNEDiMTS)** | **Impella CP** évalué **service attendu insuffisant** à deux reprises (2018 et 2020), uniquement dans le choc post-infarctus. **Impella 5.0** jugé suffisant uniquement dans le choc après chirurgie cardiaque en centre spécialisé. **Aucune évaluation HAS d'Impella pour l'angioplastie programmée à haut risque n'a été retrouvée** (modalités actuelles de financement hospitalier non vérifiées) |

### Limites des sources

Aucun des articles originaux principaux (PROTECT II, BCIS-1, DanGer Shock, IABP-SHOCK II, CHIP-BCIS3) n'a été lu en texte intégral ; les chiffres proviennent de résumés, de synthèses de l'ACC et de comptes rendus spécialisés. Les essais couvrent la période 2005–2026, durant laquelle les traitements de fond ont fortement évolué.`,
    },
  ],
  relatedArticleSlugs: [
    'revascularisation-pontage-stents',
    'occlusion-coronaire-chronique-cto',
    'assistance-circulatoire-lvad',
    'insuffisance-cardiaque-avancee-stade-d',
    'dispositifs-insuffisance-cardiaque-en-developpement',
    'essais-cliniques-en-cours-et-a-suivre',
  ],
  sources: [
    {
      label: 'BCIS-1 (JAMA, 2010), PROTECT II (Circulation, 2012), CHIP-BCIS3 (NEJM 2026, résumé et TCTMD) et protocole PROTECT IV (NCT04763200)',
      detail: 'Essais randomisés d’assistance circulatoire planifiée lors d’une angioplastie à haut risque et calendrier de PROTECT IV (2027)',
    },
    {
      label: 'DanGer Shock (NEJM, 2024 et suivi 10 ans) et IABP-SHOCK II',
      detail: 'Preuves distinctes de l’assistance circulatoire temporaire dans le choc cardiogénique post-infarctus',
    },
    {
      label: 'Consensus EAPCI (EuroIntervention, janvier 2025), recommandations ESC 2023 / US 2025, FDA (2015 et rappel 2024) et avis HAS CNEDiMTS (2018, 2020)',
      detail: 'Place de la Heart Team, sécurité de la pompe Impella et statut réglementaire en France',
    },
  ],
  disclaimerType: 'medical',
};
