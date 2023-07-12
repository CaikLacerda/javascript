const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }] 
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Caik',
        nota: 8.9
    }, {
        nome: 'Isabela',
        nota: 7.5
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)


// Usando flatMap (OBS: voce precisa criar o metodo flatMap pois nao esta disponivel na API)
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)