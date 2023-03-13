
/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura
        this.imc = ((peso / (altura * altura))).toFixed(2);
    }
    
    classeImc() {
        const imc = this.classeImc();
            if (imc < 18.5) {
                return ('Abaixo do peso');
            } else if (imc > 18.5 && imc < 25) {
                return ('Peso Normal');
            } else if (imc > 25 && imc < 30) {
                return ('Acima do peso');
            } else if (imc > 30 && imc < 40) {
                return ('Atenção!!! Obesidade!');
            } else {
                return ('Alerta!!! Obesidade Grave');
        }
    }

    descrever () {
        console.log(`O senhor ${this.nome}, pesa ${this.peso}kg, tem altura de ${this.altura}m e seu IMC é de ${this.imc}`);
    }
}

const jose = new pessoa ('José', 70, 1.75);

jose.descrever();
console.log(jose.classeImc());
