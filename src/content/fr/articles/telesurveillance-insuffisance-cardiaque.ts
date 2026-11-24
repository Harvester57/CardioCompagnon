import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'telesurveillance-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/concepts/remote-monitoring-in-heart-failure.md',
  titleFr: 'Télésurveillance à domicile et suivi à distance des prothèses',
  category: 'dispositifs',
  asOf: '2026-11-24',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'télésurveillance',
    'télémédecine',
    'cardiomems',
    'capteur-pression-pulmonaire',
    'dai',
    'crt',
    'heartlogic',
    'triagehf',
    'etapes',
    'has',
  ],
  aliases: [
    'Télésurveillance',
    'Télémédecine',
    'Telemonitoring',
    'Remote monitoring',
    'CardioMEMS',
    'Cordella',
    'Capteur de pression artérielle pulmonaire',
    'HeartLogic',
    'TriageHF',
    'Suivi à distance DAI',
    'ETAPES',
  ],
  linkedModules: ['core', 'device'],
  plainSummaryFr:
    'La télésurveillance permet à votre équipe de soins de suivre des indicateurs de votre état entre deux consultations. Elle regroupe trois dispositifs très différents : la télésurveillance non invasive à domicile (poids quotidien et questionnaire de symptômes, parfois tension artérielle et fréquence cardiaque, analysés par une équipe infirmière qui vous contacte en cas d’alerte) ; le capteur implanté dans l’artère pulmonaire (CardioMEMS), qui détecte une hausse de pression avant même que la rétention d’eau ne soit visible ; et le suivi à distance d’un DAI ou d’une CRT, qui transmet automatiquement l’état de la pile, des sondes, du rythme et parfois des scores d’alerte d’insuffisance cardiaque. Aucun de ces dispositifs ne remplace un appel aux secours en cas d’urgence (15 / SAMU, 112 ou 114) : les données ne sont pas surveillées en temps réel.',
  sections: [
    {
      headingFr: 'Ce que disent les recommandations',
      bodyMarkdownFr: `| Modalité | Recommandations ESC 2026 | Autres positions internationales et françaises |
|---|---|---|
| Télésurveillance non invasive à domicile | **Peut être envisagée (Classe IIb, B1)** pour réduire les hospitalisations pour IC | **France :** remboursée dans le droit commun (HAS, voir ci-dessous). **Royaume-Uni (NICE NG106) :** pas de recommandation spécifique |
| Capteur implanté de pression artérielle pulmonaire | **Doit être envisagé (Classe IIa, B1)** en classe **NYHA III** avec hospitalisation pour IC dans les 12 derniers mois (relevé depuis IIb en 2021) | **NICE (2026) :** recommande CardioMEMS en routine NHS en NYHA III à risque d’hospitalisation. **France (HAS 2021) :** service attendu insuffisant, non remboursé |
| Suivi à distance DAI/CRT pour alertes d’insuffisance cardiaque | Pas de recommandation numérotée ; « peu de preuves » d’un bénéfice sur les événements cliniques | **HRS 2023 :** suivi des diagnostics IC des prothèses raisonnable (**Classe 2a**). **NICE (2024) :** HeartLogic et TriageHF retenus comme options |
| Suivi à distance d’un DAI pour réduire les chocs inappropriés | Non applicable | **ESC 2022 (rythmologie) : recommandé (Classe I, B)** |

- La formulation du guide patient ESC (« la télésurveillance peut être utilisée ») traduit en langage courant la recommandation de **Classe IIb**.
- Les recommandations ESC 2026 ne prennent pas position sur les **montres connectées grand public** ou capteurs personnels non médicaux.`,
    },
    {
      headingFr: '1. Télésurveillance non invasive à domicile : les preuves cliniques',
      bodyMarkdownFr: `- **Méta-analyse de Scholte (EHJ 2023) :** 92 études, 36 549 patients.
  - La surveillance non invasive a réduit la mortalité (**OR 0,85**) et les premières hospitalisations pour insuffisance cardiaque (**OR 0,78**).
  - Une grande part de l’effet provenait du **suivi téléphonique structuré**.
  - Le bénéfice paraît plus marqué chez les personnes récemment hospitalisées que chez les patients stables en NYHA I–II (sans test formel de sous-groupe).
  - Environ 1 essai sur 5 présentait un risque élevé de biais, avec une hétérogénéité notable entre études.
- **TIM-HF2 (Lancet 2018, Allemagne) :** 1 571 patients en NYHA II–III ayant été hospitalisés pour IC dans l’année précédente, avec **FEVG ≤ 45 %**.
  - Poids quotidien, tension artérielle, rythme cardiaque et symptômes transmis à un centre de télémédecine fonctionnant **24 h/24 et 7 j/7**.
  - Part de jours perdus pour hospitalisation cardiovasculaire non programmée ou décès : **4,88 % contre 6,64 %** (significativité limite, p = 0,046), soit environ **18 contre 24 jours par an**.
  - Mortalité toutes causes : **7,9 contre 11,3 pour 100 patients-années (HR 0,70)**.
  - Modèle très exigeant en ressources humaines, évalué dans un seul pays.
- **Deux grands essais américains neutres montrent qu’un dispositif simple ne suffit pas à lui seul :**
  - **Tele-HF (NEJM 2010) :** 1 653 patients récemment hospitalisés déclarant symptômes et poids via un serveur vocal automatisé. Réhospitalisation ou décès à 6 mois : **52,3 % contre 51,5 %**, aucune différence. À la fin du suivi, seuls **55 %** utilisaient encore le système quotidiennement.
  - **BEAT-HF (JAMA Intern Med 2016) :** 1 437 patients (FEVG moyenne d’environ 43 %) avec capteurs à domicile et accompagnement téléphonique infirmier après la sortie d’hôpital. Réhospitalisation à 6 mois : **50,8 % contre 49,2 % (HR 1,03)** et aucune différence sur la mortalité.
  - *Point de lecture :* contrairement à TIM-HF2 qui s’appuyait sur un centre dédié continu, ces deux essais reposaient sur un dispositif moins intensif et une perte progressive d’adhésion (comme dans Tele-HF), facteurs vraisemblables de leurs résultats neutres (analyse transversale et non comparaison directe issue d’un essai).`,
    },
    {
      headingFr: 'En France : la télésurveillance de l’insuffisance cardiaque remboursée (HAS / Assurance Maladie)',
      bodyMarkdownFr: `À la suite de l’expérimentation **ETAPES**, la télésurveillance médicale de l’insuffisance cardiaque est entrée dans le **droit commun** (remboursement pérenne) le **1er juillet 2023**, sur la base du référentiel de la **HAS**.

**Critères d’éligibilité (une seule des deux conditions suffit) :**

1. une **hospitalisation pour insuffisance cardiaque au cours des 12 derniers mois**, **ou**
2. des symptômes de classe **NYHA II ou plus** associés à des peptides natriurétiques élevés (**BNP > 100 pg/mL** ou **NT-proBNP > 1 000 pg/mL**).

**Situations de non-éligibilité :** impossibilité d’utiliser le matériel (même avec l’aide d’un aidant), ou refus du partage de données ou du programme d’accompagnement thérapeutique.

**Organisation concrète :**

- **Pesée quotidienne** (balance à transmission automatique recommandée) et questionnaire régulier sur les symptômes ;
- **Analyse des alertes au moins deux fois par semaine**, triées par une équipe infirmière (infirmière insuffisance cardiaque / IPA) et suivies d’une décision médicale si nécessaire ;
- **Séances d’accompagnement thérapeutique au moins mensuelles** au début ;
- Prescription initiale pour **6 mois**, renouvelable après réévaluation ;
- Prescrite par un **cardiologue** (ou un médecin traitant titulaire d’un diplôme spécifique en insuffisance cardiaque).
- Vous devez être informé qu’un suivi habituel sans télésurveillance reste toujours possible.

**Tarifs et prise en charge en France (données rapportées sur 2023–2026) :**

- **Forfait opérateur (équipe soignante) :** **28 € par patient et par mois** en niveau 2 pour l’insuffisance cardiaque (contre 11 € en niveau 1). Un article de presse médicale de janvier 2024 mentionne une majoration possible jusqu’à **70 € par mois** en niveau 2 pour les situations les plus complexes (les conditions exactes et la date d’entrée en vigueur n’ont pas été vérifiées directement dans l’arrêté).
- **Forfait technique (fournisseur du dispositif médical numérique) :** rémunération distincte, révisée tous les 6 mois et dégressive selon le volume national de patients (ordre de grandeur d’environ **39 à 40 € par mois** en 2025–2026, non vérifié directement sur les arrêtés consolidés ni sur une éventuelle révision de septembre 2026).
- **Remboursement pour le patient :** l’Assurance Maladie prend en charge **60 %** du tarif, ou **100 %** en cas d’exonération du ticket modérateur (notamment en **ALD n° 5 ou n° 13**). **Aucun dépassement d’honoraires** n’est autorisé sur le forfait opérateur. La prise en charge cesse si le patient n’utilise pas le dispositif ou refuse la transmission des données.`,
    },
    {
      headingFr: '2. Capteur implanté de pression artérielle pulmonaire (CardioMEMS)',
      bodyMarkdownFr: `### Principe

Un capteur miniature est implanté dans une branche de l’artère pulmonaire lors d’un cathétérisme cardiaque droit et calibré au cours de l’examen. Vous (ou un proche) réalisez une mesure quotidienne à l’aide d’un boîtier externe ; l’équipe d’insuffisance cardiaque consulte les courbes environ 5 jours par semaine et ajuste les diurétiques de l’anse ou les autres médicaments dès qu’une hausse de quelques mmHg sur 2 à 3 jours annonce une congestion débutante.

### Preuves cliniques

- **CHAMPION** (550 patients en NYHA III récemment hospitalisés) : réduction des hospitalisations pour insuffisance cardiaque.
- **GUIDE-HF** (1 000 patients en NYHA II–IV) : critère principal global non significatif, avec un bénéfice observé sur la période pré-COVID-19.
- **MONITOR-HF (Lancet 2023, Pays-Bas) :** 348 patients, FEVG médiane de **30 %**, environ la moitié d’origine ischémique.
  - Réduction de **44 %** du total des hospitalisations pour IC et visites urgentes (**HR 0,56**).
  - Amélioration de la qualité de vie (**+7 points** au score KCCQ) ; l’essai étant ouvert (sans placebo), cet effet subjectif peut être amplifié.
  - **Aucun effet sur la mortalité (HR 0,96).**
  - Signal possible d’un bénéfice moindre dans la cardiomyopathie ischémique que non ischémique, non retrouvé dans GUIDE-HF et possiblement dû au hasard.
- **Analyse poolée des essais (CHAMPION, GUIDE-HF, MONITOR-HF ; 1 898 patients) :** environ **30 %** d’hospitalisations pour IC en moins, de manière homogène selon l’étiologie et la FEVG, sans baisse significative de la mortalité. Une analyse sur données individuelles dans l’ICFER incluant également un autre capteur (oreillette gauche) suggérait une baisse des décès (**HR 0,75**).
- **Cordella** (autre capteur pulmonaire) : données limitées à une étude simple bras sans comparateur ; NICE estime que des études supplémentaires sont nécessaires.

### Indications, limites et statut en France

- **ESC 2026 :** classe **NYHA III** avec hospitalisation pour IC dans les 12 derniers mois (**Classe IIa, B1**).
- **Consensus HFA 2025 (critères plus larges) :** NYHA II–III sous traitement conforme aux recommandations, avec un épisode d’aggravation dans l’année **ou** un NT-proBNP élevé (**≥ 1 000 pg/mL** si FEVG ≤ 40 %).
- **Contre-indications principales (HFA 2025) :** impossibilité de prendre un antiagrégant plaquettaire ou un anticoagulant pendant 1 mois après l’implantation, insuffisance rénale sévère (**DFGe < 25 mL/min/1,73 m²**), IMC supérieur à **35 kg/m²**, ou implantation d’une CRT dans les 3 derniers mois.
- **Sécurité et adhésion :** absence de complication liée au dispositif ou au système chez **98 à 99 %** des patients dans les essais ; adhésion quotidienne de **76 à 86 %** dans les registres.
- **Disponibilité en France :** en avril 2021, la CNEDiMTS de la **HAS** a attribué à CardioMEMS un service attendu **« insuffisant »**, si bien qu’il n’est **pas remboursé en France**. Les motifs retenus étaient les biais possibles de CHAMPION, l’absence d’effet sur la mortalité, l’absence de comparaison avec la pesée quotidienne associée au dosage du BNP et le manque de données de sécurité à long terme (le comité économique estimait le coût à environ **156 000 € par année de vie ajustée sur la qualité**). Aucun avis plus récent ni dispositif d’accès précoce n’a été identifié, bien que MONITOR-HF et GUIDE-HF aient été publiés après 2021.`,
    },
    {
      headingFr: '3. Suivi à distance d’un DAI ou d’une CRT',
      bodyMarkdownFr: `### Organisation (Consensus HRS 2023)

- Le boîtier transmet ses informations automatiquement selon un calendrier programmé ou dès qu’une alerte survient : état de la pile et des sondes, épisodes rythmiques, **tout choc délivré**, pourcentage de stimulation CRT, niveau d’activité et, sur certains modèles, scores multiparamétriques de congestion et d’insuffisance cardiaque (par exemple **HeartLogic**, **TriageHF**).
- **Mise en place :** idéalement avant la sortie d’hôpital ou dans les **2 semaines** suivant l’implantation (un éditorial accompagnant le consensus note qu’environ la moitié des prothèses compatibles ne sont jamais activées).
- **Consultations en présentiel :** avec une connexion fiable et sans alerte, un contrôle en centre tous les **24 mois** est jugé raisonnable.
- **Gestion des alertes :** les alertes urgentes sont généralement lues sous **1 jour ouvré** ; la plupart des centres ne surveillent pas 24 h/24. Vous devez donc disposer de votre propre conduite à tenir en cas d’urgence (**15 / SAMU**, **112**, **114**). Les données de votre prothèse vous appartiennent et vous pouvez en demander copie.

### Preuves cliniques

- **Sécurité du dispositif et chocs :** la télésurveillance détecte plus tôt les problèmes de sonde, de pile et les arythmies. Dans l’essai **ECOST**, elle a réduit de **74 %** les chocs inappropriés liés aux arythmies atriales rapides, justifiant la recommandation **ESC 2022 Classe I B**.
- **Impact sur l’insuffisance cardiaque : résultats contrastés.** Une analyse poolée de **TRUST**, **ECOST** et **IN-TIME** suggérait une meilleure survie, mais les principaux essais chez des patients avec une FEVG de 25 à 30 % donnent un tableau nuancé :

| Essai | Population | Résultat principal |
|---|---|---|
| **IN-TIME** (Lancet 2014) | 664 porteurs de DAI/CRT-D, FEVG moyenne 26 %, transmissions quotidiennes | Moins de patients avec score clinique aggravé (**18,9 % contre 27,2 %** ; OR 0,63) ; 10 contre 27 décès (non testé formellement). Financé par le fabricant (résumé lu). |
| **REM-HF** (EHJ 2017, Royaume-Uni) | 1 650 porteurs de DAI/CRT, FEVG moyenne 30 %, 68 % de maladie coronaire, transmissions hebdomadaires | **Aucun effet** sur les décès ou hospitalisations cardiovasculaires sur 2,8 ans (**HR 1,01**). |
| **MORE-CARE** (EJHF 2017) | 865 nouveaux porteurs de CRT-D | **Aucun effet** sur le critère principal (**HR 1,02**), mais **38 %** d’utilisation en moins des ressources de santé, surtout moins de consultations en centre. |
| **MANAGE-HF phase 1** (J Card Fail 2022) | 200 porteurs de DAI ou CRT-D (FEVG < 35 %) avec alertes **HeartLogic**, bras unique | Traitement modifié après **74 %** des alertes ; baisse du NT-proBNP. Pas de groupe témoin ; auteurs liés au fabricant. |

- **Méta-analyse Veres (2025, 16 essais, 11 232 patients) :** baisse globale de la mortalité (**HR 0,83**, IC 95 % : 0,72–0,96), mais **aucune baisse des hospitalisations pour IC (OR 0,95)**. Le chiffre de mortalité ne regroupe toutefois que 7 essais et inclut **TIM-HF2**, qui n’était pas basé sur une prothèse implantée.
- La méta-analyse **Scholte (2023)** n’a trouvé **aucun effet global** du suivi par prothèse sur les décès ou les hospitalisations pour IC, et l’**ESC 2026** souligne le faible niveau de preuve sur les événements d’insuffisance cardiaque.
- En 2024, le **NICE** a estimé que **HeartLogic** et **TriageHF** réduisent les hospitalisations par rapport au suivi standard de prothèse seul et les accepte au sein d’équipes spécialisées ; il déconseille en revanche **CorVue**, fondé sur la seule impédance intrathoracique et générateur de nombreuses fausses alertes.`,
    },
    {
      headingFr: 'Ce que cela signifie pour vous si votre FEVG tourne autour de 35 %',
      bodyMarkdownFr: `- **La télésurveillance à domicile** aide surtout après une hospitalisation récente ou lorsque l’équilibre est fragile. En France, son remboursement dépend d’une hospitalisation pour IC dans les 12 derniers mois ou d’un stade NYHA II ou plus avec NT-proBNP > 1 000 pg/mL (ou BNP > 100 pg/mL).
- **Un capteur de pression pulmonaire** s’adresse à des patients symptomatiques en NYHA III avec hospitalisations récentes, non à une situation stable avec peu de symptômes, et n’est pas remboursé en France.
- **Si un DAI ou une CRT est implanté**, la télésurveillance de la prothèse est la norme de soins et réduit nettement les chocs inappropriés ; ses alertes dédiées à l’insuffisance cardiaque peuvent apporter une aide lorsqu’une équipe spécialisée y réagit.
- Avec ou sans programme connecté, la **pesée quotidienne à domicile** reste le repère fondamental d’autosurveillance (voir l’article « Vivre au quotidien avec une insuffisance cardiaque »).`,
    },
  ],
  relatedArticleSlugs: [
    'vivre-avec-insuffisance-cardiaque',
    'dispositifs-cardiaques-dai-crt',
    'gilet-defibrillateur-portable',
    'traitements-additionnels-nouveaux',
    'examens-et-chiffres',
    'recommandations-comparees-esc-us-nice',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'vivre-avec-insuffisance-cardiaque-en-france',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 (section télésurveillance, tableau 25) et guide patient ESC 2026',
      detail: 'Classes de recommandation IIb (domicile), IIa (capteur pulmonaire) et position sur les prothèses',
    },
    {
      label: 'Méta-analyse Scholte (EHJ 2023) et essais TIM-HF2 (2018), Tele-HF (2010), BEAT-HF (2016)',
      detail: 'Preuves positives et neutres de la télésurveillance non invasive à domicile',
    },
    {
      label: 'Référentiel HAS de télésurveillance IC, Ameli, Santé.fr, Vidal et Le Quotidien du Médecin (2023–2026)',
      detail: 'Passage au droit commun au 1er juillet 2023, critères d’éligibilité, forfaits mensuels et prise en charge en France',
    },
    {
      label: 'Consensus HFA 2025, essai MONITOR-HF (Lancet 2023), NICE HTG730/HTG769 et avis HAS CardioMEMS (2021)',
      detail: 'Capteurs de pression artérielle pulmonaire (CardioMEMS, Cordella), efficacité, sécurité et non-remboursement en France',
    },
    {
      label: 'Consensus HRS 2023, ESC 2022 (rythmologie), IN-TIME, REM-HF, MORE-CARE, MANAGE-HF phase 1 et méta-analyse Veres (2025)',
      detail: 'Suivi à distance des DAI et CRT, réduction des chocs inappropriés (ECOST) et scores HeartLogic/TriageHF',
    },
  ],
  disclaimerType: 'medical',
};
