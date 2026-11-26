import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'comprendre-le-diagnostic',
  sourceWikiPath: 'wiki/topics/understanding-the-diagnosis.md',
  titleFr: 'Comprendre le diagnostic',
  category: 'diagnostic',
  readingTier: 'essential',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'vue-ensemble',
    'cardiomyopathie-ischémique',
    'icfer',
    'hfref',
    'plan-traitement',
    'pronostic',
    'fevg',
  ],
  aliases: [
    'Commencer ici',
    "Vue d'ensemble",
    'Cardiomyopathie ischémique FEVG 35 %',
    'Diagnostic expliqué',
    'Ischaemic cardiomyopathy',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Si votre compte rendu mentionne une cardiomyopathie ischémique avec une FEVG réduite (par exemple 35 %) et un ventricule gauche dilaté, cette page vous aide à traduire chaque terme simplement. Elle explique comment votre parcours de soins se construit par étapes, en commençant par les médicaments de fond. Vous y trouverez aussi des repères réalistes sur la récupération et l'évolution à discuter avec votre cardiologue.",
  keyTakeawaysFr: [
    "Une FEVG à 35 % signifie que votre cœur éjecte environ un tiers de son sang à chaque battement : ce chiffre peut évoluer sous traitement et varie selon l'examen utilisé.",
    "Votre prise en charge commence presque toujours par quatre classes de médicaments de fond, augmentées progressivement, avant d'envisager un dispositif ou un geste coronaire.",
    "Une cicatrice d'infarctus ne disparaît pas, mais les traitements actuels réduisent nettement les symptômes et les hospitalisations et aident le reste du muscle.",
    "Même lorsque vous vous sentez bien, un suivi régulier (pesée, bilans, consultations) reste essentiel ; en cas d'aggravation brutale, appelez le 15, le 112 ou le 114 par SMS.",
  ],
  sections: [
    {
      headingFr: 'Décrypter les mots du diagnostic',
      bodyMarkdownFr: `Ce tableau traduit les termes que vous pouvez lire sur un compte rendu de cardiologie :

| Expression | Signification | Pour approfondir |
|---|---|---|
| **Ischémique** | La cause est un manque d'apport sanguin : une maladie coronarienne et, le plus souvent, un ou plusieurs infarctus du myocarde | [La cardiomyopathie ischémique](/library?article=cardiomyopathie-ischemique) |
| **Cardiomyopathie** | Maladie du muscle cardiaque lui-même ; ici, un muscle affaibli et en partie cicatriciel | [La cardiomyopathie ischémique](/library?article=cardiomyopathie-ischemique) |
| **FEVG réduite (35 %)** | Le ventricule gauche éjecte environ 35 % de son sang à chaque battement. Cela correspond à une insuffisance cardiaque à FEVG réduite (ICFER, *HFrEF*), largement en dessous des 50 % considérés comme seuil de normalité | [La fraction d'éjection (FEVG)](/library?article=fraction-dejection) |
| **Ventricule gauche dilaté** | La principale cavité de pompage s'est étirée et élargie avec le temps pour compenser | [La cardiomyopathie ischémique](/library?article=cardiomyopathie-ischemique) |

**Deux points qui surprennent souvent :**

- **35 % n'est pas un verdict figé.** Cette valeur peut évoluer sous traitement, et deux examens d'imagerie différents (échocardiographie transthoracique — ETT — et IRM cardiaque) peuvent donner des chiffres distincts pour le même cœur. Il faut toujours comparer deux examens réalisés avec la même technique.
- **35 % est un repère de décision.** Après au moins 3 mois de traitement médical optimisé, une FEVG restant inférieure ou égale à 35 % amène souvent votre cardiologue à discuter d'un défibrillateur automatique implantable (DAI) préventif ou d'une thérapie de resynchronisation cardiaque (CRT).`,
    },
    {
      headingFr: 'Comment le traitement se construit par étapes',
      bodyMarkdownFr: `La plupart des plans de soins suivent progressivement cet ordre, que votre équipe adapte à votre situation :

1. **Les médicaments de fond en premier.** Quatre classes de médicaments (les « 4 piliers ») sont instaurées tôt puis augmentées par paliers toutes les 1 à 2 semaines : IEC ou ARNI (sacubitril/valsartan — *Entresto*), bêtabloquant, ARM (antagoniste des récepteurs minéralocorticoïdes) et iSGLT2 (gliflozine). Des diurétiques de l'anse sont ajoutés si vous retenez de l'eau et du sel (voir *Les médicaments de l'insuffisance cardiaque (4 piliers)*).
2. **Une réévaluation vers 3 mois.** Votre cardiologue contrôle de nouveau votre FEVG et votre électrocardiogramme (ECG) pour mesurer l'effet des traitements (voir *Insuffisance cardiaque à FEVG améliorée (HFimpEF)*). Pendant cette phase d'attente, un gilet défibrillateur portable (LifeVest) peut parfois être envisagé (voir *Le gilet défibrillateur portable (LifeVest)*).
3. **Les dispositifs implantables, si la FEVG reste inférieure ou égale à 35 %.** Un DAI préventif est alors fortement recommandé lorsque la cause est ischémique. Une resynchronisation (CRT) peut y être associée si l'ECG montre un décalage électrique entre les deux ventricules (voir *Dispositifs cardiaques implantés : DAI et CRT*).
4. **Les artères coronaires, discutées en équipe médico-chirurgicale (Heart Team).** Si une intervention sur les artères est envisagée pour améliorer le pronostic dans une atteinte étendue, le pontage aorto-coronarien est généralement privilégié. Les stents (angioplastie) n'ont pas démontré de gain de survie dans un cœur affaibli, mais les deux options peuvent soulager une douleur thoracique d'effort (angor) (voir *Revascularisation coronaire : pontage et stents*).
5. **Des traitements complémentaires si besoin.** Selon vos symptômes, votre fréquence cardiaque ou vos bilans (par exemple une carence en fer), d'autres options existent : ivabradine, digoxine ou digitoxine, vériciguat, fer intraveineux ou télésurveillance à domicile (voir *Au-delà des 4 piliers : traitements additionnels et récents*).
6. **Un suivi continu au quotidien.** La pesée régulière, une alimentation modérée en sel, la réadaptation cardiaque (SMR cardiovasculaire), les vaccinations recommandées et des consultations régulières (au moins tous les 6 mois) avec votre cardiologue, votre médecin traitant et, selon votre parcours, une infirmière insuffisance cardiaque ou IPA font pleinement partie du traitement (voir *Vivre au quotidien avec une insuffisance cardiaque*).

Les recommandations européennes résument ainsi les trois grands objectifs : **vivre plus longtemps, éviter les hospitalisations et se sentir mieux**. N'hésitez pas à dire à votre équipe ce qui compte le plus pour vous dans votre quotidien.`,
    },
    {
      headingFr: 'Des attentes réalistes au quotidien',
      bodyMarkdownFr: `- **Les traitements modernes font une vraie différence.** Associer les quatre piliers réduit fortement le risque d'hospitalisation et protège votre cœur sur le long terme, bien davantage que les traitements utilisés il y a vingt ans.
- **Une remontée complète de la FEVG est moins fréquente en cas de cause ischémique.** Une cicatrice d'infarctus ne retrouve pas sa capacité de contraction. Une amélioration partielle reste toutefois possible, et lorsqu'elle survient, elle est de bon augure.
- **Personne ne peut prédire l'avenir d'une personne en particulier.** La maladie est sérieuse, mais avec un traitement bien suivi et une hygiène de vie adaptée, de nombreuses personnes mènent une vie riche et active.
- **Se sentir bien ne signifie pas arrêter le suivi.** Même lorsque vos symptômes sont discrets ou absents, un risque d'aggravation ou de trouble du rythme persiste : c'est la raison pour laquelle vos traitements et vos bilans réguliers restent indispensables, sans que cela constitue une prédiction négative pour vous.

Pour préparer vos consultations ou explorer les autres volets de votre suivi, vous pouvez consulter les articles liés ci-dessous, notamment *Examens et chiffres*, *Médicaments : mode d'action, effets secondaires et bilans sanguins*, *Réadaptation cardiaque (SMR) et activité physique*, *Santé émotionnelle, anxiété et dépression*, *Permis de conduire* et *Vivre avec une insuffisance cardiaque en France*.

En cas d'aggravation brutale (essoufflement intense au repos, douleur thoracique, malaise ou perte de connaissance), appelez immédiatement le **15 (SAMU)** ou le **112** (ou le **114** par SMS pour les personnes sourdes ou malentendantes).`,
    },
    {
      headingFr: "Données d'études, recommandations et évolutions récentes (au 25 novembre 2026)",
      depth: 'evidence',
      bodyMarkdownFr: `- **Ampleur estimée de la quadrithérapie.** Une modélisation (Vaduganathan, 2020) estime que l'association des quatre piliers réduit d'environ 60 % les décès cardiovasculaires ou les hospitalisations pour insuffisance cardiaque par rapport à une bithérapie plus ancienne, soit plusieurs années de vie supplémentaires en moyenne pour un patient d'âge moyen. Il s'agit d'une estimation modélisée et non directement observée dans un seul essai.
- **Récupération de la FEVG et pronostic historique.** Dans l'essai **STICH**, seuls environ 2 à 6 % des patients ayant une cardiomyopathie ischémique avec FEVG inférieure ou égale à 35 % ont retrouvé une FEVG normale, et environ 18 % ont gagné au moins 10 points en deux ans (revue HFimpEF ; analyse de normalisation dans STICH). Dans **STICHES** (patients inclus entre 2002 et 2007, avant les ARNI, les iSGLT2 et l'usage large des dispositifs), la majorité des participants des deux groupes étaient décédés à 10 ans ; les risques absolus sont probablement plus bas avec la prise en charge actuelle.
- **Risque de mort subite et débat sur le DAI.** Dans l'analyse poolée **PROFID** après infarctus, le taux de mort subite à 3 ans sans DAI était d'environ 3,4 % lorsque la FEVG était inférieure ou égale à 35 %, contre 0,9 % au-dessus de 35 %, mais la FEVG seule identifiait mal *quelle* personne précise était exposée. Le bénéfice additionnel du DAI en complément de la quadrithérapie moderne est directement évalué par l'essai **PROFID-EHRA** (fin estimée en novembre 2027). Les recommandations **ESC 2026** maintiennent une recommandation de **Classe I** pour le DAI préventif dans les causes ischémiques (FEVG ≤ 35 % après ≥ 3 mois de traitement optimisé) et indiquent que la LifeVest « peut être envisagée » en attente.
- **Évolution des classifications en 2026.**
  - Les **recommandations ESC (août 2026)** redéfinissent l'ICFER comme une FEVG inférieure à 50 % et suppriment la catégorie « modérément réduite ». Des brochures plus anciennes affichent donc d'autres seuils.
  - La **Deuxième définition universelle de l'insuffisance cardiaque (juin 2026, AHA/ACC/ESC/WHF)** — relue par la Société Française de Cardiologie (SFC) — est un consensus de terminologie distinct des recommandations thérapeutiques. Elle regroupe l'IC en FEVG réduite, préservée ou améliorée sans fixer de seuil chiffré de FEVG ni de peptides natriurétiques, conserve les stades A à D, distingue amélioration, rémission et récupération complète, qualifie l'expression « insuffisance cardiaque stable » d'abus de langage, et recense 18 groupes étiologiques avec la **cardiomyopathie ischémique en premier**.
- **Traitements additionnels et viabilité myocardique.** La digitoxine a réduit les décès ou hospitalisations pour IC dans **DIGIT-HF** (2025), renforçant la place des digitaliques dans l'ESC 2026. Le vériciguat n'a pas atteint son critère principal chez les patients stables dans **VICTOR** (*Lancet* 2025). La finérénone dans l'IC avec FEVG < 40 % est évaluée dans **FINALITY-HF** (attendu vers 2028). Enfin, l'analyse de viabilité de **REVIVED-BCIS2** a remis en question la sélection par viabilité : l'étendue du muscle « hibernant » n'a pas permis d'identifier les patients tirant bénéfice d'une angioplastie par stents.`,
    },
  ],
  relatedArticleSlugs: [
    'cardiomyopathie-ischemique',
    'fraction-dejection',
    'medicaments-insuffisance-cardiaque',
    'dispositifs-cardiaques-dai-crt',
    'revascularisation-pontage-stents',
    'insuffisance-cardiaque-fevg-amelioree',
    'vivre-avec-insuffisance-cardiaque',
    'glossaire-cardiologie',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'recommandations-comparees-esc-us-nice',
    'maladies-associees',
    'cholesterol-et-prevention-secondaire',
    'occlusion-coronaire-chronique-cto',
    'stenose-aortique-fevg-reduite',
    'thrombus-vg-et-anticoagulants',
    'anevrisme-ventricule-gauche',
    'efx-strain-troponine-et-imagerie-cardiaque',
    'insuffisance-cardiaque-avancee-stade-d',
    'traitements-additionnels-nouveaux',
    'gilet-defibrillateur-portable',
    'dysfonction-vg-asymptomatique-stade-b',
    'confirmer-la-cause-dysfonction-vg',
    'tension-arterielle-insuffisance-cardiaque',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'vivre-avec-insuffisance-cardiaque-en-france',
    'examens-et-chiffres',
    'medicaments-effets-secondaires-suivi',
    'readaptation-cardiaque-et-activite-physique',
    'depression-et-sante-emotionnelle',
    'soins-de-support-et-anticipation',
    'regles-conduite-automobile',
  ],
  sources: [
    { label: 'Cleveland Clinic — Ischemic Cardiomyopathy', detail: 'Définition et mécanisme de la cardiomyopathie ischémique' },
    { label: 'Guide patient ESC 2026', detail: 'Objectifs du traitement et présentation vulgarisée' },
    { label: "Recommandations ESC 2026 sur l'insuffisance cardiaque", detail: 'Définitions, séquence thérapeutique et seuils de décision' },
    { label: 'British Heart Foundation (BHF)', detail: 'Repères sur le pronostic et la vie avec une insuffisance cardiaque' },
    { label: 'Vaduganathan et al. (2020)', detail: 'Modélisation du bénéfice vie entière de la quadrithérapie' },
    { label: 'Essai STICHES (suivi à 10 ans)', detail: 'Évolution à long terme dans la période 2002-2007' },
    { label: 'Essai REVIVED-BCIS2 et analyse de viabilité (2023)', detail: 'Angioplastie par stents et remise en question de la viabilité' },
    { label: 'Revue HFimpEF', detail: 'Attentes en matière de récupération et de rechute de la FEVG' },
    { label: 'Analyse poolée PROFID et protocole PROFID-EHRA (2026)', detail: "Taux de mort subite selon la FEVG et statut de l'essai en cours" },
    { label: 'Analyse de normalisation de la FEVG dans STICH', detail: 'Rareté de la normalisation complète dans la cardiomyopathie ischémique' },
    { label: 'DIGIT-HF (NEJM 2025), VICTOR (Lancet 2025) et registre FINALITY-HF', detail: 'Données récentes sur la digitoxine, le vériciguat et la finérénone' },
    { label: "Deuxième définition universelle de l'insuffisance cardiaque (2026)", detail: "Consensus AHA/ACC/ESC/WHF (texte intégral) : groupes de FEVG sans seuils chiffrés, stades, trajectoires, 18 groupes étiologiques et critique du terme « insuffisance cardiaque stable »" },
  ],
  disclaimerType: 'medical',
};
