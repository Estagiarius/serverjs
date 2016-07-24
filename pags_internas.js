/* EXIBIÇÃO DE PÁGINAS INTERNAS
    Por Victor Oliveira
*/    


var express = require('express');
var ejs = require('ejs');
var http = require('http');
var app = express();

//Usar o ejs como view.
app.set('view engine', 'ejs');


//Renderizando a página
//Serve para apresentar os dados estáticos. No caso, renderiza o CSS e extras.
app.use(express.static(__dirname + '/views'))

app.get('/', function (req, res) {
    res.render('home.ejs');
})


app.listen(8080, '127.0.0.1');

console.log("Funcionando!");