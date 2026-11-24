import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'medicaments-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/topics/heart-failure-medicines.md',
  titleFr: "Les médicaments de l'insuffisance cardiaque (4 piliers)",
  category: 'traitements',
  asOf: '2026-11-24',
  confidence: 'high',
  volatility: 'warm',
  tags: [
    'traitement-de-fond',
    'quatre-piliers',
    'arni',
    'iec',
    'bêtabloquant',
    'arm',
    'isglt2',
    'diurétiques',
    'titration',
  ],
  aliases: [
    'GDMT',
    'Traitement de fond',
    'Quatre piliers',
    'Quadrithérapie',
    'Médicaments ICFER',
    'Traitement médical optimal',
    'IEC',
    'ARNI',
    'Entresto',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Lorsque le cœur pompe moins efficacement (insuffisance cardiaque à FEVG réduite, ou ICFER), quatre grandes familles de médicaments ont chacune démontré qu'elles aident à vivre plus longtemps et à éviter les hospitalisations. Elles agissent de manière complémentaire : on les introduit généralement tôt, puis on augmente les doses palier par palier (titration) jusqu'à la dose cible ou la dose maximale tolérée. Des diurétiques sont ajoutés si nécessaire pour évacuer l'excès d'eau et soulager l'essoufflement ou les œdèmes. Ces traitements sont destinés à être poursuivis au long cours, même lorsque les symptômes disparaissent ou que la FEVG s'améliore.",
  sections: [
    {
      headingFr: 'Les quatre classes du traitement de fond',
      bodyMarkdownFr: `Les recommandations européennes ESC 2026 qualifient ces quatre classes de traitement de fond (*foundational medical therapy*). Toutes bénéficient d'une recommandation de **Classe I** dans l'insuffisance cardiaque à FEVG réduite (ICFER, *HFrEF*).

| Classe thérapeutique | Exemples cités (DCI et noms usuels en France) | Recommandation ESC 2026 |
|---|---|---|
| **IEC ou ARNI** | IEC : ramipril (*Triatec*), périndopril (*Coversyl*), énalapril (*Renitec*), lisinopril (*Zestril*) ; ARNI : sacubitril/valsartan (*Entresto*) | **Classe I (A)**. Passage d'un IEC ou ARA2 à l'ARNI : **Classe I (B1)**. ARA2 (ex. candésartan *Atacand*, valsartan *Tareg*) uniquement en cas d'intolérance aux IEC et à l'ARNI |
| **Bêtabloquant** | bisoprolol (*Cardensiel*), carvédilol (*Kredex*), nébivolol (*Temerit*), métoprolol succinate (*Selozok*) | **Classe I (A)** chez les patients symptomatiques stables. Également traitement de première intention de l'angor dans l'ICFER |
| **ARM** (antagoniste des récepteurs minéralocorticoïdes) | spironolactone (*Aldactone*), éplérénone (*Inspra*) | **Classe I (A)**, quelle que soit la FEVG |
| **iSGLT2** (inhibiteur du SGLT2 / gliflozine) | dapagliflozine (*Forxiga*), empagliflozine (*Jardiance*) | **Classe I (A)**, quelle que soit la FEVG |

Le mode d'action de chaque famille, ses effets secondaires et les bilans sanguins de suivi sont détaillés dans l'article *Médicaments : mode d'action, effets secondaires et bilans sanguins*.

**Comparaisons internationales :**
- Les recommandations américaines (ACC/AHA/HFSA 2022) placent l'ARNI en première intention devant les IEC.
- Les recommandations britanniques NICE NG106 (mises à jour en 2025) proposent d'introduire ensemble un IEC, un bêtabloquant, un ARM et un iSGLT2, puis d'envisager le remplacement de l'IEC par un ARNI si des symptômes persistent aux doses maximales tolérées des quatre classes. Elles ne fixent pas d'ordre imposé et précisent qu'il n'est pas nécessaire d'atteindre la dose cible d'un médicament avant d'introduire le suivant. Voir aussi *Recommandations européennes (ESC), américaines et britanniques comparées*.

### Titration (augmentation progressive des doses)

- Les recommandations ESC 2026 préconisent d'augmenter les doses **au moins toutes les 1 à 2 semaines** vers les doses cibles des essais cliniques (**Classe I**).
- Les traitements doivent être maintenus à la dose maximale tolérée **même si les symptômes disparaissent ou si la FEVG s'améliore** (**Classe I**).
- Le plein effet clinique peut nécessiter plusieurs semaines de mise en place.

### Après une hospitalisation (essai STRONG-HF)

Dans l'essai **STRONG-HF**, 1 078 patients hospitalisés pour une insuffisance cardiaque aiguë (quelle que soit la FEVG) ont été randomisés. Augmenter les traitements jusqu'aux doses cibles recommandées dans les **2 semaines suivant la sortie**, avec quatre consultations de contrôle sur 2 mois, a réduit les décès ou réhospitalisations pour insuffisance cardiaque à 6 mois de **23,3 % à 15,2 %**. Les effets indésirables ont été plus fréquents (**41 % contre 29 %** au 90e jour), mais sans excès d'événements indésirables graves. Cet essai était conduit en ouvert, arrêté précocement et financé par l'industrie.

### Effets secondaires et adhésion

Les sources dédiées aux patients soulignent qu'il ne faut **jamais interrompre un médicament soi-même** en raison d'un effet secondaire sans en parler d'abord à votre médecin traitant, votre cardiologue, votre infirmière insuffisance cardiaque (ou IPA) ou votre pharmacien. Les ajustements progressifs de dose font partie intégrante du parcours.

### Accès en pratique réelle selon l'âge

Dans le registre suédois **SwedeHF** portant sur 27 430 patients atteints d'ICFER (2000-2018), l'utilisation de chaque classe médicamenteuse et des dispositifs diminuait avec l'âge. Par exemple, le recours aux ARM était de **54 % avant 70 ans** contre **35 % à 80 ans et plus**, et les patients plus âgés atteignaient moins souvent les doses cibles. Le registre ne permettait toutefois pas d'en déterminer les causes exactes.`,
    },
    {
      headingFr: 'Quelle est l’ampleur du bénéfice ?',
      bodyMarkdownFr: `Aucun essai clinique n'a randomisé directement la quadrithérapie complète face à l'ancienne bithérapie. L'estimation la plus citée provient d'une modélisation croisée d'essais cliniques (**Vaduganathan et al., *The Lancet* 2020**), combinant les résultats de **EMPHASIS-HF**, **PARADIGM-HF** et **DAPA-HF**.

En comparant une quadrithérapie complète (ARNI + bêtabloquant + ARM + iSGLT2) à l'ancien standard (IEC ou ARA2 + bêtabloquant) :

- **Décès cardiovasculaire ou première hospitalisation pour insuffisance cardiaque :** rapport de risque (HR) de **0,38**, soit une réduction relative d'environ **62 %**. Pris séparément : décès cardiovasculaire HR **0,50**, hospitalisation pour insuffisance cardiaque HR **0,32**, mortalité toutes causes HR **0,53**.
- **Effet absolu sur 3 ans :**
  - pour éviter un décès cardiovasculaire ou une hospitalisation pour insuffisance cardiaque, il faut traiter **4 à 6 patients** ;
  - pour éviter un décès, il faut traiter **8 à 16 patients**.
- **Années de vie supplémentaires projetées :**

| Âge | Années de vie supplémentaires projetées | Années supplémentaires sans décès CV ni hospitalisation pour IC |
|---|---|---|
| 55 ans | environ **6,3 ans** (17,7 contre 11,4 ans) | environ **8,3 ans** |
| 65 ans | environ **4,4 ans** | environ **6,3 ans** |
| 80 ans | environ **1,4 an** | environ **2,7 ans** |

**Limites importantes de cette estimation :**
- Il s'agit de **projections modélisées**, et non de résultats observés sur toute une vie.
- Le modèle suppose que les bénéfices se multiplient et perdurent à vie avec une observance parfaite.
- Les essais inclus portaient sur l'ICFER toutes causes confondues, et pas exclusivement sur la cardiomyopathie ischémique.
- Ces chiffres représentent des moyennes de population et non un pronostic individuel.`,
    },
    {
      headingFr: 'Les diurétiques (« médicaments pour éliminer l’eau »)',
      bodyMarkdownFr: `Les **diurétiques de l'anse** — principalement le furosémide (*Lasilix*) et le bumétanide (*Burinex*) — sont recommandés pour soulager les signes de congestion (essoufflement, œdèmes des chevilles ou des jambes), à une posologie ajustée à l'état hydrique (**Classe I** dans les recommandations ESC 2026).

Ce sont des traitements de **soulagement des symptômes** qui s'ajoutent aux quatre piliers sans les remplacer. La pesée quotidienne aide à repérer précocement une rétention d'eau (voir *Vivre au quotidien avec une insuffisance cardiaque*). Toute modification de dose doit suivre le plan convenu avec votre équipe médicale.`,
    },
    {
      headingFr: 'Médicaments additionnels pour des situations particulières',
      bodyMarkdownFr: `Les recommandations ESC 2026 listent plusieurs options complémentaires, envisagées en plus d'un traitement de fond déjà optimisé :

- **Ivabradine (*Procoralan*) :** FEVG ≤ 35 %, rythme sinusal et fréquence cardiaque de repos **> 70 battements/min** malgré le traitement maximal toléré (**Classe IIa**). L'autorisation européenne (AMM) retient le seuil de **≥ 75 battements/min**. Dans l'essai **SHIFT**, le bénéfice portait principalement sur la baisse des hospitalisations pour insuffisance cardiaque.
- **Digoxine (*Digoxine Nativelle*) ou digitoxine :** FEVG ≤ 40 % malgré un traitement optimal (**Classe IIa**, rehaussée en 2026). Dans **DIGIT-HF** (2025), la digitoxine a réduit les décès ou premières hospitalisations pour insuffisance cardiaque (HR **0,82**) ; le maintien de taux sanguins bas est essentiel.
- **Vériciguat (*Verquvo*) :** FEVG < 45 % malgré un traitement optimal (**Classe IIb**). Il a montré un bénéfice après une aggravation récente (**VICTORIA**). Chez les patients ambulatoires stables (**VICTOR**, *The Lancet* 2025), le critère principal n'a pas été réduit (HR **0,93**) ; la baisse des décès était un résultat secondaire nominal. L'AMM couvre les patients stabilisés après une décompensation récente.
  - Les preuves, effets secondaires et interactions de ces trois médicaments sont détaillés dans *Médicaments additionnels : ivabradine, digoxine/digitoxine et vériciguat*, et une vue d'ensemble figure dans *Au-delà des 4 piliers : traitements additionnels et récents*.
- **Finérénone (*Kerendia*) :** cet ARM non stéroïdien plus récent **ne remplace pas** la spironolactone ou l'éplérénone pour une FEVG autour de 35 %. Son essai dans l'insuffisance cardiaque (**FINEARTS-HF**) n'a inclus que des FEVG ≥ 40 %, et l'ESC 2026 désigne un ARM stéroïdien dans l'ICFER (voir *Finérénone, nouveaux ARM et chélateurs de potassium*).
- **Association hydralazine / dinitrate d'isosorbide :** patients se déclarant noirs avec FEVG ≤ 40 % (**Classe IIa**).
- **Position britannique (NICE NG106) :** mentionne l'ivabradine, l'association hydralazine + dérivé nitré (en cas d'intolérance aux IEC, ARNI et ARA2) et la digoxine (en cas d'ICFER sévère ou s'aggravant malgré un traitement optimisé), chacun sur avis spécialisé.
- **Fer intraveineux (carboxymaltose ferrique *Ferinject* ou dérisomaltose ferrique *Monofer*) :** dans l'ICFER symptomatique avec carence martiale :
  - améliore les symptômes et la qualité de vie (**Classe I**) et doit être envisagé pour réduire les hospitalisations pour insuffisance cardiaque (**Classe IIa**) ;
  - les recommandations ESC 2026 discutent une définition reposant sur un coefficient de saturation de la transferrine (CST) **< 20 %** ;
  - le fer doit être administré **par voie intraveineuse** : les comprimés de fer oral n'ont pas montré d'efficacité dans l'essai **IRONOUT-HF**. Voir *Carence en fer et fer intraveineux*.`,
    },
    {
      headingFr: 'Médicaments et maladie coronaire associée',
      bodyMarkdownFr: `Dans la cardiomyopathie ischémique, l'atteinte des artères coronaires et l'éventuel angor (angine de poitrine) sont traités en parallèle :

- **Angor :** les bêtabloquants constituent le traitement anti-angineux de première intention dans l'ICFER.
- **Médicaments à éviter :** les inhibiteurs calciques bradycardisants — **vérapamil (*Isoptine*)** et **diltiazem (*Tildiem*)** — doivent être évités dans l'ICFER. Les recommandations NICE ajoutent à la liste des médicaments à éviter les inhibiteurs calciques dihydropyridiniques à action courte.
- **Priorité thérapeutique :** les anti-angineux ne doivent pas se substituer au traitement de fond de l'insuffisance cardiaque.
- **Autres classes associées :** selon le profil individuel, une statine (et d'autres hypolipémiants), un antiagrégant plaquettaire (aspirine ou clopidogrel), un anticoagulant ou un antiarythmique peuvent être prescrits (voir *Cholestérol LDL, aspirine et prévention secondaire coronaire* et *Thrombus du ventricule gauche et anticoagulants*).

### Deux questions fréquentes liées au contexte

- **Dysfonction ventriculaire sans symptôme (stade B) :** les preuves des quatre piliers proviennent de patients ayant présenté des symptômes d'insuffisance cardiaque. Lorsque le ventricule gauche est affaibli sans qu'il n'y ait *jamais* eu de symptômes (stade B), les preuves issues des essais sont plus circonscrites : un IEC et un bêtabloquant, plus l'éplérénone après un infarctus du myocarde (ESC 2026). Voir *Dysfonction ventriculaire asymptomatique (stade B)*.
- **Tension artérielle :** aucune cible chiffrée de pression artérielle n'a été testée dans des essais dédiés à l'ICFER. Les quatre piliers sont prescrits pour leur effet protecteur direct sur le cœur et non pour traiter une hypertension, et certains antihypertenseurs sont à éviter dans l'ICFER. Voir *Tension artérielle et insuffisance cardiaque*.`,
    },
  ],
  relatedArticleSlugs: [
    'comprendre-le-diagnostic',
    'insuffisance-cardiaque-fevg-amelioree',
    'dispositifs-cardiaques-dai-crt',
    'revascularisation-pontage-stents',
    'vivre-avec-insuffisance-cardiaque',
    'essais-cliniques-cles',
    'interactions-complements-aliments-medicaments',
    'nutrition-et-complements-insuffisance-cardiaque',
    'medicaments-effets-secondaires-suivi',
    'carence-martiale-et-fer-iv',
    'maladies-associees',
    'recommandations-comparees-esc-us-nice',
    'traitements-additionnels-nouveaux',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'finerenone-et-nouveaux-arm',
    'stenose-aortique-fevg-reduite',
    'cholesterol-et-prevention-secondaire',
    'thrombus-vg-et-anticoagulants',
    'tension-arterielle-insuffisance-cardiaque',
    'dysfonction-vg-asymptomatique-stade-b',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 sur l’insuffisance cardiaque',
      detail: 'Tableau 5, titration, traitements additionnels, fer IV, anti-angineux, stade B et tension artérielle',
    },
    {
      label: 'Guide patient ESC 2026 sur l’insuffisance cardiaque',
      detail: 'Présentation grand public des quatre classes de fond et des diurétiques',
    },
    {
      label: 'Vaduganathan et al. (The Lancet, 2020)',
      detail: 'Modélisation du bénéfice sur la vie entière de la quadrithérapie (EMPHASIS-HF, PARADIGM-HF, DAPA-HF)',
    },
    {
      label: 'STRONG-HF (2022)',
      detail: 'Essai randomisé sur la titration rapide après hospitalisation pour insuffisance cardiaque aiguë',
    },
    {
      label: 'SwedeHF (EJHF, 2022)',
      detail: 'Registre suédois de 27 430 patients ICFER analysant la prescription selon l’âge',
    },
    {
      label: 'Recommandations ACC/AHA/HFSA 2022 et NICE NG106 (2025)',
      detail: 'Positions américaine (ARNI en première intention) et britannique (associations, add-ons, inhibiteurs calciques à éviter)',
    },
    {
      label: 'Essais SHIFT, DIGIT-HF, VICTOR, VICTORIA, FINEARTS-HF et IRONOUT-HF',
      detail: 'Données cliniques sur l’ivabradine, la digitoxine, le vériciguat, la finérénone et le fer oral ; RCP EMA Verquvo et rapport EMA Procoralan',
    },
    {
      label: 'British Heart Foundation et Cleveland Clinic',
      detail: 'Information patient sur la poursuite des traitements, la titration et le délai d’action',
    },
  ],
  disclaimerType: 'medical',
};
