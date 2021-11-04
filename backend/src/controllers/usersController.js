const { User, Session } = require('../models');

exports.create = async (req, res, next) => {
  try {
    console.log('req.body = ', req.body);
    let user = await User.find(req.body);
    console.log('user =', user);
    if (user.userId) {
      console.log('a user already exists');
      return res.status(400).send({ message: 'unable to create account' });
    }
  
    user = await User.create(req.body);
    console.log(user);
    const session = await Session.create(user, req.ip);
    console.log(session);

    res.cookie(process.env.SESSION_COOKIE_NAME, session.sessionId, { 
      httpOnly: true,
      domain: 'something.localhost',
    });
  
    return res.status(200).send(user.toJsonRes());
  } catch (err) {
    console.log('err in user create', err);
    next(err);
  }
};

