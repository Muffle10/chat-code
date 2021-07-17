var express = require("express")
var app = express()
var http = require("http")
var server = http.createServer(app)
var socketio = require('socket.io')
var io = socketio(server)
var dotenv = require('dotenv').config()
if (dotenv.error){
    console.log(dotenv.error)
}
var port = process.env.PORT || 3000
const path = require('path')
app.use('/', express.static(path.join(__dirname, 'public')))
app.listen(port, () => {
    console.log(`Server listening at localhost:${port}`)
})

