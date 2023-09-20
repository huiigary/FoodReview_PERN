const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  user: 'postgres',
  password: process.env.PSQL_PASSWORD,
  host: 'localhost',
  port: 5432,
  database: 'foodreview',
})

// console.log(await pool.query('SELECT NOW()'))
module.exports = {
  query: (text, params) => pool.query(text, params),
}
