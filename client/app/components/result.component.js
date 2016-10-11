'use strict';

var React = require('react'),
    connect = require('react-redux').connect,
    actions = require('../actions/fiveQuestionQuiz.actions');

var result = React.createClass({ 
    onClick: function() {
        this.props.dispatch(actions.setSongId(this.props.songId));
    },
    render: function() {
        if (this.props.correct) { 
            return (
                <li className="result" >
                    <a className="song correct" onClick={this.onClick} ><img className="result-img" src="images/1476229776_Tick_Mark_Dark.png" /> {this.props.song} by {this.props.anwser}</a>
                </li>
            );             
        } else {
            return (
                <li className="result" >
                    <a className="song" onClick={this.onClick} ><img className="result-img" src="images/1476229862_Close_Icon_Dark.png" /> {this.props.song} by {this.props.anwser}</a>
                </li>
            );             
        }
    }
});

var Container = connect()(result);

module.exports = Container;