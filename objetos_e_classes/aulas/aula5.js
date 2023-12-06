// Como criar classes e instâncias

/**
 * Classe => Definição = Como aquele objeto deve ser
 * Instância => Ocorrência = As informações do objeto
 */

class Pessoa {
    nome;
    idade;
    altura;
    descrever() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e ${this.altura} de altura.`)
    }
}

// Abaixo uma instância de pessoa, que sempre vai seguir o modelo da classe Pessoa

const paulo = new Pessoa();
paulo.nome = 'Paulo Visoná Neto';
paulo.idade = 27;
paulo.altura = 1.65;

const mylla = new Pessoa();
mylla.nome = 'Mylla Machado dos Reis';
mylla.idade = 24;
mylla.altura = 1.63;

paulo.descrever();
mylla.descrever();

console.log('-----------------------------------------------------------------')

class PessoaImc {
    nome;
    idade;
    altura;
    peso;
    imc;
    descreverImc() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e ${this.altura} de altura. E meu IMC é de ${this.imc.toFixed(2)}`)
    };
}

const pauloV = new PessoaImc();
pauloV.nome = 'Paulo Visoná Neto';
pauloV.idade = 27;
pauloV.altura = 1.65;
pauloV.peso = 58;
pauloV.imc = 58 / (1.65 * 1.65);

const myllaM = new PessoaImc();
myllaM.nome = 'Mylla Machado dos Reis';
myllaM.idade = 24;
myllaM.altura = 1.63;
myllaM.peso = 45;
myllaM.imc = 45 / (1.63 * 1.63);

pauloV.descreverImc();
myllaM.descreverImc();