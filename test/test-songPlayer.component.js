'use strict';

var React = require('react'),
    TestUtils = require('react-addons-test-utils'),
    should = require('chai').should(),
    SongPlayer = require('../client/app/components/songPlayer.component');

describe('SongPlayer component', function() {
    it('Renders SongPlayer',  function() {
        var songId = '6zDs6zI94L761vd0cVScTT';
        var songIdNull = null;
        var renderer = TestUtils.createRenderer();
        renderer.render(<SongPlayer songId={songIdNull} />);
        var result = renderer.getRenderOutput();
        console.log(result);
    });
});