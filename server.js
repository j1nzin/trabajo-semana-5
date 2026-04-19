const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    res.send('Servidor HTTPS funcionando 🔐');
});

const options = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
};

https.createServer(options, app).listen(8080, () => {
    console.log('Servidor corriendo en https://localhost:8080');
});
