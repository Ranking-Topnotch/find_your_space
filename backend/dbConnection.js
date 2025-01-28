const mysql = require('mysql2')

const db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

db.getConnection()
    .then(() => console.log('Database connected successfully!'))
    .catch(err => {
        console.error('Error connecting to the database:', err.message);
        process.exit(1); 
    });

module.exports = db