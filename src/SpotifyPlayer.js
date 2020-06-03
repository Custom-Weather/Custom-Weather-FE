import React from 'react';
import './SpotifyPlayer.css';

const SpotifyPlayer = ({desc, code}) => {
  var playlists = {
    'Rain': '4eWBwGl0c5wtp6k5Krp6My',
    'Thunderstorm' : '501uuQYJci5mUyVhCdDhfo',
    'Drizzle' : '5REjmaYsltEnI4hyryckg7',
    'Clear' : '2iO0tBtqGdHP7vIwpyeEyd',
    'Clouds' : '3So47qlswBZpIERObnkMMG'
  }

  if(code) {return (
    <div className='spotify-player'>
      <iframe src={"https://open.spotify.com/embed/playlist/" + code} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  )}
  else {return (
    <div className='spotify-player'>
      <iframe src={"https://open.spotify.com/embed/playlist/" + playlists[desc]} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  )
  }
}

export default SpotifyPlayer;
