function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) { // da a condicao para que seja feita a repeticao, nesse caso, continue ate a expressao ser false
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}`)
}

console.log('Ate a proxima')