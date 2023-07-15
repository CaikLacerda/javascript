function calculadora(num1, operacao, num2) {
    switch(operacao) {
        case '+':
            return num1 + num2
            break
        case '-':
            return num1 - num2
            break
        case '*':
            return num1 * num2
            break
        case '/':
            return num1 / num2
            break
        default:
            return 'Essa operacao eh invalida!'
    }
}

console.log(calculadora(4, '+', 4))
console.log(calculadora(4, '-', 4))
console.log(calculadora(4, '*', 4))
console.log(calculadora(4, '/', 4))
console.log(calculadora(4, '**', 4))
