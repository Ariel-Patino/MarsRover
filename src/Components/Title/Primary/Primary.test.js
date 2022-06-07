import { render, screen } from '@testing-library/react';
import Primary from './Primary';

test('renders title div', () => {
  render(<Primary title="Mars Drone" />);
  const title = screen.getByText(/Mars Drone/i);
  expect(title).toBeInTheDocument();
});
