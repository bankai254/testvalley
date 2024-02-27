import React from 'react';

import { render, screen } from '@testing-library/react';

import { Header } from './index';

describe('Header', () => {
  it('should render', async () => {
    render(<Header />);

    const header = screen.getByTestId('header')

    expect(header).toBeInTheDocument();
  });
});
