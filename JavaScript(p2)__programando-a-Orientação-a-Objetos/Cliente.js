// exporta a class cliente para o lugar que quiser puxar.
export class Cliente{
    nome;
    _cpf; 

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf; 
    }
}