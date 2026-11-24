import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'confirmer-la-cause-dysfonction-vg',
  sourceWikiPath: 'wiki/concepts/confirming-the-cause-of-lv-dysfunction.md',
  titleFr: 'Confirmer la cause de la dysfonction du ventricule gauche',
  category: 'diagnostic',
  asOf: '2026-11-24',
  confidence: 'medium',
  volatility: 'warm',
  tags: [
    'étiologie',
    'irm-cardiaque',
    'lge',
    'rehaussement-tardif',
    'cardiomyopathie-dilatée',
    'double-pathologie',
    'cardiopathie-hypertensive',
    'génétique',
    'fibrose-médiomurale',
  ],
  aliases: [
    'Étiologie',
    "Cause de l'insuffisance cardiaque",
    'Ischémique vs non ischémique',
    'Dysfonction VG disproportionnée',
    'Double pathologie',
    'Profil LGE',
    'Fibrose médio-murale',
    'Définition de Felker',
    'Cardiomyopathie dilatée',
    'CMD',
    'Cardiopathie hypertensive',
    'Test génétique cardiomyopathie',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Qualifier un cœur affaibli d'« ischémique » repose habituellement sur la coronarographie et un antécédent d'infarctus. Mais lorsque la baisse de pompe paraît plus globale ou plus marquée que ne l'expliquent les lésions coronaires, votre équipe recherche parfois une cause associée (hypertension ancienne, alcool, myocardite passée, valvulopathie ou cardiomyopathie génétique). L'IRM cardiaque avec produit de contraste (LGE) est l'examen central : les cicatrices d'infarctus et les cicatrices non ischémiques n'occupent pas les mêmes couches de la paroi, et deux causes peuvent coexister. La réponse peut influencer les seuils de DAI, le dépistage familial et le bilan génétique.",
  sections: [
    {
      headingFr: 'Comment définit-on une cause « ischémique » ?',
      bodyMarkdownFr: `- **La définition de recherche (Felker 2002) :** chez 1 921 patients atteints d'IC avec FEVG ≤ 40 %, cinq méthodes de classification ont été comparées. Les personnes ayant une **atteinte monotronculaire sans antécédent d'infarctus ni de revascularisation** évoluaient comme les patients non ischémiques et étaient mieux classées dans le groupe non ischémique. Une atteinte coronaire plus étendue prédisait de façon indépendante une survie plus courte.
- **Précision sur l'artère atteinte (Briceno 2016) :** une revue ultérieure précise que l'exception monotronculaire **exclut le tronc commun et l'artère interventriculaire antérieure (IVA) proximale** : une atteinte du tronc commun ou de l'IVA proximale continue de compter pour une étiologie ischémique (la règle exacte ne figurait pas dans le résumé de Felker consulté).
- **Aucune définition formelle de « disproportionnée ».** Estimer si la faiblesse du muscle est hors de proportion avec les lésions coronaires relève du jugement clinique de votre équipe de cardiologie (Briceno 2016).
- **Mécanismes intriqués dans un même cœur :** myocarde sidéré, myocarde hibernant et cicatrice peuvent coexister (Briceno 2016 ; voir *Occlusion coronaire chronique (CTO) et collatérales*).
- **Recommandations ESC 2023 sur les cardiomyopathies :** la cardiomyopathie dilatée est définie comme une dilatation et une dysfonction du VG **qui ne s'expliquent pas uniquement** par des conditions de charge anormales (hypertension, valvulopathie) ou une maladie coronaire. Le mot « uniquement » laisse explicitement place à la coexistence de plusieurs causes.`,
    },
    {
      headingFr: "Ce que montre l'IRM cardiaque (rehaussement tardif, LGE)",
      bodyMarkdownFr: `Après injection de gadolinium, le tissu fibreux ou cicatriciel retient le produit de contraste et apparaît brillant : c'est le **rehaussement tardif (LGE)**. Sa **topographie** dans l'épaisseur de la paroi oriente vers la cause (McCrohon 2003 ; ESC 2023 ; Jones 2024) :

| Aspect du LGE | Position dans la paroi | Cause généralement évoquée |
|---|---|---|
| **Sous-endocardique ou transmural**, dans un territoire coronaire | Débute à la couche interne et peut traverser toute l'épaisseur | Cicatrice d'infarctus (ischémique) |
| **Strie médio-murale**, souvent dans le septum | Milieu de l'épaisseur de la paroi | Non ischémique : cardiomyopathie dilatée, parfois hypertensive ou génétique |
| **Sous-épicardique**, en plages ou en anneau | Couche externe de la paroi | Non ischémique : myocardite ancienne ; un aspect en anneau est associé à certains gènes (*DSP*, *FLNC*, *PLN*) |
| **Absence de LGE** | — | Fréquent dans la cardiomyopathie dilatée ; n'exclut pas à lui seul une cause coronaire |

**L'étude de référence (McCrohon 2003) :** chez 90 patients ayant un VG affaibli, **les 27 patients** atteints de maladie coronaire significative avaient tous un LGE sous-endocardique ou transmural. Parmi les 63 patients ayant une cardiomyopathie dilatée à coronaires saines, 59 % n'avaient aucun LGE, 28 % avaient une strie médio-murale et **13 % présentaient une cicatrice de type infarctus** : se fier à la seule coronarographie aurait donc pu mal classer 13 % des patients.

**Position des recommandations :** les recommandations ESC 2026 préconisent une IRM cardiaque avec contraste lorsque la cause de l'IC reste incertaine et qu'une caractérisation tissulaire apporte une valeur ajoutée (**Classe I, C**), et indiquent qu'une IRM avec LGE doit être envisagée dans les cardiomyopathies dilatées pour différencier atteinte ischémique et non ischémique (voir *Examens et chiffres*).`,
    },
    {
      headingFr: 'Quand deux causes coexistent (« double pathologie »)',
      bodyMarkdownFr: `- **Cohorte de Londres (Jones 2024, 453 patients ayant une maladie coronaire significative) :** **14 %** avaient un LGE **non ischémique**, le plus souvent une strie linéaire médio-murale du septum. Ils avaient une FEVG plus basse (38 % contre 48 %) et des ventricules plus dilatés, mais sur 6,4 ans de suivi cette cicatrice supplémentaire ne prédisait **pas** indépendamment la mortalité ni les événements majeurs.
- **Variants génétiques et maladie coronaire (UK Biobank, Jones 2024) :** les personnes atteintes de maladie coronaire porteuses d'un variant génétique de cardiomyopathie dilatée (le plus souvent une troncature du gène de la titine, *TTN*) présentaient des risques plus élevés d'insuffisance cardiaque (HR 1,94), de fibrillation atriale (HR 2,18) et de décès ou événements majeurs (HR 1,67). Les auteurs suggèrent qu'un test génétique **peut être envisagé** lorsque la dysfonction VG est disproportionnée par rapport à l'atteinte coronaire.
- *Limite :* la FEVG moyenne de la cohorte londonienne était de 47 %, il ne s'agit donc pas d'une population purement ICFER.
- **Un résultat discordant (Sokolska 2025, 131 patients avec FEVG ≤ 50 % de cause incertaine) :** parmi les patients atteints de maladie coronaire, seuls 20 % avaient un profil purement ischémique, 33 % un profil non ischémique, 12 % un profil mixte et 35 % aucun LGE, avec une répartition similaire chez les patients sans maladie coronaire. Il s'agit toutefois d'une étude monocentrique comportant quelques incohérences numériques internes.`,
    },
    {
      headingFr: 'Une seule artère occluse, mais un ventricule globalement affaibli',
      bodyMarkdownFr: `Il arrive que le seul résultat coronaire soit **une artère occluse de longue date et reprise par des collatérales** (occlusion coronaire chronique, CTO), alors que **toutes les parois** du ventricule gauche se contractent faiblement. **Aucune étude portant spécifiquement sur cette situation n'a été identifiée.** Les éléments disponibles sont indirects :

- **Classification de recherche :** selon Felker (2002), une atteinte monotronculaire sans antécédent d'infarctus ni de revascularisation est assimilée au groupe non ischémique, mais l'exception ne vaut pas pour le tronc commun ni pour l'IVA proximale (Briceno 2016).
- **Territoire d'effet d'une CTO :**
  - Dans les études randomisées avec IRM (sous-étude IRM d'EXPLORE ; REVASC), rouvrir une CTO n'a pas augmenté la FEVG globale en moyenne : l'amélioration restait limitée aux segments faibles mais viables **dans le territoire de l'artère occluse**.
  - Dans une cohorte majoritairement monotronculaire (Everaars 2021), les parois situées hors du territoire de la CTO n'ont pas changé après réouverture.
- **Cicatrice hors territoire :** à l'IRM, une cicatrice d'infarctus siège dans le territoire de l'artère occluse et part de la couche interne ; un LGE médio-mural ou sous-épicardique à distance suggère un second processus non ischémique, retrouvé chez environ 1 patient coronarien sur 7 dans la cohorte de référence de Jones (2024).
- **Zone d'ombre :** la cohorte mesurant les parois à distance (Everaars 2021) **excluait les patients atteints d'une cardiomyopathie non ischémique associée**. On ignore donc si des parois distantes déjà affaiblies récupèrent après réouverture d'une CTO unique.
- **Exception non contrôlée (Cardona 2016) :** chez 32 patients avec FEVG ≤ 40 % et viabilité dans le territoire de la CTO, la FEVG globale est passée d'environ 31 % à 38 % après réouverture. Mais la plupart avaient une atteinte pluritronculaire, environ un tiers ont reçu d'autres stents et il n'y avait pas de groupe témoin : cela ne répond pas à la question de l'artère unique (voir *Occlusion coronaire chronique (CTO) et collatérales*).

Évaluer si la faiblesse est « disproportionnée » reste donc une synthèse médicale réalisée par votre équipe, croisant coronarographie, aspect IRM, antécédents et, si besoin, bilan génétique (Briceno 2016 ; ESC 2023).`,
    },
    {
      headingFr: 'Les autres causes recherchées',
      bodyMarkdownFr: `| Cause possible | Indices évocateurs | Source |
|---|---|---|
| **Hypertension artérielle** | Hypertension ancienne. Une revue de 2023 précise qu'un cœur hypertensif épaissi « s'épuise » rarement vers une forme dilatée sans autre agression (comme un infarctus), même si un remodelage excentrique existe. Un LGE est présent dans jusqu'à la moitié des cas, sans profil spécifique | Ismail 2023 |
| **Alcool** | Consommation importante ; jusqu'à 32 % des cardiomyopathies dilatées dans une revue ; amélioration possible à l'arrêt | Orphanou 2022 |
| **Myocardite ancienne** | LGE sous-épicardique ou médio-mural ; jusqu'à 30 % des myocardites évoluent vers une cardiomyopathie dilatée | Orphanou 2022 ; ESC 2023 |
| **Cardiomyopathie héréditaire (génétique)** | Antécédents familiaux, LGE médio-mural ou en anneau ; une cause génétique est retrouvée dans environ 30 % des cardiomyopathies dilatées (troncatures de la titine le plus souvent) | ESC 2023 ; Orphanou 2022 |
| **Valvulopathie** | Surcharge liée à une valve rétrécie ou fuyante (classée par l'ESC dans les « conditions de charge anormales ») | ESC 2023 |

Pour le rétrécissement aortique associé à un cœur affaibli, voir *Rétrécissement aortique avec FEVG réduite* ; pour la pression artérielle, *Tension artérielle et insuffisance cardiaque*. Les cardiomyopathies rythmiques (liées à une tachycardie) et la sarcoïdose n'étaient pas détaillées dans les sources de cette fiche ; le rôle de la fibrillation atriale est abordé dans *Maladies associées*.`,
    },
    {
      headingFr: 'Pourquoi confirmer la cause change la prise en charge (et limites des preuves)',
      bodyMarkdownFr: `- **Défibrillateur préventif (DAI).** Les recommandations accordent un niveau de preuve plus fort au DAI dans les formes ischémiques que non ischémiques, notamment depuis l'essai DANISH (voir *Dispositifs cardiaques implantés : DAI et CRT*). Dans les formes non ischémiques, les données IRM et le génotype peuvent guider la décision de DAI, parfois même au-dessus de 35 % de FEVG (ESC 2023 ; points clés ACC).
- **Risque propre de la fibrose médio-murale.** Dans une cohorte de cardiomyopathie dilatée non ischémique (Gulati 2013, 472 patients suivis 5,3 ans), la fibrose médio-murale était associée à une mortalité plus élevée (HR ajusté 2,43) et à davantage de morts subites (HR ajusté 4,61). Une étude antérieure plus petite (Assomull 2006) avait relevé des signaux similaires sur les arythmies et hospitalisations.
- **Test génétique et dépistage familial.** Les recommandations ESC 2023 soutiennent le test génétique accompagné d'un conseil génétique, puis le dépistage en cascade des apparentés lorsqu'une mutation est trouvée ; certains gènes (comme *LMNA*) abaissent le seuil d'indication d'un DAI. Une revue (Orphanou 2022) évoque un suivi des apparentés par ECG et ETT chaque année à l'adolescence puis tous les 2 à 3 ans à l'âge adulte.
- **Revascularisation.** L'intérêt d'ouvrir une artère dépend en partie de la part réelle de l'ischémie dans l'affaiblissement du muscle (voir *Revascularisation coronaire : pontage et stents*).
- **Chances de récupération.** Environ 40 % des cardiomyopathies dilatées traitées montrent un remodelage inverse, soit davantage que dans les formes cicatricielles post-infarctus (Orphanou 2022 ; voir *Insuffisance cardiaque à FEVG améliorée (HFimpEF)*).

### Limites des connaissances actuelles

- Aucune étude n'a ciblé précisément le profil d'une artère unique occluse bien collatéralisée avec dysfonction ventriculaire globale ; les données disponibles sur les parois à distance excluaient les cardiomyopathies associées (EXPLORE ; Everaars 2021).
- Il n'existe pas de chiffre en population générale sur la fréquence d'une seconde cause chez les personnes étiquetées « ischémiques » : les chiffres de 14 % (Jones 2024) et 33 % (Sokolska 2025) proviennent de cohortes sélectionnées.
- Plusieurs études IRM fondatrices n'ont été consultées que sous forme de résumés (McCrohon 2003 ; Gulati 2013 ; Felker 2002).`,
    },
  ],
  relatedArticleSlugs: [
    'cardiomyopathie-ischemique',
    'examens-et-chiffres',
    'occlusion-coronaire-chronique-cto',
    'dispositifs-cardiaques-dai-crt',
    'tension-arterielle-insuffisance-cardiaque',
    'stenose-aortique-fevg-reduite',
    'dysfonction-vg-asymptomatique-stade-b',
    'questions-equipe-cardiologie',
    'essais-cliniques-cles',
    'comprendre-le-diagnostic',
    'maladies-associees',
    'revascularisation-pontage-stents',
    'insuffisance-cardiaque-fevg-amelioree',
  ],
  sources: [
    { label: 'Felker et al. (2002)', detail: 'Définition de référence de la cardiomyopathie ischémique (résumé)' },
    { label: 'Briceno et Perera (2016)', detail: 'Exception monotronculaire hors tronc commun/IVA proximale, dysfonction disproportionnée et mécanismes mixtes' },
    { label: 'McCrohon et al. (2003)', detail: "Profils de LGE à l'IRM dans la CMD versus maladie coronaire (résumé)" },
    { label: 'Jones et al. (EJHF 2024)', detail: 'Double pathologie et variants génétiques de CMD dans la maladie coronaire' },
    { label: 'Gulati et al. (JAMA 2013) et Assomull et al. (2006)', detail: 'Valeur pronostique de la fibrose médio-murale dans la CMD non ischémique (résumés)' },
    { label: 'Sokolska et al. (2025)', detail: 'Profils LGE avec et sans maladie coronaire dans une cohorte monocentrique' },
    { label: 'Recommandations ESC 2023 sur les cardiomyopathies et points clés ACC', detail: 'Définition de la CMD, profils LGE, génétique et dépistage familial' },
    { label: 'Ismail et al. (2023) et Orphanou et al. (2022)', detail: 'Imagerie de la cardiopathie hypertensive et revue sur les causes et le dépistage de la CMD' },
    { label: 'Recommandations ESC 2026 (imagerie)', detail: "Place de l'IRM avec contraste (Classe I, C) lorsque l'étiologie est incertaine" },
    { label: 'EXPLORE (Elias 2017), REVASC (Mashayekhi 2018), Everaars (2021) et Cardona (2016)', detail: "Effet de la réouverture d'une CTO sur le territoire cible et les parois à distance" },
  ],
  disclaimerType: 'medical',
};
