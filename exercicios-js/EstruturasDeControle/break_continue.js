const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums) {
    if(x == 5) {
        break   // Ele para a execucao dos lacos, quando o valor de if for true
    }
    console.log(`${x} = ${nums[x]}`)
}
console.log()

for(let y in nums) {
    if (y == 5) {
        continue  // Ele ira pular a lacada especifica declarado pelo FOR, continuando a proxima lacada
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for(a in nums) {     // Nao recomendavel usar por conta de ter metodos menos complicados
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim!')