import { Story, Meta } from '@storybook/react/types-6-0';

import { Header, HeaderProps } from 'src/components/Header';

export default {
  title: 'Example/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Title',
};

export const VisibleRegister = Template.bind({});
VisibleRegister.args = {
  title: 'Title',
  visibleRegister: true,
};
