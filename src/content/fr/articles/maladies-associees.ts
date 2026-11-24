import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'maladies-associees',
  sourceWikiPath: 'wiki/topics/coexisting-conditions.md',
  titleFr: 'Maladies associées (reins, FA, valves, diabète)',
  category: 'comorbidites',
  asOf: '2026-11-24',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'comorbidités',
    'maladie-rénale-chronique',
    'fibrillation-atriale',
    'valvulopathie',
    'insuffisance-mitrale',
    'rétrécissement-aortique',
    'diabète',
    'hypertension',
    'apnée-du-sommeil',
  ],
  aliases: [
    'Comorbidités',
    'Multimorbidité',
    'Maladie rénale et insuffisance cardiaque',
    'Fibrillation atriale et insuffisance cardiaque',
    'FA',
    'Insuffisance mitrale',
    'Fuite mitrale',
    'Rétrécissement aortique',
    'TEER',
    'MitraClip',
    'TAVI',
  ],
  linkedModules: ['ckd', 'atrialFibrillation', 'diabetes'],
  plainSummaryFr:
    "L'insuffisance cardiaque survient rarement seule : dans une grande analyse portant sur 15 066 patients atteints d'ICFER, 94 % présentaient au moins une autre maladie chronique (hypertension, maladie coronaire, insuffisance rénale, diabète, fibrillation atriale ou fuite valvulaire). L'insuffisance rénale pèse le plus sur la mortalité à l'échelle d'une population et guide les doses et bilans ; la fibrillation atriale augmente le risque d'AVC ; une fuite mitrale liée à la dilatation du VG se traite d'abord par les médicaments avant d'envisager un geste percutané chez certains patients.",
  sections: [
    {
      headingFr: 'Quelle est la fréquence des maladies associées ?',
      bodyMarkdownFr: `Dans une analyse groupée de 15 066 patients atteints d'ICFER issus de deux grands essais (PARADIGM-HF et ATMOSPHERE ; Dewan 2023) :

- **94 %** présentaient au moins l'une des dix comorbidités les plus courantes, et **79 %** en avaient au moins deux.

| Maladie associée | Fréquence | Associée à un risque de décès plus élevé (ajusté) ? |
|---|---|---|
| Hypertension artérielle | 66,6 % | Non (HR 0,95) |
| Maladie coronarienne | 47,5 % | Non (HR 0,96) |
| Maladie rénale chronique (DFGe < 60 mL/min/1,73 m²) | 31,8 % | **Oui**, HR 1,31 |
| Diabète | 31,5 % | **Oui**, HR 1,29 |
| Obésité | 30,1 % | Risque plus bas (HR 0,91), dit « paradoxe de l'obésité » |
| Fibrillation atriale (FA) | 23,5 % | **Oui**, HR 1,11 |
| Anémie | 21,9 % | **Oui**, HR 1,36 |
| Artériopathie oblitérante des membres inférieurs (AOMI) | 5,5 % | **Oui**, HR 1,39 |

- **La maladie rénale chronique expliquait la plus grande part des décès** à l'échelle de la population (environ 9 %), car elle combine fréquence élevée et surrisque (Dewan 2023).
- **L'association de la FA avec une insuffisance rénale ou une maladie coronaire** comportait un risque supérieur à celui de chacune isolément (Dewan 2023).
- **Limites :** il s'agit de patients inclus dans des essais cliniques, qui excluaient les formes les plus graves (par exemple DFGe < 30 mL/min/1,73 m²) ; la charge réelle en pratique courante est probablement plus lourde. De plus, ce sont des associations qui ne prouvent pas à elles seules que traiter la comorbidité réduit la mortalité.

Les recommandations américaines (ACC 2022) couvrent également la carence en fer, l'anémie, l'hypertension, les troubles du sommeil, le diabète, la FA et la maladie coronaire. Pour le fer, voir *Carence en fer et fer intraveineux* ; pour le poids, *Poids, obésité et dénutrition (cachexie cardiaque)*.`,
    },
    {
      headingFr: 'Maladie rénale chronique',
      bodyMarkdownFr: `- **Moins de traitements alors que le risque est plus élevé :** les personnes atteintes à la fois d'ICFER et de maladie rénale ont un risque accru mais reçoivent moins souvent les médicaments validés. Dans un registre, seuls environ 15 % des patients avec un DFGe entre 30 et 44 mL/min/1,73 m² et 5 % avec un DFGe < 30 recevaient trois classes recommandées (Beldhuis 2022).
- **Les traitements restent efficaces :** le bénéfice persiste dans l'insuffisance rénale modérée (jusqu'au stade 3B) pour les ARM, les iSGLT2, les ARNI et les bêtabloquants. En dessous de 30 mL/min/1,73 m², les preuves deviennent rares, et aucun médicament d'insuffisance cardiaque ne dispose de données d'événements cliniques sous dialyse (Beldhuis 2022).
- **Une baisse initiale modérée du DFGe est souvent attendue** à l'introduction de ces médicaments, et les iSGLT2 ralentissent le déclin rénal à long terme (voir *Médicaments : mode d'action, effets secondaires et bilans sanguins* pour les seuils et le calendrier des prises de sang).
- **Potassium :** le potassium sanguin monte plus souvent sous ARM en cas d'insuffisance rénale (par exemple 25,6 % contre 8,5 % au-dessus de 5,5 mmol/L sous spironolactone — *Aldactone* — vs placebo dans RALES). Les iSGLT2 n'augmentent pas le potassium (Beldhuis 2022). Les chélateurs de potassium peuvent aider à maintenir un ARM lorsque le potassium tend à monter, même si leur bénéfice sur la survie n'est pas démontré (DIAMOND ; ESC 2026).
- **Diabète de type 2 avec maladie rénale :** les recommandations ESC 2026 recommandent la **finérénone** (**Classe I, A**) pour réduire le risque d'insuffisance cardiaque, quelle que soit la FEVG. Cette indication est distincte de son usage comme ARM de l'ICFER, où elle n'est pas encore démontrée sous 40 % de FEVG (ESC 2026 ; FINE-HEART ; voir *Finérénone, nouveaux ARM et chélateurs de potassium*).
- **Digoxine :** éliminée par les reins, elle s'accumule lorsque le DFGe diminue ; un dosage sanguin (digoxinémie) est nécessaire en cas d'insuffisance rénale (Ahmed 2006 ; Beldhuis 2022).`,
    },
    {
      headingFr: 'Fibrillation atriale (FA)',
      bodyMarkdownFr: `- **Une association très fréquente :** sur 30 ans dans l'étude de Framingham, 57 % des personnes développant une insuffisance cardiaque avaient une FA, et 37 % de celles développant une FA avaient une insuffisance cardiaque (recommandations ESC 2024 sur la FA).
- **Risque accru :** en cas de FA, l'insuffisance cardiaque double approximativement le risque d'AVC et augmente d'environ 25 % la mortalité. L'association FA + ICFER porte la mortalité la plus élevée parmi les combinaisons FA/IC (ESC 2024).
- **Prévention des AVC (score CHA₂DS₂-VA) :** dans les recommandations ESC 2024, le sexe féminin ne compte plus ; l'insuffisance cardiaque (symptomatique quelle que soit la FEVG, **ou** FEVG ≤ 40 % sans symptôme) compte 1 point ; la maladie vasculaire (incluant une maladie coronaire : infarctus, angor, stents ou pontage) compte 1 point ; l'hypertension, le diabète et l'âge 65–74 ans comptent chacun 1 point. L'anticoagulation est recommandée dès **2 points ou plus (Classe I, C)** et à envisager dès **1 point (Classe IIa, C)**, avec préférence pour les anticoagulants oraux directs (AOD) plutôt que les antivitamines K / warfarine (**Classe I, A**). *Point pratique :* selon ces définitions, une cardiomyopathie ischémique avec FEVG ≤ 40 % totalise déjà 2 points.
- **Choix de l'anticoagulant :** les AOD sont au moins aussi efficaces que les antivitamines K et réduisent de moitié les hémorragies intracrâniennes. L'aspirine n'est pas une alternative pour prévenir l'AVC lié à la FA (ESC 2024).
- **Approche globale « AF-CARE » :** l'ESC place en premier la prise en charge des comorbidités et des facteurs de risque.
- **Contrôle de la fréquence cardiaque :** les bêtabloquants et/ou la digoxine agissent à la fois sur la fréquence et sur l'IC, même si dans une méta-analyse les bêtabloquants n'ont pas réduit la mortalité dans le sous-groupe ICFER avec FA (ESC 2024). L'ivabradine ne fonctionne pas en cas de FA (voir *Médicaments additionnels : ivabradine, digoxine/digitoxine et vériciguat*).

**Ablation par cathéter (essai CASTLE-HTx, 2023) :** chez 194 patients ayant une FA et une IC **terminale** évaluée pour transplantation, l'ablation comparée aux médicaments seuls a réduit le critère décès, assistance circulatoire ou transplantation urgente (**8 % contre 30 %**, HR 0,24) et les décès (6 % contre 20 %). *Limites :* essai monocentrique, petit effectif, ouvert et arrêté prématurément (ce qui peut amplifier l'effet observé) ; la FEVG moyenne était de 25 à 29 % et 61 % avaient une cause non ischémique. Il s'agit donc d'un repère de fond plutôt que d'une correspondance directe avec une cardiomyopathie ischémique autour de 35 % de FEVG.

**Recommandations ESC 2024 sur la FA dans l'ICFER :**

| Recommandation | Classe, niveau |
|---|---|
| Ablation lorsque la FA est probablement la cause de la faiblesse cardiaque (cardiomyopathie rythmique), pour la faire régresser | I, B |
| Ablation chez des patients sélectionnés avec ICFER, pour réduire les hospitalisations pour IC et prolonger la survie | IIa, B |
| Contrôle de fréquence si FEVG ≤ 40 % : bêtabloquants et/ou digoxine | I, B |
| Diltiazem et vérapamil si FEVG ≤ 40 % | Contre-indiqués |
| Amiodarone pour le contrôle du rythme au long cours, avec surveillance des effets secondaires | I, A |
| Flécaïnide et propafénone | À ne pas utiliser en cas de cœur affaibli ou de maladie coronaire |
| Ablation du nœud auriculo-ventriculaire + CRT en cas de symptômes sévères dans une FA permanente avec au moins une hospitalisation pour IC | IIa, B |
| Médicaments de l'IC en cas de FA avec VG affaibli ; iSGLT2 quelle que soit la FEVG | I, B ; I, A |

L'aténolol ne doit pas être utilisé dans l'ICFER, et les complications graves de l'ablation surviennent dans environ 3 à 7 % des cas dans les études récentes (ESC 2024).`,
    },
    {
      headingFr: 'Valvulopathies : fuite mitrale, fuite tricuspide et rétrécissement aortique',
      bodyMarkdownFr: `### Fuite mitrale secondaire (insuffisance mitrale fonctionnelle)

Lorsque le ventricule gauche se dilate, les feuillets de la valve mitrale peuvent être écartés et ne plus se fermer de façon étanche : les recommandations ESC/EACTS 2025 parlent d'**insuffisance mitrale secondaire « ventriculaire »**.

- **Fréquence :** une fuite mitrale secondaire sévère touche environ **25 % des personnes ayant une FEVG réduite** (ESC/EACTS 2025).
- **Les médicaments d'abord :** optimiser les quatre piliers (en 6 semaines environ) et envisager une CRT si les critères sont réunis est indispensable avant tout geste valvulaire ; environ **40 %** des fuites s'améliorent après 1 à 3 mois de traitement optimisé (ESC/EACTS 2025).
- **Si les symptômes persistent et la fuite reste sévère**, une **Heart Team** incluant des spécialistes de l'IC réévalue la situation une fois la volémie et la pression artérielle stabilisées. Les patients très fragiles ou à espérance de vie limitée restent souvent sous traitement médical seul.

**Réparation percutanée bord à bord par clip (M-TEER, ex. MitraClip) :**

| Essai | Résultat |
|---|---|
| **COAPT** (614 patients symptomatiques malgré traitement maximal) | À 5 ans : hospitalisations pour IC 33,1 % contre 57,2 %/an (HR 0,53) ; décès 57,3 % contre 67,2 % (HR 0,72). Événements de sécurité liés au dispositif : 1,4 % |
| **MITRA-FR** | Aucune différence sur le critère combiné à 1 et 2 ans |
| **Analyse poolée** | Moins de réhospitalisations pour IC à 24 mois (HR 0,63), sans différence significative sur les décès |

Les recommandations attribuent l'écart entre COAPT et MITRA-FR à la sélection des patients, aux mesures ETT, au traitement médical de fond, au suivi et à la technique. Elles décrivent les patients de COAPT comme « sans maladie coronaire pertinente » (la proportion exacte de cardiomyopathie ischémique ne figurait pas dans le résumé consulté ; COAPT était financé par le fabricant du dispositif).

**Parcours recommandé (ESC/EACTS 2025) :**

| Situation | Option | Classe, niveau |
|---|---|---|
| Pontage aorto-coronarien déjà prévu, fuite sévère | Réparer la valve mitrale lors de la même intervention | I, B |
| Pontage déjà prévu, fuite modérée | Chirurgie mitrale pouvant être envisagée | IIb, B |
| Maladie coronaire relevant d'une angioplastie (stents) | Stents d'abord puis réévaluation ; clip pouvant être envisagé | IIb, C |
| Pas de maladie coronaire à traiter, critères favorables ci-dessous réunis | Clip mitral (TEER) pour réduire les hospitalisations et améliorer la qualité de vie | **I, A** |
| Critères non réunis | Clip pouvant être envisagé pour les symptômes, après évaluation des thérapies avancées | IIb, B |
| Anatomie inadaptée au clip | Chirurgie mitrale pouvant être envisagée | IIb, C |

**Critères prédictifs de bénéfice du clip (pesés ensemble par la Heart Team, sans que chaque point soit isolément obligatoire) :** anatomie valvulaire compatible ; classe NYHA ≥ II ; FEVG entre 20 % et 50 % ; diamètre télésystolique VG ≤ 70 mm ; hospitalisation pour IC dans l'année ou BNP ≥ 300 pg/mL (NT-proBNP ≥ 1 000 pg/mL) ; pression artérielle pulmonaire ≤ 70 mmHg ; absence de dysfonction ventriculaire droite sévère, d'IC avancée (stade D), de maladie coronaire à traiter ou d'autre valvulopathie sévère (ESC/EACTS 2025).

### Fuite tricuspide

Selon les recommandations ESC/EACTS 2025, une Heart Team évalue d'abord la cause, le ventricule droit, la pression pulmonaire et le risque opératoire (**Classe I, C**). Un **traitement par cathéter** (clip ou remplacement tricuspide) doit être envisagé pour les fuites sévères symptomatiques malgré les médicaments chez les patients à haut risque chirurgical (**Classe IIa, A**), avec un bénéfice démontré principalement sur la **qualité de vie**. Une faiblesse sévère du ventricule gauche ou droit ou une hypertension pulmonaire élevée contre-indique généralement la chirurgie.

### Rétrécissement aortique (sténose aortique) avec cœur affaibli

- **Pourquoi l'évaluation est délicate :** un ventricule affaibli peut ne pas pousser assez fort pour créer le gradient de pression élevé habituellement observé dans une sténose sévère ; à l'inverse, un faible débit peut empêcher une valve modérément rétrécie de s'ouvrir complètement (« pseudo-sévère ») (ESC/EACTS 2025).
- **Critères de sténose « bas débit, bas gradient » :** gradient moyen < 40 mmHg, surface valvulaire ≤ 1 cm², volume d'éjection indexé ≤ 35 mL/m² et FEVG < 50 %.
- **Examens complémentaires :** échocardiographie de stress à la dobutamine (réserve de débit si le volume d'éjection augmente de ≥ 20 %) ou score calcique valvulaire au scanner (sténose sévère probable au-dessus de 2 000 UA chez l'homme et 1 200 UA chez la femme).
- **Traitement :** remplacement valvulaire dès qu'une sténose vraie sévère est confirmée (TAVI par voie fémorale privilégié à partir d'environ 70 ans si l'anatomie le permet ; chirurgie avant 70 ans si risque chirurgical faible, sur décision de la Heart Team) ; traitement médical d'IC en cas de sténose pseudo-sévère.

Pour l'évaluation, le suivi et les essais sur le rétrécissement aortique léger à modéré avec FEVG réduite, consultez *Rétrécissement aortique avec FEVG réduite*.`,
    },
    {
      headingFr: 'Diabète, hypertension artérielle et apnée du sommeil',
      bodyMarkdownFr: `- **Diabète et hypertension artérielle :** tous deux sont très fréquents dans l'ICFER (31,5 % et 66,6 % dans Dewan 2023). Le diabète était indépendamment associé à une mortalité plus élevée, contrairement à l'hypertension une fois les autres facteurs pris en compte. Les iSGLT2 font partie des quatre piliers quel que soit le statut diabétique (voir *Les médicaments de l'insuffisance cardiaque (4 piliers)*). La prise en charge spécifique de l'équilibre glycémique n'était pas couverte par les sources de cette fiche.
- **Tension artérielle dans l'ICFER :** selon les recommandations ESC 2026, aucune cible tensionnelle n'a été testée par essai randomisé dans l'IC établie : les quatre piliers abaissent eux-mêmes la tension. L'amlodipine (*Amlor*) ou la félodipine peuvent être ajoutées si besoin ; le vérapamil, le diltiazem et la moxonidine sont contre-indiqués, et les alphabloquants ne sont pas utilisés pour l'hypertension. En prévention et au stade B, la cible systolique est **< 130 mmHg (Classe I, A)** (voir *Tension artérielle et insuffisance cardiaque*).
- **Apnée du sommeil :** selon l'ESC 2026, les troubles respiratoires du sommeil touchent plus d'un tiers des patients insuffisants cardiaques et justifient une étude du sommeil en cas de suspicion afin de distinguer apnée obstructive (SAOS) et centrale (SACS). La servo-ventilation adaptative (ASV) est **non recommandée** dans l'ICFER avec apnée majoritairement centrale (**Classe III, A**) en raison d'une surmortalité dans SERVE-HF (voir *Apnée du sommeil et insuffisance cardiaque*).`,
    },
  ],
  relatedArticleSlugs: [
    'comprendre-le-diagnostic',
    'medicaments-effets-secondaires-suivi',
    'medicaments-insuffisance-cardiaque',
    'carence-martiale-et-fer-iv',
    'examens-et-chiffres',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'stenose-aortique-fevg-reduite',
    'thrombus-vg-et-anticoagulants',
    'cholesterol-et-prevention-secondaire',
    'finerenone-et-nouveaux-arm',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'tension-arterielle-insuffisance-cardiaque',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'poids-obesite-et-denutrition',
  ],
  sources: [
    { label: 'Dewan et al. (2023)', detail: 'Prévalence et risque de mortalité des comorbidités chez 15 066 patients de PARADIGM-HF et ATMOSPHERE' },
    { label: 'Beldhuis et al. (2022)', detail: 'Revue ICFER et maladie rénale chronique : prescription, efficacité par stade et potassium' },
    { label: 'Recommandations ESC 2024 sur la fibrillation atriale', detail: "Score CHA₂DS₂-VA, anticoagulation par AOD, contrôle de fréquence/rythme et ablation dans l'ICFER" },
    { label: 'Essai CASTLE-HTx (2023)', detail: "Ablation de la FA dans l'insuffisance cardiaque terminale (résumé)" },
    { label: 'Recommandations ESC/EACTS 2025 sur les valvulopathies', detail: 'Insuffisance mitrale secondaire, critères de clip (TEER), fuite tricuspide et rétrécissement aortique bas débit' },
    { label: 'COAPT (résultats à 5 ans) et MITRA-FR', detail: "Essais du clip mitral dans l'insuffisance mitrale secondaire" },
    { label: 'ESC 2026 (tension artérielle, sommeil, ARM/finérénone), FINE-HEART, DIAMOND et Ahmed (2006)', detail: 'Hypertension, apnée du sommeil, finérénone, chélateurs de potassium et digoxine' },
    { label: 'ACC/AHA/HFSA 2022 (points clés)', detail: 'Liste des comorbidités abordées dans les recommandations américaines' },
  ],
  disclaimerType: 'medical',
};
