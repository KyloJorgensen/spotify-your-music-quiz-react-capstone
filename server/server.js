'use strict';

var express = require('express'),
	app = express(),
    variables = require('./config/variables.express');

require('./config/mongoose.connection');
require('./config/config.express')(app);
require('./config/routes.express')(app);
require('./middleware/errorHandler')(app);

app.listen(variables.EXPRESS_PORT, function () {
    console.log(variables.EXPRESS_LISTEN_MESSAGE + variables.EXPRESS_PORT);
});

exports.app = app;