/*
 * Faça um programa para calcular o valor de uma viagem.
 *
 * Você terá 3 variáveis, sendo elas:
 * 1 - Preço do combustível;
 * 2 - Gasto médio de combustível do carro por KM;
 * 3 - Distância em KM por viagem;
 * 
 * Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaKm = 1580;

const litrosConsumidos = distanciaKm / kmPorLitro;
const valorViagem = litrosConsumidos * precoCombustivel;

console.log(valorViagem.toFixed(2));