const path = require('path')
const express = require('express')
const socketIO = require('socket.io')
const http = require('http')

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected')
    socket.on('disconnect', () => {
        console.log('disconnected from server')
    })
})



server.listen(3000, (req, res) => {
    console.log(`Listening to port ${port }`);
})