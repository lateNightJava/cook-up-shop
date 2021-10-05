const express = require('express');
const { UsersController } = require('../controllers');

const UsersRouter = express.Router();

UsersRouter.use((req, res, next) => {
  const allowedParams = {
    get: {},
    post: {
      'firstName': 1, 
      'lastName': 1, 
      'producerName': 1, 
      'email': 1, 
      'password': 1,
    },
    put: {
      'firstName': 1, 
      'lastName': 1, 
      'producerName': 1, 
      'email': 1, 
      'password': 1,
    },
  };
  console.log('req.baseUrl 2 =', req.baseUrl);
  console.log('req.path 2 =', req.path);
  console.log('req.method 2 =', req.method);

  const paramsKeys = Object.keys(req.params || req.body);
  for (let i = 0; i < paramsKeys.length; i++) {
    if (!allowedParams[req.method.toLowerCase()][paramsKeys[i]]) {
      console.log('invalid params', paramsKeys[i]);
      throw new Error('Invalid Params');
    }
  }

  return next();
});

// UsersRouter.get('/', UsersController.find);
UsersRouter.post('/', UsersController.create);
// UsersRouter.patch('/:id', UsersController.update);
// UsersRouter.delete('/:id', UsersController.destroy);

module.exports = UsersRouter;