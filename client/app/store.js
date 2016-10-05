'use strict';

var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;

var userReducer = require('./reducers/user.reducer');
var gameReducer = require('./reducers/game.reducer');

var initialState = {};

var reducers = function(state, action) {
    state = state || initialState;
    return {
        user: userReducer(state.user, action),
        game: gameReducer(state.game, action)
    };
};

var store = createStore(reducers, applyMiddleware(thunk));
module.exports  = store;
