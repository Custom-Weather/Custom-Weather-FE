import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import LocationForm from './LocationForm';

describe("LocationForm", () => {
  let mockRender;
  beforeEach(() => {
    mockRender=render(
      <LocationForm
      placeholder={"Type in city and state"}
      inputSubmit={"Submit"}
      currentSubmit={"Use Current Location"}
      />
    )
  })

  afterEach(() => {
    cleanup()
  })

  it("should render homepage location input form", () => {
    const { getByTestId } = mockRender;
    const placeholderEl = getByTestId("location-input")
    expect(placeholderEl).toBeInTheDocument();
    const inputSubmitEl = getByTestId("input-submit")
    expect(inputSubmitEl).toBeInTheDocument();
    const currentSubmitEl = getByTestId("current-submit")
    expect(currentSubmitEl).toBeInTheDocument();

  })
})
