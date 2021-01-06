import { useContext } from 'react';
import { Layout } from 'src/components/Layout';
import { TodoItem } from 'src/components/TodoItem';
import { TodoListContext } from 'src/context/TodoContext';

export default function Home() {
  const { todoList } = useContext(TodoListContext);
  return (
    <Layout title="Title" visibleRegister={true}>
      {todoList.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </Layout>
  );
}
