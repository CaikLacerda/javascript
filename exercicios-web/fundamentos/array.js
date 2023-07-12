const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores [3])
console.log(valores[4]) // o JavaScript nao ira declarar um erro, apenas ira mostrar 'undefined'

valores[4] = 10
console.log(valores)
console.log(valores.length) // Mostra quantas unidades temos no array

valores.push({id: 3}, false, null, 'teste') // podemos usar o push para adicionar itens a um array, porem nao eh recomendado
console.log(valores)

console.log(valores.pop())

console.log(typeof valores)
