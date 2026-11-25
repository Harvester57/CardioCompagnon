import path from 'node:path';
import { expect, test, type Page } from '@playwright/test';

const SCREENSHOT_DIR = process.env.CAPTURE_SCREENSHOTS_DIR?.trim() || '';

async function maybeCaptureScreenshot(page: Page, fileName: string): Promise<void> {
  if (!SCREENSHOT_DIR) {
    return;
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(250);
  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, fileName),
    fullPage: false,
  });
}

test.describe('Parcours E2E complets, PWA et Accessibilité', () => {
  test('parcours complet en Mode découverte sur les 7 modules, impression A4, carte urgence et préférences', async ({
    page,
  }) => {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];

    page.on('console', (message) => {
      if (message.type() === 'error') {
        consoleErrors.push(message.text());
      }
    });

    page.on('pageerror', (error) => {
      pageErrors.push(error.message);
    });

    await page.emulateMedia({ colorScheme: 'light' });
    await page.setViewportSize({ width: 1280, height: 800 });

    // 1. Activation du Mode découverte dans Paramètres
    await page.goto('/#/settings');
    await expect(
      page.getByRole('heading', { level: 1, name: /Paramètres & Profil/i }),
    ).toBeVisible();

    await page.getByRole('button', { name: /Activer le mode découverte/i }).click();

    const demoBanner = page.locator('[data-demo-banner]');
    await expect(demoBanner).toBeVisible();
    await expect(demoBanner).toContainText(/Mode découverte actif/i);

    const sidebarNav = page.getByRole('navigation', { name: 'Modules' });

    // 2. Module Aujourd'hui : graphiques + capture + saisie poids/EPOF
    await sidebarNav.getByRole('link', { name: "Aujourd'hui" }).click();
    await expect(page.getByRole('heading', { level: 1, name: /^Aujourd'hui$/i })).toBeVisible();
    await expect(page.getByText('Saisie matinale rapide')).toBeVisible();
    await expect(page.getByText('Triage du jour')).toBeVisible();

    await maybeCaptureScreenshot(page, 'screen-1-today-demo.png');

    await page.getByLabel('Poids matinal (kg)').fill('81,5');
    const oedemaGroup = page.getByRole('group', { name: 'O -- Œdèmes (jambes, chevilles)' });
    await oedemaGroup.getByRole('button', { name: 'En aggravation' }).click();
    await page
      .getByRole('button', { name: /Mettre à jour la saisie|Enregistrer la saisie/i })
      .click();

    await expect(page.getByText(/Prise de poids rapide/i)).toBeVisible();

    // 3. Module Traitements & Sécurité : 4 piliers + vérificateur interactions
    await sidebarNav.getByRole('link', { name: 'Traitements & Sécurité' }).click();
    await expect(
      page.getByRole('heading', { level: 1, name: /Traitements & Sécurité/i }),
    ).toBeVisible();
    await expect(page.getByText(/4 piliers/i).first()).toBeVisible();

    await page.getByRole('tab', { name: /Sécurité & Interactions/i }).click();
    const interactionsSearch = page.getByLabel(/Rechercher un produit/i);
    await interactionsSearch.fill('ibuprofene');
    await expect(page.getByText(/AINS|Ibuprofène/i).first()).toBeVisible();

    // 4. Module Examens & Chiffres : ETT vs IRM séparées + biologie + ECG/sommeil
    await sidebarNav.getByRole('link', { name: 'Examens & Chiffres' }).click();
    await expect(
      page.getByRole('heading', { level: 1, name: /Examens & Chiffres/i }),
    ).toBeVisible();
    await expect(page.getByText(/ETT/i).first()).toBeVisible();
    await expect(page.getByText(/IRM/i).first()).toBeVisible();

    await page.getByRole('tab', { name: 'Biologie' }).click();
    await expect(page.getByText(/NT-proBNP/i).first()).toBeVisible();

    await page.getByRole('tab', { name: /ECG & Sommeil/i }).click();
    await expect(page.getByText(/ECG/i).first()).toBeVisible();

    // 5. Module Mon Plan & Consultations : plan vivant, consultation, synthèse A4 + print, carte urgence
    await sidebarNav.getByRole('link', { name: 'Mon Plan & Visites' }).click();
    await expect(
      page.getByRole('heading', { level: 1, name: /Mon Plan & Consultations/i }),
    ).toBeVisible();
    await expect(
      page.getByRole('list', { name: 'Points prioritaires de votre plan' }),
    ).toBeVisible();

    await page.getByRole('tab', { name: /Préparer ma consultation/i }).click();
    await expect(page.getByText(/Cardiologue/i).first()).toBeVisible();

    await page.getByRole('tab', { name: /Fiche de synthèse A4/i }).click();
    await expect(page.getByText(/Fiche de synthèse/i).first()).toBeVisible();

    // Émulation @media print : navigation et bandeau démo masqués, main visible
    await page.emulateMedia({ media: 'print' });
    await expect(page.locator('[data-app-sidebar]')).toBeHidden();
    await expect(demoBanner).toBeHidden();
    await expect(page.getByRole('main')).toBeVisible();
    await page.emulateMedia({ media: 'screen' });

    // Carte urgence #/plan?tab=urgence affichant 15 / 112 / 114
    await page.goto('/#/plan?tab=urgence');
    await expect(page.locator('a[href="tel:15"]')).toBeVisible();
    await expect(page.locator('a[href="tel:112"]')).toBeVisible();
    await expect(page.getByText('114').first()).toBeVisible();

    await maybeCaptureScreenshot(page, 'screen-2-emergency-card.png');

    // 6. Module Vie en France & Droits : checklists + calculateur permis LifeVest/DAI
    await sidebarNav.getByRole('link', { name: 'Vie en France & Droits' }).click();
    await expect(
      page.getByRole('heading', { level: 1, name: /Vie en France & Droits/i }),
    ).toBeVisible();
    await expect(page.getByText(/ALD/i).first()).toBeVisible();

    await page.getByRole('tab', { name: /Calculateur permis de conduire/i }).click();
    const lifeVestCheckbox = page.locator('#driving-lifevest');
    await expect(lifeVestCheckbox).toBeVisible();
    if (!(await lifeVestCheckbox.isChecked())) {
      await lifeVestCheckbox.click();
    }
    await expect(lifeVestCheckbox).toBeChecked();
    await expect(page.getByText(/Arrêté du 28 mars 2022/i).first()).toBeVisible();
    await expect(page.getByText(/interdit|incompatible/i).first()).toBeVisible();

    await maybeCaptureScreenshot(page, 'screen-3-france-driving-calculator.png');

    // Vérification scénario DAI (sans LifeVest)
    await lifeVestCheckbox.click();
    await expect(lifeVestCheckbox).not.toBeChecked();
    await page.locator('#driving-device').selectOption('icd_primary');
    await expect(page.getByText(/semaines/i).first()).toBeVisible();

    // 7. Module Bibliothèque : recherche sans accents + lecture d'un article + glossaire
    await sidebarNav.getByRole('link', { name: 'Bibliothèque' }).click();
    await expect(
      page.getByRole('heading', { level: 1, name: /Bibliothèque scientifique/i }),
    ).toBeVisible();
    await expect(page.getByRole('tab', { name: /Fiches \(85\)/i })).toBeVisible();

    const searchInput = page.locator('#library-articles-search');
    await searchInput.fill('readaptation');
    await expect(page.getByText(/Réadaptation cardiaque/i).first()).toBeVisible();

    // Ouvrir un article scientifique et vérifier le lecteur Markdown sécurisé
    await page.goto('/#/library?article=comprendre-le-diagnostic');
    await expect(
      page.getByRole('heading', { level: 1, name: /Comprendre le diagnostic/i }),
    ).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'En clair' })).toBeVisible();

    await maybeCaptureScreenshot(page, 'screen-4-library-article.png');

    await page.getByRole('button', { name: /Retour à la bibliothèque/i }).click();
    await page.getByRole('tab', { name: /Glossaire/i }).click();
    await expect(page.getByText(/FEVG/i).first()).toBeVisible();

    // 8. Module Paramètres : thème sombre + texte agrandi
    await sidebarNav.getByRole('link', { name: 'Paramètres & Profil' }).click();
    await page.getByRole('button', { name: /Sombre/i }).click();
    await expect(page.locator('html')).toHaveClass(/\bdark\b/);

    const largeTextCheckbox = page.locator('#settings-large-text');
    await largeTextCheckbox.click();
    await expect(largeTextCheckbox).toBeChecked();
    await expect(page.locator('html')).toHaveClass(/\blarge-text\b/);

    // Retour état clair par propreté
    await page.getByRole('button', { name: /^Clair\b/ }).click();
    await largeTextCheckbox.click();
    await expect(largeTextCheckbox).not.toBeChecked();
    await expect(page.locator('html')).not.toHaveClass(/\bdark\b/);
    await expect(page.locator('html')).not.toHaveClass(/\blarge-text\b/);

    expect(consoleErrors, `Erreurs console inattendues : ${consoleErrors.join(' | ')}`).toEqual([]);
    expect(pageErrors, `Erreurs page inattendues : ${pageErrors.join(' | ')}`).toEqual([]);
  });

  test('vérifie la PWA (manifest.webmanifest + Service Worker sw.js) et les invariants accessibilité', async ({
    page,
  }) => {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];

    page.on('console', (message) => {
      if (message.type() === 'error') {
        consoleErrors.push(message.text());
      }
    });

    page.on('pageerror', (error) => {
      pageErrors.push(error.message);
    });

    // 1. Manifest PWA valide servi en preview
    const manifestResponse = await page.request.get('/manifest.webmanifest');
    expect(manifestResponse.status()).toBe(200);
    const manifest = (await manifestResponse.json()) as {
      name?: string;
      short_name?: string;
      lang?: string;
      display?: string;
      icons?: unknown[];
    };
    expect(manifest.name).toContain('Compagnon Cardiomyopathie Ischémique');
    expect(manifest.short_name).toBe('CardioCompagnon');
    expect(manifest.lang).toBe('fr-FR');
    expect(manifest.display).toBe('standalone');
    expect(Array.isArray(manifest.icons) && manifest.icons.length >= 2).toBe(true);

    // 2. Service Worker sw.js présent et enregistrable
    const swResponse = await page.request.get('/sw.js');
    expect(swResponse.status()).toBe(200);
    const swBody = await swResponse.text();
    expect(swBody.length).toBeGreaterThan(200);

    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');

    const swRegistrationResult = await page.evaluate(async () => {
      if (!('serviceWorker' in navigator)) {
        return { supported: false, registered: false, scope: '' };
      }
      const reg = await navigator.serviceWorker.register('/sw.js', { scope: '/' });
      return {
        supported: true,
        registered: Boolean(reg),
        scope: reg.scope,
      };
    });
    expect(swRegistrationResult.supported).toBe(true);
    expect(swRegistrationResult.registered).toBe(true);
    expect(swRegistrationResult.scope).toContain('127.0.0.1');

    // 3. Invariants accessibilité (landmarks, headings, labels) sur les routes principales
    const routesToAudit = [
      '/#/',
      '/#/meds',
      '/#/exams',
      '/#/plan',
      '/#/france',
      '/#/library',
      '/#/settings',
    ];
    for (const route of routesToAudit) {
      await page.goto(route);
      await expect(page.getByRole('main')).toBeVisible();
      await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);

      const a11yAudit = await page.evaluate(() => {
        const hasMain = Boolean(document.querySelector('main#contenu-principal'));
        const hasSkipLink = Boolean(document.querySelector('a[href="#contenu-principal"]'));

        const unlabeledControls: string[] = [];
        const controls = document.querySelectorAll<HTMLElement>(
          'main input:not([type="hidden"]), main select, main textarea',
        );
        for (const el of controls) {
          if (el.offsetParent === null) continue;
          const id = el.getAttribute('id');
          const hasLabelFor = id
            ? Boolean(document.querySelector(`label[for="${CSS.escape(id)}"]`))
            : false;
          const hasWrappingLabel = Boolean(el.closest('label'));
          const hasAria =
            Boolean(el.getAttribute('aria-label')?.trim()) ||
            Boolean(el.getAttribute('aria-labelledby')?.trim());
          if (!hasLabelFor && !hasWrappingLabel && !hasAria) {
            unlabeledControls.push(el.outerHTML.slice(0, 100));
          }
        }

        const unlabeledButtons: string[] = [];
        const buttons = document.querySelectorAll<HTMLButtonElement>('main button');
        for (const btn of buttons) {
          if (btn.offsetParent === null) continue;
          const text = btn.innerText.trim();
          const hasAria =
            Boolean(btn.getAttribute('aria-label')?.trim()) ||
            Boolean(btn.getAttribute('aria-labelledby')?.trim());
          if (!text && !hasAria) {
            unlabeledButtons.push(btn.outerHTML.slice(0, 100));
          }
        }

        return { hasMain, hasSkipLink, unlabeledControls, unlabeledButtons };
      });

      expect(a11yAudit.hasMain, `Landmark main manquant sur ${route}`).toBe(true);
      expect(a11yAudit.hasSkipLink, `Lien d'évitement manquant sur ${route}`).toBe(true);
      expect(
        a11yAudit.unlabeledControls,
        `Champs sans label sur ${route} : ${a11yAudit.unlabeledControls.join(' | ')}`,
      ).toEqual([]);
      expect(
        a11yAudit.unlabeledButtons,
        `Boutons sans nom accessible sur ${route} : ${a11yAudit.unlabeledButtons.join(' | ')}`,
      ).toEqual([]);
    }

    expect(consoleErrors, `Erreurs console inattendues : ${consoleErrors.join(' | ')}`).toEqual([]);
    expect(pageErrors, `Erreurs page inattendues : ${pageErrors.join(' | ')}`).toEqual([]);
  });
});
