// tem tres forma de declarar variáveis em JS => var, let e const
// O JS vai ajustar os tipos e fazer os castings automaticamente para tentar resolver as operações que estamos fazendo
// O JS é case-sensitive (o que é minúsculo tem que ser minúsculo e o que é maiúsculo tem que ser maiúsculo), se declarar uma variável escrita de uma forma, na hora de chamar a variável tem que chamar ela da mesma forma se não dá erro. Ex: var Teste = 1, na hora de chamar a variável de novo tem que chamar Teste e não teste (com o T em minúscula)

var var1 = 10;

var var2 = 'Teste';

console.log(var1 /* Number */ + var2 /* String */)

// Nesse caso o Js viu que não dava pra fazer uma operação aritmética com as duas var e concatenou elas e converteu o numero da var1 para texto automaticamente.
// mas se fosse um número entre as aspas simples na var2 o js converteria o numero entre a string e faria a operação aritmética (menos se for o '+', porque usando o '+' você concatena uma string)