'use strict';

var React = require('react'),
	CurrentQuestionControllerButton = require('./currentQuestionControllerButton.component');

var currentQuestionController = function(props) {
	var pervious = {
		value: 'Previous',
		display: false,
		link: -1
	}
	if (props.currentQuestion > 1) {
		pervious.display = true;
	}

	var next = {
		value: 'Next',
		display: false,
		link: 1
	}
	if (props.currentQuestion == props.numberOfQuestions) {
		next = {
			value: 'Finish',
			display: false,
			link: 0
		}
	}
	if (props.currentChoice != null) {
		next.display = true;
	}
	
	return (
        <div className="current-question-controller">
            <CurrentQuestionControllerButton content={pervious} />
            <div>
	            <p>{props.currentQuestion} / {props.numberOfQuestions}</p>
			</div>
            <CurrentQuestionControllerButton content={next} />
        </div>
    ); 
};

module.exports = currentQuestionController;