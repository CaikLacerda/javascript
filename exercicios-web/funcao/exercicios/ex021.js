// Meu meutodo
function valorConvenio (idade) {
    const valorPadrao = 100
    let valorPago = 0
    if(idade < 10) {
        valorPago = valorPadrao + 80
    } else if (idade >= 10 && idade <= 30) {
        valorPago = valorPadrao + 50
    } else if(idade > 30 && idade <= 60) {
        valorPago = valorPadrao + 95
    } else {
        valorPago = valorPadrao + 130
    }
    return valorPago
}

console.log(valorConvenio(9))
console.log(valorConvenio(61))
console.log(valorConvenio(25))
console.log(valorConvenio(46))

//  Metodo feito pelo curso (mais otimizado)
function calcularPreco (idade) {
    if(idade < 10){
        return 180
    } else if(idade < 30) {
        return 150
    } else if (idade < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(calcularPreco(8));
console.log(calcularPreco(15));
console.log(calcularPreco(35));
console.log(calcularPreco(52));
console.log(calcularPreco(80));
