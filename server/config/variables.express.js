'use strict';

module.exports = {
    EXPRESS_PORT: process.env.PORT || 8080,
    EXPRESS_LISTEN_MESSAGE: 'Listening on port ',
    SPOTIFY_STATE_KEY: 'spotify_auth_state',
    SPOTIFY_CLIENT_ID: '52400559933b4fc6b0eacb80c934ab4c',
	SPOTIFY_CLIENT_SECRET: 'ef65f6574b46456f9a6a54989207e8cd',
	SPOTIFY_REDIRECT_URI: 'https://spotify-your-music-quiz.herokuapp.com/callback/'
};