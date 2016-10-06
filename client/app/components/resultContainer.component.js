'use strict';

var React = require('react');
var Result = require('./result.component');

var resultConatiner= function(props) {
    console.log(props);
    var results = [];
    var score = 0;
    for (var i = 0; i < props.results.length; i++) {
        var anwser = props.results[i].artists;
        var choice = props.results[i].currentChoice;
        var correct = true;
        if (anwser.length == choice.length) {
            for (var h = 0; h < anwser.length; h++) {
                if (anwser[h] != choice[h]) {
                    correct = false;
                }
            }
            if (correct) {
                score++;
            }
        }
        results.push(<Result key={i} song={props.results[i].song} anwser={anwser} correct={correct} songId={props.results[i].songId} />);
    }
    return (
        <div className="result-container" >
            <h3>Your Score : {score}/{props.results.length}</h3>
            <ol className="results">
                {results}
            </ol>
        </div>
    ); 
};

module.exports = resultConatiner;