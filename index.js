const express = require('express');
const routes = require('./src/routes');
const app = express();
const port = 3000;
const host = '0.0.0.0';

app.use(express.json());

app.use('/', routes);

app.listen(port, host);

console.log("Server running!");
