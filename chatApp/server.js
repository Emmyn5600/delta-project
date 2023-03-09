// make server 
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const http = require('http')
const socketio = require('socket.io')

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//create server
const server = http.createServer(app);

//create socket
const io = socketio(server);


io.on('connection', (socket) => {
  console.log('New WebSocket connection')

  socket.emit('message', 'Welcome! to chat app')

  socket.broadcast.emit('message', 'A new user has joined')

  socket.on("disconnect", () => {
    io.emit("message", "A user has left");
  } );

  socket.on('chatMessage', (message) => {
    io.emit('message', message)
  })
})









server.listen(port, () => console.log(`Example app listening on port ${port}!`));