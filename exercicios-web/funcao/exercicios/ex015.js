function modelosCarros(modelo) {
    switch(modelo) {
        case 'hatch':
            return 'Compra efetuada com sucesso!'
            break
        case 'sedan': case 'motocicleta': case 'caminhonetes':
            return 'Tem certeza que nao prefere outro modelo?'
            break
        default:
            return 'Nao trabalhamos com este tipo de automovel aqui.'
    }
}

console.log(modelosCarros('hatch'))
console.log(modelosCarros('sedan'))
console.log(modelosCarros('motocicleta'))
console.log(modelosCarros('caminhonetes'))
console.log(modelosCarros('honda civic'))