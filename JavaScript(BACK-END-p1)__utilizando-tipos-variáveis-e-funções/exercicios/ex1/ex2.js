// Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.

let nome = 'Fabricio';
let sobrenome = 'Santuchi';

let nomeCompleto = nome + ' ' + sobrenome;
console.log('Usando operador +: ', nomeCompleto);

let template = `${nome} ${sobrenome}`
console.log(`Usando template strings: ${template}`);