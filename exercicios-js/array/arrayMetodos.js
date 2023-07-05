const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop()  // Massa quebrou o carro! (Remove o ultimo elemento do array)
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento no final da lista
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento em primeiro na lista
console.log(pilotos)


// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')  // A partir do indice selecionado ira adicionar os elementos desejados
console.log(pilotos)

// remover
pilotos.splice(3, 1) // Massa quebrou dnv :(
console.log(pilotos)


const algunsPilotos = pilotos.slice(2)  // Gera um novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // O primeiro indice entra, porem o ultimo nao
console.log(algunsPilotos2)