
function meuNome(name) {
    return 'Meu nome é: ' + name;
}


function minhaIdade(idade) {
    if (idade <18) {
        return 'anos e sou menor de idade';
    } else if (idade >= 18) {
        return 'anos e sou maior de idade';
    }
}

function main() {
    const name = 'Thomas'
    const idade = 12;
    console.log(meuNome(name) + ' ' + 'e' + ' ' + 'tenho' + ' ' + idade + ' ' + minhaIdade(idade));
}

main();