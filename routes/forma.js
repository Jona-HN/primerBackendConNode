const express = require('express');
const app = express.Router();
const path = require('path');

app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/forma.html'));
});

app.post('/', (req, res, next) => {
    console.log(req.body);
    let html = "";
    html = html.concat('<h2>Request headers:</h2>')
               .concat(JSON.stringify(req.headers, null, '\t'))
               .concat('<br />')
               .concat(`<h2>Método: ${req.method}</h2>`)
               .concat(`<h2>URL: ${req.url}</h2>`)
               .concat(`<h3>Datos enviados: ${JSON.stringify(req.body, null, '\t')}</h3>`);
    res.send(html);
});

module.exports = app;