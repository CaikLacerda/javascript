function calcularFatorial (num) {
    let soma = 1
    if(Number.isInteger(num)) {
        while(num>0) {
            soma = soma*num
            num--
        }
        return soma;
    } else {
        return 'O parametro nao esta disponivel'
    }
        
}

function calcularFatorial2 (num) {
    if(num == 0 ) {
        return 1
    } else {
        return num * calcularFatorial2(num - 1)
    }
}

function calcularFatorial3 (num) {
    return (num === 1 ? 1 : num * calcularFatorial3(num - 1))
}

console.log(calcularFatorial(5))
console.log(calcularFatorial2(5))
console.log(calcularFatorial3(5))

console.log(calcularFatorial(3.2))
// console.log(calcularFatorial2(3.2))
// console.log(calcularFatorial3(3.2))
