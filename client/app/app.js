'use strict';

var React = require('react'),
    ReactDOM = require('react-dom'),
    Provider = require('react-redux').Provider,
    store = require('./store'),
    App = require('./components/app.component'),
    MainPage = require('./components/mainPage.component'),
    Game = require('./components/game.component'),
    GameList = require ('./components/gameList.component'),
    FiveQuestionQuiz = require('./components/fiveQuestionQuiz.component'),
    router = require('react-router'),
    Router = router.Router,
    Route = router.Route,
    hashHistory = router.hashHistory,
    IndexRoute = router.IndexRoute;

var routes = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={MainPage} />
                <Route path="login/:access_token/:refresh_token" component={MainPage} />
                <Route path="game" component={Game} >
                    <IndexRoute component={GameList} />
                    <Route path="five-question-quiz" component={FiveQuestionQuiz} />
                </Route>
            </Route>
        </Router>
    </Provider>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});