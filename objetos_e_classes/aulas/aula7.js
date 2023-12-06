// Funções recebendo objetos

class Pessoa {
    nome;
    idade;
    altura;
    anoDeNascimento;

    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos, nascido em ${this.anoDeNascimento}, e tenho ${this.altura} de altura.`)
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}, pois ele(a) tem ${p1.idade} anos.`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}, pois ele(a) tem ${p2.idade} anos.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}

const paulo = new Pessoa('Paulo Visoná Neto', 27);
const mylla = new Pessoa('Mylla Machado dos Reis', 24);

compararPessoas(paulo, mylla);