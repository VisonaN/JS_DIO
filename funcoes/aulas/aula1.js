// function teste() {
//     console.log('Teste');
// }

// teste();

function sayMyName(name, surname) {
    console.log('My name is ' + name + surname);
}

sayMyName('Paulo', ' Visoná');

console.log('----------------------------------------------------------------');

function quadrado(val) {
    return val * val;
}

const quadradoDeDez = quadrado(10) + quadrado(10);
console.log(quadradoDeDez);

console.log('----------------------------------------------------------------');

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));