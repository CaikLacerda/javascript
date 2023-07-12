// pessoa = 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- 456  -> {...}
//pessoa = {nome: 'Ana'}  // Vai causar erro pois voce nao pode atribuir outro objeto para uma constante

Object.freeze(pessoa) // Quando o objeto eh congelado ele nao pode mais ser alterado

pessoa.nome = 'Maria'
pessoa.sobrenome = 'Dias'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Caik'})
pessoaConstante.nome = 'Ander'
console.log(pessoaConstante)