function classificarAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aluno aprovado com nota: ${notaCorrigida}`)
    } else {
        console.log(`Aluno reprovado com nota ${notaCorrigida}`)
    }
}

function arredondar(nota) {
    if(nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificarAluno(88)
classificarAluno(38)
classificarAluno(27)
classificarAluno(50)
