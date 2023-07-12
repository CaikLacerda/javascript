const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(7)
imprimirResultado(4)
imprimirResultado('Epa!') // cuidado!!! Como o valor nao eh numerico ele sera considerado falso direto, imprimindo o valor de else

