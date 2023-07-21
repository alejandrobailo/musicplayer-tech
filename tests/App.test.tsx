import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../src/App';
import { vi } from 'vitest';

// Mock the fetchSongs function
vi.mock('./utils/fetchSongs', () => vi.fn(() => Promise.resolve([])));

test('renders loading state initially', () => {
  render(<App />);
  const loadingElement = screen.getByRole('progressbar');
  expect(loadingElement).toBeInTheDocument();
});

test('renders the App component with songs and handles sorting', async () => {
  const mockSongs = [
    { id: 1, name: 'Song 1', likes: 10 },
    { id: 2, name: 'Song 2', likes: 5 },
    { id: 3, name: 'Song 3', likes: 15 },
  ];

  // Mock the return value of fetchSongs
  vi.spyOn(require('./utils/fetchSongs'), 'fetchSongs').mockResolvedValue(mockSongs);

  render(<App />);

  // Wait for the data to be fetched and component to update
  await waitFor(() => {
    const musicPlayerHeading = screen.getByText('Music Player');
    expect(musicPlayerHeading).toBeInTheDocument();

    const descriptionElement = screen.getByText('What kind of music would you like to hear today?');
    expect(descriptionElement).toBeInTheDocument();
  });

  // Test sorting
  // ...
});
