const puerto = 2800;
var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('Hello world!');
})

app.listen(puerto, function() {
    console.log(`Escuchando el puerto ${puerto}`);
});