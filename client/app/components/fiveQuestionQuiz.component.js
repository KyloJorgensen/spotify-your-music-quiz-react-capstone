'use strict';

var React = require('react'),
    connect = require('react-redux').connect,
    actions = require('../actions/fiveQuestionQuiz.actions'),
    GameOver = require('./gameOverPage.component'),
    Question = require('./question.component');

var question = React.createClass({
    newGame: function() {
        this.props.dispatch(actions.newGame());
    },
    render: function() {
        if (this.props.currentQuestion == "GAME_OVER") {
            return (
                <div className="five-question-quiz">
                    <h1>5 Question Quiz</h1>
                    <button className="btn btn-default" onClick={this.newGame} >NEW GAME</button>
                    <GameOver tracks={this.props.tracks} />
                </div>
            );
        } else {
            return (
                <div className="five-question-quiz">
                    <h1>5 Question Quiz</h1>
                    <button className="btn btn-default" onClick={this.newGame} >NEW GAME</button>
                    <Question />
                </div>
            );
        }
    }
});

var mapStateToProps = function(state, props) {
    return {
    	tracks: state.fiveQuestionQuiz.tracks,
        currentQuestion: state.fiveQuestionQuiz.currentQuestion

    };
};

var Container = connect(mapStateToProps)(question);

module.exports = Container;