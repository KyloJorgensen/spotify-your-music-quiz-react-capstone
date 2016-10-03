'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./callback.controller');

router.get('/', controller.getCallback);

module.exports = router;