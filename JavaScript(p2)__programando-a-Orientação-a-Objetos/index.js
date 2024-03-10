import { Cliente } from "./cliente.js"; // importa o cliente para o index.
import { ContaCorrente } from "./ContaCorrente.js"; // importa o cliente para contacorrente.

const cliente1 = new Cliente('Ricardo',11122233309);
const cliente2 = new Cliente('Alice',88822233309);

const contaCorrenteRicador = new ContaCorrente();
contaCorrenteRicador.agencia = 1001;

contaCorrenteRicador.depositar(100);
contaCorrenteRicador.depositar(100);
contaCorrenteRicador.depositar(100);

const valorSacado = contaCorrenteRicador.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicador);