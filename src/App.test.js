import { render, screen } from '@testing-library/react';
import App from './App';

test('Tests if the header is properly rendered', () => {
  render(<App />);
  const linkElement = screen.getByText(/One Pager/i);
  expect(linkElement).toBeInTheDocument();
});
