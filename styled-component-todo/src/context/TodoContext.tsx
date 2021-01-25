import React, { useState, createContext, ReactNode } from 'react';
import { Todo } from 'src/models/Todo';

interface TodoListContextProps {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoListContext = createContext<TodoListContextProps>({
  todoList: [],
  setTodoList: () => console.warn('no function'),
});

export const TodoListProvider: React.FC<{ initTodoList: Todo[]; children: ReactNode }> = ({
  initTodoList,
  children,
}) => {
  const [todoList, setTodoList] = useState(initTodoList);

  return (
    <TodoListContext.Provider
      value={{
        todoList,
        setTodoList,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
