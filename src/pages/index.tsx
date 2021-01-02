import React from 'react';
import { Layout } from 'src/components/Layout';
import { TodoItem } from 'src/components/TodoItem';
import { Todo } from 'src/models/Todo';

const sampleTodoList: Todo[] = [
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

export default function Home() {
  const todoList: Todo[] = sampleTodoList;
  return (
    <Layout title="Title" visibleRegister={true}>
      {todoList.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </Layout>
  );
}
