
/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class carro {
    marca;
    cor;
    gastoMedioCombPorKmRodado;

    constructor(marca, cor, distViagem, kmPorLitro, precoGasolina) {
        this.marca = marca;
        this.cor = cor;
        this.distViagem = distViagem ;
        this.kmPorLitro = kmPorLitro;
        this.precoGasolina = precoGasolina;
        this.gastoMedioCombPorKmRodado = ((precoGasolina / kmPorLitro).toFixed(3));
        this.gastoTotalViagem = (((distViagem / kmPorLitro) * precoGasolina).toFixed(2))

    }

    descrever () {
        console.log(`O carro da marca ${this.marca} da cor ${this.cor}, que faz ${this.kmPorLitro} km por litro, tem o gasto médio de ${this.gastoMedioCombPorKmRodado} reais por km, gastando ${this.gastoTotalViagem} reais para percorrer ${this.distViagem} quilometros`);
    }
}

const corolla = new carro ('corolla', 'branco', 150, 14, 5.20);
const civic = new carro ('Honda Civic', 'Azul', 150, 9, 6.30);

civic.descrever();