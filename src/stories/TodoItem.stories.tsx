import { Story, Meta } from '@storybook/react/types-6-0';
import { Todo } from 'src/models/Todo';

import { TodoItem, Props } from '../components/TodoItem';

export default {
  title: 'Example/TodoItem',
  component: TodoItem,
} as Meta;

const Template: Story<Props> = (args) => <TodoItem {...args} />;

const sampleTodo: Todo = {
  id: 0,
  title: 'Sample title',
  description: 'Sample description',
};

export const Normal = Template.bind({});
Normal.args = {
  todo: sampleTodo,
};