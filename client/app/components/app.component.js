'use strict';

var React = require('react');
var connect = require('react-redux').connect;
var LoginSatus = require('./loginSatus.component');
var Link = require('react-router').Link;


var App = function(props) {
    return (
        <div className="music-quiz">
            <nav>
                <h1>Spotify Misic Quiz</h1>
                <LoginSatus status={props.access_token}/>
                <button className="btn btn-default" ><Link to={'/game'}>game</Link></button>
                <button className="btn btn-default" ><Link to={'/'}>main</Link></button>
            </nav>
            <div className="music-quiz-body">
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

var mapStateToProps = function(state, props) {
    return {
        access_token: state.user.access_token
    };
};

var Container = connect(mapStateToProps)(App);

module.exports = Container;