import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'comprendre-le-diagnostic',
  sourceWikiPath: 'wiki/topics/understanding-the-diagnosis.md',
  titleFr: 'Comprendre le diagnostic',
  category: 'diagnostic',
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
    "Cette page décrypte le diagnostic de « cardiomyopathie ischémique avec FEVG réduite (35 %) et ventricule gauche dilaté ». Elle montre comment les différentes strates du traitement s'articulent (médicaments de fond, puis dispositifs et gestes coronaires, avec le suivi quotidien) et pose des repères réalistes sur la récupération et l'évolution. Chaque partie renvoie vers un article détaillé.",
  sections: [
    {
      headingFr: 'Décrypter les mots du diagnostic',
      bodyMarkdownFr: `Ce tableau traduit les termes que vous pouvez lire sur un compte rendu de cardiologie (sources : Cleveland Clinic, guide patient ESC et recommandations ESC 2026) :

| Expression | Signification | Pour approfondir |
|---|---|---|
| **Ischémique** | La cause est un manque d'apport sanguin : une maladie coronarienne et, le plus souvent, un ou plusieurs infarctus du myocarde | [La cardiomyopathie ischémique](/library?article=cardiomyopathie-ischemique) |
| **Cardiomyopathie** | Maladie du muscle cardiaque lui-même ; ici, un muscle affaibli et en partie cicatriciel | [La cardiomyopathie ischémique](/library?article=cardiomyopathie-ischemique) |
| **FEVG réduite (35 %)** | Le ventricule gauche éjecte environ 35 % de son sang à chaque battement. Cela correspond à une insuffisance cardiaque à FEVG réduite (ICFER, *HFrEF*) selon toutes les recommandations actuelles. La Deuxième définition universelle internationale de 2026 ne fixe pas de seuil chiffré de FEVG, mais 35 % est largement en dessous des 50 % qu'elle juge peu susceptibles d'être normaux | [La fraction d'éjection (FEVG)](/library?article=fraction-dejection) |
| **Ventricule gauche dilaté** | La principale cavité de pompage s'est étirée et élargie avec le temps | [La cardiomyopathie ischémique](/library?article=cardiomyopathie-ischemique) |

**Deux points qui surprennent souvent :**

- **35 % n'est pas un verdict figé.** Cette valeur peut évoluer sous traitement, et deux examens d'imagerie différents (échocardiographie transthoracique — ETT — et IRM cardiaque) peuvent donner des mesures distinctes pour le même cœur (analyse ETT vs IRM de REVIVED-BCIS2 ; revue HFimpEF).
- **35 % est un seuil de décision.** Les recommandations utilisent le critère « FEVG inférieure ou égale à 35 % après au moins 3 mois de traitement médical optimisé » pour discuter un défibrillateur automatique implantable (DAI) préventif ou une thérapie de resynchronisation cardiaque (CRT) (recommandations ESC 2026).`,
    },
    {
      headingFr: 'Comment le traitement se construit par étapes',
      bodyMarkdownFr: `La plupart des plans de soins décrits dans les sources (recommandations ESC 2026, guide patient ESC, REVIVED-BCIS2) suivent approximativement cet ordre :

1. **Les médicaments en premier.** Quatre classes de traitement de fond (les 4 piliers) sont instaurées précocement puis augmentées progressivement (titration) toutes les 1 à 2 semaines : IEC ou ARNI (sacubitril/valsartan — *Entresto*), bêtabloquant, ARM (antagoniste des récepteurs minéralocorticoïdes) et iSGLT2 (gliflozine). Des diurétiques de l'anse sont ajoutés en cas de rétention d'eau et de sel (voir *Les médicaments de l'insuffisance cardiaque (4 piliers)*).
2. **Réévaluation vers 3 mois.** La FEVG est mesurée de nouveau et l'électrocardiogramme (ECG) est contrôlé (voir *Insuffisance cardiaque à FEVG améliorée (HFimpEF)*). Pendant cette période d'attente, un gilet défibrillateur portable (LifeVest) est parfois proposé (ESC 2026 : « peut être envisagé » ; voir *Le gilet défibrillateur portable (LifeVest)*).
3. **Les dispositifs implantables, si la FEVG reste inférieure ou égale à 35 %.** Un DAI préventif est recommandé dans les causes ischémiques (Classe I). Une resynchronisation (CRT) est associée si le complexe QRS est élargi sur l'ECG (voir *Dispositifs cardiaques implantés : DAI et CRT*).
4. **Les artères coronaires, discutées en réunion médico-chirurgicale (Heart Team).** Le pontage aorto-coronarien est privilégié dans les atteintes pluritronculaires lorsqu'une revascularisation est envisagée pour améliorer la survie. L'angioplastie (stents) n'a pas amélioré la survie dans un cœur affaibli, mais les deux options peuvent soulager l'angor (voir *Revascularisation coronaire : pontage et stents*).
5. **Les traitements additionnels selon les situations.** L'ivabradine, la digoxine ou la digitoxine, le vériciguat et le fer intraveineux sont ajoutés dans des indications précises (fréquence cardiaque rapide, symptômes persistants, aggravation récente, carence en fer). Une télésurveillance à domicile peut également être proposée (voir *Au-delà des 4 piliers : traitements additionnels et récents*).
6. **Tout au long du parcours : suivi quotidien, réadaptation et bilans.** Cela inclut la pesée quotidienne, une consommation modérée de sel, la réadaptation cardiaque (SMR cardiovasculaire), les vaccinations recommandées et des consultations au moins tous les 6 mois avec votre cardiologue, votre médecin traitant et, selon votre parcours, une infirmière insuffisance cardiaque / IPA (voir *Vivre au quotidien avec une insuffisance cardiaque*).

L'ESC formule trois grands objectifs du traitement : **vivre plus longtemps, éviter les hospitalisations et se sentir mieux**. Vous et vos proches êtes encouragés à discuter avec votre équipe de cardiologie de ce qui compte le plus pour vous (guide patient ESC).`,
    },
    {
      headingFr: 'Des attentes réalistes',
      bodyMarkdownFr: `- **Les médicaments apportent en moyenne un bénéfice majeur.**
  - Une modélisation (Vaduganathan, 2020) estime que l'association des quatre piliers réduit d'environ 60 % les décès cardiovasculaires ou les hospitalisations pour insuffisance cardiaque par rapport à une bithérapie plus ancienne.
  - Cela correspond à plusieurs années de vie supplémentaires en moyenne pour un patient d'âge moyen. Il s'agit toutefois d'une estimation modélisée et non directement observée dans un seul essai.
- **Une forte remontée de la FEVG est moins fréquente en cas de cause ischémique.**
  - Une cicatrice d'infarctus ne retrouve pas de contractilité.
  - Dans l'essai STICH, seuls environ 2 à 6 % des patients ayant une cardiomyopathie ischémique avec FEVG inférieure ou égale à 35 % ont retrouvé une FEVG normale.
  - Environ 18 % ont gagné au moins 10 points de FEVG en deux ans.
  - Lorsqu'une amélioration survient, elle est associée à une meilleure survie (revue HFimpEF ; analyse de normalisation de la FEVG dans STICH).
- **La maladie est sérieuse, mais la prise en charge a nettement progressé.**
  - Dans l'essai STICHES (patients inclus entre 2002 et 2007), la majorité des participants des deux groupes étaient décédés à 10 ans.
  - Les risques absolus sont probablement plus bas aujourd'hui, car les traitements de l'époque STICH ne comportaient ni les classes médicamenteuses plus récentes (ARNI, iSGLT2) ni un recours large aux dispositifs implantables.
  - La British Heart Foundation (BHF) rappelle que personne ne peut prédire l'espérance de vie d'un individu donné, et que de nombreuses personnes mènent une vie riche et active avec un traitement adapté.
- **Le risque de mort subite est réel mais difficile à prédire à l'échelle individuelle.**
  - Après un infarctus, les personnes ayant une FEVG inférieure ou égale à 35 % présentaient un taux de mort subite à 3 ans d'environ 3,4 % sans DAI, contre 0,9 % au-dessus de 35 % (analyse poolée PROFID).
  - En revanche, la FEVG seule identifie très mal *quelle* personne précise est exposée. Ce constat nourrit un débat actif sur les indications du DAI.
- **« Stable » ne signifie pas sans risque.** La Deuxième définition universelle de 2026 qualifie l'expression « insuffisance cardiaque stable » d'abus de langage, car un certain risque d'aggravation, d'hospitalisation ou de mort subite persiste toujours, même lorsque vous vous sentez bien. C'est une raison de maintenir un suivi régulier, pas une prédiction pour une personne en particulier (Définition universelle 2026).`,
    },
    {
      headingFr: 'Où la science évolue encore (au 25 novembre 2026)',
      bodyMarkdownFr: `- **Nouvelles recommandations ESC (août 2026).** Elles redéfinissent l'ICFER comme une FEVG inférieure à 50 % et suppriment la catégorie « modérément réduite ». Des brochures plus anciennes affichent donc des seuils différents.
- **Nouvelle définition internationale (juin 2026).** La *Deuxième définition universelle de l'insuffisance cardiaque* (AHA/ACC/ESC/Fédération mondiale du cœur — WHF) est un consensus sur la terminologie, distinct des recommandations ESC, et non un guide de traitement (Définition universelle 2026).
  - Elle regroupe l'insuffisance cardiaque en FEVG réduite, préservée ou améliorée, mais ne fixe **aucun seuil chiffré de FEVG ni de peptides natriurétiques** ; elle ne modifie donc ni les chiffres de l'ESC, ni les seuils de décision pour les médicaments ou les dispositifs.
  - Elle conserve les stades A à D et distingue l'amélioration, la rémission et (rarement) la récupération complète. Un diagnostic d'insuffisance cardiaque symptomatique est généralement considéré comme permanent, même lorsque l'état s'améliore.
  - Elle recense 18 groupes étiologiques, avec la **cardiomyopathie ischémique en premier**. Elle élargit l'ancienne opposition « ischémique / non ischémique » plutôt que de remplacer l'étiquette ischémique.
  - Les courriers de cardiologie en France peuvent commencer à utiliser ces termes : l'ESC l'a co-rédigée et la Société Française de Cardiologie (SFC) a participé à sa relecture.
- **Apport du DAI en complément des médicaments modernes.** Le bénéfice additionnel du DAI au-dessus de la quadrithérapie moderne est en cours de réévaluation. L'essai PROFID-EHRA teste cette question directement et n'a pas encore de résultats ; sa fin est estimée à novembre 2027 (PROFID ; protocole PROFID-EHRA).
- **Traitements additionnels.** La digitoxine a réduit les décès ou hospitalisations pour insuffisance cardiaque dans l'essai DIGIT-HF (2025), et les recommandations ESC 2026 ont renforcé la place de la digoxine et de la digitoxine. Le vériciguat n'a pas atteint son critère principal chez les patients stables (essai VICTOR, *Lancet* 2025). La finérénone n'a pas encore été évaluée pour une FEVG inférieure à 40 % ; l'essai FINALITY-HF est attendu vers 2028.
- **La notion de « viabilité » myocardique.** L'idée que rouvrir des artères irriguant un muscle « hibernant » restaure la fonction de pompe a été remise en question par REVIVED-BCIS2 : dans son analyse de viabilité, l'étendue du muscle viable n'a pas permis d'identifier les patients tirant bénéfice d'une angioplastie par stents.

Pour préparer vos consultations ou explorer les autres volets du suivi, vous pouvez consulter les articles liés ci-dessous, notamment *Examens et chiffres*, *Médicaments : mode d'action, effets secondaires et bilans sanguins*, *Réadaptation cardiaque (SMR) et activité physique*, *Santé émotionnelle, anxiété et dépression*, *Soins de support, soins palliatifs et anticipation*, *Permis de conduire* et *Vivre avec une insuffisance cardiaque en France*.

En cas d'aggravation brutale (essoufflement intense au repos, douleur thoracique, malaise ou perte de connaissance), appelez immédiatement le **15 (SAMU)** ou le **112** (ou le **114** par SMS pour les personnes sourdes ou malentendantes).`,
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
