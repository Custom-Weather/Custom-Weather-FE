import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SunriseSunset from './SunriseSunset';

afterEach(cleanup)

 it('should take a snapshot', () => {
    const { asFragment } = render(<SunriseSunset />)

    expect(asFragment(<SunriseSunset />)).toMatchSnapshot()
  })
