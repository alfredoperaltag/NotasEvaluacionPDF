const express = require('express')
const patientRouter = require('./router/patient')
const path = require('path')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(patientRouter)

app.listen(port, () => {
    console.log('Server is up on port', port)
})

const publicPath = path.join(__dirname + "/public")

app.use(express.static(__dirname))
app.use(express.static(publicPath))

app.get('', (req, res) => {
    res.render('index')
})