'use strict';

require('isomorphic-fetch');

var getTracks = function(url, access_token) {
    return function(dispatch) {
        var _url = 'https://api.spotify.com/v1/me/tracks?offset=0&limit=50';
        if (url != null) {
            _url = url;
        }
        return fetch(_url, {
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
            return dispatch(allTracks(null, data, url, access_token));
        })
        .catch(function(error) {
            return dispatch(allTracks(error));
        });
    }
};

var storedTracks = [];

var allTracks = function(error, data, url, access_token) {
    if (error) {
        return function(dispatch) {
            return dispatch(getTracksError(error));
        };
    } else {
        if (url == null) {
            storedTracks = [];
        }

        for (var i = 0; i < data.items.length; i++) {
            storedTracks.push(data.items[i]);
        }

        if (data.next == null) {
            return function(dispatch) {
                if (error) {
                    return dispatch(getTracksError(error));
                } else  {
                    return dispatch(generateQuiz(storedTracks));
                }
            };
        } else {
            return function(dispatch) {
                return dispatch(getTracks(data.next, access_token));
            };
        }
    }
}

var randomNumber = function(max) {
    return Math.floor((Math.random() * max) + 1);
};

// shuffles an array
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

var generateQuiz = function(tracks) {
    var quiz = [];
    for (var i = 0; i < 5; i++) {
        var randomTrack = tracks[randomNumber(tracks.length)].track;
        var track = {};
        track.song = randomTrack.name;

        track.artists = [];
        for (var h = 0; h < randomTrack.artists.length; h++) {
            track.artists.push(randomTrack.artists[h].name)
        }

        track.randomArtists = [];
        for (var g = 0; g < 4; g++) {
            var randomArtists = tracks[randomNumber(tracks.length)].track.artists;
            var wrongArtists = [];
            for (var f = 0; f < randomArtists.length; f++) {
                wrongArtists.push(randomArtists[f].name); 
            }
            track.randomArtists.push(wrongArtists);
        }
        track.randomArtists.push(track.artists);
        track.randomArtists = shuffle(track.randomArtists);
        track.currentChoice = null;
        quiz.push(track);
    }
    return function(dispatch) {
        return dispatch(getTracksSuccess(quiz));
    }
};

var GET_TRACKS_SUCCESS = 'GET_TRACKS_SUCCESS';
var getTracksSuccess = function(tracks) {
    return {
        type: GET_TRACKS_SUCCESS,
        tracks: tracks
    };
};

var GET_TRACKS_ERROR = 'GET_TRACKS_ERROR';
var getTracksError = function(error) {
    return {
        type: GET_TRACKS_ERROR,
        tracks: error
    };
};

var CHANGE_CURRENT_QUESTION = 'CHANGE_CURRENT_QUESTION';
var changeCurrentQuestion = function(value) {
    return {
        type: CHANGE_CURRENT_QUESTION,
        value: value
    }
};

var GAME_OVER = 'GAME_OVER';
var gameOver = function() {
    return {
        type: GAME_OVER
    }
};

var NEW_GAME = 'NEW_GAME';
var newGame = function() {
    return {
        type: NEW_GAME
    }
};

var SET_CHOICE = 'SET_CHOICE';
var setChoice = function(choice) {
    return {
        type: SET_CHOICE,
        choice: choice
    }
};

exports.getTracks = getTracks;
exports.GET_TRACKS_SUCCESS = GET_TRACKS_SUCCESS;
exports.getTracksSuccess = getTracksSuccess;
exports.GET_TRACKS_ERROR = GET_TRACKS_ERROR;
exports.getTracksError = getTracksError;
exports.CHANGE_CURRENT_QUESTION = CHANGE_CURRENT_QUESTION;
exports.changeCurrentQuestion = changeCurrentQuestion;
exports.GAME_OVER = GAME_OVER;
exports.gameOver = gameOver;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
exports.SET_CHOICE = SET_CHOICE;
exports.setChoice = setChoice;

// var LOGIN_USER = 'LOGIN_USER';
// var loginUser = function(access_token, refresh_token) {
//     return {
//         type: LOGIN_USER,
//         access_token: access_token,
//         refresh_token: refresh_token
//     }
// };

// exports.LOGIN_USER = LOGIN_USER;
// exports.loginUser = loginUser;