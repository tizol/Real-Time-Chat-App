// require your dependencies
// your App is ABSOLUTELY DEPENDANT ON YOUR DEPENDENCIES
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Handle an HTTP Request
// Hyper Text Transfer Protocol
// respond by sending a file (e.i html)
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// listen to events using Socket.io
// handle events with callback functions
io.on('connection', function(socket){
  console.log( 'a user connected' );

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

// Your App is listening on port 300
http.listen(3000, function(){
  console.log( 'listen on: http://localhost:3000' );
});
