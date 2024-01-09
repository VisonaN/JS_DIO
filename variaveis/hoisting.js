/*

* No Js acontece um fenômeno chamado hoisting, em uma linguagem de programação procedural, a ordem de declaração importa.
* Exemplo:
* A função teste abaixo, se fosse em uma linguagem procedural, só poderia ser chamada logo após a declaração, não antes

*/

function teste() {
    console.log('teste');
}

teste();

/*

* Já no JS, a ordem de declaração é influenciada pelo hoisting, tomando como exemplo a função acima, poderíamos chamar a função antes e depois declarar ela, porque o Js vai fazer o içamento de todas as declarações e jogar para o início do arquivo

*/

teste1();

function teste1() {
    console.log('teste1');
}

/*

* Na prática, seria como se o que está escrito a baixo fosse executado somente depois que ficasse igual ao primeiro exemplo onde a função é declarada antes e chamada depois.

*/

/*
 * Formas diferentes que o hoisting afeta as declarações
 * O exemplo abaixo vai funcionar perfeitamente nos dois casos
*/

var teste2 = function() {
    console.log('teste2');
}

function teste3() {
    console.log('teste3');
}

teste2();
teste3();

/*
 * Mas se jogar a declaração para depois da chamada das funções, o hoisting vai afetar de formas diferentes as funções:
*/

teste4();
teste5();

var teste4 = function() {
    console.log('teste4');
}

function teste5() {
    console.log('teste5');
}

/*
 * Nesse caso, o teste5 vai funcionar normalmente, mas o teste4 não vai, pois o hoisting joga somente a declaração para cima, mas como ele não joga a atribuição vai dar erro, pois ficaria assim com o hoisting:

var teste4; => Pois está sendo declarada uma variável acima e seu valor sendo atribuido após ser chamada

function teste5() {
    console.log('teste5');
}
=> funciona com function pois a função por si só já é uma declaração então vai ela toda pra cima

teste4(); => Variável sendo chamada antes da atribuição.
teste5();

teste4 = function() { => Valor da variável sendo atribuido só aqui.
    console.log('teste4');
}

*/