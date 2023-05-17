const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//const session = require('express-session');

app.set('trust proxy', 1);

const routers = require('./routers/routerUser');
app.use(routers);

const hostname = 'localhost';
const port = 3000;

//Inicia o servidor
app.listen(port, hostname, ()=>{
    console.log(`Servidor iniciado em http://${hostname}:${port} (Clique Ctrl+C)`);
});