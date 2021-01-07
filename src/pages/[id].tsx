import { useContext } from 'react';
import { useRouter } from 'next/router';
import { Layout } from 'src/components/Layout';
import { TodoListContext } from 'src/context/TodoContext';

export default function TodoEdit() {
  const router = useRouter();
  const id = parseInt(router.query.id as string);
  const { todoList } = useContext(TodoListContext);

  const todo = todoList.find((todo) => todo.id === id);

  return (
    <Layout title="TodoEdit">
      <p>{todo.title}</p>
      <p>{todo.description}</p>
    </Layout>
  );
}
