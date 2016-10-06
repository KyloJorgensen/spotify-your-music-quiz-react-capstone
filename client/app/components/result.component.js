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
        var style = {
            color: 'red'
        };
        if (this.props.correct) { 
            style.color = 'black';
        }

        return (
            <li className="result" >
                <p style={style} onClick={this.onClick} >{this.props.song} by {this.props.anwser}</p>
            </li>
        ); 
    }
});

var Container = connect()(result);

module.exports = Container;