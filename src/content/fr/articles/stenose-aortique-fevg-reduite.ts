import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'stenose-aortique-fevg-reduite',
  sourceWikiPath: 'wiki/concepts/aortic-stenosis-with-reduced-ef.md',
  titleFr: 'Rétrécissement aortique avec FEVG réduite',
  category: 'comorbidites',
  asOf: '2026-11-24',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'rétrécissement-aortique',
    'sténose-aortique',
    'bas-débit-bas-gradient',
    'sténose-modérée',
    'ett',
    'tavi',
    'icfer',
    'surveillance',
    'score-calcique',
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
    'Échocardiographie de stress à la dobutamine',
    'Score calcique valvulaire',
  ],
  linkedModules: ['aorticStenosis'],
  plainSummaryFr:
    "La valve aortique est la porte entre le ventricule gauche et l'aorte. Dans le rétrécissement aortique (sténose aortique), elle s'épaissit et se calcifie. Lorsque la pompe cardiaque est déjà affaiblie, les chiffres d'échocardiographie sont plus délicats à lire : un faible débit abaisse le gradient de pression (masquant parfois une sténose serrée) ou empêche une valve modérément atteinte de s'ouvrir pleinement (« pseudo-sévère »). La surface valvulaire diminue en moyenne d'environ 0,08 cm² par an. Dans l'essai TAVR UNLOAD (178 patients ICFER avec sténose modérée), le remplacement précoce n'a pas atteint son critère principal ni changé la mortalité mais a amélioré la qualité de vie à 1 an. Le suivi repose sur des ETT régulières et les décisions sur la Heart Team.",
  sections: [
    {
      headingFr: 'Comment le rétrécissement aortique est-il classé ?',
      bodyMarkdownFr: `Cet article porte surtout sur le **rétrécissement aortique léger à modéré associé à une FEVG déjà réduite** (par exemple une cardiomyopathie ischémique autour de 35 %). Le bilan d'une sténose *sévère* suspectée est détaillé plus bas.

Le tableau échocardiographique standard provient des sociétés européenne (EACVI) et américaine (ASE) d'imagerie (2017), complété par les critères ESC/EACTS 2025 pour la forme bas débit, bas gradient :

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

- **ESC/EACTS 2025 (Europe) :** un rétrécissement sévère à haut gradient associe gradient moyen ≥ 40 mmHg, vélocité ≥ 4,0 m/s et surface ≤ 1 cm² (ou ≤ 0,6 cm²/m²) ; un indice de perméabilité < 0,25 rend le caractère sévère très probable (les seuils numériques exacts des formes légères et modérées ne figuraient pas dans la partie lisible du texte).
- **ACC/AHA 2020 (États-Unis) :** utilise les stades A à D. Le stade B (« progressif ») regroupe le stade léger (vélocité 2,0–2,9 m/s ou gradient < 20 mmHg) et modéré (3,0–3,9 m/s ou 20–39 mmHg), **sans critère de surface valvulaire**. La sténose sévère est définie par la vélocité ou le gradient (surface « typiquement » ≤ 1,0 cm² mais non exigée) ; un indice de perméabilité ≤ 0,25 est compatible avec une forme sévère. Ainsi, la borne américaine du stade léger commence plus bas (2,0 m/s) que celle de l'EACVI/ASE (2,6 m/s).`,
    },
    {
      headingFr: 'Pourquoi les chiffres peuvent tromper en cas de bas débit',
      bodyMarkdownFr: `- **L'effet du débit.** Le gradient varie comme le carré du débit : lorsque le ventricule gauche éjecte peu de sang, le gradient se « pseudo-normalise » et une valve serrée paraît moins atteinte (Clavel 2016). Le bas débit est défini par un **volume d'éjection indexé (SVi) < 35 mL/m²** (≤ 35 mL/m² selon l'ESC 2025).
- **L'erreur inverse existe aussi.** À bas débit, un ventricule affaibli peut ne pas pousser suffisamment fort pour ouvrir complètement une valve modérément calcifiée : la *surface calculée* ressort alors artificiellement petite et une sténose modérée ressemble à une forme sévère (**« pseudo-sévère »**). Le bas débit peut donc tirer le gradient vers « plus léger » et la surface vers « plus serré » en même temps (Clavel 2016 ; EACVI/ASE 2017).
- **Variabilité de mesure :**
  - La surface est calculée par l'équation de continuité à partir du diamètre de la chambre de chasse du VG (CCVG / LVOT), qui est **élevé au carré** : c'est la première source d'erreur (variabilité de 5 à 8 %, contre 3 à 4 % pour les vélocités).
  - La chambre de chasse est habituellement **ovale et non circulaire** ; l'assimiler à un cercle sous-estime la surface d'environ 0,2 cm² en moyenne dans une étude citée (EACVI/ASE 2017).
  - L'**indice de perméabilité** (rapport des vélocités) évite l'étape du diamètre : un rapport > 0,25 face à une petite surface calculée fait suspecter une sous-estimation du diamètre ou de la vélocité.
  - La **pression artérielle** doit être relevée lors de chaque ETT, car une hypertension modifie les vélocités et le gradient (EACVI/ASE 2017).
  - Le document EACVI/ASE invite lui-même à interpréter avec prudence la classification par débit, le Doppler pouvant sous-estimer le volume d'éjection.

**En pratique :** aucun chiffre n'est lu isolément, et une petite variation de surface entre deux ETT peut relever de la marge de mesure plutôt que d'une réelle aggravation. L'EACVI/ASE cite d'ailleurs l'antécédent d'infarctus du myocarde comme situation classique de rétrécissement aortique pseudo-sévère.`,
    },
    {
      headingFr: 'Vitesse de progression et fréquence des ETT de contrôle',
      bodyMarkdownFr: `### À quelle vitesse la sténose progresse-t-elle ?

- **Méta-analyse Willner 2023** (24 études prospectives, 5 450 patients) : chaque année, en moyenne, la vélocité maximale augmente d'environ **0,19 m/s**, le gradient moyen d'environ **4,1 mmHg**, la surface valvulaire diminue d'environ **0,08 cm²** et le score calcique au scanner augmente d'environ **159 unités Agatston (UA)**. Une sténose plus serrée au départ progressait plus vite en vélocité, gradient et calcium, mais **pas** en surface.
- **Chiffres ACC/AHA 2020 pour la sténose modérée :** environ +0,3 m/s, +7 mmHg et −0,1 cm² par an, avec progression plus rapide chez les personnes plus âgées ou très calcifiées.
- **Ordre de grandeur illustratif :** à −0,08 cm²/an en moyenne, une valve à la frontière léger-modéré (1,5 cm²) mettrait plusieurs années à atteindre 1,0 cm², mais les trajectoires individuelles varient énormément d'une personne à l'autre.
- **Score calcique et pronostic (registre Pawade 2018, 918 patients) :** un score calcique dépassant les seuils par sexe prédisait le remplacement valvulaire ou le décès (HR 3,90), y compris en cas de mesures ETT discordantes (cela prédit l'évolution clinique, sans mesurer directement la vitesse de rétrécissement). L'ESC 2025 souligne que le rétrécissement modéré comporte un pronostic moins bénin qu'on ne le pensait autrefois, surtout en cas de calcification importante.
- *Limite avec FEVG réduite :* les cohortes de Willner (2023) avaient majoritairement une FEVG normale ; à faible débit, le gradient peut monter moins vite alors que la valve se rétrécit, d'où l'intérêt de suivre aussi la surface, l'indice de perméabilité et le volume d'éjection.

### Rythme de surveillance échocardiographique

| Sévérité | ESC/EACTS 2025 (§8.6) | ACC/AHA 2020 (tableau 5) |
|---|---|---|
| Léger | Tous les 2 à 3 ans chez les sujets jeunes sans calcification importante | Tous les 3 à 5 ans |
| Modéré | Au moins une fois par an | Tous les 1 à 2 ans |
| Sévère, asymptomatique | Au moins tous les 6 mois | Tous les 6 à 12 mois |

- **ESC 2025 :** les intervalles se raccourcissent quand la sévérité augmente, et le suivi du NT-proBNP peut aider à caler le calendrier ; aucun intervalle distinct n'est toutefois fixé pour le bas débit ou la FEVG réduite d'autre cause.
- **ACC/AHA 2020 :** ce tableau concerne les personnes ayant une **fonction VG et un volume d'éjection normaux** ; en cas de FEVG réduite, la périodicité relève du jugement du cardiologue. Une ETT est aussi justifiée si le souffle change, si des symptômes apparaissent ou en cas de stress physiologique (chirurgie, infection, anémie, saignement).`,
    },
    {
      headingFr: "Impact d'un rétrécissement modéré dans l'ICFER et essais d'intervention précoce",
      bodyMarkdownFr: `### Ce que montrent les cohortes (Khan 2023)

Dans une grande cohorte américaine monocentrique de **9 133 patients** avec FEVG < 50 % (FEVG moyenne d'environ 35 % dans chaque groupe), classés par **surface valvulaire uniquement** (modérée : 1,0–1,5 cm² ; sévère : < 1,0 cm²) :

- Sur une médiane de 3,1 ans, un décès ou une hospitalisation pour IC est survenu chez **62,7 % avec sténose modérée**, 45,9 % sans sténose et 62,0 % avec sténose sévère.
- Après appariement, la sténose modérée restait associée à davantage d'événements combinés (HR 1,24), de décès (HR 1,32) et d'hospitalisations pour IC (HR 1,27), avec environ 21 % de jours vivants hors hôpital en moins.
- Le gradient moyen médian du groupe modéré n'était que de **16 mmHg** (majoritairement des valves à bas gradient). Douze pour cent ont eu un remplacement valvulaire (médiane 10 mois), dont **80 % après progression vers une sténose sévère**.
- *Limites :* étude observationnelle ne prouvant pas la causalité ; patients plus âgés (+11 ans) et plus malades ; maladie coronaire codée chez seulement ~10 % du groupe modéré (très bas pour une ICFER) ; recours rare à la dobutamine ou au score calcique.

### Essais de remplacement valvulaire précoce (TAVI)

**TAVR UNLOAD (2025)** est le seul essai randomisé achevé conçu spécifiquement pour la sténose aortique modérée dans l'ICFER (lu en texte intégral) :

- **Population :** 178 patients (âge moyen 77 ans, 21 % de femmes) avec FEVG 20–50 % et symptômes (NYHA II–IV) sous traitement médical stable (environ deux tiers de cardiomyopathie ischémique, 45 % d'antécédent d'infarctus), randomisés entre TAVI précoce et surveillance (avec TAVI si progression vers une forme sévère).
- **Définition de « modéré » :** surface > 1,0 et ≤ 1,5 cm² au repos (ETT de stress si ≤ 1,0 cm² avec suspicion de bas débit ; une surface > 1,5 cm² n'était incluse que si la surface indexée était < 0,9 cm²/m²). Un gradient < 20 mmHg n'excluait pas l'inclusion (gradient moyen initial de **18,8 mmHg**). Étaient exclus : FEVG < 20 %, besoin de revascularisation coronaire ou stent/pontage dans le mois précédent, thrombus cardiaque, autre fuite sévère, DFGe < 30 mL/min/1,73 m².
- **Recrutement arrêté tôt :** 600 patients prévus, arrêt à 178 après lenteur d'inclusion et modifications de protocole.
- **Critère principal non atteint :** le critère hiérarchique (décès, AVC invalidant, hospitalisations, qualité de vie) a donné un *win ratio* de **1,31** (IC 95 % 0,91–1,88 ; p = 0,14).
- **Mortalité identique :** **39,3 % dans chaque bras** sur une médiane de 23 mois (HR 0,98) ; pas de différence significative sur les hospitalisations/événements urgents d'IC (38,2 % contre 44,9 %) ni sur les AVC (28 et 29 décès cardiovasculaires sur 35 dans chaque bras).
- **Qualité de vie (score KCCQ) améliorée à 1 an avec le TAVI :** +12,8 contre +3,2 points (p = 0,018) et 60 % contre 35 % vivants avec amélioration notable ; l'écart n'était plus significatif au suivi maximal (+10,9 contre +6,1 ; p = 0,20). Distance de marche, NT-proBNP et échelles générales ne différaient pas. Le gain hiérarchique à 1 an (*win ratio* 1,55 ; p = 0,032) disparaissait dès qu'on retirait la qualité de vie.
- **Évolution de la FEVG et croisement :** la FEVG a monté dans les deux groupes (~39 % à 44 % après TAVI ; ~38 % à 43,5 % sous surveillance seule). Surtout, **43 % du groupe surveillance ont reçu un TAVI dans un délai médian de 12 mois** (35 sur 38 après passage en sténose sévère, dont environ la moitié après une hospitalisation ou urgence d'IC). Les auteurs suggèrent une ETT tous les 6 mois environ dans l'ICFER avec sténose modérée.
- **Sécurité :** aucun décès à 30 jours après TAVI ; 1 AVC invalidant et 4 pacemakers (4,5 %) sur 89 patients.
- **Limites :** faible puissance (< 70 %), essai ouvert (biais possible sur la qualité de vie), 43 % de croisement, peu de patients sous ARNI/iSGLT2 et financement par le fabricant. Les auteurs qualifient les résultats de générateurs d'hypothèses.

**PROGRESS (2026)** (*faible niveau de confiance : lu uniquement via des comptes rendus de presse, non publié en intégralité*) : 744 patients de ≥ 65 ans avec sténose modérée et signe de risque ; événements décès/IC à 2 ans de 16,7 % contre 23,9 % (HR 0,67), portés par moins d'hospitalisations (7,4 % contre 14,9 %) sans différence sur la mortalité (8,4 % contre 7,3 %). **Seuls 25 % avaient une FEVG < 60 %** (population surtout à FEVG préservée), et l'effectif de 744 ne concorde pas avec les 2 250 prévus au registre (écart non résolu ; financé par l'industrie). D'autres essais comme EXPAND TAVR II sont mentionnés dans la littérature sans que leur statut ait été vérifié.

### Position des recommandations sur la sténose modérée et médicaments

- **Intervention :** selon ESC/EACTS 2025, la chirurgie d'une sténose modérée n'est envisagée que si une chirurgie cardiaque est **déjà prévue** pour une autre raison (pontage aorto-coronarien, aorte ou autre valve) ; le remplacement isolé n'est pas recommandé. L'ACC/AHA 2020 classe ce geste combiné en **Classe 2b, C-EO** et signale l'intervention en cas de sténose modérée + dysfonction VG comme une **lacune des preuves** (voir *Revascularisation coronaire : pontage et stents*).
- **Aucun médicament ne ralentit le rétrécissement valvulaire lui-même.** Les statines n'ont pas ralenti la progression (ACC/AHA **Classe 3 : Pas de bénéfice, A** pour la valve), mais restent indiquées (**Classe 1, A**) pour la prévention coronaire (ESC 2025 ; ACC/AHA 2020).
- **Pression artérielle et médicaments de l'IC :** traiter l'hypertension en démarrant à faible dose puis en augmentant lentement (ACC/AHA **Classe 1, B-NR**). L'ESC 2025 privilégie les IEC ou ARA2 prudemment titrés ; l'ACC/AHA souligne que les **diurétiques** peuvent réduire le volume d'éjection surtout si le VG est petit. Dans la méta-analyse de Guan (2023 ; 11 études majoritairement observationnelles et à FEVG préservée, 33 858 patients), les IEC/ARA2 étaient associés à une mortalité plus basse *après* remplacement valvulaire (OR 0,57) mais pas sans remplacement ; aucune étude spécifique du sacubitril/valsartan (ARNI) dans le rétrécissement aortique n'a été identifiée. Les médicaments de l'IC sont instaurés avant le geste valvulaire et titrés ensuite, sans jamais retarder l'intervention en cas de sténose sévère symptomatique (ESC 2025 ; voir *Tension artérielle et insuffisance cardiaque*).
- **Symptômes :** essoufflement, fatigue, douleur thoracique, vertiges ou malaises et baisse du périmètre de marche recoupent ceux de l'insuffisance cardiaque ; signalez toute évolution à votre équipe pour juger de l'utilité d'une ETT de contrôle.`,
    },
    {
      headingFr: 'Quand une sténose sévère est suspectée (et limites des preuves)',
      bodyMarkdownFr: `Cette situation concerne les valves dont la surface est d'environ **≤ 1,0 cm²** avec un gradient bas (< 40 mmHg), un SVi ≤ 35 mL/m² et une FEVG < 50 % (environ 5 à 10 % de tous les rétrécissements aortiques ; stade D2 de l'ACC/AHA). Si la vélocité est déjà ≥ 4 m/s ou le gradient ≥ 40 mmHg au repos, aucun test de stress n'est nécessaire : la sténose est sévère.

L'enjeu est de distinguer une sténose **vraiment sévère** (la valve est l'obstacle principal) d'une sténose **pseudo-sévère** (valve modérée dans un cœur affaibli par une autre cause, comme un infarctus).

- **Échocardiographie de stress à la dobutamine à faible dose (DSE ; ACC/AHA Classe 2a, B-NR) :**
  - **Réserve de débit (contractile) :** le volume d'éjection augmente d'au moins 20 % (l'ESC 2025 calcule une surface projetée si la hausse est de 10 à 20 %).
  - **Vraiment sévère :** le gradient atteint ≥ 40 mmHg (ou vélocité ≥ 4 m/s) tandis que la surface reste ≤ 1,0 cm².
  - **Pseudo-sévère :** la surface s'ouvre au-delà de 1,0 cm² et le gradient reste < 40 mmHg.
  - Environ un tiers des patients n'ont **pas de réserve de débit**, ce qui augmente le risque opératoire sans exclure un bénéfice du remplacement valvulaire (Clavel 2016 ; EACVI/ASE 2017).
- **Score calcique valvulaire au scanner (indépendant du débit ; ACC/AHA Classe 2a, B-NR), en unités Agatston (UA) :**

| Probabilité de sténose aortique sévère | Hommes | Femmes |
|---|---|---|
| Très probable | > 3 000 UA | > 1 600 UA |
| Probable | > 2 000 UA | > 1 200 UA (ACC/AHA : 1 300 ; Pawade : 1 377) |
| Peu probable | < 1 600 UA | < 800 UA |

Les seuils féminins sont plus bas car les femmes développent des sténoses serrées avec moins de calcium (Pawade 2018). Ces seuils ont surtout été établis à débit normal (extrapolation au bas débit) et peuvent être pris en défaut en cas de bicuspidie, d'amylose ou de sténose surtout fibreuse (ESC 2025).

- **Décisions ensuite :**
  - **Sténose vraiment sévère :** remplacement valvulaire recommandé (ESC 2025 ; ACC/AHA **Classe 1, B-NR** en D2 symptomatique ; survie historique non traitée de 40 à 60 % à 2 ans). En l'absence de réserve de débit, la décision est individualisée.
  - **Sténose pseudo-sévère :** traitement médical de l'IC (revascularisation et CRT si indiquées) et suivi rapproché, avec remplacement si la sténose progresse ou si les symptômes persistent.
  - **Sténose sévère asymptomatique avec FEVG < 50 % :** intervention recommandée par l'ESC 2025 lorsqu'**aucune autre cause** n'explique la baisse de FEVG (ACC/AHA Classe 1, B-NR, stade C2). Dans la cardiomyopathie ischémique, il *existe* une autre cause, d'où le rôle central de la **Heart Team**.
  - **TAVI ou chirurgie :** l'ESC 2025 privilégie le TAVI (par l'artère fémorale) à partir d'environ 70 ans sur valve tricuspide d'anatomie favorable, et la chirurgie avant 70 ans à faible risque chirurgical, selon l'anatomie.

### Limites des preuves disponibles

- Peu d'essais ciblent exactement l'ICFER avec sténose modérée (TAVR UNLOAD était sous-dimensionné ; PROGRESS concernait surtout des FEVG préservées et n'a été lu que dans la presse).
- Aucune source sur la sténose aortique ne séparait les causes ischémiques et non ischémiques, et Khan (2023) codait très peu de maladies coronaires.
- Les données de progression (Willner 2023, résumé seul) et les calendriers d'ETT reposent surtout sur des patients à FEVG et débit normaux.
- Les tableaux de classes/niveaux ESC 2025 étant sous forme d'images non lisibles dans la source, les positions ESC 2025 sont restituées sous forme textuelle. Les données IEC/ARA2 (Guan 2023) sont observationnelles et il n'existe pas de données propres aux ARNI.`,
    },
  ],
  relatedArticleSlugs: [
    'maladies-associees',
    'examens-et-chiffres',
    'fraction-dejection',
    'medicaments-insuffisance-cardiaque',
    'revascularisation-pontage-stents',
    'recommandations-comparees-esc-us-nice',
    'essais-cliniques-cles',
    'questions-equipe-cardiologie',
    'tension-arterielle-insuffisance-cardiaque',
    'confirmer-la-cause-dysfonction-vg',
    'glossaire-cardiologie',
    'comprendre-le-diagnostic',
  ],
  sources: [
    { label: 'EACVI/ASE (2017)', detail: 'Évaluation échocardiographique du rétrécissement aortique, erreurs de mesure, DSE et seuils calciques' },
    { label: 'Recommandations ESC/EACTS 2025 sur les valvulopathies', detail: 'Catégories de sévérité, surveillance (§8.6), sténose modérée (§8.4.3), médicaments (§8.3) et choix TAVI vs chirurgie' },
    { label: 'Recommandations ACC/AHA 2020 sur les valvulopathies', detail: 'Stades A–D, intervalles ETT, médicaments et classes de recommandation' },
    { label: 'Clavel et al. (2016), Willner et al. (2023) et Pawade et al. (2018)', detail: 'Sténose bas débit, vitesse annuelle de progression et score calcique valvulaire par sexe' },
    { label: 'Khan et al. (2023)', detail: 'Pronostic de la sténose aortique modérée dans une cohorte de 9 133 patients ICFER' },
    { label: 'TAVR UNLOAD (2025, texte intégral et annexe)', detail: 'Essai randomisé du TAVI précoce dans la sténose modérée avec ICFER (178 patients)' },
    { label: 'PROGRESS (2026, couverture presse uniquement)', detail: 'Données préliminaires de TAVI précoce dans une population surtout à FEVG préservée' },
    { label: 'Guan (2023), RIAS (2015), Basile (2021) et ESC 2026 (pression artérielle)', detail: 'Bloqueurs du SRAA, pression artérielle et prudence thérapeutique dans la sténose aortique' },
  ],
  disclaimerType: 'medical',
};
