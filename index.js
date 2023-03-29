/** 
 
 //4 ) O caminhão estará mais próximo da cidade de Ribeirão Preto devido a velocidade  de cada um dos veículos.
 
*/

/** 
 //3 ) Lógica
 a) 1, 3, 5, 7, _9_

 b) 2, 4, 8, 16, 32, 64, _128_
 
 c) 0, 1, 4, 9, 16, 25, 36, _49_
 
 d) 4, 16, 36, 64, _100_
 
 e) 1, 1, 2, 3, 5, 8, _13_
 
 f) 2, 10, 12, 16, 17, 18, 19, _200_ : Todos os números começam com a letra D
*/

/** 
 //2 ) Fibonacci
console.log("executando Fibonacci...");

let buscado = prompt("Informe um numero para pesquisar ");

let ultimo = 0;
let penultimo = 1;

let termo = parseInt(buscado) + 3;

encontrado = "nao";

if (termo <= 2) {
  for (var count = 1; count <= termo; count++) {
    elementValue = count - 1;
    console.log(count, ": ", elementValue);
    if (elementValue == buscado) encontrado = "sim";
  }
} else {
  for (var count = 1; count <= 2; count++) {
    elementValue = count - 1;
    console.log(count, ": ", elementValue);
    if (elementValue == buscado) encontrado = "sim";
  }

  for (var count = 3; count <= termo; count++) {
    proximo = ultimo + penultimo;

    console.log(count, ": ", proximo);

    ultimo = penultimo;
    penultimo = proximo;

    if (proximo == buscado) encontrado = "sim";
  }
}

if (encontrado == "sim") {
  console.log("O número informado ", buscado, " pertence a sequência.");
} else {
  console.log("O número informado ", buscado, " NÃO pertence a sequência.");
}
 
*/

/** 
//1 ) soma
console.log("executando soma...");

let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k = k + 1;
  soma = soma + k;
}

console.log("soma: ", soma);

//resposta: soma = 91
*/
