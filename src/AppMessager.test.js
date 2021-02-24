import { render, screen } from '@testing-library/react';
import AppMessager from './AppMessager';

test('renders learn react link', () => {
  render(<AppMessager />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
