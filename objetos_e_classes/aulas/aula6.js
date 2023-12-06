// Criando instâncias com o construtor

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

const paulo = new Pessoa('Paulo Visoná Neto', 27, 1.65);
const mylla = new Pessoa('Mylla Machado dos Reis', 24, 1.63);

paulo.descrever();
mylla.descrever();

console.log(paulo);
console.log(mylla);