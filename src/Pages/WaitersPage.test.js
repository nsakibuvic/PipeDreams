import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WaitersPage from './WaitersPage';
import useHttp from '../Hooks/useHttp';

// These tests are mocking the behaviour we have on CooksPage and WaitersPage with the useHttp hook.
// The reason why we are just mocking and not sending real requests to the database because we don't want to send 
// unneccessary request to the backend

jest.mock('../Hooks/useHttp');

describe('WaitersPage tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders Loading... message on initial loading', async () => {
    useHttp.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    render(<WaitersPage />);
    const loadingMessage = screen.getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
  });

  it('renders data after loading', async () => {
    useHttp.mockReturnValue({
      data: ['John', 'Doe'],
      isLoading: false,
      error: null,
    });

    render(<WaitersPage />);
    const waiterName = screen.getByText('John');
    expect(waiterName).toBeInTheDocument();
  });

  it('renders error message when request fails', async () => {
    useHttp.mockReturnValue({
      data: null,
      isLoading: false,
      error: 'Failed to Load Data',
    });

    render(<WaitersPage />);
    const errorMessage = screen.getByText('Failed to Load Data');
    expect(errorMessage).toBeInTheDocument();
  });
});