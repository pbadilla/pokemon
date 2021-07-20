import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Home from './index';

test('loads and displays greeting', async () => {
  render(<Home />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('heading'))

  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
})