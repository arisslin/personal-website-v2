import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Page from './Page';

describe('Page', () => {
  const child = 'Test';
  const title = 'Andreas Rissling';

  const component = <Page title={title}>{child}</Page>;

  it('renders with children', () => {
    render(component);

    expect(screen.getByText(child)).toBeInTheDocument();
  });

  it('renders document with dynamic title', async () => {
    render(component);

    await waitFor(() => expect(document.title).toBe(title));
  });
});
