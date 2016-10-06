'use strict';

var actions = require('../actions/gameActions');

var gameInitialState = {
	currentQuestion: 0,
    songId: null
};

var gameReducer = function(state, action) {
    state = state || gameInitialState;
    if (action.type === actions.GET_TRACKS_SUCCESS) {
        console.log(action);
    	state.currentQuestion = 1;
        state.tracks = action.tracks;
    } else if (action.type === actions.GET_TRACKS_ERROR) {
        console.log(action);
    } else if (action.type === actions.CHANGE_CURRENT_QUESTION) {
    	state.currentQuestion = state.currentQuestion + action.value;
    } else if (action.type === actions.GAME_OVER) {
    	state.currentQuestion = "GAME_OVER";
    } else if (action.type === actions.NEW_GAME) {
    	state.currentQuestion = 0;
        state.songId = null;
    } else if (action.type === actions.SET_CHOICE) {
    	state.tracks[state.currentQuestion-1].currentChoice = action.choice;
    } else if (action.type === actions.SET_SONG_ID) {
        state.songId = action.songId;
    }
    return state;
};

module.exports = gameReducer;