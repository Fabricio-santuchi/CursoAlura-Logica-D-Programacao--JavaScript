function sortear(){
    // Variaveis.
    let quantidadesDeNumeros = parseInt(document.querySelector('input#quantidade').value);
    let doNumero = parseInt(document.querySelector('input#de').value);
    let ateNumero = parseInt(document.querySelector('input#ate').value);
    let sorteados = [];
    let numero;
    
    //se o numero DO for maior que ATE.
    if (doNumero >= ateNumero) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    //se quantidade for maior que numeros disponiveis.
    if (quantidadesDeNumeros > (ateNumero - doNumero + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }

    //console.log.
    console.log(`Quantidade: ${quantidadesDeNumeros} / de: ${doNumero} / ate: ${ateNumero}`);

    //pega os numeros sorteados e coloca dentro de uma arrays.
    for(i=0;i < quantidadesDeNumeros;i++){
        numero = obterNumeroAleatorio(doNumero, ateNumero);
        
        // Para não repetir o mesmo numero.
        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(doNumero, ateNumero);
            alert('Tentando obter número inédito');
        }

        sorteados.push(numero);
    }
    //Exibi os valores sorteados.
    let resultado = document.querySelector('div#resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    alterarStatusBotao();

}

// Criando numeros aleátorios do min ate max.
function obterNumeroAleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

// trocar class css do botão reiniciar. 
function alterarStatusBotao() {
    let reiniciarB = document.querySelector('button#btn-reiniciar');
    if(reiniciarB.classList.contains('container__botao-desabilitado')){
        reiniciarB.classList.remove('container__botao-desabilitado');
        reiniciarB.classList.add('container__botao');
        //classList com ele posso add e remover as classes que estão ja criadas no css.
    }else{
        reiniciarB.classList.add('container__botao-desabilitado');
        reiniciarB.classList.remove('container__botao');
    }
}
// configurando o botao reniciar.
function reiniciar(){
    document.querySelector('input#quantidade').value = '';
    document.querySelector('input#de').value = '';
    document.querySelector('input#ate').value = '';
    document.querySelector('div#resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}