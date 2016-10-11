'use strict';

var React = require('react'),
    connect = require('react-redux').connect,
    actions = require('../actions/fiveQuestionQuiz.actions'),
    GameOver = require('./gameOverPage.component'),
    Question = require('./question.component');

var question = function(props) {
    if (props.currentQuestion == "GAME_OVER") {
        return (
            <div className="five-question-quiz">
                <h2>5 Question Quiz</h2>
                <GameOver />
            </div>
        );
    } else {
        return (
            <div className="five-question-quiz">
                <h2>5 Question Quiz</h2>
                <Question />
            </div>
        );
    }
};

var mapStateToProps = function(state, props) {
    return {
        currentQuestion: state.fiveQuestionQuiz.currentQuestion

    };
};

var Container = connect(mapStateToProps)(question);

module.exports = Container;