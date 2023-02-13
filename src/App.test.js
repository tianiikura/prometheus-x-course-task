import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/JS BAND STORE\/Olha Levchenko/i);
  expect(linkElement).toBeInTheDocument();
});
