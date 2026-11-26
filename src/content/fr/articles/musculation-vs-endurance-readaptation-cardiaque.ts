import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'musculation-vs-endurance-readaptation-cardiaque',
  sourceWikiPath: 'wiki/theses/resistance-vs-aerobic-training-in-cardiac-rehab.md',
  titleFr: 'Musculation versus entraînement aérobie en réadaptation cardiaque',
  category: 'quotidien',
  readingTier: 'reference',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'thèse',
    'réadaptation-cardiaque',
    'exercice',
    'renforcement-musculaire',
    'musculation',
    'entraînement-aérobie',
    'entraînement-combiné',
    'hiit',
    'fragilité',
    'icfer',
  ],
  aliases: [
    'Musculation vs endurance',
    'Renforcement musculaire vs aérobie',
    'Musculation réadaptation cardiaque',
    'Entraînement en résistance insuffisance cardiaque',
    'Poids et insuffisance cardiaque',
    'HIIT vs endurance modérée',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "La musculation seule peut-elle remplacer l'endurance en réadaptation cardiaque ? Cette synthèse compare leurs effets sur le cœur et la capacité d'effort dans l'insuffisance cardiaque stable. Les études placent l'endurance comme socle et le renforcement musculaire en complément sûr et utile. Consultez cette fiche pour valider vos exercices et vos charges avec votre équipe de réadaptation.",
  sections: [
    {
      headingFr: 'Question évaluée, règle de verdict et conclusion',
      bodyMarkdownFr: `**Affirmation testée :** dans la réadaptation cardiaque des personnes atteintes d’insuffisance cardiaque ischémique à FEVG réduite (ICFER / HFrEF), et plus largement de maladie coronarienne, l’entraînement en résistance (musculation / renforcement musculaire) seul produirait de meilleurs résultats cardiaques que l’entraînement aérobie (endurance) seul.

**Critères de jugement fixés avant l’examen des preuves :**

- Le verdict repose sur le **pic de VO2** (capacité cardiorespiratoire), la **fonction et le remodelage du ventricule gauche** (FEVG, volumes ventriculaires) et les **événements cliniques majeurs** (hospitalisations et mortalité). La qualité de vie compte comme preuve d’appui.
- Un gain portant **uniquement sur la force musculaire** ne suffit pas à démontrer une supériorité cardiaque.
- Une **absence de différence** dans les essais comparatifs directs réfute l’hypothèse de supériorité.
- L’entraînement **combiné** (aérobie + renforcement vs aérobie seul) est analysé comme une nuance importante, non comme une preuve en faveur du renforcement seul.
- Les études menées dans la maladie coronarienne sans insuffisance cardiaque ou dans l’IC à FEVG préservée (ICFEP) constituent des preuves partielles ou indirectes.

**Verdict : Thèse contredite — confiance moyenne.**

La musculation (renforcement musculaire) est un **complément sûr et utile**, mais **pas un substitut supérieur** à l’entraînement aérobie. L’approche la mieux étayée reste : **entraînement aérobie comme socle, renforcement musculaire en complément**. Chez les patients fragiles ou très déconditionnés, débuter par un travail de force, d’équilibre et de mobilité avant l’endurance est raisonnable et soutenu par les recommandations, sans qu’aucun essai ne démontre que cette séquence surpasse un début aérobie.

**Ce qui pourrait faire évoluer ce verdict :** un essai randomisé de puissance adéquate comparant renforcement seul et aérobie seul dans l’ICFER démontrant des gains supérieurs sur le pic de VO2, le remodelage inverse du ventricule gauche ou les hospitalisations ; ou une méta-analyse en réseau dédiée à l’ICFER avec comparaisons directes confirmant le classement de Shi 2026 sur la FEVG.`,
    },
    {
      headingFr: 'Signaux en faveur du renforcement musculaire (et leurs limites)',
      bodyMarkdownFr: `Aucune source n’établit avec un niveau de certitude suffisant que le renforcement musculaire seul surpasse l’entraînement aérobie sur un critère principal du verdict. Les signaux favorables recensés sont les suivants :

- **Faible — Méta-analyse en réseau Shi 2026 :** classe le renforcement musculaire en première position pour la FEVG (**+9,9 points** contre témoin ; score SUCRA **93 %**), devant l’entraînement aérobie (**+5,1 points**). Toutefois, seuls **5 essais** ont testé le renforcement, le classement provient surtout de comparaisons indirectes, la certitude varie de très faible à modérée, les estimations directes (par paires) inversent l’ordre (aérobie **+8,5** contre renforcement **+6,7**), et l’article comporte des incohérences internes tout en contredisant Santos 2018 et Tucker 2019.
- **Faible — Méta-analyse en réseau Liu 2025 :** classe la force devant l’aérobie au SUCRA pour le pic de VO2 (**74,7 % contre 64,4 %**), mais à partir de **4 essais** de force seulement, et ses propres estimations en réseau pointent dans l’autre sens en faveur de l’aérobie (DMS **1,20**, IC 95 % : **0,28–2,13**).
- **Modéré (prouve l’efficacité, non la supériorité) — Santos 2018 :** dans 59 essais randomisés sur l’IC systolique, le gain de pic de VO2 paraissait numériquement plus élevé avec le renforcement (**+3,57 mL/kg/min**) qu’avec l’aérobie (**+2,63 mL/kg/min**), mais la différence entre modalités n’était **pas statistiquement significative (p = 0,84)**.
- **Modéré (vs absence d’exercice) — Fisher 2022 :** le renforcement seul comparé à l’absence d’entraînement augmente le pic de VO2 de **+2,64 mL/kg/min** (IC 95 % : **1,67–3,60**), le test de marche de 6 minutes de **+50 m** et la force musculaire, sans détérioration des paramètres ventriculaires gauches. Cela prouve son intérêt, pas sa supériorité sur l’aérobie.
- **Force musculaire :** le renforcement développe nettement plus la force que l’endurance (dans **Feiereisen 2007**, l’aérobie seul n’améliorait pas la force des extenseurs du genou). Selon la règle de verdict, ce bénéfice musculaire ne suffit pas à établir une supériorité cardiaque.
- **Faible — Palevo 2009 (100 % ischémique) :** seul essai de renforcement isolé inclus dans Tucker 2019 : la FEVG est passée de **32 % à 37 %** dans le groupe force (n = 10), mais le résumé ne rapporte aucune comparaison statistique face au groupe soins usuels (n = 6) et l’étude ne comportait aucun bras aérobie. Regroupé dans Tucker 2019, l’effet sur la FEVG reste non significatif.
- **Faible (critère intermédiaire) — Lan 2020 / Maiorana 2011 :** le pic de VO2 a progressé de façon identique dans les deux bras, tandis qu’un indice diastolique (E/e’) s’est aggravé en intra-groupe dans le bras aérobie uniquement (**18,2 à 23,8**), sans test intergroupe rapporté ; un article probable issu de la même cohorte retrouve un gain de force des jambes et d’affinement pariétal artériel uniquement avec le renforcement.`,
    },
    {
      headingFr: 'Preuves contre la supériorité du renforcement seul',
      bodyMarkdownFr: `### Recommandations européennes, américaines et françaises (preuve forte)

- **ESC 2020 (cardiologie du sport) :** le renforcement musculaire peut compléter, mais **ne remplace pas**, l’entraînement aérobie dans l’insuffisance cardiaque, avec des charges permettant **10 à 15 répétitions** (aucune recommandation gradée séparément pour le renforcement seul dans l’ICFER).
- **AHA 2023 :** recommande le renforcement lorsque l’aérobie n’est pas réalisable ou comme première étape chez les patients déconditionnés, et en association à l’aérobie dans les autres situations.
- **ESC 2026 (insuffisance cardiaque) :** recommande un entraînement personnalisé au sein d’un programme multidisciplinaire (**Classe I, niveau B1**) en plaçant aérobie, renforcement musculaire et entraînement des muscles inspiratoires côte à côte dans une prescription FITT, sans placer le renforcement au-dessus de l’aérobie.
- **Recommandations françaises (GERS-P / SFC 2023 et HAS 2022) :** le GERS-P/SFC (**Classe I, grade A** dans l’ICFER) fait de l’endurance la base (**3 à 6 séances par semaine**) et ajoute le renforcement **2 à 3 fois par semaine** (**30 à 70 %** de la charge maximale 1RM pour les bras, **40 à 80 %** pour les jambes). La **HAS 2022** préconise d’associer endurance et **« renforcement musculaire »**, tout en inscrivant l’effort intense et **« la musculation »** parmi les contre-indications dans l’IC chronique sans définir le terme « musculation » (ce qui contraste avec les charges de 40 à 80 % de 1RM citées par le GERS-P ; l’interprétation la plus vraisemblable vise la musculation sportive lourde non encadrée, d’où la nécessité de faire valider vos charges par votre équipe de réadaptation).

### Fonction ventriculaire gauche et remodelage (preuves modérées)

- **Tucker 2019 (ICFER uniquement) :** l’entraînement aérobie continu d’intensité modérée augmente la FEVG de **+3,8 points** (IC 95 % : **2,1–5,5**), et de **+6,3 points** sur 6 mois ou plus (sans modification des volumes). Le renforcement seul ou combiné (4 essais, n = 95) donne **+1,9 point** (IC 95 % : **−2,0 à 5,9**, non significatif) : cet intervalle large inclut l’effet aérobie, si bien qu’un bénéfice sur la FEVG est **non démontré** plutôt qu’exclu.
- **Haykowsky 2007 :** l’entraînement aérobie améliore la FEVG (**+2,6 points**) et réduit les volumes du VG (environ **−11 à −13 mL**) ; l’association aérobie + force ne montre pas ce remodelage inverse.
- **Santos 2018 :** seul l’entraînement aérobie améliore la FEVG (**+3,15 points**) et le volume télédiastolique (**−10,2 mL**) ; le renforcement est neutre.

### Comparaisons directes face à face et événements cliniques

- **Maladie coronarienne (Hollings 2017, 34 essais, n = 1 940) :** le renforcement seul égale mais ne dépasse pas l’aérobie sur l’aptitude aérobie (DMS **−0,13**, IC 95 % : **−0,35 à 0,08**).
- **Quatre petits essais face à face dans l’insuffisance cardiaque** (environ 10 à 15 patients par bras, 6 à 12 semaines, sans critères cliniques majeurs) :
  - **Feiereisen 2007** (n = 60, FEVG probablement < 35 %) : force, endurance et entraînement combiné améliorent tous le pic de VO2 contre témoin, sans supériorité d’un mode ;
  - **Lan 2020** (12 patients par bras, FEVG < 50 %) : gain égal de pic de VO2 (**+2,7 mL/kg/min** dans chaque bras), taille du VG inchangée ;
  - **Munch 2018** (14 patients par bras, NYHA I–II) : amélioration identique du pic de VO2, de la marche et de la qualité de vie (avec environ **55 %** du temps de séance pour le renforcement) ;
  - **Jakovljevic 2010** (16 patients, quasi-randomisé, 19 % d’origine ischémique) : seul l’entraînement aérobie a augmenté le débit cardiaque au pic, le volume d’éjection systolique, le pic de VO2 et le seuil anaérobie.
- **Événements cliniques (hospitalisations et décès) :** aucun essai de puissance suffisante n’a testé le renforcement seul. **HF-ACTION** (FEVG ≤ 35 %, 51 % ischémiques, HR ajusté **0,89** pour décès ou hospitalisation) a évalué l’entraînement aérobie, et les 60 essais de la revue **Cochrane 2024** reposaient tous sur une base aérobie (les 21 essais ajoutant du renforcement ne montraient aucune différence détectable sur les événements cliniques).`,
    },
    {
      headingFr: 'Nuances clés : entraînement combiné, fragilité, HIIT et sécurité',
      bodyMarkdownFr: `### L’entraînement combiné dépasse l’aérobie seul pour la force et la marche

- **Terada 2026** (15 essais randomisés, **89 %** d’ICFER) : ajouter du renforcement à l’entraînement aérobie améliore la capacité d’effort (DMS **0,40**), la distance au test de marche de 6 minutes (**+48 m**) et la force du haut du corps (**+8,3 kg**), sans modifier la qualité de vie ni la fonction cardiaque.
- Dans la maladie coronarienne, **Hollings 2017** montre aussi que le combiné surpasse l’aérobie seul pour la forme physique et la force. **Edwards 2023** (4 essais plus petits) ne retrouvait ni gain de pic de VO2/FEVG ni danger.

### Patients fragiles, déconditionnés ou présentant une fonte musculaire

- L’ESC 2020 et l’AHA 2023 indiquent que les personnes très déconditionnées peuvent commencer par un renforcement ciblant de petits groupes musculaires. Les essais soutiennent cette logique progressive, sans prouver la supériorité d’un début « force d’abord » :
  - **REHAB-HF** (349 adultes âgés hospitalisés pour IC) : un travail multidomaine débutant par la force, l’équilibre et la mobilité avant l’endurance a amélioré la fonction physique (score SPPB **+1,5 point**, jusqu’à **+2,1** chez les plus fragiles contre **+0,8**). Toutefois, dans le sous-groupe **ICFER**, le gain était plus modeste (**+1,1**), la marche et la qualité de vie ne s’amélioraient pas significativement et le ratio de mortalité était de **2,21** (IC 95 % : **0,78–6,25**), amenant les auteurs à souligner une incertitude sur la sécurité dans l’ICFER.
  - **Analyse fragilité d’HF-ACTION (Pandey 2022, post-hoc, résumé) :** l’entraînement aérobie était associé à moins d’hospitalisations ou de décès chez les patients ICFER fragiles (**HR 0,83**, IC 95 % : **0,72–0,95**), mais pas chez les non-fragiles (interaction **p = 0,04**), montrant que l’endurance ne s’adresse pas uniquement aux patients les plus en forme.
  - **ExFRAIL-HF** (60 patients ICFER fragiles d’environ 83 ans, FEVG ~33 %) : un programme multicomposant à domicile n’a pas amélioré le score SPPB face aux conseils usuels, bien que davantage de patients aient gagné une classe NYHA.
  - **Fonte musculaire (Hanania 2024) :** sur 9 petits essais ICFER, le renforcement augmentait la force sans modifier la masse musculaire ni les marqueurs inflammatoires, et aucun essai n’incluait de patients cachectiques.
  - *Correction méthodologique :* la méta-analyse **Slimani 2018**, souvent citée comme plaçant le renforcement en tête pour la marche chez le sujet âgé, reposait pour cette estimation sur un seul essai d’électrostimulation des jambes, non sur de la musculation.

### Entraînement fractionné à haute intensité (HIIT) vs endurance modérée continue

- **SMARTEX-HF** (261 patients ICFER, FEVG médiane **29 %**, **59 %** d’origine ischémique) : 12 semaines de HIIT n’ont pas fait mieux que l’entraînement aérobie modéré continu sur le diamètre du VG (**−1,2 mm**, IC 95 % : **−3,6 à 1,2**), la FEVG, le pic de VO2 (**−0,4**) ou la qualité de vie, y compris dans le sous-groupe 100 % ischémique (**Halle 2022**). Les deux modalités dépassaient les simples conseils sur le pic de VO2, mais aucun gain ne persistait à **52 semaines**. Événements indésirables graves sur 1 an : **39 %** sous HIIT, **25 %** sous entraînement modéré et **34 %** sous conseils (**p = 0,16**), dont **1 arrêt cardiaque** pendant une séance de HIIT.
- Les méta-analyses de petits essais (**Yang 2024**, **Chen 2025**, **Okamura 2023**) observent un gain modeste de **+1,5 à 1,8 mL/kg/min** de pic de VO2 et d’environ **+3 points** de FEVG (certitude très faible à modérée), principalement avec des protocoles **4 × 4 minutes**, avec une forte variabilité dans les essais à dépense énergétique équivalente. Les forts effets de remodelage rapportés dans le petit essai **Wisløff 2007** (n = 27 post-infarctus) n’ont pas été reproduits dans SMARTEX-HF.

### Sécurité, essais enregistrés et limites d’applicabilité

- **Sécurité :** selon l’AHA 2023, l’ischémie, les arythmies et les anomalies hémodynamiques surviennent moins souvent pendant un exercice de résistance que pendant un exercice aérobie (une revue coronarienne rapportait 63 complications sous aérobie contre 1 sous renforcement, mais la déclaration des effets indésirables restait insuffisante). Les essais ont inclus des **patients stables** utilisant des **charges modérées** : l’AHA 2023 réserve les charges supérieures à **80 %** de la charge maximale (1RM) à une étape ultérieure, et l’ESC 2020 conseille de privilégier les petits groupes musculaires dans l’IC avancée. Ne démarrez pas et ne modifiez pas votre entraînement sans l’avis de votre cardiologue ou de votre équipe de réadaptation cardiaque.
- **Essais enregistrés :** **RESIST-HF** (élastiques à domicile vs soins usuels, toutes FEVG) et **NCT06785168** (renforcement dans l’IC sarcopénique âgée, terminé en 2026 sans résultats publiés) ne comportent ni bras aérobie ni seuil de FEVG et ne répondront donc pas à la comparaison directe.
- **Applicabilité et limites :** aucune grande étude ne portait exclusivement sur l’ICFER ischémique (en dehors de Palevo 2009 sans bras aérobie et du sous-groupe ischémique de SMARTEX-HF comparant deux modes aérobies). Les quatre essais face à face dans l’IC sont très petits et courts, et plusieurs synthèses secondaires ont été consultées uniquement sous forme de résumés.`,
    },
  ],
  relatedArticleSlugs: [
    'readaptation-cardiaque-et-activite-physique',
    'poids-obesite-et-denutrition',
    'essais-cliniques-cles',
    'fer-oral-haute-biodisponibilite',
    'recommandations-comparees-esc-us-nice',
    'vivre-avec-insuffisance-cardiaque-en-france',
    'essais-cliniques-en-cours-et-a-suivre',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 (section exercice, tableau 24), ESC 2020 (cardiologie du sport), AHA 2023, GERS-P/SFC 2023 et HAS 2022',
      detail: 'Place complémentaire du renforcement musculaire, prescription FITT, charges recommandées (10–15 répétitions ; 30–70 % bras / 40–80 % jambes) et précautions HAS',
    },
    {
      label: 'Méta-analyses sur la FEVG, le remodelage et la capacité physique (Tucker 2019, Haykowsky 2007, Santos 2018, Fisher 2022, Hollings 2017, Terada 2026, Edwards 2023)',
      detail: 'Gains constants de FEVG avec l’aérobie, effets du renforcement seul vs témoin et bénéfices fonctionnels de l’entraînement combiné',
    },
    {
      label: 'Essais comparatifs directs dans l’IC (Feiereisen 2007, Lan 2020 / Maiorana 2011, Munch 2018, Jakovljevic 2010) et Palevo 2009',
      detail: 'Quatre petits essais face à face (10–15 patients par bras) montrant des gains de pic de VO2 similaires et un signal de débit cardiaque en faveur de l’aérobie',
    },
    {
      label: 'Méta-analyses en réseau Shi (2026) et Liu (2025)',
      detail: 'Classements SUCRA favorables au renforcement mais contredits par les comparaisons directes et limités par une faible certitude',
    },
    {
      label: 'HF-ACTION (JAMA 2009 et analyse fragilité Pandey 2022), Cochrane 2024, REHAB-HF (NEJM 2021 et par FEVG Mentz 2021), ExFRAIL-HF (2023), Hanania (2024) et Slimani (2018)',
      detail: 'Données sur les hospitalisations, la survie, la fragilité en ICFER et la fonte musculaire',
    },
    {
      label: 'SMARTEX-HF (Circulation 2017 et sous-groupe ischémique Halle 2022), Wisløff (2007), Yang (2024), Chen (2025) et Okamura (2023)',
      detail: 'Comparaison entre entraînement fractionné à haute intensité (HIIT) et entraînement aérobie modéré continu dans l’ICFER',
    },
  ],
  disclaimerType: 'medical',
};
