Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if(nota >=9 && nota <=10) {
        console.log('Quadro de Honra ^-^')
    } else if(nota.entre(7, 8.99)) {         // Else If serve para colocar outra condicao, podendo colocar varias uma atras da outra
        console.log('Aprovado! :D')
    } else if(nota.entre(4, 6.99)) {
        console.log('Reprovado! .-.')
    } else {
        console.log('Valor Invalido >:(')
    }

}

imprimirResultado(9)
imprimirResultado(8.9)
imprimirResultado(4)
imprimirResultado(11)