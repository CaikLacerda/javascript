function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

// Quando voce cria um objeto a partir de uma funcao construtora, automaticamente a funcao __proto___ do objeto sera ligada ao prototipo da funcao construtora (NomeDaFuncao.prototype)

// Ao contrario de quando voce cria uma funcao no metodo padrao, que ela sera apontada ao Object.prototype

MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome eh ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Caik'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // Podemos mudar o prototipo de um objeto manualmente
obj3.nome = 'Obj3'
obj3.falar()


console.log()
// Resumindo tudo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype) // O prototipo de uma funcao construtora eh Function.prototype
console.log(Function.prototype.__proto__ === Object.prototype) // Seguindo a cadeia de prototipos a function.prototype eh ligada a Object.protype
console.log(Object.prototype.__proto__ === null)