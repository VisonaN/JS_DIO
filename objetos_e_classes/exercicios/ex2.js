/**
 * Crie uma classe para representar pessoas
 * Para cada pessoa temos os atributos: nome, peso e altura
 * As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura))
 * Instancie uma pessoa chamada Paulo que tenha 58kg. 1.65 de altura e faça paulo falar o valor do seu IMC 
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    falarImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc() {
        const imc = this.falarImc();

        if (imc < 18.5) {
            return (`${imc.toFixed(2)}, ou seja, abaixo do peso.`);
        } else if (imc >= 18.5 && imc < 25) {
            return (`${imc.toFixed(2)}, ou seja, peso normal.`);
        } else if (imc >= 25 && imc < 30) {
            return (`${imc.toFixed(2)}, ou seja, acima do peso.`);
        } else if (imc >= 30 && imc < 40) {
            return (`${imc.toFixed(2)}, ou seja, obeso.`);
        } else {
            return (`${imc.toFixed(2)}, ou seja, obesidade grave.`);
        };
    }
}

const paulo = new Pessoa('Paulo Visoná Neto', 58, 1.65);
console.log(`Meu nome é ${paulo.nome} e meu IMC é: ${paulo.classificarImc()}.`);
const mylla = new Pessoa('Mylla Machado dos Reis', 48, 1.63);
console.log(`Meu nome é ${mylla.nome} e meu IMC é: ${mylla.classificarImc()}.`);
const jubis = new Pessoa('Jubileu Irineu', 6, 56);
console.log(`Meu nome é ${jubis.nome} e meu IMC é: ${jubis.classificarImc()}.`);