var numero = 1
{
    let numero = 2
    console.log('Dentro = ', numero)
}

console.log('Fora = ', numero)

// Nesse exemplo podemos ver que a variavel LET dentro de um bloco possui escopo local, por isso quando chamada a variavel fora do bloco tem o valor da variavel VAR
