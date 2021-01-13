import { Story, Meta } from '@storybook/react/types-6-0';
import type { ReactNode } from 'react';

import { Layout, LayoutProps } from 'src/components/Layout';

export default {
  title: 'Components/Layout',
  component: Layout,
} as Meta;

const Template: Story<LayoutProps> = (args) => <Layout {...args} />;

const sampleChild: ReactNode = <div>This is Sample</div>;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Title',
  children: sampleChild,
};

export const VisibleRegister = Template.bind({});
VisibleRegister.args = {
  title: 'Title',
  visibleRegister: true,
  children: sampleChild,
};
