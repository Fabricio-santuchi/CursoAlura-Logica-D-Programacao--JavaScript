class cliente{
    nome;
    cpf; 
}

class contaCorrente{
    agencia; 
    saldo; 

    sacar(valor){
        if(this.saldo >= valor){ // this.saldo = o saldo dessa conta! // dessa conta!
            this.saldo -= valor;
        }else{
            console.log(`Seu saldo é insuficiente! saldo da conta: ${this.saldo}`)
        }
    }
}

const cliente1 = new cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;

const cliente2 = new cliente();
cliente2.nome = 'Alice';
cliente2.cpf = 88822233309;

const contaCorrenteRicador = new contaCorrente();
contaCorrenteRicador.saldo = 0;
contaCorrenteRicador.agencia = 1001;
console.log(contaCorrenteRicador.saldo);
contaCorrenteRicador.saldo = 100;
console.log(contaCorrenteRicador.saldo);
contaCorrenteRicador.sacar(50);

console.log(contaCorrenteRicador.saldo);
console.log(cliente1);
console.log(cliente2);
