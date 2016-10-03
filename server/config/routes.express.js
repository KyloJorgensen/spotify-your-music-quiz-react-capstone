'use strict';

var mainRouter = require('../api/main/main.router'),
	loginRouter = require('../api/login/login.router'),
	callbackRouter = require('../api/callback/callback.router'),
	refreshTokenRouter = require('../api/refresh_token/refresh_token.router');

module.exports = function(app) {
    app.use('/', mainRouter)
    	.use('/login', loginRouter)
    	.use('/callback', callbackRouter)
    	.use('/refresh_token', refreshTokenRouter)
};