
/* Faça um programa para calcular o valor de uma viagem.
Você terá 3 variáveis. Sendo elas:
- 1: preço do combustível,
- 2: Gasto médio de combustível do carro por km,
- 3: Distância em km da viagem,
Imprima no console o valor gasto para realizar essa viagem.
*/

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaViagemKm = 1580;

const litrosConsumidos = distanciaViagemKm / kmPorLitro;

const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));
//.toFixed serve para arredondarmos e definir os número de casa decimais após a virgula.

