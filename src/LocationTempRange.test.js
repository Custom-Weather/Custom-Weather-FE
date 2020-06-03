import React from 'react';
import { render, cleanup } from '@testing-library/react';
import LocationTempRange from './LocationTempRange';

afterEach(cleanup)

 it('should take a snapshot', () => {
    const { asFragment } = render(<LocationTempRange />)

    expect(asFragment(<LocationTempRange />)).toMatchSnapshot()
  })
