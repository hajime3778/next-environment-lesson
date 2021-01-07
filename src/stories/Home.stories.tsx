import { Story, Meta } from '@storybook/react/types-6-0';

import Home from '../pages/index';
import { TodoListProvider } from 'src/context/TodoContext';

export default {
  title: 'Example/Home',
  component: Home,
} as Meta;

const todoListSampleData = [
  {
    id: 0,
    title: 'Sample title1',
    description: 'Sample description1',
  },
  {
    id: 1,
    title: 'Sample title2',
    description: 'Sample description2',
  },
  {
    id: 2,
    title: 'Sample title3',
    description: 'Sample description3',
  },
];

const Template: Story = (args) => (
  <TodoListProvider initTodoList={todoListSampleData}>
    <Home {...args} />
  </TodoListProvider>
);

export const Normal = Template.bind({});
Normal.args = {
  title: 'Title',
};
