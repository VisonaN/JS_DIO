/**
 * Elabore um algorítmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha de condição de pagamento
 * Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado
 * 
 * Código condição de pagamento:
 * 
 * 1 - A vista Débito -> 10% de desconto
 * 2 - A vista no dinheiro ou PIX -> 15% de desconto
 * 3 - Em duas vezes -> Preço cheio
 * 4 - Acima de duas vezes -> Juros de 10%
 */

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}