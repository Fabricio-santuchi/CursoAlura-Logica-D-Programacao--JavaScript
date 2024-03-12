// Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

const idadeMinima = 18;
const idade = 21;

if(idade >= idadeMinima){
    console.log('Pode fazer a compra!');
}else{
    console.log('Não tem idade suficiente!');
}