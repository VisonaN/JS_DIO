/**
 * 1 - Crie uma classe para representar carros.
 * Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilômetro rodado.
 * Crie um método que dado a quantidade de kilometros e o preço do combustivel nos dê o valor gasto em reais para realizar este percurso
*/

class Carros {
    marca;
    cor;
    gastoPorKm;

    constructor(marca, cor, gastoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm.toFixed(2);
    }

    calcularGastoViagem(distanciaEmKm, valorCombustivel) {
        return distanciaEmKm * this.gastoPorKm * valorCombustivel;
    }
}

const fiatUno = new Carros('Fiat', 'Preto', 1 / 12);
const fiatPalio = new Carros('Fiat', 'Prata', 1 / 10);
console.log(fiatUno.calcularGastoViagem(130, 5.79));
console.log(fiatPalio.calcularGastoViagem(130, 5.79));