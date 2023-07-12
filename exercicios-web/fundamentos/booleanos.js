let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // 1 exclamacao eh usada para usar negacao, logo se usarmos 2 ela voltara ao valor verdadeiro

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))


let nome = ''

console.log(nome || 'Desconhecido') // Podemos usar operacao logica em cima de uma string


