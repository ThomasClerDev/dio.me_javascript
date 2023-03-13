

const numero = 0;


//Para sabermos o resto da divisão usamos %
//Quando utilizamos == estamos convertendo texto em número, ou seja, conversão implicita.
//Quando utilizamos === temos que ter somente números
/*const numeroPar = (numero % 2) === 0;

/*if (numeroPar) {
    console.log('Par');
    
}
//Para negar uma constante usamos ! (exclamação)
if (!numeroPar) {
    console.log('Impar');
}


//ou

if (numeroPar) {
    console.log('Par');
} else {
    console.log('Impar')
}
*/

const numeroDivisivelPor5 = (numero % 5) === 0;

/*if (numeroDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não')
}
*/

//Quando for 0 vamos imprimir outra coisa, fincando:

if (numero === 0) {
    console.log('O número é inválido')
} else if (numeroDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não')
}
