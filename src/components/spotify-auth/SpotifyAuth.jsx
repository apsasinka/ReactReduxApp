import React, { useState, useEffect } from 'react';

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
const scope = "user-library-read";

const SpotifyAuth = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("spotify_token");

    if (!token && hash) {
      token = new URLSearchParams(hash.substring(1)).get('access_token');
      window.location.hash = '';
      window.localStorage.setItem("spotify_token", token);
    }

    setToken(token);
  }, []);

  const handleLogin = () => {
    window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scope}`;
  };
  return (
    <div>
      {!token ? (
        <button onClick={handleLogin}>Login with Spotify</button>
      ) : (
          <button onClick={() => window.localStorage.removeItem('spotify_token')}>Logout</button>
      )}
    </div>
  );
};

export default SpotifyAuth;