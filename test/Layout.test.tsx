import { render, screen } from '@testing-library/react';
import { Layout } from 'src/components/Layout';

describe('Rendering', () => {
  it('Should render title and child only', () => {
    render(
      <Layout title="Title">
        <p>sample string</p>
      </Layout>
    );
    expect(screen.getByText('Title')).toBeTruthy();
    expect(screen.getByText('sample string')).toBeTruthy();
    expect(screen.queryByText('+')).toBeNull();
  });
  it('Should render register button and child', () => {
    render(
      <Layout title="Title" visibleRegister={true}>
        <p>sample string</p>
      </Layout>
    );
    expect(screen.getByText('Title')).toBeTruthy();
    expect(screen.getByText('sample string')).toBeTruthy();
    expect(screen.getByText('+')).toBeTruthy();
  });
});
