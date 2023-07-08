console.log(ObjetoParaArray({ produto: 'Notebook', preco: 1599, modelo: 'Mac PRO'}))

function ObjetoParaArray(obj) {
    return Object.entries(obj)
}