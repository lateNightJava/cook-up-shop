const { User } = require('../models');

exports.create = async (req, res, next) => {
  try {
    console.log('req.body = ', req.body);
    let user = await User.find(req.body);
    console.log('user =', user);
    if (user.userId) {
      console.log('a user already exists');
      return res.status(400).send({ message: 'Unable to create account.' });
    }
  
    user = await User.create(req.body);
    console.log(user);
  
    return res.status(200).send(user.toJsonRes());
  } catch (err) {
    console.log('err in user create', err);
    next(err);
  }
};

