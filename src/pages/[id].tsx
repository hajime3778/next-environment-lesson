import { useContext, useEffect, useState, ChangeEvent, Fragment } from 'react';
import { useRouter } from 'next/router';
import { Layout } from 'src/components/Layout';
import { Button } from 'src/components/Button';
import { TextBox } from 'src/components/TextBox';
import { TodoListContext } from 'src/context/TodoContext';
import { Todo } from 'src/models/Todo';

const TodoEdit = () => {
  const router = useRouter();
  const { todoList, setTodoList } = useContext(TodoListContext);
  const initTodo: Todo = { id: 0, title: '', description: '' };
  const [todo, setTodo] = useState<Todo>(initTodo);

  const isCreate = router.query.id === 'create-todo';

  useEffect(() => {
    const id = parseInt(router.query.id as string);
    const newTodo = todoList.find((todo) => todo.id === id);
    setTodo(newTodo);
  }, [setTodo, todoList, router.query.id]);

  const titleChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const newTodo = Object.assign({}, todo);
    newTodo.title = e.target.value;
    setTodo(newTodo);
  };
  const descriptionChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const newTodo = Object.assign({}, todo);
    newTodo.description = e.target.value;
    setTodo(newTodo);
  };
  const createClicked = () => {
    const newId = todoList.length === 0 ? 0 : Math.max(...todoList.map((todo) => todo.id)) + 1;
    const newTodoList = todoList.slice();
    const newTodo: Todo = {
      id: newId,
      title: todo.title,
      description: todo.description,
    };
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
    router.push('/');
  };
  const updateClicked = () => {
    const newTodoList = todoList.map((newTodo) => {
      if (newTodo.id === todo.id) {
        newTodo.title = todo.title;
        newTodo.description = todo.description;
      }
      return newTodo;
    });
    setTodoList(newTodoList);
    router.push('/');
  };
  const deleteClicked = () => {
    const newTodoList = todoList.filter((newTodo) => newTodo.id !== todo.id);
    setTodoList(newTodoList);
    router.push('/');
  };

  return (
    <Layout title="TodoEdit">
      <div style={{ textAlign: 'center' }}>
        <TextBox value={todo?.title || ''} placeholder="Title" onChange={titleChanged} />
        <TextBox value={todo?.description || ''} placeholder="Description" onChange={descriptionChanged} />
        <div style={{ textAlign: 'center' }}>
          {isCreate ? (
            <Button style={{ width: '90%' }} primary={true} label="Create" onClick={createClicked} />
          ) : (
            <Fragment>
              <Button style={{ width: '42%' }} primary={true} label="Save" onClick={updateClicked} />
              <Button
                style={{ marginLeft: '10px', width: '42%', backgroundColor: '#dc143c' }}
                primary={true}
                label="Delete"
                onClick={deleteClicked}
              />
            </Fragment>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default TodoEdit;
