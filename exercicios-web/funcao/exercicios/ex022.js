// Meu metodo
function anuidade(mes, valor) {
    switch(mes) {
        case 1:
            return valor
            break  
        case 2:
            return valor + (valor * 0.05)
            break  
        case 3:
            return valor + (valor * 0.10)
            break
        case 4:
            return valor + (valor * 0.15)
            break
        case 5:
            return valor + (valor * 0.20)
            break
        case 6:
            return valor + (valor * 0.25)
            break
        case 7:
            return valor + (valor * 0.30)
            break
        default:
            return 'Numero de mes invalido, tente novamente.'
    }
}

console.log(anuidade(1, 100))
console.log(anuidade(2, 100))
console.log(anuidade(3, 100))
console.log(anuidade(4, 100))

// Metodo do curso
function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(4, 100))