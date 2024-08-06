import express from 'express'
import cors from 'cors'
import breeds from './data.js'

const app = express()
const port = 4000

app.use(cors())

app.get('/breeds', (req, res) => {
  res.json(breeds)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
