// Editando informações de um objeto

const paulo = {
    nome: 'Paulo Visoná Neto',
    idade: 27
};

paulo.altura = 1.65; // Incrementando o objeto

delete paulo.idade;

console.log(paulo);