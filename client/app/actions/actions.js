'use strict';

var $ = require('jquery');
require('isomorphic-fetch');

var ACTION = 'ACTION';
var action = function(data) {
    return {
        type: ACTION,
        data: data
    }
};

var ASYNC_ACTION = function() {
    return function(dispatch) {
        $.ajax({
            url: '/data',
            datatype: 'jsonp',
            type: 'GET'
        }).done(function(data) {
            return dispatch(
                asyncActionSuccess(data)
            );
        }).fail(function(error){
            return dispatch(
                asyncActionError(error)
            );
        });
    }
};

var ASYNC_ACTION_SUCCESS = 'ASYNC_ACTION_SUCCESS';
var asyncActionSuccess = function(data) {
    return {
        type: ASYNC_ACTION_SUCCESS,
        data: data
    };
};

var ASYNC_ACTION_ERROR = 'ASYNC_ACTION_ERROR';
var asyncActionError = function(error) {
    return {
        type: ASYNC_ACTION_ERROR,
        error: error
    };
};

exports.ACTION = ACTION;
exports.action = action;
exports.ASYNC_ACTION = ASYNC_ACTION;
exports.ASYNC_ACTION_SUCCESS = ASYNC_ACTION_SUCCESS;
exports.getdataSuccess = getdataSuccess;
exports.ASYNC_ACTION_ERROR = ASYNC_ACTION_ERROR;
exports.getFewestGuessesError = getFewestGuessesError;