'use strict';

var React = require('react'),
    connect = require('react-redux').connect,
    LoginSatus = require('./loginSatus.component'),
    Link = require('react-router').Link;


var App = function(props) {
    return (
        <div className="music-quiz">
            <nav>
                <h1>Spotify Misic Quiz</h1>
                <LoginSatus status={props.access_token}/>
                <Link to={'/game'}>GAMES</Link>
                <Link to={'/'}>MAIN MENU</Link>
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