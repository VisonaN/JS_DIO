// VARIÁVEIS PODEM SER NOMEADAS COM LETRAS, UNDERLINE OU $

// tem tres forma de declarar variáveis em JS => var, let e const
// O JS vai ajustar os tipos e fazer os castings automaticamente para tentar resolver as operações que estamos fazendo
// O JS é case-sensitive (o que é minúsculo tem que ser minúsculo e o que é maiúsculo tem que ser maiúsculo), se declarar uma variável escrita de uma forma, na hora de chamar a variável tem que chamar ela da mesma forma se não dá erro. Ex: var Teste = 1, na hora de chamar a variável de novo tem que chamar Teste e não teste (com o T em minúscula)

var var1 = 10;

var var2 = 'Teste';

console.log(var1 /* Number */ + var2 /* String */)

// Nesse caso o Js viu que não dava pra fazer uma operação aritmética com as duas var e concatenou elas e converteu o numero da var1 para texto automaticamente.
// mas se fosse um número entre as aspas simples na var2 o js converteria o numero entre a string e faria a operação aritmética (menos se for o '+', porque usando o '+' você concatena uma string)

/**
 * Tipos diferentes de como declarar uma variável no JS
 * var => Até antes do ECS6 (EcmaScrip6 - 2015 - Padronização da linguagem JavaScript) só podia declarar variáveis com o var, mas sofria um efeito colateral do hoisting, que era vazar o escopo.
 * Ou seja, variáveis do tipo var se mantem restritas ao escopo global e ao escopo de função (vai sofrer hoisting até para em um dos dois escopos)
 * O MESMO NÃO ACONTECE COM FUNÇÕES
 * Exemplo:
*/
    if (true) {
        var var3 = 10;
    }

    console.log(var3); // Vai dar 10 no console

//    Por conta do hoisting ficaria assim: => h para demonstração do hoisting

    var var3h;

    if (true) {
        var3h = 10;
    }

    console.log(var3h);
    

/**
 * Já quando se declara variáveis usando o let, ele se restringe a qualquer escopo de bloco (function, if, while, for...), não vai sofrer hoisting até o escopo global, somente até o escopo do bloco onde ela está
 */

/**
 * O const se comporta como o let, mas é uma constante, não tem como fazer uma reatribuição de valor como é possível fazer no let e no var
 */