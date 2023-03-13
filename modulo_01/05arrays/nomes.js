//Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const nomes = ['Julia', 'Vanessa', 'Thomas', 'Violet', 'Viviane', 'Ana', 'Vitoria'];

for (let i = 0; i < nomes.length; i++) {
    const letraV = nomes[i];
    if (letraV === 'V') {
        console.log(letraV);
    }
}