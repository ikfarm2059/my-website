import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import { siteContent } from './data/siteContent';

test('renders the company homepage sections', () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  expect(screen.getByText(siteContent.sectionTitles.about)).toBeInTheDocument();
  expect(screen.getByText(siteContent.sectionTitles.products)).toBeInTheDocument();
});
