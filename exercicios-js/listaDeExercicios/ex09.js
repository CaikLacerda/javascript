function repetir(item, repeticao) {
    let elementos = []
    for( let i = 0; i < repeticao; i++) {
        elementos.push(item)
    }

    return elementos
}

function repetirRecursivo(elemento, quantidade) {
    return Array(quantidade).fill(elemento)
}

console.log(repetir('Ola', 3))
console.log(repetirRecursivo('Caik', 7))
