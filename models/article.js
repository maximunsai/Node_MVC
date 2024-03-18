
require('dotenv').config();
const { Pool } = require('pg');


const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});


const createUsersTable = async () => {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
      )
    `;
    await pool.query(createTableQuery);
    console.log('Users table created successfully');
  } catch (error) {
    console.error('Error creating users table:', error);
  } 
};

const getAllUsers = async ()=>{
  try {
    const query =`SELECT * FROM users`;
    const {rows} = await pool.query(query);
    return rows;
  }catch(error){
    console.error('Unable to fetch the users', error);
  }
}


const createUser = async (username, email, password) => {
  try {
      const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';
      await pool.query(query, [username, email, password]);
      console.log('User created successfully');
      return { success: true };
  } catch (error) {
      console.error('Error creating user:', error);
      return { success: false, error: error.message };
  }
};

module.exports = { createUsersTable, getAllUsers, createUser};


