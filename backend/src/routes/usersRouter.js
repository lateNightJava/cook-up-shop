const express = require('express');
const { UsersController } = require('../controllers');

const UsersRouter = express.Router();

// UsersRouter.get('/', UsersController.find);
UsersRouter.post('/', UsersController.create);
// UsersRouter.patch('/:id', UsersController.update);
// UsersRouter.delete('/:id', UsersController.destroy);

module.exports = UsersRouter;