var express = require('express');
var app = express();
var server = require('http').Server(app);

var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 3000});

console.log("Servidor WebSocket ws corriendo en //localhost:3000");

wss.on('connection', function(ws) {
console.log("Se ha conectado: " + ws.upgradeReq.headers['sec-websocket-key']);
    ws.on('message', function(message) {
	if(message == 'hora'){
		ws.send('No tengo reloj ahora mismo');
	}
	if(message == 'quiensoy'){
		ws.send('Tienes un socket ' + ws.upgradeReq.headers['sec-websocket-key']);
	}

        console.log('received: %s', message);
    });
});

app.get('/', function(req,res){
res.sendFile(__dirname + '/ws.html');
});


server.listen(8080, function() {
	console.log('Servidor corriendo en http://localhost:8080');
});
