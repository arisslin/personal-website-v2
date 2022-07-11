import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ContactLink from './ContactLink';

describe('ContactLink', () => {
  const text = 'Test';
  const href = 'www.gueteklasse-a.de';
  const component = <ContactLink href={href}>{text}</ContactLink>;

  it('renders with children', () => {
    render(component);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders as an anchor tag', () => {
    render(component);

    expect(screen.getByText(text).tagName).toBe('A');
  });

  it('renders with an href', () => {
    render(component);

    expect(screen.getByText(text).getAttribute('href')).toBe(href);
  });
});
