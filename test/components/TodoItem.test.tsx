import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoItem } from 'src/components/TodoItem';
import { Todo } from 'src/models/Todo';

afterEach(() => cleanup());

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

  it('Should trigger click todo', () => {
    const mockFunction = jest.fn();
    render(<TodoItem todo={sampleTodo} onClick={mockFunction} />);
    userEvent.click(screen.getByText('+'));
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
