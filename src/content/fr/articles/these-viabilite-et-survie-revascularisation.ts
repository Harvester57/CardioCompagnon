import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'these-viabilite-et-survie-revascularisation',
  sourceWikiPath: 'wiki/theses/viability-testing-and-revascularisation-survival.md',
  titleFr: 'Thèse : tests de viabilité myocardique et survie après revascularisation',
  category: 'diagnostic',
  readingTier: 'reference',
  asOf: '2026-11-27',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'thèse',
    'viabilité',
    'hibernation',
    'revascularisation',
    'pontage',
    'stents',
    'stich',
    'revived-bcis2',
    'parr-2',
    'irm-cardiaque',
    'tep',
  ],
  aliases: [
    'Thèse viabilité et revascularisation',
    'Viabilité myocardique et survie',
    'Un test de viabilité choisit-il qui bénéficie d’un pontage',
    'Revascularisation guidée par la viabilité',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Un examen de viabilité myocardique (IRM, échographie de stress, scintigraphie ou TEP) permet-il de savoir qui vivra plus longtemps après un pontage ou des stents ? Cette synthèse examine les grands essais cliniques et leur portée sous traitements modernes. Si la cicatrice renseigne sur le pronostic et la récupération possible, le test ne décide pas seul d'une intervention : un repère utile à discuter avec votre cardiologue.",
  sections: [
    {
      headingFr: 'Thèse évaluée, variables clés et hiérarchie des preuves',
      bodyMarkdownFr: `**Affirmation soumise à l'épreuve des preuves :** dans la cardiomyopathie ischémique (maladie coronaire avec FEVG ≤ 35 %) traitée par les médicaments recommandés actuels, le résultat d'un test de viabilité myocardique (présence, absence ou étendue de myocarde viable ou hibernant) ne modifie pas l'effet de la revascularisation (pontage ou angioplastie par stents) sur la survie toutes causes (absence d'interaction traitement × viabilité).

L'évaluation distingue deux volets :
- **Volet A (l'interaction) :** dans les analyses issues d'essais randomisés, la viabilité ne permet pas d'identifier un sous-groupe tirant (ou ne tirant pas) un bénéfice de survie de la revascularisation.
- **Volet B (le contexte thérapeutique moderne) :** cette conclusion vaut-elle sous quadrithérapie contemporaine (ARNI, iSGLT2, ARM, bêtabloquant) et usage fréquent du DAI/CRT ?

**Variables clés :** modalité de viabilité (SPECT, échographie dobutamine, discordance TEP-FDG, transmuralité LGE-IRM à 25 % ou 50 %), type de geste (pontage dans STICH vs stents dans REVIVED-BCIS2), critère principal (mortalité toutes causes), époque des traitements médicaux (STICH : 2002–2007, 2–3 % de DAI, aucun ARNI ni iSGLT2 ; REVIVED-BCIS2 : vers 2013–2020, 20–22 % de DAI à l'entrée puis 53,1 % en fin de suivi, ARNI partiel, pas d'iSGLT2 listé).

**Critère de réfutation :** une analyse randomisée ou sur données individuelles (IPD) montrant une interaction préspécifiée et crédible entre viabilité/hibernation et revascularisation sur la mortalité toutes causes sous traitement contemporain. Les cohortes observationnelles à traitement choisi par le médecin et les comparaisons d'observance post hoc ne répondent pas à ce critère.`,
    },
    {
      headingFr: 'Preuves en faveur de la thèse (absence d’interaction en essais randomisés)',
      bodyMarkdownFr: `1. **Sous-étude viabilité de STICH (Bonow 2011 ; Panza 2019 — texte intégral, niveau modéré à fort) :** chez **601 patients sur 1 212** (FEVG ≤ 35 %, SPECT et/ou écho dobutamine ; 487 viables, 114 non viables), l'interaction viabilité × traitement sur la mortalité toutes causes était non significative à **5,1 ans (p = 0,53)** et à **10,4 ans (p = 0,34)**. Pourtant, le pontage réduisait bien la mortalité dans cette sous-étude à 10,4 ans (**HR ajusté 0,73**, IC 95 % : 0,60–0,90 ; dans l'essai complet STICHES : HR 0,84 [0,73–0,97]). Le modeste gain de FEVG chez les patients viables (+2,29 points à 4 mois) survenait avec ou sans chirurgie et n'était pas lié à la survie.
2. **Prise en compte de la taille du ventricule gauche (Bonow 2015 — texte intégral, niveau modéré) :** l'analyse de STICH par volume télésystolique indexé (VTSi) n'a pas réhabilité l'hypothèse de viabilité (triple interaction VTSi × viabilité × traitement **p = 0,491** ; chez les patients viables, HR pontage vs médicaments 0,85 [0,56–1,29] si VTSi ≤ 84 mL/m² contre 0,87 [0,57–1,31] au-dessus, p = 0,962 ; analyse continue p = 0,562).
3. **REVIVED-BCIS2 (analyse de viabilité 2023 et complétude Ezad 2024 — texte intégral, niveau modéré) :** sur **610 patients sur 700** (479 IRM, 131 écho dobutamine, tous viables à l'entrée), décès ou hospitalisation IC 36,3 % vs 36,2 % (**HR 0,99**, IC 95 % : 0,76–1,29), sans aucune interaction avec l'étendue viable ou non viable aux seuils de cicatrice ≤ 25 % ou ≤ 50 %. Une angioplastie complète du territoire viable ne faisait pas mieux que les médicaments seuls (HR ajusté 0,95 [0,66–1,35]).
4. **Revue systématique d'essais randomisés (Liga 2023 — texte intégral, niveau modéré) :** à travers HEART, PARR-2, STICH et REVIVED-BCIS2 (1 623 patients), suivre l'orientation du test de viabilité ne modifiait pas la mortalité (**OR 0,92**, IC 95 % : 0,75–1,14 ; 34 % vs 36 %). *(Comparaison non randomisée ; cette revue comporte par ailleurs des erreurs de recopie numérique par rapport aux articles sources.)*
5. **Essai HEART (Cleland 2011 — résumé, faible à modéré) :** arrêté précocement à 138/800 patients tous viables ; mortalité identique à 59 mois médians (38 % stratégie invasive vs 37 % conservatrice, dont 2 décès lors de la coronarographie diagnostique).
6. **Autres mécanismes que la viabilité :** l'ischémie inductible ne modifiait pas non plus l'effet du pontage dans STICH (p = 0,73–0,89 ; Panza 2013), et l'angioplastie n'a pas réduit les décès ou morts subites récupérées dans REVIVED-BCIS2 (HR 1,03 [0,82–1,30]).
7. **Évolution des recommandations et consensus :** **ESC 2026 IC** indique (texte narratif) que les preuves manquent pour utiliser la viabilité comme critère de sélection ; **ACC/AHA/SCAI 2021** et **AHA/ACC/HFSA 2022** rappellent l'absence de lien dans STICH ; la **prise de position *JACC: Heart Failure* 2025** (incluant des investigateurs de STICH et REVIVED-BCIS2) conclut que les essais randomisés ne soutiennent pas la viabilité en routine comme critère principal de choix du pontage ou des stents, réservant son usage sélectif aux décisions incertaines.`,
    },
    {
      headingFr: 'Preuves contraires, biais majeurs et nuances méthodologiques',
      bodyMarkdownFr: `### Signaux en faveur de la viabilité (aucun ne remplit le critère de réfutation)

1. **PARR-2 et analyses post hoc (Beanlands 2007, D'Egidio 2009, Ottawa-FIVE 2010 — résumés) :** l'essai global était **neutre** à 1 an (RR 0,82 [0,59–1,14] dans le résumé ; HR 0,78 selon l'Ontario HTA) et à 5 ans (HR 0,82 [0,62–1,07]), sur un critère composite dominé par les hospitalisations (94/136 événements à 1 an) et avec enregistrement rétrospectif. Les bénéfices observés au-delà de ~7 % de *mismatch* TEP (p d'interaction = 0,02), chez les patients ayant suivi l'avis TEP (HR 0,62 à 1 an ; 0,73 à 5 ans) ou au centre d'Ottawa (HR 0,34 [0,16–0,72]) sont post hoc et non randomisés.
2. **Cohorte TEP Ling 2013 (648 patients, résumé — faible) :** interaction hibernation × revascularisation précoce (surtout > 10 % du VG), mais le suivi ne démarrait qu'au **jour 92**, excluant les décès péri-opératoires précoces (biais d'immortalité et d'exclusion de la mortalité chirurgicale précoce, souligné par Bonow 2015).
3. **Cohorte IRM Gerber 2012 (144 patients, résumé — faible) :** interaction p = 0,004 (HR apparié 2,5 [1,1–6,1]), petite série observationnelle non randomisée.
4. **Méta-analyse observationnelle Allman 2002 (24 études, 3 088 patients, années 1990 — résumé, faible) :** fort biais d'indication (sélection des patients jugés opérables) et faible usage des bêtabloquants.
5. **Prépublication non évaluée par les pairs (Kusi-Yeboah 2025 — résumé, faible) :** conclut en faveur de l'imagerie de viabilité sans chiffres ni tests d'interaction dans le résumé.

### Nuances essentielles et limites de la « thérapie contemporaine »

- **Pronostic ≠ prédiction du bénéfice :** la viabilité prédit une meilleure survie après pontage sans bras médical témoin (**Arjomandi Rad 2024**, 17 études, OR 0,42 [0,29–0,61]), et la **charge cicatricielle IRM** prédit décès ou hospitalisation IC dans REVIVED-BCIS2 (HR 1,18 par tranche de 10 % de cicatrice, contre HR 0,98 pour le tissu viable).
- **Puissance statistique limitée des interactions nulles :** seulement 114 patients non viables dans STICH ; REVIVED-BCIS2 et HEART n'ont inclus que des patients viables (testant l'étendue plutôt que la présence/absence) ; de plus, REVIVED-BCIS2 étant globalement neutre (HR 0,99), une absence d'interaction y est moins informative que dans STICH. Une valeur de p = 0,07 pour la mortalité cardiovasculaire à 10 ans dans STICH est citée de seconde main par Liga 2023 (non vérifiable dans le texte principal de Panza 2019).
- **Époque thérapeutique non testée directement :** aucune analyse randomisée de viabilité n'existe sous quadrithérapie actuelle (ARNI + iSGLT2 + ARM + bêtabloquant). La comparaison IPD STICHES/REVIVED-BCIS2 (2025) montre que le pronostic sous traitement médical seul s'est déjà nettement amélioré (HR apparié 0,46), ce qui tendrait plutôt à réduire qu'à amplifier un bénéfice dépendant de la viabilité — mais cela reste une extrapolation.
- **Essais en cours (aucun ne tranchera cette thèse) :** **IMPROVE-ICMP** (NCT06930092, viables uniquement, critère FEVG à 6 mois), **PCI-GULF** (NCT07349979, pas d'analyse de viabilité annoncée), **STICH3C** (NCT05427370) et **STICH3-BCIS4** (ISRCTN29654606, comparant pontage et stents sans bras médical seul).`,
    },
    {
      headingFr: 'Verdict de synthèse et perspectives',
      bodyMarkdownFr: `- **Verdict :** **Partiellement étayée** (**confiance moyenne**).
- **Pourquoi :** le **Volet A** (absence d'interaction dans les essais randomisés disponibles : STICH à 5 et 10 ans, STICH ajusté sur la taille VG, REVIVED-BCIS2, HEART) est **étayé avec une confiance modérée** pour les époques étudiées. Le **Volet B** (validité sous quadrithérapie moderne) n'est **pas directement testé** et repose sur une extrapolation raisonnée.
- **Ce qui ferait évoluer ce verdict :** une méta-analyse sur données individuelles (IPD) combinant les données de viabilité de STICH et REVIVED-BCIS2, ou un essai randomisé sous quadrithérapie moderne couvrant tout le spectre de viabilité en IRM/TEP avec interaction préspécifiée sur la mortalité toutes causes.
- **Transparence méthodologique :** synthèse fondée sur les textes intégraux de Bonow 2015, Liga 2023, Arjomandi Rad 2024, Ryan 2022, Panza 2019 et la prise de position *JACC: Heart Failure* 2025, complétés par les résumés des études dont le texte intégral était payant (HEART, Ling 2013, Gerber 2012, PARR-2, Allman 2002, Li 2026, Kusi-Yeboah 2025). Aucun clinicien humain n'a relu cette synthèse : toute décision d'imagerie, de pontage ou d'angioplastie appartient à votre cardiologue et à la Heart Team.`,
    },
  ],
  relatedArticleSlugs: [
    'viabilite-myocardique',
    'revascularisation-pontage-stents',
    'examens-et-chiffres',
    'dispositifs-cardiaques-dai-crt',
    'these-benefice-dai-sous-quadritherapie',
    'these-jours-de-maladie-sraa-vs-isglt2',
    'essais-cliniques-en-cours-et-a-suivre',
    'essais-cliniques-cles',
    'recommandations-comparees-esc-us-nice',
  ],
  sources: [
    {
      label: 'STICH viabilité (Bonow 2011, Bonow 2015 VTSi, Panza 2019), STICH ischémie (Panza 2013) et STICHES (2016)',
      detail: 'Interactions viabilité × pontage et VTSi × viabilité × pontage sur la mortalité à 5 et 10,4 ans (textes intégraux)',
    },
    {
      label: 'REVIVED-BCIS2 viabilité (2023), complétude (Ezad 2024), arythmies (2023) et analyse IPD STICHES/REVIVED (2025)',
      detail: 'Absence d’interaction viabilité × stents, charge cicatricielle IRM et évolution du pronostic médical entre époques',
    },
    {
      label: 'Liga et al. (JAHA 2023), HEART (Cleland 2011), PARR-2 (2007/2016), Ottawa-FIVE (2010) et Arjomandi Rad (2024)',
      detail: 'Revue d’essais randomisés, stratégie TEP-FDG et valeur pronostique de la viabilité après pontage',
    },
    {
      label: 'Cohorts et revues : Allman (2002), Gerber (2012), Ling (2013), Ryan (EHJ 2022), Li (2026) et Kusi-Yeboah (2025)',
      detail: 'Origine observationnelle de l’hypothèse, biais de sélection/délai d’immortalité et synthèses récentes',
    },
    {
      label: 'Recommandations ESC 2026 IC, AHA/ACC/HFSA 2022, ACC/AHA/SCAI 2021, JACC: Heart Failure (2025) et registres d’essais (2026)',
      detail: 'Position consensuelle actuelle sur la viabilité et statut des essais IMPROVE-ICMP, PCI-GULF, STICH3C et STICH3-BCIS4',
    },
  ],
  disclaimerType: 'medical',
};
