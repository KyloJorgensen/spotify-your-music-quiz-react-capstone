'use strict';

var React = require('react');

var loginStatus= function(props) {
    if (props.status) {
        return (
            <div className="login-status">
                <a className="btn btn-default" href="/">LOGOUT</a>
            </div>
        );
    } else {
        return (
            <div className="login-status">
                <a className="btn btn-default" href="/login">LOGIN WITH SPOTIFY</a>
            </div>
        ); 
    }
};

module.exports = loginStatus;