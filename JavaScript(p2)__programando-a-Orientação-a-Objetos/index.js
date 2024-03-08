class cliente{
    nome;
    cpf; 
}

class contaCorrente{
    agencia; 
    _saldo = 0; 

    sacar(valor){
        if(this._saldo >= valor){ // this.saldo = o saldo dessa conta! // dessa conta!
            this._saldo -= valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
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
contaCorrenteRicador.agencia = 1001;
contaCorrenteRicador._saldo = 1000;
contaCorrenteRicador.depositar(100);
contaCorrenteRicador.sacar(50);

console.log(contaCorrenteRicador);
