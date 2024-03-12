console.log('\n//Number');
console.log(Number('1')); // '1' cvt = 1
console.log(Number('Alura')); // NaN
console.log(Number(undefined)); // NaN
console.log(Number(null)); // null = 0
console.log(Number(true)); // true = 1
console.log(Number(false)); // false = 0

console.log('\n//parseInt');

console.log(parseInt('4')); // 4
console.log(parseInt('4.5')); // 4

console.log('\n//parseFloat');

console.log(parseFloat('4')); // 4
console.log(parseFloat('4.5')); // 4.5
console.log(parseFloat('4.5abc')); // 4.5

//coerção
console.log('\n//coerção');

console.log(typeof +'45'); // retorna number
console.log(typeof +true); // retorna number

//string
console.log('\n//string');

console.log(String(2)); // retorna '2'
console.log(String(undefined)); // retorna 'undefined'
console.log(String(true)); // retorna 'true'

//includes()
console.log('\n//includes()');

const texto = 'estudando JavaScript';
console.log(texto.includes('Java')); // retorna true // pq Java tem dentro da frase texto.

//toLowerCase()
console.log('\n//toLowerCase()');

const textos = 'POR FAVOR, NÃO GRITE';
console.log(textos.toLowerCase()); // retorna 'por favor, não grite'
const textoss = 'por favor, não grite';
console.log(textoss.toUpperCase()); // retorna 'POR FAVOR, NÃO GRITE'