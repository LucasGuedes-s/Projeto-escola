const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const bodyParser = require('body-parser');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Authorization, content-type");
    res.header("Access-Control-Expose-Headers", "Authorization, content-type");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

//Primeira vez que o sistema é executado
//const firstRun = require('./firstRun.util.js');
//firstRun();


app.set('trust proxy', 1);

//const routers = require('./routers/routerUser');
const router = require('./routers/routerAdmin');

app.use(router);

const hostname = 'localhost';
const port = 3333;
//aplicando o body-parser
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

//Inicia o servidor
app.listen(port, hostname, ()=>{
    console.log(`Servidor iniciado em http://${hostname}:${port} (Clique Ctrl+C)`);
});