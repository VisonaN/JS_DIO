/**
 * Faça um programa para calcular o valor de uma viagem.
 * 
 * Você terá 5 variáveis, sendo elas:
 * 1 - Preço do etanol
 * 2 - Preço da Gasolina
 * 3 - O tipo de combustível que está no seu carro
 * 4 - Gasto médio de combustível do carro por KM
 * 5 - Distância em KM da viagem
 * 
 * Imprima no console o valor que será gasto para realizar esta viagem.
 */

const precoEtanol = 3.64;
const precoGasolina = 5.63;
const kmPorLitro = 10;
const distEmKm = 100;
const tipoCombustivel = `Etanol`;

const litrosConsumidos = distEmKm / kmPorLitro;

if (tipoCombustivel === `Etanol`) {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}
