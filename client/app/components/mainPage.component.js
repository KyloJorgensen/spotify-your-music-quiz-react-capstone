'use strict';

var React = require('react'),
	connect = require('react-redux').connect,
	userActions = require('../actions/userActions'),
	gameActions = require('../actions/fiveQuestionQuiz.actions'),
	GameList = require('./gameList.component');

var mainPage = React.createClass({
	componentWillMount: function() {
		this.props.dispatch(gameActions.newGame());
	},
	render: function() {
		if (this.props.access_token) {
			this.props.dispatch(userActions.getUser(this.props.access_token))
		} else {
			if (this.props.params.access_token) {
				this.props.dispatch(userActions.loginUser(this.props.params.access_token, this.props.params.refresh_token));
			}	
		}
		
		if (this.props.userName) {
			return (
				<div className="main-page">
					<h3>Hello {this.props.userName}</h3>
					<GameList />
				</div>
			);
		} else {
			return (
		        <div className="main-page">
		            <h1>Hello, Welcome to Spotify Music Quiz.</h1>
		        </div>
		    );
		}
	}
});


var mapStateToProps = function(state, props) {
    return {
        access_token: state.user.access_token,
        userName: state.user.userName
    };
};

var Container = connect(mapStateToProps)(mainPage);

module.exports = Container;