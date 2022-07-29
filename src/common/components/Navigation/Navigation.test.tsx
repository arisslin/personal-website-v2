import * as React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Navigation from './Navigation';
import { mockedNavigationLinks } from '../../../mocks/mockedNavigationLinks';
import { doSnapshotTest, fireClickEvent } from '../../helper/testHelper';

describe('Navigation', () => {
  const component = <Navigation links={mockedNavigationLinks} />;

  afterEach(() => {
    cleanup();
  });

  it('renders with empty links', () => {
    render(<Navigation links={[]} />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders with links', () => {
    render(component);

    mockedNavigationLinks.forEach((link) => {
      const renderedLink = screen.getByText(link.text);

      expect(renderedLink).toBeInTheDocument();
      expect(renderedLink.getAttribute('href')).toBe(link.href);
    });
  });

  it('changes it style on menu icon click', () => {
    render(component);

    const classNameBeforeClick = screen.getByRole('navigation').className;
    const menuIcon = screen.getByRole('navigation').querySelector('svg');

    menuIcon && fireClickEvent(menuIcon, true, true);

    const classNameAfterClick = screen.getByRole('navigation').className;

    expect(classNameBeforeClick).not.toBe(classNameAfterClick);
  });

  doSnapshotTest(component);
});
