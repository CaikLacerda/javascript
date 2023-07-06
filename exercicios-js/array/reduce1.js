const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.4, bolsista: true},
    { nome: 'Jose', nota: 8.0, bolsista: false},
    { nome: 'Ana', nota: 9.8, bolsista: true},
]

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(`Valor total: ${acumulador}    Nota somada: ${atual}`)
    return acumulador + atual
})

console.log('Valor final: ', resultado)

