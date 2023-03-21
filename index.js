// Configuración express
const puerto = 2800;
const express = require('express');
const app = express();

// Configuración certificado SSL y llave privada
// del servidor
const fs = require('fs');
const https = require('https');
const options = { 
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}
const server = https.createServer(options, app);

app.get('/', (request, response) => {
    let html = "<h1>Hello world!</h1> <p>Este servidor cuenta con protocolo HTTPs</p>";
    response.send(html);
})

server.listen(puerto, () => {
    console.log('Iniciando el servidor HTTPs...');
    console.log(`Escuchando el puerto ${puerto}`);
});