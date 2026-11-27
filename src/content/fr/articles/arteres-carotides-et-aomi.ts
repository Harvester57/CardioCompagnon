import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'arteres-carotides-et-aomi',
  sourceWikiPath: 'wiki/concepts/carotid-and-leg-artery-disease.md',
  titleFr: 'Artères carotides et artériopathie des membres inférieurs (AOMI)',
  category: 'comorbidites',
  readingTier: 'deep_dive',
  asOf: '2026-11-26',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'aomi',
    'arteriopathie-membres-inferieurs',
    'stenose-carotidienne',
    'maladie-polyvasculaire',
    'ips',
    'claudication',
    'marche-supervisee',
    'readaptation-vasculaire',
    'rivaroxaban',
    'compass',
    'voyager-pad',
    'endarteriectomie-carotidienne',
    'france',
    'icfer',
  ],
  aliases: [
    'AOMI',
    'Artériopathie oblitérante des membres inférieurs',
    'Claudication intermittente',
    'Index de pression systolique',
    'IPS',
    'Sténose carotidienne',
    'Artères carotides',
    'Maladie polyvasculaire',
    'Réadaptation vasculaire',
  ],
  linkedModules: ['core', 'lvThrombusOrAneurysm'],
  plainSummaryFr:
    "L'athérosclérose qui rétrécit les artères coronaires touche fréquemment d'autres territoires, en particulier les artères des jambes (AOMI) et les artères du cou irriguant le cerveau (carotides). Une douleur de type crampe au mollet survenant à la marche et cédant en quelques minutes au repos évoque une claudication, tandis qu'une sténose carotidienne reste le plus souvent silencieuse jusqu'à un accident ischémique transitoire (AIT) ou un AVC. Tout dépistage systématique chez chaque patient coronarien n'est pas recommandé : c'est votre équipe qui décide de mesurer l'index de pression systolique (IPS) ou de réaliser un écho-Doppler selon votre âge, vos symptômes et vos facteurs de risque. L'arrêt du tabac, un LDL-c inférieur à 0,55 g/L, un traitement antiplaquettaire et surtout la marche supervisée (réadaptation vasculaire en France) protègent l'ensemble de vos artères. L'ajout de rivaroxaban à faible dose en complément de l'aspirine comporte des limites importantes dans l'ICFER et relève d'une discussion spécialisée.",
  keyTakeawaysFr: [
    "Signalez toute douleur au mollet à la marche (claudication), toute plaie du pied qui ne cicatrise pas, ou tout signe neurologique brutal même bref (faiblesse, parole, vision : appelez le 15, le 112 ou le 114).",
    "La mesure de l'index de pression systolique (IPS) à la cheville est un examen simple et indolore qui dépiste l'AOMI (seuil ≤ 0,90).",
    "La marche supervisée (au moins 3 séances de 30 minutes par semaine pendant 12 semaines, en réadaptation vasculaire en France) est un traitement de première ligne très efficace, à condition que votre insuffisance cardiaque soit stable.",
    "L'arrêt du tabac et la cible de LDL-c < 0,55 g/L protègent simultanément vos artères coronaires, carotides et des membres inférieurs.",
  ],
  sections: [
    {
      headingFr: '1. Maladie polyvasculaire : symptômes à reconnaître et examen IPS',
      depth: 'patient',
      bodyMarkdownFr: `Environ **1 personne sur 4 à 6** atteintes d'athérosclérose présente une atteinte dans au moins deux territoires artériels (**maladie polyvasculaire**). Chez les personnes suivies pour maladie coronaire, les recommandations ESC 2024 rapportent une AOMI dans **7 à 16 %** des cas et un rétrécissement serré (> 70 %) d'une artère carotide dans **5 à 9 %** des cas.

### Symptômes d'AOMI à signaler

- **Claudication intermittente :** crampe, serrement ou fatigue au mollet (parfois à la cuisse ou à la fesse) apparaissant à la marche et disparaissant en **1 à 3 minutes** d'arrêt (toujours en moins de 10 minutes).
- **Signes d'aggravation (ameli.fr) :** douleur au repos — surtout la nuit, soulagée en pendant la jambe hors du lit — persistant plus de 15 jours, ou plaie / ulcère du pied qui ne cicatrise pas.
- **Urgence immédiate (appelez le 15, le 112 ou le 114 par SMS) :** jambe brutalement froide, pâle et très douloureuse (ischémie aiguë d'un membre), ou tout signe d'AIT / AVC (faiblesse ou engourdissement brutal d'un côté, trouble de la parole, perte de vision d'un œil), même si les symptômes disparaissent en quelques minutes.
- De nombreuses personnes ayant une AOMI n'ont aucun symptôme aux jambes, ou sont limitées par l'essoufflement cardiaque avant que la douleur au mollet n'apparaisse.

### L'index de pression systolique (IPS)

L'IPS compare la pression artérielle mesurée à la cheville à celle mesurée au bras (examen simple au Doppler de poche) :

| Valeur d'IPS | Interprétation (ESC 2024 / ameli.fr) |
|---|---|
| **≤ 0,90** | Confirme une AOMI (test de première intention, **Classe I, B**) |
| **0,90 à 1,40** | Zone normale |
| **> 1,40** | Artères trop rigides pour être comprimées (fréquent en cas de diabète ou de maladie rénale) : une mesure de pression à l'orteil (index orteil-bras, anormal si ≤ 0,70) est alors nécessaire (**Classe I, B**) |

Les recommandations ESC 2024 ne conseillent **pas** de dépister systématiquement tous les patients coronariens sans distinction : votre équipe décide d'un IPS (souvent à partir de 65 ans avec facteurs de risque, ou chez une personne diabétique ou insuffisante rénale) ou d'un écho-Doppler carotidien selon votre profil global. En France, lorsqu'une AOMI est diagnostiquée, le bilan recherche habituellement une atteinte coronaire et carotidienne associée, et la maladie peut ouvrir droit à une prise en charge en **ALD** à 100 %.`,
    },
    {
      headingFr: '2. Traitements de l’AOMI, réadaptation vasculaire en France et carotides',
      depth: 'patient',
      bodyMarkdownFr: `### Marche supervisée et réadaptation vasculaire (HAS 2024)

La **marche supervisée** est le traitement de première intention de la claudication (**ESC 2024 Classe I, A**, également recommandée après une angioplastie ou un pontage des jambes) : au moins **3 séances par semaine d'au moins 30 minutes pendant 12 semaines**.

En France, la **HAS (2024)** place la **réadaptation vasculaire** en première ligne avant tout geste invasif et systématiquement après revascularisation des membres inférieurs :

- Un programme supervisé en service de **SMR** (hôpital de jour ou hospitalisation complète) est privilégié ; à défaut, un programme structuré à domicile avec réévaluation à 6 semaines est proposé.
- **Point de sécurité cardiaque :** une **insuffisance cardiaque décompensée** est une contre-indication absolue à l'entraînement ; la stabilité cardiaque passe toujours en premier. Une fois votre cœur stabilisé, l'entraînement à la marche peut être intégré à la réadaptation cardiaque avec votre équipe (voir *Réadaptation cardiaque (SMR) et activité physique*).
- En cas de tabagisme, une orientation vers une consultation de tabacologie est proposée d'emblée.

### Médicaments partagés et revascularisation

- **Prévention commune à toutes les artères :** arrêt complet du tabac (**I, A** ; la cigarette électronique uniquement en aide transitoire au sevrage, jamais en cumul avec le tabac), **LDL-c réduit d'au moins 50 % et inférieur à 0,55 g/L** (1,4 mmol/L) en maladie polyvasculaire (**I, A**), statine, IEC/ARA2/ARNI et traitement antiplaquettaire (aspirine ou clopidogrel en monothérapie dans l'AOMI symptomatique, **I, A**).
- **Revascularisation d'une jambe** (stent ou pontage) : envisagée dans les formes avancées ou après échec d'environ 3 mois de traitement médical bien conduit (ameli.fr).

### Sténose des artères carotides : quand opère-t-on ?

La décision dépend avant tout de la présence ou non de symptômes récents (AIT ou AVC) et du degré de rétrécissement :

- **Sténose symptomatique (AIT ou AVC récent) de 70 à 99 % :** intervention chirurgicale (endartériectomie carotidienne) recommandée (**I, A**), idéalement **dans les 14 jours** (**I, B**). Entre 50 et 69 %, elle est à envisager (**IIa, A**) ; sous 50 %, elle n'est pas recommandée (**III, A**).
- **Sténose asymptomatique (découverte fortuite sans AIT ni AVC) :** l'opération systématique n'est **pas** recommandée (**III, A**). Une intervention n'est discutée que pour les sténoses de 60 à 99 % avec critères de haut risque, à condition d'un risque opératoire faible (< 3 %) et d'une espérance de vie > 5 ans (**IIa, B**). Une aspirine à faible dose au long cours est à envisager au-delà de 50 % si le risque hémorragique est faible (**IIa, C**).
- **Spécificité de l'ICFER :** l'ESC 2024 classe une **FEVG < 30 %** ou une insuffisance cardiaque **NYHA III–IV** parmi les critères de **haut risque opératoire** pour la chirurgie carotidienne ; dans ce contexte, un stenting carotidien peut être discuté en alternative.
- **Avant un pontage coronarien :** la majorité des AVC post-pontage (> 75 %) ne sont pas liés à une sténose carotidienne mais à l'aorte. L'ESC 2024 propose un écho-Doppler carotidien avant pontage surtout en cas d'AIT ou d'AVC dans les 6 derniers mois (**IIa, B**).`,
    },
    {
      headingFr: '3. Données des essais, rivaroxaban à dose vasculaire (COMPASS) et limites',
      depth: 'evidence',
      bodyMarkdownFr: `### Pronostic et prévalence dans l'ICFER

- **Dewan et coll. (2023 ; 15 066 patients d'essais ICFER) :** AOMI présente chez **5,5 %** des patients et associée au rapport de risque ajusté de mortalité le plus élevé des dix comorbidités étudiées (**HR 1,39**).
- **ESC 2024 PAAD :** l'association AOMI + insuffisance cardiaque s'accompagne d'environ **+30 %** d'événements cardiaques majeurs et **+40 %** de décès ; 20 à 30 % des patients ayant une AOMI ont une dysfonction ventriculaire gauche.
- **Marche supervisée (Cochrane 2018 ; 21 essais, 1 400 patients, résumé) :** à 3 mois, gain d'environ **+120 m** de distance maximale de marche par rapport à un exercice non supervisé à domicile (certitude modérée) et **+210 m** par rapport à de simples conseils de marche (certitude élevée), sans aucun décès lié à l'exercice.

### Double voie antithrombotique : rivaroxaban 2,5 mg x 2 + aspirine 100 mg/j

| Source | Recommandation ESC 2024 PAAD | Classe |
|---|---|---|
| **AOMI symptomatique à haut risque ischémique** (sans haut risque hémorragique) | Rivaroxaban (*Xarelto*) 2,5 mg deux fois/j + aspirine 100 mg/j à envisager — **l'insuffisance cardiaque est listée comme critère de haut risque ischémique** | **IIa, A** |
| **Après revascularisation des membres inférieurs** | Même association à envisager | **IIa, B** |
| **Maladie polyvasculaire stable** (symptomatique dans au moins un territoire, faible risque hémorragique) | Même association à envisager | **IIa, A** |

**Limites décisives pour l'ICFER issues des essais :**

- **COMPASS (sous-analyse IC, texte intégral) :** a **exclu les FEVG < 30 % et les classes NYHA III–IV**. Seuls **721 patients** IC avaient une FEVG < 40 %, avec un effet incertain sur les MACE (**HR 0,88 ; IC 95 % 0,55–1,42**) et une hausse numérique des saignements majeurs (**HR 1,36 ; 0,88–2,09**). *Applicabilité : partielle* pour une ICFER stable NYHA I–II autour de 35 % de FEVG, *extrapolée* si FEVG < 30 % ou NYHA III–IV.
- **COMMANDER-HF (ICFER ischémique récemment décompensée, FEVG ≤ 40 %) :** rivaroxaban 2,5 mg deux fois/j n'a **pas** réduit les décès, infarctus ou AVC (*applicabilité directe* pour une décompensation récente, mais sans critère d'AOMI).
- **VOYAGER PAD (6 564 patients après revascularisation des jambes, résumé et synthèse ACC) :** critère principal 17,3 % vs 19,9 % à 3 ans (**HR 0,85 ; 0,76–0,96**), ischémie aiguë de membre 5,2 % vs 7,8 %, au prix de davantage de saignements majeurs ISTH (5,94 % vs 4,06 % ; **HR 1,42 ; 1,10–1,84**, sans hausse des hémorragies intracrâniennes). Aucune donnée de sous-groupe IC/FEVG disponible.
- Cette association ne s'applique **pas** si vous avez déjà besoin d'un anticoagulant à pleine dose (fibrillation atriale ou thrombus VG).

### Dépistage ciblé et chirurgie carotidienne avant pontage (ESC 2024 / Xodo 2024)

- **Dépistage ESC 2024 :** IPS/IOB dès 65 ans avec facteurs de risque (**IIa, C**), sans facteur de risque (**IIb, C**) ; IOB en cas de diabète ou de MRC avec IPS normal (**IIa, B**) ; écho-Doppler carotidien en présence d'au moins 2 facteurs de risque (**IIb, C**).
- **Avant pontage coronarien (Xodo 2024) :** sténose > 50 % chez ~9 % et > 80 % chez ~7 % des candidats au pontage. Les recommandations ESVS 2023 (citées via Xodo 2024) déconseillent le dépistage systématique sans symptôme (III, C), et l'essai **CABACS** (127 patients) n'a montré aucun bénéfice à associer une chirurgie carotidienne au pontage à 30 jours ni à 5 ans.

### Limites des preuves

- Aucun essai d'AOMI ou de chirurgie carotidienne n'a rapporté ses résultats spécifiquement dans l'ICFER.
- Les recommandations ESVS 2023 n'ont pas été consultées directement (rapportées via la revue Xodo 2024) ; VOYAGER PAD et Cochrane 2018 ont été lus sous forme de résumés.`,
    },
  ],
  relatedArticleSlugs: [
    'goutte-bpco-thyroide-et-autres-comorbidites',
    'cholesterol-et-prevention-secondaire',
    'antiplaquettaires-bitherapie-et-protection-gastrique',
    'thrombus-vg-et-anticoagulants',
    'tabac-et-alcool-insuffisance-cardiaque',
    'readaptation-cardiaque-et-activite-physique',
    'revascularisation-pontage-stents',
    'risque-inflammatoire-residuel',
    'progression-coronaire-et-imagerie-de-suivi',
    'sante-cerebrale-et-cognition',
    'questions-equipe-cardiologie',
  ],
  sources: [
    { label: 'Recommandations ESC 2024 PAAD (tableaux primaires, texte intégral)', detail: 'Prévalence polyvasculaire, seuils IPS/IOB, dépistage ciblé, marche supervisée (I A), rivaroxaban + aspirine (IIa A) et seuils chirurgicaux carotidiens' },
    { label: 'COMPASS (sous-groupe IC, 2019), COMMANDER-HF (2018) et VOYAGER PAD (résumé)', detail: 'Limites du rivaroxaban 2,5 mg x 2 + aspirine dans l’ICFER (exclusions FEVG < 30 % et NYHA III–IV)' },
    { label: 'Cochrane (Hageman 2018, résumé) et Xodo et al. (J Clin Med 2024)', detail: 'Gains de distance de marche sous rééducation supervisée et bilan carotidien avant pontage (CABACS, ESVS 2023)' },
    { label: 'Dewan et al. (2023)', detail: 'Prévalence (5,5 %) et mortalité ajustée (HR 1,39) de l’AOMI dans les essais d’ICFER' },
    { label: 'ameli.fr (AOMI) et HAS (2024, réadaptation vasculaire)', detail: 'Signes d’alerte, parcours SMR/domicile en France, contre-indication en IC décompensée et ALD' },
  ],
  disclaimerType: 'medical',
};
