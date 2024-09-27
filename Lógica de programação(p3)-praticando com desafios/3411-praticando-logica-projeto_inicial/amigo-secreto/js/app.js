let listaAmigos = [];

function adicionar() {
  let nomeAmigo = document.getElementById("nome-amigo"); //puxa a caixa Nome do Amigo.
  //Bloqueia se o nome não for nada.
  if (nomeAmigo.value == "") {
    alert("Informe o nome do amigo!");
    return;
  }
  //Bloqueia se o nome for repetido!
  if (listaAmigos.includes(nomeAmigo.value)) {
    alert("Nomes já adicionado!");
    return;
  }

  let addAmigo = document.getElementById("lista-amigos"); //puxa a caixa Amigos Incluidos
  listaAmigos.push(nomeAmigo.value); // adc a lista array os nomes.

  //Adiciona na tela o nome sem a virgula.
  if (addAmigo.textContent == "") {
    addAmigo.textContent = nomeAmigo.value;
  } else {
    //Adiciona na tela o nome com a virgula.
    addAmigo.textContent += ", " + nomeAmigo.value;
  }
  nomeAmigo.value = "";
}

function sortear() {
  //Bloqueia se n tiver mais de 4 amigos!
  if (listaAmigos.length < 4) {
    alert("Adicione pelo menos 4 amigos!");
    return;
  }

  embaralhar(listaAmigos);
  let sorteio = document.getElementById("lista-sorteio");

  for (i = 0; i < listaAmigos.length; i++) {
    if (i == listaAmigos.length - 1) {
      sorteio.innerHTML =
        sorteio.innerHTML + listaAmigos[i] + " --> " + listaAmigos[0] + "<br>";
    } else {
      sorteio.innerHTML =
        sorteio.innerHTML +
        listaAmigos[i] +
        " --> " +
        listaAmigos[i + 1] +
        "<br>";
    }
  }
}

function reiniciar() {
  listaAmigos = [];
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}

function embaralhar(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}
