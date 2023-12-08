// Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero par encontrado

let numeroAleatorio = Math.floor(Math.random() * (100 - 10 + 1));

let numeroAleatorio2 = Math.floor(Math.random() * (100 - 10 + 1));

let numeroAleatorio3 = Math.floor(Math.random() * (100 - 10 + 1));

let numeroAleatorio4 = Math.floor(Math.random() * (100 - 10 + 1));

let numeroAleatorio5 = Math.floor(Math.random() * (100 - 10 + 1));

let numeroAleatorio6 = Math.floor(Math.random() * (100 - 10 + 1));

let numeroAleatorio7 = Math.floor(Math.random() * (100 - 10 + 1));

let numeroAleatorio8 = Math.floor(Math.random() * (100 - 10 + 1));

let numeroAleatorio9 = Math.floor(Math.random() * (100 - 10 + 1));

let numeroAleatorio10 = Math.floor(Math.random() * (100 - 10 + 1));

const numeros = [];

numeros.push(numeroAleatorio);
numeros.push(numeroAleatorio2);
numeros.push(numeroAleatorio3);
numeros.push(numeroAleatorio4);
numeros.push(numeroAleatorio5);
numeros.push(numeroAleatorio6);
numeros.push(numeroAleatorio7);
numeros.push(numeroAleatorio8);
numeros.push(numeroAleatorio9);
numeros.push(numeroAleatorio10);

for (let i = 0; i < numeros.length; i++) {
    const numeroPar = numeros[i];
    if (numeroPar % 2 === 0) {
    console.log(numeroPar);
    }
}