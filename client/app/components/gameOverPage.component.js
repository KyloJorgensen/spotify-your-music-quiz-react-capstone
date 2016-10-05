'use strict';

var React = require('react'),
    connect = require('react-redux').connect,
    actions = require('../actions/gameActions');
var Link = require('react-router').Link;

var gameOver = React.createClass({
    newGame: function() {
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
                <h3>GAME OVER</h3>
                <h3>Your Score : {score}/{this.props.tracks.length}</h3>
                <button className="btn btn-default" onClick={this.newGame} >NEW GAME</button>
                <button className="btn btn-default" ><Link to={'/'}>Main Menu</Link></button>
            </div>
        );
    }
});

var Container = connect()(gameOver);

module.exports = Container;