'use strict';

module.exports = function(app) {
	app.use(function(error, req, res, next) {
		if (error) {
			next(error);
		} else {
			res.status(500).json('missing error');
		}
	});
	app.use(function(error, req, res, next) {
		if (res.headerSent) {
			return next(error);
		}

		res.status(500);

		if (error) {
			return res.json(error);
		} else {
			return res.json('missing message');
		}

		next(error)
	});
	app.use(function(error, req, res, next) {
		console.log('CRITICAL ERROR: ', error);
	})
};