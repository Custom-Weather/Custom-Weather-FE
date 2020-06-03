import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import LocationTempRange from './LocationTempRange';

describe("LocationTempRange", () => {
  let mockRender;
  beforeEach(() => {
    mockRender=render(
      <LocationTempRange
      current={"84.15°F"}
      high={"89.15°F"}
      low={"69.15°F"}
      />
    )
  })

  afterEach(() => {
    cleanup()
  })

  it("should render current high and low temperatures", () => {
    const { getByText } = mockRender;
    const currentEl = getByText("84.15°F")
    expect(currentEl).toBeInTheDocument();
    const highEl = getByText("89.15°F")
    expect(highEl).toBeInTheDocument();
    const lowEl = getByText("69.15°F")
    expect(lowEl).toBeInTheDocument();
  })
})
