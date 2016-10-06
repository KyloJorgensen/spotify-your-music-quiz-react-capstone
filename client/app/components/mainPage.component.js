'use strict';

var React = require('react'),
	connect = require('react-redux').connect,
	userActions = require('../actions/userActions'),
	GameList = require('./gameList.component');

var mainPage = function(props) {
	if (props.access_token) {
		props.dispatch(userActions.getUser(props.access_token))
	} else {
		if (props.params.access_token) {
			props.dispatch(userActions.loginUser(props.params.access_token, props.params.refresh_token));
		}	
	}

	if (props.userName) {
		return (
			<div className="main-page">
				<h3>Hello {props.userName}, choose the game you would like to play.</h3>
				<GameList />
			</div>
		);
	} else {
		return (
	        <div className="main-page">
	            <h1>Hello, Welcome to Spotify Your Music Quiz. To play a quiz with your spotify music login to spotify at the top right hand corner.</h1>
	        </div>
	    );
	}
};


var mapStateToProps = function(state, props) {
    return {
        access_token: state.user.access_token,
        userName: state.user.userName
    };
};

var Container = connect(mapStateToProps)(mainPage);

module.exports = Container;