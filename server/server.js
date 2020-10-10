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

    socket.emit('newMessage', {
        from: 'john',
        text: 'see u later',
        createdAt: 123123
    })

    socket.on('createMessage', (message) => {
        console.log('create message', message)
    })

    socket.on('disconnect', () => {
        console.log('disconnected from server')
    })
})



server.listen(3000, (req, res) => {
    console.log(`Listening to port ${port }`);
})