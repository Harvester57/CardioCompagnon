import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'therapies-geniques-et-moleculaires',
  sourceWikiPath: 'wiki/concepts/gene-and-molecular-therapies.md',
  titleFr: 'Thérapies géniques et moléculaires en développement dans l’ICFER',
  category: 'traitements',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium',
  volatility: 'hot',
  tags: [
    'thérapie-génique',
    'aav',
    'serca2a',
    'thérapie-arn',
    'antisens',
    'activateur-myosine',
    'omécamtiv-mécarbil',
    'thérapie-métabolique',
    'traitement-expérimental',
    'essais-cliniques',
    'icfer',
  ],
  aliases: [
    'Thérapie génique',
    'Gene therapy',
    'SERCA2a',
    'CUPID 2',
    'AB-1002',
    'GenePHIT',
    'YAP101',
    'SALVADOR-HF',
    'SRD-001',
    'MUSIC-HFrEF',
    'CDR132L',
    'Anti-miR-132',
    'Thérapie ARN',
    'Élamiprétide',
    'Perhexiline',
    'Nicotinamide riboside',
    'Médicaments mitochondriaux',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Les chercheurs explorent plusieurs pistes pour agir directement à l'intérieur des cellules du muscle cardiaque : apporter un gène (thérapie génique), bloquer un signal nocif (médicaments à ARN), renforcer le moteur contractile du cœur (activateurs de la myosine comme l'omécamtiv mécarbil) ou soutenir la production d'énergie cellulaire (médicaments métaboliques et mitochondriaux). Au 26 novembre 2026, aucun de ces traitements n'est autorisé contre l'insuffisance cardiaque en France, en Europe ni aux États-Unis. Le seul grand essai de thérapie génique publié (CUPID 2) n'a pas fonctionné, le candidat génique le plus avancé (AB-1002) exclut la cardiomyopathie ischémique, et l'omécamtiv mécarbil est réévalué uniquement pour les FEVG inférieures à 30 % (résultats attendus vers 2027).",
  sections: [
    {
      headingFr: 'Vue d’ensemble, calendrier réaliste et place à FEVG ~35 %',
      depth: 'patient',
      bodyMarkdownFr: `| Approche | Exemples | Stade de recherche | Patients ischémiques inclus ? | Statut (26 nov. 2026) |
|---|---|---|---|---|
| **Thérapie génique : gestion du calcium** | SERCA2a (**CUPID 2**, **SRD-001**) | Phase 2b neutre (2016) ; nouvelle phase 1–2 | Oui (~50 % dans CUPID 2 ; admis dans MUSIC-HFrEF) | Non autorisé |
| **Thérapie génique : inhibiteur-1c** | **AB-1002** (**GenePHIT**) | Phase 2 | **Non (exclus)** | Résultats attendus en 2027 |
| **Thérapie génique : signal de régénération** | **YAP101** (**SALVADOR-HF**) | Phase 1 (24 patients) | **Ischémiques uniquement** | Premiers patients traités en 2025 |
| **Médicament à ARN (anti-miR-132)** | **CDR132L** (**HF-REVERT**, nouvel essai) | Phase 2 négative ; nouvelle phase 2 | Oui (HF-REVERT post-infarctus) | Résultats vers 2027 |
| **Activateur de la myosine cardiaque** | **Omécamtiv mécarbil** (**COMET-HF**) | Phase 3 | Oui (54 % dans GALACTIC-HF) | Lettre de réponse complète FDA (2023), retrait UE (2024) ; nouvel essai ~2027 |
| **Médicaments mitochondriaux / métaboliques** | Élamiprétide, perhexiline, nicotinamide riboside | Petites phases 2 | Mixte | Aucune autorisation dans l'IC |

### Des délais honnêtes et ce que cela signifie pour vous

*Les délais ci-dessous reflètent une lecture réaliste des étapes de développement clinique et réglementaire :*
- **Thérapies géniques :** le candidat le plus avancé (AB-1002) est en phase 2 et **exclut** la cardiomyopathie ischémique ; même en cas de succès, il faudrait encore une phase 3, une autorisation européenne (EMA) puis un remboursement en France, soit **plusieurs années au minimum**. Pour l'ICFER ischémique, le seul essai dédié (SALVADOR-HF) est une toute petite étude de sécurité de phase 1 (24 patients sans option de stent ou de pontage).
- **Omécamtiv mécarbil :** fin primaire de **COMET-HF** estimée en **septembre 2027**, uniquement pour des **FEVG inférieures à 30 %** (ne s'applique donc pas à une FEVG autour de 35 %).
- **Médicaments métaboliques :** aucun essai de phase 3 dans l'ICFER n'a été identifié.
- **Accès en France :** les thérapies géniques et cellulaires relèvent des médicaments de thérapie innovante (**MTI / ATMP**) nécessitant une autorisation européenne centralisée ; **aucune** n'est autorisée pour le cœur (liste EMA de juin 2026). L'accès se fait exclusivement via un **essai clinique officiel** vérifiable sur *ClinicalTrials.gov* ou le portail européen *CTIS*, après discussion avec votre équipe de cardiologie (voir *Cellules souches et thérapies régénératives*).

**En pratique :** les résultats précoces spectaculaires (« FEVG passée de 25 % à 37 % ») proviennent d'une poignée de patients sans groupe témoin et disparaissent souvent dans les grands essais. Aucune de ces pistes ne justifie de modifier vos quatre piliers actuels.`,
    },
    {
      headingFr: 'Thérapies géniques : SERCA2a (CUPID 2), AB-1002 (GenePHIT) et YAP101 (SALVADOR-HF)',
      depth: 'evidence',
      bodyMarkdownFr: `### SERCA2a : l'essai pivot qui a échoué, et une nouvelle tentative

- **Principe :** SERCA2a est une pompe gérant le calcium dans les cellules cardiaques, déficitaire dans l'insuffisance cardiaque. Un vecteur viral inoffensif (**AAV1**) a été perfusé dans les artères coronaires pour apporter une copie du gène.
- **CUPID 2 (*The Lancet* 2016 ; résumé et revue 2017 lus) :** 250 patients, FEVG ≤ 35 %, environ **52 % ischémiques**, une dose contre placebo. Événements récurrents d'IC : **104 contre 128** (**HR 0,93**, IC 95 % : 0,53–1,65 ; p = 0,81 — **aucun bénéfice**). Décès : **25 (21 %) contre 20 (16 %)**. Les patients porteurs d'anticorps anti-virus étaient exclus. Les raisons de l'échec (faible pénétration génique, capsides virales vides ou cible inadaptée) restent des hypothèses.
- **Autres essais géniques anciens :** **STOP-HF** (93 patients exclusivement ischémiques) a manqué son critère principal (p = 0,89). La thérapie génique par adénylyl cyclase 6 n'a suggéré un signal que chez les non-ischémiques en analyse post hoc, et sa phase 3 (**FLOURISH**) a été retirée avant toute inclusion.
- **Nouvelle tentative SERCA2a (SRD-001, MUSIC-HFrEF) :** premier patient de phase 2 traité le **5 septembre 2025** (50 patients prévus, origine ischémique autorisée ; fiche registre non actualisée depuis mars 2024, sans date de résultats).

### AB-1002 (GenePHIT) — non ischémique uniquement

- **Phase 1 (*Nature Medicine* 2025, texte intégral lu) :** 11 patients atteints de cardiomyopathie **non ischémique**, en ouvert sans groupe témoin. La FEVG est passée de **30,5 % à 42,2 %** dans le premier groupe de dose et de **24,5 % à 36,7 %** dans le second, sans événement indésirable jugé lié au traitement.
- **GenePHIT (phase 2) :** **exclut la cardiomyopathie ischémique**. Critère principal composite hiérarchique à 52 semaines. Le promoteur annonce 173 inclusions et des résultats au **1er semestre 2027** (la fiche registre indique 150 patients, fin primaire octobre 2026 et des doses légèrement différentes de l'article de protocole). Statut *Fast Track* FDA depuis avril 2024.

### YAP101 (SALVADOR-HF) — le seul essai dédié à l'IC ischémique

- Thérapie génique visant à activer des signaux de régénération myocardique (voie **Hippo-YAP**) après un infarctus.
- **Phase 1 (NCT06831825) :** environ **24 patients** présentant une **IC ischémique post-infarctus (FEVG 20–40 %)** non accessibles aux stents ni au pontage. Les 3 premiers patients ont été traités en novembre 2025 ; aucune donnée d'efficacité ; fin primaire estimée **décembre 2026** (étude de sécurité et de dose uniquement).`,
    },
    {
      headingFr: 'Thérapies à ARN, omécamtiv mécarbil et approches métaboliques',
      depth: 'evidence',
      bodyMarkdownFr: `### Thérapies à ARN

- **CDR132L** (antisens bloquant le microARN-132, impliqué dans le remodelage délétère) : l'essai **HF-REVERT** (post-infarctus avec FEVG réduite, ~280 à 294 patients selon les sources) n'a **pas atteint ses objectifs**. Novo Nordisk le réévalue dans l'ICFER avec hypertrophie ventriculaire (**NCT06979375**, 200 patients estimés, fin primaire **mai 2027**).
- Aucun ARN interférent (siRNA) ni antisens ciblant le myocarde n'est autorisé ni en phase 3 dans l'ICFER *(l'inclisiran est un siRNA hypocholestérolémiant, non un traitement de l'IC)*.

### Activateurs de la myosine cardiaque (omécamtiv mécarbil)

Pour le dossier complet, voir *Inotropes dans l'insuffisance cardiaque avancée*. Précisions pour la maladie ischémique :
- **GALACTIC-HF** comptait **54,0 % de patients ischémiques** (4 458 sur 8 256, FEVG moyenne **26,6 %**) ; le sous-groupe ischémique vs non ischémique détaillé n'était pas accessible en texte intégral.
- **Tolérance ischémique / angor :** comme la molécule prolonge la systole, une aggravation de l'ischémie était redoutée ; une petite étude intraveineuse chez des coronariens angoreux (**Greenberg 2015**) n'a pas montré plus d'angor à l'effort (arrêt pour angor : 0 sous médicament contre 1 sous placebo). Un extrait non vérifié évoque davantage d'infarctus chez les patients ischémiques en IC sévère (**6,4 % vs 3,1 %**, à considérer comme non confirmé).
- **Statut réglementaire :** lettre de réponse complète de la **FDA (mars 2023)** demandant un nouvel essai ; demande européenne **retirée le 7 mai 2024**. L'essai **COMET-HF (NCT06736574)** (~1 800 patients, **FEVG < 30 %**, fin primaire estimée **septembre 2027**) tranchera son avenir.
- **Danicamtiv :** évalué dans les cardiomyopathies génétiques (la cardiomyopathie ischémique est exclue de l'essai principal).

### Médicaments mitochondriaux et métaboliques

| Molécule | Mécanisme visé | Données dans l'ICFER | Statut |
|---|---|---|---|
| **Élamiprétide** | Stabilisation de la membrane mitochondriale | **PROGRESS-HF** : 71 patients, 4 semaines, aucune variation du volume cardiaque | Approuvé par la FDA uniquement dans le syndrome de Barth (septembre 2025) |
| **Perhexiline** | Déplacement du carburant cardiaque des lipides vers le glucose | 56 patients (2005) : VO2 pic **16,1 → 18,8**, FEVG **24 % → 34 %** ; aucun essai d'événements | Ancien anti-angineux nécessitant des dosages sanguins ; disponibilité européenne non vérifiée |
| **Nicotinamide riboside** | Augmentation du NAD+ cellulaire | 30 patients : toléré, NAD+ sanguin doublé ; aucun résultat clinique | Vendu en complément alimentaire, non prouvé dans l'IC (voir *Compléments « énergétiques » cardiaques*) |
| **NinérafaXstat** | Modulateur métabolique | Étudié uniquement dans le diabète, l'ICFEP et la CMH | Non testé dans l'ICFER |

La **trimétazidine**, utilisée comme anti-angineux en France, est traitée dans *Angor et médicaments anti-angineux dans l'ICFER ischémique* (aucun nouvel essai d'événements dans l'IC trouvé).

### Limites des sources

Plusieurs données (CUPID 2, GenePHIT, YAP101, SRD-001, CDR132L) reposent sur des résumés, des articles de protocole ou des communiqués de presse non évalués par les pairs ; les fiches de registres cliniques comportent parfois des écarts de dates ou d'effectifs.`,
    },
  ],
  relatedArticleSlugs: [
    'inotropes-insuffisance-cardiaque-avancee',
    'cellules-souches-et-therapies-regeneratives',
    'dispositifs-insuffisance-cardiaque-en-developpement',
    'essais-cliniques-en-cours-et-a-suivre',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'angor-et-medicaments-anti-angineux',
    'complements-energetiques-cardiaques',
    'medicaments-insuffisance-cardiaque',
  ],
  sources: [
    {
      label: 'CUPID 2 (The Lancet, 2016), STOP-HF et AB-1002 (Nature Medicine, 2025, texte intégral ; GenePHIT)',
      detail: 'Résultat neutre de la thérapie génique SERCA2a, données phase 1 d’AB-1002 en cardiomyopathie non ischémique et protocole GenePHIT',
    },
    {
      label: 'Registres ClinicalTrials.gov (26 novembre 2026) et communiqués pipeline : SALVADOR-HF (NCT06831825), MUSIC-HFrEF, CDR132L (NCT06979375) et COMET-HF (NCT06736574)',
      detail: 'Statut de recrutement et calendriers des thérapies géniques, ARN et activateurs de la myosine',
    },
    {
      label: 'GALACTIC-HF, Greenberg (2015), statut réglementaire FDA/EMA de l’omécamtiv mécarbil et liste ATMP de l’EMA (juin 2026)',
      detail: 'Part ischémique, tolérance angineuse, retrait européen 2024 et absence de MTI cardiaque autorisé en Europe',
    },
    {
      label: 'Études métaboliques et mitochondriales : PROGRESS-HF (élamiprétide), perhexiline (2005), nicotinamide riboside et ninérafaxstat',
      detail: 'Données préliminaires sur critères intermédiaires et absence d’essai de phase 3 dans l’ICFER',
    },
  ],
  disclaimerType: 'medical',
};
