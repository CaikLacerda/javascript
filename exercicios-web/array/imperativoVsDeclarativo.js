const alunos = [
    { nome: 'Joao', nota: 7.9},
    { nome: 'Maria', nota: 9.2}
]

// Imperativa  <-- Importa mais COMO deve ser feito o algoritmo, detalhando passo a passo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)



// Declarativa   <-- Interessa apenas O QUE tem que ser feito, nao importando como e feito
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)