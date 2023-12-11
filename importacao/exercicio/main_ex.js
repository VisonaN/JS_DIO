// const { gets, print } = require('./funcoes_auxiliares');

// const numerosSorteados = [];

// for (let i = 0; i < 5; i++) {
//     const numerosSorteado = gets();
//     numerosSorteados.push(numerosSorteado);
// }

// let maiorValor = 0;

// for (let i = 0; i < numerosSorteados.length; i++) {
//     const numerosSorteado = numerosSorteados[i];
//     if (numerosSorteado > maiorValor) {
//         maiorValor = numerosSorteado;
//     }
// }

// print(maiorValor)

// Forma mais fácil de fazer isso

const { gets, print } = require('./funcoes_auxiliares');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado)