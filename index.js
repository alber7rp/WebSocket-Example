var express = require('express');
var app = express();
var server = require('http').Server(app);
//var io = require('socket.io')(server);



var io = require('socket.io').listen(3000);

console.log('Servidor de WebSocket corriendo en http://localhost:3000');


io.on('connection', function (socket) {
  
  console.log("Conexión de " +  socket.id);

  socket.emit('bienvenido', "hola, ya estás conectado al servidor socket.io");

  socket.on('hora', function (data) {
    console.log("El socket " + socket.id + " quiere saber la hora");
    socket.emit('hora', "Server : No tengo reloj ahora mismo");
  });

  socket.on('quien soy', function (data) {
    console.log("El socket " + socket.id + " quiere saber quien es");
    socket.emit('quien soy', "Server : Eres el socket " + socket.id);
  });

});

app.get('/', function(req,res){
res.sendFile(__dirname + '/socket.html');
});


server.listen(8080, function() {
	console.log('Servidor corriendo en http://localhost:8080');
});
