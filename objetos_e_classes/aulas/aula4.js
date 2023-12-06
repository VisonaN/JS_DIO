// Acessando dinamicamente valores de um objeto

const pessoa = {
    nome: 'Paulo Visoná Neto',
    idade: 27,
    altura: 1.65,
    descrever: function() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e ${this.altura} de altura.`)
    }
};

const atributo = 'idade';
console.log(pessoa[atributo]);
// ou pessoa['nome'] = 'teste';
// ou pessoa.nome = 'teste';