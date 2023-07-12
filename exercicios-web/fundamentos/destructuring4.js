function rand([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min] // Invertendo os valores usando destructuring
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))  // Minimo sendo maior que o maximo vai acionar o if para a troca dos valores

console.log(rand([992]))     // Valor minimo sendo 992, gerara numeros aleatorios entre 992 e 1000

console.log(rand([, 10]))    // Definindo apenas o valor maximo utilizando uma virgula para separar os parametros

console.log(rand([]))        // Parametros vazio fara com que gere numeros aleatorios dos valores definidos na funcao

