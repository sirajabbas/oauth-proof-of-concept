/**
 * Author: Siraj
 * Create on Jun 13 2021
 * This file contains all the api routes associated to books
 */
const express = require('express'),
    router = express.Router(),
    controllers = require('../controllers'),
    authHelper = require('./middlewares/authorize');

router.get('/all', authHelper.oauthAuthorize, controllers.bookController.getAllBooks)


module.exports = router;
