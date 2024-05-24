const express = require('express');
const userController = require('../controller/userController'); 
const Router = express.Router();

Router.post('/create',userController.crearUsuario);

module.exports = Router;
