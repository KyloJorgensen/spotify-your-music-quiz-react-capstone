'use strict';

var React = require('react'),
    connect = require('react-redux').connect,
    actions = require('../actions/fiveQuestionQuiz.actions');

var gamePage = function(props) {
    if (props.currentQuestion) {
        return (
            <div className="game">
                {props.children}
            </div>
        );
    } else {
        if (props.access_token) {
            props.dispatch(actions.getTracks(null, props.access_token));
            return (
                <div className="game">
                    <h3>Game</h3>
                    <h3>Loading...</h3>
                </div>
            ); 
        } else {
            window.location.href = "/";
        }
    }
};

var mapStateToProps = function(state, props) {
    return {
    	access_token: state.user.access_token,
        currentQuestion: state.fiveQuestionQuiz.currentQuestion
    };
};

var Container = connect(mapStateToProps)(gamePage);

module.exports = Container;