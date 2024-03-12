
// parámetros/argumentos
// retorno

function exibeNomeEstudante(nome, nota) {
    return `O nome é ${nome} e a nota é ${nota}\n`;
}

console.log(exibeNomeEstudante('Fabricio', 7.0));
console.log(exibeNomeEstudante('Ana', 4.5));
console.log(exibeNomeEstudante('João', 0.5));

// declaração da função
function somarDoisNumeros(numA, numB) {
    return numA + numB;
}

// execução (ou chamada) da função
somarDoisNumeros(2, 2);

// atribuindo o retorno de uma função a uma variável
const resultado = somarDoisNumeros(2, 2);
console.log(resultado);


function dividir(dividendo, divisor) {
    return dividendo / divisor;
}
   
const res = dividir(10, 2);
console.log(`o resultado é ${res}`); // o resultado é 5.