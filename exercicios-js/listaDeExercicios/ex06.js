function inverterValores(valor) {
    const tipo = typeof valor

    if (tipo == 'boolean') return !valor
    if (tipo == 'number') return -valor
    else 
        return `Booleano ou number esperado, porem o parametro eh do tipo ${tipo}`
}

console.log(inverterValores(true))
console.log(inverterValores(5))
console.log(inverterValores('oi'))