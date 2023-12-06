/* 

Funções são um pequeno trecho de código que podemos invocar a qualquer momento que quisermos

              (Dentro dos parênteses) -> Aqui ficam os parâmetros da função
function teste() {
    console.log('Teste');
}

teste();
teste();

*/

// Funções para calcular preço

/**
 * 1 - A vista => Desconto de 10%
 * 2 - Dinheiro ou PIX => Desconto de 15%
 * 3 - Duas vezes => Valor cheio
 * 4 - Mais de duas vezes => Juros de 10%
 */

const precoEtiqueta = 100;
const formaDePagamento = 4;

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

function comprar(precoEtiqueta, formaDePagamento) {
    if (formaDePagamento === 1) {
        console.log(aplicarDesconto(precoEtiqueta, 10));
    } else if (formaDePagamento === 2) {
        console.log(aplicarDesconto(precoEtiqueta, 15));
    } else if (formaDePagamento === 3) {
        console.log(precoEtiqueta);
    } else {
        console.log(aplicarJuros(precoEtiqueta, 10));
    }
}

comprar(200, 1)