'use strict';

var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/gameActions');
var Link = require('react-router').Link;
var ChoicesContainer = require('./choicesContainer.component');
var CurrentQuestionController = require('./currentQuestionController.component');

var currentChoice;

var question = function(props) {
    return (
        <div className="question">
            <p>Question {props.currentQuestion}</p>
            <p>Who are the artist's of '{props.tracks[props.currentQuestion - 1].song}'?</p>
            <ChoicesContainer choices={props.tracks[props.currentQuestion - 1].randomArtists} currentChoice={props.currentChoice} />
            <CurrentQuestionController currentQuestion={props.currentQuestion} numberOfQuestions={props.tracks.length} currentChoice={props.currentChoice} />
        </div>
    ); 
};

var mapStateToProps = function(state, props) {
    return {
    	tracks: state.game.tracks,
        currentQuestion: state.game.currentQuestion,
        currentChoice: state.game.tracks[state.game.currentQuestion -1].currentChoice

    };
};

var Container = connect(mapStateToProps)(question);

module.exports = Container;