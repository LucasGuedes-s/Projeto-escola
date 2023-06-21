const bcrypt = require('bcrypt');
const saltRounds = 10;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const senha = process.env.senha_professor;
console.log(senha)
const hash = bcrypt.hashSync(senha, saltRounds); //A senha definida será criptografada

async function CadastrarProfessor(){
        console.log("Consegui chegar")
        const matricula = 20190009
        const senha = hash

        const user = await prisma.professores.findUnique({
            where: {matricula: matricula}
        })
        console.log(user)
        
        if(user){
            console.log("O usuário já existe")
        }
        else{
            const response = await prisma.professores.create({
                data: {
                    matricula: matricula,
                    senha: senha,
                }
            });
        }
        
}
module.exports = CadastrarProfessor;