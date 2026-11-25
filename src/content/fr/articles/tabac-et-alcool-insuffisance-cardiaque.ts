import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'tabac-et-alcool-insuffisance-cardiaque',
  sourceWikiPath: 'wiki/concepts/smoking-and-alcohol-in-heart-failure.md',
  titleFr: "Tabac et alcool dans l'insuffisance cardiaque",
  category: 'quotidien',
  asOf: '2026-11-25',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'tabac',
    'sevrage-tabagique',
    'substituts-nicotiniques',
    'varénicline',
    'champix',
    'vapotage',
    'alcool',
    'fibrillation-atriale',
    'santé-publique-france',
    'hcsp',
  ],
  aliases: [
    'Arrêter de fumer',
    'Sevrage tabagique',
    'Tabac Info Service 39 89',
    'Champix France',
    'Zyban interactions',
    'Cigarette électronique cœur',
    'Alcool et insuffisance cardiaque',
    'Repères alcool Santé publique France',
  ],
  linkedModules: ['core'],
  plainSummaryFr:
    "Arrêter complètement le tabac est l'une des actions au plus fort impact dans la cardiomyopathie ischémique à FEVG réduite : dans la cohorte SOLVD (FEVG < 35 %), les fumeurs présentaient 41 % de mortalité toutes causes en plus et 39 % de décès, hospitalisations pour IC ou infarctus en plus que les anciens fumeurs, avec un bénéfice mesurable dès les deux premières années d'arrêt — sans que la prise de poids modérée après le sevrage n'annule cet effet. En France, l'accompagnement est largement pris en charge : les substituts nicotiniques prescrits (idéalement patch + forme orale) sont remboursés à 65 % sans plafond annuel (100 % possible en ALD 5/13), Tabac Info Service (39 89) est gratuit, et la varénicline (Champix) est revenue en pharmacie le 16 juin 2025 (remboursée à 65 % en 2e intention, sans interaction CYP450 avec vos médicaments cardiaques), tandis que le bupropion (Zyban) n'est pas remboursé et comporte des interactions délicates dans l'ICFER. Pour l'alcool, l'ESC 2026 indique que réduire sa consommation est bénéfique dans tous les cas, et l'ESC 2024 recommande 3 verres ou moins par semaine en cas de fibrillation atriale : les repères de Santé publique France (max 2 verres/j, 10/semaine) concernent la population générale et ne constituent pas un objectif sûr dans l'ICFER.",
  sections: [
    {
      headingFr: "Sevrage tabagique : un impact comparable aux traitements de fond",
      bodyMarkdownFr: `La fumée de tabac agresse simultanément un cœur ischémique affaibli par plusieurs mécanismes : le monoxyde de carbone réduit le transport d'oxygène, la nicotine et les produits de combustion contractent les artères coronaires et périphériques, les plaquettes s'agrègent plus facilement et l'inflammation chronique fragilise les plaques coronaires.

- **Preuve directe dans l'ICFER — étude SOLVD (Suskin et al. 2001, n = 6 704 patients avec FEVG < 35 %, suivi moyen 41 mois) :** après ajustement sur l'âge, la FEVG et l'étiologie, les fumeurs actifs avaient une mortalité toutes causes supérieure de **41 %** (**RR 1,41**, IC 95 % : **1,25–1,58**) et un risque de décès, hospitalisation pour IC ou infarctus supérieur de **39 %** (**RR 1,39**, **1,26–1,52**) par rapport aux ex-fumeurs et non-fumeurs. Point remarquable : les personnes ayant **arrêté dans les 2 années précédentes** rejoignaient déjà le niveau de risque des non-fumeurs, aussi bien en stade B asymptomatique qu'en stade C symptomatique.
- **Méta-analyse coronaire (Critchley & Capewell 2003, 20 cohortes) :** l'arrêt du tabac après un diagnostic coronaire réduisait la mortalité toutes causes de **36 %** (**RR 0,64**, **0,58–0,71** ; **−29 %** sur les 6 études de plus haute qualité, **RR 0,71**).
- **Crainte de prendre du poids :** les recommandations européennes de prévention (ESC 2021) rappellent que l'arrêt du tabac réduit les événements cardiovasculaires **indépendamment d'une prise de poids post-sevrage**.

### Traitements d'aide au sevrage : efficacité, sécurité cardiaque et interactions

Associer un accompagnement comportemental à un traitement validé multiplie par deux à trois les chances d'arrêt durable par rapport à la volonté seule :

| Traitement | Efficacité dans les essais | Sécurité cardiovasculaire dans l'ICFER | Interactions clés en cardiologie |
|---|---|---|---|
| **Substituts nicotiniques combinés** (patch + gomme, pastille ou spray buccal) | Patch seul vs placebo **OR 2,15** (EAGLES) ; forme combinée proche de la varénicline dans Cochrane 2023 (**RR 1,02**, certitude faible). Association recommandée par la HAS | **Aucun excès d'événements CV majeurs (MACE)** dans EAGLES (< 0,5 %) ; sûrs en maladie coronaire stable et post-SCA (pas de monoxyde de carbone ni de toxines de combustion) | Aucune interaction enzymatique propre. Attention : l'arrêt du tabac lui-même réduit l'activité du **CYP1A2**, pouvant nécessiter d'ajuster **warfarine (INR)**, **insuline**, théophylline ou clozapine |
| **Varénicline (*Champix*)** | Meilleure efficacité en monothérapie : **RR 2,32** vs placebo (Cochrane 2023, certitude élevée), **OR 1,68** vs patch et **OR 1,75** vs bupropion (EAGLES). Après SCA (**EVITA**, n = 302) : **47,3 % contre 32,5 %** d'abstinence à 24 semaines (NNT 6,8) | **EAGLES (n = 8 058) :** aucun excès de MACE (**HR 0,29**, **0,05–1,68**), aucune hausse de PA/FC ni d'événements neuropsychiatriques. **EVITA :** MACE à 30 j **4,0 % vs 4,6 %**. **Cochrane 2023 :** signal modeste d'EIG toutes causes (**RR 1,23**, **1,01–1,48**) et estimation cardiaque imprécise (**RR 1,20**, **0,79–1,84**, certitude faible). Nausées chez ~25 % | **Zéro interaction cliniquement significative via CYP450** (RCP EMA) : ne modifie ni **digoxine**, ni **warfarine**, ni **metformine**. Réduire à **1 mg/jour max** si clairance créatinine **< 30 mL/min** (non recommandé en IR terminale) |
| **Cytisinicline / cytisine (*Liberostin*)** | Agoniste partiel alpha4-bêta2 d'origine végétale. **ORCA-2** (n = 810, 12 semaines) : **32,6 % vs 7,0 %** sem. 9–12 (**OR 6,3**) et **21,1 % vs 4,8 %** sem. 9–24 (**OR 5,3**). Cochrane 2023 : **RR 1,30** vs placebo | Très bien tolérée dans ORCA-2 (< 10 % nausées/insomnie, 0 EIG lié au produit). Cochrane : EIG **RR 1,04** (certitude faible), mais **aucun essai dédié en ICFER ni sur la sécurité cardiaque** | Données d'interactions spécifiques limitées dans l'ICFER ; à discuter avec médecin/pharmacien |
| **Bupropion (*Zyban L.P. 150 mg*)** | **OR 2,07** vs placebo (EAGLES) ; inférieur à la varénicline (Cochrane **RR 1,36** en faveur de la varénicline) | **EAGLES :** pas d'excès de MACE (**HR 0,50**) ; **mais** le RCP ANSM signale **hypertension** parfois sévère (surveillance PA hebdomadaire si associé au patch), risque de **convulsions (~0,1 %**, contre-indiqué en sevrage alcoolique) et mise en garde **Brugada** | **Pièges majeurs en ICFER (RCP ANSM 12/08/2026) :** inhibiteur fort du **CYP2D6** (effet persistant ≥ 7 j après arrêt : augmente **métoprolol**, **flécaïnide**) ; **abaisse la digoxinémie puis expose à une toxicité de la digoxine à l'arrêt** ; interaction **clopidogrel** (CYP2B6) |

### Prise en charge en France et question du vapotage (au 25 novembre 2026)

*Données vérifiées sur sources réglementaires françaises (Ameli 04/12/2025, BDPM 03/11/2026, ANSM RCP 12/08/2026, HCSP 26/11/2021). Les disponibilités et tarifs pouvant évoluer, confirmez avec votre médecin, votre pharmacien ou votre CPAM.*

- **Substituts nicotiniques :** remboursés à **65 %** par l'Assurance Maladie sur ordonnance depuis le 1er janvier 2019, **sans plafond annuel** (l'ancien forfait de 150 €/an a disparu), avec tiers payant possible. La mutuelle couvre habituellement les 35 % restants ; sur la partie haute d'une ordonnance bizone en **ALD 5** ou **ALD 13**, une prise en charge à **100 %** du tarif Sécurité sociale peut s'appliquer (à confirmer avec votre médecin/CPAM). Peuvent prescrire : médecins (y compris le médecin du travail), sages-femmes, infirmiers, chirurgiens-dentistes et masseurs-kinésithérapeutes. *Point d'attention :* certains sprays buccaux et inhaleurs restent à prix libre et **non remboursés** (vérifiez la référence avec votre pharmacien).
- **Varénicline (*Champix*) :** retirée mondialement en 2021 pour impureté nitrosamine, la spécialité **CHAMPIX est officiellement revenue sur le marché français le 16 juin 2025** (pack d'initiation 20,83 € ; 28 comprimés à 1 mg : 23,20 € ; 56 comprimés à 1 mg : 45,08 € sur BDPM). Elle est remboursée à **65 %** en **2e intention** après échec des substituts nicotiniques chez les fumeurs fortement dépendants (**score de Fagerström ≥ 7**), couvrant explicitement les patients atteints de **maladie cardiovasculaire** (avis HAS CT 12/03/2025).
- **Cytisinicline (*Liberostin*) :** des synthèses réglementaires françaises (juin 2026 — *PDF primaire HAS non directement consultable, statut à confirmer*) signalent un avis favorable de la HAS pour une 2e intention (Fagerström ≥ 7, dont pathologies CV) au taux de **30 %** (SMR modéré), sans commercialisation ni arrêté confirmés sur la BDPM au 25 novembre 2026.
- **Bupropion (*Zyban L.P. 150 mg*) :** **non remboursé** (prix libre). Compte tenu de son coût et de ses interactions cardiaques, substituts nicotiniques et varénicline sont habituellement plus simples dans l'ICFER ischémique.
- **Accompagnement public gratuit :** **Tabac Info Service au 39 89** (suivi téléphonique gratuit par des tabacologues), site tabac-info-service.fr et application gratuite. Les centres de **SMR cardiovasculaire** intègrent également l'aide au sevrage.
- **Cigarette électronique / vapotage (divergence explicite) :**
  - **France (HCSP avis du 26/11/2021 ; Ameli 04/12/2025) :** les cigarettes électroniques ne sont **pas des produits de santé** (**0 % de remboursement**) et le **HCSP** conclut que les preuves sont **insuffisantes** pour que les professionnels de santé les recommandent comme outil de sevrage ; les traitements validés et le coaching priment.
  - **ESC 2024 (SCC) :** déconseille la cigarette électronique comme substitut (non dénuée de risques) et met en garde contre le **double usage** (vapotage + tabac fumé), qui maintient un risque cardiovasculaire élevé.
  - **HeartFailureMatters (portail patient HFA-ESC) :** adopte un ton plus souple orienté réduction des risques. Si vous vapotez déjà pour ne pas refumer, discutez avec votre équipe d'un plan pour éviter tout double usage puis quitter progressivement la nicotine.`,
    },
    {
      headingFr: "Alcool dans l'insuffisance cardiaque ischémique",
      bodyMarkdownFr: `### Pourquoi les repères « population générale » ne sont PAS un objectif en ICFER

En France, **Santé publique France** (dossier mis à jour janvier/août 2026) recense **41 000 décès attribuables à l'alcool par an** (3e cause évitable après le tabac et la pollution de l'air) et diffuse des repères de consommation à moindre risque pour les adultes sains :

- **Maximum 2 verres standard par jour** (1 verre standard français = **10 g d'alcool pur**, soit environ 10 cL de vin à 12°, 25 cL de bière à 5° ou 3 cL d'alcool fort à 40°) ;
- **Maximum 10 verres standard par semaine** (**100 g** d'alcool pur) ;
- **Des jours sans consommation** chaque semaine.

**Santé publique France** rappelle explicitement qu'**aucune dose d'alcool n'est sans risque**. Ces plafonds conçus pour la population générale ne constituent **pas** une quantité recommandée ni un objectif protecteur dans l'ICFER ischémique.

### Ce que montrent les essais, mécanismes et interactions médicamenteuses

1. **Toxicité directe sur le muscle cardiaque et « double atteinte » :** une consommation excessive affaiblit directement le myocarde (**cardiomyopathie alcoolique**) et, associée à une cicatrice coronaire, agit comme une double agression qui freine la récupération de la FEVG (voir *Confirmer la cause d'une dysfonction du ventricule gauche*).
2. **Déclencheur majeur de fibrillation atriale — essai Alcohol-AF (Voskoboinik et al. 2020, NEJM, n = 140) :** chez des buveurs réguliers en rythme sinusal ayant des antécédents de FA, réduire la consommation de **16,8 à 2,1 verres/semaine** (contre 16,4 à 13,2 dans le groupe témoin) a ramené les récidives de FA à 6 mois de **73 % à 53 %** (**HR 0,55**, IC 95 % : **0,36–0,84**, **p = 0,005**) et réduit la charge médiane en FA de **1,2 % à 0,5 %** (**p = 0,01**). Les recommandations **ESC 2024 sur la FA** conseillent ainsi **≤ 30 g/semaine** (soit **≤ 3 verres standard français par semaine**, **Classe I, B**) en cas de fibrillation atriale.
3. **Danger des consommations ponctuelles excessives (*binge drinking*, Piano 2017) :** concentrer sa consommation en une soirée augmente tension artérielle, stress oxydatif, arythmies (« syndrome du cœur des fêtes »), infarctus et AVC, même si le total hebdomadaire reste inférieur à 10 verres.
4. **Charge hydrique et calorique :** les boissons alcoolisées ajoutent un volume liquidien (à compter si une limite hydrique vous a été prescrite) et des calories vides favorisant prise de poids, hypertension et hausse des triglycérides.
5. **Interactions médicamenteuses dans l'ICFER :**
   - **iSGLT2 (dapagliflozine — *Forxiga*, empagliflozine — *Jardiance*) :** les notices citent explicitement l'**abus d'alcool** parmi les facteurs déclenchants d'**acidocétose euglycémique** (urgence métabolique possible même avec une glycémie presque normale) ;
   - **Anticoagulants (AVK / warfarine et AOD) :** majoration du risque hémorragique (saignements digestifs, chutes) et déséquilibre de l'INR sous AVK ;
   - **Vasodilatateurs, traitements de l'IC et tadalafil :** vasodilatation additive favorisant vertiges et hypotension orthostatique (signalée dans le RCP du *Cialis* dès ≥ 0,7 g/kg d'alcool) ;
   - **Aides au sevrage tabagique :** le **bupropion (*Zyban*)** est contre-indiqué en période de **sevrage alcoolique** (risque convulsif), et la **varénicline (*Champix*)** comporte des signalements d'intolérance ou d'ivresse majorée avec l'alcool.`,
    },
    {
      headingFr: 'Comparaison des référentiels, repères pratiques et limites',
      bodyMarkdownFr: `| Source | Année | Recommandation / repère | Statut / nuance |
|---|---|---|---|
| **ESC 2026 (IC)** | 2026 | Éviter tabac et alcool excessif en prévention (**Classe I, C**) ; dans l'IC établie, **réduire l'alcool et arrêter le tabac sont bénéfiques dans tous les cas** | Texte intégral vérifié |
| **ESC 2024 (FA)** | 2024 | Réduire l'alcool à **≤ 3 verres standard (≤ 30 g)/semaine** pour diminuer les récidives de FA (**Classe I, B**) ; éviter le *binge drinking* | Vérifié via la fiche FA |
| **ESC 2021 Prévention / ESC 2024 SCC** | 2021 / 2024 | Arrêt total du tabac (**I, A**), indépendamment de la prise de poids (**I, B**), avec aides (**IIa, A**) ; déconseiller le vapotage et le double usage ; alcool ≤ **100 g/semaine** (**I, B**) | Synthèses secondaires (*PDF payants non lus*) |
| **HCSP / Ameli (France)** | 2021 / 2025 | Remboursement 65 % substituts nicotiniques et Champix (2e ligne) ; **ne pas recommander la cigarette électronique** (0 % remboursé) | Textes primaires vérifiés |
| **Santé publique France** | 2026 | Max **2 verres/jour**, **10/semaine**, jours sans alcool ; **aucune dose sans risque** | Population générale — **pas** un objectif ICFER |
| **HeartFailureMatters / BHF** | 2024–2026 | Libellés patients plus anciens et plus souples (1–2 verres/j ; < 14 unités UK/semaine ≈ 112 g) | Plus permissifs que ESC 2024 / 2026 |

### En pratique avec une FEVG autour de 35 %

- **Si vous fumez encore :** arrêter totalement est la mesure d'hygiène de vie au rendement clinique le plus élevé, avec un bénéfice mesurable dès 2 ans. Demandez une **association de substituts nicotiniques** (patch + forme orale) ou, en cas d'échec, la **varénicline (*Champix*)**, en vous appuyant sur **Tabac Info Service (39 89)** ou votre centre de réadaptation cardiaque. Si vous prenez de la **warfarine** ou de l'**insuline**, prévenez votre médecin au moment de l'arrêt pour surveiller l'INR ou la glycémie.
- **Pour l'alcool :** considérez les repères de Santé publique France comme un plafond de population générale et non comme une cible ; **moins est toujours mieux**, évitez tout *binge drinking*, visez **≤ 3 verres/semaine ou zéro** en cas d'antécédent de FA, et évitez toute consommation importante sous **iSGLT2** ou **anticoagulant**. Pour une aide gratuite et confidentielle en France : **Alcool info service** (alcool-info-service.fr).

### Limites des preuves

- **Données tabac observationnelles :** pour des raisons éthiques évidentes, SOLVD et Critchley & Capewell sont des études observationnelles conduites avant la quadrithérapie moderne (ARNI, iSGLT2).
- **Populations indirectes pour les aides au sevrage :** EAGLES (âge moyen 46,5 ans, faible risque CV) et ORCA-2 n'ont pas ciblé l'ICFER ; EVITA (n = 302) était sous-dimensionné pour la sécurité cardiaque seule, et Cochrane 2023 relève un signal limite d'EIG sous varénicline (faible face au risque majeur du tabagisme poursuivi).
- **Aucun essai randomisé sur l'alcool faible vs abstinence dans l'ICFER :** la preuve randomisée la plus robuste (Alcohol-AF, 6 mois, en ouvert) porte sur des buveurs réguliers atteints de FA.`,
    },
  ],
  relatedArticleSlugs: [
    'confirmer-la-cause-dysfonction-vg',
    'fibrillation-atriale-insuffisance-cardiaque',
    'diabete-insuffisance-cardiaque',
    'cholesterol-et-prevention-secondaire',
    'readaptation-cardiaque-et-activite-physique',
    'sel-et-liquides-insuffisance-cardiaque',
    'poids-obesite-et-denutrition',
    'vivre-avec-insuffisance-cardiaque',
    'vivre-avec-insuffisance-cardiaque-en-france',
    'questions-equipe-cardiologie',
    'recommandations-comparees-esc-us-nice',
  ],
  sources: [
    {
      label: 'SOLVD (Suskin et al., JACC 2001) & Critchley & Capewell (JAMA 2003)',
      detail: 'Surmortalité de 41 % et événements +39 % chez les fumeurs avec FEVG < 35 %, bénéfice dès 2 ans d’arrêt et réduction de 36 % de mortalité en maladie coronaire.',
    },
    {
      label: 'Essais EAGLES (2016/2018), EVITA (2016), ORCA-2 (2023) & Revue Cochrane (2023)',
      detail: 'Efficacité et sécurité cardiovasculaire des substituts nicotiniques combinés, de la varénicline, de la cytisinicline et du bupropion.',
    },
    {
      label: 'Ameli (décembre 2025), BDPM / ANSM RCP (Champix, Zyban, 2026), HAS CT (2025) & HCSP (2021)',
      detail: 'Remboursement à 65 % sans plafond des substituts, retour de Champix le 16 juin 2025, interactions majeures de Zyban en ICFER, Tabac Info Service 39 89 et position HCSP sur le vapotage.',
    },
    {
      label: 'Alcohol-AF (Voskoboinik, NEJM 2020), Piano (2017), Santé publique France (2026), ESC 2026 (IC), ESC 2024 (FA) & notices iSGLT2 / EMA',
      detail: 'Réduction des récidives de FA (53 % vs 73 %, HR 0,55), repères généraux SPF (non cibles ICFER), limite ≤ 30 g/semaine en FA et risque d’acidocétose sous iSGLT2.',
    },
  ],
  disclaimerType: 'medical',
};
