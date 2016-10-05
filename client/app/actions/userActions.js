'use strict';

require('isomorphic-fetch');

var getUser = function(access_token) {
    return function(dispatch) {
        var url = 'https://api.spotify.com/v1/me';
        return fetch(url, {
            headers: {
                'Authorization': 'Bearer ' + access_token
            }
        }).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return dispatch(getUserSuccess(data));
        })
        .catch(function(error) {
            return dispatch(getUserError(error));
        });
    }
};

var GET_USER_SUCCESS = 'GET_USER_SUCCESS';
var getUserSuccess = function(data) {
    return {
        type: GET_USER_SUCCESS,
        me: data
    };
};

var GET_USER_ERROR = 'GET_USER_ERROR';
var getUserError = function(error) {
    return {
        type: GET_USER_ERROR,
        me: error
    };
};

var LOGIN_USER = 'LOGIN_USER';
var loginUser = function(access_token, refresh_token) {
    return {
        type: LOGIN_USER,
        access_token: access_token,
        refresh_token: refresh_token
    }
};

exports.getUser = getUser;
exports.GET_USER_SUCCESS = GET_USER_SUCCESS;
exports.getUserSuccess = getUserSuccess;
exports.GET_USER_ERROR = GET_USER_ERROR;
exports.getUserError = getUserError;
exports.LOGIN_USER = LOGIN_USER;
exports.loginUser = loginUser;