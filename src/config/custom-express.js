
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('src/app/assets/'));
const rotas = require('../app/rotas/rotas');

app.use(bodyParser.urlencoded({
    extended: true
}))
rotas(app);

module.exports = app; 