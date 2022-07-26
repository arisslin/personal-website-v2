import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NavigationComponent from './Navigation';

export default {
  title: 'Components/Navigation',
  component: NavigationComponent,
  parameters: {
    docs: {
      description: {
        component: 'Follows',
      },
    },
  },
} as Meta;

export const navigation: Story = () => <NavigationComponent />;
