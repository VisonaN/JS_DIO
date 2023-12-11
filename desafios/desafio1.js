/**
 * Faça um programa que receba a média de um aluno.
 * Caso a média seja < 5 imprima "Reprovado"
 * Caso a média seja >= 5 e < 7 imprima "Recuperação"
 * Caso a média seja >= 7 imprima "Aprovado"
*/

/* PENSEI QUE ERA ASSIM

const nota = 7;
const nota1 = 1;
const nota2 = 1;
const nota3 = 10;
const nota4 = 5;
const mediaAluno = (nota + nota1 + nota2 + nota3 + nota4) / 5;

if (mediaAluno < 5) {
    console.log(`Sua média foi ${mediaAluno}, portanto você está Reprovado.`)
} else if (mediaAluno >= 5 && mediaAluno < 7) {
    console.log(`Sua média foi ${mediaAluno}, portanto você está em Recuperação.`)
} else {
    console.log(`Sua média foi ${mediaAluno}, portanto você está Aprovado.`)
}

*/

const { gets, print } = require('./funcoes_auxiliaresEx1');

const mediaAluno = gets();

if (mediaAluno < 5) {
    print(`Sua média foi ${mediaAluno}, portanto você está Reprovado.`)
} else if (mediaAluno >= 5 && mediaAluno < 7) {
    print(`Sua média foi ${mediaAluno}, portanto você está em Recuperação.`)
} else {
    print(`Sua média foi ${mediaAluno}, portanto você está Aprovado.`)
}