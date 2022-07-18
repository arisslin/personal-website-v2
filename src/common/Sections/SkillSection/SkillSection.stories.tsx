import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import SkillSectionComponent, { SkillSectionProps } from './SkillSection';
import { mockedSkillTags } from '../../../mocks/mockedSkillTags';

export default {
  title: 'Sections/SkillSection',
  component: SkillSectionComponent,
  argTypes: {
    tags: {
      description: 'SkillTags which get rendered inside the section.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: getDescription(),
      },
    },
  },
} as Meta;

export const SkillSection: Story<SkillSectionProps> = (args) => (
  <SkillSectionComponent tags={args.tags} />
);

SkillSection.args = {
  tags: mockedSkillTags,
};

function getDescription(): string {
  return (
    '<h2>About</h2>' +
    '<p>' +
    'The <b>SkillSection</b> got developed in Juli 2022. It renders a headline ' +
    'and some propped <b>SkillTags</b>.' +
    '</p>'
  );
}
