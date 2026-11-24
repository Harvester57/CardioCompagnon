import { expect, test } from '@playwright/test';

const ROUTES_TO_VERIFY: readonly {
  navLabel: string;
  urlPattern: RegExp;
  headingPattern: RegExp;
}[] = [
  { navLabel: "Aujourd'hui", urlPattern: /#\/$/, headingPattern: /^Aujourd'hui$/ },
  {
    navLabel: 'Traitements & Sécurité',
    urlPattern: /#\/meds$/,
    headingPattern: /Traitements & Sécurité/,
  },
  {
    navLabel: 'Examens & Chiffres',
    urlPattern: /#\/exams$/,
    headingPattern: /Examens & Chiffres/,
  },
  {
    navLabel: 'Mon Plan & Visites',
    urlPattern: /#\/plan$/,
    headingPattern: /Mon Plan & Consultations/,
  },
  {
    navLabel: 'Vie en France & Droits',
    urlPattern: /#\/france$/,
    headingPattern: /Vie en France & Droits/,
  },
  {
    navLabel: 'Bibliothèque',
    urlPattern: /#\/library$/,
    headingPattern: /Bibliothèque scientifique/,
  },
  {
    navLabel: 'Paramètres & Profil',
    urlPattern: /#\/settings$/,
    headingPattern: /Paramètres & Profil/,
  },
];

test.describe('Smoke E2E CardioCompagnon', () => {
  test('navigue sur les 7 routes en français accentué sans aucune erreur console ni pageerror', async ({
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

    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');

    await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
    await expect(page).toHaveTitle(/Compagnon Cardiomyopathie Ischémique/);

    const sidebarNav = page.getByRole('navigation', { name: 'Modules' });
    await expect(sidebarNav).toBeVisible();

    for (const route of ROUTES_TO_VERIFY) {
      await expect(sidebarNav.getByRole('link', { name: route.navLabel })).toBeVisible();
    }

    for (const route of ROUTES_TO_VERIFY) {
      await sidebarNav.getByRole('link', { name: route.navLabel }).click();
      await expect(page).toHaveURL(route.urlPattern);
      await expect(page.getByRole('main')).toBeVisible();
      await expect(page.getByRole('heading', { level: 1 })).toContainText(route.headingPattern);
    }

    expect(consoleErrors, `Erreurs console inattendues : ${consoleErrors.join(' | ')}`).toEqual([]);
    expect(pageErrors, `Erreurs page inattendues : ${pageErrors.join(' | ')}`).toEqual([]);
  });
});
