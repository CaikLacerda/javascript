function verificarDia(dia) {
    switch(dia) {
        case 1: case 7:
            console.log('Fim de semana')
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia util')
            break
        default: 
            console.log('Dia Invalido')
    }
}

verificarDia(4)
verificarDia(10)
verificarDia(7)