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
        var id = this.props.songId;
        if (id == null) {
            id = this.props.tracks[0].songId;
        }
        return (
            <div className="game-over">
                <div className="game-over-body">
                    <div>
                        <ResultContainer results={this.props.tracks} />
                    </div>
                    <SongPlayer songId={id} />
                </div>
             </div>
        );
    }
});

var mapStateToProps = function(state, props) {
    return {
        songId: state.fiveQuestionQuiz.songId,
        tracks: state.fiveQuestionQuiz.tracks
    };
};

var Container = connect(mapStateToProps)(gameOver);

module.exports = Container;