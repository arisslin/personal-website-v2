import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Layout from './Layout';
import { mockQuerySiteMetaData } from '../../../mocks/mockedQueriesForJest';

describe('Layout', () => {
  mockQuerySiteMetaData();

  const child = 'Test';
  const title = 'Andreas Rissling';
  const component = <Layout title={title}>{child}</Layout>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with children', () => {
    render(component);

    expect(screen.getByText(child)).toBeInTheDocument();
  });

  it('renders document with dynamic title', async () => {
    render(component);

    await waitFor(() => expect(document.title).toBe(title));
  });
});
