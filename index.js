var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3333;

// Socket Events
const FEMALE = {
  NEW: 'new female',
  SAVE: 'female save',
  LOAD: 'female load'
}
const CITY = {
  NEW: 'new city',
  SAVE: 'city save',
  LOAD: 'city load'
}

const females = ['Anna', 'Jess', 'Maria', 'Sofia', 'Emma']
const cities = ['Sydney', 'London', 'Paris', 'Tehran', 'Perth']

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.emit(FEMALE.LOAD, females);
  socket.emit(CITY.LOAD, cities);
  socket.on(FEMALE.SAVE, function(msg){
    io.emit(FEMALE.NEW, msg);
  });
  socket.on(CITY.SAVE, function(msg){
    io.emit(CITY.NEW, msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
