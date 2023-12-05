// Estruturas condicionais

const numero = 0;

const isNumeroPar = (numero % 2) === 0; // Por convenção, quando se trabalha com uma variável booleana (true or false) usa-se 'is' antes da variável, por ser um estado de é ou não é
//console.log(eNumeroPar);

if (isNumeroPar) {
    console.log('Par')
} else {
    console.log('Ímpar');
}

console.log('-----------------------------------------------------------------')

const inumero = 15;

const numeroDivisivelPor5 = (inumero % 5) === 0;
//console.log(eNumeroPar);

if (inumero === 0) {
    console.log('O número é inválido');
} else if (numeroDivisivelPor5) { // Pode ter quantos else if quiser
    console.log('Sim');
} else { // Não pode colocar um else no meio do nada sem que seja para finalizar
    console.log('Não');
}