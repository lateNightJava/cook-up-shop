const { User } = require('../models');

exports.create = async (req, res, next) => {
  try {
    console.log('req.body = ', req.body);
    let user = await User.find(req.body);
    console.log('user =', user);
    if (user.id) {
      return res.status(400).send({ errorMessage: 'Unable to create account.' });
    }
  
    user = await User.create(req.body);
    console.log(user);
  
    return res.status(200).send(user.toJsonRes());
  } catch (err) {
    next(err);
  }
};

