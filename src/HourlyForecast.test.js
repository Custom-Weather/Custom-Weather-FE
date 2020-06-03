import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import HourlyForecast from './HourlyForecast';

describe("HourlyForecast", () => {
  let mockRender;
  beforeEach(() => {
    mockRender=render(
      <HourlyForecast
      hour={"8:00 PM"}
      temp={"16.75"}
      desc={"moderate rain"}
      />
    )
  })

  afterEach(() => {
    cleanup()
  })

  it("should render hourly forecasts", () => {
    const { getByText } = mockRender;
    const hourEl = getByText("8:00 PM")
    expect(hourEl).toBeInTheDocument();
    const tempEl = getByText("16.75")
    expect(tempEl).toBeInTheDocument();
    const descEl = getByText("moderate rain")
    expect(descEl).toBeInTheDocument();
  })
})
