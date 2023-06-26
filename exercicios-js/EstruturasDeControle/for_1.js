let contador = 1
while(contador <= 10) {
    console.log(`O contador esta no ${contador}`)
    contador++
}

 for(let i = 1; i <= 10; i++) {  // Na variavel for, declaramos primeiro a variavel, depois a expressao, e depois o processo a ser feito
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) {  // length indica o ultimo valor de um array
    if(notas[i] >= 7) {
        console.log(`Situacao do aluno com a nota ${notas[i]}: Aprovado`)
    } else {
        console.log(`Situacao do aluno com nota ${notas[i]}: Reprovado!`)
    }
}
