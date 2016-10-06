'use strict';

var React = require('react'),
    connect = require('react-redux').connect,
    actions = require('../actions/gameActions');

var songId = '4vvNtCauMI0OzRCwuWkWiF'; 
var result = React.createClass({ 
    onClick: function() {
        this.props.dispatch(actions.setSongId(this.props.songId));
    },
    render: function() {
        if (this.props.correct) { 
            return (
                <li className="result" >
                    <p className="song correct" onClick={this.onClick} >{this.props.song} by {this.props.anwser}</p>
                </li>
            );             
        } else {
            return (
                <li className="result" >
                    <p className="song" onClick={this.onClick} >{this.props.song} by {this.props.anwser}</p>
                </li>
            );             
        }
    }
});

var Container = connect()(result);

module.exports = Container;