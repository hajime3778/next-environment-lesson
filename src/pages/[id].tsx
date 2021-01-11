import { useContext, useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { Layout } from 'src/components/Layout';
import { Button } from 'src/components/Button';
import { TextBox } from 'src/components/TextBox';
import { TodoListContext } from 'src/context/TodoContext';

const TodoEdit = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as string);
  const { todoList } = useContext(TodoListContext);
  const todo = todoList.find((todo) => todo.id === id);
  const [title, setTitle] = useState(todo?.title || '');
  const [description, setDescription] = useState(todo?.description || '');

  const titleChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const descriptionChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <Layout title="TodoEdit">
      <TextBox value={title} placeholder="Title" onChange={titleChanged} />
      <TextBox value={description} placeholder="Description" onChange={descriptionChanged} />
      <br />
      <Button style={{ width: '90%' }} primary={true} label="Save" />
    </Layout>
  );
};

export default TodoEdit;
