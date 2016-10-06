'use strict';

var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;

var userReducer = require('./reducers/user.reducer');
var fiveQuestionQuizReducer = require('./reducers/fiveQuestionQuiz.reducer');

var initialState = {};

var reducers = function(state, action) {
    state = state || initialState;
    return {
        user: userReducer(state.user, action),
        fiveQuestionQuiz: fiveQuestionQuizReducer(state.fiveQuestionQuiz, action)
    };
};

var store = createStore(reducers, applyMiddleware(thunk));
module.exports  = store;
