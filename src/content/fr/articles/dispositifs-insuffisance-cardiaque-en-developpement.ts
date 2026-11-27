import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'dispositifs-insuffisance-cardiaque-en-developpement',
  sourceWikiPath: 'wiki/concepts/heart-failure-devices-in-development.md',
  titleFr: 'Dispositifs implantables en développement dans l’insuffisance cardiaque',
  category: 'dispositifs',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium',
  volatility: 'hot',
  tags: [
    'dispositifs',
    'shunt-interauriculaire',
    'modulation-contractilité-cardiaque',
    'ccm',
    'activation-baroréflexe',
    'remodelage-ventriculaire',
    'ablation-nerf-splanchnique',
    'traitement-expérimental',
    'icfer',
  ],
  aliases: [
    'Shunt interauriculaire',
    'Shunt atrial',
    'Ventura shunt',
    'Corvia',
    'RELIEVE-HF',
    'REDUCE LAP-HF II',
    'Modulation de la contractilité cardiaque',
    'CCM',
    'Optimizer',
    'Activation du baroréflexe',
    'Barostim',
    'BeAT-HF',
    'Revivent',
    'AccuCinch',
    'Ablation du nerf splanchnique',
    'Neuromodulation',
  ],
  linkedModules: ['device'],
  plainSummaryFr:
    "Au-delà des médicaments, du DAI et de la CRT, plusieurs dispositifs implantables sont développés pour renforcer la contraction du cœur, soulager la pression dans les poumons ou calmer le système nerveux sympathique. Aucun n'a encore démontré, dans un essai correctement contrôlé, qu'il prolongeait la vie ou réduisait les hospitalisations. Deux sont approuvés aux États-Unis uniquement pour les symptômes (Optimizer/CCM et Barostim), sur la base d'essais ouverts sans procédure factice. Les shunts interauriculaires ont été globalement neutres dans RELIEVE-HF et rejetés à l'unanimité par un comité d'experts de la FDA en décembre 2025 ; un nouvel essai est prévu vers 2027. En France, aucun de ces dispositifs n'est remboursé à ce jour.",
  sections: [
    {
      headingFr: 'Vue d’ensemble, statut en France et place à FEVG ~35 %',
      depth: 'patient',
      bodyMarkdownFr: `| Dispositif | Principe | Plage de FEVG étudiée | Meilleure preuve disponible | Statut (26 nov. 2026) |
|---|---|---|---|---|
| **Shunt interauriculaire** (V-Wave Ventura ; Corvia) | Petite ouverture entre oreillette gauche et droite pour abaisser la pression pulmonaire | Toutes FEVG (RELIEVE-HF) ; FEVG ≥ 40 % (Corvia) | ECR contre procédure factice, globalement neutres | Non approuvé FDA ; avis défavorable du comité FDA dans l'ICFER (déc. 2025) |
| **Modulation de la contractilité cardiaque (CCM)** (Optimizer) | Boîtier de type pacemaker délivrant des impulsions pendant le battement pour renforcer la contraction | 25 à 45 % | ECR en ouvert (FIX-HF-5C) sur la capacité d'effort | Approuvé FDA 2019 (symptômes) ; avis **HAS insuffisant** (2017) |
| **Activation du baroréflexe** (Barostim) | Stimulation des capteurs de pression de l'artère carotide pour calmer le stress sympathique | ≤ 35 % | ECR en ouvert (BeAT-HF) ; phase événements neutre | Approuvé FDA 2019 (symptômes) |
| **Remodelage ventriculaire** (Revivent TC ; AccuCinch) | Ancres ou cerclage visant à réduire la taille d'un ventricule dilaté et cicatriciel | ≤ 45 % (Revivent, cicatrice antérieure) ; 20–40 % (AccuCinch) | Études non randomisées | Non approuvé FDA ; essai AccuCinch suspendu |
| **Ablation du nerf splanchnique** | Ablation d'un nerf abdominal pour limiter l'afflux sanguin vers le thorax | ICFEP uniquement | Petit ECR contre procédure factice, neutre | Recherche uniquement |

### Ce que cela signifie pour vous en France (FEVG autour de 35 %)

- **Aucun ne passe avant les traitements établis :** les quatre piliers médicamenteux, le DAI ou la CRT lorsqu'ils sont indiqués et la réflexion sur la revascularisation restent prioritaires.
- **Uniquement en cas de symptômes marqués persistants (NYHA III) :** si vous avez peu ou pas de symptômes à une FEVG autour de 35 %, aucun de ces dispositifs n'a d'indication.
- **Statut en France :** un seul avis de la **HAS** a été retrouvé (Optimizer/CCM, service attendu jugé **insuffisant** en février 2017). Aucun avis HAS ni inscription au remboursement n'a été trouvé pour Barostim, les shunts, Revivent ou AccuCinch : en pratique, l'accès éventuel en France passe par un **essai clinique** ou quelques centres experts.
- **Prudence face aux essais ouverts :** sans procédure factice (*sham*), il est impossible de distinguer l'effet propre du boîtier de l'effet placebo sur la distance de marche ou la qualité de vie.`,
    },
    {
      headingFr: 'Shunts interauriculaires (RELIEVE-HF et REDUCE LAP-HF II)',
      depth: 'evidence',
      bodyMarkdownFr: `- **RELIEVE-HF (shunt V-Wave Ventura) :** 508 patients randomisés contre **procédure factice (*sham*)**, toutes FEVG, 46 % d'origine ischémique. Dispositif **sûr** (0 événement lié au dispositif sur 250 patients à 30 jours), mais résultat principal **neutre** : **win ratio 0,86** (IC 95 % : 0,61–1,22 ; p = 0,20).
- **Sous-groupe FEVG ≤ 40 % (206 patients, ~62 % ischémiques, 77 % sous sacubitril/valsartan, ~50 % sous iSGLT2) :** critère principal **win ratio 1,40** (IC 95 % : 0,80–2,46), **non significatif**. Seules des analyses post hoc favorisaient le shunt (ex. ratio d'hospitalisations IC 0,46), sans gain de qualité de vie ni effet net sur la mortalité. À l'inverse, les patients à FEVG > 40 % ont évolué **moins favorablement** avec le shunt.
- **Comité consultatif de la FDA (3 décembre 2025, NYHA III avec FEVG ≤ 40 %) :** vote sur la sécurité **9 oui / 6 non** ; efficacité **0 sur 15** ; bénéfice supérieur aux risques **0 sur 15**. Aucune décision finale de la FDA retrouvée au 26 novembre 2026.
- **Nouvel essai prévu — RELIEVE-HFrEF (NCT07696975) :** essai contre procédure factice de 250 patients avec FEVG ≤ 40 % (iSGLT2 requis), début estimé vers **juillet 2027**, fin primaire vers **juillet 2030**.
- **Pour comparaison — REDUCE LAP-HF II (Corvia, 626 patients, FEVG ≥ 40 %, contre procédure factice) :** globalement neutre (**win ratio 1,0**). Les patients présentant une maladie vasculaire pulmonaire latente à l'effort ont évolué **plus mal** (**win ratio 0,60**), soulignant l'importance critique de la sélection des patients (essai en cours RESPONDER-HF dans l'ICFEP).`,
    },
    {
      headingFr: 'Modulation de la contractilité (CCM / Optimizer) et activation du baroréflexe (Barostim)',
      depth: 'evidence',
      bodyMarkdownFr: `### Modulation de la contractilité cardiaque (CCM — Optimizer)

- **Approbation FDA (21 mars 2019, P180036) :** uniquement pour améliorer les symptômes en classe NYHA III, FEVG **25 à 45 %**, rythme sinusal, non candidat à une CRT.
- **Essai FIX-HF-5C :** 160 patients (~60 % ischémiques), **en ouvert** (sans procédure factice). Gain de VO2 pic de **+0,84 mL/kg/min**, obtenu uniquement en empruntant statistiquement des données de l'essai antérieur FIX-HF-5 ; pris isolément, l'essai n'atteignait pas son objectif.
- **France :** avis **HAS du 21 février 2017** jugeant le service attendu d'OPTIMIZER IVs **insuffisant** (avant FIX-HF-5C ; aucun avis ultérieur retrouvé).
- **Essai en cours — AIM HIGHer (NCT05064709) :** contre procédure factice, 1 500 patients, **FEVG 40–70 %** (ne couvre pas les FEVG à 35 %), fin estimée **février 2029**.

### Activation du baroréflexe (Barostim)

- **Approbation FDA (16 août 2019) :** pour les symptômes (FEVG ≤ 35 %, NT-proBNP < 1 600 pg/mL, pas d'indication de CRT).
- **Essai BeAT-HF (en ouvert, sans procédure factice) :** à 6 mois, qualité de vie MLWHFQ améliorée de **14,1 points**, test de marche de 6 minutes **+60 m**, NT-proBNP **-25 %** (~65 % de maladie coronaire, ~29 % sous ARNI, iSGLT2 non rapportés).
- **Phase d'événements cliniques (323 patients, suivi médian 3,6 ans) :** **aucune réduction** des décès cardiovasculaires ni des événements d'IC (**rate ratio 0,94**, IC 95 % : 0,57–1,57). Un résumé ultérieur rapporte un win ratio de 1,26 (1,02–1,58) tout en le décrivant comme non significatif (article intégral non lu). Aucun avis HAS retrouvé.`,
    },
    {
      headingFr: 'Remodelage ventriculaire, ablation splanchnique et recommandations',
      depth: 'evidence',
      bodyMarkdownFr: `### Remodelage du ventricule gauche

- **Revivent TC (BioVentrix) :** rapproche par ancres les bords d'une cicatrice antérieure pour réduire le volume ventriculaire. Dans **ALIVE** (*JACC Heart Failure* 2025 : 84 patients traités contre 42 témoins **non randomisés**, cicatrice antérieure, FEVG ≤ 45 %), l'objectif de sécurité a été atteint (événements indésirables majeurs **17,9 %**), mais l'efficacité à 12 mois était **neutre** (**win ratio 1,13**, p = 0,32). Un essai randomisé en ouvert, **RELIVE (NCT06813820)** (135 patients), est en cours de recrutement (fin estimée **août 2028**). Rappel : la reconstruction ventriculaire chirurgicale lors d'un pontage n'avait rien apporté dans STICH (voir *Anévrisme du ventricule gauche*).
- **AccuCinch (CORCINCH-HF, NCT04331769, FEVG 20–40 %) :** **suspendu** dans l'attente d'une modification du protocole (mise à jour registre juin 2026). Des dispositifs antérieurs comme **PARACHUTE** avaient été abandonnés.

### Ablation du nerf splanchnique

- **REBALANCE-HF (*JAMA Cardiology* 2024) :** 90 patients en **ICFEP**, contre procédure factice. Aucune baisse de la pression pulmonaire à l'effort (-0,03 mmHg, p = 0,95) et aucun bénéfice à 12 mois. Aucun essai dans l'ICFER trouvé.

### Position des recommandations européennes et limites

- **ESC 2021 :** mentionne la CCM (FEVG 25–45 %, QRS < 130 ms) et l'activation du baroréflexe dans une section « dispositifs en cours d'évaluation » (gains modestes sur l'effort et la qualité de vie, **aucune recommandation gradée**) et indique que les shunts nécessitent un essai plus large.
- **ESC 2026 :** comporte une section « autres dispositifs implantables » dont seul le titre était accessible (classe de recommandation éventuelle **non vérifiée**).
- **Limites des sources :** RELIEVE-HF a été exploité via le dossier intégral du comité FDA et le résumé ; les résultats à long terme de BeAT-HF et d'ALIVE ont été consultés au niveau du résumé.`,
    },
  ],
  relatedArticleSlugs: [
    'dispositifs-cardiaques-dai-crt',
    'telesurveillance-insuffisance-cardiaque',
    'angioplastie-protegee-et-assistance-circulatoire',
    'assistance-circulatoire-lvad',
    'fuite-mitrale-secondaire',
    'anevrisme-ventricule-gauche',
    'therapies-geniques-et-moleculaires',
    'essais-cliniques-en-cours-et-a-suivre',
  ],
  sources: [
    {
      label: 'Dossier FDA RELIEVE-HF (comité du 3 décembre 2025), RELIEVE-HFrEF (NCT07696975) et REDUCE LAP-HF II',
      detail: 'Résultats complets du shunt Ventura, vote défavorable 0/15 en efficacité dans l’ICFER et données comparatives du shunt Corvia',
    },
    {
      label: 'FDA SSED et essais FIX-HF-5C / AIM HIGHer (CCM Optimizer), avis HAS (février 2017) et BeAT-HF (Barostim)',
      detail: 'Approbations FDA symptomatiques (2019), avis HAS insuffisant et phase événements neutre de BeAT-HF',
    },
    {
      label: 'ALIVE (JACC Heart Failure, 2025), RELIVE (NCT06813820), CORCINCH-HF (NCT04331769), REBALANCE-HF (2024) et Spilias (2023)',
      detail: 'Dispositifs de remodelage ventriculaire gauche (Revivent TC, AccuCinch) et ablation du nerf splanchnique',
    },
    {
      label: 'Recommandations ESC 2021 (dispositifs en cours d’évaluation) et vérification ESC 2026',
      detail: 'Absence de recommandation gradée dans l’ESC 2021 et statut non vérifié dans l’ESC 2026',
    },
  ],
  disclaimerType: 'medical',
};
