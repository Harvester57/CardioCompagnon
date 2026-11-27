import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'pollution-de-lair-et-bruit',
  sourceWikiPath: 'wiki/concepts/air-pollution-and-noise.md',
  titleFr: "Pollution de l'air, fumées d'incendies et bruit des transports",
  category: 'quotidien',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'pollution-air',
    'pm2.5',
    'no2',
    'ozone',
    'fumée-incendies',
    'purificateur-air',
    'hepa',
    'masques',
    'indice-atmo',
    'prevair',
    'bruit',
    'bruit-routier',
    'bruit-aerien',
    'bruit-nocturne',
    'sommeil',
    'oms-2018',
    'bruitparif',
    'france',
  ],
  aliases: [
    "Pollution de l'air et insuffisance cardiaque",
    'Épisode de pollution',
    'Indice ATMO',
    "Prév'Air",
    'Particules fines',
    'PM2,5',
    "Fumées d'incendies",
    "Purificateur d'air HEPA",
    'Masque FFP2 pollution',
    'Bruit routier et cœur',
    'Bruit aérien',
    'Bruit nocturne et sommeil',
    "Aide à l'insonorisation aéroport",
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Deux facteurs invisibles de votre lieu de vie — l'air que vous respirez et le bruit pendant votre sommeil — sollicitent le cœur au quotidien. Les pics de particules fines (PM2,5), de dioxyde d'azote (NO2) ou de fumées d'incendies peuvent déclencher une hospitalisation pour insuffisance cardiaque le jour même ou dans les jours suivants. En France, l'indice ATMO et Prév'Air permettent d'adapter vos sorties et vos activités. De son côté, le bruit chronique des transports (surtout la nuit) fragmente le sommeil, élève les hormones de stress et s'associe à davantage de maladies coronaires et d'insuffisance cardiaque.",
  sections: [
    {
      headingFr: "Pollution de l'air : quels gestes adopter en France les jours d'épisode ?",
      depth: 'patient',
      bodyMarkdownFr: `Les jours où l'air est chargé en particules fines (**PM2,5**), en gaz issus du trafic (**NO2**) ou en fumées d'incendies, les hospitalisations pour insuffisance cardiaque augmentent, le plus souvent le jour même ou dans les 3 à 4 jours suivants.

### Vérifier la qualité de l'air en France (état au 26 novembre 2026)

- **Indice ATMO (Atmo France) :** indice quotidien par commune comportant **6 classes** (*bon, moyen, dégradé, mauvais, très mauvais, extrêmement mauvais*), calculé à partir de l'ozone, du NO2, du SO2, des PM10 et des PM2,5 (le polluant le plus mauvais détermine la classe ; aligné sur l'indice européen depuis 2021 ; n'inclut pas les particules ultrafines ni les pollens).
- **Prév'Air** (prevair.org, géré par l'INERIS avec Météo-France, le CNRS et le LCSQA) : prévoit l'ozone, le NO2 et les particules jusqu'à **5 jours à l'avance** en France métropolitaine (en Île-de-France, **Airparif** publie également les bulletins locaux).

### Conseils officiels pour les personnes cardiaques vulnérables (santé.fr, 9 août 2024)

Les personnes atteintes de maladie cardiaque ou d'insuffisance cardiaque sont officiellement identifiées comme **vulnérables** :

- **Privilégiez des sorties brèves** et évitez les efforts physiques intenses ; demandez à votre médecin si votre traitement nécessite une adaptation et consultez rapidement en cas de gêne respiratoire ou cardiaque.
- **Épisodes de particules et de NO2 :** évitez les grands axes routiers aux heures de pointe (les particules culminent souvent tôt le matin et en soirée) et limitez les activités intenses aussi bien en extérieur qu'en intérieur.
- **Épisodes d'ozone (fréquents en canicule) :** évitez de sortir l'**après-midi** (pic d'ozone en milieu et fin d'après-midi) ; une activité douce en intérieur reste possible.
- **Continuez d'aérer votre logement** aux heures les moins polluées : un épisode de pollution ne signifie pas rester confiné sans renouveler l'air.
- **La voiture ne protège pas :** les automobilistes respirent davantage de polluants que les piétons ou cyclistes.
- **Évitez les irritants supplémentaires :** fumée de tabac, solvants intérieurs et feux de bois (Atmo France).
- **Canicule + ozone :** combinez les consignes (pièce la plus fraîche l'après-midi, règles ANSM sur les médicaments en canicule, jamais d'arrêt de traitement sans avis). Numéros utiles : **15 (SAMU)** en urgence, **0800 06 66 66** pour la ligne nationale canicule (voir *Voyages, altitude, canicule et extrêmes climatiques dans l'IC*).

### Purificateurs d'air HEPA et masques anti-pollution

- **Purificateur d'air HEPA :** peu susceptible de nuire et associé à une légère baisse de la tension systolique (~2 mmHg) dans de petits essais courts chez des personnes surtout saines, mais ce n'est pas un traitement cardiaque et aucun essai n'a montré moins d'événements cardiaques.
- **Masques (FFP2 / N95) :** **Atmo France** indique clairement que les masques anti-pollution ne réduisent pas l'impact sanitaire de la pollution urbaine ordinaire, et les essais courts vont dans le même sens. En cas de fumée d'incendie très dense, demandez à votre cardiologue si un masque est envisageable et compatible avec votre souffle.`,
    },
    {
      headingFr: 'Bruit des transports : protéger son sommeil et son cœur',
      depth: 'patient',
      bodyMarkdownFr: `Le bruit chronique des routes, des trains et surtout des avions la nuit fragmente le sommeil, active le système du stress (**cortisol et adrénaline**), favorise l'inflammation vasculaire et élève la tension artérielle. Aucun essai n'a prouvé qu'une mesure individuelle réduise les événements cardiaques, mais protéger votre sommeil est une mesure de bon sens :

- **Dormez côté calme :** si possible, placez votre chambre du côté le moins exposé à la rue ou aux couloirs aériens.
- **Fenêtres et aération :** des fenêtres à isolation acoustique réduisent le bruit intérieur ; gardez les fenêtres fermées la nuit sur les axes bruyants tout en aérant aux heures plus calmes (et en conciliant le rafraîchissement nocturne en cas de canicule).
- **Bouchons d'oreilles :** dans une étude de laboratoire, des bouchons en mousse réduisaient mieux les réveils liés au bruit que le masquage par bruit rose.
- **Vérifier votre exposition en France :** les **cartes de bruit stratégiques** régionales (en Île-de-France, **Bruitparif**) affichent les niveaux routiers, ferroviaires et aériens par adresse.
- **Aide à l'insonorisation près des grands aéroports (ecologie.gouv.fr, 7 octobre 2026) :** pour les logements situés dans le **plan de gêne sonore (PGS)** des **11 grands aéroports français** (Bâle-Mulhouse, Beauvais, Bordeaux, Lyon-Saint-Exupéry, Marseille, Nantes, Nice, Paris-CDG, Paris-Orly, Le Bourget, Toulouse), l'aide finance habituellement **80 %** des travaux, **90 à 100 % selon les revenus**, et **95 %** pour les opérations groupées (demande auprès du gestionnaire d'aéroport).
- **Parlez de votre sommeil à votre équipe :** dans l'insuffisance cardiaque, un mauvais sommeil peut aussi provenir d'une apnée du sommeil, d'un essoufflement en position allongée ou de l'horaire d'un diurétique (voir *Apnée du sommeil et insuffisance cardiaque*).`,
    },
    {
      headingFr: 'Ce que cela signifie avec une FEVG autour de 35 %',
      depth: 'patient',
      bodyMarkdownFr: `- **Traitez les jours de forte pollution ou de fumée comme un facteur déclenchant parmi d'autres :** allégez vos activités extérieures, évitez le trafic aux heures de pointe et l'ozone l'après-midi, poursuivez votre **pesée quotidienne** et appliquez votre plan d'action écrit si votre poids ou votre essoufflement augmente dans les jours qui suivent.
- **Déménager ou non :** l'unique conseil individuel des recommandations européennes (ESC 2021) est faible et porte sur l'évitement d'une résidence prolongée dans une zone très polluée ; changer de logement reste un choix personnel qu'aucun essai ne valide ni n'infirme.
- **Priorité aux mesures prouvées :** ni les purificateurs ni les masques ne remplacent vos traitements de fond, le suivi du poids et du sel, la réadaptation cardiaque ou les vaccinations contre les infections hivernales.`,
    },
    {
      headingFr: "Pour aller plus loin : preuves épidémiologiques sur la pollution de l'air",
      depth: 'evidence',
      bodyMarkdownFr: `### Déclencheurs à court terme : méta-analyses Shah (2013) et Jia (2023)

Dans **Shah et al. (*The Lancet*, 2013**, 35 études en population générale, résumé consulté), chaque hausse journalière de polluant s'associait à davantage d'**hospitalisations ou décès pour insuffisance cardiaque** (effet maximal le jour même, plus prolongé pour les PM2,5) :

| Polluant | Par incrément de | Hausse des hospitalisations ou décès IC (IC 95 %) |
|---|---|---|
| Particules fines **PM2,5** | 10 µg/m³ | **+2,12 %** (1,42 à 2,82) |
| Particules **PM10** | 10 µg/m³ | **+1,63 %** (1,20 à 2,07) |
| Dioxyde d'azote **NO2** (trafic) | 10 ppb | **+1,70 %** (1,25 à 2,16) |
| Dioxyde de soufre **SO2** | 10 ppb | **+2,36 %** (1,35 à 3,38) |
| Monoxyde de carbone **CO** | 1 ppm | **+3,52 %** (2,52 à 4,54) |
| **Ozone** | 10 ppb | **+0,46 %** (−0,10 à 1,02), **non significatif** |

- **Jia et al. (*Environ Health Perspect*, 2023, 100 études, 20 pays) :** confirme l'effet à court terme des PM2,5 (**RR 1,018** par 10 µg/m³, IC 95 % **1,011–1,025**), plus fort sur le jour même et le lendemain ; ozone à nouveau non significatif ; associations **plus faibles dans les pays à haut revenu** comme la France. À long terme : **PM2,5 RR 1,75** (1,11–2,75, intervalle très large), **PM10 RR 1,21** (1,01–1,45), **NO2 RR 1,20** par 10 ppb (1,07–1,36) pour la survenue d'une IC.
- **Fumées d'incendies (Wettstein 2018, Californie, 56 686 passages aux urgences IC) :** hausse des urgences IC de **9 à 13 %** chez l'adulte et jusqu'à **+22 %** chez les ≥ 65 ans, culminant **3 jours** après l'exposition (**RR 1,22**, 1,10–1,35), sans variation sur une pathologie témoin (appendicite).

### Recommandations et essais d'interventions

- **ESC 2021 (Prévention CV, texte intégral) :** la pollution accroît coronaropathie, IC, arythmies et arrêts cardiaques (estimation : 2,9 ans d'espérance de vie perdus dans le monde). Conseils : encourager les patients à (très) haut risque CV à éviter une exposition **prolongée** aux zones très polluées (**Classe IIb, C**) ; dépistage opportuniste dans ces zones (**IIb, C**) ; réduction collective des polluants (**Classe I, C**). Aucun avis sur purificateurs ou masques.
- **AHA 2010 (Brook) & AHA 2020 (Rajagopalan, résumés) :** lien jugé compatible avec une relation causale pour les PM2,5 (2010) ; mesures individuelles fondées sur consensus d'experts avec preuves limitées (2020).
- **Purificateurs HEPA (Xia 2021, 14 essais croisés, sujets surtout sains) :** PAS **−2,3 mmHg** (0,6–3,9), sans effet significatif sur la PAD, la CRP ni la fonction vasculaire ; certitude **très faible**, aucun essai d'événements cardiaques.
- **Masques respiratoires N95/FFP2 (Faridi 2022, 8 essais, 312 jeunes adultes sains, port 2–48 h) :** aucun changement significatif de la PAS (**−0,8 mmHg**) ; un essai en bord de route n'a pas empêché les effets artériels des particules.`,
    },
    {
      headingFr: 'Pour aller plus loin : preuves sur le bruit des transports et limites',
      depth: 'evidence',
      bodyMarkdownFr: `### Seuils recommandés par l'OMS (2018) contre plafonds réglementaires français

L'OMS recommande fortement de rester sous ces niveaux moyens (reproduction Bruitparif 2024 ; Lden = moyenne pondérée 24 h, Lnight = nuit) :

| Source | Recommandation OMS Lden | Recommandation OMS Lnight | Plafonds légaux français (Lden / Lnight) |
|---|---|---|---|
| **Trafic routier** | **53 dB** | **45 dB** | 68 dB / 62 dB |
| **Ferroviaire** | **54 dB** | **44 dB** | — |
| **Aérien** | **45 dB** | **40 dB** | 55 dB / 50 dB |

En Île-de-France dense, **86 % des habitants** dépassent au moins un seuil OMS Lden (Bruitparif 2024).

### Études cardiovasculaires et limites méthodologiques

- **Mécanismes (Münzel 2021) :** une seule nuit de bruit aérien simulé (moyenne 46 dB, pics à 60 dB) altère le sommeil, élève les hormones de stress et dégrade la fonction endothéliale — effet **le plus marqué chez les patients coronariens**. Chaque hausse de 10 dB de bruit nocturne double environ le risque de forte perturbation du sommeil (**OR 2,13**).
- **Maladie coronaire (van Kempen 2018, revue OMS) :** **+8 %** de nouvelle maladie coronaire par 10 dB Lden de bruit routier (**RR 1,08**, 1,01–1,15 ; preuve de haute qualité ; qualité faible/très faible pour avion et rail).
- **Insuffisance cardiaque incidente (population générale) :**
  - Cohorte danoise (**Sørensen 2017**, 50 954 adultes, 2 550 hospitalisations IC) : **IRR 1,14** par ~10 dB de bruit routier, ramené à **1,08** (1,00–1,16) après ajustement sur le NO2 (bruit élevé + NO2 élevé : **IRR 1,31**).
  - Registre national danois (**Thacher 2022**, ~2,5 millions, 79 358 cas d'IC) : **HR 1,039** par 10 dB après ajustement sur la pollution.
  - Étude cas-témoins Rhin-Main (**Seidler 2016**) : IC ou cardiopathie hypertensive **+2,4 %** (route), **+3,1 %** (rail), **+1,6 %** (avion) par 10 dB ; les pics nocturnes d'avions > 50 dB augmentaient le risque même avec une moyenne < 40 dB.
  - Synthèse **Münzel (2021)** : **+2 à +8 %** d'IC par 10 dB sur cinq études longitudinales.
  - Cohorte suisse (**Vienneau 2022**, 4,1 millions d'adultes) : décès CV **+2,9 %** par 10 dB routier ; décès par infarctus **+4,3 %** (route) et **+4,0 %** (avion).
- **Limites des preuves :** **aucune cohorte dédiée à l'ICFER** (toutes les études sont en population générale, sans FEVG ni étiologie ischémique) ; forte corrélation entre bruit routier, NO2, niveau socio-économique et qualité du logement ; essais de purificateurs et masques courts chez des sujets sains sur critères intermédiaires uniquement.`,
    },
  ],
  relatedArticleSlugs: [
    'voyages-canicule-et-climat-ic',
    'apnee-du-sommeil-insuffisance-cardiaque',
    'readaptation-cardiaque-et-activite-physique',
    'tabac-et-alcool-insuffisance-cardiaque',
    'tension-arterielle-insuffisance-cardiaque',
    'isolement-social-et-lien-social',
    'sante-bucco-dentaire-et-gencives',
    'vivre-avec-insuffisance-cardiaque-en-france',
    'questions-equipe-cardiologie',
  ],
  sources: [
    {
      label: 'Méta-analyses Shah (Lancet 2013, 35 études), Jia (EHP 2023, 100 études) & Wettstein (2018, fumées d’incendies)',
      detail: 'Effets à court et long terme des PM2,5, PM10, NO2, CO et fumées d’incendies (+22 % d’urgences IC à J+3 chez les ≥ 65 ans) sur l’insuffisance cardiaque.',
    },
    {
      label: 'Recommandations ESC Prévention CV (2021, texte intégral) & déclarations AHA (Brook 2010, Rajagopalan 2020)',
      detail: 'Classe IIb C pour l’évitement d’une exposition prolongée aux zones très polluées, causalité PM2,5 et limites des preuves sur les mesures individuelles.',
    },
    {
      label: 'Méta-analyses d’essais randomisés Xia (2021, purificateurs HEPA) & Faridi (2022, masques N95/FFP2)',
      detail: 'PAS −2,3 mmHg (très faible certitude) sous HEPA, absence d’effet tensionnel significatif des masques et absence d’essai sur les événements cardiaques.',
    },
    {
      label: 'Atmo France (indice ATMO), Prév’Air, santé.fr (9 août 2024) & ministère de la Transition écologique (2026)',
      detail: 'Prévisions à 5 jours, recommandations officielles françaises pour les personnes cardiaques vulnérables lors des épisodes de particules, NO2 et ozone-canicule.',
    },
    {
      label: 'OMS (2018), van Kempen (2018), Münzel (2021), Sørensen (2017), Thacher (2022), Seidler (2016), Vienneau (2022) & Bruitparif / ecologie.gouv.fr (2024–2026)',
      detail: 'Seuils OMS Lden/Lnight vs plafonds français, risques coronaires et d’IC liés au bruit des transports, cartes de bruit et aide à l’insonorisation des 11 grands aéroports.',
    },
  ],
  disclaimerType: 'medical',
};
