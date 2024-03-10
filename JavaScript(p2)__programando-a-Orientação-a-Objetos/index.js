import { Cliente } from "./cliente.js"; // importa o cliente para o index.
import { ContaCorrente } from "./ContaCorrente.js"; // importa o cliente para contacorrente.

const cliente1 = new Cliente('Ricardo',11122233309);
const cliente2 = new Cliente('Alice',88822233309);

const contaCorrenteRicador = new ContaCorrente(cliente1,1001);
contaCorrenteRicador.depositar(500); 
const conta2 = new ContaCorrente(cliente1,102);

let valor = 200;
contaCorrenteRicador.transferir(valor,conta2); //transferi 200 para conta2.

console.log(contaCorrenteRicador);
console.log(conta2);
console.log(ContaCorrente.numeroDeContas);