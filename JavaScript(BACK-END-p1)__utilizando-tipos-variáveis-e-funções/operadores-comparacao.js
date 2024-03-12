const estaAprovado = true;

if(estaAprovado){
    console.log('aprovado');
}

console.log('0' == 0 ? 'PASSOU NA COMPARAÇÃO' : 'NÃO PASSOU NA COMPARAÇÃO');
console.log('0' === 0 ? 'PASSOU NA COMPARAÇÃO' : 'NÃO PASSOU NA COMPARAÇÃO');

const idadeMinima = 18;
const idadeEstudante = 16;

if(idadeEstudante >= idadeMinima){
    console.log('não precisa de autorização');
}else{
    console.log('precisa de autorização')
}
    