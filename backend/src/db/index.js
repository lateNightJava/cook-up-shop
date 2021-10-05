const { Pool } = require('pg');
const { dataParser } = require('../util');

const pool = new Pool({
  user: process.env.DEV_DB_USER,
  host: process.env.DEV_DB_HOST,
  database: process.env.DEV_DB_NAME,
  password: process.env.DEV_DB_PASS,
  port: process.env.DEV_DB_PORT,
});

module.exports = {
  query: async (sql, params) => {
    const result = await pool.query(sql, params);

    return dataParser.parseTableRows(result.rows);
  },
  transaction: async (sql, params) => {
    const client = await pool.connect();

    try {
      await client.query('BEGIN');
      const res = await client.query(sql, params);
      await client.query('COMMIT');
      return res;
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
  },
  transactions: async (queries) => {
    const client = await pool.connect();

    try {
      await client.query('BEGIN');
      const res = await client.query(sql, params);
      for (let i = 0; i < queries.length; i++) {
        await queries.newParams(prevRes);
        const prevRes = await client.query(sql, params);
      }
      await client.query('COMMIT');
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
  },
};


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