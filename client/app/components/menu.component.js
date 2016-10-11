'use strict';

var React = require('react'),
    Link = require('react-router').Link;

var menu= function(props) {
    if (props.status && props.userName) {
        return (
            <div className="menu">
                <a href="/">LOGOUT</a>
                <a href={props.userUrl} >{props.userName}</a>
                <Link to={'/'}>MAIN MENU</Link>
            </div>
        );
    } else {
        return (

            <div className="menu">
                <a href="/login">LOGIN WITH SPOTIFY</a>
                <Link to={'/'}>MAIN MENU</Link>
            </div>
        ); 
    }
};

module.exports = menu;