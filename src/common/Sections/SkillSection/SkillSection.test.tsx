import * as React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import SkillSection, { skillTags } from './SkillSection';
import { doSnapshotTest } from '../../helper/testHelper';

describe('SkillSection', () => {
  const component = <SkillSection tags={skillTags} />;

  afterEach(() => {
    cleanup();
  });

  it('renders with a headline h2', () => {
    render(component);

    const renderedComponent = screen.getByText('Skills');

    expect(renderedComponent).toBeInTheDocument();
    expect(renderedComponent.tagName).toBe('H2');
  });

  it('it displays SkillTags', () => {
    render(component);

    skillTags.forEach((tag) => {
      expect(screen.getByText(tag.text)).toBeInTheDocument();
    });
  });

  it('does not render if tags are empty', () => {
    render(<SkillSection tags={[]} />);

    expect(screen.queryByText('Skills')).not.toBeInTheDocument();
  });

  doSnapshotTest(component);
});
