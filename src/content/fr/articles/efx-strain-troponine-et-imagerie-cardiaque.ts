import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'efx-strain-troponine-et-imagerie-cardiaque',
  sourceWikiPath: 'wiki/concepts/cpet-strain-and-cardiac-diagnostics.md',
  titleFr: 'EFX (VO2 max), strain (GLS), troponine chronique, Holter et imagerie d’ischémie',
  category: 'diagnostic',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'efx',
    'cpet',
    'vo2-max',
    'pente-ve-vco2',
    'gls',
    'strain-longitudinal-global',
    'troponine',
    'lésion-myocardique-chronique',
    'holter',
    'moniteur-implantable',
    'esv',
    'coroscanner',
    'irm-stress',
    'tep-cardiaque',
    'scintigraphie',
  ],
  aliases: [
    'EFX',
    'CPET',
    'VO2 max',
    'Pic de VO2',
    'Pente VE/VCO2',
    'Épreuve d’effort cardiorespiratoire',
    'Strain longitudinal global',
    'GLS',
    'Speckle tracking',
    'Troponine ultrasensible',
    'hs-cTnT',
    'hs-cTnI',
    'Lésion myocardique chronique',
    'Holter ECG',
    'Patch ECG',
    'Moniteur cardiaque implantable',
    'ILR',
    'Coroscanner',
    'CCTA',
    'IRM de stress',
    'TEP cardiaque',
    'SPECT',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    'Au-delà de la FEVG, de la taille du ventricule gauche, du NT-proBNP et de la cicatrice IRM, cinq examens spécialisés reviennent souvent sur les comptes rendus de cardiologie : l’épreuve d’effort avec mesure des échanges gazeux (EFX / VO2 max), qui chiffre objectivement votre capacité d’effort (pic de VO2) et l’efficacité respiratoire (pente VE/VCO2) pour guider la réadaptation ou évaluer une insuffisance cardiaque avancée ; le strain longitudinal global (GLS) en échocardiographie (normal autour de −18 % à −22 %), plus précoce que la FEVG mais variable selon les marques d’échographes ; la troponine ultrasensible (hs-cTnT / hs-cTnI), fréquemment un peu élevée et stable dans l’ICFER chronique sans signifier un infarctus aigu ; les enregistreurs rythmiques ambulatoires (Holter 24–48 h, patchs 7–14 jours, moniteur implantable) ; et les examens d’anatomie ou d’ischémie coronaire (coroscanner, IRM de stress, TEP, scintigraphie, ETT de stress). Ces repères se lisent toujours avec votre équipe de cardiologie.',
  sections: [
    {
      headingFr: '1. Épreuve d’effort cardiorespiratoire (EFX / VO2 max)',
      bodyMarkdownFr: `Lors d’une **EFX** (épreuve d’effort avec mesure des échanges gazeux, *CPET*), vous pédalez sur un vélo fixe ou marchez sur un tapis dont la résistance augmente progressivement, équipé d’électrodes ECG, d’un brassard tensionnel et d’un masque léger qui mesure cycle par cycle l’oxygène consommé (\`VO2\`) et le dioxyde de carbone expiré (\`VCO2\`).

### Les chiffres clés d’un compte rendu d’EFX

| Paramètre | Ce qu’il mesure | Repères / zones de risque | Pourquoi le cardiologue l’examine |
|---|---|---|---|
| **Pic de VO2** (\`mL/kg/min\` et \`% théorique\`) | Consommation maximale d’oxygène atteinte (intègre débit cardiaque, poumons, hémoglobine et muscles) | **Classes de Weber :** **A** > 20 ; **B** 16,0–20,0 ; **C** 10,0–15,9 ; **D** < 10,0 mL/kg/min. Le \`% théorique\` ajuste sur l’âge, le sexe et la corpulence (**≤ 50 %** = limitation sévère) | Mesure objective de la capacité fonctionnelle réelle ; prédit mieux la survie que la classe NYHA déclarée |
| **Pente VE/VCO2** | Litres d’air ventilés (\`VE\`) par litre de CO2 éliminé (\`VCO2\`) — **efficacité ventilatoire** | **Classes ventilatoires (Guazzi/Arena) :** **I** < 30 ; **II** 30,0–35,9 ; **III** 36,0–44,9 (défavorable) ; **IV** ≥ 45,0 (haut risque). **> 35** = seuil ISHLT de haut risque | **Indépendante de l’effort maximal :** reste interprétable même si la fatigue des jambes ou l’essoufflement interrompt le test tôt |
| **RER** (quotient respiratoire = \`VCO2 / VO2\`) | Rapport entre CO2 produit et O2 consommé | **≥ 1,05** (Kittleson/ISHLT) à **≥ 1,10** confirme un effort physiologique maximal | Vérifie qu’un pic de VO2 bas reflète une limitation cardiaque réelle plutôt qu’un arrêt précoce |
| **Seuil ventilatoire / anaérobie (\`SV1\` / \`VT1\`)** | Puissance et fréquence cardiaque à partir desquelles le métabolisme anaérobie s’accélère | Exprimé en \`mL/kg/min\`, watts et battements par minute (\`bpm\`) | Sert directement à fixer vos zones personnalisées d’entraînement en **réadaptation cardiaque (SMR)** |

### Trois usages majeurs dans la cardiomyopathie ischémique

1. **Prescrire la réadaptation cardiaque :** à partir du seuil ventilatoire (\`SV1\`), du rythme ECG et du profil tensionnel, les équipes françaises (*GERS-P / SMR*) et européennes définissent des zones de fréquence cardiaque et de puissance sûres (principe appliqué dans \`HF-ACTION\` ; voir *Réadaptation cardiaque (SMR) et activité physique*).
2. **Distinguer un stade B d’un stade C masqué (et éclaircir une dyspnée) :** avec une FEVG autour de 35 %, on ralentit parfois inconsciemment son allure tout en se sentant « sans symptôme » (NYHA I). L’EFX peut révéler un pic de VO2 abaissé ou une pente VE/VCO2 élevée et aider à faire la part entre origine **cardiaque**, **pulmonaire (BPCO)** et **déconditionnement** (voir *Dysfonction ventriculaire asymptomatique (stade B)*).
3. **Évaluer une insuffisance cardiaque avancée, un LVAD ou une transplantation :** les recommandations **ESC 2026** préconisent l’EFX (**Classe I, niveau C**) dans le bilan de greffe ou d’assistance circulatoire durable, et retiennent une faible capacité d’effort (**pic de VO2 < 12–14 mL/kg/min** ou **< 50 % théorique**) comme critère 4 d’insuffisance cardiaque avancée (tableau 14).

### Seuils d’EFX pour le bilan d’IC avancée et de greffe (ESC 2026 et ISHLT 2016/2024)

| Profil | Seuil étayant une évaluation spécialisée IC avancée / greffe | Raison de l’ajustement |
|---|---|---|
| **Sous bêtabloquant** | **Pic de VO2 ≤ 12 mL/kg/min** (ESC 2026 tableaux 14/16 ; standard ISHLT ; Kittleson 2025 discute aussi des bandes de recherche par sexe ≤ 13–14 hommes / ≤ 10–11 femmes) | Les bêtabloquants limitent la fréquence cardiaque maximale et abaissent légèrement le pic de VO2 à pronostic égal |
| **Sans bêtabloquant (ou intolérant)** | **Pic de VO2 ≤ 14 mL/kg/min** | En l’absence de freinage bêtabloquant, un seuil plus haut reflète un risque comparable |
| **Femmes, sujets jeunes (≤ 50 ans) ou âgés (≥ 70 ans)** | **Pic de VO2 ≤ 50 % de la valeur théorique** | Évite une fausse réassurance chez les adultes jeunes et une surestimation chez les personnes âgées ou de petit gabarit |
| **Obésité (IMC ≥ 30 kg/m²)** | **Pic de VO2 rapporté à la masse maigre < 19 mL/kg/min** | La masse grasse consomme peu d’oxygène et abaisse artificiellement le chiffre en \`mL/kg/min\` |
| **Test sous-maximal (\`RER < 1,05\`) ou risque additif** | **Pente VE/VCO2 > 35** | Reste pronostique lorsque l’effort maximal n’est pas atteint |

Les recommandations **ESC 2026** comme **ISHLT 2024 / Kittleson 2025** insistent sur le fait qu’**aucun chiffre isolé d’EFX ne décide seul d’une inscription en greffe ou d’un LVAD** : il s’intègre toujours aux symptômes, aux scores multivariés (MECKI, SHFM) et au cathétérisme cardiaque droit (voir *Insuffisance cardiaque avancée (stade D) et orientation* et *Transplantation cardiaque en France*).`,
    },
    {
      headingFr: '2. Strain longitudinal global (GLS) à l’échocardiographie (ETT)',
      bodyMarkdownFr: `### Ce que mesure le GLS et comment lire le signe moins

Alors que la FEVG mesure le pourcentage de volume sanguin éjecté, le **strain longitudinal global (\`GLS\`)** utilise le suivi de marqueurs acoustiques en échographie 2D (*speckle tracking*) pour mesurer le raccourcissement longitudinal du muscle cardiaque de la base vers la pointe. Comme le muscle *se raccourcit*, **le GLS normal est un nombre négatif** (par exemple **−20 %** correspond à un raccourcissement de 20 %). Certaines études suppriment le signe moins et parlent de **valeur absolue** (\`20 %\` ou \`|GLS|\`).

- **Valeurs habituelles chez un adulte sain :** environ **−18 % à −22 %** (ASE/EACVI 2015 cite **−20 %** comme repère pratique ; des valeurs moins négatives que **−16 %** sont couramment considérées comme anormales dans les cohortes cliniques). **Plus le chiffre se rapproche de zéro (par exemple \`−10 %\` ou \`−8 %\`), plus la contraction est affaiblie.**
- **Pourquoi le GLS réagit plus tôt que la FEVG :** les fibres longitudinales sous-endocardiques siègent dans la couche la plus interne, touchée en premier par l’ischémie coronaire ou la cicatrice, alors que les fibres circulaires externes peuvent compenser temporairement et maintenir la FEVG plus haute.

### Apport du GLS dans l’ICFER et l’HFimpEF

- **Valeur pronostique au-delà de la FEVG (\`STRATS-AHF\`, Park et al., *JACC* 2018 et *JAHA* 2018) :** chez **4 172 patients** hospitalisés pour insuffisance cardiaque aiguë (FEVG moyenne 40 %, \`|GLS|\` moyen 10,8 %), chaque **point supplémentaire de GLS** était associé à une baisse de **5 % de la mortalité à 5 ans** (p < 0,001) ; un GLS modérément altéré (8,1–12,5 %, **HR 1,31**) ou sévèrement altéré (≤ 8,0 %, **HR 1,61**) distinguait nettement la survie, alors que la **FEVG n’était plus indépendamment prédictive**. Dans le sous-groupe biventriculaire de 1 824 patients (54 % ICFER, 34 % coronariens, texte intégral), l’atteinte combinée du GLS gauche et du GLS droit portait le risque le plus élevé (**HR 1,76**, IC 95 % : 1,47–2,09).
- **Risque de rechute lorsque la FEVG s’améliore (\`HFimpEF\`, Adamo et al., *Circ Heart Fail* 2017, texte intégral) :** chez **96 patients** dont la FEVG (< 50 %, moyenne 37 %) avait augmenté d’au moins 10 points au-dessus de 50 % (moyenne 58 %), **65 % conservaient un GLS anormal** (≤ 16 % en valeur absolue, soit −16 % ou pire), confirmant que la normalisation de la FEVG relève souvent d’une *rémission* plutôt que d’une guérison cellulaire complète. Sur environ 1,5 an, **39 %** ont rechuté sous 50 % : chaque point supplémentaire de \`|GLS|\` augmentait de **24 %** la probabilité de maintenir une FEVG > 50 % (**OR ajusté 1,22**, IC 95 % : 1,07–1,40, p = 0,004), et une baisse de FEVG > 5 points survenait chez **62 % (42/68)** des patients à GLS anormal contre **21 % (6/28)** à GLS normal (**AUC 0,68**, sensibilité 88 %, spécificité 46 %). *(Limite : petite étude rétrospective monocentrique comportant un écart interne sur la part d’ischémiques — 24 % dans le texte contre 34 % dans le tableau 1 — et une AUC trop modeste pour guider un arrêt de traitement ; voir *Insuffisance cardiaque à FEVG améliorée (HFimpEF)*.)*
- **Autres usages (synthèse ESC 2026) :** détection d’une atteinte systolique précoce infraclinique (surveillance en cardio-oncologie, progression d’une IC à FEVG préservée vers une ICFER dans Brann 2023) et mise en évidence d’un aspect régional « d’épargne apicale » (*apical sparing*) orientant vers une amylose cardiaque.

### La règle de variabilité entre constructeurs (comme entre ETT et IRM)

Dans l’étude comparative **EACVI/ASE sur 9 logiciels et 7 constructeurs** (Farsalinos et al., *JASE* 2015 ; 62 volontaires examinés par le même opérateur) :

- Le GLS moyen sain variait de **−18,0 % à −21,5 %** du seul fait de la marque ou du logiciel, avec des écarts systématiques atteignant **jusqu’à 3,7 points de strain (p < 0,001)**.
- Sur un **même appareil et logiciel**, la reproductibilité du GLS était en revanche **supérieure à celle de la FEVG** (erreur relative inter-observateur 5,4–8,6 % ; intra-observateur 4,9–7,3 %).
- Dans **Mirea et al. (2018)** (63 personnes présentant une cicatrice d’infarctus prouvée en IRM), le strain *segmentaire* variait encore davantage entre marques (jusqu’à 4,5 % d’écart moyen ; limites d’accord jusqu’à −4,6 ± 7,5 %), si bien que les chiffres segmentaires isolés ne doivent pas être surinterprétés.

**Règle pratique :** ne comparez pas directement deux valeurs de GLS mesurées sur des échographes ou des logiciels différents — exactement comme on ne mélange pas les FEVG d’ETT et d’IRM cardiaque.`,
    },
    {
      headingFr: '3. Troponine cardiaque ultrasensible chronique (hs-cTnT / hs-cTnI)',
      bodyMarkdownFr: `La troponine cardiaque est une protéine libérée en cas de souffrance des cellules myocardiques. Les dosages **ultrasensibles** modernes (\`hs-cTnT\` ou \`hs-cTnI\`) en détectent de faibles quantités chez la plupart des personnes vivant avec une insuffisance cardiaque chronique, ce qui inquiète souvent à la lecture d’un bilan marqué en gras « élevé ».

### Infarctus aigu versus lésion myocardique chronique (4e Définition universelle de l’infarctus, 2018)

| Profil | Évolution de la troponine | Contexte clinique, ECG et imagerie | Signification |
|---|---|---|---|
| **Lésion myocardique chronique** | Durable au-dessus du **99e percentile**, **stable sur des dosages répétés** (pas de variation significative / *delta*) | ICFER cliniquement stable, maladie rénale chronique, âge avancé, hypertrophie du VG ; pas de douleur ischémique aiguë ni de modification ECG nouvelle | Niveau de base fréquent dans l’ICFER stable (tension pariétale, souffrance microvasculaire, renouvellement cellulaire, moindre élimination rénale) |
| **Lésion myocardique aiguë** | **Hausse et/ou baisse significative (delta sériel)** avec au moins une valeur > 99e percentile | Absence d’ischémie coronaire aiguë (poussée congestive d’IC, FA rapide, myocardite, infection sévère, embolie pulmonaire) | Souffrance myocardique aiguë d’origine non thrombotique |
| **Infarctus aigu du myocarde** | **Hausse et/ou baisse significative (delta sériel)** avec au moins une valeur > 99e percentile | **ET** symptômes ischémiques aigus, nouvelles anomalies ECG, ondes Q pathologiques, nouvelle perte de cinétique pariétale ou thrombus coronaire | **Infarctus aigu** — prise en charge en urgence |

### Fréquence et valeur pronostique dans l’ICFER ischémique stable

- **Plus de la moitié des patients stables dépassent la norme saine :** dans une analyse sur données individuelles de **4 268 patients** atteints d’IC chronique (Emdin/Aimo 2018 ; **65 % d’origine ischémique**, **87 % à FEVG < 40 %**), la \`hs-cTnT\` basale médiane était de **18 ng/L (IIQ 9–33 ng/L)** — déjà au-dessus du seuil usuel d’environ 14 ng/L de la population générale, en dehors de tout infarctus.
- **Marqueur de risque indépendant (Aimo et al., *Circulation* 2018) :** sur **9 289 patients** avec IC chronique stable (11 cohortes, **60 % d’origine ischémique**, **85 % à FEVG < 40 %**, suivi médian 2,4 ans), la \`hs-cTnT\` prédisait l’évolution indépendamment de l’âge, du sexe, de la cause, de la FEVG, du DFGe et du **NT-proBNP** :
  - **Mortalité toutes causes :** **HR 1,48** (IC 95 % : 1,41–1,55) ;
  - **Mortalité cardiovasculaire :** **HR 1,40** (IC 95 % : 1,33–1,48) ;
  - **Hospitalisation cardiovasculaire :** **HR 1,42** (IC 95 % : 1,36–1,49).
  - Un seuil de **18 ng/L** stratifiait le risque dans les deux sexes, dans les causes ischémiques et non ischémiques et selon la fonction rénale *(seuls 209 patients sur 9 289 avaient une \`hs-cTnI\`, dont les seuils varient selon le fabricant et le sexe)*.
- **Repère pratique en cas d’urgence :** connaître votre **troponine habituelle en période stable** (et garder votre dernier courrier de cardiologie sur vous) aide les médecins urgentistes à distinguer votre niveau de base d’une élévation aiguë. Cela ne doit toutefois **jamais** retarder l’appel au **15 (SAMU)**, au **112** (ou au **114** par SMS) en cas de douleur thoracique nouvelle ou aggravée, d’essoufflement aigu ou de sueurs. La troponine n’est **pas** une cible de traitement dans l’ICFER stable.`,
    },
    {
      headingFr: '4. Surveillance ambulatoire du rythme (Holter, patchs ECG et moniteur implantable)',
      bodyMarkdownFr: `Un ECG de consultation de 10 secondes ne donne qu’un instantané. La surveillance ambulatoire adapte la **durée d’enregistrement** à la fréquence des symptômes ou des anomalies recherchées (ISHNE-HRS 2017 ; ESC 2022 VA) :

| Dispositif | Durée habituelle | Meilleures indications | Limites |
|---|---|---|---|
| **Holter ECG standard** | **24 à 48 heures** (multi-dérivations filaires) | Symptômes quotidiens ; quantification de la **charge quotidienne en extrasystoles ventriculaires (ESV, %)** et de leur morphologie ; contrôle de fréquence d’une FA ; recherche de TV non soutenues fréquentes | Manque facilement les arythmies survenant seulement tous les quelques jours ou semaines |
| **Patch ECG multi-jours / enregistreur externe** | **7 à 14 jours** (jusqu’à 30 jours ; sans fil, résistant à l’eau) | Palpitations intermittentes, **FA paroxystique silencieuse**, TV non soutenues sporadiques, variabilité d’un jour à l’autre de la charge en ESV | Souvent 1 à 2 dérivations (localisation moins précise des ESV qu’un ECG 12 dérivations) ; irritation cutanée possible |
| **Moniteur cardiaque implantable (\`MCI\` / \`ILR\`)** | **Jusqu’à ~3 ans** (petite puce sous la peau du thorax) | **Syncope inexpliquée** après bilan initial/électrophysiologique négatif ; FA paroxystique rare ou suspicion de trouble rythmique grave | Petite intervention ambulatoire ; **inutile** si vous portez déjà un DAI ou une CRT (qui enregistrent le rythme en continu) |

### Ce que recherche votre cardiologue dans l’ICFER ischémique

- **Fibrillation atriale (FA) silencieuse :** sa découverte pose immédiatement la question d’une anticoagulation (voir *Fibrillation atriale et insuffisance cardiaque*). Les montres connectées grand public peuvent alerter sur une FA possible, mais produisent **15 à 26 %** de tracés non concluants et ne remplacent pas un Holter ou un patch médical (voir *Montres connectées et capteurs dans l’insuffisance cardiaque*).
- **Charge en extrasystoles ventriculaires (\`ESV\` en % des battements quotidiens) :** des ESV très fréquentes peuvent provoquer ou aggraver une baisse de la FEVG, même sans palpitations perceptibles (**56 %** des patients atteints de cardiomyopathie aux ESV étaient asymptomatiques dans Bas 2016). Dans **Baman et al. (2010 ; n = 174)**, une charge **> 24 %** séparait le mieux les dysfonctions VG induites par les ESV (FEVG moyenne 37 %), et **10 %** était le seuil minimal associé à une faiblesse réversible. Selon les recommandations **ESC 2022 VA** (synthèse secondaire), une **charge en ESV ≥ 10 %** avec FEVG basse inexpliquée fait suspecter une cardiomyopathie induite ou aggravée par les ESV et conduit à envisager une IRM cardiaque (**Classe IIa, niveau C**). Même dans une cardiomyopathie ischémique avérée, une charge élevée en ESV peut aggraver la FEVG ou empêcher une resynchronisation (CRT) de stimuler efficacement.
- **Tachycardie ventriculaire non soutenue (\`TVNS\`) et syncope inexpliquée :** dans la maladie coronaire chronique avec **FEVG entre 31 et 40 %** (ou FEVG ≤ 35 % en NYHA I, où le DAI préventif n’est pas automatique), une TVNS ou une syncope inexpliquée conduit à une **exploration électrophysiologique** selon **ESC 2022 VA** (texte intégral) : une TV monomorphe soutenue inductible oriente vers un DAI (**Classe IIa, niveau B**), tandis qu’une exploration négative avec syncope inexpliquée persistante conduit à un **moniteur cardiaque implantable (Classe I)**.`,
    },
    {
      headingFr: '5. Imagerie coronaire, d’ischémie et de viabilité : tableau d’orientation',
      bodyMarkdownFr: `Pour déterminer si des artères coronaires sont rétrécies, si un territoire manque d’apport sanguin à l’effort (**ischémie**) ou quelle part est cicatricielle versus vivante (**viabilité**), le cardiologue choisit parmi cinq examens non invasifs (en plus de la coronarographie invasive). Pour le lien entre épaisseur de cicatrice et récupération et les raisons pour lesquelles les tests de viabilité n’ont pas sélectionné les répondeurs dans \`STICH\` ni \`REVIVED-BCIS2\`, voir *Viabilité myocardique : hibernation, cicatrice et tests de viabilité*, *Revascularisation coronaire : pontage et stents*, *Examens et chiffres* et *Confirmer la cause de la dysfonction du ventricule gauche*.

| Examen | Type | Ce qu’il montre le mieux | Points forts | Limites / précautions | Place habituelle (ESC 2024 CCS et ESC 2026 IC) |
|---|---|---|---|---|---|
| **Coroscanner (\`CCTA\`)** | **Anatomique** | Vue 3D directe des artères coronaires, plaques, sténoses et pontages | Très forte valeur prédictive négative pour **éliminer** une sténose obstructive ; rapide | Produit de contraste iodé (bilan rénal), rayons X ; qualité réduite en cas de calcifications majeures, de stents ou de FA rapide/irrégulière | **ESC 2026 IC IIa, C** (texte intégral) / **ESC 2024 CCS Classe I** *(non vérifié en texte intégral)* en cas de probabilité **faible à modérée** de maladie coronaire |
| **IRM cardiaque de perfusion sous stress + LGE** | **Fonctionnel + tissulaire** | Défaut de perfusion inductible **et** profondeur exacte de la cicatrice LGE, volumes VG et profils non ischémiques en un seul examen | **Sans rayons X** ; examen de référence pour les volumes VG et le type de cicatrice | Prudence avec le gadolinium si insuffisance rénale sévère (\`DFGe < 30\`) ; claustrophobie ; vérification de compatibilité IRM des DAI/CRT | Distinguer cause ischémique et non ischémique (**ESC 2026 I, C**, texte intégral) ; évaluer ischémie et cicatrice ensemble (**ESC 2024 CCS Classe I** *(non vérifié)*) |
| **TEP cardiaque (\`PET\` Rb-82 / N-13 ; viabilité \`FDG\`)** | **Fonctionnel / métabolique** | **Débit myocardique absolu** de référence, maladie microvasculaire et viabilité métabolique | Meilleure précision de perfusion ; détecte l’ischémie tritronculaire équilibrée et l’angor microvasculaire ; moins irradiante que la SPECT | Disponibilité hospitalière limitée ; coût plus élevé ; irradiation faible à modérée ; préparation glycémique pour le FDG chez les diabétiques | Questions complexes d’ischémie/microcirculation ou bilan spécialisé de viabilité (**ESC 2024 CCS Classe I** *(non vérifié)*) |
| **Scintigraphie myocardique de stress (\`SPECT\`)** | **Fonctionnel** | Perfusion relative au repos versus stress (effort ou vasodilatateur) | Très disponible ; réalisable en cas de dispositif non IRM-compatible ou de claustrophobie | Irradiation plus élevée que la TEP ; résolution spatiale moindre ; peut manquer une ischémie tritronculaire équilibrée | Recherche d’ischémie lorsque l’IRM ou la TEP n’est pas disponible ou contre-indiquée (**ESC 2024 CCS Classe I** *(non vérifié)*) |
| **Échocardiographie de stress** (effort ou dobutamine) | **Fonctionnel** | Apparition d’un trouble de contraction à l’effort (ischémie), réserve contractile (viabilité) et sténose aortique bas débit | **Sans rayons X ni contraste néphrotoxique**, très accessible, informations valvulaires dynamiques | Dépendante de l’opérateur ; limitée par une fenêtre ultrasonore difficile (obésité, BPCO sévère) | Recherche d’ischémie, réserve contractile ou sténose aortique bas débit / bas gradient (**ESC 2024 CCS Classe I** *(non vérifié)*) |
| **Coronarographie invasive** (+ FFR/iFR) | **Anatomique (+ physiologie)** | Image définitive de la lumière artérielle et mesure de pression ; permet un stenting immédiat si indiqué | Référence lorsqu’une revascularisation est envisagée | Gestes invasifs, contraste iodé, irradiation | **ESC 2026 IC I, C** en cas d’angor et forte probabilité chez un candidat à la revascularisation ; **IIa, C** dans l’ICFER à forte probabilité (texte intégral) |

**Rappel ESC 2026 sur la viabilité :** les recommandations ESC 2026 indiquent explicitement que les preuves manquent pour utiliser les tests de viabilité afin de sélectionner les patients ICFER candidats à une revascularisation (après \`STICH\` et \`REVIVED-BCIS2\`). Le choix de l’imagerie dépend de la question précise posée — écarter une maladie coronaire, confirmer la cause, explorer un angor réfractaire ou préparer une chirurgie — et relève de votre équipe de cardiologie.`,
    },
    {
      headingFr: 'Synthèse des recommandations et limites des preuves',
      depth: 'evidence',
      bodyMarkdownFr: `### Recommandations comparées (au 25 novembre 2026)

Les mentions issues de synthèses secondaires dont le PDF original était protégé sont signalées par *(non vérifié en texte intégral)*.

| Examen / question | ESC 2026 IC | ESC spécialités (2022 VA / 2024 CCS) | ISHLT 2016/2024 et AHA/ACC/HFSA 2022 | Précisions |
|---|---|---|---|---|
| **EFX en IC avancée / bilan de greffe** | **Classe I, C** (tableau 11) ; seuil IC avancée **< 12–14 mL/kg/min** (12 sous BB) ou **< 50 %** théorique (texte intégral) | — | **ISHLT 2016/2024 :** ≤ 12 sous BB, ≤ 14 sans BB, ≤ 50 % théorique (femmes/jeunes/âgés), VE/VCO2 > 35 sous-maximal ; **AHA 2022** soutient l’EFX en IC avancée *(non vérifié)* | Forte convergence transatlantique ; jamais utilisé seul |
| **GLS en ETT** | Reconnu pour la dysfonction précoce, l’amylose et la cardio-oncologie *(non vérifié)* ; les seuils de traitement et de dispositifs restent **basés sur la FEVG** (texte intégral) | — | **ASE/EACVI 2015 :** repère sain ~−20 % ; **même marque/logiciel** indispensable pour le suivi | Aucun ECR ne prouve qu’une stratégie guidée par le GLS surpasse la FEVG |
| **Troponine ultrasensible chronique** | Reconnue pour la lésion myocardique et la stratification du risque selon le contexte *(non vérifié)* | — | **4UDMI 2018 :** cinétique (delta) + ischémie distingue infarctus aigu et lésion chronique stable ; **AHA 2022** pour stratification *(non vérifié)* | Pas une cible thérapeutique dans l’ICFER stable |
| **Charge en ESV et moniteur implantable** | ECG de suivi pour élargissement du QRS (texte intégral) | **ESC 2022 VA :** ESV ≥ 10 % + FEVG basse inexpliquée -> IRM **IIa, C** *(non vérifié)* ; post-infarctus FEVG 31–40 % + TVNS/syncope -> exploration EP (**I/IIa**), MCI **Classe I** si négative + syncope inexpliquée (texte intégral) | **ISHNE-HRS 2017 :** adapter la durée du moniteur à la fréquence des symptômes (résumé) | Un DAI ou une CRT assure déjà une surveillance continue |
| **Imagerie coronaire et d’ischémie** | Coronarographie **I, C** (angor + forte prob.) / **IIa, C** (ICFER forte prob.) ; coroscanner **IIa, C** (prob. faible–modérée) ; IRM + LGE **I, C** pour l’étiologie ; viabilité sans preuve pour revasculariser (texte intégral) | **ESC 2024 CCS :** coroscanner **Classe I** (prob. faible–modérée) ; IRM stress/TEP/SPECT/ETT stress **Classe I** (prob. plus élevée / ischémie) *(non vérifié)* | **AHA 2022 :** bilan ischémique **2a, B-NR** ; imagerie de stress pour revascularisation **2b, B-NR** (texte intégral) | Choix guidé par la probabilité pré-test, la fonction rénale, les dispositifs et l’expertise locale |

### Limites des preuves

- **Données pronostiques observationnelles, sans essai de pilotage thérapeutique :** \`STRATS-AHF\` (Park 2018), Adamo (2017), Aimo (2018) et Baman (2010) sont des cohortes ou registres. **Aucun essai randomisé ne démontre que modifier les traitements de l’ICFER uniquement pour améliorer le GLS ou abaisser la troponine chronique prolonge la survie.**
- **Décalages de population :** \`STRATS-AHF\` concernait des patients hospitalisés pour IC *aiguë* toutes FEVG confondues (34 % de coronariens dans le sous-groupe biventriculaire) ; Adamo (2017) était de petite taille (n = 96), monocentrique, majoritairement non ischémique (24–34 %) avec discrimination modeste (AUC 0,68) ; Baman (2010) et Bas (2016) portaient sur des cohortes d’ablation d’ESV idiopathiques plutôt que sur des cicatrices post-infarctus. En revanche, **Aimo (2018)** (9 289 patients IC chronique, 60 % ischémiques, 85 % FEVG < 40 %) est directement applicable pour la \`hs-cTnT\`, mais ne comptait que **209** patients avec \`hs-cTnI\`.
- **Accès restreint à certains tableaux originaux :** les PDF éditeurs de Guazzi (2016), ISHLT (2016/2024), 4UDMI (2018), des tableaux d’imagerie ESC 2024 CCS et de Farsalinos/Voigt (2015) étaient payants ; les données correspondantes proviennent de résumés, du texte intégral de Kittleson (2025) ou de synthèses vérifiées.
- **Variabilité technique :** les équations de valeur théorique d’EFX varient selon les laboratoires, le GLS varie jusqu’à **3,7 %** entre constructeurs d’échographes et les dosages de \`hs-cTnI\` ne sont pas standardisés entre fabricants. Vérifiez toujours la méthode utilisée avant de comparer deux chiffres dans le temps.`,
    },
  ],
  relatedArticleSlugs: [
    'examens-et-chiffres',
    'revascularisation-pontage-stents',
    'confirmer-la-cause-dysfonction-vg',
    'fraction-dejection',
    'insuffisance-cardiaque-fevg-amelioree',
    'dysfonction-vg-asymptomatique-stade-b',
    'readaptation-cardiaque-et-activite-physique',
    'insuffisance-cardiaque-avancee-stade-d',
    'transplantation-cardiaque-france',
    'ventricule-droit-et-hypertension-pulmonaire',
    'montres-connectees-et-capteurs-ic',
    'telesurveillance-insuffisance-cardiaque',
    'fibrillation-atriale-insuffisance-cardiaque',
    'recommandations-comparees-esc-us-nice',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'glossaire-cardiologie',
    'viabilite-myocardique',
  ],
  sources: [
    {
      label: 'Guazzi (2016), ISHLT (2016/2024), Kittleson (2025) et ESC 2026 (IC avancée)',
      detail: 'Paramètres d’EFX (pic de VO2, pente VE/VCO2, RER, seuil ventilatoire), classe I C et seuils d’orientation vers greffe ou LVAD',
    },
    {
      label: 'EACVI/ASE (Voigt 2015, Farsalinos 2015, ASE/EACVI 2015) et Mirea (2018)',
      detail: 'Standardisation du strain longitudinal global (GLS), écarts jusqu’à 3,7 % entre 9 logiciels/7 constructeurs et variabilité segmentaire sur cicatrice IRM',
    },
    {
      label: 'STRATS-AHF (Park 2018), Adamo et al. (2017) et Brann (2023)',
      detail: 'Valeur pronostique du GLS gauche et droit dans l’IC et prédiction de la rechute en HFimpEF',
    },
    {
      label: '4e Définition universelle de l’infarctus (2018) et méta-analyses IPD Aimo/Emdin (2018)',
      detail: 'Distinction infarctus aigu versus lésion myocardique chronique et pronostic de la hs-cTnT (seuil 18 ng/L) dans l’ICFER stable',
    },
    {
      label: 'ISHNE-HRS (2017), Baman (2010), Bas (2016) et ESC 2022 (arythmies ventriculaires)',
      detail: 'Durée des enregistreurs rythmiques (Holter, patch, MCI/ILR), charge en ESV ≥ 10 % et parcours TVNS/syncope post-infarctus',
    },
    {
      label: 'Recommandations ESC 2026 IC, ESC 2024 CCS et AHA/ACC/HFSA 2022',
      detail: 'Choix de l’imagerie coronaire et d’ischémie (coroscanner, IRM de stress, TEP, SPECT, ETT de stress, coronarographie) et position sur la viabilité',
    },
  ],
  disclaimerType: 'medical',
};
