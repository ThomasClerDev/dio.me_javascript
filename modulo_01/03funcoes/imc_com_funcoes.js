

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc > 18.5 && imc < 25) {
        return 'Peso Normal';
    } else if (imc > 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc > 30 && imc < 40) {
        return 'Atenção!!! Obesidade!';
    } else {
        return 'Alerta!!! Obesidade Grave';
    }
}

/*
function main() {
    const peso = 111;
    const altura = 1.87;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}
*/

//Ou podemos invocar a função dessa forma:

(function () {
    const peso = 111;
    const altura = 1.87;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();

//Fazendo dessa forma, podemos retirar o nome "main" da função.
//Esse recurso é utilizado para isolar o código que está dentro da função, pois não podemos chama-la novamente.
//recurso muito utilizado em desenvolvimento web.