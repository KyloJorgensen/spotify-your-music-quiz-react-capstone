'use strict';

var mongoose = require('mongoose');
var config = require('./variables.express');
mongoose.connect(config.MONGODB.URI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to mongoDB');
});