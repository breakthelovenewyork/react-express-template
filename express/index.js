const express = require('express')
const cors = require('cors')

const app = express()
const breeds = require('./data.js')
const port = 4000

app.use(cors())

app.get('/breeds', (req, res) => {
  res.json(breeds)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
