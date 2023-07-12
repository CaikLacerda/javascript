// CallBack eh basicamente ativar uma funcao para quando determinado evento ser chamado ou selecionado


const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)  // indice + 1, eh usado para que o array comece pelo 1, ja que todo array comeca pelo 0
}

fabricantes.forEach(imprimir) // a funcao forEach, serve para percorrer um array, e para cada elemento encontrado ele ira chamar a funcao que esta nos parenteses, que chamamos de CallBack
fabricantes.forEach(fabricante => console.log(fabricante))

