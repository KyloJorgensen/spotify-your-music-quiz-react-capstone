'use strict';

var React = require('react'),
    connect = require('react-redux').connect,
    ChoicesContainer = require('./choicesContainer.component'),
    CurrentQuestionController = require('./currentQuestionController.component');

var question = function(props) {
    return (
        <div className="question">
            <h3>Question {props.currentQuestion}</h3>
            <h3>Who are the artists of '{props.tracks[props.currentQuestion - 1].song}'?</h3>
            <ChoicesContainer choices={props.tracks[props.currentQuestion - 1].randomArtists} currentChoice={props.currentChoice} />
            <CurrentQuestionController currentQuestion={props.currentQuestion} numberOfQuestions={props.tracks.length} currentChoice={props.currentChoice} />
        </div>
    );
};

var mapStateToProps = function(state, props) {
    return {
    	tracks: state.fiveQuestionQuiz.tracks,
        currentQuestion: state.fiveQuestionQuiz.currentQuestion,
        currentChoice: state.fiveQuestionQuiz.tracks[state.fiveQuestionQuiz.currentQuestion -1].currentChoice

    };
};

var Container = connect(mapStateToProps)(question);

module.exports = Container;