'use strict';

var React = require('react'),
    connect = require('react-redux').connect,
    actions = require('../actions/gameActions'),
    ResultContainer = require('./resultContainer.component'),
    SongPlayer = require('./songPlayer.component');
var Link = require('react-router').Link;

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
                        <button className="btn btn-default" onClick={this.newGame} >NEW GAME</button>
                        <button className="btn btn-default" ><Link to={'/'}>MAIN MENU</Link></button>
                    </div>
                    <SongPlayer songId={this.props.songId} />
                </div>
             </div>
        );
    }
});

var mapStateToProps = function(state, props) {
    return {
        songId: state.game.songId
    };
};

var Container = connect(mapStateToProps)(gameOver);

module.exports = Container;