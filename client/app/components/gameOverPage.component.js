'use strict';

var React = require('react'),
    connect = require('react-redux').connect,
    actions = require('../actions/gameActions');

var gameOver = React.createClass({
    onClick: function() {
        this.props.dispatch(actions.newGame());
    },
    render: function() {
        var score = 0;
        for (var i = 0; i < this.props.tracks.length; i++) {
            var anwser = this.props.tracks[i].artists;
            var choice = this.props.tracks[i].currentChoice;
            if (anwser.length == choice.length) {
                var match = true;
                for (var h = 0; h < anwser.length; h++) {
                    if (anwser[i] != choice[i]) {
                        match = false;
                    }
                }
                if (match) {
                    score++;
                }
            }
        }
        return (
            <div className="game-over">
                <p>GAME OVER</p>
                <p>Your Score : {score}/{this.props.tracks.length}</p>
                <button onClick={this.onClick}>NEW GAME</button>
            </div>
        );
    }
});

var Container = connect()(gameOver);

module.exports = Container;