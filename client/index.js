'use strict';

var React = require('react'),
    ReactDOM = require('react-dom');

var HelloWorld = require('./components/hello-world.component');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
    	<HelloWorld />,
    	document.getElementById('app')
    );
});