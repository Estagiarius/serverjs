/*SERVIDOR COM APRESENTAÇÃO DE PÁGINAS
 Criado por Victor Oliveira, 24/07/2016
 */

var express = require('express');
var path = require('path');
var app = express();

//É o ejs que coordena a visualização das páginas
//app.set('view engine', 'ejs'); --- *EJS DESCONTINUADO PARA ESSA FUNÇÃO*



//Serve para apresentar os dados estáticos. No caso, renderiza o CSS.
app.use(express.static(__dirname + '/views'))

//Chamando a página e renderizando ela.
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/views/home.html'));
})

app.listen(80);



console.log("Rodando na porta principal!");