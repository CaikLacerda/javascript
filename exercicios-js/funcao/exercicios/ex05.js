function formatarNumeroDecimal(numeroDecimal) {
    valorEmReais = `R$ ${numeroDecimal.toFixed(2).toString().replace('.', ',')}`
    console.log(valorEmReais)
}

formatarNumeroDecimal(0.1 + 0.2)