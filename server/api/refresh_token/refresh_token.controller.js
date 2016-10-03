'use strict';

var variables = require('../../config/variables.express');
var request = require('request');

function RefreshTokenController() {};

RefreshTokenController.prototype.getRefreshToken = function(req, res, next) {
  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(variables.SPOTIFY_CLIENT_ID + ':' + variables.POTIFY_CLIENT_SECRET).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    } else if (error) {
      next(error);
    } else {
      next(response);
    }
  });
};

module.exports = RefreshTokenController.prototype;