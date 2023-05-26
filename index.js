require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const connection = require('./database/connection.js');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

const conn = connection()

app.get('/', (req, res) => {
    conn.query('SELECT * FROM users', (error, results) => {
        if (error) {
            res.send('Erro: ' + error.message);
        } else {
            res.send(results);
        }
    });
});

app.listen(PORT, HOST)