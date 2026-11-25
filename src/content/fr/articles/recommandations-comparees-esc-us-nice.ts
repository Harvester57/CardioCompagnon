import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'recommandations-comparees-esc-us-nice',
  sourceWikiPath: 'wiki/references/guidelines-compared.md',
  titleFr: 'Recommandations européennes (ESC), américaines et britanniques comparées',
  category: 'references',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'hot',
  tags: [
    'recommandations',
    'esc-2026',
    'aha-acc-hfsa-2022',
    'nice-ng106',
    'comparaison',
    'fevg',
    'dai',
    'crt',
  ],
  aliases: [
    'ESC vs AHA',
    'ESC vs ACC',
    'ESC vs NICE',
    'Recommandations américaines insuffisance cardiaque',
    'AHA/ACC/HFSA 2022',
    'NICE NG106',
    'Comparaison des recommandations',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "En Europe (et en France), les cardiologues s'appuient principalement sur la Société Européenne de Cardiologie (ESC 2026). Aux États-Unis, la référence reste le texte AHA/ACC/HFSA 2022 ; au Royaume-Uni, NICE NG106 (mis à jour en 2025) fixe le cadre du NHS. Les trois s'accordent sur le socle des quatre classes de médicaments débutées précocement, mais divergent sur les seuils de FEVG (< 50 % en Europe contre ≤ 40 % aux États-Unis et au Royaume-Uni), la place en première ligne du sacubitril/valsartan, les seuils de NT-proBNP, la chirurgie de pontage et certains critères de dispositifs.",
  sections: [
    {
      headingFr: 'Comparaison côte à côte (ESC 2026, AHA/ACC/HFSA 2022, NICE NG106)',
      bodyMarkdownFr: `| Thème | ESC 2026 (Europe / France) | AHA/ACC/HFSA 2022 (États-Unis) | NICE NG106 (Royaume-Uni, MAJ 2025) |
|---|---|---|---|
| **Publication** | 28 août 2026 (remplace ESC 2021 + 2023) | 2022 (points clés datés du 29 mars 2022) | 2018 ; médicaments et suivi réévalués en sept. 2025 |
| **Définition de l'ICFER (HFrEF)** | FEVG **< 50 %** avec symptômes ou signes. La catégorie « modérément réduite » (HFmrEF) est supprimée | FEVG **≤ 40 %**. HFmrEF 41–49 %. HFpEF ≥ 50 % | FEVG **≤ 40 %**. HFmrEF 41–49 %. HFpEF ≥ 50 % avec anomalies structurelles |
| **FEVG améliorée (HFimpEF)** | Hausse d'au moins 10 points aboutissant au-dessus de 40 % | FEVG antérieure ≤ 40 % remontant ensuite > 40 % | Non définie dans NG106 |
| **Médicaments de fond (4 piliers)** | IEC ou ARNI, bêtabloquant, ARM, iSGLT2 ; tous Classe I | ARNI, IEC ou ARA2 ; bêtabloquant ; ARM ; iSGLT2 ; tous Classe 1 | **Proposer** IEC, bêtabloquant, ARM et iSGLT2 |
| **ARNI (sacubitril/valsartan — Entresto)** | IEC ou ARNI (Classe I, A) ; passage à l'ARNI en Classe I (B1) | **ARNI en première ligne** (Classe 1, A). IEC si ARNI non réalisable | **Envisager le passage** de l'IEC à l'ARNI si symptômes persistants aux doses maximales tolérées des 4 piliers ; non recommandé en remplacement si l'IEC fonctionne (coût-efficacité) |
| **Ordre d'initiation** | Débuter les quatre précocement | Débuter les quatre tôt, titration en environ 3 mois si possible (parcours ACC 2024) | Aucun ordre fixe ; inutile d'atteindre la dose maximale d'un médicament avant d'ajouter le suivant |
| **Poursuite après amélioration de la FEVG** | Oui (Classe I) | Oui, même sans symptôme | Non abordé |
| **Stades A–D** | Adopte les stades A à D de l'AHA/ACC | Stades A (« à risque ») à D | Non utilisés |
| **Réadaptation cardiaque** | Classe I pour les patients stables | Non détaillé dans les extraits examinés | **Proposer** un programme personnalisé basé sur l'exercice |

Une FEVG à 35 % est classée « réduite » dans les trois référentiels ; une FEVG à 45 % est « réduite » selon l'ESC 2026 mais « modérément réduite » aux États-Unis et au Royaume-Uni.`,
    },
    {
      headingFr: 'NT-proBNP et fréquence de suivi',
      bodyMarkdownFr: `| Thème | ESC 2026 | NICE NG106 (Royaume-Uni) |
|---|---|---|
| **Insuffisance cardiaque peu probable (ambulatoire)** | NT-proBNP < 125 pg/mL | NT-proBNP < 400 ng/L chez un patient non encore traité |
| **Orientation spécialisée accélérée** | > 2 000 pg/mL | > 2 000 ng/L : avis spécialisé et ETT sous 2 semaines ; 400–2 000 ng/L : sous 6 semaines |
| **Guidage du traitement par NT-proBNP** | Essais discordants ; non soutenu en routine pour guider les diurétiques | À envisager en soins spécialisés chez les moins de 75 ans avec bonne fonction rénale (DFGe > 60) |
| **Suivi en phase stable** | Tous les 6 à 12 mois en cas d'IC symptomatique (Figure 22) | Au moins tous les 6 mois |

*Note :* pg/mL et ng/L représentent exactement la même unité.`,
    },
    {
      headingFr: 'Pontage aorto-coronarien (CABG) et stents (PCI)',
      bodyMarkdownFr: `- **NICE (Royaume-Uni) :** ne pas proposer **en routine** de revascularisation coronaire aux personnes atteintes d'ICFER et de maladie coronaire (recommandation datant de 2018 dans NG106).
- **ESC 2026 (Europe) :** position détaillée dans l'article sur la revascularisation coronaire, intégrant STICHES et REVIVED-BCIS2.
- **États-Unis (recommandations insuffisance cardiaque 2022) :** chez des patients sélectionnés avec FEVG ≤ 35 % et anatomie coronaire adaptée, le pontage ajouté au traitement médical est bénéfique pour les symptômes, les hospitalisations cardiovasculaires et la survie à long terme (**Classe 1, B-R**, d'après STICH). REVIVED-BCIS2 y était encore décrit comme en cours.
- **États-Unis (recommandations maladie coronaire chronique 2023) :** le pontage ajouté au traitement médical est recommandé par rapport aux médicaments seuls pour améliorer la survie en cas d'atteinte significative du tronc commun ou pluritronculaire avec FEVG ≤ 35 % (**Classe 1, B-R**). Le texte note que le stenting n'a pas amélioré le pronostic ni la survie dans REVIVED-BCIS2, et demande un passage en Heart Team pour les atteintes complexes.
- **Synthèse :** l'ESC 2026 et les recommandations américaines privilégient le pontage lorsqu'une revascularisation est retenue dans ce groupe, alors que la formulation plus ancienne de NICE (2018) déconseille la revascularisation systématique.`,
    },
    {
      headingFr: 'Critères du défibrillateur (DAI) et de la resynchronisation (CRT)',
      bodyMarkdownFr: `### Comparaison ESC 2026 vs États-Unis 2022 (texte intégral, section 7.4.1)

| Situation | ESC 2026 | États-Unis 2022 (AHA/ACC/HFSA) |
|---|---|---|
| **Avec symptômes (NYHA II–III)** | Cause ischémique, NYHA II–III, FEVG ≤ 35 % **malgré au moins 3 mois** de traitement optimal, sans infarctus dans les 40 derniers jours, espérance de vie > 1 an en bon état fonctionnel : **Classe I (B1)** | Au moins **40 jours** après infarctus (ou cause non ischémique), **FEVG ≤ 35 %**, **NYHA II ou III** sous traitement de fond, survie attendue > 1 an : **Classe 1 (A)** |
| **Sans symptôme (NYHA I) après infarctus** | Pas de recommandation séparée dans les extraits ESC consultés | Au moins 40 jours après infarctus, **FEVG ≤ 30 %**, **NYHA I**, survie > 1 an : **Classe 1 (B-R)**, d'après MADIT-II |
| **Cause non ischémique** | Classe IIa (plus faible) | Incluse dans la même recommandation Classe 1 |
| **Non recommandé** | Dans les 40 jours suivant un infarctus ; NYHA IV non éligible à une CRT, une assistance ou une greffe | Espérance de vie fonctionnelle < 1 an : **Classe 3 (sans bénéfice)** |
| **Durée préalable sous traitement médical** | Au moins 3 mois | Pas de chiffre dans la recommandation elle-même ; la section imagerie demande de recontrôler la FEVG > 40 jours après infarctus et > 90 jours après revascularisation ou initiation du traitement |

*Clarification d'un écart antérieur :* les diapositives AHA et une synthèse ACC avaient divergé sur la classe NYHA et le signe ≤ vs <. Le texte intégral américain 2022 tranche : NYHA II–III à FEVG ≤ 35 %, et NYHA I uniquement à FEVG ≤ 30 % après infarctus (le texte d'accompagnement cite toutefois MADIT-II tantôt comme ≤ 30 %, tantôt comme < 30 %).

### Critères NICE (Royaume-Uni — évaluation technologique TA314, 2014, révisée 2017)

Ils s'appliquent uniquement lorsque la **FEVG est ≤ 35 %**, selon la classe NYHA et l'ECG :

| Largeur du QRS / BBG | NYHA I | NYHA II | NYHA III | NYHA IV |
|---|---|---|---|---|
| **< 120 ms** | DAI si risque élevé de mort subite | DAI si risque élevé | DAI si risque élevé | DAI et CRT non indiqués |
| **120–149 ms, sans BBG** | DAI | DAI | DAI | CRT-P |
| **120–149 ms, avec BBG** | DAI | CRT-D | CRT-P ou CRT-D | CRT-P |
| **≥ 150 ms** | CRT-D | CRT-D | CRT-P ou CRT-D | CRT-P |

- TA314 ne définit pas numériquement le « risque élevé » et ne fixe ni délai minimal après infarctus ni durée minimale préalable de traitement médical.
- NG106 précise comment discuter un DAI : la fonction de choc peut être désactivée sans arrêter la stimulation ni la CRT, et son maintien doit être réévalué tous les 6 mois.

### Resynchronisation cardiaque (CRT — États-Unis 2022 vs ESC 2026)

Aux États-Unis (2022) : **Classe 1 (B-R)** si FEVG ≤ 35 %, rythme sinusal, BBG avec QRS ≥ 150 ms et NYHA II, III ou IV ambulatoire. Recommandation plus faible (**Classe 2a**) pour QRS ≥ 150 ms sans BBG, BBG avec QRS 120–149 ms, ou besoin anticipé de stimulation > 40 %. Non recommandé (**Classe 3**) si QRS < 120 ms. Cela concorde avec les critères ESC 2026 de Classe I sur le QRS et le BBG.`,
    },
    {
      headingFr: 'Autres points des recommandations américaines et britanniques',
      bodyMarkdownFr: `### Points complémentaires États-Unis (2022 et parcours ACC 2024)

- **Rapidité de mise en route (ACC 2024) :** débuter tôt les quatre piliers et titrer aux doses maximales tolérées en 3 mois si possible. Des doses faibles des quatre classes sont jugées probablement préférables à des doses complètes d'une ou deux classes seulement.
- **Évaluation médico-économique (2022) :** ARNI, IEC, ARA2, bêtabloquants, ARM, DAI et CRT sont classés à **haute valeur économique** ; iSGLT2 et transplantation cardiaque à valeur intermédiaire.
- **Moindre bénéfice attendu d'un DAI (ACC 2024) :** patients plus âgés polypathologiques ; DAI déconseillé en hémodialyse ; le diabète multiplie par 2,6 le risque de complications liées au DAI.
- **Comorbidités listées :** carence martiale, anémie, hypertension, troubles du sommeil, diabète, FA et maladie coronaire.
- **Médicaments et titration (texte intégral US 2022) :** ARNI Classe 1 (A) en NYHA II–III ; IEC si l'ARNI n'est pas réalisable, puis ARA2 ; jamais d'ARNI dans les 36 heures suivant un IEC (Classe 3, risque). ARM si DFGe > 30 et potassium < 5,0 mmol/L (arrêter si potassium impossible à maintenir < 5,5 mmol/L). iSGLT2 Classe 1 (A). Titration vers les doses cibles des essais (Classe 1), jusqu'à toutes les 1 à 2 semaines (Classe 2a). Poursuite du traitement si la FEVG s'améliore (Classe 1).
- **NT-proBNP (US 2022) :** recommandé pour évaluer le risque (Classe 1). Le texte précise que les preuves pour guider le traitement par des dosages répétés « demeurent insuffisantes » et n'émet aucune recommandation gradée sur ce point.
- **Imagerie et suivi (US 2022) :** recontrôler la FEVG après événement majeur ou avant décision de dispositif (Classe 1) ; échographies de routine sans raison clinique non recommandées (Classe 3). Consultation dans les 7 jours après sortie d'hospitalisation jugée raisonnable (Classe 2a).
- **Nutrition et compléments (US 2022) :** éviter les excès de sodium raisonnable (Classe 2a, C-LD) ; restriction hydrique de bénéfice incertain, réservée à l'IC avancée avec hyponatrémie (Classe 2b) ; oméga-3 en ajout envisageables en NYHA II–IV (Classe 2b) ; vitamines et autres compléments non recommandés sauf carence avérée (Classe 3, sans bénéfice) ; fer IV raisonnable en cas de carence martiale dans l'ICFER (Classe 2a).

### Points complémentaires NICE NG106 (Royaume-Uni)

- **Sel et liquides :** ne pas conseiller systématiquement de restreindre le sel ou les liquides ; évaluer les apports et n'adapter qu'en cas de besoin (ex. restriction hydrique si hyponatrémie). Éviter les sels de substitution contenant du potassium.
- **Fer intraveineux :** à envisager dans l'ICFER si hémoglobine < 150 g/L (15 g/dL) et ferritine < 100 ng/mL ou CST < 20 %.
- **Soins palliatifs :** ne pas utiliser de scores pronostiques pour décider d'une orientation ; ne pas prescrire d'oxygénothérapie au long cours à domicile pour l'insuffisance cardiaque isolée.
- **Conduite automobile :** NG106 renvoie aux règles du DVLA (Royaume-Uni) ; en France, le texte applicable est l'arrêté du 28 mars 2022.`,
    },
    {
      headingFr: 'Traitements additionnels, gilet défibrillateur (LifeVest) et télésurveillance',
      bodyMarkdownFr: `| Sujet | ESC 2026 (Europe) | États-Unis (2022 sauf mention) | Royaume-Uni (NICE) et repères France (HAS) |
|---|---|---|---|
| **Ivabradine (Procoralan)** | Classe IIa : FEVG ≤ 35 %, rythme sinusal, FC > 70 bpm sous traitement maximal toléré | Classe 2a (B-R) : NYHA II–III, FEVG ≤ 35 %, bêtabloquant maximal toléré, rythme sinusal, FC ≥ 70 bpm | NICE TA267 : NYHA II–IV, rythme sinusal, FC ≥ 75 bpm, FEVG ≤ 35 %, stable depuis 4 semaines, initiation spécialisée |
| **Digoxine / digitoxine** | Classe IIa (rehaussée) : FEVG ≤ 40 % malgré traitement optimal | Classe 2b (B-R) : symptômes persistants ou impossibilité de prendre le traitement de fond (non actualisé après DIGIT-HF) | NICE : proposer la digoxine en cas d'ICFER s'aggravant ou sévère malgré traitement optimisé, après avis spécialisé |
| **Vériciguat (Verquvo)** | Classe IIb : FEVG < 45 % malgré traitement optimal | Classe 2b (B-R) : patients sélectionnés à haut risque avec aggravation récente sous traitement de fond | NICE : pas de recommandation (TA731 interrompue, absence de dossier industriel) |
| **Finérénone (Kerendia)** | ICFER : ARM stéroïdien cité. Diabète type 2 + MRC : finérénone Classe I, A | Non couverte (antérieur à FINEARTS-HF) ; AMM FDA pour FEVG ≥ 40 % | NICE : option dans HFmrEF/HFpEF (TA1182), pas dans l'ICFER |
| **Chélateurs de potassium** | Discutés pour maintenir les ARM ; bénéfice clinique incertain | Classe 2b | Non abordés dans les sources NICE consultées |
| **Gilet défibrillateur portable (LifeVest)** | Classe IIb comme passerelle temporaire | Recommandation rythmologique US 2017 non consultée | Non couvert par NICE dans les sources lues. **France (HAS) :** remboursé dans la cardiomyopathie ischémique avec FEVG ≤ 35 %. Conduite interdite en France pendant son indication (pas de règle spécifique DVLA au Royaume-Uni) |
| **Télésurveillance à domicile** | Classe IIb | Non couverte dans les sources lues | NICE NG106 : aucune recommandation. **France :** remboursée par l'Assurance Maladie depuis 2023 selon le référentiel HAS |
| **Capteur de pression pulmonaire (CardioMEMS)** | Classe IIa : NYHA III avec hospitalisation pour IC dans les 12 derniers mois | Classé IIb à l'époque de MONITOR-HF (2023) | NICE HTG769 (2026) : usage de routine NHS en NYHA III à risque d'hospitalisation. **France (HAS 2021) :** non remboursé (service attendu insuffisant) |`,
    },
    {
      headingFr: 'Stade B, tension artérielle et apnée du sommeil',
      bodyMarkdownFr: `| Sujet | ESC 2026 | États-Unis | Autres référentiels |
|---|---|---|---|
| **IEC au stade B (FEVG ≤ 40 %)** | Classe I, A | Classe 1 (2022, d'après diapositives AHA) | — |
| **Bêtabloquant au stade B** | Classe I, B (FEVG < 50 %) | Classe 1, FEVG ≤ 40 % (2022, diapositives AHA) | — |
| **Cible tensionnelle dans l'ICFER établie** | Aucune cible testée ; les médicaments de l'IC constituent le traitement | Aucune cible spécifique IC (2022) ; recommandation HTA US 2025 : < 130/80 mmHg chez l'adulte en général | NICE : aucune cible spécifique IC |
| **Cible systolique en prévention et stade B** | < 130 mmHg (Classe I, A) | — | — |
| **Vérapamil, diltiazem** | Contre-indiqués | — | NICE : éviter |
| **ASV dans l'ICFER avec apnée surtout centrale (SACS)** | Non recommandée (**Classe III, A**) | Délétère en NYHA II–IV (2022, via revue 2025) | AASM 2025 (société américaine du sommeil) : peut être suggérée uniquement en centre expert ; ERS/ESRS 2025 : centres experts uniquement |
| **ASV dans l'ICFER avec apnée surtout obstructive (SAOS)** | Peut être envisagée (Classe IIb, C) | — | — |

Le principal désaccord porte sur l'ASV : la recommandation cardiologique européenne dit clairement non dans le SACS avec ICFER, tandis que la recommandation américaine de médecine du sommeil (AASM 2025) laisse une place très encadrée en centre expert. Les classes américaines 2022 pour le stade B proviennent des diapositives AHA, non du texte intégral des recommandations.`,
    },
    {
      headingFr: 'Existe-t-il des textes plus récents ?',
      bodyMarkdownFr: `- **États-Unis :** aucune nouvelle recommandation ni mise à jour ciblée sur l'insuffisance cardiaque n'a été publiée depuis 2022 à la date de novembre 2026. Un communiqué de presse de l'AHA a évoqué une prochaine édition attendue fin 2027, mais cette date ne figure pas dans le texte consensuel publié et doit donc être considérée comme non confirmée.
- **Seconde Définition Universelle de l'Insuffisance Cardiaque (AHA/ACC/ESC/World Heart Federation, juin 2026 ; texte intégral consulté) :** consensus international sur les définitions, qui précise explicitement ne **pas** être une recommandation thérapeutique. Il s'agit d'un document distinct des recommandations ESC 2026 qui ne modifie pas les seuils ESC, américains ou NICE figurant dans les tableaux ci-dessus :
  - **FEVG :** trois groupes — FEVG réduite, préservée et améliorée — sans **aucune frontière numérique** entre réduite et préservée et sans catégorie « modérément réduite ». Les seuils fixes ont été abandonnés car jugés arbitraires face à la variabilité de mesure, aux écarts entre modalités d'imagerie (ETT vs IRM) et aux questions non résolues liées au sexe, à l'âge et à l'origine ethnique. Les seuls chiffres cités sont une limite inférieure de la normale autour de 53 % (femmes) et 52 % (hommes), une FEVG < 50 % étant peu susceptible d'être normale, et une FEVG améliorée décrite comme une hausse d'au moins 10 points au-dessus de 40 % (jugée insuffisante isolément).
  - **Peptides natriurétiques :** des taux élevés appuient le diagnostic et comptent pour le stade B, mais **aucun seuil numérique** n'est fixé.
  - **Stades et trajectoires :** les stades A à D sont réaffirmés ; les notions d'amélioration, de rémission, de récupération, d'aggravation et d'insuffisance cardiaque décompensée sont définies.
  - **Causes :** 18 groupes sont établis pour un recueil standardisé, avec la **cardiomyopathie ischémique en premier**. Le texte juge la simple dichotomie ischémique / non ischémique trop simplificatrice tout en conservant la catégorie ischémique, sans fixer de critères diagnostiques pour l'appliquer.
- **Royaume-Uni :** NICE NG106 a été mis à jour en 2025 ; l'évaluation TA314 sur les DAI/CRT date de 2014 (dernière révision en 2017).`,
    },
  ],
  relatedArticleSlugs: [
    'comprendre-le-diagnostic',
    'cardiomyopathie-ischemique',
    'fraction-dejection',
    'insuffisance-cardiaque-fevg-amelioree',
    'dispositifs-cardiaques-dai-crt',
    'gilet-defibrillateur-portable',
    'medicaments-insuffisance-cardiaque',
    'finerenone-et-nouveaux-arm',
    'regles-conduite-automobile',
    'examens-et-chiffres',
    'revascularisation-pontage-stents',
    'vivre-avec-insuffisance-cardiaque',
    'traitements-additionnels-nouveaux',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'tension-arterielle-insuffisance-cardiaque',
    'dysfonction-vg-asymptomatique-stade-b',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'stenose-aortique-fevg-reduite',
    'cholesterol-et-prevention-secondaire',
    'occlusion-coronaire-chronique-cto',
    'telesurveillance-insuffisance-cardiaque',
    'tableau-preuves-nutrition-complements',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 (insuffisance cardiaque)',
      detail: 'Définitions FEVG < 50 %, 4 piliers, NT-proBNP, DAI/CRT, traitements additionnels, stade B, tension artérielle, télésurveillance et sommeil',
    },
    {
      label: 'AHA/ACC/HFSA 2022 (insuffisance cardiaque), ACC 2024 (parcours ICFER) et AHA/ACC 2023 (maladie coronaire chronique)',
      detail: 'Définition FEVG ≤ 40 %, ARNI en 1re ligne, critères DAI/CRT, NT-proBNP, revascularisation par pontage et recommandations nutritionnelles (textes intégraux)',
    },
    {
      label: 'NICE NG106 (MAJ 2025), TA314, TA267, TA731 et HTG769',
      detail: 'Recommandations britanniques NHS sur médicaments, NT-proBNP, DAI/CRT, ivabradine, vériciguat et CardioMEMS',
    },
    {
      label: 'Seconde Définition Universelle de l’Insuffisance Cardiaque (AHA/ACC/ESC/WHF, juin 2026, texte intégral)',
      detail: 'Groupes de FEVG sans seuils numériques fixes, peptides natriurétiques sans seuils, stades A–D, trajectoires et classification en 18 causes (cardiomyopathie ischémique en premier)',
    },
    {
      label: 'HAS (CNEDiMTS LifeVest 2024, CardioMEMS 2021, référentiel télésurveillance), AASM 2025 et ERS/ESRS 2025',
      detail: 'Spécificités de remboursement en France et divergences sur la servo-ventilation adaptative (ASV)',
    },
  ],
  disclaimerType: 'medical',
};
