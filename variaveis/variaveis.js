// tem tres forma de declarar variáveis em JS
// O JS vai ajustar os tipos e fazer os castings automaticamente para tentar resolver as operações que estamos fazendo

var var1 = 10;

var var2 = 'Teste';

console.log(var1 /* Number */ + var2 /* String */)

// Nesse caso o Js viu que não dava pra fazer uma operação aritmética com as duas var e concatenou elas e converteu o numero da var1 para texto automaticamente.
// mas se fosse um número entre as aspas simples na var2 o js converteria o numero entre a string e faria a operação aritmética (menos se for o '+', porque usando o '+' você concatena uma string)