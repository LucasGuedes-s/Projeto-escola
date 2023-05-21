const axios = require('axios');

const url = 'https://sheetdb.io/api/v1/7k14c15qkk653';
const bcrypt = require('bcrypt');
const saltRounds = 10;

const senha = 'Lucas123'
const hash = bcrypt.hashSync(senha, saltRounds); //A senha definida será criptografada

const usuario = {
    id: 1,
    nome: 'Lucas Guedes',
    senha: hash
  };

class AdmController{
    
    async LoginProfessor(req, res){ //A função administrador receberá os dados passados pelo body e fará um teste de usuário
        console.log('Cheguei até aquii')

        const body = req.body; //Recebendo o body por padrão
        const matricula = body.login; //Recebendo a matricula digitada pelo usuário no body, por padrão o body passa dados como String
        const matriculaAdm = parseInt(matricula); //Convertendo a matricula de String para inteiro (Int)
        const senha = body.senha; //Recebendo a senha diggitada pelo usuário


        //const senhavalida = bcrypt.compareSync(senha, user.senha); //Fazendo a comparação de senhas digitada pelo usuário e a presente no banco de dados. Através da biblioteca de criptografia Bcrypt.
        
        console.log('Tudo Show')

    }
    // Função para realizar o post de cadastro
    async CadastrarUsuario(usuario) {

        try {

        // Realize a requisição POST para o SheetDB API
        const response = await axios.post(url, usuario);
    
        // Verifique a resposta da requisição
        if (response.status === 201) {
            console.log('Usuário cadastrado com sucesso!');
        } else {
            console.log('Ocorreu um erro ao cadastrar o usuário.');
        }
        } catch (error) {
        console.error('Ocorreu um erro na requisição:', error.message);
        }
    }
}
module.exports = new AdmController(); 