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
