'use strict';

var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/gameActions');
var Link = require('react-router').Link;
var ChoicesContainer = require('./choicesContainer.component');
var CurrentQuestionController = require('./currentQuestionController.component');

var currentChoice;

var question = React.createClass({
    newGame: function() {
        this.props.dispatch(actions.newGame());
    },
    render: function() {
        return (
            <div className="question">
                <h3>Question {this.props.currentQuestion}</h3>
                <button className="btn btn-default" onClick={this.newGame} >NEW GAME</button>
                <h3>Who are the artist's of '{this.props.tracks[this.props.currentQuestion - 1].song}'?</h3>
                <ChoicesContainer choices={this.props.tracks[this.props.currentQuestion - 1].randomArtists} currentChoice={this.props.currentChoice} />
                <CurrentQuestionController currentQuestion={this.props.currentQuestion} numberOfQuestions={this.props.tracks.length} currentChoice={this.props.currentChoice} />
            </div>
        ); 
    }
});

var mapStateToProps = function(state, props) {
    return {
    	tracks: state.game.tracks,
        currentQuestion: state.game.currentQuestion,
        currentChoice: state.game.tracks[state.game.currentQuestion -1].currentChoice

    };
};

var Container = connect(mapStateToProps)(question);

module.exports = Container;