import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'cellules-souches-et-therapies-regeneratives',
  sourceWikiPath: 'wiki/concepts/stem-cell-and-regenerative-therapies.md',
  titleFr: 'Cellules souches et thérapies régénératives dans la cardiomyopathie ischémique',
  category: 'traitements',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium',
  volatility: 'hot',
  tags: [
    'thérapie-cellulaire',
    'cellules-souches',
    'médecine-régénérative',
    'cellules-ips',
    'moelle-osseuse',
    'cellules-mésenchymateuses',
    'traitement-expérimental',
    'cardiomyopathie-ischémique',
  ],
  aliases: [
    'Cellules souches',
    'Thérapie cellulaire',
    'Médecine régénérative',
    'Cellules iPS',
    'Patchs cardiaques',
    'RiHEART',
    'BioVAT-HF',
    'DREAM-HF',
    'CONCERT-HF',
    'CardiAMP-HF',
    'Cliniques de cellules souches',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "L'espoir des thérapies par cellules souches est simple : remplacer ou réparer le muscle cardiaque cicatrisé après un infarctus. Après plus de vingt ans de recherche, cette promesse n'est pas encore devenue un traitement prouvé. Aucune thérapie cellulaire ou régénérative pour l'insuffisance cardiaque n'est autorisée en France ni dans l'Union européenne (liste EMA de juin 2026), ni aux États-Unis (FDA), et les recommandations européennes (ESC 2026) comme américaines (2022) n'en font aucune mention. Les essais les plus rigoureux utilisant les cellules de moelle osseuse du patient ou de donneurs contre une procédure factice (CardiAMP-HF, DREAM-HF, CONCERT-HF) n'ont pas atteint leur critère principal. Une nouvelle génération — du muscle cardiaque cultivé en laboratoire à partir de cellules iPS et appliqué sous forme de patchs — suscite de l'intérêt, mais n'a été testée que chez 8 à 20 patients sans groupe témoin, au prix d'un traitement immunosuppresseur prolongé ; le Japon a accordé une autorisation conditionnelle temporaire à RiHEART en 2026. Les cliniques payantes proposant des « cellules souches pour le cœur » hors essai clinique enregistré n'offrent pas de traitement validé et ont déjà causé des accidents graves : la seule voie légitime reste un essai clinique officiel, discuté avec votre équipe de cardiologie.",
  sections: [
    {
      headingFr: 'Ce que recouvre l’expression « traitement par cellules souches »',
      bodyMarkdownFr: `Quatre grandes familles très différentes sont regroupées sous ce terme, avec des niveaux de preuve inégaux.

| Famille | Principe | Mode d'administration | Où en est-on (novembre 2026) |
|---|---|---|---|
| **Cellules de votre propre moelle osseuse** (autologues) | Prélevées dans l'os iliaque, traitées puis réinjectées | Dans une artère coronaire ou directement dans la paroi cardiaque par cathéter | Nombreux essais depuis les années 2000 ; bénéfice de faible certitude ; meilleur essai récent neutre (**CardiAMP-HF**) |
| **Cellules « adultes » sélectionnées ou de donneur** | Cellules mésenchymateuses précurseurs/stromales (moelle osseuse, parfois d'un donneur), cellules cardiaques « c-kit » | Injection par cathéter dans la paroi cardiaque | Plus grand essai contrôlé contre procédure factice négatif (**DREAM-HF**) ; piste des cellules cardiaques c-kit discréditée |
| **Muscle cardiaque cultivé à partir de cellules iPS** | Cellules musculaires cardiaques fabriquées en laboratoire à partir de cellules souches pluripotentes induites (iPS), en général d'un donneur | Chirurgie : patchs ou feuillets suturés à la surface du cœur, ou amas injectés lors d'un pontage | Premières études chez l'humain de 8 à 20 patients sans témoin ; autorisation conditionnelle au Japon uniquement |
| **Approches géniques et produits acellulaires** | Gènes transportés par un virus ; vésicules extracellulaires ou reprogrammation directe de la cicatrice (pistes encore non détaillées ici) | Perfusion ou cathéter | Expérimental ; rien n'est autorisé. **CUPID 2 (SERCA2a)** a été neutre ; le seul essai génique conçu pour l'IC ischémique (**SALVADOR-HF, YAP101**) est une phase 1 de 24 patients. Voir *Thérapies géniques et moléculaires en développement dans l'ICFER* |`,
    },
    {
      headingFr: 'Ce que montrent les essais cliniques sur les cellules adultes',
      bodyMarkdownFr: `### Cellules de moelle osseuse du patient

- **Revue Cochrane (2016, 38 essais randomisés, 1 907 patients, recherches jusqu'en décembre 2015) :** moins de décès à long terme avec les cellules (**RR 0,42** ; IC 95 % 0,21–0,87), mais cet effet ne reposait que sur **9 petits essais totalisant 491 personnes**. Il n'y avait **aucun effet clair sur les hospitalisations pour insuffisance cardiaque** (**RR 0,63** ; IC 95 % 0,36–1,09), et la seule étude mesurant la FEVG à long terme par **IRM** n'a montré aucun gain (**-1,6 point**, 25 patients). L'ensemble a été classé **preuves de faible qualité** (essais souvent en ouvert, randomisation imprécise ou financement industriel).
- **CardiAMP-HF (ICFER ischémique uniquement, FEVG 20–40 %, cellules contre procédure factice *sham*) :** résultat **neutre** sur le critère principal (**win ratio 1,01**, p = 0,954). Le promoteur a mis en avant un sous-groupe post-hoc présentant un NT-proBNP plus élevé ; l'essai de suite **CardiAMP HF II** ne recrute plus que ce sous-groupe et remplace la distance de marche par un score de qualité de vie dans son critère principal, avec des résultats attendus autour de **2027**.

### Cellules sélectionnées et cellules de donneur

- **CONCERT-HF (125 patients, tous ischémiques, FEVG moyenne 29 %, cicatrice à l'IRM) :** évaluait les cellules stromales médullaires et les cellules cardiaques c-kit, seules ou associées, contre placebo. **Aucune modification de la FEVG, de la taille du cœur, de la taille de la cicatrice, de la distance de marche ni de la capacité d'effort.** Une baisse des événements majeurs avec les cellules cardiaques seules (p = 0,043) et une amélioration de la qualité de vie avec les cellules stromales (p = 0,050 et p = 0,023) sont des résultats nominaux parmi de nombreux critères.
- **DREAM-HF (565 patients avec ICFER toutes causes, cellules mésenchymateuses précurseurs de donneur contre procédure factice, suivi d'environ 30 mois) :** **négatif sur son critère principal** (événements d'insuffisance cardiaque, **HR 1,17** ; IC 95 % 0,81–1,69) et sur ses critères secondaires. Une réduction des infarctus et AVC (**HR 0,42**) ainsi qu'un effet plus net en cas d'inflammation (CRP élevée) proviennent d'analyses exploratoires réalisées après ce résultat négatif.

### Pourquoi la recherche a changé de cap

- L'hypothèse selon laquelle le cœur adulte hébergerait ses propres cellules souches régénératrices (« cellules c-kit ») provenait majoritairement d'un seul laboratoire. En **octobre 2018**, Harvard Medical School et le Brigham and Women's Hospital ont demandé la **rétractation de 31 de ses publications** pour données falsifiées ou fabriquées, conduisant à une pause de CONCERT-HF pour réévaluer ses bases scientifiques.
- Les essais de moelle osseuse et de cellules stromales n'ont pas démontré la reconstruction musculaire espérée (aucun gain de FEVG, de volume ni de cicatrice dans CONCERT-HF ; pas de gain de FEVG à l'IRM dans la revue Cochrane). La recherche s'est donc tournée vers la fabrication en laboratoire de **véritables cellules musculaires cardiaques** issues de cellules iPS.`,
    },
    {
      headingFr: 'La nouvelle génération : muscle cardiaque cultivé à partir de cellules iPS',
      bodyMarkdownFr: `| Programme | Patients traités | Résultats observés | Principales limites |
|---|---|---|---|
| **BioVAT-HF** (Allemagne, *NEJM* 2026) | 20 patients, FEVG ≤ 35 % ; patchs de muscle cardiaque iPS de donneur suturés sur le cœur | Chez les 12 patients avec suivi à 3 mois : FEVG **+3,9 points** (p = 0,04), paroi traitée épaissie de **4,5 mm** ; gain de qualité de vie non significatif (p = 0,06) | Aucun groupe témoin ; effets indésirables chez tous les patients ; **3 décès** (vasoplégie, COVID-19, dissection aortique) et **1 transplantation** ; arrêt de l'immunosuppression chez **4 patients** (dont 1 pour cancer de la vessie) ; essai cofinancé par le développeur |
| **RiHEART** (Japon, Cuorips) | 8 patients ischémiques, NYHA III–IV, FEVG ≤ 35 % ; feuillets posés par incision thoracique | Seuls **2 patients sur 8** ont atteint l'objectif d'amélioration de FEVG à l'ETT, non confirmé au scanner ; à 52 semaines, FEVG au scanner **28,7 % → 33,0 %** (non significatif), meilleure capacité d'effort ; tous vivants à 2–5 ans ; pas de tumeur ni d'arythmie sévère | 8 patients sans groupe témoin ; **7 sur 8** ont présenté des effets indésirables possiblement liés à l'immunosuppression ; événements graves chez **5 sur 8**, jugés non liés (dont 1 cancer du côlon sur polype préexistant) |
| **LAPiS** (Japon, Heartseed) | 10 patients ischémiques, FEVG ≤ 40 % ; amas de cellules musculaires cardiaques injectés **au cours d'un pontage coronarien** | Le laboratoire rapporte une FEVG passant d'environ **23–25 % à 31 %** à 52 semaines | Le pontage simultané empêche de distinguer l'effet propre des cellules ; données communiquées par l'entreprise uniquement |

### Pourquoi poser des patchs en surface plutôt qu'injecter des cellules dans la cicatrice ?

- Lorsque des cellules musculaires cardiaques dérivées de cellules souches ont été **injectées directement dans la cicatrice** de porcs (**Romagnuolo 2019**), elles ont bien formé du nouveau muscle, mais ont provoqué de fréquentes **tachycardies ventriculaires** au cours des premières semaines, naissant dans le greffon lui-même.
- Chez le primate non humain insuffisant cardiaque (**Jebran 2025**, *Nature*), des **patchs posés à la surface externe** du cœur (technologie BioVAT) sont restés en place jusqu'à 6 mois, ont épaissi la paroi et ont relevé la FEVG chez 3 animaux sur 6 (**+7 contre -2 points** chez les témoins), sans arythmie ni tumeur sur les moniteurs rythmiques implantés. Toutefois, les greffons ont été **rejetés dès l'arrêt des immunosuppresseurs**, quelques animaux ont développé de petits dépôts d'aspect osseux ou cartilagineux, et dans un cœur humain examiné après transplantation, les cellules greffées étaient vivantes mais petites et immatures.
- Les premières études humaines par patchs ou feuillets n'ont pas rapporté à ce jour d'arythmie sévère liée au greffon, mais sur des effectifs encore minuscules (8 à 20 patients).`,
    },
    {
      headingFr: 'Statut réglementaire et silence des recommandations (novembre 2026)',
      bodyMarkdownFr: `- **France et Union européenne : aucun accès hors essai clinique.** Les médicaments de thérapie innovante (**MTI / ATMP** : thérapie cellulaire, génique ou tissulaire) nécessitent une autorisation européenne centralisée. La liste de l'Agence européenne des médicaments (**EMA, juin 2026**) recense 33 produits autorisés et **aucun traitement cardiaque**.
- **États-Unis : aucun produit approuvé.** La FDA indique qu'aucune thérapie de médecine régénérative n'est approuvée pour une maladie cardiovasculaire (page actualisée en avril 2024 ; aucune approbation ultérieure retrouvée au 25 novembre 2026). Mesoblast a déposé un dossier d'approbation pour ses cellules de donneur dans une indication très ciblée (insuffisance cardiaque droite et saignements digestifs chez les porteurs d'une **assistance ventriculaire LVAD**), et non pour la cardiomyopathie ischémique en général ; aucune décision FDA n'était retrouvée.
- **Japon :** **RiHEART** a reçu en 2026 une **autorisation conditionnelle limitée dans le temps (7 ans)** pour l'insuffisance cardiaque ischémique sévère malgré traitement standard, assortie d'un suivi obligatoire de chaque patient traité. Une autorisation conditionnelle signifie que le produit est jugé assez prometteur pour recueillir des preuves en conditions réelles, et **non** que son bénéfice clinique est démontré.
- **Recommandations internationales :** une recherche en texte intégral dans les recommandations **ESC 2026** et américaines **AHA/ACC/HFSA 2022** ne retrouve **aucune mention** (ni recommandation, ni mise en garde, ni rubrique « lacunes de preuves ») concernant la thérapie cellulaire, les cellules souches, la thérapie génique ou les cellules iPS dans l'insuffisance cardiaque ; les seules mentions de cellules souches concernent l'amylose et les traitements anticancéreux. Les recommandations sont silencieuses (comme l'était déjà l'ESC 2021) ; un document de position d'un groupe de travail de l'ESC (2016) classait la thérapie cellulaire comme strictement expérimentale.`,
    },
    {
      headingFr: 'Mise en garde : les « cliniques de cellules souches » payantes',
      bodyMarkdownFr: `- Certains établissements privés commercialisent des injections de « cellules souches » pour les maladies cardiaques. La **FDA** a reçu des signalements de **cécité, de tumeurs et d'infections graves** (dont des septicémies engageant le pronostic vital) après l'administration de produits non autorisés.
- **Signaux d'alerte majeurs :**
  - on vous demande de **payer** pour recevoir le traitement ;
  - le produit est proposé **en dehors d'un essai clinique enregistré** ;
  - le discours prétend qu'un même produit soigne de nombreuses maladies sans lien entre elles.
- **Comment vérifier le sérieux d'un essai :** tout essai clinique légitime est consultable sur un registre public tel que **ClinicalTrials.gov** ou le portail européen **euclinicaltrials.eu** (aux États-Unis, un usage expérimental légal exige une autorisation IND de la FDA vérifiable). En France, la démarche sûre consiste à en parler à votre cardiologue ou à un centre hospitalo-universitaire (CHU).`,
    },
    {
      headingFr: 'Questions ouvertes et applicabilité à la cardiomyopathie ischémique (FEVG ~35 %)',
      bodyMarkdownFr: `### Cinq questions auxquelles la science n'a pas encore répondu

1. **Un type cellulaire réduit-il les décès ou les hospitalisations** dans un essai correctement conduit en aveugle et de taille suffisante ? À ce jour, non.
2. **Quels sous-groupes pourraient répondre ?** Les hypothèses actuelles ciblent un NT-proBNP élevé (**CardiAMP HF II**) ou un profil inflammatoire (suite de **DREAM-HF**), toutes deux issues de sous-groupes d'essais négatifs et devant être prouvées prospectivement.
3. **Le muscle cardiaque iPS peut-il survivre sans immunosuppression prolongée**, et quelle est sa sécurité rythmique à plus grande échelle ? Les effets secondaires des immunosuppresseurs ont été fréquents dans toutes les études iPS, le rejet survient à leur arrêt chez l'animal, et les effectifs humains restent très faibles.
4. **Quel est l'effet propre au-delà de la chirurgie ?** LAPiS associe les cellules à un pontage et les patchs nécessitent une chirurgie thoracique ; les comparaisons contrôlées manquent encore.
5. **De modestes gains de FEVG se traduisent-ils en bénéfice pour vous ?** La plupart des signaux positifs portent sur la FEVG ou l'imagerie, sans traduction démontrée sur la survie ou les hospitalisations.

**Ce qui pourrait faire évoluer cette page :** les résultats de **CardiAMP HF II** (~2027), les grands essais multicentriques **BioVAT** annoncés (Allemagne, Europe, États-Unis), les données de suivi japonaises de **RiHEART**, et une éventuelle décision de la FDA sur le dossier LVAD de Mesoblast.

### Lecture critique des études pour une ICFER ischémique à FEVG ~35 %

| Source | Adéquation à l'ICFER ischémique | Points de vigilance méthodologique |
|---|---|---|
| **Cochrane 2016** | Partielle (mélange IC ischémique, angor et atteintes chroniques ; période ancienne) | Preuves de faible qualité ; conclusion sur la FEVG plus optimiste que le résultat IRM |
| **CONCERT-HF** | Directe (ischémique, FEVG 29 %) | Phase II ; nombreux critères, valeurs de p nominales ; résumé consulté |
| **DREAM-HF** | Partielle (ischémique et non ischémique ; part ischémique non vérifiée sur texte intégral) | Formellement négatif ; bénéfices avancés exploratoires ; libellé du critère variable entre registre et article (provisoire) |
| **CardiAMP-HF** | Directe (ischémique, FEVG 20–40 %) | Neutre ; essai suivant bâti sur un sous-groupe post-hoc ; communiqué/article de presse |
| **BioVAT-HF** | Partielle (FEVG ≤ 35 % ; part ischémique absente du résumé) | Analyse intermédiaire non contrôlée ; KCCQ non significatif ; cofinancé par le développeur ; résumé consulté |
| **RiHEART (Osaka)** | Population directe, 8 patients | Non contrôlé ; objectif ETT atteint chez 2 sur 8 ; moyennes de congrès comparant des sous-ensembles différents |
| **LAPiS** | Partielle (associé à un pontage) | Données d'entreprise uniquement |
| **Jebran 2025, Romagnuolo 2019** | Indirecte (modèles animaux) | Éclairent les mécanismes et la sécurité rythmique, pas le bénéfice clinique |

**Limites :** plusieurs sources ont été consultées sous forme de résumés, d'articles de presse ou de documents d'entreprise. Cet article ne traite pas de l'administration de cellules dans les tout premiers jours suivant un infarctus aigu, ni des cardiomyopathies non ischémiques (en dehors des essais mixtes).`,
    },
  ],
  relatedArticleSlugs: [
    'therapies-geniques-et-moleculaires',
    'essais-cliniques-en-cours-et-a-suivre',
    'traitements-additionnels-nouveaux',
    'essais-cliniques-cles',
    'revascularisation-pontage-stents',
    'cardiomyopathie-ischemique',
    'insuffisance-cardiaque-fevg-amelioree',
    'glossaire-cardiologie',
    'recommandations-comparees-esc-us-nice',
  ],
  sources: [
    {
      label: 'Revue Cochrane (2016) — cellules de moelle osseuse dans les cardiopathies ischémiques chroniques et l’IC',
      detail: '38 essais randomisés (1 907 patients), mortalité long terme (9 essais, RR 0,42), hospitalisations IC (RR 0,63) et FEVG IRM (-1,6 point) ; preuves de faible qualité.',
    },
    {
      label: 'CONCERT-HF (EJHF 2021), DREAM-HF (JACC 2023) et CardiAMP-HF (2025–2026)',
      detail: 'Essais contrôlés par placebo ou procédure factice (sham) dans l’ICFER, résultats principaux neutres/négatifs et contexte des rétractations c-kit de 2018.',
    },
    {
      label: 'BioVAT-HF (NEJM 2026), Jebran et al. (Nature 2025) et Romagnuolo et al. (2019)',
      detail: 'Patchs de muscle cardiaque dérivé de cellules iPS chez l’humain (20 patients) et chez le primate, et arythmies ventriculaires après injection intramyocardique chez le porc.',
    },
    {
      label: 'PMDA (Japon, 2026 — rapport d’examen RiHEART), Osaka AATS 2025 et LAPiS (Heartseed, ESC 2026)',
      detail: 'Autorisation conditionnelle japonaise de 7 ans pour RiHEART (8 patients, suivi 52 semaines) et données de l’entreprise pour LAPiS (10 patients avec pontage).',
    },
    {
      label: 'EMA (liste ATMP, juin 2026), FDA (information patients sur la médecine régénérative) et recherche ESC 2026 / AHA 2022',
      detail: 'Absence de MTI cardiaque autorisé en Europe et aux États-Unis, signalements d’accidents liés aux cliniques payantes et silence complet des recommandations.',
    },
  ],
  disclaimerType: 'medical',
};
