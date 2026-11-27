import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'recommandations-comparees-esc-us-nice',
  sourceWikiPath: 'wiki/references/guidelines-compared.md',
  titleFr: 'Recommandations européennes (ESC), américaines et britanniques comparées',
  category: 'references',
  readingTier: 'reference',
  asOf: '2026-11-27',
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
    'exercice',
    'renforcement-musculaire',
    'cellules-souches',
    'france',
    'esc-2023-cardiomyopathies',
    'esc-eacts-2025',
    'esc-2023-diabete',
    'esc-2022-arythmies',
    'peri-operatoire',
    'jours-de-maladie',
    'comorbidites',
    'efx-cpet',
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
    "Pourquoi une information lue sur un site américain ou britannique diffère-t-elle parfois de ce que recommande votre cardiologue en France ? Cette fiche compare les recommandations européennes, américaines et britanniques sur l'insuffisance cardiaque. Si les grands traitements de fond convergent, certains seuils et pratiques varient selon les pays. Consultez-la pour comprendre ces écarts et clarifier ce qui s'applique à votre suivi.",
  sections: [
    {
      headingFr: 'Comparaison côte à côte (ESC 2026, AHA/ACC/HFSA 2022, NICE NG106)',
      bodyMarkdownFr: `| Thème | ESC 2026 (Europe / France) | AHA/ACC/HFSA 2022 (États-Unis) | NICE NG106 (Royaume-Uni, MAJ 2025) |
|---|---|---|---|
| **Publication** | 28 août 2026 (remplace ESC 2021 + 2023) | 2022 (points clés datés du 29 mars 2022) | 2018 ; médicaments et suivi réévalués en sept. 2025 |
| **Définition de l'ICFER (HFrEF)** | FEVG **< 50 %** avec symptômes ou signes. La catégorie « modérément réduite » (HFmrEF) est supprimée | FEVG **≤ 40 %**. HFmrEF 41–49 %. HFpEF ≥ 50 % | FEVG **≤ 40 %**. HFmrEF 41–49 %. HFpEF ≥ 50 % avec anomalies structurelles |
| **FEVG améliorée (HFimpEF)** | Hausse d'au moins 10 points aboutissant au-dessus de 40 % | FEVG antérieure ≤ 40 % remontant ensuite > 40 % | Non définie dans NG106 |
| **Médicaments de fond (4 piliers)** | IEC ou ARNI, bêtabloquant, ARM, iSGLT2 ; tous Classe I | ARNI, IEC ou ARA2 ; bêtabloquant ; ARM ; iSGLT2 ; tous Classe 1 | **Proposer** IEC, bêtabloquant, ARM et iSGLT2 |
| **ARNI (sacubitril/valsartan — *Entresto*)** | IEC ou ARNI (Classe I, A) ; passage à l'ARNI en Classe I (B1) | **ARNI en première ligne** (Classe 1, A). IEC si ARNI non réalisable | **Envisager le passage** de l'IEC à l'ARNI si symptômes persistants aux doses maximales tolérées des 4 piliers ; non recommandé en remplacement si l'IEC fonctionne (coût-efficacité) |
| **Ordre d'initiation** | Débuter les quatre précocement | Débuter les quatre tôt, titration en environ 3 mois si possible (parcours ACC 2024) | Aucun ordre fixe ; inutile d'atteindre la dose maximale d'un médicament avant d'ajouter le suivant |
| **Poursuite après amélioration de la FEVG** | Oui (Classe I, C) | Oui, même sans symptôme (1, B-R) | Non abordé |
| **Stades A–D** | Adopte les stades A à D de l'AHA/ACC | Stades A (« à risque ») à D | Non utilisés |
| **Réadaptation cardiaque** | Classe I (B1) pour l'entraînement personnalisé en réadaptation ; Classe I (B2) au long cours hors réadaptation ; Classe IIa (B1) après une décompensation | Non détaillé dans les extraits examinés | **Proposer** un programme personnalisé basé sur l'exercice |

Une FEVG à 35 % est classée « réduite » dans les trois référentiels ; une FEVG à 45 % est « réduite » selon l'ESC 2026 mais « modérément réduite » aux États-Unis et au Royaume-Uni.`,
    },
    {
      headingFr: 'Les quatre médicaments de fond, classe par classe',
      bodyMarkdownFr: `Comparaison établie au 27 novembre 2026 pour l'insuffisance cardiaque à FEVG réduite symptomatique (sauf mention contraire).

| Question thérapeutique | ESC 2026 (Europe) | AHA/ACC/HFSA 2022 (États-Unis) | NICE NG106 (Royaume-Uni, 2025) |
|---|---|---|---|
| **Premier bloqueur du SRAA** | IEC **ou** ARNI : **I, A** (Tableau 5) | ARNI (NYHA II–III) : **1, A** ; IEC si ARNI non réalisable : **1, A** (Sec 7.3.1) | **Proposer** un IEC avec les trois autres classes (1.4.1) |
| **Passage IEC/ARA2 vers ARNI** | Si toujours symptomatique : **I, B1** | NYHA II–III tolérant IEC/ARA2 : **1, B-R** | **Envisager** si symptômes persistants aux doses maximales tolérées des 4 piliers (1.4.2) ; non conseillé si l'état s'améliore (coût-efficacité) |
| **ARA2 en recours** | Uniquement en cas d'intolérance à l'IEC et à l'ARNI : **I, A** | Intolérance IEC et ARNI non réalisable : **1, A** | Après angio-œdème sous IEC : envisager un ARA2 (1.4.4) ; autre intolérance IEC : proposer un ARNI (1.4.3) |
| **Délai de 36 h IEC → ARNI et angio-œdème** | Délai de 36 h exigé dans le texte (non gradé) | ARNI avec ou dans les 36 h d'un IEC : **3 : Harm, B-R** ; antécédent d'angio-œdème : **3 : Harm, C-LD** | Au moins 36 h (texte explicatif) |
| **Bêtabloquant (molécules et titration)** | **I, A** ; bisoprolol, carvédilol, métoprolol succinate et nébivolol dans le tableau des doses (note : nébivolol sans preuve sur la mortalité). Titration toutes les 1–2 sem. : **I, C** | **1, A** ; bisoprolol, carvédilol et métoprolol succinate uniquement (nébivolol absent). Doses cibles des essais : **1, A** ; toutes les 1–2 sem. : **2a, C-EO** | **Proposer** (1.4.1) ; réévaluer fréquence cardiaque et état clinique après chaque palier |
| **Bêtabloquant pour contrôle de fréquence en FA** | 1re ligne : **I, C** (texte : effet pronostique en FA « incertain »). ESC 2024 FA : bêtabloquant et/ou digoxine si FEVG ≤ 40 % : **I, B** | Texte : bénéfice de mortalité non observé en FA | Non précisé dans les extraits consultés |
| **ARM stéroïdien** | ARM dans l'IC symptomatique quelle que soit la FEVG, **ARM stéroïdien** nommé pour l'ICFER : **I, A** (seuil DFGe 25, K+ < 5,0) | Spironolactone ou éplérénone, NYHA II–IV, DFGe > 30 et K+ < 5,0 : **1, A** ; arrêter si K+ ne peut rester < 5,5 : **3 : Harm, B-NR** | **Proposer** (1.4.1) ; bilans sanguins avant puis 1–2 sem. après initiation ou hausse |
| **Éplérénone post-IDM (FEVG ≤ 40 %)** | Tableau stade B : avec **signes d'IC ou diabète** : **I, B1** *(le texte narratif écrit « et diabète »)* | Muet dans le tableau stade B (Sec 6.1) | Non couvert dans les extraits consultés |
| **Inhibiteur SGLT2 et seuils rénaux** | Dapagliflozine ou empagliflozine, IC symptomatique **quelle que soit la FEVG** : **I, A** | ICFER chronique symptomatique avec ou sans DT2 : **1, A** (Sec 7.3.4) | **Proposer** avec les trois autres sans ordre fixe (1.4.1). *RCP UE :* ne pas initier sous DFGe 25 (*Forxiga*) ou 20 (*Jardiance*) ; pas de seuil d'arrêt |
| **Poursuite si la FEVG s'améliore** | **I, C** | **1, B-R** (Sec 7.6.2, HFimpEF) | Non abordé |

- **Accord et divergences :** les trois référentiels nomment les mêmes quatre classes au plus haut niveau (I/1, A). Les écarts portent sur le premier bloqueur du SRAA (ARNI en 1re ligne aux États-Unis, IEC ou ARNI en Europe, IEC d'abord au Royaume-Uni), la place du nébivolol (listé en Europe, absent aux États-Unis), le seuil rénal des ARM (DFGe 25 vs 30) et la gradation explicite du délai de 36 h et de l'angio-œdème aux États-Unis.
- **Nuances à connaître :** l'ESC 2026 appelle « ICFER » toute FEVG < 50 %, mais les essais pivots de bêtabloquants, ARM et iSGLT2 dans l'ICFER ont inclus des FEVG ≤ 40 % (voire ≤ 35 %) ; autour de 35 %, cela ne change rien, contrairement à la zone 41–49 %. Des incohérences internes existent aussi dans l'ESC 2026 (ARA2 en recours gradé I A malgré l'absence d'effet démontré sur la mortalité totale ; bêtabloquant Classe I en FA alors que son effet pronostique y est dit incertain ; formulation « et/ou diabète » pour l'éplérénone au stade B).`,
    },
    {
      headingFr: 'NT-proBNP, suivi, pontage (CABG) et stents (PCI)',
      bodyMarkdownFr: `### NT-proBNP et fréquence de suivi

| Thème | ESC 2026 | NICE NG106 (Royaume-Uni) |
|---|---|---|
| **Insuffisance cardiaque peu probable (ambulatoire)** | NT-proBNP < 125 pg/mL | NT-proBNP < 400 ng/L chez un patient non encore traité |
| **Orientation spécialisée accélérée** | > 2 000 pg/mL | > 2 000 ng/L : avis spécialisé et ETT sous 2 semaines ; 400–2 000 ng/L : sous 6 semaines |
| **Guidage du traitement par NT-proBNP** | Essais discordants ; non soutenu en routine pour guider les diurétiques | À envisager en soins spécialisés chez les moins de 75 ans avec bonne fonction rénale (DFGe > 60) |
| **Suivi en phase stable** | Tous les 6 à 12 mois en cas d'IC symptomatique (Figure 22) | Au moins tous les 6 mois |

*Note :* pg/mL et ng/L sont exactement la même unité.

### Pontage aorto-coronarien (CABG) et stents (PCI)

- **NICE (Royaume-Uni) :** ne pas proposer **en routine** de revascularisation coronaire aux personnes atteintes d'ICFER et de maladie coronaire (recommandation de 2018 dans NG106).
- **ESC 2026 (Europe) :** privilégie la discussion en Heart Team intégrant STICHES et REVIVED-BCIS2.
- **États-Unis (recommandations IC 2022 et coronaropathie chronique 2023) :** le pontage ajouté au traitement médical est recommandé pour améliorer la survie en cas d'atteinte significative du tronc commun ou pluritronculaire avec FEVG ≤ 35 % (**Classe 1, B-R**, d'après STICH). Le texte 2023 note que les stents n'ont pas amélioré le pronostic dans REVIVED-BCIS2 et demande un passage en Heart Team.`,
    },
    {
      headingFr: 'Critères du défibrillateur (DAI) et de la resynchronisation (CRT)',
      bodyMarkdownFr: `### Comparaison ESC 2026 vs États-Unis 2022 (section 7.4.1)

| Situation | ESC 2026 (et ESC 2022 rythmologie) | États-Unis 2022 (AHA/ACC/HFSA) |
|---|---|---|
| **Avec symptômes (NYHA II–III)** | Cause ischémique, NYHA II–III, FEVG ≤ 35 % **malgré au moins 3 mois** de traitement optimal, sans infarctus dans les 40 derniers jours, espérance de vie > 1 an en bon état fonctionnel : **Classe I (B1)**. ESC 2022 rythmologie (coronaropathie, NYHA II–III, FEVG ≤ 35 % après ≥ 3 mois) : **I, A** | Au moins **40 jours** après infarctus (ou cause non ischémique), **FEVG ≤ 35 %**, **NYHA II ou III** sous traitement de fond, survie attendue > 1 an : **Classe 1 (A)** |
| **Sans symptôme (NYHA I) après infarctus** | ESC 2026 IC : non détaillé dans les extraits consultés. **ESC 2022 rythmologie** (coronaropathie, NYHA I, FEVG ≤ 30 %) : **IIa, B** | Au moins 40 jours après infarctus, **FEVG ≤ 30 %**, **NYHA I**, survie > 1 an : **Classe 1 (B-R)**, d'après MADIT-II |
| **Cause non ischémique** | **IIa, B1** (plus faible ; ESC 2023 cardiomyopathies : CMD/NDLVC FEVG ≤ 35 % après > 3 mois : **IIa, A**) | Incluse dans la même recommandation **Classe 1 (A)** |
| **FEVG ≤ 40 % avec TVNS (coronaropathie)** | ESC 2022 rythmologie : TVNS + TV monomorphe soutenue inductible à l'EEP : **IIa, B** | Non couvert dans les extraits US IC 2022 consultés |
| **Non recommandé** | Dans les 40 jours suivant un infarctus ; NYHA IV non éligible à une CRT, une assistance ou une greffe | Espérance de vie fonctionnelle < 1 an : **Classe 3 (sans bénéfice)** |
| **Durée préalable sous traitement médical** | Au moins 3 mois | Pas de chiffre dans la recommandation elle-même ; la section imagerie demande de recontrôler la FEVG > 40 jours après infarctus et > 90 jours après revascularisation ou initiation du traitement |

- **Pourquoi l'Europe distingue selon la cause :** dans la cardiomyopathie ischémique, MADIT-II a prolongé la survie (HR 0,69 ; à 8 ans HR 0,66) et le sous-groupe ischémique de SCD-HeFT allait dans le même sens à 11 ans (HR 0,81). À l'inverse, dans l'essai non ischémique DANISH, le DAI a divisé par deux la mort subite (HR 0,50) sans réduire significativement la mortalité totale (HR 0,87 ; à 13 ans HR 0,96). Les États-Unis maintiennent la Classe 1 pour les deux causes. Tous ces essais précèdent l'ARNI et les iSGLT2.
- **Nuance interne ESC :** la même population ischémique (NYHA II–III, FEVG ≤ 35 %, ≥ 3 mois de traitement) est classée **I, A** dans l'ESC 2022 rythmologie et **I, B1** dans l'ESC 2026 IC en raison de la nouvelle échelle A/B1/B2/C ; le sens de la recommandation reste identique. Le texte intégral US 2022 tranche également les anciens écarts de résumés : NYHA II–III à ≤ 35 %, et NYHA I uniquement à ≤ 30 % après infarctus.

### Critères NICE (TA314, 2014, révisée 2017) et CRT

Les critères NICE TA314 s'appliquent uniquement lorsque la **FEVG est ≤ 35 %** (QRS < 120 ms : DAI si haut risque en NYHA I–III ; 120–149 ms sans BBG : DAI en NYHA I–III et CRT-P en IV ; 120–149 ms avec BBG : DAI en I, CRT-D en II, CRT-P/D en III, CRT-P en IV ; ≥ 150 ms : CRT-D en I–II, CRT-P/D en III, CRT-P en IV). NG106 précise que la fonction de choc peut être désactivée sans arrêter la CRT et doit être réévaluée tous les 6 mois.

Pour la **CRT**, les États-Unis (2022) et l'ESC 2026 s'accordent sur la **Classe I** en rythme sinusal avec FEVG ≤ 35 %, BBG et QRS ≥ 150 ms (Classe 2a si QRS ≥ 150 ms sans BBG, BBG 120–149 ms ou stimulation attendue > 40 % ; Classe 3 si QRS < 120 ms).`,
    },
    {
      headingFr: 'Traitements additionnels, anti-angineux, antiplaquettaires et diurétiques',
      bodyMarkdownFr: `### Traitements additionnels, gilet défibrillateur (LifeVest) et télésurveillance

| Sujet | ESC 2026 (Europe) | États-Unis (2022 sauf mention) | Royaume-Uni (NICE) et repères France (HAS) |
|---|---|---|---|
| **Ivabradine (*Procoralan*)** | Classe IIa : FEVG ≤ 35 %, rythme sinusal, FC > 70 bpm sous traitement maximal toléré | Classe 2a (B-R) : NYHA II–III, FEVG ≤ 35 %, bêtabloquant maximal toléré, rythme sinusal, FC ≥ 70 bpm | NICE TA267 : NYHA II–IV, rythme sinusal, FC ≥ 75 bpm, FEVG ≤ 35 %, stable 4 sem. |
| **Digoxine / digitoxine** | Classe IIa (rehaussée) : FEVG ≤ 40 % malgré traitement optimal | Classe 2b (B-R) : symptômes persistants (antérieur à DIGIT-HF) | NICE : digoxine en cas d'ICFER s'aggravant ou sévère malgré traitement optimisé |
| **Vériciguat (*Verquvo*)** | Classe IIb : FEVG < 45 % malgré traitement optimal | Classe 2b (B-R) : haut risque avec aggravation récente | NICE : pas de recommandation (TA731 interrompue) |
| **Finérénone (*Kerendia*)** | ICFER : ARM stéroïdien cité. DT2 + MRC : finérénone Classe I, A | Antérieur à FINEARTS-HF ; AMM FDA pour FEVG ≥ 40 % | NICE : option en HFmrEF/HFpEF (TA1182), pas dans l'ICFER |
| **Chélateurs de potassium** | Discutés pour maintenir les ARM ; bénéfice clinique incertain | **Classe 2b, B-R** (Sec 7.3.6 vérifiée : hyperkaliémie ≥ 5,5 mmol/L sous bloqueur SRAA ; ARM Sec 7.3.3 **Classe 3 : Harm, B-NR** si K+ impossible à maintenir < 5,5) | Non couverts dans les sources NICE consultées |
| **Gilet défibrillateur (LifeVest)** | Classe IIb comme passerelle temporaire | Recommandation rythmologique US 2017 non consultée | **France (HAS) :** remboursé en cardiomyopathie ischémique FEVG ≤ 35 % ; conduite interdite en France pendant son indication (pas de règle DVLA spécifique au RU) |
| **Télésurveillance à domicile** | Classe IIb | Non couverte dans les sources lues | NICE NG106 : aucune recommandation. **France :** remboursée depuis 2023 (référentiel HAS) |
| **Capteur de pression pulmonaire (CardioMEMS)** | Classe IIa : NYHA III avec hospitalisation IC dans les 12 mois | Classé IIb (2023) | NICE HTG769 (2026) : routine NHS NYHA III. **France (HAS 2021) :** non remboursé |

### Médicaments anti-angineux

| Médicament | ESC 2024 (SCC) | ESC 2026 IC (sec. 9.2.1) | US ACC/AHA 2023 (CCD) | NICE CG126 et France (HAS ALD 13, 2021) |
|---|---|---|---|---|
| **Trinitrine rapide (*Natispray*)** | I B | Prudence : hypotension (non gradé) | 1 B-NR | NICE : proposer ; HAS : 1re intention avec bêtabloquant |
| **Dérivé nitré longue durée** | IIa B ; fenêtre libre IIa B | Non nommé | 1 B-R (option initiale) | NICE : 2e ligne ; France : formes orales retirées, patchs uniquement |
| **Ranolazine (*Ranexa*)** | IIa B | Symptômes seuls (non gradé) | 1 B-R | NICE : 2e ligne ; France : commercialisée en 2025 sans remboursement |
| **Ivabradine (*Procoralan*)** | IIa B si FEVG < 40 % ; III B si FEVG > 40 % sans IC | À envisager si FC > 70 (IIa B1 pour pronostic IC à FEVG ≤ 35 %) | 3 : Harm si fonction VG normale uniquement | NICE : 2e ligne |
| **Nicorandil, trimétazidine (*Vastarel*)** | IIb B | Symptômes seuls (non gradé) | Non présents dans les recommandations angor | Nicorandil : 2e ligne NICE, SMR insuffisant HAS 2026 ; trimétazidine non remboursée en France |
| **Dérivé nitré + inhibiteur PDE-5** | III B (contre-indiqué) | — | — | Contre-indiqué |

### Antiplaquettaires, bithérapie (DAPT) et protection gastrique (IPP)

| Référentiel | Monothérapie au long cours | Bithérapie (DAPT) post-stent | IPP (protection gastrique) |
|---|---|---|---|
| **ESC 2024 (SCC)** | Aspirine **I A** ; clopidogrel en alternative **I A** | 6 mois (**I A**) ; 1–3 mois si haut risque hémorragique (**I A**) | Association antithrombotique + risque digestif élevé **I A** ; monothérapie à envisager (**IIa**) |
| **ESC 2023 (SCA)** | — | 12 mois après SCA ; schémas raccourcis IIa/IIb | Sous DAPT à haut risque digestif : **I** |
| **AHA/ACC 2023 (CCD) & 2025 (SCA)** | Aspirine **1 A** ; clopidogrel « raisonnable » | 6 mois (CCD **1 A**), P2Y12 seul après 1–3 mois (2a) ; ≥ 12 mois après SCA (ticagrélor seul dès 1 mois **1 A**) | Sous DAPT : **2a B-R** (CCD) ; haut risque digestif sous DAPT/anticoagulant : **1** (SCA 2025) |
| **HAS (France, 2012 / 2023)** | Aspirine par défaut (A) ; clopidogrel si allergie (B) | 6–12 mois (2012) ; pas au-delà de 12 mois (avis 2023) | Après hémorragie digestive ; éviter clopidogrel + oméprazole/ésoméprazole |

Aucune de ces recommandations ne fixe de règle de durée de DAPT spécifique à l'insuffisance cardiaque.

### Escalade et résistance aux diurétiques

| Situation | ESC 2026 IC (texte intégral) | AHA/ACC/HFSA 2022 (États-Unis) | NICE NG106 (Royaume-Uni) |
|---|---|---|---|
| **Rétention hydrosodée chronique** | Diurétique de l'anse dynamique et individualisé (**I, A**) ; aucun diurétique de l'anse supérieur à un autre | Sec 7.2 : diurétiques **1, B-NR** | Ajuster à la plus faible dose efficace (1.9.1) |
| **Thiazidiques au long cours en IC stable** | Texte : l'usage chronique en phase stable **doit être évité** | Sec 7.2 : réserver (ex. métolazone) aux non-répondeurs aux doses modérées/élevées de diurétique de l'anse (**1, B-NR**) | Non mentionné |
| **Escalade hospitalière / diurétique d'ajout** | Diurétiques de l'anse IV (**I, A**) ; **acétazolamide IV ou hydrochlorothiazide oral** à court terme si déjà sous diurétique de l'anse (**IIa, B1**, révisé) ; guidage précoce par **natriurèse** (**IIb, B1**, nouveau) ; ultrafiltration si réfractaire (**IIb, C**) | Sec 9.3 : diurétiques IV précoces (**1, B-NR**), intensification par dose IV supérieure ou second diurétique (**2a, B-NR**) — *antérieur à ADVOR, CLOROTIC, TRANSFORM-HF et PUSH-AHF* | Diurétiques communautaires oraux/SC/IV classés en question de recherche uniquement |
| **Escalade ambulatoire** | Sec 7.5.4 (narratif) : hausse orale encadrée par le clinicien, métolazone brève (2,5–5 mg), hôpital de jour IV ou SC (non gradé ; pas d'auto-ajustement libre) | Non gradée séparément | Question de recherche uniquement |`,
    },
    {
      headingFr: 'Stade B, confirmation de la cause, tension artérielle et sommeil',
      bodyMarkdownFr: `### Stade B (pré-insuffisance cardiaque), nouvelle grille ESC 2026 (` + '`B1` / `B2`' + `), tension et sommeil

| Sujet | ESC 2026 | États-Unis (AHA/ACC/HFSA 2022 Sec 6.1 & US CKM 2026 Sec 5.6.2) | Autres référentiels |
|---|---|---|---|
| **IEC / ARA2 au stade B** | **Classe I, A** (ligne combinée IEC/ARA2, FEVG ≤ 40 %, Tableau 2 p. 21) | IEC **Classe 1** (FEVG ≤ 40 %) ; ARA2 **Classe 1** après **IDM récent** (FEVG ≤ 40 %) si intolérance IEC | — |
| **Bêtabloquant au stade B** | **Classe I, B1** pour **FEVG < 50 %** (Tableau 2 ; CAPRICORN + méta-analyse IPD Rossello 2025) | Deux lignes **Classe 1** à **FEVG ≤ 40 %** (post-IDM/SCA et dysfonction VG plus large). **Divergence de seuil** (< 50 % vs ≤ 40 %) | — |
| **Éplérénone post-IDM** | **Classe I, B1** post-IDM, FEVG ≤ 40 % avec **signes d'IC ou diabète** (Tableau 2 et 5) | Muet dans le tableau Stade B (Sec 6.1) | — |
| **Statine et DAI au stade B** | Statine **IIa, A** (haut risque) ; DAI primaire absent du tableau Stade B | Statine **Classe 1** post-IDM ; DAI primaire **Classe 1, B-R** (≥ 40 j post-IDM, FEVG ≤ 30 %, NYHA I) | — |
| **iSGLT2, ARNI et médicaments nocifs au stade B** | iSGLT2 **I, A** si DT2 à risque IC ou DT2+MRC (muet sans diabète ; aucune mention de PARADISE-MI, EMPACT-MI ou DAPA-MI) ; ARNI muet ; vérapamil/diltiazem, glitazones et saxagliptine contre-indiqués | 2022 : glitazones et inhibiteurs calciques non DHP **Classe 3 : Harm** à FEVG < 50 %. **US CKM 2026 (Sec 5.6.2) :** mode de vie intensif **1, B-R** ; iSGLT2 **1, B-NR** en pré-IC avec **DT2 ou MRC** ; GLP-1 (**2a, B-NR**, RACU ≥ 100) et ARM non stéroïdien (**2a, B-NR**, RACU ≥ 30) si DT2+MRC ; muet sans DT2/MRC | — |
| **Tension artérielle** | ICFER établie : aucune cible testée. Prévention et stade B : systolique **< 130 mmHg (I, A)**. Vérapamil/diltiazem contre-indiqués | ICFER : aucune cible spécifique (HTA US 2025 : < 130/80 en population générale). Vérapamil/diltiazem **Classe 3 : Harm (A)** | NICE : aucune cible spécifique IC ; éviter vérapamil/diltiazem |
| **ASV dans l'ICFER avec SACS** | Non recommandée (**Classe III, A**) ; peut être envisagée en SAOS prédominant (**IIb, C**) | Délétère en NYHA II–IV (2022) | AASM 2025 et ERS/ESRS 2025 : uniquement en centres experts |

- **Nouvelle grille de niveaux de preuve ESC 2026 (Tableau 2, p. 9 ; Juni 2025) :** pour la première fois, l'ESC divise le niveau B thérapeutique en **` + '`B1`' + `** (preuves randomisées suggestives : ≥ 1 ECR de puissance adéquate et à faible biais ou méta-analyse de tels ECR, p < 0,05 — par exemple bêtabloquants et éplérénone au stade B) et **` + '`B2`' + `** (études non randomisées contrôlées ou méta-analyse de petits ECR). Le niveau ` + '`A`' + ` exige ≥ 2 ECR de puissance adéquate (p < 0,005) ; les tableaux diagnostiques conservent ` + '`A/B/C`' + ` sans division.

### Confirmation de la cause de la dysfonction VG (ESC 2023 Cardiomyopathies vs ESC 2026 / US / NICE)

| Question étiologique | ESC 2023 Cardiomyopathies (texte intégral) | ESC 2026 IC / ESC 2024 FA | AHA/ACC/HFSA 2022 & NICE NG106 |
|---|---|---|---|
| **IRM cardiaque avec contraste (LGE)** | **I, B** à l'évaluation initiale ; **IIa, C** suivi sérié (amylose, sarcoïdose, inflammation) | ESC 2026 IC : **I, C** si cardiomyopathie suspectée ou cause incertaine | NICE : envisager si échogénicité mauvaise (1.2.10) |
| **Exclusion d'une maladie coronaire** | Coroscanner **IIa, C** | ESC 2026 : coronarographie **I, C** (angor + forte probabilité) / **IIa, C** (ICFER forte probabilité) ; coroscanner **IIa, C** (probabilité faible à modérée) | US 2022 : recherche d'ischémie **2a, B-NR** |
| **Génétique et dépistage en cascade** | Test index **I, B** ; conseil génétique et MDT **I, B** ; cascade adulte **I, B** ; sortie du suivi si génotype-/phénotype- **I, C** ; pas de test si phénotype négatif sans variant familial **III, C** | Non couvert dans les extraits ESC 2026 | NICE : muet |
| **Cardiomyopathie rythmique (FA)** | Tachyarythmies listées comme cause directe de CMD | ESC 2024 FA : ablation par cathéter **I, B** si forte probabilité de cardiomyopathie rythmique ; cardioversion diagnostique **IIa, C** | NICE renvoie aux recommandations FA |
| **Amylose et sarcoïdose cardiaques** | Amylose : **scintigraphie osseuse 99mTc-DPD/PYP/HMDP (I, B)** + SPIE/UPIE/chaînes légères libres obligatoires + génétique *TTR*. Sarcoïdose : **TEP-18F-FDG (IIa, C)**, IRM sériée (**IIa, C**), biopsie si doute (**IIa, C**) | Non couvert dans les extraits ESC 2026 | Déclaration AHA 2024 sarcoïdose (corticoïdes en 1re ligne si forme active manifeste) |
| **Impact du génotype sur le DAI primaire** | CMD/NDLVC FEVG ≤ 35 % > 3 mois **IIa, A** ; génotype à haut risque (*LMNA, FLNC, TMEM43, PLN, DSP, RBM20*) + FEVG > 35 % + facteurs de risque **IIa, C** | ESC 2026 IC : ischémique ≤ 35 % **I, B1** vs non ischémique **IIa, B1** | US 2022 : ischémique et non ischémique tous deux **1, A** ; génétique arythmogène ≤ 45 % **2a, B-NR** ; NICE TA314 ne sépare pas par cause |`,
    },
    {
      headingFr: 'Insuffisance cardiaque avancée, valves, thrombus VG et diabète',
      bodyMarkdownFr: `### Insuffisance cardiaque avancée (stade D) et hypertension pulmonaire

| Question | ESC 2026 IC (Section 8) | ISHLT 2023 MCS | ESC/ERS 2022 HTP & autres |
|---|---|---|---|
| **Orientation précoce vers un centre expert IC avancée** | **I / A** ; toute diminution de dose de traitement de fond doit inciter à contacter le centre | Prise en charge par équipe IC avancée | NICE : envisager avis greffe si symptômes sévères réfractaires |
| **Seuil FEVG du repère « I NEED HELP »** | **< 20 %** (ou dysfonction VD sévère) | **≤ 35 %** (divergence de seuil ; critère parmi d'autres) | — |
| **LVAD / Greffe cardiaque** | LVAD **I / C** (patients sélectionnés) ; greffe **I / C** | LVAD pont ou définitif **I / A** ; INTERMACS 1–3 **I / A** ; profil 4 **IIb / B** | — |
| **Inotropes continus / soins palliatifs** | Inotropes en pont **IIa / C** ; anticipation **I / B1** ; équipe palliative intégrée **I / B2** | LVAD si dépendant des inotropes **IIa / B** ; avis palliatif pendant bilan LVAD **IIa / C** | Inotropes ambulatoires intermittents : pas d'entrée ESC 2026 |
| **HTP du groupe 2 (cœur gauche)** | — | — | ESC/ERS 2022 : traiter d'abord le cœur gauche (**I / A**) ; médicaments de l'HTAP **contre-indiqués (III / A)** ; centre expert HTP si composante précapillaire sévère ou dysfonction VD (**I / C**) |

### Rétrécissement aortique (RAo) et maladie coronaire associée (ESC/EACTS 2025 vs ACC/AHA 2020)

| Situation | ESC/EACTS 2025 (diapositives officielles) | ACC/AHA 2020 VHD (États-Unis) | Divergence / point clé |
|---|---|---|---|
| **RAo serré symptomatique haut gradient** | Intervention **I, B** | Stade D1 : **1, A** | Fort accord |
| **RAo serré bas débit bas gradient classique (FEVG < 50 %, SVi ≤ 35)** | Confirmé par écho dobutamine / score calcique scanner : **I, B** *(2025 supprime l'exigence de réserve de flux pour la Classe I)* | Stade D2 : **1, B-NR** (individualisé si absence de réserve de flux) | ESC 2025 unifie la Classe I quelle que soit la réserve de flux |
| **RAo serré asymptomatique + FEVG < 50 %** | **I, B** (nouveau en 2025 pour FEVG ≥ 50 % : intervention précoce bas risque **IIa, A**) | Stade C2 : **1, B-NR** | Accord (en cardiomyopathie ischémique, discussion Heart Team) |
| **RAo modéré : isolé vs pontage associé** | Isolé : non recommandé. RVA chirurgical concomitant lors d'un pontage : **IIa, C** | Isolé : lacune de preuve. RVA concomitant : **2b, C-EO** | **Divergence de force** sur le geste concomitant (**IIa, C** vs **2b, C-EO**) |
| **Choix TAVI vs chirurgie (SAVR) et coronaires** | Heart Team **I, C**, accès coronaire à vie **I, C** ; **TAVI ≥ 70 ans (I, A)** ; **SAVR < 70 ans** bas risque (**I, B**). Lors d'un SAVR : pontage si sténose **≥ 70 % (I, C)**, 50–70 % (**IIa, C**). Avant TAVI : angioplastie si **≥ 90 % sur vaisseau ≥ 2,5 mm (IIa, B, nouveau)** ; ≥ 70 % proximal (**IIb, B, abaissé**) | Seuils d'âge 2020 antérieurs au passage à 70 ans ; statines pour ralentir le RAo : **3 : No Benefit, A** (mais **1, A** pour l'athérosclérose) | Seuil d'âge TAVI abaissé à 70 ans ; PCI pré-TAVI recentrée sur les sténoses ≥ 90 % |
| **Intervalles d'ETT de surveillance** | Léger 2–3 ans, modéré ≥ annuel, serré ≥ 6 mois | Léger 3–5 ans, modéré 1–2 ans, serré 6–12 mois (débit normal uniquement) | Aucun barème spécifique à la FEVG basse |

### Anticoagulants pour thrombus VG ou anévrisme VG

- **Accord :** un caillot confirmé est traité (ESC 2023 SCA : 3–6 mois guidés par l'imagerie, **IIa C** ; déclaration AHA 2022 et ACC/AHA 2025 SCA sec. 9.4 : ~3 mois puis contrôle, en texte narratif non gradé) ; aucune anticoagulation systématique en rythme sinusal sans indication précise (ESC 2026 ; AHA 2022 **3 : No Benefit, B-R**).
- **Divergences :** seul NICE NG106 (clause 1.9.6 datant de 2003) mentionne l'anévrisme VG sans caillot comme motif d'envisager un anticoagulant ; l'ACC/AHA 2025 SCA a supprimé les anciennes recommandations gradées de 2013 sur l'akinésie apicale et le thrombus ; seule la déclaration AHA 2022 utilise la forme du caillot (mobile, saillant, mural/plat) pour nuancer la durée.

### Médicaments du diabète dans l'insuffisance cardiaque

| Classe / cible | ESC 2023 Diabète & MCV (Tableau 22, texte intégral) | AHA/ACC/HFSA 2022 & ADA 2022 / 2026 | Divergence / remarque |
|---|---|---|---|
| **iSGLT2** (dapagliflozine, empagliflozine, sotagliflozine) | **I, A** dans l'ICFER (et FEVG > 40 %) ; bascule vers traitements à bénéfice CV **I, C** | **1, A** dans l'ICFER symptomatique avec ou sans diabète ; ADA **Grade A** | Accord transatlantique complet |
| **Metformine** | **IIa, B** (IC chronique stable, DFGe > 30) | ADA : acceptable si IC stable et DFGe > 30 (ne pas initier entre 30 et 45) | Accord si IC stable et DFGe > 30 |
| **Agonistes GLP-1** | **IIa, A** (neutre sur hosp IC ; ne pas associer aux DPP-4 ; *sec. 7.5.2 signale LIVE/FIGHT*) | ADA 2026 **Grade A** pour athérosclérose (pas pour l'ICFER elle-même) | Tension interne ESC entre IIa A et signaux LIVE/FIGHT |
| **Sitagliptine, linagliptine (DPP-4)** | **IIa, A** (neutres dans TECOS/CARMELINA) | **ADA 2022 déconseille toute la classe DPP-4** dans l'IC | **Divergence nette ESC vs ADA** |
| **Alogliptine / Saxagliptine / Pioglitazone** | Saxagliptine **III, B** ; pioglitazone **III, A** ; alogliptine omise du IIa | Alogliptine et saxagliptine **3 : Harm, B-R** ; glitazones **3 : Harm, A** | Accord contre saxagliptine et glitazones ; restriction US plus forte sur alogliptine |
| **Insulines basales, sulfamides et HbA1c** | Insulines basales **IIa, B** (prudence en IC avancée) ; sulfamides non gradés ; HbA1c individualisée (**I, C**), éviter l'hypoglycémie (**I, B**) | ADA : prudence avec insuline/sulfamides ; zone observationnelle la plus favorable 7–8 % | Accord contre les cibles glycémiques trop strictes |`,
    },
    {
      headingFr: 'Chirurgie non cardiaque, soins dentaires, jours de maladie et arythmies ventriculaires',
      bodyMarkdownFr: `### Chirurgie non cardiaque, endoscopie, antibioprophylaxie dentaire et jours de maladie

| Situation | Europe (ESC 2022 NCS / ESC 2023 EI / RCP EMA) | États-Unis (AHA/ACC 2024 NCS / AHA 2021 EI / GLP-1 2024) | France (HAS oct. 2024 / SFCO 2015 / GIHP-SFAR) et RU (NICE NG148 / BSG-ESGE / KDIGO 2024) |
|---|---|---|---|
| **Biomarqueurs pré-op et délai post-stent (DES)** | Préfère **hs-troponine** ; chirurgie urgente possible **≥ 1 mois** après DES chronique en Heart Team ; FEVG < 40 % = haut risque de thrombose | Préfère **BNP/NT-proBNP** ; délai optimal ≥ 6 mois, urgent **≥ 3 mois** (≤ 30 j délétère si arrêt antiplaquettaire) | GIHP/SFAR 2018 : différer la chirurgie élective ; poursuivre l'aspirine dès que possible |
| **Bêtabloquants et bloqueurs du SRAA** | Poursuivre bêtabloquant ; poursuite SRAA admise en IC stable | Poursuivre bêtabloquant ; **ICFER : raisonnable de poursuivre IEC/ARA2 (2a)**, individualiser l'ARNI | **KDIGO 2024 (MRC) :** envisager pause 48–72 h **avec plan écrit de reprise** (antérieur à STOP-or-NOT et SPACE) |
| **iSGLT2 (chirurgie et maladie aiguë)** | ESC 2022 : pause ≥ 3 j pré-op. **RCP EMA *Forxiga* (nov. 2025) et *Jardiance* (janv. 2026) §4.4 :** interrompre en cas d'hospitalisation pour chirurgie majeure ou maladie aiguë grave (doser les cétones sanguines plutôt qu'urinaires ; pause si pertes digestives ; *Jardiance* mentionne les cas non diabétiques) | AHA/ACC 2024 : pause **3 jours** (dapa/empa/cana) ou **4 jours** (ertugliflozine) pré-op **même sans diabète** | **KDIGO 2024 :** pause 48–72 h / jeûne prolongé / maladie grave ; poursuivre lors de la baisse initiale attendue du DFGe |
| **GLP-1 avant anesthésie** | **EMA PRAC (juil. 2024) :** avertissement d'inhalation bronchique ajouté aux RCP UE | **Guidance 5 sociétés (Kindel, oct. 2024) :** poursuite stratifiée si bas risque ; régime liquide 24 h / échographie gastrique / induction rapide si risque élevé (ou pause 1 sem.) | Confirmer la conduite locale à la *consultation d'anesthésie* |
| **Antiplaquettaires, AOD et endoscopie** | Poursuivre aspirine si stent ; pas de relais héparine pour AOD | Pauses si inévitables : prasugrel 7 j, clopidogrel 5 j, **ticagrélor 3 j**, aspirine 4–5 j ; pas de relais AOD | **GIHP/SFAR 2018 :** aspirine 3 j, clopidogrel 5 j, **ticagrélor 5 j**, prasugrel 7 j. **BSG/ESGE 2021 (endoscopie) :** P2Y12 **7 j** si haut risque ; AOD dernière prise 3 j avant (5 j dabigatran si ClCr 30–50), sans relais. **SFCO 2015 (dentaire) :** poursuivre monothérapie antiplaquettaire pour toute chirurgie orale (Grade A) et DAPT/AOD/AVK (INR < 4,0) pour soins à faible risque |
| **Antibioprophylaxie dentaire (endocardite)** | **PAS de prophylaxie** pour ICFER/stents (**III, C**) ni DAI/CRT/pacemaker (hygiène **I, C**). Haut risque : antécédent EI (**I, B**), prothèse/TAVI (**I, C**), **LVAD (I, C)**, **TEER/MitraClip (IIa, C)**, **greffe cardiaque (IIb, C)**. **Clindamycine retirée** | **PAS de prophylaxie** pour ICFER, stents ou DAI/CRT (AHA 2021) ; greffe uniquement si valvulopathie ; **clindamycine retirée** | **HAS oct. 2024 (France, texte intégral) :** **PAS de prophylaxie** ni contre-indication dentaire pour DAI/CRT/pacemaker ; bain de bouche chlorhexidine 1 min (**Grade B**) ; **LVAD et MitraClip/TriClip tous deux Grade A (haut risque)** ; greffe non compliquée non Grade A en routine ; **clindamycine retirée** ; avertit que l'**azithromycine 500 mg** est risquée/contre-indiquée avec les médicaments allongeant le QT (amiodarone/sotalol) |
| **Règles « jours de maladie » (SRAA / ARM / diurétiques)** | ESC 2026 IC : pas de carte d'auto-arrêt patient gradée | AHA/ACC/HFSA 2022 : pas de carte patient ; Diabetes Canada SADMANS ajoute le contact équipe IC | **NICE NG148 (IRA, MAJ 16 oct. 2024) conserve verbatim la Rec ` + '`1.2.14 [2013]`' + ` destinée aux cliniciens :** envisager l'arrêt temporaire des IEC/ARA2 en cas de diarrhée, vomissements ou sepsis jusqu'à stabilisation (retrait produit de contraste limité à DFGe < 30 en ` + '`1.2.9`' + ` [2024] ; pas de carte d'auto-arrêt systématique). **Clark 2019 (UK Renal/BSH)** s'oppose aux cartes génériques dans l'IC |

### Arythmies ventriculaires, extrasystoles (ESV) et ablation de TV

| Situation | ESC 2022 AV/MSC (texte intégral) | HRS/EHRA/APHRS/LAHRS 2019 | AHA/ACC/HRS 2017 |
|---|---|---|---|
| **Antiarythmiques préventifs et classe IC en coronaropathie** | Antiarythmiques préventifs hors bêtabloquants : **III, A** ; classe IC (flécaïnide, propafénone) **contre-indiqués / III** | Aligné | Bloqueurs sodiques classe I post-IDM : **III : Harm, B-R** |
| **Cardiomyopathie induite/aggravée par ESV** | Suspecter dès **≥ 10 %** (**IIa, C**) ; IRM **IIa, B** ; **ablation I, C** ; non-répondeurs CRT **IIa, C** ; asymptomatique > 20 % **IIb, B** | Ablation PVC-CM **I, B-NR** ; cardiopathie structurelle **IIa, B-NR** ; non-répondeurs CRT **IIa, C-LD** | Ablation **I, B-NR** (souvent formulée > 15 %) |
| **TV monomorphe récidivante malgré amiodarone** | **Ablation par cathéter I, B** (préférée à l'escalade médicamenteuse) | **I, B-R** | **I, B-R / B-NR** |
| **TV récidivante sous bêtabloquant / ablation de 1re ligne** | Ajouter amiodarone ou sotalol (**IIa, B**) ; ablation après BB/sotalol (**IIa, C**) ; ablation précoce dès la 1re TV avec DAI ischémique (**IIb, B**) | Si antiarythmiques non souhaités (**IIa, C-EO**) ; 1re TV avec DAI (**IIb, A**) | Amiodarone/sotalol (**I, B-R**) ; ablation 1re ligne (**IIb, C-LD**) |
| **TV bien tolérée à FEVG ≥ 40 % et orage rythmique** | Ablation en centre expert en alternative au DAI (**IIa, C**). Orage rythmique : sédation (**I, C**), bêtabloquant non sélectif + amiodarone IV (**I, B**), ablation si réfractaire (**I, B**). Détection prolongée et ATP **I, A** | Orage réfractaire : ablation **I, B-NR** ; revascularisation seule pour TV monomorphe récidivante : **III : No Benefit, B-NR** | Aligné sur orage rythmique, détection prolongée et ATP |

*Décalage des recommandations :* les trois textes rythmologiques sont **antérieurs à VANISH2 (NEJM 2025 / JACC 2026)** et à PARTITA ; leur classement IIb de l'ablation en première intention précède donc le plus grand essai comparant ablation de première ligne et sotalol/amiodarone.`,
    },
    {
      headingFr: 'Exercice, vie quotidienne, autres comorbidités et examens spécialisés',
      bodyMarkdownFr: `### Endurance, renforcement musculaire et cellules souches

- **Exercice :** aucune recommandation n'affirme que la musculation surpasse l'endurance aérobie. L'ESC 2026 (Classe I), l'ESC 2020 (cardiologie du sport), l'AHA 2023 et en France le **GERS-P/SFC 2023** et la **HAS 2022** placent l'endurance aérobie comme socle (3 à 6 séances/semaine) et ajoutent le renforcement musculaire (2 à 3 fois/semaine, 30–70 % de 1RM bras et 40–80 % jambes selon le GERS-P ; 40–60 % initialement selon l'AHA). La HAS mentionne la contre-indication de « la musculation » (sans définir de charge) à côté de sa recommandation de « renforcement musculaire », tension à clarifier avec l'équipe de réadaptation.
- **Thérapies cellulaires / cellules souches :** ESC 2026, AHA/ACC/HFSA 2022 et ESC 2021 sont totalement muets sur ce sujet ; au 25 novembre 2026, aucun médicament de thérapie innovante (MTI / ATMP) cardiaque n'est autorisé dans l'Union européenne (liste EMA juin 2026).

### Vie quotidienne : santé sexuelle, voyages, canicule, tabac et alcool

| Sujet | Europe / ESC / EMA | États-Unis | Royaume-Uni et France | Divergence principale |
|---|---|---|---|---|
| **Santé sexuelle et IPDE-5** | ESC 2024 : dérivés nitrés + IPDE-5 **III, B** (≥ 24 h sildénafil, ≥ 48 h tadalafil). **RCP EMA *Viagra* (sildénafil) :** contre-indique l'IC **sévère** (prudence avec *Entresto*, PA < 90/50). **RCP EMA *Cialis* (tadalafil) :** contre-indique strictement **NYHA II ou plus dans les 6 derniers mois** | Princeton IV (2024) et AHA 2012 : stable NYHA I–II sûr (3–5 METs) ; NYHA II éligible aux IPDE-5 | **NICE NG106 (1.7.9) :** ne pas priver d'un bêtabloquant pour la seule dysfonction érectile. Mêmes RCP européens en France | **Divergence réglementaire nette :** le RCP européen de *Cialis* interdit dès NYHA II contrairement à *Viagra* et Princeton IV |
| **Avion et haute altitude** | **Parati 2018 (ESC/ESH/ISMM) :** NYHA I–II stable ≤ **3 500 m (IIa, C)**, NYHA III ≤ 3 000 m, NYHA IV/instable éviter > 2 500 m (**I, C**), montée lente ≤ 300–500 m/j > 2 500 m (**I, C**), attendre ≥ 6 mois post-SCA/pontage (**I, C**), angor CCS II–III ≤ 2 500 m | — | NICE NG106 : avion possible pour la plupart des IC stables (cabine ≤ 2 438 m). **BHF :** éviter **> 2 000 m** | **Plafond d'altitude :** Parati 2018 (jusqu'à 3 000–3 500 m ; 2 500 m si angor) vs BHF (> 2 000 m) |
| **Canicule et froid** | Déstabilisation des traitements cardiaques | **AHA 2026 :** chaleur et froid extrêmes augmentent décompensations, IDM, AVC et arythmies | **ANSM France (mai–juin 2026) :** ne jamais arrêter seul ses traitements ; surveiller diurétiques, iSGLT2, SRAA/ARNI, bêtabloquants, digoxine, patchs ; éviter AINS et paracétamol en cas de coup de chaleur (appeler le 15) | Accord contre l'auto-arrêt ; plan pré-été indispensable |
| **Tabac et e-cigarette** | ESC 2026 : éviter le tabac (I, C) ; arrêt bénéfique à tout stade. ESC 2024 SCC : déconseille e-cigarette et usage mixte | Soutien comportemental + pharmacothérapie | **France (HCSP 2021 / Ameli 2025 / BDPM 2026) :** substituts nicotiniques remboursés à 65 % sans plafond et *Champix* (varénicline) revenu le 16/06/2025 en 2e intention ; **ne recommande pas la cigarette électronique** (0 % remboursé) | **Divergence vapotage :** HCSP et ESC 2024 déconseillent vs messages grand public plus souples |
| **Alcool** | **ESC 2026 IC :** réduire la consommation est bénéfique dans tous les cas. **ESC 2024 FA :** ≤ **30 g/semaine** (≤ 3 verres standard français, **I, B**) | Limiter / éviter l'alcool dans l'IC | **Santé publique France (2026) :** repère population générale max 2 verres/jour, 10/semaine (100 g), jours sans alcool, *sans dose sans risque* (n'est pas une cible ICFER) | **Plafonds multiples :** « moins est toujours mieux » (ESC 2026) / ≤ 30 g/sem si FA vs 100 g/sem population générale |

### Autres comorbidités et examens spécialisés

| Comorbidité ou examen | Recommandations ESC | Recommandations US / internationales | Divergence ou limite clé |
|---|---|---|---|
| **AINS / COX-2 et ASE (anémie hors fer)** | ESC : AINS **Classe III** ; bilan NFS + ferritine/CST **I, C** ; ASE **III, B** | AHA 2022 : AINS **3 : Harm, B-NR** ; ASE **3 : Harm, B-R** (RED-HF) | Accord complet : éviter AINS et ASE |
| **Goutte (allopurinol, fébuxostat, colchicine)** | Allopurinol en 1re intention ; colchicine pour les crises ; ne pas traiter l'hyperuricémie asymptomatique | **RCP FDA *Uloric* (déc. 2025) :** maintient le *Boxed Warning* décès CV (2e ligne) malgré l'essai européen FAST. **Colchicine :** **ANSM France** contre-indique strictement sous DFGe 30 et avec les macrolides (plus strict que la FDA) | Divergence US/UE sur fébuxostat et seuils rénaux plus stricts en France pour la colchicine |
| **BPCO / asthme, thyroïde et AOMI** | BPCO non contre-indication aux bêtabloquants β1-sélectifs ; TSH initiale et de suivi (ESC 2026) ; ESC 2024 PAAD : rivaroxaban 2,5 mg × 2/j + aspirine **IIa, A** dans l'AOMI à haut risque | GOLD 2024/2025 : β1-sélectif pour l'IC, pas pour la BPCO isolée (BLOCK COPD) ; ETA 2018 : prise en charge conjointe cardio-endocrino pour l'AIT sous amiodarone ; COMPASS a exclu FEVG < 30 % et NYHA III–IV | Prudence pour le schéma COMPASS dans l'ICFER sévère |
| **Fragilité, EFX (CPET), GLS, troponine et imagerie** | ESC 2026 : distingue fragilité cardiaque réversible et non cardiaque ; **EFX / CPET I, C** en bilan d'IC avancée (` + '`VO2 pic ≤ 12 mL/kg/min`' + ` sous bêtabloquant ou < 50 % théorique) ; seuils thérapeutiques et DAI restent basés sur la **FEVG** ; coronarographie **I, C / IIa, C**, coroscanner **IIa, C**, IRM+LGE **I, C** | ISHLT 2016/2024 : mêmes seuils EFX (` + '`≤ 12`' + ` sous BB, ` + '`≤ 14`' + ` hors BB, ` + '`VE/VCO2 > 35`' + `). ASE/EACVI 2015 : GLS normal ~-20 % (même constructeur exigé en suivi). 4UDMI 2018 : delta sérié + ischémie pour IDM aigu vs lésion chronique stable | Aucun ECR ne prouve un guidage thérapeutique par GLS ou troponine |
| **Tests de viabilité myocardique pour la revascularisation** | ESC 2026 IC : le texte narratif indique que les preuves pour sélectionner les patients à revasculariser par test de viabilité sont « manquantes » (**non gradé**) | AHA 2022 : recherche de coronaropathie **2a, B-NR** ; imagerie de stress pour guider la revascularisation **2b, B-NR** (ischémie, non viabilité) ; texte : STICH viabilité n'a pas prédit le bénéfice du pontage. ACC/AHA/SCAI 2021 : pontage **1, B-R**, aucune recommandation gradée sur la viabilité. Déclaration AHA 2020 (pré-REVIVED) : l'imagerie de viabilité n'a pas amélioré le pronostic pour guider un pontage | **Accord transatlantique :** aucune recommandation ne grade le test de viabilité comme critère de sélection pour revasculariser (d'après STICH, REVIVED-BCIS2 et PARR-2) |`,
    },
    {
      headingFr: 'Seconde Définition Universelle de l’Insuffisance Cardiaque (juin 2026) et actualité',
      bodyMarkdownFr: `- **États-Unis :** aucune nouvelle recommandation ni mise à jour ciblée américaine sur l'insuffisance cardiaque n'a été publiée depuis 2022 au 25 novembre 2026 (une mention de fin 2027 dans un communiqué AHA reste non confirmée dans le texte consensuel publié).
- **Seconde Définition Universelle de l'Insuffisance Cardiaque (AHA/ACC/ESC/World Heart Federation, juin 2026 ; texte intégral consulté) :** consensus international sur la terminologie, qui précise explicitement ne **pas** être une recommandation thérapeutique et ne modifie pas les seuils ESC, US ou NICE :
  - **FEVG :** trois groupes — réduite, préservée et améliorée — sans **aucune frontière numérique fixe** entre réduite et préservée et sans catégorie « modérément réduite ». Une limite inférieure de la normale est située autour de 53 % (femmes) et 52 % (hommes), une FEVG < 50 % étant peu susceptible d'être normale.
  - **Peptides natriurétiques :** des taux élevés appuient le diagnostic et comptent pour le stade B, sans seuil numérique unique.
  - **Stades, trajectoires et causes :** réaffirmation des stades A à D (avec mention d'un stade 0), définitions d'amélioration, rémission, récupération, aggravation et décompensation, et classification en **18 groupes étiologiques avec la cardiomyopathie ischémique en premier**.
- **Royaume-Uni :** NICE NG106 a été mis à jour en 2025 ; TA314 date de 2014 (révisée en 2017) et NG148 (insuffisance rénale aiguë) d'octobre 2024.`,
    },
  ],
  relatedArticleSlugs: [
    'lire-les-preuves-medicales',
    'comprendre-le-diagnostic',
    'cardiomyopathie-ischemique',
    'fraction-dejection',
    'insuffisance-cardiaque-fevg-amelioree',
    'dispositifs-cardiaques-dai-crt',
    'these-benefice-dai-sous-quadritherapie',
    'arythmies-ventriculaires-et-antiarythmiques',
    'gilet-defibrillateur-portable',
    'medicaments-insuffisance-cardiaque',
    'iec-ara2-et-arni-sacubitril-valsartan',
    'betabloquants-insuffisance-cardiaque',
    'arm-steroidiens-spironolactone-eplerenone',
    'inhibiteurs-sglt2-insuffisance-cardiaque',
    'angor-et-medicaments-anti-angineux',
    'antiplaquettaires-bitherapie-et-protection-gastrique',
    'escalade-et-resistance-aux-diuretiques',
    'finerenone-et-nouveaux-arm',
    'regles-conduite-automobile',
    'examens-et-chiffres',
    'efx-strain-troponine-et-imagerie-cardiaque',
    'revascularisation-pontage-stents',
    'viabilite-myocardique',
    'these-viabilite-et-survie-revascularisation',
    'vivre-avec-insuffisance-cardiaque',
    'traitements-additionnels-nouveaux',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'tension-arterielle-insuffisance-cardiaque',
    'dysfonction-vg-asymptomatique-stade-b',
    'confirmer-la-cause-dysfonction-vg',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'stenose-aortique-fevg-reduite',
    'diabete-insuffisance-cardiaque',
    'goutte-bpco-thyroide-et-autres-comorbidites',
    'cholesterol-et-prevention-secondaire',
    'occlusion-coronaire-chronique-cto',
    'thrombus-vg-et-anticoagulants',
    'anevrisme-ventricule-gauche',
    'telesurveillance-insuffisance-cardiaque',
    'tableau-preuves-nutrition-complements',
    'musculation-vs-endurance-readaptation-cardiaque',
    'readaptation-cardiaque-et-activite-physique',
    'cellules-souches-et-therapies-regeneratives',
    'insuffisance-cardiaque-avancee-stade-d',
    'ventricule-droit-et-hypertension-pulmonaire',
    'chirurgie-soins-dentaires-et-jours-de-maladie',
    'these-jours-de-maladie-sraa-vs-isglt2',
    'vaccinations-insuffisance-cardiaque',
    'vie-sexuelle-et-dysfonction-erectile-ic',
    'voyages-canicule-et-climat-ic',
    'tabac-et-alcool-insuffisance-cardiaque',
    'soins-de-support-et-anticipation',
    'these-fer-iv-et-isglt2-quadritherapie',
    'these-coq10-mortalite-icfer-moderne',
    'these-omega3-faible-dose-risque-fa',
  ],
  sources: [
    {
      label: 'Recommandations européennes ESC (IC 2026 avec grille A/B1/B2/C et tableaux 4 piliers, Valvulopathies ESC/EACTS 2025, FA et SCC 2024, Cardiomyopathies 2023, Diabète 2023, Endocardite 2023, AV/MSC 2022, NCS 2022, HTP ESC/ERS 2022, Sport 2020)',
      detail: 'Définitions FEVG < 50 %, comparatif détaillé des 4 piliers, stade B, DAI par étiologie, viabilité, diurétiques, anti-angineux, IRM/génétique, RAo/TAVI, diabète Tableau 22, péri-opératoire et IC avancée',
    },
    {
      label: 'Recommandations américaines (AHA/ACC/HFSA 2022 IC, ACC/AHA/SCAI 2021 revascularisation, AHA 2020 viabilité, ACC/AHA 2023 CCD, 2024 NCS, 2025 SCA, US CKM 2026, ADA 2022 & 2026, ISHLT 2023 MCS, Kindel 2024 GLP-1, Princeton IV 2024, AHA 2026 climat)',
      detail: 'Comparaisons transatlantiques des classes, seuils FEVG, ARNI, DAI/CRT, viabilité myocardique, stade B, RAo, diabète, chirurgie non cardiaque, santé sexuelle et comorbidités',
    },
    {
      label: 'Référentiels français, européens et britanniques (HAS oct. 2024 dentaire/EI, HAS 2021–2024, SFCO 2015, GIHP/SFAR 2018, GERS-P/SFC 2023, ANSM 2025–2026, RCP EMA Forxiga/Jardiance/Viagra/Cialis, HCSP/SPF, NICE NG106 2025, TA314, NG148 oct. 2024 Rec 1.2.14, BSG/ESGE 2021, KDIGO 2024)',
      detail: 'Seuils DFGe des iSGLT2 dans les RCP UE, antibioprophylaxie dentaire HAS oct. 2024, règles jours de maladie NICE NG148 verbatim, canicule ANSM, tabac/alcool et réadaptation',
    },
    {
      label: 'Seconde Définition Universelle de l’Insuffisance Cardiaque (AHA/ACC/ESC/WHF, juin 2026) et liste MTI EMA (juin 2026)',
      detail: 'Terminologie internationale sans seuils numériques fixes et statut réglementaire européen des thérapies cellulaires',
    },
  ],
  disclaimerType: 'medical',
};
