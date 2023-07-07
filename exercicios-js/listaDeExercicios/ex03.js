function calcularSalario(horasTrabalhadas, ganhoPorHora) {
    return console.log(`Salario igual a: R$${(ganhoPorHora * horasTrabalhadas).toFixed(2).replace('.', ',')}`)
}

calcularSalario(6, 60)