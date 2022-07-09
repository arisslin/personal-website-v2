import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import SkillTagComponent from './SkillTag';

export default {
  title: 'Components/SkillTag',
  component: SkillTagComponent,
  parameters: {
    docs: {
      description: {
        component: getDescription(),
      },
    },
  },
} as Meta;

function getDescription(): string {
  return (
    '<h2>About</h2>' +
    '<p>' +
    'The <b>SkillTag</b> was developed in Juli 2022. It displays the ' +
    'name of a propped skill.' +
    '</p>'
  );
}

export const SkillTag: Story = () => <SkillTagComponent text='TypeScript' />;
