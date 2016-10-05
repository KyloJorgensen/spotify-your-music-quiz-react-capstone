'use strict';

var React = require('react');
var Choice = require('./choice.component');

var choicesContainer = function(props) {
    var choices = [];
    for (var i = 0; i < props.choices.length; i++) {
        choices.push(<Choice key={i} choice={props.choices[i]} currentChoice={props.currentChoice} />);
    }
    return (
        <ul className="choices-container">
            {choices}
        </ul>
    ); 
};

module.exports = choicesContainer;