const path = require('path')
const express = require('express')
const socketIO = require('socket.io')
const http = require('http')

const { generateMessage, generateLocationMessage } = require('./utils/message');
const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected')

    socket.emit('newMessage', generateMessage('Admin', 'welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'))

    socket.on('createMessage', (message, callback) => {
        console.log('create message', message)
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('this is from the server');

    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude))
    })

    socket.on('disconnect', () => {
        console.log('disconnected from server')
    })
})



server.listen(3000, (req, res) => {
    console.log(`Listening to port ${port }`);
})