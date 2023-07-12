// estrategia 1 para gerar valor padrao
function soma1(a, b, c) {  // Muito comum usar OU ||, para gerar valores padroes para variavel
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) // Essa estrategia gerara problemas quande se usar o numero 0, pois ele retornara falso

// estrategia 2, 3 e 4 para gerar valor padrao
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // se o A for diferente de undefined, recebe ele msm, caso nao, recebe 1
    b = 1 in arguments ? b : 1 // o 1 indica o indice do array, foi usado o 1, pois o b eh o segundo (0, 1, 2...)
    c = isNaN(c) ? 1 : c // Se ele nao for um numero, recebe o 1, caso nao, recebe o C
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrao do es2015
function soma3(a = 1 ,b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))