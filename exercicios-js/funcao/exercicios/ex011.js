function calcularAnoBissexto(ano) {
    if(ano <= 0) {
        return false
    } else if(ano % 400 == 0) {
        return true
    } else if(ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(calcularAnoBissexto(400))
console.log(calcularAnoBissexto(4))
console.log(calcularAnoBissexto(120))
console.log(calcularAnoBissexto(100))
console.log(calcularAnoBissexto(2023))
console.log(calcularAnoBissexto(2004))

