import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ContactLink from './ContactLink';

describe('ContactLink', () => {
  const text = 'Test';
  const href = 'www.gueteklasse-a.de';
  const component = <ContactLink href={href}>{text}</ContactLink>;

  it('renders with child', () => {
    render(component);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('renders with children', () => {
    const componentWithChildren = (
      <ContactLink href={href}>
        <div>Child 1</div>
        <div>Child 2</div>
      </ContactLink>
    );

    render(componentWithChildren);

    const link = screen.getByRole('link');

    expect(link.getAttribute('href')).toBe(href);
    expect(link.innerHTML).toBe('<div>Child 1</div><div>Child 2</div>');
  });

  it('renders as an anchor tag', () => {
    render(component);

    expect(screen.getByText(text).tagName).toBe('A');
  });

  it('renders with an href', () => {
    render(component);

    expect(screen.getByText(text).getAttribute('href')).toBe(href);
  });

  it('opens links in a new browser tab', () => {
    render(component);

    expect(screen.getByText(text).getAttribute('target')).toBe('_blank');
  });
});
