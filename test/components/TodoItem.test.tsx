import { render } from '@testing-library/react';
import { TodoItem } from 'src/components/TodoItem';
import { Todo } from 'src/models/Todo';

const sampleTodo: Todo = {
  id: 0,
  title: 'Sample title',
  description: 'Sample description',
};

describe('Rendering', () => {
  it('Matches snapshot', () => {
    const { asFragment } = render(<TodoItem todo={sampleTodo} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
