'use strict';

var React = require('react'),
    TestUtils = require('react-addons-test-utils'),
    should = require('chai').should();
    // App = require('../client/app/components/app.component');

var React = require('react'),
    ReactDOM = require('react-dom'),
    Provider = require('react-redux').Provider,
    store = require('../client/app/store'),
    router = require('react-router'),
    Router = router.Router,
    Route = router.Route,
    hashHistory = router.hashHistory,
    IndexRoute = router.IndexRoute;

describe('App component', function() {
    it('Renders App of a list',  function() {
        var renderer = TestUtils.createRenderer();
        // renderer.render(
        //     <Provider store={store}>
        //         <App />
        //     </Provider>
        // );
        // var result = renderer.getRenderOutput();
    });
});