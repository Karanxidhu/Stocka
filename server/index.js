const express = require('express')
var cors = require('cors') 
require("dotenv").config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.use('/api/stocks', require('./routes/stocks'))

app.listen(port, () => {
    console.log(`backend listening at http://localhost:${port}`)
  })