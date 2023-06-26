function GetValorAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = GetValorAleatorioEntre(-1, 10)
    console.log(`Valor sorteado: ${opcao}.`)
}

console.log('Ate a proxima')