require('dotenv').config();

const config = {
  server: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    encrypt: false,
    enableArithAbort: true
  }
}

module.exports = config;