import React from 'react';

import { render, screen } from '@testing-library/react';

import { Loader } from './index';

describe('Loader', () => {
  it('should render', async () => {
    render(<Loader />);

    const loader = screen.getByAltText("Loading...")

    expect(loader).toBeInTheDocument();
  });
});
