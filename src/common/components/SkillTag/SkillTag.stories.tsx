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
  return '<h2>About</h2>' + '<p>' + '....' + '</p>';
}

export const SkillTag: Story = () => <SkillTagComponent />;
