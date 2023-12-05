// Invocando uma função dentro de outra função

function escrevaMeuNome(nome, sobrenome) {
    return `Meu nome é ${nome} ${sobrenome}`;
}

function verificarIdade(idade) {
    if (idade <= 17) {
        console.log(escrevaMeuNome('Paulo', 'Visoná') + ', ' + `tenho ${idade} anos, portanto sou Menor de Idade`);
    } else {
        console.log(escrevaMeuNome('Paulo', 'Visoná') + ', ' + `tenho ${idade} anos, portanto sou Maior de Idade`);
    }
}

verificarIdade(27)