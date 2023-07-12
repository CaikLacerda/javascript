let exercicio = ['Caik', 1, '3', 'web', 20]

function filtrarNumeros(array) {
    return array.filter(item => typeof item == 'number')
}

console.log(filtrarNumeros(['Caik', 1, '3', 'web', 20, 30]))
