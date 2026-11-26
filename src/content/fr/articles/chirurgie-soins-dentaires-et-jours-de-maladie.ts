import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'chirurgie-soins-dentaires-et-jours-de-maladie',
  sourceWikiPath: 'wiki/concepts/surgery-dental-and-sick-day-rules.md',
  titleFr: 'Chirurgie, soins dentaires et règles des « jours de maladie »',
  category: 'traitements',
  readingTier: 'essential',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'périopératoire',
    'chirurgie-non-cardiaque',
    'anesthésie',
    'endoscopie',
    'soins-dentaires',
    'antibioprophylaxie-endocardite',
    'jours-de-maladie',
    'isglt2',
    'sraa',
    'glp-1',
    'antiplaquettaires',
    'aod',
    'dai-crt',
    'compléments',
    'france',
  ],
  aliases: [
    'Soins périopératoires',
    'Chirurgie et anesthésie',
    'Soins dentaires et antibiotiques',
    'Prophylaxie endocardite',
    'Règles des jours de maladie',
    'SADMANS',
    'Médicaments avant opération',
    'Coloscopie et anticoagulants',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Une opération programmée, une coloscopie, un soin dentaire ou une gastro-entérite se préparent sereinement avec vos médecins. Ne suspendez jamais vos médicaments cardiaques, antiplaquettaires ou anticoagulants de votre propre initiative, car chaque classe suit des règles propres. Prévenez toujours anesthésiste, chirurgien et dentiste de tous vos traitements, et demandez un plan écrit pour les jours de maladie.",
  keyTakeawaysFr: [
    "N'interrompez jamais seul vos médicaments avant une opération, un soin dentaire ou en cas de gastro-entérite : suivez les consignes écrites de vos médecins.",
    "Avant une chirurgie, les bêtabloquants sont habituellement poursuivis, tandis que les iSGLT2 sont généralement suspendus 3 à 4 jours avant par l'anesthésiste.",
    "Une insuffisance cardiaque, des stents ou un DAI/CRT ne nécessitent pas d'antibiotiques de routine avant le dentiste, ni d'arrêter l'aspirine.",
    "Apportez votre carte de porteur de DAI/CRT et tous vos compléments ou plantes à la consultation d'anesthésie au moins 2 semaines avant l'intervention.",
    "Préparez à froid avec votre cardiologue un plan écrit « jours de maladie » ; appelez le 15 (SAMU), 112 ou 114 en cas de malaise, douleur thoracique ou essoufflement sévère.",
  ],
  sections: [
    {
      headingFr: 'Préparer une chirurgie ou une coloscopie',
      depth: 'patient',
      bodyMarkdownFr: `Vivre avec une insuffisance cardiaque nécessite d'anticiper calmement toute opération programmée (hanche, hernie, cataracte...) ou endoscopie digestive. Une préparation coordonnée entre votre cardiologue, votre anesthésiste et votre chirurgien réduit nettement les complications évitables.

### Avant l'intervention : délais et bilans

- **Stabilisation préalable :** si votre insuffisance cardiaque est décompensée ou si vous avez eu un infarctus ou un trouble du rythme instable récent, une chirurgie non urgente est différée le temps de vous stabiliser (habituellement au moins 60 jours après un infarctus, et plusieurs mois après la pose d'un stent actif selon l'urgence).
- **Examens utiles :** une nouvelle échographie cardiaque n'est pas répétée systématiquement si vous êtes stable ; elle est surtout demandée en cas de symptômes nouveaux ou d'aggravation. Avant une chirurgie lourde, l'équipe peut doser des marqueurs cardiaques (BNP/NT-proBNP ou troponine).
- **Coloscopie et fibroscopie :** l'aspirine est poursuivie dans la quasi-totalité des cas. Pour les anticoagulants ou une bithérapie antiplaquettaire après stent, la conduite dépend du risque de saignement du geste (simple examen ou retrait de polype) et est toujours organisée à l'avance entre gastro-entérologue et cardiologue.

### Vos médicaments autour d'une opération (repères pour la consultation d'anesthésie)

**Appliquez toujours exclusivement les consignes écrites remises par votre anesthésiste, votre chirurgien et votre cardiologue.**

| Famille de médicaments | Conduite habituelle avant une chirurgie | Pourquoi |
|---|---|---|
| **Bêtabloquants** (bisoprolol *Cardensiel*, carvédilol *Kredex*, nébivolol *Temerit*, métoprolol *Selozok*) | **Poursuivis** sans interruption, y compris le matin | Évite une accélération brutale du cœur ou une poussée d'ischémie |
| **IEC / ARA2** (ramipril *Triatec*, périndopril *Coversyl*, candésartan *Atacand*, valsartan *Tareg*) | **Souvent poursuivis** dans l'ICFER stable (pause parfois discutée au cas par cas, avec date de reprise écrite) | Arrêter sans nécessité ne réduit pas les complications et expose à un oubli de reprise |
| **ARNI** (sacubitril/valsartan *Entresto*) | **Décision au cas par cas** entre anesthésiste et cardiologue | Risque de baisse de tension plus marquée sous anesthésie |
| **iSGLT2** (dapagliflozine *Forxiga*, empagliflozine *Jardiance*) | **Suspension médicale 3 à 4 jours avant** une chirurgie majeure programmée, **même sans diabète** | Prévient une complication rare mais sérieuse liée au jeûne et au stress opératoire (acidocétose euglycémique) |
| **ARM et diurétiques** (spironolactone *Aldactone*, éplérénone *Inspra*, furosémide *Lasilix*) | **Adaptés au cas par cas** (souvent omis le matin en cas de jeûne) | Évite la déshydratation pendant l'intervention tout en prévenant la rétention d'eau ensuite |
| **Injections GLP-1** (*Ozempic*, *Wegovy*, *Mounjaro*) | **À signaler impérativement :** maintien possible si stable, parfois diète liquide 24 h ou pause selon l'hôpital | Ralentissent la vidange de l'estomac sous anesthésie |
| **Metformine** | Généralement suspendue avant chirurgie majeure, jeûne prolongé ou produit iodé | Prévient une complication rénale et métabolique rare |
| **Statines et clonidine** | **Poursuivies** | Protègent les artères ; l'arrêt brutal de clonidine provoque un rebond de tension |
| **Antiplaquettaires et anticoagulants (AOD, AVK)** | **Plan strictement coordonné** (aspirine maintenue si stent dès que possible ; pause brève calibrée des AOD **sans relais héparine systématique**) | Protège contre la thrombose de stent ou l'AVC sans majorer inutilement le risque de saignement |

### Si vous portez un DAI ou une CRT

- Apportez votre **carte de porteur** à la consultation d'anesthésie et vérifiez que le dernier contrôle du boîtier date de moins de **6 mois** (ou 12 mois pour un pacemaker).
- Pour une opération **au-dessus du nombril** avec bistouri électrique, l'équipe prévoit une sécurisation du boîtier (reprogrammation temporaire ou aimant médical) et un contrôle après l'intervention. Si vous êtes dépendant de la stimulation ou d'une CRT, une reprogrammation formelle est préférée à un simple aimant. Voir *Dispositifs cardiaques implantés : DAI et CRT*.`,
    },
    {
      headingFr: 'Soins dentaires : antibiotiques, saignements et anesthésie locale',
      depth: 'patient',
      bodyMarkdownFr: `Deux idées reçues méritent d'être clarifiées : la majorité des patients cardiaques n'ont pas besoin d'antibiotiques avant le dentiste, et les traitements fluidifiant le sang ne sont presque jamais arrêtés pour des soins courants.

### Faut-il un antibiotique avant le dentiste ?

- **Non, pas en routine** si vous avez uniquement une insuffisance cardiaque ischémique, des stents coronaires, un pacemaker, un DAI ou une CRT. En France (recommandations HAS d'octobre 2024), une bonne hygiène bucco-dentaire et un bain de bouche antiseptique d'une minute (chlorhexidine) avant le soin suffisent.
- **Oui, uniquement en cas de situation à haut risque d'endocardite associée :**
  - antécédent d'endocardite infectieuse ;
  - prothèse valvulaire cardiaque (chirurgicale ou TAVI) ou matériel prothétique de réparation valvulaire (anneau) ;
  - clip valvulaire percutané (*MitraClip* / *TriClip*) ;
  - assistance circulatoire (LVAD) ou certaines malformations cardiaques congénitales complexes.
- **Quel antibiotique si nécessaire ?** Le schéma habituel est l'**amoxicilline 2 g** par voie orale 30 à 60 minutes avant le geste. La clindamycine n'est plus utilisée. En cas d'allergie à la pénicilline, l'**azithromycine** est contre-indiquée ou à éviter si vous prenez un médicament allongeant le QT comme l'**amiodarone (*Cordarone*)**, le sotalol, le citalopram (*Seropram*) ou l'escitalopram (*Seroplex*) : dentiste et cardiologue choisissent alors une autre alternative.

### Antithrombotiques, douleur et matériel dentaire

- **Ne stoppez pas seul votre aspirine, clopidogrel ou anticoagulant :** l'aspirine ou le clopidogrel seuls sont poursuivis pour toute chirurgie orale. Une bithérapie ou un anticoagulant (AOD, AVK) est habituellement poursuivi pour un détartrage ou une extraction simple, grâce à des mesures locales contre le saignement (sutures, compresses d'acide tranexamique). Pour une chirurgie orale étendue, dentiste et cardiologue se concertent.
- **Contre la douleur dentaire :** privilégiez le **paracétamol** et évitez les anti-inflammatoires (ibuprofène, kétoprofène, diclofénac).
- **Anesthésie locale :** une anesthésie locale efficace (y compris avec faible dose d'adrénaline) est sûre lorsque votre état cardiaque est stable, et préférable à la douleur qui libère bien plus d'adrénaline naturelle.
- **Appareils dentaires et DAI/CRT :** fraises, radios et détartreurs piézoélectriques sont sûrs ; seuls les anciens détartreurs magnétostrictifs doivent rester à au moins 15 cm du boîtier. Après un infarctus récent, les soins dentaires non urgents sont différés de 4 à 6 semaines.`,
    },
    {
      headingFr: 'Règles des « jours de maladie » : pourquoi un plan écrit personnalisé',
      depth: 'patient',
      bodyMarkdownFr: `En cas de gastro-entérite (vomissements, diarrhée), de forte fièvre ou d'impossibilité de boire normalement, certains sites proposent des cartes génériques d'arrêt automatique des médicaments. Dans l'insuffisance cardiaque, ces règles automatiques posent problème car elles conduisent parfois à arrêter un médicament protecteur pour un simple rhume ou à oublier de le reprendre.

| Classe de médicaments | Risque en cas de déshydratation sévère | Conduite pratique à préparer avec votre équipe |
|---|---|---|
| **iSGLT2** (dapagliflozine *Forxiga*, empagliflozine *Jardiance*) | Risque rare d'**acidocétose euglycémique** (surtout si diabète ou jeûne prolongé) | Demandez à votre cardiologue si une pause encadrée en cas de gastro-entérite sévère doit figurer dans votre plan écrit. Ne pas arrêter pour un simple rhume |
| **Metformine** | Risque rare d'acidose lactique en cas de déshydratation aiguë | Vérifiez avec votre médecin ou diabétologue quand la suspendre et la reprendre |
| **IEC / ARA2 / ARNI / ARM** | Baisse de tension ou baisse passagère de la fonction rénale | **Ne les arrêtez pas seul.** Appelez tôt votre médecin traitant, infirmière IC/IPA ou cardiologue si vomissements/diarrhées > 24 à 48 h ou vertiges |
| **Diurétiques de l'anse** (furosémide *Lasilix*, bumétanide *Burinex*) | Risque de déshydratation si pertes importantes, ou de rétention d'eau si arrêt injustifié | Ajustement guidé par votre **poids quotidien**, votre tension et votre plan écrit |
| **Injections GLP-1** (*Ozempic*, *Wegovy*, *Mounjaro*) | Troubles digestifs pouvant majorer la déshydratation | Hydratation si tolérée ; contact médical rapide si intolérance persistante |
| **Bêtabloquants, antiplaquettaires, anticoagulants, statines** | **Ne sont jamais des médicaments de pause « jours de maladie »** | **À poursuivre**, sauf consigne médicale d'urgence (hémorragie active, choc) |

### Trois réflexes concrets à préparer à froid

1. **Demandez un plan écrit d'une page à votre cardiologue** lorsque vous allez bien : médicaments à ne jamais suspendre, médicaments nécessitant un appel ou une pause encadrée, et modalités de reprise (souvent 24 à 48 h après retour d'une alimentation normale).
2. **Appelez tôt votre médecin traitant, votre infirmière IC/IPA ou votre cardiologue** si des vomissements ou diarrhées dépassent **24 à 48 heures**, si vous ne gardez plus les liquides, si votre poids ou votre tension chute, si vous avez des vertiges au lever ou si vos urines deviennent très rares.
3. **Appelez immédiatement le 15 (SAMU), le 112 ou le 114 (SMS)** en cas de douleur thoracique, d'essoufflement sévère, de malaise, de confusion, ou de signes d'acidocétose sous iSGLT2 (nausées, vomissements, douleurs abdominales, fatigue inhabituelle ou respiration rapide et profonde, **même si la glycémie paraît normale**).

Pour l'analyse détaillée, voir *Thèse : règles des « jours de maladie » — bloqueurs du SRAA/ARM contre iSGLT2 dans l'ICFER*.`,
    },
    {
      headingFr: 'Plantes et compléments alimentaires avant une opération',
      depth: 'patient',
      bodyMarkdownFr: `De nombreuses personnes oublient de mentionner leurs compléments ou plantes avant une chirurgie. Apportez **tous vos flacons, gélules, tisanes et produits sans ordonnance** à votre consultation d'anesthésie au moins 2 semaines avant l'intervention.

| Produit / complément | Conduite habituelle avant chirurgie | Raison principale |
|---|---|---|
| **Ginkgo biloba** | Pause préopératoire (3–4 jours à 2 semaines selon l'équipe) | Risque de saignement accru avec aspirine ou anticoagulants |
| **Ail en gélules / extraits concentrés** | Pause préopératoire (7 à 14 jours) ; *l'ail culinaire dans les plats ne pose pas de problème* | Effet antiplaquettaire |
| **Millepertuis** (*Hypericum perforatum*) | **À éviter** (arrêt au moins 14 jours avant) | Diminue l'efficacité des anticoagulants (AOD), de la digoxine, des statines et de certains anesthésiques |
| **Ginseng, gingembre ou curcuma à forte dose, danshen** | Pause de 1 à 2 semaines (danshen à éviter sous anticoagulants) | Interactions avec les plaquettes, les AVK, la tension ou la glycémie |
| **Vitamine E à forte dose (> 400 UI/j)** | **À éviter** / arrêter avant chirurgie | Effet antiplaquettaire et signal défavorable en insuffisance cardiaque |
| **Huiles de poisson / oméga-3** | **À discuter avec l'anesthésiste** *(ne pas interrompre l'icosapent éthyl sur ordonnance sans avis cardiologique)* | Certains centres demandent une pause de 7 à 14 jours pour les compléments en vente libre |
| **Réglisse et substituts de sel au potassium** | **À éviter** | Déséquilibres du potassium et de la tension artérielle |
| **AINS sans ordonnance** (ibuprofène, diclofénac, naproxène) | **À éviter** | Rétention d'eau, risque rénal et saignements |
| **Mélanges multi-plantes inconnus** (« cœur », « détox », « articulations ») | **À éviter jusqu'à vérification** | Composition non standardisée : à faire vérifier au moins 2 semaines avant l'opération |`,
    },
    {
      headingFr: 'Données cliniques et recommandations périopératoires et dentaires',
      depth: 'evidence',
      bodyMarkdownFr: `### Risque opératoire, délais post-stent et anesthésie (ESC 2022, AHA/ACC 2024, Abdin 2025)

- **Surrisque périopératoire en IC :** revue citée par un consensus européen : environ **+63 %** de mortalité opératoire et **+51 %** de réadmission à 30 jours.
- **Niveaux de risque chirurgical :** ESC 2022 distingue faible (< 1 % : cataracte, dentaire, sein), intermédiaire (1–5 % : hanche, rachis, urologie/gynécologie majeure) et élevé (> 5 % : vasculaire ou abdominale majeure) ; AHA/ACC 2024 simplifie en faible (< 1 %) vs élevé (≥ 1 %).
- **Biomarqueurs et effort :** incapacité à monter deux étages (< 4 METs) avant chirurgie à risque élevé -> BNP/NT-proBNP préopératoire (AHA/ACC 2024 : repères bas BNP < 92 ng/L ou NT-proBNP < 200–300 ng/L) ou troponine hypersensible (ESC 2022) + troponine postopératoire pour dépister une MINS.
- **Délais post-infarctus / post-stent (chirurgie programmée) :** SCA/infarctus **≥ 60 jours** ; ballon sans stent **≥ 14 jours** ; BMS **≥ 30 jours** ; DES en SCC stable **≥ 6 mois** (chirurgie urgente/oncologique : **≥ 3 mois** AHA/ACC 2024 vs **≥ 1 mois** ESC 2022 après concertation) ; DES après SCA ou angioplastie complexe (tronc commun, bifurcation, CTO, stents longs) : jusqu'à **12 mois**. L'ESC 2022 cite explicitement **FEVG < 40 %** comme facteur de haut risque de thrombose de stent périopératoire.
- **Anesthésie (Abdin 2025) :** maintien PAM ≥ 60–65 mmHg ou PAS ≥ 90 mmHg ; gaz halogénés modernes (isoflurane, sévoflurane, desflurane) privilégiés, propofol sous surveillance tensionnelle étroite, étomidate en dose unique, prudence dexmédétomidine, **kétamine inadaptée** en maladie coronaire, arythmie ou IC sévère.
- **Endoscopie (BSG / ESGE 2021) :** faible risque (diagnostique ± biopsie) : poursuivre DAPT et AVK (INR < 7 j dans la cible), omettre la prise du matin d'AOD. Haut risque (polypectomie, résection muqueuse, CPRE avec sphinctérotomie) : poursuivre aspirine, concertation pour pause P2Y12 (7 j, reprise 2–3 j) ; AOD dernière prise **3 jours avant** (**5 jours** pour dabigatran si DFGe 30–50 mL/min) sans relais héparine, reprise à 2–3 j.

### Essais périopératoires SRAA, anticoagulants et GLP-1

- **IEC / ARA2 :** **STOP-or-NOT** (*JAMA* 2024, **2 222 patients**, 40 hôpitaux français) et **SPACE** (*EHJ* 2024) : arrêter n'a réduit ni les complications (**22 % vs 22 %**) ni l'IRA (**11 % vs 11 %**), tandis que l'arrêt doublait l'HTA sévère dans SPACE (**12,4 % vs 5,3 %**). **POISE-3** (**7 490 patients**, IC exclue) : **13,9 % vs 14,0 %**. *Limites :* IC chronique ≤ **6 %** dans STOP-or-NOT (FEVG médiane 55–57 %) et **< 10 %** dans SPACE ; **zéro ECR pour l'ARNI**. Cohortes US Veterans Affairs (~250 000 opérés) : **25 à 33 %** des IEC/ARA2 arrêtés non repris rapidement, associés à une surmortalité à 30 jours (**HR 3,44** pour les IEC).
- **Antithrombotiques :** pause P2Y12 si validée : prasugrel **7 j**, clopidogrel **5 j**, ticagrélor **3 j** (AHA/ACC) / **5 j** (GIHP-SFAR 2018). Relais héparine sur AOD : triple les saignements majeurs sans prévenir les AVC (**RE-LY** : **6,5 % vs 1,8 %** ; protocole **PAUSE**). AVK : cible INR < 1,5, pas de relais systématique en FA non valvulaire (**BRIDGE**).
- **iSGLT2 :** pause 3 j (dapa/empa/cana), 4 j (ertugliflozine), 48–72 h (KDIGO). **GLP-1 :** alertes **EMA PRAC (juil. 2024)** et **FDA (nov. 2024)** sur l'inhalation gastrique ; consensus 5 sociétés (oct. 2024) stratifié (vs pause 1 semaine ASA 2023).

### Soins dentaires : recommandations HAS octobre 2024, ESC 2023, AHA 2021 et SFCO 2015

- **Antibioprophylaxie :** non recommandée pour ICFER isolée, stents, pacemaker, DAI/CRT (**ESC 2023 Classe III**, AHA 2021, **HAS oct. 2024** Annexes 1–2 ; bain de bouche chlorhexidine 0,12–0,20 % **Grade B**). Haut risque : antécédent d'endocardite (**ESC I B / HAS Grade A**), prothèse valvulaire/TAVI/anneau (**ESC I C / HAS Grade A**), MitraClip/TriClip (**HAS Grade A / ESC IIa C**), LVAD (**ESC I C / HAS Grade A**), cardiopathies congénitales cyanogènes (**I C / Grade A**). Transplantation cardiaque : divergence (**ESC IIb C**, AHA si valvulopathie du greffon, HAS non retenue en Grade A si non compliquée).
- **Allergie pénicilline (HAS oct. 2024) :** clindamycine supprimée (risque *C. difficile*) ; azithromycine 500 mg (**Grade B**) avec alerte QT explicite ; alternatives françaises : **pristinamycine 1 g** (hors AMM, **Grade AE**) ou **céfazoline 1 g IV** (allergie non anaphylactique, **Grade A**). Éviter clarithromycine sous AOD ou en ICFER.
- **Antithrombotiques (SFCO 2015) :** monothérapie antiplaquettaire poursuivie (**Grade A** pour extractions) ; AVK poursuivis pour gestes à faible risque si **INR < 4,0 dans les 24–72 h** (**Grade A**) ; AINS **Classe III** en ICFER et **Grade A** contre-indiqués avec AVK.
- **Anesthésie locale avec adrénaline :** méta-analyse **Guimaraes 2021** (10 ECR, n = 478 patients CV stables) : meilleur contrôle de la douleur, baisse de la PAS post-geste (**SMD -0,95**), zéro décès/infarctus/AVC, pas de hausse significative des arythmies (*certitude GRADE très faible, écart interne texte RR 1,24 vs tableau 2,16 ; infarctus récent et IC décompensée exclus*). Plafond usuel **36 à 40 µg d'adrénaline (~2 cartouches à 1:100 000)** ; éviter les fils rétracteurs imbibés d'adrénaline.`,
    },
    {
      headingFr: 'Preuves sur les « jours de maladie », plantes et divergences',
      depth: 'evidence',
      bodyMarkdownFr: `### Règles des « jours de maladie »

- **iSGLT2 :** risque absolu d'acidocétose euglycémique concentré dans le diabète (~**1/1 000 patient-années** ; 3 cas DT2 dans **DAPA-HF**, 0 dans **EMPEROR-Reduced**).
- **Bloqueurs du SRAA / ARM :** **zéro essai clinique** démontrant un bénéfice des cartes d'auto-arrêt (**Watson 2022** : 74 documents recensés, seulement 2 portant sur l'IC). **NICE NG148** (oct. 2024) n'avalise pas les cartes d'auto-arrêt (1.6.4) tout en conservant la recommandation clinicienne 1.2.14 pour diarrhée/vomissements/sepsis. **Clark 2019** alerte sur les arrêts injustifiés, erreurs de tri (**Doerfler 2019** : 1 seul patient sans erreur ; **Vicary 2020** : **45 %** gardaient la fiche à 12 mois), décompensations et non-reprises.

### Plantes et compléments préopératoires (SPAQI 2021, EMA, OPERA, HOPE-TOO)

- **50 % à 70 %** des opérés ne déclarent pas leurs compléments s'ils ne sont pas interrogés directement.
- **Fenêtres d'arrêt :** ginkgo (**EMA** 3–4 j vs **SPAQI 2021 / ASA** 7–14 j) ; extraits d'ail (**EMA** 7 j vs **SPAQI** 14 j) ; millepertuis ≥ 14 j ; vitamine E > 400 UI/j (signal défavorable en IC dans **HOPE-TOO**) ; oméga-3 (essai chirurgical **OPERA** : pas de surrisque hémorragique, mais pause 7–14 j parfois demandée pour les OTC).

### Accords, divergences entre recommandations et limites d'accès

- **Accords :** poursuite des bêtabloquants chroniques ; suspension médicale des iSGLT2 3–4 j avant chirurgie majeure ; pas de relais héparine systématique pour les AOD ; pas d'arrêt unilatéral des antithrombotiques ; pas d'antibioprophylaxie dentaire de routine pour ICFER, stents ou DAI/CRT ; suppression de la clindamycine.
- **Divergences :** délai minimal après DES en SCC stable pour chirurgie urgente (**1 mois** ESC 2022 vs **3 mois** AHA/ACC 2024) ; fenêtre d'arrêt du ticagrélor (**3 j** AHA/ACC vs **5 j** GIHP/SFAR vs **7 j** BSG/ESGE) ; IEC/ARA2 en chirurgie (**poursuite en ICFER** AHA/ACC 2024 vs **48–72 h MRC** KDIGO 2024) ; grade d'antibioprophylaxie pour MitraClip/transplantation ; fenêtres des plantes (EMA vs SPAQI).
- **Limites :** STOP-or-NOT et SPACE indirects pour l'ICFER (≤ 6–10 % d'IC, zéro essai ARNI) ; consignes GLP-1 d'octobre 2024 fondées sur consensus d'experts ; plusieurs PDF primaires (ESC 2022 NCS, AHA/ACC 2024 NCS, ASA 2020, SPAQI 2021, SFAR 2025) vérifiés via revues en libre accès et résumés PubMed.`,
    },
  ],
  relatedArticleSlugs: [
    'these-jours-de-maladie-sraa-vs-isglt2',
    'medicaments-effets-secondaires-suivi',
    'maladie-renale-insuffisance-cardiaque',
    'diabete-insuffisance-cardiaque',
    'medicaments-glp1-et-incretines',
    'antiplaquettaires-bitherapie-et-protection-gastrique',
    'dispositifs-cardiaques-dai-crt',
    'interactions-complements-aliments-medicaments',
    'recommandations-comparees-esc-us-nice',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'vivre-avec-insuffisance-cardiaque',
  ],
  sources: [
    {
      label: 'Essais périopératoires SRAA : STOP-or-NOT (JAMA, 2024), SPACE (EHJ, 2024) et POISE-3 (Ann Intern Med, 2023)',
      detail: 'Comparaison arrêt vs poursuite des IEC/ARA2 avant chirurgie non cardiaque et limites en ICFER.',
    },
    {
      label: 'Recommandations périopératoires : AHA/ACC 2024 NCS (revues CCJM Cohn/Keshock 2025), ESC 2022 NCS, Kindel et al. (oct. 2024, GLP-1), BSG/ESGE 2021 (endoscopie) et ASA 2020/HRS (DAI/CRT)',
      detail: 'Délais post-stent, gestion des classes médicamenteuses, endoscopie digestive, règle de l’ombilic et aimants.',
    },
    {
      label: 'Soins dentaires et endocardite : HAS France (octobre 2024, texte intégral), ESC 2023 IE, AHA 2021, SFCO/SFC/GIHP (2015), GIHP/SFAR (2018) et Guimaraes et al. (BMJ Open, 2021)',
      detail: 'Absence d’antibioprophylaxie pour ICFER/stents/DAI-CRT, alerte azithromycine-QT, maintien des antithrombotiques et anesthésie locale avec adrénaline.',
    },
    {
      label: 'Jours de maladie et réglementation : Watson (2022/2023), Clark (2019), NICE NG148 (mis à jour oct. 2024), KDIGO 2024, RCP EMA Forxiga/Jardiance/Wegovy et FDA Farxiga/metformine',
      detail: 'Débat sur les cartes génériques, risques d’acidocétose sous iSGLT2, déshydratation sous GLP-1 et plan écrit personnalisé.',
    },
    {
      label: 'Compléments préopératoires et médicaments aggravant l’IC : SPAQI (2021), monographies EMA (ginkgo, ail) et Abdin et al. (EJHF, 2025)',
      detail: 'Fenêtres d’arrêt des plantes, interactions hémorragiques/CYP et agents anesthésiques en ICFER.',
    },
  ],
  disclaimerType: 'medical',
};
