function ParesEImpares(array) {
    const resultado = []
    

    for(let i = 0; i < array.length; i += 2) {
        const numeroPar = array[i] % 2 == 0

        if(numeroPar) {
            resultado.push(array[i])
        }
    }
    return resultado
}

console.log(ParesEImpares([10, 20, 30, 40]))

// 2 Resolucao 

function numeroParDeIndicePar(numeros) {
    return numeros.filter((numero, indice) => {
        const numeroPar = numero % 2 == 0
        const indicePar = indice % 2 == 0

        return numeroPar && indicePar
    })
}

console.log(numeroParDeIndicePar([10, 20, 30, 40]))