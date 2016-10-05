'use strict';

var React = require('react'),
	connect = require('react-redux').connect,
	LoginSatus = require('./loginSatus.component'),
	actions = require('../actions/userActions'),
	Link = require('react-router').Link;

var mainPage = function(props) {
	if (props.access_token) {
		props.dispatch(actions.getUser(props.access_token))
	} else {
		if (props.params.access_token) {
			props.dispatch(actions.loginUser(props.params.access_token, props.params.refresh_token));
		}	
	}

	if (props.userName) {
		return (
			<div className="main-page">
				<p>{props.userName}</p>
				<button><Link to={'/game'}>game</Link></button>
			</div>
		);
	} else {
		return (
	        <div className="main-page">
	            <p>Hello World</p>
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