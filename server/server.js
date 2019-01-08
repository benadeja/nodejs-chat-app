const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const { generateMessage, generateLocationMessage } = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

// Setting up an http server and telling Express to use that server
var app = express();
var server = http.createServer(app);

// Create a Web Socket server to listen to and emit events
var io = socketIO(server);

// Tell Express to server up static content
app.use(express.static(publicPath));

// Listen for a new connection and handle connection and disconnection event handlers
io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app.'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined.'));

  //emit to single socket
  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);
    // broadcast to all connections
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('This is from the server');
  });

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude))
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected from server');
  });
});


server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});