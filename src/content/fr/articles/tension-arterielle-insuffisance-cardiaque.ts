import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'tension-arterielle-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/concepts/blood-pressure-in-heart-failure.md',
  titleFr: 'Tension artérielle et insuffisance cardiaque',
  category: 'comorbidites',
  asOf: '2026-11-24',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'tension-artérielle',
    'hypertension',
    'cible-tensionnelle',
    'icfer',
    'rétrécissement-aortique',
    'inhibiteurs-calciques',
    'alphabloquants',
    'moxonidine',
    'hypotension',
    'sprint',
  ],
  aliases: [
    'Tension artérielle',
    'Pression artérielle',
    'Hypertension',
    'HTA',
    'Cible tensionnelle',
    'Antihypertenseurs',
    'Hypotension',
    'Amlodipine',
    'Moxonidine',
    'Doxazosine',
    'SPRINT',
    'RIAS',
  ],
  linkedModules: ['core', 'aorticStenosis'],
  plainSummaryFr:
    "L'hypertension artérielle accompagne très souvent l'insuffisance cardiaque, mais une fois le ventricule gauche affaibli, les quatre piliers du traitement de fond abaissent tous la pression artérielle et deviennent généralement le traitement tensionnel principal. Aucune cible chiffrée n'a été testée par essai randomisé dans l'ICFER établie (SPRINT excluait les FEVG < 35 %). Certains antihypertenseurs sont contre-indiqués ou à éviter (vérapamil, diltiazem, moxonidine, alphabloquants pour l'HTA), tandis que des chiffres bas sans vertige ni malaise sont habituellement acceptés afin de conserver les doses protectrices.",
  sections: [
    {
      headingFr: 'Existe-t-il une cible de tension artérielle ?',
      bodyMarkdownFr: `- **ICFER établie : aucune cible testée par essai clinique.** Les recommandations ESC 2026 indiquent que les objectifs tensionnels précis chez les patients hypertendus atteints d'insuffisance cardiaque **n'ont pas été évalués dans des essais randomisés**, et renvoient pour l'hypertension générale aux recommandations ESC 2024 sur l'hypertension.
- **Consensus des autres référentiels :** une revue de 2026 (Helmy 2026) ne retrouve pas de cible propre à l'IC dans les recommandations ESC 2021, américaines 2022, américaines HTA 2025 (< 130/80 mmHg pour les adultes en général) ni britanniques NICE.
- **Recommandations ESC 2024 sur l'hypertension (texte intégral) :**
  - Leur cible générale est une pression systolique de **120–129 mmHg si bien tolérée (Classe I, A)**, sinon « aussi basse que raisonnablement tolérable ». L'objectif diastolique de 70–79 mmHg est seulement **Classe IIb, C**. Des cibles plus souples sont admises à partir de 85 ans ou en cas d'hypotension orthostatique symptomatique, de fragilité ou d'espérance de vie limitée.
  - Dans le texte consacré à l'insuffisance cardiaque, elles étendent cette plage (120–129 / 70–79 mmHg) à l'**insuffisance cardiaque symptomatique** de tout type, en traitant à partir d'une mesure confirmée supérieure à 130/80 mmHg. Il s'agit toutefois de **texte narratif et non d'une recommandation gradée spécifique à l'ICFER**, et le document renvoie aux recommandations ESC sur l'IC.
  - Elles précisent que de nombreux patients ICFER sous traitement optimal ont une pression **inférieure à 120/70 mmHg** et qu'il ne faut **pas** diminuer leur traitement pour autant tant que cela ne provoque pas de symptômes.
  - Elles introduisent une catégorie « pression artérielle élevée » (120–139 systolique et/ou 70–89 diastolique) et considèrent toute cardiopathie établie, dont l'IC, comme un risque suffisant pour traiter dès 130/80 mmHg.
  - Un article pédagogique du Conseil de l'ESC (*CardioPractice* 2025, opinion d'auteurs) rappelle que dans les études observationnelles d'IC, une pression basse était associée à un pronostic moins bon, incitant à la prudence avant d'appliquer mécaniquement cette cible.
- **Pourquoi l'essai SPRINT ne tranche pas la question :** SPRINT (9 361 patients) a montré que viser environ 120 mmHg plutôt que 140 mmHg réduisait les événements cardiaques (HR 0,75) et les décès (HR 0,73), mais il **excluait** les personnes ayant eu une IC symptomatique dans les 6 mois précédents ou une **FEVG < 35 %**, et le bras intensif s'accompagnait de plus d'hypotensions, de syncopes et d'insuffisances rénales aiguës.
- **Prévention et stade B : cible < 130 mmHg.** Les recommandations ESC 2026 recommandent un contrôle strict avec une **pression systolique < 130 mmHg** chez les personnes hypertendues ou en **stade B** (dysfonction VG asymptomatique) afin de réduire le risque d'insuffisance cardiaque (**Classe I, A** ; voir *Dysfonction ventriculaire asymptomatique (stade B)*).`,
    },
    {
      headingFr: 'Quels médicaments utiliser ou éviter ?',
      bodyMarkdownFr: `**En priorité, les quatre piliers de l'insuffisance cardiaque.** Dans l'ICFER, l'hypertension se traite d'abord avec le traitement de fond de l'IC, qui abaisse la tension ; une fois les quatre classes instaurées et titrées, une hypertension mal contrôlée devient rare (ESC 2026). À eux seuls, les iSGLT2 réduisent la systolique d'environ 2 mmHg (Helmy 2026 ; voir *Les médicaments de l'insuffisance cardiaque (4 piliers)*).

| Médicament | Place dans l'ICFER | Source |
|---|---|---|
| **Amlodipine (*Amlor*), félodipine** | **Peuvent être ajoutées** si la pression reste élevée, en l'absence de surcharge hydrique. Effet neutre sur la survie (PRAISE, V-HeFT III) ; peuvent causer des œdèmes des chevilles | ESC 2026 ; Abdin 2025 |
| **Hydralazine + dinitrate d'isosorbide** | Patients s'identifiant comme Noirs sous traitement complet (Classe IIa) ; personnes ne pouvant recevoir ARNI, IEC ni ARA2 (Classe IIb) | ESC 2026 |
| **Vérapamil, diltiazem** | **Contre-indiqués** (diminuent la force de contraction cardiaque) | ESC 2026 ; NICE NG106 |
| **Moxonidine** (antihypertenseur central) | **Contre-indiquée** : surmortalité dans un essai arrêté prématurément (5,5 % contre 3,4 %) | ESC 2026 ; Abdin 2025 |
| **Alphabloquants** (ex. doxazosine) | **Non recommandés pour l'hypertension** ; risque d'IC environ doublé dans le bras doxazosine d'ALLHAT. Une prescription pour la prostate peut être poursuivie si la tension le permet | ESC 2026 ; Abdin 2025 |
| **Minoxidil** | Non recommandé | Abdin 2025 |
| **Dihydropyridines à action brève** (ex. nifédipine immédiate) | À éviter | NICE NG106 |

Dans la section hypertension des recommandations ESC 2026, les mentions « contre-indiqué » et « non recommandé » figurent dans le texte narratif plutôt que dans des lignes de classe numérotées (les classes américaines n'ont pas pu être vérifiées dans le texte original).

**Ce qu'ajoutent les recommandations ESC 2024 sur l'hypertension :**

- Leur tableau 27 (maladies cardiaques) retient pour l'ICFER symptomatique les mêmes quatre piliers (IEC/ARA2 ou ARNI, bêtabloquant, ARM, iSGLT2) en **Classe I, A**.
- Elles indiquent (sans classe) que vérapamil et diltiazem ne doivent pas être utilisés dans l'IC ni associés à un bêtabloquant.
- **La moxonidine n'est pas mentionnée** dans le texte principal, et les alphabloquants n'y apparaissent pas comme mise en garde spécifique à l'IC (les annexes de contre-indications n'ont pas été lues) ; les mises en garde propres à l'ICFER ci-dessus s'appuient donc sur l'ESC 2026 IC et le consensus d'Abdin (2025). Pour l'hypertension résistante en général, elles proposent la spironolactone (*Aldactone*) en premier (IIa, B), puis d'autres ajouts (IIa, B) sans mention particulière pour l'IC dans ce tableau.

**Une hypertension difficile à contrôler** doit faire rechercher une cause secondaire, notamment un hyperaldostéronisme primaire, une sténose des artères rénales ou un **syndrome d'apnées obstructives du sommeil (SAOS)** (ESC 2026 ; voir *Apnée du sommeil et insuffisance cardiaque*). Les mesures hygiéno-diététiques (activité physique, poids, réduction du sel et de l'alcool, arrêt du tabac) restent utiles dans tous les cas.`,
    },
    {
      headingFr: 'Quand la tension artérielle est basse (hypotension)',
      bodyMarkdownFr: `- **Accepter des chiffres bas sans symptômes.** Les recommandations ESC 2026 soulignent qu'une hypotension asymptomatique doit être acceptée dans l'ICFER afin de maintenir les doses cibles des traitements de fond.
- **Fréquence :** l'hypotension concerne environ 10 à 15 % des patients ICFER. Dans PARADIGM-HF, une hypotension a été signalée chez 13,4 % des patients sous sacubitril/valsartan (*Entresto*), mais une systolique < 90 mmHg avec symptômes chez seulement **2,7 %** (Cautela 2020). Les grands essais excluaient toutefois les patients ayant une systolique < 95–100 mmHg à l'entrée (Helmy 2026).
- **Ordre pratique proposé par les experts en cas de symptômes** (Cautela 2020 — toujours géré par votre médecin ou cardiologue, jamais seul) :
  1. Avec une systolique ≥ 100 mmHg et sans symptôme, ne pas réduire les médicaments de l'IC.
  2. En cas de vertiges ou d'étourdissements, arrêter d'abord les antihypertenseurs n'apportant pas de bénéfice démontré dans l'IC (amlodipine, moxonidine, alphabloquants).
  3. Réduire ensuite le diurétique de l'anse s'il n'y a pas de surcharge hydrique.
  4. N'ajuster qu'en dernier recours les piliers de l'IC, au cas par cas, en touchant à l'ARM en dernier ; prendre l'avis d'un cardiologue spécialisé plutôt que d'arrêter des médicaments de Classe I.
- **Consensus HFA 2025 (Skouri 2025) :** rappelle que la baisse tensionnelle sous traitement de fond est généralement modérée et asymptomatique, et met en garde contre des réductions ou arrêts prématurés.
- **NICE NG106 :** conseille de contrôler la pression artérielle avant et après chaque augmentation de dose, les chutes liées à l'hypotension orthostatique étant une cause fréquente d'hospitalisation chez les patients âgés (voir *Médicaments : mode d'action, effets secondaires et bilans sanguins* pour les conseils d'horaires de prise).

### Une tension basse est-elle une cause de risque ou le reflet d'un cœur plus faible ?

Dans l'insuffisance cardiaque, les personnes ayant une pression basse évoluent en moyenne moins bien — à l'inverse de la population générale :

| Étude | Population | Constat principal |
|---|---|---|
| **Seidu 2024** (méta-analyse) | 43 études observationnelles, 120 643 patients IC | Une pression systolique initiale basse (< 130, 120 ou 110 mmHg) tendait vers un pronostic moins favorable ; une pression plus haute n'était pas associée à un surrisque (résultats non séparés pour l'ICFER) |
| **Li 2025** (données poolées d'essais) | 28 406 patients dans 8 essais, mesures répétées | Dans l'ICFER, une systolique basse s'associait à environ +70 % de décès cardiovasculaires ou hospitalisations pour IC, sans surrisque pour les pressions hautes (courbe en « J »). En FEVG modérément réduite ou préservée, courbe en « U » |
| **DAPA-HF selon la pression** (Serenelli 2020) | 4 744 patients ICFER | Risque maximal sous 110 mmHg, mais la dapagliflozine (*Forxiga*) restait tout aussi efficace (HR 0,76). Baisse tensionnelle moyenne de ~2,5 mmHg seulement (~1,5 mmHg de plus que placebo sous 110 mmHg, où la pression a légèrement monté dans les deux bras) |
| **PARADIGM-HF selon la pression** (Böhm 2017) | 8 399 patients ICFER | Mortalité maximale sous 110 mmHg. Le bénéfice du sacubitril/valsartan sur l'énalapril était similaire à tous les niveaux (HR 0,88 sous 110 mmHg), avec plus d'hypotensions symptomatiques sous 110 mmHg (25,5 % contre 13,7 %) |

- **Interprétation dominante :** une pression basse est surtout un *marqueur* d'un cœur qui pompe moins, plutôt que la cause directe du risque (lecture retenue par les auteurs de DAPA-HF ; ceux de PARADIGM-HF restent plus nuancés).
- **Conséquence clinique :** les médicaments gardant toute leur efficacité à basse pression, ces analyses renforcent le conseil de ne pas réduire les traitements de fond devant des chiffres bas sans symptômes.
- **Limites :** il s'agit d'analyses observationnelles ou post hoc (Seidu 2024 et Li 2025 lus en résumé seul) ; aucun essai n'a testé l'intérêt de faire remonter la tension.`,
    },
    {
      headingFr: 'Cas particulier du rétrécissement aortique (et incertitudes)',
      bodyMarkdownFr: `Un rétrécissement aortique ajoute un obstacle fixe à l'éjection. L'ancien enseignement déconseillait les vasodilatateurs par crainte d'une chute tensionnelle brutale ; les recommandations actuelles sont nettement plus nuancées (Basile 2021 ; ACC/AHA 2020).

**Ce que disent les recommandations :**

- **ACC/AHA 2020 :** traiter l'hypertension dans le rétrécissement aortique en **commençant à faible dose puis en titrant progressivement (Classe 1, B-NR)**. Les craintes d'une chute du débit cardiaque ne se sont pas confirmées, mais les **diurétiques peuvent réduire le volume d'éjection**, surtout si le ventricule est petit.
- **ESC/EACTS 2025 :** privilégie les **IEC ou ARA2**, augmentés prudemment pour éviter une hypotension symptomatique.
- **ESC 2024 hypertension :** en cas de valvulopathie sévère avec IC, mêmes seuil (> 130/80) et cible (120–129/70–79 si tolérée) ; dans les formes légères à modérées, évaluation préalable du risque cardiovasculaire global. Les IEC/ARA2 sont préférés aux inhibiteurs calciques type amlodipine, avec ajout d'un bêtabloquant si la pression reste > 140/90 (ligne combinée sténose et fuite aortiques : **Classe IIa, C**).
- **ESC 2026 IC :** les médicaments de l'IC **peuvent être utilisés avec prudence** dans le rétrécissement aortique sans retarder le geste valvulaire si la sténose est sévère et symptomatique (le texte n'aborde pas spécifiquement la sténose modérée). Après TAVI chez des patients avec IC, la dapagliflozine a réduit de 28 % à 1 an les décès ou aggravations d'IC (essai DapaTAVI).

**Données d'études :**

- **RIAS (2015)** (100 patients avec sténose modérée ou sévère asymptomatique, ~80 % modérée, **FEVG > 50 %**) : le ramipril a réduit la masse VG par rapport au placebo (écart de 8,4 g), a été bien toléré et n'a pas significativement abaissé la tension (effectif trop faible pour les événements cliniques).
- **Guan (2023) :** méta-analyse surtout observationnelle et à FEVG préservée montrant une mortalité plus faible sous IEC/ARA2 après remplacement valvulaire, sans différence sans remplacement.
- **Sacubitril/valsartan (ARNI) :** données très limitées, aucune étude propre au rétrécissement aortique (Basile 2021 ; Guan 2023).
- **Inhibiteurs calciques :** une revue (Basile 2021) les déconseille sur la foi d'une seule étude observationnelle sans préciser la classe exacte — ce qui diverge des recommandations IC autorisant amlodipine ou félodipine et n'a pas été testé en essai randomisé.
- **Cible de 130–139 / 80–90 mmHg :** suggérée par Basile (2021) à partir de sténoses légères à modérées à FEVG préservée ; ce n'est **pas** une cible d'ICFER.

**Effet de la tension sur la lecture de l'ETT :** une pression artérielle élevée peut faire **sous-estimer** la sévérité d'un rétrécissement aortique. Elle doit donc être mesurée lors de chaque échocardiographie, et l'ACC/AHA recommande de l'équilibrer avant de classer une sténose suspectée à bas gradient (la charge combinée valvulaire et artérielle s'appelle « impédance valvulo-artérielle », sans seuil fourni dans la source ; voir *Rétrécissement aortique avec FEVG réduite*).

### Ce qui reste incertain

- La valeur optimale exacte de pression artérielle dans l'ICFER établie (l'extension narrative ESC 2024 à 120–129 mmHg et l'absence de cible testée dans l'ESC 2026 reflètent toutes deux cette absence d'essai randomisé dédié).
- Le bénéfice ou le risque d'une baisse tensionnelle intensive lorsque coexistent ICFER et rétrécissement aortique modéré.
- Les classes exactes de recommandation des textes américains HTA/IC et les tableaux annexes de contre-indications de l'ESC 2024 HTA (non consultés).`,
    },
  ],
  relatedArticleSlugs: [
    'maladies-associees',
    'medicaments-insuffisance-cardiaque',
    'medicaments-effets-secondaires-suivi',
    'stenose-aortique-fevg-reduite',
    'dysfonction-vg-asymptomatique-stade-b',
    'confirmer-la-cause-dysfonction-vg',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'sel-et-liquides-insuffisance-cardiaque',
    'questions-equipe-cardiologie',
    'recommandations-comparees-esc-us-nice',
    'essais-cliniques-cles',
    'comprendre-le-diagnostic',
  ],
  sources: [
    { label: 'Recommandations ESC 2026 (pression artérielle et stade B)', detail: "Absence de cible testée dans l'ICFER, traitements contre-indiqués, cible < 130 mmHg en stade B et prudence dans le RAo" },
    { label: "Recommandations ESC 2024 sur l'hypertension et ESC CardioPractice (2025)", detail: 'Cible générale 120–129 mmHg, tolérance sous 120/70 et sections cardiopathies/valves' },
    { label: 'SPRINT (NEJM 2015) et Helmy et al. (2026)', detail: "Exclusions de l'essai SPRINT (FEVG < 35 %, IC récente) et revue des cibles tensionnelles" },
    { label: 'Abdin (2025), Cautela (2020), Skouri / HFA (2025) et NICE NG106', detail: "Médicaments aggravant l'IC, conduite pratique en cas d'hypotension et surveillance tensionnelle" },
    { label: 'Seidu (2024), Li (2025), Serenelli (DAPA-HF 2020) et Böhm (PARADIGM-HF 2017)', detail: 'Courbes en J/U et maintien du bénéfice des traitements de fond en dessous de 110 mmHg' },
    { label: 'RIAS (2015), Basile (2021), Guan (2023), ACC/AHA 2020 et ESC/EACTS 2025', detail: 'Hypertension artérielle associée au rétrécissement aortique et effet sur la mesure ETT' },
  ],
  disclaimerType: 'medical',
};
