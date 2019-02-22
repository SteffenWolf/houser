require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  console.log('Connected to database');
});

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
