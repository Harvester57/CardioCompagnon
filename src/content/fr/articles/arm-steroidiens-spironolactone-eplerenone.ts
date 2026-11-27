import type { WikiArticle } from '../../../types';

export const article: WikiArticle = {
  slug: 'arm-steroidiens-spironolactone-eplerenone',
  sourceWikiPath: 'wiki/concepts/steroidal-mras.md',
  titleFr: 'ARM stéroïdiens : spironolactone et éplérénone',
  category: 'traitements',
  readingTier: 'deep_dive',
  asOf: '2026-11-27',
  confidence: 'medium-high',
  volatility: 'warm',
  tags: [
    'arm',
    'spironolactone',
    'éplérénone',
    'rales',
    'ephesus',
    'emphasis-hf',
    'topcat',
    'hyperkaliémie',
    'gynécomastie',
    'potassium',
    'icfer',
    'post-infarctus',
  ],
  aliases: [
    'ARM stéroïdien',
    'sMRA',
    'Antagoniste des récepteurs minéralocorticoïdes',
    'Spironolactone',
    'Aldactone',
    'Éplérénone',
    'Inspra',
    'RALES',
    'EPHESUS',
    'EMPHASIS-HF',
  ],
  linkedModules: ['core', 'ckd', 'stageB'],
  plainSummaryFr:
    "Les antagonistes des récepteurs minéralocorticoïdes (ARM) stéroïdiens — spironolactone (Aldactone) et éplérénone (Inspra) — forment l'un des quatre piliers du traitement de l'ICFER. En bloquant l'aldostérone, ils freinent la fibrose cardiaque et la rétention de sel, aident à vivre plus longtemps et réduisent les hospitalisations, y compris dans la cardiomyopathie ischémique. Leur principal point de vigilance est la hausse du potassium sanguin, surveillée par des prises de sang régulières. La spironolactone peut provoquer une sensibilité ou un gonflement des seins (environ 1 homme sur 10) ; l'éplérénone constitue alors l'alternative établie.",
  sections: [
    {
      headingFr: 'Rôle des ARM stéroïdiens et choix entre spironolactone et éplérénone',
      depth: 'patient',
      bodyMarkdownFr: `L'aldostérone est une hormone produite par les glandes surrénales qui aggrave l'insuffisance cardiaque, favorise la fibrose du muscle cardiaque et pousse les reins à retenir le sel et l'eau.

- **Action protectrice :** la spironolactone (*Aldactone*) et l'éplérénone (*Inspra*) bloquent le récepteur de l'aldostérone. Elles ont un léger effet diurétique tout en conservant le potassium (elles divisent environ par deux le risque de manque de potassium lié aux diurétiques de l'anse) et font baisser le NT-proBNP.
- **Pourquoi l'ESC 2026 les distingue de la finérénone :** pour une FEVG réduite autour de 35 %, les preuves de survie appartiennent aux ARM stéroïdiens. La finérénone (*Kerendia*), un ARM non stéroïdien, n'a pas encore de résultats pronostiques sous 40 % de FEVG (voir *Finérénone, nouveaux ARM et chélateurs de potassium*).

### Comparaison pratique : spironolactone, éplérénone et finérénone

| Critère | Spironolactone (*Aldactone*) | Éplérénone (*Inspra*) | Finérénone (*Kerendia*) |
|---|---|---|---|
| **Type** | Stéroïdien, non sélectif | Stéroïdien, sélectif | Non stéroïdien, sélectif |
| **Essais pronostiques en ICFER** | **RALES** (NYHA III–IV) | **EMPHASIS-HF** (NYHA II), **EPHESUS** (post-IDM) | Aucun publié (essai IC à FEVG ≥ 40 %) |
| **Place ESC 2026 à FEVG ~35 %** | Recommandée (ARM stéroïdien) | Recommandée (ARM stéroïdien) | Non retenue en ICFER |
| **Effets mammaires (gynécomastie)** | Environ **10 %** des hommes | Rares (**< 1 %**, comme le placebo) | Rares |
| **Dose cible (ESC Tableau 11)** | 50 mg × 1/j | 50 mg × 1/j | 20–40 mg/j selon DFGe |

**Effets hormonaux :** parce que la spironolactone interagit aussi avec les récepteurs des androgènes et de la progestérone, elle peut entraîner une tension ou un gonflement des seins (y compris chez l'homme), une baisse de libido ou des troubles de l'érection. Parlez-en à votre cardiologue : le passage à l'**éplérénone** est la solution validée.`,
    },
    {
      headingFr: 'Doses, surveillance du potassium et vie réelle',
      depth: 'patient',
      bodyMarkdownFr: `### Doses de départ et d'entretien

- **Spironolactone (*Aldactone*) :** départ habituel à **25 mg une fois par jour** (ou **12,5 mg/j** si les reins ou le potassium invitent à la prudence ; prise recommandée au cours d'un repas), cible **50 mg/j** (dose moyenne atteinte dans RALES : 26 mg/j).
- **Éplérénone (*Inspra*) :** départ à **25 mg une fois par jour** (ou un jour sur deux si la fonction rénale est modérément réduite, DFGe 30–60), cible **50 mg/j** après environ 4 semaines (doses moyennes dans les essais : 39 à 43 mg/j).

### Pourquoi les prises de sang sont indispensables

Les ARM peuvent faire monter le **potassium sanguin (hyperkaliémie)**, en particulier si les reins filtrent moins bien ou en cas de déshydratation.
- **Calendrier habituel :** contrôle du potassium et de la créatinine/DFGe **avant le début**, **1 à 2 semaines** après l'initiation et après chaque changement de dose, à **1 mois**, puis **tous les 3 à 6 mois** une fois stabilisé (ainsi que 3 à 7 jours après l'ajout d'un médicament pouvant modifier le potassium).
- **Importance de ce suivi en vie réelle :** après la publication de RALES, une forte hausse des prescriptions sans suivi biologique rapproché en Ontario s'est accompagnée d'un quadruplement des hospitalisations pour hyperkaliémie, alors qu'en Écosse (Tayside), où le recours aux prises de sang a triplé en parallèle, les hospitalisations n'ont pas augmenté.
- **Précautions quotidiennes :** évitez l'automédication par **AINS** (ibuprofène, kétoprofène…), les **compléments en potassium** et les **substituts de sel riches en potassium** (sels de régime au chlorure de potassium). Pour l'alimentation riche en végétaux, voir *Thèse : régime méditerranéen et sécurité du potassium dans l'ICFER*.
- **Si le potassium monte :** ne stoppez pas votre traitement seul. Votre équipe vérifie d'abord le résultat, recherche une cause déclenchante (déshydratation, autre médicament) et peut ajuster la dose ou discuter un **chélateur de potassium** (patiromer *Veltassa* ou cyclosilicate de zirconium sodique *Lokelma*) afin de conserver le bénéfice de l'ARM.`,
    },
    {
      headingFr: 'Essais pivots, données ischémiques et contrastes (EPHESUS, TOPCAT)',
      depth: 'evidence',
      bodyMarkdownFr: `Les trois grands essais en ICFER ont été conduits avant la généralisation de l'ARNI et des iSGLT2.

### Tableau des essais principaux

| Essai | Population (n, FEVG, part ischémique) | Fond thérapeutique | Résultat principal | Applicabilité ICFER ischémique |
|---|---|---|---|---|
| **RALES** (NEJM, 1999 ; spironolactone 25 mg, moy. 26 mg) | 1 663 ; NYHA III–IV, FEVG ≤ 35 % (méd. 26 %) ; ~55 % ischémiques | Diurétique 100 %, IEC ~95 %, bêtabloquant ~10–15 % | Mortalité **35 % vs 46 %**, **RR 0,70** (0,60–0,82) ; hospitalisation IC **RR 0,65** (0,54–0,77). Arrêté tôt (24 mois) ; résumé + notices | Partielle (fond très ancien, IC sévère) |
| **EPHESUS** (NEJM, 2003 ; éplérénone 25->50 mg, moy. 43 mg) | 6 632 ; **J3–J14 post-IDM**, FEVG ≤ 40 % (moy. 33 %) avec signes d'IC ou diabète ; **100 % ischémiques** | IEC/ARA2 ~90 %, bêtabloquant 75–83 %, aspirine 92 %, statine 60 % | Mortalité **14,4 % vs 16,7 %**, **RR 0,85** (0,75–0,96) ; mort subite **RR 0,79** (0,64–0,97) ; 16 mois ; résumé + notice | Partielle (post-IDM aigu) |
| **EMPHASIS-HF** (NEJM, 2011, texte intégral ; éplérénone 25->50 mg, moy. 39 mg) | 2 737 ; ≥ 55 ans, NYHA II, FEVG ≤ 30 % (ou 30–35 % avec QRS > 130 ms, 3–4 % ; moy. 26 %) ; **69 % ischémiques** | IEC/ARA2 93–94 %, bêtabloquant 87 %, DAI 13 % | Décès CV ou hospitalisation IC **18,3 % vs 25,9 %**, **HR 0,63** (0,54–0,74) ; mortalité **HR 0,76** (0,62–0,93) ; hospitalisation IC **HR 0,58**. Arrêté tôt (21 mois) | Partielle (FEVG 35 % à la marge, pré-ARNI/iSGLT2) |
| **Jhund 2024 IPD** (Lancet, texte intégral) | RALES + EMPHASIS-HF (4 400 ICFER) | Identique | Décès CV ou hospitalisation IC **HR 0,66** (0,59–0,73) ; décès CV **HR 0,72** ; mortalité **HR 0,73** (0,65–0,83) | Partielle (meilleure estimation poolée) |
| **TOPCAT** (NEJM, 2014 ; contraste uniquement) | 3 445 ; **FEVG ≥ 45 %** (HFpEF) | — | Critère principal neutre (**HR 0,89**, IC 0,77–1,04) ; forte disparité Amériques (HR 0,82) vs Russie/Géorgie (HR 1,10, 30 % de non-observance biologique) | Extrapolée (non applicable en ICFER) |

### Sous-groupe ischémique et délai post-infarctus

- **EMPHASIS-HF :** sur 1 886 ischémiques contre 846 non ischémiques, aucune différence d'effet selon la cause (**p d'interaction = 0,73**). Dans **Jhund 2024**, l'effet était identique avec ou sans antécédent d'infarctus (**HR 0,65 vs 0,66**, interaction **p = 0,96**). Pour **RALES**, les chiffres chiffrés du sous-groupe ischémique n'étaient pas disponibles (graphique non extrait).
- **EPHESUS (délai post hoc) :** gain absolu global d'environ 2,3 décès évités pour 100 patients sur 16 mois ; bénéfice concentré lors d'une initiation avant J7 (**HR 0,69** contre **0,94** à J7 ou après, p d'interaction = 0,02 — analyse non randomisée, génératrice d'hypothèses).
- **Spironolactone contre éplérénone :** aucun essai randomisé face à face sur la survie ; les cohortes observationnelles divergent (confondants probables), avec moins d'arrêts sous éplérénone (34 % vs 53 %). Sur les effets mammaires, les comparaisons poolées confirment un risque très inférieur sous éplérénone (**RR 0,07**, IC 0,02–0,31).`,
    },
    {
      headingFr: 'Sécurité biologique, recommandations comparées et limites',
      depth: 'evidence',
      bodyMarkdownFr: `### Fréquence de l'hyperkaliémie dans les essais et en vie réelle

- **RALES :** K⁺ > 5,5 mmol/L chez **16 % vs 5 %** (> 6,0 : **4 % vs 1 %**). Étude de dose (1996) : ≥ 5,5 chez 13 % (25 mg), 20 % (50 mg), 24 % (75 mg) vs 5 % (placebo).
- **EMPHASIS-HF :** > 5,5 chez **11,8 % vs 7,2 %** ; > 6,0 chez **2,5 % vs 1,9 %** (NS) ; hospitalisation pour hyperkaliémie **0,3 % vs 0,2 %** ; hypokaliémie < 3,5 réduite (**7,5 % vs 11,0 %**). Bénéfice conservé chez les ≥ 75 ans, diabétiques ou DFGe < 60 (HR 0,54–0,66).
- **EPHESUS :** > 5,5 chez **15,6 % vs 11,2 %** (32 % vs 23 % si clairance ≤ 30 mL/min).
- **Cohorte de Stockholm (Trevisan 2018/2021) :** 26,2 % de K⁺ > 5,0 dans l'année chez les nouveaux utilisateurs d'ARM ; environ la moitié ont arrêté sans reprise, ce qui réduisait les récidives d'hyperkaliémie (**HR 0,75**) mais s'associait à davantage d'événements CV ou décès (**HR 1,10**, observationnel).

### Comparatif des recommandations et seuils cliniciens (au 26 novembre 2026)

| Source | Recommandation / seuil d'initiation | Conduite clinicienne si potassium élevé |
|---|---|---|
| **ESC 2026** | ARM stéroïdien en ICFER : **I, A** ; éplérénone post-IDM stade B : **I, B1**. Prudence si DFGe **< 25** ou K⁺ **≥ 5,0** | K⁺ **> 5,5** : recontrôler, envisager baisse ou pause puis reprise. Chélateurs possibles (bénéfice clinique incertain) |
| **AHA/ACC/HFSA 2022** | Spironolactone ou éplérénone : **1, A** (si DFGe **> 30** et K⁺ **< 5,0**) | Arrêter si K⁺ ne peut rester **< 5,5** (**3 : Danger, B-NR**). Chélateurs : **2b, B-R** |
| **NICE NG106 (2025)** | Proposer avec les 3 autres piliers ; bilans avant puis à 1–2 semaines | Créatinine > +50 % ou K⁺ > 5,5 : suivre protocoles locaux ; éviter substituts de sel au potassium |
| **RCP britannique éplérénone** | Contre-indiqué si K⁺ > 5,0 ou DFGe < 30 | 5,5–5,9 : réduire ; ≥ 6,0 : suspendre, reprendre à 25 mg 1 j/2 dès K⁺ < 5,0 |

### Limites ouvertes

- Aucun essai pronostique d'ARM stéroïdien n'a été mené sur un traitement moderne comprenant ARNI et iSGLT2 : le gain absolu additionnel sur une quadrithérapie contemporaine reste estimé par modélisation.
- Les textes intégraux de **RALES**, **EPHESUS**, **TOPCAT**, **Juurlink 2004** et **Wei 2010** n'ont pas été consultés (constats d'intégrité provisoires).`,
    },
  ],
  relatedArticleSlugs: [
    'these-benefice-dai-sous-quadritherapie',
    'medicaments-insuffisance-cardiaque',
    'finerenone-et-nouveaux-arm',
    'iec-ara2-et-arni-sacubitril-valsartan',
    'betabloquants-insuffisance-cardiaque',
    'inhibiteurs-sglt2-insuffisance-cardiaque',
    'maladie-renale-insuffisance-cardiaque',
    'medicaments-effets-secondaires-suivi',
    'these-regime-mediterraneen-potassium-icfer',
    'dysfonction-vg-asymptomatique-stade-b',
    'vie-sexuelle-et-dysfonction-erectile-ic',
  ],
  sources: [
    {
      label: 'Essais pivots : RALES (NEJM, 1999), EPHESUS (NEJM, 2003 ; Adamopoulos 2009), EMPHASIS-HF (NEJM, 2011, texte intégral ; Eschalier 2013), TOPCAT (2014)',
      detail: 'Efficacité en ICFER et post-infarctus, sous-groupe ischémique, hyperkaliémie et effets mammaires',
    },
    {
      label: 'Jhund et al. (The Lancet, 2024, texte intégral) et DIAMOND (EHJ, 2022, texte intégral)',
      detail: 'Méta-analyse sur données individuelles des ARM (4 400 patients ICFER) et maintien des ARM sous patiromer',
    },
    {
      label: 'Données de vie réelle : Juurlink (2004), Wei (Tayside, 2010), Trevisan (2018/2021) et registre HELP-HF (2023)',
      detail: 'Impact de la surveillance biologique sur les hospitalisations pour hyperkaliémie et sous-prescription des ARM',
    },
    {
      label: 'Recommandations ESC 2026 (Tableau 5, 11, stade B), AHA/ACC/HFSA 2022, NICE NG106 (2025), Clark (2019) et RCP Inspra / Aldactone',
      detail: 'Seuils de potassium et DFGe, adaptations rénales et calendrier de surveillance biologique',
    },
  ],
  disclaimerType: 'medical',
};
