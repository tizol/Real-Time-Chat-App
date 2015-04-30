# Real Time Chat App using Node, Express, and Socket.io
<h2>You will need these tools to build the App</2>
<ul>
  <li><a href="http://brew.sh/">Hombrew</a></li>
  <li><a href="https://nodejs.org">Node.js</a></li>
  <li><a href="http://expressjs.com/">Express</a></li>
  <li><a href="http://socket.io/">Socket.io</a></li>
</ul>
<h3> Screenshot of the App</h3>
<img src="img/demo.png">

<h3> First let's install <a href="http://brew.sh/">Hombrew</a> <h3>
<p>Homebrew is a package manager for OS X</p>
<h4>Step 1</h4>
<p>Type "Terminal" on your Spotlight Search and paste this command</p>

    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

<h4>Step 2</h4>
<p>Check that hombrew is installed by typing this on your terminal</p> 
    $ brew doctor

<h4>Step 3</h4>
<p>Check that Node is installed by typing this on your terminal</p>

    $ node --version 


<h4>First let’s create a package.json </h4>

package.json
``` json
{
  "name": "RealTimeChatApp",
  "version": "0.0.1",
  "author": "tizol",
  "description": "Real time chat using Node and socket.io",
  "dependencies": {
  
  }
}
```
<h4>To install the dependencies, we’ll use npm: Node Package Manager<h4>

    $ npm install --save express@4.10.3
    $ npm install --save socket.io

app.js for the back-end
``` javascript
// require your dependencies
// your App is ABSOLUTELY DEPENDANT ON YOUR DEPENDENCIES
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Make an HTTP Request
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

// Your App is listening on port 3000
http.listen(3000, function(){
  console.log( 'listen on: localhost:3000' );
});
```

index.js for the front-end
``` javascript
var socket = io();
    $('form').submit(function(){
      socket.emit('chat message', $('#m').val() );
      $('#m').val('');
      return false;
    });
    socket.on('chat message', function(msg){
      $("#messages").append($('<li>').text(msg));
    });

```

<h3> Follow me on twitter or visit my blog<h3>
<ul>
  <li><a href="https://twitter.com/tizolj"> tizolj</a></li>
  <li><a href="http://josetizol.com/"> josetizol.com</a></li>
</ul>


