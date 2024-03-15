const promise = require('bluebird');

const options ={
    promiseLib:promise,
    query: (e)=>{
        console.log(e.query);
    }
};

const pgp = require('pg-promise')(options);

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

// const connectionString = process.env.DATABASE_URL;



const db = pgp(connectionString);

module.exports = db;

