import { render, screen, cleanup } from '@testing-library/react';
import { TextBox } from 'src/components/TextBox';
import userEvent from '@testing-library/user-event';

afterEach(() => cleanup());

describe('Rendering', () => {
  it('Matches snapshot', () => {
    const { asFragment } = render(<TextBox placeholder="sample" />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  describe('Input form onchange event', () => {
    it('Should update input value', () => {
      render(<TextBox placeholder="sample" />);
      const inputValue = screen.getByPlaceholderText('sample') as HTMLInputElement;
      userEvent.type(inputValue, 'test');
      expect(inputValue.value).toBe('test');
    });

    it('Should trigger changed', () => {
      const mockFunction = jest.fn();
      render(<TextBox placeholder="sample" onChange={mockFunction} />);
      const inputValue = screen.getByPlaceholderText('sample') as HTMLInputElement;
      userEvent.type(inputValue, 'test');
      expect(mockFunction).toHaveBeenCalledTimes(4);
    });
  });
});
