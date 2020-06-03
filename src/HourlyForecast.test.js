import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HourlyForecast from './HourlyForecast';

afterEach(cleanup)

 it('should take a snapshot', () => {
    const { asFragment } = render(<HourlyForecast />)

    expect(asFragment(<HourlyForecast />)).toMatchSnapshot()
  })
