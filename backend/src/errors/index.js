// exports.UsersError = require('./usersError');

const errorHandler = async (err, req, res, next) => {
  console.log('reached error handler');
  console.log(err);
  console.log('reached error handler');
  console.error(err.stack);

  return res.status(500).send({ message: 'Server error.' });
};

module.exports = errorHandler;