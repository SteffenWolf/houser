require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller')
const session = require('express-session')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();

app.use(express.json())

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000*60*60*24*7
    }
  })
)

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  console.log('Connected to database');
});


//endpoints
app.get('/api/houses', ctrl.getAll)
app.post('/api/houses', ctrl.addHouse)
app.delete('/api/houses/:id', ctrl.destroyHouse)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));