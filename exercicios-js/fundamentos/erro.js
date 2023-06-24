/* 
    try = usado para testar o erro, caso ocorra ira cair para o catch
    catch = faz alguma acao baseado no erro acontecido
    throw = imprimi para o usuario uma mensagem desejada
    finally = Independente de ocorrer errou o nao, eh uma mensagem de fim do programa
*/


function imprimirMensagemErro(erro) {
    throw 'Ocorreu um erro durante o processamento'
}

function imprimirNomeGritado(objeto) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        imprimirMensagemErro(e)
    }
     finally {
        console.log('Fim')
    }
}

const obj = { name: 'Caik'}
imprimirNomeGritado()