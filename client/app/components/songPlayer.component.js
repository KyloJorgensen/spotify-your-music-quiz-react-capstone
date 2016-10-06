'use strict';

var React = require('react');

var songPlayer= function(props) {
    if (props.songId != null) {
        var _src = "https://embed.spotify.com/?uri=spotify:track:" + props.songId;
        return (
            <iframe  className="song-player" src={_src} width="300" height="380" frameBorder="0" allowTransparency="true"></iframe>
        );
    } else {
        return (
            <div className="song-player">
                <h1>Click A Song To Display Song Player</h1>
            </div>
        );
    } 
};

module.exports = songPlayer;