import React from 'react';
import styled from 'styled-components';
import { Todo } from 'src/models/Todo';

export type Props = {
  todo: Todo;
  onClick?: () => void;
};

const TodoArea = styled.div`
  border: 1px solid #dfdfdf;
  cursor: pointer;
  margin-bottom: 16px;
  border-radius: 8px;
  width: 100%;
  min-height: 120px;
  background-color: #fafbfd;
  box-shadow: 1px 2px 5px 3px rgba(0, 0, 0, 0.1);
  padding: 4px 2px;
`;
const TodoTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin: 0 10px;
  border-bottom: 1px solid #cccccc;
  text-align: left;
  padding: 8px;
`;
const TodoDescription = styled.div`
  word-wrap: break-word;
  text-align: left;
  margin-left: 10px;
  padding: 8px;
`;

export const TodoItem: React.FC<Props> = ({ todo, onClick }) => {
  return (
    <TodoArea onClick={onClick}>
      <TodoTitle>{todo.title}</TodoTitle>
      <TodoDescription>{todo.description}</TodoDescription>
    </TodoArea>
  );
};
