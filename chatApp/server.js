// make server 
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const http = require('http')
const socketio = require('socket.io')
const formatMessage = require('./utils/messages')
const {userJoin, getCurrentUser,userLeave ,getRoomUsers} = require('./utils/users')

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//create server
const server = http.createServer(app);

//create socket
const io = socketio(server);

const userName = 'ChatCord Bot'

io.on('connection', (socket) => {
 

  socket.on ('joinRoom', ({username, room}) => {
    const user = userJoin(socket.id, username, room)
    socket.join(user.room)
    socket.emit('message', formatMessage(userName,'Welcome! to chat app') )

  socket.broadcast.emit('message',formatMessage(userName, `${user.username} has joined the chat`))

  })

  socket.on("disconnect", () => {
    io.emit("message",formatMessage(userName, "A user has left"));
  } );

  //listen for chatMessage
  socket.on('chatMessage', (message) => {
    const user = getCurrentUser(socket.id)
    io.emit('message',formatMessage(user.username, message))
  })
})









server.listen(port, () => console.log(`Example app listening on port ${port}!`));