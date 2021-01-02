import React from 'react';
import { Todo } from 'src/models/Todo';

type Props = {
  todo: Todo;
  onClick: () => void;
};

export const TodoItem: React.FC<Props> = () => {
  return <div>foo</div>;
};
