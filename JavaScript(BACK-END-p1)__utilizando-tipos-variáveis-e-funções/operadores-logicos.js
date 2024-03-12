/*
             E lógico (&&)
console.log(true && true);   // Saída: true
console.log(true && false);  // Saída: false
console.log(false && true);  // Saída: false
console.log(false && false); // Saída: false

             OU lógico (||)
console.log(true || true);   // Saída: true
console.log(true || false);  // Saída: true
console.log(false || true);  // Saída: true
console.log(false || false); // Saída: false

             NÃO lógico (!)
console.log(!true);  // Saída: false
console.log(!false); // Saída: true         

*/

const notaFinal = 6;
const faltas = 5;
const advertencias = 0;

console.log();
if(notaFinal < 7 && faltas > 4){
    console.log('Reprovado, boas festas');
}else{
    console.log('Não foi reprovado por falta');
}
console.log();

if(faltas >= 2 && !advertencias){
    console.log('Recebeu bônus');
}else{
    console.log('Não Recebeu bônus');
}
console.log();