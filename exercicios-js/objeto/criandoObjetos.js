// usando a notacao literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funcoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome  // Basicamente o This serve para deixar uma variavel publica, existem apenas dois modos, publico e privado
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Funcao Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return(salarioBase / 20) * (20 - faltas)
        }
    }
}
const f1 = criarFuncionario('Caik', 1157, 2)
console.log(f1.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma funcao famosa que retorna objeto..
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)