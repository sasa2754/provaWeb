const express = require('express');
const route = express.Router();


const home = require('./src/controllers/home');
const chamados = require('./src/controllers/chamados');

route.get('/', home.pagInicialGet);
// route.post('/', home.pagInicialPost);

route.post('/apagarChamados', home.apagarChamados);
route.post('/apagarExclusivo', home.apagarExclusivo);
route.post('/editar', home.editar);

route.post('/abrirChamado', chamados.chamadoInsert);
// route.get('/', chamados.chamadoGet);


module.exports = route;