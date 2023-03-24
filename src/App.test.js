import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const formElement = screen.getByText(/cardHolder/i);
  expect(formElement).toBeInTheDocument();
});





