import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'these-jours-de-maladie-sraa-vs-isglt2',
  sourceWikiPath: 'wiki/theses/sick-day-rules-raasi-vs-sglt2i-hfref.md',
  titleFr: 'Thèse : règles des « jours de maladie » — bloqueurs du SRAA/ARM contre iSGLT2 dans l’ICFER',
  category: 'traitements',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'thèse',
    'jours-de-maladie',
    'sraa',
    'arm',
    'isglt2',
    'icfer',
    'insuffisance-rénale-aiguë',
    'hyperkaliémie',
    'acidocétose-euglycémique',
    'sadmans',
    'diabète',
  ],
  aliases: [
    'Thèse jours de maladie ICFER',
    'SADMANS insuffisance cardiaque',
    'Pause des médicaments en cas de maladie',
    'Règles des jours de maladie',
    'SRAA vs iSGLT2 jours de maladie',
  ],
  linkedModules: ['core', 'ckd', 'diabetes'],
  plainSummaryFr:
    "Les personnes vivant avec une insuffisance cardiaque reçoivent souvent des messages contradictoires sur les « jours de maladie » (faut-il suspendre certains comprimés lors d'une gastro-entérite ou d'une infection ?). Cette évaluation symétrique aboutit à un verdict nuancé : Partiellement étayée (confiance moyenne). Premièrement, ne suspendez pas vous-même vos traitements cardiaques à l'aide d'une fiche générique trouvée sur internet : le seul essai randomisé d'une carte « jours de maladie » (Fink 2022, patients rénaux) n'a montré aucun bénéfice rénal, une tendance à plus de recours aigus et plus de 50 % d'erreurs d'application — dont l'arrêt de mauvais médicaments. En vie réelle, environ la moitié des IEC/ARA2/ARM arrêtés ne sont jamais repris. Deuxièmement, la gravité compte énormément : un rhume bénin n'a rien à voir avec des vomissements ou diarrhées sévères (où l'insuffisance rénale aiguë hospitalisée bondit d'un facteur 23 à 43), qui justifient un appel précoce à votre médecin pour décider d'une pause brève encadrée avec date de reprise. Troisièmement, les iSGLT2 (dapagliflozine Forxiga, empagliflozine Jardiance) protègent les reins (-23 % d'IRA dans SMART-C), mais les RCP européens imposent leur interruption médicale lors d'une maladie aiguë grave, de pertes digestives, d'un jeûne prolongé ou d'une chirurgie majeure pour prévenir l'acidocétose euglycémique — un risque surtout présent en cas de diabète (en particulier sous insuline), beaucoup plus rare sans diabète mais souvent méconnu aux urgences. En pratique, convenez à froid d'un plan écrit personnalisé avec votre cardiologue.",
  sections: [
    {
      headingFr: 'Thèse évaluée, variables clés et matrice décisionnelle clinique',
      bodyMarkdownFr: `**Affirmation soumise à l'épreuve des preuves :** deux propositions distinctes testées séparément :
- **Volet A :** la mise en pause systématique des bloqueurs du SRAA (IEC, ARA2, ARNI) et des ARM (spironolactone, éplérénone) lors d'une maladie intercurrente mineure fait plus de mal que de bien dans l'ICFER.
- **Volet B :** une mise en pause temporaire des inhibiteurs du SGLT2 (dapagliflozine *Forxiga*, empagliflozine *Jardiance*) lors d'une maladie intercurrente est justifiée.

**Hiérarchie des preuves disponibles (novembre 2026) :** **aucun essai randomisé sur événements cliniques** n'existe ni ne recrute pour tester les règles « jours de maladie » à domicile dans l'ICFER. L'évaluation croise donc le seul essai « jours de maladie » en maladie rénale chronique (**Fink 2022**), les essais périopératoires et hospitaliers aigus (**STOP-or-NOT, SPACE, DARE-19, RECOVERY, ACTIV-4a**), la méta-analyse **SMART-C (90 409 patients)**, de grandes cohortes de vie réelle (**SwedeHF, GWTG-HF, SCREAM, Mansfield**) et la lecture intégrale verbatim des RCP EMA et de **NICE NG148 (octobre 2024)**.

### Matrice clinique : classe médicamenteuse × gravité de l'épisode × diabète

*Cette matrice résume les risques biologiques pesés par les cardiologues et néphrologues pour établir un plan écrit individuel. Elle ne constitue jamais une consigne d'auto-arrêt.*

| Classe | Maladie mineure (rhume, virose modérée, alimentation et hydratation normales) | Maladie déshydratante sévère (vomissements/diarrhées persistants, impossibilité de boire, vertiges/hypotension, sepsis) ou jeûne prolongé | Mécanisme principal et ancrage factuel |
|---|---|---|---|
| **IEC / ARA2 / ARNI** | **Auto-pause systématique NON étayée :** pas de surrisque relatif d'IRA dans les infections respiratoires (Mansfield 2018, p = 0,784), fort taux d'erreurs et de non-reprises | **Pause brève décidée par le médecin envisageable** (NICE NG148 Rec 1.2.14, Clark 2019 si créatinine ≥ +30 % ou K⁺ ≥ 6,0 mmol/L, KDIGO 2024) avec **plan écrit de reprise** dès stabilisation | Dilatation artériolaire efférente en hypovolémie vraie ; mais 44 à 53 % ne sont pas repris à 90 j après un arrêt hospitalier pour IRA |
| **ARM** (spironolactone, éplérénone) | **Auto-pause systématique NON étayée :** 54 % des arrêts dans SwedeHF ne sont jamais repris à 1 an (Landucci 2025) | **Pause encadrée + contrôle kaliémie essentiels** si déshydratation sévère/IRA ou K⁺ ≥ 5,5–6,0 mmol/L (l'arrêt réduit l'hyperkaliémie récidivante de ~25 %, Trevisan 2021), reprise planifiée sous 5,0–5,5 | Risque d'hyperkaliémie grave en IRA oligurique contre fort taux d'abandon durable |
| **iSGLT2 — AVEC diabète (surtout sous insuline)** | **Pas d'arrêt réflexe pour un simple rhume** si alimentation normale, mais surveillance hydratation/symptômes (et cétonémie si lecteur disponible) | **Justification la plus forte d'une pause médicale planifiée** (RCP EMA/FDA §4.4 : maladie grave hospitalisée, pertes digestives, jeûne, chirurgie) ; **mesure des cétones sanguines** quelle que soit la glycémie | Risque spécifique d'**acidocétose euglycémique** (~1 cas/1 000 pa en essais diabète ; 0,36 %/an hospitalisé Chandler 2026 ; 22/27 cas DECLARE sous insuline). **Non** suspendus pour néphrotoxicité (réduisent l'IRA de 23 %) |
| **iSGLT2 — SANS diabète (ICFER non diabétique)** | **Pause systématique pour virose mineure NON justifiée :** risque quasi nul en ECR (1 cas sur ~30 000 patients-années, SMART-C) | **Pause ciblée justifiée lors d'un jeûne prolongé, vomissements/diarrhées sévères ou chirurgie majeure** (RCP EMA *Jardiance* avertit explicitement de cas non diabétiques ; AHA/ACC 2024 arrêt 3 j préopératoire même sans diabète) | Incidence 3,3× plus faible (~0,11 %/an, Chandler 2026), **mais 100 % (4/4) des cas non diabétiques ont été méconnus au diagnostic** et 73–83 % étaient déclenchés par le jeûne/apports réduits |
| **Diurétiques de l'anse** | **Poursuite** selon ordonnance et surveillance du poids quotidien | **Adaptation guidée par l'équipe** selon poids, tension et diurèse (diarrhée profuse + diurétique accélèrent l'hypovolémie ; arrêt injustifié expose à l'OAP) | Équilibre direct entre hypovolémie aiguë et surcharge pulmonaire |
| **Bêtabloquants, antiplaquettaires, anticoagulants, statines** | **JAMAIS des médicaments de pause « jours de maladie »** | **Ne jamais arrêter soi-même** (sauf urgence hospitalière : hémorragie active, choc) | Dans Fink 2022, **21,2 %** des épisodes comportaient un arrêt accidentel de médicaments non concernés |
| **AINS** (ibuprofène, diclofénac, naproxène) | **Toujours à éviter en ICFER (ESC Classe III)** | **Strictement à proscrire :** AINS + SRAA + diurétique (« triple whammy ») majore l'IRA hospitalisée de **+31 % globalement et +82 % dans les 30 premiers jours** (Lapi 2013) | Vasoconstriction afférente cumulée au blocage du SRAA |`,
    },
    {
      headingFr: 'Volet A : bloqueurs du SRAA et ARM lors d’une maladie intercurrente',
      bodyMarkdownFr: `### Arguments en faveur du Volet A (contre l'auto-pause systématique lors d'infections mineures)

1. **Le seul essai randomisé de carte « jours de maladie » (Fink et al., *Kidney Med* 2022, NCT03141905, texte intégral) :** **315 patients** atteints de MRC stades 3–5 (80,6 % sous SRAA, pas d'iSGLT2) randomisés entre carte adaptée du NHS Highland + appels téléphoniques hebdomadaires et soins usuels sur 6 mois :
   - Évolution du DFGe à 6 mois strictement identique (**-0,71 contre -0,72 mL/min/1,73 m²**, **p = 0,99**) ; IRA biologique (≥ 50 % baisse DFGe) identique (**2,9 % vs 2,9 %**) ; IRA hospitalière identique (1 vs 1).
   - Recours aigus (urgences, hospitalisations) numériquement **plus élevés** dans le bras carte (**11,5 vs 8,4 pour 100 patients-mois** ; PR ajusté **1,30**, IC 0,96–1,76).
   - **Taux élevé d'erreurs malgré un accompagnement hebdomadaire :** sur 66 événements consignés, 19 étaient des erreurs de saisie et 14 de fausses alertes pour maladies mineures. Sur les **33 vrais jours de maladie**, seuls **14/33 (42,4 % selon le Tableau 4 ; le texte imprimait à tort 49,2 %)** ont appliqué les consignes sans erreur, **36,4 %** n'ont pas suspendu les bons médicaments et **21,2 % (7/33) ont arrêté des médicaments non concernés** — un risque majeur en ICFER sous bêtabloquant ou antithrombotique. Surtout, **100 % (35/35)** des patients ayant commis une erreur se disaient pourtant confiants dans leur usage de la carte.
2. **Revues systématiques et biomarqueurs :** **Whiting 2017** (*BMJ Open*) n'a trouvé **aucune étude communautaire** ; sur 6 études hospitalières (chirurgie/angiographie), la baisse de créatinine lors d'une pause ne s'accompagnait d'**aucune différence sur les biomarqueurs de lésion tubulaire** (IL-18, KIM-1, L-FABP, NGAL chez 1 017 patients, Coca et al.). **Watson 2022** (74 documents, 2 dédiés IC) a confirmé l'absence d'essai clinique et de graves écueils d'usage (Doerfler 2019 : **1 seul patient** sans erreur en simulation ; Vicary 2020 : **45 %** gardaient la fiche à 12 mois).
3. **Infections communautaires (Mansfield 2016/2018, Royaume-Uni, > 570 000 patients) :** les utilisateurs d'IEC/ARA2 n'avaient **aucun surcroît relatif d'IRA** lors d'une infection respiratoire basse (**IRR 5,95 vs 6,33**, p d'interaction = **0,784**) ni lors d'une gastro-entérite (**p = 0,879**), et aucun excès d'IRA en insuffisance cardiaque sous diurétique de l'anse (**RR 0,98**).
4. **Essais périopératoires (STOP-or-NOT, SPACE, POISE-3) :** poursuivre les IEC/ARA2 sous stress chirurgical n'a pas augmenté l'IRA (**11 % vs 11 %** dans STOP-or-NOT), tandis que les arrêter a doublé l'hypertension sévère dans SPACE (**12,4 % vs 5,3 %**).
5. **Épidémie de non-reprise en vie réelle :** dans **SwedeHF (Landucci 2025, 11 474 ICFER)**, **54 %** des patients ayant arrêté un ARM ne l'avaient toujours pas repris à 1 an ; après IRA hospitalière, **43,6 %** (Janse 2022) et **45 % en Angleterre / 53 % en Suède** (Bidulka 2020) n'avaient pas repris leur bloqueur du SRAA à 90 jours. Ces arrêts prolongés s'associent à une mortalité et des réhospitalisations accrues (**GWTG-HF Gilstrap 2017** décès J30 **8,8 % vs 3,5 %**, aHR 1,92 ; **Janse 2022** aHR 1,13 sans baisse des récidives d'IRA aHR 0,94 ; **Xu 2022** mortalité à 3 ans HR 1,49), en accord avec le risque de rechute de 44 % après sevrage dans **TRED-HF**.

### Contre-arguments et limites du Volet A

- **Une gastro-entérite sévère est une véritable urgence rénale :** dans **Mansfield 2018**, le risque d'IRA hospitalisée dans les 7 jours suivant une gastro-entérite a été multiplié par **43,4** globalement et par **23,4 dans l'insuffisance cardiaque** (bien plus qu'une infection respiratoire, ×5,2).
- **Protection réelle contre l'hyperkaliémie :** suspendre SRAA ou ARM réduit les récidives d'hyperkaliémie de **21 à 25 %** dans trois grandes cohortes scandinaves (Janse aHR 0,79 ; Trevisan HR 0,75 ; Xu HR 0,76).
- **Correction factuelle majeure issue de l'audit verbatim (NICE NG148, mis à jour le 16 octobre 2024) :** contrairement à certains résumés secondaires, **NICE NG148 conserve bien la recommandation clinicienne 1.2.14 [2013]** invitant les soignants à envisager une pause temporaire des IEC/ARA2 en cas de diarrhée, vomissements ou sepsis jusqu'à stabilisation (tout en limitant la pause pour produit de contraste au DFGe < 30 en 1.2.9 et sans cautionner les cartes d'auto-arrêt patient en 1.6.4). **Clark 2019** retient également la pause médicale encadrée si créatinine ≥ +30 %, K⁺ ≥ 6,0 mmol/L, sepsis ou hypotension symptomatique.
- **Limites méthodologiques :** Fink 2022 était sous-dimensionné (315/600 prévus) et les cohortes observationnelles mesurent des arrêts prolongés (souvent chez des patients fragiles, la cohorte suédoise de Bidulka étant d'ailleurs neutre à HR 0,94) plutôt qu'une pause supervisée de 48 heures avec reprise garantie.

**Mini-verdict Volet A :** **Étayé (confiance modérée)** contre les cartes génériques d'auto-pause lors d'infections mineures ; **NON étayé** pour s'opposer à une pause brève décidée par le médecin lors d'une gastro-entérite déshydratante sévère, d'un sepsis, d'une hypotension symptomatique ou d'une IRA/hyperkaliémie avérée avec reprise planifiée.`,
    },
    {
      headingFr: 'Volet B : inhibiteurs du SGLT2 — la ligne de partage diabète / non-diabète',
      bodyMarkdownFr: `### Arguments en faveur du Volet B (justification ciblée de l'interruption temporaire)

1. **Un risque biologique spécifique (acidocétose euglycémique) et des RCP européens contraignants :** lors d'un jeûne, de vomissements/diarrhées, d'une infection sévère ou d'une chirurgie, la baisse d'insuline et la hausse du glucagon/cortisol couplées à la glycosurie induite par l'iSGLT2 peuvent déclencher une acidose métabolique grave malgré une glycémie normale ou basse. Les **RCP EMA officiels** de ***Forxiga* (dapagliflozine, nov. 2025, §4.4)** et ***Jardiance* (empagliflozine, janv. 2026, §4.4)** stipulent verbatim que *« le traitement doit être interrompu chez les patients hospitalisés pour des interventions chirurgicales majeures ou des maladies médicales aiguës graves »* (avec surveillance de la **cétonémie sanguine** plutôt qu'urinaire), conseillent une interruption temporaire en cas de **pertes digestives / déplétion volémique** ou d'infection urinaire compliquée, et **le RCP *Jardiance* précise explicitement que des cas surviennent aussi chez les patients sans diabète**.
2. **Dans le diabète :** la méta-analyse **SMART-C (*The Lancet* 2022, 13 ECR, n = 90 409)** montre un doublement du risque d'acidocétose chez les **74 804 diabétiques** (**RR 2,12**, IC 1,49–3,04 ; ~**1 cas supplémentaire pour 1 000 patients-années**, dont 22/27 cas de DECLARE sous insuline).
3. **Cas non diabétiques et à glycémie basse en vie réelle :**
   - **Chandler et al. (*Endocr Pract* nov. 2026 ; 249 517 hospitalisations dans 28 hôpitaux US, résumé) :** incidence annuelle d'acidocétose euglycémique hospitalisée estimée à **0,36 %** chez les diabétiques contre **0,11 %** chez les non-diabétiques (55 vs 4 cas), mais **100 % (4/4) des cas non diabétiques n'ont pas été reconnus cliniquement à l'admission** contre 55 % chez les diabétiques (**p = 0,045**).
   - **Itagaki & Endo (*J Clin Med* oct. 2026 ; 15 cas à glycémie < 100 mg/dL, GRADE très faible) :** **40 %** sans diabète, **40 %** traités pour insuffisance cardiaque, glycémie médiane **68 mg/dL**, acidose sévère (pH médian **7,17**, bêta-hydroxybutyrate **5,0 mmol/L**), **73,3 %** déclenchés par le jeûne ou une baisse des apports, **53,3 %** hospitalisés en réanimation, 1 décès. **Garg 2025** retrouve **5 cas sur 6 (83 %)** d'ICFER non diabétique précipités par une baisse des apports alimentaires.
4. **Faible coût hémodynamique d'une pause brève :** contrairement aux bêtabloquants ou aux bloqueurs du SRAA, une pause médicale de 2 à 4 jours entraîne peu de rebond tensionnel ou rythmique si la reprise est assurée.

### Contre-arguments et limites du Volet B

1. **Les iSGLT2 PROTÈGENT les reins :** dans **SMART-C (90 409 patients)**, ils **réduisent l'insuffisance rénale aiguë de 23 %** (**RR 0,77**, IC 0,70–0,84), aussi bien avec diabète (**RR 0,79**) que sans diabète (**RR 0,66**). Les présenter sur des cartes génériques comme « toxiques pour le rein » est biologiquement erroné.
2. **Gradient massif de risque absolu selon le diabète :** parmi les **15 605 participants non diabétiques** de SMART-C (~30 000 patients-années sous iSGLT2), on n'a compté **qu'un seul événement d'acidocétose** (~0,03/1 000 pa). Dans **DAPA-HF**, les 3 cas survenus sur 2 368 patients concernaient tous des diabétiques (0 sans diabète), et **EMPEROR-Reduced** a enregistré **0 cas** dans les deux groupes.
3. **Trois grands ECR en infection respiratoire aiguë hospitalisée (DARE-19, RECOVERY, ACTIV-4a ; n = 6 096) :** sous surveillance hospitalière rapprochée, l'acidocétose est restée rare (**7/3 013 [0,23 %] contre 2/3 062 [0,07 %]**) sans aucun excès d'IRA — bien que **DARE-19 (Abdel Jawad 2025)** ait montré plus de cétonémie biologique ≥ 1,0 mmol/L chez les diabétiques (**2,6 % vs 0,6 %**) comme chez les non-diabétiques (**0,98 % vs 0 %**). Ces trois essais ont porté sur des pneumonies virales surveillées à l'hôpital et non sur des gastro-entérites isolées à domicile.
4. **Risque de non-reprise :** un registre danois cite **56 %** d'arrêts d'iSGLT2 à 5 ans, dont un tiers autour d'une hospitalisation ; une tribune d'experts (Khunti 2022, avec forts liens industriels) met en garde contre des arrêts inutiles lors de rhumes bénins.

**Mini-verdict Volet B :** **Étayé sous conditions (confiance modérée)** — **fortement justifié** en cas de diabète (surtout sous insuline) lors de maladie grave, vomissements/diarrhées, jeûne prolongé ou chirurgie majeure ; **non justifié** pour un simple rhume sans diabète, mais **prudent et conforme aux RCP** lors d'un vrai jeûne, de pertes digestives sévères ou d'une opération majeure en raison de la méconnaissance diagnostique quasi constante à glycémie normale.`,
    },
    {
      headingFr: 'Comparatif réglementaire, audit d’intégrité et essais en cours',
      bodyMarkdownFr: `### Où les recommandations s'accordent et où elles divergent (au 25 novembre 2026)

- **Accords :** ne jamais suspendre soi-même bêtabloquants, antiplaquettaires, anticoagulants ou statines ; éviter strictement les AINS dans l'ICFER ; associer toute pause médicale de SRAA/ARM à un plan de reprise écrit ; interrompre médicalement les iSGLT2 pour une chirurgie majeure, un jeûne prolongé ou une hospitalisation aiguë grave et doser la **cétonémie sanguine** en cas de signes évocateurs.
- **Divergences :** diffusion de cartes patient génériques SADMANS (Diabète Canada, tempérées en cardiologie canadienne) contre refus des cartes génériques par les sociétés d'IC et de néphrologie britanniques (Clark 2019, Think Kidneys, ESC 2026, NICE NG106) ; poursuite périopératoire des IEC/ARA2 en ICFER (AHA/ACC 2024) contre prudence 48–72 h en MRC (KDIGO 2024).

### Qualité méthodologique et angles morts

- **Angles morts :** aucun essai « jours de maladie » n'a isolé le **sacubitril/valsartan (*Entresto*)** ; les **diurétiques de l'anse** exigent un pilotage individuel (poids quotidien, tension debout, diurèse).
- **Intégrité des essais :** Fink 2022 (financement public NIDDK, pas de conflit d'intérêts) reste solide sur les erreurs d'usage mais sous-dimensionné pour l'IRA ; DARE-19 (financement AstraZeneca, critère principal modifié en cours d'essai, formellement neutre) et RECOVERY/ACTIV-4a (arrêtés pour futilité) ne réfutent pas les précautions à domicile en cas de gastro-entérite ou de jeûne ; les séries de cas (Itagaki 2026, Garg 2025) valent comme signaux de vigilance clinique et non comme estimations d'incidence.
- **Essais en préparation (ClinicalTrials.gov, novembre 2026) :** aucun ne tranchera les événements cliniques à domicile dans l'ICFER — **PAUSE** (Canada, NCT06433414, 320 patients, faisabilité/simulation sur application en pharmacie, 2027) et **DISCO** (**CHU de Toulouse, France**, NCT07766109, 434 patients avec FEVG < 50 %, comparant poursuite d'iSGLT2 en chirurgie cardiaque avec contrôle de la cétonémie capillaire contre pause de 3 jours, 2026–2029).`,
    },
    {
      headingFr: 'Verdict intégré et conduite pratique',
      bodyMarkdownFr: `- **Verdict global :** **Partiellement étayée** (**confiance moyenne**).
- **Pourquoi ce verdict est nuancé :** les fiches génériques d'auto-arrêt « taille unique » échouent dans les deux sens — elles exposent à arrêter à tort des traitements vitaux lors de viroses bénignes tout en ne renseignant pas sur les signes d'acidocétose à glycémie normale sous iSGLT2.
- **Ce qui ferait évoluer ce verdict :** un grand essai pragmatique dans l'ICFER comparant un protocole encadré avec reprise automatisée à 48 h aux soins usuels ; des registres prospectifs de gastro-entérites chez les patients ICFER non diabétiques sous iSGLT2 ; les résultats de l'essai français **DISCO**.
- **Traduction concrète pour vous :** demandez à votre cardiologue, pendant une période stable, un **plan écrit personnalisé d'une page** indiquant quels médicaments poursuivre en toutes circonstances, dans quels cas précis appeler rapidement votre médecin traitant / infirmière IC (ou IPA) / cardiologue, et à quelle date reprendre tout traitement éventuellement suspendu par un médecin. En cas de symptômes graves (douleur thoracique, essoufflement majeur, malaise, confusion ou vomissements/douleurs abdominales/respiration rapide sous iSGLT2), appelez le **15 (SAMU)**, le **112** ou le **114 (SMS)**.`,
    },
  ],
  relatedArticleSlugs: [
    'chirurgie-soins-dentaires-et-jours-de-maladie',
    'maladie-renale-insuffisance-cardiaque',
    'diabete-insuffisance-cardiaque',
    'medicaments-effets-secondaires-suivi',
    'insuffisance-cardiaque-fevg-amelioree',
    'escalade-et-resistance-aux-diuretiques',
    'questions-equipe-cardiologie',
    'recommandations-comparees-esc-us-nice',
    'essais-cliniques-cles',
    'essais-cliniques-en-cours-et-a-suivre',
    'vivre-avec-insuffisance-cardiaque',
  ],
  sources: [
    {
      label: 'Fink et al. (Kidney Med, 2022, NCT03141905), Whiting et al. (BMJ Open, 2017) et Watson et al. (2022/2023) — textes intégraux',
      detail: 'Seul essai randomisé de protocole « jours de maladie » (315 patients MRC), taux d’erreurs patients (42,4 % corrects, 21,2 % mauvais médicaments), biomarqueurs tubulaires (Coca) et audit de 74 documents.',
    },
    {
      label: 'Mansfield et al. (2016, 2018), Lapi et al. (2013) et cohortes d’arrêt ICFER/post-IRA : SwedeHF Landucci (2025), GWTG-HF Gilstrap (2017), Janse (2022), Bidulka (2020), Trevisan (2021), Xu (2022)',
      detail: 'Pic d’IRA ×23 à ×43 en gastro-entérite vs neutralité en infection respiratoire, « triple whammy » AINS (+82 % à 30 j), taux de non-reprise (44–54 %) et baisse d’hyperkaliémie (21–25 %).',
    },
    {
      label: 'SMART-C (The Lancet, 2022, n = 90 409), DAPA-HF, EMPEROR-Reduced, DARE-19 (2021 + Abdel Jawad 2025), RECOVERY (2023) et ACTIV-4a (2024)',
      detail: 'Protection rénale (-23 % d’IRA), gradient majeur d’acidocétose diabétique vs non diabétique (1 cas / ~30 000 pa) et tolérance en pneumonie hospitalisée.',
    },
    {
      label: 'Acidocétose euglycémique non diabétique / à glycémie basse : Chandler et al. (Endocr Pract, nov. 2026), Itagaki & Endo (JCM, oct. 2026) et Garg et al. (JGIM, 2025)',
      detail: 'Incidence hospitalisée 0,36 % vs 0,11 %/an, 100 % de méconnaissance clinique initiale sans diabète et rôle déclencheur du jeûne/apports réduits.',
    },
    {
      label: 'Textes réglementaires et recommandations : RCP EMA Forxiga (nov. 2025) & Jardiance (janv. 2026), NICE NG148 (mis à jour oct. 2024), Clark (2019), KDIGO 2024, STOP-or-NOT/SPACE et ClinicalTrials.gov (PAUSE, DISCO)',
      detail: 'Vérification verbatim des obligations EMA §4.4, maintien de NICE NG148 Rec 1.2.14, essais périopératoires et essai français DISCO (CHU Toulouse).',
    },
  ],
  disclaimerType: 'medical',
};
