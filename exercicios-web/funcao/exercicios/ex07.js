function resolverBhaskara (ax2, bx, c) {
    resultadosDeX = []

    formula = ax2**2, bx, c
    let delta = (bx**2) - (4 * ax2 * c)

    if(delta < 0) {
        return 'Delta eh negativo'
    }

    let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
    let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)

    resultadosDeX.push (x1)
    resultadosDeX.push (x2)
    return resultadosDeX
}

console.log(resolverBhaskara(1, 3, 2))
console.log(resolverBhaskara(3,1,2))