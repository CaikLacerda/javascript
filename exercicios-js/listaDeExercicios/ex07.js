function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if(inclusivo) return numero >= minimo && numero <= maximo
    
    return numero > minimo && numero < maximo
}

function estaEntre2(numero, minimo, maximo, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
} 

console.log(estaEntre(10, 5, 50))
console.log(estaEntre(18,100, 160))
console.log(estaEntre2(3, 3, 150))
console.log(estaEntre2(3, 3, 150, true))