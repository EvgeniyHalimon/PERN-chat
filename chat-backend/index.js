const bodyParser = require('body-parser')
const express = require('express')
const config = require('./config/app')
const router = require('./router')

const app = express()

const PORT = config.appPort

const cors = require('cors')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use(router)
app.use(express.static(__dirname + '/public'))

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server listening on port ${PORT}!`)
})