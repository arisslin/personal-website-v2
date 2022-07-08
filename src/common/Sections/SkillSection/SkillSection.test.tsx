import * as React from 'react';
import { render, screen } from '@testing-library/react';
import SkillSection, { skillTags } from './SkillSection';

describe('SkillSection', () => {
  it('it displays SkillTags', () => {
    const component = <SkillSection tags={skillTags} />;

    render(component);

    skillTags.forEach((tag) => {
      expect(screen.getByText(tag.text)).toBeInTheDocument();
    });
  });
});
