import { Story, Meta } from '@storybook/react/types-6-0';

import { TextBox, Props } from 'src/components/TextBox';

export default {
  title: 'Example/TextBox',
  component: TextBox,
} as Meta;

const Template: Story<Props> = (args) => <TextBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  placeholder: 'sample placeholder',
  value: '',
};
