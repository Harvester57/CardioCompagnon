import 'fake-indexeddb/auto';
import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { GLOSSARY_TERMS, getAllArticles } from '../../../content/fr';
import {
  DbProvider,
  activeDb,
  createDefaultProfile,
  createDefaultSettings,
  ensureDbInitialized,
  saveAppSettings,
  saveProfile,
} from '../../../db';
import * as services from '../../../services';
import type { WikiArticle } from '../../../types';
import { ArticleReader } from '../ArticleReader';
import LibraryPage from '../index';

vi.mock('../../../services', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../../../services')>();
  return {
    ...actual,
    askWikiWithAi: vi.fn(),
  };
});

const mockedAskWikiWithAi = vi.mocked(services.askWikiWithAi);

function renderLibrary(initialEntry = '/library') {
  return render(
    <DbProvider initialDemoMode={false}>
      <MemoryRouter initialEntries={[initialEntry]}>
        <Routes>
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/settings" element={<div>Page Parametres</div>} />
        </Routes>
      </MemoryRouter>
    </DbProvider>,
  );
}

beforeEach(async () => {
  mockedAskWikiWithAi.mockReset();
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
  await ensureDbInitialized(activeDb);
  await activeDb.profile.put(createDefaultProfile());
  await activeDb.settings.put(createDefaultSettings());
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe('Module 6 -- Bibliotheque scientifique (LibraryPage)', () => {
  it('affiche L essentiel par defaut, permet de basculer de niveau, et filtre par categorie et profil clinique', async () => {
    renderLibrary();

    const articlesList = screen.getByRole('list', { name: 'Liste des fiches scientifiques' });
    // Vue par defaut : L'essentiel (18 fiches)
    expect(within(articlesList).getAllByRole('listitem')).toHaveLength(18);
    expect(screen.getByText('18 fiches affichées sur 111')).toBeInTheDocument();

    // Basculer sur Toutes (111)
    fireEvent.click(screen.getByRole('button', { name: /Toutes \(111\)/i }));
    expect(within(articlesList).getAllByRole('listitem')).toHaveLength(111);
    expect(screen.getByText('111 fiches affichées sur 111')).toBeInTheDocument();

    // Basculer sur Etudes & references (16)
    fireEvent.click(screen.getByRole('button', { name: /Études & références \(16\)/i }));
    expect(within(articlesList).getAllByRole('listitem')).toHaveLength(16);

    // Revenir sur Toutes (111) et filtrer par categorie "france" (3 articles)
    fireEvent.click(screen.getByRole('button', { name: /Toutes \(111\)/i }));
    fireEvent.click(screen.getByRole('button', { name: /France & Droits \(3\)/i }));
    expect(within(articlesList).getAllByRole('listitem')).toHaveLength(3);
    expect(
      screen.getByText(/Vivre avec une insuffisance cardiaque en France/i),
    ).toBeInTheDocument();

    // Reinitialiser la categorie sur Toutes les categories
    fireEvent.click(screen.getByRole('button', { name: /Toutes les catégories \(111\)/i }));
    expect(within(articlesList).getAllByRole('listitem')).toHaveLength(111);

    // Filtre "Pertinent pour mon profil" : sans modules optionnels, masque les fiches strictement specifiques (ex. CTO)
    const profileFilterButton = screen.getByRole('button', {
      name: /Pertinent pour mon profil/i,
    });
    fireEvent.click(profileFilterButton);

    const defaultRelevantCount = within(articlesList).getAllByRole('listitem').length;
    expect(defaultRelevantCount).toBeLessThan(111);
    expect(screen.queryByText(/Occlusion coronaire chronique/i)).not.toBeInTheDocument();

    // Activer le module CTO dans PatientProfile : la fiche CTO devient pertinente
    const defaultProfile = createDefaultProfile();
    await saveProfile(activeDb, {
      modules: { ...defaultProfile.modules, cto: true },
    });

    await waitFor(() => {
      expect(
        within(articlesList).getByRole('heading', { name: /Occlusion coronaire chronique/i }),
      ).toBeInTheDocument();
    });
  });

  it('effectue une recherche instantanee sans accents couvrant les 111 articles et le glossaire', () => {
    renderLibrary();

    const searchInput = screen.getByLabelText(/Recherche plein texte hors ligne/i);
    fireEvent.change(searchInput, { target: { value: 'fraction dejection' } });

    const articlesList = screen.getByRole('list', { name: 'Liste des fiches scientifiques' });
    const matchedItems = within(articlesList).getAllByRole('listitem');
    expect(matchedItems.length).toBeGreaterThan(0);
    expect(matchedItems.length).toBeLessThan(111);
    expect(
      within(articlesList).getByRole('heading', { name: /Fraction d'éjection/i }),
    ).toBeInTheDocument();

    // Correspondances dans le glossaire affichees pour la meme recherche sans accents
    expect(screen.getByText(/Correspondances dans le glossaire/i)).toBeInTheDocument();
    expect(
      screen.getByText(/FEVG \(fraction d'éjection du ventricule gauche\)/i),
    ).toBeInTheDocument();
  });

  it('ouvre directement un article via ?article=<slug>, rend les tableaux Markdown et les liens internes', () => {
    renderLibrary('/library?article=tableau-preuves-nutrition-complements');

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Tableau des niveaux de preuve : nutrition et compléments/i,
      }),
    ).toBeInTheDocument();

    // Badges confiance, volatilite, date asOf et bandeau medical
    expect(screen.getByText(/Confiance moyenne à élevée/i)).toBeInTheDocument();
    expect(screen.getByText(/Mise à jour régulière/i)).toBeInTheDocument();
    expect(screen.getByText(/À jour : 2026-11-25/i)).toBeInTheDocument();
    expect(screen.getByRole('note', { name: 'Avertissement médical' })).toBeInTheDocument();

    // Encadre En clair
    expect(screen.getByRole('heading', { level: 2, name: 'En clair' })).toBeInTheDocument();

    // Tableaux Markdown GFM rendus en HTML semantique React pur
    const tables = screen.getAllByRole('table');
    expect(tables.length).toBeGreaterThanOrEqual(3);
    expect(within(tables[0]).getByText('Fer intraveineux (si carence)')).toBeInTheDocument();

    // Bloc Sources scientifiques
    expect(
      screen.getByRole('heading', { level: 2, name: 'Sources scientifiques' }),
    ).toBeInTheDocument();

    // Navigation interne vers une fiche liee
    fireEvent.click(screen.getByRole('button', { name: /Coenzyme Q10/i }));
    expect(
      screen.getByRole('heading', { level: 1, name: /Coenzyme Q10/i }),
    ).toBeInTheDocument();
  });

  it('affiche le bandeau reglementaire legal sur une fiche France ouverte par query param', () => {
    renderLibrary('/library?article=vivre-avec-insuffisance-cardiaque-en-france');

    expect(screen.getByRole('note', { name: 'Avertissement réglementaire' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Vivre avec une insuffisance cardiaque en France/i,
      }),
    ).toBeInTheDocument();
  });

  it('affiche tous les termes du glossaire, filtre par lettre/recherche et ouvre la fiche associee', () => {
    renderLibrary();

    fireEvent.click(screen.getByRole('tab', { name: new RegExp(`Glossaire \\(${GLOSSARY_TERMS.length}\\)`) }));

    expect(
      screen.getByText(`${GLOSSARY_TERMS.length} termes affichés sur ${GLOSSARY_TERMS.length}`),
    ).toBeInTheDocument();

    // Filtre alphabetique sur "E"
    const alphaGroup = screen.getByRole('group', { name: 'Filtrer le glossaire par lettre' });
    fireEvent.click(within(alphaGroup).getByRole('button', { name: 'E' }));
    expect(screen.getByText(/EPOF \(signes d’alerte\)/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/FEVG \(fraction d'éjection du ventricule gauche\)/i),
    ).not.toBeInTheDocument();

    // Reinitialiser puis rechercher sans accent
    fireEvent.click(within(alphaGroup).getByRole('button', { name: 'Tous' }));
    const glossarySearch = screen.getByLabelText(/Rechercher un terme ou un acronyme/i);
    fireEvent.change(glossarySearch, { target: { value: 'decompensation' } });

    expect(screen.getByText(/EPOF \(signes d’alerte\)/i)).toBeInTheDocument();

    // Clic sur le lien vers la fiche associee
    const openLinkedArticleBtn = screen.getAllByRole('button', { name: /Lire la fiche :/i })[0];
    fireEvent.click(openLinkedArticleBtn);

    expect(screen.getByRole('button', { name: /Retour à la bibliothèque/i })).toBeInTheDocument();
  });

  it('affiche l etat pedagogique desactive du Q&A BYOK par defaut avec lien vers /settings', () => {
    renderLibrary();

    fireEvent.click(screen.getByRole('tab', { name: /Questions IA/i }));

    const qaPanel = screen.getByRole('tabpanel', { name: /Questions IA/i });
    expect(within(qaPanel).getByText(/Désactivé par défaut : fonctionnement 100 % hors ligne/i)).toBeInTheDocument();
    expect(
      within(qaPanel).getByText(/Aucune question et aucune donnée ne quittent votre appareil/i),
    ).toBeInTheDocument();

    const settingsLink = within(qaPanel).getByRole('link', {
      name: /Configurer l'assistant IA dans les Paramètres/i,
    });
    expect(settingsLink).toHaveAttribute('href', '/settings');
    expect(screen.queryByLabelText(/Votre question en français/i)).not.toBeInTheDocument();
  });

  it('permet de poser une question au Q&A BYOK actif avec bandeau vie privee et citations cliquables', async () => {
    await saveAppSettings(activeDb, {
      aiHelper: {
        enabled: true,
        provider: 'mistral',
        modelName: 'mistral-small-latest',
        apiKey: 'cle-test-fictive',
      },
    });

    mockedAskWikiWithAi.mockResolvedValueOnce({
      answerFr:
        'L **IRM cardiaque** mesure en moyenne une FEVG plus basse d environ 5,5 points par rapport a l ETT.',
      citedArticles: [
        {
          slug: 'fraction-dejection',
          titleFr: "Fraction d'éjection : comprendre la FEVG (ETT et IRM)",
        },
      ],
      disclaimerFr:
        'Information documentaire uniquement ; parlez-en a votre cardiologue.',
    });

    renderLibrary('/library?tab=qa');

    await waitFor(() => {
      expect(screen.getByRole('note', { name: 'Consentement et vie privée' })).toBeInTheDocument();
    });

    expect(screen.getByText(/numéro de sécurité sociale \(NIR\)/i)).toBeInTheDocument();

    const textarea = screen.getByLabelText(/Votre question en français/i);
    fireEvent.change(textarea, {
      target: { value: 'Quelle difference entre ETT et IRM pour la FEVG ?' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Interroger la bibliothèque/i }));

    await waitFor(() => {
      expect(mockedAskWikiWithAi).toHaveBeenCalledTimes(1);
    });

    const [calledConfig, calledQuestion, calledArticles] = mockedAskWikiWithAi.mock.calls[0];
    expect(calledConfig.enabled).toBe(true);
    expect(calledConfig.provider).toBe('mistral');
    expect(calledQuestion).toBe('Quelle difference entre ETT et IRM pour la FEVG ?');
    expect(calledArticles).toHaveLength(getAllArticles().length);

    expect(
      screen.getByText(/mesure en moyenne une FEVG plus basse d environ 5,5 points/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Information documentaire uniquement ; parlez-en a votre cardiologue./i),
    ).toBeInTheDocument();

    // Cliquer sur l'article cite ouvre la fiche directement dans le lecteur
    fireEvent.click(
      screen.getByRole('button', {
        name: /Fraction d'éjection : comprendre la FEVG/i,
      }),
    );

    expect(
      screen.getByRole('heading', { level: 1, name: /Fraction d'éjection/i }),
    ).toBeInTheDocument();
  });

  it('rend cliquables les liens de la colonne Pour approfondir et les renvois internes entre fiches', () => {
    renderLibrary('/library?article=comprendre-le-diagnostic');

    const table = screen.getByRole('table');
    const fevgLink = within(table).getByRole('link', {
      name: "La fraction d'éjection (FEVG)",
    });
    expect(fevgLink).toHaveAttribute('href', '/library?article=fraction-dejection');

    const icmLinks = within(table).getAllByRole('link', {
      name: 'La cardiomyopathie ischémique',
    });
    expect(icmLinks).toHaveLength(3);
    for (const link of icmLinks) {
      expect(link).toHaveAttribute('href', '/library?article=cardiomyopathie-ischemique');
    }

    // Renvoi inline en italique automatiquement resolu en lien interne
    const pillarsLink = screen.getByRole('link', {
      name: "Les médicaments de l'insuffisance cardiaque (4 piliers)",
    });
    expect(pillarsLink).toHaveAttribute('href', '/library?article=medicaments-insuffisance-cardiaque');

    // Cliquer sur un lien de la colonne ouvre directement la fiche cible
    fireEvent.click(fevgLink);
    expect(
      screen.getByRole('heading', { level: 1, name: "La fraction d'éjection (FEVG)" }),
    ).toBeInTheDocument();
  });

  it('rend les points cles (keyTakeawaysFr) et les sections evidence depliables dans ArticleReader', () => {
    const sampleArticle: WikiArticle = {
      slug: 'exemple-test',
      sourceWikiPath: 'wiki/topics/example.md',
      titleFr: 'Fiche exemple pour test',
      category: 'diagnostic',
      readingTier: 'essential',
      asOf: '2026-11-25',
      confidence: 'high',
      volatility: 'stable',
      tags: ['test'],
      aliases: [],
      linkedModules: ['core'],
      plainSummaryFr: 'Résumé simple en langage clair.',
      keyTakeawaysFr: [
        'Premier repère concret pour le quotidien.',
        'Deuxième repère à aborder avec votre cardiologue.',
      ],
      sections: [
        {
          headingFr: 'Explication pratique',
          bodyMarkdownFr: 'Texte principal accessible.',
          depth: 'patient',
        },
        {
          headingFr: 'Ce que disent les études cliniques',
          bodyMarkdownFr: 'Détails statistiques réservés à la section dépliable.',
          depth: 'evidence',
        },
      ],
      relatedArticleSlugs: [],
      sources: [{ label: 'ESC 2026', detail: 'Recommandations européennes' }],
      disclaimerType: 'medical',
    };

    render(
      <MemoryRouter>
        <ArticleReader
          article={sampleArticle}
          onBack={vi.fn()}
          onOpenArticle={vi.fn()}
        />
      </MemoryRouter>,
    );

    expect(screen.getByText('À retenir en priorité')).toBeInTheDocument();
    expect(screen.getByText('Premier repère concret pour le quotidien.')).toBeInTheDocument();
    expect(screen.getByText(/Pour aller plus loin \(données d’études\)/i)).toBeInTheDocument();

    const evidenceDetails = document.getElementById('section-exemple-test-1') as HTMLDetailsElement;
    expect(evidenceDetails).not.toBeNull();
    expect(evidenceDetails.open).toBe(false);

    // Cliquer sur l'entrée du sommaire déplie automatiquement la section d'études
    fireEvent.click(screen.getByRole('button', { name: /Ce que disent les études cliniques/i }));
    expect(evidenceDetails.open).toBe(true);
  });
});
