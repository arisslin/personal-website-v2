import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ContactLink from './ContactLink';

describe('ContactLink', () => {
  it('renders with children', () => {
    const text = 'Test';
    const component = <ContactLink>{text}</ContactLink>;

    render(component);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
