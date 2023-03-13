
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

function comparaPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`);
    } else {
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}.`);
    }
}

const thomas = new Pessoa('Thomas', 26);
const marcos = new Pessoa('Marcos', 28);

comparaPessoas(marcos, thomas);
