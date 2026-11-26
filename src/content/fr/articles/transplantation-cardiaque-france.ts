import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'transplantation-cardiaque-france',
  sourceWikiPath: 'wiki/concepts/heart-transplantation.md',
  titleFr: 'Transplantation cardiaque : indications, parcours en France et survie',
  category: 'traitements',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'transplantation-cardiaque',
    'greffe-cardiaque',
    'insuffisance-cardiaque-avancee',
    'france',
    'agence-de-la-biomedecine',
    'score-coeur',
    'liste-d-attente',
    'survie',
  ],
  aliases: [
    'Transplantation cardiaque',
    'Greffe cardiaque',
    'Greffe du cœur',
    'Score cœur',
    'Score coeur',
    'Agence de la biomédecine',
    'ABM',
    'Maastricht 3',
    'Don DCD',
    'Xénotransplantation',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    'La transplantation cardiaque consiste à remplacer un cœur défaillant par un greffon issu d’un donneur. Elle reste le traitement de référence de l’insuffisance cardiaque avancée lorsqu’il n’existe pas de contre-indication, mais les greffons sont rares et tout le monde ne peut pas en bénéficier. En France, environ 420 greffes cardiaques sont réalisées chaque année (421 en 2025), dont environ 3 sur 10 pour une cardiopathie ischémique ; environ 7 receveurs sur 10 sont en vie à 5 ans (près de 2 sur 3 en cas d’origine ischémique, avec une survie médiane proche de 10 ans). Après la greffe, un traitement antirejet est indispensable à vie, avec un suivi rapproché et des risques d’infections, d’atteinte rénale, de diabète, de cancers cutanés et de rétrécissement des artères du greffon. Cette option n’est envisagée qu’au stade avancé, jamais pour un cœur stable à FEVG autour de 35 %.',
  sections: [
    {
      headingFr: 'Ce que disent les recommandations et comment se fait le bilan',
      bodyMarkdownFr: `- **ESC 2026 :** la transplantation cardiaque est recommandée chez des patients sélectionnés atteints d’insuffisance cardiaque avancée (**Classe I, niveau C**). Bien qu’elle n’ait jamais été évaluée dans un essai randomisé, elle demeure le traitement de référence en l’absence de contre-indication.
- **NICE NG106 (Royaume-Uni, repère comparatif) :** invite à envisager un avis spécialisé pour transplantation en cas de symptômes sévères réfractaires ou de choc cardiogénique réfractaire (recommandation issue de 2003).
- **Âge :** les candidats de moins de 65 ans présentent souvent le profil le plus favorable, mais la plupart des programmes acceptent jusqu’à **70 ans** ; l’âge biologique compte tout autant que l’âge chronologique.

### Contre-indications principales (ESC 2026, Tableau 17)

- **Contre-indications absolues :** incapacité à suivre le traitement immunosuppresseur et le suivi (par exemple en cas de démence) ; autres maladies graves de mauvais pronostic que la greffe ne corrigerait pas.
- **Autres contre-indications (souvent relatives ou réévaluables) :** infection active (une infection de LVAD peut toutefois constituer en soi une indication de greffe) ; atteinte vasculaire périphérique ou cérébrovasculaire sévère ; **résistances vasculaires pulmonaires restant élevées malgré les médicaments** (un LVAD peut alors être implanté au préalable en « pont vers la candidature » afin de les abaisser) ; antécédent de cancer (certains cas sélectionnés restent éligibles) ; cirrhose ou insuffisance rénale irréversibles (une double greffe cœur-foie ou cœur-rein peut être discutée) ; **IMC > 35 kg/m²** ou dénutrition sévère ; tabagisme, mésusage d’alcool ou de substances dans les 6 derniers mois ; instabilité psychologique ; soutien social insuffisant.

### Examens utilisés dans le bilan pré-greffe

D’après une revue américaine de 2025 (Kittleson et al., la recommandation ISHLT 2024 étant sous accès payant) :
- **Épreuve d’effort avec analyse des gaz (EFX / CPET) :** un pic de VO2 inférieur ou égal à **13–14 mL/kg/min** chez l’homme et à **10–11 mL/kg/min** chez la femme sous bêtabloquant soutient l’inscription sur liste ; une pente **VE/VCO2 > 35** constitue un autre repère.
- **Cathétérisme cardiaque droit :** mesure les pressions et les résistances dans la circulation pulmonaire. Si elles sont élevées, un test pharmacologique vérifie si elles s’abaissent. Des résistances vasculaires pulmonaires (RVP) **supérieures à environ 5 unités Wood** ne répondant pas aux médicaments représentent une contre-indication relative (les seuils exacts varient légèrement entre le tableau et le texte de la revue ; voir aussi l’article « Ventricule droit et hypertension pulmonaire dans l’insuffisance cardiaque »).
- **Autres contre-indications relatives citées dans cette revue :** âge > 70 ans, IMC ≥ 35 kg/m², diabète mal équilibré (**HbA1c > 7,5 %**) ou compliqué d’atteinte d’organe, **DFGe < 30 mL/min/1,73 m²**.
- **Absolues selon cette revue :** cancer actif ou métastatique, non-observance répétée, absence d’aidant.`,
    },
    {
      headingFr: 'La transplantation cardiaque en France (Agence de la biomédecine, RAMS 2025)',
      bodyMarkdownFr: `Les données officielles françaises proviennent du **Rapport annuel médical et scientifique (RAMS) 2025** de l’**Agence de la biomédecine (ABM)** et du dossier d’activité 2024 :

### Activité et liste d’attente

| Indicateur (France) | Chiffre officiel ABM |
|---|---|
| Greffes cardiaques en **2025** | **421** (**6,2 par million d’habitants**), dans **23 centres** |
| Années précédentes | 370 (2020), 409 (2021), 411 (2022), 384 (2023), 414 (2024) |
| Nouvelles inscriptions sur liste en 2025 | **581**, dont **31,8 %** pour cardiopathie ischémique |
| Part des greffes pour cardiopathie ischémique | **30,2 %** |
| Candidats inscrits au 1er janvier 2026 | **241** en liste active, **210** en contre-indication temporaire |
| Décès en liste ou sorties pour aggravation en 2025 | **97 sur 1 002 candidats** (+31 % par rapport à 2024) |

Tous organes confondus en France en 2024, **852 personnes** sont décédées en liste d’attente, et les familles ont rapporté une opposition du défunt au prélèvement dans **36,4 %** des cas.

### Durée d’attente et « score cœur »

Parmi les candidats inscrits entre 2018 et 2025, **72 %** ont été greffés dans les 12 mois et **12 %** sont décédés ou sortis de liste. La durée médiane d’attente globale était de **2,2 mois** (hors périodes d’inactivité), mais elle dépend fortement du degré d’urgence :

| Situation à l’inscription | Attente médiane | Décès ou sortie de liste à 12 mois |
|---|---|---|
| Sans assistance circulatoire | environ **3,8 mois** | **7 %** |
| Sous assistance de courte durée (ex. ECMO) | environ **0,3 mois** | **22 %** |

**Le « score cœur » :** en vigueur depuis **2018**, ce score national attribue les greffons selon l’urgence médicale : les personnes les plus gravement malades obtiennent le score le plus élevé et sont greffées le plus rapidement (score **< 300** : attente d’environ **8 mois** ; score **≥ 800** : environ **0,3 mois**). L’ABM observe que ce mécanisme n’a pas dégradé la survie après greffe. En 2025, **31 %** des greffes adultes ont été attribuées via une procédure d’exception sur avis d’un collège d’experts — le plus souvent pour une contre-indication au LVAD, des orages rythmiques ventriculaires incontrôlables, un cœur artificiel total ou une assistance biventriculaire, ou une infection de LVAD. Un groupe de travail mis en place en **2025** révise actuellement le score.

### Survie après transplantation en France

| Groupe (greffes 2004 à mi-2024) | 1 an | 5 ans | 10 ans | Médiane |
|---|---|---|---|---|
| Tous receveurs | **77,9 %** | **68,8 %** | **56,8 %** | environ **12,7 ans** |
| **Cardiopathie ischémique** | **75,7 %** | **64,3 %** | **49,4 %** | environ **9,8 ans** |
| Cardiomyopathie dilatée | 80,9 % | 72,8 % | 61,1 % | — |
| Période récente (2018–2024, tous receveurs) | **80,0 %** | **70,2 %** | — | — |

Une **dysfonction précoce du greffon** est survenue dans **41,3 %** des greffes réalisées en 2025, un taux que l’ABM souligne comme nettement supérieur à celui rapporté dans d’autres pays.`,
    },
    {
      headingFr: 'Repères internationaux (Registre ISHLT) et suites au long cours',
      bodyMarkdownFr: `Le 36e rapport du registre international **ISHLT (2019)** couvre **131 249 transplantations cardiaques adultes** dans le monde jusqu’en juin 2018 :

- **Survie médiane :** **12,5 ans**, et **14,8 ans** pour les personnes qui passent le cap de la première année (greffes 2002–2009). L’ESC 2026 résume la survie post-greffe à **80–90 % à 1 an** et environ **12,5 ans** de médiane.
- **Part de la cardiomyopathie ischémique :** **32 %** des indications (2010–2018), une proportion en recul progressif.
- **Profil de survie dans les causes ischémiques :** dans le registre ISHLT, les patients greffés pour cardiopathie ischémique affichaient une des meilleures survies à 1 an, mais une des moins bonnes survies au long cours après la première année.
- **Contraste ISHLT vs France :** dans les données françaises de l’ABM, la survie à 1 an pour cause ischémique (**75,7 %**) est inférieure à celle observée pour cardiomyopathie dilatée (**80,9 %**). Ces deux jeux de données diffèrent par les périodes étudiées, les pays couverts et les méthodes statistiques.
- **Complications à 10 ans (ISHLT) :** près de la moitié des receveurs développent une **vasculopathie chronique du greffon** (rétrécissement diffus des artères coronaires du cœur greffé), près d’un quart présentent une insuffisance rénale sévère, et **28 %** ont eu un cancer, le plus souvent cutané. Le suivi spécialisé à vie et la photoprotection sont donc essentiels.`,
    },
    {
      headingFr: 'Élargir l’accès aux greffons : don Maastricht 3 (DCD) et recherche',
      bodyMarkdownFr: `- **Don après arrêt circulatoire (DCD / protocole Maastricht 3) :** dans un essai randomisé américain portant sur **180 patients greffés** (Schroder et al., 2023), la survie ajustée à 6 mois était de **94 %** avec un cœur issu d’un don après arrêt circulatoire contre **90 %** avec un don standard après mort encéphalique, atteignant la non-infériorité (étude financée par TransMedics, suivi court). En France, l’ABM a défini un protocole pour le prélèvement cardiaque Maastricht 3, mais le rapport 2025 ne comporte pas encore de bilan chiffré français pour le cœur ; les machines de perfusion cardiaque sont désormais financées.
- **Xénotransplantation (cœur de porc génétiquement modifié) :** deux patients américains (en 2022 et 2023) ont survécu **60 et 40 jours**. En **mai 2026**, la FDA américaine a autorisé le premier essai prospectif (**EXPRESS**) chez des personnes âgées de 50 ans ou plus en insuffisance cardiaque stade D sans autre option thérapeutique. Il n’existe aucun programme de ce type en France ni en Europe.`,
    },
    {
      headingFr: 'Application à une cardiomyopathie ischémique à FEVG autour de 35 % et limites des preuves',
      bodyMarkdownFr: `| Source | Population | Applicabilité à une FEVG ~35 % |
|---|---|---|
| **ABM 2025 (cause ischémique)** | Receveurs français greffés pour cardiopathie ischémique | **Directe pour la cause**, mais chez des personnes au stade avancé |
| **Registre ISHLT (2019)** | Receveurs adultes mondiaux (32 % ischémiques) | **Partielle** |
| **Essai DCD (Schroder 2023)** | Candidats américains à la greffe, cause non précisée | **Indirecte** |

- La transplantation cardiaque n’est discutée que si la maladie évolue vers une **insuffisance cardiaque avancée**. Avec une FEVG autour de 35 % et un état stable, elle n’est pas à l’ordre du jour.
- La cardiopathie ischémique reste l’une des causes les plus fréquentes de greffe en France (environ **30 %**), avec une survie à long terme un peu inférieure à celle des cardiomyopathies dilatées (les sources consultées constatent cet écart sans en détailler l’ensemble des mécanismes).
- L’ESC 2026 classant l’**artériopathie périphérique ou cérébrovasculaire sévère** et l’**insuffisance rénale irréversible** parmi les contre-indications, ces organes font systématiquement partie du bilan pré-greffe.

### Limites des preuves

- La recommandation ISHLT 2024 sur l’inscription en liste étant sous accès payant, les seuils d’évaluation résumés ici proviennent d’une revue narrative d’un auteur unique (Kittleson 2025).
- Le rapport complet ISHLT analysé date de 2019 ; des tableaux de bord plus récents n’ont pas été consultés.
- Le guide technique détaillé du « score cœur » et l’historique de la procédure « super-urgence » n’étaient pas accessibles en texte intégral, et aucune page patient française complète sur le parcours de greffe cardiaque n’a été trouvée dans les sources compilées.`,
    },
  ],
  relatedArticleSlugs: [
    'insuffisance-cardiaque-avancee-stade-d',
    'assistance-circulatoire-lvad',
    'ventricule-droit-et-hypertension-pulmonaire',
    'maladie-renale-insuffisance-cardiaque',
    'vivre-avec-insuffisance-cardiaque-en-france',
    'soins-de-support-et-anticipation',
    'inotropes-insuffisance-cardiaque-avancee',
    'efx-strain-troponine-et-imagerie-cardiaque',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 sur l’insuffisance cardiaque (section 8)',
      detail: 'Recommandation de transplantation (Classe I, C), repères d’âge et contre-indications (Tableau 17, texte intégral)',
    },
    {
      label: 'Agence de la biomédecine — RAMS 2025 (greffe cardiaque) et dossier d’activité 2024',
      detail: 'Statistiques officielles françaises : 421 greffes en 2025, 23 centres, délais d’attente, score cœur, survie par cause et taux d’opposition',
    },
    {
      label: 'Registre ISHLT — 36e rapport adulte sur la transplantation cardiaque (2019)',
      detail: '131 249 greffes mondiales, survie médiane, part des causes ischémiques et complications à 10 ans (texte intégral)',
    },
    {
      label: 'Revue Kittleson (2025) sur l’évaluation pré-transplantation',
      detail: 'Seuils usuels à l’EFX (pic de VO2, pente VE/VCO2), cathétérisme droit et contre-indications relatives/absolues',
    },
    {
      label: 'Essai Schroder (2023) sur le don après arrêt circulatoire (DCD) et revue xénotransplantation (Abdelrehim 2026)',
      detail: 'Non-infériorité à 6 mois des cœurs DCD et autorisation FDA de l’essai EXPRESS en mai 2026',
    },
    {
      label: 'Symposium mondial WSPH 2024 (groupe 2) et NICE NG106 (2025)',
      detail: 'Résistances vasculaires pulmonaires dans le bilan de greffe et repère britannique d’orientation spécialisée',
    },
  ],
  disclaimerType: 'medical',
};
