function alterarStatus(i){
    let gameClicado = document.querySelector(`#game-${i}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomegame = gameClicado.querySelector('.dashboard__item__name');

    if(botao.classList.contains('dashboard__item__button--return')){
        if(confirm(`Tem certeza que quer devolver o jogo ${nomegame.textContent}?`)){
            botao.classList.remove('dashboard__item__button--return');
            imagem.classList.remove('dashboard__item__img--rented');
            botao.textContent = 'Alugar';
        }
    }else{
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
    }
}