/*** CREATE ***/ 
exports.CREATE_USER = `
INSERT INTO 
  users(first_name, last_name, producer_name, email, password_hash, created_at, updated_at)
VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3))
RETURNING *;
`;

/*** READ ***/ 
exports.FIND_USER_BY_ID = `SELECT * FROM users WHERE id = $1;`;
exports.FIND_USER_BY_EMAIL = `SELECT * FROM users WHERE email = $1;`;

/*** UPDATE ***/ 
exports.UPDATE_USER_DETAILS = `
UPDATE users
SET 
  first_name = $1, 
  last_name = $2, 
  producer_name = $3,
  updated_at = CURRENT_TIMESTAMP(3),
WHERE id = $5;
`;

exports.UPDATE_USER_EMAIL = `
UPDATE users
SET 
  email = $1, 
  updated_at = CURRENT_TIMESTAMP(3),
WHERE id = $2;
`;

exports.UPDATE_USER_PASSWORD = `
UPDATE users
SET 
  password_hash = $1, 
  updated_at = CURRENT_TIMESTAMP(3),
WHERE id = $2;
`;

/*** DESTROY ***/ 
exports.DELETE_USER = `DELETE FROM users WHERE id = $1`;