'use strict';

var React = require('react'),
	Link = require('react-router').Link;

var gameList = function() {
	return (
		<div className="game-list">
			<h3>Games</h3>
			<Link className="btn btn-default" to={'/game/five-question-quiz'}>5 Question Quiz</Link>
		</div>
	);
};

module.exports = gameList;