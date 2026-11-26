import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'regles-conduite-automobile',
  sourceWikiPath: 'wiki/references/driving-rules.md',
  titleFr: 'Permis de conduire, insuffisance cardiaque et défibrillateur (France et UE)',
  category: 'france',
  readingTier: 'essential',
  asOf: '2026-11-24',
  confidence: 'medium',
  volatility: 'hot',
  tags: [
    'conduite',
    'permis-de-conduire',
    'dai',
    'lifevest',
    'réglementation',
    'france',
    'union-européenne',
    'médecin-agréé',
    'comparaison-internationale',
  ],
  aliases: [
    'Permis de conduire',
    'Conduite et défibrillateur',
    'Conduite et insuffisance cardiaque',
    'Arrêté du 28 mars 2022',
    'Médecin agréé',
    'Groupe 1 et Groupe 2',
    'DVLA',
  ],
  linkedModules: ['core', 'device', 'lifeVest'],
  plainSummaryFr:
    "Une insuffisance cardiaque n'empêche pas automatiquement de conduire une voiture. Un infarctus récent, un défibrillateur (DAI), un gilet LifeVest ou des symptômes sévères imposent toutefois des délais d'arrêt. En France, seul un médecin agréé par la préfecture statue sur votre aptitude (arrêté du 28 mars 2022). La conduite professionnelle (groupe 2) suit des règles plus strictes : faites le point avec votre cardiologue.",
  keyTakeawaysFr: [
    'En voiture (groupe 1), une insuffisance cardiaque stable (NYHA I–II) est généralement compatible avec la conduite après avis médical.',
    "Après un infarctus, des stents ou un pontage, comptez au moins 4 semaines d'arrêt de conduite en France avant de reprendre le volant.",
    "Avec un défibrillateur (DAI) en groupe 1 : arrêt dès l'indication, puis 4 semaines en prévention primaire ou au moins 12 semaines en prévention secondaire.",
    "Le port d'un gilet défibrillateur (LifeVest) interdit la conduite en France tant qu'il est indiqué ; en groupe 2, DAI et LifeVest sont définitivement incompatibles.",
    "Seul un médecin agréé par la préfecture (distinct de votre médecin traitant) délivre l'avis d'aptitude ; c'est à vous de demander cette visite en groupe 1.",
  ],
  sections: [
    {
      headingFr: 'Groupe 1 ou Groupe 2 : quelle catégorie vous concerne ?',
      bodyMarkdownFr: `En France et en Europe, l'aptitude médicale à la conduite distingue deux catégories :

- **Groupe 1 (léger) :** voitures particulières et motos (permis A, B, etc.).
- **Groupe 2 (lourd et professionnel) :** poids lourds et autobus (permis C, D). En **France**, les conducteurs de **taxi, VTC, ambulance, transport scolaire et enseignants de la conduite** relèvent aussi des exigences médicales du groupe 2.`,
    },
    {
      headingFr: 'Les règles en France selon votre situation (arrêté du 28 mars 2022)',
      bodyMarkdownFr: `L'aptitude médicale en France est fixée par l'**arrêté du 28 mars 2022** :

| Situation | Groupe 1 (voiture, moto) | Groupe 2 (lourd / professionnel) |
|---|---|---|
| **Insuffisance cardiaque NYHA I–II** | Compatible si stabilisée, après évaluation | Compatible uniquement si **FEVG ≥ 35 %** et avis spécialisé |
| **Insuffisance cardiaque NYHA III** | Incompatible tant que non évaluée et traitée avec succès | Incompatible |
| **Insuffisance cardiaque NYHA IV** | **Incompatibilité définitive** si persistante | Incompatible |
| **Infarctus, stents programmés ou pontage** | Au moins **4 semaines** d'arrêt (infarctus avec atteinte myocardique significative, angioplastie programmée ou pontage) | Délais plus longs et bilan spécialisé requis |
| **Défibrillateur (DAI)** | Arrêt dès l'indication ; **4 semaines** en prévention primaire ; **au moins 12 semaines** en prévention secondaire ; compatibilité temporaire (**6 mois à 5 ans**) ensuite | **Incompatibilité définitive** dès l'indication du DAI |
| **Gilet défibrillateur (LifeVest)** | Conduite **interdite** tant que le gilet est indiqué, jusqu'à la décision définitive (§ 1.2.6) | **Incompatibilité définitive** dès l'indication du gilet |

- **En cas de choc de DAI (approprié ou inapproprié) :** l'arrêté français ne fixe pas de durée automatique ; votre cardiologue rythmologue évalue le risque de perte de connaissance avant toute reprise.
- **Changement de boîtier de DAI seul :** reprise immédiate possible en Groupe 1 après avis spécialisé. L'arrêté ne comporte pas de ligne distincte pour le CRT.
- **Point d'attention sur le seuil de 35 % en Groupe 2 :** il correspond aussi au seuil habituel de discussion du DAI ; de faibles écarts de mesure de la FEVG peuvent avoir un impact professionnel important.`,
    },
    {
      headingFr: 'Quelles démarches faire auprès du médecin agréé ?',
      bodyMarkdownFr: `- **Qui décide officiellement ?** Votre médecin traitant et votre cardiologue ont un devoir d'information et vous remettent un compte-rendu médical, mais **seul un médecin agréé par la préfecture** (qui ne peut pas être votre propre médecin traitant) statue sur votre aptitude.
- **En Groupe 1 :** si vous êtes concerné par une affection listée (comme un DAI, une insuffisance cardiaque sévère ou un gilet LifeVest), c'est à vous de solliciter cette visite médicale auprès d'un médecin agréé (liste disponible sur le site de votre préfecture ou via **service-public.gouv.fr**).
- **En Groupe 2 :** le contrôle médical devant un médecin agréé est obligatoire avant la délivrance du permis, puis de façon périodique.
- **Préparer la visite :** apportez votre dernier compte-rendu de cardiologie (FEVG, classe NYHA, indication du DAI ou évolution récente) ainsi que votre ordonnance en cours.
- **Besoin d'aide sur vos droits ?** L'association **APODEC** (porteurs de défibrillateur) et la ligne gratuite **Santé Info Droits (01 53 62 40 30)** peuvent vous orienter (voir l'article *Réseau de soins en France, aides sociales, mutuelle et associations*).`,
    },
    {
      headingFr: 'Pour aller plus loin : cadre européen (Directives 2016/1106 et 2025/2205) et comparaisons internationales',
      depth: 'evidence',
      bodyMarkdownFr: `### Normes minimales de l'Union européenne (Directive 2016/1106 et future Directive 2025/2205)

La **Directive 2016/1106** fixe un socle minimal européen sans délais chiffrés (les durées relèvent du droit national), avec possibilité de dérogation dans des cas exceptionnels sur avis médical justifié et contrôle régulier :
- **NYHA I–III :** Groupe 1 compatible si traitement efficace ; Groupe 2 limité à NYHA I–II avec **FEVG ≥ 35 %**. **NYHA IV :** incompatible dans les deux groupes.
- **DAI (implantation, remplacement ou choc) :** Groupe 1 après évaluation médicale ; Groupe 2 **incompatible** hors cas exceptionnels.
- **Évolution programmée :** la **Directive UE 2025/2205** (adoptée en octobre 2025) conserve sur le fond les mêmes règles cardiovasculaires ; transposition attendue d'ici **novembre 2028** pour une entrée en application en **novembre 2029**.
- *Vérification de version en France :* le mémento abrégé de la Sécurité routière (avril 2022) omet le gilet LifeVest (qui figure à l'annexe § 1.2.6 de l'arrêté du 28 mars 2022) ; les tableaux d'annexe consultés début 2026 ne portaient pas d'amendement depuis 2022.

### Comparaison France, Royaume-Uni (DVLA 2025) et Canada (CCS 2023) — DAI (Groupe 1)

| Événement | France (arrêté 2022) | Royaume-Uni (DVLA 2025) | Canada (CCS 2023) |
|---|---|---|---|
| DAI en prévention primaire | **4 semaines** | **1 mois** (déclaration DVLA obligatoire) | **1 semaine** |
| DAI en prévention secondaire | **Au moins 12 semaines** | **6 mois** | 3 mois après trouble de conscience ; 1 semaine sinon |
| Choc approprié | Appréciation du risque syncopal par le spécialiste | **6 mois** après le dernier choc (déclaration DVLA) | 3 mois si invalidant ou pendant le sommeil ; 1 semaine sinon |
| Choc inapproprié | Avis spécialisé | 1 mois après contrôle de la cause | Aucune restriction |
| Changement de boîtier | Reprise immédiate possible après avis spécialisé | 1 semaine | Aucune restriction au-delà de la récupération |
| Révision de sonde | Non précisé | 1 mois | 1 semaine |
| Conduite professionnelle (Groupe 2) | **Incompatibilité définitive** dès l'indication | **Interdiction définitive** (même si DAI refusé) | Inaptitude |

Au Royaume-Uni, un **CRT-P** impose 1 semaine d'arrêt, un **CRT-D** suit les règles du DAI, et un choc en prévention primaire bascule dans les règles de prévention secondaire. Ne pas déclarer une affection au DVLA expose à une amende pouvant atteindre 1 000 £ (les anciennes pages GOV.UK 2015 paraissent plus restrictives que le standard DVLA de novembre 2025).

### Comparaison — Insuffisance cardiaque, infarctus et gestes coronaires

| Situation | France (arrêté 2022) | Royaume-Uni (DVLA 2025) | Canada (CCS 2023) |
|---|---|---|---|
| Voiture — NYHA I–III | NYHA III : interdit tant que non évalué et traité avec succès | Autorisé si stable et sans gêne (sans déclaration DVLA) | Aucune restriction |
| Voiture — NYHA IV | Incompatibilité définitive si persistante | Interdit (déclaration DVLA) | Inaptitude |
| Professionnel (Groupe 2) | NYHA I–II avec **FEVG ≥ 35 %** ; NYHA III–IV interdit | NYHA I–II avec **FEVG ≥ 40 %** (déclaration DVLA) | Inaptitude si FEVG < 30 % ou NYHA III–IV |
| Voiture — Infarctus | Au moins **4 semaines** si atteinte significative | 1 semaine si stent réussi, aucun geste urgent prévu et FEVG ≥ 40 % ; sinon 4 semaines | Stents : 1 mois si FEVG ≤ 40 %, 2 semaines si > 40 % ; sans stents : 1 mois |
| Voiture — Angioplastie programmée | **4 semaines** | 1 semaine | 48 heures |
| Voiture — Pontage | **4 semaines** | 4 semaines | 1 mois |

En conduite professionnelle après infarctus ou revascularisation, les délais atteignent jusqu'à 3 mois et requièrent souvent des examens complémentaires (FEVG ≥ 40 % et test d'effort au Royaume-Uni).`,
    },
    {
      headingFr: 'Pour aller plus loin : gilet LifeVest hors de France, repères historiques et risque au volant',
      depth: 'evidence',
      bodyMarkdownFr: `- **Gilet défibrillateur (LifeVest) hors de France :** aucune règle dédiée n'a été retrouvée dans le standard DVLA britannique (novembre 2025), le consensus EHRA 2009 ou les documents allemands (DGK 2015 et 2023). On y applique en pratique les délais de la pathologie sous-jacente (ex. 4 semaines après infarctus avec FEVG ≤ 35 % en Allemagne), et ~3 mois après un choc par analogie au DAI. Le fabricant **ZOLL** n'interdit pas formellement la conduite mais recommande l'avis médical, signale que bruit et vibrations peuvent masquer les alarmes et rappelle que le gilet n'alerte pas les secours après un choc.
- **Consensus EHRA 2009 (Groupe 1) :** 4 semaines en prévention primaire, 3 mois en prévention secondaire ou après choc approprié, arrêt jusqu'à correction après choc inapproprié, 1 semaine après changement de boîtier, 4 semaines après révision de sonde (formule de risque de dommage acceptant ~**1 sur 20 000/an** pour les autres usagers).
- **Comparaison internationale 2019 (Margulescu) & États-Unis (ACC 2011) :** en prévention primaire (Groupe 1), 4 semaines (EHRA, Canada), 1 mois (Royaume-Uni), 2 semaines (Australie), 1–2 semaines (Allemagne), 1 semaine (AHA/HRS, Japon). Aux États-Unis (ACC 2011, non réactualisé) : ~1 semaine en primaire, 6 mois en secondaire, interdiction définitive en transport commercial inter-États ; règles privées fixées par État.
- **Recommandations ESC 2022 (arythmies ventriculaires) :** ne fixent aucun délai chiffré, mais recommandent d'informer systématiquement chaque porteur de DAI des restrictions de conduite et de la conduite à tenir après un choc.
- **Ordre de grandeur du risque de choc au volant :** dans les essais de prévention primaire, un choc survient chez ~**7,5 % des patients par an** (EHRA 2009 ; ACC 2011), et la probabilité de recevoir un choc en conduisant est estimée à ~**0,15 % des patients par an** (ACC 2011). Plusieurs auteurs (Margulescu 2019) soulignent l'ancienneté des données réglementaires et plaident pour une évaluation plus individualisée.
- *Limites des sources :* aucune recommandation EHRA ou américaine plus récente n'a été retrouvée en accès libre, les trois errata de la CCS 2023 n'ont pas été lus, et les règles spécifiques de l'assistance circulatoire (LVAD) relèvent d'une évaluation dédiée.`,
    },
  ],
  relatedArticleSlugs: [
    'dispositifs-cardiaques-dai-crt',
    'gilet-defibrillateur-portable',
    'arythmies-ventriculaires-et-antiarythmiques',
    'assistance-circulatoire-lvad',
    'fibrillation-atriale-insuffisance-cardiaque',
    'vivre-avec-insuffisance-cardiaque',
    'vivre-avec-insuffisance-cardiaque-en-france',
    'reseau-de-soins-et-aides-sociales-france',
    'recommandations-comparees-esc-us-nice',
    'questions-equipe-cardiologie',
  ],
  sources: [
    {
      label: 'Arrêté français du 28 mars 2022 (annexes) et Mémento Sécurité routière (avril 2022)',
      detail:
        'Règles françaises pour l’insuffisance cardiaque (NYHA III/IV, FEVG ≥ 35 % Groupe 2), infarctus/stents/pontage (4 semaines), DAI (4 semaines primaire, ≥ 12 semaines secondaire, compatibilité temporaire 6 mois à 5 ans) et gilet LifeVest (§ 1.2.6).',
    },
    {
      label: 'Directive UE 2016/1106 (Annexe III) et Directive UE 2025/2205',
      detail:
        'Normes minimales européennes Groupes 1 et 2, seuil FEVG ≥ 35 % en Groupe 2, calendrier de transposition (novembre 2028) et d’application (novembre 2029).',
    },
    {
      label: 'DVLA UK (novembre 2025), GOV.UK (2015) & NICE NG106',
      detail: 'Standard britannique actualisé pour l’insuffisance cardiaque, les gestes coronaires, les DAI et les CRT.',
    },
    {
      label: 'Canadian Cardiovascular Society (CCS 2023) — Fitness to Drive',
      detail: 'Délais canadiens après DAI, chocs, infarctus, angioplastie et insuffisance cardiaque.',
    },
    {
      label: 'Consensus EHRA (2009), ESC 2022 (arythmies ventriculaires, texte intégral et supplément) et revue Margulescu (2019)',
      detail: 'Formule du risque de dommage (1 sur 20 000/an), comparaison internationale des délais et obligation d’information des porteurs de DAI.',
    },
    {
      label: 'DGK (2015, 2023), ACC (2011) et FAQ patient ZOLL LifeVest',
      detail: 'Repères allemands et américains historiques, estimation du risque de choc au volant (0,15 %/an) et précautions fabricant pour le gilet portable.',
    },
  ],
  disclaimerType: 'legal_france',
};
