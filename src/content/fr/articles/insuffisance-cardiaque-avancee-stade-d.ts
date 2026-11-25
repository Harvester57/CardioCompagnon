import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'insuffisance-cardiaque-avancee-stade-d',
  sourceWikiPath: 'wiki/concepts/advanced-heart-failure-and-referral.md',
  titleFr: 'Insuffisance cardiaque avancée (stade D) et quand orienter vers un centre expert',
  category: 'diagnostic',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'insuffisance-cardiaque-avancee',
    'stade-d',
    'orientation',
    'i-need-help',
    'intermacs',
    'lvad',
    'transplantation-cardiaque',
    'soins-palliatifs',
  ],
  aliases: [
    'Insuffisance cardiaque avancée',
    'Insuffisance cardiaque stade D',
    'Stade D',
    'Insuffisance cardiaque terminale',
    'I NEED HELP',
    'I-NEED-HELP',
    'Règle des trois',
    'Profils INTERMACS',
    'INTERMACS',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    'L’insuffisance cardiaque « avancée » (ou stade D) désigne une maladie qui continue de provoquer des symptômes sévères et des décompensations répétées alors que tous les traitements habituels sont déjà en place. Elle ne se résume pas à une FEVG basse : une cardiomyopathie ischémique avec une FEVG autour de 35 % et des symptômes absents ou modérés correspond généralement au stade C, et non au stade D. Les recommandations européennes ESC 2026 insistent sur une prise de contact précoce avec un centre expert en insuffisance cardiaque avancée (qui peut discuter assistance circulatoire LVAD, transplantation cardiaque ou suivi spécialisé intensif) dès l’apparition de signaux d’alerte résumés par le mémo « I NEED HELP » ou la « règle des trois », notamment lorsque les médicaments de fond doivent être réduits.',
  sections: [
    {
      headingFr: 'Où se situe le stade D et comment l’ESC 2026 le définit',
      bodyMarkdownFr: `Les stades de l’insuffisance cardiaque s’échelonnent du **stade A** (à risque) au **stade D** (insuffisance cardiaque avancée ; voir l’article « Dysfonction ventriculaire asymptomatique (stade B) » pour les stades précoces). Les recommandations **ESC 2026** estiment qu’environ **5 à 8 %** des personnes vivant avec une insuffisance cardiaque présentent une forme avancée, et que **plus de 40 %** décèdent dans l’année avec le seul traitement médicamenteux.

### Définition ESC 2026 : les 4 critères doivent tous être réunis malgré un traitement optimisé

Adaptée par l’ESC 2026 à partir de la prise de position de la *Heart Failure Association* (HFA) de 2018 :

| # | Critère | Détail |
|---|---|---|
| 1 | **Symptômes** | Sévères et persistants, classe **NYHA III ou IV** |
| 2 | **Dysfonction cardiaque sévère** | Au moins un des éléments suivants : **FEVG ≤ 30 %** ; insuffisance ventriculaire droite isolée ; valvulopathie ou cardiopathie congénitale sévère non opérable ; peptides natriurétiques durablement élevés avec anomalies structurelles ou de remplissage sévères |
| 3 | **Événements cliniques** | **2 visites non programmées ou hospitalisations ou plus sur 12 mois** pour congestion ou arythmies dangereuses, **ou** au moins **1 épisode de bas débit** ayant nécessité des inotropes intraveineux |
| 4 | **Capacité d’effort** | Incapacité à réaliser un effort, **ou** test de marche de 6 minutes **< 300 m**, **ou** pic de VO2 **< 12–14 mL/kg/min** (12 sous bêtabloquant) ou **< 50 %** de la valeur prédite |

**Dans le cas d’une cardiomyopathie ischémique avec FEVG autour de 35 % :** le volet FEVG du critère 2 (**≤ 30 %**) n’est pas rempli. Ce profil ne relève donc pas du stade D sur le seul chiffre de FEVG. Une personne pourrait néanmoins répondre à la définition par un autre marqueur de dysfonction sévère si, et seulement si, les trois autres critères étaient tous présents.`,
    },
    {
      headingFr: 'Quand évoquer une orientation vers un centre expert : les signaux d’alerte',
      bodyMarkdownFr: `Les recommandations **ESC 2026** préconisent une **consultation précoce auprès d’un centre d’insuffisance cardiaque avancée** pour les personnes à haut risque d’évolution vers une forme avancée (**Classe I, niveau A** — ce niveau A reflète ici l’appréciation du groupe de travail plutôt que le résultat d’un essai randomisé). Toute **baisse de dose (désescalade) des médicaments de fond** de l’insuffisance cardiaque doit amener à solliciter un centre expert, et l’ajout de nouveaux médicaments ne doit pas retarder ce contact.

### Le mémo « I NEED HELP »

Proposé par Baumwol en 2017 et repris par la prise de position HFA 2025, l’ESC 2026 et l’ISHLT 2023, cet acronyme rassemble les signaux dont la présence (un ou plusieurs) doit ouvrir la discussion avec votre cardiologue :

| Lettre | Signal d’alerte | Précisions |
|---|---|---|
| **I** | **I**notropes (médicaments intraveineux stimulant la contraction cardiaque), actuels ou antérieurs | |
| **N** | **N**YHA III–IV, ou peptides natriurétiques (BNP / NT-proBNP) durablement élevés | |
| **E** | Atteinte d’organes cibles (*End-organ dysfunction*) : dégradation rénale ou hépatique liée à l’insuffisance cardiaque | |
| **E** | FEVG (*Ejection fraction*) très basse | **< 20 %** chez Baumwol, dans la prise de position HFA 2025 et dans l’ESC 2026 (qui ajoute « ou mauvaise fonction ventriculaire droite ») ; **≤ 35 %** dans la recommandation ISHLT 2023 |
| **D** | Chocs appropriés répétés du **D**éfibrillateur (DAI) | |
| **H** | **H**ospitalisations pour insuffisance cardiaque : plus de 1 sur 12 mois | |
| **E** | **Œ**dèmes (*Edema*, rétention d’eau) persistant malgré l’escalade des diurétiques | |
| **L** | Pression artérielle basse (*Low blood pressure*, systolique durablement inférieure à environ 90–100 mmHg) ou fréquence cardiaque élevée | Les seuils exacts varient selon les sources |
| **P** | Médicaments **P**ronostiques (traitements de fond) impossibles à augmenter, ou devant être réduits ou arrêtés | |

**Pourquoi le seuil de FEVG diffère selon les sociétés savantes :** l’ESC 2026 et la HFA retiennent une **FEVG < 20 %**, tandis que les recommandations ISHLT 2023 sur l’assistance circulatoire impriment **FEVG ≤ 35 %**. Avec une FEVG autour de 35 %, la formulation ISHLT cocherait cette ligne, mais les deux sociétés soulignent que la grille s’interprète **dans son ensemble** : le chiffre de FEVG seul ne justifie pas une orientation.

### La « règle des trois » (ESC 2026)

L’ESC 2026 propose une seconde liste synthétique. L’un des trois éléments suivants constitue un signal d’orientation :
- **2 hospitalisations ou plus** pour insuffisance cardiaque (ou 1 épisode ayant nécessité des inotropes) au cours de la dernière année ;
- une **résistance aux diurétiques** ;
- une **intolérance aux médicaments de fond** associée à une dégradation de la fonction rénale.

### Autres seuils d’alerte cités dans les documents de sociétés savantes

La prise de position **HFA 2025** (Baudry et al.) recense d’autres repères utilisés par diverses sociétés savantes, sans consensus complet entre elles :
- dose de diurétique de l’anse supérieure à l’équivalent de **160 mg/jour de furosémide (*Lasilix*)**, ou recours au métolazone ;
- **NT-proBNP > 1 000 pg/mL** malgré le traitement ;
- **DFGe < 45 mL/min/1,73 m²**, ou créatinine **≥ 160 µmol/L** (environ 18,1 mg/L) ;
- sodium sanguin (natrémie) **< 134 mmol/L** (voir l’article « Sel et apports hydriques dans l’insuffisance cardiaque ») ;
- pic de VO2 **< 14 mL/kg/min** (repère américain) ou **12–14 mL/kg/min** (HFA) ;
- score de risque (*Seattle HF Model* ou *MAGGIC*) prédisant une survie à 1 an **≤ 80 %**.

### Ce que montrent les études sur ces grilles

- **Registre HELP-HF (Italie, 2023) :** 1 149 patients suivis en ambulatoire présentant au moins un critère « I NEED HELP » (FEVG médiane 35 %, âge moyen 75 ans). Chaque critère supplémentaire augmentait d’environ **19 %** le risque de décès ou d’hospitalisation pour insuffisance cardiaque (**HR ajusté 1,19**, IC 95 % : 1,11–1,27). La mortalité à 1 an avoisinait **20 %** avec 2 critères et **60 %** avec 6 critères. Beaucoup de patients étaient toutefois sous-traités : seuls **38 %** atteignaient la moitié de la dose cible de bêtabloquant.
- **Validation encore partielle :** la prise de position HFA 2025 rappelle que ni « I NEED HELP » ni la définition HFA n’ont été formellement validés comme outils d’orientation dans un essai clinique.
- **Repères internationaux comparés :** au Royaume-Uni, le guide **NICE NG106** déconseille d’utiliser des scores pronostiques pour décider d’une orientation vers les soins palliatifs et recommande d’envisager un avis spécialisé pour transplantation en cas de symptômes sévères réfractaires. Aux États-Unis, les recommandations **AHA/ACC/HFSA 2022** préconisent une orientation rapide vers une équipe spécialisée lorsque cela correspond aux objectifs de soins de la personne.`,
    },
    {
      headingFr: 'Les profils INTERMACS : graduer la sévérité',
      bodyMarkdownFr: `Les équipes spécialisées classent la gravité d’une insuffisance cardiaque avancée selon les **7 profils INTERMACS** (du profil 1, le plus critique, au profil 7 ; descriptions issues du registre REVIVAL) :

| Profil | Description clinique simplifiée |
|---|---|
| **1** | « Crash and burn » : choc cardiogénique |
| **2** | Dégradation progressive malgré des inotropes intraveineux |
| **3** | État stable, mais uniquement sous inotropes intraveineux |
| **4** | Symptômes au repos à domicile, sous traitement par comprimés |
| **5** | Confiné au domicile : confortable au repos, mais incapable d’accomplir les activités quotidiennes |
| **6** | « Walking wounded » : limité dès les efforts légers |
| **7** | Classe NYHA III avancée, plus stable |

- **Évolution des patients ambulatoires (profils 4 à 7) — cohorte REVIVAL (États-Unis, 2020 et 2024) :** 400 patients suivis en externe (FEVG moyenne 21 %, dont 92 % en profils 5 à 7). Le risque combiné de décès, d’implantation d’un LVAD ou de transplantation urgente était de **22 % à 1 an** et de **37 % à 2 ans** ; la mortalité seule était de **8 % à 1 an** et **16 % à 2 ans**. À 1 an, le risque combiné variait de **39 %** en profil 4 à **14 %** en profil 7. Les auteurs privilégient un **suivi rapproché par une équipe experte** plutôt qu’une implantation précoce systématique de LVAD dans cette population.
- **Bénéfice d’un LVAD selon le profil (ISHLT 2023) :** les profils **1 à 3** bénéficient d’un gain de survie (**Classe I, A**) ; le **profil 4** peut en bénéficier (**Classe IIb, B**) ; l’implantation systématique dans les **profils 5 à 7** n’est pas étayée (voir l’article « Assistance circulatoire mécanique (LVAD) et cœur artificiel »).`,
    },
    {
      headingFr: 'Pourquoi l’orientation vers un centre expert reste souvent tardive',
      bodyMarkdownFr: `La prise de position **HFA 2025** (Baudry et al.) identifie plusieurs freins concrets à une orientation au bon moment :

- moins de la moitié d’environ **500 cardiologues** interrogés utilisaient les critères HFA en pratique courante ;
- dans l’étude **SEE-HF**, environ un quart (**26 %**) des patients évalués déjà porteurs d’un DAI ou d’une CRT remplissaient les critères d’éligibilité à un LVAD ou à une transplantation ;
- les médecins et les patients perçoivent souvent le risque très différemment : dans l’étude **MedaMACS**, les médecins jugeaient **69 %** des patients à haut risque alors que seuls **14 %** des patients s’estimaient dans cette situation ; dans un autre essai, **74 %** des patients avaient une perception du pronostic différente de celle de leur médecin ;
- pour réduire ces retards, la HFA propose des réseaux organisés entre centres de proximité et centres experts (« *hub-and-spoke* »), des circuits d’adressage clairement identifiés, la télémédecine, des soins partagés et un accès élargi aux épreuves d’effort cardiorespiratoires (EFX / CPET).

En cas de symptômes d’urgence aiguë (essoufflement intense au repos, douleur thoracique, malaise ou syncope, chocs répétés de défibrillateur), les numéros d’urgence en France sont le **15 (SAMU)**, le **112** ou le **114** (par SMS).`,
    },
    {
      headingFr: 'Ce qu’un centre d’insuffisance cardiaque avancée peut proposer (ESC 2026)',
      bodyMarkdownFr: `Toutes les recommandations ci-dessous concernent des **patients sélectionnés** après bilan spécialisé complet :

| Option thérapeutique ou d’évaluation | ESC 2026 (Classe / niveau) | Pour aller plus loin |
|---|---|---|
| Consultation précoce avec un centre d’insuffisance cardiaque avancée | **I / A** | Présent article |
| Épreuve d’effort cardiorespiratoire (EFX / CPET) et cathétérisme cardiaque droit pour le bilan | **I / C** | Examens et chiffres ; EFX, strain et imagerie |
| Assistance circulatoire gauche (LVAD) : pont vers greffe, candidature, récupération ou thérapie définitive | **I / C** | Assistance circulatoire mécanique (LVAD) |
| Transplantation cardiaque | **I / C** | Transplantation cardiaque en France |
| Inotropes intraveineux continus en pont vers une décision, une greffe ou un LVAD | **IIa / C** | Inotropes dans l’IC avancée |
| Réduction du bêtabloquant ou de l’ivabradine (*Procoralan*) si un bas débit entraîne une hypoperfusion d’organe | **IIa / C** | Décision strictement médicale |
| Ultrafiltration en cas de surcharge hydrique réfractaire | **IIb / C** | Escalade et résistance aux diurétiques |
| Planification anticipée des soins (directives anticipées) | **I / B1** | Soins de support et anticipation |
| Accès à une équipe intégrée de soins palliatifs | **I / B2** | Soins de support et anticipation |

Presque toutes les recommandations portant sur les thérapies avancées reposent sur un **niveau de preuve C** (avis d’experts ou données non contrôlées). L’état du **ventricule droit** et les **pressions pulmonaires** pèsent fortement sur les options envisageables (voir l’article « Ventricule droit et hypertension pulmonaire dans l’insuffisance cardiaque »).`,
    },
    {
      headingFr: 'Application à une cardiomyopathie ischémique à FEVG autour de 35 % et limites des preuves',
      bodyMarkdownFr: `- **Stade clinique :** avec une FEVG autour de 35 % et des symptômes stables, légers ou modérés, votre situation correspond au **stade C**, et non au stade D.
- **Ce qu’il faut surveiller :** les signaux qui comptent sont les **événements cliniques et la tolérance aux traitements**, bien plus que le chiffre isolé de FEVG — hospitalisations répétées, augmentation continue des diurétiques, chocs de DAI, déclin de la fonction rénale, ou tension basse obligeant à réduire le traitement de fond.
- **Origine ischémique :** environ **30 %** des candidats à la transplantation cardiaque en France présentent une cardiopathie ischémique. L’ISHLT retient également la cause ischémique parmi les facteurs associés à un risque plus élevé après implantation d’un LVAD.

### Applicabilité des principales sources

| Source | Population étudiée | Applicabilité à une cardiomyopathie ischémique à FEVG ~35 % |
|---|---|---|
| **HELP-HF (2023)** | Patients ambulatoires italiens avec ≥ 1 critère « I NEED HELP », FEVG médiane 35 %, causes mixtes, plus âgés | **Partielle :** FEVG proche, mais causes non séparées et patients plus âgés |
| **REVIVAL (2020 / 2024)** | Patients ambulatoires américains, FEVG moyenne 21 % | **Indirecte :** FEVG nettement plus basse |
| **Critères LVAD ISHLT 2023 / ESC 2026** | NYHA IIIB–IV, INTERMACS 1–4 | **Indirecte :** population beaucoup plus sévère |

### Limites des connaissances actuelles

- Les grilles d’orientation (« I NEED HELP », « règle des trois ») sont issues de consensus d’experts : le registre HELP-HF montre qu’elles reflètent bien le niveau de risque, mais aucun essai n’a démontré que leur utilisation pour orienter plus tôt améliore la survie.
- La prise de position HFA 2018 et la déclaration AHA 2021 sur l’orientation précoce n’étaient pas accessibles en texte intégral ; leurs éléments proviennent ici de l’ESC 2026 et de la prise de position HFA 2025.
- Les classes et niveaux de preuve américains (AHA/ACC/HFSA 2022) spécifiques au stade D n’ont pas été vérifiés sur le texte complet.`,
    },
  ],
  relatedArticleSlugs: [
    'dysfonction-vg-asymptomatique-stade-b',
    'assistance-circulatoire-lvad',
    'transplantation-cardiaque-france',
    'inotropes-insuffisance-cardiaque-avancee',
    'ventricule-droit-et-hypertension-pulmonaire',
    'soins-de-support-et-anticipation',
    'escalade-et-resistance-aux-diuretiques',
    'dispositifs-cardiaques-dai-crt',
    'sel-et-liquides-insuffisance-cardiaque',
    'examens-et-chiffres',
    'efx-strain-troponine-et-imagerie-cardiaque',
    'goutte-bpco-thyroide-et-autres-comorbidites',
    'arythmies-ventriculaires-et-antiarythmiques',
    'questions-equipe-cardiologie',
  ],
  sources: [
    {
      label: 'Recommandations ESC 2026 sur l’insuffisance cardiaque (section 8 : insuffisance cardiaque avancée)',
      detail: 'Définition du stade D, règle des trois, grille I NEED HELP (FEVG < 20 %) et tableau de recommandations (texte intégral)',
    },
    {
      label: 'Recommandations ISHLT 2023 sur l’assistance circulatoire mécanique (Task Force 1)',
      detail: 'Sélection des candidats au LVAD selon les profils INTERMACS et grille I NEED HELP avec FEVG ≤ 35 % (texte intégral)',
    },
    {
      label: 'Prise de position HFA 2025 (Baudry et al.)',
      detail: 'Freins à l’orientation précoce, grille I NEED HELP, seuils d’alerte des sociétés savantes et organisation en réseau (texte intégral)',
    },
    {
      label: 'Registre HELP-HF (Pagnesi et al., 2023)',
      detail: 'Évaluation du risque clinique selon le nombre de critères I NEED HELP chez 1 149 patients ambulatoires',
    },
    {
      label: 'Cohorte REVIVAL (Kittleson 2020 ; Aaronson 2024)',
      detail: 'Profils INTERMACS ambulatoires (4 à 7) et évolution à 1 et 2 ans chez 400 patients suivis en externe',
    },
    {
      label: 'NICE NG106 (2025) et points clés AHA/ACC/HFSA (2022)',
      detail: 'Repères britanniques et américains sur l’orientation spécialisée pour transplantation et soins palliatifs',
    },
  ],
  disclaimerType: 'medical',
};
