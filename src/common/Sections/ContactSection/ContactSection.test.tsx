import * as React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import ContactSection from './ContactSection';
import { mockedContactLinks } from '../../../mocks/mockedContactLinks';

describe('ContactSection', () => {
  const component = <ContactSection links={mockedContactLinks} />;

  afterEach(() => {
    cleanup();
  });

  it('renders with a headline h2', () => {
    render(component);

    const renderedComponent = screen.getByText('Kontakt');

    expect(renderedComponent).toBeInTheDocument();
    expect(renderedComponent.tagName).toBe('H2');
  });

  it('displays ContactLinks', () => {
    render(component);

    mockedContactLinks.forEach((link) => {
      const renderedLink = screen.getByText(link.text);

      expect(renderedLink).toHaveAttribute('href', link.href);
    });
  });
});
