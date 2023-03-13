
//A classe diz como uma pessoa deveria ser, como mostra abaixo:
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    //o "constructor" serve para travar uma obrigatoriedade de determinado parâmetro, como abaixo:
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    //Não preciso usar uma "function" para chamadas dentro de uma classe, ficando:

    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos e nasci no ano de ${this.anoDeNascimento}`);


}
}

//A instância é a ocorrência de uma pessoa específica, nesse caso o THOMAS:
const thomas = new Pessoa('Thomas', 26);

const renan = new Pessoa('Renan', 30);

//console.log(thomas);
//console.log(renan);

thomas.descrever();
renan.descrever();

console.log(thomas);