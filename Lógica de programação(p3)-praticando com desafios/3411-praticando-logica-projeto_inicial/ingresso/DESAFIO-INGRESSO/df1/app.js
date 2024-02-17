// 1) Adicione uma verificação para garantir que a quantidade inserida pelo usuário seja um número positivo. Se o valor não for válido, exiba uma mensagem de erro adequada.

function testnumero(){
    let numero = parseInt(document.querySelector('#test').value);
    let nOUp = '';
    if(numero >= 0){
        nOUp = 'Positivo';
    }else{
        nOUp = 'Negativo';
    }
    alert(`O número ${numero} é ${nOUp}!`);
    document.querySelector('#test').value = '';
}