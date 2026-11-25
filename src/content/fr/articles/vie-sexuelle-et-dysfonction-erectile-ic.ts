import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'vie-sexuelle-et-dysfonction-erectile-ic',
  sourceWikiPath: 'wiki/concepts/sexual-health-and-ed-in-heart-failure.md',
  titleFr: "Vie sexuelle et dysfonction érectile dans l'insuffisance cardiaque",
  category: 'quotidien',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'vie-sexuelle',
    'dysfonction-érectile',
    'ipde5',
    'sildénafil',
    'tadalafil',
    'dérivés-nitrés',
    'bêtabloquants',
    'spironolactone',
    'éplérénone',
    'dai',
    'qualité-de-vie',
  ],
  aliases: [
    'Vie sexuelle',
    'Sexualité et cœur',
    'Dysfonction érectile',
    'Troubles de l’érection',
    'Viagra insuffisance cardiaque',
    'Cialis insuffisance cardiaque',
    'IPDE5',
    'Princeton IV',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Les difficultés sexuelles sont très fréquentes dans l'insuffisance cardiaque (jusqu'à 75 % des hommes rapportent une dysfonction érectile) et la peur de déclencher un infarctus ou un choc de défibrillateur freine souvent les couples. Pourtant, un rapport sexuel avec un partenaire habituel correspond à un effort modéré d'environ 3 à 5 METs (marcher d'un bon pas ou monter deux étages d'escaliers) : il est généralement sûr lorsque l'insuffisance cardiaque est stable (NYHA I–II), alors qu'il convient d'attendre une stabilisation en cas de décompensation (NYHA IV) ou d'angor instable. Un choc de DAI pendant un rapport est rare et sans danger pour le partenaire. N'arrêtez jamais un médicament cardiaque de vous-même pour des troubles sexuels : la spironolactone peut parfois être remplacée par l'éplérénone et l'effet des bêtabloquants comporte une forte part d'effet nocebo. Avant tout comprimé contre la dysfonction érectile (sildénafil / Viagra, tadalafil / Cialis), un contrôle médical est indispensable : ils sont strictement contre-indiqués avec les dérivés nitrés, le nicorandil et le riociguat, déconseillés avec le vériciguat, requièrent de la prudence avec le sacubitril/valsartan (Entresto), et la notice européenne du Cialis contre-indique l'insuffisance cardiaque NYHA II ou plus des 6 derniers mois.",
  sections: [
    {
      headingFr: "L'activité sexuelle est-elle sûre pour le cœur ?",
      bodyMarkdownFr: `L'activité sexuelle correspond à un effort physique léger à modéré. Les consensus internationaux (**AHA 2012**, **AHA/ESC 2013**, **Princeton IV 2024**) et les guides patients (BHF, HeartFailureMatters) estiment la dépense énergétique d'un rapport avec un partenaire habituel à **3 à 5 METs** (pic de fréquence cardiaque habituellement inférieur à 120–130 bpm, sur une courte durée). Un repère concret consiste à pouvoir **marcher environ 1,6 km sur terrain plat en 20 minutes ou monter deux étages d'escaliers sans douleur thoracique ni essoufflement marqué**.

| État clinique | Catégorie de risque cardiaque | Conduite habituelle |
|---|---|---|
| **IC stable et compensée NYHA I–II** (capable d'un effort ≥ 3–5 METs sans symptôme) | Risque faible | Activité sexuelle **généralement sûre** (AHA 2012 Classe IIa B, *grade issu de synthèses secondaires* ; HFM ; BHF) |
| **NYHA III**, angor stable léger à modéré, ou capacité d'effort incertaine | Risque intermédiaire / indéterminé | **Évaluation cardiologique préalable** (ex. épreuve d'effort ou réadaptation cardiaque pour vérifier la tolérance et l'absence d'ischémie significative) |
| **IC décompensée, NYHA IV**, angor instable ou réfractaire, infarctus très récent (< 1–2 semaines), arythmie non contrôlée ou rétrécissement aortique sévère symptomatique | Risque élevé | **Différer l'activité sexuelle** jusqu'à stabilisation et feu vert de l'équipe de cardiologie |

*Note de transparence :* les textes intégraux payants de Princeton IV (2024) et AHA (2012) n'étant pas en libre accès, la stratification ci-dessus s'appuie sur leurs résumés vérifiés, des synthèses cliniques concordantes et les textes intégraux de HeartFailureMatters et de la BHF.

### Confort pratique et dispositifs implantés (DAI / CRT)

- **Confort et rythme :** HeartFailureMatters conseille de privilégier un moment où vous êtes reposé, d'éviter un rapport juste après un repas copieux ou une prise d'alcool, de choisir une pièce à température modérée et des positions limitant l'effort physique (côte à côte ou partenaire au-dessus), et de faire une pause en cas de douleur thoracique, vertige ou essoufflement important. La réadaptation cardiaque améliore à la fois l'endurance et la confiance.
- **Avec un DAI ou une CRT :** la crainte d'un choc est une cause fréquente d'abstinence, mais les chocs pendant un rapport sont rares car la fréquence cardiaque dépasse rarement les seuils de détection d'une tachycardie ventriculaire. Si un choc survient malgré tout, la décharge reste confinée dans la poitrine du porteur et **ne peut pas électrocuter ni blesser le partenaire** (au plus une brève sensation de picotement bénigne).
- **Aimants et accessoires électriques :** maintenez tout aimant puissant à au moins **15 cm** du boîtier (voir *Dispositifs cardiaques implantables : DAI et CRT*) et évitez d'appliquer un appareil vibrant à pile directement sur le boîtier.`,
    },
    {
      headingFr: "Pourquoi la dysfonction érectile est fréquente dans l'ICFER ischémique",
      bodyMarkdownFr: `Une dysfonction érectile (DE) est rapportée chez **jusqu'à 75 % des hommes** atteints d'insuffisance cardiaque chronique ; des difficultés sexuelles (baisse du désir, fatigue, appréhension) concernent également les femmes. Un médicament pris isolément en est rarement la seule cause :

1. **Maladie vasculaire partagée :** les artères péniennes sont plus étroites que les artères coronaires ; l'athérosclérose et la dysfonction endothéliale de la cardiomyopathie ischémique réduisent directement l'afflux sanguin nécessaire à l'érection.
2. **Débit cardiaque réduit et fatigue :** la diminution de la réserve cardiaque et l'essoufflement limitent l'endurance et la libido.
3. **Impact psychologique :** la peur de l'infarctus ou d'un choc de DAI, les changements d'image corporelle et la dépression (qui touche **20 à 30 %** des patients IC) pèsent fortement sur la vie intime.
4. **Comorbidités et habitudes :** diabète, maladie rénale chronique, apnée du sommeil, tabagisme et alcool aggravent tous la DE de façon indépendante.
5. **Médicaments (souvent cofacteurs partiels, rarement cause unique) :**

| Classe médicamenteuse | Mécanisme et données sur la DE | Ce que disent les essais et recommandations |
|---|---|---|
| **Bêtabloquants** (bisoprolol, carvédilol, métoprolol, nébivolol) | Effet pharmacologique modeste associé à un **important effet nocebo (attente)** | Dans **Silvestri et al. (2003)** (96 hommes sous aténolol, indirect pour l'ICFER), une DE survenait chez **3,1 %** des hommes ne connaissant pas le médicament, **15,6 %** informés du nom et **31,2 %** explicitement prévenus du risque de DE (**p < 0,01**) ; **le placebo corrigeait la DE aussi bien que le sildénafil**. Dans **MR NOED (Brixius 2007)** (hommes hypertendus, indirect), le métoprolol succinate baissait le score IIEF de **−0,92** contrairement au **nébivolol**. **NICE NG106 (1.7.9)** précise de **ne pas renoncer à un bêtabloquant au seul motif d'une DE**, vu son gain majeur sur la survie. |
| **Spironolactone** (*Aldactone*, ARM non sélectif) | Fixation sur les récepteurs androgéniques et progestatifs : baisse de libido, DE, **gynécomastie ou douleurs mammaires** | Dans **RALES (1999)** (ICFER, n = 1 663), gynécomastie ou douleurs mammaires chez **10 % sous spironolactone contre 1 % sous placebo** (**p < 0,001**). Le passage à l'ARM sélectif **éplérénone** (*Inspra*) — validé dans **EMPHASIS-HF (2011)** (NYHA II, FEVG ≤ 35 %, n = 2 737, **HR 0,63**) — évite ces effets hormonaux tout en conservant la protection cardiaque. |
| **Diurétiques thiazidiques** | Associés à une DE dans des cohortes d'hypertension | Souvent non nécessaires si la congestion est gérée par diurétique de l'anse ; à réévaluer avec votre équipe si associés. |
| **IEC, ARA2, ARNI (sacubitril/valsartan — *Entresto*), iSGLT2** | Profil généralement neutre, parfois favorable sur la fonction endothéliale | Rarement directement en cause (une hypotension marquée peut toutefois accroître fatigue ou étourdissements). |

**Règle de sécurité essentielle :** n'arrêtez ni ne sautez jamais un bêtabloquant, un ARM ou un autre pilier de l'insuffisance cardiaque pour améliorer vos érections. Un arrêt non encadré expose à une décompensation, des arythmies rapides et une hospitalisation ; tout changement éventuel (comme passer de la spironolactone à l'éplérénone, ou discuter du nébivolol si approprié) relève de votre cardiologue.`,
    },
    {
      headingFr: 'Inhibiteurs de la PDE-5 (sildénafil, tadalafil) : essais, divergences UE et contre-indications',
      bodyMarkdownFr: `### Ce que montrent les essais dans l'ICFER

Deux essais randomisés en double aveugle contre placebo ont évalué le **sildénafil** à la demande chez des hommes atteints d'insuffisance cardiaque chronique stable (sans dérivés nitrés ni ischémie active) :

- **Webster et al. (2004)** (*Arch Intern Med*, n = 35, IC NYHA II–III, essai croisé de 12 semaines) : une dose test de 50 mg a entraîné une baisse tensionnelle asymptomatique de **6 ± 3 mmHg** avec **zéro hypotension symptomatique** ni événement grave ; le sildénafil a significativement amélioré la fonction érectile (IIEF, **p < 0,001**), **les deux scores de dépression** et la qualité de vie liée à l'IC (MLHFQ, **p = 0,02**).
- **Katz et al. (2005)** (*Am J Cardiol*, n = 132, IC stable légère à modérée, 12 semaines à dose flexible) : **74 % contre 18 %** d'amélioration des érections, **68 % contre 16 %** d'amélioration des rapports et **53 % contre 20 %** de rapports réussis (**p < 0,002**), avec des effets indésirables surtout légers (céphalées, bouffées de chaleur) et peu d'événements cardiovasculaires.
- Une petite série ouverte (**Freitas 2006**, n = 12, FEVG < 40 %) retrouvait des gains comparables.

*Distinction importante :* ces essais concernent un usage **à la demande pour une DE** dans une ICFER stable sans dérivés nitrés. Les IPDE5 quotidiens à forte dose ne sont **pas** un traitement prouvé de l'insuffisance cardiaque ni de l'hypertension pulmonaire liée au cœur gauche (voir *Ventricule droit et hypertension pulmonaire*).

### Piège réglementaire en Europe : Viagra (sildénafil) vs Cialis (tadalafil)

Les résumés des caractéristiques du produit (RCP) européens de l'EMA (lus en texte intégral, état au 25 novembre 2026) **ne comportent pas les mêmes contre-indications dans l'insuffisance cardiaque** :

| Point du RCP européen (EMA) | **Sildénafil (*Viagra*)** | **Tadalafil (*Cialis*)** |
|---|---|---|
| **Contre-indication IC (rubrique 4.3)** | **« Insuffisance cardiaque sévère »** (ainsi qu'angor instable, PA < 90/50 mmHg, infarctus ou AVC récent) | **Insuffisance cardiaque NYHA classe II ou supérieure au cours des 6 derniers mois** — strictement contre-indiqué sur le RCP UE (ces patients ayant été exclus des essais de Cialis). Contre-indique aussi IDM < 90 jours, angor instable / pendant le rapport, arythmie non contrôlée, PA < 90/50 mmHg, HTA non contrôlée, AVC < 6 mois |
| **Essais randomisés DE dans l'ICFER** | Oui (Webster 2004, Katz 2005) | Aucun essai randomisé dédié en ICFER identifié |
| **Délai minimal avant un dérivé nitré** | **Au moins 24 heures** (RCP EMA / ESC 2024 ; Oliver 2009 a montré une disparition de l'interaction à 8 h dans l'angor, mais les RCP conservent 24 h) | **Au moins 48 heures** (demi-vie plus longue de **17,5 h** ; Kloner 2003) |
| **Alphabloquants (rubrique 4.5)** | Stabiliser l'alphabloquant d'abord ; envisager une dose initiale de **25 mg** | **Doxazosine + tadalafil déconseillé** (chute tensionnelle pouvant durer ≥ 12 h) ; prudence avec les autres alphabloquants (chute minime avec la tamsulosine) |
| **Sacubitril/valsartan (*Entresto*, rubrique 4.5)** | Signale explicitement une **baisse tensionnelle significativement plus marquée** que sous sacubitril/valsartan seul : **prudence à l'instauration** | Non cité nommément en 4.5, mais hypotension additive avec les antihypertenseurs signalée |
| **Alcool (rubrique 4.5)** | Pas d'interaction hypotensive majeure à dose modérée (mais l'alcool altère l'érection) | Consommation élevée (**≥ 0,7 g/kg**, soit ~5 verres ou plus) : hausse des **vertiges et hypotensions orthostatiques** |

Parce que le sildénafil dispose d'essais directs dans l'ICFER, d'une fenêtre sans nitrés plus courte (24 h vs 48 h) et n'interdit pas de façon générale la classe NYHA II stable sur son RCP européen, les cardiologues l'examinent souvent en premier lorsqu'un comprimé oral est envisagé — toute prescription restant strictement individuelle.

### Contre-indications absolues et interactions majeures dans l'ICFER

1. **Dérivés nitrés organiques (CONTRE-INDICATION ABSOLUE — risque d'hypotension grave voire mortelle) :** ne jamais associer un IPDE5 à la **trinitrine sublinguale (*Natispray*, *Trinitrine*)**, aux **patchs nitrés (*Nitriderm TTS*, *Diafusor*)**, aux nitrés oraux prolongés ou aux nitrites récréatifs (« poppers »). Respectez un intervalle d'au moins **24 heures** après le sildénafil et **48 heures** après le tadalafil avant toute administration de nitré, et prévenez immédiatement le **15 (SAMU)** ou les urgences si vous avez pris un IPDE5 avant une douleur thoracique (voir *Angor et médicaments anti-angineux*).
2. **Nicorandil (*Ikorel*) (CONTRE-INDICATION STRICTE) :** ce médicament anti-angineux comporte un **groupement nitré** ; le RCP européen du Viagra et le RCP français du nicorandil contre-indiquent l'association aux IPDE5.
3. **Stimulateurs de la guanylate cyclase soluble (riociguat et vériciguat) :** le **riociguat** est strictement contre-indiqué avec tous les IPDE5. Avec le **vériciguat (*Verquvo*)**, le RCP européen indique que l'association aux IPDE5 est **déconseillée** en raison d'une hypotension symptomatique additive (voir *Médicaments additionnels : ivabradine, digoxine et vériciguat*).
4. **Sacubitril/valsartan (*Entresto*), tension basse et rétrécissement aortique (PRUDENCE) :** les deux RCP contre-indiquent l'initiation en dessous de **90/50 mmHg**, le RCP du Viagra souligne l'effet hypotenseur renforcé avec *Entresto*, et une prudence particulière s'impose en cas de **rétrécissement aortique** ou d'alphabloquant prostatique.
5. **Compléments sexuels « à base de plantes » ou achetés en ligne :** le consensus **Princeton IV** alerte sur la fréquente **adultération** de ces produits par des analogues non déclarés du sildénafil ou du tadalafil, faisant courir un risque d'hypotension sévère cachée si vous possédez un spray de trinitrine ou prenez un nitré ou du vériciguat.
6. **Si les IPDE5 oraux sont contre-indiqués :** des alternatives urologiques ou andrologiques sans interaction systémique avec les nitrés (pompe à vide mécanique, alprostadil local) peuvent être discutées avec votre cardiologue et votre médecin traitant.`,
    },
    {
      headingFr: 'Synthèse des référentiels, portée en ICFER ischémique et limites',
      bodyMarkdownFr: `| Source | Année | Règle principale | Statut / vérification |
|---|---|---|---|
| **Princeton IV** | 2024 | NYHA I–II stable : risque faible (rapports et IPDE5 envisageables) ; différer si instable/NYHA IV ; interdiction stricte des nitrés ; éviter les compléments non contrôlés | Résumé + synthèses secondaires (*texte payant non lu*) |
| **AHA Scientific Statement** | 2012 | NYHA I–II compensé raisonnable (IIa B) ; différer en NYHA IV/décompensé (III C) ; IPDE5 utiles sans nitrés (I A) ; jamais avec nitrés (III C) | Synthèses secondaires (*PDF payant non lu*) |
| **NICE NG106** | 2025 (1.7.9) | Ne **pas** écarter un bêtabloquant au seul motif d'une DE | **Texte intégral vérifié** |
| **RCP EMA Viagra (sildénafil)** | 2026 | Contre-indiqué si **IC sévère**, PA < 90/50, nitrés, nicorandil, riociguat ; prudence avec **sacubitril/valsartan**, alphabloquants, rétrécissement aortique | **Texte intégral vérifié** |
| **RCP EMA Cialis (tadalafil)** | 2026 | Contre-indiqué si **IC NYHA II ou plus dans les 6 derniers mois**, IDM < 90 j, PA < 90/50, nitrés, riociguat ; doxazosine déconseillée | **Texte intégral vérifié** |
| **ESC 2024 (SCC)** | 2024 | Association nitrés + IPDE5 contre-indiquée (**Classe III, B** ; 24 h sildénafil, 48 h tadalafil) | Vérifié via la fiche anti-angineux |

### Ce que cela signifie avec une FEVG autour de 35 %

- Une FEVG autour de 35 % **n'interdit pas à elle seule** une vie sexuelle épanouie si vos symptômes sont stabilisés (NYHA I–II), votre angor contrôlé et votre tolérance à l'effort conservée.
- Parce que la cardiomyopathie ischémique associe traitements de l'IC (bêtabloquant, ARM, ARNI/IEC, iSGLT2, parfois vériciguat) et traitements coronaires (spray *Natispray*, patch nitré, nicorandil), faites **toujours vérifier votre ordonnance complète** avec votre cardiologue ou votre pharmacien avant tout traitement de la DE — y compris si vous gardez un spray de trinitrine dans une poche « au cas où ».
- Aborder le sujet tôt permet d'identifier des leviers sûrs (passage spironolactone vers éplérénone, prise en charge d'une humeur dépressive, dépistage d'une ischémie) au lieu d'arrêter silencieusement un traitement vital.

### Limites des preuves

- **Essais ICFER anciens et de petite taille :** Webster (n = 35) et Katz (n = 132) n'ont duré que 12 semaines et sont antérieurs aux ARNI et aux iSGLT2 ; les précautions d'association avec *Entresto* reposent donc surtout sur la pharmacologie réglementaire.
- **Données indirectes sur le changement de bêtabloquant :** Silvestri (aténolol) et MR NOED (nébivolol vs métoprolol) portaient sur des patients hypertendus et non sur l'ICFER (où l'essai du nébivolol, SENIORS, concernait les patients ≥ 70 ans).
- **Peu d'essais chez les femmes :** la majorité des études interventionnelles portent sur la DE masculine ; les données chez les femmes avec IC restent essentiellement descriptives.`,
    },
  ],
  relatedArticleSlugs: [
    'angor-et-medicaments-anti-angineux',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'medicaments-effets-secondaires-suivi',
    'tension-arterielle-insuffisance-cardiaque',
    'dispositifs-cardiaques-dai-crt',
    'ventricule-droit-et-hypertension-pulmonaire',
    'depression-et-sante-emotionnelle',
    'vivre-avec-insuffisance-cardiaque',
    'questions-equipe-cardiologie',
    'recommandations-comparees-esc-us-nice',
  ],
  sources: [
    {
      label: 'Consensus Princeton IV (2024), AHA (2012), AHA/ESC (2013), BHF & HeartFailureMatters',
      detail: 'Effort de 3 à 5 METs, stratification du risque selon la classe NYHA, innocuité des chocs de DAI pour le partenaire et alerte sur les compléments adultérés.',
    },
    {
      label: 'Essais sur la DE médicamenteuse : Silvestri (2003), MR NOED (Brixius 2007), RALES (1999), EMPHASIS-HF (2011) & NICE NG106 (1.7.9)',
      detail: 'Effet nocebo majeur des bêtabloquants, gynécomastie sous spironolactone (10 % vs 1 %) évitée sous éplérénone et maintien impératif des bêtabloquants.',
    },
    {
      label: 'Essais du sildénafil dans l’ICFER : Webster (2004), Katz (2005) & Freitas (2006)',
      detail: 'Amélioration des scores IIEF, de la dépression et de la qualité de vie avec tolérance hémodynamique satisfaisante sans dérivés nitrés.',
    },
    {
      label: 'RCP européens EMA (Viagra, Cialis, Verquvo — textes intégraux), ANSM (nicorandil), ESC 2024 SCC, Kloner (2003), Oliver (2009) & Holt (2022)',
      detail: 'Divergence UE Cialis (NYHA II+ contre-indiqué) vs Viagra (IC sévère), délais nitrés 24 h/48 h, contre-indication nicorandil/riociguat et prudence avec sacubitril/valsartan.',
    },
  ],
  disclaimerType: 'medical',
};
