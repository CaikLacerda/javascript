function multiplicar(numeroA, numeroB) {
    if (numeroA === 0 || numeroB === 0) return 0

    const maiorNumero = Math.max(numeroA, numeroB)    
    const menorNumero = Math.min(numeroA, numeroB)

    function multiplicarRecursivamente(numero, multiplicador) {
        return (
            multiplicador === 1 ?
            numero :
            numero + multiplicarRecursivamente(numero, multiplicador - 1)
        )
    }
    return multiplicarRecursivamente(maiorNumero, menorNumero)
}

console.log(multiplicar(2,2))
console.log(multiplicar(6,2))