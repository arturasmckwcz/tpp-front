import { act, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(<App />);
  });
  await waitFor(() => {
    const pElement = screen.getByText(/This is the Start!/i);
    expect(pElement).toBeInTheDocument();
  });
});
