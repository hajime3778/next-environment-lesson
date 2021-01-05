import { render } from '@testing-library/react';
import { Button } from 'src/components/Button';

describe('Rendering', () => {
  it('Matches snapshot', () => {
    const { asFragment } = render(<Button primary={true} label="Button" />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
