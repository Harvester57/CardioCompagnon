import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'vitamines-b-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/concepts/b-vitamins-in-heart-failure.md',
  titleFr: 'Vitamines B et insuffisance cardiaque',
  category: 'nutrition',
  readingTier: 'deep_dive',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'vitamines-b',
    'thiamine',
    'acide-folique',
    'vitamine-b12',
    'vitamine-b6',
    'nad',
    'homocystéine',
    'compléments',
    'micronutriments',
    'carence',
    'insuffisance-cardiaque',
    'ipp',
  ],
  aliases: [
    'Vitamines B',
    'Vitamine B',
    'Complexe B',
    'Thiamine',
    'Vitamine B1',
    'Acide folique',
    'Folates',
    'Vitamine B9',
    'Vitamine B12',
    'Cobalamine',
    'Vitamine B6',
    'Pyridoxine',
    'Niacine',
    'Vitamine B3',
    'NAD+',
    'Nicotinamide riboside',
    'Homocystéine',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Les « vitamines B » regroupent huit vitamines distinctes dont l'intérêt diffère dans la cardiomyopathie ischémique. Aucune vitamine B n'a démontré qu'elle prolonge la vie, réduit les hospitalisations ou renforce durablement la pompe cardiaque dans l'ICFER. La thiamine (B1) peut diminuer sous diurétiques de l'anse (comme le furosémide — Lasilix) : corriger une carence avérée est logique, mais 7 petits essais randomisés (274 patients) n'ont pas montré de gain significatif de FEVG. L'association acide folique + B12 + B6 (souvent vendue comme complexe B « cœur / homocystéine ») n'a réduit ni les infarctus ni les décès dans 15 essais (71 422 personnes, Cochrane 2017) et a même montré une tendance défavorable après un infarctus (NORVIT, RR 1,22). Un dosage de vitamine B12 mérite en revanche d'être discuté si vous prenez de la metformine ou un inhibiteur de la pompe à protons (IPP) depuis deux ans ou plus. Quant à la vitamine B3 et aux précurseurs du NAD+, ils restent expérimentaux. Informez toujours votre équipe et votre pharmacien de tout complément vitaminique : aucun ne remplace vos médicaments prescrits.",
  sections: [
    {
      headingFr: 'Les vitamines B en un coup d’œil',
      bodyMarkdownFr: `| Vitamine | Pourquoi elle est évoquée dans l'IC | Meilleures preuves disponibles | Verdict |
|---|---|---|---|
| **B1 — thiamine** | Perte urinaire sous diurétiques de l'anse ; une carence sévère cause le béribéri cardiaque | Méta-analyse He 2024 (7 essais) ; ESPEN 2022 | **Dépister et corriger en cas de carence ; pas un traitement de l'IC** |
| **B9 — acide folique** | Abaisse l'homocystéine sanguine | Cochrane 2017 (15 essais) ; NORVIT 2006 | **Non étayée** pour le cœur ; éviter les associations avec B6 après un infarctus |
| **B12 — cobalamine** | Abaisse l'homocystéine ; carence possible sous metformine, IPP ou avec l'âge | Cochrane 2017 ; ESPEN 2022 ; Lam 2013 | **Dépister et corriger en cas de carence** |
| **B6 — pyridoxine** | Abaisse l'homocystéine | NORVIT 2006 ; Cochrane 2017 ; ESPEN 2022 | **Non étayée** ; neurotoxique à forte dose |
| **B3 — niacine / précurseurs du NAD+** | Le NAD+ soutient l'énergie des cellules cardiaques et baisse dans l'IC | Essai NAD+ IV Yu 2025 ; étude murine Boitard 2025 | **Expérimental** ; aucune preuve pour les comprimés oraux |
| **B2, B5, B7** | Non étudiées comme traitements de l'IC dans les sources analysées | — | Aucune donnée permettant de conclure |`,
    },
    {
      headingFr: 'Thiamine (vitamine B1) : diurétiques, essais cliniques et dépistage',
      bodyMarkdownFr: `### Pourquoi la thiamine se distingue des autres vitamines B

- **Une cause spécifique rare :** une carence sévère en thiamine provoque une insuffisance cardiaque particulière appelée **béribéri humide** (insuffisance cardiaque à *haut débit* avec résistances vasculaires basses, réversible sous thiamine). La cardiomyopathie ischémique est une maladie différente, à *bas débit*, liée à une cicatrice du muscle cardiaque (**He 2024**).
- **Des taux bas fréquents mais très variables :** les études compilées par la méta-analyse de 2024 retrouvent une carence chez **21 % à 98 %** des patients selon les populations et les méthodes de dosage, tandis que les recommandations **ESPEN 2022** rapportent un chiffre plus bas de **6 %** chez les patients insuffisants cardiaques ambulatoires.
- **Mécanisme :** les diurétiques de l'anse (comme le furosémide — *Lasilix* ou le bumétanide — *Burinex*) augmentent la diurèse et l'élimination urinaire de thiamine, et des travaux cellulaires montrent que le furosémide freine son entrée dans les cellules cardiaques ; une baisse d'appétit et des besoins métaboliques accrus s'y ajoutent (**He 2024** ; **ESPEN 2022**).

### Ce que montrent les essais cliniques

La méta-analyse de **He et al. (2024)** a regroupé 7 petits essais randomisés en double aveugle (**274 patients**, 100 à 500 mg/j de thiamine pendant 1 semaine à 6 mois) :

| Critère | Thiamine contre placebo | Significatif ? |
|---|---|---|
| **FEVG** | +1,65 point (-1,10 à +4,41) | Non |
| **FEVG après correction du biais de publication** | -0,06 point (-2,61 à +2,50) | Non |
| **Volume du ventricule gauche** | -6,8 mL | Non |
| **Test de marche de 6 minutes** | +16,5 m | Non |
| **NT-proBNP** | +258 pg/mL | Non |
| **Classe NYHA** | -0,22 | Non |
| **Statut sanguin en thiamine** | Amélioré | Oui |

- **Des petits essais anciens positifs, contredits par le plus solide :** quatre des sept essais rapportaient un gain de FEVG, mais l'essai le plus grand et le plus long (**Keith 2019**, 69 patients suivis 6 mois avec mesure de la FEVG en IRM cardiaque) n'a montré aucun bénéfice et expliquait l'essentiel de la divergence entre études. Des tests statistiques ont aussi suggéré l'absence de publication d'études négatives (**He 2024**).
- **Réévaluation d'un signal plus ancien :** la cartographie de **Khan (2021)** rapportait une hausse de FEVG de **+3,59 points** sur 4 essais (150 patients), critère intermédiaire qui n'a pas été confirmé par l'actualisation de 2024.
- **Aucun essai n'a encore mesuré les décès ni les hospitalisations**, et la méta-analyse ne précise ni la proportion d'étiologies ischémiques ni la part des traitements modernes de l'ICFER.

### Un grand essai clinique en cours dans l'IC d'origine coronaire

L'essai canadien **COLT-HF** (NCT05873881, financement académique PHRI / CIHR) évalue la thiamine à **300 mg/j** (en ouvert contre absence de thiamine, avec un volet distinct colchicine contre placebo) chez environ **2 500 patients** ayant une insuffisance cardiaque d'origine coronaire et une FEVG ≤ 45 %. Le critère principal est le décès cardiovasculaire ou un événement d'insuffisance cardiaque sur environ 3,5 ans (recrutement en cours au 25 novembre 2026 ; fin primaire estimée en **juin 2027**). Un essai en cours ne constitue toutefois **pas une preuve de bénéfice** : tant que ses résultats ne sont pas publiés, la supplémentation systématique lorsque le taux est normal n'est pas étayée.

### Dépistage, repères de correction et tolérance

- **Recommandation nutritionnelle (ESPEN 2022) :** un dosage sanguin de thiamine *peut être envisagé* en cas de suspicion de carence dans une **cardiomyopathie sous traitement diurétique prolongé** (recommandation faible, Grade 0, consensus de 90 %).
- **Examen de référence :** le dosage du **diphosphate de thiamine** érythrocytaire ou sur sang total (recommandation forte, Grade A), ou à défaut un test enzymatique érythrocytaire (activation de la transcétolase). Si une carence sévère est fortement suspectée, le médecin n'attend pas le résultat pour traiter (**ESPEN 2022**).
- **Repères posologiques cités par ESPEN (à titre informatif, non prescriptif) :** suggestion de **50 mg/j** par voie orale en cas de traitement diurétique chronique, 50 à 100 mg/j en entretien après carence prouvée, et voie intraveineuse à l'hôpital en cas de suspicion de carence lors d'une pathologie aiguë.
- **Tolérance :** aucune limite supérieure de sécurité n'est fixée car l'excès est éliminé dans les urines ; des doses supérieures à **400 mg/j** peuvent toutefois provoquer nausées et légère instabilité, et la voie intraveineuse entraîne rarement des réactions allergiques (**ESPEN 2022**).`,
    },
    {
      headingFr: 'Acide folique (B9), vitamine B12 et vitamine B6 : l’hypothèse homocystéine',
      bodyMarkdownFr: `### Pourquoi cette piste a été abandonnée

L'homocystéine est un acide aminé sanguin dont un taux élevé s'associe, dans les études observationnelles, à davantage d'infarctus et d'AVC. Comme l'acide folique, la vitamine B12 et la vitamine B6 l'abaissent d'environ un quart, cette association a longtemps été testée pour protéger le cœur.

### Résultats des grands essais randomisés

- **Revue Cochrane (2017) :** 15 essais randomisés totalisant **71 422 personnes** (avec ou sans maladie cardiovasculaire, suivi de 1 à 7,3 ans), comparant l'abaissement de l'homocystéine par vitamines B au placebo :
  - **Infarctus du myocarde :** aucune différence (7,1 % contre 6,0 % ; **RR 1,02** ; IC 95 % 0,95–1,10 ; preuves de haute qualité) ;
  - **Mortalité toutes causes :** aucune différence (11,7 % contre 12,3 % ; **RR 1,01** ; IC 95 % 0,96–1,06 ; preuves de haute qualité) ;
  - **Événements indésirables graves :** pas de différence claire (8,3 % contre 8,5 % ; **RR 1,07** ; IC 95 % 1,00–1,14) ;
  - **AVC :** légère baisse (4,3 % contre 5,1 % ; **RR 0,90** ; IC 95 % 0,82–0,99).
  Les auteurs concluent que de nouveaux essais contre placebo ne modifieraient probablement pas ces résultats.
- **Essai NORVIT (2006, Norvège) — après un infarctus du myocarde :** **3 749 patients** randomisés dans la semaine suivant un infarctus (acide folique + B12 + B6 à 40 mg/j, acide folique + B12, B6 seule ou placebo, suivi médian de 40 mois). L'homocystéine a baissé de **27 %**, sans réduction des récidives d'infarctus, d'AVC ou de mort subite coronaire. La **triple association B9 + B12 + B6** a même montré une **tendance défavorable** (**RR 1,22** ; IC 95 % 1,00–1,50 ; p = 0,05), amenant les auteurs à déconseiller ce traitement combiné après un infarctus.
- **Synthèse micronutriments An et al. (2022, *JACC*, 884 essais) :** l'acide folique était associé à moins d'AVC (RR 0,84 ; IC 95 % 0,72–0,97), mais sans baisse des infarctus (RR 1,29 ; IC 95 % 0,93–1,80, non significatif) ni de la mortalité toutes causes (RR 0,89 ; IC 95 % 0,78–1,01). Pour les personnes déjà atteintes de maladie coronaire, Cochrane 2017 et NORVIT constituent les données les plus directes.

### Conséquence pratique en cardiomyopathie ischémique

L'homocystéine doit être considérée comme un **marqueur** accompagnant la maladie vasculaire, et non comme une cible à traiter par des vitamines. Même si ces essais ne ciblaient pas spécifiquement une FEVG réduite, ils portent sur de vastes cohortes coronariennes et convergent vers une absence de bénéfice cardiaque, avec un signal potentiel de risque pour la triple association après un infarctus. Or de nombreux compléments en vente libre étiquetés « cœur », « complexe B » ou « homocystéine » contiennent précisément ce mélange.`,
    },
    {
      headingFr: 'Vitamine B12, acide folique et vitamine B6 : dépistage ciblé et sécurité',
      bodyMarkdownFr: `### Quand discuter d'un dosage de vitamine B12

- **IPP au long cours et vitamine B12 (les chiffres) :** dans une vaste étude cas-témoins américaine (**Lam 2013**, *JAMA*, **25 956 patients** présentant une carence nouvellement diagnostiquée en B12), une prise d'inhibiteurs de la pompe à protons (IPP) pendant **2 ans ou plus** était associée à une carence en vitamine B12 (**OR 1,65**), et davantage encore au-delà de 1,5 comprimé par jour (**OR 1,95**), tandis que le lien était plus faible avec les anti-H2 (**OR 1,25**). Il s'agit d'une donnée observationnelle, et une synthèse de 2023 trouvait une association plus modérée (**OR 1,42**). L'essai randomisé de 3 ans du pantoprazole (**COMPASS**, Moayyedi 2019) n'a pas mesuré la vitamine B12. Pour comprendre pourquoi un IPP est fréquemment prescrit avec les antiagrégants (et ne pas l'arrêter sans avis médical), consultez la fiche *Antiplaquettaires, bithérapie et protection gastrique*.
- **Autres facteurs de risque cités par ESPEN 2022 :** prise prolongée de **metformine** (6 à 12 mois ou plus), prise au long cours d'**IPP** ou d'anti-H2 (sans essai randomisé dédié), âge supérieur à 50–60 ans, alimentation végétalienne, ou antécédent de chirurgie gastrique ou intestinale.
- **Signes d'appel et modalités :** un bilan est conseillé en cas d'anémie, de globules rouges augmentés de volume (macrocytose), de fourmillements ou d'atteinte nerveuse des pieds (polyneuropathie), ou de troubles de la mémoire et de l'humeur. L'idéal repose sur **deux marqueurs** (holotranscobalamine et acide méthylmalonique), ou sur la B12 sérique à défaut, avec un contrôle au moins annuel chez les personnes à risque (**ESPEN 2022**).
- Corriger une véritable carence en vitamine B12 relève des soins médicaux courants, indépendamment de la prévention cardiaque.

### Points de vigilance pour l'acide folique et la vitamine B6

- **Acide folique (B9) :** une limite supérieure de **1 mg/j** est fixée car des doses élevées peuvent normaliser la numération sanguine tout en **masquant une carence en vitamine B12**, retardant le diagnostic au risque d'atteintes neurologiques irréversibles. Un dosage des folates s'envisage en cas d'anémie macrocytaire ou de dénutrition (**ESPEN 2022**).
- **Fonction rénale :** ESPEN 2022 rappelle que l'administration combinée à forte dose d'acide folique, de B6 et de B12 chez des patients atteints de néphropathie diabétique s'est accompagnée d'un déclin plus rapide de la fonction rénale et de davantage d'événements vasculaires — un point important, l'atteinte rénale étant fréquente dans l'IC.
- **Vitamine B6 (pyridoxine) :** des doses élevées provoquent une **neuropathie sensitive** (atteinte des nerfs). ESPEN 2022 rapporte des effets indésirables au-delà de **500 mg/j**, des troubles en prise prolongée à **300 mg/j** et des symptômes médullaires (signe de Lhermitte) dès **100 mg/j** au long cours. La limite supérieure européenne fixée en 2023 pour les adultes est de **12 mg/j** (seuil fréquemment dépassé par les complexes B et certains produits associant magnésium et B6, comme *Magné B6* qui apporte 30 à 40 mg/j de B6 à la posologie maximale de sa notice).`,
    },
    {
      headingFr: 'Vitamine B3, niacine et précurseurs du NAD+',
      bodyMarkdownFr: `Le **NAD+** est une molécule indispensable à la production d'énergie dans les cellules cardiaques, fabriquée à partir des formes de vitamine B3 (niacine, nicotinamide, nicotinamide riboside). Ses taux sont abaissés dans le cœur défaillant et sa supplémentation protège le cœur chez l'animal (**Yu 2025**).

### Ce que montrent les données humaines

- **Perfusion intraveineuse de NAD+ dans la cardiomyopathie ischémique (Yu 2025, Chine) :** 180 patients hospitalisés pour IC d'origine coronaire (FEVG ≤ 45 %, moyenne ~41 %, NYHA II–III, environ la moitié sous iSGLT2) ont reçu une **perfusion IV de NAD+** (10 mg/j) ou un placebo pendant **7 jours** :
  - **FEVG à 1 mois :** 45,4 % contre 42,4 % (hausse de +4,5 contre +2,3 points ; p = 0,023) ;
  - **Dimensions cardiaques :** aucun changement ;
  - **NT-proBNP, classe symptomatique, événements cardiaques à 6 mois (14,6 % contre 24,7 %, p = 0,089) et hospitalisations pour IC (13,5 % contre 23,6 %, p = 0,078) :** **aucune différence statistiquement significative**.
  - **Limites majeures :** étude monocentrique, gain supplémentaire modeste (~2 points de FEVG) sans bénéfice clinique démontré, **trois patients sur quatre** dans chaque groupe ont reçu un stent lors de la même hospitalisation (période de récupération naturelle après revascularisation, non transposable à une maladie chronique stable), modalités d'aveugle non décrites, et financement/fourniture par le fabricant. Cet essai hospitalier par perfusion **ne prouve rien** pour les comprimés de vitamine B3 ou les compléments « boosters de NAD+ » vendus dans le commerce.
- **Nicotinamide riboside oral :** une petite étude américaine de tolérance dans l'ICFER (citée par Yu 2025) a doublé le NAD+ sanguin sans modifier la FEVG. L'étude de **Boitard (2025)** associant nicotinamide riboside, folates et B12 concernait uniquement des souris mâles dans un modèle non ischémique.
- **Niacine (acide nicotinique) pour le cholestérol :** la recommandation américaine **ACC/AHA 2026** sur les dyslipidémies classe la niacine en dernier recours, mal tolérée et sans bénéfice cardiovasculaire prouvé ; elle aggrave la résistance à l'insuline, provoque des bouffées vasomotrices (dès ~30 mg/j selon ESPEN 2022) et une toxicité hépatique possible autour de 3 g/j. Elle n'est pas recommandée en ajout systématique à une statine.`,
    },
    {
      headingFr: 'Recommandations et repères pratiques',
      bodyMarkdownFr: `### Positions des recommandations

- **AHA/ACC/HFSA 2022 (États-Unis) :** les vitamines et compléments nutritionnels ne sont **pas recommandés** dans l'ICFER, sauf pour corriger une carence spécifique (**Classe 3 : Absence de bénéfice**).
- **ESPEN 2022 (nutrition clinique) :** envisager un dosage de thiamine dans les cardiomyopathies sous diurétiques prolongés (faible), dépister la vitamine B12 chez les patients à risque et traiter les carences documentées.
- **ESC 2026 (Europe) :** aucune recommandation sur la thiamine, les multivitamines ou les compléments vitaminiques B dans le texte principal.
- **Déclaration AHA 2022 (médecines complémentaires) :** la thiamine n'aide qu'en cas de carence avérée.
- **Définition universelle de l'insuffisance cardiaque (2026) :** cite la carence en thiamine (B1) parmi les causes métaboliques et nutritionnelles d'insuffisance cardiaque, distinctes de la cardiomyopathie ischémique.

### À retenir pour votre suivi

- Les vitamines B ne sont **pas des traitements de l'insuffisance cardiaque**.
- Corriger une carence avérée est pertinent, et deux situations méritent d'être abordées avec votre médecin traitant ou votre cardiologue : la **thiamine (B1)** en cas de diurétiques de l'anse au long cours, et la **vitamine B12** en cas de traitement prolongé par metformine ou IPP.
- **Évitez de débuter vous-même des complexes associant acide folique + B12 + B6** (en particulier après un infarctus) ainsi que toute **vitamine B6 à forte dose**.
- Les produits à base de **NAD+ et de vitamine B3** restent du domaine de la recherche et ne doivent pas être pris en automédication sans avis de votre équipe.`,
    },
  ],
  relatedArticleSlugs: [
    'antiplaquettaires-bitherapie-et-protection-gastrique',
    'essais-cliniques-en-cours-et-a-suivre',
    'nutrition-et-complements-insuffisance-cardiaque',
    'tableau-preuves-nutrition-complements',
    'vitamine-d-insuffisance-cardiaque',
    'magnesium-insuffisance-cardiaque',
    'coenzyme-q10',
    'complements-energetiques-cardiaques',
    'interactions-complements-aliments-medicaments',
    'carence-martiale-et-fer-iv',
    'goutte-bpco-thyroide-et-autres-comorbidites',
  ],
  sources: [
    {
      label: 'He et al. (2024) — méta-analyse sur la thiamine dans l’insuffisance cardiaque chronique',
      detail: '7 essais randomisés en double aveugle (274 patients) : absence d’effet significatif sur la FEVG (+1,65 point, -0,06 après correction du biais de publication), le NT-proBNP ou la marche ; essai Keith 2019 en IRM.',
    },
    {
      label: 'Recommandations ESPEN 2022, Lam et al. (2013, JAMA) et essai COMPASS pantoprazole (Moayyedi 2019)',
      detail: 'Facteurs de risque de carence (diurétiques et thiamine, metformine/IPP et B12 — OR 1,65 après ≥ 2 ans d’IPP dans Lam 2013, B12 non mesurée dans COMPASS), dosages recommandés et toxicité de la B6 et de la niacine.',
    },
    {
      label: 'Revue Cochrane (2017) et essai NORVIT (2006)',
      detail: '15 essais d’abaissement de l’homocystéine par B9/B12/B6 (71 422 personnes, haute qualité : aucun bénéfice sur infarctus ou mortalité) ; NORVIT après infarctus (3 749 patients : tendance défavorable RR 1,22 pour la triple association).',
    },
    {
      label: 'Yu et al. (2025) — essai NAD+ intraveineux, Boitard (2025) et registre COLT-HF (NCT05873881)',
      detail: 'Essai monocentrique chinois NAD+ IV 7 jours dans la cardiomyopathie ischémique (180 patients, critère intermédiaire seul) ; étude murine ; protocole et statut de l’essai COLT-HF (fin primaire estimée juin 2027).',
    },
    {
      label: 'Recommandations AHA/ACC/HFSA 2022, ESC 2026, Définition universelle IC 2026 et ACC/AHA 2026 (dyslipidémies)',
      detail: 'Compléments non recommandés hors carence (Classe 3), absence de mention dans ESC 2026, statut de la niacine en dernier recours sans bénéfice cardiovasculaire prouvé.',
    },
  ],
  disclaimerType: 'medical',
};
