const mysql = require('mysql2');

const connection = () => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
    
    return connection;
}

module.exports =  connection;
