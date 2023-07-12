function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log("Aprovado com " + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('Eh verdade... ' + valor)
    } else {
        console.log('Eh falso... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo('Eu sou o caik')