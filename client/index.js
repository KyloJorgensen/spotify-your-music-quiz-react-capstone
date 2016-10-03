'use strict';

var app = require('./app/app');
var $ = require('jquery');

$('body').on('click', '#spotify-play', function() {
	console.log('here');
	$('iframe').contents().find('#play-button').trigger('click');
});
