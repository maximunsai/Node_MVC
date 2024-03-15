const db = require('../config/config');

const article = {};

// article.create = (title, content)=>{
//     return db.none(`DROP DATABASE IF EXISTS mvc;
//     CREATE DATABASE mvc;
//     CREATE TABLE IF NOT EXISTS articles(
//         id BIGSERIAL PRIMARY KEY NOT NULL,
//         title TEXT NOT NULL,
//         content TEXT NOT NULL
//     )`, [title, content]);
// };

article.get = () => {
    return db.any('SELECT * FROM articles');
  };


// article.create = async(req, res)=>{
//     const dbName = req.params.name;
 
// try {
//     // Connect to the default 'postgres' database to execute CREATE DATABASE command
//     const client = await pool.connect();
//     await client.query(`CREATE DATABASE ${dbName}`);
    
//     client.release();

//     res.send(`Database '${dbName}' created successfully.`);
// } catch (error) {
//     console.error('Error creating database:', error);
//     res.status(500).send('Error creating database');
// }

// }

module.exports = article;

