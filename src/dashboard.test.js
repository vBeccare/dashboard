import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './dashboard';

test('deve renderizar o componente sem erros', () => {
  const { getByText } = render(<Dashboard />);
  const linkElement = getByText(/Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
