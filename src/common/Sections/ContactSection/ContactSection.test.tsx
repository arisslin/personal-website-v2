import * as React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import ContactSection from './ContactSection';

describe('ContactSection', () => {
  const component = <ContactSection />;

  afterEach(() => {
    cleanup();
  });

  it('renders with a headline h2', () => {
    render(component);

    const renderedComponent = screen.getByText('Kontakt');

    expect(renderedComponent).toBeInTheDocument();
    expect(renderedComponent.tagName).toBe('H2');
  });
});
