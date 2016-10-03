'use strict';

var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser');

module.exports = function(app) {
    app.set('root', path.join(__dirname , "../.."))
    	.use(bodyParser.json())   
    	.use(bodyParser.urlencoded({extended: false}))
   		.use(cookieParser())
    	.use(express.static(app.get('root') +  'authorization_code/public'));
};