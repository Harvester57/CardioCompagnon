import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'regles-conduite-automobile',
  sourceWikiPath: 'wiki/references/driving-rules.md',
  titleFr: 'Permis de conduire, insuffisance cardiaque et défibrillateur (France et UE)',
  category: 'france',
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
    "Une insuffisance cardiaque n'empêche pas automatiquement de conduire une voiture. En revanche, l'implantation d'un défibrillateur (DAI), le port d'un gilet défibrillateur (LifeVest), un infarctus récent ou des symptômes sévères entraînent des périodes d'interdiction de conduite et une évaluation médicale. En France (arrêté du 28 mars 2022), seul un médecin agréé — distinct de votre médecin traitant — statue sur l'aptitude ; la conduite professionnelle (groupe 2 : poids lourds, bus, taxis, VTC, ambulances) est strictement encadrée et définitivement incompatible avec un DAI ou un gilet LifeVest. Vérifiez toujours votre situation auprès de votre cardiologue et d'un médecin agréé.",
  sections: [
    {
      headingFr: 'Deux groupes de permis et cadre européen (Directives 2016/1106 et 2025/2205)',
      bodyMarkdownFr: `La réglementation européenne et française distingue deux catégories d'aptitude médicale :

- **Groupe 1 (léger) :** voitures particulières et motos (permis A, B, etc.).
- **Groupe 2 (lourd et professionnel) :** poids lourds et autobus (permis C, D). En **France**, les conducteurs de **taxi, VTC, ambulance, transport scolaire et enseignants de la conduite** relèvent également des exigences médicales du groupe 2.

### Normes minimales de l'Union européenne (Directive 2016/1106)

L'Union européenne fixe un socle minimal que chaque État membre doit appliquer, tout en pouvant prévoir des règles plus strictes ou des délais précis :

| Situation | Groupe 1 (voiture) | Groupe 2 (poids lourd / bus) |
|---|---|---|
| Insuffisance cardiaque NYHA I–III | Compatible si traitement efficace et avis médical favorable | NYHA I–II uniquement, et uniquement si **FEVG au moins égale à 35 %** |
| Insuffisance cardiaque NYHA IV | Incompatible | Incompatible |
| Implantation ou remplacement d'un DAI, ou choc (approprié ou non) | Compatible après évaluation médicale | **Incompatible** (hors cas exceptionnels) |
| Infarctus du myocarde, stents ou pontage | Compatible une fois traité efficacement, avec autorisation médicale | Même principe |

- La directive européenne ne fixe **aucun délai chiffré** : les durées d'interdiction proviennent du droit national.
- *Remarque pratique :* le seuil européen de **35 % de FEVG** pour le groupe 2 correspond au seuil habituel de discussion du DAI ; de faibles écarts de mesure peuvent donc avoir un impact professionnel majeur.
- La directive autorise une dérogation « dans des cas exceptionnels », sur avis médical dûment justifié et sous contrôle régulier.
- **Évolution programmée (Directive UE 2025/2205) :** adoptée en octobre 2025, la nouvelle directive permis de conduire conserve sur le fond les mêmes règles cardiovasculaires (DAI, insuffisance cardiaque, infarctus, stents, pontage). Les États membres doivent la transposer d'ici **novembre 2028** pour une entrée en application en **novembre 2029**, date d'abrogation de la directive 2016/1106.`,
    },
    {
      headingFr: 'Règles en France (arrêté du 28 mars 2022 et médecin agréé)',
      bodyMarkdownFr: `En France, l'aptitude médicale est régie par l'**arrêté du 28 mars 2022** et résumée dans le mémento de la Sécurité routière (avril 2022) :

- **Insuffisance cardiaque (Groupe 1) :**
  - classe **NYHA IV** persistante : **incompatibilité définitive** ;
  - classe **NYHA III** : incompatible tant qu'elle n'est pas évaluée et traitée avec succès ;
  - classes **NYHA I–II** stabilisées : compatibilité possible après évaluation.
- **Insuffisance cardiaque (Groupe 2) :** classes NYHA I–II uniquement, avec **FEVG au moins égale à 35 %** et avis spécialisé ; classes NYHA III–IV incompatibles.
- **Après un infarctus, une angioplastie ou un pontage (Groupe 1) :** au moins **4 semaines** d'arrêt après un infarctus avec atteinte myocardique significative, **4 semaines** après une angioplastie programmée (stents) et **4 semaines** après un pontage aorto-coronarien.
- **Défibrillateur automatique implantable (DAI) :**
  - **Groupe 1 :** interdiction de conduire dès le moment où l'indication du DAI est posée, puis **4 semaines** après une implantation en prévention primaire et **au moins 12 semaines** après une implantation en prévention secondaire. Au-delà, une **compatibilité temporaire** (d'une durée de **6 mois à 5 ans**) est possible si le spécialiste juge le risque syncopal négligeable. En cas de choc (approprié ou inapproprié), l'arrêté ne fixe pas de durée automatique : le spécialiste évalue le risque de perte de connaissance. Après changement de boîtier seul, la reprise est possible immédiatement après avis spécialisé. L'arrêté ne comporte pas de ligne distincte pour le CRT.
  - **Groupe 2 :** **incompatibilité définitive** dès lors qu'un DAI est indiqué.
- **Gilet défibrillateur portable (LifeVest) — règle explicite en France (§ 1.2.6 de l'arrêté du 28 mars 2022) :**
  - **Groupe 1 :** conduite **interdite** tant que le gilet est indiqué, jusqu'à la décision définitive (implantation d'un DAI ou levée de l'indication) ;
  - **Groupe 2 :** **incompatibilité définitive** dès l'indication du gilet.
  - *Point de vigilance :* le mémento abrégé pour médecins (avril 2022) ne mentionne pas le gilet ; seule l'annexe de l'arrêté détaille cette règle.
- **Qui décide et quelle démarche effectuer :** votre médecin traitant ou votre cardiologue a un devoir d'information, mais seul un **médecin agréé par la préfecture** (qui ne peut pas être votre propre médecin traitant) statue sur l'aptitude. En Groupe 1, il appartient au conducteur concerné par une affection listée de solliciter lui-même cette visite médicale. En Groupe 2, le contrôle médical est obligatoire avant délivrance puis périodique.
- *Vérification de version :* les tableaux d'annexe consultés début 2026 ne portaient pas d'amendement depuis 2022 ; les règles évolueront lors de la transposition de la directive UE 2025/2205 d'ici 2028.`,
    },
    {
      headingFr: 'Comparaison des règles nationales actuelles (France, Royaume-Uni, Canada)',
      bodyMarkdownFr: `### Délais après implantation ou événement sur DAI (Groupe 1, textes nationaux consultés directement)

| Événement | France (arrêté 2022) | Royaume-Uni (DVLA 2025) | Canada (CCS 2023) |
|---|---|---|---|
| DAI en prévention primaire | **4 semaines** | **1 mois** (déclaration DVLA obligatoire) | **1 semaine** |
| DAI en prévention secondaire | **Au moins 12 semaines** | **6 mois** | 3 mois après le dernier événement avec trouble de conscience ; 1 semaine sinon |
| Choc approprié | Pas de durée fixe : appréciation du risque syncopal par le spécialiste | **6 mois** après le dernier choc (déclaration DVLA) | 3 mois si invalidant ou pendant le sommeil ; 1 semaine sinon |
| Choc inapproprié | Pas de durée fixe : avis spécialisé | 1 mois après contrôle de la cause | Aucune restriction |
| Changement de boîtier | Reprise immédiate possible après avis spécialisé | 1 semaine | Aucune restriction au-delà de la récupération |
| Révision de sonde | Non précisé | 1 mois | 1 semaine |
| Conduite professionnelle (Groupe 2) | **Incompatibilité définitive** dès l'indication du DAI | **Interdiction définitive** (même si un DAI indiqué est refusé) | Inaptitude |

- Au Royaume-Uni, un stimulateur CRT-P impose 1 semaine d'arrêt, tandis qu'un CRT-D suit les règles du DAI ; un DAI de prévention primaire ayant délivré un choc bascule dans les règles de prévention secondaire.
- Les chiffres canadiens proviennent des recommandations CCS 2023 (dont trois errata ultérieurs n'ont pas été consultés).

### Insuffisance cardiaque, infarctus et gestes coronaires

| Situation | France (arrêté 2022) | Royaume-Uni (DVLA 2025) | Canada (CCS 2023) |
|---|---|---|---|
| Voiture — NYHA I–III | NYHA III : interdit tant que non évalué et traité avec succès | Autorisé si stable et sans gêne à la conduite (sans déclaration DVLA) | Aucune restriction |
| Voiture — NYHA IV | Incompatibilité définitive si persistante | Interdit (déclaration DVLA) | Inaptitude |
| Professionnel (Groupe 2) | NYHA I–II avec **FEVG ≥ 35 %** après avis spécialisé ; NYHA III–IV interdit | NYHA I–II avec **FEVG ≥ 40 %** (déclaration DVLA) | Inaptitude si FEVG < 30 % ou NYHA III–IV |
| Voiture — Infarctus | Au moins **4 semaines** si atteinte myocardique significative | 1 semaine si stent réussi, aucun geste urgent prévu et FEVG ≥ 40 % ; sinon 4 semaines | Avec stents : 1 mois si FEVG ≤ 40 %, 2 semaines si > 40 % ; sans stents : 1 mois |
| Voiture — Angioplastie programmée | **4 semaines** | 1 semaine | 48 heures |
| Voiture — Pontage | **4 semaines** | 4 semaines | 1 mois |

Pour la conduite professionnelle après infarctus ou revascularisation, les délais sont plus longs (jusqu'à 3 mois) et requièrent souvent des examens complémentaires (FEVG ≥ 40 % et test d'effort au Royaume-Uni).`,
    },
    {
      headingFr: 'Gilet défibrillateur (LifeVest), comparaisons anciennes et risque au volant',
      bodyMarkdownFr: `### Gilet défibrillateur hors de France

Contrairement à la France, aucune règle spécifique au gilet défibrillateur n'a été retrouvée dans le standard DVLA britannique (novembre 2025), le consensus EHRA 2009 ou les documents de la société allemande de cardiologie (DGK 2015 et 2023). Dans ces pays, on applique en pratique les délais de la pathologie sous-jacente (par exemple 4 semaines après infarctus avec FEVG ≤ 35 % en Allemagne), et par analogie ceux d'un choc approprié de DAI après un choc du gilet (~3 mois en EHRA/Allemagne, plus long au Royaume-Uni). Le fabricant **ZOLL** n'interdit pas formellement la conduite mais demande de consulter son médecin, signale que le bruit et les vibrations du véhicule peuvent masquer les alarmes et rappelle que le gilet n'alerte pas les secours après un choc.

### Repères européens historiques et autres pays

- **Consensus européen EHRA 2009 (Groupe 1) :** 4 semaines en prévention primaire, 3 mois en prévention secondaire ou après choc approprié, arrêt jusqu'à correction de la cause après choc inapproprié, 1 semaine après changement de boîtier, 4 semaines après révision de sonde. L'EHRA s'est appuyée sur une formule de « risque de dommage » acceptant environ un risque annuel de **1 sur 20 000** pour les autres usagers de la route.
- **Comparaison internationale 2019 (Margulescu) — prévention primaire (Groupe 1) :** 4 semaines (EHRA, Canada), 1 mois (Royaume-Uni), 2 semaines (Australie), 1 à 2 semaines (Allemagne), 1 semaine (anciens avis américains AHA/HRS et Japon). En 2019, un DAI excluait la conduite professionnelle dans toutes les juridictions étudiées, hormis une exception canadienne à très faible risque.
- **États-Unis (article ACC 2011, non réactualisé) :** environ 1 semaine en prévention primaire, 6 mois en prévention secondaire, interdiction définitive en transport commercial inter-États ; règles privées fixées par chaque État.
- **Royaume-Uni (nuance DVLA) :** ne pas déclarer une affection qui compromet la conduite expose à une amende pouvant atteindre 1 000 £ et à des poursuites en cas d'accident. Les anciennes pages publiques GOV.UK (2015) paraissent plus restrictives que le standard professionnel DVLA de novembre 2025.
- **Recommandations ESC 2022 (arythmies ventriculaires) :** ne fixent aucun délai chiffré mais recommandent d'informer systématiquement chaque porteur de DAI des restrictions de conduite et de la conduite à tenir après un choc.

### Ordre de grandeur du risque de choc au volant

- Dans les essais de prévention primaire, un choc survient chez environ **7,5 % des patients par an** (EHRA 2009 ; ACC 2011).
- La probabilité estimée de recevoir un choc pendant la conduite est d'environ **0,15 % des patients par an** (article ACC 2011).
- Plusieurs auteurs (Margulescu 2019) soulignent que nombre de réglementations reposent sur des données anciennes et plaident pour une évaluation davantage individualisée.`,
    },
  ],
  relatedArticleSlugs: [
    'dispositifs-cardiaques-dai-crt',
    'vivre-avec-insuffisance-cardiaque',
    'recommandations-comparees-esc-us-nice',
    'questions-equipe-cardiologie',
    'gilet-defibrillateur-portable',
    'vivre-avec-insuffisance-cardiaque-en-france',
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
      label: 'Consensus EHRA (2009), ESC 2022 (arythmies ventriculaires) et revue Margulescu (2019)',
      detail: 'Formule du risque de dommage (1 sur 20 000/an), comparaison internationale des délais et obligation d’information des porteurs de DAI.',
    },
    {
      label: 'DGK (2015, 2023), ACC (2011) et FAQ patient ZOLL LifeVest',
      detail: 'Repères allemands et américains historiques, estimation du risque de choc au volant (0,15 %/an) et précautions fabricant pour le gilet portable.',
    },
  ],
  disclaimerType: 'legal_france',
};
