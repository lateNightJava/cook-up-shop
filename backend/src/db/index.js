const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DEV_DB_USER,
  host: process.env.DEV_DB_HOST,
  database: process.env.DEV_DB_NAME,
  password: process.env.DEV_DB_PASS,
  port: process.env.DEV_DB_PORT,
});

// // await pool.query(`SET TIME ZONE 'UTC'`);
// (async function () {
//   try {
//     const res = await pool.query(
//       'INSERT INTO users(email, created_at, updated_at) VALUES ($1, CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3));', 
//       ['fake@fake.com']
//     );
//     console.log(res);
//   } catch(err) {
//     console.log(err);
//   }
// })();

module.exports = {
  query: (sql, params) => pool.query(),
};