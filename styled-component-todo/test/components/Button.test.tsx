import { render, screen, cleanup } from '@testing-library/react';
import { Button } from 'src/components/Button';
import userEvent from '@testing-library/user-event';

afterEach(() => cleanup());

describe('Rendering', () => {
  it('Matches snapshot', () => {
    const { asFragment } = render(<Button primary={true} label="Button" />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Button onclick event', () => {
  it('Should trigger button', () => {
    const mockFunction = jest.fn();
    render(<Button primary={true} label="Button" onClick={mockFunction} />);
    userEvent.click(screen.getByText('Button'));
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
