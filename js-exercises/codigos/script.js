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
  let conversa = confirm("Gostou?", "SIM ou NÃO")
  console.log("conversa", conversa)
}

var select = document.querySelector('select');

select.addEventListener('change', function() {
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
