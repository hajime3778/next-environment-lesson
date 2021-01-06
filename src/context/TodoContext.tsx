import React, { useState, createContext, ReactNode } from 'react';
import { Todo } from 'src/models/Todo';

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

interface TodoListContextProps {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoListContext = createContext<TodoListContextProps>({
  todoList: [],
  setTodoList: () => console.warn('no function'),
});

export const TodoListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todoList, setTodoList] = useState(todoListSampleData);

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
