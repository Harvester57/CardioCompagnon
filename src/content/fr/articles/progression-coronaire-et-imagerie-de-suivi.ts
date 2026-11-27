import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'progression-coronaire-et-imagerie-de-suivi',
  sourceWikiPath: 'wiki/concepts/coronary-disease-progression-and-follow-up-imaging.md',
  titleFr: 'Progression coronaire et imagerie de suivi après stents ou pontage',
  category: 'diagnostic',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'maladie-coronaire',
    'progression-coronaire',
    'resténose-intra-stent',
    'occlusion-pontage',
    'suivi',
    'imagerie-suivi',
    'coroscanner',
    'imagerie-stress',
    'régression-plaque',
    'pacman-ami',
    'prospect',
    'icfer',
  ],
  aliases: [
    'Progression de la maladie coronaire',
    'Resténose intra-stent',
    'Défaillance de stent',
    'Occlusion de pontage',
    'Pontage veineux',
    'Suivi après stent',
    'Suivi après pontage',
    'Coroscanner de contrôle',
    'Régression de plaque',
    'Coronary disease progression',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Les stents et les pontages traitent des rétrécissements précis, mais ne suppriment pas la maladie coronaire sous-jacente : d'autres plaques peuvent évoluer ailleurs et les stents ou pontages peuvent eux-mêmes se rétrécir avec les années. Pourtant, tant que vous vous sentez stable, les recommandations européennes et américaines déconseillent les tests d'effort ou scanners programmés de routine et privilégient un suivi clinique annuel. Ce sont les nouveaux symptômes — ou une baisse inexpliquée de votre FEVG — qui déclenchent une imagerie ciblée, tandis qu'une baisse intensive du cholestérol LDL ralentit et stabilise les plaques.",
  sections: [
    {
      headingFr: 'Comment évoluent les artères, les stents et les pontages dans le temps',
      bodyMarkdownFr: `Même après un geste réussi, la maladie coronaire reste une affection chronique qui explique l'importance continue de vos médicaments de prévention (cholestérol LDL, antiplaquettaires) :

- **Les stents :** environ **1 personne sur 5** ayant eu des stents ou un pontage a besoin d'une nouvelle intervention dans les **5 ans**, plus souvent après stents qu'après pontage (ESC 2024). La cause la plus fréquente d'échec tardif est la **resténose intra-stent** (repousse de tissu dans le stent, jusqu'à **10 % à 10 ans** avec les stents actifs), qui se manifeste le plus souvent par un angor d'effort (et parfois sous forme aiguë dans ~20 % des cas). La thrombose brutale de stent est rare.
- **Les pontages :** les **pontages veineux** (prélevés sur la jambe) se bouchent le plus souvent (jusqu'à **27 %** la première année et **50 %** à 10 ans, le plus souvent **sans aucun symptôme**). À l'inverse, le pontage par l'**artère mammaire interne gauche** sur l'artère interventriculaire antérieure (IVA) est le plus durable et porte l'essentiel du bénéfice à long terme ; les pontages par artère radiale durent aussi mieux que les greffons veineux.
- **De nouvelles plaques ailleurs :** environ la moitié des événements coronaires ultérieurs proviennent de plaques situées **en dehors** de la zone initialement traitée, souvent d'apparence modérée sur la coronarographie initiale. C'est pourquoi les traitements agissant sur l'ensemble des artères comptent autant que le geste mécanique (voir *Cholestérol, aspirine et prévention secondaire*).`,
    },
    {
      headingFr: 'Faut-il faire des examens de contrôle systématiques ? Quand consulter ?',
      bodyMarkdownFr: `Pour une personne qui se sent stable après stents ou pontage, les recommandations européennes (**ESC 2024**) et américaines (**AHA/ACC 2023**) s'accordent sur une règle simple :

- **Pas de test de stress ni de scanner programmé sans nouveau symptôme.** Un suivi clinique régulier (en général **annuel**, avec bilan des facteurs de risque, ECG de repos et prises de sang) est recommandé. Un pontage veineux bouché de façon silencieuse n'est pas dépisté systématiquement car les tests de routine chez les patients asymptomatiques n'ont pas démontré de bénéfice. Le suivi de votre FEVG suit quant à lui le calendrier habituel de l'insuffisance cardiaque.
- **Les signes qui doivent amener à consulter rapidement votre cardiologue :**
  - une douleur ou gêne thoracique nouvelle, ou qui survient pour un effort moindre qu'avant ;
  - un recours plus fréquent à votre **spray de trinitrine (*Natispray*)** ;
  - un essoufflement plus marqué, une prise de poids, un gonflement des jambes ou une fatigue inhabituelle (qui peuvent venir du muscle cardiaque, des artères ou des deux) ;
  - des palpitations, un malaise ou une perte de connaissance ;
  - une baisse inexpliquée de la FEVG lors d'une échographie de suivi.
- **En urgence :** une douleur thoracique au repos ou qui ne cède pas après le spray de trinitrine selon les consignes de votre ordonnance impose d'appeler immédiatement le **15 (SAMU)**, le **112** ou le **114** (SMS) (voir *Angor et médicaments anti-angineux*).`,
    },
    {
      headingFr: "Recommandations ESC 2024 / US 2023, coroscanner et données d'études",
      depth: 'evidence',
      bodyMarkdownFr: `### Quand répéter une imagerie ? (ESC 2024 et AHA/ACC 2023)

| Situation | ESC 2024 (syndromes coronaires chroniques) | AHA/ACC 2023 (maladie coronaire chronique, via résumés) |
|---|---|---|
| **Patient asymptomatique et stable** | Visites périodiques (ex. **annuelles**) avec bilan des facteurs de risque, ECG de repos et biologie (**I, C**). Texte non gradé : tests fonctionnels de routine **non recommandés** après stent sans symptôme (pas de bénéfice à 2 ans) | Tests anatomiques ou ischémiques périodiques de routine **sans changement clinique non recommandés** *(classe non vérifiée en texte intégral)* |
| **Symptômes nouveaux ou aggravés** | Évaluation du risque, **de préférence par imagerie de stress** (**I, C**) | Examens réservés à un changement de symptômes ou de capacité fonctionnelle |
| **Aggravation de la fonction VG sans cause réversible** | Réévaluer la maladie coronaire (**I, C**) | *Non vérifié* |
| **Symptômes réfractaires au traitement ou haut risque** | Coronarographie invasive avec mesure de pression (\`FFR\`/\`iFR\`) (**I, C**) | *Non vérifié* |
| **Symptômes après stent ou pontage** | Imagerie fonctionnelle (stress) généralement préférée ; **coroscanner** à envisager pour vérifier pontages ou **stents ≥ 3 mm** (**IIa, B**) | *Non vérifié* |
| **Angor réfractaire avec suspicion microvasculaire / spasme** | Test invasif de fonction coronaire (**I, B**) | *Non vérifié* |

*Notes ESC 2024 :* le rythme optimal de suivi repose surtout sur l'avis d'experts (niveau C) ; l'angor s'atténue spontanément dans l'année chez environ **40 %** des patients sans intervention, mais un angor persistant s'associe à un risque plus élevé. En cas de défaillance : un stent actif est préféré au ballon actif pour une resténose dans un stent actif (**I, A**), l'angioplastie de l'artère native est préférée à celle du pontage bouché (**IIa, B**), et l'artère mammaire interne reste le greffon de choix lors d'une réintervention chirurgicale (**I, B**).

### Données clés des essais et méta-analyses

- **Événements très tardifs sur stents (Madhavan 2020, 19 essais, 25 032 patients, résumé) :** entre la 1re et la 5e année, **9,4 %** ont présenté un décès cardiaque, un infarctus ou une nouvelle intervention sur la zone stentée (8,3 % avec les stents actifs récents vs 11,0 % première génération), avec un taux continu d'environ **2 % par an sans plateau**.
- **Pontage radial vs veineux à 10 ans (Gaudino 2020, 5 essais, 1 036 patients, texte intégral) :** décès, infarctus ou nouvelle revascularisation **31,0 % vs 41,6 %** (**HR 0,73**, IC 95 % : 0,61–0,88 ; nouvelles interventions HR 0,62 ; baisse de mortalité post hoc HR 0,73). Seuls ~13 % avaient une FEVG < 50 % (applicabilité partielle en ICFER).
- **Plaques non coupables (PROSPECT, *NEJM* 2011, 697 patients sur 3,4 ans, résumé) :** événements répartis presque à égalité entre les lésions déjà traitées (**12,9 %**) et des **plaques non traitées ailleurs (11,6 %)**, qui ne rétrécissaient en moyenne la lumière que d'environ **32 %** initialement mais présentaient un cœur lipidique riche et une chape fibreuse fine.
- **Régression et stabilisation de plaque (PACMAN-AMI, *JAMA* 2022, 300 patients sous rosuvastatine 20 mg, résumé) :** l'ajout d'alirocumab (*Praluent*) sur 52 semaines a légèrement réduit le volume de plaque (−2,13 % vs −0,92 % ; différence −1,21 point, IC 95 % : −1,78 à −0,65) et épaissi la chape fibreuse protectrice (+62,7 vs +33,2 µm). Critères d'imagerie uniquement (les preuves sur événements cliniques pour un LDL-c très bas viennent de FOURIER et ODYSSEY ; FEVG non rapportée).
- **Coroscanner (\`CCTA\`) en cas de suspicion de resténose (Dahdal 2025, 17 études, 2 674 stents, texte intégral) :** sensibilité **90 %**, spécificité **89 %**, 92 % de stents interprétables — résultats maintenus y compris pour les stents < 3 mm (0,90/0,90 sur 396 stents, ce qui nuance la limite ESC des 3 mm sans l'expliquer). Les études de dépistage asymptomatique étaient exclues ; en IC, une fréquence cardiaque rapide ou irrégulière (FA) peut dégrader l'image.

### Limites des preuves

Peu de patients inclus dans ces essais avaient une FEVG < 40 % (applicabilité partielle à l'ICFER ischémique). Les études GLAGOV, HUYGENS et FFR-CT n'étaient pas incluses dans le corpus, et les taux d'échec des pontages veineux proviennent du texte ESC 2024.`,
    },
  ],
  relatedArticleSlugs: [
    'revascularisation-pontage-stents',
    'efx-strain-troponine-et-imagerie-cardiaque',
    'occlusion-coronaire-chronique-cto',
    'cholesterol-et-prevention-secondaire',
    'antiplaquettaires-bitherapie-et-protection-gastrique',
    'angor-microvasculaire-et-inoca',
    'risque-inflammatoire-residuel',
    'arteres-carotides-et-aomi',
    'angioplastie-protegee-et-assistance-circulatoire',
    'angor-et-medicaments-anti-angineux',
    'questions-equipe-cardiologie',
  ],
  sources: [
    {
      label: 'ESC 2024 (syndromes coronaires chroniques, sections 6.2–6.5) et AHA/ACC 2023 (via synthèses)',
      detail: 'Taux de réintervention et d’échec des stents/pontages, suivi clinique annuel (I C), refus des tests systématiques sans symptôme et place du coroscanner (IIa B)',
    },
    {
      label: 'Madhavan et al. (JACC 2020) et Gaudino et al. (JAMA 2020, RADIAL)',
      detail: 'Taux annuel de ~2 % d’événements tardifs sur stents (19 essais) et supériorité des pontages radiaux sur les greffons veineux à 10 ans',
    },
    {
      label: 'PROSPECT (Stone et al., NEJM 2011), PACMAN-AMI (Räber et al., JAMA 2022) et FOURIER (Lancet 2017)',
      detail: 'Rôle des plaques non coupables dans les événements ultérieurs et stabilisation/régression modeste de plaque sous abaissement intensif du LDL-c',
    },
    {
      label: 'Dahdal et al. (JCCT 2025, méta-analyse coroscanner et resténose)',
      detail: 'Performance diagnostique du coroscanner chez les patients symptomatiques suspects de resténose intra-stent (2 674 stents)',
    },
  ],
  disclaimerType: 'medical',
};
