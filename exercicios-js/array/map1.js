// o .map cria um NOVO array, possibilitando fazer mudancas nele atraves de alguma funcao

const nums = [1, 2, 3, 4, 5]

// For com proposito
let dobro = nums.map(function(e) {
    return e * 2
})

console.log(dobro)

const soma10 = e => e + 10   // Lembrando que para o uso do metodo MAP, a funcao sempre deve retornar algo
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)

let teste = nums.map( e => e + 1)
console.log(teste)