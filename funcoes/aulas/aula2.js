// Como organizar as funções

// Criar do lado de fora da função main() todas as funções que forem necessárias e declará-las dentro da função main()
// EX:

function calcularJuros() {

}

// Todos os programas vão ser criados dentro de uma função main()

function main1() {
    console.log('Programa principal');
    calcularJuros();
}

main1();

console.log('----------------------------------------------------------------');

// EX com o exercício de IMC

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return `Seu IMC é de ${imc}, você está abaixo do peso.`;
    } else if (imc >= 18.5 && imc < 25) {
        return `Seu IMC é de ${imc}, você está no peso normal.`;
    } else if (imc >= 25 && imc < 30) {
        return `Seu IMC é de ${imc}, você está acima do peso.`;
    } else if (imc >= 30 && imc < 40) {
        return `Seu IMC é de ${imc}, você está obeso.`;
    } else {
        return `Seu IMC é de ${imc}, você está com obesidade grave.`;
    };
}

function main() {
    const peso = 58;
    const altura = 1.65;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc.toFixed(2)));
}

main();

// Funções no Js depois de declaradas viram objetos
// Pode passar função como parâmetro de outra função
// Pode reatribuir valores para uma função