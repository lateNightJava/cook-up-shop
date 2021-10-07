CREATE TABLE sessions (
  session_pk BIGSERIAL PRIMARY KEY NOT NULL UNIQUE,
  session_id VARCHAR NOT NULL UNIQUE,
  ip_address VARCHAR NOT NULL,
  user_agent VARCHAR NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP(3) NOT NULL,
  expires_on TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP(3) + INTERVAL '3 months' NOT NULL,
  user_pk BIGINT NOT NULL REFERENCES users ON DELETE CASCADE
);