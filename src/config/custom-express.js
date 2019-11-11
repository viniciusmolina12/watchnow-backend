
const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(express.static('src/app/assets/'));
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());

const sessaoAutenticacao = require('./sessao-autenticacao');
sessaoAutenticacao(app);


const rotas = require('../app/rotas/rotas');

rotas(app);

module.exports = app; 