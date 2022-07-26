import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ContactLink from './ContactLink';
import { FaGlobe } from 'react-icons/fa';
import { doSnapshotTest } from '../../helper/testHelper';

describe('ContactLink', () => {
  const text = 'Test';
  const href = 'www.gueteklasse-a.de';
  const component = <ContactLink href={href} text={text} icon={FaGlobe} />;
  const componentWithoutIcon = <ContactLink href={href} text={text} />;

  it('renders with a text', () => {
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

  it('renders with an optional icon', () => {
    const { container } = render(component);

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders without an optional icon', () => {
    const { container } = render(componentWithoutIcon);

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(container.querySelector('svg')).not.toBeInTheDocument();
  });

  it('opens links in a new browser tab', () => {
    render(component);

    expect(screen.getByText(text).getAttribute('target')).toBe('_blank');
  });

  it('renders link with rel noreferrer', () => {
    render(component);

    expect(screen.getByText(text).getAttribute('rel')).toBe('noreferrer');
  });

  doSnapshotTest(component, 'with icon');
  doSnapshotTest(componentWithoutIcon, 'without icon');
});
