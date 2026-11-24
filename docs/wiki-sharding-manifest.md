# Manifeste de Decoupage du Wiki -- Port Francais Multi-Agents

> **Document associe :** [Specification de Conception et d'Architecture](./design-spec.md)
> **Source locale :** `C:\Users\Florian\Documents\wiki\topics\ischaemic-cardiomyopathy`
> **Date de reference du wiki (`asOf`) :** `2026-11-24`
> **Couverture totale :** 43 fichiers sources (42 articles compiles dans `wiki/` + 1 playbook dans `output/`) repartis en 6 lots disjoints (`W1-Content-1` a `W1-Content-6`)

---

## 1. Regles Absolues pour tous les Agents de Contenu (`W1-Content-1..6`)

1. **Interdiction stricte de lire `raw/` :** Les agents ne doivent **jamais** ouvrir, citer ou copier le moindre fichier de `C:\Users\Florian\Documents\wiki\topics\ischaemic-cardiomyopathy\raw\` (qui contient des documents personnels prives). Travailler exclusivement a partir des chemins listes dans le tableau de son lot ci-dessous.
2. **Propriete exclusive des fichiers :** Chaque agent ecrit uniquement les fichiers `src/content/fr/articles/<slug>.ts` (et, le cas echeant, les catalogues explicitement assignes a son lot). Aucun agent ne modifie `src/content/fr/index.ts`, `src/types/*`, ni aucun fichier d'un autre lot.
3. **Auto-decouverte :** Chaque fichier article exporte `export const article: WikiArticle = { ... }` (export nomme `article`, conforme au type `WikiArticle` de `src/types/content.ts`). L'index de la bibliotheque les charge automatiquement via `import.meta.glob('./articles/*.ts', { eager: true })`.
4. **Zero emoji :** Aucun emoji dans le texte, les titres, les appels ou les commentaires de code.
5. **Fidelite scientifique :**
   - Conserver chaque chiffre, intervalle, classe de recommandation (ex. `ESC 2026 Classe I`, `IIa`, `IIb`, `III`), nom d'essai clinique et nuance/incertitude present dans la source.
   - Ne jamais transformer un constat d'etude ou un seuil clinicien en consigne d'auto-modification de traitement.
   - Conserver la date `asOf: '2026-11-24'`, `confidence` et `volatility` (`hot` / `warm` / `stable`).
6. **Localisation francaise idiomatique :**
   - **Vouvoiement** systematique (`vous`, `votre medecin traitant`, `votre cardiologue`).
   - **Decimales francaises** dans le texte affiche (`0,55 g/L`, `5,5 points`, `2,0 kg`) et **unites francaises en premier** (`g/L` suivi de `mmol/L` entre parentheses pour le LDL ; `umol/L` et `mg/L` pour la creatinine).
   - **Medicaments :** DCI francaise + nom commercial usuel en France entre parentheses a la premiere occurrence (voir section 3).
   - **Systeme de sante francais :** remplacer les renvois generiques britanniques (`NHS 111`, `999`, `DVLA`) par les reperes francais (`15 / SAMU`, `112`, `114`, `medecin traitant`, `cardiologue`, `infirmiere IC / IPA`, `medecin agree`, `ameli.fr`, `service-public.fr`), sauf dans les sections ou articles explicitement comparatifs (`recommandations-comparees-esc-us-nice` et tableaux internationaux de `regles-conduite-automobile`).

---

## 2. Repartition Equilibree des 6 Lots (`W1-Content-1` a `W1-Content-6`)

| Lot | Domaine clinique | Articles | Lignes source | Catalogues structures exclusifs |
|---|---|---:|---:|---|
| `W1-Content-1` | Diagnostic, chiffres, stade B, recuperation et comorbidites | 11 | 1 847 | Aucun |
| `W1-Content-2` | Traitements de fond, effets secondaires, add-ons, lipides et fer IV | 7 | 1 861 | `src/content/fr/catalogs/medications-reference.ts` |
| `W1-Content-3` | Dispositifs (DAI/CRT/LifeVest), telesurveillance, revascularisation, CTO, thrombus | 6 | 1 617 | Aucun |
| `W1-Content-4` | Nutrition, sel/liquides, poids, complements, interactions et playbook | 9 | 1 924 | `src/content/fr/catalogs/interactions-catalog.ts` |
| `W1-Content-5` | Vie quotidienne, droits en France, readaptation, psychologie, anticipation, conduite | 6 | 1 026 | `src/content/fr/catalogs/french-admin-catalog.ts` |
| `W1-Content-6` | Questions pour l'equipe, glossaire, recommandations comparees et essais cles | 4 | 1 375 | `src/content/fr/catalogs/questions-catalog.ts`, `src/content/fr/catalogs/glossary.ts` |
| **Total** | **Couverture complete du wiki** | **43** | **9 650** | **5 catalogues structures** |

---

## 3. Cartographie Exacte des 43 Fichiers (Source -> Cible)

### Lot `W1-Content-1` -- Diagnostic, Chiffres & Comorbidites (11 fichiers, 1 847 lignes)

| # | Fichier source (relatif au wiki) | `articleId` (slug) | Fichier cible | Titre francais cible | Categorie | Modules lies |
|---:|---|---|---|---|---|---|
| 1 | `wiki/topics/understanding-the-diagnosis.md` | `comprendre-le-diagnostic` | `src/content/fr/articles/comprendre-le-diagnostic.ts` | Comprendre le diagnostic | `diagnostic` | `core` |
| 2 | `wiki/concepts/ischaemic-cardiomyopathy.md` | `cardiomyopathie-ischemique` | `src/content/fr/articles/cardiomyopathie-ischemique.ts` | La cardiomyopathie ischemique | `diagnostic` | `core` |
| 3 | `wiki/concepts/ejection-fraction.md` | `fraction-dejection` | `src/content/fr/articles/fraction-dejection.ts` | La fraction d'ejection (FEVG) | `diagnostic` | `core` |
| 4 | `wiki/concepts/tests-and-numbers.md` | `examens-et-chiffres` | `src/content/fr/articles/examens-et-chiffres.ts` | Examens et chiffres : NT-proBNP, taille du VG et cicatrice IRM | `diagnostic` | `core` |
| 5 | `wiki/concepts/asymptomatic-lv-dysfunction-stage-b.md` | `dysfonction-vg-asymptomatique-stade-b` | `src/content/fr/articles/dysfonction-vg-asymptomatique-stade-b.ts` | Dysfonction ventriculaire asymptomatique (stade B) | `diagnostic` | `stageB` |
| 6 | `wiki/concepts/confirming-the-cause-of-lv-dysfunction.md` | `confirmer-la-cause-dysfonction-vg` | `src/content/fr/articles/confirmer-la-cause-dysfonction-vg.ts` | Confirmer la cause de la dysfonction du ventricule gauche | `diagnostic` | `core` |
| 7 | `wiki/concepts/heart-failure-with-improved-ef.md` | `insuffisance-cardiaque-fevg-amelioree` | `src/content/fr/articles/insuffisance-cardiaque-fevg-amelioree.ts` | Insuffisance cardiaque a FEVG amelioree (HFimpEF) | `diagnostic` | `hfImpEf` |
| 8 | `wiki/topics/coexisting-conditions.md` | `maladies-associees` | `src/content/fr/articles/maladies-associees.ts` | Maladies associees (reins, FA, valves, diabete) | `comorbidites` | `ckd`, `atrialFibrillation`, `diabetes` |
| 9 | `wiki/concepts/aortic-stenosis-with-reduced-ef.md` | `stenose-aortique-fevg-reduite` | `src/content/fr/articles/stenose-aortique-fevg-reduite.ts` | Retrecissement aortique avec FEVG reduite | `comorbidites` | `aorticStenosis` |
| 10 | `wiki/concepts/blood-pressure-in-heart-failure.md` | `tension-arterielle-insuffisance-cardiaque` | `src/content/fr/articles/tension-arterielle-insuffisance-cardiaque.ts` | Tension arterielle et insuffisance cardiaque | `comorbidites` | `core`, `aorticStenosis` |
| 11 | `wiki/concepts/sleep-apnoea-in-heart-failure.md` | `apnee-du-sommeil-insuffisance-cardiaque` | `src/content/fr/articles/apnee-du-sommeil-insuffisance-cardiaque.ts` | Apnee du sommeil et insuffisance cardiaque | `comorbidites` | `sleepApnoea` |

### Lot `W1-Content-2` -- Traitements de Fond, Add-ons, Lipides & Fer IV (7 fichiers, 1 861 lignes)

| # | Fichier source (relatif au wiki) | `articleId` (slug) | Fichier cible | Titre francais cible | Categorie | Modules lies |
|---:|---|---|---|---|---|---|
| 12 | `wiki/topics/heart-failure-medicines.md` | `medicaments-insuffisance-cardiaque` | `src/content/fr/articles/medicaments-insuffisance-cardiaque.ts` | Les medicaments de l'insuffisance cardiaque (4 piliers) | `traitements` | `core` |
| 13 | `wiki/concepts/medicines-side-effects-and-monitoring.md` | `medicaments-effets-secondaires-suivi` | `src/content/fr/articles/medicaments-effets-secondaires-suivi.ts` | Medicaments : mode d'action, effets secondaires et bilans sanguins | `traitements` | `core`, `ckd` |
| 14 | `wiki/topics/newer-and-add-on-treatments.md` | `traitements-additionnels-nouveaux` | `src/content/fr/articles/traitements-additionnels-nouveaux.ts` | Au-dela des 4 piliers : traitements additionnels et recents | `traitements` | `core` |
| 15 | `wiki/concepts/add-on-medicines-ivabradine-digoxin-vericiguat.md` | `medicaments-additionnels-ivabradine-digoxine-vericiguat` | `src/content/fr/articles/medicaments-additionnels-ivabradine-digoxine-vericiguat.ts` | Medicaments additionnels : ivabradine, digoxine/digitoxine et vericiguat | `traitements` | `core` |
| 16 | `wiki/concepts/finerenone-and-newer-mras.md` | `finerenone-et-nouveaux-arm` | `src/content/fr/articles/finerenone-et-nouveaux-arm.ts` | Finerenone, nouveaux ARM et chelateurs de potassium | `traitements` | `ckd`, `diabetes` |
| 17 | `wiki/concepts/cholesterol-and-secondary-prevention.md` | `cholesterol-et-prevention-secondaire` | `src/content/fr/articles/cholesterol-et-prevention-secondaire.ts` | Cholesterol LDL, aspirine et prevention secondaire coronaire | `traitements` | `core` |
| 18 | `wiki/concepts/iron-deficiency-and-iv-iron.md` | `carence-martiale-et-fer-iv` | `src/content/fr/articles/carence-martiale-et-fer-iv.ts` | Carence en fer et fer intraveineux | `traitements` | `core` |

**Catalogue supplementaire exclusif a `W1-Content-2` :**
- `src/content/fr/catalogs/medications-reference.ts` : referentiel structure `MEDICATION_REFERENCES: MedicationReference[]` couvrant les 4 piliers (doses de depart, doses cibles ESC, frequence de titration, noms commerciaux francais), diuretiques de l'anse, prevention secondaire, add-ons et liste des classes a eviter en ICFER (AINS, verapamil, diltiazem, moxonidine).

### Lot `W1-Content-3` -- Dispositifs, Revascularisation, CTO & Thrombus (6 fichiers, 1 617 lignes)

| # | Fichier source (relatif au wiki) | `articleId` (slug) | Fichier cible | Titre francais cible | Categorie | Modules lies |
|---:|---|---|---|---|---|---|
| 19 | `wiki/concepts/heart-devices-icd-and-crt.md` | `dispositifs-cardiaques-dai-crt` | `src/content/fr/articles/dispositifs-cardiaques-dai-crt.ts` | Dispositifs cardiaques implantes : DAI et CRT | `dispositifs` | `device` |
| 20 | `wiki/concepts/wearable-defibrillator-vest.md` | `gilet-defibrillateur-portable` | `src/content/fr/articles/gilet-defibrillateur-portable.ts` | Le gilet defibrillateur portable (LifeVest) | `dispositifs` | `lifeVest` |
| 21 | `wiki/concepts/remote-monitoring-in-heart-failure.md` | `telesurveillance-insuffisance-cardiaque` | `src/content/fr/articles/telesurveillance-insuffisance-cardiaque.ts` | Telesurveillance a domicile et suivi a distance des protheses | `dispositifs` | `core`, `device` |
| 22 | `wiki/concepts/revascularisation-cabg-and-pci.md` | `revascularisation-pontage-stents` | `src/content/fr/articles/revascularisation-pontage-stents.ts` | Revascularisation coronaire : pontage et stents | `dispositifs` | `core` |
| 23 | `wiki/concepts/chronic-total-occlusion.md` | `occlusion-coronaire-chronique-cto` | `src/content/fr/articles/occlusion-coronaire-chronique-cto.ts` | Occlusion coronaire chronique (CTO) et collaterales | `dispositifs` | `cto` |
| 24 | `wiki/concepts/lv-thrombus-and-blood-thinners.md` | `thrombus-vg-et-anticoagulants` | `src/content/fr/articles/thrombus-vg-et-anticoagulants.ts` | Thrombus du ventricule gauche et anticoagulants | `comorbidites` | `lvThrombusOrAneurysm` |

### Lot `W1-Content-4` -- Nutrition, Complements, Interactions & Playbook (9 fichiers, 1 924 lignes)

| # | Fichier source (relatif au wiki) | `articleId` (slug) | Fichier cible | Titre francais cible | Categorie | Modules lies |
|---:|---|---|---|---|---|---|
| 25 | `wiki/topics/nutrition-and-supplements-in-heart-failure.md` | `nutrition-et-complements-insuffisance-cardiaque` | `src/content/fr/articles/nutrition-et-complements-insuffisance-cardiaque.ts` | Nutrition et complements alimentaires dans l'insuffisance cardiaque | `nutrition` | `core` |
| 26 | `output/playbook-nutritional-interventions-and-supplements-2026-11-24.md` | `guide-pratique-nutrition-complements` | `src/content/fr/articles/guide-pratique-nutrition-complements.ts` | Guide pratique : interventions nutritionnelles et complements | `nutrition` | `core` |
| 27 | `wiki/references/nutrition-and-supplement-evidence-table.md` | `tableau-preuves-nutrition-complements` | `src/content/fr/articles/tableau-preuves-nutrition-complements.ts` | Tableau des niveaux de preuve : nutrition et complements | `nutrition` | `core` |
| 28 | `wiki/concepts/salt-and-fluid-in-heart-failure.md` | `sel-et-liquides-insuffisance-cardiaque` | `src/content/fr/articles/sel-et-liquides-insuffisance-cardiaque.ts` | Sel et apports hydriques dans l'insuffisance cardiaque | `nutrition` | `core` |
| 29 | `wiki/concepts/heart-healthy-eating-patterns.md` | `alimentation-cardioprotectrice` | `src/content/fr/articles/alimentation-cardioprotectrice.ts` | Alimentation cardioprotectrice (modele mediterraneen) | `nutrition` | `core` |
| 30 | `wiki/concepts/weight-obesity-and-malnutrition.md` | `poids-obesite-et-denutrition` | `src/content/fr/articles/poids-obesite-et-denutrition.ts` | Poids, obesite et denutrition (cachexie cardiaque) | `nutrition` | `core` |
| 31 | `wiki/concepts/omega-3-fish-oil.md` | `omega-3-huile-de-poisson` | `src/content/fr/articles/omega-3-huile-de-poisson.ts` | Acides gras omega-3 (huiles de poisson) | `nutrition` | `core`, `atrialFibrillation` |
| 32 | `wiki/concepts/coenzyme-q10.md` | `coenzyme-q10` | `src/content/fr/articles/coenzyme-q10.ts` | Coenzyme Q10 (CoQ10) | `nutrition` | `core` |
| 33 | `wiki/concepts/supplement-and-food-drug-interactions.md` | `interactions-complements-aliments-medicaments` | `src/content/fr/articles/interactions-complements-aliments-medicaments.ts` | Interactions entre complements, aliments et medicaments cardiaques | `nutrition` | `core` |

**Catalogue supplementaire exclusif a `W1-Content-4` :**
- `src/content/fr/catalogs/interactions-catalog.ts` : referentiel structure `INTERACTIONS_CATALOG: InteractionItem[]` alimentant le verificateur interactif du module *Traitements & Securite* (verdicts `worth_raising` / `possible` / `not_supported` / `avoid`, classes medicamenteuses concernees, mecanisme, sources).

### Lot `W1-Content-5` -- Vie Quotidienne, France, Readaptation & Conduite (6 fichiers, 1 026 lignes)

| # | Fichier source (relatif au wiki) | `articleId` (slug) | Fichier cible | Titre francais cible | Categorie | Modules lies |
|---:|---|---|---|---|---|---|
| 34 | `wiki/topics/living-with-heart-failure.md` | `vivre-avec-insuffisance-cardiaque` | `src/content/fr/articles/vivre-avec-insuffisance-cardiaque.ts` | Vivre au quotidien avec une insuffisance cardiaque | `quotidien` | `core` |
| 35 | `wiki/topics/living-with-heart-failure-in-france.md` | `vivre-avec-insuffisance-cardiaque-en-france` | `src/content/fr/articles/vivre-avec-insuffisance-cardiaque-en-france.ts` | Vivre avec une insuffisance cardiaque en France : ALD, travail, emprunt et readaptation | `france` | `core` |
| 36 | `wiki/concepts/cardiac-rehabilitation-and-exercise.md` | `readaptation-cardiaque-et-activite-physique` | `src/content/fr/articles/readaptation-cardiaque-et-activite-physique.ts` | Readaptation cardiaque (SMR) et activite physique | `quotidien` | `core` |
| 37 | `wiki/concepts/depression-and-emotional-health.md` | `depression-et-sante-emotionnelle` | `src/content/fr/articles/depression-et-sante-emotionnelle.ts` | Sante emotionnelle, anxiete et depression | `quotidien` | `core` |
| 38 | `wiki/concepts/palliative-care-and-advance-planning.md` | `soins-de-support-et-anticipation` | `src/content/fr/articles/soins-de-support-et-anticipation.ts` | Soins de support, soins palliatifs et anticipation | `quotidien` | `core`, `device` |
| 39 | `wiki/references/driving-rules.md` | `regles-conduite-automobile` | `src/content/fr/articles/regles-conduite-automobile.ts` | Permis de conduire, insuffisance cardiaque et defibrillateur (France et UE) | `france` | `core`, `device`, `lifeVest` |

**Catalogue supplementaire exclusif a `W1-Content-5` :**
- `src/content/fr/catalogs/french-admin-catalog.ts` : referentiel structure `FRENCH_ADMIN_CATALOG: FrenchAdminCatalogItem[]` couvrant chaque demarche identifiee par `FrenchAdminItemId` (`ald_5_13`, `smr_rehab`, `prado_ic`, `telesurveillance_ic`, `arret_travail_ij`, `visite_pre_reprise`, `temps_partiel_therapeutique`, `rqth_mdph`, `pension_invalidite`, `emprunt_aeras_lemoine`, `permis_medecin_agree`, `vaccinations_ic`).

### Lot `W1-Content-6` -- Questions Equipe Medicale, Glossaire & References (4 fichiers, 1 375 lignes)

| # | Fichier source (relatif au wiki) | `articleId` (slug) | Fichier cible | Titre francais cible | Categorie | Modules lies |
|---:|---|---|---|---|---|---|
| 40 | `wiki/references/questions-for-the-cardiology-team.md` | `questions-equipe-cardiologie` | `src/content/fr/articles/questions-equipe-cardiologie.ts` | Questions a poser a l'equipe de cardiologie | `references` | `core` |
| 41 | `wiki/references/glossary.md` | `glossaire-cardiologie` | `src/content/fr/articles/glossaire-cardiologie.ts` | Glossaire medical de la cardiomyopathie ischemique | `references` | `core` |
| 42 | `wiki/references/guidelines-compared.md` | `recommandations-comparees-esc-us-nice` | `src/content/fr/articles/recommandations-comparees-esc-us-nice.ts` | Recommandations europeennes (ESC), americaines et britanniques comparees | `references` | `core` |
| 43 | `wiki/references/key-trials.md` | `essais-cliniques-cles` | `src/content/fr/articles/essais-cliniques-cles.ts` | Les grands essais cliniques de reference | `references` | `core` |

**Catalogues supplementaires exclusifs a `W1-Content-6` :**
- `src/content/fr/catalogs/questions-catalog.ts` : referentiel structure `QUESTIONS_CATALOG: QuestionCatalogItem[]` extrayant toutes les questions de `questions-for-the-cardiology-team.md`, taguees par interlocuteur (`cardiologist` | `gp` | `pharmacist` | `occupational_doctor`), par module conditionnel (`relevantModules`) et liees aux regles deterministes qui les font remonter en priorite.
- `src/content/fr/catalogs/glossary.ts` : referentiel structure `GLOSSARY_TERMS: GlossaryTerm[]` pour l'auto-definition des acronymes dans l'interface et la recherche plein texte.

---

## 4. Glossaire Terminologique Francais Partage (Obligatoire)

Tous les agents (Contenu, Moteur, UI) doivent respecter strictement cette terminologie pour garantir une coherence parfaite entre les ecrans, les alertes et la bibliotheque :

| Terme anglais (wiki) | Terme francais canonique | Notes d'usage |
|---|---|---|
| Ischaemic cardiomyopathy | Cardiomyopathie ischemique | Titre principal |
| LVEF / EF | FEVG (fraction d'ejection du ventricule gauche) | Toujours en `%` ; distinguer `ETT` et `IRM` |
| HFrEF | Insuffisance cardiaque a FEVG reduite (ICFER) | Acronyme `ICFER` (mentionner `HFrEF` une fois si utile) |
| HFimpEF | Insuffisance cardiaque a FEVG amelioree (HFimpEF) | Conserver `HFimpEF` entre parentheses |
| Stage B / Stage C | Stade B (asymptomatique) / Stade C (symptomatique) | Classification ACC/AHA/ESC |
| Echo / Echocardiogram | Echocardiographie transthoracique (ETT) | Jamais fusionnee avec IRM dans les courbes |
| Cardiac MRI / CMR | IRM cardiaque | |
| LGE (late gadolinium enhancement) | Rehaussement tardif (LGE) / cicatrice IRM | |
| LVEDVi / LVESVi / LVEDD | VTDi / VTSi (mL/m2) / DTDVG (mm) | Normes par sexe et modalite |
| ACE inhibitor | IEC (inhibiteur de l'enzyme de conversion) | Ex. ramipril, perindopril, enalapril, lisinopril |
| ARB | ARA2 (antagoniste des recepteurs de l'angiotensine II) | Ex. candesartan, valsartan, losartan |
| ARNI | ARNI (sacubitril/valsartan -- Entresto) | Delai 36 h apres IEC |
| Beta-blocker | Betabloquant | Ex. bisoprolol (*Cardensiel*), carvedilol, nebivolol, metoprolol succinate |
| MRA | ARM (antagoniste des recepteurs mineralocorticoides) | spironolactone (*Aldactone*), eplerenone (*Inspra*) |
| SGLT2 inhibitor | iSGLT2 (inhibiteur du SGLT2 / gliflozine) | dapagliflozine (*Forxiga*), empagliflozine (*Jardiance*) |
| Loop diuretic | Diuretique de l'anse | furosemide (*Lasilix*), bumetanide (*Burinex*) |
| GDMT / Foundational therapy | Traitement de fond (les 4 piliers) | |
| Uptitration | Titration (augmentation progressive des doses) | |
| TSAT (transferrin saturation) | CST (coefficient de saturation de la transferrine) | En `%` ; seuil < 20 % |
| eGFR | DFGe (debit de filtration glomerulaire estime) | En `mL/min/1,73 m2` |
| ICD / CRT-P / CRT-D | DAI (defibrillateur automatique implantable) / CRT-P / CRT-D | |
| Wearable defibrillator vest | Gilet defibrillateur portable (LifeVest) | Conduite interdite en France |
| CABG / PCI | Pontage aorto-coronarien / Angioplastie (stents) | |
| CTO | Occlusion coronaire chronique (CTO) | |
| Aortic stenosis | Retrecissement aortique (stenose aortique) | |
| LV thrombus | Thrombus intraventriculaire gauche (thrombus VG) | |
| Atrial fibrillation (AF) | Fibrillation atriale (FA) | |
| OSA / CSA / ASV | Apnee obstructive (SAOS) / centrale (SACS) / servo-ventilation adaptative (ASV) | |
| Cardiac rehabilitation | Readaptation cardiaque (SMR cardiovasculaire) | |
| GP | Medecin traitant | |
| Heart failure nurse | Infirmiere insuffisance cardiaque / IPA | |
| Approved driving doctor | Medecin agree (permis de conduire) | Distinct du medecin traitant |
| Sick day rules | Plan « jours de maladie » | |
| NSAIDs | AINS (anti-inflammatoires non steroidiens) | Ex. ibuprofene, ketoprofene, diclofenac |

---

## 5. Verification Automatique de Completude (Gate 1)

Le test unitaire `src/content/fr/__tests__/manifest.test.ts` (ecrit en Wave 0) doit verifier automatiquement a la fin de Wave 1 :
1. Le nombre d'articles charges par `import.meta.glob` est **exactement egal a 43**.
2. Chaque `articleId` de `EXPECTED_ARTICLE_SLUGS` est present exactement une fois, avec `summaryFr`, `sections.length > 0`, `sources.length > 0` et `asOf === '2026-11-24'`.
3. Aucun lien interne `relatedArticleIds` ne pointe vers un slug inexistant.
4. Les 5 catalogues (`MEDICATION_REFERENCES`, `INTERACTIONS_CATALOG`, `FRENCH_ADMIN_CATALOG`, `QUESTIONS_CATALOG`, `GLOSSARY_TERMS`) sont non vides et leurs `articleId` / `adminItemId` sont tous valides au sens TypeScript.
5. Aucun emoji n'est present dans les fichiers generes.
