import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'assistance-circulatoire-lvad',
  sourceWikiPath: 'wiki/concepts/lvad-heart-pumps.md',
  titleFr: 'Assistance circulatoire mécanique (LVAD) et cœur artificiel',
  category: 'dispositifs',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'lvad',
    'assistance-circulatoire',
    'insuffisance-cardiaque-avancee',
    'heartmate-3',
    'therapie-definitive',
    'pont-vers-greffe',
    'carmat-aeson',
  ],
  aliases: [
    'LVAD',
    'Assistance ventriculaire gauche',
    'Assistance circulatoire mécanique',
    'Pompe cardiaque',
    'HeartMate 3',
    'MCS',
    'Thérapie définitive',
    'Destination therapy',
    'Cœur artificiel total',
    'Carmat Aeson',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    'Un LVAD (dispositif d’assistance ventriculaire gauche) est une petite pompe implantée chirurgicalement à la pointe du ventricule gauche pour propulser le sang dans l’aorte et assurer l’essentiel du travail de pompage. Un câble d’alimentation (driveline) sort par la peau de l’abdomen pour relier la pompe à un contrôleur et à des batteries portées sur soi. Il est utilisé en attente de greffe (« pont vers la transplantation »), en traitement de longue durée lorsque la greffe n’est pas possible (« thérapie définitive »), ou plus rarement en attente de récupération. Avec la pompe actuelle HeartMate 3, environ 6 personnes sur 10 sont en vie à 5 ans (chez des patients très sévèrement malades au départ), mais les contraintes sont réelles : anticoagulation à vie, risque de saignements, d’AVC, d’infection du câble et d’insuffisance ventriculaire droite. Ce dispositif concerne l’insuffisance cardiaque avancée : une personne stable avec une FEVG autour de 35 % en est très éloignée.',
  sections: [
    {
      headingFr: 'Ce que disent les recommandations (ESC 2026 et ISHLT 2023)',
      bodyMarkdownFr: `| Recommandation | Indication ou règle | Classe / niveau |
|---|---|---|
| **ESC 2026** | LVAD chez des patients sélectionnés en ICFER avancée : pont vers la greffe, vers la candidature, vers la récupération ou thérapie définitive | **I / C** |
| **ESC 2026** | Assistance temporaire (par ex. ECMO, pompe microaxiale) chez des patients instables en pont vers une décision | **IIa / C** |
| **ISHLT 2023** | Assistance durable chez les patients en NYHA IIIB–IV réfractaires ou dépendants des inotropes, en pont vers la greffe ou en thérapie au long cours | **I / A** (chacune) |
| **ISHLT 2023** | Les profils **INTERMACS 1 à 3** obtiennent un bénéfice de survie | **I / A** |
| **ISHLT 2023** | Le profil **INTERMACS 4** peut en bénéficier | **IIb / B** |
| **ISHLT 2023** | Consultation de soins palliatifs lors du bilan d’évaluation pour LVAD | **IIa / C** |
| **ISHLT 2023** | Attendre au moins **5 jours** après un infarctus aigu du myocarde avant une assistance permanente | **IIb / C** |

Les recommandations **ISHLT 2023** ne soutiennent pas l’implantation systématique dans les **profils INTERMACS 5 à 7** (voir l’article « Insuffisance cardiaque avancée (stade D) et quand orienter vers un centre expert »).

### Critères d’éligibilité et contre-indications (ESC 2026, Tableau 16)

Pour être candidat, il faut une **FEVG sévèrement réduite** associée à l’un des critères suivants :
- profil **INTERMACS 2 à 4** ;
- échec de récupération sous assistance circulatoire temporaire ;
- ou classe **NYHA III–IV** malgré un traitement optimisé, **avec** au moins un des éléments suivants : pic de VO2 **< 12–14 mL/kg/min** (ou < 50 % de la valeur prédite), atteinte d’organe par bas débit (index cardiaque **≤ 2 L/min/m²**), ou hospitalisations répétées pour insuffisance cardiaque.

**Contre-indications absolues :** **dysfonction sévère du ventricule droit**, atteinte sévère irréversible des reins, du foie, des poumons ou du système nerveux, impossibilité de prendre une anticoagulation au long cours, et soutien social ou observance insuffisants.

**Contre-indications relatives :** fragilité, obésité, tabagisme ou mésusage récent de substances, cancer.`,
    },
    {
      headingFr: 'Ce que montrent les études cliniques et les registres',
      bodyMarkdownFr: `### MOMENTUM 3 : l’essai pivot de la pompe actuelle (HeartMate 3)

L’essai **MOMENTUM 3** a randomisé **1 028 patients** entre la pompe à lévitation magnétique **HeartMate 3** et l’ancienne pompe **HeartMate II**. Environ **85 %** étaient en profil INTERMACS 1 à 3, **61 %** en thérapie définitive, et **42 à 47 %** présentaient une cardiopathie ischémique :

| Critère | HeartMate 3 | HeartMate II |
|---|---|---|
| Vivant sans AVC invalidant ni remplacement de pompe à 2 ans | **76,9 %** | 64,8 % |
| Survie à 5 ans | **58,4 %** | 43,7 % (**HR 0,72**, IC 95 % : 0,58–0,89) |
| Thrombose de pompe (événements par patient-année) | **0,010** | 0,108 |
| AVC (événements par patient-année) | **0,050** | 0,136 |
| Tout saignement (événements par patient-année) | **0,430** | 0,765 |

L’extension à 5 ans était observationnelle et financée par le fabricant (Abbott), avec une proportion importante de données manquantes. Les résultats n’étaient pas détaillés séparément entre causes ischémiques et non ischémiques, et la FEVG n’était pas rapportée.

### Registres en vie réelle

- **États-Unis (rapport STS-Intermacs 2025, 28 029 implantations entre 2015 et 2024) :** avec les pompes actuelles, la survie atteint **85,9 % à 1 an**, **60,2 % à 5 ans** et **51,8 % à 7 ans**. À 5 ans, **73,5 %** des patients n’avaient pas présenté de saignement digestif et **87,1 %** n’avaient pas fait d’AVC. Chez les personnes de **65 ans et plus**, la survie était de **80,6 % à 1 an** et **51,1 % à 5 ans**.
- **Europe (4e rapport EUROMACS, données jusqu’en août 2024) :** **6 962 implantations** chez 6 408 patients dans 32 centres (âge médian 58 ans, 83 % d’hommes, 17 % implantés en choc cardiogénique). Dans les 30 jours suivant l’opération : **9,6 %** de décès, **12,6 %** de saignements majeurs et **2,1 %** d’AVC ischémiques, avec des résultats variables d’un centre à l’autre.

### Anticoagulation : l’aspirine n’est plus nécessaire avec HeartMate 3 (ARIES-HM3)

Dans l’essai **ARIES-HM3 (2023)**, **628 patients** porteurs d’un HeartMate 3 et traités par antivitamine K (warfarine — *Coumadine*, INR cible 2 à 3) ont été randomisés entre aspirine (*Kardégic*) et placebo. Supprimer l’aspirine s’est révélé non inférieur pour être vivant sans saignement majeur ni événement thrombotique à 12 mois (**74 % contre 68 %**), tout en réduisant d’environ un tiers les saignements non chirurgicaux (**RR 0,66**) et les saignements digestifs (**HR 0,61**), sans augmentation des AVC.

En revanche, une **anticoagulation à vie par antivitamine K (AVK)** demeure indispensable (tous les participants d’ARIES-HM3 la recevaient), et l’impossibilité de la prendre reste une contre-indication au LVAD.

### Implanter plus tôt chez des patients moins sévères ?

- **ROADMAP (2017, non randomisé, ancien HeartMate II) :** 200 patients ambulatoires sans inotropes intraveineux. Plus de patients porteurs d’un LVAD étaient vivants avec une amélioration significative de la marche à 2 ans (**30 % contre 12 %**), mais la survie globale en intention de traiter ne différait pas (**70 % contre 63 %**) et les événements indésirables étaient plus de deux fois plus fréquents (**1,89 contre 0,83 par patient-année**). Le bénéfice se limitait au **profil INTERMACS 4** ; les profils **5 à 7** ne tiraient aucun gain.
- **Essais en cours recensés par l’ESC 2026** (*Early-VAD*, *SweVAD*, *AMBU-VAD* et *TEAM-HF*) :
  - **AMBU-VAD** (essai mené en France par les Hospices Civils de Lyon) : compare le HeartMate 3 précoce au traitement médical chez **92 patients** avec **FEVG ≤ 35 %** et profil **INTERMACS 4 à 6**. Recrutement en cours, fin attendue en **2029**.
  - **TEAM-HF** (financé par Abbott) : environ **850 patients** avec **FEVG ≤ 30 %** et pressions pulmonaires élevées ; fin primaire attendue en **2029**.
- L’essai historique **REMATCH (2001)**, conduit avec une pompe pulsatile désormais obsolète, reste à ce jour le seul essai randomisé comparant un LVAD au traitement médical seul en thérapie définitive.`,
    },
    {
      headingFr: 'Complications à connaître',
      bodyMarkdownFr: `- **Saignements**, en particulier digestifs, favorisés par l’anticoagulation et le flux continu de la pompe.
- **Accidents vasculaires cérébraux (AVC).**
- **Infection du câble d’alimentation (*driveline*) :** complication pratique la plus fréquente, dont la fréquence n’a pas diminué avec les nouvelles générations de pompes.
- **Insuffisance ventriculaire droite :** jusqu’à **40 %** des personnes implantées développent une dysfonction du ventricule droit au fil du temps. La survie à 2 ans avoisine **60 %** en présence d’une dysfonction droite contre **85 %** en son absence. Une dysfonction sévère du ventricule droit constitue une contre-indication absolue (voir l’article « Ventricule droit et hypertension pulmonaire dans l’insuffisance cardiaque »).
- **Récupération cardiaque rare :** le retrait du dispositif pour récupération myocardique concerne **1 à 3 %** des implantations, le plus souvent dans des cardiomyopathies non ischémiques récentes. Les recommandations ISHLT 2023 classent l’origine ischémique parmi les facteurs prédictifs de mortalité après LVAD.`,
    },
    {
      headingFr: 'Vie quotidienne, décision partagée et cœur artificiel total (Carmat Aeson)',
      bodyMarkdownFr: `### Vie quotidienne avec un LVAD

D’après les informations patients de la *British Heart Foundation* :
- La pompe doit être **alimentée en permanence**. La plupart des porteurs transportent deux batteries dans un sac ou un sac à dos et les alternent ; chaque batterie offre environ **12 heures** d’autonomie.
- **La baignade et la natation sont interdites.** La douche demande des précautions pour protéger le matériel et l’orifice du câble (un sac de douche spécifique est utilisé une fois les cicatrices refermées).
- **Conduite automobile :** elle n’est pas autorisée dans un premier temps et dépend de la réglementation nationale ; en France, toute reprise nécessite l’avis d’un **médecin agréé** pour le permis de conduire (voir l’article « Permis de conduire, insuffisance cardiaque et défibrillateur (France et UE) »).
- Les **DAI** continuent de fonctionner normalement et la défibrillation externe demeure sûre. Les voyages en avion restent possibles avec une préparation adaptée.
- À titre de repère comparatif, au Royaume-Uni, les LVAD en thérapie définitive sont rarement financés par le NHS (environ **75 adultes** implantés par an toutes indications confondues) ; aucun chiffre national français équivalent n’a été retrouvé dans les sources compilées.

### Décision partagée et soins de support (DECIDE-LVAD)

Dans l’essai américain **DECIDE-LVAD (2018)** mené chez **248 patients** envisageant un LVAD définitif, l’utilisation d’un outil structuré d’aide à la décision a amélioré les connaissances (+**5,5 points** en différence ajustée) et, à 6 mois, moins de patients choisissaient finalement l’implantation (**54 % contre 80 %**), sans différence de conflit décisionnel ni de regret. Les recommandations **ISHLT 2023** suggèrent une consultation de soins palliatifs pendant l’évaluation (**Classe IIa, C** ; voir l’article « Soins de support, soins palliatifs et anticipation »).

### Le cœur artificiel total (Carmat Aeson, France)

Le cœur artificiel total français **Aeson** remplace les deux ventricules. Il dispose d’un marquage CE en Europe uniquement en **pont vers la transplantation**, et environ **122 patients** en ont bénéficié. Son fabricant, la société Carmat, s’est déclaré en cessation de paiements en **juin 2025**. En **décembre 2025**, le tribunal a approuvé une reprise par une nouvelle société (Carmat SAS) chargée d’assurer le suivi des patients déjà implantés, puis la société cotée initiale a été liquidée en **janvier 2026**. L’activité actuelle d’implantation en France n’a pas pu être confirmée ; ces éléments proviennent d’articles de presse et de communications d’entreprise (niveau de fiabilité limité).`,
    },
    {
      headingFr: 'Application à une cardiomyopathie ischémique à FEVG autour de 35 % et limites des preuves',
      bodyMarkdownFr: `| Source | Population incluse | Applicabilité à une FEVG ~35 % stable |
|---|---|---|
| **MOMENTUM 3** | ~85 % INTERMACS 1–3, 42–47 % ischémiques, FEVG non rapportée | **Indirecte :** patients beaucoup plus malades |
| **STS-Intermacs / EUROMACS** | Patients réellement implantés en vie réelle | **Indirecte** |
| **ROADMAP** | Patients ambulatoires, INTERMACS 4–7 | **Indirecte :** non randomisé, pompe obsolète |
| **AMBU-VAD (en cours)** | **FEVG ≤ 35 %**, INTERMACS 4–6 | **Future preuve la plus proche** ; pas encore de résultats |

- Un LVAD **n’est pas un traitement pour un cœur stable à FEVG autour de 35 %**. Son intérêt est de connaître les options possibles si la maladie évoluait un jour vers un stade avancé.
- Le scénario défavorable d’une implantation trop précoce est concret : dans **ROADMAP**, les patients moins malades ont subi davantage de complications sans aucun gain de survie.

### Limites des preuves

- Le financement industriel est très présent dans ce domaine (MOMENTUM 3, ARIES-HM3, TEAM-HF).
- Plusieurs références ont été consultées au niveau du résumé scientifique (STS-Intermacs 2025, EUROMACS, ARIES-HM3, ROADMAP, DECIDE-LVAD).
- Aucun registre national public français chiffrant les implantations annuelles de LVAD ni aucune fiche patient institutionnelle française n’ont été identifiés dans les sources disponibles.`,
    },
  ],
  relatedArticleSlugs: [
    'insuffisance-cardiaque-avancee-stade-d',
    'transplantation-cardiaque-france',
    'inotropes-insuffisance-cardiaque-avancee',
    'ventricule-droit-et-hypertension-pulmonaire',
    'thrombus-vg-et-anticoagulants',
    'soins-de-support-et-anticipation',
    'essais-cliniques-cles',
    'essais-cliniques-en-cours-et-a-suivre',
    'dispositifs-cardiaques-dai-crt',
    'regles-conduite-automobile',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 sur l’insuffisance cardiaque (section 8)',
      detail: 'Indications, critères d’éligibilité (Tableau 16) et contre-indications du LVAD (texte intégral)',
    },
    {
      label: 'Recommandations ISHLT 2023 sur l’assistance circulatoire mécanique (Task Force 1)',
      detail: 'Éligibilité selon les profils INTERMACS, consultation palliative et facteurs pronostiques (texte intégral)',
    },
    {
      label: 'Essai MOMENTUM 3 (suivi à 2 ans et extension à 5 ans, Mehra et al., 2022)',
      detail: 'Comparaison HeartMate 3 versus HeartMate II : survie, thromboses de pompe, AVC et saignements',
    },
    {
      label: 'Registres STS-Intermacs (2025) et EUROMACS (4e rapport, 2025)',
      detail: 'Survie et complications en vie réelle aux États-Unis (28 029 implantations) et en Europe (6 962 implantations)',
    },
    {
      label: 'Essai ARIES-HM3 (Mehra et al., 2023)',
      detail: 'Anticoagulation par warfarine sans aspirine sous HeartMate 3 et réduction des saignements',
    },
    {
      label: 'Étude ROADMAP (Starling et al., 2017) et essais en cours (AMBU-VAD, TEAM-HF)',
      detail: 'LVAD chez les patients ambulatoires INTERMACS 4–7 et protocoles en cours de recrutement',
    },
    {
      label: 'Essai DECIDE-LVAD (Allen et al., 2018), guide patients BHF et revue RV Edward (2023)',
      detail: 'Aide à la décision partagée, vie quotidienne avec un LVAD et dysfonction ventriculaire droite post-implantation',
    },
    {
      label: 'Sources d’actualité et communiqués sur Carmat Aeson (2025–2026)',
      detail: 'Procédure d’insolvabilité (juin 2025), reprise par Carmat SAS (décembre 2025) et liquidation (janvier 2026) — fiabilité limitée',
    },
  ],
  disclaimerType: 'medical',
};
