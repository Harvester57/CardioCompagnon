import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'observance-et-oubli-de-dose',
  sourceWikiPath: 'wiki/concepts/adherence-and-missed-doses.md',
  titleFr: 'Observance, oubli de dose, génériques et suivi pharmacien',
  category: 'traitements',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'observance',
    'persistance',
    'oubli-de-dose',
    'aod',
    'arrêt-bêtabloquant',
    'polypilule',
    'génériques',
    'non-substituable',
    'bilan-partagé-de-médication',
    'pharmacien',
    'france',
    'pilulier',
  ],
  aliases: [
    'Oubli de dose',
    'Comprimé oublié',
    'Observance médicamenteuse',
    'Arrêt bêtabloquant',
    'Polypilule',
    'Génériques France',
    'Non substituable',
    'Bilan partagé de médication',
    'Pilulier',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Oublier ponctuellement un comprimé arrive à tout le monde ; l'essentiel est d'éviter les oublis répétés et de ne jamais interrompre un traitement de fond sans avis médical. En règle générale, ne prenez jamais de double dose pour rattraper un oubli : chaque médicament — en particulier les anticoagulants — a sa propre règle. Ne stoppez jamais un bêtabloquant brutalement, surtout en cas de maladie coronaire. En France, votre pharmacien substitue par défaut les génériques et propose des entretiens pris en charge (bilan partagé de médication et suivi anticoagulants) pour sécuriser votre traitement.",
  sections: [
    {
      headingFr: 'Que faire en cas de comprimé oublié ? (règles des notices)',
      depth: 'patient',
      bodyMarkdownFr: `**Règle générale :** ne prenez **jamais de double dose** pour compenser un oubli (la seule exception retrouvée concerne les 21 premiers jours d'un traitement curatif de caillot par rivaroxaban 15 mg). Les règles ci-dessous proviennent des notices officielles européennes (EMA) ou, pour certains génériques anciens, des notices britanniques :

| Médicament (DCI et nom usuel) | Conduite prévue par la notice en cas d'oubli |
|---|---|
| **Apixaban (*Eliquis*, 2 fois/j)** | **Oubli du matin :** prenez-le dès que vous y pensez (possible en même temps que la prise du soir). **Oubli du soir :** uniquement le même soir ; ne jamais prendre deux doses le lendemain matin. Puis reprenez l'horaire habituel |
| **Rivaroxaban 15 ou 20 mg × 1/j (*Xarelto*)** | Prenez-le dès que vous y pensez, puis une fois par jour dès le lendemain ; jamais deux doses le même jour *(exception : pendant les 21 premiers jours d'un traitement de caillot à 15 mg × 2/j, prendre immédiatement pour atteindre 30 mg sur la journée)* |
| **Rivaroxaban 2,5 mg × 2/j** (avec aspirine en maladie coronaire) | Sautez la dose oubliée et prenez la suivante à l'heure habituelle |
| **Édoxaban (*Lixiana*)** | Prenez-le dès que vous y pensez, puis une fois par jour dès le lendemain ; jamais de double dose le même jour |
| **Dabigatran 110/150 mg × 2/j (*Pradaxa*)** | Peut être pris jusqu'à **6 heures avant** la dose suivante ; à moins de 6 heures, sautez la dose. Jamais de double dose |
| **Sacubitril/valsartan (*Entresto*)** | Sautez la dose oubliée et prenez la suivante à l'horaire habituel |
| **Empagliflozine (*Jardiance*)** | Prenez dès que vous y pensez sans doubler le même jour (notice patient : prendre s'il reste **12 heures ou plus** avant la prochaine prise, sinon sauter) |
| **Dapagliflozine (*Forxiga*)** | Notice patient : même règle des **12 heures** |
| **Bisoprolol (*Cardensiel*)** | Pas de règle d'oubli unique dans la notice ; **ne jamais arrêter brutalement**, surtout en maladie coronaire (réduction progressive indispensable) |
| **Carvédilol (*Kredex*)** | Arrêt progressif sur environ 2 semaines ; en cas d'interruption de **plus d'une semaine**, reprise à dose plus faible (au-delà de 2 semaines, reprise à 3,125 mg × 2/j sur avis médical) |
| **Furosémide (*Lasilix*)** | Prenez dès que vous y pensez sans jamais doubler la dose |

- **Anticoagulants :** toute interruption augmente le risque de caillot. Si vous avez oublié plus d'une prise ou en cas de doute, appelez votre **pharmacien** ou votre **médecin**.
- **Plusieurs jours d'oubli (voyage, rupture de boîte) :** reprendre directement à votre pleine dose habituelle peut provoquer une baisse de tension ou un ralentissement excessif du pouls (la notice du carvédilol le précise explicitement). Contactez votre médecin ou votre pharmacien avant de reprendre.`,
    },
    {
      headingFr: 'Génériques, mention « non substituable » et accompagnement pharmacien en France',
      depth: 'patient',
      bodyMarkdownFr: `### Génériques et règles de substitution en France (au 26 novembre 2026)

- **Substitution par défaut :** le pharmacien délivre par défaut un médicament générique (ou hybride/biosimilaire lorsque la réglementation le permet) à la place du princeps.
- **Refus sans justification médicale codée :** depuis le **1er janvier 2020**, refuser un générique sans motif médical entraîne la perte du **tiers payant** (vous avancez l'intégralité du prix et êtes remboursé ultérieurement sur feuille de soins sur la base du prix du générique, la différence restant à votre charge).
- **Codes « non substituable » reconnus** (inscrits par le médecin sur chaque ligne concernée) :
  - **MTE** (marge thérapeutique étroite) : réservé à une liste réglementaire restreinte (13 substances en 2020 comme la lévothyroxine ou certains antiépileptiques ; **aucun médicament cardiaque** n'y figurait en 2020).
  - **EFG** : enfant de moins de 6 ans sans forme générique adaptée.
  - **CIF** : contre-indication formelle démontrée à un excipient présent dans tous les génériques.
  - **MTE-PH** : décision propre du pharmacien pour une substance MTE.
- **Maintien du tiers payant :** acquis avec un code valide, lorsque le générique n'est pas moins cher ou en cas de rupture de stock du générique.
- **Réflexe pratique :** la couleur, la forme et le nom sur la boîte peuvent changer lors d'une substitution. Garder une **liste à jour en nom de molécule (DCI)** évite le risque de prendre deux fois le même médicament sous deux noms commerciaux différents.

### Accompagnement pris en charge en pharmacie d'officine (Assurance Maladie)

Vous pouvez demander directement à votre pharmacien habituel deux programmes d'accompagnement (pris en charge à **70 %** par l'Assurance Maladie selon ameli.fr ; la part complémentaire éventuelle dépend de votre couverture) :

- **Bilan partagé de médication (BPM) :** ouvert aux personnes de **plus de 65 ans** atteintes d'au moins une maladie chronique et prenant **au moins 5 médicaments (substances actives) depuis au moins 6 mois**. Il comprend un entretien de recueil (ordonnances et automédication), une analyse transmise à votre médecin traitant et à *Mon espace santé*, puis un entretien de conseil et un suivi d'observance.
- **Accompagnement sous anticoagulants (AVK ou AOD depuis 6 mois ou plus) :** entretiens thématiques dédiés à la sécurité du traitement, incluant précisément la conduite à tenir en cas d'oubli de dose.

### Ce qui aide concrètement au quotidien

- **Un pilulier semainier** ou un conditionnement calendrier aide à visualiser immédiatement si la prise du jour a été faite.
- **Un horaire fixe** ancré dans votre routine quotidienne et une **pharmacie unique** centralisant l'ensemble de votre traitement simplifient le suivi.`,
    },
    {
      headingFr: 'Données scientifiques : persistance, arrêt des bêtabloquants, polypilules et aides',
      depth: 'evidence',
      bodyMarkdownFr: `### Persistance en vie réelle et impact sur le pronostic

- **Registre norvégien (Ødegaard, *ESC Heart Fail* 2023, 54 899 patients IC, FEVG non enregistrée) :** à 1 an, l'observance (≥ 80 % des jours couverts) atteignait **83 %** pour les bêtabloquants, **81 %** pour les IEC/ARA2, **84 %** pour le sacubitril/valsartan et **61 %** pour les ARM (seulement 42 % observants à 2 classes et 5 % aux 3 classes ensemble). La **persistance** (sans interruption > 30 jours) à 1, 2 et 5 ans chutait à **72 / 58 / 38 %** (bêtabloquants), **71 / 57 / 37 %** (IEC/ARA2) et **48 / 31 / 15 %** (ARM), avec les décrochages les plus marqués à 3 et 6 mois.
- **Revue de 52 études (Báez-Gutiérrez 2025, 2 001 178 patients, résumé) :** observance globalement < 80 % (la plus faible pour les ARM et les schémas complexes), associée à davantage d'hospitalisations et de décès.
- **Déterminants (Oosterom-Calo 2013, 11 études) :** un antécédent d'hospitalisation s'associait à une meilleure observance ; résultats mitigés pour l'âge, la dépression et le nombre de comprimés. Dans **TIME**, le non-respect de l'horaire assigné était plus fréquent le soir que le matin (**39,0 % vs 22,5 %**).

### Risques liés à l'arrêt brutal d'un bêtabloquant

- **Psaty et al. (*JAMA* 1990, cas-témoins, 248 cas / 737 témoins hypertendus, résumé — provisoire) :** arrêt récent d'un bêtabloquant associé à **RR 4,5** (IC 1,1–18,5) de premier événement coronaire (effet transitoire non retrouvé après arrêt des diurétiques).
- **Prins et al. (*JACC Heart Fail* 2015, méta-analyse, texte intégral) :** l'arrêt d'un bêtabloquant durant une hospitalisation pour IC aiguë s'associait à une hausse de la mortalité hospitalière (**RR 3,72**, IC 1,51–9,14 ; 2 études), de la mortalité à court terme (**RR 1,61**, IC 1,04–2,49) et du critère décès ou réhospitalisation (**RR 1,59**, IC 1,03–2,45) — études majoritairement observationnelles (confusion de gravité possible).

### Polypilules et programmes d'observance

| Étude | Population et intervention | Résultats | Limites et applicabilité |
|---|---|---|---|
| **SECURE** (Castellano, *NEJM* 2022, texte intégral) | 2 499 post-IDM (< 6 mois), âge moy. 76 ans (144 en France, anticoagulés exclus) ; polypilule aspirine 100 + ramipril 2,5–10 + atorvastatine 20/40 mg | Décès CV, IDM, AVC ou revascularisation urgente : **9,5 % vs 12,7 %**, **HR 0,76** (0,60–0,96) à 3 ans ; décès CV **HR 0,67** (exploratoire) ; forte observance **74,1 % vs 63,2 %** à 24 mois à LDL et PA identiques | Post-IDM (FEVG/IC non rapportées), en ouvert, observance par questionnaire |
| **POLY-HF** (*Nature Med* 2026, lecture partielle — provisoire) | 212 patients FEVG ≤ 40 % (méd. 26 %, ~20 % ischémiques) ; polypilule métoprolol succinate + spironolactone 12,5 + empagliflozine 10 mg | FEVG IRM à 6 mois : **40,4 % vs 37,1 %** (+3,3 points, IC 0,2–6,4) ; hospitalisations/urgences IC **RR 0,40** (0,18–0,88) ; observance biologique **79,3 % vs 54,3 %** ; NT-proBNP et marche inchangés | Petit essai court en ouvert, majoritairement non ischémique, critère d'imagerie ; non commercialisée |
| **Ruppar et al.** (*JAHA* 2016, 57 essais) | Programmes d'aide à l'observance en IC | Mortalité **RR 0,89** (0,81–0,99) ; réhospitalisations **OR 0,79** (0,71–0,89) | L'autosurveillance isolée seule ne réduisait pas les réhospitalisations |
| **Revue Cochrane (2011)** | Piluliers et conditionnements calendrier | Part de comprimés pris augmentée de **+11 points** (IC 6–17) | Extraits de résumés uniquement |

### Limites des sources

Les données de persistance reposent sur les délivrances en pharmacie (aucune donnée française SNDS consultée) ; les notices de génériques anciens proviennent de sources britanniques ; la liste réglementaire actualisée des substances MTE et l'annexe biosimilaires 2025–2026 n'ont pas été vérifiées directement sur Légifrance.`,
    },
  ],
  relatedArticleSlugs: [
    'horaires-de-prise-et-routine-medicaments',
    'sante-cerebrale-et-cognition',
    'medicaments-effets-secondaires-suivi',
    'betabloquants-insuffisance-cardiaque',
    'thrombus-vg-et-anticoagulants',
    'cholesterol-et-prevention-secondaire',
    'cannabis-cbd-et-substances-recreatives',
    'chirurgie-soins-dentaires-et-jours-de-maladie',
    'vivre-avec-insuffisance-cardiaque-en-france',
    'medicaments-insuffisance-cardiaque',
  ],
  sources: [
    {
      label: 'RCP européens EMA (Eliquis, Xarelto, Lixiana, Pradaxa, Entresto, Jardiance, Forxiga) et notices UK / VIDAL (bisoprolol, carvédilol, furosémide)',
      detail: 'Règles officielles en cas de dose oubliée et obligation d’arrêt progressif des bêtabloquants',
    },
    {
      label: 'Études d’observance et d’arrêt : Ødegaard (2023), Báez-Gutiérrez (2025), Oosterom-Calo (2013), Prins (2015), Psaty (1990), Ruppar (2016), Cochrane (2011)',
      detail: 'Persistance à 5 ans, risques de l’arrêt brutal des bêtabloquants et efficacité des piluliers et programmes d’observance',
    },
    {
      label: 'Essais de polypilules : SECURE (NEJM, 2022, texte intégral) et POLY-HF (Nature Medicine, 2026)',
      detail: 'Impact de la simplification du nombre de comprimés sur l’observance et les événements cliniques ou la FEVG',
    },
    {
      label: 'Sources administratives françaises : service-public.fr (fiche F18734, sept. 2026), VIDAL (2020) et ameli.fr (janv. 2024 et 2025)',
      detail: 'Règles de substitution générique, codes non substituable (MTE, EFG, CIF), bilan partagé de médication et suivi anticoagulants',
    },
  ],
  disclaimerType: 'medical',
};
