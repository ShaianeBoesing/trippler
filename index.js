const express = require('express');
const session = require('express-session');
const routes = require('./src/routes');
const app = express();
const port = 3000;
const host = '0.0.0.0';

app.use(express.json());

app.use(session({
    secret: 'sM0n1fW6yHg4aL9zCv2bQp8nRj5uXe3r',
    resave: false,
    saveUninitialized: true
}));
  
app.use('/', routes);

app.listen(port, host);

console.log("Server running!");
