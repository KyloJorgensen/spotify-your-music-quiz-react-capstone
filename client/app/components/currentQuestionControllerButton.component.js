'use strict';

var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/gameActions');

var CurrentQuestionControllerButton = React.createClass({
	onClick: function() {
		if (this.props.content.link === 0) {
			this.props.dispatch(actions.gameOver());
		} else {
			this.props.dispatch(actions.changeCurrentQuestion(this.props.content.link));
		}
	},
	render: function() {
		if (this.props.content.display) {
			return (
		        <div className="current-question-controller-button">
		        	<div>
			        	<button onClick={this.onClick} >{this.props.content.value}</button>
					</div>
		        </div>
		    ); 
		} else {
			return (
		        <div className="current-question-controller-button">
		        	<div></div>
		        </div>
		    ); 
		}

	}
});

var Container = connect()(CurrentQuestionControllerButton);

module.exports = Container;