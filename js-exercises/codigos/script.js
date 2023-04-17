console.log("Executando dois números inteiros ...");

var firstNumDiv;
var secondNumDiv;

function insertNumbersDiv() {
  let divFirstNum = document.getElementById("firstNumberDiv");
  let divSecondNum = document.getElementById("secondNumberDiv");

  firstNumDiv = prompt("Inserir o primeiro número para divisão:", "1º inteiro positivo");
  divFirstNum.innerHTML = firstNumDiv;

  secondNumDiv = prompt("Inserir o segundo número para divisão:", "2º inteiro positivo");
  divSecondNum.innerHTML = secondNumDiv;
}

console.log("Executando divisão ...");

function dividir(numero1, numero2) {
  return numero1 / numero2;
}

function divisao() {
  insertNumbersDiv();
  let mathOperation = document.getElementById("mathOperationDiv");
  mathOperation.innerHTML = " / ";
  let divDivisionResult = document.getElementById("divisionResult");
  divDivisionResult.innerHTML = dividir(firstNumDiv, secondNumDiv);
  let conversa = confirm("Gostou?", "SIM ou NÃO");
  console.log("conversa", conversa);
}

console.log("Executando dois números inteiros ...");

var firstNumMult;
var secondNumMult;

function insertNumbersMult() {
  let divFirstNum = document.getElementById("firstNumberMult");
  let divSecondNum = document.getElementById("secondNumberMult");

  firstNumMult = prompt("Inserir o primeiro número para multiplicação:", "1º inteiro positivo");
  divFirstNum.innerHTML = firstNumMult;

  secondNumMult = prompt("Inserir o segundo número para multiplicação:", "2º inteiro positivo");
  divSecondNum.innerHTML = secondNumMult;
}

console.log("Executando multiplicação ...");

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

function multiplicacao() {
  insertNumbersMult();
  let mathOperation = document.getElementById("mathOperationMult");
  mathOperation.innerHTML = " * ";
  let divMultiplicationResult = document.getElementById("multiplicationResult");
  divMultiplicationResult.innerHTML = multiplicar(firstNumMult, secondNumMult);
  let conversa = confirm("Gostou?", "SIM ou NÃO");
  console.log("conversa", conversa);
}

console.log("Executando dois números inteiros ...");

var firstNumSum;
var secondNumSum;

function insertNumbersSum() {
  let divFirstNum = document.getElementById("firstNumberSum");
  let divSecondNum = document.getElementById("secondNumberSum");

  firstNumSum = prompt("Inserir o primeiro número para soma:", "1º inteiro positivo");
  divFirstNum.innerHTML = firstNumSum;

  secondNumSum = prompt("Inserir o segundo número para soma:", "2º inteiro positivo");
  divSecondNum.innerHTML = secondNumSum;
}

console.log("Executando soma ...");

function somar(numero1, numero2) {
  return parseInt(numero1) + parseInt(numero2);
}

function soma() {
  insertNumbersSum();
  let mathOperation = document.getElementById("mathOperationSum");
  mathOperation.innerHTML = " + ";
  let divSumResult = document.getElementById("sumResult");
  divSumResult.innerHTML = somar(firstNumSum, secondNumSum);
  let conversa = confirm("Gostou?", "SIM ou NÃO");
  console.log("conversa", conversa);
}

console.log("Executando сalculadora ...");

const calculate = (n1, operator, n2) => {
  const firstNum = parseFloat(n1);
  const secondNum = parseFloat(n2);
  if (operator === "add") return firstNum + secondNum;
  if (operator === "subtract") return firstNum - secondNum;
  if (operator === "multiply") return firstNum * secondNum;
  if (operator === "divide") return firstNum / secondNum;
};

const display = document.querySelector(".calculator__display");
const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove("is-depressed")
    );

    if (!action) {
      if (
        displayedNum === "0" ||
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
      calculator.dataset.previousKeyType = "number";
    }

    if (action === "decimal") {
      if (!displayedNum.includes(".")) {
        display.textContent = displayedNum + ".";
      } else if (
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        display.textContent = "0.";
      }

      calculator.dataset.previousKeyType = "decimal";
    }

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (
        firstValue &&
        operator &&
        previousKeyType !== "operator" &&
        previousKeyType !== "calculate"
      ) {
        const calcValue = calculate(firstValue, operator, secondValue);
        display.textContent = calcValue;
        calculator.dataset.firstValue = calcValue;
      } else {
        calculator.dataset.firstValue = displayedNum;
      }

      key.classList.add("is-depressed");
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.operator = action;
    }

    if (action === "clear") {
      if (key.textContent === "AC") {
        calculator.dataset.firstValue = "";
        calculator.dataset.modValue = "";
        calculator.dataset.operator = "";
        calculator.dataset.previousKeyType = "";
      } else {
        key.textContent = "AC";
      }

      display.textContent = 0;
      calculator.dataset.previousKeyType = "clear";
    }

    if (action !== "clear") {
      const clearButton = calculator.querySelector("[data-action=clear]");
      clearButton.textContent = "CE";
    }

    if (action === "calculate") {
      let firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (firstValue) {
        if (previousKeyType === "calculate") {
          firstValue = displayedNum;
          secondValue = calculator.dataset.modValue;
        }

        display.textContent = calculate(firstValue, operator, secondValue);
      }

      calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType = "calculate";
    }
  }
});

console.log("Executando select ...");

var select = document.querySelector("select");

select.addEventListener("change", function () {
  var option = this.selectedOptions[0];
  var texto = option.textContent;

  console.log(texto);
});

console.log("Executando dialog ...");

(function () {
  var updateButton = document.getElementById("updateDetails");
  var cancelButton = document.getElementById("cancel");
  var favDialog = document.getElementById("favDialog");

  updateButton.addEventListener("click", function () {
    favDialog.showModal();
  });

  cancelButton.addEventListener("click", function () {
    favDialog.close();
  });
})();

console.log("Executando forms ...");

function validarFormulario() {
  var nomePessoa = document.forms["formCadastro"]["nome"].value;
  if (nomePessoa == "") {
    alert("Favor informar o seu nome!");
    return false;
  } else {
    alert("Olá, " + nomePessoa + " !");
    return true;
  }
}

console.log("Executando crud ...");

function excluirItemSelecionado() {
  var itens = document.getElementById("itens");

  if (itens.selectedIndex == -1) {
    alert("Selecione um item na lista!");
    return;
  }

  var indice = itens.options[itens.selectedIndex].index;
  var itemSelecionado = itens.options[itens.selectedIndex].text;
  var resultado = confirm("Deseja excluir o item: " + itemSelecionado + " ?");

  if (resultado == true) {
    itens.removeChild(itens[indice]);
    alert("O item " + itemSelecionado + " será excluído da lista!");
  } else {
    alert("Você desistiu de excluir o item " + itemSelecionado + " da lista!");
  }
}

function adicionarItem() {
  var item = prompt(
    "Qual objeto você deseja incluir na lista?",
    "Adicione um novo objeto"
  );
  if (item == null || item == "") {
    alert("O uso do prompt foi cancelado!");
  } else {
    var itens = document.getElementById("itens");
    var option = document.createElement("option");
    option.text = item;
    itens.add(option, itens[0]);
  }
}
