import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import NavigationComponent, { NavigationProps } from './Navigation';
import { mockedNavigationLinks } from '../../../mocks/mockedNavigationLinks';

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

export const navigation: Story<NavigationProps> = (args) => (
  <NavigationComponent links={args.links} />
);
navigation.args = {
  links: mockedNavigationLinks,
};
