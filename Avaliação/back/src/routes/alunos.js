const express = require('express');
const routes = express.Router();

const aluninhos = require('../controllers/alunos.js');

routes.get('/alunos/read', aluninhos.getAlunos);
routes.post('/alunos/create', aluninhos.createAluno);
routes.put('/alunos/update', aluninhos.updateAluno);
routes.delete('/alunos/delete/:id_aluno', aluninhos.deleteAluno);

module.exports = routes;