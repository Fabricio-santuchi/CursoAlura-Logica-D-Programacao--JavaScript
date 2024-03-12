// Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.

let texto = 'Eu indo e Voltando';

//toUpperCase()
console.log(texto.toUpperCase()); // devolve maiusculo

//toLowerCase()
console.log(texto.toLowerCase()); // devolve minusculo

//slice(0, 0) // (-0, 0)
console.log(texto.slice(10,18)); // devolve o texto que está entre o caracter 10 e 18. = Voltando // Similar ao substring(), mas pode lidar com índices negativos, que contam a partir do final da string. 

//charAt(0)
console.log(texto.charAt(8)); // devolve o caracter que está na posição 8. = e

//concat()
let texto2 = 'lá vou eu!'
console.log(texto.concat(', ', texto2)); // Concatena uma ou mais strings à string original e retorna uma nova string.

//substring(0, 0)
console.log(texto.substring(1, 7)); // Retorna a parte da string entre os índices especificados, começando de startIndex até (mas não incluindo). // devolve o texto que está entre o caracter 1 e 7.

//trim()
let txt = "   hello world   ";
console.log(txt.trim()); //Remove espaços em branco do início e do fim da string. "   hello world   " = "hello world".

