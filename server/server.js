const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

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

  socket.on('connect', () => {
    console.log('User connected to server');
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected from server');
  });
});


server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});