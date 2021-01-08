import { Story, Meta } from '@storybook/react/types-6-0';
import TodoEdit from '../pages/[id]';
import { TodoListProvider } from 'src/context/TodoContext';

export default {
  title: 'Example/TodoEdit',
  component: TodoEdit,
} as Meta;

const todoListSampleData = [
  {
    id: 1,
    title: 'Sample title1',
    description: 'Sample description1',
  },
];

const Template: Story = (args) => (
  <TodoListProvider initTodoList={todoListSampleData}>
    <TodoEdit {...args} />
  </TodoListProvider>
);

export const Normal = Template.bind({});
Normal.args = {
  title: 'Title',
};
