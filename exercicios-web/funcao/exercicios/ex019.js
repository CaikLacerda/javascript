function calcularProduto(codigo, quantidade) {
    switch(codigo) {
        case 100:
            return quantidade * 3
            break
        case 200:
            return quantidade * 4
            break
        case 300:
            return quantidade * 5.5
            break
        case 400:
            return quantidade * 7.5
            break
        case 500:
            return quantidade * 3.5
            break
        case 600:
            return quantidade * 2.8
            break
        default:
            return 'Codigo do produto invalido'
    }
}

console.log(calcularProduto(100, 3))
console.log(calcularProduto(500, 3))
console.log(calcularProduto(200, 1))