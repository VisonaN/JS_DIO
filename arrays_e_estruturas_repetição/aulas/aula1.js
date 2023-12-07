// Arrays

const alunos = ['Paulo', 'Mylla', 'Bibina'];

alunos.push('Panpan'); // .push() adiciona elementos na array dinamicamente

alunos[4] = 'Sissa'; // Adicionando diretamente botando a posição
// alunos[3] = 'Jubs' => Substituiria 'Panpan' no índice 3 por exemplo

//console.log(alunos[4]);

const gatos = [];

gatos.push('Sabina', 'Pandora', 'Sasori', 'Jubileu', 10); // Adicionando dinamicamente mais de um elemento em uma array vazia e pode ter tipos de elementos diferentes, como no caso uma string e um numero

// console.log(gatos);

// gatos.pop(); => Remove o último item da array

// console.log(gatos.pop()); // Aqui está mostrando que removeu o numero 10 da array

// console.log(gatos);

// gatos.shift(); => Remove o primeiro item da array

// console.log(gatos.shift()); 

console.log('----------------------------------------------------------------');

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

console.log(soma / notas.length)