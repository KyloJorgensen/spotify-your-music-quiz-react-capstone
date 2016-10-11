'use strict';

var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser');

module.exports = function(app) {
    app.use(bodyParser.json())   
    	.use(bodyParser.urlencoded({extended: false}))
   		.use(cookieParser())
    	.use(express.static(path.join(__dirname , '../../build/')));
    	.use(express.static(path.join(__dirname , '../../images/')));
};