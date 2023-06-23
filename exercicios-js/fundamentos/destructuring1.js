// novo recurso do ES2015
// Destructuring nada mais eh do que voce desestruturar uma estrutura, isto eh, tirar elementos de um objeto por exemplo
// O destructuring quando se trata de um obejto usa-se chave {}, e no array usa-se colchetess []

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa // tire esses atributos desse objeto
console.log(nome, idade)

const{ nome: n, idade: i} = pessoa
console.log(n, i)

const{ sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep} } = pessoa
const { endereco} = pessoa
console.log(logradouro, numero, cep)
console.log(endereco)