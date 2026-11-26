import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'anevrisme-ventricule-gauche',
  sourceWikiPath: 'wiki/concepts/lv-aneurysm.md',
  titleFr: 'Anévrisme du ventricule gauche (cicatrice bombante après infarctus)',
  category: 'diagnostic',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'anévrisme-vg',
    'anticoagulation',
    'thrombus-vg',
    'prévention-avc',
    'infarctus-antérieur',
    'reconstruction-ventriculaire',
    'pseudo-anévrisme',
    'akinésie-apicale',
  ],
  aliases: [
    'Anévrisme VG',
    'Anévrisme ventriculaire gauche',
    'LV aneurysm',
    'Left ventricular aneurysm',
    'Vrai anévrisme',
    'Faux anévrisme',
    'Pseudo-anévrisme',
    'Akinésie apicale',
    'Dyskinésie',
    'Reconstruction ventriculaire chirurgicale',
  ],
  linkedModules: ['lvThrombusOrAneurysm'],
  plainSummaryFr:
    'Après un infarctus du myocarde étendu, une partie de la paroi du ventricule gauche peut se transformer en une cicatrice amincie qui bombe vers l’extérieur à chaque battement au lieu de se contracter : c’est un anévrisme du ventricule gauche (anévrisme VG). Il siège le plus souvent sur la paroi antérieure et la pointe (apex) après un infarctus de l’artère interventriculaire antérieure (IVA). Le sang y stagne plus facilement, ce qui augmente le risque de caillot (thrombus VG) et, par ce biais, d’AVC. Savoir s’il faut prescrire un anticoagulant en présence d’un anévrisme sans caillot visible reste une question scientifique ouverte : les recommandations divergent et aucune preuve randomisée n’existe. Le faux anévrisme (pseudo-anévrisme) est une complication différente et dangereuse — une rupture contenue de la paroi cardiaque — qui nécessite habituellement une chirurgie rapide. La signification des termes « anévrisme », « akinétique » ou « dyskinétique » sur vos comptes rendus d’ETT ou d’IRM se discute toujours avec votre équipe de cardiologie.',
  sections: [
    {
      headingFr: 'Qu’est-ce qu’un anévrisme du ventricule gauche ?',
      bodyMarkdownFr: `Les comptes rendus d’échocardiographie transthoracique (ETT) ou d’IRM cardiaque distinguent plusieurs anomalies de la paroi cicatricielle :

- **Vrai anévrisme :** poche cicatricielle mince, à collet large, formée après un infarctus touchant toute l’épaisseur de la paroi (transmural), le plus souvent sur la paroi antérieure ou à la pointe (apex) du ventricule gauche (El Ouazzani 2022).
- **Faux anévrisme (pseudo-anévrisme) :** rupture de la paroi cardiaque contenue uniquement par le péricarde (le sac qui entoure le cœur), généralement à collet étroit et plus souvent en paroi inférieure ou latérale. La revue d’El Ouazzani (2022) rapporte un risque de rupture de **30 à 45 %** et recommande une prise en charge chirurgicale rapide.
- **Critères d’imagerie :** une étude définit un vrai anévrisme comme un bombement visible à la fois en diastole (remplissage) et en systole (contraction), avec une paroi immobile ou se déplaçant vers l’extérieur et une démarcation nette (You 2021).
- **Anévrisme versus akinésie apicale :** de nombreux comptes rendus décrivent une paroi antérieure et une pointe immobiles (**akinésie apicale**) sans employer le terme d’anévrisme. Certaines études regroupent ces situations, bien qu’elles ne soient pas strictement identiques (Chen 2024 ; ACCF/AHA 2013).

Pour comprendre pourquoi une paroi antérieure cicatricielle cesse de se contracter, voir *La cardiomyopathie ischémique*.`,
    },
    {
      headingFr: 'Fréquence, formation d’un caillot et risque d’AVC',
      bodyMarkdownFr: `### Quelle est sa fréquence à l’ère moderne ?

- Dans une étude menée à Shanghai chez **942 patients** traités par angioplastie (stent) en urgence pour un infarctus antérieur (2012–2020), **15,9 %** ont développé un anévrisme du VG. Une prise en charge tardive, une atteinte coronaire plus complexe et une FEVG plus basse en augmentaient la probabilité (You 2021).
- Une revue narrative estime que la proportion d’infarctus suivis d’un anévrisme a reculé autour de **8 à 15 %** avec les traitements modernes (El Ouazzani 2022).
- Dans une étude IRM du Minnesota, un anévrisme était présent chez **33,5 %** des patients porteurs d’un thrombus VG, contre **9,0 %** chez des témoins comparables sans caillot (Velangi 2019).

### Anévrisme, caillot et embolie

Le message principal de l’imagerie contemporaine est que le **caillot (thrombus)** porte l’essentiel du risque d’AVC, et que l’anévrisme compte surtout parce qu’il favorise la formation de ce caillot :

| Constat | Source |
|---|---|
| Un an après un infarctus antérieur, les patients avec anévrisme avaient davantage de caillots (**9,3 % contre 1,4 %**) et d’AVC ischémiques (**4,0 % contre 1,4 %**) | You 2021 |
| L’anévrisme prédisait l’embolie pris isolément (**HR 3,45**), mais une fois la présence d’un caillot prise en compte, seul le caillot restait prédictif de façon indépendante (**HR 3,99**) | Velangi 2019 |
| Chez 1 043 patients avec anévrisme ischémique, les facteurs indépendants d’embolie étaient un antécédent d’AVC/AIT, un caillot (**SHR 3,82**), une fibrillation atriale et un apex immobile (**SHR 1,83**) | Chen 2024 |
| D’anciennes séries chirurgicales citées en revue retrouvaient un caillot dans **35 à 50 %** des anévrismes ; les études modernes avec imagerie systématique en retrouvent **6 à 14 %** | El Ouazzani 2022 ; Chen 2024 ; Lee 2015 |`,
    },
    {
      headingFr: 'Un anévrisme sans caillot visible nécessite-t-il un anticoagulant ?',
      bodyMarkdownFr: `Cette question est au cœur de la clause britannique NICE 1.9.6. Les sources disponibles ne permettent pas de la trancher.

### Position des recommandations internationales (au 25 novembre 2026)

| Recommandation | Position sur l’anévrisme ou l’apex immobile | Précisions |
|---|---|---|
| **NICE NG106 (Royaume-Uni), 1.9.6** | En rythme sinusal, **envisager** une anticoagulation en cas d’anévrisme du VG (ou d’antécédent d’embolie ou de thrombus intracardiaque) | Mention **[2003]** : reconduite depuis 2003 sans réexamen ; sa base de preuves initiale n’a pas été retrouvée |
| **ESC 2026 (insuffisance cardiaque)** | Aucune recommandation dédiée à l’anévrisme ou au thrombus VG dans les sections consultées ; pas d’anticoagulation de routine en rythme sinusal sans indication précise (texte narratif) | ESC 2026, section 9.5 |
| **AHA/ACC/HFSA 2022 (IC)** | Anticoagulation sans indication spécifique : **Classe 3 : Absence de bénéfice (niveau B-R)** ; l’anévrisme n’est pas mentionné dans les extraits lus | Texte intégral AHA/ACC/HFSA 2022 |
| **Prise de position AHA 2022 (thrombus VG, texte intégral)** | **Aucune suggestion** d’anticoaguler un anévrisme sans caillot ; l’anévrisme figure uniquement comme facteur de risque de caillot. Après un STEMI antérieur aigu avec apex immobile ou bombant, une anticoagulation préventive se discute au cas par cas (1 à 3 mois si retenue) | Consensus non gradé. Un apex restant immobile figure parmi les arguments pour **poursuivre** l’anticoagulation après traitement d’un caillot |
| **ACC/AHA 2025 (SCA, section 9.4)** | **Silencieux** sur l’anticoagulation préventive d’un apex immobile/bombant ou d’un anévrisme sans caillot ; identifie une FEVG < 30 %, surtout avec anévrisme, comme situation à haut risque de thrombus | Texte narratif sans classe ; lu en texte intégral |
| **ACCF/AHA 2013 (STEMI)** | Une anticoagulation **peut être envisagée** après un STEMI avec apex antérieur immobile ou bombant (**Classe IIb, niveau C**) | Phase précoce post-infarctus uniquement ; lu indirectement ; **abandonné** dans le texte SCA 2025 |

### Ce que montrent les études observationnelles

- **Série ancienne de la Mayo Clinic (Lapeyre 1985) :** 76 patients atteints d’anévrisme chronique, majoritairement sans anticoagulant, suivis sur une médiane de 5 ans. Une **seule** embolie a été enregistrée (**0,35 pour 100 patients-années**), conduisant les auteurs à conclure qu’une anticoagulation au long cours n’était pas justifiée sans autre facteur de risque. Toutefois, aucun dépistage systématique de caillot n’était réalisé, seules les embolies cliniquement évidentes étaient comptées et l’étude précède les soins modernes de l’infarctus.
- **Cohorte coréenne (Lee 2015) :** 648 patients avec anévrisme ischémique, dont 106 traités par **warfarine (*Coumadin*)**. Après ajustement, la warfarine n’a **pas** réduit le critère décès, infarctus, AVC ou embolie (**HR 1,05**), ni les AVC/embolies isolés (**HR 1,52**). Le faible nombre de patients sous warfarine laisse une incertitude notable.
- **Cohorte chinoise (Chen 2024) :** 1 043 patients avec anévrisme ischémique, environ un tiers sous anticoagulant (souvent **rivaroxaban** — *Xarelto* — à faible dose). Les embolies étaient moins fréquentes sous anticoagulant (**3,1 % contre 9,0 %** ; **SHR 0,21**), mais le **bénéfice clinique net global ne différait pas** (**10,6 % contre 13,3 %**), avec des saignements majeurs à **5,6 % contre 3,5 %**. Un bénéfice net n’apparaissait que chez les patients ayant un apex immobile. Cette cohorte incluait toutefois des personnes en fibrillation atriale ou porteuses d’un caillot connu, et l’article comporte quelques incohérences internes.
- **Aucun essai randomisé** n’a évalué l’anticoagulation d’un anévrisme du VG sans thrombus.

Les taux d’embolie varient d’un facteur dix entre ces études (**0,35 pour 100 patients-années** dans la série Mayo contre environ **2,9 pour 100 patients-années** estimé à partir du nombre d’événements de la cohorte chinoise), reflet d’époques, de populations (inclusion de FA et de caillots) et de définitions d’événements différentes (Lapeyre 1985 ; Chen 2024).`,
    },
    {
      headingFr: 'Après la disparition d’un caillot',
      bodyMarkdownFr: `Deux petites études suggèrent que la présence d’un anévrisme pèse surtout **après** le traitement d’un premier thrombus VG :

- Chez **115 patients** dont le caillot avait disparu, une récidive est survenue chez **24 %** après une médiane de **1,2 an**. La présence d’un anévrisme augmentait le risque de récidive (**HR 2,59**), tandis que la poursuite de l’anticoagulation le réduisait (**HR 0,12**) (Zhou 2023).
- Chez **87 patients** ayant arrêté l’anticoagulation, un anévrisme ou une cicatrice était plus fréquent parmi les 9 personnes ayant récidivé (**33 % contre 10 %**). Les auteurs suggèrent de confirmer la disparition du caillot par **IRM cardiaque** avant d’arrêter l’anticoagulant en cas d’anévrisme ou de FEVG basse (Namjouyan 2024).
- Il s’agit de deux petites études rétrospectives monocentriques. Le taux très élevé de récidive dans un sous-groupe de la première étude (anévrisme sans anticoagulant) reste une hypothèse et ne prouve pas qu’un traitement à vie soit systématiquement nécessaire (Zhou 2023).

Les modalités de dépistage et de durée de traitement d’un caillot sont détaillées dans *Thrombus du ventricule gauche et anticoagulants*.`,
    },
    {
      headingFr: 'Chirurgie de l’anévrisme, faux anévrisme et réadaptation cardiaque',
      bodyMarkdownFr: `### Chirurgie d’un vrai anévrisme

- **Essai STICH — hypothèse 2 (2009) :** 1 000 patients atteints de cardiomyopathie ischémique avec paroi antérieure immobile ou bombante ont été randomisés entre pontage aorto-coronarien seul et pontage associé à une **reconstruction ventriculaire chirurgicale** (exérèse ou exclusion de la zone cicatricielle). L’intervention combinée a réduit la taille du ventricule gauche (baisse du volume télésystolique indexé de **19 % contre 6 %**), mais n’a **pas** diminué les décès ni les hospitalisations cardiovasculaires (**58 % contre 59 %** ; **HR 0,99**) sur environ 4 ans.
- **Analyse post hoc de STICH (Michler 2013) :** chez les 555 patients disposant d’imageries appariées exploitables, la survie avec reconstruction n’était supérieure au pontage seul que lorsque le cœur atteignait un petit volume post-opératoire (**VTSi ≤ 70 mL/m²** à 4 mois), et moins bonne au-delà. Ce résultat provient de courbes lissées sur un sous-groupe non randomisé et reste exploratoire.
- **Prise en charge habituelle et indications ciblées :** la prise de position américaine **AHA 2021** sur les complications mécaniques de l’infarctus rappelle que le vrai anévrisme est le plus souvent traité de manière **conservatrice** (traitement médical). Des recommandations plus anciennes et la revue d’El Ouazzani (2022) évoquent la chirurgie (anévrisectomie) uniquement en cas d’insuffisance cardiaque réfractaire, de tachycardies ventriculaires non contrôlées par les médicaments ou l’ablation, ou d’embolies récidivantes malgré une anticoagulation adaptée, avec une mortalité opératoire de **3 à 23 %** dans les séries rapportées.
- **Recommandations et techniques moins invasives :** les recommandations **ESC/EACTS 2018** sur la revascularisation attribuaient une **Classe IIb, niveau B** à la reconstruction associée au pontage chez des patients sélectionnés présentant une cicatrice du territoire de l’IVA, notamment lorsqu’un VTSi post-opératoire inférieur à 70 mL/m² paraît atteignable (lu indirectement). Les dispositifs percutanés ou hybrides (*Revivent*, *PARACHUTE*) ne disposent que de séries à un seul bras, et l’essai *PARACHUTE IV* a été interrompu en 2017 sans résultats publiés (les auteurs de la revue Spilias 2023 déclarent des liens d’intérêt avec un fabricant).

### Faux anévrisme (pseudo-anévrisme)

- Le faux anévrisme correspond à une rupture contenue à collet étroit, plus souvent de localisation inférieure ou latérale, considérée comme une **urgence chirurgicale** ; lorsqu’il est découvert fortuitement longtemps après un infarctus ancien, une réparation urgente (plutôt qu’immédiate) peut être discutée (AHA 2021).
- D’anciennes séries (Inayat 2018, reprenant des chiffres des années 1990 de seconde main) font état d’une incidence post-infarctus inférieure à **2 %**, d’une localisation inférieure ou postérolatérale dans **82 %** des cas et d’une mortalité chirurgicale de **23 à 28 %**. L’**IRM cardiaque** y était l’examen le plus fiable pour distinguer vrai et faux anévrisme (**sensibilité 100 %, spécificité 83 %**), contre **26 %** de diagnostic posé par l’ETT standard.

### Activité physique et réadaptation cardiaque (SMR)

Les recommandations françaises **GERS-P / Société Française de Cardiologie (2023)** classent l’anévrisme ventriculaire comme une **contre-indication relative** au réentraînement à l’effort, et un thrombus intracardiaque à haut risque comme une **contre-indication absolue**. Une contre-indication relative signifie que l’équipe de réadaptation évalue la situation au cas par cas, sans exclure d’office le programme (voir *Réadaptation cardiaque (SMR) et activité physique* et *Revascularisation coronaire : pontage et stents*).`,
    },
    {
      headingFr: 'Applicabilité à une FEVG autour de 35 % et limites des preuves',
      bodyMarkdownFr: `### Applicabilité à la cardiomyopathie ischémique (FEVG ~35 %)

- **Partielle :** les cohortes d’anévrisme sont toutes d’origine ischémique, et environ la moitié des patients de la cohorte chinoise avaient une FEVG ≤ 40 %, mais aucune ne publie séparément les résultats autour de 35 % (Chen 2024).
- **Biais observationnels :** les deux cohortes contemporaines (coréenne et chinoise) sont asiatiques, monocentriques et rétrospectives ; le choix d’anticoaguler reposait sur le jugement clinique, source possible de biais dans les deux sens (Lee 2015 ; Chen 2024).
- **STICH hypothèse 2** correspond directement à la population cible (origine ischémique, paroi antérieure immobile ou bombante, FEVG basse), mais répond à une question chirurgicale et non à celle des anticoagulants.

### Limites des preuves (niveau global faible)

- **Origine non retrouvée de la clause NICE 2003 :** les études résumées ici sont des données observationnelles indépendantes et non le socle utilisé par le NICE en 2003.
- **Majorité de résumés :** Lapeyre (1985), Lee (2015), Zhou (2023) et STICH hypothèse 2 (2009) n’ont été consultés qu’en résumé ; Chen (2024), You (2021) et la revue El Ouazzani (2022) ont été lus en texte intégral.
- **Absence d’essai randomisé** testant l’anticoagulation pour un anévrisme du VG sans thrombus visible.`,
    },
  ],
  relatedArticleSlugs: [
    'thrombus-vg-et-anticoagulants',
    'cardiomyopathie-ischemique',
    'revascularisation-pontage-stents',
    'examens-et-chiffres',
    'readaptation-cardiaque-et-activite-physique',
    'recommandations-comparees-esc-us-nice',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'glossaire-cardiologie',
  ],
  sources: [
    {
      label: 'El Ouazzani et al. (2022) et Inayat et al. (2018)',
      detail: 'Définitions et fréquence du vrai anévrisme versus faux anévrisme (pseudo-anévrisme), mortalité opératoire et apport de l’IRM',
    },
    {
      label: 'You et al. (2021) et Velangi et al. (2019)',
      detail: 'Incidence de l’anévrisme après STEMI antérieur à l’ère des stents (15,9 %), caillots et valeur prédictive indépendante du thrombus en IRM',
    },
    {
      label: 'Lapeyre (1985), Lee (2015) et Chen (2024)',
      detail: 'Séries observationnelles sur l’embolie et l’anticoagulation dans l’anévrisme ischémique du VG',
    },
    {
      label: 'Zhou et al. (2023) et Namjouyan et al. (2024)',
      detail: 'Récidive de thrombus VG après disparition ou arrêt de l’anticoagulation en présence d’un anévrisme',
    },
    {
      label: 'STICH hypothèse 2 (2009), Michler et al. (2013) et Spilias et al. (2023)',
      detail: 'Reconstruction ventriculaire chirurgicale associée au pontage, analyse post hoc de volume (VTSi ≤ 70 mL/m²) et dispositifs percutanés',
    },
    {
      label: 'Recommandations NICE NG106 (1.9.6), ESC 2026 IC (sec. 9.5), AHA/ACC/HFSA 2022, AHA 2021 et 2022, ACC/AHA 2025 SCA (sec. 9.4) et GERS-P / SFC 2023',
      detail: 'Divergences sur l’anticoagulation sans caillot, prise en charge des complications mécaniques et contre-indication relative en réadaptation cardiaque',
    },
  ],
  disclaimerType: 'medical',
};
