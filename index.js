//2 ) Fibonacci
console.log("executando Fibonacci...");

let penultimo = 0;
let ultimo = 1;

let proximo = 0;

let termo = 6;

let buscado = 5;
encontrado = "nao"

if (termo <= 2) {
  for (var count = 1; count <= termo; count++) {
    if (proximo == buscado) encontrado = "sim"
    console.log(count, ": ", proximo);
    proximo = termo - 1;
  }
} else {
  console.log(penultimo + 1, ": ", penultimo);
  console.log(ultimo + 1, ": ", ultimo);
  for (var count = 3; count <= termo; count++) {
    if (proximo == buscado) encontrado = "sim"
    proximo = ultimo + penultimo;
    penultimo = ultimo;
    ultimo = proximo;

    console.log(count, ": ", proximo);
  }
}

if (encontrado == "sim") { 
    console.log("O número informado ", buscado, " pertence a sequência.");
} else {
    console.log("O número informado ", buscado, " NÃO pertence a sequência.");
}

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
*/
