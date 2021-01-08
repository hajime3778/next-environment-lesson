import { render, screen } from '@testing-library/react';
import Home from 'src/pages/index';
import { TodoListProvider } from 'src/context/TodoContext';

describe('Rendering', () => {
  it('Matches snapshot', () => {
    const sampleTodoList = [
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
    ];
    const { asFragment } = render(
      <TodoListProvider initTodoList={sampleTodoList}>
        <Home />
      </TodoListProvider>,
      {}
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render todo list', () => {
    const sampleTodoList = [
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
    ];
    render(
      <TodoListProvider initTodoList={sampleTodoList}>
        <Home />
      </TodoListProvider>
    );
    expect(screen.getByText('Sample title1')).toBeTruthy();
    expect(screen.getByText('Sample title2')).toBeTruthy();
    expect(screen.getByText('+')).toBeTruthy();
    expect(screen.queryByText('Sample title3')).toBeNull();
  });
});
