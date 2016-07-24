/*SERVIDOR COM APRESENTAÇÃO DE PÁGINAS
 Criado por Victor Oliveira, 24/07/2016
 */

var express = require('express');
var ejs = require('ejs');
var http = require('http');
var app = express();

//É o ejs que coordena a visualização das páginas
app.set('view engine', 'ejs');



//Serve para apresentar os dados estáticos. No caso, renderiza o CSS.
app.use(express.static(__dirname + '/views'))

//Chamando a página e renderizando ela.
app.get('/', function (req, res) {
    res.render('home.ejs');
})

//Criando o servidor com o 'http', fazendo requisições ao Express,
//que está com as páginas.
var srv = http.createServer(app);
srv.listen(8080);


console.log("Funcionando!");