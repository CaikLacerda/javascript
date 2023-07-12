// .concat gera um novo array, isto e, nao altera o array original

const filhas = ['Livia', 'Sofia']
const filhos = ['Lucas', 'Bruno']
const todos = filhas.concat(filhos, 'Fulano')

console.log(todos, filhas, filhos)

console.log([].concat([1,2], [3,4], 'Caik'))