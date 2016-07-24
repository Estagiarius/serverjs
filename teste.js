1//DECLARAÇÃO DE IMPORTAÇÕES
var readlineSync = require('readline-sync');

//DECLARAÇÃO DE OBJETOS
function pessoa(){
    this.nome = "Victor";
    this.genero = "M";
   
    this.logica = 50;
    this.matematica = 50;
    this.fisica = 50;
    this.interpretacao = 50;
    this.redacao = 50;
    
    this.conversacao = 50;
    this.carisma = 50;
    this.sedutividade = 50;
    this.arte = 50;

    this.forca = 50;
    this.resistencia = 50;

    this.foco = 50;
    this.cfbasica = 50;
    this.memoria = 50;
}

//DECLARAÇÕES DE FUNÇÕES
  function pausa(){
  var pausa = readlineSync.question('...');
  }
//INÍCIO DO JOGO

//DECLARAÇÕES DE VARIÁVEIS GLOBAIS E CONSTANTES
var _persona = new pessoa();
var MAX = 100;
var MIN = 0;

function introducao (ser){

  console.log("Bem vindo ao script! Esperamos que você se divirta muito aqui.");
  ser.nome = readlineSync.question('Qual eh o seu nome?\n');

  console.log("Ah, então o seu nome é " + ser.nome + "."); 
  tut = readlineSync.question('"..." --> As reticencias marcam as pequenas pausas do jogo. Caso queira continuar, aperte a tecla ENTER.');
}

introducao(_persona);