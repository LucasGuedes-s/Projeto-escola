const express = require('express');
const router = express.Router();

const controller = require('../controller/AdmController');

router.get('/LoginProfessor', controller.CadastrarUsuario)
// Definir rotas e lógica de manipulação aqui

module.exports = router;
