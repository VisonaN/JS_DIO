// Criando métodos para o objeto

const pessoa = {
    nome: 'Paulo Visoná Neto',
    idade: 27,
    altura: 1.65,
    descrever: function() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e ${this.altura} de altura.`)
    }
};

// this é uma palavra reservada para função e ele diz respeito ao contexto onde a função está sendo executada

pessoa.nome = 'Mylla Machado dos Reis';
pessoa.idade = 24;
pessoa.altura = 1.63;

pessoa.descrever();