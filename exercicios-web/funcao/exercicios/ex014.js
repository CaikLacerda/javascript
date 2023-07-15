function frutasDisponiveis(fruta) {
    switch(fruta) {
        case 'banana':
            return 'Nao vendemos esta fruta aqui.'
            break
        case 'kiwi':
            return 'Estamos com escassez de kiwis.'
            break
        case 'melancia':
            return 'Aqui esta, sao 3 reais o quilo.'
            break
        default:
            return 'Ocorreu um erro, verifique se digitou uma fruta valida'
    }
}

console.log(frutasDisponiveis('banana'))
console.log(frutasDisponiveis('kiwi'))
console.log(frutasDisponiveis('melancia'))
console.log(frutasDisponiveis('beterraba'))