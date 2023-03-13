
/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a 
escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

/*
 =============================================== Minha forma pensada ==================================================
const precoNormal = 150;
const avDebito = 100 / 10;
const avDinheiroPix = 100 / 15;
const divDuasVezes = precoNormal;
const divAcimaDe2X = 100 / 10;

const total = 'divDuasVezes'

if (total === 'avDebito') {
    console.log((precoNormal - avDebito).toFixed(2));
} else if (total === 'avDinheiroPix') {
    console.log((precoNormal - avDinheiroPix).toFixed(2));
} else if (total === 'divDuasVezes') {
    console.log((divDuasVezes).toFixed(2));
} else {
    console.log((precoNormal + divAcimaDe2X).toFixed(2));
}
*/

//=========================== Forma do instrutor Tech lead ================================

const precoEtiqueta = 150;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.10).toFixed(2));
} else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15).toFixed(2));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.10));
}