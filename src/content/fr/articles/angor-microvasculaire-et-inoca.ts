import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'angor-microvasculaire-et-inoca',
  sourceWikiPath: 'wiki/concepts/microvascular-angina-and-inoca.md',
  titleFr: 'Angor microvasculaire, spasme coronaire et INOCA',
  category: 'diagnostic',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'dysfonction-microvasculaire',
    'angor-microvasculaire',
    'inoca',
    'anoca',
    'angor-vasospastique',
    'réserve-coronaire',
    'tep',
    'cormica',
    'warrior',
    'angor',
    'icfer',
  ],
  aliases: [
    'Dysfonction microvasculaire coronaire',
    'DMC',
    'CMD',
    'Angor microvasculaire',
    'Maladie des petits vaisseaux du cœur',
    'INOCA',
    'ANOCA',
    'Ischémie sans sténose coronaire obstructive',
    'Angor vasospastique',
    'Spasme coronaire',
    'Réserve de flux coronaire',
    'CFR',
    'IMR',
    'CorMicA',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Une douleur thoracique d'effort (angor) ne vient pas toujours d'une grosse artère coronaire rétrécie. Le cœur possède aussi un réseau de très petits vaisseaux invisibles à la coronarographie qui peuvent mal se dilater, ou des artères qui se contractent brutalement par spasme. Ce mécanisme explique certains angors qui persistent malgré des artères ouvertes, y compris après stents ou pontage, et il est très fréquent en cas de cœur affaibli. Des examens dédiés et un ajustement ciblé des médicaments peuvent vous aider, en évitant certaines molécules déconseillées dans l'insuffisance cardiaque à FEVG réduite.",
  sections: [
    {
      headingFr: 'Comprendre les termes : ANOCA, INOCA, petits vaisseaux et spasme',
      bodyMarkdownFr: `Lorsque le muscle cardiaque manque d'oxygène malgré des artères coronaires principales libres (ou déjà traitées par stent ou pontage), votre cardiologue peut employer plusieurs termes :

- **ANOCA / INOCA :** angor (*Angina*) ou ischémie documentée (*Ischaemia*) sans sténose coronaire obstructive, généralement définie par l'absence de rétrécissement d'au moins 50 % sur les grosses artères (seuil utilisé dans les essais CorMicA et WARRIOR).
- **Les mécanismes (*endotypes*) :** il peut s'agir d'un **angor microvasculaire** (les très petits vaisseaux ne se dilatent pas assez à l'effort), d'un **angor vasospastique** (spasme brutal d'une grosse artère), d'un spasme microvasculaire ou d'une forme mixte. Chez des patients sélectionnés sans sténose obstructive, les recommandations européennes ESC 2024 citent environ **41 %** d'angor microvasculaire et **40 %** d'angor vasospastique.
- **Réserve de flux coronaire (\`CFR\`) et résistance microcirculatoire (\`IMR\`) :** la \`CFR\` mesure la capacité du débit sanguin cardiaque à augmenter entre le repos et l'effort maximal. En TEP cardiaque, une réserve myocardique **inférieure à 2,0** est anormale (inférieure à 2,5 en l'absence de sténose obstructive). Lors d'une coronarographie avec guide de pression, un indice \`IMR\` **supérieur ou égal à 25** indique une dysfonction microvasculaire (ESC 2024).`,
    },
    {
      headingFr: 'Angor persistant après stents ou pontage et spécificités en ICFER',
      bodyMarkdownFr: `Une douleur thoracique qui persiste après une pose de stent ou un pontage mérite toujours d'être signalée à votre cardiologue, même lorsque le contrôle montre des artères ou des pontages perméables :

- **Vérifier d'abord les causes mécaniques :** votre équipe s'assure en priorité qu'il n'existe pas de resténose dans un stent, d'occlusion d'un pontage ou de nouveau rétrécissement sur une autre artère (voir *Progression coronaire et imagerie de suivi*).
- **Un phénomène fréquent après angioplastie :** après la pose d'un stent, environ **4 artères traitées sur 10** présentent une dysfonction microvasculaire, qui peut expliquer des symptômes persistants et s'associe à un risque plus élevé d'événements.
- **Très fréquent lorsque la FEVG est réduite :** dans les études par TEP cardiaque, une altération de la réserve coronaire est retrouvée chez une large majorité des personnes ayant une FEVG abaissée, aussi bien de cause ischémique que non ischémique.
- **Ce que cela change pour vos médicaments en ICFER :**
  - Plusieurs traitements utilisés dans l'angor microvasculaire font **déjà partie de votre traitement de fond** de l'insuffisance cardiaque (bêtabloquants, IEC ou ARNI, statines).
  - **Point de vigilance majeur en cas de spasme :** les inhibiteurs calciques non dihydropyridiniques (**vérapamil — *Isoptine*** et **diltiazem — *Tildiem***) sont **à éviter dans l'ICFER** car ils affaiblissent la contraction cardiaque, et l'**ivabradine (*Procoralan*)** ne doit jamais leur être associée. Lorsque un inhibiteur calcique ou un dérivé nitré est discuté, votre cardiologue se tourne vers des options compatibles avec votre FEVG, comme l'**amlodipine (*Amlor*)**, la **félodipine** ou les **dérivés nitrés** (voir *Angor et médicaments anti-angineux*).`,
    },
    {
      headingFr: "Recommandations ESC 2024, données d'études et limites des preuves",
      depth: 'evidence',
      bodyMarkdownFr: `### Dysfonction microvasculaire dans l'ICFER (études par TEP cardiaque)

| Étude | Population | Résultats principaux | Applicabilité à l'ICFER ischémique |
|---|---|---|---|
| **Majmudar 2015** (*EHJ-CVI*, texte intégral) | 510 patients avec FEVG ≤ 45 % explorés par TEP : 382 **ischémiques** (FEVG médiane 33 %) et 128 **non ischémiques** (FEVG médiane 36 %) | \`CFR\` < 2,0 chez **85,1 %** des ischémiques contre **71,9 %** des non-ischémiques. Avec \`CFR\` ≤ 1,65 vs > 1,65 : décès cardiaque **18,2 % vs 8,2 %**, événements majeurs **31,2 % vs 17,1 %** (chez les ischémiques seuls : décès cardiaque 20 % vs 9,8 %). L'ajout de la \`CFR\` améliorait la prédiction du risque | **Directe** (sous-groupe ischémique isolé), mais observationnelle ; environ deux tiers des ischémiques étaient déjà revascularisés |
| **Taqueti 2015** (*Circulation*, texte intégral) | 329 patients ayant eu TEP et coronarographie (**FEVG < 40 % et IC exclues**) | Chaque baisse de 1 unité de \`CFR\` doublait décès CV ou hospitalisation IC (**HR 2,02**, IC 95 % : 1,20–3,40), indépendamment de l'anatomie coronaire. Interaction avec pontage vs stents (p = 0,04 ; seulement 39 pontages) | **Indirecte** ; résultat sur le pontage purement exploratoire |

- *Note méthodologique :* dans Majmudar 2015, un HR ajusté de 0,62 pour la \`CFR\` plus élevée et un chiffre de 1,78 dans un tableau ne sont pas strictement inverses l'un de l'autre ; la direction pronostique est constante mais l'ampleur exacte est à citer avec prudence. **Aucun essai randomisé n'a encore testé de traitement spécifique de la dysfonction microvasculaire pour améliorer la survie dans l'ICFER.**
- **Méta-analyse post-angioplastie (Li 2025) :** dysfonction microvasculaire retrouvée dans **42 %** des artères stentées (36 % en syndrome coronaire chronique, 42 % après syndrome aigu, 75 % en cas de flux altéré), associée à plus d'événements majeurs (**HR 3,10**) et de décès cardiaques ou réhospitalisations pour IC (**HR 4,66**), avec une très forte hétérogénéité (I² = 97 %) et sans regroupement de l'angor seul.

### Recommandations ESC 2024 (examens et traitements)

*Les classes ci-dessous proviennent d'un commentaire publié en 2025 reproduisant le tableau des recommandations ESC 2024 ; les seuils ont été lus directement dans le texte ESC 2024.*

| Recommandation ESC 2024 | Situation | Classe / niveau |
|---|---|---|
| Test invasif de fonction coronaire (guide de pression / acétylcholine) | Cause incertaine après bilan non invasif, ou symptômes persistants et qualité de vie altérée sous traitement avec suspicion d'ANOCA/INOCA | **I, B** |
| Mesure non invasive de la réserve de flux (TEP, IRM cardiaque ou Doppler en échographie de stress) | Suspicion de dysfonction microvasculaire | **IIb, B** |
| ECG ambulatoire (Holter) | Suspicion de spasme coronaire | **IIa, B** |
| Adapter le traitement au résultat du test de fonction coronaire | ANOCA / INOCA | **IIa, A** |
| Bêtabloquant (angor microvasculaire) ; IEC (dysfonction endothéliale) | Angor microvasculaire | **IIa, B** |
| Inhibiteur calcique (I, A) ; dérivés nitrés (IIa, B) | Angor vasospastique (attention : **éviter vérapamil et diltiazem en ICFER**) | **I, A** / **IIa, B** |
| Associations thérapeutiques | Endotypes mixtes | **IIb, B** |
| Ivabradine associée au diltiazem ou au vérapamil | Contre-indication | **Non recommandé** |

*ESC 2024 invite aussi (texte non gradé) à envisager un mécanisme ANOCA/INOCA lorsque l'angor persiste après revascularisation.*

### Essais thérapeutiques (indirects pour l'ICFER)

- **CorMicA (Ford et al., *JACC Cardiovasc Interv* 2020, 151 patients, texte intégral) :** adapter le traitement au résultat d'un test invasif d'endotype a amélioré le score d'angor de Seattle de **+13,6 points** à 1 an (IC 95 % : 7,3–19,9) et la qualité de vie, sans modifier les événements majeurs (12 % vs 11 %). La FEVG n'était pas rapportée.
- **WARRIOR (*Open Heart* 2026, 2 476 femmes avec INOCA, résumé et synthèse ACC) :** stratégie intensive (statine, IEC/ARA2 et aspirine) versus soins usuels — résultat **neutre** sur les événements (17,8 % vs 16,2 % ; **HR 1,13**, IC 95 % : 0,94–1,37), dominés par les hospitalisations pour angor. **Les cardiomyopathies étaient exclues** (durée de suivi divergente entre résumés : 2,5 vs 5 ans).

### Limites des preuves

Les classes ESC 2024 proviennent d'une source secondaire, le texte intégral de WARRIOR n'était pas accessible, la TEP de débit absolu reste limitée à certains centres experts, et les données dans l'ICFER demeurent purement pronostiques et observationnelles.`,
    },
  ],
  relatedArticleSlugs: [
    'angor-et-medicaments-anti-angineux',
    'progression-coronaire-et-imagerie-de-suivi',
    'efx-strain-troponine-et-imagerie-cardiaque',
    'confirmer-la-cause-dysfonction-vg',
    'revascularisation-pontage-stents',
    'risque-inflammatoire-residuel',
    'questions-equipe-cardiologie',
  ],
  sources: [
    {
      label: 'ESC 2024 — Syndromes coronaires chroniques (section ANOCA/INOCA et commentaire Reynolds & Smilowitz 2025)',
      detail: 'Seuils de réserve coronaire (CFR < 2,0–2,5, IMR ≥ 25), grades des tests invasifs/non invasifs et traitements par endotype',
    },
    {
      label: 'Majmudar et al. (EHJ-CVI 2015) et Taqueti et al. (Circulation 2015)',
      detail: 'Prévalence et valeur pronostique de la réserve de flux coronaire en TEP dans les cardiomyopathies ischémiques et non ischémiques',
    },
    {
      label: 'Li et al. (2025, méta-analyse post-angioplastie)',
      detail: 'Fréquence (42 %) et pronostic de la dysfonction microvasculaire dans les artères stentées',
    },
    {
      label: 'Essais CorMicA (JACC Cardiovasc Interv 2020) et WARRIOR (Open Heart 2026)',
      detail: 'Amélioration symptomatique par traitement guidé par endotype (CorMicA) et neutralité du traitement intensif chez les femmes INOCA sans cardiomyopathie (WARRIOR)',
    },
  ],
  disclaimerType: 'medical',
};
