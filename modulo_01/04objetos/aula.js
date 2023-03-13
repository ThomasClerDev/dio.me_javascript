
const pessoa = {
    nome: 'Thomas',
    idade: 26,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`)
    }
};

/*//forma de excluir informações:
pessoa.altura = 1.87;

delete thomas.nome;

console.log(thomas);
*/

//Chamamos de "método" toda função contida dentro de um objeto.

//pessoa.descrever();

/*//Outra forma:
pessoa.nome = 'Marcos';
pessoa.idade = 23;

pessoa.descrever();
*/

/*//Acessando esses valores através de uma sintaxe mais dinâmica:
const atributo = 'idade';

console.log(pessoa[atributo]);
console.log(pessoa['nome']);
*/