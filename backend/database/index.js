const sql = require('mssql');
const config = require('../config');

const connection = async () => {

  let pool = null;

  try {
    pool = await sql.connect(config);
    console.log("Database connected!");
  } catch(error) {
    pool = null;
    console.log(error);
  }

  return pool;

}
const querying = async (query) => {
    const requestQuery = await connection();
    const results = await requestQuery.request().query(query);
    return results;
  }
  
  module.exports = {
    query: querying,
  }