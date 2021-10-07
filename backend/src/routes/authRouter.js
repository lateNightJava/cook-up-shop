const express = require('express');
const { AuthController } = require('../controllers');

const AuthRouter = express.Router();

AuthRouter.post('/', AuthController.login);

module.exports = AuthRouter;