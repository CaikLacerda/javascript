function calcularAumento(plano, salarioAtual) {
    switch(plano) {
        case 'A':
            return 'Novo salario sera de:', salarioAtual + (0.1 * salarioAtual)
            break
        case 'B':
            return 'Novo salario sera de:', salarioAtual + (0.15 * salarioAtual)
            break
        case 'C':
            return 'Novo salario sera de:', salarioAtual + (0.20 * salarioAtual)
            break
        default:
            return 'O plano de trabalho informado esta incorreto.'
    }
}

console.log(calcularAumento('A', 1200))
console.log(calcularAumento('B', 1200))
console.log(calcularAumento('C', 1200))
console.log(calcularAumento('D', 1200))

