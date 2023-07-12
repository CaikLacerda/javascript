let a = 3  // variavel let cria um modulo para o arquivo, isto eh, nao estara arquivada no escopo local

global.b = 123 // definindo uma variavel dentro do escopo global

this.c = 456   // this === module.exports   -> acessar o escopo global
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

module.exports = {f: 456, g: false, h: 'teste'} // criando um objeto dentro de module.exports, ou seja, no escopo global
console.log(module.exports)
