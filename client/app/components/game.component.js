'use strict';

var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/gameActions');
var Link = require('react-router').Link;
var Question = require('./question.component');
var GameOver = require('./gameOverPage.component');

var gamePage = function(props) {
    if (props.currentQuestion == "GAME_OVER") {
        return (
            <GameOver tracks={props.tracks} />
        );
    } else if (props.currentQuestion) {
        return (
            <Question />
        );
    } else {
        if (props.access_token) {
            props.dispatch(actions.getTracks(null, props.access_token));
            return (
                <div className="game">
                    <p>Game</p>
                    <p>Loading...</p>
                </div>
            ); 
        } else {
            return (
                <div className="game">
                    <p>Game</p>
                    <a href="/login">Log in with Spotify</a>
                </div>
            );
        }
    }

};

var mapStateToProps = function(state, props) {
    return {
    	access_token: state.user.access_token,
        tracks: state.game.tracks,
        currentQuestion: state.game.currentQuestion
    };
};

var Container = connect(mapStateToProps)(gamePage);

module.exports = Container;