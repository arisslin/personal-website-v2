import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Page from './Page';

describe('Page', () => {
  it('renders with children', () => {
    const child = 'Test';

    const { container } = render(<Page>{child}</Page>);

    expect(screen.getByText(child)).toBeInTheDocument();
  });
});
