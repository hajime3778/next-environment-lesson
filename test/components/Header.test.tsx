import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from 'src/components/Header';

afterEach(() => cleanup());

describe('Rendering', () => {
  it('Matches snapshot', () => {
    const { asFragment } = render(<Header title="Title" />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render title only', () => {
    render(<Header title="Title" />);
    expect(screen.getByText('Title')).toBeTruthy();
    expect(screen.queryByText('+')).toBeNull();
  });

  it('Should render register button', () => {
    render(<Header title="Title" visibleRegister={true} />);
    expect(screen.getByText('Title')).toBeTruthy();
    expect(screen.getByText('+')).toBeTruthy();
  });

  it('Should trigger register button', () => {
    const mockFunction = jest.fn();
    render(<Header title="Title" visibleRegister={true} registerClick={mockFunction} />);
    userEvent.click(screen.getByText('+'));
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
