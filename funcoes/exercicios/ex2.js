// Função verificarIdade


function verificarIdade(idade) {
    if (idade <= 17) {
        console.log(`Você tem ${idade} anos, portanto é Menor de Idade`);
    } else {
        console.log(`Você tem ${idade} anos, portanto é Maior de Idade`);
    }
}

verificarIdade(27)