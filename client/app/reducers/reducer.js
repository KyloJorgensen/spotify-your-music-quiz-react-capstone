'use strict';

var actions = require('../actions/actions');

var initialState = {};

var reducer = function(state, action) {
    state = state || initialState;
    if (action.type === actions.ACTION) {
        state = action.data;
    }

    return state;
};

module.exports = reducer;