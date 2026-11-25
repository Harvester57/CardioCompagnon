import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { DateInput } from '../DateInput';
import { formatIsoToFrenchDate, parseFrenchOrIsoDate } from '../date-utils';

afterEach(() => {
  cleanup();
});

describe('DateInput', () => {
  it('formate et analyse les dates francaises et ISO', () => {
    expect(formatIsoToFrenchDate('2026-11-24')).toBe('24/11/2026');
    expect(formatIsoToFrenchDate('')).toBe('');
    expect(parseFrenchOrIsoDate('24/11/2026')).toBe('2026-11-24');
    expect(parseFrenchOrIsoDate('2026-11-24')).toBe('2026-11-24');
    expect(parseFrenchOrIsoDate('31/02/2026')).toBeNull();
  });

  it('affiche le calendrier entierement en francais et permet de choisir une date', () => {
    const onChange = vi.fn();
    render(
      <div>
        <label htmlFor="test-date">Date du relevé</label>
        <DateInput id="test-date" value="2026-11-24" onChange={onChange} />
      </div>,
    );

    const input = screen.getByLabelText('Date du relevé');
    expect(input).toHaveValue('24/11/2026');

    fireEvent.click(screen.getByRole('button', { name: 'Ouvrir le calendrier' }));

    const dialog = screen.getByRole('dialog', { name: /Calendrier — Novembre 2026/i });
    expect(dialog).toBeInTheDocument();

    // En-tetes de jours en francais (lundi en premier)
    for (const shortDay of ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di']) {
      expect(within(dialog).getByText(shortDay)).toBeInTheDocument();
    }

    // Boutons d'action en francais
    expect(within(dialog).getByRole('button', { name: 'Effacer' })).toBeInTheDocument();
    expect(within(dialog).getByRole('button', { name: "Aujourd'hui" })).toBeInTheDocument();

    // Selection d'un jour dans la grille
    fireEvent.click(within(dialog).getByRole('button', { name: 'Mercredi 18 novembre 2026' }));
    expect(onChange).toHaveBeenCalledWith('2026-11-18');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('respecte la borne max et masque Effacer quand allowClear est false', () => {
    const onChange = vi.fn();
    render(
      <DateInput
        id="bounded-date"
        aria-label="Date bornée"
        value="2026-11-24"
        max="2026-11-25"
        allowClear={false}
        onChange={onChange}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Ouvrir le calendrier' }));
    const dialog = screen.getByRole('dialog');

    expect(within(dialog).queryByRole('button', { name: 'Effacer' })).not.toBeInTheDocument();
    expect(within(dialog).getByRole('button', { name: 'Jeudi 26 novembre 2026' })).toBeDisabled();
    expect(
      within(dialog).getByRole('button', { name: 'Mercredi 25 novembre 2026' }),
    ).not.toBeDisabled();
  });

  it('accepte la saisie clavier au format JJ/MM/AAAA et ISO ainsi que la fermeture par Echap', () => {
    const onChange = vi.fn();
    render(
      <DateInput
        id="typed-date"
        aria-label="Date saisie"
        value="2026-11-24"
        onChange={onChange}
      />,
    );

    const input = screen.getByLabelText('Date saisie');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '05/12/2026' } });
    expect(onChange).toHaveBeenCalledWith('2026-12-05');

    fireEvent.change(input, { target: { value: '2026-10-01' } });
    expect(onChange).toHaveBeenCalledWith('2026-10-01');

    fireEvent.click(screen.getByRole('button', { name: 'Ouvrir le calendrier' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
