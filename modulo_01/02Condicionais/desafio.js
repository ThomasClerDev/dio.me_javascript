
/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio do combustível por km;
5 - Distância em km da viágem.

Imprima no console o valor que será gasto na viagem.
*/

/*    ========= Testei sozinho ==========
const precoEtanol = 3.50;
const precoGasolina = 5.70;
const kmPorLitro = 10;
const distanciaViagemKm = 155;

const litrosConsumidos = distanciaViagemKm / kmPorLitro;

const etanol = litrosConsumidos * precoEtanol;
const gasolina = litrosConsumidos * precoGasolina;

let combustivelNoCarro = gasolina

if (combustivelNoCarro == gasolina) {
    console.log(gasolina.toFixed(2));
} else  {
    console.log('Atenção, conferir qual combustível está no seu carro, evite Problemas');
}
*/

/*   Solução do teach lead */

const precoEtanol = 3.50;
const precoGasolina = 5.70
const kmPorLitro = 10;
const distanciaViagemKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaViagemKm / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));

} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));

}




