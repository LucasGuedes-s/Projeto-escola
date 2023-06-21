const express = require('express');
const router = express.Router();

const controller = require('../controller/AdmController');

router.post('/LoginProfessor', controller.LoginProfessor)
//router.post('/CadastrarProfessor', controller.CadastrarProfessor)
// Definir rotas e lógica de manipulação aqui

module.exports = router;
