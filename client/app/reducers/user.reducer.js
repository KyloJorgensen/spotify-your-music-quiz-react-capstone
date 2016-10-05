'use strict';

var actions = require('../actions/userActions');

var userInitialState = {
    loginSatus: false,
	access_token: false,
	refresh_token: false,
	userImageUrl: false
};

var userReducer = function(state, action) {
    state = state || userInitialState;
    if (action.type === actions.GET_USER_SUCCESS) {
        state.userName = action.me.display_name;
    } else if (action.type === actions.GET_USER_ERROR) {
    	console.log(action.error);
    } else if (action.type === actions.LOGIN_USER) {
    	state.access_token = action.access_token;
    	state.refresh_token = action.refresh_token;
    }

    return state;
};

module.exports = userReducer;