const argon2 = require('argon2');

exports.generatePasswordHash = password => argon2.hash(`${password}${process.env.PEPPER}`, { types: argon2.argon2id });
exports.verifyPassword = (passwordHash, password) => argon2.verify(passwordHash, `${password}${process.env.PEPPER}`);