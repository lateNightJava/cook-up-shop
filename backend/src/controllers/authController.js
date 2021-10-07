const { User, Session } = require('../models');
const { verifyPassword } = require('../util/auth');


exports.login = async (req, res, next) => {
  try {
    console.log('req.body =', req.body);
    const user = await User.find(req.body);
    console.log('user =', user);
    if (!user.userId || !(await user.verifyPassword(req.body))) {
      return res.status(401).send({ errorMessage: 'Please check credentials and try again.' });
    }

    const session = await Session.create(user);
    console.log(session);

    return res.status(200).send(user.toJsonRes());
  } catch(err) {
    return next(err);
  }
};


