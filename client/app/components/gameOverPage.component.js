'use strict';

var React = require('react'),
    connect = require('react-redux').connect,
    actions = require('../actions/fiveQuestionQuiz.actions'),
    ResultContainer = require('./resultContainer.component'),
    SongPlayer = require('./songPlayer.component');

var gameOver = React.createClass({
    newGame: function() {
        this.props.dispatch(actions.newGame());
    },
    render: function() {
        return (
            <div className="game-over">
                <h3>Great Job!</h3>
                <div className="game-over-body">
                    <div>
                        <ResultContainer results={this.props.tracks} />
                    </div>
                    <SongPlayer songId={this.props.songId} />
                </div>
             </div>
        );
    }
});

var mapStateToProps = function(state, props) {
    return {
        songId: state.fiveQuestionQuiz.songId
    };
};

var Container = connect(mapStateToProps)(gameOver);

module.exports = Container;