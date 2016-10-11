'use strict';

var React = require('react'),
    connect = require('react-redux').connect,
    Menu = require('./menu.component');


var App = function(props) {
    return (
        <div className="music-quiz">
            <nav>
                <div>
                    <h1>Spotify Music Quiz</h1>
                    <Menu status={props.access_token} userUrl={props.userUrl} userName={props.userName}/>
                </div>
            </nav>
            <div className="music-quiz-body">
                <div>
                    {props.children}
                </div>
                <footer> </footer>
            </div>
        </div>
    );
};

var mapStateToProps = function(state, props) {
    return {
        access_token: state.user.access_token,
        userName: state.user.userName,
        userUrl: state.user.userUrl
    };
};

var Container = connect(mapStateToProps)(App);

module.exports = Container;