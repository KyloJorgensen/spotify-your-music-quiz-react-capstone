'use strict';

var React = require('react'),
    connect = require('react-redux').connect,
    actions = require('../actions/gameActions');

var choice = React.createClass({
    onClick: function() {
        this.props.dispatch(actions.setChoice(this.props.choice));
    },
    render: function() {
		var choice = [];
		for (var i = 0; i < this.props.choice.length; i++) {
			choice.push(this.props.choice[i]);
			if (this.props.choice.length > 1) {
				if (i < this.props.choice.length - 1) {
					choice.push(' and ');
				}
			} 
		}

		if (this.props.choice == this.props.currentChoice) {
			return (
		        <li className="choice" >
		            <p className="btn btn-default choice-current" onClick={this.onClick} >{choice}</p>
		        </li>
		    ); 
		} else {
			return (
		        <li className="choice" >
		            <p className="btn btn-default" onClick={this.onClick} >{choice}</p>
		        </li>
		    ); 
		}
	}
});

var Container = connect()(choice);

module.exports = Container;