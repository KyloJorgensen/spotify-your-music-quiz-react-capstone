'use strict';

var React = require('react'),
    ReactDOM = require('react-dom'),
    Provider = require('react-redux').Provider,
    store = require('./store'),
    HelloWorld = require('./components/hello-world.component');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
    	<Provider store={store}>
    		<HelloWorld />
    	</Provider>,
    	document.getElementById('app')
    );
});