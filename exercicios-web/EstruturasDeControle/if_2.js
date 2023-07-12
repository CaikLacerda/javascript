function teste1(num) {
    if(num > 7) 
        console.log(num)  // A funcao if permita criar comandos sem chaves, porem so ira valer para uma linha que esteja abaixo dela

    console.log('Final')
}

teste1 (6)
teste1(8)

function teste2(num) {
    if(num > 7); {  // Cuidado com o ;, nunca usar com as estruturas de controle
        console.log(num)
    }
}

teste2(8)
teste2(6)