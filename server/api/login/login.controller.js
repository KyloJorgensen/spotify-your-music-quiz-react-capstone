'use strict';

var variables = require('../../config/variables.express');
var querystring = require('querystring');

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

function LoginController() {};

LoginController.prototype.getLogin = function(req, res, next) {

  var state = generateRandomString(16);
  res.cookie(variables.SPOTIFY_STATE_KEY, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email user-library-read';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: variables.SPOTIFY_CLIENT_ID,
      scope: scope,
      redirect_uri: variables.SPOTIFY_REDIRECT_URI,
      state: state
    }));
};

module.exports = LoginController.prototype;