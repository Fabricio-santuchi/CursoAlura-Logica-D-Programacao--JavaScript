let qtdIngressoSuperior = 200;
let qtdIngressoInferior = 400;

function comprar() {
  // pega tipo e quantidade.
  let tipoDeEscolha = document.querySelector("#tipo-ingresso").value;
  let quantidadeDeIngresso = parseInt(document.querySelector("#qtd").value);

  // tirar a quantidade da tela.
  if (quantidadeDeIngresso < 0) {
    alert("Tente um numero maior!");
  } else {
    if (tipoDeEscolha == "pista") {
      comprarPista(quantidadeDeIngresso);
    } else if (tipoDeEscolha == "superior") {
      comprarSuperior(quantidadeDeIngresso);
    } else {
      comprarInferior(quantidadeDeIngresso);
    }
  }
}

function comprarPista(quantidadeDeIngresso) {
  let qtdPista = parseInt(document.querySelector("#qtd-pista").textContent);
  if (quantidadeDeIngresso > qtdPista) {
    alert("Quantidade indisponível para tipo Pista");
  } else {
    qtdPista = qtdPista - quantidadeDeIngresso;
    document.querySelector("#qtd-pista").textContent = qtdPista;
    alert("Compra realizada com sucesso!");
  }
}

function comprarSuperior(quantidadeDeIngresso) {
  let qtdSuperior = parseInt(
    document.querySelector("#qtd-superior").textContent
  );
  if (quantidadeDeIngresso > qtdSuperior) {
    alert("Quantidade indisponível para tipo Superior");
  } else {
    qtdSuperior = qtdSuperior - quantidadeDeIngresso;
    document.querySelector("#qtd-superior").textContent = qtdSuperior;
    alert("Compra realizada com sucesso!");
  }
}

function comprarInferior(quantidadeDeIngresso) {
  let qtdInferior = parseInt(
    document.querySelector("#qtd-inferior").textContent
  );
  if (quantidadeDeIngresso > qtdInferior) {
    alert("Quantidade indisponível para tipo Inferior");
  } else {
    qtdInferior = qtdInferior - quantidadeDeIngresso;
    document.querySelector("#qtd-inferior").textContent = qtdInferior;
    alert("Compra realizada com sucesso!");
  }
}
