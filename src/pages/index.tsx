import { useContext } from 'react';
import { useRouter } from 'next/router';
import { Layout } from 'src/components/Layout';
import { TodoItem } from 'src/components/TodoItem';
import { TodoListContext } from 'src/context/TodoContext';

export default function Home() {
  const router = useRouter();
  const { todoList } = useContext(TodoListContext);
  return (
    <Layout title="Title" visibleRegister={true}>
      {todoList.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} onClick={() => router.push(`/${todo.id}`)} />;
      })}
    </Layout>
  );
}
