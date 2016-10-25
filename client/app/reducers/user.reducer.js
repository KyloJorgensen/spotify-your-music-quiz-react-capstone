'use strict';

var actions = require('../actions/userActions');

var userInitialState = {
	access_token: false,
	refresh_token: false,
    userName: false,
    userUrl: false
};

var userReducer = function(state, action) {
    state = state || userInitialState;
    if (action.type === actions.GET_USER_SUCCESS) {
        state.userName = action.me.display_name|| action.me.id;
        state.userUrl = action.me.external_urls.spotify;
    } else if (action.type === actions.GET_USER_ERROR) {
    	console.log(action.error);
    } else if (action.type === actions.LOGIN_USER) {
    	state.access_token = action.access_token;
    	state.refresh_token = action.refresh_token;
        state.userName = false;
    }

    return state;
};

module.exports = userReducer;