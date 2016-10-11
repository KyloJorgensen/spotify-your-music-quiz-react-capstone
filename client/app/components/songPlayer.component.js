'use strict';

var React = require('react');

var songPlayer = function(props) {
    if (props.songId != null) {
        var _src = "https://embed.spotify.com/?uri=spotify:track:" + props.songId;
        return (
            <iframe  className="song-player" src={_src} height="80" frameBorder="0" allowTransparency="true"></iframe>
        );
    } else {
        return (
            <div className="song-player">
                
            </div>
        );
    }
};

module.exports = songPlayer;