import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import { SafeMarkdown } from '../SafeMarkdown';

afterEach(() => {
  cleanup();
});

function renderMarkdown(content: string) {
  return render(
    <MemoryRouter>
      <SafeMarkdown content={content} />
    </MemoryRouter>,
  );
}

describe('SafeMarkdown (parseur et rendu Markdown React pur)', () => {
  it('rend les titres, paragraphes, gras, italique, code inline et citations', () => {
    const md = [
      '### Critere clinique principal',
      '',
      'Le **NT-proBNP** est prefere sous *sacubitril/valsartan* avec suivi `K+` et ***prudence***.',
      '',
      '> Ne modifiez jamais une dose sans avis de votre cardiologue.',
    ].join('\n');

    const { container } = renderMarkdown(md);

    expect(
      screen.getByRole('heading', { level: 3, name: 'Critere clinique principal' }),
    ).toBeInTheDocument();
    expect(container.querySelector('strong')?.textContent).toBe('NT-proBNP');
    expect(container.querySelector('em')?.textContent).toBe('sacubitril/valsartan');
    expect(container.querySelector('code')?.textContent).toBe('K+');
    expect(container.querySelector('blockquote')).toHaveTextContent(
      'Ne modifiez jamais une dose sans avis de votre cardiologue.',
    );
  });

  it('rend les listes a puces, numerotees et imbriquees', () => {
    const md = [
      '- **ALD 5** : insuffisance cardiaque',
      '  - Branche 5.1 : FEVG < 40 %',
      '  - Branche 5.2 : FEVG > 40 %',
      '',
      '1. Consulter le medecin traitant',
      '2. Signer le protocole de soins',
    ].join('\n');

    const { container } = renderMarkdown(md);

    const lists = container.querySelectorAll('ul');
    expect(lists.length).toBe(2);
    expect(screen.getByText('Branche 5.1 : FEVG < 40 %')).toBeInTheDocument();

    const orderedList = container.querySelector('ol');
    expect(orderedList).not.toBeNull();
    expect(within(orderedList as HTMLElement).getAllByRole('listitem')).toHaveLength(2);
  });

  it('rend un tableau GFM avec en-tetes, alignements et formatage inline', () => {
    const md = [
      '| Element | Seuil | Verdict |',
      '|---|:---:|---:|',
      '| **Fer IV** | `CST < 20 %` | *A aborder* |',
      '| **Reglisse** | Tout dosage | **A eviter** |',
    ].join('\n');

    renderMarkdown(md);

    const table = screen.getByRole('table');
    const headers = within(table).getAllByRole('columnheader');
    expect(headers.map((th) => th.textContent)).toEqual(['Element', 'Seuil', 'Verdict']);
    expect(headers[0]).toHaveAttribute('scope', 'col');

    const rows = within(table).getAllByRole('row');
    expect(rows).toHaveLength(3);
    expect(within(rows[1]).getByText('Fer IV').tagName).toBe('STRONG');
    expect(within(rows[1]).getByText('CST < 20 %').tagName).toBe('CODE');
    expect(within(rows[2]).getByText('A eviter').tagName).toBe('STRONG');
  });

  it('neutralise les balises HTML brutes et bloque les liens dangereux javascript:', () => {
    const md = [
      '<script>window.__xss = true;</script>',
      '<img src="x" onerror="alert(1)" />',
      'Lien dangereux : [Cliquez ici](javascript:alert(1)) et lien sur : [Ameli](https://www.ameli.fr).',
    ].join('\n\n');

    const { container } = renderMarkdown(md);

    expect(container.querySelector('script')).toBeNull();
    expect(container.querySelector('img')).toBeNull();
    expect(container.textContent).toContain('<script>window.__xss = true;</script>');
    expect(container.textContent).toContain('Cliquez ici');

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAttribute('href', 'https://www.ameli.fr/');
    expect(links[0]).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('transforme les references italiques reconnues en liens internes sans imbriquer de liens', () => {
    const md = [
      '| Terme | Pour approfondir |',
      '|---|---|',
      '| **FEVG** | *La fraction d\'éjection (FEVG)* |',
      '| **Terme** | *Italique simple* |',
      '',
      'Voir [*La fraction d\'éjection (FEVG)*](/library?article=fraction-dejection) directement.',
    ].join('\n');

    const { container } = render(
      <MemoryRouter>
        <SafeMarkdown
          content={md}
          resolveArticleHref={(label) =>
            label === "La fraction d'éjection (FEVG)"
              ? '/library?article=fraction-dejection'
              : undefined
          }
        />
      </MemoryRouter>,
    );

    const links = screen.getAllByRole('link', { name: "La fraction d'éjection (FEVG)" });
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute('href', '/library?article=fraction-dejection');
    expect(links[1]).toHaveAttribute('href', '/library?article=fraction-dejection');
    expect(container.querySelector('a a')).toBeNull();
    expect(screen.getByText('Italique simple').tagName).toBe('EM');
  });
});
