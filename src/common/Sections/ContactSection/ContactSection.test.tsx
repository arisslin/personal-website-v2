import * as React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import ContactSection from './ContactSection';
import { mockedContactLinks } from '../../../mocks/mockedContactLinks';
import { doSnapshotTest } from '../../helper/testHelper';

describe('ContactSection', () => {
  const component = <ContactSection links={mockedContactLinks} />;

  afterEach(() => {
    cleanup();
  });

  it('displays ContactLinks', () => {
    render(component);

    mockedContactLinks.forEach((link) => {
      const renderedLink = screen.getByText(link.text);

      expect(renderedLink).toHaveAttribute('href', link.href);
      expect(renderedLink.querySelector('svg')).toBeInTheDocument();
    });
  });

  it('does not render if links are empty', () => {
    const { container } = render(<ContactSection links={[]} />);

    expect(container.querySelector('section')).not.toBeInTheDocument();
  });

  doSnapshotTest(component);
});
