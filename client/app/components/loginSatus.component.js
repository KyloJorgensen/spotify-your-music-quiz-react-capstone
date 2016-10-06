'use strict';

var React = require('react');

var loginStatus= function(props) {
    if (props.status) {
        return (
            <p><a href="/">LOGOUT</a></p>
        );
    } else {
        return (
            <p><a href="/login">LOGIN WITH SPOTIFY</a></p>
        ); 
    }
};

module.exports = loginStatus;