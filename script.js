console.log("Bom diaaa!");

// Declarando variaveis: var, let e const

// variavel + nome da variavel + = + valor;
//  criando nomes de variaveis:
//  não podemos usar nomes com espaços
// podemos usar camelCase - escrever duas ou mais palavras juntas, primeira palavra vai iniciar com a letra minuscula, seguida das outras palavras com a com primeira letra maiuscula
//case sensitive # letras minusculas de letras maiusculas

// variavel + nome da variavel + = + valor;
// string "texto"

// não podemos reescrever, mas podemos reatribuir valor:
let nomeDoAluno = "Luan Vieira";
nomeDoAluno = "Alexandra";
nomeDoAluno = "Gislane";
nomeDoAluno = "Stefany";
console.log(nomeDoAluno);

// var vc consegue reescrever e tbm reatribuir
var facilitador = "Kleber";
var facilitador = "Débora";
facilitador = "Carol";
console.log(facilitador);


const comida = "Batata";
// constante não pode ser alterada:


// Repetição

// ++  atribui um incremento (valor da variavel + 1)
// -- atribui um decremento (valor da variavel - 1)

//operadores de atribuição;
//  = atribuição

let saldo = 100;
saldo = 10;
console.log(saldo);


// += atribuição de adição
//  atribui e soma um a valor a uma variavel

console.log((saldo += 10));

// -= atribuição de subtração
// atribui e diminui um valor


// Loops são laços de repetição
// estrutura do for
// for() dentro dos parenteses vamos passar 3 expressões:

// for(inicializador;) Uma variavel que vai armazenar um valor inicial / let i = 0;

//  SEGUNDA EXPRESSÃO - condição: i <= 5;

// TERCEIRA EXPRESSÃO - itereção incremento/ decremento

// for (estrutura){
//     executado
// }

// for(let i = 0; i <=10; i++){
//     console.log(i)
// }

// for (let i = 2; i <= 12; i += 2) {
//   console.log(i); // retorna numeros pares até 12
// }

// for (let i = 10; i <= 100; i += 10) {
//   console.log(i); // retorna numeros de 10 em 10
// }

// SWITCH

// SWITCH
// A condicional switch avalia uma expressão
// combinando um valor de uma expressão com uma case;
// ele é útil quando você tem muitas condições para verificar e deseja evitar usar múltiplos if...else. 
// o switch não faz comparação, entao não usaremos os operadores de comparação que usamos no if else.

let lancheSaudavel = "Banana";

switch(lancheSaudavel){
    case "laranja":
        console.log("Vamos fazer um suco de laranja!!!");
        break;
    case "limão":
        console.log("Vamos fazer uma limonada!");
        break;
    case "banana":
    case "Banana":
        console.log("Vamos fazer uma vitamina de banana!");
        break;
    default:
        console.log("Desculpe não posso te ajudar!")           
}

//O break impede que o código continue executando os outros casos.

//Se nenhum dos cases for correspondido, o default será executado.
/*
switch (expressao) {
  case valor1:
    // Código a ser executado se expressao === valor1
    break;
  case valor2:
    // Código a ser executado se expressao === valor2
    break;
  // você pode adicionar quantos "case" precisar
  default:
    // Código a ser executado se nenhum valor corresponder
    break;
}
*/

const dia = 3;

switch (dia) {
  case 1:
    console.log("Hoje é segunda-feira");
    break;
  case 2:
    console.log("Hoje é terça-feira");
    break;
  case 3:
    console.log("Hoje é quarta-feira");
    break;
  case 4:
    console.log("Hoje é quinta-feira");
    break;
  case 5:
    console.log("Hoje é sexta-feira");
    break;
  case 6:
    console.log("Hoje é sábado");
    break;
  case 7:
    console.log("Hoje é domingo");
    break;
  default:
    console.log("Dia inválido");
    break;
}

// ARRAY

let mercado = ["Fraldinha", "Contrafilé", "Tulipa", "Coração", "Vinagrete", "Queijo Coalho", "Spaten", "Arroz", "Farofa de alho", "Tilápia", "Carvão"];

console.log(mercado[6]);

// métodos do array
// quantidade de itens ou letras
console.log(mercado.length);

// adiciona no final do array (push)
mercado.push("Coca cola");
console.log(mercado);

// adicionar no início
mercado.unshift("Asinha")
console.log(mercado);

// remover o último item
mercado.pop()
console.log(mercado);

// remove o primeiro
mercado.shift();
console.log(mercado);

// remove o que você quer
mercado.splice(10, 1);
console.log(mercado);











