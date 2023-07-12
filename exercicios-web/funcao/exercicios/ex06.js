function calculoJurosSimples(capitalInicial, taxaJuros, tempo) {
    return `Valor a receber com juros simples sera de: R$${capitalInicial + (capitalInicial * taxaJuros * tempo)}`
}

function calculoJurosCompostos(capitalInicial, taxaJuros, tempoAplicado) {
    return `Valor a receber com os juros compostos sera de: R$${capitalInicial * (1 + taxaJuros) ** tempoAplicado}`
}

console.log(calculoJurosSimples(100, 10/100, 2))

console.log(calculoJurosCompostos(100, 10/100, 2))