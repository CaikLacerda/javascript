const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    pesoa: 13
}

console.log(pessoa)
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Para permitir ou nao que seja mostrada no Object.keys
    writable: false, // Para permitir ou nao que seja alterada
    value: '01/01/2019' // Atribuicao do valor da chave
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // Todos atributos que vc passar depois do objeto de destino serao lancados para o primeiro(destino), e serao concatenados

console.log(obj)
console.log(Object.keys(obj))