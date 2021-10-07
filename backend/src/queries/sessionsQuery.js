exports.CREATE_SESSION = `
  INSERT INTO
    sessions(session_id, ip_address, user_agent, user_pk)
  VALUES($1, $2, $3, $4)
  RETURNING *;
`;

exports.DELETE_SESSION = `
  DELETE 
  FROM sessions
  WHERE session_id = $1;
`;