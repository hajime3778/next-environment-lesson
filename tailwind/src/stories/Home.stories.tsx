// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import type { Meta, Story } from '@storybook/react/types-6-0';
// eslint-disable-next-line no-restricted-imports
import React from 'react';

import { Home } from '../pages/index';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Example/Home',
  component: Home,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => {
  return <Home {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
