const express = require('express');
const adminController = require('../controller/adminController');
const Router = express.Router();

Router.post('/create',adminController.crearadmin);

module.exports = Router;