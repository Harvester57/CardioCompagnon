import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'ventricule-droit-et-hypertension-pulmonaire',
  sourceWikiPath: 'wiki/concepts/right-ventricle-and-pulmonary-hypertension.md',
  titleFr: 'Ventricule droit et hypertension pulmonaire dans l’insuffisance cardiaque (TAPSE, groupe 2)',
  category: 'comorbidites',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'ventricule-droit',
    'hypertension-pulmonaire',
    'tapse',
    'tapse-pasp',
    'echocardiographie',
    'htp-groupe-2',
    'pronostic',
    'insuffisance-cardiaque-avancee',
  ],
  aliases: [
    'Ventricule droit',
    'Dysfonction VD',
    'Insuffisance cardiaque droite',
    'TAPSE',
    'TAPSE/PASP',
    'TAPSE/PAPS',
    'Couplage VD-AP',
    'Hypertension pulmonaire',
    'HTP',
    'HTP groupe 2',
    'PAPS',
    'PASP',
    'sPAP',
    'IpcPH',
    'CpcPH',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    'Le cœur comporte deux cavités de pompage : le ventricule gauche envoie le sang vers le reste du corps, tandis que le ventricule droit (VD) le propulse vers les poumons. Lorsque le ventricule gauche est affaibli, la pression peut refluer en amont dans la circulation pulmonaire : on parle d’hypertension pulmonaire liée aux cardiopathies gauches (« HTP du groupe 2 »). Contraint de pousser contre une pression plus élevée, le ventricule droit peut à son tour s’affaiblir. Les comptes rendus d’échocardiographie transthoracique (ETT) mentionnent souvent le TAPSE (amplitude de mouvement du ventricule droit) et la pression artérielle pulmonaire systolique estimée (PAPS ou PASP). Le traitement de référence consiste d’abord à optimiser celui du cœur gauche : les médicaments conçus pour d’autres formes d’hypertension pulmonaire (HTAP) ne sont pas recommandés ici et peuvent être délétères.',
  sections: [
    {
      headingFr: 'Lire le compte rendu d’échocardiographie (ETT)',
      bodyMarkdownFr: `### Mesures de la fonction du ventricule droit

Valeurs de référence issues des recommandations de quantification échocardiographique **ASE/EACVI** (Lang et al., 2015) :

| Mesure ETT | Ce qu’elle évalue | Valeur considérée comme anormale |
|---|---|---|
| **TAPSE** | Déplacement de l’anneau tricuspide vers la pointe à chaque battement (mode TM) | **< 17 mm** (moyenne normale environ 24 mm) |
| **Onde S’ tricuspide** | Vitesse de ce mouvement (Doppler tissulaire) | **< 9,5 cm/s** |
| **FAC** | Fraction de raccourcissement de surface du ventricule droit | **< 35 %** |
| **Strain de la paroi libre du VD** | Raccourcissement longitudinal de la paroi libre droite | Valeur absolue **< 20 %** (dépend du constructeur) |
| **FEVD 3D** | Fraction d’éjection du ventricule droit en 3D | **< 45 %** |
| **Diamètre basal du VD** | Taille du ventricule droit | **> 41 mm** |

**Nuance sur le seuil du TAPSE :** la figure échocardiographique des recommandations **ESC/ERS 2022** sur l’hypertension pulmonaire retient **TAPSE < 18 mm** plutôt que 17 mm. Par ailleurs, le TAPSE et l’onde S’ peuvent sous-estimer la véritable fonction du ventricule droit après une chirurgie cardiaque (comme un pontage) ou une transplantation.

### Estimation de la pression pulmonaire et probabilité d’HTP

L’ETT estime la pression dans l’artère pulmonaire à partir de la vitesse maximale de la petite fuite de la valve tricuspide (**Vmax IT**). Les recommandations **ESC/ERS 2022** classent la probabilité d’hypertension pulmonaire ainsi :
- vitesse maximale de fuite tricuspide **≤ 2,8 m/s** : probabilité **faible** (en l’absence d’autres signes) ;
- **2,9 à 3,4 m/s** : probabilité **intermédiaire** ;
- **> 3,4 m/s** : probabilité **élevée**.

D’autres indices échographiques peuvent faire monter cette probabilité, notamment un rapport **TAPSE/PAPS (TAPSE/sPAP) < 0,55 mm/mmHg** ou un ventricule droit plus large que le ventricule gauche à la base. L’ETT ne fournit qu’une estimation : la confirmation d’une hypertension pulmonaire repose sur le **cathétérisme cardiaque droit**.

### Le rapport TAPSE/PASP : l’adaptation du ventricule droit à sa charge

Diviser le TAPSE par la pression pulmonaire systolique estimée (PASP ou PAPS) donne le **rapport TAPSE/PASP**, qui reflète le « couplage » entre la force du ventricule droit et la résistance des vaisseaux pulmonaires :
- Une méta-analyse de **2024** (Anastasiou et al., 18 études, **8 699 patients** en insuffisance cardiaque dont 6 études exclusivement ICFER) montre qu’un rapport **< 0,36 mm/mmHg** s’associe à un risque de décès environ **2,8 fois plus élevé** (**HR ajusté 2,84**, IC 95 % : 2,22–3,64).
- Les seuils publiés varient toutefois largement d’une étude à l’autre (**0,27 à 0,58 mm/mmHg**), l’hétérogénéité entre études est élevée (**I² = 82 %**), et certaines incohérences internes ont été relevées dans la publication.`,
    },
    {
      headingFr: 'Confirmation diagnostique par cathétérisme cardiaque droit (IpcPH et CpcPH)',
      bodyMarkdownFr: `Les définitions hémodynamiques des recommandations **ESC/ERS 2022**, maintenues lors du **Symposium mondial sur l’hypertension pulmonaire (WSPH 2024)**, reposent sur les pressions mesurées directement par cathétérisme droit :

| Terme | Définition hémodynamique |
|---|---|
| **Hypertension pulmonaire (HTP)** | Pression artérielle pulmonaire moyenne (**PAPm**) **> 20 mmHg** |
| **HTP post-capillaire (liée au cœur gauche)** | Pression artérielle pulmonaire d’occlusion (**PAPO / PAWP**) **> 15 mmHg** |
| **HTP post-capillaire isolée (IpcPH)** | PAPO **> 15 mmHg** et résistances vasculaires pulmonaires (**RVP / PVR**) **≤ 2 unités Wood** |
| **HTP combinée pré- et post-capillaire (CpcPH)** | PAPO **> 15 mmHg** et **RVP > 2 unités Wood** |
| **Composante pré-capillaire sévère** | **RVP > 5 unités Wood** : justifie une orientation vers un centre expert d’HTP |

Le Symposium mondial **WSPH 2024** souligne l’existence d’une « zone grise » pour une PAPO comprise entre **12 et 15 mmHg** (voire jusqu’à **18 mmHg** selon les situations).`,
    },
    {
      headingFr: 'Fréquence et impact pronostique dans l’ICFER',
      bodyMarkdownFr: `- **Fréquence de l’HTP :** une hypertension pulmonaire est retrouvée chez **40 à 72 %** des personnes présentant une ICFER, et environ **20 à 30 %** d’entre elles présentent la forme combinée (**CpcPH**) (ESC/ERS 2022).
- **Fréquence de la dysfonction droite :** jusqu’à **50 %** des personnes atteintes d’ICFER présentent un degré de dysfonction du ventricule droit (revue Edward 2023).
- **Pronostic :** un strain du ventricule droit anormal était associé à un risque plus que triplé de décès ou d’hospitalisation pour insuffisance cardiaque (Bosch 2017, cité dans Edward 2023), et un rapport TAPSE/PASP bas à un risque de décès environ **2,8 fois** plus élevé. Dans des données d’insuffisance cardiaque à FEVG préservée, une PAPm > 30 mmHg doublait approximativement la mortalité (WSPH 2024).
- **Cause ischémique :** dans une étude portant sur **1 663 patients** en ICFER (Ghio 2017, cité dans Edward 2023), l’origine ischémique était associée à un TAPSE plus bas. Aucune source dédiée spécifiquement à l’infarctus du ventricule droit dans la cardiomyopathie ischémique ne figurait dans les publications compilées.`,
    },
    {
      headingFr: 'Ce qui aide et ce qui n’est pas recommandé',
      bodyMarkdownFr: `### Traitements et mesures recommandés

- **Optimiser en priorité le traitement du cœur gauche : Classe I, niveau A** (ESC/ERS 2022 ; voir l’article « Les médicaments de l’insuffisance cardiaque (4 piliers) »).
- **Effets observés des traitements de fond de l’ICFER :** le **sacubitril/valsartan (*Entresto*)** et les **iSGLT2** (dapagliflozine — *Forxiga*, empagliflozine — *Jardiance*) ont réduit la pression artérielle pulmonaire mesurée par capteurs implantés (ESC/ERS 2022). Une méta-analyse de 10 études observationnelles non contrôlées (**875 patients**, Zhang 2022) a associé le sacubitril/valsartan à une hausse du TAPSE d’environ **1,3 mm** et à une baisse de la pression pulmonaire estimée d’environ **7 mmHg**. Dans l’essai **EMBRACE-HF**, l’empagliflozine a diminué la pression artérielle pulmonaire diastolique d’environ **1,7 mmHg** (WSPH 2024).
- **Contexte sans recommandation spécifique HTP :** le rapport WSPH 2024 mentionne également le résultat de l’essai **VICTORIA** avec le vériciguat (*Verquvo*, **HR 0,90**) parmi les essais d’insuffisance cardiaque, mais les recommandations ESC/ERS 2022 ne formulent pas d’indication pour ce médicament dans l’HTP du groupe 2.
- **Orientation vers un centre expert d’hypertension pulmonaire :** recommandée en présence d’une composante pré-capillaire sévère ou de signes de dysfonction du ventricule droit (**Classe I, niveau C**, ESC/ERS 2022).

### Ce qui n’est pas recommandé

- **Les médicaments approuvés pour l’hypertension artérielle pulmonaire (HTAP, groupe 1) ne sont pas recommandés dans l’HTP du groupe 2 : Classe III, niveau A** (ESC/ERS 2022).
- **Pourquoi :** les essais cliniques n’ont montré aucun bénéfice ou ont mis en évidence des risques : le **bosentan (*Tracleer*)** s’est révélé inefficace dans l’ICFER tout en provoquant de la rétention hydrosodée ; le **macitentan (*Opsumit*, essai SERENADE)** a été arrêté prématurément sans bénéfice ; le **tadalafil (*Adcirca*, essai PASSION)** a été arrêté prématurément en raison d’une mortalité plus élevée (WSPH 2024).
- À titre de confirmation réglementaire, la page patient de la *Pulmonary Hypertension Association* (États-Unis) rappelle qu’aucun médicament spécifique n’est approuvé par la FDA pour l’HTP du groupe 2.`,
    },
    {
      headingFr: 'Pourquoi le ventricule droit pèse sur les choix d’assistance (LVAD) et de greffe',
      bodyMarkdownFr: `- **Assistance circulatoire (LVAD) :** une dysfonction sévère du ventricule droit malgré un bon équilibre des fluides est une **contre-indication absolue** au LVAD selon l’ESC 2026, car cette pompe n’assiste que le côté gauche. Jusqu’à **40 %** des personnes porteuses d’un LVAD développent une dysfonction droite au fil du temps, associée à une survie à 2 ans d’environ **60 %** contre **85 %** sans atteinte droite (voir l’article « Assistance circulatoire mécanique (LVAD) et cœur artificiel »).
- **Transplantation cardiaque :** des résistances vasculaires pulmonaires qui restent élevées malgré les médicaments constituent une contre-indication, car le ventricule droit du cœur donné risque de défaillir face à une pression pulmonaire trop haute ; un LVAD peut parfois être implanté en amont pour les faire baisser (voir l’article « Transplantation cardiaque : indications, parcours en France et survie »).
- **Orientation vers un centre expert :** une mauvaise fonction du ventricule droit fait partie de la lettre **« E »** de la liste d’alerte « I NEED HELP » dans l’ESC 2026.`,
    },
    {
      headingFr: 'Application à une cardiomyopathie ischémique à FEVG autour de 35 % et limites des preuves',
      bodyMarkdownFr: `| Source | Population | Applicabilité à une FEVG ~35 % |
|---|---|---|
| **ESC/ERS 2022 (HTP groupe 2)** | Ensemble des cardiopathies gauches | **Directe** |
| **Normes ASE/EACVI (2015)** | Populations de référence saines | **Directe** pour lire vos comptes rendus d’ETT |
| **Méta-analyse TAPSE/PASP (2024)** | Insuffisances cardiaques mixtes (6/18 études ICFER seule) | **Partielle :** causes non séparées |
| **Méta-analyse sacubitril/valsartan (2022)** | ICFER, études observationnelles non contrôlées | **Partielle :** absence de groupe témoin |
| **Essais de médicaments HTAP (SERENADE, PASSION)** | Majoritairement ICFEP | **Indirecte**, mais la contre-indication vaut pour toute HTP du groupe 2 |

- Une valeur d’ETT en dehors des intervalles usuels, ou une évolution entre deux examens, mérite d’être discutée tranquillement avec votre cardiologue (voir l’article « Questions à poser à l’équipe de cardiologie »).
- Une pression pulmonaire estimée élevée à l’ETT dans l’ICFER est habituellement la conséquence du côté gauche : la réponse passe donc le plus souvent par l’optimisation du traitement de l’insuffisance cardiaque et de l’équilibre hydrique, plutôt que par des médicaments spécifiques de l’HTAP.

### Limites des preuves

- Les tableaux de recommandations en anglais du texte ESC/ERS 2022 n’étant pas accessibles directement, ils ont été consultés dans la traduction officielle espagnole de la société savante.
- Les articles originaux de Guazzi et de Ghio n’ont pas été lus en texte intégral ; leurs conclusions sont reprises via la méta-analyse et la revue citées.
- Aucun seuil numérique validé prédisant une défaillance du ventricule droit après implantation d’un LVAD n’a été identifié dans les sources compilées, ni de page d’information patient française dédiée à l’HTP du groupe 2.`,
    },
  ],
  relatedArticleSlugs: [
    'examens-et-chiffres',
    'insuffisance-cardiaque-avancee-stade-d',
    'assistance-circulatoire-lvad',
    'transplantation-cardiaque-france',
    'medicaments-insuffisance-cardiaque',
    'medicaments-additionnels-ivabradine-digoxine-vericiguat',
    'telesurveillance-insuffisance-cardiaque',
    'fuite-mitrale-secondaire',
    'efx-strain-troponine-et-imagerie-cardiaque',
    'voyages-canicule-et-climat-ic',
    'questions-equipe-cardiologie',
  ],
  sources: [
    {
      label: 'Recommandations ESC/ERS 2022 sur l’hypertension pulmonaire (cardiopathies gauches, groupe 2)',
      detail: 'Définitions hémodynamiques (IpcPH, CpcPH), probabilité échographique (Vmax IT, TAPSE < 18 mm) et recommandations Classe I A / Classe III A',
    },
    {
      label: 'Symposium mondial sur l’hypertension pulmonaire (WSPH 2024, groupe de travail cardiopathies gauches, Maron et al.)',
      detail: 'Maintien des définitions, zone grise de la PAPO (12–15 mmHg), résultats d’EMBRACE-HF, SERENADE et PASSION (texte intégral)',
    },
    {
      label: 'Recommandations ASE/EACVI sur la quantification des cavités cardiaques (Lang et al., 2015)',
      detail: 'Valeurs normales échocardiographiques du ventricule droit : TAPSE (< 17 mm), onde S’, FAC, strain, FEVD 3D et diamètre basal',
    },
    {
      label: 'Méta-analyse Anastasiou (2024) sur le rapport TAPSE/PASP dans l’insuffisance cardiaque',
      detail: 'Synthèse de 18 études (8 699 patients) : association entre rapport < 0,36 mm/mmHg et mortalité (HR ajusté 2,84, texte intégral)',
    },
    {
      label: 'Revue Edward (2023) sur le ventricule droit et méta-analyse Zhang (2022) sur le sacubitril/valsartan',
      detail: 'Prévalence de la dysfonction droite dans l’ICFER et après LVAD ; évolution du TAPSE et de la PAPS sous sacubitril/valsartan',
    },
    {
      label: 'Recommandations ESC 2026 sur l’insuffisance cardiaque (section 8) et page patient PHA (groupe 2)',
      detail: 'Impact de la fonction droite et des résistances pulmonaires sur l’éligibilité au LVAD et à la transplantation',
    },
  ],
  disclaimerType: 'medical',
};
