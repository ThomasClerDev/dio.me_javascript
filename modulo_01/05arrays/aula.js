
/* Importante lembrar que:
{} - representa um bloco de código;
[] - representa uma lista.
*/
/* Explicando sobre listas

const alunos = ['Thomas', 'Marcos', 'Bruna', 'Ana'];

//Consigo chamar todos os alunos:
console.log(alunos);

//consigo também chamar um aluno pela sua posiçao, ficando assim:
console.log(alunos[3]);

//conseguimos també adicionar mais um aluno dinamicamente, usando o elemento ".push", ficando:
alunos.push('Renan');
console.log(alunos);

//Ou também podemos adicionar um nome diretamente pela sua posição, ficando:
//Importante lembrar que esse método também substitui por esse novo nome, caso nessa posição já exista algum dado.
alunos[4] = 'Vitor';
console.log(alunos);

//O elemento ".pop" é utilizado para remover o ultimo elemento de dentro da lista,
//O elemento ".shift" é utilizado para remober o primeiro elemento de dentro da lista.
//ficando assim:
console.log(alunos);
console.log(alunos.pop());
console.log(alunos);
console.log(alunos.shift());
console.log(alunos);

//Para saber o tamanho da lista usamos o elemento ".length", ficando:
console.log(alunos.lenght);
*/
/* exemplo
const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

console.log(notas.length);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

console.log(soma / notas.length);

//ou:
console.log(soma / 5); //Quantidades de notas.
*/

// Percorrendo dinâmicamente a lista usando estrutura de repetição:
/*
const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
*/

/* Uma delas é o "for" um looping de execução de código:
//lembrando que "i" sognifica "index"
//lembrando que "array.length" retorna um booleano que vai dizer o tamanho da operação retornando true, quando satisfeito ele retorna false e para de executar.
//lembrando que "i++" significa "index++" que continua executando o código até satisfazer o "array.length", sendo a seguinte operação:
let i = 1;
i = i + 1;
*/

/* exemplo 01:

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i < 20; i++) {
    console.log(i);
}
*/

/* exemplo 02:

const nome = 'Thomas Broulhe de Oliveira Cler';
//console.log(nome.length);

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
}
*/

/* exemplo 03:
//Queremos saber qual a média das notas desse aluno, de forma dinâmica, incluindo nota por nota:
const notas = [];
notas.push(10);
notas.push(10);
notas.push(10);


//criamos uma variável "let", pois a cada interação vamos modificando ela, por isso não pode ser uma "const".
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log((media).toFixed(1));
/*/

