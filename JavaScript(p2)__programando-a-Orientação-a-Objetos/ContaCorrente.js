import { Cliente } from "./cliente.js";
// exporta a class contacorrente para o lugar que quiser puxar.
export class ContaCorrente{ 
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0; 


    //cliente------------------------------------------------
    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){ // so aceita um cliente, não aceita nenhum valor só um cliente criado!
            this._cliente = novoCliente;
        }
    }

    get cliente(){
        return this._cliente;
    }

    //!saldo!------------------------------------------------
    get saldo(){
        return this._saldo;
    }

    constructor(cliente, agencia) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){ // metodo
        if(this._saldo >= valor){ // this.saldo = o saldo dessa conta! // dessa conta!
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){ // metodo
        if(valor <= 0){
            return; 
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor); //tirar 200.
        conta.depositar(valorSacado); // add em outra conta.
    }
}