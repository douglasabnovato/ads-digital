console.log("Executando ...");

var firstNum;
var secondNum;

function insertNumbers() {
  let divFirstNum = document.getElementById("firstNumber");
  let divSecondNum = document.getElementById("secondNumber");

  firstNum = prompt("Inserir o primeiro número:", "1º inteiro positivo");
  divFirstNum.innerHTML = firstNum;

  secondNum = prompt("Inserir o segundo número:", "2º inteiro positivo");
  divSecondNum.innerHTML = secondNum;
}

function dividir(numero1, numero2) {
  return numero1 / numero2;
}

function divisao() {
  insertNumbers();
  let mathOperation = document.getElementById("mathOperation");
  mathOperation.innerHTML = "/";
  let divDivisionResult = document.getElementById("divisionResult");
  divDivisionResult.innerHTML = dividir(firstNum, secondNum);
  let conversa = confirm("Gostou?", "SIM ou NÃO");
  console.log("conversa", conversa);
}

var select = document.querySelector("select");

select.addEventListener("change", function () {
  var option = this.selectedOptions[0];
  var texto = option.textContent;

  console.log(texto);
});

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

console.log("Calculadora ...");

const calculate = (n1, operator, n2) => {
  const firstNum = parseFloat(n1)
  const secondNum = parseFloat(n2)
  if (operator === 'add') return firstNum + secondNum
  if (operator === 'subtract') return firstNum - secondNum
  if (operator === 'multiply') return firstNum * secondNum
  if (operator === 'divide') return firstNum / secondNum
}

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
