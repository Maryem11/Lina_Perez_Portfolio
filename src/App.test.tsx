import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Lina Perez-Romero/i);
  expect(headerElement).toBeInTheDocument();
});
