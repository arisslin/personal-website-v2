import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation, { testId } from './Navigation';
import { mockedNavigationLinks } from '../../../mocks/mockedNavigationLinks';

describe('Navigation', () => {
  const component = <Navigation links={mockedNavigationLinks} />;

  it('renders with empty links', () => {
    render(<Navigation links={[]} />);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  it('renders with links', () => {
    render(component);

    mockedNavigationLinks.forEach((link) => {
      const renderedLink = screen.getByText(link.text);

      expect(renderedLink).toBeInTheDocument();
      expect(renderedLink.getAttribute('href')).toBe(link.href);
    });
  });
});
