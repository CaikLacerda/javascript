// funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2) // Por faltar um numero a ser declarado, o interpretador entende como a soma de um numero e um undefined, tendo resultado o NaN (Not a Number)
imprimirSoma(2,10,4,5,6,7,8) // ele somara apenas os 2 primeiros numeros e ignorara o resto

// Funcao com retorno
function soma(a =0 , b=0){
    return a + b
}

console.log(soma(2, 5))