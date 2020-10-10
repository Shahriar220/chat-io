 var socket = io();

 socket.on('connect', function() {
     console.log('Connected to server');

     socket.emit('createMessage', {
         from: 'andrew',
         text: 'hellllloooo'
     })
 });
 socket.on('disconnect', function() {
     console.log('Disconnected')
 });

 socket.on('newMessage', function(message) {
     console.log('received: ', message);
 })