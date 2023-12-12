/*
 * Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
 * PAra realizar o calculo receba o valor bruto do salário e o adicional dos beneficios.
 * O salário a ser transferido é calculado da seguinte forma:
 * 
 * valor bruto - percentual de imposto mediante a faiza salarial + adicional dos benefícios
 * 
 * PAra calcular o percentual de imposto segue as aliquiotas:
 * 
 *       De 0.00 a 1100.00 = 5%
 *       De 1100.00 a 2500.00 = 10%
 *       Maior que 2500.00 = 15%
 * 
 *          Exemplo:
 *              Entrada:
 *                  2000
 *                  250
 * 
 *              Saída:
 *                  2050             
*/

const { gets, print } = require('./funcoes_auxiliaresEx3');

const salarioBruto = gets();
const adicionalBeneficios = gets();

function calcularPercentual(valor, aliquiotas) {
    return valor * (aliquiotas / 100);
}

function pegarAliquota(salario) {
    if (salario >= 0 && salario <= 1100) {
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}

const aliquotaImposto = pegarAliquota(salarioBruto);
const valorImposto = calcularPercentual(salarioBruto, aliquotaImposto);
const valorATransferir = salarioBruto - valorImposto + adicionalBeneficios;

print(valorATransferir);