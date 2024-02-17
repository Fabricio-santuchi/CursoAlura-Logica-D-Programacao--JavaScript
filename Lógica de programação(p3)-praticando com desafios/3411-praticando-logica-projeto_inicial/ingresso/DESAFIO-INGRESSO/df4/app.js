function test1(n){
    if(n % 2 == 0){
        return 'Par!';
    }else{
        return 'Impar!';
    }
}
let n = 100
let res = test1(n);
console.log(res);