let pessoa = {
    nome: 'Caik',
    idade: '18',
    curso: 'Sistemas'
}

function removerPropriedade(obj, propriedade) {
    const copia = Object.assign({}, obj)
    delete copia[propriedade]

    return copia
}

console.log(removerPropriedade(pessoa, 'idade'))