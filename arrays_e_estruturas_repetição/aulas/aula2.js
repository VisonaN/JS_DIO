console.log('-----------------------------------------------------------------')

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(9);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media.toFixed(1))

console.log('-----------------------------------------------------------------')

/* Executando um for em uma string

const nome = 'Paulo Visoná Neto';

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra)
}
*/