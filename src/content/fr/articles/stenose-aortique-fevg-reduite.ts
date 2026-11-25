import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'stenose-aortique-fevg-reduite',
  sourceWikiPath: 'wiki/concepts/aortic-stenosis-with-reduced-ef.md',
  titleFr: 'Rétrécissement aortique avec FEVG réduite',
  category: 'comorbidites',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'rétrécissement-aortique',
    'sténose-aortique',
    'bas-débit-bas-gradient',
    'sténose-modérée',
    'ett',
    'tavi',
    'savr',
    'icfer',
    'surveillance',
    'score-calcique',
    'maladie-coronaire',
    'esc-eacts-2025',
  ],
  aliases: [
    'Rétrécissement aortique',
    'Sténose aortique',
    'RAo',
    'AS',
    'Bas débit bas gradient',
    'LFLG',
    'Sténose aortique pseudo-sévère',
    'TAVI',
    'TAVR',
    'SAVR',
    'Échocardiographie de stress à la dobutamine',
    'Score calcique valvulaire',
  ],
  linkedModules: ['aorticStenosis'],
  plainSummaryFr:
    "La valve aortique est la porte entre le ventricule gauche et l'aorte. Dans le rétrécissement aortique (sténose aortique), elle s'épaissit et se calcifie. Lorsque la pompe cardiaque est déjà affaiblie, les chiffres d'échocardiographie (ETT) sont plus délicats à lire : un faible débit abaisse le gradient de pression (masquant parfois une sténose serrée) ou empêche une valve modérément atteinte de s'ouvrir pleinement (« pseudo-sévère »). Les tableaux officiels ESC/EACTS 2025 confirment la Classe I, B pour remplacer une sténose vraie sévère bas débit, bas gradient avec FEVG < 50 % (quelle que soit la réserve de débit) et une sténose sévère asymptomatique avec FEVG < 50 % sans autre cause ; le TAVI est privilégié dès 70 ans (Classe I, A) et la chirurgie (SAVR) avant 70 ans à faible risque (Classe I, B) ; le remplacement combiné d'une sténose modérée lors d'un pontage est classé IIa, C (contre 2b aux États-Unis), avec des règles précises en cas de maladie coronarienne associée. Dans la sténose modérée avec ICFER, TAVR UNLOAD (178 patients) n'a pas atteint son critère principal ni changé la mortalité mais a amélioré la qualité de vie à 1 an ; PROGRESS (NEJM 2026, 744 patients surtout à FEVG préservée) a réduit de 7,2 points le critère combiné à 2 ans sans gain de mortalité ; EXPAND TAVR II (n = 650, fin primaire prévue septembre 2027) exclut les gradients < 20 mmHg.",
  sections: [
    {
      headingFr: 'Comment le rétrécissement aortique est-il classé ?',
      bodyMarkdownFr: `Cet article porte surtout sur le **rétrécissement aortique léger à modéré associé à une FEVG déjà réduite** (par exemple une cardiomyopathie ischémique autour de 35 %). La maladie coronarienne associée et le bilan d'une sténose *sévère* suspectée sont traités dans des sections dédiées ci-dessous.

Le tableau échocardiographique standard provient des sociétés européenne (EACVI) et américaine (ASE) d'imagerie (2017), complété par les définitions **ESC/EACTS 2025** (dont la figure 6) pour la forme classique bas débit, bas gradient :

| Mesure | Léger | Modéré | Sévère | Classique bas débit, bas gradient (LFLG) sévère, FEVG réduite |
|---|---|---|---|---|
| Vélocité maximale (m/s) | 2,6–2,9 | 3,0–4,0 | ≥ 4,0 | < 4,0 |
| Gradient moyen (mmHg) | < 20 | 20–40 | ≥ 40 | < 40 |
| Surface valvulaire aortique, SVA (cm²) | > 1,5 | 1,0–1,5 | < 1,0 | < 1,0 (ESC : ≤ 1,0) |
| Surface valvulaire indexée (cm²/m²) | > 0,85 | 0,60–0,85 | < 0,6 | — |
| Indice de perméabilité (rapport des vélocités) | > 0,50 | 0,25–0,50 | < 0,25 | — |
| Débit et fonction VG | — | — | — | Volume d'éjection indexé < 35 mL/m² (ESC : ≤ 35) et FEVG < 50 % |

- **Un seul critère** parmi surface < 1,0 cm², vélocité ≥ 4,0 m/s ou gradient ≥ 40 mmHg *évoque* un rétrécissement sévère. En cas de discordance, l'équipe croise les autres mesures d'imagerie et la clinique (EACVI/ASE 2017).
- Les seuils ne coïncident pas parfaitement : à débit normal, un gradient de 40 mmHg correspond plutôt à une surface proche de 0,8 cm² que de 1,0 cm², ce qui explique une partie des discordances (EACVI/ASE 2017 ; Clavel 2016).

**Différences entre sociétés savantes :**

- **ESC/EACTS 2025 (Europe) :** un rétrécissement sévère à haut gradient associe gradient moyen ≥ 40 mmHg, vélocité ≥ 4,0 m/s et surface ≤ 1,0 cm² (ou ≤ 0,6 cm²/m²). Dans la figure 6 officielle, une valve à bas gradient/basse vélocité dont la surface dépasse 1,0 cm² (et surface indexée > 0,6 cm²/m²) est classée comme **sténose non sévère** ; un rapport d'intégrale temps-vitesse (ITV) chambre de chasse / aorte **< 0,25** rend le caractère sévère très probable. Des bornes numériques distinctes entre *léger* et *modéré* ne figuraient pas dans le texte ni les diapositives officielles récupérés.
- **ACC/AHA 2020 (États-Unis) :** utilise les stades A à D. Le stade B (« progressif ») regroupe le stade léger (vélocité 2,0–2,9 m/s ou gradient < 20 mmHg) et modéré (3,0–3,9 m/s ou 20–39 mmHg), **sans critère de surface valvulaire**. La sténose sévère est définie par la vélocité ou le gradient (surface « typiquement » ≤ 1,0 cm² mais non exigée) ; un indice de perméabilité ≤ 0,25 est compatible avec une forme sévère. La borne américaine du stade léger commence donc plus bas (2,0 m/s) que celle de l'EACVI/ASE (2,6 m/s).`,
    },
    {
      headingFr: 'Pourquoi les chiffres peuvent tromper en cas de bas débit et vitesse de progression',
      bodyMarkdownFr: `### Pièges du bas débit et variabilité de mesure

- **L'effet du débit :** le gradient varie comme le carré du débit. Lorsque le ventricule gauche éjecte peu de sang (**volume d'éjection indexé SVi < 35 mL/m²**, ou ≤ 35 mL/m² selon ESC 2025), le gradient se « pseudo-normalise » et une valve serrée peut sembler moins atteinte (Clavel 2016).
- **L'erreur inverse existe aussi :** à bas débit, un ventricule affaibli peut ne pas pousser suffisamment fort pour ouvrir complètement une valve modérément calcifiée. La *surface calculée* ressort alors artificiellement petite et une sténose modérée ressemble à une forme sévère (**« pseudo-sévère »**). Le bas débit peut donc tirer le gradient vers « plus léger » et la surface vers « plus serré » simultanément (Clavel 2016 ; EACVI/ASE 2017).
- **Sources d'erreur échocardiographiques :**
  - la surface est calculée par l'équation de continuité à partir du diamètre de la chambre de chasse du VG (CCVG / LVOT), qui est **élevé au carré** : c'est la première source d'erreur (variabilité de 5 à 8 %, contre 3 à 4 % pour les vélocités) ;
  - la chambre de chasse est habituellement **ovale et non circulaire** ; l'assimiler à un cercle sous-estime la surface d'environ 0,2 cm² en moyenne dans une étude citée (EACVI/ASE 2017) ;
  - l'**indice de perméabilité** évite l'étape du diamètre : un rapport > 0,25 face à une petite surface calculée fait suspecter une sous-estimation ;
  - la **pression artérielle** doit être relevée lors de chaque ETT, car une hypertension modifie vélocités et gradients (EACVI/ASE 2017) ;
  - l'EACVI/ASE invite à interpréter prudemment la classification par débit (le Doppler pouvant sous-estimer le volume d'éjection) et cite l'antécédent d'infarctus du myocarde comme contexte classique de sténose pseudo-sévère.

### À quelle vitesse la sténose progresse-t-elle et quand répéter l'ETT ?

- **Méta-analyse Willner 2023** (24 études prospectives, 5 450 patients) : chaque année en moyenne, la vélocité maximale augmente d'environ **0,19 m/s**, le gradient moyen d'environ **4,1 mmHg**, la surface valvulaire diminue d'environ **0,08 cm²** et le score calcique au scanner progresse d'environ **159 unités Agatston (UA)**. Une sténose plus serrée au départ progressait plus vite en vélocité, gradient et calcium, mais **pas** en surface.
- **Chiffres ACC/AHA 2020 pour la sténose modérée :** environ +0,3 m/s, +7 mmHg et −0,1 cm² par an, plus rapidement avec l'âge ou une calcification marquée. À −0,08 cm²/an en moyenne (ordre de grandeur indicatif), une valve à 1,5 cm² mettrait plusieurs années à atteindre 1,0 cm², mais la variabilité individuelle est très grande.
- **Score calcique et pronostic (Pawade 2018, 918 patients) :** un score dépassant les seuils par sexe prédisait le remplacement valvulaire ou le décès (**HR 3,90**), y compris en cas de mesures ETT discordantes. L'ESC 2025 souligne qu'une sténose modérée a un pronostic moins bénin qu'estimé auparavant, surtout en cas de calcification importante.
- *Limite avec FEVG réduite :* les cohortes de Willner avaient majoritairement une FEVG normale ; à faible débit, le gradient peut monter lentement alors que la valve se rétrécit, d'où l'intérêt de suivre aussi surface, indice de perméabilité et SVi.

| Sévérité | ESC/EACTS 2025 (§8.6, texte narratif) | ACC/AHA 2020 (tableau 5, fonction VG et débit normaux) |
|---|---|---|
| Léger | Tous les 2 à 3 ans chez les sujets jeunes sans calcification importante | Tous les 3 à 5 ans |
| Modéré | Au moins une fois par an | Tous les 1 à 2 ans |
| Sévère, asymptomatique | Au moins tous les 6 mois | Tous les 6 à 12 mois |

Les intervalles se raccourcissent quand la sévérité augmente, et le suivi du NT-proBNP peut aider au calendrier (ESC 2025). Aucun des deux textes ne fixe d'intervalle distinct pour une FEVG réduite d'autre cause : la périodicité relève de votre cardiologue, et une ETT est aussi indiquée si le souffle change, si des symptômes apparaissent ou lors d'un stress physiologique (chirurgie, infection, anémie, saignement).`,
    },
    {
      headingFr: 'Sténose modérée dans l’ICFER : cohortes, TAVR UNLOAD, PROGRESS et EXPAND TAVR II',
      bodyMarkdownFr: `### Ce que montrent les cohortes (Khan 2023)

Dans une grande cohorte américaine monocentrique de **9 133 patients** avec FEVG < 50 % (FEVG moyenne ~35 % dans chaque groupe), classés par **surface valvulaire uniquement** (modérée : 1,0–1,5 cm² ; sévère : < 1,0 cm²) :

- Sur une médiane de 3,1 ans, un décès ou une hospitalisation pour IC est survenu chez **62,7 % avec sténose modérée**, 45,9 % sans sténose et 62,0 % avec sténose sévère.
- Après appariement, la sténose modérée restait associée à plus d'événements combinés (**HR 1,24**), de décès (**HR 1,32**) et d'hospitalisations IC (**HR 1,27**), avec ~21 % de jours vivants hors hôpital en moins. Le gradient moyen médian n'était que de **16 mmHg** (majorité de valves à bas gradient). Douze pour cent ont été remplacés (médiane 10 mois), dont **80 % après progression vers une sténose sévère**.
- *Limites :* étude observationnelle, patients plus âgés (+11 ans) et plus malades, maladie coronaire codée chez seulement ~10 % du groupe modéré (très bas pour une ICFER), faible recours à la dobutamine ou au score calcique.

### Essais randomisés d'intervention précoce (TAVI) dans la sténose modérée

**1. TAVR UNLOAD (2025 — seul essai achevé conçu pour l'ICFER, lu en texte intégral et annexe) :**
- **Population :** 178 patients (âge moyen 77 ans, 21 % femmes) avec FEVG 20–50 %, symptômes (NYHA II–IV) sous traitement stable (~2/3 ischémiques, 45 % antécédent d'infarctus), randomisés entre TAVI précoce et surveillance (TAVI si passage en sténose sévère). Définition par surface (> 1,0 à ≤ 1,5 cm² au repos ; gradient moyen initial de **18,8 mmHg**). Exclusions : FEVG < 20 %, besoin de revascularisation coronaire ou stent/pontage < 1 mois, thrombus cardiaque, autre fuite sévère, DFGe < 30. Arrêté à 178 sur 600 prévus.
- **Critère principal non atteint :** critère hiérarchique (décès, AVC invalidant, hospitalisations, qualité de vie) : *win ratio* **1,31** (IC 95 % 0,91–1,88 ; p = 0,14).
- **Mortalité identique :** **39,3 % dans chaque bras** (médiane 23 mois ; HR 0,98) ; pas d'écart significatif sur hospitalisations/urgences IC (38,2 % vs 44,9 %) ni sur les AVC (28 et 29 décès CV sur 35).
- **Qualité de vie (KCCQ) meilleure à 1 an avec le TAVI :** +12,8 contre +3,2 points (p = 0,018 ; 60 % vs 35 % vivants avec gain notable), mais non significative au suivi maximal (+10,9 vs +6,1 ; p = 0,20). Le gain hiérarchique à 1 an (*win ratio* 1,55 ; p = 0,032) disparaissait dès qu'on retirait la qualité de vie.
- **Évolution et sécurité :** FEVG en hausse dans les deux bras (~39 % à 44 % après TAVI ; ~38 % à 43,5 % sous surveillance). **43 %** du groupe surveillance ont reçu un TAVI en 12 mois médian (35/38 après passage en sténose sévère, souvent après hospitalisation/urgence IC), incitant les auteurs à suggérer une ETT tous les 6 mois dans l'ICFER avec sténose modérée. Aucun décès à 30 jours après TAVI (1 AVC invalidant, 4 pacemakers soit 4,5 % sur 89). Essai sous-dimensionné (< 70 % de puissance), ouvert, financé par le fabricant, qualifié de générateur d'hypothèses (également mentionné par ESC 2025).

**2. PROGRESS (NEJM 2026, NCT04889872 — niveau de confiance modéré) :**
*Résumés revus par les pairs NEJM et Am Heart J et fiche ClinicalTrials.gov vérifiés ; texte intégral NEJM bloqué (HTTP 403), si bien que les détails de sous-groupes reposent encore sur la presse médicale secondaire.*
- **Population :** **744 patients** âgés de ≥ 65 ans (373 TAVI par prothèse SAPIEN 3/Ultra/RESILIA vs 371 surveillance ; jusqu'à 750 prévus dans *Am Heart J*) avec sténose modérée et au moins un critère de risque (symptômes ou atteinte cardiaque structurelle/fonctionnelle). Âge moyen 78 ans, 39,1 % femmes, 45,6 % faible risque chirurgical, **surface moyenne 1,2 cm²**, **vélocité maximale moyenne 3,3 m/s**. Le registre exclut **FEVG < 20 %** et < 65 ans.
- **Critère principal à 2 ans (Kaplan-Meier décès toutes causes ou événement IC avec/sans hospitalisation) :** **16,7 % avec TAVI contre 23,9 % sous surveillance**, soit une **différence de risque de −7,2 points de pourcentage (IC 95 % −13,1 à −1,3 ; p = 0,02 pour la supériorité)** (des comptes rendus secondaires citaient aussi un HR de 0,67 [0,48–0,93], absent du résumé NEJM).
- **Composantes (résumé NEJM) :** **pas de différence de mortalité toutes causes (8,4 % contre 7,3 %)** ; le gain provient des **événements d'insuffisance cardiaque (10,8 % contre 19,0 %)**, avec des effets indésirables procéduraux comparables entre TAVI précoce et remplacement différé.
- **Applicabilité limitée à l'ICFER :** selon la couverture secondaire, **seuls 25 % avaient une FEVG < 60 %** (population surtout à FEVG préservée ; aucun sous-groupe ICFER encore publié) et **57,4 %** ont croisé vers un remplacement en 2 ans.
- **Statut du registre réconcilié :** ClinicalTrials.gov (NCT04889872, mis à jour décembre 2025) affiche encore le statut *RECRUITING* avec 2 250 participants estimés et une fin primaire en juin 2029 car le protocole ouvre une **phase d'accès continu** après l'inclusion de la cohorte randomisée de 744 patients. Financé par Edwards Lifesciences.

**3. EXPAND TAVR II (NCT05149755 — essai pivot en cours, vérifié via ClinicalTrials.gov le 25 novembre 2026) :**
- **Statut et taille :** **ACTIVE_NOT_RECRUITING** (mis à jour le 30 septembre 2026), **650 patients** estimés randomisés entre TAVI transfémoral auto-expansible (Medtronic Evolut PRO+ ou FX) + traitement médical optimisé et traitement médical seul. Fin primaire estimée **septembre 2027** (fin finale décembre 2034). Critère principal à 2 ans : décès toutes causes, hospitalisation/événement IC ou instabilité médicale menant à un remplacement/réintervention.
- **Éligibilité et angle mort dans l'ICFER :** inclut des patients ≥ 65 ans avec **FEVG > 20 %** (exclut ≤ 20 %) et ≥ 1 signe de risque (FEVG < 60 %, SVi < 35 mL/m², NYHA ≥ II, NT-proBNP ≥ 600 pg/mL, FA, ou score calcique > 1 200 UA femmes / > 2 000 UA hommes). **Point crucial :** la sténose modérée requiert **à la fois** une surface qualifiante (1,0–1,5 cm² ou indexée) **et** soit Vmax ≥ 3,0 m/s, soit un **gradient moyen ≥ 20 mmHg**. Les personnes en ICFER avec sténose modérée **à bas gradient (< 20 mmHg)** — majoritaires dans Khan 2023 et moyennant 18,8 mmHg dans TAVR UNLOAD — **ne sont donc pas éligibles** à EXPAND TAVR II.

### Positions des recommandations sur la sténose modérée

- **ESC/EACTS 2025 (tableaux officiels) :** le remplacement isolé d'une sténose modérée n'est pas recommandé. En revanche, une chirurgie valvulaire (**SAVR**) **doit être envisagée** chez les patients symptomatiques ou asymptomatiques avec **sténose modérée** subissant déjà un pontage aorto-coronarien ou une chirurgie de l'aorte ascendante (**Classe IIa, niveau C** ; pour une sténose sévère : **Classe I, C**). **Nouveauté 2025 — valvulopathie aortique mixte modérée (RAo modéré + fuite aortique modérée) :** intervention recommandée si symptomatique avec gradient moyen ≥ 40 mmHg ou Vmax ≥ 4,0 m/s (**Classe I, B**), ou asymptomatique avec Vmax ≥ 4,0 m/s et FEVG < 50 % sans autre cause cardiaque (**Classe I, C**).
- **ACC/AHA 2020 (États-Unis) :** remplacement combiné lors d'une autre chirurgie cardiaque classé **Classe 2b, C-EO** (plus faible que l'Europe), et intervention pour sténose modérée + dysfonction VG signalée comme lacune des preuves.`,
    },
    {
      headingFr: 'Rétrécissement aortique et maladie coronarienne associée (pontage, stents, TAVI)',
      bodyMarkdownFr: `Dans la cardiomyopathie ischémique, rétrécissement aortique et artères coronaires rétrécies coexistent souvent. Les tableaux officiels **ESC/EACTS 2025** précisent comment évaluer et traiter ensemble les deux atteintes, toujours au sein de la **Heart Team** (ces lignes ne sont pas restreintes à la seule FEVG réduite) :

| Situation clinique | Recommandation ESC/EACTS 2025 | Classe | Niveau |
|---|---|---|---|
| **Bilan coronaire avant geste valvulaire** | Coroscanner (CCTA) si probabilité pré-test de coronaropathie obstructive modérée ou faible (≤ 50 %) | **I** | **B** |
| | Coronarographie invasive si probabilité pré-test élevée ou très élevée (> 50 %) | **I** | **C** |
| | Omettre la coronarographie invasive chez les candidats TAVI si le scanner de planification suffit à écarter une coronaropathie significative | **IIa** | **B** |
| **Indication principale de chirurgie valvulaire (SAVR) + coronaropathie** | **Pontage (CABG)** concomitant pour sténose coronaire **≥ 70 %** | **I** | **C** |
| | **Pontage (CABG)** concomitant pour sténose coronaire **≥ 50 %–70 %** | **IIa** | **C** |
| **Indication principale de TAVI + coronaropathie** | **Angioplastie (stents / PCI)** avant TAVI pour sténose **≥ 90 %** sur vaisseau de diamètre ≥ 2,5 mm (nouveau en 2025) | **IIa** | **B** |
| | **Angioplastie (PCI)** pour sténose **≥ 70 %** sur segments proximaux des gros troncs (abaissé depuis IIa C en 2021) | **IIb** | **B** |

- **Impact des coronaires sur le choix SAVR vs TAVI (ESC/EACTS 2025, figure 9) :** une **maladie coronarienne complexe** oriente vers la chirurgie (**SAVR**, permettant de combiner valve et pontages en une seule opération), tandis que des **pontages coronaires antérieurs perméables** orientent vers le **TAVI** (pour éviter une réintervention à cœur ouvert).
- **Accès coronaire sur la durée de vie :** la figure 9 rappelle que le choix initial de prothèse anticipe les gestes futurs : un TAVI ultérieur (*valve-in-valve*) comporte un risque d'**obstruction coronaire** et d'**accès coronaire plus difficile** si de futurs stents sont nécessaires, tandis qu'une chirurgie après TAVI accroît le risque opératoire lié à l'explantation de la valve.

### Médicaments et symptômes

- **Aucun médicament ne ralentit le rétrécissement valvulaire.** Les statines sont sans effet sur la valve (ACC/AHA **Classe 3 : Pas de bénéfice, A**) mais restent indiquées (**Classe 1, A**) pour la prévention coronaire (ESC 2025 ; ACC/AHA 2020).
- **Pression artérielle et traitements de l'IC :** traiter l'HTA en commençant à faible dose puis en titrant progressivement (ACC/AHA **Classe 1, B-NR**). L'ESC 2025 privilégie les IEC ou ARA2 prudemment titrés pour éviter l'hypotension symptomatique ; l'ACC/AHA rappelle que les **diurétiques** peuvent réduire le volume d'éjection surtout si le VG est petit. La cible 130–139/80–90 mmHg parfois citée vient d'une analyse de l'essai SEAS dans la sténose asymptomatique et non de l'ICFER (Basile 2021). Le consensus HFA 2025 sur l'hypotension dans l'ICFER (Skouri 2025) cite la sténose sévère parmi les causes de pression basse et relève une remontée systolique chez 55 % des patients à 30 jours après TAVI (PARTNER I, hors ICFER ; sténoses légères/modérées non abordées). Dans la méta-analyse de Guan (2023 ; 11 études surtout observationnelles et à FEVG préservée, 33 858 patients), les IEC/ARA2 étaient liés à moins de décès *après* remplacement (OR 0,57) mais pas sans remplacement ; après TAVI, l'ACC/AHA classe les IEC/ARA2 en **Classe 2b, B-NR** (association observée à FEVG préservée et **non** réduite). Aucune étude dédiée aux ARNI dans la sténose aortique n'a été retrouvée. Les médicaments de l'IC sont instaurés avant le geste valvulaire et titrés ensuite, sans retarder l'intervention en cas de sténose sévère symptomatique (ESC 2025 ; voir *Tension artérielle et insuffisance cardiaque*).
- **Symptômes :** essoufflement, fatigue, douleur thoracique, vertiges ou malaises et baisse du périmètre de marche recoupent ceux de l'insuffisance cardiaque. Signalez toute évolution à votre équipe (et appelez le **15 / 112 / 114** en cas de douleur thoracique aiguë, malaise ou détresse respiratoire).`,
    },
    {
      headingFr: 'Quand une sténose sévère est suspectée : examens, décisions ESC 2025 et limites',
      bodyMarkdownFr: `Cette section s'applique lorsque la surface valvulaire avoisine **≤ 1,0 cm²** (ou ≤ 0,6 cm²/m²) mais que le gradient est bas (< 40 mmHg), avec SVi ≤ 35 mL/m² et FEVG < 50 % (~5 à 10 % des sténoses aortiques ; stade D2 ACC/AHA). Si la vélocité est déjà ≥ 4,0 m/s et le gradient ≥ 40 mmHg au repos, aucun test de stress n'est requis : la sténose est sévère à haut gradient.

L'objectif est de distinguer une sténose **vraiment sévère** d'une sténose **pseudo-sévère** (valve modérée dans un cœur affaibli par une autre cause, comme un infarctus).

- **Échocardiographie de stress à la dobutamine à faible dose (DSE ; ACC/AHA Classe 2a, B-NR) :**
  - **Réserve de débit (contractile) :** le volume d'éjection augmente d'au moins 20 % (l'ESC 2025 calcule une surface projetée si la hausse est de 10 à 20 %).
  - **Vraiment sévère :** le gradient atteint ≥ 40 mmHg (ou vélocité ≥ 4,0 m/s) alors que la surface reste ≤ 1,0 cm².
  - **Pseudo-sévère :** la surface s'ouvre **au-delà de 1,0 cm²** et le gradient demeure < 40 mmHg.
  - Environ un tiers des patients n'ont **pas de réserve de débit**, ce qui accroît le risque opératoire sans exclure le bénéfice d'un remplacement (Clavel 2016 ; EACVI/ASE 2017).
- **Score calcique valvulaire au scanner (indépendant du débit ; ACC/AHA Classe 2a, B-NR), en unités Agatston (UA) :**

| Probabilité de sténose aortique sévère | Hommes | Femmes |
|---|---|---|
| Très probable | > 3 000 UA | > 1 600 UA |
| Probable | > 2 000 UA | > 1 200 UA (ACC/AHA : 1 300 ; Pawade : 1 377) |
| Peu probable | < 1 600 UA | < 800 UA |

Les seuils féminins sont plus bas car les femmes développent une sténose serrée avec moins de calcium (Pawade 2018). Ces seuils ont surtout été établis à débit normal et peuvent être pris en défaut en cas de bicuspidie, d'amylose ou de sténose fibreuse (ESC 2025).

### Décisions vérifiées (ESC/EACTS 2025 contre ACC/AHA 2020)

- **Sténose sévère symptomatique à haut gradient :** intervention recommandée — ESC/EACTS 2025 **Classe I, B** ; ACC/AHA 2020 (stade D1) **Classe 1, A**.
- **Sténose vraie sévère symptomatique LFLG classique (FEVG < 50 %) :** remplacement valvulaire recommandé dès confirmation rigoureuse par DSE ou score calcique — **ESC/EACTS 2025 Classe I, B** (*révisé en 2025 pour retirer l'exigence de réserve de débit de la ligne Classe I, unifiant les formes LFLG à FEVG < 50 % avec ou sans réserve*) ; ACC/AHA 2020 (stade D2) **Classe 1, B-NR** (survie historique non traitée de 40 à 60 % à 2 ans).
- **Sténose symptomatique LFLG paradoxale (FEVG ≥ 50 %) :** ESC/EACTS 2025 **Classe IIa, B** (relevé depuis IIa C en 2021) après confirmation rigoureuse.
- **Sténose pseudo-sévère :** traitement médical de fond de l'IC (+ revascularisation ou CRT si indiqués) et suivi rapproché, avec remplacement si progression vers une sténose vraie sévère ou symptômes persistants.
- **Sténose sévère asymptomatique avec FEVG < 50 % :** intervention recommandée lorsqu'**aucune autre cause** n'explique la baisse de FEVG — ESC/EACTS 2025 **Classe I, B** ; ACC/AHA 2020 (stade C2) **Classe 1, B-NR**. Dans la cardiomyopathie ischémique, il *existe* une autre cause (la cicatrice coronaire), raison majeure du passage en **Heart Team**.
- **Sténose sévère asymptomatique avec FEVG ≥ 50 % (à titre comparatif) :** ESC/EACTS 2025 ajoute la **Classe IIa, A** pour une intervention précoce à faible risque dans la sténose sévère haut gradient (test d'effort normal si réalisable) en alternative à la surveillance active, et la **Classe IIa, B** en présence de marqueurs de haut risque (sténose très sévère ≥ 60 mmHg ou Vmax > 5,0 m/s, calcification sévère avec progression ≥ 0,3 m/s/an, BNP/NT-proBNP > 3 fois la normale répété sans autre cause, ou FEVG < 55 % sans autre cause).
- **Choix entre TAVI et chirurgie (SAVR) :** ESC/EACTS 2025 recommande une prise en charge en centre expert avec **Heart Team (Classe I, C)** et planification sur la durée de vie (**Classe I, C**) : **TAVI** recommandé à partir de **70 ans** sur valve tricuspide d'anatomie favorable (**Classe I, A**), **SAVR** recommandée **avant 70 ans** à faible risque chirurgical (**Classe I, B**), et SAVR ou TAVI selon la Heart Team pour les autres candidats à bioprothèse (**Classe I, B**). L'anatomie et une coronaropathie associée (figure 9) peuvent faire pencher le choix dans un sens ou l'autre.

### Limites des preuves disponibles

- **Peu d'essais dédiés à l'ICFER avec sténose modérée :** TAVR UNLOAD était petit et sous-dimensionné ; le résumé NEJM 2026 de PROGRESS confirme le gain de −7,2 points sans réduction de mortalité mais le texte intégral était bloqué (HTTP 403), seuls 25 % avaient une FEVG < 60 % d'après la presse secondaire et aucun sous-groupe ICFER n'est encore lisible ; EXPAND TAVR II (n = 650, fin primaire septembre 2027) exclut les gradients < 20 mmHg.
- **Origine ischémique non séparée :** aucun essai de sténose aortique n'a détaillé séparément les cardiomyopathies ischémiques et non ischémiques, et Khan (2023) ne codait la maladie coronaire que chez ~10 % des patients.
- **Niveau d'accès aux textes ESC/EACTS 2025 :** les tableaux de recommandations et les figures 6 à 9 ont été vérifiés directement sur le PDF officiel ESC de 105 diapositives (corrigeant des imprécisions antérieures de sources secondaires, dont le niveau **B** — et non A — pour la SAVR avant 70 ans et pour la sténose sévère asymptomatique avec FEVG < 50 %), tandis que l'article éditeur était inaccessible (HTTP 403 / reCAPTCHA), si bien que les notes de bas de tableau du PDF complet n'ont pas été lues directement.
- Les données de progression (Willner 2023, résumé) et les intervalles d'ETT reposent surtout sur des FEVG et débits normaux ; les données IEC/ARA2 (Guan 2023) sont observationnelles et il n'existe pas de données propres aux ARNI.`,
    },
  ],
  relatedArticleSlugs: [
    'maladies-associees',
    'fuite-mitrale-secondaire',
    'examens-et-chiffres',
    'fraction-dejection',
    'medicaments-insuffisance-cardiaque',
    'revascularisation-pontage-stents',
    'recommandations-comparees-esc-us-nice',
    'essais-cliniques-cles',
    'essais-cliniques-en-cours-et-a-suivre',
    'questions-equipe-cardiologie',
    'tension-arterielle-insuffisance-cardiaque',
    'confirmer-la-cause-dysfonction-vg',
    'glossaire-cardiologie',
    'comprendre-le-diagnostic',
  ],
  sources: [
    { label: 'Recommandations ESC/EACTS 2025 sur les valvulopathies (diapositives officielles vérifiées et sections RAo)', detail: 'Tableaux officiels (LFLG I B sans condition de réserve, TAVI ≥ 70 I A, SAVR < 70 I B, SAVR combiné modéré IIa C, tableau RAo + coronaropathie et figures 6–9)' },
    { label: 'EACVI/ASE (2017) et ACC/AHA 2020 sur les valvulopathies', detail: 'Classification échocardiographique, erreurs de mesure, DSE, seuils calciques, stades A–D et intervalles ETT' },
    { label: 'Clavel et al. (2016), Willner et al. (2023, résumé) et Pawade et al. (2018, résumé)', detail: 'Dépendance au débit, vitesse annuelle de progression (−0,08 cm²/an) et score calcique valvulaire par sexe' },
    { label: 'Khan et al. (2023)', detail: 'Pronostic de la sténose aortique modérée dans une cohorte de 9 133 patients ICFER' },
    { label: 'TAVR UNLOAD (2025, texte intégral et annexe)', detail: 'Essai randomisé du TAVI précoce dans la sténose modérée avec ICFER (178 patients)' },
    { label: 'PROGRESS (résumé NEJM 2026, Am Heart J et ClinicalTrials.gov NCT04889872) et EXPAND TAVR II (ClinicalTrials.gov NCT05149755)', detail: 'Résultats à 2 ans de PROGRESS (−7,2 points, décès 8,4 % vs 7,3 %, phase d’accès continu) et statut ACTIVE_NOT_RECRUITING d’EXPAND TAVR II (exclusion gradient < 20 mmHg)' },
    { label: 'Guan (2023), RIAS (2015), Basile (2021, texte intégral), Skouri (2025, texte intégral) et ESC 2026 (pression artérielle)', detail: 'Bloqueurs du SRAA, tension artérielle et précautions thérapeutiques dans la sténose aortique' },
  ],
  disclaimerType: 'medical',
};
