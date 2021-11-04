const express = require('express');
const { SessionsController } = require('../controllers');

const AuthRouter = express.Router();

AuthRouter.post('/', SessionsController.signIn);
AuthRouter.delete('/', SessionsController.signOut);

module.exports = AuthRouter;