console.log(soma(3,4)) // <- exemplo da function declaration

// function declaration  --> um beneficio dessa funcao e poder imprimir no console antes de ser declarada, por conta que o interpretador do JavaScript primeiro le todas as funcoes preparadas
function soma(x, y) {
    return x + y
}

// function expression 
const sub = function(x, y) {
    return x - y
}

// named function expression

const mult = function mult(x, y) {
    return x*y
}

