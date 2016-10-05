'use strict';

var React = require('react'),
	connect = require('react-redux').connect,
	LoginSatus = require('./loginSatus.component'),
	userActions = require('../actions/userActions'),
	gameActions = require('../actions/gameActions'),
	Link = require('react-router').Link;

var mainPage = React.createClass({
    newGame: function() {
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
					<h3>Hello {this.props.userName}, choose the game you would like to play.</h3>
					<button className="btn btn-default" onClick={this.onClick} ><Link to={'/game'}>5 Question Quiz</Link></button>
				</div>
			);
		} else {
			return (
		        <div className="main-page">
		            <h1>Hello, Welcome to Spotify Your Music Quiz. To play a quiz with your spotify music login to spotify at the top right hand corner.</h1>
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