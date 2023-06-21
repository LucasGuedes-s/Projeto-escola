const bcrypt = require('bcrypt');
const saltRounds = 10;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

class AdmController{
    
    async LoginProfessor(req){ //A função administrador receberá os dados passados pelo body e fará um teste de usuário
        console.log('Cheguei até aquii')
        const body = req.body;
        const login = body.user;
        //const usua = body.user; //Recebendo a matricula digitada pelo usuário no body, por padrão o body passa dados como String
        const matricula = login.login
        
        console.log(matricula)

        const matriculaAdm = parseInt(matricula); //Convertendo a matricula de String para inteiro (Int)
        console.log(matriculaAdm)

        const senha = login.senha; //Recebendo a senha digitada pelo usuário
        
        console.log('Tudo Show')

        const user = await prisma.professores.findFirst({
            where: {
                matricula: matriculaAdm,
            }
        });
        const senhavalida = bcrypt.compareSync(senha, user.senha); 

        if (senhavalida){

            console.log("Senha válida")
            console.log("Login autorizado")
            const payload = { login };

            // Gere o token usando a chave secreta
            const token = jwt.sign(payload, 'chave_secreta', { expiresIn: '1h' });
            console.log(token)
            return token;
        }
        else{
            console.log("Senha inválida")
        }
    }
    // Função para realizar o post de cadastro
}
module.exports = new AdmController(); 