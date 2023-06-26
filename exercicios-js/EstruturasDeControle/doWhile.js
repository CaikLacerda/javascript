function GetValorAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao  // Usando o Do While, o valor da variavel nao precisa ser declarado, pois o valor sera testado depois de ser rodado pelo menos uma vez

do {
    opcao = GetValorAleatorioEntre(-1, 10)
    console.log(`Valor sorteado: ${opcao}.`)
} while (opcao != -1)

console.log('Ate a proxima')