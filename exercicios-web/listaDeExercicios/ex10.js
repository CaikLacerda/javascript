function simboloMais(quantidade) {
   resultado = ''
   
   for(let i = 0; i < quantidade; i++) {
    resultado += '+'
   }

   return resultado
}

console.log(simboloMais(5))
console.log(simboloMais(10))