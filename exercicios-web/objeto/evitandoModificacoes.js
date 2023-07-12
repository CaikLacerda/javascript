// Object.preventExtensions  <-- Com isso voce define que seu objeto nao podera ter atributos adicionados a ele
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensivel: ', Object.isExtensible(produto)) // A funcao .isExtensible testa se um objeto eh ou nao extensivel

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // Nao sera permitido adionar valores como nessa linha
delete produto.tag // Eh possivel excluir os atributos 

console.log(produto)
// Resumo: O objeto pode ser modificado, porem apenas ter atributos deletados, e nao adicionados



// Object.seal (selar) 
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa)) // .isSealed eh o teste para verificar se o obj esta selado

pessoa.nome = 'Caik'
pessoa.sobrenome = 'Dias'
delete pessoa.nome
console.log(pessoa)
// Resumo: Voce consegue apenas modificar os atributos presentes, nao podendo adicionar e nem deletar



// Object.freeze = selado + valores constantes
const carro = { modelo: 'Siena', portas: 4, cor: 'Preto'}
Object.freeze(carro)
console.log('Congelado: ', Object.isFrozen(carro))

carro.modelo = 'Ferrari'
carro.aerofolio = ' Nao Possui'
delete carro.portas
console.log(carro)
// Resumo: Basicamente quando o objeto eh congelado voce nao consegue fazer nenhum tipo de alteracao