/**
 * Faça um programa que receba N (quantidade de numeros) e seus respectivos valores
 * Imprima o maior numero par e o menos numero impar
 * 
 * Exemplo:
 * 
 * Entrada:
 * 5
 * 3
 * 4
 * 1
 * 10
 * 8
 * 
 * Saida:
 * 
 * Maior numero par: 10
 * Menor numero impar: 1
 
    for (let i = 0; i < quantNumeros; i++) {
    let numero = gets();
    if (numero % 2 === 0) {
        if (maiorNumeroPar === null) {
            maiorNumeroPar = numero;
        } else if (numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    } else {
        if (menorNumeroImpar === null) {
            menorNumeroImpar = numero;
        } else if (numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    }
}

*/

const { gets, print } = require('./funcoes_auxiliaresEx2');

const quantNumeros = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < quantNumeros; i++) {
    let numero = gets();
    if (numero % 2 === 0) {
        if (maiorNumeroPar === null || numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    } else {
        if (menorNumeroImpar === null || numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    }
}

print(`O maior número par é: ${maiorNumeroPar}.`);
print(`O menor número ímpar é: ${menorNumeroImpar}.`);
