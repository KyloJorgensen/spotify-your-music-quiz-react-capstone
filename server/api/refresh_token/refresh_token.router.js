'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./refresh_token.controller');

router.get('/', controller.getRefreshToken);

module.exports = router;