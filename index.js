require('dotenv').config();

const express = require('express');
const routes = require('./src/routes');
const migrate = require('./database/migrate.js');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());
app.use('/', routes);
app.listen(PORT, HOST);

console.log("Server running! :)");
