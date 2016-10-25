'use strict';

var variables = require('../../config/variables.express');
var querystring = require('querystring');
var request = require('request');

function CallbackController() {};

CallbackController.prototype.getCallback = function(req, res, next) {
  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[variables.SPOTIFY_STATE_KEY] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(variables.SPOTIFY_STATE_KEY);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: variables.SPOTIFY_REDIRECT_URI,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(variables.SPOTIFY_CLIENT_ID + ':' + variables.SPOTIFY_CLIENT_SECRET).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        // we can also pass the token to the browser to make requests from there
        res.redirect('/#/login/'+ access_token + '/' + refresh_token);
      } else {
        res.redirect('/#/' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
};

module.exports = CallbackController.prototype;