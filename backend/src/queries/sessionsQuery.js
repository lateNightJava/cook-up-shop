exports.CREATE_SESSION = `
  INSERT INTO
    sessions(session_id, ip_address, user_agent, users_pk)
  VALUES($1, $2, $3, $4)
  RETURNING *;
`;