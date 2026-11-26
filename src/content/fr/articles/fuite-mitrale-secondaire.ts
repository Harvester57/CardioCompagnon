import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'fuite-mitrale-secondaire',
  sourceWikiPath: 'wiki/concepts/secondary-mitral-regurgitation.md',
  titleFr: 'Fuite mitrale secondaire (insuffisance mitrale fonctionnelle)',
  category: 'comorbidites',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'insuffisance-mitrale',
    'fuite-mitrale-secondaire',
    'insuffisance-mitrale-ischémique',
    'teer',
    'mitraclip',
    'coapt',
    'mitra-fr',
    'reshape-hf2',
    'matterhorn',
    'valvulopathie',
    'comorbidités',
  ],
  aliases: [
    'Insuffisance mitrale',
    'Fuite mitrale',
    'Insuffisance mitrale secondaire',
    'Insuffisance mitrale fonctionnelle',
    'Insuffisance mitrale ischémique',
    'IM secondaire',
    'SMR',
    'TEER',
    'M-TEER',
    'MitraClip',
    'Clip mitral',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "La valve mitrale sépare l'oreillette gauche du ventricule gauche et empêche le sang de refluer en arrière lors de la contraction. Dans la cardiomyopathie ischémique, la valve elle-même est généralement saine, mais le ventricule dilaté et cicatriciel tire sur ses feuillets et les empêche de se refermer de manière étanche : c'est l'insuffisance mitrale secondaire (ou fonctionnelle / ischémique). Elle touche de façon sévère environ 25 % des personnes ayant une FEVG réduite. Les médicaments de l'insuffisance cardiaque (en particulier le sacubitril/valsartan dans PRIME) et la resynchronisation cardiaque (CRT) lorsqu'elle est indiquée passent toujours en premier et réduisent la fuite chez environ 40 % des patients. Si une fuite sévère et des symptômes persistent, la réparation percutanée par clip (TEER, ex. MitraClip) a réduit les hospitalisations et les décès dans COAPT et les événements d'IC dans RESHAPE-HF2 (environ 60–65 % de patients ischémiques), mais pas dans MITRA-FR où les ventricules étaient plus dilatés. ESC/EACTS 2025 attribue au clip une recommandation Classe I, A chez des patients sélectionnés sans maladie coronaire à revasculariser. En cas de chirurgie pour fuite ischémique sévère, la réparation par anneau a récidivé beaucoup plus souvent (58,8 %) que le remplacement valvulaire (3,8 %) dans l'essai CTSN.",
  sections: [
    {
      headingFr: 'Fréquence, quantification à l’ETT et priorité aux médicaments',
      bodyMarkdownFr: `### Fréquence et mesure échocardiographique

- Une insuffisance mitrale secondaire sévère concerne environ **25 %** des personnes ayant une FEVG réduite (recommandations ESC/EACTS 2025).
- La sévérité est quantifiée à l'échocardiographie transthoracique (ETT) par la **surface de l'orifice régurgitant (SOR / EROA)** et le **volume régurgitant** à chaque battement. La société européenne d'imagerie cardiovasculaire (EACVI) définit une fuite secondaire sévère à partir d'une **SOR ≥ 0,40 cm²** et/ou d'un **volume régurgitant ≥ 60 mL**, avec des seuils abaissés (**≥ 0,30 cm²** / **≥ 45 mL**) lorsque l'orifice a une forme en croissant et que le débit est bas (Lancellotti 2024).
- **Une fuite variable :** son intensité fluctue selon la charge en eau et la pression artérielle. Les recommandations demandent donc de la réévaluer une fois la volémie et la tension stabilisées (ESC/EACTS 2025).

### Les médicaments et la CRT d'abord

- L'optimisation des médicaments de fond de l'insuffisance cardiaque est recommandée **avant** tout geste sur la valve mitrale : environ **40 %** des fuites s'améliorent après 1 à 3 mois de traitement médical optimisé. La resynchronisation cardiaque (CRT) doit également être envisagée si ses critères sont réunis (ESC/EACTS 2025).
- **Essai PRIME** (118 patients avec insuffisance mitrale fonctionnelle, en double aveugle) : le **sacubitril/valsartan** (*Entresto*) a davantage réduit la fuite que le valsartan sur 12 mois (baisse de la SOR de **0,058 contre 0,018 cm²** ; volume régurgitant diminué de **7,3 mL** supplémentaires). L'essai évaluait la taille de la fuite et non les événements cliniques ; la FEVG moyenne et la part ischémique ne figuraient pas dans le résumé consulté (PRIME).
- Les auteurs mêmes de la théorie des fuites « proportionnées et disproportionnées » insistent sur la nécessité d'une titration poussée des médicaments et d'une CRT préalable avant d'envisager un clip (Grayburn 2021).`,
    },
    {
      headingFr: 'La réparation percutanée par clip (TEER) et les grands essais',
      bodyMarkdownFr: `Un clip (par exemple *MitraClip*) est acheminé par une veine de la jambe jusqu'au cœur, puis à travers la paroi entre les oreillettes, afin d'agrafer les deux feuillets mitraux au milieu sans chirurgie à cœur ouvert.

| Essai | Population | Résultat principal | Part ischémique |
|---|---|---|---|
| **COAPT** (614 ; États-Unis/Canada) | IM sévère (SOR moyenne 0,41 cm²), FEVG 20–50 % (moyenne 31 %), ventricules moins dilatés, symptomatiques sous traitement maximal | À 5 ans : hospitalisations IC **33,1 % contre 57,2 %/an (HR 0,53)** ; décès **57,3 % contre 67,2 % (HR 0,72)** | 61 % |
| **MITRA-FR** (304 ; France) | IM moins sévère (SOR moyenne 0,31 cm²), ventricules plus dilatés (VTDi 135 contre 101 mL/m²), FEVG 15–40 % (moyenne 33 %) | Aucune différence sur les décès ou hospitalisations pour IC | 59 % |
| **RESHAPE-HF2** (505 ; Europe) | IM modérée à sévère (SOR médiane 0,23 cm²), FEVG médiane 31–32 %, ~29 % déjà sous CRT | Hospitalisations IC ou décès CV : **37,0 contre 58,9 pour 100 patients-années** (ratio de taux **0,64**) ; qualité de vie **+10,9 points KCCQ** | 65 % |

Sources : COAPT ; Pibarot 2019 ; RESHAPE-HF2 ; RESHAPE-HF2 JACC ; Lancellotti 2024.

- **Analyse groupée citée par ESC/EACTS 2025 :** moins de réhospitalisations pour IC à 24 mois (**HR 0,63**), sans différence significative sur la mortalité.
- *Précision sur les sources :* les proportions ischémiques de COAPT et MITRA-FR proviennent d'un tableau de synthèse de 2024 (Lancellotti 2024) et non des articles primaires ; celle de RESHAPE-HF2 (329 sur 505) provient de son texte intégral (RESHAPE-HF2 JACC).
- **Patients ischémiques dans RESHAPE-HF2 :** les hospitalisations pour IC étaient de **27,3 contre 39,5 pour 100 patients-années** (ratio de taux 0,71 ; IC 95 % 0,46–1,10), non significatif isolément ; la différence par rapport aux patients non ischémiques (ratio 0,44) n'était pas significative non plus (p d'interaction = 0,15). Le bénéfice était concentré chez les patients ayant un antécédent d'hospitalisation pour IC (p d'interaction = 0,06). Ces deux analyses en sous-groupes sont génératrices d'hypothèses (RESHAPE-HF2 JACC).
- **Points de vigilance méthodologiques :** RESHAPE-HF2 était ouvert et sans procédure factice, si bien que le gain de qualité de vie peut comporter un effet placebo ; son résultat principal a été porté par les hospitalisations pour IC, sans réduction significative de la mortalité cardiovasculaire isolée. Le caractère ouvert ou aveugle de COAPT n'était pas détaillé dans le résumé consulté ; sa baisse de mortalité reste néanmoins le résultat isolé le plus marquant.
- **Qualité technique et sécurité :** une fuite résiduelle ≥ 3+ à 1 an persistait chez **5 %** des patients de COAPT contre **17 %** dans MITRA-FR (Pibarot 2019). Les événements de sécurité liés au dispositif étaient rares : **1,4 %** dans COAPT (financé par le fabricant) et **1,6 %** dans RESHAPE-HF2.
- *Applicabilité à l'ICFER ischémique autour de 35 % de FEVG :* **directe à partielle** — les essais ont inclus une majorité de patients ischémiques à ce niveau de FEVG, mais uniquement avec une anatomie valvulaire adaptée, des symptômes persistants et, dans COAPT, sans maladie coronaire nécessitant une revascularisation.

### Pourquoi MITRA-FR et COAPT ont-ils divergé ?

- **Fuite proportionnée ou disproportionnée :** une explication influente avance que les patients de MITRA-FR avaient une fuite « proportionnée » à un ventricule très dilaté (réparer la valve laisse un myocarde très malade), tandis que ceux de COAPT avaient une fuite disproportionnée par rapport à la taille du ventricule (Pibarot 2019 ; Grayburn 2021).
- **Un concept débattu :** ses propres auteurs soulignent la variabilité de mesure et le fait que la SOR mesurée en pic systolique peut surestimer la fuite (Grayburn 2021). Une analyse de COAPT a montré que les 56 patients « de profil MITRA-FR » n'avaient pas de réduction des décès/hospitalisations (27,8 % contre 33,1 %) mais conservaient un gain de qualité de vie (KCCQ +18,4 contre +0,4), sans validation cohérente sur l'ensemble des six sous-groupes testés (Lindenfeld 2021).
- **Autres facteurs :** optimisation médicale imposée avant l'inclusion dans COAPT contre ajustement en vie réelle dans MITRA-FR, mesures ETT, technique procédurale et suivi (ESC/EACTS 2025 ; Pibarot 2019).
- **Apport de RESHAPE-HF2 :** le bénéfice a été observé pour des fuites plus modestes (SOR médiane 0,23 cm²). Une revue de 2024 suggère que le clip est surtout bénéfique au-dessus d'environ 0,2 cm² de SOR avec un ventricule non excessivement dilaté (VTD < 200–220 mL) — il s'agit toutefois de la synthèse d'une revue et non d'un seuil officiel de recommandation (Lancellotti 2024).`,
    },
    {
      headingFr: 'Clip ou chirurgie ? (MATTERHORN et essais CTSN)',
      bodyMarkdownFr: `- **Essai MATTERHORN** (210 patients, Allemagne) : le clip percutané s'est montré **non inférieur** à la chirurgie mitrale à 1 an sur le critère combiné (**16,7 % contre 22,5 %**), avec nettement moins de complications majeures à 30 jours (**14,9 % contre 54,8 %**). Toutefois, la FEVG moyenne était de **43 %** et seuls **44 %** avaient une origine ischémique : beaucoup de participants avaient donc une fonction contractile meilleure que dans l'ICFER classique (MATTERHORN ; Lancellotti 2024).

### Chirurgie dans l'insuffisance mitrale ischémique (essais CTSN)

- **Fuite ischémique sévère — plastie par anneau contre remplacement valvulaire** (251 patients, tous d'origine ischémique, le plus souvent opérés simultanément pour un autre geste cardiaque) : la survie à 2 ans ne différait pas (**19,0 % contre 23,2 %** de décès, HR 0,79), mais la fuite est réapparue chez **58,8 %** des patients après réparation annulaire contre **3,8 %** après remplacement valvulaire, avec davantage d'événements d'insuffisance cardiaque après réparation (CTSN sévère).
- **Fuite ischémique modérée lors d'un pontage aorto-coronarien** (301 patients) : ajouter une plastie annulaire au pontage a laissé moins de fuites significatives (**11,2 % contre 32,3 %**) sans modifier le remodelage ventriculaire ni la survie (décès **10,6 % contre 10,0 %**), tout en provoquant davantage d'événements neurologiques (**14 contre 4**) (CTSN modérée).
- Ces résultats expliquent pourquoi ESC/EACTS 2025 classe la chirurgie mitrale en « peut être envisagée » (**Classe IIb**) lorsqu'une fuite modérée est présente au moment d'un pontage.`,
    },
    {
      headingFr: 'Parcours ESC/EACTS 2025, fuite tricuspide et limites des preuves',
      bodyMarkdownFr: `### Parcours recommandé en trois étapes (ESC/EACTS 2025)

1. Optimiser les **quatre classes** de médicaments de l'insuffisance cardiaque (en 6 semaines environ) et évaluer l'indication d'une CRT.
2. Réévaluer la fuite une fois la volémie et la pression artérielle stabilisées.
3. Si les symptômes persistent et que la fuite demeure sévère, une **Heart Team** incluant des spécialistes de l'insuffisance cardiaque statue sur la conduite à tenir.

| Situation clinique | Option recommandée | Classe, niveau |
|---|---|---|
| Pontage aorto-coronarien déjà prévu, fuite sévère | Geste mitral associé lors de la même intervention | I, B |
| Pontage déjà prévu, fuite modérée | Chirurgie mitrale pouvant être envisagée | IIb, B |
| Maladie coronaire relevant d'une angioplastie (stents) | Stents d'abord puis réévaluation ; clip pouvant être envisagé | IIb, C |
| Pas de maladie coronaire à traiter, critères favorables ci-dessous réunis | **Clip mitral (TEER)** pour réduire les hospitalisations et améliorer la qualité de vie | **I, A** |
| Critères favorables non réunis | Clip pouvant être envisagé pour les symptômes, après évaluation des thérapies avancées | IIb, B |
| Anatomie inadaptée au clip | Chirurgie mitrale pouvant être envisagée | IIb, C |

*Note technique :* la formulation « réparation » est reprise de la synthèse du tableau de pontage, mais l'essai CTSN a montré que la plastie annulaire récidive souvent dans l'IM ischémique sévère par rapport au remplacement valvulaire ; le choix entre réparation et remplacement relève du chirurgien et de la Heart Team.

**Critères prédictifs d'un bénéfice du clip (pesés ensemble par la Heart Team, sans que chaque critère soit isolément obligatoire) :** anatomie valvulaire compatible ; classe NYHA ≥ II ; FEVG comprise entre **20 % et 50 %** ; diamètre télésystolique du VG (DTSVG) **≤ 70 mm** ; hospitalisation pour IC au cours de l'année écoulée ou BNP ≥ 300 pg/mL (NT-proBNP ≥ 1 000 pg/mL) ; pression artérielle pulmonaire **≤ 70 mmHg** ; absence de dysfonction ventriculaire droite sévère, d'insuffisance cardiaque avancée (stade D), de maladie coronaire nécessitant une revascularisation ou d'autre valvulopathie sévère (ESC/EACTS 2025).

### Fuite tricuspide associée

La valve tricuspide (côté droit du cœur) peut également fuir. Selon **ESC/EACTS 2025**, un **traitement par cathéter** (clip ou remplacement tricuspide) doit être envisagé pour les fuites sévères restant symptomatiques malgré les médicaments chez les personnes à haut risque chirurgical (**Classe IIa, A**), avec un bénéfice établi principalement sur la **qualité de vie** (voir *Maladies associées (reins, FA, valves, diabète)* et *Ventricule droit et hypertension pulmonaire*).

### Limites des preuves

- Les proportions exactes de patients ischémiques issues des articles primaires de COAPT et MITRA-FR, ainsi que la FEVG initiale des essais CTSN, n'ont pas été consultées dans le texte source original.
- Aucun essai randomisé n'a testé le clip mitral exclusivement dans la cardiomyopathie ischémique.`,
    },
  ],
  relatedArticleSlugs: [
    'maladies-associees',
    'stenose-aortique-fevg-reduite',
    'revascularisation-pontage-stents',
    'dispositifs-cardiaques-dai-crt',
    'medicaments-insuffisance-cardiaque',
    'examens-et-chiffres',
    'fibrillation-atriale-insuffisance-cardiaque',
    'essais-cliniques-cles',
    'ventricule-droit-et-hypertension-pulmonaire',
    'insuffisance-cardiaque-avancee-stade-d',
  ],
  sources: [
    { label: 'Recommandations ESC/EACTS 2025 sur les valvulopathies (texte intégral des tableaux IM secondaire et IT)', detail: 'Prévalence, médicaments en premier, parcours décisionnel, critères du clip (TEER Classe I A) et fuite tricuspide (IIa A)' },
    { label: 'COAPT (résultats à 5 ans, résumé) et Pibarot et al. (2019, texte intégral)', detail: 'Résultats du clip à 5 ans (HR 0,53 hospitalisations, HR 0,72 décès) et comparaison initiale COAPT vs MITRA-FR' },
    { label: 'RESHAPE-HF2 (NEJM 2024, résumé ; JACC 2024, texte intégral)', detail: 'Clip dans l’IM modérée à sévère (ratio de taux 0,64 ; 65 % ischémiques) et analyses en sous-groupes' },
    { label: 'Lancellotti et al. (2024, texte intégral)', detail: 'Critères EACVI de sévérité (SOR et volume régurgitant) et tableau comparatif des essais' },
    { label: 'MATTERHORN (NEJM 2024, résumé)', detail: 'Non-infériorité du clip face à la chirurgie mitrale et sécurité à 30 jours' },
    { label: 'Essais CTSN (IM ischémique sévère et modérée à 2 ans, lecture partielle)', detail: 'Récidive 58,8 % vs 3,8 % (réparation vs remplacement) et pontage avec ou sans plastie annulaire' },
    { label: 'PRIME (Kang 2019, résumé), Grayburn (2021, résumé) et Lindenfeld (2021, résumé)', detail: 'Réduction de l’IM fonctionnelle sous sacubitril/valsartan et débat sur l’IM proportionnée/disproportionnée' },
  ],
  disclaimerType: 'medical',
};
