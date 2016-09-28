'use strict';

var path = require('path');

function MainController() {};

MainController.prototype.getRoot = function(req, res) {
    res.sendFile(path.join(__dirname, '../../../build/index.html'));
};

module.exports = MainController.prototype;