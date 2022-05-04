import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders Vizija link', () => {
  render(<Button />);
  const linkElement = screen.getByText(/Vizija/i);
  expect(linkElement).toBeInTheDocument();
});