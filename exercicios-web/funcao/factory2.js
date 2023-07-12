// Minha versao do desafio
function criarProduto( nome, preco) {
    return {
        nome: `${nome}`,
        preco: `${preco}`
    }
}

console.log(criarProduto('bicicleta', 200))
console.log(criarProduto('Patins', 100))

// Versao do curso
function criarProduto2(nome, preco) {
    return{
        nome,
        preco,
        deconto: 0.1
    }
}

console.log(criarProduto2('Ipad', 1259.90))
console.log(criarProduto2('Notebook', 2259.90))