import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation, { testId } from './Navigation';

describe('Navigation', () => {
  const component = <Navigation />;

  it('renders without links', () => {
    render(component);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
