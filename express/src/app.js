import express from 'express'
import cors from 'cors'
import breeds from './data.js'
import mysql from 'mysql'

const app = express()
const port = 4000

const sql = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
})

sql.connect()

app.use(cors())
app.use(express.json())

app.get('/breeds', (req, res) => {
  res.json(breeds)
})

app.post('/dog', (req, res) => {
  const {name, age} = req.body
  const query = `SELECT * FROM dogs WHERE name=${name} AND age=${age}`

  const checkResult = sql.query(query)
  if (checkResult.length > 0) {
    res.status(400).json("That dog already exists")
    return;
  }

  const insertQuery = `INSERT INTO dogs (name, age) VALUES(${name}, ${age})`
  sql.query = insertQuery;
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
