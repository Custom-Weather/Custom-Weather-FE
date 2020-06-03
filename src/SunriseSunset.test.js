import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import SunriseSunset from './SunriseSunset';

describe("SunriseSunset", () => {
  let mockRender;
  beforeEach(() => {
    mockRender=render(
      <SunriseSunset
      sunrise={"11:33 AM"}
      sunset={"2:44 AM"}
      />
    )
  })

  afterEach(() => {
    cleanup()
  })

  it("should render hourly forecasts", () => {
    const { getByText } = mockRender;
    const sunriseEl = getByText("11:33 AM")
    expect(sunriseEl).toBeInTheDocument();
    const sunsetEl = getByText("2:44 AM")
    expect(sunsetEl).toBeInTheDocument();
  })
})
