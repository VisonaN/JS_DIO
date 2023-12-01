// Estruturas condicionais

const numero = 11;

const eNumeroPar = (numero % 2) === 0;
console.log(eNumeroPar);

if (eNumeroPar) {
    console.log('Par')
};

if (!eNumeroPar) {
    console.log('Ímpar')
};