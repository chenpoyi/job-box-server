require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')

const cors = require('cors')
const app = express()
const port = 3001

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors())
app.get('/api', (req, res) => {
  console.log("RECEIVED")
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})