let nomes = ['Caik', 'Isabela', 'Danilo']

function receberPrimeiroEUltimoElemento(lista) {
    const primeiroElemento = lista.shift()
    const ultimoElemento = lista.pop()

    return [primeiroElemento, ultimoElemento]
}

console.log(receberPrimeiroEUltimoElemento(nomes))