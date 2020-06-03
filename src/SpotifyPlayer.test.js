import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import SpotifyPlayer from './SpotifyPlayer';

describe("SpotifyPlayer", () => {
  let mockRender;
  beforeEach(() => {
    mockRender=render(
      <SpotifyPlayer
      desc={"sunny"}
      />
    )
  })

  afterEach(() => {
    cleanup()
  })

  it("should render playlists based on weather", () => {
    const { getByTestId } = mockRender;
    const divIdEl = getByTestId("spotify-player")
    expect(divIdEl).toBeInTheDocument();

  })
})
