
function tempCouF(tipo,n){
    let valor;
    if(tipo == 'C' || tipo == 'c'){
        valor = convertFahrenheit(n);
        return valor + " °F";
    }else if(tipo == 'F' || tipo == 'f'){
        valor = convertCelsius(n);
        return valor + " °C";
    }else{
        return 'Erro!'
    }

}

function convertFahrenheit(n) {
    let res = (n * 9/ 5) + 32;
    return res;
}

function convertCelsius(n) {
    let res = (n - 32) * 5/9;
    return res;
}

console.log(tempCouF('C',30));
console.log(tempCouF('F',86));
console.log(tempCouF('K', 302));
