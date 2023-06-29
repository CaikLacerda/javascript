// Funcao Factory, eh uma funcao que retorna um objeto

// Factory simples
function criarPessoa() {
    return {
        nome: 'Caik',
        sobrenome: 'Lacerda'
    }
}

console.log(criarPessoa())