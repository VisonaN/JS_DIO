// Funções invocadas imediatamente

// Segue essa mesma lógica de que o que está entre parênteses vai ser executado antes, como =>10 * (10 + 2)

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

(function main() { // Pode tirar esse main ~nome~ da função que funciona tbm
    const peso = 58;
    const altura = 1.65;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc.toFixed(2)));
})(); // Funções invocadas imediatamente => nesse caso não precisa declarar o main() depois para executar a função, ela ja vai ser auto executada.

// tirando o main vira uma função não nomeada, ou seja, ela só vai existir dentro do parênteses e não pode ser chamada fora pois não tem mais uma variável para referênciar a função:

/*
=> É muito feito em web, na criação de sites e motores, são criadas para isolar o código de dentro, um código que vai ser executado uma só vez, isola o escopo também.

// Vai ser o Main => Código principal
(function () { => função anônima
    const peso = 58;
    const altura = 1.65;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc.toFixed(2)));
})();

*/