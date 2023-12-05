/**
 * O IMC - Índice de massa corpórea é um critério da OMS para dar uma indicação sobre a condição de peso de uma pessoa adulta
 * 
 * Fórmula do IMC:
 * 
 * IMC - peso / (altura * altura)
 * 
 * Elabore um algorítmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:
 * 
 * IMC em adultos. Valores:
 * 
 * Abaixo de 18.5 - Abaixo do peso
 * Entre 18.5 e 25 - Peso normal
 * Entre 25 e 30 - Acima do peso
 * Entre 30 e 40 - Obeso
 * Acima de 40 - Obesidade Grave
 */

const altura = 1.65;
const peso = 58;

const calculo = peso / Math.pow(altura, 2) // Altura ao quadrado
const imc = calculo.toFixed(2)


if (imc < 18.5) {
    console.log(`Seu IMC é de ${imc}, você está abaixo do peso.`);
} else if (imc >= 18.5 && imc < 25) {
    console.log(`Seu IMC é de ${imc}, você está no peso normal.`);
} else if (imc >= 25 && imc < 30) {
    console.log(`Seu IMC é de ${imc}, você está acima do peso.`);
} else if (imc >= 30 && imc < 40) {
    console.log(`Seu IMC é de ${imc}, você está obeso.`);
} else {
    console.log(`Seu IMC é de ${imc}, você está com obesidade grave.`);
};