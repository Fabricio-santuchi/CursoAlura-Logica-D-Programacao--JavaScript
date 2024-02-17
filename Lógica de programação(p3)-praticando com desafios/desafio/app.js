function validePositivoNegativo(numero){
    if(numero > 0){
        res = 'Positivo';
    }else if(numero < 0){
        res = 'Negativo';
    }else{
        res = 'Zero';
    }

    return `O número ${numero} é ${res}`;

}
let ress = validePositivoNegativo(-1)
console.log(ress);