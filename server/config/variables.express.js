'use strict';

module.exports = {
    EXPRESS_PORT: process.env.PORT || 8080,
    EXPRESS_LISTEN_MESSAGE: 'Listening on port ',
    MONGODB: {
        PORT: "",
        URI: process.env.MONGODB_URI || 'mongodb://localhost/centralize'
    }
};